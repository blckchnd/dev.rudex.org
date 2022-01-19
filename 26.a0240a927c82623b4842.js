"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[26],{

/***/ 2663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1928);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1926);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1927);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);






class DynamicObjectResolver extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    dos: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObjectsList
  };
  static defaultProps = {
    dos: (0,immutable__WEBPACK_IMPORTED_MODULE_4__.List)()
  };

  constructor() {
    super();
    this.getDynamicObject = this.getDynamicObject.bind(this);
  }

  getDynamicObject(id) {
    return this.props.dos.find(a => {
      return a && a.get("id") === id;
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children), { ...this.props,
      getDynamicObject: this.getDynamicObject
    });
  }

}

DynamicObjectResolver = (0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(DynamicObjectResolver);
/**
 * HOC that resolves either a number of assets directly with ChainAsset,
 * or a list of assets with ChainAssets
 *
 *  Options
 *  -'propNames' an array of prop names to be resolved as assets. (defaults to "asset" or "assets")
 *  -'defaultProps' default values to use for objects (optional)
 *  -'asList' defines whether to use ChainAssetsList or not (useful for resolving large quantities of assets)
 *  -'withDynamic' defines whether to also resolve dynamic objects or not
 */

function AssetWrapper(Component, options = {}) {
  options.propNames = options.propNames || [!!options.asList ? "assets" : "asset"];
  const finalPropTypes = options.propNames.reduce((res, type) => {
    res[type] = options.asList ? components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAssetsList : components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired;
    return res;
  }, {});
  let defaultProps = Object.keys(finalPropTypes).reduce((res, key) => {
    let current = options.defaultProps && options.defaultProps[key];
    res[key] = !!options.asList ? (0,immutable__WEBPACK_IMPORTED_MODULE_4__.List)(current || []) : current || "1.3.0";
    return res;
  }, {});

  if (options.defaultProps && !!options.defaultProps.tempComponent) {
    defaultProps.tempComponent = options.defaultProps.tempComponent;
  }

  class AssetsResolver extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static propTypes = finalPropTypes;
    static defaultProps = defaultProps;

    render() {
      let finalAssets = {};
      let passTroughProps = {};
      let dos = (0,immutable__WEBPACK_IMPORTED_MODULE_4__.List)();
      Object.keys(this.props).forEach(prop => {
        if (this.props[prop] && options.propNames.indexOf(prop) !== -1) {
          if (options.withDynamic) {
            if (!options.asList) {
              dos = dos.push(this.props[prop].get("dynamic_asset_data_id"));
            } else {
              this.props[prop].forEach(a => {
                if (!!a) dos = dos.push(a.get("dynamic_asset_data_id"));
              });
            }
          }

          finalAssets[prop] = options.asList ? this.props[prop].filter(a => !!a) : this.props[prop];
        } else {
          passTroughProps[prop] = this.props[prop];
        }
      });
      let wrapped = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children), { ...passTroughProps,
        ...finalAssets
      });
      if (options.withDynamic) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicObjectResolver, {
        dos: dos
      }, wrapped);else return wrapped;
    }

  }

  AssetsResolver = (0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(AssetsResolver);

  class Wrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetsResolver, this.props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {
        ref: "bound_component"
      }));
    }

  }

  Wrapper.displayName = `Wrapper(${(0,common_reactUtils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(Component)})`;
  return Wrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetWrapper);

/***/ }),

