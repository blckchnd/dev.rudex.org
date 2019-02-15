(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 2697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2299);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(813);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AssetImage = function (_React$Component) {
    _inherits(AssetImage, _React$Component);

    function AssetImage(props) {
        _classCallCheck(this, AssetImage);

        var _this = _possibleConstructorReturn(this, (AssetImage.__proto__ || Object.getPrototypeOf(AssetImage)).call(this, props));

        _this.state = {
            imgError: false
        };
        return _this;
    }

    _createClass(AssetImage, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return this.props.asset !== np.asset || this.props.maxWidth !== np.maxWidth || this.props.whiteList !== np.whiteList || this.state.imgError !== ns.imgError;
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                if (this.props.replaceNoneToBts) this.refs[imgName.toLowerCase()].src = "" + "asset-symbols/bts.png";else this.refs[imgName.toLowerCase()].remove();
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            function getImageName(asset) {
                var symbol = asset.get("symbol");
                return symbol;
                // if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                // if (symbol.startsWith("ESCROW.")) return symbol;
                // let imgName = asset.get("symbol").split(".");
                //return imgName.length === 2 ? imgName[1] : imgName[0];
            }

            var imgName = getImageName(asset);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                ref: imgName.toLowerCase(),
                className: "column-hide-small",
                onError: this._onError.bind(this, imgName),
                style: { maxWidth: this.props.maxWidth, marginRight: 5 },
                src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
            });
        }
    }]);

    return AssetImage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetImage.propTypes = {
    replaceNoneToBts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
AssetImage.defaultProps = {
    replaceNoneToBts: true,
    maxWidth: 20
};


AssetImage = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetImage);

var AssetImageWrapper = function (_React$Component2) {
    _inherits(AssetImageWrapper, _React$Component2);

    function AssetImageWrapper() {
        _classCallCheck(this, AssetImageWrapper);

        return _possibleConstructorReturn(this, (AssetImageWrapper.__proto__ || Object.getPrototypeOf(AssetImageWrapper)).apply(this, arguments));
    }

    _createClass(AssetImageWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetImage, _extends({}, this.props, { asset: this.props.name }));
        }
    }]);

    return AssetImageWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetImageWrapper);

/***/ }),

/***/ 2717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquivalentValueComponent", function() { return EquivalentValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceValueComponent", function() { return BalanceValueComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2080);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1954);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1955);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2299);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(570);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1847);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2348);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2351);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2350);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2347);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















/**
 *  Given an asset amount, displays the equivalent value in baseAsset if possible
 *
 *  Expects three properties
 *  -'toAsset' which should be a asset id
 *  -'fromAsset' which is the asset id of the original asset amount
 *  -'amount' which is the amount to convert
 *  -'fullPrecision' boolean to tell if the amount uses the full precision of the asset
 */

var ValueComponent = function (_MarketStatsCheck) {
    _inherits(ValueComponent, _MarketStatsCheck);

    function ValueComponent(props) {
        _classCallCheck(this, ValueComponent);

        return _possibleConstructorReturn(this, (ValueComponent.__proto__ || Object.getPrototypeOf(ValueComponent)).call(this, props));
    }

    _createClass(ValueComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a.rebuild();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return _get(ValueComponent.prototype.__proto__ || Object.getPrototypeOf(ValueComponent.prototype), "shouldComponentUpdate", this).call(this, np) || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(np.pulsate, this.props.pulsate) || np.toAsset !== this.props.toAsset || np.fromAsset !== this.props.fromAsset || np.amount !== this.props.amount;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var _props = this.props,
                amount = _props.amount,
                toAsset = _props.toAsset,
                fromAsset = _props.fromAsset,
                fullPrecision = _props.fullPrecision,
                allMarketStats = _props.allMarketStats,
                coreAsset = _props.coreAsset;

            return common_market_utils__WEBPACK_IMPORTED_MODULE_12__["default"].convertValue(amount, toAsset, fromAsset, allMarketStats, coreAsset, fullPrecision);
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                amount = _props2.amount,
                toAsset = _props2.toAsset,
                fromAsset = _props2.fromAsset,
                fullPrecision = _props2.fullPrecision,
                others = _objectWithoutProperties(_props2, ["amount", "toAsset", "fromAsset", "fullPrecision"]);

            var toID = toAsset.get("id");
            var toSymbol = toAsset.get("symbol");

            if (!fullPrecision) {
                amount = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(amount, fromAsset);
            }

            var eqValue = this.getValue();

            if (!eqValue && eqValue !== 0) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Tooltip"],
                    {
                        placement: "bottom",
                        title: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.no_price")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "tooltip inline-block",
                            style: { fontSize: "0.9rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "account.no_price" })
                    )
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
                noPrefix: true,
                amount: eqValue,
                asset: toID,
                decimalOffset: toSymbol.indexOf("BTC") !== -1 ? 4 : this.props.fullDecimals ? 0 : this.props.noDecimals ? toAsset.get("precision") : toAsset.get("precision") - 2
            }, others));
        }
    }]);

    return ValueComponent;
}(_MarketStatsCheck__WEBPACK_IMPORTED_MODULE_11__["default"]);

