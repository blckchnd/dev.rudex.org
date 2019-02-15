(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 2662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DatePicker = __webpack_require__(2663);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DatePicker2.default;
// export Calendar from './components/Calendar';

/***/ }),

/***/ 2663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outsideClickIgnoreClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(969);

var _moment2 = _interopRequireDefault(_moment);

var _reactTether = __webpack_require__(2664);

var _reactTether2 = _interopRequireDefault(_reactTether);

var _Calendar = __webpack_require__(2667);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _classnames2 = __webpack_require__(819);

var _classnames3 = _interopRequireDefault(_classnames2);

var _CustomTimePicker = __webpack_require__(2678);

var _CustomTimePicker2 = _interopRequireDefault(_CustomTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var outsideClickIgnoreClass = exports.outsideClickIgnoreClass = 'ignore--click--outside';

var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.lastValueChange = null, _this.state = {
      isOpen: false,
      momentValue: _this.props.defaultValue || null,
      inputValue: _this.getValue(_this.props.defaultValue, _this.props.timePicker),
      inputFormat: _this.props.inputFormat || _this.getInputFormat(_this.props.timePicker),
      timePicker: _this.props.timePicker,
      timePickerComponent: _this.props.timePicker ? _CustomTimePicker2.default : undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePicker, [{
    key: 'getInputFormat',
    value: function getInputFormat(timePicker) {
      if (!!timePicker) return 'YYYY/M/D hh:mm A';
      return 'YYYY/M/D';
    }
  }, {
    key: 'getValue',
    value: function getValue(inputValue, timePicker) {
      if (!inputValue) return '';
      var inputFormat = this.getInputFormat(timePicker);

      return inputValue.locale('en').format(this.props.inputFormat || inputFormat);
    }
  }, {
    key: 'setOpen',
    value: function setOpen(isOpen) {
      var momentValue = this.state.momentValue;

      if (momentValue && this.props.onChange) {
        this.handleChange(momentValue);
      }

      this.setState({ isOpen: isOpen });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.value) {
        this.setMomentValue(this.props.value, false);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      if ('value' in nextProps && nextProps.value !== this.props.value) {
        this.setMomentValue(nextProps.value);
      }

      if ('timePicker' in nextProps && nextProps.timePicker !== this.props.timePicker) {
        this.setState({
          timePicker: nextProps.timePicker,
          timePickerComponent: this.props.timePicker ? _CustomTimePicker2.default : undefined
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {

      if (!this.lastValueChange || !this.lastValueChange.valueOf) {
        // console.log('change 1');
        this.lastValueChange = value;
        this.props.onChange(value);
        return;
      }

      if (value.valueOf && value.valueOf() !== this.lastValueChange.valueOf()) {
        // console.log('change 2');
        this.lastValueChange = value;
        this.props.onChange(value);
      }
    }
  }, {
    key: 'setMomentValue',
    value: function setMomentValue(momentValue, doChange) {
      var _state = this.state,
          inputFormat = _state.inputFormat,
          timePicker = _state.timePicker;


      if (doChange !== false && this.props.onChange) {
        this.handleChange(momentValue);
      }

      // const inputValue = momentValue.format(inputFormat);

      var inputValue = this.getValue(momentValue, timePicker);

      this.setState({ momentValue: momentValue, inputValue: inputValue });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.setOpen(true);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var onBlur = this.props.onBlur;
      var _state2 = this.state,
          isOpen = _state2.isOpen,
          momentValue = _state2.momentValue,
          inputFormat = _state2.inputFormat;


      if (isOpen) {
        this.refs.input.focus();
      } else if (onBlur) {
        onBlur(event);
      }

      if (momentValue) {
        var inputValue = momentValue.format(inputFormat);
        this.setState({ inputValue: inputValue });
      }
    }
  }, {
    key: 'handleClickOutsideCalendar',
    value: function handleClickOutsideCalendar() {
      this.setOpen(false);
    }
  }, {
    key: 'handleSelectDay',
    value: function handleSelectDay(selectedDay) {
      var oldValue = this.state.momentValue;

      var momentValue = selectedDay.clone();

      if (oldValue) {
        momentValue = momentValue.set({
          hour: oldValue.hours(),
          minute: oldValue.minutes(),
          second: oldValue.seconds()
        });
      }

      this.setMomentValue(momentValue);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var inputFormat = this.state.inputFormat;

      var inputValue = event.target.value;
      var momentValue = (0, _moment2.default)(inputValue, inputFormat);

      if (momentValue.isValid()) {
        this.setState({ momentValue: momentValue });
      }

      this.setState({ inputValue: inputValue });
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick() {
      if (!this.props.disabled) {
        this.setOpen(true);
      }
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _state3 = this.state,
          isOpen = _state3.isOpen,
          inputValue = _state3.inputValue;


      var className = (0, _classnames3.default)(this.props.className, _defineProperty({}, outsideClickIgnoreClass, isOpen));

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          className: 'datepicker-input ' + className,
          type: 'text',
          ref: 'input',
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this),
          onChange: this.handleInputChange.bind(this),
          onClick: this.handleInputClick.bind(this),
          value: inputValue
        })
      );
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      var _state4 = this.state,
          momentValue = _state4.momentValue,
          TimePicker = _state4.timePickerComponent;
      var _props = this.props,
          onChange = _props.onChange,
          min = _props.min,
          max = _props.max,
          defaultMonth = _props.defaultMonth,
          styles = _props.styles,
          calendarContainerProps = _props.calendarContainerProps;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Calendar2.default,
          {
            min: min,
            max: max,
            selectedDay: momentValue,
            defaultMonth: defaultMonth,
            onSelect: this.handleSelectDay.bind(this),
            onClickOutside: this.handleClickOutsideCalendar.bind(this),
            outsideClickIgnoreClass: outsideClickIgnoreClass,
            styles: styles,
            containerProps: calendarContainerProps
          },
          TimePicker ? _react2.default.createElement(TimePicker, {
            min: min,
            max: max,
            momentValue: momentValue,
            setMomentValue: this.setMomentValue.bind(this)
          }) : null
        )
      );
    }
  }, {
    key: 'removeDate',
    value: function removeDate() {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange('');
      }
      this.setState({
        input: '',
        inputValue: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isOpen = this.state.isOpen;


      return _react2.default.createElement(
        _reactTether2.default,
        { className: this.props.wrapperClassName || '', attachment: this.props.pickerPosition || 'top center' },
        this.renderInput(),
        isOpen ? this.renderCalendar() : null
      );
    }
  }]);

  return DatePicker;
}(_react.Component);

DatePicker.propTypes = {
  value: _propTypes2.default.object,
  defaultValue: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  children: _propTypes2.default.node,
  min: _propTypes2.default.object,
  max: _propTypes2.default.object,
  defaultMonth: _propTypes2.default.object,
  inputFormat: _propTypes2.default.string,
  pickerPosition: _propTypes2.default.string,
  removable: _propTypes2.default.bool,
  styles: _propTypes2.default.object,
  calendarStyles: _propTypes2.default.object,
  calendarContainerProps: _propTypes2.default.object,
  timePicker: _propTypes2.default.bool
};
DatePicker.defaultProps = {
  styles: undefined,
  calendarContainerProps: {},
  timePicker: true
};
exports.default = DatePicker;

/***/ }),

/***/ 2664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TetherComponent = __webpack_require__(2665);

var _TetherComponent2 = _interopRequireDefault(_TetherComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TetherComponent2.default;
module.exports = exports['default'];

/***/ }),

/***/ 2665:
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

var _reactDom = __webpack_require__(398);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = __webpack_require__(2666);

var _tether2 = _interopRequireDefault(_tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (!_tether2.default) {
  console.error('It looks like Tether has not been included. Please load this dependency first https://github.com/HubSpot/tether');
}

var renderElementToPropTypes = [_propTypes2.default.string, _propTypes2.default.shape({
  appendChild: _propTypes2.default.func.isRequired
})];

var childrenPropType = function childrenPropType(_ref, propName, componentName) {
  var children = _ref.children;

  var childCount = _react.Children.count(children);
  if (childCount <= 0) {
    return new Error(componentName + ' expects at least one child to use as the target element.');
  } else if (childCount > 2) {
    return new Error('Only a max of two children allowed in ' + componentName + '.');
  }
};

var attachmentPositions = ['auto auto', 'top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var TetherComponent = function (_Component) {
  _inherits(TetherComponent, _Component);

  function TetherComponent() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, TetherComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TetherComponent.__proto__ || Object.getPrototypeOf(TetherComponent)).call.apply(_ref2, [this].concat(args))), _this), _this._targetNode = null, _this._elementParentNode = null, _this._tether = false, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TetherComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._targetNode = _reactDom2.default.findDOMNode(this);
      this._update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this._targetNode = _reactDom2.default.findDOMNode(this);
      this._update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroy();
    }
  }, {
    key: 'getTetherInstance',
    value: function getTetherInstance() {
      return this._tether;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this._tether.disable();
    }
  }, {
    key: 'enable',
    value: function enable() {
      this._tether.enable();
    }
  }, {
    key: 'on',
    value: function on(event, handler, ctx) {
      this._tether.on(event, handler, ctx);
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this._tether.once(event, handler, ctx);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      this._tether.off(event, handler);
    }
  }, {
    key: 'position',
    value: function position() {
      this._tether.position();
    }
  }, {
    key: '_registerEventListeners',
    value: function _registerEventListeners() {
      var _this2 = this,
          _arguments = arguments;

      this.on('update', function () {
        return _this2.props.onUpdate && _this2.props.onUpdate.apply(_this2, _arguments);
      });

      this.on('repositioned', function () {
        return _this2.props.onRepositioned && _this2.props.onRepositioned.apply(_this2, _arguments);
      });
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      if (this._elementParentNode) {
        _reactDom2.default.unmountComponentAtNode(this._elementParentNode);
        this._elementParentNode.parentNode.removeChild(this._elementParentNode);
      }

      if (this._tether) {
        this._tether.destroy();
      }

      this._elementParentNode = null;
      this._tether = null;
    }
  }, {
    key: '_update',
    value: function _update() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          renderElementTag = _props.renderElementTag;

      var elementComponent = _react.Children.toArray(children)[1];

      // if no element component provided, bail out
      if (!elementComponent) {
        // destroy Tether element if it has been created
        if (this._tether) {
          this._destroy();
        }
        return;
      }

      // create element node container if it hasn't been yet
      if (!this._elementParentNode) {
        // create a node that we can stick our content Component in
        this._elementParentNode = document.createElement(renderElementTag);

        // append node to the render node
        this._renderNode.appendChild(this._elementParentNode);
      }

      // render element component into the DOM
      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, elementComponent, this._elementParentNode, function () {
        // if we're not destroyed, update Tether once the subtree has finished rendering
        if (_this3._elementParentNode) {
          _this3._updateTether();
        }
      });
    }
  }, {
    key: '_updateTether',
    value: function _updateTether() {
      var _this4 = this;

      var _props2 = this.props,
          children = _props2.children,
          renderElementTag = _props2.renderElementTag,
          renderElementTo = _props2.renderElementTo,
          id = _props2.id,
          className = _props2.className,
          style = _props2.style,
          options = _objectWithoutProperties(_props2, ['children', 'renderElementTag', 'renderElementTo', 'id', 'className', 'style']);

      var tetherOptions = _extends({
        target: this._targetNode,
        element: this._elementParentNode
      }, options);

      if (id) {
        this._elementParentNode.id = id;
      }

      if (className) {
        this._elementParentNode.className = className;
      }

      if (style) {
        Object.keys(style).forEach(function (key) {
          _this4._elementParentNode.style[key] = style[key];
        });
      }

      if (!this._tether) {
        this._tether = new _tether2.default(tetherOptions);
        this._registerEventListeners();
      } else {
        this._tether.setOptions(tetherOptions);
      }

      this._tether.position();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.toArray(this.props.children)[0];
    }
  }, {
    key: '_renderNode',
    get: function get() {
      var renderElementTo = this.props.renderElementTo;

      if (typeof renderElementTo === 'string') {
        return document.querySelector(renderElementTo);
      } else {
        return renderElementTo || document.body;
      }
    }
  }]);

  return TetherComponent;
}(_react.Component);

TetherComponent.propTypes = {
  renderElementTag: _propTypes2.default.string,
  renderElementTo: _propTypes2.default.oneOfType(renderElementToPropTypes),
  attachment: _propTypes2.default.oneOf(attachmentPositions).isRequired,
  targetAttachment: _propTypes2.default.oneOf(attachmentPositions),
  offset: _propTypes2.default.string,
  targetOffset: _propTypes2.default.string,
  targetModifier: _propTypes2.default.string,
  enabled: _propTypes2.default.bool,
  classes: _propTypes2.default.object,
  classPrefix: _propTypes2.default.string,
  optimizations: _propTypes2.default.object,
  constraints: _propTypes2.default.array,
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  onUpdate: _propTypes2.default.func,
  onRepositioned: _propTypes2.default.func,
  children: childrenPropType
};
TetherComponent.defaultProps = {
  renderElementTag: 'div',
  renderElementTo: null
};
exports.default = TetherComponent;
module.exports = exports['default'];

/***/ }),

/***/ 2666:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.4 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance === 'object' && typeof performance.now === 'function') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          if (this.element.parentNode !== this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          }
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),

/***/ 2667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DaysViewHeading = __webpack_require__(2668);

var _DaysViewHeading2 = _interopRequireDefault(_DaysViewHeading);

var _DaysOfWeek = __webpack_require__(2671);

var _DaysOfWeek2 = _interopRequireDefault(_DaysOfWeek);

var _MonthSelector = __webpack_require__(2672);

var _MonthSelector2 = _interopRequireDefault(_MonthSelector);

var _Day = __webpack_require__(2674);

var _Day2 = _interopRequireDefault(_Day);

var _momentHelper = __webpack_require__(2675);

var _moment = __webpack_require__(969);

var _moment2 = _interopRequireDefault(_moment);

var _reactOnclickoutside = __webpack_require__(2676);

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _DefaultStyles = __webpack_require__(2677);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = exports.Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      month: _this.props.defaultMonth || _this.props.selectedDay || (0, _moment2.default)(_this.props.min),
      selectedDay: _this.props.selectedDay || null,
      mode: 'days'
    }, _this.handleClickOnDay = function (selectedDay) {
      var onSelect = _this.props.onSelect;

      _this.selectDay(selectedDay);
      if (onSelect) {
        onSelect(selectedDay);
      }
    }, _this.days = null, _this.lastRenderedMonth = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        nextMonth: this.nextMonth.bind(this),
        prevMonth: this.prevMonth.bind(this),
        setCalendarMode: this.setMode.bind(this),
        setMonth: this.setMonth.bind(this),
        setType: this.setMonth.bind(this)
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var selectedDay = _ref2.selectedDay,
          defaultMonth = _ref2.defaultMonth,
          min = _ref2.min;

      if (this.props.selectedDay !== selectedDay) {
        this.selectDay(selectedDay);
      } else if (defaultMonth && this.props.defaultMonth !== defaultMonth && this.state.month === this.props.defaultMonth) {
        this.setMonth(defaultMonth);
      } else if (min && this.props.min !== min && this.state.month.isSame(this.props.min)) {
        this.setMonth(min.clone());
      }
    }
  }, {
    key: 'setMode',
    value: function setMode(mode) {
      this.setState({ mode: mode });
    }
  }, {
    key: 'setMonth',
    value: function setMonth(month) {
      this.setState({ month: month });
    }
  }, {
    key: 'setType',
    value: function setType(type) {
      this.setState({ type: type });
    }
  }, {
    key: 'nextMonth',
    value: function nextMonth() {
      var monthFormat = 'Month';

      this.setState({
        month: this.state.month.clone().add(1, monthFormat)
      });
    }
  }, {
    key: 'prevMonth',
    value: function prevMonth() {
      var monthFormat = 'Month';

      this.setState({
        month: this.state.month.clone().subtract(1, monthFormat)
      });
    }
  }, {
    key: 'selectDay',
    value: function selectDay(selectedDay) {
      var month = this.state.month;

      var yearMonthFormat = 'YYYYMM';

      // Because there's no `m1.isSame(m2, 'jMonth')`
      if (selectedDay.format(yearMonthFormat) !== month.format(yearMonthFormat)) {
        this.setState({ month: selectedDay });
      }

      this.setState({ selectedDay: selectedDay });
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      if (this.props.onClickOutside) {
        this.props.onClickOutside(event);
      }
    }
  }, {
    key: 'renderMonthSelector',
    value: function renderMonthSelector() {
      var month = this.state.month;
      var styles = this.props.styles;

      return _react2.default.createElement(_MonthSelector2.default, { styles: styles, selectedMonth: month });
    }
  }, {
    key: 'renderDays',
    value: function renderDays() {
      var _this2 = this;

      var _state = this.state,
          month = _state.month,
          selectedDay = _state.selectedDay;
      var _props = this.props,
          children = _props.children,
          min = _props.min,
          max = _props.max,
          styles = _props.styles,
          outsideClickIgnoreClass = _props.outsideClickIgnoreClass;


      var days = void 0;

      if (this.lastRenderedMonth === month) {
        days = this.days;
      } else {
        days = (0, _momentHelper.getDaysOfMonth)(month);
        this.days = days;
        this.lastRenderedMonth = month;
      }

      var monthFormat = 'MM';
      var dateFormat = 'YYYYMMDD';

      return _react2.default.createElement(
        'div',
        null,
        children,
        _react2.default.createElement(_DaysViewHeading2.default, { styles: styles, month: month }),
        _react2.default.createElement(_DaysOfWeek2.default, { styles: styles }),
        _react2.default.createElement(
          'div',
          { className: styles.dayPickerContainer },
          days.map(function (day) {
            var isCurrentMonth = day.format(monthFormat) === month.format(monthFormat);
            var disabled = (min ? day.isBefore(min) : false) || (max ? day.isAfter(max) : false);
            var selected = selectedDay ? selectedDay.isSame(day, 'day') : false;

            return _react2.default.createElement(_Day2.default, {
              key: day.format(dateFormat),
              onClick: _this2.handleClickOnDay,
              day: day,
              disabled: disabled,
              selected: selected,
              isCurrentMonth: isCurrentMonth,
              styles: styles
            });
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          selectedDay = _props2.selectedDay,
          min = _props2.min,
          max = _props2.max,
          onClickOutside = _props2.onClickOutside,
          outsideClickIgnoreClass = _props2.outsideClickIgnoreClass,
          styles = _props2.styles,
          className = _props2.className;
      var mode = this.state.mode;


      return _react2.default.createElement(
        'div',
        { className: styles.calendarContainer + ' ' + className },
        mode === 'monthSelector' ? this.renderMonthSelector() : this.renderDays()
      );
    }
  }]);

  return Calendar;
}(_react.Component);

Calendar.propTypes = {
  min: _propTypes2.default.object,
  max: _propTypes2.default.object,
  styles: _propTypes2.default.object,
  selectedDay: _propTypes2.default.object,
  defaultMonth: _propTypes2.default.object,
  onSelect: _propTypes2.default.func,
  onClickOutside: _propTypes2.default.func,
  containerProps: _propTypes2.default.object
};
Calendar.childContextTypes = {
  nextMonth: _propTypes2.default.func.isRequired,
  prevMonth: _propTypes2.default.func.isRequired,
  setCalendarMode: _propTypes2.default.func.isRequired,
  setMonth: _propTypes2.default.func.isRequired,
  setType: _propTypes2.default.func.isRequired
};
Calendar.defaultProps = {
  styles: _DefaultStyles.defaultStyles,
  containerProps: {}
};
exports.default = (0, _reactOnclickoutside2.default)(Calendar);

/***/ }),

/***/ 2668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _persian = __webpack_require__(2669);

var _assets = __webpack_require__(2670);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heading = function (_Component) {
  _inherits(Heading, _Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
  }

  _createClass(Heading, [{
    key: 'handleMonthClick',
    value: function handleMonthClick(event) {
      var setCalendarMode = this.context.setCalendarMode;

      event.preventDefault();
      setCalendarMode('monthSelector');
    }
  }, {
    key: 'render',
    value: function render() {
      var _context = this.context,
          nextMonth = _context.nextMonth,
          prevMonth = _context.prevMonth;
      var _props = this.props,
          month = _props.month,
          styles = _props.styles;


      return _react2.default.createElement(
        'div',
        { className: styles.heading },
        _react2.default.createElement(
          'button',
          { className: styles.title, onClick: this.handleMonthClick.bind(this) },
          month.locale('en').format('MMMM YYYY')
        ),
        _react2.default.createElement('button', {
          type: 'button',
          title: '\u0645\u0627\u0647 \u0642\u0628\u0644',
          className: styles.prev,
          onClick: prevMonth,
          dangerouslySetInnerHTML: _assets.rightArrow
        }),
        _react2.default.createElement('button', {
          type: 'button',
          title: '\u0645\u0627\u0647 \u0628\u0639\u062F',
          className: styles.next,
          onClick: nextMonth,
          dangerouslySetInnerHTML: _assets.leftArrow
        })
      );
    }
  }]);

  return Heading;
}(_react.Component);

Heading.propTypes = {
  month: _propTypes2.default.object.isRequired
};
Heading.contextTypes = {
  styles: _propTypes2.default.object,
  nextMonth: _propTypes2.default.func.isRequired,
  prevMonth: _propTypes2.default.func.isRequired,
  setCalendarMode: _propTypes2.default.func.isRequired
};
exports.default = Heading;

/***/ }),

/***/ 2669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persianNumber = persianNumber;
var latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
var latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];

function prepareNumber(input) {
  var string = void 0;
  if (typeof input === 'number') {
    string = input.toString();
  } else if (typeof input === 'undefined') {
    string = '';
  } else {
    string = input;
  }

  return string;
}

function latinToPersian(string) {
  var result = string;

  for (var index = 0; index < 10; index++) {
    result = result.replace(latinNumbers[index], latinToPersianMap[index]);
  }

  return result;
}

function persianNumber(input) {
  return latinToPersian(prepareNumber(input));
}

/***/ }),

/***/ 2670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var leftArrow = exports.leftArrow = {
  __html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 314.5 314.5" style="enable-background:new 0 0 314.5 314.5;" xml:space="preserve"><g><path class="arrow-icon" d="M125,157.5l116-116c10-10,10-24,0-34s-25-10-35,0l-133,133c-5,5-7,10-7,17s2,12,7,17l133,133c5,5,11,7,17,7s13-2,18-7c10-10,10-24,0-34L125,157.5z"/></g></svg>'
};

var rightArrow = exports.rightArrow = {
  __html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 315.5 315.5" style="enable-background:new 0 0 315.5 315.5;" xml:space="preserve"><g><path class="arrow-icon" d="M242,141L109,8c-5-5-12-8-18-8S79,3,74,8c-10,10-10,24,0,34l116,116L74,274c-10,10-10,24,0,34s25,10,35,0l133-133c5-5,7-11,7-17C249,151,247,146,242,141z"/></g></svg>'
};

var remove = exports.remove = {
  __html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982;" xml:space="preserve"><g><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312   c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312   l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937   c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z" fill="#555555"/></g></svg>'
};

/***/ }),

/***/ 2671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Day of week names for use in date-picker heading
var dayOfWeekNamesGregorian = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var DaysOfWeek = function (_Component) {
  _inherits(DaysOfWeek, _Component);

  function DaysOfWeek() {
    _classCallCheck(this, DaysOfWeek);

    return _possibleConstructorReturn(this, (DaysOfWeek.__proto__ || Object.getPrototypeOf(DaysOfWeek)).apply(this, arguments));
  }

  _createClass(DaysOfWeek, [{
    key: 'render',
    value: function render() {
      var styles = this.props.styles;


      var dayOfWeekNames = dayOfWeekNamesGregorian;

      return _react2.default.createElement(
        'div',
        { className: styles.daysOfWeek },
        dayOfWeekNames.map(function (name, key) {
          return _react2.default.createElement(
            'div',
            { key: key },
            name
          );
        })
      );
    }
  }]);

  return DaysOfWeek;
}(_react.Component);

DaysOfWeek.propTypes = {
  styles: _propTypes2.default.object
};
exports.default = DaysOfWeek;

/***/ }),

/***/ 2672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(969);

var _moment2 = _interopRequireDefault(_moment);

var _classnames2 = __webpack_require__(819);

var _classnames3 = _interopRequireDefault(_classnames2);

var _MonthsViewHeading = __webpack_require__(2673);

var _MonthsViewHeading2 = _interopRequireDefault(_MonthsViewHeading);

var _assets = __webpack_require__(2670);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var monthsGregorian = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var MonthSelector = function (_Component) {
  _inherits(MonthSelector, _Component);

  function MonthSelector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MonthSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonthSelector.__proto__ || Object.getPrototypeOf(MonthSelector)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      year: _this.props.selectedMonth
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MonthSelector, [{
    key: 'nextYear',
    value: function nextYear() {
      this.setState({
        year: this.state.year.clone().add(1, 'year')
      });
    }
  }, {
    key: 'prevYear',
    value: function prevYear() {
      this.setState({
        year: this.state.year.clone().subtract(1, 'year')
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(key) {
      var _context = this.context,
          setMonth = _context.setMonth,
          setCalendarMode = _context.setCalendarMode;

      var monthYearFormat = 'M-YYYY';
      setMonth((0, _moment2.default)(key, monthYearFormat));
      setCalendarMode('days');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var year = this.state.year;
      var _props = this.props,
          selectedMonth = _props.selectedMonth,
          styles = _props.styles;

      var yearFormat = 'YYYY';
      var monthYearFormat = 'M-YYYY';
      var months = monthsGregorian;

      return _react2.default.createElement(
        'div',
        { className: 'month-selector' },
        _react2.default.createElement(_MonthsViewHeading2.default, {
          styles: styles,
          year: year,
          onNextYear: this.nextYear.bind(this),
          onPrevYear: this.prevYear.bind(this)
        }),
        _react2.default.createElement(
          'div',
          { className: styles.monthsList },
          months.map(function (name, key) {
            var buttonFingerprint = key + 1 + '-' + year.format(yearFormat);
            var selectedMonthFingerprint = selectedMonth.format(monthYearFormat);
            var isCurrent = selectedMonthFingerprint === buttonFingerprint;

            var className = (0, _classnames3.default)(styles.monthWrapper, _defineProperty({}, styles.selected, isCurrent));

            return _react2.default.createElement(
              'div',
              { key: key, className: className },
              _react2.default.createElement(
                'button',
                { onClick: _this2.handleClick.bind(_this2, buttonFingerprint) },
                name
              )
            );
          })
        )
      );
    }
  }]);

  return MonthSelector;
}(_react.Component);

MonthSelector.propTypes = {
  styles: _propTypes2.default.object,
  selectedMonth: _propTypes2.default.object.isRequired
};
MonthSelector.contextTypes = {
  setCalendarMode: _propTypes2.default.func.isRequired,
  setMonth: _propTypes2.default.func.isRequired
};
exports.default = MonthSelector;

/***/ }),

/***/ 2673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _persian = __webpack_require__(2669);

var _assets = __webpack_require__(2670);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthsViewHeading = function (_Component) {
  _inherits(MonthsViewHeading, _Component);

  function MonthsViewHeading() {
    _classCallCheck(this, MonthsViewHeading);

    return _possibleConstructorReturn(this, (MonthsViewHeading.__proto__ || Object.getPrototypeOf(MonthsViewHeading)).apply(this, arguments));
  }

  _createClass(MonthsViewHeading, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          year = _props.year,
          styles = _props.styles,
          type = _props.type;


      var yearFormat = 'YYYY';

      return _react2.default.createElement(
        'div',
        { className: styles.heading },
        _react2.default.createElement(
          'span',
          { className: styles.title },
          year.format(yearFormat)
        ),
        _react2.default.createElement('button', {
          type: 'button',
          title: "before year",
          style: styles.navButton,
          className: styles.prev,
          onClick: this.props.onPrevYear,
          dangerouslySetInnerHTML: _assets.rightArrow
        }),
        _react2.default.createElement('button', {
          type: 'button',
          title: "next year",
          style: styles.navButton,
          className: styles.next,
          onClick: this.props.onNextYear,
          dangerouslySetInnerHTML: _assets.leftArrow
        })
      );
    }
  }]);

  return MonthsViewHeading;
}(_react.Component);

MonthsViewHeading.propTypes = {
  year: _propTypes2.default.object.isRequired,
  onNextYear: _propTypes2.default.func.isRequired,
  onPrevYear: _propTypes2.default.func.isRequired
};
MonthsViewHeading.contextTypes = {
  styles: _propTypes2.default.object,
  type: _propTypes2.default.number
};
exports.default = MonthsViewHeading;

/***/ }),

/***/ 2674:
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

var _classnames2 = __webpack_require__(819);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  wrapper: {},
  button: {
    outline: 'none',
    cursor: 'pointer'
  }
};

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.selected !== this.props.selected || nextProps.disabled !== this.props.disabled || nextProps.isCurrentMonth !== this.props.isCurrentMonth;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      var _props = this.props,
          onClick = _props.onClick,
          day = _props.day;


      if (onClick) {
        onClick(day);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props2 = this.props,
          day = _props2.day,
          disabled = _props2.disabled,
          selected = _props2.selected,
          isCurrentMonth = _props2.isCurrentMonth,
          onClick = _props2.onClick,
          styles = _props2.styles,
          rest = _objectWithoutProperties(_props2, ['day', 'disabled', 'selected', 'isCurrentMonth', 'onClick', 'styles']);

      var className = (0, _classnames3.default)(styles.dayWrapper, (_classnames = {}, _defineProperty(_classnames, styles.selected, selected), _defineProperty(_classnames, styles.currentMonth, isCurrentMonth), _classnames));

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'button',
          _extends({
            type: 'button',
            onClick: this.handleClick.bind(this),
            disabled: disabled
          }, rest),
          day.format('D')
        )
      );
    }
  }]);

  return Day;
}(_react.Component);

Day.propTypes = {
  day: _propTypes2.default.object.isRequired,
  isCurrentMonth: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};
exports.default = Day;

/***/ }),

/***/ 2675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDaysOfMonth = getDaysOfMonth;
/**
 * Get days of a month that should be shown on a month page
 *
 * @param month A moment object
 * @returns {Array}
 */
function getDaysOfMonth(month) {
  var days = [];

  var monthFormat = 'Month';
  var dayOffset = 0;

  var current = month.clone().startOf(monthFormat);
  var end = month.clone().endOf(monthFormat);

  // Set start to the first day of week in the last month
  current.subtract((current.day() + dayOffset) % 7, 'days');

  // Set end to the last day of week in the next month
  end.add(6 - (end.day() + dayOffset) % 7, 'days');

  while (current.isBefore(end)) {
    days.push(current.clone());
    current.add(1, 'days');
  }

  return days;
}

/***/ }),

/***/ 2676:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * A higher-order-component for handling onClickOutside for React components.
 */
(function(root) {

  // administrative
  var registeredComponents = [];
  var handlers = [];
  var IGNORE_CLASS = 'ignore-react-onclickoutside';
  var DEFAULT_EVENTS = ['mousedown', 'touchstart'];

  /**
   * Check whether some DOM node is our Component's node.
   */
  var isNodeFound = function(current, componentNode, ignoreClass) {
    if (current === componentNode) {
      return true;
    }
    // SVG <use/> elements do not technically reside in the rendered DOM, so
    // they do not have classList directly, but they offer a link to their
    // corresponding element, which can have classList. This extra check is for
    // that case.
    // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
    // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
    if (current.correspondingElement) {
      return current.correspondingElement.classList.contains(ignoreClass);
    }
    return current.classList.contains(ignoreClass);
  };

  /**
   * Try to find our node in a hierarchy of nodes, returning the document
   * node as highest noode if our node is not found in the path up.
   */
  var findHighest = function(current, componentNode, ignoreClass) {
    if (current === componentNode) {
      return true;
    }

    // If source=local then this event came from 'somewhere'
    // inside and should be ignored. We could handle this with
    // a layered approach, too, but that requires going back to
    // thinking in terms of Dom node nesting, running counter
    // to React's 'you shouldn't care about the DOM' philosophy.
    while(current.parentNode) {
      if (isNodeFound(current, componentNode, ignoreClass)) {
        return true;
      }
      current = current.parentNode;
    }
    return current;
  };

  /**
   * Check if the browser scrollbar was clicked
   */
  var clickedScrollbar = function(evt) {
    return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
  };

  /**
   * Generate the event handler that checks whether a clicked DOM node
   * is inside of, or lives outside of, our Component's node tree.
   */
  var generateOutsideCheck = function(componentNode, componentInstance, eventHandler, ignoreClass, excludeScrollbar, preventDefault, stopPropagation) {
    return function(evt) {
      if (preventDefault) {
        evt.preventDefault();
      }
      if (stopPropagation) {
        evt.stopPropagation();
      }
      var current = evt.target;
      if((excludeScrollbar && clickedScrollbar(evt)) || (findHighest(current, componentNode, ignoreClass) !== document)) {
        return;
      }
      eventHandler(evt);
    };
  };

  /**
   * This function generates the HOC function that you'll use
   * in order to impart onOutsideClick listening to an
   * arbitrary component. It gets called at the end of the
   * bootstrapping code to yield an instance of the
   * onClickOutsideHOC function defined inside setupHOC().
   */
  function setupHOC(root, React, ReactDOM, createReactClass) {

    // The actual Component-wrapping HOC:
    return function onClickOutsideHOC(Component, config) {
      var wrapComponentWithOnClickOutsideHandling = createReactClass({
        statics: {
          /**
           * Access the wrapped Component's class.
           */
          getClass: function() {
            if (Component.getClass) {
              return Component.getClass();
            }
            return Component;
          }
        },

        /**
         * Access the wrapped Component's instance.
         */
        getInstance: function() {
          return Component.prototype.isReactComponent ? this.refs.instance : this;
        },

        // this is given meaning in componentDidMount
        __outsideClickHandler: function() {},

        getDefaultProps: function() {
          return {
            excludeScrollbar: config && config.excludeScrollbar
          };
        },

        /**
         * Add click listeners to the current document,
         * linked to this component's state.
         */
        componentDidMount: function() {
          // If we are in an environment without a DOM such
          // as shallow rendering or snapshots then we exit
          // early to prevent any unhandled errors being thrown.
          if (typeof document === 'undefined' || !document.createElement){
            return;
          }

          var instance = this.getInstance();
          var clickOutsideHandler;

          if(config && typeof config.handleClickOutside === 'function') {
            clickOutsideHandler = config.handleClickOutside(instance);
            if(typeof clickOutsideHandler !== 'function') {
              throw new Error('Component lacks a function for processing outside click events specified by the handleClickOutside config option.');
            }
          } else if(typeof instance.handleClickOutside === 'function') {
            if (React.Component.prototype.isPrototypeOf(instance)) {
              clickOutsideHandler = instance.handleClickOutside.bind(instance);
            } else {
              clickOutsideHandler = instance.handleClickOutside;
            }
          } else if(typeof instance.props.handleClickOutside === 'function') {
            clickOutsideHandler = instance.props.handleClickOutside;
          } else {
            throw new Error('Component lacks a handleClickOutside(event) function for processing outside click events.');
          }

          var componentNode = ReactDOM.findDOMNode(instance);
          if (componentNode === null) {
            console.warn('Antipattern warning: there was no DOM node associated with the component that is being wrapped by outsideClick.');
            console.warn([
              'This is typically caused by having a component that starts life with a render function that',
              'returns `null` (due to a state or props value), so that the component \'exist\' in the React',
              'chain of components, but not in the DOM.\n\nInstead, you need to refactor your code so that the',
              'decision of whether or not to show your component is handled by the parent, in their render()',
              'function.\n\nIn code, rather than:\n\n  A{render(){return check? <.../> : null;}\n  B{render(){<A check=... />}\n\nmake sure that you',
              'use:\n\n  A{render(){return <.../>}\n  B{render(){return <...>{ check ? <A/> : null }<...>}}\n\nThat is:',
              'the parent is always responsible for deciding whether or not to render any of its children.',
              'It is not the child\'s responsibility to decide whether a render instruction from above should',
              'get ignored or not by returning `null`.\n\nWhen any component gets its render() function called,',
              'that is the signal that it should be rendering its part of the UI. It may in turn decide not to',
              'render all of *its* children, but it should never return `null` for itself. It is not responsible',
              'for that decision.'
            ].join(' '));
          }

          var fn = this.__outsideClickHandler = generateOutsideCheck(
            componentNode,
            instance,
            clickOutsideHandler,
            this.props.outsideClickIgnoreClass || IGNORE_CLASS,
            this.props.excludeScrollbar, // fallback not needed, prop always exists because of getDefaultProps
            this.props.preventDefault || false,
            this.props.stopPropagation || false
          );

          var pos = registeredComponents.length;
          registeredComponents.push(this);
          handlers[pos] = fn;

          // If there is a truthy disableOnClickOutside property for this
          // component, don't immediately start listening for outside events.
          if (!this.props.disableOnClickOutside) {
            this.enableOnClickOutside();
          }
        },

        /**
        * Track for disableOnClickOutside props changes and enable/disable click outside
        */
        componentWillReceiveProps: function(nextProps) {
          if (this.props.disableOnClickOutside && !nextProps.disableOnClickOutside) {
            this.enableOnClickOutside();
          } else if (!this.props.disableOnClickOutside && nextProps.disableOnClickOutside) {
            this.disableOnClickOutside();
          }
        },

        /**
         * Remove the document's event listeners
         */
        componentWillUnmount: function() {
          this.disableOnClickOutside();
          this.__outsideClickHandler = false;
          var pos = registeredComponents.indexOf(this);
          if( pos>-1) {
            // clean up so we don't leak memory
            if (handlers[pos]) { handlers.splice(pos, 1); }
            registeredComponents.splice(pos, 1);
          }
        },

        /**
         * Can be called to explicitly enable event listening
         * for clicks and touches outside of this element.
         */
        enableOnClickOutside: function() {
          var fn = this.__outsideClickHandler;
          if (typeof document !== 'undefined') {
            var events = this.props.eventTypes || DEFAULT_EVENTS;
            if (!events.forEach) {
              events = [events];
            }
            events.forEach(function (eventName) {
              document.addEventListener(eventName, fn);
            });
          }
        },

        /**
         * Can be called to explicitly disable event listening
         * for clicks and touches outside of this element.
         */
        disableOnClickOutside: function() {
          var fn = this.__outsideClickHandler;
          if (typeof document !== 'undefined') {
            var events = this.props.eventTypes || DEFAULT_EVENTS;
            if (!events.forEach) {
              events = [events];
            }
            events.forEach(function (eventName) {
              document.removeEventListener(eventName, fn);
            });
          }
        },

        /**
         * Pass-through render
         */
        render: function() {
          var passedProps = this.props;
          var props = {};
          Object.keys(this.props).forEach(function(key) {
            if (key !== 'excludeScrollbar') {
              props[key] = passedProps[key];
            }
          });
          if (Component.prototype.isReactComponent) {
            props.ref = 'instance';
          }
          props.disableOnClickOutside = this.disableOnClickOutside;
          props.enableOnClickOutside = this.enableOnClickOutside;
          return React.createElement(Component, props);
        }
      });

      // Add display name for React devtools
      (function bindWrappedComponentName(c, wrapper) {
        var componentName = c.displayName || c.name || 'Component';
        wrapper.displayName = 'OnClickOutside(' + componentName + ')';
      }(Component, wrapComponentWithOnClickOutsideHandling));

      return wrapComponentWithOnClickOutsideHandling;
    };
  }

  /**
   * This function sets up the library in ways that
   * work with the various modulde loading solutions
   * used in JavaScript land today.
   */
  function setupBinding(root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(389),__webpack_require__(398),__webpack_require__(989)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(React, ReactDom, createReactClass) {
        if (!createReactClass) createReactClass = React.createClass;
        return factory(root, React, ReactDom, createReactClass);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var createReactClass; }
  }

  // Make it all happen
  setupBinding(root, setupHOC);

}(this));


/***/ }),

/***/ 2677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultStyles = exports.defaultStyles = {
  calendarContainer: 'calendarContainer',
  heading: 'heading',
  prev: 'prev',
  next: 'next',
  title: 'title',
  dayWrapper: 'dayWrapper',
  currentMonth: 'currentMonth',
  daysOfWeek: 'daysOfWeek',
  monthsList: 'monthsList',
  selected: 'selected',
  dayPickerContainer: 'dayPickerContainer'
};

/***/ }),

/***/ 2678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(969);

var _moment2 = _interopRequireDefault(_moment);

var _TimePicker = __webpack_require__(2679);

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _DatePicker = __webpack_require__(2663);

var _persian = __webpack_require__(2669);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var disabledMinutes = function disabledMinutes() {
  return [].concat(_toConsumableArray(Array(60))).map(function (v, i) {
    return i;
  }).filter(function (v) {
    return v % 5 !== 0;
  });
};

var MyTimePicker = function (_Component) {
  _inherits(MyTimePicker, _Component);

  function MyTimePicker() {
    _classCallCheck(this, MyTimePicker);

    return _possibleConstructorReturn(this, (MyTimePicker.__proto__ || Object.getPrototypeOf(MyTimePicker)).apply(this, arguments));
  }

  _createClass(MyTimePicker, [{
    key: 'handleChange',
    value: function handleChange(value) {
      var _props = this.props,
          momentValue = _props.momentValue,
          min = _props.min;

      var newValue = void 0;

      if (momentValue) {
        newValue = momentValue.clone();
      } else if (min && min.isAfter((0, _moment2.default)())) {
        newValue = min.clone();
      } else {
        newValue = (0, _moment2.default)(value);
      }

      newValue.hour(value.hour());
      newValue.minute(value.minute());

      this.props.setMomentValue(newValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var momentValue = this.props.momentValue;


      var timeLabel = 'time:';

      return momentValue ? _react2.default.createElement(
        'div',
        { className: 'time-picker-container' },
        _react2.default.createElement(
          'div',
          { className: 'time-label' },
          timeLabel
        ),
        _react2.default.createElement(
          'div',
          { className: 'time-picker-panel' },
          _react2.default.createElement(_TimePicker2.default, {
            showAMPM: true,
            showSecond: false,
            allowEmpty: false,
            value: momentValue,
            className: _DatePicker.outsideClickIgnoreClass,
            popupClassName: _DatePicker.outsideClickIgnoreClass,
            panelClassName: _DatePicker.outsideClickIgnoreClass + ' time-picker-panel',
            onChange: this.handleChange.bind(this),
            disabledMinutes: disabledMinutes,
            formatter: function formatter(value) {
              return (0, _persian.persianNumber)(value);
            },
            hideDisabledOptions: true
          })
        ),
        _react2.default.createElement('div', { style: { clear: 'both' } })
      ) : null;
    }
  }]);

  return MyTimePicker;
}(_react.Component);

MyTimePicker.propTypes = {
  momentValue: _propTypes2.default.object,
  setMomentValue: _propTypes2.default.func
};
exports.default = MyTimePicker;

/***/ }),

/***/ 2679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TimePicker = __webpack_require__(2680);

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TimePicker2.default;

/***/ }),

/***/ 2680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTrigger = __webpack_require__(2681);

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _Panel = __webpack_require__(2688);

var _Panel2 = _interopRequireDefault(_Panel);

var _placements = __webpack_require__(2692);

var _placements2 = _interopRequireDefault(_placements);

var _moment = __webpack_require__(969);

var _moment2 = _interopRequireDefault(_moment);

var _createReactClass = __webpack_require__(989);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = (0, _createReactClass2.default)({
  displayName: 'Picker',

  propTypes: {
    prefixCls: _propTypes2.default.string,
    clearText: _propTypes2.default.string,
    value: _propTypes2.default.object,
    defaultOpenValue: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    allowEmpty: _propTypes2.default.bool,
    defaultValue: _propTypes2.default.object,
    open: _propTypes2.default.bool,
    defaultOpen: _propTypes2.default.bool,
    align: _propTypes2.default.object,
    placement: _propTypes2.default.any,
    transitionName: _propTypes2.default.string,
    getPopupContainer: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    format: _propTypes2.default.string,
    showHour: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    showSecond: _propTypes2.default.bool,
    disabledHours: _propTypes2.default.func,
    disabledMinutes: _propTypes2.default.func,
    disabledSeconds: _propTypes2.default.func,
    hideDisabledOptions: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onOpen: _propTypes2.default.func,
    onClose: _propTypes2.default.func,
    showAMPM: _propTypes2.default.bool,
    panelClassName: _propTypes2.default.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      clearText: 'clear',
      prefixCls: 'rc-time-picker',
      defaultOpen: false,
      style: {},
      className: '',
      align: {},
      defaultOpenValue: (0, _moment2.default)(),
      allowEmpty: true,
      showHour: true,
      showSecond: true,
      disabledHours: noop,
      disabledMinutes: noop,
      disabledSeconds: noop,
      hideDisabledOptions: false,
      placement: 'bottomLeft',
      onChange: noop,
      onOpen: noop,
      onClose: noop
    };
  },
  getInitialState: function getInitialState() {
    this.savePanelRef = refFn.bind(this, 'panelInstance');
    var _props = this.props,
        defaultOpen = _props.defaultOpen,
        defaultValue = _props.defaultValue,
        _props$open = _props.open,
        open = _props$open === undefined ? defaultOpen : _props$open,
        _props$value = _props.value,
        value = _props$value === undefined ? defaultValue : _props$value;

    return {
      open: open,
      value: value
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        open = nextProps.open;

    if ('value' in nextProps) {
      this.setState({
        value: value
      });
    }
    if (open !== undefined) {
      this.setState({ open: open });
    }
  },
  onPanelChange: function onPanelChange(value) {
    this.setValue(value);
  },
  onPanelClear: function onPanelClear() {
    this.setValue(null);
    this.setOpen(false);
  },
  onVisibleChange: function onVisibleChange(open) {
    this.setOpen(open);
  },
  onEsc: function onEsc() {
    this.setOpen(false);
    this.refs.picker.focus();
  },
  onKeyDown: function onKeyDown(e) {
    if (e.keyCode === 40) {
      this.setOpen(true);
    }
  },
  setValue: function setValue(value) {
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
    this.props.onChange(value);
  },
  getFormat: function getFormat() {
    var format = this.props.format;

    if (this.props.format) {
      format = this.props.format;
    } else if (!this.props.showSecond) {
      format = 'HH:mm';
    } else if (!this.props.showHour) {
      format = 'mm:ss';
    } else {
      format = 'HH:mm:ss';
    }

    if (this.props.showAMPM) {
      format = format.replace('HH', 'hh') + ' A';
    }

    return format;
  },
  getPanelElement: function getPanelElement() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        placeholder = _props2.placeholder,
        disabledHours = _props2.disabledHours,
        disabledMinutes = _props2.disabledMinutes,
        disabledSeconds = _props2.disabledSeconds,
        hideDisabledOptions = _props2.hideDisabledOptions,
        allowEmpty = _props2.allowEmpty,
        showHour = _props2.showHour,
        showSecond = _props2.showSecond,
        showAMPM = _props2.showAMPM,
        defaultOpenValue = _props2.defaultOpenValue,
        clearText = _props2.clearText;

    return _react2.default.createElement(_Panel2.default, {
      clearText: clearText,
      prefixCls: prefixCls + '-panel',
      ref: this.savePanelRef,
      value: this.state.value,
      onChange: this.onPanelChange,
      onClear: this.onPanelClear,
      defaultOpenValue: defaultOpenValue,
      showHour: showHour,
      onEsc: this.onEsc,
      showSecond: showSecond,
      showAMPM: showAMPM,
      allowEmpty: allowEmpty,
      format: this.getFormat(),
      placeholder: placeholder,
      disabledHours: disabledHours,
      disabledMinutes: disabledMinutes,
      disabledSeconds: disabledSeconds,
      hideDisabledOptions: hideDisabledOptions
    });
  },
  setOpen: function setOpen(open, callback) {
    var _props3 = this.props,
        onOpen = _props3.onOpen,
        onClose = _props3.onClose;

    if (this.state.open !== open) {
      this.setState({
        open: open
      }, callback);
      var event = {
        open: open
      };
      if (open) {
        onOpen(event);
      } else {
        onClose(event);
      }
    }
  },
  render: function render() {
    var _props4 = this.props,
        panelClassName = _props4.panelClassName,
        prefixCls = _props4.prefixCls,
        placeholder = _props4.placeholder,
        placement = _props4.placement,
        align = _props4.align,
        disabled = _props4.disabled,
        transitionName = _props4.transitionName,
        style = _props4.style,
        className = _props4.className,
        showHour = _props4.showHour,
        showSecond = _props4.showSecond,
        getPopupContainer = _props4.getPopupContainer;
    var _state = this.state,
        open = _state.open,
        value = _state.value;

    var popupClassName = void 0;
    if (!showHour || !showSecond) {
      popupClassName = prefixCls + '-panel-narrow';
    }
    return _react2.default.createElement(
      _rcTrigger2.default,
      {
        prefixCls: prefixCls + '-panel  ' + panelClassName,
        popupClassName: popupClassName,
        popup: this.getPanelElement(),
        popupAlign: align,
        builtinPlacements: _placements2.default,
        popupPlacement: placement,
        action: disabled ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getPopupContainer,
        popupTransitionName: transitionName,
        popupVisible: open,
        onPopupVisibleChange: this.onVisibleChange
      },
      _react2.default.createElement(
        'span',
        { className: prefixCls + ' ' + className, style: style },
        _react2.default.createElement('input', {
          className: prefixCls + '-input',
          ref: 'picker', type: 'text', placeholder: placeholder,
          readOnly: true,
          onKeyDown: this.onKeyDown,
          disabled: disabled, value: value && value.format(this.getFormat()) || ''
        }),
        _react2.default.createElement('span', { className: prefixCls + '-icon' })
      )
    );
  }
});

exports.default = Picker;

/***/ }),

/***/ 2681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(746);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(398);

var _createReactClass = __webpack_require__(989);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _contains = __webpack_require__(871);

var _contains2 = _interopRequireDefault(_contains);

var _addEventListener = __webpack_require__(2682);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _Popup = __webpack_require__(2683);

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = __webpack_require__(2686);

var _getContainerRenderMixin = __webpack_require__(2687);

var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var isMobile = typeof navigator !== 'undefined' && !!navigator.userAgent.match(/(Android|iPhone|iPad|iPod|iOS|UCWEB)/i);

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];

var Trigger = (0, _createReactClass2.default)({
  displayName: 'Trigger',
  propTypes: {
    children: _propTypes2.default.any,
    action: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    showAction: _propTypes2.default.any,
    hideAction: _propTypes2.default.any,
    getPopupClassNameFromAlign: _propTypes2.default.any,
    onPopupVisibleChange: _propTypes2.default.func,
    afterPopupVisibleChange: _propTypes2.default.func,
    popup: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
    popupStyle: _propTypes2.default.object,
    prefixCls: _propTypes2.default.string,
    popupClassName: _propTypes2.default.string,
    popupPlacement: _propTypes2.default.string,
    builtinPlacements: _propTypes2.default.object,
    popupTransitionName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    popupAnimation: _propTypes2.default.any,
    mouseEnterDelay: _propTypes2.default.number,
    mouseLeaveDelay: _propTypes2.default.number,
    zIndex: _propTypes2.default.number,
    focusDelay: _propTypes2.default.number,
    blurDelay: _propTypes2.default.number,
    getPopupContainer: _propTypes2.default.func,
    getDocument: _propTypes2.default.func,
    destroyPopupOnHide: _propTypes2.default.bool,
    mask: _propTypes2.default.bool,
    maskClosable: _propTypes2.default.bool,
    onPopupAlign: _propTypes2.default.func,
    popupAlign: _propTypes2.default.object,
    popupVisible: _propTypes2.default.bool,
    maskTransitionName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    maskAnimation: _propTypes2.default.string
  },

  mixins: [(0, _getContainerRenderMixin2.default)({
    autoMount: false,

    isVisible: function isVisible(instance) {
      return instance.state.popupVisible;
    },
    getContainer: function getContainer(instance) {
      var props = instance.props;

      var popupContainer = document.createElement('div');
      popupContainer.style.position = 'absolute';
      popupContainer.style.top = '0';
      popupContainer.style.left = '0';
      popupContainer.style.width = '100%';
      var mountNode = props.getPopupContainer ? props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : props.getDocument().body;
      mountNode.appendChild(popupContainer);
      return popupContainer;
    }
  })],

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-trigger-popup',
      getPopupClassNameFromAlign: returnEmptyString,
      getDocument: returnDocument,
      onPopupVisibleChange: noop,
      afterPopupVisibleChange: noop,
      onPopupAlign: noop,
      popupClassName: '',
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      focusDelay: 0,
      blurDelay: 0.15,
      popupStyle: {},
      destroyPopupOnHide: false,
      popupAlign: {},
      defaultPopupVisible: false,
      mask: false,
      maskClosable: true,
      action: [],
      showAction: [],
      hideAction: []
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    return {
      popupVisible: popupVisible
    };
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    ALL_HANDLERS.forEach(function (h) {
      _this['fire' + h] = function (e) {
        _this.fireEvents(h, e);
      };
    });
  },
  componentDidMount: function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  },
  componentDidUpdate: function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    this.renderComponent(null, function () {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    });

    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && this.isClickToHide()) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = (0, _addEventListener2.default)(currentDocument, 'mousedown', this.onDocumentClick);
      }
      if (!this.touchOutsideHandler && isMobile) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = (0, _addEventListener2.default)(currentDocument, 'click', this.onDocumentClick);
      }
      return;
    }

    this.clearOutsideHandler();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  },
  onMouseEnter: function onMouseEnter(e) {
    this.fireEvents('onMouseEnter', e);
    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
  },
  onMouseLeave: function onMouseLeave(e) {
    this.fireEvents('onMouseLeave', e);
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onPopupMouseEnter: function onPopupMouseEnter() {
    this.clearDelayTimer();
  },
  onPopupMouseLeave: function onPopupMouseLeave(e) {
    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && (0, _contains2.default)(this._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onFocus: function onFocus(e) {
    this.fireEvents('onFocus', e);
    this.clearDelayTimer();
    if (this.isFocusToShow()) {
      this.focusTime = Date.now();
      this.delaySetPopupVisible(true, this.props.focusDelay);
    }
  },
  onMouseDown: function onMouseDown(e) {
    this.fireEvents('onMouseDown', e);
    this.preClickTime = Date.now();
  },
  onTouchStart: function onTouchStart(e) {
    this.fireEvents('onTouchStart', e);
    this.preTouchTime = Date.now();
  },
  onBlur: function onBlur(e) {
    this.fireEvents('onBlur', e);
    this.clearDelayTimer();
    if (this.isBlurToHide()) {
      this.delaySetPopupVisible(false, this.props.blurDelay);
    }
  },
  onClick: function onClick(event) {
    this.fireEvents('onClick', event);
    if (this.focusTime) {
      var preTime = void 0;
      if (this.preClickTime && this.preTouchTime) {
        preTime = Math.min(this.preClickTime, this.preTouchTime);
      } else if (this.preClickTime) {
        preTime = this.preClickTime;
      } else if (this.preTouchTime) {
        preTime = this.preTouchTime;
      }
      if (Math.abs(preTime - this.focusTime) < 20) {
        return;
      }
      this.focusTime = 0;
    }
    this.preClickTime = 0;
    this.preTouchTime = 0;
    event.preventDefault();
    var nextVisible = !this.state.popupVisible;
    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
      this.setPopupVisible(!this.state.popupVisible);
    }
  },
  onDocumentClick: function onDocumentClick(event) {
    if (this.props.mask && !this.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = (0, _reactDom.findDOMNode)(this);
    var popupNode = this.getPopupDomNode();
    if (!(0, _contains2.default)(root, target) && !(0, _contains2.default)(popupNode, target)) {
      this.close();
    }
  },
  getPopupDomNode: function getPopupDomNode() {
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  },
  getRootDomNode: function getRootDomNode() {
    return (0, _reactDom.findDOMNode)(this);
  },
  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
    var className = [];
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        builtinPlacements = props.builtinPlacements,
        prefixCls = props.prefixCls;

    if (popupPlacement && builtinPlacements) {
      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
    }
    if (props.getPopupClassNameFromAlign) {
      className.push(props.getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  },
  getPopupAlign: function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  },
  getComponent: function getComponent() {
    var props = this.props,
        state = this.state;

    var mouseProps = {};
    if (this.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = this.onPopupMouseEnter;
    }
    if (this.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = this.onPopupMouseLeave;
    }
    return _react2.default.createElement(_Popup2.default, (0, _extends3.default)({
      prefixCls: props.prefixCls,
      destroyPopupOnHide: props.destroyPopupOnHide,
      visible: state.popupVisible,
      className: props.popupClassName,
      action: props.action,
      align: this.getPopupAlign(),
      onAlign: props.onPopupAlign,
      animation: props.popupAnimation,
      getClassNameFromAlign: this.getPopupClassNameFromAlign
    }, mouseProps, {
      getRootDomNode: this.getRootDomNode,
      style: props.popupStyle,
      mask: props.mask,
      zIndex: props.zIndex,
      transitionName: props.popupTransitionName,
      maskAnimation: props.maskAnimation,
      maskTransitionName: props.maskTransitionName
    }), typeof props.popup === 'function' ? props.popup() : props.popup);
  },
  setPopupVisible: function setPopupVisible(popupVisible) {
    this.clearDelayTimer();
    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible: popupVisible
        });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }
  },
  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
    var _this2 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      this.delayTimer = setTimeout(function () {
        _this2.setPopupVisible(visible);
        _this2.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible);
    }
  },
  clearDelayTimer: function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  },
  clearOutsideHandler: function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  },
  createTwoChains: function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  },
  isClickToShow: function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  },
  isClickToHide: function isClickToHide() {
    var _props2 = this.props,
        action = _props2.action,
        hideAction = _props2.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  },
  isMouseEnterToShow: function isMouseEnterToShow() {
    var _props3 = this.props,
        action = _props3.action,
        showAction = _props3.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  },
  isMouseLeaveToHide: function isMouseLeaveToHide() {
    var _props4 = this.props,
        action = _props4.action,
        hideAction = _props4.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  },
  isFocusToShow: function isFocusToShow() {
    var _props5 = this.props,
        action = _props5.action,
        showAction = _props5.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  },
  isBlurToHide: function isBlurToHide() {
    var _props6 = this.props,
        action = _props6.action,
        hideAction = _props6.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  },
  forcePopupAlign: function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  },
  fireEvents: function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  },
  close: function close() {
    this.setPopupVisible(false);
  },
  render: function render() {
    var props = this.props;
    var children = props.children;
    var child = _react2.default.Children.only(children);
    var newChildProps = {};
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    return _react2.default.cloneElement(child, newChildProps);
  }
});

exports.default = Trigger;

/***/ }),

/***/ 2682:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(816);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(398);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),

/***/ 2683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(746);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(769);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(770);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(771);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(805);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(398);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAlign = __webpack_require__(876);

var _rcAlign2 = _interopRequireDefault(_rcAlign);

var _rcAnimate = __webpack_require__(847);

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _PopupInner = __webpack_require__(2684);

var _PopupInner2 = _interopRequireDefault(_PopupInner);

var _LazyRenderBox = __webpack_require__(2685);

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

var _utils = __webpack_require__(2686);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = function (_Component) {
  (0, _inherits3.default)(Popup, _Component);

  function Popup(props) {
    (0, _classCallCheck3.default)(this, Popup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _initialiseProps.call(_this);

    _this.savePopupRef = _utils.saveRef.bind(_this, 'popupInstance');
    _this.saveAlignRef = _utils.saveRef.bind(_this, 'alignInstance');
    return _this;
  }

  (0, _createClass3.default)(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rootNode = this.getPopupDomNode();
    }
  }, {
    key: 'getPopupDomNode',
    value: function getPopupDomNode() {
      return _reactDom2.default.findDOMNode(this.popupInstance);
    }
  }, {
    key: 'getMaskTransitionName',
    value: function getMaskTransitionName() {
      var props = this.props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;
      if (!transitionName && animation) {
        transitionName = props.prefixCls + '-' + animation;
      }
      return transitionName;
    }
  }, {
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'getClassName',
    value: function getClassName(currentAlignClassName) {
      return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
    }
  }, {
    key: 'getPopupElement',
    value: function getPopupElement() {
      var savePopupRef = this.savePopupRef,
          props = this.props;
      var align = props.align,
          style = props.style,
          visible = props.visible,
          prefixCls = props.prefixCls,
          destroyPopupOnHide = props.destroyPopupOnHide;

      var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
      var hiddenClassName = prefixCls + '-hidden';
      if (!visible) {
        this.currentAlignClassName = null;
      }
      var newStyle = (0, _extends3.default)({}, style, this.getZIndexStyle());
      var popupInnerProps = {
        className: className,
        prefixCls: prefixCls,
        ref: savePopupRef,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: newStyle
      };
      if (destroyPopupOnHide) {
        return _react2.default.createElement(_rcAnimate2.default, {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        }, visible ? _react2.default.createElement(_rcAlign2.default, {
          target: this.getTarget,
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          align: align,
          onAlign: this.onAlign
        }, _react2.default.createElement(_PopupInner2.default, (0, _extends3.default)({
          visible: true
        }, popupInnerProps), props.children)) : null);
      }
      return _react2.default.createElement(_rcAnimate2.default, {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      }, _react2.default.createElement(_rcAlign2.default, {
        target: this.getTarget,
        key: 'popup',
        ref: this.saveAlignRef,
        monitorWindowResize: true,
        xVisible: visible,
        childrenProps: { visible: 'xVisible' },
        disabled: !visible,
        align: align,
        onAlign: this.onAlign
      }, _react2.default.createElement(_PopupInner2.default, (0, _extends3.default)({
        hiddenClassName: hiddenClassName
      }, popupInnerProps), props.children)));
    }
  }, {
    key: 'getZIndexStyle',
    value: function getZIndexStyle() {
      var style = {};
      var props = this.props;
      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }
      return style;
    }
  }, {
    key: 'getMaskElement',
    value: function getMaskElement() {
      var props = this.props;
      var maskElement = void 0;
      if (props.mask) {
        var maskTransition = this.getMaskTransitionName();
        maskElement = _react2.default.createElement(_LazyRenderBox2.default, {
          style: this.getZIndexStyle(),
          key: 'mask',
          className: props.prefixCls + '-mask',
          hiddenClassName: props.prefixCls + '-mask-hidden',
          visible: props.visible
        });
        if (maskTransition) {
          maskElement = _react2.default.createElement(_rcAnimate2.default, {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          }, maskElement);
        }
      }
      return maskElement;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, this.getMaskElement(), this.getPopupElement());
    }
  }]);

  return Popup;
}(_react.Component);

Popup.propTypes = {
  visible: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  getClassNameFromAlign: _propTypes2.default.func,
  onAlign: _propTypes2.default.func,
  getRootDomNode: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  align: _propTypes2.default.any,
  destroyPopupOnHide: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  prefixCls: _propTypes2.default.string,
  onMouseLeave: _propTypes2.default.func
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this2.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this2.currentAlignClassName !== currentAlignClassName) {
      _this2.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this2.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.getTarget = function () {
    return _this2.props.getRootDomNode();
  };
};

exports.default = Popup;

/***/ }),

/***/ 2684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(769);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(770);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(771);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(805);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LazyRenderBox = __webpack_require__(2685);

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopupInner = function (_Component) {
  (0, _inherits3.default)(PopupInner, _Component);

  function PopupInner() {
    (0, _classCallCheck3.default)(this, PopupInner);

    return (0, _possibleConstructorReturn3.default)(this, (PopupInner.__proto__ || Object.getPrototypeOf(PopupInner)).apply(this, arguments));
  }

  (0, _createClass3.default)(PopupInner, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var className = props.className;
      if (!props.visible) {
        className += ' ' + props.hiddenClassName;
      }
      return _react2.default.createElement('div', {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: props.style
      }, _react2.default.createElement(_LazyRenderBox2.default, { className: props.prefixCls + '-content', visible: props.visible }, props.children));
    }
  }]);

  return PopupInner;
}(_react.Component);

PopupInner.propTypes = {
  hiddenClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  prefixCls: _propTypes2.default.string,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  children: _propTypes2.default.any
};

exports.default = PopupInner;

/***/ }),

/***/ 2685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(855);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(769);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(770);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(771);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(805);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyRenderBox = function (_Component) {
  (0, _inherits3.default)(LazyRenderBox, _Component);

  function LazyRenderBox() {
    (0, _classCallCheck3.default)(this, LazyRenderBox);

    return (0, _possibleConstructorReturn3.default)(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(LazyRenderBox, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.hiddenClassName || nextProps.visible;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hiddenClassName = _props.hiddenClassName,
          visible = _props.visible,
          props = (0, _objectWithoutProperties3.default)(_props, ['hiddenClassName', 'visible']);

      if (hiddenClassName || _react2.default.Children.count(props.children) > 1) {
        if (!visible && hiddenClassName) {
          props.className += ' ' + hiddenClassName;
        }
        return _react2.default.createElement('div', props);
      }

      return _react2.default.Children.only(props.children);
    }
  }]);

  return LazyRenderBox;
}(_react.Component);

LazyRenderBox.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  hiddenClassName: _propTypes2.default.string
};

exports.default = LazyRenderBox;

/***/ }),

/***/ 2686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignFromPlacement = getAlignFromPlacement;
exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
exports.saveRef = saveRef;

var _extends2 = __webpack_require__(746);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPointsEq(a1, a2) {
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return (0, _extends3.default)({}, baseAlign, align);
}

function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

/***/ }),

/***/ 2687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(746);

var _extends3 = _interopRequireDefault(_extends2);

exports['default'] = getContainerRenderMixin;

var _reactDom = __webpack_require__(398);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function defaultGetContainer() {
  var container = document.createElement('div');
  document.body.appendChild(container);
  return container;
}

function getContainerRenderMixin(config) {
  var _config$autoMount = config.autoMount,
      autoMount = _config$autoMount === undefined ? true : _config$autoMount,
      _config$autoDestroy = config.autoDestroy,
      autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy,
      isVisible = config.isVisible,
      isForceRender = config.isForceRender,
      getComponent = config.getComponent,
      _config$getContainer = config.getContainer,
      getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;


  var mixin = void 0;

  function _renderComponent(instance, componentArg, ready) {
    if (!isVisible || instance._component || isVisible(instance) || isForceRender && isForceRender(instance)) {
      if (!instance._container) {
        instance._container = getContainer(instance);
      }
      var component = void 0;
      if (instance.getComponent) {
        component = instance.getComponent(componentArg);
      } else {
        component = getComponent(instance, componentArg);
      }
      _reactDom2['default'].unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
        instance._component = this;
        if (ready) {
          ready.call(this);
        }
      });
    }
  }

  if (autoMount) {
    mixin = (0, _extends3['default'])({}, mixin, {
      componentDidMount: function componentDidMount() {
        _renderComponent(this);
      },
      componentDidUpdate: function componentDidUpdate() {
        _renderComponent(this);
      }
    });
  }

  if (!autoMount || !autoDestroy) {
    mixin = (0, _extends3['default'])({}, mixin, {
      renderComponent: function renderComponent(componentArg, ready) {
        _renderComponent(this, componentArg, ready);
      }
    });
  }

  function _removeContainer(instance) {
    if (instance._container) {
      var container = instance._container;
      _reactDom2['default'].unmountComponentAtNode(container);
      container.parentNode.removeChild(container);
      instance._container = null;
    }
  }

  if (autoDestroy) {
    mixin = (0, _extends3['default'])({}, mixin, {
      componentWillUnmount: function componentWillUnmount() {
        _removeContainer(this);
      }
    });
  } else {
    mixin = (0, _extends3['default'])({}, mixin, {
      removeContainer: function removeContainer() {
        _removeContainer(this);
      }
    });
  }

  return mixin;
}
module.exports = exports['default'];

/***/ }),

/***/ 2688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(2689);

var _Header2 = _interopRequireDefault(_Header);

var _Combobox = __webpack_require__(2690);

var _Combobox2 = _interopRequireDefault(_Combobox);

var _moment = __webpack_require__(969);

var _moment2 = _interopRequireDefault(_moment);

var _createReactClass = __webpack_require__(989);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var arr = [];
  for (var value = 0; value < length; value++) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }
  return arr;
}

var Panel = (0, _createReactClass2.default)({
  displayName: 'Panel',

  propTypes: {
    clearText: _propTypes2.default.string,
    prefixCls: _propTypes2.default.string,
    defaultOpenValue: _propTypes2.default.object,
    value: _propTypes2.default.object,
    placeholder: _propTypes2.default.string,
    format: _propTypes2.default.string,
    disabledHours: _propTypes2.default.func,
    disabledMinutes: _propTypes2.default.func,
    disabledSeconds: _propTypes2.default.func,
    hideDisabledOptions: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onEsc: _propTypes2.default.func,
    allowEmpty: _propTypes2.default.bool,
    showHour: _propTypes2.default.bool,
    showSecond: _propTypes2.default.bool,
    onClear: _propTypes2.default.func,
    showAMPM: _propTypes2.default.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-time-picker-panel',
      onChange: noop,
      onClear: noop,
      defaultOpenValue: (0, _moment2.default)()
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      selectionRange: []
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    if (value) {
      this.setState({
        value: value
      });
    }
  },
  onChange: function onChange(newValue) {
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  },
  onClear: function onClear() {
    this.props.onClear();
  },
  onCurrentSelectPanelChange: function onCurrentSelectPanelChange(currentSelectPanel) {
    this.setState({ currentSelectPanel: currentSelectPanel });
  },
  render: function render() {
    var _props = this.props,
        formatter = _props.formatter,
        prefixCls = _props.prefixCls,
        className = _props.className,
        placeholder = _props.placeholder,
        disabledHours = _props.disabledHours,
        disabledMinutes = _props.disabledMinutes,
        disabledSeconds = _props.disabledSeconds,
        hideDisabledOptions = _props.hideDisabledOptions,
        allowEmpty = _props.allowEmpty,
        showHour = _props.showHour,
        showSecond = _props.showSecond,
        showAMPM = _props.showAMPM,
        format = _props.format,
        defaultOpenValue = _props.defaultOpenValue,
        clearText = _props.clearText,
        onEsc = _props.onEsc;
    var _state = this.state,
        value = _state.value,
        currentSelectPanel = _state.currentSelectPanel;

    var disabledHourOptions = disabledHours();
    var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
    var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
    var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions);
    var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions);
    var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions);

    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-inner ' + className },
      _react2.default.createElement(_Header2.default, {
        clearText: clearText,
        prefixCls: prefixCls,
        defaultOpenValue: defaultOpenValue,
        value: value,
        currentSelectPanel: currentSelectPanel,
        onEsc: onEsc,
        format: format,
        placeholder: placeholder,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onChange: this.onChange,
        onClear: this.onClear,
        allowEmpty: allowEmpty
      }),
      _react2.default.createElement(_Combobox2.default, {
        formatter: formatter,
        prefixCls: prefixCls,
        value: value,
        defaultOpenValue: defaultOpenValue,
        format: format,
        onChange: this.onChange,
        showAMPM: showAMPM,
        showHour: showHour,
        showSecond: showSecond,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange
      })
    );
  }
});

exports.default = Panel;

/***/ }),

/***/ 2689:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(969);

var _moment2 = _interopRequireDefault(_moment);

var _createReactClass = __webpack_require__(989);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (0, _createReactClass2.default)({
  displayName: 'Header',

  propTypes: {
    format: _propTypes2.default.string,
    prefixCls: _propTypes2.default.string,
    disabledDate: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    clearText: _propTypes2.default.string,
    value: _propTypes2.default.object,
    hourOptions: _propTypes2.default.array,
    minuteOptions: _propTypes2.default.array,
    secondOptions: _propTypes2.default.array,
    disabledHours: _propTypes2.default.func,
    disabledMinutes: _propTypes2.default.func,
    disabledSeconds: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onClear: _propTypes2.default.func,
    onEsc: _propTypes2.default.func,
    allowEmpty: _propTypes2.default.bool,
    defaultOpenValue: _propTypes2.default.object,
    currentSelectPanel: _propTypes2.default.string
  },

  getInitialState: function getInitialState() {
    var _props = this.props,
        value = _props.value,
        format = _props.format;

    return {
      str: value && value.format(format) || '',
      invalid: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        format = nextProps.format;

    this.setState({
      str: value && value.format(format) || '',
      invalid: false
    });
  },
  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var _props2 = this.props,
        format = _props2.format,
        hourOptions = _props2.hourOptions,
        minuteOptions = _props2.minuteOptions,
        secondOptions = _props2.secondOptions,
        disabledHours = _props2.disabledHours,
        disabledMinutes = _props2.disabledMinutes,
        disabledSeconds = _props2.disabledSeconds,
        onChange = _props2.onChange,
        allowEmpty = _props2.allowEmpty;


    if (str) {
      var originalValue = this.props.value;
      var value = this.getProtoValue().clone();
      var parsed = (0, _moment2.default)(str, format, true);
      if (!parsed.isValid()) {
        this.setState({
          invalid: true
        });
        return;
      }
      value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      // if time value not allowed, response warning.
      if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
        this.setState({
          invalid: true
        });
        return;
      }

      // if time value is disabled, response warning.
      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(value.hour());
      var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());
      if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
        this.setState({
          invalid: true
        });
        return;
      }

      if (originalValue) {
        if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
          // keep other fields for rc-calendar
          var changedValue = originalValue.clone();
          changedValue.hour(value.hour());
          changedValue.minute(value.minute());
          changedValue.second(value.second());
          onChange(changedValue);
        }
      } else if (originalValue !== value) {
        onChange(value);
      }
    } else if (allowEmpty) {
      onChange(null);
    } else {
      this.setState({
        invalid: true
      });
      return;
    }

    this.setState({
      invalid: false
    });
  },
  onKeyDown: function onKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.onEsc();
    }
  },
  onClear: function onClear() {
    this.setState({ str: '' });
    this.props.onClear();
  },
  getClearButton: function getClearButton() {
    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        allowEmpty = _props3.allowEmpty;

    if (!allowEmpty) {
      return null;
    }
    return _react2.default.createElement('a', {
      className: prefixCls + '-clear-btn',
      role: 'button',
      title: this.props.clearText,
      onMouseDown: this.onClear
    });
  },
  getProtoValue: function getProtoValue() {
    return this.props.value || this.props.defaultOpenValue;
  },
  getInput: function getInput() {
    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        placeholder = _props4.placeholder;
    var _state = this.state,
        invalid = _state.invalid,
        str = _state.str;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2.default.createElement('input', {
      className: prefixCls + '-input  ' + invalidClass,
      ref: 'input',
      onKeyDown: this.onKeyDown,
      value: str,
      placeholder: placeholder,
      onChange: this.onInputChange
    });
  },
  render: function render() {
    var prefixCls = this.props.prefixCls;

    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      this.getInput(),
      this.getClearButton()
    );
  }
});

exports.default = Header;

/***/ }),

/***/ 2690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(2691);

var _Select2 = _interopRequireDefault(_Select);

var _createReactClass = __webpack_require__(989);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pad = function pad(value) {
  return value < 10 ? '0' + value : '' + value;
};

var formatOption = function formatOption(option, disabledOptions) {
  var value = pad(option);

  var disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = (0, _createReactClass2.default)({
  displayName: 'Combobox',

  propTypes: {
    format: _propTypes2.default.string,
    defaultOpenValue: _propTypes2.default.object,
    prefixCls: _propTypes2.default.string,
    value: _propTypes2.default.object,
    onChange: _propTypes2.default.func,
    showHour: _propTypes2.default.bool,
    showSecond: _propTypes2.default.bool,
    hourOptions: _propTypes2.default.array,
    minuteOptions: _propTypes2.default.array,
    secondOptions: _propTypes2.default.array,
    disabledHours: _propTypes2.default.func,
    disabledMinutes: _propTypes2.default.func,
    disabledSeconds: _propTypes2.default.func,
    onCurrentSelectPanelChange: _propTypes2.default.func
  },

  onItemChange: function onItemChange(type, itemValue) {
    var _props = this.props,
        onChange = _props.onChange,
        defaultOpenValue = _props.defaultOpenValue;

    var value = (this.props.value || defaultOpenValue).clone();

    if (type === 'hour') {
      value.hour(itemValue);
    } else if (type === 'minute') {
      value.minute(itemValue);
    } else if (type === 'second') {
      value.second(itemValue);
    } else {
      var actualPeriod = value.format('A');

      if (actualPeriod !== itemValue) {
        var hour24style = value.hour();
        var hour12style = hour24style < 12 ? hour24style : hour24style - 12;

        if (itemValue === 'PM') {
          value.hour(hour12style + 12);
        } else {
          value.hour(hour12style);
        }
      }
    }

    onChange(value);
  },
  onEnterSelectPanel: function onEnterSelectPanel(range) {
    this.props.onCurrentSelectPanelChange(range);
  },
  getHourSelect: function getHourSelect(hour) {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        showAMPM = _props2.showAMPM,
        disabledHours = _props2.disabledHours,
        showHour = _props2.showHour;

    if (!showHour) {
      return null;
    }

    var disabledOptions = disabledHours();
    var hourOptions = this.props.hourOptions;
    var formattedOptions = hourOptions.map(function (option) {
      return formatOption(option, disabledOptions);
    });

    if (showAMPM) {
      hourOptions = hourOptions.filter(function (value) {
        return hour < 12 ? value < 12 : value >= 12;
      });
      formattedOptions = formattedOptions.map(function (option) {
        return _extends({}, option, {
          label: option.value <= 12 ? option.value : pad(option.value - 12)
        });
      }).filter(function (_ref) {
        var value = _ref.value;
        return hour < 12 ? Number(value) < 12 : Number(value) >= 12;
      });
    }

    return _react2.default.createElement(_Select2.default, {
      prefixCls: prefixCls,
      options: formattedOptions,
      selectedIndex: hourOptions.indexOf(hour),
      type: 'hour',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'hour')
    });
  },
  getMinuteSelect: function getMinuteSelect(minute) {
    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        minuteOptions = _props3.minuteOptions,
        disabledMinutes = _props3.disabledMinutes,
        defaultOpenValue = _props3.defaultOpenValue;

    var value = this.props.value || defaultOpenValue;
    var disabledOptions = disabledMinutes(value.hour());

    return _react2.default.createElement(_Select2.default, {
      prefixCls: prefixCls,
      options: minuteOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: minuteOptions.indexOf(minute),
      type: 'minute',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'minute')
    });
  },
  getSecondSelect: function getSecondSelect(second) {
    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        secondOptions = _props4.secondOptions,
        disabledSeconds = _props4.disabledSeconds,
        showSecond = _props4.showSecond,
        defaultOpenValue = _props4.defaultOpenValue;

    if (!showSecond) {
      return null;
    }
    var value = this.props.value || defaultOpenValue;
    var disabledOptions = disabledSeconds(value.hour(), value.minute());

    return _react2.default.createElement(_Select2.default, {
      prefixCls: prefixCls,
      options: secondOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: secondOptions.indexOf(second),
      type: 'second',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'second')
    });
  },
  getAMPMSelect: function getAMPMSelect(period) {
    var _props5 = this.props,
        prefixCls = _props5.prefixCls,
        showAMPM = _props5.showAMPM,
        defaultOpenValue = _props5.defaultOpenValue;


    if (!showAMPM) {
      return null;
    }

    var options = [{ value: 'AM', label: 'AM' }, { value: 'PM', label: 'PM' }];

    return _react2.default.createElement(_Select2.default, {
      prefixCls: prefixCls,
      options: options,
      selectedIndex: period === 'AM' ? 0 : 1,
      type: 'period',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'period')
    });
  },
  render: function render() {
    var _props6 = this.props,
        prefixCls = _props6.prefixCls,
        defaultOpenValue = _props6.defaultOpenValue;

    var value = this.props.value || defaultOpenValue;
    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-combobox' },
      this.getHourSelect(value.hour()),
      this.getMinuteSelect(value.minute()),
      this.getSecondSelect(value.second()),
      this.getAMPMSelect(value.hour() < 12 ? 'AM' : 'PM')
    );
  }
});

exports.default = Combobox;

/***/ }),

/***/ 2691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(398);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = __webpack_require__(819);

var _classnames3 = _interopRequireDefault(_classnames2);

var _createReactClass = __webpack_require__(989);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var scrollTo = function scrollTo(element, to, duration) {
  var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
    return setTimeout(arguments[0], 10);
  };
  // jump to target if duration zero
  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  requestAnimationFrame(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select = (0, _createReactClass2.default)({
  displayName: 'Select',

  propTypes: {
    prefixCls: _propTypes2.default.string,
    options: _propTypes2.default.array,
    selectedIndex: _propTypes2.default.number,
    type: _propTypes2.default.string,
    onSelect: _propTypes2.default.func,
    onMouseEnter: _propTypes2.default.func
  },

  componentDidMount: function componentDidMount() {
    // jump to selected option
    this.scrollToSelected(0);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    // smooth scroll to selected option
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      this.scrollToSelected(120);
    }
  },
  onSelect: function onSelect(value) {
    var _props = this.props,
        onSelect = _props.onSelect,
        type = _props.type;

    onSelect(type, value);
  },
  getOptions: function getOptions() {
    var _this = this;

    var _props2 = this.props,
        options = _props2.options,
        selectedIndex = _props2.selectedIndex,
        prefixCls = _props2.prefixCls;

    return options.map(function (item, index) {
      var _classnames;

      var cls = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, prefixCls + '-select-option-selected', selectedIndex === index), _defineProperty(_classnames, prefixCls + '-select-option-disabled', item.disabled), _classnames));
      var onclick = null;
      if (!item.disabled) {
        var value = +item.value;
        if (Number.isNaN(value)) {
          value = item.value;
        }
        onclick = _this.onSelect.bind(_this, value);
      }

      return _react2.default.createElement(
        'li',
        {
          className: cls,
          key: index,
          onClick: onclick,
          disabled: item.disabled
        },
        typeof item.label !== 'undefined' ? item.label : item.value
      );
    });
  },
  scrollToSelected: function scrollToSelected(duration) {
    // move to selected item
    var select = _reactDom2.default.findDOMNode(this);
    var list = _reactDom2.default.findDOMNode(this.refs.list);
    var index = this.props.selectedIndex;
    if (index < 0) {
      index = 0;
    }
    var topOption = list.children[index];
    var to = topOption.offsetTop;
    scrollTo(select, to, duration);
  },
  render: function render() {
    if (this.props.options.length === 0) {
      return null;
    }

    var prefixCls = this.props.prefixCls;


    return _react2.default.createElement(
      'div',
      {
        className: prefixCls + '-select',
        onMouseEnter: this.props.onMouseEnter
      },
      _react2.default.createElement(
        'ul',
        { ref: 'list' },
        this.getOptions()
      )
    );
  }
});

exports.default = Select;

/***/ }),

/***/ 2692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  bottomLeft: {
    points: ['tl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  }
};

exports.default = placements;

/***/ }),

/***/ 2702:
/***/ (function(module, exports) {

module.exports = function browserLocale () {
  var lang

  if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    lang = navigator.languages[0]
  } else if (navigator.userLanguage) {
    // IE only
    lang = navigator.userLanguage
  } else {
    // latest versions of Chrome, Firefox, and Safari set this correctly
    lang = navigator.language
  }

  return lang
}


/***/ }),

/***/ 2720:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2721);

/***/ }),

/***/ 2721:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(389), __webpack_require__(813), __webpack_require__(2722), __webpack_require__(2723), __webpack_require__(2724), __webpack_require__(2725)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _Table, _Row, _Cell, elementResizeEvent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Cell = exports.Row = exports.Table = exports.StickyTable = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Table2 = _interopRequireDefault(_Table);

  var _Row2 = _interopRequireDefault(_Row);

  var _Cell2 = _interopRequireDefault(_Cell);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
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
  }

  var StickyTable = function (_PureComponent) {
    _inherits(StickyTable, _PureComponent);

    function StickyTable(props) {
      _classCallCheck(this, StickyTable);

      var _this = _possibleConstructorReturn(this, (StickyTable.__proto__ || Object.getPrototypeOf(StickyTable)).call(this, props));

      _this.setScrollData = function () {
        _this.suppressScrollX = false;
        _this.suppressScrollY = false;

        return _this.scrollData = {
          scrollTop: _this.yScrollbar.scrollTop,
          scrollHeight: _this.yScrollbar.scrollHeight,
          clientHeight: _this.yScrollbar.clientHeight,
          scrollLeft: _this.xScrollbar.scrollLeft,
          scrollWidth: _this.xScrollbar.scrollWidth,
          clientWidth: _this.xScrollbar.clientWidth
        };
      };

      _this.onScrollBarX = function () {
        if (!_this.suppressScrollX) {
          _this.scrollData.scrollLeft = _this.xWrapper.scrollLeft = _this.xScrollbar.scrollLeft;
          _this.suppressScrollX = true;
        } else {
          _this.handleScroll();
          _this.suppressScrollX = false;
        }
      };

      _this.onScrollBarY = function () {
        if (!_this.suppressScrollY) {
          _this.scrollData.scrollTop = _this.yWrapper.scrollTop = _this.yScrollbar.scrollTop;
          _this.suppressScrollY = true;
        } else {
          _this.handleScroll();
          _this.suppressScrollY = false;
        }
      };

      _this.onScrollX = function () {
        var scrollLeft = Math.max(_this.xWrapper.scrollLeft, 0);
        _this.stickyHeader.style.transform = 'translate(' + -1 * scrollLeft + 'px, 0)';
      };

      _this.scrollXScrollbar = function () {
        if (!_this.suppressScrollX) {
          _this.scrollData.scrollLeft = _this.xScrollbar.scrollLeft = _this.xWrapper.scrollLeft;
          _this.suppressScrollX = true;
        } else {
          _this.handleScroll();
          _this.suppressScrollX = false;
        }
      };

      _this.scrollYScrollbar = function () {
        if (!_this.suppressScrollY) {
          _this.scrollData.scrollTop = _this.yScrollbar.scrollTop = _this.yWrapper.scrollTop;
          _this.suppressScrollY = true;
        } else {
          _this.handleScroll();
          _this.suppressScrollY = false;
        }
      };

      _this.handleScroll = function () {
        if (_this.props.onScroll) {
          _this.props.onScroll(_this.scrollData);
        }
      };

      _this.onResize = function () {
        _this.setScrollBarDims();
        _this.setScrollBarWrapperDims();

        _this.setRowHeights();
        _this.setColumnWidths();

        _this.setScrollData();
        _this.handleScroll();
      };

      _this.setScrollBarWrapperDims = function () {
        _this.xScrollbar.style.width = 'calc(100% - ' + _this.yScrollSize + 'px)';
        _this.yScrollbar.style.height = 'calc(100% - ' + _this.stickyHeader.offsetHeight + 'px)';
        _this.yScrollbar.style.top = _this.stickyHeader.offsetHeight + 'px';
      };

      _this.id = Math.floor(Math.random() * 1000000000) + '';

      _this.rowCount = 0;
      _this.columnCount = 0;
      _this.xScrollSize = 0;
      _this.yScrollSize = 0;

      _this.stickyHeaderCount = props.stickyHeaderCount === 0 ? 0 : _this.stickyHeaderCount || 1;

      _this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      return _this;
    }

    _createClass(StickyTable, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.table = document.getElementById('sticky-table-' + this.id);

        if (this.table) {
          this.realTable = this.table.querySelector('#sticky-table-x-wrapper').firstChild;
          this.xScrollbar = this.table.querySelector('#x-scrollbar');
          this.yScrollbar = this.table.querySelector('#y-scrollbar');
          this.xWrapper = this.table.querySelector('#sticky-table-x-wrapper');
          this.yWrapper = this.table.querySelector('#sticky-table-y-wrapper');
          this.stickyHeader = this.table.querySelector('#sticky-table-header');
          this.stickyColumn = this.table.querySelector('#sticky-table-column');
          this.stickyCorner = this.table.querySelector('#sticky-table-corner');
          this.setScrollData();

          elementResizeEvent(this.realTable, this.onResize);

          this.onResize();
          setTimeout(this.onResize);
          this.addScrollBarEventHandlers();
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.onResize();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.table) {
          this.xWrapper.removeEventListener('scroll', this.onScrollX);
          this.xWrapper.removeEventListener('scroll', this.scrollXScrollbar);
          this.xScrollbar.removeEventListener('scroll', this.onScrollBarX);

          this.yWrapper.removeEventListener('scroll', this.scrollYScrollbar);
          this.yScrollbar.removeEventListener('scroll', this.onScrollBarY);

          elementResizeEvent.unbind(this.realTable);
        }
      }
    }, {
      key: 'addScrollBarEventHandlers',
      value: function addScrollBarEventHandlers() {
        this.xWrapper.addEventListener('scroll', this.onScrollX);

        //X Scrollbars
        this.xWrapper.addEventListener('scroll', this.scrollXScrollbar);
        this.xScrollbar.addEventListener('scroll', this.onScrollBarX);

        //Y Scrollbars
        this.yWrapper.addEventListener('scroll', this.scrollYScrollbar);
        this.yScrollbar.addEventListener('scroll', this.onScrollBarY);
      }
    }, {
      key: 'setScrollBarPaddings',
      value: function setScrollBarPaddings() {
        var scrollPadding = '0px 0px ' + this.xScrollSize + 'px 0px';
        this.table.style.padding = scrollPadding;

        var scrollPadding = '0px ' + this.yScrollSize + 'px 0px 0px';
        this.xWrapper.firstChild.style.padding = scrollPadding;
      }
    }, {
      key: 'setScrollBarDims',
      value: function setScrollBarDims() {
        this.xScrollSize = this.xScrollbar.offsetHeight - this.xScrollbar.clientHeight;
        this.yScrollSize = this.yScrollbar.offsetWidth - this.yScrollbar.clientWidth;

        if (!this.isFirefox) {
          this.setScrollBarPaddings();
        }

        var width = this.getSize(this.realTable.firstChild).width;
        this.xScrollbar.firstChild.style.width = width + 'px';

        var height = this.getSize(this.realTable).height + this.xScrollSize - this.stickyHeader.offsetHeight;
        this.yScrollbar.firstChild.style.height = height + 'px';

        if (this.xScrollSize) this.xScrollbar.style.height = this.xScrollSize + 1 + 'px';
        if (this.yScrollSize) this.yScrollbar.style.width = this.yScrollSize + 1 + 'px';
      }
    }, {
      key: 'setRowHeights',
      value: function setRowHeights() {
        var r, cellToCopy, height;

        if (this.props.stickyColumnCount) {
          for (r = 0; r < this.rowCount; r++) {
            cellToCopy = this.realTable.childNodes[r].firstChild;

            if (cellToCopy) {
              height = this.getSize(cellToCopy).height;
              this.stickyColumn.firstChild.childNodes[r].firstChild.style.height = height + 'px';

              if (r === 0 && this.stickyCorner.firstChild.childNodes[r]) {
                this.stickyCorner.firstChild.firstChild.firstChild.style.height = height + 'px';
              }
            }
          }
        }
      }
    }, {
      key: 'setColumnWidths',
      value: function setColumnWidths() {
        var c, cellToCopy, cellStyle, width, cell, stickyWidth;

        if (this.stickyHeaderCount) {
          stickyWidth = 0;

          for (c = 0; c < this.columnCount; c++) {
            cellToCopy = this.realTable.firstChild.childNodes[c];

            if (cellToCopy) {
              width = this.getSize(cellToCopy).width;

              cell = this.table.querySelector('#sticky-header-cell-' + c);

              cell.style.width = width + 'px';
              cell.style.minWidth = width + 'px';

              var fixedColumnsHeader = this.stickyCorner.firstChild.firstChild;
              if (fixedColumnsHeader && fixedColumnsHeader.childNodes[c]) {
                cell = fixedColumnsHeader.childNodes[c];
                cell.style.width = width + 'px';
                cell.style.minWidth = width + 'px';

                cell = fixedColumnsHeader.childNodes[c];
                cell.style.width = width + 'px';
                cell.style.minWidth = width + 'px';

                stickyWidth += width;
              }
            }
          }

          this.stickyColumn.firstChild.style.width = stickyWidth + 'px';
          this.stickyColumn.firstChild.style.minWidth = stickyWidth + 'px';
        }
      }
    }, {
      key: 'getStickyColumns',
      value: function getStickyColumns(rows) {
        var columnsCount = this.props.stickyColumnCount;
        var cells;
        var stickyRows = [];

        rows.forEach(function (row, r) {
          cells = _react2.default.Children.toArray(row.props.children);

          stickyRows.push(_react2.default.createElement(
            _Row2.default,
            _extends({}, row.props, { id: '', key: r }),
            cells.slice(0, columnsCount)
          ));
        });

        return stickyRows;
      }
    }, {
      key: 'getStickyHeader',
      value: function getStickyHeader(rows) {
        var row = rows[0];
        var cells = [];

        _react2.default.Children.toArray(row.props.children).forEach(function (cell, c) {
          cells.push(_react2.default.cloneElement(cell, { id: 'sticky-header-cell-' + c, key: c }));
        });

        return _react2.default.createElement(
          _Row2.default,
          _extends({}, row.props, { id: 'sticky-header-row' }),
          cells
        );
      }
    }, {
      key: 'getStickyCorner',
      value: function getStickyCorner(rows) {
        var columnsCount = this.props.stickyColumnCount;
        var cells;
        var stickyCorner = [];

        rows.forEach(function (row, r) {
          if (r === 0) {
            cells = _react2.default.Children.toArray(row.props.children);

            stickyCorner.push(_react2.default.createElement(
              _Row2.default,
              _extends({}, row.props, { id: '', key: r }),
              cells.slice(0, columnsCount)
            ));
          }
        });

        return stickyCorner;
      }
    }, {
      key: 'getSize',
      value: function getSize(node) {
        var width = node ? node.getBoundingClientRect().width : 0;
        var height = node ? node.getBoundingClientRect().height : 0;

        return { width: width, height: height };
      }
    }, {
      key: 'render',
      value: function render() {
        var rows = _react2.default.Children.toArray(this.props.children);
        var stickyColumn, stickyHeader, stickyCorner;

        this.rowCount = rows.length;
        this.columnCount = rows[0] && _react2.default.Children.toArray(rows[0].props.children).length || 0;

        if (rows.length) {
          if (this.props.stickyColumnCount > 0 && this.stickyHeaderCount > 0) {
            stickyCorner = this.getStickyCorner(rows);
          }
          if (this.props.stickyColumnCount > 0) {
            stickyColumn = this.getStickyColumns(rows);
          }
          if (this.stickyHeaderCount > 0) {
            stickyHeader = this.getStickyHeader(rows);
          }
        }

        return _react2.default.createElement(
          'div',
          { className: 'sticky-table ' + (this.props.className || ''), id: 'sticky-table-' + this.id },
          _react2.default.createElement(
            'div',
            { id: 'x-scrollbar' },
            _react2.default.createElement('div', null)
          ),
          _react2.default.createElement(
            'div',
            { id: 'y-scrollbar' },
            _react2.default.createElement('div', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'sticky-table-corner', id: 'sticky-table-corner' },
            _react2.default.createElement(
              _Table2.default,
              null,
              stickyCorner
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'sticky-table-header', id: 'sticky-table-header' },
            _react2.default.createElement(
              _Table2.default,
              null,
              stickyHeader
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'sticky-table-y-wrapper', id: 'sticky-table-y-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'sticky-table-column', id: 'sticky-table-column' },
              _react2.default.createElement(
                _Table2.default,
                null,
                stickyColumn
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'sticky-table-x-wrapper', id: 'sticky-table-x-wrapper' },
              _react2.default.createElement(
                _Table2.default,
                null,
                rows
              )
            )
          )
        );
      }
    }]);

    return StickyTable;
  }(_react.PureComponent);

  StickyTable.propTypes = {
    stickyHeaderCount: _propTypes2.default.number,
    stickyColumnCount: _propTypes2.default.number,

    onScroll: _propTypes2.default.func
  };
  StickyTable.defaultProps = {
    stickyHeaderCount: 1,
    stickyColumnCount: 1
  };
  exports.StickyTable = StickyTable;
  exports.Table = _Table2.default;
  exports.Row = _Row2.default;
  exports.Cell = _Cell2.default;
});

/***/ }),

/***/ 2722:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(389), __webpack_require__(398)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _reactDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
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
  }

  var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
      _classCallCheck(this, Table);

      return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          _extends({}, this.props, { className: 'sticky-table-container ' + (this.props.className || '') }),
          this.props.children
        );
      }
    }]);

    return Table;
  }(_react.Component);

  exports.default = Table;
});

/***/ }),

/***/ 2723:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(389), __webpack_require__(398)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _reactDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
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
  }

  var Row = function (_Component) {
    _inherits(Row, _Component);

    function Row() {
      _classCallCheck(this, Row);

      return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    _createClass(Row, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          _extends({}, this.props, { className: 'sticky-table-row ' + (this.props.className || '') }),
          this.props.children
        );
      }
    }]);

    return Row;
  }(_react.Component);

  exports.default = Row;
});

/***/ }),

/***/ 2724:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(389), __webpack_require__(398)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _reactDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
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
  }

  var Cell = function (_Component) {
    _inherits(Cell, _Component);

    function Cell() {
      _classCallCheck(this, Cell);

      return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
    }

    _createClass(Cell, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          _extends({}, this.props, { className: 'sticky-table-cell ' + (this.props.className || '') }),
          this.props.children
        );
      }
    }]);

    return Cell;
  }(_react.Component);

  exports.default = Cell;
});

/***/ }),

/***/ 2725:
/***/ (function(module, exports) {

var requestFrame = (function () {
  var window = this
  var raf = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function fallbackRAF(func) {
      return window.setTimeout(func, 20)
    }
  return function requestFrameFunction(func) {
    return raf(func)
  }
})()

var cancelFrame = (function () {
  var window = this
  var cancel = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.clearTimeout
  return function cancelFrameFunction(id) {
    return cancel(id)
  }
})()

function resizeListener(e) {
  var win = e.target || e.srcElement
  if (win.__resizeRAF__) {
    cancelFrame(win.__resizeRAF__)
  }
  win.__resizeRAF__ = requestFrame(function () {
    var trigger = win.__resizeTrigger__
    trigger.__resizeListeners__.forEach(function (fn) {
      fn.call(trigger, e)
    })
  })
}

var exports = function exports(element, fn) {
  var window = this
  var document = window.document
  var isIE

  var attachEvent = document.attachEvent
  if (typeof navigator !== 'undefined') {
    isIE = navigator.userAgent.match(/Trident/) ||
      navigator.userAgent.match(/Edge/)
  }

  function objectLoad() {
    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__
    this.contentDocument.defaultView.addEventListener('resize', resizeListener)
  }

  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []
    if (attachEvent) {
      element.__resizeTrigger__ = element
      element.attachEvent('onresize', resizeListener)
    } else {
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative'
      }
      var obj = (element.__resizeTrigger__ = document.createElement('object'))
      obj.setAttribute(
        'style',
        'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;'
      )
      obj.setAttribute('class', 'resize-sensor')
      obj.__resizeElement__ = element
      obj.onload = objectLoad
      obj.type = 'text/html'
      if (isIE) {
        element.appendChild(obj)
      }
      obj.data = 'about:blank'
      if (!isIE) {
        element.appendChild(obj)
      }
    }
  }
  element.__resizeListeners__.push(fn)
}

module.exports = typeof window === 'undefined' ? exports : exports.bind(window)

module.exports.unbind = function (element, fn) {
  var attachEvent = document.attachEvent
  if (fn) {
    element.__resizeListeners__.splice(
      element.__resizeListeners__.indexOf(fn),
      1
    )
  } else {
    element.__resizeListeners__ = []
  }
  if (!element.__resizeListeners__.length) {
    if (attachEvent) {
      element.detachEvent('onresize', resizeListener)
    } else {
      element.__resizeTrigger__.contentDocument.defaultView.removeEventListener(
        'resize',
        resizeListener
      )
      delete element.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__
      element.__resizeTrigger__ = !element.removeChild(
        element.__resizeTrigger__
      )
    }
    delete element.__resizeListeners__
  }
}


/***/ }),

/***/ 2741:
/***/ (function(module, exports, __webpack_require__) {

var moment = module.exports = __webpack_require__(2742);
moment.tz.load(__webpack_require__(2743));


/***/ }),

/***/ 2742:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//! moment-timezone.js
//! version : 0.5.21
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if (typeof module === 'object' && module.exports) {
		module.exports = factory(__webpack_require__(969)); // Node
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(969)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));                 // AMD
	} else {}
}(this, function (moment) {
	"use strict";

	// Do not load moment-timezone a second time.
	// if (moment.tz !== undefined) {
	// 	logError('Moment Timezone ' + moment.tz.version + ' was already loaded ' + (moment.tz.dataVersion ? 'with data from ' : 'without any data') + moment.tz.dataVersion);
	// 	return moment;
	// }

	var VERSION = "0.5.21",
		zones = {},
		links = {},
		names = {},
		guesses = {},
		cachedGuess;

	if (!moment || typeof moment.version !== 'string') {
		logError('Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/');
	}

	var momentVersion = moment.version.split('.'),
		major = +momentVersion[0],
		minor = +momentVersion[1];

	// Moment.js version check
	if (major < 2 || (major === 2 && minor < 6)) {
		logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
	}

	/************************************
		Unpacking
	************************************/

	function charCodeToInt(charCode) {
		if (charCode > 96) {
			return charCode - 87;
		} else if (charCode > 64) {
			return charCode - 29;
		}
		return charCode - 48;
	}

	function unpackBase60(string) {
		var i = 0,
			parts = string.split('.'),
			whole = parts[0],
			fractional = parts[1] || '',
			multiplier = 1,
			num,
			out = 0,
			sign = 1;

		// handle negative numbers
		if (string.charCodeAt(0) === 45) {
			i = 1;
			sign = -1;
		}

		// handle digits before the decimal
		for (i; i < whole.length; i++) {
			num = charCodeToInt(whole.charCodeAt(i));
			out = 60 * out + num;
		}

		// handle digits after the decimal
		for (i = 0; i < fractional.length; i++) {
			multiplier = multiplier / 60;
			num = charCodeToInt(fractional.charCodeAt(i));
			out += num * multiplier;
		}

		return out * sign;
	}

	function arrayToInt (array) {
		for (var i = 0; i < array.length; i++) {
			array[i] = unpackBase60(array[i]);
		}
	}

	function intToUntil (array, length) {
		for (var i = 0; i < length; i++) {
			array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
		}

		array[length - 1] = Infinity;
	}

	function mapIndices (source, indices) {
		var out = [], i;

		for (i = 0; i < indices.length; i++) {
			out[i] = source[indices[i]];
		}

		return out;
	}

	function unpack (string) {
		var data = string.split('|'),
			offsets = data[2].split(' '),
			indices = data[3].split(''),
			untils  = data[4].split(' ');

		arrayToInt(offsets);
		arrayToInt(indices);
		arrayToInt(untils);

		intToUntil(untils, indices.length);

		return {
			name       : data[0],
			abbrs      : mapIndices(data[1].split(' '), indices),
			offsets    : mapIndices(offsets, indices),
			untils     : untils,
			population : data[5] | 0
		};
	}

	/************************************
		Zone object
	************************************/

	function Zone (packedString) {
		if (packedString) {
			this._set(unpack(packedString));
		}
	}

	Zone.prototype = {
		_set : function (unpacked) {
			this.name       = unpacked.name;
			this.abbrs      = unpacked.abbrs;
			this.untils     = unpacked.untils;
			this.offsets    = unpacked.offsets;
			this.population = unpacked.population;
		},

		_index : function (timestamp) {
			var target = +timestamp,
				untils = this.untils,
				i;

			for (i = 0; i < untils.length; i++) {
				if (target < untils[i]) {
					return i;
				}
			}
		},

		parse : function (timestamp) {
			var target  = +timestamp,
				offsets = this.offsets,
				untils  = this.untils,
				max     = untils.length - 1,
				offset, offsetNext, offsetPrev, i;

			for (i = 0; i < max; i++) {
				offset     = offsets[i];
				offsetNext = offsets[i + 1];
				offsetPrev = offsets[i ? i - 1 : i];

				if (offset < offsetNext && tz.moveAmbiguousForward) {
					offset = offsetNext;
				} else if (offset > offsetPrev && tz.moveInvalidForward) {
					offset = offsetPrev;
				}

				if (target < untils[i] - (offset * 60000)) {
					return offsets[i];
				}
			}

			return offsets[max];
		},

		abbr : function (mom) {
			return this.abbrs[this._index(mom)];
		},

		offset : function (mom) {
			logError("zone.offset has been deprecated in favor of zone.utcOffset");
			return this.offsets[this._index(mom)];
		},

		utcOffset : function (mom) {
			return this.offsets[this._index(mom)];
		}
	};

	/************************************
		Current Timezone
	************************************/

	function OffsetAt(at) {
		var timeString = at.toTimeString();
		var abbr = timeString.match(/\([a-z ]+\)/i);
		if (abbr && abbr[0]) {
			// 17:56:31 GMT-0600 (CST)
			// 17:56:31 GMT-0600 (Central Standard Time)
			abbr = abbr[0].match(/[A-Z]/g);
			abbr = abbr ? abbr.join('') : undefined;
		} else {
			// 17:56:31 CST
			// 17:56:31 GMT+0800 (台北標準時間)
			abbr = timeString.match(/[A-Z]{3,5}/g);
			abbr = abbr ? abbr[0] : undefined;
		}

		if (abbr === 'GMT') {
			abbr = undefined;
		}

		this.at = +at;
		this.abbr = abbr;
		this.offset = at.getTimezoneOffset();
	}

	function ZoneScore(zone) {
		this.zone = zone;
		this.offsetScore = 0;
		this.abbrScore = 0;
	}

	ZoneScore.prototype.scoreOffsetAt = function (offsetAt) {
		this.offsetScore += Math.abs(this.zone.utcOffset(offsetAt.at) - offsetAt.offset);
		if (this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr) {
			this.abbrScore++;
		}
	};

	function findChange(low, high) {
		var mid, diff;

		while ((diff = ((high.at - low.at) / 12e4 | 0) * 6e4)) {
			mid = new OffsetAt(new Date(low.at + diff));
			if (mid.offset === low.offset) {
				low = mid;
			} else {
				high = mid;
			}
		}

		return low;
	}

	function userOffsets() {
		var startYear = new Date().getFullYear() - 2,
			last = new OffsetAt(new Date(startYear, 0, 1)),
			offsets = [last],
			change, next, i;

		for (i = 1; i < 48; i++) {
			next = new OffsetAt(new Date(startYear, i, 1));
			if (next.offset !== last.offset) {
				change = findChange(last, next);
				offsets.push(change);
				offsets.push(new OffsetAt(new Date(change.at + 6e4)));
			}
			last = next;
		}

		for (i = 0; i < 4; i++) {
			offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
			offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
		}

		return offsets;
	}

	function sortZoneScores (a, b) {
		if (a.offsetScore !== b.offsetScore) {
			return a.offsetScore - b.offsetScore;
		}
		if (a.abbrScore !== b.abbrScore) {
			return a.abbrScore - b.abbrScore;
		}
		return b.zone.population - a.zone.population;
	}

	function addToGuesses (name, offsets) {
		var i, offset;
		arrayToInt(offsets);
		for (i = 0; i < offsets.length; i++) {
			offset = offsets[i];
			guesses[offset] = guesses[offset] || {};
			guesses[offset][name] = true;
		}
	}

	function guessesForUserOffsets (offsets) {
		var offsetsLength = offsets.length,
			filteredGuesses = {},
			out = [],
			i, j, guessesOffset;

		for (i = 0; i < offsetsLength; i++) {
			guessesOffset = guesses[offsets[i].offset] || {};
			for (j in guessesOffset) {
				if (guessesOffset.hasOwnProperty(j)) {
					filteredGuesses[j] = true;
				}
			}
		}

		for (i in filteredGuesses) {
			if (filteredGuesses.hasOwnProperty(i)) {
				out.push(names[i]);
			}
		}

		return out;
	}

	function rebuildGuess () {

		// use Intl API when available and returning valid time zone
		try {
			var intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
			if (intlName && intlName.length > 3) {
				var name = names[normalizeName(intlName)];
				if (name) {
					return name;
				}
				logError("Moment Timezone found " + intlName + " from the Intl api, but did not have that data loaded.");
			}
		} catch (e) {
			// Intl unavailable, fall back to manual guessing.
		}

		var offsets = userOffsets(),
			offsetsLength = offsets.length,
			guesses = guessesForUserOffsets(offsets),
			zoneScores = [],
			zoneScore, i, j;

		for (i = 0; i < guesses.length; i++) {
			zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
			for (j = 0; j < offsetsLength; j++) {
				zoneScore.scoreOffsetAt(offsets[j]);
			}
			zoneScores.push(zoneScore);
		}

		zoneScores.sort(sortZoneScores);

		return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
	}

	function guess (ignoreCache) {
		if (!cachedGuess || ignoreCache) {
			cachedGuess = rebuildGuess();
		}
		return cachedGuess;
	}

	/************************************
		Global Methods
	************************************/

	function normalizeName (name) {
		return (name || '').toLowerCase().replace(/\//g, '_');
	}

	function addZone (packed) {
		var i, name, split, normalized;

		if (typeof packed === "string") {
			packed = [packed];
		}

		for (i = 0; i < packed.length; i++) {
			split = packed[i].split('|');
			name = split[0];
			normalized = normalizeName(name);
			zones[normalized] = packed[i];
			names[normalized] = name;
			addToGuesses(normalized, split[2].split(' '));
		}
	}

	function getZone (name, caller) {
		
		name = normalizeName(name);

		var zone = zones[name];
		var link;

		if (zone instanceof Zone) {
			return zone;
		}

		if (typeof zone === 'string') {
			zone = new Zone(zone);
			zones[name] = zone;
			return zone;
		}

		// Pass getZone to prevent recursion more than 1 level deep
		if (links[name] && caller !== getZone && (link = getZone(links[name], getZone))) {
			zone = zones[name] = new Zone();
			zone._set(link);
			zone.name = names[name];
			return zone;
		}

		return null;
	}

	function getNames () {
		var i, out = [];

		for (i in names) {
			if (names.hasOwnProperty(i) && (zones[i] || zones[links[i]]) && names[i]) {
				out.push(names[i]);
			}
		}

		return out.sort();
	}

	function addLink (aliases) {
		var i, alias, normal0, normal1;

		if (typeof aliases === "string") {
			aliases = [aliases];
		}

		for (i = 0; i < aliases.length; i++) {
			alias = aliases[i].split('|');

			normal0 = normalizeName(alias[0]);
			normal1 = normalizeName(alias[1]);

			links[normal0] = normal1;
			names[normal0] = alias[0];

			links[normal1] = normal0;
			names[normal1] = alias[1];
		}
	}

	function loadData (data) {
		addZone(data.zones);
		addLink(data.links);
		tz.dataVersion = data.version;
	}

	function zoneExists (name) {
		if (!zoneExists.didShowError) {
			zoneExists.didShowError = true;
				logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
		}
		return !!getZone(name);
	}

	function needsOffset (m) {
		var isUnixTimestamp = (m._f === 'X' || m._f === 'x');
		return !!(m._a && (m._tzm === undefined) && !isUnixTimestamp);
	}

	function logError (message) {
		if (typeof console !== 'undefined' && typeof console.error === 'function') {
			console.error(message);
		}
	}

	/************************************
		moment.tz namespace
	************************************/

	function tz (input) {
		var args = Array.prototype.slice.call(arguments, 0, -1),
			name = arguments[arguments.length - 1],
			zone = getZone(name),
			out  = moment.utc.apply(null, args);

		if (zone && !moment.isMoment(input) && needsOffset(out)) {
			out.add(zone.parse(out), 'minutes');
		}

		out.tz(name);

		return out;
	}

	tz.version      = VERSION;
	tz.dataVersion  = '';
	tz._zones       = zones;
	tz._links       = links;
	tz._names       = names;
	tz.add          = addZone;
	tz.link         = addLink;
	tz.load         = loadData;
	tz.zone         = getZone;
	tz.zoneExists   = zoneExists; // deprecated in 0.1.0
	tz.guess        = guess;
	tz.names        = getNames;
	tz.Zone         = Zone;
	tz.unpack       = unpack;
	tz.unpackBase60 = unpackBase60;
	tz.needsOffset  = needsOffset;
	tz.moveInvalidForward   = true;
	tz.moveAmbiguousForward = false;

	/************************************
		Interface with Moment.js
	************************************/

	var fn = moment.fn;

	moment.tz = tz;

	moment.defaultZone = null;

	moment.updateOffset = function (mom, keepTime) {
		var zone = moment.defaultZone,
			offset;

		if (mom._z === undefined) {
			if (zone && needsOffset(mom) && !mom._isUTC) {
				mom._d = moment.utc(mom._a)._d;
				mom.utc().add(zone.parse(mom), 'minutes');
			}
			mom._z = zone;
		}
		if (mom._z) {
			offset = mom._z.utcOffset(mom);
			if (Math.abs(offset) < 16) {
				offset = offset / 60;
			}
			if (mom.utcOffset !== undefined) {
				mom.utcOffset(-offset, keepTime);
			} else {
				mom.zone(offset, keepTime);
			}
		}
	};

	fn.tz = function (name, keepTime) {
		if (name) {
			if (typeof name !== 'string') {
				throw new Error('Time zone name must be a string, got ' + name + ' [' + typeof name + ']');
			}
			this._z = getZone(name);
			if (this._z) {
				moment.updateOffset(this, keepTime);
			} else {
				logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
			}
			return this;
		}
		if (this._z) { return this._z.name; }
	};

	function abbrWrap (old) {
		return function () {
			if (this._z) { return this._z.abbr(this); }
			return old.call(this);
		};
	}

	function resetZoneWrap (old) {
		return function () {
			this._z = null;
			return old.apply(this, arguments);
		};
	}

	fn.zoneName = abbrWrap(fn.zoneName);
	fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
	fn.utc      = resetZoneWrap(fn.utc);

	moment.tz.setDefault = function(name) {
		if (major < 2 || (major === 2 && minor < 9)) {
			logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
		}
		moment.defaultZone = name ? getZone(name) : null;
		return moment;
	};

	// Cloning a moment should include the _z property.
	var momentProperties = moment.momentProperties;
	if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
		// moment 2.8.1+
		momentProperties.push('_z');
		momentProperties.push('_a');
	} else if (momentProperties) {
		// moment 2.7.0
		momentProperties._z = null;
	}

	// INJECT DATA

	return moment;
}));


/***/ }),

/***/ 2743:
/***/ (function(module) {

module.exports = {"version":"2018e","zones":["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5","Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5","Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5","Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5","Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6","Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4","Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5","Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6","Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5","Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3","Africa/El_Aaiun|LMT -01 WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4","Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5","Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0","Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5","Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5","Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5","Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|012|-2le00 4i6N0","Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5","Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5","Africa/Windhoek|+0130 SAST SAST CAT WAT|-1u -20 -30 -20 -10|01213434343434343434343434343434343434343434343434343|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3","America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4","America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0","America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0","America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0","America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0","America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0","America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0","America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0","America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4","America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5","America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2","America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3","America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5","America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4","America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5","America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3","America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2","America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2","America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5","America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4","America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2","America/Campo_Grande|LMT -04 -03|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|77e4","America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5","America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3","America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5","America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4","America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5","America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2","America/Cuiaba|LMT -04 -03|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|54e4","America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8","America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3","America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2","America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|012342525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 XQp0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5","America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5","America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3","America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5","America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5","America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5","America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3","America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2","America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5","America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5","America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4","America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4","America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2","America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2","America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4","America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3","America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5","America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6","America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4","America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5","America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5","America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4","America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4","America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4","America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2","America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5","America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6","America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3","America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5","America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5","America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4","America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2","America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2","America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2","America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4","America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5","America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4","America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4","America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5","America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0","America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842","America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2","America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5","America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4","America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229","America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4","America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5","America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5","America/Sao_Paulo|LMT -03 -02|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|20e6","America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452","America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2","America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3","America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5","America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656","America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4","America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642","America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","Antarctica/Casey|-00 +08 +11|0 -80 -b0|01212121|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10|10","Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70","Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80","Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1","Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60","Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5","Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40","Antarctica/Rothera|-00 -03|0 30|01|gOo0|130","Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20","Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40","Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25","Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4","Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5","Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5","Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5","Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3","Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4","Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4","Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4","Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0","Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5","Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4","Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6","Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5","Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4","Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4","Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6","Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4","Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3","Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6","Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5","Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6","Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5","Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4","Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5","Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4","Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0|18e5","Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0|25e4","Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5","Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5","Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6","Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4","Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4","Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5","Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4","Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6","Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5","Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5","Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2","Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5","Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4","Asia/Macau|LMT CST CDT|-7y.k -80 -90|012121212121212121212121212121212121212121|-2le80 1XO3u 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0|57e4","Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3","Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5","Asia/Manila|+08 +09|-80 -90|010101010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6","Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4","Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4","Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5","Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5","Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4","Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4","Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|012313|-2um8n 97XR 1lTzu 2Onc0 6BAu|29e5","Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4","Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5","Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4","Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4","Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -9u -a0|0123141414141414135353|-2um8r.Q 97XV.Q 1m1zu kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6","Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2","Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5","Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5","Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5","Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6","Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3","Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rb0 1ld0 14n0 1zd0 On0 1zd0 On0|38e6","Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5","Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5","Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2","Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4","Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5","Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5","Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4","Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3","Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4","Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3","Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4","Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4","Atlantic/South_Georgia|-02|20|0||30","Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2","Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5","Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5","Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3","Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746","Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4","Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368","Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4","Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347","Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10","Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5","Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5","CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2","CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","EST|EST|50|0|","EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Etc/GMT-0|GMT|0|0|","Etc/GMT-1|+01|-10|0|","Pacific/Port_Moresby|+10|-a0|0||25e4","Pacific/Pohnpei|+11|-b0|0||34e3","Pacific/Tarawa|+12|-c0|0||29e3","Etc/GMT-13|+13|-d0|0|","Etc/GMT-14|+14|-e0|0|","Etc/GMT-2|+02|-20|0|","Etc/GMT-3|+03|-30|0|","Etc/GMT-4|+04|-40|0|","Etc/GMT-5|+05|-50|0|","Etc/GMT-6|+06|-60|0|","Indian/Christmas|+07|-70|0||21e2","Etc/GMT-8|+08|-80|0|","Pacific/Palau|+09|-90|0||21e3","Etc/GMT+1|-01|10|0|","Etc/GMT+10|-10|a0|0|","Etc/GMT+11|-11|b0|0|","Etc/GMT+12|-12|c0|0|","Etc/GMT+3|-03|30|0|","Etc/GMT+4|-04|40|0|","Etc/GMT+5|-05|50|0|","Etc/GMT+6|-06|60|0|","Etc/GMT+7|-07|70|0|","Etc/GMT+8|-08|80|0|","Etc/GMT+9|-09|90|0|","Etc/UCT|UCT|0|0|","Etc/UTC|UTC|0|0|","Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5","Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3","Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5","Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6","Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5","Europe/Prague|CET CEST GMT|-10 -20 0|01010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 1qM0 11c0 mp0 xA0 mn0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5","Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5","Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5","Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4","Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4","Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3","Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4","Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5","Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4","Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5","Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5","Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5","Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3","Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6","Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6","Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4","Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5","Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5","Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810","Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4","Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5","Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4","Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4","Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5","Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4","HST|HST|a0|0|","Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2","Indian/Cocos|+0630|-6u|0||596","Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130","Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3","Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4","Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4","Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4","Pacific/Kwajalein|+11 -12 +12|-b0 c0 -c0|012|-AX0 W9X0|14e3","MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","MST|MST|70|0|","MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600","Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3","Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4","Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3","Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1","Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483","Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0|88e4","Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3","Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125","Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4","Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4","Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4","Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2","Pacific/Kosrae|+11 +12|-b0 -c0|010|-AX0 1bdz0|66e2","Pacific/Majuro|+11 +12|-b0 -c0|01|-AX0|28e3","Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2","Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2","Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3","Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2","Pacific/Norfolk|+1112 +1130 +1230 +11|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4","Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3","Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56","Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3","Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4","Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3","PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"],"links":["Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|Atlantic/St_Helena","Africa/Cairo|Egypt","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|US/Alaska","America/Argentina/Buenos_Aires|America/Buenos_Aires","America/Argentina/Catamarca|America/Argentina/ComodRivadavia","America/Argentina/Catamarca|America/Catamarca","America/Argentina/Cordoba|America/Cordoba","America/Argentina/Cordoba|America/Rosario","America/Argentina/Jujuy|America/Jujuy","America/Argentina/Mendoza|America/Mendoza","America/Atikokan|America/Coral_Harbour","America/Chicago|US/Central","America/Curacao|America/Aruba","America/Curacao|America/Kralendijk","America/Curacao|America/Lower_Princes","America/Denver|America/Shiprock","America/Denver|Navajo","America/Denver|US/Mountain","America/Detroit|US/Michigan","America/Edmonton|Canada/Mountain","America/Fort_Wayne|America/Indiana/Indianapolis","America/Fort_Wayne|America/Indianapolis","America/Fort_Wayne|US/East-Indiana","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Indiana/Knox|America/Knox_IN","America/Indiana/Knox|US/Indiana-Starke","America/Jamaica|Jamaica","America/Kentucky/Louisville|America/Louisville","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Manaus|Brazil/West","America/Mazatlan|Mexico/BajaSur","America/Mexico_City|Mexico/General","America/New_York|US/Eastern","America/Noronha|Brazil/DeNoronha","America/Panama|America/Cayman","America/Phoenix|US/Arizona","America/Port_of_Spain|America/Anguilla","America/Port_of_Spain|America/Antigua","America/Port_of_Spain|America/Dominica","America/Port_of_Spain|America/Grenada","America/Port_of_Spain|America/Guadeloupe","America/Port_of_Spain|America/Marigot","America/Port_of_Spain|America/Montserrat","America/Port_of_Spain|America/St_Barthelemy","America/Port_of_Spain|America/St_Kitts","America/Port_of_Spain|America/St_Lucia","America/Port_of_Spain|America/St_Thomas","America/Port_of_Spain|America/St_Vincent","America/Port_of_Spain|America/Tortola","America/Port_of_Spain|America/Virgin","America/Regina|Canada/Saskatchewan","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Chile/Continental","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","America/Tijuana|America/Ensenada","America/Tijuana|America/Santa_Isabel","America/Tijuana|Mexico/BajaNorte","America/Toronto|America/Montreal","America/Toronto|Canada/Eastern","America/Vancouver|Canada/Pacific","America/Whitehorse|Canada/Yukon","America/Winnipeg|Canada/Central","Asia/Ashgabat|Asia/Ashkhabad","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Vientiane","Asia/Dhaka|Asia/Dacca","Asia/Dubai|Asia/Muscat","Asia/Ho_Chi_Minh|Asia/Saigon","Asia/Hong_Kong|Hongkong","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Singapore","Asia/Macau|Asia/Macao","Asia/Makassar|Asia/Ujung_Pandang","Asia/Nicosia|Europe/Nicosia","Asia/Qatar|Asia/Bahrain","Asia/Rangoon|Asia/Yangon","Asia/Riyadh|Asia/Aden","Asia/Riyadh|Asia/Kuwait","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|PRC","Asia/Taipei|ROC","Asia/Tehran|Iran","Asia/Thimphu|Asia/Thimbu","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Urumqi|Asia/Kashgar","Atlantic/Faroe|Atlantic/Faeroe","Atlantic/Reykjavik|Iceland","Atlantic/South_Georgia|Etc/GMT+2","Australia/Adelaide|Australia/South","Australia/Brisbane|Australia/Queensland","Australia/Broken_Hill|Australia/Yancowinna","Australia/Darwin|Australia/North","Australia/Hobart|Australia/Tasmania","Australia/Lord_Howe|Australia/LHI","Australia/Melbourne|Australia/Victoria","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/NSW","Etc/GMT-0|Etc/GMT","Etc/GMT-0|Etc/GMT+0","Etc/GMT-0|Etc/GMT0","Etc/GMT-0|Etc/Greenwich","Etc/GMT-0|GMT","Etc/GMT-0|GMT+0","Etc/GMT-0|GMT-0","Etc/GMT-0|GMT0","Etc/GMT-0|Greenwich","Etc/UCT|UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Belgrade|Europe/Ljubljana","Europe/Belgrade|Europe/Podgorica","Europe/Belgrade|Europe/Sarajevo","Europe/Belgrade|Europe/Skopje","Europe/Belgrade|Europe/Zagreb","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Helsinki|Europe/Mariehamn","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Portugal","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Oslo|Arctic/Longyearbyen","Europe/Oslo|Atlantic/Jan_Mayen","Europe/Prague|Europe/Bratislava","Europe/Rome|Europe/San_Marino","Europe/Rome|Europe/Vatican","Europe/Warsaw|Poland","Europe/Zurich|Europe/Busingen","Europe/Zurich|Europe/Vaduz","Indian/Christmas|Etc/GMT-7","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kwajalein|Kwajalein","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Palau|Etc/GMT-9","Pacific/Pohnpei|Etc/GMT-11","Pacific/Pohnpei|Pacific/Ponape","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Port_Moresby|Pacific/Chuuk","Pacific/Port_Moresby|Pacific/Truk","Pacific/Port_Moresby|Pacific/Yap","Pacific/Tarawa|Etc/GMT-12","Pacific/Tarawa|Pacific/Funafuti","Pacific/Tarawa|Pacific/Wake","Pacific/Tarawa|Pacific/Wallis"]};

/***/ }),

/***/ 2749:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Set: __webpack_require__(2750),
  Static: __webpack_require__(2756)
};

/***/ }),

/***/ 2750:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(389);
var foundationApi = __webpack_require__(720);
var Notification = __webpack_require__(2751);
var Animation = __webpack_require__(2752);
var createReactClass = __webpack_require__(989);

var NotificationSet = createReactClass({
  displayName: 'NotificationSet',

  getInitialState: function getInitialState() {
    return { notifications: [] };
  },
  componentDidMount: function componentDidMount() {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'clearall') {
        this.clearAll();
      } else {
        this.addNotification(msg);
      }
    }.bind(this));
  },
  addNotification: function addNotification(notification) {
    notification.id = foundationApi.generateUuid();
    var notifications = this.state.notifications.concat(notification);
    this.setState({
      notifications: notifications
    });
  },
  removeNotifcation: function removeNotifcation(id) {
    return function (e) {
      var notifications = [];
      this.state.notifications.forEach(function (notification) {
        if (notification.id !== id) {
          notifications.push(notification);
        }
      });
      this.setState({
        notifications: notifications
      });
      e.preventDefault();
    }.bind(this);
  },
  clearAll: function clearAll() {
    this.setState({ notifications: [] });
  },
  render: function render() {
    var notifications = this.state.notifications.map(function (notification) {
      return React.createElement(
        Notification,
        _extends({ key: notification.id }, notification, { closeHandler: this.removeNotifcation(notification.id), className: 'is-active' }),
        notification.content
      );
    }.bind(this));
    return React.createElement(
      'div',
      null,
      notifications
    );
  }
});

module.exports = NotificationSet;

/***/ }),

/***/ 2751:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(389);
var createReactClass = __webpack_require__(989);

var Notification = createReactClass({
  displayName: 'Notification',

  getDefaultProps: function getDefaultProps() {
    return {
      position: 'top-right',
      color: 'success',
      title: null,
      image: null,
      content: null,
      wrapperElement: "p"
    };
  },
  render: function render() {
    var classes = 'notification ' + this.props.position + ' ' + this.props.color;
    classes += ' ' + (this.props.className || '');
    var imageNode = null;
    if (this.props.image) {
      imageNode = React.createElement(
        'div',
        { className: 'notification-icon' },
        React.createElement('img', { src: '{{ image }}' })
      );
    }
    return React.createElement(
      'div',
      { id: this.props.id, 'data-closable': true, className: classes },
      React.createElement(
        'a',
        { href: '#', className: 'close-button', onClick: this.props.closeHandler },
        '\xD7'
      ),
      imageNode,
      React.createElement(
        'div',
        { className: 'notification-content' },
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(this.props.wrapperElement, null, this.props.children)
      )
    );
  }
});

module.exports = Notification;

/***/ }),

/***/ 2752:
/***/ (function(module, exports, __webpack_require__) {

// some parts of code from react/lib/ReactCSSTransitionGroupChild.js
var React = __webpack_require__(389);
var ReactDOM = __webpack_require__(398);
var ReactTransitionEvents = __webpack_require__(2753);
var CSSCore = __webpack_require__(2755);
var createReactClass = __webpack_require__(989);

var classnames = __webpack_require__(819);
var TICK = 17;

var Animation = createReactClass({
  displayName: 'Animation',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      animationIn: '',
      animationOut: ''
    };
  },
  reflow: function reflow(node) {
    return node.offsetWidth;
  },
  reset: function reset(node) {
    node.style.transitionDuration = 0;
    CSSCore.removeClass(node, 'ng-enter');
    CSSCore.removeClass(node, 'ng-leave');
    CSSCore.removeClass(node, 'ng-enter-active');
    CSSCore.removeClass(node, 'ng-leave-active');
    CSSCore.removeClass(node, this.props.animationIn);
    CSSCore.removeClass(node, this.props.animationOut);
  },
  finishAnimation: function finishAnimation() {
    var node = ReactDOM.findDOMNode(this);
    this.reset(node);
    CSSCore.removeClass(node, this.props.active ? '' : 'is-active');
    this.reflow(node);
    ReactTransitionEvents.removeEndEventListener(node, this.finishAnimation);
  },
  animate: function animate(animationClass, animationType) {
    var node = ReactDOM.findDOMNode(this);
    var initClass = 'ng-' + animationType;
    var activeClass = initClass + '-active';

    this.reset(node);
    CSSCore.addClass(node, animationClass);
    CSSCore.addClass(node, initClass);
    CSSCore.addClass(node, 'is-active');

    //force a "tick"
    this.reflow(node);

    //activate
    node.style.transitionDuration = '';
    CSSCore.addClass(node, activeClass);

    ReactTransitionEvents.addEndEventListener(node, this.finishAnimation);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      var animationClass = this.props.active ? this.props.animationIn : this.props.animationOut;
      var animationType = this.props.active ? 'enter' : 'leave';
      this.animate(animationClass, animationType);
    }
  },
  render: function render() {
    var child = React.Children.only(this.props.children);
    var extraProps = {};
    return React.cloneElement(child, extraProps);
  }
});

module.exports = Animation;

/***/ }),

/***/ 2753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Copyright 2013-2015, Facebook, Inc.
* All rights reserved.
*
* This source code is licensed under the BSD-style license found in the
* LICENSE file in the root directory of this source tree. An additional grant
* of patent rights can be found in the PATENTS file in the same directory.
*
* @providesModule ReactTransitionEvents
*/



var ExecutionEnvironment = __webpack_require__(2754);

/**
* EVENT_NAME_MAP is used to determine which event fired when a
* transition/animation ends, based on the style property used to
* define that event.
*/
var EVENT_NAME_MAP = {
 transitionend: {
   'transition': 'transitionend',
   'WebkitTransition': 'webkitTransitionEnd',
   'MozTransition': 'mozTransitionEnd',
   'OTransition': 'oTransitionEnd',
   'msTransition': 'MSTransitionEnd'
 },

 animationend: {
   'animation': 'animationend',
   'WebkitAnimation': 'webkitAnimationEnd',
   'MozAnimation': 'mozAnimationEnd',
   'OAnimation': 'oAnimationEnd',
   'msAnimation': 'MSAnimationEnd'
 }
};

var endEvents = [];

function detectEvents() {
 var testEl = document.createElement('div');
 var style = testEl.style;

 // On some platforms, in particular some releases of Android 4.x,
 // the un-prefixed "animation" and "transition" properties are defined on the
 // style object but the events that fire will still be prefixed, so we need
 // to check if the un-prefixed events are useable, and if not remove them
 // from the map
 if (!('AnimationEvent' in window)) {
   delete EVENT_NAME_MAP.animationend.animation;
 }

 if (!('TransitionEvent' in window)) {
   delete EVENT_NAME_MAP.transitionend.transition;
 }

 for (var baseEventName in EVENT_NAME_MAP) {
   var baseEvents = EVENT_NAME_MAP[baseEventName];
   for (var styleName in baseEvents) {
     if (styleName in style) {
       endEvents.push(baseEvents[styleName]);
       break;
     }
   }
 }
}

if (ExecutionEnvironment.canUseDOM) {
 detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
 node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
 node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
 addEndEventListener: function(node, eventListener) {
   if (endEvents.length === 0) {
     // If CSS transitions are not supported, trigger an "end animation"
     // event immediately.
     window.setTimeout(eventListener, 0);
     return;
   }
   endEvents.forEach(function(endEvent) {
     addEventListener(node, endEvent, eventListener);
   });
 },

 removeEndEventListener: function(node, eventListener) {
   if (endEvents.length === 0) {
     return;
   }
   endEvents.forEach(function(endEvent) {
     removeEventListener(node, endEvent, eventListener);
   });
 }
};

module.exports = ReactTransitionEvents;


/***/ }),

/***/ 2754:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ 2755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPACE = ' ';
var RE_CLASS = /[\n\t\r]/g;

var norm = function norm(elemClass) {
  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
};

module.exports = {
  addClass: function addClass(elem, className) {
    elem.className += ' ' + className;
  },
  removeClass: function removeClass(elem, needle) {
    var elemClass = elem.className.trim();
    var className = norm(elemClass);
    needle = needle.trim();
    needle = SPACE + needle + SPACE;
    while (className.indexOf(needle) >= 0) {
      className = className.replace(needle, SPACE);
    }
    elem.className = className.trim();
  }
};

/***/ }),

/***/ 2756:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(389);
var classnames = __webpack_require__(819);
var foundationApi = __webpack_require__(720);
var Animation = __webpack_require__(2752);
var Notification = __webpack_require__(2751);
var createReactClass = __webpack_require__(989);

var NotificationStatic = createReactClass({
  displayName: 'NotificationStatic',

  getInitialState: function getInitialState() {
    return { open: false };
  },
  componentDidMount: function componentDidMount() {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'open') {
        this.setState({ open: true });
      } else if (msg === 'close') {
        this.setState({ open: false });
      }
    }.bind(this));
  },
  componentWillUnmount: function componentWillUnmount() {
    foundationApi.unsubscribe(this.props.id);
  },
  closeHandler: function closeHandler(e) {
    this.setState({ open: false });
    e.preventDefault();
    e.stopPropagation();
  },
  render: function render() {
    return React.createElement(
      Animation,
      { active: this.state.open, animationIn: 'fadeIn', animationOut: 'fadeOut' },
      React.createElement(
        Notification,
        _extends({}, this.props, { closeHandler: this.closeHandler }),
        this.props.children
      )
    );
  }
});

module.exports = NotificationStatic;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35leGNoYW5nZS5hNGFlODkxMjgwZWIzYWE4Nzg4Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvRGF0ZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdGV0aGVyL2xpYi9yZWFjdC10ZXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRldGhlci9saWIvVGV0aGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXRoZXIvZGlzdC9qcy90ZXRoZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL0RheXNWaWV3SGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy91dGlscy9wZXJzaWFuLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL3V0aWxzL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL0RheXNPZldlZWsuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9Nb250aFNlbGVjdG9yLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvTW9udGhzVmlld0hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9EYXkuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvdXRpbHMvbW9tZW50LWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb25jbGlja291dHNpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9EZWZhdWx0U3R5bGVzLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvQ3VzdG9tVGltZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL1RpbWVQaWNrZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9UaW1lUGlja2VyL1RpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwSW5uZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9MYXp5UmVuZGVyQm94LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbGliL2dldENvbnRhaW5lclJlbmRlck1peGluLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvVGltZVBpY2tlci9QYW5lbC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL1RpbWVQaWNrZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvVGltZVBpY2tlci9Db21ib2JveC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL1RpbWVQaWNrZXIvU2VsZWN0LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvVGltZVBpY2tlci9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icm93c2VyLWxvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktdGFibGUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2Rpc3QvVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0aWNreS10YWJsZS9kaXN0L1Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2Rpc3QvQ2VsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZXZlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC10aW1lem9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50LXRpbWV6b25lL21vbWVudC10aW1lem9uZS5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvbm90aWZpY2F0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvbm90aWZpY2F0aW9uL3NldC5qc3giLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uanN4Iiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9hbmltYXRpb24uanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL1JlYWN0VHJhbnNpdGlvbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2Nzc2NvcmUuanN4Iiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy9ub3RpZmljYXRpb24vc3RhdGljLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuL2NvbXBvbmVudHMvRGF0ZVBpY2tlcic7XG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyO1xuLy8gZXhwb3J0IENhbGVuZGFyIGZyb20gJy4vY29tcG9uZW50cy9DYWxlbmRhcic7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vQ2FsZW5kYXInO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTXlUaW1lUGlja2VyIGZyb20gJy4vQ3VzdG9tVGltZVBpY2tlcidcblxuZXhwb3J0IGNvbnN0IG91dHNpZGVDbGlja0lnbm9yZUNsYXNzID0gJ2lnbm9yZS0tY2xpY2stLW91dHNpZGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgbWluOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1heDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkZWZhdWx0TW9udGg6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGlja2VyUG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVtb3ZhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2FsZW5kYXJTdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2FsZW5kYXJDb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0aW1lUGlja2VyOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzOiB1bmRlZmluZWQsXG4gICAgY2FsZW5kYXJDb250YWluZXJQcm9wczoge30sXG4gICAgdGltZVBpY2tlcjogdHJ1ZVxuICB9O1xuXG4gIGxhc3RWYWx1ZUNoYW5nZSA9IG51bGw7XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICBtb21lbnRWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgfHwgbnVsbCxcbiAgICBpbnB1dFZhbHVlOiB0aGlzLmdldFZhbHVlKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLCB0aGlzLnByb3BzLnRpbWVQaWNrZXIpLFxuICAgIGlucHV0Rm9ybWF0OiB0aGlzLnByb3BzLmlucHV0Rm9ybWF0IHx8IHRoaXMuZ2V0SW5wdXRGb3JtYXQodGhpcy5wcm9wcy50aW1lUGlja2VyKSxcbiAgICB0aW1lUGlja2VyOiB0aGlzLnByb3BzLnRpbWVQaWNrZXIsXG4gICAgdGltZVBpY2tlckNvbXBvbmVudDogdGhpcy5wcm9wcy50aW1lUGlja2VyID8gTXlUaW1lUGlja2VyIDogdW5kZWZpbmVkXG4gIH07XG5cbiAgZ2V0SW5wdXRGb3JtYXQodGltZVBpY2tlcikge1xuICAgIGlmICghIXRpbWVQaWNrZXIpXG4gICAgICByZXR1cm4gJ1lZWVkvTS9EIGhoOm1tIEEnO1xuICAgIHJldHVybiAnWVlZWS9NL0QnO1xuICB9XG5cbiAgZ2V0VmFsdWUoaW5wdXRWYWx1ZSwgdGltZVBpY2tlcikge1xuICAgIGlmICghaW5wdXRWYWx1ZSlcbiAgICAgIHJldHVybiAnJztcbiAgICBjb25zdCBpbnB1dEZvcm1hdCA9IHRoaXMuZ2V0SW5wdXRGb3JtYXQodGltZVBpY2tlcik7XG5cbiAgICByZXR1cm4gaW5wdXRWYWx1ZS5sb2NhbGUoJ2VuJykuZm9ybWF0KHRoaXMucHJvcHMuaW5wdXRGb3JtYXQgfHwgaW5wdXRGb3JtYXQpO1xuICB9XG5cbiAgc2V0T3Blbihpc09wZW4pIHtcblxuICAgIGNvbnN0IHsgbW9tZW50VmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKG1vbWVudFZhbHVlICYmIHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UobW9tZW50VmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW4gfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0TW9tZW50VmFsdWUodGhpcy5wcm9wcy52YWx1ZSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cbiAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMgJiYgbmV4dFByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldE1vbWVudFZhbHVlKG5leHRQcm9wcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCd0aW1lUGlja2VyJyBpbiBuZXh0UHJvcHMgJiYgbmV4dFByb3BzLnRpbWVQaWNrZXIgIT09IHRoaXMucHJvcHMudGltZVBpY2tlcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpbWVQaWNrZXI6IG5leHRQcm9wcy50aW1lUGlja2VyLFxuICAgICAgICB0aW1lUGlja2VyQ29tcG9uZW50OiB0aGlzLnByb3BzLnRpbWVQaWNrZXIgPyBNeVRpbWVQaWNrZXIgOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XG5cbiAgICAgIGlmICghdGhpcy5sYXN0VmFsdWVDaGFuZ2UgfHwgIXRoaXMubGFzdFZhbHVlQ2hhbmdlLnZhbHVlT2YpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlIDEnKTtcbiAgICAgICAgICB0aGlzLmxhc3RWYWx1ZUNoYW5nZSA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlLnZhbHVlT2YgJiYgdmFsdWUudmFsdWVPZigpICE9PSB0aGlzLmxhc3RWYWx1ZUNoYW5nZS52YWx1ZU9mKCkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlIDInKTtcbiAgICAgICAgICB0aGlzLmxhc3RWYWx1ZUNoYW5nZSA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgfVxuXG4gIH1cblxuICBzZXRNb21lbnRWYWx1ZShtb21lbnRWYWx1ZSwgZG9DaGFuZ2UpIHtcbiAgICBjb25zdCB7IGlucHV0Rm9ybWF0LCB0aW1lUGlja2VyIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGRvQ2hhbmdlICE9PSBmYWxzZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZShtb21lbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgaW5wdXRWYWx1ZSA9IG1vbWVudFZhbHVlLmZvcm1hdChpbnB1dEZvcm1hdCk7XG5cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5nZXRWYWx1ZShtb21lbnRWYWx1ZSwgdGltZVBpY2tlcik7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbW9tZW50VmFsdWUsIGlucHV0VmFsdWUgfSk7XG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICB0aGlzLnNldE9wZW4odHJ1ZSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBvbkJsdXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc09wZW4sIG1vbWVudFZhbHVlLCBpbnB1dEZvcm1hdCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAob25CbHVyKSB7XG4gICAgICBvbkJsdXIoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtb21lbnRWYWx1ZSkge1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IG1vbWVudFZhbHVlLmZvcm1hdChpbnB1dEZvcm1hdCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGlja091dHNpZGVDYWxlbmRhcigpIHtcbiAgICB0aGlzLnNldE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0RGF5KHNlbGVjdGVkRGF5KSB7XG4gICAgY29uc3QgeyBtb21lbnRWYWx1ZTogb2xkVmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IG1vbWVudFZhbHVlID0gc2VsZWN0ZWREYXkuY2xvbmUoKTtcblxuICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgbW9tZW50VmFsdWUgPSBtb21lbnRWYWx1ZVxuICAgICAgICAuc2V0KHtcbiAgICAgICAgICBob3VyOiBvbGRWYWx1ZS5ob3VycygpLFxuICAgICAgICAgIG1pbnV0ZTogb2xkVmFsdWUubWludXRlcygpLFxuICAgICAgICAgIHNlY29uZDogb2xkVmFsdWUuc2Vjb25kcygpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0TW9tZW50VmFsdWUobW9tZW50VmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB7IGlucHV0Rm9ybWF0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbW9tZW50VmFsdWUgPSBtb21lbnQoaW5wdXRWYWx1ZSwgaW5wdXRGb3JtYXQpO1xuXG4gICAgaWYgKG1vbWVudFZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vbWVudFZhbHVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDbGljaygpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0T3Blbih0cnVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcklucHV0KCkge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwge1xuICAgICAgW291dHNpZGVDbGlja0lnbm9yZUNsYXNzXTogaXNPcGVuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZGF0ZXBpY2tlci1pbnB1dCAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUlucHV0Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJDYWxlbmRhcigpIHtcbiAgICBjb25zdCB7IG1vbWVudFZhbHVlLCB0aW1lUGlja2VyQ29tcG9uZW50OiBUaW1lUGlja2VyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIG1pbiwgbWF4LCBkZWZhdWx0TW9udGgsIHN0eWxlcywgY2FsZW5kYXJDb250YWluZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICBzZWxlY3RlZERheT17bW9tZW50VmFsdWV9XG4gICAgICAgICAgZGVmYXVsdE1vbnRoPXtkZWZhdWx0TW9udGh9XG4gICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0RGF5LmJpbmQodGhpcyl9XG4gICAgICAgICAgb25DbGlja091dHNpZGU9e3RoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlQ2FsZW5kYXIuYmluZCh0aGlzKX1cbiAgICAgICAgICBvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzcz17b3V0c2lkZUNsaWNrSWdub3JlQ2xhc3N9XG4gICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgY29udGFpbmVyUHJvcHM9e2NhbGVuZGFyQ29udGFpbmVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBUaW1lUGlja2VyID8gKFxuICAgICAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgICAgIG1vbWVudFZhbHVlPXttb21lbnRWYWx1ZX1cbiAgICAgICAgICAgICAgICBzZXRNb21lbnRWYWx1ZT17dGhpcy5zZXRNb21lbnRWYWx1ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvQ2FsZW5kYXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlRGF0ZSgpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoJycpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0OiAnJyxcbiAgICAgIGlucHV0VmFsdWU6ICcnXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudCBjbGFzc05hbWU9e3RoaXMucHJvcHMud3JhcHBlckNsYXNzTmFtZSB8fCAnJ30gYXR0YWNobWVudD17dGhpcy5wcm9wcy5waWNrZXJQb3NpdGlvbiB8fCAndG9wIGNlbnRlcid9PlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgpfVxuICAgICAgICB7aXNPcGVuID8gdGhpcy5yZW5kZXJDYWxlbmRhcigpIDogbnVsbH1cbiAgICAgIDwvVGV0aGVyQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9UZXRoZXJDb21wb25lbnQgPSByZXF1aXJlKCcuL1RldGhlckNvbXBvbmVudCcpO1xuXG52YXIgX1RldGhlckNvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXRoZXJDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfVGV0aGVyQ29tcG9uZW50Mi5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3RldGhlciA9IHJlcXVpcmUoJ3RldGhlcicpO1xuXG52YXIgX3RldGhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXRoZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaWYgKCFfdGV0aGVyMi5kZWZhdWx0KSB7XG4gIGNvbnNvbGUuZXJyb3IoJ0l0IGxvb2tzIGxpa2UgVGV0aGVyIGhhcyBub3QgYmVlbiBpbmNsdWRlZC4gUGxlYXNlIGxvYWQgdGhpcyBkZXBlbmRlbmN5IGZpcnN0IGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3RldGhlcicpO1xufVxuXG52YXIgcmVuZGVyRWxlbWVudFRvUHJvcFR5cGVzID0gW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgYXBwZW5kQ2hpbGQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG59KV07XG5cbnZhciBjaGlsZHJlblByb3BUeXBlID0gZnVuY3Rpb24gY2hpbGRyZW5Qcm9wVHlwZShfcmVmLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuXG4gIHZhciBjaGlsZENvdW50ID0gX3JlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKTtcbiAgaWYgKGNoaWxkQ291bnQgPD0gMCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoY29tcG9uZW50TmFtZSArICcgZXhwZWN0cyBhdCBsZWFzdCBvbmUgY2hpbGQgdG8gdXNlIGFzIHRoZSB0YXJnZXQgZWxlbWVudC4nKTtcbiAgfSBlbHNlIGlmIChjaGlsZENvdW50ID4gMikge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ09ubHkgYSBtYXggb2YgdHdvIGNoaWxkcmVuIGFsbG93ZWQgaW4gJyArIGNvbXBvbmVudE5hbWUgKyAnLicpO1xuICB9XG59O1xuXG52YXIgYXR0YWNobWVudFBvc2l0aW9ucyA9IFsnYXV0byBhdXRvJywgJ3RvcCBsZWZ0JywgJ3RvcCBjZW50ZXInLCAndG9wIHJpZ2h0JywgJ21pZGRsZSBsZWZ0JywgJ21pZGRsZSBjZW50ZXInLCAnbWlkZGxlIHJpZ2h0JywgJ2JvdHRvbSBsZWZ0JywgJ2JvdHRvbSBjZW50ZXInLCAnYm90dG9tIHJpZ2h0J107XG5cbnZhciBUZXRoZXJDb21wb25lbnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVGV0aGVyQ29tcG9uZW50LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUZXRoZXJDb21wb25lbnQoKSB7XG4gICAgdmFyIF9yZWYyO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXRoZXJDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZjIgPSBUZXRoZXJDb21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXRoZXJDb21wb25lbnQpKS5jYWxsLmFwcGx5KF9yZWYyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuX3RhcmdldE5vZGUgPSBudWxsLCBfdGhpcy5fZWxlbWVudFBhcmVudE5vZGUgPSBudWxsLCBfdGhpcy5fdGV0aGVyID0gZmFsc2UsIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRldGhlckNvbXBvbmVudCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fdGFyZ2V0Tm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHRoaXMuX3RhcmdldE5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFRldGhlckluc3RhbmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGV0aGVySW5zdGFuY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGV0aGVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5fdGV0aGVyLmRpc2FibGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmFibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB0aGlzLl90ZXRoZXIuZW5hYmxlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgaGFuZGxlciwgY3R4KSB7XG4gICAgICB0aGlzLl90ZXRoZXIub24oZXZlbnQsIGhhbmRsZXIsIGN0eCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGhhbmRsZXIsIGN0eCkge1xuICAgICAgdGhpcy5fdGV0aGVyLm9uY2UoZXZlbnQsIGhhbmRsZXIsIGN0eCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb2ZmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICB0aGlzLl90ZXRoZXIub2ZmKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgICAgdGhpcy5fdGV0aGVyLnBvc2l0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICAgIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cbiAgICAgIHRoaXMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy5vblVwZGF0ZSAmJiBfdGhpczIucHJvcHMub25VcGRhdGUuYXBwbHkoX3RoaXMyLCBfYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm9uKCdyZXBvc2l0aW9uZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIucHJvcHMub25SZXBvc2l0aW9uZWQgJiYgX3RoaXMyLnByb3BzLm9uUmVwb3NpdGlvbmVkLmFwcGx5KF90aGlzMiwgX2FyZ3VtZW50cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9kZXN0cm95KCkge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlKSB7XG4gICAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudFBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50UGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl90ZXRoZXIpIHtcbiAgICAgICAgdGhpcy5fdGV0aGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudFBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGV0aGVyID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICByZW5kZXJFbGVtZW50VGFnID0gX3Byb3BzLnJlbmRlckVsZW1lbnRUYWc7XG5cbiAgICAgIHZhciBlbGVtZW50Q29tcG9uZW50ID0gX3JlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pWzFdO1xuXG4gICAgICAvLyBpZiBubyBlbGVtZW50IGNvbXBvbmVudCBwcm92aWRlZCwgYmFpbCBvdXRcbiAgICAgIGlmICghZWxlbWVudENvbXBvbmVudCkge1xuICAgICAgICAvLyBkZXN0cm95IFRldGhlciBlbGVtZW50IGlmIGl0IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgaWYgKHRoaXMuX3RldGhlcikge1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGNyZWF0ZSBlbGVtZW50IG5vZGUgY29udGFpbmVyIGlmIGl0IGhhc24ndCBiZWVuIHlldFxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50UGFyZW50Tm9kZSkge1xuICAgICAgICAvLyBjcmVhdGUgYSBub2RlIHRoYXQgd2UgY2FuIHN0aWNrIG91ciBjb250ZW50IENvbXBvbmVudCBpblxuICAgICAgICB0aGlzLl9lbGVtZW50UGFyZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocmVuZGVyRWxlbWVudFRhZyk7XG5cbiAgICAgICAgLy8gYXBwZW5kIG5vZGUgdG8gdGhlIHJlbmRlciBub2RlXG4gICAgICAgIHRoaXMuX3JlbmRlck5vZGUuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudFBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvLyByZW5kZXIgZWxlbWVudCBjb21wb25lbnQgaW50byB0aGUgRE9NXG4gICAgICBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIodGhpcywgZWxlbWVudENvbXBvbmVudCwgdGhpcy5fZWxlbWVudFBhcmVudE5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaWYgd2UncmUgbm90IGRlc3Ryb3llZCwgdXBkYXRlIFRldGhlciBvbmNlIHRoZSBzdWJ0cmVlIGhhcyBmaW5pc2hlZCByZW5kZXJpbmdcbiAgICAgICAgaWYgKF90aGlzMy5fZWxlbWVudFBhcmVudE5vZGUpIHtcbiAgICAgICAgICBfdGhpczMuX3VwZGF0ZVRldGhlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlVGV0aGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVRldGhlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIHJlbmRlckVsZW1lbnRUYWcgPSBfcHJvcHMyLnJlbmRlckVsZW1lbnRUYWcsXG4gICAgICAgICAgcmVuZGVyRWxlbWVudFRvID0gX3Byb3BzMi5yZW5kZXJFbGVtZW50VG8sXG4gICAgICAgICAgaWQgPSBfcHJvcHMyLmlkLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzMi5zdHlsZSxcbiAgICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczIsIFsnY2hpbGRyZW4nLCAncmVuZGVyRWxlbWVudFRhZycsICdyZW5kZXJFbGVtZW50VG8nLCAnaWQnLCAnY2xhc3NOYW1lJywgJ3N0eWxlJ10pO1xuXG4gICAgICB2YXIgdGV0aGVyT3B0aW9ucyA9IF9leHRlbmRzKHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLl90YXJnZXROb2RlLFxuICAgICAgICBlbGVtZW50OiB0aGlzLl9lbGVtZW50UGFyZW50Tm9kZVxuICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmIChpZCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50UGFyZW50Tm9kZS5pZCA9IGlkO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBfdGhpczQuX2VsZW1lbnRQYXJlbnROb2RlLnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl90ZXRoZXIpIHtcbiAgICAgICAgdGhpcy5fdGV0aGVyID0gbmV3IF90ZXRoZXIyLmRlZmF1bHQodGV0aGVyT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RldGhlci5zZXRPcHRpb25zKHRldGhlck9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90ZXRoZXIucG9zaXRpb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0LkNoaWxkcmVuLnRvQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbilbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3JlbmRlck5vZGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJlbmRlckVsZW1lbnRUbyA9IHRoaXMucHJvcHMucmVuZGVyRWxlbWVudFRvO1xuXG4gICAgICBpZiAodHlwZW9mIHJlbmRlckVsZW1lbnRUbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVuZGVyRWxlbWVudFRvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZW5kZXJFbGVtZW50VG8gfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGV0aGVyQ29tcG9uZW50O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGV0aGVyQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgcmVuZGVyRWxlbWVudFRhZzogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHJlbmRlckVsZW1lbnRUbzogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUocmVuZGVyRWxlbWVudFRvUHJvcFR5cGVzKSxcbiAgYXR0YWNobWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihhdHRhY2htZW50UG9zaXRpb25zKS5pc1JlcXVpcmVkLFxuICB0YXJnZXRBdHRhY2htZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKGF0dGFjaG1lbnRQb3NpdGlvbnMpLFxuICBvZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0YXJnZXRPZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0YXJnZXRNb2RpZmllcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGVuYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2xhc3NlczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGNsYXNzUHJlZml4OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3B0aW1pemF0aW9uczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGNvbnN0cmFpbnRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LFxuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgb25VcGRhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25SZXBvc2l0aW9uZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY2hpbGRyZW46IGNoaWxkcmVuUHJvcFR5cGVcbn07XG5UZXRoZXJDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICByZW5kZXJFbGVtZW50VGFnOiAnZGl2JyxcbiAgcmVuZGVyRWxlbWVudFRvOiBudWxsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gVGV0aGVyQ29tcG9uZW50O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyohIHRldGhlciAxLjQuNCAqL1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByb290LlRldGhlciA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbigpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIFRldGhlckJhc2UgPSB1bmRlZmluZWQ7XG5pZiAodHlwZW9mIFRldGhlckJhc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gIFRldGhlckJhc2UgPSB7IG1vZHVsZXM6IFtdIH07XG59XG5cbnZhciB6ZXJvRWxlbWVudCA9IG51bGw7XG5cbi8vIFNhbWUgYXMgbmF0aXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCwgZXhjZXB0IGl0IHRha2VzIGludG8gYWNjb3VudCBwYXJlbnQgPGZyYW1lPiBvZmZzZXRzXG4vLyBpZiB0aGUgZWxlbWVudCBsaWVzIHdpdGhpbiBhIG5lc3RlZCBkb2N1bWVudCAoPGZyYW1lPiBvciA8aWZyYW1lPi1saWtlKS5cbmZ1bmN0aW9uIGdldEFjdHVhbEJvdW5kaW5nQ2xpZW50UmVjdChub2RlKSB7XG4gIHZhciBib3VuZGluZ1JlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIC8vIFRoZSBvcmlnaW5hbCBvYmplY3QgcmV0dXJuZWQgYnkgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIGltbXV0YWJsZSwgc28gd2UgY2xvbmUgaXRcbiAgLy8gV2UgY2FuJ3QgdXNlIGV4dGVuZCBiZWNhdXNlIHRoZSBwcm9wZXJ0aWVzIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBvYmplY3QgYnkgaGFzT3duUHJvcGVydHkgaW4gSUU5XG4gIHZhciByZWN0ID0ge307XG4gIGZvciAodmFyIGsgaW4gYm91bmRpbmdSZWN0KSB7XG4gICAgcmVjdFtrXSA9IGJvdW5kaW5nUmVjdFtrXTtcbiAgfVxuXG4gIGlmIChub2RlLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgdmFyIF9mcmFtZUVsZW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZnJhbWVFbGVtZW50O1xuICAgIGlmIChfZnJhbWVFbGVtZW50KSB7XG4gICAgICB2YXIgZnJhbWVSZWN0ID0gZ2V0QWN0dWFsQm91bmRpbmdDbGllbnRSZWN0KF9mcmFtZUVsZW1lbnQpO1xuICAgICAgcmVjdC50b3AgKz0gZnJhbWVSZWN0LnRvcDtcbiAgICAgIHJlY3QuYm90dG9tICs9IGZyYW1lUmVjdC50b3A7XG4gICAgICByZWN0LmxlZnQgKz0gZnJhbWVSZWN0LmxlZnQ7XG4gICAgICByZWN0LnJpZ2h0ICs9IGZyYW1lUmVjdC5sZWZ0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnRzKGVsKSB7XG4gIC8vIEluIGZpcmVmb3ggaWYgdGhlIGVsIGlzIGluc2lkZSBhbiBpZnJhbWUgd2l0aCBkaXNwbGF5OiBub25lOyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSgpIHdpbGwgcmV0dXJuIG51bGw7XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpIHx8IHt9O1xuICB2YXIgcG9zaXRpb24gPSBjb21wdXRlZFN0eWxlLnBvc2l0aW9uO1xuICB2YXIgcGFyZW50cyA9IFtdO1xuXG4gIGlmIChwb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBbZWxdO1xuICB9XG5cbiAgdmFyIHBhcmVudCA9IGVsO1xuICB3aGlsZSAoKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSAmJiBwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgdmFyIHN0eWxlID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAndW5kZWZpbmVkJyB8fCBzdHlsZSA9PT0gbnVsbCkge1xuICAgICAgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9XG5cbiAgICB2YXIgX3N0eWxlID0gc3R5bGU7XG4gICAgdmFyIG92ZXJmbG93ID0gX3N0eWxlLm92ZXJmbG93O1xuICAgIHZhciBvdmVyZmxvd1ggPSBfc3R5bGUub3ZlcmZsb3dYO1xuICAgIHZhciBvdmVyZmxvd1kgPSBfc3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpKSB7XG4gICAgICBpZiAocG9zaXRpb24gIT09ICdhYnNvbHV0ZScgfHwgWydyZWxhdGl2ZScsICdhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2Yoc3R5bGUucG9zaXRpb24pID49IDApIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFyZW50cy5wdXNoKGVsLm93bmVyRG9jdW1lbnQuYm9keSk7XG5cbiAgLy8gSWYgdGhlIG5vZGUgaXMgd2l0aGluIGEgZnJhbWUsIGFjY291bnQgZm9yIHRoZSBwYXJlbnQgd2luZG93IHNjcm9sbFxuICBpZiAoZWwub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICBwYXJlbnRzLnB1c2goZWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cztcbn1cblxudmFyIHVuaXF1ZUlkID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKytpZDtcbiAgfTtcbn0pKCk7XG5cbnZhciB6ZXJvUG9zQ2FjaGUgPSB7fTtcbnZhciBnZXRPcmlnaW4gPSBmdW5jdGlvbiBnZXRPcmlnaW4oKSB7XG4gIC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyB1bmZvcnR1bmF0ZWx5IHRvbyBhY2N1cmF0ZS4gIEl0IGludHJvZHVjZXMgYSBwaXhlbCBvciB0d28gb2ZcbiAgLy8gaml0dGVyIGFzIHRoZSB1c2VyIHNjcm9sbHMgdGhhdCBtZXNzZXMgd2l0aCBvdXIgYWJpbGl0eSB0byBkZXRlY3QgaWYgdHdvIHBvc2l0aW9uc1xuICAvLyBhcmUgZXF1aXZpbGFudCBvciBub3QuICBXZSBwbGFjZSBhbiBlbGVtZW50IGF0IHRoZSB0b3AgbGVmdCBvZiB0aGUgcGFnZSB0aGF0IHdpbGxcbiAgLy8gZ2V0IHRoZSBzYW1lIGppdHRlciwgc28gd2UgY2FuIGNhbmNlbCB0aGUgdHdvIG91dC5cbiAgdmFyIG5vZGUgPSB6ZXJvRWxlbWVudDtcbiAgaWYgKCFub2RlIHx8ICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG5vZGUpKSB7XG4gICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXRldGhlci1pZCcsIHVuaXF1ZUlkKCkpO1xuICAgIGV4dGVuZChub2RlLnN0eWxlLCB7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICB6ZXJvRWxlbWVudCA9IG5vZGU7XG4gIH1cblxuICB2YXIgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10ZXRoZXItaWQnKTtcbiAgaWYgKHR5cGVvZiB6ZXJvUG9zQ2FjaGVbaWRdID09PSAndW5kZWZpbmVkJykge1xuICAgIHplcm9Qb3NDYWNoZVtpZF0gPSBnZXRBY3R1YWxCb3VuZGluZ0NsaWVudFJlY3Qobm9kZSk7XG5cbiAgICAvLyBDbGVhciB0aGUgY2FjaGUgd2hlbiB0aGlzIHBvc2l0aW9uIGNhbGwgaXMgZG9uZVxuICAgIGRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlbGV0ZSB6ZXJvUG9zQ2FjaGVbaWRdO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHplcm9Qb3NDYWNoZVtpZF07XG59O1xuXG5mdW5jdGlvbiByZW1vdmVVdGlsRWxlbWVudHMoKSB7XG4gIGlmICh6ZXJvRWxlbWVudCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoemVyb0VsZW1lbnQpO1xuICB9XG4gIHplcm9FbGVtZW50ID0gbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGdldEJvdW5kcyhlbCkge1xuICB2YXIgZG9jID0gdW5kZWZpbmVkO1xuICBpZiAoZWwgPT09IGRvY3VtZW50KSB7XG4gICAgZG9jID0gZG9jdW1lbnQ7XG4gICAgZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgfVxuXG4gIHZhciBkb2NFbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgdmFyIGJveCA9IGdldEFjdHVhbEJvdW5kaW5nQ2xpZW50UmVjdChlbCk7XG5cbiAgdmFyIG9yaWdpbiA9IGdldE9yaWdpbigpO1xuXG4gIGJveC50b3AgLT0gb3JpZ2luLnRvcDtcbiAgYm94LmxlZnQgLT0gb3JpZ2luLmxlZnQ7XG5cbiAgaWYgKHR5cGVvZiBib3gud2lkdGggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgYm94LndpZHRoID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCAtIGJveC5sZWZ0IC0gYm94LnJpZ2h0O1xuICB9XG4gIGlmICh0eXBlb2YgYm94LmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBib3guaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSBib3gudG9wIC0gYm94LmJvdHRvbTtcbiAgfVxuXG4gIGJveC50b3AgPSBib3gudG9wIC0gZG9jRWwuY2xpZW50VG9wO1xuICBib3gubGVmdCA9IGJveC5sZWZ0IC0gZG9jRWwuY2xpZW50TGVmdDtcbiAgYm94LnJpZ2h0ID0gZG9jLmJvZHkuY2xpZW50V2lkdGggLSBib3gud2lkdGggLSBib3gubGVmdDtcbiAgYm94LmJvdHRvbSA9IGRvYy5ib2R5LmNsaWVudEhlaWdodCAtIGJveC5oZWlnaHQgLSBib3gudG9wO1xuXG4gIHJldHVybiBib3g7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbCkge1xuICByZXR1cm4gZWwub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cblxudmFyIF9zY3JvbGxCYXJTaXplID0gbnVsbDtcbmZ1bmN0aW9uIGdldFNjcm9sbEJhclNpemUoKSB7XG4gIGlmIChfc2Nyb2xsQmFyU2l6ZSkge1xuICAgIHJldHVybiBfc2Nyb2xsQmFyU2l6ZTtcbiAgfVxuICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gIGlubmVyLnN0eWxlLmhlaWdodCA9ICcyMDBweCc7XG5cbiAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4dGVuZChvdXRlci5zdHlsZSwge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB3aWR0aDogJzIwMHB4JyxcbiAgICBoZWlnaHQ6ICcxNTBweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0pO1xuXG4gIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuICB2YXIgd2lkdGhDb250YWluZWQgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgdmFyIHdpZHRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgaWYgKHdpZHRoQ29udGFpbmVkID09PSB3aWR0aFNjcm9sbCkge1xuICAgIHdpZHRoU2Nyb2xsID0gb3V0ZXIuY2xpZW50V2lkdGg7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICB2YXIgd2lkdGggPSB3aWR0aENvbnRhaW5lZCAtIHdpZHRoU2Nyb2xsO1xuXG4gIF9zY3JvbGxCYXJTaXplID0geyB3aWR0aDogd2lkdGgsIGhlaWdodDogd2lkdGggfTtcbiAgcmV0dXJuIF9zY3JvbGxCYXJTaXplO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gIHZhciBvdXQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICB2YXIgYXJncyA9IFtdO1xuXG4gIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG5cbiAgYXJncy5zbGljZSgxKS5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmICgoe30pLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgb3V0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNscykge1xuICAgICAgaWYgKGNscy50cmltKCkpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJyhefCApJyArIG5hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKCB8JCknLCAnZ2knKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKGVsKS5yZXBsYWNlKHJlZ2V4LCAnICcpO1xuICAgIHNldENsYXNzTmFtZShlbCwgY2xhc3NOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbCwgbmFtZSkge1xuICBpZiAodHlwZW9mIGVsLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgICBpZiAoY2xzLnRyaW0oKSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MoZWwsIG5hbWUpO1xuICAgIHZhciBjbHMgPSBnZXRDbGFzc05hbWUoZWwpICsgKCcgJyArIG5hbWUpO1xuICAgIHNldENsYXNzTmFtZShlbCwgY2xzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbCwgbmFtZSkge1xuICBpZiAodHlwZW9mIGVsLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKG5hbWUpO1xuICB9XG4gIHZhciBjbGFzc05hbWUgPSBnZXRDbGFzc05hbWUoZWwpO1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnKF58ICknICsgbmFtZSArICcoIHwkKScsICdnaScpLnRlc3QoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKGVsKSB7XG4gIC8vIENhbid0IHVzZSBqdXN0IFNWR0FuaW1hdGVkU3RyaW5nIGhlcmUgc2luY2Ugbm9kZXMgd2l0aGluIGEgRnJhbWUgaW4gSUUgaGF2ZVxuICAvLyBjb21wbGV0ZWx5IHNlcGFyYXRlbHkgU1ZHQW5pbWF0ZWRTdHJpbmcgYmFzZSBjbGFzc2VzXG4gIGlmIChlbC5jbGFzc05hbWUgaW5zdGFuY2VvZiBlbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LlNWR0FuaW1hdGVkU3RyaW5nKSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTmFtZS5iYXNlVmFsO1xuICB9XG4gIHJldHVybiBlbC5jbGFzc05hbWU7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzTmFtZShlbCwgY2xhc3NOYW1lKSB7XG4gIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDbGFzc2VzKGVsLCBhZGQsIGFsbCkge1xuICAvLyBPZiB0aGUgc2V0IG9mICdhbGwnIGNsYXNzZXMsIHdlIG5lZWQgdGhlICdhZGQnIGNsYXNzZXMsIGFuZCBvbmx5IHRoZVxuICAvLyAnYWRkJyBjbGFzc2VzIHRvIGJlIHNldC5cbiAgYWxsLmZvckVhY2goZnVuY3Rpb24gKGNscykge1xuICAgIGlmIChhZGQuaW5kZXhPZihjbHMpID09PSAtMSAmJiBoYXNDbGFzcyhlbCwgY2xzKSkge1xuICAgICAgcmVtb3ZlQ2xhc3MoZWwsIGNscyk7XG4gICAgfVxuICB9KTtcblxuICBhZGQuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgaWYgKCFoYXNDbGFzcyhlbCwgY2xzKSkge1xuICAgICAgYWRkQ2xhc3MoZWwsIGNscyk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGRlZmVycmVkID0gW107XG5cbnZhciBkZWZlciA9IGZ1bmN0aW9uIGRlZmVyKGZuKSB7XG4gIGRlZmVycmVkLnB1c2goZm4pO1xufTtcblxudmFyIGZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gIHZhciBmbiA9IHVuZGVmaW5lZDtcbiAgd2hpbGUgKGZuID0gZGVmZXJyZWQucG9wKCkpIHtcbiAgICBmbigpO1xuICB9XG59O1xuXG52YXIgRXZlbnRlZCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50ZWQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50ZWQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50ZWQsIFt7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgaGFuZGxlciwgY3R4KSB7XG4gICAgICB2YXIgb25jZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzNdO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuYmluZGluZ3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5iaW5kaW5nc1tldmVudF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XS5wdXNoKHsgaGFuZGxlcjogaGFuZGxlciwgY3R4OiBjdHgsIG9uY2U6IG9uY2UgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGhhbmRsZXIsIGN0eCkge1xuICAgICAgdGhpcy5vbihldmVudCwgaGFuZGxlciwgY3R4LCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvZmYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5iaW5kaW5ncyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRoaXMuYmluZGluZ3NbZXZlbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYmluZGluZ3NbZXZlbnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHRoaXMuYmluZGluZ3NbZXZlbnRdLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0aGlzLmJpbmRpbmdzW2V2ZW50XVtpXS5oYW5kbGVyID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0cmlnZ2VyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJpZ2dlcihldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmJpbmRpbmdzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmJpbmRpbmdzW2V2ZW50XSkge1xuICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoaSA8IHRoaXMuYmluZGluZ3NbZXZlbnRdLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBfYmluZGluZ3MkZXZlbnQkaSA9IHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldO1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gX2JpbmRpbmdzJGV2ZW50JGkuaGFuZGxlcjtcbiAgICAgICAgICB2YXIgY3R4ID0gX2JpbmRpbmdzJGV2ZW50JGkuY3R4O1xuICAgICAgICAgIHZhciBvbmNlID0gX2JpbmRpbmdzJGV2ZW50JGkub25jZTtcblxuICAgICAgICAgIHZhciBjb250ZXh0ID0gY3R4O1xuICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cbiAgICAgICAgICBpZiAob25jZSkge1xuICAgICAgICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV2ZW50ZWQ7XG59KSgpO1xuXG5UZXRoZXJCYXNlLlV0aWxzID0ge1xuICBnZXRBY3R1YWxCb3VuZGluZ0NsaWVudFJlY3Q6IGdldEFjdHVhbEJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgZ2V0U2Nyb2xsUGFyZW50czogZ2V0U2Nyb2xsUGFyZW50cyxcbiAgZ2V0Qm91bmRzOiBnZXRCb3VuZHMsXG4gIGdldE9mZnNldFBhcmVudDogZ2V0T2Zmc2V0UGFyZW50LFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgYWRkQ2xhc3M6IGFkZENsYXNzLFxuICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG4gIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgdXBkYXRlQ2xhc3NlczogdXBkYXRlQ2xhc3NlcyxcbiAgZGVmZXI6IGRlZmVyLFxuICBmbHVzaDogZmx1c2gsXG4gIHVuaXF1ZUlkOiB1bmlxdWVJZCxcbiAgRXZlbnRlZDogRXZlbnRlZCxcbiAgZ2V0U2Nyb2xsQmFyU2l6ZTogZ2V0U2Nyb2xsQmFyU2l6ZSxcbiAgcmVtb3ZlVXRpbEVsZW1lbnRzOiByZW1vdmVVdGlsRWxlbWVudHNcbn07XG4vKiBnbG9iYWxzIFRldGhlckJhc2UsIHBlcmZvcm1hbmNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbJ3JldHVybiddKSBfaVsncmV0dXJuJ10oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZScpOyB9IH07IH0pKCk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94NiwgX3g3LCBfeDgpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3g2LCBwcm9wZXJ0eSA9IF94NywgcmVjZWl2ZXIgPSBfeDg7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3g2ID0gcGFyZW50OyBfeDcgPSBwcm9wZXJ0eTsgX3g4ID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmlmICh0eXBlb2YgVGV0aGVyQmFzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBpbmNsdWRlIHRoZSB1dGlscy5qcyBmaWxlIGJlZm9yZSB0ZXRoZXIuanMnKTtcbn1cblxudmFyIF9UZXRoZXJCYXNlJFV0aWxzID0gVGV0aGVyQmFzZS5VdGlscztcbnZhciBnZXRTY3JvbGxQYXJlbnRzID0gX1RldGhlckJhc2UkVXRpbHMuZ2V0U2Nyb2xsUGFyZW50cztcbnZhciBnZXRCb3VuZHMgPSBfVGV0aGVyQmFzZSRVdGlscy5nZXRCb3VuZHM7XG52YXIgZ2V0T2Zmc2V0UGFyZW50ID0gX1RldGhlckJhc2UkVXRpbHMuZ2V0T2Zmc2V0UGFyZW50O1xudmFyIGV4dGVuZCA9IF9UZXRoZXJCYXNlJFV0aWxzLmV4dGVuZDtcbnZhciBhZGRDbGFzcyA9IF9UZXRoZXJCYXNlJFV0aWxzLmFkZENsYXNzO1xudmFyIHJlbW92ZUNsYXNzID0gX1RldGhlckJhc2UkVXRpbHMucmVtb3ZlQ2xhc3M7XG52YXIgdXBkYXRlQ2xhc3NlcyA9IF9UZXRoZXJCYXNlJFV0aWxzLnVwZGF0ZUNsYXNzZXM7XG52YXIgZGVmZXIgPSBfVGV0aGVyQmFzZSRVdGlscy5kZWZlcjtcbnZhciBmbHVzaCA9IF9UZXRoZXJCYXNlJFV0aWxzLmZsdXNoO1xudmFyIGdldFNjcm9sbEJhclNpemUgPSBfVGV0aGVyQmFzZSRVdGlscy5nZXRTY3JvbGxCYXJTaXplO1xudmFyIHJlbW92ZVV0aWxFbGVtZW50cyA9IF9UZXRoZXJCYXNlJFV0aWxzLnJlbW92ZVV0aWxFbGVtZW50cztcblxuZnVuY3Rpb24gd2l0aGluKGEsIGIpIHtcbiAgdmFyIGRpZmYgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzJdO1xuXG4gIHJldHVybiBhICsgZGlmZiA+PSBiICYmIGIgPj0gYSAtIGRpZmY7XG59XG5cbnZhciB0cmFuc2Zvcm1LZXkgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICB2YXIgdHJhbnNmb3JtcyA9IFsndHJhbnNmb3JtJywgJ1dlYmtpdFRyYW5zZm9ybScsICdPVHJhbnNmb3JtJywgJ01velRyYW5zZm9ybScsICdtc1RyYW5zZm9ybSddO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYW5zZm9ybXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIga2V5ID0gdHJhbnNmb3Jtc1tpXTtcbiAgICBpZiAoZWwuc3R5bGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxufSkoKTtcblxudmFyIHRldGhlcnMgPSBbXTtcblxudmFyIHBvc2l0aW9uID0gZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gIHRldGhlcnMuZm9yRWFjaChmdW5jdGlvbiAodGV0aGVyKSB7XG4gICAgdGV0aGVyLnBvc2l0aW9uKGZhbHNlKTtcbiAgfSk7XG4gIGZsdXNoKCk7XG59O1xuXG5mdW5jdGlvbiBub3coKSB7XG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gIH1cbiAgcmV0dXJuICtuZXcgRGF0ZSgpO1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgbGFzdENhbGwgPSBudWxsO1xuICB2YXIgbGFzdER1cmF0aW9uID0gbnVsbDtcbiAgdmFyIHBlbmRpbmdUaW1lb3V0ID0gbnVsbDtcblxuICB2YXIgdGljayA9IGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgaWYgKHR5cGVvZiBsYXN0RHVyYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGxhc3REdXJhdGlvbiA+IDE2KSB7XG4gICAgICAvLyBXZSB2b2x1bnRhcmlseSB0aHJvdHRsZSBvdXJzZWx2ZXMgaWYgd2UgY2FuJ3QgbWFuYWdlIDYwZnBzXG4gICAgICBsYXN0RHVyYXRpb24gPSBNYXRoLm1pbihsYXN0RHVyYXRpb24gLSAxNiwgMjUwKTtcblxuICAgICAgLy8gSnVzdCBpbiBjYXNlIHRoaXMgaXMgdGhlIGxhc3QgZXZlbnQsIHJlbWVtYmVyIHRvIHBvc2l0aW9uIGp1c3Qgb25jZSBtb3JlXG4gICAgICBwZW5kaW5nVGltZW91dCA9IHNldFRpbWVvdXQodGljaywgMjUwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGxhc3RDYWxsICE9PSAndW5kZWZpbmVkJyAmJiBub3coKSAtIGxhc3RDYWxsIDwgMTApIHtcbiAgICAgIC8vIFNvbWUgYnJvd3NlcnMgY2FsbCBldmVudHMgYSBsaXR0bGUgdG9vIGZyZXF1ZW50bHksIHJlZnVzZSB0byBydW4gbW9yZSB0aGFuIGlzIHJlYXNvbmFibGVcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGVuZGluZ1RpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHBlbmRpbmdUaW1lb3V0KTtcbiAgICAgIHBlbmRpbmdUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBsYXN0Q2FsbCA9IG5vdygpO1xuICAgIHBvc2l0aW9uKCk7XG4gICAgbGFzdER1cmF0aW9uID0gbm93KCkgLSBsYXN0Q2FsbDtcbiAgfTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIFsncmVzaXplJywgJ3Njcm9sbCcsICd0b3VjaG1vdmUnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRpY2spO1xuICAgIH0pO1xuICB9XG59KSgpO1xuXG52YXIgTUlSUk9SX0xSID0ge1xuICBjZW50ZXI6ICdjZW50ZXInLFxuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnXG59O1xuXG52YXIgTUlSUk9SX1RCID0ge1xuICBtaWRkbGU6ICdtaWRkbGUnLFxuICB0b3A6ICdib3R0b20nLFxuICBib3R0b206ICd0b3AnXG59O1xuXG52YXIgT0ZGU0VUX01BUCA9IHtcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICBtaWRkbGU6ICc1MCUnLFxuICBjZW50ZXI6ICc1MCUnLFxuICBib3R0b206ICcxMDAlJyxcbiAgcmlnaHQ6ICcxMDAlJ1xufTtcblxudmFyIGF1dG9Ub0ZpeGVkQXR0YWNobWVudCA9IGZ1bmN0aW9uIGF1dG9Ub0ZpeGVkQXR0YWNobWVudChhdHRhY2htZW50LCByZWxhdGl2ZVRvQXR0YWNobWVudCkge1xuICB2YXIgbGVmdCA9IGF0dGFjaG1lbnQubGVmdDtcbiAgdmFyIHRvcCA9IGF0dGFjaG1lbnQudG9wO1xuXG4gIGlmIChsZWZ0ID09PSAnYXV0bycpIHtcbiAgICBsZWZ0ID0gTUlSUk9SX0xSW3JlbGF0aXZlVG9BdHRhY2htZW50LmxlZnRdO1xuICB9XG5cbiAgaWYgKHRvcCA9PT0gJ2F1dG8nKSB7XG4gICAgdG9wID0gTUlSUk9SX1RCW3JlbGF0aXZlVG9BdHRhY2htZW50LnRvcF07XG4gIH1cblxuICByZXR1cm4geyBsZWZ0OiBsZWZ0LCB0b3A6IHRvcCB9O1xufTtcblxudmFyIGF0dGFjaG1lbnRUb09mZnNldCA9IGZ1bmN0aW9uIGF0dGFjaG1lbnRUb09mZnNldChhdHRhY2htZW50KSB7XG4gIHZhciBsZWZ0ID0gYXR0YWNobWVudC5sZWZ0O1xuICB2YXIgdG9wID0gYXR0YWNobWVudC50b3A7XG5cbiAgaWYgKHR5cGVvZiBPRkZTRVRfTUFQW2F0dGFjaG1lbnQubGVmdF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGVmdCA9IE9GRlNFVF9NQVBbYXR0YWNobWVudC5sZWZ0XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgT0ZGU0VUX01BUFthdHRhY2htZW50LnRvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdG9wID0gT0ZGU0VUX01BUFthdHRhY2htZW50LnRvcF07XG4gIH1cblxuICByZXR1cm4geyBsZWZ0OiBsZWZ0LCB0b3A6IHRvcCB9O1xufTtcblxuZnVuY3Rpb24gYWRkT2Zmc2V0KCkge1xuICB2YXIgb3V0ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgb2Zmc2V0cyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG9mZnNldHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBvZmZzZXRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgdG9wID0gX3JlZi50b3A7XG4gICAgdmFyIGxlZnQgPSBfcmVmLmxlZnQ7XG5cbiAgICBpZiAodHlwZW9mIHRvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRvcCA9IHBhcnNlRmxvYXQodG9wLCAxMCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGVmdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxlZnQgPSBwYXJzZUZsb2F0KGxlZnQsIDEwKTtcbiAgICB9XG5cbiAgICBvdXQudG9wICs9IHRvcDtcbiAgICBvdXQubGVmdCArPSBsZWZ0O1xuICB9KTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBvZmZzZXRUb1B4KG9mZnNldCwgc2l6ZSkge1xuICBpZiAodHlwZW9mIG9mZnNldC5sZWZ0ID09PSAnc3RyaW5nJyAmJiBvZmZzZXQubGVmdC5pbmRleE9mKCclJykgIT09IC0xKSB7XG4gICAgb2Zmc2V0LmxlZnQgPSBwYXJzZUZsb2F0KG9mZnNldC5sZWZ0LCAxMCkgLyAxMDAgKiBzaXplLndpZHRoO1xuICB9XG4gIGlmICh0eXBlb2Ygb2Zmc2V0LnRvcCA9PT0gJ3N0cmluZycgJiYgb2Zmc2V0LnRvcC5pbmRleE9mKCclJykgIT09IC0xKSB7XG4gICAgb2Zmc2V0LnRvcCA9IHBhcnNlRmxvYXQob2Zmc2V0LnRvcCwgMTApIC8gMTAwICogc2l6ZS5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuXG52YXIgcGFyc2VPZmZzZXQgPSBmdW5jdGlvbiBwYXJzZU9mZnNldCh2YWx1ZSkge1xuICB2YXIgX3ZhbHVlJHNwbGl0ID0gdmFsdWUuc3BsaXQoJyAnKTtcblxuICB2YXIgX3ZhbHVlJHNwbGl0MiA9IF9zbGljZWRUb0FycmF5KF92YWx1ZSRzcGxpdCwgMik7XG5cbiAgdmFyIHRvcCA9IF92YWx1ZSRzcGxpdDJbMF07XG4gIHZhciBsZWZ0ID0gX3ZhbHVlJHNwbGl0MlsxXTtcblxuICByZXR1cm4geyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9O1xufTtcbnZhciBwYXJzZUF0dGFjaG1lbnQgPSBwYXJzZU9mZnNldDtcblxudmFyIFRldGhlckNsYXNzID0gKGZ1bmN0aW9uIChfRXZlbnRlZCkge1xuICBfaW5oZXJpdHMoVGV0aGVyQ2xhc3MsIF9FdmVudGVkKTtcblxuICBmdW5jdGlvbiBUZXRoZXJDbGFzcyhvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXRoZXJDbGFzcyk7XG5cbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXRoZXJDbGFzcy5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmJpbmQodGhpcyk7XG5cbiAgICB0ZXRoZXJzLnB1c2godGhpcyk7XG5cbiAgICB0aGlzLmhpc3RvcnkgPSBbXTtcblxuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zLCBmYWxzZSk7XG5cbiAgICBUZXRoZXJCYXNlLm1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICBpZiAodHlwZW9mIG1vZHVsZS5pbml0aWFsaXplICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuaW5pdGlhbGl6ZS5jYWxsKF90aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucG9zaXRpb24oKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUZXRoZXJDbGFzcywgW3tcbiAgICBrZXk6ICdnZXRDbGFzcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsYXNzKCkge1xuICAgICAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzBdO1xuICAgICAgdmFyIGNsYXNzZXMgPSB0aGlzLm9wdGlvbnMuY2xhc3NlcztcblxuICAgICAgaWYgKHR5cGVvZiBjbGFzc2VzICE9PSAndW5kZWZpbmVkJyAmJiBjbGFzc2VzW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc2VzW2tleV07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jbGFzc1ByZWZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsYXNzUHJlZml4ICsgJy0nICsga2V5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRPcHRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgb2Zmc2V0OiAnMCAwJyxcbiAgICAgICAgdGFyZ2V0T2Zmc2V0OiAnMCAwJyxcbiAgICAgICAgdGFyZ2V0QXR0YWNobWVudDogJ2F1dG8gYXV0bycsXG4gICAgICAgIGNsYXNzUHJlZml4OiAndGV0aGVyJ1xuICAgICAgfTtcblxuICAgICAgdGhpcy5vcHRpb25zID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgdmFyIF9vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgdmFyIGVsZW1lbnQgPSBfb3B0aW9ucy5lbGVtZW50O1xuICAgICAgdmFyIHRhcmdldCA9IF9vcHRpb25zLnRhcmdldDtcbiAgICAgIHZhciB0YXJnZXRNb2RpZmllciA9IF9vcHRpb25zLnRhcmdldE1vZGlmaWVyO1xuXG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICB0aGlzLnRhcmdldE1vZGlmaWVyID0gdGFyZ2V0TW9kaWZpZXI7XG5cbiAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIHRoaXMudGFyZ2V0TW9kaWZpZXIgPSAndmlzaWJsZSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0ID09PSAnc2Nyb2xsLWhhbmRsZScpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB0aGlzLnRhcmdldE1vZGlmaWVyID0gJ3Njcm9sbC1oYW5kbGUnO1xuICAgICAgfVxuXG4gICAgICBbJ2VsZW1lbnQnLCAndGFyZ2V0J10uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXMyW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZXRoZXIgRXJyb3I6IEJvdGggZWxlbWVudCBhbmQgdGFyZ2V0IG11c3QgYmUgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpczJba2V5XS5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgX3RoaXMyW2tleV0gPSBfdGhpczJba2V5XVswXTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoaXMyW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgX3RoaXMyW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKF90aGlzMltrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgdGhpcy5nZXRDbGFzcygnZWxlbWVudCcpKTtcbiAgICAgIGlmICghKHRoaXMub3B0aW9ucy5hZGRUYXJnZXRDbGFzc2VzID09PSBmYWxzZSkpIHtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMuZ2V0Q2xhc3MoJ3RhcmdldCcpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYXR0YWNobWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RldGhlciBFcnJvcjogWW91IG11c3QgcHJvdmlkZSBhbiBhdHRhY2htZW50Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudGFyZ2V0QXR0YWNobWVudCA9IHBhcnNlQXR0YWNobWVudCh0aGlzLm9wdGlvbnMudGFyZ2V0QXR0YWNobWVudCk7XG4gICAgICB0aGlzLmF0dGFjaG1lbnQgPSBwYXJzZUF0dGFjaG1lbnQodGhpcy5vcHRpb25zLmF0dGFjaG1lbnQpO1xuICAgICAgdGhpcy5vZmZzZXQgPSBwYXJzZU9mZnNldCh0aGlzLm9wdGlvbnMub2Zmc2V0KTtcbiAgICAgIHRoaXMudGFyZ2V0T2Zmc2V0ID0gcGFyc2VPZmZzZXQodGhpcy5vcHRpb25zLnRhcmdldE9mZnNldCk7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zY3JvbGxQYXJlbnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudGFyZ2V0TW9kaWZpZXIgPT09ICdzY3JvbGwtaGFuZGxlJykge1xuICAgICAgICB0aGlzLnNjcm9sbFBhcmVudHMgPSBbdGhpcy50YXJnZXRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY3JvbGxQYXJlbnRzID0gZ2V0U2Nyb2xsUGFyZW50cyh0aGlzLnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHRoaXMub3B0aW9ucy5lbmFibGVkID09PSBmYWxzZSkpIHtcbiAgICAgICAgdGhpcy5lbmFibGUocG9zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUYXJnZXRCb3VuZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYXJnZXRCb3VuZHMoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMudGFyZ2V0TW9kaWZpZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldE1vZGlmaWVyID09PSAndmlzaWJsZScpIHtcbiAgICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHRvcDogcGFnZVlPZmZzZXQsIGxlZnQ6IHBhZ2VYT2Zmc2V0LCBoZWlnaHQ6IGlubmVySGVpZ2h0LCB3aWR0aDogaW5uZXJXaWR0aCB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYm91bmRzID0gZ2V0Qm91bmRzKHRoaXMudGFyZ2V0KTtcblxuICAgICAgICAgICAgdmFyIG91dCA9IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBib3VuZHMuaGVpZ2h0LFxuICAgICAgICAgICAgICB3aWR0aDogYm91bmRzLndpZHRoLFxuICAgICAgICAgICAgICB0b3A6IGJvdW5kcy50b3AsXG4gICAgICAgICAgICAgIGxlZnQ6IGJvdW5kcy5sZWZ0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBvdXQuaGVpZ2h0ID0gTWF0aC5taW4ob3V0LmhlaWdodCwgYm91bmRzLmhlaWdodCAtIChwYWdlWU9mZnNldCAtIGJvdW5kcy50b3ApKTtcbiAgICAgICAgICAgIG91dC5oZWlnaHQgPSBNYXRoLm1pbihvdXQuaGVpZ2h0LCBib3VuZHMuaGVpZ2h0IC0gKGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0IC0gKHBhZ2VZT2Zmc2V0ICsgaW5uZXJIZWlnaHQpKSk7XG4gICAgICAgICAgICBvdXQuaGVpZ2h0ID0gTWF0aC5taW4oaW5uZXJIZWlnaHQsIG91dC5oZWlnaHQpO1xuICAgICAgICAgICAgb3V0LmhlaWdodCAtPSAyO1xuXG4gICAgICAgICAgICBvdXQud2lkdGggPSBNYXRoLm1pbihvdXQud2lkdGgsIGJvdW5kcy53aWR0aCAtIChwYWdlWE9mZnNldCAtIGJvdW5kcy5sZWZ0KSk7XG4gICAgICAgICAgICBvdXQud2lkdGggPSBNYXRoLm1pbihvdXQud2lkdGgsIGJvdW5kcy53aWR0aCAtIChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCAtIChwYWdlWE9mZnNldCArIGlubmVyV2lkdGgpKSk7XG4gICAgICAgICAgICBvdXQud2lkdGggPSBNYXRoLm1pbihpbm5lcldpZHRoLCBvdXQud2lkdGgpO1xuICAgICAgICAgICAgb3V0LndpZHRoIC09IDI7XG5cbiAgICAgICAgICAgIGlmIChvdXQudG9wIDwgcGFnZVlPZmZzZXQpIHtcbiAgICAgICAgICAgICAgb3V0LnRvcCA9IHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG91dC5sZWZ0IDwgcGFnZVhPZmZzZXQpIHtcbiAgICAgICAgICAgICAgb3V0LmxlZnQgPSBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXRNb2RpZmllciA9PT0gJ3Njcm9sbC1oYW5kbGUnKSB7XG4gICAgICAgICAgdmFyIGJvdW5kcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICAgICAgaWYgKHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgICAgICBib3VuZHMgPSB7XG4gICAgICAgICAgICAgIGxlZnQ6IHBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICB0b3A6IHBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgICBoZWlnaHQ6IGlubmVySGVpZ2h0LFxuICAgICAgICAgICAgICB3aWR0aDogaW5uZXJXaWR0aFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm91bmRzID0gZ2V0Qm91bmRzKHRhcmdldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuXG4gICAgICAgICAgdmFyIGhhc0JvdHRvbVNjcm9sbCA9IHRhcmdldC5zY3JvbGxXaWR0aCA+IHRhcmdldC5jbGllbnRXaWR0aCB8fCBbc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WF0uaW5kZXhPZignc2Nyb2xsJykgPj0gMCB8fCB0aGlzLnRhcmdldCAhPT0gZG9jdW1lbnQuYm9keTtcblxuICAgICAgICAgIHZhciBzY3JvbGxCb3R0b20gPSAwO1xuICAgICAgICAgIGlmIChoYXNCb3R0b21TY3JvbGwpIHtcbiAgICAgICAgICAgIHNjcm9sbEJvdHRvbSA9IDE1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0IC0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgLSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKSAtIHNjcm9sbEJvdHRvbTtcblxuICAgICAgICAgIHZhciBvdXQgPSB7XG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCAqIDAuOTc1ICogKGhlaWdodCAvIHRhcmdldC5zY3JvbGxIZWlnaHQpLFxuICAgICAgICAgICAgbGVmdDogYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGggLSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckxlZnRXaWR0aCkgLSAxNVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgZml0QWRqID0gMDtcbiAgICAgICAgICBpZiAoaGVpZ2h0IDwgNDA4ICYmIHRoaXMudGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBmaXRBZGogPSAtMC4wMDAxMSAqIE1hdGgucG93KGhlaWdodCwgMikgLSAwLjAwNzI3ICogaGVpZ2h0ICsgMjIuNTg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBvdXQuaGVpZ2h0ID0gTWF0aC5tYXgob3V0LmhlaWdodCwgMjQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzY3JvbGxQZXJjZW50YWdlID0gdGhpcy50YXJnZXQuc2Nyb2xsVG9wIC8gKHRhcmdldC5zY3JvbGxIZWlnaHQgLSBoZWlnaHQpO1xuICAgICAgICAgIG91dC50b3AgPSBzY3JvbGxQZXJjZW50YWdlICogKGhlaWdodCAtIG91dC5oZWlnaHQgLSBmaXRBZGopICsgYm91bmRzLnRvcCArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBvdXQuaGVpZ2h0ID0gTWF0aC5tYXgob3V0LmhlaWdodCwgMjQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXRCb3VuZHModGhpcy50YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsZWFyQ2FjaGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhckNhY2hlKCkge1xuICAgICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWNoZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhY2hlKGssIGdldHRlcikge1xuICAgICAgLy8gTW9yZSB0aGFuIG9uZSBtb2R1bGUgd2lsbCBvZnRlbiBuZWVkIHRoZSBzYW1lIERPTSBpbmZvLCBzb1xuICAgICAgLy8gd2Uga2VlcCBhIGNhY2hlIHdoaWNoIGlzIGNsZWFyZWQgb24gZWFjaCBwb3NpdGlvbiBjYWxsXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2NhY2hlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2NhY2hlW2tdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9jYWNoZVtrXSA9IGdldHRlci5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fY2FjaGVba107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBwb3MgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICBpZiAoISh0aGlzLm9wdGlvbnMuYWRkVGFyZ2V0Q2xhc3NlcyA9PT0gZmFsc2UpKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmdldENsYXNzKCdlbmFibGVkJykpO1xuICAgICAgfVxuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLmdldENsYXNzKCdlbmFibGVkJykpO1xuICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgdGhpcy5zY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50ICE9PSBfdGhpczMudGFyZ2V0Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3RoaXMzLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwb3MpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmdldENsYXNzKCdlbmFibGVkJykpO1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLmdldENsYXNzKCdlbmFibGVkJykpO1xuICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zY3JvbGxQYXJlbnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF90aGlzNC5wb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuXG4gICAgICB0ZXRoZXJzLmZvckVhY2goZnVuY3Rpb24gKHRldGhlciwgaSkge1xuICAgICAgICBpZiAodGV0aGVyID09PSBfdGhpczUpIHtcbiAgICAgICAgICB0ZXRoZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgZWxlbWVudHMgd2Ugd2VyZSB1c2luZyBmb3IgY29udmVuaWVuY2UgZnJvbSB0aGUgRE9NXG4gICAgICBpZiAodGV0aGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlVXRpbEVsZW1lbnRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlQXR0YWNoQ2xhc3NlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUF0dGFjaENsYXNzZXMoZWxlbWVudEF0dGFjaCwgdGFyZ2V0QXR0YWNoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgZWxlbWVudEF0dGFjaCA9IGVsZW1lbnRBdHRhY2ggfHwgdGhpcy5hdHRhY2htZW50O1xuICAgICAgdGFyZ2V0QXR0YWNoID0gdGFyZ2V0QXR0YWNoIHx8IHRoaXMudGFyZ2V0QXR0YWNobWVudDtcbiAgICAgIHZhciBzaWRlcyA9IFsnbGVmdCcsICd0b3AnLCAnYm90dG9tJywgJ3JpZ2h0JywgJ21pZGRsZScsICdjZW50ZXInXTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hZGRBdHRhY2hDbGFzc2VzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9hZGRBdHRhY2hDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICAvLyB1cGRhdGVBdHRhY2hDbGFzc2VzIGNhbiBiZSBjYWxsZWQgbW9yZSB0aGFuIG9uY2UgaW4gYSBwb3NpdGlvbiBjYWxsLCBzb1xuICAgICAgICAvLyB3ZSBuZWVkIHRvIGNsZWFuIHVwIGFmdGVyIG91cnNlbHZlcyBzdWNoIHRoYXQgd2hlbiB0aGUgbGFzdCBkZWZlciBnZXRzXG4gICAgICAgIC8vIHJhbiBpdCBkb2Vzbid0IGFkZCBhbnkgZXh0cmEgY2xhc3NlcyBmcm9tIHByZXZpb3VzIGNhbGxzLlxuICAgICAgICB0aGlzLl9hZGRBdHRhY2hDbGFzc2VzLnNwbGljZSgwLCB0aGlzLl9hZGRBdHRhY2hDbGFzc2VzLmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fYWRkQXR0YWNoQ2xhc3NlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5fYWRkQXR0YWNoQ2xhc3NlcyA9IFtdO1xuICAgICAgfVxuICAgICAgdmFyIGFkZCA9IHRoaXMuX2FkZEF0dGFjaENsYXNzZXM7XG5cbiAgICAgIGlmIChlbGVtZW50QXR0YWNoLnRvcCkge1xuICAgICAgICBhZGQucHVzaCh0aGlzLmdldENsYXNzKCdlbGVtZW50LWF0dGFjaGVkJykgKyAnLScgKyBlbGVtZW50QXR0YWNoLnRvcCk7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudEF0dGFjaC5sZWZ0KSB7XG4gICAgICAgIGFkZC5wdXNoKHRoaXMuZ2V0Q2xhc3MoJ2VsZW1lbnQtYXR0YWNoZWQnKSArICctJyArIGVsZW1lbnRBdHRhY2gubGVmdCk7XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0QXR0YWNoLnRvcCkge1xuICAgICAgICBhZGQucHVzaCh0aGlzLmdldENsYXNzKCd0YXJnZXQtYXR0YWNoZWQnKSArICctJyArIHRhcmdldEF0dGFjaC50b3ApO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldEF0dGFjaC5sZWZ0KSB7XG4gICAgICAgIGFkZC5wdXNoKHRoaXMuZ2V0Q2xhc3MoJ3RhcmdldC1hdHRhY2hlZCcpICsgJy0nICsgdGFyZ2V0QXR0YWNoLmxlZnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWxsID0gW107XG4gICAgICBzaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIGFsbC5wdXNoKF90aGlzNi5nZXRDbGFzcygnZWxlbWVudC1hdHRhY2hlZCcpICsgJy0nICsgc2lkZSk7XG4gICAgICAgIGFsbC5wdXNoKF90aGlzNi5nZXRDbGFzcygndGFyZ2V0LWF0dGFjaGVkJykgKyAnLScgKyBzaWRlKTtcbiAgICAgIH0pO1xuXG4gICAgICBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghKHR5cGVvZiBfdGhpczYuX2FkZEF0dGFjaENsYXNzZXMgIT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNsYXNzZXMoX3RoaXM2LmVsZW1lbnQsIF90aGlzNi5fYWRkQXR0YWNoQ2xhc3NlcywgYWxsKTtcbiAgICAgICAgaWYgKCEoX3RoaXM2Lm9wdGlvbnMuYWRkVGFyZ2V0Q2xhc3NlcyA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgdXBkYXRlQ2xhc3NlcyhfdGhpczYudGFyZ2V0LCBfdGhpczYuX2FkZEF0dGFjaENsYXNzZXMsIGFsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgX3RoaXM2Ll9hZGRBdHRhY2hDbGFzc2VzO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICB2YXIgZmx1c2hDaGFuZ2VzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgLy8gZmx1c2hDaGFuZ2VzIGNvbW1pdHMgdGhlIGNoYW5nZXMgaW1tZWRpYXRlbHksIGxlYXZlIHRydWUgdW5sZXNzIHlvdSBhcmUgcG9zaXRpb25pbmcgbXVsdGlwbGVcbiAgICAgIC8vIHRldGhlcnMgKGluIHdoaWNoIGNhc2UgY2FsbCBUZXRoZXIuVXRpbHMuZmx1c2ggeW91cnNlbGYgd2hlbiB5b3UncmUgZG9uZSlcblxuICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcblxuICAgICAgLy8gVHVybiAnYXV0bycgYXR0YWNobWVudHMgaW50byB0aGUgYXBwcm9wcmlhdGUgY29ybmVyIG9yIGVkZ2VcbiAgICAgIHZhciB0YXJnZXRBdHRhY2htZW50ID0gYXV0b1RvRml4ZWRBdHRhY2htZW50KHRoaXMudGFyZ2V0QXR0YWNobWVudCwgdGhpcy5hdHRhY2htZW50KTtcblxuICAgICAgdGhpcy51cGRhdGVBdHRhY2hDbGFzc2VzKHRoaXMuYXR0YWNobWVudCwgdGFyZ2V0QXR0YWNobWVudCk7XG5cbiAgICAgIHZhciBlbGVtZW50UG9zID0gdGhpcy5jYWNoZSgnZWxlbWVudC1ib3VuZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRCb3VuZHMoX3RoaXM3LmVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciB3aWR0aCA9IGVsZW1lbnRQb3Mud2lkdGg7XG4gICAgICB2YXIgaGVpZ2h0ID0gZWxlbWVudFBvcy5oZWlnaHQ7XG5cbiAgICAgIGlmICh3aWR0aCA9PT0gMCAmJiBoZWlnaHQgPT09IDAgJiYgdHlwZW9mIHRoaXMubGFzdFNpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBfbGFzdFNpemUgPSB0aGlzLmxhc3RTaXplO1xuXG4gICAgICAgIC8vIFdlIGNhY2hlIHRoZSBoZWlnaHQgYW5kIHdpZHRoIHRvIG1ha2UgaXQgcG9zc2libGUgdG8gcG9zaXRpb24gZWxlbWVudHMgdGhhdCBhcmVcbiAgICAgICAgLy8gZ2V0dGluZyBoaWRkZW4uXG4gICAgICAgIHdpZHRoID0gX2xhc3RTaXplLndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBfbGFzdFNpemUuaGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0U2l6ZSA9IHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0UG9zID0gdGhpcy5jYWNoZSgndGFyZ2V0LWJvdW5kcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNy5nZXRUYXJnZXRCb3VuZHMoKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHRhcmdldFNpemUgPSB0YXJnZXRQb3M7XG5cbiAgICAgIC8vIEdldCBhbiBhY3R1YWwgcHggb2Zmc2V0IGZyb20gdGhlIGF0dGFjaG1lbnRcbiAgICAgIHZhciBvZmZzZXQgPSBvZmZzZXRUb1B4KGF0dGFjaG1lbnRUb09mZnNldCh0aGlzLmF0dGFjaG1lbnQpLCB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgICB2YXIgdGFyZ2V0T2Zmc2V0ID0gb2Zmc2V0VG9QeChhdHRhY2htZW50VG9PZmZzZXQodGFyZ2V0QXR0YWNobWVudCksIHRhcmdldFNpemUpO1xuXG4gICAgICB2YXIgbWFudWFsT2Zmc2V0ID0gb2Zmc2V0VG9QeCh0aGlzLm9mZnNldCwgeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xuICAgICAgdmFyIG1hbnVhbFRhcmdldE9mZnNldCA9IG9mZnNldFRvUHgodGhpcy50YXJnZXRPZmZzZXQsIHRhcmdldFNpemUpO1xuXG4gICAgICAvLyBBZGQgdGhlIG1hbnVhbGx5IHByb3ZpZGVkIG9mZnNldFxuICAgICAgb2Zmc2V0ID0gYWRkT2Zmc2V0KG9mZnNldCwgbWFudWFsT2Zmc2V0KTtcbiAgICAgIHRhcmdldE9mZnNldCA9IGFkZE9mZnNldCh0YXJnZXRPZmZzZXQsIG1hbnVhbFRhcmdldE9mZnNldCk7XG5cbiAgICAgIC8vIEl0J3Mgbm93IG91ciBnb2FsIHRvIG1ha2UgKGVsZW1lbnQgcG9zaXRpb24gKyBvZmZzZXQpID09ICh0YXJnZXQgcG9zaXRpb24gKyB0YXJnZXQgb2Zmc2V0KVxuICAgICAgdmFyIGxlZnQgPSB0YXJnZXRQb3MubGVmdCArIHRhcmdldE9mZnNldC5sZWZ0IC0gb2Zmc2V0LmxlZnQ7XG4gICAgICB2YXIgdG9wID0gdGFyZ2V0UG9zLnRvcCArIHRhcmdldE9mZnNldC50b3AgLSBvZmZzZXQudG9wO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRldGhlckJhc2UubW9kdWxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgX21vZHVsZTIgPSBUZXRoZXJCYXNlLm1vZHVsZXNbaV07XG4gICAgICAgIHZhciByZXQgPSBfbW9kdWxlMi5wb3NpdGlvbi5jYWxsKHRoaXMsIHtcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIHRhcmdldEF0dGFjaG1lbnQ6IHRhcmdldEF0dGFjaG1lbnQsXG4gICAgICAgICAgdGFyZ2V0UG9zOiB0YXJnZXRQb3MsXG4gICAgICAgICAgZWxlbWVudFBvczogZWxlbWVudFBvcyxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldCxcbiAgICAgICAgICBtYW51YWxPZmZzZXQ6IG1hbnVhbE9mZnNldCxcbiAgICAgICAgICBtYW51YWxUYXJnZXRPZmZzZXQ6IG1hbnVhbFRhcmdldE9mZnNldCxcbiAgICAgICAgICBzY3JvbGxiYXJTaXplOiBzY3JvbGxiYXJTaXplLFxuICAgICAgICAgIGF0dGFjaG1lbnQ6IHRoaXMuYXR0YWNobWVudFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmV0ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgcmV0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvcCA9IHJldC50b3A7XG4gICAgICAgICAgbGVmdCA9IHJldC5sZWZ0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIGRlc2NyaWJlIHRoZSBwb3NpdGlvbiB0aHJlZSBkaWZmZXJlbnQgd2F5cyB0byBnaXZlIHRoZSBvcHRpbWl6ZXJcbiAgICAgIC8vIGEgY2hhbmNlIHRvIGRlY2lkZSB0aGUgYmVzdCBwb3NzaWJsZSB3YXkgdG8gcG9zaXRpb24gdGhlIGVsZW1lbnRcbiAgICAgIC8vIHdpdGggdGhlIGZld2VzdCByZXBhaW50cy5cbiAgICAgIHZhciBuZXh0ID0ge1xuICAgICAgICAvLyBJdCdzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBwYWdlIChhYnNvbHV0ZSBwb3NpdGlvbmluZyB3aGVuXG4gICAgICAgIC8vIHRoZSBlbGVtZW50IGlzIGEgY2hpbGQgb2YgdGhlIGJvZHkpXG4gICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBsZWZ0OiBsZWZ0XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gSXQncyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQgKGZpeGVkIHBvc2l0aW9uaW5nKVxuICAgICAgICB2aWV3cG9ydDoge1xuICAgICAgICAgIHRvcDogdG9wIC0gcGFnZVlPZmZzZXQsXG4gICAgICAgICAgYm90dG9tOiBwYWdlWU9mZnNldCAtIHRvcCAtIGhlaWdodCArIGlubmVySGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IGxlZnQgLSBwYWdlWE9mZnNldCxcbiAgICAgICAgICByaWdodDogcGFnZVhPZmZzZXQgLSBsZWZ0IC0gd2lkdGggKyBpbm5lcldpZHRoXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBkb2MgPSB0aGlzLnRhcmdldC5vd25lckRvY3VtZW50O1xuICAgICAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0VmlldztcblxuICAgICAgdmFyIHNjcm9sbGJhclNpemUgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAod2luLmlubmVySGVpZ2h0ID4gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgc2Nyb2xsYmFyU2l6ZSA9IHRoaXMuY2FjaGUoJ3Njcm9sbGJhci1zaXplJywgZ2V0U2Nyb2xsQmFyU2l6ZSk7XG4gICAgICAgIG5leHQudmlld3BvcnQuYm90dG9tIC09IHNjcm9sbGJhclNpemUuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAod2luLmlubmVyV2lkdGggPiBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSB7XG4gICAgICAgIHNjcm9sbGJhclNpemUgPSB0aGlzLmNhY2hlKCdzY3JvbGxiYXItc2l6ZScsIGdldFNjcm9sbEJhclNpemUpO1xuICAgICAgICBuZXh0LnZpZXdwb3J0LnJpZ2h0IC09IHNjcm9sbGJhclNpemUud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmIChbJycsICdzdGF0aWMnXS5pbmRleE9mKGRvYy5ib2R5LnN0eWxlLnBvc2l0aW9uKSA9PT0gLTEgfHwgWycnLCAnc3RhdGljJ10uaW5kZXhPZihkb2MuYm9keS5wYXJlbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gQWJzb2x1dGUgcG9zaXRpb25pbmcgaW4gdGhlIGJvZHkgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGUgcGFnZSwgbm90IHRoZSAnaW5pdGlhbCBjb250YWluaW5nIGJsb2NrJ1xuICAgICAgICBuZXh0LnBhZ2UuYm90dG9tID0gZG9jLmJvZHkuc2Nyb2xsSGVpZ2h0IC0gdG9wIC0gaGVpZ2h0O1xuICAgICAgICBuZXh0LnBhZ2UucmlnaHQgPSBkb2MuYm9keS5zY3JvbGxXaWR0aCAtIGxlZnQgLSB3aWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub3B0aW1pemF0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5vcHRpb25zLm9wdGltaXphdGlvbnMubW92ZUVsZW1lbnQgIT09IGZhbHNlICYmICEodHlwZW9mIHRoaXMudGFyZ2V0TW9kaWZpZXIgIT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSBfdGhpczcuY2FjaGUoJ3RhcmdldC1vZmZzZXRwYXJlbnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KF90aGlzNy50YXJnZXQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBvZmZzZXRQb3NpdGlvbiA9IF90aGlzNy5jYWNoZSgndGFyZ2V0LW9mZnNldHBhcmVudC1ib3VuZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Qm91bmRzKG9mZnNldFBhcmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIG9mZnNldFBhcmVudFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgICAgIHZhciBvZmZzZXRQYXJlbnRTaXplID0gb2Zmc2V0UG9zaXRpb247XG5cbiAgICAgICAgICB2YXIgb2Zmc2V0Qm9yZGVyID0ge307XG4gICAgICAgICAgWydUb3AnLCAnTGVmdCcsICdCb3R0b20nLCAnUmlnaHQnXS5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgICAgICBvZmZzZXRCb3JkZXJbc2lkZS50b0xvd2VyQ2FzZSgpXSA9IHBhcnNlRmxvYXQob2Zmc2V0UGFyZW50U3R5bGVbJ2JvcmRlcicgKyBzaWRlICsgJ1dpZHRoJ10pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgb2Zmc2V0UG9zaXRpb24ucmlnaHQgPSBkb2MuYm9keS5zY3JvbGxXaWR0aCAtIG9mZnNldFBvc2l0aW9uLmxlZnQgLSBvZmZzZXRQYXJlbnRTaXplLndpZHRoICsgb2Zmc2V0Qm9yZGVyLnJpZ2h0O1xuICAgICAgICAgIG9mZnNldFBvc2l0aW9uLmJvdHRvbSA9IGRvYy5ib2R5LnNjcm9sbEhlaWdodCAtIG9mZnNldFBvc2l0aW9uLnRvcCAtIG9mZnNldFBhcmVudFNpemUuaGVpZ2h0ICsgb2Zmc2V0Qm9yZGVyLmJvdHRvbTtcblxuICAgICAgICAgIGlmIChuZXh0LnBhZ2UudG9wID49IG9mZnNldFBvc2l0aW9uLnRvcCArIG9mZnNldEJvcmRlci50b3AgJiYgbmV4dC5wYWdlLmJvdHRvbSA+PSBvZmZzZXRQb3NpdGlvbi5ib3R0b20pIHtcbiAgICAgICAgICAgIGlmIChuZXh0LnBhZ2UubGVmdCA+PSBvZmZzZXRQb3NpdGlvbi5sZWZ0ICsgb2Zmc2V0Qm9yZGVyLmxlZnQgJiYgbmV4dC5wYWdlLnJpZ2h0ID49IG9mZnNldFBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgICAgIC8vIFdlJ3JlIHdpdGhpbiB0aGUgdmlzaWJsZSBwYXJ0IG9mIHRoZSB0YXJnZXQncyBzY3JvbGwgcGFyZW50XG4gICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSBvZmZzZXRQYXJlbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IG9mZnNldFBhcmVudC5zY3JvbGxMZWZ0O1xuXG4gICAgICAgICAgICAgIC8vIEl0J3MgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHRhcmdldCdzIG9mZnNldCBwYXJlbnQgKGFic29sdXRlIHBvc2l0aW9uaW5nIHdoZW5cbiAgICAgICAgICAgICAgLy8gdGhlIGVsZW1lbnQgaXMgbW92ZWQgdG8gYmUgYSBjaGlsZCBvZiB0aGUgdGFyZ2V0J3Mgb2Zmc2V0IHBhcmVudCkuXG4gICAgICAgICAgICAgIG5leHQub2Zmc2V0ID0ge1xuICAgICAgICAgICAgICAgIHRvcDogbmV4dC5wYWdlLnRvcCAtIG9mZnNldFBvc2l0aW9uLnRvcCArIHNjcm9sbFRvcCAtIG9mZnNldEJvcmRlci50b3AsXG4gICAgICAgICAgICAgICAgbGVmdDogbmV4dC5wYWdlLmxlZnQgLSBvZmZzZXRQb3NpdGlvbi5sZWZ0ICsgc2Nyb2xsTGVmdCAtIG9mZnNldEJvcmRlci5sZWZ0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBjb3VsZCBhbHNvIHRyYXZlbCB1cCB0aGUgRE9NIGFuZCB0cnkgZWFjaCBjb250YWluaW5nIGNvbnRleHQsIHJhdGhlciB0aGFuIG9ubHlcbiAgICAgIC8vIGxvb2tpbmcgYXQgdGhlIGJvZHksIGJ1dCB3ZSdyZSBnb25uYSBnZXQgZGltaW5pc2hpbmcgcmV0dXJucy5cblxuICAgICAgdGhpcy5tb3ZlKG5leHQpO1xuXG4gICAgICB0aGlzLmhpc3RvcnkudW5zaGlmdChuZXh0KTtcblxuICAgICAgaWYgKHRoaXMuaGlzdG9yeS5sZW5ndGggPiAzKSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsdXNoQ2hhbmdlcykge1xuICAgICAgICBmbHVzaCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUSEUgSVNTVUVcbiAgfSwge1xuICAgIGtleTogJ21vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlKHBvcykge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgIGlmICghKHR5cGVvZiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSAhPT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNhbWUgPSB7fTtcblxuICAgICAgZm9yICh2YXIgdHlwZSBpbiBwb3MpIHtcbiAgICAgICAgc2FtZVt0eXBlXSA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwb3NbdHlwZV0pIHtcbiAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oaXN0b3J5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgcG9pbnQgPSB0aGlzLmhpc3RvcnlbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBvaW50W3R5cGVdICE9PSAndW5kZWZpbmVkJyAmJiAhd2l0aGluKHBvaW50W3R5cGVdW2tleV0sIHBvc1t0eXBlXVtrZXldKSkge1xuICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgIHNhbWVbdHlwZV1ba2V5XSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjc3MgPSB7IHRvcDogJycsIGxlZnQ6ICcnLCByaWdodDogJycsIGJvdHRvbTogJycgfTtcblxuICAgICAgdmFyIHRyYW5zY3JpYmUgPSBmdW5jdGlvbiB0cmFuc2NyaWJlKF9zYW1lLCBfcG9zKSB7XG4gICAgICAgIHZhciBoYXNPcHRpbWl6YXRpb25zID0gdHlwZW9mIF90aGlzOC5vcHRpb25zLm9wdGltaXphdGlvbnMgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB2YXIgZ3B1ID0gaGFzT3B0aW1pemF0aW9ucyA/IF90aGlzOC5vcHRpb25zLm9wdGltaXphdGlvbnMuZ3B1IDogbnVsbDtcbiAgICAgICAgaWYgKGdwdSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB2YXIgeVBvcyA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgeFBvcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBpZiAoX3NhbWUudG9wKSB7XG4gICAgICAgICAgICBjc3MudG9wID0gMDtcbiAgICAgICAgICAgIHlQb3MgPSBfcG9zLnRvcDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NzLmJvdHRvbSA9IDA7XG4gICAgICAgICAgICB5UG9zID0gLV9wb3MuYm90dG9tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfc2FtZS5sZWZ0KSB7XG4gICAgICAgICAgICBjc3MubGVmdCA9IDA7XG4gICAgICAgICAgICB4UG9zID0gX3Bvcy5sZWZ0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3MucmlnaHQgPSAwO1xuICAgICAgICAgICAgeFBvcyA9IC1fcG9zLnJpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICAgICAgLy8gSHViU3BvdC90ZXRoZXIjMjA3XG4gICAgICAgICAgICB2YXIgcmV0aW5hID0gd2luZG93Lm1hdGNoTWVkaWEoJ29ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDEuM2RwcHgpJykubWF0Y2hlcyB8fCB3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMyknKS5tYXRjaGVzO1xuICAgICAgICAgICAgaWYgKCFyZXRpbmEpIHtcbiAgICAgICAgICAgICAgeFBvcyA9IE1hdGgucm91bmQoeFBvcyk7XG4gICAgICAgICAgICAgIHlQb3MgPSBNYXRoLnJvdW5kKHlQb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNzc1t0cmFuc2Zvcm1LZXldID0gJ3RyYW5zbGF0ZVgoJyArIHhQb3MgKyAncHgpIHRyYW5zbGF0ZVkoJyArIHlQb3MgKyAncHgpJztcblxuICAgICAgICAgIGlmICh0cmFuc2Zvcm1LZXkgIT09ICdtc1RyYW5zZm9ybScpIHtcbiAgICAgICAgICAgIC8vIFRoZSBaIHRyYW5zZm9ybSB3aWxsIGtlZXAgdGhpcyBpbiB0aGUgR1BVIChmYXN0ZXIsIGFuZCBwcmV2ZW50cyBhcnRpZmFjdHMpLFxuICAgICAgICAgICAgLy8gYnV0IElFOSBkb2Vzbid0IHN1cHBvcnQgM2QgdHJhbnNmb3JtcyBhbmQgd2lsbCBjaG9rZS5cbiAgICAgICAgICAgIGNzc1t0cmFuc2Zvcm1LZXldICs9IFwiIHRyYW5zbGF0ZVooMClcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKF9zYW1lLnRvcCkge1xuICAgICAgICAgICAgY3NzLnRvcCA9IF9wb3MudG9wICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NzLmJvdHRvbSA9IF9wb3MuYm90dG9tICsgJ3B4JztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3NhbWUubGVmdCkge1xuICAgICAgICAgICAgY3NzLmxlZnQgPSBfcG9zLmxlZnQgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3MucmlnaHQgPSBfcG9zLnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBtb3ZlZCA9IGZhbHNlO1xuICAgICAgaWYgKChzYW1lLnBhZ2UudG9wIHx8IHNhbWUucGFnZS5ib3R0b20pICYmIChzYW1lLnBhZ2UubGVmdCB8fCBzYW1lLnBhZ2UucmlnaHQpKSB7XG4gICAgICAgIGNzcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRyYW5zY3JpYmUoc2FtZS5wYWdlLCBwb3MucGFnZSk7XG4gICAgICB9IGVsc2UgaWYgKChzYW1lLnZpZXdwb3J0LnRvcCB8fCBzYW1lLnZpZXdwb3J0LmJvdHRvbSkgJiYgKHNhbWUudmlld3BvcnQubGVmdCB8fCBzYW1lLnZpZXdwb3J0LnJpZ2h0KSkge1xuICAgICAgICBjc3MucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICB0cmFuc2NyaWJlKHNhbWUudmlld3BvcnQsIHBvcy52aWV3cG9ydCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzYW1lLm9mZnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgc2FtZS5vZmZzZXQudG9wICYmIHNhbWUub2Zmc2V0LmxlZnQpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjc3MucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSBfdGhpczguY2FjaGUoJ3RhcmdldC1vZmZzZXRwYXJlbnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KF90aGlzOC50YXJnZXQpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGdldE9mZnNldFBhcmVudChfdGhpczguZWxlbWVudCkgIT09IG9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpczguZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF90aGlzOC5lbGVtZW50KTtcbiAgICAgICAgICAgICAgb2Zmc2V0UGFyZW50LmFwcGVuZENoaWxkKF90aGlzOC5lbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyYW5zY3JpYmUoc2FtZS5vZmZzZXQsIHBvcy5vZmZzZXQpO1xuICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRyYW5zY3JpYmUoeyB0b3A6IHRydWUsIGxlZnQ6IHRydWUgfSwgcG9zLnBhZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1vdmVkKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYm9keUVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnBhcmVudE5vZGUgIT09IHRoaXMub3B0aW9ucy5ib2R5RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmJvZHlFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvZmZzZXRQYXJlbnRJc0JvZHkgPSB0cnVlO1xuICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBjdXJyZW50Tm9kZS50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICAgICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgb2Zmc2V0UGFyZW50SXNCb2R5ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFvZmZzZXRQYXJlbnRJc0JvZHkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFueSBjc3MgY2hhbmdlIHdpbGwgdHJpZ2dlciBhIHJlcGFpbnQsIHNvIGxldCdzIGF2b2lkIG9uZSBpZiBub3RoaW5nIGNoYW5nZWRcbiAgICAgIHZhciB3cml0ZUNTUyA9IHt9O1xuICAgICAgdmFyIHdyaXRlID0gZmFsc2U7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gY3NzKSB7XG4gICAgICAgIHZhciB2YWwgPSBjc3Nba2V5XTtcbiAgICAgICAgdmFyIGVsVmFsID0gdGhpcy5lbGVtZW50LnN0eWxlW2tleV07XG5cbiAgICAgICAgaWYgKGVsVmFsICE9PSB2YWwpIHtcbiAgICAgICAgICB3cml0ZSA9IHRydWU7XG4gICAgICAgICAgd3JpdGVDU1Nba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAod3JpdGUpIHtcbiAgICAgICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGV4dGVuZChfdGhpczguZWxlbWVudC5zdHlsZSwgd3JpdGVDU1MpO1xuICAgICAgICAgIF90aGlzOC50cmlnZ2VyKCdyZXBvc2l0aW9uZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRldGhlckNsYXNzO1xufSkoRXZlbnRlZCk7XG5cblRldGhlckNsYXNzLm1vZHVsZXMgPSBbXTtcblxuVGV0aGVyQmFzZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG52YXIgVGV0aGVyID0gZXh0ZW5kKFRldGhlckNsYXNzLCBUZXRoZXJCYXNlKTtcbi8qIGdsb2JhbHMgVGV0aGVyQmFzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXG52YXIgX1RldGhlckJhc2UkVXRpbHMgPSBUZXRoZXJCYXNlLlV0aWxzO1xudmFyIGdldEJvdW5kcyA9IF9UZXRoZXJCYXNlJFV0aWxzLmdldEJvdW5kcztcbnZhciBleHRlbmQgPSBfVGV0aGVyQmFzZSRVdGlscy5leHRlbmQ7XG52YXIgdXBkYXRlQ2xhc3NlcyA9IF9UZXRoZXJCYXNlJFV0aWxzLnVwZGF0ZUNsYXNzZXM7XG52YXIgZGVmZXIgPSBfVGV0aGVyQmFzZSRVdGlscy5kZWZlcjtcblxudmFyIEJPVU5EU19GT1JNQVQgPSBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbSddO1xuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ1JlY3QodGV0aGVyLCB0bykge1xuICBpZiAodG8gPT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgdG8gPSB0ZXRoZXIuc2Nyb2xsUGFyZW50c1swXTtcbiAgfSBlbHNlIGlmICh0byA9PT0gJ3dpbmRvdycpIHtcbiAgICB0byA9IFtwYWdlWE9mZnNldCwgcGFnZVlPZmZzZXQsIGlubmVyV2lkdGggKyBwYWdlWE9mZnNldCwgaW5uZXJIZWlnaHQgKyBwYWdlWU9mZnNldF07XG4gIH1cblxuICBpZiAodG8gPT09IGRvY3VtZW50KSB7XG4gICAgdG8gPSB0by5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHRvLm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJykge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbm9kZSA9IHRvO1xuICAgICAgdmFyIHNpemUgPSBnZXRCb3VuZHModG8pO1xuICAgICAgdmFyIHBvcyA9IHNpemU7XG4gICAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRvKTtcblxuICAgICAgdG8gPSBbcG9zLmxlZnQsIHBvcy50b3AsIHNpemUud2lkdGggKyBwb3MubGVmdCwgc2l6ZS5oZWlnaHQgKyBwb3MudG9wXTtcblxuICAgICAgLy8gQWNjb3VudCBhbnkgcGFyZW50IEZyYW1lcyBzY3JvbGwgb2Zmc2V0XG4gICAgICBpZiAobm9kZS5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgICB2YXIgd2luID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICB0b1swXSArPSB3aW4ucGFnZVhPZmZzZXQ7XG4gICAgICAgIHRvWzFdICs9IHdpbi5wYWdlWU9mZnNldDtcbiAgICAgICAgdG9bMl0gKz0gd2luLnBhZ2VYT2Zmc2V0O1xuICAgICAgICB0b1szXSArPSB3aW4ucGFnZVlPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIEJPVU5EU19GT1JNQVQuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSwgaSkge1xuICAgICAgICBzaWRlID0gc2lkZVswXS50b1VwcGVyQ2FzZSgpICsgc2lkZS5zdWJzdHIoMSk7XG4gICAgICAgIGlmIChzaWRlID09PSAnVG9wJyB8fCBzaWRlID09PSAnTGVmdCcpIHtcbiAgICAgICAgICB0b1tpXSArPSBwYXJzZUZsb2F0KHN0eWxlWydib3JkZXInICsgc2lkZSArICdXaWR0aCddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b1tpXSAtPSBwYXJzZUZsb2F0KHN0eWxlWydib3JkZXInICsgc2lkZSArICdXaWR0aCddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxuVGV0aGVyQmFzZS5tb2R1bGVzLnB1c2goe1xuICBwb3NpdGlvbjogZnVuY3Rpb24gcG9zaXRpb24oX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgdG9wID0gX3JlZi50b3A7XG4gICAgdmFyIGxlZnQgPSBfcmVmLmxlZnQ7XG4gICAgdmFyIHRhcmdldEF0dGFjaG1lbnQgPSBfcmVmLnRhcmdldEF0dGFjaG1lbnQ7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jb25zdHJhaW50cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIF9jYWNoZSA9IHRoaXMuY2FjaGUoJ2VsZW1lbnQtYm91bmRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEJvdW5kcyhfdGhpcy5lbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHZhciBoZWlnaHQgPSBfY2FjaGUuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IF9jYWNoZS53aWR0aDtcblxuICAgIGlmICh3aWR0aCA9PT0gMCAmJiBoZWlnaHQgPT09IDAgJiYgdHlwZW9mIHRoaXMubGFzdFNpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgX2xhc3RTaXplID0gdGhpcy5sYXN0U2l6ZTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBpdGVtIGdldHRpbmcgaGlkZGVuIGFzIGEgcmVzdWx0IG9mIG91ciBwb3NpdGlvbmluZyB3aXRob3V0IGdsaXRjaGluZ1xuICAgICAgLy8gdGhlIGNsYXNzZXMgaW4gYW5kIG91dFxuICAgICAgd2lkdGggPSBfbGFzdFNpemUud2lkdGg7XG4gICAgICBoZWlnaHQgPSBfbGFzdFNpemUuaGVpZ2h0O1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTaXplID0gdGhpcy5jYWNoZSgndGFyZ2V0LWJvdW5kcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5nZXRUYXJnZXRCb3VuZHMoKTtcbiAgICB9KTtcblxuICAgIHZhciB0YXJnZXRIZWlnaHQgPSB0YXJnZXRTaXplLmhlaWdodDtcbiAgICB2YXIgdGFyZ2V0V2lkdGggPSB0YXJnZXRTaXplLndpZHRoO1xuXG4gICAgdmFyIGFsbENsYXNzZXMgPSBbdGhpcy5nZXRDbGFzcygncGlubmVkJyksIHRoaXMuZ2V0Q2xhc3MoJ291dC1vZi1ib3VuZHMnKV07XG5cbiAgICB0aGlzLm9wdGlvbnMuY29uc3RyYWludHMuZm9yRWFjaChmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgdmFyIG91dE9mQm91bmRzQ2xhc3MgPSBjb25zdHJhaW50Lm91dE9mQm91bmRzQ2xhc3M7XG4gICAgICB2YXIgcGlubmVkQ2xhc3MgPSBjb25zdHJhaW50LnBpbm5lZENsYXNzO1xuXG4gICAgICBpZiAob3V0T2ZCb3VuZHNDbGFzcykge1xuICAgICAgICBhbGxDbGFzc2VzLnB1c2gob3V0T2ZCb3VuZHNDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAocGlubmVkQ2xhc3MpIHtcbiAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKHBpbm5lZENsYXNzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGFsbENsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgICBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbSddLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKGNscyArICctJyArIHNpZGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgYWRkQ2xhc3NlcyA9IFtdO1xuXG4gICAgdmFyIHRBdHRhY2htZW50ID0gZXh0ZW5kKHt9LCB0YXJnZXRBdHRhY2htZW50KTtcbiAgICB2YXIgZUF0dGFjaG1lbnQgPSBleHRlbmQoe30sIHRoaXMuYXR0YWNobWVudCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuY29uc3RyYWludHMuZm9yRWFjaChmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgdmFyIHRvID0gY29uc3RyYWludC50bztcbiAgICAgIHZhciBhdHRhY2htZW50ID0gY29uc3RyYWludC5hdHRhY2htZW50O1xuICAgICAgdmFyIHBpbiA9IGNvbnN0cmFpbnQucGluO1xuXG4gICAgICBpZiAodHlwZW9mIGF0dGFjaG1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGF0dGFjaG1lbnQgPSAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIGNoYW5nZUF0dGFjaFggPSB1bmRlZmluZWQsXG4gICAgICAgICAgY2hhbmdlQXR0YWNoWSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChhdHRhY2htZW50LmluZGV4T2YoJyAnKSA+PSAwKSB7XG4gICAgICAgIHZhciBfYXR0YWNobWVudCRzcGxpdCA9IGF0dGFjaG1lbnQuc3BsaXQoJyAnKTtcblxuICAgICAgICB2YXIgX2F0dGFjaG1lbnQkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX2F0dGFjaG1lbnQkc3BsaXQsIDIpO1xuXG4gICAgICAgIGNoYW5nZUF0dGFjaFkgPSBfYXR0YWNobWVudCRzcGxpdDJbMF07XG4gICAgICAgIGNoYW5nZUF0dGFjaFggPSBfYXR0YWNobWVudCRzcGxpdDJbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VBdHRhY2hYID0gY2hhbmdlQXR0YWNoWSA9IGF0dGFjaG1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBib3VuZHMgPSBnZXRCb3VuZGluZ1JlY3QoX3RoaXMsIHRvKTtcblxuICAgICAgaWYgKGNoYW5nZUF0dGFjaFkgPT09ICd0YXJnZXQnIHx8IGNoYW5nZUF0dGFjaFkgPT09ICdib3RoJykge1xuICAgICAgICBpZiAodG9wIDwgYm91bmRzWzFdICYmIHRBdHRhY2htZW50LnRvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICB0b3AgKz0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICAgIHRBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcCArIGhlaWdodCA+IGJvdW5kc1szXSAmJiB0QXR0YWNobWVudC50b3AgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgdG9wIC09IHRhcmdldEhlaWdodDtcbiAgICAgICAgICB0QXR0YWNobWVudC50b3AgPSAndG9wJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlQXR0YWNoWSA9PT0gJ3RvZ2V0aGVyJykge1xuICAgICAgICBpZiAodEF0dGFjaG1lbnQudG9wID09PSAndG9wJykge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC50b3AgPT09ICdib3R0b20nICYmIHRvcCA8IGJvdW5kc1sxXSkge1xuICAgICAgICAgICAgdG9wICs9IHRhcmdldEhlaWdodDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuXG4gICAgICAgICAgICB0b3AgKz0gaGVpZ2h0O1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ3RvcCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChlQXR0YWNobWVudC50b3AgPT09ICd0b3AnICYmIHRvcCArIGhlaWdodCA+IGJvdW5kc1szXSAmJiB0b3AgLSAoaGVpZ2h0IC0gdGFyZ2V0SGVpZ2h0KSA+PSBib3VuZHNbMV0pIHtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQgLSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgICAgICB0QXR0YWNobWVudC50b3AgPSAnYm90dG9tJztcblxuICAgICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ2JvdHRvbSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRBdHRhY2htZW50LnRvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICBpZiAoZUF0dGFjaG1lbnQudG9wID09PSAndG9wJyAmJiB0b3AgKyBoZWlnaHQgPiBib3VuZHNbM10pIHtcbiAgICAgICAgICAgIHRvcCAtPSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgICAgICB0QXR0YWNobWVudC50b3AgPSAndG9wJztcblxuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZUF0dGFjaG1lbnQudG9wID09PSAnYm90dG9tJyAmJiB0b3AgPCBib3VuZHNbMV0gJiYgdG9wICsgKGhlaWdodCAqIDIgLSB0YXJnZXRIZWlnaHQpIDw9IGJvdW5kc1szXSkge1xuICAgICAgICAgICAgdG9wICs9IGhlaWdodCAtIHRhcmdldEhlaWdodDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LnRvcCA9ICd0b3AnO1xuXG4gICAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAndG9wJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodEF0dGFjaG1lbnQudG9wID09PSAnbWlkZGxlJykge1xuICAgICAgICAgIGlmICh0b3AgKyBoZWlnaHQgPiBib3VuZHNbM10gJiYgZUF0dGFjaG1lbnQudG9wID09PSAndG9wJykge1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuICAgICAgICAgIH0gZWxzZSBpZiAodG9wIDwgYm91bmRzWzFdICYmIGVBdHRhY2htZW50LnRvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHRvcCArPSBoZWlnaHQ7XG4gICAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAndG9wJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZUF0dGFjaFggPT09ICd0YXJnZXQnIHx8IGNoYW5nZUF0dGFjaFggPT09ICdib3RoJykge1xuICAgICAgICBpZiAobGVmdCA8IGJvdW5kc1swXSAmJiB0QXR0YWNobWVudC5sZWZ0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBsZWZ0ICs9IHRhcmdldFdpZHRoO1xuICAgICAgICAgIHRBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlZnQgKyB3aWR0aCA+IGJvdW5kc1syXSAmJiB0QXR0YWNobWVudC5sZWZ0ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgbGVmdCAtPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgICB0QXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VBdHRhY2hYID09PSAndG9nZXRoZXInKSB7XG4gICAgICAgIGlmIChsZWZ0IDwgYm91bmRzWzBdICYmIHRBdHRhY2htZW50LmxlZnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG5cbiAgICAgICAgICAgIGxlZnQgKz0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG5cbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGVmdCArIHdpZHRoID4gYm91bmRzWzJdICYmIHRBdHRhY2htZW50LmxlZnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBsZWZ0IC09IHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcblxuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgbGVmdCAtPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG5cbiAgICAgICAgICAgIGxlZnQgKz0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0QXR0YWNobWVudC5sZWZ0ID09PSAnY2VudGVyJykge1xuICAgICAgICAgIGlmIChsZWZ0ICsgd2lkdGggPiBib3VuZHNbMl0gJiYgZUF0dGFjaG1lbnQubGVmdCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChsZWZ0IDwgYm91bmRzWzBdICYmIGVBdHRhY2htZW50LmxlZnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlQXR0YWNoWSA9PT0gJ2VsZW1lbnQnIHx8IGNoYW5nZUF0dGFjaFkgPT09ICdib3RoJykge1xuICAgICAgICBpZiAodG9wIDwgYm91bmRzWzFdICYmIGVBdHRhY2htZW50LnRvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICB0b3AgKz0gaGVpZ2h0O1xuICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICd0b3AnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcCArIGhlaWdodCA+IGJvdW5kc1szXSAmJiBlQXR0YWNobWVudC50b3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAnYm90dG9tJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlQXR0YWNoWCA9PT0gJ2VsZW1lbnQnIHx8IGNoYW5nZUF0dGFjaFggPT09ICdib3RoJykge1xuICAgICAgICBpZiAobGVmdCA8IGJvdW5kc1swXSkge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IHdpZHRoIC8gMjtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlZnQgKyB3aWR0aCA+IGJvdW5kc1syXSkge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoIC8gMjtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHBpbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGluID0gcGluLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgcmV0dXJuIHAudHJpbSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocGluID09PSB0cnVlKSB7XG4gICAgICAgIHBpbiA9IFsndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJ107XG4gICAgICB9XG5cbiAgICAgIHBpbiA9IHBpbiB8fCBbXTtcblxuICAgICAgdmFyIHBpbm5lZCA9IFtdO1xuICAgICAgdmFyIG9vYiA9IFtdO1xuXG4gICAgICBpZiAodG9wIDwgYm91bmRzWzFdKSB7XG4gICAgICAgIGlmIChwaW4uaW5kZXhPZigndG9wJykgPj0gMCkge1xuICAgICAgICAgIHRvcCA9IGJvdW5kc1sxXTtcbiAgICAgICAgICBwaW5uZWQucHVzaCgndG9wJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb29iLnB1c2goJ3RvcCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b3AgKyBoZWlnaHQgPiBib3VuZHNbM10pIHtcbiAgICAgICAgaWYgKHBpbi5pbmRleE9mKCdib3R0b20nKSA+PSAwKSB7XG4gICAgICAgICAgdG9wID0gYm91bmRzWzNdIC0gaGVpZ2h0O1xuICAgICAgICAgIHBpbm5lZC5wdXNoKCdib3R0b20nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvb2IucHVzaCgnYm90dG9tJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnQgPCBib3VuZHNbMF0pIHtcbiAgICAgICAgaWYgKHBpbi5pbmRleE9mKCdsZWZ0JykgPj0gMCkge1xuICAgICAgICAgIGxlZnQgPSBib3VuZHNbMF07XG4gICAgICAgICAgcGlubmVkLnB1c2goJ2xlZnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvb2IucHVzaCgnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWZ0ICsgd2lkdGggPiBib3VuZHNbMl0pIHtcbiAgICAgICAgaWYgKHBpbi5pbmRleE9mKCdyaWdodCcpID49IDApIHtcbiAgICAgICAgICBsZWZ0ID0gYm91bmRzWzJdIC0gd2lkdGg7XG4gICAgICAgICAgcGlubmVkLnB1c2goJ3JpZ2h0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb29iLnB1c2goJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBpbm5lZC5sZW5ndGgpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgcGlubmVkQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5vcHRpb25zLnBpbm5lZENsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGlubmVkQ2xhc3MgPSBfdGhpcy5vcHRpb25zLnBpbm5lZENsYXNzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaW5uZWRDbGFzcyA9IF90aGlzLmdldENsYXNzKCdwaW5uZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZGRDbGFzc2VzLnB1c2gocGlubmVkQ2xhc3MpO1xuICAgICAgICAgIHBpbm5lZC5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgICAgICBhZGRDbGFzc2VzLnB1c2gocGlubmVkQ2xhc3MgKyAnLScgKyBzaWRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9vYi5sZW5ndGgpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgb29iQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5vcHRpb25zLm91dE9mQm91bmRzQ2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvb2JDbGFzcyA9IF90aGlzLm9wdGlvbnMub3V0T2ZCb3VuZHNDbGFzcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb29iQ2xhc3MgPSBfdGhpcy5nZXRDbGFzcygnb3V0LW9mLWJvdW5kcycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFkZENsYXNzZXMucHVzaChvb2JDbGFzcyk7XG4gICAgICAgICAgb29iLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgICAgIGFkZENsYXNzZXMucHVzaChvb2JDbGFzcyArICctJyArIHNpZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGlubmVkLmluZGV4T2YoJ2xlZnQnKSA+PSAwIHx8IHBpbm5lZC5pbmRleE9mKCdyaWdodCcpID49IDApIHtcbiAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9IHRBdHRhY2htZW50LmxlZnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChwaW5uZWQuaW5kZXhPZigndG9wJykgPj0gMCB8fCBwaW5uZWQuaW5kZXhPZignYm90dG9tJykgPj0gMCkge1xuICAgICAgICBlQXR0YWNobWVudC50b3AgPSB0QXR0YWNobWVudC50b3AgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRBdHRhY2htZW50LnRvcCAhPT0gdGFyZ2V0QXR0YWNobWVudC50b3AgfHwgdEF0dGFjaG1lbnQubGVmdCAhPT0gdGFyZ2V0QXR0YWNobWVudC5sZWZ0IHx8IGVBdHRhY2htZW50LnRvcCAhPT0gX3RoaXMuYXR0YWNobWVudC50b3AgfHwgZUF0dGFjaG1lbnQubGVmdCAhPT0gX3RoaXMuYXR0YWNobWVudC5sZWZ0KSB7XG4gICAgICAgIF90aGlzLnVwZGF0ZUF0dGFjaENsYXNzZXMoZUF0dGFjaG1lbnQsIHRBdHRhY2htZW50KTtcbiAgICAgICAgX3RoaXMudHJpZ2dlcigndXBkYXRlJywge1xuICAgICAgICAgIGF0dGFjaG1lbnQ6IGVBdHRhY2htZW50LFxuICAgICAgICAgIHRhcmdldEF0dGFjaG1lbnQ6IHRBdHRhY2htZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCEoX3RoaXMub3B0aW9ucy5hZGRUYXJnZXRDbGFzc2VzID09PSBmYWxzZSkpIHtcbiAgICAgICAgdXBkYXRlQ2xhc3NlcyhfdGhpcy50YXJnZXQsIGFkZENsYXNzZXMsIGFsbENsYXNzZXMpO1xuICAgICAgfVxuICAgICAgdXBkYXRlQ2xhc3NlcyhfdGhpcy5lbGVtZW50LCBhZGRDbGFzc2VzLCBhbGxDbGFzc2VzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH07XG4gIH1cbn0pO1xuLyogZ2xvYmFscyBUZXRoZXJCYXNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9UZXRoZXJCYXNlJFV0aWxzID0gVGV0aGVyQmFzZS5VdGlscztcbnZhciBnZXRCb3VuZHMgPSBfVGV0aGVyQmFzZSRVdGlscy5nZXRCb3VuZHM7XG52YXIgdXBkYXRlQ2xhc3NlcyA9IF9UZXRoZXJCYXNlJFV0aWxzLnVwZGF0ZUNsYXNzZXM7XG52YXIgZGVmZXIgPSBfVGV0aGVyQmFzZSRVdGlscy5kZWZlcjtcblxuVGV0aGVyQmFzZS5tb2R1bGVzLnB1c2goe1xuICBwb3NpdGlvbjogZnVuY3Rpb24gcG9zaXRpb24oX3JlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgdG9wID0gX3JlZi50b3A7XG4gICAgdmFyIGxlZnQgPSBfcmVmLmxlZnQ7XG5cbiAgICB2YXIgX2NhY2hlID0gdGhpcy5jYWNoZSgnZWxlbWVudC1ib3VuZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0Qm91bmRzKF90aGlzLmVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgdmFyIGhlaWdodCA9IF9jYWNoZS5oZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gX2NhY2hlLndpZHRoO1xuXG4gICAgdmFyIHRhcmdldFBvcyA9IHRoaXMuZ2V0VGFyZ2V0Qm91bmRzKCk7XG5cbiAgICB2YXIgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgIHZhciByaWdodCA9IGxlZnQgKyB3aWR0aDtcblxuICAgIHZhciBhYnV0dGVkID0gW107XG4gICAgaWYgKHRvcCA8PSB0YXJnZXRQb3MuYm90dG9tICYmIGJvdHRvbSA+PSB0YXJnZXRQb3MudG9wKSB7XG4gICAgICBbJ2xlZnQnLCAncmlnaHQnXS5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHZhciB0YXJnZXRQb3NTaWRlID0gdGFyZ2V0UG9zW3NpZGVdO1xuICAgICAgICBpZiAodGFyZ2V0UG9zU2lkZSA9PT0gbGVmdCB8fCB0YXJnZXRQb3NTaWRlID09PSByaWdodCkge1xuICAgICAgICAgIGFidXR0ZWQucHVzaChzaWRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQgPD0gdGFyZ2V0UG9zLnJpZ2h0ICYmIHJpZ2h0ID49IHRhcmdldFBvcy5sZWZ0KSB7XG4gICAgICBbJ3RvcCcsICdib3R0b20nXS5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHZhciB0YXJnZXRQb3NTaWRlID0gdGFyZ2V0UG9zW3NpZGVdO1xuICAgICAgICBpZiAodGFyZ2V0UG9zU2lkZSA9PT0gdG9wIHx8IHRhcmdldFBvc1NpZGUgPT09IGJvdHRvbSkge1xuICAgICAgICAgIGFidXR0ZWQucHVzaChzaWRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGFsbENsYXNzZXMgPSBbXTtcbiAgICB2YXIgYWRkQ2xhc3NlcyA9IFtdO1xuXG4gICAgdmFyIHNpZGVzID0gWydsZWZ0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nXTtcbiAgICBhbGxDbGFzc2VzLnB1c2godGhpcy5nZXRDbGFzcygnYWJ1dHRlZCcpKTtcbiAgICBzaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICBhbGxDbGFzc2VzLnB1c2goX3RoaXMuZ2V0Q2xhc3MoJ2FidXR0ZWQnKSArICctJyArIHNpZGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKGFidXR0ZWQubGVuZ3RoKSB7XG4gICAgICBhZGRDbGFzc2VzLnB1c2godGhpcy5nZXRDbGFzcygnYWJ1dHRlZCcpKTtcbiAgICB9XG5cbiAgICBhYnV0dGVkLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgIGFkZENsYXNzZXMucHVzaChfdGhpcy5nZXRDbGFzcygnYWJ1dHRlZCcpICsgJy0nICsgc2lkZSk7XG4gICAgfSk7XG5cbiAgICBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIShfdGhpcy5vcHRpb25zLmFkZFRhcmdldENsYXNzZXMgPT09IGZhbHNlKSkge1xuICAgICAgICB1cGRhdGVDbGFzc2VzKF90aGlzLnRhcmdldCwgYWRkQ2xhc3NlcywgYWxsQ2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICB1cGRhdGVDbGFzc2VzKF90aGlzLmVsZW1lbnQsIGFkZENsYXNzZXMsIGFsbENsYXNzZXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuLyogZ2xvYmFscyBUZXRoZXJCYXNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbJ3JldHVybiddKSBfaVsncmV0dXJuJ10oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZScpOyB9IH07IH0pKCk7XG5cblRldGhlckJhc2UubW9kdWxlcy5wdXNoKHtcbiAgcG9zaXRpb246IGZ1bmN0aW9uIHBvc2l0aW9uKF9yZWYpIHtcbiAgICB2YXIgdG9wID0gX3JlZi50b3A7XG4gICAgdmFyIGxlZnQgPSBfcmVmLmxlZnQ7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5zaGlmdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzaGlmdCA9IHRoaXMub3B0aW9ucy5zaGlmdDtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zaGlmdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2hpZnQgPSB0aGlzLm9wdGlvbnMuc2hpZnQuY2FsbCh0aGlzLCB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0pO1xuICAgIH1cblxuICAgIHZhciBzaGlmdFRvcCA9IHVuZGVmaW5lZCxcbiAgICAgICAgc2hpZnRMZWZ0ID0gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2Ygc2hpZnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzaGlmdCA9IHNoaWZ0LnNwbGl0KCcgJyk7XG4gICAgICBzaGlmdFsxXSA9IHNoaWZ0WzFdIHx8IHNoaWZ0WzBdO1xuXG4gICAgICB2YXIgX3NoaWZ0ID0gc2hpZnQ7XG5cbiAgICAgIHZhciBfc2hpZnQyID0gX3NsaWNlZFRvQXJyYXkoX3NoaWZ0LCAyKTtcblxuICAgICAgc2hpZnRUb3AgPSBfc2hpZnQyWzBdO1xuICAgICAgc2hpZnRMZWZ0ID0gX3NoaWZ0MlsxXTtcblxuICAgICAgc2hpZnRUb3AgPSBwYXJzZUZsb2F0KHNoaWZ0VG9wLCAxMCk7XG4gICAgICBzaGlmdExlZnQgPSBwYXJzZUZsb2F0KHNoaWZ0TGVmdCwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlmdFRvcCA9IHNoaWZ0LnRvcDtcbiAgICAgIHNoaWZ0TGVmdCA9IHNoaWZ0LmxlZnQ7XG4gICAgfVxuXG4gICAgdG9wICs9IHNoaWZ0VG9wO1xuICAgIGxlZnQgKz0gc2hpZnRMZWZ0O1xuXG4gICAgcmV0dXJuIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfTtcbiAgfVxufSk7XG5yZXR1cm4gVGV0aGVyO1xuXG59KSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IERheXNWaWV3SGVhZGluZyBmcm9tICcuL0RheXNWaWV3SGVhZGluZyc7XG5pbXBvcnQgRGF5c09mV2VlayBmcm9tICcuL0RheXNPZldlZWsnO1xuaW1wb3J0IE1vbnRoU2VsZWN0b3IgZnJvbSAnLi9Nb250aFNlbGVjdG9yJztcbmltcG9ydCBEYXkgZnJvbSAnLi9EYXknO1xuaW1wb3J0IHsgZ2V0RGF5c09mTW9udGggfSBmcm9tICcuLi91dGlscy9tb21lbnQtaGVscGVyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBvbkNsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSc7XG5pbXBvcnQgeyBkZWZhdWx0U3R5bGVzIH0gZnJvbSAnLi9EZWZhdWx0U3R5bGVzJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtaW46IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbWF4OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0eWxlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzZWxlY3RlZERheTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkZWZhdWx0TW9udGg6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xpY2tPdXRzaWRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBuZXh0TW9udGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcHJldk1vbnRoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldENhbGVuZGFyTW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZXRNb250aDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZXRUeXBlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXM6IGRlZmF1bHRTdHlsZXMsXG4gICAgY29udGFpbmVyUHJvcHM6IHt9XG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgbW9udGg6IHRoaXMucHJvcHMuZGVmYXVsdE1vbnRoIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXkgfHwgbW9tZW50KHRoaXMucHJvcHMubWluKSxcbiAgICBzZWxlY3RlZERheTogdGhpcy5wcm9wcy5zZWxlY3RlZERheSB8fCBudWxsLFxuICAgIG1vZGU6ICdkYXlzJ1xuICB9O1xuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dE1vbnRoOiB0aGlzLm5leHRNb250aC5iaW5kKHRoaXMpLFxuICAgICAgcHJldk1vbnRoOiB0aGlzLnByZXZNb250aC5iaW5kKHRoaXMpLFxuICAgICAgc2V0Q2FsZW5kYXJNb2RlOiB0aGlzLnNldE1vZGUuYmluZCh0aGlzKSxcbiAgICAgIHNldE1vbnRoOiB0aGlzLnNldE1vbnRoLmJpbmQodGhpcyksXG4gICAgICBzZXRUeXBlOiB0aGlzLnNldE1vbnRoLmJpbmQodGhpcylcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IHNlbGVjdGVkRGF5LCBkZWZhdWx0TW9udGgsIG1pbiB9KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWREYXkgIT09IHNlbGVjdGVkRGF5KSB7XG4gICAgICB0aGlzLnNlbGVjdERheShzZWxlY3RlZERheSk7XG4gICAgfSBlbHNlIGlmIChkZWZhdWx0TW9udGggJiYgdGhpcy5wcm9wcy5kZWZhdWx0TW9udGggIT09IGRlZmF1bHRNb250aCAmJiB0aGlzLnN0YXRlLm1vbnRoID09PSB0aGlzLnByb3BzLmRlZmF1bHRNb250aCkge1xuICAgICAgdGhpcy5zZXRNb250aChkZWZhdWx0TW9udGgpO1xuICAgIH0gZWxzZSBpZiAobWluICYmIHRoaXMucHJvcHMubWluICE9PSBtaW4gJiYgdGhpcy5zdGF0ZS5tb250aC5pc1NhbWUodGhpcy5wcm9wcy5taW4pKSB7XG4gICAgICB0aGlzLnNldE1vbnRoKG1pbi5jbG9uZSgpKTtcbiAgICB9XG4gIH1cblxuICBzZXRNb2RlKG1vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kZSB9KTtcbiAgfVxuXG4gIHNldE1vbnRoKG1vbnRoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vbnRoIH0pO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHR5cGUgfSk7XG4gIH1cblxuICBuZXh0TW9udGgoKSB7XG4gICAgY29uc3QgbW9udGhGb3JtYXQgPSAnTW9udGgnO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb250aDogdGhpcy5zdGF0ZS5tb250aC5jbG9uZSgpLmFkZCgxLCBtb250aEZvcm1hdClcbiAgICB9KTtcbiAgfVxuXG4gIHByZXZNb250aCgpIHtcbiAgICBjb25zdCBtb250aEZvcm1hdCA9ICdNb250aCc7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vbnRoOiB0aGlzLnN0YXRlLm1vbnRoLmNsb25lKCkuc3VidHJhY3QoMSwgbW9udGhGb3JtYXQpXG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3REYXkoc2VsZWN0ZWREYXkpIHtcbiAgICBjb25zdCB7IG1vbnRoIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHllYXJNb250aEZvcm1hdCA9ICdZWVlZTU0nO1xuXG4gICAgLy8gQmVjYXVzZSB0aGVyZSdzIG5vIGBtMS5pc1NhbWUobTIsICdqTW9udGgnKWBcbiAgICBpZiAoc2VsZWN0ZWREYXkuZm9ybWF0KHllYXJNb250aEZvcm1hdCkgIT09IG1vbnRoLmZvcm1hdCh5ZWFyTW9udGhGb3JtYXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9udGg6IHNlbGVjdGVkRGF5IH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZERheSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrT25EYXkgPSBzZWxlY3RlZERheSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNlbGVjdERheShzZWxlY3RlZERheSk7XG4gICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICBvblNlbGVjdChzZWxlY3RlZERheSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2tPdXRzaWRlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBkYXlzID0gbnVsbDtcbiAgbGFzdFJlbmRlcmVkTW9udGggPSBudWxsO1xuXG4gIHJlbmRlck1vbnRoU2VsZWN0b3IoKSB7XG4gICAgY29uc3QgeyBtb250aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHN0eWxlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKDxNb250aFNlbGVjdG9yIHN0eWxlcz17c3R5bGVzfSBzZWxlY3RlZE1vbnRoPXttb250aH0gLz4pO1xuICB9XG5cbiAgcmVuZGVyRGF5cygpIHtcbiAgICBjb25zdCB7IG1vbnRoLCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBtaW4sIG1heCwgc3R5bGVzLCBvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBkYXlzO1xuXG4gICAgaWYgKHRoaXMubGFzdFJlbmRlcmVkTW9udGggPT09IG1vbnRoKSB7XG4gICAgICBkYXlzID0gdGhpcy5kYXlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlzID0gZ2V0RGF5c09mTW9udGgobW9udGgpO1xuICAgICAgdGhpcy5kYXlzID0gZGF5cztcbiAgICAgIHRoaXMubGFzdFJlbmRlcmVkTW9udGggPSBtb250aDtcbiAgICB9XG5cbiAgICBjb25zdCBtb250aEZvcm1hdCA9ICdNTSc7XG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9ICdZWVlZTU1ERCc7XG5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxEYXlzVmlld0hlYWRpbmcgc3R5bGVzPXtzdHlsZXN9IG1vbnRoPXttb250aH0gLz5cbiAgICAgICAgPERheXNPZldlZWsgc3R5bGVzPXtzdHlsZXN9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5UGlja2VyQ29udGFpbmVyfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXlzLm1hcChkYXkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRNb250aCA9IGRheS5mb3JtYXQobW9udGhGb3JtYXQpID09PSBtb250aC5mb3JtYXQobW9udGhGb3JtYXQpO1xuICAgICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9IChtaW4gPyBkYXkuaXNCZWZvcmUobWluKSA6IGZhbHNlKSB8fCAobWF4ID8gZGF5LmlzQWZ0ZXIobWF4KSA6IGZhbHNlKTtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RlZERheSA/IHNlbGVjdGVkRGF5LmlzU2FtZShkYXksICdkYXknKSA6IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPERheVxuICAgICAgICAgICAgICAgICAga2V5PXtkYXkuZm9ybWF0KGRhdGVGb3JtYXQpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja09uRGF5fVxuICAgICAgICAgICAgICAgICAgZGF5PXtkYXl9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICBpc0N1cnJlbnRNb250aD17aXNDdXJyZW50TW9udGh9XG4gICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZERheSxcbiAgICAgIG1pbixcbiAgICAgIG1heCxcbiAgICAgIG9uQ2xpY2tPdXRzaWRlLFxuICAgICAgb3V0c2lkZUNsaWNrSWdub3JlQ2xhc3MsXG4gICAgICBzdHlsZXMsXG4gICAgICBjbGFzc05hbWVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1vZGUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhckNvbnRhaW5lciArICcgJyArIGNsYXNzTmFtZX0+XG4gICAgICAgIHttb2RlID09PSAnbW9udGhTZWxlY3RvcicgPyB0aGlzLnJlbmRlck1vbnRoU2VsZWN0b3IoKSA6IHRoaXMucmVuZGVyRGF5cygpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBvbkNsaWNrT3V0c2lkZShDYWxlbmRhcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgcGVyc2lhbk51bWJlciB9IGZyb20gJy4uL3V0aWxzL3BlcnNpYW4nO1xuaW1wb3J0IHsgbGVmdEFycm93LCByaWdodEFycm93IH0gZnJvbSAnLi4vdXRpbHMvYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9udGg6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgc3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG5leHRNb250aDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwcmV2TW9udGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0Q2FsZW5kYXJNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgaGFuZGxlTW9udGhDbGljayhldmVudCkge1xuICAgIGNvbnN0IHsgc2V0Q2FsZW5kYXJNb2RlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRDYWxlbmRhck1vZGUoJ21vbnRoU2VsZWN0b3InKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5leHRNb250aCwgcHJldk1vbnRoIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyBtb250aCwgc3R5bGVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW9udGhDbGljay5iaW5kKHRoaXMpfT5cbiAgICAgICAgICB7bW9udGgubG9jYWxlKCdlbicpLmZvcm1hdCgnTU1NTSBZWVlZJyl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGl0bGU9XCLZhdin2Ycg2YLYqNmEXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmV2fVxuICAgICAgICAgIG9uQ2xpY2s9e3ByZXZNb250aH1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17cmlnaHRBcnJvd31cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwi2YXYp9mHINio2LnYr1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV4dH1cbiAgICAgICAgICBvbkNsaWNrPXtuZXh0TW9udGh9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2xlZnRBcnJvd31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImNvbnN0IGxhdGluVG9QZXJzaWFuTWFwID0gWyfbsScsICfbsicsICfbsycsICfbtCcsICfbtScsICfbticsICfbtycsICfbuCcsICfbuScsICfbsCddO1xuY29uc3QgbGF0aW5OdW1iZXJzID0gWy8xL2csIC8yL2csIC8zL2csIC80L2csIC81L2csIC82L2csIC83L2csIC84L2csIC85L2csIC8wL2ddO1xuXG5mdW5jdGlvbiBwcmVwYXJlTnVtYmVyKGlucHV0KSB7XG4gIGxldCBzdHJpbmc7XG4gIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XG4gICAgc3RyaW5nID0gaW5wdXQudG9TdHJpbmcoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RyaW5nID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgc3RyaW5nID0gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBsYXRpblRvUGVyc2lhbihzdHJpbmcpIHtcbiAgbGV0IHJlc3VsdCA9IHN0cmluZztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShsYXRpbk51bWJlcnNbaW5kZXhdLCBsYXRpblRvUGVyc2lhbk1hcFtpbmRleF0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpYW5OdW1iZXIoaW5wdXQpIHtcbiAgcmV0dXJuIGxhdGluVG9QZXJzaWFuKHByZXBhcmVOdW1iZXIoaW5wdXQpKTtcbn1cbiIsImV4cG9ydCBjb25zdCBsZWZ0QXJyb3cgPSB7XG4gIF9faHRtbDogJzxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMzE0LjUgMzE0LjVcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE0LjUgMzE0LjU7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48cGF0aCBjbGFzcz1cImFycm93LWljb25cIiBkPVwiTTEyNSwxNTcuNWwxMTYtMTE2YzEwLTEwLDEwLTI0LDAtMzRzLTI1LTEwLTM1LDBsLTEzMywxMzNjLTUsNS03LDEwLTcsMTdzMiwxMiw3LDE3bDEzMywxMzNjNSw1LDExLDcsMTcsN3MxMy0yLDE4LTdjMTAtMTAsMTAtMjQsMC0zNEwxMjUsMTU3LjV6XCIvPjwvZz48L3N2Zz4nXG59O1xuXG5leHBvcnQgY29uc3QgcmlnaHRBcnJvdyA9IHtcbiAgX19odG1sOiAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAzMTUuNSAzMTUuNVwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTUuNSAzMTUuNTtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxnPjxwYXRoIGNsYXNzPVwiYXJyb3ctaWNvblwiIGQ9XCJNMjQyLDE0MUwxMDksOGMtNS01LTEyLTgtMTgtOFM3OSwzLDc0LDhjLTEwLDEwLTEwLDI0LDAsMzRsMTE2LDExNkw3NCwyNzRjLTEwLDEwLTEwLDI0LDAsMzRzMjUsMTAsMzUsMGwxMzMtMTMzYzUtNSw3LTExLDctMTdDMjQ5LDE1MSwyNDcsMTQ2LDI0MiwxNDF6XCIvPjwvZz48L3N2Zz4nXG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlID0ge1xuICBfX2h0bWw6ICc8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDIxMi45ODIgMjEyLjk4MlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMTIuOTgyIDIxMi45ODI7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48cGF0aCBzdHlsZT1cImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO1wiIGQ9XCJNMTMxLjgwNCwxMDYuNDkxbDc1LjkzNi03NS45MzZjNi45OS02Ljk5LDYuOTktMTguMzIzLDAtMjUuMzEyICAgYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyLDBsLTc1LjkzNyw3NS45MzdMMzAuNTU0LDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyLDBjLTYuOTg5LDYuOTktNi45ODksMTguMzIzLDAsMjUuMzEyICAgbDc1LjkzNyw3NS45MzZMNS4yNDIsMTgyLjQyN2MtNi45ODksNi45OS02Ljk4OSwxOC4zMjMsMCwyNS4zMTJjNi45OSw2Ljk5LDE4LjMyMiw2Ljk5LDI1LjMxMiwwbDc1LjkzNy03NS45MzdsNzUuOTM3LDc1LjkzNyAgIGM2Ljk4OSw2Ljk5LDE4LjMyMiw2Ljk5LDI1LjMxMiwwYzYuOTktNi45OSw2Ljk5LTE4LjMyMiwwLTI1LjMxMkwxMzEuODA0LDEwNi40OTF6XCIgZmlsbD1cIiM1NTU1NTVcIi8+PC9nPjwvc3ZnPidcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG4vLyBEYXkgb2Ygd2VlayBuYW1lcyBmb3IgdXNlIGluIGRhdGUtcGlja2VyIGhlYWRpbmdcbmNvbnN0IGRheU9mV2Vla05hbWVzR3JlZ29yaWFuID0gWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlzT2ZXZWVrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBkYXlPZldlZWtOYW1lcyA9IGRheU9mV2Vla05hbWVzR3JlZ29yaWFuO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5c09mV2Vla30+XG4gICAgICAgIHtkYXlPZldlZWtOYW1lcy5tYXAoKG5hbWUsIGtleSkgPT4gPGRpdiBrZXk9e2tleX0+e25hbWV9PC9kaXY+KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBNb250aHNWaWV3SGVhZGluZyBmcm9tICcuL01vbnRoc1ZpZXdIZWFkaW5nJztcbmltcG9ydCB7IGxlZnRBcnJvdywgcmlnaHRBcnJvdyB9IGZyb20gJy4uL3V0aWxzL2Fzc2V0cyc7XG5cbmNvbnN0IG1vbnRoc0dyZWdvcmlhbiA9IFtcbiAgJ0phbnVhcnknLFxuICAnRmVicnVhcnknLFxuICAnTWFyY2gnLFxuICAnQXByaWwnLFxuICAnTWF5JyxcbiAgJ0p1bmUnLFxuICAnSnVseScsXG4gICdBdWd1c3QnLFxuICAnU2VwdGVtYmVyJyxcbiAgJ09jdG9iZXInLFxuICAnTm92ZW1iZXInLFxuICAnRGVjZW1iZXInXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aFNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2VsZWN0ZWRNb250aDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBzZXRDYWxlbmRhck1vZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0TW9udGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICB5ZWFyOiB0aGlzLnByb3BzLnNlbGVjdGVkTW9udGhcbiAgfTtcblxuICBuZXh0WWVhcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHllYXI6IHRoaXMuc3RhdGUueWVhci5jbG9uZSgpLmFkZCgxLCAneWVhcicpXG4gICAgfSk7XG4gIH1cblxuICBwcmV2WWVhcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHllYXI6IHRoaXMuc3RhdGUueWVhci5jbG9uZSgpLnN1YnRyYWN0KDEsICd5ZWFyJylcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGtleSkge1xuICAgIGNvbnN0IHsgc2V0TW9udGgsIHNldENhbGVuZGFyTW9kZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IG1vbnRoWWVhckZvcm1hdD0gJ00tWVlZWSc7XG4gICAgc2V0TW9udGgobW9tZW50KGtleSwgbW9udGhZZWFyRm9ybWF0KSk7XG4gICAgc2V0Q2FsZW5kYXJNb2RlKCdkYXlzJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB5ZWFyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRNb250aCwgc3R5bGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgICBjb25zdCB5ZWFyRm9ybWF0PSAnWVlZWSc7XG4gICAgY29uc3QgbW9udGhZZWFyRm9ybWF0PSAnTS1ZWVlZJztcbiAgICBjb25zdCBtb250aHM9bW9udGhzR3JlZ29yaWFuO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9udGgtc2VsZWN0b3JcIj5cbiAgICAgICAgPE1vbnRoc1ZpZXdIZWFkaW5nXG4gICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgeWVhcj17eWVhcn1cbiAgICAgICAgICBvbk5leHRZZWFyPXt0aGlzLm5leHRZZWFyLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uUHJldlllYXI9e3RoaXMucHJldlllYXIuYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9udGhzTGlzdH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbW9udGhzLm1hcCgobmFtZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkZpbmdlcnByaW50ID0gKGtleSArIDEpICsgJy0nICsgeWVhci5mb3JtYXQoeWVhckZvcm1hdCk7XG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTW9udGhGaW5nZXJwcmludCA9IHNlbGVjdGVkTW9udGguZm9ybWF0KG1vbnRoWWVhckZvcm1hdCk7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudCA9IHNlbGVjdGVkTW9udGhGaW5nZXJwcmludCA9PT0gYnV0dG9uRmluZ2VycHJpbnQ7XG5cbiAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyhzdHlsZXMubW9udGhXcmFwcGVyLCB7XG4gICAgICAgICAgICAgICAgW3N0eWxlcy5zZWxlY3RlZF06IGlzQ3VycmVudFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsIGJ1dHRvbkZpbmdlcnByaW50KX0+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgcGVyc2lhbk51bWJlciB9IGZyb20gJy4uL3V0aWxzL3BlcnNpYW4nO1xuaW1wb3J0IHsgbGVmdEFycm93LCByaWdodEFycm93IH0gZnJvbSAnLi4vdXRpbHMvYXNzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhzVmlld0hlYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHllYXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBvbk5leHRZZWFyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUHJldlllYXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHN0eWxlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0eXBlOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgeWVhciwgc3R5bGVzLCB0eXBlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeWVhckZvcm1hdCA9ICdZWVlZJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAge3llYXIuZm9ybWF0KHllYXJGb3JtYXQpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aXRsZT17XCJiZWZvcmUgeWVhclwifVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMubmF2QnV0dG9ufVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZXZ9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vblByZXZZZWFyfVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtyaWdodEFycm93fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGl0bGU9e1wibmV4dCB5ZWFyXCJ9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5uYXZCdXR0b259XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV4dH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uTmV4dFllYXJ9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2xlZnRBcnJvd31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICB3cmFwcGVyOiB7fSxcbiAgYnV0dG9uOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgaXNDdXJyZW50TW9udGg6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgcmV0dXJuIG5leHRQcm9wcy5zZWxlY3RlZCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgbmV4dFByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkIHx8XG4gICAgICBuZXh0UHJvcHMuaXNDdXJyZW50TW9udGggIT09IHRoaXMucHJvcHMuaXNDdXJyZW50TW9udGg7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgeyBvbkNsaWNrLCBkYXkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljayhkYXkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRheSwgZGlzYWJsZWQsIHNlbGVjdGVkLCBpc0N1cnJlbnRNb250aCwgb25DbGljaywgc3R5bGVzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyhzdHlsZXMuZGF5V3JhcHBlciwge1xuICAgICAgW3N0eWxlcy5zZWxlY3RlZF06IHNlbGVjdGVkLFxuICAgICAgW3N0eWxlcy5jdXJyZW50TW9udGhdOiBpc0N1cnJlbnRNb250aFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7IGRheS5mb3JtYXQoJ0QnKSB9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBHZXQgZGF5cyBvZiBhIG1vbnRoIHRoYXQgc2hvdWxkIGJlIHNob3duIG9uIGEgbW9udGggcGFnZVxuICpcbiAqIEBwYXJhbSBtb250aCBBIG1vbWVudCBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNPZk1vbnRoKG1vbnRoKSB7XG4gIGNvbnN0IGRheXMgPSBbXTtcblxuICBjb25zdCBtb250aEZvcm1hdCA9ICdNb250aCc7XG4gIGNvbnN0IGRheU9mZnNldCA9IDA7XG5cbiAgY29uc3QgY3VycmVudCA9IG1vbnRoLmNsb25lKCkuc3RhcnRPZihtb250aEZvcm1hdCk7XG4gIGNvbnN0IGVuZCA9IG1vbnRoLmNsb25lKCkuZW5kT2YobW9udGhGb3JtYXQpO1xuXG4gIC8vIFNldCBzdGFydCB0byB0aGUgZmlyc3QgZGF5IG9mIHdlZWsgaW4gdGhlIGxhc3QgbW9udGhcbiAgY3VycmVudC5zdWJ0cmFjdCgoY3VycmVudC5kYXkoKSArIGRheU9mZnNldCkgJSA3LCAnZGF5cycpO1xuXG4gIC8vIFNldCBlbmQgdG8gdGhlIGxhc3QgZGF5IG9mIHdlZWsgaW4gdGhlIG5leHQgbW9udGhcbiAgZW5kLmFkZCg2IC0gKGVuZC5kYXkoKSArIGRheU9mZnNldCkgJSA3LCAnZGF5cycpO1xuXG4gIHdoaWxlIChjdXJyZW50LmlzQmVmb3JlKGVuZCkpIHtcbiAgICBkYXlzLnB1c2goY3VycmVudC5jbG9uZSgpKTtcbiAgICBjdXJyZW50LmFkZCgxLCAnZGF5cycpO1xuICB9XG5cbiAgcmV0dXJuIGRheXM7XG59XG4iLCIvKipcbiAqIEEgaGlnaGVyLW9yZGVyLWNvbXBvbmVudCBmb3IgaGFuZGxpbmcgb25DbGlja091dHNpZGUgZm9yIFJlYWN0IGNvbXBvbmVudHMuXG4gKi9cbihmdW5jdGlvbihyb290KSB7XG5cbiAgLy8gYWRtaW5pc3RyYXRpdmVcbiAgdmFyIHJlZ2lzdGVyZWRDb21wb25lbnRzID0gW107XG4gIHZhciBoYW5kbGVycyA9IFtdO1xuICB2YXIgSUdOT1JFX0NMQVNTID0gJ2lnbm9yZS1yZWFjdC1vbmNsaWNrb3V0c2lkZSc7XG4gIHZhciBERUZBVUxUX0VWRU5UUyA9IFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnXTtcblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBzb21lIERPTSBub2RlIGlzIG91ciBDb21wb25lbnQncyBub2RlLlxuICAgKi9cbiAgdmFyIGlzTm9kZUZvdW5kID0gZnVuY3Rpb24oY3VycmVudCwgY29tcG9uZW50Tm9kZSwgaWdub3JlQ2xhc3MpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gY29tcG9uZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIFNWRyA8dXNlLz4gZWxlbWVudHMgZG8gbm90IHRlY2huaWNhbGx5IHJlc2lkZSBpbiB0aGUgcmVuZGVyZWQgRE9NLCBzb1xuICAgIC8vIHRoZXkgZG8gbm90IGhhdmUgY2xhc3NMaXN0IGRpcmVjdGx5LCBidXQgdGhleSBvZmZlciBhIGxpbmsgdG8gdGhlaXJcbiAgICAvLyBjb3JyZXNwb25kaW5nIGVsZW1lbnQsIHdoaWNoIGNhbiBoYXZlIGNsYXNzTGlzdC4gVGhpcyBleHRyYSBjaGVjayBpcyBmb3JcbiAgICAvLyB0aGF0IGNhc2UuXG4gICAgLy8gU2VlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9zdHJ1Y3QuaHRtbCNJbnRlcmZhY2VTVkdVc2VFbGVtZW50XG4gICAgLy8gRGlzY3Vzc2lvbjogaHR0cHM6Ly9naXRodWIuY29tL1BvbWF4L3JlYWN0LW9uY2xpY2tvdXRzaWRlL3B1bGwvMTdcbiAgICBpZiAoY3VycmVudC5jb3JyZXNwb25kaW5nRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnQuY29ycmVzcG9uZGluZ0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGlnbm9yZUNsYXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGlnbm9yZUNsYXNzKTtcbiAgfTtcblxuICAvKipcbiAgICogVHJ5IHRvIGZpbmQgb3VyIG5vZGUgaW4gYSBoaWVyYXJjaHkgb2Ygbm9kZXMsIHJldHVybmluZyB0aGUgZG9jdW1lbnRcbiAgICogbm9kZSBhcyBoaWdoZXN0IG5vb2RlIGlmIG91ciBub2RlIGlzIG5vdCBmb3VuZCBpbiB0aGUgcGF0aCB1cC5cbiAgICovXG4gIHZhciBmaW5kSGlnaGVzdCA9IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IGNvbXBvbmVudE5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIElmIHNvdXJjZT1sb2NhbCB0aGVuIHRoaXMgZXZlbnQgY2FtZSBmcm9tICdzb21ld2hlcmUnXG4gICAgLy8gaW5zaWRlIGFuZCBzaG91bGQgYmUgaWdub3JlZC4gV2UgY291bGQgaGFuZGxlIHRoaXMgd2l0aFxuICAgIC8vIGEgbGF5ZXJlZCBhcHByb2FjaCwgdG9vLCBidXQgdGhhdCByZXF1aXJlcyBnb2luZyBiYWNrIHRvXG4gICAgLy8gdGhpbmtpbmcgaW4gdGVybXMgb2YgRG9tIG5vZGUgbmVzdGluZywgcnVubmluZyBjb3VudGVyXG4gICAgLy8gdG8gUmVhY3QncyAneW91IHNob3VsZG4ndCBjYXJlIGFib3V0IHRoZSBET00nIHBoaWxvc29waHkuXG4gICAgd2hpbGUoY3VycmVudC5wYXJlbnROb2RlKSB7XG4gICAgICBpZiAoaXNOb2RlRm91bmQoY3VycmVudCwgY29tcG9uZW50Tm9kZSwgaWdub3JlQ2xhc3MpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBicm93c2VyIHNjcm9sbGJhciB3YXMgY2xpY2tlZFxuICAgKi9cbiAgdmFyIGNsaWNrZWRTY3JvbGxiYXIgPSBmdW5jdGlvbihldnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IGV2dC5jbGllbnRYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPD0gZXZ0LmNsaWVudFk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHRoZSBldmVudCBoYW5kbGVyIHRoYXQgY2hlY2tzIHdoZXRoZXIgYSBjbGlja2VkIERPTSBub2RlXG4gICAqIGlzIGluc2lkZSBvZiwgb3IgbGl2ZXMgb3V0c2lkZSBvZiwgb3VyIENvbXBvbmVudCdzIG5vZGUgdHJlZS5cbiAgICovXG4gIHZhciBnZW5lcmF0ZU91dHNpZGVDaGVjayA9IGZ1bmN0aW9uKGNvbXBvbmVudE5vZGUsIGNvbXBvbmVudEluc3RhbmNlLCBldmVudEhhbmRsZXIsIGlnbm9yZUNsYXNzLCBleGNsdWRlU2Nyb2xsYmFyLCBwcmV2ZW50RGVmYXVsdCwgc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgaWYgKHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKHN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICB2YXIgY3VycmVudCA9IGV2dC50YXJnZXQ7XG4gICAgICBpZigoZXhjbHVkZVNjcm9sbGJhciAmJiBjbGlja2VkU2Nyb2xsYmFyKGV2dCkpIHx8IChmaW5kSGlnaGVzdChjdXJyZW50LCBjb21wb25lbnROb2RlLCBpZ25vcmVDbGFzcykgIT09IGRvY3VtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudEhhbmRsZXIoZXZ0KTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyB0aGUgSE9DIGZ1bmN0aW9uIHRoYXQgeW91J2xsIHVzZVxuICAgKiBpbiBvcmRlciB0byBpbXBhcnQgb25PdXRzaWRlQ2xpY2sgbGlzdGVuaW5nIHRvIGFuXG4gICAqIGFyYml0cmFyeSBjb21wb25lbnQuIEl0IGdldHMgY2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlXG4gICAqIGJvb3RzdHJhcHBpbmcgY29kZSB0byB5aWVsZCBhbiBpbnN0YW5jZSBvZiB0aGVcbiAgICogb25DbGlja091dHNpZGVIT0MgZnVuY3Rpb24gZGVmaW5lZCBpbnNpZGUgc2V0dXBIT0MoKS5cbiAgICovXG4gIGZ1bmN0aW9uIHNldHVwSE9DKHJvb3QsIFJlYWN0LCBSZWFjdERPTSwgY3JlYXRlUmVhY3RDbGFzcykge1xuXG4gICAgLy8gVGhlIGFjdHVhbCBDb21wb25lbnQtd3JhcHBpbmcgSE9DOlxuICAgIHJldHVybiBmdW5jdGlvbiBvbkNsaWNrT3V0c2lkZUhPQyhDb21wb25lbnQsIGNvbmZpZykge1xuICAgICAgdmFyIHdyYXBDb21wb25lbnRXaXRoT25DbGlja091dHNpZGVIYW5kbGluZyA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICAgICAgICBzdGF0aWNzOiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQWNjZXNzIHRoZSB3cmFwcGVkIENvbXBvbmVudCdzIGNsYXNzLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGdldENsYXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnQuZ2V0Q2xhc3MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5nZXRDbGFzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFjY2VzcyB0aGUgd3JhcHBlZCBDb21wb25lbnQncyBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldEluc3RhbmNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID8gdGhpcy5yZWZzLmluc3RhbmNlIDogdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvLyB0aGlzIGlzIGdpdmVuIG1lYW5pbmcgaW4gY29tcG9uZW50RGlkTW91bnRcbiAgICAgICAgX19vdXRzaWRlQ2xpY2tIYW5kbGVyOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4Y2x1ZGVTY3JvbGxiYXI6IGNvbmZpZyAmJiBjb25maWcuZXhjbHVkZVNjcm9sbGJhclxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBjbGljayBsaXN0ZW5lcnMgdG8gdGhlIGN1cnJlbnQgZG9jdW1lbnQsXG4gICAgICAgICAqIGxpbmtlZCB0byB0aGlzIGNvbXBvbmVudCdzIHN0YXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIElmIHdlIGFyZSBpbiBhbiBlbnZpcm9ubWVudCB3aXRob3V0IGEgRE9NIHN1Y2hcbiAgICAgICAgICAvLyBhcyBzaGFsbG93IHJlbmRlcmluZyBvciBzbmFwc2hvdHMgdGhlbiB3ZSBleGl0XG4gICAgICAgICAgLy8gZWFybHkgdG8gcHJldmVudCBhbnkgdW5oYW5kbGVkIGVycm9ycyBiZWluZyB0aHJvd24uXG4gICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgICB2YXIgY2xpY2tPdXRzaWRlSGFuZGxlcjtcblxuICAgICAgICAgIGlmKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmhhbmRsZUNsaWNrT3V0c2lkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2xpY2tPdXRzaWRlSGFuZGxlciA9IGNvbmZpZy5oYW5kbGVDbGlja091dHNpZGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgaWYodHlwZW9mIGNsaWNrT3V0c2lkZUhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgbGFja3MgYSBmdW5jdGlvbiBmb3IgcHJvY2Vzc2luZyBvdXRzaWRlIGNsaWNrIGV2ZW50cyBzcGVjaWZpZWQgYnkgdGhlIGhhbmRsZUNsaWNrT3V0c2lkZSBjb25maWcgb3B0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZih0eXBlb2YgaW5zdGFuY2UuaGFuZGxlQ2xpY2tPdXRzaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoUmVhY3QuQ29tcG9uZW50LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGluc3RhbmNlKSkge1xuICAgICAgICAgICAgICBjbGlja091dHNpZGVIYW5kbGVyID0gaW5zdGFuY2UuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlSGFuZGxlciA9IGluc3RhbmNlLmhhbmRsZUNsaWNrT3V0c2lkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYodHlwZW9mIGluc3RhbmNlLnByb3BzLmhhbmRsZUNsaWNrT3V0c2lkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2xpY2tPdXRzaWRlSGFuZGxlciA9IGluc3RhbmNlLnByb3BzLmhhbmRsZUNsaWNrT3V0c2lkZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgbGFja3MgYSBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIGZ1bmN0aW9uIGZvciBwcm9jZXNzaW5nIG91dHNpZGUgY2xpY2sgZXZlbnRzLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjb21wb25lbnROb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoaW5zdGFuY2UpO1xuICAgICAgICAgIGlmIChjb21wb25lbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FudGlwYXR0ZXJuIHdhcm5pbmc6IHRoZXJlIHdhcyBubyBET00gbm9kZSBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbXBvbmVudCB0aGF0IGlzIGJlaW5nIHdyYXBwZWQgYnkgb3V0c2lkZUNsaWNrLicpO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFtcbiAgICAgICAgICAgICAgJ1RoaXMgaXMgdHlwaWNhbGx5IGNhdXNlZCBieSBoYXZpbmcgYSBjb21wb25lbnQgdGhhdCBzdGFydHMgbGlmZSB3aXRoIGEgcmVuZGVyIGZ1bmN0aW9uIHRoYXQnLFxuICAgICAgICAgICAgICAncmV0dXJucyBgbnVsbGAgKGR1ZSB0byBhIHN0YXRlIG9yIHByb3BzIHZhbHVlKSwgc28gdGhhdCB0aGUgY29tcG9uZW50IFxcJ2V4aXN0XFwnIGluIHRoZSBSZWFjdCcsXG4gICAgICAgICAgICAgICdjaGFpbiBvZiBjb21wb25lbnRzLCBidXQgbm90IGluIHRoZSBET00uXFxuXFxuSW5zdGVhZCwgeW91IG5lZWQgdG8gcmVmYWN0b3IgeW91ciBjb2RlIHNvIHRoYXQgdGhlJyxcbiAgICAgICAgICAgICAgJ2RlY2lzaW9uIG9mIHdoZXRoZXIgb3Igbm90IHRvIHNob3cgeW91ciBjb21wb25lbnQgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50LCBpbiB0aGVpciByZW5kZXIoKScsXG4gICAgICAgICAgICAgICdmdW5jdGlvbi5cXG5cXG5JbiBjb2RlLCByYXRoZXIgdGhhbjpcXG5cXG4gIEF7cmVuZGVyKCl7cmV0dXJuIGNoZWNrPyA8Li4uLz4gOiBudWxsO31cXG4gIEJ7cmVuZGVyKCl7PEEgY2hlY2s9Li4uIC8+fVxcblxcbm1ha2Ugc3VyZSB0aGF0IHlvdScsXG4gICAgICAgICAgICAgICd1c2U6XFxuXFxuICBBe3JlbmRlcigpe3JldHVybiA8Li4uLz59XFxuICBCe3JlbmRlcigpe3JldHVybiA8Li4uPnsgY2hlY2sgPyA8QS8+IDogbnVsbCB9PC4uLj59fVxcblxcblRoYXQgaXM6JyxcbiAgICAgICAgICAgICAgJ3RoZSBwYXJlbnQgaXMgYWx3YXlzIHJlc3BvbnNpYmxlIGZvciBkZWNpZGluZyB3aGV0aGVyIG9yIG5vdCB0byByZW5kZXIgYW55IG9mIGl0cyBjaGlsZHJlbi4nLFxuICAgICAgICAgICAgICAnSXQgaXMgbm90IHRoZSBjaGlsZFxcJ3MgcmVzcG9uc2liaWxpdHkgdG8gZGVjaWRlIHdoZXRoZXIgYSByZW5kZXIgaW5zdHJ1Y3Rpb24gZnJvbSBhYm92ZSBzaG91bGQnLFxuICAgICAgICAgICAgICAnZ2V0IGlnbm9yZWQgb3Igbm90IGJ5IHJldHVybmluZyBgbnVsbGAuXFxuXFxuV2hlbiBhbnkgY29tcG9uZW50IGdldHMgaXRzIHJlbmRlcigpIGZ1bmN0aW9uIGNhbGxlZCwnLFxuICAgICAgICAgICAgICAndGhhdCBpcyB0aGUgc2lnbmFsIHRoYXQgaXQgc2hvdWxkIGJlIHJlbmRlcmluZyBpdHMgcGFydCBvZiB0aGUgVUkuIEl0IG1heSBpbiB0dXJuIGRlY2lkZSBub3QgdG8nLFxuICAgICAgICAgICAgICAncmVuZGVyIGFsbCBvZiAqaXRzKiBjaGlsZHJlbiwgYnV0IGl0IHNob3VsZCBuZXZlciByZXR1cm4gYG51bGxgIGZvciBpdHNlbGYuIEl0IGlzIG5vdCByZXNwb25zaWJsZScsXG4gICAgICAgICAgICAgICdmb3IgdGhhdCBkZWNpc2lvbi4nXG4gICAgICAgICAgICBdLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGZuID0gdGhpcy5fX291dHNpZGVDbGlja0hhbmRsZXIgPSBnZW5lcmF0ZU91dHNpZGVDaGVjayhcbiAgICAgICAgICAgIGNvbXBvbmVudE5vZGUsXG4gICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgIGNsaWNrT3V0c2lkZUhhbmRsZXIsXG4gICAgICAgICAgICB0aGlzLnByb3BzLm91dHNpZGVDbGlja0lnbm9yZUNsYXNzIHx8IElHTk9SRV9DTEFTUyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZXhjbHVkZVNjcm9sbGJhciwgLy8gZmFsbGJhY2sgbm90IG5lZWRlZCwgcHJvcCBhbHdheXMgZXhpc3RzIGJlY2F1c2Ugb2YgZ2V0RGVmYXVsdFByb3BzXG4gICAgICAgICAgICB0aGlzLnByb3BzLnByZXZlbnREZWZhdWx0IHx8IGZhbHNlLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9wUHJvcGFnYXRpb24gfHwgZmFsc2VcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdmFyIHBvcyA9IHJlZ2lzdGVyZWRDb21wb25lbnRzLmxlbmd0aDtcbiAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5wdXNoKHRoaXMpO1xuICAgICAgICAgIGhhbmRsZXJzW3Bvc10gPSBmbjtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgdHJ1dGh5IGRpc2FibGVPbkNsaWNrT3V0c2lkZSBwcm9wZXJ0eSBmb3IgdGhpc1xuICAgICAgICAgIC8vIGNvbXBvbmVudCwgZG9uJ3QgaW1tZWRpYXRlbHkgc3RhcnQgbGlzdGVuaW5nIGZvciBvdXRzaWRlIGV2ZW50cy5cbiAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIFRyYWNrIGZvciBkaXNhYmxlT25DbGlja091dHNpZGUgcHJvcHMgY2hhbmdlcyBhbmQgZW5hYmxlL2Rpc2FibGUgY2xpY2sgb3V0c2lkZVxuICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXh0UHJvcHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUgJiYgIW5leHRQcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlT25DbGlja091dHNpZGUoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSAmJiBuZXh0UHJvcHMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBkb2N1bWVudCdzIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICAgICAgdGhpcy5fX291dHNpZGVDbGlja0hhbmRsZXIgPSBmYWxzZTtcbiAgICAgICAgICB2YXIgcG9zID0gcmVnaXN0ZXJlZENvbXBvbmVudHMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICBpZiggcG9zPi0xKSB7XG4gICAgICAgICAgICAvLyBjbGVhbiB1cCBzbyB3ZSBkb24ndCBsZWFrIG1lbW9yeVxuICAgICAgICAgICAgaWYgKGhhbmRsZXJzW3Bvc10pIHsgaGFuZGxlcnMuc3BsaWNlKHBvcywgMSk7IH1cbiAgICAgICAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzLnNwbGljZShwb3MsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FuIGJlIGNhbGxlZCB0byBleHBsaWNpdGx5IGVuYWJsZSBldmVudCBsaXN0ZW5pbmdcbiAgICAgICAgICogZm9yIGNsaWNrcyBhbmQgdG91Y2hlcyBvdXRzaWRlIG9mIHRoaXMgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGVuYWJsZU9uQ2xpY2tPdXRzaWRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZm4gPSB0aGlzLl9fb3V0c2lkZUNsaWNrSGFuZGxlcjtcbiAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMucHJvcHMuZXZlbnRUeXBlcyB8fCBERUZBVUxUX0VWRU5UUztcbiAgICAgICAgICAgIGlmICghZXZlbnRzLmZvckVhY2gpIHtcbiAgICAgICAgICAgICAgZXZlbnRzID0gW2V2ZW50c107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbiBiZSBjYWxsZWQgdG8gZXhwbGljaXRseSBkaXNhYmxlIGV2ZW50IGxpc3RlbmluZ1xuICAgICAgICAgKiBmb3IgY2xpY2tzIGFuZCB0b3VjaGVzIG91dHNpZGUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZU9uQ2xpY2tPdXRzaWRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZm4gPSB0aGlzLl9fb3V0c2lkZUNsaWNrSGFuZGxlcjtcbiAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMucHJvcHMuZXZlbnRUeXBlcyB8fCBERUZBVUxUX0VWRU5UUztcbiAgICAgICAgICAgIGlmICghZXZlbnRzLmZvckVhY2gpIHtcbiAgICAgICAgICAgICAgZXZlbnRzID0gW2V2ZW50c107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhc3MtdGhyb3VnaCByZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHBhc3NlZFByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2V4Y2x1ZGVTY3JvbGxiYXInKSB7XG4gICAgICAgICAgICAgIHByb3BzW2tleV0gPSBwYXNzZWRQcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHByb3BzLnJlZiA9ICdpbnN0YW5jZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHByb3BzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSA9IHRoaXMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgICAgIHByb3BzLmVuYWJsZU9uQ2xpY2tPdXRzaWRlID0gdGhpcy5lbmFibGVPbkNsaWNrT3V0c2lkZTtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBkaXNwbGF5IG5hbWUgZm9yIFJlYWN0IGRldnRvb2xzXG4gICAgICAoZnVuY3Rpb24gYmluZFdyYXBwZWRDb21wb25lbnROYW1lKGMsIHdyYXBwZXIpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjLmRpc3BsYXlOYW1lIHx8IGMubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICAgICAgd3JhcHBlci5kaXNwbGF5TmFtZSA9ICdPbkNsaWNrT3V0c2lkZSgnICsgY29tcG9uZW50TmFtZSArICcpJztcbiAgICAgIH0oQ29tcG9uZW50LCB3cmFwQ29tcG9uZW50V2l0aE9uQ2xpY2tPdXRzaWRlSGFuZGxpbmcpKTtcblxuICAgICAgcmV0dXJuIHdyYXBDb21wb25lbnRXaXRoT25DbGlja091dHNpZGVIYW5kbGluZztcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc2V0cyB1cCB0aGUgbGlicmFyeSBpbiB3YXlzIHRoYXRcbiAgICogd29yayB3aXRoIHRoZSB2YXJpb3VzIG1vZHVsZGUgbG9hZGluZyBzb2x1dGlvbnNcbiAgICogdXNlZCBpbiBKYXZhU2NyaXB0IGxhbmQgdG9kYXkuXG4gICAqL1xuICBmdW5jdGlvbiBzZXR1cEJpbmRpbmcocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgIGRlZmluZShbJ3JlYWN0JywncmVhY3QtZG9tJywnY3JlYXRlLXJlYWN0LWNsYXNzJ10sIGZ1bmN0aW9uKFJlYWN0LCBSZWFjdERvbSwgY3JlYXRlUmVhY3RDbGFzcykge1xuICAgICAgICBpZiAoIWNyZWF0ZVJlYWN0Q2xhc3MpIGNyZWF0ZVJlYWN0Q2xhc3MgPSBSZWFjdC5jcmVhdGVDbGFzcztcbiAgICAgICAgcmV0dXJuIGZhY3Rvcnkocm9vdCwgUmVhY3QsIFJlYWN0RG9tLCBjcmVhdGVSZWFjdENsYXNzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBOb2RlLiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0XG4gICAgICAvLyBDb21tb25KUywgYnV0IG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHNcbiAgICAgIC8vIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0c1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpLCByZXF1aXJlKCdjcmVhdGUtcmVhY3QtY2xhc3MnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICB2YXIgY3JlYXRlUmVhY3RDbGFzcyA9IFJlYWN0LmNyZWF0ZUNsYXNzID8gUmVhY3QuY3JlYXRlQ2xhc3MgOiB3aW5kb3cuY3JlYXRlUmVhY3RDbGFzcztcbiAgICAgIHJvb3Qub25DbGlja091dHNpZGUgPSBmYWN0b3J5KHJvb3QsIFJlYWN0LCBSZWFjdERPTSwgY3JlYXRlUmVhY3RDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWFrZSBpdCBhbGwgaGFwcGVuXG4gIHNldHVwQmluZGluZyhyb290LCBzZXR1cEhPQyk7XG5cbn0odGhpcykpO1xuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gIGNhbGVuZGFyQ29udGFpbmVyOiAnY2FsZW5kYXJDb250YWluZXInLFxuICBoZWFkaW5nOiAnaGVhZGluZycsXG4gIHByZXY6ICdwcmV2JyxcbiAgbmV4dDogJ25leHQnLFxuICB0aXRsZTogJ3RpdGxlJyxcbiAgZGF5V3JhcHBlcjogJ2RheVdyYXBwZXInLFxuICBjdXJyZW50TW9udGg6ICdjdXJyZW50TW9udGgnLFxuICBkYXlzT2ZXZWVrOiAnZGF5c09mV2VlaycsXG4gIG1vbnRoc0xpc3Q6ICdtb250aHNMaXN0JyxcbiAgc2VsZWN0ZWQ6ICdzZWxlY3RlZCcsXG4gIGRheVBpY2tlckNvbnRhaW5lcjogJ2RheVBpY2tlckNvbnRhaW5lcidcbn07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vVGltZVBpY2tlcic7XG5pbXBvcnQgeyBvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzcyB9IGZyb20gJy4vRGF0ZVBpY2tlcic7XG5pbXBvcnQgeyBwZXJzaWFuTnVtYmVyIH0gZnJvbSAnLi4vdXRpbHMvcGVyc2lhbic7XG5cbmNvbnN0IGRpc2FibGVkTWludXRlcyA9ICgpID0+IHtcbiAgcmV0dXJuIFsuLi5BcnJheSg2MCldLm1hcCgodiwgaSkgPT4gaSkuZmlsdGVyKHYgPT4gdiAlIDUgIT09IDApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlUaW1lUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb21lbnRWYWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzZXRNb21lbnRWYWx1ZTogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbiAgICBjb25zdCB7IG1vbWVudFZhbHVlLCBtaW4gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG5ld1ZhbHVlO1xuXG4gICAgaWYgKG1vbWVudFZhbHVlKSB7XG4gICAgICBuZXdWYWx1ZSA9IG1vbWVudFZhbHVlLmNsb25lKCk7XG4gICAgfSBlbHNlIGlmIChtaW4gJiYgbWluLmlzQWZ0ZXIobW9tZW50KCkpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG1pbi5jbG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZSA9IG1vbWVudCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgbmV3VmFsdWUuaG91cih2YWx1ZS5ob3VyKCkpO1xuICAgIG5ld1ZhbHVlLm1pbnV0ZSh2YWx1ZS5taW51dGUoKSk7XG5cbiAgICB0aGlzLnByb3BzLnNldE1vbWVudFZhbHVlKG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vbWVudFZhbHVlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGltZUxhYmVsPSd0aW1lOic7XG5cbiAgICByZXR1cm4gbW9tZW50VmFsdWUgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHRpbWUtcGlja2VyLWNvbnRhaW5lcmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZS1sYWJlbCc+e3RpbWVMYWJlbH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWUtcGlja2VyLXBhbmVsJz5cbiAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgc2hvd0FNUE1cbiAgICAgICAgICAgIHNob3dTZWNvbmQ9e2ZhbHNlfVxuICAgICAgICAgICAgYWxsb3dFbXB0eT17ZmFsc2V9XG4gICAgICAgICAgICB2YWx1ZT17bW9tZW50VmFsdWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e291dHNpZGVDbGlja0lnbm9yZUNsYXNzfVxuICAgICAgICAgICAgcG9wdXBDbGFzc05hbWU9e291dHNpZGVDbGlja0lnbm9yZUNsYXNzfVxuICAgICAgICAgICAgcGFuZWxDbGFzc05hbWU9e2Ake291dHNpZGVDbGlja0lnbm9yZUNsYXNzfSB0aW1lLXBpY2tlci1wYW5lbGB9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIGRpc2FibGVkTWludXRlcz17ZGlzYWJsZWRNaW51dGVzfVxuICAgICAgICAgICAgZm9ybWF0dGVyPXt2YWx1ZSA9PiBwZXJzaWFuTnVtYmVyKHZhbHVlKX1cbiAgICAgICAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnNcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSA6IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vVGltZVBpY2tlcic7XG5leHBvcnQgZGVmYXVsdCBUaW1lUGlja2VyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xuaW1wb3J0IFBhbmVsIGZyb20gJy4vUGFuZWwnO1xuaW1wb3J0IHBsYWNlbWVudHMgZnJvbSAnLi9wbGFjZW1lbnRzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gXCJjcmVhdGUtcmVhY3QtY2xhc3NcIjtcblxuZnVuY3Rpb24gbm9vcCgpIHtcbn1cblxuZnVuY3Rpb24gcmVmRm4oZmllbGQsIGNvbXBvbmVudCkge1xuICB0aGlzW2ZpZWxkXSA9IGNvbXBvbmVudDtcbn1cblxuY29uc3QgUGlja2VyID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGVhclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGVmYXVsdE9wZW5WYWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWxsb3dFbXB0eTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93SG91cjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3dTZWNvbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkSG91cnM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkTWludXRlczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWRTZWNvbmRzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoaWRlRGlzYWJsZWRPcHRpb25zOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93QU1QTTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFuZWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZWFyVGV4dDogJ2NsZWFyJyxcbiAgICAgIHByZWZpeENsczogJ3JjLXRpbWUtcGlja2VyJyxcbiAgICAgIGRlZmF1bHRPcGVuOiBmYWxzZSxcbiAgICAgIHN0eWxlOiB7fSxcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICBhbGlnbjoge30sXG4gICAgICBkZWZhdWx0T3BlblZhbHVlOiBtb21lbnQoKSxcbiAgICAgIGFsbG93RW1wdHk6IHRydWUsXG4gICAgICBzaG93SG91cjogdHJ1ZSxcbiAgICAgIHNob3dTZWNvbmQ6IHRydWUsXG4gICAgICBkaXNhYmxlZEhvdXJzOiBub29wLFxuICAgICAgZGlzYWJsZWRNaW51dGVzOiBub29wLFxuICAgICAgZGlzYWJsZWRTZWNvbmRzOiBub29wLFxuICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogZmFsc2UsXG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b21MZWZ0JyxcbiAgICAgIG9uQ2hhbmdlOiBub29wLFxuICAgICAgb25PcGVuOiBub29wLFxuICAgICAgb25DbG9zZTogbm9vcCxcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB0aGlzLnNhdmVQYW5lbFJlZiA9IHJlZkZuLmJpbmQodGhpcywgJ3BhbmVsSW5zdGFuY2UnKTtcbiAgICBjb25zdCB7IGRlZmF1bHRPcGVuLCBkZWZhdWx0VmFsdWUsIG9wZW4gPSBkZWZhdWx0T3BlbiwgdmFsdWUgPSBkZWZhdWx0VmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW4sXG4gICAgICB2YWx1ZSxcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgb3BlbiB9ID0gbmV4dFByb3BzO1xuICAgIGlmICgndmFsdWUnIGluIG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChvcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuIH0pO1xuICAgIH1cbiAgfSxcblxuICBvblBhbmVsQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgb25QYW5lbENsZWFyKCkge1xuICAgIHRoaXMuc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5zZXRPcGVuKGZhbHNlKTtcbiAgfSxcblxuICBvblZpc2libGVDaGFuZ2Uob3Blbikge1xuICAgIHRoaXMuc2V0T3BlbihvcGVuKTtcbiAgfSxcblxuICBvbkVzYygpIHtcbiAgICB0aGlzLnNldE9wZW4oZmFsc2UpO1xuICAgIHRoaXMucmVmcy5waWNrZXIuZm9jdXMoKTtcbiAgfSxcblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICB0aGlzLnNldE9wZW4odHJ1ZSk7XG4gICAgfVxuICB9LFxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKCEoJ3ZhbHVlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICB9LFxuXG4gIGdldEZvcm1hdCgpIHtcbiAgICBsZXQgZm9ybWF0ID0gdGhpcy5wcm9wcy5mb3JtYXQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5mb3JtYXQpIHtcbiAgICAgIGZvcm1hdCA9IHRoaXMucHJvcHMuZm9ybWF0XG4gICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5zaG93U2Vjb25kKSB7XG4gICAgICBmb3JtYXQgPSAnSEg6bW0nO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuc2hvd0hvdXIpIHtcbiAgICAgIGZvcm1hdCA9ICdtbTpzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdCA9ICdISDptbTpzcyc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuc2hvd0FNUE0pIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoJ0hIJywgJ2hoJykgKyAnIEEnO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXQ7XG4gIH0sXG5cbiAgZ2V0UGFuZWxFbGVtZW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZWZpeENscywgcGxhY2Vob2xkZXIsIGRpc2FibGVkSG91cnMsXG4gICAgICBkaXNhYmxlZE1pbnV0ZXMsIGRpc2FibGVkU2Vjb25kcywgaGlkZURpc2FibGVkT3B0aW9ucyxcbiAgICAgIGFsbG93RW1wdHksIHNob3dIb3VyLCBzaG93U2Vjb25kLCBzaG93QU1QTSwgZGVmYXVsdE9wZW5WYWx1ZSwgY2xlYXJUZXh0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lbFxuICAgICAgICBjbGVhclRleHQ9e2NsZWFyVGV4dH1cbiAgICAgICAgcHJlZml4Q2xzPXtgJHtwcmVmaXhDbHN9LXBhbmVsYH1cbiAgICAgICAgcmVmPXt0aGlzLnNhdmVQYW5lbFJlZn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUGFuZWxDaGFuZ2V9XG4gICAgICAgIG9uQ2xlYXI9e3RoaXMub25QYW5lbENsZWFyfVxuICAgICAgICBkZWZhdWx0T3BlblZhbHVlPXtkZWZhdWx0T3BlblZhbHVlfVxuICAgICAgICBzaG93SG91cj17c2hvd0hvdXJ9XG4gICAgICAgIG9uRXNjPXt0aGlzLm9uRXNjfVxuICAgICAgICBzaG93U2Vjb25kPXtzaG93U2Vjb25kfVxuICAgICAgICBzaG93QU1QTT17c2hvd0FNUE19XG4gICAgICAgIGFsbG93RW1wdHk9e2FsbG93RW1wdHl9XG4gICAgICAgIGZvcm1hdD17dGhpcy5nZXRGb3JtYXQoKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBkaXNhYmxlZEhvdXJzPXtkaXNhYmxlZEhvdXJzfVxuICAgICAgICBkaXNhYmxlZE1pbnV0ZXM9e2Rpc2FibGVkTWludXRlc31cbiAgICAgICAgZGlzYWJsZWRTZWNvbmRzPXtkaXNhYmxlZFNlY29uZHN9XG4gICAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM9e2hpZGVEaXNhYmxlZE9wdGlvbnN9XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG5cbiAgc2V0T3BlbihvcGVuLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHsgb25PcGVuLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4gIT09IG9wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuLFxuICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICAgIG9wZW4sXG4gICAgICB9O1xuICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgb25PcGVuKGV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2xvc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFuZWxDbGFzc05hbWUscHJlZml4Q2xzLCBwbGFjZWhvbGRlciwgcGxhY2VtZW50LCBhbGlnbixcbiAgICAgIGRpc2FibGVkLCB0cmFuc2l0aW9uTmFtZSwgc3R5bGUsIGNsYXNzTmFtZSwgc2hvd0hvdXIsXG4gICAgICBzaG93U2Vjb25kLCBnZXRQb3B1cENvbnRhaW5lcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG9wZW4sIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBwb3B1cENsYXNzTmFtZTtcbiAgICBpZiAoIXNob3dIb3VyIHx8ICFzaG93U2Vjb25kKSB7XG4gICAgICBwb3B1cENsYXNzTmFtZSA9IGAke3ByZWZpeENsc30tcGFuZWwtbmFycm93YDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmlnZ2VyXG4gICAgICAgIHByZWZpeENscz17YCR7cHJlZml4Q2xzfS1wYW5lbCAgJHtwYW5lbENsYXNzTmFtZX1gfVxuICAgICAgICBwb3B1cENsYXNzTmFtZT17cG9wdXBDbGFzc05hbWV9XG4gICAgICAgIHBvcHVwPXt0aGlzLmdldFBhbmVsRWxlbWVudCgpfVxuICAgICAgICBwb3B1cEFsaWduPXthbGlnbn1cbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHM9e3BsYWNlbWVudHN9XG4gICAgICAgIHBvcHVwUGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgICAgIGFjdGlvbj17ZGlzYWJsZWQgPyBbXSA6IFsnY2xpY2snXX1cbiAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlXG4gICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lcn1cbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZT17dHJhbnNpdGlvbk5hbWV9XG4gICAgICAgIHBvcHVwVmlzaWJsZT17b3Blbn1cbiAgICAgICAgb25Qb3B1cFZpc2libGVDaGFuZ2U9e3RoaXMub25WaXNpYmxlQ2hhbmdlfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30gJHtjbGFzc05hbWV9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1pbnB1dGB9XG4gICAgICAgICAgICByZWY9XCJwaWNrZXJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfSB2YWx1ZT17dmFsdWUgJiYgdmFsdWUuZm9ybWF0KHRoaXMuZ2V0Rm9ybWF0KCkpIHx8ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWljb25gfS8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVHJpZ2dlcj5cbiAgICApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBpY2tlcjtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAncmMtdXRpbC9lcy9Eb20vY29udGFpbnMnO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSAncmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IHsgZ2V0QWxpZ25Gcm9tUGxhY2VtZW50LCBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiBhcyBfZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBnZXRDb250YWluZXJSZW5kZXJNaXhpbiBmcm9tICdyYy11dGlsL2xpYi9nZXRDb250YWluZXJSZW5kZXJNaXhpbic7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiByZXR1cm5FbXB0eVN0cmluZygpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Eb2N1bWVudCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudDtcbn1cblxudmFyIGlzTW9iaWxlID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfGlPU3xVQ1dFQikvaSk7XG5cbnZhciBBTExfSEFORExFUlMgPSBbJ29uQ2xpY2snLCAnb25Nb3VzZURvd24nLCAnb25Ub3VjaFN0YXJ0JywgJ29uTW91c2VFbnRlcicsICdvbk1vdXNlTGVhdmUnLCAnb25Gb2N1cycsICdvbkJsdXInXTtcblxudmFyIFRyaWdnZXIgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUcmlnZ2VyJyxcbiAgcHJvcFR5cGVzOiB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgYWN0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKV0pLFxuICAgIHNob3dBY3Rpb246IFByb3BUeXBlcy5hbnksXG4gICAgaGlkZUFjdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjogUHJvcFR5cGVzLmFueSxcbiAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvcHVwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICAgIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBvcHVwUGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwb3B1cEFuaW1hdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgICBtb3VzZUVudGVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbW91c2VMZWF2ZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBmb2N1c0RlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGJsdXJEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZ2V0RG9jdW1lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWFzazogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblBvcHVwQWxpZ246IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvcHVwQWxpZ246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcG9wdXBWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtYXNrVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBtYXNrQW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgbWl4aW5zOiBbZ2V0Q29udGFpbmVyUmVuZGVyTWl4aW4oe1xuICAgIGF1dG9Nb3VudDogZmFsc2UsXG5cbiAgICBpc1Zpc2libGU6IGZ1bmN0aW9uIGlzVmlzaWJsZShpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnN0YXRlLnBvcHVwVmlzaWJsZTtcbiAgICB9LFxuICAgIGdldENvbnRhaW5lcjogZnVuY3Rpb24gZ2V0Q29udGFpbmVyKGluc3RhbmNlKSB7XG4gICAgICB2YXIgcHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcblxuICAgICAgdmFyIHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS50b3AgPSAnMCc7XG4gICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICB2YXIgbW91bnROb2RlID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIgPyBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcihmaW5kRE9NTm9kZShpbnN0YW5jZSkpIDogcHJvcHMuZ2V0RG9jdW1lbnQoKS5ib2R5O1xuICAgICAgbW91bnROb2RlLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcbiAgICAgIHJldHVybiBwb3B1cENvbnRhaW5lcjtcbiAgICB9XG4gIH0pXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4Q2xzOiAncmMtdHJpZ2dlci1wb3B1cCcsXG4gICAgICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjogcmV0dXJuRW1wdHlTdHJpbmcsXG4gICAgICBnZXREb2N1bWVudDogcmV0dXJuRG9jdW1lbnQsXG4gICAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICAgIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgICAgb25Qb3B1cEFsaWduOiBub29wLFxuICAgICAgcG9wdXBDbGFzc05hbWU6ICcnLFxuICAgICAgbW91c2VFbnRlckRlbGF5OiAwLFxuICAgICAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gICAgICBmb2N1c0RlbGF5OiAwLFxuICAgICAgYmx1ckRlbGF5OiAwLjE1LFxuICAgICAgcG9wdXBTdHlsZToge30sXG4gICAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGZhbHNlLFxuICAgICAgcG9wdXBBbGlnbjoge30sXG4gICAgICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBmYWxzZSxcbiAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgICAgYWN0aW9uOiBbXSxcbiAgICAgIHNob3dBY3Rpb246IFtdLFxuICAgICAgaGlkZUFjdGlvbjogW11cbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwb3B1cFZpc2libGUgPSB2b2lkIDA7XG4gICAgaWYgKCdwb3B1cFZpc2libGUnIGluIHByb3BzKSB7XG4gICAgICBwb3B1cFZpc2libGUgPSAhIXByb3BzLnBvcHVwVmlzaWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5kZWZhdWx0UG9wdXBWaXNpYmxlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGVcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgQUxMX0hBTkRMRVJTLmZvckVhY2goZnVuY3Rpb24gKGgpIHtcbiAgICAgIF90aGlzWydmaXJlJyArIGhdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cyhoLCBlKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSh7fSwge1xuICAgICAgcG9wdXBWaXNpYmxlOiB0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZVxuICAgIH0pO1xuICB9LFxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKF9yZWYpIHtcbiAgICB2YXIgcG9wdXBWaXNpYmxlID0gX3JlZi5wb3B1cFZpc2libGU7XG5cbiAgICBpZiAocG9wdXBWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShfLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5yZW5kZXJDb21wb25lbnQobnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByZXZTdGF0ZS5wb3B1cFZpc2libGUgIT09IHN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgICBwcm9wcy5hZnRlclBvcHVwVmlzaWJsZUNoYW5nZShzdGF0ZS5wb3B1cFZpc2libGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgIHZhciBjdXJyZW50RG9jdW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoIXRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciAmJiB0aGlzLmlzQ2xpY2tUb0hpZGUoKSkge1xuICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBwcm9wcy5nZXREb2N1bWVudCgpO1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ21vdXNlZG93bicsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyICYmIGlzTW9iaWxlKSB7XG4gICAgICAgIGN1cnJlbnREb2N1bWVudCA9IGN1cnJlbnREb2N1bWVudCB8fCBwcm9wcy5nZXREb2N1bWVudCgpO1xuICAgICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2xlYXJPdXRzaWRlSGFuZGxlcigpO1xuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgfSxcbiAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoZSkge1xuICAgIHRoaXMuZmlyZUV2ZW50cygnb25Nb3VzZUVudGVyJywgZSk7XG4gICAgdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCB0aGlzLnByb3BzLm1vdXNlRW50ZXJEZWxheSk7XG4gIH0sXG4gIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKGUpIHtcbiAgICB0aGlzLmZpcmVFdmVudHMoJ29uTW91c2VMZWF2ZScsIGUpO1xuICAgIHRoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIHRoaXMucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgfSxcbiAgb25Qb3B1cE1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uUG9wdXBNb3VzZUVudGVyKCkge1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gIH0sXG4gIG9uUG9wdXBNb3VzZUxlYXZlOiBmdW5jdGlvbiBvblBvcHVwTW91c2VMZWF2ZShlKSB7XG4gICAgICAgICAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ICYmICFlLnJlbGF0ZWRUYXJnZXQuc2V0VGltZW91dCAmJiB0aGlzLl9jb21wb25lbnQgJiYgdGhpcy5fY29tcG9uZW50LmdldFBvcHVwRG9tTm9kZSAmJiBjb250YWlucyh0aGlzLl9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKCksIGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZShmYWxzZSwgdGhpcy5wcm9wcy5tb3VzZUxlYXZlRGVsYXkpO1xuICB9LFxuICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcbiAgICB0aGlzLmZpcmVFdmVudHMoJ29uRm9jdXMnLCBlKTtcbiAgICAgICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAodGhpcy5pc0ZvY3VzVG9TaG93KCkpIHtcbiAgICAgIHRoaXMuZm9jdXNUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUodHJ1ZSwgdGhpcy5wcm9wcy5mb2N1c0RlbGF5KTtcbiAgICB9XG4gIH0sXG4gIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlRG93bicsIGUpO1xuICAgIHRoaXMucHJlQ2xpY2tUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSxcbiAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgIHRoaXMuZmlyZUV2ZW50cygnb25Ub3VjaFN0YXJ0JywgZSk7XG4gICAgdGhpcy5wcmVUb3VjaFRpbWUgPSBEYXRlLm5vdygpO1xuICB9LFxuICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgdGhpcy5maXJlRXZlbnRzKCdvbkJsdXInLCBlKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIGlmICh0aGlzLmlzQmx1clRvSGlkZSgpKSB7XG4gICAgICB0aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCB0aGlzLnByb3BzLmJsdXJEZWxheSk7XG4gICAgfVxuICB9LFxuICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5maXJlRXZlbnRzKCdvbkNsaWNrJywgZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5mb2N1c1RpbWUpIHtcbiAgICAgIHZhciBwcmVUaW1lID0gdm9pZCAwO1xuICAgICAgaWYgKHRoaXMucHJlQ2xpY2tUaW1lICYmIHRoaXMucHJlVG91Y2hUaW1lKSB7XG4gICAgICAgIHByZVRpbWUgPSBNYXRoLm1pbih0aGlzLnByZUNsaWNrVGltZSwgdGhpcy5wcmVUb3VjaFRpbWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByZUNsaWNrVGltZSkge1xuICAgICAgICBwcmVUaW1lID0gdGhpcy5wcmVDbGlja1RpbWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJlVG91Y2hUaW1lKSB7XG4gICAgICAgIHByZVRpbWUgPSB0aGlzLnByZVRvdWNoVGltZTtcbiAgICAgIH1cbiAgICAgIGlmIChNYXRoLmFicyhwcmVUaW1lIC0gdGhpcy5mb2N1c1RpbWUpIDwgMjApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5mb2N1c1RpbWUgPSAwO1xuICAgIH1cbiAgICB0aGlzLnByZUNsaWNrVGltZSA9IDA7XG4gICAgdGhpcy5wcmVUb3VjaFRpbWUgPSAwO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG5leHRWaXNpYmxlID0gIXRoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuICAgIGlmICh0aGlzLmlzQ2xpY2tUb0hpZGUoKSAmJiAhbmV4dFZpc2libGUgfHwgbmV4dFZpc2libGUgJiYgdGhpcy5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgIHRoaXMuc2V0UG9wdXBWaXNpYmxlKCF0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSk7XG4gICAgfVxuICB9LFxuICBvbkRvY3VtZW50Q2xpY2s6IGZ1bmN0aW9uIG9uRG9jdW1lbnRDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hc2sgJiYgIXRoaXMucHJvcHMubWFza0Nsb3NhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIHJvb3QgPSBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgcG9wdXBOb2RlID0gdGhpcy5nZXRQb3B1cERvbU5vZGUoKTtcbiAgICBpZiAoIWNvbnRhaW5zKHJvb3QsIHRhcmdldCkgJiYgIWNvbnRhaW5zKHBvcHVwTm9kZSwgdGFyZ2V0KSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfSxcbiAgZ2V0UG9wdXBEb21Ob2RlOiBmdW5jdGlvbiBnZXRQb3B1cERvbU5vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb21wb25lbnQgJiYgdGhpcy5fY29tcG9uZW50LmdldFBvcHVwRG9tTm9kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudC5nZXRQb3B1cERvbU5vZGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGdldFJvb3REb21Ob2RlOiBmdW5jdGlvbiBnZXRSb290RG9tTm9kZSgpIHtcbiAgICByZXR1cm4gZmluZERPTU5vZGUodGhpcyk7XG4gIH0sXG4gIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduOiBmdW5jdGlvbiBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbihhbGlnbikge1xuICAgIHZhciBjbGFzc05hbWUgPSBbXTtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwb3B1cFBsYWNlbWVudCA9IHByb3BzLnBvcHVwUGxhY2VtZW50LFxuICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHM7XG5cbiAgICBpZiAocG9wdXBQbGFjZW1lbnQgJiYgYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICAgIGNsYXNzTmFtZS5wdXNoKF9nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbihidWlsdGluUGxhY2VtZW50cywgcHJlZml4Q2xzLCBhbGlnbikpO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24pIHtcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHByb3BzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKGFsaWduKSk7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc05hbWUuam9pbignICcpO1xuICB9LFxuICBnZXRQb3B1cEFsaWduOiBmdW5jdGlvbiBnZXRQb3B1cEFsaWduKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHBvcHVwUGxhY2VtZW50ID0gcHJvcHMucG9wdXBQbGFjZW1lbnQsXG4gICAgICAgIHBvcHVwQWxpZ24gPSBwcm9wcy5wb3B1cEFsaWduLFxuICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzO1xuXG4gICAgaWYgKHBvcHVwUGxhY2VtZW50ICYmIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgICByZXR1cm4gZ2V0QWxpZ25Gcm9tUGxhY2VtZW50KGJ1aWx0aW5QbGFjZW1lbnRzLCBwb3B1cFBsYWNlbWVudCwgcG9wdXBBbGlnbik7XG4gICAgfVxuICAgIHJldHVybiBwb3B1cEFsaWduO1xuICB9LFxuICBnZXRDb21wb25lbnQ6IGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICB2YXIgbW91c2VQcm9wcyA9IHt9O1xuICAgIGlmICh0aGlzLmlzTW91c2VFbnRlclRvU2hvdygpKSB7XG4gICAgICBtb3VzZVByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMub25Qb3B1cE1vdXNlRW50ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTW91c2VMZWF2ZVRvSGlkZSgpKSB7XG4gICAgICBtb3VzZVByb3BzLm9uTW91c2VMZWF2ZSA9IHRoaXMub25Qb3B1cE1vdXNlTGVhdmU7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgUG9wdXAsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIHByZWZpeENsczogcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGU6IHByb3BzLmRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgICAgdmlzaWJsZTogc3RhdGUucG9wdXBWaXNpYmxlLFxuICAgICAgICBjbGFzc05hbWU6IHByb3BzLnBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICBhY3Rpb246IHByb3BzLmFjdGlvbixcbiAgICAgICAgYWxpZ246IHRoaXMuZ2V0UG9wdXBBbGlnbigpLFxuICAgICAgICBvbkFsaWduOiBwcm9wcy5vblBvcHVwQWxpZ24sXG4gICAgICAgIGFuaW1hdGlvbjogcHJvcHMucG9wdXBBbmltYXRpb24sXG4gICAgICAgIGdldENsYXNzTmFtZUZyb21BbGlnbjogdGhpcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnblxuICAgICAgfSwgbW91c2VQcm9wcywge1xuICAgICAgICBnZXRSb290RG9tTm9kZTogdGhpcy5nZXRSb290RG9tTm9kZSxcbiAgICAgICAgc3R5bGU6IHByb3BzLnBvcHVwU3R5bGUsXG4gICAgICAgIG1hc2s6IHByb3BzLm1hc2ssXG4gICAgICAgIHpJbmRleDogcHJvcHMuekluZGV4LFxuICAgICAgICB0cmFuc2l0aW9uTmFtZTogcHJvcHMucG9wdXBUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgbWFza0FuaW1hdGlvbjogcHJvcHMubWFza0FuaW1hdGlvbixcbiAgICAgICAgbWFza1RyYW5zaXRpb25OYW1lOiBwcm9wcy5tYXNrVHJhbnNpdGlvbk5hbWVcbiAgICAgIH0pLFxuICAgICAgdHlwZW9mIHByb3BzLnBvcHVwID09PSAnZnVuY3Rpb24nID8gcHJvcHMucG9wdXAoKSA6IHByb3BzLnBvcHVwXG4gICAgKTtcbiAgfSxcbiAgc2V0UG9wdXBWaXNpYmxlOiBmdW5jdGlvbiBzZXRQb3B1cFZpc2libGUocG9wdXBWaXNpYmxlKSB7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgIT09IHBvcHVwVmlzaWJsZSkge1xuICAgICAgaWYgKCEoJ3BvcHVwVmlzaWJsZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm9uUG9wdXBWaXNpYmxlQ2hhbmdlKHBvcHVwVmlzaWJsZSk7XG4gICAgfVxuICB9LFxuICBkZWxheVNldFBvcHVwVmlzaWJsZTogZnVuY3Rpb24gZGVsYXlTZXRQb3B1cFZpc2libGUodmlzaWJsZSwgZGVsYXlTKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZGVsYXkgPSBkZWxheVMgKiAxMDAwO1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNldFBvcHVwVmlzaWJsZSh2aXNpYmxlKTtcbiAgICAgICAgX3RoaXMyLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFBvcHVwVmlzaWJsZSh2aXNpYmxlKTtcbiAgICB9XG4gIH0sXG4gIGNsZWFyRGVsYXlUaW1lcjogZnVuY3Rpb24gY2xlYXJEZWxheVRpbWVyKCkge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGNsZWFyT3V0c2lkZUhhbmRsZXI6IGZ1bmN0aW9uIGNsZWFyT3V0c2lkZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlcikge1xuICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b3VjaE91dHNpZGVIYW5kbGVyKSB7XG4gICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlVHdvQ2hhaW5zOiBmdW5jdGlvbiBjcmVhdGVUd29DaGFpbnMoZXZlbnQpIHtcbiAgICB2YXIgY2hpbGRQcm9zID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcztcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIGlmIChjaGlsZFByb3NbZXZlbnRdICYmIHByb3BzW2V2ZW50XSkge1xuICAgICAgcmV0dXJuIHRoaXNbJ2ZpcmUnICsgZXZlbnRdO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRQcm9zW2V2ZW50XSB8fCBwcm9wc1tldmVudF07XG4gIH0sXG4gIGlzQ2xpY2tUb1Nob3c6IGZ1bmN0aW9uIGlzQ2xpY2tUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wcy5hY3Rpb24sXG4gICAgICAgIHNob3dBY3Rpb24gPSBfcHJvcHMuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgfSxcbiAgaXNDbGlja1RvSGlkZTogZnVuY3Rpb24gaXNDbGlja1RvSGlkZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczIuYWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uID0gX3Byb3BzMi5oaWRlQWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICB9LFxuICBpc01vdXNlRW50ZXJUb1Nob3c6IGZ1bmN0aW9uIGlzTW91c2VFbnRlclRvU2hvdygpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczMuYWN0aW9uLFxuICAgICAgICBzaG93QWN0aW9uID0gX3Byb3BzMy5zaG93QWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ21vdXNlRW50ZXInKSAhPT0gLTE7XG4gIH0sXG4gIGlzTW91c2VMZWF2ZVRvSGlkZTogZnVuY3Rpb24gaXNNb3VzZUxlYXZlVG9IaWRlKCkge1xuICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzNC5hY3Rpb24sXG4gICAgICAgIGhpZGVBY3Rpb24gPSBfcHJvcHM0LmhpZGVBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignbW91c2VMZWF2ZScpICE9PSAtMTtcbiAgfSxcbiAgaXNGb2N1c1RvU2hvdzogZnVuY3Rpb24gaXNGb2N1c1RvU2hvdygpIHtcbiAgICB2YXIgX3Byb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczUuYWN0aW9uLFxuICAgICAgICBzaG93QWN0aW9uID0gX3Byb3BzNS5zaG93QWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xO1xuICB9LFxuICBpc0JsdXJUb0hpZGU6IGZ1bmN0aW9uIGlzQmx1clRvSGlkZSgpIHtcbiAgICB2YXIgX3Byb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczYuYWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uID0gX3Byb3BzNi5oaWRlQWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ2JsdXInKSAhPT0gLTE7XG4gIH0sXG4gIGZvcmNlUG9wdXBBbGlnbjogZnVuY3Rpb24gZm9yY2VQb3B1cEFsaWduKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSAmJiB0aGlzLl9jb21wb25lbnQgJiYgdGhpcy5fY29tcG9uZW50LmFsaWduSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudC5hbGlnbkluc3RhbmNlLmZvcmNlQWxpZ24oKTtcbiAgICB9XG4gIH0sXG4gIGZpcmVFdmVudHM6IGZ1bmN0aW9uIGZpcmVFdmVudHModHlwZSwgZSkge1xuICAgIHZhciBjaGlsZENhbGxiYWNrID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wc1t0eXBlXTtcbiAgICBpZiAoY2hpbGRDYWxsYmFjaykge1xuICAgICAgY2hpbGRDYWxsYmFjayhlKTtcbiAgICB9XG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5wcm9wc1t0eXBlXTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKGUpO1xuICAgIH1cbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0UG9wdXBWaXNpYmxlKGZhbHNlKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB2YXIgbmV3Q2hpbGRQcm9wcyA9IHt9O1xuICAgIGlmICh0aGlzLmlzQ2xpY2tUb0hpZGUoKSB8fCB0aGlzLmlzQ2xpY2tUb1Nob3coKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd247XG4gICAgICBuZXdDaGlsZFByb3BzLm9uVG91Y2hTdGFydCA9IHRoaXMub25Ub3VjaFN0YXJ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uQ2xpY2sgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25DbGljaycpO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRG93biA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRG93bicpO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Ub3VjaFN0YXJ0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTW91c2VFbnRlclRvU2hvdygpKSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMub25Nb3VzZUVudGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRW50ZXInKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VMZWF2ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZvY3VzVG9TaG93KCkgfHwgdGhpcy5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLm9uQmx1cjtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uRm9jdXMnKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25CbHVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQmx1cicpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMpO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVHJpZ2dlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBhZGRFdmVudExpc3RlbmVyV3JhcDtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyID0gcmVxdWlyZSgnYWRkLWRvbS1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX2FkZERvbUV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRG9tRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldyYXAodGFyZ2V0LCBldmVudFR5cGUsIGNiKSB7XG4gIC8qIGVzbGludCBjYW1lbGNhc2U6IDIgKi9cbiAgdmFyIGNhbGxiYWNrID0gX3JlYWN0RG9tMlsnZGVmYXVsdCddLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID8gZnVuY3Rpb24gcnVuKGUpIHtcbiAgICBfcmVhY3REb20yWydkZWZhdWx0J10udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoY2IsIGUpO1xuICB9IDogY2I7XG4gIHJldHVybiAoMCwgX2FkZERvbUV2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10pKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjayk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQWxpZ24gZnJvbSAncmMtYWxpZ24nO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgUG9wdXBJbm5lciBmcm9tICcuL1BvcHVwSW5uZXInO1xuaW1wb3J0IExhenlSZW5kZXJCb3ggZnJvbSAnLi9MYXp5UmVuZGVyQm94JztcbmltcG9ydCB7IHNhdmVSZWYgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIFBvcHVwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3B1cChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3B1cCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUG9wdXAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQb3B1cCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5zYXZlUG9wdXBSZWYgPSBzYXZlUmVmLmJpbmQoX3RoaXMsICdwb3B1cEluc3RhbmNlJyk7XG4gICAgX3RoaXMuc2F2ZUFsaWduUmVmID0gc2F2ZVJlZi5iaW5kKF90aGlzLCAnYWxpZ25JbnN0YW5jZScpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb3B1cCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5yb290Tm9kZSA9IHRoaXMuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UG9wdXBEb21Ob2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucG9wdXBJbnN0YW5jZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TWFza1RyYW5zaXRpb25OYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWFza1RyYW5zaXRpb25OYW1lKCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLm1hc2tUcmFuc2l0aW9uTmFtZTtcbiAgICAgIHZhciBhbmltYXRpb24gPSBwcm9wcy5tYXNrQW5pbWF0aW9uO1xuICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBhbmltYXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLScgKyBhbmltYXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VHJhbnNpdGlvbk5hbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSgpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy50cmFuc2l0aW9uTmFtZTtcbiAgICAgIGlmICghdHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgcHJvcHMuYW5pbWF0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENsYXNzTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsYXNzTmFtZShjdXJyZW50QWxpZ25DbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnByZWZpeENscyArICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lICsgJyAnICsgY3VycmVudEFsaWduQ2xhc3NOYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFBvcHVwRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcHVwRWxlbWVudCgpIHtcbiAgICAgIHZhciBzYXZlUG9wdXBSZWYgPSB0aGlzLnNhdmVQb3B1cFJlZixcbiAgICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGUgPSBwcm9wcy5kZXN0cm95UG9wdXBPbkhpZGU7XG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSh0aGlzLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSB8fCBwcm9wcy5nZXRDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pKTtcbiAgICAgIHZhciBoaWRkZW5DbGFzc05hbWUgPSBwcmVmaXhDbHMgKyAnLWhpZGRlbic7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QWxpZ25DbGFzc05hbWUgPSBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIG5ld1N0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlLCB0aGlzLmdldFpJbmRleFN0eWxlKCkpO1xuICAgICAgdmFyIHBvcHVwSW5uZXJQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICByZWY6IHNhdmVQb3B1cFJlZixcbiAgICAgICAgb25Nb3VzZUVudGVyOiBwcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgICBzdHlsZTogbmV3U3R5bGVcbiAgICAgIH07XG4gICAgICBpZiAoZGVzdHJveVBvcHVwT25IaWRlKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEFuaW1hdGUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXNpYmxlID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEFsaWduLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0VGFyZ2V0LFxuICAgICAgICAgICAgICBrZXk6ICdwb3B1cCcsXG4gICAgICAgICAgICAgIHJlZjogdGhpcy5zYXZlQWxpZ25SZWYsXG4gICAgICAgICAgICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IHRydWUsXG4gICAgICAgICAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgICAgICAgICAgb25BbGlnbjogdGhpcy5vbkFsaWduXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgUG9wdXBJbm5lcixcbiAgICAgICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgICAgfSwgcG9wdXBJbm5lclByb3BzKSxcbiAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEFuaW1hdGUsXG4gICAgICAgIHtcbiAgICAgICAgICBjb21wb25lbnQ6ICcnLFxuICAgICAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiB0aGlzLmdldFRyYW5zaXRpb25OYW1lKCksXG4gICAgICAgICAgc2hvd1Byb3A6ICd4VmlzaWJsZSdcbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBBbGlnbixcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0VGFyZ2V0LFxuICAgICAgICAgICAga2V5OiAncG9wdXAnLFxuICAgICAgICAgICAgcmVmOiB0aGlzLnNhdmVBbGlnblJlZixcbiAgICAgICAgICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IHRydWUsXG4gICAgICAgICAgICB4VmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgICAgIGNoaWxkcmVuUHJvcHM6IHsgdmlzaWJsZTogJ3hWaXNpYmxlJyB9LFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICF2aXNpYmxlLFxuICAgICAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICAgICAgb25BbGlnbjogdGhpcy5vbkFsaWduXG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgUG9wdXBJbm5lcixcbiAgICAgICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgaGlkZGVuQ2xhc3NOYW1lOiBoaWRkZW5DbGFzc05hbWVcbiAgICAgICAgICAgIH0sIHBvcHVwSW5uZXJQcm9wcyksXG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRaSW5kZXhTdHlsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFpJbmRleFN0eWxlKCkge1xuICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKHByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0eWxlLnpJbmRleCA9IHByb3BzLnpJbmRleDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRNYXNrRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1hc2tFbGVtZW50KCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBtYXNrRWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIGlmIChwcm9wcy5tYXNrKSB7XG4gICAgICAgIHZhciBtYXNrVHJhbnNpdGlvbiA9IHRoaXMuZ2V0TWFza1RyYW5zaXRpb25OYW1lKCk7XG4gICAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCB7XG4gICAgICAgICAgc3R5bGU6IHRoaXMuZ2V0WkluZGV4U3R5bGUoKSxcbiAgICAgICAgICBrZXk6ICdtYXNrJyxcbiAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctbWFzaycsXG4gICAgICAgICAgaGlkZGVuQ2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1hc2staGlkZGVuJyxcbiAgICAgICAgICB2aXNpYmxlOiBwcm9wcy52aXNpYmxlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWFza1RyYW5zaXRpb24pIHtcbiAgICAgICAgICBtYXNrRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBBbmltYXRlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6ICdtYXNrJyxcbiAgICAgICAgICAgICAgc2hvd1Byb3A6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFza0VsZW1lbnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFza0VsZW1lbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLmdldE1hc2tFbGVtZW50KCksXG4gICAgICAgIHRoaXMuZ2V0UG9wdXBFbGVtZW50KClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBvcHVwO1xufShDb21wb25lbnQpO1xuXG5Qb3B1cC5wcm9wVHlwZXMgPSB7XG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZ2V0Q2xhc3NOYW1lRnJvbUFsaWduOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25BbGlnbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFJvb3REb21Ob2RlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWxpZ246IFByb3BUeXBlcy5hbnksXG4gIGRlc3Ryb3lQb3B1cE9uSGlkZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHRoaXMub25BbGlnbiA9IGZ1bmN0aW9uIChwb3B1cERvbU5vZGUsIGFsaWduKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXMyLnByb3BzO1xuICAgIHZhciBjdXJyZW50QWxpZ25DbGFzc05hbWUgPSBwcm9wcy5nZXRDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pO1xuICAgIC8vIEZJWDogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy81NlxuICAgIC8vIEZJWDogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90b29sdGlwL2lzc3Vlcy83OVxuICAgIGlmIChfdGhpczIuY3VycmVudEFsaWduQ2xhc3NOYW1lICE9PSBjdXJyZW50QWxpZ25DbGFzc05hbWUpIHtcbiAgICAgIF90aGlzMi5jdXJyZW50QWxpZ25DbGFzc05hbWUgPSBjdXJyZW50QWxpZ25DbGFzc05hbWU7XG4gICAgICBwb3B1cERvbU5vZGUuY2xhc3NOYW1lID0gX3RoaXMyLmdldENsYXNzTmFtZShjdXJyZW50QWxpZ25DbGFzc05hbWUpO1xuICAgIH1cbiAgICBwcm9wcy5vbkFsaWduKHBvcHVwRG9tTm9kZSwgYWxpZ24pO1xuICB9O1xuXG4gIHRoaXMuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczIucHJvcHMuZ2V0Um9vdERvbU5vZGUoKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXp5UmVuZGVyQm94IGZyb20gJy4vTGF6eVJlbmRlckJveCc7XG5cbnZhciBQb3B1cElubmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwSW5uZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcHVwSW5uZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHVwSW5uZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQb3B1cElubmVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUG9wdXBJbm5lcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcHVwSW5uZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICBpZiAoIXByb3BzLnZpc2libGUpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIExhenlSZW5kZXJCb3gsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctY29udGVudCcsIHZpc2libGU6IHByb3BzLnZpc2libGUgfSxcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3B1cElubmVyO1xufShDb21wb25lbnQpO1xuXG5Qb3B1cElubmVyLnByb3BUeXBlcyA9IHtcbiAgaGlkZGVuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnlcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBJbm5lcjsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBMYXp5UmVuZGVyQm94ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExhenlSZW5kZXJCb3gsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExhenlSZW5kZXJCb3goKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhenlSZW5kZXJCb3gpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMYXp5UmVuZGVyQm94Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGF6eVJlbmRlckJveCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExhenlSZW5kZXJCb3gsIFt7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIG5leHRQcm9wcy5oaWRkZW5DbGFzc05hbWUgfHwgbmV4dFByb3BzLnZpc2libGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaGlkZGVuQ2xhc3NOYW1lID0gX3Byb3BzLmhpZGRlbkNsYXNzTmFtZSxcbiAgICAgICAgICB2aXNpYmxlID0gX3Byb3BzLnZpc2libGUsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2hpZGRlbkNsYXNzTmFtZScsICd2aXNpYmxlJ10pO1xuXG4gICAgICBpZiAoaGlkZGVuQ2xhc3NOYW1lIHx8IFJlYWN0LkNoaWxkcmVuLmNvdW50KHByb3BzLmNoaWxkcmVuKSA+IDEpIHtcbiAgICAgICAgaWYgKCF2aXNpYmxlICYmIGhpZGRlbkNsYXNzTmFtZSkge1xuICAgICAgICAgIHByb3BzLmNsYXNzTmFtZSArPSAnICcgKyBoaWRkZW5DbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkocHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMYXp5UmVuZGVyQm94O1xufShDb21wb25lbnQpO1xuXG5MYXp5UmVuZGVyQm94LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGRlbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBMYXp5UmVuZGVyQm94OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5mdW5jdGlvbiBpc1BvaW50c0VxKGExLCBhMikge1xuICByZXR1cm4gYTFbMF0gPT09IGEyWzBdICYmIGExWzFdID09PSBhMlsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsaWduRnJvbVBsYWNlbWVudChidWlsdGluUGxhY2VtZW50cywgcGxhY2VtZW50U3RyLCBhbGlnbikge1xuICB2YXIgYmFzZUFsaWduID0gYnVpbHRpblBsYWNlbWVudHNbcGxhY2VtZW50U3RyXSB8fCB7fTtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBiYXNlQWxpZ24sIGFsaWduKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKGJ1aWx0aW5QbGFjZW1lbnRzLCBwcmVmaXhDbHMsIGFsaWduKSB7XG4gIHZhciBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gIGZvciAodmFyIHBsYWNlbWVudCBpbiBidWlsdGluUGxhY2VtZW50cykge1xuICAgIGlmIChidWlsdGluUGxhY2VtZW50cy5oYXNPd25Qcm9wZXJ0eShwbGFjZW1lbnQpKSB7XG4gICAgICBpZiAoaXNQb2ludHNFcShidWlsdGluUGxhY2VtZW50c1twbGFjZW1lbnRdLnBvaW50cywgcG9pbnRzKSkge1xuICAgICAgICByZXR1cm4gcHJlZml4Q2xzICsgJy1wbGFjZW1lbnQtJyArIHBsYWNlbWVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVJlZihuYW1lLCBjb21wb25lbnQpIHtcbiAgdGhpc1tuYW1lXSA9IGNvbXBvbmVudDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBnZXRDb250YWluZXJSZW5kZXJNaXhpbjtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0Q29udGFpbmVyKCkge1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyUmVuZGVyTWl4aW4oY29uZmlnKSB7XG4gIHZhciBfY29uZmlnJGF1dG9Nb3VudCA9IGNvbmZpZy5hdXRvTW91bnQsXG4gICAgICBhdXRvTW91bnQgPSBfY29uZmlnJGF1dG9Nb3VudCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9jb25maWckYXV0b01vdW50LFxuICAgICAgX2NvbmZpZyRhdXRvRGVzdHJveSA9IGNvbmZpZy5hdXRvRGVzdHJveSxcbiAgICAgIGF1dG9EZXN0cm95ID0gX2NvbmZpZyRhdXRvRGVzdHJveSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9jb25maWckYXV0b0Rlc3Ryb3ksXG4gICAgICBpc1Zpc2libGUgPSBjb25maWcuaXNWaXNpYmxlLFxuICAgICAgaXNGb3JjZVJlbmRlciA9IGNvbmZpZy5pc0ZvcmNlUmVuZGVyLFxuICAgICAgZ2V0Q29tcG9uZW50ID0gY29uZmlnLmdldENvbXBvbmVudCxcbiAgICAgIF9jb25maWckZ2V0Q29udGFpbmVyID0gY29uZmlnLmdldENvbnRhaW5lcixcbiAgICAgIGdldENvbnRhaW5lciA9IF9jb25maWckZ2V0Q29udGFpbmVyID09PSB1bmRlZmluZWQgPyBkZWZhdWx0R2V0Q29udGFpbmVyIDogX2NvbmZpZyRnZXRDb250YWluZXI7XG5cblxuICB2YXIgbWl4aW4gPSB2b2lkIDA7XG5cbiAgZnVuY3Rpb24gX3JlbmRlckNvbXBvbmVudChpbnN0YW5jZSwgY29tcG9uZW50QXJnLCByZWFkeSkge1xuICAgIGlmICghaXNWaXNpYmxlIHx8IGluc3RhbmNlLl9jb21wb25lbnQgfHwgaXNWaXNpYmxlKGluc3RhbmNlKSB8fCBpc0ZvcmNlUmVuZGVyICYmIGlzRm9yY2VSZW5kZXIoaW5zdGFuY2UpKSB7XG4gICAgICBpZiAoIWluc3RhbmNlLl9jb250YWluZXIpIHtcbiAgICAgICAgaW5zdGFuY2UuX2NvbnRhaW5lciA9IGdldENvbnRhaW5lcihpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICB2YXIgY29tcG9uZW50ID0gdm9pZCAwO1xuICAgICAgaWYgKGluc3RhbmNlLmdldENvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQgPSBpbnN0YW5jZS5nZXRDb21wb25lbnQoY29tcG9uZW50QXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGdldENvbXBvbmVudChpbnN0YW5jZSwgY29tcG9uZW50QXJnKTtcbiAgICAgIH1cbiAgICAgIF9yZWFjdERvbTJbJ2RlZmF1bHQnXS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihpbnN0YW5jZSwgY29tcG9uZW50LCBpbnN0YW5jZS5fY29udGFpbmVyLCBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgaW5zdGFuY2UuX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAgIHJlYWR5LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhdXRvTW91bnQpIHtcbiAgICBtaXhpbiA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIG1peGluLCB7XG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIF9yZW5kZXJDb21wb25lbnQodGhpcyk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIF9yZW5kZXJDb21wb25lbnQodGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIWF1dG9Nb3VudCB8fCAhYXV0b0Rlc3Ryb3kpIHtcbiAgICBtaXhpbiA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIG1peGluLCB7XG4gICAgICByZW5kZXJDb21wb25lbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnRBcmcsIHJlYWR5KSB7XG4gICAgICAgIF9yZW5kZXJDb21wb25lbnQodGhpcywgY29tcG9uZW50QXJnLCByZWFkeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVtb3ZlQ29udGFpbmVyKGluc3RhbmNlKSB7XG4gICAgaWYgKGluc3RhbmNlLl9jb250YWluZXIpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSBpbnN0YW5jZS5fY29udGFpbmVyO1xuICAgICAgX3JlYWN0RG9tMlsnZGVmYXVsdCddLnVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKTtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICBpbnN0YW5jZS5fY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpZiAoYXV0b0Rlc3Ryb3kpIHtcbiAgICBtaXhpbiA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIG1peGluLCB7XG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIF9yZW1vdmVDb250YWluZXIodGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbWl4aW4gPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBtaXhpbiwge1xuICAgICAgcmVtb3ZlQ29udGFpbmVyOiBmdW5jdGlvbiByZW1vdmVDb250YWluZXIoKSB7XG4gICAgICAgIF9yZW1vdmVDb250YWluZXIodGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWl4aW47XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgQ29tYm9ib3ggZnJvbSAnLi9Db21ib2JveCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tIFwiY3JlYXRlLXJlYWN0LWNsYXNzXCI7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlT3B0aW9ucyhsZW5ndGgsIGRpc2FibGVkT3B0aW9ucywgaGlkZURpc2FibGVkT3B0aW9ucykge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgdmFsdWUgPSAwOyB2YWx1ZSA8IGxlbmd0aDsgdmFsdWUrKykge1xuICAgIGlmICghZGlzYWJsZWRPcHRpb25zIHx8IGRpc2FibGVkT3B0aW9ucy5pbmRleE9mKHZhbHVlKSA8IDAgfHwgIWhpZGVEaXNhYmxlZE9wdGlvbnMpIHtcbiAgICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuY29uc3QgUGFuZWwgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgY2xlYXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0T3BlblZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZEhvdXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZE1pbnV0ZXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkU2Vjb25kczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGlkZURpc2FibGVkT3B0aW9uczogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXNjOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhbGxvd0VtcHR5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93SG91cjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1NlY29uZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd0FNUE06IFByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXhDbHM6ICdyYy10aW1lLXBpY2tlci1wYW5lbCcsXG4gICAgICBvbkNoYW5nZTogbm9vcCxcbiAgICAgIG9uQ2xlYXI6IG5vb3AsXG4gICAgICBkZWZhdWx0T3BlblZhbHVlOiBtb21lbnQoKSxcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICBzZWxlY3Rpb25SYW5nZTogW10sXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIG9uQ2hhbmdlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgfSxcblxuICBvbkNsZWFyKCkge1xuICAgIHRoaXMucHJvcHMub25DbGVhcigpO1xuICB9LFxuXG4gIG9uQ3VycmVudFNlbGVjdFBhbmVsQ2hhbmdlKGN1cnJlbnRTZWxlY3RQYW5lbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U2VsZWN0UGFuZWwgfSk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1hdHRlciwgcHJlZml4Q2xzLCBjbGFzc05hbWUsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZEhvdXJzLCBkaXNhYmxlZE1pbnV0ZXMsXG4gICAgICBkaXNhYmxlZFNlY29uZHMsIGhpZGVEaXNhYmxlZE9wdGlvbnMsIGFsbG93RW1wdHksIHNob3dIb3VyLCBzaG93U2Vjb25kLCBzaG93QU1QTSxcbiAgICAgIGZvcm1hdCwgZGVmYXVsdE9wZW5WYWx1ZSwgY2xlYXJUZXh0LCBvbkVzYyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSwgY3VycmVudFNlbGVjdFBhbmVsLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRpc2FibGVkSG91ck9wdGlvbnMgPSBkaXNhYmxlZEhvdXJzKCk7XG4gICAgY29uc3QgZGlzYWJsZWRNaW51dGVPcHRpb25zID0gZGlzYWJsZWRNaW51dGVzKHZhbHVlID8gdmFsdWUuaG91cigpIDogbnVsbCk7XG4gICAgY29uc3QgZGlzYWJsZWRTZWNvbmRPcHRpb25zID0gZGlzYWJsZWRTZWNvbmRzKHZhbHVlID8gdmFsdWUuaG91cigpIDogbnVsbCxcbiAgICAgIHZhbHVlID8gdmFsdWUubWludXRlKCkgOiBudWxsKTtcbiAgICBjb25zdCBob3VyT3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucygyNCwgZGlzYWJsZWRIb3VyT3B0aW9ucywgaGlkZURpc2FibGVkT3B0aW9ucyk7XG4gICAgY29uc3QgbWludXRlT3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyg2MCwgZGlzYWJsZWRNaW51dGVPcHRpb25zLCBoaWRlRGlzYWJsZWRPcHRpb25zKTtcbiAgICBjb25zdCBzZWNvbmRPcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKDYwLCBkaXNhYmxlZFNlY29uZE9wdGlvbnMsIGhpZGVEaXNhYmxlZE9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWlubmVyICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgY2xlYXJUZXh0PXtjbGVhclRleHR9XG4gICAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXhDbHN9XG4gICAgICAgICAgZGVmYXVsdE9wZW5WYWx1ZT17ZGVmYXVsdE9wZW5WYWx1ZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY3VycmVudFNlbGVjdFBhbmVsPXtjdXJyZW50U2VsZWN0UGFuZWx9XG4gICAgICAgICAgb25Fc2M9e29uRXNjfVxuICAgICAgICAgIGZvcm1hdD17Zm9ybWF0fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBob3VyT3B0aW9ucz17aG91ck9wdGlvbnN9XG4gICAgICAgICAgbWludXRlT3B0aW9ucz17bWludXRlT3B0aW9uc31cbiAgICAgICAgICBzZWNvbmRPcHRpb25zPXtzZWNvbmRPcHRpb25zfVxuICAgICAgICAgIGRpc2FibGVkSG91cnM9e2Rpc2FibGVkSG91cnN9XG4gICAgICAgICAgZGlzYWJsZWRNaW51dGVzPXtkaXNhYmxlZE1pbnV0ZXN9XG4gICAgICAgICAgZGlzYWJsZWRTZWNvbmRzPXtkaXNhYmxlZFNlY29uZHN9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgb25DbGVhcj17dGhpcy5vbkNsZWFyfVxuICAgICAgICAgIGFsbG93RW1wdHk9e2FsbG93RW1wdHl9XG4gICAgICAgIC8+XG4gICAgICAgIDxDb21ib2JveFxuICAgICAgICAgIGZvcm1hdHRlcj17Zm9ybWF0dGVyfVxuICAgICAgICAgIHByZWZpeENscz17cHJlZml4Q2xzfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkZWZhdWx0T3BlblZhbHVlPXtkZWZhdWx0T3BlblZhbHVlfVxuICAgICAgICAgIGZvcm1hdD17Zm9ybWF0fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIHNob3dBTVBNPXtzaG93QU1QTX1cbiAgICAgICAgICBzaG93SG91cj17c2hvd0hvdXJ9XG4gICAgICAgICAgc2hvd1NlY29uZD17c2hvd1NlY29uZH1cbiAgICAgICAgICBob3VyT3B0aW9ucz17aG91ck9wdGlvbnN9XG4gICAgICAgICAgbWludXRlT3B0aW9ucz17bWludXRlT3B0aW9uc31cbiAgICAgICAgICBzZWNvbmRPcHRpb25zPXtzZWNvbmRPcHRpb25zfVxuICAgICAgICAgIGRpc2FibGVkSG91cnM9e2Rpc2FibGVkSG91cnN9XG4gICAgICAgICAgZGlzYWJsZWRNaW51dGVzPXtkaXNhYmxlZE1pbnV0ZXN9XG4gICAgICAgICAgZGlzYWJsZWRTZWNvbmRzPXtkaXNhYmxlZFNlY29uZHN9XG4gICAgICAgICAgb25DdXJyZW50U2VsZWN0UGFuZWxDaGFuZ2U9e3RoaXMub25DdXJyZW50U2VsZWN0UGFuZWxDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gXCJjcmVhdGUtcmVhY3QtY2xhc3NcIjtcblxuY29uc3QgSGVhZGVyID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGVhclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaG91ck9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBtaW51dGVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2Vjb25kT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGRpc2FibGVkSG91cnM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkTWludXRlczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWRTZWNvbmRzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Fc2M6IFByb3BUeXBlcy5mdW5jLFxuICAgIGFsbG93RW1wdHk6IFByb3BUeXBlcy5ib29sLFxuICAgIGRlZmF1bHRPcGVuVmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY3VycmVudFNlbGVjdFBhbmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBmb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0cjogdmFsdWUgJiYgdmFsdWUuZm9ybWF0KGZvcm1hdCkgfHwgJycsXG4gICAgICBpbnZhbGlkOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZm9ybWF0IH0gPSBuZXh0UHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdHI6IHZhbHVlICYmIHZhbHVlLmZvcm1hdChmb3JtYXQpIHx8ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25JbnB1dENoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHN0ciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0cixcbiAgICB9KTtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtYXQsIGhvdXJPcHRpb25zLCBtaW51dGVPcHRpb25zLCBzZWNvbmRPcHRpb25zLFxuICAgICAgZGlzYWJsZWRIb3VycywgZGlzYWJsZWRNaW51dGVzLFxuICAgICAgZGlzYWJsZWRTZWNvbmRzLCBvbkNoYW5nZSwgYWxsb3dFbXB0eSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChzdHIpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFByb3RvVmFsdWUoKS5jbG9uZSgpO1xuICAgICAgY29uc3QgcGFyc2VkID0gbW9tZW50KHN0ciwgZm9ybWF0LCB0cnVlKTtcbiAgICAgIGlmICghcGFyc2VkLmlzVmFsaWQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFsdWUuaG91cihwYXJzZWQuaG91cigpKS5taW51dGUocGFyc2VkLm1pbnV0ZSgpKS5zZWNvbmQocGFyc2VkLnNlY29uZCgpKTtcblxuICAgICAgLy8gaWYgdGltZSB2YWx1ZSBub3QgYWxsb3dlZCwgcmVzcG9uc2Ugd2FybmluZy5cbiAgICAgIGlmIChcbiAgICAgICAgaG91ck9wdGlvbnMuaW5kZXhPZih2YWx1ZS5ob3VyKCkpIDwgMCB8fFxuICAgICAgICBtaW51dGVPcHRpb25zLmluZGV4T2YodmFsdWUubWludXRlKCkpIDwgMCB8fFxuICAgICAgICBzZWNvbmRPcHRpb25zLmluZGV4T2YodmFsdWUuc2Vjb25kKCkpIDwgMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRpbWUgdmFsdWUgaXMgZGlzYWJsZWQsIHJlc3BvbnNlIHdhcm5pbmcuXG4gICAgICBjb25zdCBkaXNhYmxlZEhvdXJPcHRpb25zID0gZGlzYWJsZWRIb3VycygpO1xuICAgICAgY29uc3QgZGlzYWJsZWRNaW51dGVPcHRpb25zID0gZGlzYWJsZWRNaW51dGVzKHZhbHVlLmhvdXIoKSk7XG4gICAgICBjb25zdCBkaXNhYmxlZFNlY29uZE9wdGlvbnMgPSBkaXNhYmxlZFNlY29uZHModmFsdWUuaG91cigpLCB2YWx1ZS5taW51dGUoKSk7XG4gICAgICBpZiAoXG4gICAgICAgIChkaXNhYmxlZEhvdXJPcHRpb25zICYmIGRpc2FibGVkSG91ck9wdGlvbnMuaW5kZXhPZih2YWx1ZS5ob3VyKCkpID49IDApIHx8XG4gICAgICAgIChkaXNhYmxlZE1pbnV0ZU9wdGlvbnMgJiYgZGlzYWJsZWRNaW51dGVPcHRpb25zLmluZGV4T2YodmFsdWUubWludXRlKCkpID49IDApIHx8XG4gICAgICAgIChkaXNhYmxlZFNlY29uZE9wdGlvbnMgJiYgZGlzYWJsZWRTZWNvbmRPcHRpb25zLmluZGV4T2YodmFsdWUuc2Vjb25kKCkpID49IDApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW52YWxpZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yaWdpbmFsVmFsdWUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG9yaWdpbmFsVmFsdWUuaG91cigpICE9PSB2YWx1ZS5ob3VyKCkgfHxcbiAgICAgICAgICBvcmlnaW5hbFZhbHVlLm1pbnV0ZSgpICE9PSB2YWx1ZS5taW51dGUoKSB8fFxuICAgICAgICAgIG9yaWdpbmFsVmFsdWUuc2Vjb25kKCkgIT09IHZhbHVlLnNlY29uZCgpXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIGtlZXAgb3RoZXIgZmllbGRzIGZvciByYy1jYWxlbmRhclxuICAgICAgICAgIGNvbnN0IGNoYW5nZWRWYWx1ZSA9IG9yaWdpbmFsVmFsdWUuY2xvbmUoKTtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWUuaG91cih2YWx1ZS5ob3VyKCkpO1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZS5taW51dGUodmFsdWUubWludXRlKCkpO1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZS5zZWNvbmQodmFsdWUuc2Vjb25kKCkpO1xuICAgICAgICAgIG9uQ2hhbmdlKGNoYW5nZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob3JpZ2luYWxWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWxsb3dFbXB0eSkge1xuICAgICAgb25DaGFuZ2UobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnZhbGlkOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXNjKCk7XG4gICAgfVxuICB9LFxuXG4gIG9uQ2xlYXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0cjogJycgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNsZWFyKCk7XG4gIH0sXG5cbiAgZ2V0Q2xlYXJCdXR0b24oKSB7XG4gICAgY29uc3QgeyBwcmVmaXhDbHMsIGFsbG93RW1wdHkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFhbGxvd0VtcHR5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuICg8YVxuICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWNsZWFyLWJ0bmB9XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmNsZWFyVGV4dH1cbiAgICAgIG9uTW91c2VEb3duPXt0aGlzLm9uQ2xlYXJ9XG4gICAgLz4pO1xuICB9LFxuXG4gIGdldFByb3RvVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0T3BlblZhbHVlO1xuICB9LFxuXG4gIGdldElucHV0KCkge1xuICAgIGNvbnN0IHsgcHJlZml4Q2xzLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGludmFsaWQsIHN0ciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpbnZhbGlkQ2xhc3MgPSBpbnZhbGlkID8gYCR7cHJlZml4Q2xzfS1pbnB1dC1pbnZhbGlkYCA6ICcnO1xuICAgIHJldHVybiAoPGlucHV0XG4gICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30taW5wdXQgICR7aW52YWxpZENsYXNzfWB9XG4gICAgICByZWY9XCJpbnB1dFwiXG4gICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgdmFsdWU9e3N0cn1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9XG4gICAgLz4pO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByZWZpeENscyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30taW5wdXQtd3JhcGB9PlxuICAgICAgICB7dGhpcy5nZXRJbnB1dCgpfVxuICAgICAgICB7dGhpcy5nZXRDbGVhckJ1dHRvbigpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tIFwiY3JlYXRlLXJlYWN0LWNsYXNzXCI7XG5cbmNvbnN0IHBhZCA9IHZhbHVlID0+IHZhbHVlIDwgMTAgPyBgMCR7dmFsdWV9YCA6IGAke3ZhbHVlfWA7XG5cbmNvbnN0IGZvcm1hdE9wdGlvbiA9IChvcHRpb24sIGRpc2FibGVkT3B0aW9ucykgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHBhZChvcHRpb24pO1xuXG4gIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuICBpZiAoZGlzYWJsZWRPcHRpb25zICYmIGRpc2FibGVkT3B0aW9ucy5pbmRleE9mKG9wdGlvbikgPj0gMCkge1xuICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgZGlzYWJsZWQsXG4gIH07XG59O1xuXG5jb25zdCBDb21ib2JveCA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdE9wZW5WYWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNob3dIb3VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93U2Vjb25kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBob3VyT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIG1pbnV0ZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzZWNvbmRPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZGlzYWJsZWRIb3VyczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWRNaW51dGVzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZFNlY29uZHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ3VycmVudFNlbGVjdFBhbmVsQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIG9uSXRlbUNoYW5nZSh0eXBlLCBpdGVtVmFsdWUpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBkZWZhdWx0T3BlblZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gKHRoaXMucHJvcHMudmFsdWUgfHwgZGVmYXVsdE9wZW5WYWx1ZSkuY2xvbmUoKTtcblxuICAgIGlmICh0eXBlID09PSAnaG91cicpIHtcbiAgICAgIHZhbHVlLmhvdXIoaXRlbVZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdtaW51dGUnKSB7XG4gICAgICB2YWx1ZS5taW51dGUoaXRlbVZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzZWNvbmQnKSB7XG4gICAgICB2YWx1ZS5zZWNvbmQoaXRlbVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWN0dWFsUGVyaW9kID0gdmFsdWUuZm9ybWF0KCdBJyk7XG5cbiAgICAgIGlmIChhY3R1YWxQZXJpb2QgIT09IGl0ZW1WYWx1ZSkge1xuICAgICAgICBjb25zdCBob3VyMjRzdHlsZSA9IHZhbHVlLmhvdXIoKTtcbiAgICAgICAgY29uc3QgaG91cjEyc3R5bGUgPSBob3VyMjRzdHlsZSA8IDEyID8gaG91cjI0c3R5bGUgOiBob3VyMjRzdHlsZSAtIDEyO1xuXG4gICAgICAgIGlmIChpdGVtVmFsdWUgPT09ICdQTScpIHtcbiAgICAgICAgICAgIHZhbHVlLmhvdXIoaG91cjEyc3R5bGUgKyAxMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZS5ob3VyKGhvdXIxMnN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgfSxcblxuICBvbkVudGVyU2VsZWN0UGFuZWwocmFuZ2UpIHtcbiAgICB0aGlzLnByb3BzLm9uQ3VycmVudFNlbGVjdFBhbmVsQ2hhbmdlKHJhbmdlKTtcbiAgfSxcblxuICBnZXRIb3VyU2VsZWN0KGhvdXIpIHtcbiAgICBjb25zdCB7IHByZWZpeENscywgc2hvd0FNUE0sIGRpc2FibGVkSG91cnMsIHNob3dIb3VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghc2hvd0hvdXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2FibGVkT3B0aW9ucyA9IGRpc2FibGVkSG91cnMoKTtcbiAgICBsZXQgaG91ck9wdGlvbnMgPSB0aGlzLnByb3BzLmhvdXJPcHRpb25zO1xuICAgIGxldCBmb3JtYXR0ZWRPcHRpb25zID0gaG91ck9wdGlvbnMubWFwKG9wdGlvbiA9PiBmb3JtYXRPcHRpb24ob3B0aW9uLCBkaXNhYmxlZE9wdGlvbnMpKTtcblxuICAgIGlmIChzaG93QU1QTSkge1xuICAgICAgaG91ck9wdGlvbnMgPSBob3VyT3B0aW9ucy5maWx0ZXIodmFsdWUgPT4gaG91ciA8IDEyID8gdmFsdWUgPCAxMiA6IHZhbHVlID49IDEyKTtcbiAgICAgIGZvcm1hdHRlZE9wdGlvbnMgPSBmb3JtYXR0ZWRPcHRpb25zXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgb3B0aW9uID0+ICh7XG4gICAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgICBsYWJlbDogb3B0aW9uLnZhbHVlIDw9IDEyID8gb3B0aW9uLnZhbHVlIDogcGFkKG9wdGlvbi52YWx1ZSAtIDEyKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmZpbHRlcigoe3ZhbHVlfSkgPT4gaG91ciA8IDEyID8gTnVtYmVyKHZhbHVlKSA8IDEyIDogTnVtYmVyKHZhbHVlKSA+PSAxMilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeENsc31cbiAgICAgICAgb3B0aW9ucz17Zm9ybWF0dGVkT3B0aW9uc31cbiAgICAgICAgc2VsZWN0ZWRJbmRleD17aG91ck9wdGlvbnMuaW5kZXhPZihob3VyKX1cbiAgICAgICAgdHlwZT1cImhvdXJcIlxuICAgICAgICBvblNlbGVjdD17dGhpcy5vbkl0ZW1DaGFuZ2V9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbkVudGVyU2VsZWN0UGFuZWwuYmluZCh0aGlzLCAnaG91cicpfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuXG4gIGdldE1pbnV0ZVNlbGVjdChtaW51dGUpIHtcbiAgICBjb25zdCB7IHByZWZpeENscywgbWludXRlT3B0aW9ucywgZGlzYWJsZWRNaW51dGVzLCBkZWZhdWx0T3BlblZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCBkZWZhdWx0T3BlblZhbHVlO1xuICAgIGNvbnN0IGRpc2FibGVkT3B0aW9ucyA9IGRpc2FibGVkTWludXRlcyh2YWx1ZS5ob3VyKCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXhDbHN9XG4gICAgICAgIG9wdGlvbnM9e21pbnV0ZU9wdGlvbnMubWFwKG9wdGlvbiA9PiBmb3JtYXRPcHRpb24ob3B0aW9uLCBkaXNhYmxlZE9wdGlvbnMpKX1cbiAgICAgICAgc2VsZWN0ZWRJbmRleD17bWludXRlT3B0aW9ucy5pbmRleE9mKG1pbnV0ZSl9XG4gICAgICAgIHR5cGU9XCJtaW51dGVcIlxuICAgICAgICBvblNlbGVjdD17dGhpcy5vbkl0ZW1DaGFuZ2V9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbkVudGVyU2VsZWN0UGFuZWwuYmluZCh0aGlzLCAnbWludXRlJyl9XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG5cbiAgZ2V0U2Vjb25kU2VsZWN0KHNlY29uZCkge1xuICAgIGNvbnN0IHsgcHJlZml4Q2xzLCBzZWNvbmRPcHRpb25zLCBkaXNhYmxlZFNlY29uZHMsIHNob3dTZWNvbmQsIGRlZmF1bHRPcGVuVmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFzaG93U2Vjb25kKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IGRlZmF1bHRPcGVuVmFsdWU7XG4gICAgY29uc3QgZGlzYWJsZWRPcHRpb25zID0gZGlzYWJsZWRTZWNvbmRzKHZhbHVlLmhvdXIoKSwgdmFsdWUubWludXRlKCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXhDbHN9XG4gICAgICAgIG9wdGlvbnM9e3NlY29uZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBmb3JtYXRPcHRpb24ob3B0aW9uLCBkaXNhYmxlZE9wdGlvbnMpKX1cbiAgICAgICAgc2VsZWN0ZWRJbmRleD17c2Vjb25kT3B0aW9ucy5pbmRleE9mKHNlY29uZCl9XG4gICAgICAgIHR5cGU9XCJzZWNvbmRcIlxuICAgICAgICBvblNlbGVjdD17dGhpcy5vbkl0ZW1DaGFuZ2V9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbkVudGVyU2VsZWN0UGFuZWwuYmluZCh0aGlzLCAnc2Vjb25kJyl9XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG5cbiAgZ2V0QU1QTVNlbGVjdChwZXJpb2QpIHtcbiAgICBjb25zdCB7IHByZWZpeENscywgc2hvd0FNUE0sIGRlZmF1bHRPcGVuVmFsdWUsfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXNob3dBTVBNKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAge3ZhbHVlOiAnQU0nLCBsYWJlbDogJ0FNJ30sXG4gICAgICB7dmFsdWU6ICdQTScsIGxhYmVsOiAnUE0nfVxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeENsc31cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgc2VsZWN0ZWRJbmRleD17cGVyaW9kID09PSAnQU0nID8gMCA6IDF9XG4gICAgICAgIHR5cGU9XCJwZXJpb2RcIlxuICAgICAgICBvblNlbGVjdD17dGhpcy5vbkl0ZW1DaGFuZ2V9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5vbkVudGVyU2VsZWN0UGFuZWwuYmluZCh0aGlzLCAncGVyaW9kJyl9XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJlZml4Q2xzLCBkZWZhdWx0T3BlblZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCBkZWZhdWx0T3BlblZhbHVlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1jb21ib2JveGB9PlxuICAgICAgICB7dGhpcy5nZXRIb3VyU2VsZWN0KHZhbHVlLmhvdXIoKSl9XG4gICAgICAgIHt0aGlzLmdldE1pbnV0ZVNlbGVjdCh2YWx1ZS5taW51dGUoKSl9XG4gICAgICAgIHt0aGlzLmdldFNlY29uZFNlbGVjdCh2YWx1ZS5zZWNvbmQoKSl9XG4gICAgICAgIHt0aGlzLmdldEFNUE1TZWxlY3QodmFsdWUuaG91cigpIDwgMTIgPyAnQU0nIDogJ1BNJyl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbWJvYm94O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tIFwiY3JlYXRlLXJlYWN0LWNsYXNzXCI7XG5cbmNvbnN0IHNjcm9sbFRvID0gKGVsZW1lbnQsIHRvLCBkdXJhdGlvbikgPT4ge1xuICBjb25zdCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lVGltZW91dCgpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGFyZ3VtZW50c1swXSwgMTApO1xuICAgIH07XG4gIC8vIGp1bXAgdG8gdGFyZ2V0IGlmIGR1cmF0aW9uIHplcm9cbiAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgY29uc3QgcGVyVGljayA9IGRpZmZlcmVuY2UgLyBkdXJhdGlvbiAqIDEwO1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsVG9wID09PSB0bykgcmV0dXJuO1xuICAgIHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKTtcbiAgfSk7XG59O1xuXG5jb25zdCBTZWxlY3QgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzZWxlY3RlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8ganVtcCB0byBzZWxlY3RlZCBvcHRpb25cbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQoMCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIC8vIHNtb290aCBzY3JvbGwgdG8gc2VsZWN0ZWQgb3B0aW9uXG4gICAgaWYgKHByZXZQcm9wcy5zZWxlY3RlZEluZGV4ICE9PSB0aGlzLnByb3BzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCgxMjApO1xuICAgIH1cbiAgfSxcblxuICBvblNlbGVjdCh2YWx1ZSkge1xuICAgIGNvbnN0IHsgb25TZWxlY3QsIHR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgb25TZWxlY3QodHlwZSwgdmFsdWUpO1xuICB9LFxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBzZWxlY3RlZEluZGV4LCBwcmVmaXhDbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIG9wdGlvbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2xzID0gY2xhc3NuYW1lcyh7XG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LXNlbGVjdC1vcHRpb24tc2VsZWN0ZWRgXTogc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXgsXG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LXNlbGVjdC1vcHRpb24tZGlzYWJsZWRgXTogaXRlbS5kaXNhYmxlZCxcbiAgICAgIH0pO1xuICAgICAgbGV0IG9uY2xpY2sgPSBudWxsO1xuICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9ICtpdGVtLnZhbHVlO1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBvbmNsaWNrID0gdGhpcy5vblNlbGVjdC5iaW5kKHRoaXMsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICg8bGlcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN9XG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIG9uQ2xpY2s9e29uY2xpY2t9XG4gICAgICAgIGRpc2FibGVkPXtpdGVtLmRpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7dHlwZW9mIGl0ZW0ubGFiZWwgIT09ICd1bmRlZmluZWQnID8gaXRlbS5sYWJlbCA6IGl0ZW0udmFsdWV9XG4gICAgICA8L2xpPik7XG4gICAgfSk7XG4gIH0sXG5cbiAgc2Nyb2xsVG9TZWxlY3RlZChkdXJhdGlvbikge1xuICAgIC8vIG1vdmUgdG8gc2VsZWN0ZWQgaXRlbVxuICAgIGNvbnN0IHNlbGVjdCA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGNvbnN0IGxpc3QgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubGlzdCk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5wcm9wcy5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgY29uc3QgdG9wT3B0aW9uID0gbGlzdC5jaGlsZHJlbltpbmRleF07XG4gICAgY29uc3QgdG8gPSB0b3BPcHRpb24ub2Zmc2V0VG9wO1xuICAgIHNjcm9sbFRvKHNlbGVjdCwgdG8sIGR1cmF0aW9uKTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcHJlZml4Q2xzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LXNlbGVjdGB9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5wcm9wcy5vbk1vdXNlRW50ZXJ9XG4gICAgICA+XG4gICAgICAgIDx1bCByZWY9XCJsaXN0XCI+e3RoaXMuZ2V0T3B0aW9ucygpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcbiIsImNvbnN0IGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMSxcbn07XG5cbmNvbnN0IHRhcmdldE9mZnNldCA9IFswLCAwXTtcblxuY29uc3QgcGxhY2VtZW50cyA9IHtcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTNdLFxuICAgIHRhcmdldE9mZnNldCxcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC0zXSxcbiAgICB0YXJnZXRPZmZzZXQsXG4gIH0sXG4gIHRvcFJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAzXSxcbiAgICB0YXJnZXRPZmZzZXQsXG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDNdLFxuICAgIHRhcmdldE9mZnNldCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYWNlbWVudHM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJyb3dzZXJMb2NhbGUgKCkge1xuICB2YXIgbGFuZ1xuXG4gIGlmIChuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgLy8gbGF0ZXN0IHZlcnNpb25zIG9mIENocm9tZSBhbmQgRmlyZWZveCBzZXQgdGhpcyBjb3JyZWN0bHlcbiAgICBsYW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlc1swXVxuICB9IGVsc2UgaWYgKG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UpIHtcbiAgICAvLyBJRSBvbmx5XG4gICAgbGFuZyA9IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2VcbiAgfSBlbHNlIHtcbiAgICAvLyBsYXRlc3QgdmVyc2lvbnMgb2YgQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpIHNldCB0aGlzIGNvcnJlY3RseVxuICAgIGxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgfVxuXG4gIHJldHVybiBsYW5nXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9pbmRleCcpOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnLCAncmVhY3QnLCAncHJvcC10eXBlcycsICcuL1RhYmxlJywgJy4vUm93JywgJy4vQ2VsbCcsICdlbGVtZW50LXJlc2l6ZS1ldmVudCddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgncmVhY3QnKSwgcmVxdWlyZSgncHJvcC10eXBlcycpLCByZXF1aXJlKCcuL1RhYmxlJyksIHJlcXVpcmUoJy4vUm93JyksIHJlcXVpcmUoJy4vQ2VsbCcpLCByZXF1aXJlKCdlbGVtZW50LXJlc2l6ZS1ldmVudCcpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcywgZ2xvYmFsLlRhYmxlLCBnbG9iYWwuUm93LCBnbG9iYWwuQ2VsbCwgZ2xvYmFsLmVsZW1lbnRSZXNpemVFdmVudCk7XG4gICAgZ2xvYmFsLmluZGV4ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMsIF9UYWJsZSwgX1JvdywgX0NlbGwsIGVsZW1lbnRSZXNpemVFdmVudCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuQ2VsbCA9IGV4cG9ydHMuUm93ID0gZXhwb3J0cy5UYWJsZSA9IGV4cG9ydHMuU3RpY2t5VGFibGUgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICB2YXIgX1RhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYmxlKTtcblxuICB2YXIgX1JvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3cpO1xuXG4gIHZhciBfQ2VsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DZWxsKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgU3RpY2t5VGFibGUgPSBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU3RpY2t5VGFibGUsIF9QdXJlQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFN0aWNreVRhYmxlKHByb3BzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RpY2t5VGFibGUpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3RpY2t5VGFibGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdGlja3lUYWJsZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX3RoaXMuc2V0U2Nyb2xsRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxYID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWSA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBfdGhpcy5zY3JvbGxEYXRhID0ge1xuICAgICAgICAgIHNjcm9sbFRvcDogX3RoaXMueVNjcm9sbGJhci5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0OiBfdGhpcy55U2Nyb2xsYmFyLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICBjbGllbnRIZWlnaHQ6IF90aGlzLnlTY3JvbGxiYXIuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIHNjcm9sbExlZnQ6IF90aGlzLnhTY3JvbGxiYXIuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxXaWR0aDogX3RoaXMueFNjcm9sbGJhci5zY3JvbGxXaWR0aCxcbiAgICAgICAgICBjbGllbnRXaWR0aDogX3RoaXMueFNjcm9sbGJhci5jbGllbnRXaWR0aFxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25TY3JvbGxCYXJYID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnN1cHByZXNzU2Nyb2xsWCkge1xuICAgICAgICAgIF90aGlzLnNjcm9sbERhdGEuc2Nyb2xsTGVmdCA9IF90aGlzLnhXcmFwcGVyLnNjcm9sbExlZnQgPSBfdGhpcy54U2Nyb2xsYmFyLnNjcm9sbExlZnQ7XG4gICAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxYID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25TY3JvbGxCYXJZID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnN1cHByZXNzU2Nyb2xsWSkge1xuICAgICAgICAgIF90aGlzLnNjcm9sbERhdGEuc2Nyb2xsVG9wID0gX3RoaXMueVdyYXBwZXIuc2Nyb2xsVG9wID0gX3RoaXMueVNjcm9sbGJhci5zY3JvbGxUb3A7XG4gICAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxZID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25TY3JvbGxYID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IE1hdGgubWF4KF90aGlzLnhXcmFwcGVyLnNjcm9sbExlZnQsIDApO1xuICAgICAgICBfdGhpcy5zdGlja3lIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgnICsgLTEgKiBzY3JvbGxMZWZ0ICsgJ3B4LCAwKSc7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zY3JvbGxYU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnN1cHByZXNzU2Nyb2xsWCkge1xuICAgICAgICAgIF90aGlzLnNjcm9sbERhdGEuc2Nyb2xsTGVmdCA9IF90aGlzLnhTY3JvbGxiYXIuc2Nyb2xsTGVmdCA9IF90aGlzLnhXcmFwcGVyLnNjcm9sbExlZnQ7XG4gICAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxYID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2Nyb2xsWVNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5zdXBwcmVzc1Njcm9sbFkpIHtcbiAgICAgICAgICBfdGhpcy5zY3JvbGxEYXRhLnNjcm9sbFRvcCA9IF90aGlzLnlTY3JvbGxiYXIuc2Nyb2xsVG9wID0gX3RoaXMueVdyYXBwZXIuc2Nyb2xsVG9wO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gICAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxZID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uU2Nyb2xsKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25TY3JvbGwoX3RoaXMuc2Nyb2xsRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zZXRTY3JvbGxCYXJEaW1zKCk7XG4gICAgICAgIF90aGlzLnNldFNjcm9sbEJhcldyYXBwZXJEaW1zKCk7XG5cbiAgICAgICAgX3RoaXMuc2V0Um93SGVpZ2h0cygpO1xuICAgICAgICBfdGhpcy5zZXRDb2x1bW5XaWR0aHMoKTtcblxuICAgICAgICBfdGhpcy5zZXRTY3JvbGxEYXRhKCk7XG4gICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2V0U2Nyb2xsQmFyV3JhcHBlckRpbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnhTY3JvbGxiYXIuc3R5bGUud2lkdGggPSAnY2FsYygxMDAlIC0gJyArIF90aGlzLnlTY3JvbGxTaXplICsgJ3B4KSc7XG4gICAgICAgIF90aGlzLnlTY3JvbGxiYXIuc3R5bGUuaGVpZ2h0ID0gJ2NhbGMoMTAwJSAtICcgKyBfdGhpcy5zdGlja3lIZWFkZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4KSc7XG4gICAgICAgIF90aGlzLnlTY3JvbGxiYXIuc3R5bGUudG9wID0gX3RoaXMuc3RpY2t5SGVhZGVyLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApICsgJyc7XG5cbiAgICAgIF90aGlzLnJvd0NvdW50ID0gMDtcbiAgICAgIF90aGlzLmNvbHVtbkNvdW50ID0gMDtcbiAgICAgIF90aGlzLnhTY3JvbGxTaXplID0gMDtcbiAgICAgIF90aGlzLnlTY3JvbGxTaXplID0gMDtcblxuICAgICAgX3RoaXMuc3RpY2t5SGVhZGVyQ291bnQgPSBwcm9wcy5zdGlja3lIZWFkZXJDb3VudCA9PT0gMCA/IDAgOiBfdGhpcy5zdGlja3lIZWFkZXJDb3VudCB8fCAxO1xuXG4gICAgICBfdGhpcy5pc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTE7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFN0aWNreVRhYmxlLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0aWNreS10YWJsZS0nICsgdGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgICAgICB0aGlzLnJlYWxUYWJsZSA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS14LXdyYXBwZXInKS5maXJzdENoaWxkO1xuICAgICAgICAgIHRoaXMueFNjcm9sbGJhciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3gtc2Nyb2xsYmFyJyk7XG4gICAgICAgICAgdGhpcy55U2Nyb2xsYmFyID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjeS1zY3JvbGxiYXInKTtcbiAgICAgICAgICB0aGlzLnhXcmFwcGVyID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjc3RpY2t5LXRhYmxlLXgtd3JhcHBlcicpO1xuICAgICAgICAgIHRoaXMueVdyYXBwZXIgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzdGlja3ktdGFibGUteS13cmFwcGVyJyk7XG4gICAgICAgICAgdGhpcy5zdGlja3lIZWFkZXIgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzdGlja3ktdGFibGUtaGVhZGVyJyk7XG4gICAgICAgICAgdGhpcy5zdGlja3lDb2x1bW4gPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzdGlja3ktdGFibGUtY29sdW1uJyk7XG4gICAgICAgICAgdGhpcy5zdGlja3lDb3JuZXIgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzdGlja3ktdGFibGUtY29ybmVyJyk7XG4gICAgICAgICAgdGhpcy5zZXRTY3JvbGxEYXRhKCk7XG5cbiAgICAgICAgICBlbGVtZW50UmVzaXplRXZlbnQodGhpcy5yZWFsVGFibGUsIHRoaXMub25SZXNpemUpO1xuXG4gICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5vblJlc2l6ZSk7XG4gICAgICAgICAgdGhpcy5hZGRTY3JvbGxCYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgICAgICB0aGlzLnhXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxYKTtcbiAgICAgICAgICB0aGlzLnhXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsWFNjcm9sbGJhcik7XG4gICAgICAgICAgdGhpcy54U2Nyb2xsYmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxCYXJYKTtcblxuICAgICAgICAgIHRoaXMueVdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxZU2Nyb2xsYmFyKTtcbiAgICAgICAgICB0aGlzLnlTY3JvbGxiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbEJhclkpO1xuXG4gICAgICAgICAgZWxlbWVudFJlc2l6ZUV2ZW50LnVuYmluZCh0aGlzLnJlYWxUYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdhZGRTY3JvbGxCYXJFdmVudEhhbmRsZXJzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTY3JvbGxCYXJFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLnhXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxYKTtcblxuICAgICAgICAvL1ggU2Nyb2xsYmFyc1xuICAgICAgICB0aGlzLnhXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsWFNjcm9sbGJhcik7XG4gICAgICAgIHRoaXMueFNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsQmFyWCk7XG5cbiAgICAgICAgLy9ZIFNjcm9sbGJhcnNcbiAgICAgICAgdGhpcy55V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbFlTY3JvbGxiYXIpO1xuICAgICAgICB0aGlzLnlTY3JvbGxiYXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbEJhclkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NldFNjcm9sbEJhclBhZGRpbmdzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY3JvbGxCYXJQYWRkaW5ncygpIHtcbiAgICAgICAgdmFyIHNjcm9sbFBhZGRpbmcgPSAnMHB4IDBweCAnICsgdGhpcy54U2Nyb2xsU2l6ZSArICdweCAwcHgnO1xuICAgICAgICB0aGlzLnRhYmxlLnN0eWxlLnBhZGRpbmcgPSBzY3JvbGxQYWRkaW5nO1xuXG4gICAgICAgIHZhciBzY3JvbGxQYWRkaW5nID0gJzBweCAnICsgdGhpcy55U2Nyb2xsU2l6ZSArICdweCAwcHggMHB4JztcbiAgICAgICAgdGhpcy54V3JhcHBlci5maXJzdENoaWxkLnN0eWxlLnBhZGRpbmcgPSBzY3JvbGxQYWRkaW5nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NldFNjcm9sbEJhckRpbXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbEJhckRpbXMoKSB7XG4gICAgICAgIHRoaXMueFNjcm9sbFNpemUgPSB0aGlzLnhTY3JvbGxiYXIub2Zmc2V0SGVpZ2h0IC0gdGhpcy54U2Nyb2xsYmFyLmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy55U2Nyb2xsU2l6ZSA9IHRoaXMueVNjcm9sbGJhci5vZmZzZXRXaWR0aCAtIHRoaXMueVNjcm9sbGJhci5jbGllbnRXaWR0aDtcblxuICAgICAgICBpZiAoIXRoaXMuaXNGaXJlZm94KSB7XG4gICAgICAgICAgdGhpcy5zZXRTY3JvbGxCYXJQYWRkaW5ncygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5nZXRTaXplKHRoaXMucmVhbFRhYmxlLmZpcnN0Q2hpbGQpLndpZHRoO1xuICAgICAgICB0aGlzLnhTY3JvbGxiYXIuZmlyc3RDaGlsZC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcblxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5nZXRTaXplKHRoaXMucmVhbFRhYmxlKS5oZWlnaHQgKyB0aGlzLnhTY3JvbGxTaXplIC0gdGhpcy5zdGlja3lIZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLnlTY3JvbGxiYXIuZmlyc3RDaGlsZC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIGlmICh0aGlzLnhTY3JvbGxTaXplKSB0aGlzLnhTY3JvbGxiYXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy54U2Nyb2xsU2l6ZSArIDEgKyAncHgnO1xuICAgICAgICBpZiAodGhpcy55U2Nyb2xsU2l6ZSkgdGhpcy55U2Nyb2xsYmFyLnN0eWxlLndpZHRoID0gdGhpcy55U2Nyb2xsU2l6ZSArIDEgKyAncHgnO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NldFJvd0hlaWdodHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJvd0hlaWdodHMoKSB7XG4gICAgICAgIHZhciByLCBjZWxsVG9Db3B5LCBoZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RpY2t5Q29sdW1uQ291bnQpIHtcbiAgICAgICAgICBmb3IgKHIgPSAwOyByIDwgdGhpcy5yb3dDb3VudDsgcisrKSB7XG4gICAgICAgICAgICBjZWxsVG9Db3B5ID0gdGhpcy5yZWFsVGFibGUuY2hpbGROb2Rlc1tyXS5maXJzdENoaWxkO1xuXG4gICAgICAgICAgICBpZiAoY2VsbFRvQ29weSkge1xuICAgICAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldFNpemUoY2VsbFRvQ29weSkuaGVpZ2h0O1xuICAgICAgICAgICAgICB0aGlzLnN0aWNreUNvbHVtbi5maXJzdENoaWxkLmNoaWxkTm9kZXNbcl0uZmlyc3RDaGlsZC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICAgIGlmIChyID09PSAwICYmIHRoaXMuc3RpY2t5Q29ybmVyLmZpcnN0Q2hpbGQuY2hpbGROb2Rlc1tyXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2t5Q29ybmVyLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5maXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzZXRDb2x1bW5XaWR0aHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbHVtbldpZHRocygpIHtcbiAgICAgICAgdmFyIGMsIGNlbGxUb0NvcHksIGNlbGxTdHlsZSwgd2lkdGgsIGNlbGwsIHN0aWNreVdpZHRoO1xuXG4gICAgICAgIGlmICh0aGlzLnN0aWNreUhlYWRlckNvdW50KSB7XG4gICAgICAgICAgc3RpY2t5V2lkdGggPSAwO1xuXG4gICAgICAgICAgZm9yIChjID0gMDsgYyA8IHRoaXMuY29sdW1uQ291bnQ7IGMrKykge1xuICAgICAgICAgICAgY2VsbFRvQ29weSA9IHRoaXMucmVhbFRhYmxlLmZpcnN0Q2hpbGQuY2hpbGROb2Rlc1tjXTtcblxuICAgICAgICAgICAgaWYgKGNlbGxUb0NvcHkpIHtcbiAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLmdldFNpemUoY2VsbFRvQ29weSkud2lkdGg7XG5cbiAgICAgICAgICAgICAgY2VsbCA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS1oZWFkZXItY2VsbC0nICsgYyk7XG5cbiAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IHdpZHRoICsgJ3B4JztcblxuICAgICAgICAgICAgICB2YXIgZml4ZWRDb2x1bW5zSGVhZGVyID0gdGhpcy5zdGlja3lDb3JuZXIuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICBpZiAoZml4ZWRDb2x1bW5zSGVhZGVyICYmIGZpeGVkQ29sdW1uc0hlYWRlci5jaGlsZE5vZGVzW2NdKSB7XG4gICAgICAgICAgICAgICAgY2VsbCA9IGZpeGVkQ29sdW1uc0hlYWRlci5jaGlsZE5vZGVzW2NdO1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IHdpZHRoICsgJ3B4JztcblxuICAgICAgICAgICAgICAgIGNlbGwgPSBmaXhlZENvbHVtbnNIZWFkZXIuY2hpbGROb2Rlc1tjXTtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUubWluV2lkdGggPSB3aWR0aCArICdweCc7XG5cbiAgICAgICAgICAgICAgICBzdGlja3lXaWR0aCArPSB3aWR0aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3RpY2t5Q29sdW1uLmZpcnN0Q2hpbGQuc3R5bGUud2lkdGggPSBzdGlja3lXaWR0aCArICdweCc7XG4gICAgICAgICAgdGhpcy5zdGlja3lDb2x1bW4uZmlyc3RDaGlsZC5zdHlsZS5taW5XaWR0aCA9IHN0aWNreVdpZHRoICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFN0aWNreUNvbHVtbnMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0aWNreUNvbHVtbnMocm93cykge1xuICAgICAgICB2YXIgY29sdW1uc0NvdW50ID0gdGhpcy5wcm9wcy5zdGlja3lDb2x1bW5Db3VudDtcbiAgICAgICAgdmFyIGNlbGxzO1xuICAgICAgICB2YXIgc3RpY2t5Um93cyA9IFtdO1xuXG4gICAgICAgIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93LCByKSB7XG4gICAgICAgICAgY2VsbHMgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShyb3cucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICAgICAgc3RpY2t5Um93cy5wdXNoKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX1JvdzIuZGVmYXVsdCxcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCByb3cucHJvcHMsIHsgaWQ6ICcnLCBrZXk6IHIgfSksXG4gICAgICAgICAgICBjZWxscy5zbGljZSgwLCBjb2x1bW5zQ291bnQpXG4gICAgICAgICAgKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdGlja3lSb3dzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFN0aWNreUhlYWRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RpY2t5SGVhZGVyKHJvd3MpIHtcbiAgICAgICAgdmFyIHJvdyA9IHJvd3NbMF07XG4gICAgICAgIHZhciBjZWxscyA9IFtdO1xuXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvdy5wcm9wcy5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCwgYykge1xuICAgICAgICAgIGNlbGxzLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjZWxsLCB7IGlkOiAnc3RpY2t5LWhlYWRlci1jZWxsLScgKyBjLCBrZXk6IGMgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1JvdzIuZGVmYXVsdCxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgcm93LnByb3BzLCB7IGlkOiAnc3RpY2t5LWhlYWRlci1yb3cnIH0pLFxuICAgICAgICAgIGNlbGxzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U3RpY2t5Q29ybmVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGlja3lDb3JuZXIocm93cykge1xuICAgICAgICB2YXIgY29sdW1uc0NvdW50ID0gdGhpcy5wcm9wcy5zdGlja3lDb2x1bW5Db3VudDtcbiAgICAgICAgdmFyIGNlbGxzO1xuICAgICAgICB2YXIgc3RpY2t5Q29ybmVyID0gW107XG5cbiAgICAgICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIHIpIHtcbiAgICAgICAgICBpZiAociA9PT0gMCkge1xuICAgICAgICAgICAgY2VsbHMgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShyb3cucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICAgICAgICBzdGlja3lDb3JuZXIucHVzaChfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgX1JvdzIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIHJvdy5wcm9wcywgeyBpZDogJycsIGtleTogciB9KSxcbiAgICAgICAgICAgICAgY2VsbHMuc2xpY2UoMCwgY29sdW1uc0NvdW50KVxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3RpY2t5Q29ybmVyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFNpemUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNpemUobm9kZSkge1xuICAgICAgICB2YXIgd2lkdGggPSBub2RlID8gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IDA7XG4gICAgICAgIHZhciBoZWlnaHQgPSBub2RlID8gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgOiAwO1xuXG4gICAgICAgIHJldHVybiB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHJvd3MgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgdmFyIHN0aWNreUNvbHVtbiwgc3RpY2t5SGVhZGVyLCBzdGlja3lDb3JuZXI7XG5cbiAgICAgICAgdGhpcy5yb3dDb3VudCA9IHJvd3MubGVuZ3RoO1xuICAgICAgICB0aGlzLmNvbHVtbkNvdW50ID0gcm93c1swXSAmJiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShyb3dzWzBdLnByb3BzLmNoaWxkcmVuKS5sZW5ndGggfHwgMDtcblxuICAgICAgICBpZiAocm93cy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGlja3lDb2x1bW5Db3VudCA+IDAgJiYgdGhpcy5zdGlja3lIZWFkZXJDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHN0aWNreUNvcm5lciA9IHRoaXMuZ2V0U3RpY2t5Q29ybmVyKHJvd3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGlja3lDb2x1bW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgIHN0aWNreUNvbHVtbiA9IHRoaXMuZ2V0U3RpY2t5Q29sdW1ucyhyb3dzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RpY2t5SGVhZGVyQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBzdGlja3lIZWFkZXIgPSB0aGlzLmdldFN0aWNreUhlYWRlcihyb3dzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyksIGlkOiAnc3RpY2t5LXRhYmxlLScgKyB0aGlzLmlkIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgaWQ6ICd4LXNjcm9sbGJhcicgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsKVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgaWQ6ICd5LXNjcm9sbGJhcicgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsKVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc3RpY2t5LXRhYmxlLWNvcm5lcicsIGlkOiAnc3RpY2t5LXRhYmxlLWNvcm5lcicgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfVGFibGUyLmRlZmF1bHQsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIHN0aWNreUNvcm5lclxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc3RpY2t5LXRhYmxlLWhlYWRlcicsIGlkOiAnc3RpY2t5LXRhYmxlLWhlYWRlcicgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfVGFibGUyLmRlZmF1bHQsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIHN0aWNreUhlYWRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc3RpY2t5LXRhYmxlLXktd3JhcHBlcicsIGlkOiAnc3RpY2t5LXRhYmxlLXktd3JhcHBlcicgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtY29sdW1uJywgaWQ6ICdzdGlja3ktdGFibGUtY29sdW1uJyB9LFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBfVGFibGUyLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBzdGlja3lDb2x1bW5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUteC13cmFwcGVyJywgaWQ6ICdzdGlja3ktdGFibGUteC13cmFwcGVyJyB9LFxuICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBfVGFibGUyLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN0aWNreVRhYmxlO1xuICB9KF9yZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuICBTdGlja3lUYWJsZS5wcm9wVHlwZXMgPSB7XG4gICAgc3RpY2t5SGVhZGVyQ291bnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAgIHN0aWNreUNvbHVtbkNvdW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcblxuICAgIG9uU2Nyb2xsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbiAgfTtcbiAgU3RpY2t5VGFibGUuZGVmYXVsdFByb3BzID0ge1xuICAgIHN0aWNreUhlYWRlckNvdW50OiAxLFxuICAgIHN0aWNreUNvbHVtbkNvdW50OiAxXG4gIH07XG4gIGV4cG9ydHMuU3RpY2t5VGFibGUgPSBTdGlja3lUYWJsZTtcbiAgZXhwb3J0cy5UYWJsZSA9IF9UYWJsZTIuZGVmYXVsdDtcbiAgZXhwb3J0cy5Sb3cgPSBfUm93Mi5kZWZhdWx0O1xuICBleHBvcnRzLkNlbGwgPSBfQ2VsbDIuZGVmYXVsdDtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnLCAncmVhY3QnLCAncmVhY3QtZG9tJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdyZWFjdC1kb20nKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5yZWFjdERvbSk7XG4gICAgZ2xvYmFsLmluZGV4ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9yZWFjdERvbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICB9O1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgIGlmICghc2VsZikge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICB9XG5cbiAgdmFyIFRhYmxlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVGFibGUsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVGFibGUoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFibGUpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRhYmxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGFibGUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGFibGUsIFt7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS1jb250YWluZXIgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJykgfSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUYWJsZTtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBleHBvcnRzLmRlZmF1bHQgPSBUYWJsZTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnLCAncmVhY3QnLCAncmVhY3QtZG9tJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdyZWFjdC1kb20nKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5yZWFjdERvbSk7XG4gICAgZ2xvYmFsLmluZGV4ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9yZWFjdERvbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICB9O1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgIGlmICghc2VsZikge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICB9XG5cbiAgdmFyIFJvdyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJvdywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSb3coKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm93KTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSb3cuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSb3cpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUm93LCBbe1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtcm93ICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpIH0pLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUm93O1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIGV4cG9ydHMuZGVmYXVsdCA9IFJvdztcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnLCAncmVhY3QnLCAncmVhY3QtZG9tJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdyZWFjdC1kb20nKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5yZWFjdERvbSk7XG4gICAgZ2xvYmFsLmluZGV4ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9yZWFjdERvbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICB9O1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgIGlmICghc2VsZikge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICB9XG5cbiAgdmFyIENlbGwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDZWxsLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENlbGwoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2VsbCk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2VsbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENlbGwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2VsbCwgW3tcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAnc3RpY2t5LXRhYmxlLWNlbGwgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJykgfSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDZWxsO1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIGV4cG9ydHMuZGVmYXVsdCA9IENlbGw7XG59KTsiLCJ2YXIgcmVxdWVzdEZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdpbmRvdyA9IHRoaXNcbiAgdmFyIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uIGZhbGxiYWNrUkFGKGZ1bmMpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuc2V0VGltZW91dChmdW5jLCAyMClcbiAgICB9XG4gIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0RnJhbWVGdW5jdGlvbihmdW5jKSB7XG4gICAgcmV0dXJuIHJhZihmdW5jKVxuICB9XG59KSgpXG5cbnZhciBjYW5jZWxGcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB3aW5kb3cgPSB0aGlzXG4gIHZhciBjYW5jZWwgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0XG4gIHJldHVybiBmdW5jdGlvbiBjYW5jZWxGcmFtZUZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNhbmNlbChpZClcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiByZXNpemVMaXN0ZW5lcihlKSB7XG4gIHZhciB3aW4gPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnRcbiAgaWYgKHdpbi5fX3Jlc2l6ZVJBRl9fKSB7XG4gICAgY2FuY2VsRnJhbWUod2luLl9fcmVzaXplUkFGX18pXG4gIH1cbiAgd2luLl9fcmVzaXplUkFGX18gPSByZXF1ZXN0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0cmlnZ2VyID0gd2luLl9fcmVzaXplVHJpZ2dlcl9fXG4gICAgdHJpZ2dlci5fX3Jlc2l6ZUxpc3RlbmVyc19fLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICBmbi5jYWxsKHRyaWdnZXIsIGUpXG4gICAgfSlcbiAgfSlcbn1cblxudmFyIGV4cG9ydHMgPSBmdW5jdGlvbiBleHBvcnRzKGVsZW1lbnQsIGZuKSB7XG4gIHZhciB3aW5kb3cgPSB0aGlzXG4gIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudFxuICB2YXIgaXNJRVxuXG4gIHZhciBhdHRhY2hFdmVudCA9IGRvY3VtZW50LmF0dGFjaEV2ZW50XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LykgfHxcbiAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2UvKVxuICB9XG5cbiAgZnVuY3Rpb24gb2JqZWN0TG9hZCgpIHtcbiAgICB0aGlzLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5fX3Jlc2l6ZVRyaWdnZXJfXyA9IHRoaXMuX19yZXNpemVFbGVtZW50X19cbiAgICB0aGlzLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcilcbiAgfVxuXG4gIGlmICghZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fKSB7XG4gICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fID0gW11cbiAgICBpZiAoYXR0YWNoRXZlbnQpIHtcbiAgICAgIGVsZW1lbnQuX19yZXNpemVUcmlnZ2VyX18gPSBlbGVtZW50XG4gICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbnJlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICAgIH1cbiAgICAgIHZhciBvYmogPSAoZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpKVxuICAgICAgb2JqLnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOyBvcGFjaXR5OiAwOydcbiAgICAgIClcbiAgICAgIG9iai5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Jlc2l6ZS1zZW5zb3InKVxuICAgICAgb2JqLl9fcmVzaXplRWxlbWVudF9fID0gZWxlbWVudFxuICAgICAgb2JqLm9ubG9hZCA9IG9iamVjdExvYWRcbiAgICAgIG9iai50eXBlID0gJ3RleHQvaHRtbCdcbiAgICAgIGlmIChpc0lFKSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKVxuICAgICAgfVxuICAgICAgb2JqLmRhdGEgPSAnYWJvdXQ6YmxhbmsnXG4gICAgICBpZiAoIWlzSUUpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvYmopXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5wdXNoKGZuKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZXhwb3J0cyA6IGV4cG9ydHMuYmluZCh3aW5kb3cpXG5cbm1vZHVsZS5leHBvcnRzLnVuYmluZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBmbikge1xuICB2YXIgYXR0YWNoRXZlbnQgPSBkb2N1bWVudC5hdHRhY2hFdmVudFxuICBpZiAoZm4pIHtcbiAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18uc3BsaWNlKFxuICAgICAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmluZGV4T2YoZm4pLFxuICAgICAgMVxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18gPSBbXVxuICB9XG4gIGlmICghZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLmxlbmd0aCkge1xuICAgIGlmIChhdHRhY2hFdmVudCkge1xuICAgICAgZWxlbWVudC5kZXRhY2hFdmVudCgnb25yZXNpemUnLCByZXNpemVMaXN0ZW5lcilcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXy5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgIHJlc2l6ZUxpc3RlbmVyXG4gICAgICApXG4gICAgICBkZWxldGUgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXy5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcuX19yZXNpemVUcmlnZ2VyX19cbiAgICAgIGVsZW1lbnQuX19yZXNpemVUcmlnZ2VyX18gPSAhZWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfX1xuICAgICAgKVxuICAgIH1cbiAgICBkZWxldGUgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fXG4gIH1cbn1cbiIsInZhciBtb21lbnQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL21vbWVudC10aW1lem9uZVwiKTtcbm1vbWVudC50ei5sb2FkKHJlcXVpcmUoJy4vZGF0YS9wYWNrZWQvbGF0ZXN0Lmpzb24nKSk7XG4iLCIvLyEgbW9tZW50LXRpbWV6b25lLmpzXG4vLyEgdmVyc2lvbiA6IDAuNS4yMVxuLy8hIENvcHlyaWdodCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4vLyEgbGljZW5zZSA6IE1JVFxuLy8hIGdpdGh1Yi5jb20vbW9tZW50L21vbWVudC10aW1lem9uZVxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0LypnbG9iYWwgZGVmaW5lKi9cblx0aWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ21vbWVudCcpKTsgLy8gTm9kZVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbJ21vbWVudCddLCBmYWN0b3J5KTsgICAgICAgICAgICAgICAgIC8vIEFNRFxuXHR9IGVsc2Uge1xuXHRcdGZhY3Rvcnkocm9vdC5tb21lbnQpOyAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJyb3dzZXJcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAobW9tZW50KSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdC8vIERvIG5vdCBsb2FkIG1vbWVudC10aW1lem9uZSBhIHNlY29uZCB0aW1lLlxuXHQvLyBpZiAobW9tZW50LnR6ICE9PSB1bmRlZmluZWQpIHtcblx0Ly8gXHRsb2dFcnJvcignTW9tZW50IFRpbWV6b25lICcgKyBtb21lbnQudHoudmVyc2lvbiArICcgd2FzIGFscmVhZHkgbG9hZGVkICcgKyAobW9tZW50LnR6LmRhdGFWZXJzaW9uID8gJ3dpdGggZGF0YSBmcm9tICcgOiAnd2l0aG91dCBhbnkgZGF0YScpICsgbW9tZW50LnR6LmRhdGFWZXJzaW9uKTtcblx0Ly8gXHRyZXR1cm4gbW9tZW50O1xuXHQvLyB9XG5cblx0dmFyIFZFUlNJT04gPSBcIjAuNS4yMVwiLFxuXHRcdHpvbmVzID0ge30sXG5cdFx0bGlua3MgPSB7fSxcblx0XHRuYW1lcyA9IHt9LFxuXHRcdGd1ZXNzZXMgPSB7fSxcblx0XHRjYWNoZWRHdWVzcztcblxuXHRpZiAoIW1vbWVudCB8fCB0eXBlb2YgbW9tZW50LnZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG5cdFx0bG9nRXJyb3IoJ01vbWVudCBUaW1lem9uZSByZXF1aXJlcyBNb21lbnQuanMuIFNlZSBodHRwczovL21vbWVudGpzLmNvbS90aW1lem9uZS9kb2NzLyMvdXNlLWl0L2Jyb3dzZXIvJyk7XG5cdH1cblxuXHR2YXIgbW9tZW50VmVyc2lvbiA9IG1vbWVudC52ZXJzaW9uLnNwbGl0KCcuJyksXG5cdFx0bWFqb3IgPSArbW9tZW50VmVyc2lvblswXSxcblx0XHRtaW5vciA9ICttb21lbnRWZXJzaW9uWzFdO1xuXG5cdC8vIE1vbWVudC5qcyB2ZXJzaW9uIGNoZWNrXG5cdGlmIChtYWpvciA8IDIgfHwgKG1ham9yID09PSAyICYmIG1pbm9yIDwgNikpIHtcblx0XHRsb2dFcnJvcignTW9tZW50IFRpbWV6b25lIHJlcXVpcmVzIE1vbWVudC5qcyA+PSAyLjYuMC4gWW91IGFyZSB1c2luZyBNb21lbnQuanMgJyArIG1vbWVudC52ZXJzaW9uICsgJy4gU2VlIG1vbWVudGpzLmNvbScpO1xuXHR9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFVucGFja2luZ1xuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gY2hhckNvZGVUb0ludChjaGFyQ29kZSkge1xuXHRcdGlmIChjaGFyQ29kZSA+IDk2KSB7XG5cdFx0XHRyZXR1cm4gY2hhckNvZGUgLSA4Nztcblx0XHR9IGVsc2UgaWYgKGNoYXJDb2RlID4gNjQpIHtcblx0XHRcdHJldHVybiBjaGFyQ29kZSAtIDI5O1xuXHRcdH1cblx0XHRyZXR1cm4gY2hhckNvZGUgLSA0ODtcblx0fVxuXG5cdGZ1bmN0aW9uIHVucGFja0Jhc2U2MChzdHJpbmcpIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRwYXJ0cyA9IHN0cmluZy5zcGxpdCgnLicpLFxuXHRcdFx0d2hvbGUgPSBwYXJ0c1swXSxcblx0XHRcdGZyYWN0aW9uYWwgPSBwYXJ0c1sxXSB8fCAnJyxcblx0XHRcdG11bHRpcGxpZXIgPSAxLFxuXHRcdFx0bnVtLFxuXHRcdFx0b3V0ID0gMCxcblx0XHRcdHNpZ24gPSAxO1xuXG5cdFx0Ly8gaGFuZGxlIG5lZ2F0aXZlIG51bWJlcnNcblx0XHRpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ1KSB7XG5cdFx0XHRpID0gMTtcblx0XHRcdHNpZ24gPSAtMTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgZGlnaXRzIGJlZm9yZSB0aGUgZGVjaW1hbFxuXHRcdGZvciAoaTsgaSA8IHdob2xlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRudW0gPSBjaGFyQ29kZVRvSW50KHdob2xlLmNoYXJDb2RlQXQoaSkpO1xuXHRcdFx0b3V0ID0gNjAgKiBvdXQgKyBudW07XG5cdFx0fVxuXG5cdFx0Ly8gaGFuZGxlIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbFxuXHRcdGZvciAoaSA9IDA7IGkgPCBmcmFjdGlvbmFsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRtdWx0aXBsaWVyID0gbXVsdGlwbGllciAvIDYwO1xuXHRcdFx0bnVtID0gY2hhckNvZGVUb0ludChmcmFjdGlvbmFsLmNoYXJDb2RlQXQoaSkpO1xuXHRcdFx0b3V0ICs9IG51bSAqIG11bHRpcGxpZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dCAqIHNpZ247XG5cdH1cblxuXHRmdW5jdGlvbiBhcnJheVRvSW50IChhcnJheSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFycmF5W2ldID0gdW5wYWNrQmFzZTYwKGFycmF5W2ldKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBpbnRUb1VudGlsIChhcnJheSwgbGVuZ3RoKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0YXJyYXlbaV0gPSBNYXRoLnJvdW5kKChhcnJheVtpIC0gMV0gfHwgMCkgKyAoYXJyYXlbaV0gKiA2MDAwMCkpOyAvLyBtaW51dGVzIHRvIG1pbGxpc2Vjb25kc1xuXHRcdH1cblxuXHRcdGFycmF5W2xlbmd0aCAtIDFdID0gSW5maW5pdHk7XG5cdH1cblxuXHRmdW5jdGlvbiBtYXBJbmRpY2VzIChzb3VyY2UsIGluZGljZXMpIHtcblx0XHR2YXIgb3V0ID0gW10sIGk7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0b3V0W2ldID0gc291cmNlW2luZGljZXNbaV1dO1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHRmdW5jdGlvbiB1bnBhY2sgKHN0cmluZykge1xuXHRcdHZhciBkYXRhID0gc3RyaW5nLnNwbGl0KCd8JyksXG5cdFx0XHRvZmZzZXRzID0gZGF0YVsyXS5zcGxpdCgnICcpLFxuXHRcdFx0aW5kaWNlcyA9IGRhdGFbM10uc3BsaXQoJycpLFxuXHRcdFx0dW50aWxzICA9IGRhdGFbNF0uc3BsaXQoJyAnKTtcblxuXHRcdGFycmF5VG9JbnQob2Zmc2V0cyk7XG5cdFx0YXJyYXlUb0ludChpbmRpY2VzKTtcblx0XHRhcnJheVRvSW50KHVudGlscyk7XG5cblx0XHRpbnRUb1VudGlsKHVudGlscywgaW5kaWNlcy5sZW5ndGgpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWUgICAgICAgOiBkYXRhWzBdLFxuXHRcdFx0YWJicnMgICAgICA6IG1hcEluZGljZXMoZGF0YVsxXS5zcGxpdCgnICcpLCBpbmRpY2VzKSxcblx0XHRcdG9mZnNldHMgICAgOiBtYXBJbmRpY2VzKG9mZnNldHMsIGluZGljZXMpLFxuXHRcdFx0dW50aWxzICAgICA6IHVudGlscyxcblx0XHRcdHBvcHVsYXRpb24gOiBkYXRhWzVdIHwgMFxuXHRcdH07XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0Wm9uZSBvYmplY3Rcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIFpvbmUgKHBhY2tlZFN0cmluZykge1xuXHRcdGlmIChwYWNrZWRTdHJpbmcpIHtcblx0XHRcdHRoaXMuX3NldCh1bnBhY2socGFja2VkU3RyaW5nKSk7XG5cdFx0fVxuXHR9XG5cblx0Wm9uZS5wcm90b3R5cGUgPSB7XG5cdFx0X3NldCA6IGZ1bmN0aW9uICh1bnBhY2tlZCkge1xuXHRcdFx0dGhpcy5uYW1lICAgICAgID0gdW5wYWNrZWQubmFtZTtcblx0XHRcdHRoaXMuYWJicnMgICAgICA9IHVucGFja2VkLmFiYnJzO1xuXHRcdFx0dGhpcy51bnRpbHMgICAgID0gdW5wYWNrZWQudW50aWxzO1xuXHRcdFx0dGhpcy5vZmZzZXRzICAgID0gdW5wYWNrZWQub2Zmc2V0cztcblx0XHRcdHRoaXMucG9wdWxhdGlvbiA9IHVucGFja2VkLnBvcHVsYXRpb247XG5cdFx0fSxcblxuXHRcdF9pbmRleCA6IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcblx0XHRcdHZhciB0YXJnZXQgPSArdGltZXN0YW1wLFxuXHRcdFx0XHR1bnRpbHMgPSB0aGlzLnVudGlscyxcblx0XHRcdFx0aTtcblxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHVudGlscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGFyZ2V0IDwgdW50aWxzW2ldKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cGFyc2UgOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG5cdFx0XHR2YXIgdGFyZ2V0ICA9ICt0aW1lc3RhbXAsXG5cdFx0XHRcdG9mZnNldHMgPSB0aGlzLm9mZnNldHMsXG5cdFx0XHRcdHVudGlscyAgPSB0aGlzLnVudGlscyxcblx0XHRcdFx0bWF4ICAgICA9IHVudGlscy5sZW5ndGggLSAxLFxuXHRcdFx0XHRvZmZzZXQsIG9mZnNldE5leHQsIG9mZnNldFByZXYsIGk7XG5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuXHRcdFx0XHRvZmZzZXQgICAgID0gb2Zmc2V0c1tpXTtcblx0XHRcdFx0b2Zmc2V0TmV4dCA9IG9mZnNldHNbaSArIDFdO1xuXHRcdFx0XHRvZmZzZXRQcmV2ID0gb2Zmc2V0c1tpID8gaSAtIDEgOiBpXTtcblxuXHRcdFx0XHRpZiAob2Zmc2V0IDwgb2Zmc2V0TmV4dCAmJiB0ei5tb3ZlQW1iaWd1b3VzRm9yd2FyZCkge1xuXHRcdFx0XHRcdG9mZnNldCA9IG9mZnNldE5leHQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAob2Zmc2V0ID4gb2Zmc2V0UHJldiAmJiB0ei5tb3ZlSW52YWxpZEZvcndhcmQpIHtcblx0XHRcdFx0XHRvZmZzZXQgPSBvZmZzZXRQcmV2O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRhcmdldCA8IHVudGlsc1tpXSAtIChvZmZzZXQgKiA2MDAwMCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb2Zmc2V0c1tpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2Zmc2V0c1ttYXhdO1xuXHRcdH0sXG5cblx0XHRhYmJyIDogZnVuY3Rpb24gKG1vbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWJicnNbdGhpcy5faW5kZXgobW9tKV07XG5cdFx0fSxcblxuXHRcdG9mZnNldCA6IGZ1bmN0aW9uIChtb20pIHtcblx0XHRcdGxvZ0Vycm9yKFwiem9uZS5vZmZzZXQgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiB6b25lLnV0Y09mZnNldFwiKTtcblx0XHRcdHJldHVybiB0aGlzLm9mZnNldHNbdGhpcy5faW5kZXgobW9tKV07XG5cdFx0fSxcblxuXHRcdHV0Y09mZnNldCA6IGZ1bmN0aW9uIChtb20pIHtcblx0XHRcdHJldHVybiB0aGlzLm9mZnNldHNbdGhpcy5faW5kZXgobW9tKV07XG5cdFx0fVxuXHR9O1xuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRDdXJyZW50IFRpbWV6b25lXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRmdW5jdGlvbiBPZmZzZXRBdChhdCkge1xuXHRcdHZhciB0aW1lU3RyaW5nID0gYXQudG9UaW1lU3RyaW5nKCk7XG5cdFx0dmFyIGFiYnIgPSB0aW1lU3RyaW5nLm1hdGNoKC9cXChbYS16IF0rXFwpL2kpO1xuXHRcdGlmIChhYmJyICYmIGFiYnJbMF0pIHtcblx0XHRcdC8vIDE3OjU2OjMxIEdNVC0wNjAwIChDU1QpXG5cdFx0XHQvLyAxNzo1NjozMSBHTVQtMDYwMCAoQ2VudHJhbCBTdGFuZGFyZCBUaW1lKVxuXHRcdFx0YWJiciA9IGFiYnJbMF0ubWF0Y2goL1tBLVpdL2cpO1xuXHRcdFx0YWJiciA9IGFiYnIgPyBhYmJyLmpvaW4oJycpIDogdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyAxNzo1NjozMSBDU1Rcblx0XHRcdC8vIDE3OjU2OjMxIEdNVCswODAwICjlj7DljJfmqJnmupbmmYLplpMpXG5cdFx0XHRhYmJyID0gdGltZVN0cmluZy5tYXRjaCgvW0EtWl17Myw1fS9nKTtcblx0XHRcdGFiYnIgPSBhYmJyID8gYWJiclswXSA6IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiAoYWJiciA9PT0gJ0dNVCcpIHtcblx0XHRcdGFiYnIgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5hdCA9ICthdDtcblx0XHR0aGlzLmFiYnIgPSBhYmJyO1xuXHRcdHRoaXMub2Zmc2V0ID0gYXQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIFpvbmVTY29yZSh6b25lKSB7XG5cdFx0dGhpcy56b25lID0gem9uZTtcblx0XHR0aGlzLm9mZnNldFNjb3JlID0gMDtcblx0XHR0aGlzLmFiYnJTY29yZSA9IDA7XG5cdH1cblxuXHRab25lU2NvcmUucHJvdG90eXBlLnNjb3JlT2Zmc2V0QXQgPSBmdW5jdGlvbiAob2Zmc2V0QXQpIHtcblx0XHR0aGlzLm9mZnNldFNjb3JlICs9IE1hdGguYWJzKHRoaXMuem9uZS51dGNPZmZzZXQob2Zmc2V0QXQuYXQpIC0gb2Zmc2V0QXQub2Zmc2V0KTtcblx0XHRpZiAodGhpcy56b25lLmFiYnIob2Zmc2V0QXQuYXQpLnJlcGxhY2UoL1teQS1aXS9nLCAnJykgIT09IG9mZnNldEF0LmFiYnIpIHtcblx0XHRcdHRoaXMuYWJiclNjb3JlKys7XG5cdFx0fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGZpbmRDaGFuZ2UobG93LCBoaWdoKSB7XG5cdFx0dmFyIG1pZCwgZGlmZjtcblxuXHRcdHdoaWxlICgoZGlmZiA9ICgoaGlnaC5hdCAtIGxvdy5hdCkgLyAxMmU0IHwgMCkgKiA2ZTQpKSB7XG5cdFx0XHRtaWQgPSBuZXcgT2Zmc2V0QXQobmV3IERhdGUobG93LmF0ICsgZGlmZikpO1xuXHRcdFx0aWYgKG1pZC5vZmZzZXQgPT09IGxvdy5vZmZzZXQpIHtcblx0XHRcdFx0bG93ID0gbWlkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGlnaCA9IG1pZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbG93O1xuXHR9XG5cblx0ZnVuY3Rpb24gdXNlck9mZnNldHMoKSB7XG5cdFx0dmFyIHN0YXJ0WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIsXG5cdFx0XHRsYXN0ID0gbmV3IE9mZnNldEF0KG5ldyBEYXRlKHN0YXJ0WWVhciwgMCwgMSkpLFxuXHRcdFx0b2Zmc2V0cyA9IFtsYXN0XSxcblx0XHRcdGNoYW5nZSwgbmV4dCwgaTtcblxuXHRcdGZvciAoaSA9IDE7IGkgPCA0ODsgaSsrKSB7XG5cdFx0XHRuZXh0ID0gbmV3IE9mZnNldEF0KG5ldyBEYXRlKHN0YXJ0WWVhciwgaSwgMSkpO1xuXHRcdFx0aWYgKG5leHQub2Zmc2V0ICE9PSBsYXN0Lm9mZnNldCkge1xuXHRcdFx0XHRjaGFuZ2UgPSBmaW5kQ2hhbmdlKGxhc3QsIG5leHQpO1xuXHRcdFx0XHRvZmZzZXRzLnB1c2goY2hhbmdlKTtcblx0XHRcdFx0b2Zmc2V0cy5wdXNoKG5ldyBPZmZzZXRBdChuZXcgRGF0ZShjaGFuZ2UuYXQgKyA2ZTQpKSk7XG5cdFx0XHR9XG5cdFx0XHRsYXN0ID0gbmV4dDtcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRvZmZzZXRzLnB1c2gobmV3IE9mZnNldEF0KG5ldyBEYXRlKHN0YXJ0WWVhciArIGksIDAsIDEpKSk7XG5cdFx0XHRvZmZzZXRzLnB1c2gobmV3IE9mZnNldEF0KG5ldyBEYXRlKHN0YXJ0WWVhciArIGksIDYsIDEpKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9mZnNldHM7XG5cdH1cblxuXHRmdW5jdGlvbiBzb3J0Wm9uZVNjb3JlcyAoYSwgYikge1xuXHRcdGlmIChhLm9mZnNldFNjb3JlICE9PSBiLm9mZnNldFNjb3JlKSB7XG5cdFx0XHRyZXR1cm4gYS5vZmZzZXRTY29yZSAtIGIub2Zmc2V0U2NvcmU7XG5cdFx0fVxuXHRcdGlmIChhLmFiYnJTY29yZSAhPT0gYi5hYmJyU2NvcmUpIHtcblx0XHRcdHJldHVybiBhLmFiYnJTY29yZSAtIGIuYWJiclNjb3JlO1xuXHRcdH1cblx0XHRyZXR1cm4gYi56b25lLnBvcHVsYXRpb24gLSBhLnpvbmUucG9wdWxhdGlvbjtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFRvR3Vlc3NlcyAobmFtZSwgb2Zmc2V0cykge1xuXHRcdHZhciBpLCBvZmZzZXQ7XG5cdFx0YXJyYXlUb0ludChvZmZzZXRzKTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgb2Zmc2V0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0b2Zmc2V0ID0gb2Zmc2V0c1tpXTtcblx0XHRcdGd1ZXNzZXNbb2Zmc2V0XSA9IGd1ZXNzZXNbb2Zmc2V0XSB8fCB7fTtcblx0XHRcdGd1ZXNzZXNbb2Zmc2V0XVtuYW1lXSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ3Vlc3Nlc0ZvclVzZXJPZmZzZXRzIChvZmZzZXRzKSB7XG5cdFx0dmFyIG9mZnNldHNMZW5ndGggPSBvZmZzZXRzLmxlbmd0aCxcblx0XHRcdGZpbHRlcmVkR3Vlc3NlcyA9IHt9LFxuXHRcdFx0b3V0ID0gW10sXG5cdFx0XHRpLCBqLCBndWVzc2VzT2Zmc2V0O1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IG9mZnNldHNMZW5ndGg7IGkrKykge1xuXHRcdFx0Z3Vlc3Nlc09mZnNldCA9IGd1ZXNzZXNbb2Zmc2V0c1tpXS5vZmZzZXRdIHx8IHt9O1xuXHRcdFx0Zm9yIChqIGluIGd1ZXNzZXNPZmZzZXQpIHtcblx0XHRcdFx0aWYgKGd1ZXNzZXNPZmZzZXQuaGFzT3duUHJvcGVydHkoaikpIHtcblx0XHRcdFx0XHRmaWx0ZXJlZEd1ZXNzZXNbal0gPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIGZpbHRlcmVkR3Vlc3Nlcykge1xuXHRcdFx0aWYgKGZpbHRlcmVkR3Vlc3Nlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRvdXQucHVzaChuYW1lc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlYnVpbGRHdWVzcyAoKSB7XG5cblx0XHQvLyB1c2UgSW50bCBBUEkgd2hlbiBhdmFpbGFibGUgYW5kIHJldHVybmluZyB2YWxpZCB0aW1lIHpvbmVcblx0XHR0cnkge1xuXHRcdFx0dmFyIGludGxOYW1lID0gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuXHRcdFx0aWYgKGludGxOYW1lICYmIGludGxOYW1lLmxlbmd0aCA+IDMpIHtcblx0XHRcdFx0dmFyIG5hbWUgPSBuYW1lc1tub3JtYWxpemVOYW1lKGludGxOYW1lKV07XG5cdFx0XHRcdGlmIChuYW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9nRXJyb3IoXCJNb21lbnQgVGltZXpvbmUgZm91bmQgXCIgKyBpbnRsTmFtZSArIFwiIGZyb20gdGhlIEludGwgYXBpLCBidXQgZGlkIG5vdCBoYXZlIHRoYXQgZGF0YSBsb2FkZWQuXCIpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIEludGwgdW5hdmFpbGFibGUsIGZhbGwgYmFjayB0byBtYW51YWwgZ3Vlc3NpbmcuXG5cdFx0fVxuXG5cdFx0dmFyIG9mZnNldHMgPSB1c2VyT2Zmc2V0cygpLFxuXHRcdFx0b2Zmc2V0c0xlbmd0aCA9IG9mZnNldHMubGVuZ3RoLFxuXHRcdFx0Z3Vlc3NlcyA9IGd1ZXNzZXNGb3JVc2VyT2Zmc2V0cyhvZmZzZXRzKSxcblx0XHRcdHpvbmVTY29yZXMgPSBbXSxcblx0XHRcdHpvbmVTY29yZSwgaSwgajtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBndWVzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR6b25lU2NvcmUgPSBuZXcgWm9uZVNjb3JlKGdldFpvbmUoZ3Vlc3Nlc1tpXSksIG9mZnNldHNMZW5ndGgpO1xuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG9mZnNldHNMZW5ndGg7IGorKykge1xuXHRcdFx0XHR6b25lU2NvcmUuc2NvcmVPZmZzZXRBdChvZmZzZXRzW2pdKTtcblx0XHRcdH1cblx0XHRcdHpvbmVTY29yZXMucHVzaCh6b25lU2NvcmUpO1xuXHRcdH1cblxuXHRcdHpvbmVTY29yZXMuc29ydChzb3J0Wm9uZVNjb3Jlcyk7XG5cblx0XHRyZXR1cm4gem9uZVNjb3Jlcy5sZW5ndGggPiAwID8gem9uZVNjb3Jlc1swXS56b25lLm5hbWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBndWVzcyAoaWdub3JlQ2FjaGUpIHtcblx0XHRpZiAoIWNhY2hlZEd1ZXNzIHx8IGlnbm9yZUNhY2hlKSB7XG5cdFx0XHRjYWNoZWRHdWVzcyA9IHJlYnVpbGRHdWVzcygpO1xuXHRcdH1cblx0XHRyZXR1cm4gY2FjaGVkR3Vlc3M7XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0R2xvYmFsIE1ldGhvZHNcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUgKG5hbWUpIHtcblx0XHRyZXR1cm4gKG5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwvL2csICdfJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRab25lIChwYWNrZWQpIHtcblx0XHR2YXIgaSwgbmFtZSwgc3BsaXQsIG5vcm1hbGl6ZWQ7XG5cblx0XHRpZiAodHlwZW9mIHBhY2tlZCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cGFja2VkID0gW3BhY2tlZF07XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHBhY2tlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0c3BsaXQgPSBwYWNrZWRbaV0uc3BsaXQoJ3wnKTtcblx0XHRcdG5hbWUgPSBzcGxpdFswXTtcblx0XHRcdG5vcm1hbGl6ZWQgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuXHRcdFx0em9uZXNbbm9ybWFsaXplZF0gPSBwYWNrZWRbaV07XG5cdFx0XHRuYW1lc1tub3JtYWxpemVkXSA9IG5hbWU7XG5cdFx0XHRhZGRUb0d1ZXNzZXMobm9ybWFsaXplZCwgc3BsaXRbMl0uc3BsaXQoJyAnKSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Wm9uZSAobmFtZSwgY2FsbGVyKSB7XG5cdFx0XG5cdFx0bmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG5cblx0XHR2YXIgem9uZSA9IHpvbmVzW25hbWVdO1xuXHRcdHZhciBsaW5rO1xuXG5cdFx0aWYgKHpvbmUgaW5zdGFuY2VvZiBab25lKSB7XG5cdFx0XHRyZXR1cm4gem9uZTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHpvbmUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR6b25lID0gbmV3IFpvbmUoem9uZSk7XG5cdFx0XHR6b25lc1tuYW1lXSA9IHpvbmU7XG5cdFx0XHRyZXR1cm4gem9uZTtcblx0XHR9XG5cblx0XHQvLyBQYXNzIGdldFpvbmUgdG8gcHJldmVudCByZWN1cnNpb24gbW9yZSB0aGFuIDEgbGV2ZWwgZGVlcFxuXHRcdGlmIChsaW5rc1tuYW1lXSAmJiBjYWxsZXIgIT09IGdldFpvbmUgJiYgKGxpbmsgPSBnZXRab25lKGxpbmtzW25hbWVdLCBnZXRab25lKSkpIHtcblx0XHRcdHpvbmUgPSB6b25lc1tuYW1lXSA9IG5ldyBab25lKCk7XG5cdFx0XHR6b25lLl9zZXQobGluayk7XG5cdFx0XHR6b25lLm5hbWUgPSBuYW1lc1tuYW1lXTtcblx0XHRcdHJldHVybiB6b25lO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TmFtZXMgKCkge1xuXHRcdHZhciBpLCBvdXQgPSBbXTtcblxuXHRcdGZvciAoaSBpbiBuYW1lcykge1xuXHRcdFx0aWYgKG5hbWVzLmhhc093blByb3BlcnR5KGkpICYmICh6b25lc1tpXSB8fCB6b25lc1tsaW5rc1tpXV0pICYmIG5hbWVzW2ldKSB7XG5cdFx0XHRcdG91dC5wdXNoKG5hbWVzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0LnNvcnQoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZExpbmsgKGFsaWFzZXMpIHtcblx0XHR2YXIgaSwgYWxpYXMsIG5vcm1hbDAsIG5vcm1hbDE7XG5cblx0XHRpZiAodHlwZW9mIGFsaWFzZXMgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGFsaWFzZXMgPSBbYWxpYXNlc107XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGFsaWFzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFsaWFzID0gYWxpYXNlc1tpXS5zcGxpdCgnfCcpO1xuXG5cdFx0XHRub3JtYWwwID0gbm9ybWFsaXplTmFtZShhbGlhc1swXSk7XG5cdFx0XHRub3JtYWwxID0gbm9ybWFsaXplTmFtZShhbGlhc1sxXSk7XG5cblx0XHRcdGxpbmtzW25vcm1hbDBdID0gbm9ybWFsMTtcblx0XHRcdG5hbWVzW25vcm1hbDBdID0gYWxpYXNbMF07XG5cblx0XHRcdGxpbmtzW25vcm1hbDFdID0gbm9ybWFsMDtcblx0XHRcdG5hbWVzW25vcm1hbDFdID0gYWxpYXNbMV07XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZERhdGEgKGRhdGEpIHtcblx0XHRhZGRab25lKGRhdGEuem9uZXMpO1xuXHRcdGFkZExpbmsoZGF0YS5saW5rcyk7XG5cdFx0dHouZGF0YVZlcnNpb24gPSBkYXRhLnZlcnNpb247XG5cdH1cblxuXHRmdW5jdGlvbiB6b25lRXhpc3RzIChuYW1lKSB7XG5cdFx0aWYgKCF6b25lRXhpc3RzLmRpZFNob3dFcnJvcikge1xuXHRcdFx0em9uZUV4aXN0cy5kaWRTaG93RXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRsb2dFcnJvcihcIm1vbWVudC50ei56b25lRXhpc3RzKCdcIiArIG5hbWUgKyBcIicpIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgIW1vbWVudC50ei56b25lKCdcIiArIG5hbWUgKyBcIicpXCIpO1xuXHRcdH1cblx0XHRyZXR1cm4gISFnZXRab25lKG5hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gbmVlZHNPZmZzZXQgKG0pIHtcblx0XHR2YXIgaXNVbml4VGltZXN0YW1wID0gKG0uX2YgPT09ICdYJyB8fCBtLl9mID09PSAneCcpO1xuXHRcdHJldHVybiAhIShtLl9hICYmIChtLl90em0gPT09IHVuZGVmaW5lZCkgJiYgIWlzVW5peFRpbWVzdGFtcCk7XG5cdH1cblxuXHRmdW5jdGlvbiBsb2dFcnJvciAobWVzc2FnZSkge1xuXHRcdGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdG1vbWVudC50eiBuYW1lc3BhY2Vcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIHR6IChpbnB1dCkge1xuXHRcdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCAtMSksXG5cdFx0XHRuYW1lID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSxcblx0XHRcdHpvbmUgPSBnZXRab25lKG5hbWUpLFxuXHRcdFx0b3V0ICA9IG1vbWVudC51dGMuYXBwbHkobnVsbCwgYXJncyk7XG5cblx0XHRpZiAoem9uZSAmJiAhbW9tZW50LmlzTW9tZW50KGlucHV0KSAmJiBuZWVkc09mZnNldChvdXQpKSB7XG5cdFx0XHRvdXQuYWRkKHpvbmUucGFyc2Uob3V0KSwgJ21pbnV0ZXMnKTtcblx0XHR9XG5cblx0XHRvdXQudHoobmFtZSk7XG5cblx0XHRyZXR1cm4gb3V0O1xuXHR9XG5cblx0dHoudmVyc2lvbiAgICAgID0gVkVSU0lPTjtcblx0dHouZGF0YVZlcnNpb24gID0gJyc7XG5cdHR6Ll96b25lcyAgICAgICA9IHpvbmVzO1xuXHR0ei5fbGlua3MgICAgICAgPSBsaW5rcztcblx0dHouX25hbWVzICAgICAgID0gbmFtZXM7XG5cdHR6LmFkZCAgICAgICAgICA9IGFkZFpvbmU7XG5cdHR6LmxpbmsgICAgICAgICA9IGFkZExpbms7XG5cdHR6LmxvYWQgICAgICAgICA9IGxvYWREYXRhO1xuXHR0ei56b25lICAgICAgICAgPSBnZXRab25lO1xuXHR0ei56b25lRXhpc3RzICAgPSB6b25lRXhpc3RzOyAvLyBkZXByZWNhdGVkIGluIDAuMS4wXG5cdHR6Lmd1ZXNzICAgICAgICA9IGd1ZXNzO1xuXHR0ei5uYW1lcyAgICAgICAgPSBnZXROYW1lcztcblx0dHouWm9uZSAgICAgICAgID0gWm9uZTtcblx0dHoudW5wYWNrICAgICAgID0gdW5wYWNrO1xuXHR0ei51bnBhY2tCYXNlNjAgPSB1bnBhY2tCYXNlNjA7XG5cdHR6Lm5lZWRzT2Zmc2V0ICA9IG5lZWRzT2Zmc2V0O1xuXHR0ei5tb3ZlSW52YWxpZEZvcndhcmQgICA9IHRydWU7XG5cdHR6Lm1vdmVBbWJpZ3VvdXNGb3J3YXJkID0gZmFsc2U7XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdEludGVyZmFjZSB3aXRoIE1vbWVudC5qc1xuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0dmFyIGZuID0gbW9tZW50LmZuO1xuXG5cdG1vbWVudC50eiA9IHR6O1xuXG5cdG1vbWVudC5kZWZhdWx0Wm9uZSA9IG51bGw7XG5cblx0bW9tZW50LnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uIChtb20sIGtlZXBUaW1lKSB7XG5cdFx0dmFyIHpvbmUgPSBtb21lbnQuZGVmYXVsdFpvbmUsXG5cdFx0XHRvZmZzZXQ7XG5cblx0XHRpZiAobW9tLl96ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGlmICh6b25lICYmIG5lZWRzT2Zmc2V0KG1vbSkgJiYgIW1vbS5faXNVVEMpIHtcblx0XHRcdFx0bW9tLl9kID0gbW9tZW50LnV0Yyhtb20uX2EpLl9kO1xuXHRcdFx0XHRtb20udXRjKCkuYWRkKHpvbmUucGFyc2UobW9tKSwgJ21pbnV0ZXMnKTtcblx0XHRcdH1cblx0XHRcdG1vbS5feiA9IHpvbmU7XG5cdFx0fVxuXHRcdGlmIChtb20uX3opIHtcblx0XHRcdG9mZnNldCA9IG1vbS5fei51dGNPZmZzZXQobW9tKTtcblx0XHRcdGlmIChNYXRoLmFicyhvZmZzZXQpIDwgMTYpIHtcblx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0IC8gNjA7XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9tLnV0Y09mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG1vbS51dGNPZmZzZXQoLW9mZnNldCwga2VlcFRpbWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bW9tLnpvbmUob2Zmc2V0LCBrZWVwVGltZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGZuLnR6ID0gZnVuY3Rpb24gKG5hbWUsIGtlZXBUaW1lKSB7XG5cdFx0aWYgKG5hbWUpIHtcblx0XHRcdGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaW1lIHpvbmUgbmFtZSBtdXN0IGJlIGEgc3RyaW5nLCBnb3QgJyArIG5hbWUgKyAnIFsnICsgdHlwZW9mIG5hbWUgKyAnXScpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5feiA9IGdldFpvbmUobmFtZSk7XG5cdFx0XHRpZiAodGhpcy5feikge1xuXHRcdFx0XHRtb21lbnQudXBkYXRlT2Zmc2V0KHRoaXMsIGtlZXBUaW1lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZ0Vycm9yKFwiTW9tZW50IFRpbWV6b25lIGhhcyBubyBkYXRhIGZvciBcIiArIG5hbWUgKyBcIi4gU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vdGltZXpvbmUvZG9jcy8jL2RhdGEtbG9hZGluZy8uXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmICh0aGlzLl96KSB7IHJldHVybiB0aGlzLl96Lm5hbWU7IH1cblx0fTtcblxuXHRmdW5jdGlvbiBhYmJyV3JhcCAob2xkKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0aGlzLl96KSB7IHJldHVybiB0aGlzLl96LmFiYnIodGhpcyk7IH1cblx0XHRcdHJldHVybiBvbGQuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzZXRab25lV3JhcCAob2xkKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3ogPSBudWxsO1xuXHRcdFx0cmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH07XG5cdH1cblxuXHRmbi56b25lTmFtZSA9IGFiYnJXcmFwKGZuLnpvbmVOYW1lKTtcblx0Zm4uem9uZUFiYnIgPSBhYmJyV3JhcChmbi56b25lQWJicik7XG5cdGZuLnV0YyAgICAgID0gcmVzZXRab25lV3JhcChmbi51dGMpO1xuXG5cdG1vbWVudC50ei5zZXREZWZhdWx0ID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdGlmIChtYWpvciA8IDIgfHwgKG1ham9yID09PSAyICYmIG1pbm9yIDwgOSkpIHtcblx0XHRcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgc2V0RGVmYXVsdCgpIHJlcXVpcmVzIE1vbWVudC5qcyA+PSAyLjkuMC4gWW91IGFyZSB1c2luZyBNb21lbnQuanMgJyArIG1vbWVudC52ZXJzaW9uICsgJy4nKTtcblx0XHR9XG5cdFx0bW9tZW50LmRlZmF1bHRab25lID0gbmFtZSA/IGdldFpvbmUobmFtZSkgOiBudWxsO1xuXHRcdHJldHVybiBtb21lbnQ7XG5cdH07XG5cblx0Ly8gQ2xvbmluZyBhIG1vbWVudCBzaG91bGQgaW5jbHVkZSB0aGUgX3ogcHJvcGVydHkuXG5cdHZhciBtb21lbnRQcm9wZXJ0aWVzID0gbW9tZW50Lm1vbWVudFByb3BlcnRpZXM7XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobW9tZW50UHJvcGVydGllcykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblx0XHQvLyBtb21lbnQgMi44LjErXG5cdFx0bW9tZW50UHJvcGVydGllcy5wdXNoKCdfeicpO1xuXHRcdG1vbWVudFByb3BlcnRpZXMucHVzaCgnX2EnKTtcblx0fSBlbHNlIGlmIChtb21lbnRQcm9wZXJ0aWVzKSB7XG5cdFx0Ly8gbW9tZW50IDIuNy4wXG5cdFx0bW9tZW50UHJvcGVydGllcy5feiA9IG51bGw7XG5cdH1cblxuXHQvLyBJTkpFQ1QgREFUQVxuXG5cdHJldHVybiBtb21lbnQ7XG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgU2V0OiByZXF1aXJlKCcuL3NldCcpLFxuICBTdGF0aWM6IHJlcXVpcmUoJy4vc3RhdGljJylcbn07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBmb3VuZGF0aW9uQXBpID0gcmVxdWlyZSgnLi4vdXRpbHMvZm91bmRhdGlvbi1hcGknKTtcbnZhciBOb3RpZmljYXRpb24gPSByZXF1aXJlKCcuL25vdGlmaWNhdGlvbicpO1xudmFyIEFuaW1hdGlvbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2FuaW1hdGlvbicpO1xudmFyIGNyZWF0ZVJlYWN0Q2xhc3MgPSByZXF1aXJlKFwiY3JlYXRlLXJlYWN0LWNsYXNzXCIpO1xuXG52YXIgTm90aWZpY2F0aW9uU2V0ID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7bm90aWZpY2F0aW9uczogW119O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIGZvdW5kYXRpb25BcGkuc3Vic2NyaWJlKHRoaXMucHJvcHMuaWQsIGZ1bmN0aW9uKG5hbWUsIG1zZykge1xuICAgICAgaWYobXNnID09PSAnY2xlYXJhbGwnKSB7XG4gICAgICAgIHRoaXMuY2xlYXJBbGwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkTm90aWZpY2F0aW9uKG1zZyk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgYWRkTm90aWZpY2F0aW9uOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgbm90aWZpY2F0aW9uLmlkID0gZm91bmRhdGlvbkFwaS5nZW5lcmF0ZVV1aWQoKTtcbiAgICB2YXIgbm90aWZpY2F0aW9ucyA9IHRoaXMuc3RhdGUubm90aWZpY2F0aW9ucy5jb25jYXQobm90aWZpY2F0aW9uKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbnNcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlTm90aWZjYXRpb246IGZ1bmN0aW9uIChpZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG5vdGlmaWNhdGlvbnMgPSBbXVxuICAgICAgdGhpcy5zdGF0ZS5ub3RpZmljYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICBpZiAobm90aWZpY2F0aW9uLmlkICE9PSBpZCkge1xuICAgICAgICAgIG5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb24pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbnNcbiAgICAgIH0pO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgfSxcbiAgY2xlYXJBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtub3RpZmljYXRpb25zOiBbXX0pO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbm90aWZpY2F0aW9ucyA9IHRoaXMuc3RhdGUubm90aWZpY2F0aW9ucy5tYXAoZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5vdGlmaWNhdGlvbiBrZXk9e25vdGlmaWNhdGlvbi5pZH0gey4uLm5vdGlmaWNhdGlvbn0gY2xvc2VIYW5kbGVyPXt0aGlzLnJlbW92ZU5vdGlmY2F0aW9uKG5vdGlmaWNhdGlvbi5pZCl9IGNsYXNzTmFtZT0naXMtYWN0aXZlJz5cbiAgICAgICAgICB7bm90aWZpY2F0aW9uLmNvbnRlbnR9XG4gICAgICAgIDwvTm90aWZpY2F0aW9uPlxuICAgICAgKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+e25vdGlmaWNhdGlvbnN9PC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RpZmljYXRpb25TZXQ7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNyZWF0ZVJlYWN0Q2xhc3MgPSByZXF1aXJlKFwiY3JlYXRlLXJlYWN0LWNsYXNzXCIpO1xuXG52YXIgTm90aWZpY2F0aW9uID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogJ3RvcC1yaWdodCcsXG4gICAgICBjb2xvcjogJ3N1Y2Nlc3MnLFxuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBpbWFnZTogbnVsbCxcbiAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICB3cmFwcGVyRWxlbWVudDogXCJwXCJcbiAgICB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2xhc3NlcyA9ICdub3RpZmljYXRpb24gJyArIHRoaXMucHJvcHMucG9zaXRpb24gKyAnICcgKyB0aGlzLnByb3BzLmNvbG9yO1xuICAgIGNsYXNzZXMgKz0gICcgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyk7XG4gICAgdmFyIGltYWdlTm9kZSA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMuaW1hZ2UpIHtcbiAgICAgIGltYWdlTm9kZSA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taWNvblwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwie3sgaW1hZ2UgfX1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBkYXRhLWNsb3NhYmxlPXt0cnVlfSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNsb3NlLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VIYW5kbGVyfT4mdGltZXM7PC9hPlxuICAgICAgICB7aW1hZ2VOb2RlfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy53cmFwcGVyRWxlbWVudCwgbnVsbCwgdGhpcy5wcm9wcy5jaGlsZHJlbil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90aWZpY2F0aW9uO1xuIiwiLy8gc29tZSBwYXJ0cyBvZiBjb2RlIGZyb20gcmVhY3QvbGliL1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQuanNcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBSZWFjdFRyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKCcuL1JlYWN0VHJhbnNpdGlvbkV2ZW50cycpO1xudmFyIENTU0NvcmUgPSByZXF1aXJlKCcuL2Nzc2NvcmUnKTtcbnZhciBjcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZShcImNyZWF0ZS1yZWFjdC1jbGFzc1wiKTtcblxudmFyIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG52YXIgVElDSyA9IDE3O1xuXG52YXIgQW5pbWF0aW9uID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgfTtcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBhbmltYXRpb25JbjogJycsXG4gICAgICBhbmltYXRpb25PdXQ6ICcnXG4gICAgfTtcbiAgfSxcbiAgcmVmbG93OiBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBub2RlLm9mZnNldFdpZHRoO1xuICB9LFxuICByZXNldDogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IDA7XG4gICAgQ1NTQ29yZS5yZW1vdmVDbGFzcyhub2RlLCAnbmctZW50ZXInKTtcbiAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsICduZy1sZWF2ZScpO1xuICAgIENTU0NvcmUucmVtb3ZlQ2xhc3Mobm9kZSwgJ25nLWVudGVyLWFjdGl2ZScpO1xuICAgIENTU0NvcmUucmVtb3ZlQ2xhc3Mobm9kZSwgJ25nLWxlYXZlLWFjdGl2ZScpO1xuICAgIENTU0NvcmUucmVtb3ZlQ2xhc3Mobm9kZSwgdGhpcy5wcm9wcy5hbmltYXRpb25Jbik7XG4gICAgQ1NTQ29yZS5yZW1vdmVDbGFzcyhub2RlLCB0aGlzLnByb3BzLmFuaW1hdGlvbk91dCk7XG4gIH0sXG4gIGZpbmlzaEFuaW1hdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgdGhpcy5yZXNldChub2RlKTtcbiAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsIHRoaXMucHJvcHMuYWN0aXZlPyAnJyA6ICdpcy1hY3RpdmUnKTtcbiAgICB0aGlzLnJlZmxvdyhub2RlKTtcbiAgICBSZWFjdFRyYW5zaXRpb25FdmVudHMucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCB0aGlzLmZpbmlzaEFuaW1hdGlvbik7XG4gIH0sXG4gIGFuaW1hdGU6IGZ1bmN0aW9uKGFuaW1hdGlvbkNsYXNzLCBhbmltYXRpb25UeXBlKSB7XG4gICAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB2YXIgaW5pdENsYXNzID0gJ25nLScgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzcyA9IGluaXRDbGFzcyArICctYWN0aXZlJztcblxuXG4gICAgdGhpcy5yZXNldChub2RlKTtcbiAgICBDU1NDb3JlLmFkZENsYXNzKG5vZGUsIGFuaW1hdGlvbkNsYXNzKTtcbiAgICBDU1NDb3JlLmFkZENsYXNzKG5vZGUsIGluaXRDbGFzcyk7XG4gICAgQ1NTQ29yZS5hZGRDbGFzcyhub2RlLCAnaXMtYWN0aXZlJyk7XG5cbiAgICAvL2ZvcmNlIGEgXCJ0aWNrXCJcbiAgICB0aGlzLnJlZmxvdyhub2RlKTtcblxuICAgIC8vYWN0aXZhdGVcbiAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgIENTU0NvcmUuYWRkQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3MpO1xuXG4gICAgUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgdGhpcy5maW5pc2hBbmltYXRpb24pO1xuICB9LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLmFjdGl2ZSAhPT0gdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHZhciBhbmltYXRpb25DbGFzcyA9IHRoaXMucHJvcHMuYWN0aXZlID8gdGhpcy5wcm9wcy5hbmltYXRpb25JbjogdGhpcy5wcm9wcy5hbmltYXRpb25PdXQ7XG4gICAgICB2YXIgYW5pbWF0aW9uVHlwZSA9IHRoaXMucHJvcHMuYWN0aXZlID8gJ2VudGVyJzogJ2xlYXZlJztcbiAgICAgIHRoaXMuYW5pbWF0ZShhbmltYXRpb25DbGFzcywgYW5pbWF0aW9uVHlwZSk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIHZhciBleHRyYVByb3BzID0ge307XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgZXh0cmFQcm9wcyk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1hdGlvbjtcbiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4qIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuKlxuKiBAcHJvdmlkZXNNb2R1bGUgUmVhY3RUcmFuc2l0aW9uRXZlbnRzXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2V4ZW52Jyk7XG5cbi8qKlxuKiBFVkVOVF9OQU1FX01BUCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGljaCBldmVudCBmaXJlZCB3aGVuIGFcbiogdHJhbnNpdGlvbi9hbmltYXRpb24gZW5kcywgYmFzZWQgb24gdGhlIHN0eWxlIHByb3BlcnR5IHVzZWQgdG9cbiogZGVmaW5lIHRoYXQgZXZlbnQuXG4qL1xudmFyIEVWRU5UX05BTUVfTUFQID0ge1xuIHRyYW5zaXRpb25lbmQ6IHtcbiAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgJ1dlYmtpdFRyYW5zaXRpb24nOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAnTW96VHJhbnNpdGlvbic6ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICdPVHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAnbXNUcmFuc2l0aW9uJzogJ01TVHJhbnNpdGlvbkVuZCdcbiB9LFxuXG4gYW5pbWF0aW9uZW5kOiB7XG4gICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCcsXG4gICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAnTW96QW5pbWF0aW9uJzogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAnT0FuaW1hdGlvbic6ICdvQW5pbWF0aW9uRW5kJyxcbiAgICdtc0FuaW1hdGlvbic6ICdNU0FuaW1hdGlvbkVuZCdcbiB9XG59O1xuXG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gLy8gT24gc29tZSBwbGF0Zm9ybXMsIGluIHBhcnRpY3VsYXIgc29tZSByZWxlYXNlcyBvZiBBbmRyb2lkIDQueCxcbiAvLyB0aGUgdW4tcHJlZml4ZWQgXCJhbmltYXRpb25cIiBhbmQgXCJ0cmFuc2l0aW9uXCIgcHJvcGVydGllcyBhcmUgZGVmaW5lZCBvbiB0aGVcbiAvLyBzdHlsZSBvYmplY3QgYnV0IHRoZSBldmVudHMgdGhhdCBmaXJlIHdpbGwgc3RpbGwgYmUgcHJlZml4ZWQsIHNvIHdlIG5lZWRcbiAvLyB0byBjaGVjayBpZiB0aGUgdW4tcHJlZml4ZWQgZXZlbnRzIGFyZSB1c2VhYmxlLCBhbmQgaWYgbm90IHJlbW92ZSB0aGVtXG4gLy8gZnJvbSB0aGUgbWFwXG4gaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICBkZWxldGUgRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiB9XG5cbiBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuIH1cblxuIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgZW5kRXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICBicmVhaztcbiAgICAgfVxuICAgfVxuIH1cbn1cblxuaWYgKEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuIGRldGVjdEV2ZW50cygpO1xufVxuXG4vLyBXZSB1c2UgdGhlIHJhdyB7YWRkfHJlbW92ZX1FdmVudExpc3RlbmVyKCkgY2FsbCBiZWNhdXNlIEV2ZW50TGlzdGVuZXJcbi8vIGRvZXMgbm90IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHdlIHJlYWxseSBzaG91bGRcbi8vIGNsZWFuIHVwLiBBbHNvLCB0aGVzZSBldmVudHMgYXJlIG5vdCB0cmlnZ2VyZWQgaW4gb2xkZXIgYnJvd3NlcnNcbi8vIHNvIHdlIHNob3VsZCBiZSBBLU9LIGhlcmUuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFJlYWN0VHJhbnNpdGlvbkV2ZW50cyA9IHtcbiBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAvLyBJZiBDU1MgdHJhbnNpdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQsIHRyaWdnZXIgYW4gXCJlbmQgYW5pbWF0aW9uXCJcbiAgICAgLy8gZXZlbnQgaW1tZWRpYXRlbHkuXG4gICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICByZXR1cm47XG4gICB9XG4gICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihlbmRFdmVudCkge1xuICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgIH0pO1xuIH0sXG5cbiByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICByZXR1cm47XG4gICB9XG4gICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihlbmRFdmVudCkge1xuICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgIH0pO1xuIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RUcmFuc2l0aW9uRXZlbnRzO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFNQQUNFID0gJyAnO1xudmFyIFJFX0NMQVNTID0gL1tcXG5cXHRcXHJdL2c7XG5cbnZhciBub3JtID0gZnVuY3Rpb24gKGVsZW1DbGFzcykge1xuICByZXR1cm4gKFNQQUNFICsgZWxlbUNsYXNzICsgU1BBQ0UpLnJlcGxhY2UoUkVfQ0xBU1MsIFNQQUNFKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGRDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBlbGVtLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gIH0sXG5cbiAgcmVtb3ZlQ2xhc3MoZWxlbSwgbmVlZGxlKSB7XG4gICAgdmFyIGVsZW1DbGFzcyA9IGVsZW0uY2xhc3NOYW1lLnRyaW0oKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gbm9ybShlbGVtQ2xhc3MpO1xuICAgIG5lZWRsZSA9IG5lZWRsZS50cmltKCk7XG4gICAgbmVlZGxlID0gU1BBQ0UgKyBuZWVkbGUgKyBTUEFDRTtcbiAgICB3aGlsZSAoY2xhc3NOYW1lLmluZGV4T2YobmVlZGxlKSA+PSAwKSB7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShuZWVkbGUsIFNQQUNFKTtcbiAgICB9XG4gICAgZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWUudHJpbSgpO1xuICB9XG59OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcbnZhciBmb3VuZGF0aW9uQXBpID0gcmVxdWlyZSgnLi4vdXRpbHMvZm91bmRhdGlvbi1hcGknKTtcbnZhciBBbmltYXRpb24gPSByZXF1aXJlKCcuLi91dGlscy9hbmltYXRpb24nKTtcbnZhciBOb3RpZmljYXRpb24gPSByZXF1aXJlKCcuL25vdGlmaWNhdGlvbicpO1xudmFyIGNyZWF0ZVJlYWN0Q2xhc3MgPSByZXF1aXJlKFwiY3JlYXRlLXJlYWN0LWNsYXNzXCIpO1xuXG52YXIgTm90aWZpY2F0aW9uU3RhdGljID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7IG9wZW46IGZhbHNlIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgZm91bmRhdGlvbkFwaS5zdWJzY3JpYmUodGhpcy5wcm9wcy5pZCwgZnVuY3Rpb24gKG5hbWUsIG1zZykge1xuICAgICAgaWYgKG1zZyA9PT0gJ29wZW4nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICAgIH0gZWxzZSBpZiAobXNnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBmb3VuZGF0aW9uQXBpLnVuc3Vic2NyaWJlKHRoaXMucHJvcHMuaWQpO1xuICB9LFxuICBjbG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbmltYXRpb24gYWN0aXZlPXt0aGlzLnN0YXRlLm9wZW59IGFuaW1hdGlvbkluPVwiZmFkZUluXCIgYW5pbWF0aW9uT3V0PVwiZmFkZU91dFwiPlxuICAgICAgICA8Tm90aWZpY2F0aW9uIHsuLi50aGlzLnByb3BzfSBjbG9zZUhhbmRsZXI9e3RoaXMuY2xvc2VIYW5kbGVyfSA+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTm90aWZpY2F0aW9uPlxuICAgICAgPC9BbmltYXRpb24+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90aWZpY2F0aW9uU3RhdGljO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQWFBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBYkE7QUFEQTtBQXlCQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTs7OztBQXRQQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQURBO0FBcUJBO0FBQ0E7QUFDQTtBQUhBO0FBcEJBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxXQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNweERBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBbEJBO0FBSkE7QUEyQkE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQW5MQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVpBO0FBcUJBO0FBQ0E7QUFGQTtBQWtLQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBWUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVhBO0FBb0JBOzs7O0FBM0NBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFMQTs7Ozs7Ozs7Ozs7OztBQ3FCQTtBQTFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTs7OztBQWZBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQWNBOzs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFEQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFsQkE7QUFQQTtBQTZCQTs7OztBQXZFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFaQTtBQXNCQTs7OztBQXhDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUZBO0FBUEE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU5BO0FBREE7QUFXQTs7OztBQTlDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBTkE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBLG9DQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVhBO0FBREE7QUFlQTtBQWpCQTtBQW9CQTs7OztBQWxEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQUNBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFxQkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFkQTtBQTBCQTtBQXROQTtBQUNBO0FBd05BOzs7Ozs7Ozs7Ozs7OztBQ3hPQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOWFBO0FBQ0E7QUFnYkE7Ozs7Ozs7O0FDMWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFXQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBY0E7QUFEQTtBQU9BO0FBckZBO0FBdUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUErQkE7QUFDQTtBQUNBO0FBTUE7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoUEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBWUE7QUF0QkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFLQTtBQVlBO0FBQ0E7QUF2QkE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFwQkE7QUF3Q0E7QUFySEE7QUFDQTtBQXVIQTs7Ozs7Ozs7Ozs7Ozs7QUM1SUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQUNBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQXhLQTtBQUNBO0FBMEtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaExBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUE1SkE7QUFDQTtBQThKQTs7Ozs7Ozs7Ozs7Ozs7QUNwTEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQWxGQTtBQUNBO0FBb0ZBOzs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFuQkE7QUFDQTtBQTBCQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHFCQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyZkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHFCQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlHQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxVQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcG1CQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQWhEQTtBQUNBO0FBa0RBOzs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQWhDQTtBQUNBO0FBa0NBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOURBO0FBQ0E7QUFnRUE7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBLFVBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBOzs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBN0JBO0FBQ0E7QUErQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==