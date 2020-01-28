(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[13],{

/***/ 2784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2129);
/* harmony import */ var _Utility_MarketLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2785);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2145);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(602);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(605);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(587);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(420);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2125);
/* harmony import */ var _Utility_withWorthLessSettlementFlag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2786);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2469);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(736);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(571);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2126);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var WorthLessSettlementWarning = Object(_Utility_withWorthLessSettlementFlag__WEBPACK_IMPORTED_MODULE_12__["default"])(function (_ref) {
    var worthLessSettlement = _ref.worthLessSettlement,
        asset = _ref.asset,
        shortBackingAsset = _ref.shortBackingAsset,
        marketPrice = _ref.marketPrice,
        settlementPrice = _ref.settlementPrice;

    marketPrice = common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].format_number(marketPrice, asset.get("precision"));
    settlementPrice = common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].format_number(settlementPrice, asset.get("precision"));
    switch (worthLessSettlement) {
        case true:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    component: "h2",
                    content: "exchange.settle_better_marketprice"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__["default"], {
                        string: "exchange.worth_less_settlement_warning",
                        keys: [{
                            value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                base: asset.get("id"),
                                quote: shortBackingAsset.get("id")
                            }),
                            arg: "market_link"
                        }]
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    "\xA0\xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price_market" }),
                    ":\xA0\xA0",
                    marketPrice,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    "\xA0\xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settle" }),
                    ":\xA0\xA0",
                    settlementPrice
                )
            );
        case undefined:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.checking_for_worth_less_settlement" });
        default:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    component: "h2",
                    content: "exchange.settle_better_settleprice"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__["default"], {
                        string: "exchange.settlement_hint",
                        keys: [{
                            value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                base: asset.get("id"),
                                quote: shortBackingAsset.get("id")
                            }),
                            arg: "market_link"
                        }, {
                            value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                name: asset.get("symbol")
                            }),
                            arg: "long"
                        }]
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    "\xA0\xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price_market" }),
                    ":\xA0\xA0",
                    marketPrice,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    "\xA0\xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settle" }),
                    ":\xA0\xA0",
                    settlementPrice
                )
            );
    }
});

var ModalContent = function (_React$Component) {
    _inherits(ModalContent, _React$Component);

    function ModalContent() {
        _classCallCheck(this, ModalContent);

        var _this = _possibleConstructorReturn(this, (ModalContent.__proto__ || Object.getPrototypeOf(ModalContent)).call(this));

        _this.state = {
            amount: 0
        };

        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }

    _createClass(ModalContent, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (!!np.asset && !!this.props.asset && np.asset.get("id") !== this.props.asset.get("id")) {
                this.setState({
                    amount: 0
                });
            }
        }
    }, {
        key: "getSettlementInfo",
        value: function getSettlementInfo() {
            var _props = this.props,
                getDynamicObject = _props.getDynamicObject,
                asset = _props.asset,
                core = _props.core;

            var dynamic = getDynamicObject(asset.get("dynamic_asset_data_id"));
            var currentSupply = dynamic && dynamic.size ? dynamic.get("current_supply") : 0;
            var maintenanceInterval = core && core.size ? core.getIn(["parameters", "maintenance_interval"]) : 0;
            var bitAsset = asset.get("bitasset").toJS();
            var currentSettled = bitAsset.force_settled_volume;
            var maxSettlementVolume = currentSupply * (bitAsset.options.maximum_force_settlement_volume / 10000);
            var remainingVolume = !currentSettled ? maxSettlementVolume : maxSettlementVolume - currentSettled;
            var settlementDelay = bitAsset.options.force_settlement_delay_sec;
            return {
                maxSettlementVolume: maxSettlementVolume,
                remainingVolume: remainingVolume,
                maintenanceInterval: maintenanceInterval,
                settlementDelay: settlementDelay
            };
        }
    }, {
        key: "onAmountChanged",
        value: function onAmountChanged(_ref2) {
            var amount = _ref2.amount,
                asset = _ref2.asset;

            this.setState({ amount: amount });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            var amount = this.state.amount;

            e.preventDefault();

            this.props.hideModal();

            amount = parseInt(amount * Math.pow(10, this.props.asset.get("precision")));

            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_7__["default"].new_transaction();
            tr.add_type_operation("asset_settle", {
                fee: {
                    amount: 0,
                    asset_id: 0
                },
                account: this.props.account.get("id"),
                amount: {
                    amount: amount,
                    asset_id: this.props.asset.get("id")
                }
            });
            return stores_WalletDb__WEBPACK_IMPORTED_MODULE_8__["default"].process_transaction(tr, null, true).then(function (result) {
                // console.log("asset settle result:", result);
                // this.dispatch(account_id);
                return true;
            }).catch(function (error) {
                console.error("asset settle error: ", error);
                return false;
            });
        }
    }, {
        key: "_useMaxValue",
        value: function _useMaxValue(amount) {
            this.setState({
                amount: amount / Math.pow(10, this.props.asset.get("precision"))
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                asset = _props2.asset,
                account = _props2.account;
            var amount = this.state.amount;


            if (!asset) {
                return null;
            }

            var options = asset && asset.getIn(["bitasset", "options"]) ? asset.getIn(["bitasset", "options"]).toJS() : null;

            var isGlobalSettled = asset.get("bitasset").get("settlement_fund") > 0 ? true : false;

            var offset = 0;
            if (!isGlobalSettled) {
                offset = asset.get("bitasset").get("options").get("force_settlement_offset_percent") / 100;
            }

            // TODO
            // Check if force_settled_volume exceeds maximum_force_settlement_volume
            // Requires Dynamic Object for Total Supply
            // var maxSettlementVolume = asset.get("bitasset").get("options").get("maximum_force_settlement_volume");
            // var currentSettled = asset.get("bitasset").get("force_settled_volume");

            var assetID = asset.get("id");

            var account_balances = account.get("balances");

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].replaceName(asset),
                assetName = _utils$replaceName.name,
                prefix = _utils$replaceName.prefix;

            var assetFullName = (prefix ? prefix : "") + assetName;

            var currentBalance = null,
                balanceAmount = 0;

            account_balances && account_balances.forEach(function (balance) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getObject(balance);
                if (!balanceObject.get("balance")) {
                    return null;
                }
                if (balanceObject.get("asset_type") === assetID) {
                    currentBalance = balance;
                    balanceAmount = balanceObject.get("balance");
                }
            });

            var balanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.balance" }),
                ":\xA0",
                currentBalance ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    {
                        className: "underline",
                        onClick: this._useMaxValue.bind(this, balanceAmount)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__["default"], { balance: currentBalance })
                ) : "0 " + asset.get("symbol")
            );

            var isFundsToLow = false;
            if (amount > balanceAmount / Math.pow(10, this.props.asset.get("precision"))) {
                isFundsToLow = true;
            }

            var footer = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                {
                    title: isFundsToLow ? counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.lack_funds") : null
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Button"],
                    {
                        key: "submit",
                        type: "primary",
                        onClick: this.onSubmit,
                        disabled: isFundsToLow
                    },
                    counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("modal.settle.submit")
                )
            ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Button"],
                { key: "close", onClick: this.props.hideModal },
                counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("modal.close")
            )];

            var _getSettlementInfo = this.getSettlementInfo(),
                maxSettlementVolume = _getSettlementInfo.maxSettlementVolume,
                remainingVolume = _getSettlementInfo.remainingVolume,
                settlementDelay = _getSettlementInfo.settlementDelay,
                maintenanceInterval = _getSettlementInfo.maintenanceInterval;

            var estimatedDelay = !isGlobalSettled ? (settlementDelay + Math.floor(amount / maxSettlementVolume) * maintenanceInterval) / 3600 : 0;

            var isPredictionMarket = asset.getIn(["bitasset", "is_prediction_market"]);

            var modalContent = isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Alert"], {
                message: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.settle_market_prediction"),
                type: "info",
                showIcon: true
            }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                isGlobalSettled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Alert"], {
                    message: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("exchange.settle_delay_globally_settled"),
                    type: "warning",
                    showIcon: true
                }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Alert"], {
                    message: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("exchange.settle_delay", {
                        hours: options.force_settlement_delay_sec / 3600
                    }),
                    description: estimatedDelay ? counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("modal.settle.delay", {
                        amount: estimatedDelay
                    }) : null,
                    type: "info",
                    showIcon: true
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorthLessSettlementWarning, { asset: assetID }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                !isGlobalSettled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    component: "div",
                    content: "exchange.settle_offset",
                    offset: offset
                }) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Form"],
                    { className: "full-width", layout: "vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        label: "modal.settle.amount",
                        amount: amount,
                        onChange: this.onAmountChanged.bind(this),
                        display_balance: balanceText,
                        asset: assetID,
                        assets: [assetID],
                        tabIndex: 1,
                        style: amount > remainingVolume ? { "margin-bottom": "0" } : {}
                    }),
                    amount > remainingVolume ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            className: "facolor-info",
                            content: "modal.settle.max_volume",
                            amount: maxSettlementVolume,
                            asset: assetFullName
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            className: "facolor-info",
                            content: "modal.settle.remaining_volume",
                            amount: remainingVolume,
                            asset: assetFullName
                        })
                    ) : null
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("modal.settle.title", {
                        asset: assetFullName
                    }),
                    visible: this.props.visible,
                    id: this.props.modalId,
                    footer: !isPredictionMarket ? footer : null,
                    onCancel: this.props.hideModal,
                    overlay: true,
                    ref: "settlement_modal"
                },
                modalContent
            );
        }
    }]);

    return ModalContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ModalContent.propTypes = {
    asset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map),
    core: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map),
    account: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map)
};
ModalContent.defaultProps = {
    asset: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map(),
    core: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map(),
    account: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map()
};