ValueComponent.defaultProps = {
    fullPrecision: true,
    noDecimals: false,
    fullDecimals: false,
    hide_asset: false
};

ValueComponent = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(ValueComponent, {
    propNames: ["toAsset", "fromAsset", "coreAsset"],
    defaultProps: {
        toAsset: "1.3.0",
        coreAsset: "1.3.0"
    }
});

var EquivalentValueComponent = function (_React$Component) {
    _inherits(EquivalentValueComponent, _React$Component);

    function EquivalentValueComponent() {
        _classCallCheck(this, EquivalentValueComponent);

        return _possibleConstructorReturn(this, (EquivalentValueComponent.__proto__ || Object.getPrototypeOf(EquivalentValueComponent)).apply(this, arguments));
    }

    _createClass(EquivalentValueComponent, [{
        key: "render",
        value: function render() {
            var _props3 = this.props,
                refCallback = _props3.refCallback,
                others = _objectWithoutProperties(_props3, ["refCallback"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueComponent, _extends({}, others, { ref: refCallback }));
        }
    }]);

    return EquivalentValueComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

EquivalentValueComponent = Object(alt_react__WEBPACK_IMPORTED_MODULE_6__["connect"])(EquivalentValueComponent, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"]];
    },
    getProps: function getProps() {
        return {
            allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().allMarketStats
        };
    }
});

var BalanceValueComponent = function (_React$Component2) {
    _inherits(BalanceValueComponent, _React$Component2);

    function BalanceValueComponent() {
        _classCallCheck(this, BalanceValueComponent);

        return _possibleConstructorReturn(this, (BalanceValueComponent.__proto__ || Object.getPrototypeOf(BalanceValueComponent)).apply(this, arguments));
    }

    _createClass(BalanceValueComponent, [{
        key: "render",
        value: function render() {
            var _props4 = this.props,
                balance = _props4.balance,
                others = _objectWithoutProperties(_props4, ["balance"]);

            var isBalanceObject = !!balance.getIn(["balance", "amount"]);

            var amount = Number(isBalanceObject ? balance.getIn(["balance", "amount"]) : balance.get("balance"));
            var fromAsset = isBalanceObject ? balance.getIn(["balance", "asset_id"]) : balance.get("asset_type");
            if (isNaN(amount)) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "--"
            );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EquivalentValueComponent, _extends({
                amount: amount,
                fromAsset: fromAsset,
                noDecimals: true
            }, others));
        }
    }]);

    return BalanceValueComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BalanceValueComponent.propTypes = {
    balance: _ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired
};

BalanceValueComponent = Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(BalanceValueComponent, {
    keep_updating: true
});


/***/ }),

