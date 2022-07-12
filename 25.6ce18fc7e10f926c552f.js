"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[25],{

/***/ 2702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1964);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1962);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1963);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(559);
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

/***/ 2701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetImageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2702);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(621);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class AssetImage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    replaceNoneToBts: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
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

    function getImageWrapper(asset) {
      if (asset === null) return "unknown";
      let symbol = asset.get("symbol");
      return (0,branding__WEBPACK_IMPORTED_MODULE_2__.getImageName)(symbol);
    }

    const imgName = getImageWrapper(asset);
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

/***/ 2733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1963);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2734);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2118);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2085);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(731);
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

/***/ 2736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUuNmNlMThmYzdlMTBmOTI2YzU1MmYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBOztBQXpCQTs7QUEyQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFLQTs7QUEvQ0E7O0FBaURBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTs7QUFQQTs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVRBO0FBWUE7O0FBaEVBOztBQW1FQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQWxCQTtBQXFCQTs7QUE5QkE7O0FBaUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQVRBO0FBWUE7QUFDQTtBQURBOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUlBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFhQTtBQUNBO0FBRkE7QUFLQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7O0FBaExBOztBQWtMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBZEE7QUEyQkE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvbGlicy9Bc3NldFdyYXBwZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9Bc3NldFNlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1NlYXJjaElucHV0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldERpc3BsYXlOYW1lfSBmcm9tIFwiY29tbW9uL3JlYWN0VXRpbHNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJpbW11dGFibGVcIjtcblxuY2xhc3MgRHluYW1pY09iamVjdFJlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZG9zOiBMaXN0KClcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5nZXREeW5hbWljT2JqZWN0ID0gdGhpcy5nZXREeW5hbWljT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0RHluYW1pY09iamVjdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kb3MuZmluZChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGEuZ2V0KFwiaWRcIikgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldER5bmFtaWNPYmplY3Q6IHRoaXMuZ2V0RHluYW1pY09iamVjdFxuICAgICAgICB9KTtcbiAgICB9XG59XG5EeW5hbWljT2JqZWN0UmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKER5bmFtaWNPYmplY3RSZXNvbHZlcik7XG5cbi8qKlxuICogSE9DIHRoYXQgcmVzb2x2ZXMgZWl0aGVyIGEgbnVtYmVyIG9mIGFzc2V0cyBkaXJlY3RseSB3aXRoIENoYWluQXNzZXQsXG4gKiBvciBhIGxpc3Qgb2YgYXNzZXRzIHdpdGggQ2hhaW5Bc3NldHNcbiAqXG4gKiAgT3B0aW9uc1xuICogIC0ncHJvcE5hbWVzJyBhbiBhcnJheSBvZiBwcm9wIG5hbWVzIHRvIGJlIHJlc29sdmVkIGFzIGFzc2V0cy4gKGRlZmF1bHRzIHRvIFwiYXNzZXRcIiBvciBcImFzc2V0c1wiKVxuICogIC0nZGVmYXVsdFByb3BzJyBkZWZhdWx0IHZhbHVlcyB0byB1c2UgZm9yIG9iamVjdHMgKG9wdGlvbmFsKVxuICogIC0nYXNMaXN0JyBkZWZpbmVzIHdoZXRoZXIgdG8gdXNlIENoYWluQXNzZXRzTGlzdCBvciBub3QgKHVzZWZ1bCBmb3IgcmVzb2x2aW5nIGxhcmdlIHF1YW50aXRpZXMgb2YgYXNzZXRzKVxuICogIC0nd2l0aER5bmFtaWMnIGRlZmluZXMgd2hldGhlciB0byBhbHNvIHJlc29sdmUgZHluYW1pYyBvYmplY3RzIG9yIG5vdFxuICovXG5cbmZ1bmN0aW9uIEFzc2V0V3JhcHBlcihDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMucHJvcE5hbWVzID0gb3B0aW9ucy5wcm9wTmFtZXMgfHwgW1xuICAgICAgICAhIW9wdGlvbnMuYXNMaXN0ID8gXCJhc3NldHNcIiA6IFwiYXNzZXRcIlxuICAgIF07XG4gICAgY29uc3QgZmluYWxQcm9wVHlwZXMgPSBvcHRpb25zLnByb3BOYW1lcy5yZWR1Y2UoKHJlcywgdHlwZSkgPT4ge1xuICAgICAgICByZXNbdHlwZV0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgPyBDaGFpblR5cGVzLkNoYWluQXNzZXRzTGlzdFxuICAgICAgICAgICAgOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gT2JqZWN0LmtleXMoZmluYWxQcm9wVHlwZXMpLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiBvcHRpb25zLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICByZXNba2V5XSA9ICEhb3B0aW9ucy5hc0xpc3QgPyBMaXN0KGN1cnJlbnQgfHwgW10pIDogY3VycmVudCB8fCBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdFByb3BzICYmICEhb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCkge1xuICAgICAgICBkZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY2xhc3MgQXNzZXRzUmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0gZmluYWxQcm9wVHlwZXM7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGZpbmFsQXNzZXRzID0ge307XG4gICAgICAgICAgICBsZXQgcGFzc1Ryb3VnaFByb3BzID0ge307XG4gICAgICAgICAgICBsZXQgZG9zID0gTGlzdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9wTmFtZXMuaW5kZXhPZihwcm9wKSAhPT0gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5hc0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFzc2V0c1twcm9wXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHNbcHJvcF0uZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NUcm91Z2hQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB3cmFwcGVkID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgey4uLnBhc3NUcm91Z2hQcm9wcywgLi4uZmluYWxBc3NldHN9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYylcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RHluYW1pY09iamVjdFJlc29sdmVyIGRvcz17ZG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVkfVxuICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNPYmplY3RSZXNvbHZlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gd3JhcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBc3NldHNSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRzUmVzb2x2ZXIpO1xuXG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFzc2V0c1Jlc29sdmVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCByZWY9XCJib3VuZF9jb21wb25lbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXNzZXRzUmVzb2x2ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBgV3JhcHBlcigke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL0JvdHMvbGlicy9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7Z2V0SW1hZ2VOYW1lfSBmcm9tIFwiYnJhbmRpbmdcIjtcblxuY2xhc3MgQXNzZXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IHRydWUsXG4gICAgICAgIG1heFdpZHRoOiAyMFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGltZ0Vycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQgIT09IG5wLmFzc2V0IHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFdpZHRoICE9PSBucC5tYXhXaWR0aCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy53aGl0ZUxpc3QgIT09IG5wLndoaXRlTGlzdCB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWdFcnJvciAhPT0gbnMuaW1nRXJyb3JcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZU5vbmVUb0J0cylcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5zcmMgPVxuICAgICAgICAgICAgICAgICAgICBcImFzc2V0LXN5bWJvbHMvdW5rbm93bi5wbmdcIjtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBmdW5jdGlvbiBnZXRJbWFnZVdyYXBwZXIoYXNzZXQpIHtcbiAgICAgICAgICAgIGlmIChhc3NldCA9PT0gbnVsbCkgcmV0dXJuIFwidW5rbm93blwiO1xuICAgICAgICAgICAgbGV0IHN5bWJvbCA9IGFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRJbWFnZU5hbWUoc3ltYm9sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGltZ05hbWUgPSBnZXRJbWFnZVdyYXBwZXIoYXNzZXQpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRXJyb3IuYmluZCh0aGlzLCBpbWdOYW1lKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5wcm9wcy5tYXhXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItM3B4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRJbWFnZSA9IEFzc2V0V3JhcHBlcihBc3NldEltYWdlKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRJbWFnZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxBc3NldEltYWdlIHsuLi50aGlzLnByb3BzfSBhc3NldD17dGhpcy5wcm9wcy5uYW1lfS8+O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhaW5WYWxpZGF0aW9ufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuL0Zsb2F0aW5nRHJvcGRvd25cIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgQXNzZXREcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGFzc2V0IGlkXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0cy5sZW5ndGggPT09IDAgfHwgIXRoaXMucHJvcHMudmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZsb2F0aW5nRHJvcGRvd25cbiAgICAgICAgICAgICAgICBlbnRyaWVzPXt0aGlzLnByb3BzLmFzc2V0c1xuICAgICAgICAgICAgICAgICAgICAubWFwKGEgPT4gYSAmJiBhLmdldChcInN5bWJvbFwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSl9XG4gICAgICAgICAgICAgICAgdmFsdWVzPXt0aGlzLnByb3BzLmFzc2V0cy5yZWR1Y2UoKG1hcCwgYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSAmJiBhLmdldChcInN5bWJvbFwiKSkgbWFwW2EuZ2V0KFwic3ltYm9sXCIpXSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgICAgICAgICAgfSwge30pfVxuICAgICAgICAgICAgICAgIHNpbmdsZUVudHJ5PXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldHNbMF0gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5hc3NldHNbMF0uZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYW1vdW50PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e1wiXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXREcm9wZG93biA9IEFzc2V0V3JhcHBlcihBc3NldERyb3Bkb3duLCB7YXNMaXN0OiB0cnVlfSk7XG5cbi8qKlxuICogQGJyaWVmIEFsbG93cyB0aGUgdXNlciB0byBlbnRlciBhbiBhY2NvdW50IGJ5IG5hbWUgb3IgI0lEXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZGVzaWduZWQgdG8gYmUgc3RhdGVsZXNzIGFzIHBvc3NpYmxlLiAgSXQncyBwcmltYXJ5IHJlc3BvbnNiaWxpdHkgaXMgdG9cbiAqIG1hbmFnZSB0aGUgbGF5b3V0IG9mIGRhdGEgYW5kIHRvIGZpbHRlciB0aGUgdXNlciBpbnB1dC5cbiAqXG4gKi9cblxuY2xhc3MgQXNzZXRTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGEgdHJhbnNsYXRpb24ga2V5IGZvciB0aGUgbGFiZWxcbiAgICAgICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHRoZSBlcnJvciBtZXNzYWdlIG92ZXJyaWRlXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgcGxhY2Vob2xkZXIgdGV4dCB0byBiZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBpcyBubyB1c2VyX2lucHV0XG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIGFueSB0aW1lIHVzZXIgaW5wdXQgY2hhbmdlc1xuICAgICAgICBvbkZvdW5kOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gZXhpc3RpbmcgYWNjb3VudCBpcyBzZWxlY3RlZFxuICAgICAgICBhc3NldElucHV0OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgYWNjb3VudCBzZWxlY3RvciwgdGhlIHN0cmluZyB0aGUgdXNlciBlbnRlcnNcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCwgLy8gYWNjb3VudCBvYmplY3QgcmV0cmlldmVkIHZpYSBCaW5kVG9DaGFpblN0YXRlIGRlY29yYXRvciAobm90IGlucHV0KVxuICAgICAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlciwgLy8gdGFiaW5kZXggcHJvcGVydHkgdG8gYmUgcGFzc2VkIHRvIGlucHV0IHRhZ1xuICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCAvLyB1c2UgaXQgaWYgeW91IG5lZWQgdG8gZGlzYWJsZSBhY3Rpb24gYnV0dG9uXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBjYW4gYmUgdXNlZCBpbiBwYXJlbnQgY29tcG9uZW50OiB0aGlzLnJlZnMuYXNzZXRfc2VsZWN0b3IuZ2V0QXNzZXQoKVxuICAgIGdldEFzc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hc3NldDtcbiAgICB9XG5cbiAgICBnZXRFcnJvcihpbnB1dCA9IHRoaXMucHJvcHMuYXNzZXRJbnB1dCkge1xuICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLnByb3BzLmVycm9yO1xuICAgICAgICBpZiAoIWVycm9yICYmIGlucHV0ICYmICF0aGlzLmdldE5hbWVUeXBlKGlucHV0KSlcbiAgICAgICAgICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYXNzZXQuaW52YWxpZFwiLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogaW5wdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0TmFtZVR5cGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vIGlmKHZhbHVlWzBdID09PSBcIiNcIiAmJiB1dGlscy5pc19vYmplY3RfaWQoXCIxLjIuXCIgKyB2YWx1ZS5zdWJzdHJpbmcoMSkpKSByZXR1cm4gXCJpZFwiO1xuICAgICAgICBpZiAoIUNoYWluVmFsaWRhdGlvbi5pc192YWxpZF9zeW1ib2xfZXJyb3IodmFsdWUsIHRydWUpKVxuICAgICAgICAgICAgcmV0dXJuIFwic3ltYm9sXCI7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgLnN1YnN0cigwLCAxNilcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpOyAvLy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB2YWx1ZSAhPT0gdGhpcy5wcm9wcy5hc3NldElucHV0KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5vbkZvdW5kKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMub25BY3Rpb24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uRm91bmQgJiYgdGhpcy5wcm9wcy5hc3NldClcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb3VuZCh0aGlzLnByb3BzLmFzc2V0KTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvdW5kICYmIG5ld1Byb3BzLmFzc2V0ICE9PSB0aGlzLnByb3BzLmFzc2V0KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvdW5kKG5ld1Byb3BzLmFzc2V0KTtcbiAgICB9XG5cbiAgICBvbkZvdW5kKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm91bmQgJiZcbiAgICAgICAgICAgICF0aGlzLmdldEVycm9yKCkgJiZcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmRpc2FibGVBY3Rpb25CdXR0b25cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCkgdGhpcy5wcm9wcy5vbkZvdW5kKHRoaXMucHJvcHMuYXNzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Bc3NldFNlbGVjdChzZWxlY3RlZF9hc3NldCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRfYXNzZXQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb3VuZChzZWxlY3RlZF9hc3NldCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNlbGVjdGVkX2Fzc2V0LmdldChcInN5bWJvbFwiKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFjdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGlvbiAmJlxuICAgICAgICAgICAgIXRoaXMuZ2V0RXJyb3IoKSAmJlxuICAgICAgICAgICAgIXRoaXMucHJvcHMuZGlzYWJsZUFjdGlvbkJ1dHRvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0KSB0aGlzLnByb3BzLm9uQWN0aW9uKHRoaXMucHJvcHMuYXNzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Rpc2FibGVkLCBub0xhYmVsfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBlcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgbGV0IGxvb2t1cF9kaXNwbGF5O1xuICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCkge1xuICAgICAgICAgICAgICAgIGxvb2t1cF9kaXNwbGF5ID0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFlcnJvciAmJiB0aGlzLnByb3BzLmFzc2V0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmFzc2V0Lm5vdF9mb3VuZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuYXNzZXRJbnB1dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjdGlvbl9jbGFzcyA9IGNsYXNzbmFtZXMoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuYXNzZXQgfHwgZXJyb3IgfHwgdGhpcy5wcm9wcy5kaXNhYmxlQWN0aW9uQnV0dG9uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LXNlbGVjdG9yXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvciB8fCBub0xhYmVsID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IDxzcGFuPntsb29rdXBfZGlzcGxheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmlucHV0U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFzc2V0SW5wdXQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXRzLnN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwidXNlcl9pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFzc2V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvcHMucmVmQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17SW1tdXRhYmxlLkxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFzc2V0U2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vbkFjdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3Rpb25fY2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWN0aW9uLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnByb3BzLmFjdGlvbl9sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWFyZWFcIiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3dvcmRCcmVhazogXCJicmVhay1hbGxcIn19PntlcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShBc3NldFNlbGVjdG9yKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge0lucHV0LCBJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaElucHV0KHtcclxuICAgIG9uQ2hhbmdlLFxyXG4gICAgdmFsdWUsXHJcbiAgICBwbGFjZWhvbGRlcixcclxuICAgIG1heExlbmd0aCxcclxuICAgIHN0eWxlLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbmFtZSxcclxuICAgIGF1dG9Db21wbGV0ZSxcclxuICAgIG9uQ2xlYXIsXHJcbiAgICB0eXBlLFxyXG4gICAgLi4ub3RoZXJcclxufSkge1xyXG4gICAgaWYgKG9uQ2xlYXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gaWYgb25DbGVhcj1udWxsLCB0aGVuIGl0IHdvbid0IGJlIHJlbmRlcmVkXHJcbiAgICAgICAgb25DbGVhciA9ICgpID0+IHtcclxuICAgICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7dmFsdWU6IFwiXCJ9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICByZWY9e3NlYXJjaElucHV0fVxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9e2F1dG9Db21wbGV0ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZSArIFwiIHNlYXJjaC1pbnB1dFwifVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxyXG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgYWRkb25BZnRlcj17PEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxyXG4gICAgICAgICAgICBzdWZmaXg9e1xyXG4gICAgICAgICAgICAgICAgb25DbGVhciA/IChcclxuICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHdheXMgaW5jbHVkZSBET00gdGhlIGljb24sIG90aGVyd2lzZSB1c2VyIGxvb3NlcyBmb2N1cyB3aGVuIGl0IGFwcGVhcnMgYW5kIGlucHV0IHJlc2l6ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt2YWx1ZSA/IFwiY3Vyc29yLXBvaW50ZXJcIiA6IFwiaGlkZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgey4uLm90aGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5TZWFyY2hJbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBjYW4gYmUgdW5kZWZpbmVkIHdoZW4gbm8gdXNlciBpbnB1dCBpcyBwcmVzZW50XHJcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhdXRvQ29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBtYXhMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBvbkNsZWFyOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5cclxuU2VhcmNoSW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgcGxhY2Vob2xkZXI6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLmZpbHRlclwiKSxcclxuICAgIHN0eWxlOiB7d2lkdGg6IFwiMjAwcHhcIn0sXHJcbiAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICB0eXBlOiBcInRleHRcIixcclxuICAgIG5hbWU6IFwiZm9jdXNcIixcclxuICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcclxuICAgIG1heExlbmd0aDogMTYsXHJcbiAgICBvbkNsZWFyOiB1bmRlZmluZWRcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9