/***/ 2662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetImageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2663);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class AssetImage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    replaceNoneToBts: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
  };
  static defaultProps = {
    replaceNoneToBts: true,
    maxWidth: 20
  };

  constructor(props) {
    super(props);
    this.state = {
      imgError: false
    };
  }

  shouldComponentUpdate(np, ns) {
    return this.props.asset !== np.asset || this.props.maxWidth !== np.maxWidth || this.props.whiteList !== np.whiteList || this.state.imgError !== ns.imgError;
  }

  _onError(imgName) {
    if (!this.state.imgError) {
      if (this.props.replaceNoneToBts) this.refs[imgName.toLowerCase()].src = "asset-symbols/unknown.png";else this.refs[imgName.toLowerCase()].remove();
      this.setState({
        imgError: true
      });
    }
  }

  render() {
    let {
      asset
    } = this.props;

    function getImageName(asset) {
      if (asset === null) return null;
      let symbol = asset.get("symbol");
      return symbol;
    }

    const imgName = getImageName(asset);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      ref: imgName.toLowerCase(),
      className: "column-hide-small",
      onError: this._onError.bind(this, imgName),
      style: {
        maxWidth: this.props.maxWidth,
        marginRight: 5,
        marginTop: "-3px"
      },
      src: `${""}asset-symbols/${imgName.toLowerCase()}.png`
    });
  }

}

AssetImage = (0,_Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetImage);
class AssetImageWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetImage, _extends({}, this.props, {
      asset: this.props.name
    }));
  }

}

/***/ }),

/***/ 2698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2699);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2082);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2049);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);













class AssetDropdown extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    value: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
    // asset id
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func)
  };

  render() {
    if (this.props.assets.length === 0 || !this.props.value) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
      entries: this.props.assets.map(a => a && a.get("symbol")).filter(a => !!a),
      values: this.props.assets.reduce((map, a) => {
        if (a && a.get("symbol")) map[a.get("symbol")] = a;
        return map;
      }, {}),
      singleEntry: this.props.assets[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
        asset: this.props.assets[0].get("id"),
        amount: 0,
        hide_amount: true
      }) : null,
      value: "",
      onChange: this.props.onChange
    });
  }

}

AssetDropdown = (0,_AssetWrapper__WEBPACK_IMPORTED_MODULE_10__["default"])(AssetDropdown, {
  asList: true
});
/**
 * @brief Allows the user to enter an account by name or #ID
 *
 * This component is designed to be stateless as possible.  It's primary responsbility is to
 * manage the layout of data and to filter the user input.
 *
 */

class AssetSelector extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
    // a translation key for the label
    error: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
    // the error message override
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
    // the placeholder text to be displayed when there is no user_input
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
    // a method to be called any time user input changes
    onFound: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
    // a method to be called when existing account is selected
    assetInput: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
    // the current value of the account selector, the string the user enters
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    // account object retrieved via BindToChainState decorator (not input)
    tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number),
    // tabindex property to be passed to input tag
    disableActionButton: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool) // use it if you need to disable action button

  };
  static defaultProps = {
    disabled: false
  }; // can be used in parent component: this.refs.asset_selector.getAsset()

  getAsset() {
    return this.props.asset;
  }

  getError(input = this.props.assetInput) {
    let error = this.props.error;
    if (!error && input && !this.getNameType(input)) error = counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("explorer.asset.invalid", {
      name: input
    });
    return error;
  }

  getNameType(value) {
    if (!value) return null; // if(value[0] === "#" && utils.is_object_id("1.2." + value.substring(1))) return "id";

    if (!bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainValidation.is_valid_symbol_error(value, true)) return "symbol";
    return null;
  }

  onInputChanged(event) {
    let value = event.target.value.trim().substr(0, 16).toUpperCase(); //.toLowerCase();

    if (this.props.onChange && value !== this.props.assetInput) this.props.onChange(value);
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      this.onFound(event);
      this.onAction(event);
    }
  }

  componentDidMount() {
    if (this.props.onFound && this.props.asset) this.props.onFound(this.props.asset);
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (this.props.onFound && newProps.asset !== this.props.asset) this.props.onFound(newProps.asset);
  }

  onFound(e) {
    e.preventDefault();

    if (this.props.onFound && !this.getError() && !this.props.disableActionButton) {
      if (this.props.asset) this.props.onFound(this.props.asset);
    }
  }

  onAssetSelect(selected_asset) {
    if (selected_asset) {
      this.props.onFound(selected_asset);
      this.props.onChange(selected_asset.get("symbol"));
    }
  }

  onAction(e) {
    e.preventDefault();

    if (this.props.onAction && !this.getError() && !this.props.disableActionButton) {
      if (this.props.asset) this.props.onAction(this.props.asset);
    }
  }

  render() {
    let {
      disabled,
      noLabel
    } = this.props;
    let error = this.getError();
    let lookup_display;

    if (!disabled) {
      if (this.props.asset) {
        lookup_display = this.props.asset.get("symbol");
      } else if (!error && this.props.assetInput) {
        error = counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("explorer.asset.not_found", {
          name: this.props.assetInput
        });
      }
    }

    let action_class = classnames__WEBPACK_IMPORTED_MODULE_9___default()("button", {
      disabled: !this.props.asset || error || this.props.disableActionButton
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "asset-selector",
      style: this.props.style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-area"
    }, error || noLabel ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "right-label"
    }, "\xA0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, lookup_display)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "label",
      content: this.props.label
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "input-area"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      style: this.props.inputStyle,
      disabled: this.props.disabled,
      type: "text",
      value: this.props.assetInput || "",
      placeholder: this.props.placeholder || counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("explorer.assets.symbol"),
      ref: "user_input",
      onChange: this.onInputChanged.bind(this),
      onKeyDown: this.onKeyDown.bind(this),
      tabIndex: this.props.tabIndex
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-label select floating-dropdown"
    }, this.props.asset ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetDropdown, {
      ref: this.props.refCallback,
      value: this.props.asset.get("symbol"),
      assets: immutable__WEBPACK_IMPORTED_MODULE_8___default().List(this.props.assets),
      onChange: this.onAssetSelect.bind(this)
    }) : null), this.props.children, this.props.onAction ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: action_class,
      onClick: this.onAction.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: this.props.action_label
    })) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "error-area",
      style: {
        paddingBottom: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        wordBreak: "break-all"
      }
    }, error))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetSelector));

