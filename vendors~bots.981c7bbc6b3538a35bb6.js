(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 2710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(2711);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),

/***/ 2711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ 2712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ 2846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAsyncSelect = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(2847);

var _Select2 = _interopRequireDefault(_Select);

var _utils = __webpack_require__(2857);

var _stateManager = __webpack_require__(2885);

var _stateManager2 = _interopRequireDefault(_stateManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = {
  cacheOptions: false,
  defaultOptions: false
};

var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(Async, _Component);

    function Async(props) {
      _classCallCheck(this, Async);

      var _this = _possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this));

      _this.mounted = false;
      _this.optionsCache = {};

      _this.handleInputChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange;
        // TODO

        var inputValue = (0, _utils.handleInputChange)(newValue, actionMeta, onInputChange);
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

    _createClass(Async, [{
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
            props = _objectWithoutProperties(_props, ['loadOptions']);

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
          _react2.default.createElement(SelectComponent, _extends({}, props, {
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
  }(_react.Component), _class.defaultProps = defaultProps, _temp;
};

exports.makeAsyncSelect = makeAsyncSelect;
exports.default = makeAsyncSelect((0, _stateManager2.default)(_Select2.default));

/***/ }),

/***/ 2847:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _memoizeOne = __webpack_require__(2848);

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _Menu = __webpack_require__(2849);

var _reactFastCompare = __webpack_require__(2858);

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _filters = __webpack_require__(2859);

var _index = __webpack_require__(2861);

var _index2 = __webpack_require__(2870);

var _utils = __webpack_require__(2857);

var _builtins = __webpack_require__(2871);

var _index3 = __webpack_require__(2872);

var _styles = __webpack_require__(2883);

var _theme = __webpack_require__(2884);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: (0, _utils.isTouchCapable)(),
  captureMenuScroll: !(0, _utils.isTouchCapable)(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: (0, _filters.createFilter)(),
  formatGroupLabel: _builtins.formatGroupLabel,
  getOptionLabel: _builtins.getOptionLabel,
  getOptionValue: _builtins.getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: _builtins.isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !(0, _utils.isMobileDevice)(),
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
  _inherits(Select, _Component);

  // Lifecycle
  // ------------------------------

  // Refs
  // ------------------------------

  // Misc. Instance Properties
  // ------------------------------

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value;

    _this.cacheComponents = (0, _memoizeOne2.default)(_this.cacheComponents, _reactFastCompare2.default).bind(_this);
    _this.cacheComponents(props.components);
    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var selectValue = (0, _utils.cleanValue)(value);
    var menuOptions = _this.buildMenuOptions(props, selectValue);

    _this.state.menuOptions = menuOptions;
    _this.state.selectValue = selectValue;
    return _this;
  } // TODO


  _createClass(Select, [{
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
        var _selectValue = (0, _utils.cleanValue)(nextProps.value);
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
        (0, _utils.scrollIntoView)(this.menuListRef, this.focusedOptionRef);
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
        return _theme.defaultTheme;
      }
      // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.
      if (typeof this.props.theme === 'function') {
        return this.props.theme(_theme.defaultTheme);
      }
      // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.
      return _extends({}, _theme.defaultTheme, this.props.theme);
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

      var cx = _utils.classNames.bind(null, cxPrefix);
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
    value: function isOptionDisabled(option, selectValue) {
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
    value: function formatGroupLabel(data) {
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

      var focusedValueMsg = focusedValue ? (0, _index2.valueFocusAriaMessage)({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : '';
      // An aria live message representing the currently focused option in the select.
      var focusedOptionMsg = focusedOption && menuIsOpen ? (0, _index2.optionFocusAriaMessage)({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : '';
      // An aria live message representing the set of focusable results and current searchterm/inputvalue.
      var resultsMsg = (0, _index2.resultsAriaMessage)({
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
        return _react2.default.createElement(_index.DummyInput, {
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _utils.noop,
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


      return _react2.default.createElement(Input, _extends({
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
        return inputValue ? null : _react2.default.createElement(
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
          return _react2.default.createElement(
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
      return _react2.default.createElement(
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

      return _react2.default.createElement(ClearIndicator, _extends({}, commonProps, {
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
      return _react2.default.createElement(LoadingIndicator, _extends({}, commonProps, {
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


      return _react2.default.createElement(IndicatorSeparator, _extends({}, commonProps, {
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

      return _react2.default.createElement(DropdownIndicator, _extends({}, commonProps, {
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
          Menu = _components3.Menu,
          MenuList = _components3.MenuList,
          MenuPortal = _components3.MenuPortal,
          LoadingMessage = _components3.LoadingMessage,
          NoOptionsMessage = _components3.NoOptionsMessage,
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

        return _react2.default.createElement(
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
                group = _objectWithoutProperties(item, ['type']);

            var headingId = item.key + '-heading';

            return _react2.default.createElement(
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
        menuUI = _react2.default.createElement(
          LoadingMessage,
          commonProps,
          message
        );
      } else {
        var _message = noOptionsMessage({ inputValue: inputValue });
        if (_message === null) return null;
        menuUI = _react2.default.createElement(
          NoOptionsMessage,
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

      var menuElement = _react2.default.createElement(
        _Menu.MenuPlacer,
        _extends({}, commonProps, menuPlacementProps),
        function (_ref2) {
          var ref = _ref2.ref,
              _ref2$placerProps = _ref2.placerProps,
              placement = _ref2$placerProps.placement,
              maxHeight = _ref2$placerProps.maxHeight;
          return _react2.default.createElement(
            Menu,
            _extends({}, commonProps, menuPlacementProps, {
              innerRef: ref,
              innerProps: {
                onMouseDown: _this5.onMenuMouseDown,
                onMouseMove: _this5.onMenuMouseMove
              },
              isLoading: isLoading,
              placement: placement
            }),
            _react2.default.createElement(
              _index.ScrollCaptor,
              {
                isEnabled: captureMenuScroll,
                onTopArrive: onMenuScrollToTop,
                onBottomArrive: onMenuScrollToBottom
              },
              _react2.default.createElement(
                _index.ScrollBlock,
                { isEnabled: menuShouldBlockScroll },
                _react2.default.createElement(
                  MenuList,
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
      return menuPortalTarget || menuPosition === 'fixed' ? _react2.default.createElement(
        MenuPortal,
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
          return _react2.default.createElement('input', { name: name, type: 'hidden', value: _value });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return _react2.default.createElement('input', {
              key: 'i-' + i,
              name: name,
              type: 'hidden',
              value: _this6.getOptionValue(opt)
            });
          }) : _react2.default.createElement('input', { name: name, type: 'hidden' });

          return _react2.default.createElement(
            'div',
            null,
            input
          );
        }
      } else {
        var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
        return _react2.default.createElement('input', { name: name, type: 'hidden', value: _value2 });
      }
    }
  }, {
    key: 'renderLiveRegion',
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return _react2.default.createElement(
        _index.A11yText,
        { 'aria-live': 'assertive' },
        _react2.default.createElement(
          'p',
          { id: 'aria-selection-event' },
          '\xA0',
          this.state.ariaLiveSelection
        ),
        _react2.default.createElement(
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

      return _react2.default.createElement(
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
        _react2.default.createElement(
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
          _react2.default.createElement(
            ValueContainer,
            _extends({}, commonProps, { isDisabled: isDisabled }),
            this.renderPlaceholderOrValue(),
            this.renderInput()
          ),
          _react2.default.createElement(
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
}(_react.Component);

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

  this.cacheComponents = function (components) {
    _this7.components = (0, _index3.defaultComponents)({ components: components });
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
        _this7.setValue([].concat(_toConsumableArray(_selectValue3), [newValue]), 'select-option', newValue);
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
    var base = _styles.defaultStyles[key](props);
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
      ariaLiveSelection: (0, _index2.valueEventAriaMessage)(event, context)
    });
  };

  this.announceAriaLiveContext = function (_ref4) {
    var event = _ref4.event,
        context = _ref4.context;

    _this7.setState({
      ariaLiveContext: (0, _index2.instructionsAriaMessage)(event, _extends({}, context, {
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
      if (event.target instanceof HTMLElement && (0, _utils.isDocumentElement)(event.target)) {
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

exports.default = Select;

/***/ }),

/***/ 2849:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuPortal = exports.menuPortalCSS = exports.LoadingMessage = exports.NoOptionsMessage = exports.loadingMessageCSS = exports.noOptionsMessageCSS = exports.MenuList = exports.menuListCSS = exports.MenuPlacer = exports.menuCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getMenuPlacement = getMenuPlacement;

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

var _reactDom = __webpack_require__(398);

var _propTypes = __webpack_require__(813);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(2857);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  var scrollParent = (0, _utils.getScrollParent)(menuEl);
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
  var scrollTop = (0, _utils.getScrollTop)(scrollParent);

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
          (0, _utils.animatedScrollTo)(scrollParent, scrollDown, scrollDuration);
        }

        return { placement: 'bottom', maxHeight: maxHeight };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          (0, _utils.animatedScrollTo)(scrollParent, scrollDown, scrollDuration);
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
        (0, _utils.scrollTo)(scrollParent, scrollDown);
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
          (0, _utils.animatedScrollTo)(scrollParent, scrollUp, scrollDuration);
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
          (0, _utils.animatedScrollTo)(scrollParent, scrollUp, scrollDuration);
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

var menuCSS = exports.menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {}, _defineProperty(_ref3, alignToControl(placement), '100%'), _defineProperty(_ref3, 'backgroundColor', colors.neutral0), _defineProperty(_ref3, 'borderRadius', borderRadius), _defineProperty(_ref3, 'boxShadow', '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), _defineProperty(_ref3, 'marginBottom', spacing.menuGutter), _defineProperty(_ref3, 'marginTop', spacing.menuGutter), _defineProperty(_ref3, 'position', 'absolute'), _defineProperty(_ref3, 'width', '100%'), _defineProperty(_ref3, 'zIndex', 1), _ref3;
};

// NOTE: internal only

var MenuPlacer = exports.MenuPlacer = function (_Component) {
  _inherits(MenuPlacer, _Component);

  function MenuPlacer() {
    var _ref4;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuPlacer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = MenuPlacer.__proto__ || Object.getPrototypeOf(MenuPlacer)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuPlacer, [{
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
}(_react.Component);

MenuPlacer.contextTypes = {
  getPortalPlacement: _propTypes2.default.func
};


var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;

  var cn = cx( /*#__PURE__*/(0, _emotion.css)(getStyles('menu', props)), { menu: true }, className);

  return _react2.default.createElement(
    'div',
    _extends({ className: cn }, innerProps, { ref: innerRef }),
    children
  );
};

exports.default = Menu;

// ==============================
// Menu List
// ==============================

var menuListCSS = exports.menuListCSS = function menuListCSS(_ref5) {
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
var MenuList = exports.MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;

  return _react2.default.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('menuList', props)), {
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
var noOptionsMessageCSS = exports.noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = exports.loadingMessageCSS = noticeCSS;

var NoOptionsMessage = exports.NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('noOptionsMessage', props)), {
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

var LoadingMessage = exports.LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('loadingMessage', props)), {
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

var menuPortalCSS = exports.menuPortalCSS = function menuPortalCSS(_ref7) {
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

var MenuPortal = exports.MenuPortal = function (_Component2) {
  _inherits(MenuPortal, _Component2);

  function MenuPortal() {
    var _ref8;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, MenuPortal);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref8 = MenuPortal.__proto__ || Object.getPrototypeOf(MenuPortal)).call.apply(_ref8, [this].concat(args))), _this2), _this2.state = { placement: null }, _this2.getPortalPlacement = function (_ref9) {
      var placement = _ref9.placement;

      var initialPlacement = coercePlacement(_this2.props.menuPlacement);

      // avoid re-renders if the placement has not changed
      if (placement !== initialPlacement) {
        _this2.setState({ placement: placement });
      }
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(MenuPortal, [{
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
      var rect = (0, _utils.getBoundingClientObj)(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = { offset: offset, position: position, rect: rect };

      // same wrapper element whether fixed or portalled
      var menuWrapper = _react2.default.createElement(
        'div',
        { className: /*#__PURE__*/ /*#__PURE__*/(0, _emotion.css)(getStyles('menuPortal', state)) },
        children
      );

      return appendTo ? (0, _reactDom.createPortal)(menuWrapper, appendTo) : menuWrapper;
    }
  }]);

  return MenuPortal;
}(_react.Component);

MenuPortal.childContextTypes = {
  getPortalPlacement: _propTypes2.default.func
};

/***/ }),

/***/ 2857:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanValue = exports.emptyString = exports.noop = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.classNames = classNames;
exports.handleInputChange = handleInputChange;
exports.isDocumentElement = isDocumentElement;
exports.normalizedHeight = normalizedHeight;
exports.getScrollTop = getScrollTop;
exports.scrollTo = scrollTo;
exports.getScrollParent = getScrollParent;
exports.animatedScrollTo = animatedScrollTo;
exports.scrollIntoView = scrollIntoView;
exports.getBoundingClientObj = getBoundingClientObj;
exports.toKey = toKey;
exports.isTouchCapable = isTouchCapable;
exports.isMobileDevice = isMobileDevice;

var _raf = __webpack_require__(834);

var _raf2 = _interopRequireDefault(_raf);

__webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==============================
// NO OP
// ==============================

var noop = exports.noop = function noop() {};
var emptyString = exports.emptyString = function emptyString() {
  return '';
};

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

var cleanValue = exports.cleanValue = function cleanValue(value) {
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

// Normalized Scroll Top
// ------------------------------

function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }

  return el.clientHeight;
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
      (0, _raf2.default)(animateScroll);
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
// String to Key (kebabify)
// ==============================

function toKey(str) {
  return str.replace(/\W/g, '-');
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

/***/ }),

/***/ 2858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = exportedEqual;
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
};

/***/ }),

/***/ 2859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _diacritics = __webpack_require__(2860);

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};
var defaultStringify = function defaultStringify(option) {
  return option.label + ' ' + option.value;
};

var createFilter = exports.createFilter = function createFilter(config) {
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
      input = (0, _diacritics.stripDiacritics)(input);
      candidate = (0, _diacritics.stripDiacritics)(candidate);
    }
    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

/***/ }),

/***/ 2860:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var diacritics = [{ base: 'A', letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { base: 'AA', letters: /[\uA732]/g }, { base: 'AE', letters: /[\u00C6\u01FC\u01E2]/g }, { base: 'AO', letters: /[\uA734]/g }, { base: 'AU', letters: /[\uA736]/g }, { base: 'AV', letters: /[\uA738\uA73A]/g }, { base: 'AY', letters: /[\uA73C]/g }, { base: 'B', letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { base: 'C', letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { base: 'D', letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { base: 'DZ', letters: /[\u01F1\u01C4]/g }, { base: 'Dz', letters: /[\u01F2\u01C5]/g }, { base: 'E', letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { base: 'F', letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { base: 'G', letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { base: 'H', letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { base: 'I', letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { base: 'J', letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { base: 'K', letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { base: 'L', letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { base: 'LJ', letters: /[\u01C7]/g }, { base: 'Lj', letters: /[\u01C8]/g }, { base: 'M', letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { base: 'N', letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { base: 'NJ', letters: /[\u01CA]/g }, { base: 'Nj', letters: /[\u01CB]/g }, { base: 'O', letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { base: 'OI', letters: /[\u01A2]/g }, { base: 'OO', letters: /[\uA74E]/g }, { base: 'OU', letters: /[\u0222]/g }, { base: 'P', letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { base: 'Q', letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { base: 'R', letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { base: 'S', letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { base: 'T', letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { base: 'TZ', letters: /[\uA728]/g }, { base: 'U', letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { base: 'V', letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { base: 'VY', letters: /[\uA760]/g }, { base: 'W', letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { base: 'X', letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { base: 'Y', letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { base: 'Z', letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { base: 'a', letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { base: 'aa', letters: /[\uA733]/g }, { base: 'ae', letters: /[\u00E6\u01FD\u01E3]/g }, { base: 'ao', letters: /[\uA735]/g }, { base: 'au', letters: /[\uA737]/g }, { base: 'av', letters: /[\uA739\uA73B]/g }, { base: 'ay', letters: /[\uA73D]/g }, { base: 'b', letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { base: 'c', letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { base: 'd', letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { base: 'dz', letters: /[\u01F3\u01C6]/g }, { base: 'e', letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { base: 'f', letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { base: 'g', letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { base: 'h', letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { base: 'hv', letters: /[\u0195]/g }, { base: 'i', letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { base: 'j', letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { base: 'k', letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { base: 'l', letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { base: 'lj', letters: /[\u01C9]/g }, { base: 'm', letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { base: 'n', letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { base: 'nj', letters: /[\u01CC]/g }, { base: 'o', letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { base: 'oi', letters: /[\u01A3]/g }, { base: 'ou', letters: /[\u0223]/g }, { base: 'oo', letters: /[\uA74F]/g }, { base: 'p', letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { base: 'q', letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { base: 'r', letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { base: 's', letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { base: 't', letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { base: 'tz', letters: /[\uA729]/g }, { base: 'u', letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { base: 'v', letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { base: 'vy', letters: /[\uA761]/g }, { base: 'w', letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { base: 'x', letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { base: 'y', letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { base: 'z', letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = exports.stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < diacritics.length; i++) {
		str = str.replace(diacritics[i].letters, diacritics[i].base);
	}
	return str;
};

/***/ }),

/***/ 2861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _A11yText = __webpack_require__(2862);

Object.defineProperty(exports, 'A11yText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_A11yText).default;
  }
});

var _DummyInput = __webpack_require__(2863);

Object.defineProperty(exports, 'DummyInput', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DummyInput).default;
  }
});

var _NodeResolver = __webpack_require__(2864);

Object.defineProperty(exports, 'NodeResolver', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NodeResolver).default;
  }
});

var _ScrollBlock = __webpack_require__(2865);

Object.defineProperty(exports, 'ScrollBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollBlock).default;
  }
});

var _ScrollCaptor = __webpack_require__(2869);

Object.defineProperty(exports, 'ScrollCaptor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollCaptor).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 2862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Assistive text to describe visual elements. Hidden for sighted users.
var A11yText = function A11yText(props) {
  return _react2.default.createElement('span', _extends({
    className: /*#__PURE__*/ /*#__PURE__*/(0, _emotion.css)({
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

exports.default = A11yText;

/***/ }),

/***/ 2863:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DummyInput = function (_Component) {
  _inherits(DummyInput, _Component);

  function DummyInput() {
    _classCallCheck(this, DummyInput);

    return _possibleConstructorReturn(this, (DummyInput.__proto__ || Object.getPrototypeOf(DummyInput)).apply(this, arguments));
  }

  _createClass(DummyInput, [{
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
          props = _objectWithoutProperties(_props, ['in', 'out', 'onExited', 'appear', 'enter', 'exit', 'innerRef', 'emotion']);

      return _react2.default.createElement('input', _extends({
        ref: innerRef
      }, props, {
        className: /*#__PURE__*/ /*#__PURE__*/(0, _emotion.css)({
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
}(_react.Component);

exports.default = DummyInput;

/***/ }),

/***/ 2864:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _reactDom = __webpack_require__(398);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeResolver = function (_Component) {
  _inherits(NodeResolver, _Component);

  function NodeResolver() {
    _classCallCheck(this, NodeResolver);

    return _possibleConstructorReturn(this, (NodeResolver.__proto__ || Object.getPrototypeOf(NodeResolver)).apply(this, arguments));
  }

  _createClass(NodeResolver, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.innerRef((0, _reactDom.findDOMNode)(this));
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
}(_react.Component);

exports.default = NodeResolver;

/***/ }),

/***/ 2865:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

var _NodeResolver = __webpack_require__(2864);

var _NodeResolver2 = _interopRequireDefault(_NodeResolver);

var _index = __webpack_require__(2866);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref

var ScrollBlock = function (_PureComponent) {
  _inherits(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollBlock.__proto__ || Object.getPrototypeOf(ScrollBlock)).call.apply(_ref, [this].concat(args))), _this), _this.state = { touchScrollTarget: null }, _this.getScrollTarget = function (ref) {
      if (ref === _this.state.touchScrollTarget) return;
      _this.setState({ touchScrollTarget: ref });
    }, _this.blurSelectInput = function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // must be in state to trigger a re-render, only runs once per instance


  // this will close the menu when a user clicks outside


  _createClass(ScrollBlock, [{
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', {
          onClick: this.blurSelectInput,
          className: /*#__PURE__*/ /*#__PURE__*/(0, _emotion.css)({ position: 'fixed', left: 0, bottom: 0, right: 0, top: 0 })
        }),
        _react2.default.createElement(
          _NodeResolver2.default,
          { innerRef: this.getScrollTarget },
          children
        ),
        touchScrollTarget ? _react2.default.createElement(_index2.default, { touchScrollTarget: touchScrollTarget }) : null
      );
    }
  }]);

  return ScrollBlock;
}(_react.PureComponent);

exports.default = ScrollBlock;

/***/ }),

/***/ 2866:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _constants = __webpack_require__(2867);

var _utils = __webpack_require__(2868);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var activeScrollLocks = 0;

var ScrollLock = function (_Component) {
  _inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollLock.__proto__ || Object.getPrototypeOf(ScrollLock)).call.apply(_ref, [this].concat(args))), _this), _this.originalStyles = {}, _this.listenerOptions = {
      capture: false,
      passive: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScrollLock, [{
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
        _constants.STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      }

      // apply the lock styles and padding if this is the first scroll lock
      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

        Object.keys(_constants.LOCK_STYLES).forEach(function (key) {
          var val = _constants.LOCK_STYLES[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = adjustedPadding + 'px';
        }
      }

      // account for touch devices
      if (target && (0, _utils.isTouchDevice)()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', _utils.preventTouchMove, this.listenerOptions);

        // Allow scroll on provided target
        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', _utils.preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', _utils.allowTouchMove, this.listenerOptions);
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
        _constants.STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];
          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      }

      // remove touch listeners
      if (target && (0, _utils.isTouchDevice)()) {
        target.removeEventListener('touchmove', _utils.preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', _utils.preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', _utils.allowTouchMove, this.listenerOptions);
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
}(_react.Component);

ScrollLock.defaultProps = {
  accountForScrollbars: true
};
exports.default = ScrollLock;

/***/ }),

/***/ 2867:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_KEYS = exports.STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];

var LOCK_STYLES = exports.LOCK_STYLES = {
  boxSizing: 'border-box', // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

/***/ }),

/***/ 2868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preventTouchMove = preventTouchMove;
exports.allowTouchMove = allowTouchMove;
exports.preventInertiaScroll = preventInertiaScroll;
exports.isTouchDevice = isTouchDevice;
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

/***/ }),

/***/ 2869:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _NodeResolver = __webpack_require__(2864);

var _NodeResolver2 = _interopRequireDefault(_NodeResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollCaptor = function (_Component) {
  _inherits(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollCaptor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollCaptor.__proto__ || Object.getPrototypeOf(ScrollCaptor)).call.apply(_ref, [this].concat(args))), _this), _this.isBottom = false, _this.isTop = false, _this.cancelScroll = function (event) {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScrollCaptor, [{
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
      return _react2.default.createElement(
        _NodeResolver2.default,
        { innerRef: this.getScrollTarget },
        this.props.children
      );
    }
  }]);

  return ScrollCaptor;
}(_react.Component);

var ScrollCaptorSwitch = function (_Component2) {
  _inherits(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    _classCallCheck(this, ScrollCaptorSwitch);

    return _possibleConstructorReturn(this, (ScrollCaptorSwitch.__proto__ || Object.getPrototypeOf(ScrollCaptorSwitch)).apply(this, arguments));
  }

  _createClass(ScrollCaptorSwitch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isEnabled = _props.isEnabled,
          props = _objectWithoutProperties(_props, ['isEnabled']);

      return isEnabled ? _react2.default.createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);

  return ScrollCaptorSwitch;
}(_react.Component);

ScrollCaptorSwitch.defaultProps = { isEnabled: true };
exports.default = ScrollCaptorSwitch;

/***/ }),

/***/ 2870:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var instructionsAriaMessage = exports.instructionsAriaMessage = function instructionsAriaMessage(event) {
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

var valueEventAriaMessage = exports.valueEventAriaMessage = function valueEventAriaMessage(event, context) {
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

var valueFocusAriaMessage = exports.valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return 'value ' + getOptionLabel(focusedValue) + ' focused, ' + (selectValue.indexOf(focusedValue) + 1) + ' of ' + selectValue.length + '.';
};
var optionFocusAriaMessage = exports.optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return 'option ' + getOptionLabel(focusedOption) + ' focused, ' + (options.indexOf(focusedOption) + 1) + ' of ' + options.length + '.';
};
var resultsAriaMessage = exports.resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return '' + screenReaderMessage + (inputValue ? ' for search term ' + inputValue : '') + '.';
};

/***/ }),

/***/ 2871:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatGroupLabel = exports.formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};

var getOptionLabel = exports.getOptionLabel = function getOptionLabel(option) {
  return option.label;
};

var getOptionValue = exports.getOptionValue = function getOptionValue(option) {
  return option.value;
};

var isOptionDisabled = exports.isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

/***/ }),

/***/ 2872:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultComponents = exports.components = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(389);

var _containers = __webpack_require__(2873);

var _indicators = __webpack_require__(2874);

var _Control = __webpack_require__(2875);

var _Control2 = _interopRequireDefault(_Control);

var _Group = __webpack_require__(2876);

var _Group2 = _interopRequireDefault(_Group);

var _Input = __webpack_require__(2877);

var _Input2 = _interopRequireDefault(_Input);

var _Menu = __webpack_require__(2849);

var _Menu2 = _interopRequireDefault(_Menu);

var _MultiValue = __webpack_require__(2879);

var _MultiValue2 = _interopRequireDefault(_MultiValue);

var _Option = __webpack_require__(2880);

var _Option2 = _interopRequireDefault(_Option);

var _Placeholder = __webpack_require__(2881);

var _Placeholder2 = _interopRequireDefault(_Placeholder);

var _SingleValue = __webpack_require__(2882);

var _SingleValue2 = _interopRequireDefault(_SingleValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = exports.components = {
  ClearIndicator: _indicators.ClearIndicator,
  Control: _Control2.default,
  DropdownIndicator: _indicators.DropdownIndicator,
  DownChevron: _indicators.DownChevron,
  CrossIcon: _indicators.CrossIcon,
  Group: _Group2.default,
  GroupHeading: _Group.GroupHeading,
  IndicatorsContainer: _containers.IndicatorsContainer,
  IndicatorSeparator: _indicators.IndicatorSeparator,
  Input: _Input2.default,
  LoadingIndicator: _indicators.LoadingIndicator,
  Menu: _Menu2.default,
  MenuList: _Menu.MenuList,
  MenuPortal: _Menu.MenuPortal,
  LoadingMessage: _Menu.LoadingMessage,
  NoOptionsMessage: _Menu.NoOptionsMessage,
  MultiValue: _MultiValue2.default,
  MultiValueContainer: _MultiValue.MultiValueContainer,
  MultiValueLabel: _MultiValue.MultiValueLabel,
  MultiValueRemove: _MultiValue.MultiValueRemove,
  Option: _Option2.default,
  Placeholder: _Placeholder2.default,
  SelectContainer: _containers.SelectContainer,
  SingleValue: _SingleValue2.default,
  ValueContainer: _containers.ValueContainer
};

var defaultComponents = exports.defaultComponents = function defaultComponents(props) {
  return _extends({}, components, props.components);
};

/***/ }),

/***/ 2873:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndicatorsContainer = exports.indicatorsContainerCSS = exports.ValueContainer = exports.valueContainerCSS = exports.SelectContainer = exports.containerCSS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ==============================
// Root Container
// ==============================

var containerCSS = exports.containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null, // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = exports.SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('container', props)), {
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

var valueContainerCSS = exports.valueContainerCSS = function valueContainerCSS(_ref2) {
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

var ValueContainer = exports.ValueContainer = function (_Component) {
  _inherits(ValueContainer, _Component);

  function ValueContainer() {
    _classCallCheck(this, ValueContainer);

    return _possibleConstructorReturn(this, (ValueContainer.__proto__ || Object.getPrototypeOf(ValueContainer)).apply(this, arguments));
  }

  _createClass(ValueContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          cx = _props.cx,
          isMulti = _props.isMulti,
          getStyles = _props.getStyles,
          hasValue = _props.hasValue;


      return _react2.default.createElement(
        'div',
        {
          className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('valueContainer', this.props)), {
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
}(_react.Component);

// ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = exports.indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = exports.IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;


  return _react2.default.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('indicatorsContainer', props)), {
        'indicators': true
      }, className)
    },
    children
  );
};

/***/ }),

/***/ 2874:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = exports.loadingIndicatorCSS = exports.IndicatorSeparator = exports.indicatorSeparatorCSS = exports.ClearIndicator = exports.clearIndicatorCSS = exports.DropdownIndicator = exports.dropdownIndicatorCSS = exports.DownChevron = exports.CrossIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// ==============================
// Dropdown & Clear Icons
// ==============================

var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ['size']);

  return _react2.default.createElement('svg', _extends({
    height: size,
    width: size,
    viewBox: '0 0 20 20',
    'aria-hidden': 'true',
    focusable: 'false',
    className: /*#__PURE__*/ /*#__PURE__*/(0, _emotion.css)({
      display: 'inline-block',
      fill: 'currentColor',
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0
    })
  }, props));
};

var CrossIcon = exports.CrossIcon = function CrossIcon(props) {
  return _react2.default.createElement(
    Svg,
    _extends({ size: 20 }, props),
    _react2.default.createElement('path', { d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z' })
  );
};
var DownChevron = exports.DownChevron = function DownChevron(props) {
  return _react2.default.createElement(
    Svg,
    _extends({ size: 20 }, props),
    _react2.default.createElement('path', { d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' })
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

var dropdownIndicatorCSS = exports.dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = exports.DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('dropdownIndicator', props)), {
        'indicator': true,
        'dropdown-indicator': true
      }, className)
    }),
    children || _react2.default.createElement(DownChevron, null)
  );
};

var clearIndicatorCSS = exports.clearIndicatorCSS = baseCSS;
var ClearIndicator = exports.ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('clearIndicator', props)), {
        'indicator': true,
        'clear-indicator': true
      }, className)
    }),
    children || _react2.default.createElement(CrossIcon, null)
  );
};

// ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = exports.indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref3) {
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

var IndicatorSeparator = exports.IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;

  return _react2.default.createElement('span', _extends({}, innerProps, {
    className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('indicatorSeparator', props)), { 'indicator-separator': true }, className)
  }));
};

// ==============================
// Loading
// ==============================

var keyframesName = 'react-select-loading-indicator';
var keyframesInjected = false;

var loadingIndicatorCSS = exports.loadingIndicatorCSS = function loadingIndicatorCSS(_ref4) {
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
  return _react2.default.createElement('span', {
    className: /*#__PURE__*/ /*#__PURE__*/(0, _emotion.css)({
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

var LoadingIndicator = exports.LoadingIndicator = function LoadingIndicator(props) {
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
    (0, _emotion.injectGlobal)('@keyframes ', keyframesName, '{0%,80%,100%{opacity:0;}40%{opacity:1;}};');
    keyframesInjected = true;
  }

  return _react2.default.createElement(
    'div',
    _extends({}, innerProps, {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('loadingIndicator', props)), {
        'indicator': true,
        'loading-indicator': true
      }, className)
    }),
    _react2.default.createElement(LoadingDot, { color: color, delay: 0, offset: isRtl }),
    _react2.default.createElement(LoadingDot, { color: color, delay: 160, offset: true }),
    _react2.default.createElement(LoadingDot, { color: color, delay: 320, offset: !isRtl })
  );
};
LoadingIndicator.defaultProps = { size: 4 };

/***/ }),

/***/ 2875:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = exports.css = function css(_ref) {
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

  return _react2.default.createElement(
    'div',
    _extends({
      ref: innerRef,
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('control', props)), {
        'control': true,
        'control--is-disabled': isDisabled,
        'control--is-focused': isFocused,
        'control--menu-is-open': menuIsOpen
      }, className)
    }, innerProps),
    children
  );
};

exports.default = Control;

/***/ }),

/***/ 2876:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupHeading = exports.groupHeadingCSS = exports.groupCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var groupCSS = exports.groupCSS = function groupCSS(_ref) {
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

  return _react2.default.createElement(
    'div',
    {
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('group', props)), { 'group': true }, className)
    },
    _react2.default.createElement(
      Heading,
      _extends({}, headingProps, {
        selectProps: selectProps,
        theme: theme,
        getStyles: getStyles,
        cx: cx
      }),
      label
    ),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

var groupHeadingCSS = exports.groupHeadingCSS = function groupHeadingCSS(_ref2) {
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
      cleanProps = _objectWithoutProperties(props, ['className', 'cx', 'getStyles', 'theme', 'selectProps']);

  return _react2.default.createElement('div', _extends({
    className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('groupHeading', _extends({ theme: theme }, cleanProps))), { 'group-heading': true }, className)
  }, cleanProps));
};

exports.GroupHeading = GroupHeading;
exports.default = Group;

/***/ }),

/***/ 2877:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

var _reactInputAutosize = __webpack_require__(2878);

var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var inputCSS = exports.inputCSS = function inputCSS(_ref) {
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
      props = _objectWithoutProperties(_ref2, ['className', 'cx', 'getStyles', 'innerRef', 'isHidden', 'isDisabled', 'theme', 'selectProps']);

  return _react2.default.createElement(
    'div',
    { className: /*#__PURE__*/ /*#__PURE__*/(0, _emotion.css)(getStyles('input', _extends({ theme: theme }, props))) },
    _react2.default.createElement(_reactInputAutosize2.default, _extends({
      className: cx(null, { 'input': true }, className),
      inputRef: innerRef,
      inputStyle: inputStyle(isHidden),
      disabled: isDisabled
    }, props))
  );
};

exports.default = Input;

/***/ }),

/***/ 2879:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiValueRemove = exports.MultiValueLabel = exports.MultiValueContainer = exports.MultiValueGeneric = exports.multiValueRemoveCSS = exports.multiValueLabelCSS = exports.multiValueCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

var _indicators = __webpack_require__(2874);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var multiValueCSS = exports.multiValueCSS = function multiValueCSS(_ref) {
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

var multiValueLabelCSS = exports.multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
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

var multiValueRemoveCSS = exports.multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
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

var MultiValueGeneric = exports.MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return _react2.default.createElement(
    'div',
    innerProps,
    children
  );
};

var MultiValueContainer = exports.MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = exports.MultiValueLabel = MultiValueGeneric;

var MultiValueRemove = exports.MultiValueRemove = function (_Component) {
  _inherits(MultiValueRemove, _Component);

  function MultiValueRemove() {
    _classCallCheck(this, MultiValueRemove);

    return _possibleConstructorReturn(this, (MultiValueRemove.__proto__ || Object.getPrototypeOf(MultiValueRemove)).apply(this, arguments));
  }

  _createClass(MultiValueRemove, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          innerProps = _props.innerProps;

      return _react2.default.createElement(
        'div',
        innerProps,
        children || _react2.default.createElement(_indicators.CrossIcon, { size: 14 })
      );
    }
  }]);

  return MultiValueRemove;
}(_react.Component);

var MultiValue = function (_Component2) {
  _inherits(MultiValue, _Component2);

  function MultiValue() {
    _classCallCheck(this, MultiValue);

    return _possibleConstructorReturn(this, (MultiValue.__proto__ || Object.getPrototypeOf(MultiValue)).apply(this, arguments));
  }

  _createClass(MultiValue, [{
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
        className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('multiValue', this.props)), {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className)
      }, innerProps);

      var labelInnerProps = {
        className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('multiValueLabel', this.props)), {
          'multi-value__label': true
        }, className)
      };

      var removeInnerProps = _extends({
        className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('multiValueRemove', this.props)), {
          'multi-value__remove': true
        }, className)
      }, removeProps);

      return _react2.default.createElement(
        Container,
        {
          data: data,
          innerProps: containerInnerProps,
          selectProps: selectProps
        },
        _react2.default.createElement(
          Label,
          {
            data: data,
            innerProps: labelInnerProps,
            selectProps: selectProps
          },
          children
        ),
        _react2.default.createElement(Remove, {
          data: data,
          innerProps: removeInnerProps,
          selectProps: selectProps
        })
      );
    }
  }]);

  return MultiValue;
}(_react.Component);

MultiValue.defaultProps = {
  cropWithEllipsis: true
};
exports.default = MultiValue;

/***/ }),

/***/ 2880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var optionCSS = exports.optionCSS = function optionCSS(_ref) {
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

  return _react2.default.createElement(
    'div',
    _extends({
      ref: innerRef,
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('option', props)), {
        'option': true,
        'option--is-disabled': isDisabled,
        'option--is-focused': isFocused,
        'option--is-selected': isSelected
      }, className)
    }, innerProps),
    children
  );
};

exports.default = Option;

/***/ }),

/***/ 2881:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeholderCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var placeholderCSS = exports.placeholderCSS = function placeholderCSS(_ref) {
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

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('placeholder', props)), {
        'placeholder': true
      }, className)
    }, innerProps),
    children
  );
};

exports.default = Placeholder;

/***/ }),

/***/ 2882:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _emotion = __webpack_require__(2850);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = exports.css = function css(_ref) {
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

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('singleValue', props)), {
        'single-value': true,
        'single-value--is-disabled': isDisabled
      }, className)
    }, innerProps),
    children
  );
};

exports.default = SingleValue;

/***/ }),

/***/ 2883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.mergeStyles = mergeStyles;

var _containers = __webpack_require__(2873);

var _Control = __webpack_require__(2875);

var _Group = __webpack_require__(2876);

var _indicators = __webpack_require__(2874);

var _Input = __webpack_require__(2877);

var _Placeholder = __webpack_require__(2881);

var _Option = __webpack_require__(2880);

var _Menu = __webpack_require__(2849);

var _SingleValue = __webpack_require__(2882);

var _MultiValue = __webpack_require__(2879);

var defaultStyles = exports.defaultStyles = {
  clearIndicator: _indicators.clearIndicatorCSS,
  container: _containers.containerCSS,
  control: _Control.css,
  dropdownIndicator: _indicators.dropdownIndicatorCSS,
  group: _Group.groupCSS,
  groupHeading: _Group.groupHeadingCSS,
  indicatorsContainer: _containers.indicatorsContainerCSS,
  indicatorSeparator: _indicators.indicatorSeparatorCSS,
  input: _Input.inputCSS,
  loadingIndicator: _indicators.loadingIndicatorCSS,
  loadingMessage: _Menu.loadingMessageCSS,
  menu: _Menu.menuCSS,
  menuList: _Menu.menuListCSS,
  menuPortal: _Menu.menuPortalCSS,
  multiValue: _MultiValue.multiValueCSS,
  multiValueLabel: _MultiValue.multiValueLabelCSS,
  multiValueRemove: _MultiValue.multiValueRemoveCSS,
  noOptionsMessage: _Menu.noOptionsMessageCSS,
  option: _Option.optionCSS,
  placeholder: _Placeholder.placeholderCSS,
  singleValue: _SingleValue.css,
  valueContainer: _containers.valueContainerCSS
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

/***/ }),

/***/ 2884:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var colors = exports.colors = {
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

var spacing = exports.spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};

var defaultTheme = exports.defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

/***/ }),

/***/ 2885:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(StateManager, _Component);

    function StateManager() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, StateManager);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StateManager.__proto__ || Object.getPrototypeOf(StateManager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(StateManager, [{
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

          return (_props = this.props)[name].apply(_props, _toConsumableArray(args));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(SelectComponent, _extends({}, this.props, {
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
  }(_react.Component), _class.defaultProps = defaultProps, _temp2;
};

exports.default = manageState;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35ib3RzLjk4MWM3YmJjNmIzNTM4YTM1YmI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvU2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL2NvbXBvbmVudHMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi9pbnRlcm5hbC9yZWFjdC1mYXN0LWNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi9kaWFjcml0aWNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL2ludGVybmFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL2ludGVybmFsL0ExMXlUZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL2ludGVybmFsL0R1bW15SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvaW50ZXJuYWwvTm9kZVJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL2ludGVybmFsL1Njcm9sbEJsb2NrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL2ludGVybmFsL1Njcm9sbExvY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvaW50ZXJuYWwvU2Nyb2xsTG9jay9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvaW50ZXJuYWwvU2Nyb2xsTG9jay91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi9pbnRlcm5hbC9TY3JvbGxDYXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvYWNjZXNzaWJpbGl0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi9idWlsdGlucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL2NvbXBvbmVudHMvY29udGFpbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi9jb21wb25lbnRzL2luZGljYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvY29tcG9uZW50cy9Db250cm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL2NvbXBvbmVudHMvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvY29tcG9uZW50cy9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi9jb21wb25lbnRzL011bHRpVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvY29tcG9uZW50cy9PcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvY29tcG9uZW50cy9QbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi9jb21wb25lbnRzL1NpbmdsZVZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi9zdGF0ZU1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2xhc3M7XG5cbnZhciBfaGFzQ2xhc3MgPSByZXF1aXJlKCcuL2hhc0NsYXNzJyk7XG5cbnZhciBfaGFzQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzQ2xhc3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghKDAsIF9oYXNDbGFzczIuZGVmYXVsdCkoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyAnICcgKyBjbGFzc05hbWUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoYXNDbGFzcztcbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO2Vsc2UgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzVG9SZW1vdmUgKyAnKD86XFxcXHN8JCknLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO2Vsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFrZUFzeW5jU2VsZWN0ID0gZXhwb3J0cy5kZWZhdWx0UHJvcHMgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9TZWxlY3QgPSByZXF1aXJlKCcuL1NlbGVjdCcpO1xuXG52YXIgX1NlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZWxlY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3N0YXRlTWFuYWdlciA9IHJlcXVpcmUoJy4vc3RhdGVNYW5hZ2VyJyk7XG5cbnZhciBfc3RhdGVNYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0gZXhwb3J0cy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhY2hlT3B0aW9uczogZmFsc2UsXG4gIGRlZmF1bHRPcHRpb25zOiBmYWxzZVxufTtcblxudmFyIG1ha2VBc3luY1NlbGVjdCA9IGZ1bmN0aW9uIG1ha2VBc3luY1NlbGVjdChTZWxlY3RDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQXN5bmMsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQXN5bmMocHJvcHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBc3luYyk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBc3luYy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFzeW5jKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgIF90aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIF90aGlzLm9wdGlvbnNDYWNoZSA9IHt9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNhY2hlT3B0aW9ucyA9IF90aGlzJHByb3BzLmNhY2hlT3B0aW9ucyxcbiAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbklucHV0Q2hhbmdlO1xuICAgICAgICAvLyBUT0RPXG5cbiAgICAgICAgdmFyIGlucHV0VmFsdWUgPSAoMCwgX3V0aWxzLmhhbmRsZUlucHV0Q2hhbmdlKShuZXdWYWx1ZSwgYWN0aW9uTWV0YSwgb25JbnB1dENoYW5nZSk7XG4gICAgICAgIGlmICghaW5wdXRWYWx1ZSkge1xuICAgICAgICAgIGRlbGV0ZSBfdGhpcy5sYXN0UmVxdWVzdDtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICAgIGxvYWRlZElucHV0VmFsdWU6ICcnLFxuICAgICAgICAgICAgbG9hZGVkT3B0aW9uczogW10sXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc0VtcHR5T3B0aW9uczogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhY2hlT3B0aW9ucyAmJiBfdGhpcy5vcHRpb25zQ2FjaGVbaW5wdXRWYWx1ZV0pIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgbG9hZGVkSW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGxvYWRlZE9wdGlvbnM6IF90aGlzLm9wdGlvbnNDYWNoZVtpbnB1dFZhbHVlXSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBwYXNzRW1wdHlPcHRpb25zOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciByZXF1ZXN0ID0gX3RoaXMubGFzdFJlcXVlc3QgPSB7fTtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzc0VtcHR5T3B0aW9uczogIV90aGlzLnN0YXRlLmxvYWRlZElucHV0VmFsdWVcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkT3B0aW9ucyhpbnB1dFZhbHVlLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgICBpZiAoIV90aGlzLm1vdW50ZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcHRpb25zQ2FjaGVbaW5wdXRWYWx1ZV0gPSBvcHRpb25zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyZXF1ZXN0ICE9PSBfdGhpcy5sYXN0UmVxdWVzdCkgcmV0dXJuO1xuICAgICAgICAgICAgICBkZWxldGUgX3RoaXMubGFzdFJlcXVlc3Q7XG4gICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvYWRlZElucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgICAgICAgICAgbG9hZGVkT3B0aW9uczogb3B0aW9ucyB8fCBbXSxcbiAgICAgICAgICAgICAgICBwYXNzRW1wdHlPcHRpb25zOiBmYWxzZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiBBcnJheS5pc0FycmF5KHByb3BzLmRlZmF1bHRPcHRpb25zKSA/IHByb3BzLmRlZmF1bHRPcHRpb25zIDogdW5kZWZpbmVkLFxuICAgICAgICBpbnB1dFZhbHVlOiB0eXBlb2YgcHJvcHMuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9wcy5pbnB1dFZhbHVlIDogJycsXG4gICAgICAgIGlzTG9hZGluZzogcHJvcHMuZGVmYXVsdE9wdGlvbnMgPT09IHRydWUgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIGxvYWRlZE9wdGlvbnM6IFtdLFxuICAgICAgICBwYXNzRW1wdHlPcHRpb25zOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQXN5bmMsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHRoaXMucHJvcHMuZGVmYXVsdE9wdGlvbnM7XG4gICAgICAgIHZhciBpbnB1dFZhbHVlID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXG4gICAgICAgIGlmIChkZWZhdWx0T3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMubG9hZE9wdGlvbnMoaW5wdXRWYWx1ZSwgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMyLm1vdW50ZWQpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBpc0xvYWRpbmcgPSAhIV90aGlzMi5sYXN0UmVxdWVzdDtcbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGRlZmF1bHRPcHRpb25zOiBvcHRpb25zIHx8IFtdLCBpc0xvYWRpbmc6IGlzTG9hZGluZyB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIC8vIGlmIHRoZSBjYWNoZU9wdGlvbnMgcHJvcCBjaGFuZ2VzLCBjbGVhciB0aGUgY2FjaGVcbiAgICAgICAgaWYgKG5leHRQcm9wcy5jYWNoZU9wdGlvbnMgIT09IHRoaXMucHJvcHMuY2FjaGVPcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zQ2FjaGUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFByb3BzLmRlZmF1bHRPcHRpb25zICE9PSB0aGlzLnByb3BzLmRlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczogQXJyYXkuaXNBcnJheShuZXh0UHJvcHMuZGVmYXVsdE9wdGlvbnMpID8gbmV4dFByb3BzLmRlZmF1bHRPcHRpb25zIDogdW5kZWZpbmVkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZvY3VzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdibHVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbG9hZE9wdGlvbnMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRPcHRpb25zKGlucHV0VmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBsb2FkT3B0aW9ucyA9IHRoaXMucHJvcHMubG9hZE9wdGlvbnM7XG5cbiAgICAgICAgaWYgKCFsb2FkT3B0aW9ucykgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIHZhciBsb2FkZXIgPSBsb2FkT3B0aW9ucyhpbnB1dFZhbHVlLCBjYWxsYmFjayk7XG4gICAgICAgIGlmIChsb2FkZXIgJiYgdHlwZW9mIGxvYWRlci50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbG9hZGVyLnRoZW4oY2FsbGJhY2ssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbG9hZE9wdGlvbnMgPSBfcHJvcHMubG9hZE9wdGlvbnMsXG4gICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnbG9hZE9wdGlvbnMnXSk7XG5cbiAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucyA9IF9zdGF0ZS5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgICAgIGlucHV0VmFsdWUgPSBfc3RhdGUuaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGlzTG9hZGluZyA9IF9zdGF0ZS5pc0xvYWRpbmcsXG4gICAgICAgICAgICBsb2FkZWRJbnB1dFZhbHVlID0gX3N0YXRlLmxvYWRlZElucHV0VmFsdWUsXG4gICAgICAgICAgICBsb2FkZWRPcHRpb25zID0gX3N0YXRlLmxvYWRlZE9wdGlvbnMsXG4gICAgICAgICAgICBwYXNzRW1wdHlPcHRpb25zID0gX3N0YXRlLnBhc3NFbXB0eU9wdGlvbnM7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSBwYXNzRW1wdHlPcHRpb25zID8gW10gOiBpbnB1dFZhbHVlICYmIGxvYWRlZElucHV0VmFsdWUgPyBsb2FkZWRPcHRpb25zIDogZGVmYXVsdE9wdGlvbnMgfHwgW107XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgICBmaWx0ZXJPcHRpb246IHRoaXMucHJvcHMuZmlsdGVyT3B0aW9uIHx8IG51bGwsXG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgICAgIF90aGlzMy5zZWxlY3QgPSBfcmVmO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2VcbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQXN5bmM7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMsIF90ZW1wO1xufTtcblxuZXhwb3J0cy5tYWtlQXN5bmNTZWxlY3QgPSBtYWtlQXN5bmNTZWxlY3Q7XG5leHBvcnRzLmRlZmF1bHQgPSBtYWtlQXN5bmNTZWxlY3QoKDAsIF9zdGF0ZU1hbmFnZXIyLmRlZmF1bHQpKF9TZWxlY3QyLmRlZmF1bHQpKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRQcm9wcyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX21lbW9pemVPbmUgPSByZXF1aXJlKCdtZW1vaXplLW9uZScpO1xuXG52YXIgX21lbW9pemVPbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVtb2l6ZU9uZSk7XG5cbnZhciBfTWVudSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9NZW51Jyk7XG5cbnZhciBfcmVhY3RGYXN0Q29tcGFyZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvcmVhY3QtZmFzdC1jb21wYXJlJyk7XG5cbnZhciBfcmVhY3RGYXN0Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEZhc3RDb21wYXJlKTtcblxudmFyIF9maWx0ZXJzID0gcmVxdWlyZSgnLi9maWx0ZXJzJyk7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKCcuL2ludGVybmFsL2luZGV4Jyk7XG5cbnZhciBfaW5kZXgyID0gcmVxdWlyZSgnLi9hY2Nlc3NpYmlsaXR5L2luZGV4Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfYnVpbHRpbnMgPSByZXF1aXJlKCcuL2J1aWx0aW5zJyk7XG5cbnZhciBfaW5kZXgzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2luZGV4Jyk7XG5cbnZhciBfc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcblxudmFyIF90aGVtZSA9IHJlcXVpcmUoJy4vdGhlbWUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgZGVmYXVsdFByb3BzID0gZXhwb3J0cy5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZTogdHJ1ZSxcbiAgYmx1cklucHV0T25TZWxlY3Q6ICgwLCBfdXRpbHMuaXNUb3VjaENhcGFibGUpKCksXG4gIGNhcHR1cmVNZW51U2Nyb2xsOiAhKDAsIF91dGlscy5pc1RvdWNoQ2FwYWJsZSkoKSxcbiAgY2xvc2VNZW51T25TZWxlY3Q6IHRydWUsXG4gIGNsb3NlTWVudU9uU2Nyb2xsOiBmYWxzZSxcbiAgY29tcG9uZW50czoge30sXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgZXNjYXBlQ2xlYXJzVmFsdWU6IGZhbHNlLFxuICBmaWx0ZXJPcHRpb246ICgwLCBfZmlsdGVycy5jcmVhdGVGaWx0ZXIpKCksXG4gIGZvcm1hdEdyb3VwTGFiZWw6IF9idWlsdGlucy5mb3JtYXRHcm91cExhYmVsLFxuICBnZXRPcHRpb25MYWJlbDogX2J1aWx0aW5zLmdldE9wdGlvbkxhYmVsLFxuICBnZXRPcHRpb25WYWx1ZTogX2J1aWx0aW5zLmdldE9wdGlvblZhbHVlLFxuICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgaXNNdWx0aTogZmFsc2UsXG4gIGlzUnRsOiBmYWxzZSxcbiAgaXNTZWFyY2hhYmxlOiB0cnVlLFxuICBpc09wdGlvbkRpc2FibGVkOiBfYnVpbHRpbnMuaXNPcHRpb25EaXNhYmxlZCxcbiAgbG9hZGluZ01lc3NhZ2U6IGZ1bmN0aW9uIGxvYWRpbmdNZXNzYWdlKCkge1xuICAgIHJldHVybiAnTG9hZGluZy4uLic7XG4gIH0sXG4gIG1heE1lbnVIZWlnaHQ6IDMwMCxcbiAgbWluTWVudUhlaWdodDogMTQwLFxuICBtZW51SXNPcGVuOiBmYWxzZSxcbiAgbWVudVBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1lbnVQb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgbWVudVNob3VsZEJsb2NrU2Nyb2xsOiBmYWxzZSxcbiAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3OiAhKDAsIF91dGlscy5pc01vYmlsZURldmljZSkoKSxcbiAgbm9PcHRpb25zTWVzc2FnZTogZnVuY3Rpb24gbm9PcHRpb25zTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ05vIG9wdGlvbnMnO1xuICB9LFxuICBvcGVuTWVudU9uRm9jdXM6IGZhbHNlLFxuICBvcGVuTWVudU9uQ2xpY2s6IHRydWUsXG4gIG9wdGlvbnM6IFtdLFxuICBwYWdlU2l6ZTogNSxcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QuLi4nLFxuICBzY3JlZW5SZWFkZXJTdGF0dXM6IGZ1bmN0aW9uIHNjcmVlblJlYWRlclN0YXR1cyhfcmVmKSB7XG4gICAgdmFyIGNvdW50ID0gX3JlZi5jb3VudDtcbiAgICByZXR1cm4gY291bnQgKyAnIHJlc3VsdCcgKyAoY291bnQgIT09IDEgPyAncycgOiAnJykgKyAnIGF2YWlsYWJsZSc7XG4gIH0sXG4gIHN0eWxlczoge30sXG4gIHRhYkluZGV4OiAnMCcsXG4gIHRhYlNlbGVjdHNWYWx1ZTogdHJ1ZVxufTtcblxudmFyIGluc3RhbmNlSWQgPSAxO1xuXG52YXIgU2VsZWN0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlbGVjdCwgX0NvbXBvbmVudCk7XG5cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJlZnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gTWlzYy4gSW5zdGFuY2UgUHJvcGVydGllc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWxlY3QpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpO1xuXG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWU7XG5cbiAgICBfdGhpcy5jYWNoZUNvbXBvbmVudHMgPSAoMCwgX21lbW9pemVPbmUyLmRlZmF1bHQpKF90aGlzLmNhY2hlQ29tcG9uZW50cywgX3JlYWN0RmFzdENvbXBhcmUyLmRlZmF1bHQpLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmNhY2hlQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgICBfdGhpcy5pbnN0YW5jZVByZWZpeCA9ICdyZWFjdC1zZWxlY3QtJyArIChfdGhpcy5wcm9wcy5pbnN0YW5jZUlkIHx8ICsraW5zdGFuY2VJZCk7XG5cbiAgICB2YXIgc2VsZWN0VmFsdWUgPSAoMCwgX3V0aWxzLmNsZWFuVmFsdWUpKHZhbHVlKTtcbiAgICB2YXIgbWVudU9wdGlvbnMgPSBfdGhpcy5idWlsZE1lbnVPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSk7XG5cbiAgICBfdGhpcy5zdGF0ZS5tZW51T3B0aW9ucyA9IG1lbnVPcHRpb25zO1xuICAgIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlID0gc2VsZWN0VmFsdWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9IC8vIFRPRE9cblxuXG4gIF9jcmVhdGVDbGFzcyhTZWxlY3QsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdGFydExpc3RlbmluZ1RvVG91Y2goKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gYWxsIHNjcm9sbCBldmVudHMsIGFuZCBmaWx0ZXIgdGhlbSBvdXQgaW5zaWRlIG9mICdvblNjcm9sbCdcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcHJvcHMub3B0aW9ucyxcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3Byb3BzLmlucHV0VmFsdWU7XG4gICAgICAvLyByZS1jYWNoZSBjdXN0b20gY29tcG9uZW50c1xuXG4gICAgICB0aGlzLmNhY2hlQ29tcG9uZW50cyhuZXh0UHJvcHMuY29tcG9uZW50cyk7XG4gICAgICAvLyByZWJ1aWxkIHRoZSBtZW51IG9wdGlvbnNcbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHZhbHVlIHx8IG5leHRQcm9wcy5vcHRpb25zICE9PSBvcHRpb25zIHx8IG5leHRQcm9wcy5pbnB1dFZhbHVlICE9PSBpbnB1dFZhbHVlKSB7XG4gICAgICAgIHZhciBfc2VsZWN0VmFsdWUgPSAoMCwgX3V0aWxzLmNsZWFuVmFsdWUpKG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICAgIHZhciBfbWVudU9wdGlvbnMgPSB0aGlzLmJ1aWxkTWVudU9wdGlvbnMobmV4dFByb3BzLCBfc2VsZWN0VmFsdWUpO1xuICAgICAgICB2YXIgX2ZvY3VzZWRWYWx1ZSA9IHRoaXMuZ2V0TmV4dEZvY3VzZWRWYWx1ZShfc2VsZWN0VmFsdWUpO1xuICAgICAgICB2YXIgX2ZvY3VzZWRPcHRpb24gPSB0aGlzLmdldE5leHRGb2N1c2VkT3B0aW9uKF9tZW51T3B0aW9ucy5mb2N1c2FibGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wdGlvbnM6IF9tZW51T3B0aW9ucywgc2VsZWN0VmFsdWU6IF9zZWxlY3RWYWx1ZSwgZm9jdXNlZE9wdGlvbjogX2ZvY3VzZWRPcHRpb24sIGZvY3VzZWRWYWx1ZTogX2ZvY3VzZWRWYWx1ZSB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHNvbWUgdXBkYXRlcyBzaG91bGQgdG9nZ2xlIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmlzaWJpbGl0eVxuICAgICAgaWYgKHRoaXMuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5wdXRJc0hpZGRlbjogdGhpcy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGVcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF9wcm9wczIuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3Byb3BzMi5tZW51SXNPcGVuO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuXG5cbiAgICAgIGlmIChcbiAgICAgIC8vIGVuc3VyZSBmb2N1cyBpcyByZXN0b3JlZCBjb3JyZWN0bHkgd2hlbiB0aGUgY29udHJvbCBiZWNvbWVzIGVuYWJsZWRcbiAgICAgIGlzRm9jdXNlZCAmJiAhaXNEaXNhYmxlZCAmJiBwcmV2UHJvcHMuaXNEaXNhYmxlZCB8fFxuICAgICAgLy8gZW5zdXJlIGZvY3VzIGlzIG9uIHRoZSBJbnB1dCB3aGVuIHRoZSBtZW51IG9wZW5zXG4gICAgICBpc0ZvY3VzZWQgJiYgbWVudUlzT3BlbiAmJiAhcHJldlByb3BzLm1lbnVJc09wZW4pIHtcbiAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCB0aGUgZm9jdXNlZCBvcHRpb24gaW50byB2aWV3IGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKHRoaXMubWVudUxpc3RSZWYgJiYgdGhpcy5mb2N1c2VkT3B0aW9uUmVmICYmIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUpIHtcbiAgICAgICAgKDAsIF91dGlscy5zY3JvbGxJbnRvVmlldykodGhpcy5tZW51TGlzdFJlZiwgdGhpcy5mb2N1c2VkT3B0aW9uUmVmKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24oKTtcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZ1RvVG91Y2goKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTWVudU9wZW4nLFxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQ29uc3VtZXIgSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVPcGVuKCkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1lbnVPcGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25NZW51Q2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVDbG9zZSgpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc1NlYXJjaGFibGUgPSBfcHJvcHMzLmlzU2VhcmNoYWJsZSxcbiAgICAgICAgICBpc011bHRpID0gX3Byb3BzMy5pc011bHRpO1xuXG4gICAgICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgICAgZXZlbnQ6ICdpbnB1dCcsXG4gICAgICAgIGNvbnRleHQ6IHsgaXNTZWFyY2hhYmxlOiBpc1NlYXJjaGFibGUsIGlzTXVsdGk6IGlzTXVsdGkgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHsgYWN0aW9uOiAnbWVudS1jbG9zZScgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25JbnB1dENoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UobmV3VmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTWV0aG9kc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6ICdmb2N1c0lucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHtcbiAgICAgIGlmICghdGhpcy5pbnB1dFJlZikgcmV0dXJuO1xuICAgICAgdGhpcy5pbnB1dFJlZi5mb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JsdXJJbnB1dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXJJbnB1dCgpIHtcbiAgICAgIGlmICghdGhpcy5pbnB1dFJlZikgcmV0dXJuO1xuICAgICAgdGhpcy5pbnB1dFJlZi5ibHVyKCk7XG4gICAgfVxuXG4gICAgLy8gYWxpYXNlZCBmb3IgY29uc3VtZXJzXG5cbiAgfSwge1xuICAgIGtleTogJ29wZW5NZW51JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3Blbk1lbnUoZm9jdXNPcHRpb24pIHtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIG1lbnVPcHRpb25zID0gX3N0YXRlLm1lbnVPcHRpb25zLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3N0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGlzTXVsdGkgPSB0aGlzLnByb3BzLmlzTXVsdGk7XG5cbiAgICAgIHZhciBvcGVuQXRJbmRleCA9IGZvY3VzT3B0aW9uID09PSAnZmlyc3QnID8gMCA6IG1lbnVPcHRpb25zLmZvY3VzYWJsZS5sZW5ndGggLSAxO1xuXG4gICAgICBpZiAoIWlzTXVsdGkpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBtZW51T3B0aW9ucy5mb2N1c2FibGUuaW5kZXhPZihzZWxlY3RWYWx1ZVswXSk7XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICBvcGVuQXRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLm9uTWVudU9wZW4oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICAgIGZvY3VzZWRPcHRpb246IG1lbnVPcHRpb25zLmZvY3VzYWJsZVtvcGVuQXRJbmRleF1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHsgZXZlbnQ6ICdtZW51JyB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmb2N1c1ZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXNWYWx1ZShkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc011bHRpID0gX3Byb3BzNC5pc011bHRpLFxuICAgICAgICAgIGlzU2VhcmNoYWJsZSA9IF9wcm9wczQuaXNTZWFyY2hhYmxlO1xuICAgICAgdmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3N0YXRlMi5zZWxlY3RWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfc3RhdGUyLmZvY3VzZWRWYWx1ZTtcblxuICAgICAgLy8gT25seSBtdWx0aXNlbGVjdHMgc3VwcG9ydCB2YWx1ZSBmb2N1c2luZ1xuXG4gICAgICBpZiAoIWlzTXVsdGkpIHJldHVybjtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IG51bGxcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZm9jdXNlZEluZGV4ID0gc2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuICAgICAgaWYgKCFmb2N1c2VkVmFsdWUpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoeyBldmVudDogJ3ZhbHVlJyB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhc3RJbmRleCA9IHNlbGVjdFZhbHVlLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgbmV4dEZvY3VzID0gLTE7XG4gICAgICBpZiAoIXNlbGVjdFZhbHVlLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZG9uJ3QgY3ljbGUgZnJvbSB0aGUgc3RhcnQgdG8gdGhlIGVuZFxuICAgICAgICAgICAgbmV4dEZvY3VzID0gMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvY3VzZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgaXMgZm9jdXNlZCwgZm9jdXMgdGhlIGxhc3QgdmFsdWUgZmlyc3RcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGxhc3RJbmRleDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4IC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPiAtMSAmJiBmb2N1c2VkSW5kZXggPCBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dEZvY3VzID09PSAtMSkge1xuICAgICAgICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0KHtcbiAgICAgICAgICBldmVudDogJ2lucHV0JyxcbiAgICAgICAgICBjb250ZXh0OiB7IGlzU2VhcmNoYWJsZTogaXNTZWFyY2hhYmxlLCBpc011bHRpOiBpc011bHRpIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuOiBuZXh0Rm9jdXMgPT09IC0xID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IHNlbGVjdFZhbHVlW25leHRGb2N1c11cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZvY3VzT3B0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXNPcHRpb24oKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnZmlyc3QnO1xuICAgICAgdmFyIHBhZ2VTaXplID0gdGhpcy5wcm9wcy5wYWdlU2l6ZTtcbiAgICAgIHZhciBfc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3N0YXRlMy5mb2N1c2VkT3B0aW9uLFxuICAgICAgICAgIG1lbnVPcHRpb25zID0gX3N0YXRlMy5tZW51T3B0aW9ucztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBtZW51T3B0aW9ucy5mb2N1c2FibGU7XG5cbiAgICAgIGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybjtcbiAgICAgIHZhciBuZXh0Rm9jdXMgPSAwOyAvLyBoYW5kbGVzICdmaXJzdCdcbiAgICAgIHZhciBmb2N1c2VkSW5kZXggPSBvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG4gICAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZUNvbnRleHQoeyBldmVudDogJ21lbnUnIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCA+IDAgPyBmb2N1c2VkSW5kZXggLSAxIDogb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSAoZm9jdXNlZEluZGV4ICsgMSkgJSBvcHRpb25zLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncGFnZXVwJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggLSBwYWdlU2l6ZTtcbiAgICAgICAgaWYgKG5leHRGb2N1cyA8IDApIG5leHRGb2N1cyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3BhZ2Vkb3duJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggKyBwYWdlU2l6ZTtcbiAgICAgICAgaWYgKG5leHRGb2N1cyA+IG9wdGlvbnMubGVuZ3RoIC0gMSkgbmV4dEZvY3VzID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsYXN0Jykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBvcHRpb25zW25leHRGb2N1c10sXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VGhlbWUnLFxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBHZXR0ZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGhlbWUoKSB7XG4gICAgICAvLyBVc2UgdGhlIGRlZmF1bHQgdGhlbWUgaWYgdGhlcmUgYXJlIG5vIGN1c3RvbWl6YXRpb25zLlxuICAgICAgaWYgKCF0aGlzLnByb3BzLnRoZW1lKSB7XG4gICAgICAgIHJldHVybiBfdGhlbWUuZGVmYXVsdFRoZW1lO1xuICAgICAgfVxuICAgICAgLy8gSWYgdGhlIHRoZW1lIHByb3AgaXMgYSBmdW5jdGlvbiwgYXNzdW1lIHRoZSBmdW5jdGlvblxuICAgICAgLy8ga25vd3MgaG93IHRvIG1lcmdlIHRoZSBwYXNzZWQtaW4gZGVmYXVsdCB0aGVtZSB3aXRoXG4gICAgICAvLyBpdHMgb3duIG1vZGlmaWNhdGlvbnMuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudGhlbWUoX3RoZW1lLmRlZmF1bHRUaGVtZSk7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UsIGlmIGEgcGxhaW4gdGhlbWUgb2JqZWN0IHdhcyBwYXNzZWQgaW4sXG4gICAgICAvLyBvdmVybGF5IGl0IHdpdGggdGhlIGRlZmF1bHQgdGhlbWUuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF90aGVtZS5kZWZhdWx0VGhlbWUsIHRoaXMucHJvcHMudGhlbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENvbW1vblByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29tbW9uUHJvcHMoKSB7XG4gICAgICB2YXIgY2xlYXJWYWx1ZSA9IHRoaXMuY2xlYXJWYWx1ZSxcbiAgICAgICAgICBnZXRTdHlsZXMgPSB0aGlzLmdldFN0eWxlcyxcbiAgICAgICAgICBzZXRWYWx1ZSA9IHRoaXMuc2V0VmFsdWUsXG4gICAgICAgICAgc2VsZWN0T3B0aW9uID0gdGhpcy5zZWxlY3RPcHRpb24sXG4gICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGNsYXNzTmFtZVByZWZpeCA9IHByb3BzLmNsYXNzTmFtZVByZWZpeCxcbiAgICAgICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgICAgICBpc1J0bCA9IHByb3BzLmlzUnRsLFxuICAgICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgdmFyIGhhc1ZhbHVlID0gdGhpcy5oYXNWYWx1ZSgpO1xuICAgICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RWYWx1ZTtcbiAgICAgIH07XG4gICAgICB2YXIgY3hQcmVmaXggPSBjbGFzc05hbWVQcmVmaXg7XG5cbiAgICAgIHZhciBjeCA9IF91dGlscy5jbGFzc05hbWVzLmJpbmQobnVsbCwgY3hQcmVmaXgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3g6IGN4LFxuICAgICAgICBjbGVhclZhbHVlOiBjbGVhclZhbHVlLFxuICAgICAgICBnZXRTdHlsZXM6IGdldFN0eWxlcyxcbiAgICAgICAgZ2V0VmFsdWU6IGdldFZhbHVlLFxuICAgICAgICBoYXNWYWx1ZTogaGFzVmFsdWUsXG4gICAgICAgIGlzTXVsdGk6IGlzTXVsdGksXG4gICAgICAgIGlzUnRsOiBpc1J0bCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgc2VsZWN0T3B0aW9uOiBzZWxlY3RPcHRpb24sXG4gICAgICAgIHNldFZhbHVlOiBzZXRWYWx1ZSxcbiAgICAgICAgc2VsZWN0UHJvcHM6IHByb3BzLFxuICAgICAgICB0aGVtZTogdGhpcy5nZXRUaGVtZSgpXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE5leHRGb2N1c2VkVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROZXh0Rm9jdXNlZFZhbHVlKG5leHRTZWxlY3RWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUpIHtcbiAgICAgICAgdGhpcy5jbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBfc3RhdGU0ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfc3RhdGU0LmZvY3VzZWRWYWx1ZSxcbiAgICAgICAgICBsYXN0U2VsZWN0VmFsdWUgPSBfc3RhdGU0LnNlbGVjdFZhbHVlO1xuXG4gICAgICB2YXIgbGFzdEZvY3VzZWRJbmRleCA9IGxhc3RTZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG4gICAgICBpZiAobGFzdEZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIHZhciBuZXh0Rm9jdXNlZEluZGV4ID0gbmV4dFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcbiAgICAgICAgaWYgKG5leHRGb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgICAgIC8vIHRoZSBmb2N1c2VkIHZhbHVlIGlzIHN0aWxsIGluIHRoZSBzZWxlY3RWYWx1ZSwgcmV0dXJuIGl0XG4gICAgICAgICAgcmV0dXJuIGZvY3VzZWRWYWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0Rm9jdXNlZEluZGV4IDwgbmV4dFNlbGVjdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIC8vIHRoZSBmb2N1c2VkVmFsdWUgaXMgbm90IHByZXNlbnQgaW4gdGhlIG5leHQgc2VsZWN0VmFsdWUgYXJyYXkgYnlcbiAgICAgICAgICAvLyByZWZlcmVuY2UsIHNvIHJldHVybiB0aGUgbmV3IHZhbHVlIGF0IHRoZSBzYW1lIGluZGV4XG4gICAgICAgICAgcmV0dXJuIG5leHRTZWxlY3RWYWx1ZVtsYXN0Rm9jdXNlZEluZGV4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TmV4dEZvY3VzZWRPcHRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROZXh0Rm9jdXNlZE9wdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgbGFzdEZvY3VzZWRPcHRpb24gPSB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb247XG5cbiAgICAgIHJldHVybiBsYXN0Rm9jdXNlZE9wdGlvbiAmJiBvcHRpb25zLmluZGV4T2YobGFzdEZvY3VzZWRPcHRpb24pID4gLTEgPyBsYXN0Rm9jdXNlZE9wdGlvbiA6IG9wdGlvbnNbMF07XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gSGVscGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6ICdoYXNWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1ZhbHVlKCkge1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFzT3B0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc09wdGlvbnMoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnN0YXRlLm1lbnVPcHRpb25zLnJlbmRlci5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY291bnRPcHRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY291bnRPcHRpb25zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubWVudU9wdGlvbnMuZm9jdXNhYmxlLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0NsZWFyYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2xlYXJhYmxlKCkge1xuICAgICAgdmFyIF9wcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzQ2xlYXJhYmxlID0gX3Byb3BzNS5pc0NsZWFyYWJsZSxcbiAgICAgICAgICBpc011bHRpID0gX3Byb3BzNS5pc011bHRpO1xuXG4gICAgICAvLyBzaW5nbGUgc2VsZWN0LCBieSBkZWZhdWx0LCBJUyBOT1QgY2xlYXJhYmxlXG4gICAgICAvLyBtdWx0aSBzZWxlY3QsIGJ5IGRlZmF1bHQsIElTIGNsZWFyYWJsZVxuXG4gICAgICBpZiAoaXNDbGVhcmFibGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzTXVsdGk7XG5cbiAgICAgIHJldHVybiBpc0NsZWFyYWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc09wdGlvbkRpc2FibGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNPcHRpb25EaXNhYmxlZChvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMucHJvcHMuaXNPcHRpb25EaXNhYmxlZCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucHJvcHMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24sIHNlbGVjdFZhbHVlKSA6IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzT3B0aW9uU2VsZWN0ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoc2VsZWN0VmFsdWUuaW5kZXhPZihvcHRpb24pID4gLTEpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmlzT3B0aW9uU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBjYW5kaWRhdGUgPSB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbik7XG4gICAgICByZXR1cm4gc2VsZWN0VmFsdWUuc29tZShmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmdldE9wdGlvblZhbHVlKGkpID09PSBjYW5kaWRhdGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmaWx0ZXJPcHRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaWx0ZXJPcHRpb24ob3B0aW9uLCBpbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5maWx0ZXJPcHRpb24gPyB0aGlzLnByb3BzLmZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIDogdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmb3JtYXRPcHRpb25MYWJlbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdE9wdGlvbkxhYmVsKGRhdGEsIGNvbnRleHQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgX2lucHV0VmFsdWUgPSB0aGlzLnByb3BzLmlucHV0VmFsdWU7XG4gICAgICAgIHZhciBfc2VsZWN0VmFsdWUyID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbChkYXRhLCB7XG4gICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICBpbnB1dFZhbHVlOiBfaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZTogX3NlbGVjdFZhbHVlMlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9wdGlvbkxhYmVsKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Zvcm1hdEdyb3VwTGFiZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdEdyb3VwTGFiZWwoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTW91c2UgSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB9LCB7XG4gICAga2V5OiAnc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbicsXG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIENvbXBvc2l0aW9uIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbigpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIHRoaXMub25Db21wb3NpdGlvbkVuZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdGFydExpc3RlbmluZ1RvVG91Y2gnLFxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBUb3VjaCBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nVG9Ub3VjaCgpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcExpc3RlbmluZ1RvVG91Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9Ub3VjaCgpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gRm9jdXMgSGFuZGxlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEtleWJvYXJkIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgfSwge1xuICAgIGtleTogJ2J1aWxkTWVudU9wdGlvbnMnLFxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBNZW51IE9wdGlvbnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZE1lbnVPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMkaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF9wcm9wcyRpbnB1dFZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IF9wcm9wcyRpbnB1dFZhbHVlLFxuICAgICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuXG5cbiAgICAgIHZhciB0b09wdGlvbiA9IGZ1bmN0aW9uIHRvT3B0aW9uKG9wdGlvbiwgaWQpIHtcbiAgICAgICAgdmFyIGlzRGlzYWJsZWQgPSBfdGhpczMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBfdGhpczMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICAgICAgdmFyIGxhYmVsID0gX3RoaXMzLmdldE9wdGlvbkxhYmVsKG9wdGlvbik7XG4gICAgICAgIHZhciB2YWx1ZSA9IF90aGlzMy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuXG4gICAgICAgIGlmIChfdGhpczMuc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucygpICYmIGlzU2VsZWN0ZWQgfHwgIV90aGlzMy5maWx0ZXJPcHRpb24oeyBsYWJlbDogbGFiZWwsIHZhbHVlOiB2YWx1ZSwgZGF0YTogb3B0aW9uIH0sIGlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9uSG92ZXIgPSBpc0Rpc2FibGVkID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMub25PcHRpb25Ib3ZlcihvcHRpb24pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25TZWxlY3QgPSBpc0Rpc2FibGVkID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcHRpb25JZCA9IF90aGlzMy5nZXRFbGVtZW50SWQoJ29wdGlvbicpICsgJy0nICsgaWQ7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICBpZDogb3B0aW9uSWQsXG4gICAgICAgICAgICBvbkNsaWNrOiBvblNlbGVjdCxcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlOiBvbkhvdmVyLFxuICAgICAgICAgICAgb25Nb3VzZU92ZXI6IG9uSG92ZXIsXG4gICAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgICAgIHRhYkluZGV4OiAtMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YTogb3B0aW9uLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcbiAgICAgICAgICBrZXk6IG9wdGlvbklkLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICB0eXBlOiAnb3B0aW9uJyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBvcHRpb25zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgICAgaWYgKGl0ZW0ub3B0aW9ucykge1xuICAgICAgICAgIC8vIFRPRE8gbmVlZHMgYSB0aWRpZXIgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICBpZiAoIV90aGlzMy5oYXNHcm91cHMpIF90aGlzMy5oYXNHcm91cHMgPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIGl0ZW1zID0gaXRlbS5vcHRpb25zO1xuXG4gICAgICAgICAgdmFyIGNoaWxkcmVuID0gaXRlbXMubWFwKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHRvT3B0aW9uKGNoaWxkLCBpdGVtSW5kZXggKyAnLScgKyBpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb24gJiYgIW9wdGlvbi5pc0Rpc2FibGVkKSBhY2MuZm9jdXNhYmxlLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGdyb3VwSWQgPSBfdGhpczMuZ2V0RWxlbWVudElkKCdncm91cCcpICsgJy0nICsgaXRlbUluZGV4O1xuICAgICAgICAgICAgYWNjLnJlbmRlci5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2dyb3VwJyxcbiAgICAgICAgICAgICAga2V5OiBncm91cElkLFxuICAgICAgICAgICAgICBkYXRhOiBpdGVtLFxuICAgICAgICAgICAgICBvcHRpb25zOiBjaGlsZHJlblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvcHRpb24gPSB0b09wdGlvbihpdGVtLCAnJyArIGl0ZW1JbmRleCk7XG4gICAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgYWNjLnJlbmRlci5wdXNoKG9wdGlvbik7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5pc0Rpc2FibGVkKSBhY2MuZm9jdXNhYmxlLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7IHJlbmRlcjogW10sIGZvY3VzYWJsZTogW10gfSk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gUmVuZGVyZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgfSwge1xuICAgIGtleTogJ2NvbnN0cnVjdEFyaWFMaXZlTWVzc2FnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnN0cnVjdEFyaWFMaXZlTWVzc2FnZSgpIHtcbiAgICAgIHZhciBfc3RhdGU1ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBhcmlhTGl2ZUNvbnRleHQgPSBfc3RhdGU1LmFyaWFMaXZlQ29udGV4dCxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF9zdGF0ZTUuc2VsZWN0VmFsdWUsXG4gICAgICAgICAgZm9jdXNlZFZhbHVlID0gX3N0YXRlNS5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF9zdGF0ZTUuZm9jdXNlZE9wdGlvbjtcbiAgICAgIHZhciBfcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcHRpb25zID0gX3Byb3BzNi5vcHRpb25zLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfcHJvcHM2Lm1lbnVJc09wZW4sXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF9wcm9wczYuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzY3JlZW5SZWFkZXJTdGF0dXMgPSBfcHJvcHM2LnNjcmVlblJlYWRlclN0YXR1cztcblxuICAgICAgLy8gQW4gYXJpYSBsaXZlIG1lc3NhZ2UgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSBpbiB0aGUgc2VsZWN0LlxuXG4gICAgICB2YXIgZm9jdXNlZFZhbHVlTXNnID0gZm9jdXNlZFZhbHVlID8gKDAsIF9pbmRleDIudmFsdWVGb2N1c0FyaWFNZXNzYWdlKSh7XG4gICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICBnZXRPcHRpb25MYWJlbDogdGhpcy5nZXRPcHRpb25MYWJlbCxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlXG4gICAgICB9KSA6ICcnO1xuICAgICAgLy8gQW4gYXJpYSBsaXZlIG1lc3NhZ2UgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBvcHRpb24gaW4gdGhlIHNlbGVjdC5cbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uTXNnID0gZm9jdXNlZE9wdGlvbiAmJiBtZW51SXNPcGVuID8gKDAsIF9pbmRleDIub3B0aW9uRm9jdXNBcmlhTWVzc2FnZSkoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uLFxuICAgICAgICBnZXRPcHRpb25MYWJlbDogdGhpcy5nZXRPcHRpb25MYWJlbCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgfSkgOiAnJztcbiAgICAgIC8vIEFuIGFyaWEgbGl2ZSBtZXNzYWdlIHJlcHJlc2VudGluZyB0aGUgc2V0IG9mIGZvY3VzYWJsZSByZXN1bHRzIGFuZCBjdXJyZW50IHNlYXJjaHRlcm0vaW5wdXR2YWx1ZS5cbiAgICAgIHZhciByZXN1bHRzTXNnID0gKDAsIF9pbmRleDIucmVzdWx0c0FyaWFNZXNzYWdlKSh7XG4gICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgIHNjcmVlblJlYWRlck1lc3NhZ2U6IHNjcmVlblJlYWRlclN0YXR1cyh7IGNvdW50OiB0aGlzLmNvdW50T3B0aW9ucygpIH0pXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGZvY3VzZWRWYWx1ZU1zZyArICcgJyArIGZvY3VzZWRPcHRpb25Nc2cgKyAnICcgKyByZXN1bHRzTXNnICsgJyAnICsgYXJpYUxpdmVDb250ZXh0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcklucHV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICB2YXIgX3Byb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF9wcm9wczcuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc1NlYXJjaGFibGUgPSBfcHJvcHM3LmlzU2VhcmNoYWJsZSxcbiAgICAgICAgICBpbnB1dElkID0gX3Byb3BzNy5pbnB1dElkLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfcHJvcHM3LmlucHV0VmFsdWUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfcHJvcHM3LnRhYkluZGV4O1xuICAgICAgdmFyIElucHV0ID0gdGhpcy5jb21wb25lbnRzLklucHV0O1xuICAgICAgdmFyIGlucHV0SXNIaWRkZW4gPSB0aGlzLnN0YXRlLmlucHV0SXNIaWRkZW47XG5cblxuICAgICAgdmFyIGlkID0gaW5wdXRJZCB8fCB0aGlzLmdldEVsZW1lbnRJZCgnaW5wdXQnKTtcblxuICAgICAgaWYgKCFpc1NlYXJjaGFibGUpIHtcbiAgICAgICAgLy8gdXNlIGEgZHVtbXkgaW5wdXQgdG8gbWFpbnRhaW4gZm9jdXMvYmx1ciBmdW5jdGlvbmFsaXR5XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaW5kZXguRHVtbXlJbnB1dCwge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgICBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIsXG4gICAgICAgICAgb25DaGFuZ2U6IF91dGlscy5ub29wLFxuICAgICAgICAgIG9uRm9jdXM6IHRoaXMub25JbnB1dEZvY3VzLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFyaWEgYXR0cmlidXRlcyBtYWtlcyB0aGUgSlNYIFwibm9pc3lcIiwgc2VwYXJhdGVkIGZvciBjbGFyaXR5XG4gICAgICB2YXIgYXJpYUF0dHJpYnV0ZXMgPSB7XG4gICAgICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdsaXN0JyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXVxuICAgICAgfTtcblxuICAgICAgdmFyIF9jb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHMsXG4gICAgICAgICAgY3ggPSBfY29tbW9uUHJvcHMuY3gsXG4gICAgICAgICAgdGhlbWUgPSBfY29tbW9uUHJvcHMudGhlbWUsXG4gICAgICAgICAgc2VsZWN0UHJvcHMgPSBfY29tbW9uUHJvcHMuc2VsZWN0UHJvcHM7XG5cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KElucHV0LCBfZXh0ZW5kcyh7XG4gICAgICAgIGF1dG9DYXBpdGFsaXplOiAnbm9uZScsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogJ29mZicsXG4gICAgICAgIGF1dG9Db3JyZWN0OiAnb2ZmJyxcbiAgICAgICAgY3g6IGN4LFxuICAgICAgICBnZXRTdHlsZXM6IHRoaXMuZ2V0U3R5bGVzLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGlubmVyUmVmOiB0aGlzLmdldElucHV0UmVmLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0hpZGRlbjogaW5wdXRJc0hpZGRlbixcbiAgICAgICAgb25CbHVyOiB0aGlzLm9uSW5wdXRCbHVyLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsXG4gICAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wcyxcbiAgICAgICAgc3BlbGxDaGVjazogJ2ZhbHNlJyxcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdmFsdWU6IGlucHV0VmFsdWVcbiAgICAgIH0sIGFyaWFBdHRyaWJ1dGVzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfY29tcG9uZW50cyA9IHRoaXMuY29tcG9uZW50cyxcbiAgICAgICAgICBNdWx0aVZhbHVlID0gX2NvbXBvbmVudHMuTXVsdGlWYWx1ZSxcbiAgICAgICAgICBNdWx0aVZhbHVlQ29udGFpbmVyID0gX2NvbXBvbmVudHMuTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICBNdWx0aVZhbHVlTGFiZWwgPSBfY29tcG9uZW50cy5NdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgICAgTXVsdGlWYWx1ZVJlbW92ZSA9IF9jb21wb25lbnRzLk11bHRpVmFsdWVSZW1vdmUsXG4gICAgICAgICAgU2luZ2xlVmFsdWUgPSBfY29tcG9uZW50cy5TaW5nbGVWYWx1ZSxcbiAgICAgICAgICBQbGFjZWhvbGRlciA9IF9jb21wb25lbnRzLlBsYWNlaG9sZGVyO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPSBfcHJvcHM4LmNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzOC5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTXVsdGkgPSBfcHJvcHM4LmlzTXVsdGksXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF9wcm9wczguaW5wdXRWYWx1ZSxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IF9wcm9wczgucGxhY2Vob2xkZXI7XG4gICAgICB2YXIgX3N0YXRlNiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfc3RhdGU2LnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF9zdGF0ZTYuZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZCA9IF9zdGF0ZTYuaXNGb2N1c2VkO1xuXG5cbiAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpIHx8ICFjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUgPyBudWxsIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgUGxhY2Vob2xkZXIsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBrZXk6ICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwbGFjZWhvbGRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICB2YXIgc2VsZWN0VmFsdWVzID0gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICB2YXIgaXNGb2N1c2VkID0gb3B0ID09PSBmb2N1c2VkVmFsdWU7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgTXVsdGlWYWx1ZSxcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgQ29udGFpbmVyOiBNdWx0aVZhbHVlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIExhYmVsOiBNdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgICAgICAgICAgUmVtb3ZlOiBNdWx0aVZhbHVlUmVtb3ZlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAgICBrZXk6IF90aGlzNC5nZXRPcHRpb25WYWx1ZShvcHQpLFxuICAgICAgICAgICAgICByZW1vdmVQcm9wczoge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LnJlbW92ZVZhbHVlKG9wdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5yZW1vdmVWYWx1ZShvcHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhOiBvcHRcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3RoaXM0LmZvcm1hdE9wdGlvbkxhYmVsKG9wdCwgJ3ZhbHVlJylcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlcztcbiAgICAgIH1cblxuICAgICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW5nbGVWYWx1ZSA9IHNlbGVjdFZhbHVlWzBdO1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBTaW5nbGVWYWx1ZSxcbiAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7IGRhdGE6IHNpbmdsZVZhbHVlLCBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkIH0pLFxuICAgICAgICB0aGlzLmZvcm1hdE9wdGlvbkxhYmVsKHNpbmdsZVZhbHVlLCAndmFsdWUnKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJDbGVhckluZGljYXRvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsZWFySW5kaWNhdG9yKCkge1xuICAgICAgdmFyIENsZWFySW5kaWNhdG9yID0gdGhpcy5jb21wb25lbnRzLkNsZWFySW5kaWNhdG9yO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzOS5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTG9hZGluZyA9IF9wcm9wczkuaXNMb2FkaW5nO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuXG5cbiAgICAgIGlmICghdGhpcy5pc0NsZWFyYWJsZSgpIHx8ICFDbGVhckluZGljYXRvciB8fCBpc0Rpc2FibGVkIHx8ICF0aGlzLmhhc1ZhbHVlKCkgfHwgaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENsZWFySW5kaWNhdG9yLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJMb2FkaW5nSW5kaWNhdG9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTG9hZGluZ0luZGljYXRvcigpIHtcbiAgICAgIHZhciBMb2FkaW5nSW5kaWNhdG9yID0gdGhpcy5jb21wb25lbnRzLkxvYWRpbmdJbmRpY2F0b3I7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF9wcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzMTAuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc0xvYWRpbmcgPSBfcHJvcHMxMC5pc0xvYWRpbmc7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cblxuICAgICAgaWYgKCFMb2FkaW5nSW5kaWNhdG9yIHx8ICFpc0xvYWRpbmcpIHJldHVybiBudWxsO1xuXG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH07XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ0luZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yKCkge1xuICAgICAgdmFyIF9jb21wb25lbnRzMiA9IHRoaXMuY29tcG9uZW50cyxcbiAgICAgICAgICBEcm9wZG93bkluZGljYXRvciA9IF9jb21wb25lbnRzMi5Ecm9wZG93bkluZGljYXRvcixcbiAgICAgICAgICBJbmRpY2F0b3JTZXBhcmF0b3IgPSBfY29tcG9uZW50czIuSW5kaWNhdG9yU2VwYXJhdG9yO1xuXG4gICAgICAvLyBzZXBhcmF0b3IgZG9lc24ndCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIGRyb3Bkb3duIGluZGljYXRvclxuXG4gICAgICBpZiAoIURyb3Bkb3duSW5kaWNhdG9yIHx8ICFJbmRpY2F0b3JTZXBhcmF0b3IpIHJldHVybiBudWxsO1xuXG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEluZGljYXRvclNlcGFyYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyRHJvcGRvd25JbmRpY2F0b3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJEcm9wZG93bkluZGljYXRvcigpIHtcbiAgICAgIHZhciBEcm9wZG93bkluZGljYXRvciA9IHRoaXMuY29tcG9uZW50cy5Ecm9wZG93bkluZGljYXRvcjtcblxuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cblxuICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JNb3VzZURvd24sXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Ecm9wZG93bkluZGljYXRvclRvdWNoRW5kLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChEcm9wZG93bkluZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyTWVudScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdmFyIF9jb21wb25lbnRzMyA9IHRoaXMuY29tcG9uZW50cyxcbiAgICAgICAgICBHcm91cCA9IF9jb21wb25lbnRzMy5Hcm91cCxcbiAgICAgICAgICBHcm91cEhlYWRpbmcgPSBfY29tcG9uZW50czMuR3JvdXBIZWFkaW5nLFxuICAgICAgICAgIE1lbnUgPSBfY29tcG9uZW50czMuTWVudSxcbiAgICAgICAgICBNZW51TGlzdCA9IF9jb21wb25lbnRzMy5NZW51TGlzdCxcbiAgICAgICAgICBNZW51UG9ydGFsID0gX2NvbXBvbmVudHMzLk1lbnVQb3J0YWwsXG4gICAgICAgICAgTG9hZGluZ01lc3NhZ2UgPSBfY29tcG9uZW50czMuTG9hZGluZ01lc3NhZ2UsXG4gICAgICAgICAgTm9PcHRpb25zTWVzc2FnZSA9IF9jb21wb25lbnRzMy5Ob09wdGlvbnNNZXNzYWdlLFxuICAgICAgICAgIE9wdGlvbiA9IF9jb21wb25lbnRzMy5PcHRpb247XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF9zdGF0ZTcgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb24gPSBfc3RhdGU3LmZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgbWVudU9wdGlvbnMgPSBfc3RhdGU3Lm1lbnVPcHRpb25zO1xuICAgICAgdmFyIF9wcm9wczExID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjYXB0dXJlTWVudVNjcm9sbCA9IF9wcm9wczExLmNhcHR1cmVNZW51U2Nyb2xsLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfcHJvcHMxMS5pbnB1dFZhbHVlLFxuICAgICAgICAgIGlzTG9hZGluZyA9IF9wcm9wczExLmlzTG9hZGluZyxcbiAgICAgICAgICBsb2FkaW5nTWVzc2FnZSA9IF9wcm9wczExLmxvYWRpbmdNZXNzYWdlLFxuICAgICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfcHJvcHMxMS5taW5NZW51SGVpZ2h0LFxuICAgICAgICAgIG1heE1lbnVIZWlnaHQgPSBfcHJvcHMxMS5tYXhNZW51SGVpZ2h0LFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfcHJvcHMxMS5tZW51SXNPcGVuLFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfcHJvcHMxMS5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIG1lbnVQb3NpdGlvbiA9IF9wcm9wczExLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBtZW51UG9ydGFsVGFyZ2V0ID0gX3Byb3BzMTEubWVudVBvcnRhbFRhcmdldCxcbiAgICAgICAgICBtZW51U2hvdWxkQmxvY2tTY3JvbGwgPSBfcHJvcHMxMS5tZW51U2hvdWxkQmxvY2tTY3JvbGwsXG4gICAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gX3Byb3BzMTEubWVudVNob3VsZFNjcm9sbEludG9WaWV3LFxuICAgICAgICAgIG5vT3B0aW9uc01lc3NhZ2UgPSBfcHJvcHMxMS5ub09wdGlvbnNNZXNzYWdlLFxuICAgICAgICAgIG9uTWVudVNjcm9sbFRvVG9wID0gX3Byb3BzMTEub25NZW51U2Nyb2xsVG9Ub3AsXG4gICAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b20gPSBfcHJvcHMxMS5vbk1lbnVTY3JvbGxUb0JvdHRvbTtcblxuXG4gICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybiBudWxsO1xuXG4gICAgICAvLyBUT0RPOiBJbnRlcm5hbCBPcHRpb24gVHlwZSBoZXJlXG4gICAgICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSwgdGhlIG1lbnUgb3B0aW9ucyBpbiBzdGF0ZSBhcmVuJ3QgY2hhbmdlZCB3aGVuIHRoZVxuICAgICAgICAvLyBmb2N1c2VkIG9wdGlvbiBjaGFuZ2VzIHNvIHdlIGNhbGN1bGF0ZSBhZGRpdGlvbmFsIHByb3BzIGJhc2VkIG9uIHRoYXRcbiAgICAgICAgdmFyIGlzRm9jdXNlZCA9IGZvY3VzZWRPcHRpb24gPT09IHByb3BzLmRhdGE7XG4gICAgICAgIHByb3BzLmlubmVyUmVmID0gaXNGb2N1c2VkID8gX3RoaXM1LmdldEZvY3VzZWRPcHRpb25SZWYgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIE9wdGlvbixcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHByb3BzLCB7IGlzRm9jdXNlZDogaXNGb2N1c2VkIH0pLFxuICAgICAgICAgIF90aGlzNS5mb3JtYXRPcHRpb25MYWJlbChwcm9wcy5kYXRhLCAnbWVudScpXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWVudVVJID0gdm9pZCAwO1xuXG4gICAgICBpZiAodGhpcy5oYXNPcHRpb25zKCkpIHtcbiAgICAgICAgbWVudVVJID0gbWVudU9wdGlvbnMucmVuZGVyLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgIGdyb3VwID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGl0ZW0sIFsndHlwZSddKTtcblxuICAgICAgICAgICAgdmFyIGhlYWRpbmdJZCA9IGl0ZW0ua2V5ICsgJy1oZWFkaW5nJztcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBHcm91cCxcbiAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCBncm91cCwge1xuICAgICAgICAgICAgICAgIEhlYWRpbmc6IEdyb3VwSGVhZGluZyxcbiAgICAgICAgICAgICAgICBoZWFkaW5nUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBoZWFkaW5nSWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsOiBfdGhpczUuZm9ybWF0R3JvdXBMYWJlbChpdGVtLmRhdGEpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBpdGVtLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyKG9wdGlvbik7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBsb2FkaW5nTWVzc2FnZSh7IGlucHV0VmFsdWU6IGlucHV0VmFsdWUgfSk7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbWVudVVJID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgTG9hZGluZ01lc3NhZ2UsXG4gICAgICAgICAgY29tbW9uUHJvcHMsXG4gICAgICAgICAgbWVzc2FnZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9tZXNzYWdlID0gbm9PcHRpb25zTWVzc2FnZSh7IGlucHV0VmFsdWU6IGlucHV0VmFsdWUgfSk7XG4gICAgICAgIGlmIChfbWVzc2FnZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIG1lbnVVSSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIE5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgICAgY29tbW9uUHJvcHMsXG4gICAgICAgICAgX21lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZhciBtZW51UGxhY2VtZW50UHJvcHMgPSB7XG4gICAgICAgIG1pbk1lbnVIZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICAgIG1heE1lbnVIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uLFxuICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXc6IG1lbnVTaG91bGRTY3JvbGxJbnRvVmlld1xuICAgICAgfTtcblxuICAgICAgdmFyIG1lbnVFbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9NZW51Lk1lbnVQbGFjZXIsXG4gICAgICAgIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgbWVudVBsYWNlbWVudFByb3BzKSxcbiAgICAgICAgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIHJlZiA9IF9yZWYyLnJlZixcbiAgICAgICAgICAgICAgX3JlZjIkcGxhY2VyUHJvcHMgPSBfcmVmMi5wbGFjZXJQcm9wcyxcbiAgICAgICAgICAgICAgcGxhY2VtZW50ID0gX3JlZjIkcGxhY2VyUHJvcHMucGxhY2VtZW50LFxuICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBfcmVmMiRwbGFjZXJQcm9wcy5tYXhIZWlnaHQ7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgTWVudSxcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgbWVudVBsYWNlbWVudFByb3BzLCB7XG4gICAgICAgICAgICAgIGlubmVyUmVmOiByZWYsXG4gICAgICAgICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bjogX3RoaXM1Lm9uTWVudU1vdXNlRG93bixcbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZTogX3RoaXM1Lm9uTWVudU1vdXNlTW92ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9pbmRleC5TY3JvbGxDYXB0b3IsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6IGNhcHR1cmVNZW51U2Nyb2xsLFxuICAgICAgICAgICAgICAgIG9uVG9wQXJyaXZlOiBvbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgICAgICAgICBvbkJvdHRvbUFycml2ZTogb25NZW51U2Nyb2xsVG9Cb3R0b21cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgX2luZGV4LlNjcm9sbEJsb2NrLFxuICAgICAgICAgICAgICAgIHsgaXNFbmFibGVkOiBtZW51U2hvdWxkQmxvY2tTY3JvbGwgfSxcbiAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIE1lbnVMaXN0LFxuICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyUmVmOiBfdGhpczUuZ2V0TWVudUxpc3RSZWYsXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBtZW51VUlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyBwb3NpdGlvbmluZyBiZWhhdmlvdXIgaXMgYWxtb3N0IGlkZW50aWNhbCBmb3IgcG9ydGFsbGVkIGFuZCBmaXhlZCxcbiAgICAgIC8vIHNvIHdlIHVzZSB0aGUgc2FtZSBjb21wb25lbnQuIHRoZSBhY3R1YWwgcG9ydGFsbGluZyBsb2dpYyBpcyBmb3JrZWRcbiAgICAgIC8vIHdpdGhpbiB0aGUgY29tcG9uZW50IGJhc2VkIG9uIGBtZW51UG9zaXRpb25gXG4gICAgICByZXR1cm4gbWVudVBvcnRhbFRhcmdldCB8fCBtZW51UG9zaXRpb24gPT09ICdmaXhlZCcgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTWVudVBvcnRhbCxcbiAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgYXBwZW5kVG86IG1lbnVQb3J0YWxUYXJnZXQsXG4gICAgICAgICAgY29udHJvbEVsZW1lbnQ6IHRoaXMuY29udHJvbFJlZixcbiAgICAgICAgICBtZW51UGxhY2VtZW50OiBtZW51UGxhY2VtZW50LFxuICAgICAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uXG4gICAgICAgIH0pLFxuICAgICAgICBtZW51RWxlbWVudFxuICAgICAgKSA6IG1lbnVFbGVtZW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckZvcm1GaWVsZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZvcm1GaWVsZCgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMTIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlbGltaXRlciA9IF9wcm9wczEyLmRlbGltaXRlcixcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzMTIuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc011bHRpID0gX3Byb3BzMTIuaXNNdWx0aSxcbiAgICAgICAgICBuYW1lID0gX3Byb3BzMTIubmFtZTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG5cblxuICAgICAgaWYgKCFuYW1lIHx8IGlzRGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgaWYgKGRlbGltaXRlcikge1xuICAgICAgICAgIHZhciBfdmFsdWUgPSBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNi5nZXRPcHRpb25WYWx1ZShvcHQpO1xuICAgICAgICAgIH0pLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBuYW1lOiBuYW1lLCB0eXBlOiAnaGlkZGVuJywgdmFsdWU6IF92YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW5wdXQgPSBzZWxlY3RWYWx1ZS5sZW5ndGggPiAwID8gc2VsZWN0VmFsdWUubWFwKGZ1bmN0aW9uIChvcHQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgIGtleTogJ2ktJyArIGksXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICB2YWx1ZTogX3RoaXM2LmdldE9wdGlvblZhbHVlKG9wdClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBuYW1lOiBuYW1lLCB0eXBlOiAnaGlkZGVuJyB9KTtcblxuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGlucHV0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF92YWx1ZTIgPSBzZWxlY3RWYWx1ZVswXSA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUoc2VsZWN0VmFsdWVbMF0pIDogJyc7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IG5hbWU6IG5hbWUsIHR5cGU6ICdoaWRkZW4nLCB2YWx1ZTogX3ZhbHVlMiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJMaXZlUmVnaW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGl2ZVJlZ2lvbigpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfaW5kZXguQTExeVRleHQsXG4gICAgICAgIHsgJ2FyaWEtbGl2ZSc6ICdhc3NlcnRpdmUnIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdwJyxcbiAgICAgICAgICB7IGlkOiAnYXJpYS1zZWxlY3Rpb24tZXZlbnQnIH0sXG4gICAgICAgICAgJ1xceEEwJyxcbiAgICAgICAgICB0aGlzLnN0YXRlLmFyaWFMaXZlU2VsZWN0aW9uXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdwJyxcbiAgICAgICAgICB7IGlkOiAnYXJpYS1jb250ZXh0JyB9LFxuICAgICAgICAgICdcXHhBMCcsXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3RBcmlhTGl2ZU1lc3NhZ2UoKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfY29tcG9uZW50czQgPSB0aGlzLmNvbXBvbmVudHMsXG4gICAgICAgICAgQ29udHJvbCA9IF9jb21wb25lbnRzNC5Db250cm9sLFxuICAgICAgICAgIEluZGljYXRvcnNDb250YWluZXIgPSBfY29tcG9uZW50czQuSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgICAgICAgICBTZWxlY3RDb250YWluZXIgPSBfY29tcG9uZW50czQuU2VsZWN0Q29udGFpbmVyLFxuICAgICAgICAgIFZhbHVlQ29udGFpbmVyID0gX2NvbXBvbmVudHM0LlZhbHVlQ29udGFpbmVyO1xuICAgICAgdmFyIF9wcm9wczEzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMxMy5jbGFzc05hbWUsXG4gICAgICAgICAgaWQgPSBfcHJvcHMxMy5pZCxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzMTMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3Byb3BzMTMubWVudUlzT3BlbjtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcblxuXG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzID0gdGhpcy5nZXRDb21tb25Qcm9wcygpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFNlbGVjdENvbnRhaW5lcixcbiAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93blxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5yZW5kZXJMaXZlUmVnaW9uKCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENvbnRyb2wsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRDb250cm9sUmVmLFxuICAgICAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkNvbnRyb2xNb3VzZURvd24sXG4gICAgICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Db250cm9sVG91Y2hFbmRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICAgICAgICBtZW51SXNPcGVuOiBtZW51SXNPcGVuXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICAgIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgeyBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkIH0pLFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJQbGFjZWhvbGRlck9yVmFsdWUoKSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVySW5wdXQoKVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBJbmRpY2F0b3JzQ29udGFpbmVyLFxuICAgICAgICAgICAgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7IGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQgfSksXG4gICAgICAgICAgICB0aGlzLnJlbmRlckNsZWFySW5kaWNhdG9yKCksXG4gICAgICAgICAgICB0aGlzLnJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yKCksXG4gICAgICAgICAgICB0aGlzLnJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHRoaXMucmVuZGVyTWVudSgpLFxuICAgICAgICB0aGlzLnJlbmRlckZvcm1GaWVsZCgpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZWxlY3Q7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5TZWxlY3QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgYXJpYUxpdmVTZWxlY3Rpb246ICcnLFxuICAgIGFyaWFMaXZlQ29udGV4dDogJycsXG4gICAgZm9jdXNlZE9wdGlvbjogbnVsbCxcbiAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgaW5wdXRJc0hpZGRlbjogZmFsc2UsXG4gICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICBpc0NvbXBvc2luZzogZmFsc2UsXG4gICAgbWVudU9wdGlvbnM6IHsgcmVuZGVyOiBbXSwgZm9jdXNhYmxlOiBbXSB9LFxuICAgIHNlbGVjdFZhbHVlOiBbXVxuICB9O1xuICB0aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgdGhpcy5jbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IGZhbHNlO1xuICB0aGlzLmhhc0dyb3VwcyA9IGZhbHNlO1xuICB0aGlzLmluaXRpYWxUb3VjaFggPSAwO1xuICB0aGlzLmluaXRpYWxUb3VjaFkgPSAwO1xuICB0aGlzLmluc3RhbmNlUHJlZml4ID0gJyc7XG4gIHRoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICB0aGlzLmNvbnRyb2xSZWYgPSBudWxsO1xuXG4gIHRoaXMuZ2V0Q29udHJvbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICBfdGhpczcuY29udHJvbFJlZiA9IHJlZjtcbiAgfTtcblxuICB0aGlzLmZvY3VzZWRPcHRpb25SZWYgPSBudWxsO1xuXG4gIHRoaXMuZ2V0Rm9jdXNlZE9wdGlvblJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICBfdGhpczcuZm9jdXNlZE9wdGlvblJlZiA9IHJlZjtcbiAgfTtcblxuICB0aGlzLm1lbnVMaXN0UmVmID0gbnVsbDtcblxuICB0aGlzLmdldE1lbnVMaXN0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgIF90aGlzNy5tZW51TGlzdFJlZiA9IHJlZjtcbiAgfTtcblxuICB0aGlzLmlucHV0UmVmID0gbnVsbDtcblxuICB0aGlzLmdldElucHV0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgIF90aGlzNy5pbnB1dFJlZiA9IHJlZjtcbiAgfTtcblxuICB0aGlzLmNhY2hlQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb21wb25lbnRzKSB7XG4gICAgX3RoaXM3LmNvbXBvbmVudHMgPSAoMCwgX2luZGV4My5kZWZhdWx0Q29tcG9uZW50cykoeyBjb21wb25lbnRzOiBjb21wb25lbnRzIH0pO1xuICB9O1xuXG4gIHRoaXMuZm9jdXMgPSB0aGlzLmZvY3VzSW5wdXQ7XG4gIHRoaXMuYmx1ciA9IHRoaXMuYmx1cklucHV0O1xuXG4gIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICB2YXIgX3Byb3BzMTQgPSBfdGhpczcucHJvcHMsXG4gICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzMTQub25DaGFuZ2UsXG4gICAgICAgIG5hbWUgPSBfcHJvcHMxNC5uYW1lO1xuXG4gICAgb25DaGFuZ2UobmV3VmFsdWUsIF9leHRlbmRzKHt9LCBhY3Rpb25NZXRhLCB7IG5hbWU6IG5hbWUgfSkpO1xuICB9O1xuXG4gIHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnc2V0LXZhbHVlJztcbiAgICB2YXIgb3B0aW9uID0gYXJndW1lbnRzWzJdO1xuICAgIHZhciBfcHJvcHMxNSA9IF90aGlzNy5wcm9wcyxcbiAgICAgICAgY2xvc2VNZW51T25TZWxlY3QgPSBfcHJvcHMxNS5jbG9zZU1lbnVPblNlbGVjdCxcbiAgICAgICAgaXNNdWx0aSA9IF9wcm9wczE1LmlzTXVsdGk7XG5cbiAgICBfdGhpczcub25JbnB1dENoYW5nZSgnJywgeyBhY3Rpb246ICdzZXQtdmFsdWUnIH0pO1xuICAgIGlmIChjbG9zZU1lbnVPblNlbGVjdCkge1xuICAgICAgX3RoaXM3LmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9ICFpc011bHRpO1xuICAgICAgX3RoaXM3Lm9uTWVudUNsb3NlKCk7XG4gICAgfVxuICAgIC8vIHdoZW4gdGhlIHNlbGVjdCB2YWx1ZSBzaG91bGQgY2hhbmdlLCB3ZSBzaG91bGQgcmVzZXQgZm9jdXNlZFZhbHVlXG4gICAgX3RoaXM3LmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlID0gdHJ1ZTtcbiAgICBfdGhpczcub25DaGFuZ2UobmV3VmFsdWUsIHsgYWN0aW9uOiBhY3Rpb24sIG9wdGlvbjogb3B0aW9uIH0pO1xuICB9O1xuXG4gIHRoaXMuc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgdmFyIF9wcm9wczE2ID0gX3RoaXM3LnByb3BzLFxuICAgICAgICBibHVySW5wdXRPblNlbGVjdCA9IF9wcm9wczE2LmJsdXJJbnB1dE9uU2VsZWN0LFxuICAgICAgICBpc011bHRpID0gX3Byb3BzMTYuaXNNdWx0aTtcblxuXG4gICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgIHZhciBfc2VsZWN0VmFsdWUzID0gX3RoaXM3LnN0YXRlLnNlbGVjdFZhbHVlO1xuXG4gICAgICBpZiAoX3RoaXM3LmlzT3B0aW9uU2VsZWN0ZWQobmV3VmFsdWUsIF9zZWxlY3RWYWx1ZTMpKSB7XG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSBfdGhpczcuZ2V0T3B0aW9uVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBfdGhpczcuc2V0VmFsdWUoX3NlbGVjdFZhbHVlMy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM3LmdldE9wdGlvblZhbHVlKGkpICE9PSBjYW5kaWRhdGU7XG4gICAgICAgIH0pLCAnZGVzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuICAgICAgICBfdGhpczcuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbih7XG4gICAgICAgICAgZXZlbnQ6ICdkZXNlbGVjdC1vcHRpb24nLFxuICAgICAgICAgIGNvbnRleHQ6IHsgdmFsdWU6IF90aGlzNy5nZXRPcHRpb25MYWJlbChuZXdWYWx1ZSkgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzNy5zZXRWYWx1ZShbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KF9zZWxlY3RWYWx1ZTMpLCBbbmV3VmFsdWVdKSwgJ3NlbGVjdC1vcHRpb24nLCBuZXdWYWx1ZSk7XG4gICAgICAgIF90aGlzNy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgICAgICBldmVudDogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgIGNvbnRleHQ6IHsgdmFsdWU6IF90aGlzNy5nZXRPcHRpb25MYWJlbChuZXdWYWx1ZSkgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXM3LnNldFZhbHVlKG5ld1ZhbHVlLCAnc2VsZWN0LW9wdGlvbicpO1xuICAgICAgX3RoaXM3LmFubm91bmNlQXJpYUxpdmVTZWxlY3Rpb24oe1xuICAgICAgICBldmVudDogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICBjb250ZXh0OiB7IHZhbHVlOiBfdGhpczcuZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChibHVySW5wdXRPblNlbGVjdCkge1xuICAgICAgX3RoaXM3LmJsdXJJbnB1dCgpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnJlbW92ZVZhbHVlID0gZnVuY3Rpb24gKHJlbW92ZWRWYWx1ZSkge1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzNy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgIHZhciBjYW5kaWRhdGUgPSBfdGhpczcuZ2V0T3B0aW9uVmFsdWUocmVtb3ZlZFZhbHVlKTtcbiAgICBfdGhpczcub25DaGFuZ2Uoc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gX3RoaXM3LmdldE9wdGlvblZhbHVlKGkpICE9PSBjYW5kaWRhdGU7XG4gICAgfSksIHtcbiAgICAgIGFjdGlvbjogJ3JlbW92ZS12YWx1ZScsXG4gICAgICByZW1vdmVkVmFsdWU6IHJlbW92ZWRWYWx1ZVxuICAgIH0pO1xuICAgIF90aGlzNy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgIGV2ZW50OiAncmVtb3ZlLXZhbHVlJyxcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgdmFsdWU6IHJlbW92ZWRWYWx1ZSA/IF90aGlzNy5nZXRPcHRpb25MYWJlbChyZW1vdmVkVmFsdWUpIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSk7XG4gICAgX3RoaXM3LmZvY3VzSW5wdXQoKTtcbiAgfTtcblxuICB0aGlzLmNsZWFyVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlzTXVsdGkgPSBfdGhpczcucHJvcHMuaXNNdWx0aTtcblxuICAgIF90aGlzNy5vbkNoYW5nZShpc011bHRpID8gW10gOiBudWxsLCB7IGFjdGlvbjogJ2NsZWFyJyB9KTtcbiAgfTtcblxuICB0aGlzLnBvcFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzNy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgIHZhciBsYXN0U2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdFZhbHVlW3NlbGVjdFZhbHVlLmxlbmd0aCAtIDFdO1xuICAgIF90aGlzNy5hbm5vdW5jZUFyaWFMaXZlU2VsZWN0aW9uKHtcbiAgICAgIGV2ZW50OiAncG9wLXZhbHVlJyxcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgdmFsdWU6IGxhc3RTZWxlY3RlZFZhbHVlID8gX3RoaXM3LmdldE9wdGlvbkxhYmVsKGxhc3RTZWxlY3RlZFZhbHVlKSA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0pO1xuICAgIF90aGlzNy5vbkNoYW5nZShzZWxlY3RWYWx1ZS5zbGljZSgwLCBzZWxlY3RWYWx1ZS5sZW5ndGggLSAxKSwge1xuICAgICAgYWN0aW9uOiAncG9wLXZhbHVlJyxcbiAgICAgIHJlbW92ZWRWYWx1ZTogbGFzdFNlbGVjdGVkVmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldE9wdGlvbkxhYmVsID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gX3RoaXM3LnByb3BzLmdldE9wdGlvbkxhYmVsKGRhdGEpO1xuICB9O1xuXG4gIHRoaXMuZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiBfdGhpczcucHJvcHMuZ2V0T3B0aW9uVmFsdWUoZGF0YSk7XG4gIH07XG5cbiAgdGhpcy5nZXRTdHlsZXMgPSBmdW5jdGlvbiAoa2V5LCBwcm9wcykge1xuICAgIHZhciBiYXNlID0gX3N0eWxlcy5kZWZhdWx0U3R5bGVzW2tleV0ocHJvcHMpO1xuICAgIGJhc2UuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgIHZhciBjdXN0b20gPSBfdGhpczcucHJvcHMuc3R5bGVzW2tleV07XG4gICAgcmV0dXJuIGN1c3RvbSA/IGN1c3RvbShiYXNlLCBwcm9wcykgOiBiYXNlO1xuICB9O1xuXG4gIHRoaXMuZ2V0RWxlbWVudElkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gX3RoaXM3Lmluc3RhbmNlUHJlZml4ICsgJy0nICsgZWxlbWVudDtcbiAgfTtcblxuICB0aGlzLmdldEFjdGl2ZURlc2NlbmRlbnRJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWVudUlzT3BlbiA9IF90aGlzNy5wcm9wcy5tZW51SXNPcGVuO1xuICAgIHZhciBfc3RhdGU4ID0gX3RoaXM3LnN0YXRlLFxuICAgICAgICBtZW51T3B0aW9ucyA9IF9zdGF0ZTgubWVudU9wdGlvbnMsXG4gICAgICAgIGZvY3VzZWRPcHRpb24gPSBfc3RhdGU4LmZvY3VzZWRPcHRpb247XG5cblxuICAgIGlmICghZm9jdXNlZE9wdGlvbiB8fCAhbWVudUlzT3BlbikgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIHZhciBpbmRleCA9IG1lbnVPcHRpb25zLmZvY3VzYWJsZS5pbmRleE9mKGZvY3VzZWRPcHRpb24pO1xuICAgIHZhciBvcHRpb24gPSBtZW51T3B0aW9ucy5yZW5kZXJbaW5kZXhdO1xuXG4gICAgcmV0dXJuIG9wdGlvbiAmJiBvcHRpb24ua2V5O1xuICB9O1xuXG4gIHRoaXMuYW5ub3VuY2VBcmlhTGl2ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgIHZhciBldmVudCA9IF9yZWYzLmV2ZW50LFxuICAgICAgICBjb250ZXh0ID0gX3JlZjMuY29udGV4dDtcblxuICAgIF90aGlzNy5zZXRTdGF0ZSh7XG4gICAgICBhcmlhTGl2ZVNlbGVjdGlvbjogKDAsIF9pbmRleDIudmFsdWVFdmVudEFyaWFNZXNzYWdlKShldmVudCwgY29udGV4dClcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmFubm91bmNlQXJpYUxpdmVDb250ZXh0ID0gZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgdmFyIGV2ZW50ID0gX3JlZjQuZXZlbnQsXG4gICAgICAgIGNvbnRleHQgPSBfcmVmNC5jb250ZXh0O1xuXG4gICAgX3RoaXM3LnNldFN0YXRlKHtcbiAgICAgIGFyaWFMaXZlQ29udGV4dDogKDAsIF9pbmRleDIuaW5zdHJ1Y3Rpb25zQXJpYU1lc3NhZ2UpKGV2ZW50LCBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgICAgICBsYWJlbDogX3RoaXM3LnByb3BzWydhcmlhLWxhYmVsJ11cbiAgICAgIH0pKVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25NZW51TW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIF90aGlzNy5mb2N1c0lucHV0KCk7XG4gIH07XG5cbiAgdGhpcy5vbk1lbnVNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczcuYmxvY2tPcHRpb25Ib3ZlciA9IGZhbHNlO1xuICB9O1xuXG4gIHRoaXMub25Db250cm9sTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIG9wZW5NZW51T25DbGljayA9IF90aGlzNy5wcm9wcy5vcGVuTWVudU9uQ2xpY2s7XG5cbiAgICBpZiAoIV90aGlzNy5zdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgIGlmIChvcGVuTWVudU9uQ2xpY2spIHtcbiAgICAgICAgX3RoaXM3Lm9wZW5BZnRlckZvY3VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIF90aGlzNy5mb2N1c0lucHV0KCk7XG4gICAgfSBlbHNlIGlmICghX3RoaXM3LnByb3BzLm1lbnVJc09wZW4pIHtcbiAgICAgIF90aGlzNy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gJEZsb3dGaXhNZSBIVE1MRWxlbWVudCB0eXBlIGRvZXMgbm90IGhhdmUgdGFnTmFtZSBwcm9wZXJ0eVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICAgIF90aGlzNy5vbk1lbnVDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyAkRmxvd0ZpeE1lIEhUTUxFbGVtZW50IHR5cGUgZG9lcyBub3QgaGF2ZSB0YWdOYW1lIHByb3BlcnR5XG4gICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoX3RoaXM3LnByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICB2YXIgX3Byb3BzMTcgPSBfdGhpczcucHJvcHMsXG4gICAgICAgIGlzTXVsdGkgPSBfcHJvcHMxNy5pc011bHRpLFxuICAgICAgICBtZW51SXNPcGVuID0gX3Byb3BzMTcubWVudUlzT3BlbjtcblxuICAgIF90aGlzNy5mb2N1c0lucHV0KCk7XG4gICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgIF90aGlzNy5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSAhaXNNdWx0aTtcbiAgICAgIF90aGlzNy5vbk1lbnVDbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpczcub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gaWdub3JlIG1vdXNlIGV2ZW50cyB0aGF0IHdlcmVuJ3QgdHJpZ2dlcmVkIGJ5IHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXM3LmNsZWFyVmFsdWUoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBfdGhpczcub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczcuZm9jdXNJbnB1dCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25TY3JvbGwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIF90aGlzNy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgKDAsIF91dGlscy5pc0RvY3VtZW50RWxlbWVudCkoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBfdGhpczcucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhpczcucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChfdGhpczcucHJvcHMuY2xvc2VNZW51T25TY3JvbGwoZXZlbnQpKSB7XG4gICAgICAgIF90aGlzNy5wcm9wcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpczcuc2V0U3RhdGUoe1xuICAgICAgaXNDb21wb3Npbmc6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLm9uQ29tcG9zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXM3LnNldFN0YXRlKHtcbiAgICAgIGlzQ29tcG9zaW5nOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgdmFyIHRvdWNoZXMgPSBfcmVmNS50b3VjaGVzO1xuXG4gICAgdmFyIHRvdWNoID0gdG91Y2hlcy5pdGVtKDApO1xuICAgIGlmICghdG91Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfdGhpczcuaW5pdGlhbFRvdWNoWCA9IHRvdWNoLmNsaWVudFg7XG4gICAgX3RoaXM3LmluaXRpYWxUb3VjaFkgPSB0b3VjaC5jbGllbnRZO1xuICAgIF90aGlzNy51c2VySXNEcmFnZ2luZyA9IGZhbHNlO1xuICB9O1xuXG4gIHRoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICB2YXIgdG91Y2hlcyA9IF9yZWY2LnRvdWNoZXM7XG5cbiAgICB2YXIgdG91Y2ggPSB0b3VjaGVzLml0ZW0oMCk7XG4gICAgaWYgKCF0b3VjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWx0YVggPSBNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gX3RoaXM3LmluaXRpYWxUb3VjaFgpO1xuICAgIHZhciBkZWx0YVkgPSBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gX3RoaXM3LmluaXRpYWxUb3VjaFkpO1xuICAgIHZhciBtb3ZlVGhyZXNob2xkID0gNTtcblxuICAgIF90aGlzNy51c2VySXNEcmFnZ2luZyA9IGRlbHRhWCA+IG1vdmVUaHJlc2hvbGQgfHwgZGVsdGFZID4gbW92ZVRocmVzaG9sZDtcbiAgfTtcblxuICB0aGlzLm9uVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoX3RoaXM3LnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICAvLyB0eXBlIGNhc3QgdGhlIEV2ZW50VGFyZ2V0XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgIC8vIGNsb3NlIHRoZSBtZW51IGlmIHRoZSB1c2VyIHRhcHMgb3V0c2lkZVxuICAgIGlmIChfdGhpczcuY29udHJvbFJlZiAmJiAhX3RoaXM3LmNvbnRyb2xSZWYuY29udGFpbnModGFyZ2V0KSAmJiBfdGhpczcubWVudUxpc3RSZWYgJiYgIV90aGlzNy5tZW51TGlzdFJlZi5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICBfdGhpczcuYmx1cklucHV0KCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgbW92ZSB2YXJzXG4gICAgX3RoaXM3LmluaXRpYWxUb3VjaFggPSAwO1xuICAgIF90aGlzNy5pbml0aWFsVG91Y2hZID0gMDtcbiAgfTtcblxuICB0aGlzLm9uQ29udHJvbFRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKF90aGlzNy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgX3RoaXM3Lm9uQ29udHJvbE1vdXNlRG93bihldmVudCk7XG4gIH07XG5cbiAgdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoX3RoaXM3LnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICBfdGhpczcub25DbGVhckluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gIH07XG5cbiAgdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoX3RoaXM3LnVzZXJJc0RyYWdnaW5nKSByZXR1cm47XG5cbiAgICBfdGhpczcub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBpbnB1dFZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICBfdGhpczcuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gZmFsc2U7XG4gICAgX3RoaXM3Lm9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgeyBhY3Rpb246ICdpbnB1dC1jaGFuZ2UnIH0pO1xuICAgIF90aGlzNy5vbk1lbnVPcGVuKCk7XG4gIH07XG5cbiAgdGhpcy5vbklucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3Byb3BzMTggPSBfdGhpczcucHJvcHMsXG4gICAgICAgIGlzU2VhcmNoYWJsZSA9IF9wcm9wczE4LmlzU2VhcmNoYWJsZSxcbiAgICAgICAgaXNNdWx0aSA9IF9wcm9wczE4LmlzTXVsdGk7XG5cbiAgICBpZiAoX3RoaXM3LnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIF90aGlzNy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gICAgX3RoaXM3LmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IGZhbHNlO1xuICAgIF90aGlzNy5hbm5vdW5jZUFyaWFMaXZlQ29udGV4dCh7XG4gICAgICBldmVudDogJ2lucHV0JyxcbiAgICAgIGNvbnRleHQ6IHsgaXNTZWFyY2hhYmxlOiBpc1NlYXJjaGFibGUsIGlzTXVsdGk6IGlzTXVsdGkgfVxuICAgIH0pO1xuICAgIF90aGlzNy5zZXRTdGF0ZSh7XG4gICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoX3RoaXM3Lm9wZW5BZnRlckZvY3VzIHx8IF90aGlzNy5wcm9wcy5vcGVuTWVudU9uRm9jdXMpIHtcbiAgICAgIF90aGlzNy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICB9XG4gICAgX3RoaXM3Lm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChfdGhpczcubWVudUxpc3RSZWYgJiYgX3RoaXM3Lm1lbnVMaXN0UmVmLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBfdGhpczcuaW5wdXRSZWYuZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKF90aGlzNy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIF90aGlzNy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgICBfdGhpczcub25JbnB1dENoYW5nZSgnJywgeyBhY3Rpb246ICdpbnB1dC1ibHVyJyB9KTtcbiAgICBfdGhpczcub25NZW51Q2xvc2UoKTtcbiAgICBfdGhpczcuc2V0U3RhdGUoe1xuICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25PcHRpb25Ib3ZlciA9IGZ1bmN0aW9uIChmb2N1c2VkT3B0aW9uKSB7XG4gICAgaWYgKF90aGlzNy5ibG9ja09wdGlvbkhvdmVyIHx8IF90aGlzNy5zdGF0ZS5mb2N1c2VkT3B0aW9uID09PSBmb2N1c2VkT3B0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF90aGlzNy5zZXRTdGF0ZSh7IGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24gfSk7XG4gIH07XG5cbiAgdGhpcy5zaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcHJvcHMxOSA9IF90aGlzNy5wcm9wcyxcbiAgICAgICAgaGlkZVNlbGVjdGVkT3B0aW9ucyA9IF9wcm9wczE5LmhpZGVTZWxlY3RlZE9wdGlvbnMsXG4gICAgICAgIGlzTXVsdGkgPSBfcHJvcHMxOS5pc011bHRpO1xuXG4gICAgaWYgKGhpZGVTZWxlY3RlZE9wdGlvbnMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzTXVsdGk7XG4gICAgcmV0dXJuIGhpZGVTZWxlY3RlZE9wdGlvbnM7XG4gIH07XG5cbiAgdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3Byb3BzMjAgPSBfdGhpczcucHJvcHMsXG4gICAgICAgIGlzTXVsdGkgPSBfcHJvcHMyMC5pc011bHRpLFxuICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWUgPSBfcHJvcHMyMC5iYWNrc3BhY2VSZW1vdmVzVmFsdWUsXG4gICAgICAgIGVzY2FwZUNsZWFyc1ZhbHVlID0gX3Byb3BzMjAuZXNjYXBlQ2xlYXJzVmFsdWUsXG4gICAgICAgIGlucHV0VmFsdWUgPSBfcHJvcHMyMC5pbnB1dFZhbHVlLFxuICAgICAgICBpc0NsZWFyYWJsZSA9IF9wcm9wczIwLmlzQ2xlYXJhYmxlLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzMjAuaXNEaXNhYmxlZCxcbiAgICAgICAgbWVudUlzT3BlbiA9IF9wcm9wczIwLm1lbnVJc09wZW4sXG4gICAgICAgIG9uS2V5RG93biA9IF9wcm9wczIwLm9uS2V5RG93bixcbiAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gX3Byb3BzMjAudGFiU2VsZWN0c1ZhbHVlLFxuICAgICAgICBvcGVuTWVudU9uRm9jdXMgPSBfcHJvcHMyMC5vcGVuTWVudU9uRm9jdXM7XG4gICAgdmFyIF9zdGF0ZTkgPSBfdGhpczcuc3RhdGUsXG4gICAgICAgIGlzQ29tcG9zaW5nID0gX3N0YXRlOS5pc0NvbXBvc2luZyxcbiAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF9zdGF0ZTkuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3N0YXRlOS5mb2N1c2VkVmFsdWUsXG4gICAgICAgIHNlbGVjdFZhbHVlID0gX3N0YXRlOS5zZWxlY3RWYWx1ZTtcblxuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2Ygb25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbktleURvd24oZXZlbnQpO1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJsb2NrIG9wdGlvbiBob3ZlciBldmVudHMgd2hlbiB0aGUgdXNlciBoYXMganVzdCBwcmVzc2VkIGEga2V5XG4gICAgX3RoaXM3LmJsb2NrT3B0aW9uSG92ZXIgPSB0cnVlO1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICBfdGhpczcuZm9jdXNWYWx1ZSgncHJldmlvdXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgaWYgKCFpc011bHRpIHx8IGlucHV0VmFsdWUpIHJldHVybjtcbiAgICAgICAgX3RoaXM3LmZvY3VzVmFsdWUoJ25leHQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgaWYgKGlucHV0VmFsdWUpIHJldHVybjtcbiAgICAgICAgaWYgKGZvY3VzZWRWYWx1ZSkge1xuICAgICAgICAgIF90aGlzNy5yZW1vdmVWYWx1ZShmb2N1c2VkVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghYmFja3NwYWNlUmVtb3Zlc1ZhbHVlKSByZXR1cm47XG4gICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgIF90aGlzNy5wb3BWYWx1ZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUpIHtcbiAgICAgICAgICAgIF90aGlzNy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgaWYgKGlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5IHx8ICFtZW51SXNPcGVuIHx8ICF0YWJTZWxlY3RzVmFsdWUgfHwgIWZvY3VzZWRPcHRpb24gfHxcbiAgICAgICAgLy8gZG9uJ3QgY2FwdHVyZSB0aGUgZXZlbnQgaWYgdGhlIG1lbnUgb3BlbnMgb24gZm9jdXMgYW5kIHRoZSBmb2N1c2VkXG4gICAgICAgIC8vIG9wdGlvbiBpcyBhbHJlYWR5IHNlbGVjdGVkOyBpdCBicmVha3MgdGhlIGZsb3cgb2YgbmF2aWdhdGlvblxuICAgICAgICBvcGVuTWVudU9uRm9jdXMgJiYgX3RoaXM3LmlzT3B0aW9uU2VsZWN0ZWQoZm9jdXNlZE9wdGlvbiwgc2VsZWN0VmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzNy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgIGlmICghZm9jdXNlZE9wdGlvbikgcmV0dXJuO1xuICAgICAgICAgIGlmIChpc0NvbXBvc2luZykgcmV0dXJuO1xuICAgICAgICAgIF90aGlzNy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM3LmZvY3VzT3B0aW9uKCdmaXJzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICBfdGhpczcuaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgX3RoaXM3Lm9uSW5wdXRDaGFuZ2UoJycsIHsgYWN0aW9uOiAnbWVudS1jbG9zZScgfSk7XG4gICAgICAgICAgX3RoaXM3Lm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUgJiYgZXNjYXBlQ2xlYXJzVmFsdWUpIHtcbiAgICAgICAgICBfdGhpczcuY2xlYXJWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIC8vIHNwYWNlXG4gICAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVudUlzT3Blbikge1xuICAgICAgICAgIF90aGlzNy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHJldHVybjtcbiAgICAgICAgX3RoaXM3LnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICBfdGhpczcuZm9jdXNPcHRpb24oJ3VwJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM3Lm9wZW5NZW51KCdsYXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgIF90aGlzNy5mb2N1c09wdGlvbignZG93bicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzNy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgIGlmICghbWVudUlzT3BlbikgcmV0dXJuO1xuICAgICAgICBfdGhpczcuZm9jdXNPcHRpb24oJ3BhZ2V1cCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG4gICAgICAgIF90aGlzNy5mb2N1c09wdGlvbigncGFnZWRvd24nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG4gICAgICAgIF90aGlzNy5mb2N1c09wdGlvbignZmlyc3QnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcbiAgICAgICAgX3RoaXM3LmZvY3VzT3B0aW9uKCdsYXN0Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2VsZWN0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTWVudVBvcnRhbCA9IGV4cG9ydHMubWVudVBvcnRhbENTUyA9IGV4cG9ydHMuTG9hZGluZ01lc3NhZ2UgPSBleHBvcnRzLk5vT3B0aW9uc01lc3NhZ2UgPSBleHBvcnRzLmxvYWRpbmdNZXNzYWdlQ1NTID0gZXhwb3J0cy5ub09wdGlvbnNNZXNzYWdlQ1NTID0gZXhwb3J0cy5NZW51TGlzdCA9IGV4cG9ydHMubWVudUxpc3RDU1MgPSBleHBvcnRzLk1lbnVQbGFjZXIgPSBleHBvcnRzLm1lbnVDU1MgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMuZ2V0TWVudVBsYWNlbWVudCA9IGdldE1lbnVQbGFjZW1lbnQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9lbW90aW9uID0gcmVxdWlyZSgnZW1vdGlvbicpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBHZXQgTWVudSBQbGFjZW1lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRNZW51UGxhY2VtZW50KF9yZWYpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWYubWF4SGVpZ2h0LFxuICAgICAgbWVudUVsID0gX3JlZi5tZW51RWwsXG4gICAgICBtaW5IZWlnaHQgPSBfcmVmLm1pbkhlaWdodCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50LFxuICAgICAgc2hvdWxkU2Nyb2xsID0gX3JlZi5zaG91bGRTY3JvbGwsXG4gICAgICBpc0ZpeGVkUG9zaXRpb24gPSBfcmVmLmlzRml4ZWRQb3NpdGlvbixcbiAgICAgIHRoZW1lID0gX3JlZi50aGVtZTtcbiAgdmFyIHNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nO1xuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSAoMCwgX3V0aWxzLmdldFNjcm9sbFBhcmVudCkobWVudUVsKTtcbiAgdmFyIGRlZmF1bHRTdGF0ZSA9IHsgcGxhY2VtZW50OiAnYm90dG9tJywgbWF4SGVpZ2h0OiBtYXhIZWlnaHQgfTtcblxuICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZywgcmV0dXJuIGRlZmF1bHQgc3RhdGVcbiAgaWYgKCFtZW51RWwgfHwgIW1lbnVFbC5vZmZzZXRQYXJlbnQpIHJldHVybiBkZWZhdWx0U3RhdGU7XG5cbiAgLy8gd2UgY2FuJ3QgdHJ1c3QgYHNjcm9sbFBhcmVudC5zY3JvbGxIZWlnaHRgIC0tPiBpdCBtYXkgaW5jcmVhc2Ugd2hlblxuICAvLyB0aGUgbWVudSBpcyByZW5kZXJlZFxuXG4gIHZhciBfc2Nyb2xsUGFyZW50JGdldEJvdW4gPSBzY3JvbGxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBzY3JvbGxIZWlnaHQgPSBfc2Nyb2xsUGFyZW50JGdldEJvdW4uaGVpZ2h0O1xuXG4gIHZhciBfbWVudUVsJGdldEJvdW5kaW5nQ2wgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBtZW51Qm90dG9tID0gX21lbnVFbCRnZXRCb3VuZGluZ0NsLmJvdHRvbSxcbiAgICAgIG1lbnVIZWlnaHQgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wuaGVpZ2h0LFxuICAgICAgbWVudVRvcCA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC50b3A7XG5cbiAgLy8gJEZsb3dGaXhNZSBmdW5jdGlvbiByZXR1cm5zIGFib3ZlIGlmIHRoZXJlJ3Mgbm8gb2Zmc2V0UGFyZW50XG5cblxuICB2YXIgX21lbnVFbCRvZmZzZXRQYXJlbnQkID0gbWVudUVsLm9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbnRhaW5lclRvcCA9IF9tZW51RWwkb2Zmc2V0UGFyZW50JC50b3A7XG5cbiAgdmFyIHZpZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBzY3JvbGxUb3AgPSAoMCwgX3V0aWxzLmdldFNjcm9sbFRvcCkoc2Nyb2xsUGFyZW50KTtcblxuICB2YXIgbWFyZ2luQm90dG9tID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpbkJvdHRvbSwgMTApO1xuICB2YXIgbWFyZ2luVG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpblRvcCwgMTApO1xuICB2YXIgdmlld1NwYWNlQWJvdmUgPSBjb250YWluZXJUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciB2aWV3U3BhY2VCZWxvdyA9IHZpZXdIZWlnaHQgLSBtZW51VG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VBYm92ZSA9IHZpZXdTcGFjZUFib3ZlICsgc2Nyb2xsVG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VCZWxvdyA9IHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCAtIG1lbnVUb3A7XG5cbiAgdmFyIHNjcm9sbERvd24gPSBtZW51Qm90dG9tIC0gdmlld0hlaWdodCArIHNjcm9sbFRvcCArIG1hcmdpbkJvdHRvbTtcbiAgdmFyIHNjcm9sbFVwID0gc2Nyb2xsVG9wICsgbWVudVRvcCAtIG1hcmdpblRvcDtcbiAgdmFyIHNjcm9sbER1cmF0aW9uID0gMTYwO1xuXG4gIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgY2FzZSAnYXV0byc6XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIC8vIDE6IHRoZSBtZW51IHdpbGwgZml0LCBkbyBub3RoaW5nXG4gICAgICBpZiAodmlld1NwYWNlQmVsb3cgPj0gbWVudUhlaWdodCkge1xuICAgICAgICByZXR1cm4geyBwbGFjZW1lbnQ6ICdib3R0b20nLCBtYXhIZWlnaHQ6IG1heEhlaWdodCB9O1xuICAgICAgfVxuXG4gICAgICAvLyAyOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgc2Nyb2xsZWRcbiAgICAgIGlmIChzY3JvbGxTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgKDAsIF91dGlscy5hbmltYXRlZFNjcm9sbFRvKShzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24sIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHBsYWNlbWVudDogJ2JvdHRvbScsIG1heEhlaWdodDogbWF4SGVpZ2h0IH07XG4gICAgICB9XG5cbiAgICAgIC8vIDM6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBjb25zdHJhaW5lZFxuICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VCZWxvdyA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUJlbG93ID49IG1pbkhlaWdodCkge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgKDAsIF91dGlscy5hbmltYXRlZFNjcm9sbFRvKShzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24sIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIHdhbnQgdG8gcHJvdmlkZSBhcyBtdWNoIG9mIHRoZSBtZW51IGFzIHBvc3NpYmxlIHRvIHRoZSB1c2VyLFxuICAgICAgICAvLyBzbyBnaXZlIHRoZW0gd2hhdGV2ZXIgaXMgYXZhaWxhYmxlIGJlbG93IHJhdGhlciB0aGFuIHRoZSBtaW5IZWlnaHQuXG4gICAgICAgIHZhciBjb25zdHJhaW5lZEhlaWdodCA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUJlbG93IC0gbWFyZ2luQm90dG9tIDogc2Nyb2xsU3BhY2VCZWxvdyAtIG1hcmdpbkJvdHRvbTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBjb25zdHJhaW5lZEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBGb3JrZWQgYmV2aW91ciB3aGVuIHRoZXJlIGlzbid0IGVub3VnaCBzcGFjZSBiZWxvd1xuXG4gICAgICAvLyBBVVRPOiBmbGlwIHRoZSBtZW51LCByZW5kZXIgYWJvdmVcbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdhdXRvJyB8fCBpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgLy8gbWF5IG5lZWQgdG8gYmUgY29uc3RyYWluZWQgYWZ0ZXIgZmxpcHBpbmdcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgICAgdmFyIHNwYWNlQWJvdmUgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSA6IHNjcm9sbFNwYWNlQWJvdmU7XG5cbiAgICAgICAgaWYgKHNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgX2NvbnN0cmFpbmVkSGVpZ2h0ID0gTWF0aC5taW4oc3BhY2VBYm92ZSAtIG1hcmdpbkJvdHRvbSAtIHNwYWNpbmcuY29udHJvbEhlaWdodCwgbWF4SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHBsYWNlbWVudDogJ3RvcCcsIG1heEhlaWdodDogX2NvbnN0cmFpbmVkSGVpZ2h0IH07XG4gICAgICB9XG5cbiAgICAgIC8vIEJPVFRPTTogYWxsb3cgYnJvd3NlciB0byBpbmNyZWFzZSBzY3JvbGxhYmxlIGFyZWEgYW5kIGltbWVkaWF0ZWx5IHNldCBzY3JvbGxcbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgICgwLCBfdXRpbHMuc2Nyb2xsVG8pKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93bik7XG4gICAgICAgIHJldHVybiB7IHBsYWNlbWVudDogJ2JvdHRvbScsIG1heEhlaWdodDogbWF4SGVpZ2h0IH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b3AnOlxuICAgICAgLy8gMTogdGhlIG1lbnUgd2lsbCBmaXQsIGRvIG5vdGhpbmdcbiAgICAgIGlmICh2aWV3U3BhY2VBYm92ZSA+PSBtZW51SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7IHBsYWNlbWVudDogJ3RvcCcsIG1heEhlaWdodDogbWF4SGVpZ2h0IH07XG4gICAgICB9XG5cbiAgICAgIC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuICAgICAgaWYgKHNjcm9sbFNwYWNlQWJvdmUgPj0gbWVudUhlaWdodCAmJiAhaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICAoMCwgX3V0aWxzLmFuaW1hdGVkU2Nyb2xsVG8pKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHBsYWNlbWVudDogJ3RvcCcsIG1heEhlaWdodDogbWF4SGVpZ2h0IH07XG4gICAgICB9XG5cbiAgICAgIC8vIDM6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBjb25zdHJhaW5lZFxuICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICB2YXIgX2NvbnN0cmFpbmVkSGVpZ2h0MiA9IG1heEhlaWdodDtcblxuICAgICAgICAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgYXMgbXVjaCBvZiB0aGUgbWVudSBhcyBwb3NzaWJsZSB0byB0aGUgdXNlcixcbiAgICAgICAgLy8gc28gZ2l2ZSB0aGVtIHdoYXRldmVyIGlzIGF2YWlsYWJsZSBiZWxvdyByYXRoZXIgdGhhbiB0aGUgbWluSGVpZ2h0LlxuICAgICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUFib3ZlID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgX2NvbnN0cmFpbmVkSGVpZ2h0MiA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUFib3ZlIC0gbWFyZ2luVG9wIDogc2Nyb2xsU3BhY2VBYm92ZSAtIG1hcmdpblRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICAoMCwgX3V0aWxzLmFuaW1hdGVkU2Nyb2xsVG8pKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodDJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gNC4gbm90IGVub3VnaCBzcGFjZSwgdGhlIGJyb3dzZXIgV0lMTCBOT1QgaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIHdoZW5cbiAgICAgIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50IHJlbmRlcmVkIGFib3ZlIHRoZSB2aWV3cG9ydCAob25seSBiZWxvdykuXG4gICAgICAvLyBGbGlwIHRoZSBtZW51LCByZW5kZXIgYmVsb3dcbiAgICAgIHJldHVybiB7IHBsYWNlbWVudDogJ2JvdHRvbScsIG1heEhlaWdodDogbWF4SGVpZ2h0IH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwbGFjZW1lbnQgcHJvdmlkZWQgXCInICsgcGxhY2VtZW50ICsgJ1wiLicpO1xuICB9XG5cbiAgLy8gZnVsZmlsIGNvbnRyYWN0IHdpdGggZmxvdzogaW1wbGljaXQgcmV0dXJuIHZhbHVlIG9mIHVuZGVmaW5lZFxuICByZXR1cm4gZGVmYXVsdFN0YXRlO1xufVxuXG4vLyBNZW51IENvbXBvbmVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCkge1xuICB2YXIgcGxhY2VtZW50VG9DU1NQcm9wID0geyBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XG4gIHJldHVybiBwbGFjZW1lbnQgPyBwbGFjZW1lbnRUb0NTU1Byb3BbcGxhY2VtZW50XSA6ICdib3R0b20nO1xufVxudmFyIGNvZXJjZVBsYWNlbWVudCA9IGZ1bmN0aW9uIGNvZXJjZVBsYWNlbWVudChwKSB7XG4gIHJldHVybiBwID09PSAnYXV0bycgPyAnYm90dG9tJyA6IHA7XG59O1xuXG52YXIgbWVudUNTUyA9IGV4cG9ydHMubWVudUNTUyA9IGZ1bmN0aW9uIG1lbnVDU1MoX3JlZjIpIHtcbiAgdmFyIF9yZWYzO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgc3BhY2luZyA9IF9yZWYyJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfcmVmMyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCksICcxMDAlJyksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgJ2JhY2tncm91bmRDb2xvcicsIGNvbG9ycy5uZXV0cmFsMCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgJ2JvcmRlclJhZGl1cycsIGJvcmRlclJhZGl1cyksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgJ2JveFNoYWRvdycsICcwIDAgMCAxcHggaHNsYSgwLCAwJSwgMCUsIDAuMSksIDAgNHB4IDExcHggaHNsYSgwLCAwJSwgMCUsIDAuMSknKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCAnbWFyZ2luQm90dG9tJywgc3BhY2luZy5tZW51R3V0dGVyKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCAnbWFyZ2luVG9wJywgc3BhY2luZy5tZW51R3V0dGVyKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCAnd2lkdGgnLCAnMTAwJScpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjMsICd6SW5kZXgnLCAxKSwgX3JlZjM7XG59O1xuXG4vLyBOT1RFOiBpbnRlcm5hbCBvbmx5XG5cbnZhciBNZW51UGxhY2VyID0gZXhwb3J0cy5NZW51UGxhY2VyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbnVQbGFjZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbnVQbGFjZXIoKSB7XG4gICAgdmFyIF9yZWY0O1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51UGxhY2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWY0ID0gTWVudVBsYWNlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1lbnVQbGFjZXIpKS5jYWxsLmFwcGx5KF9yZWY0LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBtYXhIZWlnaHQ6IF90aGlzLnByb3BzLm1heE1lbnVIZWlnaHQsXG4gICAgICBwbGFjZW1lbnQ6IG51bGxcbiAgICB9LCBfdGhpcy5nZXRQbGFjZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW5NZW51SGVpZ2h0ID0gX3RoaXMkcHJvcHMubWluTWVudUhlaWdodCxcbiAgICAgICAgICBtYXhNZW51SGVpZ2h0ID0gX3RoaXMkcHJvcHMubWF4TWVudUhlaWdodCxcbiAgICAgICAgICBtZW51UGxhY2VtZW50ID0gX3RoaXMkcHJvcHMubWVudVBsYWNlbWVudCxcbiAgICAgICAgICBtZW51UG9zaXRpb24gPSBfdGhpcyRwcm9wcy5tZW51UG9zaXRpb24sXG4gICAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gX3RoaXMkcHJvcHMubWVudVNob3VsZFNjcm9sbEludG9WaWV3LFxuICAgICAgICAgIHRoZW1lID0gX3RoaXMkcHJvcHMudGhlbWU7XG4gICAgICB2YXIgZ2V0UG9ydGFsUGxhY2VtZW50ID0gX3RoaXMuY29udGV4dC5nZXRQb3J0YWxQbGFjZW1lbnQ7XG5cblxuICAgICAgaWYgKCFyZWYpIHJldHVybjtcblxuICAgICAgLy8gRE8gTk9UIHNjcm9sbCBpZiBwb3NpdGlvbiBpcyBmaXhlZFxuICAgICAgdmFyIGlzRml4ZWRQb3NpdGlvbiA9IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgICAgIHZhciBzaG91bGRTY3JvbGwgPSBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgJiYgIWlzRml4ZWRQb3NpdGlvbjtcblxuICAgICAgdmFyIHN0YXRlID0gZ2V0TWVudVBsYWNlbWVudCh7XG4gICAgICAgIG1heEhlaWdodDogbWF4TWVudUhlaWdodCxcbiAgICAgICAgbWVudUVsOiByZWYsXG4gICAgICAgIG1pbkhlaWdodDogbWluTWVudUhlaWdodCxcbiAgICAgICAgcGxhY2VtZW50OiBtZW51UGxhY2VtZW50LFxuICAgICAgICBzaG91bGRTY3JvbGw6IHNob3VsZFNjcm9sbCxcbiAgICAgICAgaXNGaXhlZFBvc2l0aW9uOiBpc0ZpeGVkUG9zaXRpb24sXG4gICAgICAgIHRoZW1lOiB0aGVtZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChnZXRQb3J0YWxQbGFjZW1lbnQpIGdldFBvcnRhbFBsYWNlbWVudChzdGF0ZSk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9LCBfdGhpcy5nZXRVcGRhdGVkUHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWVudVBsYWNlbWVudCA9IF90aGlzLnByb3BzLm1lbnVQbGFjZW1lbnQ7XG5cbiAgICAgIHZhciBwbGFjZW1lbnQgPSBfdGhpcy5zdGF0ZS5wbGFjZW1lbnQgfHwgY29lcmNlUGxhY2VtZW50KG1lbnVQbGFjZW1lbnQpO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLCB7IHBsYWNlbWVudDogcGxhY2VtZW50LCBtYXhIZWlnaHQ6IF90aGlzLnN0YXRlLm1heEhlaWdodCB9KTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNZW51UGxhY2VyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cblxuICAgICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgICAgcmVmOiB0aGlzLmdldFBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VyUHJvcHM6IHRoaXMuZ2V0VXBkYXRlZFByb3BzKClcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZW51UGxhY2VyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuTWVudVBsYWNlci5jb250ZXh0VHlwZXMgPSB7XG4gIGdldFBvcnRhbFBsYWNlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5cbnZhciBNZW51ID0gZnVuY3Rpb24gTWVudShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG5cbiAgdmFyIGNuID0gY3goIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKShnZXRTdHlsZXMoJ21lbnUnLCBwcm9wcykpLCB7IG1lbnU6IHRydWUgfSwgY2xhc3NOYW1lKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGNuIH0sIGlubmVyUHJvcHMsIHsgcmVmOiBpbm5lclJlZiB9KSxcbiAgICBjaGlsZHJlblxuICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWVudTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51IExpc3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbWVudUxpc3RDU1MgPSBleHBvcnRzLm1lbnVMaXN0Q1NTID0gZnVuY3Rpb24gbWVudUxpc3RDU1MoX3JlZjUpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWY1Lm1heEhlaWdodCxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjUudGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIHtcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBwYWRkaW5nQm90dG9tOiBiYXNlVW5pdCxcbiAgICBwYWRkaW5nVG9wOiBiYXNlVW5pdCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJywgLy8gcmVxdWlyZWQgZm9yIG9mZnNldFtIZWlnaHQsIFRvcF0gPiBrZXlib2FyZCBzY3JvbGxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJ1xuICB9O1xufTtcbnZhciBNZW51TGlzdCA9IGV4cG9ydHMuTWVudUxpc3QgPSBmdW5jdGlvbiBNZW51TGlzdChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWY7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKShnZXRTdHlsZXMoJ21lbnVMaXN0JywgcHJvcHMpKSwge1xuICAgICAgICAnbWVudS1saXN0JzogdHJ1ZSxcbiAgICAgICAgJ21lbnUtbGlzdC0taXMtbXVsdGknOiBpc011bHRpXG4gICAgICB9LCBjbGFzc05hbWUpLFxuICAgICAgcmVmOiBpbm5lclJlZlxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBOb3RpY2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG5vdGljZUNTUyA9IGZ1bmN0aW9uIG5vdGljZUNTUyhfcmVmNikge1xuICB2YXIgX3JlZjYkdGhlbWUgPSBfcmVmNi50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjYkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWY2JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw0MCxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIgKyAncHggJyArIGJhc2VVbml0ICogMyArICdweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9O1xufTtcbnZhciBub09wdGlvbnNNZXNzYWdlQ1NTID0gZXhwb3J0cy5ub09wdGlvbnNNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIGxvYWRpbmdNZXNzYWdlQ1NTID0gZXhwb3J0cy5sb2FkaW5nTWVzc2FnZUNTUyA9IG5vdGljZUNTUztcblxudmFyIE5vT3B0aW9uc01lc3NhZ2UgPSBleHBvcnRzLk5vT3B0aW9uc01lc3NhZ2UgPSBmdW5jdGlvbiBOb09wdGlvbnNNZXNzYWdlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoZ2V0U3R5bGVzKCdub09wdGlvbnNNZXNzYWdlJywgcHJvcHMpKSwge1xuICAgICAgICAnbWVudS1ub3RpY2UnOiB0cnVlLFxuICAgICAgICAnbWVudS1ub3RpY2UtLW5vLW9wdGlvbnMnOiB0cnVlXG4gICAgICB9LCBjbGFzc05hbWUpXG4gICAgfSwgaW5uZXJQcm9wcyksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5Ob09wdGlvbnNNZXNzYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46ICdObyBvcHRpb25zJ1xufTtcblxudmFyIExvYWRpbmdNZXNzYWdlID0gZXhwb3J0cy5Mb2FkaW5nTWVzc2FnZSA9IGZ1bmN0aW9uIExvYWRpbmdNZXNzYWdlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoZ2V0U3R5bGVzKCdsb2FkaW5nTWVzc2FnZScsIHByb3BzKSksIHtcbiAgICAgICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAgICAgJ21lbnUtbm90aWNlLS1sb2FkaW5nJzogdHJ1ZVxuICAgICAgfSwgY2xhc3NOYW1lKVxuICAgIH0sIGlubmVyUHJvcHMpLFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuTG9hZGluZ01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJ0xvYWRpbmcuLi4nXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgUG9ydGFsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVQb3J0YWxDU1MgPSBleHBvcnRzLm1lbnVQb3J0YWxDU1MgPSBmdW5jdGlvbiBtZW51UG9ydGFsQ1NTKF9yZWY3KSB7XG4gIHZhciByZWN0ID0gX3JlZjcucmVjdCxcbiAgICAgIG9mZnNldCA9IF9yZWY3Lm9mZnNldCxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjcucG9zaXRpb247XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICB0b3A6IG9mZnNldCxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICB6SW5kZXg6IDFcbiAgfTtcbn07XG5cbnZhciBNZW51UG9ydGFsID0gZXhwb3J0cy5NZW51UG9ydGFsID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhNZW51UG9ydGFsLCBfQ29tcG9uZW50Mik7XG5cbiAgZnVuY3Rpb24gTWVudVBvcnRhbCgpIHtcbiAgICB2YXIgX3JlZjg7XG5cbiAgICB2YXIgX3RlbXAyLCBfdGhpczIsIF9yZXQyO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnVQb3J0YWwpO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldDIgPSAoX3RlbXAyID0gKF90aGlzMiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmOCA9IE1lbnVQb3J0YWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNZW51UG9ydGFsKSkuY2FsbC5hcHBseShfcmVmOCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpczIpLCBfdGhpczIuc3RhdGUgPSB7IHBsYWNlbWVudDogbnVsbCB9LCBfdGhpczIuZ2V0UG9ydGFsUGxhY2VtZW50ID0gZnVuY3Rpb24gKF9yZWY5KSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3JlZjkucGxhY2VtZW50O1xuXG4gICAgICB2YXIgaW5pdGlhbFBsYWNlbWVudCA9IGNvZXJjZVBsYWNlbWVudChfdGhpczIucHJvcHMubWVudVBsYWNlbWVudCk7XG5cbiAgICAgIC8vIGF2b2lkIHJlLXJlbmRlcnMgaWYgdGhlIHBsYWNlbWVudCBoYXMgbm90IGNoYW5nZWRcbiAgICAgIGlmIChwbGFjZW1lbnQgIT09IGluaXRpYWxQbGFjZW1lbnQpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgcGxhY2VtZW50OiBwbGFjZW1lbnQgfSk7XG4gICAgICB9XG4gICAgfSwgX3RlbXAyKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMyLCBfcmV0Mik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWVudVBvcnRhbCwgW3tcbiAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBnZXRQb3J0YWxQbGFjZW1lbnQ6IHRoaXMuZ2V0UG9ydGFsUGxhY2VtZW50XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNhbGxiYWNrIGZvciBvY2Nhc3Npb25zIHdoZXJlIHRoZSBtZW51IG11c3QgXCJmbGlwXCJcblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXBwZW5kVG8gPSBfcHJvcHMuYXBwZW5kVG8sXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY29udHJvbEVsZW1lbnQgPSBfcHJvcHMuY29udHJvbEVsZW1lbnQsXG4gICAgICAgICAgbWVudVBsYWNlbWVudCA9IF9wcm9wcy5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIHBvc2l0aW9uID0gX3Byb3BzLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBnZXRTdHlsZXMgPSBfcHJvcHMuZ2V0U3R5bGVzO1xuXG4gICAgICB2YXIgaXNGaXhlZCA9IHBvc2l0aW9uID09PSAnZml4ZWQnO1xuXG4gICAgICAvLyBiYWlsIGVhcmx5IGlmIHJlcXVpcmVkIGVsZW1lbnRzIGFyZW4ndCBwcmVzZW50XG4gICAgICBpZiAoIWFwcGVuZFRvICYmICFpc0ZpeGVkIHx8ICFjb250cm9sRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHBsYWNlbWVudCA9IHRoaXMuc3RhdGUucGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KTtcbiAgICAgIHZhciByZWN0ID0gKDAsIF91dGlscy5nZXRCb3VuZGluZ0NsaWVudE9iaikoY29udHJvbEVsZW1lbnQpO1xuICAgICAgdmFyIHNjcm9sbERpc3RhbmNlID0gaXNGaXhlZCA/IDAgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICB2YXIgb2Zmc2V0ID0gcmVjdFtwbGFjZW1lbnRdICsgc2Nyb2xsRGlzdGFuY2U7XG4gICAgICB2YXIgc3RhdGUgPSB7IG9mZnNldDogb2Zmc2V0LCBwb3NpdGlvbjogcG9zaXRpb24sIHJlY3Q6IHJlY3QgfTtcblxuICAgICAgLy8gc2FtZSB3cmFwcGVyIGVsZW1lbnQgd2hldGhlciBmaXhlZCBvciBwb3J0YWxsZWRcbiAgICAgIHZhciBtZW51V3JhcHBlciA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IC8qI19fUFVSRV9fKi8gLyojX19QVVJFX18qLygwLCBfZW1vdGlvbi5jc3MpKGdldFN0eWxlcygnbWVudVBvcnRhbCcsIHN0YXRlKSkgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBhcHBlbmRUbyA/ICgwLCBfcmVhY3REb20uY3JlYXRlUG9ydGFsKShtZW51V3JhcHBlciwgYXBwZW5kVG8pIDogbWVudVdyYXBwZXI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lbnVQb3J0YWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5NZW51UG9ydGFsLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICBnZXRQb3J0YWxQbGFjZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNsZWFuVmFsdWUgPSBleHBvcnRzLmVtcHR5U3RyaW5nID0gZXhwb3J0cy5ub29wID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5leHBvcnRzLmhhbmRsZUlucHV0Q2hhbmdlID0gaGFuZGxlSW5wdXRDaGFuZ2U7XG5leHBvcnRzLmlzRG9jdW1lbnRFbGVtZW50ID0gaXNEb2N1bWVudEVsZW1lbnQ7XG5leHBvcnRzLm5vcm1hbGl6ZWRIZWlnaHQgPSBub3JtYWxpemVkSGVpZ2h0O1xuZXhwb3J0cy5nZXRTY3JvbGxUb3AgPSBnZXRTY3JvbGxUb3A7XG5leHBvcnRzLnNjcm9sbFRvID0gc2Nyb2xsVG87XG5leHBvcnRzLmdldFNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudDtcbmV4cG9ydHMuYW5pbWF0ZWRTY3JvbGxUbyA9IGFuaW1hdGVkU2Nyb2xsVG87XG5leHBvcnRzLnNjcm9sbEludG9WaWV3ID0gc2Nyb2xsSW50b1ZpZXc7XG5leHBvcnRzLmdldEJvdW5kaW5nQ2xpZW50T2JqID0gZ2V0Qm91bmRpbmdDbGllbnRPYmo7XG5leHBvcnRzLnRvS2V5ID0gdG9LZXk7XG5leHBvcnRzLmlzVG91Y2hDYXBhYmxlID0gaXNUb3VjaENhcGFibGU7XG5leHBvcnRzLmlzTW9iaWxlRGV2aWNlID0gaXNNb2JpbGVEZXZpY2U7XG5cbnZhciBfcmFmID0gcmVxdWlyZSgncmFmJyk7XG5cbnZhciBfcmFmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZik7XG5cbnJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTk8gT1Bcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbm9vcCA9IGV4cG9ydHMubm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbnZhciBlbXB0eVN0cmluZyA9IGV4cG9ydHMuZW1wdHlTdHJpbmcgPSBmdW5jdGlvbiBlbXB0eVN0cmluZygpIHtcbiAgcmV0dXJuICcnO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGFzcyBOYW1lIFByZWZpeGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGNvbXBvbmVudCBzdGF0ZSBmb3Igc3R5bGluZyB3aXRoIGNsYXNzIG5hbWVzLlxuXG4gRXhwZWN0cyBhbiBhcnJheSBvZiBzdHJpbmdzIE9SIGEgc3RyaW5nL29iamVjdCBwYWlyOlxuIC0gY2xhc3NOYW1lKFsnY29tcCcsICdjb21wLWFyZycsICdjb21wLWFyZy0yJ10pXG4gICBAcmV0dXJucyAncmVhY3Qtc2VsZWN0X19jb21wIHJlYWN0LXNlbGVjdF9fY29tcC1hcmcgcmVhY3Qtc2VsZWN0X19jb21wLWFyZy0yJ1xuIC0gY2xhc3NOYW1lKCdjb21wJywgeyBzb21lOiB0cnVlLCBzdGF0ZTogZmFsc2UgfSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLS1zb21lJ1xuKi9cbmZ1bmN0aW9uIGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwgbmFtZSkge1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4gcHJlZml4O1xuICB9IGVsc2UgaWYgKG5hbWVbMF0gPT09ICctJykge1xuICAgIHJldHVybiBwcmVmaXggKyBuYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmVmaXggKyAnX18nICsgbmFtZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGFzc05hbWVzKHByZWZpeCwgY3NzS2V5LCBzdGF0ZSwgY2xhc3NOYW1lKSB7XG4gIHZhciBhcnIgPSBbY3NzS2V5LCBjbGFzc05hbWVdO1xuICBpZiAoc3RhdGUgJiYgcHJlZml4KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGFyci5wdXNoKCcnICsgYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBrZXkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gU3RyaW5nKGkpLnRyaW0oKTtcbiAgfSkuam9pbignICcpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGVhbiBWYWx1ZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjbGVhblZhbHVlID0gZXhwb3J0cy5jbGVhblZhbHVlID0gZnVuY3Rpb24gY2xlYW5WYWx1ZSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5maWx0ZXIoQm9vbGVhbik7XG4gIGlmICgodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkgcmV0dXJuIFt2YWx1ZV07XG4gIHJldHVybiBbXTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSGFuZGxlIElucHV0IENoYW5nZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEsIG9uSW5wdXRDaGFuZ2UpIHtcbiAgaWYgKG9uSW5wdXRDaGFuZ2UpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIGlmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gbmV3VmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlucHV0VmFsdWU7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2Nyb2xsIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudChlbCkge1xuICByZXR1cm4gW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keSwgd2luZG93XS5pbmRleE9mKGVsKSA+IC0xO1xufVxuXG4vLyBOb3JtYWxpemVkIFNjcm9sbCBUb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBub3JtYWxpemVkSGVpZ2h0KGVsKSB7XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIGVsLmNsaWVudEhlaWdodDtcbn1cblxuLy8gTm9ybWFsaXplZCBzY3JvbGxUbyAmIHNjcm9sbFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcChlbCkge1xuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuICByZXR1cm4gZWwuc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUbyhlbCwgdG9wKSB7XG4gIC8vIHdpdGggYSBzY3JvbGwgZGlzdGFuY2UsIHdlIHBlcmZvcm0gc2Nyb2xsIG9uIHRoZSBlbGVtZW50XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9wKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbC5zY3JvbGxUb3AgPSB0b3A7XG59XG5cbi8vIEdldCBTY3JvbGwgUGFyZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIGV4Y2x1ZGVTdGF0aWNQYXJlbnQgPSBzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcbiAgdmFyIG92ZXJmbG93UnggPSAvKGF1dG98c2Nyb2xsKS87XG4gIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgLy8gc3VjayBpdCwgZmxvdy4uLlxuXG4gIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykgcmV0dXJuIGRvY0VsO1xuXG4gIGZvciAodmFyIHBhcmVudCA9IGVsZW1lbnQ7IHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50Oykge1xuICAgIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpO1xuICAgIGlmIChleGNsdWRlU3RhdGljUGFyZW50ICYmIHN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChvdmVyZmxvd1J4LnRlc3Qoc3R5bGUub3ZlcmZsb3cgKyBzdHlsZS5vdmVyZmxvd1kgKyBzdHlsZS5vdmVyZmxvd1gpKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb2NFbDtcbn1cblxuLy8gQW5pbWF0ZWQgU2Nyb2xsIFRvXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gIEBwYXJhbSB0OiB0aW1lIChlbGFwc2VkKVxuICBAcGFyYW0gYjogaW5pdGlhbCB2YWx1ZVxuICBAcGFyYW0gYzogYW1vdW50IG9mIGNoYW5nZVxuICBAcGFyYW0gZDogZHVyYXRpb25cbiovXG5mdW5jdGlvbiBlYXNlT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZWRTY3JvbGxUbyhlbGVtZW50LCB0bykge1xuICB2YXIgZHVyYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDIwMDtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBub29wO1xuXG4gIHZhciBzdGFydCA9IGdldFNjcm9sbFRvcChlbGVtZW50KTtcbiAgdmFyIGNoYW5nZSA9IHRvIC0gc3RhcnQ7XG4gIHZhciBpbmNyZW1lbnQgPSAxMDtcbiAgdmFyIGN1cnJlbnRUaW1lID0gMDtcblxuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcbiAgICB2YXIgdmFsID0gZWFzZU91dEN1YmljKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG4gICAgc2Nyb2xsVG8oZWxlbWVudCwgdmFsKTtcbiAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgKDAsIF9yYWYyLmRlZmF1bHQpKGFuaW1hdGVTY3JvbGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgYW5pbWF0ZVNjcm9sbCgpO1xufVxuXG4vLyBTY3JvbGwgSW50byBWaWV3XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcobWVudUVsLCBmb2N1c2VkRWwpIHtcbiAgdmFyIG1lbnVSZWN0ID0gbWVudUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgZm9jdXNlZFJlY3QgPSBmb2N1c2VkRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBvdmVyU2Nyb2xsID0gZm9jdXNlZEVsLm9mZnNldEhlaWdodCAvIDM7XG5cbiAgaWYgKGZvY3VzZWRSZWN0LmJvdHRvbSArIG92ZXJTY3JvbGwgPiBtZW51UmVjdC5ib3R0b20pIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWluKGZvY3VzZWRFbC5vZmZzZXRUb3AgKyBmb2N1c2VkRWwuY2xpZW50SGVpZ2h0IC0gbWVudUVsLm9mZnNldEhlaWdodCArIG92ZXJTY3JvbGwsIG1lbnVFbC5zY3JvbGxIZWlnaHQpKTtcbiAgfSBlbHNlIGlmIChmb2N1c2VkUmVjdC50b3AgLSBvdmVyU2Nyb2xsIDwgbWVudVJlY3QudG9wKSB7XG4gICAgc2Nyb2xsVG8obWVudUVsLCBNYXRoLm1heChmb2N1c2VkRWwub2Zmc2V0VG9wIC0gb3ZlclNjcm9sbCwgMCkpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2V0IGJvdW5kaW5nIGNsaWVudCBvYmplY3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBjYW5ub3QgZ2V0IGtleXMgdXNpbmcgYXJyYXkgbm90YXRpb24gd2l0aCBET01SZWN0XG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudE9iaihlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGhcbiAgfTtcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0cmluZyB0byBLZXkgKGtlYmFiaWZ5KVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHRvS2V5KHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVy9nLCAnLScpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRvdWNoIENhcGFiaWxpdHkgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc1RvdWNoQ2FwYWJsZSgpIHtcbiAgdHJ5IHtcbiAgICBkb2N1bWVudC5jcmVhdGVFdmVudCgnVG91Y2hFdmVudCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTW9iaWxlIERldmljZSBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRlZEVxdWFsO1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGtleUxpc3QgPSBPYmplY3Qua2V5cztcbnZhciBoYXNQcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICAvLyBmYXN0LWRlZXAtZXF1YWwgaW5kZXguanMgMi4wLjFcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgKHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKSkgPT0gJ29iamVjdCcgJiYgKHR5cGVvZiBiID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihiKSkgPT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYXJyQSA9IGlzQXJyYXkoYSksXG4gICAgICAgIGFyckIgPSBpc0FycmF5KGIpLFxuICAgICAgICBpLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGtleTtcblxuICAgIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlLFxuICAgICAgICBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuXG4gICAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwLFxuICAgICAgICByZWdleHBCID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG5cbiAgICB2YXIga2V5cyA9IGtleUxpc3QoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoICE9PSBrZXlMaXN0KGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgaWYgKCFoYXNQcm9wLmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gZW5kIGZhc3QtZGVlcC1lcXVhbFxuXG4gICAgLy8gQ3VzdG9tIGhhbmRsaW5nIGZvciBSZWFjdFxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChrZXkgPT09ICdfb3duZXInICYmIGEuJCR0eXBlb2YpIHtcbiAgICAgICAgLy8gUmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUmVhY3QgZWxlbWVudHMnIF9vd25lci5cbiAgICAgICAgLy8gIF9vd25lciBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzXG4gICAgICAgIC8vIGFuZCBpcyBub3QgbmVlZGVkIHdoZW4gY29tcGFyaW5nIHRoZSBhY3R1YWwgZWxlbWVudHMgKGFuZCBub3QgdGhlaXIgb3duZXJzKVxuICAgICAgICAvLyAuJCR0eXBlb2YgYW5kIC5fc3RvcmUgb24ganVzdCByZWFzb25hYmxlIG1hcmtlcnMgb2YgYSByZWFjdCBlbGVtZW50XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWxsIG90aGVyIHByb3BlcnRpZXMgc2hvdWxkIGJlIHRyYXZlcnNlZCBhcyB1c3VhbFxuICAgICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZhc3QtZGVlcC1lcXVhbCBpbmRleC5qcyAyLjAuMVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn1cbi8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcblxuZnVuY3Rpb24gZXhwb3J0ZWRFcXVhbChhLCBiKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVxdWFsKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5tZXNzYWdlICYmIGVycm9yLm1lc3NhZ2UubWF0Y2goL3N0YWNrfHJlY3Vyc2lvbi9pKSkge1xuICAgICAgLy8gd2FybiBvbiBjaXJjdWxhciByZWZlcmVuY2VzLCBkb24ndCBjcmFzaFxuICAgICAgLy8gYnJvd3NlcnMgZ2l2ZSB0aGlzIGRpZmZlcmVudCBlcnJvcnMgbmFtZSBhbmQgbWVzc2FnZXM6XG4gICAgICAvLyBjaHJvbWUvc2FmYXJpOiBcIlJhbmdlRXJyb3JcIiwgXCJNYXhpbXVtIGNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiXG4gICAgICAvLyBmaXJlZm94OiBcIkludGVybmFsRXJyb3JcIiwgdG9vIG11Y2ggcmVjdXJzaW9uXCJcbiAgICAgIC8vIGVkZ2U6IFwiRXJyb3JcIiwgXCJPdXQgb2Ygc3RhY2sgc3BhY2VcIlxuICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiByZWFjdC1mYXN0LWNvbXBhcmUgZG9lcyBub3QgaGFuZGxlIGNpcmN1bGFyIHJlZmVyZW5jZXMuJywgZXJyb3IubmFtZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIHNvbWUgb3RoZXIgZXJyb3IuIHdlIHNob3VsZCBkZWZpbml0ZWx5IGtub3cgYWJvdXQgdGhlc2VcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZUZpbHRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9kaWFjcml0aWNzID0gcmVxdWlyZSgnLi9kaWFjcml0aWNzJyk7XG5cbnZhciB0cmltU3RyaW5nID0gZnVuY3Rpb24gdHJpbVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59O1xudmFyIGRlZmF1bHRTdHJpbmdpZnkgPSBmdW5jdGlvbiBkZWZhdWx0U3RyaW5naWZ5KG9wdGlvbikge1xuICByZXR1cm4gb3B0aW9uLmxhYmVsICsgJyAnICsgb3B0aW9uLnZhbHVlO1xufTtcblxudmFyIGNyZWF0ZUZpbHRlciA9IGV4cG9ydHMuY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gY3JlYXRlRmlsdGVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbiwgcmF3SW5wdXQpIHtcbiAgICB2YXIgX2lnbm9yZUNhc2UkaWdub3JlQWNjID0gX2V4dGVuZHMoe1xuICAgICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUFjY2VudHM6IHRydWUsXG4gICAgICBzdHJpbmdpZnk6IGRlZmF1bHRTdHJpbmdpZnksXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgbWF0Y2hGcm9tOiAnYW55J1xuICAgIH0sIGNvbmZpZyksXG4gICAgICAgIGlnbm9yZUNhc2UgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQ2FzZSxcbiAgICAgICAgaWdub3JlQWNjZW50cyA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5pZ25vcmVBY2NlbnRzLFxuICAgICAgICBzdHJpbmdpZnkgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2Muc3RyaW5naWZ5LFxuICAgICAgICB0cmltID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnRyaW0sXG4gICAgICAgIG1hdGNoRnJvbSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5tYXRjaEZyb207XG5cbiAgICB2YXIgaW5wdXQgPSB0cmltID8gdHJpbVN0cmluZyhyYXdJbnB1dCkgOiByYXdJbnB1dDtcbiAgICB2YXIgY2FuZGlkYXRlID0gdHJpbSA/IHRyaW1TdHJpbmcoc3RyaW5naWZ5KG9wdGlvbikpIDogc3RyaW5naWZ5KG9wdGlvbik7XG4gICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAoaWdub3JlQWNjZW50cykge1xuICAgICAgaW5wdXQgPSAoMCwgX2RpYWNyaXRpY3Muc3RyaXBEaWFjcml0aWNzKShpbnB1dCk7XG4gICAgICBjYW5kaWRhdGUgPSAoMCwgX2RpYWNyaXRpY3Muc3RyaXBEaWFjcml0aWNzKShjYW5kaWRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hGcm9tID09PSAnc3RhcnQnID8gY2FuZGlkYXRlLnN1YnN0cigwLCBpbnB1dC5sZW5ndGgpID09PSBpbnB1dCA6IGNhbmRpZGF0ZS5pbmRleE9mKGlucHV0KSA+IC0xO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZGlhY3JpdGljcyA9IFt7IGJhc2U6ICdBJywgbGV0dGVyczogL1tcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXS9nIH0sIHsgYmFzZTogJ0FBJywgbGV0dGVyczogL1tcXHVBNzMyXS9nIH0sIHsgYmFzZTogJ0FFJywgbGV0dGVyczogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2cgfSwgeyBiYXNlOiAnQU8nLCBsZXR0ZXJzOiAvW1xcdUE3MzRdL2cgfSwgeyBiYXNlOiAnQVUnLCBsZXR0ZXJzOiAvW1xcdUE3MzZdL2cgfSwgeyBiYXNlOiAnQVYnLCBsZXR0ZXJzOiAvW1xcdUE3MzhcXHVBNzNBXS9nIH0sIHsgYmFzZTogJ0FZJywgbGV0dGVyczogL1tcXHVBNzNDXS9nIH0sIHsgYmFzZTogJ0InLCBsZXR0ZXJzOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyB9LCB7IGJhc2U6ICdDJywgbGV0dGVyczogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2cgfSwgeyBiYXNlOiAnRCcsIGxldHRlcnM6IC9bXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzldL2cgfSwgeyBiYXNlOiAnRFonLCBsZXR0ZXJzOiAvW1xcdTAxRjFcXHUwMUM0XS9nIH0sIHsgYmFzZTogJ0R6JywgbGV0dGVyczogL1tcXHUwMUYyXFx1MDFDNV0vZyB9LCB7IGJhc2U6ICdFJywgbGV0dGVyczogL1tcXHUwMDQ1XFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVdL2cgfSwgeyBiYXNlOiAnRicsIGxldHRlcnM6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nIH0sIHsgYmFzZTogJ0cnLCBsZXR0ZXJzOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZyB9LCB7IGJhc2U6ICdIJywgbGV0dGVyczogL1tcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RF0vZyB9LCB7IGJhc2U6ICdJJywgbGV0dGVyczogL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyB9LCB7IGJhc2U6ICdKJywgbGV0dGVyczogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZyB9LCB7IGJhc2U6ICdLJywgbGV0dGVyczogL1tcXHUwMDRCXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMl0vZyB9LCB7IGJhc2U6ICdMJywgbGV0dGVyczogL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2cgfSwgeyBiYXNlOiAnTEonLCBsZXR0ZXJzOiAvW1xcdTAxQzddL2cgfSwgeyBiYXNlOiAnTGonLCBsZXR0ZXJzOiAvW1xcdTAxQzhdL2cgfSwgeyBiYXNlOiAnTScsIGxldHRlcnM6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2cgfSwgeyBiYXNlOiAnTicsIGxldHRlcnM6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZyB9LCB7IGJhc2U6ICdOSicsIGxldHRlcnM6IC9bXFx1MDFDQV0vZyB9LCB7IGJhc2U6ICdOaicsIGxldHRlcnM6IC9bXFx1MDFDQl0vZyB9LCB7IGJhc2U6ICdPJywgbGV0dGVyczogL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nIH0sIHsgYmFzZTogJ09JJywgbGV0dGVyczogL1tcXHUwMUEyXS9nIH0sIHsgYmFzZTogJ09PJywgbGV0dGVyczogL1tcXHVBNzRFXS9nIH0sIHsgYmFzZTogJ09VJywgbGV0dGVyczogL1tcXHUwMjIyXS9nIH0sIHsgYmFzZTogJ1AnLCBsZXR0ZXJzOiAvW1xcdTAwNTBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRdL2cgfSwgeyBiYXNlOiAnUScsIGxldHRlcnM6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nIH0sIHsgYmFzZTogJ1InLCBsZXR0ZXJzOiAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nIH0sIHsgYmFzZTogJ1MnLCBsZXR0ZXJzOiAvW1xcdTAwNTNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XS9nIH0sIHsgYmFzZTogJ1QnLCBsZXR0ZXJzOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyB9LCB7IGJhc2U6ICdUWicsIGxldHRlcnM6IC9bXFx1QTcyOF0vZyB9LCB7IGJhc2U6ICdVJywgbGV0dGVyczogL1tcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XS9nIH0sIHsgYmFzZTogJ1YnLCBsZXR0ZXJzOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nIH0sIHsgYmFzZTogJ1ZZJywgbGV0dGVyczogL1tcXHVBNzYwXS9nIH0sIHsgYmFzZTogJ1cnLCBsZXR0ZXJzOiAvW1xcdTAwNTdcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJdL2cgfSwgeyBiYXNlOiAnWCcsIGxldHRlcnM6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2cgfSwgeyBiYXNlOiAnWScsIGxldHRlcnM6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nIH0sIHsgYmFzZTogJ1onLCBsZXR0ZXJzOiAvW1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXS9nIH0sIHsgYmFzZTogJ2EnLCBsZXR0ZXJzOiAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nIH0sIHsgYmFzZTogJ2FhJywgbGV0dGVyczogL1tcXHVBNzMzXS9nIH0sIHsgYmFzZTogJ2FlJywgbGV0dGVyczogL1tcXHUwMEU2XFx1MDFGRFxcdTAxRTNdL2cgfSwgeyBiYXNlOiAnYW8nLCBsZXR0ZXJzOiAvW1xcdUE3MzVdL2cgfSwgeyBiYXNlOiAnYXUnLCBsZXR0ZXJzOiAvW1xcdUE3MzddL2cgfSwgeyBiYXNlOiAnYXYnLCBsZXR0ZXJzOiAvW1xcdUE3MzlcXHVBNzNCXS9nIH0sIHsgYmFzZTogJ2F5JywgbGV0dGVyczogL1tcXHVBNzNEXS9nIH0sIHsgYmFzZTogJ2InLCBsZXR0ZXJzOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZyB9LCB7IGJhc2U6ICdjJywgbGV0dGVyczogL1tcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XS9nIH0sIHsgYmFzZTogJ2QnLCBsZXR0ZXJzOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nIH0sIHsgYmFzZTogJ2R6JywgbGV0dGVyczogL1tcXHUwMUYzXFx1MDFDNl0vZyB9LCB7IGJhc2U6ICdlJywgbGV0dGVyczogL1tcXHUwMDY1XFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXS9nIH0sIHsgYmFzZTogJ2YnLCBsZXR0ZXJzOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyB9LCB7IGJhc2U6ICdnJywgbGV0dGVyczogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2cgfSwgeyBiYXNlOiAnaCcsIGxldHRlcnM6IC9bXFx1MDA2OFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XS9nIH0sIHsgYmFzZTogJ2h2JywgbGV0dGVyczogL1tcXHUwMTk1XS9nIH0sIHsgYmFzZTogJ2knLCBsZXR0ZXJzOiAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nIH0sIHsgYmFzZTogJ2onLCBsZXR0ZXJzOiAvW1xcdTAwNkFcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OV0vZyB9LCB7IGJhc2U6ICdrJywgbGV0dGVyczogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyB9LCB7IGJhc2U6ICdsJywgbGV0dGVyczogL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nIH0sIHsgYmFzZTogJ2xqJywgbGV0dGVyczogL1tcXHUwMUM5XS9nIH0sIHsgYmFzZTogJ20nLCBsZXR0ZXJzOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nIH0sIHsgYmFzZTogJ24nLCBsZXR0ZXJzOiAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nIH0sIHsgYmFzZTogJ25qJywgbGV0dGVyczogL1tcXHUwMUNDXS9nIH0sIHsgYmFzZTogJ28nLCBsZXR0ZXJzOiAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2cgfSwgeyBiYXNlOiAnb2knLCBsZXR0ZXJzOiAvW1xcdTAxQTNdL2cgfSwgeyBiYXNlOiAnb3UnLCBsZXR0ZXJzOiAvW1xcdTAyMjNdL2cgfSwgeyBiYXNlOiAnb28nLCBsZXR0ZXJzOiAvW1xcdUE3NEZdL2cgfSwgeyBiYXNlOiAncCcsIGxldHRlcnM6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZyB9LCB7IGJhc2U6ICdxJywgbGV0dGVyczogL1tcXHUwMDcxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTldL2cgfSwgeyBiYXNlOiAncicsIGxldHRlcnM6IC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2cgfSwgeyBiYXNlOiAncycsIGxldHRlcnM6IC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nIH0sIHsgYmFzZTogJ3QnLCBsZXR0ZXJzOiAvW1xcdTAwNzRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODddL2cgfSwgeyBiYXNlOiAndHonLCBsZXR0ZXJzOiAvW1xcdUE3MjldL2cgfSwgeyBiYXNlOiAndScsIGxldHRlcnM6IC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZyB9LCB7IGJhc2U6ICd2JywgbGV0dGVyczogL1tcXHUwMDc2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q10vZyB9LCB7IGJhc2U6ICd2eScsIGxldHRlcnM6IC9bXFx1QTc2MV0vZyB9LCB7IGJhc2U6ICd3JywgbGV0dGVyczogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZyB9LCB7IGJhc2U6ICd4JywgbGV0dGVyczogL1tcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RF0vZyB9LCB7IGJhc2U6ICd5JywgbGV0dGVyczogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nIH0sIHsgYmFzZTogJ3onLCBsZXR0ZXJzOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nIH1dO1xuXG52YXIgc3RyaXBEaWFjcml0aWNzID0gZXhwb3J0cy5zdHJpcERpYWNyaXRpY3MgPSBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3Moc3RyKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGlhY3JpdGljcy5sZW5ndGg7IGkrKykge1xuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKGRpYWNyaXRpY3NbaV0ubGV0dGVycywgZGlhY3JpdGljc1tpXS5iYXNlKTtcblx0fVxuXHRyZXR1cm4gc3RyO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQTExeVRleHQgPSByZXF1aXJlKCcuL0ExMXlUZXh0Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQTExeVRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BMTF5VGV4dCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRHVtbXlJbnB1dCA9IHJlcXVpcmUoJy4vRHVtbXlJbnB1dCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0R1bW15SW5wdXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EdW1teUlucHV0KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9Ob2RlUmVzb2x2ZXIgPSByZXF1aXJlKCcuL05vZGVSZXNvbHZlcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05vZGVSZXNvbHZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVSZXNvbHZlcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfU2Nyb2xsQmxvY2sgPSByZXF1aXJlKCcuL1Njcm9sbEJsb2NrJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsQmxvY2snLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TY3JvbGxCbG9jaykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfU2Nyb2xsQ2FwdG9yID0gcmVxdWlyZSgnLi9TY3JvbGxDYXB0b3InKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxDYXB0b3InLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TY3JvbGxDYXB0b3IpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2Vtb3Rpb24gPSByZXF1aXJlKCdlbW90aW9uJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEFzc2lzdGl2ZSB0ZXh0IHRvIGRlc2NyaWJlIHZpc3VhbCBlbGVtZW50cy4gSGlkZGVuIGZvciBzaWdodGVkIHVzZXJzLlxudmFyIEExMXlUZXh0ID0gZnVuY3Rpb24gQTExeVRleHQocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogLyojX19QVVJFX18qLyAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoe1xuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgIGNvbG9yOiAnYmx1ZSdcbiAgICB9KVxuICB9LCBwcm9wcykpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQTExeVRleHQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZW1vdGlvbiA9IHJlcXVpcmUoJ2Vtb3Rpb24nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEdW1teUlucHV0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKER1bW15SW5wdXQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIER1bW15SW5wdXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIER1bW15SW5wdXQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEdW1teUlucHV0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHVtbXlJbnB1dCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKER1bW15SW5wdXQsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW5Qcm9wID0gX3Byb3BzLmluLFxuICAgICAgICAgIG91dCA9IF9wcm9wcy5vdXQsXG4gICAgICAgICAgb25FeGl0ZWQgPSBfcHJvcHMub25FeGl0ZWQsXG4gICAgICAgICAgYXBwZWFyID0gX3Byb3BzLmFwcGVhcixcbiAgICAgICAgICBlbnRlciA9IF9wcm9wcy5lbnRlcixcbiAgICAgICAgICBleGl0ID0gX3Byb3BzLmV4aXQsXG4gICAgICAgICAgaW5uZXJSZWYgPSBfcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgZW1vdGlvbiA9IF9wcm9wcy5lbW90aW9uLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydpbicsICdvdXQnLCAnb25FeGl0ZWQnLCAnYXBwZWFyJywgJ2VudGVyJywgJ2V4aXQnLCAnaW5uZXJSZWYnLCAnZW1vdGlvbiddKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiBpbm5lclJlZlxuICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAvKiNfX1BVUkVfXyovIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKSh7XG4gICAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgICAgcGFkZGluZzogMCxcblxuICAgICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgICAgd2lkdGg6IDEsXG5cbiAgICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknXG4gICAgICAgIH0pXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIER1bW15SW5wdXQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEdW1teUlucHV0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTm9kZVJlc29sdmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE5vZGVSZXNvbHZlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTm9kZVJlc29sdmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlUmVzb2x2ZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOb2RlUmVzb2x2ZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOb2RlUmVzb2x2ZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOb2RlUmVzb2x2ZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5uZXJSZWYoKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnByb3BzLmlubmVyUmVmKG51bGwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb2RlUmVzb2x2ZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlUmVzb2x2ZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZW1vdGlvbiA9IHJlcXVpcmUoJ2Vtb3Rpb24nKTtcblxudmFyIF9Ob2RlUmVzb2x2ZXIgPSByZXF1aXJlKCcuL05vZGVSZXNvbHZlcicpO1xuXG52YXIgX05vZGVSZXNvbHZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ob2RlUmVzb2x2ZXIpO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi9TY3JvbGxMb2NrL2luZGV4Jyk7XG5cbnZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIE5PVEU6XG4vLyBXZSBzaG91bGRuJ3QgbmVlZCB0aGlzIGFmdGVyIHVwZGF0aW5nIHRvIFJlYWN0IHYxNi4zLjAsIHdoaWNoIGludHJvZHVjZXM6XG4vLyAtIGNyZWF0ZVJlZigpIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNyZWF0ZXJlZlxuLy8gLSBmb3J3YXJkUmVmKCkgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Zm9yd2FyZHJlZlxuXG52YXIgU2Nyb2xsQmxvY2sgPSBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNjcm9sbEJsb2NrLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2Nyb2xsQmxvY2soKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcm9sbEJsb2NrKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBTY3JvbGxCbG9jay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNjcm9sbEJsb2NrKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7IHRvdWNoU2Nyb2xsVGFyZ2V0OiBudWxsIH0sIF90aGlzLmdldFNjcm9sbFRhcmdldCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIGlmIChyZWYgPT09IF90aGlzLnN0YXRlLnRvdWNoU2Nyb2xsVGFyZ2V0KSByZXR1cm47XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHRvdWNoU2Nyb2xsVGFyZ2V0OiByZWYgfSk7XG4gICAgfSwgX3RoaXMuYmx1clNlbGVjdElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICAvLyBtdXN0IGJlIGluIHN0YXRlIHRvIHRyaWdnZXIgYSByZS1yZW5kZXIsIG9ubHkgcnVucyBvbmNlIHBlciBpbnN0YW5jZVxuXG5cbiAgLy8gdGhpcyB3aWxsIGNsb3NlIHRoZSBtZW51IHdoZW4gYSB1c2VyIGNsaWNrcyBvdXRzaWRlXG5cblxuICBfY3JlYXRlQ2xhc3MoU2Nyb2xsQmxvY2ssIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgaXNFbmFibGVkID0gX3Byb3BzLmlzRW5hYmxlZDtcbiAgICAgIHZhciB0b3VjaFNjcm9sbFRhcmdldCA9IHRoaXMuc3RhdGUudG91Y2hTY3JvbGxUYXJnZXQ7XG5cbiAgICAgIC8vIGJhaWwgZWFybHkgaWYgbm90IGVuYWJsZWRcblxuICAgICAgaWYgKCFpc0VuYWJsZWQpIHJldHVybiBjaGlsZHJlbjtcblxuICAgICAgLypcbiAgICAgICAqIERpdlxuICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgKiBibG9ja3Mgc2Nyb2xsaW5nIG9uIG5vbi1ib2R5IGVsZW1lbnRzIGJlaGluZCB0aGUgbWVudVxuICAgICAgICAqIE5vZGVSZXNvbHZlclxuICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgKiB3ZSBuZWVkIGEgcmVmZXJlbmNlIHRvIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgdG8gXCJ1bmxvY2tcIiBzY3JvbGwgb25cbiAgICAgICAqIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgICogU2Nyb2xsTG9ja1xuICAgICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgKiBhY3R1YWxseSBkb2VzIHRoZSBzY3JvbGwgbG9ja2luZ1xuICAgICAgICovXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuYmx1clNlbGVjdElucHV0LFxuICAgICAgICAgIGNsYXNzTmFtZTogLyojX19QVVJFX18qLyAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoeyBwb3NpdGlvbjogJ2ZpeGVkJywgbGVmdDogMCwgYm90dG9tOiAwLCByaWdodDogMCwgdG9wOiAwIH0pXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfTm9kZVJlc29sdmVyMi5kZWZhdWx0LFxuICAgICAgICAgIHsgaW5uZXJSZWY6IHRoaXMuZ2V0U2Nyb2xsVGFyZ2V0IH0sXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKSxcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaW5kZXgyLmRlZmF1bHQsIHsgdG91Y2hTY3JvbGxUYXJnZXQ6IHRvdWNoU2Nyb2xsVGFyZ2V0IH0pIDogbnVsbFxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2Nyb2xsQmxvY2s7XG59KF9yZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2Nyb2xsQmxvY2s7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG52YXIgYWN0aXZlU2Nyb2xsTG9ja3MgPSAwO1xuXG52YXIgU2Nyb2xsTG9jayA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTY3JvbGxMb2NrLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTY3JvbGxMb2NrKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JvbGxMb2NrKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBTY3JvbGxMb2NrLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2Nyb2xsTG9jaykpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLm9yaWdpbmFsU3R5bGVzID0ge30sIF90aGlzLmxpc3RlbmVyT3B0aW9ucyA9IHtcbiAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY3JvbGxMb2NrLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWNjb3VudEZvclNjcm9sbGJhcnMgPSBfcHJvcHMuYWNjb3VudEZvclNjcm9sbGJhcnMsXG4gICAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQgPSBfcHJvcHMudG91Y2hTY3JvbGxUYXJnZXQ7XG5cbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTtcblxuICAgICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzKSB7XG4gICAgICAgIC8vIHN0b3JlIGFueSBzdHlsZXMgYWxyZWFkeSBhcHBsaWVkIHRvIHRoZSBib2R5XG4gICAgICAgIF9jb25zdGFudHMuU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgdmFsID0gdGFyZ2V0U3R5bGUgJiYgdGFyZ2V0U3R5bGVba2V5XTtcbiAgICAgICAgICBfdGhpczIub3JpZ2luYWxTdHlsZXNba2V5XSA9IHZhbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFwcGx5IHRoZSBsb2NrIHN0eWxlcyBhbmQgcGFkZGluZyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBzY3JvbGwgbG9ja1xuICAgICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgICB2YXIgY3VycmVudFBhZGRpbmcgPSBwYXJzZUludCh0aGlzLm9yaWdpbmFsU3R5bGVzLnBhZGRpbmdSaWdodCwgMTApIHx8IDA7XG4gICAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmJvZHkgPyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDogMDtcbiAgICAgICAgdmFyIGFkanVzdGVkUGFkZGluZyA9IHdpbmRvdy5pbm5lcldpZHRoIC0gY2xpZW50V2lkdGggKyBjdXJyZW50UGFkZGluZyB8fCAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKF9jb25zdGFudHMuTE9DS19TVFlMRVMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHZhciB2YWwgPSBfY29uc3RhbnRzLkxPQ0tfU1RZTEVTW2tleV07XG4gICAgICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgICB0YXJnZXRTdHlsZVtrZXldID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgdGFyZ2V0U3R5bGUucGFkZGluZ1JpZ2h0ID0gYWRqdXN0ZWRQYWRkaW5nICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhY2NvdW50IGZvciB0b3VjaCBkZXZpY2VzXG4gICAgICBpZiAodGFyZ2V0ICYmICgwLCBfdXRpbHMuaXNUb3VjaERldmljZSkoKSkge1xuICAgICAgICAvLyBNb2JpbGUgU2FmYXJpIGlnbm9yZXMgeyBvdmVyZmxvdzogaGlkZGVuIH0gZGVjbGFyYXRpb24gb24gdGhlIGJvZHkuXG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBfdXRpbHMucHJldmVudFRvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgICAgIC8vIEFsbG93IHNjcm9sbCBvbiBwcm92aWRlZCB0YXJnZXRcbiAgICAgICAgaWYgKHRvdWNoU2Nyb2xsVGFyZ2V0KSB7XG4gICAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIF91dGlscy5wcmV2ZW50SW5lcnRpYVNjcm9sbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIF91dGlscy5hbGxvd1RvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGluY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG4gICAgICBhY3RpdmVTY3JvbGxMb2NrcyArPSAxO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcblxuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjY291bnRGb3JTY3JvbGxiYXJzID0gX3Byb3BzMi5hY2NvdW50Rm9yU2Nyb2xsYmFycyxcbiAgICAgICAgICB0b3VjaFNjcm9sbFRhcmdldCA9IF9wcm9wczIudG91Y2hTY3JvbGxUYXJnZXQ7XG5cbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTtcblxuICAgICAgLy8gc2FmZWx5IGRlY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG4gICAgICBhY3RpdmVTY3JvbGxMb2NrcyA9IE1hdGgubWF4KGFjdGl2ZVNjcm9sbExvY2tzIC0gMSwgMCk7XG5cbiAgICAgIC8vIHJlYXBwbHkgb3JpZ2luYWwgYm9keSBzdHlsZXMsIGlmIGFueVxuICAgICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgICBfY29uc3RhbnRzLlNUWUxFX0tFWVMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgdmFyIHZhbCA9IF90aGlzMy5vcmlnaW5hbFN0eWxlc1trZXldO1xuICAgICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgICAgdGFyZ2V0U3R5bGVba2V5XSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgdG91Y2ggbGlzdGVuZXJzXG4gICAgICBpZiAodGFyZ2V0ICYmICgwLCBfdXRpbHMuaXNUb3VjaERldmljZSkoKSkge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgX3V0aWxzLnByZXZlbnRUb3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgX3V0aWxzLnByZXZlbnRJbmVydGlhU2Nyb2xsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgX3V0aWxzLmFsbG93VG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2Nyb2xsTG9jaztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblNjcm9sbExvY2suZGVmYXVsdFByb3BzID0ge1xuICBhY2NvdW50Rm9yU2Nyb2xsYmFyczogdHJ1ZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjcm9sbExvY2s7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIFNUWUxFX0tFWVMgPSBleHBvcnRzLlNUWUxFX0tFWVMgPSBbJ2JveFNpemluZycsICdoZWlnaHQnLCAnb3ZlcmZsb3cnLCAncGFkZGluZ1JpZ2h0JywgJ3Bvc2l0aW9uJ107XG5cbnZhciBMT0NLX1NUWUxFUyA9IGV4cG9ydHMuTE9DS19TVFlMRVMgPSB7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCAvLyBhY2NvdW50IGZvciBwb3NzaWJsZSBkZWNsYXJhdGlvbiBgd2lkdGg6IDEwMCU7YCBvbiBib2R5XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGhlaWdodDogJzEwMCUnXG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJldmVudFRvdWNoTW92ZSA9IHByZXZlbnRUb3VjaE1vdmU7XG5leHBvcnRzLmFsbG93VG91Y2hNb3ZlID0gYWxsb3dUb3VjaE1vdmU7XG5leHBvcnRzLnByZXZlbnRJbmVydGlhU2Nyb2xsID0gcHJldmVudEluZXJ0aWFTY3JvbGw7XG5leHBvcnRzLmlzVG91Y2hEZXZpY2UgPSBpc1RvdWNoRGV2aWNlO1xuZnVuY3Rpb24gcHJldmVudFRvdWNoTW92ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gYWxsb3dUb3VjaE1vdmUoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50SW5lcnRpYVNjcm9sbCgpIHtcbiAgdmFyIHRvcCA9IHRoaXMuc2Nyb2xsVG9wO1xuICB2YXIgdG90YWxTY3JvbGwgPSB0aGlzLnNjcm9sbEhlaWdodDtcbiAgdmFyIGN1cnJlbnRTY3JvbGwgPSB0b3AgKyB0aGlzLm9mZnNldEhlaWdodDtcblxuICBpZiAodG9wID09PSAwKSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSAxO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPT09IHRvdGFsU2Nyb2xsKSB7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSB0b3AgLSAxO1xuICB9XG59XG5cbi8vIGBvbnRvdWNoc3RhcnRgIGNoZWNrIHdvcmtzIG9uIG1vc3QgYnJvd3NlcnNcbi8vIGBtYXhUb3VjaFBvaW50c2Agd29ya3Mgb24gSUUxMC8xMSBhbmQgU3VyZmFjZVxuZnVuY3Rpb24gaXNUb3VjaERldmljZSgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfTm9kZVJlc29sdmVyID0gcmVxdWlyZSgnLi9Ob2RlUmVzb2x2ZXInKTtcblxudmFyIF9Ob2RlUmVzb2x2ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZVJlc29sdmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTY3JvbGxDYXB0b3IgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2Nyb2xsQ2FwdG9yLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTY3JvbGxDYXB0b3IoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcm9sbENhcHRvcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gU2Nyb2xsQ2FwdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2Nyb2xsQ2FwdG9yKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaXNCb3R0b20gPSBmYWxzZSwgX3RoaXMuaXNUb3AgPSBmYWxzZSwgX3RoaXMuY2FuY2VsU2Nyb2xsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlRXZlbnREZWx0YSA9IGZ1bmN0aW9uIChldmVudCwgZGVsdGEpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQm90dG9tQXJyaXZlID0gX3RoaXMkcHJvcHMub25Cb3R0b21BcnJpdmUsXG4gICAgICAgICAgb25Cb3R0b21MZWF2ZSA9IF90aGlzJHByb3BzLm9uQm90dG9tTGVhdmUsXG4gICAgICAgICAgb25Ub3BBcnJpdmUgPSBfdGhpcyRwcm9wcy5vblRvcEFycml2ZSxcbiAgICAgICAgICBvblRvcExlYXZlID0gX3RoaXMkcHJvcHMub25Ub3BMZWF2ZTtcbiAgICAgIHZhciBfdGhpcyRzY3JvbGxUYXJnZXQgPSBfdGhpcy5zY3JvbGxUYXJnZXQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBfdGhpcyRzY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IF90aGlzJHNjcm9sbFRhcmdldC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIHZhciB0YXJnZXQgPSBfdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICB2YXIgaXNEZWx0YVBvc2l0aXZlID0gZGVsdGEgPiAwO1xuICAgICAgdmFyIGF2YWlsYWJsZVNjcm9sbCA9IHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCAtIHNjcm9sbFRvcDtcbiAgICAgIHZhciBzaG91bGRDYW5jZWxTY3JvbGwgPSBmYWxzZTtcblxuICAgICAgLy8gcmVzZXQgYm90dG9tL3RvcCBmbGFnc1xuICAgICAgaWYgKGF2YWlsYWJsZVNjcm9sbCA+IGRlbHRhICYmIF90aGlzLmlzQm90dG9tKSB7XG4gICAgICAgIGlmIChvbkJvdHRvbUxlYXZlKSBvbkJvdHRvbUxlYXZlKGV2ZW50KTtcbiAgICAgICAgX3RoaXMuaXNCb3R0b20gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RlbHRhUG9zaXRpdmUgJiYgX3RoaXMuaXNUb3ApIHtcbiAgICAgICAgaWYgKG9uVG9wTGVhdmUpIG9uVG9wTGVhdmUoZXZlbnQpO1xuICAgICAgICBfdGhpcy5pc1RvcCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBib3R0b20gbGltaXRcbiAgICAgIGlmIChpc0RlbHRhUG9zaXRpdmUgJiYgZGVsdGEgPiBhdmFpbGFibGVTY3JvbGwpIHtcbiAgICAgICAgaWYgKG9uQm90dG9tQXJyaXZlICYmICFfdGhpcy5pc0JvdHRvbSkge1xuICAgICAgICAgIG9uQm90dG9tQXJyaXZlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgICBzaG91bGRDYW5jZWxTY3JvbGwgPSB0cnVlO1xuICAgICAgICBfdGhpcy5pc0JvdHRvbSA9IHRydWU7XG5cbiAgICAgICAgLy8gdG9wIGxpbWl0XG4gICAgICB9IGVsc2UgaWYgKCFpc0RlbHRhUG9zaXRpdmUgJiYgLWRlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICAgIGlmIChvblRvcEFycml2ZSAmJiAhX3RoaXMuaXNUb3ApIHtcbiAgICAgICAgICBvblRvcEFycml2ZShldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICAgIF90aGlzLmlzVG9wID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FuY2VsIHNjcm9sbFxuICAgICAgaWYgKHNob3VsZENhbmNlbFNjcm9sbCkge1xuICAgICAgICBfdGhpcy5jYW5jZWxTY3JvbGwoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uV2hlZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmhhbmRsZUV2ZW50RGVsdGEoZXZlbnQsIGV2ZW50LmRlbHRhWSk7XG4gICAgfSwgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBzZXQgdG91Y2ggc3RhcnQgc28gd2UgY2FuIGNhbGN1bGF0ZSB0b3VjaG1vdmUgZGVsdGFcbiAgICAgIF90aGlzLnRvdWNoU3RhcnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgIH0sIF90aGlzLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgZGVsdGFZID0gX3RoaXMudG91Y2hTdGFydCAtIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICBfdGhpcy5oYW5kbGVFdmVudERlbHRhKGV2ZW50LCBkZWx0YVkpO1xuICAgIH0sIF90aGlzLmdldFNjcm9sbFRhcmdldCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLnNjcm9sbFRhcmdldCA9IHJlZjtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY3JvbGxDYXB0b3IsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcodGhpcy5zY3JvbGxUYXJnZXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcodGhpcy5zY3JvbGxUYXJnZXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0YXJ0TGlzdGVuaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmcoZWwpIHtcbiAgICAgIC8vIGJhaWwgZWFybHkgaWYgbm8gc2Nyb2xsIGF2YWlsYWJsZVxuICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA8PSBlbC5jbGllbnRIZWlnaHQpIHJldHVybjtcblxuICAgICAgLy8gYWxsIHRoZSBpZiBzdGF0ZW1lbnRzIGFyZSB0byBhcHBlYXNlIEZsb3cg8J+YolxuICAgICAgaWYgKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbldoZWVsLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVsLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3BMaXN0ZW5pbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGVsKSB7XG4gICAgICAvLyBiYWlsIGVhcmx5IGlmIG5vIHNjcm9sbCBhdmFpbGFibGVcbiAgICAgIGlmIChlbC5zY3JvbGxIZWlnaHQgPD0gZWwuY2xpZW50SGVpZ2h0KSByZXR1cm47XG5cbiAgICAgIC8vIGFsbCB0aGUgaWYgc3RhdGVtZW50cyBhcmUgdG8gYXBwZWFzZSBGbG93IPCfmKJcbiAgICAgIGlmICh0eXBlb2YgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbCwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlbC5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlbC5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Ob2RlUmVzb2x2ZXIyLmRlZmF1bHQsXG4gICAgICAgIHsgaW5uZXJSZWY6IHRoaXMuZ2V0U2Nyb2xsVGFyZ2V0IH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNjcm9sbENhcHRvcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBTY3JvbGxDYXB0b3JTd2l0Y2ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKFNjcm9sbENhcHRvclN3aXRjaCwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIFNjcm9sbENhcHRvclN3aXRjaCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Nyb2xsQ2FwdG9yU3dpdGNoKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2Nyb2xsQ2FwdG9yU3dpdGNoLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2Nyb2xsQ2FwdG9yU3dpdGNoKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2Nyb2xsQ2FwdG9yU3dpdGNoLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRW5hYmxlZCA9IF9wcm9wcy5pc0VuYWJsZWQsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2lzRW5hYmxlZCddKTtcblxuICAgICAgcmV0dXJuIGlzRW5hYmxlZCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNjcm9sbENhcHRvciwgcHJvcHMpIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2Nyb2xsQ2FwdG9yU3dpdGNoO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuU2Nyb2xsQ2FwdG9yU3dpdGNoLmRlZmF1bHRQcm9wcyA9IHsgaXNFbmFibGVkOiB0cnVlIH07XG5leHBvcnRzLmRlZmF1bHQgPSBTY3JvbGxDYXB0b3JTd2l0Y2g7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGluc3RydWN0aW9uc0FyaWFNZXNzYWdlID0gZXhwb3J0cy5pbnN0cnVjdGlvbnNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIGluc3RydWN0aW9uc0FyaWFNZXNzYWdlKGV2ZW50KSB7XG4gIHZhciBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIGlzU2VhcmNoYWJsZSA9IGNvbnRleHQuaXNTZWFyY2hhYmxlLFxuICAgICAgaXNNdWx0aSA9IGNvbnRleHQuaXNNdWx0aSxcbiAgICAgIGxhYmVsID0gY29udGV4dC5sYWJlbDtcblxuICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgY2FzZSAnbWVudSc6XG4gICAgICByZXR1cm4gJ1VzZSBVcCBhbmQgRG93biB0byBjaG9vc2Ugb3B0aW9ucywgcHJlc3MgRW50ZXIgdG8gc2VsZWN0IHRoZSBjdXJyZW50bHkgZm9jdXNlZCBvcHRpb24sIHByZXNzIEVzY2FwZSB0byBleGl0IHRoZSBtZW51LCBwcmVzcyBUYWIgdG8gc2VsZWN0IHRoZSBvcHRpb24gYW5kIGV4aXQgdGhlIG1lbnUuJztcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gKGxhYmVsID8gbGFiZWwgOiAnU2VsZWN0JykgKyAnIGlzIGZvY3VzZWQgJyArIChpc1NlYXJjaGFibGUgPyAnLHR5cGUgdG8gcmVmaW5lIGxpc3QnIDogJycpICsgJywgcHJlc3MgRG93biB0byBvcGVuIHRoZSBtZW51LCAnICsgKGlzTXVsdGkgPyAnIHByZXNzIGxlZnQgdG8gZm9jdXMgc2VsZWN0ZWQgdmFsdWVzJyA6ICcnKTtcbiAgICBjYXNlICd2YWx1ZSc6XG4gICAgICByZXR1cm4gJ1VzZSBsZWZ0IGFuZCByaWdodCB0byB0b2dnbGUgYmV0d2VlbiBmb2N1c2VkIHZhbHVlcywgcHJlc3MgRW50ZXIgdG8gcmVtb3ZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSc7XG4gIH1cbn07XG5cbnZhciB2YWx1ZUV2ZW50QXJpYU1lc3NhZ2UgPSBleHBvcnRzLnZhbHVlRXZlbnRBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHZhbHVlRXZlbnRBcmlhTWVzc2FnZShldmVudCwgY29udGV4dCkge1xuICB2YXIgdmFsdWUgPSBjb250ZXh0LnZhbHVlO1xuXG4gIGlmICghdmFsdWUpIHJldHVybjtcbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgJ2Rlc2VsZWN0LW9wdGlvbic6XG4gICAgY2FzZSAncG9wLXZhbHVlJzpcbiAgICBjYXNlICdyZW1vdmUtdmFsdWUnOlxuICAgICAgcmV0dXJuICdvcHRpb24gJyArIHZhbHVlICsgJywgZGVzZWxlY3RlZC4nO1xuICAgIGNhc2UgJ3NlbGVjdC1vcHRpb24nOlxuICAgICAgcmV0dXJuICdvcHRpb24gJyArIHZhbHVlICsgJywgc2VsZWN0ZWQuJztcbiAgfVxufTtcblxudmFyIHZhbHVlRm9jdXNBcmlhTWVzc2FnZSA9IGV4cG9ydHMudmFsdWVGb2N1c0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gdmFsdWVGb2N1c0FyaWFNZXNzYWdlKF9yZWYpIHtcbiAgdmFyIGZvY3VzZWRWYWx1ZSA9IF9yZWYuZm9jdXNlZFZhbHVlLFxuICAgICAgZ2V0T3B0aW9uTGFiZWwgPSBfcmVmLmdldE9wdGlvbkxhYmVsLFxuICAgICAgc2VsZWN0VmFsdWUgPSBfcmVmLnNlbGVjdFZhbHVlO1xuICByZXR1cm4gJ3ZhbHVlICcgKyBnZXRPcHRpb25MYWJlbChmb2N1c2VkVmFsdWUpICsgJyBmb2N1c2VkLCAnICsgKHNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKSArIDEpICsgJyBvZiAnICsgc2VsZWN0VmFsdWUubGVuZ3RoICsgJy4nO1xufTtcbnZhciBvcHRpb25Gb2N1c0FyaWFNZXNzYWdlID0gZXhwb3J0cy5vcHRpb25Gb2N1c0FyaWFNZXNzYWdlID0gZnVuY3Rpb24gb3B0aW9uRm9jdXNBcmlhTWVzc2FnZShfcmVmMikge1xuICB2YXIgZm9jdXNlZE9wdGlvbiA9IF9yZWYyLmZvY3VzZWRPcHRpb24sXG4gICAgICBnZXRPcHRpb25MYWJlbCA9IF9yZWYyLmdldE9wdGlvbkxhYmVsLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHJldHVybiAnb3B0aW9uICcgKyBnZXRPcHRpb25MYWJlbChmb2N1c2VkT3B0aW9uKSArICcgZm9jdXNlZCwgJyArIChvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbikgKyAxKSArICcgb2YgJyArIG9wdGlvbnMubGVuZ3RoICsgJy4nO1xufTtcbnZhciByZXN1bHRzQXJpYU1lc3NhZ2UgPSBleHBvcnRzLnJlc3VsdHNBcmlhTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc3VsdHNBcmlhTWVzc2FnZShfcmVmMykge1xuICB2YXIgaW5wdXRWYWx1ZSA9IF9yZWYzLmlucHV0VmFsdWUsXG4gICAgICBzY3JlZW5SZWFkZXJNZXNzYWdlID0gX3JlZjMuc2NyZWVuUmVhZGVyTWVzc2FnZTtcbiAgcmV0dXJuICcnICsgc2NyZWVuUmVhZGVyTWVzc2FnZSArIChpbnB1dFZhbHVlID8gJyBmb3Igc2VhcmNoIHRlcm0gJyArIGlucHV0VmFsdWUgOiAnJykgKyAnLic7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBmb3JtYXRHcm91cExhYmVsID0gZXhwb3J0cy5mb3JtYXRHcm91cExhYmVsID0gZnVuY3Rpb24gZm9ybWF0R3JvdXBMYWJlbChncm91cCkge1xuICByZXR1cm4gZ3JvdXAubGFiZWw7XG59O1xuXG52YXIgZ2V0T3B0aW9uTGFiZWwgPSBleHBvcnRzLmdldE9wdGlvbkxhYmVsID0gZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB7XG4gIHJldHVybiBvcHRpb24ubGFiZWw7XG59O1xuXG52YXIgZ2V0T3B0aW9uVmFsdWUgPSBleHBvcnRzLmdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSB7XG4gIHJldHVybiBvcHRpb24udmFsdWU7XG59O1xuXG52YXIgaXNPcHRpb25EaXNhYmxlZCA9IGV4cG9ydHMuaXNPcHRpb25EaXNhYmxlZCA9IGZ1bmN0aW9uIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB7XG4gIHJldHVybiAhIW9wdGlvbi5pc0Rpc2FibGVkO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRDb21wb25lbnRzID0gZXhwb3J0cy5jb21wb25lbnRzID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5yZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX2NvbnRhaW5lcnMgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMnKTtcblxudmFyIF9pbmRpY2F0b3JzID0gcmVxdWlyZSgnLi9pbmRpY2F0b3JzJyk7XG5cbnZhciBfQ29udHJvbCA9IHJlcXVpcmUoJy4vQ29udHJvbCcpO1xuXG52YXIgX0NvbnRyb2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29udHJvbCk7XG5cbnZhciBfR3JvdXAgPSByZXF1aXJlKCcuL0dyb3VwJyk7XG5cbnZhciBfR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR3JvdXApO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0KTtcblxudmFyIF9NZW51ID0gcmVxdWlyZSgnLi9NZW51Jyk7XG5cbnZhciBfTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51KTtcblxudmFyIF9NdWx0aVZhbHVlID0gcmVxdWlyZSgnLi9NdWx0aVZhbHVlJyk7XG5cbnZhciBfTXVsdGlWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NdWx0aVZhbHVlKTtcblxudmFyIF9PcHRpb24gPSByZXF1aXJlKCcuL09wdGlvbicpO1xuXG52YXIgX09wdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PcHRpb24pO1xuXG52YXIgX1BsYWNlaG9sZGVyID0gcmVxdWlyZSgnLi9QbGFjZWhvbGRlcicpO1xuXG52YXIgX1BsYWNlaG9sZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BsYWNlaG9sZGVyKTtcblxudmFyIF9TaW5nbGVWYWx1ZSA9IHJlcXVpcmUoJy4vU2luZ2xlVmFsdWUnKTtcblxudmFyIF9TaW5nbGVWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaW5nbGVWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb21wb25lbnRzID0gZXhwb3J0cy5jb21wb25lbnRzID0ge1xuICBDbGVhckluZGljYXRvcjogX2luZGljYXRvcnMuQ2xlYXJJbmRpY2F0b3IsXG4gIENvbnRyb2w6IF9Db250cm9sMi5kZWZhdWx0LFxuICBEcm9wZG93bkluZGljYXRvcjogX2luZGljYXRvcnMuRHJvcGRvd25JbmRpY2F0b3IsXG4gIERvd25DaGV2cm9uOiBfaW5kaWNhdG9ycy5Eb3duQ2hldnJvbixcbiAgQ3Jvc3NJY29uOiBfaW5kaWNhdG9ycy5Dcm9zc0ljb24sXG4gIEdyb3VwOiBfR3JvdXAyLmRlZmF1bHQsXG4gIEdyb3VwSGVhZGluZzogX0dyb3VwLkdyb3VwSGVhZGluZyxcbiAgSW5kaWNhdG9yc0NvbnRhaW5lcjogX2NvbnRhaW5lcnMuSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgSW5kaWNhdG9yU2VwYXJhdG9yOiBfaW5kaWNhdG9ycy5JbmRpY2F0b3JTZXBhcmF0b3IsXG4gIElucHV0OiBfSW5wdXQyLmRlZmF1bHQsXG4gIExvYWRpbmdJbmRpY2F0b3I6IF9pbmRpY2F0b3JzLkxvYWRpbmdJbmRpY2F0b3IsXG4gIE1lbnU6IF9NZW51Mi5kZWZhdWx0LFxuICBNZW51TGlzdDogX01lbnUuTWVudUxpc3QsXG4gIE1lbnVQb3J0YWw6IF9NZW51Lk1lbnVQb3J0YWwsXG4gIExvYWRpbmdNZXNzYWdlOiBfTWVudS5Mb2FkaW5nTWVzc2FnZSxcbiAgTm9PcHRpb25zTWVzc2FnZTogX01lbnUuTm9PcHRpb25zTWVzc2FnZSxcbiAgTXVsdGlWYWx1ZTogX011bHRpVmFsdWUyLmRlZmF1bHQsXG4gIE11bHRpVmFsdWVDb250YWluZXI6IF9NdWx0aVZhbHVlLk11bHRpVmFsdWVDb250YWluZXIsXG4gIE11bHRpVmFsdWVMYWJlbDogX011bHRpVmFsdWUuTXVsdGlWYWx1ZUxhYmVsLFxuICBNdWx0aVZhbHVlUmVtb3ZlOiBfTXVsdGlWYWx1ZS5NdWx0aVZhbHVlUmVtb3ZlLFxuICBPcHRpb246IF9PcHRpb24yLmRlZmF1bHQsXG4gIFBsYWNlaG9sZGVyOiBfUGxhY2Vob2xkZXIyLmRlZmF1bHQsXG4gIFNlbGVjdENvbnRhaW5lcjogX2NvbnRhaW5lcnMuU2VsZWN0Q29udGFpbmVyLFxuICBTaW5nbGVWYWx1ZTogX1NpbmdsZVZhbHVlMi5kZWZhdWx0LFxuICBWYWx1ZUNvbnRhaW5lcjogX2NvbnRhaW5lcnMuVmFsdWVDb250YWluZXJcbn07XG5cbnZhciBkZWZhdWx0Q29tcG9uZW50cyA9IGV4cG9ydHMuZGVmYXVsdENvbXBvbmVudHMgPSBmdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50cyhwcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbXBvbmVudHMsIHByb3BzLmNvbXBvbmVudHMpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkluZGljYXRvcnNDb250YWluZXIgPSBleHBvcnRzLmluZGljYXRvcnNDb250YWluZXJDU1MgPSBleHBvcnRzLlZhbHVlQ29udGFpbmVyID0gZXhwb3J0cy52YWx1ZUNvbnRhaW5lckNTUyA9IGV4cG9ydHMuU2VsZWN0Q29udGFpbmVyID0gZXhwb3J0cy5jb250YWluZXJDU1MgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9lbW90aW9uID0gcmVxdWlyZSgnZW1vdGlvbicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUm9vdCBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgY29udGFpbmVyQ1NTID0gZXhwb3J0cy5jb250YWluZXJDU1MgPSBmdW5jdGlvbiBjb250YWluZXJDU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzUnRsID0gX3JlZi5pc1J0bDtcbiAgcmV0dXJuIHtcbiAgICBkaXJlY3Rpb246IGlzUnRsID8gJ3J0bCcgOiBudWxsLFxuICAgIHBvaW50ZXJFdmVudHM6IGlzRGlzYWJsZWQgPyAnbm9uZScgOiBudWxsLCAvLyBjYW5jZWwgbW91c2UgZXZlbnRzIHdoZW4gZGlzYWJsZWRcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9O1xufTtcbnZhciBTZWxlY3RDb250YWluZXIgPSBleHBvcnRzLlNlbGVjdENvbnRhaW5lciA9IGZ1bmN0aW9uIFNlbGVjdENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNSdGwgPSBwcm9wcy5pc1J0bDtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qLygwLCBfZW1vdGlvbi5jc3MpKGdldFN0eWxlcygnY29udGFpbmVyJywgcHJvcHMpKSwge1xuICAgICAgICAnLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAgICctLWlzLXJ0bCc6IGlzUnRsXG4gICAgICB9LCBjbGFzc05hbWUpXG4gICAgfSwgaW5uZXJQcm9wcyksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVmFsdWUgQ29udGFpbmVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIHZhbHVlQ29udGFpbmVyQ1NTID0gZXhwb3J0cy52YWx1ZUNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIHZhbHVlQ29udGFpbmVyQ1NTKF9yZWYyKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZjIudGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleDogMSxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIHBhZGRpbmc6IHNwYWNpbmcuYmFzZVVuaXQgLyAyICsgJ3B4ICcgKyBzcGFjaW5nLmJhc2VVbml0ICogMiArICdweCcsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH07XG59O1xuXG52YXIgVmFsdWVDb250YWluZXIgPSBleHBvcnRzLlZhbHVlQ29udGFpbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFZhbHVlQ29udGFpbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBWYWx1ZUNvbnRhaW5lcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWVDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChWYWx1ZUNvbnRhaW5lci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFZhbHVlQ29udGFpbmVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmFsdWVDb250YWluZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjeCA9IF9wcm9wcy5jeCxcbiAgICAgICAgICBpc011bHRpID0gX3Byb3BzLmlzTXVsdGksXG4gICAgICAgICAgZ2V0U3R5bGVzID0gX3Byb3BzLmdldFN0eWxlcyxcbiAgICAgICAgICBoYXNWYWx1ZSA9IF9wcm9wcy5oYXNWYWx1ZTtcblxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qLygwLCBfZW1vdGlvbi5jc3MpKGdldFN0eWxlcygndmFsdWVDb250YWluZXInLCB0aGlzLnByb3BzKSksIHtcbiAgICAgICAgICAgICd2YWx1ZS1jb250YWluZXInOiB0cnVlLFxuICAgICAgICAgICAgJ3ZhbHVlLWNvbnRhaW5lci0taXMtbXVsdGknOiBpc011bHRpLFxuICAgICAgICAgICAgJ3ZhbHVlLWNvbnRhaW5lci0taGFzLXZhbHVlJzogaGFzVmFsdWVcbiAgICAgICAgICB9LCBjbGFzc05hbWUpXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWYWx1ZUNvbnRhaW5lcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW5kaWNhdG9yIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTID0gZXhwb3J0cy5pbmRpY2F0b3JzQ29udGFpbmVyQ1NTID0gZnVuY3Rpb24gaW5kaWNhdG9yc0NvbnRhaW5lckNTUygpIHtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFNocmluazogMFxuICB9O1xufTtcbnZhciBJbmRpY2F0b3JzQ29udGFpbmVyID0gZXhwb3J0cy5JbmRpY2F0b3JzQ29udGFpbmVyID0gZnVuY3Rpb24gSW5kaWNhdG9yc0NvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXM7XG5cblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qLygwLCBfZW1vdGlvbi5jc3MpKGdldFN0eWxlcygnaW5kaWNhdG9yc0NvbnRhaW5lcicsIHByb3BzKSksIHtcbiAgICAgICAgJ2luZGljYXRvcnMnOiB0cnVlXG4gICAgICB9LCBjbGFzc05hbWUpXG4gICAgfSxcbiAgICBjaGlsZHJlblxuICApO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxvYWRpbmdJbmRpY2F0b3IgPSBleHBvcnRzLmxvYWRpbmdJbmRpY2F0b3JDU1MgPSBleHBvcnRzLkluZGljYXRvclNlcGFyYXRvciA9IGV4cG9ydHMuaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gZXhwb3J0cy5DbGVhckluZGljYXRvciA9IGV4cG9ydHMuY2xlYXJJbmRpY2F0b3JDU1MgPSBleHBvcnRzLkRyb3Bkb3duSW5kaWNhdG9yID0gZXhwb3J0cy5kcm9wZG93bkluZGljYXRvckNTUyA9IGV4cG9ydHMuRG93bkNoZXZyb24gPSBleHBvcnRzLkNyb3NzSWNvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2Vtb3Rpb24gPSByZXF1aXJlKCdlbW90aW9uJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIFN2ZyA9IGZ1bmN0aW9uIFN2ZyhfcmVmKSB7XG4gIHZhciBzaXplID0gX3JlZi5zaXplLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydzaXplJ10pO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3ZnJywgX2V4dGVuZHMoe1xuICAgIGhlaWdodDogc2l6ZSxcbiAgICB3aWR0aDogc2l6ZSxcbiAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgZm9jdXNhYmxlOiAnZmFsc2UnLFxuICAgIGNsYXNzTmFtZTogLyojX19QVVJFX18qLyAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoe1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBzdHJva2U6ICdjdXJyZW50Q29sb3InLFxuICAgICAgc3Ryb2tlV2lkdGg6IDBcbiAgICB9KVxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIENyb3NzSWNvbiA9IGV4cG9ydHMuQ3Jvc3NJY29uID0gZnVuY3Rpb24gQ3Jvc3NJY29uKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBTdmcsXG4gICAgX2V4dGVuZHMoeyBzaXplOiAyMCB9LCBwcm9wcyksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6JyB9KVxuICApO1xufTtcbnZhciBEb3duQ2hldnJvbiA9IGV4cG9ydHMuRG93bkNoZXZyb24gPSBmdW5jdGlvbiBEb3duQ2hldnJvbihwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgU3ZnLFxuICAgIF9leHRlbmRzKHsgc2l6ZTogMjAgfSwgcHJvcHMpLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1eicgfSlcbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGJhc2VDU1MgPSBmdW5jdGlvbiBiYXNlQ1NTKF9yZWYyKSB7XG4gIHZhciBpc0ZvY3VzZWQgPSBfcmVmMi5pc0ZvY3VzZWQsXG4gICAgICBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmMiR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwXG4gICAgfVxuICB9O1xufTtcblxudmFyIGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gZXhwb3J0cy5kcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG52YXIgRHJvcGRvd25JbmRpY2F0b3IgPSBleHBvcnRzLkRyb3Bkb3duSW5kaWNhdG9yID0gZnVuY3Rpb24gRHJvcGRvd25JbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoZ2V0U3R5bGVzKCdkcm9wZG93bkluZGljYXRvcicsIHByb3BzKSksIHtcbiAgICAgICAgJ2luZGljYXRvcic6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlXG4gICAgICB9LCBjbGFzc05hbWUpXG4gICAgfSksXG4gICAgY2hpbGRyZW4gfHwgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG93bkNoZXZyb24sIG51bGwpXG4gICk7XG59O1xuXG52YXIgY2xlYXJJbmRpY2F0b3JDU1MgPSBleHBvcnRzLmNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBDbGVhckluZGljYXRvciA9IGV4cG9ydHMuQ2xlYXJJbmRpY2F0b3IgPSBmdW5jdGlvbiBDbGVhckluZGljYXRvcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgX2V4dGVuZHMoe30sIGlubmVyUHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKShnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpKSwge1xuICAgICAgICAnaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWVcbiAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICB9KSxcbiAgICBjaGlsZHJlbiB8fCBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDcm9zc0ljb24sIG51bGwpXG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNlcGFyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSBleHBvcnRzLmluZGljYXRvclNlcGFyYXRvckNTUyA9IGZ1bmN0aW9uIGluZGljYXRvclNlcGFyYXRvckNTUyhfcmVmMykge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYzLmlzRGlzYWJsZWQsXG4gICAgICBfcmVmMyR0aGVtZSA9IF9yZWYzLnRoZW1lLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgICAgY29sb3JzID0gX3JlZjMkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICAgIHdpZHRoOiAxXG4gIH07XG59O1xuXG52YXIgSW5kaWNhdG9yU2VwYXJhdG9yID0gZXhwb3J0cy5JbmRpY2F0b3JTZXBhcmF0b3IgPSBmdW5jdGlvbiBJbmRpY2F0b3JTZXBhcmF0b3IocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBfZXh0ZW5kcyh7fSwgaW5uZXJQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKShnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKSksIHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSlcbiAgfSkpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGtleWZyYW1lc05hbWUgPSAncmVhY3Qtc2VsZWN0LWxvYWRpbmctaW5kaWNhdG9yJztcbnZhciBrZXlmcmFtZXNJbmplY3RlZCA9IGZhbHNlO1xuXG52YXIgbG9hZGluZ0luZGljYXRvckNTUyA9IGV4cG9ydHMubG9hZGluZ0luZGljYXRvckNTUyA9IGZ1bmN0aW9uIGxvYWRpbmdJbmRpY2F0b3JDU1MoX3JlZjQpIHtcbiAgdmFyIGlzRm9jdXNlZCA9IF9yZWY0LmlzRm9jdXNlZCxcbiAgICAgIHNpemUgPSBfcmVmNC5zaXplLFxuICAgICAgX3JlZjQkdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICAgIGNvbG9ycyA9IF9yZWY0JHRoZW1lLmNvbG9ycyxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjQkdGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgZm9udFNpemU6IHNpemUsXG4gICAgbGluZUhlaWdodDogMSxcbiAgICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gIH07XG59O1xuXG52YXIgTG9hZGluZ0RvdCA9IGZ1bmN0aW9uIExvYWRpbmdEb3QoX3JlZjUpIHtcbiAgdmFyIGNvbG9yID0gX3JlZjUuY29sb3IsXG4gICAgICBkZWxheSA9IF9yZWY1LmRlbGF5LFxuICAgICAgb2Zmc2V0ID0gX3JlZjUub2Zmc2V0O1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgY2xhc3NOYW1lOiAvKiNfX1BVUkVfXyovIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKSh7XG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzFzJyxcbiAgICAgIGFuaW1hdGlvbkRlbGF5OiBkZWxheSArICdtcycsXG4gICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJyxcbiAgICAgIGFuaW1hdGlvbk5hbWU6IGtleWZyYW1lc05hbWUsXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IG51bGwsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbSdcbiAgICB9KVxuICB9KTtcbn07XG5cbnZhciBMb2FkaW5nSW5kaWNhdG9yID0gZXhwb3J0cy5Mb2FkaW5nSW5kaWNhdG9yID0gZnVuY3Rpb24gTG9hZGluZ0luZGljYXRvcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgICAgaXNSdGwgPSBwcm9wcy5pc1J0bCxcbiAgICAgIGNvbG9ycyA9IHByb3BzLnRoZW1lLmNvbG9ycztcblxuICB2YXIgY29sb3IgPSBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWwyMDtcblxuICBpZiAoIWtleWZyYW1lc0luamVjdGVkKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICgwLCBfZW1vdGlvbi5pbmplY3RHbG9iYWwpKCdAa2V5ZnJhbWVzICcsIGtleWZyYW1lc05hbWUsICd7MCUsODAlLDEwMCV7b3BhY2l0eTowO300MCV7b3BhY2l0eToxO319OycpO1xuICAgIGtleWZyYW1lc0luamVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBfZXh0ZW5kcyh7fSwgaW5uZXJQcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qLygwLCBfZW1vdGlvbi5jc3MpKGdldFN0eWxlcygnbG9hZGluZ0luZGljYXRvcicsIHByb3BzKSksIHtcbiAgICAgICAgJ2luZGljYXRvcic6IHRydWUsXG4gICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWVcbiAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICB9KSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nRG90LCB7IGNvbG9yOiBjb2xvciwgZGVsYXk6IDAsIG9mZnNldDogaXNSdGwgfSksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ0RvdCwgeyBjb2xvcjogY29sb3IsIGRlbGF5OiAxNjAsIG9mZnNldDogdHJ1ZSB9KSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nRG90LCB7IGNvbG9yOiBjb2xvciwgZGVsYXk6IDMyMCwgb2Zmc2V0OiAhaXNSdGwgfSlcbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3NzID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZW1vdGlvbiA9IHJlcXVpcmUoJ2Vtb3Rpb24nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNzcyA9IGV4cG9ydHMuY3NzID0gZnVuY3Rpb24gY3NzKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnMsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWw1IDogY29sb3JzLm5ldXRyYWwwLFxuICAgIGJvcmRlckNvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJXaWR0aDogMSxcbiAgICBib3hTaGFkb3c6IGlzRm9jdXNlZCA/ICcwIDAgMCAxcHggJyArIGNvbG9ycy5wcmltYXJ5IDogbnVsbCxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbkhlaWdodDogc3BhY2luZy5jb250cm9sSGVpZ2h0LFxuICAgIG91dGxpbmU6ICcwICFpbXBvcnRhbnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMTAwbXMnLFxuXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3JkZXJDb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMubmV1dHJhbDMwXG4gICAgfVxuICB9O1xufTtcblxudmFyIENvbnRyb2wgPSBmdW5jdGlvbiBDb250cm9sKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgbWVudUlzT3BlbiA9IHByb3BzLm1lbnVJc09wZW47XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoZ2V0U3R5bGVzKCdjb250cm9sJywgcHJvcHMpKSwge1xuICAgICAgICAnY29udHJvbCc6IHRydWUsXG4gICAgICAgICdjb250cm9sLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAgICdjb250cm9sLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICAgICAnY29udHJvbC0tbWVudS1pcy1vcGVuJzogbWVudUlzT3BlblxuICAgICAgfSwgY2xhc3NOYW1lKVxuICAgIH0sIGlubmVyUHJvcHMpLFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb250cm9sOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuR3JvdXBIZWFkaW5nID0gZXhwb3J0cy5ncm91cEhlYWRpbmdDU1MgPSBleHBvcnRzLmdyb3VwQ1NTID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZW1vdGlvbiA9IHJlcXVpcmUoJ2Vtb3Rpb24nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgZ3JvdXBDU1MgPSBleHBvcnRzLmdyb3VwQ1NTID0gZnVuY3Rpb24gZ3JvdXBDU1MoX3JlZikge1xuICB2YXIgc3BhY2luZyA9IF9yZWYudGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nLmJhc2VVbml0ICogMixcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nLmJhc2VVbml0ICogMlxuICB9O1xufTtcblxudmFyIEdyb3VwID0gZnVuY3Rpb24gR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgSGVhZGluZyA9IHByb3BzLkhlYWRpbmcsXG4gICAgICBoZWFkaW5nUHJvcHMgPSBwcm9wcy5oZWFkaW5nUHJvcHMsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgdGhlbWUgPSBwcm9wcy50aGVtZSxcbiAgICAgIHNlbGVjdFByb3BzID0gcHJvcHMuc2VsZWN0UHJvcHM7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKShnZXRTdHlsZXMoJ2dyb3VwJywgcHJvcHMpKSwgeyAnZ3JvdXAnOiB0cnVlIH0sIGNsYXNzTmFtZSlcbiAgICB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgSGVhZGluZyxcbiAgICAgIF9leHRlbmRzKHt9LCBoZWFkaW5nUHJvcHMsIHtcbiAgICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzLFxuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgICAgICBjeDogY3hcbiAgICAgIH0pLFxuICAgICAgbGFiZWxcbiAgICApLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgY2hpbGRyZW5cbiAgICApXG4gICk7XG59O1xuXG52YXIgZ3JvdXBIZWFkaW5nQ1NTID0gZXhwb3J0cy5ncm91cEhlYWRpbmdDU1MgPSBmdW5jdGlvbiBncm91cEhlYWRpbmdDU1MoX3JlZjIpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmMi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIGNvbG9yOiAnIzk5OScsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMC4yNWVtJyxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5iYXNlVW5pdCAqIDMsXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmJhc2VVbml0ICogMyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9O1xufTtcblxudmFyIEdyb3VwSGVhZGluZyA9IGZ1bmN0aW9uIEdyb3VwSGVhZGluZyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzLFxuICAgICAgY2xlYW5Qcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydjbGFzc05hbWUnLCAnY3gnLCAnZ2V0U3R5bGVzJywgJ3RoZW1lJywgJ3NlbGVjdFByb3BzJ10pO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKShnZXRTdHlsZXMoJ2dyb3VwSGVhZGluZycsIF9leHRlbmRzKHsgdGhlbWU6IHRoZW1lIH0sIGNsZWFuUHJvcHMpKSksIHsgJ2dyb3VwLWhlYWRpbmcnOiB0cnVlIH0sIGNsYXNzTmFtZSlcbiAgfSwgY2xlYW5Qcm9wcykpO1xufTtcblxuZXhwb3J0cy5Hcm91cEhlYWRpbmcgPSBHcm91cEhlYWRpbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBHcm91cDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlucHV0Q1NTID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfZW1vdGlvbiA9IHJlcXVpcmUoJ2Vtb3Rpb24nKTtcblxudmFyIF9yZWFjdElucHV0QXV0b3NpemUgPSByZXF1aXJlKCdyZWFjdC1pbnB1dC1hdXRvc2l6ZScpO1xuXG52YXIgX3JlYWN0SW5wdXRBdXRvc2l6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdElucHV0QXV0b3NpemUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBpbnB1dENTUyA9IGV4cG9ydHMuaW5wdXRDU1MgPSBmdW5jdGlvbiBpbnB1dENTUyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICB2aXNpYmlsaXR5OiBpc0Rpc2FibGVkID8gJ2hpZGRlbicgOiAndmlzaWJsZScsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsODBcbiAgfTtcbn07XG52YXIgaW5wdXRTdHlsZSA9IGZ1bmN0aW9uIGlucHV0U3R5bGUoaXNIaWRkZW4pIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIG9wYWNpdHk6IGlzSGlkZGVuID8gMCA6IDEsXG4gICAgb3V0bGluZTogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfTtcbn07XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIElucHV0KF9yZWYyKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICBjeCA9IF9yZWYyLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gX3JlZjIuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJSZWYgPSBfcmVmMi5pbm5lclJlZixcbiAgICAgIGlzSGlkZGVuID0gX3JlZjIuaXNIaWRkZW4sXG4gICAgICBpc0Rpc2FibGVkID0gX3JlZjIuaXNEaXNhYmxlZCxcbiAgICAgIHRoZW1lID0gX3JlZjIudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IF9yZWYyLnNlbGVjdFByb3BzLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsnY2xhc3NOYW1lJywgJ2N4JywgJ2dldFN0eWxlcycsICdpbm5lclJlZicsICdpc0hpZGRlbicsICdpc0Rpc2FibGVkJywgJ3RoZW1lJywgJ3NlbGVjdFByb3BzJ10pO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IGNsYXNzTmFtZTogLyojX19QVVJFX18qLyAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoZ2V0U3R5bGVzKCdpbnB1dCcsIF9leHRlbmRzKHsgdGhlbWU6IHRoZW1lIH0sIHByb3BzKSkpIH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0SW5wdXRBdXRvc2l6ZTIuZGVmYXVsdCwgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiBjeChudWxsLCB7ICdpbnB1dCc6IHRydWUgfSwgY2xhc3NOYW1lKSxcbiAgICAgIGlucHV0UmVmOiBpbm5lclJlZixcbiAgICAgIGlucHV0U3R5bGU6IGlucHV0U3R5bGUoaXNIaWRkZW4pLFxuICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICB9LCBwcm9wcykpXG4gICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk11bHRpVmFsdWVSZW1vdmUgPSBleHBvcnRzLk11bHRpVmFsdWVMYWJlbCA9IGV4cG9ydHMuTXVsdGlWYWx1ZUNvbnRhaW5lciA9IGV4cG9ydHMuTXVsdGlWYWx1ZUdlbmVyaWMgPSBleHBvcnRzLm11bHRpVmFsdWVSZW1vdmVDU1MgPSBleHBvcnRzLm11bHRpVmFsdWVMYWJlbENTUyA9IGV4cG9ydHMubXVsdGlWYWx1ZUNTUyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2Vtb3Rpb24gPSByZXF1aXJlKCdlbW90aW9uJyk7XG5cbnZhciBfaW5kaWNhdG9ycyA9IHJlcXVpcmUoJy4vaW5kaWNhdG9ycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBtdWx0aVZhbHVlQ1NTID0gZXhwb3J0cy5tdWx0aVZhbHVlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUNTUyhfcmVmKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm5ldXRyYWwxMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWluV2lkdGg6IDAgLy8gcmVzb2x2ZXMgZmxleC90ZXh0LW92ZXJmbG93IGJ1Z1xuICB9O1xufTtcblxudmFyIG11bHRpVmFsdWVMYWJlbENTUyA9IGV4cG9ydHMubXVsdGlWYWx1ZUxhYmVsQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUxhYmVsQ1NTKF9yZWYyKSB7XG4gIHZhciBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzLFxuICAgICAgY3JvcFdpdGhFbGxpcHNpcyA9IF9yZWYyLmNyb3BXaXRoRWxsaXBzaXM7XG4gIHJldHVybiB7XG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIGZvbnRTaXplOiAnODUlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMyxcbiAgICBwYWRkaW5nTGVmdDogNixcbiAgICB0ZXh0T3ZlcmZsb3c6IGNyb3BXaXRoRWxsaXBzaXMgPyAnZWxsaXBzaXMnIDogbnVsbCxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9O1xufTtcblxudmFyIG11bHRpVmFsdWVSZW1vdmVDU1MgPSBleHBvcnRzLm11bHRpVmFsdWVSZW1vdmVDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlUmVtb3ZlQ1NTKF9yZWYzKSB7XG4gIHZhciBfcmVmMyR0aGVtZSA9IF9yZWYzLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYzJHRoZW1lLnNwYWNpbmcsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmMyR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBjb2xvcnMgPSBfcmVmMyR0aGVtZS5jb2xvcnMsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmMy5pc0ZvY3VzZWQ7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNGb2N1c2VkICYmIGNvbG9ycy5kYW5nZXJMaWdodCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcuYmFzZVVuaXQsXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYW5nZXJMaWdodCxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZGFuZ2VyXG4gICAgfVxuICB9O1xufTtcblxudmFyIE11bHRpVmFsdWVHZW5lcmljID0gZXhwb3J0cy5NdWx0aVZhbHVlR2VuZXJpYyA9IGZ1bmN0aW9uIE11bHRpVmFsdWVHZW5lcmljKF9yZWY0KSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWY0LmNoaWxkcmVuLFxuICAgICAgaW5uZXJQcm9wcyA9IF9yZWY0LmlubmVyUHJvcHM7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBpbm5lclByb3BzLFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuXG52YXIgTXVsdGlWYWx1ZUNvbnRhaW5lciA9IGV4cG9ydHMuTXVsdGlWYWx1ZUNvbnRhaW5lciA9IE11bHRpVmFsdWVHZW5lcmljO1xudmFyIE11bHRpVmFsdWVMYWJlbCA9IGV4cG9ydHMuTXVsdGlWYWx1ZUxhYmVsID0gTXVsdGlWYWx1ZUdlbmVyaWM7XG5cbnZhciBNdWx0aVZhbHVlUmVtb3ZlID0gZXhwb3J0cy5NdWx0aVZhbHVlUmVtb3ZlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE11bHRpVmFsdWVSZW1vdmUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE11bHRpVmFsdWVSZW1vdmUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE11bHRpVmFsdWVSZW1vdmUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNdWx0aVZhbHVlUmVtb3ZlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTXVsdGlWYWx1ZVJlbW92ZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE11bHRpVmFsdWVSZW1vdmUsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgaW5uZXJQcm9wcyA9IF9wcm9wcy5pbm5lclByb3BzO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBpbm5lclByb3BzLFxuICAgICAgICBjaGlsZHJlbiB8fCBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaW5kaWNhdG9ycy5Dcm9zc0ljb24sIHsgc2l6ZTogMTQgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE11bHRpVmFsdWVSZW1vdmU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG52YXIgTXVsdGlWYWx1ZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoTXVsdGlWYWx1ZSwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIE11bHRpVmFsdWUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE11bHRpVmFsdWUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNdWx0aVZhbHVlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTXVsdGlWYWx1ZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE11bHRpVmFsdWUsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBjb21wb25lbnRzID0gX3Byb3BzMi5jb21wb25lbnRzLFxuICAgICAgICAgIGN4ID0gX3Byb3BzMi5jeCxcbiAgICAgICAgICBkYXRhID0gX3Byb3BzMi5kYXRhLFxuICAgICAgICAgIGdldFN0eWxlcyA9IF9wcm9wczIuZ2V0U3R5bGVzLFxuICAgICAgICAgIGlubmVyUHJvcHMgPSBfcHJvcHMyLmlubmVyUHJvcHMsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF9wcm9wczIuaXNEaXNhYmxlZCxcbiAgICAgICAgICByZW1vdmVQcm9wcyA9IF9wcm9wczIucmVtb3ZlUHJvcHMsXG4gICAgICAgICAgc2VsZWN0UHJvcHMgPSBfcHJvcHMyLnNlbGVjdFByb3BzO1xuICAgICAgdmFyIENvbnRhaW5lciA9IGNvbXBvbmVudHMuQ29udGFpbmVyLFxuICAgICAgICAgIExhYmVsID0gY29tcG9uZW50cy5MYWJlbCxcbiAgICAgICAgICBSZW1vdmUgPSBjb21wb25lbnRzLlJlbW92ZTtcblxuXG4gICAgICB2YXIgY29udGFpbmVySW5uZXJQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qLygwLCBfZW1vdGlvbi5jc3MpKGdldFN0eWxlcygnbXVsdGlWYWx1ZScsIHRoaXMucHJvcHMpKSwge1xuICAgICAgICAgICdtdWx0aS12YWx1ZSc6IHRydWUsXG4gICAgICAgICAgJ211bHRpLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgICAgICAgfSwgY2xhc3NOYW1lKVxuICAgICAgfSwgaW5uZXJQcm9wcyk7XG5cbiAgICAgIHZhciBsYWJlbElubmVyUHJvcHMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKShnZXRTdHlsZXMoJ211bHRpVmFsdWVMYWJlbCcsIHRoaXMucHJvcHMpKSwge1xuICAgICAgICAgICdtdWx0aS12YWx1ZV9fbGFiZWwnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICAgIH07XG5cbiAgICAgIHZhciByZW1vdmVJbm5lclByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlUmVtb3ZlJywgdGhpcy5wcm9wcykpLCB7XG4gICAgICAgICAgJ211bHRpLXZhbHVlX19yZW1vdmUnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICAgIH0sIHJlbW92ZVByb3BzKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGlubmVyUHJvcHM6IGNvbnRhaW5lcklubmVyUHJvcHMsXG4gICAgICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIExhYmVsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBpbm5lclByb3BzOiBsYWJlbElubmVyUHJvcHMsXG4gICAgICAgICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlbW92ZSwge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgaW5uZXJQcm9wczogcmVtb3ZlSW5uZXJQcm9wcyxcbiAgICAgICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE11bHRpVmFsdWU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5NdWx0aVZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3JvcFdpdGhFbGxpcHNpczogdHJ1ZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE11bHRpVmFsdWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5vcHRpb25DU1MgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9lbW90aW9uID0gcmVxdWlyZSgnZW1vdGlvbicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb3B0aW9uQ1NTID0gZXhwb3J0cy5vcHRpb25DU1MgPSBmdW5jdGlvbiBvcHRpb25DU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgICAgaXNTZWxlY3RlZCA9IF9yZWYuaXNTZWxlY3RlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkyNSA6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDIwIDogaXNTZWxlY3RlZCA/IGNvbG9ycy5uZXV0cmFsMCA6ICdpbmhlcml0JyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgcGFkZGluZzogc3BhY2luZy5iYXNlVW5pdCAqIDIgKyAncHggJyArIHNwYWNpbmcuYmFzZVVuaXQgKiAzICsgJ3B4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuXG4gICAgLy8gcHJvdmlkZSBzb21lIGFmZm9yZGFuY2Ugb24gdG91Y2ggZGV2aWNlc1xuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBpc1NlbGVjdGVkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMucHJpbWFyeTUwXG4gICAgfVxuICB9O1xufTtcblxudmFyIE9wdGlvbiA9IGZ1bmN0aW9uIE9wdGlvbihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBfZXh0ZW5kcyh7XG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgY2xhc3NOYW1lOiBjeCggLyojX19QVVJFX18qLygwLCBfZW1vdGlvbi5jc3MpKGdldFN0eWxlcygnb3B0aW9uJywgcHJvcHMpKSwge1xuICAgICAgICAnb3B0aW9uJzogdHJ1ZSxcbiAgICAgICAgJ29wdGlvbi0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgICAnb3B0aW9uLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICAgICAnb3B0aW9uLS1pcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWRcbiAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICB9LCBpbm5lclByb3BzKSxcbiAgICBjaGlsZHJlblxuICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gT3B0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGxhY2Vob2xkZXJDU1MgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9lbW90aW9uID0gcmVxdWlyZSgnZW1vdGlvbicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcGxhY2Vob2xkZXJDU1MgPSBleHBvcnRzLnBsYWNlaG9sZGVyQ1NTID0gZnVuY3Rpb24gcGxhY2Vob2xkZXJDU1MoX3JlZikge1xuICB2YXIgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNTAsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgfTtcbn07XG5cbnZhciBQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIFBsYWNlaG9sZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGN4KCAvKiNfX1BVUkVfXyovKDAsIF9lbW90aW9uLmNzcykoZ2V0U3R5bGVzKCdwbGFjZWhvbGRlcicsIHByb3BzKSksIHtcbiAgICAgICAgJ3BsYWNlaG9sZGVyJzogdHJ1ZVxuICAgICAgfSwgY2xhc3NOYW1lKVxuICAgIH0sIGlubmVyUHJvcHMpLFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQbGFjZWhvbGRlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNzcyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2Vtb3Rpb24gPSByZXF1aXJlKCdlbW90aW9uJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjc3MgPSBleHBvcnRzLmNzcyA9IGZ1bmN0aW9uIGNzcyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDQwIDogY29sb3JzLm5ldXRyYWw4MCxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXJnaW5SaWdodDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSAnICsgc3BhY2luZy5iYXNlVW5pdCAqIDIgKyAncHgpJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKSdcbiAgfTtcbn07XG5cbnZhciBTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uIFNpbmdsZVZhbHVlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY3goIC8qI19fUFVSRV9fKi8oMCwgX2Vtb3Rpb24uY3NzKShnZXRTdHlsZXMoJ3NpbmdsZVZhbHVlJywgcHJvcHMpKSwge1xuICAgICAgICAnc2luZ2xlLXZhbHVlJzogdHJ1ZSxcbiAgICAgICAgJ3NpbmdsZS12YWx1ZS0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gICAgICB9LCBjbGFzc05hbWUpXG4gICAgfSwgaW5uZXJQcm9wcyksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNpbmdsZVZhbHVlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdFN0eWxlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5tZXJnZVN0eWxlcyA9IG1lcmdlU3R5bGVzO1xuXG52YXIgX2NvbnRhaW5lcnMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29udGFpbmVycycpO1xuXG52YXIgX0NvbnRyb2wgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ29udHJvbCcpO1xuXG52YXIgX0dyb3VwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0dyb3VwJyk7XG5cbnZhciBfaW5kaWNhdG9ycyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbmRpY2F0b3JzJyk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSW5wdXQnKTtcblxudmFyIF9QbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9QbGFjZWhvbGRlcicpO1xuXG52YXIgX09wdGlvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9PcHRpb24nKTtcblxudmFyIF9NZW51ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01lbnUnKTtcblxudmFyIF9TaW5nbGVWYWx1ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9TaW5nbGVWYWx1ZScpO1xuXG52YXIgX011bHRpVmFsdWUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTXVsdGlWYWx1ZScpO1xuXG52YXIgZGVmYXVsdFN0eWxlcyA9IGV4cG9ydHMuZGVmYXVsdFN0eWxlcyA9IHtcbiAgY2xlYXJJbmRpY2F0b3I6IF9pbmRpY2F0b3JzLmNsZWFySW5kaWNhdG9yQ1NTLFxuICBjb250YWluZXI6IF9jb250YWluZXJzLmNvbnRhaW5lckNTUyxcbiAgY29udHJvbDogX0NvbnRyb2wuY3NzLFxuICBkcm9wZG93bkluZGljYXRvcjogX2luZGljYXRvcnMuZHJvcGRvd25JbmRpY2F0b3JDU1MsXG4gIGdyb3VwOiBfR3JvdXAuZ3JvdXBDU1MsXG4gIGdyb3VwSGVhZGluZzogX0dyb3VwLmdyb3VwSGVhZGluZ0NTUyxcbiAgaW5kaWNhdG9yc0NvbnRhaW5lcjogX2NvbnRhaW5lcnMuaW5kaWNhdG9yc0NvbnRhaW5lckNTUyxcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiBfaW5kaWNhdG9ycy5pbmRpY2F0b3JTZXBhcmF0b3JDU1MsXG4gIGlucHV0OiBfSW5wdXQuaW5wdXRDU1MsXG4gIGxvYWRpbmdJbmRpY2F0b3I6IF9pbmRpY2F0b3JzLmxvYWRpbmdJbmRpY2F0b3JDU1MsXG4gIGxvYWRpbmdNZXNzYWdlOiBfTWVudS5sb2FkaW5nTWVzc2FnZUNTUyxcbiAgbWVudTogX01lbnUubWVudUNTUyxcbiAgbWVudUxpc3Q6IF9NZW51Lm1lbnVMaXN0Q1NTLFxuICBtZW51UG9ydGFsOiBfTWVudS5tZW51UG9ydGFsQ1NTLFxuICBtdWx0aVZhbHVlOiBfTXVsdGlWYWx1ZS5tdWx0aVZhbHVlQ1NTLFxuICBtdWx0aVZhbHVlTGFiZWw6IF9NdWx0aVZhbHVlLm11bHRpVmFsdWVMYWJlbENTUyxcbiAgbXVsdGlWYWx1ZVJlbW92ZTogX011bHRpVmFsdWUubXVsdGlWYWx1ZVJlbW92ZUNTUyxcbiAgbm9PcHRpb25zTWVzc2FnZTogX01lbnUubm9PcHRpb25zTWVzc2FnZUNTUyxcbiAgb3B0aW9uOiBfT3B0aW9uLm9wdGlvbkNTUyxcbiAgcGxhY2Vob2xkZXI6IF9QbGFjZWhvbGRlci5wbGFjZWhvbGRlckNTUyxcbiAgc2luZ2xlVmFsdWU6IF9TaW5nbGVWYWx1ZS5jc3MsXG4gIHZhbHVlQ29udGFpbmVyOiBfY29udGFpbmVycy52YWx1ZUNvbnRhaW5lckNTU1xufTtcblxuLy8gTWVyZ2UgVXRpbGl0eVxuLy8gQWxsb3dzIGNvbnN1bWVycyB0byBleHRlbmQgYSBiYXNlIFNlbGVjdCB3aXRoIGFkZGl0aW9uYWwgc3R5bGVzXG5cbmZ1bmN0aW9uIG1lcmdlU3R5bGVzKHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAvLyBpbml0aWFsaXplIHdpdGggc291cmNlIHN0eWxlc1xuICB2YXIgc3R5bGVzID0gX2V4dGVuZHMoe30sIHNvdXJjZSk7XG5cbiAgLy8gbWFzc2FnZSBpbiB0YXJnZXQgc3R5bGVzXG4gIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHNvdXJjZVtrZXldKSB7XG4gICAgICBzdHlsZXNba2V5XSA9IGZ1bmN0aW9uIChyc0NzcywgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldKHNvdXJjZVtrZXldKHJzQ3NzLCBwcm9wcyksIHByb3BzKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc1trZXldID0gdGFyZ2V0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3R5bGVzO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjb2xvcnMgPSBleHBvcnRzLmNvbG9ycyA9IHtcbiAgcHJpbWFyeTogJyMyNjg0RkYnLFxuICBwcmltYXJ5NzU6ICcjNEM5QUZGJyxcbiAgcHJpbWFyeTUwOiAnI0IyRDRGRicsXG4gIHByaW1hcnkyNTogJyNERUVCRkYnLFxuXG4gIGRhbmdlcjogJyNERTM1MEInLFxuICBkYW5nZXJMaWdodDogJyNGRkJEQUQnLFxuXG4gIG5ldXRyYWwwOiAnaHNsKDAsIDAlLCAxMDAlKScsXG4gIG5ldXRyYWw1OiAnaHNsKDAsIDAlLCA5NSUpJyxcbiAgbmV1dHJhbDEwOiAnaHNsKDAsIDAlLCA5MCUpJyxcbiAgbmV1dHJhbDIwOiAnaHNsKDAsIDAlLCA4MCUpJyxcbiAgbmV1dHJhbDMwOiAnaHNsKDAsIDAlLCA3MCUpJyxcbiAgbmV1dHJhbDQwOiAnaHNsKDAsIDAlLCA2MCUpJyxcbiAgbmV1dHJhbDUwOiAnaHNsKDAsIDAlLCA1MCUpJyxcbiAgbmV1dHJhbDYwOiAnaHNsKDAsIDAlLCA0MCUpJyxcbiAgbmV1dHJhbDcwOiAnaHNsKDAsIDAlLCAzMCUpJyxcbiAgbmV1dHJhbDgwOiAnaHNsKDAsIDAlLCAyMCUpJyxcbiAgbmV1dHJhbDkwOiAnaHNsKDAsIDAlLCAxMCUpJ1xufTtcblxudmFyIGJvcmRlclJhZGl1cyA9IDQ7XG52YXIgYmFzZVVuaXQgPSA0OyAvKiBVc2VkIHRvIGNhbGN1bGF0ZSBjb25zaXN0ZW50IG1hcmdpbi9wYWRkaW5nIG9uIGVsZW1lbnRzICovXG52YXIgY29udHJvbEhlaWdodCA9IDM4OyAvKiBUaGUgbWluaW11bSBoZWlnaHQgb2YgdGhlIGNvbnRyb2wgKi9cbnZhciBtZW51R3V0dGVyID0gYmFzZVVuaXQgKiAyOyAvKiBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGNvbnRyb2wgYW5kIG1lbnUgKi9cblxudmFyIHNwYWNpbmcgPSBleHBvcnRzLnNwYWNpbmcgPSB7XG4gIGJhc2VVbml0OiBiYXNlVW5pdCxcbiAgY29udHJvbEhlaWdodDogY29udHJvbEhlaWdodCxcbiAgbWVudUd1dHRlcjogbWVudUd1dHRlclxufTtcblxudmFyIGRlZmF1bHRUaGVtZSA9IGV4cG9ydHMuZGVmYXVsdFRoZW1lID0ge1xuICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgY29sb3JzOiBjb2xvcnMsXG4gIHNwYWNpbmc6IHNwYWNpbmdcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0UHJvcHMgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGRlZmF1bHRQcm9wcyA9IGV4cG9ydHMuZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0SW5wdXRWYWx1ZTogJycsXG4gIGRlZmF1bHRNZW51SXNPcGVuOiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsXG59O1xuXG52YXIgbWFuYWdlU3RhdGUgPSBmdW5jdGlvbiBtYW5hZ2VTdGF0ZShTZWxlY3RDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXAyO1xuXG4gIHJldHVybiBfdGVtcDIgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTdGF0ZU1hbmFnZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU3RhdGVNYW5hZ2VyKCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0ZU1hbmFnZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gU3RhdGVNYW5hZ2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RhdGVNYW5hZ2VyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlucHV0VmFsdWU6IF90aGlzLnByb3BzLmlucHV0VmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLmlucHV0VmFsdWUgOiBfdGhpcy5wcm9wcy5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICAgICAgbWVudUlzT3BlbjogX3RoaXMucHJvcHMubWVudUlzT3BlbiAhPT0gdW5kZWZpbmVkID8gX3RoaXMucHJvcHMubWVudUlzT3BlbiA6IF90aGlzLnByb3BzLmRlZmF1bHRNZW51SXNPcGVuLFxuICAgICAgICB2YWx1ZTogX3RoaXMucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLnZhbHVlIDogX3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgICB9LCBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25DaGFuZ2UnLCB2YWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgfSwgX3RoaXMub25JbnB1dENoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICAvLyBUT0RPOiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHdlIGFsbG93IHRoZSBwcm9wIHRvIHJldHVybiBhIG5ld1xuICAgICAgICAvLyB2YWx1ZSwgYnV0IG5vdyBpbnB1dFZhbHVlIGlzIGEgY29udHJvbGxhYmxlIHByb3Agd2UgcHJvYmFibHkgc2hvdWxkbid0XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzLmNhbGxQcm9wKCdvbklucHV0Q2hhbmdlJywgdmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogbmV3VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlIDogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9LCBfdGhpcy5vbk1lbnVPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25NZW51T3BlbicpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IG1lbnVJc09wZW46IHRydWUgfSk7XG4gICAgICB9LCBfdGhpcy5vbk1lbnVDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2FsbFByb3AoJ29uTWVudUNsb3NlJyk7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgbWVudUlzT3BlbjogZmFsc2UgfSk7XG4gICAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RhdGVNYW5hZ2VyLCBbe1xuICAgICAga2V5OiAnZm9jdXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2JsdXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRQcm9wJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldICE9PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzW2tleV0gOiB0aGlzLnN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY2FsbFByb3AnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGxQcm9wKG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIF9wcm9wcztcblxuICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChfcHJvcHMgPSB0aGlzLnByb3BzKVtuYW1lXS5hcHBseShfcHJvcHMsIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuICAgICAgICAgICAgX3RoaXMyLnNlbGVjdCA9IF9yZWYyO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5wdXRWYWx1ZTogdGhpcy5nZXRQcm9wKCdpbnB1dFZhbHVlJyksXG4gICAgICAgICAgbWVudUlzT3BlbjogdGhpcy5nZXRQcm9wKCdtZW51SXNPcGVuJyksXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgb25JbnB1dENoYW5nZTogdGhpcy5vbklucHV0Q2hhbmdlLFxuICAgICAgICAgIG9uTWVudUNsb3NlOiB0aGlzLm9uTWVudUNsb3NlLFxuICAgICAgICAgIG9uTWVudU9wZW46IHRoaXMub25NZW51T3BlbixcbiAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRQcm9wKCd2YWx1ZScpXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3RhdGVNYW5hZ2VyO1xuICB9KF9yZWFjdC5Db21wb25lbnQpLCBfY2xhc3MuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzLCBfdGVtcDI7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBtYW5hZ2VTdGF0ZTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMveERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9