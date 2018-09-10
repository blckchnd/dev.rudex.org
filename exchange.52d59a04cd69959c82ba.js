(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 2387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1269);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(551);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(712);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1262);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2363);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1266);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(865);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Exchange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2388);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(877);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(418);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(878);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1270);
/* harmony import */ var components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2484);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2351);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var ExchangeContainer = function (_React$Component) {
    _inherits(ExchangeContainer, _React$Component);

    function ExchangeContainer() {
        _classCallCheck(this, ExchangeContainer);

        return _possibleConstructorReturn(this, (ExchangeContainer.__proto__ || Object.getPrototypeOf(ExchangeContainer)).apply(this, arguments));
    }

    _createClass(ExchangeContainer, [{
        key: "render",
        value: function render() {
            var symbols = this.props.match.params.marketID.toUpperCase().split("_");
            if (symbols[0] === symbols[1]) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_14__["default"], { subtitle: "market_not_found_subtitle" });
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_7___default.a,
                {
                    stores: [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"], stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__["default"]],
                    inject: {
                        locale: function locale() {
                            return stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentLocale;
                        },
                        lockedWalletState: function lockedWalletState() {
                            return stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().locked;
                        },
                        marketLimitOrders: function marketLimitOrders() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketLimitOrders;
                        },
                        marketCallOrders: function marketCallOrders() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketCallOrders;
                        },
                        invertedCalls: function invertedCalls() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().invertedCalls;
                        },
                        marketSettleOrders: function marketSettleOrders() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketSettleOrders;
                        },
                        marketData: function marketData() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketData;
                        },
                        totals: function totals() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().totals;
                        },
                        activeMarketHistory: function activeMarketHistory() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().activeMarketHistory;
                        },
                        bucketSize: function bucketSize() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().bucketSize;
                        },
                        buckets: function buckets() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().buckets;
                        },
                        lowestCallPrice: function lowestCallPrice() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().lowestCallPrice;
                        },
                        feedPrice: function feedPrice() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().feedPrice;
                        },
                        currentAccount: function currentAccount() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().currentAccount;
                        },
                        myActiveAccounts: function myActiveAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().myActiveAccounts;
                        },
                        viewSettings: function viewSettings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings;
                        },
                        settings: function settings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().settings;
                        },
                        exchange: function exchange() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().exchange;
                        },
                        starredMarkets: function starredMarkets() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().starredMarkets;
                        },
                        marketDirections: function marketDirections() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().marketDirections;
                        },
                        marketStats: function marketStats() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketStats;
                        },
                        marketReady: function marketReady() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketReady;
                        },
                        backedCoins: function backedCoins() {
                            return stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().backedCoins.get("OPEN", []);
                        },
                        bridgeCoins: function bridgeCoins() {
                            return stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().bridgeCoins;
                        },
                        miniDepthChart: function miniDepthChart() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings.get("miniDepthChart", true);
                        },
                        viewChat: function viewChat() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings.get("viewChat", true);
                        },

                        dataFeed: function dataFeed() {
                            return new components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__["DataFeed"]();
                        },

                        trackedGroupsConfig: function trackedGroupsConfig() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().trackedGroupsConfig;
                        },
                        currentGroupOrderLimit: function currentGroupOrderLimit() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().currentGroupLimit;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExchangeSubscriber, {
                    history: this.props.history,
                    location: this.props.location,
                    quoteAsset: symbols[0],
                    baseAsset: symbols[1]
                })
            );
        }
    }]);

    return ExchangeContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var emitter = Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["EmitterInstance"])();
var callListener = void 0,
    limitListener = void 0,
    newCallListener = void 0,
    feedUpdateListener = void 0,
    settleOrderListener = void 0;

var ExchangeSubscriber = function (_React$Component2) {
    _inherits(ExchangeSubscriber, _React$Component2);

    function ExchangeSubscriber(props) {
        _classCallCheck(this, ExchangeSubscriber);

        var _this2 = _possibleConstructorReturn(this, (ExchangeSubscriber.__proto__ || Object.getPrototypeOf(ExchangeSubscriber)).call(this));

        _this2.state = { sub: null };

        _this2._subToMarket = _this2._subToMarket.bind(_this2);
        return _this2;
    }

    _createClass(ExchangeSubscriber, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this3 = this;

            if (this.props.quoteAsset === null || this.props.baseAsset === null) {
                return;
            }
            if (this.props.quoteAsset.toJS && this.props.baseAsset.toJS) {
                this._subToMarket(this.props);
                // this._addMarket(this.props.quoteAsset.get("symbol"), this.props.baseAsset.get("symbol"));
            }

            emitter.on("cancel-order", limitListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].cancelLimitOrderSuccess);
            emitter.on("close-call", callListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].closeCallOrderSuccess);

            emitter.on("call-order-update", newCallListener = function newCallListener(call_order) {
                var coBase = call_order.call_price.base.asset_id;
                var coQuote = call_order.call_price.quote.asset_id;

                var baseId = _this3.props.baseAsset.get("id"),
                    quoteId = _this3.props.quoteAsset.get("id");
                if ((coBase === baseId || coBase === quoteId) && (coQuote === baseId || coQuote === quoteId)) {
                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].callOrderUpdate(call_order);
                }
            });
            emitter.on("bitasset-update", feedUpdateListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].feedUpdate);
            emitter.on("settle-order-update", settleOrderListener = function settleOrderListener(object) {
                var _market_utils$isMarke = market_utils.isMarketAsset(_this3.props.quoteAsset, _this3.props.baseAsset),
                    isMarketAsset = _market_utils$isMarke.isMarketAsset,
                    marketAsset = _market_utils$isMarke.marketAsset;

                if (isMarketAsset && marketAsset.id === object.balance.asset_id) {
                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].settleOrderUpdate(marketAsset.id);
                }
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _this4 = this;

            if (nextProps.quoteAsset === null || nextProps.baseAsset === null) {
                return;
            }
            /* Prediction markets should only be shown in one direction, if the link goes to the wrong one we flip it */
            if (nextProps.baseAsset && nextProps.baseAsset.getIn(["bitasset", "is_prediction_market"])) {
                this.props.history.push("/market/" + nextProps.baseAsset.get("symbol") + "_" + nextProps.quoteAsset.get("symbol"));
            }

            if (nextProps.quoteAsset && nextProps.baseAsset) {
                if (!this.state.sub) {
                    return this._subToMarket(nextProps);
                }
            }

            if (nextProps.quoteAsset.get("symbol") !== this.props.quoteAsset.get("symbol") || nextProps.baseAsset.get("symbol") !== this.props.baseAsset.get("symbol")) {
                var currentSub = this.state.sub.split("_");
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].unSubscribeMarket(currentSub[0], currentSub[1]).then(function () {
                    _this4._subToMarket(nextProps);
                });
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            var _props = this.props,
                quoteAsset = _props.quoteAsset,
                baseAsset = _props.baseAsset;

            if (quoteAsset === null || baseAsset === null) {
                return;
            }

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].unSubscribeMarket(quoteAsset.get("id"), baseAsset.get("id"));
            if (emitter) {
                emitter.off("cancel-order", limitListener);
                emitter.off("close-call", callListener);
                emitter.off("call-order-update", newCallListener);
                emitter.off("bitasset-update", feedUpdateListener);
                emitter.off("settle-order-update", settleOrderListener);
            }
        }
    }, {
        key: "_subToMarket",
        value: function _subToMarket(props, newBucketSize, newGroupLimit) {
            var quoteAsset = props.quoteAsset,
                baseAsset = props.baseAsset,
                bucketSize = props.bucketSize,
                currentGroupOrderLimit = props.currentGroupOrderLimit;

            if (newBucketSize) {
                bucketSize = newBucketSize;
            }
            if (newGroupLimit) {
                currentGroupOrderLimit = newGroupLimit;
            }
            if (quoteAsset.get("id") && baseAsset.get("id")) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].subscribeMarket.defer(baseAsset, quoteAsset, bucketSize, currentGroupOrderLimit);
                this.setState({
                    sub: quoteAsset.get("id") + "_" + baseAsset.get("id")
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.quoteAsset === null || this.props.baseAsset === null) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_14__["default"], { subtitle: "market_not_found_subtitle" });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Exchange__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, this.props, {
                sub: this.state.sub,
                subToMarket: this._subToMarket
            }));
        }
    }]);

    return ExchangeSubscriber;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ExchangeSubscriber.propTypes = {
    currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAccount.isRequired,
    quoteAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    baseAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    coreAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired
};
ExchangeSubscriber.defaultProps = {
    currentAccount: "1.2.3",
    coreAsset: "1.3.0"
};


ExchangeSubscriber = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__["default"])(ExchangeSubscriber, {
    show_loader: true
});

/* harmony default export */ __webpack_exports__["default"] = (ExchangeContainer);

/***/ }),

/***/ 2388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1270);
/* harmony import */ var _MyOpenOrders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2389);
/* harmony import */ var _OrderBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2430);
/* harmony import */ var _MarketHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2437);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2439);
/* harmony import */ var _BuySell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2446);
/* harmony import */ var _MarketPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2480);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(569);
/* harmony import */ var _TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2481);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1023);
/* harmony import */ var _DepthHighChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2488);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2491);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(591);
/* harmony import */ var _Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2493);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2390);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(418);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(713);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1268);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(584);
/* harmony import */ var _ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2499);
/* harmony import */ var _ExchangeHeader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2500);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(487);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(583);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(863);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1347);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _Chat_ChatBro__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2503);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(1407);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(1417);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_33__);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











// import PriceChartD3 from "./PriceChartD3";






















// Highcharts.setOptions({
//     global: {
//         useUTC: false
//     }
// });




var Exchange = function (_React$Component) {
    _inherits(Exchange, _React$Component);

    function Exchange(props) {
        _classCallCheck(this, Exchange);

        var _this = _possibleConstructorReturn(this, (Exchange.__proto__ || Object.getPrototypeOf(Exchange)).call(this));

        _this.EXPIRATIONS = {
            HOUR: {
                title: "1 hour",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "hour").valueOf();
                }
            },
            "12HOURS": {
                title: "12 hours",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(12, "hour").valueOf();
                }
            },
            "24HOURS": {
                title: "24 hours",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "day").valueOf();
                }
            },
            "7DAYS": {
                title: "7 days",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(7, "day").valueOf();
                }
            },
            MONTH: {
                title: "30 days",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(30, "day").valueOf();
                }
            },
            YEAR: {
                title: "1 year",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "year").valueOf();
                }
            },
            SPECIFIC: {
                title: "Specific",
                get: function get(type) {
                    return _this.state.expirationCustomTime[type].valueOf();
                }
            }
        };

        _this.state = _extends({}, _this._initialState(props), {
            expirationType: {
                bid: props.exchange.getIn(["lastExpiration", "bid"]) || "YEAR",
                ask: props.exchange.getIn(["lastExpiration", "ask"]) || "YEAR"
            },
            expirationCustomTime: {
                bid: moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "day"),
                ask: moment__WEBPACK_IMPORTED_MODULE_29___default()().add(1, "day")
            },
            feeStatus: {}
        });

        _this._getWindowSize = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._getWindowSize.bind(_this), 150);
        _this._checkFeeStatus = _this._checkFeeStatus.bind(_this);

        _this._handleExpirationChange = _this._handleExpirationChange.bind(_this);
        _this._handleCustomExpirationChange = _this._handleCustomExpirationChange.bind(_this);

        _this.psInit = true;
        return _this;
    }

    _createClass(Exchange, [{
        key: "_handleExpirationChange",
        value: function _handleExpirationChange(type, e) {
            var expirationType = _extends({}, this.state.expirationType, _defineProperty({}, type, e.target.value));

            if (e.target.value !== "SPECIFIC") {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].setExchangeLastExpiration(_extends({}, this.props.exchange.has("lastExpiration") && this.props.exchange.get("lastExpiration").toJS() || {}, _defineProperty({}, type, e.target.value)));
            }

            this.setState({
                expirationType: expirationType
            });
        }
    }, {
        key: "_handleCustomExpirationChange",
        value: function _handleCustomExpirationChange(type, time) {
            var expirationCustomTime = _extends({}, this.state.expirationCustomTime, _defineProperty({}, type, time));

            this.setState({
                expirationCustomTime: expirationCustomTime
            });
        }
    }, {
        key: "_initialState",
        value: function _initialState(props) {
            var ws = props.viewSettings;
            var bid = {
                forSaleText: "",
                toReceiveText: "",
                priceText: "",
                for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    asset_id: props.baseAsset.get("id"),
                    precision: props.baseAsset.get("precision")
                }),
                to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    asset_id: props.quoteAsset.get("id"),
                    precision: props.quoteAsset.get("precision")
                })
            };
            bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({ base: bid.for_sale, quote: bid.to_receive });
            var ask = {
                forSaleText: "",
                toReceiveText: "",
                priceText: "",
                for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    asset_id: props.quoteAsset.get("id"),
                    precision: props.quoteAsset.get("precision")
                }),
                to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    asset_id: props.baseAsset.get("id"),
                    precision: props.baseAsset.get("precision")
                })
            };
            ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({ base: ask.for_sale, quote: ask.to_receive });

            return {
                history: [],
                buySellOpen: ws.get("buySellOpen", true),
                bid: bid,
                ask: ask,
                flipBuySell: ws.get("flipBuySell", false),
                favorite: false,
                showDepthChart: ws.get("showDepthChart", false),
                leftOrderBook: ws.get("leftOrderBook", true),
                buyDiff: false,
                sellDiff: false,
                buySellTop: ws.get("buySellTop", true),
                buyFeeAssetIdx: ws.get("buyFeeAssetIdx", 0),
                sellFeeAssetIdx: ws.get("sellFeeAssetIdx", 0),
                height: window.innerHeight,
                width: window.innerWidth,
                hidePanel: false,
                chartHeight: ws.get("chartHeight", 600),
                currentPeriod: ws.get("currentPeriod", 3600 * 24 * 30 * 3) // 3 months
            };
        }
    }, {
        key: "_getLastMarketKey",
        value: function _getLastMarketKey() {
            var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_26__["Apis"].instance().chain_id;
            return "lastMarket" + (chainID ? "_" + chainID.substr(0, 8) : "");
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._checkFeeStatus();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].getTrackedGroupsConfig();

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting.defer(_defineProperty({}, this._getLastMarketKey(), this.props.quoteAsset.get("symbol") + "_" + this.props.baseAsset.get("symbol")));

            window.addEventListener("resize", this._getWindowSize, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            if (!np.marketReady && !this.props.marketReady) {
                return false;
            }
            var propsChanged = false;
            for (var key in np) {
                if (np.hasOwnProperty(key)) {
                    propsChanged = propsChanged || !common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(np[key], this.props[key]);
                    if (propsChanged) break;
                }
            }
            return propsChanged || !common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this2 = this;

            var assets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [this.props.coreAsset, this.props.baseAsset, this.props.quoteAsset];
            var account = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.currentAccount;

            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_27__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a.get("id"),
                    type: "limit_order_create"
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a.get("id")] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(_this2.state.feeStatus, feeStatus)) {
                    _this2.setState({
                        feeStatus: feeStatus
                    });
                }
            }).catch(function (err) {
                console.log("checkFeeStatusAsync error", err);
                _this2.setState({ feeStatus: {} });
            });
        }
    }, {
        key: "_getWindowSize",
        value: function _getWindowSize() {
            var _window = window,
                innerHeight = _window.innerHeight,
                innerWidth = _window.innerWidth;

            if (innerHeight !== this.state.height || innerWidth !== this.state.width) {
                this.setState({
                    height: innerHeight,
                    width: innerWidth
                });
                var centerContainer = this.refs.center;
                if (centerContainer) {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.update(centerContainer);
                }
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            this._initPsContainer();
            if (!this.props.exchange.get("tutorialShown") && prevProps.coreAsset && prevState.feeStatus) {
                if (!this.tutorialShown) {
                    this.tutorialShown = true;
                    var theme = this.props.settings.get("themes");

                    intro_js__WEBPACK_IMPORTED_MODULE_31___default.a.introJs().setOptions({
                        tooltipClass: theme,
                        highlightClass: theme,
                        showBullets: false,
                        hideNext: true,
                        hidePrev: true,
                        nextLabel: counterpart__WEBPACK_IMPORTED_MODULE_32___default.a.translate("walkthrough.next_label"),
                        prevLabel: counterpart__WEBPACK_IMPORTED_MODULE_32___default.a.translate("walkthrough.prev_label"),
                        skipLabel: counterpart__WEBPACK_IMPORTED_MODULE_32___default.a.translate("walkthrough.skip_label"),
                        doneLabel: counterpart__WEBPACK_IMPORTED_MODULE_32___default.a.translate("walkthrough.done_label")
                    }).start();

                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].setExchangeTutorialShown.defer(true);
                }
            }
        }
    }, {
        key: "_initPsContainer",
        value: function _initPsContainer() {
            if (this.refs.center && this.psInit) {
                var centerContainer = this.refs.center;
                if (centerContainer) {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a.initialize(centerContainer);
                    this.psInit = false;
                }
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this._initPsContainer();
            if (nextProps.quoteAsset !== this.props.quoteAsset || nextProps.baseAsset !== this.props.baseAsset || nextProps.currentAccount !== this.props.currentAccount) {
                this._checkFeeStatus([nextProps.coreAsset, nextProps.baseAsset, nextProps.quoteAsset], nextProps.currentAccount);
            }
            if (nextProps.quoteAsset.get("symbol") !== this.props.quoteAsset.get("symbol") || nextProps.baseAsset.get("symbol") !== this.props.baseAsset.get("symbol")) {
                this.setState(this._initialState(nextProps));

                return actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting(_defineProperty({}, this._getLastMarketKey(), nextProps.quoteAsset.get("symbol") + "_" + nextProps.baseAsset.get("symbol")));
            }

            // if (this.props.sub && nextProps.bucketSize !== this.props.bucketSize) {
            //     return this._changeBucketSize(nextProps.bucketSize);
            // }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._getWindowSize);
        }
    }, {
        key: "_getFeeAssets",
        value: function _getFeeAssets(quote, base, coreAsset) {
            var _this3 = this;

            var currentAccount = this.props.currentAccount;
            var feeStatus = this.state.feeStatus;


            function addMissingAsset(target, asset) {
                if (target.indexOf(asset) === -1) {
                    target.push(asset);
                }
            }

            function hasFeePoolBalance(id) {
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var sellAssets = [coreAsset, quote === coreAsset ? base : quote];
            addMissingAsset(sellAssets, quote);
            addMissingAsset(sellAssets, base);
            // let sellFeeAsset;

            var buyAssets = [coreAsset, base === coreAsset ? quote : base];
            addMissingAsset(buyAssets, quote);
            addMissingAsset(buyAssets, base);
            // let buyFeeAsset;

            var balances = {};

            currentAccount.get("balances", []).filter(function (balance, id) {
                return ["1.3.0", quote.get("id"), base.get("id")].indexOf(id) >= 0;
            }).forEach(function (balance, id) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(balance);
                balances[id] = {
                    balance: balanceObject ? parseInt(balanceObject.get("balance"), 10) : 0,
                    fee: _this3._getFee(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getAsset(id))
                };
            });

            function filterAndDefault(assets, balances, idx) {
                var asset = void 0;
                /* Only keep assets for which the user has a balance larger than the fee, and for which the fee pool is valid */
                assets = assets.filter(function (a) {
                    if (!balances[a.get("id")]) {
                        return false;
                    }
                    return hasFeePoolBalance(a.get("id")) && hasBalance(a.get("id"));
                });

                /* If the user has no valid balances, default to core fee */
                if (!assets.length) {
                    asset = coreAsset;
                    assets.push(coreAsset);
                    /* If the user has balances, use the stored idx value unless that asset is no longer available*/
                } else {
                    asset = assets[Math.min(assets.length - 1, idx)];
                }

                return { assets: assets, asset: asset };
            }

            var _filterAndDefault = filterAndDefault(sellAssets, balances, this.state.sellFeeAssetIdx),
                sellFeeAssets = _filterAndDefault.assets,
                sellFeeAsset = _filterAndDefault.asset;

            var _filterAndDefault2 = filterAndDefault(buyAssets, balances, this.state.buyFeeAssetIdx),
                buyFeeAssets = _filterAndDefault2.assets,
                buyFeeAsset = _filterAndDefault2.asset;

            var sellFee = this._getFee(sellFeeAsset);
            var buyFee = this._getFee(buyFeeAsset);

            return {
                sellFeeAsset: sellFeeAsset,
                sellFeeAssets: sellFeeAssets,
                sellFee: sellFee,
                buyFeeAsset: buyFeeAsset,
                buyFeeAssets: buyFeeAssets,
                buyFee: buyFee
            };
        }
    }, {
        key: "_getFee",
        value: function _getFee() {
            var asset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.coreAsset;

            return this.state.feeStatus[asset.get("id")] && this.state.feeStatus[asset.get("id")].fee;
        }
    }, {
        key: "_verifyFee",
        value: function _verifyFee(fee, sell, sellBalance, coreBalance) {
            var coreFee = this._getFee();

            if (fee.asset_id === "1.3.0") {
                if (coreFee.getAmount() <= coreBalance) {
                    return "1.3.0";
                } else {
                    return null;
                }
            } else {
                var sellSum = sell.asset_id === fee.asset_id ? fee.getAmount() + sell.getAmount() : sell.getAmount();
                if (sellSum <= sellBalance) {
                    // Sufficient balance in asset to pay fee
                    return fee.asset_id;
                } else if (coreFee.getAmount() <= coreBalance && fee.asset_id !== "1.3.0") {
                    // Sufficient balance in core asset to pay fee
                    return "1.3.0";
                } else {
                    return null; // Unable to pay fee
                }
            }
        }
    }, {
        key: "_createLimitOrderConfirm",
        value: function _createLimitOrderConfirm(buyAsset, sellAsset, sellBalance, coreBalance, feeAsset, type) {
            var short = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
            var e = arguments[7];

            e.preventDefault();
            var _props$marketData = this.props.marketData,
                highestBid = _props$marketData.highestBid,
                lowestAsk = _props$marketData.lowestAsk;

            var current = this.state[type === "sell" ? "ask" : "bid"];

            sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(sellBalance).toJS().balance, 10) : 0);
            coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(coreBalance).toJS().balance, 10) : 0
            });

            var fee = this._getFee(feeAsset);
            var feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());
            if (!feeID) {
                return actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                    message: "Insufficient funds to pay fees",
                    level: "error"
                });
            }

            if (type === "buy" && lowestAsk) {
                var diff = this.state.bid.price.toReal() / lowestAsk.getPrice();
                if (diff > 1.2) {
                    this.refs.buy.show();
                    return this.setState({
                        buyDiff: diff
                    });
                }
            } else if (type === "sell" && highestBid) {
                var _diff = 1 / (this.state.ask.price.toReal() / highestBid.getPrice());
                if (_diff > 1.2) {
                    this.refs.sell.show();
                    return this.setState({
                        sellDiff: _diff
                    });
                }
            }

            var isPredictionMarket = sellAsset.getIn(["bitasset", "is_prediction_market"]);

            if (current.for_sale.gt(sellBalance) && !isPredictionMarket) {
                return actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                    message: "Insufficient funds to place order, you need at least " + current.for_sale.getAmount({ real: true }) + " " + sellAsset.get("symbol"),
                    level: "error"
                });
            }
            //
            if (!(current.for_sale.getAmount() > 0 && current.to_receive.getAmount() > 0)) {
                return actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                    message: "Please enter a valid amount and price",
                    level: "error"
                });
            }
            //
            if (type === "sell" && isPredictionMarket && short) {
                return this._createPredictionShort(feeID);
            }

            this._createLimitOrder(type, feeID);
        }
    }, {
        key: "_createLimitOrder",
        value: function _createLimitOrder(type, feeID) {
            var actionType = type === "sell" ? "ask" : "bid";

            var current = this.state[actionType];

            var expirationTime = null;
            if (this.state.expirationType[actionType] === "SPECIFIC") {
                expirationTime = this.EXPIRATIONS[this.state.expirationType[actionType]].get(actionType);
            } else {
                expirationTime = this.EXPIRATIONS[this.state.expirationType[actionType]].get();
            }

            var order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["LimitOrderCreate"]({
                for_sale: current.for_sale,
                expiration: new Date(expirationTime || false),
                to_receive: current.to_receive,
                seller: this.props.currentAccount.get("id"),
                fee: {
                    asset_id: feeID,
                    amount: 0
                }
            });

            var _market_utils$getMark = common_market_utils__WEBPACK_IMPORTED_MODULE_21__["default"].getMarketName(this.props.baseAsset, this.props.quoteAsset),
                marketName = _market_utils$getMark.marketName,
                first = _market_utils$getMark.first;

            var inverted = this.props.marketDirections.get(marketName);
            var shouldFlip = inverted && first.get("id") !== this.props.baseAsset.get("id") || !inverted && first.get("id") !== this.props.baseAsset.get("id");
            if (shouldFlip) {
                var setting = {};
                setting[marketName] = !inverted;
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeMarketDirection(setting);
            }
            console.log("order:", JSON.stringify(order.toObject()));
            return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].createLimitOrder2(order).then(function (result) {
                if (result.error) {
                    if (result.error.message !== "wallet locked") actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                        message: "Unknown error. Failed to place order for " + current.to_receive.getAmount({ real: true }) + " " + current.to_receive.asset_id,
                        level: "error"
                    });
                }
                // console.log("order success");
            }).catch(function (e) {
                console.log("order failed:", e);
            });
        }
    }, {
        key: "_createPredictionShort",
        value: function _createPredictionShort(feeID) {
            var current = this.state.ask;
            var order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["LimitOrderCreate"]({
                for_sale: current.for_sale,
                to_receive: current.to_receive,
                seller: this.props.currentAccount.get("id"),
                fee: {
                    asset_id: feeID,
                    amount: 0
                }
            });

            Promise.all([Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["FetchChain"])("getAsset", this.props.quoteAsset.getIn(["bitasset", "options", "short_backing_asset"]))]).then(function (assets) {
                var _assets = _slicedToArray(assets, 1),
                    backingAsset = _assets[0];

                var collateral = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                    amount: order.amount_for_sale.getAmount(),
                    asset_id: backingAsset.get("id"),
                    precision: backingAsset.get("precision")
                });

                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].createPredictionShort(order, collateral).then(function (result) {
                    if (result.error) {
                        if (result.error.message !== "wallet locked") actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__["default"].addNotification({
                            message: "Unknown error. Failed to place order for " + buyAssetAmount + " " + buyAsset.symbol,
                            level: "error"
                        });
                    }
                });
            });
        }
    }, {
        key: "_forceBuy",
        value: function _forceBuy(type, feeAsset, sellBalance, coreBalance) {
            var current = this.state[type === "sell" ? "ask" : "bid"];
            // Convert fee to relevant asset fee and check if user has sufficient balance
            sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(sellBalance).get("balance"), 10) : 0);
            coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(coreBalance).toJS().balance, 10) : 0
            });
            var fee = this._getFee(feeAsset);
            var feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());

            if (feeID) {
                this._createLimitOrder(type, feeID);
            } else {
                console.error("Unable to pay fees, aborting limit order creation");
            }
        }
    }, {
        key: "_forceSell",
        value: function _forceSell(type, feeAsset, sellBalance, coreBalance) {
            var current = this.state[type === "sell" ? "ask" : "bid"];
            // Convert fee to relevant asset fee and check if user has sufficient balance
            sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(sellBalance).get("balance"), 10) : 0);
            coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Asset"]({
                amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getObject(coreBalance).toJS().balance, 10) : 0
            });
            var fee = this._getFee(feeAsset);
            var feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());

            if (feeID) {
                this._createLimitOrder(type, feeID);
            } else {
                console.error("Unable to pay fees, aborting limit order creation");
            }
        }
    }, {
        key: "_cancelLimitOrder",
        value: function _cancelLimitOrder(orderID, e) {
            e.preventDefault();
            var currentAccount = this.props.currentAccount;

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].cancelLimitOrder(currentAccount.get("id"), orderID // order id to cancel
            );
        }

        // _changeBucketSize(size, e) {
        //     if (e) e.preventDefault();
        //     if (size !== this.props.bucketSize) {
        //         MarketsActions.changeBucketSize.defer(size);
        //         let currentSub = this.props.sub.split("_");
        //         MarketsActions.unSubscribeMarket(currentSub[0], currentSub[1]).then(
        //             () => {
        //                 this.props.subToMarket(this.props, size);
        //             }
        //         );
        //     }
        // }

    }, {
        key: "_changeZoomPeriod",
        value: function _changeZoomPeriod(size, e) {
            e.preventDefault();
            if (size !== this.state.currentPeriod) {
                this.setState({
                    currentPeriod: size
                });
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                    currentPeriod: size
                });
            }
        }
    }, {
        key: "_depthChartClick",
        value: function _depthChartClick(base, quote, e) {
            e.preventDefault();
            var _state = this.state,
                bid = _state.bid,
                ask = _state.ask;


            bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                base: this.state.bid.for_sale,
                quote: this.state.bid.to_receive,
                real: e.xAxis[0].value
            });
            bid.priceText = bid.price.toReal();

            ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                base: this.state.ask.to_receive,
                quote: this.state.ask.for_sale,
                real: e.xAxis[0].value
            });
            ask.priceText = ask.price.toReal();
            var newState = {
                bid: bid,
                ask: ask,
                depthLine: bid.price.toReal()
            };

            this._setForSale(bid, true) || this._setReceive(bid, true);
            this._setReceive(ask) || this._setForSale(ask);

            this._setPriceText(bid, true);
            this._setPriceText(ask, false);
            // if (bid.for_sale.)
            this.setState(newState);
        }
    }, {
        key: "_togglePanel",
        value: function _togglePanel() {
            this.setState({
                hidePanel: !this.state.hidePanel
            });
        }
    }, {
        key: "_flipBuySell",
        value: function _flipBuySell() {
            this.setState({
                flipBuySell: !this.state.flipBuySell
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                flipBuySell: !this.state.flipBuySell
            });
        }
    }, {
        key: "_toggleOpenBuySell",
        value: function _toggleOpenBuySell() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                buySellOpen: !this.state.buySellOpen
            });

            this.setState({ buySellOpen: !this.state.buySellOpen });
        }
    }, {
        key: "_toggleCharts",
        value: function _toggleCharts() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                showDepthChart: !this.state.showDepthChart
            });

            this.setState({ showDepthChart: !this.state.showDepthChart });
        }
    }, {
        key: "_toggleMarketPicker",
        value: function _toggleMarketPicker(asset) {
            var showMarketPicker = !!asset ? true : false;
            this.setState({
                showMarketPicker: showMarketPicker,
                marketPickerAsset: asset
            });
        }
    }, {
        key: "_moveOrderBook",
        value: function _moveOrderBook() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                leftOrderBook: !this.state.leftOrderBook
            });

            this.setState({ leftOrderBook: !this.state.leftOrderBook });
        }
    }, {
        key: "_currentPriceClick",
        value: function _currentPriceClick(type, price) {
            var isBid = type === "bid";
            var current = this.state[type];
            current.price = price[isBid ? "invert" : "clone"]();
            current.priceText = current.price.toReal();
            if (isBid) {
                this._setForSale(current, isBid) || this._setReceive(current, isBid);
            } else {
                this._setReceive(current, isBid) || this._setForSale(current, isBid);
            }
            this.forceUpdate();
        }
    }, {
        key: "_orderbookClick",
        value: function _orderbookClick(order) {
            var isBid = order.isBid();
            /*
            * Because we are using a bid order to construct an ask and vice versa,
            * totalToReceive becomes forSale, and totalForSale becomes toReceive
            */
            var forSale = order.totalToReceive({ noCache: true });
            // let toReceive = order.totalForSale({noCache: true});
            var toReceive = forSale.times(order.sellPrice());

            var newPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                base: isBid ? toReceive : forSale,
                quote: isBid ? forSale : toReceive
            });

            var current = this.state[isBid ? "bid" : "ask"];
            current.price = newPrice;
            current.priceText = newPrice.toReal();

            var newState = _defineProperty({}, isBid ? "ask" : "bid", {
                for_sale: forSale,
                forSaleText: forSale.getAmount({ real: true }),
                to_receive: toReceive,
                toReceiveText: toReceive.getAmount({ real: true }),
                price: newPrice,
                priceText: newPrice.toReal()
            });

            if (isBid) {
                this._setForSale(current, isBid) || this._setReceive(current, isBid);
            } else {
                this._setReceive(current, isBid) || this._setForSale(current, isBid);
            }
            this.setState(newState);
        }
    }, {
        key: "_borrowQuote",
        value: function _borrowQuote() {
            this.refs.borrowQuote.show();
        }
    }, {
        key: "_borrowBase",
        value: function _borrowBase() {
            this.refs.borrowBase.show();
        }
    }, {
        key: "_getSettlementInfo",
        value: function _getSettlementInfo() {
            var _props = this.props,
                lowestCallPrice = _props.lowestCallPrice,
                feedPrice = _props.feedPrice,
                quoteAsset = _props.quoteAsset;


            var showCallLimit = false;
            if (feedPrice) {
                if (feedPrice.inverted) {
                    showCallLimit = lowestCallPrice <= feedPrice.toReal();
                } else {
                    showCallLimit = lowestCallPrice >= feedPrice.toReal();
                }
            }
            return !!(showCallLimit && lowestCallPrice && !quoteAsset.getIn(["bitasset", "is_prediction_market"]));
        }
    }, {
        key: "onChangeFeeAsset",
        value: function onChangeFeeAsset(type, e) {
            e.preventDefault();
            if (type === "buy") {
                this.setState({
                    buyFeeAssetIdx: e.target.value
                });

                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                    buyFeeAssetIdx: e.target.value
                });
            } else {
                this.setState({
                    sellFeeAssetIdx: e.target.value
                });

                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                    sellFeeAssetIdx: e.target.value
                });
            }
        }
    }, {
        key: "onChangeChartHeight",
        value: function onChangeChartHeight(_ref) {
            var value = _ref.value,
                increase = _ref.increase;

            var newHeight = value ? value : this.state.chartHeight + (increase ? 20 : -20);
            this.setState({
                chartHeight: newHeight
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                chartHeight: newHeight
            });
        }
    }, {
        key: "_toggleBuySellPosition",
        value: function _toggleBuySellPosition() {
            this.setState({
                buySellTop: !this.state.buySellTop
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                buySellTop: !this.state.buySellTop
            });
        }
    }, {
        key: "_setReceive",
        value: function _setReceive(state, isBid) {
            if (state.price.isValid() && state.for_sale.hasAmount()) {
                state.to_receive = state.for_sale.times(state.price);
                state.toReceiveText = state.to_receive.getAmount({ real: true }).toString();
                return true;
            }
            return false;
        }
    }, {
        key: "_setForSale",
        value: function _setForSale(state, isBid) {
            if (state.price.isValid() && state.to_receive.hasAmount()) {
                state.for_sale = state.to_receive.times(state.price, true);
                state.forSaleText = state.for_sale.getAmount({ real: true }).toString();
                return true;
            }
            return false;
        }
    }, {
        key: "_setPrice",
        value: function _setPrice(state) {
            if (state.for_sale.hasAmount() && state.to_receive.hasAmount()) {
                state.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                    base: state.for_sale,
                    quote: state.to_receive
                });
                state.priceText = state.price.toReal().toString();
                return true;
            }
            return false;
        }
    }, {
        key: "_setPriceText",
        value: function _setPriceText(state, isBid) {
            var currentBase = state[isBid ? "for_sale" : "to_receive"];
            var currentQuote = state[isBid ? "to_receive" : "for_sale"];
            if (currentBase.hasAmount() && currentQuote.hasAmount()) {
                state.priceText = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                    base: currentBase,
                    quote: currentQuote
                }).toReal().toString();
            }
        }
    }, {
        key: "_onInputPrice",
        value: function _onInputPrice(type, e) {
            var current = this.state[type];
            var isBid = type === "bid";
            current.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__["Price"]({
                base: current[isBid ? "for_sale" : "to_receive"],
                quote: current[isBid ? "to_receive" : "for_sale"],
                real: parseFloat(e.target.value) || 0
            });

            if (isBid) {
                this._setForSale(current, isBid) || this._setReceive(current, isBid);
            } else {
                this._setReceive(current, isBid) || this._setForSale(current, isBid);
            }

            current.priceText = e.target.value;
            this.forceUpdate();
        }
    }, {
        key: "_onInputSell",
        value: function _onInputSell(type, isBid, e) {
            var current = this.state[type];
            // const isBid = type === "bid";
            current.for_sale.setAmount({ real: parseFloat(e.target.value) || 0 });
            if (current.price.isValid()) {
                this._setReceive(current, isBid);
            } else {
                this._setPrice(current);
            }

            current.forSaleText = e.target.value;
            this._setPriceText(current, type === "bid");

            this.forceUpdate();
        }
    }, {
        key: "_onInputReceive",
        value: function _onInputReceive(type, isBid, e) {
            var current = this.state[type];
            // const isBid = type === "bid";
            current.to_receive.setAmount({ real: parseFloat(e.target.value) || 0 });

            if (current.price.isValid()) {
                this._setForSale(current, isBid);
            } else {
                this._setPrice(current);
            }

            current.toReceiveText = e.target.value;
            this._setPriceText(current, type === "bid");
            this.forceUpdate();
        }
    }, {
        key: "isMarketFrozen",
        value: function isMarketFrozen() {
            var _props2 = this.props,
                baseAsset = _props2.baseAsset,
                quoteAsset = _props2.quoteAsset;


            var baseWhiteList = baseAsset.getIn(["options", "whitelist_markets"]).toJS();
            var quoteWhiteList = quoteAsset.getIn(["options", "whitelist_markets"]).toJS();
            var baseBlackList = baseAsset.getIn(["options", "blacklist_markets"]).toJS();
            var quoteBlackList = quoteAsset.getIn(["options", "blacklist_markets"]).toJS();

            if (quoteWhiteList.length && quoteWhiteList.indexOf(baseAsset.get("id")) === -1) {
                return { isFrozen: true, frozenAsset: quoteAsset.get("symbol") };
            }
            if (baseWhiteList.length && baseWhiteList.indexOf(quoteAsset.get("id")) === -1) {
                return { isFrozen: true, frozenAsset: baseAsset.get("symbol") };
            }

            if (quoteBlackList.length && quoteBlackList.indexOf(baseAsset.get("id")) !== -1) {
                return { isFrozen: true, frozenAsset: quoteAsset.get("symbol") };
            }
            if (baseBlackList.length && baseBlackList.indexOf(quoteAsset.get("id")) !== -1) {
                return { isFrozen: true, frozenAsset: baseAsset.get("symbol") };
            }

            return { isFrozen: false };
        }
    }, {
        key: "_toggleChat",
        value: function _toggleChat() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                viewChat: !this.props.viewChat
            });
        }
    }, {
        key: "_toggleMiniChart",
        value: function _toggleMiniChart() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({
                miniDepthChart: !this.props.miniDepthChart
            });
        }
    }, {
        key: "_onGroupOrderLimitChange",
        value: function _onGroupOrderLimitChange(e) {
            var _this4 = this;

            if (e) e.preventDefault();
            var groupLimit = parseInt(e.target.value);
            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeCurrentGroupLimit(groupLimit);
            if (groupLimit !== this.props.currentGroupOrderLimit) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeCurrentGroupLimit(groupLimit);
                var currentSub = this.props.sub.split("_");
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].unSubscribeMarket(currentSub[0], currentSub[1]).then(function () {
                    _this4.props.subToMarket(_this4.props, _this4.props.bucketSize, groupLimit);
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                currentAccount = _props3.currentAccount,
                marketLimitOrders = _props3.marketLimitOrders,
                marketCallOrders = _props3.marketCallOrders,
                marketData = _props3.marketData,
                activeMarketHistory = _props3.activeMarketHistory,
                invertedCalls = _props3.invertedCalls,
                starredMarkets = _props3.starredMarkets,
                quoteAsset = _props3.quoteAsset,
                baseAsset = _props3.baseAsset,
                lowestCallPrice = _props3.lowestCallPrice,
                marketStats = _props3.marketStats,
                marketReady = _props3.marketReady,
                marketSettleOrders = _props3.marketSettleOrders,
                bucketSize = _props3.bucketSize,
                totals = _props3.totals,
                feedPrice = _props3.feedPrice,
                buckets = _props3.buckets,
                coreAsset = _props3.coreAsset,
                trackedGroupsConfig = _props3.trackedGroupsConfig,
                currentGroupOrderLimit = _props3.currentGroupOrderLimit;
            var combinedBids = marketData.combinedBids,
                combinedAsks = marketData.combinedAsks,
                lowestAsk = marketData.lowestAsk,
                highestBid = marketData.highestBid,
                flatBids = marketData.flatBids,
                flatAsks = marketData.flatAsks,
                flatCalls = marketData.flatCalls,
                flatSettles = marketData.flatSettles,
                groupedBids = marketData.groupedBids,
                groupedAsks = marketData.groupedAsks;
            var _state2 = this.state,
                bid = _state2.bid,
                ask = _state2.ask,
                leftOrderBook = _state2.leftOrderBook,
                showDepthChart = _state2.showDepthChart,
                chartHeight = _state2.chartHeight,
                buyDiff = _state2.buyDiff,
                sellDiff = _state2.sellDiff,
                width = _state2.width,
                buySellTop = _state2.buySellTop,
                hidePanel = _state2.hidePanel;

            var _isMarketFrozen = this.isMarketFrozen(),
                isFrozen = _isMarketFrozen.isFrozen,
                frozenAsset = _isMarketFrozen.frozenAsset;

            var base = null,
                quote = null,
                accountBalance = null,
                quoteBalance = null,
                baseBalance = null,
                coreBalance = null,
                quoteSymbol = void 0,
                baseSymbol = void 0,
                showCallLimit = false,
                latest = void 0,
                changeClass = void 0;

            var showVolumeChart = this.props.viewSettings.get("showVolumeChart", true);

            if (quoteAsset.size && baseAsset.size && currentAccount.size) {
                base = baseAsset;
                quote = quoteAsset;
                baseSymbol = base.get("symbol");
                quoteSymbol = quote.get("symbol");

                accountBalance = currentAccount.get("balances").toJS();

                if (accountBalance) {
                    for (var id in accountBalance) {
                        if (id === quote.get("id")) {
                            quoteBalance = accountBalance[id];
                        }
                        if (id === base.get("id")) {
                            baseBalance = accountBalance[id];
                        }
                        if (id === "1.3.0") {
                            coreBalance = accountBalance[id];
                        }
                    }
                }

                showCallLimit = this._getSettlementInfo();
            }

            var quoteIsBitAsset = quoteAsset.get("bitasset_data_id") ? true : false;
            var baseIsBitAsset = baseAsset.get("bitasset_data_id") ? true : false;

            var spread = lowestAsk && highestBid ? lowestAsk.getPrice() - highestBid.getPrice() : 0;

            // Latest price
            if (activeMarketHistory.size) {
                var latest_two = activeMarketHistory.take(2);
                latest = latest_two.first();
                var second_latest = latest_two.last();

                changeClass = latest.getPrice() === second_latest.getPrice() ? "" : latest.getPrice() - second_latest.getPrice() > 0 ? "change-up" : "change-down";
            }

            // Fees
            if (!coreAsset || !Object.keys(this.state.feeStatus).length) {
                return null;
            }

            var _getFeeAssets2 = this._getFeeAssets(quote, base, coreAsset),
                sellFeeAsset = _getFeeAssets2.sellFeeAsset,
                sellFeeAssets = _getFeeAssets2.sellFeeAssets,
                sellFee = _getFeeAssets2.sellFee,
                buyFeeAsset = _getFeeAssets2.buyFeeAsset,
                buyFeeAssets = _getFeeAssets2.buyFeeAssets,
                buyFee = _getFeeAssets2.buyFee;

            // Decimals


            var hasPrediction = base.getIn(["bitasset", "is_prediction_market"]) || quote.getIn(["bitasset", "is_prediction_market"]);

            var description = null;

            if (hasPrediction) {
                description = quoteAsset.getIn(["options", "description"]);
                description = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].parseDescription(description).main;
            }

            var smallScreen = false;
            if (width < 1000) {
                smallScreen = true;
                leftOrderBook = false;
            }

            var orderMultiplier = leftOrderBook ? 2 : 1;
            var minChartHeight = 300;
            var height = Math.max(this.state.height > 1100 ? chartHeight : chartHeight - 125, minChartHeight);

            var expirationType = this.state.expirationType;
            var expirationCustomTime = this.state.expirationCustomTime;

            var isPanelActive = !hidePanel && !smallScreen ? true : false;
            var verticalPanelToggle = !smallScreen ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                    className: "clickable",
                    style: { width: "auto", paddingTop: "calc(50vh - 120px)" },
                    onClick: this._togglePanel.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_33__["Icon"], { type: hidePanel ? "caret-left" : "caret-right" })
            ) : null;

            var buyForm = isFrozen ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BuySell__WEBPACK_IMPORTED_MODULE_8__["default"], {
                onBorrow: baseIsBitAsset ? this._borrowBase.bind(this) : null,
                currentAccount: currentAccount,
                backedCoin: this.props.backedCoins.find(function (a) {
                    return a.symbol === base.get("symbol");
                }),
                currentBridges: this.props.bridgeCoins.get(base.get("symbol")) || null,
                smallScreen: smallScreen,
                isOpen: this.state.buySellOpen,
                onToggleOpen: this._toggleOpenBuySell.bind(this),
                className: classnames__WEBPACK_IMPORTED_MODULE_20___default()("small-12 no-padding middle-content", leftOrderBook || smallScreen ? "medium-6" : "medium-6 xlarge-4", this.state.flipBuySell ? "order-" + (buySellTop ? 2 : 5 * orderMultiplier) + " sell-form" : "order-" + (buySellTop ? 1 : 4 * orderMultiplier) + " buy-form"),
                type: "bid",
                expirationType: expirationType["bid"],
                expirations: this.EXPIRATIONS,
                expirationCustomTime: expirationCustomTime["bid"],
                onExpirationTypeChange: this._handleExpirationChange.bind(this, "bid"),
                onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "bid"),
                amount: bid.toReceiveText,
                price: bid.priceText,
                total: bid.forSaleText,
                quote: quote,
                base: base,
                amountChange: this._onInputReceive.bind(this, "bid", true),
                priceChange: this._onInputPrice.bind(this, "bid"),
                setPrice: this._currentPriceClick.bind(this),
                totalChange: this._onInputSell.bind(this, "bid", false),
                balance: baseBalance,
                balanceId: base.get("id"),
                onSubmit: this._createLimitOrderConfirm.bind(this, quote, base, baseBalance, coreBalance, buyFeeAsset, "buy"),
                balancePrecision: base.get("precision"),
                quotePrecision: quote.get("precision"),
                totalPrecision: base.get("precision"),
                currentPrice: lowestAsk.getPrice(),
                currentPriceObject: lowestAsk,
                account: currentAccount.get("name"),
                fee: buyFee,
                hasFeeBalance: this.state.feeStatus[buyFee.asset_id].hasBalance,
                feeAssets: buyFeeAssets,
                feeAsset: buyFeeAsset,
                onChangeFeeAsset: this.onChangeFeeAsset.bind(this, "buy"),
                isPredictionMarket: base.getIn(["bitasset", "is_prediction_market"]),
                onFlip: this.state._flipBuySell ? null : this._flipBuySell.bind(this),
                onTogglePosition: !this.state._toggleBuySellPosition ? this._toggleBuySellPosition.bind(this) : null
            });

            var sellForm = isFrozen ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BuySell__WEBPACK_IMPORTED_MODULE_8__["default"], {
                onBorrow: quoteIsBitAsset ? this._borrowQuote.bind(this) : null,
                currentAccount: currentAccount,
                backedCoin: this.props.backedCoins.find(function (a) {
                    return a.symbol === quote.get("symbol");
                }),
                currentBridges: this.props.bridgeCoins.get(quote.get("symbol")) || null,
                smallScreen: smallScreen,
                isOpen: this.state.buySellOpen,
                onToggleOpen: this._toggleOpenBuySell.bind(this),
                className: classnames__WEBPACK_IMPORTED_MODULE_20___default()("small-12 no-padding middle-content", leftOrderBook || smallScreen ? "medium-6" : "medium-6 xlarge-4", this.state.flipBuySell ? "order-" + (buySellTop ? 1 : 4 * orderMultiplier) + " buy-form" : "order-" + (buySellTop ? 2 : 5 * orderMultiplier) + " sell-form"),
                type: "ask",
                amount: ask.forSaleText,
                price: ask.priceText,
                total: ask.toReceiveText,
                quote: quote,
                base: base,
                expirationType: expirationType["ask"],
                expirations: this.EXPIRATIONS,
                expirationCustomTime: expirationCustomTime["ask"],
                onExpirationTypeChange: this._handleExpirationChange.bind(this, "ask"),
                onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "ask"),
                amountChange: this._onInputSell.bind(this, "ask", false),
                priceChange: this._onInputPrice.bind(this, "ask"),
                setPrice: this._currentPriceClick.bind(this),
                totalChange: this._onInputReceive.bind(this, "ask", true),
                balance: quoteBalance,
                balanceId: quote.get("id"),
                onSubmit: this._createLimitOrderConfirm.bind(this, base, quote, quoteBalance, coreBalance, sellFeeAsset, "sell"),
                balancePrecision: quote.get("precision"),
                quotePrecision: quote.get("precision"),
                totalPrecision: base.get("precision"),
                currentPrice: highestBid.getPrice(),
                currentPriceObject: highestBid,
                account: currentAccount.get("name"),
                fee: sellFee,
                hasFeeBalance: this.state.feeStatus[sellFee.asset_id].hasBalance,
                feeAssets: sellFeeAssets,
                feeAsset: sellFeeAsset,
                onChangeFeeAsset: this.onChangeFeeAsset.bind(this, "sell"),
                isPredictionMarket: quote.getIn(["bitasset", "is_prediction_market"]),
                onFlip: !this.state._flipBuySell ? this._flipBuySell.bind(this) : null,
                onTogglePosition: !this.state._toggleBuySellPosition ? this._toggleBuySellPosition.bind(this) : null
            });

            var orderBook = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OrderBook__WEBPACK_IMPORTED_MODULE_5__["default"], {
                latest: latest && latest.getPrice(),
                changeClass: changeClass,
                orders: marketLimitOrders,
                calls: marketCallOrders,
                invertedCalls: invertedCalls,
                combinedBids: combinedBids,
                combinedAsks: combinedAsks,
                highestBid: highestBid,
                lowestAsk: lowestAsk,
                totalBids: totals.bid,
                totalAsks: totals.ask,
                base: base,
                quote: quote,
                baseSymbol: baseSymbol,
                quoteSymbol: quoteSymbol,
                onClick: this._orderbookClick.bind(this),
                horizontal: !leftOrderBook,
                moveOrderBook: this._moveOrderBook.bind(this),
                flipOrderBook: this.props.viewSettings.get("flipOrderBook"),
                marketReady: marketReady,
                wrapperClass: "order-" + (buySellTop ? 3 : 1) + " xlarge-order-" + (buySellTop ? 4 : 1),
                currentAccount: this.props.currentAccount.get("id"),
                handleGroupOrderLimitChange: this._onGroupOrderLimitChange.bind(this),
                trackedGroupsConfig: trackedGroupsConfig,
                currentGroupOrderLimit: currentGroupOrderLimit,
                groupedBids: groupedBids,
                groupedAsks: groupedAsks
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                !this.props.marketReady ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_28__["default"], null) : null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeHeader__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    account: this.props.currentAccount,
                    quoteAsset: quoteAsset,
                    baseAsset: baseAsset,
                    hasPrediction: hasPrediction,
                    starredMarkets: starredMarkets,
                    lowestAsk: lowestAsk,
                    highestBid: highestBid,
                    lowestCallPrice: lowestCallPrice,
                    showCallLimit: showCallLimit,
                    feedPrice: feedPrice,
                    marketReady: marketReady,
                    latestPrice: latest && latest.getPrice(),
                    showDepthChart: showDepthChart,
                    marketStats: marketStats,
                    onToggleCharts: this._toggleCharts.bind(this),
                    onToggleMarketPicker: this._toggleMarketPicker.bind(this),
                    showVolumeChart: showVolumeChart,
                    chartHeight: chartHeight,
                    onChangeChartHeight: this.onChangeChartHeight.bind(this)
                }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block page-layout market-layout" },
                    !!this.state.showMarketPicker ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MarketPicker__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
                        marketPickerAsset: this.state.marketPickerAsset,
                        onToggleMarketPicker: this._toggleMarketPicker.bind(this)
                    }, this.props)) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_16__["default"], null),
                    leftOrderBook ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block left-column shrink no-overflow" },
                        orderBook
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            style: { paddingTop: 0 },
                            className: classnames__WEBPACK_IMPORTED_MODULE_20___default()("grid-block main-content vertical no-overflow")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                className: "grid-block vertical no-padding ps-container",
                                id: "CenterContent",
                                ref: "center"
                            },
                            !showDepthChart ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block shrink no-overflow",
                                    id: "market-charts"
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    locale: this.props.locale,
                                    dataFeed: this.props.dataFeed,
                                    baseSymbol: baseSymbol,
                                    quoteSymbol: quoteSymbol,
                                    leftOrderBook: leftOrderBook,
                                    marketReady: marketReady,
                                    theme: this.props.settings.get("themes"),
                                    buckets: buckets,
                                    bucketSize: bucketSize,
                                    currentPeriod: this.state.currentPeriod,
                                    chartHeight: this.state.height > 1100 ? chartHeight : chartHeight - 150,
                                    mobile: width < 800
                                })
                            ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "grid-block vertical no-padding shrink" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DepthHighChart__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                    marketReady: marketReady,
                                    orders: marketLimitOrders,
                                    showCallLimit: showCallLimit,
                                    call_orders: marketCallOrders,
                                    flat_asks: flatAsks,
                                    flat_bids: flatBids,
                                    flat_calls: showCallLimit ? flatCalls : [],
                                    flat_settles: this.props.settings.get("showSettles") && flatSettles,
                                    settles: marketSettleOrders,
                                    invertedCalls: invertedCalls,
                                    totalBids: totals.bid,
                                    totalAsks: totals.ask,
                                    base: base,
                                    quote: quote,
                                    height: this.state.height > 1100 ? chartHeight : chartHeight - 150,
                                    onClick: this._depthChartClick.bind(this, base, quote),
                                    feedPrice: !hasPrediction && feedPrice && feedPrice.toReal(),
                                    spread: spread,
                                    LCP: showCallLimit ? lowestCallPrice : null,
                                    leftOrderBook: leftOrderBook,
                                    hasPrediction: hasPrediction,
                                    noFrame: false,
                                    verticalOrderbook: leftOrderBook,
                                    theme: this.props.settings.get("themes"),
                                    centerRef: this.refs.center
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "grid-block no-overflow wrap shrink" },
                                hasPrediction ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        className: "small-12 no-overflow",
                                        style: {
                                            margin: "0 10px",
                                            lineHeight: "1.2rem"
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "p",
                                        null,
                                        description
                                    )
                                ) : null,
                                isFrozen ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        className: "error small-12 no-overflow",
                                        style: {
                                            margin: "0 10px",
                                            lineHeight: "1.2rem"
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_25___default.a, {
                                        content: "exchange.market_frozen",
                                        asset: frozenAsset,
                                        component: "p"
                                    })
                                ) : null,
                                buyForm,
                                sellForm,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MarketHistory__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()(!smallScreen && !leftOrderBook ? "medium-6 xlarge-4" : "", "no-padding no-overflow middle-content small-12 medium-6 order-5 xlarge-order-3"),
                                    headerStyle: { paddingTop: 0 },
                                    history: activeMarketHistory,
                                    currentAccount: currentAccount,
                                    myHistory: currentAccount.get("history"),
                                    base: base,
                                    quote: quote,
                                    baseSymbol: baseSymbol,
                                    quoteSymbol: quoteSymbol,
                                    marketReady: marketReady
                                }),
                                !leftOrderBook ? orderBook : null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_23__["default"], {
                                    type: "buy",
                                    ref: "buy",
                                    onForce: this._forceBuy.bind(this, "buy", buyFeeAsset, baseBalance, coreBalance),
                                    diff: buyDiff,
                                    hasOrders: combinedAsks.length > 0
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_23__["default"], {
                                    type: "sell",
                                    ref: "sell",
                                    onForce: this._forceSell.bind(this, "sell", sellFeeAsset, quoteBalance, coreBalance),
                                    diff: sellDiff,
                                    hasOrders: combinedBids.length > 0
                                }),
                                marketLimitOrders.size > 0 && base && quote ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MyOpenOrders__WEBPACK_IMPORTED_MODULE_4__["MyOpenOrders"], {
                                    smallScreen: this.props.smallScreen,
                                    className: classnames__WEBPACK_IMPORTED_MODULE_20___default()(!smallScreen && !leftOrderBook ? "medium-6 xlarge-4" : "", "small-12 medium-6 no-padding align-spaced ps-container middle-content order-" + (buySellTop ? 6 : 6)),
                                    key: "open_orders",
                                    orders: marketLimitOrders,
                                    settleOrders: marketSettleOrders,
                                    currentAccount: currentAccount,
                                    base: base,
                                    quote: quote,
                                    baseSymbol: baseSymbol,
                                    quoteSymbol: quoteSymbol,
                                    activeTab: this.props.viewSettings.get("ordersTab"),
                                    onCancel: this._cancelLimitOrder.bind(this),
                                    flipMyOrders: this.props.viewSettings.get("flipMyOrders"),
                                    feedPrice: this.props.feedPrice
                                }) : null
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "grid-block shrink right-column no-overflow",
                            style: { maxWidth: 450 }
                        },
                        verticalPanelToggle,
                        !isPanelActive ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                style: { minWidth: 358 },
                                className: "grid-block shrink right-column no-overflow vertical no-padding"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "grid-block no-padding no-margin vertical" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MyMarkets__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    className: "left-order-book no-padding no-overflow",
                                    headerStyle: { paddingTop: 0 },
                                    columns: [{ name: "star", index: 1 }, { name: "market", index: 2 }, { name: "vol", index: 3 }, { name: "price", index: 4 }, { name: "change", index: 5 }],
                                    findColumns: [{ name: "market", index: 1 }, { name: "issuer", index: 2 }, { name: "vol", index: 3 }, { name: "add", index: 4 }],
                                    current: quoteSymbol + "_" + baseSymbol,
                                    location: this.props.location,
                                    history: this.props.history
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        padding: !this.props.viewChat ? 0 : "0 0 0 0"
                                    },
                                    className: "grid-block no-margin vertical shrink"
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        onClick: this._toggleChat.bind(this),
                                        className: "exchange-content-header clickable",
                                        style: {
                                            textAlign: "left",
                                            paddingRight: 10
                                        }
                                    },
                                    this.props.viewChat ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        null,
                                        "\u25BC"
                                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        null,
                                        "\u25B2"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_25___default.a, { content: "exchange.trollbox" })
                                ),
                                this.props.viewChat ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Chat_ChatBro__WEBPACK_IMPORTED_MODULE_30__["default"], { height: "300px" }) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        padding: !this.props.miniDepthChart ? 0 : "0 0 40px 0"
                                    },
                                    className: "grid-block no-margin vertical shrink"
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        onClick: this._toggleMiniChart.bind(this),
                                        className: "exchange-content-header clickable",
                                        style: {
                                            textAlign: "left",
                                            paddingRight: 10
                                        }
                                    },
                                    this.props.miniDepthChart ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        null,
                                        "\u25BC"
                                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        null,
                                        "\u25B2"
                                    )
                                ),
                                this.props.miniDepthChart ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DepthHighChart__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                    marketReady: marketReady,
                                    orders: marketLimitOrders,
                                    showCallLimit: showCallLimit,
                                    call_orders: marketCallOrders,
                                    flat_asks: flatAsks,
                                    flat_bids: flatBids,
                                    flat_calls: showCallLimit ? flatCalls : [],
                                    flat_settles: this.props.settings.get("showSettles") && flatSettles,
                                    settles: marketSettleOrders,
                                    invertedCalls: invertedCalls,
                                    totalBids: totals.bid,
                                    totalAsks: totals.ask,
                                    base: base,
                                    quote: quote,
                                    height: 200,
                                    onClick: this._depthChartClick.bind(this, base, quote),
                                    settlementPrice: !hasPrediction && feedPrice && feedPrice.toReal(),
                                    spread: spread,
                                    LCP: showCallLimit ? lowestCallPrice : null,
                                    leftOrderBook: leftOrderBook,
                                    hasPrediction: hasPrediction,
                                    noText: true,
                                    theme: this.props.settings.get("themes")
                                }) : null
                            )
                        )
                    ),
                    quoteIsBitAsset ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        ref: "borrowQuote",
                        modalId: "borrow_modal_quote_" + quoteAsset.get("id"),
                        quote_asset: quoteAsset.get("id"),
                        backing_asset: quoteAsset.getIn(["bitasset", "options", "short_backing_asset"]),
                        account: currentAccount
                    }) : null,
                    baseIsBitAsset ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
                        ref: "borrowBase",
                        modalId: "borrow_modal_base_" + baseAsset.get("id"),
                        quote_asset: baseAsset.get("id"),
                        backing_asset: baseAsset.getIn(["bitasset", "options", "short_backing_asset"]),
                        account: currentAccount
                    }) : null
                )
            );
        }
    }]);

    return Exchange;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Exchange.propTypes = {
    marketCallOrders: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    activeMarketHistory: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    viewSettings: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
Exchange.defaultProps = {
    marketCallOrders: [],
    activeMarketHistory: {},
    viewSettings: {}
};


/* harmony default export */ __webpack_exports__["default"] = (Exchange);

/***/ }),

/***/ 2430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2390);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(569);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(713);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2427);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2413);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1220);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2431);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_sticky_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(785);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var counterpart = __webpack_require__(573);

var OrderBookRowVertical = function (_React$Component) {
    _inherits(OrderBookRowVertical, _React$Component);

    function OrderBookRowVertical() {
        _classCallCheck(this, OrderBookRowVertical);

        return _possibleConstructorReturn(this, (OrderBookRowVertical.__proto__ || Object.getPrototypeOf(OrderBookRowVertical)).apply(this, arguments));
    }

    _createClass(OrderBookRowVertical, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.order.market_base !== this.props.order.market_base) return false;
            return np.order.ne(this.props.order) || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                order = _props.order,
                quote = _props.quote,
                base = _props.base,
                final = _props.final;

            var isBid = order.isBid();
            var isCall = order.isCall();
            var integerClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], { price: order.getPrice(), quote: quote, base: base });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    onClick: this.props.onClick,
                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("sticky-table-row order-row", { "final-row": final }, { "my-order": order.isMine(this.props.currentAccount) })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell left" },
                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell" },
                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell " + integerClass + " right" },
                    price
                )
            );
        }
    }]);

    return OrderBookRowVertical;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var elemHeight = function elemHeight(elem) {
    return elem.getBoundingClientRect().height;
};

var OrderBookRowHorizontal = function (_React$Component2) {
    _inherits(OrderBookRowHorizontal, _React$Component2);

    function OrderBookRowHorizontal() {
        _classCallCheck(this, OrderBookRowHorizontal);

        return _possibleConstructorReturn(this, (OrderBookRowHorizontal.__proto__ || Object.getPrototypeOf(OrderBookRowHorizontal)).apply(this, arguments));
    }

    _createClass(OrderBookRowHorizontal, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return np.order.ne(this.props.order) || np.position !== this.props.position || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                order = _props2.order,
                quote = _props2.quote,
                base = _props2.base,
                position = _props2.position;

            var isBid = order.isBid();
            var isCall = order.isCall();

            var integerClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], { price: order.getPrice(), quote: quote, base: base });
            var amount = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountToReceive().getAmount({ real: true }), quote.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountForSale().getAmount({ real: true }), quote.get("precision"));
            var value = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountToReceive().getAmount({ real: true }), base.get("precision"));
            var total = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.totalForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.totalToReceive().getAmount({ real: true }), base.get("precision"));

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                {
                    onClick: this.props.onClick,
                    className: order.isMine(this.props.currentAccount) ? "my-order" : ""
                },
                position === "left" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? value : amount
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? amount : value
                ),
                position === "right" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                )
            );
        }
    }]);

    return OrderBookRowHorizontal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var GroupedOrderBookRowVertical = function (_React$Component3) {
    _inherits(GroupedOrderBookRowVertical, _React$Component3);

    function GroupedOrderBookRowVertical() {
        _classCallCheck(this, GroupedOrderBookRowVertical);

        return _possibleConstructorReturn(this, (GroupedOrderBookRowVertical.__proto__ || Object.getPrototypeOf(GroupedOrderBookRowVertical)).apply(this, arguments));
    }

    _createClass(GroupedOrderBookRowVertical, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.order.market_base !== this.props.order.market_base) return false;
            return np.order.ne(this.props.order) || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                order = _props3.order,
                quote = _props3.quote,
                base = _props3.base,
                final = _props3.final;

            var isBid = order.isBid();
            var integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], { price: order.getPrice(), quote: quote, base: base });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    onClick: this.props.onClick,
                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("sticky-table-row order-row", {
                        "final-row": final
                    })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell left" },
                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell" },
                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "cell " + integerClass + " right" },
                    price
                )
            );
        }
    }]);

    return GroupedOrderBookRowVertical;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var GroupedOrderBookRowHorizontal = function (_React$Component4) {
    _inherits(GroupedOrderBookRowHorizontal, _React$Component4);

    function GroupedOrderBookRowHorizontal() {
        _classCallCheck(this, GroupedOrderBookRowHorizontal);

        return _possibleConstructorReturn(this, (GroupedOrderBookRowHorizontal.__proto__ || Object.getPrototypeOf(GroupedOrderBookRowHorizontal)).apply(this, arguments));
    }

    _createClass(GroupedOrderBookRowHorizontal, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return np.order.ne(this.props.order) || np.position !== this.props.position || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props4 = this.props,
                order = _props4.order,
                quote = _props4.quote,
                base = _props4.base,
                position = _props4.position;

            var isBid = order.isBid();

            var integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], { price: order.getPrice(), quote: quote, base: base });
            var amount = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountToReceive().getAmount({ real: true }), quote.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountForSale().getAmount({ real: true }), quote.get("precision"));
            var value = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.amountToReceive().getAmount({ real: true }), base.get("precision"));
            var total = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.totalForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(order.totalToReceive().getAmount({ real: true }), base.get("precision"));

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { onClick: this.props.onClick },
                position === "left" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? value : amount
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? amount : value
                ),
                position === "right" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                )
            );
        }
    }]);

    return GroupedOrderBookRowHorizontal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var GroupOrderLimitSelector = function (_React$Component5) {
    _inherits(GroupOrderLimitSelector, _React$Component5);

    function GroupOrderLimitSelector() {
        _classCallCheck(this, GroupOrderLimitSelector);

        var _this5 = _possibleConstructorReturn(this, (GroupOrderLimitSelector.__proto__ || Object.getPrototypeOf(GroupOrderLimitSelector)).call(this));

        _this5.state = {
            groupLimit: ""
        };
        return _this5;
    }

    _createClass(GroupOrderLimitSelector, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ groupLimit: this.props.currentGroupOrderLimit });
        }
    }, {
        key: "render",
        value: function render() {
            var noGroupsAvailable = this.props.trackedGroupsConfig.length === 0;
            var trackedGroupsOptionsList = this.props.trackedGroupsConfig.map(function (key) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: key, key: key },
                    key / 100 + "%"
                );
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "select",
                {
                    dir: "rtl",
                    value: this.state.groupLimit,
                    onChange: this.props.handleGroupOrderLimitChange,
                    "data-tip": noGroupsAvailable ? counterpart.translate("tooltip.no_groups_available") : null,
                    style: noGroupsAvailable ? { cursor: "not-allowed" } : null
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    content: "exchange.group_order_limit",
                    component: "option",
                    value: "0"
                }),
                trackedGroupsOptionsList
            );
        }
    }]);

    return GroupOrderLimitSelector;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var OrderBook = function (_React$Component6) {
    _inherits(OrderBook, _React$Component6);

    function OrderBook(props) {
        _classCallCheck(this, OrderBook);

        var _this6 = _possibleConstructorReturn(this, (OrderBook.__proto__ || Object.getPrototypeOf(OrderBook)).call(this));

        _this6.queryStickyTable = function (query) {
            return _this6.refs.vertical_sticky_table.table.querySelector(query);
        };

        _this6.verticalScrollBar = function () {
            return _this6.queryStickyTable("#y-scrollbar");
        };

        _this6.toggleSpreadValue = function () {
            _this6.setState({
                displaySpreadAsPercentage: !_this6.state.displaySpreadAsPercentage
            });
        };

        _this6.toggleAutoScroll = function () {
            var newState = { autoScroll: !_this6.state.autoScroll };
            if (newState.autoScroll) _this6.setState(newState, _this6.centerVerticalScrollBar);else _this6.setState(newState);
        };

        _this6.state = {
            flip: props.flipOrderBook,
            showAllBids: false,
            showAllAsks: false,
            rowCount: 20,
            autoScroll: true
        };
        return _this6;
    }

    _createClass(OrderBook, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (!nextProps.marketReady) return false;
            return true;
        }
        //     console.log("calls changed:", !Immutable.is(nextProps.calls, this.props.calls), nextProps.calls && nextProps.calls.toJS(), this.props.calls && this.props.calls.toJS());
        //     const callsChanged = didOrdersChange(nextProps.calls, this.props.calls);
        //     const limitsChanged = didOrdersChange(nextProps.orders, this.props.orders);
        //     console.log("callsChanged:", callsChanged, "limitsChanged", limitsChanged);
        //     return (
        //         !Immutable.is(nextProps.orders, this.props.orders) ||
        //         !Immutable.is(nextProps.calls, this.props.calls) ||
        //         nextProps.horizontal !== this.props.horizontal ||
        //         !utils.are_equal_shallow(nextProps.latest, this.props.latest) ||
        //         nextProps.smallScreen !== this.props.smallScreen ||
        //         nextProps.wrapperClass !== this.props.wrapperClass ||
        //         !utils.are_equal_shallow(nextState, this.state)
        //     );
        // }

    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _this7 = this;

            // Change of market or direction
            if (nextProps.base.get("id") !== this.props.base.get("id") || nextProps.quote.get("id") !== this.props.quote.get("id")) {
                if (this.refs.askTransition) {
                    this.refs.askTransition.resetAnimation();
                    if (this.refs.hor_asks) this.refs.hor_asks.scrollTop = 0;
                    if (this.refs.hor_bids) this.refs.hor_bids.scrollTop = 0;
                }

                if (this.refs.bidTransition) {
                    this.refs.bidTransition.resetAnimation();
                }

                if (this.refs.vert_bids) this.refs.vert_bids.scrollTop = 0;

                if (!this.props.horizontal) {
                    this.setState({ autoScroll: true });
                }
            }

            if (!common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextProps.combinedAsks, this.props.combinedAsks) || !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextProps.combinedBids, this.props.combinedBids)) {
                this.setState({}, function () {
                    _this7.psUpdate();
                });
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.horizontal) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.initialize(this.verticalScrollBar());
                this.centerVerticalScrollBar();
            } else {
                var bidsContainer = this.refs.hor_bids;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.initialize(bidsContainer);
                var asksContainer = this.refs.hor_asks;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.initialize(asksContainer);
            }
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            if (!this.props.horizontal) {
                var scrollableContainer = this.queryStickyTable("#sticky-table-y-wrapper");

                var centerTextContainer = this.refs.center_text;
                var centeringOffset = 21;
                var scrollTo = centerTextContainer.offsetTop - elemHeight(scrollableContainer) / 2 + centeringOffset;

                this.offset = scrollableContainer.scrollTop - scrollTo;
            }
        }
    }, {
        key: "centerVerticalScrollBar",
        value: function centerVerticalScrollBar() {
            if (!this.props.horizontal) {
                var scrollableContainer = this.queryStickyTable("#sticky-table-y-wrapper");
                var centerTextContainer = this.refs.center_text;
                var centeringOffset = 21;
                var offset = !this.state.autoScroll && this.offset ? this.offset : 0;
                var scrollTo = centerTextContainer.offsetTop - elemHeight(scrollableContainer) / 2 + centeringOffset + offset;

                this.setState({ ownScroll: true }, function () {
                    return scrollableContainer.scrollTop = scrollTo;
                });
            }
        }
    }, {
        key: "psUpdate",
        value: function psUpdate() {
            if (!this.props.horizontal) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.update(this.verticalScrollBar());
                this.centerVerticalScrollBar();
            } else {
                var bidsContainer = this.refs.hor_bids;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.update(bidsContainer);
                var asksContainer = this.refs.hor_asks;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.update(asksContainer);
            }
        }
    }, {
        key: "_flipBuySell",
        value: function _flipBuySell() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting({
                flipOrderBook: !this.state.flip
            });

            this.setState({ flip: !this.state.flip });
        }
    }, {
        key: "_onToggleShowAll",
        value: function _onToggleShowAll(type) {
            if (type === "asks") {
                this.setState({
                    showAllAsks: !this.state.showAllAsks
                });

                if (this.state.showAllAsks) {
                    this.refs.hor_asks.scrollTop = 0;
                }
            } else {
                this.setState({
                    showAllBids: !this.state.showAllBids
                });

                if (this.state.showAllBids) {
                    this.refs.hor_bids.scrollTop = 0;
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this8 = this;

            var _props5 = this.props,
                combinedBids = _props5.combinedBids,
                combinedAsks = _props5.combinedAsks,
                highestBid = _props5.highestBid,
                lowestAsk = _props5.lowestAsk,
                quote = _props5.quote,
                base = _props5.base,
                totalAsks = _props5.totalAsks,
                totalBids = _props5.totalBids,
                quoteSymbol = _props5.quoteSymbol,
                baseSymbol = _props5.baseSymbol,
                horizontal = _props5.horizontal,
                trackedGroupsConfig = _props5.trackedGroupsConfig,
                currentGroupOrderLimit = _props5.currentGroupOrderLimit,
                handleGroupOrderLimitChange = _props5.handleGroupOrderLimitChange,
                groupedBids = _props5.groupedBids,
                groupedAsks = _props5.groupedAsks;
            var _state = this.state,
                showAllAsks = _state.showAllAsks,
                showAllBids = _state.showAllBids,
                rowCount = _state.rowCount,
                displaySpreadAsPercentage = _state.displaySpreadAsPercentage;

            var noOrders = !lowestAsk.sell_price && !highestBid.sell_price;
            var hasAskAndBids = !!(lowestAsk.sell_price && highestBid.sell_price);
            var spread = hasAskAndBids && (displaySpreadAsPercentage ? (100 * (lowestAsk._real_price / highestBid._real_price - 1)).toFixed(2) + "%" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], {
                price: lowestAsk._real_price - highestBid._real_price,
                base: base,
                quote: quote
            }));
            var bidRows = null,
                askRows = null;
            if (base && quote) {
                // limit orders or grouped orders
                if (this.props.currentGroupOrderLimit !== 0) {
                    bidRows = groupedBids.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            position: !_this8.state.flip ? "left" : "right",
                            currentAccount: _this8.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            final: index === 0,
                            currentAccount: _this8.props.currentAccount
                        });
                    });

                    var tempAsks = groupedAsks;
                    if (!horizontal) {
                        tempAsks.sort(function (a, b) {
                            return b.getPrice() - a.getPrice();
                        });
                    }
                    askRows = tempAsks.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            position: !_this8.state.flip ? "right" : "left",
                            currentAccount: _this8.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            final: 0 === index,
                            currentAccount: _this8.props.currentAccount
                        });
                    });
                } else {
                    bidRows = combinedBids.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            position: !_this8.state.flip ? "left" : "right",
                            currentAccount: _this8.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            final: index === 0,
                            currentAccount: _this8.props.currentAccount
                        });
                    });

                    var _tempAsks = combinedAsks;
                    _tempAsks.sort(function (a, b) {
                        if (horizontal) {
                            return a.getPrice() - b.getPrice();
                        } else {
                            return b.getPrice() - a.getPrice();
                        }
                    });
                    askRows = _tempAsks.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            position: !_this8.state.flip ? "right" : "left",
                            currentAccount: _this8.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this8.props.onClick.bind(_this8, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            final: 0 === index,
                            currentAccount: _this8.props.currentAccount
                        });
                    });
                }
            }

            if (this.props.horizontal) {
                var totalBidsLength = bidRows.length;
                var totalAsksLength = askRows.length;

                if (!showAllBids) {
                    bidRows.splice(rowCount, bidRows.length);
                }

                if (!showAllAsks) {
                    askRows.splice(rowCount, askRows.length);
                }

                var leftHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: "top-header", className: "top-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: "header-sub-title",
                                content: "exchange.total"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                " ",
                                "(",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    dataPlace: "top",
                                    name: baseSymbol
                                }),
                                ")"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: baseSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: quoteSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: (this.state.flip ? "ask-total" : "bid-total") + " header-sub-title",
                                content: "exchange.price"
                            })
                        )
                    )
                );

                var rightHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: "top-header", className: "top-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: (!this.state.flip ? "ask-total" : "bid-total") + " header-sub-title",
                                content: "exchange.price"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: quoteSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: baseSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: "header-sub-title",
                                content: "exchange.total"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                " ",
                                "(",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    dataPlace: "top",
                                    name: baseSymbol
                                }),
                                ")"
                            )
                        )
                    )
                );

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(this.props.wrapperClass, "grid-block orderbook no-padding small-vertical medium-horizontal align-spaced no-overflow small-12 xlarge-8")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("small-12 medium-6 middle-content", this.state.flip ? "order-1" : "order-2")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "exchange-bordered" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "exchange-content-header ask",
                                    "data-intro": counterpart.translate("walkthrough.sell_orders")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.asks" }),
                                this.state.flip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { style: { display: "inline-block" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            onClick: this._flipBuySell.bind(this),
                                            style: {
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                marginLeft: "4px",
                                                position: "relative",
                                                top: "-2px"
                                            },
                                            className: "flip-arrow"
                                        },
                                        " ",
                                        "\u21C6"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            className: "order-book-button-v",
                                            onClick: this.props.moveOrderBook
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                            name: "thumb-tack",
                                            title: "icons.thumb_tack",
                                            className: "icon-14px"
                                        })
                                    )
                                ) : null,
                                this.state.flip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "float-right header-sub-title grouped_order" },
                                    trackedGroupsConfig ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupOrderLimitSelector, {
                                        trackedGroupsConfig: trackedGroupsConfig,
                                        handleGroupOrderLimitChange: handleGroupOrderLimitChange,
                                        currentGroupOrderLimit: currentGroupOrderLimit
                                    }) : null
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { lineHeight: "16px" },
                                        className: "float-right header-sub-title"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.total" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        ": "
                                    ),
                                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(totalAsks, quote.get("precision")),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        " ",
                                        "(",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: quoteSymbol }),
                                        ")"
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { style: { paddingRight: "0.6rem" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table order-table table-hover fixed-table text-right" },
                                    !this.state.flip ? rightHeader : leftHeader
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    ref: "hor_asks",
                                    style: {
                                        paddingRight: "0.6rem",
                                        overflow: "hidden",
                                        maxHeight: 210
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    {
                                        style: { paddingBottom: 5 },
                                        className: "table order-table table-hover fixed-table text-right no-overflow"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
                                        {
                                            ref: "askTransition",
                                            className: "orderbook clickable",
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        askRows
                                    )
                                )
                            ),
                            totalAsksLength > rowCount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "orderbook-showall" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        onClick: this._onToggleShowAll.bind(this, "asks")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        content: showAllAsks ? "exchange.hide" : "exchange.show_asks"
                                    }),
                                    !showAllAsks ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        " (",
                                        totalAsksLength,
                                        ")"
                                    ) : null
                                )
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("small-12 medium-6 middle-content", this.state.flip ? "order-2" : "order-1")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "exchange-bordered" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "exchange-content-header bid",
                                    "data-intro": counterpart.translate("walkthrough.buy_orders")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.bids" }),
                                !this.state.flip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { style: { display: "inline-block" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            onClick: this._flipBuySell.bind(this),
                                            style: {
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                marginLeft: "4px",
                                                position: "relative",
                                                top: "-2px"
                                            },
                                            className: "flip-arrow"
                                        },
                                        " ",
                                        "\u21C6"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        {
                                            className: "order-book-button-v",
                                            onClick: this.props.moveOrderBook
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                            name: "thumb-tack",
                                            title: "icons.thumb_tack",
                                            className: "icon-14px"
                                        })
                                    )
                                ) : null,
                                !this.state.flip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "float-right header-sub-title grouped_order" },
                                    trackedGroupsConfig ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupOrderLimitSelector, {
                                        trackedGroupsConfig: trackedGroupsConfig,
                                        handleGroupOrderLimitChange: handleGroupOrderLimitChange,
                                        currentGroupOrderLimit: currentGroupOrderLimit
                                    }) : null
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { lineHeight: "16px" },
                                        className: "float-right header-sub-title"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.total" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        ": "
                                    ),
                                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(totalBids, base.get("precision")),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        " ",
                                        "(",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: baseSymbol }),
                                        ")"
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { style: { paddingRight: "0.6rem" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "table order-table table-hover fixed-table text-right" },
                                    this.state.flip ? rightHeader : leftHeader
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    ref: "hor_bids",
                                    style: {
                                        paddingRight: "0.6rem",
                                        overflow: "hidden",
                                        maxHeight: 210
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    {
                                        style: { paddingBottom: 5 },
                                        className: "table order-table table-hover fixed-table text-right no-overflow"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
                                        {
                                            ref: "bidTransition",
                                            className: "orderbook clickable",
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        bidRows
                                    )
                                )
                            ),
                            totalBidsLength > rowCount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "orderbook-showall" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        onClick: this._onToggleShowAll.bind(this, "bids")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        content: showAllBids ? "exchange.hide" : "exchange.show_bids"
                                    }),
                                    !showAllBids ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        " (",
                                        totalBidsLength,
                                        ")"
                                    ) : null
                                )
                            ) : null
                        )
                    )
                );
            } else {
                // Vertical orderbook
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "left-order-book no-padding no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "order-table-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_sticky_table__WEBPACK_IMPORTED_MODULE_10__["StickyTable"],
                            {
                                stickyColumnCount: 0,
                                className: "order-table table",
                                ref: "vertical_sticky_table"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "sticky-table-row top-header" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "cell header-cell left" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        { className: "header-sub-title" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: baseSymbol })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "cell header-cell" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        { className: "header-sub-title" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: quoteSymbol })
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "cell header-cell right" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        className: "header-sub-title",
                                        content: "exchange.price"
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
                                {
                                    ref: "askTransition",
                                    className: "transition-container clickable",
                                    component: "div",
                                    transitionName: "newrow"
                                },
                                askRows.length > 0 ? askRows : noOrders || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "sticky-table-row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        {
                                            className: "cell no-orders padtop",
                                            colSpan: "3"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.no_asks" })
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "sticky-table-row", ref: "center_text" },
                                noOrders ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    {
                                        colSpan: 3,
                                        className: "no-orders padtop"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.no_orders" })
                                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "td",
                                    {
                                        className: "cell center-cell",
                                        colSpan: "3"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "orderbook-latest-price" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "text-center spread" },
                                            !!spread && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "span",
                                                {
                                                    className: "clickable left",
                                                    onClick: this.toggleSpreadValue
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.spread" }),
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    { className: "spread-value" },
                                                    spread
                                                )
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                className: "lock-unlock clickable",
                                                onClick: this.toggleAutoScroll,
                                                name: this.state.autoScroll ? "locked" : "unlocked",
                                                title: this.state.autoScroll ? "icons.locked.enable_auto_scroll" : "icons.unlocked.disable_auto_scroll"
                                            }),
                                            !!this.props.latest && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "span",
                                                { className: "right" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.latest" }),
                                                " ",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    {
                                                        className: this.props.changeClass
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        price: this.props.latest,
                                                        base: this.props.base,
                                                        quote: this.props.quote
                                                    })
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__["default"],
                                {
                                    ref: "bidTransition",
                                    className: "transition-container clickable",
                                    component: "div",
                                    transitionName: "newrow"
                                },
                                bidRows.length > 0 ? bidRows : noOrders || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "sticky-table-row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        {
                                            className: "cell no-orders",
                                            colSpan: "3"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.no_bids" })
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "v-align no-padding align-center grid-block footer shrink bottom-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "v-align grid-block align-center",
                                style: { height: "2rem", overflow: "hidden" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                name: "thumb-untack",
                                title: "icons.thumb_untack",
                                className: "icon-14px order-book-button-h",
                                style: { top: "-0.5rem" },
                                onClick: this.props.moveOrderBook
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "v-align grid-block align-center grouped_order" },
                            trackedGroupsConfig ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupOrderLimitSelector, {
                                trackedGroupsConfig: trackedGroupsConfig,
                                handleGroupOrderLimitChange: handleGroupOrderLimitChange,
                                currentGroupOrderLimit: currentGroupOrderLimit
                            }) : null
                        )
                    )
                );
            }
        }
    }]);

    return OrderBook;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

OrderBook.defaultProps = {
    bids: [],
    asks: [],
    orders: {}
};

OrderBook.propTypes = {
    bids: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    asks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (OrderBook);

/***/ }),

/***/ 2437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(525);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2390);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1268);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2427);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(713);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(712);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2413);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1220);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(418);
/* harmony import */ var _Utility_BlockDate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2438);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1272);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2412);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(584);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainTypes"].operations;







var MarketHistory = function (_React$Component) {
    _inherits(MarketHistory, _React$Component);

    function MarketHistory(props) {
        _classCallCheck(this, MarketHistory);

        var _this = _possibleConstructorReturn(this, (MarketHistory.__proto__ || Object.getPrototypeOf(MarketHistory)).call(this));

        _this.state = {
            activeTab: props.viewSettings.get("historyTab", "history")
        };
        return _this;
    }

    _createClass(MarketHistory, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!nextProps.marketReady) return false;
            return !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.history, this.props.history) || nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol || nextProps.className !== this.props.className || nextState.activeTab !== this.state.activeTab || nextProps.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var historyContainer = this.refs.history;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.initialize(historyContainer);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var historyContainer = this.refs.history;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(historyContainer);
        }
    }, {
        key: "_changeTab",
        value: function _changeTab(tab) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].changeViewSetting({
                historyTab: tab
            });
            this.setState({
                activeTab: tab
            });

            // Ensure that focus goes back to top of scrollable container when tab is changed
            var historyNode = this.refs.history;
            historyNode.scrollTop = 0;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(historyNode);

            setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_16___default.a.rebuild, 1000);
        }
    }, {
        key: "render",
        value: function render() {
            var _assets,
                _this2 = this;

            var _props = this.props,
                history = _props.history,
                myHistory = _props.myHistory,
                base = _props.base,
                quote = _props.quote,
                baseSymbol = _props.baseSymbol,
                quoteSymbol = _props.quoteSymbol,
                isNullAccount = _props.isNullAccount;
            var activeTab = this.state.activeTab;

            var historyRows = null;

            if (isNullAccount) {
                activeTab = "history";
            }

            var assets = (_assets = {}, _defineProperty(_assets, quote.get("id"), {
                precision: quote.get("precision")
            }), _defineProperty(_assets, base.get("id"), {
                precision: base.get("precision")
            }), _assets);

            if (activeTab === "my_history" && myHistory && myHistory.size) {
                historyRows = myHistory.filter(function (a) {
                    var opType = a.getIn(["op", 0]);
                    return opType === operations.fill_order;
                }).filter(function (a) {
                    var quoteID = quote.get("id");
                    var baseID = base.get("id");
                    var pays = a.getIn(["op", 1, "pays", "asset_id"]);
                    var receives = a.getIn(["op", 1, "receives", "asset_id"]);
                    var hasQuote = quoteID === pays || quoteID === receives;
                    var hasBase = baseID === pays || baseID === receives;
                    return hasQuote && hasBase;
                }).sort(function (a, b) {
                    return b.get("block_num") - a.get("block_num");
                }).map(function (trx) {
                    var fill = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_18__["FillOrder"](trx.toJS(), assets, quote.get("id"));

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: fill.id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { className: fill.className },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                price: fill.getPrice(),
                                base: _this2.props.base,
                                quote: _this2.props.quote
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            fill.amountToReceive()
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            fill.amountToPay()
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BlockDate__WEBPACK_IMPORTED_MODULE_14__["default"], {
                            component: "td",
                            block_number: fill.block,
                            tooltip: true
                        })
                    );
                }).toArray();
            } else if (history && history.size) {
                historyRows = this.props.history.take(100).map(function (fill) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { key: "history_" + fill.id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { className: fill.className },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                price: fill.getPrice(),
                                base: _this2.props.base,
                                quote: _this2.props.quote
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            fill.amountToReceive()
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            fill.amountToPay()
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { className: "tooltip", "data-tip": fill.time },
                            counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.localize(fill.time, {
                                type: "date",
                                format: browser_locale__WEBPACK_IMPORTED_MODULE_17___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history"
                            })
                        )
                    );
                }).toArray();
            }

            var hc = "mymarkets-header clickable";
            var historyClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()(hc, { inactive: activeTab === "my_history" });
            var myHistoryClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()(hc, { inactive: activeTab === "history" });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: this.props.className },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "exchange-bordered small-12",
                        style: { height: "auto" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: this.props.headerStyle,
                            className: "grid-block shrink left-orderbook-header bottom-header"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(myHistoryClass, {
                                    disabled: isNullAccount
                                }),
                                onClick: this._changeTab.bind(this, "my_history")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.my_history" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: historyClass,
                                onClick: this._changeTab.bind(this, "history")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.history" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink left-orderbook-header market-right-padding-only" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                dataPlace: "top",
                                                name: baseSymbol
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
                            ref: "history",
                            style: { maxHeight: 210, overflow: "hidden" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_11__["default"],
                                {
                                    component: "tbody",
                                    transitionName: "newrow"
                                },
                                historyRows
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MarketHistory;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketHistory.defaultProps = {
    history: []
};

MarketHistory.propTypes = {
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_10__["connect"])(MarketHistory, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 2438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(781);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(782);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1272);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2412);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/**
 * @brief displays block's date and time based on block number
 *
 * properties: block - number
 * Note, it doesn't fetch block, just calculates time based on number alone.
 **/

var BlockDate = function (_React$Component) {
    _inherits(BlockDate, _React$Component);

    function BlockDate() {
        _classCallCheck(this, BlockDate);

        return _possibleConstructorReturn(this, (BlockDate.__proto__ || Object.getPrototypeOf(BlockDate)).apply(this, arguments));
    }

    _createClass(BlockDate, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            if (!this.props.blockHeader) actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__["default"].getHeader.defer(this.props.block_number);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.blockHeader && !this.props.blockHeader) setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a.rebuild, 1000);
            return np.blockHeader !== this.props.blockHeader;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                blockHeader = _props.blockHeader,
                tooltip = _props.tooltip,
                component = _props.component,
                format = _props.format;

            if (!blockHeader) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component, {
                className: tooltip ? "tooltip" : "",
                "data-tip": tooltip ? blockHeader.timestamp : ""
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(blockHeader.timestamp, {
                    type: "date",
                    format: format
                })
            ));
        }
    }]);

    return BlockDate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BlockDate.defaultProps = {
    format: browser_locale__WEBPACK_IMPORTED_MODULE_6___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history",
    tooltip: false,
    component: "span"
};


BlockDate = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(BlockDate, {
    listenTo: function listenTo() {
        return [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps(props) {
        return {
            blockHeader: stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().blockHeaders.get(props.block_number)
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BlockDate);

/***/ }),

/***/ 2446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(569);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1344);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(712);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(878);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2427);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1220);
/* harmony import */ var _Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2447);
/* harmony import */ var _Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2448);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(584);
/* harmony import */ var _ExchangeInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1250);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1023);
/* harmony import */ var react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2449);
/* harmony import */ var react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1347);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(785);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var BuySell = function (_React$Component) {
    _inherits(BuySell, _React$Component);

    function BuySell() {
        _classCallCheck(this, BuySell);

        return _possibleConstructorReturn(this, (BuySell.__proto__ || Object.getPrototypeOf(BuySell)).apply(this, arguments));
    }

    _createClass(BuySell, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.amount !== this.props.amount || nextProps.onBorrow !== this.props.onBorrow || nextProps.total !== this.props.total || nextProps.currentPrice !== this.props.currentPrice || nextProps.price !== this.props.price || nextProps.balance !== this.props.balance || nextProps.account !== this.props.account || nextProps.className !== this.props.className || (nextProps.fee && this.props.fee ? nextProps.fee.ne(this.props.fee) : false) || nextProps.isPredictionMarket !== this.props.isPredictionMarket || nextProps.feeAsset !== this.props.feeAsset || nextProps.isOpen !== this.props.isOpen || nextProps.hasFeeBalance !== this.props.hasFeeBalance || nextProps.expirationType !== this.props.expirationType || nextProps.expirationCustomTime !== this.props.expirationCustomTime;
        }
    }, {
        key: "_addBalance",
        value: function _addBalance(balance) {
            if (this.props.type === "bid") {
                this.props.totalChange({
                    target: { value: balance.getAmount({ real: true }).toString() }
                });
            } else {
                this.props.amountChange({
                    target: { value: balance.getAmount({ real: true }).toString() }
                });
            }
        }
    }, {
        key: "_setPrice",
        value: function _setPrice(price) {
            this.props.priceChange({ target: { value: price.toString() } });
        }
    }, {
        key: "_onDeposit",
        value: function _onDeposit(e) {
            e.preventDefault();
            this.refs.deposit_modal.show();
        }
    }, {
        key: "_onBuy",
        value: function _onBuy(e) {
            e.preventDefault();
            this.refs.bridge_modal.show();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                type = _props.type,
                quote = _props.quote,
                base = _props.base,
                amountChange = _props.amountChange,
                fee = _props.fee,
                isPredictionMarket = _props.isPredictionMarket,
                priceChange = _props.priceChange,
                onSubmit = _props.onSubmit,
                balance = _props.balance,
                totalChange = _props.totalChange,
                balancePrecision = _props.balancePrecision,
                currentPrice = _props.currentPrice,
                currentPriceObject = _props.currentPriceObject,
                feeAsset = _props.feeAsset,
                feeAssets = _props.feeAssets,
                hasFeeBalance = _props.hasFeeBalance,
                backedCoin = _props.backedCoin;

            var amount = void 0,
                price = void 0,
                total = void 0;
            var caret = this.props.isOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "\u25BC"
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "\u25B2"
            );

            if (this.props.amount) amount = this.props.amount;
            if (this.props.price) price = this.props.price;
            if (this.props.total) total = this.props.total;

            var balanceAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["Asset"]({
                amount: balance ? balance.get("balance") : 0,
                precision: balancePrecision,
                asset_id: this.props.balanceId
            });

            var maxBaseMarketFee = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["Asset"]({
                amount: base.getIn(["options", "max_market_fee"]),
                asset_id: base.get("asset_id"),
                precision: base.get("precision")
            });
            var maxQuoteMarketFee = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["Asset"]({
                amount: quote.getIn(["options", "max_market_fee"]),
                asset_id: quote.get("asset_id"),
                precision: quote.get("precision")
            });
            var baseMarketFeePercent = base.getIn(["options", "market_fee_percent"]) / 100 + "%";
            var quoteMarketFeePercent = quote.getIn(["options", "market_fee_percent"]) / 100 + "%";
            var quoteFee = !amount ? 0 : Math.min(maxQuoteMarketFee.getAmount({ real: true }), amount * quote.getIn(["options", "market_fee_percent"]) / 10000).toFixed(maxQuoteMarketFee.precision);
            var baseFee = !amount ? 0 : Math.min(maxBaseMarketFee.getAmount({ real: true }), total * base.getIn(["options", "market_fee_percent"]) / 10000).toFixed(maxBaseMarketFee.precision);
            var baseFlagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_16__["default"].getFlagBooleans(base.getIn(["options", "flags"]), base.has("bitasset_data_id"));
            var quoteFlagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_16__["default"].getFlagBooleans(quote.getIn(["options", "flags"]), quote.has("bitasset_data_id"));

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props.base),
                baseName = _utils$replaceName.name,
                basePrefix = _utils$replaceName.prefix;

            var hasMarketFee = baseFlagBooleans["charge_market_fee"] || quoteFlagBooleans["charge_market_fee"];
            var baseMarketFee = baseFlagBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block no-padding buy-sell-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                    ":\xA0",
                    baseMarketFeePercent
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-input" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        disabled: true,
                        type: "text",
                        id: "baseMarketFee",
                        value: baseFee,
                        autoComplete: "off"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { noTip: true, name: base.get("symbol") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                                percent: base.getIn(["options", "market_fee_percent"]) / 100,
                                asset: (basePrefix || "") + baseName
                            }),
                            className: "inline-block tooltip"
                        },
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                            style: { position: "relative", top: 3 },
                            name: "question-circle",
                            title: "icons.question_circle"
                        })
                    )
                )
            ) : hasMarketFee ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block no-padding buy-sell-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        style: { visibility: "hidden" },
                        className: "grid-block small-3 no-margin no-overflow buy-sell-label"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                    ":"
                )
            ) : null;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props.quote),
                quoteName = _utils$replaceName2.name,
                quotePrefix = _utils$replaceName2.prefix;

            var quoteMarketFee = quoteFlagBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block no-padding buy-sell-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                    ":\xA0",
                    quoteMarketFeePercent
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-input" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        disabled: true,
                        type: "text",
                        id: "quoteMarketFee",
                        value: quoteFee,
                        autoComplete: "off"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { noTip: true, name: quote.get("symbol") }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                                percent: quote.getIn(["options", "market_fee_percent"]) / 100,
                                asset: (quotePrefix || "") + quoteName
                            }),
                            className: "inline-block tooltip"
                        },
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_19__["default"], {
                            style: { position: "relative", top: 3 },
                            name: "question-circle",
                            title: "icons.question-circle"
                        })
                    )
                )
            ) : hasMarketFee ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block no-padding buy-sell-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        style: { visibility: "hidden" },
                        className: "grid-block small-3 no-margin no-overflow buy-sell-label"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                    ":"
                )
            ) : null;

            // if (!balanceAmount) {
            //     balanceAmount = 0;
            // }
            var isBid = type === "bid";
            var marketFee = isBid && quoteMarketFee ? quoteMarketFee : !isBid && baseMarketFee ? baseMarketFee : null;
            var hasBalance = isBid ? balanceAmount.getAmount({ real: true }) >= parseFloat(total) : balanceAmount.getAmount({ real: true }) >= parseFloat(amount);

            var buttonText = isPredictionMarket ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.short") : isBid ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.buy") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.sell");
            var forceSellText = isBid ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.buy") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.sell");

            var noBalance = isPredictionMarket ? false : !(balanceAmount.getAmount() > 0 && hasBalance);
            var invalidPrice = !(price > 0);
            var invalidAmount = !(amount > 0);

            var disabled = noBalance || invalidPrice || invalidAmount;

            var buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()("button buySellButton", type, {
                disabled: disabled
            });
            var balanceSymbol = isBid ? base.get("symbol") : quote.get("symbol");

            var disabledText = invalidPrice ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.invalid_price") : invalidAmount ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.invalid_amount") : noBalance ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.no_balance") : null;

            // Fee asset selection
            if (feeAssets[1] && feeAssets[1].getIn(["options", "core_exchange_rate", "quote", "asset_id"]) === "1.3.0" && feeAssets[1].getIn(["options", "core_exchange_rate", "base", "asset_id"]) === "1.3.0") {
                feeAsset = feeAssets[0];
                feeAssets.splice(1, 1);
            }
            var index = 0;
            var options = feeAssets.map(function (asset) {
                var _utils$replaceName3 = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(asset),
                    name = _utils$replaceName3.name,
                    prefix = _utils$replaceName3.prefix;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { key: asset.get("id"), value: index++ },
                    prefix,
                    name
                );
            });

            // Subtract fee from amount to sell
            var balanceToAdd = void 0;

            if (feeAsset.get("symbol") === balanceSymbol) {
                balanceToAdd = balanceAmount.clone(balanceAmount.getAmount() - fee.getAmount());
            } else {
                balanceToAdd = balanceAmount;
            }

            var _utils$replaceName4 = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props[isBid ? "base" : "quote"]),
                name = _utils$replaceName4.name,
                prefix = _utils$replaceName4.prefix;

            var buyBorrowDepositName = (prefix ? prefix : "") + name;

            var translator = __webpack_require__(573);

            var dataIntro = null;

            if (type == "bid") {
                dataIntro = translator.translate("walkthrough.buy_form");
            }

            if (type == "ask") {
                dataIntro = translator.translate("walkthrough.sell_form");
            }

            var expirationsOptionsList = Object.keys(this.props.expirations).map(function (key, i) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: key, key: key },
                    _this2.props.expirations[key].title
                );
            });

            // datepicker puts on the end of body so it's out of theme scope
            // so theme is used on wrapperClassName
            var theme = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().settings.get("themes");

            var minExpirationDate = moment__WEBPACK_IMPORTED_MODULE_18___default()();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: this.props.className },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "exchange-bordered buy-sell-container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "exchange-content-header " + type,
                            "data-intro": dataIntro
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                string: "exchange.buysell_formatter",
                                noLink: true,
                                noTip: false,
                                keys: [{
                                    type: "asset",
                                    value: quote.get("symbol"),
                                    arg: "asset"
                                }, {
                                    type: "translate",
                                    value: isPredictionMarket ? "exchange.short" : isBid ? "exchange.buy" : "exchange.sell",
                                    arg: "direction"
                                }]
                            })
                        ),
                        this.props.onFlip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                onClick: this.props.onFlip,
                                style: { cursor: "pointer", fontSize: "1rem" },
                                className: "flip-arrow"
                            },
                            " ",
                            "\u21C6"
                        ) : "null",
                        this.props.onTogglePosition ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                onClick: this.props.onTogglePosition,
                                style: { cursor: "pointer", fontSize: "1rem" },
                                className: "flip-arrow"
                            },
                            " ",
                            "\u21C5"
                        ) : "null",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                onClick: this.props.onToggleOpen,
                                className: "float-right clickable hide-for-xlarge",
                                style: { paddingLeft: 10 }
                            },
                            caret
                        ),
                        this.props.currentBridges ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right buy-sell-deposit" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { onClick: this._onBuy.bind(this) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    string: "exchange.buysell_formatter",
                                    noLink: true,
                                    keys: [{
                                        type: "asset",
                                        value: this.props[isBid ? "base" : "quote"].get("symbol"),
                                        arg: "asset"
                                    }, {
                                        type: "translate",
                                        value: "exchange.buy",
                                        arg: "direction"
                                    }]
                                })
                            )
                        ) : null,
                        this.props.backedCoin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right buy-sell-deposit" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { onClick: this._onDeposit.bind(this) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    string: "exchange.buysell_formatter",
                                    noLink: true,
                                    keys: [{
                                        type: "asset",
                                        value: this.props[isBid ? "base" : "quote"].get("symbol"),
                                        arg: "asset"
                                    }, {
                                        type: "translate",
                                        value: "exchange.deposit",
                                        arg: "direction"
                                    }]
                                })
                            )
                        ) : null,
                        this.props.onBorrow ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right buy-sell-deposit" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { onClick: this.props.onBorrow },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    string: "exchange.buysell_formatter",
                                    noLink: true,
                                    keys: [{
                                        type: "asset",
                                        value: this.props[isBid ? "base" : "quote"].get("symbol"),
                                        arg: "asset"
                                    }, {
                                        type: "translate",
                                        value: "exchange.borrow",
                                        arg: "direction"
                                    }]
                                })
                            )
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        {
                            className: (!this.props.isOpen ? "hide-container " : "") + "order-form",
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block vertical no-overflow no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block no-padding buy-sell-row" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-3 no-margin no-overflow buy-sell-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.price" }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-5 no-margin no-overflow buy-sell-input" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                        id: type + "Price",
                                        value: price,
                                        onChange: priceChange,
                                        autoComplete: "off",
                                        placeholder: "0.0"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        dataPlace: "right",
                                        name: base.get("symbol")
                                    }),
                                    "\xA0/\xA0",
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        dataPlace: "right",
                                        name: quote.get("symbol")
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block no-padding buy-sell-row" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-3 no-margin no-overflow buy-sell-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.amount" }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-5 no-margin no-overflow buy-sell-input" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                        id: type + "Amount",
                                        value: amount,
                                        onChange: amountChange,
                                        autoComplete: "off",
                                        placeholder: "0.0"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        dataPlace: "right",
                                        name: quote.get("symbol")
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block buy-sell-row bottom-row" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-3 no-margin no-overflow buy-sell-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.total" }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-5 no-margin no-overflow buy-sell-input" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                        id: type + "Total",
                                        value: total,
                                        onChange: totalChange,
                                        autoComplete: "off",
                                        placeholder: "0.0"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-4 no-margin no-overflow buy-sell-box" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        dataPlace: "right",
                                        name: base.get("symbol")
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block no-padding buy-sell-row" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-3 no-margin no-overflow buy-sell-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.fee" }),
                                    ":"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "grid-block small-5 no-margin no-overflow buy-sell-input" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        className: !hasFeeBalance ? "no-balance" : "",
                                        disabled: true,
                                        type: "text",
                                        id: type + "Fee",
                                        value: !hasFeeBalance ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("transfer.errors.insufficient") : fee.getAmount({ real: true }),
                                        autoComplete: "off"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "grid-block small-4 no-margin no-overflow buy-sell-box",
                                        style: {
                                            paddingLeft: feeAssets.length !== 1 ? 0 : 5
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "select",
                                        {
                                            style: feeAssets.length === 1 ? { background: "none" } : null,
                                            disabled: feeAssets.length === 1,
                                            value: feeAssets.indexOf(this.props.feeAsset),
                                            className: "form-control" + (feeAssets.length !== 1 ? " buysell-select" : ""),
                                            onChange: this.props.onChangeFeeAsset
                                        },
                                        options
                                    )
                                )
                            ),
                            marketFee
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-content clear-fix no-padding" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    { className: "float-left" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            { className: "buy-sell-info" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.balance" }),
                                                ":"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                {
                                                    style: {
                                                        paddingLeft: 5,
                                                        textAlign: "right"
                                                    }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    {
                                                        style: {
                                                            borderBottom: "#A09F9F 1px dotted",
                                                            cursor: "pointer"
                                                        },
                                                        onClick: this._addBalance.bind(this, balanceToAdd)
                                                    },
                                                    common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(balanceAmount.getAmount({ real: true }), balancePrecision),
                                                    " ",
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                        name: balanceSymbol
                                                    })
                                                )
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            { className: "buy-sell-info" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                { style: { paddingTop: 5 } },
                                                isBid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.lowest_ask" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.highest_bid" }),
                                                ":\xA0"
                                            ),
                                            currentPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                {
                                                    style: {
                                                        paddingLeft: 5,
                                                        textAlign: "right",
                                                        paddingTop: 5,
                                                        verticalAlign: "bottom"
                                                    }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    {
                                                        style: {
                                                            borderBottom: "#A09F9F 1px dotted",
                                                            cursor: "pointer"
                                                        },
                                                        onClick: this.props.setPrice.bind(this, type, currentPriceObject.sellPrice())
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                        price: currentPrice,
                                                        quote: quote,
                                                        base: base
                                                    }),
                                                    " ",
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                        name: base.get("symbol")
                                                    }),
                                                    "/",
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                        name: quote.get("symbol")
                                                    })
                                                )
                                            ) : null
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "tr",
                                            { className: "buy-sell-info" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                { style: { paddingTop: 5 } },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transaction.expiration" }),
                                                ":"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "td",
                                                { className: "expiration-datetime-picker" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "select",
                                                    {
                                                        onChange: this.props.onExpirationTypeChange,
                                                        value: this.props.expirationType
                                                    },
                                                    expirationsOptionsList
                                                ),
                                                this.props.expirationType === "SPECIFIC" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17___default.a, {
                                                    pickerPosition: "bottom center",
                                                    wrapperClassName: theme,
                                                    timePicker: true,
                                                    min: minExpirationDate,
                                                    inputFormat: "Do MMM YYYY hh:mm A",
                                                    value: this.props.expirationCustomTime,
                                                    onChange: this.props.onExpirationCustomChange
                                                }) : null
                                            )
                                        )
                                    )
                                ),
                                disabledText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "float-right",
                                        "data-tip": disabledText,
                                        "data-place": "right"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { margin: 0 },
                                        className: buttonClass,
                                        type: "submit",
                                        onClick: onSubmit.bind(this, true),
                                        value: buttonText
                                    })
                                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "float-right", "data-tip": "" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { margin: 0 },
                                        className: buttonClass,
                                        type: "submit",
                                        onClick: onSubmit.bind(this, true),
                                        value: buttonText
                                    })
                                ),
                                disabledText && isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { paddingRight: 10 },
                                        className: "float-right",
                                        "data-tip": disabledText,
                                        "data-place": "right"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { margin: 0 },
                                        className: buttonClass,
                                        type: "submit",
                                        onClick: onSubmit.bind(this, false),
                                        value: forceSellText
                                    })
                                ) : isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        style: { paddingRight: 10 },
                                        className: "float-right",
                                        "data-tip": ""
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                        style: { margin: 0 },
                                        className: buttonClass,
                                        type: "submit",
                                        onClick: onSubmit.bind(this, false),
                                        value: forceSellText
                                    })
                                ) : null
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
                    ref: "deposit_modal",
                    action: "deposit",
                    fiatModal: false,
                    account: this.props.currentAccount.get("name"),
                    sender: this.props.currentAccount.get("id"),
                    asset: this.props[isBid ? "base" : "quote"].get("id"),
                    modalId: "simple_deposit_modal" + (type === "bid" ? "" : "_ask"),
                    balances: [this.props.balance]
                }, backedCoin)),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    ref: "bridge_modal",
                    action: "deposit",
                    account: this.props.currentAccount.get("name"),
                    sender: this.props.currentAccount.get("id"),
                    asset: this.props.balanceId,
                    modalId: "simple_bridge_modal" + (type === "bid" ? "" : "_ask"),
                    balances: [this.props.balance],
                    bridges: this.props.currentBridges
                })
            );
        }
    }]);

    return BuySell;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BuySell.propTypes = {
    balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainObject,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    amountChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    priceChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onExpirationTypeChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onExpirationCustomChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
BuySell.defaultProps = {
    type: "bid"
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(BuySell));

/***/ }),

/***/ 2480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1291);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1270);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(727);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1220);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(785);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(418);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(863);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1292);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(569);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1265);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var MarketPickerWrapper = function (_React$Component) {
    _inherits(MarketPickerWrapper, _React$Component);

    function MarketPickerWrapper() {
        _classCallCheck(this, MarketPickerWrapper);

        var _this = _possibleConstructorReturn(this, (MarketPickerWrapper.__proto__ || Object.getPrototypeOf(MarketPickerWrapper)).call(this));

        _this.state = _this.initialState();

        _this.getAssetList = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_11__["default"].getAssetList.defer, 150);
        return _this;
    }

    _createClass(MarketPickerWrapper, [{
        key: "initialState",
        value: function initialState() {
            return {
                marketsList: "",
                issuersList: "",
                lookupQuote: null,
                allMarkets: "",
                allIssuers: "",
                inputValue: ""
            };
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.marketPickerAsset !== this.props.marketPickerAsset) this.setState(this.initialState());

            if (nextProps.searchAssets !== this.props.searchAssets) this.assetFilter();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return np.marketPickerAsset !== this.props.marketPickerAsset || np.searchAssets !== this.props.searchAssets || ns.marketsList !== this.state.marketsList || ns.issuersList !== this.state.issuersList || !common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "_onSelectIssuer",
        value: function _onSelectIssuer(e) {
            var filterByIssuerName = e.target.value == "0" ? null : e.target.value;
            this.assetFilter(filterByIssuerName);
        }
    }, {
        key: "_onInputName",
        value: function _onInputName(getBackedAssets, e) {
            var _this2 = this;

            var toFind = e.target.value.trim().toUpperCase();
            var isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainValidation"].is_valid_symbol_error(toFind, true);

            this.setState({
                inputValue: e.target.value.trim(),
                activeSearch: true,
                allMarkets: "",
                allIssuers: "",
                marketsList: "",
                issuersList: ""
            });

            /* Don't lookup invalid asset names */
            if (!isValidName) {
                this.setState({
                    activeSearch: false
                });
                return;
            }

            if (this.state.inputValue !== toFind) {
                this.timer && clearTimeout(this.timer);
            }

            this.timer = setTimeout(function () {
                _this2._lookupAssets(toFind, getBackedAssets);
            }, 1500);
        }
    }, {
        key: "_lookupAssets",
        value: function _lookupAssets(value) {
            var gatewayAssets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!value && value !== "") return;

            var quote = value.toUpperCase();

            this.getAssetList(quote, 10, gatewayAssets);

            this.setState({
                activeSearch: false,
                lookupQuote: quote
            });
        }
    }, {
        key: "_changeMarketPickerFilter",
        value: function _changeMarketPickerFilter(value) {
            this.setState({
                marketsList: "",
                issuersList: "",
                lookupQuote: null,
                allMarkets: "",
                allIssuers: "",
                inputValue: "",
                marketPickerTab: value,
                activeSearch: false
            });
        }
    }, {
        key: "_fetchIssuer",
        value: function _fetchIssuer(asset) {
            var issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(asset.issuer, false, false);
            // Issuer may sometimes not resolve at first.
            // A waiter may be required here
            if (!issuer) {
                return;
            } else {
                return issuer;
            }
        }
    }, {
        key: "assetFilter",
        value: function assetFilter() {
            var _this3 = this;

            var filterByIssuerName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var _props = this.props,
                searchAssets = _props.searchAssets,
                marketPickerAsset = _props.marketPickerAsset;
            var _state = this.state,
                inputValue = _state.inputValue,
                lookupQuote = _state.lookupQuote,
                marketPickerTab = _state.marketPickerTab;


            this.setState({
                activeSearch: true
            });

            var assetCount = 0;
            var allMarkets = [];
            var allIssuers = [];

            var baseSymbol = this.props.baseAsset.get("symbol");
            var quoteSymbol = this.props.quoteAsset.get("symbol");

            if (searchAssets.size && !!inputValue && inputValue.length > 2) {
                searchAssets.filter(function (a) {
                    try {
                        if (a.options.description) {
                            var description = JSON.parse(a.options.description);
                            if ("visible" in description) {
                                if (!description.visible) return false;
                            }
                        }
                    } catch (e) {}

                    return a.symbol.indexOf(lookupQuote) !== -1;
                }).forEach(function (asset) {
                    if (assetCount > 100) return;
                    assetCount++;

                    var issuer = _this3._fetchIssuer(asset);

                    var base = _this3.props.baseAsset.get("symbol");
                    var marketID = asset.symbol + "_" + base;

                    var isQuoteAsset = quoteSymbol == marketPickerAsset;
                    var includeAsset = isQuoteAsset && asset.symbol != baseSymbol || !isQuoteAsset && asset.symbol != quoteSymbol;

                    if (includeAsset && (!filterByIssuerName || filterByIssuerName == issuer.get("name")) && (marketPickerTab == "search" && asset.symbol.startsWith(inputValue.toUpperCase()) || !marketPickerTab || marketPickerTab == "filter")) {
                        allMarkets.push([marketID, {
                            quote: asset.symbol,
                            base: base,
                            issuer: !issuer ? null : issuer.get("name")
                        }]);
                    }
                    if (includeAsset && issuer && !allIssuers.includes(issuer.get("name"))) allIssuers.push(issuer.get("name"));
                });
            }

            var marketsList = this.state.marketsList;
            var issuersList = this.state.issuersList;

            issuersList = !allIssuers ? null : allIssuers.sort(function (a, b) {
                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1;
                } else {
                    return 0;
                }
            }).map(function (issuer) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "option",
                    { key: issuer, value: issuer },
                    issuer
                );
            });

            marketsList = !allMarkets ? null : allMarkets.sort(function (a, b) {
                var aIsKnownGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_14__["hasGatewayPrefix"])(a[1]["quote"]);
                var bIsKnownGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_14__["hasGatewayPrefix"])(b[1]["quote"]);

                if (aIsKnownGateway && !bIsKnownGateway) {
                    return -1;
                } else if (bIsKnownGateway && !aIsKnownGateway) {
                    return 1;
                } else if (a[1]["quote"] > b[1]["quote"]) {
                    return 1;
                } else if (a[1]["quote"] < b[1]["quote"]) {
                    return -1;
                } else {
                    return 0;
                }
            }).map(function (market) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "li",
                    { key: market[0] },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__["default"], { name: market[1]["quote"] }),
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "span",
                        { style: { float: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
                            {
                                onClick: function onClick() {
                                    _this3.props.onToggleMarketPicker(null), actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].switchMarket();
                                },
                                to: quoteSymbol == marketPickerAsset ? "/market/" + market[1]["quote"] + "_" + baseSymbol : "/market/" + quoteSymbol + "_" + market[1]["quote"]
                            },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.market_picker.use" })
                        )
                    )
                );
            });

            this.setState({
                allMarkets: allMarkets,
                allIssuers: allIssuers,
                marketsList: marketsList,
                issuersList: issuersList,
                activeSearch: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            var marketPickerAsset = this.props.marketPickerAsset;
            var _state2 = this.state,
                marketPickerTab = _state2.marketPickerTab,
                inputValue = _state2.inputValue,
                allMarkets = _state2.allMarkets,
                issuersList = _state2.issuersList,
                marketsList = _state2.marketsList;


            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                "div",
                { className: "marketPicker" },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "marketPicker__header" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        { className: "marketPicker__filterType" },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                            className: "marketPicker__filterHeader",
                            component: "span",
                            content: "exchange.market_picker.search_mode"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            style: { marginLeft: 5, cursor: "pointer" },
                            className: !this.state.marketPickerTab || this.state.marketPickerTab == "filter" ? "blue-icon" : "",
                            size: "1_5x",
                            onClick: this._changeMarketPickerFilter.bind(this, "filter"),
                            name: "filter",
                            title: "icons.filter"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            style: { marginLeft: 5, cursor: "pointer" },
                            className: this.state.marketPickerTab == "search" ? "blue-icon" : "",
                            size: "1_5x",
                            onClick: this._changeMarketPickerFilter.bind(this, "search"),
                            name: "zoom",
                            title: "icons.zoom"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        className: "marketPicker__title",
                        component: "span",
                        content: "exchange.market_picker.title"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "marketPicker__subHeader" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.market_picker.sub_title" }),
                    "\xA0",
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
                        {
                            to: "/asset/" + marketPickerAsset,
                            style: {
                                cursor: "pointer",
                                color: "lightblue !important"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__["default"], { name: marketPickerAsset }),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            className: "blue-icon",
                            style: { marginLeft: 5 },
                            name: "info-circle-o",
                            title: "icons.info_circle_o"
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    {
                        id: "search",
                        style: { display: marketPickerTab == "search" ? "" : "none" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "section",
                            { className: "block-list no-border-bottom" },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "header",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                    component: "span",
                                    content: "exchange.market_picker.search_for_asset"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
                                type: "text",
                                value: inputValue,
                                onChange: this._onInputName.bind(this, false),
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_12___default.a.translate("exchange.market_picker.search"),
                                maxLength: "16",
                                tabIndex: 2
                            })
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    {
                        id: "filter",
                        style: {
                            display: !this.state.marketPickerTab || this.state.marketPickerTab == "filter" ? "" : "none"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "section",
                            { className: "block-list no-border-bottom" },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "header",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                    component: "span",
                                    content: "exchange.market_picker.find_by_asset"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
                                type: "text",
                                value: inputValue,
                                onChange: this._onInputName.bind(this, true),
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_12___default.a.translate("exchange.market_picker.search"),
                                maxLength: "16",
                                tabIndex: 2
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "section",
                            { className: "block-list no-border-bottom" },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "header",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                                    component: "span",
                                    content: "exchange.market_picker.filter_by_issuer"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "ul",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "li",
                                    { className: "with-dropdpwn" },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "select",
                                        {
                                            className: "settings-select",
                                            onChange: this._onSelectIssuer.bind(this),
                                            style: { border: 0 }
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                            "option",
                                            { key: "0", value: "0" },
                                            counterpart__WEBPACK_IMPORTED_MODULE_12___default.a.translate("exchange.market_picker.show_all"),
                                            " "
                                        ),
                                        issuersList
                                    )
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "section",
                    { className: "block-list no-border-bottom" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
                        component: "header",
                        content: "exchange.market_picker.results",
                        total_assets: !allMarkets ? 0 : allMarkets.length
                    })
                ),
                this.state.activeSearch && this.state.inputValue.length != 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "three-bounce" })
                ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "results" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "ul",
                        { style: { marginLeft: 0 } },
                        marketsList
                    )
                )
            );
        }
    }]);

    return MarketPickerWrapper;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var MarketPicker = function (_React$Component2) {
    _inherits(MarketPicker, _React$Component2);

    function MarketPicker() {
        _classCallCheck(this, MarketPicker);

        return _possibleConstructorReturn(this, (MarketPicker.__proto__ || Object.getPrototypeOf(MarketPicker)).apply(this, arguments));
    }

    _createClass(MarketPicker, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MarketPickerWrapper, this.props);
        }
    }]);

    return MarketPicker;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

MarketPicker = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(MarketPicker, {
    listenTo: function listenTo() {
        return [stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            searchAssets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().assets,
            assetsLoading: stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().assetsLoading
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (MarketPicker);

/***/ }),

/***/ 2481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2483);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2484);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var TradingView = __webpack_require__(2482);



// import {connect} from "alt-react";
// import MarketsStore from "stores/MarketsStore";

var TradingViewPriceChart = function (_React$Component) {
    _inherits(TradingViewPriceChart, _React$Component);

    function TradingViewPriceChart() {
        _classCallCheck(this, TradingViewPriceChart);

        return _possibleConstructorReturn(this, (TradingViewPriceChart.__proto__ || Object.getPrototypeOf(TradingViewPriceChart)).apply(this, arguments));
    }

    _createClass(TradingViewPriceChart, [{
        key: "loadTradingView",
        value: function loadTradingView(props) {
            var _this2 = this;

            var dataFeed = props.dataFeed;

            var themeColors = assets_colors__WEBPACK_IMPORTED_MODULE_1___default.a[props.theme];

            if (!dataFeed) return;
            if (!!this.tvWidget) return;

            if (false) {}

            dataFeed.update({
                resolutions: props.buckets,
                ticker: props.quoteSymbol + "_" + props.baseSymbol,
                interval: Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getResolutionsFromBuckets"])([props.bucketSize])[0]
            });

            if (false) {}
            if (false) {}
            this.tvWidget = new TradingView.widget({
                fullscreen: false,
                symbol: props.quoteSymbol + "_" + props.baseSymbol,
                interval: Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getResolutionsFromBuckets"])([props.bucketSize])[0],
                library_path: ( false ? undefined : "") + "/charting_library/",
                datafeed: dataFeed,
                container_id: "tv_chart",
                charts_storage_url: "https://saveload.tradingview.com",
                charts_storage_api_version: "1.1",
                client_id: "tradingview.com",
                user_id: "public_user_id",
                autosize: true,
                locale: props.locale,
                timezone: Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getTVTimezone"])(),
                toolbar_bg: themeColors.bgColor,
                overrides: {
                    "paneProperties.background": themeColors.bgColor,
                    "paneProperties.horzGridProperties.color": themeColors.axisLineColor,
                    "paneProperties.vertGridProperties.color": themeColors.axisLineColor,
                    "scalesProperties.lineColor": themeColors.axisLineColor,
                    "scalesProperties.textColor": themeColors.textColor
                },
                custom_css_url: props.theme + ".css",
                enabled_features: ["study_templates", "keep_left_toolbar_visible_on_small_screens"],
                disabled_features: ["header_saveload", "symbol_info", "symbol_search_hot_key", "border_around_the_chart", "header_symbol_search", "header_compare"],
                debug: false,
                preset: this.props.mobile ? "mobile" : ""
            });

            this.tvWidget.onChartReady(function () {
                if (false) {}
                if (false) {}
                dataFeed.update({
                    onMarketChange: _this2._setSymbol.bind(_this2)
                });
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (!np.marketReady) return;
            if (!this.props.dataFeed && np.dataFeed) {
                loadTradingView(np);
            }
        }
    }, {
        key: "_setSymbol",
        value: function _setSymbol(ticker) {
            if (this.tvWidget) {
                this.tvWidget.setSymbol(ticker, Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getResolutionsFromBuckets"])([this.props.bucketSize])[0]);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadTradingView(this.props);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.props.dataFeed.clearSubs();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.chartHeight !== this.props.chartHeight) return true;
            if (!!this.tvWidget) return false;
            if (!np.marketReady) return false;
            return true;
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "small-12" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "exchange-bordered",
                    style: {
                        marginTop: 10,
                        marginBottom: 10,
                        height: this.props.chartHeight + "px"
                    },
                    id: "tv_chart"
                })
            );
        }
    }]);

    return TradingViewPriceChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TradingViewPriceChart);

/***/ }),

/***/ 2482:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";function e(t,o){var i=n({},t);for(var s in o)"object"!=typeof t[s]||null===t[s]||Array.isArray(t[s])?void 0!==o[s]&&(i[s]=o[s]):i[s]=e(t[s],o[s]);return i}function o(){return"1.12 (internal id 630b704a @ 2018-06-06 02:16:11.305509)"}function i(t){window.addEventListener("DOMContentLoaded",t,!1)}var n=Object.assign||function(t){for(var e,o=arguments,i=1,n=arguments.length;i<n;i++){e=o[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},s={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},r={width:800,height:500,symbol:"AA",interval:"D",timezone:"UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}},a=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(r,t),t.preset){var o=s[t.preset];o?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(o.disabled_features):this._options.disabled_features=o.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(o.enabled_features):this._options.enabled_features=o.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.setLanguage=function(t){this.remove(),this._options.locale=t,this._create()},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e+"",o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id];var t=this._getIFrameElement();t.contentWindow.destroyChart(),t.parentNode&&t.parentNode.removeChild(t)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o,i){this._innerAPI().saveChartToServer(t,e,o,i)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype._getIFrameElement=function(){var t=document.getElementById(this._id);if(null===t)throw new Error("There is no such iframe");return t},t.prototype._innerAPI=function(){return this._getIFrameElement().contentWindow.tradingViewApi},t.prototype._innerWindow=function(){return this._getIFrameElement().contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._getIFrameElement().style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),o=document.getElementById(this._options.container_id);if(null===o)throw new Error("There is no such element - #"+this._options.container_id);o.innerHTML=e;var i=this._getIFrameElement();(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize();var n=function(){i.removeEventListener("load",n,!1),i.contentWindow.widgetReady(function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){o[e].call(t)}i.contentWindow.initializationFinished()})};i.addEventListener("load",n,!1)},t.prototype._render=function(){var t=window;t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter},this._options.saved_data&&(t[this._id].chartContent={json:this._options.saved_data});var e=(this._options.library_path||"")+"static/tv-chart.630b704a2b9d0eaf1593.html#localserver=1&symbol="+encodeURIComponent(this._options.symbol)+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+this._options.toolbar_bg.replace("#",""):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.indicators_file_name?"&indicatorsFile="+encodeURIComponent(this._options.indicators_file_name):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+this._options.debug+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}(),d=a;window.TradingView=window.TradingView||{},window.TradingView.version=o,t.version=o,t.onready=i,t.widget=d,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ 2483:
/***/ (function(module, exports) {

module.exports = {
    midnightTheme: {
        bidColor: "#50D2C2",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#E3745B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#6BA583",
        negativeColor: "#DB0000",
        strokeColor: "#FFFF00",
        primaryText: "#e0e0e0",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
        tooltipColor: "#fff",
        tooltipFillColor: "#fff",
        //axis
        axisLabelsColor: "#fff",
        axisLineColor: "rgba(200, 200, 200, 0.3)",
        indicatorLineColor: "#FFFFFF",
        bgColor: "#191a1f",
        textColor: "#e0e0e0"
    },
    rudexDarkTheme: {
        bidColor: "#50D2C2",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#E3745B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#6BA583",
        negativeColor: "#DB0000",
        strokeColor: "#FFFF00",
        primaryText: "#e0e0e0",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
        tooltipColor: "#fff",
        tooltipFillColor: "#fff",
        //axis
        axisLabelsColor: "#fff",
        axisLineColor: "#AAAAAA",
        indicatorLineColor: "#FFFFFF",
        bgColor: "#191a1f",
        textColor: "#e0e0e0"
    },
    darkTheme: {
        bidColor: "#6BA583",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#E3745B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#258A14",
        negativeColor: "#DB0000",
        strokeColor: "#FFFF00",
        primaryText: "#e0e0e0",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
        tooltipColor: "#fff",
        tooltipFillColor: "#fff",
        //axis
        axisLabelsColor: "#fff",
        axisLineColor: "rgba(200, 200, 200, 0.3)",
        indicatorLineColor: "#FFFFFF",
        bgColor: "#2a2a2a",
        textColor: "#ffffff"
    },
    lightTheme: {
        bidColor: "#258A14",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#EA340B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#528c0a",
        negativeColor: "rgba(225, 66, 74, 1)",
        strokeColor: "#000000",
        primaryText: "#242424",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(255,255,255, 0.9)",
        tooltipColor: "#000",
        tooltipFillColor: "#000",
        //axis
        axisLabelsColor: "#000",
        axisLineColor: "rgba(200, 200, 200, 0.3)",
        indicatorLineColor: "#848484",
        bgColor: "#fff",
        textColor: "#3d3d3d"
    }
};

/***/ }),

/***/ 2484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFeed", function() { return DataFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInfo", function() { return SymbolInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResolutionsFromBuckets", function() { return getResolutionsFromBuckets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTVTimezone", function() { return getTVTimezone; });
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1269);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2485);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1270);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1265);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(569);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var SymbolInfo = function SymbolInfo(options) {
    _classCallCheck(this, SymbolInfo);

    this.name = options.ticker;
    this.ticker = options.ticker;

    var quoteGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__["getGatewayName"])(options.quoteAsset);
    var baseGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__["getGatewayName"])(options.baseAsset);
    var currentExchange = quoteGateway === baseGateway ? quoteGateway : quoteGateway && !baseGateway ? quoteGateway : !quoteGateway && baseGateway ? baseGateway : quoteGateway + " / " + baseGateway;

    var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(options.baseAsset),
        baseSymbol = _utils$replaceName.name,
        basePrefix = _utils$replaceName.prefix;

    var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(options.quoteAsset),
        quoteSymbol = _utils$replaceName2.name,
        quotePrefix = _utils$replaceName2.prefix;

    this.description = "" + (quotePrefix || "") + quoteSymbol + " / " + (basePrefix || "") + baseSymbol + " " + (!!currentExchange ? "(" + currentExchange + ")" : "");
    this.type = "bitcoin";
    this.session = "24x7";
    this.timezone = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz.guess();
    this.data_status = "streaming";
    this.supported_resolutions = options.resolutions;
    this.has_empty_bars = true;
    this.pricescale = Math.pow(10, options.baseAsset.get("precision"));
    this.quoteAsset = options.quoteAsset;
    this.baseAsset = options.baseAsset;
    this.minmov = 1;

    this.has_intraday = this.supported_resolutions.reduce(function (supported, r) {
        return supported || !isNaN(parseInt(r, 10));
    }, false);
    this.intraday_multipliers = this.supported_resolutions.filter(function (r) {
        return !isNaN(parseInt(r, 10));
    });

    this.has_seconds = this.supported_resolutions.reduce(function (supported, r) {
        return supported || r.indexOf("S") !== -1;
    }, false);
    this.seconds_multipliers = this.supported_resolutions.filter(function (r) {
        return r.indexOf("S") !== -1;
    });

    this.has_daily = this.supported_resolutions.reduce(function (supported, r) {
        return supported || r.indexOf("D") !== -1;
    }, false);

    this.has_daily = this.supported_resolutions.reduce(function (supported, r) {
        return supported || r.indexOf("D") !== -1;
    }, false);
};

function getResolutionsFromBuckets(buckets) {
    var resolutions = buckets.map(function (r) {
        var minute = r / 60;
        var day = minute / 60 / 24;
        var week = day / 7;

        if (minute < 1) {
            // below 1 minute we return Seconds
            return r + "S";
        } else if (day < 1 && parseInt(minute, 10) === minute) {
            // below 1 day we return Minutes
            return minute.toString();
        } else if (week < 1) {
            // below 1 week we return Days
            if (day >= 1) {
                if (parseInt(day, 10) === day) {
                    if (day === 1) return "D";
                    return day + "D";
                }
            }
        } else {
            // we return weeks
            if (week >= 1) {
                if (parseInt(week, 10) === week) {
                    return week + "D";
                }
            }
        }

        return null;
    }).filter(function (a) {
        return !!a;
    });

    return resolutions;
}

function getBucketFromResolution(r) {
    if (r === "D") return 24 * 60 * 60;

    if (r.indexOf("W") !== -1) {
        return parseInt(r.replace("D", ""), 10) * 7 * 24 * 60 * 60;
    } else if (r.indexOf("D") !== -1) {
        return parseInt(r.replace("D", ""), 10) * 24 * 60 * 60;
    } else if (r.indexOf("S") !== -1) {
        return parseInt(r.replace("S", ""), 10);
    } else {
        return parseInt(r, 10) * 60;
    }
}

var DataFeed = function () {
    function DataFeed() {
        _classCallCheck(this, DataFeed);
    }

    _createClass(DataFeed, [{
        key: "update",
        value: function update(options) {
            for (var key in options) {
                switch (key) {
                    case "resolutions":
                        this.supported_resolutions = getResolutionsFromBuckets(options.resolutions);
                        break;

                    case "onMarketChange":
                        stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe("market_change");
                        stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("market_change", options[key]);
                        break;

                    default:
                        this[key] = options[key];
                }
            }
        }
    }, {
        key: "clearSubs",
        value: function clearSubs() {
            stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].clearSubs();
        }
    }, {
        key: "onReady",
        value: function onReady(callback) {
            var _this = this;

            setTimeout(function () {
                callback({
                    exchanges: [{
                        value: "OPEN.",
                        name: "Openledger",
                        desc: "Openledger Gateway"
                    }],
                    symbols_types: [],
                    supported_resolutions: _this.supported_resolutions,
                    supports_marks: false,
                    supports_search: false,
                    supports_time: true
                });
            }, 10);
        }
    }, {
        key: "searchSymbols",
        value: function searchSymbols(userInput, exchange, symbolType, onResultReadyCallback) {
            console.log("searchSymbols", userInput, exchange, symbolType);

            onResultReadyCallback([]);

            /*
            [
                {
                    "symbol": "<short symbol name>",
                    "full_name": "<full symbol name>", // e.g. BTCE:BTCUSD
                    "description": "<symbol description>",
                    "exchange": "<symbol exchange name>",
                    "ticker": "<symbol ticker name, optional>",
                    "type": "stock" // or "futures" or "bitcoin" or "forex" or "index"
                },
                {
                    //    .....
                }
            ]
            */
        }
    }, {
        key: "resolveSymbol",
        value: function resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
            var _this2 = this;

            var _symbolName$split = symbolName.split("_"),
                _symbolName$split2 = _slicedToArray(_symbolName$split, 2),
                quote = _symbolName$split2[0],
                base = _symbolName$split2[1];

            Promise.all([Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["FetchChain"])("getAsset", quote), Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["FetchChain"])("getAsset", base)]).then(function (assets) {
                var _assets = _slicedToArray(assets, 2),
                    quoteAsset = _assets[0],
                    baseAsset = _assets[1];

                onSymbolResolvedCallback(new SymbolInfo({
                    ticker: symbolName,
                    quoteAsset: quoteAsset,
                    baseAsset: baseAsset,
                    resolutions: _this2.supported_resolutions
                }));
            }).catch(onResolveErrorCallback);
        }
    }, {
        key: "getBars",
        value: function getBars(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
            var _this3 = this;

            from *= 1000;
            to *= 1000;
            var bars = this._getHistory();
            this.latestBar = bars[bars.length - 1];
            bars = bars.filter(function (a) {
                return a.time >= from && a.time <= to;
            });

            if (this.interval !== resolution) {
                if (!firstDataRequest) return;

                var newBucketSize = getBucketFromResolution(resolution);
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeBucketSize(newBucketSize);

                return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].unSubscribeMarket(symbolInfo.quoteAsset.get("id"), symbolInfo.baseAsset.get("id")).then(function () {
                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].subscribeMarket(symbolInfo.baseAsset, symbolInfo.quoteAsset, newBucketSize).then(function () {
                        var bars = _this3._getHistory();
                        _this3.latestBar = bars[bars.length - 1];
                        bars = bars.filter(function (a) {
                            return a.time >= from && a.time <= to;
                        });
                        _this3.interval = resolution;
                        if (!bars.length) return onHistoryCallback(bars, { noData: true });
                        onHistoryCallback(bars);
                    });
                });
            }

            // console.log(
            //     "getBars",
            //     symbolInfo.ticker,
            //     resolution,
            //     "firstDataRequest",
            //     firstDataRequest,
            //     "bars",
            //     bars
            // );
            this.interval = resolution;
            if (!bars.length) return onHistoryCallback(bars, { noData: true });

            onHistoryCallback(bars);
        }
    }, {
        key: "_getHistory",
        value: function _getHistory() {
            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].getState().priceData;
        }
    }, {
        key: "subscribeBars",
        value: function subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
            var _this4 = this;

            stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe("subscribeBars");
            onResetCacheNeededCallback();
            stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("subscribeBars", function () {
                var bars = _this4._getHistory();
                var newBars = bars.filter(function (a) {
                    if (!_this4.latestBar) return true;
                    return a.time > _this4.latestBar.time;
                });
                // console.log("subscribeBars", MarketsStore.getState().activeMarket, "found new bars:", newBars);
                if (newBars.length) {
                    newBars.forEach(function (bar) {
                        onRealtimeCallback(bar);
                    });
                    _this4.latestBar = newBars[newBars.length - 1];
                } else {
                    // Check if latest bar is different
                    var didChange = false;
                    for (var key in _this4.latestBar) {
                        if (_this4.latestBar[key] !== bars[bars.length - 1][key]) {
                            didChange = true;
                        }
                    }
                    if (didChange) {
                        onRealtimeCallback(bars[bars.length - 1]);
                    }
                }
            });
        }
    }, {
        key: "unsubscribeBars",
        value: function unsubscribeBars() {
            /*
            * This is ALWAYS called after subscribeBars for some reason, but
            * sometimes it executes BEFORE the subscribe call in subscribeBars and
            * sometimes AFTER. This causes the callback to be cleared and we stop
            * receiving updates from the MarketStore. Unless we find it causes bugs,
            * it's best to just not use this.
            */
            // MarketsStore.unsubscribe("subscribeBars");
            // this.latestBar = null;
        }
    }, {
        key: "calculateHistoryDepth",
        value: function calculateHistoryDepth(resolution, resolutionBack, intervalBack) {
            return undefined;
        }
    }, {
        key: "getServerTime",
        value: function getServerTime(callback) {
            callback(new Date().getTime() / 1000);
        }
    }]);

    return DataFeed;
}();

var supportedTimeZones = ["America/Argentina/Buenos_Aires", "America/Bogota", "America/Caracas", "America/Chicago", "America/El_Salvador", "America/Los_Angeles", "America/Mexico_City", "America/New_York", "America/Phoenix", "America/Sao_Paulo", "America/Toronto", "America/Vancouver", "Asia/Almaty", "Asia/Ashkhabad", "Asia/Bangkok", "Asia/Dubai", "Asia/Hong_Kong", "Asia/Kathmandu", "Asia/Kolkata", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Taipei", "Asia/Tehran", "Asia/Tokyo", "Australia/ACT", "Australia/Adelaide", "Australia/Brisbane", "Australia/Sydney", "Europe/Athens", "Europe/Berlin", "Europe/Istanbul", "Europe/London", "Europe/Madrid", "Europe/Moscow", "Europe/Paris", "Europe/Warsaw", "Europe/Zurich", "Pacific/Auckland", "Pacific/Chatham", "Pacific/Fakaofo", "Pacific/Honolulu", "US/Mountain"];

function getTVTimezone() {
    var current = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz.guess();
    var defaultZone = "Europe/London";

    var isSupported = supportedTimeZones.indexOf(current) !== -1;
    if (isSupported) return current;else {
        /* Try to find a matching timezone from the limited list supported by TradingView */
        var time = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()().toISOString();
        var actual = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz(time, current).format();
        for (var i = 0; i < supportedTimeZones.length; i++) {
            var zoneTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz(time, supportedTimeZones[i]);
            if (zoneTime.format() === actual) {
                if (false) {}
                // Found a match, return that zone
                return supportedTimeZones[i];
            }
        }
    }
    console.log("No matching timezone found for " + current + ", setting to default value of Europe/London");
    return defaultZone;
}



/***/ }),

/***/ 2488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2489);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(569);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2483);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1220);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(584);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var DepthHighChart = function (_React$Component) {
    _inherits(DepthHighChart, _React$Component);

    function DepthHighChart() {
        _classCallCheck(this, DepthHighChart);

        return _possibleConstructorReturn(this, (DepthHighChart.__proto__ || Object.getPrototypeOf(DepthHighChart)).apply(this, arguments));
    }

    _createClass(DepthHighChart, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            var settleCheck = isNaN(nextProps.feedPrice) ? false : nextProps.feedPrice !== this.props.feedPrice;
            return Object(common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["didOrdersChange"])(nextProps.orders, this.props.orders) || Object(common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["didOrdersChange"])(nextProps.call_orders, this.props.call_orders) || settleCheck || nextProps.feedPrice !== this.props.feedPrice || nextProps.height !== this.props.height || nextProps.leftOrderBook !== this.props.leftOrderBook || nextProps.LCP !== this.props.LCP || nextProps.showCallLimit !== this.props.showCallLimit || nextProps.hasPrediction !== this.props.hasPrediction || nextProps.feedPrice !== this.props.feedPrice || nextProps.marketReady !== this.props.marketReady;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.reflowChart(500);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.refs.depthChart && nextProps.verticalOrderbook !== this.props.verticalOrderbook) {
                this.reflowChart(100);
            }
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            if (this.props.centerRef) {
                this.tempScroll = this.props.centerRef.scrollTop;
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (this.props.centerRef) {
                this.props.centerRef.scrollTop = this.tempScroll;
            }
        }
    }, {
        key: "reflowChart",
        value: function reflowChart(timeout) {
            var _this2 = this;

            setTimeout(function () {
                if (_this2.refs.depthChart) {
                    _this2.refs.depthChart.chart.reflow();
                }
            }, timeout);
        }
    }, {
        key: "_getThemeColors",
        value: function _getThemeColors() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            return assets_colors__WEBPACK_IMPORTED_MODULE_7___default.a[props.theme];
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                flat_bids = _props.flat_bids,
                flat_asks = _props.flat_asks,
                flat_calls = _props.flat_calls,
                flat_settles = _props.flat_settles,
                totalBids = _props.totalBids,
                totalAsks = _props.totalAsks,
                base = _props.base,
                quote = _props.quote,
                feedPrice = _props.feedPrice;

            var _getThemeColors2 = this._getThemeColors(),
                primaryText = _getThemeColors2.primaryText,
                callColor = _getThemeColors2.callColor,
                settleColor = _getThemeColors2.settleColor,
                settleFillColor = _getThemeColors2.settleFillColor,
                bidColor = _getThemeColors2.bidColor,
                bidFillColor = _getThemeColors2.bidFillColor,
                askColor = _getThemeColors2.askColor,
                askFillColor = _getThemeColors2.askFillColor,
                axisLineColor = _getThemeColors2.axisLineColor;

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(base),
                baseSymbol = _utils$replaceName.name,
                basePrefix = _utils$replaceName.prefix;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(quote),
                quoteSymbol = _utils$replaceName2.name,
                quotePrefix = _utils$replaceName2.prefix;

            baseSymbol = (basePrefix || "") + baseSymbol;
            quoteSymbol = (quotePrefix || "") + quoteSymbol;

            var flatBids = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_bids),
                flatAsks = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_asks),
                flatCalls = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_calls),
                flatSettles = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_settles);

            var config = {
                chart: {
                    type: "area",
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    spacing: [10, 0, 5, 0]
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                dataGrouping: {
                    enabled: false
                },
                tooltip: {
                    shared: false,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    useHTML: true,
                    formatter: function formatter() {
                        return "\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>" + counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.price") + ":</td>\n\t\t\t\t\t\t\t<td style=\"text-align: right\">" + common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.x, base.get("precision")) + " " + baseSymbol + "/" + quoteSymbol + "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>" + counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.quantity") + ":</td>\n\t\t\t\t\t\t\t<td style=\"text-align: right\">" + common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.y, quote.get("precision")) + " " + quoteSymbol + "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t";
                    },
                    style: {
                        color: "#FFFFFF"
                    }
                },
                series: [],
                yAxis: {
                    labels: {
                        enabled: true,
                        style: {
                            color: primaryText
                        },
                        formatter: function formatter() {
                            return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.value, quote.get("precision"));
                        }
                    },
                    opposite: false,
                    title: {
                        text: null,
                        style: {
                            color: "#FFFFFF"
                        }
                    },
                    gridLineWidth: 1,
                    gridLineColor: "rgba(196, 196, 196, 0.30)",
                    gridZIndex: 1,
                    crosshair: {
                        snap: false
                    },
                    currentPriceIndicator: {
                        enabled: false
                    }
                },
                xAxis: {
                    labels: {
                        style: {
                            color: primaryText
                            // formatter: function() {
                            //     return this.value / power;
                            // }
                        } },
                    ordinal: false,
                    lineColor: "#000000",
                    title: {
                        text: null
                    },
                    plotLines: []
                },
                plotOptions: {
                    area: {
                        animation: false,
                        marker: {
                            enabled: false
                        },
                        series: {
                            enableMouseTracking: false
                        }
                    }
                }
            };

            // Center the charts between bids and asks
            if (flatBids.length > 0 && flatAsks.length > 0) {
                var middleValue = (flatAsks[0][0] + flatBids[flatBids.length - 1][0]) / 2;

                config.xAxis.min = middleValue * 0.4;
                config.xAxis.max = middleValue * 1.6;
                if (config.xAxis.max < flatAsks[0][0]) {
                    config.xAxis.max = flatAsks[0][0] * 1.5;
                }
                if (config.xAxis.min > flatBids[flatBids.length - 1][0]) {
                    config.xAxis.min = flatBids[flatBids.length - 1][0] * 0.5;
                }
                var yMax = 0;
                flatBids.forEach(function (b) {
                    if (b[0] >= config.xAxis.min) {
                        yMax = Math.max(b[1], yMax);
                    }
                });
                flatAsks.forEach(function (a) {
                    if (a[0] <= config.xAxis.max) {
                        yMax = Math.max(a[1], yMax);
                    }
                });
                config.yAxis.max = yMax * 1.15;

                // Adjust y axis label decimals
                var yLabelDecimals = yMax > 10 ? 0 : yMax > 1 ? 2 : 5;
                config.yAxis.labels.formatter = function () {
                    return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.value, yLabelDecimals);
                };
            } else if (flatBids.length && !flatAsks.length) {
                config.xAxis.min = flatBids[flatBids.length - 1][0] * 0.4;
                config.xAxis.max = flatBids[flatBids.length - 1][0] * 1.6;
            } else if (flatAsks.length && !flatBids.length) {
                config.xAxis.min = 0;
                config.xAxis.max = flatAsks[0][0] * 2;
            }

            if (this.props.hasPrediction) {
                config.xAxis.min = -0.05;
                config.xAxis.max = 1.05;
            }

            // Add plotlines if defined
            // if (falsethis.props.plotLine) {
            //	 config.xAxis.plotLines.push({
            //		 color: "red",
            //		 id: "plot_line",
            //		 dashStyle: "longdashdot",
            //		 value: this.props.plotLine * power,
            //		 width: 1,
            //		 zIndex: 5
            //	 });
            // }

            // Market asset
            if (this.props.LCP) {
                config.xAxis.plotLines.push({
                    color: axisLineColor,
                    id: "plot_line",
                    dashStyle: "longdash",
                    value: this.props.LCP,
                    label: {
                        text: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.block.call_limit"),
                        style: {
                            color: primaryText,
                            fontWeight: "bold"
                        }
                    },
                    width: 2,
                    zIndex: 5
                });
            }

            // if (this.props.SQP) {
            //	 config.xAxis.plotLines.push({
            //		 color: "#B6B6B6",
            //		 id: "plot_line",
            //		 dashStyle: "longdash",
            //		 value: this.props.SQP * power,
            //		 label: {
            //			 text: counterpart.translate("exchange.squeeze"),
            //			 style: {
            //				 color: "#DADADA",
            //				 fontWeight: "bold"
            //			 }
            //		 },
            //		 width: 2,
            //		 zIndex: 5
            //	 });
            // }

            if (feedPrice) {
                var settlementColor = base.has("bitasset") ? askColor : bidColor;
                config.xAxis.plotLines.push({
                    color: settlementColor,
                    id: "plot_line",
                    dashStyle: "solid",
                    value: feedPrice,
                    label: {
                        text: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.block.feed_price"),
                        style: {
                            color: primaryText,
                            fontWeight: "bold"
                        }
                    },
                    width: 2,
                    zIndex: 5
                });

                // Add calls if present
                if (flatCalls && flatCalls.length) {
                    config.series.push({
                        name: "Call " + quoteSymbol,
                        data: flatCalls,
                        color: callColor
                    });
                }
            }

            // Add settle orders
            if (feedPrice && flatSettles && flatSettles.length) {
                config.series.push({
                    name: "Settle " + quoteSymbol,
                    data: flatSettles,
                    color: settleColor,
                    fillColor: settleFillColor
                });
            }

            // Push asks and bids
            if (flatBids.length) {
                config.series.push({
                    step: "right",
                    name: "Bid " + quoteSymbol,
                    data: flatBids,
                    color: bidColor,
                    fillColor: bidFillColor
                });
            }

            if (flatAsks.length) {
                config.series.push({
                    step: "left",
                    name: "Ask " + quoteSymbol,
                    data: flatAsks,
                    color: askColor,
                    fillColor: askFillColor
                });
            }

            // Fix the height if defined, else use 400px;
            if (this.props.height) {
                config.chart.height = this.props.height;
            } else {
                config.chart.height = "400px";
            }

            // Add onClick event listener if defined
            if (this.props.onClick) {
                config.chart.events = {
                    click: this.props.onClick.bind(this)
                };
            }

            if (this.props.noFrame) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-content no-overflow no-padding" },
                    !flatBids.length && !flatAsks.length && !flatCalls.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "no-data" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "exchange.no_data" })
                    ) : null,
                    this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        { className: "bid-total" },
                        common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalBids, base.get("precision")),
                        " ",
                        baseSymbol
                    ),
                    this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        { className: "ask-total" },
                        common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalAsks, quote.get("precision")),
                        " ",
                        quoteSymbol
                    ),
                    flatBids || flatAsks || flatCalls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_3___default.a, { config: config }) : null
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-content no-overflow no-padding middle-content" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "exchange-bordered", style: { margin: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "exchange-content-header" },
                            this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "bid-total" },
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalBids, base.get("precision")),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], { name: base.get("symbol") })
                            ),
                            this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "ask-total float-right" },
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalAsks, quote.get("precision")),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], { name: quote.get("symbol") })
                            )
                        ),
                        !flatBids.length && !flatAsks.length && !flatCalls.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: "no-data" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "exchange.no_data" })
                        ) : null,
                        flatBids || flatAsks || flatCalls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_3___default.a, { ref: "depthChart", config: config }) : null
                    )
                );
            }
        }
    }]);

    return DepthHighChart;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

DepthHighChart.defaultProps = {
    flat_bids: [],
    flat_asks: [],
    orders: {},
    noText: false,
    noFrame: true
};

DepthHighChart.propTypes = {
    flat_bids: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
    flat_asks: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (DepthHighChart);

/***/ }),

/***/ 2493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(551);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(865);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2494);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var NotifierContainer = function (_React$Component) {
    _inherits(NotifierContainer, _React$Component);

    function NotifierContainer() {
        _classCallCheck(this, NotifierContainer);

        return _possibleConstructorReturn(this, (NotifierContainer.__proto__ || Object.getPrototypeOf(NotifierContainer)).apply(this, arguments));
    }

    _createClass(NotifierContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        account: function account() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().currentAccount;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notifier__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            );
        }
    }]);

    return NotifierContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NotifierContainer);

/***/ }),

/***/ 2494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2495);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(720);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1385);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(525);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(878);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(418);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainTypes"].operations;


var ops = Object.keys(operations);

var Notifier = function (_React$Component) {
    _inherits(Notifier, _React$Component);

    function Notifier() {
        _classCallCheck(this, Notifier);

        return _possibleConstructorReturn(this, (Notifier.__proto__ || Object.getPrototypeOf(Notifier)).apply(this, arguments));
    }

    _createClass(Notifier, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.account && nextProps.account.size && this.props.account && this.props.account.get("history")) {
                var ch = this.props.account.get("history") && this.props.account.get("history").first() ? this.props.account.get("history").first().toJS() : null;
                var nh = nextProps.account.get("history") && nextProps.account.get("history").first() ? nextProps.account.get("history").first().toJS() : null;
                if (nh && ch) {
                    // Only trigger notifications for order fills
                    if (ops[nh.op[0]] === "fill_order" && (!ch && nh.id || nh.id !== ch.id)) {
                        react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish("account-notify", "open");
                        setTimeout(function () {
                            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish("account-notify", "close");
                        }, 5000);
                    }
                }
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (!nextProps.account || !this.props.account) return false;
            return !immutable__WEBPACK_IMPORTED_MODULE_4___default.a.is(nextProps.account.get("history"), this.props.account.get("history")) || !immutable__WEBPACK_IMPORTED_MODULE_4___default.a.is(nextProps.account, this.props.account);
        }
    }, {
        key: "render",
        value: function render() {
            var account = this.props.account;


            if (!account) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
            }

            var trx = void 0,
                info = void 0;

            if (this.props.account.get("history") && this.props.account.get("history").size) {
                trx = this.props.account.get("history").first().toJS();
                if (trx) {
                    info = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        key: trx.id,
                        op: trx.op,
                        result: trx.result,
                        block: trx.block_num,
                        current: account.get("id"),
                        hideDate: true,
                        hideFee: true
                    });
                }
            }

            if (!trx) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default.a.Static,
                {
                    id: "account-notify",
                    title: null,
                    image: "",
                    wrapperElement: "div"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        info
                    )
                )
            );
        }
    }]);

    return Notifier;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Notifier.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAccount.isRequired
};

Notifier = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(Notifier);

/* harmony default export */ __webpack_exports__["default"] = (Notifier);

/***/ }),

/***/ 2499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(720);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(849);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(569);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ConfirmModal = function (_React$Component) {
    _inherits(ConfirmModal, _React$Component);

    function ConfirmModal() {
        _classCallCheck(this, ConfirmModal);

        return _possibleConstructorReturn(this, (ConfirmModal.__proto__ || Object.getPrototypeOf(ConfirmModal)).apply(this, arguments));
    }

    _createClass(ConfirmModal, [{
        key: "show",
        value: function show() {
            var modalId = "modal_confirm_" + this.props.type;
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(modalId, "open");
        }
    }, {
        key: "_onForce",
        value: function _onForce(value, e) {
            var modalId = "modal_confirm_" + this.props.type;
            e.preventDefault();

            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(modalId, "close");
            if (value) this.props.onForce();
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                type = _props.type,
                diff = _props.diff,
                hasOrders = _props.hasOrders;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__["default"],
                { id: "modal_confirm_" + type, overlay: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { component: "h3", content: "transaction.confirm" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    !hasOrders ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        content: "exchange.confirm_no_orders_" + type
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        content: "exchange.confirm_" + type,
                        diff: common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(diff, 2)
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "button-group", style: { paddingTop: "2rem" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            onClick: this._onForce.bind(this, true),
                            className: "button success",
                            type: "submit",
                            value: "Yes"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            onClick: this._onForce.bind(this, false),
                            className: "button info",
                            type: "submit",
                            value: "No"
                        })
                    )
                )
            );
        }
    }]);

    return ConfirmModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ConfirmModal);

/***/ }),

/***/ 2500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(727);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(785);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1220);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2442);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1270);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(713);
/* harmony import */ var _PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2501);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(418);
/* harmony import */ var _ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2502);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(849);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(720);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var ExchangeHeader = function (_React$Component) {
    _inherits(ExchangeHeader, _React$Component);

    function ExchangeHeader(props) {
        _classCallCheck(this, ExchangeHeader);

        var _this = _possibleConstructorReturn(this, (ExchangeHeader.__proto__ || Object.getPrototypeOf(ExchangeHeader)).call(this));

        _this.state = {
            volumeShowQuote: true,
            chartHeight: props.chartHeight
        };

        _this.setChartHeight = _this.setChartHeight.bind(_this);
        return _this;
    }

    _createClass(ExchangeHeader, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (!nextProps.marketReady) return false;
            return true;
        }
    }, {
        key: "_addMarket",
        value: function _addMarket(quote, base) {
            var marketID = quote + "_" + base;
            if (!this.props.starredMarkets.has(marketID)) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addStarMarket(quote, base);
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeStarMarket(quote, base);
            }
        }
    }, {
        key: "changeVolumeBase",
        value: function changeVolumeBase() {
            this.setState({
                volumeShowQuote: !this.state.volumeShowQuote
            });
        }
    }, {
        key: "marketPicker",
        value: function marketPicker(asset) {
            var selectedMarketPickerAsset = this.state.selectedMarketPickerAsset;


            selectedMarketPickerAsset = !!selectedMarketPickerAsset && selectedMarketPickerAsset == asset ? null : asset;

            this.setState({
                selectedMarketPickerAsset: selectedMarketPickerAsset
            });
            this.props.onToggleMarketPicker(selectedMarketPickerAsset);
        }
    }, {
        key: "setChartHeight",
        value: function setChartHeight() {
            this.props.onChangeChartHeight({ value: this.state.chartHeight });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                quoteAsset = _props.quoteAsset,
                baseAsset = _props.baseAsset,
                starredMarkets = _props.starredMarkets,
                hasPrediction = _props.hasPrediction,
                feedPrice = _props.feedPrice,
                showCallLimit = _props.showCallLimit,
                lowestCallPrice = _props.lowestCallPrice,
                marketReady = _props.marketReady,
                latestPrice = _props.latestPrice,
                marketStats = _props.marketStats,
                showDepthChart = _props.showDepthChart,
                account = _props.account;


            var baseSymbol = baseAsset.get("symbol");
            var quoteSymbol = quoteAsset.get("symbol");

            // Favorite star
            var marketID = quoteSymbol + "_" + baseSymbol;
            var starClass = starredMarkets.has(marketID) ? "gold-star" : "grey-star";

            // Market stats
            var dayChange = marketStats.get("change");

            var dayChangeClass = parseFloat(dayChange) === 0 ? "" : parseFloat(dayChange) < 0 ? "negative" : "positive";
            var volumeBase = marketStats.get("volumeBase");
            var volumeQuote = marketStats.get("volumeQuote");
            var dayChangeWithSign = dayChange > 0 ? "+" + dayChange : dayChange;

            var volume24h = this.state.volumeShowQuote ? volumeQuote : volumeBase;
            var volume24hAsset = this.state.volumeShowQuote ? quoteAsset : baseAsset;

            var showCollateralRatio = false;

            var quoteId = quoteAsset.get("id");
            var baseId = baseAsset.get("id");

            var lookForBitAsset = quoteId === "1.3.0" ? baseId : baseId === "1.3.0" ? quoteId : null;
            var possibleBitAsset = lookForBitAsset ? bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getAsset(lookForBitAsset) : null;
            var isBitAsset = possibleBitAsset ? !!possibleBitAsset.get("bitasset") : false;
            var collOrderObject = "";
            var settlePrice = null;

            if (isBitAsset) {
                if (account.toJS && account.has("call_orders")) {
                    var call_orders = account.get("call_orders").toJS();

                    for (var i = 0; i < call_orders.length; i++) {
                        var callID = call_orders[i];

                        var position = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getObject(callID);
                        var debtAsset = position.getIn(["call_price", "quote", "asset_id"]);

                        if (debtAsset === lookForBitAsset) {
                            collOrderObject = callID;
                            showCollateralRatio = true;
                            break;
                        }
                    }
                }

                /* Settlment Offset */
                var settleAsset = baseAsset.get("id") == "1.3.0" ? quoteAsset : quoteAsset.get("id") == "1.3.0" ? baseAsset : null;

                if (settleAsset && feedPrice) {
                    var offset_percent = settleAsset.getIn(["bitasset", "options"]).toJS().force_settlement_offset_percent;
                    settlePrice = baseAsset.get("id") == "1.3.0" ? feedPrice.toReal() / (1 + offset_percent / 10000) : feedPrice.toReal() * (1 + offset_percent / 10000);
                }
            }

            var translator = __webpack_require__(573);

            var isQuoteSelected = !!this.state.selectedMarketPickerAsset && this.state.selectedMarketPickerAsset == quoteSymbol;
            var isBaseSelected = !!this.state.selectedMarketPickerAsset && this.state.selectedMarketPickerAsset == baseSymbol;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block shrink no-padding overflow-visible top-bar" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block overflow-visible" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { padding: "10px" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                replaceNoneToBts: false,
                                maxWidth: 40,
                                name: quoteAsset.get("symbol")
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { padding: "10px" } },
                            !hasPrediction ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        padding: "0 5px",
                                        fontSize: "18px",
                                        marginTop: "1px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        onClick: this.marketPicker.bind(this, quoteSymbol),
                                        className: "underline",
                                        style: {
                                            cursor: "pointer",
                                            color: isQuoteSelected ? "#2196f3" : ""
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        name: quoteSymbol,
                                        replace: true,
                                        noTip: true
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { style: { padding: "0 5px" } },
                                    "/"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        onClick: this.marketPicker.bind(this, baseSymbol),
                                        className: "underline",
                                        style: {
                                            cursor: "pointer",
                                            color: isBaseSelected ? "#2196f3" : ""
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        name: baseSymbol,
                                        replace: true,
                                        noTip: true
                                    })
                                )
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { className: "market-symbol" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    quoteSymbol + " : " + baseSymbol
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "label-actions" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                                    component: "span",
                                    style: { padding: "5px 0 0 5px" },
                                    className: "stat-text",
                                    content: "exchange.trading_pair"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    {
                                        onClick: function onClick() {
                                            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].switchMarket();
                                        },
                                        to: "/market/" + baseSymbol + "_" + quoteSymbol,
                                        "data-intro": translator.translate("walkthrough.switch_button")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        className: "shuffle",
                                        name: "shuffle",
                                        title: "icons.shuffle"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        onClick: function onClick() {
                                            _this2._addMarket(_this2.props.quoteAsset.get("symbol"), _this2.props.baseAsset.get("symbol"));
                                        },
                                        "data-intro": translator.translate("walkthrough.favourite_button")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        className: starClass,
                                        name: "fi-star",
                                        title: "icons.fi_star.market"
                                    })
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-block vertical",
                            style: { overflow: "visible" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block wrap market-stats-container" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "market-stats stats top-stats" },
                                latestPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    ready: marketReady,
                                    price: latestPrice,
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.latest"
                                }) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: "hide-order-1 stressed-stat daily_change " + dayChangeClass
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "b",
                                            { className: "value" },
                                            marketReady ? dayChangeWithSign : 0
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            " %"
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                                        component: "div",
                                        className: "stat-text",
                                        content: "account.hour_24"
                                    })
                                ),
                                volumeBase >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    onClick: this.changeVolumeBase.bind(this),
                                    ready: marketReady,
                                    decimals: 0,
                                    volume: true,
                                    price: volume24h,
                                    className: "hide-order-2 clickable",
                                    base: volume24hAsset,
                                    market: marketID,
                                    content: "exchange.volume_24"
                                }) : null,
                                !hasPrediction && feedPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.feed_price"),
                                    ready: marketReady,
                                    className: "hide-order-3",
                                    price: feedPrice.toReal(),
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.feed_price"
                                }) : null,
                                !hasPrediction && feedPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.settle_price"),
                                    ready: marketReady,
                                    className: "hide-order-4",
                                    price: settlePrice,
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.settle"
                                }) : null,
                                showCollateralRatio ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    object: collOrderObject,
                                    account: account
                                }) : null,
                                lowestCallPrice && showCallLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.call_limit"),
                                    ready: marketReady,
                                    className: "hide-order-5 is-call",
                                    price: lowestCallPrice,
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "explorer.block.call_limit"
                                }) : null,
                                feedPrice && showCallLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.margin_price"),
                                    ready: marketReady,
                                    className: "hide-order-6 is-call",
                                    price: feedPrice.getSqueezePrice({
                                        real: true
                                    }),
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.squeeze"
                                }) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "market-stats stats top-stats" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: "stressed-stat input clickable",
                                        style: { padding: "16px" },
                                        onClick: function onClick() {
                                            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13___default.a.publish("chart_options", "open");
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "exchange.chart_modal" })
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_12__["default"],
                    {
                        id: "chart_options",
                        overlay: true,
                        modalHeader: "exchange.chart_modal",
                        noLogo: true
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        { className: "block-list no-border-bottom" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "header",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "exchange.chart_type" }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "li",
                                { className: "with-dropdown" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "select",
                                    {
                                        value: showDepthChart ? "depth_chart" : "price_chart",
                                        className: "settings-select",
                                        onChange: function onChange(e) {
                                            if (showDepthChart && e.target.value === "price_chart" || !showDepthChart && e.target.value === "market_depth") {
                                                _this2.props.onToggleCharts();
                                            }
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "option",
                                        { value: "market_depth" },
                                        counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("exchange.order_depth")
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "option",
                                        { value: "price_chart" },
                                        counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("exchange.price_history")
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        { className: "block-list no-border-bottom" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "header",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "exchange.chart_height" }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "inline-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    onKeyDown: function onKeyDown(e) {
                                        if (e.keyCode === 13) _this2.setChartHeight();
                                    },
                                    type: "number",
                                    value: this.state.chartHeight,
                                    onChange: function onChange(e) {
                                        return _this2.setState({
                                            chartHeight: e.target.value
                                        });
                                    }
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button no-margin",
                                        onClick: this.setChartHeight
                                    },
                                    "Set"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ExchangeHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExchangeHeader);

/***/ }),

/***/ 2501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1220);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(569);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1272);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var PriceStatWithLabel = function (_React$Component) {
    _inherits(PriceStatWithLabel, _React$Component);

    function PriceStatWithLabel() {
        _classCallCheck(this, PriceStatWithLabel);

        var _this = _possibleConstructorReturn(this, (PriceStatWithLabel.__proto__ || Object.getPrototypeOf(PriceStatWithLabel)).call(this));

        _this.state = {
            change: null,
            curMarket: null,
            marketChange: false
        };
        return _this;
    }

    _createClass(PriceStatWithLabel, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.volume2 && nextProps.volume2 !== this.props.volume2) {
                return true;
            }
            return nextProps.price !== this.props.price || nextProps.ready !== this.props.ready;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var state = {
                change: 0
            };

            var market = nextProps.market;


            var checkMarketChange = this.state.curMarket !== market;
            var marketChange = this.state.curMarket == null ? false : checkMarketChange;

            state["marketChange"] = marketChange;
            state["curMarket"] = market;
            state["prevAsset"] = this.state.marketAsset;

            if (nextProps.ready && this.props.ready) {
                state["change"] = parseFloat(nextProps.price) - parseFloat(this.props.price);
            }

            this.setState(state);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a.rebuild();
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                base = _props.base,
                quote = _props.quote,
                price = _props.price,
                content = _props.content,
                ready = _props.ready,
                volume = _props.volume,
                toolTip = _props.toolTip,
                ignoreColorChange = _props.ignoreColorChange;
            var _state = this.state,
                change = _state.change,
                marketChange = _state.marketChange;

            var changeClasses = null;
            if (!marketChange && change && change !== null && ignoreColorChange !== true) {
                changeClasses = change > 0 ? "pulsate green" : "pulsate red";
            }

            var value = !volume ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].price_text(price, quote, base) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_volume(price);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "li",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("stressed-stat", this.props.className, changeClasses),
                    onClick: this.props.onClick,
                    "data-place": "bottom",
                    "data-tip": toolTip
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "value stat-primary" },
                        !ready ? 0 : value,
                        "\xA0"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "symbol-text" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], { name: base.get("symbol") })
                    )
                ),
                content ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "stat-text" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: content })
                ) : null
            );
        }
    }]);

    return PriceStatWithLabel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PriceStatWithLabel);

/***/ }),

/***/ 2502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(569);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(878);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MarginPosition = function (_React$Component) {
    _inherits(MarginPosition, _React$Component);

    function MarginPosition() {
        _classCallCheck(this, MarginPosition);

        return _possibleConstructorReturn(this, (MarginPosition.__proto__ || Object.getPrototypeOf(MarginPosition)).apply(this, arguments));
    }

    _createClass(MarginPosition, [{
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            if (!this.props) {
                return 1;
            }

            return 1 / common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_price(this.props.debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"]), this.props.collateralAsset, this.props.debtAsset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]), this.props.debtAsset);
        }
    }, {
        key: "_getCollateralRatio",
        value: function _getCollateralRatio() {
            var co = this.props.object.toJS();
            var c = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.collateral, this.props.collateralAsset);
            var d = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.debt, this.props.debtAsset);
            return c / (d / this._getFeedPrice());
        }
    }, {
        key: "_getMR",
        value: function _getMR() {
            return this.props.debtAsset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
        }
    }, {
        key: "_getStatusClass",
        value: function _getStatusClass() {
            var cr = this._getCollateralRatio();
            var mr = this._getMR();

            if (isNaN(cr)) return null;
            if (cr < mr) {
                return "danger";
            } else if (cr < mr + 0.5) {
                return "warning";
            } else {
                return "";
            }
        }
    }, {
        key: "_getCRTip",
        value: function _getCRTip() {
            var statusClass = this._getStatusClass();
            var mr = this._getMR();
            if (!statusClass || statusClass === "") return null;

            if (statusClass === "danger") {
                return counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("tooltip.cr_danger", { mr: mr });
            } else if (statusClass === "warning") {
                return counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("tooltip.cr_warning", { mr: mr });
            } else {
                return null;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var object = this.props.object;

            var co = object.toJS();
            var cr = this._getCollateralRatio();
            var d = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.debt, this.props.debtAsset);

            var statusClass = this._getStatusClass();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "li",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("stressed-stat", this.props.className),
                    onClick: this.props.onClick,
                    "data-place": "bottom",
                    "data-tip": this._getCRTip()
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("value stat-primary", statusClass) },
                        common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].format_number(cr, 2)
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "stat-text" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.collateral_ratio" })
                )
            );
        }
    }]);

    return MarginPosition;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarginPosition.propTypes = {
    debtAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    collateralAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired
};

MarginPosition = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(MarginPosition);

var ExchangeHeaderCollateral = function (_React$Component2) {
    _inherits(ExchangeHeaderCollateral, _React$Component2);

    function ExchangeHeaderCollateral() {
        _classCallCheck(this, ExchangeHeaderCollateral);

        return _possibleConstructorReturn(this, (ExchangeHeaderCollateral.__proto__ || Object.getPrototypeOf(ExchangeHeaderCollateral)).apply(this, arguments));
    }

    _createClass(ExchangeHeaderCollateral, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                object = _props.object,
                account = _props.account;


            var debtAsset = object.getIn(["call_price", "quote", "asset_id"]);
            var collateralAsset = object.getIn(["call_price", "base", "asset_id"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarginPosition, _extends({
                debtAsset: debtAsset,
                collateralAsset: collateralAsset,
                account: account
            }, this.props));
        }
    }]);

    return ExchangeHeaderCollateral;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ExchangeHeaderCollateral.propTypes = {
    object: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired
};

ExchangeHeaderCollateral = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(ExchangeHeaderCollateral);

/* harmony default export */ __webpack_exports__["default"] = (ExchangeHeaderCollateral);

/***/ }),

/***/ 2503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(712);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 *  Wrapper component for chatbro iframe
 *
 */

var ChatBro = function (_React$Component) {
    _inherits(ChatBro, _React$Component);

    function ChatBro() {
        _classCallCheck(this, ChatBro);

        return _possibleConstructorReturn(this, (ChatBro.__proto__ || Object.getPrototypeOf(ChatBro)).apply(this, arguments));
    }

    _createClass(ChatBro, [{
        key: "render",
        value: function render() {
            var frameHeight = this.props.height || "30%";

            var currentLocale = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings.get("locale");

            var chatUrl = null;
            switch (currentLocale) {
                default:
                    chatUrl = "https://chat.rudex.org/" + currentLocale + "/";
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
                style: { height: frameHeight, width: "100%" },
                src: chatUrl,
                sandbox: "allow-same-origin allow-forms allow-scripts allow-popups"
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
                style: { height: frameHeight, width: "100%" },
                src: chatUrl,
                sandbox: "allow-same-origin allow-forms allow-scripts allow-popups"
            });
        }
    }]);

    return ChatBro;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ChatBro.propTypes = {
    height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (ChatBro);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UuNTJkNTlhMDRjZDY5OTU5YzgyYmEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvRXhjaGFuZ2VDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9FeGNoYW5nZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL09yZGVyQm9vay5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldEhpc3RvcnkuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Jsb2NrRGF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL0J1eVNlbGwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NYXJrZXRQaWNrZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9UcmFkaW5nVmlld1ByaWNlQ2hhcnQuanN4Iiwid2VicGFjazovLy8uL2NoYXJ0aW5nX2xpYnJhcnkvY2hhcnRpbmdfbGlicmFyeS5taW4uanMiLCJ3ZWJwYWNrOi8vL2FwcC9hc3NldHMvY29sb3JzLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS90cmFkaW5nVmlld0NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL0RlcHRoSGlnaENoYXJ0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTm90aWZpZXIvTm90aWZpZXJDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Ob3RpZmllci9Ob3RpZmllci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL0NvbmZpcm1PcmRlck1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvRXhjaGFuZ2VIZWFkZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9QcmljZVN0YXRXaXRoTGFiZWwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9FeGNoYW5nZUhlYWRlckNvbGxhdGVyYWwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9DaGF0L0NoYXRCcm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgR2F0ZXdheVN0b3JlIGZyb20gXCJzdG9yZXMvR2F0ZXdheVN0b3JlXCI7XG5pbXBvcnQgSW50bFN0b3JlIGZyb20gXCJzdG9yZXMvSW50bFN0b3JlXCI7XG5pbXBvcnQgV2FsbGV0VW5sb2NrU3RvcmUgZnJvbSBcInN0b3Jlcy9XYWxsZXRVbmxvY2tTdG9yZVwiO1xuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuaW1wb3J0IEV4Y2hhbmdlIGZyb20gXCIuL0V4Y2hhbmdlXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQge0VtaXR0ZXJJbnN0YW5jZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCB7RGF0YUZlZWR9IGZyb20gXCJjb21wb25lbnRzL0V4Y2hhbmdlL3RyYWRpbmdWaWV3Q2xhc3Nlc1wiO1xuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4uL1BhZ2U0MDQvUGFnZTQwNFwiO1xuXG5jbGFzcyBFeGNoYW5nZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3ltYm9scyA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm1hcmtldElELnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJfXCIpO1xuICAgICAgICBpZiAoc3ltYm9sc1swXSA9PT0gc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwibWFya2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbXG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNTdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLFxuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1N0b3JlLFxuICAgICAgICAgICAgICAgICAgICBXYWxsZXRVbmxvY2tTdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgSW50bFN0b3JlXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiAoKSA9PiBJbnRsU3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50TG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NrZWRXYWxsZXRTdGF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFdhbGxldFVubG9ja1N0b3JlLmdldFN0YXRlKCkubG9ja2VkO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRMaW1pdE9yZGVyczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldExpbWl0T3JkZXJzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRDYWxsT3JkZXJzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0Q2FsbE9yZGVycztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRDYWxsczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmludmVydGVkQ2FsbHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFNldHRsZU9yZGVyczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldFNldHRsZU9yZGVycztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0RGF0YTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldERhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLnRvdGFscztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0SGlzdG9yeTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFjdGl2ZU1hcmtldEhpc3Rvcnk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJ1Y2tldFNpemU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5idWNrZXRTaXplO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBidWNrZXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYnVja2V0cztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0Q2FsbFByaWNlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubG93ZXN0Q2FsbFByaWNlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5mZWVkUHJpY2U7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUFjdGl2ZUFjY291bnRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZXhjaGFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXREaXJlY3Rpb25zOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldERpcmVjdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0U3RhdHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFJlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0UmVhZHk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tlZENvaW5zOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT1BFTlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBicmlkZ2VDb2luczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJyaWRnZUNvaW5zO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtaW5pRGVwdGhDaGFydDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluaURlcHRoQ2hhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2aWV3Q2hhdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld0NoYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFGZWVkOiAoKSA9PiBuZXcgRGF0YUZlZWQoKSxcblxuICAgICAgICAgICAgICAgICAgICB0cmFja2VkR3JvdXBzQ29uZmlnOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkudHJhY2tlZEdyb3Vwc0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRHcm91cExpbWl0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RXhjaGFuZ2VTdWJzY3JpYmVyXG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQ9e3N5bWJvbHNbMF19XG4gICAgICAgICAgICAgICAgICAgIGJhc2VBc3NldD17c3ltYm9sc1sxXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5sZXQgZW1pdHRlciA9IEVtaXR0ZXJJbnN0YW5jZSgpO1xubGV0IGNhbGxMaXN0ZW5lcixcbiAgICBsaW1pdExpc3RlbmVyLFxuICAgIG5ld0NhbGxMaXN0ZW5lcixcbiAgICBmZWVkVXBkYXRlTGlzdGVuZXIsXG4gICAgc2V0dGxlT3JkZXJMaXN0ZW5lcjtcblxuY2xhc3MgRXhjaGFuZ2VTdWJzY3JpYmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjdXJyZW50QWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgcXVvdGVBc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGJhc2VBc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGNvcmVBc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY3VycmVudEFjY291bnQ6IFwiMS4yLjNcIixcbiAgICAgICAgY29yZUFzc2V0OiBcIjEuMy4wXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtzdWI6IG51bGx9O1xuXG4gICAgICAgIHRoaXMuX3N1YlRvTWFya2V0ID0gdGhpcy5fc3ViVG9NYXJrZXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnF1b3RlQXNzZXQgPT09IG51bGwgfHwgdGhpcy5wcm9wcy5iYXNlQXNzZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5xdW90ZUFzc2V0LnRvSlMgJiYgdGhpcy5wcm9wcy5iYXNlQXNzZXQudG9KUykge1xuICAgICAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQodGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAvLyB0aGlzLl9hZGRNYXJrZXQodGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSwgdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIub24oXG4gICAgICAgICAgICBcImNhbmNlbC1vcmRlclwiLFxuICAgICAgICAgICAgKGxpbWl0TGlzdGVuZXIgPSBNYXJrZXRzQWN0aW9ucy5jYW5jZWxMaW1pdE9yZGVyU3VjY2VzcylcbiAgICAgICAgKTtcbiAgICAgICAgZW1pdHRlci5vbihcbiAgICAgICAgICAgIFwiY2xvc2UtY2FsbFwiLFxuICAgICAgICAgICAgKGNhbGxMaXN0ZW5lciA9IE1hcmtldHNBY3Rpb25zLmNsb3NlQ2FsbE9yZGVyU3VjY2VzcylcbiAgICAgICAgKTtcblxuICAgICAgICBlbWl0dGVyLm9uKFxuICAgICAgICAgICAgXCJjYWxsLW9yZGVyLXVwZGF0ZVwiLFxuICAgICAgICAgICAgKG5ld0NhbGxMaXN0ZW5lciA9IGNhbGxfb3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7YXNzZXRfaWQ6IGNvQmFzZX0gPSBjYWxsX29yZGVyLmNhbGxfcHJpY2UuYmFzZTtcbiAgICAgICAgICAgICAgICBsZXQge2Fzc2V0X2lkOiBjb1F1b3RlfSA9IGNhbGxfb3JkZXIuY2FsbF9wcmljZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBsZXQgYmFzZUlkID0gdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlSWQgPSB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoY29CYXNlID09PSBiYXNlSWQgfHwgY29CYXNlID09PSBxdW90ZUlkKSAmJlxuICAgICAgICAgICAgICAgICAgICAoY29RdW90ZSA9PT0gYmFzZUlkIHx8IGNvUXVvdGUgPT09IHF1b3RlSWQpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmNhbGxPcmRlclVwZGF0ZShjYWxsX29yZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBlbWl0dGVyLm9uKFxuICAgICAgICAgICAgXCJiaXRhc3NldC11cGRhdGVcIixcbiAgICAgICAgICAgIChmZWVkVXBkYXRlTGlzdGVuZXIgPSBNYXJrZXRzQWN0aW9ucy5mZWVkVXBkYXRlKVxuICAgICAgICApO1xuICAgICAgICBlbWl0dGVyLm9uKFxuICAgICAgICAgICAgXCJzZXR0bGUtb3JkZXItdXBkYXRlXCIsXG4gICAgICAgICAgICAoc2V0dGxlT3JkZXJMaXN0ZW5lciA9IG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtpc01hcmtldEFzc2V0LCBtYXJrZXRBc3NldH0gPSBtYXJrZXRfdXRpbHMuaXNNYXJrZXRBc3NldChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGlzTWFya2V0QXNzZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0QXNzZXQuaWQgPT09IG9iamVjdC5iYWxhbmNlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnNldHRsZU9yZGVyVXBkYXRlKG1hcmtldEFzc2V0LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMucXVvdGVBc3NldCA9PT0gbnVsbCB8fCBuZXh0UHJvcHMuYmFzZUFzc2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyogUHJlZGljdGlvbiBtYXJrZXRzIHNob3VsZCBvbmx5IGJlIHNob3duIGluIG9uZSBkaXJlY3Rpb24sIGlmIHRoZSBsaW5rIGdvZXMgdG8gdGhlIHdyb25nIG9uZSB3ZSBmbGlwIGl0ICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlQXNzZXQgJiZcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlQXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcbiAgICAgICAgICAgICAgICBgL21hcmtldC8ke25leHRQcm9wcy5iYXNlQXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgKX1fJHtuZXh0UHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIil9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMucXVvdGVBc3NldCAmJiBuZXh0UHJvcHMuYmFzZUFzc2V0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlRvTWFya2V0KG5leHRQcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIikgIT09XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIikgIT09XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdWIgPSB0aGlzLnN0YXRlLnN1Yi5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy51blN1YnNjcmliZU1hcmtldChjdXJyZW50U3ViWzBdLCBjdXJyZW50U3ViWzFdKS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQobmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCB7cXVvdGVBc3NldCwgYmFzZUFzc2V0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChxdW90ZUFzc2V0ID09PSBudWxsIHx8IGJhc2VBc3NldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoXG4gICAgICAgICAgICBxdW90ZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgYmFzZUFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChlbWl0dGVyKSB7XG4gICAgICAgICAgICBlbWl0dGVyLm9mZihcImNhbmNlbC1vcmRlclwiLCBsaW1pdExpc3RlbmVyKTtcbiAgICAgICAgICAgIGVtaXR0ZXIub2ZmKFwiY2xvc2UtY2FsbFwiLCBjYWxsTGlzdGVuZXIpO1xuICAgICAgICAgICAgZW1pdHRlci5vZmYoXCJjYWxsLW9yZGVyLXVwZGF0ZVwiLCBuZXdDYWxsTGlzdGVuZXIpO1xuICAgICAgICAgICAgZW1pdHRlci5vZmYoXCJiaXRhc3NldC11cGRhdGVcIiwgZmVlZFVwZGF0ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIGVtaXR0ZXIub2ZmKFwic2V0dGxlLW9yZGVyLXVwZGF0ZVwiLCBzZXR0bGVPcmRlckxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zdWJUb01hcmtldChwcm9wcywgbmV3QnVja2V0U2l6ZSwgbmV3R3JvdXBMaW1pdCkge1xuICAgICAgICBsZXQge3F1b3RlQXNzZXQsIGJhc2VBc3NldCwgYnVja2V0U2l6ZSwgY3VycmVudEdyb3VwT3JkZXJMaW1pdH0gPSBwcm9wcztcbiAgICAgICAgaWYgKG5ld0J1Y2tldFNpemUpIHtcbiAgICAgICAgICAgIGJ1Y2tldFNpemUgPSBuZXdCdWNrZXRTaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdHcm91cExpbWl0KSB7XG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0ID0gbmV3R3JvdXBMaW1pdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVvdGVBc3NldC5nZXQoXCJpZFwiKSAmJiBiYXNlQXNzZXQuZ2V0KFwiaWRcIikpIHtcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnN1YnNjcmliZU1hcmtldC5kZWZlcihcbiAgICAgICAgICAgICAgICBiYXNlQXNzZXQsXG4gICAgICAgICAgICAgICAgcXVvdGVBc3NldCxcbiAgICAgICAgICAgICAgICBidWNrZXRTaXplLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdWI6IGAke3F1b3RlQXNzZXQuZ2V0KFwiaWRcIil9XyR7YmFzZUFzc2V0LmdldChcImlkXCIpfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5xdW90ZUFzc2V0ID09PSBudWxsIHx8IHRoaXMucHJvcHMuYmFzZUFzc2V0ID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwibWFya2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RXhjaGFuZ2VcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBzdWI9e3RoaXMuc3RhdGUuc3VifVxuICAgICAgICAgICAgICAgIHN1YlRvTWFya2V0PXt0aGlzLl9zdWJUb01hcmtldH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5FeGNoYW5nZVN1YnNjcmliZXIgPSBCaW5kVG9DaGFpblN0YXRlKEV4Y2hhbmdlU3Vic2NyaWJlciwge1xuICAgIHNob3dfbG9hZGVyOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjaGFuZ2VDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCB7TXlPcGVuT3JkZXJzfSBmcm9tIFwiLi9NeU9wZW5PcmRlcnNcIjtcbmltcG9ydCBPcmRlckJvb2sgZnJvbSBcIi4vT3JkZXJCb29rXCI7XG5pbXBvcnQgTWFya2V0SGlzdG9yeSBmcm9tIFwiLi9NYXJrZXRIaXN0b3J5XCI7XG5pbXBvcnQgTXlNYXJrZXRzIGZyb20gXCIuL015TWFya2V0c1wiO1xuaW1wb3J0IEJ1eVNlbGwgZnJvbSBcIi4vQnV5U2VsbFwiO1xuaW1wb3J0IE1hcmtldFBpY2tlciBmcm9tIFwiLi9NYXJrZXRQaWNrZXJcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG4vLyBpbXBvcnQgUHJpY2VDaGFydEQzIGZyb20gXCIuL1ByaWNlQ2hhcnREM1wiO1xuaW1wb3J0IFRyYWRpbmdWaWV3UHJpY2VDaGFydCBmcm9tIFwiLi9UcmFkaW5nVmlld1ByaWNlQ2hhcnRcIjtcbmltcG9ydCBhc3NldFV0aWxzIGZyb20gXCJjb21tb24vYXNzZXRfdXRpbHNcIjtcbmltcG9ydCBEZXB0aEhpZ2hDaGFydCBmcm9tIFwiLi9EZXB0aEhpZ2hDaGFydFwiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IEJvcnJvd01vZGFsIGZyb20gXCIuLi9Nb2RhbC9Cb3Jyb3dNb2RhbFwiO1xuaW1wb3J0IG5vdGlmeSBmcm9tIFwiYWN0aW9ucy9Ob3RpZmljYXRpb25BY3Rpb25zXCI7XG5pbXBvcnQgQWNjb3VudE5vdGlmaWNhdGlvbnMgZnJvbSBcIi4uL05vdGlmaWVyL05vdGlmaWVyQ29udGFpbmVyXCI7XG5pbXBvcnQgUHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQge0NoYWluU3RvcmUsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBtYXJrZXRfdXRpbHMgZnJvbSBcImNvbW1vbi9tYXJrZXRfdXRpbHNcIjtcbmltcG9ydCB7QXNzZXQsIFByaWNlLCBMaW1pdE9yZGVyQ3JlYXRlfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCBDb25maXJtT3JkZXJNb2RhbCBmcm9tIFwiLi9Db25maXJtT3JkZXJNb2RhbFwiO1xuaW1wb3J0IEV4Y2hhbmdlSGVhZGVyIGZyb20gXCIuL0V4Y2hhbmdlSGVhZGVyXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IHtjaGVja0ZlZVN0YXR1c0FzeW5jfSBmcm9tIFwiY29tbW9uL3RyeEhlbHBlclwiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IENoYXRCcm8gZnJvbSBcIi4uL0NoYXQvQ2hhdEJyb1wiO1xuXG4vLyBIaWdoY2hhcnRzLnNldE9wdGlvbnMoe1xuLy8gICAgIGdsb2JhbDoge1xuLy8gICAgICAgICB1c2VVVEM6IGZhbHNlXG4vLyAgICAgfVxuLy8gfSk7XG5pbXBvcnQgZ3VpZGUgZnJvbSBcImludHJvLmpzXCI7XG5pbXBvcnQgdHJhbnNsYXRvciBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7SWNvbiBhcyBBbnRJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIEV4Y2hhbmdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBtYXJrZXRDYWxsT3JkZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGFjdGl2ZU1hcmtldEhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgdmlld1NldHRpbmdzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbWFya2V0Q2FsbE9yZGVyczogW10sXG4gICAgICAgIGFjdGl2ZU1hcmtldEhpc3Rvcnk6IHt9LFxuICAgICAgICB2aWV3U2V0dGluZ3M6IHt9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9pbml0aWFsU3RhdGUocHJvcHMpLFxuICAgICAgICAgICAgZXhwaXJhdGlvblR5cGU6IHtcbiAgICAgICAgICAgICAgICBiaWQ6IHByb3BzLmV4Y2hhbmdlLmdldEluKFtcImxhc3RFeHBpcmF0aW9uXCIsIFwiYmlkXCJdKSB8fCBcIllFQVJcIixcbiAgICAgICAgICAgICAgICBhc2s6IHByb3BzLmV4Y2hhbmdlLmdldEluKFtcImxhc3RFeHBpcmF0aW9uXCIsIFwiYXNrXCJdKSB8fCBcIllFQVJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cGlyYXRpb25DdXN0b21UaW1lOiB7XG4gICAgICAgICAgICAgICAgYmlkOiBtb21lbnQoKS5hZGQoMSwgXCJkYXlcIiksXG4gICAgICAgICAgICAgICAgYXNrOiBtb21lbnQoKS5hZGQoMSwgXCJkYXlcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZWVTdGF0dXM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZ2V0V2luZG93U2l6ZSA9IGRlYm91bmNlKHRoaXMuX2dldFdpbmRvd1NpemUuYmluZCh0aGlzKSwgMTUwKTtcbiAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXMgPSB0aGlzLl9jaGVja0ZlZVN0YXR1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZUV4cGlyYXRpb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVFeHBpcmF0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUN1c3RvbUV4cGlyYXRpb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVDdXN0b21FeHBpcmF0aW9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5wc0luaXQgPSB0cnVlO1xuICAgIH1cblxuICAgIF9oYW5kbGVFeHBpcmF0aW9uQ2hhbmdlKHR5cGUsIGUpIHtcbiAgICAgICAgbGV0IGV4cGlyYXRpb25UeXBlID0ge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5leHBpcmF0aW9uVHlwZSxcbiAgICAgICAgICAgIFt0eXBlXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IFwiU1BFQ0lGSUNcIikge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnNldEV4Y2hhbmdlTGFzdEV4cGlyYXRpb24oe1xuICAgICAgICAgICAgICAgIC4uLigodGhpcy5wcm9wcy5leGNoYW5nZS5oYXMoXCJsYXN0RXhwaXJhdGlvblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmV4Y2hhbmdlLmdldChcImxhc3RFeHBpcmF0aW9uXCIpLnRvSlMoKSkgfHxcbiAgICAgICAgICAgICAgICAgICAge30pLFxuICAgICAgICAgICAgICAgIFt0eXBlXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBpcmF0aW9uVHlwZTogZXhwaXJhdGlvblR5cGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUN1c3RvbUV4cGlyYXRpb25DaGFuZ2UodHlwZSwgdGltZSkge1xuICAgICAgICBsZXQgZXhwaXJhdGlvbkN1c3RvbVRpbWUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmV4cGlyYXRpb25DdXN0b21UaW1lLFxuICAgICAgICAgICAgW3R5cGVdOiB0aW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBpcmF0aW9uQ3VzdG9tVGltZTogZXhwaXJhdGlvbkN1c3RvbVRpbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgRVhQSVJBVElPTlMgPSB7XG4gICAgICAgIEhPVVI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjEgaG91clwiLFxuICAgICAgICAgICAgZ2V0OiAoKSA9PlxuICAgICAgICAgICAgICAgIG1vbWVudCgpXG4gICAgICAgICAgICAgICAgICAgIC5hZGQoMSwgXCJob3VyXCIpXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZU9mKClcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMkhPVVJTXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjEyIGhvdXJzXCIsXG4gICAgICAgICAgICBnZXQ6ICgpID0+XG4gICAgICAgICAgICAgICAgbW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZCgxMiwgXCJob3VyXCIpXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZU9mKClcbiAgICAgICAgfSxcbiAgICAgICAgXCIyNEhPVVJTXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjI0IGhvdXJzXCIsXG4gICAgICAgICAgICBnZXQ6ICgpID0+XG4gICAgICAgICAgICAgICAgbW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZCgxLCBcImRheVwiKVxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpXG4gICAgICAgIH0sXG4gICAgICAgIFwiN0RBWVNcIjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiNyBkYXlzXCIsXG4gICAgICAgICAgICBnZXQ6ICgpID0+XG4gICAgICAgICAgICAgICAgbW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZCg3LCBcImRheVwiKVxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpXG4gICAgICAgIH0sXG4gICAgICAgIE1PTlRIOiB7XG4gICAgICAgICAgICB0aXRsZTogXCIzMCBkYXlzXCIsXG4gICAgICAgICAgICBnZXQ6ICgpID0+XG4gICAgICAgICAgICAgICAgbW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZCgzMCwgXCJkYXlcIilcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlT2YoKVxuICAgICAgICB9LFxuICAgICAgICBZRUFSOiB7XG4gICAgICAgICAgICB0aXRsZTogXCIxIHllYXJcIixcbiAgICAgICAgICAgIGdldDogKCkgPT5cbiAgICAgICAgICAgICAgICBtb21lbnQoKVxuICAgICAgICAgICAgICAgICAgICAuYWRkKDEsIFwieWVhclwiKVxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpXG4gICAgICAgIH0sXG4gICAgICAgIFNQRUNJRklDOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJTcGVjaWZpY1wiLFxuICAgICAgICAgICAgZ2V0OiB0eXBlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5leHBpcmF0aW9uQ3VzdG9tVGltZVt0eXBlXS52YWx1ZU9mKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX2luaXRpYWxTdGF0ZShwcm9wcykge1xuICAgICAgICBsZXQgd3MgPSBwcm9wcy52aWV3U2V0dGluZ3M7XG4gICAgICAgIGxldCBiaWQgPSB7XG4gICAgICAgICAgICBmb3JTYWxlVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRvUmVjZWl2ZVRleHQ6IFwiXCIsXG4gICAgICAgICAgICBwcmljZVRleHQ6IFwiXCIsXG4gICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogcHJvcHMuYmFzZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMuYmFzZUFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0b19yZWNlaXZlOiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5xdW90ZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGJpZC5wcmljZSA9IG5ldyBQcmljZSh7YmFzZTogYmlkLmZvcl9zYWxlLCBxdW90ZTogYmlkLnRvX3JlY2VpdmV9KTtcbiAgICAgICAgbGV0IGFzayA9IHtcbiAgICAgICAgICAgIGZvclNhbGVUZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9SZWNlaXZlVGV4dDogXCJcIixcbiAgICAgICAgICAgIHByaWNlVGV4dDogXCJcIixcbiAgICAgICAgICAgIGZvcl9zYWxlOiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5xdW90ZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdG9fcmVjZWl2ZTogbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogcHJvcHMuYmFzZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMuYmFzZUFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgYXNrLnByaWNlID0gbmV3IFByaWNlKHtiYXNlOiBhc2suZm9yX3NhbGUsIHF1b3RlOiBhc2sudG9fcmVjZWl2ZX0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgICAgIGJ1eVNlbGxPcGVuOiB3cy5nZXQoXCJidXlTZWxsT3BlblwiLCB0cnVlKSxcbiAgICAgICAgICAgIGJpZCxcbiAgICAgICAgICAgIGFzayxcbiAgICAgICAgICAgIGZsaXBCdXlTZWxsOiB3cy5nZXQoXCJmbGlwQnV5U2VsbFwiLCBmYWxzZSksXG4gICAgICAgICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93RGVwdGhDaGFydDogd3MuZ2V0KFwic2hvd0RlcHRoQ2hhcnRcIiwgZmFsc2UpLFxuICAgICAgICAgICAgbGVmdE9yZGVyQm9vazogd3MuZ2V0KFwibGVmdE9yZGVyQm9va1wiLCB0cnVlKSxcbiAgICAgICAgICAgIGJ1eURpZmY6IGZhbHNlLFxuICAgICAgICAgICAgc2VsbERpZmY6IGZhbHNlLFxuICAgICAgICAgICAgYnV5U2VsbFRvcDogd3MuZ2V0KFwiYnV5U2VsbFRvcFwiLCB0cnVlKSxcbiAgICAgICAgICAgIGJ1eUZlZUFzc2V0SWR4OiB3cy5nZXQoXCJidXlGZWVBc3NldElkeFwiLCAwKSxcbiAgICAgICAgICAgIHNlbGxGZWVBc3NldElkeDogd3MuZ2V0KFwic2VsbEZlZUFzc2V0SWR4XCIsIDApLFxuICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICBoaWRlUGFuZWw6IGZhbHNlLFxuICAgICAgICAgICAgY2hhcnRIZWlnaHQ6IHdzLmdldChcImNoYXJ0SGVpZ2h0XCIsIDYwMCksXG4gICAgICAgICAgICBjdXJyZW50UGVyaW9kOiB3cy5nZXQoXCJjdXJyZW50UGVyaW9kXCIsIDM2MDAgKiAyNCAqIDMwICogMykgLy8gMyBtb250aHNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfZ2V0TGFzdE1hcmtldEtleSgpIHtcbiAgICAgICAgY29uc3QgY2hhaW5JRCA9IEFwaXMuaW5zdGFuY2UoKS5jaGFpbl9pZDtcbiAgICAgICAgcmV0dXJuIGBsYXN0TWFya2V0JHtjaGFpbklEID8gXCJfXCIgKyBjaGFpbklELnN1YnN0cigwLCA4KSA6IFwiXCJ9YDtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIE1hcmtldHNBY3Rpb25zLmdldFRyYWNrZWRHcm91cHNDb25maWcoKTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcuZGVmZXIoe1xuICAgICAgICAgICAgW3RoaXMuX2dldExhc3RNYXJrZXRLZXkoKV06XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSArXG4gICAgICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9nZXRXaW5kb3dTaXplLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICBpZiAoIW5wLm1hcmtldFJlYWR5ICYmICF0aGlzLnByb3BzLm1hcmtldFJlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb3BzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gbnApIHtcbiAgICAgICAgICAgIGlmIChucC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNDaGFuZ2VkID1cbiAgICAgICAgICAgICAgICAgICAgcHJvcHNDaGFuZ2VkIHx8XG4gICAgICAgICAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucFtrZXldLCB0aGlzLnByb3BzW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc0NoYW5nZWQpIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wc0NoYW5nZWQgfHwgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5zLCB0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICBfY2hlY2tGZWVTdGF0dXMoXG4gICAgICAgIGFzc2V0cyA9IFtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29yZUFzc2V0LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXQsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXRcbiAgICAgICAgXSxcbiAgICAgICAgYWNjb3VudCA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcbiAgICApIHtcbiAgICAgICAgbGV0IGZlZVN0YXR1cyA9IHt9O1xuICAgICAgICBsZXQgcCA9IFtdO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgIHAucHVzaChcbiAgICAgICAgICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElEOiBhY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBmZWVJRDogYS5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJsaW1pdF9vcmRlcl9jcmVhdGVcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5hbGwocClcbiAgICAgICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKGEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXNbYS5nZXQoXCJpZFwiKV0gPSBzdGF0dXNbaWR4XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KHRoaXMuc3RhdGUuZmVlU3RhdHVzLCBmZWVTdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrRmVlU3RhdHVzQXN5bmMgZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmZWVTdGF0dXM6IHt9fSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0V2luZG93U2l6ZSgpIHtcbiAgICAgICAgbGV0IHtpbm5lckhlaWdodCwgaW5uZXJXaWR0aH0gPSB3aW5kb3c7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGlubmVySGVpZ2h0ICE9PSB0aGlzLnN0YXRlLmhlaWdodCB8fFxuICAgICAgICAgICAgaW5uZXJXaWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGlubmVyV2lkdGhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGNlbnRlckNvbnRhaW5lciA9IHRoaXMucmVmcy5jZW50ZXI7XG4gICAgICAgICAgICBpZiAoY2VudGVyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgUHMudXBkYXRlKGNlbnRlckNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgdGhpcy5faW5pdFBzQ29udGFpbmVyKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmV4Y2hhbmdlLmdldChcInR1dG9yaWFsU2hvd25cIikgJiZcbiAgICAgICAgICAgIHByZXZQcm9wcy5jb3JlQXNzZXQgJiZcbiAgICAgICAgICAgIHByZXZTdGF0ZS5mZWVTdGF0dXNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudHV0b3JpYWxTaG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMudHV0b3JpYWxTaG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLnByb3BzLnNldHRpbmdzLmdldChcInRoZW1lc1wiKTtcblxuICAgICAgICAgICAgICAgIGd1aWRlXG4gICAgICAgICAgICAgICAgICAgIC5pbnRyb0pzKClcbiAgICAgICAgICAgICAgICAgICAgLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENsYXNzOiB0aGVtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodENsYXNzOiB0aGVtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dCdWxsZXRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVOZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVByZXY6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0TGFiZWw6IHRyYW5zbGF0b3IudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2gubmV4dF9sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkxhYmVsOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLnByZXZfbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraXBMYWJlbDogdHJhbnNsYXRvci50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5za2lwX2xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lTGFiZWw6IHRyYW5zbGF0b3IudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guZG9uZV9sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnNldEV4Y2hhbmdlVHV0b3JpYWxTaG93bi5kZWZlcih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0UHNDb250YWluZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZnMuY2VudGVyICYmIHRoaXMucHNJbml0KSB7XG4gICAgICAgICAgICBsZXQgY2VudGVyQ29udGFpbmVyID0gdGhpcy5yZWZzLmNlbnRlcjtcbiAgICAgICAgICAgIGlmIChjZW50ZXJDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBQcy5pbml0aWFsaXplKGNlbnRlckNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5wc0luaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMuX2luaXRQc0NvbnRhaW5lcigpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVBc3NldCAhPT0gdGhpcy5wcm9wcy5xdW90ZUFzc2V0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuYmFzZUFzc2V0ICE9PSB0aGlzLnByb3BzLmJhc2VBc3NldCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRBY2NvdW50ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXMoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY29yZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYmFzZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVBc3NldFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSAhPT1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKSAhPT1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2luaXRpYWxTdGF0ZShuZXh0UHJvcHMpKTtcblxuICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgW3RoaXMuX2dldExhc3RNYXJrZXRLZXkoKV06XG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuc3ViICYmIG5leHRQcm9wcy5idWNrZXRTaXplICE9PSB0aGlzLnByb3BzLmJ1Y2tldFNpemUpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLl9jaGFuZ2VCdWNrZXRTaXplKG5leHRQcm9wcy5idWNrZXRTaXplKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9nZXRXaW5kb3dTaXplKTtcbiAgICB9XG5cbiAgICBfZ2V0RmVlQXNzZXRzKHF1b3RlLCBiYXNlLCBjb3JlQXNzZXQpIHtcbiAgICAgICAgbGV0IHtjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7ZmVlU3RhdHVzfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkTWlzc2luZ0Fzc2V0KHRhcmdldCwgYXNzZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaW5kZXhPZihhc3NldCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goYXNzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFzRmVlUG9vbEJhbGFuY2UoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXNbaWRdICYmIGZlZVN0YXR1c1tpZF0uaGFzUG9vbEJhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYXNCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsbEFzc2V0cyA9IFtjb3JlQXNzZXQsIHF1b3RlID09PSBjb3JlQXNzZXQgPyBiYXNlIDogcXVvdGVdO1xuICAgICAgICBhZGRNaXNzaW5nQXNzZXQoc2VsbEFzc2V0cywgcXVvdGUpO1xuICAgICAgICBhZGRNaXNzaW5nQXNzZXQoc2VsbEFzc2V0cywgYmFzZSk7XG4gICAgICAgIC8vIGxldCBzZWxsRmVlQXNzZXQ7XG5cbiAgICAgICAgbGV0IGJ1eUFzc2V0cyA9IFtjb3JlQXNzZXQsIGJhc2UgPT09IGNvcmVBc3NldCA/IHF1b3RlIDogYmFzZV07XG4gICAgICAgIGFkZE1pc3NpbmdBc3NldChidXlBc3NldHMsIHF1b3RlKTtcbiAgICAgICAgYWRkTWlzc2luZ0Fzc2V0KGJ1eUFzc2V0cywgYmFzZSk7XG4gICAgICAgIC8vIGxldCBidXlGZWVBc3NldDtcblxuICAgICAgICBsZXQgYmFsYW5jZXMgPSB7fTtcblxuICAgICAgICBjdXJyZW50QWNjb3VudFxuICAgICAgICAgICAgLmdldChcImJhbGFuY2VzXCIsIFtdKVxuICAgICAgICAgICAgLmZpbHRlcigoYmFsYW5jZSwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBbXCIxLjMuMFwiLCBxdW90ZS5nZXQoXCJpZFwiKSwgYmFzZS5nZXQoXCJpZFwiKV0uaW5kZXhPZihpZCkgPj0gMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goKGJhbGFuY2UsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlKTtcbiAgICAgICAgICAgICAgICBiYWxhbmNlc1tpZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IGJhbGFuY2VPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgZmVlOiB0aGlzLl9nZXRGZWUoQ2hhaW5TdG9yZS5nZXRBc3NldChpZCkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpbHRlckFuZERlZmF1bHQoYXNzZXRzLCBiYWxhbmNlcywgaWR4KSB7XG4gICAgICAgICAgICBsZXQgYXNzZXQ7XG4gICAgICAgICAgICAvKiBPbmx5IGtlZXAgYXNzZXRzIGZvciB3aGljaCB0aGUgdXNlciBoYXMgYSBiYWxhbmNlIGxhcmdlciB0aGFuIHRoZSBmZWUsIGFuZCBmb3Igd2hpY2ggdGhlIGZlZSBwb29sIGlzIHZhbGlkICovXG4gICAgICAgICAgICBhc3NldHMgPSBhc3NldHMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYmFsYW5jZXNbYS5nZXQoXCJpZFwiKV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBoYXNGZWVQb29sQmFsYW5jZShhLmdldChcImlkXCIpKSAmJiBoYXNCYWxhbmNlKGEuZ2V0KFwiaWRcIikpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvKiBJZiB0aGUgdXNlciBoYXMgbm8gdmFsaWQgYmFsYW5jZXMsIGRlZmF1bHQgdG8gY29yZSBmZWUgKi9cbiAgICAgICAgICAgIGlmICghYXNzZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFzc2V0ID0gY29yZUFzc2V0O1xuICAgICAgICAgICAgICAgIGFzc2V0cy5wdXNoKGNvcmVBc3NldCk7XG4gICAgICAgICAgICAgICAgLyogSWYgdGhlIHVzZXIgaGFzIGJhbGFuY2VzLCB1c2UgdGhlIHN0b3JlZCBpZHggdmFsdWUgdW5sZXNzIHRoYXQgYXNzZXQgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSovXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFzc2V0ID0gYXNzZXRzW01hdGgubWluKGFzc2V0cy5sZW5ndGggLSAxLCBpZHgpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHthc3NldHMsIGFzc2V0fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7YXNzZXRzOiBzZWxsRmVlQXNzZXRzLCBhc3NldDogc2VsbEZlZUFzc2V0fSA9IGZpbHRlckFuZERlZmF1bHQoXG4gICAgICAgICAgICBzZWxsQXNzZXRzLFxuICAgICAgICAgICAgYmFsYW5jZXMsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGxGZWVBc3NldElkeFxuICAgICAgICApO1xuICAgICAgICBsZXQge2Fzc2V0czogYnV5RmVlQXNzZXRzLCBhc3NldDogYnV5RmVlQXNzZXR9ID0gZmlsdGVyQW5kRGVmYXVsdChcbiAgICAgICAgICAgIGJ1eUFzc2V0cyxcbiAgICAgICAgICAgIGJhbGFuY2VzLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5idXlGZWVBc3NldElkeFxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBzZWxsRmVlID0gdGhpcy5fZ2V0RmVlKHNlbGxGZWVBc3NldCk7XG4gICAgICAgIGxldCBidXlGZWUgPSB0aGlzLl9nZXRGZWUoYnV5RmVlQXNzZXQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxsRmVlQXNzZXQsXG4gICAgICAgICAgICBzZWxsRmVlQXNzZXRzLFxuICAgICAgICAgICAgc2VsbEZlZSxcbiAgICAgICAgICAgIGJ1eUZlZUFzc2V0LFxuICAgICAgICAgICAgYnV5RmVlQXNzZXRzLFxuICAgICAgICAgICAgYnV5RmVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldEZlZShhc3NldCA9IHRoaXMucHJvcHMuY29yZUFzc2V0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZlZVN0YXR1c1thc3NldC5nZXQoXCJpZFwiKV0gJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmVlU3RhdHVzW2Fzc2V0LmdldChcImlkXCIpXS5mZWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfdmVyaWZ5RmVlKGZlZSwgc2VsbCwgc2VsbEJhbGFuY2UsIGNvcmVCYWxhbmNlKSB7XG4gICAgICAgIGxldCBjb3JlRmVlID0gdGhpcy5fZ2V0RmVlKCk7XG5cbiAgICAgICAgaWYgKGZlZS5hc3NldF9pZCA9PT0gXCIxLjMuMFwiKSB7XG4gICAgICAgICAgICBpZiAoY29yZUZlZS5nZXRBbW91bnQoKSA8PSBjb3JlQmFsYW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjEuMy4wXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNlbGxTdW0gPVxuICAgICAgICAgICAgICAgIHNlbGwuYXNzZXRfaWQgPT09IGZlZS5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA/IGZlZS5nZXRBbW91bnQoKSArIHNlbGwuZ2V0QW1vdW50KClcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxsLmdldEFtb3VudCgpO1xuICAgICAgICAgICAgaWYgKHNlbGxTdW0gPD0gc2VsbEJhbGFuY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBTdWZmaWNpZW50IGJhbGFuY2UgaW4gYXNzZXQgdG8gcGF5IGZlZVxuICAgICAgICAgICAgICAgIHJldHVybiBmZWUuYXNzZXRfaWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIGNvcmVGZWUuZ2V0QW1vdW50KCkgPD0gY29yZUJhbGFuY2UgJiZcbiAgICAgICAgICAgICAgICBmZWUuYXNzZXRfaWQgIT09IFwiMS4zLjBcIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VmZmljaWVudCBiYWxhbmNlIGluIGNvcmUgYXNzZXQgdG8gcGF5IGZlZVxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEuMy4wXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBVbmFibGUgdG8gcGF5IGZlZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NyZWF0ZUxpbWl0T3JkZXJDb25maXJtKFxuICAgICAgICBidXlBc3NldCxcbiAgICAgICAgc2VsbEFzc2V0LFxuICAgICAgICBzZWxsQmFsYW5jZSxcbiAgICAgICAgY29yZUJhbGFuY2UsXG4gICAgICAgIGZlZUFzc2V0LFxuICAgICAgICB0eXBlLFxuICAgICAgICBzaG9ydCA9IHRydWUsXG4gICAgICAgIGVcbiAgICApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQge2hpZ2hlc3RCaWQsIGxvd2VzdEFza30gPSB0aGlzLnByb3BzLm1hcmtldERhdGE7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZVt0eXBlID09PSBcInNlbGxcIiA/IFwiYXNrXCIgOiBcImJpZFwiXTtcblxuICAgICAgICBzZWxsQmFsYW5jZSA9IGN1cnJlbnQuZm9yX3NhbGUuY2xvbmUoXG4gICAgICAgICAgICBzZWxsQmFsYW5jZVxuICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoQ2hhaW5TdG9yZS5nZXRPYmplY3Qoc2VsbEJhbGFuY2UpLnRvSlMoKS5iYWxhbmNlLCAxMClcbiAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgKTtcbiAgICAgICAgY29yZUJhbGFuY2UgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiBjb3JlQmFsYW5jZVxuICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoQ2hhaW5TdG9yZS5nZXRPYmplY3QoY29yZUJhbGFuY2UpLnRvSlMoKS5iYWxhbmNlLCAxMClcbiAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGZlZSA9IHRoaXMuX2dldEZlZShmZWVBc3NldCk7XG4gICAgICAgIGxldCBmZWVJRCA9IHRoaXMuX3ZlcmlmeUZlZShcbiAgICAgICAgICAgIGZlZSxcbiAgICAgICAgICAgIGN1cnJlbnQuZm9yX3NhbGUsXG4gICAgICAgICAgICBzZWxsQmFsYW5jZS5nZXRBbW91bnQoKSxcbiAgICAgICAgICAgIGNvcmVCYWxhbmNlLmdldEFtb3VudCgpXG4gICAgICAgICk7XG4gICAgICAgIGlmICghZmVlSUQpIHtcbiAgICAgICAgICAgIHJldHVybiBub3RpZnkuYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkluc3VmZmljaWVudCBmdW5kcyB0byBwYXkgZmVlc1wiLFxuICAgICAgICAgICAgICAgIGxldmVsOiBcImVycm9yXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwiYnV5XCIgJiYgbG93ZXN0QXNrKSB7XG4gICAgICAgICAgICBsZXQgZGlmZiA9IHRoaXMuc3RhdGUuYmlkLnByaWNlLnRvUmVhbCgpIC8gbG93ZXN0QXNrLmdldFByaWNlKCk7XG4gICAgICAgICAgICBpZiAoZGlmZiA+IDEuMikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5idXkuc2hvdygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYnV5RGlmZjogZGlmZlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic2VsbFwiICYmIGhpZ2hlc3RCaWQpIHtcbiAgICAgICAgICAgIGxldCBkaWZmID1cbiAgICAgICAgICAgICAgICAxIC8gKHRoaXMuc3RhdGUuYXNrLnByaWNlLnRvUmVhbCgpIC8gaGlnaGVzdEJpZC5nZXRQcmljZSgpKTtcbiAgICAgICAgICAgIGlmIChkaWZmID4gMS4yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLnNlbGwuc2hvdygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2VsbERpZmY6IGRpZmZcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1ByZWRpY3Rpb25NYXJrZXQgPSBzZWxsQXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmIChjdXJyZW50LmZvcl9zYWxlLmd0KHNlbGxCYWxhbmNlKSAmJiAhaXNQcmVkaWN0aW9uTWFya2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbm90aWZ5LmFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgXCJJbnN1ZmZpY2llbnQgZnVuZHMgdG8gcGxhY2Ugb3JkZXIsIHlvdSBuZWVkIGF0IGxlYXN0IFwiICtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5mb3Jfc2FsZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSArXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgc2VsbEFzc2V0LmdldChcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICBsZXZlbDogXCJlcnJvclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIGN1cnJlbnQuZm9yX3NhbGUuZ2V0QW1vdW50KCkgPiAwICYmXG4gICAgICAgICAgICAgICAgY3VycmVudC50b19yZWNlaXZlLmdldEFtb3VudCgpID4gMFxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBub3RpZnkuYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGFtb3VudCBhbmQgcHJpY2VcIixcbiAgICAgICAgICAgICAgICBsZXZlbDogXCJlcnJvclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJzZWxsXCIgJiYgaXNQcmVkaWN0aW9uTWFya2V0ICYmIHNob3J0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUHJlZGljdGlvblNob3J0KGZlZUlEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NyZWF0ZUxpbWl0T3JkZXIodHlwZSwgZmVlSUQpO1xuICAgIH1cblxuICAgIF9jcmVhdGVMaW1pdE9yZGVyKHR5cGUsIGZlZUlEKSB7XG4gICAgICAgIGxldCBhY3Rpb25UeXBlID0gdHlwZSA9PT0gXCJzZWxsXCIgPyBcImFza1wiIDogXCJiaWRcIjtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbYWN0aW9uVHlwZV07XG5cbiAgICAgICAgbGV0IGV4cGlyYXRpb25UaW1lID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXhwaXJhdGlvblR5cGVbYWN0aW9uVHlwZV0gPT09IFwiU1BFQ0lGSUNcIikge1xuICAgICAgICAgICAgZXhwaXJhdGlvblRpbWUgPSB0aGlzLkVYUElSQVRJT05TW1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXhwaXJhdGlvblR5cGVbYWN0aW9uVHlwZV1cbiAgICAgICAgICAgIF0uZ2V0KGFjdGlvblR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhwaXJhdGlvblRpbWUgPSB0aGlzLkVYUElSQVRJT05TW1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXhwaXJhdGlvblR5cGVbYWN0aW9uVHlwZV1cbiAgICAgICAgICAgIF0uZ2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcmRlciA9IG5ldyBMaW1pdE9yZGVyQ3JlYXRlKHtcbiAgICAgICAgICAgIGZvcl9zYWxlOiBjdXJyZW50LmZvcl9zYWxlLFxuICAgICAgICAgICAgZXhwaXJhdGlvbjogbmV3IERhdGUoZXhwaXJhdGlvblRpbWUgfHwgZmFsc2UpLFxuICAgICAgICAgICAgdG9fcmVjZWl2ZTogY3VycmVudC50b19yZWNlaXZlLFxuICAgICAgICAgICAgc2VsbGVyOiB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGZlZUlELFxuICAgICAgICAgICAgICAgIGFtb3VudDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qge21hcmtldE5hbWUsIGZpcnN0fSA9IG1hcmtldF91dGlscy5nZXRNYXJrZXROYW1lKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXQsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXRcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaW52ZXJ0ZWQgPSB0aGlzLnByb3BzLm1hcmtldERpcmVjdGlvbnMuZ2V0KG1hcmtldE5hbWUpO1xuICAgICAgICBjb25zdCBzaG91bGRGbGlwID1cbiAgICAgICAgICAgIChpbnZlcnRlZCAmJiBmaXJzdC5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIikpIHx8XG4gICAgICAgICAgICAoIWludmVydGVkICYmIGZpcnN0LmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSk7XG4gICAgICAgIGlmIChzaG91bGRGbGlwKSB7XG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICAgICAgc2V0dGluZ1ttYXJrZXROYW1lXSA9ICFpbnZlcnRlZDtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VNYXJrZXREaXJlY3Rpb24oc2V0dGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJvcmRlcjpcIiwgSlNPTi5zdHJpbmdpZnkob3JkZXIudG9PYmplY3QoKSkpO1xuICAgICAgICByZXR1cm4gTWFya2V0c0FjdGlvbnMuY3JlYXRlTGltaXRPcmRlcjIob3JkZXIpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5tZXNzYWdlICE9PSBcIndhbGxldCBsb2NrZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmeS5hZGROb3RpZmljYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5rbm93biBlcnJvci4gRmFpbGVkIHRvIHBsYWNlIG9yZGVyIGZvciBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQudG9fcmVjZWl2ZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC50b19yZWNlaXZlLmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBcImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9yZGVyIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXIgZmFpbGVkOlwiLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jcmVhdGVQcmVkaWN0aW9uU2hvcnQoZmVlSUQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLmFzaztcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBuZXcgTGltaXRPcmRlckNyZWF0ZSh7XG4gICAgICAgICAgICBmb3Jfc2FsZTogY3VycmVudC5mb3Jfc2FsZSxcbiAgICAgICAgICAgIHRvX3JlY2VpdmU6IGN1cnJlbnQudG9fcmVjZWl2ZSxcbiAgICAgICAgICAgIHNlbGxlcjogdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBmZWVJRCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcbiAgICAgICAgICAgICAgICBcImdldEFzc2V0XCIsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKVxuICAgICAgICBdKS50aGVuKGFzc2V0cyA9PiB7XG4gICAgICAgICAgICBsZXQgW2JhY2tpbmdBc3NldF0gPSBhc3NldHM7XG4gICAgICAgICAgICBsZXQgY29sbGF0ZXJhbCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgYW1vdW50OiBvcmRlci5hbW91bnRfZm9yX3NhbGUuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IGJhY2tpbmdBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5jcmVhdGVQcmVkaWN0aW9uU2hvcnQob3JkZXIsIGNvbGxhdGVyYWwpLnRoZW4oXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5tZXNzYWdlICE9PSBcIndhbGxldCBsb2NrZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZnkuYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5rbm93biBlcnJvci4gRmFpbGVkIHRvIHBsYWNlIG9yZGVyIGZvciBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlBc3NldEFtb3VudCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlBc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBcImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9mb3JjZUJ1eSh0eXBlLCBmZWVBc3NldCwgc2VsbEJhbGFuY2UsIGNvcmVCYWxhbmNlKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZVt0eXBlID09PSBcInNlbGxcIiA/IFwiYXNrXCIgOiBcImJpZFwiXTtcbiAgICAgICAgLy8gQ29udmVydCBmZWUgdG8gcmVsZXZhbnQgYXNzZXQgZmVlIGFuZCBjaGVjayBpZiB1c2VyIGhhcyBzdWZmaWNpZW50IGJhbGFuY2VcbiAgICAgICAgc2VsbEJhbGFuY2UgPSBjdXJyZW50LmZvcl9zYWxlLmNsb25lKFxuICAgICAgICAgICAgc2VsbEJhbGFuY2VcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KHNlbGxCYWxhbmNlKS5nZXQoXCJiYWxhbmNlXCIpLCAxMClcbiAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgKTtcbiAgICAgICAgY29yZUJhbGFuY2UgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiBjb3JlQmFsYW5jZVxuICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoQ2hhaW5TdG9yZS5nZXRPYmplY3QoY29yZUJhbGFuY2UpLnRvSlMoKS5iYWxhbmNlLCAxMClcbiAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBmZWUgPSB0aGlzLl9nZXRGZWUoZmVlQXNzZXQpO1xuICAgICAgICBsZXQgZmVlSUQgPSB0aGlzLl92ZXJpZnlGZWUoXG4gICAgICAgICAgICBmZWUsXG4gICAgICAgICAgICBjdXJyZW50LmZvcl9zYWxlLFxuICAgICAgICAgICAgc2VsbEJhbGFuY2UuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICBjb3JlQmFsYW5jZS5nZXRBbW91bnQoKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChmZWVJRCkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlTGltaXRPcmRlcih0eXBlLCBmZWVJRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIHBheSBmZWVzLCBhYm9ydGluZyBsaW1pdCBvcmRlciBjcmVhdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9mb3JjZVNlbGwodHlwZSwgZmVlQXNzZXQsIHNlbGxCYWxhbmNlLCBjb3JlQmFsYW5jZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZSA9PT0gXCJzZWxsXCIgPyBcImFza1wiIDogXCJiaWRcIl07XG4gICAgICAgIC8vIENvbnZlcnQgZmVlIHRvIHJlbGV2YW50IGFzc2V0IGZlZSBhbmQgY2hlY2sgaWYgdXNlciBoYXMgc3VmZmljaWVudCBiYWxhbmNlXG4gICAgICAgIHNlbGxCYWxhbmNlID0gY3VycmVudC5mb3Jfc2FsZS5jbG9uZShcbiAgICAgICAgICAgIHNlbGxCYWxhbmNlXG4gICAgICAgICAgICAgICAgPyBwYXJzZUludChDaGFpblN0b3JlLmdldE9iamVjdChzZWxsQmFsYW5jZSkuZ2V0KFwiYmFsYW5jZVwiKSwgMTApXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICk7XG4gICAgICAgIGNvcmVCYWxhbmNlID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogY29yZUJhbGFuY2VcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlKS50b0pTKCkuYmFsYW5jZSwgMTApXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZmVlID0gdGhpcy5fZ2V0RmVlKGZlZUFzc2V0KTtcbiAgICAgICAgbGV0IGZlZUlEID0gdGhpcy5fdmVyaWZ5RmVlKFxuICAgICAgICAgICAgZmVlLFxuICAgICAgICAgICAgY3VycmVudC5mb3Jfc2FsZSxcbiAgICAgICAgICAgIHNlbGxCYWxhbmNlLmdldEFtb3VudCgpLFxuICAgICAgICAgICAgY29yZUJhbGFuY2UuZ2V0QW1vdW50KClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZmVlSUQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUxpbWl0T3JkZXIodHlwZSwgZmVlSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBwYXkgZmVlcywgYWJvcnRpbmcgbGltaXQgb3JkZXIgY3JlYXRpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2FuY2VsTGltaXRPcmRlcihvcmRlcklELCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHtjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBNYXJrZXRzQWN0aW9ucy5jYW5jZWxMaW1pdE9yZGVyKFxuICAgICAgICAgICAgY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBvcmRlcklEIC8vIG9yZGVyIGlkIHRvIGNhbmNlbFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIF9jaGFuZ2VCdWNrZXRTaXplKHNpemUsIGUpIHtcbiAgICAvLyAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgaWYgKHNpemUgIT09IHRoaXMucHJvcHMuYnVja2V0U2l6ZSkge1xuICAgIC8vICAgICAgICAgTWFya2V0c0FjdGlvbnMuY2hhbmdlQnVja2V0U2l6ZS5kZWZlcihzaXplKTtcbiAgICAvLyAgICAgICAgIGxldCBjdXJyZW50U3ViID0gdGhpcy5wcm9wcy5zdWIuc3BsaXQoXCJfXCIpO1xuICAgIC8vICAgICAgICAgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoY3VycmVudFN1YlswXSwgY3VycmVudFN1YlsxXSkudGhlbihcbiAgICAvLyAgICAgICAgICAgICAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3ViVG9NYXJrZXQodGhpcy5wcm9wcywgc2l6ZSk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIF9jaGFuZ2Vab29tUGVyaW9kKHNpemUsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoc2l6ZSAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50UGVyaW9kKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGVyaW9kOiBzaXplXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgY3VycmVudFBlcmlvZDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZGVwdGhDaGFydENsaWNrKGJhc2UsIHF1b3RlLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHtiaWQsIGFza30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGJpZC5wcmljZSA9IG5ldyBQcmljZSh7XG4gICAgICAgICAgICBiYXNlOiB0aGlzLnN0YXRlLmJpZC5mb3Jfc2FsZSxcbiAgICAgICAgICAgIHF1b3RlOiB0aGlzLnN0YXRlLmJpZC50b19yZWNlaXZlLFxuICAgICAgICAgICAgcmVhbDogZS54QXhpc1swXS52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYmlkLnByaWNlVGV4dCA9IGJpZC5wcmljZS50b1JlYWwoKTtcblxuICAgICAgICBhc2sucHJpY2UgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgYmFzZTogdGhpcy5zdGF0ZS5hc2sudG9fcmVjZWl2ZSxcbiAgICAgICAgICAgIHF1b3RlOiB0aGlzLnN0YXRlLmFzay5mb3Jfc2FsZSxcbiAgICAgICAgICAgIHJlYWw6IGUueEF4aXNbMF0udmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGFzay5wcmljZVRleHQgPSBhc2sucHJpY2UudG9SZWFsKCk7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIGJpZCxcbiAgICAgICAgICAgIGFzayxcbiAgICAgICAgICAgIGRlcHRoTGluZTogYmlkLnByaWNlLnRvUmVhbCgpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShiaWQsIHRydWUpIHx8IHRoaXMuX3NldFJlY2VpdmUoYmlkLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fc2V0UmVjZWl2ZShhc2spIHx8IHRoaXMuX3NldEZvclNhbGUoYXNrKTtcblxuICAgICAgICB0aGlzLl9zZXRQcmljZVRleHQoYmlkLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fc2V0UHJpY2VUZXh0KGFzaywgZmFsc2UpO1xuICAgICAgICAvLyBpZiAoYmlkLmZvcl9zYWxlLilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZVBhbmVsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGhpZGVQYW5lbDogIXRoaXMuc3RhdGUuaGlkZVBhbmVsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9mbGlwQnV5U2VsbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmbGlwQnV5U2VsbDogIXRoaXMuc3RhdGUuZmxpcEJ1eVNlbGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGZsaXBCdXlTZWxsOiAhdGhpcy5zdGF0ZS5mbGlwQnV5U2VsbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlT3BlbkJ1eVNlbGwoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBidXlTZWxsT3BlbjogIXRoaXMuc3RhdGUuYnV5U2VsbE9wZW5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnV5U2VsbE9wZW46ICF0aGlzLnN0YXRlLmJ1eVNlbGxPcGVufSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZUNoYXJ0cygpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIHNob3dEZXB0aENoYXJ0OiAhdGhpcy5zdGF0ZS5zaG93RGVwdGhDaGFydFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RGVwdGhDaGFydDogIXRoaXMuc3RhdGUuc2hvd0RlcHRoQ2hhcnR9KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlTWFya2V0UGlja2VyKGFzc2V0KSB7XG4gICAgICAgIGxldCBzaG93TWFya2V0UGlja2VyID0gISFhc3NldCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93TWFya2V0UGlja2VyLFxuICAgICAgICAgICAgbWFya2V0UGlja2VyQXNzZXQ6IGFzc2V0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tb3ZlT3JkZXJCb29rKCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgbGVmdE9yZGVyQm9vazogIXRoaXMuc3RhdGUubGVmdE9yZGVyQm9va1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsZWZ0T3JkZXJCb29rOiAhdGhpcy5zdGF0ZS5sZWZ0T3JkZXJCb29rfSk7XG4gICAgfVxuXG4gICAgX2N1cnJlbnRQcmljZUNsaWNrKHR5cGUsIHByaWNlKSB7XG4gICAgICAgIGNvbnN0IGlzQmlkID0gdHlwZSA9PT0gXCJiaWRcIjtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlW3R5cGVdO1xuICAgICAgICBjdXJyZW50LnByaWNlID0gcHJpY2VbaXNCaWQgPyBcImludmVydFwiIDogXCJjbG9uZVwiXSgpO1xuICAgICAgICBjdXJyZW50LnByaWNlVGV4dCA9IGN1cnJlbnQucHJpY2UudG9SZWFsKCk7XG4gICAgICAgIGlmIChpc0JpZCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGN1cnJlbnQsIGlzQmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmUoY3VycmVudCwgaXNCaWQpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIF9vcmRlcmJvb2tDbGljayhvcmRlcikge1xuICAgICAgICBjb25zdCBpc0JpZCA9IG9yZGVyLmlzQmlkKCk7XG4gICAgICAgIC8qXG4gICAgICAgICogQmVjYXVzZSB3ZSBhcmUgdXNpbmcgYSBiaWQgb3JkZXIgdG8gY29uc3RydWN0IGFuIGFzayBhbmQgdmljZSB2ZXJzYSxcbiAgICAgICAgKiB0b3RhbFRvUmVjZWl2ZSBiZWNvbWVzIGZvclNhbGUsIGFuZCB0b3RhbEZvclNhbGUgYmVjb21lcyB0b1JlY2VpdmVcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGZvclNhbGUgPSBvcmRlci50b3RhbFRvUmVjZWl2ZSh7bm9DYWNoZTogdHJ1ZX0pO1xuICAgICAgICAvLyBsZXQgdG9SZWNlaXZlID0gb3JkZXIudG90YWxGb3JTYWxlKHtub0NhY2hlOiB0cnVlfSk7XG4gICAgICAgIGxldCB0b1JlY2VpdmUgPSBmb3JTYWxlLnRpbWVzKG9yZGVyLnNlbGxQcmljZSgpKTtcblxuICAgICAgICBsZXQgbmV3UHJpY2UgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgYmFzZTogaXNCaWQgPyB0b1JlY2VpdmUgOiBmb3JTYWxlLFxuICAgICAgICAgICAgcXVvdGU6IGlzQmlkID8gZm9yU2FsZSA6IHRvUmVjZWl2ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbaXNCaWQgPyBcImJpZFwiIDogXCJhc2tcIl07XG4gICAgICAgIGN1cnJlbnQucHJpY2UgPSBuZXdQcmljZTtcbiAgICAgICAgY3VycmVudC5wcmljZVRleHQgPSBuZXdQcmljZS50b1JlYWwoKTtcblxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAvLyBJZiBpc0JpZCBpcyB0cnVlLCBuZXdTdGF0ZSBkZWZpbmVzIGEgbmV3IGFzayBvcmRlciBhbmQgdmljZSB2ZXJzYVxuICAgICAgICAgICAgW2lzQmlkID8gXCJhc2tcIiA6IFwiYmlkXCJdOiB7XG4gICAgICAgICAgICAgICAgZm9yX3NhbGU6IGZvclNhbGUsXG4gICAgICAgICAgICAgICAgZm9yU2FsZVRleHQ6IGZvclNhbGUuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgdG9fcmVjZWl2ZTogdG9SZWNlaXZlLFxuICAgICAgICAgICAgICAgIHRvUmVjZWl2ZVRleHQ6IHRvUmVjZWl2ZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICBwcmljZTogbmV3UHJpY2UsXG4gICAgICAgICAgICAgICAgcHJpY2VUZXh0OiBuZXdQcmljZS50b1JlYWwoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpc0JpZCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGN1cnJlbnQsIGlzQmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmUoY3VycmVudCwgaXNCaWQpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgX2JvcnJvd1F1b3RlKCkge1xuICAgICAgICB0aGlzLnJlZnMuYm9ycm93UXVvdGUuc2hvdygpO1xuICAgIH1cblxuICAgIF9ib3Jyb3dCYXNlKCkge1xuICAgICAgICB0aGlzLnJlZnMuYm9ycm93QmFzZS5zaG93KCk7XG4gICAgfVxuXG4gICAgX2dldFNldHRsZW1lbnRJbmZvKCkge1xuICAgICAgICBsZXQge2xvd2VzdENhbGxQcmljZSwgZmVlZFByaWNlLCBxdW90ZUFzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHNob3dDYWxsTGltaXQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGZlZWRQcmljZSkge1xuICAgICAgICAgICAgaWYgKGZlZWRQcmljZS5pbnZlcnRlZCkge1xuICAgICAgICAgICAgICAgIHNob3dDYWxsTGltaXQgPSBsb3dlc3RDYWxsUHJpY2UgPD0gZmVlZFByaWNlLnRvUmVhbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0ID0gbG93ZXN0Q2FsbFByaWNlID49IGZlZWRQcmljZS50b1JlYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICBzaG93Q2FsbExpbWl0ICYmXG4gICAgICAgICAgICBsb3dlc3RDYWxsUHJpY2UgJiZcbiAgICAgICAgICAgICFxdW90ZUFzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGZWVBc3NldCh0eXBlLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiYnV5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGJ1eUZlZUFzc2V0SWR4OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgYnV5RmVlQXNzZXRJZHg6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGxGZWVBc3NldElkeDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIHNlbGxGZWVBc3NldElkeDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2VDaGFydEhlaWdodCh7dmFsdWUsIGluY3JlYXNlfSkge1xuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSB2YWx1ZVxuICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLmNoYXJ0SGVpZ2h0ICsgKGluY3JlYXNlID8gMjAgOiAtMjApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoYXJ0SGVpZ2h0OiBuZXdIZWlnaHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGNoYXJ0SGVpZ2h0OiBuZXdIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZUJ1eVNlbGxQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBidXlTZWxsVG9wOiAhdGhpcy5zdGF0ZS5idXlTZWxsVG9wXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBidXlTZWxsVG9wOiAhdGhpcy5zdGF0ZS5idXlTZWxsVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRSZWNlaXZlKHN0YXRlLCBpc0JpZCkge1xuICAgICAgICBpZiAoc3RhdGUucHJpY2UuaXNWYWxpZCgpICYmIHN0YXRlLmZvcl9zYWxlLmhhc0Ftb3VudCgpKSB7XG4gICAgICAgICAgICBzdGF0ZS50b19yZWNlaXZlID0gc3RhdGUuZm9yX3NhbGUudGltZXMoc3RhdGUucHJpY2UpO1xuICAgICAgICAgICAgc3RhdGUudG9SZWNlaXZlVGV4dCA9IHN0YXRlLnRvX3JlY2VpdmVcbiAgICAgICAgICAgICAgICAuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBfc2V0Rm9yU2FsZShzdGF0ZSwgaXNCaWQpIHtcbiAgICAgICAgaWYgKHN0YXRlLnByaWNlLmlzVmFsaWQoKSAmJiBzdGF0ZS50b19yZWNlaXZlLmhhc0Ftb3VudCgpKSB7XG4gICAgICAgICAgICBzdGF0ZS5mb3Jfc2FsZSA9IHN0YXRlLnRvX3JlY2VpdmUudGltZXMoc3RhdGUucHJpY2UsIHRydWUpO1xuICAgICAgICAgICAgc3RhdGUuZm9yU2FsZVRleHQgPSBzdGF0ZS5mb3Jfc2FsZVxuICAgICAgICAgICAgICAgIC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9zZXRQcmljZShzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuZm9yX3NhbGUuaGFzQW1vdW50KCkgJiYgc3RhdGUudG9fcmVjZWl2ZS5oYXNBbW91bnQoKSkge1xuICAgICAgICAgICAgc3RhdGUucHJpY2UgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgICAgIGJhc2U6IHN0YXRlLmZvcl9zYWxlLFxuICAgICAgICAgICAgICAgIHF1b3RlOiBzdGF0ZS50b19yZWNlaXZlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YXRlLnByaWNlVGV4dCA9IHN0YXRlLnByaWNlLnRvUmVhbCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgX3NldFByaWNlVGV4dChzdGF0ZSwgaXNCaWQpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEJhc2UgPSBzdGF0ZVtpc0JpZCA/IFwiZm9yX3NhbGVcIiA6IFwidG9fcmVjZWl2ZVwiXTtcbiAgICAgICAgY29uc3QgY3VycmVudFF1b3RlID0gc3RhdGVbaXNCaWQgPyBcInRvX3JlY2VpdmVcIiA6IFwiZm9yX3NhbGVcIl07XG4gICAgICAgIGlmIChjdXJyZW50QmFzZS5oYXNBbW91bnQoKSAmJiBjdXJyZW50UXVvdGUuaGFzQW1vdW50KCkpIHtcbiAgICAgICAgICAgIHN0YXRlLnByaWNlVGV4dCA9IG5ldyBQcmljZSh7XG4gICAgICAgICAgICAgICAgYmFzZTogY3VycmVudEJhc2UsXG4gICAgICAgICAgICAgICAgcXVvdGU6IGN1cnJlbnRRdW90ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9SZWFsKClcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbklucHV0UHJpY2UodHlwZSwgZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZV07XG4gICAgICAgIGNvbnN0IGlzQmlkID0gdHlwZSA9PT0gXCJiaWRcIjtcbiAgICAgICAgY3VycmVudC5wcmljZSA9IG5ldyBQcmljZSh7XG4gICAgICAgICAgICBiYXNlOiBjdXJyZW50W2lzQmlkID8gXCJmb3Jfc2FsZVwiIDogXCJ0b19yZWNlaXZlXCJdLFxuICAgICAgICAgICAgcXVvdGU6IGN1cnJlbnRbaXNCaWQgPyBcInRvX3JlY2VpdmVcIiA6IFwiZm9yX3NhbGVcIl0sXG4gICAgICAgICAgICByZWFsOiBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSB8fCAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0JpZCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGN1cnJlbnQsIGlzQmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmUoY3VycmVudCwgaXNCaWQpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50LnByaWNlVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgX29uSW5wdXRTZWxsKHR5cGUsIGlzQmlkLCBlKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZVt0eXBlXTtcbiAgICAgICAgLy8gY29uc3QgaXNCaWQgPSB0eXBlID09PSBcImJpZFwiO1xuICAgICAgICBjdXJyZW50LmZvcl9zYWxlLnNldEFtb3VudCh7cmVhbDogcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgfHwgMH0pO1xuICAgICAgICBpZiAoY3VycmVudC5wcmljZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmUoY3VycmVudCwgaXNCaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0UHJpY2UoY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50LmZvclNhbGVUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX3NldFByaWNlVGV4dChjdXJyZW50LCB0eXBlID09PSBcImJpZFwiKTtcblxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgX29uSW5wdXRSZWNlaXZlKHR5cGUsIGlzQmlkLCBlKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZVt0eXBlXTtcbiAgICAgICAgLy8gY29uc3QgaXNCaWQgPSB0eXBlID09PSBcImJpZFwiO1xuICAgICAgICBjdXJyZW50LnRvX3JlY2VpdmUuc2V0QW1vdW50KHtyZWFsOiBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSB8fCAwfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQucHJpY2UuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRGb3JTYWxlKGN1cnJlbnQsIGlzQmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFByaWNlKGN1cnJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudC50b1JlY2VpdmVUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX3NldFByaWNlVGV4dChjdXJyZW50LCB0eXBlID09PSBcImJpZFwiKTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlzTWFya2V0RnJvemVuKCkge1xuICAgICAgICBsZXQge2Jhc2VBc3NldCwgcXVvdGVBc3NldH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBiYXNlV2hpdGVMaXN0ID0gYmFzZUFzc2V0XG4gICAgICAgICAgICAuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIndoaXRlbGlzdF9tYXJrZXRzXCJdKVxuICAgICAgICAgICAgLnRvSlMoKTtcbiAgICAgICAgbGV0IHF1b3RlV2hpdGVMaXN0ID0gcXVvdGVBc3NldFxuICAgICAgICAgICAgLmdldEluKFtcIm9wdGlvbnNcIiwgXCJ3aGl0ZWxpc3RfbWFya2V0c1wiXSlcbiAgICAgICAgICAgIC50b0pTKCk7XG4gICAgICAgIGxldCBiYXNlQmxhY2tMaXN0ID0gYmFzZUFzc2V0XG4gICAgICAgICAgICAuZ2V0SW4oW1wib3B0aW9uc1wiLCBcImJsYWNrbGlzdF9tYXJrZXRzXCJdKVxuICAgICAgICAgICAgLnRvSlMoKTtcbiAgICAgICAgbGV0IHF1b3RlQmxhY2tMaXN0ID0gcXVvdGVBc3NldFxuICAgICAgICAgICAgLmdldEluKFtcIm9wdGlvbnNcIiwgXCJibGFja2xpc3RfbWFya2V0c1wiXSlcbiAgICAgICAgICAgIC50b0pTKCk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcXVvdGVXaGl0ZUxpc3QubGVuZ3RoICYmXG4gICAgICAgICAgICBxdW90ZVdoaXRlTGlzdC5pbmRleE9mKGJhc2VBc3NldC5nZXQoXCJpZFwiKSkgPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHtpc0Zyb3plbjogdHJ1ZSwgZnJvemVuQXNzZXQ6IHF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBiYXNlV2hpdGVMaXN0Lmxlbmd0aCAmJlxuICAgICAgICAgICAgYmFzZVdoaXRlTGlzdC5pbmRleE9mKHF1b3RlQXNzZXQuZ2V0KFwiaWRcIikpID09PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB7aXNGcm96ZW46IHRydWUsIGZyb3plbkFzc2V0OiBiYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHF1b3RlQmxhY2tMaXN0Lmxlbmd0aCAmJlxuICAgICAgICAgICAgcXVvdGVCbGFja0xpc3QuaW5kZXhPZihiYXNlQXNzZXQuZ2V0KFwiaWRcIikpICE9PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB7aXNGcm96ZW46IHRydWUsIGZyb3plbkFzc2V0OiBxdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKX07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYmFzZUJsYWNrTGlzdC5sZW5ndGggJiZcbiAgICAgICAgICAgIGJhc2VCbGFja0xpc3QuaW5kZXhPZihxdW90ZUFzc2V0LmdldChcImlkXCIpKSAhPT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4ge2lzRnJvemVuOiB0cnVlLCBmcm96ZW5Bc3NldDogYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKX07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lzRnJvemVuOiBmYWxzZX07XG4gICAgfVxuXG4gICAgX3RvZ2dsZUNoYXQoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICB2aWV3Q2hhdDogIXRoaXMucHJvcHMudmlld0NoYXRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZU1pbmlDaGFydCgpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIG1pbmlEZXB0aENoYXJ0OiAhdGhpcy5wcm9wcy5taW5pRGVwdGhDaGFydFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25Hcm91cE9yZGVyTGltaXRDaGFuZ2UoZSkge1xuICAgICAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZ3JvdXBMaW1pdCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgTWFya2V0c0FjdGlvbnMuY2hhbmdlQ3VycmVudEdyb3VwTGltaXQoZ3JvdXBMaW1pdCk7XG4gICAgICAgIGlmIChncm91cExpbWl0ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRHcm91cE9yZGVyTGltaXQpIHtcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmNoYW5nZUN1cnJlbnRHcm91cExpbWl0KGdyb3VwTGltaXQpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdWIgPSB0aGlzLnByb3BzLnN1Yi5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy51blN1YnNjcmliZU1hcmtldChjdXJyZW50U3ViWzBdLCBjdXJyZW50U3ViWzFdKS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJUb01hcmtldChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJ1Y2tldFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cExpbWl0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgbWFya2V0TGltaXRPcmRlcnMsXG4gICAgICAgICAgICBtYXJrZXRDYWxsT3JkZXJzLFxuICAgICAgICAgICAgbWFya2V0RGF0YSxcbiAgICAgICAgICAgIGFjdGl2ZU1hcmtldEhpc3RvcnksXG4gICAgICAgICAgICBpbnZlcnRlZENhbGxzLFxuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHMsXG4gICAgICAgICAgICBxdW90ZUFzc2V0LFxuICAgICAgICAgICAgYmFzZUFzc2V0LFxuICAgICAgICAgICAgbG93ZXN0Q2FsbFByaWNlLFxuICAgICAgICAgICAgbWFya2V0U3RhdHMsXG4gICAgICAgICAgICBtYXJrZXRSZWFkeSxcbiAgICAgICAgICAgIG1hcmtldFNldHRsZU9yZGVycyxcbiAgICAgICAgICAgIGJ1Y2tldFNpemUsXG4gICAgICAgICAgICB0b3RhbHMsXG4gICAgICAgICAgICBmZWVkUHJpY2UsXG4gICAgICAgICAgICBidWNrZXRzLFxuICAgICAgICAgICAgY29yZUFzc2V0LFxuICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZyxcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY29tYmluZWRCaWRzLFxuICAgICAgICAgICAgY29tYmluZWRBc2tzLFxuICAgICAgICAgICAgbG93ZXN0QXNrLFxuICAgICAgICAgICAgaGlnaGVzdEJpZCxcbiAgICAgICAgICAgIGZsYXRCaWRzLFxuICAgICAgICAgICAgZmxhdEFza3MsXG4gICAgICAgICAgICBmbGF0Q2FsbHMsXG4gICAgICAgICAgICBmbGF0U2V0dGxlcyxcbiAgICAgICAgICAgIGdyb3VwZWRCaWRzLFxuICAgICAgICAgICAgZ3JvdXBlZEFza3NcbiAgICAgICAgfSA9IG1hcmtldERhdGE7XG5cbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGJpZCxcbiAgICAgICAgICAgIGFzayxcbiAgICAgICAgICAgIGxlZnRPcmRlckJvb2ssXG4gICAgICAgICAgICBzaG93RGVwdGhDaGFydCxcbiAgICAgICAgICAgIGNoYXJ0SGVpZ2h0LFxuICAgICAgICAgICAgYnV5RGlmZixcbiAgICAgICAgICAgIHNlbGxEaWZmLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBidXlTZWxsVG9wLFxuICAgICAgICAgICAgaGlkZVBhbmVsXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7aXNGcm96ZW4sIGZyb3plbkFzc2V0fSA9IHRoaXMuaXNNYXJrZXRGcm96ZW4oKTtcblxuICAgICAgICBsZXQgYmFzZSA9IG51bGwsXG4gICAgICAgICAgICBxdW90ZSA9IG51bGwsXG4gICAgICAgICAgICBhY2NvdW50QmFsYW5jZSA9IG51bGwsXG4gICAgICAgICAgICBxdW90ZUJhbGFuY2UgPSBudWxsLFxuICAgICAgICAgICAgYmFzZUJhbGFuY2UgPSBudWxsLFxuICAgICAgICAgICAgY29yZUJhbGFuY2UgPSBudWxsLFxuICAgICAgICAgICAgcXVvdGVTeW1ib2wsXG4gICAgICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICAgICAgc2hvd0NhbGxMaW1pdCA9IGZhbHNlLFxuICAgICAgICAgICAgbGF0ZXN0LFxuICAgICAgICAgICAgY2hhbmdlQ2xhc3M7XG5cbiAgICAgICAgY29uc3Qgc2hvd1ZvbHVtZUNoYXJ0ID0gdGhpcy5wcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgXCJzaG93Vm9sdW1lQ2hhcnRcIixcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAocXVvdGVBc3NldC5zaXplICYmIGJhc2VBc3NldC5zaXplICYmIGN1cnJlbnRBY2NvdW50LnNpemUpIHtcbiAgICAgICAgICAgIGJhc2UgPSBiYXNlQXNzZXQ7XG4gICAgICAgICAgICBxdW90ZSA9IHF1b3RlQXNzZXQ7XG4gICAgICAgICAgICBiYXNlU3ltYm9sID0gYmFzZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICBxdW90ZVN5bWJvbCA9IHF1b3RlLmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICAgICAgYWNjb3VudEJhbGFuY2UgPSBjdXJyZW50QWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG5cbiAgICAgICAgICAgIGlmIChhY2NvdW50QmFsYW5jZSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGlkIGluIGFjY291bnRCYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PT0gcXVvdGUuZ2V0KFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQmFsYW5jZSA9IGFjY291bnRCYWxhbmNlW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT09IGJhc2UuZ2V0KFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VCYWxhbmNlID0gYWNjb3VudEJhbGFuY2VbaWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCA9PT0gXCIxLjMuMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlQmFsYW5jZSA9IGFjY291bnRCYWxhbmNlW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hvd0NhbGxMaW1pdCA9IHRoaXMuX2dldFNldHRsZW1lbnRJbmZvKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcXVvdGVJc0JpdEFzc2V0ID0gcXVvdGVBc3NldC5nZXQoXCJiaXRhc3NldF9kYXRhX2lkXCIpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBsZXQgYmFzZUlzQml0QXNzZXQgPSBiYXNlQXNzZXQuZ2V0KFwiYml0YXNzZXRfZGF0YV9pZFwiKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBsZXQgc3ByZWFkID1cbiAgICAgICAgICAgIGxvd2VzdEFzayAmJiBoaWdoZXN0QmlkXG4gICAgICAgICAgICAgICAgPyBsb3dlc3RBc2suZ2V0UHJpY2UoKSAtIGhpZ2hlc3RCaWQuZ2V0UHJpY2UoKVxuICAgICAgICAgICAgICAgIDogMDtcblxuICAgICAgICAvLyBMYXRlc3QgcHJpY2VcbiAgICAgICAgaWYgKGFjdGl2ZU1hcmtldEhpc3Rvcnkuc2l6ZSkge1xuICAgICAgICAgICAgbGV0IGxhdGVzdF90d28gPSBhY3RpdmVNYXJrZXRIaXN0b3J5LnRha2UoMik7XG4gICAgICAgICAgICBsYXRlc3QgPSBsYXRlc3RfdHdvLmZpcnN0KCk7XG4gICAgICAgICAgICBsZXQgc2Vjb25kX2xhdGVzdCA9IGxhdGVzdF90d28ubGFzdCgpO1xuXG4gICAgICAgICAgICBjaGFuZ2VDbGFzcyA9XG4gICAgICAgICAgICAgICAgbGF0ZXN0LmdldFByaWNlKCkgPT09IHNlY29uZF9sYXRlc3QuZ2V0UHJpY2UoKVxuICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgOiBsYXRlc3QuZ2V0UHJpY2UoKSAtIHNlY29uZF9sYXRlc3QuZ2V0UHJpY2UoKSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNoYW5nZS1kb3duXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGZWVzXG4gICAgICAgIGlmICghY29yZUFzc2V0IHx8ICFPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmZlZVN0YXR1cykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBzZWxsRmVlQXNzZXQsXG4gICAgICAgICAgICBzZWxsRmVlQXNzZXRzLFxuICAgICAgICAgICAgc2VsbEZlZSxcbiAgICAgICAgICAgIGJ1eUZlZUFzc2V0LFxuICAgICAgICAgICAgYnV5RmVlQXNzZXRzLFxuICAgICAgICAgICAgYnV5RmVlXG4gICAgICAgIH0gPSB0aGlzLl9nZXRGZWVBc3NldHMocXVvdGUsIGJhc2UsIGNvcmVBc3NldCk7XG5cbiAgICAgICAgLy8gRGVjaW1hbHNcbiAgICAgICAgbGV0IGhhc1ByZWRpY3Rpb24gPVxuICAgICAgICAgICAgYmFzZS5nZXRJbihbXCJiaXRhc3NldFwiLCBcImlzX3ByZWRpY3Rpb25fbWFya2V0XCJdKSB8fFxuICAgICAgICAgICAgcXVvdGUuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSk7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gbnVsbDtcblxuICAgICAgICBpZiAoaGFzUHJlZGljdGlvbikge1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBxdW90ZUFzc2V0LmdldEluKFtcIm9wdGlvbnNcIiwgXCJkZXNjcmlwdGlvblwiXSk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikubWFpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzbWFsbFNjcmVlbiA9IGZhbHNlO1xuICAgICAgICBpZiAod2lkdGggPCAxMDAwKSB7XG4gICAgICAgICAgICBzbWFsbFNjcmVlbiA9IHRydWU7XG4gICAgICAgICAgICBsZWZ0T3JkZXJCb29rID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3JkZXJNdWx0aXBsaWVyID0gbGVmdE9yZGVyQm9vayA/IDIgOiAxO1xuICAgICAgICBjb25zdCBtaW5DaGFydEhlaWdodCA9IDMwMDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmhlaWdodCA+IDExMDAgPyBjaGFydEhlaWdodCA6IGNoYXJ0SGVpZ2h0IC0gMTI1LFxuICAgICAgICAgICAgbWluQ2hhcnRIZWlnaHRcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZXhwaXJhdGlvblR5cGUgPSB0aGlzLnN0YXRlLmV4cGlyYXRpb25UeXBlO1xuICAgICAgICBsZXQgZXhwaXJhdGlvbkN1c3RvbVRpbWUgPSB0aGlzLnN0YXRlLmV4cGlyYXRpb25DdXN0b21UaW1lO1xuXG4gICAgICAgIGxldCBpc1BhbmVsQWN0aXZlID0gIWhpZGVQYW5lbCAmJiAhc21hbGxTY3JlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGxldCB2ZXJ0aWNhbFBhbmVsVG9nZ2xlID0gIXNtYWxsU2NyZWVuID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCJhdXRvXCIsIHBhZGRpbmdUb3A6IFwiY2FsYyg1MHZoIC0gMTIwcHgpXCJ9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVBhbmVsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT17aGlkZVBhbmVsID8gXCJjYXJldC1sZWZ0XCIgOiBcImNhcmV0LXJpZ2h0XCJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgbGV0IGJ1eUZvcm0gPSBpc0Zyb3plbiA/IG51bGwgOiAoXG4gICAgICAgICAgICA8QnV5U2VsbFxuICAgICAgICAgICAgICAgIG9uQm9ycm93PXtiYXNlSXNCaXRBc3NldCA/IHRoaXMuX2JvcnJvd0Jhc2UuYmluZCh0aGlzKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e2N1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgIGJhY2tlZENvaW49e3RoaXMucHJvcHMuYmFja2VkQ29pbnMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgYSA9PiBhLnN5bWJvbCA9PT0gYmFzZS5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRCcmlkZ2VzPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5icmlkZ2VDb2lucy5nZXQoYmFzZS5nZXQoXCJzeW1ib2xcIikpIHx8IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc21hbGxTY3JlZW49e3NtYWxsU2NyZWVufVxuICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5idXlTZWxsT3Blbn1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZU9wZW49e3RoaXMuX3RvZ2dsZU9wZW5CdXlTZWxsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIFwic21hbGwtMTIgbm8tcGFkZGluZyBtaWRkbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0T3JkZXJCb29rIHx8IHNtYWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibWVkaXVtLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm1lZGl1bS02IHhsYXJnZS00XCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmxpcEJ1eVNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYG9yZGVyLSR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlTZWxsVG9wID8gMiA6IDUgKiBvcmRlck11bHRpcGxpZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBzZWxsLWZvcm1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBvcmRlci0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5U2VsbFRvcCA/IDEgOiA0ICogb3JkZXJNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gYnV5LWZvcm1gXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYmlkXCJcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uVHlwZT17ZXhwaXJhdGlvblR5cGVbXCJiaWRcIl19XG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbnM9e3RoaXMuRVhQSVJBVElPTlN9XG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbkN1c3RvbVRpbWU9e2V4cGlyYXRpb25DdXN0b21UaW1lW1wiYmlkXCJdfVxuICAgICAgICAgICAgICAgIG9uRXhwaXJhdGlvblR5cGVDaGFuZ2U9e3RoaXMuX2hhbmRsZUV4cGlyYXRpb25DaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgXCJiaWRcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25FeHBpcmF0aW9uQ3VzdG9tQ2hhbmdlPXt0aGlzLl9oYW5kbGVDdXN0b21FeHBpcmF0aW9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIFwiYmlkXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGFtb3VudD17YmlkLnRvUmVjZWl2ZVRleHR9XG4gICAgICAgICAgICAgICAgcHJpY2U9e2JpZC5wcmljZVRleHR9XG4gICAgICAgICAgICAgICAgdG90YWw9e2JpZC5mb3JTYWxlVGV4dH1cbiAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICBhbW91bnRDaGFuZ2U9e3RoaXMuX29uSW5wdXRSZWNlaXZlLmJpbmQodGhpcywgXCJiaWRcIiwgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgcHJpY2VDaGFuZ2U9e3RoaXMuX29uSW5wdXRQcmljZS5iaW5kKHRoaXMsIFwiYmlkXCIpfVxuICAgICAgICAgICAgICAgIHNldFByaWNlPXt0aGlzLl9jdXJyZW50UHJpY2VDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHRvdGFsQ2hhbmdlPXt0aGlzLl9vbklucHV0U2VsbC5iaW5kKHRoaXMsIFwiYmlkXCIsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICBiYWxhbmNlPXtiYXNlQmFsYW5jZX1cbiAgICAgICAgICAgICAgICBiYWxhbmNlSWQ9e2Jhc2UuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuX2NyZWF0ZUxpbWl0T3JkZXJDb25maXJtLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICBiYXNlQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgY29yZUJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGJ1eUZlZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBcImJ1eVwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBiYWxhbmNlUHJlY2lzaW9uPXtiYXNlLmdldChcInByZWNpc2lvblwiKX1cbiAgICAgICAgICAgICAgICBxdW90ZVByZWNpc2lvbj17cXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpfVxuICAgICAgICAgICAgICAgIHRvdGFsUHJlY2lzaW9uPXtiYXNlLmdldChcInByZWNpc2lvblwiKX1cbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2U9e2xvd2VzdEFzay5nZXRQcmljZSgpfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZU9iamVjdD17bG93ZXN0QXNrfVxuICAgICAgICAgICAgICAgIGFjY291bnQ9e2N1cnJlbnRBY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgZmVlPXtidXlGZWV9XG4gICAgICAgICAgICAgICAgaGFzRmVlQmFsYW5jZT17dGhpcy5zdGF0ZS5mZWVTdGF0dXNbYnV5RmVlLmFzc2V0X2lkXS5oYXNCYWxhbmNlfVxuICAgICAgICAgICAgICAgIGZlZUFzc2V0cz17YnV5RmVlQXNzZXRzfVxuICAgICAgICAgICAgICAgIGZlZUFzc2V0PXtidXlGZWVBc3NldH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUZlZUFzc2V0PXt0aGlzLm9uQ2hhbmdlRmVlQXNzZXQuYmluZCh0aGlzLCBcImJ1eVwiKX1cbiAgICAgICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXQ9e2Jhc2UuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIlxuICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgIG9uRmxpcD17XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuX2ZsaXBCdXlTZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZmxpcEJ1eVNlbGwuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZVBvc2l0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuX3RvZ2dsZUJ1eVNlbGxQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl90b2dnbGVCdXlTZWxsUG9zaXRpb24uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2VsbEZvcm0gPSBpc0Zyb3plbiA/IG51bGwgOiAoXG4gICAgICAgICAgICA8QnV5U2VsbFxuICAgICAgICAgICAgICAgIG9uQm9ycm93PXtxdW90ZUlzQml0QXNzZXQgPyB0aGlzLl9ib3Jyb3dRdW90ZS5iaW5kKHRoaXMpIDogbnVsbH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17Y3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgYmFja2VkQ29pbj17dGhpcy5wcm9wcy5iYWNrZWRDb2lucy5maW5kKFxuICAgICAgICAgICAgICAgICAgICBhID0+IGEuc3ltYm9sID09PSBxdW90ZS5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRCcmlkZ2VzPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5icmlkZ2VDb2lucy5nZXQocXVvdGUuZ2V0KFwic3ltYm9sXCIpKSB8fCBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNtYWxsU2NyZWVuPXtzbWFsbFNjcmVlbn1cbiAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuYnV5U2VsbE9wZW59XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVPcGVuPXt0aGlzLl90b2dnbGVPcGVuQnV5U2VsbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICBcInNtYWxsLTEyIG5vLXBhZGRpbmcgbWlkZGxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgbGVmdE9yZGVyQm9vayB8fCBzbWFsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1lZGl1bS02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJtZWRpdW0tNiB4bGFyZ2UtNFwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZsaXBCdXlTZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBvcmRlci0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5U2VsbFRvcCA/IDEgOiA0ICogb3JkZXJNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gYnV5LWZvcm1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBvcmRlci0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5U2VsbFRvcCA/IDIgOiA1ICogb3JkZXJNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gc2VsbC1mb3JtYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgdHlwZT1cImFza1wiXG4gICAgICAgICAgICAgICAgYW1vdW50PXthc2suZm9yU2FsZVRleHR9XG4gICAgICAgICAgICAgICAgcHJpY2U9e2Fzay5wcmljZVRleHR9XG4gICAgICAgICAgICAgICAgdG90YWw9e2Fzay50b1JlY2VpdmVUZXh0fVxuICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UeXBlPXtleHBpcmF0aW9uVHlwZVtcImFza1wiXX1cbiAgICAgICAgICAgICAgICBleHBpcmF0aW9ucz17dGhpcy5FWFBJUkFUSU9OU31cbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uQ3VzdG9tVGltZT17ZXhwaXJhdGlvbkN1c3RvbVRpbWVbXCJhc2tcIl19XG4gICAgICAgICAgICAgICAgb25FeHBpcmF0aW9uVHlwZUNoYW5nZT17dGhpcy5faGFuZGxlRXhwaXJhdGlvbkNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBcImFza1wiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBvbkV4cGlyYXRpb25DdXN0b21DaGFuZ2U9e3RoaXMuX2hhbmRsZUN1c3RvbUV4cGlyYXRpb25DaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgXCJhc2tcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgYW1vdW50Q2hhbmdlPXt0aGlzLl9vbklucHV0U2VsbC5iaW5kKHRoaXMsIFwiYXNrXCIsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICBwcmljZUNoYW5nZT17dGhpcy5fb25JbnB1dFByaWNlLmJpbmQodGhpcywgXCJhc2tcIil9XG4gICAgICAgICAgICAgICAgc2V0UHJpY2U9e3RoaXMuX2N1cnJlbnRQcmljZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgdG90YWxDaGFuZ2U9e3RoaXMuX29uSW5wdXRSZWNlaXZlLmJpbmQodGhpcywgXCJhc2tcIiwgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgYmFsYW5jZT17cXVvdGVCYWxhbmNlfVxuICAgICAgICAgICAgICAgIGJhbGFuY2VJZD17cXVvdGUuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuX2NyZWF0ZUxpbWl0T3JkZXJDb25maXJtLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICBxdW90ZUJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGNvcmVCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBzZWxsRmVlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsbFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBiYWxhbmNlUHJlY2lzaW9uPXtxdW90ZS5nZXQoXCJwcmVjaXNpb25cIil9XG4gICAgICAgICAgICAgICAgcXVvdGVQcmVjaXNpb249e3F1b3RlLmdldChcInByZWNpc2lvblwiKX1cbiAgICAgICAgICAgICAgICB0b3RhbFByZWNpc2lvbj17YmFzZS5nZXQoXCJwcmVjaXNpb25cIil9XG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlPXtoaWdoZXN0QmlkLmdldFByaWNlKCl9XG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlT2JqZWN0PXtoaWdoZXN0QmlkfVxuICAgICAgICAgICAgICAgIGFjY291bnQ9e2N1cnJlbnRBY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgZmVlPXtzZWxsRmVlfVxuICAgICAgICAgICAgICAgIGhhc0ZlZUJhbGFuY2U9e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZlZVN0YXR1c1tzZWxsRmVlLmFzc2V0X2lkXS5oYXNCYWxhbmNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZlZUFzc2V0cz17c2VsbEZlZUFzc2V0c31cbiAgICAgICAgICAgICAgICBmZWVBc3NldD17c2VsbEZlZUFzc2V0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRmVlQXNzZXQ9e3RoaXMub25DaGFuZ2VGZWVBc3NldC5iaW5kKHRoaXMsIFwic2VsbFwiKX1cbiAgICAgICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXQ9e3F1b3RlLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICBcImlzX3ByZWRpY3Rpb25fbWFya2V0XCJcbiAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICBvbkZsaXA9e1xuICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5fZmxpcEJ1eVNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZmxpcEJ1eVNlbGwuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlUG9zaXRpb249e1xuICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5fdG9nZ2xlQnV5U2VsbFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3RvZ2dsZUJ1eVNlbGxQb3NpdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBvcmRlckJvb2sgPSAoXG4gICAgICAgICAgICA8T3JkZXJCb29rXG4gICAgICAgICAgICAgICAgbGF0ZXN0PXtsYXRlc3QgJiYgbGF0ZXN0LmdldFByaWNlKCl9XG4gICAgICAgICAgICAgICAgY2hhbmdlQ2xhc3M9e2NoYW5nZUNsYXNzfVxuICAgICAgICAgICAgICAgIG9yZGVycz17bWFya2V0TGltaXRPcmRlcnN9XG4gICAgICAgICAgICAgICAgY2FsbHM9e21hcmtldENhbGxPcmRlcnN9XG4gICAgICAgICAgICAgICAgaW52ZXJ0ZWRDYWxscz17aW52ZXJ0ZWRDYWxsc31cbiAgICAgICAgICAgICAgICBjb21iaW5lZEJpZHM9e2NvbWJpbmVkQmlkc31cbiAgICAgICAgICAgICAgICBjb21iaW5lZEFza3M9e2NvbWJpbmVkQXNrc31cbiAgICAgICAgICAgICAgICBoaWdoZXN0QmlkPXtoaWdoZXN0QmlkfVxuICAgICAgICAgICAgICAgIGxvd2VzdEFzaz17bG93ZXN0QXNrfVxuICAgICAgICAgICAgICAgIHRvdGFsQmlkcz17dG90YWxzLmJpZH1cbiAgICAgICAgICAgICAgICB0b3RhbEFza3M9e3RvdGFscy5hc2t9XG4gICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cbiAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbD17cXVvdGVTeW1ib2x9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb3JkZXJib29rQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBob3Jpem9udGFsPXshbGVmdE9yZGVyQm9va31cbiAgICAgICAgICAgICAgICBtb3ZlT3JkZXJCb29rPXt0aGlzLl9tb3ZlT3JkZXJCb29rLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgZmxpcE9yZGVyQm9vaz17dGhpcy5wcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiZmxpcE9yZGVyQm9va1wiKX1cbiAgICAgICAgICAgICAgICBtYXJrZXRSZWFkeT17bWFya2V0UmVhZHl9XG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzPXtgb3JkZXItJHtidXlTZWxsVG9wID8gMyA6IDF9IHhsYXJnZS1vcmRlci0ke1xuICAgICAgICAgICAgICAgICAgICBidXlTZWxsVG9wID8gNCA6IDFcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICBoYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2U9e3RoaXMuX29uR3JvdXBPcmRlckxpbWl0Q2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHRyYWNrZWRHcm91cHNDb25maWc9e3RyYWNrZWRHcm91cHNDb25maWd9XG4gICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdD17Y3VycmVudEdyb3VwT3JkZXJMaW1pdH1cbiAgICAgICAgICAgICAgICBncm91cGVkQmlkcz17Z3JvdXBlZEJpZHN9XG4gICAgICAgICAgICAgICAgZ3JvdXBlZEFza3M9e2dyb3VwZWRBc2tzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLm1hcmtldFJlYWR5ID8gPExvYWRpbmdJbmRpY2F0b3IgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIDxFeGNoYW5nZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0PXtxdW90ZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXQ9e2Jhc2VBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgaGFzUHJlZGljdGlvbj17aGFzUHJlZGljdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM9e3N0YXJyZWRNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICBsb3dlc3RBc2s9e2xvd2VzdEFza31cbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdEJpZD17aGlnaGVzdEJpZH1cbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0Q2FsbFByaWNlPXtsb3dlc3RDYWxsUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIHNob3dDYWxsTGltaXQ9e3Nob3dDYWxsTGltaXR9XG4gICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZT17ZmVlZFByaWNlfVxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRSZWFkeT17bWFya2V0UmVhZHl9XG4gICAgICAgICAgICAgICAgICAgIGxhdGVzdFByaWNlPXtsYXRlc3QgJiYgbGF0ZXN0LmdldFByaWNlKCl9XG4gICAgICAgICAgICAgICAgICAgIHNob3dEZXB0aENoYXJ0PXtzaG93RGVwdGhDaGFydH1cbiAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHM9e21hcmtldFN0YXRzfVxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZUNoYXJ0cz17dGhpcy5fdG9nZ2xlQ2hhcnRzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlTWFya2V0UGlja2VyPXt0aGlzLl90b2dnbGVNYXJrZXRQaWNrZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgc2hvd1ZvbHVtZUNoYXJ0PXtzaG93Vm9sdW1lQ2hhcnR9XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0SGVpZ2h0PXtjaGFydEhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGFydEhlaWdodD17dGhpcy5vbkNoYW5nZUNoYXJ0SGVpZ2h0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dCBtYXJrZXQtbGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIHshIXRoaXMuc3RhdGUuc2hvd01hcmtldFBpY2tlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZXRQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRQaWNrZXJBc3NldD17dGhpcy5zdGF0ZS5tYXJrZXRQaWNrZXJBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZU1hcmtldFBpY2tlcj17dGhpcy5fdG9nZ2xlTWFya2V0UGlja2VyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvdW50Tm90aWZpY2F0aW9ucyAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogTWFpbiB2ZXJ0aWNhbCBibG9jayB3aXRoIGNvbnRlbnQgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIExlZnQgQ29sdW1uIC0gT3BlbiBPcmRlcnMgKi99XG4gICAgICAgICAgICAgICAgICAgIHtsZWZ0T3JkZXJCb29rID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGxlZnQtY29sdW1uIHNocmluayBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlckJvb2t9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIENlbnRlciBDb2x1bW4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IHZlcnRpY2FsIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLXBhZGRpbmcgcHMtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkNlbnRlckNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzaG93RGVwdGhDaGFydCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtYXJrZXQtY2hhcnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByaWNlIGhpc3RvcnkgY2hhcnQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhZGluZ1ZpZXdQcmljZUNoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXt0aGlzLnByb3BzLmxvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmVlZD17dGhpcy5wcm9wcy5kYXRhRmVlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sPXtiYXNlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sPXtxdW90ZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0T3JkZXJCb29rPXtsZWZ0T3JkZXJCb29rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17dGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhlbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldHM9e2J1Y2tldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0U2l6ZT17YnVja2V0U2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGVyaW9kPXt0aGlzLnN0YXRlLmN1cnJlbnRQZXJpb2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRIZWlnaHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhlaWdodCA+IDExMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2hhcnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhcnRIZWlnaHQgLSAxNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlPXt3aWR0aCA8IDgwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1wYWRkaW5nIHNocmlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlcHRoSGlnaENoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0UmVhZHk9e21hcmtldFJlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycz17bWFya2V0TGltaXRPcmRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbGxMaW1pdD17c2hvd0NhbGxMaW1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsX29yZGVycz17bWFya2V0Q2FsbE9yZGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0X2Fza3M9e2ZsYXRBc2tzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRfYmlkcz17ZmxhdEJpZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9jYWxscz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYWxsTGltaXQgPyBmbGF0Q2FsbHMgOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0X3NldHRsZXM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd1NldHRsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmIGZsYXRTZXR0bGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRsZXM9e21hcmtldFNldHRsZU9yZGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZENhbGxzPXtpbnZlcnRlZENhbGxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQmlkcz17dG90YWxzLmJpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEFza3M9e3RvdGFscy5hc2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPiAxMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXJ0SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXJ0SGVpZ2h0IC0gMTUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2RlcHRoQ2hhcnRDbGljay5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhhc1ByZWRpY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZS50b1JlYWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJlYWQ9e3NwcmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMQ1A9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGxvd2VzdENhbGxQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRPcmRlckJvb2s9e2xlZnRPcmRlckJvb2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUHJlZGljdGlvbj17aGFzUHJlZGljdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0ZyYW1lPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9yZGVyYm9vaz17bGVmdE9yZGVyQm9va31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT17dGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhlbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclJlZj17dGhpcy5yZWZzLmNlbnRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tb3ZlcmZsb3cgd3JhcCBzaHJpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1ByZWRpY3Rpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGwtMTIgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjJyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNGcm96ZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3Igc21hbGwtMTIgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjJyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X2Zyb3plblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtmcm96ZW5Bc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1eUZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxsRm9ybX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0SGlzdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNtYWxsU2NyZWVuICYmICFsZWZ0T3JkZXJCb29rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtZWRpdW0tNiB4bGFyZ2UtNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vLXBhZGRpbmcgbm8tb3ZlcmZsb3cgbWlkZGxlLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTYgb3JkZXItNSB4bGFyZ2Utb3JkZXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyU3R5bGU9e3twYWRkaW5nVG9wOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e2FjdGl2ZU1hcmtldEhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17Y3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUhpc3Rvcnk9e2N1cnJlbnRBY2NvdW50LmdldChcImhpc3RvcnlcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sPXtxdW90ZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWxlZnRPcmRlckJvb2sgPyBvcmRlckJvb2sgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb25maXJtT3JkZXJNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJidXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3JjZT17dGhpcy5fZm9yY2VCdXkuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5RmVlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZUJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmPXtidXlEaWZmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3JkZXJzPXtjb21iaW5lZEFza3MubGVuZ3RoID4gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29uZmlybU9yZGVyTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3JjZT17dGhpcy5fZm9yY2VTZWxsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxsRmVlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmVCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZj17c2VsbERpZmZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNPcmRlcnM9e2NvbWJpbmVkQmlkcy5sZW5ndGggPiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRMaW1pdE9yZGVycy5zaXplID4gMCAmJiBiYXNlICYmIHF1b3RlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15T3Blbk9yZGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsU2NyZWVuPXt0aGlzLnByb3BzLnNtYWxsU2NyZWVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc21hbGxTY3JlZW4gJiYgIWxlZnRPcmRlckJvb2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtZWRpdW0tNiB4bGFyZ2UtNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzbWFsbC0xMiBtZWRpdW0tNiBuby1wYWRkaW5nIGFsaWduLXNwYWNlZCBwcy1jb250YWluZXIgbWlkZGxlLWNvbnRlbnQgb3JkZXItJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eVNlbGxUb3AgPyA2IDogNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwib3Blbl9vcmRlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycz17bWFya2V0TGltaXRPcmRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlT3JkZXJzPXttYXJrZXRTZXR0bGVPcmRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e2N1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2w9e2Jhc2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2w9e3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYj17dGhpcy5wcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyc1RhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5fY2FuY2VsTGltaXRPcmRlci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGlwTXlPcmRlcnM9e3RoaXMucHJvcHMudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGlwTXlPcmRlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlPXt0aGlzLnByb3BzLmZlZWRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZW5kIENlbnRlckNvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogRW5kIG9mIE1haW4gQ29udGVudCBDb2x1bW4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFJpZ2h0IENvbHVtbiAtIE1hcmtldCBIaXN0b3J5ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayByaWdodC1jb2x1bW4gbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogNDUwfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZlcnRpY2FsUGFuZWxUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzUGFuZWxBY3RpdmUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttaW5XaWR0aDogMzU4fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgcmlnaHQtY29sdW1uIG5vLW92ZXJmbG93IHZlcnRpY2FsIG5vLXBhZGRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1hcmtldCBIaXN0b3J5ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZyBuby1tYXJnaW4gdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeU1hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LW9yZGVyLWJvb2sgbm8tcGFkZGluZyBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyU3R5bGU9e3twYWRkaW5nVG9wOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcInN0YXJcIiwgaW5kZXg6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJtYXJrZXRcIiwgaW5kZXg6IDJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJ2b2xcIiwgaW5kZXg6IDN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJwcmljZVwiLCBpbmRleDogNH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcImNoYW5nZVwiLCBpbmRleDogNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRDb2x1bW5zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIm1hcmtldFwiLCBpbmRleDogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcImlzc3VlclwiLCBpbmRleDogMn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcInZvbFwiLCBpbmRleDogM30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcImFkZFwiLCBpbmRleDogNH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2Ake3F1b3RlU3ltYm9sfV8ke2Jhc2VTeW1ib2x9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICF0aGlzLnByb3BzLnZpZXdDaGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiMCAwIDAgMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1tYXJnaW4gdmVydGljYWwgc2hyaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUNoYXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1jb250ZW50LWhlYWRlciBjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZpZXdDaGF0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mIzk2NjA7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiYjOTY1MDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS50cm9sbGJveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudmlld0NoYXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYXRCcm8gaGVpZ2h0PXtcIjMwMHB4XCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1pbmkgRGVwdGggQ2hhcnQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogIXRoaXMucHJvcHMubWluaURlcHRoQ2hhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIwIDAgNDBweCAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLW1hcmdpbiB2ZXJ0aWNhbCBzaHJpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlTWluaUNoYXJ0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyIGNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWluaURlcHRoQ2hhcnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiYjOTY2MDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JiM5NjUwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5taW5pRGVwdGhDaGFydCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVwdGhIaWdoQ2hhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0UmVhZHk9e21hcmtldFJlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnM9e21hcmtldExpbWl0T3JkZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0PXtzaG93Q2FsbExpbWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsX29yZGVycz17bWFya2V0Q2FsbE9yZGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9hc2tzPXtmbGF0QXNrc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9iaWRzPXtmbGF0Qmlkc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9jYWxscz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0ID8gZmxhdENhbGxzIDogW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0X3NldHRsZXM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93U2V0dGxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmIGZsYXRTZXR0bGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlcz17bWFya2V0U2V0dGxlT3JkZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZENhbGxzPXtpbnZlcnRlZENhbGxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJpZHM9e3RvdGFscy5iaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXNrcz17dG90YWxzLmFza31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fZGVwdGhDaGFydENsaWNrLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRsZW1lbnRQcmljZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGFzUHJlZGljdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UudG9SZWFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJlYWQ9e3NwcmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTENQPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYWxsTGltaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGxvd2VzdENhbGxQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRPcmRlckJvb2s9e2xlZnRPcmRlckJvb2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByZWRpY3Rpb249e2hhc1ByZWRpY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGV4dD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGVtZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7cXVvdGVJc0JpdEFzc2V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvcnJvd01vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYm9ycm93UXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcnJvd19tb2RhbF9xdW90ZV9cIiArIHF1b3RlQXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlQXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2luZ19hc3NldD17cXVvdGVBc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17Y3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge2Jhc2VJc0JpdEFzc2V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvcnJvd01vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYm9ycm93QmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxJZD17XCJib3Jyb3dfbW9kYWxfYmFzZV9cIiArIGJhc2VBc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17YmFzZUFzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tpbmdfYXNzZXQ9e2Jhc2VBc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17Y3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBTZWNvbmQgVmVydGljYWwgQmxvY2sgKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByaWNlVGV4dCBmcm9tIFwiLi4vVXRpbGl0eS9QcmljZVRleHRcIjtcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCB7U3RpY2t5VGFibGV9IGZyb20gXCJyZWFjdC1zdGlja3ktdGFibGVcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmNvbnN0IGNvdW50ZXJwYXJ0ID0gcmVxdWlyZShcImNvdW50ZXJwYXJ0XCIpO1xuXG5jbGFzcyBPcmRlckJvb2tSb3dWZXJ0aWNhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIGlmIChucC5vcmRlci5tYXJrZXRfYmFzZSAhPT0gdGhpcy5wcm9wcy5vcmRlci5tYXJrZXRfYmFzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbnAub3JkZXIubmUodGhpcy5wcm9wcy5vcmRlcikgfHxcbiAgICAgICAgICAgIG5wLmluZGV4ICE9PSB0aGlzLnByb3BzLmluZGV4IHx8XG4gICAgICAgICAgICBucC5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtvcmRlciwgcXVvdGUsIGJhc2UsIGZpbmFsfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGlzQmlkID0gb3JkZXIuaXNCaWQoKTtcbiAgICAgICAgY29uc3QgaXNDYWxsID0gb3JkZXIuaXNDYWxsKCk7XG4gICAgICAgIGxldCBpbnRlZ2VyQ2xhc3MgPSBpc0NhbGxcbiAgICAgICAgICAgID8gXCJvcmRlckhpc3RvcnlDYWxsXCJcbiAgICAgICAgICAgIDogaXNCaWRcbiAgICAgICAgICAgICAgICA/IFwib3JkZXJIaXN0b3J5QmlkXCJcbiAgICAgICAgICAgICAgICA6IFwib3JkZXJIaXN0b3J5QXNrXCI7XG5cbiAgICAgICAgbGV0IHByaWNlID0gKFxuICAgICAgICAgICAgPFByaWNlVGV4dCBwcmljZT17b3JkZXIuZ2V0UHJpY2UoKX0gcXVvdGU9e3F1b3RlfSBiYXNlPXtiYXNlfSAvPlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIFwic3RpY2t5LXRhYmxlLXJvdyBvcmRlci1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAge1wiZmluYWwtcm93XCI6IGZpbmFsfSxcbiAgICAgICAgICAgICAgICAgICAge1wibXktb3JkZXJcIjogb3JkZXIuaXNNaW5lKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYW1vdW50Rm9yU2FsZVwiIDogXCJhbW91bnRUb1JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYW1vdW50VG9SZWNlaXZlXCIgOiBcImFtb3VudEZvclNhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjZWxsICR7aW50ZWdlckNsYXNzfSByaWdodGB9PntwcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgZWxlbUhlaWdodCA9IGVsZW0gPT4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbmNsYXNzIE9yZGVyQm9va1Jvd0hvcml6b250YWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbnAub3JkZXIubmUodGhpcy5wcm9wcy5vcmRlcikgfHxcbiAgICAgICAgICAgIG5wLnBvc2l0aW9uICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uIHx8XG4gICAgICAgICAgICBucC5pbmRleCAhPT0gdGhpcy5wcm9wcy5pbmRleCB8fFxuICAgICAgICAgICAgbnAuY3VycmVudEFjY291bnQgIT09IHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7b3JkZXIsIHF1b3RlLCBiYXNlLCBwb3NpdGlvbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpc0JpZCA9IG9yZGVyLmlzQmlkKCk7XG4gICAgICAgIGNvbnN0IGlzQ2FsbCA9IG9yZGVyLmlzQ2FsbCgpO1xuXG4gICAgICAgIGxldCBpbnRlZ2VyQ2xhc3MgPSBpc0NhbGxcbiAgICAgICAgICAgID8gXCJvcmRlckhpc3RvcnlDYWxsXCJcbiAgICAgICAgICAgIDogaXNCaWRcbiAgICAgICAgICAgICAgICA/IFwib3JkZXJIaXN0b3J5QmlkXCJcbiAgICAgICAgICAgICAgICA6IFwib3JkZXJIaXN0b3J5QXNrXCI7XG5cbiAgICAgICAgbGV0IHByaWNlID0gKFxuICAgICAgICAgICAgPFByaWNlVGV4dCBwcmljZT17b3JkZXIuZ2V0UHJpY2UoKX0gcXVvdGU9e3F1b3RlfSBiYXNlPXtiYXNlfSAvPlxuICAgICAgICApO1xuICAgICAgICBsZXQgYW1vdW50ID0gaXNCaWRcbiAgICAgICAgICAgID8gdXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgIG9yZGVyLmFtb3VudFRvUmVjZWl2ZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgIG9yZGVyLmFtb3VudEZvclNhbGUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICApO1xuICAgICAgICBsZXQgdmFsdWUgPSBpc0JpZFxuICAgICAgICAgICAgPyB1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50Rm9yU2FsZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiB1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50VG9SZWNlaXZlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICApO1xuICAgICAgICBsZXQgdG90YWwgPSBpc0JpZFxuICAgICAgICAgICAgPyB1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgb3JkZXIudG90YWxGb3JTYWxlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICBvcmRlci50b3RhbFRvUmVjZWl2ZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLmlzTWluZSh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSA/IFwibXktb3JkZXJcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Bvc2l0aW9uID09PSBcImxlZnRcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiBcIjI1JVwifX0gY2xhc3NOYW1lPXtpbnRlZ2VyQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHRkPntwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyB2YWx1ZSA6IGFtb3VudH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cG9zaXRpb24gPT09IFwibGVmdFwiID8gYW1vdW50IDogdmFsdWV9PC90ZD5cbiAgICAgICAgICAgICAgICB7cG9zaXRpb24gPT09IFwicmlnaHRcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0b3RhbH08L3RkPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiBcIjI1JVwifX0gY2xhc3NOYW1lPXtpbnRlZ2VyQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgR3JvdXBlZE9yZGVyQm9va1Jvd1ZlcnRpY2FsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcbiAgICAgICAgaWYgKG5wLm9yZGVyLm1hcmtldF9iYXNlICE9PSB0aGlzLnByb3BzLm9yZGVyLm1hcmtldF9iYXNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBucC5vcmRlci5uZSh0aGlzLnByb3BzLm9yZGVyKSB8fFxuICAgICAgICAgICAgbnAuaW5kZXggIT09IHRoaXMucHJvcHMuaW5kZXggfHxcbiAgICAgICAgICAgIG5wLmN1cnJlbnRBY2NvdW50ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge29yZGVyLCBxdW90ZSwgYmFzZSwgZmluYWx9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaXNCaWQgPSBvcmRlci5pc0JpZCgpO1xuICAgICAgICBsZXQgaW50ZWdlckNsYXNzID0gaXNCaWQgPyBcIm9yZGVySGlzdG9yeUJpZFwiIDogXCJvcmRlckhpc3RvcnlBc2tcIjtcblxuICAgICAgICBsZXQgcHJpY2UgPSAoXG4gICAgICAgICAgICA8UHJpY2VUZXh0IHByaWNlPXtvcmRlci5nZXRQcmljZSgpfSBxdW90ZT17cXVvdGV9IGJhc2U9e2Jhc2V9IC8+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcInN0aWNreS10YWJsZS1yb3cgb3JkZXItcm93XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaW5hbC1yb3dcIjogZmluYWxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRGb3JTYWxlXCIgOiBcImFtb3VudFRvUmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJhbW91bnRUb1JlY2VpdmVcIiA6IFwiYW1vdW50Rm9yU2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNlbGwgJHtpbnRlZ2VyQ2xhc3N9IHJpZ2h0YH0+e3ByaWNlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBHcm91cGVkT3JkZXJCb29rUm93SG9yaXpvbnRhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBucC5vcmRlci5uZSh0aGlzLnByb3BzLm9yZGVyKSB8fFxuICAgICAgICAgICAgbnAucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb24gfHxcbiAgICAgICAgICAgIG5wLmluZGV4ICE9PSB0aGlzLnByb3BzLmluZGV4IHx8XG4gICAgICAgICAgICBucC5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtvcmRlciwgcXVvdGUsIGJhc2UsIHBvc2l0aW9ufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGlzQmlkID0gb3JkZXIuaXNCaWQoKTtcblxuICAgICAgICBsZXQgaW50ZWdlckNsYXNzID0gaXNCaWQgPyBcIm9yZGVySGlzdG9yeUJpZFwiIDogXCJvcmRlckhpc3RvcnlBc2tcIjtcblxuICAgICAgICBsZXQgcHJpY2UgPSAoXG4gICAgICAgICAgICA8UHJpY2VUZXh0IHByaWNlPXtvcmRlci5nZXRQcmljZSgpfSBxdW90ZT17cXVvdGV9IGJhc2U9e2Jhc2V9IC8+XG4gICAgICAgICk7XG4gICAgICAgIGxldCBhbW91bnQgPSBpc0JpZFxuICAgICAgICAgICAgPyB1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50VG9SZWNlaXZlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiB1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50Rm9yU2FsZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGlzQmlkXG4gICAgICAgICAgICA/IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICBvcmRlci5hbW91bnRGb3JTYWxlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICBvcmRlci5hbW91bnRUb1JlY2VpdmUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgIGxldCB0b3RhbCA9IGlzQmlkXG4gICAgICAgICAgICA/IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICBvcmRlci50b3RhbEZvclNhbGUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgIG9yZGVyLnRvdGFsVG9SZWNlaXZlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgICAgICB7cG9zaXRpb24gPT09IFwibGVmdFwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6IFwiMjUlXCJ9fSBjbGFzc05hbWU9e2ludGVnZXJDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8dGQ+e3Bvc2l0aW9uID09PSBcImxlZnRcIiA/IHZhbHVlIDogYW1vdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBhbW91bnQgOiB2YWx1ZX08L3RkPlxuICAgICAgICAgICAgICAgIHtwb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6IFwiMjUlXCJ9fSBjbGFzc05hbWU9e2ludGVnZXJDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBHcm91cE9yZGVyTGltaXRTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBncm91cExpbWl0OiBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z3JvdXBMaW1pdDogdGhpcy5wcm9wcy5jdXJyZW50R3JvdXBPcmRlckxpbWl0fSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBub0dyb3Vwc0F2YWlsYWJsZSA9IHRoaXMucHJvcHMudHJhY2tlZEdyb3Vwc0NvbmZpZy5sZW5ndGggPT09IDA7XG4gICAgICAgIGNvbnN0IHRyYWNrZWRHcm91cHNPcHRpb25zTGlzdCA9IHRoaXMucHJvcHMudHJhY2tlZEdyb3Vwc0NvbmZpZy5tYXAoXG4gICAgICAgICAgICBrZXkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2tleX0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICB7YCR7a2V5IC8gMTAwfSVgfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgZGlyPVwicnRsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ncm91cExpbWl0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUdyb3VwT3JkZXJMaW1pdENoYW5nZX1cbiAgICAgICAgICAgICAgICBkYXRhLXRpcD17XG4gICAgICAgICAgICAgICAgICAgIG5vR3JvdXBzQXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAubm9fZ3JvdXBzX2F2YWlsYWJsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtub0dyb3Vwc0F2YWlsYWJsZSA/IHtjdXJzb3I6IFwibm90LWFsbG93ZWRcIn0gOiBudWxsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLmdyb3VwX29yZGVyX2xpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt0cmFja2VkR3JvdXBzT3B0aW9uc0xpc3R9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIE9yZGVyQm9vayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsaXA6IHByb3BzLmZsaXBPcmRlckJvb2ssXG4gICAgICAgICAgICBzaG93QWxsQmlkczogZmFsc2UsXG4gICAgICAgICAgICBzaG93QWxsQXNrczogZmFsc2UsXG4gICAgICAgICAgICByb3dDb3VudDogMjAsXG4gICAgICAgICAgICBhdXRvU2Nyb2xsOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoIW5leHRQcm9wcy5tYXJrZXRSZWFkeSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2FsbHMgY2hhbmdlZDpcIiwgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuY2FsbHMsIHRoaXMucHJvcHMuY2FsbHMpLCBuZXh0UHJvcHMuY2FsbHMgJiYgbmV4dFByb3BzLmNhbGxzLnRvSlMoKSwgdGhpcy5wcm9wcy5jYWxscyAmJiB0aGlzLnByb3BzLmNhbGxzLnRvSlMoKSk7XG4gICAgLy8gICAgIGNvbnN0IGNhbGxzQ2hhbmdlZCA9IGRpZE9yZGVyc0NoYW5nZShuZXh0UHJvcHMuY2FsbHMsIHRoaXMucHJvcHMuY2FsbHMpO1xuICAgIC8vICAgICBjb25zdCBsaW1pdHNDaGFuZ2VkID0gZGlkT3JkZXJzQ2hhbmdlKG5leHRQcm9wcy5vcmRlcnMsIHRoaXMucHJvcHMub3JkZXJzKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjYWxsc0NoYW5nZWQ6XCIsIGNhbGxzQ2hhbmdlZCwgXCJsaW1pdHNDaGFuZ2VkXCIsIGxpbWl0c0NoYW5nZWQpO1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMub3JkZXJzLCB0aGlzLnByb3BzLm9yZGVycykgfHxcbiAgICAvLyAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmNhbGxzLCB0aGlzLnByb3BzLmNhbGxzKSB8fFxuICAgIC8vICAgICAgICAgbmV4dFByb3BzLmhvcml6b250YWwgIT09IHRoaXMucHJvcHMuaG9yaXpvbnRhbCB8fFxuICAgIC8vICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcy5sYXRlc3QsIHRoaXMucHJvcHMubGF0ZXN0KSB8fFxuICAgIC8vICAgICAgICAgbmV4dFByb3BzLnNtYWxsU2NyZWVuICE9PSB0aGlzLnByb3BzLnNtYWxsU2NyZWVuIHx8XG4gICAgLy8gICAgICAgICBuZXh0UHJvcHMud3JhcHBlckNsYXNzICE9PSB0aGlzLnByb3BzLndyYXBwZXJDbGFzcyB8fFxuICAgIC8vICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSlcbiAgICAvLyAgICAgKTtcbiAgICAvLyB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAvLyBDaGFuZ2Ugb2YgbWFya2V0IG9yIGRpcmVjdGlvblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmFzZS5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5iYXNlLmdldChcImlkXCIpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGUuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMucXVvdGUuZ2V0KFwiaWRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLmFza1RyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMuYXNrVHJhbnNpdGlvbi5yZXNldEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuaG9yX2Fza3MpIHRoaXMucmVmcy5ob3JfYXNrcy5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuaG9yX2JpZHMpIHRoaXMucmVmcy5ob3JfYmlkcy5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLmJpZFRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMuYmlkVHJhbnNpdGlvbi5yZXNldEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLnZlcnRfYmlkcykgdGhpcy5yZWZzLnZlcnRfYmlkcy5zY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2F1dG9TY3JvbGw6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY29tYmluZWRBc2tzLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tYmluZWRBc2tzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNvbWJpbmVkQmlkcyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbWJpbmVkQmlkc1xuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe30sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBzVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHF1ZXJ5U3RpY2t5VGFibGUgPSBxdWVyeSA9PlxuICAgICAgICB0aGlzLnJlZnMudmVydGljYWxfc3RpY2t5X3RhYmxlLnRhYmxlLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuXG4gICAgdmVydGljYWxTY3JvbGxCYXIgPSAoKSA9PiB0aGlzLnF1ZXJ5U3RpY2t5VGFibGUoXCIjeS1zY3JvbGxiYXJcIik7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIFBzLmluaXRpYWxpemUodGhpcy52ZXJ0aWNhbFNjcm9sbEJhcigpKTtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyVmVydGljYWxTY3JvbGxCYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBiaWRzQ29udGFpbmVyID0gdGhpcy5yZWZzLmhvcl9iaWRzO1xuICAgICAgICAgICAgUHMuaW5pdGlhbGl6ZShiaWRzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGxldCBhc2tzQ29udGFpbmVyID0gdGhpcy5yZWZzLmhvcl9hc2tzO1xuICAgICAgICAgICAgUHMuaW5pdGlhbGl6ZShhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxhYmxlQ29udGFpbmVyID0gdGhpcy5xdWVyeVN0aWNreVRhYmxlKFxuICAgICAgICAgICAgICAgIFwiI3N0aWNreS10YWJsZS15LXdyYXBwZXJcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgY2VudGVyVGV4dENvbnRhaW5lciA9IHRoaXMucmVmcy5jZW50ZXJfdGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlcmluZ09mZnNldCA9IDIxO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG8gPVxuICAgICAgICAgICAgICAgIGNlbnRlclRleHRDb250YWluZXIub2Zmc2V0VG9wIC1cbiAgICAgICAgICAgICAgICBlbGVtSGVpZ2h0KHNjcm9sbGFibGVDb250YWluZXIpIC8gMiArXG4gICAgICAgICAgICAgICAgY2VudGVyaW5nT2Zmc2V0O1xuXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IHNjcm9sbGFibGVDb250YWluZXIuc2Nyb2xsVG9wIC0gc2Nyb2xsVG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjZW50ZXJWZXJ0aWNhbFNjcm9sbEJhcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGFibGVDb250YWluZXIgPSB0aGlzLnF1ZXJ5U3RpY2t5VGFibGUoXG4gICAgICAgICAgICAgICAgXCIjc3RpY2t5LXRhYmxlLXktd3JhcHBlclwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyVGV4dENvbnRhaW5lciA9IHRoaXMucmVmcy5jZW50ZXJfdGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlcmluZ09mZnNldCA9IDIxO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID1cbiAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5hdXRvU2Nyb2xsICYmIHRoaXMub2Zmc2V0ID8gdGhpcy5vZmZzZXQgOiAwO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG8gPVxuICAgICAgICAgICAgICAgIGNlbnRlclRleHRDb250YWluZXIub2Zmc2V0VG9wIC1cbiAgICAgICAgICAgICAgICBlbGVtSGVpZ2h0KHNjcm9sbGFibGVDb250YWluZXIpIC8gMiArXG4gICAgICAgICAgICAgICAgY2VudGVyaW5nT2Zmc2V0ICtcbiAgICAgICAgICAgICAgICBvZmZzZXQ7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge293blNjcm9sbDogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgKCkgPT4gKHNjcm9sbGFibGVDb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsVG8pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHNVcGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICBQcy51cGRhdGUodGhpcy52ZXJ0aWNhbFNjcm9sbEJhcigpKTtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyVmVydGljYWxTY3JvbGxCYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBiaWRzQ29udGFpbmVyID0gdGhpcy5yZWZzLmhvcl9iaWRzO1xuICAgICAgICAgICAgUHMudXBkYXRlKGJpZHNDb250YWluZXIpO1xuICAgICAgICAgICAgbGV0IGFza3NDb250YWluZXIgPSB0aGlzLnJlZnMuaG9yX2Fza3M7XG4gICAgICAgICAgICBQcy51cGRhdGUoYXNrc0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZmxpcEJ1eVNlbGwoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBmbGlwT3JkZXJCb29rOiAhdGhpcy5zdGF0ZS5mbGlwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZsaXA6ICF0aGlzLnN0YXRlLmZsaXB9KTtcbiAgICB9XG5cbiAgICBfb25Ub2dnbGVTaG93QWxsKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiYXNrc1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzaG93QWxsQXNrczogIXRoaXMuc3RhdGUuc2hvd0FsbEFza3NcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93QWxsQXNrcykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5ob3JfYXNrcy5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvd0FsbEJpZHM6ICF0aGlzLnN0YXRlLnNob3dBbGxCaWRzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsbEJpZHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMuaG9yX2JpZHMuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVNwcmVhZFZhbHVlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRpc3BsYXlTcHJlYWRBc1BlcmNlbnRhZ2U6ICF0aGlzLnN0YXRlLmRpc3BsYXlTcHJlYWRBc1BlcmNlbnRhZ2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRvZ2dsZUF1dG9TY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge2F1dG9TY3JvbGw6ICF0aGlzLnN0YXRlLmF1dG9TY3JvbGx9O1xuICAgICAgICBpZiAobmV3U3RhdGUuYXV0b1Njcm9sbClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUsIHRoaXMuY2VudGVyVmVydGljYWxTY3JvbGxCYXIpO1xuICAgICAgICBlbHNlIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb21iaW5lZEJpZHMsXG4gICAgICAgICAgICBjb21iaW5lZEFza3MsXG4gICAgICAgICAgICBoaWdoZXN0QmlkLFxuICAgICAgICAgICAgbG93ZXN0QXNrLFxuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgdG90YWxBc2tzLFxuICAgICAgICAgICAgdG90YWxCaWRzLFxuICAgICAgICAgICAgcXVvdGVTeW1ib2wsXG4gICAgICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICAgICAgaG9yaXpvbnRhbCxcbiAgICAgICAgICAgIHRyYWNrZWRHcm91cHNDb25maWcsXG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0LFxuICAgICAgICAgICAgaGFuZGxlR3JvdXBPcmRlckxpbWl0Q2hhbmdlLFxuICAgICAgICAgICAgZ3JvdXBlZEJpZHMsXG4gICAgICAgICAgICBncm91cGVkQXNrc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHNob3dBbGxBc2tzLFxuICAgICAgICAgICAgc2hvd0FsbEJpZHMsXG4gICAgICAgICAgICByb3dDb3VudCxcbiAgICAgICAgICAgIGRpc3BsYXlTcHJlYWRBc1BlcmNlbnRhZ2VcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IG5vT3JkZXJzID0gIWxvd2VzdEFzay5zZWxsX3ByaWNlICYmICFoaWdoZXN0QmlkLnNlbGxfcHJpY2U7XG4gICAgICAgIGNvbnN0IGhhc0Fza0FuZEJpZHMgPSAhIShsb3dlc3RBc2suc2VsbF9wcmljZSAmJiBoaWdoZXN0QmlkLnNlbGxfcHJpY2UpO1xuICAgICAgICBjb25zdCBzcHJlYWQgPVxuICAgICAgICAgICAgaGFzQXNrQW5kQmlkcyAmJlxuICAgICAgICAgICAgKGRpc3BsYXlTcHJlYWRBc1BlcmNlbnRhZ2UgPyAoXG4gICAgICAgICAgICAgICAgYCR7KFxuICAgICAgICAgICAgICAgICAgICAxMDAgKlxuICAgICAgICAgICAgICAgICAgICAobG93ZXN0QXNrLl9yZWFsX3ByaWNlIC8gaGlnaGVzdEJpZC5fcmVhbF9wcmljZSAtIDEpXG4gICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpfSVgXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxQcmljZVRleHRcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2xvd2VzdEFzay5fcmVhbF9wcmljZSAtIGhpZ2hlc3RCaWQuX3JlYWxfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSk7XG4gICAgICAgIGxldCBiaWRSb3dzID0gbnVsbCxcbiAgICAgICAgICAgIGFza1Jvd3MgPSBudWxsO1xuICAgICAgICBpZiAoYmFzZSAmJiBxdW90ZSkge1xuICAgICAgICAgICAgLy8gbGltaXQgb3JkZXJzIG9yIGdyb3VwZWQgb3JkZXJzXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50R3JvdXBPcmRlckxpbWl0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYmlkUm93cyA9IGdyb3VwZWRCaWRzLm1hcCgob3JkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBob3Jpem9udGFsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwZWRPcmRlckJvb2tSb3dIb3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldFByaWNlKCkgKyAob3JkZXIuaXNCaWQoKSA/IFwiX2JpZFwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGljay5iaW5kKHRoaXMsIG9yZGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17IXRoaXMuc3RhdGUuZmxpcCA/IFwibGVmdFwiIDogXCJyaWdodFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cGVkT3JkZXJCb29rUm93VmVydGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArIChvcmRlci5pc0JpZCgpID8gXCJfYmlkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGVtcEFza3MgPSBncm91cGVkQXNrcztcbiAgICAgICAgICAgICAgICBpZiAoIWhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEFza3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuZ2V0UHJpY2UoKSAtIGEuZ2V0UHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFza1Jvd3MgPSB0ZW1wQXNrcy5tYXAoKG9yZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cGVkT3JkZXJCb29rUm93SG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXRQcmljZSgpICsgKG9yZGVyLmlzQmlkKCkgPyBcIl9iaWRcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzLCBvcmRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17b3JkZXIudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17IXRoaXMuc3RhdGUuZmxpcCA/IFwicmlnaHRcIiA6IFwibGVmdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cGVkT3JkZXJCb29rUm93VmVydGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArIChvcmRlci5pc0JpZCgpID8gXCJfYmlkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e29yZGVyLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWw9ezAgPT09IGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmlkUm93cyA9IGNvbWJpbmVkQmlkcy5tYXAoKG9yZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlckJvb2tSb3dIb3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldFByaWNlKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3JkZXIuaXNDYWxsKCkgPyBcIl9jYWxsXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXshdGhpcy5zdGF0ZS5mbGlwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyQm9va1Jvd1ZlcnRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldFByaWNlKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3JkZXIuaXNDYWxsKCkgPyBcIl9jYWxsXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGVtcEFza3MgPSBjb21iaW5lZEFza3M7XG4gICAgICAgICAgICAgICAgdGVtcEFza3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuZ2V0UHJpY2UoKSAtIGIuZ2V0UHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmdldFByaWNlKCkgLSBhLmdldFByaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhc2tSb3dzID0gdGVtcEFza3MubWFwKChvcmRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvcml6b250YWwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJCb29rUm93SG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXRQcmljZSgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9yZGVyLmlzQ2FsbCgpID8gXCJfY2FsbFwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGljay5iaW5kKHRoaXMsIG9yZGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtvcmRlci50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXshdGhpcy5zdGF0ZS5mbGlwID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyQm9va1Jvd1ZlcnRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldFByaWNlKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3JkZXIuaXNDYWxsKCkgPyBcIl9jYWxsXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e29yZGVyLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWw9ezAgPT09IGluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIGxldCB0b3RhbEJpZHNMZW5ndGggPSBiaWRSb3dzLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCB0b3RhbEFza3NMZW5ndGggPSBhc2tSb3dzLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKCFzaG93QWxsQmlkcykge1xuICAgICAgICAgICAgICAgIGJpZFJvd3Muc3BsaWNlKHJvd0NvdW50LCBiaWRSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc2hvd0FsbEFza3MpIHtcbiAgICAgICAgICAgICAgICBhc2tSb3dzLnNwbGljZShyb3dDb3VudCwgYXNrUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbGVmdEhlYWRlciA9IChcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9XCJ0b3AtaGVhZGVyXCIgY2xhc3NOYW1lPVwidG9wLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS50b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtiYXNlU3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e3F1b3RlU3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZmxpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhc2stdG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiaWQtdG90YWxcIikgKyBcIiBoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgcmlnaHRIZWFkZXIgPSAoXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PVwidG9wLWhlYWRlclwiIGNsYXNzTmFtZT1cInRvcC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMuc3RhdGUuZmxpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhc2stdG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiaWQtdG90YWxcIikgKyBcIiBoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtxdW90ZVN5bWJvbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtiYXNlU3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLndyYXBwZXJDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JpZC1ibG9jayBvcmRlcmJvb2sgbm8tcGFkZGluZyBzbWFsbC12ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBhbGlnbi1zcGFjZWQgbm8tb3ZlcmZsb3cgc21hbGwtMTIgeGxhcmdlLThcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic21hbGwtMTIgbWVkaXVtLTYgbWlkZGxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZsaXAgPyBcIm9yZGVyLTFcIiA6IFwib3JkZXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1jb250ZW50LWhlYWRlciBhc2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLnNlbGxfb3JkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmFza3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mbGlwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9mbGlwQnV5U2VsbC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi0ycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGlwLWFycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4NjQ2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1ib29rLWJ1dHRvbi12XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5tb3ZlT3JkZXJCb29rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aHVtYi10YWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudGh1bWJfdGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmxpcCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgaGVhZGVyLXN1Yi10aXRsZSBncm91cGVkX29yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYWNrZWRHcm91cHNDb25maWcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cE9yZGVyTGltaXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBPcmRlckxpbWl0Q2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjE2cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UudG90YWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+OiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEFza3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QXNzZXROYW1lIG5hbWU9e3F1b3RlU3ltYm9sfSAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIwLjZyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGFibGUtaG92ZXIgZml4ZWQtdGFibGUgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmZsaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJpZ2h0SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZWZ0SGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImhvcl9hc2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIwLjZyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiA1fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRhYmxlLWhvdmVyIGZpeGVkLXRhYmxlIHRleHQtcmlnaHQgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJhc2tUcmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcmJvb2sgY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0Ym9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc2tSb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxBc2tzTGVuZ3RoID4gcm93Q291bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJib29rLXNob3dhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Ub2dnbGVTaG93QWxsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FsbEFza3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZXhjaGFuZ2UuaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImV4Y2hhbmdlLnNob3dfYXNrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2hvd0FsbEFza3MgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAoe3RvdGFsQXNrc0xlbmd0aH0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbWFsbC0xMiBtZWRpdW0tNiBtaWRkbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmxpcCA/IFwib3JkZXItMlwiIDogXCJvcmRlci0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyIGJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guYnV5X29yZGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5iaWRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmZsaXAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2ZsaXBCdXlTZWxsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTJweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsaXAtYXJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzg2NDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWJvb2stYnV0dG9uLXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm1vdmVPcmRlckJvb2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRodW1iLXRhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy50aHVtYl90YWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuZmxpcCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgaGVhZGVyLXN1Yi10aXRsZSBncm91cGVkX29yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYWNrZWRHcm91cHNDb25maWcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cE9yZGVyTGltaXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBPcmRlckxpbWl0Q2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjE2cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UudG90YWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+OiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJpZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxBc3NldE5hbWUgbmFtZT17YmFzZVN5bWJvbH0gLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IFwiMC42cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRhYmxlLWhvdmVyIGZpeGVkLXRhYmxlIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZsaXAgPyByaWdodEhlYWRlciA6IGxlZnRIZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaG9yX2JpZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjAuNnJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDIxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGFibGUtaG92ZXIgZml4ZWQtdGFibGUgdGV4dC1yaWdodCBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImJpZFRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyYm9vayBjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JpZFJvd3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbEJpZHNMZW5ndGggPiByb3dDb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcmJvb2stc2hvd2FsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblRvZ2dsZVNob3dBbGwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiaWRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxsQmlkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJleGNoYW5nZS5oaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZXhjaGFuZ2Uuc2hvd19iaWRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzaG93QWxsQmlkcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICh7dG90YWxCaWRzTGVuZ3RofSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFZlcnRpY2FsIG9yZGVyYm9va1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtb3JkZXItYm9vayBuby1wYWRkaW5nIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItdGFibGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RpY2t5VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGlja3lDb2x1bW5Db3VudD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci10YWJsZSB0YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwidmVydGljYWxfc3RpY2t5X3RhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS10YWJsZS1yb3cgdG9wLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgaGVhZGVyLWNlbGwgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17YmFzZVN5bWJvbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbCBoZWFkZXItY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17cXVvdGVTeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgaGVhZGVyLWNlbGwgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImFza1RyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWNvbnRhaW5lciBjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNrUm93cy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFza1Jvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbm9PcmRlcnMgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktdGFibGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbGwgbm8tb3JkZXJzIHBhZHRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm5vX2Fza3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LXRhYmxlLXJvd1wiIHJlZj1cImNlbnRlcl90ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub09yZGVycyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tb3JkZXJzIHBhZHRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uubm9fb3JkZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZWxsIGNlbnRlci1jZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcmJvb2stbGF0ZXN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3ByZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFzcHJlYWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZSBsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvZ2dsZVNwcmVhZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNwcmVhZFwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcHJlYWQtdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2NrLXVubG9jayBjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG9TY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXV0b1Njcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxvY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidW5sb2NrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXV0b1Njcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImljb25zLmxvY2tlZC5lbmFibGVfYXV0b19zY3JvbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImljb25zLnVubG9ja2VkLmRpc2FibGVfYXV0b19zY3JvbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISF0aGlzLnByb3BzLmxhdGVzdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubGF0ZXN0XCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5nZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYXRlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYmlkVHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tY29udGFpbmVyIGNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwibmV3cm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiaWRSb3dzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYmlkUm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBub09yZGVycyB8fCAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS10YWJsZS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VsbCBuby1vcmRlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5ub19iaWRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RpY2t5VGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtYWxpZ24gbm8tcGFkZGluZyBhbGlnbi1jZW50ZXIgZ3JpZC1ibG9jayBmb290ZXIgc2hyaW5rIGJvdHRvbS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2LWFsaWduIGdyaWQtYmxvY2sgYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogXCIycmVtXCIsIG92ZXJmbG93OiBcImhpZGRlblwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGh1bWItdW50YWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy50aHVtYl91bnRhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHggb3JkZXItYm9vay1idXR0b24taFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dG9wOiBcIi0wLjVyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMubW92ZU9yZGVyQm9va31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtYWxpZ24gZ3JpZC1ibG9jayBhbGlnbi1jZW50ZXIgZ3JvdXBlZF9vcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFja2VkR3JvdXBzQ29uZmlnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBPcmRlckxpbWl0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrZWRHcm91cHNDb25maWc9e3RyYWNrZWRHcm91cHNDb25maWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUdyb3VwT3JkZXJMaW1pdENoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuT3JkZXJCb29rLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBiaWRzOiBbXSxcbiAgICBhc2tzOiBbXSxcbiAgICBvcmRlcnM6IHt9XG59O1xuXG5PcmRlckJvb2sucHJvcFR5cGVzID0ge1xuICAgIGJpZHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGFza3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIG9yZGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmRlckJvb2s7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBQcyBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBtYXJrZXRfdXRpbHMgZnJvbSBcImNvbW1vbi9tYXJrZXRfdXRpbHNcIjtcbmltcG9ydCBQcmljZVRleHQgZnJvbSBcIi4uL1V0aWxpdHkvUHJpY2VUZXh0XCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCB7Q2hhaW5UeXBlcyBhcyBncmFwaGVuZUNoYWluVHlwZXN9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xuaW1wb3J0IEJsb2NrRGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CbG9ja0RhdGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCBnZXRMb2NhbGUgZnJvbSBcImJyb3dzZXItbG9jYWxlXCI7XG5pbXBvcnQge0ZpbGxPcmRlcn0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIE1hcmtldEhpc3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJoaXN0b3J5VGFiXCIsIFwiaGlzdG9yeVwiKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAoIW5leHRQcm9wcy5tYXJrZXRSZWFkeSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuaGlzdG9yeSwgdGhpcy5wcm9wcy5oaXN0b3J5KSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VTeW1ib2wgIT09IHRoaXMucHJvcHMuYmFzZVN5bWJvbCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnF1b3RlU3ltYm9sICE9PSB0aGlzLnByb3BzLnF1b3RlU3ltYm9sIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLmNsYXNzTmFtZSB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmFjdGl2ZVRhYiAhPT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWIgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgaGlzdG9yeUNvbnRhaW5lciA9IHRoaXMucmVmcy5oaXN0b3J5O1xuICAgICAgICBQcy5pbml0aWFsaXplKGhpc3RvcnlDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGhpc3RvcnlDb250YWluZXIgPSB0aGlzLnJlZnMuaGlzdG9yeTtcbiAgICAgICAgUHMudXBkYXRlKGhpc3RvcnlDb250YWluZXIpO1xuICAgIH1cblxuICAgIF9jaGFuZ2VUYWIodGFiKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBoaXN0b3J5VGFiOiB0YWJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGFiOiB0YWJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgZm9jdXMgZ29lcyBiYWNrIHRvIHRvcCBvZiBzY3JvbGxhYmxlIGNvbnRhaW5lciB3aGVuIHRhYiBpcyBjaGFuZ2VkXG4gICAgICAgIGxldCBoaXN0b3J5Tm9kZSA9IHRoaXMucmVmcy5oaXN0b3J5O1xuICAgICAgICBoaXN0b3J5Tm9kZS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICBQcy51cGRhdGUoaGlzdG9yeU5vZGUpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoUmVhY3RUb29sdGlwLnJlYnVpbGQsIDEwMDApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGhpc3RvcnksXG4gICAgICAgICAgICBteUhpc3RvcnksXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICAgICAgcXVvdGVTeW1ib2wsXG4gICAgICAgICAgICBpc051bGxBY2NvdW50XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZVRhYn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgaGlzdG9yeVJvd3MgPSBudWxsO1xuXG4gICAgICAgIGlmIChpc051bGxBY2NvdW50KSB7XG4gICAgICAgICAgICBhY3RpdmVUYWIgPSBcImhpc3RvcnlcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgIFtxdW90ZS5nZXQoXCJpZFwiKV06IHtcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtiYXNlLmdldChcImlkXCIpXToge1xuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYWN0aXZlVGFiID09PSBcIm15X2hpc3RvcnlcIiAmJiAobXlIaXN0b3J5ICYmIG15SGlzdG9yeS5zaXplKSkge1xuICAgICAgICAgICAgaGlzdG9yeVJvd3MgPSBteUhpc3RvcnlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3BUeXBlID0gYS5nZXRJbihbXCJvcFwiLCAwXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcFR5cGUgPT09IG9wZXJhdGlvbnMuZmlsbF9vcmRlcjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZUlEID0gcXVvdGUuZ2V0KFwiaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlSUQgPSBiYXNlLmdldChcImlkXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGF5cyA9IGEuZ2V0SW4oW1wib3BcIiwgMSwgXCJwYXlzXCIsIFwiYXNzZXRfaWRcIl0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVjZWl2ZXMgPSBhLmdldEluKFtcIm9wXCIsIDEsIFwicmVjZWl2ZXNcIiwgXCJhc3NldF9pZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNRdW90ZSA9IHF1b3RlSUQgPT09IHBheXMgfHwgcXVvdGVJRCA9PT0gcmVjZWl2ZXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNCYXNlID0gYmFzZUlEID09PSBwYXlzIHx8IGJhc2VJRCA9PT0gcmVjZWl2ZXM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYXNRdW90ZSAmJiBoYXNCYXNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuZ2V0KFwiYmxvY2tfbnVtXCIpIC0gYS5nZXQoXCJibG9ja19udW1cIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKHRyeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxsID0gbmV3IEZpbGxPcmRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeC50b0pTKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtmaWxsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtmaWxsLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtmaWxsLmdldFByaWNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXt0aGlzLnByb3BzLmJhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17dGhpcy5wcm9wcy5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmlsbC5hbW91bnRUb1JlY2VpdmUoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmlsbC5hbW91bnRUb1BheSgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX251bWJlcj17ZmlsbC5ibG9ja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChoaXN0b3J5ICYmIGhpc3Rvcnkuc2l6ZSkge1xuICAgICAgICAgICAgaGlzdG9yeVJvd3MgPSB0aGlzLnByb3BzLmhpc3RvcnlcbiAgICAgICAgICAgICAgICAudGFrZSgxMDApXG4gICAgICAgICAgICAgICAgLm1hcChmaWxsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wiaGlzdG9yeV9cIiArIGZpbGwuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2ZpbGwuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2ZpbGwuZ2V0UHJpY2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e3RoaXMucHJvcHMuYmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXt0aGlzLnByb3BzLnF1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmaWxsLmFtb3VudFRvUmVjZWl2ZSgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmaWxsLmFtb3VudFRvUGF5KCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidG9vbHRpcFwiIGRhdGEtdGlwPXtmaWxsLnRpbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQubG9jYWxpemUoZmlsbC50aW1lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMb2NhbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZihcImVuLXVzXCIpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibWFya2V0X2hpc3RvcnlfdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibWFya2V0X2hpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGMgPSBcIm15bWFya2V0cy1oZWFkZXIgY2xpY2thYmxlXCI7XG4gICAgICAgIGxldCBoaXN0b3J5Q2xhc3MgPSBjbmFtZXMoaGMsIHtpbmFjdGl2ZTogYWN0aXZlVGFiID09PSBcIm15X2hpc3RvcnlcIn0pO1xuICAgICAgICBsZXQgbXlIaXN0b3J5Q2xhc3MgPSBjbmFtZXMoaGMsIHtpbmFjdGl2ZTogYWN0aXZlVGFiID09PSBcImhpc3RvcnlcIn0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtYm9yZGVyZWQgc21hbGwtMTJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogXCJhdXRvXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuaGVhZGVyU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXIgYm90dG9tLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhteUhpc3RvcnlDbGFzcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNOdWxsQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMsIFwibXlfaGlzdG9yeVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5teV9oaXN0b3J5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aGlzdG9yeUNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMsIFwiaGlzdG9yeVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5oaXN0b3J5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXIgbWFya2V0LXJpZ2h0LXBhZGRpbmctb25seVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRleHQtcmlnaHQgZml4ZWQtdGFibGUgbWFya2V0LXJpZ2h0LXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YmFzZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lciBncmlkLWJsb2NrIG1hcmtldC1yaWdodC1wYWRkaW5nLW9ubHkgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heEhlaWdodDogMjEwLCBvdmVyZmxvdzogXCJoaWRkZW5cIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBvcmRlci10YWJsZSB0ZXh0LXJpZ2h0IGZpeGVkLXRhYmxlIG1hcmtldC1yaWdodC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hpc3RvcnlSb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTWFya2V0SGlzdG9yeS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaGlzdG9yeTogW11cbn07XG5cbk1hcmtldEhpc3RvcnkucHJvcFR5cGVzID0ge1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBNYXJrZXRIaXN0b3J5LFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEJsb2NrY2hhaW5TdG9yZSBmcm9tIFwic3RvcmVzL0Jsb2NrY2hhaW5TdG9yZVwiO1xuaW1wb3J0IEJsb2NrY2hhaW5BY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Jsb2NrY2hhaW5BY3Rpb25zXCI7XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5pbXBvcnQgZ2V0TG9jYWxlIGZyb20gXCJicm93c2VyLWxvY2FsZVwiO1xuXG4vKipcbiAqIEBicmllZiBkaXNwbGF5cyBibG9jaydzIGRhdGUgYW5kIHRpbWUgYmFzZWQgb24gYmxvY2sgbnVtYmVyXG4gKlxuICogcHJvcGVydGllczogYmxvY2sgLSBudW1iZXJcbiAqIE5vdGUsIGl0IGRvZXNuJ3QgZmV0Y2ggYmxvY2ssIGp1c3QgY2FsY3VsYXRlcyB0aW1lIGJhc2VkIG9uIG51bWJlciBhbG9uZS5cbiAqKi9cblxuY2xhc3MgQmxvY2tEYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBmb3JtYXQ6XG4gICAgICAgICAgICBnZXRMb2NhbGUoKVxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLmluZGV4T2YoXCJlbi11c1wiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICA/IFwibWFya2V0X2hpc3RvcnlfdXNcIlxuICAgICAgICAgICAgICAgIDogXCJtYXJrZXRfaGlzdG9yeVwiLFxuICAgICAgICB0b29sdGlwOiBmYWxzZSxcbiAgICAgICAgY29tcG9uZW50OiBcInNwYW5cIlxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5ibG9ja0hlYWRlcilcbiAgICAgICAgICAgIEJsb2NrY2hhaW5BY3Rpb25zLmdldEhlYWRlci5kZWZlcih0aGlzLnByb3BzLmJsb2NrX251bWJlcik7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIGlmIChucC5ibG9ja0hlYWRlciAmJiAhdGhpcy5wcm9wcy5ibG9ja0hlYWRlcilcbiAgICAgICAgICAgIHNldFRpbWVvdXQoUmVhY3RUb29sdGlwLnJlYnVpbGQsIDEwMDApO1xuICAgICAgICByZXR1cm4gbnAuYmxvY2tIZWFkZXIgIT09IHRoaXMucHJvcHMuYmxvY2tIZWFkZXI7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YmxvY2tIZWFkZXIsIHRvb2x0aXAsIGNvbXBvbmVudCwgZm9ybWF0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghYmxvY2tIZWFkZXIpIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdG9vbHRpcCA/IFwidG9vbHRpcFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdGlwXCI6IHRvb2x0aXAgPyBibG9ja0hlYWRlci50aW1lc3RhbXAgOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LmxvY2FsaXplKGJsb2NrSGVhZGVyLnRpbWVzdGFtcCwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5CbG9ja0RhdGUgPSBjb25uZWN0KFxuICAgIEJsb2NrRGF0ZSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtCbG9ja2NoYWluU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBibG9ja0hlYWRlcjogQmxvY2tjaGFpblN0b3JlLmdldFN0YXRlKCkuYmxvY2tIZWFkZXJzLmdldChcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYmxvY2tfbnVtYmVyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrRGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFRyYW5zbGF0ZVdpdGhMaW5rcyBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2xhdGVXaXRoTGlua3NcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IFByaWNlVGV4dCBmcm9tIFwiLi4vVXRpbGl0eS9QcmljZVRleHRcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgU2ltcGxlRGVwb3NpdFdpdGhkcmF3IGZyb20gXCIuLi9EYXNoYm9hcmQvU2ltcGxlRGVwb3NpdFdpdGhkcmF3XCI7XG5pbXBvcnQgU2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlIGZyb20gXCIuLi9EYXNoYm9hcmQvU2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlXCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCBFeGNoYW5nZUlucHV0IGZyb20gXCIuL0V4Y2hhbmdlSW5wdXRcIjtcbmltcG9ydCBhc3NldFV0aWxzIGZyb20gXCJjb21tb24vYXNzZXRfdXRpbHNcIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyMi9zcmMvXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcblxuY2xhc3MgQnV5U2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYmFsYW5jZTogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdCxcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYW1vdW50Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBwcmljZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uRXhwaXJhdGlvblR5cGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uRXhwaXJhdGlvbkN1c3RvbUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0eXBlOiBcImJpZFwiXG4gICAgfTtcblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5hbW91bnQgIT09IHRoaXMucHJvcHMuYW1vdW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMub25Cb3Jyb3cgIT09IHRoaXMucHJvcHMub25Cb3Jyb3cgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy50b3RhbCAhPT0gdGhpcy5wcm9wcy50b3RhbCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRQcmljZSAhPT0gdGhpcy5wcm9wcy5jdXJyZW50UHJpY2UgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5wcmljZSAhPT0gdGhpcy5wcm9wcy5wcmljZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhbGFuY2UgIT09IHRoaXMucHJvcHMuYmFsYW5jZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5jbGFzc05hbWUgfHxcbiAgICAgICAgICAgIChuZXh0UHJvcHMuZmVlICYmIHRoaXMucHJvcHMuZmVlXG4gICAgICAgICAgICAgICAgPyBuZXh0UHJvcHMuZmVlLm5lKHRoaXMucHJvcHMuZmVlKVxuICAgICAgICAgICAgICAgIDogZmFsc2UpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuaXNQcmVkaWN0aW9uTWFya2V0ICE9PSB0aGlzLnByb3BzLmlzUHJlZGljdGlvbk1hcmtldCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmZlZUFzc2V0ICE9PSB0aGlzLnByb3BzLmZlZUFzc2V0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuaXNPcGVuICE9PSB0aGlzLnByb3BzLmlzT3BlbiB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmhhc0ZlZUJhbGFuY2UgIT09IHRoaXMucHJvcHMuaGFzRmVlQmFsYW5jZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmV4cGlyYXRpb25UeXBlICE9PSB0aGlzLnByb3BzLmV4cGlyYXRpb25UeXBlIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuZXhwaXJhdGlvbkN1c3RvbVRpbWUgIT09IHRoaXMucHJvcHMuZXhwaXJhdGlvbkN1c3RvbVRpbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfYWRkQmFsYW5jZShiYWxhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwiYmlkXCIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG90YWxDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIHRhcmdldDoge3ZhbHVlOiBiYWxhbmNlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYW1vdW50Q2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHt2YWx1ZTogYmFsYW5jZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KS50b1N0cmluZygpfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2V0UHJpY2UocHJpY2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5wcmljZUNoYW5nZSh7dGFyZ2V0OiB7dmFsdWU6IHByaWNlLnRvU3RyaW5nKCl9fSk7XG4gICAgfVxuXG4gICAgX29uRGVwb3NpdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5yZWZzLmRlcG9zaXRfbW9kYWwuc2hvdygpO1xuICAgIH1cblxuICAgIF9vbkJ1eShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5yZWZzLmJyaWRnZV9tb2RhbC5zaG93KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIGFtb3VudENoYW5nZSxcbiAgICAgICAgICAgIGZlZSxcbiAgICAgICAgICAgIGlzUHJlZGljdGlvbk1hcmtldCxcbiAgICAgICAgICAgIHByaWNlQ2hhbmdlLFxuICAgICAgICAgICAgb25TdWJtaXQsXG4gICAgICAgICAgICBiYWxhbmNlLFxuICAgICAgICAgICAgdG90YWxDaGFuZ2UsXG4gICAgICAgICAgICBiYWxhbmNlUHJlY2lzaW9uLFxuICAgICAgICAgICAgY3VycmVudFByaWNlLFxuICAgICAgICAgICAgY3VycmVudFByaWNlT2JqZWN0LFxuICAgICAgICAgICAgZmVlQXNzZXQsXG4gICAgICAgICAgICBmZWVBc3NldHMsXG4gICAgICAgICAgICBoYXNGZWVCYWxhbmNlLFxuICAgICAgICAgICAgYmFja2VkQ29pblxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGFtb3VudCwgcHJpY2UsIHRvdGFsO1xuICAgICAgICBsZXQgY2FyZXQgPSB0aGlzLnByb3BzLmlzT3BlbiA/IChcbiAgICAgICAgICAgIDxzcGFuPiYjOTY2MDs8L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3Bhbj4mIzk2NTA7PC9zcGFuPlxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFtb3VudCkgYW1vdW50ID0gdGhpcy5wcm9wcy5hbW91bnQ7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnByaWNlKSBwcmljZSA9IHRoaXMucHJvcHMucHJpY2U7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRvdGFsKSB0b3RhbCA9IHRoaXMucHJvcHMudG90YWw7XG5cbiAgICAgICAgbGV0IGJhbGFuY2VBbW91bnQgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiBiYWxhbmNlID8gYmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpIDogMCxcbiAgICAgICAgICAgIHByZWNpc2lvbjogYmFsYW5jZVByZWNpc2lvbixcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhbGFuY2VJZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtYXhCYXNlTWFya2V0RmVlID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogYmFzZS5nZXRJbihbXCJvcHRpb25zXCIsIFwibWF4X21hcmtldF9mZWVcIl0pLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IGJhc2UuZ2V0KFwiYXNzZXRfaWRcIiksXG4gICAgICAgICAgICBwcmVjaXNpb246IGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtYXhRdW90ZU1hcmtldEZlZSA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICBhbW91bnQ6IHF1b3RlLmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXhfbWFya2V0X2ZlZVwiXSksXG4gICAgICAgICAgICBhc3NldF9pZDogcXVvdGUuZ2V0KFwiYXNzZXRfaWRcIiksXG4gICAgICAgICAgICBwcmVjaXNpb246IHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZU1hcmtldEZlZVBlcmNlbnQgPVxuICAgICAgICAgICAgYmFzZS5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKSAvIDEwMCArIFwiJVwiO1xuICAgICAgICBjb25zdCBxdW90ZU1hcmtldEZlZVBlcmNlbnQgPVxuICAgICAgICAgICAgcXVvdGUuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkgLyAxMDAgKyBcIiVcIjtcbiAgICAgICAgY29uc3QgcXVvdGVGZWUgPSAhYW1vdW50XG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICBtYXhRdW90ZU1hcmtldEZlZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIGFtb3VudCAqXG4gICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkgL1xuICAgICAgICAgICAgICAgICAgICAgIDEwMDAwXG4gICAgICAgICAgICAgICkudG9GaXhlZChtYXhRdW90ZU1hcmtldEZlZS5wcmVjaXNpb24pO1xuICAgICAgICBjb25zdCBiYXNlRmVlID0gIWFtb3VudFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IE1hdGgubWluKFxuICAgICAgICAgICAgICAgICAgbWF4QmFzZU1hcmtldEZlZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIHRvdGFsICogYmFzZS5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKSAvIDEwMDAwXG4gICAgICAgICAgICAgICkudG9GaXhlZChtYXhCYXNlTWFya2V0RmVlLnByZWNpc2lvbik7XG4gICAgICAgIGNvbnN0IGJhc2VGbGFnQm9vbGVhbnMgPSBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucyhcbiAgICAgICAgICAgIGJhc2UuZ2V0SW4oW1wib3B0aW9uc1wiLCBcImZsYWdzXCJdKSxcbiAgICAgICAgICAgIGJhc2UuaGFzKFwiYml0YXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBxdW90ZUZsYWdCb29sZWFucyA9IGFzc2V0VXRpbHMuZ2V0RmxhZ0Jvb2xlYW5zKFxuICAgICAgICAgICAgcXVvdGUuZ2V0SW4oW1wib3B0aW9uc1wiLCBcImZsYWdzXCJdKSxcbiAgICAgICAgICAgIHF1b3RlLmhhcyhcImJpdGFzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB7bmFtZTogYmFzZU5hbWUsIHByZWZpeDogYmFzZVByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBoYXNNYXJrZXRGZWUgPVxuICAgICAgICAgICAgYmFzZUZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdIHx8XG4gICAgICAgICAgICBxdW90ZUZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdO1xuICAgICAgICB2YXIgYmFzZU1hcmtldEZlZSA9IGJhc2VGbGFnQm9vbGVhbnNbXCJjaGFyZ2VfbWFya2V0X2ZlZVwiXSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1wYWRkaW5nIGJ1eS1zZWxsLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC00IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5Lm1hcmtldF9mZWVcIiAvPjombmJzcDt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlTWFya2V0RmVlUGVyY2VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZU1hcmtldEZlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFzZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5vVGlwIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAubWFya2V0X2ZlZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogKGJhc2VQcmVmaXggfHwgXCJcIikgKyBiYXNlTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOzxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaGFzTWFya2V0RmVlID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLXBhZGRpbmcgYnV5LXNlbGwtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTMgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWxhYmVsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkubWFya2V0X2ZlZVwiIC8+OlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHtuYW1lOiBxdW90ZU5hbWUsIHByZWZpeDogcXVvdGVQcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlXG4gICAgICAgICk7XG4gICAgICAgIHZhciBxdW90ZU1hcmtldEZlZSA9IHF1b3RlRmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZyBidXktc2VsbC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNCBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlXCIgLz46Jm5ic3A7e1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVNYXJrZXRGZWVQZXJjZW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNCBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxdW90ZU1hcmtldEZlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cXVvdGVGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC00IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBub1RpcCBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5tYXJrZXRfZmVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogKHF1b3RlUHJlZml4IHx8IFwiXCIpICsgcXVvdGVOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7PEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5xdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBoYXNNYXJrZXRGZWUgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZyBidXktc2VsbC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMyBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtbGFiZWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlXCIgLz46XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgLy8gaWYgKCFiYWxhbmNlQW1vdW50KSB7XG4gICAgICAgIC8vICAgICBiYWxhbmNlQW1vdW50ID0gMDtcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zdCBpc0JpZCA9IHR5cGUgPT09IFwiYmlkXCI7XG4gICAgICAgIGxldCBtYXJrZXRGZWUgPVxuICAgICAgICAgICAgaXNCaWQgJiYgcXVvdGVNYXJrZXRGZWVcbiAgICAgICAgICAgICAgICA/IHF1b3RlTWFya2V0RmVlXG4gICAgICAgICAgICAgICAgOiAhaXNCaWQgJiYgYmFzZU1hcmtldEZlZVxuICAgICAgICAgICAgICAgICAgICA/IGJhc2VNYXJrZXRGZWVcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBsZXQgaGFzQmFsYW5jZSA9IGlzQmlkXG4gICAgICAgICAgICA/IGJhbGFuY2VBbW91bnQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSkgPj0gcGFyc2VGbG9hdCh0b3RhbClcbiAgICAgICAgICAgIDogYmFsYW5jZUFtb3VudC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSA+PSBwYXJzZUZsb2F0KGFtb3VudCk7XG5cbiAgICAgICAgbGV0IGJ1dHRvblRleHQgPSBpc1ByZWRpY3Rpb25NYXJrZXRcbiAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uuc2hvcnRcIilcbiAgICAgICAgICAgIDogaXNCaWRcbiAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLmJ1eVwiKVxuICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uuc2VsbFwiKTtcbiAgICAgICAgbGV0IGZvcmNlU2VsbFRleHQgPSBpc0JpZFxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5idXlcIilcbiAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uuc2VsbFwiKTtcblxuICAgICAgICBsZXQgbm9CYWxhbmNlID0gaXNQcmVkaWN0aW9uTWFya2V0XG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6ICEoYmFsYW5jZUFtb3VudC5nZXRBbW91bnQoKSA+IDAgJiYgaGFzQmFsYW5jZSk7XG4gICAgICAgIGxldCBpbnZhbGlkUHJpY2UgPSAhKHByaWNlID4gMCk7XG4gICAgICAgIGxldCBpbnZhbGlkQW1vdW50ID0gIShhbW91bnQgPiAwKTtcblxuICAgICAgICBsZXQgZGlzYWJsZWQgPSBub0JhbGFuY2UgfHwgaW52YWxpZFByaWNlIHx8IGludmFsaWRBbW91bnQ7XG5cbiAgICAgICAgbGV0IGJ1dHRvbkNsYXNzID0gY2xhc3NOYW1lcyhcImJ1dHRvbiBidXlTZWxsQnV0dG9uXCIsIHR5cGUsIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGJhbGFuY2VTeW1ib2wgPSBpc0JpZCA/IGJhc2UuZ2V0KFwic3ltYm9sXCIpIDogcXVvdGUuZ2V0KFwic3ltYm9sXCIpO1xuXG4gICAgICAgIGxldCBkaXNhYmxlZFRleHQgPSBpbnZhbGlkUHJpY2VcbiAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UuaW52YWxpZF9wcmljZVwiKVxuICAgICAgICAgICAgOiBpbnZhbGlkQW1vdW50XG4gICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5pbnZhbGlkX2Ftb3VudFwiKVxuICAgICAgICAgICAgICAgIDogbm9CYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uubm9fYmFsYW5jZVwiKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgLy8gRmVlIGFzc2V0IHNlbGVjdGlvblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBmZWVBc3NldHNbMV0gJiZcbiAgICAgICAgICAgIGZlZUFzc2V0c1sxXS5nZXRJbihbXG4gICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICBcInF1b3RlXCIsXG4gICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICBdKSA9PT0gXCIxLjMuMFwiICYmXG4gICAgICAgICAgICBmZWVBc3NldHNbMV0uZ2V0SW4oW1xuICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJiYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICBdKSA9PT0gXCIxLjMuMFwiXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmVlQXNzZXQgPSBmZWVBc3NldHNbMF07XG4gICAgICAgICAgICBmZWVBc3NldHMuc3BsaWNlKDEsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBvcHRpb25zID0gZmVlQXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgICBsZXQge25hbWUsIHByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShhc3NldCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXthc3NldC5nZXQoXCJpZFwiKX0gdmFsdWU9e2luZGV4Kyt9PlxuICAgICAgICAgICAgICAgICAgICB7cHJlZml4fVxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1YnRyYWN0IGZlZSBmcm9tIGFtb3VudCB0byBzZWxsXG4gICAgICAgIGxldCBiYWxhbmNlVG9BZGQ7XG5cbiAgICAgICAgaWYgKGZlZUFzc2V0LmdldChcInN5bWJvbFwiKSA9PT0gYmFsYW5jZVN5bWJvbCkge1xuICAgICAgICAgICAgYmFsYW5jZVRvQWRkID0gYmFsYW5jZUFtb3VudC5jbG9uZShcbiAgICAgICAgICAgICAgICBiYWxhbmNlQW1vdW50LmdldEFtb3VudCgpIC0gZmVlLmdldEFtb3VudCgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFsYW5jZVRvQWRkID0gYmFsYW5jZUFtb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7bmFtZSwgcHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKFxuICAgICAgICAgICAgdGhpcy5wcm9wc1tpc0JpZCA/IFwiYmFzZVwiIDogXCJxdW90ZVwiXVxuICAgICAgICApO1xuICAgICAgICBsZXQgYnV5Qm9ycm93RGVwb3NpdE5hbWUgPSAocHJlZml4ID8gcHJlZml4IDogXCJcIikgKyBuYW1lO1xuXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0b3IgPSByZXF1aXJlKFwiY291bnRlcnBhcnRcIik7XG5cbiAgICAgICAgbGV0IGRhdGFJbnRybyA9IG51bGw7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJiaWRcIikge1xuICAgICAgICAgICAgZGF0YUludHJvID0gdHJhbnNsYXRvci50cmFuc2xhdGUoXCJ3YWxrdGhyb3VnaC5idXlfZm9ybVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09IFwiYXNrXCIpIHtcbiAgICAgICAgICAgIGRhdGFJbnRybyA9IHRyYW5zbGF0b3IudHJhbnNsYXRlKFwid2Fsa3Rocm91Z2guc2VsbF9mb3JtXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbnNPcHRpb25zTGlzdCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZXhwaXJhdGlvbnMpLm1hcChcbiAgICAgICAgICAgIChrZXksIGkpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtrZXl9IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXhwaXJhdGlvbnNba2V5XS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBkYXRlcGlja2VyIHB1dHMgb24gdGhlIGVuZCBvZiBib2R5IHNvIGl0J3Mgb3V0IG9mIHRoZW1lIHNjb3BlXG4gICAgICAgIC8vIHNvIHRoZW1lIGlzIHVzZWQgb24gd3JhcHBlckNsYXNzTmFtZVxuICAgICAgICBjb25zdCB0aGVtZSA9IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncy5nZXQoXCJ0aGVtZXNcIik7XG5cbiAgICAgICAgY29uc3QgbWluRXhwaXJhdGlvbkRhdGUgPSBtb21lbnQoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWJvcmRlcmVkIGJ1eS1zZWxsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZXhjaGFuZ2UtY29udGVudC1oZWFkZXIgXCIgKyB0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbnRybz17ZGF0YUludHJvfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cImV4Y2hhbmdlLmJ1eXNlbGxfZm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcXVvdGUuZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlzUHJlZGljdGlvbk1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZXhjaGFuZ2Uuc2hvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzQmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZXhjaGFuZ2UuYnV5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJleGNoYW5nZS5zZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRpcmVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj57YnV0dG9uVGV4dH0gPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9IC8+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9uRmxpcCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRmxpcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwiLCBmb250U2l6ZTogXCIxcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGlwLWFycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4NjQ2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vblRvZ2dsZVBvc2l0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25Ub2dnbGVQb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwiLCBmb250U2l6ZTogXCIxcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGlwLWFycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4NjQ1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVG9nZ2xlT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgY2xpY2thYmxlIGhpZGUtZm9yLXhsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmN1cnJlbnRCcmlkZ2VzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgYnV5LXNlbGwtZGVwb3NpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLl9vbkJ1eS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5idXlzZWxsX2Zvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYmFzZVwiIDogXCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmdldChcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJleGNoYW5nZS5idXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkaXJlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYmFja2VkQ29pbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGJ1eS1zZWxsLWRlcG9zaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5fb25EZXBvc2l0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cImV4Y2hhbmdlLmJ1eXNlbGxfZm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJiYXNlXCIgOiBcInF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0cmFuc2xhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImV4Y2hhbmdlLmRlcG9zaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkaXJlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25Cb3Jyb3cgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBidXktc2VsbC1kZXBvc2l0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25Cb3Jyb3d9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cImV4Y2hhbmdlLmJ1eXNlbGxfZm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJiYXNlXCIgOiBcInF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0cmFuc2xhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImV4Y2hhbmdlLmJvcnJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRpcmVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5pc09wZW4gPyBcImhpZGUtY29udGFpbmVyIFwiIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JkZXItZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvdyBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLXBhZGRpbmcgYnV5LXNlbGwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0zIG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC01IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7dHlwZX1QcmljZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcmljZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNCBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOy8mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZyBidXktc2VsbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTMgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hbW91bnRcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC01IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7dHlwZX1BbW91bnRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Ftb3VudENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNCBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGJ1eS1zZWxsLXJvdyBib3R0b20tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0zIG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UudG90YWxcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC01IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4Y2hhbmdlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7dHlwZX1Ub3RhbGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b3RhbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNCBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZyBidXktc2VsbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTMgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5mZWVcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC01IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhhc0ZlZUJhbGFuY2UgPyBcIm5vLWJhbGFuY2VcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake3R5cGV9RmVlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoYXNGZWVCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmVlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBc3NldHMubGVuZ3RoICE9PSAxID8gMCA6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFzc2V0cy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge2JhY2tncm91bmQ6IFwibm9uZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmZWVBc3NldHMubGVuZ3RoID09PSAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmZWVBc3NldHMuaW5kZXhPZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZWVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2xcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmZWVBc3NldHMubGVuZ3RoICE9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIGJ1eXNlbGwtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2VGZWVBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgY2xlYXItZml4IG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYnV5LXNlbGwtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5iYWxhbmNlXCIgLz46XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9hZGRCYWxhbmNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VUb0FkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VBbW91bnQuZ2V0QW1vdW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlYWw6IHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VQcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2JhbGFuY2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJ1eS1zZWxsLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7cGFkZGluZ1RvcDogNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQmlkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmxvd2VzdF9hc2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5oaWdoZXN0X2JpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfTombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcmljZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnNldFByaWNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZU9iamVjdC5zZWxsUHJpY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2N1cnJlbnRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPi88QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZS5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJ1eS1zZWxsLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7cGFkZGluZ1RvcDogNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uZXhwaXJhdGlvblwiIC8+OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZXhwaXJhdGlvbi1kYXRldGltZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbkV4cGlyYXRpb25UeXBlQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4cGlyYXRpb25UeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHBpcmF0aW9uc09wdGlvbnNMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5leHBpcmF0aW9uVHlwZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU1BFQ0lGSUNcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXJQb3NpdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbSBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lUGlja2VyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e21pbkV4cGlyYXRpb25EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZvcm1hdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRvIE1NTSBZWVlZIGhoOm1tIEFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXhwaXJhdGlvbkN1c3RvbVRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uRXhwaXJhdGlvbkN1c3RvbUNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCVVkvU0VMTCBidXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlZFRleHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtkaXNhYmxlZFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIGRhdGEtdGlwPXtcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTSE9SVCBidXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlZFRleHQgJiYgaXNQcmVkaWN0aW9uTWFya2V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtkaXNhYmxlZFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JjZVNlbGxUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGlzUHJlZGljdGlvbk1hcmtldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdSaWdodDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17XCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JjZVNlbGxUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTaW1wbGVEZXBvc2l0V2l0aGRyYXdcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiZGVwb3NpdF9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICBmaWF0TW9kYWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcj17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHNbaXNCaWQgPyBcImJhc2VcIiA6IFwicXVvdGVcIl0uZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGVfZGVwb3NpdF9tb2RhbFwiICsgKHR5cGUgPT09IFwiYmlkXCIgPyBcIlwiIDogXCJfYXNrXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1t0aGlzLnByb3BzLmJhbGFuY2VdfVxuICAgICAgICAgICAgICAgICAgICB7Li4uYmFja2VkQ29pbn1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgey8qIEJyaWRnZSBtb2RhbCAqL31cbiAgICAgICAgICAgICAgICA8U2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImJyaWRnZV9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcj17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYmFsYW5jZUlkfVxuICAgICAgICAgICAgICAgICAgICBtb2RhbElkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlX2JyaWRnZV9tb2RhbFwiICsgKHR5cGUgPT09IFwiYmlkXCIgPyBcIlwiIDogXCJfYXNrXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1t0aGlzLnByb3BzLmJhbGFuY2VdfVxuICAgICAgICAgICAgICAgICAgICBicmlkZ2VzPXt0aGlzLnByb3BzLmN1cnJlbnRCcmlkZ2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoQnV5U2VsbCk7XG4iLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IHtDaGFpblZhbGlkYXRpb259IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCB7aGFzR2F0ZXdheVByZWZpeH0gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcblxuY2xhc3MgTWFya2V0UGlja2VyV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5nZXRBc3NldExpc3QgPSBkZWJvdW5jZShBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyLCAxNTApO1xuICAgIH1cblxuICAgIGluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1hcmtldHNMaXN0OiBcIlwiLFxuICAgICAgICAgICAgaXNzdWVyc0xpc3Q6IFwiXCIsXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogbnVsbCxcbiAgICAgICAgICAgIGFsbE1hcmtldHM6IFwiXCIsXG4gICAgICAgICAgICBhbGxJc3N1ZXJzOiBcIlwiLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMubWFya2V0UGlja2VyQXNzZXQgIT09IHRoaXMucHJvcHMubWFya2V0UGlja2VyQXNzZXQpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKCkpO1xuXG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2VhcmNoQXNzZXRzICE9PSB0aGlzLnByb3BzLnNlYXJjaEFzc2V0cylcbiAgICAgICAgICAgIHRoaXMuYXNzZXRGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBucC5tYXJrZXRQaWNrZXJBc3NldCAhPT0gdGhpcy5wcm9wcy5tYXJrZXRQaWNrZXJBc3NldCB8fFxuICAgICAgICAgICAgbnAuc2VhcmNoQXNzZXRzICE9PSB0aGlzLnByb3BzLnNlYXJjaEFzc2V0cyB8fFxuICAgICAgICAgICAgbnMubWFya2V0c0xpc3QgIT09IHRoaXMuc3RhdGUubWFya2V0c0xpc3QgfHxcbiAgICAgICAgICAgIG5zLmlzc3VlcnNMaXN0ICE9PSB0aGlzLnN0YXRlLmlzc3VlcnNMaXN0IHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnMsIHRoaXMuc3RhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0SXNzdWVyKGUpIHtcbiAgICAgICAgbGV0IGZpbHRlckJ5SXNzdWVyTmFtZSA9IGUudGFyZ2V0LnZhbHVlID09IFwiMFwiID8gbnVsbCA6IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLmFzc2V0RmlsdGVyKGZpbHRlckJ5SXNzdWVyTmFtZSk7XG4gICAgfVxuXG4gICAgX29uSW5wdXROYW1lKGdldEJhY2tlZEFzc2V0cywgZSkge1xuICAgICAgICBsZXQgdG9GaW5kID0gZS50YXJnZXQudmFsdWUudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxldCBpc1ZhbGlkTmFtZSA9ICFDaGFpblZhbGlkYXRpb24uaXNfdmFsaWRfc3ltYm9sX2Vycm9yKHRvRmluZCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBlLnRhcmdldC52YWx1ZS50cmltKCksXG4gICAgICAgICAgICBhY3RpdmVTZWFyY2g6IHRydWUsXG4gICAgICAgICAgICBhbGxNYXJrZXRzOiBcIlwiLFxuICAgICAgICAgICAgYWxsSXNzdWVyczogXCJcIixcbiAgICAgICAgICAgIG1hcmtldHNMaXN0OiBcIlwiLFxuICAgICAgICAgICAgaXNzdWVyc0xpc3Q6IFwiXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogRG9uJ3QgbG9va3VwIGludmFsaWQgYXNzZXQgbmFtZXMgKi9cbiAgICAgICAgaWYgKCFpc1ZhbGlkTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSB0b0ZpbmQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9va3VwQXNzZXRzKHRvRmluZCwgZ2V0QmFja2VkQXNzZXRzKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgX2xvb2t1cEFzc2V0cyh2YWx1ZSwgZ2F0ZXdheUFzc2V0cyA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IFwiXCIpIHJldHVybjtcblxuICAgICAgICBsZXQgcXVvdGUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuZ2V0QXNzZXRMaXN0KHF1b3RlLCAxMCwgZ2F0ZXdheUFzc2V0cyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVTZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgbG9va3VwUXVvdGU6IHF1b3RlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGFuZ2VNYXJrZXRQaWNrZXJGaWx0ZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtYXJrZXRzTGlzdDogXCJcIixcbiAgICAgICAgICAgIGlzc3VlcnNMaXN0OiBcIlwiLFxuICAgICAgICAgICAgbG9va3VwUXVvdGU6IG51bGwsXG4gICAgICAgICAgICBhbGxNYXJrZXRzOiBcIlwiLFxuICAgICAgICAgICAgYWxsSXNzdWVyczogXCJcIixcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBtYXJrZXRQaWNrZXJUYWI6IHZhbHVlLFxuICAgICAgICAgICAgYWN0aXZlU2VhcmNoOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZmV0Y2hJc3N1ZXIoYXNzZXQpIHtcbiAgICAgICAgbGV0IGlzc3VlciA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFzc2V0Lmlzc3VlciwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgLy8gSXNzdWVyIG1heSBzb21ldGltZXMgbm90IHJlc29sdmUgYXQgZmlyc3QuXG4gICAgICAgIC8vIEEgd2FpdGVyIG1heSBiZSByZXF1aXJlZCBoZXJlXG4gICAgICAgIGlmICghaXNzdWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNzdWVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXNzZXRGaWx0ZXIoZmlsdGVyQnlJc3N1ZXJOYW1lID0gbnVsbCkge1xuICAgICAgICBsZXQge3NlYXJjaEFzc2V0cywgbWFya2V0UGlja2VyQXNzZXR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQge2lucHV0VmFsdWUsIGxvb2t1cFF1b3RlLCBtYXJrZXRQaWNrZXJUYWJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVNlYXJjaDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYXNzZXRDb3VudCA9IDA7XG4gICAgICAgIGxldCBhbGxNYXJrZXRzID0gW107XG4gICAgICAgIGxldCBhbGxJc3N1ZXJzID0gW107XG5cbiAgICAgICAgbGV0IGJhc2VTeW1ib2wgPSB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGxldCBxdW90ZVN5bWJvbCA9IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgaWYgKHNlYXJjaEFzc2V0cy5zaXplICYmICEhaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHNlYXJjaEFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5vcHRpb25zLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShhLm9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInZpc2libGVcIiBpbiBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uLnZpc2libGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuc3ltYm9sLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0Q291bnQgPiAxMDApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc3N1ZXIgPSB0aGlzLl9mZXRjaElzc3Vlcihhc3NldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2UgPSB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9IGFzc2V0LnN5bWJvbCArIFwiX1wiICsgYmFzZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNRdW90ZUFzc2V0ID0gcXVvdGVTeW1ib2wgPT0gbWFya2V0UGlja2VyQXNzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmNsdWRlQXNzZXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgKGlzUXVvdGVBc3NldCAmJiBhc3NldC5zeW1ib2wgIT0gYmFzZVN5bWJvbCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICghaXNRdW90ZUFzc2V0ICYmIGFzc2V0LnN5bWJvbCAhPSBxdW90ZVN5bWJvbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUFzc2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoIWZpbHRlckJ5SXNzdWVyTmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5SXNzdWVyTmFtZSA9PSBpc3N1ZXIuZ2V0KFwibmFtZVwiKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgobWFya2V0UGlja2VyVGFiID09IFwic2VhcmNoXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wuc3RhcnRzV2l0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIW1hcmtldFBpY2tlclRhYiB8fCBtYXJrZXRQaWNrZXJUYWIgPT0gXCJmaWx0ZXJcIikpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsTWFya2V0cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBhc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlcjogIWlzc3VlciA/IG51bGwgOiBpc3N1ZXIuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVBc3NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhYWxsSXNzdWVycy5pbmNsdWRlcyhpc3N1ZXIuZ2V0KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsSXNzdWVycy5wdXNoKGlzc3Vlci5nZXQoXCJuYW1lXCIpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXJrZXRzTGlzdCA9IHRoaXMuc3RhdGUubWFya2V0c0xpc3Q7XG4gICAgICAgIGxldCBpc3N1ZXJzTGlzdCA9IHRoaXMuc3RhdGUuaXNzdWVyc0xpc3Q7XG5cbiAgICAgICAgaXNzdWVyc0xpc3QgPSAhYWxsSXNzdWVyc1xuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IGFsbElzc3VlcnNcbiAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAubWFwKGlzc3VlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2lzc3Vlcn0gdmFsdWU9e2lzc3Vlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNzdWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbWFya2V0c0xpc3QgPSAhYWxsTWFya2V0c1xuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IGFsbE1hcmtldHNcbiAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFJc0tub3duR2F0ZXdheSA9IGhhc0dhdGV3YXlQcmVmaXgoYVsxXVtcInF1b3RlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgYklzS25vd25HYXRld2F5ID0gaGFzR2F0ZXdheVByZWZpeChiWzFdW1wicXVvdGVcIl0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGFJc0tub3duR2F0ZXdheSAmJiAhYklzS25vd25HYXRld2F5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJJc0tub3duR2F0ZXdheSAmJiAhYUlzS25vd25HYXRld2F5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVsxXVtcInF1b3RlXCJdID4gYlsxXVtcInF1b3RlXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVsxXVtcInF1b3RlXCJdIDwgYlsxXVtcInF1b3RlXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21hcmtldFswXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldFsxXVtcInF1b3RlXCJdfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uVG9nZ2xlTWFya2V0UGlja2VyKG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnN3aXRjaE1hcmtldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbCA9PSBtYXJrZXRQaWNrZXJBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYC9tYXJrZXQvJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRbMV1bXCJxdW90ZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV8ke2Jhc2VTeW1ib2x9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYC9tYXJrZXQvJHtxdW90ZVN5bWJvbH1fJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRbMV1bXCJxdW90ZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci51c2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbGxNYXJrZXRzLFxuICAgICAgICAgICAgYWxsSXNzdWVycyxcbiAgICAgICAgICAgIG1hcmtldHNMaXN0LFxuICAgICAgICAgICAgaXNzdWVyc0xpc3QsXG4gICAgICAgICAgICBhY3RpdmVTZWFyY2g6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHttYXJrZXRQaWNrZXJBc3NldH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBtYXJrZXRQaWNrZXJUYWIsXG4gICAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgYWxsTWFya2V0cyxcbiAgICAgICAgICAgIGlzc3VlcnNMaXN0LFxuICAgICAgICAgICAgbWFya2V0c0xpc3RcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2V0UGlja2VyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZXRQaWNrZXJfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtldFBpY2tlcl9fZmlsdGVyVHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtldFBpY2tlcl9fZmlsdGVySGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zZWFyY2hfbW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUsIGN1cnNvcjogXCJwb2ludGVyXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLm1hcmtldFBpY2tlclRhYiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldFBpY2tlclRhYiA9PSBcImZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmx1ZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMV81eFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlTWFya2V0UGlja2VyRmlsdGVyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNSwgY3Vyc29yOiBcInBvaW50ZXJcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYXJrZXRQaWNrZXJUYWIgPT0gXCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWUtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjFfNXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZU1hcmtldFBpY2tlckZpbHRlci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiem9vbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy56b29tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZXRQaWNrZXJfX3RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9waWNrZXIudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2V0UGlja2VyX19zdWJIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zdWJfdGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2Fzc2V0LyR7bWFya2V0UGlja2VyQXNzZXR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJsaWdodGJsdWUgIWltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldFBpY2tlckFzc2V0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibHVlLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImluZm8tY2lyY2xlLW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuaW5mb19jaXJjbGVfb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogbWFya2V0UGlja2VyVGFiID09IFwic2VhcmNoXCIgPyBcIlwiIDogXCJub25lXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9waWNrZXIuc2VhcmNoX2Zvcl9hc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0TmFtZS5iaW5kKHRoaXMsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5tYXJrZXRQaWNrZXJUYWIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldFBpY2tlclRhYiA9PSBcImZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2stbGlzdCBuby1ib3JkZXItYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5maW5kX2J5X2Fzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXROYW1lLmJpbmQodGhpcywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLm1hcmtldF9waWNrZXIuc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9waWNrZXIuZmlsdGVyX2J5X2lzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2l0aC1kcm9wZHB3blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uU2VsZWN0SXNzdWVyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT1cIjBcIiB2YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zaG93X2FsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc3N1ZXJzTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9waWNrZXIucmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9hc3NldHM9eyFhbGxNYXJrZXRzID8gMCA6IGFsbE1hcmtldHMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVTZWFyY2ggJiZcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0VmFsdWUubGVuZ3RoICE9IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT57bWFya2V0c0xpc3R9PC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgTWFya2V0UGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TWFya2V0UGlja2VyV3JhcHBlciB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5NYXJrZXRQaWNrZXIgPSBjb25uZWN0KFxuICAgIE1hcmtldFBpY2tlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBc3NldFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlYXJjaEFzc2V0czogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0cyxcbiAgICAgICAgICAgICAgICBhc3NldHNMb2FkaW5nOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzTG9hZGluZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtldFBpY2tlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFRyYWRpbmdWaWV3ID0gcmVxdWlyZShcIi4uLy4uLy4uL2NoYXJ0aW5nX2xpYnJhcnkvY2hhcnRpbmdfbGlicmFyeS5taW4uanNcIik7XG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvY29sb3JzXCI7XG5pbXBvcnQge2dldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMsIGdldFRWVGltZXpvbmV9IGZyb20gXCIuL3RyYWRpbmdWaWV3Q2xhc3Nlc1wiO1xuXG4vLyBpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbi8vIGltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhZGluZ1ZpZXdQcmljZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBsb2FkVHJhZGluZ1ZpZXcocHJvcHMpIHtcbiAgICAgICAgY29uc3Qge2RhdGFGZWVkfSA9IHByb3BzO1xuICAgICAgICBsZXQgdGhlbWVDb2xvcnMgPSBjb2xvcnNbcHJvcHMudGhlbWVdO1xuXG4gICAgICAgIGlmICghZGF0YUZlZWQpIHJldHVybjtcbiAgICAgICAgaWYgKCEhdGhpcy50dldpZGdldCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChfX0RFVl9fKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50UmVzb2x1dGlvblwiLFxuICAgICAgICAgICAgICAgIGdldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMoW3Byb3BzLmJ1Y2tldFNpemVdKVswXSxcbiAgICAgICAgICAgICAgICBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgIHByb3BzLnF1b3RlU3ltYm9sICsgXCJfXCIgKyBwcm9wcy5iYXNlU3ltYm9sLFxuICAgICAgICAgICAgICAgIFwidGltZXpvbmU6XCIsXG4gICAgICAgICAgICAgICAgZ2V0VFZUaW1lem9uZSgpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGRhdGFGZWVkLnVwZGF0ZSh7XG4gICAgICAgICAgICByZXNvbHV0aW9uczogcHJvcHMuYnVja2V0cyxcbiAgICAgICAgICAgIHRpY2tlcjogcHJvcHMucXVvdGVTeW1ib2wgKyBcIl9cIiArIHByb3BzLmJhc2VTeW1ib2wsXG4gICAgICAgICAgICBpbnRlcnZhbDogZ2V0UmVzb2x1dGlvbnNGcm9tQnVja2V0cyhbcHJvcHMuYnVja2V0U2l6ZV0pWzBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfX0RFVl9fKSBjb25zb2xlLmxvZyhcIioqKiBMb2FkIENoYXJ0ICoqKlwiKTtcbiAgICAgICAgaWYgKF9fREVWX18pIGNvbnNvbGUudGltZShcIioqKiBDaGFydCBsb2FkIHRpbWU6IFwiKTtcbiAgICAgICAgdGhpcy50dldpZGdldCA9IG5ldyBUcmFkaW5nVmlldy53aWRnZXQoe1xuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICBzeW1ib2w6IHByb3BzLnF1b3RlU3ltYm9sICsgXCJfXCIgKyBwcm9wcy5iYXNlU3ltYm9sLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IGdldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMoW3Byb3BzLmJ1Y2tldFNpemVdKVswXSxcbiAgICAgICAgICAgIGxpYnJhcnlfcGF0aDogYCR7XG4gICAgICAgICAgICAgICAgX19FTEVDVFJPTl9fID8gX19CQVNFX1VSTF9fIDogXCJcIlxuICAgICAgICAgICAgfS9jaGFydGluZ19saWJyYXJ5L2AsXG4gICAgICAgICAgICBkYXRhZmVlZDogZGF0YUZlZWQsXG4gICAgICAgICAgICBjb250YWluZXJfaWQ6IFwidHZfY2hhcnRcIixcbiAgICAgICAgICAgIGNoYXJ0c19zdG9yYWdlX3VybDogXCJodHRwczovL3NhdmVsb2FkLnRyYWRpbmd2aWV3LmNvbVwiLFxuICAgICAgICAgICAgY2hhcnRzX3N0b3JhZ2VfYXBpX3ZlcnNpb246IFwiMS4xXCIsXG4gICAgICAgICAgICBjbGllbnRfaWQ6IFwidHJhZGluZ3ZpZXcuY29tXCIsXG4gICAgICAgICAgICB1c2VyX2lkOiBcInB1YmxpY191c2VyX2lkXCIsXG4gICAgICAgICAgICBhdXRvc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogcHJvcHMubG9jYWxlLFxuICAgICAgICAgICAgdGltZXpvbmU6IGdldFRWVGltZXpvbmUoKSxcbiAgICAgICAgICAgIHRvb2xiYXJfYmc6IHRoZW1lQ29sb3JzLmJnQ29sb3IsXG4gICAgICAgICAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgICAgICAgICBcInBhbmVQcm9wZXJ0aWVzLmJhY2tncm91bmRcIjogdGhlbWVDb2xvcnMuYmdDb2xvcixcbiAgICAgICAgICAgICAgICBcInBhbmVQcm9wZXJ0aWVzLmhvcnpHcmlkUHJvcGVydGllcy5jb2xvclwiOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZUNvbG9ycy5heGlzTGluZUNvbG9yLFxuICAgICAgICAgICAgICAgIFwicGFuZVByb3BlcnRpZXMudmVydEdyaWRQcm9wZXJ0aWVzLmNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lQ29sb3JzLmF4aXNMaW5lQ29sb3IsXG4gICAgICAgICAgICAgICAgXCJzY2FsZXNQcm9wZXJ0aWVzLmxpbmVDb2xvclwiOiB0aGVtZUNvbG9ycy5heGlzTGluZUNvbG9yLFxuICAgICAgICAgICAgICAgIFwic2NhbGVzUHJvcGVydGllcy50ZXh0Q29sb3JcIjogdGhlbWVDb2xvcnMudGV4dENvbG9yXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VzdG9tX2Nzc191cmw6IHByb3BzLnRoZW1lICsgXCIuY3NzXCIsXG4gICAgICAgICAgICBlbmFibGVkX2ZlYXR1cmVzOiBbXG4gICAgICAgICAgICAgICAgXCJzdHVkeV90ZW1wbGF0ZXNcIixcbiAgICAgICAgICAgICAgICBcImtlZXBfbGVmdF90b29sYmFyX3Zpc2libGVfb25fc21hbGxfc2NyZWVuc1wiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGlzYWJsZWRfZmVhdHVyZXM6IFtcbiAgICAgICAgICAgICAgICBcImhlYWRlcl9zYXZlbG9hZFwiLFxuICAgICAgICAgICAgICAgIFwic3ltYm9sX2luZm9cIixcbiAgICAgICAgICAgICAgICBcInN5bWJvbF9zZWFyY2hfaG90X2tleVwiLFxuICAgICAgICAgICAgICAgIFwiYm9yZGVyX2Fyb3VuZF90aGVfY2hhcnRcIixcbiAgICAgICAgICAgICAgICBcImhlYWRlcl9zeW1ib2xfc2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgXCJoZWFkZXJfY29tcGFyZVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICAgICAgcHJlc2V0OiB0aGlzLnByb3BzLm1vYmlsZSA/IFwibW9iaWxlXCIgOiBcIlwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudHZXaWRnZXQub25DaGFydFJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChfX0RFVl9fKSBjb25zb2xlLmxvZyhcIioqKiBDaGFydCBSZWFkeSAqKipcIik7XG4gICAgICAgICAgICBpZiAoX19ERVZfXykgY29uc29sZS50aW1lRW5kKFwiKioqIENoYXJ0IGxvYWQgdGltZTogXCIpO1xuICAgICAgICAgICAgZGF0YUZlZWQudXBkYXRlKHtcbiAgICAgICAgICAgICAgICBvbk1hcmtldENoYW5nZTogdGhpcy5fc2V0U3ltYm9sLmJpbmQodGhpcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmICghbnAubWFya2V0UmVhZHkpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRhdGFGZWVkICYmIG5wLmRhdGFGZWVkKSB7XG4gICAgICAgICAgICBsb2FkVHJhZGluZ1ZpZXcobnApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3NldFN5bWJvbCh0aWNrZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudHZXaWRnZXQpIHtcbiAgICAgICAgICAgIHRoaXMudHZXaWRnZXQuc2V0U3ltYm9sKFxuICAgICAgICAgICAgICAgIHRpY2tlcixcbiAgICAgICAgICAgICAgICBnZXRSZXNvbHV0aW9uc0Zyb21CdWNrZXRzKFt0aGlzLnByb3BzLmJ1Y2tldFNpemVdKVswXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmxvYWRUcmFkaW5nVmlldyh0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhRmVlZC5jbGVhclN1YnMoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcbiAgICAgICAgaWYgKG5wLmNoYXJ0SGVpZ2h0ICE9PSB0aGlzLnByb3BzLmNoYXJ0SGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCEhdGhpcy50dldpZGdldCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIW5wLm1hcmtldFJlYWR5KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4Y2hhbmdlLWJvcmRlcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmNoYXJ0SGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHZfY2hhcnRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9lKGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSxlKTplKHQuVHJhZGluZ1ZpZXc9dC5UcmFkaW5nVmlld3x8e30pfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxvKXt2YXIgaT1uKHt9LHQpO2Zvcih2YXIgcyBpbiBvKVwib2JqZWN0XCIhPXR5cGVvZiB0W3NdfHxudWxsPT09dFtzXXx8QXJyYXkuaXNBcnJheSh0W3NdKT92b2lkIDAhPT1vW3NdJiYoaVtzXT1vW3NdKTppW3NdPWUodFtzXSxvW3NdKTtyZXR1cm4gaX1mdW5jdGlvbiBvKCl7cmV0dXJuXCIxLjEyIChpbnRlcm5hbCBpZCA2MzBiNzA0YSBAIDIwMTgtMDYtMDYgMDI6MTY6MTEuMzA1NTA5KVwifWZ1bmN0aW9uIGkodCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsdCwhMSl9dmFyIG49T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG89YXJndW1lbnRzLGk9MSxuPWFyZ3VtZW50cy5sZW5ndGg7aTxuO2krKyl7ZT1vW2ldO2Zvcih2YXIgcyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiYodFtzXT1lW3NdKX1yZXR1cm4gdH0scz17bW9iaWxlOntkaXNhYmxlZF9mZWF0dXJlczpbXCJsZWZ0X3Rvb2xiYXJcIixcImhlYWRlcl93aWRnZXRcIixcInRpbWVmcmFtZXNfdG9vbGJhclwiLFwiZWRpdF9idXR0b25zX2luX2xlZ2VuZFwiLFwiY29udGV4dF9tZW51c1wiLFwiY29udHJvbF9iYXJcIixcImJvcmRlcl9hcm91bmRfdGhlX2NoYXJ0XCJdLGVuYWJsZWRfZmVhdHVyZXM6W119fSxyPXt3aWR0aDo4MDAsaGVpZ2h0OjUwMCxzeW1ib2w6XCJBQVwiLGludGVydmFsOlwiRFwiLHRpbWV6b25lOlwiVVRDXCIsY29udGFpbmVyX2lkOlwiXCIsbGlicmFyeV9wYXRoOlwiXCIsbG9jYWxlOlwiZW5cIix3aWRnZXRiYXI6e2RldGFpbHM6ITEsd2F0Y2hsaXN0OiExLHdhdGNobGlzdF9zZXR0aW5nczp7ZGVmYXVsdF9zeW1ib2xzOltdfX0sb3ZlcnJpZGVzOntcIm1haW5TZXJpZXNQcm9wZXJ0aWVzLnNob3dDb3VudGRvd25cIjohMX0sc3R1ZGllc19vdmVycmlkZXM6e30sYnJva2VyQ29uZmlnOntjb25maWdGbGFnczp7fX0sZnVsbHNjcmVlbjohMSxhdXRvc2l6ZTohMSxkaXNhYmxlZF9mZWF0dXJlczpbXSxlbmFibGVkX2ZlYXR1cmVzOltdLGRlYnVnOiExLGxvZ286e30sdGltZV9mcmFtZXM6W3t0ZXh0OlwiNXlcIixyZXNvbHV0aW9uOlwiV1wifSx7dGV4dDpcIjF5XCIscmVzb2x1dGlvbjpcIldcIn0se3RleHQ6XCI2bVwiLHJlc29sdXRpb246XCIxMjBcIn0se3RleHQ6XCIzbVwiLHJlc29sdXRpb246XCI2MFwifSx7dGV4dDpcIjFtXCIscmVzb2x1dGlvbjpcIjMwXCJ9LHt0ZXh0OlwiNWRcIixyZXNvbHV0aW9uOlwiNVwifSx7dGV4dDpcIjFkXCIscmVzb2x1dGlvbjpcIjFcIn1dLGNsaWVudF9pZDpcIjBcIix1c2VyX2lkOlwiMFwiLGNoYXJ0c19zdG9yYWdlX2FwaV92ZXJzaW9uOlwiMS4wXCIsZmF2b3JpdGVzOntpbnRlcnZhbHM6W10sY2hhcnRUeXBlczpbXX19LGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe2lmKHRoaXMuX2lkPVwidHJhZGluZ3ZpZXdfXCIrKDEwNDg1NzYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKSx0aGlzLl9yZWFkeT0hMSx0aGlzLl9yZWFkeUhhbmRsZXJzPVtdLHRoaXMuX29uV2luZG93UmVzaXplPXRoaXMuX2F1dG9SZXNpemVDaGFydC5iaW5kKHRoaXMpLCF0LmRhdGFmZWVkKXRocm93IG5ldyBFcnJvcihcIkRhdGFmZWVkIGlzIG5vdCBkZWZpbmVkXCIpO2lmKHRoaXMuX29wdGlvbnM9ZShyLHQpLHQucHJlc2V0KXt2YXIgbz1zW3QucHJlc2V0XTtvPyh2b2lkIDAhPT10aGlzLl9vcHRpb25zLmRpc2FibGVkX2ZlYXR1cmVzP3RoaXMuX29wdGlvbnMuZGlzYWJsZWRfZmVhdHVyZXM9dGhpcy5fb3B0aW9ucy5kaXNhYmxlZF9mZWF0dXJlcy5jb25jYXQoby5kaXNhYmxlZF9mZWF0dXJlcyk6dGhpcy5fb3B0aW9ucy5kaXNhYmxlZF9mZWF0dXJlcz1vLmRpc2FibGVkX2ZlYXR1cmVzLHZvaWQgMCE9PXRoaXMuX29wdGlvbnMuZW5hYmxlZF9mZWF0dXJlcz90aGlzLl9vcHRpb25zLmVuYWJsZWRfZmVhdHVyZXM9dGhpcy5fb3B0aW9ucy5lbmFibGVkX2ZlYXR1cmVzLmNvbmNhdChvLmVuYWJsZWRfZmVhdHVyZXMpOnRoaXMuX29wdGlvbnMuZW5hYmxlZF9mZWF0dXJlcz1vLmVuYWJsZWRfZmVhdHVyZXMpOmNvbnNvbGUud2FybihcIlVua25vd24gcHJlc2V0OiBgXCIrdC5wcmVzZXQrXCJgXCIpfXRoaXMuX2NyZWF0ZSgpfXJldHVybiB0LnByb3RvdHlwZS5vbkNoYXJ0UmVhZHk9ZnVuY3Rpb24odCl7dGhpcy5fcmVhZHk/dC5jYWxsKHRoaXMpOnRoaXMuX3JlYWR5SGFuZGxlcnMucHVzaCh0KX0sdC5wcm90b3R5cGUub25HcmF5ZWRPYmplY3RDbGlja2VkPWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyQVBJKCkub25HcmF5ZWRPYmplY3RDbGlja2VkKHQpfSx0LnByb3RvdHlwZS5vblNob3J0Y3V0PWZ1bmN0aW9uKHQsZSl7dGhpcy5faW5uZXJXaW5kb3coKS5jcmVhdGVTaG9ydGN1dEFjdGlvbih0LGUpfSx0LnByb3RvdHlwZS5zdWJzY3JpYmU9ZnVuY3Rpb24odCxlKXt0aGlzLl9pbm5lckFQSSgpLnN1YnNjcmliZSh0LGUpfSx0LnByb3RvdHlwZS51bnN1YnNjcmliZT1mdW5jdGlvbih0LGUpe3RoaXMuX2lubmVyQVBJKCkudW5zdWJzY3JpYmUodCxlKX0sdC5wcm90b3R5cGUuY2hhcnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkuY2hhcnQodCl9LHQucHJvdG90eXBlLnNldExhbmd1YWdlPWZ1bmN0aW9uKHQpe3RoaXMucmVtb3ZlKCksdGhpcy5fb3B0aW9ucy5sb2NhbGU9dCx0aGlzLl9jcmVhdGUoKX0sdC5wcm90b3R5cGUuc2V0U3ltYm9sPWZ1bmN0aW9uKHQsZSxvKXt0aGlzLl9pbm5lckFQSSgpLmNoYW5nZVN5bWJvbCh0LGUrXCJcIixvKX0sdC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZSksdGhpcy5fcmVhZHlIYW5kbGVycy5zcGxpY2UoMCx0aGlzLl9yZWFkeUhhbmRsZXJzLmxlbmd0aCksZGVsZXRlIHdpbmRvd1t0aGlzLl9pZF07dmFyIHQ9dGhpcy5fZ2V0SUZyYW1lRWxlbWVudCgpO3QuY29udGVudFdpbmRvdy5kZXN0cm95Q2hhcnQoKSx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KX0sdC5wcm90b3R5cGUuY2xvc2VQb3B1cHNBbmREaWFsb2dzPWZ1bmN0aW9uKCl7dGhpcy5faW5uZXJBUEkoKS5jbG9zZVBvcHVwc0FuZERpYWxvZ3MoKX0sdC5wcm90b3R5cGUuc2VsZWN0TGluZVRvb2w9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJBUEkoKS5zZWxlY3RMaW5lVG9vbCh0KX0sdC5wcm90b3R5cGUuc2VsZWN0ZWRMaW5lVG9vbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLnNlbGVjdGVkTGluZVRvb2woKX0sdC5wcm90b3R5cGUuc2F2ZT1mdW5jdGlvbih0KXt0aGlzLl9pbm5lckFQSSgpLnNhdmVDaGFydCh0KX0sdC5wcm90b3R5cGUubG9hZD1mdW5jdGlvbih0LGUpe3RoaXMuX2lubmVyQVBJKCkubG9hZENoYXJ0KHtqc29uOnQsZXh0ZW5kZWREYXRhOmV9KX0sdC5wcm90b3R5cGUuZ2V0U2F2ZWRDaGFydHM9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJBUEkoKS5nZXRTYXZlZENoYXJ0cyh0KX0sdC5wcm90b3R5cGUubG9hZENoYXJ0RnJvbVNlcnZlcj1mdW5jdGlvbih0KXt0aGlzLl9pbm5lckFQSSgpLmxvYWRDaGFydEZyb21TZXJ2ZXIodCl9LHQucHJvdG90eXBlLnNhdmVDaGFydFRvU2VydmVyPWZ1bmN0aW9uKHQsZSxvLGkpe3RoaXMuX2lubmVyQVBJKCkuc2F2ZUNoYXJ0VG9TZXJ2ZXIodCxlLG8saSl9LHQucHJvdG90eXBlLnJlbW92ZUNoYXJ0RnJvbVNlcnZlcj1mdW5jdGlvbih0LGUpe3RoaXMuX2lubmVyQVBJKCkucmVtb3ZlQ2hhcnRGcm9tU2VydmVyKHQsZSl9LHQucHJvdG90eXBlLm9uQ29udGV4dE1lbnU9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJBUEkoKS5vbkNvbnRleHRNZW51KHQpfSx0LnByb3RvdHlwZS5jcmVhdGVCdXR0b249ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2lubmVyV2luZG93KCkuY3JlYXRlQnV0dG9uKHQpfSx0LnByb3RvdHlwZS5zaG93Tm90aWNlRGlhbG9nPWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyQVBJKCkuc2hvd05vdGljZURpYWxvZyh0KX0sdC5wcm90b3R5cGUuc2hvd0NvbmZpcm1EaWFsb2c9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJBUEkoKS5zaG93Q29uZmlybURpYWxvZyh0KX0sdC5wcm90b3R5cGUuc2hvd0xvYWRDaGFydERpYWxvZz1mdW5jdGlvbigpe3RoaXMuX2lubmVyQVBJKCkuc2hvd0xvYWRDaGFydERpYWxvZygpfSx0LnByb3RvdHlwZS5zaG93U2F2ZUFzQ2hhcnREaWFsb2c9ZnVuY3Rpb24oKXt0aGlzLl9pbm5lckFQSSgpLnNob3dTYXZlQXNDaGFydERpYWxvZygpfSx0LnByb3RvdHlwZS5zeW1ib2xJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLmdldFN5bWJvbEludGVydmFsKCl9LHQucHJvdG90eXBlLm1haW5TZXJpZXNQcmljZUZvcm1hdHRlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLm1haW5TZXJpZXNQcmljZUZvcm1hdHRlcigpfSx0LnByb3RvdHlwZS5nZXRJbnRlcnZhbHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS5nZXRJbnRlcnZhbHMoKX0sdC5wcm90b3R5cGUuZ2V0U3R1ZGllc0xpc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS5nZXRTdHVkaWVzTGlzdCgpfSx0LnByb3RvdHlwZS5hZGRDdXN0b21DU1NGaWxlPWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyV2luZG93KCkuYWRkQ3VzdG9tQ1NTRmlsZSh0KX0sdC5wcm90b3R5cGUuYXBwbHlPdmVycmlkZXM9ZnVuY3Rpb24odCl7dGhpcy5fb3B0aW9ucz1lKHRoaXMuX29wdGlvbnMse292ZXJyaWRlczp0fSksdGhpcy5faW5uZXJXaW5kb3coKS5hcHBseU92ZXJyaWRlcyh0KX0sdC5wcm90b3R5cGUuYXBwbHlTdHVkaWVzT3ZlcnJpZGVzPWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyV2luZG93KCkuYXBwbHlTdHVkaWVzT3ZlcnJpZGVzKHQpfSx0LnByb3RvdHlwZS53YXRjaExpc3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS53YXRjaGxpc3QoKX0sdC5wcm90b3R5cGUuYWN0aXZlQ2hhcnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS5hY3RpdmVDaGFydCgpfSx0LnByb3RvdHlwZS5jaGFydHNDb3VudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLmNoYXJ0c0NvdW50KCl9LHQucHJvdG90eXBlLmxheW91dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLmxheW91dCgpfSx0LnByb3RvdHlwZS5zZXRMYXlvdXQ9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJBUEkoKS5zZXRMYXlvdXQodCl9LHQucHJvdG90eXBlLl9nZXRJRnJhbWVFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5faWQpO2lmKG51bGw9PT10KXRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIHN1Y2ggaWZyYW1lXCIpO3JldHVybiB0fSx0LnByb3RvdHlwZS5faW5uZXJBUEk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZ2V0SUZyYW1lRWxlbWVudCgpLmNvbnRlbnRXaW5kb3cudHJhZGluZ1ZpZXdBcGl9LHQucHJvdG90eXBlLl9pbm5lcldpbmRvdz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9nZXRJRnJhbWVFbGVtZW50KCkuY29udGVudFdpbmRvd30sdC5wcm90b3R5cGUuX2F1dG9SZXNpemVDaGFydD1mdW5jdGlvbigpe3RoaXMuX29wdGlvbnMuZnVsbHNjcmVlbiYmKHRoaXMuX2dldElGcmFtZUVsZW1lbnQoKS5zdHlsZS5oZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0K1wicHhcIil9LHQucHJvdG90eXBlLl9jcmVhdGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dGhpcy5fcmVuZGVyKCksbz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9vcHRpb25zLmNvbnRhaW5lcl9pZCk7aWYobnVsbD09PW8pdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gc3VjaCBlbGVtZW50IC0gI1wiK3RoaXMuX29wdGlvbnMuY29udGFpbmVyX2lkKTtvLmlubmVySFRNTD1lO3ZhciBpPXRoaXMuX2dldElGcmFtZUVsZW1lbnQoKTsodGhpcy5fb3B0aW9ucy5hdXRvc2l6ZXx8dGhpcy5fb3B0aW9ucy5mdWxsc2NyZWVuKSYmKGkuc3R5bGUud2lkdGg9XCIxMDAlXCIsdGhpcy5fb3B0aW9ucy5mdWxsc2NyZWVufHwoaS5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIpKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX29uV2luZG93UmVzaXplKSx0aGlzLl9vbldpbmRvd1Jlc2l6ZSgpO3ZhciBuPWZ1bmN0aW9uKCl7aS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLG4sITEpLGkuY29udGVudFdpbmRvdy53aWRnZXRSZWFkeShmdW5jdGlvbigpe3QuX3JlYWR5PSEwO2Zvcih2YXIgZT0wLG89dC5fcmVhZHlIYW5kbGVycztlPG8ubGVuZ3RoO2UrKyl7b1tlXS5jYWxsKHQpfWkuY29udGVudFdpbmRvdy5pbml0aWFsaXphdGlvbkZpbmlzaGVkKCl9KX07aS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG4sITEpfSx0LnByb3RvdHlwZS5fcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIHQ9d2luZG93O3RbdGhpcy5faWRdPXtkYXRhZmVlZDp0aGlzLl9vcHRpb25zLmRhdGFmZWVkLGN1c3RvbUZvcm1hdHRlcnM6dGhpcy5fb3B0aW9ucy5jdXN0b21Gb3JtYXR0ZXJzLGJyb2tlckZhY3Rvcnk6dGhpcy5fb3B0aW9ucy5icm9rZXJGYWN0b3J5LG92ZXJyaWRlczp0aGlzLl9vcHRpb25zLm92ZXJyaWRlcyxzdHVkaWVzT3ZlcnJpZGVzOnRoaXMuX29wdGlvbnMuc3R1ZGllc19vdmVycmlkZXMsZGlzYWJsZWRGZWF0dXJlczp0aGlzLl9vcHRpb25zLmRpc2FibGVkX2ZlYXR1cmVzLGVuYWJsZWRGZWF0dXJlczp0aGlzLl9vcHRpb25zLmVuYWJsZWRfZmVhdHVyZXMsYnJva2VyQ29uZmlnOnRoaXMuX29wdGlvbnMuYnJva2VyQ29uZmlnLHJlc3RDb25maWc6dGhpcy5fb3B0aW9ucy5yZXN0Q29uZmlnLGZhdm9yaXRlczp0aGlzLl9vcHRpb25zLmZhdm9yaXRlcyxsb2dvOnRoaXMuX29wdGlvbnMubG9nbyxudW1lcmljX2Zvcm1hdHRpbmc6dGhpcy5fb3B0aW9ucy5udW1lcmljX2Zvcm1hdHRpbmcscnNzX25ld3NfZmVlZDp0aGlzLl9vcHRpb25zLnJzc19uZXdzX2ZlZWQsbmV3c1Byb3ZpZGVyOnRoaXMuX29wdGlvbnMubmV3c19wcm92aWRlcixsb2FkTGFzdENoYXJ0OnRoaXMuX29wdGlvbnMubG9hZF9sYXN0X2NoYXJ0LHNhdmVMb2FkQWRhcHRlcjp0aGlzLl9vcHRpb25zLnNhdmVfbG9hZF9hZGFwdGVyLGxvYWRpbmdfc2NyZWVuOnRoaXMuX29wdGlvbnMubG9hZGluZ19zY3JlZW4sc2V0dGluZ3NBZGFwdGVyOnRoaXMuX29wdGlvbnMuc2V0dGluZ3NfYWRhcHRlcn0sdGhpcy5fb3B0aW9ucy5zYXZlZF9kYXRhJiYodFt0aGlzLl9pZF0uY2hhcnRDb250ZW50PXtqc29uOnRoaXMuX29wdGlvbnMuc2F2ZWRfZGF0YX0pO3ZhciBlPSh0aGlzLl9vcHRpb25zLmxpYnJhcnlfcGF0aHx8XCJcIikrXCJzdGF0aWMvdHYtY2hhcnQuNjMwYjcwNGEyYjlkMGVhZjE1OTMuaHRtbCNsb2NhbHNlcnZlcj0xJnN5bWJvbD1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy5zeW1ib2wpK1wiJmludGVydmFsPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLmludGVydmFsKSsodGhpcy5fb3B0aW9ucy50aW1lZnJhbWU/XCImdGltZWZyYW1lPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLnRpbWVmcmFtZSk6XCJcIikrKHRoaXMuX29wdGlvbnMudG9vbGJhcl9iZz9cIiZ0b29sYmFyYmc9XCIrdGhpcy5fb3B0aW9ucy50b29sYmFyX2JnLnJlcGxhY2UoXCIjXCIsXCJcIik6XCJcIikrKHRoaXMuX29wdGlvbnMuc3R1ZGllc19hY2Nlc3M/XCImc3R1ZGllc0FjY2Vzcz1cIitlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodGhpcy5fb3B0aW9ucy5zdHVkaWVzX2FjY2VzcykpOlwiXCIpK1wiJndpZGdldGJhcj1cIitlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodGhpcy5fb3B0aW9ucy53aWRnZXRiYXIpKSsodGhpcy5fb3B0aW9ucy5kcmF3aW5nc19hY2Nlc3M/XCImZHJhd2luZ3NBY2Nlc3M9XCIrZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHRoaXMuX29wdGlvbnMuZHJhd2luZ3NfYWNjZXNzKSk6XCJcIikrXCImdGltZUZyYW1lcz1cIitlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodGhpcy5fb3B0aW9ucy50aW1lX2ZyYW1lcykpK1wiJmxvY2FsZT1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy5sb2NhbGUpK1wiJnVpZD1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5faWQpK1wiJmNsaWVudElkPVwiK2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodGhpcy5fb3B0aW9ucy5jbGllbnRfaWQpKStcIiZ1c2VySWQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh0aGlzLl9vcHRpb25zLnVzZXJfaWQpKSsodGhpcy5fb3B0aW9ucy5jaGFydHNfc3RvcmFnZV91cmw/XCImY2hhcnRzU3RvcmFnZVVybD1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy5jaGFydHNfc3RvcmFnZV91cmwpOlwiXCIpKyh0aGlzLl9vcHRpb25zLmNoYXJ0c19zdG9yYWdlX2FwaV92ZXJzaW9uP1wiJmNoYXJ0c1N0b3JhZ2VWZXI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMuY2hhcnRzX3N0b3JhZ2VfYXBpX3ZlcnNpb24pOlwiXCIpKyh0aGlzLl9vcHRpb25zLmluZGljYXRvcnNfZmlsZV9uYW1lP1wiJmluZGljYXRvcnNGaWxlPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLmluZGljYXRvcnNfZmlsZV9uYW1lKTpcIlwiKSsodGhpcy5fb3B0aW9ucy5jdXN0b21fY3NzX3VybD9cIiZjdXN0b21DU1M9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMuY3VzdG9tX2Nzc191cmwpOlwiXCIpKyh0aGlzLl9vcHRpb25zLmF1dG9fc2F2ZV9kZWxheT9cIiZhdXRvU2F2ZURlbGF5PVwiK2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodGhpcy5fb3B0aW9ucy5hdXRvX3NhdmVfZGVsYXkpKTpcIlwiKStcIiZkZWJ1Zz1cIit0aGlzLl9vcHRpb25zLmRlYnVnKyh0aGlzLl9vcHRpb25zLnNuYXBzaG90X3VybD9cIiZzbmFwc2hvdFVybD1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy5zbmFwc2hvdF91cmwpOlwiXCIpKyh0aGlzLl9vcHRpb25zLnRpbWV6b25lP1wiJnRpbWV6b25lPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLnRpbWV6b25lKTpcIlwiKSsodGhpcy5fb3B0aW9ucy5zdHVkeV9jb3VudF9saW1pdD9cIiZzdHVkeUNvdW50TGltaXQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh0aGlzLl9vcHRpb25zLnN0dWR5X2NvdW50X2xpbWl0KSk6XCJcIikrKHRoaXMuX29wdGlvbnMuc3ltYm9sX3NlYXJjaF9yZXF1ZXN0X2RlbGF5P1wiJnNzcmVxZGVsYXk9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh0aGlzLl9vcHRpb25zLnN5bWJvbF9zZWFyY2hfcmVxdWVzdF9kZWxheSkpOlwiXCIpO3JldHVybic8aWZyYW1lIGlkPVwiJyt0aGlzLl9pZCsnXCIgbmFtZT1cIicrdGhpcy5faWQrJ1wiICBzcmM9XCInK2UrJ1wiJysodGhpcy5fb3B0aW9ucy5hdXRvc2l6ZXx8dGhpcy5fb3B0aW9ucy5mdWxsc2NyZWVuP1wiXCI6JyB3aWR0aD1cIicrdGhpcy5fb3B0aW9ucy53aWR0aCsnXCIgaGVpZ2h0PVwiJyt0aGlzLl9vcHRpb25zLmhlaWdodCsnXCInKSsnIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIHNjcm9sbGluZz1cIm5vXCIgYWxsb3dmdWxsc2NyZWVuIHN0eWxlPVwiZGlzcGxheTpibG9jaztcIj48L2lmcmFtZT4nfSx0fSgpLGQ9YTt3aW5kb3cuVHJhZGluZ1ZpZXc9d2luZG93LlRyYWRpbmdWaWV3fHx7fSx3aW5kb3cuVHJhZGluZ1ZpZXcudmVyc2lvbj1vLHQudmVyc2lvbj1vLHQub25yZWFkeT1pLHQud2lkZ2V0PWQsT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG1pZG5pZ2h0VGhlbWU6IHtcbiAgICAgICAgYmlkQ29sb3I6IFwiIzUwRDJDMlwiLFxuICAgICAgICBiaWRGaWxsQ29sb3I6IFwicmdiYSg4MCwgMjEwLCAxOTQsIDAuNSlcIixcbiAgICAgICAgYXNrQ29sb3I6IFwiI0UzNzQ1QlwiLFxuICAgICAgICBhc2tGaWxsQ29sb3I6IFwicmdiYSgyMjcsIDExNiwgOTEsIDAuNSlcIixcbiAgICAgICAgY2FsbENvbG9yOiBcIiNCQkJGMkJcIixcbiAgICAgICAgc2V0dGxlQ29sb3I6IFwicmdiYSgxMjUsIDEzNCwgMjE0LCAxKVwiLFxuICAgICAgICBzZXR0bGVGaWxsQ29sb3I6IFwicmdiYSgxMjUsIDEzNCwgMjE0LCAwLjUpXCIsXG4gICAgICAgIHBvc2l0aXZlQ29sb3I6IFwiIzZCQTU4M1wiLFxuICAgICAgICBuZWdhdGl2ZUNvbG9yOiBcIiNEQjAwMDBcIixcbiAgICAgICAgc3Ryb2tlQ29sb3I6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBwcmltYXJ5VGV4dDogXCIjZTBlMGUwXCIsXG4gICAgICAgIHZvbHVtZUNvbG9yOiBcIiM4NDg0ODRcIixcblxuICAgICAgICAvL3Rvb2x0aXBcbiAgICAgICAgdG9vbHRpcEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIixcbiAgICAgICAgdG9vbHRpcENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgdG9vbHRpcEZpbGxDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIC8vYXhpc1xuICAgICAgICBheGlzTGFiZWxzQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICBheGlzTGluZUNvbG9yOiBcInJnYmEoMjAwLCAyMDAsIDIwMCwgMC4zKVwiLFxuICAgICAgICBpbmRpY2F0b3JMaW5lQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgICBiZ0NvbG9yOiBcIiMxOTFhMWZcIixcbiAgICAgICAgdGV4dENvbG9yOiBcIiNlMGUwZTBcIlxuICAgIH0sXG4gICAgcnVkZXhEYXJrVGhlbWU6IHtcbiAgICAgICAgYmlkQ29sb3I6IFwiIzUwRDJDMlwiLFxuICAgICAgICBiaWRGaWxsQ29sb3I6IFwicmdiYSg4MCwgMjEwLCAxOTQsIDAuNSlcIixcbiAgICAgICAgYXNrQ29sb3I6IFwiI0UzNzQ1QlwiLFxuICAgICAgICBhc2tGaWxsQ29sb3I6IFwicmdiYSgyMjcsIDExNiwgOTEsIDAuNSlcIixcbiAgICAgICAgY2FsbENvbG9yOiBcIiNCQkJGMkJcIixcbiAgICAgICAgc2V0dGxlQ29sb3I6IFwicmdiYSgxMjUsIDEzNCwgMjE0LCAxKVwiLFxuICAgICAgICBzZXR0bGVGaWxsQ29sb3I6IFwicmdiYSgxMjUsIDEzNCwgMjE0LCAwLjUpXCIsXG4gICAgICAgIHBvc2l0aXZlQ29sb3I6IFwiIzZCQTU4M1wiLFxuICAgICAgICBuZWdhdGl2ZUNvbG9yOiBcIiNEQjAwMDBcIixcbiAgICAgICAgc3Ryb2tlQ29sb3I6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBwcmltYXJ5VGV4dDogXCIjZTBlMGUwXCIsXG4gICAgICAgIHZvbHVtZUNvbG9yOiBcIiM4NDg0ODRcIixcblxuICAgICAgICAvL3Rvb2x0aXBcbiAgICAgICAgdG9vbHRpcEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIixcbiAgICAgICAgdG9vbHRpcENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgdG9vbHRpcEZpbGxDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIC8vYXhpc1xuICAgICAgICBheGlzTGFiZWxzQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICBheGlzTGluZUNvbG9yOiBcIiNBQUFBQUFcIixcbiAgICAgICAgaW5kaWNhdG9yTGluZUNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgICAgYmdDb2xvcjogXCIjMTkxYTFmXCIsXG4gICAgICAgIHRleHRDb2xvcjogXCIjZTBlMGUwXCJcbiAgICB9LFxuICAgIGRhcmtUaGVtZToge1xuICAgICAgICBiaWRDb2xvcjogXCIjNkJBNTgzXCIsXG4gICAgICAgIGJpZEZpbGxDb2xvcjogXCJyZ2JhKDgwLCAyMTAsIDE5NCwgMC41KVwiLFxuICAgICAgICBhc2tDb2xvcjogXCIjRTM3NDVCXCIsXG4gICAgICAgIGFza0ZpbGxDb2xvcjogXCJyZ2JhKDIyNywgMTE2LCA5MSwgMC41KVwiLFxuICAgICAgICBjYWxsQ29sb3I6IFwiI0JCQkYyQlwiLFxuICAgICAgICBzZXR0bGVDb2xvcjogXCJyZ2JhKDEyNSwgMTM0LCAyMTQsIDEpXCIsXG4gICAgICAgIHNldHRsZUZpbGxDb2xvcjogXCJyZ2JhKDEyNSwgMTM0LCAyMTQsIDAuNSlcIixcbiAgICAgICAgcG9zaXRpdmVDb2xvcjogXCIjMjU4QTE0XCIsXG4gICAgICAgIG5lZ2F0aXZlQ29sb3I6IFwiI0RCMDAwMFwiLFxuICAgICAgICBzdHJva2VDb2xvcjogXCIjRkZGRjAwXCIsXG4gICAgICAgIHByaW1hcnlUZXh0OiBcIiNlMGUwZTBcIixcbiAgICAgICAgdm9sdW1lQ29sb3I6IFwiIzg0ODQ4NFwiLFxuXG4gICAgICAgIC8vdG9vbHRpcFxuICAgICAgICB0b29sdGlwQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC40KVwiLFxuICAgICAgICB0b29sdGlwQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICB0b29sdGlwRmlsbENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgLy9heGlzXG4gICAgICAgIGF4aXNMYWJlbHNDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIGF4aXNMaW5lQ29sb3I6IFwicmdiYSgyMDAsIDIwMCwgMjAwLCAwLjMpXCIsXG4gICAgICAgIGluZGljYXRvckxpbmVDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAgIGJnQ29sb3I6IFwiIzJhMmEyYVwiLFxuICAgICAgICB0ZXh0Q29sb3I6IFwiI2ZmZmZmZlwiXG4gICAgfSxcbiAgICBsaWdodFRoZW1lOiB7XG4gICAgICAgIGJpZENvbG9yOiBcIiMyNThBMTRcIixcbiAgICAgICAgYmlkRmlsbENvbG9yOiBcInJnYmEoODAsIDIxMCwgMTk0LCAwLjUpXCIsXG4gICAgICAgIGFza0NvbG9yOiBcIiNFQTM0MEJcIixcbiAgICAgICAgYXNrRmlsbENvbG9yOiBcInJnYmEoMjI3LCAxMTYsIDkxLCAwLjUpXCIsXG4gICAgICAgIGNhbGxDb2xvcjogXCIjQkJCRjJCXCIsXG4gICAgICAgIHNldHRsZUNvbG9yOiBcInJnYmEoMTI1LCAxMzQsIDIxNCwgMSlcIixcbiAgICAgICAgc2V0dGxlRmlsbENvbG9yOiBcInJnYmEoMTI1LCAxMzQsIDIxNCwgMC41KVwiLFxuICAgICAgICBwb3NpdGl2ZUNvbG9yOiBcIiM1MjhjMGFcIixcbiAgICAgICAgbmVnYXRpdmVDb2xvcjogXCJyZ2JhKDIyNSwgNjYsIDc0LCAxKVwiLFxuICAgICAgICBzdHJva2VDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgIHByaW1hcnlUZXh0OiBcIiMyNDI0MjRcIixcbiAgICAgICAgdm9sdW1lQ29sb3I6IFwiIzg0ODQ4NFwiLFxuXG4gICAgICAgIC8vdG9vbHRpcFxuICAgICAgICB0b29sdGlwQmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsIDAuOSlcIixcbiAgICAgICAgdG9vbHRpcENvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgdG9vbHRpcEZpbGxDb2xvcjogXCIjMDAwXCIsXG4gICAgICAgIC8vYXhpc1xuICAgICAgICBheGlzTGFiZWxzQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICBheGlzTGluZUNvbG9yOiBcInJnYmEoMjAwLCAyMDAsIDIwMCwgMC4zKVwiLFxuICAgICAgICBpbmRpY2F0b3JMaW5lQ29sb3I6IFwiIzg0ODQ4NFwiLFxuICAgICAgICBiZ0NvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgdGV4dENvbG9yOiBcIiMzZDNkM2RcIlxuICAgIH1cbn07XG4iLCJpbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XG5pbXBvcnQge0ZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50LXRpbWV6b25lXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCB7Z2V0R2F0ZXdheU5hbWV9IGZyb20gXCJjb21tb24vZ2F0ZXdheVV0aWxzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuXG5jbGFzcyBTeW1ib2xJbmZvIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnMudGlja2VyO1xuICAgICAgICB0aGlzLnRpY2tlciA9IG9wdGlvbnMudGlja2VyO1xuXG4gICAgICAgIGNvbnN0IHF1b3RlR2F0ZXdheSA9IGdldEdhdGV3YXlOYW1lKG9wdGlvbnMucXVvdGVBc3NldCk7XG4gICAgICAgIGNvbnN0IGJhc2VHYXRld2F5ID0gZ2V0R2F0ZXdheU5hbWUob3B0aW9ucy5iYXNlQXNzZXQpO1xuICAgICAgICBsZXQgY3VycmVudEV4Y2hhbmdlID1cbiAgICAgICAgICAgIHF1b3RlR2F0ZXdheSA9PT0gYmFzZUdhdGV3YXlcbiAgICAgICAgICAgICAgICA/IHF1b3RlR2F0ZXdheVxuICAgICAgICAgICAgICAgIDogcXVvdGVHYXRld2F5ICYmICFiYXNlR2F0ZXdheVxuICAgICAgICAgICAgICAgICAgICA/IHF1b3RlR2F0ZXdheVxuICAgICAgICAgICAgICAgICAgICA6ICFxdW90ZUdhdGV3YXkgJiYgYmFzZUdhdGV3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYmFzZUdhdGV3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7cXVvdGVHYXRld2F5fSAvICR7YmFzZUdhdGV3YXl9YDtcblxuICAgICAgICBsZXQge25hbWU6IGJhc2VTeW1ib2wsIHByZWZpeDogYmFzZVByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShcbiAgICAgICAgICAgIG9wdGlvbnMuYmFzZUFzc2V0XG4gICAgICAgICk7XG4gICAgICAgIGxldCB7bmFtZTogcXVvdGVTeW1ib2wsIHByZWZpeDogcXVvdGVQcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUoXG4gICAgICAgICAgICBvcHRpb25zLnF1b3RlQXNzZXRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYCR7cXVvdGVQcmVmaXggfHwgXCJcIn0ke3F1b3RlU3ltYm9sfSAvICR7YmFzZVByZWZpeCB8fFxuICAgICAgICAgICAgXCJcIn0ke2Jhc2VTeW1ib2x9ICR7XG4gICAgICAgICAgICAhIWN1cnJlbnRFeGNoYW5nZSA/IGAoJHtjdXJyZW50RXhjaGFuZ2V9KWAgOiBcIlwiXG4gICAgICAgIH1gO1xuICAgICAgICB0aGlzLnR5cGUgPSBcImJpdGNvaW5cIjtcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gXCIyNHg3XCI7XG4gICAgICAgIHRoaXMudGltZXpvbmUgPSBtb21lbnQudHouZ3Vlc3MoKTtcbiAgICAgICAgdGhpcy5kYXRhX3N0YXR1cyA9IFwic3RyZWFtaW5nXCI7XG4gICAgICAgIHRoaXMuc3VwcG9ydGVkX3Jlc29sdXRpb25zID0gb3B0aW9ucy5yZXNvbHV0aW9ucztcbiAgICAgICAgdGhpcy5oYXNfZW1wdHlfYmFycyA9IHRydWU7XG4gICAgICAgIHRoaXMucHJpY2VzY2FsZSA9IE1hdGgucG93KDEwLCBvcHRpb25zLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIikpO1xuICAgICAgICB0aGlzLnF1b3RlQXNzZXQgPSBvcHRpb25zLnF1b3RlQXNzZXQ7XG4gICAgICAgIHRoaXMuYmFzZUFzc2V0ID0gb3B0aW9ucy5iYXNlQXNzZXQ7XG4gICAgICAgIHRoaXMubWlubW92ID0gMTtcblxuICAgICAgICB0aGlzLmhhc19pbnRyYWRheSA9IHRoaXMuc3VwcG9ydGVkX3Jlc29sdXRpb25zLnJlZHVjZShcbiAgICAgICAgICAgIChzdXBwb3J0ZWQsIHIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkIHx8ICFpc05hTihwYXJzZUludChyLCAxMCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW50cmFkYXlfbXVsdGlwbGllcnMgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5maWx0ZXIociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlSW50KHIsIDEwKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGFzX3NlY29uZHMgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5yZWR1Y2UoKHN1cHBvcnRlZCwgcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZCB8fCByLmluZGV4T2YoXCJTXCIpICE9PSAtMTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNlY29uZHNfbXVsdGlwbGllcnMgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5maWx0ZXIociA9PiB7XG4gICAgICAgICAgICByZXR1cm4gci5pbmRleE9mKFwiU1wiKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaGFzX2RhaWx5ID0gdGhpcy5zdXBwb3J0ZWRfcmVzb2x1dGlvbnMucmVkdWNlKChzdXBwb3J0ZWQsIHIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWQgfHwgci5pbmRleE9mKFwiRFwiKSAhPT0gLTE7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmhhc19kYWlseSA9IHRoaXMuc3VwcG9ydGVkX3Jlc29sdXRpb25zLnJlZHVjZSgoc3VwcG9ydGVkLCByKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkIHx8IHIuaW5kZXhPZihcIkRcIikgIT09IC0xO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZXNvbHV0aW9uc0Zyb21CdWNrZXRzKGJ1Y2tldHMpIHtcbiAgICBsZXQgcmVzb2x1dGlvbnMgPSBidWNrZXRzXG4gICAgICAgIC5tYXAociA9PiB7XG4gICAgICAgICAgICBsZXQgbWludXRlID0gciAvIDYwO1xuICAgICAgICAgICAgbGV0IGRheSA9IG1pbnV0ZSAvIDYwIC8gMjQ7XG4gICAgICAgICAgICBsZXQgd2VlayA9IGRheSAvIDc7XG5cbiAgICAgICAgICAgIGlmIChtaW51dGUgPCAxKSB7XG4gICAgICAgICAgICAgICAgLy8gYmVsb3cgMSBtaW51dGUgd2UgcmV0dXJuIFNlY29uZHNcbiAgICAgICAgICAgICAgICByZXR1cm4gciArIFwiU1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXkgPCAxICYmIHBhcnNlSW50KG1pbnV0ZSwgMTApID09PSBtaW51dGUpIHtcbiAgICAgICAgICAgICAgICAvLyBiZWxvdyAxIGRheSB3ZSByZXR1cm4gTWludXRlc1xuICAgICAgICAgICAgICAgIHJldHVybiBtaW51dGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2VlayA8IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBiZWxvdyAxIHdlZWsgd2UgcmV0dXJuIERheXNcbiAgICAgICAgICAgICAgICBpZiAoZGF5ID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRheSwgMTApID09PSBkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXkgPT09IDEpIHJldHVybiBcIkRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXkgKyBcIkRcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgcmV0dXJuIHdlZWtzXG4gICAgICAgICAgICAgICAgaWYgKHdlZWsgPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQod2VlaywgMTApID09PSB3ZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2VlayArIFwiRFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihhID0+ICEhYSk7XG5cbiAgICByZXR1cm4gcmVzb2x1dGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldEJ1Y2tldEZyb21SZXNvbHV0aW9uKHIpIHtcbiAgICBpZiAociA9PT0gXCJEXCIpIHJldHVybiAyNCAqIDYwICogNjA7XG5cbiAgICBpZiAoci5pbmRleE9mKFwiV1wiKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHIucmVwbGFjZShcIkRcIiwgXCJcIiksIDEwKSAqIDcgKiAyNCAqIDYwICogNjA7XG4gICAgfSBlbHNlIGlmIChyLmluZGV4T2YoXCJEXCIpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoci5yZXBsYWNlKFwiRFwiLCBcIlwiKSwgMTApICogMjQgKiA2MCAqIDYwO1xuICAgIH0gZWxzZSBpZiAoci5pbmRleE9mKFwiU1wiKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHIucmVwbGFjZShcIlNcIiwgXCJcIiksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQociwgMTApICogNjA7XG4gICAgfVxufVxuXG5jbGFzcyBEYXRhRmVlZCB7XG4gICAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJlc29sdXRpb25zXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwcG9ydGVkX3Jlc29sdXRpb25zID0gZ2V0UmVzb2x1dGlvbnNGcm9tQnVja2V0cyhcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucmVzb2x1dGlvbnNcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwib25NYXJrZXRDaGFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgTWFya2V0c1N0b3JlLnVuc3Vic2NyaWJlKFwibWFya2V0X2NoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgTWFya2V0c1N0b3JlLnN1YnNjcmliZShcIm1hcmtldF9jaGFuZ2VcIiwgb3B0aW9uc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclN1YnMoKSB7XG4gICAgICAgIE1hcmtldHNTdG9yZS5jbGVhclN1YnMoKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIGV4Y2hhbmdlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJPUEVOLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJPcGVubGVkZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBcIk9wZW5sZWRnZXIgR2F0ZXdheVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN5bWJvbHNfdHlwZXM6IFtdLFxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZF9yZXNvbHV0aW9uczogdGhpcy5zdXBwb3J0ZWRfcmVzb2x1dGlvbnMsXG4gICAgICAgICAgICAgICAgc3VwcG9ydHNfbWFya3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN1cHBvcnRzX3NlYXJjaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3VwcG9ydHNfdGltZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgICBzZWFyY2hTeW1ib2xzKHVzZXJJbnB1dCwgZXhjaGFuZ2UsIHN5bWJvbFR5cGUsIG9uUmVzdWx0UmVhZHlDYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaFN5bWJvbHNcIiwgdXNlcklucHV0LCBleGNoYW5nZSwgc3ltYm9sVHlwZSk7XG5cbiAgICAgICAgb25SZXN1bHRSZWFkeUNhbGxiYWNrKFtdKTtcblxuICAgICAgICAvKlxuICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzeW1ib2xcIjogXCI8c2hvcnQgc3ltYm9sIG5hbWU+XCIsXG4gICAgICAgICAgICAgICAgXCJmdWxsX25hbWVcIjogXCI8ZnVsbCBzeW1ib2wgbmFtZT5cIiwgLy8gZS5nLiBCVENFOkJUQ1VTRFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCI8c3ltYm9sIGRlc2NyaXB0aW9uPlwiLFxuICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2VcIjogXCI8c3ltYm9sIGV4Y2hhbmdlIG5hbWU+XCIsXG4gICAgICAgICAgICAgICAgXCJ0aWNrZXJcIjogXCI8c3ltYm9sIHRpY2tlciBuYW1lLCBvcHRpb25hbD5cIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdG9ja1wiIC8vIG9yIFwiZnV0dXJlc1wiIG9yIFwiYml0Y29pblwiIG9yIFwiZm9yZXhcIiBvciBcImluZGV4XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgLi4uLi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICAqL1xuICAgIH1cblxuICAgIHJlc29sdmVTeW1ib2woXG4gICAgICAgIHN5bWJvbE5hbWUsXG4gICAgICAgIG9uU3ltYm9sUmVzb2x2ZWRDYWxsYmFjayxcbiAgICAgICAgb25SZXNvbHZlRXJyb3JDYWxsYmFja1xuICAgICkge1xuICAgICAgICBsZXQgW3F1b3RlLCBiYXNlXSA9IHN5bWJvbE5hbWUuc3BsaXQoXCJfXCIpO1xuICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBGZXRjaENoYWluKFwiZ2V0QXNzZXRcIiwgcXVvdGUpLFxuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFzc2V0XCIsIGJhc2UpXG4gICAgICAgIF0pXG4gICAgICAgICAgICAudGhlbihhc3NldHMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcXVvdGVBc3NldCwgYmFzZUFzc2V0XSA9IGFzc2V0cztcbiAgICAgICAgICAgICAgICBvblN5bWJvbFJlc29sdmVkQ2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgIG5ldyBTeW1ib2xJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlcjogc3ltYm9sTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHV0aW9uczogdGhpcy5zdXBwb3J0ZWRfcmVzb2x1dGlvbnNcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChvblJlc29sdmVFcnJvckNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBnZXRCYXJzKFxuICAgICAgICBzeW1ib2xJbmZvLFxuICAgICAgICByZXNvbHV0aW9uLFxuICAgICAgICBmcm9tLFxuICAgICAgICB0byxcbiAgICAgICAgb25IaXN0b3J5Q2FsbGJhY2ssXG4gICAgICAgIG9uRXJyb3JDYWxsYmFjayxcbiAgICAgICAgZmlyc3REYXRhUmVxdWVzdFxuICAgICkge1xuICAgICAgICBmcm9tICo9IDEwMDA7XG4gICAgICAgIHRvICo9IDEwMDA7XG4gICAgICAgIGxldCBiYXJzID0gdGhpcy5fZ2V0SGlzdG9yeSgpO1xuICAgICAgICB0aGlzLmxhdGVzdEJhciA9IGJhcnNbYmFycy5sZW5ndGggLSAxXTtcbiAgICAgICAgYmFycyA9IGJhcnMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEudGltZSA+PSBmcm9tICYmIGEudGltZSA8PSB0bztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgIT09IHJlc29sdXRpb24pIHtcbiAgICAgICAgICAgIGlmICghZmlyc3REYXRhUmVxdWVzdCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBsZXQgbmV3QnVja2V0U2l6ZSA9IGdldEJ1Y2tldEZyb21SZXNvbHV0aW9uKHJlc29sdXRpb24pO1xuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuY2hhbmdlQnVja2V0U2l6ZShuZXdCdWNrZXRTaXplKTtcblxuICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNBY3Rpb25zLnVuU3Vic2NyaWJlTWFya2V0KFxuICAgICAgICAgICAgICAgIHN5bWJvbEluZm8ucXVvdGVBc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBzeW1ib2xJbmZvLmJhc2VBc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5zdWJzY3JpYmVNYXJrZXQoXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbEluZm8uYmFzZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xJbmZvLnF1b3RlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIG5ld0J1Y2tldFNpemVcbiAgICAgICAgICAgICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFycyA9IHRoaXMuX2dldEhpc3RvcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RCYXIgPSBiYXJzW2JhcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGJhcnMgPSBiYXJzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnRpbWUgPj0gZnJvbSAmJiBhLnRpbWUgPD0gdG87XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gcmVzb2x1dGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXJzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkhpc3RvcnlDYWxsYmFjayhiYXJzLCB7bm9EYXRhOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgICAgIG9uSGlzdG9yeUNhbGxiYWNrKGJhcnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgICAgLy8gICAgIFwiZ2V0QmFyc1wiLFxuICAgICAgICAvLyAgICAgc3ltYm9sSW5mby50aWNrZXIsXG4gICAgICAgIC8vICAgICByZXNvbHV0aW9uLFxuICAgICAgICAvLyAgICAgXCJmaXJzdERhdGFSZXF1ZXN0XCIsXG4gICAgICAgIC8vICAgICBmaXJzdERhdGFSZXF1ZXN0LFxuICAgICAgICAvLyAgICAgXCJiYXJzXCIsXG4gICAgICAgIC8vICAgICBiYXJzXG4gICAgICAgIC8vICk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSByZXNvbHV0aW9uO1xuICAgICAgICBpZiAoIWJhcnMubGVuZ3RoKSByZXR1cm4gb25IaXN0b3J5Q2FsbGJhY2soYmFycywge25vRGF0YTogdHJ1ZX0pO1xuXG4gICAgICAgIG9uSGlzdG9yeUNhbGxiYWNrKGJhcnMpO1xuICAgIH1cblxuICAgIF9nZXRIaXN0b3J5KCkge1xuICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkucHJpY2VEYXRhO1xuICAgIH1cblxuICAgIHN1YnNjcmliZUJhcnMoXG4gICAgICAgIHN5bWJvbEluZm8sXG4gICAgICAgIHJlc29sdXRpb24sXG4gICAgICAgIG9uUmVhbHRpbWVDYWxsYmFjayxcbiAgICAgICAgc3Vic2NyaWJlclVJRCxcbiAgICAgICAgb25SZXNldENhY2hlTmVlZGVkQ2FsbGJhY2tcbiAgICApIHtcbiAgICAgICAgTWFya2V0c1N0b3JlLnVuc3Vic2NyaWJlKFwic3Vic2NyaWJlQmFyc1wiKTtcbiAgICAgICAgb25SZXNldENhY2hlTmVlZGVkQ2FsbGJhY2soKTtcbiAgICAgICAgTWFya2V0c1N0b3JlLnN1YnNjcmliZShcInN1YnNjcmliZUJhcnNcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGJhcnMgPSB0aGlzLl9nZXRIaXN0b3J5KCk7XG4gICAgICAgICAgICBsZXQgbmV3QmFycyA9IGJhcnMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5sYXRlc3RCYXIpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnRpbWUgPiB0aGlzLmxhdGVzdEJhci50aW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN1YnNjcmliZUJhcnNcIiwgTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWN0aXZlTWFya2V0LCBcImZvdW5kIG5ldyBiYXJzOlwiLCBuZXdCYXJzKTtcbiAgICAgICAgICAgIGlmIChuZXdCYXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5ld0JhcnMuZm9yRWFjaChiYXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvblJlYWx0aW1lQ2FsbGJhY2soYmFyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdEJhciA9IG5ld0JhcnNbbmV3QmFycy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbGF0ZXN0IGJhciBpcyBkaWZmZXJlbnRcbiAgICAgICAgICAgICAgICBsZXQgZGlkQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMubGF0ZXN0QmFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhdGVzdEJhcltrZXldICE9PSBiYXJzW2JhcnMubGVuZ3RoIC0gMV1ba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlkQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGlkQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uUmVhbHRpbWVDYWxsYmFjayhiYXJzW2JhcnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdW5zdWJzY3JpYmVCYXJzKCkge1xuICAgICAgICAvKlxuICAgICAgICAqIFRoaXMgaXMgQUxXQVlTIGNhbGxlZCBhZnRlciBzdWJzY3JpYmVCYXJzIGZvciBzb21lIHJlYXNvbiwgYnV0XG4gICAgICAgICogc29tZXRpbWVzIGl0IGV4ZWN1dGVzIEJFRk9SRSB0aGUgc3Vic2NyaWJlIGNhbGwgaW4gc3Vic2NyaWJlQmFycyBhbmRcbiAgICAgICAgKiBzb21ldGltZXMgQUZURVIuIFRoaXMgY2F1c2VzIHRoZSBjYWxsYmFjayB0byBiZSBjbGVhcmVkIGFuZCB3ZSBzdG9wXG4gICAgICAgICogcmVjZWl2aW5nIHVwZGF0ZXMgZnJvbSB0aGUgTWFya2V0U3RvcmUuIFVubGVzcyB3ZSBmaW5kIGl0IGNhdXNlcyBidWdzLFxuICAgICAgICAqIGl0J3MgYmVzdCB0byBqdXN0IG5vdCB1c2UgdGhpcy5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gTWFya2V0c1N0b3JlLnVuc3Vic2NyaWJlKFwic3Vic2NyaWJlQmFyc1wiKTtcbiAgICAgICAgLy8gdGhpcy5sYXRlc3RCYXIgPSBudWxsO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUhpc3RvcnlEZXB0aChyZXNvbHV0aW9uLCByZXNvbHV0aW9uQmFjaywgaW50ZXJ2YWxCYWNrKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0U2VydmVyVGltZShjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIH1cbn1cblxuY29uc3Qgc3VwcG9ydGVkVGltZVpvbmVzID0gW1xuICAgIFwiQW1lcmljYS9BcmdlbnRpbmEvQnVlbm9zX0FpcmVzXCIsXG4gICAgXCJBbWVyaWNhL0JvZ290YVwiLFxuICAgIFwiQW1lcmljYS9DYXJhY2FzXCIsXG4gICAgXCJBbWVyaWNhL0NoaWNhZ29cIixcbiAgICBcIkFtZXJpY2EvRWxfU2FsdmFkb3JcIixcbiAgICBcIkFtZXJpY2EvTG9zX0FuZ2VsZXNcIixcbiAgICBcIkFtZXJpY2EvTWV4aWNvX0NpdHlcIixcbiAgICBcIkFtZXJpY2EvTmV3X1lvcmtcIixcbiAgICBcIkFtZXJpY2EvUGhvZW5peFwiLFxuICAgIFwiQW1lcmljYS9TYW9fUGF1bG9cIixcbiAgICBcIkFtZXJpY2EvVG9yb250b1wiLFxuICAgIFwiQW1lcmljYS9WYW5jb3V2ZXJcIixcbiAgICBcIkFzaWEvQWxtYXR5XCIsXG4gICAgXCJBc2lhL0FzaGtoYWJhZFwiLFxuICAgIFwiQXNpYS9CYW5na29rXCIsXG4gICAgXCJBc2lhL0R1YmFpXCIsXG4gICAgXCJBc2lhL0hvbmdfS29uZ1wiLFxuICAgIFwiQXNpYS9LYXRobWFuZHVcIixcbiAgICBcIkFzaWEvS29sa2F0YVwiLFxuICAgIFwiQXNpYS9TZW91bFwiLFxuICAgIFwiQXNpYS9TaGFuZ2hhaVwiLFxuICAgIFwiQXNpYS9TaW5nYXBvcmVcIixcbiAgICBcIkFzaWEvVGFpcGVpXCIsXG4gICAgXCJBc2lhL1RlaHJhblwiLFxuICAgIFwiQXNpYS9Ub2t5b1wiLFxuICAgIFwiQXVzdHJhbGlhL0FDVFwiLFxuICAgIFwiQXVzdHJhbGlhL0FkZWxhaWRlXCIsXG4gICAgXCJBdXN0cmFsaWEvQnJpc2JhbmVcIixcbiAgICBcIkF1c3RyYWxpYS9TeWRuZXlcIixcbiAgICBcIkV1cm9wZS9BdGhlbnNcIixcbiAgICBcIkV1cm9wZS9CZXJsaW5cIixcbiAgICBcIkV1cm9wZS9Jc3RhbmJ1bFwiLFxuICAgIFwiRXVyb3BlL0xvbmRvblwiLFxuICAgIFwiRXVyb3BlL01hZHJpZFwiLFxuICAgIFwiRXVyb3BlL01vc2Nvd1wiLFxuICAgIFwiRXVyb3BlL1BhcmlzXCIsXG4gICAgXCJFdXJvcGUvV2Fyc2F3XCIsXG4gICAgXCJFdXJvcGUvWnVyaWNoXCIsXG4gICAgXCJQYWNpZmljL0F1Y2tsYW5kXCIsXG4gICAgXCJQYWNpZmljL0NoYXRoYW1cIixcbiAgICBcIlBhY2lmaWMvRmFrYW9mb1wiLFxuICAgIFwiUGFjaWZpYy9Ib25vbHVsdVwiLFxuICAgIFwiVVMvTW91bnRhaW5cIlxuXTtcblxuZnVuY3Rpb24gZ2V0VFZUaW1lem9uZSgpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gbW9tZW50LnR6Lmd1ZXNzKCk7XG4gICAgY29uc3QgZGVmYXVsdFpvbmUgPSBcIkV1cm9wZS9Mb25kb25cIjtcblxuICAgIGxldCBpc1N1cHBvcnRlZCA9IHN1cHBvcnRlZFRpbWVab25lcy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMTtcbiAgICBpZiAoaXNTdXBwb3J0ZWQpIHJldHVybiBjdXJyZW50O1xuICAgIGVsc2Uge1xuICAgICAgICAvKiBUcnkgdG8gZmluZCBhIG1hdGNoaW5nIHRpbWV6b25lIGZyb20gdGhlIGxpbWl0ZWQgbGlzdCBzdXBwb3J0ZWQgYnkgVHJhZGluZ1ZpZXcgKi9cbiAgICAgICAgY29uc3QgdGltZSA9IG1vbWVudCgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGFjdHVhbCA9IG1vbWVudC50eih0aW1lLCBjdXJyZW50KS5mb3JtYXQoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdXBwb3J0ZWRUaW1lWm9uZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB6b25lVGltZSA9IG1vbWVudC50eih0aW1lLCBzdXBwb3J0ZWRUaW1lWm9uZXNbaV0pO1xuICAgICAgICAgICAgaWYgKHpvbmVUaW1lLmZvcm1hdCgpID09PSBhY3R1YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoX19ERVZfXylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICBgRm91bmQgYSBtYXRjaCBmb3IgJHtjdXJyZW50fSB0aW1lem9uZSwgdXNpbmcgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWRUaW1lWm9uZXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gRm91bmQgYSBtYXRjaCwgcmV0dXJuIHRoYXQgem9uZVxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRUaW1lWm9uZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coXG4gICAgICAgIGBObyBtYXRjaGluZyB0aW1lem9uZSBmb3VuZCBmb3IgJHtjdXJyZW50fSwgc2V0dGluZyB0byBkZWZhdWx0IHZhbHVlIG9mIEV1cm9wZS9Mb25kb25gXG4gICAgKTtcbiAgICByZXR1cm4gZGVmYXVsdFpvbmU7XG59XG5cbmV4cG9ydCB7RGF0YUZlZWQsIFN5bWJvbEluZm8sIGdldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMsIGdldFRWVGltZXpvbmV9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0SGlnaGNoYXJ0IGZyb20gXCJyZWFjdC1oaWdoY2hhcnRzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtjbG9uZURlZXB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcImFzc2V0cy9jb2xvcnNcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQge2RpZE9yZGVyc0NoYW5nZX0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIERlcHRoSGlnaENoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzZXR0bGVDaGVjayA9IGlzTmFOKG5leHRQcm9wcy5mZWVkUHJpY2UpXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IG5leHRQcm9wcy5mZWVkUHJpY2UgIT09IHRoaXMucHJvcHMuZmVlZFByaWNlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZGlkT3JkZXJzQ2hhbmdlKG5leHRQcm9wcy5vcmRlcnMsIHRoaXMucHJvcHMub3JkZXJzKSB8fFxuICAgICAgICAgICAgZGlkT3JkZXJzQ2hhbmdlKG5leHRQcm9wcy5jYWxsX29yZGVycywgdGhpcy5wcm9wcy5jYWxsX29yZGVycykgfHxcbiAgICAgICAgICAgIHNldHRsZUNoZWNrIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuZmVlZFByaWNlICE9PSB0aGlzLnByb3BzLmZlZWRQcmljZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5oZWlnaHQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5sZWZ0T3JkZXJCb29rICE9PSB0aGlzLnByb3BzLmxlZnRPcmRlckJvb2sgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5MQ1AgIT09IHRoaXMucHJvcHMuTENQIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuc2hvd0NhbGxMaW1pdCAhPT0gdGhpcy5wcm9wcy5zaG93Q2FsbExpbWl0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuaGFzUHJlZGljdGlvbiAhPT0gdGhpcy5wcm9wcy5oYXNQcmVkaWN0aW9uIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuZmVlZFByaWNlICE9PSB0aGlzLnByb3BzLmZlZWRQcmljZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm1hcmtldFJlYWR5ICE9PSB0aGlzLnByb3BzLm1hcmtldFJlYWR5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVmbG93Q2hhcnQoNTAwKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnJlZnMuZGVwdGhDaGFydCAmJlxuICAgICAgICAgICAgbmV4dFByb3BzLnZlcnRpY2FsT3JkZXJib29rICE9PSB0aGlzLnByb3BzLnZlcnRpY2FsT3JkZXJib29rXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5yZWZsb3dDaGFydCgxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2VudGVyUmVmKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBTY3JvbGwgPSB0aGlzLnByb3BzLmNlbnRlclJlZi5zY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNlbnRlclJlZikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jZW50ZXJSZWYuc2Nyb2xsVG9wID0gdGhpcy50ZW1wU2Nyb2xsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmbG93Q2hhcnQodGltZW91dCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuZGVwdGhDaGFydCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5kZXB0aENoYXJ0LmNoYXJ0LnJlZmxvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBfZ2V0VGhlbWVDb2xvcnMocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb2xvcnNbcHJvcHMudGhlbWVdO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGZsYXRfYmlkcyxcbiAgICAgICAgICAgIGZsYXRfYXNrcyxcbiAgICAgICAgICAgIGZsYXRfY2FsbHMsXG4gICAgICAgICAgICBmbGF0X3NldHRsZXMsXG4gICAgICAgICAgICB0b3RhbEJpZHMsXG4gICAgICAgICAgICB0b3RhbEFza3MsXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBmZWVkUHJpY2VcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpbWFyeVRleHQsXG4gICAgICAgICAgICBjYWxsQ29sb3IsXG4gICAgICAgICAgICBzZXR0bGVDb2xvcixcbiAgICAgICAgICAgIHNldHRsZUZpbGxDb2xvcixcbiAgICAgICAgICAgIGJpZENvbG9yLFxuICAgICAgICAgICAgYmlkRmlsbENvbG9yLFxuICAgICAgICAgICAgYXNrQ29sb3IsXG4gICAgICAgICAgICBhc2tGaWxsQ29sb3IsXG4gICAgICAgICAgICBheGlzTGluZUNvbG9yXG4gICAgICAgIH0gPSB0aGlzLl9nZXRUaGVtZUNvbG9ycygpO1xuXG4gICAgICAgIGxldCB7bmFtZTogYmFzZVN5bWJvbCwgcHJlZml4OiBiYXNlUHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKGJhc2UpO1xuICAgICAgICBsZXQge25hbWU6IHF1b3RlU3ltYm9sLCBwcmVmaXg6IHF1b3RlUHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKHF1b3RlKTtcbiAgICAgICAgYmFzZVN5bWJvbCA9IChiYXNlUHJlZml4IHx8IFwiXCIpICsgYmFzZVN5bWJvbDtcbiAgICAgICAgcXVvdGVTeW1ib2wgPSAocXVvdGVQcmVmaXggfHwgXCJcIikgKyBxdW90ZVN5bWJvbDtcblxuICAgICAgICBsZXQgZmxhdEJpZHMgPSBjbG9uZURlZXAoZmxhdF9iaWRzKSxcbiAgICAgICAgICAgIGZsYXRBc2tzID0gY2xvbmVEZWVwKGZsYXRfYXNrcyksXG4gICAgICAgICAgICBmbGF0Q2FsbHMgPSBjbG9uZURlZXAoZmxhdF9jYWxscyksXG4gICAgICAgICAgICBmbGF0U2V0dGxlcyA9IGNsb25lRGVlcChmbGF0X3NldHRsZXMpO1xuXG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJlYVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMCwgMCwgMClcIixcbiAgICAgICAgICAgICAgICBzcGFjaW5nOiBbMTAsIDAsIDUsIDBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYW5nZVNlbGVjdG9yOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YUdyb3VwaW5nOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc2hhcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjc1KVwiLFxuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcblx0XHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD4ke2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnByaWNlXCIpfTo8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPiR7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICR7YmFzZVN5bWJvbH0vJHtxdW90ZVN5bWJvbH08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPiR7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVhbnRpdHlcIil9OjwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCI+JHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICR7cXVvdGVTeW1ib2x9PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRgO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW10sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByaW1hcnlUZXh0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3Bwb3NpdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBncmlkTGluZUNvbG9yOiBcInJnYmEoMTk2LCAxOTYsIDE5NiwgMC4zMClcIixcbiAgICAgICAgICAgICAgICBncmlkWkluZGV4OiAxLFxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcjoge1xuICAgICAgICAgICAgICAgICAgICBzbmFwOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlSW5kaWNhdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJpbWFyeVRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmb3JtYXR0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMudmFsdWUgLyBwb3dlcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3JkaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGluZUNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbG90TGluZXM6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBhcmVhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVNb3VzZVRyYWNraW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENlbnRlciB0aGUgY2hhcnRzIGJldHdlZW4gYmlkcyBhbmQgYXNrc1xuICAgICAgICBpZiAoZmxhdEJpZHMubGVuZ3RoID4gMCAmJiBmbGF0QXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgbWlkZGxlVmFsdWUgPVxuICAgICAgICAgICAgICAgIChmbGF0QXNrc1swXVswXSArIGZsYXRCaWRzW2ZsYXRCaWRzLmxlbmd0aCAtIDFdWzBdKSAvIDI7XG5cbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5taW4gPSBtaWRkbGVWYWx1ZSAqIDAuNDtcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5tYXggPSBtaWRkbGVWYWx1ZSAqIDEuNjtcbiAgICAgICAgICAgIGlmIChjb25maWcueEF4aXMubWF4IDwgZmxhdEFza3NbMF1bMF0pIHtcbiAgICAgICAgICAgICAgICBjb25maWcueEF4aXMubWF4ID0gZmxhdEFza3NbMF1bMF0gKiAxLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLnhBeGlzLm1pbiA+IGZsYXRCaWRzW2ZsYXRCaWRzLmxlbmd0aCAtIDFdWzBdKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnhBeGlzLm1pbiA9IGZsYXRCaWRzW2ZsYXRCaWRzLmxlbmd0aCAtIDFdWzBdICogMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHlNYXggPSAwO1xuICAgICAgICAgICAgZmxhdEJpZHMuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYlswXSA+PSBjb25maWcueEF4aXMubWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHlNYXggPSBNYXRoLm1heChiWzFdLCB5TWF4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZsYXRBc2tzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFbMF0gPD0gY29uZmlnLnhBeGlzLm1heCkge1xuICAgICAgICAgICAgICAgICAgICB5TWF4ID0gTWF0aC5tYXgoYVsxXSwgeU1heCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25maWcueUF4aXMubWF4ID0geU1heCAqIDEuMTU7XG5cbiAgICAgICAgICAgIC8vIEFkanVzdCB5IGF4aXMgbGFiZWwgZGVjaW1hbHNcbiAgICAgICAgICAgIGxldCB5TGFiZWxEZWNpbWFscyA9IHlNYXggPiAxMCA/IDAgOiB5TWF4ID4gMSA/IDIgOiA1O1xuICAgICAgICAgICAgY29uZmlnLnlBeGlzLmxhYmVscy5mb3JtYXR0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0X251bWJlcih0aGlzLnZhbHVlLCB5TGFiZWxEZWNpbWFscyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGZsYXRCaWRzLmxlbmd0aCAmJiAhZmxhdEFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25maWcueEF4aXMubWluID0gZmxhdEJpZHNbZmxhdEJpZHMubGVuZ3RoIC0gMV1bMF0gKiAwLjQ7XG4gICAgICAgICAgICBjb25maWcueEF4aXMubWF4ID0gZmxhdEJpZHNbZmxhdEJpZHMubGVuZ3RoIC0gMV1bMF0gKiAxLjY7XG4gICAgICAgIH0gZWxzZSBpZiAoZmxhdEFza3MubGVuZ3RoICYmICFmbGF0Qmlkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5taW4gPSAwO1xuICAgICAgICAgICAgY29uZmlnLnhBeGlzLm1heCA9IGZsYXRBc2tzWzBdWzBdICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhhc1ByZWRpY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5taW4gPSAtMC4wNTtcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5tYXggPSAxLjA1O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHBsb3RsaW5lcyBpZiBkZWZpbmVkXG4gICAgICAgIC8vIGlmIChmYWxzZXRoaXMucHJvcHMucGxvdExpbmUpIHtcbiAgICAgICAgLy9cdCBjb25maWcueEF4aXMucGxvdExpbmVzLnB1c2goe1xuICAgICAgICAvL1x0XHQgY29sb3I6IFwicmVkXCIsXG4gICAgICAgIC8vXHRcdCBpZDogXCJwbG90X2xpbmVcIixcbiAgICAgICAgLy9cdFx0IGRhc2hTdHlsZTogXCJsb25nZGFzaGRvdFwiLFxuICAgICAgICAvL1x0XHQgdmFsdWU6IHRoaXMucHJvcHMucGxvdExpbmUgKiBwb3dlcixcbiAgICAgICAgLy9cdFx0IHdpZHRoOiAxLFxuICAgICAgICAvL1x0XHQgekluZGV4OiA1XG4gICAgICAgIC8vXHQgfSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBNYXJrZXQgYXNzZXRcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuTENQKSB7XG4gICAgICAgICAgICBjb25maWcueEF4aXMucGxvdExpbmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbG9yOiBheGlzTGluZUNvbG9yLFxuICAgICAgICAgICAgICAgIGlkOiBcInBsb3RfbGluZVwiLFxuICAgICAgICAgICAgICAgIGRhc2hTdHlsZTogXCJsb25nZGFzaFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLkxDUCxcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleHBsb3Jlci5ibG9jay5jYWxsX2xpbWl0XCIpLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByaW1hcnlUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgekluZGV4OiA1XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLlNRUCkge1xuICAgICAgICAvL1x0IGNvbmZpZy54QXhpcy5wbG90TGluZXMucHVzaCh7XG4gICAgICAgIC8vXHRcdCBjb2xvcjogXCIjQjZCNkI2XCIsXG4gICAgICAgIC8vXHRcdCBpZDogXCJwbG90X2xpbmVcIixcbiAgICAgICAgLy9cdFx0IGRhc2hTdHlsZTogXCJsb25nZGFzaFwiLFxuICAgICAgICAvL1x0XHQgdmFsdWU6IHRoaXMucHJvcHMuU1FQICogcG93ZXIsXG4gICAgICAgIC8vXHRcdCBsYWJlbDoge1xuICAgICAgICAvL1x0XHRcdCB0ZXh0OiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5zcXVlZXplXCIpLFxuICAgICAgICAvL1x0XHRcdCBzdHlsZToge1xuICAgICAgICAvL1x0XHRcdFx0IGNvbG9yOiBcIiNEQURBREFcIixcbiAgICAgICAgLy9cdFx0XHRcdCBmb250V2VpZ2h0OiBcImJvbGRcIlxuICAgICAgICAvL1x0XHRcdCB9XG4gICAgICAgIC8vXHRcdCB9LFxuICAgICAgICAvL1x0XHQgd2lkdGg6IDIsXG4gICAgICAgIC8vXHRcdCB6SW5kZXg6IDVcbiAgICAgICAgLy9cdCB9KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmIChmZWVkUHJpY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHNldHRsZW1lbnRDb2xvciA9IGJhc2UuaGFzKFwiYml0YXNzZXRcIikgPyBhc2tDb2xvciA6IGJpZENvbG9yO1xuICAgICAgICAgICAgY29uZmlnLnhBeGlzLnBsb3RMaW5lcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogc2V0dGxlbWVudENvbG9yLFxuICAgICAgICAgICAgICAgIGlkOiBcInBsb3RfbGluZVwiLFxuICAgICAgICAgICAgICAgIGRhc2hTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmZWVkUHJpY2UsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYmxvY2suZmVlZF9wcmljZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcmltYXJ5VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBjYWxscyBpZiBwcmVzZW50XG4gICAgICAgICAgICBpZiAoZmxhdENhbGxzICYmIGZsYXRDYWxscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuc2VyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgQ2FsbCAke3F1b3RlU3ltYm9sfWAsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZsYXRDYWxscyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNhbGxDb2xvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHNldHRsZSBvcmRlcnNcbiAgICAgICAgaWYgKGZlZWRQcmljZSAmJiAoZmxhdFNldHRsZXMgJiYgZmxhdFNldHRsZXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgY29uZmlnLnNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgU2V0dGxlICR7cXVvdGVTeW1ib2x9YCxcbiAgICAgICAgICAgICAgICBkYXRhOiBmbGF0U2V0dGxlcyxcbiAgICAgICAgICAgICAgICBjb2xvcjogc2V0dGxlQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiBzZXR0bGVGaWxsQ29sb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVzaCBhc2tzIGFuZCBiaWRzXG4gICAgICAgIGlmIChmbGF0Qmlkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZXJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgc3RlcDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IGBCaWQgJHtxdW90ZVN5bWJvbH1gLFxuICAgICAgICAgICAgICAgIGRhdGE6IGZsYXRCaWRzLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBiaWRDb2xvcixcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IGJpZEZpbGxDb2xvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmxhdEFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25maWcuc2VyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHN0ZXA6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IGBBc2sgJHtxdW90ZVN5bWJvbH1gLFxuICAgICAgICAgICAgICAgIGRhdGE6IGZsYXRBc2tzLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhc2tDb2xvcixcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IGFza0ZpbGxDb2xvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXggdGhlIGhlaWdodCBpZiBkZWZpbmVkLCBlbHNlIHVzZSA0MDBweDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25maWcuY2hhcnQuaGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcuY2hhcnQuaGVpZ2h0ID0gXCI0MDBweFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIG9uQ2xpY2sgZXZlbnQgbGlzdGVuZXIgaWYgZGVmaW5lZFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgICBjb25maWcuY2hhcnQuZXZlbnRzID0ge1xuICAgICAgICAgICAgICAgIGNsaWNrOiB0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5vRnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICB7IWZsYXRCaWRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhdEFza3MubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICFmbGF0Q2FsbHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm8tZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm5vX2RhdGFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9UZXh0ID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJpZC10b3RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJpZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vVGV4dCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhc2stdG90YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxBc2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGVTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtmbGF0QmlkcyB8fCBmbGF0QXNrcyB8fCBmbGF0Q2FsbHMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RIaWdoY2hhcnQgY29uZmlnPXtjb25maWd9IC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgbm8tcGFkZGluZyBtaWRkbGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWJvcmRlcmVkXCIgc3R5bGU9e3ttYXJnaW46IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9UZXh0ID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlkLXRvdGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJpZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9UZXh0ID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXNrLXRvdGFsIGZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEFza3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFmbGF0Qmlkcy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFmbGF0QXNrcy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFmbGF0Q2FsbHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uubm9fZGF0YVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmxhdEJpZHMgfHwgZmxhdEFza3MgfHwgZmxhdENhbGxzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEhpZ2hjaGFydCByZWY9XCJkZXB0aENoYXJ0XCIgY29uZmlnPXtjb25maWd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5EZXB0aEhpZ2hDaGFydC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZmxhdF9iaWRzOiBbXSxcbiAgICBmbGF0X2Fza3M6IFtdLFxuICAgIG9yZGVyczoge30sXG4gICAgbm9UZXh0OiBmYWxzZSxcbiAgICBub0ZyYW1lOiB0cnVlXG59O1xuXG5EZXB0aEhpZ2hDaGFydC5wcm9wVHlwZXMgPSB7XG4gICAgZmxhdF9iaWRzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBmbGF0X2Fza3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIG9yZGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXB0aEhpZ2hDaGFydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBOb3RpZmllciBmcm9tIFwiLi9Ob3RpZmllclwiO1xuXG5jbGFzcyBOb3RpZmllckNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0FjY291bnRTdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE5vdGlmaWVyIC8+XG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWVyQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy9ub3RpZmljYXRpb25cIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tIFwiLi4vQmxvY2tjaGFpbi9PcGVyYXRpb25cIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtDaGFpblR5cGVzIGFzIEdyYXBoQ2hhaW5UeXBlc30gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5sZXQge29wZXJhdGlvbnN9ID0gR3JhcGhDaGFpblR5cGVzO1xuXG5sZXQgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XG5cbmNsYXNzIE5vdGlmaWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50ICYmXG4gICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudC5zaXplICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IGNoID1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpLmZpcnN0KClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcImhpc3RvcnlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBsZXQgbmggPVxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50LmdldChcImhpc3RvcnlcIikgJiZcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpLmZpcnN0KClcbiAgICAgICAgICAgICAgICAgICAgPyBuZXh0UHJvcHMuYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFwiaGlzdG9yeVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9KUygpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChuaCAmJiBjaCkge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgdHJpZ2dlciBub3RpZmljYXRpb25zIGZvciBvcmRlciBmaWxsc1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgb3BzW25oLm9wWzBdXSA9PT0gXCJmaWxsX29yZGVyXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgKCghY2ggJiYgbmguaWQpIHx8IG5oLmlkICE9PSBjaC5pZClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgWmZBcGkucHVibGlzaChcImFjY291bnQtbm90aWZ5XCIsIFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFpmQXBpLnB1Ymxpc2goXCJhY2NvdW50LW5vdGlmeVwiLCBcImNsb3NlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghbmV4dFByb3BzLmFjY291bnQgfHwgIXRoaXMucHJvcHMuYWNjb3VudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpXG4gICAgICAgICAgICApIHx8ICFJbW11dGFibGUuaXMobmV4dFByb3BzLmFjY291bnQsIHRoaXMucHJvcHMuYWNjb3VudClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghYWNjb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdHJ4LCBpbmZvO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKS5zaXplXG4gICAgICAgICkge1xuICAgICAgICAgICAgdHJ4ID0gdGhpcy5wcm9wcy5hY2NvdW50XG4gICAgICAgICAgICAgICAgLmdldChcImhpc3RvcnlcIilcbiAgICAgICAgICAgICAgICAuZmlyc3QoKVxuICAgICAgICAgICAgICAgIC50b0pTKCk7XG4gICAgICAgICAgICBpZiAodHJ4KSB7XG4gICAgICAgICAgICAgICAgaW5mbyA9IChcbiAgICAgICAgICAgICAgICAgICAgPE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0cnguaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcD17dHJ4Lm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0cngucmVzdWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9e3RyeC5ibG9ja19udW19XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXthY2NvdW50LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURhdGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlRmVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRyeCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbi5TdGF0aWNcbiAgICAgICAgICAgICAgICBpZD1cImFjY291bnQtbm90aWZ5XCJcbiAgICAgICAgICAgICAgICB0aXRsZT17bnVsbH1cbiAgICAgICAgICAgICAgICBpbWFnZT1cIlwiXG4gICAgICAgICAgICAgICAgd3JhcHBlckVsZW1lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e2luZm99PC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9Ob3RpZmljYXRpb24uU3RhdGljPlxuICAgICAgICApO1xuICAgIH1cbn1cbk5vdGlmaWVyID0gQmluZFRvQ2hhaW5TdGF0ZShOb3RpZmllcik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gXCIuLi9Nb2RhbC9CYXNlTW9kYWxcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdygpIHtcbiAgICAgICAgbGV0IG1vZGFsSWQgPSBcIm1vZGFsX2NvbmZpcm1fXCIgKyB0aGlzLnByb3BzLnR5cGU7XG4gICAgICAgIFpmQXBpLnB1Ymxpc2gobW9kYWxJZCwgXCJvcGVuXCIpO1xuICAgIH1cblxuICAgIF9vbkZvcmNlKHZhbHVlLCBlKSB7XG4gICAgICAgIGxldCBtb2RhbElkID0gXCJtb2RhbF9jb25maXJtX1wiICsgdGhpcy5wcm9wcy50eXBlO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgWmZBcGkucHVibGlzaChtb2RhbElkLCBcImNsb3NlXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHRoaXMucHJvcHMub25Gb3JjZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt0eXBlLCBkaWZmLCBoYXNPcmRlcnN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJhc2VNb2RhbCBpZD17XCJtb2RhbF9jb25maXJtX1wiICsgdHlwZX0gb3ZlcmxheT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJoM1wiIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5jb25maXJtXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgeyFoYXNPcmRlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJleGNoYW5nZS5jb25maXJtX25vX29yZGVyc19cIiArIHR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wiZXhjaGFuZ2UuY29uZmlybV9cIiArIHR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZj17dXRpbHMuZm9ybWF0X251bWJlcihkaWZmLCAyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCIgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjJyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Gb3JjZS5iaW5kKHRoaXMsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Gb3JjZS5iaW5kKHRoaXMsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQmFzZU1vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgQXNzZXRJbWFnZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldEltYWdlXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgUHJpY2VTdGF0V2l0aExhYmVsIGZyb20gXCIuL1ByaWNlU3RhdFdpdGhMYWJlbFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBFeGNoYW5nZUhlYWRlckNvbGxhdGVyYWwgZnJvbSBcIi4vRXhjaGFuZ2VIZWFkZXJDb2xsYXRlcmFsXCI7XG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gXCIuLi9Nb2RhbC9CYXNlTW9kYWxcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGNoYW5nZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdm9sdW1lU2hvd1F1b3RlOiB0cnVlLFxuICAgICAgICAgICAgY2hhcnRIZWlnaHQ6IHByb3BzLmNoYXJ0SGVpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRDaGFydEhlaWdodCA9IHRoaXMuc2V0Q2hhcnRIZWlnaHQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghbmV4dFByb3BzLm1hcmtldFJlYWR5KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9hZGRNYXJrZXQocXVvdGUsIGJhc2UpIHtcbiAgICAgICAgbGV0IG1hcmtldElEID0gYCR7cXVvdGV9XyR7YmFzZX1gO1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKSkge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmFkZFN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnJlbW92ZVN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlVm9sdW1lQmFzZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2b2x1bWVTaG93UXVvdGU6ICF0aGlzLnN0YXRlLnZvbHVtZVNob3dRdW90ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYXJrZXRQaWNrZXIoYXNzZXQpIHtcbiAgICAgICAgbGV0IHtzZWxlY3RlZE1hcmtldFBpY2tlckFzc2V0fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldCA9XG4gICAgICAgICAgICAhIXNlbGVjdGVkTWFya2V0UGlja2VyQXNzZXQgJiYgc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldCA9PSBhc3NldFxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDogYXNzZXQ7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZE1hcmtldFBpY2tlckFzc2V0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uVG9nZ2xlTWFya2V0UGlja2VyKHNlbGVjdGVkTWFya2V0UGlja2VyQXNzZXQpO1xuICAgIH1cblxuICAgIHNldENoYXJ0SGVpZ2h0KCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlQ2hhcnRIZWlnaHQoe3ZhbHVlOiB0aGlzLnN0YXRlLmNoYXJ0SGVpZ2h0fSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBxdW90ZUFzc2V0LFxuICAgICAgICAgICAgYmFzZUFzc2V0LFxuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHMsXG4gICAgICAgICAgICBoYXNQcmVkaWN0aW9uLFxuICAgICAgICAgICAgZmVlZFByaWNlLFxuICAgICAgICAgICAgc2hvd0NhbGxMaW1pdCxcbiAgICAgICAgICAgIGxvd2VzdENhbGxQcmljZSxcbiAgICAgICAgICAgIG1hcmtldFJlYWR5LFxuICAgICAgICAgICAgbGF0ZXN0UHJpY2UsXG4gICAgICAgICAgICBtYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIHNob3dEZXB0aENoYXJ0LFxuICAgICAgICAgICAgYWNjb3VudFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBiYXNlU3ltYm9sID0gYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgY29uc3QgcXVvdGVTeW1ib2wgPSBxdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICAvLyBGYXZvcml0ZSBzdGFyXG4gICAgICAgIGNvbnN0IG1hcmtldElEID0gYCR7cXVvdGVTeW1ib2x9XyR7YmFzZVN5bWJvbH1gO1xuICAgICAgICBjb25zdCBzdGFyQ2xhc3MgPSBzdGFycmVkTWFya2V0cy5oYXMobWFya2V0SUQpXG4gICAgICAgICAgICA/IFwiZ29sZC1zdGFyXCJcbiAgICAgICAgICAgIDogXCJncmV5LXN0YXJcIjtcblxuICAgICAgICAvLyBNYXJrZXQgc3RhdHNcbiAgICAgICAgY29uc3QgZGF5Q2hhbmdlID0gbWFya2V0U3RhdHMuZ2V0KFwiY2hhbmdlXCIpO1xuXG4gICAgICAgIGNvbnN0IGRheUNoYW5nZUNsYXNzID1cbiAgICAgICAgICAgIHBhcnNlRmxvYXQoZGF5Q2hhbmdlKSA9PT0gMFxuICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdChkYXlDaGFuZ2UpIDwgMFxuICAgICAgICAgICAgICAgICAgICA/IFwibmVnYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwicG9zaXRpdmVcIjtcbiAgICAgICAgY29uc3Qgdm9sdW1lQmFzZSA9IG1hcmtldFN0YXRzLmdldChcInZvbHVtZUJhc2VcIik7XG4gICAgICAgIGNvbnN0IHZvbHVtZVF1b3RlID0gbWFya2V0U3RhdHMuZ2V0KFwidm9sdW1lUXVvdGVcIik7XG4gICAgICAgIGNvbnN0IGRheUNoYW5nZVdpdGhTaWduID0gZGF5Q2hhbmdlID4gMCA/IFwiK1wiICsgZGF5Q2hhbmdlIDogZGF5Q2hhbmdlO1xuXG4gICAgICAgIGNvbnN0IHZvbHVtZTI0aCA9IHRoaXMuc3RhdGUudm9sdW1lU2hvd1F1b3RlID8gdm9sdW1lUXVvdGUgOiB2b2x1bWVCYXNlO1xuICAgICAgICBjb25zdCB2b2x1bWUyNGhBc3NldCA9IHRoaXMuc3RhdGUudm9sdW1lU2hvd1F1b3RlXG4gICAgICAgICAgICA/IHF1b3RlQXNzZXRcbiAgICAgICAgICAgIDogYmFzZUFzc2V0O1xuXG4gICAgICAgIGxldCBzaG93Q29sbGF0ZXJhbFJhdGlvID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcXVvdGVJZCA9IHF1b3RlQXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgIGNvbnN0IGJhc2VJZCA9IGJhc2VBc3NldC5nZXQoXCJpZFwiKTtcblxuICAgICAgICBjb25zdCBsb29rRm9yQml0QXNzZXQgPVxuICAgICAgICAgICAgcXVvdGVJZCA9PT0gXCIxLjMuMFwiID8gYmFzZUlkIDogYmFzZUlkID09PSBcIjEuMy4wXCIgPyBxdW90ZUlkIDogbnVsbDtcbiAgICAgICAgY29uc3QgcG9zc2libGVCaXRBc3NldCA9IGxvb2tGb3JCaXRBc3NldFxuICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldEFzc2V0KGxvb2tGb3JCaXRBc3NldClcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgY29uc3QgaXNCaXRBc3NldCA9IHBvc3NpYmxlQml0QXNzZXRcbiAgICAgICAgICAgID8gISFwb3NzaWJsZUJpdEFzc2V0LmdldChcImJpdGFzc2V0XCIpXG4gICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICBsZXQgY29sbE9yZGVyT2JqZWN0ID0gXCJcIjtcbiAgICAgICAgbGV0IHNldHRsZVByaWNlID0gbnVsbDtcblxuICAgICAgICBpZiAoaXNCaXRBc3NldCkge1xuICAgICAgICAgICAgaWYgKGFjY291bnQudG9KUyAmJiBhY2NvdW50LmhhcyhcImNhbGxfb3JkZXJzXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbF9vcmRlcnMgPSBhY2NvdW50LmdldChcImNhbGxfb3JkZXJzXCIpLnRvSlMoKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbF9vcmRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxJRCA9IGNhbGxfb3JkZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGNhbGxJRCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWJ0QXNzZXQgPSBwb3NpdGlvbi5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVidEFzc2V0ID09PSBsb29rRm9yQml0QXNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxPcmRlck9iamVjdCA9IGNhbGxJRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xsYXRlcmFsUmF0aW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFNldHRsbWVudCBPZmZzZXQgKi9cbiAgICAgICAgICAgIGxldCBzZXR0bGVBc3NldCA9XG4gICAgICAgICAgICAgICAgYmFzZUFzc2V0LmdldChcImlkXCIpID09IFwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICA/IHF1b3RlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgOiBxdW90ZUFzc2V0LmdldChcImlkXCIpID09IFwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBiYXNlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKHNldHRsZUFzc2V0ICYmIGZlZWRQcmljZSkge1xuICAgICAgICAgICAgICAgIGxldCBvZmZzZXRfcGVyY2VudCA9IHNldHRsZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXCJiaXRhc3NldFwiLCBcIm9wdGlvbnNcIl0pXG4gICAgICAgICAgICAgICAgICAgIC50b0pTKCkuZm9yY2Vfc2V0dGxlbWVudF9vZmZzZXRfcGVyY2VudDtcbiAgICAgICAgICAgICAgICBzZXR0bGVQcmljZSA9XG4gICAgICAgICAgICAgICAgICAgIGJhc2VBc3NldC5nZXQoXCJpZFwiKSA9PSBcIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZmVlZFByaWNlLnRvUmVhbCgpIC8gKDEgKyBvZmZzZXRfcGVyY2VudCAvIDEwMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmZWVkUHJpY2UudG9SZWFsKCkgKiAoMSArIG9mZnNldF9wZXJjZW50IC8gMTAwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJhbnNsYXRvciA9IHJlcXVpcmUoXCJjb3VudGVycGFydFwiKTtcblxuICAgICAgICBsZXQgaXNRdW90ZVNlbGVjdGVkID1cbiAgICAgICAgICAgICEhdGhpcy5zdGF0ZS5zZWxlY3RlZE1hcmtldFBpY2tlckFzc2V0ICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTWFya2V0UGlja2VyQXNzZXQgPT0gcXVvdGVTeW1ib2w7XG4gICAgICAgIGxldCBpc0Jhc2VTZWxlY3RlZCA9XG4gICAgICAgICAgICAhIXRoaXMuc3RhdGUuc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldCAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZE1hcmtldFBpY2tlckFzc2V0ID09IGJhc2VTeW1ib2w7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgbm8tcGFkZGluZyBvdmVyZmxvdy12aXNpYmxlIHRvcC1iYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezQwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhhc1ByZWRpY3Rpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5tYXJrZXRQaWNrZXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzUXVvdGVTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiMyMTk2ZjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmc6IFwiMCA1cHhcIn19Pi88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubWFya2V0UGlja2VyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzQmFzZVNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIzIxOTZmM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YmFzZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYXJrZXQtc3ltYm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtxdW90ZVN5bWJvbH0gOiAke2Jhc2VTeW1ib2x9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCI1cHggMCAwIDVweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UudHJhZGluZ19wYWlyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5zd2l0Y2hNYXJrZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9tYXJrZXQvJHtiYXNlU3ltYm9sfV8ke3F1b3RlU3ltYm9sfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLnN3aXRjaF9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaHVmZmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2h1ZmZsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5zaHVmZmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZE1hcmtldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLmZhdm91cml0ZV9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5maV9zdGFyLm1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB3cmFwIG1hcmtldC1zdGF0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWFya2V0LXN0YXRzIHN0YXRzIHRvcC1zdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGF0ZXN0UHJpY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VTdGF0V2l0aExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ29sb3JDaGFuZ2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHk9e21hcmtldFJlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtsYXRlc3RQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGVBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0PXttYXJrZXRJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UubGF0ZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtb3JkZXItMSBzdHJlc3NlZC1zdGF0IGRhaWx5X2NoYW5nZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5Q2hhbmdlQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldFJlYWR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRheUNoYW5nZVdpdGhTaWduXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC5ob3VyXzI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZvbHVtZUJhc2UgPj0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVN0YXRXaXRoTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDb2xvckNoYW5nZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZVZvbHVtZUJhc2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHk9e21hcmtldFJlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17dm9sdW1lMjRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGUtb3JkZXItMiBjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e3ZvbHVtZTI0aEFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldD17bWFya2V0SUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnZvbHVtZV8yNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFoYXNQcmVkaWN0aW9uICYmIGZlZWRQcmljZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVN0YXRXaXRoTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVDb2xvckNoYW5nZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sVGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5mZWVkX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlLW9yZGVyLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtmZWVkUHJpY2UudG9SZWFsKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldD17bWFya2V0SUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLmZlZWRfcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaGFzUHJlZGljdGlvbiAmJiBmZWVkUHJpY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VTdGF0V2l0aExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ29sb3JDaGFuZ2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbFRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAuc2V0dGxlX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlLW9yZGVyLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtzZXR0bGVQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGVBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0PXttYXJrZXRJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2Uuc2V0dGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0NvbGxhdGVyYWxSYXRpbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZUhlYWRlckNvbGxhdGVyYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q9e2NvbGxPcmRlck9iamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb3dlc3RDYWxsUHJpY2UgJiYgc2hvd0NhbGxMaW1pdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVN0YXRXaXRoTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sVGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5jYWxsX2xpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlLW9yZGVyLTUgaXMtY2FsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2xvd2VzdENhbGxQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGVBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0PXttYXJrZXRJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suY2FsbF9saW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVlZFByaWNlICYmIHNob3dDYWxsTGltaXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VTdGF0V2l0aExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbFRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAubWFyZ2luX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlLW9yZGVyLTYgaXMtY2FsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2ZlZWRQcmljZS5nZXRTcXVlZXplUHJpY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldD17bWFya2V0SUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnNxdWVlemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWFya2V0LXN0YXRzIHN0YXRzIHRvcC1zdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0cmVzc2VkLXN0YXQgaW5wdXQgY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxNnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFpmQXBpLnB1Ymxpc2goXCJjaGFydF9vcHRpb25zXCIsIFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNoYXJ0X21vZGFsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEJhc2VNb2RhbFxuICAgICAgICAgICAgICAgICAgICBpZD1cImNoYXJ0X29wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBtb2RhbEhlYWRlcj1cImV4Y2hhbmdlLmNoYXJ0X21vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgbm9Mb2dvXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9jay1saXN0IG5vLWJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2hhcnRfdHlwZVwiIC8+OlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpdGgtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEZXB0aENoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJkZXB0aF9jaGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJwcmljZV9jaGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNob3dEZXB0aENoYXJ0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByaWNlX2NoYXJ0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghc2hvd0RlcHRoQ2hhcnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFya2V0X2RlcHRoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Ub2dnbGVDaGFydHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFya2V0X2RlcHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5vcmRlcl9kZXB0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaWNlX2NoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5wcmljZV9oaXN0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jaGFydF9oZWlnaHRcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hhcnRIZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoYXJ0SGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRIZWlnaHQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNldENoYXJ0SGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvQmFzZU1vZGFsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaWNlU3RhdFdpdGhMYWJlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFuZ2U6IG51bGwsXG4gICAgICAgICAgICBjdXJNYXJrZXQ6IG51bGwsXG4gICAgICAgICAgICBtYXJrZXRDaGFuZ2U6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLnZvbHVtZTIgJiYgbmV4dFByb3BzLnZvbHVtZTIgIT09IHRoaXMucHJvcHMudm9sdW1lMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5wcmljZSAhPT0gdGhpcy5wcm9wcy5wcmljZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnJlYWR5ICE9PSB0aGlzLnByb3BzLnJlYWR5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHN0YXRlID0ge1xuICAgICAgICAgICAgY2hhbmdlOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHttYXJrZXR9ID0gbmV4dFByb3BzO1xuXG4gICAgICAgIGxldCBjaGVja01hcmtldENoYW5nZSA9IHRoaXMuc3RhdGUuY3VyTWFya2V0ICE9PSBtYXJrZXQ7XG4gICAgICAgIGxldCBtYXJrZXRDaGFuZ2UgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJNYXJrZXQgPT0gbnVsbCA/IGZhbHNlIDogY2hlY2tNYXJrZXRDaGFuZ2U7XG5cbiAgICAgICAgc3RhdGVbXCJtYXJrZXRDaGFuZ2VcIl0gPSBtYXJrZXRDaGFuZ2U7XG4gICAgICAgIHN0YXRlW1wiY3VyTWFya2V0XCJdID0gbWFya2V0O1xuICAgICAgICBzdGF0ZVtcInByZXZBc3NldFwiXSA9IHRoaXMuc3RhdGUubWFya2V0QXNzZXQ7XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5yZWFkeSAmJiB0aGlzLnByb3BzLnJlYWR5KSB7XG4gICAgICAgICAgICBzdGF0ZVtcImNoYW5nZVwiXSA9XG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChuZXh0UHJvcHMucHJpY2UpIC0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLnByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgUmVhY3RUb29sdGlwLnJlYnVpbGQoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICByZWFkeSxcbiAgICAgICAgICAgIHZvbHVtZSxcbiAgICAgICAgICAgIHRvb2xUaXAsXG4gICAgICAgICAgICBpZ25vcmVDb2xvckNoYW5nZVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtjaGFuZ2UsIG1hcmtldENoYW5nZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgY2hhbmdlQ2xhc3NlcyA9IG51bGw7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYXJrZXRDaGFuZ2UgJiZcbiAgICAgICAgICAgIGNoYW5nZSAmJlxuICAgICAgICAgICAgY2hhbmdlICE9PSBudWxsICYmXG4gICAgICAgICAgICBpZ25vcmVDb2xvckNoYW5nZSAhPT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNoYW5nZUNsYXNzZXMgPSBjaGFuZ2UgPiAwID8gXCJwdWxzYXRlIGdyZWVuXCIgOiBcInB1bHNhdGUgcmVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWUgPSAhdm9sdW1lXG4gICAgICAgICAgICA/IHV0aWxzLnByaWNlX3RleHQocHJpY2UsIHF1b3RlLCBiYXNlKVxuICAgICAgICAgICAgOiB1dGlscy5mb3JtYXRfdm9sdW1lKHByaWNlKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIFwic3RyZXNzZWQtc3RhdFwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2xhc3Nlc1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgIGRhdGEtdGlwPXt0b29sVGlwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZSBzdGF0LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshcmVhZHkgPyAwIDogdmFsdWV9Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ltYm9sLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17YmFzZS5nZXQoXCJzeW1ib2xcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge2NvbnRlbnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBNYXJnaW5Qb3NpdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZGVidEFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgY29sbGF0ZXJhbEFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBfZ2V0RmVlZFByaWNlKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDEgL1xuICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByaWNlKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVidEFzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2xsYXRlcmFsQXNzZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWJ0QXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2V0dGxlbWVudF9wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVidEFzc2V0XG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldENvbGxhdGVyYWxSYXRpbygpIHtcbiAgICAgICAgY29uc3QgY28gPSB0aGlzLnByb3BzLm9iamVjdC50b0pTKCk7XG4gICAgICAgIGNvbnN0IGMgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgY28uY29sbGF0ZXJhbCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29sbGF0ZXJhbEFzc2V0XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGQgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KGNvLmRlYnQsIHRoaXMucHJvcHMuZGVidEFzc2V0KTtcbiAgICAgICAgcmV0dXJuIGMgLyAoZCAvIHRoaXMuX2dldEZlZWRQcmljZSgpKTtcbiAgICB9XG5cbiAgICBfZ2V0TVIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRlYnRBc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCJcbiAgICAgICAgICAgIF0pIC8gMTAwMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9nZXRTdGF0dXNDbGFzcygpIHtcbiAgICAgICAgbGV0IGNyID0gdGhpcy5fZ2V0Q29sbGF0ZXJhbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IG1yID0gdGhpcy5fZ2V0TVIoKTtcblxuICAgICAgICBpZiAoaXNOYU4oY3IpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGNyIDwgbXIpIHtcbiAgICAgICAgICAgIHJldHVybiBcImRhbmdlclwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNyIDwgbXIgKyAwLjUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIndhcm5pbmdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldENSVGlwKCkge1xuICAgICAgICBjb25zdCBzdGF0dXNDbGFzcyA9IHRoaXMuX2dldFN0YXR1c0NsYXNzKCk7XG4gICAgICAgIGNvbnN0IG1yID0gdGhpcy5fZ2V0TVIoKTtcbiAgICAgICAgaWYgKCFzdGF0dXNDbGFzcyB8fCBzdGF0dXNDbGFzcyA9PT0gXCJcIikgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgaWYgKHN0YXR1c0NsYXNzID09PSBcImRhbmdlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5jcl9kYW5nZXJcIiwge21yfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzQ2xhc3MgPT09IFwid2FybmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5jcl93YXJuaW5nXCIsIHttcn0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7b2JqZWN0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNvID0gb2JqZWN0LnRvSlMoKTtcbiAgICAgICAgY29uc3QgY3IgPSB0aGlzLl9nZXRDb2xsYXRlcmFsUmF0aW8oKTtcbiAgICAgICAgY29uc3QgZCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQoY28uZGVidCwgdGhpcy5wcm9wcy5kZWJ0QXNzZXQpO1xuXG4gICAgICAgIGNvbnN0IHN0YXR1c0NsYXNzID0gdGhpcy5fZ2V0U3RhdHVzQ2xhc3MoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJzdHJlc3NlZC1zdGF0XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgZGF0YS10aXA9e3RoaXMuX2dldENSVGlwKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y25hbWVzKFwidmFsdWUgc3RhdC1wcmltYXJ5XCIsIHN0YXR1c0NsYXNzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihjciwgMil9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmNvbGxhdGVyYWxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5NYXJnaW5Qb3NpdGlvbiA9IEJpbmRUb0NoYWluU3RhdGUoTWFyZ2luUG9zaXRpb24pO1xuXG5jbGFzcyBFeGNoYW5nZUhlYWRlckNvbGxhdGVyYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIG9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtvYmplY3QsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgZGVidEFzc2V0ID0gb2JqZWN0LmdldEluKFtcImNhbGxfcHJpY2VcIiwgXCJxdW90ZVwiLCBcImFzc2V0X2lkXCJdKTtcbiAgICAgICAgbGV0IGNvbGxhdGVyYWxBc3NldCA9IG9iamVjdC5nZXRJbihbXCJjYWxsX3ByaWNlXCIsIFwiYmFzZVwiLCBcImFzc2V0X2lkXCJdKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1hcmdpblBvc2l0aW9uXG4gICAgICAgICAgICAgICAgZGVidEFzc2V0PXtkZWJ0QXNzZXR9XG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbEFzc2V0PXtjb2xsYXRlcmFsQXNzZXR9XG4gICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuRXhjaGFuZ2VIZWFkZXJDb2xsYXRlcmFsID0gQmluZFRvQ2hhaW5TdGF0ZShFeGNoYW5nZUhlYWRlckNvbGxhdGVyYWwpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZUhlYWRlckNvbGxhdGVyYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuLyoqXG4gKiAgV3JhcHBlciBjb21wb25lbnQgZm9yIGNoYXRicm8gaWZyYW1lXG4gKlxuICovXG5jbGFzcyBDaGF0QnJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmcmFtZUhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0IHx8IFwiMzAlXCI7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRMb2NhbGUgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFwibG9jYWxlXCIpO1xuXG4gICAgICAgIGxldCBjaGF0VXJsID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50TG9jYWxlKSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNoYXRVcmwgPSBgaHR0cHM6Ly9jaGF0LnJ1ZGV4Lm9yZy8ke2N1cnJlbnRMb2NhbGV9L2A7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiBmcmFtZUhlaWdodCwgd2lkdGg6IFwiMTAwJVwifX1cbiAgICAgICAgICAgICAgICBzcmM9e2NoYXRVcmx9XG4gICAgICAgICAgICAgICAgc2FuZGJveD1cImFsbG93LXNhbWUtb3JpZ2luIGFsbG93LWZvcm1zIGFsbG93LXNjcmlwdHMgYWxsb3ctcG9wdXBzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogZnJhbWVIZWlnaHQsIHdpZHRoOiBcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgc3JjPXtjaGF0VXJsfVxuICAgICAgICAgICAgICAgIHNhbmRib3g9XCJhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1mb3JtcyBhbGxvdy1zY3JpcHRzIGFsbG93LXBvcHVwc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ2hhdEJyby5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0QnJvO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5RkE7QUFSQTtBQXlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF6R0E7QUFpSEE7Ozs7QUF4SEE7QUFDQTtBQTBIQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBOzs7QUFhQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUFuS0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBU0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTRKQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBYUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBMERBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQTNDQTtBQUNBO0FBeERBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBdkJBO0FBd0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBOzs7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQWZBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFRQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQWlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUNBO0FBNkJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFDQTtBQVNBO0FBU0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBa0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFnSUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUE3RUE7QUFDQTtBQW9GQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQS9FQTtBQUNBO0FBc0ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQ0E7QUFrQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBUUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQWxCQTtBQUxBO0FBMkJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBS0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBakRBO0FBREE7QUF1REE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQVhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBWEE7QUFjQTtBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUEzQkE7QUFoRkE7QUF4RkE7QUFOQTtBQW1OQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFNQTtBQUNBO0FBQ0E7QUFsQkE7QUFEQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFLQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQWJBO0FBZ0JBO0FBeEJBO0FBOEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQWJBO0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQXpCQTtBQTFEQTtBQU5BO0FBNElBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFLQTtBQVhBO0FBY0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBVEE7QUFwWUE7QUF4QkE7QUE0YUE7Ozs7QUFoN0RBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QUEwNkRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzc5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUEyQkE7Ozs7QUFuREE7QUFDQTtBQXFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFNQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQVNBO0FBU0E7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBbEJBO0FBd0JBOzs7O0FBN0VBO0FBQ0E7QUErRUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdEJBO0FBeUJBOzs7O0FBNUNBO0FBQ0E7QUE4Q0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVNBO0FBU0E7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBYkE7QUFtQkE7Ozs7QUFuRUE7QUFDQTtBQXFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQWhCQTtBQW1CQTs7OztBQTFDQTtBQUNBO0FBNENBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFxRUE7QUFBQTtBQUNBO0FBdEVBO0FBd0VBO0FBQUE7QUFDQTtBQXpFQTtBQXNLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBMUtBO0FBNEtBO0FBQ0E7QUFHQTtBQUNBO0FBL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBRkE7QUFTQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQUE7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBZUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFnQkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFBQTtBQUxBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBTkE7QUFEQTtBQXhCQTtBQURBO0FBQ0E7QUFzQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBTkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFBQTtBQUxBO0FBckJBO0FBREE7QUFDQTtBQXNDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBWEE7QUFhQTtBQWJBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBakJBO0FBNkJBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBUEE7QUFGQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFWQTtBQXREQTtBQXNFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFKQTtBQVRBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRBO0FBREE7QUF0R0E7QUFOQTtBQW1JQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFYQTtBQWFBO0FBYkE7QUFBQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFqQkE7QUE2QkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFQQTtBQUZBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQVZBO0FBdERBO0FBc0VBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUpBO0FBVEE7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFEQTtBQXBHQTtBQU5BO0FBeklBO0FBMlFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFYQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBVEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQVZBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUlBO0FBSUE7QUFUQTtBQU5BO0FBRkE7QUFoQ0E7QUFEQTtBQUpBO0FBVEE7QUE0RUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFEQTtBQVRBO0FBdEhBO0FBREE7QUE0SUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFGQTtBQWJBO0FBN0lBO0FBMEtBO0FBQ0E7Ozs7QUF2NEJBO0FBQ0E7QUF5NEJBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5c0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFWQTtBQWlCQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFWQTtBQXVCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVpBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBdkJBO0FBREE7QUFEQTtBQURBO0FBb0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBTEE7QUEzREE7QUFEQTtBQTZFQTs7OztBQXZPQTtBQUNBO0FBeU9BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTs7OztBQXZDQTtBQUNBO0FBREE7QUFFQTtBQU1BO0FBQ0E7QUFSQTtBQUNBO0FBQ0E7QUF1Q0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7QUFDQTtBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFtQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBRUE7QUFRQTtBQU1BO0FBSUE7QUFDQTtBQXRFQTtBQUFBO0FBQUE7QUFDQTtBQTRFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQVBBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFGQTtBQWZBO0FBbUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFEQTtBQUNBO0FBckhBO0FBQUE7QUFBQTtBQUNBO0FBZ0lBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQVBBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFGQTtBQWZBO0FBbUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFEQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBblFBO0FBQUE7QUFBQTtBQUNBO0FBc1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUtBO0FBUEE7QUFWQTtBQURBO0FBd0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUFBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQUE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFYQTtBQURBO0FBREE7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBWEE7QUFEQTtBQURBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVhBO0FBREE7QUFEQTtBQTlHQTtBQXVJQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFiQTtBQTBCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWJBO0FBcUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBYkE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFkQTtBQURBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQU1BO0FBaEJBO0FBa0JBO0FBbEJBO0FBUEE7QUF2QkE7QUFxREE7QUExSEE7QUE0SEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUhBO0FBS0E7QUFOQTtBQVdBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFqQkE7QUFOQTtBQUpBO0FBa0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBSEE7QUFLQTtBQU5BO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBakJBO0FBcUJBO0FBQ0E7QUFEQTtBQXJCQTtBQVJBO0FBVEE7QUFnREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBVUE7QUFWQTtBQVlBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFkQTtBQWZBO0FBSkE7QUFuRkE7QUFEQTtBQWlJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTEE7QUFjQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU5BO0FBZUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQTdLQTtBQURBO0FBbklBO0FBeElBO0FBMmNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBVkE7QUEzZEE7QUF5ZUE7Ozs7QUE1MEJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQVlBO0FBREE7QUFDQTtBQUNBO0FBazBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVVBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFMQTtBQWVBO0FBZkE7QUFEQTtBQUhBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBYkE7QUF0QkE7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQXZDQTtBQTZDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFSQTtBQUhBO0FBbUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFQQTtBQURBO0FBSkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVJBO0FBUEE7QUFEQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFLQTtBQVpBO0FBREE7QUFEQTtBQVBBO0FBREE7QUE5QkE7QUEyREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFuS0E7QUF5S0E7Ozs7QUExYkE7QUFDQTtBQTRiQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFUQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFJQTtBQVFBO0FBQ0E7QUF4Q0E7QUFDQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVBBO0FBREE7QUFZQTs7OztBQTNIQTtBQUNBO0FBREE7Ozs7Ozs7QUNSQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQTVFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7O0FBR0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUVBOzs7QUFHQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6WkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFHQTtBQWFBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFEQTtBQXhCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFJQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUExQkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUxBO0FBREE7QUF0R0E7QUFDQTtBQWtIQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFiQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBUUE7QUExQkE7QUErQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBWEE7QUFvQkE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBNUJBO0FBREE7QUFtQ0E7QUFDQTs7OztBQTViQTtBQUNBO0FBOGJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQVJBO0FBV0E7Ozs7QUFkQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFNQTtBQVFBO0FBUUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFOQTtBQVdBOzs7O0FBckdBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQXFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUEE7QUFYQTtBQUZBO0FBOEJBOzs7O0FBaERBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQVJBO0FBU0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBYkE7QUEzQkE7QUFnREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVhBO0FBdkJBO0FBdkRBO0FBUkE7QUEyR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBZEE7QUFxQkE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBY0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBdEdBO0FBc0hBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUEE7QUFEQTtBQXZIQTtBQUpBO0FBNUdBO0FBc1BBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXpCQTtBQURBO0FBREE7QUFKQTtBQXdDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQURBO0FBUEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBZEE7QUFEQTtBQUpBO0FBOUNBO0FBdlBBO0FBb1VBOzs7O0FBcGVBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBbkJBO0FBeUJBOzs7O0FBbkdBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXFCQTs7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFYQTtBQWdCQTs7OztBQTNHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQTJHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BOzs7O0FBbkJBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUE1QkE7QUFDQTtBQThCQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=