/***/ }),

/***/ 2701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const searchInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
function SearchInput({
  onChange,
  value,
  placeholder,
  maxLength,
  style,
  className,
  name,
  autoComplete,
  onClear,
  type,
  ...other
}) {
  if (onClear == undefined) {
    // if onClear=null, then it won't be rendered
    onClear = () => {
      onChange({
        target: {
          value: ""
        }
      });
      searchInput.current.focus();
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, _extends({
    ref: searchInput,
    autoComplete: autoComplete,
    style: style,
    type: type,
    className: className + " search-input",
    placeholder: placeholder,
    maxLength: maxLength,
    name: name,
    value: value,
    onChange: onChange,
    addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      type: "search"
    }),
    suffix: onClear ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      onClick: onClear,
      type: "close" // always include DOM the icon, otherwise user looses focus when it appears and input resizes
      ,
      className: value ? "cursor-pointer" : "hide"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null)
  }, other));
}
SearchInput.propTypes = {
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  // can be undefined when no user input is present
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  onClear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
SearchInput.defaultProps = {
  placeholder: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("exchange.filter"),
  style: {
    width: "200px"
  },
  className: "",
  type: "text",
  name: "focus",
  autoComplete: "off",
  maxLength: 16,
  onClear: undefined
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYuYTAyNDBhOTI3YzgyNjIzYjQ4NDIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBOztBQXpCQTs7QUEyQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFLQTs7QUEvQ0E7O0FBaURBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTs7QUFQQTs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVRBO0FBWUE7O0FBaEVBOztBQW1FQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQWxCQTtBQXFCQTs7QUE5QkE7O0FBaUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQVRBO0FBWUE7QUFDQTtBQURBOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUlBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFhQTtBQUNBO0FBRkE7QUFLQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7O0FBaExBOztBQWtMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBZEE7QUEyQkE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvbGlicy9Bc3NldFdyYXBwZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9Bc3NldFNlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1NlYXJjaElucHV0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldERpc3BsYXlOYW1lfSBmcm9tIFwiY29tbW9uL3JlYWN0VXRpbHNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJpbW11dGFibGVcIjtcblxuY2xhc3MgRHluYW1pY09iamVjdFJlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZG9zOiBMaXN0KClcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5nZXREeW5hbWljT2JqZWN0ID0gdGhpcy5nZXREeW5hbWljT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0RHluYW1pY09iamVjdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kb3MuZmluZChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGEuZ2V0KFwiaWRcIikgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldER5bmFtaWNPYmplY3Q6IHRoaXMuZ2V0RHluYW1pY09iamVjdFxuICAgICAgICB9KTtcbiAgICB9XG59XG5EeW5hbWljT2JqZWN0UmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKER5bmFtaWNPYmplY3RSZXNvbHZlcik7XG5cbi8qKlxuICogSE9DIHRoYXQgcmVzb2x2ZXMgZWl0aGVyIGEgbnVtYmVyIG9mIGFzc2V0cyBkaXJlY3RseSB3aXRoIENoYWluQXNzZXQsXG4gKiBvciBhIGxpc3Qgb2YgYXNzZXRzIHdpdGggQ2hhaW5Bc3NldHNcbiAqXG4gKiAgT3B0aW9uc1xuICogIC0ncHJvcE5hbWVzJyBhbiBhcnJheSBvZiBwcm9wIG5hbWVzIHRvIGJlIHJlc29sdmVkIGFzIGFzc2V0cy4gKGRlZmF1bHRzIHRvIFwiYXNzZXRcIiBvciBcImFzc2V0c1wiKVxuICogIC0nZGVmYXVsdFByb3BzJyBkZWZhdWx0IHZhbHVlcyB0byB1c2UgZm9yIG9iamVjdHMgKG9wdGlvbmFsKVxuICogIC0nYXNMaXN0JyBkZWZpbmVzIHdoZXRoZXIgdG8gdXNlIENoYWluQXNzZXRzTGlzdCBvciBub3QgKHVzZWZ1bCBmb3IgcmVzb2x2aW5nIGxhcmdlIHF1YW50aXRpZXMgb2YgYXNzZXRzKVxuICogIC0nd2l0aER5bmFtaWMnIGRlZmluZXMgd2hldGhlciB0byBhbHNvIHJlc29sdmUgZHluYW1pYyBvYmplY3RzIG9yIG5vdFxuICovXG5cbmZ1bmN0aW9uIEFzc2V0V3JhcHBlcihDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMucHJvcE5hbWVzID0gb3B0aW9ucy5wcm9wTmFtZXMgfHwgW1xuICAgICAgICAhIW9wdGlvbnMuYXNMaXN0ID8gXCJhc3NldHNcIiA6IFwiYXNzZXRcIlxuICAgIF07XG4gICAgY29uc3QgZmluYWxQcm9wVHlwZXMgPSBvcHRpb25zLnByb3BOYW1lcy5yZWR1Y2UoKHJlcywgdHlwZSkgPT4ge1xuICAgICAgICByZXNbdHlwZV0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgPyBDaGFpblR5cGVzLkNoYWluQXNzZXRzTGlzdFxuICAgICAgICAgICAgOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gT2JqZWN0LmtleXMoZmluYWxQcm9wVHlwZXMpLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiBvcHRpb25zLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICByZXNba2V5XSA9ICEhb3B0aW9ucy5hc0xpc3QgPyBMaXN0KGN1cnJlbnQgfHwgW10pIDogY3VycmVudCB8fCBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdFByb3BzICYmICEhb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCkge1xuICAgICAgICBkZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY2xhc3MgQXNzZXRzUmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0gZmluYWxQcm9wVHlwZXM7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGZpbmFsQXNzZXRzID0ge307XG4gICAgICAgICAgICBsZXQgcGFzc1Ryb3VnaFByb3BzID0ge307XG4gICAgICAgICAgICBsZXQgZG9zID0gTGlzdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9wTmFtZXMuaW5kZXhPZihwcm9wKSAhPT0gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5hc0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFzc2V0c1twcm9wXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHNbcHJvcF0uZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NUcm91Z2hQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB3cmFwcGVkID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgey4uLnBhc3NUcm91Z2hQcm9wcywgLi4uZmluYWxBc3NldHN9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYylcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RHluYW1pY09iamVjdFJlc29sdmVyIGRvcz17ZG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVkfVxuICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNPYmplY3RSZXNvbHZlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gd3JhcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBc3NldHNSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRzUmVzb2x2ZXIpO1xuXG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFzc2V0c1Jlc29sdmVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCByZWY9XCJib3VuZF9jb21wb25lbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXNzZXRzUmVzb2x2ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBgV3JhcHBlcigke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL0JvdHMvbGlicy9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgQXNzZXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IHRydWUsXG4gICAgICAgIG1heFdpZHRoOiAyMFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGltZ0Vycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQgIT09IG5wLmFzc2V0IHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFdpZHRoICE9PSBucC5tYXhXaWR0aCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy53aGl0ZUxpc3QgIT09IG5wLndoaXRlTGlzdCB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWdFcnJvciAhPT0gbnMuaW1nRXJyb3JcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZU5vbmVUb0J0cylcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5zcmMgPVxuICAgICAgICAgICAgICAgICAgICBcImFzc2V0LXN5bWJvbHMvdW5rbm93bi5wbmdcIjtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBmdW5jdGlvbiBnZXRJbWFnZU5hbWUoYXNzZXQpIHtcbiAgICAgICAgICAgIGlmIChhc3NldCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGltZ05hbWUgPSBnZXRJbWFnZU5hbWUoYXNzZXQpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRXJyb3IuYmluZCh0aGlzLCBpbWdOYW1lKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5wcm9wcy5tYXhXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItM3B4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRJbWFnZSA9IEFzc2V0V3JhcHBlcihBc3NldEltYWdlKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRJbWFnZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxBc3NldEltYWdlIHsuLi50aGlzLnByb3BzfSBhc3NldD17dGhpcy5wcm9wcy5uYW1lfSAvPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluVmFsaWRhdGlvbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgRmxvYXRpbmdEcm9wZG93biBmcm9tIFwiLi9GbG9hdGluZ0Ryb3Bkb3duXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4vQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIEFzc2V0RHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhc3NldCBpZFxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldHMubGVuZ3RoID09PSAwIHx8ICF0aGlzLnByb3BzLnZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGbG9hdGluZ0Ryb3Bkb3duXG4gICAgICAgICAgICAgICAgZW50cmllcz17dGhpcy5wcm9wcy5hc3NldHNcbiAgICAgICAgICAgICAgICAgICAgLm1hcChhID0+IGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpfVxuICAgICAgICAgICAgICAgIHZhbHVlcz17dGhpcy5wcm9wcy5hc3NldHMucmVkdWNlKChtYXAsIGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpIG1hcFthLmdldChcInN5bWJvbFwiKV0gPSBhO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgIH0sIHt9KX1cbiAgICAgICAgICAgICAgICBzaW5nbGVFbnRyeT17XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRzWzBdID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXRzWzBdLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Ftb3VudD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtcIlwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0RHJvcGRvd24gPSBBc3NldFdyYXBwZXIoQXNzZXREcm9wZG93biwge2FzTGlzdDogdHJ1ZX0pO1xuXG4vKipcbiAqIEBicmllZiBBbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXIgYW4gYWNjb3VudCBieSBuYW1lIG9yICNJRFxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGRlc2lnbmVkIHRvIGJlIHN0YXRlbGVzcyBhcyBwb3NzaWJsZS4gIEl0J3MgcHJpbWFyeSByZXNwb25zYmlsaXR5IGlzIHRvXG4gKiBtYW5hZ2UgdGhlIGxheW91dCBvZiBkYXRhIGFuZCB0byBmaWx0ZXIgdGhlIHVzZXIgaW5wdXQuXG4gKlxuICovXG5cbmNsYXNzIEFzc2V0U2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhIHRyYW5zbGF0aW9uIGtleSBmb3IgdGhlIGxhYmVsXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgZXJyb3IgbWVzc2FnZSBvdmVycmlkZVxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIHBsYWNlaG9sZGVyIHRleHQgdG8gYmUgZGlzcGxheWVkIHdoZW4gdGhlcmUgaXMgbm8gdXNlcl9pbnB1dFxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIHRvIGJlIGNhbGxlZCBhbnkgdGltZSB1c2VyIGlucHV0IGNoYW5nZXNcbiAgICAgICAgb25Gb3VuZDogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGV4aXN0aW5nIGFjY291bnQgaXMgc2VsZWN0ZWRcbiAgICAgICAgYXNzZXRJbnB1dDogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGFjY291bnQgc2VsZWN0b3IsIHRoZSBzdHJpbmcgdGhlIHVzZXIgZW50ZXJzXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQsIC8vIGFjY291bnQgb2JqZWN0IHJldHJpZXZlZCB2aWEgQmluZFRvQ2hhaW5TdGF0ZSBkZWNvcmF0b3IgKG5vdCBpbnB1dClcbiAgICAgICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsIC8vIHRhYmluZGV4IHByb3BlcnR5IHRvIGJlIHBhc3NlZCB0byBpbnB1dCB0YWdcbiAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbjogUHJvcFR5cGVzLmJvb2wgLy8gdXNlIGl0IGlmIHlvdSBuZWVkIHRvIGRpc2FibGUgYWN0aW9uIGJ1dHRvblxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gY2FuIGJlIHVzZWQgaW4gcGFyZW50IGNvbXBvbmVudDogdGhpcy5yZWZzLmFzc2V0X3NlbGVjdG9yLmdldEFzc2V0KClcbiAgICBnZXRBc3NldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYXNzZXQ7XG4gICAgfVxuXG4gICAgZ2V0RXJyb3IoaW5wdXQgPSB0aGlzLnByb3BzLmFzc2V0SW5wdXQpIHtcbiAgICAgICAgbGV0IGVycm9yID0gdGhpcy5wcm9wcy5lcnJvcjtcbiAgICAgICAgaWYgKCFlcnJvciAmJiBpbnB1dCAmJiAhdGhpcy5nZXROYW1lVHlwZShpbnB1dCkpXG4gICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmFzc2V0LmludmFsaWRcIiwge1xuICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGdldE5hbWVUeXBlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICAvLyBpZih2YWx1ZVswXSA9PT0gXCIjXCIgJiYgdXRpbHMuaXNfb2JqZWN0X2lkKFwiMS4yLlwiICsgdmFsdWUuc3Vic3RyaW5nKDEpKSkgcmV0dXJuIFwiaWRcIjtcbiAgICAgICAgaWYgKCFDaGFpblZhbGlkYXRpb24uaXNfdmFsaWRfc3ltYm9sX2Vycm9yKHZhbHVlLCB0cnVlKSlcbiAgICAgICAgICAgIHJldHVybiBcInN5bWJvbFwiO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlZChldmVudCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgIC5zdWJzdHIoMCwgMTYpXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKTsgLy8udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdmFsdWUgIT09IHRoaXMucHJvcHMuYXNzZXRJbnB1dClcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMub25Gb3VuZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aW9uKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvdW5kICYmIHRoaXMucHJvcHMuYXNzZXQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm91bmQodGhpcy5wcm9wcy5hc3NldCk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Gb3VuZCAmJiBuZXdQcm9wcy5hc3NldCAhPT0gdGhpcy5wcm9wcy5hc3NldClcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb3VuZChuZXdQcm9wcy5hc3NldCk7XG4gICAgfVxuXG4gICAgb25Gb3VuZChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvdW5kICYmXG4gICAgICAgICAgICAhdGhpcy5nZXRFcnJvcigpICYmXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5kaXNhYmxlQWN0aW9uQnV0dG9uXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXQpIHRoaXMucHJvcHMub25Gb3VuZCh0aGlzLnByb3BzLmFzc2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQXNzZXRTZWxlY3Qoc2VsZWN0ZWRfYXNzZXQpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkX2Fzc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm91bmQoc2VsZWN0ZWRfYXNzZXQpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzZWxlY3RlZF9hc3NldC5nZXQoXCJzeW1ib2xcIikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24gJiZcbiAgICAgICAgICAgICF0aGlzLmdldEVycm9yKCkgJiZcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmRpc2FibGVBY3Rpb25CdXR0b25cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCkgdGhpcy5wcm9wcy5vbkFjdGlvbih0aGlzLnByb3BzLmFzc2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtkaXNhYmxlZCwgbm9MYWJlbH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgIGxldCBsb29rdXBfZGlzcGxheTtcbiAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXQpIHtcbiAgICAgICAgICAgICAgICBsb29rdXBfZGlzcGxheSA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghZXJyb3IgJiYgdGhpcy5wcm9wcy5hc3NldElucHV0KSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleHBsb3Jlci5hc3NldC5ub3RfZm91bmRcIiwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLmFzc2V0SW5wdXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY3Rpb25fY2xhc3MgPSBjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmFzc2V0IHx8IGVycm9yIHx8IHRoaXMucHJvcHMuZGlzYWJsZUFjdGlvbkJ1dHRvblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1zZWxlY3RvclwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgfHwgbm9MYWJlbCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJpZ2h0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyA8c3Bhbj57bG9va3VwX2Rpc3BsYXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5hc3NldElucHV0IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0cy5zeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInVzZXJfaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hc3NldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb3BzLnJlZkNhbGxiYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e0ltbXV0YWJsZS5MaXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Bc3NldFNlbGVjdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25BY3Rpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aW9uX2NsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjdGlvbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5hY3Rpb25fbGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1hcmVhXCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCJ9fT57ZXJyb3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRTZWxlY3Rvcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtJbnB1dCwgSWNvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5jb25zdCBzZWFyY2hJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hJbnB1dCh7XHJcbiAgICBvbkNoYW5nZSxcclxuICAgIHZhbHVlLFxyXG4gICAgcGxhY2Vob2xkZXIsXHJcbiAgICBtYXhMZW5ndGgsXHJcbiAgICBzdHlsZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIG5hbWUsXHJcbiAgICBhdXRvQ29tcGxldGUsXHJcbiAgICBvbkNsZWFyLFxyXG4gICAgdHlwZSxcclxuICAgIC4uLm90aGVyXHJcbn0pIHtcclxuICAgIGlmIChvbkNsZWFyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vIGlmIG9uQ2xlYXI9bnVsbCwgdGhlbiBpdCB3b24ndCBiZSByZW5kZXJlZFxyXG4gICAgICAgIG9uQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDoge3ZhbHVlOiBcIlwifVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcmVmPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUgKyBcIiBzZWFyY2gtaW5wdXRcIn1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cclxuICAgICAgICAgICAgc3VmZml4PXtcclxuICAgICAgICAgICAgICAgIG9uQ2xlYXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWx3YXlzIGluY2x1ZGUgRE9NIHRoZSBpY29uLCBvdGhlcndpc2UgdXNlciBsb29zZXMgZm9jdXMgd2hlbiBpdCBhcHBlYXJzIGFuZCBpbnB1dCByZXNpemVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dmFsdWUgPyBcImN1cnNvci1wb2ludGVyXCIgOiBcImhpZGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG5cclxuU2VhcmNoSW5wdXQucHJvcFR5cGVzID0ge1xyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZywgLy8gY2FuIGJlIHVuZGVmaW5lZCB3aGVuIG5vIHVzZXIgaW5wdXQgaXMgcHJlc2VudFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcblNlYXJjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHBsYWNlaG9sZGVyOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5maWx0ZXJcIiksXHJcbiAgICBzdHlsZToge3dpZHRoOiBcIjIwMHB4XCJ9LFxyXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBuYW1lOiBcImZvY3VzXCIsXHJcbiAgICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXHJcbiAgICBtYXhMZW5ndGg6IDE2LFxyXG4gICAgb25DbGVhcjogdW5kZWZpbmVkXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==