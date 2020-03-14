(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[17],{

/***/ 2850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(432);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2015);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2016);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2851);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2159);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(539);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2139);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var AssetDropdown = function (_React$Component) {
    _inherits(AssetDropdown, _React$Component);

    function AssetDropdown() {
        _classCallCheck(this, AssetDropdown);

        return _possibleConstructorReturn(this, (AssetDropdown.__proto__ || Object.getPrototypeOf(AssetDropdown)).apply(this, arguments));
    }

    _createClass(AssetDropdown, [{
        key: "render",
        value: function render() {
            if (this.props.assets.length === 0 || !this.props.value) return null;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
                entries: this.props.assets.map(function (a) {
                    return a && a.get("symbol");
                }).filter(function (a) {
                    return !!a;
                }),
                values: this.props.assets.reduce(function (map, a) {
                    if (a && a.get("symbol")) map[a.get("symbol")] = a;
                    return map;
                }, {}),
                singleEntry: this.props.assets[0] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    asset: this.props.assets[0].get("id"),
                    amount: 0,
                    hide_amount: true
                }) : null,
                value: "",
                onChange: this.props.onChange
            });
        }
    }]);

    return AssetDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetDropdown.propTypes = {
    value: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // asset id
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};


AssetDropdown = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_10__["default"])(AssetDropdown, { asList: true });

/**
 * @brief Allows the user to enter an account by name or #ID
 *
 * This component is designed to be stateless as possible.  It's primary responsbility is to
 * manage the layout of data and to filter the user input.
 *
 */

var AssetSelector = function (_React$Component2) {
    _inherits(AssetSelector, _React$Component2);

    function AssetSelector() {
        _classCallCheck(this, AssetSelector);

        return _possibleConstructorReturn(this, (AssetSelector.__proto__ || Object.getPrototypeOf(AssetSelector)).apply(this, arguments));
    }

    _createClass(AssetSelector, [{
        key: "getAsset",


        // can be used in parent component: this.refs.asset_selector.getAsset()
        value: function getAsset() {
            return this.props.asset;
        }
    }, {
        key: "getError",
        value: function getError() {
            var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.assetInput;

            var error = this.props.error;
            if (!error && input && !this.getNameType(input)) error = counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.asset.invalid", {
                name: input
            });
            return error;
        }
    }, {
        key: "getNameType",
        value: function getNameType(value) {
            if (!value) return null;
            // if(value[0] === "#" && utils.is_object_id("1.2." + value.substring(1))) return "id";
            if (!bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainValidation"].is_valid_symbol_error(value, true)) return "symbol";
            return null;
        }
    }, {
        key: "onInputChanged",
        value: function onInputChanged(event) {
            var value = event.target.value.trim().substr(0, 16).toUpperCase(); //.toLowerCase();
            if (this.props.onChange && value !== this.props.assetInput) this.props.onChange(value);
        }
    }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
            if (event.keyCode === 13) {
                this.onFound(event);
                this.onAction(event);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.props.onFound && this.props.asset) this.props.onFound(this.props.asset);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(newProps) {
            if (this.props.onFound && newProps.asset !== this.props.asset) this.props.onFound(newProps.asset);
        }
    }, {
        key: "onFound",
        value: function onFound(e) {
            e.preventDefault();
            if (this.props.onFound && !this.getError() && !this.props.disableActionButton) {
                if (this.props.asset) this.props.onFound(this.props.asset);
            }
        }
    }, {
        key: "onAssetSelect",
        value: function onAssetSelect(selected_asset) {
            if (selected_asset) {
                this.props.onFound(selected_asset);
                this.props.onChange(selected_asset.get("symbol"));
            }
        }
    }, {
        key: "onAction",
        value: function onAction(e) {
            e.preventDefault();
            if (this.props.onAction && !this.getError() && !this.props.disableActionButton) {
                if (this.props.asset) this.props.onAction(this.props.asset);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                disabled = _props.disabled,
                noLabel = _props.noLabel;

            var error = this.getError();
            var lookup_display = void 0;
            if (!disabled) {
                if (this.props.asset) {
                    lookup_display = this.props.asset.get("symbol");
                } else if (!error && this.props.assetInput) {
                    error = counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.asset.not_found", {
                        name: this.props.assetInput
                    });
                }
            }

            var action_class = classnames__WEBPACK_IMPORTED_MODULE_9___default()("button", {
                disabled: !this.props.asset || error || this.props.disableActionButton
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-selector", style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "header-area" },
                        error || noLabel ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "right-label" },
                            "\xA0 ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                lookup_display
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                            component: "label",
                            content: this.props.label
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "input-area" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "inline-label input-wrapper" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                style: this.props.inputStyle,
                                disabled: this.props.disabled,
                                type: "text",
                                value: this.props.assetInput || "",
                                placeholder: this.props.placeholder || counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.assets.symbol"),
                                ref: "user_input",
                                onChange: this.onInputChanged.bind(this),
                                onKeyDown: this.onKeyDown.bind(this),
                                tabIndex: this.props.tabIndex
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "form-label select floating-dropdown" },
                                this.props.asset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetDropdown, {
                                    ref: this.props.refCallback,
                                    value: this.props.asset.get("symbol"),
                                    assets: immutable__WEBPACK_IMPORTED_MODULE_8___default.a.List(this.props.assets),
                                    onChange: this.onAssetSelect.bind(this)
                                }) : null
                            ),
                            this.props.children,
                            this.props.onAction ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: action_class,
                                    onClick: this.onAction.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    content: this.props.action_label
                                })
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "error-area", style: { paddingBottom: "10px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { style: { wordBreak: "break-all" } },
                            error
                        )
                    )
                )
            );
        }
    }]);

    return AssetSelector;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetSelector.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // a translation key for the label
    error: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // the error message override
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // the placeholder text to be displayed when there is no user_input
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, // a method to be called any time user input changes
    onFound: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, // a method to be called when existing account is selected
    assetInput: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, // the current value of the account selector, the string the user enters
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset, // account object retrieved via BindToChainState decorator (not input)
    tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, // tabindex property to be passed to input tag
    disableActionButton: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool // use it if you need to disable action button
};
AssetSelector.defaultProps = {
    disabled: false
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetSelector));

