(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[18],{

/***/ 2838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var scroll_length = props.scroll_length;

        var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this.state = {
            active: false
        };

        _this.listener = false;
        _this.onBodyClick = _this.onBodyClick.bind(_this);
        return _this;
    }

    _createClass(Dropdown, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setListener();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(np.entries, this.props.entries) || !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(ns, this.state) || np.value !== this.props.value;
        }
    }, {
        key: "_setListener",
        value: function _setListener() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            if (props.entries.length > 1 && !this.listener) {
                this.listener = true;
                document.body.addEventListener("click", this.onBodyClick, {
                    capture: false,
                    passive: true
                });
            }
        }
    }, {
        key: "_removeListener",
        value: function _removeListener() {
            document.body.removeEventListener("click", this.onBodyClick);
            this.listener = false;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.entries.length === 1) {
                this._removeListener();
            } else if (np.entries.length > 1) {
                this._setListener(np);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this._removeListener();
        }
    }, {
        key: "onBodyClick",
        value: function onBodyClick(e) {
            var el = e.target;
            var insideActionSheet = false;

            do {
                if (el.classList && el.classList.contains("dropdown") && el.id === this.props.id) {
                    insideActionSheet = true;
                    break;
                }
            } while (el = el.parentNode);

            if (!insideActionSheet) {
                this.setState({ active: false });
            } else {
                e.stopPropagation();
            }
        }
    }, {
        key: "onChange",
        value: function onChange(value, e) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onChange(value);
            this.setState({
                active: false
            });
        }
    }, {
        key: "_toggleDropdown",
        value: function _toggleDropdown() {
            this.setState({
                active: !this.state.active
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                entries = _props.entries,
                value = _props.value;
            var active = this.state.active;

            if (entries.length === 0) return null;
            if (entries.length == 1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "dropdown-wrapper inactive" + (this.props.upperCase ? " upper-case" : "")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        this.props.singleEntry ? this.props.singleEntry : entries[0]
                    )
                );
            } else {
                var options = entries.map(function (value) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        {
                            className: _this2.props.upperCase ? "upper-case" : "",
                            key: value,
                            onClick: _this2.onChange.bind(_this2, _this2.props.values[value])
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            value
                        )
                    );
                });
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        onClick: this._toggleDropdown.bind(this),
                        className: "dropdown-wrapper" + (active ? " active" : "") + (this.props.upperCase ? " upper-case" : "")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingRight: 15 } },
                        value ? value : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "hidden" },
                            "A"
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        {
                            className: "dropdown",
                            style: {
                                overflow: entries.length > this.props.scroll_length ? "auto" : "hidden"
                            }
                        },
                        options
                    )
                );
            }
        }
    }]);

    return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Dropdown.propTypes = {
    scroll_length: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Dropdown.defaultProps = {
    scroll_length: 9
};


/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ 2938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2156);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2838);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2136);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DecimalChecker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2137);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var AssetSelector = function (_React$Component) {
    _inherits(AssetSelector, _React$Component);

    function AssetSelector() {
        _classCallCheck(this, AssetSelector);

        return _possibleConstructorReturn(this, (AssetSelector.__proto__ || Object.getPrototypeOf(AssetSelector)).apply(this, arguments));
    }

    _createClass(AssetSelector, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].are_equal_shallow(np.assets, this.props.assets) || np.value !== this.props.value || np.scroll_length !== this.props.scroll_length;
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.assets.length) return null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FloatingDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
                entries: this.props.assets.map(function (a) {
                    return a && a.get("symbol");
                }).filter(function (a) {
                    return !!a;
                }),
                values: this.props.assets.reduce(function (map, a) {
                    if (a && a.get("symbol")) map[a.get("symbol")] = a;
                    return map;
                }, {}),
                singleEntry: this.props.assets[0] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    asset: this.props.assets[0].get("id"),
                    amount: 0,
                    hide_amount: true
                }) : null,
                value: this.props.value,
                onChange: this.props.onChange,
                scroll_length: this.props.scroll_length
            });
        }
    }]);

    return AssetSelector;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetSelector.propTypes = {
    value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, // asset id
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    scroll_length: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};


AssetSelector = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_6__["default"])(AssetSelector, { asList: true });