ModalContent = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_16__["default"])(ModalContent, {
    propNames: ["asset", "core"],
    withDynamic: true,
    defaultProps: { core: "2.0.0" }
});

var SettleModal = function (_React$Component2) {
    _inherits(SettleModal, _React$Component2);

    function SettleModal() {
        _classCallCheck(this, SettleModal);

        return _possibleConstructorReturn(this, (SettleModal.__proto__ || Object.getPrototypeOf(SettleModal)).apply(this, arguments));
    }

    _createClass(SettleModal, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalContent, this.props);
        }
    }]);

    return SettleModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SettleModal);

/***/ }),

/***/ 2785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1846);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2002);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2126);
/* harmony import */ var _AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2129);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2368);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 *  Given a base and quote asset, render a link to that market
 *
 *  Expected Properties:
 *     base:  asset id, which will be fetched from the ChainStore
 *     quote: either an asset id or a balance id
 *
 */

var MarketLink = function (_React$Component) {
    _inherits(MarketLink, _React$Component);

    function MarketLink() {
        _classCallCheck(this, MarketLink);

        return _possibleConstructorReturn(this, (MarketLink.__proto__ || Object.getPrototypeOf(MarketLink)).apply(this, arguments));
    }

    _createClass(MarketLink, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                base = _props.base,
                quote = _props.quote;

            if (base.get("id") === quote.get("id")) {
                return null;
            }
            var marketID = quote.get("symbol") + "_" + base.get("symbol");
            var marketName = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: quote.get("symbol") }),
                " /",
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: base.get("symbol") })
            );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                {
                    to: "/market/" + marketID,
                    onClick: function onClick() {
                        return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].switchMarket();
                    }
                },
                marketName
            );
        }
    }]);

    return MarketLink;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketLink = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(MarketLink, {
    propNames: ["quote", "base"],
    defaultProps: { base: "1.3.0" }
});

/*
This hangs the page on MarketLink import with firefox 62.0

class ObjectWrapper extends React.Component {
    static propTypes = {
        object: ChainTypes.ChainObject.isRequired
    };

    render() {
        let {object} = this.props;
        let quoteAsset = object.has("asset_type")
            ? object.get("asset_type")
            : object.get("id");

        return <MarketLink quote={quoteAsset} />;
    }
}
ObjectWrapper = BindToChainState(ObjectWrapper);

MarketLink.ObjectWrapper = ObjectWrapper;
*/

/* harmony default export */ __webpack_exports__["default"] = (MarketLink);

/***/ }),

/***/ 2786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(489);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2126);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(598);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(582);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var withShortBackingAsset = function withShortBackingAsset(WrappedComponent) {
    var WrappedComponentWithShortBackingAsset = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(WrappedComponent, { propNames: ["shortBackingAsset"] });
    return Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponentWithShortBackingAsset, _extends({}, props, {
            shortBackingAsset: props.asset.getIn(["bitasset", "options", "short_backing_asset"])
        }));
    });
};

var withWorthLessSettlementFlag = function withWorthLessSettlementFlag(WrappedComponent) {
    return withShortBackingAsset(function (_PureComponent) {
        _inherits(_class2, _PureComponent);

        function _class2() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, _class2);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.state = { worthLessSettlement: undefined }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(_class2, [{
            key: "updateFlag",
            value: function updateFlag() {
                var _this2 = this;

                var _props = this.props,
                    asset = _props.asset,
                    shortBackingAsset = _props.shortBackingAsset;

                var assetId = asset.get("id");
                var shortBackingAssetId = shortBackingAsset.get("id");

                // TODO: maybe properly subscribe to market instead of calling api directly?
                var realMarketPricePromise = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__["Apis"].instance().db_api().exec("get_order_book", [shortBackingAssetId, assetId, 1]).then(function (orderBook) {
                    return orderBook.bids.length === 0 ? 0 : Number(orderBook.bids[0].price);
                });

                var feedPrice = null;
                var factor = 1;
                var offset = 0;
                if (!!asset.get("bitasset") && asset.get("bitasset").get("settlement_fund") > 0) {
                    // if globally settled, feed price == settlement price
                    feedPrice = asset.get("bitasset").get("settlement_price");
                } else {
                    feedPrice = _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_4__["default"].extractRawFeedPrice(asset);
                    offset = asset.get("bitasset").get("options").get("force_settlement_offset_percent");
                    factor = 1 - offset / 10000;
                }

                var realSettlementPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Price"]({
                    base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                        asset_id: shortBackingAssetId,
                        amount: feedPrice.getIn(["quote", "amount"]),
                        preicision: shortBackingAsset.get("precision")
                    }),
                    quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                        asset_id: assetId,
                        amount: feedPrice.getIn(["base", "amount"]),
                        precision: asset.get("precision")
                    })
                }).toReal() * factor;

                // TODO: compare fractional price instead of real price
                realMarketPricePromise.then(function (realMarketPrice) {
                    return _this2.setState({
                        worthLessSettlement: realMarketPrice > realSettlementPrice,
                        marketPrice: realMarketPrice,
                        settlementPrice: realSettlementPrice
                    });
                });
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.updateFlag();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.updateFlag();
            }
        }, {
            key: "render",
            value: function render() {
                var props = this.props,
                    _state = this.state,
                    worthLessSettlement = _state.worthLessSettlement,
                    marketPrice = _state.marketPrice,
                    settlementPrice = _state.settlementPrice;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({}, props, {
                    worthLessSettlement: worthLessSettlement,
                    marketPrice: marketPrice,
                    settlementPrice: settlementPrice
                }));
            }
        }]);

        return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
};

/* harmony default export */ __webpack_exports__["default"] = (withWorthLessSettlementFlag);

/***/ }),