/***/ }),

/***/ 2853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var searchInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
function SearchInput(_ref) {
    var onChange = _ref.onChange,
        value = _ref.value,
        placeholder = _ref.placeholder,
        maxLength = _ref.maxLength,
        style = _ref.style,
        className = _ref.className,
        name = _ref.name,
        autoComplete = _ref.autoComplete,
        onClear = _ref.onClear,
        type = _ref.type,
        other = _objectWithoutProperties(_ref, ["onChange", "value", "placeholder", "maxLength", "style", "className", "name", "autoComplete", "onClear", "type"]);

    if (onClear == undefined) {
        // if onClear=null, then it won't be rendered
        onClear = function onClear() {
            onChange({
                target: { value: "" }
            });
            searchInput.current.focus();
        };
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Input"], _extends({
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
        addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Icon"], { type: "search" }),
        suffix: onClear ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            onClick: onClear,
            type: "close"
            // always include DOM the icon, otherwise user looses focus when it appears and input resizes
            , className: value ? "cursor-pointer" : "hide"
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
    }, other));
}

SearchInput.propTypes = {
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, // can be undefined when no user input is present
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    maxLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    onClear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

SearchInput.defaultProps = {
    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("exchange.filter"),
    style: { width: "200px" },
    className: "",
    type: "text",
    name: "focus",
    autoComplete: "off",
    maxLength: 16,
    onClear: undefined
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZX5leHBsb3Jlci45NDVkNjM5ZGRiNWRhNWYwYWI2ZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0U2VsZWN0b3IuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1NlYXJjaElucHV0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDaGFpblZhbGlkYXRpb259IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgRmxvYXRpbmdEcm9wZG93biBmcm9tIFwiLi9GbG9hdGluZ0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgQXNzZXREcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhc3NldCBpZFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXRzLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5wcm9wcy52YWx1ZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZsb2F0aW5nRHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGVudHJpZXM9e3RoaXMucHJvcHMuYXNzZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChhID0+IGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3RoaXMucHJvcHMuYXNzZXRzLnJlZHVjZSgobWFwLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpIG1hcFthLmdldChcInN5bWJvbFwiKV0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSl9XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVFbnRyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldHNbMF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXRzWzBdLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hbW91bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXREcm9wZG93biA9IEFzc2V0V3JhcHBlcihBc3NldERyb3Bkb3duLCB7YXNMaXN0OiB0cnVlfSk7XHJcblxyXG4vKipcclxuICogQGJyaWVmIEFsbG93cyB0aGUgdXNlciB0byBlbnRlciBhbiBhY2NvdW50IGJ5IG5hbWUgb3IgI0lEXHJcbiAqXHJcbiAqIFRoaXMgY29tcG9uZW50IGlzIGRlc2lnbmVkIHRvIGJlIHN0YXRlbGVzcyBhcyBwb3NzaWJsZS4gIEl0J3MgcHJpbWFyeSByZXNwb25zYmlsaXR5IGlzIHRvXHJcbiAqIG1hbmFnZSB0aGUgbGF5b3V0IG9mIGRhdGEgYW5kIHRvIGZpbHRlciB0aGUgdXNlciBpbnB1dC5cclxuICpcclxuICovXHJcblxyXG5jbGFzcyBBc3NldFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGEgdHJhbnNsYXRpb24ga2V5IGZvciB0aGUgbGFiZWxcclxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIGVycm9yIG1lc3NhZ2Ugb3ZlcnJpZGVcclxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIHBsYWNlaG9sZGVyIHRleHQgdG8gYmUgZGlzcGxheWVkIHdoZW4gdGhlcmUgaXMgbm8gdXNlcl9pbnB1dFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIGFueSB0aW1lIHVzZXIgaW5wdXQgY2hhbmdlc1xyXG4gICAgICAgIG9uRm91bmQ6IFByb3BUeXBlcy5mdW5jLCAvLyBhIG1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBleGlzdGluZyBhY2NvdW50IGlzIHNlbGVjdGVkXHJcbiAgICAgICAgYXNzZXRJbnB1dDogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGFjY291bnQgc2VsZWN0b3IsIHRoZSBzdHJpbmcgdGhlIHVzZXIgZW50ZXJzXHJcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCwgLy8gYWNjb3VudCBvYmplY3QgcmV0cmlldmVkIHZpYSBCaW5kVG9DaGFpblN0YXRlIGRlY29yYXRvciAobm90IGlucHV0KVxyXG4gICAgICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLCAvLyB0YWJpbmRleCBwcm9wZXJ0eSB0byBiZSBwYXNzZWQgdG8gaW5wdXQgdGFnXHJcbiAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbjogUHJvcFR5cGVzLmJvb2wgLy8gdXNlIGl0IGlmIHlvdSBuZWVkIHRvIGRpc2FibGUgYWN0aW9uIGJ1dHRvblxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYW4gYmUgdXNlZCBpbiBwYXJlbnQgY29tcG9uZW50OiB0aGlzLnJlZnMuYXNzZXRfc2VsZWN0b3IuZ2V0QXNzZXQoKVxyXG4gICAgZ2V0QXNzZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYXNzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXJyb3IoaW5wdXQgPSB0aGlzLnByb3BzLmFzc2V0SW5wdXQpIHtcclxuICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLnByb3BzLmVycm9yO1xyXG4gICAgICAgIGlmICghZXJyb3IgJiYgaW5wdXQgJiYgIXRoaXMuZ2V0TmFtZVR5cGUoaW5wdXQpKVxyXG4gICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmFzc2V0LmludmFsaWRcIiwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogaW5wdXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWVUeXBlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgLy8gaWYodmFsdWVbMF0gPT09IFwiI1wiICYmIHV0aWxzLmlzX29iamVjdF9pZChcIjEuMi5cIiArIHZhbHVlLnN1YnN0cmluZygxKSkpIHJldHVybiBcImlkXCI7XHJcbiAgICAgICAgaWYgKCFDaGFpblZhbGlkYXRpb24uaXNfdmFsaWRfc3ltYm9sX2Vycm9yKHZhbHVlLCB0cnVlKSlcclxuICAgICAgICAgICAgcmV0dXJuIFwic3ltYm9sXCI7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dENoYW5nZWQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAuc3Vic3RyKDAsIDE2KVxyXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKTsgLy8udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB2YWx1ZSAhPT0gdGhpcy5wcm9wcy5hc3NldElucHV0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkZvdW5kKGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5vbkFjdGlvbihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uRm91bmQgJiYgdGhpcy5wcm9wcy5hc3NldClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvdW5kKHRoaXMucHJvcHMuYXNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvdW5kICYmIG5ld1Byb3BzLmFzc2V0ICE9PSB0aGlzLnByb3BzLmFzc2V0KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm91bmQobmV3UHJvcHMuYXNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm91bmQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb3VuZCAmJlxyXG4gICAgICAgICAgICAhdGhpcy5nZXRFcnJvcigpICYmXHJcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmRpc2FibGVBY3Rpb25CdXR0b25cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXQpIHRoaXMucHJvcHMub25Gb3VuZCh0aGlzLnByb3BzLmFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Bc3NldFNlbGVjdChzZWxlY3RlZF9hc3NldCkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZF9hc3NldCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm91bmQoc2VsZWN0ZWRfYXNzZXQpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNlbGVjdGVkX2Fzc2V0LmdldChcInN5bWJvbFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uICYmXHJcbiAgICAgICAgICAgICF0aGlzLmdldEVycm9yKCkgJiZcclxuICAgICAgICAgICAgIXRoaXMucHJvcHMuZGlzYWJsZUFjdGlvbkJ1dHRvblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCkgdGhpcy5wcm9wcy5vbkFjdGlvbih0aGlzLnByb3BzLmFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7ZGlzYWJsZWQsIG5vTGFiZWx9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XHJcbiAgICAgICAgbGV0IGxvb2t1cF9kaXNwbGF5O1xyXG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXQpIHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cF9kaXNwbGF5ID0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWVycm9yICYmIHRoaXMucHJvcHMuYXNzZXRJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleHBsb3Jlci5hc3NldC5ub3RfZm91bmRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuYXNzZXRJbnB1dFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb25fY2xhc3MgPSBjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgZGlzYWJsZWQ6XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5hc3NldCB8fCBlcnJvciB8fCB0aGlzLnByb3BzLmRpc2FibGVBY3Rpb25CdXR0b25cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1zZWxlY3RvclwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgfHwgbm9MYWJlbCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgPHNwYW4+e2xvb2t1cF9kaXNwbGF5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmlucHV0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFzc2V0SW5wdXQgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldHMuc3ltYm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ1c2VyX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGhpcy5wcm9wcy50YWJJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXNzZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvcHMucmVmQ2FsbGJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e0ltbXV0YWJsZS5MaXN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Bc3NldFNlbGVjdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9uQWN0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3Rpb25fY2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY3Rpb24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMuYWN0aW9uX2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYXJlYVwiIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCJ9fT57ZXJyb3J9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShBc3NldFNlbGVjdG9yKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7SW5wdXQsIEljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoSW5wdXQoe1xyXG4gICAgb25DaGFuZ2UsXHJcbiAgICB2YWx1ZSxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgbWF4TGVuZ3RoLFxyXG4gICAgc3R5bGUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBuYW1lLFxyXG4gICAgYXV0b0NvbXBsZXRlLFxyXG4gICAgb25DbGVhcixcclxuICAgIHR5cGUsXHJcbiAgICAuLi5vdGhlclxyXG59KSB7XHJcbiAgICBpZiAob25DbGVhciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBpZiBvbkNsZWFyPW51bGwsIHRoZW4gaXQgd29uJ3QgYmUgcmVuZGVyZWRcclxuICAgICAgICBvbkNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHt2YWx1ZTogXCJcIn1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHJlZj17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lICsgXCIgc2VhcmNoLWlucHV0XCJ9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XHJcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBhZGRvbkFmdGVyPXs8SWNvbiB0eXBlPVwic2VhcmNoXCIgLz59XHJcbiAgICAgICAgICAgIHN1ZmZpeD17XHJcbiAgICAgICAgICAgICAgICBvbkNsZWFyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBpbmNsdWRlIERPTSB0aGUgaWNvbiwgb3RoZXJ3aXNlIHVzZXIgbG9vc2VzIGZvY3VzIHdoZW4gaXQgYXBwZWFycyBhbmQgaW5wdXQgcmVzaXplc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3ZhbHVlID8gXCJjdXJzb3ItcG9pbnRlclwiIDogXCJoaWRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn1cclxuXHJcblNlYXJjaElucHV0LnByb3BUeXBlcyA9IHtcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGNhbiBiZSB1bmRlZmluZWQgd2hlbiBubyB1c2VyIGlucHV0IGlzIHByZXNlbnRcclxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1heExlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5TZWFyY2hJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBwbGFjZWhvbGRlcjogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UuZmlsdGVyXCIpLFxyXG4gICAgc3R5bGU6IHt3aWR0aDogXCIyMDBweFwifSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgbmFtZTogXCJmb2N1c1wiLFxyXG4gICAgYXV0b0NvbXBsZXRlOiBcIm9mZlwiLFxyXG4gICAgbWF4TGVuZ3RoOiAxNixcclxuICAgIG9uQ2xlYXI6IHVuZGVmaW5lZFxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFsQkE7QUFxQkE7Ozs7QUE5QkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQThCQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUEvQkE7QUFEQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUF2REE7QUFEQTtBQThEQTs7OztBQWhMQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQURBO0FBY0E7QUFEQTtBQUNBO0FBb0tBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFkQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTs7OztBIiwic291cmNlUm9vdCI6IiJ9