var AmountSelector = function (_DecimalChecker) {
    _inherits(AmountSelector, _DecimalChecker);

    function AmountSelector() {
        _classCallCheck(this, AmountSelector);

        return _possibleConstructorReturn(this, (AmountSelector.__proto__ || Object.getPrototypeOf(AmountSelector)).apply(this, arguments));
    }

    _createClass(AmountSelector, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.onAssetChange(this.props.asset);
        }
    }, {
        key: "formatAmount",
        value: function formatAmount(v) {
            /*// TODO: use asset's precision to format the number*/
            if (!v) v = "";
            if (typeof v === "number") v = v.toString();
            var value = v.trim().replace(/,/g, "");

            return value;
        }
    }, {
        key: "_onChange",
        value: function _onChange(e) {
            if (this.props.onChange) this.props.onChange({
                amount: this.getNumericEventValue(e),
                asset: this.props.asset
            });
        }
    }, {
        key: "onAssetChange",
        value: function onAssetChange(selected_asset) {
            if (this.props.onChange) this.props.onChange({
                amount: this.props.amount,
                asset: selected_asset
            });
        }
    }, {
        key: "render",
        value: function render() {
            //console.log("Calling AmountSelector: " + this.props.label + this.props.asset + this.props.assets + this.props.amount + this.props.placeholder + this.props.error);
            var value = this.props.error ? counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate(this.props.error) : this.formatAmount(this.props.amount);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "amount-selector", style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { className: "right-label" },
                    this.props.display_balance
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                    className: "left-label",
                    component: "label",
                    content: this.props.label
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "inline-label input-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        disabled: this.props.disabled,
                        type: "text",
                        value: value || "",
                        placeholder: this.props.placeholder,
                        onChange: this._onChange.bind(this),
                        tabIndex: this.props.tabIndex,
                        onPaste: this.props.onPaste || this.onPaste.bind(this),
                        onKeyPress: this.onKeyPress.bind(this)
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "form-label select floating-dropdown" },
                        this.props.isPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "dropdown-wrapper inactive" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                this.props.asset.get("symbol"),
                                "/",
                                this.props.base
                            )
                        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetSelector, {
                            ref: this.props.refCallback,
                            value: this.props.asset.get("symbol"),
                            assets: immutable__WEBPACK_IMPORTED_MODULE_4___default.a.List(this.props.assets),
                            onChange: this.onAssetChange.bind(this),
                            scroll_length: this.props.scroll_length
                        })
                    )
                )
            );
        }
    }]);

    return AmountSelector;
}(_DecimalChecker__WEBPACK_IMPORTED_MODULE_9__["DecimalChecker"]);

AmountSelector.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, // a translation key for the label
    assets: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
    amount: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
    error: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    scroll_length: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
AmountSelector.defaultProps = {
    disabled: false,
    tabIndex: 0
};

AmountSelector = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_6__["default"])(AmountSelector);

