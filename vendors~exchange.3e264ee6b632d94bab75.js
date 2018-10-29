(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 2559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DatePicker = __webpack_require__(2560);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DatePicker2.default;
// export Calendar from './components/Calendar';

/***/ }),

/***/ 2560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outsideClickIgnoreClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(972);

var _moment2 = _interopRequireDefault(_moment);

var _reactTether = __webpack_require__(2561);

var _reactTether2 = _interopRequireDefault(_reactTether);

var _Calendar = __webpack_require__(2564);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _classnames2 = __webpack_require__(829);

var _classnames3 = _interopRequireDefault(_classnames2);

var _CustomTimePicker = __webpack_require__(2575);

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

/***/ 2561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TetherComponent = __webpack_require__(2562);

var _TetherComponent2 = _interopRequireDefault(_TetherComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TetherComponent2.default;
module.exports = exports['default'];

/***/ }),

/***/ 2562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(408);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = __webpack_require__(2563);

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

/***/ 2563:
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

/***/ 2564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DaysViewHeading = __webpack_require__(2565);

var _DaysViewHeading2 = _interopRequireDefault(_DaysViewHeading);

var _DaysOfWeek = __webpack_require__(2568);

var _DaysOfWeek2 = _interopRequireDefault(_DaysOfWeek);

var _MonthSelector = __webpack_require__(2569);

var _MonthSelector2 = _interopRequireDefault(_MonthSelector);

var _Day = __webpack_require__(2571);

var _Day2 = _interopRequireDefault(_Day);

var _momentHelper = __webpack_require__(2572);

var _moment = __webpack_require__(972);

var _moment2 = _interopRequireDefault(_moment);

var _reactOnclickoutside = __webpack_require__(2573);

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _DefaultStyles = __webpack_require__(2574);

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

/***/ 2565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _persian = __webpack_require__(2566);

var _assets = __webpack_require__(2567);

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

/***/ 2566:
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

/***/ 2567:
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

/***/ 2568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

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

/***/ 2569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(972);

var _moment2 = _interopRequireDefault(_moment);

var _classnames2 = __webpack_require__(829);

var _classnames3 = _interopRequireDefault(_classnames2);

var _MonthsViewHeading = __webpack_require__(2570);

var _MonthsViewHeading2 = _interopRequireDefault(_MonthsViewHeading);

var _assets = __webpack_require__(2567);

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

/***/ 2570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _persian = __webpack_require__(2566);

var _assets = __webpack_require__(2567);

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

/***/ 2571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(829);

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

/***/ 2572:
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

/***/ 2573:
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
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(399),__webpack_require__(408),__webpack_require__(992)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(React, ReactDom, createReactClass) {
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

/***/ 2574:
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

/***/ 2575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(972);

var _moment2 = _interopRequireDefault(_moment);

var _TimePicker = __webpack_require__(2576);

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _DatePicker = __webpack_require__(2560);

var _persian = __webpack_require__(2566);

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

/***/ 2576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TimePicker = __webpack_require__(2577);

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TimePicker2.default;

/***/ }),

/***/ 2577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTrigger = __webpack_require__(2578);

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _Panel = __webpack_require__(2585);

var _Panel2 = _interopRequireDefault(_Panel);

var _placements = __webpack_require__(2589);

var _placements2 = _interopRequireDefault(_placements);

var _moment = __webpack_require__(972);

var _moment2 = _interopRequireDefault(_moment);

var _createReactClass = __webpack_require__(992);

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

/***/ 2578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(756);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(408);

var _createReactClass = __webpack_require__(992);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _contains = __webpack_require__(879);

var _contains2 = _interopRequireDefault(_contains);

var _addEventListener = __webpack_require__(2579);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _Popup = __webpack_require__(2580);

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = __webpack_require__(2583);

var _getContainerRenderMixin = __webpack_require__(2584);

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

/***/ 2579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(826);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(408);

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

/***/ 2580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(756);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(779);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(780);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(781);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(815);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(408);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAlign = __webpack_require__(884);

var _rcAlign2 = _interopRequireDefault(_rcAlign);

var _rcAnimate = __webpack_require__(855);

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _PopupInner = __webpack_require__(2581);

var _PopupInner2 = _interopRequireDefault(_PopupInner);

var _LazyRenderBox = __webpack_require__(2582);

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

var _utils = __webpack_require__(2583);

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

/***/ 2581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(779);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(780);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(781);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(815);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LazyRenderBox = __webpack_require__(2582);

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

/***/ 2582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(865);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(779);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(780);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(781);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(815);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

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

/***/ 2583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignFromPlacement = getAlignFromPlacement;
exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
exports.saveRef = saveRef;

var _extends2 = __webpack_require__(756);

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

/***/ 2584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(756);

var _extends3 = _interopRequireDefault(_extends2);

exports['default'] = getContainerRenderMixin;

var _reactDom = __webpack_require__(408);

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

/***/ 2585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(2586);

var _Header2 = _interopRequireDefault(_Header);

var _Combobox = __webpack_require__(2587);

var _Combobox2 = _interopRequireDefault(_Combobox);

var _moment = __webpack_require__(972);

var _moment2 = _interopRequireDefault(_moment);

var _createReactClass = __webpack_require__(992);

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

/***/ 2586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(972);

var _moment2 = _interopRequireDefault(_moment);

var _createReactClass = __webpack_require__(992);

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

/***/ 2587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(2588);

var _Select2 = _interopRequireDefault(_Select);

var _createReactClass = __webpack_require__(992);

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

/***/ 2588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(399);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(823);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(408);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = __webpack_require__(829);

var _classnames3 = _interopRequireDefault(_classnames2);

var _createReactClass = __webpack_require__(992);

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

/***/ 2589:
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

/***/ 2596:
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

/***/ 2614:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2615);

/***/ }),

/***/ 2615:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(399), __webpack_require__(823), __webpack_require__(2616), __webpack_require__(2617), __webpack_require__(2618), __webpack_require__(2619)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 2616:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(399), __webpack_require__(408)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 2617:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(399), __webpack_require__(408)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 2618:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(399), __webpack_require__(408)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 2619:
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

/***/ 2635:
/***/ (function(module, exports, __webpack_require__) {

var moment = module.exports = __webpack_require__(2636);
moment.tz.load(__webpack_require__(2637));


/***/ }),

/***/ 2636:
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
		module.exports = factory(__webpack_require__(972)); // Node
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(972)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 2637:
/***/ (function(module) {

module.exports = {"version":"2018e","zones":["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5","Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5","Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5","Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5","Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6","Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4","Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5","Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6","Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5","Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3","Africa/El_Aaiun|LMT -01 WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4","Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5","Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0","Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5","Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5","Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5","Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|012|-2le00 4i6N0","Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5","Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5","Africa/Windhoek|+0130 SAST SAST CAT WAT|-1u -20 -30 -20 -10|01213434343434343434343434343434343434343434343434343|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3","America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4","America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0","America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0","America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0","America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0","America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0","America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0","America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0","America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4","America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5","America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2","America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3","America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5","America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4","America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5","America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3","America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2","America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2","America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5","America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4","America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2","America/Campo_Grande|LMT -04 -03|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|77e4","America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5","America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3","America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5","America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4","America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5","America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2","America/Cuiaba|LMT -04 -03|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|54e4","America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8","America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3","America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2","America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|012342525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 XQp0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5","America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5","America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3","America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5","America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5","America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5","America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3","America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2","America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5","America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5","America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4","America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4","America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2","America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2","America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4","America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3","America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5","America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6","America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4","America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5","America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5","America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4","America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4","America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4","America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2","America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5","America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6","America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3","America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5","America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5","America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4","America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2","America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2","America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2","America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4","America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5","America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4","America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4","America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5","America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0","America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842","America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2","America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5","America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4","America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229","America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4","America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5","America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5","America/Sao_Paulo|LMT -03 -02|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|20e6","America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452","America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2","America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3","America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5","America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656","America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4","America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642","America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","Antarctica/Casey|-00 +08 +11|0 -80 -b0|01212121|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10|10","Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70","Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80","Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1","Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60","Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5","Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40","Antarctica/Rothera|-00 -03|0 30|01|gOo0|130","Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20","Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40","Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25","Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4","Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5","Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5","Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5","Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3","Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4","Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4","Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4","Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0","Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5","Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4","Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6","Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5","Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4","Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4","Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6","Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4","Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3","Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6","Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5","Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6","Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5","Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4","Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5","Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4","Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0|18e5","Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0|25e4","Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5","Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5","Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6","Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4","Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4","Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5","Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4","Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6","Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5","Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5","Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2","Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5","Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4","Asia/Macau|LMT CST CDT|-7y.k -80 -90|012121212121212121212121212121212121212121|-2le80 1XO3u 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0|57e4","Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3","Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5","Asia/Manila|+08 +09|-80 -90|010101010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6","Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4","Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4","Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5","Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5","Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4","Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4","Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|012313|-2um8n 97XR 1lTzu 2Onc0 6BAu|29e5","Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4","Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5","Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4","Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4","Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -9u -a0|0123141414141414135353|-2um8r.Q 97XV.Q 1m1zu kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6","Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2","Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5","Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5","Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5","Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6","Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3","Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rb0 1ld0 14n0 1zd0 On0 1zd0 On0|38e6","Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5","Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5","Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2","Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4","Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5","Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5","Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4","Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3","Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4","Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3","Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4","Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4","Atlantic/South_Georgia|-02|20|0||30","Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2","Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5","Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5","Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3","Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746","Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4","Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368","Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4","Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347","Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10","Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5","Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5","CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2","CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","EST|EST|50|0|","EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Etc/GMT-0|GMT|0|0|","Etc/GMT-1|+01|-10|0|","Pacific/Port_Moresby|+10|-a0|0||25e4","Pacific/Pohnpei|+11|-b0|0||34e3","Pacific/Tarawa|+12|-c0|0||29e3","Etc/GMT-13|+13|-d0|0|","Etc/GMT-14|+14|-e0|0|","Etc/GMT-2|+02|-20|0|","Etc/GMT-3|+03|-30|0|","Etc/GMT-4|+04|-40|0|","Etc/GMT-5|+05|-50|0|","Etc/GMT-6|+06|-60|0|","Indian/Christmas|+07|-70|0||21e2","Etc/GMT-8|+08|-80|0|","Pacific/Palau|+09|-90|0||21e3","Etc/GMT+1|-01|10|0|","Etc/GMT+10|-10|a0|0|","Etc/GMT+11|-11|b0|0|","Etc/GMT+12|-12|c0|0|","Etc/GMT+3|-03|30|0|","Etc/GMT+4|-04|40|0|","Etc/GMT+5|-05|50|0|","Etc/GMT+6|-06|60|0|","Etc/GMT+7|-07|70|0|","Etc/GMT+8|-08|80|0|","Etc/GMT+9|-09|90|0|","Etc/UCT|UCT|0|0|","Etc/UTC|UTC|0|0|","Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5","Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3","Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5","Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6","Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5","Europe/Prague|CET CEST GMT|-10 -20 0|01010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 1qM0 11c0 mp0 xA0 mn0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5","Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5","Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5","Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4","Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4","Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3","Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4","Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5","Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4","Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5","Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5","Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5","Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3","Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6","Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6","Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4","Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5","Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5","Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810","Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4","Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5","Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4","Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4","Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5","Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4","HST|HST|a0|0|","Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2","Indian/Cocos|+0630|-6u|0||596","Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130","Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3","Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4","Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4","Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4","Pacific/Kwajalein|+11 -12 +12|-b0 c0 -c0|012|-AX0 W9X0|14e3","MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","MST|MST|70|0|","MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600","Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3","Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4","Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3","Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1","Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483","Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0|88e4","Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3","Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125","Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4","Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4","Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4","Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2","Pacific/Kosrae|+11 +12|-b0 -c0|010|-AX0 1bdz0|66e2","Pacific/Majuro|+11 +12|-b0 -c0|01|-AX0|28e3","Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2","Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2","Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3","Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2","Pacific/Norfolk|+1112 +1130 +1230 +11|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4","Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3","Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56","Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3","Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4","Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3","PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"],"links":["Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|Atlantic/St_Helena","Africa/Cairo|Egypt","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|US/Alaska","America/Argentina/Buenos_Aires|America/Buenos_Aires","America/Argentina/Catamarca|America/Argentina/ComodRivadavia","America/Argentina/Catamarca|America/Catamarca","America/Argentina/Cordoba|America/Cordoba","America/Argentina/Cordoba|America/Rosario","America/Argentina/Jujuy|America/Jujuy","America/Argentina/Mendoza|America/Mendoza","America/Atikokan|America/Coral_Harbour","America/Chicago|US/Central","America/Curacao|America/Aruba","America/Curacao|America/Kralendijk","America/Curacao|America/Lower_Princes","America/Denver|America/Shiprock","America/Denver|Navajo","America/Denver|US/Mountain","America/Detroit|US/Michigan","America/Edmonton|Canada/Mountain","America/Fort_Wayne|America/Indiana/Indianapolis","America/Fort_Wayne|America/Indianapolis","America/Fort_Wayne|US/East-Indiana","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Indiana/Knox|America/Knox_IN","America/Indiana/Knox|US/Indiana-Starke","America/Jamaica|Jamaica","America/Kentucky/Louisville|America/Louisville","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Manaus|Brazil/West","America/Mazatlan|Mexico/BajaSur","America/Mexico_City|Mexico/General","America/New_York|US/Eastern","America/Noronha|Brazil/DeNoronha","America/Panama|America/Cayman","America/Phoenix|US/Arizona","America/Port_of_Spain|America/Anguilla","America/Port_of_Spain|America/Antigua","America/Port_of_Spain|America/Dominica","America/Port_of_Spain|America/Grenada","America/Port_of_Spain|America/Guadeloupe","America/Port_of_Spain|America/Marigot","America/Port_of_Spain|America/Montserrat","America/Port_of_Spain|America/St_Barthelemy","America/Port_of_Spain|America/St_Kitts","America/Port_of_Spain|America/St_Lucia","America/Port_of_Spain|America/St_Thomas","America/Port_of_Spain|America/St_Vincent","America/Port_of_Spain|America/Tortola","America/Port_of_Spain|America/Virgin","America/Regina|Canada/Saskatchewan","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Chile/Continental","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","America/Tijuana|America/Ensenada","America/Tijuana|America/Santa_Isabel","America/Tijuana|Mexico/BajaNorte","America/Toronto|America/Montreal","America/Toronto|Canada/Eastern","America/Vancouver|Canada/Pacific","America/Whitehorse|Canada/Yukon","America/Winnipeg|Canada/Central","Asia/Ashgabat|Asia/Ashkhabad","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Vientiane","Asia/Dhaka|Asia/Dacca","Asia/Dubai|Asia/Muscat","Asia/Ho_Chi_Minh|Asia/Saigon","Asia/Hong_Kong|Hongkong","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Singapore","Asia/Macau|Asia/Macao","Asia/Makassar|Asia/Ujung_Pandang","Asia/Nicosia|Europe/Nicosia","Asia/Qatar|Asia/Bahrain","Asia/Rangoon|Asia/Yangon","Asia/Riyadh|Asia/Aden","Asia/Riyadh|Asia/Kuwait","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|PRC","Asia/Taipei|ROC","Asia/Tehran|Iran","Asia/Thimphu|Asia/Thimbu","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Urumqi|Asia/Kashgar","Atlantic/Faroe|Atlantic/Faeroe","Atlantic/Reykjavik|Iceland","Atlantic/South_Georgia|Etc/GMT+2","Australia/Adelaide|Australia/South","Australia/Brisbane|Australia/Queensland","Australia/Broken_Hill|Australia/Yancowinna","Australia/Darwin|Australia/North","Australia/Hobart|Australia/Tasmania","Australia/Lord_Howe|Australia/LHI","Australia/Melbourne|Australia/Victoria","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/NSW","Etc/GMT-0|Etc/GMT","Etc/GMT-0|Etc/GMT+0","Etc/GMT-0|Etc/GMT0","Etc/GMT-0|Etc/Greenwich","Etc/GMT-0|GMT","Etc/GMT-0|GMT+0","Etc/GMT-0|GMT-0","Etc/GMT-0|GMT0","Etc/GMT-0|Greenwich","Etc/UCT|UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Belgrade|Europe/Ljubljana","Europe/Belgrade|Europe/Podgorica","Europe/Belgrade|Europe/Sarajevo","Europe/Belgrade|Europe/Skopje","Europe/Belgrade|Europe/Zagreb","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Helsinki|Europe/Mariehamn","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Portugal","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Oslo|Arctic/Longyearbyen","Europe/Oslo|Atlantic/Jan_Mayen","Europe/Prague|Europe/Bratislava","Europe/Rome|Europe/San_Marino","Europe/Rome|Europe/Vatican","Europe/Warsaw|Poland","Europe/Zurich|Europe/Busingen","Europe/Zurich|Europe/Vaduz","Indian/Christmas|Etc/GMT-7","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kwajalein|Kwajalein","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Palau|Etc/GMT-9","Pacific/Pohnpei|Etc/GMT-11","Pacific/Pohnpei|Pacific/Ponape","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Port_Moresby|Pacific/Chuuk","Pacific/Port_Moresby|Pacific/Truk","Pacific/Port_Moresby|Pacific/Yap","Pacific/Tarawa|Etc/GMT-12","Pacific/Tarawa|Pacific/Funafuti","Pacific/Tarawa|Pacific/Wake","Pacific/Tarawa|Pacific/Wallis"]};

/***/ }),

/***/ 2642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(625);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isFinite);


/***/ }),

/***/ 2645:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Set: __webpack_require__(2646),
  Static: __webpack_require__(2652)
};

/***/ }),

/***/ 2646:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(399);
var foundationApi = __webpack_require__(730);
var Notification = __webpack_require__(2647);
var Animation = __webpack_require__(2648);
var createReactClass = __webpack_require__(992);

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

/***/ 2647:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(399);
var createReactClass = __webpack_require__(992);

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

/***/ 2648:
/***/ (function(module, exports, __webpack_require__) {

// some parts of code from react/lib/ReactCSSTransitionGroupChild.js
var React = __webpack_require__(399);
var ReactDOM = __webpack_require__(408);
var ReactTransitionEvents = __webpack_require__(2649);
var CSSCore = __webpack_require__(2651);
var createReactClass = __webpack_require__(992);

var classnames = __webpack_require__(829);
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

/***/ 2649:
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



var ExecutionEnvironment = __webpack_require__(2650);

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

/***/ 2650:
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

/***/ 2651:
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

/***/ 2652:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(399);
var classnames = __webpack_require__(829);
var foundationApi = __webpack_require__(730);
var Animation = __webpack_require__(2648);
var Notification = __webpack_require__(2647);
var createReactClass = __webpack_require__(992);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35leGNoYW5nZS4zZTI2NGVlNmI2MzJkOTRiYWI3NS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvRGF0ZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdGV0aGVyL2xpYi9yZWFjdC10ZXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRldGhlci9saWIvVGV0aGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXRoZXIvZGlzdC9qcy90ZXRoZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL0RheXNWaWV3SGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy91dGlscy9wZXJzaWFuLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL3V0aWxzL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL0RheXNPZldlZWsuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9Nb250aFNlbGVjdG9yLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvTW9udGhzVmlld0hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9EYXkuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvdXRpbHMvbW9tZW50LWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb25jbGlja291dHNpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9EZWZhdWx0U3R5bGVzLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvQ3VzdG9tVGltZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL1RpbWVQaWNrZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9UaW1lUGlja2VyL1RpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwSW5uZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9MYXp5UmVuZGVyQm94LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbGliL2dldENvbnRhaW5lclJlbmRlck1peGluLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvVGltZVBpY2tlci9QYW5lbC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL1RpbWVQaWNrZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvVGltZVBpY2tlci9Db21ib2JveC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL1RpbWVQaWNrZXIvU2VsZWN0LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvVGltZVBpY2tlci9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icm93c2VyLWxvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktdGFibGUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2Rpc3QvVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0aWNreS10YWJsZS9kaXN0L1Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2Rpc3QvQ2VsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZXZlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC10aW1lem9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50LXRpbWV6b25lL21vbWVudC10aW1lem9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzRmluaXRlLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy9ub3RpZmljYXRpb24vaW5kZXguanN4Iiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy9ub3RpZmljYXRpb24vc2V0LmpzeCIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2FuaW1hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdXRpbHMvUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdXRpbHMvY3NzY29yZS5qc3giLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL25vdGlmaWNhdGlvbi9zdGF0aWMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vY29tcG9uZW50cy9EYXRlUGlja2VyJztcbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXI7XG4vLyBleHBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGVuZGFyJztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9DYWxlbmRhcic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBNeVRpbWVQaWNrZXIgZnJvbSAnLi9DdXN0b21UaW1lUGlja2VyJ1xuXG5leHBvcnQgY29uc3Qgb3V0c2lkZUNsaWNrSWdub3JlQ2xhc3MgPSAnaWdub3JlLS1jbGljay0tb3V0c2lkZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBtaW46IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbWF4OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRlZmF1bHRNb250aDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dEZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwaWNrZXJQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZW1vdmFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjYWxlbmRhclN0eWxlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjYWxlbmRhckNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRpbWVQaWNrZXI6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXM6IHVuZGVmaW5lZCxcbiAgICBjYWxlbmRhckNvbnRhaW5lclByb3BzOiB7fSxcbiAgICB0aW1lUGlja2VyOiB0cnVlXG4gIH07XG5cbiAgbGFzdFZhbHVlQ2hhbmdlID0gbnVsbDtcblxuICBzdGF0ZSA9IHtcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIG1vbWVudFZhbHVlOiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSB8fCBudWxsLFxuICAgIGlucHV0VmFsdWU6IHRoaXMuZ2V0VmFsdWUodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsIHRoaXMucHJvcHMudGltZVBpY2tlciksXG4gICAgaW5wdXRGb3JtYXQ6IHRoaXMucHJvcHMuaW5wdXRGb3JtYXQgfHwgdGhpcy5nZXRJbnB1dEZvcm1hdCh0aGlzLnByb3BzLnRpbWVQaWNrZXIpLFxuICAgIHRpbWVQaWNrZXI6IHRoaXMucHJvcHMudGltZVBpY2tlcixcbiAgICB0aW1lUGlja2VyQ29tcG9uZW50OiB0aGlzLnByb3BzLnRpbWVQaWNrZXIgPyBNeVRpbWVQaWNrZXIgOiB1bmRlZmluZWRcbiAgfTtcblxuICBnZXRJbnB1dEZvcm1hdCh0aW1lUGlja2VyKSB7XG4gICAgaWYgKCEhdGltZVBpY2tlcilcbiAgICAgIHJldHVybiAnWVlZWS9NL0QgaGg6bW0gQSc7XG4gICAgcmV0dXJuICdZWVlZL00vRCc7XG4gIH1cblxuICBnZXRWYWx1ZShpbnB1dFZhbHVlLCB0aW1lUGlja2VyKSB7XG4gICAgaWYgKCFpbnB1dFZhbHVlKVxuICAgICAgcmV0dXJuICcnO1xuICAgIGNvbnN0IGlucHV0Rm9ybWF0ID0gdGhpcy5nZXRJbnB1dEZvcm1hdCh0aW1lUGlja2VyKTtcblxuICAgIHJldHVybiBpbnB1dFZhbHVlLmxvY2FsZSgnZW4nKS5mb3JtYXQodGhpcy5wcm9wcy5pbnB1dEZvcm1hdCB8fCBpbnB1dEZvcm1hdCk7XG4gIH1cblxuICBzZXRPcGVuKGlzT3Blbikge1xuXG4gICAgY29uc3QgeyBtb21lbnRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAobW9tZW50VmFsdWUgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZShtb21lbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbiB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRNb21lbnRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblxuICAgIGlmICgndmFsdWUnIGluIG5leHRQcm9wcyAmJiBuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0TW9tZW50VmFsdWUobmV4dFByb3BzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoJ3RpbWVQaWNrZXInIGluIG5leHRQcm9wcyAmJiBuZXh0UHJvcHMudGltZVBpY2tlciAhPT0gdGhpcy5wcm9wcy50aW1lUGlja2VyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdGltZVBpY2tlcjogbmV4dFByb3BzLnRpbWVQaWNrZXIsXG4gICAgICAgIHRpbWVQaWNrZXJDb21wb25lbnQ6IHRoaXMucHJvcHMudGltZVBpY2tlciA/IE15VGltZVBpY2tlciA6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcblxuICAgICAgaWYgKCF0aGlzLmxhc3RWYWx1ZUNoYW5nZSB8fCAhdGhpcy5sYXN0VmFsdWVDaGFuZ2UudmFsdWVPZikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2UgMScpO1xuICAgICAgICAgIHRoaXMubGFzdFZhbHVlQ2hhbmdlID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUudmFsdWVPZiAmJiB2YWx1ZS52YWx1ZU9mKCkgIT09IHRoaXMubGFzdFZhbHVlQ2hhbmdlLnZhbHVlT2YoKSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2UgMicpO1xuICAgICAgICAgIHRoaXMubGFzdFZhbHVlQ2hhbmdlID0gdmFsdWU7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgfVxuXG4gIHNldE1vbWVudFZhbHVlKG1vbWVudFZhbHVlLCBkb0NoYW5nZSkge1xuICAgIGNvbnN0IHsgaW5wdXRGb3JtYXQsIHRpbWVQaWNrZXIgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoZG9DaGFuZ2UgIT09IGZhbHNlICYmIHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKG1vbWVudFZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBpbnB1dFZhbHVlID0gbW9tZW50VmFsdWUuZm9ybWF0KGlucHV0Rm9ybWF0KTtcblxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmdldFZhbHVlKG1vbWVudFZhbHVlLCB0aW1lUGlja2VyKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb21lbnRWYWx1ZSwgaW5wdXRWYWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHRoaXMuc2V0T3Blbih0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IG9uQmx1ciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzT3BlbiwgbW9tZW50VmFsdWUsIGlucHV0Rm9ybWF0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5yZWZzLmlucHV0LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChvbkJsdXIpIHtcbiAgICAgIG9uQmx1cihldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1vbWVudFZhbHVlKSB7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gbW9tZW50VmFsdWUuZm9ybWF0KGlucHV0Rm9ybWF0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrT3V0c2lkZUNhbGVuZGFyKCkge1xuICAgIHRoaXMuc2V0T3BlbihmYWxzZSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3REYXkoc2VsZWN0ZWREYXkpIHtcbiAgICBjb25zdCB7IG1vbWVudFZhbHVlOiBvbGRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgbW9tZW50VmFsdWUgPSBzZWxlY3RlZERheS5jbG9uZSgpO1xuXG4gICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICBtb21lbnRWYWx1ZSA9IG1vbWVudFZhbHVlXG4gICAgICAgIC5zZXQoe1xuICAgICAgICAgIGhvdXI6IG9sZFZhbHVlLmhvdXJzKCksXG4gICAgICAgICAgbWludXRlOiBvbGRWYWx1ZS5taW51dGVzKCksXG4gICAgICAgICAgc2Vjb25kOiBvbGRWYWx1ZS5zZWNvbmRzKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRNb21lbnRWYWx1ZShtb21lbnRWYWx1ZSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHsgaW5wdXRGb3JtYXQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBtb21lbnRWYWx1ZSA9IG1vbWVudChpbnB1dFZhbHVlLCBpbnB1dEZvcm1hdCk7XG5cbiAgICBpZiAobW9tZW50VmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9tZW50VmFsdWUgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWUgfSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENsaWNrKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXRPcGVuKHRydWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVySW5wdXQoKSB7XG4gICAgY29uc3QgeyBpc09wZW4sIGlucHV0VmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICBbb3V0c2lkZUNsaWNrSWdub3JlQ2xhc3NdOiBpc09wZW5cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2BkYXRlcGlja2VyLWlucHV0ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW5wdXRDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNhbGVuZGFyKCkge1xuICAgIGNvbnN0IHsgbW9tZW50VmFsdWUsIHRpbWVQaWNrZXJDb21wb25lbnQ6IFRpbWVQaWNrZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgbWluLCBtYXgsIGRlZmF1bHRNb250aCwgc3R5bGVzLCBjYWxlbmRhckNvbnRhaW5lclByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDYWxlbmRhclxuICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgIHNlbGVjdGVkRGF5PXttb21lbnRWYWx1ZX1cbiAgICAgICAgICBkZWZhdWx0TW9udGg9e2RlZmF1bHRNb250aH1cbiAgICAgICAgICBvblNlbGVjdD17dGhpcy5oYW5kbGVTZWxlY3REYXkuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkNsaWNrT3V0c2lkZT17dGhpcy5oYW5kbGVDbGlja091dHNpZGVDYWxlbmRhci5iaW5kKHRoaXMpfVxuICAgICAgICAgIG91dHNpZGVDbGlja0lnbm9yZUNsYXNzPXtvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzc31cbiAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICBjb250YWluZXJQcm9wcz17Y2FsZW5kYXJDb250YWluZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFRpbWVQaWNrZXIgPyAoXG4gICAgICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICAgICAgbWluPXttaW59XG4gICAgICAgICAgICAgICAgbWF4PXttYXh9XG4gICAgICAgICAgICAgICAgbW9tZW50VmFsdWU9e21vbWVudFZhbHVlfVxuICAgICAgICAgICAgICAgIHNldE1vbWVudFZhbHVlPXt0aGlzLnNldE1vbWVudFZhbHVlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9DYWxlbmRhcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW1vdmVEYXRlKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZSgnJyk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXQ6ICcnLFxuICAgICAgaW5wdXRWYWx1ZTogJydcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV0aGVyQ29tcG9uZW50IGNsYXNzTmFtZT17dGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NOYW1lIHx8ICcnfSBhdHRhY2htZW50PXt0aGlzLnByb3BzLnBpY2tlclBvc2l0aW9uIHx8ICd0b3AgY2VudGVyJ30+XG4gICAgICAgIHt0aGlzLnJlbmRlcklucHV0KCl9XG4gICAgICAgIHtpc09wZW4gPyB0aGlzLnJlbmRlckNhbGVuZGFyKCkgOiBudWxsfVxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1RldGhlckNvbXBvbmVudCA9IHJlcXVpcmUoJy4vVGV0aGVyQ29tcG9uZW50Jyk7XG5cbnZhciBfVGV0aGVyQ29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RldGhlckNvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UZXRoZXJDb21wb25lbnQyLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfdGV0aGVyID0gcmVxdWlyZSgndGV0aGVyJyk7XG5cbnZhciBfdGV0aGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RldGhlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pZiAoIV90ZXRoZXIyLmRlZmF1bHQpIHtcbiAgY29uc29sZS5lcnJvcignSXQgbG9va3MgbGlrZSBUZXRoZXIgaGFzIG5vdCBiZWVuIGluY2x1ZGVkLiBQbGVhc2UgbG9hZCB0aGlzIGRlcGVuZGVuY3kgZmlyc3QgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdGV0aGVyJyk7XG59XG5cbnZhciByZW5kZXJFbGVtZW50VG9Qcm9wVHlwZXMgPSBbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICBhcHBlbmRDaGlsZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWRcbn0pXTtcblxudmFyIGNoaWxkcmVuUHJvcFR5cGUgPSBmdW5jdGlvbiBjaGlsZHJlblByb3BUeXBlKF9yZWYsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG5cbiAgdmFyIGNoaWxkQ291bnQgPSBfcmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pO1xuICBpZiAoY2hpbGRDb3VudCA8PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihjb21wb25lbnROYW1lICsgJyBleHBlY3RzIGF0IGxlYXN0IG9uZSBjaGlsZCB0byB1c2UgYXMgdGhlIHRhcmdldCBlbGVtZW50LicpO1xuICB9IGVsc2UgaWYgKGNoaWxkQ291bnQgPiAyKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignT25seSBhIG1heCBvZiB0d28gY2hpbGRyZW4gYWxsb3dlZCBpbiAnICsgY29tcG9uZW50TmFtZSArICcuJyk7XG4gIH1cbn07XG5cbnZhciBhdHRhY2htZW50UG9zaXRpb25zID0gWydhdXRvIGF1dG8nLCAndG9wIGxlZnQnLCAndG9wIGNlbnRlcicsICd0b3AgcmlnaHQnLCAnbWlkZGxlIGxlZnQnLCAnbWlkZGxlIGNlbnRlcicsICdtaWRkbGUgcmlnaHQnLCAnYm90dG9tIGxlZnQnLCAnYm90dG9tIGNlbnRlcicsICdib3R0b20gcmlnaHQnXTtcblxudmFyIFRldGhlckNvbXBvbmVudCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUZXRoZXJDb21wb25lbnQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRldGhlckNvbXBvbmVudCgpIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRldGhlckNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmMiA9IFRldGhlckNvbXBvbmVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRldGhlckNvbXBvbmVudCkpLmNhbGwuYXBwbHkoX3JlZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5fdGFyZ2V0Tm9kZSA9IG51bGwsIF90aGlzLl9lbGVtZW50UGFyZW50Tm9kZSA9IG51bGwsIF90aGlzLl90ZXRoZXIgPSBmYWxzZSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGV0aGVyQ29tcG9uZW50LCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl90YXJnZXROb2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdGhpcy5fdGFyZ2V0Tm9kZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VGV0aGVySW5zdGFuY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUZXRoZXJJbnN0YW5jZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90ZXRoZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLl90ZXRoZXIuZGlzYWJsZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX3RldGhlci5lbmFibGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyLCBjdHgpIHtcbiAgICAgIHRoaXMuX3RldGhlci5vbihldmVudCwgaGFuZGxlciwgY3R4KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25jZShldmVudCwgaGFuZGxlciwgY3R4KSB7XG4gICAgICB0aGlzLl90ZXRoZXIub25jZShldmVudCwgaGFuZGxlciwgY3R4KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvZmYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIHRoaXMuX3RldGhlci5vZmYoZXZlbnQsIGhhbmRsZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgICB0aGlzLl90ZXRoZXIucG9zaXRpb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcmVnaXN0ZXJFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXMsXG4gICAgICAgICAgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcblxuICAgICAgdGhpcy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnByb3BzLm9uVXBkYXRlICYmIF90aGlzMi5wcm9wcy5vblVwZGF0ZS5hcHBseShfdGhpczIsIF9hcmd1bWVudHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMub24oJ3JlcG9zaXRpb25lZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy5vblJlcG9zaXRpb25lZCAmJiBfdGhpczIucHJvcHMub25SZXBvc2l0aW9uZWQuYXBwbHkoX3RoaXMyLCBfYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19kZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Rlc3Ryb3koKSB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudFBhcmVudE5vZGUpIHtcbiAgICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZWxlbWVudFBhcmVudE5vZGUpO1xuICAgICAgICB0aGlzLl9lbGVtZW50UGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3RldGhlcikge1xuICAgICAgICB0aGlzLl90ZXRoZXIuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50UGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICB0aGlzLl90ZXRoZXIgPSBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHJlbmRlckVsZW1lbnRUYWcgPSBfcHJvcHMucmVuZGVyRWxlbWVudFRhZztcblxuICAgICAgdmFyIGVsZW1lbnRDb21wb25lbnQgPSBfcmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbMV07XG5cbiAgICAgIC8vIGlmIG5vIGVsZW1lbnQgY29tcG9uZW50IHByb3ZpZGVkLCBiYWlsIG91dFxuICAgICAgaWYgKCFlbGVtZW50Q29tcG9uZW50KSB7XG4gICAgICAgIC8vIGRlc3Ryb3kgVGV0aGVyIGVsZW1lbnQgaWYgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBpZiAodGhpcy5fdGV0aGVyKSB7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gY3JlYXRlIGVsZW1lbnQgbm9kZSBjb250YWluZXIgaWYgaXQgaGFzbid0IGJlZW4geWV0XG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnRQYXJlbnROb2RlKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIG5vZGUgdGhhdCB3ZSBjYW4gc3RpY2sgb3VyIGNvbnRlbnQgQ29tcG9uZW50IGluXG4gICAgICAgIHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChyZW5kZXJFbGVtZW50VGFnKTtcblxuICAgICAgICAvLyBhcHBlbmQgbm9kZSB0byB0aGUgcmVuZGVyIG5vZGVcbiAgICAgICAgdGhpcy5fcmVuZGVyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50UGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlbmRlciBlbGVtZW50IGNvbXBvbmVudCBpbnRvIHRoZSBET01cbiAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcih0aGlzLCBlbGVtZW50Q29tcG9uZW50LCB0aGlzLl9lbGVtZW50UGFyZW50Tm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBpZiB3ZSdyZSBub3QgZGVzdHJveWVkLCB1cGRhdGUgVGV0aGVyIG9uY2UgdGhlIHN1YnRyZWUgaGFzIGZpbmlzaGVkIHJlbmRlcmluZ1xuICAgICAgICBpZiAoX3RoaXMzLl9lbGVtZW50UGFyZW50Tm9kZSkge1xuICAgICAgICAgIF90aGlzMy5fdXBkYXRlVGV0aGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVUZXRoZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlVGV0aGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgcmVuZGVyRWxlbWVudFRhZyA9IF9wcm9wczIucmVuZGVyRWxlbWVudFRhZyxcbiAgICAgICAgICByZW5kZXJFbGVtZW50VG8gPSBfcHJvcHMyLnJlbmRlckVsZW1lbnRUbyxcbiAgICAgICAgICBpZCA9IF9wcm9wczIuaWQsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMiwgWydjaGlsZHJlbicsICdyZW5kZXJFbGVtZW50VGFnJywgJ3JlbmRlckVsZW1lbnRUbycsICdpZCcsICdjbGFzc05hbWUnLCAnc3R5bGUnXSk7XG5cbiAgICAgIHZhciB0ZXRoZXJPcHRpb25zID0gX2V4dGVuZHMoe1xuICAgICAgICB0YXJnZXQ6IHRoaXMuX3RhcmdldE5vZGUsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlXG4gICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlLmlkID0gaWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudFBhcmVudE5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIF90aGlzNC5fZWxlbWVudFBhcmVudE5vZGUuc3R5bGVba2V5XSA9IHN0eWxlW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX3RldGhlcikge1xuICAgICAgICB0aGlzLl90ZXRoZXIgPSBuZXcgX3RldGhlcjIuZGVmYXVsdCh0ZXRoZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGV0aGVyLnNldE9wdGlvbnModGV0aGVyT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RldGhlci5wb3NpdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKVswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcmVuZGVyTm9kZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcmVuZGVyRWxlbWVudFRvID0gdGhpcy5wcm9wcy5yZW5kZXJFbGVtZW50VG87XG5cbiAgICAgIGlmICh0eXBlb2YgcmVuZGVyRWxlbWVudFRvID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZW5kZXJFbGVtZW50VG8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlckVsZW1lbnRUbyB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUZXRoZXJDb21wb25lbnQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UZXRoZXJDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICByZW5kZXJFbGVtZW50VGFnOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgcmVuZGVyRWxlbWVudFRvOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShyZW5kZXJFbGVtZW50VG9Qcm9wVHlwZXMpLFxuICBhdHRhY2htZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKGF0dGFjaG1lbnRQb3NpdGlvbnMpLmlzUmVxdWlyZWQsXG4gIHRhcmdldEF0dGFjaG1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoYXR0YWNobWVudFBvc2l0aW9ucyksXG4gIG9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRhcmdldE9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRhcmdldE1vZGlmaWVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZW5hYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjbGFzc2VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgY2xhc3NQcmVmaXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBvcHRpbWl6YXRpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgY29uc3RyYWludHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksXG4gIGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBvblVwZGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblJlcG9zaXRpb25lZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjaGlsZHJlbjogY2hpbGRyZW5Qcm9wVHlwZVxufTtcblRldGhlckNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlbmRlckVsZW1lbnRUYWc6ICdkaXYnLFxuICByZW5kZXJFbGVtZW50VG86IG51bGxcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBUZXRoZXJDb21wb25lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKiEgdGV0aGVyIDEuNC40ICovXG5cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuVGV0aGVyID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgVGV0aGVyQmFzZSA9IHVuZGVmaW5lZDtcbmlmICh0eXBlb2YgVGV0aGVyQmFzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgVGV0aGVyQmFzZSA9IHsgbW9kdWxlczogW10gfTtcbn1cblxudmFyIHplcm9FbGVtZW50ID0gbnVsbDtcblxuLy8gU2FtZSBhcyBuYXRpdmUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0LCBleGNlcHQgaXQgdGFrZXMgaW50byBhY2NvdW50IHBhcmVudCA8ZnJhbWU+IG9mZnNldHNcbi8vIGlmIHRoZSBlbGVtZW50IGxpZXMgd2l0aGluIGEgbmVzdGVkIGRvY3VtZW50ICg8ZnJhbWU+IG9yIDxpZnJhbWU+LWxpa2UpLlxuZnVuY3Rpb24gZ2V0QWN0dWFsQm91bmRpbmdDbGllbnRSZWN0KG5vZGUpIHtcbiAgdmFyIGJvdW5kaW5nUmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgLy8gVGhlIG9yaWdpbmFsIG9iamVjdCByZXR1cm5lZCBieSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaXMgaW1tdXRhYmxlLCBzbyB3ZSBjbG9uZSBpdFxuICAvLyBXZSBjYW4ndCB1c2UgZXh0ZW5kIGJlY2F1c2UgdGhlIHByb3BlcnRpZXMgYXJlIG5vdCBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIG9iamVjdCBieSBoYXNPd25Qcm9wZXJ0eSBpbiBJRTlcbiAgdmFyIHJlY3QgPSB7fTtcbiAgZm9yICh2YXIgayBpbiBib3VuZGluZ1JlY3QpIHtcbiAgICByZWN0W2tdID0gYm91bmRpbmdSZWN0W2tdO1xuICB9XG5cbiAgaWYgKG5vZGUub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICB2YXIgX2ZyYW1lRWxlbWVudCA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5mcmFtZUVsZW1lbnQ7XG4gICAgaWYgKF9mcmFtZUVsZW1lbnQpIHtcbiAgICAgIHZhciBmcmFtZVJlY3QgPSBnZXRBY3R1YWxCb3VuZGluZ0NsaWVudFJlY3QoX2ZyYW1lRWxlbWVudCk7XG4gICAgICByZWN0LnRvcCArPSBmcmFtZVJlY3QudG9wO1xuICAgICAgcmVjdC5ib3R0b20gKz0gZnJhbWVSZWN0LnRvcDtcbiAgICAgIHJlY3QubGVmdCArPSBmcmFtZVJlY3QubGVmdDtcbiAgICAgIHJlY3QucmlnaHQgKz0gZnJhbWVSZWN0LmxlZnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudHMoZWwpIHtcbiAgLy8gSW4gZmlyZWZveCBpZiB0aGUgZWwgaXMgaW5zaWRlIGFuIGlmcmFtZSB3aXRoIGRpc3BsYXk6IG5vbmU7IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCkgd2lsbCByZXR1cm4gbnVsbDtcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCkgfHwge307XG4gIHZhciBwb3NpdGlvbiA9IGNvbXB1dGVkU3R5bGUucG9zaXRpb247XG4gIHZhciBwYXJlbnRzID0gW107XG5cbiAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIFtlbF07XG4gIH1cblxuICB2YXIgcGFyZW50ID0gZWw7XG4gIHdoaWxlICgocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpICYmIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICB2YXIgc3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpO1xuICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICd1bmRlZmluZWQnIHx8IHN0eWxlID09PSBudWxsKSB7XG4gICAgICBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgIH1cblxuICAgIHZhciBfc3R5bGUgPSBzdHlsZTtcbiAgICB2YXIgb3ZlcmZsb3cgPSBfc3R5bGUub3ZlcmZsb3c7XG4gICAgdmFyIG92ZXJmbG93WCA9IF9zdHlsZS5vdmVyZmxvd1g7XG4gICAgdmFyIG92ZXJmbG93WSA9IF9zdHlsZS5vdmVyZmxvd1k7XG5cbiAgICBpZiAoLyhhdXRvfHNjcm9sbHxvdmVybGF5KS8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkpIHtcbiAgICAgIGlmIChwb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyB8fCBbJ3JlbGF0aXZlJywgJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihzdHlsZS5wb3NpdGlvbikgPj0gMCkge1xuICAgICAgICBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJlbnRzLnB1c2goZWwub3duZXJEb2N1bWVudC5ib2R5KTtcblxuICAvLyBJZiB0aGUgbm9kZSBpcyB3aXRoaW4gYSBmcmFtZSwgYWNjb3VudCBmb3IgdGhlIHBhcmVudCB3aW5kb3cgc2Nyb2xsXG4gIGlmIChlbC5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCkge1xuICAgIHBhcmVudHMucHVzaChlbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRzO1xufVxuXG52YXIgdW5pcXVlSWQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiArK2lkO1xuICB9O1xufSkoKTtcblxudmFyIHplcm9Qb3NDYWNoZSA9IHt9O1xudmFyIGdldE9yaWdpbiA9IGZ1bmN0aW9uIGdldE9yaWdpbigpIHtcbiAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIHVuZm9ydHVuYXRlbHkgdG9vIGFjY3VyYXRlLiAgSXQgaW50cm9kdWNlcyBhIHBpeGVsIG9yIHR3byBvZlxuICAvLyBqaXR0ZXIgYXMgdGhlIHVzZXIgc2Nyb2xscyB0aGF0IG1lc3NlcyB3aXRoIG91ciBhYmlsaXR5IHRvIGRldGVjdCBpZiB0d28gcG9zaXRpb25zXG4gIC8vIGFyZSBlcXVpdmlsYW50IG9yIG5vdC4gIFdlIHBsYWNlIGFuIGVsZW1lbnQgYXQgdGhlIHRvcCBsZWZ0IG9mIHRoZSBwYWdlIHRoYXQgd2lsbFxuICAvLyBnZXQgdGhlIHNhbWUgaml0dGVyLCBzbyB3ZSBjYW4gY2FuY2VsIHRoZSB0d28gb3V0LlxuICB2YXIgbm9kZSA9IHplcm9FbGVtZW50O1xuICBpZiAoIW5vZGUgfHwgIWRvY3VtZW50LmJvZHkuY29udGFpbnMobm9kZSkpIHtcbiAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGV0aGVyLWlkJywgdW5pcXVlSWQoKSk7XG4gICAgZXh0ZW5kKG5vZGUuc3R5bGUsIHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHplcm9FbGVtZW50ID0gbm9kZTtcbiAgfVxuXG4gIHZhciBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRldGhlci1pZCcpO1xuICBpZiAodHlwZW9mIHplcm9Qb3NDYWNoZVtpZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgemVyb1Bvc0NhY2hlW2lkXSA9IGdldEFjdHVhbEJvdW5kaW5nQ2xpZW50UmVjdChub2RlKTtcblxuICAgIC8vIENsZWFyIHRoZSBjYWNoZSB3aGVuIHRoaXMgcG9zaXRpb24gY2FsbCBpcyBkb25lXG4gICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlIHplcm9Qb3NDYWNoZVtpZF07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gemVyb1Bvc0NhY2hlW2lkXTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZVV0aWxFbGVtZW50cygpIHtcbiAgaWYgKHplcm9FbGVtZW50KSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh6ZXJvRWxlbWVudCk7XG4gIH1cbiAgemVyb0VsZW1lbnQgPSBudWxsO1xufTtcblxuZnVuY3Rpb24gZ2V0Qm91bmRzKGVsKSB7XG4gIHZhciBkb2MgPSB1bmRlZmluZWQ7XG4gIGlmIChlbCA9PT0gZG9jdW1lbnQpIHtcbiAgICBkb2MgPSBkb2N1bWVudDtcbiAgICBlbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfSBlbHNlIHtcbiAgICBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICB9XG5cbiAgdmFyIGRvY0VsID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICB2YXIgYm94ID0gZ2V0QWN0dWFsQm91bmRpbmdDbGllbnRSZWN0KGVsKTtcblxuICB2YXIgb3JpZ2luID0gZ2V0T3JpZ2luKCk7XG5cbiAgYm94LnRvcCAtPSBvcmlnaW4udG9wO1xuICBib3gubGVmdCAtPSBvcmlnaW4ubGVmdDtcblxuICBpZiAodHlwZW9mIGJveC53aWR0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBib3gud2lkdGggPSBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoIC0gYm94LmxlZnQgLSBib3gucmlnaHQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBib3guaGVpZ2h0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGJveC5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIGJveC50b3AgLSBib3guYm90dG9tO1xuICB9XG5cbiAgYm94LnRvcCA9IGJveC50b3AgLSBkb2NFbC5jbGllbnRUb3A7XG4gIGJveC5sZWZ0ID0gYm94LmxlZnQgLSBkb2NFbC5jbGllbnRMZWZ0O1xuICBib3gucmlnaHQgPSBkb2MuYm9keS5jbGllbnRXaWR0aCAtIGJveC53aWR0aCAtIGJveC5sZWZ0O1xuICBib3guYm90dG9tID0gZG9jLmJvZHkuY2xpZW50SGVpZ2h0IC0gYm94LmhlaWdodCAtIGJveC50b3A7XG5cbiAgcmV0dXJuIGJveDtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsKSB7XG4gIHJldHVybiBlbC5vZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG52YXIgX3Njcm9sbEJhclNpemUgPSBudWxsO1xuZnVuY3Rpb24gZ2V0U2Nyb2xsQmFyU2l6ZSgpIHtcbiAgaWYgKF9zY3JvbGxCYXJTaXplKSB7XG4gICAgcmV0dXJuIF9zY3JvbGxCYXJTaXplO1xuICB9XG4gIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzIwMHB4JztcblxuICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXh0ZW5kKG91dGVyLnN0eWxlLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIHdpZHRoOiAnMjAwcHgnLFxuICAgIGhlaWdodDogJzE1MHB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSk7XG5cbiAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gIHZhciB3aWR0aENvbnRhaW5lZCA9IGlubmVyLm9mZnNldFdpZHRoO1xuICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICB2YXIgd2lkdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICBpZiAod2lkdGhDb250YWluZWQgPT09IHdpZHRoU2Nyb2xsKSB7XG4gICAgd2lkdGhTY3JvbGwgPSBvdXRlci5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gIHZhciB3aWR0aCA9IHdpZHRoQ29udGFpbmVkIC0gd2lkdGhTY3JvbGw7XG5cbiAgX3Njcm9sbEJhclNpemUgPSB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiB3aWR0aCB9O1xuICByZXR1cm4gX3Njcm9sbEJhclNpemU7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgdmFyIG91dCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gIHZhciBhcmdzID0gW107XG5cbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJncywgYXJndW1lbnRzKTtcblxuICBhcmdzLnNsaWNlKDEpLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChvYmopIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCh7fSkuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgbmFtZSkge1xuICBpZiAodHlwZW9mIGVsLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgICBpZiAoY2xzLnRyaW0oKSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKF58ICknICsgbmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoIHwkKScsICdnaScpO1xuICAgIHZhciBjbGFzc05hbWUgPSBnZXRDbGFzc05hbWUoZWwpLnJlcGxhY2UocmVnZXgsICcgJyk7XG4gICAgc2V0Q2xhc3NOYW1lKGVsLCBjbGFzc05hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsLCBuYW1lKSB7XG4gIGlmICh0eXBlb2YgZWwuY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHtcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhlbCwgbmFtZSk7XG4gICAgdmFyIGNscyA9IGdldENsYXNzTmFtZShlbCkgKyAoJyAnICsgbmFtZSk7XG4gICAgc2V0Q2xhc3NOYW1lKGVsLCBjbHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBuYW1lKSB7XG4gIGlmICh0eXBlb2YgZWwuY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMobmFtZSk7XG4gIH1cbiAgdmFyIGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCk7XG4gIHJldHVybiBuZXcgUmVnRXhwKCcoXnwgKScgKyBuYW1lICsgJyggfCQpJywgJ2dpJykudGVzdChjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUoZWwpIHtcbiAgLy8gQ2FuJ3QgdXNlIGp1c3QgU1ZHQW5pbWF0ZWRTdHJpbmcgaGVyZSBzaW5jZSBub2RlcyB3aXRoaW4gYSBGcmFtZSBpbiBJRSBoYXZlXG4gIC8vIGNvbXBsZXRlbHkgc2VwYXJhdGVseSBTVkdBbmltYXRlZFN0cmluZyBiYXNlIGNsYXNzZXNcbiAgaWYgKGVsLmNsYXNzTmFtZSBpbnN0YW5jZW9mIGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuU1ZHQW5pbWF0ZWRTdHJpbmcpIHtcbiAgICByZXR1cm4gZWwuY2xhc3NOYW1lLmJhc2VWYWw7XG4gIH1cbiAgcmV0dXJuIGVsLmNsYXNzTmFtZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3NOYW1lKGVsLCBjbGFzc05hbWUpIHtcbiAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNsYXNzZXMoZWwsIGFkZCwgYWxsKSB7XG4gIC8vIE9mIHRoZSBzZXQgb2YgJ2FsbCcgY2xhc3Nlcywgd2UgbmVlZCB0aGUgJ2FkZCcgY2xhc3NlcywgYW5kIG9ubHkgdGhlXG4gIC8vICdhZGQnIGNsYXNzZXMgdG8gYmUgc2V0LlxuICBhbGwuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgaWYgKGFkZC5pbmRleE9mKGNscykgPT09IC0xICYmIGhhc0NsYXNzKGVsLCBjbHMpKSB7XG4gICAgICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGFkZC5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHtcbiAgICBpZiAoIWhhc0NsYXNzKGVsLCBjbHMpKSB7XG4gICAgICBhZGRDbGFzcyhlbCwgY2xzKTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgZGVmZXJyZWQgPSBbXTtcblxudmFyIGRlZmVyID0gZnVuY3Rpb24gZGVmZXIoZm4pIHtcbiAgZGVmZXJyZWQucHVzaChmbik7XG59O1xuXG52YXIgZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgdmFyIGZuID0gdW5kZWZpbmVkO1xuICB3aGlsZSAoZm4gPSBkZWZlcnJlZC5wb3AoKSkge1xuICAgIGZuKCk7XG4gIH1cbn07XG5cbnZhciBFdmVudGVkID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRlZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRlZCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXZlbnRlZCwgW3tcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyLCBjdHgpIHtcbiAgICAgIHZhciBvbmNlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbM107XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5iaW5kaW5ncyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmJpbmRpbmdzW2V2ZW50XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdLnB1c2goeyBoYW5kbGVyOiBoYW5kbGVyLCBjdHg6IGN0eCwgb25jZTogb25jZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25jZShldmVudCwgaGFuZGxlciwgY3R4KSB7XG4gICAgICB0aGlzLm9uKGV2ZW50LCBoYW5kbGVyLCBjdHgsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29mZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZihldmVudCwgaGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmJpbmRpbmdzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgdGhpcy5iaW5kaW5nc1tldmVudF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBkZWxldGUgdGhpcy5iaW5kaW5nc1tldmVudF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5iaW5kaW5nc1tldmVudF0ubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldLmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgKytpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RyaWdnZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuYmluZGluZ3MgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuYmluZGluZ3NbZXZlbnRdKSB7XG4gICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5iaW5kaW5nc1tldmVudF0ubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIF9iaW5kaW5ncyRldmVudCRpID0gdGhpcy5iaW5kaW5nc1tldmVudF1baV07XG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBfYmluZGluZ3MkZXZlbnQkaS5oYW5kbGVyO1xuICAgICAgICAgIHZhciBjdHggPSBfYmluZGluZ3MkZXZlbnQkaS5jdHg7XG4gICAgICAgICAgdmFyIG9uY2UgPSBfYmluZGluZ3MkZXZlbnQkaS5vbmNlO1xuXG4gICAgICAgICAgdmFyIGNvbnRleHQgPSBjdHg7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKTtcblxuICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRlZDtcbn0pKCk7XG5cblRldGhlckJhc2UuVXRpbHMgPSB7XG4gIGdldEFjdHVhbEJvdW5kaW5nQ2xpZW50UmVjdDogZ2V0QWN0dWFsQm91bmRpbmdDbGllbnRSZWN0LFxuICBnZXRTY3JvbGxQYXJlbnRzOiBnZXRTY3JvbGxQYXJlbnRzLFxuICBnZXRCb3VuZHM6IGdldEJvdW5kcyxcbiAgZ2V0T2Zmc2V0UGFyZW50OiBnZXRPZmZzZXRQYXJlbnQsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgaGFzQ2xhc3M6IGhhc0NsYXNzLFxuICB1cGRhdGVDbGFzc2VzOiB1cGRhdGVDbGFzc2VzLFxuICBkZWZlcjogZGVmZXIsXG4gIGZsdXNoOiBmbHVzaCxcbiAgdW5pcXVlSWQ6IHVuaXF1ZUlkLFxuICBFdmVudGVkOiBFdmVudGVkLFxuICBnZXRTY3JvbGxCYXJTaXplOiBnZXRTY3JvbGxCYXJTaXplLFxuICByZW1vdmVVdGlsRWxlbWVudHM6IHJlbW92ZVV0aWxFbGVtZW50c1xufTtcbi8qIGdsb2JhbHMgVGV0aGVyQmFzZSwgcGVyZm9ybWFuY2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVsncmV0dXJuJ10pIF9pWydyZXR1cm4nXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlJyk7IH0gfTsgfSkoKTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3g2LCBfeDcsIF94OCkgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeDYsIHByb3BlcnR5ID0gX3g3LCByZWNlaXZlciA9IF94ODsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeDYgPSBwYXJlbnQ7IF94NyA9IHByb3BlcnR5OyBfeDggPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgZGVzYyA9IHBhcmVudCA9IHVuZGVmaW5lZDsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaWYgKHR5cGVvZiBUZXRoZXJCYXNlID09PSAndW5kZWZpbmVkJykge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IGluY2x1ZGUgdGhlIHV0aWxzLmpzIGZpbGUgYmVmb3JlIHRldGhlci5qcycpO1xufVxuXG52YXIgX1RldGhlckJhc2UkVXRpbHMgPSBUZXRoZXJCYXNlLlV0aWxzO1xudmFyIGdldFNjcm9sbFBhcmVudHMgPSBfVGV0aGVyQmFzZSRVdGlscy5nZXRTY3JvbGxQYXJlbnRzO1xudmFyIGdldEJvdW5kcyA9IF9UZXRoZXJCYXNlJFV0aWxzLmdldEJvdW5kcztcbnZhciBnZXRPZmZzZXRQYXJlbnQgPSBfVGV0aGVyQmFzZSRVdGlscy5nZXRPZmZzZXRQYXJlbnQ7XG52YXIgZXh0ZW5kID0gX1RldGhlckJhc2UkVXRpbHMuZXh0ZW5kO1xudmFyIGFkZENsYXNzID0gX1RldGhlckJhc2UkVXRpbHMuYWRkQ2xhc3M7XG52YXIgcmVtb3ZlQ2xhc3MgPSBfVGV0aGVyQmFzZSRVdGlscy5yZW1vdmVDbGFzcztcbnZhciB1cGRhdGVDbGFzc2VzID0gX1RldGhlckJhc2UkVXRpbHMudXBkYXRlQ2xhc3NlcztcbnZhciBkZWZlciA9IF9UZXRoZXJCYXNlJFV0aWxzLmRlZmVyO1xudmFyIGZsdXNoID0gX1RldGhlckJhc2UkVXRpbHMuZmx1c2g7XG52YXIgZ2V0U2Nyb2xsQmFyU2l6ZSA9IF9UZXRoZXJCYXNlJFV0aWxzLmdldFNjcm9sbEJhclNpemU7XG52YXIgcmVtb3ZlVXRpbEVsZW1lbnRzID0gX1RldGhlckJhc2UkVXRpbHMucmVtb3ZlVXRpbEVsZW1lbnRzO1xuXG5mdW5jdGlvbiB3aXRoaW4oYSwgYikge1xuICB2YXIgZGlmZiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMl07XG5cbiAgcmV0dXJuIGEgKyBkaWZmID49IGIgJiYgYiA+PSBhIC0gZGlmZjtcbn1cblxudmFyIHRyYW5zZm9ybUtleSA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHZhciB0cmFuc2Zvcm1zID0gWyd0cmFuc2Zvcm0nLCAnV2Via2l0VHJhbnNmb3JtJywgJ09UcmFuc2Zvcm0nLCAnTW96VHJhbnNmb3JtJywgJ21zVHJhbnNmb3JtJ107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhbnNmb3Jtcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBrZXkgPSB0cmFuc2Zvcm1zW2ldO1xuICAgIGlmIChlbC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG59KSgpO1xuXG52YXIgdGV0aGVycyA9IFtdO1xuXG52YXIgcG9zaXRpb24gPSBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgdGV0aGVycy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXRoZXIpIHtcbiAgICB0ZXRoZXIucG9zaXRpb24oZmFsc2UpO1xuICB9KTtcbiAgZmx1c2goKTtcbn07XG5cbmZ1bmN0aW9uIG5vdygpIHtcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgfVxuICByZXR1cm4gK25ldyBEYXRlKCk7XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXN0Q2FsbCA9IG51bGw7XG4gIHZhciBsYXN0RHVyYXRpb24gPSBudWxsO1xuICB2YXIgcGVuZGluZ1RpbWVvdXQgPSBudWxsO1xuXG4gIHZhciB0aWNrID0gZnVuY3Rpb24gdGljaygpIHtcbiAgICBpZiAodHlwZW9mIGxhc3REdXJhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbGFzdER1cmF0aW9uID4gMTYpIHtcbiAgICAgIC8vIFdlIHZvbHVudGFyaWx5IHRocm90dGxlIG91cnNlbHZlcyBpZiB3ZSBjYW4ndCBtYW5hZ2UgNjBmcHNcbiAgICAgIGxhc3REdXJhdGlvbiA9IE1hdGgubWluKGxhc3REdXJhdGlvbiAtIDE2LCAyNTApO1xuXG4gICAgICAvLyBKdXN0IGluIGNhc2UgdGhpcyBpcyB0aGUgbGFzdCBldmVudCwgcmVtZW1iZXIgdG8gcG9zaXRpb24ganVzdCBvbmNlIG1vcmVcbiAgICAgIHBlbmRpbmdUaW1lb3V0ID0gc2V0VGltZW91dCh0aWNrLCAyNTApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbGFzdENhbGwgIT09ICd1bmRlZmluZWQnICYmIG5vdygpIC0gbGFzdENhbGwgPCAxMCkge1xuICAgICAgLy8gU29tZSBicm93c2VycyBjYWxsIGV2ZW50cyBhIGxpdHRsZSB0b28gZnJlcXVlbnRseSwgcmVmdXNlIHRvIHJ1biBtb3JlIHRoYW4gaXMgcmVhc29uYWJsZVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwZW5kaW5nVGltZW91dCAhPSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQocGVuZGluZ1RpbWVvdXQpO1xuICAgICAgcGVuZGluZ1RpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGxhc3RDYWxsID0gbm93KCk7XG4gICAgcG9zaXRpb24oKTtcbiAgICBsYXN0RHVyYXRpb24gPSBub3coKSAtIGxhc3RDYWxsO1xuICB9O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgWydyZXNpemUnLCAnc2Nyb2xsJywgJ3RvdWNobW92ZSddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdGljayk7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbnZhciBNSVJST1JfTFIgPSB7XG4gIGNlbnRlcjogJ2NlbnRlcicsXG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCdcbn07XG5cbnZhciBNSVJST1JfVEIgPSB7XG4gIG1pZGRsZTogJ21pZGRsZScsXG4gIHRvcDogJ2JvdHRvbScsXG4gIGJvdHRvbTogJ3RvcCdcbn07XG5cbnZhciBPRkZTRVRfTUFQID0ge1xuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIG1pZGRsZTogJzUwJScsXG4gIGNlbnRlcjogJzUwJScsXG4gIGJvdHRvbTogJzEwMCUnLFxuICByaWdodDogJzEwMCUnXG59O1xuXG52YXIgYXV0b1RvRml4ZWRBdHRhY2htZW50ID0gZnVuY3Rpb24gYXV0b1RvRml4ZWRBdHRhY2htZW50KGF0dGFjaG1lbnQsIHJlbGF0aXZlVG9BdHRhY2htZW50KSB7XG4gIHZhciBsZWZ0ID0gYXR0YWNobWVudC5sZWZ0O1xuICB2YXIgdG9wID0gYXR0YWNobWVudC50b3A7XG5cbiAgaWYgKGxlZnQgPT09ICdhdXRvJykge1xuICAgIGxlZnQgPSBNSVJST1JfTFJbcmVsYXRpdmVUb0F0dGFjaG1lbnQubGVmdF07XG4gIH1cblxuICBpZiAodG9wID09PSAnYXV0bycpIHtcbiAgICB0b3AgPSBNSVJST1JfVEJbcmVsYXRpdmVUb0F0dGFjaG1lbnQudG9wXTtcbiAgfVxuXG4gIHJldHVybiB7IGxlZnQ6IGxlZnQsIHRvcDogdG9wIH07XG59O1xuXG52YXIgYXR0YWNobWVudFRvT2Zmc2V0ID0gZnVuY3Rpb24gYXR0YWNobWVudFRvT2Zmc2V0KGF0dGFjaG1lbnQpIHtcbiAgdmFyIGxlZnQgPSBhdHRhY2htZW50LmxlZnQ7XG4gIHZhciB0b3AgPSBhdHRhY2htZW50LnRvcDtcblxuICBpZiAodHlwZW9mIE9GRlNFVF9NQVBbYXR0YWNobWVudC5sZWZ0XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZWZ0ID0gT0ZGU0VUX01BUFthdHRhY2htZW50LmxlZnRdO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBPRkZTRVRfTUFQW2F0dGFjaG1lbnQudG9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0b3AgPSBPRkZTRVRfTUFQW2F0dGFjaG1lbnQudG9wXTtcbiAgfVxuXG4gIHJldHVybiB7IGxlZnQ6IGxlZnQsIHRvcDogdG9wIH07XG59O1xuXG5mdW5jdGlvbiBhZGRPZmZzZXQoKSB7XG4gIHZhciBvdXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvZmZzZXRzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgb2Zmc2V0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIG9mZnNldHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciB0b3AgPSBfcmVmLnRvcDtcbiAgICB2YXIgbGVmdCA9IF9yZWYubGVmdDtcblxuICAgIGlmICh0eXBlb2YgdG9wID09PSAnc3RyaW5nJykge1xuICAgICAgdG9wID0gcGFyc2VGbG9hdCh0b3AsIDEwKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsZWZ0ID09PSAnc3RyaW5nJykge1xuICAgICAgbGVmdCA9IHBhcnNlRmxvYXQobGVmdCwgMTApO1xuICAgIH1cblxuICAgIG91dC50b3AgKz0gdG9wO1xuICAgIG91dC5sZWZ0ICs9IGxlZnQ7XG4gIH0pO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIG9mZnNldFRvUHgob2Zmc2V0LCBzaXplKSB7XG4gIGlmICh0eXBlb2Ygb2Zmc2V0LmxlZnQgPT09ICdzdHJpbmcnICYmIG9mZnNldC5sZWZ0LmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICBvZmZzZXQubGVmdCA9IHBhcnNlRmxvYXQob2Zmc2V0LmxlZnQsIDEwKSAvIDEwMCAqIHNpemUud2lkdGg7XG4gIH1cbiAgaWYgKHR5cGVvZiBvZmZzZXQudG9wID09PSAnc3RyaW5nJyAmJiBvZmZzZXQudG9wLmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICBvZmZzZXQudG9wID0gcGFyc2VGbG9hdChvZmZzZXQudG9wLCAxMCkgLyAxMDAgKiBzaXplLmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbnZhciBwYXJzZU9mZnNldCA9IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KHZhbHVlKSB7XG4gIHZhciBfdmFsdWUkc3BsaXQgPSB2YWx1ZS5zcGxpdCgnICcpO1xuXG4gIHZhciBfdmFsdWUkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX3ZhbHVlJHNwbGl0LCAyKTtcblxuICB2YXIgdG9wID0gX3ZhbHVlJHNwbGl0MlswXTtcbiAgdmFyIGxlZnQgPSBfdmFsdWUkc3BsaXQyWzFdO1xuXG4gIHJldHVybiB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH07XG59O1xudmFyIHBhcnNlQXR0YWNobWVudCA9IHBhcnNlT2Zmc2V0O1xuXG52YXIgVGV0aGVyQ2xhc3MgPSAoZnVuY3Rpb24gKF9FdmVudGVkKSB7XG4gIF9pbmhlcml0cyhUZXRoZXJDbGFzcywgX0V2ZW50ZWQpO1xuXG4gIGZ1bmN0aW9uIFRldGhlckNsYXNzKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRldGhlckNsYXNzKTtcblxuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKFRldGhlckNsYXNzLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYmluZCh0aGlzKTtcblxuICAgIHRldGhlcnMucHVzaCh0aGlzKTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuXG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMsIGZhbHNlKTtcblxuICAgIFRldGhlckJhc2UubW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgIGlmICh0eXBlb2YgbW9kdWxlLmluaXRpYWxpemUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5pbml0aWFsaXplLmNhbGwoX3RoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5wb3NpdGlvbigpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRldGhlckNsYXNzLCBbe1xuICAgIGtleTogJ2dldENsYXNzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xhc3MoKSB7XG4gICAgICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgY2xhc3NlcyA9IHRoaXMub3B0aW9ucy5jbGFzc2VzO1xuXG4gICAgICBpZiAodHlwZW9mIGNsYXNzZXMgIT09ICd1bmRlZmluZWQnICYmIGNsYXNzZXNba2V5XSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsYXNzZXNba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNsYXNzUHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2xhc3NQcmVmaXggKyAnLScgKyBrZXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldE9wdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgcG9zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBvZmZzZXQ6ICcwIDAnLFxuICAgICAgICB0YXJnZXRPZmZzZXQ6ICcwIDAnLFxuICAgICAgICB0YXJnZXRBdHRhY2htZW50OiAnYXV0byBhdXRvJyxcbiAgICAgICAgY2xhc3NQcmVmaXg6ICd0ZXRoZXInXG4gICAgICB9O1xuXG4gICAgICB0aGlzLm9wdGlvbnMgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICB2YXIgX29wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICB2YXIgZWxlbWVudCA9IF9vcHRpb25zLmVsZW1lbnQ7XG4gICAgICB2YXIgdGFyZ2V0ID0gX29wdGlvbnMudGFyZ2V0O1xuICAgICAgdmFyIHRhcmdldE1vZGlmaWVyID0gX29wdGlvbnMudGFyZ2V0TW9kaWZpZXI7XG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgIHRoaXMudGFyZ2V0TW9kaWZpZXIgPSB0YXJnZXRNb2RpZmllcjtcblxuICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgdGhpcy50YXJnZXRNb2RpZmllciA9ICd2aXNpYmxlJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXQgPT09ICdzY3JvbGwtaGFuZGxlJykge1xuICAgICAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIHRoaXMudGFyZ2V0TW9kaWZpZXIgPSAnc2Nyb2xsLWhhbmRsZSc7XG4gICAgICB9XG5cbiAgICAgIFsnZWxlbWVudCcsICd0YXJnZXQnXS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpczJba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RldGhlciBFcnJvcjogQm90aCBlbGVtZW50IGFuZCB0YXJnZXQgbXVzdCBiZSBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIF90aGlzMltrZXldLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBfdGhpczJba2V5XSA9IF90aGlzMltrZXldWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhpczJba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBfdGhpczJba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoX3RoaXMyW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLmdldENsYXNzKCdlbGVtZW50JykpO1xuICAgICAgaWYgKCEodGhpcy5vcHRpb25zLmFkZFRhcmdldENsYXNzZXMgPT09IGZhbHNlKSkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLnRhcmdldCwgdGhpcy5nZXRDbGFzcygndGFyZ2V0JykpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hdHRhY2htZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGV0aGVyIEVycm9yOiBZb3UgbXVzdCBwcm92aWRlIGFuIGF0dGFjaG1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50YXJnZXRBdHRhY2htZW50ID0gcGFyc2VBdHRhY2htZW50KHRoaXMub3B0aW9ucy50YXJnZXRBdHRhY2htZW50KTtcbiAgICAgIHRoaXMuYXR0YWNobWVudCA9IHBhcnNlQXR0YWNobWVudCh0aGlzLm9wdGlvbnMuYXR0YWNobWVudCk7XG4gICAgICB0aGlzLm9mZnNldCA9IHBhcnNlT2Zmc2V0KHRoaXMub3B0aW9ucy5vZmZzZXQpO1xuICAgICAgdGhpcy50YXJnZXRPZmZzZXQgPSBwYXJzZU9mZnNldCh0aGlzLm9wdGlvbnMudGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNjcm9sbFBhcmVudHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50YXJnZXRNb2RpZmllciA9PT0gJ3Njcm9sbC1oYW5kbGUnKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50cyA9IFt0aGlzLnRhcmdldF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjcm9sbFBhcmVudHMgPSBnZXRTY3JvbGxQYXJlbnRzKHRoaXMudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEodGhpcy5vcHRpb25zLmVuYWJsZWQgPT09IGZhbHNlKSkge1xuICAgICAgICB0aGlzLmVuYWJsZShwb3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFRhcmdldEJvdW5kcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhcmdldEJvdW5kcygpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy50YXJnZXRNb2RpZmllciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0TW9kaWZpZXIgPT09ICd2aXNpYmxlJykge1xuICAgICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9wOiBwYWdlWU9mZnNldCwgbGVmdDogcGFnZVhPZmZzZXQsIGhlaWdodDogaW5uZXJIZWlnaHQsIHdpZHRoOiBpbm5lcldpZHRoIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBib3VuZHMgPSBnZXRCb3VuZHModGhpcy50YXJnZXQpO1xuXG4gICAgICAgICAgICB2YXIgb3V0ID0ge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGJvdW5kcy5oZWlnaHQsXG4gICAgICAgICAgICAgIHdpZHRoOiBib3VuZHMud2lkdGgsXG4gICAgICAgICAgICAgIHRvcDogYm91bmRzLnRvcCxcbiAgICAgICAgICAgICAgbGVmdDogYm91bmRzLmxlZnRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG91dC5oZWlnaHQgPSBNYXRoLm1pbihvdXQuaGVpZ2h0LCBib3VuZHMuaGVpZ2h0IC0gKHBhZ2VZT2Zmc2V0IC0gYm91bmRzLnRvcCkpO1xuICAgICAgICAgICAgb3V0LmhlaWdodCA9IE1hdGgubWluKG91dC5oZWlnaHQsIGJvdW5kcy5oZWlnaHQgLSAoYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQgLSAocGFnZVlPZmZzZXQgKyBpbm5lckhlaWdodCkpKTtcbiAgICAgICAgICAgIG91dC5oZWlnaHQgPSBNYXRoLm1pbihpbm5lckhlaWdodCwgb3V0LmhlaWdodCk7XG4gICAgICAgICAgICBvdXQuaGVpZ2h0IC09IDI7XG5cbiAgICAgICAgICAgIG91dC53aWR0aCA9IE1hdGgubWluKG91dC53aWR0aCwgYm91bmRzLndpZHRoIC0gKHBhZ2VYT2Zmc2V0IC0gYm91bmRzLmxlZnQpKTtcbiAgICAgICAgICAgIG91dC53aWR0aCA9IE1hdGgubWluKG91dC53aWR0aCwgYm91bmRzLndpZHRoIC0gKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoIC0gKHBhZ2VYT2Zmc2V0ICsgaW5uZXJXaWR0aCkpKTtcbiAgICAgICAgICAgIG91dC53aWR0aCA9IE1hdGgubWluKGlubmVyV2lkdGgsIG91dC53aWR0aCk7XG4gICAgICAgICAgICBvdXQud2lkdGggLT0gMjtcblxuICAgICAgICAgICAgaWYgKG91dC50b3AgPCBwYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgICBvdXQudG9wID0gcGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3V0LmxlZnQgPCBwYWdlWE9mZnNldCkge1xuICAgICAgICAgICAgICBvdXQubGVmdCA9IHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldE1vZGlmaWVyID09PSAnc2Nyb2xsLWhhbmRsZScpIHtcbiAgICAgICAgICB2YXIgYm91bmRzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgICBpZiAodGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGJvdW5kcyA9IHtcbiAgICAgICAgICAgICAgbGVmdDogcGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgIHRvcDogcGFnZVlPZmZzZXQsXG4gICAgICAgICAgICAgIGhlaWdodDogaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgIHdpZHRoOiBpbm5lcldpZHRoXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib3VuZHMgPSBnZXRCb3VuZHModGFyZ2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG5cbiAgICAgICAgICB2YXIgaGFzQm90dG9tU2Nyb2xsID0gdGFyZ2V0LnNjcm9sbFdpZHRoID4gdGFyZ2V0LmNsaWVudFdpZHRoIHx8IFtzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYXS5pbmRleE9mKCdzY3JvbGwnKSA+PSAwIHx8IHRoaXMudGFyZ2V0ICE9PSBkb2N1bWVudC5ib2R5O1xuXG4gICAgICAgICAgdmFyIHNjcm9sbEJvdHRvbSA9IDA7XG4gICAgICAgICAgaWYgKGhhc0JvdHRvbVNjcm9sbCkge1xuICAgICAgICAgICAgc2Nyb2xsQm90dG9tID0gMTU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGhlaWdodCA9IGJvdW5kcy5oZWlnaHQgLSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKSAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpIC0gc2Nyb2xsQm90dG9tO1xuXG4gICAgICAgICAgdmFyIG91dCA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICogMC45NzUgKiAoaGVpZ2h0IC8gdGFyZ2V0LnNjcm9sbEhlaWdodCksXG4gICAgICAgICAgICBsZWZ0OiBib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSAtIDE1XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBmaXRBZGogPSAwO1xuICAgICAgICAgIGlmIChoZWlnaHQgPCA0MDggJiYgdGhpcy50YXJnZXQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGZpdEFkaiA9IC0wLjAwMDExICogTWF0aC5wb3coaGVpZ2h0LCAyKSAtIDAuMDA3MjcgKiBoZWlnaHQgKyAyMi41ODtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy50YXJnZXQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIG91dC5oZWlnaHQgPSBNYXRoLm1heChvdXQuaGVpZ2h0LCAyNCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNjcm9sbFBlcmNlbnRhZ2UgPSB0aGlzLnRhcmdldC5zY3JvbGxUb3AgLyAodGFyZ2V0LnNjcm9sbEhlaWdodCAtIGhlaWdodCk7XG4gICAgICAgICAgb3V0LnRvcCA9IHNjcm9sbFBlcmNlbnRhZ2UgKiAoaGVpZ2h0IC0gb3V0LmhlaWdodCAtIGZpdEFkaikgKyBib3VuZHMudG9wICsgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG5cbiAgICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIG91dC5oZWlnaHQgPSBNYXRoLm1heChvdXQuaGVpZ2h0LCAyNCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdldEJvdW5kcyh0aGlzLnRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xlYXJDYWNoZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyQ2FjaGUoKSB7XG4gICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhY2hlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FjaGUoaywgZ2V0dGVyKSB7XG4gICAgICAvLyBNb3JlIHRoYW4gb25lIG1vZHVsZSB3aWxsIG9mdGVuIG5lZWQgdGhlIHNhbWUgRE9NIGluZm8sIHNvXG4gICAgICAvLyB3ZSBrZWVwIGEgY2FjaGUgd2hpY2ggaXMgY2xlYXJlZCBvbiBlYWNoIHBvc2l0aW9uIGNhbGxcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY2FjaGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY2FjaGVba10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlW2tdID0gZ2V0dGVyLmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtrXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmFibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIGlmICghKHRoaXMub3B0aW9ucy5hZGRUYXJnZXRDbGFzc2VzID09PSBmYWxzZSkpIHtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMuZ2V0Q2xhc3MoJ2VuYWJsZWQnKSk7XG4gICAgICB9XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIHRoaXMuZ2V0Q2xhc3MoJ2VuYWJsZWQnKSk7XG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLnNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQgIT09IF90aGlzMy50YXJnZXQub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfdGhpczMucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHBvcykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy50YXJnZXQsIHRoaXMuZ2V0Q2xhc3MoJ2VuYWJsZWQnKSk7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIHRoaXMuZ2V0Q2xhc3MoJ2VuYWJsZWQnKSk7XG4gICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNjcm9sbFBhcmVudHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3RoaXM0LnBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdGhpcy5kaXNhYmxlKCk7XG5cbiAgICAgIHRldGhlcnMuZm9yRWFjaChmdW5jdGlvbiAodGV0aGVyLCBpKSB7XG4gICAgICAgIGlmICh0ZXRoZXIgPT09IF90aGlzNSkge1xuICAgICAgICAgIHRldGhlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVtb3ZlIGFueSBlbGVtZW50cyB3ZSB3ZXJlIHVzaW5nIGZvciBjb252ZW5pZW5jZSBmcm9tIHRoZSBET01cbiAgICAgIGlmICh0ZXRoZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVVdGlsRWxlbWVudHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVBdHRhY2hDbGFzc2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQXR0YWNoQ2xhc3NlcyhlbGVtZW50QXR0YWNoLCB0YXJnZXRBdHRhY2gpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBlbGVtZW50QXR0YWNoID0gZWxlbWVudEF0dGFjaCB8fCB0aGlzLmF0dGFjaG1lbnQ7XG4gICAgICB0YXJnZXRBdHRhY2ggPSB0YXJnZXRBdHRhY2ggfHwgdGhpcy50YXJnZXRBdHRhY2htZW50O1xuICAgICAgdmFyIHNpZGVzID0gWydsZWZ0JywgJ3RvcCcsICdib3R0b20nLCAncmlnaHQnLCAnbWlkZGxlJywgJ2NlbnRlciddO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIHVwZGF0ZUF0dGFjaENsYXNzZXMgY2FuIGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZSBpbiBhIHBvc2l0aW9uIGNhbGwsIHNvXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gY2xlYW4gdXAgYWZ0ZXIgb3Vyc2VsdmVzIHN1Y2ggdGhhdCB3aGVuIHRoZSBsYXN0IGRlZmVyIGdldHNcbiAgICAgICAgLy8gcmFuIGl0IGRvZXNuJ3QgYWRkIGFueSBleHRyYSBjbGFzc2VzIGZyb20gcHJldmlvdXMgY2FsbHMuXG4gICAgICAgIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMuc3BsaWNlKDAsIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hZGRBdHRhY2hDbGFzc2VzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9hZGRBdHRhY2hDbGFzc2VzID0gW107XG4gICAgICB9XG4gICAgICB2YXIgYWRkID0gdGhpcy5fYWRkQXR0YWNoQ2xhc3NlcztcblxuICAgICAgaWYgKGVsZW1lbnRBdHRhY2gudG9wKSB7XG4gICAgICAgIGFkZC5wdXNoKHRoaXMuZ2V0Q2xhc3MoJ2VsZW1lbnQtYXR0YWNoZWQnKSArICctJyArIGVsZW1lbnRBdHRhY2gudG9wKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50QXR0YWNoLmxlZnQpIHtcbiAgICAgICAgYWRkLnB1c2godGhpcy5nZXRDbGFzcygnZWxlbWVudC1hdHRhY2hlZCcpICsgJy0nICsgZWxlbWVudEF0dGFjaC5sZWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRBdHRhY2gudG9wKSB7XG4gICAgICAgIGFkZC5wdXNoKHRoaXMuZ2V0Q2xhc3MoJ3RhcmdldC1hdHRhY2hlZCcpICsgJy0nICsgdGFyZ2V0QXR0YWNoLnRvcCk7XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0QXR0YWNoLmxlZnQpIHtcbiAgICAgICAgYWRkLnB1c2godGhpcy5nZXRDbGFzcygndGFyZ2V0LWF0dGFjaGVkJykgKyAnLScgKyB0YXJnZXRBdHRhY2gubGVmdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhbGwgPSBbXTtcbiAgICAgIHNpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgYWxsLnB1c2goX3RoaXM2LmdldENsYXNzKCdlbGVtZW50LWF0dGFjaGVkJykgKyAnLScgKyBzaWRlKTtcbiAgICAgICAgYWxsLnB1c2goX3RoaXM2LmdldENsYXNzKCd0YXJnZXQtYXR0YWNoZWQnKSArICctJyArIHNpZGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEodHlwZW9mIF90aGlzNi5fYWRkQXR0YWNoQ2xhc3NlcyAhPT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ2xhc3NlcyhfdGhpczYuZWxlbWVudCwgX3RoaXM2Ll9hZGRBdHRhY2hDbGFzc2VzLCBhbGwpO1xuICAgICAgICBpZiAoIShfdGhpczYub3B0aW9ucy5hZGRUYXJnZXRDbGFzc2VzID09PSBmYWxzZSkpIHtcbiAgICAgICAgICB1cGRhdGVDbGFzc2VzKF90aGlzNi50YXJnZXQsIF90aGlzNi5fYWRkQXR0YWNoQ2xhc3NlcywgYWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBfdGhpczYuX2FkZEF0dGFjaENsYXNzZXM7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHZhciBmbHVzaENoYW5nZXMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAvLyBmbHVzaENoYW5nZXMgY29tbWl0cyB0aGUgY2hhbmdlcyBpbW1lZGlhdGVseSwgbGVhdmUgdHJ1ZSB1bmxlc3MgeW91IGFyZSBwb3NpdGlvbmluZyBtdWx0aXBsZVxuICAgICAgLy8gdGV0aGVycyAoaW4gd2hpY2ggY2FzZSBjYWxsIFRldGhlci5VdGlscy5mbHVzaCB5b3Vyc2VsZiB3aGVuIHlvdSdyZSBkb25lKVxuXG4gICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuXG4gICAgICAvLyBUdXJuICdhdXRvJyBhdHRhY2htZW50cyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBjb3JuZXIgb3IgZWRnZVxuICAgICAgdmFyIHRhcmdldEF0dGFjaG1lbnQgPSBhdXRvVG9GaXhlZEF0dGFjaG1lbnQodGhpcy50YXJnZXRBdHRhY2htZW50LCB0aGlzLmF0dGFjaG1lbnQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZUF0dGFjaENsYXNzZXModGhpcy5hdHRhY2htZW50LCB0YXJnZXRBdHRhY2htZW50KTtcblxuICAgICAgdmFyIGVsZW1lbnRQb3MgPSB0aGlzLmNhY2hlKCdlbGVtZW50LWJvdW5kcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldEJvdW5kcyhfdGhpczcuZWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHdpZHRoID0gZWxlbWVudFBvcy53aWR0aDtcbiAgICAgIHZhciBoZWlnaHQgPSBlbGVtZW50UG9zLmhlaWdodDtcblxuICAgICAgaWYgKHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMCAmJiB0eXBlb2YgdGhpcy5sYXN0U2l6ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIF9sYXN0U2l6ZSA9IHRoaXMubGFzdFNpemU7XG5cbiAgICAgICAgLy8gV2UgY2FjaGUgdGhlIGhlaWdodCBhbmQgd2lkdGggdG8gbWFrZSBpdCBwb3NzaWJsZSB0byBwb3NpdGlvbiBlbGVtZW50cyB0aGF0IGFyZVxuICAgICAgICAvLyBnZXR0aW5nIGhpZGRlbi5cbiAgICAgICAgd2lkdGggPSBfbGFzdFNpemUud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IF9sYXN0U2l6ZS5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3RTaXplID0geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXRQb3MgPSB0aGlzLmNhY2hlKCd0YXJnZXQtYm91bmRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM3LmdldFRhcmdldEJvdW5kcygpO1xuICAgICAgfSk7XG4gICAgICB2YXIgdGFyZ2V0U2l6ZSA9IHRhcmdldFBvcztcblxuICAgICAgLy8gR2V0IGFuIGFjdHVhbCBweCBvZmZzZXQgZnJvbSB0aGUgYXR0YWNobWVudFxuICAgICAgdmFyIG9mZnNldCA9IG9mZnNldFRvUHgoYXR0YWNobWVudFRvT2Zmc2V0KHRoaXMuYXR0YWNobWVudCksIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcbiAgICAgIHZhciB0YXJnZXRPZmZzZXQgPSBvZmZzZXRUb1B4KGF0dGFjaG1lbnRUb09mZnNldCh0YXJnZXRBdHRhY2htZW50KSwgdGFyZ2V0U2l6ZSk7XG5cbiAgICAgIHZhciBtYW51YWxPZmZzZXQgPSBvZmZzZXRUb1B4KHRoaXMub2Zmc2V0LCB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgICB2YXIgbWFudWFsVGFyZ2V0T2Zmc2V0ID0gb2Zmc2V0VG9QeCh0aGlzLnRhcmdldE9mZnNldCwgdGFyZ2V0U2l6ZSk7XG5cbiAgICAgIC8vIEFkZCB0aGUgbWFudWFsbHkgcHJvdmlkZWQgb2Zmc2V0XG4gICAgICBvZmZzZXQgPSBhZGRPZmZzZXQob2Zmc2V0LCBtYW51YWxPZmZzZXQpO1xuICAgICAgdGFyZ2V0T2Zmc2V0ID0gYWRkT2Zmc2V0KHRhcmdldE9mZnNldCwgbWFudWFsVGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgLy8gSXQncyBub3cgb3VyIGdvYWwgdG8gbWFrZSAoZWxlbWVudCBwb3NpdGlvbiArIG9mZnNldCkgPT0gKHRhcmdldCBwb3NpdGlvbiArIHRhcmdldCBvZmZzZXQpXG4gICAgICB2YXIgbGVmdCA9IHRhcmdldFBvcy5sZWZ0ICsgdGFyZ2V0T2Zmc2V0LmxlZnQgLSBvZmZzZXQubGVmdDtcbiAgICAgIHZhciB0b3AgPSB0YXJnZXRQb3MudG9wICsgdGFyZ2V0T2Zmc2V0LnRvcCAtIG9mZnNldC50b3A7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVGV0aGVyQmFzZS5tb2R1bGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBfbW9kdWxlMiA9IFRldGhlckJhc2UubW9kdWxlc1tpXTtcbiAgICAgICAgdmFyIHJldCA9IF9tb2R1bGUyLnBvc2l0aW9uLmNhbGwodGhpcywge1xuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgdGFyZ2V0QXR0YWNobWVudDogdGFyZ2V0QXR0YWNobWVudCxcbiAgICAgICAgICB0YXJnZXRQb3M6IHRhcmdldFBvcyxcbiAgICAgICAgICBlbGVtZW50UG9zOiBlbGVtZW50UG9zLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0LFxuICAgICAgICAgIG1hbnVhbE9mZnNldDogbWFudWFsT2Zmc2V0LFxuICAgICAgICAgIG1hbnVhbFRhcmdldE9mZnNldDogbWFudWFsVGFyZ2V0T2Zmc2V0LFxuICAgICAgICAgIHNjcm9sbGJhclNpemU6IHNjcm9sbGJhclNpemUsXG4gICAgICAgICAgYXR0YWNobWVudDogdGhpcy5hdHRhY2htZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiByZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wID0gcmV0LnRvcDtcbiAgICAgICAgICBsZWZ0ID0gcmV0LmxlZnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gV2UgZGVzY3JpYmUgdGhlIHBvc2l0aW9uIHRocmVlIGRpZmZlcmVudCB3YXlzIHRvIGdpdmUgdGhlIG9wdGltaXplclxuICAgICAgLy8gYSBjaGFuY2UgdG8gZGVjaWRlIHRoZSBiZXN0IHBvc3NpYmxlIHdheSB0byBwb3NpdGlvbiB0aGUgZWxlbWVudFxuICAgICAgLy8gd2l0aCB0aGUgZmV3ZXN0IHJlcGFpbnRzLlxuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIC8vIEl0J3MgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHBhZ2UgKGFic29sdXRlIHBvc2l0aW9uaW5nIHdoZW5cbiAgICAgICAgLy8gdGhlIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiB0aGUgYm9keSlcbiAgICAgICAgcGFnZToge1xuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIGxlZnQ6IGxlZnRcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBJdCdzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydCAoZml4ZWQgcG9zaXRpb25pbmcpXG4gICAgICAgIHZpZXdwb3J0OiB7XG4gICAgICAgICAgdG9wOiB0b3AgLSBwYWdlWU9mZnNldCxcbiAgICAgICAgICBib3R0b206IHBhZ2VZT2Zmc2V0IC0gdG9wIC0gaGVpZ2h0ICsgaW5uZXJIZWlnaHQsXG4gICAgICAgICAgbGVmdDogbGVmdCAtIHBhZ2VYT2Zmc2V0LFxuICAgICAgICAgIHJpZ2h0OiBwYWdlWE9mZnNldCAtIGxlZnQgLSB3aWR0aCArIGlubmVyV2lkdGhcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGRvYyA9IHRoaXMudGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gICAgICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3O1xuXG4gICAgICB2YXIgc2Nyb2xsYmFyU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh3aW4uaW5uZXJIZWlnaHQgPiBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICBzY3JvbGxiYXJTaXplID0gdGhpcy5jYWNoZSgnc2Nyb2xsYmFyLXNpemUnLCBnZXRTY3JvbGxCYXJTaXplKTtcbiAgICAgICAgbmV4dC52aWV3cG9ydC5ib3R0b20gLT0gc2Nyb2xsYmFyU2l6ZS5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW4uaW5uZXJXaWR0aCA+IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgc2Nyb2xsYmFyU2l6ZSA9IHRoaXMuY2FjaGUoJ3Njcm9sbGJhci1zaXplJywgZ2V0U2Nyb2xsQmFyU2l6ZSk7XG4gICAgICAgIG5leHQudmlld3BvcnQucmlnaHQgLT0gc2Nyb2xsYmFyU2l6ZS53aWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKFsnJywgJ3N0YXRpYyddLmluZGV4T2YoZG9jLmJvZHkuc3R5bGUucG9zaXRpb24pID09PSAtMSB8fCBbJycsICdzdGF0aWMnXS5pbmRleE9mKGRvYy5ib2R5LnBhcmVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24pID09PSAtMSkge1xuICAgICAgICAvLyBBYnNvbHV0ZSBwb3NpdGlvbmluZyBpbiB0aGUgYm9keSB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoZSBwYWdlLCBub3QgdGhlICdpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2snXG4gICAgICAgIG5leHQucGFnZS5ib3R0b20gPSBkb2MuYm9keS5zY3JvbGxIZWlnaHQgLSB0b3AgLSBoZWlnaHQ7XG4gICAgICAgIG5leHQucGFnZS5yaWdodCA9IGRvYy5ib2R5LnNjcm9sbFdpZHRoIC0gbGVmdCAtIHdpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vcHRpbWl6YXRpb25zICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm9wdGlvbnMub3B0aW1pemF0aW9ucy5tb3ZlRWxlbWVudCAhPT0gZmFsc2UgJiYgISh0eXBlb2YgdGhpcy50YXJnZXRNb2RpZmllciAhPT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG9mZnNldFBhcmVudCA9IF90aGlzNy5jYWNoZSgndGFyZ2V0LW9mZnNldHBhcmVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoX3RoaXM3LnRhcmdldCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIG9mZnNldFBvc2l0aW9uID0gX3RoaXM3LmNhY2hlKCd0YXJnZXQtb2Zmc2V0cGFyZW50LWJvdW5kcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCb3VuZHMob2Zmc2V0UGFyZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgb2Zmc2V0UGFyZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCk7XG4gICAgICAgICAgdmFyIG9mZnNldFBhcmVudFNpemUgPSBvZmZzZXRQb3NpdGlvbjtcblxuICAgICAgICAgIHZhciBvZmZzZXRCb3JkZXIgPSB7fTtcbiAgICAgICAgICBbJ1RvcCcsICdMZWZ0JywgJ0JvdHRvbScsICdSaWdodCddLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgICAgIG9mZnNldEJvcmRlcltzaWRlLnRvTG93ZXJDYXNlKCldID0gcGFyc2VGbG9hdChvZmZzZXRQYXJlbnRTdHlsZVsnYm9yZGVyJyArIHNpZGUgKyAnV2lkdGgnXSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBvZmZzZXRQb3NpdGlvbi5yaWdodCA9IGRvYy5ib2R5LnNjcm9sbFdpZHRoIC0gb2Zmc2V0UG9zaXRpb24ubGVmdCAtIG9mZnNldFBhcmVudFNpemUud2lkdGggKyBvZmZzZXRCb3JkZXIucmlnaHQ7XG4gICAgICAgICAgb2Zmc2V0UG9zaXRpb24uYm90dG9tID0gZG9jLmJvZHkuc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0UG9zaXRpb24udG9wIC0gb2Zmc2V0UGFyZW50U2l6ZS5oZWlnaHQgKyBvZmZzZXRCb3JkZXIuYm90dG9tO1xuXG4gICAgICAgICAgaWYgKG5leHQucGFnZS50b3AgPj0gb2Zmc2V0UG9zaXRpb24udG9wICsgb2Zmc2V0Qm9yZGVyLnRvcCAmJiBuZXh0LnBhZ2UuYm90dG9tID49IG9mZnNldFBvc2l0aW9uLmJvdHRvbSkge1xuICAgICAgICAgICAgaWYgKG5leHQucGFnZS5sZWZ0ID49IG9mZnNldFBvc2l0aW9uLmxlZnQgKyBvZmZzZXRCb3JkZXIubGVmdCAmJiBuZXh0LnBhZ2UucmlnaHQgPj0gb2Zmc2V0UG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICAgICAgLy8gV2UncmUgd2l0aGluIHRoZSB2aXNpYmxlIHBhcnQgb2YgdGhlIHRhcmdldCdzIHNjcm9sbCBwYXJlbnRcbiAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IG9mZnNldFBhcmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQ7XG5cbiAgICAgICAgICAgICAgLy8gSXQncyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgdGFyZ2V0J3Mgb2Zmc2V0IHBhcmVudCAoYWJzb2x1dGUgcG9zaXRpb25pbmcgd2hlblxuICAgICAgICAgICAgICAvLyB0aGUgZWxlbWVudCBpcyBtb3ZlZCB0byBiZSBhIGNoaWxkIG9mIHRoZSB0YXJnZXQncyBvZmZzZXQgcGFyZW50KS5cbiAgICAgICAgICAgICAgbmV4dC5vZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiBuZXh0LnBhZ2UudG9wIC0gb2Zmc2V0UG9zaXRpb24udG9wICsgc2Nyb2xsVG9wIC0gb2Zmc2V0Qm9yZGVyLnRvcCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBuZXh0LnBhZ2UubGVmdCAtIG9mZnNldFBvc2l0aW9uLmxlZnQgKyBzY3JvbGxMZWZ0IC0gb2Zmc2V0Qm9yZGVyLmxlZnRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIGNvdWxkIGFsc28gdHJhdmVsIHVwIHRoZSBET00gYW5kIHRyeSBlYWNoIGNvbnRhaW5pbmcgY29udGV4dCwgcmF0aGVyIHRoYW4gb25seVxuICAgICAgLy8gbG9va2luZyBhdCB0aGUgYm9keSwgYnV0IHdlJ3JlIGdvbm5hIGdldCBkaW1pbmlzaGluZyByZXR1cm5zLlxuXG4gICAgICB0aGlzLm1vdmUobmV4dCk7XG5cbiAgICAgIHRoaXMuaGlzdG9yeS51bnNoaWZ0KG5leHQpO1xuXG4gICAgICBpZiAodGhpcy5oaXN0b3J5Lmxlbmd0aCA+IDMpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5LnBvcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmx1c2hDaGFuZ2VzKSB7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFRIRSBJU1NVRVxuICB9LCB7XG4gICAga2V5OiAnbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmUocG9zKSB7XG4gICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgaWYgKCEodHlwZW9mIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2FtZSA9IHt9O1xuXG4gICAgICBmb3IgKHZhciB0eXBlIGluIHBvcykge1xuICAgICAgICBzYW1lW3R5cGVdID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHBvc1t0eXBlXSkge1xuICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhpc3RvcnkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHRoaXMuaGlzdG9yeVtpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnRbdHlwZV0gIT09ICd1bmRlZmluZWQnICYmICF3aXRoaW4ocG9pbnRbdHlwZV1ba2V5XSwgcG9zW3R5cGVdW2tleV0pKSB7XG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgc2FtZVt0eXBlXVtrZXldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNzcyA9IHsgdG9wOiAnJywgbGVmdDogJycsIHJpZ2h0OiAnJywgYm90dG9tOiAnJyB9O1xuXG4gICAgICB2YXIgdHJhbnNjcmliZSA9IGZ1bmN0aW9uIHRyYW5zY3JpYmUoX3NhbWUsIF9wb3MpIHtcbiAgICAgICAgdmFyIGhhc09wdGltaXphdGlvbnMgPSB0eXBlb2YgX3RoaXM4Lm9wdGlvbnMub3B0aW1pemF0aW9ucyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIHZhciBncHUgPSBoYXNPcHRpbWl6YXRpb25zID8gX3RoaXM4Lm9wdGlvbnMub3B0aW1pemF0aW9ucy5ncHUgOiBudWxsO1xuICAgICAgICBpZiAoZ3B1ICE9PSBmYWxzZSkge1xuICAgICAgICAgIHZhciB5UG9zID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB4UG9zID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmIChfc2FtZS50b3ApIHtcbiAgICAgICAgICAgIGNzcy50b3AgPSAwO1xuICAgICAgICAgICAgeVBvcyA9IF9wb3MudG9wO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3MuYm90dG9tID0gMDtcbiAgICAgICAgICAgIHlQb3MgPSAtX3Bvcy5ib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF9zYW1lLmxlZnQpIHtcbiAgICAgICAgICAgIGNzcy5sZWZ0ID0gMDtcbiAgICAgICAgICAgIHhQb3MgPSBfcG9zLmxlZnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzcy5yaWdodCA9IDA7XG4gICAgICAgICAgICB4UG9zID0gLV9wb3MucmlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgICAgICAvLyBIdWJTcG90L3RldGhlciMyMDdcbiAgICAgICAgICAgIHZhciByZXRpbmEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMS4zZHBweCknKS5tYXRjaGVzIHx8IHdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4zKScpLm1hdGNoZXM7XG4gICAgICAgICAgICBpZiAoIXJldGluYSkge1xuICAgICAgICAgICAgICB4UG9zID0gTWF0aC5yb3VuZCh4UG9zKTtcbiAgICAgICAgICAgICAgeVBvcyA9IE1hdGgucm91bmQoeVBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3NzW3RyYW5zZm9ybUtleV0gPSAndHJhbnNsYXRlWCgnICsgeFBvcyArICdweCkgdHJhbnNsYXRlWSgnICsgeVBvcyArICdweCknO1xuXG4gICAgICAgICAgaWYgKHRyYW5zZm9ybUtleSAhPT0gJ21zVHJhbnNmb3JtJykge1xuICAgICAgICAgICAgLy8gVGhlIFogdHJhbnNmb3JtIHdpbGwga2VlcCB0aGlzIGluIHRoZSBHUFUgKGZhc3RlciwgYW5kIHByZXZlbnRzIGFydGlmYWN0cyksXG4gICAgICAgICAgICAvLyBidXQgSUU5IGRvZXNuJ3Qgc3VwcG9ydCAzZCB0cmFuc2Zvcm1zIGFuZCB3aWxsIGNob2tlLlxuICAgICAgICAgICAgY3NzW3RyYW5zZm9ybUtleV0gKz0gXCIgdHJhbnNsYXRlWigwKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoX3NhbWUudG9wKSB7XG4gICAgICAgICAgICBjc3MudG9wID0gX3Bvcy50b3AgKyAncHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3MuYm90dG9tID0gX3Bvcy5ib3R0b20gKyAncHgnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfc2FtZS5sZWZ0KSB7XG4gICAgICAgICAgICBjc3MubGVmdCA9IF9wb3MubGVmdCArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzcy5yaWdodCA9IF9wb3MucmlnaHQgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG1vdmVkID0gZmFsc2U7XG4gICAgICBpZiAoKHNhbWUucGFnZS50b3AgfHwgc2FtZS5wYWdlLmJvdHRvbSkgJiYgKHNhbWUucGFnZS5sZWZ0IHx8IHNhbWUucGFnZS5yaWdodCkpIHtcbiAgICAgICAgY3NzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdHJhbnNjcmliZShzYW1lLnBhZ2UsIHBvcy5wYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAoKHNhbWUudmlld3BvcnQudG9wIHx8IHNhbWUudmlld3BvcnQuYm90dG9tKSAmJiAoc2FtZS52aWV3cG9ydC5sZWZ0IHx8IHNhbWUudmlld3BvcnQucmlnaHQpKSB7XG4gICAgICAgIGNzcy5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHRyYW5zY3JpYmUoc2FtZS52aWV3cG9ydCwgcG9zLnZpZXdwb3J0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNhbWUub2Zmc2V0ICE9PSAndW5kZWZpbmVkJyAmJiBzYW1lLm9mZnNldC50b3AgJiYgc2FtZS5vZmZzZXQubGVmdCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNzcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgdmFyIG9mZnNldFBhcmVudCA9IF90aGlzOC5jYWNoZSgndGFyZ2V0LW9mZnNldHBhcmVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoX3RoaXM4LnRhcmdldCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoZ2V0T2Zmc2V0UGFyZW50KF90aGlzOC5lbGVtZW50KSAhPT0gb2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgICBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzOC5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX3RoaXM4LmVsZW1lbnQpO1xuICAgICAgICAgICAgICBvZmZzZXRQYXJlbnQuYXBwZW5kQ2hpbGQoX3RoaXM4LmVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJhbnNjcmliZShzYW1lLm9mZnNldCwgcG9zLm9mZnNldCk7XG4gICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICB9KSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdHJhbnNjcmliZSh7IHRvcDogdHJ1ZSwgbGVmdDogdHJ1ZSB9LCBwb3MucGFnZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbW92ZWQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ib2R5RWxlbWVudCkge1xuICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSAhPT0gdGhpcy5vcHRpb25zLmJvZHlFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYm9keUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG9mZnNldFBhcmVudElzQm9keSA9IHRydWU7XG4gICAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAxICYmIGN1cnJlbnROb2RlLnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgICAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICAgICAgICBvZmZzZXRQYXJlbnRJc0JvZHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW9mZnNldFBhcmVudElzQm9keSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQW55IGNzcyBjaGFuZ2Ugd2lsbCB0cmlnZ2VyIGEgcmVwYWludCwgc28gbGV0J3MgYXZvaWQgb25lIGlmIG5vdGhpbmcgY2hhbmdlZFxuICAgICAgdmFyIHdyaXRlQ1NTID0ge307XG4gICAgICB2YXIgd3JpdGUgPSBmYWxzZTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBjc3MpIHtcbiAgICAgICAgdmFyIHZhbCA9IGNzc1trZXldO1xuICAgICAgICB2YXIgZWxWYWwgPSB0aGlzLmVsZW1lbnQuc3R5bGVba2V5XTtcblxuICAgICAgICBpZiAoZWxWYWwgIT09IHZhbCkge1xuICAgICAgICAgIHdyaXRlID0gdHJ1ZTtcbiAgICAgICAgICB3cml0ZUNTU1trZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh3cml0ZSkge1xuICAgICAgICBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZXh0ZW5kKF90aGlzOC5lbGVtZW50LnN0eWxlLCB3cml0ZUNTUyk7XG4gICAgICAgICAgX3RoaXM4LnRyaWdnZXIoJ3JlcG9zaXRpb25lZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGV0aGVyQ2xhc3M7XG59KShFdmVudGVkKTtcblxuVGV0aGVyQ2xhc3MubW9kdWxlcyA9IFtdO1xuXG5UZXRoZXJCYXNlLnBvc2l0aW9uID0gcG9zaXRpb247XG5cbnZhciBUZXRoZXIgPSBleHRlbmQoVGV0aGVyQ2xhc3MsIFRldGhlckJhc2UpO1xuLyogZ2xvYmFscyBUZXRoZXJCYXNlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbJ3JldHVybiddKSBfaVsncmV0dXJuJ10oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZScpOyB9IH07IH0pKCk7XG5cbnZhciBfVGV0aGVyQmFzZSRVdGlscyA9IFRldGhlckJhc2UuVXRpbHM7XG52YXIgZ2V0Qm91bmRzID0gX1RldGhlckJhc2UkVXRpbHMuZ2V0Qm91bmRzO1xudmFyIGV4dGVuZCA9IF9UZXRoZXJCYXNlJFV0aWxzLmV4dGVuZDtcbnZhciB1cGRhdGVDbGFzc2VzID0gX1RldGhlckJhc2UkVXRpbHMudXBkYXRlQ2xhc3NlcztcbnZhciBkZWZlciA9IF9UZXRoZXJCYXNlJFV0aWxzLmRlZmVyO1xuXG52YXIgQk9VTkRTX0ZPUk1BVCA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJ107XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nUmVjdCh0ZXRoZXIsIHRvKSB7XG4gIGlmICh0byA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICB0byA9IHRldGhlci5zY3JvbGxQYXJlbnRzWzBdO1xuICB9IGVsc2UgaWYgKHRvID09PSAnd2luZG93Jykge1xuICAgIHRvID0gW3BhZ2VYT2Zmc2V0LCBwYWdlWU9mZnNldCwgaW5uZXJXaWR0aCArIHBhZ2VYT2Zmc2V0LCBpbm5lckhlaWdodCArIHBhZ2VZT2Zmc2V0XTtcbiAgfVxuXG4gIGlmICh0byA9PT0gZG9jdW1lbnQpIHtcbiAgICB0byA9IHRvLmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdG8ubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBub2RlID0gdG87XG4gICAgICB2YXIgc2l6ZSA9IGdldEJvdW5kcyh0byk7XG4gICAgICB2YXIgcG9zID0gc2l6ZTtcbiAgICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodG8pO1xuXG4gICAgICB0byA9IFtwb3MubGVmdCwgcG9zLnRvcCwgc2l6ZS53aWR0aCArIHBvcy5sZWZ0LCBzaXplLmhlaWdodCArIHBvcy50b3BdO1xuXG4gICAgICAvLyBBY2NvdW50IGFueSBwYXJlbnQgRnJhbWVzIHNjcm9sbCBvZmZzZXRcbiAgICAgIGlmIChub2RlLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIHZhciB3aW4gPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgIHRvWzBdICs9IHdpbi5wYWdlWE9mZnNldDtcbiAgICAgICAgdG9bMV0gKz0gd2luLnBhZ2VZT2Zmc2V0O1xuICAgICAgICB0b1syXSArPSB3aW4ucGFnZVhPZmZzZXQ7XG4gICAgICAgIHRvWzNdICs9IHdpbi5wYWdlWU9mZnNldDtcbiAgICAgIH1cblxuICAgICAgQk9VTkRTX0ZPUk1BVC5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlLCBpKSB7XG4gICAgICAgIHNpZGUgPSBzaWRlWzBdLnRvVXBwZXJDYXNlKCkgKyBzaWRlLnN1YnN0cigxKTtcbiAgICAgICAgaWYgKHNpZGUgPT09ICdUb3AnIHx8IHNpZGUgPT09ICdMZWZ0Jykge1xuICAgICAgICAgIHRvW2ldICs9IHBhcnNlRmxvYXQoc3R5bGVbJ2JvcmRlcicgKyBzaWRlICsgJ1dpZHRoJ10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvW2ldIC09IHBhcnNlRmxvYXQoc3R5bGVbJ2JvcmRlcicgKyBzaWRlICsgJ1dpZHRoJ10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSgpO1xuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG5UZXRoZXJCYXNlLm1vZHVsZXMucHVzaCh7XG4gIHBvc2l0aW9uOiBmdW5jdGlvbiBwb3NpdGlvbihfcmVmKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB0b3AgPSBfcmVmLnRvcDtcbiAgICB2YXIgbGVmdCA9IF9yZWYubGVmdDtcbiAgICB2YXIgdGFyZ2V0QXR0YWNobWVudCA9IF9yZWYudGFyZ2V0QXR0YWNobWVudDtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLmNvbnN0cmFpbnRzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgX2NhY2hlID0gdGhpcy5jYWNoZSgnZWxlbWVudC1ib3VuZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0Qm91bmRzKF90aGlzLmVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgdmFyIGhlaWdodCA9IF9jYWNoZS5oZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gX2NhY2hlLndpZHRoO1xuXG4gICAgaWYgKHdpZHRoID09PSAwICYmIGhlaWdodCA9PT0gMCAmJiB0eXBlb2YgdGhpcy5sYXN0U2l6ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBfbGFzdFNpemUgPSB0aGlzLmxhc3RTaXplO1xuXG4gICAgICAvLyBIYW5kbGUgdGhlIGl0ZW0gZ2V0dGluZyBoaWRkZW4gYXMgYSByZXN1bHQgb2Ygb3VyIHBvc2l0aW9uaW5nIHdpdGhvdXQgZ2xpdGNoaW5nXG4gICAgICAvLyB0aGUgY2xhc3NlcyBpbiBhbmQgb3V0XG4gICAgICB3aWR0aCA9IF9sYXN0U2l6ZS53aWR0aDtcbiAgICAgIGhlaWdodCA9IF9sYXN0U2l6ZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFNpemUgPSB0aGlzLmNhY2hlKCd0YXJnZXQtYm91bmRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFRhcmdldEJvdW5kcygpO1xuICAgIH0pO1xuXG4gICAgdmFyIHRhcmdldEhlaWdodCA9IHRhcmdldFNpemUuaGVpZ2h0O1xuICAgIHZhciB0YXJnZXRXaWR0aCA9IHRhcmdldFNpemUud2lkdGg7XG5cbiAgICB2YXIgYWxsQ2xhc3NlcyA9IFt0aGlzLmdldENsYXNzKCdwaW5uZWQnKSwgdGhpcy5nZXRDbGFzcygnb3V0LW9mLWJvdW5kcycpXTtcblxuICAgIHRoaXMub3B0aW9ucy5jb25zdHJhaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25zdHJhaW50KSB7XG4gICAgICB2YXIgb3V0T2ZCb3VuZHNDbGFzcyA9IGNvbnN0cmFpbnQub3V0T2ZCb3VuZHNDbGFzcztcbiAgICAgIHZhciBwaW5uZWRDbGFzcyA9IGNvbnN0cmFpbnQucGlubmVkQ2xhc3M7XG5cbiAgICAgIGlmIChvdXRPZkJvdW5kc0NsYXNzKSB7XG4gICAgICAgIGFsbENsYXNzZXMucHVzaChvdXRPZkJvdW5kc0NsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmIChwaW5uZWRDbGFzcykge1xuICAgICAgICBhbGxDbGFzc2VzLnB1c2gocGlubmVkQ2xhc3MpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWxsQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHtcbiAgICAgIFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJ10uZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICBhbGxDbGFzc2VzLnB1c2goY2xzICsgJy0nICsgc2lkZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciBhZGRDbGFzc2VzID0gW107XG5cbiAgICB2YXIgdEF0dGFjaG1lbnQgPSBleHRlbmQoe30sIHRhcmdldEF0dGFjaG1lbnQpO1xuICAgIHZhciBlQXR0YWNobWVudCA9IGV4dGVuZCh7fSwgdGhpcy5hdHRhY2htZW50KTtcblxuICAgIHRoaXMub3B0aW9ucy5jb25zdHJhaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb25zdHJhaW50KSB7XG4gICAgICB2YXIgdG8gPSBjb25zdHJhaW50LnRvO1xuICAgICAgdmFyIGF0dGFjaG1lbnQgPSBjb25zdHJhaW50LmF0dGFjaG1lbnQ7XG4gICAgICB2YXIgcGluID0gY29uc3RyYWludC5waW47XG5cbiAgICAgIGlmICh0eXBlb2YgYXR0YWNobWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXR0YWNobWVudCA9ICcnO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlQXR0YWNoWCA9IHVuZGVmaW5lZCxcbiAgICAgICAgICBjaGFuZ2VBdHRhY2hZID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGF0dGFjaG1lbnQuaW5kZXhPZignICcpID49IDApIHtcbiAgICAgICAgdmFyIF9hdHRhY2htZW50JHNwbGl0ID0gYXR0YWNobWVudC5zcGxpdCgnICcpO1xuXG4gICAgICAgIHZhciBfYXR0YWNobWVudCRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfYXR0YWNobWVudCRzcGxpdCwgMik7XG5cbiAgICAgICAgY2hhbmdlQXR0YWNoWSA9IF9hdHRhY2htZW50JHNwbGl0MlswXTtcbiAgICAgICAgY2hhbmdlQXR0YWNoWCA9IF9hdHRhY2htZW50JHNwbGl0MlsxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZUF0dGFjaFggPSBjaGFuZ2VBdHRhY2hZID0gYXR0YWNobWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIGJvdW5kcyA9IGdldEJvdW5kaW5nUmVjdChfdGhpcywgdG8pO1xuXG4gICAgICBpZiAoY2hhbmdlQXR0YWNoWSA9PT0gJ3RhcmdldCcgfHwgY2hhbmdlQXR0YWNoWSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIGlmICh0b3AgPCBib3VuZHNbMV0gJiYgdEF0dGFjaG1lbnQudG9wID09PSAndG9wJykge1xuICAgICAgICAgIHRvcCArPSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgICAgdEF0dGFjaG1lbnQudG9wID0gJ2JvdHRvbSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9wICsgaGVpZ2h0ID4gYm91bmRzWzNdICYmIHRBdHRhY2htZW50LnRvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICB0b3AgLT0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICAgIHRBdHRhY2htZW50LnRvcCA9ICd0b3AnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VBdHRhY2hZID09PSAndG9nZXRoZXInKSB7XG4gICAgICAgIGlmICh0QXR0YWNobWVudC50b3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgaWYgKGVBdHRhY2htZW50LnRvcCA9PT0gJ2JvdHRvbScgJiYgdG9wIDwgYm91bmRzWzFdKSB7XG4gICAgICAgICAgICB0b3AgKz0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQudG9wID0gJ2JvdHRvbSc7XG5cbiAgICAgICAgICAgIHRvcCArPSBoZWlnaHQ7XG4gICAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAndG9wJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGVBdHRhY2htZW50LnRvcCA9PT0gJ3RvcCcgJiYgdG9wICsgaGVpZ2h0ID4gYm91bmRzWzNdICYmIHRvcCAtIChoZWlnaHQgLSB0YXJnZXRIZWlnaHQpID49IGJvdW5kc1sxXSkge1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodCAtIHRhcmdldEhlaWdodDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuXG4gICAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAnYm90dG9tJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodEF0dGFjaG1lbnQudG9wID09PSAnYm90dG9tJykge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC50b3AgPT09ICd0b3AnICYmIHRvcCArIGhlaWdodCA+IGJvdW5kc1szXSkge1xuICAgICAgICAgICAgdG9wIC09IHRhcmdldEhlaWdodDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LnRvcCA9ICd0b3AnO1xuXG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ2JvdHRvbSc7XG4gICAgICAgICAgfSBlbHNlIGlmIChlQXR0YWNobWVudC50b3AgPT09ICdib3R0b20nICYmIHRvcCA8IGJvdW5kc1sxXSAmJiB0b3AgKyAoaGVpZ2h0ICogMiAtIHRhcmdldEhlaWdodCkgPD0gYm91bmRzWzNdKSB7XG4gICAgICAgICAgICB0b3AgKz0gaGVpZ2h0IC0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQudG9wID0gJ3RvcCc7XG5cbiAgICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICd0b3AnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0QXR0YWNobWVudC50b3AgPT09ICdtaWRkbGUnKSB7XG4gICAgICAgICAgaWYgKHRvcCArIGhlaWdodCA+IGJvdW5kc1szXSAmJiBlQXR0YWNobWVudC50b3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ2JvdHRvbSc7XG4gICAgICAgICAgfSBlbHNlIGlmICh0b3AgPCBib3VuZHNbMV0gJiYgZUF0dGFjaG1lbnQudG9wID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgdG9wICs9IGhlaWdodDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICd0b3AnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlQXR0YWNoWCA9PT0gJ3RhcmdldCcgfHwgY2hhbmdlQXR0YWNoWCA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIGlmIChsZWZ0IDwgYm91bmRzWzBdICYmIHRBdHRhY2htZW50LmxlZnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGxlZnQgKz0gdGFyZ2V0V2lkdGg7XG4gICAgICAgICAgdEF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGVmdCArIHdpZHRoID4gYm91bmRzWzJdICYmIHRBdHRhY2htZW50LmxlZnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBsZWZ0IC09IHRhcmdldFdpZHRoO1xuICAgICAgICAgIHRBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZUF0dGFjaFggPT09ICd0b2dldGhlcicpIHtcbiAgICAgICAgaWYgKGxlZnQgPCBib3VuZHNbMF0gJiYgdEF0dGFjaG1lbnQubGVmdCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gdGFyZ2V0V2lkdGg7XG4gICAgICAgICAgICB0QXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcblxuICAgICAgICAgICAgbGVmdCArPSB3aWR0aDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gdGFyZ2V0V2lkdGg7XG4gICAgICAgICAgICB0QXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcblxuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0ICsgd2lkdGggPiBib3VuZHNbMl0gJiYgdEF0dGFjaG1lbnQubGVmdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIGxlZnQgLT0gdGFyZ2V0V2lkdGg7XG4gICAgICAgICAgICB0QXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuXG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBsZWZ0IC09IHRhcmdldFdpZHRoO1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcblxuICAgICAgICAgICAgbGVmdCArPSB3aWR0aDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRBdHRhY2htZW50LmxlZnQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgaWYgKGxlZnQgKyB3aWR0aCA+IGJvdW5kc1syXSAmJiBlQXR0YWNobWVudC5sZWZ0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGxlZnQgPCBib3VuZHNbMF0gJiYgZUF0dGFjaG1lbnQubGVmdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgbGVmdCArPSB3aWR0aDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VBdHRhY2hZID09PSAnZWxlbWVudCcgfHwgY2hhbmdlQXR0YWNoWSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIGlmICh0b3AgPCBib3VuZHNbMV0gJiYgZUF0dGFjaG1lbnQudG9wID09PSAnYm90dG9tJykge1xuICAgICAgICAgIHRvcCArPSBoZWlnaHQ7XG4gICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ3RvcCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9wICsgaGVpZ2h0ID4gYm91bmRzWzNdICYmIGVBdHRhY2htZW50LnRvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VBdHRhY2hYID09PSAnZWxlbWVudCcgfHwgY2hhbmdlQXR0YWNoWCA9PT0gJ2JvdGgnKSB7XG4gICAgICAgIGlmIChsZWZ0IDwgYm91bmRzWzBdKSB7XG4gICAgICAgICAgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gd2lkdGggLyAyO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGVmdCArIHdpZHRoID4gYm91bmRzWzJdKSB7XG4gICAgICAgICAgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGggLyAyO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcGluID09PSAnc3RyaW5nJykge1xuICAgICAgICBwaW4gPSBwaW4uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICByZXR1cm4gcC50cmltKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwaW4gPT09IHRydWUpIHtcbiAgICAgICAgcGluID0gWyd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nXTtcbiAgICAgIH1cblxuICAgICAgcGluID0gcGluIHx8IFtdO1xuXG4gICAgICB2YXIgcGlubmVkID0gW107XG4gICAgICB2YXIgb29iID0gW107XG5cbiAgICAgIGlmICh0b3AgPCBib3VuZHNbMV0pIHtcbiAgICAgICAgaWYgKHBpbi5pbmRleE9mKCd0b3AnKSA+PSAwKSB7XG4gICAgICAgICAgdG9wID0gYm91bmRzWzFdO1xuICAgICAgICAgIHBpbm5lZC5wdXNoKCd0b3AnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvb2IucHVzaCgndG9wJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRvcCArIGhlaWdodCA+IGJvdW5kc1szXSkge1xuICAgICAgICBpZiAocGluLmluZGV4T2YoJ2JvdHRvbScpID49IDApIHtcbiAgICAgICAgICB0b3AgPSBib3VuZHNbM10gLSBoZWlnaHQ7XG4gICAgICAgICAgcGlubmVkLnB1c2goJ2JvdHRvbScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9vYi5wdXNoKCdib3R0b20nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGVmdCA8IGJvdW5kc1swXSkge1xuICAgICAgICBpZiAocGluLmluZGV4T2YoJ2xlZnQnKSA+PSAwKSB7XG4gICAgICAgICAgbGVmdCA9IGJvdW5kc1swXTtcbiAgICAgICAgICBwaW5uZWQucHVzaCgnbGVmdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9vYi5wdXNoKCdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnQgKyB3aWR0aCA+IGJvdW5kc1syXSkge1xuICAgICAgICBpZiAocGluLmluZGV4T2YoJ3JpZ2h0JykgPj0gMCkge1xuICAgICAgICAgIGxlZnQgPSBib3VuZHNbMl0gLSB3aWR0aDtcbiAgICAgICAgICBwaW5uZWQucHVzaCgncmlnaHQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvb2IucHVzaCgncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGlubmVkLmxlbmd0aCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBwaW5uZWRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLm9wdGlvbnMucGlubmVkQ2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBwaW5uZWRDbGFzcyA9IF90aGlzLm9wdGlvbnMucGlubmVkQ2xhc3M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBpbm5lZENsYXNzID0gX3RoaXMuZ2V0Q2xhc3MoJ3Bpbm5lZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFkZENsYXNzZXMucHVzaChwaW5uZWRDbGFzcyk7XG4gICAgICAgICAgcGlubmVkLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgICAgIGFkZENsYXNzZXMucHVzaChwaW5uZWRDbGFzcyArICctJyArIHNpZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAob29iLmxlbmd0aCkge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBvb2JDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLm9wdGlvbnMub3V0T2ZCb3VuZHNDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9vYkNsYXNzID0gX3RoaXMub3B0aW9ucy5vdXRPZkJvdW5kc0NsYXNzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvb2JDbGFzcyA9IF90aGlzLmdldENsYXNzKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWRkQ2xhc3Nlcy5wdXNoKG9vYkNsYXNzKTtcbiAgICAgICAgICBvb2IuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICAgICAgYWRkQ2xhc3Nlcy5wdXNoKG9vYkNsYXNzICsgJy0nICsgc2lkZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5uZWQuaW5kZXhPZignbGVmdCcpID49IDAgfHwgcGlubmVkLmluZGV4T2YoJ3JpZ2h0JykgPj0gMCkge1xuICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gdEF0dGFjaG1lbnQubGVmdCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHBpbm5lZC5pbmRleE9mKCd0b3AnKSA+PSAwIHx8IHBpbm5lZC5pbmRleE9mKCdib3R0b20nKSA+PSAwKSB7XG4gICAgICAgIGVBdHRhY2htZW50LnRvcCA9IHRBdHRhY2htZW50LnRvcCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodEF0dGFjaG1lbnQudG9wICE9PSB0YXJnZXRBdHRhY2htZW50LnRvcCB8fCB0QXR0YWNobWVudC5sZWZ0ICE9PSB0YXJnZXRBdHRhY2htZW50LmxlZnQgfHwgZUF0dGFjaG1lbnQudG9wICE9PSBfdGhpcy5hdHRhY2htZW50LnRvcCB8fCBlQXR0YWNobWVudC5sZWZ0ICE9PSBfdGhpcy5hdHRhY2htZW50LmxlZnQpIHtcbiAgICAgICAgX3RoaXMudXBkYXRlQXR0YWNoQ2xhc3NlcyhlQXR0YWNobWVudCwgdEF0dGFjaG1lbnQpO1xuICAgICAgICBfdGhpcy50cmlnZ2VyKCd1cGRhdGUnLCB7XG4gICAgICAgICAgYXR0YWNobWVudDogZUF0dGFjaG1lbnQsXG4gICAgICAgICAgdGFyZ2V0QXR0YWNobWVudDogdEF0dGFjaG1lbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIShfdGhpcy5vcHRpb25zLmFkZFRhcmdldENsYXNzZXMgPT09IGZhbHNlKSkge1xuICAgICAgICB1cGRhdGVDbGFzc2VzKF90aGlzLnRhcmdldCwgYWRkQ2xhc3NlcywgYWxsQ2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICB1cGRhdGVDbGFzc2VzKF90aGlzLmVsZW1lbnQsIGFkZENsYXNzZXMsIGFsbENsYXNzZXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfTtcbiAgfVxufSk7XG4vKiBnbG9iYWxzIFRldGhlckJhc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX1RldGhlckJhc2UkVXRpbHMgPSBUZXRoZXJCYXNlLlV0aWxzO1xudmFyIGdldEJvdW5kcyA9IF9UZXRoZXJCYXNlJFV0aWxzLmdldEJvdW5kcztcbnZhciB1cGRhdGVDbGFzc2VzID0gX1RldGhlckJhc2UkVXRpbHMudXBkYXRlQ2xhc3NlcztcbnZhciBkZWZlciA9IF9UZXRoZXJCYXNlJFV0aWxzLmRlZmVyO1xuXG5UZXRoZXJCYXNlLm1vZHVsZXMucHVzaCh7XG4gIHBvc2l0aW9uOiBmdW5jdGlvbiBwb3NpdGlvbihfcmVmKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciB0b3AgPSBfcmVmLnRvcDtcbiAgICB2YXIgbGVmdCA9IF9yZWYubGVmdDtcblxuICAgIHZhciBfY2FjaGUgPSB0aGlzLmNhY2hlKCdlbGVtZW50LWJvdW5kcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRCb3VuZHMoX3RoaXMuZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB2YXIgaGVpZ2h0ID0gX2NhY2hlLmhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBfY2FjaGUud2lkdGg7XG5cbiAgICB2YXIgdGFyZ2V0UG9zID0gdGhpcy5nZXRUYXJnZXRCb3VuZHMoKTtcblxuICAgIHZhciBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgdmFyIHJpZ2h0ID0gbGVmdCArIHdpZHRoO1xuXG4gICAgdmFyIGFidXR0ZWQgPSBbXTtcbiAgICBpZiAodG9wIDw9IHRhcmdldFBvcy5ib3R0b20gJiYgYm90dG9tID49IHRhcmdldFBvcy50b3ApIHtcbiAgICAgIFsnbGVmdCcsICdyaWdodCddLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgdmFyIHRhcmdldFBvc1NpZGUgPSB0YXJnZXRQb3Nbc2lkZV07XG4gICAgICAgIGlmICh0YXJnZXRQb3NTaWRlID09PSBsZWZ0IHx8IHRhcmdldFBvc1NpZGUgPT09IHJpZ2h0KSB7XG4gICAgICAgICAgYWJ1dHRlZC5wdXNoKHNpZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobGVmdCA8PSB0YXJnZXRQb3MucmlnaHQgJiYgcmlnaHQgPj0gdGFyZ2V0UG9zLmxlZnQpIHtcbiAgICAgIFsndG9wJywgJ2JvdHRvbSddLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgdmFyIHRhcmdldFBvc1NpZGUgPSB0YXJnZXRQb3Nbc2lkZV07XG4gICAgICAgIGlmICh0YXJnZXRQb3NTaWRlID09PSB0b3AgfHwgdGFyZ2V0UG9zU2lkZSA9PT0gYm90dG9tKSB7XG4gICAgICAgICAgYWJ1dHRlZC5wdXNoKHNpZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgYWxsQ2xhc3NlcyA9IFtdO1xuICAgIHZhciBhZGRDbGFzc2VzID0gW107XG5cbiAgICB2YXIgc2lkZXMgPSBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbSddO1xuICAgIGFsbENsYXNzZXMucHVzaCh0aGlzLmdldENsYXNzKCdhYnV0dGVkJykpO1xuICAgIHNpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgIGFsbENsYXNzZXMucHVzaChfdGhpcy5nZXRDbGFzcygnYWJ1dHRlZCcpICsgJy0nICsgc2lkZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoYWJ1dHRlZC5sZW5ndGgpIHtcbiAgICAgIGFkZENsYXNzZXMucHVzaCh0aGlzLmdldENsYXNzKCdhYnV0dGVkJykpO1xuICAgIH1cblxuICAgIGFidXR0ZWQuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgYWRkQ2xhc3Nlcy5wdXNoKF90aGlzLmdldENsYXNzKCdhYnV0dGVkJykgKyAnLScgKyBzaWRlKTtcbiAgICB9KTtcblxuICAgIGRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghKF90aGlzLm9wdGlvbnMuYWRkVGFyZ2V0Q2xhc3NlcyA9PT0gZmFsc2UpKSB7XG4gICAgICAgIHVwZGF0ZUNsYXNzZXMoX3RoaXMudGFyZ2V0LCBhZGRDbGFzc2VzLCBhbGxDbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZUNsYXNzZXMoX3RoaXMuZWxlbWVudCwgYWRkQ2xhc3NlcywgYWxsQ2xhc3Nlcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG4vKiBnbG9iYWxzIFRldGhlckJhc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVsncmV0dXJuJ10pIF9pWydyZXR1cm4nXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlJyk7IH0gfTsgfSkoKTtcblxuVGV0aGVyQmFzZS5tb2R1bGVzLnB1c2goe1xuICBwb3NpdGlvbjogZnVuY3Rpb24gcG9zaXRpb24oX3JlZikge1xuICAgIHZhciB0b3AgPSBfcmVmLnRvcDtcbiAgICB2YXIgbGVmdCA9IF9yZWYubGVmdDtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLnNoaWZ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNoaWZ0ID0gdGhpcy5vcHRpb25zLnNoaWZ0O1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnNoaWZ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzaGlmdCA9IHRoaXMub3B0aW9ucy5zaGlmdC5jYWxsKHRoaXMsIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfSk7XG4gICAgfVxuXG4gICAgdmFyIHNoaWZ0VG9wID0gdW5kZWZpbmVkLFxuICAgICAgICBzaGlmdExlZnQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiBzaGlmdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNoaWZ0ID0gc2hpZnQuc3BsaXQoJyAnKTtcbiAgICAgIHNoaWZ0WzFdID0gc2hpZnRbMV0gfHwgc2hpZnRbMF07XG5cbiAgICAgIHZhciBfc2hpZnQgPSBzaGlmdDtcblxuICAgICAgdmFyIF9zaGlmdDIgPSBfc2xpY2VkVG9BcnJheShfc2hpZnQsIDIpO1xuXG4gICAgICBzaGlmdFRvcCA9IF9zaGlmdDJbMF07XG4gICAgICBzaGlmdExlZnQgPSBfc2hpZnQyWzFdO1xuXG4gICAgICBzaGlmdFRvcCA9IHBhcnNlRmxvYXQoc2hpZnRUb3AsIDEwKTtcbiAgICAgIHNoaWZ0TGVmdCA9IHBhcnNlRmxvYXQoc2hpZnRMZWZ0LCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaWZ0VG9wID0gc2hpZnQudG9wO1xuICAgICAgc2hpZnRMZWZ0ID0gc2hpZnQubGVmdDtcbiAgICB9XG5cbiAgICB0b3AgKz0gc2hpZnRUb3A7XG4gICAgbGVmdCArPSBzaGlmdExlZnQ7XG5cbiAgICByZXR1cm4geyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9O1xuICB9XG59KTtcbnJldHVybiBUZXRoZXI7XG5cbn0pKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgRGF5c1ZpZXdIZWFkaW5nIGZyb20gJy4vRGF5c1ZpZXdIZWFkaW5nJztcbmltcG9ydCBEYXlzT2ZXZWVrIGZyb20gJy4vRGF5c09mV2Vlayc7XG5pbXBvcnQgTW9udGhTZWxlY3RvciBmcm9tICcuL01vbnRoU2VsZWN0b3InO1xuaW1wb3J0IERheSBmcm9tICcuL0RheSc7XG5pbXBvcnQgeyBnZXREYXlzT2ZNb250aCB9IGZyb20gJy4uL3V0aWxzL21vbWVudC1oZWxwZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcbmltcG9ydCB7IGRlZmF1bHRTdHlsZXMgfSBmcm9tICcuL0RlZmF1bHRTdHlsZXMnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1pbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtYXg6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNlbGVjdGVkRGF5OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRlZmF1bHRNb250aDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbGlja091dHNpZGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIG5leHRNb250aDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwcmV2TW9udGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0Q2FsZW5kYXJNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldE1vbnRoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldFR5cGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczogZGVmYXVsdFN0eWxlcyxcbiAgICBjb250YWluZXJQcm9wczoge31cbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBtb250aDogdGhpcy5wcm9wcy5kZWZhdWx0TW9udGggfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERheSB8fCBtb21lbnQodGhpcy5wcm9wcy5taW4pLFxuICAgIHNlbGVjdGVkRGF5OiB0aGlzLnByb3BzLnNlbGVjdGVkRGF5IHx8IG51bGwsXG4gICAgbW9kZTogJ2RheXMnXG4gIH07XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0TW9udGg6IHRoaXMubmV4dE1vbnRoLmJpbmQodGhpcyksXG4gICAgICBwcmV2TW9udGg6IHRoaXMucHJldk1vbnRoLmJpbmQodGhpcyksXG4gICAgICBzZXRDYWxlbmRhck1vZGU6IHRoaXMuc2V0TW9kZS5iaW5kKHRoaXMpLFxuICAgICAgc2V0TW9udGg6IHRoaXMuc2V0TW9udGguYmluZCh0aGlzKSxcbiAgICAgIHNldFR5cGU6IHRoaXMuc2V0TW9udGguYmluZCh0aGlzKVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgc2VsZWN0ZWREYXksIGRlZmF1bHRNb250aCwgbWluIH0pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZERheSAhPT0gc2VsZWN0ZWREYXkpIHtcbiAgICAgIHRoaXMuc2VsZWN0RGF5KHNlbGVjdGVkRGF5KTtcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRNb250aCAmJiB0aGlzLnByb3BzLmRlZmF1bHRNb250aCAhPT0gZGVmYXVsdE1vbnRoICYmIHRoaXMuc3RhdGUubW9udGggPT09IHRoaXMucHJvcHMuZGVmYXVsdE1vbnRoKSB7XG4gICAgICB0aGlzLnNldE1vbnRoKGRlZmF1bHRNb250aCk7XG4gICAgfSBlbHNlIGlmIChtaW4gJiYgdGhpcy5wcm9wcy5taW4gIT09IG1pbiAmJiB0aGlzLnN0YXRlLm1vbnRoLmlzU2FtZSh0aGlzLnByb3BzLm1pbikpIHtcbiAgICAgIHRoaXMuc2V0TW9udGgobWluLmNsb25lKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldE1vZGUobW9kZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlIH0pO1xuICB9XG5cbiAgc2V0TW9udGgobW9udGgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9udGggfSk7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdHlwZSB9KTtcbiAgfVxuXG4gIG5leHRNb250aCgpIHtcbiAgICBjb25zdCBtb250aEZvcm1hdCA9ICdNb250aCc7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vbnRoOiB0aGlzLnN0YXRlLm1vbnRoLmNsb25lKCkuYWRkKDEsIG1vbnRoRm9ybWF0KVxuICAgIH0pO1xuICB9XG5cbiAgcHJldk1vbnRoKCkge1xuICAgIGNvbnN0IG1vbnRoRm9ybWF0ID0gJ01vbnRoJztcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9udGg6IHRoaXMuc3RhdGUubW9udGguY2xvbmUoKS5zdWJ0cmFjdCgxLCBtb250aEZvcm1hdClcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdERheShzZWxlY3RlZERheSkge1xuICAgIGNvbnN0IHsgbW9udGggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeWVhck1vbnRoRm9ybWF0ID0gJ1lZWVlNTSc7XG5cbiAgICAvLyBCZWNhdXNlIHRoZXJlJ3Mgbm8gYG0xLmlzU2FtZShtMiwgJ2pNb250aCcpYFxuICAgIGlmIChzZWxlY3RlZERheS5mb3JtYXQoeWVhck1vbnRoRm9ybWF0KSAhPT0gbW9udGguZm9ybWF0KHllYXJNb250aEZvcm1hdCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb250aDogc2VsZWN0ZWREYXkgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRGF5IH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2tPbkRheSA9IHNlbGVjdGVkRGF5ID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2VsZWN0RGF5KHNlbGVjdGVkRGF5KTtcbiAgICBpZiAob25TZWxlY3QpIHtcbiAgICAgIG9uU2VsZWN0KHNlbGVjdGVkRGF5KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGlja091dHNpZGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGlja091dHNpZGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGRheXMgPSBudWxsO1xuICBsYXN0UmVuZGVyZWRNb250aCA9IG51bGw7XG5cbiAgcmVuZGVyTW9udGhTZWxlY3RvcigpIHtcbiAgICBjb25zdCB7IG1vbnRoIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc3R5bGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoPE1vbnRoU2VsZWN0b3Igc3R5bGVzPXtzdHlsZXN9IHNlbGVjdGVkTW9udGg9e21vbnRofSAvPik7XG4gIH1cblxuICByZW5kZXJEYXlzKCkge1xuICAgIGNvbnN0IHsgbW9udGgsIHNlbGVjdGVkRGF5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG1pbiwgbWF4LCBzdHlsZXMsIG91dHNpZGVDbGlja0lnbm9yZUNsYXNzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGRheXM7XG5cbiAgICBpZiAodGhpcy5sYXN0UmVuZGVyZWRNb250aCA9PT0gbW9udGgpIHtcbiAgICAgIGRheXMgPSB0aGlzLmRheXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheXMgPSBnZXREYXlzT2ZNb250aChtb250aCk7XG4gICAgICB0aGlzLmRheXMgPSBkYXlzO1xuICAgICAgdGhpcy5sYXN0UmVuZGVyZWRNb250aCA9IG1vbnRoO1xuICAgIH1cblxuICAgIGNvbnN0IG1vbnRoRm9ybWF0ID0gJ01NJztcbiAgICBjb25zdCBkYXRlRm9ybWF0ID0gJ1lZWVlNTUREJztcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPERheXNWaWV3SGVhZGluZyBzdHlsZXM9e3N0eWxlc30gbW9udGg9e21vbnRofSAvPlxuICAgICAgICA8RGF5c09mV2VlayBzdHlsZXM9e3N0eWxlc30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXlQaWNrZXJDb250YWluZXJ9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRheXMubWFwKGRheSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudE1vbnRoID0gZGF5LmZvcm1hdChtb250aEZvcm1hdCkgPT09IG1vbnRoLmZvcm1hdChtb250aEZvcm1hdCk7XG4gICAgICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gKG1pbiA/IGRheS5pc0JlZm9yZShtaW4pIDogZmFsc2UpIHx8IChtYXggPyBkYXkuaXNBZnRlcihtYXgpIDogZmFsc2UpO1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkRGF5ID8gc2VsZWN0ZWREYXkuaXNTYW1lKGRheSwgJ2RheScpIDogZmFsc2U7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RGF5XG4gICAgICAgICAgICAgICAgICBrZXk9e2RheS5mb3JtYXQoZGF0ZUZvcm1hdCl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrT25EYXl9XG4gICAgICAgICAgICAgICAgICBkYXk9e2RheX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgIGlzQ3VycmVudE1vbnRoPXtpc0N1cnJlbnRNb250aH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkRGF5LFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgb25DbGlja091dHNpZGUsXG4gICAgICBvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzcyxcbiAgICAgIHN0eWxlcyxcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbW9kZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyQ29udGFpbmVyICsgJyAnICsgY2xhc3NOYW1lfT5cbiAgICAgICAge21vZGUgPT09ICdtb250aFNlbGVjdG9yJyA/IHRoaXMucmVuZGVyTW9udGhTZWxlY3RvcigpIDogdGhpcy5yZW5kZXJEYXlzKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uQ2xpY2tPdXRzaWRlKENhbGVuZGFyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBwZXJzaWFuTnVtYmVyIH0gZnJvbSAnLi4vdXRpbHMvcGVyc2lhbic7XG5pbXBvcnQgeyBsZWZ0QXJyb3csIHJpZ2h0QXJyb3cgfSBmcm9tICcuLi91dGlscy9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb250aDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbmV4dE1vbnRoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHByZXZNb250aDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZXRDYWxlbmRhck1vZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBoYW5kbGVNb250aENsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgeyBzZXRDYWxlbmRhck1vZGUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldENhbGVuZGFyTW9kZSgnbW9udGhTZWxlY3RvcicpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmV4dE1vbnRoLCBwcmV2TW9udGggfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IG1vbnRoLCBzdHlsZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gb25DbGljaz17dGhpcy5oYW5kbGVNb250aENsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgIHttb250aC5sb2NhbGUoJ2VuJykuZm9ybWF0KCdNTU1NIFlZWVknKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aXRsZT1cItmF2KfZhyDZgtio2YRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZXZ9XG4gICAgICAgICAgb25DbGljaz17cHJldk1vbnRofVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtyaWdodEFycm93fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGl0bGU9XCLZhdin2Ycg2KjYudivXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXh0fVxuICAgICAgICAgIG9uQ2xpY2s9e25leHRNb250aH1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17bGVmdEFycm93fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiY29uc3QgbGF0aW5Ub1BlcnNpYW5NYXAgPSBbJ9uxJywgJ9uyJywgJ9uzJywgJ9u0JywgJ9u1JywgJ9u2JywgJ9u3JywgJ9u4JywgJ9u5JywgJ9uwJ107XG5jb25zdCBsYXRpbk51bWJlcnMgPSBbLzEvZywgLzIvZywgLzMvZywgLzQvZywgLzUvZywgLzYvZywgLzcvZywgLzgvZywgLzkvZywgLzAvZ107XG5cbmZ1bmN0aW9uIHByZXBhcmVOdW1iZXIoaW5wdXQpIHtcbiAgbGV0IHN0cmluZztcbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicpIHtcbiAgICBzdHJpbmcgPSBpbnB1dC50b1N0cmluZygpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdHJpbmcgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBzdHJpbmcgPSBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGxhdGluVG9QZXJzaWFuKHN0cmluZykge1xuICBsZXQgcmVzdWx0ID0gc3RyaW5nO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGxhdGluTnVtYmVyc1tpbmRleF0sIGxhdGluVG9QZXJzaWFuTWFwW2luZGV4XSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lhbk51bWJlcihpbnB1dCkge1xuICByZXR1cm4gbGF0aW5Ub1BlcnNpYW4ocHJlcGFyZU51bWJlcihpbnB1dCkpO1xufVxuIiwiZXhwb3J0IGNvbnN0IGxlZnRBcnJvdyA9IHtcbiAgX19odG1sOiAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAzMTQuNSAzMTQuNVwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMTQuNSAzMTQuNTtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxnPjxwYXRoIGNsYXNzPVwiYXJyb3ctaWNvblwiIGQ9XCJNMTI1LDE1Ny41bDExNi0xMTZjMTAtMTAsMTAtMjQsMC0zNHMtMjUtMTAtMzUsMGwtMTMzLDEzM2MtNSw1LTcsMTAtNywxN3MyLDEyLDcsMTdsMTMzLDEzM2M1LDUsMTEsNywxNyw3czEzLTIsMTgtN2MxMC0xMCwxMC0yNCwwLTM0TDEyNSwxNTcuNXpcIi8+PC9nPjwvc3ZnPidcbn07XG5cbmV4cG9ydCBjb25zdCByaWdodEFycm93ID0ge1xuICBfX2h0bWw6ICc8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDMxNS41IDMxNS41XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxNS41IDMxNS41O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGc+PHBhdGggY2xhc3M9XCJhcnJvdy1pY29uXCIgZD1cIk0yNDIsMTQxTDEwOSw4Yy01LTUtMTItOC0xOC04Uzc5LDMsNzQsOGMtMTAsMTAtMTAsMjQsMCwzNGwxMTYsMTE2TDc0LDI3NGMtMTAsMTAtMTAsMjQsMCwzNHMyNSwxMCwzNSwwbDEzMy0xMzNjNS01LDctMTEsNy0xN0MyNDksMTUxLDI0NywxNDYsMjQyLDE0MXpcIi8+PC9nPjwvc3ZnPidcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSB7XG4gIF9faHRtbDogJzxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjEyLjk4MiAyMTIuOTgyXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIxMi45ODIgMjEyLjk4MjtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxnPjxwYXRoIHN0eWxlPVwiZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7XCIgZD1cIk0xMzEuODA0LDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTksNi45OS0xOC4zMjMsMC0yNS4zMTIgICBjLTYuOTktNi45OS0xOC4zMjItNi45OS0yNS4zMTIsMGwtNzUuOTM3LDc1LjkzN0wzMC41NTQsNS4yNDJjLTYuOTktNi45OS0xOC4zMjItNi45OS0yNS4zMTIsMGMtNi45ODksNi45OS02Ljk4OSwxOC4zMjMsMCwyNS4zMTIgICBsNzUuOTM3LDc1LjkzNkw1LjI0MiwxODIuNDI3Yy02Ljk4OSw2Ljk5LTYuOTg5LDE4LjMyMywwLDI1LjMxMmM2Ljk5LDYuOTksMTguMzIyLDYuOTksMjUuMzEyLDBsNzUuOTM3LTc1LjkzN2w3NS45MzcsNzUuOTM3ICAgYzYuOTg5LDYuOTksMTguMzIyLDYuOTksMjUuMzEyLDBjNi45OS02Ljk5LDYuOTktMTguMzIyLDAtMjUuMzEyTDEzMS44MDQsMTA2LjQ5MXpcIiBmaWxsPVwiIzU1NTU1NVwiLz48L2c+PC9zdmc+J1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8vIERheSBvZiB3ZWVrIG5hbWVzIGZvciB1c2UgaW4gZGF0ZS1waWNrZXIgaGVhZGluZ1xuY29uc3QgZGF5T2ZXZWVrTmFtZXNHcmVnb3JpYW4gPSBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheXNPZldlZWsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0eWxlczogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGRheU9mV2Vla05hbWVzID0gZGF5T2ZXZWVrTmFtZXNHcmVnb3JpYW47XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXlzT2ZXZWVrfT5cbiAgICAgICAge2RheU9mV2Vla05hbWVzLm1hcCgobmFtZSwga2V5KSA9PiA8ZGl2IGtleT17a2V5fT57bmFtZX08L2Rpdj4pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IE1vbnRoc1ZpZXdIZWFkaW5nIGZyb20gJy4vTW9udGhzVmlld0hlYWRpbmcnO1xuaW1wb3J0IHsgbGVmdEFycm93LCByaWdodEFycm93IH0gZnJvbSAnLi4vdXRpbHMvYXNzZXRzJztcblxuY29uc3QgbW9udGhzR3JlZ29yaWFuID0gW1xuICAnSmFudWFyeScsXG4gICdGZWJydWFyeScsXG4gICdNYXJjaCcsXG4gICdBcHJpbCcsXG4gICdNYXknLFxuICAnSnVuZScsXG4gICdKdWx5JyxcbiAgJ0F1Z3VzdCcsXG4gICdTZXB0ZW1iZXInLFxuICAnT2N0b2JlcicsXG4gICdOb3ZlbWJlcicsXG4gICdEZWNlbWJlcidcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHN0eWxlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzZWxlY3RlZE1vbnRoOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHNldENhbGVuZGFyTW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZXRNb250aDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHllYXI6IHRoaXMucHJvcHMuc2VsZWN0ZWRNb250aFxuICB9O1xuXG4gIG5leHRZZWFyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeWVhcjogdGhpcy5zdGF0ZS55ZWFyLmNsb25lKCkuYWRkKDEsICd5ZWFyJylcbiAgICB9KTtcbiAgfVxuXG4gIHByZXZZZWFyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeWVhcjogdGhpcy5zdGF0ZS55ZWFyLmNsb25lKCkuc3VidHJhY3QoMSwgJ3llYXInKVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soa2V5KSB7XG4gICAgY29uc3QgeyBzZXRNb250aCwgc2V0Q2FsZW5kYXJNb2RlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgbW9udGhZZWFyRm9ybWF0PSAnTS1ZWVlZJztcbiAgICBzZXRNb250aChtb21lbnQoa2V5LCBtb250aFllYXJGb3JtYXQpKTtcbiAgICBzZXRDYWxlbmRhck1vZGUoJ2RheXMnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHllYXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzZWxlY3RlZE1vbnRoLCBzdHlsZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICAgIGNvbnN0IHllYXJGb3JtYXQ9ICdZWVlZJztcbiAgICBjb25zdCBtb250aFllYXJGb3JtYXQ9ICdNLVlZWVknO1xuICAgIGNvbnN0IG1vbnRocz1tb250aHNHcmVnb3JpYW47XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aC1zZWxlY3RvclwiPlxuICAgICAgICA8TW9udGhzVmlld0hlYWRpbmdcbiAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICB5ZWFyPXt5ZWFyfVxuICAgICAgICAgIG9uTmV4dFllYXI9e3RoaXMubmV4dFllYXIuYmluZCh0aGlzKSB9XG4gICAgICAgICAgb25QcmV2WWVhcj17dGhpcy5wcmV2WWVhci5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb250aHNMaXN0fT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb250aHMubWFwKChuYW1lLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYnV0dG9uRmluZ2VycHJpbnQgPSAoa2V5ICsgMSkgKyAnLScgKyB5ZWFyLmZvcm1hdCh5ZWFyRm9ybWF0KTtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNb250aEZpbmdlcnByaW50ID0gc2VsZWN0ZWRNb250aC5mb3JtYXQobW9udGhZZWFyRm9ybWF0KTtcbiAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50ID0gc2VsZWN0ZWRNb250aEZpbmdlcnByaW50ID09PSBidXR0b25GaW5nZXJwcmludDtcblxuICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHN0eWxlcy5tb250aFdyYXBwZXIsIHtcbiAgICAgICAgICAgICAgICBbc3R5bGVzLnNlbGVjdGVkXTogaXNDdXJyZW50XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcywgYnV0dG9uRmluZ2VycHJpbnQpfT5cbiAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBwZXJzaWFuTnVtYmVyIH0gZnJvbSAnLi4vdXRpbHMvcGVyc2lhbic7XG5pbXBvcnQgeyBsZWZ0QXJyb3csIHJpZ2h0QXJyb3cgfSBmcm9tICcuLi91dGlscy9hc3NldHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aHNWaWV3SGVhZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgeWVhcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG9uTmV4dFllYXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25QcmV2WWVhcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgc3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHR5cGU6IFByb3BUeXBlcy5udW1iZXJcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB5ZWFyLCBzdHlsZXMsIHR5cGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB5ZWFyRm9ybWF0ID0gJ1lZWVknO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICB7eWVhci5mb3JtYXQoeWVhckZvcm1hdCl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPXtcImJlZm9yZSB5ZWFyXCJ9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5uYXZCdXR0b259XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJldn1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUHJldlllYXJ9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3JpZ2h0QXJyb3d9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aXRsZT17XCJuZXh0IHllYXJcIn1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLm5hdkJ1dHRvbn1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXh0fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25OZXh0WWVhcn1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17bGVmdEFycm93fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHdyYXBwZXI6IHt9LFxuICBidXR0b246IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkYXk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBpc0N1cnJlbnRNb250aDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gbmV4dFByb3BzLnNlbGVjdGVkICE9PSB0aGlzLnByb3BzLnNlbGVjdGVkIHx8XG4gICAgICBuZXh0UHJvcHMuZGlzYWJsZWQgIT09IHRoaXMucHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgIG5leHRQcm9wcy5pc0N1cnJlbnRNb250aCAhPT0gdGhpcy5wcm9wcy5pc0N1cnJlbnRNb250aDtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB7IG9uQ2xpY2ssIGRheSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKGRheSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF5LCBkaXNhYmxlZCwgc2VsZWN0ZWQsIGlzQ3VycmVudE1vbnRoLCBvbkNsaWNrLCBzdHlsZXMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHN0eWxlcy5kYXlXcmFwcGVyLCB7XG4gICAgICBbc3R5bGVzLnNlbGVjdGVkXTogc2VsZWN0ZWQsXG4gICAgICBbc3R5bGVzLmN1cnJlbnRNb250aF06IGlzQ3VycmVudE1vbnRoXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgZGF5LmZvcm1hdCgnRCcpIH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCIvKipcbiAqIEdldCBkYXlzIG9mIGEgbW9udGggdGhhdCBzaG91bGQgYmUgc2hvd24gb24gYSBtb250aCBwYWdlXG4gKlxuICogQHBhcmFtIG1vbnRoIEEgbW9tZW50IG9iamVjdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c09mTW9udGgobW9udGgpIHtcbiAgY29uc3QgZGF5cyA9IFtdO1xuXG4gIGNvbnN0IG1vbnRoRm9ybWF0ID0gJ01vbnRoJztcbiAgY29uc3QgZGF5T2Zmc2V0ID0gMDtcblxuICBjb25zdCBjdXJyZW50ID0gbW9udGguY2xvbmUoKS5zdGFydE9mKG1vbnRoRm9ybWF0KTtcbiAgY29uc3QgZW5kID0gbW9udGguY2xvbmUoKS5lbmRPZihtb250aEZvcm1hdCk7XG5cbiAgLy8gU2V0IHN0YXJ0IHRvIHRoZSBmaXJzdCBkYXkgb2Ygd2VlayBpbiB0aGUgbGFzdCBtb250aFxuICBjdXJyZW50LnN1YnRyYWN0KChjdXJyZW50LmRheSgpICsgZGF5T2Zmc2V0KSAlIDcsICdkYXlzJyk7XG5cbiAgLy8gU2V0IGVuZCB0byB0aGUgbGFzdCBkYXkgb2Ygd2VlayBpbiB0aGUgbmV4dCBtb250aFxuICBlbmQuYWRkKDYgLSAoZW5kLmRheSgpICsgZGF5T2Zmc2V0KSAlIDcsICdkYXlzJyk7XG5cbiAgd2hpbGUgKGN1cnJlbnQuaXNCZWZvcmUoZW5kKSkge1xuICAgIGRheXMucHVzaChjdXJyZW50LmNsb25lKCkpO1xuICAgIGN1cnJlbnQuYWRkKDEsICdkYXlzJyk7XG4gIH1cblxuICByZXR1cm4gZGF5cztcbn1cbiIsIi8qKlxuICogQSBoaWdoZXItb3JkZXItY29tcG9uZW50IGZvciBoYW5kbGluZyBvbkNsaWNrT3V0c2lkZSBmb3IgUmVhY3QgY29tcG9uZW50cy5cbiAqL1xuKGZ1bmN0aW9uKHJvb3QpIHtcblxuICAvLyBhZG1pbmlzdHJhdGl2ZVxuICB2YXIgcmVnaXN0ZXJlZENvbXBvbmVudHMgPSBbXTtcbiAgdmFyIGhhbmRsZXJzID0gW107XG4gIHZhciBJR05PUkVfQ0xBU1MgPSAnaWdub3JlLXJlYWN0LW9uY2xpY2tvdXRzaWRlJztcbiAgdmFyIERFRkFVTFRfRVZFTlRTID0gWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddO1xuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHNvbWUgRE9NIG5vZGUgaXMgb3VyIENvbXBvbmVudCdzIG5vZGUuXG4gICAqL1xuICB2YXIgaXNOb2RlRm91bmQgPSBmdW5jdGlvbihjdXJyZW50LCBjb21wb25lbnROb2RlLCBpZ25vcmVDbGFzcykge1xuICAgIGlmIChjdXJyZW50ID09PSBjb21wb25lbnROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gU1ZHIDx1c2UvPiBlbGVtZW50cyBkbyBub3QgdGVjaG5pY2FsbHkgcmVzaWRlIGluIHRoZSByZW5kZXJlZCBET00sIHNvXG4gICAgLy8gdGhleSBkbyBub3QgaGF2ZSBjbGFzc0xpc3QgZGlyZWN0bHksIGJ1dCB0aGV5IG9mZmVyIGEgbGluayB0byB0aGVpclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZWxlbWVudCwgd2hpY2ggY2FuIGhhdmUgY2xhc3NMaXN0LiBUaGlzIGV4dHJhIGNoZWNrIGlzIGZvclxuICAgIC8vIHRoYXQgY2FzZS5cbiAgICAvLyBTZWU6IGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL3N0cnVjdC5odG1sI0ludGVyZmFjZVNWR1VzZUVsZW1lbnRcbiAgICAvLyBEaXNjdXNzaW9uOiBodHRwczovL2dpdGh1Yi5jb20vUG9tYXgvcmVhY3Qtb25jbGlja291dHNpZGUvcHVsbC8xN1xuICAgIGlmIChjdXJyZW50LmNvcnJlc3BvbmRpbmdFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY3VycmVudC5jb3JyZXNwb25kaW5nRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoaWdub3JlQ2xhc3MpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoaWdub3JlQ2xhc3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcnkgdG8gZmluZCBvdXIgbm9kZSBpbiBhIGhpZXJhcmNoeSBvZiBub2RlcywgcmV0dXJuaW5nIHRoZSBkb2N1bWVudFxuICAgKiBub2RlIGFzIGhpZ2hlc3Qgbm9vZGUgaWYgb3VyIG5vZGUgaXMgbm90IGZvdW5kIGluIHRoZSBwYXRoIHVwLlxuICAgKi9cbiAgdmFyIGZpbmRIaWdoZXN0ID0gZnVuY3Rpb24oY3VycmVudCwgY29tcG9uZW50Tm9kZSwgaWdub3JlQ2xhc3MpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gY29tcG9uZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gSWYgc291cmNlPWxvY2FsIHRoZW4gdGhpcyBldmVudCBjYW1lIGZyb20gJ3NvbWV3aGVyZSdcbiAgICAvLyBpbnNpZGUgYW5kIHNob3VsZCBiZSBpZ25vcmVkLiBXZSBjb3VsZCBoYW5kbGUgdGhpcyB3aXRoXG4gICAgLy8gYSBsYXllcmVkIGFwcHJvYWNoLCB0b28sIGJ1dCB0aGF0IHJlcXVpcmVzIGdvaW5nIGJhY2sgdG9cbiAgICAvLyB0aGlua2luZyBpbiB0ZXJtcyBvZiBEb20gbm9kZSBuZXN0aW5nLCBydW5uaW5nIGNvdW50ZXJcbiAgICAvLyB0byBSZWFjdCdzICd5b3Ugc2hvdWxkbid0IGNhcmUgYWJvdXQgdGhlIERPTScgcGhpbG9zb3BoeS5cbiAgICB3aGlsZShjdXJyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChpc05vZGVGb3VuZChjdXJyZW50LCBjb21wb25lbnROb2RlLCBpZ25vcmVDbGFzcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGJyb3dzZXIgc2Nyb2xsYmFyIHdhcyBjbGlja2VkXG4gICAqL1xuICB2YXIgY2xpY2tlZFNjcm9sbGJhciA9IGZ1bmN0aW9uKGV2dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gZXZ0LmNsaWVudFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA8PSBldnQuY2xpZW50WTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgdGhlIGV2ZW50IGhhbmRsZXIgdGhhdCBjaGVja3Mgd2hldGhlciBhIGNsaWNrZWQgRE9NIG5vZGVcbiAgICogaXMgaW5zaWRlIG9mLCBvciBsaXZlcyBvdXRzaWRlIG9mLCBvdXIgQ29tcG9uZW50J3Mgbm9kZSB0cmVlLlxuICAgKi9cbiAgdmFyIGdlbmVyYXRlT3V0c2lkZUNoZWNrID0gZnVuY3Rpb24oY29tcG9uZW50Tm9kZSwgY29tcG9uZW50SW5zdGFuY2UsIGV2ZW50SGFuZGxlciwgaWdub3JlQ2xhc3MsIGV4Y2x1ZGVTY3JvbGxiYXIsIHByZXZlbnREZWZhdWx0LCBzdG9wUHJvcGFnYXRpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBpZiAocHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHZhciBjdXJyZW50ID0gZXZ0LnRhcmdldDtcbiAgICAgIGlmKChleGNsdWRlU2Nyb2xsYmFyICYmIGNsaWNrZWRTY3JvbGxiYXIoZXZ0KSkgfHwgKGZpbmRIaWdoZXN0KGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSAhPT0gZG9jdW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50SGFuZGxlcihldnQpO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIHRoZSBIT0MgZnVuY3Rpb24gdGhhdCB5b3UnbGwgdXNlXG4gICAqIGluIG9yZGVyIHRvIGltcGFydCBvbk91dHNpZGVDbGljayBsaXN0ZW5pbmcgdG8gYW5cbiAgICogYXJiaXRyYXJ5IGNvbXBvbmVudC4gSXQgZ2V0cyBjYWxsZWQgYXQgdGhlIGVuZCBvZiB0aGVcbiAgICogYm9vdHN0cmFwcGluZyBjb2RlIHRvIHlpZWxkIGFuIGluc3RhbmNlIG9mIHRoZVxuICAgKiBvbkNsaWNrT3V0c2lkZUhPQyBmdW5jdGlvbiBkZWZpbmVkIGluc2lkZSBzZXR1cEhPQygpLlxuICAgKi9cbiAgZnVuY3Rpb24gc2V0dXBIT0Mocm9vdCwgUmVhY3QsIFJlYWN0RE9NLCBjcmVhdGVSZWFjdENsYXNzKSB7XG5cbiAgICAvLyBUaGUgYWN0dWFsIENvbXBvbmVudC13cmFwcGluZyBIT0M6XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlSE9DKENvbXBvbmVudCwgY29uZmlnKSB7XG4gICAgICB2YXIgd3JhcENvbXBvbmVudFdpdGhPbkNsaWNrT3V0c2lkZUhhbmRsaW5nID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gICAgICAgIHN0YXRpY3M6IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBBY2Nlc3MgdGhlIHdyYXBwZWQgQ29tcG9uZW50J3MgY2xhc3MuXG4gICAgICAgICAgICovXG4gICAgICAgICAgZ2V0Q2xhc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKENvbXBvbmVudC5nZXRDbGFzcykge1xuICAgICAgICAgICAgICByZXR1cm4gQ29tcG9uZW50LmdldENsYXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gQ29tcG9uZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWNjZXNzIHRoZSB3cmFwcGVkIENvbXBvbmVudCdzIGluc3RhbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0SW5zdGFuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPyB0aGlzLnJlZnMuaW5zdGFuY2UgOiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHRoaXMgaXMgZ2l2ZW4gbWVhbmluZyBpbiBjb21wb25lbnREaWRNb3VudFxuICAgICAgICBfX291dHNpZGVDbGlja0hhbmRsZXI6IGZ1bmN0aW9uKCkge30sXG5cbiAgICAgICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhjbHVkZVNjcm9sbGJhcjogY29uZmlnICYmIGNvbmZpZy5leGNsdWRlU2Nyb2xsYmFyXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGNsaWNrIGxpc3RlbmVycyB0byB0aGUgY3VycmVudCBkb2N1bWVudCxcbiAgICAgICAgICogbGlua2VkIHRvIHRoaXMgY29tcG9uZW50J3Mgc3RhdGUuXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gSWYgd2UgYXJlIGluIGFuIGVudmlyb25tZW50IHdpdGhvdXQgYSBET00gc3VjaFxuICAgICAgICAgIC8vIGFzIHNoYWxsb3cgcmVuZGVyaW5nIG9yIHNuYXBzaG90cyB0aGVuIHdlIGV4aXRcbiAgICAgICAgICAvLyBlYXJseSB0byBwcmV2ZW50IGFueSB1bmhhbmRsZWQgZXJyb3JzIGJlaW5nIHRocm93bi5cbiAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhZG9jdW1lbnQuY3JlYXRlRWxlbWVudCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xuICAgICAgICAgIHZhciBjbGlja091dHNpZGVIYW5kbGVyO1xuXG4gICAgICAgICAgaWYoY29uZmlnICYmIHR5cGVvZiBjb25maWcuaGFuZGxlQ2xpY2tPdXRzaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjbGlja091dHNpZGVIYW5kbGVyID0gY29uZmlnLmhhbmRsZUNsaWNrT3V0c2lkZShpbnN0YW5jZSk7XG4gICAgICAgICAgICBpZih0eXBlb2YgY2xpY2tPdXRzaWRlSGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBsYWNrcyBhIGZ1bmN0aW9uIGZvciBwcm9jZXNzaW5nIG91dHNpZGUgY2xpY2sgZXZlbnRzIHNwZWNpZmllZCBieSB0aGUgaGFuZGxlQ2xpY2tPdXRzaWRlIGNvbmZpZyBvcHRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiBpbnN0YW5jZS5oYW5kbGVDbGlja091dHNpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChSZWFjdC5Db21wb25lbnQucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgICAgIGNsaWNrT3V0c2lkZUhhbmRsZXIgPSBpbnN0YW5jZS5oYW5kbGVDbGlja091dHNpZGUuYmluZChpbnN0YW5jZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjbGlja091dHNpZGVIYW5kbGVyID0gaW5zdGFuY2UuaGFuZGxlQ2xpY2tPdXRzaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZih0eXBlb2YgaW5zdGFuY2UucHJvcHMuaGFuZGxlQ2xpY2tPdXRzaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjbGlja091dHNpZGVIYW5kbGVyID0gaW5zdGFuY2UucHJvcHMuaGFuZGxlQ2xpY2tPdXRzaWRlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBsYWNrcyBhIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkgZnVuY3Rpb24gZm9yIHByb2Nlc3Npbmcgb3V0c2lkZSBjbGljayBldmVudHMuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNvbXBvbmVudE5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQW50aXBhdHRlcm4gd2FybmluZzogdGhlcmUgd2FzIG5vIERPTSBub2RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29tcG9uZW50IHRoYXQgaXMgYmVpbmcgd3JhcHBlZCBieSBvdXRzaWRlQ2xpY2suJyk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICAgICAgICAnVGhpcyBpcyB0eXBpY2FsbHkgY2F1c2VkIGJ5IGhhdmluZyBhIGNvbXBvbmVudCB0aGF0IHN0YXJ0cyBsaWZlIHdpdGggYSByZW5kZXIgZnVuY3Rpb24gdGhhdCcsXG4gICAgICAgICAgICAgICdyZXR1cm5zIGBudWxsYCAoZHVlIHRvIGEgc3RhdGUgb3IgcHJvcHMgdmFsdWUpLCBzbyB0aGF0IHRoZSBjb21wb25lbnQgXFwnZXhpc3RcXCcgaW4gdGhlIFJlYWN0JyxcbiAgICAgICAgICAgICAgJ2NoYWluIG9mIGNvbXBvbmVudHMsIGJ1dCBub3QgaW4gdGhlIERPTS5cXG5cXG5JbnN0ZWFkLCB5b3UgbmVlZCB0byByZWZhY3RvciB5b3VyIGNvZGUgc28gdGhhdCB0aGUnLFxuICAgICAgICAgICAgICAnZGVjaXNpb24gb2Ygd2hldGhlciBvciBub3QgdG8gc2hvdyB5b3VyIGNvbXBvbmVudCBpcyBoYW5kbGVkIGJ5IHRoZSBwYXJlbnQsIGluIHRoZWlyIHJlbmRlcigpJyxcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uLlxcblxcbkluIGNvZGUsIHJhdGhlciB0aGFuOlxcblxcbiAgQXtyZW5kZXIoKXtyZXR1cm4gY2hlY2s/IDwuLi4vPiA6IG51bGw7fVxcbiAgQntyZW5kZXIoKXs8QSBjaGVjaz0uLi4gLz59XFxuXFxubWFrZSBzdXJlIHRoYXQgeW91JyxcbiAgICAgICAgICAgICAgJ3VzZTpcXG5cXG4gIEF7cmVuZGVyKCl7cmV0dXJuIDwuLi4vPn1cXG4gIEJ7cmVuZGVyKCl7cmV0dXJuIDwuLi4+eyBjaGVjayA/IDxBLz4gOiBudWxsIH08Li4uPn19XFxuXFxuVGhhdCBpczonLFxuICAgICAgICAgICAgICAndGhlIHBhcmVudCBpcyBhbHdheXMgcmVzcG9uc2libGUgZm9yIGRlY2lkaW5nIHdoZXRoZXIgb3Igbm90IHRvIHJlbmRlciBhbnkgb2YgaXRzIGNoaWxkcmVuLicsXG4gICAgICAgICAgICAgICdJdCBpcyBub3QgdGhlIGNoaWxkXFwncyByZXNwb25zaWJpbGl0eSB0byBkZWNpZGUgd2hldGhlciBhIHJlbmRlciBpbnN0cnVjdGlvbiBmcm9tIGFib3ZlIHNob3VsZCcsXG4gICAgICAgICAgICAgICdnZXQgaWdub3JlZCBvciBub3QgYnkgcmV0dXJuaW5nIGBudWxsYC5cXG5cXG5XaGVuIGFueSBjb21wb25lbnQgZ2V0cyBpdHMgcmVuZGVyKCkgZnVuY3Rpb24gY2FsbGVkLCcsXG4gICAgICAgICAgICAgICd0aGF0IGlzIHRoZSBzaWduYWwgdGhhdCBpdCBzaG91bGQgYmUgcmVuZGVyaW5nIGl0cyBwYXJ0IG9mIHRoZSBVSS4gSXQgbWF5IGluIHR1cm4gZGVjaWRlIG5vdCB0bycsXG4gICAgICAgICAgICAgICdyZW5kZXIgYWxsIG9mICppdHMqIGNoaWxkcmVuLCBidXQgaXQgc2hvdWxkIG5ldmVyIHJldHVybiBgbnVsbGAgZm9yIGl0c2VsZi4gSXQgaXMgbm90IHJlc3BvbnNpYmxlJyxcbiAgICAgICAgICAgICAgJ2ZvciB0aGF0IGRlY2lzaW9uLidcbiAgICAgICAgICAgIF0uam9pbignICcpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZm4gPSB0aGlzLl9fb3V0c2lkZUNsaWNrSGFuZGxlciA9IGdlbmVyYXRlT3V0c2lkZUNoZWNrKFxuICAgICAgICAgICAgY29tcG9uZW50Tm9kZSxcbiAgICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgICAgY2xpY2tPdXRzaWRlSGFuZGxlcixcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3V0c2lkZUNsaWNrSWdub3JlQ2xhc3MgfHwgSUdOT1JFX0NMQVNTLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5leGNsdWRlU2Nyb2xsYmFyLCAvLyBmYWxsYmFjayBub3QgbmVlZGVkLCBwcm9wIGFsd2F5cyBleGlzdHMgYmVjYXVzZSBvZiBnZXREZWZhdWx0UHJvcHNcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJldmVudERlZmF1bHQgfHwgZmFsc2UsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0b3BQcm9wYWdhdGlvbiB8fCBmYWxzZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB2YXIgcG9zID0gcmVnaXN0ZXJlZENvbXBvbmVudHMubGVuZ3RoO1xuICAgICAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzLnB1c2godGhpcyk7XG4gICAgICAgICAgaGFuZGxlcnNbcG9zXSA9IGZuO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSB0cnV0aHkgZGlzYWJsZU9uQ2xpY2tPdXRzaWRlIHByb3BlcnR5IGZvciB0aGlzXG4gICAgICAgICAgLy8gY29tcG9uZW50LCBkb24ndCBpbW1lZGlhdGVseSBzdGFydCBsaXN0ZW5pbmcgZm9yIG91dHNpZGUgZXZlbnRzLlxuICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlT25DbGlja091dHNpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICogVHJhY2sgZm9yIGRpc2FibGVPbkNsaWNrT3V0c2lkZSBwcm9wcyBjaGFuZ2VzIGFuZCBlbmFibGUvZGlzYWJsZSBjbGljayBvdXRzaWRlXG4gICAgICAgICovXG4gICAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSAmJiAhbmV4dFByb3BzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVPbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlICYmIG5leHRQcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGRvY3VtZW50J3MgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlT25DbGlja091dHNpZGUoKTtcbiAgICAgICAgICB0aGlzLl9fb3V0c2lkZUNsaWNrSGFuZGxlciA9IGZhbHNlO1xuICAgICAgICAgIHZhciBwb3MgPSByZWdpc3RlcmVkQ29tcG9uZW50cy5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgIGlmKCBwb3M+LTEpIHtcbiAgICAgICAgICAgIC8vIGNsZWFuIHVwIHNvIHdlIGRvbid0IGxlYWsgbWVtb3J5XG4gICAgICAgICAgICBpZiAoaGFuZGxlcnNbcG9zXSkgeyBoYW5kbGVycy5zcGxpY2UocG9zLCAxKTsgfVxuICAgICAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHMuc3BsaWNlKHBvcywgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW4gYmUgY2FsbGVkIHRvIGV4cGxpY2l0bHkgZW5hYmxlIGV2ZW50IGxpc3RlbmluZ1xuICAgICAgICAgKiBmb3IgY2xpY2tzIGFuZCB0b3VjaGVzIG91dHNpZGUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgZW5hYmxlT25DbGlja091dHNpZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBmbiA9IHRoaXMuX19vdXRzaWRlQ2xpY2tIYW5kbGVyO1xuICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5wcm9wcy5ldmVudFR5cGVzIHx8IERFRkFVTFRfRVZFTlRTO1xuICAgICAgICAgICAgaWYgKCFldmVudHMuZm9yRWFjaCkge1xuICAgICAgICAgICAgICBldmVudHMgPSBbZXZlbnRzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FuIGJlIGNhbGxlZCB0byBleHBsaWNpdGx5IGRpc2FibGUgZXZlbnQgbGlzdGVuaW5nXG4gICAgICAgICAqIGZvciBjbGlja3MgYW5kIHRvdWNoZXMgb3V0c2lkZSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlT25DbGlja091dHNpZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBmbiA9IHRoaXMuX19vdXRzaWRlQ2xpY2tIYW5kbGVyO1xuICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5wcm9wcy5ldmVudFR5cGVzIHx8IERFRkFVTFRfRVZFTlRTO1xuICAgICAgICAgICAgaWYgKCFldmVudHMuZm9yRWFjaCkge1xuICAgICAgICAgICAgICBldmVudHMgPSBbZXZlbnRzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGFzcy10aHJvdWdoIHJlbmRlclxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgcGFzc2VkUHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgIHZhciBwcm9wcyA9IHt9O1xuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnZXhjbHVkZVNjcm9sbGJhcicpIHtcbiAgICAgICAgICAgICAgcHJvcHNba2V5XSA9IHBhc3NlZFByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgICAgICAgICAgcHJvcHMucmVmID0gJ2luc3RhbmNlJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJvcHMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlID0gdGhpcy5kaXNhYmxlT25DbGlja091dHNpZGU7XG4gICAgICAgICAgcHJvcHMuZW5hYmxlT25DbGlja091dHNpZGUgPSB0aGlzLmVuYWJsZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIGRpc3BsYXkgbmFtZSBmb3IgUmVhY3QgZGV2dG9vbHNcbiAgICAgIChmdW5jdGlvbiBiaW5kV3JhcHBlZENvbXBvbmVudE5hbWUoYywgd3JhcHBlcikge1xuICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGMuZGlzcGxheU5hbWUgfHwgYy5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgICAgICB3cmFwcGVyLmRpc3BsYXlOYW1lID0gJ09uQ2xpY2tPdXRzaWRlKCcgKyBjb21wb25lbnROYW1lICsgJyknO1xuICAgICAgfShDb21wb25lbnQsIHdyYXBDb21wb25lbnRXaXRoT25DbGlja091dHNpZGVIYW5kbGluZykpO1xuXG4gICAgICByZXR1cm4gd3JhcENvbXBvbmVudFdpdGhPbkNsaWNrT3V0c2lkZUhhbmRsaW5nO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzZXRzIHVwIHRoZSBsaWJyYXJ5IGluIHdheXMgdGhhdFxuICAgKiB3b3JrIHdpdGggdGhlIHZhcmlvdXMgbW9kdWxkZSBsb2FkaW5nIHNvbHV0aW9uc1xuICAgKiB1c2VkIGluIEphdmFTY3JpcHQgbGFuZCB0b2RheS5cbiAgICovXG4gIGZ1bmN0aW9uIHNldHVwQmluZGluZyhyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgZGVmaW5lKFsncmVhY3QnLCdyZWFjdC1kb20nLCdjcmVhdGUtcmVhY3QtY2xhc3MnXSwgZnVuY3Rpb24oUmVhY3QsIFJlYWN0RG9tLCBjcmVhdGVSZWFjdENsYXNzKSB7XG4gICAgICAgIGlmICghY3JlYXRlUmVhY3RDbGFzcykgY3JlYXRlUmVhY3RDbGFzcyA9IFJlYWN0LmNyZWF0ZUNsYXNzO1xuICAgICAgICByZXR1cm4gZmFjdG9yeShyb290LCBSZWFjdCwgUmVhY3REb20sIGNyZWF0ZVJlYWN0Q2xhc3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIE5vZGUuIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3RcbiAgICAgIC8vIENvbW1vbkpTLCBidXQgb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50c1xuICAgICAgLy8gdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCwgcmVxdWlyZSgncmVhY3QnKSwgcmVxdWlyZSgncmVhY3QtZG9tJyksIHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICAgIHZhciBjcmVhdGVSZWFjdENsYXNzID0gUmVhY3QuY3JlYXRlQ2xhc3MgPyBSZWFjdC5jcmVhdGVDbGFzcyA6IHdpbmRvdy5jcmVhdGVSZWFjdENsYXNzO1xuICAgICAgcm9vdC5vbkNsaWNrT3V0c2lkZSA9IGZhY3Rvcnkocm9vdCwgUmVhY3QsIFJlYWN0RE9NLCBjcmVhdGVSZWFjdENsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvLyBNYWtlIGl0IGFsbCBoYXBwZW5cbiAgc2V0dXBCaW5kaW5nKHJvb3QsIHNldHVwSE9DKTtcblxufSh0aGlzKSk7XG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgY2FsZW5kYXJDb250YWluZXI6ICdjYWxlbmRhckNvbnRhaW5lcicsXG4gIGhlYWRpbmc6ICdoZWFkaW5nJyxcbiAgcHJldjogJ3ByZXYnLFxuICBuZXh0OiAnbmV4dCcsXG4gIHRpdGxlOiAndGl0bGUnLFxuICBkYXlXcmFwcGVyOiAnZGF5V3JhcHBlcicsXG4gIGN1cnJlbnRNb250aDogJ2N1cnJlbnRNb250aCcsXG4gIGRheXNPZldlZWs6ICdkYXlzT2ZXZWVrJyxcbiAgbW9udGhzTGlzdDogJ21vbnRoc0xpc3QnLFxuICBzZWxlY3RlZDogJ3NlbGVjdGVkJyxcbiAgZGF5UGlja2VyQ29udGFpbmVyOiAnZGF5UGlja2VyQ29udGFpbmVyJ1xufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi9UaW1lUGlja2VyJztcbmltcG9ydCB7IG91dHNpZGVDbGlja0lnbm9yZUNsYXNzIH0gZnJvbSAnLi9EYXRlUGlja2VyJztcbmltcG9ydCB7IHBlcnNpYW5OdW1iZXIgfSBmcm9tICcuLi91dGlscy9wZXJzaWFuJztcblxuY29uc3QgZGlzYWJsZWRNaW51dGVzID0gKCkgPT4ge1xuICByZXR1cm4gWy4uLkFycmF5KDYwKV0ubWFwKCh2LCBpKSA9PiBpKS5maWx0ZXIodiA9PiB2ICUgNSAhPT0gMCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVRpbWVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1vbWVudFZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNldE1vbWVudFZhbHVlOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIGNvbnN0IHsgbW9tZW50VmFsdWUsIG1pbiB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbmV3VmFsdWU7XG5cbiAgICBpZiAobW9tZW50VmFsdWUpIHtcbiAgICAgIG5ld1ZhbHVlID0gbW9tZW50VmFsdWUuY2xvbmUoKTtcbiAgICB9IGVsc2UgaWYgKG1pbiAmJiBtaW4uaXNBZnRlcihtb21lbnQoKSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gbWluLmNsb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gbW9tZW50KHZhbHVlKTtcbiAgICB9XG5cbiAgICBuZXdWYWx1ZS5ob3VyKHZhbHVlLmhvdXIoKSk7XG4gICAgbmV3VmFsdWUubWludXRlKHZhbHVlLm1pbnV0ZSgpKTtcblxuICAgIHRoaXMucHJvcHMuc2V0TW9tZW50VmFsdWUobmV3VmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbW9tZW50VmFsdWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0aW1lTGFiZWw9J3RpbWU6JztcblxuICAgIHJldHVybiBtb21lbnRWYWx1ZSA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGltZS1waWNrZXItY29udGFpbmVyYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lLWxhYmVsJz57dGltZUxhYmVsfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZS1waWNrZXItcGFuZWwnPlxuICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICBzaG93QU1QTVxuICAgICAgICAgICAgc2hvd1NlY29uZD17ZmFsc2V9XG4gICAgICAgICAgICBhbGxvd0VtcHR5PXtmYWxzZX1cbiAgICAgICAgICAgIHZhbHVlPXttb21lbnRWYWx1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17b3V0c2lkZUNsaWNrSWdub3JlQ2xhc3N9XG4gICAgICAgICAgICBwb3B1cENsYXNzTmFtZT17b3V0c2lkZUNsaWNrSWdub3JlQ2xhc3N9XG4gICAgICAgICAgICBwYW5lbENsYXNzTmFtZT17YCR7b3V0c2lkZUNsaWNrSWdub3JlQ2xhc3N9IHRpbWUtcGlja2VyLXBhbmVsYH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgZGlzYWJsZWRNaW51dGVzPXtkaXNhYmxlZE1pbnV0ZXN9XG4gICAgICAgICAgICBmb3JtYXR0ZXI9e3ZhbHVlID0+IHBlcnNpYW5OdW1iZXIodmFsdWUpfVxuICAgICAgICAgICAgaGlkZURpc2FibGVkT3B0aW9uc1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiAnYm90aCcgfX0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApIDogbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi9UaW1lUGlja2VyJztcbmV4cG9ydCBkZWZhdWx0IFRpbWVQaWNrZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgUGFuZWwgZnJvbSAnLi9QYW5lbCc7XG5pbXBvcnQgcGxhY2VtZW50cyBmcm9tICcuL3BsYWNlbWVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSBcImNyZWF0ZS1yZWFjdC1jbGFzc1wiO1xuXG5mdW5jdGlvbiBub29wKCkge1xufVxuXG5mdW5jdGlvbiByZWZGbihmaWVsZCwgY29tcG9uZW50KSB7XG4gIHRoaXNbZmllbGRdID0gY29tcG9uZW50O1xufVxuXG5jb25zdCBQaWNrZXIgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsZWFyVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkZWZhdWx0T3BlblZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhbGxvd0VtcHR5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGFsaWduOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLmFueSxcbiAgICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3dIb3VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd1NlY29uZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWRIb3VyczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWRNaW51dGVzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZFNlY29uZHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNob3dBTVBNOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYW5lbENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xlYXJUZXh0OiAnY2xlYXInLFxuICAgICAgcHJlZml4Q2xzOiAncmMtdGltZS1waWNrZXInLFxuICAgICAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICAgICAgc3R5bGU6IHt9LFxuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIGFsaWduOiB7fSxcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWU6IG1vbWVudCgpLFxuICAgICAgYWxsb3dFbXB0eTogdHJ1ZSxcbiAgICAgIHNob3dIb3VyOiB0cnVlLFxuICAgICAgc2hvd1NlY29uZDogdHJ1ZSxcbiAgICAgIGRpc2FibGVkSG91cnM6IG5vb3AsXG4gICAgICBkaXNhYmxlZE1pbnV0ZXM6IG5vb3AsXG4gICAgICBkaXNhYmxlZFNlY29uZHM6IG5vb3AsXG4gICAgICBoaWRlRGlzYWJsZWRPcHRpb25zOiBmYWxzZSxcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbUxlZnQnLFxuICAgICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgICBvbk9wZW46IG5vb3AsXG4gICAgICBvbkNsb3NlOiBub29wLFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHRoaXMuc2F2ZVBhbmVsUmVmID0gcmVmRm4uYmluZCh0aGlzLCAncGFuZWxJbnN0YW5jZScpO1xuICAgIGNvbnN0IHsgZGVmYXVsdE9wZW4sIGRlZmF1bHRWYWx1ZSwgb3BlbiA9IGRlZmF1bHRPcGVuLCB2YWx1ZSA9IGRlZmF1bHRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbixcbiAgICAgIHZhbHVlLFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBvcGVuIH0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKCd2YWx1ZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG9wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW4gfSk7XG4gICAgfVxuICB9LFxuXG4gIG9uUGFuZWxDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfSxcblxuICBvblBhbmVsQ2xlYXIoKSB7XG4gICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICB0aGlzLnNldE9wZW4oZmFsc2UpO1xuICB9LFxuXG4gIG9uVmlzaWJsZUNoYW5nZShvcGVuKSB7XG4gICAgdGhpcy5zZXRPcGVuKG9wZW4pO1xuICB9LFxuXG4gIG9uRXNjKCkge1xuICAgIHRoaXMuc2V0T3BlbihmYWxzZSk7XG4gICAgdGhpcy5yZWZzLnBpY2tlci5mb2N1cygpO1xuICB9LFxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgIHRoaXMuc2V0T3Blbih0cnVlKTtcbiAgICB9XG4gIH0sXG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAoISgndmFsdWUnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH0sXG5cbiAgZ2V0Rm9ybWF0KCkge1xuICAgIGxldCBmb3JtYXQgPSB0aGlzLnByb3BzLmZvcm1hdDtcblxuICAgIGlmICh0aGlzLnByb3BzLmZvcm1hdCkge1xuICAgICAgZm9ybWF0ID0gdGhpcy5wcm9wcy5mb3JtYXRcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLnNob3dTZWNvbmQpIHtcbiAgICAgIGZvcm1hdCA9ICdISDptbSc7XG4gICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5zaG93SG91cikge1xuICAgICAgZm9ybWF0ID0gJ21tOnNzJztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybWF0ID0gJ0hIOm1tOnNzJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zaG93QU1QTSkge1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgnSEgnLCAnaGgnKSArICcgQSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfSxcblxuICBnZXRQYW5lbEVsZW1lbnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJlZml4Q2xzLCBwbGFjZWhvbGRlciwgZGlzYWJsZWRIb3VycyxcbiAgICAgIGRpc2FibGVkTWludXRlcywgZGlzYWJsZWRTZWNvbmRzLCBoaWRlRGlzYWJsZWRPcHRpb25zLFxuICAgICAgYWxsb3dFbXB0eSwgc2hvd0hvdXIsIHNob3dTZWNvbmQsIHNob3dBTVBNLCBkZWZhdWx0T3BlblZhbHVlLCBjbGVhclRleHRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsXG4gICAgICAgIGNsZWFyVGV4dD17Y2xlYXJUZXh0fVxuICAgICAgICBwcmVmaXhDbHM9e2Ake3ByZWZpeENsc30tcGFuZWxgfVxuICAgICAgICByZWY9e3RoaXMuc2F2ZVBhbmVsUmVmfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QYW5lbENoYW5nZX1cbiAgICAgICAgb25DbGVhcj17dGhpcy5vblBhbmVsQ2xlYXJ9XG4gICAgICAgIGRlZmF1bHRPcGVuVmFsdWU9e2RlZmF1bHRPcGVuVmFsdWV9XG4gICAgICAgIHNob3dIb3VyPXtzaG93SG91cn1cbiAgICAgICAgb25Fc2M9e3RoaXMub25Fc2N9XG4gICAgICAgIHNob3dTZWNvbmQ9e3Nob3dTZWNvbmR9XG4gICAgICAgIHNob3dBTVBNPXtzaG93QU1QTX1cbiAgICAgICAgYWxsb3dFbXB0eT17YWxsb3dFbXB0eX1cbiAgICAgICAgZm9ybWF0PXt0aGlzLmdldEZvcm1hdCgpfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGRpc2FibGVkSG91cnM9e2Rpc2FibGVkSG91cnN9XG4gICAgICAgIGRpc2FibGVkTWludXRlcz17ZGlzYWJsZWRNaW51dGVzfVxuICAgICAgICBkaXNhYmxlZFNlY29uZHM9e2Rpc2FibGVkU2Vjb25kc31cbiAgICAgICAgaGlkZURpc2FibGVkT3B0aW9ucz17aGlkZURpc2FibGVkT3B0aW9uc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcblxuICBzZXRPcGVuKG9wZW4sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgeyBvbk9wZW4sIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbiAhPT0gb3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW4sXG4gICAgICB9LCBjYWxsYmFjayk7XG4gICAgICBjb25zdCBldmVudCA9IHtcbiAgICAgICAgb3BlbixcbiAgICAgIH07XG4gICAgICBpZiAob3Blbikge1xuICAgICAgICBvbk9wZW4oZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25DbG9zZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYW5lbENsYXNzTmFtZSxwcmVmaXhDbHMsIHBsYWNlaG9sZGVyLCBwbGFjZW1lbnQsIGFsaWduLFxuICAgICAgZGlzYWJsZWQsIHRyYW5zaXRpb25OYW1lLCBzdHlsZSwgY2xhc3NOYW1lLCBzaG93SG91cixcbiAgICAgIHNob3dTZWNvbmQsIGdldFBvcHVwQ29udGFpbmVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3BlbiwgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHBvcHVwQ2xhc3NOYW1lO1xuICAgIGlmICghc2hvd0hvdXIgfHwgIXNob3dTZWNvbmQpIHtcbiAgICAgIHBvcHVwQ2xhc3NOYW1lID0gYCR7cHJlZml4Q2xzfS1wYW5lbC1uYXJyb3dgO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFRyaWdnZXJcbiAgICAgICAgcHJlZml4Q2xzPXtgJHtwcmVmaXhDbHN9LXBhbmVsICAke3BhbmVsQ2xhc3NOYW1lfWB9XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPXtwb3B1cENsYXNzTmFtZX1cbiAgICAgICAgcG9wdXA9e3RoaXMuZ2V0UGFuZWxFbGVtZW50KCl9XG4gICAgICAgIHBvcHVwQWxpZ249e2FsaWdufVxuICAgICAgICBidWlsdGluUGxhY2VtZW50cz17cGxhY2VtZW50c31cbiAgICAgICAgcG9wdXBQbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgYWN0aW9uPXtkaXNhYmxlZCA/IFtdIDogWydjbGljayddfVxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGVcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyfVxuICAgICAgICBwb3B1cFRyYW5zaXRpb25OYW1lPXt0cmFuc2l0aW9uTmFtZX1cbiAgICAgICAgcG9wdXBWaXNpYmxlPXtvcGVufVxuICAgICAgICBvblBvcHVwVmlzaWJsZUNoYW5nZT17dGhpcy5vblZpc2libGVDaGFuZ2V9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfSAke2NsYXNzTmFtZX1gfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWlucHV0YH1cbiAgICAgICAgICAgIHJlZj1cInBpY2tlclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9IHZhbHVlPXt2YWx1ZSAmJiB2YWx1ZS5mb3JtYXQodGhpcy5nZXRGb3JtYXQoKSkgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30taWNvbmB9Lz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9UcmlnZ2VyPlxuICAgICk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUGlja2VyO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcbmltcG9ydCBjb250YWlucyBmcm9tICdyYy11dGlsL2VzL0RvbS9jb250YWlucyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tICdyYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5pbXBvcnQgeyBnZXRBbGlnbkZyb21QbGFjZW1lbnQsIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduIGFzIF9nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGdldENvbnRhaW5lclJlbmRlck1peGluIGZyb20gJ3JjLXV0aWwvbGliL2dldENvbnRhaW5lclJlbmRlck1peGluJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIHJldHVybkVtcHR5U3RyaW5nKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHJldHVybkRvY3VtZW50KCkge1xuICByZXR1cm4gd2luZG93LmRvY3VtZW50O1xufVxuXG52YXIgaXNNb2JpbGUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhBbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8aU9TfFVDV0VCKS9pKTtcblxudmFyIEFMTF9IQU5ETEVSUyA9IFsnb25DbGljaycsICdvbk1vdXNlRG93bicsICdvblRvdWNoU3RhcnQnLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdvbkZvY3VzJywgJ29uQmx1ciddO1xuXG52YXIgVHJpZ2dlciA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RyaWdnZXInLFxuICBwcm9wVHlwZXM6IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICBhY3Rpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXSksXG4gICAgc2hvd0FjdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgICBoaWRlQWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICAgIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcG9wdXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG4gICAgcG9wdXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcG9wdXBQbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYnVpbHRpblBsYWNlbWVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHBvcHVwQW5pbWF0aW9uOiBQcm9wVHlwZXMuYW55LFxuICAgIG1vdXNlRW50ZXJEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGZvY3VzRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgYmx1ckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnZXREb2N1bWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGVzdHJveVBvcHVwT25IaWRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtYXNrQ2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uUG9wdXBBbGlnbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcG9wdXBBbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwb3B1cFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1hc2tUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIG1hc2tBbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBtaXhpbnM6IFtnZXRDb250YWluZXJSZW5kZXJNaXhpbih7XG4gICAgYXV0b01vdW50OiBmYWxzZSxcblxuICAgIGlzVmlzaWJsZTogZnVuY3Rpb24gaXNWaXNpYmxlKGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2Uuc3RhdGUucG9wdXBWaXNpYmxlO1xuICAgIH0sXG4gICAgZ2V0Q29udGFpbmVyOiBmdW5jdGlvbiBnZXRDb250YWluZXIoaW5zdGFuY2UpIHtcbiAgICAgIHZhciBwcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgICB2YXIgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIHZhciBtb3VudE5vZGUgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lciA/IHByb3BzLmdldFBvcHVwQ29udGFpbmVyKGZpbmRET01Ob2RlKGluc3RhbmNlKSkgOiBwcm9wcy5nZXREb2N1bWVudCgpLmJvZHk7XG4gICAgICBtb3VudE5vZGUuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuICAgICAgcmV0dXJuIHBvcHVwQ29udGFpbmVyO1xuICAgIH1cbiAgfSldLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXhDbHM6ICdyYy10cmlnZ2VyLXBvcHVwJyxcbiAgICAgIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduOiByZXR1cm5FbXB0eVN0cmluZyxcbiAgICAgIGdldERvY3VtZW50OiByZXR1cm5Eb2N1bWVudCxcbiAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgICAgYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgICBvblBvcHVwQWxpZ246IG5vb3AsXG4gICAgICBwb3B1cENsYXNzTmFtZTogJycsXG4gICAgICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gICAgICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgICAgIGZvY3VzRGVsYXk6IDAsXG4gICAgICBibHVyRGVsYXk6IDAuMTUsXG4gICAgICBwb3B1cFN0eWxlOiB7fSxcbiAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogZmFsc2UsXG4gICAgICBwb3B1cEFsaWduOiB7fSxcbiAgICAgIGRlZmF1bHRQb3B1cFZpc2libGU6IGZhbHNlLFxuICAgICAgbWFzazogZmFsc2UsXG4gICAgICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gICAgICBhY3Rpb246IFtdLFxuICAgICAgc2hvd0FjdGlvbjogW10sXG4gICAgICBoaWRlQWN0aW9uOiBbXVxuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHBvcHVwVmlzaWJsZSA9IHZvaWQgMDtcbiAgICBpZiAoJ3BvcHVwVmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICAgIHBvcHVwVmlzaWJsZSA9ICEhcHJvcHMucG9wdXBWaXNpYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3B1cFZpc2libGUgPSAhIXByb3BzLmRlZmF1bHRQb3B1cFZpc2libGU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBBTExfSEFORExFUlMuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgICAgX3RoaXNbJ2ZpcmUnICsgaF0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKGgsIGUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKHt9LCB7XG4gICAgICBwb3B1cFZpc2libGU6IHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlXG4gICAgfSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoX3JlZikge1xuICAgIHZhciBwb3B1cFZpc2libGUgPSBfcmVmLnBvcHVwVmlzaWJsZTtcblxuICAgIGlmIChwb3B1cFZpc2libGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKF8sIHByZXZTdGF0ZSkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnJlbmRlckNvbXBvbmVudChudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJldlN0YXRlLnBvcHVwVmlzaWJsZSAhPT0gc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICAgIHByb3BzLmFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlKHN0YXRlLnBvcHVwVmlzaWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgdmFyIGN1cnJlbnREb2N1bWVudCA9IHZvaWQgMDtcbiAgICAgIGlmICghdGhpcy5jbGlja091dHNpZGVIYW5kbGVyICYmIHRoaXMuaXNDbGlja1RvSGlkZSgpKSB7XG4gICAgICAgIGN1cnJlbnREb2N1bWVudCA9IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnbW91c2Vkb3duJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIgJiYgaXNNb2JpbGUpIHtcbiAgICAgICAgY3VycmVudERvY3VtZW50ID0gY3VycmVudERvY3VtZW50IHx8IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhck91dHNpZGVIYW5kbGVyKCk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIHRoaXMuY2xlYXJPdXRzaWRlSGFuZGxlcigpO1xuICB9LFxuICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uTW91c2VFbnRlcihlKSB7XG4gICAgdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlRW50ZXInLCBlKTtcbiAgICB0aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKHRydWUsIHRoaXMucHJvcHMubW91c2VFbnRlckRlbGF5KTtcbiAgfSxcbiAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZSkge1xuICAgIHRoaXMuZmlyZUV2ZW50cygnb25Nb3VzZUxlYXZlJywgZSk7XG4gICAgdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZShmYWxzZSwgdGhpcy5wcm9wcy5tb3VzZUxlYXZlRGVsYXkpO1xuICB9LFxuICBvblBvcHVwTW91c2VFbnRlcjogZnVuY3Rpb24gb25Qb3B1cE1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgfSxcbiAgb25Qb3B1cE1vdXNlTGVhdmU6IGZ1bmN0aW9uIG9uUG9wdXBNb3VzZUxlYXZlKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgJiYgIWUucmVsYXRlZFRhcmdldC5zZXRUaW1lb3V0ICYmIHRoaXMuX2NvbXBvbmVudCAmJiB0aGlzLl9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlICYmIGNvbnRhaW5zKHRoaXMuX2NvbXBvbmVudC5nZXRQb3B1cERvbU5vZGUoKSwgZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCB0aGlzLnByb3BzLm1vdXNlTGVhdmVEZWxheSk7XG4gIH0sXG4gIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgIHRoaXMuZmlyZUV2ZW50cygnb25Gb2N1cycsIGUpO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIGlmICh0aGlzLmlzRm9jdXNUb1Nob3coKSkge1xuICAgICAgdGhpcy5mb2N1c1RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCB0aGlzLnByb3BzLmZvY3VzRGVsYXkpO1xuICAgIH1cbiAgfSxcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLmZpcmVFdmVudHMoJ29uTW91c2VEb3duJywgZSk7XG4gICAgdGhpcy5wcmVDbGlja1RpbWUgPSBEYXRlLm5vdygpO1xuICB9LFxuICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgdGhpcy5maXJlRXZlbnRzKCdvblRvdWNoU3RhcnQnLCBlKTtcbiAgICB0aGlzLnByZVRvdWNoVGltZSA9IERhdGUubm93KCk7XG4gIH0sXG4gIG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKGUpIHtcbiAgICB0aGlzLmZpcmVFdmVudHMoJ29uQmx1cicsIGUpO1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKHRoaXMuaXNCbHVyVG9IaWRlKCkpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIHRoaXMucHJvcHMuYmx1ckRlbGF5KTtcbiAgICB9XG4gIH0sXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmZpcmVFdmVudHMoJ29uQ2xpY2snLCBldmVudCk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzVGltZSkge1xuICAgICAgdmFyIHByZVRpbWUgPSB2b2lkIDA7XG4gICAgICBpZiAodGhpcy5wcmVDbGlja1RpbWUgJiYgdGhpcy5wcmVUb3VjaFRpbWUpIHtcbiAgICAgICAgcHJlVGltZSA9IE1hdGgubWluKHRoaXMucHJlQ2xpY2tUaW1lLCB0aGlzLnByZVRvdWNoVGltZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJlQ2xpY2tUaW1lKSB7XG4gICAgICAgIHByZVRpbWUgPSB0aGlzLnByZUNsaWNrVGltZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmVUb3VjaFRpbWUpIHtcbiAgICAgICAgcHJlVGltZSA9IHRoaXMucHJlVG91Y2hUaW1lO1xuICAgICAgfVxuICAgICAgaWYgKE1hdGguYWJzKHByZVRpbWUgLSB0aGlzLmZvY3VzVGltZSkgPCAyMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZvY3VzVGltZSA9IDA7XG4gICAgfVxuICAgIHRoaXMucHJlQ2xpY2tUaW1lID0gMDtcbiAgICB0aGlzLnByZVRvdWNoVGltZSA9IDA7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgbmV4dFZpc2libGUgPSAhdGhpcy5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgaWYgKHRoaXMuaXNDbGlja1RvSGlkZSgpICYmICFuZXh0VmlzaWJsZSB8fCBuZXh0VmlzaWJsZSAmJiB0aGlzLmlzQ2xpY2tUb1Nob3coKSkge1xuICAgICAgdGhpcy5zZXRQb3B1cFZpc2libGUoIXRoaXMuc3RhdGUucG9wdXBWaXNpYmxlKTtcbiAgICB9XG4gIH0sXG4gIG9uRG9jdW1lbnRDbGljazogZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFzayAmJiAhdGhpcy5wcm9wcy5tYXNrQ2xvc2FibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgcm9vdCA9IGZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBwb3B1cE5vZGUgPSB0aGlzLmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIGlmICghY29udGFpbnMocm9vdCwgdGFyZ2V0KSAmJiAhY29udGFpbnMocG9wdXBOb2RlLCB0YXJnZXQpKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuICBnZXRQb3B1cERvbU5vZGU6IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbXBvbmVudCAmJiB0aGlzLl9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50LmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgZ2V0Um9vdERvbU5vZGU6IGZ1bmN0aW9uIGdldFJvb3REb21Ob2RlKCkge1xuICAgIHJldHVybiBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgfSxcbiAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ246IGZ1bmN0aW9uIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKGFsaWduKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IFtdO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHBvcHVwUGxhY2VtZW50ID0gcHJvcHMucG9wdXBQbGFjZW1lbnQsXG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gcHJvcHMuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcblxuICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgY2xhc3NOYW1lLnB1c2goX2dldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKGJ1aWx0aW5QbGFjZW1lbnRzLCBwcmVmaXhDbHMsIGFsaWduKSk7XG4gICAgfVxuICAgIGlmIChwcm9wcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbikge1xuICAgICAgY2xhc3NOYW1lLnB1c2gocHJvcHMuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZS5qb2luKCcgJyk7XG4gIH0sXG4gIGdldFBvcHVwQWxpZ246IGZ1bmN0aW9uIGdldFBvcHVwQWxpZ24oKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcG9wdXBQbGFjZW1lbnQgPSBwcm9wcy5wb3B1cFBsYWNlbWVudCxcbiAgICAgICAgcG9wdXBBbGlnbiA9IHByb3BzLnBvcHVwQWxpZ24sXG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gcHJvcHMuYnVpbHRpblBsYWNlbWVudHM7XG5cbiAgICBpZiAocG9wdXBQbGFjZW1lbnQgJiYgYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICAgIHJldHVybiBnZXRBbGlnbkZyb21QbGFjZW1lbnQoYnVpbHRpblBsYWNlbWVudHMsIHBvcHVwUGxhY2VtZW50LCBwb3B1cEFsaWduKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvcHVwQWxpZ247XG4gIH0sXG4gIGdldENvbXBvbmVudDogZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIHZhciBtb3VzZVByb3BzID0ge307XG4gICAgaWYgKHRoaXMuaXNNb3VzZUVudGVyVG9TaG93KCkpIHtcbiAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUVudGVyID0gdGhpcy5vblBvcHVwTW91c2VFbnRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5vblBvcHVwTW91c2VMZWF2ZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBQb3B1cCxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogcHJvcHMuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICB2aXNpYmxlOiBzdGF0ZS5wb3B1cFZpc2libGUsXG4gICAgICAgIGNsYXNzTmFtZTogcHJvcHMucG9wdXBDbGFzc05hbWUsXG4gICAgICAgIGFjdGlvbjogcHJvcHMuYWN0aW9uLFxuICAgICAgICBhbGlnbjogdGhpcy5nZXRQb3B1cEFsaWduKCksXG4gICAgICAgIG9uQWxpZ246IHByb3BzLm9uUG9wdXBBbGlnbixcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9wcy5wb3B1cEFuaW1hdGlvbixcbiAgICAgICAgZ2V0Q2xhc3NOYW1lRnJvbUFsaWduOiB0aGlzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduXG4gICAgICB9LCBtb3VzZVByb3BzLCB7XG4gICAgICAgIGdldFJvb3REb21Ob2RlOiB0aGlzLmdldFJvb3REb21Ob2RlLFxuICAgICAgICBzdHlsZTogcHJvcHMucG9wdXBTdHlsZSxcbiAgICAgICAgbWFzazogcHJvcHMubWFzayxcbiAgICAgICAgekluZGV4OiBwcm9wcy56SW5kZXgsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBwcm9wcy5wb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgICBtYXNrQW5pbWF0aW9uOiBwcm9wcy5tYXNrQW5pbWF0aW9uLFxuICAgICAgICBtYXNrVHJhbnNpdGlvbk5hbWU6IHByb3BzLm1hc2tUcmFuc2l0aW9uTmFtZVxuICAgICAgfSksXG4gICAgICB0eXBlb2YgcHJvcHMucG9wdXAgPT09ICdmdW5jdGlvbicgPyBwcm9wcy5wb3B1cCgpIDogcHJvcHMucG9wdXBcbiAgICApO1xuICB9LFxuICBzZXRQb3B1cFZpc2libGU6IGZ1bmN0aW9uIHNldFBvcHVwVmlzaWJsZShwb3B1cFZpc2libGUpIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSAhPT0gcG9wdXBWaXNpYmxlKSB7XG4gICAgICBpZiAoISgncG9wdXBWaXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMub25Qb3B1cFZpc2libGVDaGFuZ2UocG9wdXBWaXNpYmxlKTtcbiAgICB9XG4gIH0sXG4gIGRlbGF5U2V0UG9wdXBWaXNpYmxlOiBmdW5jdGlvbiBkZWxheVNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBkZWxheVMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBkZWxheSA9IGRlbGF5UyAqIDEwMDA7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUpO1xuICAgICAgICBfdGhpczIuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUpO1xuICAgIH1cbiAgfSxcbiAgY2xlYXJEZWxheVRpbWVyOiBmdW5jdGlvbiBjbGVhckRlbGF5VGltZXIoKSB7XG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgY2xlYXJPdXRzaWRlSGFuZGxlcjogZnVuY3Rpb24gY2xlYXJPdXRzaWRlSGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5jbGlja091dHNpZGVIYW5kbGVyKSB7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICB9LFxuICBjcmVhdGVUd29DaGFpbnM6IGZ1bmN0aW9uIGNyZWF0ZVR3b0NoYWlucyhldmVudCkge1xuICAgIHZhciBjaGlsZFByb3MgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGNoaWxkUHJvc1tldmVudF0gJiYgcHJvcHNbZXZlbnRdKSB7XG4gICAgICByZXR1cm4gdGhpc1snZmlyZScgKyBldmVudF07XG4gICAgfVxuICAgIHJldHVybiBjaGlsZFByb3NbZXZlbnRdIHx8IHByb3BzW2V2ZW50XTtcbiAgfSxcbiAgaXNDbGlja1RvU2hvdzogZnVuY3Rpb24gaXNDbGlja1RvU2hvdygpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzLmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wcy5zaG93QWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICB9LFxuICBpc0NsaWNrVG9IaWRlOiBmdW5jdGlvbiBpc0NsaWNrVG9IaWRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzMi5hY3Rpb24sXG4gICAgICAgIGhpZGVBY3Rpb24gPSBfcHJvcHMyLmhpZGVBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTE7XG4gIH0sXG4gIGlzTW91c2VFbnRlclRvU2hvdzogZnVuY3Rpb24gaXNNb3VzZUVudGVyVG9TaG93KCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzMy5hY3Rpb24sXG4gICAgICAgIHNob3dBY3Rpb24gPSBfcHJvcHMzLnNob3dBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignbW91c2VFbnRlcicpICE9PSAtMTtcbiAgfSxcbiAgaXNNb3VzZUxlYXZlVG9IaWRlOiBmdW5jdGlvbiBpc01vdXNlTGVhdmVUb0hpZGUoKSB7XG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM0LmFjdGlvbixcbiAgICAgICAgaGlkZUFjdGlvbiA9IF9wcm9wczQuaGlkZUFjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignaG92ZXInKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdtb3VzZUxlYXZlJykgIT09IC0xO1xuICB9LFxuICBpc0ZvY3VzVG9TaG93OiBmdW5jdGlvbiBpc0ZvY3VzVG9TaG93KCkge1xuICAgIHZhciBfcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzNS5hY3Rpb24sXG4gICAgICAgIHNob3dBY3Rpb24gPSBfcHJvcHM1LnNob3dBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTE7XG4gIH0sXG4gIGlzQmx1clRvSGlkZTogZnVuY3Rpb24gaXNCbHVyVG9IaWRlKCkge1xuICAgIHZhciBfcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzNi5hY3Rpb24sXG4gICAgICAgIGhpZGVBY3Rpb24gPSBfcHJvcHM2LmhpZGVBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignYmx1cicpICE9PSAtMTtcbiAgfSxcbiAgZm9yY2VQb3B1cEFsaWduOiBmdW5jdGlvbiBmb3JjZVBvcHVwQWxpZ24oKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlICYmIHRoaXMuX2NvbXBvbmVudCAmJiB0aGlzLl9jb21wb25lbnQuYWxpZ25JbnN0YW5jZSkge1xuICAgICAgdGhpcy5fY29tcG9uZW50LmFsaWduSW5zdGFuY2UuZm9yY2VBbGlnbigpO1xuICAgIH1cbiAgfSxcbiAgZmlyZUV2ZW50czogZnVuY3Rpb24gZmlyZUV2ZW50cyh0eXBlLCBlKSB7XG4gICAgdmFyIGNoaWxkQ2FsbGJhY2sgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzW3R5cGVdO1xuICAgIGlmIChjaGlsZENhbGxiYWNrKSB7XG4gICAgICBjaGlsZENhbGxiYWNrKGUpO1xuICAgIH1cbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLnByb3BzW3R5cGVdO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soZSk7XG4gICAgfVxuICB9LFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRQb3B1cFZpc2libGUoZmFsc2UpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgIHZhciBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHZhciBuZXdDaGlsZFByb3BzID0ge307XG4gICAgaWYgKHRoaXMuaXNDbGlja1RvSGlkZSgpIHx8IHRoaXMuaXNDbGlja1RvU2hvdygpKSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2s7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bjtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Ub3VjaFN0YXJ0ID0gdGhpcy5vblRvdWNoU3RhcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25DbGljayA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkNsaWNrJyk7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VEb3duID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VEb3duJyk7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uVG91Y2hTdGFydCA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvblRvdWNoU3RhcnQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNb3VzZUVudGVyVG9TaG93KCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gdGhpcy5vbk1vdXNlRW50ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VFbnRlcicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc01vdXNlTGVhdmVUb0hpZGUoKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTGVhdmUgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZUxlYXZlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRm9jdXNUb1Nob3coKSB8fCB0aGlzLmlzQmx1clRvSGlkZSgpKSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXM7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uQmx1ciA9IHRoaXMub25CbHVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uRm9jdXMgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Gb2N1cycpO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25CbHVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3Q2hpbGRQcm9wcyk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUcmlnZ2VyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFkZEV2ZW50TGlzdGVuZXJXcmFwO1xuXG52YXIgX2FkZERvbUV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdhZGQtZG9tLWV2ZW50LWxpc3RlbmVyJyk7XG5cbnZhciBfYWRkRG9tRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGREb21FdmVudExpc3RlbmVyKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV3JhcCh0YXJnZXQsIGV2ZW50VHlwZSwgY2IpIHtcbiAgLyogZXNsaW50IGNhbWVsY2FzZTogMiAqL1xuICB2YXIgY2FsbGJhY2sgPSBfcmVhY3REb20yWydkZWZhdWx0J10udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIF9yZWFjdERvbTJbJ2RlZmF1bHQnXS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYiwgZSk7XG4gIH0gOiBjYjtcbiAgcmV0dXJuICgwLCBfYWRkRG9tRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXSkodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBbGlnbiBmcm9tICdyYy1hbGlnbic7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCBQb3B1cElubmVyIGZyb20gJy4vUG9wdXBJbm5lcic7XG5pbXBvcnQgTGF6eVJlbmRlckJveCBmcm9tICcuL0xhenlSZW5kZXJCb3gnO1xuaW1wb3J0IHsgc2F2ZVJlZiB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgUG9wdXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9wdXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcHVwKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHVwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQb3B1cC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvcHVwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIF90aGlzLnNhdmVQb3B1cFJlZiA9IHNhdmVSZWYuYmluZChfdGhpcywgJ3BvcHVwSW5zdGFuY2UnKTtcbiAgICBfdGhpcy5zYXZlQWxpZ25SZWYgPSBzYXZlUmVmLmJpbmQoX3RoaXMsICdhbGlnbkluc3RhbmNlJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcHVwLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnJvb3ROb2RlID0gdGhpcy5nZXRQb3B1cERvbU5vZGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQb3B1cERvbU5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3B1cERvbU5vZGUoKSB7XG4gICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5wb3B1cEluc3RhbmNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRNYXNrVHJhbnNpdGlvbk5hbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNYXNrVHJhbnNpdGlvbk5hbWUoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lO1xuICAgICAgdmFyIGFuaW1hdGlvbiA9IHByb3BzLm1hc2tBbmltYXRpb247XG4gICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIGFuaW1hdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIGFuaW1hdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUcmFuc2l0aW9uTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLScgKyBwcm9wcy5hbmltYXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2xhc3NOYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKGN1cnJlbnRBbGlnbkNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucHJlZml4Q2xzICsgJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgKyAnICcgKyBjdXJyZW50QWxpZ25DbGFzc05hbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UG9wdXBFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBFbGVtZW50KCkge1xuICAgICAgdmFyIHNhdmVQb3B1cFJlZiA9IHRoaXMuc2F2ZVBvcHVwUmVmLFxuICAgICAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgICAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZSA9IHByb3BzLmRlc3Ryb3lQb3B1cE9uSGlkZTtcblxuICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKHRoaXMuY3VycmVudEFsaWduQ2xhc3NOYW1lIHx8IHByb3BzLmdldENsYXNzTmFtZUZyb21BbGlnbihhbGlnbikpO1xuICAgICAgdmFyIGhpZGRlbkNsYXNzTmFtZSA9IHByZWZpeENscyArICctaGlkZGVuJztcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSA9IG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgbmV3U3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHRoaXMuZ2V0WkluZGV4U3R5bGUoKSk7XG4gICAgICB2YXIgcG9wdXBJbm5lclByb3BzID0ge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIHJlZjogc2F2ZVBvcHVwUmVmLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHByb3BzLm9uTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgIHN0eWxlOiBuZXdTdHlsZVxuICAgICAgfTtcbiAgICAgIGlmIChkZXN0cm95UG9wdXBPbkhpZGUpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQW5pbWF0ZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnQ6ICcnLFxuICAgICAgICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiB0aGlzLmdldFRyYW5zaXRpb25OYW1lKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpc2libGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQWxpZ24sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRUYXJnZXQsXG4gICAgICAgICAgICAgIGtleTogJ3BvcHVwJyxcbiAgICAgICAgICAgICAgcmVmOiB0aGlzLnNhdmVBbGlnblJlZixcbiAgICAgICAgICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICAgICAgICBvbkFsaWduOiB0aGlzLm9uQWxpZ25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBQb3B1cElubmVyLFxuICAgICAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9LCBwb3B1cElubmVyUHJvcHMpLFxuICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQW5pbWF0ZSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbXBvbmVudDogJycsXG4gICAgICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHRoaXMuZ2V0VHJhbnNpdGlvbk5hbWUoKSxcbiAgICAgICAgICBzaG93UHJvcDogJ3hWaXNpYmxlJ1xuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEFsaWduLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRUYXJnZXQsXG4gICAgICAgICAgICBrZXk6ICdwb3B1cCcsXG4gICAgICAgICAgICByZWY6IHRoaXMuc2F2ZUFsaWduUmVmLFxuICAgICAgICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIHhWaXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICAgICAgY2hpbGRyZW5Qcm9wczogeyB2aXNpYmxlOiAneFZpc2libGUnIH0sXG4gICAgICAgICAgICBkaXNhYmxlZDogIXZpc2libGUsXG4gICAgICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgICAgICBvbkFsaWduOiB0aGlzLm9uQWxpZ25cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBQb3B1cElubmVyLFxuICAgICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBoaWRkZW5DbGFzc05hbWU6IGhpZGRlbkNsYXNzTmFtZVxuICAgICAgICAgICAgfSwgcG9wdXBJbm5lclByb3BzKSxcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFpJbmRleFN0eWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0WkluZGV4U3R5bGUoKSB7XG4gICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAocHJvcHMuekluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3R5bGUuekluZGV4ID0gcHJvcHMuekluZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE1hc2tFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWFza0VsZW1lbnQoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIG1hc2tFbGVtZW50ID0gdm9pZCAwO1xuICAgICAgaWYgKHByb3BzLm1hc2spIHtcbiAgICAgICAgdmFyIG1hc2tUcmFuc2l0aW9uID0gdGhpcy5nZXRNYXNrVHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgICAgbWFza0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KExhenlSZW5kZXJCb3gsIHtcbiAgICAgICAgICBzdHlsZTogdGhpcy5nZXRaSW5kZXhTdHlsZSgpLFxuICAgICAgICAgIGtleTogJ21hc2snLFxuICAgICAgICAgIGNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tYXNrJyxcbiAgICAgICAgICBoaWRkZW5DbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctbWFzay1oaWRkZW4nLFxuICAgICAgICAgIHZpc2libGU6IHByb3BzLnZpc2libGVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtYXNrVHJhbnNpdGlvbikge1xuICAgICAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEFuaW1hdGUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogJ21hc2snLFxuICAgICAgICAgICAgICBzaG93UHJvcDogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6ICcnLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXNrRWxlbWVudFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXNrRWxlbWVudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuZ2V0TWFza0VsZW1lbnQoKSxcbiAgICAgICAgdGhpcy5nZXRQb3B1cEVsZW1lbnQoKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9wdXA7XG59KENvbXBvbmVudCk7XG5cblBvcHVwLnByb3BUeXBlcyA9IHtcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBnZXRDbGFzc05hbWVGcm9tQWxpZ246IFByb3BUeXBlcy5mdW5jLFxuICBvbkFsaWduOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0Um9vdERvbU5vZGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBhbGlnbjogUHJvcFR5cGVzLmFueSxcbiAgZGVzdHJveVBvcHVwT25IaWRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgdGhpcy5vbkFsaWduID0gZnVuY3Rpb24gKHBvcHVwRG9tTm9kZSwgYWxpZ24pIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczIucHJvcHM7XG4gICAgdmFyIGN1cnJlbnRBbGlnbkNsYXNzTmFtZSA9IHByb3BzLmdldENsYXNzTmFtZUZyb21BbGlnbihhbGlnbik7XG4gICAgLy8gRklYOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvaXNzdWVzLzU2XG4gICAgLy8gRklYOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3Rvb2x0aXAvaXNzdWVzLzc5XG4gICAgaWYgKF90aGlzMi5jdXJyZW50QWxpZ25DbGFzc05hbWUgIT09IGN1cnJlbnRBbGlnbkNsYXNzTmFtZSkge1xuICAgICAgX3RoaXMyLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSA9IGN1cnJlbnRBbGlnbkNsYXNzTmFtZTtcbiAgICAgIHBvcHVwRG9tTm9kZS5jbGFzc05hbWUgPSBfdGhpczIuZ2V0Q2xhc3NOYW1lKGN1cnJlbnRBbGlnbkNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHByb3BzLm9uQWxpZ24ocG9wdXBEb21Ob2RlLCBhbGlnbik7XG4gIH07XG5cbiAgdGhpcy5nZXRUYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMi5wcm9wcy5nZXRSb290RG9tTm9kZSgpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExhenlSZW5kZXJCb3ggZnJvbSAnLi9MYXp5UmVuZGVyQm94JztcblxudmFyIFBvcHVwSW5uZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9wdXBJbm5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9wdXBJbm5lcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9wdXBJbm5lcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBvcHVwSW5uZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQb3B1cElubmVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUG9wdXBJbm5lciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICAgIGlmICghcHJvcHMudmlzaWJsZSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgcHJvcHMuaGlkZGVuQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBwcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiBwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgTGF6eVJlbmRlckJveCxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1jb250ZW50JywgdmlzaWJsZTogcHJvcHMudmlzaWJsZSB9LFxuICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBvcHVwSW5uZXI7XG59KENvbXBvbmVudCk7XG5cblBvcHVwSW5uZXIucHJvcFR5cGVzID0ge1xuICBoaWRkZW5DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cElubmVyOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIExhenlSZW5kZXJCb3ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGF6eVJlbmRlckJveCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGF6eVJlbmRlckJveCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eVJlbmRlckJveCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExhenlSZW5kZXJCb3guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMYXp5UmVuZGVyQm94KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGF6eVJlbmRlckJveCwgW3tcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICByZXR1cm4gbmV4dFByb3BzLmhpZGRlbkNsYXNzTmFtZSB8fCBuZXh0UHJvcHMudmlzaWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBoaWRkZW5DbGFzc05hbWUgPSBfcHJvcHMuaGlkZGVuQ2xhc3NOYW1lLFxuICAgICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnaGlkZGVuQ2xhc3NOYW1lJywgJ3Zpc2libGUnXSk7XG5cbiAgICAgIGlmIChoaWRkZW5DbGFzc05hbWUgfHwgUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pID4gMSkge1xuICAgICAgICBpZiAoIXZpc2libGUgJiYgaGlkZGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgcHJvcHMuY2xhc3NOYW1lICs9ICcgJyArIGhpZGRlbkNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgcHJvcHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seShwcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExhenlSZW5kZXJCb3g7XG59KENvbXBvbmVudCk7XG5cbkxhenlSZW5kZXJCb3gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZGVuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExhenlSZW5kZXJCb3g7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmZ1bmN0aW9uIGlzUG9pbnRzRXEoYTEsIGEyKSB7XG4gIHJldHVybiBhMVswXSA9PT0gYTJbMF0gJiYgYTFbMV0gPT09IGEyWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpZ25Gcm9tUGxhY2VtZW50KGJ1aWx0aW5QbGFjZW1lbnRzLCBwbGFjZW1lbnRTdHIsIGFsaWduKSB7XG4gIHZhciBiYXNlQWxpZ24gPSBidWlsdGluUGxhY2VtZW50c1twbGFjZW1lbnRTdHJdIHx8IHt9O1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGJhc2VBbGlnbiwgYWxpZ24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24oYnVpbHRpblBsYWNlbWVudHMsIHByZWZpeENscywgYWxpZ24pIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgZm9yICh2YXIgcGxhY2VtZW50IGluIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgaWYgKGJ1aWx0aW5QbGFjZW1lbnRzLmhhc093blByb3BlcnR5KHBsYWNlbWVudCkpIHtcbiAgICAgIGlmIChpc1BvaW50c0VxKGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudF0ucG9pbnRzLCBwb2ludHMpKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXhDbHMgKyAnLXBsYWNlbWVudC0nICsgcGxhY2VtZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUmVmKG5hbWUsIGNvbXBvbmVudCkge1xuICB0aGlzW25hbWVdID0gY29tcG9uZW50O1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGdldENvbnRhaW5lclJlbmRlck1peGluO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGRlZmF1bHRHZXRDb250YWluZXIoKSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZXRDb250YWluZXJSZW5kZXJNaXhpbihjb25maWcpIHtcbiAgdmFyIF9jb25maWckYXV0b01vdW50ID0gY29uZmlnLmF1dG9Nb3VudCxcbiAgICAgIGF1dG9Nb3VudCA9IF9jb25maWckYXV0b01vdW50ID09PSB1bmRlZmluZWQgPyB0cnVlIDogX2NvbmZpZyRhdXRvTW91bnQsXG4gICAgICBfY29uZmlnJGF1dG9EZXN0cm95ID0gY29uZmlnLmF1dG9EZXN0cm95LFxuICAgICAgYXV0b0Rlc3Ryb3kgPSBfY29uZmlnJGF1dG9EZXN0cm95ID09PSB1bmRlZmluZWQgPyB0cnVlIDogX2NvbmZpZyRhdXRvRGVzdHJveSxcbiAgICAgIGlzVmlzaWJsZSA9IGNvbmZpZy5pc1Zpc2libGUsXG4gICAgICBpc0ZvcmNlUmVuZGVyID0gY29uZmlnLmlzRm9yY2VSZW5kZXIsXG4gICAgICBnZXRDb21wb25lbnQgPSBjb25maWcuZ2V0Q29tcG9uZW50LFxuICAgICAgX2NvbmZpZyRnZXRDb250YWluZXIgPSBjb25maWcuZ2V0Q29udGFpbmVyLFxuICAgICAgZ2V0Q29udGFpbmVyID0gX2NvbmZpZyRnZXRDb250YWluZXIgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRHZXRDb250YWluZXIgOiBfY29uZmlnJGdldENvbnRhaW5lcjtcblxuXG4gIHZhciBtaXhpbiA9IHZvaWQgMDtcblxuICBmdW5jdGlvbiBfcmVuZGVyQ29tcG9uZW50KGluc3RhbmNlLCBjb21wb25lbnRBcmcsIHJlYWR5KSB7XG4gICAgaWYgKCFpc1Zpc2libGUgfHwgaW5zdGFuY2UuX2NvbXBvbmVudCB8fCBpc1Zpc2libGUoaW5zdGFuY2UpIHx8IGlzRm9yY2VSZW5kZXIgJiYgaXNGb3JjZVJlbmRlcihpbnN0YW5jZSkpIHtcbiAgICAgIGlmICghaW5zdGFuY2UuX2NvbnRhaW5lcikge1xuICAgICAgICBpbnN0YW5jZS5fY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBjb21wb25lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoaW5zdGFuY2UuZ2V0Q29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudCA9IGluc3RhbmNlLmdldENvbXBvbmVudChjb21wb25lbnRBcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KGluc3RhbmNlLCBjb21wb25lbnRBcmcpO1xuICAgICAgfVxuICAgICAgX3JlYWN0RG9tMlsnZGVmYXVsdCddLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKGluc3RhbmNlLCBjb21wb25lbnQsIGluc3RhbmNlLl9jb250YWluZXIsIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICBpbnN0YW5jZS5fY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgICAgcmVhZHkuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF1dG9Nb3VudCkge1xuICAgIG1peGluID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgbWl4aW4sIHtcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgX3JlbmRlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgX3JlbmRlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICghYXV0b01vdW50IHx8ICFhdXRvRGVzdHJveSkge1xuICAgIG1peGluID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgbWl4aW4sIHtcbiAgICAgIHJlbmRlckNvbXBvbmVudDogZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudEFyZywgcmVhZHkpIHtcbiAgICAgICAgX3JlbmRlckNvbXBvbmVudCh0aGlzLCBjb21wb25lbnRBcmcsIHJlYWR5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW1vdmVDb250YWluZXIoaW5zdGFuY2UpIHtcbiAgICBpZiAoaW5zdGFuY2UuX2NvbnRhaW5lcikge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGluc3RhbmNlLl9jb250YWluZXI7XG4gICAgICBfcmVhY3REb20yWydkZWZhdWx0J10udW5tb3VudENvbXBvbmVudEF0Tm9kZShjb250YWluZXIpO1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIGluc3RhbmNlLl9jb250YWluZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhdXRvRGVzdHJveSkge1xuICAgIG1peGluID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgbWl4aW4sIHtcbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgX3JlbW92ZUNvbnRhaW5lcih0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBtaXhpbiA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIG1peGluLCB7XG4gICAgICByZW1vdmVDb250YWluZXI6IGZ1bmN0aW9uIHJlbW92ZUNvbnRhaW5lcigpIHtcbiAgICAgICAgX3JlbW92ZUNvbnRhaW5lcih0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtaXhpbjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBDb21ib2JveCBmcm9tICcuL0NvbWJvYm94JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gXCJjcmVhdGUtcmVhY3QtY2xhc3NcIjtcblxuZnVuY3Rpb24gbm9vcCgpIHtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKGxlbmd0aCwgZGlzYWJsZWRPcHRpb25zLCBoaWRlRGlzYWJsZWRPcHRpb25zKSB7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IgKGxldCB2YWx1ZSA9IDA7IHZhbHVlIDwgbGVuZ3RoOyB2YWx1ZSsrKSB7XG4gICAgaWYgKCFkaXNhYmxlZE9wdGlvbnMgfHwgZGlzYWJsZWRPcHRpb25zLmluZGV4T2YodmFsdWUpIDwgMCB8fCAhaGlkZURpc2FibGVkT3B0aW9ucykge1xuICAgICAgYXJyLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5jb25zdCBQYW5lbCA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBjbGVhclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRPcGVuVmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkSG91cnM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkTWludXRlczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWRTZWNvbmRzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoaWRlRGlzYWJsZWRPcHRpb25zOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Fc2M6IFByb3BUeXBlcy5mdW5jLFxuICAgIGFsbG93RW1wdHk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dIb3VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93U2Vjb25kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93QU1QTTogUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeENsczogJ3JjLXRpbWUtcGlja2VyLXBhbmVsJyxcbiAgICAgIG9uQ2hhbmdlOiBub29wLFxuICAgICAgb25DbGVhcjogbm9vcCxcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWU6IG1vbWVudCgpLFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgIHNlbGVjdGlvblJhbmdlOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXh0UHJvcHMudmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgb25DaGFuZ2UobmV3VmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpO1xuICB9LFxuXG4gIG9uQ2xlYXIoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsZWFyKCk7XG4gIH0sXG5cbiAgb25DdXJyZW50U2VsZWN0UGFuZWxDaGFuZ2UoY3VycmVudFNlbGVjdFBhbmVsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTZWxlY3RQYW5lbCB9KTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybWF0dGVyLCBwcmVmaXhDbHMsIGNsYXNzTmFtZSwgcGxhY2Vob2xkZXIsIGRpc2FibGVkSG91cnMsIGRpc2FibGVkTWludXRlcyxcbiAgICAgIGRpc2FibGVkU2Vjb25kcywgaGlkZURpc2FibGVkT3B0aW9ucywgYWxsb3dFbXB0eSwgc2hvd0hvdXIsIHNob3dTZWNvbmQsIHNob3dBTVBNLFxuICAgICAgZm9ybWF0LCBkZWZhdWx0T3BlblZhbHVlLCBjbGVhclRleHQsIG9uRXNjLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLCBjdXJyZW50U2VsZWN0UGFuZWwsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZGlzYWJsZWRIb3VyT3B0aW9ucyA9IGRpc2FibGVkSG91cnMoKTtcbiAgICBjb25zdCBkaXNhYmxlZE1pbnV0ZU9wdGlvbnMgPSBkaXNhYmxlZE1pbnV0ZXModmFsdWUgPyB2YWx1ZS5ob3VyKCkgOiBudWxsKTtcbiAgICBjb25zdCBkaXNhYmxlZFNlY29uZE9wdGlvbnMgPSBkaXNhYmxlZFNlY29uZHModmFsdWUgPyB2YWx1ZS5ob3VyKCkgOiBudWxsLFxuICAgICAgdmFsdWUgPyB2YWx1ZS5taW51dGUoKSA6IG51bGwpO1xuICAgIGNvbnN0IGhvdXJPcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKDI0LCBkaXNhYmxlZEhvdXJPcHRpb25zLCBoaWRlRGlzYWJsZWRPcHRpb25zKTtcbiAgICBjb25zdCBtaW51dGVPcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKDYwLCBkaXNhYmxlZE1pbnV0ZU9wdGlvbnMsIGhpZGVEaXNhYmxlZE9wdGlvbnMpO1xuICAgIGNvbnN0IHNlY29uZE9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoNjAsIGRpc2FibGVkU2Vjb25kT3B0aW9ucywgaGlkZURpc2FibGVkT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30taW5uZXIgJHtjbGFzc05hbWV9YH0+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBjbGVhclRleHQ9e2NsZWFyVGV4dH1cbiAgICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeENsc31cbiAgICAgICAgICBkZWZhdWx0T3BlblZhbHVlPXtkZWZhdWx0T3BlblZhbHVlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjdXJyZW50U2VsZWN0UGFuZWw9e2N1cnJlbnRTZWxlY3RQYW5lbH1cbiAgICAgICAgICBvbkVzYz17b25Fc2N9XG4gICAgICAgICAgZm9ybWF0PXtmb3JtYXR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIGhvdXJPcHRpb25zPXtob3VyT3B0aW9uc31cbiAgICAgICAgICBtaW51dGVPcHRpb25zPXttaW51dGVPcHRpb25zfVxuICAgICAgICAgIHNlY29uZE9wdGlvbnM9e3NlY29uZE9wdGlvbnN9XG4gICAgICAgICAgZGlzYWJsZWRIb3Vycz17ZGlzYWJsZWRIb3Vyc31cbiAgICAgICAgICBkaXNhYmxlZE1pbnV0ZXM9e2Rpc2FibGVkTWludXRlc31cbiAgICAgICAgICBkaXNhYmxlZFNlY29uZHM9e2Rpc2FibGVkU2Vjb25kc31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBvbkNsZWFyPXt0aGlzLm9uQ2xlYXJ9XG4gICAgICAgICAgYWxsb3dFbXB0eT17YWxsb3dFbXB0eX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbWJvYm94XG4gICAgICAgICAgZm9ybWF0dGVyPXtmb3JtYXR0ZXJ9XG4gICAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXhDbHN9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGRlZmF1bHRPcGVuVmFsdWU9e2RlZmF1bHRPcGVuVmFsdWV9XG4gICAgICAgICAgZm9ybWF0PXtmb3JtYXR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgc2hvd0FNUE09e3Nob3dBTVBNfVxuICAgICAgICAgIHNob3dIb3VyPXtzaG93SG91cn1cbiAgICAgICAgICBzaG93U2Vjb25kPXtzaG93U2Vjb25kfVxuICAgICAgICAgIGhvdXJPcHRpb25zPXtob3VyT3B0aW9uc31cbiAgICAgICAgICBtaW51dGVPcHRpb25zPXttaW51dGVPcHRpb25zfVxuICAgICAgICAgIHNlY29uZE9wdGlvbnM9e3NlY29uZE9wdGlvbnN9XG4gICAgICAgICAgZGlzYWJsZWRIb3Vycz17ZGlzYWJsZWRIb3Vyc31cbiAgICAgICAgICBkaXNhYmxlZE1pbnV0ZXM9e2Rpc2FibGVkTWludXRlc31cbiAgICAgICAgICBkaXNhYmxlZFNlY29uZHM9e2Rpc2FibGVkU2Vjb25kc31cbiAgICAgICAgICBvbkN1cnJlbnRTZWxlY3RQYW5lbENoYW5nZT17dGhpcy5vbkN1cnJlbnRTZWxlY3RQYW5lbENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUGFuZWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSBcImNyZWF0ZS1yZWFjdC1jbGFzc1wiO1xuXG5jb25zdCBIZWFkZXIgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZERhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsZWFyVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBob3VyT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIG1pbnV0ZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzZWNvbmRPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZGlzYWJsZWRIb3VyczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWRNaW51dGVzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZFNlY29uZHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVzYzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWxsb3dFbXB0eTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdE9wZW5WYWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjdXJyZW50U2VsZWN0UGFuZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgc3RyOiB2YWx1ZSAmJiB2YWx1ZS5mb3JtYXQoZm9ybWF0KSB8fCAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBmb3JtYXQgfSA9IG5leHRQcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0cjogdmFsdWUgJiYgdmFsdWUuZm9ybWF0KGZvcm1hdCkgfHwgJycsXG4gICAgICBpbnZhbGlkOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcblxuICBvbklucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3Qgc3RyID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RyLFxuICAgIH0pO1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1hdCwgaG91ck9wdGlvbnMsIG1pbnV0ZU9wdGlvbnMsIHNlY29uZE9wdGlvbnMsXG4gICAgICBkaXNhYmxlZEhvdXJzLCBkaXNhYmxlZE1pbnV0ZXMsXG4gICAgICBkaXNhYmxlZFNlY29uZHMsIG9uQ2hhbmdlLCBhbGxvd0VtcHR5LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHN0cikge1xuICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0UHJvdG9WYWx1ZSgpLmNsb25lKCk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBtb21lbnQoc3RyLCBmb3JtYXQsIHRydWUpO1xuICAgICAgaWYgKCFwYXJzZWQuaXNWYWxpZCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YWx1ZS5ob3VyKHBhcnNlZC5ob3VyKCkpLm1pbnV0ZShwYXJzZWQubWludXRlKCkpLnNlY29uZChwYXJzZWQuc2Vjb25kKCkpO1xuXG4gICAgICAvLyBpZiB0aW1lIHZhbHVlIG5vdCBhbGxvd2VkLCByZXNwb25zZSB3YXJuaW5nLlxuICAgICAgaWYgKFxuICAgICAgICBob3VyT3B0aW9ucy5pbmRleE9mKHZhbHVlLmhvdXIoKSkgPCAwIHx8XG4gICAgICAgIG1pbnV0ZU9wdGlvbnMuaW5kZXhPZih2YWx1ZS5taW51dGUoKSkgPCAwIHx8XG4gICAgICAgIHNlY29uZE9wdGlvbnMuaW5kZXhPZih2YWx1ZS5zZWNvbmQoKSkgPCAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW52YWxpZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGltZSB2YWx1ZSBpcyBkaXNhYmxlZCwgcmVzcG9uc2Ugd2FybmluZy5cbiAgICAgIGNvbnN0IGRpc2FibGVkSG91ck9wdGlvbnMgPSBkaXNhYmxlZEhvdXJzKCk7XG4gICAgICBjb25zdCBkaXNhYmxlZE1pbnV0ZU9wdGlvbnMgPSBkaXNhYmxlZE1pbnV0ZXModmFsdWUuaG91cigpKTtcbiAgICAgIGNvbnN0IGRpc2FibGVkU2Vjb25kT3B0aW9ucyA9IGRpc2FibGVkU2Vjb25kcyh2YWx1ZS5ob3VyKCksIHZhbHVlLm1pbnV0ZSgpKTtcbiAgICAgIGlmIChcbiAgICAgICAgKGRpc2FibGVkSG91ck9wdGlvbnMgJiYgZGlzYWJsZWRIb3VyT3B0aW9ucy5pbmRleE9mKHZhbHVlLmhvdXIoKSkgPj0gMCkgfHxcbiAgICAgICAgKGRpc2FibGVkTWludXRlT3B0aW9ucyAmJiBkaXNhYmxlZE1pbnV0ZU9wdGlvbnMuaW5kZXhPZih2YWx1ZS5taW51dGUoKSkgPj0gMCkgfHxcbiAgICAgICAgKGRpc2FibGVkU2Vjb25kT3B0aW9ucyAmJiBkaXNhYmxlZFNlY29uZE9wdGlvbnMuaW5kZXhPZih2YWx1ZS5zZWNvbmQoKSkgPj0gMClcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAob3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgb3JpZ2luYWxWYWx1ZS5ob3VyKCkgIT09IHZhbHVlLmhvdXIoKSB8fFxuICAgICAgICAgIG9yaWdpbmFsVmFsdWUubWludXRlKCkgIT09IHZhbHVlLm1pbnV0ZSgpIHx8XG4gICAgICAgICAgb3JpZ2luYWxWYWx1ZS5zZWNvbmQoKSAhPT0gdmFsdWUuc2Vjb25kKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8ga2VlcCBvdGhlciBmaWVsZHMgZm9yIHJjLWNhbGVuZGFyXG4gICAgICAgICAgY29uc3QgY2hhbmdlZFZhbHVlID0gb3JpZ2luYWxWYWx1ZS5jbG9uZSgpO1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZS5ob3VyKHZhbHVlLmhvdXIoKSk7XG4gICAgICAgICAgY2hhbmdlZFZhbHVlLm1pbnV0ZSh2YWx1ZS5taW51dGUoKSk7XG4gICAgICAgICAgY2hhbmdlZFZhbHVlLnNlY29uZCh2YWx1ZS5zZWNvbmQoKSk7XG4gICAgICAgICAgb25DaGFuZ2UoY2hhbmdlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcmlnaW5hbFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhbGxvd0VtcHR5KSB7XG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIHRoaXMucHJvcHMub25Fc2MoKTtcbiAgICB9XG4gIH0sXG5cbiAgb25DbGVhcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RyOiAnJyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2xlYXIoKTtcbiAgfSxcblxuICBnZXRDbGVhckJ1dHRvbigpIHtcbiAgICBjb25zdCB7IHByZWZpeENscywgYWxsb3dFbXB0eSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWFsbG93RW1wdHkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKDxhXG4gICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tY2xlYXItYnRuYH1cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgdGl0bGU9e3RoaXMucHJvcHMuY2xlYXJUZXh0fVxuICAgICAgb25Nb3VzZURvd249e3RoaXMub25DbGVhcn1cbiAgICAvPik7XG4gIH0sXG5cbiAgZ2V0UHJvdG9WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRPcGVuVmFsdWU7XG4gIH0sXG5cbiAgZ2V0SW5wdXQoKSB7XG4gICAgY29uc3QgeyBwcmVmaXhDbHMsIHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaW52YWxpZCwgc3RyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGludmFsaWRDbGFzcyA9IGludmFsaWQgPyBgJHtwcmVmaXhDbHN9LWlucHV0LWludmFsaWRgIDogJyc7XG4gICAgcmV0dXJuICg8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1pbnB1dCAgJHtpbnZhbGlkQ2xhc3N9YH1cbiAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XG4gICAgICB2YWx1ZT17c3RyfVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZX1cbiAgICAvPik7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJlZml4Q2xzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1pbnB1dC13cmFwYH0+XG4gICAgICAgIHt0aGlzLmdldElucHV0KCl9XG4gICAgICAgIHt0aGlzLmdldENsZWFyQnV0dG9uKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vU2VsZWN0JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gXCJjcmVhdGUtcmVhY3QtY2xhc3NcIjtcblxuY29uc3QgcGFkID0gdmFsdWUgPT4gdmFsdWUgPCAxMCA/IGAwJHt2YWx1ZX1gIDogYCR7dmFsdWV9YDtcblxuY29uc3QgZm9ybWF0T3B0aW9uID0gKG9wdGlvbiwgZGlzYWJsZWRPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gcGFkKG9wdGlvbik7XG5cbiAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gIGlmIChkaXNhYmxlZE9wdGlvbnMgJiYgZGlzYWJsZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSA+PSAwKSB7XG4gICAgZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICBkaXNhYmxlZCxcbiAgfTtcbn07XG5cbmNvbnN0IENvbWJvYm94ID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0T3BlblZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd0hvdXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dTZWNvbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGhvdXJPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgbWludXRlT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNlY29uZE9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBkaXNhYmxlZEhvdXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZE1pbnV0ZXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkU2Vjb25kczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DdXJyZW50U2VsZWN0UGFuZWxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgb25JdGVtQ2hhbmdlKHR5cGUsIGl0ZW1WYWx1ZSkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGRlZmF1bHRPcGVuVmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSAodGhpcy5wcm9wcy52YWx1ZSB8fCBkZWZhdWx0T3BlblZhbHVlKS5jbG9uZSgpO1xuXG4gICAgaWYgKHR5cGUgPT09ICdob3VyJykge1xuICAgICAgdmFsdWUuaG91cihpdGVtVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ21pbnV0ZScpIHtcbiAgICAgIHZhbHVlLm1pbnV0ZShpdGVtVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NlY29uZCcpIHtcbiAgICAgIHZhbHVlLnNlY29uZChpdGVtVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhY3R1YWxQZXJpb2QgPSB2YWx1ZS5mb3JtYXQoJ0EnKTtcblxuICAgICAgaWYgKGFjdHVhbFBlcmlvZCAhPT0gaXRlbVZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGhvdXIyNHN0eWxlID0gdmFsdWUuaG91cigpO1xuICAgICAgICBjb25zdCBob3VyMTJzdHlsZSA9IGhvdXIyNHN0eWxlIDwgMTIgPyBob3VyMjRzdHlsZSA6IGhvdXIyNHN0eWxlIC0gMTI7XG5cbiAgICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gJ1BNJykge1xuICAgICAgICAgICAgdmFsdWUuaG91cihob3VyMTJzdHlsZSArIDEyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlLmhvdXIoaG91cjEyc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpO1xuICB9LFxuXG4gIG9uRW50ZXJTZWxlY3RQYW5lbChyYW5nZSkge1xuICAgIHRoaXMucHJvcHMub25DdXJyZW50U2VsZWN0UGFuZWxDaGFuZ2UocmFuZ2UpO1xuICB9LFxuXG4gIGdldEhvdXJTZWxlY3QoaG91cikge1xuICAgIGNvbnN0IHsgcHJlZml4Q2xzLCBzaG93QU1QTSwgZGlzYWJsZWRIb3Vycywgc2hvd0hvdXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFzaG93SG91cikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzYWJsZWRPcHRpb25zID0gZGlzYWJsZWRIb3VycygpO1xuICAgIGxldCBob3VyT3B0aW9ucyA9IHRoaXMucHJvcHMuaG91ck9wdGlvbnM7XG4gICAgbGV0IGZvcm1hdHRlZE9wdGlvbnMgPSBob3VyT3B0aW9ucy5tYXAob3B0aW9uID0+IGZvcm1hdE9wdGlvbihvcHRpb24sIGRpc2FibGVkT3B0aW9ucykpO1xuXG4gICAgaWYgKHNob3dBTVBNKSB7XG4gICAgICBob3VyT3B0aW9ucyA9IGhvdXJPcHRpb25zLmZpbHRlcih2YWx1ZSA9PiBob3VyIDwgMTIgPyB2YWx1ZSA8IDEyIDogdmFsdWUgPj0gMTIpO1xuICAgICAgZm9ybWF0dGVkT3B0aW9ucyA9IGZvcm1hdHRlZE9wdGlvbnNcbiAgICAgICAgLm1hcChcbiAgICAgICAgICBvcHRpb24gPT4gKHtcbiAgICAgICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgICAgIGxhYmVsOiBvcHRpb24udmFsdWUgPD0gMTIgPyBvcHRpb24udmFsdWUgOiBwYWQob3B0aW9uLnZhbHVlIC0gMTIpXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuZmlsdGVyKCh7dmFsdWV9KSA9PiBob3VyIDwgMTIgPyBOdW1iZXIodmFsdWUpIDwgMTIgOiBOdW1iZXIodmFsdWUpID49IDEyKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHByZWZpeENscz17cHJlZml4Q2xzfVxuICAgICAgICBvcHRpb25zPXtmb3JtYXR0ZWRPcHRpb25zfVxuICAgICAgICBzZWxlY3RlZEluZGV4PXtob3VyT3B0aW9ucy5pbmRleE9mKGhvdXIpfVxuICAgICAgICB0eXBlPVwiaG91clwiXG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uSXRlbUNoYW5nZX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLm9uRW50ZXJTZWxlY3RQYW5lbC5iaW5kKHRoaXMsICdob3VyJyl9XG4gICAgICAvPlxuICAgICk7XG4gIH0sXG5cbiAgZ2V0TWludXRlU2VsZWN0KG1pbnV0ZSkge1xuICAgIGNvbnN0IHsgcHJlZml4Q2xzLCBtaW51dGVPcHRpb25zLCBkaXNhYmxlZE1pbnV0ZXMsIGRlZmF1bHRPcGVuVmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IGRlZmF1bHRPcGVuVmFsdWU7XG4gICAgY29uc3QgZGlzYWJsZWRPcHRpb25zID0gZGlzYWJsZWRNaW51dGVzKHZhbHVlLmhvdXIoKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeENsc31cbiAgICAgICAgb3B0aW9ucz17bWludXRlT3B0aW9ucy5tYXAob3B0aW9uID0+IGZvcm1hdE9wdGlvbihvcHRpb24sIGRpc2FibGVkT3B0aW9ucykpfVxuICAgICAgICBzZWxlY3RlZEluZGV4PXttaW51dGVPcHRpb25zLmluZGV4T2YobWludXRlKX1cbiAgICAgICAgdHlwZT1cIm1pbnV0ZVwiXG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uSXRlbUNoYW5nZX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLm9uRW50ZXJTZWxlY3RQYW5lbC5iaW5kKHRoaXMsICdtaW51dGUnKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcblxuICBnZXRTZWNvbmRTZWxlY3Qoc2Vjb25kKSB7XG4gICAgY29uc3QgeyBwcmVmaXhDbHMsIHNlY29uZE9wdGlvbnMsIGRpc2FibGVkU2Vjb25kcywgc2hvd1NlY29uZCwgZGVmYXVsdE9wZW5WYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXNob3dTZWNvbmQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgZGVmYXVsdE9wZW5WYWx1ZTtcbiAgICBjb25zdCBkaXNhYmxlZE9wdGlvbnMgPSBkaXNhYmxlZFNlY29uZHModmFsdWUuaG91cigpLCB2YWx1ZS5taW51dGUoKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeENsc31cbiAgICAgICAgb3B0aW9ucz17c2Vjb25kT3B0aW9ucy5tYXAob3B0aW9uID0+IGZvcm1hdE9wdGlvbihvcHRpb24sIGRpc2FibGVkT3B0aW9ucykpfVxuICAgICAgICBzZWxlY3RlZEluZGV4PXtzZWNvbmRPcHRpb25zLmluZGV4T2Yoc2Vjb25kKX1cbiAgICAgICAgdHlwZT1cInNlY29uZFwiXG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uSXRlbUNoYW5nZX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLm9uRW50ZXJTZWxlY3RQYW5lbC5iaW5kKHRoaXMsICdzZWNvbmQnKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcblxuICBnZXRBTVBNU2VsZWN0KHBlcmlvZCkge1xuICAgIGNvbnN0IHsgcHJlZml4Q2xzLCBzaG93QU1QTSwgZGVmYXVsdE9wZW5WYWx1ZSx9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghc2hvd0FNUE0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICB7dmFsdWU6ICdBTScsIGxhYmVsOiAnQU0nfSxcbiAgICAgIHt2YWx1ZTogJ1BNJywgbGFiZWw6ICdQTSd9XG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHByZWZpeENscz17cHJlZml4Q2xzfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBzZWxlY3RlZEluZGV4PXtwZXJpb2QgPT09ICdBTScgPyAwIDogMX1cbiAgICAgICAgdHlwZT1cInBlcmlvZFwiXG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uSXRlbUNoYW5nZX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLm9uRW50ZXJTZWxlY3RQYW5lbC5iaW5kKHRoaXMsICdwZXJpb2QnKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmVmaXhDbHMsIGRlZmF1bHRPcGVuVmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IGRlZmF1bHRPcGVuVmFsdWU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWNvbWJvYm94YH0+XG4gICAgICAgIHt0aGlzLmdldEhvdXJTZWxlY3QodmFsdWUuaG91cigpKX1cbiAgICAgICAge3RoaXMuZ2V0TWludXRlU2VsZWN0KHZhbHVlLm1pbnV0ZSgpKX1cbiAgICAgICAge3RoaXMuZ2V0U2Vjb25kU2VsZWN0KHZhbHVlLnNlY29uZCgpKX1cbiAgICAgICAge3RoaXMuZ2V0QU1QTVNlbGVjdCh2YWx1ZS5ob3VyKCkgPCAxMiA/ICdBTScgOiAnUE0nKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tYm9ib3g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gXCJjcmVhdGUtcmVhY3QtY2xhc3NcIjtcblxuY29uc3Qgc2Nyb2xsVG8gPSAoZWxlbWVudCwgdG8sIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBmdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVUaW1lb3V0KCkge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoYXJndW1lbnRzWzBdLCAxMCk7XG4gICAgfTtcbiAgLy8ganVtcCB0byB0YXJnZXQgaWYgZHVyYXRpb24gemVyb1xuICBpZiAoZHVyYXRpb24gPD0gMCkge1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICBjb25zdCBwZXJUaWNrID0gZGlmZmVyZW5jZSAvIGR1cmF0aW9uICogMTA7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wICsgcGVyVGljaztcbiAgICBpZiAoZWxlbWVudC5zY3JvbGxUb3AgPT09IHRvKSByZXR1cm47XG4gICAgc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uIC0gMTApO1xuICB9KTtcbn07XG5cbmNvbnN0IFNlbGVjdCA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNlbGVjdGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBqdW1wIHRvIHNlbGVjdGVkIG9wdGlvblxuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCgwKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgLy8gc21vb3RoIHNjcm9sbCB0byBzZWxlY3RlZCBvcHRpb25cbiAgICBpZiAocHJldlByb3BzLnNlbGVjdGVkSW5kZXggIT09IHRoaXMucHJvcHMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKDEyMCk7XG4gICAgfVxuICB9LFxuXG4gIG9uU2VsZWN0KHZhbHVlKSB7XG4gICAgY29uc3QgeyBvblNlbGVjdCwgdHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvblNlbGVjdCh0eXBlLCB2YWx1ZSk7XG4gIH0sXG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHNlbGVjdGVkSW5kZXgsIHByZWZpeENscyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gb3B0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjbHMgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgW2Ake3ByZWZpeENsc30tc2VsZWN0LW9wdGlvbi1zZWxlY3RlZGBdOiBzZWxlY3RlZEluZGV4ID09PSBpbmRleCxcbiAgICAgICAgW2Ake3ByZWZpeENsc30tc2VsZWN0LW9wdGlvbi1kaXNhYmxlZGBdOiBpdGVtLmRpc2FibGVkLFxuICAgICAgfSk7XG4gICAgICBsZXQgb25jbGljayA9IG51bGw7XG4gICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gK2l0ZW0udmFsdWU7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIG9uY2xpY2sgPSB0aGlzLm9uU2VsZWN0LmJpbmQodGhpcywgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDxsaVxuICAgICAgICBjbGFzc05hbWU9e2Nsc31cbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgb25DbGljaz17b25jbGlja31cbiAgICAgICAgZGlzYWJsZWQ9e2l0ZW0uZGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIHt0eXBlb2YgaXRlbS5sYWJlbCAhPT0gJ3VuZGVmaW5lZCcgPyBpdGVtLmxhYmVsIDogaXRlbS52YWx1ZX1cbiAgICAgIDwvbGk+KTtcbiAgICB9KTtcbiAgfSxcblxuICBzY3JvbGxUb1NlbGVjdGVkKGR1cmF0aW9uKSB7XG4gICAgLy8gbW92ZSB0byBzZWxlY3RlZCBpdGVtXG4gICAgY29uc3Qgc2VsZWN0ID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcyk7XG4gICAgY29uc3QgbGlzdCA9IFJlYWN0RG9tLmZpbmRET01Ob2RlKHRoaXMucmVmcy5saXN0KTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnByb3BzLnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICBjb25zdCB0b3BPcHRpb24gPSBsaXN0LmNoaWxkcmVuW2luZGV4XTtcbiAgICBjb25zdCB0byA9IHRvcE9wdGlvbi5vZmZzZXRUb3A7XG4gICAgc2Nyb2xsVG8oc2VsZWN0LCB0bywgZHVyYXRpb24pO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcmVmaXhDbHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tc2VsZWN0YH1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLnByb3BzLm9uTW91c2VFbnRlcn1cbiAgICAgID5cbiAgICAgICAgPHVsIHJlZj1cImxpc3RcIj57dGhpcy5nZXRPcHRpb25zKCl9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwiY29uc3QgYXV0b0FkanVzdE92ZXJmbG93ID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxLFxufTtcblxuY29uc3QgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xuXG5jb25zdCBwbGFjZW1lbnRzID0ge1xuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtM10sXG4gICAgdGFyZ2V0T2Zmc2V0LFxuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHBvaW50czogWyd0cicsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTNdLFxuICAgIHRhcmdldE9mZnNldCxcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDNdLFxuICAgIHRhcmdldE9mZnNldCxcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgM10sXG4gICAgdGFyZ2V0T2Zmc2V0LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VtZW50cztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnJvd3NlckxvY2FsZSAoKSB7XG4gIHZhciBsYW5nXG5cbiAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAvLyBsYXRlc3QgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBGaXJlZm94IHNldCB0aGlzIGNvcnJlY3RseVxuICAgIGxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdXG4gIH0gZWxzZSBpZiAobmF2aWdhdG9yLnVzZXJMYW5ndWFnZSkge1xuICAgIC8vIElFIG9ubHlcbiAgICBsYW5nID0gbmF2aWdhdG9yLnVzZXJMYW5ndWFnZVxuICB9IGVsc2Uge1xuICAgIC8vIGxhdGVzdCB2ZXJzaW9ucyBvZiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkgc2V0IHRoaXMgY29ycmVjdGx5XG4gICAgbGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZVxuICB9XG5cbiAgcmV0dXJuIGxhbmdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2luZGV4Jyk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdwcm9wLXR5cGVzJywgJy4vVGFibGUnLCAnLi9Sb3cnLCAnLi9DZWxsJywgJ2VsZW1lbnQtcmVzaXplLWV2ZW50J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdwcm9wLXR5cGVzJyksIHJlcXVpcmUoJy4vVGFibGUnKSwgcmVxdWlyZSgnLi9Sb3cnKSwgcmVxdWlyZSgnLi9DZWxsJyksIHJlcXVpcmUoJ2VsZW1lbnQtcmVzaXplLWV2ZW50JykpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzLCBnbG9iYWwuVGFibGUsIGdsb2JhbC5Sb3csIGdsb2JhbC5DZWxsLCBnbG9iYWwuZWxlbWVudFJlc2l6ZUV2ZW50KTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcywgX1RhYmxlLCBfUm93LCBfQ2VsbCwgZWxlbWVudFJlc2l6ZUV2ZW50KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5DZWxsID0gZXhwb3J0cy5Sb3cgPSBleHBvcnRzLlRhYmxlID0gZXhwb3J0cy5TdGlja3lUYWJsZSA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIHZhciBfVGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFibGUpO1xuXG4gIHZhciBfUm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jvdyk7XG5cbiAgdmFyIF9DZWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NlbGwpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSgpO1xuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICAgIH1cblxuICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgfVxuXG4gIHZhciBTdGlja3lUYWJsZSA9IGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTdGlja3lUYWJsZSwgX1B1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU3RpY2t5VGFibGUocHJvcHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGlja3lUYWJsZSk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdGlja3lUYWJsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0aWNreVRhYmxlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfdGhpcy5zZXRTY3JvbGxEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxZID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLnNjcm9sbERhdGEgPSB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiBfdGhpcy55U2Nyb2xsYmFyLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQ6IF90aGlzLnlTY3JvbGxiYXIuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGNsaWVudEhlaWdodDogX3RoaXMueVNjcm9sbGJhci5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgc2Nyb2xsTGVmdDogX3RoaXMueFNjcm9sbGJhci5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFdpZHRoOiBfdGhpcy54U2Nyb2xsYmFyLnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGNsaWVudFdpZHRoOiBfdGhpcy54U2Nyb2xsYmFyLmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNjcm9sbEJhclggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3VwcHJlc3NTY3JvbGxYKSB7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsRGF0YS5zY3JvbGxMZWZ0ID0gX3RoaXMueFdyYXBwZXIuc2Nyb2xsTGVmdCA9IF90aGlzLnhTY3JvbGxiYXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNjcm9sbEJhclkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3VwcHJlc3NTY3JvbGxZKSB7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsRGF0YS5zY3JvbGxUb3AgPSBfdGhpcy55V3JhcHBlci5zY3JvbGxUb3AgPSBfdGhpcy55U2Nyb2xsYmFyLnNjcm9sbFRvcDtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFkgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNjcm9sbFggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gTWF0aC5tYXgoX3RoaXMueFdyYXBwZXIuc2Nyb2xsTGVmdCwgMCk7XG4gICAgICAgIF90aGlzLnN0aWNreUhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyAtMSAqIHNjcm9sbExlZnQgKyAncHgsIDApJztcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNjcm9sbFhTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3VwcHJlc3NTY3JvbGxYKSB7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsRGF0YS5zY3JvbGxMZWZ0ID0gX3RoaXMueFNjcm9sbGJhci5zY3JvbGxMZWZ0ID0gX3RoaXMueFdyYXBwZXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zY3JvbGxZU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnN1cHByZXNzU2Nyb2xsWSkge1xuICAgICAgICAgIF90aGlzLnNjcm9sbERhdGEuc2Nyb2xsVG9wID0gX3RoaXMueVNjcm9sbGJhci5zY3JvbGxUb3AgPSBfdGhpcy55V3JhcHBlci5zY3JvbGxUb3A7XG4gICAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxZID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25TY3JvbGwpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vblNjcm9sbChfdGhpcy5zY3JvbGxEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldFNjcm9sbEJhckRpbXMoKTtcbiAgICAgICAgX3RoaXMuc2V0U2Nyb2xsQmFyV3JhcHBlckRpbXMoKTtcblxuICAgICAgICBfdGhpcy5zZXRSb3dIZWlnaHRzKCk7XG4gICAgICAgIF90aGlzLnNldENvbHVtbldpZHRocygpO1xuXG4gICAgICAgIF90aGlzLnNldFNjcm9sbERhdGEoKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXRTY3JvbGxCYXJXcmFwcGVyRGltcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMueFNjcm9sbGJhci5zdHlsZS53aWR0aCA9ICdjYWxjKDEwMCUgLSAnICsgX3RoaXMueVNjcm9sbFNpemUgKyAncHgpJztcbiAgICAgICAgX3RoaXMueVNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSAnY2FsYygxMDAlIC0gJyArIF90aGlzLnN0aWNreUhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgpJztcbiAgICAgICAgX3RoaXMueVNjcm9sbGJhci5zdHlsZS50b3AgPSBfdGhpcy5zdGlja3lIZWFkZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCkgKyAnJztcblxuICAgICAgX3RoaXMucm93Q291bnQgPSAwO1xuICAgICAgX3RoaXMuY29sdW1uQ291bnQgPSAwO1xuICAgICAgX3RoaXMueFNjcm9sbFNpemUgPSAwO1xuICAgICAgX3RoaXMueVNjcm9sbFNpemUgPSAwO1xuXG4gICAgICBfdGhpcy5zdGlja3lIZWFkZXJDb3VudCA9IHByb3BzLnN0aWNreUhlYWRlckNvdW50ID09PSAwID8gMCA6IF90aGlzLnN0aWNreUhlYWRlckNvdW50IHx8IDE7XG5cbiAgICAgIF90aGlzLmlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RpY2t5VGFibGUsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RpY2t5LXRhYmxlLScgKyB0aGlzLmlkKTtcblxuICAgICAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgICAgIHRoaXMucmVhbFRhYmxlID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjc3RpY2t5LXRhYmxlLXgtd3JhcHBlcicpLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgdGhpcy54U2Nyb2xsYmFyID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjeC1zY3JvbGxiYXInKTtcbiAgICAgICAgICB0aGlzLnlTY3JvbGxiYXIgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyN5LXNjcm9sbGJhcicpO1xuICAgICAgICAgIHRoaXMueFdyYXBwZXIgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzdGlja3ktdGFibGUteC13cmFwcGVyJyk7XG4gICAgICAgICAgdGhpcy55V3JhcHBlciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS15LXdyYXBwZXInKTtcbiAgICAgICAgICB0aGlzLnN0aWNreUhlYWRlciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS1oZWFkZXInKTtcbiAgICAgICAgICB0aGlzLnN0aWNreUNvbHVtbiA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS1jb2x1bW4nKTtcbiAgICAgICAgICB0aGlzLnN0aWNreUNvcm5lciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS1jb3JuZXInKTtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbERhdGEoKTtcblxuICAgICAgICAgIGVsZW1lbnRSZXNpemVFdmVudCh0aGlzLnJlYWxUYWJsZSwgdGhpcy5vblJlc2l6ZSk7XG5cbiAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLm9uUmVzaXplKTtcbiAgICAgICAgICB0aGlzLmFkZFNjcm9sbEJhckV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgICAgIHRoaXMueFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFgpO1xuICAgICAgICAgIHRoaXMueFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxYU2Nyb2xsYmFyKTtcbiAgICAgICAgICB0aGlzLnhTY3JvbGxiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbEJhclgpO1xuXG4gICAgICAgICAgdGhpcy55V3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbFlTY3JvbGxiYXIpO1xuICAgICAgICAgIHRoaXMueVNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsQmFyWSk7XG5cbiAgICAgICAgICBlbGVtZW50UmVzaXplRXZlbnQudW5iaW5kKHRoaXMucmVhbFRhYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FkZFNjcm9sbEJhckV2ZW50SGFuZGxlcnMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFNjcm9sbEJhckV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMueFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFgpO1xuXG4gICAgICAgIC8vWCBTY3JvbGxiYXJzXG4gICAgICAgIHRoaXMueFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxYU2Nyb2xsYmFyKTtcbiAgICAgICAgdGhpcy54U2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxCYXJYKTtcblxuICAgICAgICAvL1kgU2Nyb2xsYmFyc1xuICAgICAgICB0aGlzLnlXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsWVNjcm9sbGJhcik7XG4gICAgICAgIHRoaXMueVNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsQmFyWSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0U2Nyb2xsQmFyUGFkZGluZ3MnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbEJhclBhZGRpbmdzKCkge1xuICAgICAgICB2YXIgc2Nyb2xsUGFkZGluZyA9ICcwcHggMHB4ICcgKyB0aGlzLnhTY3JvbGxTaXplICsgJ3B4IDBweCc7XG4gICAgICAgIHRoaXMudGFibGUuc3R5bGUucGFkZGluZyA9IHNjcm9sbFBhZGRpbmc7XG5cbiAgICAgICAgdmFyIHNjcm9sbFBhZGRpbmcgPSAnMHB4ICcgKyB0aGlzLnlTY3JvbGxTaXplICsgJ3B4IDBweCAwcHgnO1xuICAgICAgICB0aGlzLnhXcmFwcGVyLmZpcnN0Q2hpbGQuc3R5bGUucGFkZGluZyA9IHNjcm9sbFBhZGRpbmc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0U2Nyb2xsQmFyRGltcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsQmFyRGltcygpIHtcbiAgICAgICAgdGhpcy54U2Nyb2xsU2l6ZSA9IHRoaXMueFNjcm9sbGJhci5vZmZzZXRIZWlnaHQgLSB0aGlzLnhTY3JvbGxiYXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLnlTY3JvbGxTaXplID0gdGhpcy55U2Nyb2xsYmFyLm9mZnNldFdpZHRoIC0gdGhpcy55U2Nyb2xsYmFyLmNsaWVudFdpZHRoO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0ZpcmVmb3gpIHtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbEJhclBhZGRpbmdzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmdldFNpemUodGhpcy5yZWFsVGFibGUuZmlyc3RDaGlsZCkud2lkdGg7XG4gICAgICAgIHRoaXMueFNjcm9sbGJhci5maXJzdENoaWxkLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldFNpemUodGhpcy5yZWFsVGFibGUpLmhlaWdodCArIHRoaXMueFNjcm9sbFNpemUgLSB0aGlzLnN0aWNreUhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMueVNjcm9sbGJhci5maXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgaWYgKHRoaXMueFNjcm9sbFNpemUpIHRoaXMueFNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSB0aGlzLnhTY3JvbGxTaXplICsgMSArICdweCc7XG4gICAgICAgIGlmICh0aGlzLnlTY3JvbGxTaXplKSB0aGlzLnlTY3JvbGxiYXIuc3R5bGUud2lkdGggPSB0aGlzLnlTY3JvbGxTaXplICsgMSArICdweCc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0Um93SGVpZ2h0cycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Um93SGVpZ2h0cygpIHtcbiAgICAgICAgdmFyIHIsIGNlbGxUb0NvcHksIGhlaWdodDtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGlja3lDb2x1bW5Db3VudCkge1xuICAgICAgICAgIGZvciAociA9IDA7IHIgPCB0aGlzLnJvd0NvdW50OyByKyspIHtcbiAgICAgICAgICAgIGNlbGxUb0NvcHkgPSB0aGlzLnJlYWxUYWJsZS5jaGlsZE5vZGVzW3JdLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICAgIGlmIChjZWxsVG9Db3B5KSB7XG4gICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0U2l6ZShjZWxsVG9Db3B5KS5oZWlnaHQ7XG4gICAgICAgICAgICAgIHRoaXMuc3RpY2t5Q29sdW1uLmZpcnN0Q2hpbGQuY2hpbGROb2Rlc1tyXS5maXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgICAgaWYgKHIgPT09IDAgJiYgdGhpcy5zdGlja3lDb3JuZXIuZmlyc3RDaGlsZC5jaGlsZE5vZGVzW3JdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGlja3lDb3JuZXIuZmlyc3RDaGlsZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NldENvbHVtbldpZHRocycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29sdW1uV2lkdGhzKCkge1xuICAgICAgICB2YXIgYywgY2VsbFRvQ29weSwgY2VsbFN0eWxlLCB3aWR0aCwgY2VsbCwgc3RpY2t5V2lkdGg7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RpY2t5SGVhZGVyQ291bnQpIHtcbiAgICAgICAgICBzdGlja3lXaWR0aCA9IDA7XG5cbiAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgdGhpcy5jb2x1bW5Db3VudDsgYysrKSB7XG4gICAgICAgICAgICBjZWxsVG9Db3B5ID0gdGhpcy5yZWFsVGFibGUuZmlyc3RDaGlsZC5jaGlsZE5vZGVzW2NdO1xuXG4gICAgICAgICAgICBpZiAoY2VsbFRvQ29weSkge1xuICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0U2l6ZShjZWxsVG9Db3B5KS53aWR0aDtcblxuICAgICAgICAgICAgICBjZWxsID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjc3RpY2t5LWhlYWRlci1jZWxsLScgKyBjKTtcblxuICAgICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAgIHZhciBmaXhlZENvbHVtbnNIZWFkZXIgPSB0aGlzLnN0aWNreUNvcm5lci5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgIGlmIChmaXhlZENvbHVtbnNIZWFkZXIgJiYgZml4ZWRDb2x1bW5zSGVhZGVyLmNoaWxkTm9kZXNbY10pIHtcbiAgICAgICAgICAgICAgICBjZWxsID0gZml4ZWRDb2x1bW5zSGVhZGVyLmNoaWxkTm9kZXNbY107XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgY2VsbCA9IGZpeGVkQ29sdW1uc0hlYWRlci5jaGlsZE5vZGVzW2NdO1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IHdpZHRoICsgJ3B4JztcblxuICAgICAgICAgICAgICAgIHN0aWNreVdpZHRoICs9IHdpZHRoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdGlja3lDb2x1bW4uZmlyc3RDaGlsZC5zdHlsZS53aWR0aCA9IHN0aWNreVdpZHRoICsgJ3B4JztcbiAgICAgICAgICB0aGlzLnN0aWNreUNvbHVtbi5maXJzdENoaWxkLnN0eWxlLm1pbldpZHRoID0gc3RpY2t5V2lkdGggKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U3RpY2t5Q29sdW1ucycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RpY2t5Q29sdW1ucyhyb3dzKSB7XG4gICAgICAgIHZhciBjb2x1bW5zQ291bnQgPSB0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50O1xuICAgICAgICB2YXIgY2VsbHM7XG4gICAgICAgIHZhciBzdGlja3lSb3dzID0gW107XG5cbiAgICAgICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIHIpIHtcbiAgICAgICAgICBjZWxscyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvdy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICBzdGlja3lSb3dzLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfUm93Mi5kZWZhdWx0LFxuICAgICAgICAgICAgX2V4dGVuZHMoe30sIHJvdy5wcm9wcywgeyBpZDogJycsIGtleTogciB9KSxcbiAgICAgICAgICAgIGNlbGxzLnNsaWNlKDAsIGNvbHVtbnNDb3VudClcbiAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0aWNreVJvd3M7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U3RpY2t5SGVhZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGlja3lIZWFkZXIocm93cykge1xuICAgICAgICB2YXIgcm93ID0gcm93c1swXTtcbiAgICAgICAgdmFyIGNlbGxzID0gW107XG5cbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkocm93LnByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsLCBjKSB7XG4gICAgICAgICAgY2VsbHMucHVzaChfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNlbGwsIHsgaWQ6ICdzdGlja3ktaGVhZGVyLWNlbGwtJyArIGMsIGtleTogYyB9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUm93Mi5kZWZhdWx0LFxuICAgICAgICAgIF9leHRlbmRzKHt9LCByb3cucHJvcHMsIHsgaWQ6ICdzdGlja3ktaGVhZGVyLXJvdycgfSksXG4gICAgICAgICAgY2VsbHNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRTdGlja3lDb3JuZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0aWNreUNvcm5lcihyb3dzKSB7XG4gICAgICAgIHZhciBjb2x1bW5zQ291bnQgPSB0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50O1xuICAgICAgICB2YXIgY2VsbHM7XG4gICAgICAgIHZhciBzdGlja3lDb3JuZXIgPSBbXTtcblxuICAgICAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdywgcikge1xuICAgICAgICAgIGlmIChyID09PSAwKSB7XG4gICAgICAgICAgICBjZWxscyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvdy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICAgIHN0aWNreUNvcm5lci5wdXNoKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfUm93Mi5kZWZhdWx0LFxuICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgcm93LnByb3BzLCB7IGlkOiAnJywga2V5OiByIH0pLFxuICAgICAgICAgICAgICBjZWxscy5zbGljZSgwLCBjb2x1bW5zQ291bnQpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdGlja3lDb3JuZXI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2l6ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2l6ZShub2RlKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IG5vZGUgPyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMDtcbiAgICAgICAgdmFyIGhlaWdodCA9IG5vZGUgPyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA6IDA7XG5cbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgcm93cyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB2YXIgc3RpY2t5Q29sdW1uLCBzdGlja3lIZWFkZXIsIHN0aWNreUNvcm5lcjtcblxuICAgICAgICB0aGlzLnJvd0NvdW50ID0gcm93cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuY29sdW1uQ291bnQgPSByb3dzWzBdICYmIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvd3NbMF0ucHJvcHMuY2hpbGRyZW4pLmxlbmd0aCB8fCAwO1xuXG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50ID4gMCAmJiB0aGlzLnN0aWNreUhlYWRlckNvdW50ID4gMCkge1xuICAgICAgICAgICAgc3RpY2t5Q29ybmVyID0gdGhpcy5nZXRTdGlja3lDb3JuZXIocm93cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50ID4gMCkge1xuICAgICAgICAgICAgc3RpY2t5Q29sdW1uID0gdGhpcy5nZXRTdGlja3lDb2x1bW5zKHJvd3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHN0aWNreUhlYWRlciA9IHRoaXMuZ2V0U3RpY2t5SGVhZGVyKHJvd3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZSAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKSwgaWQ6ICdzdGlja3ktdGFibGUtJyArIHRoaXMuaWQgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBpZDogJ3gtc2Nyb2xsYmFyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBpZDogJ3ktc2Nyb2xsYmFyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtY29ybmVyJywgaWQ6ICdzdGlja3ktdGFibGUtY29ybmVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgc3RpY2t5Q29ybmVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtaGVhZGVyJywgaWQ6ICdzdGlja3ktdGFibGUtaGVhZGVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgc3RpY2t5SGVhZGVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUteS13cmFwcGVyJywgaWQ6ICdzdGlja3ktdGFibGUteS13cmFwcGVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS1jb2x1bW4nLCBpZDogJ3N0aWNreS10YWJsZS1jb2x1bW4nIH0sXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHN0aWNreUNvbHVtblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS14LXdyYXBwZXInLCBpZDogJ3N0aWNreS10YWJsZS14LXdyYXBwZXInIH0sXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3NcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3RpY2t5VGFibGU7XG4gIH0oX3JlYWN0LlB1cmVDb21wb25lbnQpO1xuXG4gIFN0aWNreVRhYmxlLnByb3BUeXBlcyA9IHtcbiAgICBzdGlja3lIZWFkZXJDb3VudDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgc3RpY2t5Q29sdW1uQ291bnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuXG4gICAgb25TY3JvbGw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xuICB9O1xuICBTdGlja3lUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RpY2t5SGVhZGVyQ291bnQ6IDEsXG4gICAgc3RpY2t5Q29sdW1uQ291bnQ6IDFcbiAgfTtcbiAgZXhwb3J0cy5TdGlja3lUYWJsZSA9IFN0aWNreVRhYmxlO1xuICBleHBvcnRzLlRhYmxlID0gX1RhYmxlMi5kZWZhdWx0O1xuICBleHBvcnRzLlJvdyA9IF9Sb3cyLmRlZmF1bHQ7XG4gIGV4cG9ydHMuQ2VsbCA9IF9DZWxsMi5kZWZhdWx0O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnJlYWN0RG9tKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3JlYWN0RG9tKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgVGFibGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUYWJsZSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUYWJsZSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWJsZSk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGFibGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUYWJsZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUYWJsZSwgW3tcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAnc3RpY2t5LXRhYmxlLWNvbnRhaW5lciAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKSB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRhYmxlO1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIGV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlO1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnJlYWN0RG9tKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3JlYWN0RG9tKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgUm93ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUm93LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJvdygpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3cpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJvdy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJvdykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSb3csIFt7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS1yb3cgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJykgfSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSb3c7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgZXhwb3J0cy5kZWZhdWx0ID0gUm93O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnJlYWN0RG9tKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3JlYWN0RG9tKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgQ2VsbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENlbGwsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ2VsbCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDZWxsKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDZWxsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2VsbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDZWxsLCBbe1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtY2VsbCAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKSB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENlbGw7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgZXhwb3J0cy5kZWZhdWx0ID0gQ2VsbDtcbn0pOyIsInZhciByZXF1ZXN0RnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgd2luZG93ID0gdGhpc1xuICB2YXIgcmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgZnVuY3Rpb24gZmFsbGJhY2tSQUYoZnVuYykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmMsIDIwKVxuICAgIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RGcmFtZUZ1bmN0aW9uKGZ1bmMpIHtcbiAgICByZXR1cm4gcmFmKGZ1bmMpXG4gIH1cbn0pKClcblxudmFyIGNhbmNlbEZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdpbmRvdyA9IHRoaXNcbiAgdmFyIGNhbmNlbCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXRcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhbmNlbEZyYW1lRnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2FuY2VsKGlkKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIHJlc2l6ZUxpc3RlbmVyKGUpIHtcbiAgdmFyIHdpbiA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudFxuICBpZiAod2luLl9fcmVzaXplUkFGX18pIHtcbiAgICBjYW5jZWxGcmFtZSh3aW4uX19yZXNpemVSQUZfXylcbiAgfVxuICB3aW4uX19yZXNpemVSQUZfXyA9IHJlcXVlc3RGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRyaWdnZXIgPSB3aW4uX19yZXNpemVUcmlnZ2VyX19cbiAgICB0cmlnZ2VyLl9fcmVzaXplTGlzdGVuZXJzX18uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIGZuLmNhbGwodHJpZ2dlciwgZSlcbiAgICB9KVxuICB9KVxufVxuXG52YXIgZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cG9ydHMoZWxlbWVudCwgZm4pIHtcbiAgdmFyIHdpbmRvdyA9IHRoaXNcbiAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG4gIHZhciBpc0lFXG5cbiAgdmFyIGF0dGFjaEV2ZW50ID0gZG9jdW1lbnQuYXR0YWNoRXZlbnRcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvKSB8fFxuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS8pXG4gIH1cblxuICBmdW5jdGlvbiBvYmplY3RMb2FkKCkge1xuICAgIHRoaXMuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3Ll9fcmVzaXplVHJpZ2dlcl9fID0gdGhpcy5fX3Jlc2l6ZUVsZW1lbnRfX1xuICAgIHRoaXMuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKVxuICB9XG5cbiAgaWYgKCFlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18pIHtcbiAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18gPSBbXVxuICAgIGlmIChhdHRhY2hFdmVudCkge1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXyA9IGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgcmVzaXplTGlzdGVuZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICAgICAgfVxuICAgICAgdmFyIG9iaiA9IChlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0JykpXG4gICAgICBvYmouc2V0QXR0cmlidXRlKFxuICAgICAgICAnc3R5bGUnLFxuICAgICAgICAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7IG9wYWNpdHk6IDA7J1xuICAgICAgKVxuICAgICAgb2JqLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzaXplLXNlbnNvcicpXG4gICAgICBvYmouX19yZXNpemVFbGVtZW50X18gPSBlbGVtZW50XG4gICAgICBvYmoub25sb2FkID0gb2JqZWN0TG9hZFxuICAgICAgb2JqLnR5cGUgPSAndGV4dC9odG1sJ1xuICAgICAgaWYgKGlzSUUpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvYmopXG4gICAgICB9XG4gICAgICBvYmouZGF0YSA9ICdhYm91dDpibGFuaydcbiAgICAgIGlmICghaXNJRSkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLnB1c2goZm4pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogZXhwb3J0cy5iaW5kKHdpbmRvdylcblxubW9kdWxlLmV4cG9ydHMudW5iaW5kID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZuKSB7XG4gIHZhciBhdHRhY2hFdmVudCA9IGRvY3VtZW50LmF0dGFjaEV2ZW50XG4gIGlmIChmbikge1xuICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5zcGxpY2UoXG4gICAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18uaW5kZXhPZihmbiksXG4gICAgICAxXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXyA9IFtdXG4gIH1cbiAgaWYgKCFlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18ubGVuZ3RoKSB7XG4gICAgaWYgKGF0dGFjaEV2ZW50KSB7XG4gICAgICBlbGVtZW50LmRldGFjaEV2ZW50KCdvbnJlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgcmVzaXplTGlzdGVuZXJcbiAgICAgIClcbiAgICAgIGRlbGV0ZSBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5fX3Jlc2l6ZVRyaWdnZXJfX1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXyA9ICFlbGVtZW50LnJlbW92ZUNoaWxkKFxuICAgICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fXG4gICAgICApXG4gICAgfVxuICAgIGRlbGV0ZSBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX19cbiAgfVxufVxuIiwidmFyIG1vbWVudCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vbW9tZW50LXRpbWV6b25lXCIpO1xubW9tZW50LnR6LmxvYWQocmVxdWlyZSgnLi9kYXRhL3BhY2tlZC9sYXRlc3QuanNvbicpKTtcbiIsIi8vISBtb21lbnQtdGltZXpvbmUuanNcbi8vISB2ZXJzaW9uIDogMC41LjIxXG4vLyEgQ29weXJpZ2h0IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbi8vISBsaWNlbnNlIDogTUlUXG4vLyEgZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50LXRpbWV6b25lXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvKmdsb2JhbCBkZWZpbmUqL1xuXHRpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnbW9tZW50JykpOyAvLyBOb2RlXG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnbW9tZW50J10sIGZhY3RvcnkpOyAgICAgICAgICAgICAgICAgLy8gQU1EXG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShyb290Lm1vbWVudCk7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnJvd3NlclxuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChtb21lbnQpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0Ly8gRG8gbm90IGxvYWQgbW9tZW50LXRpbWV6b25lIGEgc2Vjb25kIHRpbWUuXG5cdC8vIGlmIChtb21lbnQudHogIT09IHVuZGVmaW5lZCkge1xuXHQvLyBcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgJyArIG1vbWVudC50ei52ZXJzaW9uICsgJyB3YXMgYWxyZWFkeSBsb2FkZWQgJyArIChtb21lbnQudHouZGF0YVZlcnNpb24gPyAnd2l0aCBkYXRhIGZyb20gJyA6ICd3aXRob3V0IGFueSBkYXRhJykgKyBtb21lbnQudHouZGF0YVZlcnNpb24pO1xuXHQvLyBcdHJldHVybiBtb21lbnQ7XG5cdC8vIH1cblxuXHR2YXIgVkVSU0lPTiA9IFwiMC41LjIxXCIsXG5cdFx0em9uZXMgPSB7fSxcblx0XHRsaW5rcyA9IHt9LFxuXHRcdG5hbWVzID0ge30sXG5cdFx0Z3Vlc3NlcyA9IHt9LFxuXHRcdGNhY2hlZEd1ZXNzO1xuXG5cdGlmICghbW9tZW50IHx8IHR5cGVvZiBtb21lbnQudmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcblx0XHRsb2dFcnJvcignTW9tZW50IFRpbWV6b25lIHJlcXVpcmVzIE1vbWVudC5qcy4gU2VlIGh0dHBzOi8vbW9tZW50anMuY29tL3RpbWV6b25lL2RvY3MvIy91c2UtaXQvYnJvd3Nlci8nKTtcblx0fVxuXG5cdHZhciBtb21lbnRWZXJzaW9uID0gbW9tZW50LnZlcnNpb24uc3BsaXQoJy4nKSxcblx0XHRtYWpvciA9ICttb21lbnRWZXJzaW9uWzBdLFxuXHRcdG1pbm9yID0gK21vbWVudFZlcnNpb25bMV07XG5cblx0Ly8gTW9tZW50LmpzIHZlcnNpb24gY2hlY2tcblx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA2KSkge1xuXHRcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgcmVxdWlyZXMgTW9tZW50LmpzID49IDIuNi4wLiBZb3UgYXJlIHVzaW5nIE1vbWVudC5qcyAnICsgbW9tZW50LnZlcnNpb24gKyAnLiBTZWUgbW9tZW50anMuY29tJyk7XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0VW5wYWNraW5nXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRmdW5jdGlvbiBjaGFyQ29kZVRvSW50KGNoYXJDb2RlKSB7XG5cdFx0aWYgKGNoYXJDb2RlID4gOTYpIHtcblx0XHRcdHJldHVybiBjaGFyQ29kZSAtIDg3O1xuXHRcdH0gZWxzZSBpZiAoY2hhckNvZGUgPiA2NCkge1xuXHRcdFx0cmV0dXJuIGNoYXJDb2RlIC0gMjk7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFyQ29kZSAtIDQ4O1xuXHR9XG5cblx0ZnVuY3Rpb24gdW5wYWNrQmFzZTYwKHN0cmluZykge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdHBhcnRzID0gc3RyaW5nLnNwbGl0KCcuJyksXG5cdFx0XHR3aG9sZSA9IHBhcnRzWzBdLFxuXHRcdFx0ZnJhY3Rpb25hbCA9IHBhcnRzWzFdIHx8ICcnLFxuXHRcdFx0bXVsdGlwbGllciA9IDEsXG5cdFx0XHRudW0sXG5cdFx0XHRvdXQgPSAwLFxuXHRcdFx0c2lnbiA9IDE7XG5cblx0XHQvLyBoYW5kbGUgbmVnYXRpdmUgbnVtYmVyc1xuXHRcdGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDUpIHtcblx0XHRcdGkgPSAxO1xuXHRcdFx0c2lnbiA9IC0xO1xuXHRcdH1cblxuXHRcdC8vIGhhbmRsZSBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsXG5cdFx0Zm9yIChpOyBpIDwgd2hvbGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdG51bSA9IGNoYXJDb2RlVG9JbnQod2hvbGUuY2hhckNvZGVBdChpKSk7XG5cdFx0XHRvdXQgPSA2MCAqIG91dCArIG51bTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsXG5cdFx0Zm9yIChpID0gMDsgaSA8IGZyYWN0aW9uYWwubGVuZ3RoOyBpKyspIHtcblx0XHRcdG11bHRpcGxpZXIgPSBtdWx0aXBsaWVyIC8gNjA7XG5cdFx0XHRudW0gPSBjaGFyQ29kZVRvSW50KGZyYWN0aW9uYWwuY2hhckNvZGVBdChpKSk7XG5cdFx0XHRvdXQgKz0gbnVtICogbXVsdGlwbGllcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0ICogc2lnbjtcblx0fVxuXG5cdGZ1bmN0aW9uIGFycmF5VG9JbnQgKGFycmF5KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0YXJyYXlbaV0gPSB1bnBhY2tCYXNlNjAoYXJyYXlbaV0pO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGludFRvVW50aWwgKGFycmF5LCBsZW5ndGgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcnJheVtpXSA9IE1hdGgucm91bmQoKGFycmF5W2kgLSAxXSB8fCAwKSArIChhcnJheVtpXSAqIDYwMDAwKSk7IC8vIG1pbnV0ZXMgdG8gbWlsbGlzZWNvbmRzXG5cdFx0fVxuXG5cdFx0YXJyYXlbbGVuZ3RoIC0gMV0gPSBJbmZpbml0eTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1hcEluZGljZXMgKHNvdXJjZSwgaW5kaWNlcykge1xuXHRcdHZhciBvdXQgPSBbXSwgaTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvdXRbaV0gPSBzb3VyY2VbaW5kaWNlc1tpXV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdGZ1bmN0aW9uIHVucGFjayAoc3RyaW5nKSB7XG5cdFx0dmFyIGRhdGEgPSBzdHJpbmcuc3BsaXQoJ3wnKSxcblx0XHRcdG9mZnNldHMgPSBkYXRhWzJdLnNwbGl0KCcgJyksXG5cdFx0XHRpbmRpY2VzID0gZGF0YVszXS5zcGxpdCgnJyksXG5cdFx0XHR1bnRpbHMgID0gZGF0YVs0XS5zcGxpdCgnICcpO1xuXG5cdFx0YXJyYXlUb0ludChvZmZzZXRzKTtcblx0XHRhcnJheVRvSW50KGluZGljZXMpO1xuXHRcdGFycmF5VG9JbnQodW50aWxzKTtcblxuXHRcdGludFRvVW50aWwodW50aWxzLCBpbmRpY2VzLmxlbmd0aCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSAgICAgICA6IGRhdGFbMF0sXG5cdFx0XHRhYmJycyAgICAgIDogbWFwSW5kaWNlcyhkYXRhWzFdLnNwbGl0KCcgJyksIGluZGljZXMpLFxuXHRcdFx0b2Zmc2V0cyAgICA6IG1hcEluZGljZXMob2Zmc2V0cywgaW5kaWNlcyksXG5cdFx0XHR1bnRpbHMgICAgIDogdW50aWxzLFxuXHRcdFx0cG9wdWxhdGlvbiA6IGRhdGFbNV0gfCAwXG5cdFx0fTtcblx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRab25lIG9iamVjdFxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gWm9uZSAocGFja2VkU3RyaW5nKSB7XG5cdFx0aWYgKHBhY2tlZFN0cmluZykge1xuXHRcdFx0dGhpcy5fc2V0KHVucGFjayhwYWNrZWRTdHJpbmcpKTtcblx0XHR9XG5cdH1cblxuXHRab25lLnByb3RvdHlwZSA9IHtcblx0XHRfc2V0IDogZnVuY3Rpb24gKHVucGFja2VkKSB7XG5cdFx0XHR0aGlzLm5hbWUgICAgICAgPSB1bnBhY2tlZC5uYW1lO1xuXHRcdFx0dGhpcy5hYmJycyAgICAgID0gdW5wYWNrZWQuYWJicnM7XG5cdFx0XHR0aGlzLnVudGlscyAgICAgPSB1bnBhY2tlZC51bnRpbHM7XG5cdFx0XHR0aGlzLm9mZnNldHMgICAgPSB1bnBhY2tlZC5vZmZzZXRzO1xuXHRcdFx0dGhpcy5wb3B1bGF0aW9uID0gdW5wYWNrZWQucG9wdWxhdGlvbjtcblx0XHR9LFxuXG5cdFx0X2luZGV4IDogZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuXHRcdFx0dmFyIHRhcmdldCA9ICt0aW1lc3RhbXAsXG5cdFx0XHRcdHVudGlscyA9IHRoaXMudW50aWxzLFxuXHRcdFx0XHRpO1xuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdW50aWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0YXJnZXQgPCB1bnRpbHNbaV0pIHtcblx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRwYXJzZSA6IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcblx0XHRcdHZhciB0YXJnZXQgID0gK3RpbWVzdGFtcCxcblx0XHRcdFx0b2Zmc2V0cyA9IHRoaXMub2Zmc2V0cyxcblx0XHRcdFx0dW50aWxzICA9IHRoaXMudW50aWxzLFxuXHRcdFx0XHRtYXggICAgID0gdW50aWxzLmxlbmd0aCAtIDEsXG5cdFx0XHRcdG9mZnNldCwgb2Zmc2V0TmV4dCwgb2Zmc2V0UHJldiwgaTtcblxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG5cdFx0XHRcdG9mZnNldCAgICAgPSBvZmZzZXRzW2ldO1xuXHRcdFx0XHRvZmZzZXROZXh0ID0gb2Zmc2V0c1tpICsgMV07XG5cdFx0XHRcdG9mZnNldFByZXYgPSBvZmZzZXRzW2kgPyBpIC0gMSA6IGldO1xuXG5cdFx0XHRcdGlmIChvZmZzZXQgPCBvZmZzZXROZXh0ICYmIHR6Lm1vdmVBbWJpZ3VvdXNGb3J3YXJkKSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0TmV4dDtcblx0XHRcdFx0fSBlbHNlIGlmIChvZmZzZXQgPiBvZmZzZXRQcmV2ICYmIHR6Lm1vdmVJbnZhbGlkRm9yd2FyZCkge1xuXHRcdFx0XHRcdG9mZnNldCA9IG9mZnNldFByZXY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGFyZ2V0IDwgdW50aWxzW2ldIC0gKG9mZnNldCAqIDYwMDAwKSkge1xuXHRcdFx0XHRcdHJldHVybiBvZmZzZXRzW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvZmZzZXRzW21heF07XG5cdFx0fSxcblxuXHRcdGFiYnIgOiBmdW5jdGlvbiAobW9tKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hYmJyc1t0aGlzLl9pbmRleChtb20pXTtcblx0XHR9LFxuXG5cdFx0b2Zmc2V0IDogZnVuY3Rpb24gKG1vbSkge1xuXHRcdFx0bG9nRXJyb3IoXCJ6b25lLm9mZnNldCBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHpvbmUudXRjT2Zmc2V0XCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMub2Zmc2V0c1t0aGlzLl9pbmRleChtb20pXTtcblx0XHR9LFxuXG5cdFx0dXRjT2Zmc2V0IDogZnVuY3Rpb24gKG1vbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMub2Zmc2V0c1t0aGlzLl9pbmRleChtb20pXTtcblx0XHR9XG5cdH07XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdEN1cnJlbnQgVGltZXpvbmVcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIE9mZnNldEF0KGF0KSB7XG5cdFx0dmFyIHRpbWVTdHJpbmcgPSBhdC50b1RpbWVTdHJpbmcoKTtcblx0XHR2YXIgYWJiciA9IHRpbWVTdHJpbmcubWF0Y2goL1xcKFthLXogXStcXCkvaSk7XG5cdFx0aWYgKGFiYnIgJiYgYWJiclswXSkge1xuXHRcdFx0Ly8gMTc6NTY6MzEgR01ULTA2MDAgKENTVClcblx0XHRcdC8vIDE3OjU2OjMxIEdNVC0wNjAwIChDZW50cmFsIFN0YW5kYXJkIFRpbWUpXG5cdFx0XHRhYmJyID0gYWJiclswXS5tYXRjaCgvW0EtWl0vZyk7XG5cdFx0XHRhYmJyID0gYWJiciA/IGFiYnIuam9pbignJykgOiB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIDE3OjU2OjMxIENTVFxuXHRcdFx0Ly8gMTc6NTY6MzEgR01UKzA4MDAgKOWPsOWMl+aomea6luaZgumWkylcblx0XHRcdGFiYnIgPSB0aW1lU3RyaW5nLm1hdGNoKC9bQS1aXXszLDV9L2cpO1xuXHRcdFx0YWJiciA9IGFiYnIgPyBhYmJyWzBdIDogdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmIChhYmJyID09PSAnR01UJykge1xuXHRcdFx0YWJiciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR0aGlzLmF0ID0gK2F0O1xuXHRcdHRoaXMuYWJiciA9IGFiYnI7XG5cdFx0dGhpcy5vZmZzZXQgPSBhdC5nZXRUaW1lem9uZU9mZnNldCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gWm9uZVNjb3JlKHpvbmUpIHtcblx0XHR0aGlzLnpvbmUgPSB6b25lO1xuXHRcdHRoaXMub2Zmc2V0U2NvcmUgPSAwO1xuXHRcdHRoaXMuYWJiclNjb3JlID0gMDtcblx0fVxuXG5cdFpvbmVTY29yZS5wcm90b3R5cGUuc2NvcmVPZmZzZXRBdCA9IGZ1bmN0aW9uIChvZmZzZXRBdCkge1xuXHRcdHRoaXMub2Zmc2V0U2NvcmUgKz0gTWF0aC5hYnModGhpcy56b25lLnV0Y09mZnNldChvZmZzZXRBdC5hdCkgLSBvZmZzZXRBdC5vZmZzZXQpO1xuXHRcdGlmICh0aGlzLnpvbmUuYWJicihvZmZzZXRBdC5hdCkucmVwbGFjZSgvW15BLVpdL2csICcnKSAhPT0gb2Zmc2V0QXQuYWJicikge1xuXHRcdFx0dGhpcy5hYmJyU2NvcmUrKztcblx0XHR9XG5cdH07XG5cblx0ZnVuY3Rpb24gZmluZENoYW5nZShsb3csIGhpZ2gpIHtcblx0XHR2YXIgbWlkLCBkaWZmO1xuXG5cdFx0d2hpbGUgKChkaWZmID0gKChoaWdoLmF0IC0gbG93LmF0KSAvIDEyZTQgfCAwKSAqIDZlNCkpIHtcblx0XHRcdG1pZCA9IG5ldyBPZmZzZXRBdChuZXcgRGF0ZShsb3cuYXQgKyBkaWZmKSk7XG5cdFx0XHRpZiAobWlkLm9mZnNldCA9PT0gbG93Lm9mZnNldCkge1xuXHRcdFx0XHRsb3cgPSBtaWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoaWdoID0gbWlkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBsb3c7XG5cdH1cblxuXHRmdW5jdGlvbiB1c2VyT2Zmc2V0cygpIHtcblx0XHR2YXIgc3RhcnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMixcblx0XHRcdGxhc3QgPSBuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyLCAwLCAxKSksXG5cdFx0XHRvZmZzZXRzID0gW2xhc3RdLFxuXHRcdFx0Y2hhbmdlLCBuZXh0LCBpO1xuXG5cdFx0Zm9yIChpID0gMTsgaSA8IDQ4OyBpKyspIHtcblx0XHRcdG5leHQgPSBuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyLCBpLCAxKSk7XG5cdFx0XHRpZiAobmV4dC5vZmZzZXQgIT09IGxhc3Qub2Zmc2V0KSB7XG5cdFx0XHRcdGNoYW5nZSA9IGZpbmRDaGFuZ2UobGFzdCwgbmV4dCk7XG5cdFx0XHRcdG9mZnNldHMucHVzaChjaGFuZ2UpO1xuXHRcdFx0XHRvZmZzZXRzLnB1c2gobmV3IE9mZnNldEF0KG5ldyBEYXRlKGNoYW5nZS5hdCArIDZlNCkpKTtcblx0XHRcdH1cblx0XHRcdGxhc3QgPSBuZXh0O1xuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdG9mZnNldHMucHVzaChuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyICsgaSwgMCwgMSkpKTtcblx0XHRcdG9mZnNldHMucHVzaChuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyICsgaSwgNiwgMSkpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2Zmc2V0cztcblx0fVxuXG5cdGZ1bmN0aW9uIHNvcnRab25lU2NvcmVzIChhLCBiKSB7XG5cdFx0aWYgKGEub2Zmc2V0U2NvcmUgIT09IGIub2Zmc2V0U2NvcmUpIHtcblx0XHRcdHJldHVybiBhLm9mZnNldFNjb3JlIC0gYi5vZmZzZXRTY29yZTtcblx0XHR9XG5cdFx0aWYgKGEuYWJiclNjb3JlICE9PSBiLmFiYnJTY29yZSkge1xuXHRcdFx0cmV0dXJuIGEuYWJiclNjb3JlIC0gYi5hYmJyU2NvcmU7XG5cdFx0fVxuXHRcdHJldHVybiBiLnpvbmUucG9wdWxhdGlvbiAtIGEuem9uZS5wb3B1bGF0aW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkVG9HdWVzc2VzIChuYW1lLCBvZmZzZXRzKSB7XG5cdFx0dmFyIGksIG9mZnNldDtcblx0XHRhcnJheVRvSW50KG9mZnNldHMpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvZmZzZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvZmZzZXQgPSBvZmZzZXRzW2ldO1xuXHRcdFx0Z3Vlc3Nlc1tvZmZzZXRdID0gZ3Vlc3Nlc1tvZmZzZXRdIHx8IHt9O1xuXHRcdFx0Z3Vlc3Nlc1tvZmZzZXRdW25hbWVdID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBndWVzc2VzRm9yVXNlck9mZnNldHMgKG9mZnNldHMpIHtcblx0XHR2YXIgb2Zmc2V0c0xlbmd0aCA9IG9mZnNldHMubGVuZ3RoLFxuXHRcdFx0ZmlsdGVyZWRHdWVzc2VzID0ge30sXG5cdFx0XHRvdXQgPSBbXSxcblx0XHRcdGksIGosIGd1ZXNzZXNPZmZzZXQ7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgb2Zmc2V0c0xlbmd0aDsgaSsrKSB7XG5cdFx0XHRndWVzc2VzT2Zmc2V0ID0gZ3Vlc3Nlc1tvZmZzZXRzW2ldLm9mZnNldF0gfHwge307XG5cdFx0XHRmb3IgKGogaW4gZ3Vlc3Nlc09mZnNldCkge1xuXHRcdFx0XHRpZiAoZ3Vlc3Nlc09mZnNldC5oYXNPd25Qcm9wZXJ0eShqKSkge1xuXHRcdFx0XHRcdGZpbHRlcmVkR3Vlc3Nlc1tqXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgaW4gZmlsdGVyZWRHdWVzc2VzKSB7XG5cdFx0XHRpZiAoZmlsdGVyZWRHdWVzc2VzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdG91dC5wdXNoKG5hbWVzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0O1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVidWlsZEd1ZXNzICgpIHtcblxuXHRcdC8vIHVzZSBJbnRsIEFQSSB3aGVuIGF2YWlsYWJsZSBhbmQgcmV0dXJuaW5nIHZhbGlkIHRpbWUgem9uZVxuXHRcdHRyeSB7XG5cdFx0XHR2YXIgaW50bE5hbWUgPSBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG5cdFx0XHRpZiAoaW50bE5hbWUgJiYgaW50bE5hbWUubGVuZ3RoID4gMykge1xuXHRcdFx0XHR2YXIgbmFtZSA9IG5hbWVzW25vcm1hbGl6ZU5hbWUoaW50bE5hbWUpXTtcblx0XHRcdFx0aWYgKG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsb2dFcnJvcihcIk1vbWVudCBUaW1lem9uZSBmb3VuZCBcIiArIGludGxOYW1lICsgXCIgZnJvbSB0aGUgSW50bCBhcGksIGJ1dCBkaWQgbm90IGhhdmUgdGhhdCBkYXRhIGxvYWRlZC5cIik7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gSW50bCB1bmF2YWlsYWJsZSwgZmFsbCBiYWNrIHRvIG1hbnVhbCBndWVzc2luZy5cblx0XHR9XG5cblx0XHR2YXIgb2Zmc2V0cyA9IHVzZXJPZmZzZXRzKCksXG5cdFx0XHRvZmZzZXRzTGVuZ3RoID0gb2Zmc2V0cy5sZW5ndGgsXG5cdFx0XHRndWVzc2VzID0gZ3Vlc3Nlc0ZvclVzZXJPZmZzZXRzKG9mZnNldHMpLFxuXHRcdFx0em9uZVNjb3JlcyA9IFtdLFxuXHRcdFx0em9uZVNjb3JlLCBpLCBqO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGd1ZXNzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHpvbmVTY29yZSA9IG5ldyBab25lU2NvcmUoZ2V0Wm9uZShndWVzc2VzW2ldKSwgb2Zmc2V0c0xlbmd0aCk7XG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgb2Zmc2V0c0xlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHpvbmVTY29yZS5zY29yZU9mZnNldEF0KG9mZnNldHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0em9uZVNjb3Jlcy5wdXNoKHpvbmVTY29yZSk7XG5cdFx0fVxuXG5cdFx0em9uZVNjb3Jlcy5zb3J0KHNvcnRab25lU2NvcmVzKTtcblxuXHRcdHJldHVybiB6b25lU2NvcmVzLmxlbmd0aCA+IDAgPyB6b25lU2NvcmVzWzBdLnpvbmUubmFtZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdGZ1bmN0aW9uIGd1ZXNzIChpZ25vcmVDYWNoZSkge1xuXHRcdGlmICghY2FjaGVkR3Vlc3MgfHwgaWdub3JlQ2FjaGUpIHtcblx0XHRcdGNhY2hlZEd1ZXNzID0gcmVidWlsZEd1ZXNzKCk7XG5cdFx0fVxuXHRcdHJldHVybiBjYWNoZWRHdWVzcztcblx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRHbG9iYWwgTWV0aG9kc1xuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gbm9ybWFsaXplTmFtZSAobmFtZSkge1xuXHRcdHJldHVybiAobmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC8vZywgJ18nKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFpvbmUgKHBhY2tlZCkge1xuXHRcdHZhciBpLCBuYW1lLCBzcGxpdCwgbm9ybWFsaXplZDtcblxuXHRcdGlmICh0eXBlb2YgcGFja2VkID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRwYWNrZWQgPSBbcGFja2VkXTtcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgcGFja2VkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRzcGxpdCA9IHBhY2tlZFtpXS5zcGxpdCgnfCcpO1xuXHRcdFx0bmFtZSA9IHNwbGl0WzBdO1xuXHRcdFx0bm9ybWFsaXplZCA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG5cdFx0XHR6b25lc1tub3JtYWxpemVkXSA9IHBhY2tlZFtpXTtcblx0XHRcdG5hbWVzW25vcm1hbGl6ZWRdID0gbmFtZTtcblx0XHRcdGFkZFRvR3Vlc3Nlcyhub3JtYWxpemVkLCBzcGxpdFsyXS5zcGxpdCgnICcpKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab25lIChuYW1lLCBjYWxsZXIpIHtcblx0XHRcblx0XHRuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcblxuXHRcdHZhciB6b25lID0gem9uZXNbbmFtZV07XG5cdFx0dmFyIGxpbms7XG5cblx0XHRpZiAoem9uZSBpbnN0YW5jZW9mIFpvbmUpIHtcblx0XHRcdHJldHVybiB6b25lO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygem9uZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHpvbmUgPSBuZXcgWm9uZSh6b25lKTtcblx0XHRcdHpvbmVzW25hbWVdID0gem9uZTtcblx0XHRcdHJldHVybiB6b25lO1xuXHRcdH1cblxuXHRcdC8vIFBhc3MgZ2V0Wm9uZSB0byBwcmV2ZW50IHJlY3Vyc2lvbiBtb3JlIHRoYW4gMSBsZXZlbCBkZWVwXG5cdFx0aWYgKGxpbmtzW25hbWVdICYmIGNhbGxlciAhPT0gZ2V0Wm9uZSAmJiAobGluayA9IGdldFpvbmUobGlua3NbbmFtZV0sIGdldFpvbmUpKSkge1xuXHRcdFx0em9uZSA9IHpvbmVzW25hbWVdID0gbmV3IFpvbmUoKTtcblx0XHRcdHpvbmUuX3NldChsaW5rKTtcblx0XHRcdHpvbmUubmFtZSA9IG5hbWVzW25hbWVdO1xuXHRcdFx0cmV0dXJuIHpvbmU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROYW1lcyAoKSB7XG5cdFx0dmFyIGksIG91dCA9IFtdO1xuXG5cdFx0Zm9yIChpIGluIG5hbWVzKSB7XG5cdFx0XHRpZiAobmFtZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgKHpvbmVzW2ldIHx8IHpvbmVzW2xpbmtzW2ldXSkgJiYgbmFtZXNbaV0pIHtcblx0XHRcdFx0b3V0LnB1c2gobmFtZXNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvdXQuc29ydCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkTGluayAoYWxpYXNlcykge1xuXHRcdHZhciBpLCBhbGlhcywgbm9ybWFsMCwgbm9ybWFsMTtcblxuXHRcdGlmICh0eXBlb2YgYWxpYXNlcyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0YWxpYXNlcyA9IFthbGlhc2VzXTtcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgYWxpYXNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0YWxpYXMgPSBhbGlhc2VzW2ldLnNwbGl0KCd8Jyk7XG5cblx0XHRcdG5vcm1hbDAgPSBub3JtYWxpemVOYW1lKGFsaWFzWzBdKTtcblx0XHRcdG5vcm1hbDEgPSBub3JtYWxpemVOYW1lKGFsaWFzWzFdKTtcblxuXHRcdFx0bGlua3Nbbm9ybWFsMF0gPSBub3JtYWwxO1xuXHRcdFx0bmFtZXNbbm9ybWFsMF0gPSBhbGlhc1swXTtcblxuXHRcdFx0bGlua3Nbbm9ybWFsMV0gPSBub3JtYWwwO1xuXHRcdFx0bmFtZXNbbm9ybWFsMV0gPSBhbGlhc1sxXTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkRGF0YSAoZGF0YSkge1xuXHRcdGFkZFpvbmUoZGF0YS56b25lcyk7XG5cdFx0YWRkTGluayhkYXRhLmxpbmtzKTtcblx0XHR0ei5kYXRhVmVyc2lvbiA9IGRhdGEudmVyc2lvbjtcblx0fVxuXG5cdGZ1bmN0aW9uIHpvbmVFeGlzdHMgKG5hbWUpIHtcblx0XHRpZiAoIXpvbmVFeGlzdHMuZGlkU2hvd0Vycm9yKSB7XG5cdFx0XHR6b25lRXhpc3RzLmRpZFNob3dFcnJvciA9IHRydWU7XG5cdFx0XHRcdGxvZ0Vycm9yKFwibW9tZW50LnR6LnpvbmVFeGlzdHMoJ1wiICsgbmFtZSArIFwiJykgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAhbW9tZW50LnR6LnpvbmUoJ1wiICsgbmFtZSArIFwiJylcIik7XG5cdFx0fVxuXHRcdHJldHVybiAhIWdldFpvbmUobmFtZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBuZWVkc09mZnNldCAobSkge1xuXHRcdHZhciBpc1VuaXhUaW1lc3RhbXAgPSAobS5fZiA9PT0gJ1gnIHx8IG0uX2YgPT09ICd4Jyk7XG5cdFx0cmV0dXJuICEhKG0uX2EgJiYgKG0uX3R6bSA9PT0gdW5kZWZpbmVkKSAmJiAhaXNVbml4VGltZXN0YW1wKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxvZ0Vycm9yIChtZXNzYWdlKSB7XG5cdFx0aWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0bW9tZW50LnR6IG5hbWVzcGFjZVxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gdHogKGlucHV0KSB7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIC0xKSxcblx0XHRcdG5hbWUgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLFxuXHRcdFx0em9uZSA9IGdldFpvbmUobmFtZSksXG5cdFx0XHRvdXQgID0gbW9tZW50LnV0Yy5hcHBseShudWxsLCBhcmdzKTtcblxuXHRcdGlmICh6b25lICYmICFtb21lbnQuaXNNb21lbnQoaW5wdXQpICYmIG5lZWRzT2Zmc2V0KG91dCkpIHtcblx0XHRcdG91dC5hZGQoem9uZS5wYXJzZShvdXQpLCAnbWludXRlcycpO1xuXHRcdH1cblxuXHRcdG91dC50eihuYW1lKTtcblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHR0ei52ZXJzaW9uICAgICAgPSBWRVJTSU9OO1xuXHR0ei5kYXRhVmVyc2lvbiAgPSAnJztcblx0dHouX3pvbmVzICAgICAgID0gem9uZXM7XG5cdHR6Ll9saW5rcyAgICAgICA9IGxpbmtzO1xuXHR0ei5fbmFtZXMgICAgICAgPSBuYW1lcztcblx0dHouYWRkICAgICAgICAgID0gYWRkWm9uZTtcblx0dHoubGluayAgICAgICAgID0gYWRkTGluaztcblx0dHoubG9hZCAgICAgICAgID0gbG9hZERhdGE7XG5cdHR6LnpvbmUgICAgICAgICA9IGdldFpvbmU7XG5cdHR6LnpvbmVFeGlzdHMgICA9IHpvbmVFeGlzdHM7IC8vIGRlcHJlY2F0ZWQgaW4gMC4xLjBcblx0dHouZ3Vlc3MgICAgICAgID0gZ3Vlc3M7XG5cdHR6Lm5hbWVzICAgICAgICA9IGdldE5hbWVzO1xuXHR0ei5ab25lICAgICAgICAgPSBab25lO1xuXHR0ei51bnBhY2sgICAgICAgPSB1bnBhY2s7XG5cdHR6LnVucGFja0Jhc2U2MCA9IHVucGFja0Jhc2U2MDtcblx0dHoubmVlZHNPZmZzZXQgID0gbmVlZHNPZmZzZXQ7XG5cdHR6Lm1vdmVJbnZhbGlkRm9yd2FyZCAgID0gdHJ1ZTtcblx0dHoubW92ZUFtYmlndW91c0ZvcndhcmQgPSBmYWxzZTtcblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0SW50ZXJmYWNlIHdpdGggTW9tZW50LmpzXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHR2YXIgZm4gPSBtb21lbnQuZm47XG5cblx0bW9tZW50LnR6ID0gdHo7XG5cblx0bW9tZW50LmRlZmF1bHRab25lID0gbnVsbDtcblxuXHRtb21lbnQudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKG1vbSwga2VlcFRpbWUpIHtcblx0XHR2YXIgem9uZSA9IG1vbWVudC5kZWZhdWx0Wm9uZSxcblx0XHRcdG9mZnNldDtcblxuXHRcdGlmIChtb20uX3ogPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHpvbmUgJiYgbmVlZHNPZmZzZXQobW9tKSAmJiAhbW9tLl9pc1VUQykge1xuXHRcdFx0XHRtb20uX2QgPSBtb21lbnQudXRjKG1vbS5fYSkuX2Q7XG5cdFx0XHRcdG1vbS51dGMoKS5hZGQoem9uZS5wYXJzZShtb20pLCAnbWludXRlcycpO1xuXHRcdFx0fVxuXHRcdFx0bW9tLl96ID0gem9uZTtcblx0XHR9XG5cdFx0aWYgKG1vbS5feikge1xuXHRcdFx0b2Zmc2V0ID0gbW9tLl96LnV0Y09mZnNldChtb20pO1xuXHRcdFx0aWYgKE1hdGguYWJzKG9mZnNldCkgPCAxNikge1xuXHRcdFx0XHRvZmZzZXQgPSBvZmZzZXQgLyA2MDtcblx0XHRcdH1cblx0XHRcdGlmIChtb20udXRjT2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bW9tLnV0Y09mZnNldCgtb2Zmc2V0LCBrZWVwVGltZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtb20uem9uZShvZmZzZXQsIGtlZXBUaW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Zm4udHogPSBmdW5jdGlvbiAobmFtZSwga2VlcFRpbWUpIHtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpbWUgem9uZSBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIGdvdCAnICsgbmFtZSArICcgWycgKyB0eXBlb2YgbmFtZSArICddJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl96ID0gZ2V0Wm9uZShuYW1lKTtcblx0XHRcdGlmICh0aGlzLl96KSB7XG5cdFx0XHRcdG1vbWVudC51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nRXJyb3IoXCJNb21lbnQgVGltZXpvbmUgaGFzIG5vIGRhdGEgZm9yIFwiICsgbmFtZSArIFwiLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS90aW1lem9uZS9kb2NzLyMvZGF0YS1sb2FkaW5nLy5cIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3oubmFtZTsgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGFiYnJXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3ouYWJicih0aGlzKTsgfVxuXHRcdFx0cmV0dXJuIG9sZC5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiByZXNldFpvbmVXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5feiA9IG51bGw7XG5cdFx0XHRyZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblx0fVxuXG5cdGZuLnpvbmVOYW1lID0gYWJicldyYXAoZm4uem9uZU5hbWUpO1xuXHRmbi56b25lQWJiciA9IGFiYnJXcmFwKGZuLnpvbmVBYmJyKTtcblx0Zm4udXRjICAgICAgPSByZXNldFpvbmVXcmFwKGZuLnV0Yyk7XG5cblx0bW9tZW50LnR6LnNldERlZmF1bHQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA5KSkge1xuXHRcdFx0bG9nRXJyb3IoJ01vbWVudCBUaW1lem9uZSBzZXREZWZhdWx0KCkgcmVxdWlyZXMgTW9tZW50LmpzID49IDIuOS4wLiBZb3UgYXJlIHVzaW5nIE1vbWVudC5qcyAnICsgbW9tZW50LnZlcnNpb24gKyAnLicpO1xuXHRcdH1cblx0XHRtb21lbnQuZGVmYXVsdFpvbmUgPSBuYW1lID8gZ2V0Wm9uZShuYW1lKSA6IG51bGw7XG5cdFx0cmV0dXJuIG1vbWVudDtcblx0fTtcblxuXHQvLyBDbG9uaW5nIGEgbW9tZW50IHNob3VsZCBpbmNsdWRlIHRoZSBfeiBwcm9wZXJ0eS5cblx0dmFyIG1vbWVudFByb3BlcnRpZXMgPSBtb21lbnQubW9tZW50UHJvcGVydGllcztcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb21lbnRQcm9wZXJ0aWVzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRcdC8vIG1vbWVudCAyLjguMStcblx0XHRtb21lbnRQcm9wZXJ0aWVzLnB1c2goJ196Jyk7XG5cdFx0bW9tZW50UHJvcGVydGllcy5wdXNoKCdfYScpO1xuXHR9IGVsc2UgaWYgKG1vbWVudFByb3BlcnRpZXMpIHtcblx0XHQvLyBtb21lbnQgMi43LjBcblx0XHRtb21lbnRQcm9wZXJ0aWVzLl96ID0gbnVsbDtcblx0fVxuXG5cdC8vIElOSkVDVCBEQVRBXG5cblx0cmV0dXJuIG1vbWVudDtcbn0pKTtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNGaW5pdGUgPSByb290LmlzRmluaXRlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZmluaXRlIHByaW1pdGl2ZSBudW1iZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGJhc2VkIG9uXG4gKiBbYE51bWJlci5pc0Zpbml0ZWBdKGh0dHBzOi8vbWRuLmlvL051bWJlci9pc0Zpbml0ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmaW5pdGUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGaW5pdGUoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0Zpbml0ZSgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaW5pdGUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiBuYXRpdmVJc0Zpbml0ZSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRmluaXRlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNldDogcmVxdWlyZSgnLi9zZXQnKSxcbiAgU3RhdGljOiByZXF1aXJlKCcuL3N0YXRpYycpXG59OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZm91bmRhdGlvbkFwaSA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZvdW5kYXRpb24tYXBpJyk7XG52YXIgTm90aWZpY2F0aW9uID0gcmVxdWlyZSgnLi9ub3RpZmljYXRpb24nKTtcbnZhciBBbmltYXRpb24gPSByZXF1aXJlKCcuLi91dGlscy9hbmltYXRpb24nKTtcbnZhciBjcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZShcImNyZWF0ZS1yZWFjdC1jbGFzc1wiKTtcblxudmFyIE5vdGlmaWNhdGlvblNldCA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge25vdGlmaWNhdGlvbnM6IFtdfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBmb3VuZGF0aW9uQXBpLnN1YnNjcmliZSh0aGlzLnByb3BzLmlkLCBmdW5jdGlvbihuYW1lLCBtc2cpIHtcbiAgICAgIGlmKG1zZyA9PT0gJ2NsZWFyYWxsJykge1xuICAgICAgICB0aGlzLmNsZWFyQWxsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZE5vdGlmaWNhdGlvbihtc2cpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG4gIGFkZE5vdGlmaWNhdGlvbjogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgIG5vdGlmaWNhdGlvbi5pZCA9IGZvdW5kYXRpb25BcGkuZ2VuZXJhdGVVdWlkKCk7XG4gICAgdmFyIG5vdGlmaWNhdGlvbnMgPSB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbnMuY29uY2F0KG5vdGlmaWNhdGlvbik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBub3RpZmljYXRpb25zOiBub3RpZmljYXRpb25zXG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZU5vdGlmY2F0aW9uOiBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBub3RpZmljYXRpb25zID0gW11cbiAgICAgIHRoaXMuc3RhdGUubm90aWZpY2F0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5pZCAhPT0gaWQpIHtcbiAgICAgICAgICBub3RpZmljYXRpb25zLnB1c2gobm90aWZpY2F0aW9uKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBub3RpZmljYXRpb25zOiBub3RpZmljYXRpb25zXG4gICAgICB9KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LmJpbmQodGhpcyk7XG4gIH0sXG4gIGNsZWFyQWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bm90aWZpY2F0aW9uczogW119KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vdGlmaWNhdGlvbnMgPSB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbnMubWFwKGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOb3RpZmljYXRpb24ga2V5PXtub3RpZmljYXRpb24uaWR9IHsuLi5ub3RpZmljYXRpb259IGNsb3NlSGFuZGxlcj17dGhpcy5yZW1vdmVOb3RpZmNhdGlvbihub3RpZmljYXRpb24uaWQpfSBjbGFzc05hbWU9J2lzLWFjdGl2ZSc+XG4gICAgICAgICAge25vdGlmaWNhdGlvbi5jb250ZW50fVxuICAgICAgICA8L05vdGlmaWNhdGlvbj5cbiAgICAgICk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2Pntub3RpZmljYXRpb25zfTwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90aWZpY2F0aW9uU2V0O1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZShcImNyZWF0ZS1yZWFjdC1jbGFzc1wiKTtcblxudmFyIE5vdGlmaWNhdGlvbiA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgICAgY29sb3I6ICdzdWNjZXNzJyxcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICBjb250ZW50OiBudWxsLFxuICAgICAgd3JhcHBlckVsZW1lbnQ6IFwicFwiXG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSAnbm90aWZpY2F0aW9uICcgKyB0aGlzLnByb3BzLnBvc2l0aW9uICsgJyAnICsgdGhpcy5wcm9wcy5jb2xvcjtcbiAgICBjbGFzc2VzICs9ICAnICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpO1xuICAgIHZhciBpbWFnZU5vZGUgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmltYWdlKSB7XG4gICAgICBpbWFnZU5vZGUgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWljb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cInt7IGltYWdlIH19XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gZGF0YS1jbG9zYWJsZT17dHJ1ZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlSGFuZGxlcn0+JnRpbWVzOzwvYT5cbiAgICAgICAge2ltYWdlTm9kZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tY29udGVudFwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMud3JhcHBlckVsZW1lbnQsIG51bGwsIHRoaXMucHJvcHMuY2hpbGRyZW4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vdGlmaWNhdGlvbjtcbiIsIi8vIHNvbWUgcGFydHMgb2YgY29kZSBmcm9tIHJlYWN0L2xpYi9SZWFjdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLmpzXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0gcmVxdWlyZSgnLi9SZWFjdFRyYW5zaXRpb25FdmVudHMnKTtcbnZhciBDU1NDb3JlID0gcmVxdWlyZSgnLi9jc3Njb3JlJyk7XG52YXIgY3JlYXRlUmVhY3RDbGFzcyA9IHJlcXVpcmUoXCJjcmVhdGUtcmVhY3QtY2xhc3NcIik7XG5cbnZhciBjbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xudmFyIFRJQ0sgPSAxNztcblxudmFyIEFuaW1hdGlvbiA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgIH07XG4gIH0sXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgYW5pbWF0aW9uSW46ICcnLFxuICAgICAgYW5pbWF0aW9uT3V0OiAnJ1xuICAgIH07XG4gIH0sXG4gIHJlZmxvdzogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5vZmZzZXRXaWR0aDtcbiAgfSxcbiAgcmVzZXQ6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAwO1xuICAgIENTU0NvcmUucmVtb3ZlQ2xhc3Mobm9kZSwgJ25nLWVudGVyJyk7XG4gICAgQ1NTQ29yZS5yZW1vdmVDbGFzcyhub2RlLCAnbmctbGVhdmUnKTtcbiAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsICduZy1lbnRlci1hY3RpdmUnKTtcbiAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsICduZy1sZWF2ZS1hY3RpdmUnKTtcbiAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsIHRoaXMucHJvcHMuYW5pbWF0aW9uSW4pO1xuICAgIENTU0NvcmUucmVtb3ZlQ2xhc3Mobm9kZSwgdGhpcy5wcm9wcy5hbmltYXRpb25PdXQpO1xuICB9LFxuICBmaW5pc2hBbmltYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHRoaXMucmVzZXQobm9kZSk7XG4gICAgQ1NTQ29yZS5yZW1vdmVDbGFzcyhub2RlLCB0aGlzLnByb3BzLmFjdGl2ZT8gJycgOiAnaXMtYWN0aXZlJyk7XG4gICAgdGhpcy5yZWZsb3cobm9kZSk7XG4gICAgUmVhY3RUcmFuc2l0aW9uRXZlbnRzLnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgdGhpcy5maW5pc2hBbmltYXRpb24pO1xuICB9LFxuICBhbmltYXRlOiBmdW5jdGlvbihhbmltYXRpb25DbGFzcywgYW5pbWF0aW9uVHlwZSkge1xuICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGluaXRDbGFzcyA9ICduZy0nICsgYW5pbWF0aW9uVHlwZTtcbiAgICB2YXIgYWN0aXZlQ2xhc3MgPSBpbml0Q2xhc3MgKyAnLWFjdGl2ZSc7XG5cblxuICAgIHRoaXMucmVzZXQobm9kZSk7XG4gICAgQ1NTQ29yZS5hZGRDbGFzcyhub2RlLCBhbmltYXRpb25DbGFzcyk7XG4gICAgQ1NTQ29yZS5hZGRDbGFzcyhub2RlLCBpbml0Q2xhc3MpO1xuICAgIENTU0NvcmUuYWRkQ2xhc3Mobm9kZSwgJ2lzLWFjdGl2ZScpO1xuXG4gICAgLy9mb3JjZSBhIFwidGlja1wiXG4gICAgdGhpcy5yZWZsb3cobm9kZSk7XG5cbiAgICAvL2FjdGl2YXRlXG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICBDU1NDb3JlLmFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzKTtcblxuICAgIFJlYWN0VHJhbnNpdGlvbkV2ZW50cy5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIHRoaXMuZmluaXNoQW5pbWF0aW9uKTtcbiAgfSxcbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5hY3RpdmUgIT09IHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICB2YXIgYW5pbWF0aW9uQ2xhc3MgPSB0aGlzLnByb3BzLmFjdGl2ZSA/IHRoaXMucHJvcHMuYW5pbWF0aW9uSW46IHRoaXMucHJvcHMuYW5pbWF0aW9uT3V0O1xuICAgICAgdmFyIGFuaW1hdGlvblR5cGUgPSB0aGlzLnByb3BzLmFjdGl2ZSA/ICdlbnRlcic6ICdsZWF2ZSc7XG4gICAgICB0aGlzLmFuaW1hdGUoYW5pbWF0aW9uQ2xhc3MsIGFuaW1hdGlvblR5cGUpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB2YXIgZXh0cmFQcm9wcyA9IHt9O1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGV4dHJhUHJvcHMpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBbmltYXRpb247XG4iLCIvKipcbiogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4qIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbipcbiogQHByb3ZpZGVzTW9kdWxlIFJlYWN0VHJhbnNpdGlvbkV2ZW50c1xuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCdleGVudicpO1xuXG4vKipcbiogRVZFTlRfTkFNRV9NQVAgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hpY2ggZXZlbnQgZmlyZWQgd2hlbiBhXG4qIHRyYW5zaXRpb24vYW5pbWF0aW9uIGVuZHMsIGJhc2VkIG9uIHRoZSBzdHlsZSBwcm9wZXJ0eSB1c2VkIHRvXG4qIGRlZmluZSB0aGF0IGV2ZW50LlxuKi9cbnZhciBFVkVOVF9OQU1FX01BUCA9IHtcbiB0cmFuc2l0aW9uZW5kOiB7XG4gICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgJ01velRyYW5zaXRpb24nOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgJ21zVHJhbnNpdGlvbic6ICdNU1RyYW5zaXRpb25FbmQnXG4gfSxcblxuIGFuaW1hdGlvbmVuZDoge1xuICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnLFxuICAgJ1dlYmtpdEFuaW1hdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgJ01vekFuaW1hdGlvbic6ICdtb3pBbmltYXRpb25FbmQnLFxuICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAnbXNBbmltYXRpb24nOiAnTVNBbmltYXRpb25FbmQnXG4gfVxufTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuIC8vIE9uIHNvbWUgcGxhdGZvcm1zLCBpbiBwYXJ0aWN1bGFyIHNvbWUgcmVsZWFzZXMgb2YgQW5kcm9pZCA0LngsXG4gLy8gdGhlIHVuLXByZWZpeGVkIFwiYW5pbWF0aW9uXCIgYW5kIFwidHJhbnNpdGlvblwiIHByb3BlcnRpZXMgYXJlIGRlZmluZWQgb24gdGhlXG4gLy8gc3R5bGUgb2JqZWN0IGJ1dCB0aGUgZXZlbnRzIHRoYXQgZmlyZSB3aWxsIHN0aWxsIGJlIHByZWZpeGVkLCBzbyB3ZSBuZWVkXG4gLy8gdG8gY2hlY2sgaWYgdGhlIHVuLXByZWZpeGVkIGV2ZW50cyBhcmUgdXNlYWJsZSwgYW5kIGlmIG5vdCByZW1vdmUgdGhlbVxuIC8vIGZyb20gdGhlIG1hcFxuIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gfVxuXG4gaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiB9XG5cbiBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgaWYgKHN0eWxlTmFtZSBpbiBzdHlsZSkge1xuICAgICAgIGVuZEV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgYnJlYWs7XG4gICAgIH1cbiAgIH1cbiB9XG59XG5cbmlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcbiBkZXRlY3RFdmVudHMoKTtcbn1cblxuLy8gV2UgdXNlIHRoZSByYXcge2FkZHxyZW1vdmV9RXZlbnRMaXN0ZW5lcigpIGNhbGwgYmVjYXVzZSBFdmVudExpc3RlbmVyXG4vLyBkb2VzIG5vdCBrbm93IGhvdyB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGFuZCB3ZSByZWFsbHkgc2hvdWxkXG4vLyBjbGVhbiB1cC4gQWxzbywgdGhlc2UgZXZlbnRzIGFyZSBub3QgdHJpZ2dlcmVkIGluIG9sZGVyIGJyb3dzZXJzXG4vLyBzbyB3ZSBzaG91bGQgYmUgQS1PSyBoZXJlLlxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBSZWFjdFRyYW5zaXRpb25FdmVudHMgPSB7XG4gYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24obm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgLy8gSWYgQ1NTIHRyYW5zaXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkLCB0cmlnZ2VyIGFuIFwiZW5kIGFuaW1hdGlvblwiXG4gICAgIC8vIGV2ZW50IGltbWVkaWF0ZWx5LlxuICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgcmV0dXJuO1xuICAgfVxuICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZW5kRXZlbnQpIHtcbiAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICB9KTtcbiB9LFxuXG4gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24obm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgcmV0dXJuO1xuICAgfVxuICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZW5kRXZlbnQpIHtcbiAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICB9KTtcbiB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0VHJhbnNpdGlvbkV2ZW50cztcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBTUEFDRSA9ICcgJztcbnZhciBSRV9DTEFTUyA9IC9bXFxuXFx0XFxyXS9nO1xuXG52YXIgbm9ybSA9IGZ1bmN0aW9uIChlbGVtQ2xhc3MpIHtcbiAgcmV0dXJuIChTUEFDRSArIGVsZW1DbGFzcyArIFNQQUNFKS5yZXBsYWNlKFJFX0NMQVNTLCBTUEFDRSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9LFxuXG4gIHJlbW92ZUNsYXNzKGVsZW0sIG5lZWRsZSkge1xuICAgIHZhciBlbGVtQ2xhc3MgPSBlbGVtLmNsYXNzTmFtZS50cmltKCk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IG5vcm0oZWxlbUNsYXNzKTtcbiAgICBuZWVkbGUgPSBuZWVkbGUudHJpbSgpO1xuICAgIG5lZWRsZSA9IFNQQUNFICsgbmVlZGxlICsgU1BBQ0U7XG4gICAgd2hpbGUgKGNsYXNzTmFtZS5pbmRleE9mKG5lZWRsZSkgPj0gMCkge1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UobmVlZGxlLCBTUEFDRSk7XG4gICAgfVxuICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lLnRyaW0oKTtcbiAgfVxufTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG52YXIgZm91bmRhdGlvbkFwaSA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZvdW5kYXRpb24tYXBpJyk7XG52YXIgQW5pbWF0aW9uID0gcmVxdWlyZSgnLi4vdXRpbHMvYW5pbWF0aW9uJyk7XG52YXIgTm90aWZpY2F0aW9uID0gcmVxdWlyZSgnLi9ub3RpZmljYXRpb24nKTtcbnZhciBjcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZShcImNyZWF0ZS1yZWFjdC1jbGFzc1wiKTtcblxudmFyIE5vdGlmaWNhdGlvblN0YXRpYyA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4geyBvcGVuOiBmYWxzZSB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIGZvdW5kYXRpb25BcGkuc3Vic2NyaWJlKHRoaXMucHJvcHMuaWQsIGZ1bmN0aW9uIChuYW1lLCBtc2cpIHtcbiAgICAgIGlmIChtc2cgPT09ICdvcGVuJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgICB9IGVsc2UgaWYgKG1zZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgZm91bmRhdGlvbkFwaS51bnN1YnNjcmliZSh0aGlzLnByb3BzLmlkKTtcbiAgfSxcbiAgY2xvc2VIYW5kbGVyOiBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QW5pbWF0aW9uIGFjdGl2ZT17dGhpcy5zdGF0ZS5vcGVufSBhbmltYXRpb25Jbj1cImZhZGVJblwiIGFuaW1hdGlvbk91dD1cImZhZGVPdXRcIj5cbiAgICAgICAgPE5vdGlmaWNhdGlvbiB7Li4udGhpcy5wcm9wc30gY2xvc2VIYW5kbGVyPXt0aGlzLmNsb3NlSGFuZGxlcn0gPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L05vdGlmaWNhdGlvbj5cbiAgICAgIDwvQW5pbWF0aW9uPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vdGlmaWNhdGlvblN0YXRpYztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7O0FBU0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFhQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWJBO0FBREE7QUF5QkE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUF0UEE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFEQTtBQXFCQTtBQUNBO0FBQ0E7QUFIQTtBQXBCQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHhEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFrRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQWxCQTtBQUpBO0FBMkJBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7Ozs7QUFuTEE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFaQTtBQXFCQTtBQUNBO0FBRkE7QUFrS0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFYQTtBQW9CQTs7OztBQTNDQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTEE7Ozs7Ozs7Ozs7Ozs7QUNxQkE7QUExQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7Ozs7QUFmQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFjQTs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBREE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBbEJBO0FBUEE7QUE2QkE7Ozs7QUF2RUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBWkE7QUFzQkE7Ozs7QUF4Q0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFGQTtBQVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFOQTtBQURBO0FBV0E7Ozs7QUE5Q0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQU5BOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSxvQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFYQTtBQURBO0FBZUE7QUFqQkE7QUFvQkE7Ozs7QUFsREE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1QkE7QUFDQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBcUJBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVJBO0FBZEE7QUEwQkE7QUF0TkE7QUFDQTtBQXdOQTs7Ozs7Ozs7Ozs7Ozs7QUN4T0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5QkE7QUFDQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlhQTtBQUNBO0FBZ2JBOzs7Ozs7OztBQzFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFEQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWNBO0FBREE7QUFPQTtBQXJGQTtBQXVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBK0JBO0FBQ0E7QUFDQTtBQU1BO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaFBBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVlBO0FBdEJBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7O0FDL0NBO0FBS0E7QUFZQTtBQUNBO0FBdkJBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBcEJBO0FBd0NBO0FBckhBO0FBQ0E7QUF1SEE7Ozs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUF4S0E7QUFDQTtBQTBLQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQ0E7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBNUpBO0FBQ0E7QUE4SkE7Ozs7Ozs7Ozs7Ozs7O0FDcExBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFsRkE7QUFDQTtBQW9GQTs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBbkJBO0FBQ0E7QUEwQkE7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcmZBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHFCQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuSEE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5R0E7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsVUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBaERBO0FBQ0E7QUFrREE7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBaENBO0FBQ0E7QUFrQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5REE7QUFDQTtBQWdFQTs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0EsVUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUE3QkE7QUFDQTtBQStCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9