/***/ 2858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(571);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2003);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2002);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2370);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(587);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2132);
/* harmony import */ var common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2340);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2341);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1986);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(731);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1886);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(725);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(726);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2354);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(736);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var SimpleDepositBlocktradesBridge = function (_React$Component) {
    _inherits(SimpleDepositBlocktradesBridge, _React$Component);

    function SimpleDepositBlocktradesBridge(props) {
        _classCallCheck(this, SimpleDepositBlocktradesBridge);

        var _this = _possibleConstructorReturn(this, (SimpleDepositBlocktradesBridge.__proto__ || Object.getPrototypeOf(SimpleDepositBlocktradesBridge)).call(this));

        _this.state = {
            inputCoinType: props.inputCoinType || _this.props.preferredBridge,
            outputCoinType: props.outputCoinType,
            receiveAmount: 0,
            depositLimit: 0,
            sendAmount: 0,
            toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_7__["WithdrawAddresses"].getLast(props.walletType),
            withdrawValue: "",
            amountError: null,
            inputAmount: 0,
            receiveLoading: false,
            limitLoading: true,
            apiError: false
        };

        _this._validateAddress(_this.state.toAddress, props);

        _this.deposit_address_cache = new common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_8__["default"]();
        return _this;
    }

    _createClass(SimpleDepositBlocktradesBridge, [{
        key: "onClose",
        value: function onClose() {
            this.props.hideModal();
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._getDepositAddress(this.props);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._getDepositLimit(this.props);
            this._estimateOutput(this.props);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.inputCoinType !== this.props.inputCoinType || np.outputCoinType !== this.props.outputCoinType) {
                this.setState({
                    inputCoinType: np.inputCoinType,
                    outputCoinType: np.outputCoinType
                });
                this._getDepositLimit(np);
                this._estimateOutput(np);
                this._getDepositAddress(np);
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a.rebuild();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            if (this.state.inputCoinType !== ns.inputCoinType || this.state.outputCoinType !== ns.outputCoinType) {
                this._getDepositLimit(ns);
                this._estimateOutput(ns);
                this._getDepositAddress(ns);
            }

            return np.inputCoinType !== this.props.inputCoinType || np.outputCoinType !== this.props.outputCoinType || np.sender !== this.props.sender || np.asset !== this.props.asset || np.isAvailable !== this.props.isAvailable || np.isDown !== this.props.isDown || !common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "_getDepositAddress",
        value: function _getDepositAddress(data) {
            var receive_address = void 0;

            /* Always generate new address/memo for increased security */
            /*let account_name = props.sender.get("name");
            let receive_address = this.deposit_address_cache.getCachedInputAddress(
                "blocktrades",
                account_name,
                props.inputCoinType.toLowerCase(),
                props.outputCoinType.toLowerCase()
            );*/
            if (!receive_address) {
                this.setState({ receive_address: null });
                Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_7__["requestDepositAddress"])(this._getDepositObject(data));
            } else {
                this.setState({
                    receive_address: receive_address
                });
            }
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject(data) {
            var _this2 = this;

            var inputCoinType = data.inputCoinType,
                outputCoinType = data.outputCoinType;

            return {
                inputCoinType: inputCoinType.toLowerCase(),
                outputCoinType: outputCoinType.toLowerCase(),
                outputAddress: this.props.sender.get("name"),
                url: api_apiConfig__WEBPACK_IMPORTED_MODULE_11__["blockTradesAPIs"].BASE,
                stateCallback: function stateCallback(receive_address) {
                    _this2.addDepositAddress(inputCoinType.toLowerCase(), outputCoinType.toLowerCase(), _this2.props.sender.get("name"), receive_address);
                }
            };
        }
    }, {
        key: "_getDepositLimit",
        value: function _getDepositLimit(data) {
            var _this3 = this;

            var inputCoinType = data.inputCoinType,
                outputCoinType = data.outputCoinType;


            this.setState({ limitLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_7__["getDepositLimit"])(inputCoinType.toLowerCase(), outputCoinType.toLowerCase()).then(function (res) {
                _this3.setState({
                    depositLimit: res.depositLimit,
                    limitLoading: false
                });
            }).catch(function (err) {
                console.log("deposit limit error:", err);
                _this3.setState({
                    depositLimit: null,
                    limitLoading: false
                });
            });
        }
    }, {
        key: "_onAmountChange",
        value: function _onAmountChange(type, e) {
            var value = e.target.value;

            var regexp_numeral = new RegExp(/[[:digit:]]/);

            // Ensure input is valid
            if (!regexp_numeral.test(value)) {
                value = value.replace(/[^0-9.]/g, "");
            }

            // Catch initial decimal input
            if (value.charAt(0) == ".") {
                value = "0.";
            }

            // Catch double decimal and remove if invalid
            if (value.charAt(value.length) != value.search(".")) {
                value.substr(1);
            }

            value = common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].limitByPrecision(value, 8);

            switch (type) {
                case "input":
                    this.setState({ inputAmount: value }, this._estimateOutput.bind(this));
                    break;

                case "output":
                    this.setState({ outputAmount: value }, this._estimateInput.bind(this));
                    break;
            }
        }
    }, {
        key: "_estimateOutput",
        value: function _estimateOutput() {
            var _this4 = this;

            var _state = this.state,
                inputAmount = _state.inputAmount,
                inputCoinType = _state.inputCoinType,
                outputCoinType = _state.outputCoinType;


            this.setState({ receiveAmount: 0, sendAmount: inputAmount });
            if (!inputAmount) return;

            this.setState({ receiveLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_7__["estimateOutput"])(inputAmount, inputCoinType.toLowerCase(), outputCoinType.toLowerCase()).then(function (res) {
                _this4.setState({
                    inputAmount: res.inputAmount,
                    receiveAmount: res.outputAmount,
                    receiveLoading: false
                });
            }).catch(function (err) {
                console.log("receive amount err:", err);
                _this4.setState({ receiveLoading: false, apiError: true });
            });
        }
    }, {
        key: "_estimateInput",
        value: function _estimateInput() {
            var _this5 = this;

            var _state2 = this.state,
                outputAmount = _state2.outputAmount,
                inputCoinType = _state2.inputCoinType,
                outputCoinType = _state2.outputCoinType;


            this.setState({ receiveAmount: outputAmount, sendAmount: 0 });
            if (!outputAmount) return;

            this.setState({ receiveLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_7__["estimateInput"])(outputAmount, inputCoinType.toLowerCase(), outputCoinType.toLowerCase()).then(function (res) {
                console.log(res);
                _this5.setState({
                    inputAmount: res.inputAmount,
                    sendAmount: common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].limitByPrecision(res.inputAmount, 8),
                    receiveLoading: false
                });
            }).catch(function (err) {
                console.log("send amount err:", err);
                _this5.setState({ receiveLoading: false, apiError: true });
            });
        }
    }, {
        key: "addDepositAddress",
        value: function addDepositAddress(input_coin_type, output_coin_type, account, receive_address) {
            this.deposit_address_cache.cacheInputAddress("blocktrades", account, input_coin_type, output_coin_type, receive_address.address, receive_address.memo);
            this.setState({
                receive_address: receive_address
            });
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(address) {
            var _this6 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_7__["validateAddress"])({ walletType: props.walletType, newAddress: address }).then(function (isValid) {
                if (_this6.state.toAddress === address) {
                    _this6.setState({
                        withdraw_address_check_in_progress: false,
                        validAddress: isValid
                    });
                }
            }).catch(function (err) {
                console.error("Error when validating address:", err);
            });
        }
    }, {
        key: "_setDepositAsset",
        value: function _setDepositAsset(value) {
            this.setState({
                inputCoinType: value
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_14__["default"].changeViewSetting({ preferredBridge: value });
        }
    }, {
        key: "_renderDeposit",
        value: function _renderDeposit() {
            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName.name,
                prefix = _utils$replaceName.prefix;

            var _state3 = this.state,
                receive_address = _state3.receive_address,
                apiError = _state3.apiError;

            var hasMemo = receive_address && "memo" in receive_address && receive_address.memo;
            var addressValue = receive_address && receive_address.address || "";
            var QR = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "QR", style: { textAlign: "center" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_15___default.a, { size: 140, value: addressValue })
            );

            var bridgeAssets = Object.keys(this.props.bridges.toJS());

            var inputName = this.state.inputCoinType.toUpperCase();
            var receiveName = (prefix ? prefix : "") + assetName;

            var price = (this.state.receiveAmount / this.state.inputAmount).toFixed(4);
            var priceSuffix = receiveName + "/" + inputName;

            var aboveLimit = this.state.inputAmount > parseFloat(this.state.depositLimit) || this.state.sendAmount > parseFloat(this.state.depositLimit);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "modal__body", style: { paddingTop: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"],
                    { className: "full-width", layout: "vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"].Item,
                        { label: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("modal.buy.asset") },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Input"], { disabled: true, value: receiveName })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"].Item,
                        {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("modal.buy.bridge")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.bridge_TRADE")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Input"], {
                                disabled: true,
                                type: "text",
                                defaultValue: "BLOCKTRADES"
                            })
                        )
                    )
                ),
                !apiError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "small-12 medium-6",
                                style: { paddingRight: 5 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"],
                                { className: "full-width", layout: "vertical" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"].Item,
                                    {
                                        label: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("transfer.send"),
                                        validateStatus: aboveLimit ? "error" : "",
                                        help: aboveLimit ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("gateway.over_limit") : ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Input"], {
                                        value: this.state.sendAmount,
                                        onChange: this._onAmountChange.bind(this, "input"),
                                        addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"],
                                            {
                                                defaultValue: this.state.inputCoinType.toUpperCase(),
                                                value: this.state.inputCoinType.toUpperCase(),
                                                style: { width: 100 },
                                                onChange: this._setDepositAsset.bind(this)
                                            },
                                            bridgeAssets.map(function (asset) {
                                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option,
                                                    {
                                                        key: asset.toUpperCase()
                                                    },
                                                    asset.toUpperCase()
                                                );
                                            })
                                        )
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "small-12 medium-6",
                                style: { paddingRight: 5 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"],
                                { className: "full-width", layout: "vertical" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"].Item,
                                    {
                                        label: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("gateway.deposit_limit")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Input"], {
                                        value: this.state.depositLimit,
                                        disabled: true,
                                        addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"],
                                            {
                                                defaultValue: this.state.inputCoinType.toUpperCase(),
                                                value: this.state.inputCoinType.toUpperCase(),
                                                style: { width: 100 },
                                                disabled: true,
                                                showArrow: false
                                            },
                                            bridgeAssets.map(function (asset) {
                                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option,
                                                    {
                                                        key: asset.toUpperCase()
                                                    },
                                                    asset.toUpperCase()
                                                );
                                            })
                                        )
                                    })
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "small-12 medium-6",
                                style: { paddingRight: 5 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"],
                                { className: "full-width", layout: "vertical" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"].Item,
                                    {
                                        label: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.receive")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Input"], {
                                        value: this.state.receiveAmount,
                                        onChange: this._onAmountChange.bind(this, "output"),
                                        addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"],
                                            {
                                                defaultValue: receiveName,
                                                value: receiveName,
                                                style: { width: 100 },
                                                disabled: true,
                                                showArrow: false
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option,
                                                {
                                                    key: receiveName
                                                },
                                                receiveName
                                            )
                                        )
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "small-12 medium-6",
                                style: { paddingRight: 5 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"],
                                { className: "full-width", layout: "vertical" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Form"].Item,
                                    {
                                        label: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.price")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Input"], {
                                        value: aboveLimit || isNaN(price) ? 0 : price,
                                        disabled: true,
                                        addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"],
                                            {
                                                defaultValue: priceSuffix,
                                                value: priceSuffix,
                                                style: { width: 125 },
                                                disabled: true,
                                                showArrow: false
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Select"].Option,
                                                {
                                                    key: priceSuffix
                                                },
                                                priceSuffix
                                            )
                                        )
                                    })
                                )
                            )
                        )
                    ),
                    !addressValue ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { textAlign: "center" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "three-bounce" })
                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "container-row" },
                        hasMemo ? null : QR,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "copyIcon" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    text: addressValue,
                                    className: "copyIcon"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    component: "div",
                                    style: {
                                        fontSize: "0.8rem",
                                        fontWeight: "bold",
                                        paddingBottom: "0.3rem"
                                    },
                                    content: "gateway.purchase_notice",
                                    inputAsset: inputName,
                                    outputAsset: receiveName
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "modal__highlight" },
                                    addressValue
                                )
                            )
                        ),
                        hasMemo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "grid-block",
                                style: { marginTop: "10px" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "copyIcon" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    text: receive_address.memo,
                                    className: "copyIcon"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                    unsafe: true,
                                    content: "gateway.purchase_notice_memo",
                                    component: "div",
                                    style: {
                                        fontSize: "0.8rem",
                                        fontWeight: "bold",
                                        paddingBottom: "0.3rem"
                                    }
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "modal__highlight" },
                                    receive_address.memo
                                )
                            )
                        ) : null
                    )
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "modal.deposit.address_generation_error" })
            );
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            if (!asset) {
                return null;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical no-overflow" },
                this.props.isDown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.unavailable_TRADE",
                        component: "p"
                    })
                ) : !this.props.isAvailable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.unavailable",
                        component: "p"
                    })
                ) : this._renderDeposit()
            );
        }
    }]);

    return SimpleDepositBlocktradesBridge;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SimpleDepositBlocktradesBridge.propTypes = {
    sender: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAsset.isRequired
};

