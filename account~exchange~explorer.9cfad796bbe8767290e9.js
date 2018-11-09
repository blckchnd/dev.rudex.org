(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 2449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquivalentValueComponent", function() { return EquivalentValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceValueComponent", function() { return BalanceValueComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1006);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(877);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(878);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1224);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(569);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1273);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1276);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1275);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1272);
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
                    "div",
                    {
                        className: "tooltip inline-block",
                        "data-place": "bottom",
                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.no_price"),
                        style: { fontSize: "0.9rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "account.no_price" })
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

/***/ 2463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1224);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
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

/***/ 2464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(418);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(878);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FloatingDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1226);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1006);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(525);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1224);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(730);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZX5leHBsb3Jlci45Y2ZhZDc5NmJiZTg3NjcyOTBlOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRTZWxlY3Rvci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0IE1hcmtldFN0YXRzQ2hlY2sgZnJvbSBcIi4vTWFya2V0U3RhdHNDaGVja1wiO1xuaW1wb3J0IE1hcmtldFV0aWxzIGZyb20gXCJjb21tb24vbWFya2V0X3V0aWxzXCI7XG5cbi8qKlxuICogIEdpdmVuIGFuIGFzc2V0IGFtb3VudCwgZGlzcGxheXMgdGhlIGVxdWl2YWxlbnQgdmFsdWUgaW4gYmFzZUFzc2V0IGlmIHBvc3NpYmxlXG4gKlxuICogIEV4cGVjdHMgdGhyZWUgcHJvcGVydGllc1xuICogIC0ndG9Bc3NldCcgd2hpY2ggc2hvdWxkIGJlIGEgYXNzZXQgaWRcbiAqICAtJ2Zyb21Bc3NldCcgd2hpY2ggaXMgdGhlIGFzc2V0IGlkIG9mIHRoZSBvcmlnaW5hbCBhc3NldCBhbW91bnRcbiAqICAtJ2Ftb3VudCcgd2hpY2ggaXMgdGhlIGFtb3VudCB0byBjb252ZXJ0XG4gKiAgLSdmdWxsUHJlY2lzaW9uJyBib29sZWFuIHRvIHRlbGwgaWYgdGhlIGFtb3VudCB1c2VzIHRoZSBmdWxsIHByZWNpc2lvbiBvZiB0aGUgYXNzZXRcbiAqL1xuXG5jbGFzcyBWYWx1ZUNvbXBvbmVudCBleHRlbmRzIE1hcmtldFN0YXRzQ2hlY2sge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGZ1bGxQcmVjaXNpb246IHRydWUsXG4gICAgICAgIG5vRGVjaW1hbHM6IGZhbHNlLFxuICAgICAgICBmdWxsRGVjaW1hbHM6IGZhbHNlLFxuICAgICAgICBoaWRlX2Fzc2V0OiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIFJlYWN0VG9vbHRpcC5yZWJ1aWxkKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobnApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnAucHVsc2F0ZSwgdGhpcy5wcm9wcy5wdWxzYXRlKSB8fFxuICAgICAgICAgICAgbnAudG9Bc3NldCAhPT0gdGhpcy5wcm9wcy50b0Fzc2V0IHx8XG4gICAgICAgICAgICBucC5mcm9tQXNzZXQgIT09IHRoaXMucHJvcHMuZnJvbUFzc2V0IHx8XG4gICAgICAgICAgICBucC5hbW91bnQgIT09IHRoaXMucHJvcHMuYW1vdW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b0Fzc2V0LFxuICAgICAgICAgICAgZnJvbUFzc2V0LFxuICAgICAgICAgICAgZnVsbFByZWNpc2lvbixcbiAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzLFxuICAgICAgICAgICAgY29yZUFzc2V0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gTWFya2V0VXRpbHMuY29udmVydFZhbHVlKFxuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgdG9Bc3NldCxcbiAgICAgICAgICAgIGZyb21Bc3NldCxcbiAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzLFxuICAgICAgICAgICAgY29yZUFzc2V0LFxuICAgICAgICAgICAgZnVsbFByZWNpc2lvblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthbW91bnQsIHRvQXNzZXQsIGZyb21Bc3NldCwgZnVsbFByZWNpc2lvbiwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHRvSUQgPSB0b0Fzc2V0LmdldChcImlkXCIpO1xuICAgICAgICBsZXQgdG9TeW1ib2wgPSB0b0Fzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICBpZiAoIWZ1bGxQcmVjaXNpb24pIHtcbiAgICAgICAgICAgIGFtb3VudCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQoYW1vdW50LCBmcm9tQXNzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVxVmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgICAgaWYgKCFlcVZhbHVlICYmIGVxVmFsdWUgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwIGlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5ub19wcmljZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIwLjlyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lm5vX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgbm9QcmVmaXhcbiAgICAgICAgICAgICAgICBhbW91bnQ9e2VxVmFsdWV9XG4gICAgICAgICAgICAgICAgYXNzZXQ9e3RvSUR9XG4gICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17XG4gICAgICAgICAgICAgICAgICAgIHRvU3ltYm9sLmluZGV4T2YoXCJCVENcIikgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5mdWxsRGVjaW1hbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMubm9EZWNpbWFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRvQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdG9Bc3NldC5nZXQoXCJwcmVjaXNpb25cIikgLSAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblZhbHVlQ29tcG9uZW50ID0gQXNzZXRXcmFwcGVyKFZhbHVlQ29tcG9uZW50LCB7XG4gICAgcHJvcE5hbWVzOiBbXCJ0b0Fzc2V0XCIsIFwiZnJvbUFzc2V0XCIsIFwiY29yZUFzc2V0XCJdLFxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB0b0Fzc2V0OiBcIjEuMy4wXCIsXG4gICAgICAgIGNvcmVBc3NldDogXCIxLjMuMFwiXG4gICAgfVxufSk7XG5cbmNsYXNzIEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3JlZkNhbGxiYWNrLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gPFZhbHVlQ29tcG9uZW50IHsuLi5vdGhlcnN9IHJlZj17cmVmQ2FsbGJhY2t9IC8+O1xuICAgIH1cbn1cblxuRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50ID0gY29ubmVjdChcbiAgICBFcXVpdmFsZW50VmFsdWVDb21wb25lbnQsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbTWFya2V0c1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmNsYXNzIEJhbGFuY2VWYWx1ZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYmFsYW5jZTogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2JhbGFuY2UsIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpc0JhbGFuY2VPYmplY3QgPSAhIWJhbGFuY2UuZ2V0SW4oW1wiYmFsYW5jZVwiLCBcImFtb3VudFwiXSk7XG5cbiAgICAgICAgbGV0IGFtb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgIGlzQmFsYW5jZU9iamVjdFxuICAgICAgICAgICAgICAgID8gYmFsYW5jZS5nZXRJbihbXCJiYWxhbmNlXCIsIFwiYW1vdW50XCJdKVxuICAgICAgICAgICAgICAgIDogYmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpXG4gICAgICAgICk7XG4gICAgICAgIGxldCBmcm9tQXNzZXQgPSBpc0JhbGFuY2VPYmplY3RcbiAgICAgICAgICAgID8gYmFsYW5jZS5nZXRJbihbXCJiYWxhbmNlXCIsIFwiYXNzZXRfaWRcIl0pXG4gICAgICAgICAgICA6IGJhbGFuY2UuZ2V0KFwiYXNzZXRfdHlwZVwiKTtcbiAgICAgICAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiA8c3Bhbj4tLTwvc3Bhbj47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgZnJvbUFzc2V0PXtmcm9tQXNzZXR9XG4gICAgICAgICAgICAgICAgbm9EZWNpbWFscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5CYWxhbmNlVmFsdWVDb21wb25lbnQgPSBCaW5kVG9DaGFpblN0YXRlKEJhbGFuY2VWYWx1ZUNvbXBvbmVudCwge1xuICAgIGtlZXBfdXBkYXRpbmc6IHRydWVcbn0pO1xuZXhwb3J0IHtFcXVpdmFsZW50VmFsdWVDb21wb25lbnQsIEJhbGFuY2VWYWx1ZUNvbXBvbmVudH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jbGFzcyBBc3NldEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogdHJ1ZSxcbiAgICAgICAgbWF4V2lkdGg6IDIwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1nRXJyb3I6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCAhPT0gbnAuYXNzZXQgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4V2lkdGggIT09IG5wLm1heFdpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLndoaXRlTGlzdCAhPT0gbnAud2hpdGVMaXN0IHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmltZ0Vycm9yICE9PSBucy5pbWdFcnJvclxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlTm9uZVRvQnRzKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmc1tcbiAgICAgICAgICAgICAgICAgICAgaW1nTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgXS5zcmMgPSBgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy9idHMucG5nYDtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBmdW5jdGlvbiBnZXRJbWFnZU5hbWUoYXNzZXQpIHtcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBhc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgLy8gaWYgKHN5bWJvbCA9PT0gXCJPUEVOLkJUQ1wiIHx8IHN5bWJvbCA9PT0gXCJHREVYLkJUQ1wiKSByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgLy8gaWYgKHN5bWJvbC5zdGFydHNXaXRoKFwiRVNDUk9XLlwiKSkgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGxldCBpbWdOYW1lID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgIC8vcmV0dXJuIGltZ05hbWUubGVuZ3RoID09PSAyID8gaW1nTmFtZVsxXSA6IGltZ05hbWVbMF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWdOYW1lID0gZ2V0SW1hZ2VOYW1lKGFzc2V0KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogdGhpcy5wcm9wcy5tYXhXaWR0aCwgbWFyZ2luUmlnaHQ6IDV9fVxuICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRJbWFnZSA9IEFzc2V0V3JhcHBlcihBc3NldEltYWdlKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRJbWFnZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxBc3NldEltYWdlIHsuLi50aGlzLnByb3BzfSBhc3NldD17dGhpcy5wcm9wcy5uYW1lfSAvPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluVmFsaWRhdGlvbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgRmxvYXRpbmdEcm9wZG93biBmcm9tIFwiLi9GbG9hdGluZ0Ryb3Bkb3duXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4vQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIEFzc2V0RHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhc3NldCBpZFxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldHMubGVuZ3RoID09PSAwIHx8ICF0aGlzLnByb3BzLnZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGbG9hdGluZ0Ryb3Bkb3duXG4gICAgICAgICAgICAgICAgZW50cmllcz17dGhpcy5wcm9wcy5hc3NldHNcbiAgICAgICAgICAgICAgICAgICAgLm1hcChhID0+IGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpfVxuICAgICAgICAgICAgICAgIHZhbHVlcz17dGhpcy5wcm9wcy5hc3NldHMucmVkdWNlKChtYXAsIGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpIG1hcFthLmdldChcInN5bWJvbFwiKV0gPSBhO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgIH0sIHt9KX1cbiAgICAgICAgICAgICAgICBzaW5nbGVFbnRyeT17XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRzWzBdID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXRzWzBdLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Ftb3VudD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtcIlwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0RHJvcGRvd24gPSBBc3NldFdyYXBwZXIoQXNzZXREcm9wZG93biwge2FzTGlzdDogdHJ1ZX0pO1xuXG4vKipcbiAqIEBicmllZiBBbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXIgYW4gYWNjb3VudCBieSBuYW1lIG9yICNJRFxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGRlc2lnbmVkIHRvIGJlIHN0YXRlbGVzcyBhcyBwb3NzaWJsZS4gIEl0J3MgcHJpbWFyeSByZXNwb25zYmlsaXR5IGlzIHRvXG4gKiBtYW5hZ2UgdGhlIGxheW91dCBvZiBkYXRhIGFuZCB0byBmaWx0ZXIgdGhlIHVzZXIgaW5wdXQuXG4gKlxuICovXG5cbmNsYXNzIEFzc2V0U2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhIHRyYW5zbGF0aW9uIGtleSBmb3IgdGhlIGxhYmVsXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgZXJyb3IgbWVzc2FnZSBvdmVycmlkZVxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIHBsYWNlaG9sZGVyIHRleHQgdG8gYmUgZGlzcGxheWVkIHdoZW4gdGhlcmUgaXMgbm8gdXNlcl9pbnB1dFxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIHRvIGJlIGNhbGxlZCBhbnkgdGltZSB1c2VyIGlucHV0IGNoYW5nZXNcbiAgICAgICAgb25Gb3VuZDogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGV4aXN0aW5nIGFjY291bnQgaXMgc2VsZWN0ZWRcbiAgICAgICAgYXNzZXRJbnB1dDogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGFjY291bnQgc2VsZWN0b3IsIHRoZSBzdHJpbmcgdGhlIHVzZXIgZW50ZXJzXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQsIC8vIGFjY291bnQgb2JqZWN0IHJldHJpZXZlZCB2aWEgQmluZFRvQ2hhaW5TdGF0ZSBkZWNvcmF0b3IgKG5vdCBpbnB1dClcbiAgICAgICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsIC8vIHRhYmluZGV4IHByb3BlcnR5IHRvIGJlIHBhc3NlZCB0byBpbnB1dCB0YWdcbiAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbjogUHJvcFR5cGVzLmJvb2wgLy8gdXNlIGl0IGlmIHlvdSBuZWVkIHRvIGRpc2FibGUgYWN0aW9uIGJ1dHRvblxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gY2FuIGJlIHVzZWQgaW4gcGFyZW50IGNvbXBvbmVudDogdGhpcy5yZWZzLmFzc2V0X3NlbGVjdG9yLmdldEFzc2V0KClcbiAgICBnZXRBc3NldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYXNzZXQ7XG4gICAgfVxuXG4gICAgZ2V0RXJyb3IoaW5wdXQgPSB0aGlzLnByb3BzLmFzc2V0SW5wdXQpIHtcbiAgICAgICAgbGV0IGVycm9yID0gdGhpcy5wcm9wcy5lcnJvcjtcbiAgICAgICAgaWYgKCFlcnJvciAmJiBpbnB1dCAmJiAhdGhpcy5nZXROYW1lVHlwZShpbnB1dCkpXG4gICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmFzc2V0LmludmFsaWRcIiwge1xuICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGdldE5hbWVUeXBlKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICAvLyBpZih2YWx1ZVswXSA9PT0gXCIjXCIgJiYgdXRpbHMuaXNfb2JqZWN0X2lkKFwiMS4yLlwiICsgdmFsdWUuc3Vic3RyaW5nKDEpKSkgcmV0dXJuIFwiaWRcIjtcbiAgICAgICAgaWYgKCFDaGFpblZhbGlkYXRpb24uaXNfdmFsaWRfc3ltYm9sX2Vycm9yKHZhbHVlLCB0cnVlKSlcbiAgICAgICAgICAgIHJldHVybiBcInN5bWJvbFwiO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlZChldmVudCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgIC5zdWJzdHIoMCwgMTYpXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKTsgLy8udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdmFsdWUgIT09IHRoaXMucHJvcHMuYXNzZXRJbnB1dClcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMub25Gb3VuZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aW9uKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvdW5kICYmIHRoaXMucHJvcHMuYXNzZXQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm91bmQodGhpcy5wcm9wcy5hc3NldCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZvdW5kICYmIG5ld1Byb3BzLmFzc2V0ICE9PSB0aGlzLnByb3BzLmFzc2V0KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvdW5kKG5ld1Byb3BzLmFzc2V0KTtcbiAgICB9XG5cbiAgICBvbkZvdW5kKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm91bmQgJiZcbiAgICAgICAgICAgICF0aGlzLmdldEVycm9yKCkgJiZcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmRpc2FibGVBY3Rpb25CdXR0b25cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCkgdGhpcy5wcm9wcy5vbkZvdW5kKHRoaXMucHJvcHMuYXNzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Bc3NldFNlbGVjdChzZWxlY3RlZF9hc3NldCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRfYXNzZXQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb3VuZChzZWxlY3RlZF9hc3NldCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNlbGVjdGVkX2Fzc2V0LmdldChcInN5bWJvbFwiKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFjdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGlvbiAmJlxuICAgICAgICAgICAgIXRoaXMuZ2V0RXJyb3IoKSAmJlxuICAgICAgICAgICAgIXRoaXMucHJvcHMuZGlzYWJsZUFjdGlvbkJ1dHRvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0KSB0aGlzLnByb3BzLm9uQWN0aW9uKHRoaXMucHJvcHMuYXNzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Rpc2FibGVkLCBub0xhYmVsfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBlcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgbGV0IGxvb2t1cF9kaXNwbGF5O1xuICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCkge1xuICAgICAgICAgICAgICAgIGxvb2t1cF9kaXNwbGF5ID0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFlcnJvciAmJiB0aGlzLnByb3BzLmFzc2V0SW5wdXQpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmFzc2V0Lm5vdF9mb3VuZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuYXNzZXRJbnB1dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjdGlvbl9jbGFzcyA9IGNsYXNzbmFtZXMoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuYXNzZXQgfHwgZXJyb3IgfHwgdGhpcy5wcm9wcy5kaXNhYmxlQWN0aW9uQnV0dG9uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LXNlbGVjdG9yXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvciB8fCBub0xhYmVsID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IDxzcGFuPntsb29rdXBfZGlzcGxheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmlucHV0U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFzc2V0SW5wdXQgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXRzLnN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwidXNlcl9pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFzc2V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvcHMucmVmQ2FsbGJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17SW1tdXRhYmxlLkxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFzc2V0U2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vbkFjdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3Rpb25fY2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWN0aW9uLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnByb3BzLmFjdGlvbl9sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWFyZWFcIiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3dvcmRCcmVhazogXCJicmVhay1hbGxcIn19PntlcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShBc3NldFNlbGVjdG9yKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTs7O0FBUUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFRQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBZ0JBOzs7O0FBdkZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQXVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFMQTtBQUNBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7Ozs7QUExQkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBMEJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7Ozs7QUFoRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBMkRBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFsQkE7QUFxQkE7Ozs7QUE5QkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQThCQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUEvQkE7QUFEQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUF2REE7QUFEQTtBQThEQTs7OztBQWhMQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQURBO0FBY0E7QUFEQTtBQUNBO0FBb0tBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=