(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 2661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(570);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PriceText = function (_React$Component) {
    _inherits(PriceText, _React$Component);

    function PriceText() {
        _classCallCheck(this, PriceText);

        return _possibleConstructorReturn(this, (PriceText.__proto__ || Object.getPrototypeOf(PriceText)).apply(this, arguments));
    }

    _createClass(PriceText, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                price = _props.price,
                preFormattedPrice = _props.preFormattedPrice,
                quote = _props.quote,
                base = _props.base;

            if (!price && !preFormattedPrice) return null;
            var formattedPrice = !!preFormattedPrice ? preFormattedPrice : common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].price_to_text(price, quote, base);

            if (formattedPrice.full >= 1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.int,
                        "."
                    ),
                    formattedPrice.dec ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.dec
                    ) : null,
                    formattedPrice.trailing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.trailing
                    ) : null
                );
            } else if (formattedPrice.full >= 0.1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.int,
                        "."
                    ),
                    formattedPrice.dec ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.dec
                    ) : null,
                    formattedPrice.trailing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.trailing
                    ) : null
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.int,
                        "."
                    ),
                    formattedPrice.dec ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.dec
                    ) : null,
                    formattedPrice.trailing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.trailing
                    ) : null
                );
            }
        }
    }]);

    return PriceText;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PriceText);

/***/ }),

/***/ 2693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1954);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2298);
/* harmony import */ var _Utility_MarketLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2694);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1955);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2314);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(589);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(592);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(419);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2079);
/* harmony import */ var _Utility_withWorthLessSettlementFlag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2695);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2424);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
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

    switch (worthLessSettlement) {
        case true:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    string: "exchange.worth_less_settlement_warning",
                    keys: [{
                        value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            base: asset.get("id"),
                            quote: shortBackingAsset.get("id")
                        }),
                        arg: "market_link"
                    }]
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                "\xA0\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.price_market" }),
                ":\xA0\xA0",
                marketPrice,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                "\xA0\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.settle" }),
                ":\xA0\xA0",
                settlementPrice,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
            );
        case undefined:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.checking_for_worth_less_settlement" });
        default:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    string: "exchange.settlement_hint",
                    keys: [{
                        value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            base: asset.get("id"),
                            quote: shortBackingAsset.get("id")
                        }),
                        arg: "market_link"
                    }, {
                        value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { name: asset.get("symbol") }),
                        arg: "long"
                    }]
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                "\xA0\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.price_market" }),
                ":\xA0\xA0",
                marketPrice,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                "\xA0\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.settle" }),
                ":\xA0\xA0",
                settlementPrice,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
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
            var _props = this.props,
                asset = _props.asset,
                account = _props.account;
            var amount = this.state.amount;


            if (!asset) {
                return null;
            }

            var assetID = asset.get("id");

            var account_balances = account.get("balances");

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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.balance" }),
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

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("modal.settle.title", {
                        asset: asset.get("symbol")
                    }),
                    visible: this.props.visible,
                    id: this.props.modalId,
                    footer: footer,
                    onCancel: this.props.hideModal,
                    overlay: true,
                    ref: "settlement_modal"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        { className: "grid-block vertical full-width-content" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorthLessSettlementWarning, { asset: assetID }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-container " },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "content-block" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    label: "modal.settle.amount",
                                    amount: amount,
                                    onChange: this.onAmountChanged.bind(this),
                                    display_balance: balanceText,
                                    asset: assetID,
                                    assets: [assetID],
                                    tabIndex: 1
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ModalContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ModalContent.propTypes = {
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired
};

ModalContent = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(ModalContent);

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

/***/ 2694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1807);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1954);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2299);
/* harmony import */ var _AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2298);
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
                { to: "/market/" + marketID },
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

/***/ 2695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(488);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2299);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(585);
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

                var settlementPrice = null;
                if (!!asset.get("bitasset") && asset.get("bitasset").get("settlement_fund") > 0) {
                    settlementPrice = asset.get("bitasset").get("settlement_price");
                } else {
                    settlementPrice = asset.getIn(["bitasset", "current_feed", "settlement_price"]);
                }

                var realSettlementPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Price"]({
                    base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                        asset_id: shortBackingAssetId,
                        amount: settlementPrice.getIn(["quote", "amount"]),
                        preicision: shortBackingAsset.get("precision")
                    }),
                    quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                        asset_id: assetId,
                        amount: settlementPrice.getIn(["base", "amount"]),
                        precision: asset.get("precision")
                    })
                }).toReal();

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

/***/ 2700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRow", function() { return OrderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOpenOrders", function() { return MyOpenOrders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(813);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1807);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2639);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OpenSettleOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2701);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(570);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2661);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2703);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(713);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2298);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1855);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(419);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(585);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2717);
/* harmony import */ var _Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2718);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2420);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2351);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var leftAlign = { textAlign: "left" };
var rightAlign = { textAlign: "right" };
var centerAlign = { textAlign: "center" };



var TableHeader = function (_React$Component) {
    _inherits(TableHeader, _React$Component);

    function TableHeader() {
        _classCallCheck(this, TableHeader);

        return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
    }

    _createClass(TableHeader, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                baseSymbol = _props.baseSymbol,
                quoteSymbol = _props.quoteSymbol,
                dashboard = _props.dashboard,
                isMyAccount = _props.isMyAccount,
                leftAlign = _props.leftAlign;


            return !dashboard ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "thead",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: leftAlign ? leftAlign : rightAlign },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                            className: "header-sub-title",
                            content: "exchange.price"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: leftAlign ? leftAlign : rightAlign },
                        baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: quoteSymbol })
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: leftAlign ? leftAlign : rightAlign },
                        baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: baseSymbol })
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: leftAlign ? leftAlign : rightAlign },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                            className: "header-sub-title",
                            content: "transaction.expiration"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { width: "6%" } })
                )
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { id: "cancelAllOrders", style: { cursor: "pointer" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "wallet.cancel" })
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.trade" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftAlign },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "transaction.order_id" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftAlign, colSpan: "4" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.description" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftAlign },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.price" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftAlign },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.price_market" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: { textAlign: "right" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.value" })
                )
            );
        }
    }]);

    return TableHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TableHeader.defaultProps = {
    quoteSymbol: null,
    baseSymbol: null
};

var OrderRow = function (_React$Component2) {
    _inherits(OrderRow, _React$Component2);

    function OrderRow() {
        _classCallCheck(this, OrderRow);

        return _possibleConstructorReturn(this, (OrderRow.__proto__ || Object.getPrototypeOf(OrderRow)).apply(this, arguments));
    }

    _createClass(OrderRow, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.order.for_sale !== this.props.order.for_sale || nextProps.order.id !== this.props.order.id || nextProps.quote !== this.props.quote || nextProps.base !== this.props.base || nextProps.order.market_base !== this.props.order.market_base;
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                base = _props2.base,
                quote = _props2.quote,
                order = _props2.order,
                showSymbols = _props2.showSymbols,
                dashboard = _props2.dashboard,
                isMyAccount = _props2.isMyAccount,
                settings = _props2.settings;

            var isBid = order.isBid();
            var isCall = order.isCall();
            var tdClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var priceSymbol = showSymbols ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                " " + base.get("symbol") + "/" + quote.get("symbol")
            ) : null;
            var valueSymbol = showSymbols ? " " + base.get("symbol") : null;
            var amountSymbol = showSymbols ? " " + quote.get("symbol") : null;
            var preferredUnit = settings ? settings.get("unit") : "1.3.0";
            var quoteColor = !isBid ? "value negative" : "value positive";
            var baseColor = isBid ? "value negative" : "value positive";

            return !dashboard ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: order.id },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: tdClass, style: { paddingLeft: 10 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        price: order.getPrice(),
                        base: base,
                        quote: quote
                    }),
                    priceSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[!isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision")),
                    " ",
                    amountSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[!isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision")),
                    " ",
                    valueSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__["Tooltip"],
                        { title: order.expiration.toLocaleString() },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: {
                                    width: "25%",
                                    textAlign: "right",
                                    whiteSpace: "nowrap"
                                }
                            },
                            isCall ? null : counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.localize(new Date(order.expiration), {
                                type: "date",
                                format: "short_custom"
                            })
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "text-center", style: { width: "6%" } },
                    isCall ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            style: { marginRight: 0 },
                            className: "order-cancel",
                            onClick: this.props.onCancel
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            name: "cross-circle",
                            title: "icons.cross_circle.cancel_order",
                            className: "icon-14px"
                        })
                    )
                )
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: order.id, className: "clickable" },
                isMyAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "text-center" },
                    isCall ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: { marginRight: 0 },
                            className: "order-cancel"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "checkbox",
                            className: "orderCancel",
                            onChange: this.props.onCheckCancel
                        })
                    )
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                        {
                            to: "/market/" + quote.get("symbol") + "_" + base.get("symbol")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            name: "trade",
                            title: "icons.trade.trade",
                            className: "icon-14px"
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: leftAlign },
                    "#",
                    order.id.substring(4)
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { colSpan: "4", style: leftAlign, onClick: this.props.onFlip },
                    isBid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                        content: "exchange.buy_description",
                        baseAsset: common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision"), false),
                        quoteAsset: common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision"), false),
                        baseName: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            noTip: true,
                            customClass: quoteColor,
                            name: quote.get("symbol")
                        }),
                        quoteName: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            noTip: true,
                            customClass: baseColor,
                            name: base.get("symbol")
                        })
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                        content: "exchange.sell_description",
                        baseAsset: common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision"), false),
                        quoteAsset: common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision"), false),
                        baseName: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            noTip: true,
                            customClass: quoteColor,
                            name: quote.get("symbol")
                        }),
                        quoteName: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            noTip: true,
                            customClass: baseColor,
                            name: base.get("symbol")
                        })
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: leftAlign, onClick: this.props.onFlip },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__["default"], {
                        base_amount: order.sellPrice().base.amount,
                        base_asset: order.sellPrice().base.asset_id,
                        quote_amount: order.sellPrice().quote.amount,
                        quote_asset: order.sellPrice().quote.asset_id,
                        force_direction: base.get("symbol"),
                        hide_symbols: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: leftAlign, onClick: this.props.onFlip },
                    isBid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_16__["MarketPrice"], {
                        base: base.get("id"),
                        quote: quote.get("id"),
                        force_direction: base.get("symbol"),
                        hide_symbols: true,
                        hide_asset: true
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_16__["MarketPrice"], {
                        base: base.get("id"),
                        quote: quote.get("id"),
                        force_direction: base.get("symbol"),
                        hide_symbols: true,
                        hide_asset: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" }, onClick: this.props.onFlip },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_15__["EquivalentValueComponent"], {
                        hide_asset: true,
                        amount: order.amountForSale().getAmount(),
                        fromAsset: order.amountForSale().asset_id,
                        noDecimals: true,
                        toAsset: preferredUnit
                    }),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: preferredUnit })
                )
            );
        }
    }]);

    return OrderRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

OrderRow.defaultProps = {
    showSymbols: false
};