/* harmony default export */ __webpack_exports__["default"] = (AmountSelector);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5hc3NldH5kZXBvc2l0LXdpdGhkcmF3fnNldHRpbmdzLmI5YmQ4NGRkM2ZiZTVlNjE5ZTY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvRmxvYXRpbmdEcm9wZG93bi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3IuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogOVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbF9sZW5ndGggPSBwcm9wcy5zY3JvbGxfbGVuZ3RoO1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25Cb2R5Q2xpY2sgPSB0aGlzLm9uQm9keUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0TGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5wLmVudHJpZXMsIHRoaXMucHJvcHMuZW50cmllcykgfHxcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5zLCB0aGlzLnN0YXRlKSB8fFxyXG4gICAgICAgICAgICBucC52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldExpc3RlbmVyKHByb3BzID0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgIGlmIChwcm9wcy5lbnRyaWVzLmxlbmd0aCA+IDEgJiYgIXRoaXMubGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Cb2R5Q2xpY2ssIHtcclxuICAgICAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbW92ZUxpc3RlbmVyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Cb2R5Q2xpY2spO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XHJcbiAgICAgICAgaWYgKG5wLmVudHJpZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChucC5lbnRyaWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0TGlzdGVuZXIobnApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQm9keUNsaWNrKGUpIHtcclxuICAgICAgICBsZXQgZWwgPSBlLnRhcmdldDtcclxuICAgICAgICBsZXQgaW5zaWRlQWN0aW9uU2hlZXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QgJiZcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duXCIpICYmXHJcbiAgICAgICAgICAgICAgICBlbC5pZCA9PT0gdGhpcy5wcm9wcy5pZFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGluc2lkZUFjdGlvblNoZWV0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoKGVsID0gZWwucGFyZW50Tm9kZSkpO1xyXG5cclxuICAgICAgICBpZiAoIWluc2lkZUFjdGlvblNoZWV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogZmFsc2V9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSwgZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZURyb3Bkb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7ZW50cmllcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQge2FjdGl2ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwiIHVwcGVyLWNhc2VcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpbmdsZUVudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuc2luZ2xlRW50cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZW50cmllc1swXX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gZW50cmllcy5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwidXBwZXItY2FzZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVzW3ZhbHVlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlRHJvcGRvd24uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXJcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMudXBwZXJDYXNlID8gXCIgdXBwZXItY2FzZVwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDogMTV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlID8gdmFsdWUgOiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5BPC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcy5sZW5ndGggPiB0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuL0Zsb2F0aW5nRHJvcGRvd25cIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge0RlY2ltYWxDaGVja2VyfSBmcm9tIFwiLi9EZWNpbWFsQ2hlY2tlclwiO1xyXG5cclxuY2xhc3MgQXNzZXRTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhc3NldCBpZFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5hc3NldHMsIHRoaXMucHJvcHMuYXNzZXRzKSB8fFxyXG4gICAgICAgICAgICBucC52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fFxyXG4gICAgICAgICAgICBucC5zY3JvbGxfbGVuZ3RoICE9PSB0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYXNzZXRzLmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGbG9hdGluZ0Ryb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzPXt0aGlzLnByb3BzLmFzc2V0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoYSA9PiBhICYmIGEuZ2V0KFwic3ltYm9sXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPXt0aGlzLnByb3BzLmFzc2V0cy5yZWR1Y2UoKG1hcCwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhICYmIGEuZ2V0KFwic3ltYm9sXCIpKSBtYXBbYS5nZXQoXCJzeW1ib2xcIildID0gYTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICAgICAgICAgICAgfSwge30pfVxyXG4gICAgICAgICAgICAgICAgc2luZ2xlRW50cnk9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRzWzBdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmFzc2V0c1swXS5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYW1vdW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsX2xlbmd0aD17dGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0U2VsZWN0b3IgPSBBc3NldFdyYXBwZXIoQXNzZXRTZWxlY3Rvciwge2FzTGlzdDogdHJ1ZX0pO1xyXG5cclxuY2xhc3MgQW1vdW50U2VsZWN0b3IgZXh0ZW5kcyBEZWNpbWFsQ2hlY2tlciB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhIHRyYW5zbGF0aW9uIGtleSBmb3IgdGhlIGxhYmVsXHJcbiAgICAgICAgYXNzZXRzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgYW1vdW50OiBQcm9wVHlwZXMuYW55LFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4OiAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMub25Bc3NldENoYW5nZSh0aGlzLnByb3BzLmFzc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRBbW91bnQodikge1xyXG4gICAgICAgIC8qLy8gVE9ETzogdXNlIGFzc2V0J3MgcHJlY2lzaW9uIHRvIGZvcm1hdCB0aGUgbnVtYmVyKi9cclxuICAgICAgICBpZiAoIXYpIHYgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikgdiA9IHYudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB2LnRyaW0oKS5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQ2hhbmdlKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuZ2V0TnVtZXJpY0V2ZW50VmFsdWUoZSksXHJcbiAgICAgICAgICAgICAgICBhc3NldDogdGhpcy5wcm9wcy5hc3NldFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFzc2V0Q2hhbmdlKHNlbGVjdGVkX2Fzc2V0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnByb3BzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFzc2V0OiBzZWxlY3RlZF9hc3NldFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNhbGxpbmcgQW1vdW50U2VsZWN0b3I6IFwiICsgdGhpcy5wcm9wcy5sYWJlbCArIHRoaXMucHJvcHMuYXNzZXQgKyB0aGlzLnByb3BzLmFzc2V0cyArIHRoaXMucHJvcHMuYW1vdW50ICsgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciArIHRoaXMucHJvcHMuZXJyb3IpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMuZXJyb3JcclxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5lcnJvcilcclxuICAgICAgICAgICAgOiB0aGlzLmZvcm1hdEFtb3VudCh0aGlzLnByb3BzLmFtb3VudCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJpZ2h0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGlzcGxheV9iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhc3RlPXt0aGlzLnByb3BzLm9uUGFzdGUgfHwgdGhpcy5vblBhc3RlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNQcmljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX0vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb3BzLnJlZkNhbGxiYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e0ltbXV0YWJsZS5MaXN0KHRoaXMucHJvcHMuYXNzZXRzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFzc2V0Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsX2xlbmd0aD17dGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkFtb3VudFNlbGVjdG9yID0gQXNzZXRXcmFwcGVyKEFtb3VudFNlbGVjdG9yKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFtb3VudFNlbGVjdG9yO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU5BO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBU0E7QUFUQTtBQVhBO0FBd0JBO0FBQ0E7Ozs7QUE1SkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBQ0E7QUF3SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQW5CQTtBQXNCQTs7OztBQXpDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QUF5Q0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVEE7QUFaQTtBQVRBO0FBMENBOzs7O0FBL0ZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQURBO0FBYUE7QUFDQTtBQUZBO0FBQ0E7QUFvRkE7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=