SimpleDepositBlocktradesBridge = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(SimpleDepositBlocktradesBridge);

var StoreWrapper = function (_React$Component2) {
    _inherits(StoreWrapper, _React$Component2);

    function StoreWrapper() {
        _classCallCheck(this, StoreWrapper);

        return _possibleConstructorReturn(this, (StoreWrapper.__proto__ || Object.getPrototypeOf(StoreWrapper)).apply(this, arguments));
    }

    _createClass(StoreWrapper, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                preferredBridge = _props.preferredBridge,
                others = _objectWithoutProperties(_props, ["preferredBridge"]);

            var currentBridge = this.props.bridges.get(this.props.preferredBridge);
            if (!currentBridge) {
                currentBridge = this.props.bridges.first();
                preferredBridge = currentBridge.inputCoinType;
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SimpleDepositBlocktradesBridge, _extends({
                hideModal: this.props.hideModal
            }, others, {
                preferredBridge: preferredBridge
            }, currentBridge.toJS()));
        }
    }]);

    return StoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

StoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_12__["connect"])(StoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_13__["default"]];
    },
    getProps: function getProps() {
        return {
            preferredBridge: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_13__["default"].getState().viewSettings.get("preferredBridge", "btc")
        };
    }
});

var SimpleDepositBlocktradesBridgeModal = function (_React$Component3) {
    _inherits(SimpleDepositBlocktradesBridgeModal, _React$Component3);

    function SimpleDepositBlocktradesBridgeModal() {
        _classCallCheck(this, SimpleDepositBlocktradesBridgeModal);

        return _possibleConstructorReturn(this, (SimpleDepositBlocktradesBridgeModal.__proto__ || Object.getPrototypeOf(SimpleDepositBlocktradesBridgeModal)).apply(this, arguments));
    }

    _createClass(SimpleDepositBlocktradesBridgeModal, [{
        key: "render",
        value: function render() {
            if (!this.props.bridges) return null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("modal.buy.title"),
                    visible: this.props.visible,
                    onCancel: this.props.hideModal,
                    footer: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Button"],
                        { key: "cancel", onClick: this.props.hideModal },
                        counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("modal.close")
                    )]
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StoreWrapper, _extends({}, this.props, { open: this.props.visible }))
            );
        }
    }]);

    return SimpleDepositBlocktradesBridgeModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleDepositBlocktradesBridgeModal);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZS4xNTkyNmUzYjYwYzkwZGJhNTAwMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Nb2RhbC9TZXR0bGVNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvTWFya2V0TGluay5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvd2l0aFdvcnRoTGVzc1NldHRsZW1lbnRGbGFnLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL1NpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBNYXJrZXRMaW5rIGZyb20gXCIuLi9VdGlsaXR5L01hcmtldExpbmtcIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgV2FsbGV0QXBpIGZyb20gXCJhcGkvV2FsbGV0QXBpXCI7XHJcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5pbXBvcnQgd2l0aFdvcnRoTGVzc1NldHRsZW1lbnRGbGFnIGZyb20gXCIuLi9VdGlsaXR5L3dpdGhXb3J0aExlc3NTZXR0bGVtZW50RmxhZ1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xyXG5pbXBvcnQge0FsZXJ0LCBGb3JtLCBNb2RhbCwgQnV0dG9uLCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XHJcblxyXG5jb25zdCBXb3J0aExlc3NTZXR0bGVtZW50V2FybmluZyA9IHdpdGhXb3J0aExlc3NTZXR0bGVtZW50RmxhZyhcclxuICAgICh7XHJcbiAgICAgICAgd29ydGhMZXNzU2V0dGxlbWVudCxcclxuICAgICAgICBhc3NldCxcclxuICAgICAgICBzaG9ydEJhY2tpbmdBc3NldCxcclxuICAgICAgICBtYXJrZXRQcmljZSxcclxuICAgICAgICBzZXR0bGVtZW50UHJpY2VcclxuICAgIH0pID0+IHtcclxuICAgICAgICBtYXJrZXRQcmljZSA9IHV0aWxzLmZvcm1hdF9udW1iZXIobWFya2V0UHJpY2UsIGFzc2V0LmdldChcInByZWNpc2lvblwiKSk7XHJcbiAgICAgICAgc2V0dGxlbWVudFByaWNlID0gdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgc2V0dGxlbWVudFByaWNlLFxyXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICApO1xyXG4gICAgICAgIHN3aXRjaCAod29ydGhMZXNzU2V0dGxlbWVudCkge1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5zZXR0bGVfYmV0dGVyX21hcmtldHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZXhjaGFuZ2Uud29ydGhfbGVzc19zZXR0bGVtZW50X3dhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXthc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3Nob3J0QmFja2luZ0Fzc2V0LmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIm1hcmtldF9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlX21hcmtldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc2V0dGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXR0bGVtZW50UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jaGVja2luZ19mb3Jfd29ydGhfbGVzc19zZXR0bGVtZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5zZXR0bGVfYmV0dGVyX3NldHRsZXByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZXhjaGFuZ2Uuc2V0dGxlbWVudF9oaW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtzaG9ydEJhY2tpbmdBc3NldC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJtYXJrZXRfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibG9uZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZV9tYXJrZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNldHRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGxlbWVudFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmNsYXNzIE1vZGFsQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFzc2V0OiBQcm9wVHlwZXMuaW5zdGFuY2VPZihJbW11dGFibGUuTWFwKSxcclxuICAgICAgICBjb3JlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihJbW11dGFibGUuTWFwKSxcclxuICAgICAgICBhY2NvdW50OiBQcm9wVHlwZXMuaW5zdGFuY2VPZihJbW11dGFibGUuTWFwKVxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGFzc2V0OiBJbW11dGFibGUuTWFwKCksXHJcbiAgICAgICAgY29yZTogSW1tdXRhYmxlLk1hcCgpLFxyXG4gICAgICAgIGFjY291bnQ6IEltbXV0YWJsZS5NYXAoKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFtb3VudDogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgISFucC5hc3NldCAmJlxyXG4gICAgICAgICAgICAhIXRoaXMucHJvcHMuYXNzZXQgJiZcclxuICAgICAgICAgICAgbnAuYXNzZXQuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNldHRsZW1lbnRJbmZvKCkge1xyXG4gICAgICAgIGNvbnN0IHtnZXREeW5hbWljT2JqZWN0LCBhc3NldCwgY29yZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGR5bmFtaWMgPSBnZXREeW5hbWljT2JqZWN0KGFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFN1cHBseSA9XHJcbiAgICAgICAgICAgIGR5bmFtaWMgJiYgZHluYW1pYy5zaXplID8gZHluYW1pYy5nZXQoXCJjdXJyZW50X3N1cHBseVwiKSA6IDA7XHJcbiAgICAgICAgY29uc3QgbWFpbnRlbmFuY2VJbnRlcnZhbCA9XHJcbiAgICAgICAgICAgIGNvcmUgJiYgY29yZS5zaXplXHJcbiAgICAgICAgICAgICAgICA/IGNvcmUuZ2V0SW4oW1wicGFyYW1ldGVyc1wiLCBcIm1haW50ZW5hbmNlX2ludGVydmFsXCJdKVxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIGNvbnN0IGJpdEFzc2V0ID0gYXNzZXQuZ2V0KFwiYml0YXNzZXRcIikudG9KUygpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXR0bGVkID0gYml0QXNzZXQuZm9yY2Vfc2V0dGxlZF92b2x1bWU7XHJcbiAgICAgICAgY29uc3QgbWF4U2V0dGxlbWVudFZvbHVtZSA9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdXBwbHkgKlxyXG4gICAgICAgICAgICAoYml0QXNzZXQub3B0aW9ucy5tYXhpbXVtX2ZvcmNlX3NldHRsZW1lbnRfdm9sdW1lIC8gMTAwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1ZvbHVtZSA9ICFjdXJyZW50U2V0dGxlZFxyXG4gICAgICAgICAgICA/IG1heFNldHRsZW1lbnRWb2x1bWVcclxuICAgICAgICAgICAgOiBtYXhTZXR0bGVtZW50Vm9sdW1lIC0gY3VycmVudFNldHRsZWQ7XHJcbiAgICAgICAgY29uc3Qgc2V0dGxlbWVudERlbGF5ID0gYml0QXNzZXQub3B0aW9ucy5mb3JjZV9zZXR0bGVtZW50X2RlbGF5X3NlYztcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtYXhTZXR0bGVtZW50Vm9sdW1lLFxyXG4gICAgICAgICAgICByZW1haW5pbmdWb2x1bWUsXHJcbiAgICAgICAgICAgIG1haW50ZW5hbmNlSW50ZXJ2YWwsXHJcbiAgICAgICAgICAgIHNldHRsZW1lbnREZWxheVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25BbW91bnRDaGFuZ2VkKHthbW91bnQsIGFzc2V0fSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Ftb3VudDogYW1vdW50fSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZSkge1xyXG4gICAgICAgIGxldCB7YW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xyXG5cclxuICAgICAgICBhbW91bnQgPSBwYXJzZUludChcclxuICAgICAgICAgICAgYW1vdW50ICogTWF0aC5wb3coMTAsIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciB0ciA9IFdhbGxldEFwaS5uZXdfdHJhbnNhY3Rpb24oKTtcclxuICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24oXCJhc3NldF9zZXR0bGVcIiwge1xyXG4gICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gV2FsbGV0RGIucHJvY2Vzc190cmFuc2FjdGlvbih0ciwgbnVsbCwgdHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXNzZXQgc2V0dGxlIHJlc3VsdDpcIiwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGlzcGF0Y2goYWNjb3VudF9pZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJhc3NldCBzZXR0bGUgZXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF91c2VNYXhWYWx1ZShhbW91bnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgLyBNYXRoLnBvdygxMCwgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIikpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7YXNzZXQsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQge2Ftb3VudH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoIWFzc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPVxyXG4gICAgICAgICAgICBhc3NldCAmJiBhc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcIm9wdGlvbnNcIl0pXHJcbiAgICAgICAgICAgICAgICA/IGFzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwib3B0aW9uc1wiXSkudG9KUygpXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgICAgIGxldCBpc0dsb2JhbFNldHRsZWQgPVxyXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJiaXRhc3NldFwiKS5nZXQoXCJzZXR0bGVtZW50X2Z1bmRcIikgPiAwID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICBpZiAoIWlzR2xvYmFsU2V0dGxlZCkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPVxyXG4gICAgICAgICAgICAgICAgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KFwiYml0YXNzZXRcIilcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KFwib3B0aW9uc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoXCJmb3JjZV9zZXR0bGVtZW50X29mZnNldF9wZXJjZW50XCIpIC8gMTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGZvcmNlX3NldHRsZWRfdm9sdW1lIGV4Y2VlZHMgbWF4aW11bV9mb3JjZV9zZXR0bGVtZW50X3ZvbHVtZVxyXG4gICAgICAgIC8vIFJlcXVpcmVzIER5bmFtaWMgT2JqZWN0IGZvciBUb3RhbCBTdXBwbHlcclxuICAgICAgICAvLyB2YXIgbWF4U2V0dGxlbWVudFZvbHVtZSA9IGFzc2V0LmdldChcImJpdGFzc2V0XCIpLmdldChcIm9wdGlvbnNcIikuZ2V0KFwibWF4aW11bV9mb3JjZV9zZXR0bGVtZW50X3ZvbHVtZVwiKTtcclxuICAgICAgICAvLyB2YXIgY3VycmVudFNldHRsZWQgPSBhc3NldC5nZXQoXCJiaXRhc3NldFwiKS5nZXQoXCJmb3JjZV9zZXR0bGVkX3ZvbHVtZVwiKTtcclxuXHJcbiAgICAgICAgbGV0IGFzc2V0SUQgPSBhc3NldC5nZXQoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB7bmFtZTogYXNzZXROYW1lLCBwcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUoYXNzZXQpO1xyXG4gICAgICAgIGNvbnN0IGFzc2V0RnVsbE5hbWUgPSAocHJlZml4ID8gcHJlZml4IDogXCJcIikgKyBhc3NldE5hbWU7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50QmFsYW5jZSA9IG51bGwsXHJcbiAgICAgICAgICAgIGJhbGFuY2VBbW91bnQgPSAwO1xyXG5cclxuICAgICAgICBhY2NvdW50X2JhbGFuY2VzICYmXHJcbiAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXMuZm9yRWFjaChiYWxhbmNlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QuZ2V0KFwiYXNzZXRfdHlwZVwiKSA9PT0gYXNzZXRJRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCYWxhbmNlID0gYmFsYW5jZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlQW1vdW50ID0gYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGJhbGFuY2VUZXh0ID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmJhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRCYWxhbmNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3VzZU1heFZhbHVlLmJpbmQodGhpcywgYmFsYW5jZUFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXtjdXJyZW50QmFsYW5jZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMCBcIiArIGFzc2V0LmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBpc0Z1bmRzVG9Mb3cgPSBmYWxzZTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGFtb3VudCA+XHJcbiAgICAgICAgICAgIGJhbGFuY2VBbW91bnQgLyBNYXRoLnBvdygxMCwgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIikpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlzRnVuZHNUb0xvdyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmb290ZXIgPSBbXHJcbiAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGdW5kc1RvTG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5sYWNrX2Z1bmRzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtcInN1Ym1pdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Z1bmRzVG9Mb3d9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLnNldHRsZS5zdWJtaXRcIil9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPixcclxuICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e1wiY2xvc2VcIn0gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLmNsb3NlXCIpfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG1heFNldHRsZW1lbnRWb2x1bWUsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZ1ZvbHVtZSxcclxuICAgICAgICAgICAgc2V0dGxlbWVudERlbGF5LFxyXG4gICAgICAgICAgICBtYWludGVuYW5jZUludGVydmFsXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0U2V0dGxlbWVudEluZm8oKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXN0aW1hdGVkRGVsYXkgPSAhaXNHbG9iYWxTZXR0bGVkXHJcbiAgICAgICAgICAgID8gKHNldHRsZW1lbnREZWxheSArXHJcbiAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoYW1vdW50IC8gbWF4U2V0dGxlbWVudFZvbHVtZSkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFpbnRlbmFuY2VJbnRlcnZhbCkgL1xyXG4gICAgICAgICAgICAgIDM2MDBcclxuICAgICAgICAgICAgOiAwO1xyXG5cclxuICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSBhc3NldC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGxldCBtb2RhbENvbnRlbnQgPSBpc1ByZWRpY3Rpb25NYXJrZXQgPyAoXHJcbiAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5zZXR0bGVfbWFya2V0X3ByZWRpY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgIHNob3dJY29uXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAge2lzR2xvYmFsU2V0dGxlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5zZXR0bGVfZGVsYXlfZ2xvYmFsbHlfc2V0dGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ljb25cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5zZXR0bGVfZGVsYXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Vyczogb3B0aW9ucy5mb3JjZV9zZXR0bGVtZW50X2RlbGF5X3NlYyAvIDM2MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0aW1hdGVkRGVsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLnNldHRsZS5kZWxheVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBlc3RpbWF0ZWREZWxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8V29ydGhMZXNzU2V0dGxlbWVudFdhcm5pbmcgYXNzZXQ9e2Fzc2V0SUR9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHshaXNHbG9iYWxTZXR0bGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnNldHRsZV9vZmZzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9e29mZnNldH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIm1vZGFsLnNldHRsZS5hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldElEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1thc3NldElEXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCA+IHJlbWFpbmluZ1ZvbHVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1wibWFyZ2luLWJvdHRvbVwiOiBcIjBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHthbW91bnQgPiByZW1haW5pbmdWb2x1bWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNvbG9yLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJtb2RhbC5zZXR0bGUubWF4X3ZvbHVtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXttYXhTZXR0bGVtZW50Vm9sdW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldEZ1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhY29sb3ItaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIm1vZGFsLnNldHRsZS5yZW1haW5pbmdfdm9sdW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3JlbWFpbmluZ1ZvbHVtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXRGdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuc2V0dGxlLnRpdGxlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXRGdWxsTmFtZVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5tb2RhbElkfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXshaXNQcmVkaWN0aW9uTWFya2V0ID8gZm9vdGVyIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICByZWY9XCJzZXR0bGVtZW50X21vZGFsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21vZGFsQ29udGVudH1cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Nb2RhbENvbnRlbnQgPSBBc3NldFdyYXBwZXIoTW9kYWxDb250ZW50LCB7XHJcbiAgICBwcm9wTmFtZXM6IFtcImFzc2V0XCIsIFwiY29yZVwiXSxcclxuICAgIHdpdGhEeW5hbWljOiB0cnVlLFxyXG4gICAgZGVmYXVsdFByb3BzOiB7Y29yZTogXCIyLjAuMFwifVxyXG59KTtcclxuXHJcbmNsYXNzIFNldHRsZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPE1vZGFsQ29udGVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRsZU1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuL0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiAgR2l2ZW4gYSBiYXNlIGFuZCBxdW90ZSBhc3NldCwgcmVuZGVyIGEgbGluayB0byB0aGF0IG1hcmtldFxyXG4gKlxyXG4gKiAgRXhwZWN0ZWQgUHJvcGVydGllczpcclxuICogICAgIGJhc2U6ICBhc3NldCBpZCwgd2hpY2ggd2lsbCBiZSBmZXRjaGVkIGZyb20gdGhlIENoYWluU3RvcmVcclxuICogICAgIHF1b3RlOiBlaXRoZXIgYW4gYXNzZXQgaWQgb3IgYSBiYWxhbmNlIGlkXHJcbiAqXHJcbiAqL1xyXG5cclxuY2xhc3MgTWFya2V0TGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtiYXNlLCBxdW90ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChiYXNlLmdldChcImlkXCIpID09PSBxdW90ZS5nZXQoXCJpZFwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hcmtldElEID0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpICsgXCJfXCIgKyBiYXNlLmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICBsZXQgbWFya2V0TmFtZSA9IChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX0gLz4gL3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17YmFzZS5nZXQoXCJzeW1ib2xcIil9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz17YC9tYXJrZXQvJHttYXJrZXRJRH1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gTWFya2V0c0FjdGlvbnMuc3dpdGNoTWFya2V0KCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttYXJrZXROYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuTWFya2V0TGluayA9IEFzc2V0V3JhcHBlcihNYXJrZXRMaW5rLCB7XHJcbiAgICBwcm9wTmFtZXM6IFtcInF1b3RlXCIsIFwiYmFzZVwiXSxcclxuICAgIGRlZmF1bHRQcm9wczoge2Jhc2U6IFwiMS4zLjBcIn1cclxufSk7XHJcblxyXG4vKlxyXG5UaGlzIGhhbmdzIHRoZSBwYWdlIG9uIE1hcmtldExpbmsgaW1wb3J0IHdpdGggZmlyZWZveCA2Mi4wXHJcblxyXG5jbGFzcyBPYmplY3RXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgb2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7b2JqZWN0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHF1b3RlQXNzZXQgPSBvYmplY3QuaGFzKFwiYXNzZXRfdHlwZVwiKVxyXG4gICAgICAgICAgICA/IG9iamVjdC5nZXQoXCJhc3NldF90eXBlXCIpXHJcbiAgICAgICAgICAgIDogb2JqZWN0LmdldChcImlkXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gPE1hcmtldExpbmsgcXVvdGU9e3F1b3RlQXNzZXR9IC8+O1xyXG4gICAgfVxyXG59XHJcbk9iamVjdFdyYXBwZXIgPSBCaW5kVG9DaGFpblN0YXRlKE9iamVjdFdyYXBwZXIpO1xyXG5cclxuTWFya2V0TGluay5PYmplY3RXcmFwcGVyID0gT2JqZWN0V3JhcHBlcjtcclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtldExpbms7XHJcbiIsImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xyXG5cclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IHtBc3NldCwgUHJpY2V9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQgYXNzZXRfdXRpbHMgZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vYXNzZXRfdXRpbHNcIjtcclxuXHJcbmNvbnN0IHdpdGhTaG9ydEJhY2tpbmdBc3NldCA9IFdyYXBwZWRDb21wb25lbnQgPT4ge1xyXG4gICAgY29uc3QgV3JhcHBlZENvbXBvbmVudFdpdGhTaG9ydEJhY2tpbmdBc3NldCA9IEFzc2V0V3JhcHBlcihcclxuICAgICAgICBXcmFwcGVkQ29tcG9uZW50LFxyXG4gICAgICAgIHtwcm9wTmFtZXM6IFtcInNob3J0QmFja2luZ0Fzc2V0XCJdfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBBc3NldFdyYXBwZXIocHJvcHMgPT4gKFxyXG4gICAgICAgIDxXcmFwcGVkQ29tcG9uZW50V2l0aFNob3J0QmFja2luZ0Fzc2V0XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgc2hvcnRCYWNraW5nQXNzZXQ9e3Byb3BzLmFzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcclxuICAgICAgICAgICAgXSl9XHJcbiAgICAgICAgLz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuY29uc3Qgd2l0aFdvcnRoTGVzc1NldHRsZW1lbnRGbGFnID0gV3JhcHBlZENvbXBvbmVudCA9PlxyXG4gICAgd2l0aFNob3J0QmFja2luZ0Fzc2V0KFxyXG4gICAgICAgIGNsYXNzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICAgICAgICAgIHN0YXRlID0ge3dvcnRoTGVzc1NldHRsZW1lbnQ6IHVuZGVmaW5lZH07XHJcbiAgICAgICAgICAgIHVwZGF0ZUZsYWcoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7YXNzZXQsIHNob3J0QmFja2luZ0Fzc2V0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldElkID0gYXNzZXQuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG9ydEJhY2tpbmdBc3NldElkID0gc2hvcnRCYWNraW5nQXNzZXQuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogbWF5YmUgcHJvcGVybHkgc3Vic2NyaWJlIHRvIG1hcmtldCBpbnN0ZWFkIG9mIGNhbGxpbmcgYXBpIGRpcmVjdGx5P1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbE1hcmtldFByaWNlUHJvbWlzZSA9IEFwaXMuaW5zdGFuY2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYl9hcGkoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKFwiZ2V0X29yZGVyX2Jvb2tcIiwgW3Nob3J0QmFja2luZ0Fzc2V0SWQsIGFzc2V0SWQsIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlckJvb2sgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyQm9vay5iaWRzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogTnVtYmVyKG9yZGVyQm9vay5iaWRzWzBdLnByaWNlKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGZlZWRQcmljZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFjdG9yID0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICEhYXNzZXQuZ2V0KFwiYml0YXNzZXRcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJiaXRhc3NldFwiKS5nZXQoXCJzZXR0bGVtZW50X2Z1bmRcIikgPiAwXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBnbG9iYWxseSBzZXR0bGVkLCBmZWVkIHByaWNlID09IHNldHRsZW1lbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UgPSBhc3NldC5nZXQoXCJiaXRhc3NldFwiKS5nZXQoXCJzZXR0bGVtZW50X3ByaWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UgPSBhc3NldF91dGlscy5leHRyYWN0UmF3RmVlZFByaWNlKGFzc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFwiYml0YXNzZXRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcIm9wdGlvbnNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcImZvcmNlX3NldHRsZW1lbnRfb2Zmc2V0X3BlcmNlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjdG9yID0gMSAtIG9mZnNldCAvIDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxTZXR0bGVtZW50UHJpY2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcmljZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogc2hvcnRCYWNraW5nQXNzZXRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZmVlZFByaWNlLmdldEluKFtcInF1b3RlXCIsIFwiYW1vdW50XCJdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWljaXNpb246IHNob3J0QmFja2luZ0Fzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZmVlZFByaWNlLmdldEluKFtcImJhc2VcIiwgXCJhbW91bnRcIl0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KS50b1JlYWwoKSAqIGZhY3RvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBjb21wYXJlIGZyYWN0aW9uYWwgcHJpY2UgaW5zdGVhZCBvZiByZWFsIHByaWNlXHJcbiAgICAgICAgICAgICAgICByZWFsTWFya2V0UHJpY2VQcm9taXNlLnRoZW4ocmVhbE1hcmtldFByaWNlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcnRoTGVzc1NldHRsZW1lbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsTWFya2V0UHJpY2UgPiByZWFsU2V0dGxlbWVudFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRQcmljZTogcmVhbE1hcmtldFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0bGVtZW50UHJpY2U6IHJlYWxTZXR0bGVtZW50UHJpY2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZsYWcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZsYWcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHt3b3J0aExlc3NTZXR0bGVtZW50LCBtYXJrZXRQcmljZSwgc2V0dGxlbWVudFByaWNlfVxyXG4gICAgICAgICAgICAgICAgfSA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ydGhMZXNzU2V0dGxlbWVudD17d29ydGhMZXNzU2V0dGxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0UHJpY2U9e21hcmtldFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0bGVtZW50UHJpY2U9e3NldHRsZW1lbnRQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoV29ydGhMZXNzU2V0dGxlbWVudEZsYWc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7XHJcbiAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3MsXHJcbiAgICB2YWxpZGF0ZUFkZHJlc3MsXHJcbiAgICBXaXRoZHJhd0FkZHJlc3NlcyxcclxuICAgIGdldERlcG9zaXRMaW1pdCxcclxuICAgIGVzdGltYXRlT3V0cHV0LFxyXG4gICAgZXN0aW1hdGVJbnB1dFxyXG59IGZyb20gXCJjb21tb24vZ2F0ZXdheU1ldGhvZHNcIjtcclxuaW1wb3J0IEJsb2NrVHJhZGVzRGVwb3NpdEFkZHJlc3NDYWNoZSBmcm9tIFwiY29tbW9uL0Jsb2NrVHJhZGVzRGVwb3NpdEFkZHJlc3NDYWNoZVwiO1xyXG5pbXBvcnQgQ29weUJ1dHRvbiBmcm9tIFwiLi4vVXRpbGl0eS9Db3B5QnV0dG9uXCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7YmxvY2tUcmFkZXNBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZS5yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgRm9ybSxcclxuICAgIE1vZGFsLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIElucHV0LFxyXG4gICAgU2VsZWN0XHJcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5cclxuY2xhc3MgU2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgc2VuZGVyOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW5wdXRDb2luVHlwZTogcHJvcHMuaW5wdXRDb2luVHlwZSB8fCB0aGlzLnByb3BzLnByZWZlcnJlZEJyaWRnZSxcclxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGU6IHByb3BzLm91dHB1dENvaW5UeXBlLFxyXG4gICAgICAgICAgICByZWNlaXZlQW1vdW50OiAwLFxyXG4gICAgICAgICAgICBkZXBvc2l0TGltaXQ6IDAsXHJcbiAgICAgICAgICAgIHNlbmRBbW91bnQ6IDAsXHJcbiAgICAgICAgICAgIHRvQWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChwcm9wcy53YWxsZXRUeXBlKSxcclxuICAgICAgICAgICAgd2l0aGRyYXdWYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgYW1vdW50RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGlucHV0QW1vdW50OiAwLFxyXG4gICAgICAgICAgICByZWNlaXZlTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbWl0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYXBpRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVBZGRyZXNzKHRoaXMuc3RhdGUudG9BZGRyZXNzLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IEJsb2NrVHJhZGVzRGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdEFkZHJlc3ModGhpcy5wcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdExpbWl0KHRoaXMucHJvcHMpO1xyXG4gICAgICAgIHRoaXMuX2VzdGltYXRlT3V0cHV0KHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5wLmlucHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMuaW5wdXRDb2luVHlwZSB8fFxyXG4gICAgICAgICAgICBucC5vdXRwdXRDb2luVHlwZSAhPT0gdGhpcy5wcm9wcy5vdXRwdXRDb2luVHlwZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlucHV0Q29pblR5cGU6IG5wLmlucHV0Q29pblR5cGUsXHJcbiAgICAgICAgICAgICAgICBvdXRwdXRDb2luVHlwZTogbnAub3V0cHV0Q29pblR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2dldERlcG9zaXRMaW1pdChucCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VzdGltYXRlT3V0cHV0KG5wKTtcclxuICAgICAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdEFkZHJlc3MobnApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgUmVhY3RUb29sdGlwLnJlYnVpbGQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0Q29pblR5cGUgIT09IG5zLmlucHV0Q29pblR5cGUgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXRDb2luVHlwZSAhPT0gbnMub3V0cHV0Q29pblR5cGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdExpbWl0KG5zKTtcclxuICAgICAgICAgICAgdGhpcy5fZXN0aW1hdGVPdXRwdXQobnMpO1xyXG4gICAgICAgICAgICB0aGlzLl9nZXREZXBvc2l0QWRkcmVzcyhucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBucC5pbnB1dENvaW5UeXBlICE9PSB0aGlzLnByb3BzLmlucHV0Q29pblR5cGUgfHxcclxuICAgICAgICAgICAgbnAub3V0cHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMub3V0cHV0Q29pblR5cGUgfHxcclxuICAgICAgICAgICAgbnAuc2VuZGVyICE9PSB0aGlzLnByb3BzLnNlbmRlciB8fFxyXG4gICAgICAgICAgICBucC5hc3NldCAhPT0gdGhpcy5wcm9wcy5hc3NldCB8fFxyXG4gICAgICAgICAgICBucC5pc0F2YWlsYWJsZSAhPT0gdGhpcy5wcm9wcy5pc0F2YWlsYWJsZSB8fFxyXG4gICAgICAgICAgICBucC5pc0Rvd24gIT09IHRoaXMucHJvcHMuaXNEb3duIHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucywgdGhpcy5zdGF0ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXREZXBvc2l0QWRkcmVzcyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcztcclxuXHJcbiAgICAgICAgLyogQWx3YXlzIGdlbmVyYXRlIG5ldyBhZGRyZXNzL21lbW8gZm9yIGluY3JlYXNlZCBzZWN1cml0eSAqL1xyXG4gICAgICAgIC8qbGV0IGFjY291bnRfbmFtZSA9IHByb3BzLnNlbmRlci5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXHJcbiAgICAgICAgICAgIFwiYmxvY2t0cmFkZXNcIixcclxuICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxyXG4gICAgICAgICAgICBwcm9wcy5pbnB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIHByb3BzLm91dHB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKClcclxuICAgICAgICApOyovXHJcbiAgICAgICAgaWYgKCFyZWNlaXZlX2FkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzOiBudWxsfSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh0aGlzLl9nZXREZXBvc2l0T2JqZWN0KGRhdGEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldERlcG9zaXRPYmplY3QoZGF0YSkge1xyXG4gICAgICAgIGxldCB7aW5wdXRDb2luVHlwZSwgb3V0cHV0Q29pblR5cGV9ID0gZGF0YTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbnB1dENvaW5UeXBlOiBpbnB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIG91dHB1dENvaW5UeXBlOiBvdXRwdXRDb2luVHlwZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBvdXRwdXRBZGRyZXNzOiB0aGlzLnByb3BzLnNlbmRlci5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICB1cmw6IGJsb2NrVHJhZGVzQVBJcy5CQVNFLFxyXG4gICAgICAgICAgICBzdGF0ZUNhbGxiYWNrOiByZWNlaXZlX2FkZHJlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGREZXBvc2l0QWRkcmVzcyhcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRlci5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgX2dldERlcG9zaXRMaW1pdChkYXRhKSB7XHJcbiAgICAgICAgbGV0IHtpbnB1dENvaW5UeXBlLCBvdXRwdXRDb2luVHlwZX0gPSBkYXRhO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsaW1pdExvYWRpbmc6IHRydWV9KTtcclxuICAgICAgICBnZXREZXBvc2l0TGltaXQoXHJcbiAgICAgICAgICAgIGlucHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcG9zaXRMaW1pdDogcmVzLmRlcG9zaXRMaW1pdCxcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdExvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlcG9zaXQgbGltaXQgZXJyb3I6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkZXBvc2l0TGltaXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXRMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkFtb3VudENoYW5nZSh0eXBlLCBlKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZ2V4cF9udW1lcmFsID0gbmV3IFJlZ0V4cCgvW1s6ZGlnaXQ6XV0vKTtcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIGlucHV0IGlzIHZhbGlkXHJcbiAgICAgICAgaWYgKCFyZWdleHBfbnVtZXJhbC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teMC05Ll0vZywgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXRjaCBpbml0aWFsIGRlY2ltYWwgaW5wdXRcclxuICAgICAgICBpZiAodmFsdWUuY2hhckF0KDApID09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gXCIwLlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2F0Y2ggZG91YmxlIGRlY2ltYWwgYW5kIHJlbW92ZSBpZiBpbnZhbGlkXHJcbiAgICAgICAgaWYgKHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGgpICE9IHZhbHVlLnNlYXJjaChcIi5cIikpIHtcclxuICAgICAgICAgICAgdmFsdWUuc3Vic3RyKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsdWUgPSB1dGlscy5saW1pdEJ5UHJlY2lzaW9uKHZhbHVlLCA4KTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRBbW91bnQ6IHZhbHVlfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lc3RpbWF0ZU91dHB1dC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwib3V0cHV0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHtvdXRwdXRBbW91bnQ6IHZhbHVlfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lc3RpbWF0ZUlucHV0LmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2VzdGltYXRlT3V0cHV0KCkge1xyXG4gICAgICAgIGxldCB7aW5wdXRBbW91bnQsIGlucHV0Q29pblR5cGUsIG91dHB1dENvaW5UeXBlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVBbW91bnQ6IDAsIHNlbmRBbW91bnQ6IGlucHV0QW1vdW50fSk7XHJcbiAgICAgICAgaWYgKCFpbnB1dEFtb3VudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlTG9hZGluZzogdHJ1ZX0pO1xyXG4gICAgICAgIGVzdGltYXRlT3V0cHV0KFxyXG4gICAgICAgICAgICBpbnB1dEFtb3VudCxcclxuICAgICAgICAgICAgaW5wdXRDb2luVHlwZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBvdXRwdXRDb2luVHlwZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRBbW91bnQ6IHJlcy5pbnB1dEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50OiByZXMub3V0cHV0QW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNlaXZlIGFtb3VudCBlcnI6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlTG9hZGluZzogZmFsc2UsIGFwaUVycm9yOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9lc3RpbWF0ZUlucHV0KCkge1xyXG4gICAgICAgIGxldCB7b3V0cHV0QW1vdW50LCBpbnB1dENvaW5UeXBlLCBvdXRwdXRDb2luVHlwZX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlQW1vdW50OiBvdXRwdXRBbW91bnQsIHNlbmRBbW91bnQ6IDB9KTtcclxuICAgICAgICBpZiAoIW91dHB1dEFtb3VudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlTG9hZGluZzogdHJ1ZX0pO1xyXG4gICAgICAgIGVzdGltYXRlSW5wdXQoXHJcbiAgICAgICAgICAgIG91dHB1dEFtb3VudCxcclxuICAgICAgICAgICAgaW5wdXRDb2luVHlwZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBvdXRwdXRDb2luVHlwZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0QW1vdW50OiByZXMuaW5wdXRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEFtb3VudDogdXRpbHMubGltaXRCeVByZWNpc2lvbihyZXMuaW5wdXRBbW91bnQsIDgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kIGFtb3VudCBlcnI6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlTG9hZGluZzogZmFsc2UsIGFwaUVycm9yOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERlcG9zaXRBZGRyZXNzKFxyXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcclxuICAgICAgICBvdXRwdXRfY29pbl90eXBlLFxyXG4gICAgICAgIGFjY291bnQsXHJcbiAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5jYWNoZUlucHV0QWRkcmVzcyhcclxuICAgICAgICAgICAgXCJibG9ja3RyYWRlc1wiLFxyXG4gICAgICAgICAgICBhY2NvdW50LFxyXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGUsXHJcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzLFxyXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtb1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92YWxpZGF0ZUFkZHJlc3MoYWRkcmVzcywgcHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgdmFsaWRhdGVBZGRyZXNzKHt3YWxsZXRUeXBlOiBwcm9wcy53YWxsZXRUeXBlLCBuZXdBZGRyZXNzOiBhZGRyZXNzfSlcclxuICAgICAgICAgICAgLnRoZW4oaXNWYWxpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b0FkZHJlc3MgPT09IGFkZHJlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkQWRkcmVzczogaXNWYWxpZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHZhbGlkYXRpbmcgYWRkcmVzczpcIiwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldERlcG9zaXRBc3NldCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbnB1dENvaW5UeXBlOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe3ByZWZlcnJlZEJyaWRnZTogdmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyRGVwb3NpdCgpIHtcclxuICAgICAgICBjb25zdCB7bmFtZTogYXNzZXROYW1lLCBwcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUodGhpcy5wcm9wcy5hc3NldCk7XHJcbiAgICAgICAgY29uc3Qge3JlY2VpdmVfYWRkcmVzcywgYXBpRXJyb3J9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBoYXNNZW1vID1cclxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzICYmXHJcbiAgICAgICAgICAgIFwibWVtb1wiIGluIHJlY2VpdmVfYWRkcmVzcyAmJlxyXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtbztcclxuICAgICAgICBjb25zdCBhZGRyZXNzVmFsdWUgPSAocmVjZWl2ZV9hZGRyZXNzICYmIHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzKSB8fCBcIlwiO1xyXG4gICAgICAgIGNvbnN0IFFSID0gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlFSXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxRUkNvZGUgc2l6ZT17MTQwfSB2YWx1ZT17YWRkcmVzc1ZhbHVlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgYnJpZGdlQXNzZXRzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5icmlkZ2VzLnRvSlMoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IHRoaXMuc3RhdGUuaW5wdXRDb2luVHlwZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVOYW1lID0gKHByZWZpeCA/IHByZWZpeCA6IFwiXCIpICsgYXNzZXROYW1lO1xyXG5cclxuICAgICAgICBsZXQgcHJpY2UgPSAodGhpcy5zdGF0ZS5yZWNlaXZlQW1vdW50IC8gdGhpcy5zdGF0ZS5pbnB1dEFtb3VudCkudG9GaXhlZChcclxuICAgICAgICAgICAgNFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHByaWNlU3VmZml4ID0gcmVjZWl2ZU5hbWUgKyBcIi9cIiArIGlucHV0TmFtZTtcclxuXHJcbiAgICAgICAgY29uc3QgYWJvdmVMaW1pdCA9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRBbW91bnQgPiBwYXJzZUZsb2F0KHRoaXMuc3RhdGUuZGVwb3NpdExpbWl0KSB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmRBbW91bnQgPiBwYXJzZUZsb2F0KHRoaXMuc3RhdGUuZGVwb3NpdExpbWl0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fYm9keVwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMH19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuYnV5LmFzc2V0XCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVkIHZhbHVlPXtyZWNlaXZlTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC5idXkuYnJpZGdlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLmJyaWRnZV9UUkFERVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiQkxPQ0tUUkFERVNcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIHshYXBpRXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1vdmVyZmxvdyB3cmFwIHNocmlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdSaWdodDogNX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2Zlci5zZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvdmVMaW1pdCA/IFwiZXJyb3JcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3ZlTGltaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2F0ZXdheS5vdmVyX2xpbWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZW5kQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkFtb3VudENoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRDb2luVHlwZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRDb2luVHlwZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMTAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZXREZXBvc2l0QXNzZXQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnJpZGdlQXNzZXRzLm1hcChhc3NldCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthc3NldC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdSaWdodDogNX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnYXRld2F5LmRlcG9zaXRfbGltaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVwb3NpdExpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRDb2luVHlwZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRDb2luVHlwZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMTAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnJpZGdlQXNzZXRzLm1hcChhc3NldCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthc3NldC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1vdmVyZmxvdyB3cmFwIHNocmlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdSaWdodDogNX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5yZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlY2VpdmVBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQW1vdW50Q2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0cHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JlY2VpdmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlY2VpdmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMTAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjZWl2ZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IDV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm92ZUxpbWl0IHx8IGlzTmFOKHByaWNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3ByaWNlU3VmZml4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlU3VmZml4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMTI1fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJpY2VTdWZmaXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlU3VmZml4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWFkZHJlc3NWYWx1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc01lbW8gPyBudWxsIDogUVJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weUljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YWRkcmVzc1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvcHlJY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjAuM3JlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5wdXJjaGFzZV9ub3RpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0QXNzZXQ9e2lucHV0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRBc3NldD17cmVjZWl2ZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2hpZ2hsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZGRyZXNzVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc01lbW8gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5SWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3JlY2VpdmVfYWRkcmVzcy5tZW1vfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5SWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2FmZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5wdXJjaGFzZV9ub3RpY2VfbWVtb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwLjNyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faGlnaGxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlaXZlX2FkZHJlc3MubWVtb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibW9kYWwuZGVwb3NpdC5hZGRyZXNzX2dlbmVyYXRpb25fZXJyb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHthc3NldH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWFzc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0Rvd24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCBjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudW5hdmFpbGFibGVfVFJBREVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogIXRoaXMucHJvcHMuaXNBdmFpbGFibGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCBjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudW5hdmFpbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlckRlcG9zaXQoKVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5TaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2UgPSBCaW5kVG9DaGFpblN0YXRlKFxyXG4gICAgU2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlXHJcbik7XHJcblxyXG5jbGFzcyBTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cHJlZmVycmVkQnJpZGdlLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgY3VycmVudEJyaWRnZSA9IHRoaXMucHJvcHMuYnJpZGdlcy5nZXQodGhpcy5wcm9wcy5wcmVmZXJyZWRCcmlkZ2UpO1xyXG4gICAgICAgIGlmICghY3VycmVudEJyaWRnZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50QnJpZGdlID0gdGhpcy5wcm9wcy5icmlkZ2VzLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIHByZWZlcnJlZEJyaWRnZSA9IGN1cnJlbnRCcmlkZ2UuaW5wdXRDb2luVHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZVxyXG4gICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XHJcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRCcmlkZ2U9e3ByZWZlcnJlZEJyaWRnZX1cclxuICAgICAgICAgICAgICAgIHsuLi5jdXJyZW50QnJpZGdlLnRvSlMoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5TdG9yZVdyYXBwZXIgPSBjb25uZWN0KFxyXG4gICAgU3RvcmVXcmFwcGVyLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRCcmlkZ2U6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJlZmVycmVkQnJpZGdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJidGNcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYnJpZGdlcykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLmJ1eS50aXRsZVwiKX1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiY2FuY2VsXCIgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuY2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U3RvcmVXcmFwcGVyIHsuLi50aGlzLnByb3BzfSBvcGVuPXt0aGlzLnByb3BzLnZpc2libGV9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQVRBO0FBSEE7QUFnQkE7QUFqQkE7QUFtQkE7QUFuQkE7QUFxQkE7QUFDQTtBQXRCQTtBQXdCQTtBQXhCQTtBQTBCQTtBQTFCQTtBQUxBO0FBbUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQVRBO0FBWUE7QUFFQTtBQURBO0FBSUE7QUFOQTtBQWRBO0FBd0JBO0FBekJBO0FBMkJBO0FBM0JBO0FBNkJBO0FBQ0E7QUE5QkE7QUFnQ0E7QUFoQ0E7QUFrQ0E7QUFsQ0E7QUFMQTtBQTVDQTtBQXdGQTtBQUNBO0FBRUE7OztBQWFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBO0FBQUE7QUFBQTtBQUNBO0FBbUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFKQTtBQUNBO0FBZUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQVBBO0FBZ0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFoR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMEdBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFFQTtBQUdBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUxBO0FBU0E7QUFHQTtBQURBO0FBSUE7QUFHQTtBQURBO0FBS0E7QUFDQTtBQWZBO0FBa0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUkE7QUFoQkE7QUF0Q0E7QUFDQTtBQXlFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBWEE7QUFjQTs7OztBQWpVQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBMlRBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFKQTtBQU9BOzs7O0FBckJBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBR0E7QUFGQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUpBO0FBREE7QUFRQTtBQTVEQTtBQUFBO0FBQUE7QUE4REE7QUFDQTtBQS9EQTtBQUFBO0FBQUE7QUFpRUE7QUFDQTtBQWxFQTtBQUFBO0FBQUE7QUFtRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBaEZBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFDQTtBQW9GQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFuQkE7QUFvQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVpBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBYkE7QUFlQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQVFBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQUhBO0FBSkE7QUFvQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFlQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQURBO0FBUkE7QUFQQTtBQWZBO0FBREE7QUFKQTtBQWdEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQURBO0FBUEE7QUFKQTtBQUxBO0FBREE7QUFKQTtBQWpEQTtBQXFGQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFQQTtBQVBBO0FBTEE7QUFEQTtBQUpBO0FBbUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQVBBO0FBUkE7QUFMQTtBQURBO0FBSkE7QUFwQ0E7QUEwRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWJBO0FBUEE7QUF5QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVhBO0FBVkE7QUE1QkE7QUFyS0E7QUF0QkE7QUEwUEE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBVkE7QUFzQkE7Ozs7QUExa0JBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBMGtCQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUhBO0FBT0E7Ozs7QUFoQkE7QUFDQTtBQWtCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTUE7QUFYQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBVUE7QUFWQTtBQWFBOzs7O0FBbEJBO0FBQ0E7QUFEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9