var MyOpenOrders = function (_React$Component3) {
    _inherits(MyOpenOrders, _React$Component3);

    function MyOpenOrders(props) {
        _classCallCheck(this, MyOpenOrders);

        var _this3 = _possibleConstructorReturn(this, (MyOpenOrders.__proto__ || Object.getPrototypeOf(MyOpenOrders)).call(this));

        _this3.state = {
            activeTab: props.activeTab,
            rowCount: 20,
            showAll: false
        };
        _this3._getOrders = _this3._getOrders.bind(_this3);
        return _this3;
    }

    _createClass(MyOpenOrders, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.activeTab !== this.state.activeTab) {
                this._changeTab(nextProps.activeTab);
            }

            if (this.props.hideScrollbars && nextState.showAll != this.state.showAll) {
                var contentContainer = this.refs.container;
                if (!nextState.showAll) {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.destroy(contentContainer);
                } else {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.initialize(contentContainer);
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.update(contentContainer);
                }
                if (this.refs.contentTransition) {
                    this.refs.contentTransition.resetAnimation();
                }
                if (contentContainer) contentContainer.scrollTop = 0;
            }

            return nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol || nextProps.className !== this.props.className || nextProps.activeTab !== this.props.activeTab || nextState.activeTab !== this.state.activeTab || nextState.showAll !== this.state.showAll || nextProps.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.hideScrollbars) {
                var contentContainer = this.refs.container;
                if (contentContainer) perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.initialize(contentContainer);
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (!this.props.hideScrollbars || this.props.hideScrollbars && this.state.showAll) {
                var contentContainer = this.refs.container;
                if (contentContainer) perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.update(contentContainer);
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var contentContainer = this.refs.container;

            if (nextProps.hideScrollbars !== this.props.hideScrollbars && nextProps.hideScrollbars) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.destroy(contentContainer);
            }

            if (nextProps.hideScrollbars !== this.props.hideScrollbars && !nextProps.hideScrollbars) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.initialize(contentContainer);
                this.refs.contentTransition.resetAnimation();
                if (contentContainer) contentContainer.scrollTop = 0;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.update(contentContainer);
            }
        }
    }, {
        key: "_onSetShowAll",
        value: function _onSetShowAll() {
            this.setState({
                showAll: !this.state.showAll
            });

            if (this.state.showAll) {
                this.refs.container.scrollTop = 0;
            }
        }
    }, {
        key: "_getOrders",
        value: function _getOrders() {
            var _assets;

            var _props3 = this.props,
                currentAccount = _props3.currentAccount,
                base = _props3.base,
                quote = _props3.quote,
                feedPrice = _props3.feedPrice;

            var orders = currentAccount.get("orders"),
                call_orders = currentAccount.get("call_orders");
            var baseID = base.get("id"),
                quoteID = quote.get("id");
            var assets = (_assets = {}, _defineProperty(_assets, base.get("id"), { precision: base.get("precision") }), _defineProperty(_assets, quote.get("id"), { precision: quote.get("precision") }), _assets);
            var limitOrders = orders.toArray().map(function (order) {
                var o = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(order);
                if (!o) return null;
                var sellBase = o.getIn(["sell_price", "base", "asset_id"]),
                    sellQuote = o.getIn(["sell_price", "quote", "asset_id"]);
                if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
                    return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["LimitOrder"](o.toJS(), assets, quote.get("id"));
                }
            }).filter(function (a) {
                return !!a;
            });

            var callOrders = call_orders.toArray().map(function (order) {
                try {
                    var o = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(order);
                    if (!o) return null;
                    var sellBase = o.getIn(["call_price", "base", "asset_id"]),
                        sellQuote = o.getIn(["call_price", "quote", "asset_id"]);
                    if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
                        return feedPrice ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["CallOrder"](o.toJS(), assets, quote.get("id"), feedPrice) : null;
                    }
                } catch (e) {
                    return null;
                }
            }).filter(function (a) {
                return !!a;
            }).filter(function (a) {
                try {
                    return a.isMarginCalled();
                } catch (err) {
                    return false;
                }
            });
            return limitOrders.concat(callOrders);
        }
    }, {
        key: "_changeTab",
        value: function _changeTab(tab) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
                ordersTab: tab
            });
            this.setState({
                activeTab: tab
            });

            // Ensure that focus goes back to top of scrollable container when tab is changed
            var contentContainer = this.refs.container;
            contentContainer.scrollTop = 0;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.update(contentContainer);

            setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_18___default.a.rebuild, 1000);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props4 = this.props,
                base = _props4.base,
                quote = _props4.quote,
                quoteSymbol = _props4.quoteSymbol,
                baseSymbol = _props4.baseSymbol,
                settleOrders = _props4.settleOrders;
            var _state = this.state,
                activeTab = _state.activeTab,
                showAll = _state.showAll,
                rowCount = _state.rowCount;


            if (!base || !quote) return null;

            var contentContainer = void 0;
            var footerContainer = void 0;

            // Is asset a BitAsset with Settlements
            var baseIsBitAsset = base.get("bitasset_data_id") && settleOrders.size > 0 ? true : false;
            var quoteIsBitAsset = quote.get("bitasset_data_id") && settleOrders.size > 0 ? true : false;

            {
                /* Users Open Orders Tab (default) */
            }
            if (!activeTab || activeTab == "my_orders") {
                var orders = this._getOrders();
                var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: {
                                textAlign: "center",
                                lineHeight: 4,
                                fontStyle: "italic"
                            },
                            colSpan: "5"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "account.no_orders" })
                    )
                );

                var bids = orders.filter(function (a) {
                    return a.isBid();
                }).sort(function (a, b) {
                    return b.getPrice() - a.getPrice();
                }).map(function (order) {
                    var price = order.getPrice();
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderRow, {
                        price: price,
                        key: order.id,
                        order: order,
                        base: base,
                        quote: quote,
                        onCancel: _this4.props.onCancel.bind(_this4, order.id)
                    });
                });

                var asks = orders.filter(function (a) {
                    return !a.isBid();
                }).sort(function (a, b) {
                    return a.getPrice() - b.getPrice();
                }).map(function (order) {
                    var price = order.getPrice();
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderRow, {
                        price: price,
                        key: order.id,
                        order: order,
                        base: base,
                        quote: quote,
                        onCancel: _this4.props.onCancel.bind(_this4, order.id)
                    });
                });

                var rows = [];

                if (asks.length) {
                    rows = rows.concat(asks);
                }

                if (bids.length) {
                    rows = rows.concat(bids);
                }

                rows.sort(function (a, b) {
                    return a.props.price - b.props.price;
                });

                var rowsLength = rows.length;
                if (!showAll) {
                    rows.splice(rowCount, rows.length);
                }

                contentContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__["default"],
                    {
                        ref: "contentTransition",
                        component: "tbody",
                        transitionName: "newrow"
                    },
                    rows.length ? rows : emptyRow
                );

                footerContainer = rowsLength > 11 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "orderbook-showall" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        { onClick: this._onSetShowAll.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                            content: showAll ? "exchange.hide" : "exchange.show_all_orders",
                            rowcount: rowsLength
                        })
                    )
                ) : null;
            }

            {
                /* Open Settle Orders */
            }
            if (activeTab && activeTab == "open_settlement") {
                var settleOrdersLength = settleOrders.length;

                if (settleOrdersLength > 0) {
                    if (!showAll) {
                        settleOrders.splice(rowCount, settleOrders.length);
                    }
                }

                contentContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSettleOrders__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    key: "settle_orders",
                    orders: settleOrders,
                    base: base,
                    quote: quote,
                    baseSymbol: baseSymbol,
                    quoteSymbol: quoteSymbol
                });

                footerContainer = settleOrdersLength > 11 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "orderbook-showall" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        { onClick: this._onSetShowAll.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                            content: showAll ? "exchange.hide" : "exchange.show_all_orders",
                            rowcount: settleOrdersLength
                        })
                    )
                ) : null;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    style: this.props.style,
                    key: "open_orders",
                    className: this.props.className
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: this.props.innerClass,
                        style: this.props.innerStyle
                    },
                    this.props.noHeader ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: this.props.headerStyle,
                            className: "exchange-content-header"
                        },
                        activeTab == "my_orders" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.my_orders" }) : null,
                        activeTab == "open_settlement" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.settle_orders" }) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink left-orderbook-header market-right-padding-only" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            activeTab == "my_orders" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableHeader, {
                                type: "sell",
                                baseSymbol: baseSymbol,
                                quoteSymbol: quoteSymbol
                            }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                                            className: "header-sub-title",
                                            content: "exchange.price"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            { className: "header-sub-title" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                dataPlace: "top",
                                                name: quoteSymbol
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            { className: "header-sub-title" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                dataPlace: "top",
                                                name: baseSymbol
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                                            className: "header-sub-title",
                                            content: "explorer.block.date"
                                        })
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "table-container grid-block market-right-padding-only no-overflow",
                            ref: "container",
                            style: {
                                overflow: "hidden",
                                minHeight: !this.props.tinyScreen ? 260 : 0,
                                maxHeight: 260,
                                lineHeight: "13px"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table table-highlight-hover table-hover no-stripes text-right fixed-table market-right-padding" },
                            contentContainer
                        )
                    ),
                    footerContainer
                )
            );
        }
    }]);

    return MyOpenOrders;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MyOpenOrders.defaultProps = {
    base: {},
    quote: {},
    orders: {},
    quoteSymbol: "",
    baseSymbol: ""
};

MyOpenOrders.propTypes = {
    base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quoteSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    baseSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};



/***/ }),

/***/ 2701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(813);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(570);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2298);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2702);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2703);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var TableHeader = function (_React$Component) {
    _inherits(TableHeader, _React$Component);

    function TableHeader() {
        _classCallCheck(this, TableHeader);

        return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
    }

    _createClass(TableHeader, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                baseSymbol = _props.baseSymbol,
                quoteSymbol = _props.quoteSymbol;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "thead",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            "(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: baseSymbol }),
                            "/",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: quoteSymbol }),
                            ")"
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.amount" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        quoteSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            "(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: quoteSymbol }),
                            ")"
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transaction.settlement_date" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                style: { visibility: "hidden" },
                                className: "header-sub-title"
                            },
                            "d"
                        )
                    )
                )
            );
        }
    }]);

    return TableHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TableHeader.defaultProps = {
    quoteSymbol: null,
    baseSymbol: null
};

var SettleOrderRow = function (_React$Component2) {
    _inherits(SettleOrderRow, _React$Component2);

    function SettleOrderRow() {
        _classCallCheck(this, SettleOrderRow);

        return _possibleConstructorReturn(this, (SettleOrderRow.__proto__ || Object.getPrototypeOf(SettleOrderRow)).apply(this, arguments));
    }

    _createClass(SettleOrderRow, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                base = _props2.base,
                quote = _props2.quote,
                order = _props2.order,
                showSymbols = _props2.showSymbols;


            var price = base.get("id") == "1.3.0" ? order.getPrice() / (1 + order.offset_percent / 10000) : order.getPrice() * (1 + order.offset_percent / 10000);
            var amountSymbol = showSymbols ? " " + quote.get("symbol") : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { style: { paddingRight: 5 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(price, quote.get("precision")),
                    " ",
                    amountSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!order.isBid() ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!order.isBid() ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Tooltip"],
                        { title: new Date(order.settlement_date).toString() },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { textAlign: "right", whiteSpace: "nowrap" } },
                            counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.localize(new Date(order.settlement_date), {
                                type: "date",
                                format: browser_locale__WEBPACK_IMPORTED_MODULE_6___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history"
                            })
                        )
                    )
                )
            );
        }
    }]);

    return SettleOrderRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SettleOrderRow.defaultProps = {
    showSymbols: false,
    invert: false
};

var OpenSettleOrders = function (_React$Component3) {
    _inherits(OpenSettleOrders, _React$Component3);

    function OpenSettleOrders() {
        _classCallCheck(this, OpenSettleOrders);

        return _possibleConstructorReturn(this, (OpenSettleOrders.__proto__ || Object.getPrototypeOf(OpenSettleOrders)).apply(this, arguments));
    }

    _createClass(OpenSettleOrders, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.currentAccount !== this.props.currentAccount || nextProps.orders !== this.props.orders;
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                orders = _props3.orders,
                base = _props3.base,
                quote = _props3.quote;


            var activeOrders = null;

            if (orders.size > 0 && base && quote) {
                var index = 0;

                activeOrders = orders.sort(function (a, b) {
                    return a.isBefore(b) ? -1 : 1;
                }).map(function (order) {
                    return Date.now() < order.settlement_date ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettleOrderRow, {
                        key: index++,
                        order: order,
                        base: base,
                        quote: quote
                    }) : null;
                }).toArray();
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tbody",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: {
                                    textAlign: "center",
                                    lineHeight: 4,
                                    fontStyle: "italic"
                                },
                                colSpan: "5"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.no_orders" })
                        )
                    )
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__["default"],
                {
                    ref: "contentTransition",
                    component: "tbody",
                    transitionName: "newrow"
                },
                activeOrders
            );
        }
    }]);

    return OpenSettleOrders;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

OpenSettleOrders.defaultProps = {
    base: {},
    quote: {},
    orders: {},
    quoteSymbol: "",
    baseSymbol: ""
};

OpenSettleOrders.propTypes = {
    base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quoteSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    baseSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSettleOrders);

/***/ }),

/***/ 2718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPrice", function() { return MarketPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketStats", function() { return MarketStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2299);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2348);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1847);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(570);
/* harmony import */ var _FormattedPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2420);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2347);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var MarketStats = function (_React$Component) {
    _inherits(MarketStats, _React$Component);

    function MarketStats(props) {
        _classCallCheck(this, MarketStats);

        var _this = _possibleConstructorReturn(this, (MarketStats.__proto__ || Object.getPrototypeOf(MarketStats)).call(this));

        _this.statsInterval = null;

        var _marketUtils$getMarke = common_market_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getMarketName(props.base, props.quote),
            marketName = _marketUtils$getMarke.marketName;

        _this.state = {
            marketName: marketName
        };
        return _this;
    }

    _createClass(MarketStats, [{
        key: "_checkStats",
        value: function _checkStats() {
            var newStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { close: {} };
            var oldStats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { close: {} };

            return newStats.volumeBase !== oldStats.volumeBase || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(newStats.close && newStats.close.base, oldStats.close && oldStats.close.base) || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(newStats.close && newStats.close.quote, oldStats.close && oldStats.close.quote);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return this._checkStats(np.allMarketStats.get(this.state.marketName), this.props.allMarketStats.get(this.state.marketName)) || np.base.get("id") !== this.props.base.get("id") || np.quote.get("id") !== this.props.quote.get("id");
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.statsInterval) this.statsInterval();
        }
    }]);

    return MarketStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var MarketPriceInner = function (_MarketStats) {
    _inherits(MarketPriceInner, _MarketStats);

    function MarketPriceInner(props) {
        _classCallCheck(this, MarketPriceInner);

        return _possibleConstructorReturn(this, (MarketPriceInner.__proto__ || Object.getPrototypeOf(MarketPriceInner)).call(this, props));
    }

    _createClass(MarketPriceInner, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return _get(MarketPriceInner.prototype.__proto__ || Object.getPrototypeOf(MarketPriceInner.prototype), "shouldComponentUpdate", this).call(this, np);
        }
    }, {
        key: "render",
        value: function render() {
            var allMarketStats = this.props.allMarketStats;
            var marketName = this.state.marketName;

            var marketStats = allMarketStats.get(marketName);
            var price = marketStats && marketStats.price ? marketStats.price : null;
            // if (!price && marketStatsInverted && marketStatsInverted.price) {
            //     price = marketStatsInverted.price.invert();
            // }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("", this.props.className) },
                price ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    base_amount: price.base.amount,
                    base_asset: price.base.asset_id,
                    quote_amount: price.quote.amount,
                    quote_asset: price.quote.asset_id,
                    force_direction: this.props.force_direction,
                    hide_symbols: this.props.hide_symbols
                }) : "n/a"
            );
        }
    }]);

    return MarketPriceInner;
}(MarketStats);

MarketPriceInner = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(MarketPriceInner, {
    propNames: ["quote", "base"]
});