/***/ 2731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2301);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2080);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2299);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(813);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZX5leHBsb3Jlci5kNzk5ZThjM2ExMDMzZmNiZTkxYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0SW1hZ2UuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRTZWxlY3Rvci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgQXNzZXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IHRydWUsXG4gICAgICAgIG1heFdpZHRoOiAyMFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGltZ0Vycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQgIT09IG5wLmFzc2V0IHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFdpZHRoICE9PSBucC5tYXhXaWR0aCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy53aGl0ZUxpc3QgIT09IG5wLndoaXRlTGlzdCB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWdFcnJvciAhPT0gbnMuaW1nRXJyb3JcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZU5vbmVUb0J0cylcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbXG4gICAgICAgICAgICAgICAgICAgIGltZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIF0uc3JjID0gYCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvYnRzLnBuZ2A7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKGFzc2V0KSB7XG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wgPT09IFwiT1BFTi5CVENcIiB8fCBzeW1ib2wgPT09IFwiR0RFWC5CVENcIikgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wuc3RhcnRzV2l0aChcIkVTQ1JPVy5cIikpIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAvLyBsZXQgaW1nTmFtZSA9IGFzc2V0LmdldChcInN5bWJvbFwiKS5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICAvL3JldHVybiBpbWdOYW1lLmxlbmd0aCA9PT0gMiA/IGltZ05hbWVbMV0gOiBpbWdOYW1lWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nTmFtZSA9IGdldEltYWdlTmFtZShhc3NldCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsIG1hcmdpblJpZ2h0OiA1fX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0SW1hZ2UgPSBBc3NldFdyYXBwZXIoQXNzZXRJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QXNzZXRJbWFnZSB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3RoaXMucHJvcHMubmFtZX0gLz47XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0IE1hcmtldFN0YXRzQ2hlY2sgZnJvbSBcIi4vTWFya2V0U3RhdHNDaGVja1wiO1xuaW1wb3J0IE1hcmtldFV0aWxzIGZyb20gXCJjb21tb24vbWFya2V0X3V0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuLyoqXG4gKiAgR2l2ZW4gYW4gYXNzZXQgYW1vdW50LCBkaXNwbGF5cyB0aGUgZXF1aXZhbGVudCB2YWx1ZSBpbiBiYXNlQXNzZXQgaWYgcG9zc2libGVcbiAqXG4gKiAgRXhwZWN0cyB0aHJlZSBwcm9wZXJ0aWVzXG4gKiAgLSd0b0Fzc2V0JyB3aGljaCBzaG91bGQgYmUgYSBhc3NldCBpZFxuICogIC0nZnJvbUFzc2V0JyB3aGljaCBpcyB0aGUgYXNzZXQgaWQgb2YgdGhlIG9yaWdpbmFsIGFzc2V0IGFtb3VudFxuICogIC0nYW1vdW50JyB3aGljaCBpcyB0aGUgYW1vdW50IHRvIGNvbnZlcnRcbiAqICAtJ2Z1bGxQcmVjaXNpb24nIGJvb2xlYW4gdG8gdGVsbCBpZiB0aGUgYW1vdW50IHVzZXMgdGhlIGZ1bGwgcHJlY2lzaW9uIG9mIHRoZSBhc3NldFxuICovXG5cbmNsYXNzIFZhbHVlQ29tcG9uZW50IGV4dGVuZHMgTWFya2V0U3RhdHNDaGVjayB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZnVsbFByZWNpc2lvbjogdHJ1ZSxcbiAgICAgICAgbm9EZWNpbWFsczogZmFsc2UsXG4gICAgICAgIGZ1bGxEZWNpbWFsczogZmFsc2UsXG4gICAgICAgIGhpZGVfYXNzZXQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgUmVhY3RUb29sdGlwLnJlYnVpbGQoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShucCkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5wdWxzYXRlLCB0aGlzLnByb3BzLnB1bHNhdGUpIHx8XG4gICAgICAgICAgICBucC50b0Fzc2V0ICE9PSB0aGlzLnByb3BzLnRvQXNzZXQgfHxcbiAgICAgICAgICAgIG5wLmZyb21Bc3NldCAhPT0gdGhpcy5wcm9wcy5mcm9tQXNzZXQgfHxcbiAgICAgICAgICAgIG5wLmFtb3VudCAhPT0gdGhpcy5wcm9wcy5hbW91bnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIHRvQXNzZXQsXG4gICAgICAgICAgICBmcm9tQXNzZXQsXG4gICAgICAgICAgICBmdWxsUHJlY2lzaW9uLFxuICAgICAgICAgICAgYWxsTWFya2V0U3RhdHMsXG4gICAgICAgICAgICBjb3JlQXNzZXRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBNYXJrZXRVdGlscy5jb252ZXJ0VmFsdWUoXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b0Fzc2V0LFxuICAgICAgICAgICAgZnJvbUFzc2V0LFxuICAgICAgICAgICAgYWxsTWFya2V0U3RhdHMsXG4gICAgICAgICAgICBjb3JlQXNzZXQsXG4gICAgICAgICAgICBmdWxsUHJlY2lzaW9uXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Ftb3VudCwgdG9Bc3NldCwgZnJvbUFzc2V0LCBmdWxsUHJlY2lzaW9uLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgdG9JRCA9IHRvQXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgIGxldCB0b1N5bWJvbCA9IHRvQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuXG4gICAgICAgIGlmICghZnVsbFByZWNpc2lvbikge1xuICAgICAgICAgICAgYW1vdW50ID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChhbW91bnQsIGZyb21Bc3NldCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZXFWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgICBpZiAoIWVxVmFsdWUgJiYgZXFWYWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5ub19wcmljZVwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAgaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMC45cmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lm5vX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICBub1ByZWZpeFxuICAgICAgICAgICAgICAgIGFtb3VudD17ZXFWYWx1ZX1cbiAgICAgICAgICAgICAgICBhc3NldD17dG9JRH1cbiAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgdG9TeW1ib2wuaW5kZXhPZihcIkJUQ1wiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gNFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmZ1bGxEZWNpbWFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5ub0RlY2ltYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdG9Bc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b0Fzc2V0LmdldChcInByZWNpc2lvblwiKSAtIDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuVmFsdWVDb21wb25lbnQgPSBBc3NldFdyYXBwZXIoVmFsdWVDb21wb25lbnQsIHtcbiAgICBwcm9wTmFtZXM6IFtcInRvQXNzZXRcIiwgXCJmcm9tQXNzZXRcIiwgXCJjb3JlQXNzZXRcIl0sXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHRvQXNzZXQ6IFwiMS4zLjBcIixcbiAgICAgICAgY29yZUFzc2V0OiBcIjEuMy4wXCJcbiAgICB9XG59KTtcblxuY2xhc3MgRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cmVmQ2FsbGJhY2ssIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiA8VmFsdWVDb21wb25lbnQgey4uLm90aGVyc30gcmVmPXtyZWZDYWxsYmFja30gLz47XG4gICAgfVxufVxuXG5FcXVpdmFsZW50VmFsdWVDb21wb25lbnQgPSBjb25uZWN0KFxuICAgIEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtNYXJrZXRzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWxsTWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuY2xhc3MgQmFsYW5jZVZhbHVlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBiYWxhbmNlOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YmFsYW5jZSwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGlzQmFsYW5jZU9iamVjdCA9ICEhYmFsYW5jZS5nZXRJbihbXCJiYWxhbmNlXCIsIFwiYW1vdW50XCJdKTtcblxuICAgICAgICBsZXQgYW1vdW50ID0gTnVtYmVyKFxuICAgICAgICAgICAgaXNCYWxhbmNlT2JqZWN0XG4gICAgICAgICAgICAgICAgPyBiYWxhbmNlLmdldEluKFtcImJhbGFuY2VcIiwgXCJhbW91bnRcIl0pXG4gICAgICAgICAgICAgICAgOiBiYWxhbmNlLmdldChcImJhbGFuY2VcIilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGZyb21Bc3NldCA9IGlzQmFsYW5jZU9iamVjdFxuICAgICAgICAgICAgPyBiYWxhbmNlLmdldEluKFtcImJhbGFuY2VcIiwgXCJhc3NldF9pZFwiXSlcbiAgICAgICAgICAgIDogYmFsYW5jZS5nZXQoXCJhc3NldF90eXBlXCIpO1xuICAgICAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIDxzcGFuPi0tPC9zcGFuPjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxFcXVpdmFsZW50VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICBmcm9tQXNzZXQ9e2Zyb21Bc3NldH1cbiAgICAgICAgICAgICAgICBub0RlY2ltYWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cbkJhbGFuY2VWYWx1ZUNvbXBvbmVudCA9IEJpbmRUb0NoYWluU3RhdGUoQmFsYW5jZVZhbHVlQ29tcG9uZW50LCB7XG4gICAga2VlcF91cGRhdGluZzogdHJ1ZVxufSk7XG5leHBvcnQge0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCwgQmFsYW5jZVZhbHVlQ29tcG9uZW50fTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhaW5WYWxpZGF0aW9ufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuL0Zsb2F0aW5nRHJvcGRvd25cIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgQXNzZXREcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGFzc2V0IGlkXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0cy5sZW5ndGggPT09IDAgfHwgIXRoaXMucHJvcHMudmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZsb2F0aW5nRHJvcGRvd25cbiAgICAgICAgICAgICAgICBlbnRyaWVzPXt0aGlzLnByb3BzLmFzc2V0c1xuICAgICAgICAgICAgICAgICAgICAubWFwKGEgPT4gYSAmJiBhLmdldChcInN5bWJvbFwiKSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSl9XG4gICAgICAgICAgICAgICAgdmFsdWVzPXt0aGlzLnByb3BzLmFzc2V0cy5yZWR1Y2UoKG1hcCwgYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSAmJiBhLmdldChcInN5bWJvbFwiKSkgbWFwW2EuZ2V0KFwic3ltYm9sXCIpXSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgICAgICAgICAgfSwge30pfVxuICAgICAgICAgICAgICAgIHNpbmdsZUVudHJ5PXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldHNbMF0gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5hc3NldHNbMF0uZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYW1vdW50PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e1wiXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXREcm9wZG93biA9IEFzc2V0V3JhcHBlcihBc3NldERyb3Bkb3duLCB7YXNMaXN0OiB0cnVlfSk7XG5cbi8qKlxuICogQGJyaWVmIEFsbG93cyB0aGUgdXNlciB0byBlbnRlciBhbiBhY2NvdW50IGJ5IG5hbWUgb3IgI0lEXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZGVzaWduZWQgdG8gYmUgc3RhdGVsZXNzIGFzIHBvc3NpYmxlLiAgSXQncyBwcmltYXJ5IHJlc3BvbnNiaWxpdHkgaXMgdG9cbiAqIG1hbmFnZSB0aGUgbGF5b3V0IG9mIGRhdGEgYW5kIHRvIGZpbHRlciB0aGUgdXNlciBpbnB1dC5cbiAqXG4gKi9cblxuY2xhc3MgQXNzZXRTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGEgdHJhbnNsYXRpb24ga2V5IGZvciB0aGUgbGFiZWxcbiAgICAgICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHRoZSBlcnJvciBtZXNzYWdlIG92ZXJyaWRlXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgcGxhY2Vob2xkZXIgdGV4dCB0byBiZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBpcyBubyB1c2VyX2lucHV0XG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIGFueSB0aW1lIHVzZXIgaW5wdXQgY2hhbmdlc1xuICAgICAgICBvbkZvdW5kOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gZXhpc3RpbmcgYWNjb3VudCBpcyBzZWxlY3RlZFxuICAgICAgICBhc3NldElucHV0OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgYWNjb3VudCBzZWxlY3RvciwgdGhlIHN0cmluZyB0aGUgdXNlciBlbnRlcnNcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCwgLy8gYWNjb3VudCBvYmplY3QgcmV0cmlldmVkIHZpYSBCaW5kVG9DaGFpblN0YXRlIGRlY29yYXRvciAobm90IGlucHV0KVxuICAgICAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlciwgLy8gdGFiaW5kZXggcHJvcGVydHkgdG8gYmUgcGFzc2VkIHRvIGlucHV0IHRhZ1xuICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCAvLyB1c2UgaXQgaWYgeW91IG5lZWQgdG8gZGlzYWJsZSBhY3Rpb24gYnV0dG9uXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBjYW4gYmUgdXNlZCBpbiBwYXJlbnQgY29tcG9uZW50OiB0aGlzLnJlZnMuYXNzZXRfc2VsZWN0b3IuZ2V0QXNzZXQoKVxuICAgIGdldEFzc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hc3NldDtcbiAgICB9XG5cbiAgICBnZXRFcnJvcihpbnB1dCA9IHRoaXMucHJvcHMuYXNzZXRJbnB1dCkge1xuICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLnByb3BzLmVycm9yO1xuICAgICAgICBpZiAoIWVycm9yICYmIGlucHV0ICYmICF0aGlzLmdldE5hbWVUeXBlKGlucHV0KSlcbiAgICAgICAgICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYXNzZXQuaW52YWxpZFwiLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogaW5wdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0TmFtZVR5cGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vIGlmKHZhbHVlWzBdID09PSBcIiNcIiAmJiB1dGlscy5pc19vYmplY3RfaWQoXCIxLjIuXCIgKyB2YWx1ZS5zdWJzdHJpbmcoMSkpKSByZXR1cm4gXCJpZFwiO1xuICAgICAgICBpZiAoIUNoYWluVmFsaWRhdGlvbi5pc192YWxpZF9zeW1ib2xfZXJyb3IodmFsdWUsIHRydWUpKVxuICAgICAgICAgICAgcmV0dXJuIFwic3ltYm9sXCI7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgLnN1YnN0cigwLCAxNilcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpOyAvLy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB2YWx1ZSAhPT0gdGhpcy5wcm9wcy5hc3NldElucHV0KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy5vbkZvdW5kKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMub25BY3Rpb24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uRm91bmQgJiYgdGhpcy5wcm9wcy5hc3NldClcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb3VuZCh0aGlzLnByb3BzLmFzc2V0KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uRm91bmQgJiYgbmV3UHJvcHMuYXNzZXQgIT09IHRoaXMucHJvcHMuYXNzZXQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm91bmQobmV3UHJvcHMuYXNzZXQpO1xuICAgIH1cblxuICAgIG9uRm91bmQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb3VuZCAmJlxuICAgICAgICAgICAgIXRoaXMuZ2V0RXJyb3IoKSAmJlxuICAgICAgICAgICAgIXRoaXMucHJvcHMuZGlzYWJsZUFjdGlvbkJ1dHRvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0KSB0aGlzLnByb3BzLm9uRm91bmQodGhpcy5wcm9wcy5hc3NldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFzc2V0U2VsZWN0KHNlbGVjdGVkX2Fzc2V0KSB7XG4gICAgICAgIGlmIChzZWxlY3RlZF9hc3NldCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvdW5kKHNlbGVjdGVkX2Fzc2V0KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2VsZWN0ZWRfYXNzZXQuZ2V0KFwic3ltYm9sXCIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uICYmXG4gICAgICAgICAgICAhdGhpcy5nZXRFcnJvcigpICYmXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5kaXNhYmxlQWN0aW9uQnV0dG9uXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXQpIHRoaXMucHJvcHMub25BY3Rpb24odGhpcy5wcm9wcy5hc3NldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7ZGlzYWJsZWQsIG5vTGFiZWx9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICBsZXQgbG9va3VwX2Rpc3BsYXk7XG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0KSB7XG4gICAgICAgICAgICAgICAgbG9va3VwX2Rpc3BsYXkgPSB0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWVycm9yICYmIHRoaXMucHJvcHMuYXNzZXRJbnB1dCkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYXNzZXQubm90X2ZvdW5kXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5hc3NldElucHV0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWN0aW9uX2NsYXNzID0gY2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5hc3NldCB8fCBlcnJvciB8fCB0aGlzLnByb3BzLmRpc2FibGVBY3Rpb25CdXR0b25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtc2VsZWN0b3JcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yIHx8IG5vTGFiZWwgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyaWdodC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgPHNwYW4+e2xvb2t1cF9kaXNwbGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuaW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYXNzZXRJbnB1dCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldHMuc3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ1c2VyX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGhpcy5wcm9wcy50YWJJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXNzZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXREcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5yZWZDYWxsYmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQXNzZXRTZWxlY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9uQWN0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGlvbl9jbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY3Rpb24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMuYWN0aW9uX2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYXJlYVwiIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7d29yZEJyZWFrOiBcImJyZWFrLWFsbFwifX0+e2Vycm9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEFzc2V0U2VsZWN0b3IpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOzs7O0FBaEVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTJEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBOzs7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQVFBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBSkE7QUFZQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBZ0JBOzs7O0FBMUZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQTBGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFMQTtBQUNBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7Ozs7QUExQkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBMEJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFsQkE7QUFxQkE7Ozs7QUE5QkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQThCQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUEvQkE7QUFEQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUF2REE7QUFEQTtBQThEQTs7OztBQWhMQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQURBO0FBY0E7QUFEQTtBQUNBO0FBb0tBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=