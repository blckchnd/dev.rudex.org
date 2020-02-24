(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[18],{

/***/ 2848:
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

/***/ 2948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2156);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2848);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5hc3NldH5kZXBvc2l0LXdpdGhkcmF3fnNldHRpbmdzLjY3OTliZmRiMTdkMjZjNTU1OGQ4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvRmxvYXRpbmdEcm9wZG93bi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3IuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IDlcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsX2xlbmd0aCA9IHByb3BzLnNjcm9sbF9sZW5ndGg7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Cb2R5Q2xpY2sgPSB0aGlzLm9uQm9keUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5wLmVudHJpZXMsIHRoaXMucHJvcHMuZW50cmllcykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucywgdGhpcy5zdGF0ZSkgfHxcbiAgICAgICAgICAgIG5wLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3NldExpc3RlbmVyKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuZW50cmllcy5sZW5ndGggPiAxICYmICF0aGlzLmxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Cb2R5Q2xpY2ssIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkJvZHlDbGljayk7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC5lbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChucC5lbnRyaWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldExpc3RlbmVyKG5wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIG9uQm9keUNsaWNrKGUpIHtcbiAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XG4gICAgICAgIGxldCBpbnNpZGVBY3Rpb25TaGVldCA9IGZhbHNlO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QgJiZcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93blwiKSAmJlxuICAgICAgICAgICAgICAgIGVsLmlkID09PSB0aGlzLnByb3BzLmlkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpbnNpZGVBY3Rpb25TaGVldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKChlbCA9IGVsLnBhcmVudE5vZGUpKTtcblxuICAgICAgICBpZiAoIWluc2lkZUFjdGlvblNoZWV0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6IGZhbHNlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90b2dnbGVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtlbnRyaWVzLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy51cHBlckNhc2UgPyBcIiB1cHBlci1jYXNlXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2luZ2xlRW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuc2luZ2xlRW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVudHJpZXNbMF19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gZW50cmllcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwidXBwZXItY2FzZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZURyb3Bkb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXJcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy51cHBlckNhc2UgPyBcIiB1cHBlci1jYXNlXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlID8gdmFsdWUgOiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5BPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcy5sZW5ndGggPiB0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IEZsb2F0aW5nRHJvcGRvd24gZnJvbSBcIi4vRmxvYXRpbmdEcm9wZG93blwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7RGVjaW1hbENoZWNrZXJ9IGZyb20gXCIuL0RlY2ltYWxDaGVja2VyXCI7XHJcblxyXG5jbGFzcyBBc3NldFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGFzc2V0IGlkXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH07XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5wLmFzc2V0cywgdGhpcy5wcm9wcy5hc3NldHMpIHx8XHJcbiAgICAgICAgICAgIG5wLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlIHx8XHJcbiAgICAgICAgICAgIG5wLnNjcm9sbF9sZW5ndGggIT09IHRoaXMucHJvcHMuc2Nyb2xsX2xlbmd0aFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hc3NldHMubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZsb2F0aW5nRHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGVudHJpZXM9e3RoaXMucHJvcHMuYXNzZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChhID0+IGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3RoaXMucHJvcHMuYXNzZXRzLnJlZHVjZSgobWFwLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpIG1hcFthLmdldChcInN5bWJvbFwiKV0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSl9XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVFbnRyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldHNbMF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXRzWzBdLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hbW91bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxfbGVuZ3RoPXt0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXRTZWxlY3RvciA9IEFzc2V0V3JhcHBlcihBc3NldFNlbGVjdG9yLCB7YXNMaXN0OiB0cnVlfSk7XHJcblxyXG5jbGFzcyBBbW91bnRTZWxlY3RvciBleHRlbmRzIERlY2ltYWxDaGVja2VyIHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGEgdHJhbnNsYXRpb24ga2V5IGZvciB0aGUgbGFiZWxcclxuICAgICAgICBhc3NldHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBhbW91bnQ6IFByb3BUeXBlcy5hbnksXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgdGFiSW5kZXg6IDBcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkFzc2V0Q2hhbmdlKHRoaXMucHJvcHMuYXNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdEFtb3VudCh2KSB7XHJcbiAgICAgICAgLyovLyBUT0RPOiB1c2UgYXNzZXQncyBwcmVjaXNpb24gdG8gZm9ybWF0IHRoZSBudW1iZXIqL1xyXG4gICAgICAgIGlmICghdikgdiA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB2ID0gdi50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHYudHJpbSgpLnJlcGxhY2UoLywvZywgXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25DaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5nZXROdW1lcmljRXZlbnRWYWx1ZShlKSxcclxuICAgICAgICAgICAgICAgIGFzc2V0OiB0aGlzLnByb3BzLmFzc2V0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQXNzZXRDaGFuZ2Uoc2VsZWN0ZWRfYXNzZXQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMucHJvcHMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYXNzZXQ6IHNlbGVjdGVkX2Fzc2V0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ2FsbGluZyBBbW91bnRTZWxlY3RvcjogXCIgKyB0aGlzLnByb3BzLmxhYmVsICsgdGhpcy5wcm9wcy5hc3NldCArIHRoaXMucHJvcHMuYXNzZXRzICsgdGhpcy5wcm9wcy5hbW91bnQgKyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyICsgdGhpcy5wcm9wcy5lcnJvcik7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy5lcnJvclxyXG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmVycm9yKVxyXG4gICAgICAgICAgICA6IHRoaXMuZm9ybWF0QW1vdW50KHRoaXMucHJvcHMuYW1vdW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbW91bnQtc2VsZWN0b3JcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5X2JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnByb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFzdGU9e3RoaXMucHJvcHMub25QYXN0ZSB8fCB0aGlzLm9uUGFzdGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc1ByaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfS9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvcHMucmVmQ2FsbGJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17SW1tdXRhYmxlLkxpc3QodGhpcy5wcm9wcy5hc3NldHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQXNzZXRDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxfbGVuZ3RoPXt0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQW1vdW50U2VsZWN0b3IgPSBBc3NldFdyYXBwZXIoQW1vdW50U2VsZWN0b3IpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW1vdW50U2VsZWN0b3I7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVJBO0FBU0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFTQTtBQVRBO0FBWEE7QUF3QkE7QUFDQTs7OztBQTVKQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFNQTtBQURBO0FBQ0E7QUFDQTtBQXdKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBbkJBO0FBc0JBOzs7O0FBekNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQXlDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFUQTtBQVpBO0FBVEE7QUEwQ0E7Ozs7QUEvRkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFhQTtBQUNBO0FBRkE7QUFDQTtBQW9GQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==