var MarketPrice = function (_React$Component2) {
    _inherits(MarketPrice, _React$Component2);

    function MarketPrice() {
        _classCallCheck(this, MarketPrice);

        return _possibleConstructorReturn(this, (MarketPrice.__proto__ || Object.getPrototypeOf(MarketPrice)).apply(this, arguments));
    }

    _createClass(MarketPrice, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarketPriceInner, this.props);
        }
    }]);

    return MarketPrice;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketPrice = Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(MarketPrice, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps() {
        return {
            allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().allMarketStats
        };
    }
});



/***/ }),

/***/ 2758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(585);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(570);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1954);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2351);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2316);
/* harmony import */ var common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2318);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2319);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1855);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1939);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(718);
/* harmony import */ var _Utility_FloatingDropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2301);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1847);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(712);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(713);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2335);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















// import DepositFiatOpenLedger from "components/DepositWithdraw/openledger/DepositFiatOpenLedger";
// import WithdrawFiatOpenLedger from "components/DepositWithdraw/openledger/WithdrawFiatOpenLedger";

var SimpleDepositBlocktradesBridge = function (_React$Component) {
    _inherits(SimpleDepositBlocktradesBridge, _React$Component);

    function SimpleDepositBlocktradesBridge(props) {
        _classCallCheck(this, SimpleDepositBlocktradesBridge);

        var _this = _possibleConstructorReturn(this, (SimpleDepositBlocktradesBridge.__proto__ || Object.getPrototypeOf(SimpleDepositBlocktradesBridge)).call(this));

        _this.state = {
            receiveAmount: 0,
            depositLimit: 0,
            sendAmount: 0,
            toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_8__["WithdrawAddresses"].getLast(props.walletType),
            withdrawValue: "",
            amountError: null,
            inputAmount: 0,
            receiveLoading: false,
            limitLoading: true,
            apiError: false
        };

        _this._validateAddress(_this.state.toAddress, props);

        _this.deposit_address_cache = new common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_9__["default"]();
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
            this._getDepositAddress();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._getDepositLimit();
            this._estimateOutput();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.inputCoinType !== this.props.inputCoinType || np.outputCoinType !== this.props.outputCoinType) {
                this._getDepositLimit(np);
                this._estimateOutput(np);
                this._getDepositAddress(np);
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return np.inputCoinType !== this.props.inputCoinType || np.outputCoinType !== this.props.outputCoinType || np.sender !== this.props.sender || np.asset !== this.props.asset || np.isAvailable !== this.props.isAvailable || np.isDown !== this.props.isDown || !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "_getDepositLimit",
        value: function _getDepositLimit() {
            var _this2 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            this.setState({ limitLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_8__["getDepositLimit"])(props.inputCoinType, props.outputCoinType).then(function (res) {
                _this2.setState({
                    depositLimit: res.depositLimit,
                    limitLoading: false
                });
            }).catch(function (err) {
                console.log("deposit limit error:", err);
                _this2.setState({
                    depositLimit: null,
                    limitLoading: false
                });
            });
        }
    }, {
        key: "_onAmountChange",
        value: function _onAmountChange(value, e) {
            var regexp_numeral = new RegExp(/[[:digit:]]/);
            var target = e.target;

            // Ensure input is valid
            if (!regexp_numeral.test(target.value)) {
                target.value = target.value.replace(/[^0-9.]/g, "");
            }

            // Catch initial decimal input
            if (target.value.charAt(0) == ".") {
                target.value = "0.";
            }

            // Catch double decimal and remove if invalid
            if (target.value.charAt(target.value.length) != target.value.search(".")) {
                target.value.substr(1);
            }

            target.value = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].limitByPrecision(target.value, 8);

            switch (value) {
                case "input":
                    this.setState({ inputAmount: target.value }, this._estimateOutput.bind(this));
                    break;

                case "output":
                    this.setState({ outputAmount: target.value }, this._estimateInput.bind(this));
                    break;
            }
        }
    }, {
        key: "_estimateOutput",
        value: function _estimateOutput() {
            var _this3 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            this.setState({ receiveAmount: 0, sendAmount: this.state.inputAmount });
            if (!this.state.inputAmount) {
                return;
            }

            this.setState({ receiveLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_8__["estimateOutput"])(this.state.inputAmount, props.inputCoinType, props.outputCoinType).then(function (res) {
                _this3.setState({
                    inputAmount: res.inputAmount,
                    receiveAmount: res.outputAmount,
                    receiveLoading: false
                });
            }).catch(function (err) {
                console.log("receive amount err:", err);
                _this3.setState({ receiveLoading: false, apiError: true });
            });
        }
    }, {
        key: "_estimateInput",
        value: function _estimateInput() {
            var _this4 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            this.setState({ receiveAmount: this.state.outputAmount, sendAmount: 0 });
            if (!this.state.outputAmount) {
                return;
            }

            this.setState({ receiveLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_8__["estimateInput"])(this.state.outputAmount, props.inputCoinType, props.outputCoinType).then(function (res) {
                _this4.setState({
                    inputAmount: res.inputAmount,
                    sendAmount: common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].limitByPrecision(res.inputAmount, 8),
                    receiveLoading: false
                });
            }).catch(function (err) {
                console.log("send amount err:", err);
                _this4.setState({ receiveLoading: false, apiError: true });
            });
        }
    }, {
        key: "_getDepositAddress",
        value: function _getDepositAddress() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            if (!props.inputCoinType) return;
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
                Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_8__["requestDepositAddress"])(this._getDepositObject(props));
            } else {
                this.setState({
                    receive_address: receive_address
                });
            }
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject() {
            var _this5 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            return {
                inputCoinType: props.inputCoinType.toLowerCase(),
                outputCoinType: props.outputCoinType.toLowerCase(),
                outputAddress: props.sender.get("name"),
                url: api_apiConfig__WEBPACK_IMPORTED_MODULE_13__["blockTradesAPIs"].BASE,
                stateCallback: function stateCallback(receive_address) {
                    _this5.addDepositAddress(props.inputCoinType.toLowerCase(), props.outputCoinType.toLowerCase(), props.sender.get("name"), receive_address);
                }
            };
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
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_6___default.a.rebuild();
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(address) {
            var _this6 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_8__["validateAddress"])({ walletType: props.walletType, newAddress: address }).then(function (isValid) {
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
        key: "_openRegistrarSite",
        value: function _openRegistrarSite(e) {
            e.preventDefault();
            var newWnd = window.open(stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].site_registr, "_blank");
            newWnd.opener = null;
        }
    }, {
        key: "_onDropDownSelect",
        value: function _onDropDownSelect(e) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_17__["default"].changeViewSetting({ preferredBridge: e });
        }
    }, {
        key: "onBlockTradesContact",
        value: function onBlockTradesContact() {
            console.log("Open New Tab");
            var win = window.open("https://www.blocktrades.us/contact", "_blank");
            win.focus();
        }
    }, {
        key: "_renderDeposit",
        value: function _renderDeposit() {
            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName.name,
                prefix = _utils$replaceName.prefix;

            var _state = this.state,
                receive_address = _state.receive_address,
                apiError = _state.apiError;

            var hasMemo = receive_address && "memo" in receive_address && receive_address.memo;
            var addressValue = receive_address && receive_address.address || "";
            var QR = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "QR", style: { textAlign: "center" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_18___default.a, { size: 140, value: addressValue })
            );

            var bridgeAssets = Object.keys(this.props.bridges.toJS());

            var inputName = this.props.inputCoinType.toUpperCase();
            var receiveName = (prefix ? prefix : "") + assetName;

            var price = (this.state.receiveAmount / this.state.inputAmount).toFixed(4);
            var priceSuffix = receiveName + "/" + inputName;

            var aboveLimit = this.state.inputAmount > parseFloat(this.state.depositLimit) || this.state.sendAmount > parseFloat(this.state.depositLimit);
            var aboveLimitStyle = aboveLimit ? { border: "1px solid #a94442" } : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "modal__body", style: { paddingTop: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "container-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "modal.buy.asset" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { disabled: true, type: "text", value: receiveName })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "container-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "modal.buy.bridge" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip.bridge_TRADE")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    className: "inline-block tooltip",
                                    onClick: this.onBlockTradesContact.bind(this)
                                },
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    style: { position: "relative", top: 0 },
                                    name: "question-circle",
                                    title: "icons.question_circle"
                                })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            disabled: true,
                            type: "text",
                            defaultValue: "BLOCKTRADES"
                        }),
                        " "
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: !apiError ? { display: "" } : { display: "none" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "container-row double-row" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "no-margin no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "small-6", style: { paddingRight: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { className: "left-label" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "transfer.send" })
                                    ),
                                    aboveLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__["Tooltip"],
                                        {
                                            title: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip.over_limit")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "error-msg inline-block tooltip" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.over_limit" }),
                                            "\xA0",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                name: "question-circle",
                                                title: "icons.question_circle"
                                            })
                                        )
                                    ) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label input-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: aboveLimitStyle,
                                        type: "text",
                                        value: this.state.sendAmount,
                                        onInput: this._onAmountChange.bind(this, "input")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "form-label select floating-dropdown" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FloatingDropdown__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                            entries: bridgeAssets,
                                            values: bridgeAssets.reduce(function (map, a) {
                                                if (a) map[a] = a;
                                                return map;
                                            }, {}),
                                            singleEntry: bridgeAssets[0],
                                            value: this.props.preferredBridge || bridgeAssets[0],
                                            onChange: this._onDropDownSelect,
                                            upperCase: true
                                        })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "small-6", style: { paddingLeft: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.deposit_limit" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label input-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        disabled: true,
                                        type: "number",
                                        value: this.state.depositLimit && parseFloat(this.state.depositLimit).toFixed(4) || 0
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "input-right-symbol" },
                                        inputName
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "container-row double-row" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "no-margin no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "small-6", style: { paddingRight: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.receive" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label input-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: aboveLimitStyle,
                                        type: "text",
                                        value: this.state.receiveAmount,
                                        onInput: this._onAmountChange.bind(this, "output")
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "input-right-symbol" },
                                        receiveName
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "small-6", style: { paddingLeft: 10 } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { className: "left-label" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.price" }),
                                        "\xA0\xA0",
                                        this.state.receiveLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "footer.loading" }) : ""
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "inline-label input-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        disabled: true,
                                        type: "number",
                                        value: aboveLimit ? 0 : price
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "input-right-symbol" },
                                        priceSuffix
                                    )
                                )
                            )
                        )
                    ),
                    !addressValue ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { textAlign: "center" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__["default"], { type: "three-bounce" })
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                )
            );
        }
    }, {
        key: "_renderCurrentBalance",
        value: function _renderCurrentBalance() {
            var _this7 = this;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName2.name;

            var isDeposit = this.props.action === "deposit";

            var currentBalance = this.props.balances.find(function (b) {
                return b && b.get("asset_type") === _this7.props.asset.get("id");
            });

            var asset = currentBalance ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__["Asset"]({
                asset_id: currentBalance.get("asset_type"),
                precision: this.props.asset.get("precision"),
                amount: currentBalance.get("balance")
            }) : null;

            var applyBalanceButton = isDeposit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    style: { border: "2px solid black", borderLeft: "none" },
                    className: "form-label"
                },
                assetName
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__["Tooltip"],
                {
                    placement: "right",
                    title: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip.withdraw_full")
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        style: { border: "2px solid black", borderLeft: "none" },
                        onClick: this._updateAmount.bind(this, !currentBalance ? 0 : parseInt(currentBalance.get("balance"), 10))
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], { name: "clippy", title: "icons.clippy.withdraw_full" })
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "SimpleTrade__withdraw-row",
                    style: { fontSize: "1rem" }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { style: { fontSize: "1rem" } },
                    counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("gateway.balance_asset", {
                        asset: assetName
                    }),
                    ":",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "inline-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            disabled: true,
                            style: {
                                color: "black",
                                border: "2px solid black",
                                padding: 10,
                                width: "100%"
                            },
                            value: !asset ? 0 : asset.getAmount({ real: true })
                        }),
                        applyBalanceButton
                    )
                )
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
    sender: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAsset.isRequired
};

SimpleDepositBlocktradesBridge = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(SimpleDepositBlocktradesBridge);

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

StoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_15__["connect"])(StoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
    },
    getProps: function getProps() {
        return {
            preferredBridge: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().viewSettings.get("preferredBridge", "btc")
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
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("modal.buy.title"),
                    visible: this.props.visible,
                    onCancel: this.props.hideModal,
                    footer: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__["Button"],
                        { key: "cancel", onClick: this.props.hideModal },
                        counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("modal.close")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZS5mNjFlNTM4Njc1YTU0YmUxYWVhNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1ByaWNlVGV4dC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL01vZGFsL1NldHRsZU1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9NYXJrZXRMaW5rLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS93aXRoV29ydGhMZXNzU2V0dGxlbWVudEZsYWcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NeU9wZW5PcmRlcnMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9PcGVuU2V0dGxlT3JkZXJzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9NYXJrZXRQcmljZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9TaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5cbmNsYXNzIFByaWNlVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ByaWNlLCBwcmVGb3JtYXR0ZWRQcmljZSwgcXVvdGUsIGJhc2V9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFwcmljZSAmJiAhcHJlRm9ybWF0dGVkUHJpY2UpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgZm9ybWF0dGVkUHJpY2UgPSAhIXByZUZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICA/IHByZUZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICA6IHV0aWxzLnByaWNlX3RvX3RleHQocHJpY2UsIHF1b3RlLCBiYXNlKTtcblxuICAgICAgICBpZiAoZm9ybWF0dGVkUHJpY2UuZnVsbCA+PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1pbnRlZ2VyXCI+e2Zvcm1hdHRlZFByaWNlLmludH0uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UuZGVjID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtaW50ZWdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLnRyYWlsaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdHRlZFByaWNlLmZ1bGwgPj0gMC4xKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+e2Zvcm1hdHRlZFByaWNlLmludH0uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UuZGVjID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtaW50ZWdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLnRyYWlsaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtZGVjaW1hbFwiPntmb3JtYXR0ZWRQcmljZS5pbnR9Ljwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLmRlYyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWRlY2ltYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UuZGVjfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLnRyYWlsaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtaW50ZWdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS50cmFpbGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VUZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBNYXJrZXRMaW5rIGZyb20gXCIuLi9VdGlsaXR5L01hcmtldExpbmtcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcbmltcG9ydCBXYWxsZXRBcGkgZnJvbSBcImFwaS9XYWxsZXRBcGlcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgd2l0aFdvcnRoTGVzc1NldHRsZW1lbnRGbGFnIGZyb20gXCIuLi9VdGlsaXR5L3dpdGhXb3J0aExlc3NTZXR0bGVtZW50RmxhZ1wiO1xuaW1wb3J0IFRyYW5zbGF0ZVdpdGhMaW5rcyBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2xhdGVXaXRoTGlua3NcIjtcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jb25zdCBXb3J0aExlc3NTZXR0bGVtZW50V2FybmluZyA9IHdpdGhXb3J0aExlc3NTZXR0bGVtZW50RmxhZyhcbiAgICAoe1xuICAgICAgICB3b3J0aExlc3NTZXR0bGVtZW50LFxuICAgICAgICBhc3NldCxcbiAgICAgICAgc2hvcnRCYWNraW5nQXNzZXQsXG4gICAgICAgIG1hcmtldFByaWNlLFxuICAgICAgICBzZXR0bGVtZW50UHJpY2VcbiAgICB9KSA9PiB7XG4gICAgICAgIHN3aXRjaCAod29ydGhMZXNzU2V0dGxlbWVudCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZXhjaGFuZ2Uud29ydGhfbGVzc19zZXR0bGVtZW50X3dhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXthc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3Nob3J0QmFja2luZ0Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIm1hcmtldF9saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlX21hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc2V0dGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXR0bGVtZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2hlY2tpbmdfZm9yX3dvcnRoX2xlc3Nfc2V0dGxlbWVudFwiIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5zZXR0bGVtZW50X2hpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXthc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3Nob3J0QmFja2luZ0Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIm1hcmtldF9saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2Fzc2V0LmdldChcInN5bWJvbFwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibG9uZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZV9tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNldHRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGxlbWVudFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmNsYXNzIE1vZGFsQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYW1vdW50OiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhbnAuYXNzZXQgJiZcbiAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hc3NldCAmJlxuICAgICAgICAgICAgbnAuYXNzZXQuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BbW91bnRDaGFuZ2VkKHthbW91bnQsIGFzc2V0fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthbW91bnQ6IGFtb3VudH0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgbGV0IHthbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG5cbiAgICAgICAgYW1vdW50ID0gcGFyc2VJbnQoXG4gICAgICAgICAgICBhbW91bnQgKiBNYXRoLnBvdygxMCwgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIikpXG4gICAgICAgICk7XG5cbiAgICAgICAgdmFyIHRyID0gV2FsbGV0QXBpLm5ld190cmFuc2FjdGlvbigpO1xuICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24oXCJhc3NldF9zZXR0bGVcIiwge1xuICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBXYWxsZXREYi5wcm9jZXNzX3RyYW5zYWN0aW9uKHRyLCBudWxsLCB0cnVlKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFzc2V0IHNldHRsZSByZXN1bHQ6XCIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kaXNwYXRjaChhY2NvdW50X2lkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJhc3NldCBzZXR0bGUgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3VzZU1heFZhbHVlKGFtb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50IC8gTWF0aC5wb3coMTAsIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXQsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthbW91bnR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhc3NldElEID0gYXNzZXQuZ2V0KFwiaWRcIik7XG5cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xuXG4gICAgICAgIGxldCBjdXJyZW50QmFsYW5jZSA9IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlQW1vdW50ID0gMDtcblxuICAgICAgICBhY2NvdW50X2JhbGFuY2VzICYmXG4gICAgICAgICAgICBhY2NvdW50X2JhbGFuY2VzLmZvckVhY2goYmFsYW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QuZ2V0KFwiYXNzZXRfdHlwZVwiKSA9PT0gYXNzZXRJRCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmFsYW5jZSA9IGJhbGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2VBbW91bnQgPSBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGJhbGFuY2VUZXh0ID0gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgIHtjdXJyZW50QmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl91c2VNYXhWYWx1ZS5iaW5kKHRoaXMsIGJhbGFuY2VBbW91bnQpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXtjdXJyZW50QmFsYW5jZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIFwiMCBcIiArIGFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGlzRnVuZHNUb0xvdyA9IGZhbHNlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBhbW91bnQgPlxuICAgICAgICAgICAgYmFsYW5jZUFtb3VudCAvIE1hdGgucG93KDEwLCB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpc0Z1bmRzVG9Mb3cgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9vdGVyID0gW1xuICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgIGlzRnVuZHNUb0xvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLmxhY2tfZnVuZHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17XCJzdWJtaXRcIn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNGdW5kc1RvTG93fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLnNldHRsZS5zdWJtaXRcIil9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+LFxuICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e1wiY2xvc2VcIn0gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC5jbG9zZVwiKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuc2V0dGxlLnRpdGxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5tb2RhbElkfVxuICAgICAgICAgICAgICAgIGZvb3Rlcj17Zm9vdGVyfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHJlZj1cInNldHRsZW1lbnRfbW9kYWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIGZ1bGwtd2lkdGgtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdvcnRoTGVzc1NldHRsZW1lbnRXYXJuaW5nIGFzc2V0PXthc3NldElEfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIm1vZGFsLnNldHRsZS5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFtb3VudENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXRJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2Fzc2V0SURdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5Nb2RhbENvbnRlbnQgPSBCaW5kVG9DaGFpblN0YXRlKE1vZGFsQ29udGVudCk7XG5cbmNsYXNzIFNldHRsZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TW9kYWxDb250ZW50IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRsZU1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4vQXNzZXROYW1lXCI7XG5cbi8qKlxuICogIEdpdmVuIGEgYmFzZSBhbmQgcXVvdGUgYXNzZXQsIHJlbmRlciBhIGxpbmsgdG8gdGhhdCBtYXJrZXRcbiAqXG4gKiAgRXhwZWN0ZWQgUHJvcGVydGllczpcbiAqICAgICBiYXNlOiAgYXNzZXQgaWQsIHdoaWNoIHdpbGwgYmUgZmV0Y2hlZCBmcm9tIHRoZSBDaGFpblN0b3JlXG4gKiAgICAgcXVvdGU6IGVpdGhlciBhbiBhc3NldCBpZCBvciBhIGJhbGFuY2UgaWRcbiAqXG4gKi9cblxuY2xhc3MgTWFya2V0TGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChiYXNlLmdldChcImlkXCIpID09PSBxdW90ZS5nZXQoXCJpZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1hcmtldElEID0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpICsgXCJfXCIgKyBiYXNlLmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgbGV0IG1hcmtldE5hbWUgPSAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX0gLz4gL3tcIiBcIn1cbiAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gPExpbmsgdG89e2AvbWFya2V0LyR7bWFya2V0SUR9YH0+e21hcmtldE5hbWV9PC9MaW5rPjtcbiAgICB9XG59XG5cbk1hcmtldExpbmsgPSBBc3NldFdyYXBwZXIoTWFya2V0TGluaywge1xuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxuICAgIGRlZmF1bHRQcm9wczoge2Jhc2U6IFwiMS4zLjBcIn1cbn0pO1xuXG4vKlxuVGhpcyBoYW5ncyB0aGUgcGFnZSBvbiBNYXJrZXRMaW5rIGltcG9ydCB3aXRoIGZpcmVmb3ggNjIuMFxuXG5jbGFzcyBPYmplY3RXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBvYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7b2JqZWN0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBxdW90ZUFzc2V0ID0gb2JqZWN0LmhhcyhcImFzc2V0X3R5cGVcIilcbiAgICAgICAgICAgID8gb2JqZWN0LmdldChcImFzc2V0X3R5cGVcIilcbiAgICAgICAgICAgIDogb2JqZWN0LmdldChcImlkXCIpO1xuXG4gICAgICAgIHJldHVybiA8TWFya2V0TGluayBxdW90ZT17cXVvdGVBc3NldH0gLz47XG4gICAgfVxufVxuT2JqZWN0V3JhcHBlciA9IEJpbmRUb0NoYWluU3RhdGUoT2JqZWN0V3JhcHBlcik7XG5cbk1hcmtldExpbmsuT2JqZWN0V3JhcHBlciA9IE9iamVjdFdyYXBwZXI7XG4qL1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXRMaW5rO1xuIiwiaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IHtBc3NldCwgUHJpY2V9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuXG5jb25zdCB3aXRoU2hvcnRCYWNraW5nQXNzZXQgPSBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgICBjb25zdCBXcmFwcGVkQ29tcG9uZW50V2l0aFNob3J0QmFja2luZ0Fzc2V0ID0gQXNzZXRXcmFwcGVyKFxuICAgICAgICBXcmFwcGVkQ29tcG9uZW50LFxuICAgICAgICB7cHJvcE5hbWVzOiBbXCJzaG9ydEJhY2tpbmdBc3NldFwiXX1cbiAgICApO1xuICAgIHJldHVybiBBc3NldFdyYXBwZXIocHJvcHMgPT4gKFxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudFdpdGhTaG9ydEJhY2tpbmdBc3NldFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgc2hvcnRCYWNraW5nQXNzZXQ9e3Byb3BzLmFzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcbiAgICAgICAgICAgIF0pfVxuICAgICAgICAvPlxuICAgICkpO1xufTtcblxuY29uc3Qgd2l0aFdvcnRoTGVzc1NldHRsZW1lbnRGbGFnID0gV3JhcHBlZENvbXBvbmVudCA9PlxuICAgIHdpdGhTaG9ydEJhY2tpbmdBc3NldChcbiAgICAgICAgY2xhc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgICAgICAgICAgIHN0YXRlID0ge3dvcnRoTGVzc1NldHRsZW1lbnQ6IHVuZGVmaW5lZH07XG4gICAgICAgICAgICB1cGRhdGVGbGFnKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHthc3NldCwgc2hvcnRCYWNraW5nQXNzZXR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldElkID0gYXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvcnRCYWNraW5nQXNzZXRJZCA9IHNob3J0QmFja2luZ0Fzc2V0LmdldChcImlkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogbWF5YmUgcHJvcGVybHkgc3Vic2NyaWJlIHRvIG1hcmtldCBpbnN0ZWFkIG9mIGNhbGxpbmcgYXBpIGRpcmVjdGx5P1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxNYXJrZXRQcmljZVByb21pc2UgPSBBcGlzLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKFwiZ2V0X29yZGVyX2Jvb2tcIiwgW3Nob3J0QmFja2luZ0Fzc2V0SWQsIGFzc2V0SWQsIDFdKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyQm9vayA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyQm9vay5iaWRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBOdW1iZXIob3JkZXJCb29rLmJpZHNbMF0ucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2V0dGxlbWVudFByaWNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEhYXNzZXQuZ2V0KFwiYml0YXNzZXRcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQuZ2V0KFwiYml0YXNzZXRcIikuZ2V0KFwic2V0dGxlbWVudF9mdW5kXCIpID4gMFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzZXR0bGVtZW50UHJpY2UgPSBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcImJpdGFzc2V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFwic2V0dGxlbWVudF9wcmljZVwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXR0bGVtZW50UHJpY2UgPSBhc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0bGVtZW50X3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbFNldHRsZW1lbnRQcmljZSA9IG5ldyBQcmljZSh7XG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogc2hvcnRCYWNraW5nQXNzZXRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogc2V0dGxlbWVudFByaWNlLmdldEluKFtcInF1b3RlXCIsIFwiYW1vdW50XCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWljaXNpb246IHNob3J0QmFja2luZ0Fzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogc2V0dGxlbWVudFByaWNlLmdldEluKFtcImJhc2VcIiwgXCJhbW91bnRcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS50b1JlYWwoKTtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGNvbXBhcmUgZnJhY3Rpb25hbCBwcmljZSBpbnN0ZWFkIG9mIHJlYWwgcHJpY2VcbiAgICAgICAgICAgICAgICByZWFsTWFya2V0UHJpY2VQcm9taXNlLnRoZW4ocmVhbE1hcmtldFByaWNlID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ydGhMZXNzU2V0dGxlbWVudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsTWFya2V0UHJpY2UgPiByZWFsU2V0dGxlbWVudFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0UHJpY2U6IHJlYWxNYXJrZXRQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRsZW1lbnRQcmljZTogcmVhbFNldHRsZW1lbnRQcmljZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGbGFnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGbGFnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHt3b3J0aExlc3NTZXR0bGVtZW50LCBtYXJrZXRQcmljZSwgc2V0dGxlbWVudFByaWNlfVxuICAgICAgICAgICAgICAgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3J0aExlc3NTZXR0bGVtZW50PXt3b3J0aExlc3NTZXR0bGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0UHJpY2U9e21hcmtldFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlbWVudFByaWNlPXtzZXR0bGVtZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhXb3J0aExlc3NTZXR0bGVtZW50RmxhZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBQcyBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcbmltcG9ydCBPcGVuU2V0dGxlT3JkZXJzIGZyb20gXCIuL09wZW5TZXR0bGVPcmRlcnNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgUHJpY2VUZXh0IGZyb20gXCIuLi9VdGlsaXR5L1ByaWNlVGV4dFwiO1xuaW1wb3J0IFRyYW5zaXRpb25XcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zaXRpb25XcmFwcGVyXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge0xpbWl0T3JkZXIsIENhbGxPcmRlcn0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQge0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudH0gZnJvbSBcIi4uL1V0aWxpdHkvRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XCI7XG5pbXBvcnQge01hcmtldFByaWNlfSBmcm9tIFwiLi4vVXRpbGl0eS9NYXJrZXRQcmljZVwiO1xuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XG5jb25zdCBsZWZ0QWxpZ24gPSB7dGV4dEFsaWduOiBcImxlZnRcIn07XG5jb25zdCByaWdodEFsaWduID0ge3RleHRBbGlnbjogXCJyaWdodFwifTtcbmNvbnN0IGNlbnRlckFsaWduID0ge3RleHRBbGlnbjogXCJjZW50ZXJcIn07XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGJhc2VTeW1ib2wsXG4gICAgICAgICAgICBxdW90ZVN5bWJvbCxcbiAgICAgICAgICAgIGRhc2hib2FyZCxcbiAgICAgICAgICAgIGlzTXlBY2NvdW50LFxuICAgICAgICAgICAgbGVmdEFsaWduXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAhZGFzaGJvYXJkID8gKFxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0QWxpZ24gPyBsZWZ0QWxpZ24gOiByaWdodEFsaWdufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0QWxpZ24gPyBsZWZ0QWxpZ24gOiByaWdodEFsaWdufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlU3ltYm9sID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtxdW90ZVN5bWJvbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0QWxpZ24gPyBsZWZ0QWxpZ24gOiByaWdodEFsaWdufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlU3ltYm9sID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtiYXNlU3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbiA/IGxlZnRBbGlnbiA6IHJpZ2h0QWxpZ259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5leHBpcmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3dpZHRoOiBcIjYlXCJ9fSAvPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIHtpc015QWNjb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPHRoIGlkPVwiY2FuY2VsQWxsT3JkZXJzXCIgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudHJhZGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0QWxpZ259PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5vcmRlcl9pZFwiIC8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbn0gY29sU3Bhbj1cIjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0QWxpZ259PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbn0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlX21hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS52YWx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UYWJsZUhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcXVvdGVTeW1ib2w6IG51bGwsXG4gICAgYmFzZVN5bWJvbDogbnVsbFxufTtcblxuY2xhc3MgT3JkZXJSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5vcmRlci5mb3Jfc2FsZSAhPT0gdGhpcy5wcm9wcy5vcmRlci5mb3Jfc2FsZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm9yZGVyLmlkICE9PSB0aGlzLnByb3BzLm9yZGVyLmlkIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGUgIT09IHRoaXMucHJvcHMucXVvdGUgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlICE9PSB0aGlzLnByb3BzLmJhc2UgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vcmRlci5tYXJrZXRfYmFzZSAhPT0gdGhpcy5wcm9wcy5vcmRlci5tYXJrZXRfYmFzZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgIG9yZGVyLFxuICAgICAgICAgICAgc2hvd1N5bWJvbHMsXG4gICAgICAgICAgICBkYXNoYm9hcmQsXG4gICAgICAgICAgICBpc015QWNjb3VudCxcbiAgICAgICAgICAgIHNldHRpbmdzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpc0JpZCA9IG9yZGVyLmlzQmlkKCk7XG4gICAgICAgIGNvbnN0IGlzQ2FsbCA9IG9yZGVyLmlzQ2FsbCgpO1xuICAgICAgICBsZXQgdGRDbGFzcyA9IGlzQ2FsbFxuICAgICAgICAgICAgPyBcIm9yZGVySGlzdG9yeUNhbGxcIlxuICAgICAgICAgICAgOiBpc0JpZFxuICAgICAgICAgICAgICAgID8gXCJvcmRlckhpc3RvcnlCaWRcIlxuICAgICAgICAgICAgICAgIDogXCJvcmRlckhpc3RvcnlBc2tcIjtcblxuICAgICAgICBsZXQgcHJpY2VTeW1ib2wgPSBzaG93U3ltYm9scyA/IChcbiAgICAgICAgICAgIDxzcGFuPntgICR7YmFzZS5nZXQoXCJzeW1ib2xcIil9LyR7cXVvdGUuZ2V0KFwic3ltYm9sXCIpfWB9PC9zcGFuPlxuICAgICAgICApIDogbnVsbDtcbiAgICAgICAgbGV0IHZhbHVlU3ltYm9sID0gc2hvd1N5bWJvbHMgPyBcIiBcIiArIGJhc2UuZ2V0KFwic3ltYm9sXCIpIDogbnVsbDtcbiAgICAgICAgbGV0IGFtb3VudFN5bWJvbCA9IHNob3dTeW1ib2xzID8gXCIgXCIgKyBxdW90ZS5nZXQoXCJzeW1ib2xcIikgOiBudWxsO1xuICAgICAgICBsZXQgcHJlZmVycmVkVW5pdCA9IHNldHRpbmdzID8gc2V0dGluZ3MuZ2V0KFwidW5pdFwiKSA6IFwiMS4zLjBcIjtcbiAgICAgICAgbGV0IHF1b3RlQ29sb3IgPSAhaXNCaWQgPyBcInZhbHVlIG5lZ2F0aXZlXCIgOiBcInZhbHVlIHBvc2l0aXZlXCI7XG4gICAgICAgIGxldCBiYXNlQ29sb3IgPSBpc0JpZCA/IFwidmFsdWUgbmVnYXRpdmVcIiA6IFwidmFsdWUgcG9zaXRpdmVcIjtcblxuICAgICAgICByZXR1cm4gIWRhc2hib2FyZCA/IChcbiAgICAgICAgICAgIDx0ciBrZXk9e29yZGVyLmlkfT5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt0ZENsYXNzfSBzdHlsZT17e3BhZGRpbmdMZWZ0OiAxMH19PlxuICAgICAgICAgICAgICAgICAgICA8UHJpY2VUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17b3JkZXIuZ2V0UHJpY2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtwcmljZVN5bWJvbH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNCaWQgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge2Ftb3VudFN5bWJvbH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNCaWQgPyBcImFtb3VudFRvUmVjZWl2ZVwiIDogXCJhbW91bnRGb3JTYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7dmFsdWVTeW1ib2x9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtvcmRlci5leHBpcmF0aW9uLnRvTG9jYWxlU3RyaW5nKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUob3JkZXIuZXhwaXJhdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcInNob3J0X2N1c3RvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6IFwiNiVcIn19PlxuICAgICAgICAgICAgICAgICAgICB7aXNDYWxsID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcm9zcy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmNyb3NzX2NpcmNsZS5jYW5jZWxfb3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8dHIga2V5PXtvcmRlci5pZH0gY2xhc3NOYW1lPVwiY2xpY2thYmxlXCI+XG4gICAgICAgICAgICAgICAge2lzTXlBY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NhbGwgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJDYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGVja0NhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hcmtldC8ke3F1b3RlLmdldChcInN5bWJvbFwiKX1fJHtiYXNlLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnRyYWRlLnRyYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsZWZ0QWxpZ259PiN7b3JkZXIuaWQuc3Vic3RyaW5nKDQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI0XCIgc3R5bGU9e2xlZnRBbGlnbn0gb25DbGljaz17dGhpcy5wcm9wcy5vbkZsaXB9PlxuICAgICAgICAgICAgICAgICAgICB7aXNCaWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLmJ1eV9kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRUb1JlY2VpdmVcIiA6IFwiYW1vdW50Rm9yU2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRGb3JTYWxlXCIgOiBcImFtb3VudFRvUmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZU5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M9e3F1b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzcz17YmFzZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YmFzZS5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2Uuc2VsbF9kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRUb1JlY2VpdmVcIiA6IFwiYW1vdW50Rm9yU2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0PXt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRGb3JTYWxlXCIgOiBcImFtb3VudFRvUmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZU5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M9e3F1b3RlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzcz17YmFzZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YmFzZS5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGVmdEFsaWdufSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRmxpcH0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e29yZGVyLnNlbGxQcmljZSgpLmJhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17b3JkZXIuc2VsbFByaWNlKCkuYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17b3JkZXIuc2VsbFByaWNlKCkucXVvdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e29yZGVyLnNlbGxQcmljZSgpLnF1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9sc1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsZWZ0QWxpZ259IG9uQ2xpY2s9e3RoaXMucHJvcHMub25GbGlwfT5cbiAgICAgICAgICAgICAgICAgICAge2lzQmlkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGUuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3N5bWJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGUuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3N5bWJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRmxpcH0+XG4gICAgICAgICAgICAgICAgICAgIDxFcXVpdmFsZW50VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17b3JkZXIuYW1vdW50Rm9yU2FsZSgpLmdldEFtb3VudCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFzc2V0PXtvcmRlci5hbW91bnRGb3JTYWxlKCkuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBub0RlY2ltYWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Bc3NldD17cHJlZmVycmVkVW5pdH1cbiAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17cHJlZmVycmVkVW5pdH0gLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk9yZGVyUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93U3ltYm9sczogZmFsc2Vcbn07XG5cbmNsYXNzIE15T3Blbk9yZGVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogcHJvcHMuYWN0aXZlVGFiLFxuICAgICAgICAgICAgcm93Q291bnQ6IDIwLFxuICAgICAgICAgICAgc2hvd0FsbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0T3JkZXJzID0gdGhpcy5fZ2V0T3JkZXJzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlVGFiICE9PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYikge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKG5leHRQcm9wcy5hY3RpdmVUYWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlU2Nyb2xsYmFycyAmJlxuICAgICAgICAgICAgbmV4dFN0YXRlLnNob3dBbGwgIT0gdGhpcy5zdGF0ZS5zaG93QWxsXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSB0aGlzLnJlZnMuY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKCFuZXh0U3RhdGUuc2hvd0FsbCkge1xuICAgICAgICAgICAgICAgIFBzLmRlc3Ryb3koY29udGVudENvbnRhaW5lcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFBzLmluaXRpYWxpemUoY29udGVudENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgUHMudXBkYXRlKGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5jb250ZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5jb250ZW50VHJhbnNpdGlvbi5yZXNldEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXIpIGNvbnRlbnRDb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmFzZVN5bWJvbCAhPT0gdGhpcy5wcm9wcy5iYXNlU3ltYm9sIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVTeW1ib2wgIT09IHRoaXMucHJvcHMucXVvdGVTeW1ib2wgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jbGFzc05hbWUgIT09IHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuYWN0aXZlVGFiICE9PSB0aGlzLnByb3BzLmFjdGl2ZVRhYiB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmFjdGl2ZVRhYiAhPT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWIgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5zaG93QWxsICE9PSB0aGlzLnN0YXRlLnNob3dBbGwgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaGlkZVNjcm9sbGJhcnMpIHtcbiAgICAgICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gdGhpcy5yZWZzLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyKSBQcy5pbml0aWFsaXplKGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5oaWRlU2Nyb2xsYmFycyB8fFxuICAgICAgICAgICAgKHRoaXMucHJvcHMuaGlkZVNjcm9sbGJhcnMgJiYgdGhpcy5zdGF0ZS5zaG93QWxsKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gdGhpcy5yZWZzLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyKSBQcy51cGRhdGUoY29udGVudENvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgY29udGVudENvbnRhaW5lciA9IHRoaXMucmVmcy5jb250YWluZXI7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLmhpZGVTY3JvbGxiYXJzICE9PSB0aGlzLnByb3BzLmhpZGVTY3JvbGxiYXJzICYmXG4gICAgICAgICAgICBuZXh0UHJvcHMuaGlkZVNjcm9sbGJhcnNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBQcy5kZXN0cm95KGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLmhpZGVTY3JvbGxiYXJzICE9PSB0aGlzLnByb3BzLmhpZGVTY3JvbGxiYXJzICYmXG4gICAgICAgICAgICAhbmV4dFByb3BzLmhpZGVTY3JvbGxiYXJzXG4gICAgICAgICkge1xuICAgICAgICAgICAgUHMuaW5pdGlhbGl6ZShjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMucmVmcy5jb250ZW50VHJhbnNpdGlvbi5yZXNldEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXIpIGNvbnRlbnRDb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIFBzLnVwZGF0ZShjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblNldFNob3dBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0FsbDogIXRoaXMuc3RhdGUuc2hvd0FsbFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0T3JkZXJzKCkge1xuICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnQsIGJhc2UsIHF1b3RlLCBmZWVkUHJpY2V9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgb3JkZXJzID0gY3VycmVudEFjY291bnQuZ2V0KFwib3JkZXJzXCIpLFxuICAgICAgICAgICAgY2FsbF9vcmRlcnMgPSBjdXJyZW50QWNjb3VudC5nZXQoXCJjYWxsX29yZGVyc1wiKTtcbiAgICAgICAgY29uc3QgYmFzZUlEID0gYmFzZS5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHF1b3RlSUQgPSBxdW90ZS5nZXQoXCJpZFwiKTtcbiAgICAgICAgY29uc3QgYXNzZXRzID0ge1xuICAgICAgICAgICAgW2Jhc2UuZ2V0KFwiaWRcIildOiB7cHJlY2lzaW9uOiBiYXNlLmdldChcInByZWNpc2lvblwiKX0sXG4gICAgICAgICAgICBbcXVvdGUuZ2V0KFwiaWRcIildOiB7cHJlY2lzaW9uOiBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIil9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBsaW1pdE9yZGVycyA9IG9yZGVyc1xuICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgICAgLm1hcChvcmRlciA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG8gPSBDaGFpblN0b3JlLmdldE9iamVjdChvcmRlcik7XG4gICAgICAgICAgICAgICAgaWYgKCFvKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgc2VsbEJhc2UgPSBvLmdldEluKFtcInNlbGxfcHJpY2VcIiwgXCJiYXNlXCIsIFwiYXNzZXRfaWRcIl0pLFxuICAgICAgICAgICAgICAgICAgICBzZWxsUXVvdGUgPSBvLmdldEluKFtcInNlbGxfcHJpY2VcIiwgXCJxdW90ZVwiLCBcImFzc2V0X2lkXCJdKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIChzZWxsQmFzZSA9PT0gYmFzZUlEICYmIHNlbGxRdW90ZSA9PT0gcXVvdGVJRCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHNlbGxCYXNlID09PSBxdW90ZUlEICYmIHNlbGxRdW90ZSA9PT0gYmFzZUlEKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExpbWl0T3JkZXIoby50b0pTKCksIGFzc2V0cywgcXVvdGUuZ2V0KFwiaWRcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKTtcblxuICAgICAgICBsZXQgY2FsbE9yZGVycyA9IGNhbGxfb3JkZXJzXG4gICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgICAubWFwKG9yZGVyID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbyA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KG9yZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGxCYXNlID0gby5nZXRJbihbXCJjYWxsX3ByaWNlXCIsIFwiYmFzZVwiLCBcImFzc2V0X2lkXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxRdW90ZSA9IG8uZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsbF9wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsbEJhc2UgPT09IGJhc2VJRCAmJiBzZWxsUXVvdGUgPT09IHF1b3RlSUQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsbEJhc2UgPT09IHF1b3RlSUQgJiYgc2VsbFF1b3RlID09PSBiYXNlSUQpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZlZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IENhbGxPcmRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnRvSlMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaXNNYXJnaW5DYWxsZWQoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGltaXRPcmRlcnMuY29uY2F0KGNhbGxPcmRlcnMpO1xuICAgIH1cblxuICAgIF9jaGFuZ2VUYWIodGFiKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBvcmRlcnNUYWI6IHRhYlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVUYWI6IHRhYlxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFbnN1cmUgdGhhdCBmb2N1cyBnb2VzIGJhY2sgdG8gdG9wIG9mIHNjcm9sbGFibGUgY29udGFpbmVyIHdoZW4gdGFiIGlzIGNoYW5nZWRcbiAgICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSB0aGlzLnJlZnMuY29udGFpbmVyO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgIFBzLnVwZGF0ZShjb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICBzZXRUaW1lb3V0KFJlYWN0VG9vbHRpcC5yZWJ1aWxkLCAxMDAwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YmFzZSwgcXVvdGUsIHF1b3RlU3ltYm9sLCBiYXNlU3ltYm9sLCBzZXR0bGVPcmRlcnN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVUYWIsIHNob3dBbGwsIHJvd0NvdW50fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFiYXNlIHx8ICFxdW90ZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRDb250YWluZXI7XG4gICAgICAgIGxldCBmb290ZXJDb250YWluZXI7XG5cbiAgICAgICAgLy8gSXMgYXNzZXQgYSBCaXRBc3NldCB3aXRoIFNldHRsZW1lbnRzXG4gICAgICAgIGxldCBiYXNlSXNCaXRBc3NldCA9XG4gICAgICAgICAgICBiYXNlLmdldChcImJpdGFzc2V0X2RhdGFfaWRcIikgJiYgc2V0dGxlT3JkZXJzLnNpemUgPiAwXG4gICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgbGV0IHF1b3RlSXNCaXRBc3NldCA9XG4gICAgICAgICAgICBxdW90ZS5nZXQoXCJiaXRhc3NldF9kYXRhX2lkXCIpICYmIHNldHRsZU9yZGVycy5zaXplID4gMFxuICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgIDogZmFsc2U7XG5cbiAgICAgICAge1xuICAgICAgICAgICAgLyogVXNlcnMgT3BlbiBPcmRlcnMgVGFiIChkZWZhdWx0KSAqL1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWN0aXZlVGFiIHx8IGFjdGl2ZVRhYiA9PSBcIm15X29yZGVyc1wiKSB7XG4gICAgICAgICAgICBjb25zdCBvcmRlcnMgPSB0aGlzLl9nZXRPcmRlcnMoKTtcbiAgICAgICAgICAgIGxldCBlbXB0eVJvdyA9IChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPVwiNVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQubm9fb3JkZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGJpZHMgPSBvcmRlcnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pc0JpZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuZ2V0UHJpY2UoKSAtIGEuZ2V0UHJpY2UoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAob3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBvcmRlci5nZXRQcmljZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3JkZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLm9uQ2FuY2VsLmJpbmQodGhpcywgb3JkZXIuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGFza3MgPSBvcmRlcnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWEuaXNCaWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmdldFByaWNlKCkgLSBiLmdldFByaWNlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKG9yZGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gb3JkZXIuZ2V0UHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlclJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29yZGVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5vbkNhbmNlbC5iaW5kKHRoaXMsIG9yZGVyLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCByb3dzID0gW107XG5cbiAgICAgICAgICAgIGlmIChhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJvd3MgPSByb3dzLmNvbmNhdChhc2tzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJpZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcm93cyA9IHJvd3MuY29uY2F0KGJpZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm9wcy5wcmljZSAtIGIucHJvcHMucHJpY2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHJvd3NMZW5ndGggPSByb3dzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICghc2hvd0FsbCkge1xuICAgICAgICAgICAgICAgIHJvd3Muc3BsaWNlKHJvd0NvdW50LCByb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIgPSAoXG4gICAgICAgICAgICAgICAgPFRyYW5zaXRpb25XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImNvbnRlbnRUcmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGJvZHlcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cm93cy5sZW5ndGggPyByb3dzIDogZW1wdHlSb3d9XG4gICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvb3RlckNvbnRhaW5lciA9XG4gICAgICAgICAgICAgICAgcm93c0xlbmd0aCA+IDExID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyYm9vay1zaG93YWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLl9vblNldFNob3dBbGwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZXhjaGFuZ2UuaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImV4Y2hhbmdlLnNob3dfYWxsX29yZGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Y291bnQ9e3Jvd3NMZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB7XG4gICAgICAgICAgICAvKiBPcGVuIFNldHRsZSBPcmRlcnMgKi9cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlVGFiICYmIGFjdGl2ZVRhYiA9PSBcIm9wZW5fc2V0dGxlbWVudFwiKSB7XG4gICAgICAgICAgICBsZXQgc2V0dGxlT3JkZXJzTGVuZ3RoID0gc2V0dGxlT3JkZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKHNldHRsZU9yZGVyc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNob3dBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGxlT3JkZXJzLnNwbGljZShyb3dDb3VudCwgc2V0dGxlT3JkZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyID0gKFxuICAgICAgICAgICAgICAgIDxPcGVuU2V0dGxlT3JkZXJzXG4gICAgICAgICAgICAgICAgICAgIGtleT1cInNldHRsZV9vcmRlcnNcIlxuICAgICAgICAgICAgICAgICAgICBvcmRlcnM9e3NldHRsZU9yZGVyc31cbiAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sPXtiYXNlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbD17cXVvdGVTeW1ib2x9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvb3RlckNvbnRhaW5lciA9XG4gICAgICAgICAgICAgICAgc2V0dGxlT3JkZXJzTGVuZ3RoID4gMTEgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJib29rLXNob3dhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuX29uU2V0U2hvd0FsbC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJleGNoYW5nZS5oaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZXhjaGFuZ2Uuc2hvd19hbGxfb3JkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3djb3VudD17c2V0dGxlT3JkZXJzTGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgICBrZXk9XCJvcGVuX29yZGVyc1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pbm5lckNsYXNzfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5pbm5lclN0eWxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9IZWFkZXIgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09IFwibXlfb3JkZXJzXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm15X29yZGVyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PSBcIm9wZW5fc2V0dGxlbWVudFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5zZXR0bGVfb3JkZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIGxlZnQtb3JkZXJib29rLWhlYWRlciBtYXJrZXQtcmlnaHQtcGFkZGluZy1vbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGV4dC1yaWdodCBmaXhlZC10YWJsZSBtYXJrZXQtcmlnaHQtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT0gXCJteV9vcmRlcnNcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sPXtiYXNlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2w9e3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGVTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXIgZ3JpZC1ibG9jayBtYXJrZXQtcmlnaHQtcGFkZGluZy1vbmx5IG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogIXRoaXMucHJvcHMudGlueVNjcmVlbiA/IDI2MCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAyNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxM3B4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBvcmRlci10YWJsZSB0YWJsZS1oaWdobGlnaHQtaG92ZXIgdGFibGUtaG92ZXIgbm8tc3RyaXBlcyB0ZXh0LXJpZ2h0IGZpeGVkLXRhYmxlIG1hcmtldC1yaWdodC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnRDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2Zvb3RlckNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTXlPcGVuT3JkZXJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBiYXNlOiB7fSxcbiAgICBxdW90ZToge30sXG4gICAgb3JkZXJzOiB7fSxcbiAgICBxdW90ZVN5bWJvbDogXCJcIixcbiAgICBiYXNlU3ltYm9sOiBcIlwiXG59O1xuXG5NeU9wZW5PcmRlcnMucHJvcFR5cGVzID0ge1xuICAgIGJhc2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBxdW90ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG9yZGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHF1b3RlU3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYmFzZVN5bWJvbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQge09yZGVyUm93LCBUYWJsZUhlYWRlciwgTXlPcGVuT3JkZXJzfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IGdldExvY2FsZSBmcm9tIFwiYnJvd3Nlci1sb2NhbGVcIjtcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YmFzZVN5bWJvbCwgcXVvdGVTeW1ib2x9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VTeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEFzc2V0TmFtZSBuYW1lPXtiYXNlU3ltYm9sfSAvPi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtxdW90ZVN5bWJvbH0gLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGVTeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEFzc2V0TmFtZSBuYW1lPXtxdW90ZVN5bWJvbH0gLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5zZXR0bGVtZW50X2RhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVGFibGVIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHF1b3RlU3ltYm9sOiBudWxsLFxuICAgIGJhc2VTeW1ib2w6IG51bGxcbn07XG5cbmNsYXNzIFNldHRsZU9yZGVyUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YmFzZSwgcXVvdGUsIG9yZGVyLCBzaG93U3ltYm9sc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBwcmljZSA9XG4gICAgICAgICAgICBiYXNlLmdldChcImlkXCIpID09IFwiMS4zLjBcIlxuICAgICAgICAgICAgICAgID8gb3JkZXIuZ2V0UHJpY2UoKSAvICgxICsgb3JkZXIub2Zmc2V0X3BlcmNlbnQgLyAxMDAwMClcbiAgICAgICAgICAgICAgICA6IG9yZGVyLmdldFByaWNlKCkgKiAoMSArIG9yZGVyLm9mZnNldF9wZXJjZW50IC8gMTAwMDApO1xuICAgICAgICBsZXQgYW1vdW50U3ltYm9sID0gc2hvd1N5bWJvbHMgPyBcIiBcIiArIHF1b3RlLmdldChcInN5bWJvbFwiKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBzdHlsZT17e3BhZGRpbmdSaWdodDogNX19PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKHByaWNlLCBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIikpfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge2Ftb3VudFN5bWJvbH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIW9yZGVyLmlzQmlkKCkgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhb3JkZXIuaXNCaWQoKSA/IFwiYW1vdW50VG9SZWNlaXZlXCIgOiBcImFtb3VudEZvclNhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e25ldyBEYXRlKG9yZGVyLnNldHRsZW1lbnRfZGF0ZSkudG9TdHJpbmcoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKG9yZGVyLnNldHRsZW1lbnRfZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExvY2FsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKFwiZW4tdXNcIikgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtYXJrZXRfaGlzdG9yeV91c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJtYXJrZXRfaGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNldHRsZU9yZGVyUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93U3ltYm9sczogZmFsc2UsXG4gICAgaW52ZXJ0OiBmYWxzZVxufTtcblxuY2xhc3MgT3BlblNldHRsZU9yZGVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRBY2NvdW50ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMub3JkZXJzICE9PSB0aGlzLnByb3BzLm9yZGVyc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtvcmRlcnMsIGJhc2UsIHF1b3RlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGFjdGl2ZU9yZGVycyA9IG51bGw7XG5cbiAgICAgICAgaWYgKG9yZGVycy5zaXplID4gMCAmJiBiYXNlICYmIHF1b3RlKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgICAgICBhY3RpdmVPcmRlcnMgPSBvcmRlcnNcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pc0JlZm9yZShiKSA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAob3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSA8IG9yZGVyLnNldHRsZW1lbnRfZGF0ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0bGVPcmRlclJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lm5vX29yZGVyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgIHJlZj1cImNvbnRlbnRUcmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0Ym9keVwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthY3RpdmVPcmRlcnN9XG4gICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuT3BlblNldHRsZU9yZGVycy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYmFzZToge30sXG4gICAgcXVvdGU6IHt9LFxuICAgIG9yZGVyczoge30sXG4gICAgcXVvdGVTeW1ib2w6IFwiXCIsXG4gICAgYmFzZVN5bWJvbDogXCJcIlxufTtcblxuT3BlblNldHRsZU9yZGVycy5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb3JkZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcXVvdGVTeW1ib2w6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiYXNlU3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9wZW5TZXR0bGVPcmRlcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuL0Zvcm1hdHRlZFByaWNlXCI7XG5pbXBvcnQgbWFya2V0VXRpbHMgZnJvbSBcImNvbW1vbi9tYXJrZXRfdXRpbHNcIjtcblxuY2xhc3MgTWFya2V0U3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gbnVsbDtcbiAgICAgICAgY29uc3Qge21hcmtldE5hbWV9ID0gbWFya2V0VXRpbHMuZ2V0TWFya2V0TmFtZShwcm9wcy5iYXNlLCBwcm9wcy5xdW90ZSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtYXJrZXROYW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2NoZWNrU3RhdHMobmV3U3RhdHMgPSB7Y2xvc2U6IHt9fSwgb2xkU3RhdHMgPSB7Y2xvc2U6IHt9fSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV3U3RhdHMudm9sdW1lQmFzZSAhPT0gb2xkU3RhdHMudm9sdW1lQmFzZSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIG5ld1N0YXRzLmNsb3NlICYmIG5ld1N0YXRzLmNsb3NlLmJhc2UsXG4gICAgICAgICAgICAgICAgb2xkU3RhdHMuY2xvc2UgJiYgb2xkU3RhdHMuY2xvc2UuYmFzZVxuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIG5ld1N0YXRzLmNsb3NlICYmIG5ld1N0YXRzLmNsb3NlLnF1b3RlLFxuICAgICAgICAgICAgICAgIG9sZFN0YXRzLmNsb3NlICYmIG9sZFN0YXRzLmNsb3NlLnF1b3RlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLl9jaGVja1N0YXRzKFxuICAgICAgICAgICAgICAgIG5wLmFsbE1hcmtldFN0YXRzLmdldCh0aGlzLnN0YXRlLm1hcmtldE5hbWUpLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxsTWFya2V0U3RhdHMuZ2V0KHRoaXMuc3RhdGUubWFya2V0TmFtZSlcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgIG5wLmJhc2UuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMuYmFzZS5nZXQoXCJpZFwiKSB8fFxuICAgICAgICAgICAgbnAucXVvdGUuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMucXVvdGUuZ2V0KFwiaWRcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHNJbnRlcnZhbCkgdGhpcy5zdGF0c0ludGVydmFsKCk7XG4gICAgfVxufVxuXG5jbGFzcyBNYXJrZXRQcmljZUlubmVyIGV4dGVuZHMgTWFya2V0U3RhdHMge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShucCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FsbE1hcmtldFN0YXRzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHttYXJrZXROYW1lfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IG1hcmtldFN0YXRzID0gYWxsTWFya2V0U3RhdHMuZ2V0KG1hcmtldE5hbWUpO1xuICAgICAgICBsZXQgcHJpY2UgPSBtYXJrZXRTdGF0cyAmJiBtYXJrZXRTdGF0cy5wcmljZSA/IG1hcmtldFN0YXRzLnByaWNlIDogbnVsbDtcbiAgICAgICAgLy8gaWYgKCFwcmljZSAmJiBtYXJrZXRTdGF0c0ludmVydGVkICYmIG1hcmtldFN0YXRzSW52ZXJ0ZWQucHJpY2UpIHtcbiAgICAgICAgLy8gICAgIHByaWNlID0gbWFya2V0U3RhdHNJbnZlcnRlZC5wcmljZS5pbnZlcnQoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NuYW1lcyhcIlwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuICAgICAgICAgICAgICAgIHtwcmljZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17cHJpY2UuYmFzZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtwcmljZS5iYXNlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtwcmljZS5xdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cHJpY2UucXVvdGUuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e3RoaXMucHJvcHMuZm9yY2VfZGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzPXt0aGlzLnByb3BzLmhpZGVfc3ltYm9sc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBcIm4vYVwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1hcmtldFByaWNlSW5uZXIgPSBBc3NldFdyYXBwZXIoTWFya2V0UHJpY2VJbm5lciwge1xuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdXG59KTtcblxuY2xhc3MgTWFya2V0UHJpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxNYXJrZXRQcmljZUlubmVyIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbk1hcmtldFByaWNlID0gY29ubmVjdChcbiAgICBNYXJrZXRQcmljZSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtNYXJrZXRzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWxsTWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IHtNYXJrZXRQcmljZSwgTWFya2V0U3RhdHN9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtcbiAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3MsXG4gICAgdmFsaWRhdGVBZGRyZXNzLFxuICAgIFdpdGhkcmF3QWRkcmVzc2VzLFxuICAgIGdldERlcG9zaXRMaW1pdCxcbiAgICBlc3RpbWF0ZU91dHB1dCxcbiAgICBlc3RpbWF0ZUlucHV0XG59IGZyb20gXCJjb21tb24vZ2F0ZXdheU1ldGhvZHNcIjtcbmltcG9ydCBCbG9ja1RyYWRlc0RlcG9zaXRBZGRyZXNzQ2FjaGUgZnJvbSBcImNvbW1vbi9CbG9ja1RyYWRlc0RlcG9zaXRBZGRyZXNzQ2FjaGVcIjtcbmltcG9ydCBDb3B5QnV0dG9uIGZyb20gXCIuLi9VdGlsaXR5L0NvcHlCdXR0b25cIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQge2Jsb2NrVHJhZGVzQVBJc30gZnJvbSBcImFwaS9hcGlDb25maWdcIjtcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuLi9VdGlsaXR5L0Zsb2F0aW5nRHJvcGRvd25cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlLnJlYWN0XCI7XG5pbXBvcnQge01vZGFsLCBCdXR0b24sIFRvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuLy8gaW1wb3J0IERlcG9zaXRGaWF0T3BlbkxlZGdlciBmcm9tIFwiY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9EZXBvc2l0RmlhdE9wZW5MZWRnZXJcIjtcbi8vIGltcG9ydCBXaXRoZHJhd0ZpYXRPcGVuTGVkZ2VyIGZyb20gXCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9vcGVubGVkZ2VyL1dpdGhkcmF3RmlhdE9wZW5MZWRnZXJcIjtcblxuY2xhc3MgU2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzZW5kZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogMCxcbiAgICAgICAgICAgIGRlcG9zaXRMaW1pdDogMCxcbiAgICAgICAgICAgIHNlbmRBbW91bnQ6IDAsXG4gICAgICAgICAgICB0b0FkZHJlc3M6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QocHJvcHMud2FsbGV0VHlwZSksXG4gICAgICAgICAgICB3aXRoZHJhd1ZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgYW1vdW50RXJyb3I6IG51bGwsXG4gICAgICAgICAgICBpbnB1dEFtb3VudDogMCxcbiAgICAgICAgICAgIHJlY2VpdmVMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxpbWl0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGFwaUVycm9yOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyh0aGlzLnN0YXRlLnRvQWRkcmVzcywgcHJvcHMpO1xuXG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IEJsb2NrVHJhZGVzRGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXREZXBvc2l0QWRkcmVzcygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXREZXBvc2l0TGltaXQoKTtcbiAgICAgICAgdGhpcy5fZXN0aW1hdGVPdXRwdXQoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5wLmlucHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMuaW5wdXRDb2luVHlwZSB8fFxuICAgICAgICAgICAgbnAub3V0cHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMub3V0cHV0Q29pblR5cGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9nZXREZXBvc2l0TGltaXQobnApO1xuICAgICAgICAgICAgdGhpcy5fZXN0aW1hdGVPdXRwdXQobnApO1xuICAgICAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdEFkZHJlc3MobnApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbnAuaW5wdXRDb2luVHlwZSAhPT0gdGhpcy5wcm9wcy5pbnB1dENvaW5UeXBlIHx8XG4gICAgICAgICAgICBucC5vdXRwdXRDb2luVHlwZSAhPT0gdGhpcy5wcm9wcy5vdXRwdXRDb2luVHlwZSB8fFxuICAgICAgICAgICAgbnAuc2VuZGVyICE9PSB0aGlzLnByb3BzLnNlbmRlciB8fFxuICAgICAgICAgICAgbnAuYXNzZXQgIT09IHRoaXMucHJvcHMuYXNzZXQgfHxcbiAgICAgICAgICAgIG5wLmlzQXZhaWxhYmxlICE9PSB0aGlzLnByb3BzLmlzQXZhaWxhYmxlIHx8XG4gICAgICAgICAgICBucC5pc0Rvd24gIT09IHRoaXMucHJvcHMuaXNEb3duIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnMsIHRoaXMuc3RhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldERlcG9zaXRMaW1pdChwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGltaXRMb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgIGdldERlcG9zaXRMaW1pdChwcm9wcy5pbnB1dENvaW5UeXBlLCBwcm9wcy5vdXRwdXRDb2luVHlwZSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRlcG9zaXRMaW1pdDogcmVzLmRlcG9zaXRMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgbGltaXRMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVwb3NpdCBsaW1pdCBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGVwb3NpdExpbWl0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdExvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25BbW91bnRDaGFuZ2UodmFsdWUsIGUpIHtcbiAgICAgICAgY29uc3QgcmVnZXhwX251bWVyYWwgPSBuZXcgUmVnRXhwKC9bWzpkaWdpdDpdXS8pO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICAvLyBFbnN1cmUgaW5wdXQgaXMgdmFsaWRcbiAgICAgICAgaWYgKCFyZWdleHBfbnVtZXJhbC50ZXN0KHRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2csIFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2F0Y2ggaW5pdGlhbCBkZWNpbWFsIGlucHV0XG4gICAgICAgIGlmICh0YXJnZXQudmFsdWUuY2hhckF0KDApID09IFwiLlwiKSB7XG4gICAgICAgICAgICB0YXJnZXQudmFsdWUgPSBcIjAuXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYXRjaCBkb3VibGUgZGVjaW1hbCBhbmQgcmVtb3ZlIGlmIGludmFsaWRcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGFyZ2V0LnZhbHVlLmNoYXJBdCh0YXJnZXQudmFsdWUubGVuZ3RoKSAhPSB0YXJnZXQudmFsdWUuc2VhcmNoKFwiLlwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQudmFsdWUgPSB1dGlscy5saW1pdEJ5UHJlY2lzaW9uKHRhcmdldC52YWx1ZSwgOCk7XG5cbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcImlucHV0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAge2lucHV0QW1vdW50OiB0YXJnZXQudmFsdWV9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lc3RpbWF0ZU91dHB1dC5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIm91dHB1dFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHtvdXRwdXRBbW91bnQ6IHRhcmdldC52YWx1ZX0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VzdGltYXRlSW5wdXQuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZXN0aW1hdGVPdXRwdXQocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVBbW91bnQ6IDAsIHNlbmRBbW91bnQ6IHRoaXMuc3RhdGUuaW5wdXRBbW91bnR9KTtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlucHV0QW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlTG9hZGluZzogdHJ1ZX0pO1xuICAgICAgICBlc3RpbWF0ZU91dHB1dChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRBbW91bnQsXG4gICAgICAgICAgICBwcm9wcy5pbnB1dENvaW5UeXBlLFxuICAgICAgICAgICAgcHJvcHMub3V0cHV0Q29pblR5cGVcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRBbW91bnQ6IHJlcy5pbnB1dEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogcmVzLm91dHB1dEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNlaXZlIGFtb3VudCBlcnI6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZUxvYWRpbmc6IGZhbHNlLCBhcGlFcnJvcjogdHJ1ZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2VzdGltYXRlSW5wdXQocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVBbW91bnQ6IHRoaXMuc3RhdGUub3V0cHV0QW1vdW50LCBzZW5kQW1vdW50OiAwfSk7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5vdXRwdXRBbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVMb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgIGVzdGltYXRlSW5wdXQoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm91dHB1dEFtb3VudCxcbiAgICAgICAgICAgIHByb3BzLmlucHV0Q29pblR5cGUsXG4gICAgICAgICAgICBwcm9wcy5vdXRwdXRDb2luVHlwZVxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEFtb3VudDogcmVzLmlucHV0QW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBzZW5kQW1vdW50OiB1dGlscy5saW1pdEJ5UHJlY2lzaW9uKHJlcy5pbnB1dEFtb3VudCwgOCksXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZCBhbW91bnQgZXJyOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVMb2FkaW5nOiBmYWxzZSwgYXBpRXJyb3I6IHRydWV9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXREZXBvc2l0QWRkcmVzcyhwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgaWYgKCFwcm9wcy5pbnB1dENvaW5UeXBlKSByZXR1cm47XG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3M7XG5cbiAgICAgICAgLyogQWx3YXlzIGdlbmVyYXRlIG5ldyBhZGRyZXNzL21lbW8gZm9yIGluY3JlYXNlZCBzZWN1cml0eSAqL1xuICAgICAgICAvKmxldCBhY2NvdW50X25hbWUgPSBwcm9wcy5zZW5kZXIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmdldENhY2hlZElucHV0QWRkcmVzcyhcbiAgICAgICAgICAgIFwiYmxvY2t0cmFkZXNcIixcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgIHByb3BzLmlucHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIHByb3BzLm91dHB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTsqL1xuICAgICAgICBpZiAoIXJlY2VpdmVfYWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzOiBudWxsfSk7XG4gICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdChwcm9wcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXREZXBvc2l0T2JqZWN0KHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXRDb2luVHlwZTogcHJvcHMuaW5wdXRDb2luVHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGU6IHByb3BzLm91dHB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBvdXRwdXRBZGRyZXNzOiBwcm9wcy5zZW5kZXIuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHVybDogYmxvY2tUcmFkZXNBUElzLkJBU0UsXG4gICAgICAgICAgICBzdGF0ZUNhbGxiYWNrOiByZWNlaXZlX2FkZHJlc3MgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MoXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmlucHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VuZGVyLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRGVwb3NpdEFkZHJlc3MoXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcbiAgICAgICAgb3V0cHV0X2NvaW5fdHlwZSxcbiAgICAgICAgYWNjb3VudCxcbiAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmNhY2hlSW5wdXRBZGRyZXNzKFxuICAgICAgICAgICAgXCJibG9ja3RyYWRlc1wiLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGlucHV0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgUmVhY3RUb29sdGlwLnJlYnVpbGQoKTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVBZGRyZXNzKGFkZHJlc3MsIHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB2YWxpZGF0ZUFkZHJlc3Moe3dhbGxldFR5cGU6IHByb3BzLndhbGxldFR5cGUsIG5ld0FkZHJlc3M6IGFkZHJlc3N9KVxuICAgICAgICAgICAgLnRoZW4oaXNWYWxpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9BZGRyZXNzID09PSBhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZEFkZHJlc3M6IGlzVmFsaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHZhbGlkYXRpbmcgYWRkcmVzczpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vcGVuUmVnaXN0cmFyU2l0ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG5ld1duZCA9IHdpbmRvdy5vcGVuKFNldHRpbmdzU3RvcmUuc2l0ZV9yZWdpc3RyLCBcIl9ibGFua1wiKTtcbiAgICAgICAgbmV3V25kLm9wZW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgX29uRHJvcERvd25TZWxlY3QoZSkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe3ByZWZlcnJlZEJyaWRnZTogZX0pO1xuICAgIH1cblxuICAgIG9uQmxvY2tUcmFkZXNDb250YWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9wZW4gTmV3IFRhYlwiKTtcbiAgICAgICAgbGV0IHdpbiA9IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuYmxvY2t0cmFkZXMudXMvY29udGFjdFwiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgd2luLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgX3JlbmRlckRlcG9zaXQoKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWUsIHByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZSh0aGlzLnByb3BzLmFzc2V0KTtcbiAgICAgICAgY29uc3Qge3JlY2VpdmVfYWRkcmVzcywgYXBpRXJyb3J9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgaGFzTWVtbyA9XG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MgJiZcbiAgICAgICAgICAgIFwibWVtb1wiIGluIHJlY2VpdmVfYWRkcmVzcyAmJlxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLm1lbW87XG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWx1ZSA9IChyZWNlaXZlX2FkZHJlc3MgJiYgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MpIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IFFSID0gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJRUlwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgPFFSQ29kZSBzaXplPXsxNDB9IHZhbHVlPXthZGRyZXNzVmFsdWV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgYnJpZGdlQXNzZXRzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5icmlkZ2VzLnRvSlMoKSk7XG5cbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gdGhpcy5wcm9wcy5pbnB1dENvaW5UeXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlY2VpdmVOYW1lID0gKHByZWZpeCA/IHByZWZpeCA6IFwiXCIpICsgYXNzZXROYW1lO1xuXG4gICAgICAgIGxldCBwcmljZSA9ICh0aGlzLnN0YXRlLnJlY2VpdmVBbW91bnQgLyB0aGlzLnN0YXRlLmlucHV0QW1vdW50KS50b0ZpeGVkKFxuICAgICAgICAgICAgNFxuICAgICAgICApO1xuICAgICAgICBsZXQgcHJpY2VTdWZmaXggPSByZWNlaXZlTmFtZSArIFwiL1wiICsgaW5wdXROYW1lO1xuXG4gICAgICAgIGNvbnN0IGFib3ZlTGltaXQgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dEFtb3VudCA+IHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5kZXBvc2l0TGltaXQpIHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmRBbW91bnQgPiBwYXJzZUZsb2F0KHRoaXMuc3RhdGUuZGVwb3NpdExpbWl0KTtcbiAgICAgICAgY29uc3QgYWJvdmVMaW1pdFN0eWxlID0gYWJvdmVMaW1pdFxuICAgICAgICAgICAgPyB7Ym9yZGVyOiBcIjFweCBzb2xpZCAjYTk0NDQyXCJ9XG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2JvZHlcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmJ1eS5hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZCB0eXBlPVwidGV4dFwiIHZhbHVlPXtyZWNlaXZlTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5idXkuYnJpZGdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5icmlkZ2VfVFJBREVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQmxvY2tUcmFkZXNDb250YWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5xdWVzdGlvbl9jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XCJCTE9DS1RSQURFU1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogQ2hhbmdlIHRoaXMgd2hlbiB3ZSBnYWluIG1vcmUgYnJkaWdlcyAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9eyFhcGlFcnJvciA/IHtkaXNwbGF5OiBcIlwifSA6IHtkaXNwbGF5OiBcIm5vbmVcIn19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3cgZG91YmxlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNlwiIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuc2VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fib3ZlTGltaXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5vdmVyX2xpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbXNnIGlubGluZS1ibG9jayB0b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5Lm92ZXJfbGltaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2Fib3ZlTGltaXRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VuZEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLl9vbkFtb3VudENoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzPXticmlkZ2VBc3NldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17YnJpZGdlQXNzZXRzLnJlZHVjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXAsIGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYSkgbWFwW2FdID0gYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUVudHJ5PXticmlkZ2VBc3NldHNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlZmVycmVkQnJpZGdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmlkZ2VBc3NldHNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25Ecm9wRG93blNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXJDYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNlwiIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfbGltaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZGVwb3NpdExpbWl0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVwb3NpdExpbWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoNCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yaWdodC1zeW1ib2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3cgZG91YmxlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNlwiIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucmVjZWl2ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthYm92ZUxpbWl0U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlY2VpdmVBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5fb25BbW91bnRDaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRwdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yaWdodC1zeW1ib2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjZWl2ZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC02XCIgc3R5bGU9e3twYWRkaW5nTGVmdDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWNlaXZlTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZm9vdGVyLmxvYWRpbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fib3ZlTGltaXQgPyAwIDogcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1yaWdodC1zeW1ib2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2VTdWZmaXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHshYWRkcmVzc1ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzTWVtbyA/IG51bGwgOiBRUn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5SWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXthZGRyZXNzVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29weUljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMC4zcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnB1cmNoYXNlX25vdGljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRBc3NldD17aW5wdXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dEFzc2V0PXtyZWNlaXZlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2hpZ2hsaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZGRyZXNzVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc01lbW8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMTBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5SWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3JlY2VpdmVfYWRkcmVzcy5tZW1vfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5SWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2FmZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5wdXJjaGFzZV9ub3RpY2VfbWVtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwLjNyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faGlnaGxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlaXZlX2FkZHJlc3MubWVtb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJDdXJyZW50QmFsYW5jZSgpIHtcbiAgICAgICAgY29uc3Qge25hbWU6IGFzc2V0TmFtZX0gPSB1dGlscy5yZXBsYWNlTmFtZSh0aGlzLnByb3BzLmFzc2V0KTtcbiAgICAgICAgY29uc3QgaXNEZXBvc2l0ID0gdGhpcy5wcm9wcy5hY3Rpb24gPT09IFwiZGVwb3NpdFwiO1xuXG4gICAgICAgIGxldCBjdXJyZW50QmFsYW5jZSA9IHRoaXMucHJvcHMuYmFsYW5jZXMuZmluZChiID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiICYmIGIuZ2V0KFwiYXNzZXRfdHlwZVwiKSA9PT0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFzc2V0ID0gY3VycmVudEJhbGFuY2VcbiAgICAgICAgICAgID8gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBjdXJyZW50QmFsYW5jZS5nZXQoXCJhc3NldF90eXBlXCIpLFxuICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgIGFtb3VudDogY3VycmVudEJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IGFwcGx5QmFsYW5jZUJ1dHRvbiA9IGlzRGVwb3NpdCA/IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsIGJvcmRlckxlZnQ6IFwibm9uZVwifX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YXNzZXROYW1lfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAud2l0aGRyYXdfZnVsbFwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLCBib3JkZXJMZWZ0OiBcIm5vbmVcIn19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3VwZGF0ZUFtb3VudC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICFjdXJyZW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VJbnQoY3VycmVudEJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSwgMTApXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xpcHB5XCIgdGl0bGU9XCJpY29ucy5jbGlwcHkud2l0aGRyYXdfZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiBcIjFyZW1cIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7Zm9udFNpemU6IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnYXRld2F5LmJhbGFuY2VfYXNzZXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IWFzc2V0ID8gMCA6IGFzc2V0LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthcHBseUJhbGFuY2VCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNEb3duID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWwgY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS51bmF2YWlsYWJsZV9UUkFERVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogIXRoaXMucHJvcHMuaXNBdmFpbGFibGUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCBjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnVuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlckRlcG9zaXQoKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5TaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2UgPSBCaW5kVG9DaGFpblN0YXRlKFxuICAgIFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZVxuKTtcblxuY2xhc3MgU3RvcmVXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cHJlZmVycmVkQnJpZGdlLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGN1cnJlbnRCcmlkZ2UgPSB0aGlzLnByb3BzLmJyaWRnZXMuZ2V0KHRoaXMucHJvcHMucHJlZmVycmVkQnJpZGdlKTtcbiAgICAgICAgaWYgKCFjdXJyZW50QnJpZGdlKSB7XG4gICAgICAgICAgICBjdXJyZW50QnJpZGdlID0gdGhpcy5wcm9wcy5icmlkZ2VzLmZpcnN0KCk7XG4gICAgICAgICAgICBwcmVmZXJyZWRCcmlkZ2UgPSBjdXJyZW50QnJpZGdlLmlucHV0Q29pblR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2VcbiAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQnJpZGdlPXtwcmVmZXJyZWRCcmlkZ2V9XG4gICAgICAgICAgICAgICAgey4uLmN1cnJlbnRCcmlkZ2UudG9KUygpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblN0b3JlV3JhcHBlciA9IGNvbm5lY3QoXG4gICAgU3RvcmVXcmFwcGVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQnJpZGdlOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJwcmVmZXJyZWRCcmlkZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJidGNcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2VNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYnJpZGdlcykgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC5idXkudGl0bGVcIil9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJjYW5jZWxcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuY2xvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN0b3JlV3JhcHBlciB7Li4udGhpcy5wcm9wc30gb3Blbj17dGhpcy5wcm9wcy52aXNpYmxlfSAvPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBY0E7QUFDQTs7OztBQXpEQTtBQUNBO0FBMkRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBUEE7QUFIQTtBQWNBO0FBZkE7QUFpQkE7QUFqQkE7QUFtQkE7QUFDQTtBQXBCQTtBQXNCQTtBQXRCQTtBQXdCQTtBQUNBO0FBQ0E7QUExQkE7QUE2QkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQVBBO0FBVUE7QUFHQTtBQUpBO0FBWkE7QUFvQkE7QUFyQkE7QUF1QkE7QUF2QkE7QUF5QkE7QUFDQTtBQTFCQTtBQTRCQTtBQTVCQTtBQThCQTtBQUNBO0FBQ0E7QUFoQ0E7QUF0Q0E7QUEwRUE7QUFDQTtBQUVBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFKQTtBQUNBO0FBZUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQVBBO0FBZ0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBREE7QUFEQTtBQUZBO0FBREE7QUFYQTtBQStCQTs7OztBQWpMQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQWlMQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQWRBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFHQTtBQUZBO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUF6REE7QUFBQTtBQUFBO0FBMkRBO0FBQ0E7QUE1REE7QUFBQTtBQUFBO0FBOERBO0FBQ0E7QUEvREE7QUFBQTtBQUFBO0FBZ0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQTdFQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBQ0E7QUFpRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQTNCQTtBQURBO0FBZ0NBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBckJBO0FBMEJBOzs7O0FBckVBO0FBQ0E7QUF1RUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFPQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUtBO0FBQ0E7QUFGQTtBQVhBO0FBREE7QUFEQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQUZBO0FBaERBO0FBaUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFGQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUF4QkE7QUFpQ0E7QUFDQTtBQU9BO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUF4QkE7QUFsQ0E7QUFtRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFWQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFSQTtBQS9IQTtBQTJJQTs7OztBQW5QQTtBQUNBO0FBcVBBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBSUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFSQTtBQURBO0FBQ0E7QUFhQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQU5BO0FBREE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFOQTtBQURBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBUEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBdkJBO0FBREE7QUFSQTtBQURBO0FBNkNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFWQTtBQWNBO0FBNUVBO0FBTEE7QUFxRkE7Ozs7QUEzYUE7QUFDQTtBQTZhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdHhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFIQTtBQXBCQTtBQURBO0FBa0NBOzs7O0FBdkNBO0FBQ0E7QUF5Q0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFIQTtBQURBO0FBREE7QUFyQkE7QUF5Q0E7Ozs7QUFwREE7QUFDQTtBQXNEQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQVJBO0FBREE7QUFEQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTs7OztBQTNEQTtBQUNBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBTEE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBV0E7OztBQUVBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBdENBO0FBQ0E7QUF3Q0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFGQTtBQWVBOzs7O0FBbENBO0FBQ0E7QUFvQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFqQkE7QUFrQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQVNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQWJBO0FBZUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFaQTtBQWNBOzs7QUFHQTtBQUtBO0FBUUE7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQUxBO0FBSkE7QUFzQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBTEE7QUF2QkE7QUFnQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUxBO0FBTEE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFmQTtBQURBO0FBVkE7QUF0QkE7QUFzREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFKQTtBQXZEQTtBQURBO0FBK0VBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVkE7QUFKQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFOQTtBQVpBO0FBcEJBO0FBREE7QUE4Q0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWJBO0FBUEE7QUF5QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVhBO0FBVkE7QUE1QkE7QUFuSUE7QUF6Q0E7QUF3T0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQVZBO0FBSkE7QUFDQTtBQWtCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVJBO0FBVUE7QUFYQTtBQUxBO0FBSkE7QUF5QkE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBVkE7QUFzQkE7Ozs7QUF0bkJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBc25CQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUhBO0FBT0E7Ozs7QUFoQkE7QUFDQTtBQWtCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTUE7QUFYQTtBQUNBO0FBY0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBVUE7QUFWQTtBQWFBOzs7O0FBbEJBO0FBQ0E7QUFEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9