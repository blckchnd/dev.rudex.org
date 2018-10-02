(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 2431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1261);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(700);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1243);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2407);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1258);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(853);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Exchange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2432);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(865);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(406);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(866);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1262);
/* harmony import */ var components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2528);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2395);
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

/***/ 2432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(990);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(718);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1262);
/* harmony import */ var _MyOpenOrders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2433);
/* harmony import */ var _OrderBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2474);
/* harmony import */ var _MarketHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2481);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2483);
/* harmony import */ var _BuySell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2490);
/* harmony import */ var _MarketPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2524);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(557);
/* harmony import */ var _TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2525);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1011);
/* harmony import */ var _DepthHighChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2532);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2535);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(579);
/* harmony import */ var _Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2537);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2434);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(406);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(701);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(843);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1260);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(572);
/* harmony import */ var _ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2543);
/* harmony import */ var _ExchangeHeader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2544);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(771);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(475);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(571);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(851);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1372);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _Chat_ChatBro__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2547);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(1432);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(561);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(1442);
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
                leftOrderBook: ws.get("leftOrderBook", false),
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

/***/ 2474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(718);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2434);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(557);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(771);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(701);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(843);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2471);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2457);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1211);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2475);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_sticky_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(773);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var counterpart = __webpack_require__(561);

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
    return elem ? elem.getBoundingClientRect().height : 0;
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
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props) {
            return { groupLimit: props.currentGroupOrderLimit };
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
            return _this6.verticalStickyTable.current.table.querySelector(query);
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
            _this6.setState({ autoScroll: !_this6.state.autoScroll });
        };

        _this6.state = {
            flip: props.flipOrderBook,
            showAllBids: false,
            showAllAsks: false,
            rowCount: 20,
            autoScroll: true
        };
        _this6.verticalStickyTable = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        _this6.centerText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
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
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState, snapshot) {
            var nextProps = this.props;
            // Change of market or direction
            if (nextProps.base.get("id") !== prevProps.base.get("id") || nextProps.quote.get("id") !== prevProps.quote.get("id")) {
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
            this.psUpdate();
            this.centerVerticalScrollBar();
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
        key: "centerVerticalScrollBar",
        value: function centerVerticalScrollBar() {
            if (!this.props.horizontal && this.state.autoScroll) {
                // Center vertical scroll bar
                var scrollableContainer = this.queryStickyTable("#sticky-table-y-wrapper");
                var header = this.queryStickyTable("#sticky-table-header");
                var centerTextContainer = this.centerText.current;
                var singleAskHeight = elemHeight(this.queryStickyTable(".order-row"));
                var asksHeight = this.props.combinedAsks.length * singleAskHeight;

                var scrollableContainerHeight = elemHeight(scrollableContainer) - elemHeight(header);

                var scrollTo = asksHeight + elemHeight(centerTextContainer) / 2 - scrollableContainerHeight / 2;

                scrollableContainer.scrollTop = scrollTo;
            }
        }
    }, {
        key: "psUpdate",
        value: function psUpdate() {
            if (!this.props.horizontal) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.update(this.verticalScrollBar());
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
            var _this7 = this;

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
                            onClick: _this7.props.onClick.bind(_this7, order),
                            base: base,
                            quote: quote,
                            position: !_this7.state.flip ? "left" : "right",
                            currentAccount: _this7.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this7.props.onClick.bind(_this7, order),
                            base: base,
                            quote: quote,
                            final: index === 0,
                            currentAccount: _this7.props.currentAccount
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
                            onClick: _this7.props.onClick.bind(_this7, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            position: !_this7.state.flip ? "right" : "left",
                            currentAccount: _this7.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GroupedOrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this7.props.onClick.bind(_this7, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            final: 0 === index,
                            currentAccount: _this7.props.currentAccount
                        });
                    });
                } else {
                    bidRows = combinedBids.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this7.props.onClick.bind(_this7, order),
                            base: base,
                            quote: quote,
                            position: !_this7.state.flip ? "left" : "right",
                            currentAccount: _this7.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this7.props.onClick.bind(_this7, order),
                            base: base,
                            quote: quote,
                            final: index === 0,
                            currentAccount: _this7.props.currentAccount
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
                            onClick: _this7.props.onClick.bind(_this7, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            position: !_this7.state.flip ? "right" : "left",
                            currentAccount: _this7.props.currentAccount
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this7.props.onClick.bind(_this7, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            final: 0 === index,
                            currentAccount: _this7.props.currentAccount
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: baseSymbol }),
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { dataPlace: "top", name: baseSymbol }),
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
                                ref: this.verticalStickyTable
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
                                    transitionName: "newrow",
                                    id: "top-order-rows"
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
                                {
                                    className: "sticky-table-row",
                                    ref: this.centerText
                                },
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

/***/ 2481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(718);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(513);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2434);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(771);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1260);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2471);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(843);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(701);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(700);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(759);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2457);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1211);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(406);
/* harmony import */ var _Utility_BlockDate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2482);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(561);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1264);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2456);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(572);
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

/***/ 2482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(561);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(759);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(769);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(770);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1264);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2456);
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

/***/ 2490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(718);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(843);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(557);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(771);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1369);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(561);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(700);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(865);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(866);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2471);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1211);
/* harmony import */ var _Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2491);
/* harmony import */ var _Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2492);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(572);
/* harmony import */ var _ExchangeInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1241);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1011);
/* harmony import */ var react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2493);
/* harmony import */ var react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_datepicker2_src___WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1372);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(773);
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

            var translator = __webpack_require__(561);

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

/***/ 2524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(990);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(759);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1316);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1262);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(715);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1211);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(773);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(406);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(771);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(851);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1317);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(561);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(557);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1246);


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

/***/ 2525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2527);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2528);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var TradingView = __webpack_require__(2526);



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

            var disabled_features = ["header_saveload", "symbol_info", "symbol_search_hot_key", "border_around_the_chart", "header_symbol_search", "header_compare"];
            if (this.props.mobile) {
                disabled_features.push("chart_scroll");
                disabled_features.push("chart_zoom");
            }

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
                disabled_features: disabled_features,
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

/***/ 2526:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";function e(t,o){var i=n({},t);for(var s in o)"object"!=typeof t[s]||null===t[s]||Array.isArray(t[s])?void 0!==o[s]&&(i[s]=o[s]):i[s]=e(t[s],o[s]);return i}function o(){return"1.12 (internal id 630b704a @ 2018-06-06 02:16:11.305509)"}function i(t){window.addEventListener("DOMContentLoaded",t,!1)}var n=Object.assign||function(t){for(var e,o=arguments,i=1,n=arguments.length;i<n;i++){e=o[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},s={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},r={width:800,height:500,symbol:"AA",interval:"D",timezone:"UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}},a=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(r,t),t.preset){var o=s[t.preset];o?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(o.disabled_features):this._options.disabled_features=o.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(o.enabled_features):this._options.enabled_features=o.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.setLanguage=function(t){this.remove(),this._options.locale=t,this._create()},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e+"",o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id];var t=this._getIFrameElement();t.contentWindow.destroyChart(),t.parentNode&&t.parentNode.removeChild(t)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o,i){this._innerAPI().saveChartToServer(t,e,o,i)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype._getIFrameElement=function(){var t=document.getElementById(this._id);if(null===t)throw new Error("There is no such iframe");return t},t.prototype._innerAPI=function(){return this._getIFrameElement().contentWindow.tradingViewApi},t.prototype._innerWindow=function(){return this._getIFrameElement().contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._getIFrameElement().style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),o=document.getElementById(this._options.container_id);if(null===o)throw new Error("There is no such element - #"+this._options.container_id);o.innerHTML=e;var i=this._getIFrameElement();(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize();var n=function(){i.removeEventListener("load",n,!1),i.contentWindow.widgetReady(function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){o[e].call(t)}i.contentWindow.initializationFinished()})};i.addEventListener("load",n,!1)},t.prototype._render=function(){var t=window;t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter},this._options.saved_data&&(t[this._id].chartContent={json:this._options.saved_data});var e=(this._options.library_path||"")+"static/tv-chart.630b704a2b9d0eaf1593.html#localserver=1&symbol="+encodeURIComponent(this._options.symbol)+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+this._options.toolbar_bg.replace("#",""):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.indicators_file_name?"&indicatorsFile="+encodeURIComponent(this._options.indicators_file_name):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+this._options.debug+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}(),d=a;window.TradingView=window.TradingView||{},window.TradingView.version=o,t.version=o,t.onready=i,t.widget=d,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ 2527:
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

/***/ 2528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFeed", function() { return DataFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInfo", function() { return SymbolInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResolutionsFromBuckets", function() { return getResolutionsFromBuckets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTVTimezone", function() { return getTVTimezone; });
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1261);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(406);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2529);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1262);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1246);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(557);
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

/***/ 2532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(581);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(718);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2533);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(557);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(561);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(771);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2527);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1211);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(572);


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

/***/ 2537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2538);
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

/***/ 2538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2539);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(708);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(513);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(865);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(866);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(406);
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

/***/ 2543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(708);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(557);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(771);
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

/***/ 2544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(715);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(773);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1211);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2486);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1262);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(701);
/* harmony import */ var _PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2545);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(771);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(561);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(406);
/* harmony import */ var _ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2546);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(837);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(708);
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

            var translator = __webpack_require__(561);

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

/***/ 2545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(771);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1211);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(557);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(843);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1264);
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

/***/ 2546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(557);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(865);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(866);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(843);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(561);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(771);
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

/***/ 2547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(700);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(718);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UuZGUyYzU2ZGUwNWU3MDk2MTZkZjcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvRXhjaGFuZ2VDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9FeGNoYW5nZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL09yZGVyQm9vay5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldEhpc3RvcnkuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Jsb2NrRGF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL0J1eVNlbGwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NYXJrZXRQaWNrZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9UcmFkaW5nVmlld1ByaWNlQ2hhcnQuanN4Iiwid2VicGFjazovLy8uL2NoYXJ0aW5nX2xpYnJhcnkvY2hhcnRpbmdfbGlicmFyeS5taW4uanMiLCJ3ZWJwYWNrOi8vL2FwcC9hc3NldHMvY29sb3JzLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS90cmFkaW5nVmlld0NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL0RlcHRoSGlnaENoYXJ0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTm90aWZpZXIvTm90aWZpZXJDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Ob3RpZmllci9Ob3RpZmllci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL0NvbmZpcm1PcmRlck1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvRXhjaGFuZ2VIZWFkZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9QcmljZVN0YXRXaXRoTGFiZWwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9FeGNoYW5nZUhlYWRlckNvbGxhdGVyYWwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9DaGF0L0NoYXRCcm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgR2F0ZXdheVN0b3JlIGZyb20gXCJzdG9yZXMvR2F0ZXdheVN0b3JlXCI7XG5pbXBvcnQgSW50bFN0b3JlIGZyb20gXCJzdG9yZXMvSW50bFN0b3JlXCI7XG5pbXBvcnQgV2FsbGV0VW5sb2NrU3RvcmUgZnJvbSBcInN0b3Jlcy9XYWxsZXRVbmxvY2tTdG9yZVwiO1xuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuaW1wb3J0IEV4Y2hhbmdlIGZyb20gXCIuL0V4Y2hhbmdlXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQge0VtaXR0ZXJJbnN0YW5jZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCB7RGF0YUZlZWR9IGZyb20gXCJjb21wb25lbnRzL0V4Y2hhbmdlL3RyYWRpbmdWaWV3Q2xhc3Nlc1wiO1xuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4uL1BhZ2U0MDQvUGFnZTQwNFwiO1xuXG5jbGFzcyBFeGNoYW5nZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3ltYm9scyA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm1hcmtldElELnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJfXCIpO1xuICAgICAgICBpZiAoc3ltYm9sc1swXSA9PT0gc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwibWFya2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbXG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNTdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLFxuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1N0b3JlLFxuICAgICAgICAgICAgICAgICAgICBXYWxsZXRVbmxvY2tTdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgSW50bFN0b3JlXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiAoKSA9PiBJbnRsU3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50TG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NrZWRXYWxsZXRTdGF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFdhbGxldFVubG9ja1N0b3JlLmdldFN0YXRlKCkubG9ja2VkO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRMaW1pdE9yZGVyczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldExpbWl0T3JkZXJzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRDYWxsT3JkZXJzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0Q2FsbE9yZGVycztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRDYWxsczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmludmVydGVkQ2FsbHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFNldHRsZU9yZGVyczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldFNldHRsZU9yZGVycztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0RGF0YTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldERhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLnRvdGFscztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0SGlzdG9yeTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFjdGl2ZU1hcmtldEhpc3Rvcnk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJ1Y2tldFNpemU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5idWNrZXRTaXplO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBidWNrZXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYnVja2V0cztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0Q2FsbFByaWNlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubG93ZXN0Q2FsbFByaWNlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5mZWVkUHJpY2U7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUFjdGl2ZUFjY291bnRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZXhjaGFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXREaXJlY3Rpb25zOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldERpcmVjdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0U3RhdHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFJlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0UmVhZHk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tlZENvaW5zOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gR2F0ZXdheVN0b3JlLmdldFN0YXRlKCkuYmFja2VkQ29pbnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT1BFTlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBicmlkZ2VDb2luczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEdhdGV3YXlTdG9yZS5nZXRTdGF0ZSgpLmJyaWRnZUNvaW5zO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtaW5pRGVwdGhDaGFydDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluaURlcHRoQ2hhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2aWV3Q2hhdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld0NoYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFGZWVkOiAoKSA9PiBuZXcgRGF0YUZlZWQoKSxcblxuICAgICAgICAgICAgICAgICAgICB0cmFja2VkR3JvdXBzQ29uZmlnOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkudHJhY2tlZEdyb3Vwc0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRHcm91cExpbWl0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RXhjaGFuZ2VTdWJzY3JpYmVyXG4gICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQ9e3N5bWJvbHNbMF19XG4gICAgICAgICAgICAgICAgICAgIGJhc2VBc3NldD17c3ltYm9sc1sxXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5sZXQgZW1pdHRlciA9IEVtaXR0ZXJJbnN0YW5jZSgpO1xubGV0IGNhbGxMaXN0ZW5lcixcbiAgICBsaW1pdExpc3RlbmVyLFxuICAgIG5ld0NhbGxMaXN0ZW5lcixcbiAgICBmZWVkVXBkYXRlTGlzdGVuZXIsXG4gICAgc2V0dGxlT3JkZXJMaXN0ZW5lcjtcblxuY2xhc3MgRXhjaGFuZ2VTdWJzY3JpYmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjdXJyZW50QWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgcXVvdGVBc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGJhc2VBc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGNvcmVBc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY3VycmVudEFjY291bnQ6IFwiMS4yLjNcIixcbiAgICAgICAgY29yZUFzc2V0OiBcIjEuMy4wXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtzdWI6IG51bGx9O1xuXG4gICAgICAgIHRoaXMuX3N1YlRvTWFya2V0ID0gdGhpcy5fc3ViVG9NYXJrZXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnF1b3RlQXNzZXQgPT09IG51bGwgfHwgdGhpcy5wcm9wcy5iYXNlQXNzZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5xdW90ZUFzc2V0LnRvSlMgJiYgdGhpcy5wcm9wcy5iYXNlQXNzZXQudG9KUykge1xuICAgICAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQodGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAvLyB0aGlzLl9hZGRNYXJrZXQodGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSwgdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXR0ZXIub24oXG4gICAgICAgICAgICBcImNhbmNlbC1vcmRlclwiLFxuICAgICAgICAgICAgKGxpbWl0TGlzdGVuZXIgPSBNYXJrZXRzQWN0aW9ucy5jYW5jZWxMaW1pdE9yZGVyU3VjY2VzcylcbiAgICAgICAgKTtcbiAgICAgICAgZW1pdHRlci5vbihcbiAgICAgICAgICAgIFwiY2xvc2UtY2FsbFwiLFxuICAgICAgICAgICAgKGNhbGxMaXN0ZW5lciA9IE1hcmtldHNBY3Rpb25zLmNsb3NlQ2FsbE9yZGVyU3VjY2VzcylcbiAgICAgICAgKTtcblxuICAgICAgICBlbWl0dGVyLm9uKFxuICAgICAgICAgICAgXCJjYWxsLW9yZGVyLXVwZGF0ZVwiLFxuICAgICAgICAgICAgKG5ld0NhbGxMaXN0ZW5lciA9IGNhbGxfb3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7YXNzZXRfaWQ6IGNvQmFzZX0gPSBjYWxsX29yZGVyLmNhbGxfcHJpY2UuYmFzZTtcbiAgICAgICAgICAgICAgICBsZXQge2Fzc2V0X2lkOiBjb1F1b3RlfSA9IGNhbGxfb3JkZXIuY2FsbF9wcmljZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBsZXQgYmFzZUlkID0gdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlSWQgPSB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoY29CYXNlID09PSBiYXNlSWQgfHwgY29CYXNlID09PSBxdW90ZUlkKSAmJlxuICAgICAgICAgICAgICAgICAgICAoY29RdW90ZSA9PT0gYmFzZUlkIHx8IGNvUXVvdGUgPT09IHF1b3RlSWQpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmNhbGxPcmRlclVwZGF0ZShjYWxsX29yZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBlbWl0dGVyLm9uKFxuICAgICAgICAgICAgXCJiaXRhc3NldC11cGRhdGVcIixcbiAgICAgICAgICAgIChmZWVkVXBkYXRlTGlzdGVuZXIgPSBNYXJrZXRzQWN0aW9ucy5mZWVkVXBkYXRlKVxuICAgICAgICApO1xuICAgICAgICBlbWl0dGVyLm9uKFxuICAgICAgICAgICAgXCJzZXR0bGUtb3JkZXItdXBkYXRlXCIsXG4gICAgICAgICAgICAoc2V0dGxlT3JkZXJMaXN0ZW5lciA9IG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHtpc01hcmtldEFzc2V0LCBtYXJrZXRBc3NldH0gPSBtYXJrZXRfdXRpbHMuaXNNYXJrZXRBc3NldChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGlzTWFya2V0QXNzZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0QXNzZXQuaWQgPT09IG9iamVjdC5iYWxhbmNlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnNldHRsZU9yZGVyVXBkYXRlKG1hcmtldEFzc2V0LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMucXVvdGVBc3NldCA9PT0gbnVsbCB8fCBuZXh0UHJvcHMuYmFzZUFzc2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyogUHJlZGljdGlvbiBtYXJrZXRzIHNob3VsZCBvbmx5IGJlIHNob3duIGluIG9uZSBkaXJlY3Rpb24sIGlmIHRoZSBsaW5rIGdvZXMgdG8gdGhlIHdyb25nIG9uZSB3ZSBmbGlwIGl0ICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlQXNzZXQgJiZcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlQXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcbiAgICAgICAgICAgICAgICBgL21hcmtldC8ke25leHRQcm9wcy5iYXNlQXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgKX1fJHtuZXh0UHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIil9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMucXVvdGVBc3NldCAmJiBuZXh0UHJvcHMuYmFzZUFzc2V0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlRvTWFya2V0KG5leHRQcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIikgIT09XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIikgIT09XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTdWIgPSB0aGlzLnN0YXRlLnN1Yi5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy51blN1YnNjcmliZU1hcmtldChjdXJyZW50U3ViWzBdLCBjdXJyZW50U3ViWzFdKS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQobmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCB7cXVvdGVBc3NldCwgYmFzZUFzc2V0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChxdW90ZUFzc2V0ID09PSBudWxsIHx8IGJhc2VBc3NldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoXG4gICAgICAgICAgICBxdW90ZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgYmFzZUFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChlbWl0dGVyKSB7XG4gICAgICAgICAgICBlbWl0dGVyLm9mZihcImNhbmNlbC1vcmRlclwiLCBsaW1pdExpc3RlbmVyKTtcbiAgICAgICAgICAgIGVtaXR0ZXIub2ZmKFwiY2xvc2UtY2FsbFwiLCBjYWxsTGlzdGVuZXIpO1xuICAgICAgICAgICAgZW1pdHRlci5vZmYoXCJjYWxsLW9yZGVyLXVwZGF0ZVwiLCBuZXdDYWxsTGlzdGVuZXIpO1xuICAgICAgICAgICAgZW1pdHRlci5vZmYoXCJiaXRhc3NldC11cGRhdGVcIiwgZmVlZFVwZGF0ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIGVtaXR0ZXIub2ZmKFwic2V0dGxlLW9yZGVyLXVwZGF0ZVwiLCBzZXR0bGVPcmRlckxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zdWJUb01hcmtldChwcm9wcywgbmV3QnVja2V0U2l6ZSwgbmV3R3JvdXBMaW1pdCkge1xuICAgICAgICBsZXQge3F1b3RlQXNzZXQsIGJhc2VBc3NldCwgYnVja2V0U2l6ZSwgY3VycmVudEdyb3VwT3JkZXJMaW1pdH0gPSBwcm9wcztcbiAgICAgICAgaWYgKG5ld0J1Y2tldFNpemUpIHtcbiAgICAgICAgICAgIGJ1Y2tldFNpemUgPSBuZXdCdWNrZXRTaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdHcm91cExpbWl0KSB7XG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0ID0gbmV3R3JvdXBMaW1pdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVvdGVBc3NldC5nZXQoXCJpZFwiKSAmJiBiYXNlQXNzZXQuZ2V0KFwiaWRcIikpIHtcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnN1YnNjcmliZU1hcmtldC5kZWZlcihcbiAgICAgICAgICAgICAgICBiYXNlQXNzZXQsXG4gICAgICAgICAgICAgICAgcXVvdGVBc3NldCxcbiAgICAgICAgICAgICAgICBidWNrZXRTaXplLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdWI6IGAke3F1b3RlQXNzZXQuZ2V0KFwiaWRcIil9XyR7YmFzZUFzc2V0LmdldChcImlkXCIpfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5xdW90ZUFzc2V0ID09PSBudWxsIHx8IHRoaXMucHJvcHMuYmFzZUFzc2V0ID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwibWFya2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RXhjaGFuZ2VcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBzdWI9e3RoaXMuc3RhdGUuc3VifVxuICAgICAgICAgICAgICAgIHN1YlRvTWFya2V0PXt0aGlzLl9zdWJUb01hcmtldH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5FeGNoYW5nZVN1YnNjcmliZXIgPSBCaW5kVG9DaGFpblN0YXRlKEV4Y2hhbmdlU3Vic2NyaWJlciwge1xuICAgIHNob3dfbG9hZGVyOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjaGFuZ2VDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCB7TXlPcGVuT3JkZXJzfSBmcm9tIFwiLi9NeU9wZW5PcmRlcnNcIjtcbmltcG9ydCBPcmRlckJvb2sgZnJvbSBcIi4vT3JkZXJCb29rXCI7XG5pbXBvcnQgTWFya2V0SGlzdG9yeSBmcm9tIFwiLi9NYXJrZXRIaXN0b3J5XCI7XG5pbXBvcnQgTXlNYXJrZXRzIGZyb20gXCIuL015TWFya2V0c1wiO1xuaW1wb3J0IEJ1eVNlbGwgZnJvbSBcIi4vQnV5U2VsbFwiO1xuaW1wb3J0IE1hcmtldFBpY2tlciBmcm9tIFwiLi9NYXJrZXRQaWNrZXJcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG4vLyBpbXBvcnQgUHJpY2VDaGFydEQzIGZyb20gXCIuL1ByaWNlQ2hhcnREM1wiO1xuaW1wb3J0IFRyYWRpbmdWaWV3UHJpY2VDaGFydCBmcm9tIFwiLi9UcmFkaW5nVmlld1ByaWNlQ2hhcnRcIjtcbmltcG9ydCBhc3NldFV0aWxzIGZyb20gXCJjb21tb24vYXNzZXRfdXRpbHNcIjtcbmltcG9ydCBEZXB0aEhpZ2hDaGFydCBmcm9tIFwiLi9EZXB0aEhpZ2hDaGFydFwiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IEJvcnJvd01vZGFsIGZyb20gXCIuLi9Nb2RhbC9Cb3Jyb3dNb2RhbFwiO1xuaW1wb3J0IG5vdGlmeSBmcm9tIFwiYWN0aW9ucy9Ob3RpZmljYXRpb25BY3Rpb25zXCI7XG5pbXBvcnQgQWNjb3VudE5vdGlmaWNhdGlvbnMgZnJvbSBcIi4uL05vdGlmaWVyL05vdGlmaWVyQ29udGFpbmVyXCI7XG5pbXBvcnQgUHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQge0NoYWluU3RvcmUsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBtYXJrZXRfdXRpbHMgZnJvbSBcImNvbW1vbi9tYXJrZXRfdXRpbHNcIjtcbmltcG9ydCB7QXNzZXQsIFByaWNlLCBMaW1pdE9yZGVyQ3JlYXRlfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCBDb25maXJtT3JkZXJNb2RhbCBmcm9tIFwiLi9Db25maXJtT3JkZXJNb2RhbFwiO1xuaW1wb3J0IEV4Y2hhbmdlSGVhZGVyIGZyb20gXCIuL0V4Y2hhbmdlSGVhZGVyXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IHtjaGVja0ZlZVN0YXR1c0FzeW5jfSBmcm9tIFwiY29tbW9uL3RyeEhlbHBlclwiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IENoYXRCcm8gZnJvbSBcIi4uL0NoYXQvQ2hhdEJyb1wiO1xuXG4vLyBIaWdoY2hhcnRzLnNldE9wdGlvbnMoe1xuLy8gICAgIGdsb2JhbDoge1xuLy8gICAgICAgICB1c2VVVEM6IGZhbHNlXG4vLyAgICAgfVxuLy8gfSk7XG5pbXBvcnQgZ3VpZGUgZnJvbSBcImludHJvLmpzXCI7XG5pbXBvcnQgdHJhbnNsYXRvciBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7SWNvbiBhcyBBbnRJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIEV4Y2hhbmdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBtYXJrZXRDYWxsT3JkZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGFjdGl2ZU1hcmtldEhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgdmlld1NldHRpbmdzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbWFya2V0Q2FsbE9yZGVyczogW10sXG4gICAgICAgIGFjdGl2ZU1hcmtldEhpc3Rvcnk6IHt9LFxuICAgICAgICB2aWV3U2V0dGluZ3M6IHt9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9pbml0aWFsU3RhdGUocHJvcHMpLFxuICAgICAgICAgICAgZXhwaXJhdGlvblR5cGU6IHtcbiAgICAgICAgICAgICAgICBiaWQ6IHByb3BzLmV4Y2hhbmdlLmdldEluKFtcImxhc3RFeHBpcmF0aW9uXCIsIFwiYmlkXCJdKSB8fCBcIllFQVJcIixcbiAgICAgICAgICAgICAgICBhc2s6IHByb3BzLmV4Y2hhbmdlLmdldEluKFtcImxhc3RFeHBpcmF0aW9uXCIsIFwiYXNrXCJdKSB8fCBcIllFQVJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cGlyYXRpb25DdXN0b21UaW1lOiB7XG4gICAgICAgICAgICAgICAgYmlkOiBtb21lbnQoKS5hZGQoMSwgXCJkYXlcIiksXG4gICAgICAgICAgICAgICAgYXNrOiBtb21lbnQoKS5hZGQoMSwgXCJkYXlcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmZWVTdGF0dXM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZ2V0V2luZG93U2l6ZSA9IGRlYm91bmNlKHRoaXMuX2dldFdpbmRvd1NpemUuYmluZCh0aGlzKSwgMTUwKTtcbiAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXMgPSB0aGlzLl9jaGVja0ZlZVN0YXR1cy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZUV4cGlyYXRpb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVFeHBpcmF0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUN1c3RvbUV4cGlyYXRpb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVDdXN0b21FeHBpcmF0aW9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5wc0luaXQgPSB0cnVlO1xuICAgIH1cblxuICAgIF9oYW5kbGVFeHBpcmF0aW9uQ2hhbmdlKHR5cGUsIGUpIHtcbiAgICAgICAgbGV0IGV4cGlyYXRpb25UeXBlID0ge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5leHBpcmF0aW9uVHlwZSxcbiAgICAgICAgICAgIFt0eXBlXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IFwiU1BFQ0lGSUNcIikge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnNldEV4Y2hhbmdlTGFzdEV4cGlyYXRpb24oe1xuICAgICAgICAgICAgICAgIC4uLigodGhpcy5wcm9wcy5leGNoYW5nZS5oYXMoXCJsYXN0RXhwaXJhdGlvblwiKSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmV4Y2hhbmdlLmdldChcImxhc3RFeHBpcmF0aW9uXCIpLnRvSlMoKSkgfHxcbiAgICAgICAgICAgICAgICAgICAge30pLFxuICAgICAgICAgICAgICAgIFt0eXBlXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBpcmF0aW9uVHlwZTogZXhwaXJhdGlvblR5cGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUN1c3RvbUV4cGlyYXRpb25DaGFuZ2UodHlwZSwgdGltZSkge1xuICAgICAgICBsZXQgZXhwaXJhdGlvbkN1c3RvbVRpbWUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmV4cGlyYXRpb25DdXN0b21UaW1lLFxuICAgICAgICAgICAgW3R5cGVdOiB0aW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBpcmF0aW9uQ3VzdG9tVGltZTogZXhwaXJhdGlvbkN1c3RvbVRpbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgRVhQSVJBVElPTlMgPSB7XG4gICAgICAgIEhPVVI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjEgaG91clwiLFxuICAgICAgICAgICAgZ2V0OiAoKSA9PlxuICAgICAgICAgICAgICAgIG1vbWVudCgpXG4gICAgICAgICAgICAgICAgICAgIC5hZGQoMSwgXCJob3VyXCIpXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZU9mKClcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMkhPVVJTXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjEyIGhvdXJzXCIsXG4gICAgICAgICAgICBnZXQ6ICgpID0+XG4gICAgICAgICAgICAgICAgbW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZCgxMiwgXCJob3VyXCIpXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZU9mKClcbiAgICAgICAgfSxcbiAgICAgICAgXCIyNEhPVVJTXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIjI0IGhvdXJzXCIsXG4gICAgICAgICAgICBnZXQ6ICgpID0+XG4gICAgICAgICAgICAgICAgbW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZCgxLCBcImRheVwiKVxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpXG4gICAgICAgIH0sXG4gICAgICAgIFwiN0RBWVNcIjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiNyBkYXlzXCIsXG4gICAgICAgICAgICBnZXQ6ICgpID0+XG4gICAgICAgICAgICAgICAgbW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZCg3LCBcImRheVwiKVxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpXG4gICAgICAgIH0sXG4gICAgICAgIE1PTlRIOiB7XG4gICAgICAgICAgICB0aXRsZTogXCIzMCBkYXlzXCIsXG4gICAgICAgICAgICBnZXQ6ICgpID0+XG4gICAgICAgICAgICAgICAgbW9tZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZCgzMCwgXCJkYXlcIilcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlT2YoKVxuICAgICAgICB9LFxuICAgICAgICBZRUFSOiB7XG4gICAgICAgICAgICB0aXRsZTogXCIxIHllYXJcIixcbiAgICAgICAgICAgIGdldDogKCkgPT5cbiAgICAgICAgICAgICAgICBtb21lbnQoKVxuICAgICAgICAgICAgICAgICAgICAuYWRkKDEsIFwieWVhclwiKVxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpXG4gICAgICAgIH0sXG4gICAgICAgIFNQRUNJRklDOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJTcGVjaWZpY1wiLFxuICAgICAgICAgICAgZ2V0OiB0eXBlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5leHBpcmF0aW9uQ3VzdG9tVGltZVt0eXBlXS52YWx1ZU9mKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX2luaXRpYWxTdGF0ZShwcm9wcykge1xuICAgICAgICBsZXQgd3MgPSBwcm9wcy52aWV3U2V0dGluZ3M7XG4gICAgICAgIGxldCBiaWQgPSB7XG4gICAgICAgICAgICBmb3JTYWxlVGV4dDogXCJcIixcbiAgICAgICAgICAgIHRvUmVjZWl2ZVRleHQ6IFwiXCIsXG4gICAgICAgICAgICBwcmljZVRleHQ6IFwiXCIsXG4gICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogcHJvcHMuYmFzZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMuYmFzZUFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0b19yZWNlaXZlOiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5xdW90ZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGJpZC5wcmljZSA9IG5ldyBQcmljZSh7YmFzZTogYmlkLmZvcl9zYWxlLCBxdW90ZTogYmlkLnRvX3JlY2VpdmV9KTtcbiAgICAgICAgbGV0IGFzayA9IHtcbiAgICAgICAgICAgIGZvclNhbGVUZXh0OiBcIlwiLFxuICAgICAgICAgICAgdG9SZWNlaXZlVGV4dDogXCJcIixcbiAgICAgICAgICAgIHByaWNlVGV4dDogXCJcIixcbiAgICAgICAgICAgIGZvcl9zYWxlOiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5xdW90ZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdG9fcmVjZWl2ZTogbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogcHJvcHMuYmFzZUFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMuYmFzZUFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgYXNrLnByaWNlID0gbmV3IFByaWNlKHtiYXNlOiBhc2suZm9yX3NhbGUsIHF1b3RlOiBhc2sudG9fcmVjZWl2ZX0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgICAgIGJ1eVNlbGxPcGVuOiB3cy5nZXQoXCJidXlTZWxsT3BlblwiLCB0cnVlKSxcbiAgICAgICAgICAgIGJpZCxcbiAgICAgICAgICAgIGFzayxcbiAgICAgICAgICAgIGZsaXBCdXlTZWxsOiB3cy5nZXQoXCJmbGlwQnV5U2VsbFwiLCBmYWxzZSksXG4gICAgICAgICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93RGVwdGhDaGFydDogd3MuZ2V0KFwic2hvd0RlcHRoQ2hhcnRcIiwgZmFsc2UpLFxuICAgICAgICAgICAgbGVmdE9yZGVyQm9vazogd3MuZ2V0KFwibGVmdE9yZGVyQm9va1wiLCBmYWxzZSksXG4gICAgICAgICAgICBidXlEaWZmOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGxEaWZmOiBmYWxzZSxcbiAgICAgICAgICAgIGJ1eVNlbGxUb3A6IHdzLmdldChcImJ1eVNlbGxUb3BcIiwgdHJ1ZSksXG4gICAgICAgICAgICBidXlGZWVBc3NldElkeDogd3MuZ2V0KFwiYnV5RmVlQXNzZXRJZHhcIiwgMCksXG4gICAgICAgICAgICBzZWxsRmVlQXNzZXRJZHg6IHdzLmdldChcInNlbGxGZWVBc3NldElkeFwiLCAwKSxcbiAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgaGlkZVBhbmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGNoYXJ0SGVpZ2h0OiB3cy5nZXQoXCJjaGFydEhlaWdodFwiLCA2MDApLFxuICAgICAgICAgICAgY3VycmVudFBlcmlvZDogd3MuZ2V0KFwiY3VycmVudFBlcmlvZFwiLCAzNjAwICogMjQgKiAzMCAqIDMpIC8vIDMgbW9udGhzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldExhc3RNYXJrZXRLZXkoKSB7XG4gICAgICAgIGNvbnN0IGNoYWluSUQgPSBBcGlzLmluc3RhbmNlKCkuY2hhaW5faWQ7XG4gICAgICAgIHJldHVybiBgbGFzdE1hcmtldCR7Y2hhaW5JRCA/IFwiX1wiICsgY2hhaW5JRC5zdWJzdHIoMCwgOCkgOiBcIlwifWA7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBNYXJrZXRzQWN0aW9ucy5nZXRUcmFja2VkR3JvdXBzQ29uZmlnKCk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nLmRlZmVyKHtcbiAgICAgICAgICAgIFt0aGlzLl9nZXRMYXN0TWFya2V0S2V5KCldOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIikgK1xuICAgICAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fZ2V0V2luZG93U2l6ZSwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgaWYgKCFucC5tYXJrZXRSZWFkeSAmJiAhdGhpcy5wcm9wcy5tYXJrZXRSZWFkeSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9wc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG5wKSB7XG4gICAgICAgICAgICBpZiAobnAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHByb3BzQ2hhbmdlZCA9XG4gICAgICAgICAgICAgICAgICAgIHByb3BzQ2hhbmdlZCB8fFxuICAgICAgICAgICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnBba2V5XSwgdGhpcy5wcm9wc1trZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNDaGFuZ2VkKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHNDaGFuZ2VkIHx8ICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgX2NoZWNrRmVlU3RhdHVzKFxuICAgICAgICBhc3NldHMgPSBbXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvcmVBc3NldCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZUFzc2V0LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0XG4gICAgICAgIF0sXG4gICAgICAgIGFjY291bnQgPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgKSB7XG4gICAgICAgIGxldCBmZWVTdGF0dXMgPSB7fTtcbiAgICAgICAgbGV0IHAgPSBbXTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBwLnB1c2goXG4gICAgICAgICAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZmVlSUQ6IGEuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibGltaXRfb3JkZXJfY3JlYXRlXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFByb21pc2UuYWxsKHApXG4gICAgICAgICAgICAudGhlbihzdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzW2EuZ2V0KFwiaWRcIildID0gc3RhdHVzW2lkeF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyh0aGlzLnN0YXRlLmZlZVN0YXR1cywgZmVlU3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja0ZlZVN0YXR1c0FzeW5jIGVycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmVlU3RhdHVzOiB7fX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldFdpbmRvd1NpemUoKSB7XG4gICAgICAgIGxldCB7aW5uZXJIZWlnaHQsIGlubmVyV2lkdGh9ID0gd2luZG93O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpbm5lckhlaWdodCAhPT0gdGhpcy5zdGF0ZS5oZWlnaHQgfHxcbiAgICAgICAgICAgIGlubmVyV2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGlubmVySGVpZ2h0LFxuICAgICAgICAgICAgICAgIHdpZHRoOiBpbm5lcldpZHRoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBjZW50ZXJDb250YWluZXIgPSB0aGlzLnJlZnMuY2VudGVyO1xuICAgICAgICAgICAgaWYgKGNlbnRlckNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIFBzLnVwZGF0ZShjZW50ZXJDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2luaXRQc0NvbnRhaW5lcigpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5leGNoYW5nZS5nZXQoXCJ0dXRvcmlhbFNob3duXCIpICYmXG4gICAgICAgICAgICBwcmV2UHJvcHMuY29yZUFzc2V0ICYmXG4gICAgICAgICAgICBwcmV2U3RhdGUuZmVlU3RhdHVzXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnR1dG9yaWFsU2hvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR1dG9yaWFsU2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXCJ0aGVtZXNcIik7XG5cbiAgICAgICAgICAgICAgICBndWlkZVxuICAgICAgICAgICAgICAgICAgICAuaW50cm9KcygpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBDbGFzczogdGhlbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRDbGFzczogdGhlbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93QnVsbGV0czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlTmV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVQcmV2OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dExhYmVsOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLm5leHRfbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZMYWJlbDogdHJhbnNsYXRvci50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5wcmV2X2xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwTGFiZWw6IHRyYW5zbGF0b3IudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guc2tpcF9sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZUxhYmVsOiB0cmFuc2xhdG9yLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLmRvbmVfbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5zZXRFeGNoYW5nZVR1dG9yaWFsU2hvd24uZGVmZXIodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdFBzQ29udGFpbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5yZWZzLmNlbnRlciAmJiB0aGlzLnBzSW5pdCkge1xuICAgICAgICAgICAgbGV0IGNlbnRlckNvbnRhaW5lciA9IHRoaXMucmVmcy5jZW50ZXI7XG4gICAgICAgICAgICBpZiAoY2VudGVyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgUHMuaW5pdGlhbGl6ZShjZW50ZXJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMucHNJbml0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLl9pbml0UHNDb250YWluZXIoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLnF1b3RlQXNzZXQgIT09IHRoaXMucHJvcHMucXVvdGVBc3NldCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldCAhPT0gdGhpcy5wcm9wcy5iYXNlQXNzZXQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFByb3BzLmNvcmVBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFByb3BzLnF1b3RlQXNzZXRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIikgIT09XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIikgIT09XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9pbml0aWFsU3RhdGUobmV4dFByb3BzKSk7XG5cbiAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIFt0aGlzLl9nZXRMYXN0TWFya2V0S2V5KCldOlxuICAgICAgICAgICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIikgK1xuICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnN1YiAmJiBuZXh0UHJvcHMuYnVja2V0U2l6ZSAhPT0gdGhpcy5wcm9wcy5idWNrZXRTaXplKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5fY2hhbmdlQnVja2V0U2l6ZShuZXh0UHJvcHMuYnVja2V0U2l6ZSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fZ2V0V2luZG93U2l6ZSk7XG4gICAgfVxuXG4gICAgX2dldEZlZUFzc2V0cyhxdW90ZSwgYmFzZSwgY29yZUFzc2V0KSB7XG4gICAgICAgIGxldCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge2ZlZVN0YXR1c30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFkZE1pc3NpbmdBc3NldCh0YXJnZXQsIGFzc2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmluZGV4T2YoYXNzZXQpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGFzc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhc0ZlZVBvb2xCYWxhbmNlKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc1Bvb2xCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFzQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZlZVN0YXR1c1tpZF0gJiYgZmVlU3RhdHVzW2lkXS5oYXNCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGxBc3NldHMgPSBbY29yZUFzc2V0LCBxdW90ZSA9PT0gY29yZUFzc2V0ID8gYmFzZSA6IHF1b3RlXTtcbiAgICAgICAgYWRkTWlzc2luZ0Fzc2V0KHNlbGxBc3NldHMsIHF1b3RlKTtcbiAgICAgICAgYWRkTWlzc2luZ0Fzc2V0KHNlbGxBc3NldHMsIGJhc2UpO1xuICAgICAgICAvLyBsZXQgc2VsbEZlZUFzc2V0O1xuXG4gICAgICAgIGxldCBidXlBc3NldHMgPSBbY29yZUFzc2V0LCBiYXNlID09PSBjb3JlQXNzZXQgPyBxdW90ZSA6IGJhc2VdO1xuICAgICAgICBhZGRNaXNzaW5nQXNzZXQoYnV5QXNzZXRzLCBxdW90ZSk7XG4gICAgICAgIGFkZE1pc3NpbmdBc3NldChidXlBc3NldHMsIGJhc2UpO1xuICAgICAgICAvLyBsZXQgYnV5RmVlQXNzZXQ7XG5cbiAgICAgICAgbGV0IGJhbGFuY2VzID0ge307XG5cbiAgICAgICAgY3VycmVudEFjY291bnRcbiAgICAgICAgICAgIC5nZXQoXCJiYWxhbmNlc1wiLCBbXSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGJhbGFuY2UsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgW1wiMS4zLjBcIiwgcXVvdGUuZ2V0KFwiaWRcIiksIGJhc2UuZ2V0KFwiaWRcIildLmluZGV4T2YoaWQpID49IDBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChiYWxhbmNlLCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZSk7XG4gICAgICAgICAgICAgICAgYmFsYW5jZXNbaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBiYWxhbmNlT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHBhcnNlSW50KGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSwgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGZlZTogdGhpcy5fZ2V0RmVlKENoYWluU3RvcmUuZ2V0QXNzZXQoaWQpKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBmaWx0ZXJBbmREZWZhdWx0KGFzc2V0cywgYmFsYW5jZXMsIGlkeCkge1xuICAgICAgICAgICAgbGV0IGFzc2V0O1xuICAgICAgICAgICAgLyogT25seSBrZWVwIGFzc2V0cyBmb3Igd2hpY2ggdGhlIHVzZXIgaGFzIGEgYmFsYW5jZSBsYXJnZXIgdGhhbiB0aGUgZmVlLCBhbmQgZm9yIHdoaWNoIHRoZSBmZWUgcG9vbCBpcyB2YWxpZCAqL1xuICAgICAgICAgICAgYXNzZXRzID0gYXNzZXRzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWJhbGFuY2VzW2EuZ2V0KFwiaWRcIildKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgaGFzRmVlUG9vbEJhbGFuY2UoYS5nZXQoXCJpZFwiKSkgJiYgaGFzQmFsYW5jZShhLmdldChcImlkXCIpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLyogSWYgdGhlIHVzZXIgaGFzIG5vIHZhbGlkIGJhbGFuY2VzLCBkZWZhdWx0IHRvIGNvcmUgZmVlICovXG4gICAgICAgICAgICBpZiAoIWFzc2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhc3NldCA9IGNvcmVBc3NldDtcbiAgICAgICAgICAgICAgICBhc3NldHMucHVzaChjb3JlQXNzZXQpO1xuICAgICAgICAgICAgICAgIC8qIElmIHRoZSB1c2VyIGhhcyBiYWxhbmNlcywgdXNlIHRoZSBzdG9yZWQgaWR4IHZhbHVlIHVubGVzcyB0aGF0IGFzc2V0IGlzIG5vIGxvbmdlciBhdmFpbGFibGUqL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3NldCA9IGFzc2V0c1tNYXRoLm1pbihhc3NldHMubGVuZ3RoIC0gMSwgaWR4KV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7YXNzZXRzLCBhc3NldH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQge2Fzc2V0czogc2VsbEZlZUFzc2V0cywgYXNzZXQ6IHNlbGxGZWVBc3NldH0gPSBmaWx0ZXJBbmREZWZhdWx0KFxuICAgICAgICAgICAgc2VsbEFzc2V0cyxcbiAgICAgICAgICAgIGJhbGFuY2VzLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxsRmVlQXNzZXRJZHhcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHthc3NldHM6IGJ1eUZlZUFzc2V0cywgYXNzZXQ6IGJ1eUZlZUFzc2V0fSA9IGZpbHRlckFuZERlZmF1bHQoXG4gICAgICAgICAgICBidXlBc3NldHMsXG4gICAgICAgICAgICBiYWxhbmNlcyxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYnV5RmVlQXNzZXRJZHhcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2VsbEZlZSA9IHRoaXMuX2dldEZlZShzZWxsRmVlQXNzZXQpO1xuICAgICAgICBsZXQgYnV5RmVlID0gdGhpcy5fZ2V0RmVlKGJ1eUZlZUFzc2V0KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsbEZlZUFzc2V0LFxuICAgICAgICAgICAgc2VsbEZlZUFzc2V0cyxcbiAgICAgICAgICAgIHNlbGxGZWUsXG4gICAgICAgICAgICBidXlGZWVBc3NldCxcbiAgICAgICAgICAgIGJ1eUZlZUFzc2V0cyxcbiAgICAgICAgICAgIGJ1eUZlZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9nZXRGZWUoYXNzZXQgPSB0aGlzLnByb3BzLmNvcmVBc3NldCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZWVTdGF0dXNbYXNzZXQuZ2V0KFwiaWRcIildICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZlZVN0YXR1c1thc3NldC5nZXQoXCJpZFwiKV0uZmVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3ZlcmlmeUZlZShmZWUsIHNlbGwsIHNlbGxCYWxhbmNlLCBjb3JlQmFsYW5jZSkge1xuICAgICAgICBsZXQgY29yZUZlZSA9IHRoaXMuX2dldEZlZSgpO1xuXG4gICAgICAgIGlmIChmZWUuYXNzZXRfaWQgPT09IFwiMS4zLjBcIikge1xuICAgICAgICAgICAgaWYgKGNvcmVGZWUuZ2V0QW1vdW50KCkgPD0gY29yZUJhbGFuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLjMuMFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzZWxsU3VtID1cbiAgICAgICAgICAgICAgICBzZWxsLmFzc2V0X2lkID09PSBmZWUuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgPyBmZWUuZ2V0QW1vdW50KCkgKyBzZWxsLmdldEFtb3VudCgpXG4gICAgICAgICAgICAgICAgICAgIDogc2VsbC5nZXRBbW91bnQoKTtcbiAgICAgICAgICAgIGlmIChzZWxsU3VtIDw9IHNlbGxCYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VmZmljaWVudCBiYWxhbmNlIGluIGFzc2V0IHRvIHBheSBmZWVcbiAgICAgICAgICAgICAgICByZXR1cm4gZmVlLmFzc2V0X2lkO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBjb3JlRmVlLmdldEFtb3VudCgpIDw9IGNvcmVCYWxhbmNlICYmXG4gICAgICAgICAgICAgICAgZmVlLmFzc2V0X2lkICE9PSBcIjEuMy4wXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIFN1ZmZpY2llbnQgYmFsYW5jZSBpbiBjb3JlIGFzc2V0IHRvIHBheSBmZWVcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxLjMuMFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gVW5hYmxlIHRvIHBheSBmZWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jcmVhdGVMaW1pdE9yZGVyQ29uZmlybShcbiAgICAgICAgYnV5QXNzZXQsXG4gICAgICAgIHNlbGxBc3NldCxcbiAgICAgICAgc2VsbEJhbGFuY2UsXG4gICAgICAgIGNvcmVCYWxhbmNlLFxuICAgICAgICBmZWVBc3NldCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgc2hvcnQgPSB0cnVlLFxuICAgICAgICBlXG4gICAgKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHtoaWdoZXN0QmlkLCBsb3dlc3RBc2t9ID0gdGhpcy5wcm9wcy5tYXJrZXREYXRhO1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZSA9PT0gXCJzZWxsXCIgPyBcImFza1wiIDogXCJiaWRcIl07XG5cbiAgICAgICAgc2VsbEJhbGFuY2UgPSBjdXJyZW50LmZvcl9zYWxlLmNsb25lKFxuICAgICAgICAgICAgc2VsbEJhbGFuY2VcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KHNlbGxCYWxhbmNlKS50b0pTKCkuYmFsYW5jZSwgMTApXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICk7XG4gICAgICAgIGNvcmVCYWxhbmNlID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogY29yZUJhbGFuY2VcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlKS50b0pTKCkuYmFsYW5jZSwgMTApXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBmZWUgPSB0aGlzLl9nZXRGZWUoZmVlQXNzZXQpO1xuICAgICAgICBsZXQgZmVlSUQgPSB0aGlzLl92ZXJpZnlGZWUoXG4gICAgICAgICAgICBmZWUsXG4gICAgICAgICAgICBjdXJyZW50LmZvcl9zYWxlLFxuICAgICAgICAgICAgc2VsbEJhbGFuY2UuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICBjb3JlQmFsYW5jZS5nZXRBbW91bnQoKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIWZlZUlEKSB7XG4gICAgICAgICAgICByZXR1cm4gbm90aWZ5LmFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnN1ZmZpY2llbnQgZnVuZHMgdG8gcGF5IGZlZXNcIixcbiAgICAgICAgICAgICAgICBsZXZlbDogXCJlcnJvclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSBcImJ1eVwiICYmIGxvd2VzdEFzaykge1xuICAgICAgICAgICAgbGV0IGRpZmYgPSB0aGlzLnN0YXRlLmJpZC5wcmljZS50b1JlYWwoKSAvIGxvd2VzdEFzay5nZXRQcmljZSgpO1xuICAgICAgICAgICAgaWYgKGRpZmYgPiAxLjIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMuYnV5LnNob3coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGJ1eURpZmY6IGRpZmZcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNlbGxcIiAmJiBoaWdoZXN0QmlkKSB7XG4gICAgICAgICAgICBsZXQgZGlmZiA9XG4gICAgICAgICAgICAgICAgMSAvICh0aGlzLnN0YXRlLmFzay5wcmljZS50b1JlYWwoKSAvIGhpZ2hlc3RCaWQuZ2V0UHJpY2UoKSk7XG4gICAgICAgICAgICBpZiAoZGlmZiA+IDEuMikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5zZWxsLnNob3coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGxEaWZmOiBkaWZmXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNQcmVkaWN0aW9uTWFya2V0ID0gc2VsbEFzc2V0LmdldEluKFtcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIlxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoY3VycmVudC5mb3Jfc2FsZS5ndChzZWxsQmFsYW5jZSkgJiYgIWlzUHJlZGljdGlvbk1hcmtldCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vdGlmeS5hZGROb3RpZmljYXRpb24oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgIFwiSW5zdWZmaWNpZW50IGZ1bmRzIHRvIHBsYWNlIG9yZGVyLCB5b3UgbmVlZCBhdCBsZWFzdCBcIiArXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuZm9yX3NhbGUuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSkgK1xuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgIHNlbGxBc3NldC5nZXQoXCJzeW1ib2xcIiksXG4gICAgICAgICAgICAgICAgbGV2ZWw6IFwiZXJyb3JcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICBjdXJyZW50LmZvcl9zYWxlLmdldEFtb3VudCgpID4gMCAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnQudG9fcmVjZWl2ZS5nZXRBbW91bnQoKSA+IDBcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbm90aWZ5LmFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBhbW91bnQgYW5kIHByaWNlXCIsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IFwiZXJyb3JcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHR5cGUgPT09IFwic2VsbFwiICYmIGlzUHJlZGljdGlvbk1hcmtldCAmJiBzaG9ydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVByZWRpY3Rpb25TaG9ydChmZWVJRCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jcmVhdGVMaW1pdE9yZGVyKHR5cGUsIGZlZUlEKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlTGltaXRPcmRlcih0eXBlLCBmZWVJRCkge1xuICAgICAgICBsZXQgYWN0aW9uVHlwZSA9IHR5cGUgPT09IFwic2VsbFwiID8gXCJhc2tcIiA6IFwiYmlkXCI7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlW2FjdGlvblR5cGVdO1xuXG4gICAgICAgIGxldCBleHBpcmF0aW9uVGltZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmV4cGlyYXRpb25UeXBlW2FjdGlvblR5cGVdID09PSBcIlNQRUNJRklDXCIpIHtcbiAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lID0gdGhpcy5FWFBJUkFUSU9OU1tcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmV4cGlyYXRpb25UeXBlW2FjdGlvblR5cGVdXG4gICAgICAgICAgICBdLmdldChhY3Rpb25UeXBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lID0gdGhpcy5FWFBJUkFUSU9OU1tcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmV4cGlyYXRpb25UeXBlW2FjdGlvblR5cGVdXG4gICAgICAgICAgICBdLmdldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3JkZXIgPSBuZXcgTGltaXRPcmRlckNyZWF0ZSh7XG4gICAgICAgICAgICBmb3Jfc2FsZTogY3VycmVudC5mb3Jfc2FsZSxcbiAgICAgICAgICAgIGV4cGlyYXRpb246IG5ldyBEYXRlKGV4cGlyYXRpb25UaW1lIHx8IGZhbHNlKSxcbiAgICAgICAgICAgIHRvX3JlY2VpdmU6IGN1cnJlbnQudG9fcmVjZWl2ZSxcbiAgICAgICAgICAgIHNlbGxlcjogdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBmZWVJRCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHttYXJrZXROYW1lLCBmaXJzdH0gPSBtYXJrZXRfdXRpbHMuZ2V0TWFya2V0TmFtZShcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZUFzc2V0LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGludmVydGVkID0gdGhpcy5wcm9wcy5tYXJrZXREaXJlY3Rpb25zLmdldChtYXJrZXROYW1lKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkRmxpcCA9XG4gICAgICAgICAgICAoaW52ZXJ0ZWQgJiYgZmlyc3QuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcImlkXCIpKSB8fFxuICAgICAgICAgICAgKCFpbnZlcnRlZCAmJiBmaXJzdC5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIikpO1xuICAgICAgICBpZiAoc2hvdWxkRmxpcCkge1xuICAgICAgICAgICAgbGV0IHNldHRpbmcgPSB7fTtcbiAgICAgICAgICAgIHNldHRpbmdbbWFya2V0TmFtZV0gPSAhaW52ZXJ0ZWQ7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlTWFya2V0RGlyZWN0aW9uKHNldHRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXI6XCIsIEpTT04uc3RyaW5naWZ5KG9yZGVyLnRvT2JqZWN0KCkpKTtcbiAgICAgICAgcmV0dXJuIE1hcmtldHNBY3Rpb25zLmNyZWF0ZUxpbWl0T3JkZXIyKG9yZGVyKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IubWVzc2FnZSAhPT0gXCJ3YWxsZXQgbG9ja2VkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZnkuYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVua25vd24gZXJyb3IuIEZhaWxlZCB0byBwbGFjZSBvcmRlciBmb3IgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnRvX3JlY2VpdmUuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQudG9fcmVjZWl2ZS5hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvcmRlciBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9yZGVyIGZhaWxlZDpcIiwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlUHJlZGljdGlvblNob3J0KGZlZUlEKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZS5hc2s7XG4gICAgICAgIGNvbnN0IG9yZGVyID0gbmV3IExpbWl0T3JkZXJDcmVhdGUoe1xuICAgICAgICAgICAgZm9yX3NhbGU6IGN1cnJlbnQuZm9yX3NhbGUsXG4gICAgICAgICAgICB0b19yZWNlaXZlOiBjdXJyZW50LnRvX3JlY2VpdmUsXG4gICAgICAgICAgICBzZWxsZXI6IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBmZWU6IHtcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogZmVlSUQsXG4gICAgICAgICAgICAgICAgYW1vdW50OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIEZldGNoQ2hhaW4oXG4gICAgICAgICAgICAgICAgXCJnZXRBc3NldFwiLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgXSkudGhlbihhc3NldHMgPT4ge1xuICAgICAgICAgICAgbGV0IFtiYWNraW5nQXNzZXRdID0gYXNzZXRzO1xuICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIGFtb3VudDogb3JkZXIuYW1vdW50X2Zvcl9zYWxlLmdldEFtb3VudCgpLFxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBiYWNraW5nQXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBiYWNraW5nQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuY3JlYXRlUHJlZGljdGlvblNob3J0KG9yZGVyLCBjb2xsYXRlcmFsKS50aGVuKFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IubWVzc2FnZSAhPT0gXCJ3YWxsZXQgbG9ja2VkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZ5LmFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVua25vd24gZXJyb3IuIEZhaWxlZCB0byBwbGFjZSBvcmRlciBmb3IgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QXNzZXRBbW91bnQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5QXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZm9yY2VCdXkodHlwZSwgZmVlQXNzZXQsIHNlbGxCYWxhbmNlLCBjb3JlQmFsYW5jZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZSA9PT0gXCJzZWxsXCIgPyBcImFza1wiIDogXCJiaWRcIl07XG4gICAgICAgIC8vIENvbnZlcnQgZmVlIHRvIHJlbGV2YW50IGFzc2V0IGZlZSBhbmQgY2hlY2sgaWYgdXNlciBoYXMgc3VmZmljaWVudCBiYWxhbmNlXG4gICAgICAgIHNlbGxCYWxhbmNlID0gY3VycmVudC5mb3Jfc2FsZS5jbG9uZShcbiAgICAgICAgICAgIHNlbGxCYWxhbmNlXG4gICAgICAgICAgICAgICAgPyBwYXJzZUludChDaGFpblN0b3JlLmdldE9iamVjdChzZWxsQmFsYW5jZSkuZ2V0KFwiYmFsYW5jZVwiKSwgMTApXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICk7XG4gICAgICAgIGNvcmVCYWxhbmNlID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogY29yZUJhbGFuY2VcbiAgICAgICAgICAgICAgICA/IHBhcnNlSW50KENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlKS50b0pTKCkuYmFsYW5jZSwgMTApXG4gICAgICAgICAgICAgICAgOiAwXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZmVlID0gdGhpcy5fZ2V0RmVlKGZlZUFzc2V0KTtcbiAgICAgICAgbGV0IGZlZUlEID0gdGhpcy5fdmVyaWZ5RmVlKFxuICAgICAgICAgICAgZmVlLFxuICAgICAgICAgICAgY3VycmVudC5mb3Jfc2FsZSxcbiAgICAgICAgICAgIHNlbGxCYWxhbmNlLmdldEFtb3VudCgpLFxuICAgICAgICAgICAgY29yZUJhbGFuY2UuZ2V0QW1vdW50KClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZmVlSUQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUxpbWl0T3JkZXIodHlwZSwgZmVlSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBwYXkgZmVlcywgYWJvcnRpbmcgbGltaXQgb3JkZXIgY3JlYXRpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZm9yY2VTZWxsKHR5cGUsIGZlZUFzc2V0LCBzZWxsQmFsYW5jZSwgY29yZUJhbGFuY2UpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlW3R5cGUgPT09IFwic2VsbFwiID8gXCJhc2tcIiA6IFwiYmlkXCJdO1xuICAgICAgICAvLyBDb252ZXJ0IGZlZSB0byByZWxldmFudCBhc3NldCBmZWUgYW5kIGNoZWNrIGlmIHVzZXIgaGFzIHN1ZmZpY2llbnQgYmFsYW5jZVxuICAgICAgICBzZWxsQmFsYW5jZSA9IGN1cnJlbnQuZm9yX3NhbGUuY2xvbmUoXG4gICAgICAgICAgICBzZWxsQmFsYW5jZVxuICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoQ2hhaW5TdG9yZS5nZXRPYmplY3Qoc2VsbEJhbGFuY2UpLmdldChcImJhbGFuY2VcIiksIDEwKVxuICAgICAgICAgICAgICAgIDogMFxuICAgICAgICApO1xuICAgICAgICBjb3JlQmFsYW5jZSA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICBhbW91bnQ6IGNvcmVCYWxhbmNlXG4gICAgICAgICAgICAgICAgPyBwYXJzZUludChDaGFpblN0b3JlLmdldE9iamVjdChjb3JlQmFsYW5jZSkudG9KUygpLmJhbGFuY2UsIDEwKVxuICAgICAgICAgICAgICAgIDogMFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGZlZSA9IHRoaXMuX2dldEZlZShmZWVBc3NldCk7XG4gICAgICAgIGxldCBmZWVJRCA9IHRoaXMuX3ZlcmlmeUZlZShcbiAgICAgICAgICAgIGZlZSxcbiAgICAgICAgICAgIGN1cnJlbnQuZm9yX3NhbGUsXG4gICAgICAgICAgICBzZWxsQmFsYW5jZS5nZXRBbW91bnQoKSxcbiAgICAgICAgICAgIGNvcmVCYWxhbmNlLmdldEFtb3VudCgpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGZlZUlEKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVMaW1pdE9yZGVyKHR5cGUsIGZlZUlEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gcGF5IGZlZXMsIGFib3J0aW5nIGxpbWl0IG9yZGVyIGNyZWF0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NhbmNlbExpbWl0T3JkZXIob3JkZXJJRCwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgTWFya2V0c0FjdGlvbnMuY2FuY2VsTGltaXRPcmRlcihcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgb3JkZXJJRCAvLyBvcmRlciBpZCB0byBjYW5jZWxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBfY2hhbmdlQnVja2V0U2l6ZShzaXplLCBlKSB7XG4gICAgLy8gICAgIGlmIChlKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGlmIChzaXplICE9PSB0aGlzLnByb3BzLmJ1Y2tldFNpemUpIHtcbiAgICAvLyAgICAgICAgIE1hcmtldHNBY3Rpb25zLmNoYW5nZUJ1Y2tldFNpemUuZGVmZXIoc2l6ZSk7XG4gICAgLy8gICAgICAgICBsZXQgY3VycmVudFN1YiA9IHRoaXMucHJvcHMuc3ViLnNwbGl0KFwiX1wiKTtcbiAgICAvLyAgICAgICAgIE1hcmtldHNBY3Rpb25zLnVuU3Vic2NyaWJlTWFya2V0KGN1cnJlbnRTdWJbMF0sIGN1cnJlbnRTdWJbMV0pLnRoZW4oXG4gICAgLy8gICAgICAgICAgICAgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1YlRvTWFya2V0KHRoaXMucHJvcHMsIHNpemUpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBfY2hhbmdlWm9vbVBlcmlvZChzaXplLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHNpemUgIT09IHRoaXMuc3RhdGUuY3VycmVudFBlcmlvZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudFBlcmlvZDogc2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQZXJpb2Q6IHNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RlcHRoQ2hhcnRDbGljayhiYXNlLCBxdW90ZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB7YmlkLCBhc2t9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBiaWQucHJpY2UgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgYmFzZTogdGhpcy5zdGF0ZS5iaWQuZm9yX3NhbGUsXG4gICAgICAgICAgICBxdW90ZTogdGhpcy5zdGF0ZS5iaWQudG9fcmVjZWl2ZSxcbiAgICAgICAgICAgIHJlYWw6IGUueEF4aXNbMF0udmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGJpZC5wcmljZVRleHQgPSBiaWQucHJpY2UudG9SZWFsKCk7XG5cbiAgICAgICAgYXNrLnByaWNlID0gbmV3IFByaWNlKHtcbiAgICAgICAgICAgIGJhc2U6IHRoaXMuc3RhdGUuYXNrLnRvX3JlY2VpdmUsXG4gICAgICAgICAgICBxdW90ZTogdGhpcy5zdGF0ZS5hc2suZm9yX3NhbGUsXG4gICAgICAgICAgICByZWFsOiBlLnhBeGlzWzBdLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBhc2sucHJpY2VUZXh0ID0gYXNrLnByaWNlLnRvUmVhbCgpO1xuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICBiaWQsXG4gICAgICAgICAgICBhc2ssXG4gICAgICAgICAgICBkZXB0aExpbmU6IGJpZC5wcmljZS50b1JlYWwoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldEZvclNhbGUoYmlkLCB0cnVlKSB8fCB0aGlzLl9zZXRSZWNlaXZlKGJpZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NldFJlY2VpdmUoYXNrKSB8fCB0aGlzLl9zZXRGb3JTYWxlKGFzayk7XG5cbiAgICAgICAgdGhpcy5fc2V0UHJpY2VUZXh0KGJpZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NldFByaWNlVGV4dChhc2ssIGZhbHNlKTtcbiAgICAgICAgLy8gaWYgKGJpZC5mb3Jfc2FsZS4pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIF90b2dnbGVQYW5lbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBoaWRlUGFuZWw6ICF0aGlzLnN0YXRlLmhpZGVQYW5lbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZmxpcEJ1eVNlbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmxpcEJ1eVNlbGw6ICF0aGlzLnN0YXRlLmZsaXBCdXlTZWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBmbGlwQnV5U2VsbDogIXRoaXMuc3RhdGUuZmxpcEJ1eVNlbGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZU9wZW5CdXlTZWxsKCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYnV5U2VsbE9wZW46ICF0aGlzLnN0YXRlLmJ1eVNlbGxPcGVuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1eVNlbGxPcGVuOiAhdGhpcy5zdGF0ZS5idXlTZWxsT3Blbn0pO1xuICAgIH1cblxuICAgIF90b2dnbGVDaGFydHMoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBzaG93RGVwdGhDaGFydDogIXRoaXMuc3RhdGUuc2hvd0RlcHRoQ2hhcnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0RlcHRoQ2hhcnQ6ICF0aGlzLnN0YXRlLnNob3dEZXB0aENoYXJ0fSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZU1hcmtldFBpY2tlcihhc3NldCkge1xuICAgICAgICBsZXQgc2hvd01hcmtldFBpY2tlciA9ICEhYXNzZXQgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd01hcmtldFBpY2tlcixcbiAgICAgICAgICAgIG1hcmtldFBpY2tlckFzc2V0OiBhc3NldFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbW92ZU9yZGVyQm9vaygpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGxlZnRPcmRlckJvb2s6ICF0aGlzLnN0YXRlLmxlZnRPcmRlckJvb2tcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdE9yZGVyQm9vazogIXRoaXMuc3RhdGUubGVmdE9yZGVyQm9va30pO1xuICAgIH1cblxuICAgIF9jdXJyZW50UHJpY2VDbGljayh0eXBlLCBwcmljZSkge1xuICAgICAgICBjb25zdCBpc0JpZCA9IHR5cGUgPT09IFwiYmlkXCI7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZVt0eXBlXTtcbiAgICAgICAgY3VycmVudC5wcmljZSA9IHByaWNlW2lzQmlkID8gXCJpbnZlcnRcIiA6IFwiY2xvbmVcIl0oKTtcbiAgICAgICAgY3VycmVudC5wcmljZVRleHQgPSBjdXJyZW50LnByaWNlLnRvUmVhbCgpO1xuICAgICAgICBpZiAoaXNCaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEZvclNhbGUoY3VycmVudCwgaXNCaWQpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UmVjZWl2ZShjdXJyZW50LCBpc0JpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGN1cnJlbnQsIGlzQmlkKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEZvclNhbGUoY3VycmVudCwgaXNCaWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBfb3JkZXJib29rQ2xpY2sob3JkZXIpIHtcbiAgICAgICAgY29uc3QgaXNCaWQgPSBvcmRlci5pc0JpZCgpO1xuICAgICAgICAvKlxuICAgICAgICAqIEJlY2F1c2Ugd2UgYXJlIHVzaW5nIGEgYmlkIG9yZGVyIHRvIGNvbnN0cnVjdCBhbiBhc2sgYW5kIHZpY2UgdmVyc2EsXG4gICAgICAgICogdG90YWxUb1JlY2VpdmUgYmVjb21lcyBmb3JTYWxlLCBhbmQgdG90YWxGb3JTYWxlIGJlY29tZXMgdG9SZWNlaXZlXG4gICAgICAgICovXG4gICAgICAgIGxldCBmb3JTYWxlID0gb3JkZXIudG90YWxUb1JlY2VpdmUoe25vQ2FjaGU6IHRydWV9KTtcbiAgICAgICAgLy8gbGV0IHRvUmVjZWl2ZSA9IG9yZGVyLnRvdGFsRm9yU2FsZSh7bm9DYWNoZTogdHJ1ZX0pO1xuICAgICAgICBsZXQgdG9SZWNlaXZlID0gZm9yU2FsZS50aW1lcyhvcmRlci5zZWxsUHJpY2UoKSk7XG5cbiAgICAgICAgbGV0IG5ld1ByaWNlID0gbmV3IFByaWNlKHtcbiAgICAgICAgICAgIGJhc2U6IGlzQmlkID8gdG9SZWNlaXZlIDogZm9yU2FsZSxcbiAgICAgICAgICAgIHF1b3RlOiBpc0JpZCA/IGZvclNhbGUgOiB0b1JlY2VpdmVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlW2lzQmlkID8gXCJiaWRcIiA6IFwiYXNrXCJdO1xuICAgICAgICBjdXJyZW50LnByaWNlID0gbmV3UHJpY2U7XG4gICAgICAgIGN1cnJlbnQucHJpY2VUZXh0ID0gbmV3UHJpY2UudG9SZWFsKCk7XG5cbiAgICAgICAgbGV0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgLy8gSWYgaXNCaWQgaXMgdHJ1ZSwgbmV3U3RhdGUgZGVmaW5lcyBhIG5ldyBhc2sgb3JkZXIgYW5kIHZpY2UgdmVyc2FcbiAgICAgICAgICAgIFtpc0JpZCA/IFwiYXNrXCIgOiBcImJpZFwiXToge1xuICAgICAgICAgICAgICAgIGZvcl9zYWxlOiBmb3JTYWxlLFxuICAgICAgICAgICAgICAgIGZvclNhbGVUZXh0OiBmb3JTYWxlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgIHRvX3JlY2VpdmU6IHRvUmVjZWl2ZSxcbiAgICAgICAgICAgICAgICB0b1JlY2VpdmVUZXh0OiB0b1JlY2VpdmUuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgcHJpY2U6IG5ld1ByaWNlLFxuICAgICAgICAgICAgICAgIHByaWNlVGV4dDogbmV3UHJpY2UudG9SZWFsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXNCaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEZvclNhbGUoY3VycmVudCwgaXNCaWQpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UmVjZWl2ZShjdXJyZW50LCBpc0JpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGN1cnJlbnQsIGlzQmlkKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEZvclNhbGUoY3VycmVudCwgaXNCaWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIF9ib3Jyb3dRdW90ZSgpIHtcbiAgICAgICAgdGhpcy5yZWZzLmJvcnJvd1F1b3RlLnNob3coKTtcbiAgICB9XG5cbiAgICBfYm9ycm93QmFzZSgpIHtcbiAgICAgICAgdGhpcy5yZWZzLmJvcnJvd0Jhc2Uuc2hvdygpO1xuICAgIH1cblxuICAgIF9nZXRTZXR0bGVtZW50SW5mbygpIHtcbiAgICAgICAgbGV0IHtsb3dlc3RDYWxsUHJpY2UsIGZlZWRQcmljZSwgcXVvdGVBc3NldH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBzaG93Q2FsbExpbWl0ID0gZmFsc2U7XG4gICAgICAgIGlmIChmZWVkUHJpY2UpIHtcbiAgICAgICAgICAgIGlmIChmZWVkUHJpY2UuaW52ZXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0ID0gbG93ZXN0Q2FsbFByaWNlIDw9IGZlZWRQcmljZS50b1JlYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd0NhbGxMaW1pdCA9IGxvd2VzdENhbGxQcmljZSA+PSBmZWVkUHJpY2UudG9SZWFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgc2hvd0NhbGxMaW1pdCAmJlxuICAgICAgICAgICAgbG93ZXN0Q2FsbFByaWNlICYmXG4gICAgICAgICAgICAhcXVvdGVBc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcImlzX3ByZWRpY3Rpb25fbWFya2V0XCJdKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlRmVlQXNzZXQodHlwZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0eXBlID09PSBcImJ1eVwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBidXlGZWVBc3NldElkeDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIGJ1eUZlZUFzc2V0SWR4OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxsRmVlQXNzZXRJZHg6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBzZWxsRmVlQXNzZXRJZHg6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlQ2hhcnRIZWlnaHQoe3ZhbHVlLCBpbmNyZWFzZX0pIHtcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gdmFsdWVcbiAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5jaGFydEhlaWdodCArIChpbmNyZWFzZSA/IDIwIDogLTIwKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjaGFydEhlaWdodDogbmV3SGVpZ2h0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBjaGFydEhlaWdodDogbmV3SGVpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90b2dnbGVCdXlTZWxsUG9zaXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYnV5U2VsbFRvcDogIXRoaXMuc3RhdGUuYnV5U2VsbFRvcFxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYnV5U2VsbFRvcDogIXRoaXMuc3RhdGUuYnV5U2VsbFRvcFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2V0UmVjZWl2ZShzdGF0ZSwgaXNCaWQpIHtcbiAgICAgICAgaWYgKHN0YXRlLnByaWNlLmlzVmFsaWQoKSAmJiBzdGF0ZS5mb3Jfc2FsZS5oYXNBbW91bnQoKSkge1xuICAgICAgICAgICAgc3RhdGUudG9fcmVjZWl2ZSA9IHN0YXRlLmZvcl9zYWxlLnRpbWVzKHN0YXRlLnByaWNlKTtcbiAgICAgICAgICAgIHN0YXRlLnRvUmVjZWl2ZVRleHQgPSBzdGF0ZS50b19yZWNlaXZlXG4gICAgICAgICAgICAgICAgLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgX3NldEZvclNhbGUoc3RhdGUsIGlzQmlkKSB7XG4gICAgICAgIGlmIChzdGF0ZS5wcmljZS5pc1ZhbGlkKCkgJiYgc3RhdGUudG9fcmVjZWl2ZS5oYXNBbW91bnQoKSkge1xuICAgICAgICAgICAgc3RhdGUuZm9yX3NhbGUgPSBzdGF0ZS50b19yZWNlaXZlLnRpbWVzKHN0YXRlLnByaWNlLCB0cnVlKTtcbiAgICAgICAgICAgIHN0YXRlLmZvclNhbGVUZXh0ID0gc3RhdGUuZm9yX3NhbGVcbiAgICAgICAgICAgICAgICAuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBfc2V0UHJpY2Uoc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmZvcl9zYWxlLmhhc0Ftb3VudCgpICYmIHN0YXRlLnRvX3JlY2VpdmUuaGFzQW1vdW50KCkpIHtcbiAgICAgICAgICAgIHN0YXRlLnByaWNlID0gbmV3IFByaWNlKHtcbiAgICAgICAgICAgICAgICBiYXNlOiBzdGF0ZS5mb3Jfc2FsZSxcbiAgICAgICAgICAgICAgICBxdW90ZTogc3RhdGUudG9fcmVjZWl2ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0ZS5wcmljZVRleHQgPSBzdGF0ZS5wcmljZS50b1JlYWwoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9zZXRQcmljZVRleHQoc3RhdGUsIGlzQmlkKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCYXNlID0gc3RhdGVbaXNCaWQgPyBcImZvcl9zYWxlXCIgOiBcInRvX3JlY2VpdmVcIl07XG4gICAgICAgIGNvbnN0IGN1cnJlbnRRdW90ZSA9IHN0YXRlW2lzQmlkID8gXCJ0b19yZWNlaXZlXCIgOiBcImZvcl9zYWxlXCJdO1xuICAgICAgICBpZiAoY3VycmVudEJhc2UuaGFzQW1vdW50KCkgJiYgY3VycmVudFF1b3RlLmhhc0Ftb3VudCgpKSB7XG4gICAgICAgICAgICBzdGF0ZS5wcmljZVRleHQgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgICAgIGJhc2U6IGN1cnJlbnRCYXNlLFxuICAgICAgICAgICAgICAgIHF1b3RlOiBjdXJyZW50UXVvdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvUmVhbCgpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25JbnB1dFByaWNlKHR5cGUsIGUpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlW3R5cGVdO1xuICAgICAgICBjb25zdCBpc0JpZCA9IHR5cGUgPT09IFwiYmlkXCI7XG4gICAgICAgIGN1cnJlbnQucHJpY2UgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgYmFzZTogY3VycmVudFtpc0JpZCA/IFwiZm9yX3NhbGVcIiA6IFwidG9fcmVjZWl2ZVwiXSxcbiAgICAgICAgICAgIHF1b3RlOiBjdXJyZW50W2lzQmlkID8gXCJ0b19yZWNlaXZlXCIgOiBcImZvcl9zYWxlXCJdLFxuICAgICAgICAgICAgcmVhbDogcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgfHwgMFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNCaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEZvclNhbGUoY3VycmVudCwgaXNCaWQpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0UmVjZWl2ZShjdXJyZW50LCBpc0JpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGN1cnJlbnQsIGlzQmlkKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEZvclNhbGUoY3VycmVudCwgaXNCaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudC5wcmljZVRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIF9vbklucHV0U2VsbCh0eXBlLCBpc0JpZCwgZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZV07XG4gICAgICAgIC8vIGNvbnN0IGlzQmlkID0gdHlwZSA9PT0gXCJiaWRcIjtcbiAgICAgICAgY3VycmVudC5mb3Jfc2FsZS5zZXRBbW91bnQoe3JlYWw6IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpIHx8IDB9KTtcbiAgICAgICAgaWYgKGN1cnJlbnQucHJpY2UuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlKGN1cnJlbnQsIGlzQmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFByaWNlKGN1cnJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudC5mb3JTYWxlVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9zZXRQcmljZVRleHQoY3VycmVudCwgdHlwZSA9PT0gXCJiaWRcIik7XG5cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIF9vbklucHV0UmVjZWl2ZSh0eXBlLCBpc0JpZCwgZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGVbdHlwZV07XG4gICAgICAgIC8vIGNvbnN0IGlzQmlkID0gdHlwZSA9PT0gXCJiaWRcIjtcbiAgICAgICAgY3VycmVudC50b19yZWNlaXZlLnNldEFtb3VudCh7cmVhbDogcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgfHwgMH0pO1xuXG4gICAgICAgIGlmIChjdXJyZW50LnByaWNlLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0Rm9yU2FsZShjdXJyZW50LCBpc0JpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRQcmljZShjdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnQudG9SZWNlaXZlVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9zZXRQcmljZVRleHQoY3VycmVudCwgdHlwZSA9PT0gXCJiaWRcIik7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBpc01hcmtldEZyb3plbigpIHtcbiAgICAgICAgbGV0IHtiYXNlQXNzZXQsIHF1b3RlQXNzZXR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgYmFzZVdoaXRlTGlzdCA9IGJhc2VBc3NldFxuICAgICAgICAgICAgLmdldEluKFtcIm9wdGlvbnNcIiwgXCJ3aGl0ZWxpc3RfbWFya2V0c1wiXSlcbiAgICAgICAgICAgIC50b0pTKCk7XG4gICAgICAgIGxldCBxdW90ZVdoaXRlTGlzdCA9IHF1b3RlQXNzZXRcbiAgICAgICAgICAgIC5nZXRJbihbXCJvcHRpb25zXCIsIFwid2hpdGVsaXN0X21hcmtldHNcIl0pXG4gICAgICAgICAgICAudG9KUygpO1xuICAgICAgICBsZXQgYmFzZUJsYWNrTGlzdCA9IGJhc2VBc3NldFxuICAgICAgICAgICAgLmdldEluKFtcIm9wdGlvbnNcIiwgXCJibGFja2xpc3RfbWFya2V0c1wiXSlcbiAgICAgICAgICAgIC50b0pTKCk7XG4gICAgICAgIGxldCBxdW90ZUJsYWNrTGlzdCA9IHF1b3RlQXNzZXRcbiAgICAgICAgICAgIC5nZXRJbihbXCJvcHRpb25zXCIsIFwiYmxhY2tsaXN0X21hcmtldHNcIl0pXG4gICAgICAgICAgICAudG9KUygpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHF1b3RlV2hpdGVMaXN0Lmxlbmd0aCAmJlxuICAgICAgICAgICAgcXVvdGVXaGl0ZUxpc3QuaW5kZXhPZihiYXNlQXNzZXQuZ2V0KFwiaWRcIikpID09PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB7aXNGcm96ZW46IHRydWUsIGZyb3plbkFzc2V0OiBxdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKX07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYmFzZVdoaXRlTGlzdC5sZW5ndGggJiZcbiAgICAgICAgICAgIGJhc2VXaGl0ZUxpc3QuaW5kZXhPZihxdW90ZUFzc2V0LmdldChcImlkXCIpKSA9PT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4ge2lzRnJvemVuOiB0cnVlLCBmcm96ZW5Bc3NldDogYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKX07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBxdW90ZUJsYWNrTGlzdC5sZW5ndGggJiZcbiAgICAgICAgICAgIHF1b3RlQmxhY2tMaXN0LmluZGV4T2YoYmFzZUFzc2V0LmdldChcImlkXCIpKSAhPT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4ge2lzRnJvemVuOiB0cnVlLCBmcm96ZW5Bc3NldDogcXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIil9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGJhc2VCbGFja0xpc3QubGVuZ3RoICYmXG4gICAgICAgICAgICBiYXNlQmxhY2tMaXN0LmluZGV4T2YocXVvdGVBc3NldC5nZXQoXCJpZFwiKSkgIT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHtpc0Zyb3plbjogdHJ1ZSwgZnJvemVuQXNzZXQ6IGJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIil9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpc0Zyb3plbjogZmFsc2V9O1xuICAgIH1cblxuICAgIF90b2dnbGVDaGF0KCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgdmlld0NoYXQ6ICF0aGlzLnByb3BzLnZpZXdDaGF0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90b2dnbGVNaW5pQ2hhcnQoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBtaW5pRGVwdGhDaGFydDogIXRoaXMucHJvcHMubWluaURlcHRoQ2hhcnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uR3JvdXBPcmRlckxpbWl0Q2hhbmdlKGUpIHtcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGdyb3VwTGltaXQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIE1hcmtldHNBY3Rpb25zLmNoYW5nZUN1cnJlbnRHcm91cExpbWl0KGdyb3VwTGltaXQpO1xuICAgICAgICBpZiAoZ3JvdXBMaW1pdCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50R3JvdXBPcmRlckxpbWl0KSB7XG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5jaGFuZ2VDdXJyZW50R3JvdXBMaW1pdChncm91cExpbWl0KTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3ViID0gdGhpcy5wcm9wcy5zdWIuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoY3VycmVudFN1YlswXSwgY3VycmVudFN1YlsxXSkudGhlbihcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3ViVG9NYXJrZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5idWNrZXRTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBMaW1pdFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgIG1hcmtldExpbWl0T3JkZXJzLFxuICAgICAgICAgICAgbWFya2V0Q2FsbE9yZGVycyxcbiAgICAgICAgICAgIG1hcmtldERhdGEsXG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRIaXN0b3J5LFxuICAgICAgICAgICAgaW52ZXJ0ZWRDYWxscyxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgcXVvdGVBc3NldCxcbiAgICAgICAgICAgIGJhc2VBc3NldCxcbiAgICAgICAgICAgIGxvd2VzdENhbGxQcmljZSxcbiAgICAgICAgICAgIG1hcmtldFN0YXRzLFxuICAgICAgICAgICAgbWFya2V0UmVhZHksXG4gICAgICAgICAgICBtYXJrZXRTZXR0bGVPcmRlcnMsXG4gICAgICAgICAgICBidWNrZXRTaXplLFxuICAgICAgICAgICAgdG90YWxzLFxuICAgICAgICAgICAgZmVlZFByaWNlLFxuICAgICAgICAgICAgYnVja2V0cyxcbiAgICAgICAgICAgIGNvcmVBc3NldCxcbiAgICAgICAgICAgIHRyYWNrZWRHcm91cHNDb25maWcsXG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNvbWJpbmVkQmlkcyxcbiAgICAgICAgICAgIGNvbWJpbmVkQXNrcyxcbiAgICAgICAgICAgIGxvd2VzdEFzayxcbiAgICAgICAgICAgIGhpZ2hlc3RCaWQsXG4gICAgICAgICAgICBmbGF0QmlkcyxcbiAgICAgICAgICAgIGZsYXRBc2tzLFxuICAgICAgICAgICAgZmxhdENhbGxzLFxuICAgICAgICAgICAgZmxhdFNldHRsZXMsXG4gICAgICAgICAgICBncm91cGVkQmlkcyxcbiAgICAgICAgICAgIGdyb3VwZWRBc2tzXG4gICAgICAgIH0gPSBtYXJrZXREYXRhO1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBiaWQsXG4gICAgICAgICAgICBhc2ssXG4gICAgICAgICAgICBsZWZ0T3JkZXJCb29rLFxuICAgICAgICAgICAgc2hvd0RlcHRoQ2hhcnQsXG4gICAgICAgICAgICBjaGFydEhlaWdodCxcbiAgICAgICAgICAgIGJ1eURpZmYsXG4gICAgICAgICAgICBzZWxsRGlmZixcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgYnV5U2VsbFRvcCxcbiAgICAgICAgICAgIGhpZGVQYW5lbFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2lzRnJvemVuLCBmcm96ZW5Bc3NldH0gPSB0aGlzLmlzTWFya2V0RnJvemVuKCk7XG5cbiAgICAgICAgbGV0IGJhc2UgPSBudWxsLFxuICAgICAgICAgICAgcXVvdGUgPSBudWxsLFxuICAgICAgICAgICAgYWNjb3VudEJhbGFuY2UgPSBudWxsLFxuICAgICAgICAgICAgcXVvdGVCYWxhbmNlID0gbnVsbCxcbiAgICAgICAgICAgIGJhc2VCYWxhbmNlID0gbnVsbCxcbiAgICAgICAgICAgIGNvcmVCYWxhbmNlID0gbnVsbCxcbiAgICAgICAgICAgIHF1b3RlU3ltYm9sLFxuICAgICAgICAgICAgYmFzZVN5bWJvbCxcbiAgICAgICAgICAgIHNob3dDYWxsTGltaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGxhdGVzdCxcbiAgICAgICAgICAgIGNoYW5nZUNsYXNzO1xuXG4gICAgICAgIGNvbnN0IHNob3dWb2x1bWVDaGFydCA9IHRoaXMucHJvcHMudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgIFwic2hvd1ZvbHVtZUNoYXJ0XCIsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHF1b3RlQXNzZXQuc2l6ZSAmJiBiYXNlQXNzZXQuc2l6ZSAmJiBjdXJyZW50QWNjb3VudC5zaXplKSB7XG4gICAgICAgICAgICBiYXNlID0gYmFzZUFzc2V0O1xuICAgICAgICAgICAgcXVvdGUgPSBxdW90ZUFzc2V0O1xuICAgICAgICAgICAgYmFzZVN5bWJvbCA9IGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgcXVvdGVTeW1ib2wgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgICAgIGFjY291bnRCYWxhbmNlID0gY3VycmVudEFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuXG4gICAgICAgICAgICBpZiAoYWNjb3VudEJhbGFuY2UpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiBhY2NvdW50QmFsYW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT09IHF1b3RlLmdldChcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUJhbGFuY2UgPSBhY2NvdW50QmFsYW5jZVtpZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09PSBiYXNlLmdldChcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQmFsYW5jZSA9IGFjY291bnRCYWxhbmNlW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT09IFwiMS4zLjBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29yZUJhbGFuY2UgPSBhY2NvdW50QmFsYW5jZVtpZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNob3dDYWxsTGltaXQgPSB0aGlzLl9nZXRTZXR0bGVtZW50SW5mbygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1b3RlSXNCaXRBc3NldCA9IHF1b3RlQXNzZXQuZ2V0KFwiYml0YXNzZXRfZGF0YV9pZFwiKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgbGV0IGJhc2VJc0JpdEFzc2V0ID0gYmFzZUFzc2V0LmdldChcImJpdGFzc2V0X2RhdGFfaWRcIikgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IHNwcmVhZCA9XG4gICAgICAgICAgICBsb3dlc3RBc2sgJiYgaGlnaGVzdEJpZFxuICAgICAgICAgICAgICAgID8gbG93ZXN0QXNrLmdldFByaWNlKCkgLSBoaWdoZXN0QmlkLmdldFByaWNlKClcbiAgICAgICAgICAgICAgICA6IDA7XG5cbiAgICAgICAgLy8gTGF0ZXN0IHByaWNlXG4gICAgICAgIGlmIChhY3RpdmVNYXJrZXRIaXN0b3J5LnNpemUpIHtcbiAgICAgICAgICAgIGxldCBsYXRlc3RfdHdvID0gYWN0aXZlTWFya2V0SGlzdG9yeS50YWtlKDIpO1xuICAgICAgICAgICAgbGF0ZXN0ID0gbGF0ZXN0X3R3by5maXJzdCgpO1xuICAgICAgICAgICAgbGV0IHNlY29uZF9sYXRlc3QgPSBsYXRlc3RfdHdvLmxhc3QoKTtcblxuICAgICAgICAgICAgY2hhbmdlQ2xhc3MgPVxuICAgICAgICAgICAgICAgIGxhdGVzdC5nZXRQcmljZSgpID09PSBzZWNvbmRfbGF0ZXN0LmdldFByaWNlKClcbiAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgIDogbGF0ZXN0LmdldFByaWNlKCkgLSBzZWNvbmRfbGF0ZXN0LmdldFByaWNlKCkgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiY2hhbmdlLXVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJjaGFuZ2UtZG93blwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmVlc1xuICAgICAgICBpZiAoIWNvcmVBc3NldCB8fCAhT2JqZWN0LmtleXModGhpcy5zdGF0ZS5mZWVTdGF0dXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc2VsbEZlZUFzc2V0LFxuICAgICAgICAgICAgc2VsbEZlZUFzc2V0cyxcbiAgICAgICAgICAgIHNlbGxGZWUsXG4gICAgICAgICAgICBidXlGZWVBc3NldCxcbiAgICAgICAgICAgIGJ1eUZlZUFzc2V0cyxcbiAgICAgICAgICAgIGJ1eUZlZVxuICAgICAgICB9ID0gdGhpcy5fZ2V0RmVlQXNzZXRzKHF1b3RlLCBiYXNlLCBjb3JlQXNzZXQpO1xuXG4gICAgICAgIC8vIERlY2ltYWxzXG4gICAgICAgIGxldCBoYXNQcmVkaWN0aW9uID1cbiAgICAgICAgICAgIGJhc2UuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSkgfHxcbiAgICAgICAgICAgIHF1b3RlLmdldEluKFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0pO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKGhhc1ByZWRpY3Rpb24pIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gcXVvdGVBc3NldC5nZXRJbihbXCJvcHRpb25zXCIsIFwiZGVzY3JpcHRpb25cIl0pO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pLm1haW47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc21hbGxTY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHdpZHRoIDwgMTAwMCkge1xuICAgICAgICAgICAgc21hbGxTY3JlZW4gPSB0cnVlO1xuICAgICAgICAgICAgbGVmdE9yZGVyQm9vayA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9yZGVyTXVsdGlwbGllciA9IGxlZnRPcmRlckJvb2sgPyAyIDogMTtcbiAgICAgICAgY29uc3QgbWluQ2hhcnRIZWlnaHQgPSAzMDA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPiAxMTAwID8gY2hhcnRIZWlnaHQgOiBjaGFydEhlaWdodCAtIDEyNSxcbiAgICAgICAgICAgIG1pbkNoYXJ0SGVpZ2h0XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGV4cGlyYXRpb25UeXBlID0gdGhpcy5zdGF0ZS5leHBpcmF0aW9uVHlwZTtcbiAgICAgICAgbGV0IGV4cGlyYXRpb25DdXN0b21UaW1lID0gdGhpcy5zdGF0ZS5leHBpcmF0aW9uQ3VzdG9tVGltZTtcblxuICAgICAgICBsZXQgaXNQYW5lbEFjdGl2ZSA9ICFoaWRlUGFuZWwgJiYgIXNtYWxsU2NyZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBsZXQgdmVydGljYWxQYW5lbFRvZ2dsZSA9ICFzbWFsbFNjcmVlbiA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiYXV0b1wiLCBwYWRkaW5nVG9wOiBcImNhbGMoNTB2aCAtIDEyMHB4KVwifX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVQYW5lbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9e2hpZGVQYW5lbCA/IFwiY2FyZXQtbGVmdFwiIDogXCJjYXJldC1yaWdodFwifSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIGxldCBidXlGb3JtID0gaXNGcm96ZW4gPyBudWxsIDogKFxuICAgICAgICAgICAgPEJ1eVNlbGxcbiAgICAgICAgICAgICAgICBvbkJvcnJvdz17YmFzZUlzQml0QXNzZXQgPyB0aGlzLl9ib3Jyb3dCYXNlLmJpbmQodGhpcykgOiBudWxsfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXtjdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICBiYWNrZWRDb2luPXt0aGlzLnByb3BzLmJhY2tlZENvaW5zLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGEgPT4gYS5zeW1ib2wgPT09IGJhc2UuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjdXJyZW50QnJpZGdlcz17XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYnJpZGdlQ29pbnMuZ2V0KGJhc2UuZ2V0KFwic3ltYm9sXCIpKSB8fCBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNtYWxsU2NyZWVuPXtzbWFsbFNjcmVlbn1cbiAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuYnV5U2VsbE9wZW59XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVPcGVuPXt0aGlzLl90b2dnbGVPcGVuQnV5U2VsbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICBcInNtYWxsLTEyIG5vLXBhZGRpbmcgbWlkZGxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgbGVmdE9yZGVyQm9vayB8fCBzbWFsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1lZGl1bS02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJtZWRpdW0tNiB4bGFyZ2UtNFwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZsaXBCdXlTZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBvcmRlci0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5U2VsbFRvcCA/IDIgOiA1ICogb3JkZXJNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gc2VsbC1mb3JtYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgb3JkZXItJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eVNlbGxUb3AgPyAxIDogNCAqIG9yZGVyTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGJ1eS1mb3JtYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJpZFwiXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvblR5cGU9e2V4cGlyYXRpb25UeXBlW1wiYmlkXCJdfVxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25zPXt0aGlzLkVYUElSQVRJT05TfVxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb25DdXN0b21UaW1lPXtleHBpcmF0aW9uQ3VzdG9tVGltZVtcImJpZFwiXX1cbiAgICAgICAgICAgICAgICBvbkV4cGlyYXRpb25UeXBlQ2hhbmdlPXt0aGlzLl9oYW5kbGVFeHBpcmF0aW9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIFwiYmlkXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uRXhwaXJhdGlvbkN1c3RvbUNoYW5nZT17dGhpcy5faGFuZGxlQ3VzdG9tRXhwaXJhdGlvbkNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBcImJpZFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBhbW91bnQ9e2JpZC50b1JlY2VpdmVUZXh0fVxuICAgICAgICAgICAgICAgIHByaWNlPXtiaWQucHJpY2VUZXh0fVxuICAgICAgICAgICAgICAgIHRvdGFsPXtiaWQuZm9yU2FsZVRleHR9XG4gICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgYW1vdW50Q2hhbmdlPXt0aGlzLl9vbklucHV0UmVjZWl2ZS5iaW5kKHRoaXMsIFwiYmlkXCIsIHRydWUpfVxuICAgICAgICAgICAgICAgIHByaWNlQ2hhbmdlPXt0aGlzLl9vbklucHV0UHJpY2UuYmluZCh0aGlzLCBcImJpZFwiKX1cbiAgICAgICAgICAgICAgICBzZXRQcmljZT17dGhpcy5fY3VycmVudFByaWNlQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICB0b3RhbENoYW5nZT17dGhpcy5fb25JbnB1dFNlbGwuYmluZCh0aGlzLCBcImJpZFwiLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgYmFsYW5jZT17YmFzZUJhbGFuY2V9XG4gICAgICAgICAgICAgICAgYmFsYW5jZUlkPXtiYXNlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLl9jcmVhdGVMaW1pdE9yZGVyQ29uZmlybS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgYmFzZUJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIGNvcmVCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBidXlGZWVBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgXCJidXlcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgYmFsYW5jZVByZWNpc2lvbj17YmFzZS5nZXQoXCJwcmVjaXNpb25cIil9XG4gICAgICAgICAgICAgICAgcXVvdGVQcmVjaXNpb249e3F1b3RlLmdldChcInByZWNpc2lvblwiKX1cbiAgICAgICAgICAgICAgICB0b3RhbFByZWNpc2lvbj17YmFzZS5nZXQoXCJwcmVjaXNpb25cIil9XG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlPXtsb3dlc3RBc2suZ2V0UHJpY2UoKX1cbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2VPYmplY3Q9e2xvd2VzdEFza31cbiAgICAgICAgICAgICAgICBhY2NvdW50PXtjdXJyZW50QWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgIGZlZT17YnV5RmVlfVxuICAgICAgICAgICAgICAgIGhhc0ZlZUJhbGFuY2U9e3RoaXMuc3RhdGUuZmVlU3RhdHVzW2J1eUZlZS5hc3NldF9pZF0uaGFzQmFsYW5jZX1cbiAgICAgICAgICAgICAgICBmZWVBc3NldHM9e2J1eUZlZUFzc2V0c31cbiAgICAgICAgICAgICAgICBmZWVBc3NldD17YnV5RmVlQXNzZXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VGZWVBc3NldD17dGhpcy5vbkNoYW5nZUZlZUFzc2V0LmJpbmQodGhpcywgXCJidXlcIil9XG4gICAgICAgICAgICAgICAgaXNQcmVkaWN0aW9uTWFya2V0PXtiYXNlLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICBcImlzX3ByZWRpY3Rpb25fbWFya2V0XCJcbiAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICBvbkZsaXA9e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLl9mbGlwQnV5U2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2ZsaXBCdXlTZWxsLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVQb3NpdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLl90b2dnbGVCdXlTZWxsUG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fdG9nZ2xlQnV5U2VsbFBvc2l0aW9uLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHNlbGxGb3JtID0gaXNGcm96ZW4gPyBudWxsIDogKFxuICAgICAgICAgICAgPEJ1eVNlbGxcbiAgICAgICAgICAgICAgICBvbkJvcnJvdz17cXVvdGVJc0JpdEFzc2V0ID8gdGhpcy5fYm9ycm93UXVvdGUuYmluZCh0aGlzKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e2N1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgIGJhY2tlZENvaW49e3RoaXMucHJvcHMuYmFja2VkQ29pbnMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgYSA9PiBhLnN5bWJvbCA9PT0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjdXJyZW50QnJpZGdlcz17XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYnJpZGdlQ29pbnMuZ2V0KHF1b3RlLmdldChcInN5bWJvbFwiKSkgfHwgbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzbWFsbFNjcmVlbj17c21hbGxTY3JlZW59XG4gICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmJ1eVNlbGxPcGVufVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlT3Blbj17dGhpcy5fdG9nZ2xlT3BlbkJ1eVNlbGwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgXCJzbWFsbC0xMiBuby1wYWRkaW5nIG1pZGRsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGxlZnRPcmRlckJvb2sgfHwgc21hbGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtZWRpdW0tNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwibWVkaXVtLTYgeGxhcmdlLTRcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mbGlwQnV5U2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgb3JkZXItJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eVNlbGxUb3AgPyAxIDogNCAqIG9yZGVyTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGJ1eS1mb3JtYFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgb3JkZXItJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eVNlbGxUb3AgPyAyIDogNSAqIG9yZGVyTXVsdGlwbGllclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IHNlbGwtZm9ybWBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJhc2tcIlxuICAgICAgICAgICAgICAgIGFtb3VudD17YXNrLmZvclNhbGVUZXh0fVxuICAgICAgICAgICAgICAgIHByaWNlPXthc2sucHJpY2VUZXh0fVxuICAgICAgICAgICAgICAgIHRvdGFsPXthc2sudG9SZWNlaXZlVGV4dH1cbiAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uVHlwZT17ZXhwaXJhdGlvblR5cGVbXCJhc2tcIl19XG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbnM9e3RoaXMuRVhQSVJBVElPTlN9XG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbkN1c3RvbVRpbWU9e2V4cGlyYXRpb25DdXN0b21UaW1lW1wiYXNrXCJdfVxuICAgICAgICAgICAgICAgIG9uRXhwaXJhdGlvblR5cGVDaGFuZ2U9e3RoaXMuX2hhbmRsZUV4cGlyYXRpb25DaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgXCJhc2tcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25FeHBpcmF0aW9uQ3VzdG9tQ2hhbmdlPXt0aGlzLl9oYW5kbGVDdXN0b21FeHBpcmF0aW9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIFwiYXNrXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGFtb3VudENoYW5nZT17dGhpcy5fb25JbnB1dFNlbGwuYmluZCh0aGlzLCBcImFza1wiLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgcHJpY2VDaGFuZ2U9e3RoaXMuX29uSW5wdXRQcmljZS5iaW5kKHRoaXMsIFwiYXNrXCIpfVxuICAgICAgICAgICAgICAgIHNldFByaWNlPXt0aGlzLl9jdXJyZW50UHJpY2VDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHRvdGFsQ2hhbmdlPXt0aGlzLl9vbklucHV0UmVjZWl2ZS5iaW5kKHRoaXMsIFwiYXNrXCIsIHRydWUpfVxuICAgICAgICAgICAgICAgIGJhbGFuY2U9e3F1b3RlQmFsYW5jZX1cbiAgICAgICAgICAgICAgICBiYWxhbmNlSWQ9e3F1b3RlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLl9jcmVhdGVMaW1pdE9yZGVyQ29uZmlybS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBjb3JlQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgc2VsbEZlZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBcInNlbGxcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgYmFsYW5jZVByZWNpc2lvbj17cXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpfVxuICAgICAgICAgICAgICAgIHF1b3RlUHJlY2lzaW9uPXtxdW90ZS5nZXQoXCJwcmVjaXNpb25cIil9XG4gICAgICAgICAgICAgICAgdG90YWxQcmVjaXNpb249e2Jhc2UuZ2V0KFwicHJlY2lzaW9uXCIpfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZT17aGlnaGVzdEJpZC5nZXRQcmljZSgpfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZU9iamVjdD17aGlnaGVzdEJpZH1cbiAgICAgICAgICAgICAgICBhY2NvdW50PXtjdXJyZW50QWNjb3VudC5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgIGZlZT17c2VsbEZlZX1cbiAgICAgICAgICAgICAgICBoYXNGZWVCYWxhbmNlPXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZWVTdGF0dXNbc2VsbEZlZS5hc3NldF9pZF0uaGFzQmFsYW5jZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmZWVBc3NldHM9e3NlbGxGZWVBc3NldHN9XG4gICAgICAgICAgICAgICAgZmVlQXNzZXQ9e3NlbGxGZWVBc3NldH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUZlZUFzc2V0PXt0aGlzLm9uQ2hhbmdlRmVlQXNzZXQuYmluZCh0aGlzLCBcInNlbGxcIil9XG4gICAgICAgICAgICAgICAgaXNQcmVkaWN0aW9uTWFya2V0PXtxdW90ZS5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXG4gICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgb25GbGlwPXtcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuX2ZsaXBCdXlTZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2ZsaXBCdXlTZWxsLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZVBvc2l0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuX3RvZ2dsZUJ1eVNlbGxQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl90b2dnbGVCdXlTZWxsUG9zaXRpb24uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgb3JkZXJCb29rID0gKFxuICAgICAgICAgICAgPE9yZGVyQm9va1xuICAgICAgICAgICAgICAgIGxhdGVzdD17bGF0ZXN0ICYmIGxhdGVzdC5nZXRQcmljZSgpfVxuICAgICAgICAgICAgICAgIGNoYW5nZUNsYXNzPXtjaGFuZ2VDbGFzc31cbiAgICAgICAgICAgICAgICBvcmRlcnM9e21hcmtldExpbWl0T3JkZXJzfVxuICAgICAgICAgICAgICAgIGNhbGxzPXttYXJrZXRDYWxsT3JkZXJzfVxuICAgICAgICAgICAgICAgIGludmVydGVkQ2FsbHM9e2ludmVydGVkQ2FsbHN9XG4gICAgICAgICAgICAgICAgY29tYmluZWRCaWRzPXtjb21iaW5lZEJpZHN9XG4gICAgICAgICAgICAgICAgY29tYmluZWRBc2tzPXtjb21iaW5lZEFza3N9XG4gICAgICAgICAgICAgICAgaGlnaGVzdEJpZD17aGlnaGVzdEJpZH1cbiAgICAgICAgICAgICAgICBsb3dlc3RBc2s9e2xvd2VzdEFza31cbiAgICAgICAgICAgICAgICB0b3RhbEJpZHM9e3RvdGFscy5iaWR9XG4gICAgICAgICAgICAgICAgdG90YWxBc2tzPXt0b3RhbHMuYXNrfVxuICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgIGJhc2VTeW1ib2w9e2Jhc2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgcXVvdGVTeW1ib2w9e3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29yZGVyYm9va0NsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbD17IWxlZnRPcmRlckJvb2t9XG4gICAgICAgICAgICAgICAgbW92ZU9yZGVyQm9vaz17dGhpcy5fbW92ZU9yZGVyQm9vay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGZsaXBPcmRlckJvb2s9e3RoaXMucHJvcHMudmlld1NldHRpbmdzLmdldChcImZsaXBPcmRlckJvb2tcIil9XG4gICAgICAgICAgICAgICAgbWFya2V0UmVhZHk9e21hcmtldFJlYWR5fVxuICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzcz17YG9yZGVyLSR7YnV5U2VsbFRvcCA/IDMgOiAxfSB4bGFyZ2Utb3JkZXItJHtcbiAgICAgICAgICAgICAgICAgICAgYnV5U2VsbFRvcCA/IDQgOiAxXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBPcmRlckxpbWl0Q2hhbmdlPXt0aGlzLl9vbkdyb3VwT3JkZXJMaW1pdENoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB0cmFja2VkR3JvdXBzQ29uZmlnPXt0cmFja2VkR3JvdXBzQ29uZmlnfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ9e2N1cnJlbnRHcm91cE9yZGVyTGltaXR9XG4gICAgICAgICAgICAgICAgZ3JvdXBlZEJpZHM9e2dyb3VwZWRCaWRzfVxuICAgICAgICAgICAgICAgIGdyb3VwZWRBc2tzPXtncm91cGVkQXNrc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5tYXJrZXRSZWFkeSA/IDxMb2FkaW5nSW5kaWNhdG9yIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICA8RXhjaGFuZ2VIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldD17cXVvdGVBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0PXtiYXNlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgIGhhc1ByZWRpY3Rpb249e2hhc1ByZWRpY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzPXtzdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0QXNrPXtsb3dlc3RBc2t9XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RCaWQ9e2hpZ2hlc3RCaWR9XG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdENhbGxQcmljZT17bG93ZXN0Q2FsbFByaWNlfVxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0PXtzaG93Q2FsbExpbWl0fVxuICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2U9e2ZlZWRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgbWFya2V0UmVhZHk9e21hcmtldFJlYWR5fVxuICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmljZT17bGF0ZXN0ICYmIGxhdGVzdC5nZXRQcmljZSgpfVxuICAgICAgICAgICAgICAgICAgICBzaG93RGVwdGhDaGFydD17c2hvd0RlcHRoQ2hhcnR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzPXttYXJrZXRTdGF0c31cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVDaGFydHM9e3RoaXMuX3RvZ2dsZUNoYXJ0cy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZU1hcmtldFBpY2tlcj17dGhpcy5fdG9nZ2xlTWFya2V0UGlja2VyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHNob3dWb2x1bWVDaGFydD17c2hvd1ZvbHVtZUNoYXJ0fVxuICAgICAgICAgICAgICAgICAgICBjaGFydEhlaWdodD17Y2hhcnRIZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ2hhcnRIZWlnaHQ9e3RoaXMub25DaGFuZ2VDaGFydEhlaWdodC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXQgbWFya2V0LWxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICB7ISF0aGlzLnN0YXRlLnNob3dNYXJrZXRQaWNrZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0UGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0UGlja2VyQXNzZXQ9e3RoaXMuc3RhdGUubWFya2V0UGlja2VyQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVNYXJrZXRQaWNrZXI9e3RoaXMuX3RvZ2dsZU1hcmtldFBpY2tlci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8QWNjb3VudE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIE1haW4gdmVydGljYWwgYmxvY2sgd2l0aCBjb250ZW50ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBMZWZ0IENvbHVtbiAtIE9wZW4gT3JkZXJzICovfVxuICAgICAgICAgICAgICAgICAgICB7bGVmdE9yZGVyQm9vayA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBsZWZ0LWNvbHVtbiBzaHJpbmsgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXJCb29rfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDZW50ZXIgQ29sdW1uICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJncmlkLWJsb2NrIG1haW4tY29udGVudCB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1wYWRkaW5nIHBzLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDZW50ZXJDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2hvd0RlcHRoQ2hhcnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWFya2V0LWNoYXJ0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcmljZSBoaXN0b3J5IGNoYXJ0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYWRpbmdWaWV3UHJpY2VDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZlZWQ9e3RoaXMucHJvcHMuZGF0YUZlZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbD17cXVvdGVTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdE9yZGVyQm9vaz17bGVmdE9yZGVyQm9va31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRSZWFkeT17bWFya2V0UmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoZW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXRzPXtidWNrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldFNpemU9e2J1Y2tldFNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBlcmlvZD17dGhpcy5zdGF0ZS5jdXJyZW50UGVyaW9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0SGVpZ2h0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWlnaHQgPiAxMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXJ0SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXJ0SGVpZ2h0IC0gMTUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZT17d2lkdGggPCA4MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tcGFkZGluZyBzaHJpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXB0aEhpZ2hDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnM9e21hcmtldExpbWl0T3JkZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYWxsTGltaXQ9e3Nob3dDYWxsTGltaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbF9vcmRlcnM9e21hcmtldENhbGxPcmRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9hc2tzPXtmbGF0QXNrc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0X2JpZHM9e2ZsYXRCaWRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRfY2FsbHM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0ID8gZmxhdENhbGxzIDogW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9zZXR0bGVzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dTZXR0bGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJiBmbGF0U2V0dGxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0bGVzPXttYXJrZXRTZXR0bGVPcmRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRDYWxscz17aW52ZXJ0ZWRDYWxsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJpZHM9e3RvdGFscy5iaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxBc2tzPXt0b3RhbHMuYXNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGVpZ2h0ID4gMTEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGFydEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGFydEhlaWdodCAtIDE1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9kZXB0aENoYXJ0Q2xpY2suYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoYXNQcmVkaWN0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UudG9SZWFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByZWFkPXtzcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTENQPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbGxMaW1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBsb3dlc3RDYWxsUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0T3JkZXJCb29rPXtsZWZ0T3JkZXJCb29rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1ByZWRpY3Rpb249e2hhc1ByZWRpY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9GcmFtZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPcmRlcmJvb2s9e2xlZnRPcmRlckJvb2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoZW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJSZWY9e3RoaXMucmVmcy5jZW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLW92ZXJmbG93IHdyYXAgc2hyaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNQcmVkaWN0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsLTEyIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCAxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS4ycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRnJvemVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yIHNtYWxsLTEyIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCAxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS4ycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9mcm96ZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17ZnJvemVuQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidXlGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsbEZvcm19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldEhpc3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzbWFsbFNjcmVlbiAmJiAhbGVmdE9yZGVyQm9va1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibWVkaXVtLTYgeGxhcmdlLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1wYWRkaW5nIG5vLW92ZXJmbG93IG1pZGRsZS1jb250ZW50IHNtYWxsLTEyIG1lZGl1bS02IG9yZGVyLTUgeGxhcmdlLW9yZGVyLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlclN0eWxlPXt7cGFkZGluZ1RvcDogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXthY3RpdmVNYXJrZXRIaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e2N1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlIaXN0b3J5PXtjdXJyZW50QWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2w9e2Jhc2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbD17cXVvdGVTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRSZWFkeT17bWFya2V0UmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFsZWZ0T3JkZXJCb29rID8gb3JkZXJCb29rIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29uZmlybU9yZGVyTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYnV5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9yY2U9e3RoaXMuX2ZvcmNlQnV5LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUZlZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmVCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZj17YnV5RGlmZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc09yZGVycz17Y29tYmluZWRBc2tzLmxlbmd0aCA+IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbmZpcm1PcmRlck1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJzZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9yY2U9e3RoaXMuX2ZvcmNlU2VsbC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsbEZlZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JlQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmY9e3NlbGxEaWZmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzT3JkZXJzPXtjb21iaW5lZEJpZHMubGVuZ3RoID4gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0TGltaXRPcmRlcnMuc2l6ZSA+IDAgJiYgYmFzZSAmJiBxdW90ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeU9wZW5PcmRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFNjcmVlbj17dGhpcy5wcm9wcy5zbWFsbFNjcmVlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNtYWxsU2NyZWVuICYmICFsZWZ0T3JkZXJCb29rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibWVkaXVtLTYgeGxhcmdlLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc21hbGwtMTIgbWVkaXVtLTYgbm8tcGFkZGluZyBhbGlnbi1zcGFjZWQgcHMtY29udGFpbmVyIG1pZGRsZS1jb250ZW50IG9yZGVyLSR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXlTZWxsVG9wID8gNiA6IDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIm9wZW5fb3JkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnM9e21hcmtldExpbWl0T3JkZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRsZU9yZGVycz17bWFya2V0U2V0dGxlT3JkZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXtjdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sPXtiYXNlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sPXtxdW90ZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWI9e3RoaXMucHJvcHMudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlcnNUYWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuX2NhbmNlbExpbWl0T3JkZXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxpcE15T3JkZXJzPXt0aGlzLnByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxpcE15T3JkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZT17dGhpcy5wcm9wcy5mZWVkUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGVuZCBDZW50ZXJDb250ZW50ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIEVuZCBvZiBNYWluIENvbnRlbnQgQ29sdW1uICovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBSaWdodCBDb2x1bW4gLSBNYXJrZXQgSGlzdG9yeSAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgcmlnaHQtY29sdW1uIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDQ1MH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2ZXJ0aWNhbFBhbmVsVG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1BhbmVsQWN0aXZlID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWluV2lkdGg6IDM1OH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIHJpZ2h0LWNvbHVtbiBuby1vdmVyZmxvdyB2ZXJ0aWNhbCBuby1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNYXJrZXQgSGlzdG9yeSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLXBhZGRpbmcgbm8tbWFyZ2luIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1vcmRlci1ib29rIG5vLXBhZGRpbmcgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlclN0eWxlPXt7cGFkZGluZ1RvcDogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJzdGFyXCIsIGluZGV4OiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwibWFya2V0XCIsIGluZGV4OiAyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwidm9sXCIsIGluZGV4OiAzfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwicHJpY2VcIiwgaW5kZXg6IDR9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJjaGFuZ2VcIiwgaW5kZXg6IDV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kQ29sdW1ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJtYXJrZXRcIiwgaW5kZXg6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJpc3N1ZXJcIiwgaW5kZXg6IDJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJ2b2xcIiwgaW5kZXg6IDN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJhZGRcIiwgaW5kZXg6IDR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtgJHtxdW90ZVN5bWJvbH1fJHtiYXNlU3ltYm9sfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAhdGhpcy5wcm9wcy52aWV3Q2hhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjAgMCAwIDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tbWFyZ2luIHZlcnRpY2FsIHNocmlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVDaGF0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtY29udGVudC1oZWFkZXIgY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy52aWV3Q2hhdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JiM5NjYwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mIzk2NTA7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UudHJvbGxib3hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZpZXdDaGF0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0QnJvIGhlaWdodD17XCIzMDBweFwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNaW5pIERlcHRoIENoYXJ0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICF0aGlzLnByb3BzLm1pbmlEZXB0aENoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiMCAwIDQwcHggMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1tYXJnaW4gdmVydGljYWwgc2hyaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZU1pbmlDaGFydC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1jb250ZW50LWhlYWRlciBjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1pbmlEZXB0aENoYXJ0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mIzk2NjA7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiYjOTY1MDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWluaURlcHRoQ2hhcnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlcHRoSGlnaENoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzPXttYXJrZXRMaW1pdE9yZGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbGxMaW1pdD17c2hvd0NhbGxMaW1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbF9vcmRlcnM9e21hcmtldENhbGxPcmRlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRfYXNrcz17ZmxhdEFza3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRfYmlkcz17ZmxhdEJpZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRfY2FsbHM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbGxMaW1pdCA/IGZsYXRDYWxscyA6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdF9zZXR0bGVzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd1NldHRsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJiBmbGF0U2V0dGxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRsZXM9e21hcmtldFNldHRsZU9yZGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRDYWxscz17aW52ZXJ0ZWRDYWxsc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCaWRzPXt0b3RhbHMuYmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEFza3M9e3RvdGFscy5hc2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2RlcHRoQ2hhcnRDbGljay5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0bGVtZW50UHJpY2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhhc1ByZWRpY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlLnRvUmVhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByZWFkPXtzcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExDUD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FsbExpbWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBsb3dlc3RDYWxsUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0T3JkZXJCb29rPXtsZWZ0T3JkZXJCb29rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcmVkaWN0aW9uPXtoYXNQcmVkaWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RleHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXt0aGlzLnByb3BzLnNldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhlbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge3F1b3RlSXNCaXRBc3NldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3Jyb3dNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImJvcnJvd1F1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbElkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3dfbW9kYWxfcXVvdGVfXCIgKyBxdW90ZUFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtxdW90ZUFzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tpbmdfYXNzZXQ9e3F1b3RlQXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2N1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtiYXNlSXNCaXRBc3NldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3Jyb3dNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImJvcnJvd0Jhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9e1wiYm9ycm93X21vZGFsX2Jhc2VfXCIgKyBiYXNlQXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2Jhc2VBc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNraW5nX2Fzc2V0PXtiYXNlQXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2N1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHsvKiBFbmQgb2YgU2Vjb25kIFZlcnRpY2FsIEJsb2NrICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBQcyBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBQcmljZVRleHQgZnJvbSBcIi4uL1V0aWxpdHkvUHJpY2VUZXh0XCI7XG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQge1N0aWNreVRhYmxlfSBmcm9tIFwicmVhY3Qtc3RpY2t5LXRhYmxlXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5jb25zdCBjb3VudGVycGFydCA9IHJlcXVpcmUoXCJjb3VudGVycGFydFwiKTtcblxuY2xhc3MgT3JkZXJCb29rUm93VmVydGljYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xuICAgICAgICBpZiAobnAub3JkZXIubWFya2V0X2Jhc2UgIT09IHRoaXMucHJvcHMub3JkZXIubWFya2V0X2Jhc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5wLm9yZGVyLm5lKHRoaXMucHJvcHMub3JkZXIpIHx8XG4gICAgICAgICAgICBucC5pbmRleCAhPT0gdGhpcy5wcm9wcy5pbmRleCB8fFxuICAgICAgICAgICAgbnAuY3VycmVudEFjY291bnQgIT09IHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7b3JkZXIsIHF1b3RlLCBiYXNlLCBmaW5hbH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpc0JpZCA9IG9yZGVyLmlzQmlkKCk7XG4gICAgICAgIGNvbnN0IGlzQ2FsbCA9IG9yZGVyLmlzQ2FsbCgpO1xuICAgICAgICBsZXQgaW50ZWdlckNsYXNzID0gaXNDYWxsXG4gICAgICAgICAgICA/IFwib3JkZXJIaXN0b3J5Q2FsbFwiXG4gICAgICAgICAgICA6IGlzQmlkXG4gICAgICAgICAgICAgICAgPyBcIm9yZGVySGlzdG9yeUJpZFwiXG4gICAgICAgICAgICAgICAgOiBcIm9yZGVySGlzdG9yeUFza1wiO1xuXG4gICAgICAgIGxldCBwcmljZSA9IChcbiAgICAgICAgICAgIDxQcmljZVRleHQgcHJpY2U9e29yZGVyLmdldFByaWNlKCl9IHF1b3RlPXtxdW90ZX0gYmFzZT17YmFzZX0gLz5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgICBcInN0aWNreS10YWJsZS1yb3cgb3JkZXItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcImZpbmFsLXJvd1wiOiBmaW5hbH0sXG4gICAgICAgICAgICAgICAgICAgIHtcIm15LW9yZGVyXCI6IG9yZGVyLmlzTWluZSh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KX1cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudFRvUmVjZWl2ZVwiIDogXCJhbW91bnRGb3JTYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2VsbCAke2ludGVnZXJDbGFzc30gcmlnaHRgfT57cHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IGVsZW1IZWlnaHQgPSBlbGVtID0+IChlbGVtID8gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgOiAwKTtcblxuY2xhc3MgT3JkZXJCb29rUm93SG9yaXpvbnRhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBucC5vcmRlci5uZSh0aGlzLnByb3BzLm9yZGVyKSB8fFxuICAgICAgICAgICAgbnAucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb24gfHxcbiAgICAgICAgICAgIG5wLmluZGV4ICE9PSB0aGlzLnByb3BzLmluZGV4IHx8XG4gICAgICAgICAgICBucC5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtvcmRlciwgcXVvdGUsIGJhc2UsIHBvc2l0aW9ufSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGlzQmlkID0gb3JkZXIuaXNCaWQoKTtcbiAgICAgICAgY29uc3QgaXNDYWxsID0gb3JkZXIuaXNDYWxsKCk7XG5cbiAgICAgICAgbGV0IGludGVnZXJDbGFzcyA9IGlzQ2FsbFxuICAgICAgICAgICAgPyBcIm9yZGVySGlzdG9yeUNhbGxcIlxuICAgICAgICAgICAgOiBpc0JpZFxuICAgICAgICAgICAgICAgID8gXCJvcmRlckhpc3RvcnlCaWRcIlxuICAgICAgICAgICAgICAgIDogXCJvcmRlckhpc3RvcnlBc2tcIjtcblxuICAgICAgICBsZXQgcHJpY2UgPSAoXG4gICAgICAgICAgICA8UHJpY2VUZXh0IHByaWNlPXtvcmRlci5nZXRQcmljZSgpfSBxdW90ZT17cXVvdGV9IGJhc2U9e2Jhc2V9IC8+XG4gICAgICAgICk7XG4gICAgICAgIGxldCBhbW91bnQgPSBpc0JpZFxuICAgICAgICAgICAgPyB1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50VG9SZWNlaXZlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiB1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgb3JkZXIuYW1vdW50Rm9yU2FsZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgIGxldCB2YWx1ZSA9IGlzQmlkXG4gICAgICAgICAgICA/IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICBvcmRlci5hbW91bnRGb3JTYWxlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICBvcmRlci5hbW91bnRUb1JlY2VpdmUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgIGxldCB0b3RhbCA9IGlzQmlkXG4gICAgICAgICAgICA/IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICBvcmRlci50b3RhbEZvclNhbGUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgIG9yZGVyLnRvdGFsVG9SZWNlaXZlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIuaXNNaW5lKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpID8gXCJteS1vcmRlclwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cG9zaXRpb24gPT09IFwibGVmdFwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6IFwiMjUlXCJ9fSBjbGFzc05hbWU9e2ludGVnZXJDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8dGQ+e3Bvc2l0aW9uID09PSBcImxlZnRcIiA/IHZhbHVlIDogYW1vdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBhbW91bnQgOiB2YWx1ZX08L3RkPlxuICAgICAgICAgICAgICAgIHtwb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RvdGFsfTwvdGQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6IFwiMjUlXCJ9fSBjbGFzc05hbWU9e2ludGVnZXJDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBHcm91cGVkT3JkZXJCb29rUm93VmVydGljYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xuICAgICAgICBpZiAobnAub3JkZXIubWFya2V0X2Jhc2UgIT09IHRoaXMucHJvcHMub3JkZXIubWFya2V0X2Jhc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5wLm9yZGVyLm5lKHRoaXMucHJvcHMub3JkZXIpIHx8XG4gICAgICAgICAgICBucC5pbmRleCAhPT0gdGhpcy5wcm9wcy5pbmRleCB8fFxuICAgICAgICAgICAgbnAuY3VycmVudEFjY291bnQgIT09IHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7b3JkZXIsIHF1b3RlLCBiYXNlLCBmaW5hbH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpc0JpZCA9IG9yZGVyLmlzQmlkKCk7XG4gICAgICAgIGxldCBpbnRlZ2VyQ2xhc3MgPSBpc0JpZCA/IFwib3JkZXJIaXN0b3J5QmlkXCIgOiBcIm9yZGVySGlzdG9yeUFza1wiO1xuXG4gICAgICAgIGxldCBwcmljZSA9IChcbiAgICAgICAgICAgIDxQcmljZVRleHQgcHJpY2U9e29yZGVyLmdldFByaWNlKCl9IHF1b3RlPXtxdW90ZX0gYmFzZT17YmFzZX0gLz5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwic3RpY2t5LXRhYmxlLXJvdyBvcmRlci1yb3dcIiwge1xuICAgICAgICAgICAgICAgICAgICBcImZpbmFsLXJvd1wiOiBmaW5hbFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudFRvUmVjZWl2ZVwiIDogXCJhbW91bnRGb3JTYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0oKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2VsbCAke2ludGVnZXJDbGFzc30gcmlnaHRgfT57cHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIEdyb3VwZWRPcmRlckJvb2tSb3dIb3Jpem9udGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5wLm9yZGVyLm5lKHRoaXMucHJvcHMub3JkZXIpIHx8XG4gICAgICAgICAgICBucC5wb3NpdGlvbiAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbiB8fFxuICAgICAgICAgICAgbnAuaW5kZXggIT09IHRoaXMucHJvcHMuaW5kZXggfHxcbiAgICAgICAgICAgIG5wLmN1cnJlbnRBY2NvdW50ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge29yZGVyLCBxdW90ZSwgYmFzZSwgcG9zaXRpb259ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaXNCaWQgPSBvcmRlci5pc0JpZCgpO1xuXG4gICAgICAgIGxldCBpbnRlZ2VyQ2xhc3MgPSBpc0JpZCA/IFwib3JkZXJIaXN0b3J5QmlkXCIgOiBcIm9yZGVySGlzdG9yeUFza1wiO1xuXG4gICAgICAgIGxldCBwcmljZSA9IChcbiAgICAgICAgICAgIDxQcmljZVRleHQgcHJpY2U9e29yZGVyLmdldFByaWNlKCl9IHF1b3RlPXtxdW90ZX0gYmFzZT17YmFzZX0gLz5cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGFtb3VudCA9IGlzQmlkXG4gICAgICAgICAgICA/IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICBvcmRlci5hbW91bnRUb1JlY2VpdmUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICBvcmRlci5hbW91bnRGb3JTYWxlKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgbGV0IHZhbHVlID0gaXNCaWRcbiAgICAgICAgICAgID8gdXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgIG9yZGVyLmFtb3VudEZvclNhbGUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgIG9yZGVyLmFtb3VudFRvUmVjZWl2ZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgbGV0IHRvdGFsID0gaXNCaWRcbiAgICAgICAgICAgID8gdXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgIG9yZGVyLnRvdGFsRm9yU2FsZSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiB1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgb3JkZXIudG90YWxUb1JlY2VpdmUoKS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogXCIyNSVcIn19IGNsYXNzTmFtZT17aW50ZWdlckNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDx0ZD57cG9zaXRpb24gPT09IFwibGVmdFwiID8gdmFsdWUgOiBhbW91bnR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Bvc2l0aW9uID09PSBcImxlZnRcIiA/IGFtb3VudCA6IHZhbHVlfTwvdGQ+XG4gICAgICAgICAgICAgICAge3Bvc2l0aW9uID09PSBcInJpZ2h0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dG90YWx9PC90ZD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogXCIyNSVcIn19IGNsYXNzTmFtZT17aW50ZWdlckNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIEdyb3VwT3JkZXJMaW1pdFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGdyb3VwTGltaXQ6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7Z3JvdXBMaW1pdDogcHJvcHMuY3VycmVudEdyb3VwT3JkZXJMaW1pdH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBub0dyb3Vwc0F2YWlsYWJsZSA9IHRoaXMucHJvcHMudHJhY2tlZEdyb3Vwc0NvbmZpZy5sZW5ndGggPT09IDA7XG4gICAgICAgIGNvbnN0IHRyYWNrZWRHcm91cHNPcHRpb25zTGlzdCA9IHRoaXMucHJvcHMudHJhY2tlZEdyb3Vwc0NvbmZpZy5tYXAoXG4gICAgICAgICAgICBrZXkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2tleX0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICB7YCR7a2V5IC8gMTAwfSVgfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgZGlyPVwicnRsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ncm91cExpbWl0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUdyb3VwT3JkZXJMaW1pdENoYW5nZX1cbiAgICAgICAgICAgICAgICBkYXRhLXRpcD17XG4gICAgICAgICAgICAgICAgICAgIG5vR3JvdXBzQXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAubm9fZ3JvdXBzX2F2YWlsYWJsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtub0dyb3Vwc0F2YWlsYWJsZSA/IHtjdXJzb3I6IFwibm90LWFsbG93ZWRcIn0gOiBudWxsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLmdyb3VwX29yZGVyX2xpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt0cmFja2VkR3JvdXBzT3B0aW9uc0xpc3R9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIE9yZGVyQm9vayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZsaXA6IHByb3BzLmZsaXBPcmRlckJvb2ssXG4gICAgICAgICAgICBzaG93QWxsQmlkczogZmFsc2UsXG4gICAgICAgICAgICBzaG93QWxsQXNrczogZmFsc2UsXG4gICAgICAgICAgICByb3dDb3VudDogMjAsXG4gICAgICAgICAgICBhdXRvU2Nyb2xsOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmVydGljYWxTdGlja3lUYWJsZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghbmV4dFByb3BzLm1hcmtldFJlYWR5KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjYWxscyBjaGFuZ2VkOlwiLCAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5jYWxscywgdGhpcy5wcm9wcy5jYWxscyksIG5leHRQcm9wcy5jYWxscyAmJiBuZXh0UHJvcHMuY2FsbHMudG9KUygpLCB0aGlzLnByb3BzLmNhbGxzICYmIHRoaXMucHJvcHMuY2FsbHMudG9KUygpKTtcbiAgICAvLyAgICAgY29uc3QgY2FsbHNDaGFuZ2VkID0gZGlkT3JkZXJzQ2hhbmdlKG5leHRQcm9wcy5jYWxscywgdGhpcy5wcm9wcy5jYWxscyk7XG4gICAgLy8gICAgIGNvbnN0IGxpbWl0c0NoYW5nZWQgPSBkaWRPcmRlcnNDaGFuZ2UobmV4dFByb3BzLm9yZGVycywgdGhpcy5wcm9wcy5vcmRlcnMpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNhbGxzQ2hhbmdlZDpcIiwgY2FsbHNDaGFuZ2VkLCBcImxpbWl0c0NoYW5nZWRcIiwgbGltaXRzQ2hhbmdlZCk7XG4gICAgLy8gICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5vcmRlcnMsIHRoaXMucHJvcHMub3JkZXJzKSB8fFxuICAgIC8vICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuY2FsbHMsIHRoaXMucHJvcHMuY2FsbHMpIHx8XG4gICAgLy8gICAgICAgICBuZXh0UHJvcHMuaG9yaXpvbnRhbCAhPT0gdGhpcy5wcm9wcy5ob3Jpem9udGFsIHx8XG4gICAgLy8gICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLmxhdGVzdCwgdGhpcy5wcm9wcy5sYXRlc3QpIHx8XG4gICAgLy8gICAgICAgICBuZXh0UHJvcHMuc21hbGxTY3JlZW4gIT09IHRoaXMucHJvcHMuc21hbGxTY3JlZW4gfHxcbiAgICAvLyAgICAgICAgIG5leHRQcm9wcy53cmFwcGVyQ2xhc3MgIT09IHRoaXMucHJvcHMud3JhcHBlckNsYXNzIHx8XG4gICAgLy8gICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKVxuICAgIC8vICAgICApO1xuICAgIC8vIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICAgICAgY29uc3QgbmV4dFByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgLy8gQ2hhbmdlIG9mIG1hcmtldCBvciBkaXJlY3Rpb25cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2UuZ2V0KFwiaWRcIikgIT09IHByZXZQcm9wcy5iYXNlLmdldChcImlkXCIpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGUuZ2V0KFwiaWRcIikgIT09IHByZXZQcm9wcy5xdW90ZS5nZXQoXCJpZFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuYXNrVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5hc2tUcmFuc2l0aW9uLnJlc2V0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5ob3JfYXNrcykgdGhpcy5yZWZzLmhvcl9hc2tzLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5ob3JfYmlkcykgdGhpcy5yZWZzLmhvcl9iaWRzLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuYmlkVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5iaWRUcmFuc2l0aW9uLnJlc2V0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMudmVydF9iaWRzKSB0aGlzLnJlZnMudmVydF9iaWRzLnNjcm9sbFRvcCA9IDA7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXV0b1Njcm9sbDogdHJ1ZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHNVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5jZW50ZXJWZXJ0aWNhbFNjcm9sbEJhcigpO1xuICAgIH1cblxuICAgIHF1ZXJ5U3RpY2t5VGFibGUgPSBxdWVyeSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZlcnRpY2FsU3RpY2t5VGFibGUuY3VycmVudC50YWJsZS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICB9O1xuXG4gICAgdmVydGljYWxTY3JvbGxCYXIgPSAoKSA9PiB0aGlzLnF1ZXJ5U3RpY2t5VGFibGUoXCIjeS1zY3JvbGxiYXJcIik7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIFBzLmluaXRpYWxpemUodGhpcy52ZXJ0aWNhbFNjcm9sbEJhcigpKTtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyVmVydGljYWxTY3JvbGxCYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBiaWRzQ29udGFpbmVyID0gdGhpcy5yZWZzLmhvcl9iaWRzO1xuICAgICAgICAgICAgUHMuaW5pdGlhbGl6ZShiaWRzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGxldCBhc2tzQ29udGFpbmVyID0gdGhpcy5yZWZzLmhvcl9hc2tzO1xuICAgICAgICAgICAgUHMuaW5pdGlhbGl6ZShhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNlbnRlclZlcnRpY2FsU2Nyb2xsQmFyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaG9yaXpvbnRhbCAmJiB0aGlzLnN0YXRlLmF1dG9TY3JvbGwpIHtcbiAgICAgICAgICAgIC8vIENlbnRlciB2ZXJ0aWNhbCBzY3JvbGwgYmFyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxhYmxlQ29udGFpbmVyID0gdGhpcy5xdWVyeVN0aWNreVRhYmxlKFxuICAgICAgICAgICAgICAgIFwiI3N0aWNreS10YWJsZS15LXdyYXBwZXJcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMucXVlcnlTdGlja3lUYWJsZShcIiNzdGlja3ktdGFibGUtaGVhZGVyXCIpO1xuICAgICAgICAgICAgY29uc3QgY2VudGVyVGV4dENvbnRhaW5lciA9IHRoaXMuY2VudGVyVGV4dC5jdXJyZW50O1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlQXNrSGVpZ2h0ID0gZWxlbUhlaWdodChcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5U3RpY2t5VGFibGUoXCIub3JkZXItcm93XCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgYXNrc0hlaWdodCA9IHRoaXMucHJvcHMuY29tYmluZWRBc2tzLmxlbmd0aCAqIHNpbmdsZUFza0hlaWdodDtcblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZUNvbnRhaW5lckhlaWdodCA9XG4gICAgICAgICAgICAgICAgZWxlbUhlaWdodChzY3JvbGxhYmxlQ29udGFpbmVyKSAtIGVsZW1IZWlnaHQoaGVhZGVyKTtcblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG8gPVxuICAgICAgICAgICAgICAgIGFza3NIZWlnaHQgK1xuICAgICAgICAgICAgICAgIGVsZW1IZWlnaHQoY2VudGVyVGV4dENvbnRhaW5lcikgLyAyIC1cbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVySGVpZ2h0IC8gMjtcblxuICAgICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lci5zY3JvbGxUb3AgPSBzY3JvbGxUbztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBzVXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgUHMudXBkYXRlKHRoaXMudmVydGljYWxTY3JvbGxCYXIoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYmlkc0NvbnRhaW5lciA9IHRoaXMucmVmcy5ob3JfYmlkcztcbiAgICAgICAgICAgIFBzLnVwZGF0ZShiaWRzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGxldCBhc2tzQ29udGFpbmVyID0gdGhpcy5yZWZzLmhvcl9hc2tzO1xuICAgICAgICAgICAgUHMudXBkYXRlKGFza3NDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZsaXBCdXlTZWxsKCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgZmxpcE9yZGVyQm9vazogIXRoaXMuc3RhdGUuZmxpcFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmbGlwOiAhdGhpcy5zdGF0ZS5mbGlwfSk7XG4gICAgfVxuXG4gICAgX29uVG9nZ2xlU2hvd0FsbCh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcImFza3NcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvd0FsbEFza3M6ICF0aGlzLnN0YXRlLnNob3dBbGxBc2tzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0FsbEFza3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMuaG9yX2Fza3Muc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNob3dBbGxCaWRzOiAhdGhpcy5zdGF0ZS5zaG93QWxsQmlkc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGxCaWRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLmhvcl9iaWRzLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVTcHJlYWRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXNwbGF5U3ByZWFkQXNQZXJjZW50YWdlOiAhdGhpcy5zdGF0ZS5kaXNwbGF5U3ByZWFkQXNQZXJjZW50YWdlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0b2dnbGVBdXRvU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthdXRvU2Nyb2xsOiAhdGhpcy5zdGF0ZS5hdXRvU2Nyb2xsfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGNvbWJpbmVkQmlkcyxcbiAgICAgICAgICAgIGNvbWJpbmVkQXNrcyxcbiAgICAgICAgICAgIGhpZ2hlc3RCaWQsXG4gICAgICAgICAgICBsb3dlc3RBc2ssXG4gICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICB0b3RhbEFza3MsXG4gICAgICAgICAgICB0b3RhbEJpZHMsXG4gICAgICAgICAgICBxdW90ZVN5bWJvbCxcbiAgICAgICAgICAgIGJhc2VTeW1ib2wsXG4gICAgICAgICAgICBob3Jpem9udGFsLFxuICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZyxcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQsXG4gICAgICAgICAgICBoYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2UsXG4gICAgICAgICAgICBncm91cGVkQmlkcyxcbiAgICAgICAgICAgIGdyb3VwZWRBc2tzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc2hvd0FsbEFza3MsXG4gICAgICAgICAgICBzaG93QWxsQmlkcyxcbiAgICAgICAgICAgIHJvd0NvdW50LFxuICAgICAgICAgICAgZGlzcGxheVNwcmVhZEFzUGVyY2VudGFnZVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qgbm9PcmRlcnMgPSAhbG93ZXN0QXNrLnNlbGxfcHJpY2UgJiYgIWhpZ2hlc3RCaWQuc2VsbF9wcmljZTtcbiAgICAgICAgY29uc3QgaGFzQXNrQW5kQmlkcyA9ICEhKGxvd2VzdEFzay5zZWxsX3ByaWNlICYmIGhpZ2hlc3RCaWQuc2VsbF9wcmljZSk7XG4gICAgICAgIGNvbnN0IHNwcmVhZCA9XG4gICAgICAgICAgICBoYXNBc2tBbmRCaWRzICYmXG4gICAgICAgICAgICAoZGlzcGxheVNwcmVhZEFzUGVyY2VudGFnZSA/IChcbiAgICAgICAgICAgICAgICBgJHsoXG4gICAgICAgICAgICAgICAgICAgIDEwMCAqXG4gICAgICAgICAgICAgICAgICAgIChsb3dlc3RBc2suX3JlYWxfcHJpY2UgLyBoaWdoZXN0QmlkLl9yZWFsX3ByaWNlIC0gMSlcbiAgICAgICAgICAgICAgICApLnRvRml4ZWQoMil9JWBcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFByaWNlVGV4dFxuICAgICAgICAgICAgICAgICAgICBwcmljZT17bG93ZXN0QXNrLl9yZWFsX3ByaWNlIC0gaGlnaGVzdEJpZC5fcmVhbF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKTtcbiAgICAgICAgbGV0IGJpZFJvd3MgPSBudWxsLFxuICAgICAgICAgICAgYXNrUm93cyA9IG51bGw7XG4gICAgICAgIGlmIChiYXNlICYmIHF1b3RlKSB7XG4gICAgICAgICAgICAvLyBsaW1pdCBvcmRlcnMgb3IgZ3JvdXBlZCBvcmRlcnNcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRHcm91cE9yZGVyTGltaXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICBiaWRSb3dzID0gZ3JvdXBlZEJpZHMubWFwKChvcmRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvcml6b250YWwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBlZE9yZGVyQm9va1Jvd0hvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArIChvcmRlci5pc0JpZCgpID8gXCJfYmlkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXshdGhpcy5zdGF0ZS5mbGlwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwZWRPcmRlckJvb2tSb3dWZXJ0aWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXRQcmljZSgpICsgKG9yZGVyLmlzQmlkKCkgPyBcIl9iaWRcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzLCBvcmRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxldCB0ZW1wQXNrcyA9IGdyb3VwZWRBc2tzO1xuICAgICAgICAgICAgICAgIGlmICghaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5nZXRQcmljZSgpIC0gYS5nZXRQcmljZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXNrUm93cyA9IHRlbXBBc2tzLm1hcCgob3JkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBob3Jpem9udGFsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwZWRPcmRlckJvb2tSb3dIb3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldFByaWNlKCkgKyAob3JkZXIuaXNCaWQoKSA/IFwiX2JpZFwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGljay5iaW5kKHRoaXMsIG9yZGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtvcmRlci50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXshdGhpcy5zdGF0ZS5mbGlwID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwZWRPcmRlckJvb2tSb3dWZXJ0aWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5nZXRQcmljZSgpICsgKG9yZGVyLmlzQmlkKCkgPyBcIl9iaWRcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzLCBvcmRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17b3JkZXIudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbD17MCA9PT0gaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaWRSb3dzID0gY29tYmluZWRCaWRzLm1hcCgob3JkZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBob3Jpem9udGFsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyQm9va1Jvd0hvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcmRlci5pc0NhbGwoKSA/IFwiX2NhbGxcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzLCBvcmRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249eyF0aGlzLnN0YXRlLmZsaXAgPyBcImxlZnRcIiA6IFwicmlnaHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJCb29rUm93VmVydGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcmRlci5pc0NhbGwoKSA/IFwiX2NhbGxcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzLCBvcmRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxldCB0ZW1wQXNrcyA9IGNvbWJpbmVkQXNrcztcbiAgICAgICAgICAgICAgICB0ZW1wQXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5nZXRQcmljZSgpIC0gYi5nZXRQcmljZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuZ2V0UHJpY2UoKSAtIGEuZ2V0UHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFza1Jvd3MgPSB0ZW1wQXNrcy5tYXAoKG9yZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlckJvb2tSb3dIb3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmdldFByaWNlKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3JkZXIuaXNDYWxsKCkgPyBcIl9jYWxsXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywgb3JkZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e29yZGVyLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249eyF0aGlzLnN0YXRlLmZsaXAgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJCb29rUm93VmVydGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZ2V0UHJpY2UoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcmRlci5pc0NhbGwoKSA/IFwiX2NhbGxcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2suYmluZCh0aGlzLCBvcmRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17b3JkZXIudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbD17MCA9PT0gaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgbGV0IHRvdGFsQmlkc0xlbmd0aCA9IGJpZFJvd3MubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IHRvdGFsQXNrc0xlbmd0aCA9IGFza1Jvd3MubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoIXNob3dBbGxCaWRzKSB7XG4gICAgICAgICAgICAgICAgYmlkUm93cy5zcGxpY2Uocm93Q291bnQsIGJpZFJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzaG93QWxsQXNrcykge1xuICAgICAgICAgICAgICAgIGFza1Jvd3Muc3BsaWNlKHJvd0NvdW50LCBhc2tSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBsZWZ0SGVhZGVyID0gKFxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT1cInRvcC1oZWFkZXJcIiBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtiYXNlU3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17YmFzZVN5bWJvbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtxdW90ZVN5bWJvbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZsaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYXNrLXRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmlkLXRvdGFsXCIpICsgXCIgaGVhZGVyLXN1Yi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHJpZ2h0SGVhZGVyID0gKFxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT1cInRvcC1oZWFkZXJcIiBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnN0YXRlLmZsaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYXNrLXRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmlkLXRvdGFsXCIpICsgXCIgaGVhZGVyLXN1Yi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17cXVvdGVTeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17YmFzZVN5bWJvbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS50b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17YmFzZVN5bWJvbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLndyYXBwZXJDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JpZC1ibG9jayBvcmRlcmJvb2sgbm8tcGFkZGluZyBzbWFsbC12ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBhbGlnbi1zcGFjZWQgbm8tb3ZlcmZsb3cgc21hbGwtMTIgeGxhcmdlLThcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic21hbGwtMTIgbWVkaXVtLTYgbWlkZGxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZsaXAgPyBcIm9yZGVyLTFcIiA6IFwib3JkZXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1jb250ZW50LWhlYWRlciBhc2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLnNlbGxfb3JkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmFza3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mbGlwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9mbGlwQnV5U2VsbC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi0ycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGlwLWFycm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4NjQ2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1ib29rLWJ1dHRvbi12XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5tb3ZlT3JkZXJCb29rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aHVtYi10YWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudGh1bWJfdGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmxpcCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgaGVhZGVyLXN1Yi10aXRsZSBncm91cGVkX29yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYWNrZWRHcm91cHNDb25maWcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cE9yZGVyTGltaXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBPcmRlckxpbWl0Q2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjE2cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UudG90YWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+OiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEFza3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QXNzZXROYW1lIG5hbWU9e3F1b3RlU3ltYm9sfSAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIwLjZyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGFibGUtaG92ZXIgZml4ZWQtdGFibGUgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmZsaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJpZ2h0SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZWZ0SGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImhvcl9hc2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIwLjZyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiA1fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRhYmxlLWhvdmVyIGZpeGVkLXRhYmxlIHRleHQtcmlnaHQgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJhc2tUcmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcmJvb2sgY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0Ym9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc2tSb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxBc2tzTGVuZ3RoID4gcm93Q291bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJib29rLXNob3dhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Ub2dnbGVTaG93QWxsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FsbEFza3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZXhjaGFuZ2UuaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImV4Y2hhbmdlLnNob3dfYXNrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc2hvd0FsbEFza3MgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAoe3RvdGFsQXNrc0xlbmd0aH0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbWFsbC0xMiBtZWRpdW0tNiBtaWRkbGUtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmxpcCA/IFwib3JkZXItMlwiIDogXCJvcmRlci0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyIGJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guYnV5X29yZGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5iaWRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmZsaXAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2ZsaXBCdXlTZWxsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTJweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsaXAtYXJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzg2NDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWJvb2stYnV0dG9uLXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm1vdmVPcmRlckJvb2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRodW1iLXRhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy50aHVtYl90YWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuZmxpcCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgaGVhZGVyLXN1Yi10aXRsZSBncm91cGVkX29yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYWNrZWRHcm91cHNDb25maWcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cE9yZGVyTGltaXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tlZEdyb3Vwc0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBPcmRlckxpbWl0Q2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjE2cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UudG90YWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+OiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEJpZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxBc3NldE5hbWUgbmFtZT17YmFzZVN5bWJvbH0gLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IFwiMC42cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRhYmxlLWhvdmVyIGZpeGVkLXRhYmxlIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZsaXAgPyByaWdodEhlYWRlciA6IGxlZnRIZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaG9yX2JpZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjAuNnJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDIxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGFibGUtaG92ZXIgZml4ZWQtdGFibGUgdGV4dC1yaWdodCBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImJpZFRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyYm9vayBjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JpZFJvd3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbEJpZHNMZW5ndGggPiByb3dDb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcmJvb2stc2hvd2FsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblRvZ2dsZVNob3dBbGwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiaWRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxsQmlkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJleGNoYW5nZS5oaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZXhjaGFuZ2Uuc2hvd19iaWRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzaG93QWxsQmlkcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICh7dG90YWxCaWRzTGVuZ3RofSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFZlcnRpY2FsIG9yZGVyYm9va1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtb3JkZXItYm9vayBuby1wYWRkaW5nIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItdGFibGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RpY2t5VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGlja3lDb2x1bW5Db3VudD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci10YWJsZSB0YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnZlcnRpY2FsU3RpY2t5VGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktdGFibGUtcm93IHRvcC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIGhlYWRlci1jZWxsIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2Jhc2VTeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgaGVhZGVyLWNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3F1b3RlU3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIGhlYWRlci1jZWxsIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJhc2tUcmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1jb250YWluZXIgY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvcC1vcmRlci1yb3dzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc2tSb3dzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNrUm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBub09yZGVycyB8fCAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS10YWJsZS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VsbCBuby1vcmRlcnMgcGFkdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uubm9fYXNrc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGlja3ktdGFibGUtcm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmNlbnRlclRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9PcmRlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW9yZGVycyBwYWR0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm5vX29yZGVyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2VsbCBjZW50ZXItY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJib29rLWxhdGVzdC1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHNwcmVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhc3ByZWFkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGUgbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b2dnbGVTcHJlYWRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5zcHJlYWRcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ByZWFkLXZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9jay11bmxvY2sgY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVBdXRvU2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmF1dG9TY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsb2NrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVubG9ja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmF1dG9TY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpY29ucy5sb2NrZWQuZW5hYmxlX2F1dG9fc2Nyb2xsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpY29ucy51bmxvY2tlZC5kaXNhYmxlX2F1dG9fc2Nyb2xsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhdGhpcy5wcm9wcy5sYXRlc3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmxhdGVzdFwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGF0ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImJpZFRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWNvbnRhaW5lciBjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmlkUm93cy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJpZFJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbm9PcmRlcnMgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktdGFibGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbGwgbm8tb3JkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uubm9fYmlkc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreVRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LWFsaWduIG5vLXBhZGRpbmcgYWxpZ24tY2VudGVyIGdyaWQtYmxvY2sgZm9vdGVyIHNocmluayBib3R0b20taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidi1hbGlnbiBncmlkLWJsb2NrIGFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IFwiMnJlbVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRodW1iLXVudGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudGh1bWJfdW50YWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4IG9yZGVyLWJvb2stYnV0dG9uLWhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RvcDogXCItMC41cmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm1vdmVPcmRlckJvb2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LWFsaWduIGdyaWQtYmxvY2sgYWxpZ24tY2VudGVyIGdyb3VwZWRfb3JkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhY2tlZEdyb3Vwc0NvbmZpZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwT3JkZXJMaW1pdFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja2VkR3JvdXBzQ29uZmlnPXt0cmFja2VkR3JvdXBzQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlR3JvdXBPcmRlckxpbWl0Q2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVHcm91cE9yZGVyTGltaXRDaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk9yZGVyQm9vay5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYmlkczogW10sXG4gICAgYXNrczogW10sXG4gICAgb3JkZXJzOiB7fVxufTtcblxuT3JkZXJCb29rLnByb3BUeXBlcyA9IHtcbiAgICBiaWRzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBhc2tzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBvcmRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJCb29rO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgUHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgbWFya2V0X3V0aWxzIGZyb20gXCJjb21tb24vbWFya2V0X3V0aWxzXCI7XG5pbXBvcnQgUHJpY2VUZXh0IGZyb20gXCIuLi9VdGlsaXR5L1ByaWNlVGV4dFwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQge0NoYWluVHlwZXMgYXMgZ3JhcGhlbmVDaGFpblR5cGVzfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmNvbnN0IHtvcGVyYXRpb25zfSA9IGdyYXBoZW5lQ2hhaW5UeXBlcztcbmltcG9ydCBCbG9ja0RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmxvY2tEYXRlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5pbXBvcnQgZ2V0TG9jYWxlIGZyb20gXCJicm93c2VyLWxvY2FsZVwiO1xuaW1wb3J0IHtGaWxsT3JkZXJ9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuXG5jbGFzcyBNYXJrZXRIaXN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiaGlzdG9yeVRhYlwiLCBcImhpc3RvcnlcIilcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKCFuZXh0UHJvcHMubWFya2V0UmVhZHkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmhpc3RvcnksIHRoaXMucHJvcHMuaGlzdG9yeSkgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlU3ltYm9sICE9PSB0aGlzLnByb3BzLmJhc2VTeW1ib2wgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZVN5bWJvbCAhPT0gdGhpcy5wcm9wcy5xdW90ZVN5bWJvbCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5jbGFzc05hbWUgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5hY3RpdmVUYWIgIT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudEFjY291bnQgIT09IHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGhpc3RvcnlDb250YWluZXIgPSB0aGlzLnJlZnMuaGlzdG9yeTtcbiAgICAgICAgUHMuaW5pdGlhbGl6ZShoaXN0b3J5Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGxldCBoaXN0b3J5Q29udGFpbmVyID0gdGhpcy5yZWZzLmhpc3Rvcnk7XG4gICAgICAgIFBzLnVwZGF0ZShoaXN0b3J5Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBfY2hhbmdlVGFiKHRhYikge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgaGlzdG9yeVRhYjogdGFiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogdGFiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IGZvY3VzIGdvZXMgYmFjayB0byB0b3Agb2Ygc2Nyb2xsYWJsZSBjb250YWluZXIgd2hlbiB0YWIgaXMgY2hhbmdlZFxuICAgICAgICBsZXQgaGlzdG9yeU5vZGUgPSB0aGlzLnJlZnMuaGlzdG9yeTtcbiAgICAgICAgaGlzdG9yeU5vZGUuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgUHMudXBkYXRlKGhpc3RvcnlOb2RlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KFJlYWN0VG9vbHRpcC5yZWJ1aWxkLCAxMDAwKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBoaXN0b3J5LFxuICAgICAgICAgICAgbXlIaXN0b3J5LFxuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgYmFzZVN5bWJvbCxcbiAgICAgICAgICAgIHF1b3RlU3ltYm9sLFxuICAgICAgICAgICAgaXNOdWxsQWNjb3VudFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVUYWJ9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGhpc3RvcnlSb3dzID0gbnVsbDtcblxuICAgICAgICBpZiAoaXNOdWxsQWNjb3VudCkge1xuICAgICAgICAgICAgYWN0aXZlVGFiID0gXCJoaXN0b3J5XCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhc3NldHMgPSB7XG4gICAgICAgICAgICBbcXVvdGUuZ2V0KFwiaWRcIildOiB7XG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbYmFzZS5nZXQoXCJpZFwiKV06IHtcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFjdGl2ZVRhYiA9PT0gXCJteV9oaXN0b3J5XCIgJiYgKG15SGlzdG9yeSAmJiBteUhpc3Rvcnkuc2l6ZSkpIHtcbiAgICAgICAgICAgIGhpc3RvcnlSb3dzID0gbXlIaXN0b3J5XG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wVHlwZSA9IGEuZ2V0SW4oW1wib3BcIiwgMF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BUeXBlID09PSBvcGVyYXRpb25zLmZpbGxfb3JkZXI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVJRCA9IHF1b3RlLmdldChcImlkXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZUlEID0gYmFzZS5nZXQoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBheXMgPSBhLmdldEluKFtcIm9wXCIsIDEsIFwicGF5c1wiLCBcImFzc2V0X2lkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY2VpdmVzID0gYS5nZXRJbihbXCJvcFwiLCAxLCBcInJlY2VpdmVzXCIsIFwiYXNzZXRfaWRcIl0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzUXVvdGUgPSBxdW90ZUlEID09PSBwYXlzIHx8IHF1b3RlSUQgPT09IHJlY2VpdmVzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzQmFzZSA9IGJhc2VJRCA9PT0gcGF5cyB8fCBiYXNlSUQgPT09IHJlY2VpdmVzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFzUXVvdGUgJiYgaGFzQmFzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmdldChcImJsb2NrX251bVwiKSAtIGEuZ2V0KFwiYmxvY2tfbnVtXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcCh0cnggPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsbCA9IG5ldyBGaWxsT3JkZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0cngudG9KUygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17ZmlsbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17ZmlsbC5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17ZmlsbC5nZXRQcmljZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17dGhpcy5wcm9wcy5iYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3RoaXMucHJvcHMucXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZpbGwuYW1vdW50VG9SZWNlaXZlKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZpbGwuYW1vdW50VG9QYXkoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19udW1iZXI9e2ZpbGwuYmxvY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGlzdG9yeSAmJiBoaXN0b3J5LnNpemUpIHtcbiAgICAgICAgICAgIGhpc3RvcnlSb3dzID0gdGhpcy5wcm9wcy5oaXN0b3J5XG4gICAgICAgICAgICAgICAgLnRha2UoMTAwKVxuICAgICAgICAgICAgICAgIC5tYXAoZmlsbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcImhpc3RvcnlfXCIgKyBmaWxsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtmaWxsLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtmaWxsLmdldFByaWNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXt0aGlzLnByb3BzLmJhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17dGhpcy5wcm9wcy5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmlsbC5hbW91bnRUb1JlY2VpdmUoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmlsbC5hbW91bnRUb1BheSgpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRvb2x0aXBcIiBkYXRhLXRpcD17ZmlsbC50aW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LmxvY2FsaXplKGZpbGwudGltZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TG9jYWxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoXCJlbi11c1wiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1hcmtldF9oaXN0b3J5X3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm1hcmtldF9oaXN0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhjID0gXCJteW1hcmtldHMtaGVhZGVyIGNsaWNrYWJsZVwiO1xuICAgICAgICBsZXQgaGlzdG9yeUNsYXNzID0gY25hbWVzKGhjLCB7aW5hY3RpdmU6IGFjdGl2ZVRhYiA9PT0gXCJteV9oaXN0b3J5XCJ9KTtcbiAgICAgICAgbGV0IG15SGlzdG9yeUNsYXNzID0gY25hbWVzKGhjLCB7aW5hY3RpdmU6IGFjdGl2ZVRhYiA9PT0gXCJoaXN0b3J5XCJ9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4Y2hhbmdlLWJvcmRlcmVkIHNtYWxsLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IFwiYXV0b1wifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgbGVmdC1vcmRlcmJvb2staGVhZGVyIGJvdHRvbS1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMobXlIaXN0b3J5Q2xhc3MsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzTnVsbEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VUYWIuYmluZCh0aGlzLCBcIm15X2hpc3RvcnlcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubXlfaGlzdG9yeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2hpc3RvcnlDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VUYWIuYmluZCh0aGlzLCBcImhpc3RvcnlcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuaGlzdG9yeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgbGVmdC1vcmRlcmJvb2staGVhZGVyIG1hcmtldC1yaWdodC1wYWRkaW5nLW9ubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBvcmRlci10YWJsZSB0ZXh0LXJpZ2h0IGZpeGVkLXRhYmxlIG1hcmtldC1yaWdodC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXIgZ3JpZC1ibG9jayBtYXJrZXQtcmlnaHQtcGFkZGluZy1vbmx5IG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImhpc3RvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhIZWlnaHQ6IDIxMCwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGV4dC1yaWdodCBmaXhlZC10YWJsZSBtYXJrZXQtcmlnaHQtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0Ym9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwibmV3cm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoaXN0b3J5Um93c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1hcmtldEhpc3RvcnkuZGVmYXVsdFByb3BzID0ge1xuICAgIGhpc3Rvcnk6IFtdXG59O1xuXG5NYXJrZXRIaXN0b3J5LnByb3BUeXBlcyA9IHtcbiAgICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgTWFya2V0SGlzdG9yeSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBCbG9ja2NoYWluU3RvcmUgZnJvbSBcInN0b3Jlcy9CbG9ja2NoYWluU3RvcmVcIjtcbmltcG9ydCBCbG9ja2NoYWluQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CbG9ja2NoYWluQWN0aW9uc1wiO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0IGdldExvY2FsZSBmcm9tIFwiYnJvd3Nlci1sb2NhbGVcIjtcblxuLyoqXG4gKiBAYnJpZWYgZGlzcGxheXMgYmxvY2sncyBkYXRlIGFuZCB0aW1lIGJhc2VkIG9uIGJsb2NrIG51bWJlclxuICpcbiAqIHByb3BlcnRpZXM6IGJsb2NrIC0gbnVtYmVyXG4gKiBOb3RlLCBpdCBkb2Vzbid0IGZldGNoIGJsb2NrLCBqdXN0IGNhbGN1bGF0ZXMgdGltZSBiYXNlZCBvbiBudW1iZXIgYWxvbmUuXG4gKiovXG5cbmNsYXNzIEJsb2NrRGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZm9ybWF0OlxuICAgICAgICAgICAgZ2V0TG9jYWxlKClcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIC5pbmRleE9mKFwiZW4tdXNcIikgIT09IC0xXG4gICAgICAgICAgICAgICAgPyBcIm1hcmtldF9oaXN0b3J5X3VzXCJcbiAgICAgICAgICAgICAgICA6IFwibWFya2V0X2hpc3RvcnlcIixcbiAgICAgICAgdG9vbHRpcDogZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudDogXCJzcGFuXCJcbiAgICB9O1xuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYmxvY2tIZWFkZXIpXG4gICAgICAgICAgICBCbG9ja2NoYWluQWN0aW9ucy5nZXRIZWFkZXIuZGVmZXIodGhpcy5wcm9wcy5ibG9ja19udW1iZXIpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xuICAgICAgICBpZiAobnAuYmxvY2tIZWFkZXIgJiYgIXRoaXMucHJvcHMuYmxvY2tIZWFkZXIpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFJlYWN0VG9vbHRpcC5yZWJ1aWxkLCAxMDAwKTtcbiAgICAgICAgcmV0dXJuIG5wLmJsb2NrSGVhZGVyICE9PSB0aGlzLnByb3BzLmJsb2NrSGVhZGVyO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2Jsb2NrSGVhZGVyLCB0b29sdGlwLCBjb21wb25lbnQsIGZvcm1hdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWJsb2NrSGVhZGVyKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRvb2x0aXAgPyBcInRvb2x0aXBcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRpcFwiOiB0b29sdGlwID8gYmxvY2tIZWFkZXIudGltZXN0YW1wIDogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC5sb2NhbGl6ZShibG9ja0hlYWRlci50aW1lc3RhbXAsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQmxvY2tEYXRlID0gY29ubmVjdChcbiAgICBCbG9ja0RhdGUsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQmxvY2tjaGFpblN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYmxvY2tIZWFkZXI6IEJsb2NrY2hhaW5TdG9yZS5nZXRTdGF0ZSgpLmJsb2NrSGVhZGVycy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmJsb2NrX251bWJlclxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0RhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBQcmljZVRleHQgZnJvbSBcIi4uL1V0aWxpdHkvUHJpY2VUZXh0XCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IFNpbXBsZURlcG9zaXRXaXRoZHJhdyBmcm9tIFwiLi4vRGFzaGJvYXJkL1NpbXBsZURlcG9zaXRXaXRoZHJhd1wiO1xuaW1wb3J0IFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZSBmcm9tIFwiLi4vRGFzaGJvYXJkL1NpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZVwiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQgRXhjaGFuZ2VJbnB1dCBmcm9tIFwiLi9FeGNoYW5nZUlucHV0XCI7XG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlcjIvc3JjL1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5cbmNsYXNzIEJ1eVNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGJhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGFtb3VudENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgcHJpY2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBvbkV4cGlyYXRpb25UeXBlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBvbkV4cGlyYXRpb25DdXN0b21DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdHlwZTogXCJiaWRcIlxuICAgIH07XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuYW1vdW50ICE9PSB0aGlzLnByb3BzLmFtb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm9uQm9ycm93ICE9PSB0aGlzLnByb3BzLm9uQm9ycm93IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMudG90YWwgIT09IHRoaXMucHJvcHMudG90YWwgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50UHJpY2UgIT09IHRoaXMucHJvcHMuY3VycmVudFByaWNlIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucHJpY2UgIT09IHRoaXMucHJvcHMucHJpY2UgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYWxhbmNlICE9PSB0aGlzLnByb3BzLmJhbGFuY2UgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5jbGFzc05hbWUgIT09IHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8XG4gICAgICAgICAgICAobmV4dFByb3BzLmZlZSAmJiB0aGlzLnByb3BzLmZlZVxuICAgICAgICAgICAgICAgID8gbmV4dFByb3BzLmZlZS5uZSh0aGlzLnByb3BzLmZlZSlcbiAgICAgICAgICAgICAgICA6IGZhbHNlKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmlzUHJlZGljdGlvbk1hcmtldCAhPT0gdGhpcy5wcm9wcy5pc1ByZWRpY3Rpb25NYXJrZXQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5mZWVBc3NldCAhPT0gdGhpcy5wcm9wcy5mZWVBc3NldCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmlzT3BlbiAhPT0gdGhpcy5wcm9wcy5pc09wZW4gfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5oYXNGZWVCYWxhbmNlICE9PSB0aGlzLnByb3BzLmhhc0ZlZUJhbGFuY2UgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5leHBpcmF0aW9uVHlwZSAhPT0gdGhpcy5wcm9wcy5leHBpcmF0aW9uVHlwZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmV4cGlyYXRpb25DdXN0b21UaW1lICE9PSB0aGlzLnByb3BzLmV4cGlyYXRpb25DdXN0b21UaW1lXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2FkZEJhbGFuY2UoYmFsYW5jZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcImJpZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvdGFsQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHt2YWx1ZTogYmFsYW5jZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KS50b1N0cmluZygpfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFtb3VudENoYW5nZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7dmFsdWU6IGJhbGFuY2UuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3NldFByaWNlKHByaWNlKSB7XG4gICAgICAgIHRoaXMucHJvcHMucHJpY2VDaGFuZ2Uoe3RhcmdldDoge3ZhbHVlOiBwcmljZS50b1N0cmluZygpfX0pO1xuICAgIH1cblxuICAgIF9vbkRlcG9zaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucmVmcy5kZXBvc2l0X21vZGFsLnNob3coKTtcbiAgICB9XG5cbiAgICBfb25CdXkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucmVmcy5icmlkZ2VfbW9kYWwuc2hvdygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBhbW91bnRDaGFuZ2UsXG4gICAgICAgICAgICBmZWUsXG4gICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXQsXG4gICAgICAgICAgICBwcmljZUNoYW5nZSxcbiAgICAgICAgICAgIG9uU3VibWl0LFxuICAgICAgICAgICAgYmFsYW5jZSxcbiAgICAgICAgICAgIHRvdGFsQ2hhbmdlLFxuICAgICAgICAgICAgYmFsYW5jZVByZWNpc2lvbixcbiAgICAgICAgICAgIGN1cnJlbnRQcmljZSxcbiAgICAgICAgICAgIGN1cnJlbnRQcmljZU9iamVjdCxcbiAgICAgICAgICAgIGZlZUFzc2V0LFxuICAgICAgICAgICAgZmVlQXNzZXRzLFxuICAgICAgICAgICAgaGFzRmVlQmFsYW5jZSxcbiAgICAgICAgICAgIGJhY2tlZENvaW5cbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBhbW91bnQsIHByaWNlLCB0b3RhbDtcbiAgICAgICAgbGV0IGNhcmV0ID0gdGhpcy5wcm9wcy5pc09wZW4gPyAoXG4gICAgICAgICAgICA8c3Bhbj4mIzk2NjA7PC9zcGFuPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPHNwYW4+JiM5NjUwOzwvc3Bhbj5cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hbW91bnQpIGFtb3VudCA9IHRoaXMucHJvcHMuYW1vdW50O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcmljZSkgcHJpY2UgPSB0aGlzLnByb3BzLnByaWNlO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50b3RhbCkgdG90YWwgPSB0aGlzLnByb3BzLnRvdGFsO1xuXG4gICAgICAgIGxldCBiYWxhbmNlQW1vdW50ID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogYmFsYW5jZSA/IGJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSA6IDAsXG4gICAgICAgICAgICBwcmVjaXNpb246IGJhbGFuY2VQcmVjaXNpb24sXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5iYWxhbmNlSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbWF4QmFzZU1hcmtldEZlZSA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICBhbW91bnQ6IGJhc2UuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1heF9tYXJrZXRfZmVlXCJdKSxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBiYXNlLmdldChcImFzc2V0X2lkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbWF4UXVvdGVNYXJrZXRGZWUgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiBxdW90ZS5nZXRJbihbXCJvcHRpb25zXCIsIFwibWF4X21hcmtldF9mZWVcIl0pLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHF1b3RlLmdldChcImFzc2V0X2lkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2VNYXJrZXRGZWVQZXJjZW50ID1cbiAgICAgICAgICAgIGJhc2UuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkgLyAxMDAgKyBcIiVcIjtcbiAgICAgICAgY29uc3QgcXVvdGVNYXJrZXRGZWVQZXJjZW50ID1cbiAgICAgICAgICAgIHF1b3RlLmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pIC8gMTAwICsgXCIlXCI7XG4gICAgICAgIGNvbnN0IHF1b3RlRmVlID0gIWFtb3VudFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IE1hdGgubWluKFxuICAgICAgICAgICAgICAgICAgbWF4UXVvdGVNYXJrZXRGZWUuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAoYW1vdW50ICogcXVvdGUuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkpIC9cbiAgICAgICAgICAgICAgICAgICAgICAxMDAwMFxuICAgICAgICAgICAgICApLnRvRml4ZWQobWF4UXVvdGVNYXJrZXRGZWUucHJlY2lzaW9uKTtcbiAgICAgICAgY29uc3QgYmFzZUZlZSA9ICFhbW91bnRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgIG1heEJhc2VNYXJrZXRGZWUuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAodG90YWwgKiBiYXNlLmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pKSAvXG4gICAgICAgICAgICAgICAgICAgICAgMTAwMDBcbiAgICAgICAgICAgICAgKS50b0ZpeGVkKG1heEJhc2VNYXJrZXRGZWUucHJlY2lzaW9uKTtcbiAgICAgICAgY29uc3QgYmFzZUZsYWdCb29sZWFucyA9IGFzc2V0VXRpbHMuZ2V0RmxhZ0Jvb2xlYW5zKFxuICAgICAgICAgICAgYmFzZS5nZXRJbihbXCJvcHRpb25zXCIsIFwiZmxhZ3NcIl0pLFxuICAgICAgICAgICAgYmFzZS5oYXMoXCJiaXRhc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHF1b3RlRmxhZ0Jvb2xlYW5zID0gYXNzZXRVdGlscy5nZXRGbGFnQm9vbGVhbnMoXG4gICAgICAgICAgICBxdW90ZS5nZXRJbihbXCJvcHRpb25zXCIsIFwiZmxhZ3NcIl0pLFxuICAgICAgICAgICAgcXVvdGUuaGFzKFwiYml0YXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHtuYW1lOiBiYXNlTmFtZSwgcHJlZml4OiBiYXNlUHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGhhc01hcmtldEZlZSA9XG4gICAgICAgICAgICBiYXNlRmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gfHxcbiAgICAgICAgICAgIHF1b3RlRmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl07XG4gICAgICAgIHZhciBiYXNlTWFya2V0RmVlID0gYmFzZUZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLXBhZGRpbmcgYnV5LXNlbGwtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkubWFya2V0X2ZlZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICAgICAge2Jhc2VNYXJrZXRGZWVQZXJjZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC00IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2VNYXJrZXRGZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jhc2VGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC00IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBub1RpcCBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLm1hcmtldF9mZWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IChiYXNlUHJlZml4IHx8IFwiXCIpICsgYmFzZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaGFzTWFya2V0RmVlID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLXBhZGRpbmcgYnV5LXNlbGwtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTMgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWxhYmVsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkubWFya2V0X2ZlZVwiIC8+OlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHtuYW1lOiBxdW90ZU5hbWUsIHByZWZpeDogcXVvdGVQcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlXG4gICAgICAgICk7XG4gICAgICAgIHZhciBxdW90ZU1hcmtldEZlZSA9IHF1b3RlRmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZyBidXktc2VsbC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNCBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICB7cXVvdGVNYXJrZXRGZWVQZXJjZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC00IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlTWFya2V0RmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdW90ZUZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5vVGlwIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLm1hcmtldF9mZWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0OiAocXVvdGVQcmVmaXggfHwgXCJcIikgKyBxdW90ZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucXVlc3Rpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaGFzTWFya2V0RmVlID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLXBhZGRpbmcgYnV5LXNlbGwtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTMgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWxhYmVsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkubWFya2V0X2ZlZVwiIC8+OlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIC8vIGlmICghYmFsYW5jZUFtb3VudCkge1xuICAgICAgICAvLyAgICAgYmFsYW5jZUFtb3VudCA9IDA7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgaXNCaWQgPSB0eXBlID09PSBcImJpZFwiO1xuICAgICAgICBsZXQgbWFya2V0RmVlID1cbiAgICAgICAgICAgIGlzQmlkICYmIHF1b3RlTWFya2V0RmVlXG4gICAgICAgICAgICAgICAgPyBxdW90ZU1hcmtldEZlZVxuICAgICAgICAgICAgICAgIDogIWlzQmlkICYmIGJhc2VNYXJrZXRGZWVcbiAgICAgICAgICAgICAgICAgICAgPyBiYXNlTWFya2V0RmVlXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgbGV0IGhhc0JhbGFuY2UgPSBpc0JpZFxuICAgICAgICAgICAgPyBiYWxhbmNlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pID49IHBhcnNlRmxvYXQodG90YWwpXG4gICAgICAgICAgICA6IGJhbGFuY2VBbW91bnQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSkgPj0gcGFyc2VGbG9hdChhbW91bnQpO1xuXG4gICAgICAgIGxldCBidXR0b25UZXh0ID0gaXNQcmVkaWN0aW9uTWFya2V0XG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnNob3J0XCIpXG4gICAgICAgICAgICA6IGlzQmlkXG4gICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5idXlcIilcbiAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnNlbGxcIik7XG4gICAgICAgIGxldCBmb3JjZVNlbGxUZXh0ID0gaXNCaWRcbiAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UuYnV5XCIpXG4gICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnNlbGxcIik7XG5cbiAgICAgICAgbGV0IG5vQmFsYW5jZSA9IGlzUHJlZGljdGlvbk1hcmtldFxuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiAhKGJhbGFuY2VBbW91bnQuZ2V0QW1vdW50KCkgPiAwICYmIGhhc0JhbGFuY2UpO1xuICAgICAgICBsZXQgaW52YWxpZFByaWNlID0gIShwcmljZSA+IDApO1xuICAgICAgICBsZXQgaW52YWxpZEFtb3VudCA9ICEoYW1vdW50ID4gMCk7XG5cbiAgICAgICAgbGV0IGRpc2FibGVkID0gbm9CYWxhbmNlIHx8IGludmFsaWRQcmljZSB8fCBpbnZhbGlkQW1vdW50O1xuXG4gICAgICAgIGxldCBidXR0b25DbGFzcyA9IGNsYXNzTmFtZXMoXCJidXR0b24gYnV5U2VsbEJ1dHRvblwiLCB0eXBlLCB7XG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBiYWxhbmNlU3ltYm9sID0gaXNCaWQgPyBiYXNlLmdldChcInN5bWJvbFwiKSA6IHF1b3RlLmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICBsZXQgZGlzYWJsZWRUZXh0ID0gaW52YWxpZFByaWNlXG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLmludmFsaWRfcHJpY2VcIilcbiAgICAgICAgICAgIDogaW52YWxpZEFtb3VudFxuICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UuaW52YWxpZF9hbW91bnRcIilcbiAgICAgICAgICAgICAgICA6IG5vQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLm5vX2JhbGFuY2VcIilcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIC8vIEZlZSBhc3NldCBzZWxlY3Rpb25cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZmVlQXNzZXRzWzFdICYmXG4gICAgICAgICAgICBmZWVBc3NldHNbMV0uZ2V0SW4oW1xuICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJxdW90ZVwiLFxuICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgXSkgPT09IFwiMS4zLjBcIiAmJlxuICAgICAgICAgICAgZmVlQXNzZXRzWzFdLmdldEluKFtcbiAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxuICAgICAgICAgICAgICAgIFwiYmFzZVwiLFxuICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgXSkgPT09IFwiMS4zLjBcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZUFzc2V0ID0gZmVlQXNzZXRzWzBdO1xuICAgICAgICAgICAgZmVlQXNzZXRzLnNwbGljZSgxLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IGZlZUFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgICAgICAgbGV0IHtuYW1lLCBwcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUoYXNzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YXNzZXQuZ2V0KFwiaWRcIil9IHZhbHVlPXtpbmRleCsrfT5cbiAgICAgICAgICAgICAgICAgICAge3ByZWZpeH1cbiAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdWJ0cmFjdCBmZWUgZnJvbSBhbW91bnQgdG8gc2VsbFxuICAgICAgICBsZXQgYmFsYW5jZVRvQWRkO1xuXG4gICAgICAgIGlmIChmZWVBc3NldC5nZXQoXCJzeW1ib2xcIikgPT09IGJhbGFuY2VTeW1ib2wpIHtcbiAgICAgICAgICAgIGJhbGFuY2VUb0FkZCA9IGJhbGFuY2VBbW91bnQuY2xvbmUoXG4gICAgICAgICAgICAgICAgYmFsYW5jZUFtb3VudC5nZXRBbW91bnQoKSAtIGZlZS5nZXRBbW91bnQoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhbGFuY2VUb0FkZCA9IGJhbGFuY2VBbW91bnQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQge25hbWUsIHByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShcbiAgICAgICAgICAgIHRoaXMucHJvcHNbaXNCaWQgPyBcImJhc2VcIiA6IFwicXVvdGVcIl1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJ1eUJvcnJvd0RlcG9zaXROYW1lID0gKHByZWZpeCA/IHByZWZpeCA6IFwiXCIpICsgbmFtZTtcblxuICAgICAgICBjb25zdCB0cmFuc2xhdG9yID0gcmVxdWlyZShcImNvdW50ZXJwYXJ0XCIpO1xuXG4gICAgICAgIGxldCBkYXRhSW50cm8gPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlID09IFwiYmlkXCIpIHtcbiAgICAgICAgICAgIGRhdGFJbnRybyA9IHRyYW5zbGF0b3IudHJhbnNsYXRlKFwid2Fsa3Rocm91Z2guYnV5X2Zvcm1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PSBcImFza1wiKSB7XG4gICAgICAgICAgICBkYXRhSW50cm8gPSB0cmFuc2xhdG9yLnRyYW5zbGF0ZShcIndhbGt0aHJvdWdoLnNlbGxfZm9ybVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25zT3B0aW9uc0xpc3QgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmV4cGlyYXRpb25zKS5tYXAoXG4gICAgICAgICAgICAoa2V5LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17a2V5fSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmV4cGlyYXRpb25zW2tleV0udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gZGF0ZXBpY2tlciBwdXRzIG9uIHRoZSBlbmQgb2YgYm9keSBzbyBpdCdzIG91dCBvZiB0aGVtZSBzY29wZVxuICAgICAgICAvLyBzbyB0aGVtZSBpcyB1c2VkIG9uIHdyYXBwZXJDbGFzc05hbWVcbiAgICAgICAgY29uc3QgdGhlbWUgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFwidGhlbWVzXCIpO1xuXG4gICAgICAgIGNvbnN0IG1pbkV4cGlyYXRpb25EYXRlID0gbW9tZW50KCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNoYW5nZS1ib3JkZXJlZCBidXktc2VsbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyIFwiICsgdHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e2RhdGFJbnRyb31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5idXlzZWxsX2Zvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1RpcD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHF1b3RlLmdldChcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpc1ByZWRpY3Rpb25NYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImV4Y2hhbmdlLnNob3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpc0JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImV4Y2hhbmdlLmJ1eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZXhjaGFuZ2Uuc2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkaXJlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+e2J1dHRvblRleHR9IDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfSAvPjwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vbkZsaXAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkZsaXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIiwgZm9udFNpemU6IFwiMXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxpcC1hcnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODY0NjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25Ub2dnbGVQb3NpdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVG9nZ2xlUG9zaXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIiwgZm9udFNpemU6IFwiMXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxpcC1hcnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODY0NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vblRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGNsaWNrYWJsZSBoaWRlLWZvci14bGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdMZWZ0OiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jdXJyZW50QnJpZGdlcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGJ1eS1zZWxsLWRlcG9zaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5fb25CdXkuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZXhjaGFuZ2UuYnV5c2VsbF9mb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImJhc2VcIiA6IFwicXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5nZXQoXCJzeW1ib2xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZXhjaGFuZ2UuYnV5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGlyZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJhY2tlZENvaW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBidXktc2VsbC1kZXBvc2l0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuX29uRGVwb3NpdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5idXlzZWxsX2Zvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYmFzZVwiIDogXCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmdldChcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJleGNoYW5nZS5kZXBvc2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGlyZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9uQm9ycm93ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgYnV5LXNlbGwtZGVwb3NpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQm9ycm93fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5idXlzZWxsX2Zvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYmFzZVwiIDogXCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmdldChcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJleGNoYW5nZS5ib3Jyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkaXJlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMuaXNPcGVuID8gXCJoaWRlLWNvbnRhaW5lciBcIiA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyLWZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3cgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1wYWRkaW5nIGJ1eS1zZWxsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMyBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz46XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNSBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake3R5cGV9UHJpY2VgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJpY2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLXBhZGRpbmcgYnV5LXNlbGwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0zIG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuYW1vdW50XCIgLz46XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNSBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake3R5cGV9QW1vdW50YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthbW91bnRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBidXktc2VsbC1yb3cgYm90dG9tLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMyBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnRvdGFsXCIgLz46XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNSBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Ake3R5cGV9VG90YWxgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dG90YWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTQgbm8tbWFyZ2luIG5vLW92ZXJmbG93IGJ1eS1zZWxsLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLXBhZGRpbmcgYnV5LXNlbGwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0zIG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZmVlXCIgLz46XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtNSBuby1tYXJnaW4gbm8tb3ZlcmZsb3cgYnV5LXNlbGwtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFoYXNGZWVCYWxhbmNlID8gXCJuby1iYWxhbmNlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHt0eXBlfUZlZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGFzRmVlQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zZmVyLmVycm9ycy5pbnN1ZmZpY2llbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZlZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC00IG5vLW1hcmdpbiBuby1vdmVyZmxvdyBidXktc2VsbC1ib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQXNzZXRzLmxlbmd0aCAhPT0gMSA/IDAgOiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBc3NldHMubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtiYWNrZ3JvdW5kOiBcIm5vbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmVlQXNzZXRzLmxlbmd0aCA9PT0gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmVlQXNzZXRzLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmVlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmVlQXNzZXRzLmxlbmd0aCAhPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiBidXlzZWxsLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlRmVlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0RmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IGNsZWFyLWZpeCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJ1eS1zZWxsLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9hZGRCYWxhbmNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VUb0FkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VBbW91bnQuZ2V0QW1vdW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlYWw6IHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VQcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2JhbGFuY2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJ1eS1zZWxsLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7cGFkZGluZ1RvcDogNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQmlkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmxvd2VzdF9hc2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5oaWdoZXN0X2JpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFByaWNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2V0UHJpY2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFByaWNlT2JqZWN0LnNlbGxQcmljZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17Y3VycmVudFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2UuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGUuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJidXktc2VsbC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3BhZGRpbmdUb3A6IDV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmV4cGlyYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZXhwaXJhdGlvbi1kYXRldGltZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbkV4cGlyYXRpb25UeXBlQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4cGlyYXRpb25UeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHBpcmF0aW9uc09wdGlvbnNMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5leHBpcmF0aW9uVHlwZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU1BFQ0lGSUNcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNrZXJQb3NpdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbSBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lUGlja2VyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e21pbkV4cGlyYXRpb25EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZvcm1hdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRvIE1NTSBZWVlZIGhoOm1tIEFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXhwaXJhdGlvbkN1c3RvbVRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9uRXhwaXJhdGlvbkN1c3RvbUNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCVVkvU0VMTCBidXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlZFRleHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtkaXNhYmxlZFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIGRhdGEtdGlwPXtcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2J1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTSE9SVCBidXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlZFRleHQgJiYgaXNQcmVkaWN0aW9uTWFya2V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtkaXNhYmxlZFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JjZVNlbGxUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGlzUHJlZGljdGlvbk1hcmtldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdSaWdodDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17XCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXQuYmluZCh0aGlzLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JjZVNlbGxUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTaW1wbGVEZXBvc2l0V2l0aGRyYXdcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiZGVwb3NpdF9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICBmaWF0TW9kYWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcj17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHNbaXNCaWQgPyBcImJhc2VcIiA6IFwicXVvdGVcIl0uZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW1wbGVfZGVwb3NpdF9tb2RhbFwiICsgKHR5cGUgPT09IFwiYmlkXCIgPyBcIlwiIDogXCJfYXNrXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1t0aGlzLnByb3BzLmJhbGFuY2VdfVxuICAgICAgICAgICAgICAgICAgICB7Li4uYmFja2VkQ29pbn1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgey8qIEJyaWRnZSBtb2RhbCAqL31cbiAgICAgICAgICAgICAgICA8U2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImJyaWRnZV9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImRlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcj17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYmFsYW5jZUlkfVxuICAgICAgICAgICAgICAgICAgICBtb2RhbElkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2ltcGxlX2JyaWRnZV9tb2RhbFwiICsgKHR5cGUgPT09IFwiYmlkXCIgPyBcIlwiIDogXCJfYXNrXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM9e1t0aGlzLnByb3BzLmJhbGFuY2VdfVxuICAgICAgICAgICAgICAgICAgICBicmlkZ2VzPXt0aGlzLnByb3BzLmN1cnJlbnRCcmlkZ2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoQnV5U2VsbCk7XG4iLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IHtDaGFpblZhbGlkYXRpb259IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCB7aGFzR2F0ZXdheVByZWZpeH0gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcblxuY2xhc3MgTWFya2V0UGlja2VyV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5nZXRBc3NldExpc3QgPSBkZWJvdW5jZShBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyLCAxNTApO1xuICAgIH1cblxuICAgIGluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1hcmtldHNMaXN0OiBcIlwiLFxuICAgICAgICAgICAgaXNzdWVyc0xpc3Q6IFwiXCIsXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogbnVsbCxcbiAgICAgICAgICAgIGFsbE1hcmtldHM6IFwiXCIsXG4gICAgICAgICAgICBhbGxJc3N1ZXJzOiBcIlwiLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMubWFya2V0UGlja2VyQXNzZXQgIT09IHRoaXMucHJvcHMubWFya2V0UGlja2VyQXNzZXQpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKCkpO1xuXG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2VhcmNoQXNzZXRzICE9PSB0aGlzLnByb3BzLnNlYXJjaEFzc2V0cylcbiAgICAgICAgICAgIHRoaXMuYXNzZXRGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBucC5tYXJrZXRQaWNrZXJBc3NldCAhPT0gdGhpcy5wcm9wcy5tYXJrZXRQaWNrZXJBc3NldCB8fFxuICAgICAgICAgICAgbnAuc2VhcmNoQXNzZXRzICE9PSB0aGlzLnByb3BzLnNlYXJjaEFzc2V0cyB8fFxuICAgICAgICAgICAgbnMubWFya2V0c0xpc3QgIT09IHRoaXMuc3RhdGUubWFya2V0c0xpc3QgfHxcbiAgICAgICAgICAgIG5zLmlzc3VlcnNMaXN0ICE9PSB0aGlzLnN0YXRlLmlzc3VlcnNMaXN0IHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnMsIHRoaXMuc3RhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uU2VsZWN0SXNzdWVyKGUpIHtcbiAgICAgICAgbGV0IGZpbHRlckJ5SXNzdWVyTmFtZSA9IGUudGFyZ2V0LnZhbHVlID09IFwiMFwiID8gbnVsbCA6IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLmFzc2V0RmlsdGVyKGZpbHRlckJ5SXNzdWVyTmFtZSk7XG4gICAgfVxuXG4gICAgX29uSW5wdXROYW1lKGdldEJhY2tlZEFzc2V0cywgZSkge1xuICAgICAgICBsZXQgdG9GaW5kID0gZS50YXJnZXQudmFsdWUudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxldCBpc1ZhbGlkTmFtZSA9ICFDaGFpblZhbGlkYXRpb24uaXNfdmFsaWRfc3ltYm9sX2Vycm9yKHRvRmluZCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBlLnRhcmdldC52YWx1ZS50cmltKCksXG4gICAgICAgICAgICBhY3RpdmVTZWFyY2g6IHRydWUsXG4gICAgICAgICAgICBhbGxNYXJrZXRzOiBcIlwiLFxuICAgICAgICAgICAgYWxsSXNzdWVyczogXCJcIixcbiAgICAgICAgICAgIG1hcmtldHNMaXN0OiBcIlwiLFxuICAgICAgICAgICAgaXNzdWVyc0xpc3Q6IFwiXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogRG9uJ3QgbG9va3VwIGludmFsaWQgYXNzZXQgbmFtZXMgKi9cbiAgICAgICAgaWYgKCFpc1ZhbGlkTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlU2VhcmNoOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSB0b0ZpbmQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9va3VwQXNzZXRzKHRvRmluZCwgZ2V0QmFja2VkQXNzZXRzKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgX2xvb2t1cEFzc2V0cyh2YWx1ZSwgZ2F0ZXdheUFzc2V0cyA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IFwiXCIpIHJldHVybjtcblxuICAgICAgICBsZXQgcXVvdGUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuZ2V0QXNzZXRMaXN0KHF1b3RlLCAxMCwgZ2F0ZXdheUFzc2V0cyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVTZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgbG9va3VwUXVvdGU6IHF1b3RlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGFuZ2VNYXJrZXRQaWNrZXJGaWx0ZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtYXJrZXRzTGlzdDogXCJcIixcbiAgICAgICAgICAgIGlzc3VlcnNMaXN0OiBcIlwiLFxuICAgICAgICAgICAgbG9va3VwUXVvdGU6IG51bGwsXG4gICAgICAgICAgICBhbGxNYXJrZXRzOiBcIlwiLFxuICAgICAgICAgICAgYWxsSXNzdWVyczogXCJcIixcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBtYXJrZXRQaWNrZXJUYWI6IHZhbHVlLFxuICAgICAgICAgICAgYWN0aXZlU2VhcmNoOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZmV0Y2hJc3N1ZXIoYXNzZXQpIHtcbiAgICAgICAgbGV0IGlzc3VlciA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFzc2V0Lmlzc3VlciwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgLy8gSXNzdWVyIG1heSBzb21ldGltZXMgbm90IHJlc29sdmUgYXQgZmlyc3QuXG4gICAgICAgIC8vIEEgd2FpdGVyIG1heSBiZSByZXF1aXJlZCBoZXJlXG4gICAgICAgIGlmICghaXNzdWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNzdWVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXNzZXRGaWx0ZXIoZmlsdGVyQnlJc3N1ZXJOYW1lID0gbnVsbCkge1xuICAgICAgICBsZXQge3NlYXJjaEFzc2V0cywgbWFya2V0UGlja2VyQXNzZXR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQge2lucHV0VmFsdWUsIGxvb2t1cFF1b3RlLCBtYXJrZXRQaWNrZXJUYWJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVNlYXJjaDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYXNzZXRDb3VudCA9IDA7XG4gICAgICAgIGxldCBhbGxNYXJrZXRzID0gW107XG4gICAgICAgIGxldCBhbGxJc3N1ZXJzID0gW107XG5cbiAgICAgICAgbGV0IGJhc2VTeW1ib2wgPSB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGxldCBxdW90ZVN5bWJvbCA9IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgaWYgKHNlYXJjaEFzc2V0cy5zaXplICYmICEhaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHNlYXJjaEFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5vcHRpb25zLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShhLm9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInZpc2libGVcIiBpbiBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uLnZpc2libGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuc3ltYm9sLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0Q291bnQgPiAxMDApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc3N1ZXIgPSB0aGlzLl9mZXRjaElzc3Vlcihhc3NldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2UgPSB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9IGFzc2V0LnN5bWJvbCArIFwiX1wiICsgYmFzZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNRdW90ZUFzc2V0ID0gcXVvdGVTeW1ib2wgPT0gbWFya2V0UGlja2VyQXNzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmNsdWRlQXNzZXQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgKGlzUXVvdGVBc3NldCAmJiBhc3NldC5zeW1ib2wgIT0gYmFzZVN5bWJvbCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICghaXNRdW90ZUFzc2V0ICYmIGFzc2V0LnN5bWJvbCAhPSBxdW90ZVN5bWJvbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUFzc2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoIWZpbHRlckJ5SXNzdWVyTmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5SXNzdWVyTmFtZSA9PSBpc3N1ZXIuZ2V0KFwibmFtZVwiKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgobWFya2V0UGlja2VyVGFiID09IFwic2VhcmNoXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wuc3RhcnRzV2l0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIW1hcmtldFBpY2tlclRhYiB8fCBtYXJrZXRQaWNrZXJUYWIgPT0gXCJmaWx0ZXJcIikpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsTWFya2V0cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBhc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlcjogIWlzc3VlciA/IG51bGwgOiBpc3N1ZXIuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVBc3NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhYWxsSXNzdWVycy5pbmNsdWRlcyhpc3N1ZXIuZ2V0KFwibmFtZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsSXNzdWVycy5wdXNoKGlzc3Vlci5nZXQoXCJuYW1lXCIpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXJrZXRzTGlzdCA9IHRoaXMuc3RhdGUubWFya2V0c0xpc3Q7XG4gICAgICAgIGxldCBpc3N1ZXJzTGlzdCA9IHRoaXMuc3RhdGUuaXNzdWVyc0xpc3Q7XG5cbiAgICAgICAgaXNzdWVyc0xpc3QgPSAhYWxsSXNzdWVyc1xuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IGFsbElzc3VlcnNcbiAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAubWFwKGlzc3VlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2lzc3Vlcn0gdmFsdWU9e2lzc3Vlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNzdWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbWFya2V0c0xpc3QgPSAhYWxsTWFya2V0c1xuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IGFsbE1hcmtldHNcbiAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFJc0tub3duR2F0ZXdheSA9IGhhc0dhdGV3YXlQcmVmaXgoYVsxXVtcInF1b3RlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgYklzS25vd25HYXRld2F5ID0gaGFzR2F0ZXdheVByZWZpeChiWzFdW1wicXVvdGVcIl0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGFJc0tub3duR2F0ZXdheSAmJiAhYklzS25vd25HYXRld2F5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJJc0tub3duR2F0ZXdheSAmJiAhYUlzS25vd25HYXRld2F5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVsxXVtcInF1b3RlXCJdID4gYlsxXVtcInF1b3RlXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVsxXVtcInF1b3RlXCJdIDwgYlsxXVtcInF1b3RlXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21hcmtldFswXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldFsxXVtcInF1b3RlXCJdfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uVG9nZ2xlTWFya2V0UGlja2VyKG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnN3aXRjaE1hcmtldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbCA9PSBtYXJrZXRQaWNrZXJBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYC9tYXJrZXQvJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRbMV1bXCJxdW90ZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV8ke2Jhc2VTeW1ib2x9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYC9tYXJrZXQvJHtxdW90ZVN5bWJvbH1fJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRbMV1bXCJxdW90ZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci51c2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbGxNYXJrZXRzLFxuICAgICAgICAgICAgYWxsSXNzdWVycyxcbiAgICAgICAgICAgIG1hcmtldHNMaXN0LFxuICAgICAgICAgICAgaXNzdWVyc0xpc3QsXG4gICAgICAgICAgICBhY3RpdmVTZWFyY2g6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHttYXJrZXRQaWNrZXJBc3NldH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBtYXJrZXRQaWNrZXJUYWIsXG4gICAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgYWxsTWFya2V0cyxcbiAgICAgICAgICAgIGlzc3VlcnNMaXN0LFxuICAgICAgICAgICAgbWFya2V0c0xpc3RcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2V0UGlja2VyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZXRQaWNrZXJfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtldFBpY2tlcl9fZmlsdGVyVHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmtldFBpY2tlcl9fZmlsdGVySGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zZWFyY2hfbW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUsIGN1cnNvcjogXCJwb2ludGVyXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLm1hcmtldFBpY2tlclRhYiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldFBpY2tlclRhYiA9PSBcImZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmx1ZS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMV81eFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlTWFya2V0UGlja2VyRmlsdGVyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNSwgY3Vyc29yOiBcInBvaW50ZXJcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYXJrZXRQaWNrZXJUYWIgPT0gXCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJsdWUtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjFfNXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZU1hcmtldFBpY2tlckZpbHRlci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiem9vbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy56b29tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZXRQaWNrZXJfX3RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9waWNrZXIudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2V0UGlja2VyX19zdWJIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zdWJfdGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2Fzc2V0LyR7bWFya2V0UGlja2VyQXNzZXR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJsaWdodGJsdWUgIWltcG9ydGFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldFBpY2tlckFzc2V0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibHVlLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImluZm8tY2lyY2xlLW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuaW5mb19jaXJjbGVfb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogbWFya2V0UGlja2VyVGFiID09IFwic2VhcmNoXCIgPyBcIlwiIDogXCJub25lXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9waWNrZXIuc2VhcmNoX2Zvcl9hc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0TmFtZS5iaW5kKHRoaXMsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5tYXJrZXRQaWNrZXJUYWIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldFBpY2tlclRhYiA9PSBcImZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2stbGlzdCBuby1ib3JkZXItYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5maW5kX2J5X2Fzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXROYW1lLmJpbmQodGhpcywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLm1hcmtldF9waWNrZXIuc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9waWNrZXIuZmlsdGVyX2J5X2lzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2l0aC1kcm9wZHB3blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uU2VsZWN0SXNzdWVyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT1cIjBcIiB2YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UubWFya2V0X3BpY2tlci5zaG93X2FsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc3N1ZXJzTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLWxpc3Qgbm8tYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9waWNrZXIucmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9hc3NldHM9eyFhbGxNYXJrZXRzID8gMCA6IGFsbE1hcmtldHMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVTZWFyY2ggJiZcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0VmFsdWUubGVuZ3RoICE9IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbkxlZnQ6IDB9fT57bWFya2V0c0xpc3R9PC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgTWFya2V0UGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TWFya2V0UGlja2VyV3JhcHBlciB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5NYXJrZXRQaWNrZXIgPSBjb25uZWN0KFxuICAgIE1hcmtldFBpY2tlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBc3NldFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlYXJjaEFzc2V0czogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0cyxcbiAgICAgICAgICAgICAgICBhc3NldHNMb2FkaW5nOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzTG9hZGluZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtldFBpY2tlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFRyYWRpbmdWaWV3ID0gcmVxdWlyZShcIi4uLy4uLy4uL2NoYXJ0aW5nX2xpYnJhcnkvY2hhcnRpbmdfbGlicmFyeS5taW4uanNcIik7XG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvY29sb3JzXCI7XG5pbXBvcnQge2dldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMsIGdldFRWVGltZXpvbmV9IGZyb20gXCIuL3RyYWRpbmdWaWV3Q2xhc3Nlc1wiO1xuXG4vLyBpbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbi8vIGltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhZGluZ1ZpZXdQcmljZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBsb2FkVHJhZGluZ1ZpZXcocHJvcHMpIHtcbiAgICAgICAgY29uc3Qge2RhdGFGZWVkfSA9IHByb3BzO1xuICAgICAgICBsZXQgdGhlbWVDb2xvcnMgPSBjb2xvcnNbcHJvcHMudGhlbWVdO1xuXG4gICAgICAgIGlmICghZGF0YUZlZWQpIHJldHVybjtcbiAgICAgICAgaWYgKCEhdGhpcy50dldpZGdldCkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChfX0RFVl9fKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50UmVzb2x1dGlvblwiLFxuICAgICAgICAgICAgICAgIGdldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMoW3Byb3BzLmJ1Y2tldFNpemVdKVswXSxcbiAgICAgICAgICAgICAgICBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgIHByb3BzLnF1b3RlU3ltYm9sICsgXCJfXCIgKyBwcm9wcy5iYXNlU3ltYm9sLFxuICAgICAgICAgICAgICAgIFwidGltZXpvbmU6XCIsXG4gICAgICAgICAgICAgICAgZ2V0VFZUaW1lem9uZSgpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGRhdGFGZWVkLnVwZGF0ZSh7XG4gICAgICAgICAgICByZXNvbHV0aW9uczogcHJvcHMuYnVja2V0cyxcbiAgICAgICAgICAgIHRpY2tlcjogcHJvcHMucXVvdGVTeW1ib2wgKyBcIl9cIiArIHByb3BzLmJhc2VTeW1ib2wsXG4gICAgICAgICAgICBpbnRlcnZhbDogZ2V0UmVzb2x1dGlvbnNGcm9tQnVja2V0cyhbcHJvcHMuYnVja2V0U2l6ZV0pWzBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfX0RFVl9fKSBjb25zb2xlLmxvZyhcIioqKiBMb2FkIENoYXJ0ICoqKlwiKTtcbiAgICAgICAgaWYgKF9fREVWX18pIGNvbnNvbGUudGltZShcIioqKiBDaGFydCBsb2FkIHRpbWU6IFwiKTtcblxuICAgICAgICBsZXQgZGlzYWJsZWRfZmVhdHVyZXMgPSBbXG4gICAgICAgICAgICBcImhlYWRlcl9zYXZlbG9hZFwiLFxuICAgICAgICAgICAgXCJzeW1ib2xfaW5mb1wiLFxuICAgICAgICAgICAgXCJzeW1ib2xfc2VhcmNoX2hvdF9rZXlcIixcbiAgICAgICAgICAgIFwiYm9yZGVyX2Fyb3VuZF90aGVfY2hhcnRcIixcbiAgICAgICAgICAgIFwiaGVhZGVyX3N5bWJvbF9zZWFyY2hcIixcbiAgICAgICAgICAgIFwiaGVhZGVyX2NvbXBhcmVcIlxuICAgICAgICBdO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2JpbGUpIHtcbiAgICAgICAgICAgIGRpc2FibGVkX2ZlYXR1cmVzLnB1c2goXCJjaGFydF9zY3JvbGxcIik7XG4gICAgICAgICAgICBkaXNhYmxlZF9mZWF0dXJlcy5wdXNoKFwiY2hhcnRfem9vbVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHZXaWRnZXQgPSBuZXcgVHJhZGluZ1ZpZXcud2lkZ2V0KHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgc3ltYm9sOiBwcm9wcy5xdW90ZVN5bWJvbCArIFwiX1wiICsgcHJvcHMuYmFzZVN5bWJvbCxcbiAgICAgICAgICAgIGludGVydmFsOiBnZXRSZXNvbHV0aW9uc0Zyb21CdWNrZXRzKFtwcm9wcy5idWNrZXRTaXplXSlbMF0sXG4gICAgICAgICAgICBsaWJyYXJ5X3BhdGg6IGAke1xuICAgICAgICAgICAgICAgIF9fRUxFQ1RST05fXyA/IF9fQkFTRV9VUkxfXyA6IFwiXCJcbiAgICAgICAgICAgIH0vY2hhcnRpbmdfbGlicmFyeS9gLFxuICAgICAgICAgICAgZGF0YWZlZWQ6IGRhdGFGZWVkLFxuICAgICAgICAgICAgY29udGFpbmVyX2lkOiBcInR2X2NoYXJ0XCIsXG4gICAgICAgICAgICBjaGFydHNfc3RvcmFnZV91cmw6IFwiaHR0cHM6Ly9zYXZlbG9hZC50cmFkaW5ndmlldy5jb21cIixcbiAgICAgICAgICAgIGNoYXJ0c19zdG9yYWdlX2FwaV92ZXJzaW9uOiBcIjEuMVwiLFxuICAgICAgICAgICAgY2xpZW50X2lkOiBcInRyYWRpbmd2aWV3LmNvbVwiLFxuICAgICAgICAgICAgdXNlcl9pZDogXCJwdWJsaWNfdXNlcl9pZFwiLFxuICAgICAgICAgICAgYXV0b3NpemU6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHByb3BzLmxvY2FsZSxcbiAgICAgICAgICAgIHRpbWV6b25lOiBnZXRUVlRpbWV6b25lKCksXG4gICAgICAgICAgICB0b29sYmFyX2JnOiB0aGVtZUNvbG9ycy5iZ0NvbG9yLFxuICAgICAgICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICAgICAgXCJwYW5lUHJvcGVydGllcy5iYWNrZ3JvdW5kXCI6IHRoZW1lQ29sb3JzLmJnQ29sb3IsXG4gICAgICAgICAgICAgICAgXCJwYW5lUHJvcGVydGllcy5ob3J6R3JpZFByb3BlcnRpZXMuY29sb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhlbWVDb2xvcnMuYXhpc0xpbmVDb2xvcixcbiAgICAgICAgICAgICAgICBcInBhbmVQcm9wZXJ0aWVzLnZlcnRHcmlkUHJvcGVydGllcy5jb2xvclwiOlxuICAgICAgICAgICAgICAgICAgICB0aGVtZUNvbG9ycy5heGlzTGluZUNvbG9yLFxuICAgICAgICAgICAgICAgIFwic2NhbGVzUHJvcGVydGllcy5saW5lQ29sb3JcIjogdGhlbWVDb2xvcnMuYXhpc0xpbmVDb2xvcixcbiAgICAgICAgICAgICAgICBcInNjYWxlc1Byb3BlcnRpZXMudGV4dENvbG9yXCI6IHRoZW1lQ29sb3JzLnRleHRDb2xvclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1c3RvbV9jc3NfdXJsOiBwcm9wcy50aGVtZSArIFwiLmNzc1wiLFxuICAgICAgICAgICAgZW5hYmxlZF9mZWF0dXJlczogW1xuICAgICAgICAgICAgICAgIFwic3R1ZHlfdGVtcGxhdGVzXCIsXG4gICAgICAgICAgICAgICAgXCJrZWVwX2xlZnRfdG9vbGJhcl92aXNpYmxlX29uX3NtYWxsX3NjcmVlbnNcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRpc2FibGVkX2ZlYXR1cmVzOiBkaXNhYmxlZF9mZWF0dXJlcyxcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgICAgIHByZXNldDogdGhpcy5wcm9wcy5tb2JpbGUgPyBcIm1vYmlsZVwiIDogXCJcIlxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnR2V2lkZ2V0Lm9uQ2hhcnRSZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoX19ERVZfXykgY29uc29sZS5sb2coXCIqKiogQ2hhcnQgUmVhZHkgKioqXCIpO1xuICAgICAgICAgICAgaWYgKF9fREVWX18pIGNvbnNvbGUudGltZUVuZChcIioqKiBDaGFydCBsb2FkIHRpbWU6IFwiKTtcbiAgICAgICAgICAgIGRhdGFGZWVkLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgb25NYXJrZXRDaGFuZ2U6IHRoaXMuX3NldFN5bWJvbC5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAoIW5wLm1hcmtldFJlYWR5KSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5kYXRhRmVlZCAmJiBucC5kYXRhRmVlZCkge1xuICAgICAgICAgICAgbG9hZFRyYWRpbmdWaWV3KG5wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zZXRTeW1ib2wodGlja2VyKSB7XG4gICAgICAgIGlmICh0aGlzLnR2V2lkZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnR2V2lkZ2V0LnNldFN5bWJvbChcbiAgICAgICAgICAgICAgICB0aWNrZXIsXG4gICAgICAgICAgICAgICAgZ2V0UmVzb2x1dGlvbnNGcm9tQnVja2V0cyhbdGhpcy5wcm9wcy5idWNrZXRTaXplXSlbMF1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkVHJhZGluZ1ZpZXcodGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGF0YUZlZWQuY2xlYXJTdWJzKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIGlmIChucC5jaGFydEhlaWdodCAhPT0gdGhpcy5wcm9wcy5jaGFydEhlaWdodCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghIXRoaXMudHZXaWRnZXQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCFucC5tYXJrZXRSZWFkeSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1ib3JkZXJlZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5jaGFydEhlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBpZD1cInR2X2NoYXJ0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/ZShleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sZSk6ZSh0LlRyYWRpbmdWaWV3PXQuVHJhZGluZ1ZpZXd8fHt9KX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKHQsbyl7dmFyIGk9bih7fSx0KTtmb3IodmFyIHMgaW4gbylcIm9iamVjdFwiIT10eXBlb2YgdFtzXXx8bnVsbD09PXRbc118fEFycmF5LmlzQXJyYXkodFtzXSk/dm9pZCAwIT09b1tzXSYmKGlbc109b1tzXSk6aVtzXT1lKHRbc10sb1tzXSk7cmV0dXJuIGl9ZnVuY3Rpb24gbygpe3JldHVyblwiMS4xMiAoaW50ZXJuYWwgaWQgNjMwYjcwNGEgQCAyMDE4LTA2LTA2IDAyOjE2OjExLjMwNTUwOSlcIn1mdW5jdGlvbiBpKHQpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLHQsITEpfXZhciBuPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxvPWFyZ3VtZW50cyxpPTEsbj1hcmd1bWVudHMubGVuZ3RoO2k8bjtpKyspe2U9b1tpXTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmKHRbc109ZVtzXSl9cmV0dXJuIHR9LHM9e21vYmlsZTp7ZGlzYWJsZWRfZmVhdHVyZXM6W1wibGVmdF90b29sYmFyXCIsXCJoZWFkZXJfd2lkZ2V0XCIsXCJ0aW1lZnJhbWVzX3Rvb2xiYXJcIixcImVkaXRfYnV0dG9uc19pbl9sZWdlbmRcIixcImNvbnRleHRfbWVudXNcIixcImNvbnRyb2xfYmFyXCIsXCJib3JkZXJfYXJvdW5kX3RoZV9jaGFydFwiXSxlbmFibGVkX2ZlYXR1cmVzOltdfX0scj17d2lkdGg6ODAwLGhlaWdodDo1MDAsc3ltYm9sOlwiQUFcIixpbnRlcnZhbDpcIkRcIix0aW1lem9uZTpcIlVUQ1wiLGNvbnRhaW5lcl9pZDpcIlwiLGxpYnJhcnlfcGF0aDpcIlwiLGxvY2FsZTpcImVuXCIsd2lkZ2V0YmFyOntkZXRhaWxzOiExLHdhdGNobGlzdDohMSx3YXRjaGxpc3Rfc2V0dGluZ3M6e2RlZmF1bHRfc3ltYm9sczpbXX19LG92ZXJyaWRlczp7XCJtYWluU2VyaWVzUHJvcGVydGllcy5zaG93Q291bnRkb3duXCI6ITF9LHN0dWRpZXNfb3ZlcnJpZGVzOnt9LGJyb2tlckNvbmZpZzp7Y29uZmlnRmxhZ3M6e319LGZ1bGxzY3JlZW46ITEsYXV0b3NpemU6ITEsZGlzYWJsZWRfZmVhdHVyZXM6W10sZW5hYmxlZF9mZWF0dXJlczpbXSxkZWJ1ZzohMSxsb2dvOnt9LHRpbWVfZnJhbWVzOlt7dGV4dDpcIjV5XCIscmVzb2x1dGlvbjpcIldcIn0se3RleHQ6XCIxeVwiLHJlc29sdXRpb246XCJXXCJ9LHt0ZXh0OlwiNm1cIixyZXNvbHV0aW9uOlwiMTIwXCJ9LHt0ZXh0OlwiM21cIixyZXNvbHV0aW9uOlwiNjBcIn0se3RleHQ6XCIxbVwiLHJlc29sdXRpb246XCIzMFwifSx7dGV4dDpcIjVkXCIscmVzb2x1dGlvbjpcIjVcIn0se3RleHQ6XCIxZFwiLHJlc29sdXRpb246XCIxXCJ9XSxjbGllbnRfaWQ6XCIwXCIsdXNlcl9pZDpcIjBcIixjaGFydHNfc3RvcmFnZV9hcGlfdmVyc2lvbjpcIjEuMFwiLGZhdm9yaXRlczp7aW50ZXJ2YWxzOltdLGNoYXJ0VHlwZXM6W119fSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtpZih0aGlzLl9pZD1cInRyYWRpbmd2aWV3X1wiKygxMDQ4NTc2KigxK01hdGgucmFuZG9tKCkpfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSksdGhpcy5fcmVhZHk9ITEsdGhpcy5fcmVhZHlIYW5kbGVycz1bXSx0aGlzLl9vbldpbmRvd1Jlc2l6ZT10aGlzLl9hdXRvUmVzaXplQ2hhcnQuYmluZCh0aGlzKSwhdC5kYXRhZmVlZCl0aHJvdyBuZXcgRXJyb3IoXCJEYXRhZmVlZCBpcyBub3QgZGVmaW5lZFwiKTtpZih0aGlzLl9vcHRpb25zPWUocix0KSx0LnByZXNldCl7dmFyIG89c1t0LnByZXNldF07bz8odm9pZCAwIT09dGhpcy5fb3B0aW9ucy5kaXNhYmxlZF9mZWF0dXJlcz90aGlzLl9vcHRpb25zLmRpc2FibGVkX2ZlYXR1cmVzPXRoaXMuX29wdGlvbnMuZGlzYWJsZWRfZmVhdHVyZXMuY29uY2F0KG8uZGlzYWJsZWRfZmVhdHVyZXMpOnRoaXMuX29wdGlvbnMuZGlzYWJsZWRfZmVhdHVyZXM9by5kaXNhYmxlZF9mZWF0dXJlcyx2b2lkIDAhPT10aGlzLl9vcHRpb25zLmVuYWJsZWRfZmVhdHVyZXM/dGhpcy5fb3B0aW9ucy5lbmFibGVkX2ZlYXR1cmVzPXRoaXMuX29wdGlvbnMuZW5hYmxlZF9mZWF0dXJlcy5jb25jYXQoby5lbmFibGVkX2ZlYXR1cmVzKTp0aGlzLl9vcHRpb25zLmVuYWJsZWRfZmVhdHVyZXM9by5lbmFibGVkX2ZlYXR1cmVzKTpjb25zb2xlLndhcm4oXCJVbmtub3duIHByZXNldDogYFwiK3QucHJlc2V0K1wiYFwiKX10aGlzLl9jcmVhdGUoKX1yZXR1cm4gdC5wcm90b3R5cGUub25DaGFydFJlYWR5PWZ1bmN0aW9uKHQpe3RoaXMuX3JlYWR5P3QuY2FsbCh0aGlzKTp0aGlzLl9yZWFkeUhhbmRsZXJzLnB1c2godCl9LHQucHJvdG90eXBlLm9uR3JheWVkT2JqZWN0Q2xpY2tlZD1mdW5jdGlvbih0KXt0aGlzLl9pbm5lckFQSSgpLm9uR3JheWVkT2JqZWN0Q2xpY2tlZCh0KX0sdC5wcm90b3R5cGUub25TaG9ydGN1dD1mdW5jdGlvbih0LGUpe3RoaXMuX2lubmVyV2luZG93KCkuY3JlYXRlU2hvcnRjdXRBY3Rpb24odCxlKX0sdC5wcm90b3R5cGUuc3Vic2NyaWJlPWZ1bmN0aW9uKHQsZSl7dGhpcy5faW5uZXJBUEkoKS5zdWJzY3JpYmUodCxlKX0sdC5wcm90b3R5cGUudW5zdWJzY3JpYmU9ZnVuY3Rpb24odCxlKXt0aGlzLl9pbm5lckFQSSgpLnVuc3Vic2NyaWJlKHQsZSl9LHQucHJvdG90eXBlLmNoYXJ0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9pbm5lckFQSSgpLmNoYXJ0KHQpfSx0LnByb3RvdHlwZS5zZXRMYW5ndWFnZT1mdW5jdGlvbih0KXt0aGlzLnJlbW92ZSgpLHRoaXMuX29wdGlvbnMubG9jYWxlPXQsdGhpcy5fY3JlYXRlKCl9LHQucHJvdG90eXBlLnNldFN5bWJvbD1mdW5jdGlvbih0LGUsbyl7dGhpcy5faW5uZXJBUEkoKS5jaGFuZ2VTeW1ib2wodCxlK1wiXCIsbyl9LHQucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fb25XaW5kb3dSZXNpemUpLHRoaXMuX3JlYWR5SGFuZGxlcnMuc3BsaWNlKDAsdGhpcy5fcmVhZHlIYW5kbGVycy5sZW5ndGgpLGRlbGV0ZSB3aW5kb3dbdGhpcy5faWRdO3ZhciB0PXRoaXMuX2dldElGcmFtZUVsZW1lbnQoKTt0LmNvbnRlbnRXaW5kb3cuZGVzdHJveUNoYXJ0KCksdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCl9LHQucHJvdG90eXBlLmNsb3NlUG9wdXBzQW5kRGlhbG9ncz1mdW5jdGlvbigpe3RoaXMuX2lubmVyQVBJKCkuY2xvc2VQb3B1cHNBbmREaWFsb2dzKCl9LHQucHJvdG90eXBlLnNlbGVjdExpbmVUb29sPWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyQVBJKCkuc2VsZWN0TGluZVRvb2wodCl9LHQucHJvdG90eXBlLnNlbGVjdGVkTGluZVRvb2w9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS5zZWxlY3RlZExpbmVUb29sKCl9LHQucHJvdG90eXBlLnNhdmU9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJBUEkoKS5zYXZlQ2hhcnQodCl9LHQucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24odCxlKXt0aGlzLl9pbm5lckFQSSgpLmxvYWRDaGFydCh7anNvbjp0LGV4dGVuZGVkRGF0YTplfSl9LHQucHJvdG90eXBlLmdldFNhdmVkQ2hhcnRzPWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyQVBJKCkuZ2V0U2F2ZWRDaGFydHModCl9LHQucHJvdG90eXBlLmxvYWRDaGFydEZyb21TZXJ2ZXI9ZnVuY3Rpb24odCl7dGhpcy5faW5uZXJBUEkoKS5sb2FkQ2hhcnRGcm9tU2VydmVyKHQpfSx0LnByb3RvdHlwZS5zYXZlQ2hhcnRUb1NlcnZlcj1mdW5jdGlvbih0LGUsbyxpKXt0aGlzLl9pbm5lckFQSSgpLnNhdmVDaGFydFRvU2VydmVyKHQsZSxvLGkpfSx0LnByb3RvdHlwZS5yZW1vdmVDaGFydEZyb21TZXJ2ZXI9ZnVuY3Rpb24odCxlKXt0aGlzLl9pbm5lckFQSSgpLnJlbW92ZUNoYXJ0RnJvbVNlcnZlcih0LGUpfSx0LnByb3RvdHlwZS5vbkNvbnRleHRNZW51PWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyQVBJKCkub25Db250ZXh0TWVudSh0KX0sdC5wcm90b3R5cGUuY3JlYXRlQnV0dG9uPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9pbm5lcldpbmRvdygpLmNyZWF0ZUJ1dHRvbih0KX0sdC5wcm90b3R5cGUuc2hvd05vdGljZURpYWxvZz1mdW5jdGlvbih0KXt0aGlzLl9pbm5lckFQSSgpLnNob3dOb3RpY2VEaWFsb2codCl9LHQucHJvdG90eXBlLnNob3dDb25maXJtRGlhbG9nPWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyQVBJKCkuc2hvd0NvbmZpcm1EaWFsb2codCl9LHQucHJvdG90eXBlLnNob3dMb2FkQ2hhcnREaWFsb2c9ZnVuY3Rpb24oKXt0aGlzLl9pbm5lckFQSSgpLnNob3dMb2FkQ2hhcnREaWFsb2coKX0sdC5wcm90b3R5cGUuc2hvd1NhdmVBc0NoYXJ0RGlhbG9nPWZ1bmN0aW9uKCl7dGhpcy5faW5uZXJBUEkoKS5zaG93U2F2ZUFzQ2hhcnREaWFsb2coKX0sdC5wcm90b3R5cGUuc3ltYm9sSW50ZXJ2YWw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS5nZXRTeW1ib2xJbnRlcnZhbCgpfSx0LnByb3RvdHlwZS5tYWluU2VyaWVzUHJpY2VGb3JtYXR0ZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS5tYWluU2VyaWVzUHJpY2VGb3JtYXR0ZXIoKX0sdC5wcm90b3R5cGUuZ2V0SW50ZXJ2YWxzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkuZ2V0SW50ZXJ2YWxzKCl9LHQucHJvdG90eXBlLmdldFN0dWRpZXNMaXN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkuZ2V0U3R1ZGllc0xpc3QoKX0sdC5wcm90b3R5cGUuYWRkQ3VzdG9tQ1NTRmlsZT1mdW5jdGlvbih0KXt0aGlzLl9pbm5lcldpbmRvdygpLmFkZEN1c3RvbUNTU0ZpbGUodCl9LHQucHJvdG90eXBlLmFwcGx5T3ZlcnJpZGVzPWZ1bmN0aW9uKHQpe3RoaXMuX29wdGlvbnM9ZSh0aGlzLl9vcHRpb25zLHtvdmVycmlkZXM6dH0pLHRoaXMuX2lubmVyV2luZG93KCkuYXBwbHlPdmVycmlkZXModCl9LHQucHJvdG90eXBlLmFwcGx5U3R1ZGllc092ZXJyaWRlcz1mdW5jdGlvbih0KXt0aGlzLl9pbm5lcldpbmRvdygpLmFwcGx5U3R1ZGllc092ZXJyaWRlcyh0KX0sdC5wcm90b3R5cGUud2F0Y2hMaXN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkud2F0Y2hsaXN0KCl9LHQucHJvdG90eXBlLmFjdGl2ZUNoYXJ0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lubmVyQVBJKCkuYWN0aXZlQ2hhcnQoKX0sdC5wcm90b3R5cGUuY2hhcnRzQ291bnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS5jaGFydHNDb3VudCgpfSx0LnByb3RvdHlwZS5sYXlvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faW5uZXJBUEkoKS5sYXlvdXQoKX0sdC5wcm90b3R5cGUuc2V0TGF5b3V0PWZ1bmN0aW9uKHQpe3RoaXMuX2lubmVyQVBJKCkuc2V0TGF5b3V0KHQpfSx0LnByb3RvdHlwZS5fZ2V0SUZyYW1lRWxlbWVudD1mdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2lkKTtpZihudWxsPT09dCl0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyBzdWNoIGlmcmFtZVwiKTtyZXR1cm4gdH0sdC5wcm90b3R5cGUuX2lubmVyQVBJPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2dldElGcmFtZUVsZW1lbnQoKS5jb250ZW50V2luZG93LnRyYWRpbmdWaWV3QXBpfSx0LnByb3RvdHlwZS5faW5uZXJXaW5kb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZ2V0SUZyYW1lRWxlbWVudCgpLmNvbnRlbnRXaW5kb3d9LHQucHJvdG90eXBlLl9hdXRvUmVzaXplQ2hhcnQ9ZnVuY3Rpb24oKXt0aGlzLl9vcHRpb25zLmZ1bGxzY3JlZW4mJih0aGlzLl9nZXRJRnJhbWVFbGVtZW50KCkuc3R5bGUuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodCtcInB4XCIpfSx0LnByb3RvdHlwZS5fY3JlYXRlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXRoaXMuX3JlbmRlcigpLG89ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fb3B0aW9ucy5jb250YWluZXJfaWQpO2lmKG51bGw9PT1vKXRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIHN1Y2ggZWxlbWVudCAtICNcIit0aGlzLl9vcHRpb25zLmNvbnRhaW5lcl9pZCk7by5pbm5lckhUTUw9ZTt2YXIgaT10aGlzLl9nZXRJRnJhbWVFbGVtZW50KCk7KHRoaXMuX29wdGlvbnMuYXV0b3NpemV8fHRoaXMuX29wdGlvbnMuZnVsbHNjcmVlbikmJihpLnN0eWxlLndpZHRoPVwiMTAwJVwiLHRoaXMuX29wdGlvbnMuZnVsbHNjcmVlbnx8KGkuc3R5bGUuaGVpZ2h0PVwiMTAwJVwiKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9vbldpbmRvd1Jlc2l6ZSksdGhpcy5fb25XaW5kb3dSZXNpemUoKTt2YXIgbj1mdW5jdGlvbigpe2kucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixuLCExKSxpLmNvbnRlbnRXaW5kb3cud2lkZ2V0UmVhZHkoZnVuY3Rpb24oKXt0Ll9yZWFkeT0hMDtmb3IodmFyIGU9MCxvPXQuX3JlYWR5SGFuZGxlcnM7ZTxvLmxlbmd0aDtlKyspe29bZV0uY2FsbCh0KX1pLmNvbnRlbnRXaW5kb3cuaW5pdGlhbGl6YXRpb25GaW5pc2hlZCgpfSl9O2kuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixuLCExKX0sdC5wcm90b3R5cGUuX3JlbmRlcj1mdW5jdGlvbigpe3ZhciB0PXdpbmRvdzt0W3RoaXMuX2lkXT17ZGF0YWZlZWQ6dGhpcy5fb3B0aW9ucy5kYXRhZmVlZCxjdXN0b21Gb3JtYXR0ZXJzOnRoaXMuX29wdGlvbnMuY3VzdG9tRm9ybWF0dGVycyxicm9rZXJGYWN0b3J5OnRoaXMuX29wdGlvbnMuYnJva2VyRmFjdG9yeSxvdmVycmlkZXM6dGhpcy5fb3B0aW9ucy5vdmVycmlkZXMsc3R1ZGllc092ZXJyaWRlczp0aGlzLl9vcHRpb25zLnN0dWRpZXNfb3ZlcnJpZGVzLGRpc2FibGVkRmVhdHVyZXM6dGhpcy5fb3B0aW9ucy5kaXNhYmxlZF9mZWF0dXJlcyxlbmFibGVkRmVhdHVyZXM6dGhpcy5fb3B0aW9ucy5lbmFibGVkX2ZlYXR1cmVzLGJyb2tlckNvbmZpZzp0aGlzLl9vcHRpb25zLmJyb2tlckNvbmZpZyxyZXN0Q29uZmlnOnRoaXMuX29wdGlvbnMucmVzdENvbmZpZyxmYXZvcml0ZXM6dGhpcy5fb3B0aW9ucy5mYXZvcml0ZXMsbG9nbzp0aGlzLl9vcHRpb25zLmxvZ28sbnVtZXJpY19mb3JtYXR0aW5nOnRoaXMuX29wdGlvbnMubnVtZXJpY19mb3JtYXR0aW5nLHJzc19uZXdzX2ZlZWQ6dGhpcy5fb3B0aW9ucy5yc3NfbmV3c19mZWVkLG5ld3NQcm92aWRlcjp0aGlzLl9vcHRpb25zLm5ld3NfcHJvdmlkZXIsbG9hZExhc3RDaGFydDp0aGlzLl9vcHRpb25zLmxvYWRfbGFzdF9jaGFydCxzYXZlTG9hZEFkYXB0ZXI6dGhpcy5fb3B0aW9ucy5zYXZlX2xvYWRfYWRhcHRlcixsb2FkaW5nX3NjcmVlbjp0aGlzLl9vcHRpb25zLmxvYWRpbmdfc2NyZWVuLHNldHRpbmdzQWRhcHRlcjp0aGlzLl9vcHRpb25zLnNldHRpbmdzX2FkYXB0ZXJ9LHRoaXMuX29wdGlvbnMuc2F2ZWRfZGF0YSYmKHRbdGhpcy5faWRdLmNoYXJ0Q29udGVudD17anNvbjp0aGlzLl9vcHRpb25zLnNhdmVkX2RhdGF9KTt2YXIgZT0odGhpcy5fb3B0aW9ucy5saWJyYXJ5X3BhdGh8fFwiXCIpK1wic3RhdGljL3R2LWNoYXJ0LjYzMGI3MDRhMmI5ZDBlYWYxNTkzLmh0bWwjbG9jYWxzZXJ2ZXI9MSZzeW1ib2w9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMuc3ltYm9sKStcIiZpbnRlcnZhbD1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy5pbnRlcnZhbCkrKHRoaXMuX29wdGlvbnMudGltZWZyYW1lP1wiJnRpbWVmcmFtZT1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy50aW1lZnJhbWUpOlwiXCIpKyh0aGlzLl9vcHRpb25zLnRvb2xiYXJfYmc/XCImdG9vbGJhcmJnPVwiK3RoaXMuX29wdGlvbnMudG9vbGJhcl9iZy5yZXBsYWNlKFwiI1wiLFwiXCIpOlwiXCIpKyh0aGlzLl9vcHRpb25zLnN0dWRpZXNfYWNjZXNzP1wiJnN0dWRpZXNBY2Nlc3M9XCIrZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHRoaXMuX29wdGlvbnMuc3R1ZGllc19hY2Nlc3MpKTpcIlwiKStcIiZ3aWRnZXRiYXI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHRoaXMuX29wdGlvbnMud2lkZ2V0YmFyKSkrKHRoaXMuX29wdGlvbnMuZHJhd2luZ3NfYWNjZXNzP1wiJmRyYXdpbmdzQWNjZXNzPVwiK2VuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0aGlzLl9vcHRpb25zLmRyYXdpbmdzX2FjY2VzcykpOlwiXCIpK1wiJnRpbWVGcmFtZXM9XCIrZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHRoaXMuX29wdGlvbnMudGltZV9mcmFtZXMpKStcIiZsb2NhbGU9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMubG9jYWxlKStcIiZ1aWQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX2lkKStcIiZjbGllbnRJZD1cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHRoaXMuX29wdGlvbnMuY2xpZW50X2lkKSkrXCImdXNlcklkPVwiK2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodGhpcy5fb3B0aW9ucy51c2VyX2lkKSkrKHRoaXMuX29wdGlvbnMuY2hhcnRzX3N0b3JhZ2VfdXJsP1wiJmNoYXJ0c1N0b3JhZ2VVcmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMuY2hhcnRzX3N0b3JhZ2VfdXJsKTpcIlwiKSsodGhpcy5fb3B0aW9ucy5jaGFydHNfc3RvcmFnZV9hcGlfdmVyc2lvbj9cIiZjaGFydHNTdG9yYWdlVmVyPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLmNoYXJ0c19zdG9yYWdlX2FwaV92ZXJzaW9uKTpcIlwiKSsodGhpcy5fb3B0aW9ucy5pbmRpY2F0b3JzX2ZpbGVfbmFtZT9cIiZpbmRpY2F0b3JzRmlsZT1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy5pbmRpY2F0b3JzX2ZpbGVfbmFtZSk6XCJcIikrKHRoaXMuX29wdGlvbnMuY3VzdG9tX2Nzc191cmw/XCImY3VzdG9tQ1NTPVwiK2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9vcHRpb25zLmN1c3RvbV9jc3NfdXJsKTpcIlwiKSsodGhpcy5fb3B0aW9ucy5hdXRvX3NhdmVfZGVsYXk/XCImYXV0b1NhdmVEZWxheT1cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHRoaXMuX29wdGlvbnMuYXV0b19zYXZlX2RlbGF5KSk6XCJcIikrXCImZGVidWc9XCIrdGhpcy5fb3B0aW9ucy5kZWJ1ZysodGhpcy5fb3B0aW9ucy5zbmFwc2hvdF91cmw/XCImc25hcHNob3RVcmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX29wdGlvbnMuc25hcHNob3RfdXJsKTpcIlwiKSsodGhpcy5fb3B0aW9ucy50aW1lem9uZT9cIiZ0aW1lem9uZT1cIitlbmNvZGVVUklDb21wb25lbnQodGhpcy5fb3B0aW9ucy50aW1lem9uZSk6XCJcIikrKHRoaXMuX29wdGlvbnMuc3R1ZHlfY291bnRfbGltaXQ/XCImc3R1ZHlDb3VudExpbWl0PVwiK2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodGhpcy5fb3B0aW9ucy5zdHVkeV9jb3VudF9saW1pdCkpOlwiXCIpKyh0aGlzLl9vcHRpb25zLnN5bWJvbF9zZWFyY2hfcmVxdWVzdF9kZWxheT9cIiZzc3JlcWRlbGF5PVwiK2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodGhpcy5fb3B0aW9ucy5zeW1ib2xfc2VhcmNoX3JlcXVlc3RfZGVsYXkpKTpcIlwiKTtyZXR1cm4nPGlmcmFtZSBpZD1cIicrdGhpcy5faWQrJ1wiIG5hbWU9XCInK3RoaXMuX2lkKydcIiAgc3JjPVwiJytlKydcIicrKHRoaXMuX29wdGlvbnMuYXV0b3NpemV8fHRoaXMuX29wdGlvbnMuZnVsbHNjcmVlbj9cIlwiOicgd2lkdGg9XCInK3RoaXMuX29wdGlvbnMud2lkdGgrJ1wiIGhlaWdodD1cIicrdGhpcy5fb3B0aW9ucy5oZWlnaHQrJ1wiJykrJyBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd1RyYW5zcGFyZW5jeT1cInRydWVcIiBzY3JvbGxpbmc9XCJub1wiIGFsbG93ZnVsbHNjcmVlbiBzdHlsZT1cImRpc3BsYXk6YmxvY2s7XCI+PC9pZnJhbWU+J30sdH0oKSxkPWE7d2luZG93LlRyYWRpbmdWaWV3PXdpbmRvdy5UcmFkaW5nVmlld3x8e30sd2luZG93LlRyYWRpbmdWaWV3LnZlcnNpb249byx0LnZlcnNpb249byx0Lm9ucmVhZHk9aSx0LndpZGdldD1kLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBtaWRuaWdodFRoZW1lOiB7XG4gICAgICAgIGJpZENvbG9yOiBcIiM1MEQyQzJcIixcbiAgICAgICAgYmlkRmlsbENvbG9yOiBcInJnYmEoODAsIDIxMCwgMTk0LCAwLjUpXCIsXG4gICAgICAgIGFza0NvbG9yOiBcIiNFMzc0NUJcIixcbiAgICAgICAgYXNrRmlsbENvbG9yOiBcInJnYmEoMjI3LCAxMTYsIDkxLCAwLjUpXCIsXG4gICAgICAgIGNhbGxDb2xvcjogXCIjQkJCRjJCXCIsXG4gICAgICAgIHNldHRsZUNvbG9yOiBcInJnYmEoMTI1LCAxMzQsIDIxNCwgMSlcIixcbiAgICAgICAgc2V0dGxlRmlsbENvbG9yOiBcInJnYmEoMTI1LCAxMzQsIDIxNCwgMC41KVwiLFxuICAgICAgICBwb3NpdGl2ZUNvbG9yOiBcIiM2QkE1ODNcIixcbiAgICAgICAgbmVnYXRpdmVDb2xvcjogXCIjREIwMDAwXCIsXG4gICAgICAgIHN0cm9rZUNvbG9yOiBcIiNGRkZGMDBcIixcbiAgICAgICAgcHJpbWFyeVRleHQ6IFwiI2UwZTBlMFwiLFxuICAgICAgICB2b2x1bWVDb2xvcjogXCIjODQ4NDg0XCIsXG5cbiAgICAgICAgLy90b29sdGlwXG4gICAgICAgIHRvb2x0aXBCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjQpXCIsXG4gICAgICAgIHRvb2x0aXBDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIHRvb2x0aXBGaWxsQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAvL2F4aXNcbiAgICAgICAgYXhpc0xhYmVsc0NvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgYXhpc0xpbmVDb2xvcjogXCJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMylcIixcbiAgICAgICAgaW5kaWNhdG9yTGluZUNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgICAgYmdDb2xvcjogXCIjMTkxYTFmXCIsXG4gICAgICAgIHRleHRDb2xvcjogXCIjZTBlMGUwXCJcbiAgICB9LFxuICAgIHJ1ZGV4RGFya1RoZW1lOiB7XG4gICAgICAgIGJpZENvbG9yOiBcIiM1MEQyQzJcIixcbiAgICAgICAgYmlkRmlsbENvbG9yOiBcInJnYmEoODAsIDIxMCwgMTk0LCAwLjUpXCIsXG4gICAgICAgIGFza0NvbG9yOiBcIiNFMzc0NUJcIixcbiAgICAgICAgYXNrRmlsbENvbG9yOiBcInJnYmEoMjI3LCAxMTYsIDkxLCAwLjUpXCIsXG4gICAgICAgIGNhbGxDb2xvcjogXCIjQkJCRjJCXCIsXG4gICAgICAgIHNldHRsZUNvbG9yOiBcInJnYmEoMTI1LCAxMzQsIDIxNCwgMSlcIixcbiAgICAgICAgc2V0dGxlRmlsbENvbG9yOiBcInJnYmEoMTI1LCAxMzQsIDIxNCwgMC41KVwiLFxuICAgICAgICBwb3NpdGl2ZUNvbG9yOiBcIiM2QkE1ODNcIixcbiAgICAgICAgbmVnYXRpdmVDb2xvcjogXCIjREIwMDAwXCIsXG4gICAgICAgIHN0cm9rZUNvbG9yOiBcIiNGRkZGMDBcIixcbiAgICAgICAgcHJpbWFyeVRleHQ6IFwiI2UwZTBlMFwiLFxuICAgICAgICB2b2x1bWVDb2xvcjogXCIjODQ4NDg0XCIsXG5cbiAgICAgICAgLy90b29sdGlwXG4gICAgICAgIHRvb2x0aXBCYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjQpXCIsXG4gICAgICAgIHRvb2x0aXBDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIHRvb2x0aXBGaWxsQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAvL2F4aXNcbiAgICAgICAgYXhpc0xhYmVsc0NvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgYXhpc0xpbmVDb2xvcjogXCIjQUFBQUFBXCIsXG4gICAgICAgIGluZGljYXRvckxpbmVDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAgIGJnQ29sb3I6IFwiIzE5MWExZlwiLFxuICAgICAgICB0ZXh0Q29sb3I6IFwiI2UwZTBlMFwiXG4gICAgfSxcbiAgICBkYXJrVGhlbWU6IHtcbiAgICAgICAgYmlkQ29sb3I6IFwiIzZCQTU4M1wiLFxuICAgICAgICBiaWRGaWxsQ29sb3I6IFwicmdiYSg4MCwgMjEwLCAxOTQsIDAuNSlcIixcbiAgICAgICAgYXNrQ29sb3I6IFwiI0UzNzQ1QlwiLFxuICAgICAgICBhc2tGaWxsQ29sb3I6IFwicmdiYSgyMjcsIDExNiwgOTEsIDAuNSlcIixcbiAgICAgICAgY2FsbENvbG9yOiBcIiNCQkJGMkJcIixcbiAgICAgICAgc2V0dGxlQ29sb3I6IFwicmdiYSgxMjUsIDEzNCwgMjE0LCAxKVwiLFxuICAgICAgICBzZXR0bGVGaWxsQ29sb3I6IFwicmdiYSgxMjUsIDEzNCwgMjE0LCAwLjUpXCIsXG4gICAgICAgIHBvc2l0aXZlQ29sb3I6IFwiIzI1OEExNFwiLFxuICAgICAgICBuZWdhdGl2ZUNvbG9yOiBcIiNEQjAwMDBcIixcbiAgICAgICAgc3Ryb2tlQ29sb3I6IFwiI0ZGRkYwMFwiLFxuICAgICAgICBwcmltYXJ5VGV4dDogXCIjZTBlMGUwXCIsXG4gICAgICAgIHZvbHVtZUNvbG9yOiBcIiM4NDg0ODRcIixcblxuICAgICAgICAvL3Rvb2x0aXBcbiAgICAgICAgdG9vbHRpcEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIixcbiAgICAgICAgdG9vbHRpcENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgdG9vbHRpcEZpbGxDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIC8vYXhpc1xuICAgICAgICBheGlzTGFiZWxzQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICBheGlzTGluZUNvbG9yOiBcInJnYmEoMjAwLCAyMDAsIDIwMCwgMC4zKVwiLFxuICAgICAgICBpbmRpY2F0b3JMaW5lQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgICBiZ0NvbG9yOiBcIiMyYTJhMmFcIixcbiAgICAgICAgdGV4dENvbG9yOiBcIiNmZmZmZmZcIlxuICAgIH0sXG4gICAgbGlnaHRUaGVtZToge1xuICAgICAgICBiaWRDb2xvcjogXCIjMjU4QTE0XCIsXG4gICAgICAgIGJpZEZpbGxDb2xvcjogXCJyZ2JhKDgwLCAyMTAsIDE5NCwgMC41KVwiLFxuICAgICAgICBhc2tDb2xvcjogXCIjRUEzNDBCXCIsXG4gICAgICAgIGFza0ZpbGxDb2xvcjogXCJyZ2JhKDIyNywgMTE2LCA5MSwgMC41KVwiLFxuICAgICAgICBjYWxsQ29sb3I6IFwiI0JCQkYyQlwiLFxuICAgICAgICBzZXR0bGVDb2xvcjogXCJyZ2JhKDEyNSwgMTM0LCAyMTQsIDEpXCIsXG4gICAgICAgIHNldHRsZUZpbGxDb2xvcjogXCJyZ2JhKDEyNSwgMTM0LCAyMTQsIDAuNSlcIixcbiAgICAgICAgcG9zaXRpdmVDb2xvcjogXCIjNTI4YzBhXCIsXG4gICAgICAgIG5lZ2F0aXZlQ29sb3I6IFwicmdiYSgyMjUsIDY2LCA3NCwgMSlcIixcbiAgICAgICAgc3Ryb2tlQ29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICBwcmltYXJ5VGV4dDogXCIjMjQyNDI0XCIsXG4gICAgICAgIHZvbHVtZUNvbG9yOiBcIiM4NDg0ODRcIixcblxuICAgICAgICAvL3Rvb2x0aXBcbiAgICAgICAgdG9vbHRpcEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LCAwLjkpXCIsXG4gICAgICAgIHRvb2x0aXBDb2xvcjogXCIjMDAwXCIsXG4gICAgICAgIHRvb2x0aXBGaWxsQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAvL2F4aXNcbiAgICAgICAgYXhpc0xhYmVsc0NvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgYXhpc0xpbmVDb2xvcjogXCJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMylcIixcbiAgICAgICAgaW5kaWNhdG9yTGluZUNvbG9yOiBcIiM4NDg0ODRcIixcbiAgICAgICAgYmdDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgIHRleHRDb2xvcjogXCIjM2QzZDNkXCJcbiAgICB9XG59O1xuIiwiaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IHtGZXRjaENoYWlufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudC10aW1lem9uZVwiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQge2dldEdhdGV3YXlOYW1lfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlVdGlsc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcblxuY2xhc3MgU3ltYm9sSW5mbyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLnRpY2tlcjtcbiAgICAgICAgdGhpcy50aWNrZXIgPSBvcHRpb25zLnRpY2tlcjtcblxuICAgICAgICBjb25zdCBxdW90ZUdhdGV3YXkgPSBnZXRHYXRld2F5TmFtZShvcHRpb25zLnF1b3RlQXNzZXQpO1xuICAgICAgICBjb25zdCBiYXNlR2F0ZXdheSA9IGdldEdhdGV3YXlOYW1lKG9wdGlvbnMuYmFzZUFzc2V0KTtcbiAgICAgICAgbGV0IGN1cnJlbnRFeGNoYW5nZSA9XG4gICAgICAgICAgICBxdW90ZUdhdGV3YXkgPT09IGJhc2VHYXRld2F5XG4gICAgICAgICAgICAgICAgPyBxdW90ZUdhdGV3YXlcbiAgICAgICAgICAgICAgICA6IHF1b3RlR2F0ZXdheSAmJiAhYmFzZUdhdGV3YXlcbiAgICAgICAgICAgICAgICAgICAgPyBxdW90ZUdhdGV3YXlcbiAgICAgICAgICAgICAgICAgICAgOiAhcXVvdGVHYXRld2F5ICYmIGJhc2VHYXRld2F5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGJhc2VHYXRld2F5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAke3F1b3RlR2F0ZXdheX0gLyAke2Jhc2VHYXRld2F5fWA7XG5cbiAgICAgICAgbGV0IHtuYW1lOiBiYXNlU3ltYm9sLCBwcmVmaXg6IGJhc2VQcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUoXG4gICAgICAgICAgICBvcHRpb25zLmJhc2VBc3NldFxuICAgICAgICApO1xuICAgICAgICBsZXQge25hbWU6IHF1b3RlU3ltYm9sLCBwcmVmaXg6IHF1b3RlUHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKFxuICAgICAgICAgICAgb3B0aW9ucy5xdW90ZUFzc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGAke3F1b3RlUHJlZml4IHx8IFwiXCJ9JHtxdW90ZVN5bWJvbH0gLyAke2Jhc2VQcmVmaXggfHxcbiAgICAgICAgICAgIFwiXCJ9JHtiYXNlU3ltYm9sfSAke1xuICAgICAgICAgICAgISFjdXJyZW50RXhjaGFuZ2UgPyBgKCR7Y3VycmVudEV4Y2hhbmdlfSlgIDogXCJcIlxuICAgICAgICB9YDtcbiAgICAgICAgdGhpcy50eXBlID0gXCJiaXRjb2luXCI7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IFwiMjR4N1wiO1xuICAgICAgICB0aGlzLnRpbWV6b25lID0gbW9tZW50LnR6Lmd1ZXNzKCk7XG4gICAgICAgIHRoaXMuZGF0YV9zdGF0dXMgPSBcInN0cmVhbWluZ1wiO1xuICAgICAgICB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucyA9IG9wdGlvbnMucmVzb2x1dGlvbnM7XG4gICAgICAgIHRoaXMuaGFzX2VtcHR5X2JhcnMgPSB0cnVlO1xuICAgICAgICB0aGlzLnByaWNlc2NhbGUgPSBNYXRoLnBvdygxMCwgb3B0aW9ucy5iYXNlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKTtcbiAgICAgICAgdGhpcy5xdW90ZUFzc2V0ID0gb3B0aW9ucy5xdW90ZUFzc2V0O1xuICAgICAgICB0aGlzLmJhc2VBc3NldCA9IG9wdGlvbnMuYmFzZUFzc2V0O1xuICAgICAgICB0aGlzLm1pbm1vdiA9IDE7XG5cbiAgICAgICAgdGhpcy5oYXNfaW50cmFkYXkgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5yZWR1Y2UoXG4gICAgICAgICAgICAoc3VwcG9ydGVkLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZCB8fCAhaXNOYU4ocGFyc2VJbnQociwgMTApKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmludHJhZGF5X211bHRpcGxpZXJzID0gdGhpcy5zdXBwb3J0ZWRfcmVzb2x1dGlvbnMuZmlsdGVyKHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUludChyLCAxMCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhc19zZWNvbmRzID0gdGhpcy5zdXBwb3J0ZWRfcmVzb2x1dGlvbnMucmVkdWNlKChzdXBwb3J0ZWQsIHIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWQgfHwgci5pbmRleE9mKFwiU1wiKSAhPT0gLTE7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZWNvbmRzX211bHRpcGxpZXJzID0gdGhpcy5zdXBwb3J0ZWRfcmVzb2x1dGlvbnMuZmlsdGVyKHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHIuaW5kZXhPZihcIlNcIikgIT09IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhc19kYWlseSA9IHRoaXMuc3VwcG9ydGVkX3Jlc29sdXRpb25zLnJlZHVjZSgoc3VwcG9ydGVkLCByKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkIHx8IHIuaW5kZXhPZihcIkRcIikgIT09IC0xO1xuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5oYXNfZGFpbHkgPSB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucy5yZWR1Y2UoKHN1cHBvcnRlZCwgcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZCB8fCByLmluZGV4T2YoXCJEXCIpICE9PSAtMTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVzb2x1dGlvbnNGcm9tQnVja2V0cyhidWNrZXRzKSB7XG4gICAgbGV0IHJlc29sdXRpb25zID0gYnVja2V0c1xuICAgICAgICAubWFwKHIgPT4ge1xuICAgICAgICAgICAgbGV0IG1pbnV0ZSA9IHIgLyA2MDtcbiAgICAgICAgICAgIGxldCBkYXkgPSBtaW51dGUgLyA2MCAvIDI0O1xuICAgICAgICAgICAgbGV0IHdlZWsgPSBkYXkgLyA3O1xuXG4gICAgICAgICAgICBpZiAobWludXRlIDwgMSkge1xuICAgICAgICAgICAgICAgIC8vIGJlbG93IDEgbWludXRlIHdlIHJldHVybiBTZWNvbmRzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIgKyBcIlNcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF5IDwgMSAmJiBwYXJzZUludChtaW51dGUsIDEwKSA9PT0gbWludXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gYmVsb3cgMSBkYXkgd2UgcmV0dXJuIE1pbnV0ZXNcbiAgICAgICAgICAgICAgICByZXR1cm4gbWludXRlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdlZWsgPCAxKSB7XG4gICAgICAgICAgICAgICAgLy8gYmVsb3cgMSB3ZWVrIHdlIHJldHVybiBEYXlzXG4gICAgICAgICAgICAgICAgaWYgKGRheSA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXksIDEwKSA9PT0gZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF5ID09PSAxKSByZXR1cm4gXCJEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5ICsgXCJEXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHdlIHJldHVybiB3ZWVrc1xuICAgICAgICAgICAgICAgIGlmICh3ZWVrID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHdlZWssIDEwKSA9PT0gd2Vlaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlZWsgKyBcIkRcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpO1xuXG4gICAgcmV0dXJuIHJlc29sdXRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRCdWNrZXRGcm9tUmVzb2x1dGlvbihyKSB7XG4gICAgaWYgKHIgPT09IFwiRFwiKSByZXR1cm4gMjQgKiA2MCAqIDYwO1xuXG4gICAgaWYgKHIuaW5kZXhPZihcIldcIikgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChyLnJlcGxhY2UoXCJEXCIsIFwiXCIpLCAxMCkgKiA3ICogMjQgKiA2MCAqIDYwO1xuICAgIH0gZWxzZSBpZiAoci5pbmRleE9mKFwiRFwiKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHIucmVwbGFjZShcIkRcIiwgXCJcIiksIDEwKSAqIDI0ICogNjAgKiA2MDtcbiAgICB9IGVsc2UgaWYgKHIuaW5kZXhPZihcIlNcIikgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChyLnJlcGxhY2UoXCJTXCIsIFwiXCIpLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHIsIDEwKSAqIDYwO1xuICAgIH1cbn1cblxuY2xhc3MgRGF0YUZlZWQge1xuICAgIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyZXNvbHV0aW9uc1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cHBvcnRlZF9yZXNvbHV0aW9ucyA9IGdldFJlc29sdXRpb25zRnJvbUJ1Y2tldHMoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc29sdXRpb25zXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcIm9uTWFya2V0Q2hhbmdlXCI6XG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNTdG9yZS51bnN1YnNjcmliZShcIm1hcmtldF9jaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgIE1hcmtldHNTdG9yZS5zdWJzY3JpYmUoXCJtYXJrZXRfY2hhbmdlXCIsIG9wdGlvbnNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJTdWJzKCkge1xuICAgICAgICBNYXJrZXRzU3RvcmUuY2xlYXJTdWJzKCk7XG4gICAgfVxuXG4gICAgb25SZWFkeShjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICBleGNoYW5nZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiT1BFTi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3BlbmxlZGdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJPcGVubGVkZ2VyIEdhdGV3YXlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzeW1ib2xzX3R5cGVzOiBbXSxcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRfcmVzb2x1dGlvbnM6IHRoaXMuc3VwcG9ydGVkX3Jlc29sdXRpb25zLFxuICAgICAgICAgICAgICAgIHN1cHBvcnRzX21hcmtzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdXBwb3J0c19zZWFyY2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN1cHBvcnRzX3RpbWU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMCk7XG4gICAgfVxuXG4gICAgc2VhcmNoU3ltYm9scyh1c2VySW5wdXQsIGV4Y2hhbmdlLCBzeW1ib2xUeXBlLCBvblJlc3VsdFJlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hTeW1ib2xzXCIsIHVzZXJJbnB1dCwgZXhjaGFuZ2UsIHN5bWJvbFR5cGUpO1xuXG4gICAgICAgIG9uUmVzdWx0UmVhZHlDYWxsYmFjayhbXSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic3ltYm9sXCI6IFwiPHNob3J0IHN5bWJvbCBuYW1lPlwiLFxuICAgICAgICAgICAgICAgIFwiZnVsbF9uYW1lXCI6IFwiPGZ1bGwgc3ltYm9sIG5hbWU+XCIsIC8vIGUuZy4gQlRDRTpCVENVU0RcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiPHN5bWJvbCBkZXNjcmlwdGlvbj5cIixcbiAgICAgICAgICAgICAgICBcImV4Y2hhbmdlXCI6IFwiPHN5bWJvbCBleGNoYW5nZSBuYW1lPlwiLFxuICAgICAgICAgICAgICAgIFwidGlja2VyXCI6IFwiPHN5bWJvbCB0aWNrZXIgbmFtZSwgb3B0aW9uYWw+XCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RvY2tcIiAvLyBvciBcImZ1dHVyZXNcIiBvciBcImJpdGNvaW5cIiBvciBcImZvcmV4XCIgb3IgXCJpbmRleFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgIC4uLi4uXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgKi9cbiAgICB9XG5cbiAgICByZXNvbHZlU3ltYm9sKFxuICAgICAgICBzeW1ib2xOYW1lLFxuICAgICAgICBvblN5bWJvbFJlc29sdmVkQ2FsbGJhY2ssXG4gICAgICAgIG9uUmVzb2x2ZUVycm9yQ2FsbGJhY2tcbiAgICApIHtcbiAgICAgICAgbGV0IFtxdW90ZSwgYmFzZV0gPSBzeW1ib2xOYW1lLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFzc2V0XCIsIHF1b3RlKSxcbiAgICAgICAgICAgIEZldGNoQ2hhaW4oXCJnZXRBc3NldFwiLCBiYXNlKVxuICAgICAgICBdKVxuICAgICAgICAgICAgLnRoZW4oYXNzZXRzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3F1b3RlQXNzZXQsIGJhc2VBc3NldF0gPSBhc3NldHM7XG4gICAgICAgICAgICAgICAgb25TeW1ib2xSZXNvbHZlZENhbGxiYWNrKFxuICAgICAgICAgICAgICAgICAgICBuZXcgU3ltYm9sSW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXI6IHN5bWJvbE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvbnM6IHRoaXMuc3VwcG9ydGVkX3Jlc29sdXRpb25zXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2gob25SZXNvbHZlRXJyb3JDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZ2V0QmFycyhcbiAgICAgICAgc3ltYm9sSW5mbyxcbiAgICAgICAgcmVzb2x1dGlvbixcbiAgICAgICAgZnJvbSxcbiAgICAgICAgdG8sXG4gICAgICAgIG9uSGlzdG9yeUNhbGxiYWNrLFxuICAgICAgICBvbkVycm9yQ2FsbGJhY2ssXG4gICAgICAgIGZpcnN0RGF0YVJlcXVlc3RcbiAgICApIHtcbiAgICAgICAgZnJvbSAqPSAxMDAwO1xuICAgICAgICB0byAqPSAxMDAwO1xuICAgICAgICBsZXQgYmFycyA9IHRoaXMuX2dldEhpc3RvcnkoKTtcbiAgICAgICAgdGhpcy5sYXRlc3RCYXIgPSBiYXJzW2JhcnMubGVuZ3RoIC0gMV07XG4gICAgICAgIGJhcnMgPSBiYXJzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhLnRpbWUgPj0gZnJvbSAmJiBhLnRpbWUgPD0gdG87XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmludGVydmFsICE9PSByZXNvbHV0aW9uKSB7XG4gICAgICAgICAgICBpZiAoIWZpcnN0RGF0YVJlcXVlc3QpIHJldHVybjtcblxuICAgICAgICAgICAgbGV0IG5ld0J1Y2tldFNpemUgPSBnZXRCdWNrZXRGcm9tUmVzb2x1dGlvbihyZXNvbHV0aW9uKTtcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmNoYW5nZUJ1Y2tldFNpemUobmV3QnVja2V0U2l6ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBNYXJrZXRzQWN0aW9ucy51blN1YnNjcmliZU1hcmtldChcbiAgICAgICAgICAgICAgICBzeW1ib2xJbmZvLnF1b3RlQXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgc3ltYm9sSW5mby5iYXNlQXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuc3Vic2NyaWJlTWFya2V0KFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xJbmZvLmJhc2VBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sSW5mby5xdW90ZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBuZXdCdWNrZXRTaXplXG4gICAgICAgICAgICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhcnMgPSB0aGlzLl9nZXRIaXN0b3J5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0QmFyID0gYmFyc1tiYXJzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBiYXJzID0gYmFycy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS50aW1lID49IGZyb20gJiYgYS50aW1lIDw9IHRvO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHJlc29sdXRpb247XG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25IaXN0b3J5Q2FsbGJhY2soYmFycywge25vRGF0YTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICBvbkhpc3RvcnlDYWxsYmFjayhiYXJzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgIC8vICAgICBcImdldEJhcnNcIixcbiAgICAgICAgLy8gICAgIHN5bWJvbEluZm8udGlja2VyLFxuICAgICAgICAvLyAgICAgcmVzb2x1dGlvbixcbiAgICAgICAgLy8gICAgIFwiZmlyc3REYXRhUmVxdWVzdFwiLFxuICAgICAgICAvLyAgICAgZmlyc3REYXRhUmVxdWVzdCxcbiAgICAgICAgLy8gICAgIFwiYmFyc1wiLFxuICAgICAgICAvLyAgICAgYmFyc1xuICAgICAgICAvLyApO1xuICAgICAgICB0aGlzLmludGVydmFsID0gcmVzb2x1dGlvbjtcbiAgICAgICAgaWYgKCFiYXJzLmxlbmd0aCkgcmV0dXJuIG9uSGlzdG9yeUNhbGxiYWNrKGJhcnMsIHtub0RhdGE6IHRydWV9KTtcblxuICAgICAgICBvbkhpc3RvcnlDYWxsYmFjayhiYXJzKTtcbiAgICB9XG5cbiAgICBfZ2V0SGlzdG9yeSgpIHtcbiAgICAgICAgcmV0dXJuIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLnByaWNlRGF0YTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVCYXJzKFxuICAgICAgICBzeW1ib2xJbmZvLFxuICAgICAgICByZXNvbHV0aW9uLFxuICAgICAgICBvblJlYWx0aW1lQ2FsbGJhY2ssXG4gICAgICAgIHN1YnNjcmliZXJVSUQsXG4gICAgICAgIG9uUmVzZXRDYWNoZU5lZWRlZENhbGxiYWNrXG4gICAgKSB7XG4gICAgICAgIE1hcmtldHNTdG9yZS51bnN1YnNjcmliZShcInN1YnNjcmliZUJhcnNcIik7XG4gICAgICAgIG9uUmVzZXRDYWNoZU5lZWRlZENhbGxiYWNrKCk7XG4gICAgICAgIE1hcmtldHNTdG9yZS5zdWJzY3JpYmUoXCJzdWJzY3JpYmVCYXJzXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBiYXJzID0gdGhpcy5fZ2V0SGlzdG9yeSgpO1xuICAgICAgICAgICAgbGV0IG5ld0JhcnMgPSBiYXJzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGF0ZXN0QmFyKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS50aW1lID4gdGhpcy5sYXRlc3RCYXIudGltZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdWJzY3JpYmVCYXJzXCIsIE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFjdGl2ZU1hcmtldCwgXCJmb3VuZCBuZXcgYmFyczpcIiwgbmV3QmFycyk7XG4gICAgICAgICAgICBpZiAobmV3QmFycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXdCYXJzLmZvckVhY2goYmFyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFsdGltZUNhbGxiYWNrKGJhcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RCYXIgPSBuZXdCYXJzW25ld0JhcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGxhdGVzdCBiYXIgaXMgZGlmZmVyZW50XG4gICAgICAgICAgICAgICAgbGV0IGRpZENoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmxhdGVzdEJhcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXRlc3RCYXJba2V5XSAhPT0gYmFyc1tiYXJzLmxlbmd0aCAtIDFdW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZENoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpZENoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBvblJlYWx0aW1lQ2FsbGJhY2soYmFyc1tiYXJzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuc3Vic2NyaWJlQmFycygpIHtcbiAgICAgICAgLypcbiAgICAgICAgKiBUaGlzIGlzIEFMV0FZUyBjYWxsZWQgYWZ0ZXIgc3Vic2NyaWJlQmFycyBmb3Igc29tZSByZWFzb24sIGJ1dFxuICAgICAgICAqIHNvbWV0aW1lcyBpdCBleGVjdXRlcyBCRUZPUkUgdGhlIHN1YnNjcmliZSBjYWxsIGluIHN1YnNjcmliZUJhcnMgYW5kXG4gICAgICAgICogc29tZXRpbWVzIEFGVEVSLiBUaGlzIGNhdXNlcyB0aGUgY2FsbGJhY2sgdG8gYmUgY2xlYXJlZCBhbmQgd2Ugc3RvcFxuICAgICAgICAqIHJlY2VpdmluZyB1cGRhdGVzIGZyb20gdGhlIE1hcmtldFN0b3JlLiBVbmxlc3Mgd2UgZmluZCBpdCBjYXVzZXMgYnVncyxcbiAgICAgICAgKiBpdCdzIGJlc3QgdG8ganVzdCBub3QgdXNlIHRoaXMuXG4gICAgICAgICovXG4gICAgICAgIC8vIE1hcmtldHNTdG9yZS51bnN1YnNjcmliZShcInN1YnNjcmliZUJhcnNcIik7XG4gICAgICAgIC8vIHRoaXMubGF0ZXN0QmFyID0gbnVsbDtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVIaXN0b3J5RGVwdGgocmVzb2x1dGlvbiwgcmVzb2x1dGlvbkJhY2ssIGludGVydmFsQmFjaykge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldFNlcnZlclRpbWUoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICB9XG59XG5cbmNvbnN0IHN1cHBvcnRlZFRpbWVab25lcyA9IFtcbiAgICBcIkFtZXJpY2EvQXJnZW50aW5hL0J1ZW5vc19BaXJlc1wiLFxuICAgIFwiQW1lcmljYS9Cb2dvdGFcIixcbiAgICBcIkFtZXJpY2EvQ2FyYWNhc1wiLFxuICAgIFwiQW1lcmljYS9DaGljYWdvXCIsXG4gICAgXCJBbWVyaWNhL0VsX1NhbHZhZG9yXCIsXG4gICAgXCJBbWVyaWNhL0xvc19BbmdlbGVzXCIsXG4gICAgXCJBbWVyaWNhL01leGljb19DaXR5XCIsXG4gICAgXCJBbWVyaWNhL05ld19Zb3JrXCIsXG4gICAgXCJBbWVyaWNhL1Bob2VuaXhcIixcbiAgICBcIkFtZXJpY2EvU2FvX1BhdWxvXCIsXG4gICAgXCJBbWVyaWNhL1Rvcm9udG9cIixcbiAgICBcIkFtZXJpY2EvVmFuY291dmVyXCIsXG4gICAgXCJBc2lhL0FsbWF0eVwiLFxuICAgIFwiQXNpYS9Bc2hraGFiYWRcIixcbiAgICBcIkFzaWEvQmFuZ2tva1wiLFxuICAgIFwiQXNpYS9EdWJhaVwiLFxuICAgIFwiQXNpYS9Ib25nX0tvbmdcIixcbiAgICBcIkFzaWEvS2F0aG1hbmR1XCIsXG4gICAgXCJBc2lhL0tvbGthdGFcIixcbiAgICBcIkFzaWEvU2VvdWxcIixcbiAgICBcIkFzaWEvU2hhbmdoYWlcIixcbiAgICBcIkFzaWEvU2luZ2Fwb3JlXCIsXG4gICAgXCJBc2lhL1RhaXBlaVwiLFxuICAgIFwiQXNpYS9UZWhyYW5cIixcbiAgICBcIkFzaWEvVG9reW9cIixcbiAgICBcIkF1c3RyYWxpYS9BQ1RcIixcbiAgICBcIkF1c3RyYWxpYS9BZGVsYWlkZVwiLFxuICAgIFwiQXVzdHJhbGlhL0JyaXNiYW5lXCIsXG4gICAgXCJBdXN0cmFsaWEvU3lkbmV5XCIsXG4gICAgXCJFdXJvcGUvQXRoZW5zXCIsXG4gICAgXCJFdXJvcGUvQmVybGluXCIsXG4gICAgXCJFdXJvcGUvSXN0YW5idWxcIixcbiAgICBcIkV1cm9wZS9Mb25kb25cIixcbiAgICBcIkV1cm9wZS9NYWRyaWRcIixcbiAgICBcIkV1cm9wZS9Nb3Njb3dcIixcbiAgICBcIkV1cm9wZS9QYXJpc1wiLFxuICAgIFwiRXVyb3BlL1dhcnNhd1wiLFxuICAgIFwiRXVyb3BlL1p1cmljaFwiLFxuICAgIFwiUGFjaWZpYy9BdWNrbGFuZFwiLFxuICAgIFwiUGFjaWZpYy9DaGF0aGFtXCIsXG4gICAgXCJQYWNpZmljL0Zha2FvZm9cIixcbiAgICBcIlBhY2lmaWMvSG9ub2x1bHVcIixcbiAgICBcIlVTL01vdW50YWluXCJcbl07XG5cbmZ1bmN0aW9uIGdldFRWVGltZXpvbmUoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IG1vbWVudC50ei5ndWVzcygpO1xuICAgIGNvbnN0IGRlZmF1bHRab25lID0gXCJFdXJvcGUvTG9uZG9uXCI7XG5cbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBzdXBwb3J0ZWRUaW1lWm9uZXMuaW5kZXhPZihjdXJyZW50KSAhPT0gLTE7XG4gICAgaWYgKGlzU3VwcG9ydGVkKSByZXR1cm4gY3VycmVudDtcbiAgICBlbHNlIHtcbiAgICAgICAgLyogVHJ5IHRvIGZpbmQgYSBtYXRjaGluZyB0aW1lem9uZSBmcm9tIHRoZSBsaW1pdGVkIGxpc3Qgc3VwcG9ydGVkIGJ5IFRyYWRpbmdWaWV3ICovXG4gICAgICAgIGNvbnN0IHRpbWUgPSBtb21lbnQoKS50b0lTT1N0cmluZygpO1xuICAgICAgICBjb25zdCBhY3R1YWwgPSBtb21lbnQudHoodGltZSwgY3VycmVudCkuZm9ybWF0KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VwcG9ydGVkVGltZVpvbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgem9uZVRpbWUgPSBtb21lbnQudHoodGltZSwgc3VwcG9ydGVkVGltZVpvbmVzW2ldKTtcbiAgICAgICAgICAgIGlmICh6b25lVGltZS5mb3JtYXQoKSA9PT0gYWN0dWFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9fREVWX18pXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEZvdW5kIGEgbWF0Y2ggZm9yICR7Y3VycmVudH0gdGltZXpvbmUsIHVzaW5nICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkVGltZVpvbmVzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIEZvdW5kIGEgbWF0Y2gsIHJldHVybiB0aGF0IHpvbmVcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkVGltZVpvbmVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgTm8gbWF0Y2hpbmcgdGltZXpvbmUgZm91bmQgZm9yICR7Y3VycmVudH0sIHNldHRpbmcgdG8gZGVmYXVsdCB2YWx1ZSBvZiBFdXJvcGUvTG9uZG9uYFxuICAgICk7XG4gICAgcmV0dXJuIGRlZmF1bHRab25lO1xufVxuXG5leHBvcnQge0RhdGFGZWVkLCBTeW1ib2xJbmZvLCBnZXRSZXNvbHV0aW9uc0Zyb21CdWNrZXRzLCBnZXRUVlRpbWV6b25lfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdEhpZ2hjaGFydCBmcm9tIFwicmVhY3QtaGlnaGNoYXJ0c1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7Y2xvbmVEZWVwfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY29sb3JzIGZyb20gXCJhc3NldHMvY29sb3JzXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IHtkaWRPcmRlcnNDaGFuZ2V9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuXG5jbGFzcyBEZXB0aEhpZ2hDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgc2V0dGxlQ2hlY2sgPSBpc05hTihuZXh0UHJvcHMuZmVlZFByaWNlKVxuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiBuZXh0UHJvcHMuZmVlZFByaWNlICE9PSB0aGlzLnByb3BzLmZlZWRQcmljZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGRpZE9yZGVyc0NoYW5nZShuZXh0UHJvcHMub3JkZXJzLCB0aGlzLnByb3BzLm9yZGVycykgfHxcbiAgICAgICAgICAgIGRpZE9yZGVyc0NoYW5nZShuZXh0UHJvcHMuY2FsbF9vcmRlcnMsIHRoaXMucHJvcHMuY2FsbF9vcmRlcnMpIHx8XG4gICAgICAgICAgICBzZXR0bGVDaGVjayB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmZlZWRQcmljZSAhPT0gdGhpcy5wcm9wcy5mZWVkUHJpY2UgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5oZWlnaHQgIT09IHRoaXMucHJvcHMuaGVpZ2h0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMubGVmdE9yZGVyQm9vayAhPT0gdGhpcy5wcm9wcy5sZWZ0T3JkZXJCb29rIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuTENQICE9PSB0aGlzLnByb3BzLkxDUCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnNob3dDYWxsTGltaXQgIT09IHRoaXMucHJvcHMuc2hvd0NhbGxMaW1pdCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmhhc1ByZWRpY3Rpb24gIT09IHRoaXMucHJvcHMuaGFzUHJlZGljdGlvbiB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmZlZWRQcmljZSAhPT0gdGhpcy5wcm9wcy5mZWVkUHJpY2UgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5tYXJrZXRSZWFkeSAhPT0gdGhpcy5wcm9wcy5tYXJrZXRSZWFkeVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlZmxvd0NoYXJ0KDUwMCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5yZWZzLmRlcHRoQ2hhcnQgJiZcbiAgICAgICAgICAgIG5leHRQcm9wcy52ZXJ0aWNhbE9yZGVyYm9vayAhPT0gdGhpcy5wcm9wcy52ZXJ0aWNhbE9yZGVyYm9va1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMucmVmbG93Q2hhcnQoMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNlbnRlclJlZikge1xuICAgICAgICAgICAgdGhpcy50ZW1wU2Nyb2xsID0gdGhpcy5wcm9wcy5jZW50ZXJSZWYuc2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jZW50ZXJSZWYpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2VudGVyUmVmLnNjcm9sbFRvcCA9IHRoaXMudGVtcFNjcm9sbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZmxvd0NoYXJ0KHRpbWVvdXQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLmRlcHRoQ2hhcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMuZGVwdGhDaGFydC5jaGFydC5yZWZsb3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgX2dldFRoZW1lQ29sb3JzKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICByZXR1cm4gY29sb3JzW3Byb3BzLnRoZW1lXTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBmbGF0X2JpZHMsXG4gICAgICAgICAgICBmbGF0X2Fza3MsXG4gICAgICAgICAgICBmbGF0X2NhbGxzLFxuICAgICAgICAgICAgZmxhdF9zZXR0bGVzLFxuICAgICAgICAgICAgdG90YWxCaWRzLFxuICAgICAgICAgICAgdG90YWxBc2tzLFxuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgZmVlZFByaWNlXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByaW1hcnlUZXh0LFxuICAgICAgICAgICAgY2FsbENvbG9yLFxuICAgICAgICAgICAgc2V0dGxlQ29sb3IsXG4gICAgICAgICAgICBzZXR0bGVGaWxsQ29sb3IsXG4gICAgICAgICAgICBiaWRDb2xvcixcbiAgICAgICAgICAgIGJpZEZpbGxDb2xvcixcbiAgICAgICAgICAgIGFza0NvbG9yLFxuICAgICAgICAgICAgYXNrRmlsbENvbG9yLFxuICAgICAgICAgICAgYXhpc0xpbmVDb2xvclxuICAgICAgICB9ID0gdGhpcy5fZ2V0VGhlbWVDb2xvcnMoKTtcblxuICAgICAgICBsZXQge25hbWU6IGJhc2VTeW1ib2wsIHByZWZpeDogYmFzZVByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShiYXNlKTtcbiAgICAgICAgbGV0IHtuYW1lOiBxdW90ZVN5bWJvbCwgcHJlZml4OiBxdW90ZVByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShxdW90ZSk7XG4gICAgICAgIGJhc2VTeW1ib2wgPSAoYmFzZVByZWZpeCB8fCBcIlwiKSArIGJhc2VTeW1ib2w7XG4gICAgICAgIHF1b3RlU3ltYm9sID0gKHF1b3RlUHJlZml4IHx8IFwiXCIpICsgcXVvdGVTeW1ib2w7XG5cbiAgICAgICAgbGV0IGZsYXRCaWRzID0gY2xvbmVEZWVwKGZsYXRfYmlkcyksXG4gICAgICAgICAgICBmbGF0QXNrcyA9IGNsb25lRGVlcChmbGF0X2Fza3MpLFxuICAgICAgICAgICAgZmxhdENhbGxzID0gY2xvbmVEZWVwKGZsYXRfY2FsbHMpLFxuICAgICAgICAgICAgZmxhdFNldHRsZXMgPSBjbG9uZURlZXAoZmxhdF9zZXR0bGVzKTtcblxuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFyZWFcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDAsIDAsIDApXCIsXG4gICAgICAgICAgICAgICAgc3BhY2luZzogWzEwLCAwLCA1LCAwXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZ2VTZWxlY3Rvcjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmF2aWdhdG9yOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFHcm91cGluZzoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHNoYXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC43NSlcIixcbiAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG5cdFx0XHRcdFx0PHRhYmxlPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+JHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5wcmljZVwiKX06PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHRcIj4ke3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAke2Jhc2VTeW1ib2x9LyR7cXVvdGVTeW1ib2x9PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD4ke2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnF1YW50aXR5XCIpfTo8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiPiR7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAke3F1b3RlU3ltYm9sfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0YDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcmltYXJ5VGV4dFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9wcG9zaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyaWRMaW5lV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVDb2xvcjogXCJyZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMzApXCIsXG4gICAgICAgICAgICAgICAgZ3JpZFpJbmRleDogMSxcbiAgICAgICAgICAgICAgICBjcm9zc2hhaXI6IHtcbiAgICAgICAgICAgICAgICAgICAgc25hcDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZUluZGljYXRvcjoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByaW1hcnlUZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZm9ybWF0dGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLnZhbHVlIC8gcG93ZXI7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9yZGluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxpbmVDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGxvdExpbmVzOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTW91c2VUcmFja2luZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDZW50ZXIgdGhlIGNoYXJ0cyBiZXR3ZWVuIGJpZHMgYW5kIGFza3NcbiAgICAgICAgaWYgKGZsYXRCaWRzLmxlbmd0aCA+IDAgJiYgZmxhdEFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IG1pZGRsZVZhbHVlID1cbiAgICAgICAgICAgICAgICAoZmxhdEFza3NbMF1bMF0gKyBmbGF0Qmlkc1tmbGF0Qmlkcy5sZW5ndGggLSAxXVswXSkgLyAyO1xuXG4gICAgICAgICAgICBjb25maWcueEF4aXMubWluID0gbWlkZGxlVmFsdWUgKiAwLjQ7XG4gICAgICAgICAgICBjb25maWcueEF4aXMubWF4ID0gbWlkZGxlVmFsdWUgKiAxLjY7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnhBeGlzLm1heCA8IGZsYXRBc2tzWzBdWzBdKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnhBeGlzLm1heCA9IGZsYXRBc2tzWzBdWzBdICogMS41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy54QXhpcy5taW4gPiBmbGF0Qmlkc1tmbGF0Qmlkcy5sZW5ndGggLSAxXVswXSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy54QXhpcy5taW4gPSBmbGF0Qmlkc1tmbGF0Qmlkcy5sZW5ndGggLSAxXVswXSAqIDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB5TWF4ID0gMDtcbiAgICAgICAgICAgIGZsYXRCaWRzLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJbMF0gPj0gY29uZmlnLnhBeGlzLm1pbikge1xuICAgICAgICAgICAgICAgICAgICB5TWF4ID0gTWF0aC5tYXgoYlsxXSwgeU1heCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmbGF0QXNrcy5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhWzBdIDw9IGNvbmZpZy54QXhpcy5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgeU1heCA9IE1hdGgubWF4KGFbMV0sIHlNYXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uZmlnLnlBeGlzLm1heCA9IHlNYXggKiAxLjE1O1xuXG4gICAgICAgICAgICAvLyBBZGp1c3QgeSBheGlzIGxhYmVsIGRlY2ltYWxzXG4gICAgICAgICAgICBsZXQgeUxhYmVsRGVjaW1hbHMgPSB5TWF4ID4gMTAgPyAwIDogeU1heCA+IDEgPyAyIDogNTtcbiAgICAgICAgICAgIGNvbmZpZy55QXhpcy5sYWJlbHMuZm9ybWF0dGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdF9udW1iZXIodGhpcy52YWx1ZSwgeUxhYmVsRGVjaW1hbHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChmbGF0Qmlkcy5sZW5ndGggJiYgIWZsYXRBc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uZmlnLnhBeGlzLm1pbiA9IGZsYXRCaWRzW2ZsYXRCaWRzLmxlbmd0aCAtIDFdWzBdICogMC40O1xuICAgICAgICAgICAgY29uZmlnLnhBeGlzLm1heCA9IGZsYXRCaWRzW2ZsYXRCaWRzLmxlbmd0aCAtIDFdWzBdICogMS42O1xuICAgICAgICB9IGVsc2UgaWYgKGZsYXRBc2tzLmxlbmd0aCAmJiAhZmxhdEJpZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25maWcueEF4aXMubWluID0gMDtcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5tYXggPSBmbGF0QXNrc1swXVswXSAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5oYXNQcmVkaWN0aW9uKSB7XG4gICAgICAgICAgICBjb25maWcueEF4aXMubWluID0gLTAuMDU7XG4gICAgICAgICAgICBjb25maWcueEF4aXMubWF4ID0gMS4wNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBwbG90bGluZXMgaWYgZGVmaW5lZFxuICAgICAgICAvLyBpZiAoZmFsc2V0aGlzLnByb3BzLnBsb3RMaW5lKSB7XG4gICAgICAgIC8vXHQgY29uZmlnLnhBeGlzLnBsb3RMaW5lcy5wdXNoKHtcbiAgICAgICAgLy9cdFx0IGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAvL1x0XHQgaWQ6IFwicGxvdF9saW5lXCIsXG4gICAgICAgIC8vXHRcdCBkYXNoU3R5bGU6IFwibG9uZ2Rhc2hkb3RcIixcbiAgICAgICAgLy9cdFx0IHZhbHVlOiB0aGlzLnByb3BzLnBsb3RMaW5lICogcG93ZXIsXG4gICAgICAgIC8vXHRcdCB3aWR0aDogMSxcbiAgICAgICAgLy9cdFx0IHpJbmRleDogNVxuICAgICAgICAvL1x0IH0pO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gTWFya2V0IGFzc2V0XG4gICAgICAgIGlmICh0aGlzLnByb3BzLkxDUCkge1xuICAgICAgICAgICAgY29uZmlnLnhBeGlzLnBsb3RMaW5lcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogYXhpc0xpbmVDb2xvcixcbiAgICAgICAgICAgICAgICBpZDogXCJwbG90X2xpbmVcIixcbiAgICAgICAgICAgICAgICBkYXNoU3R5bGU6IFwibG9uZ2Rhc2hcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5MQ1AsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYmxvY2suY2FsbF9saW1pdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcmltYXJ5VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgIHpJbmRleDogNVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5TUVApIHtcbiAgICAgICAgLy9cdCBjb25maWcueEF4aXMucGxvdExpbmVzLnB1c2goe1xuICAgICAgICAvL1x0XHQgY29sb3I6IFwiI0I2QjZCNlwiLFxuICAgICAgICAvL1x0XHQgaWQ6IFwicGxvdF9saW5lXCIsXG4gICAgICAgIC8vXHRcdCBkYXNoU3R5bGU6IFwibG9uZ2Rhc2hcIixcbiAgICAgICAgLy9cdFx0IHZhbHVlOiB0aGlzLnByb3BzLlNRUCAqIHBvd2VyLFxuICAgICAgICAvL1x0XHQgbGFiZWw6IHtcbiAgICAgICAgLy9cdFx0XHQgdGV4dDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uuc3F1ZWV6ZVwiKSxcbiAgICAgICAgLy9cdFx0XHQgc3R5bGU6IHtcbiAgICAgICAgLy9cdFx0XHRcdCBjb2xvcjogXCIjREFEQURBXCIsXG4gICAgICAgIC8vXHRcdFx0XHQgZm9udFdlaWdodDogXCJib2xkXCJcbiAgICAgICAgLy9cdFx0XHQgfVxuICAgICAgICAvL1x0XHQgfSxcbiAgICAgICAgLy9cdFx0IHdpZHRoOiAyLFxuICAgICAgICAvL1x0XHQgekluZGV4OiA1XG4gICAgICAgIC8vXHQgfSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoZmVlZFByaWNlKSB7XG4gICAgICAgICAgICBjb25zdCBzZXR0bGVtZW50Q29sb3IgPSBiYXNlLmhhcyhcImJpdGFzc2V0XCIpID8gYXNrQ29sb3IgOiBiaWRDb2xvcjtcbiAgICAgICAgICAgIGNvbmZpZy54QXhpcy5wbG90TGluZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgY29sb3I6IHNldHRsZW1lbnRDb2xvcixcbiAgICAgICAgICAgICAgICBpZDogXCJwbG90X2xpbmVcIixcbiAgICAgICAgICAgICAgICBkYXNoU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmVlZFByaWNlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4cGxvcmVyLmJsb2NrLmZlZWRfcHJpY2VcIiksXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJpbWFyeVRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBZGQgY2FsbHMgaWYgcHJlc2VudFxuICAgICAgICAgICAgaWYgKGZsYXRDYWxscyAmJiBmbGF0Q2FsbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYENhbGwgJHtxdW90ZVN5bWJvbH1gLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmbGF0Q2FsbHMsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjYWxsQ29sb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBzZXR0bGUgb3JkZXJzXG4gICAgICAgIGlmIChmZWVkUHJpY2UgJiYgKGZsYXRTZXR0bGVzICYmIGZsYXRTZXR0bGVzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZXJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogYFNldHRsZSAke3F1b3RlU3ltYm9sfWAsXG4gICAgICAgICAgICAgICAgZGF0YTogZmxhdFNldHRsZXMsXG4gICAgICAgICAgICAgICAgY29sb3I6IHNldHRsZUNvbG9yLFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogc2V0dGxlRmlsbENvbG9yXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1c2ggYXNrcyBhbmQgYmlkc1xuICAgICAgICBpZiAoZmxhdEJpZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25maWcuc2VyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHN0ZXA6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBgQmlkICR7cXVvdGVTeW1ib2x9YCxcbiAgICAgICAgICAgICAgICBkYXRhOiBmbGF0QmlkcyxcbiAgICAgICAgICAgICAgICBjb2xvcjogYmlkQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiBiaWRGaWxsQ29sb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZsYXRBc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uZmlnLnNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBzdGVwOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBgQXNrICR7cXVvdGVTeW1ib2x9YCxcbiAgICAgICAgICAgICAgICBkYXRhOiBmbGF0QXNrcyxcbiAgICAgICAgICAgICAgICBjb2xvcjogYXNrQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiBhc2tGaWxsQ29sb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRml4IHRoZSBoZWlnaHQgaWYgZGVmaW5lZCwgZWxzZSB1c2UgNDAwcHg7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCkge1xuICAgICAgICAgICAgY29uZmlnLmNoYXJ0LmhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnLmNoYXJ0LmhlaWdodCA9IFwiNDAwcHhcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBvbkNsaWNrIGV2ZW50IGxpc3RlbmVyIGlmIGRlZmluZWRcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgICAgY29uZmlnLmNoYXJ0LmV2ZW50cyA9IHtcbiAgICAgICAgICAgICAgICBjbGljazogdGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ub0ZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgeyFmbGF0Qmlkcy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgIWZsYXRBc2tzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhdENhbGxzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5ub19kYXRhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vVGV4dCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJiaWQtdG90YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCaWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ub1RleHQgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXNrLXRvdGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQXNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7ZmxhdEJpZHMgfHwgZmxhdEFza3MgfHwgZmxhdENhbGxzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0SGlnaGNoYXJ0IGNvbmZpZz17Y29uZmlnfSAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IG5vLXBhZGRpbmcgbWlkZGxlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNoYW5nZS1ib3JkZXJlZFwiIHN0eWxlPXt7bWFyZ2luOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNoYW5nZS1jb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vVGV4dCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpZC10b3RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCaWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17YmFzZS5nZXQoXCJzeW1ib2xcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vVGV4dCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFzay10b3RhbCBmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxBc2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshZmxhdEJpZHMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhZmxhdEFza3MubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhZmxhdENhbGxzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuby1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm5vX2RhdGFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge2ZsYXRCaWRzIHx8IGZsYXRBc2tzIHx8IGZsYXRDYWxscyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RIaWdoY2hhcnQgcmVmPVwiZGVwdGhDaGFydFwiIGNvbmZpZz17Y29uZmlnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuRGVwdGhIaWdoQ2hhcnQuZGVmYXVsdFByb3BzID0ge1xuICAgIGZsYXRfYmlkczogW10sXG4gICAgZmxhdF9hc2tzOiBbXSxcbiAgICBvcmRlcnM6IHt9LFxuICAgIG5vVGV4dDogZmFsc2UsXG4gICAgbm9GcmFtZTogdHJ1ZVxufTtcblxuRGVwdGhIaWdoQ2hhcnQucHJvcFR5cGVzID0ge1xuICAgIGZsYXRfYmlkczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgZmxhdF9hc2tzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBvcmRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVwdGhIaWdoQ2hhcnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5pbXBvcnQgTm90aWZpZXIgZnJvbSBcIi4vTm90aWZpZXJcIjtcblxuY2xhc3MgTm90aWZpZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tBY2NvdW50U3RvcmVdfVxuICAgICAgICAgICAgICAgIGluamVjdD17e1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxOb3RpZmllciAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmllckNvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSBcInJlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgWmZBcGkgZnJvbSBcInJlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdXRpbHMvZm91bmRhdGlvbi1hcGlcIjtcbmltcG9ydCBPcGVyYXRpb24gZnJvbSBcIi4uL0Jsb2NrY2hhaW4vT3BlcmF0aW9uXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB7Q2hhaW5UeXBlcyBhcyBHcmFwaENoYWluVHlwZXN9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xubGV0IHtvcGVyYXRpb25zfSA9IEdyYXBoQ2hhaW5UeXBlcztcblxubGV0IG9wcyA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbnMpO1xuXG5jbGFzcyBOb3RpZmllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudCAmJlxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQuc2l6ZSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBjaCA9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImhpc3RvcnlcIikgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKS5maXJzdCgpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCJoaXN0b3J5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b0pTKClcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgbGV0IG5oID1cbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpICYmXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKS5maXJzdCgpXG4gICAgICAgICAgICAgICAgICAgID8gbmV4dFByb3BzLmFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcImhpc3RvcnlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobmggJiYgY2gpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHRyaWdnZXIgbm90aWZpY2F0aW9ucyBmb3Igb3JkZXIgZmlsbHNcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIG9wc1tuaC5vcFswXV0gPT09IFwiZmlsbF9vcmRlclwiICYmXG4gICAgICAgICAgICAgICAgICAgICgoIWNoICYmIG5oLmlkKSB8fCBuaC5pZCAhPT0gY2guaWQpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFpmQXBpLnB1Ymxpc2goXCJhY2NvdW50LW5vdGlmeVwiLCBcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBaZkFwaS5wdWJsaXNoKFwiYWNjb3VudC1ub3RpZnlcIiwgXCJjbG9zZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoIW5leHRQcm9wcy5hY2NvdW50IHx8ICF0aGlzLnByb3BzLmFjY291bnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMoXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKVxuICAgICAgICAgICAgKSB8fCAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5hY2NvdW50LCB0aGlzLnByb3BzLmFjY291bnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRyeCwgaW5mbztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImhpc3RvcnlcIikuc2l6ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRyeCA9IHRoaXMucHJvcHMuYWNjb3VudFxuICAgICAgICAgICAgICAgIC5nZXQoXCJoaXN0b3J5XCIpXG4gICAgICAgICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAgICAgICAudG9KUygpO1xuICAgICAgICAgICAgaWYgKHRyeCkge1xuICAgICAgICAgICAgICAgIGluZm8gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHJ4LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3A9e3RyeC5vcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dHJ4LnJlc3VsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrPXt0cnguYmxvY2tfbnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17YWNjb3VudC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEYXRlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZlZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0cngpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb24uU3RhdGljXG4gICAgICAgICAgICAgICAgaWQ9XCJhY2NvdW50LW5vdGlmeVwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e251bGx9XG4gICAgICAgICAgICAgICAgaW1hZ2U9XCJcIlxuICAgICAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50PVwiZGl2XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PntpbmZvfTwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvTm90aWZpY2F0aW9uLlN0YXRpYz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5Ob3RpZmllciA9IEJpbmRUb0NoYWluU3RhdGUoTm90aWZpZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmllcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IEJhc2VNb2RhbCBmcm9tIFwiLi4vTW9kYWwvQmFzZU1vZGFsXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3coKSB7XG4gICAgICAgIGxldCBtb2RhbElkID0gXCJtb2RhbF9jb25maXJtX1wiICsgdGhpcy5wcm9wcy50eXBlO1xuICAgICAgICBaZkFwaS5wdWJsaXNoKG1vZGFsSWQsIFwib3BlblwiKTtcbiAgICB9XG5cbiAgICBfb25Gb3JjZSh2YWx1ZSwgZSkge1xuICAgICAgICBsZXQgbW9kYWxJZCA9IFwibW9kYWxfY29uZmlybV9cIiArIHRoaXMucHJvcHMudHlwZTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIFpmQXBpLnB1Ymxpc2gobW9kYWxJZCwgXCJjbG9zZVwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB0aGlzLnByb3BzLm9uRm9yY2UoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7dHlwZSwgZGlmZiwgaGFzT3JkZXJzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCYXNlTW9kYWwgaWQ9e1wibW9kYWxfY29uZmlybV9cIiArIHR5cGV9IG92ZXJsYXk9e3RydWV9PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwiaDNcIiBjb250ZW50PVwidHJhbnNhY3Rpb24uY29uZmlybVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgIHshaGFzT3JkZXJzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wiZXhjaGFuZ2UuY29uZmlybV9ub19vcmRlcnNfXCIgKyB0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImV4Y2hhbmdlLmNvbmZpcm1fXCIgKyB0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmY9e3V0aWxzLmZvcm1hdF9udW1iZXIoZGlmZiwgMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIycmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uRm9yY2UuYmluZCh0aGlzLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uRm9yY2UuYmluZCh0aGlzLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Jhc2VNb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFByaWNlU3RhdFdpdGhMYWJlbCBmcm9tIFwiLi9QcmljZVN0YXRXaXRoTGFiZWxcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgRXhjaGFuZ2VIZWFkZXJDb2xsYXRlcmFsIGZyb20gXCIuL0V4Y2hhbmdlSGVhZGVyQ29sbGF0ZXJhbFwiO1xuaW1wb3J0IEJhc2VNb2RhbCBmcm9tIFwiLi4vTW9kYWwvQmFzZU1vZGFsXCI7XG5pbXBvcnQgWmZBcGkgZnJvbSBcInJlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdXRpbHMvZm91bmRhdGlvbi1hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhjaGFuZ2VIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZvbHVtZVNob3dRdW90ZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoYXJ0SGVpZ2h0OiBwcm9wcy5jaGFydEhlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0Q2hhcnRIZWlnaHQgPSB0aGlzLnNldENoYXJ0SGVpZ2h0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoIW5leHRQcm9wcy5tYXJrZXRSZWFkeSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBfYWRkTWFya2V0KHF1b3RlLCBiYXNlKSB7XG4gICAgICAgIGxldCBtYXJrZXRJRCA9IGAke3F1b3RlfV8ke2Jhc2V9YDtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXRJRCkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5hZGRTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5yZW1vdmVTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVZvbHVtZUJhc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdm9sdW1lU2hvd1F1b3RlOiAhdGhpcy5zdGF0ZS52b2x1bWVTaG93UXVvdGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFya2V0UGlja2VyKGFzc2V0KSB7XG4gICAgICAgIGxldCB7c2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHNlbGVjdGVkTWFya2V0UGlja2VyQXNzZXQgPVxuICAgICAgICAgICAgISFzZWxlY3RlZE1hcmtldFBpY2tlckFzc2V0ICYmIHNlbGVjdGVkTWFya2V0UGlja2VyQXNzZXQgPT0gYXNzZXRcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IGFzc2V0O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblRvZ2dsZU1hcmtldFBpY2tlcihzZWxlY3RlZE1hcmtldFBpY2tlckFzc2V0KTtcbiAgICB9XG5cbiAgICBzZXRDaGFydEhlaWdodCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZUNoYXJ0SGVpZ2h0KHt2YWx1ZTogdGhpcy5zdGF0ZS5jaGFydEhlaWdodH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcXVvdGVBc3NldCxcbiAgICAgICAgICAgIGJhc2VBc3NldCxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgaGFzUHJlZGljdGlvbixcbiAgICAgICAgICAgIGZlZWRQcmljZSxcbiAgICAgICAgICAgIHNob3dDYWxsTGltaXQsXG4gICAgICAgICAgICBsb3dlc3RDYWxsUHJpY2UsXG4gICAgICAgICAgICBtYXJrZXRSZWFkeSxcbiAgICAgICAgICAgIGxhdGVzdFByaWNlLFxuICAgICAgICAgICAgbWFya2V0U3RhdHMsXG4gICAgICAgICAgICBzaG93RGVwdGhDaGFydCxcbiAgICAgICAgICAgIGFjY291bnRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgYmFzZVN5bWJvbCA9IGJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGNvbnN0IHF1b3RlU3ltYm9sID0gcXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgLy8gRmF2b3JpdGUgc3RhclxuICAgICAgICBjb25zdCBtYXJrZXRJRCA9IGAke3F1b3RlU3ltYm9sfV8ke2Jhc2VTeW1ib2x9YDtcbiAgICAgICAgY29uc3Qgc3RhckNsYXNzID0gc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKVxuICAgICAgICAgICAgPyBcImdvbGQtc3RhclwiXG4gICAgICAgICAgICA6IFwiZ3JleS1zdGFyXCI7XG5cbiAgICAgICAgLy8gTWFya2V0IHN0YXRzXG4gICAgICAgIGNvbnN0IGRheUNoYW5nZSA9IG1hcmtldFN0YXRzLmdldChcImNoYW5nZVwiKTtcblxuICAgICAgICBjb25zdCBkYXlDaGFuZ2VDbGFzcyA9XG4gICAgICAgICAgICBwYXJzZUZsb2F0KGRheUNoYW5nZSkgPT09IDBcbiAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICA6IHBhcnNlRmxvYXQoZGF5Q2hhbmdlKSA8IDBcbiAgICAgICAgICAgICAgICAgICAgPyBcIm5lZ2F0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcInBvc2l0aXZlXCI7XG4gICAgICAgIGNvbnN0IHZvbHVtZUJhc2UgPSBtYXJrZXRTdGF0cy5nZXQoXCJ2b2x1bWVCYXNlXCIpO1xuICAgICAgICBjb25zdCB2b2x1bWVRdW90ZSA9IG1hcmtldFN0YXRzLmdldChcInZvbHVtZVF1b3RlXCIpO1xuICAgICAgICBjb25zdCBkYXlDaGFuZ2VXaXRoU2lnbiA9IGRheUNoYW5nZSA+IDAgPyBcIitcIiArIGRheUNoYW5nZSA6IGRheUNoYW5nZTtcblxuICAgICAgICBjb25zdCB2b2x1bWUyNGggPSB0aGlzLnN0YXRlLnZvbHVtZVNob3dRdW90ZSA/IHZvbHVtZVF1b3RlIDogdm9sdW1lQmFzZTtcbiAgICAgICAgY29uc3Qgdm9sdW1lMjRoQXNzZXQgPSB0aGlzLnN0YXRlLnZvbHVtZVNob3dRdW90ZVxuICAgICAgICAgICAgPyBxdW90ZUFzc2V0XG4gICAgICAgICAgICA6IGJhc2VBc3NldDtcblxuICAgICAgICBsZXQgc2hvd0NvbGxhdGVyYWxSYXRpbyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHF1b3RlSWQgPSBxdW90ZUFzc2V0LmdldChcImlkXCIpO1xuICAgICAgICBjb25zdCBiYXNlSWQgPSBiYXNlQXNzZXQuZ2V0KFwiaWRcIik7XG5cbiAgICAgICAgY29uc3QgbG9va0ZvckJpdEFzc2V0ID1cbiAgICAgICAgICAgIHF1b3RlSWQgPT09IFwiMS4zLjBcIiA/IGJhc2VJZCA6IGJhc2VJZCA9PT0gXCIxLjMuMFwiID8gcXVvdGVJZCA6IG51bGw7XG4gICAgICAgIGNvbnN0IHBvc3NpYmxlQml0QXNzZXQgPSBsb29rRm9yQml0QXNzZXRcbiAgICAgICAgICAgID8gQ2hhaW5TdG9yZS5nZXRBc3NldChsb29rRm9yQml0QXNzZXQpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGNvbnN0IGlzQml0QXNzZXQgPSBwb3NzaWJsZUJpdEFzc2V0XG4gICAgICAgICAgICA/ICEhcG9zc2libGVCaXRBc3NldC5nZXQoXCJiaXRhc3NldFwiKVxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgbGV0IGNvbGxPcmRlck9iamVjdCA9IFwiXCI7XG4gICAgICAgIGxldCBzZXR0bGVQcmljZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGlzQml0QXNzZXQpIHtcbiAgICAgICAgICAgIGlmIChhY2NvdW50LnRvSlMgJiYgYWNjb3VudC5oYXMoXCJjYWxsX29yZGVyc1wiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxfb3JkZXJzID0gYWNjb3VudC5nZXQoXCJjYWxsX29yZGVyc1wiKS50b0pTKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxfb3JkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWxsSUQgPSBjYWxsX29yZGVyc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBDaGFpblN0b3JlLmdldE9iamVjdChjYWxsSUQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVidEFzc2V0ID0gcG9zaXRpb24uZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsX3ByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnRBc3NldCA9PT0gbG9va0ZvckJpdEFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsT3JkZXJPYmplY3QgPSBjYWxsSUQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29sbGF0ZXJhbFJhdGlvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBTZXR0bG1lbnQgT2Zmc2V0ICovXG4gICAgICAgICAgICBsZXQgc2V0dGxlQXNzZXQgPVxuICAgICAgICAgICAgICAgIGJhc2VBc3NldC5nZXQoXCJpZFwiKSA9PSBcIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgPyBxdW90ZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgIDogcXVvdGVBc3NldC5nZXQoXCJpZFwiKSA9PSBcIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYmFzZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChzZXR0bGVBc3NldCAmJiBmZWVkUHJpY2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0X3BlcmNlbnQgPSBzZXR0bGVBc3NldFxuICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJvcHRpb25zXCJdKVxuICAgICAgICAgICAgICAgICAgICAudG9KUygpLmZvcmNlX3NldHRsZW1lbnRfb2Zmc2V0X3BlcmNlbnQ7XG4gICAgICAgICAgICAgICAgc2V0dGxlUHJpY2UgPVxuICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXQuZ2V0KFwiaWRcIikgPT0gXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGZlZWRQcmljZS50b1JlYWwoKSAvICgxICsgb2Zmc2V0X3BlcmNlbnQgLyAxMDAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmVlZFByaWNlLnRvUmVhbCgpICogKDEgKyBvZmZzZXRfcGVyY2VudCAvIDEwMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0b3IgPSByZXF1aXJlKFwiY291bnRlcnBhcnRcIik7XG5cbiAgICAgICAgbGV0IGlzUXVvdGVTZWxlY3RlZCA9XG4gICAgICAgICAgICAhIXRoaXMuc3RhdGUuc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldCAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZE1hcmtldFBpY2tlckFzc2V0ID09IHF1b3RlU3ltYm9sO1xuICAgICAgICBsZXQgaXNCYXNlU2VsZWN0ZWQgPVxuICAgICAgICAgICAgISF0aGlzLnN0YXRlLnNlbGVjdGVkTWFya2V0UGlja2VyQXNzZXQgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRNYXJrZXRQaWNrZXJBc3NldCA9PSBiYXNlU3ltYm9sO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIG5vLXBhZGRpbmcgb3ZlcmZsb3ctdmlzaWJsZSB0b3AtYmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG92ZXJmbG93LXZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFoYXNQcmVkaWN0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubWFya2V0UGlja2VyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc1F1b3RlU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjMjE5NmYzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nOiBcIjAgNXB4XCJ9fT4vPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm1hcmtldFBpY2tlci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0Jhc2VTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiMyMTk2ZjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Jhc2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWFya2V0LXN5bWJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YCR7cXVvdGVTeW1ib2x9IDogJHtiYXNlU3ltYm9sfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiNXB4IDAgMCA1cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGF0LXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnRyYWRpbmdfcGFpclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuc3dpdGNoTWFya2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7YmFzZVN5bWJvbH1fJHtxdW90ZVN5bWJvbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbnRybz17dHJhbnNsYXRvci50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5zd2l0Y2hfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2h1ZmZsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNodWZmbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuc2h1ZmZsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRNYXJrZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbnRybz17dHJhbnNsYXRvci50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5mYXZvdXJpdGVfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlfc3Rhci5tYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgd3JhcCBtYXJrZXQtc3RhdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1hcmtldC1zdGF0cyBzdGF0cyB0b3Atc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhdGVzdFByaWNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlU3RhdFdpdGhMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbG9yQ2hhbmdlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17bGF0ZXN0UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldD17bWFya2V0SUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLmxhdGVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLW9yZGVyLTEgc3RyZXNzZWQtc3RhdCBkYWlseV9jaGFuZ2UgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheUNoYW5nZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cInZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRSZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkYXlDaGFuZ2VXaXRoU2lnblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQuaG91cl8yNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2b2x1bWVCYXNlID49IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VTdGF0V2l0aExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ29sb3JDaGFuZ2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VWb2x1bWVCYXNlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5PXttYXJrZXRSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFscz17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ZvbHVtZTI0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlLW9yZGVyLTIgY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXt2b2x1bWUyNGhBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQ9e21hcmtldElEfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS52b2x1bWVfMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaGFzUHJlZGljdGlvbiAmJiBmZWVkUHJpY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VTdGF0V2l0aExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlQ29sb3JDaGFuZ2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbFRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAuZmVlZF9wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeT17bWFya2V0UmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZS1vcmRlci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17ZmVlZFByaWNlLnRvUmVhbCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2VBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQ9e21hcmtldElEfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5mZWVkX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhhc1ByZWRpY3Rpb24gJiYgZmVlZFByaWNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlU3RhdFdpdGhMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbG9yQ2hhbmdlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xUaXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLnNldHRsZV9wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeT17bWFya2V0UmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZS1vcmRlci00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17c2V0dGxlUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldD17bWFya2V0SUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnNldHRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dDb2xsYXRlcmFsUmF0aW8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhjaGFuZ2VIZWFkZXJDb2xsYXRlcmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0PXtjb2xsT3JkZXJPYmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG93ZXN0Q2FsbFByaWNlICYmIHNob3dDYWxsTGltaXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2VTdGF0V2l0aExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbFRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAuY2FsbF9saW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeT17bWFya2V0UmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZS1vcmRlci01IGlzLWNhbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtsb3dlc3RDYWxsUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldD17bWFya2V0SUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmNhbGxfbGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZWRQcmljZSAmJiBzaG93Q2FsbExpbWl0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlU3RhdFdpdGhMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xUaXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLm1hcmdpbl9wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeT17bWFya2V0UmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZS1vcmRlci02IGlzLWNhbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtmZWVkUHJpY2UuZ2V0U3F1ZWV6ZVByaWNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2VBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQ9e21hcmtldElEfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5zcXVlZXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1hcmtldC1zdGF0cyBzdGF0cyB0b3Atc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdHJlc3NlZC1zdGF0IGlucHV0IGNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaZkFwaS5wdWJsaXNoKFwiY2hhcnRfb3B0aW9uc1wiLCBcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jaGFydF9tb2RhbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxCYXNlTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaGFydF9vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgbW9kYWxIZWFkZXI9XCJleGNoYW5nZS5jaGFydF9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgIG5vTG9nb1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvY2stbGlzdCBuby1ib3JkZXItYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNoYXJ0X3R5cGVcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aXRoLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVwdGhDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZGVwdGhfY2hhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicHJpY2VfY2hhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3Mtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzaG93RGVwdGhDaGFydCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZV9jaGFydFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXNob3dEZXB0aENoYXJ0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmtldF9kZXB0aFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uVG9nZ2xlQ2hhcnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hcmtldF9kZXB0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2Uub3JkZXJfZGVwdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZV9jaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucHJpY2VfaGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJibG9jay1saXN0IG5vLWJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2hhcnRfaGVpZ2h0XCIgLz46XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENoYXJ0SGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaGFydEhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0SGVpZ2h0OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZXRDaGFydEhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0Jhc2VNb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmljZVN0YXRXaXRoTGFiZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhbmdlOiBudWxsLFxuICAgICAgICAgICAgY3VyTWFya2V0OiBudWxsLFxuICAgICAgICAgICAgbWFya2V0Q2hhbmdlOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy52b2x1bWUyICYmIG5leHRQcm9wcy52b2x1bWUyICE9PSB0aGlzLnByb3BzLnZvbHVtZTIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMucHJpY2UgIT09IHRoaXMucHJvcHMucHJpY2UgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5yZWFkeSAhPT0gdGhpcy5wcm9wcy5yZWFkeVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYW5nZTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCB7bWFya2V0fSA9IG5leHRQcm9wcztcblxuICAgICAgICBsZXQgY2hlY2tNYXJrZXRDaGFuZ2UgPSB0aGlzLnN0YXRlLmN1ck1hcmtldCAhPT0gbWFya2V0O1xuICAgICAgICBsZXQgbWFya2V0Q2hhbmdlID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VyTWFya2V0ID09IG51bGwgPyBmYWxzZSA6IGNoZWNrTWFya2V0Q2hhbmdlO1xuXG4gICAgICAgIHN0YXRlW1wibWFya2V0Q2hhbmdlXCJdID0gbWFya2V0Q2hhbmdlO1xuICAgICAgICBzdGF0ZVtcImN1ck1hcmtldFwiXSA9IG1hcmtldDtcbiAgICAgICAgc3RhdGVbXCJwcmV2QXNzZXRcIl0gPSB0aGlzLnN0YXRlLm1hcmtldEFzc2V0O1xuXG4gICAgICAgIGlmIChuZXh0UHJvcHMucmVhZHkgJiYgdGhpcy5wcm9wcy5yZWFkeSkge1xuICAgICAgICAgICAgc3RhdGVbXCJjaGFuZ2VcIl0gPVxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQobmV4dFByb3BzLnByaWNlKSAtIHBhcnNlRmxvYXQodGhpcy5wcm9wcy5wcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIFJlYWN0VG9vbHRpcC5yZWJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgcmVhZHksXG4gICAgICAgICAgICB2b2x1bWUsXG4gICAgICAgICAgICB0b29sVGlwLFxuICAgICAgICAgICAgaWdub3JlQ29sb3JDaGFuZ2VcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7Y2hhbmdlLCBtYXJrZXRDaGFuZ2V9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGNoYW5nZUNsYXNzZXMgPSBudWxsO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFya2V0Q2hhbmdlICYmXG4gICAgICAgICAgICBjaGFuZ2UgJiZcbiAgICAgICAgICAgIGNoYW5nZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgaWdub3JlQ29sb3JDaGFuZ2UgIT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjaGFuZ2VDbGFzc2VzID0gY2hhbmdlID4gMCA/IFwicHVsc2F0ZSBncmVlblwiIDogXCJwdWxzYXRlIHJlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbHVlID0gIXZvbHVtZVxuICAgICAgICAgICAgPyB1dGlscy5wcmljZV90ZXh0KHByaWNlLCBxdW90ZSwgYmFzZSlcbiAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X3ZvbHVtZShwcmljZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICBcInN0cmVzc2VkLXN0YXRcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUNsYXNzZXNcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICBkYXRhLXBsYWNlPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRpcD17dG9vbFRpcH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWUgc3RhdC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IXJlYWR5ID8gMCA6IHZhbHVlfSZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN5bWJvbC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtjb250ZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgTWFyZ2luUG9zaXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGRlYnRBc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGNvbGxhdGVyYWxBc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgX2dldEZlZWRQcmljZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAxIC9cbiAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlYnRBc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzZXR0bGVtZW50X3ByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29sbGF0ZXJhbEFzc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVidEFzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlYnRBc3NldFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9nZXRDb2xsYXRlcmFsUmF0aW8oKSB7XG4gICAgICAgIGNvbnN0IGNvID0gdGhpcy5wcm9wcy5vYmplY3QudG9KUygpO1xuICAgICAgICBjb25zdCBjID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcbiAgICAgICAgICAgIGNvLmNvbGxhdGVyYWwsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbGxhdGVyYWxBc3NldFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChjby5kZWJ0LCB0aGlzLnByb3BzLmRlYnRBc3NldCk7XG4gICAgICAgIHJldHVybiBjIC8gKGQgLyB0aGlzLl9nZXRGZWVkUHJpY2UoKSk7XG4gICAgfVxuXG4gICAgX2dldE1SKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWJ0QXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgIFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXG4gICAgICAgICAgICBdKSAvIDEwMDBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfZ2V0U3RhdHVzQ2xhc3MoKSB7XG4gICAgICAgIGxldCBjciA9IHRoaXMuX2dldENvbGxhdGVyYWxSYXRpbygpO1xuICAgICAgICBjb25zdCBtciA9IHRoaXMuX2dldE1SKCk7XG5cbiAgICAgICAgaWYgKGlzTmFOKGNyKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChjciA8IG1yKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJkYW5nZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjciA8IG1yICsgMC41KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ3YXJuaW5nXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRDUlRpcCgpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzQ2xhc3MgPSB0aGlzLl9nZXRTdGF0dXNDbGFzcygpO1xuICAgICAgICBjb25zdCBtciA9IHRoaXMuX2dldE1SKCk7XG4gICAgICAgIGlmICghc3RhdHVzQ2xhc3MgfHwgc3RhdHVzQ2xhc3MgPT09IFwiXCIpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGlmIChzdGF0dXNDbGFzcyA9PT0gXCJkYW5nZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuY3JfZGFuZ2VyXCIsIHttcn0pO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1c0NsYXNzID09PSBcIndhcm5pbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuY3Jfd2FybmluZ1wiLCB7bXJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge29iamVjdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjbyA9IG9iamVjdC50b0pTKCk7XG4gICAgICAgIGNvbnN0IGNyID0gdGhpcy5fZ2V0Q29sbGF0ZXJhbFJhdGlvKCk7XG4gICAgICAgIGNvbnN0IGQgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KGNvLmRlYnQsIHRoaXMucHJvcHMuZGVidEFzc2V0KTtcblxuICAgICAgICBjb25zdCBzdGF0dXNDbGFzcyA9IHRoaXMuX2dldFN0YXR1c0NsYXNzKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwic3RyZXNzZWQtc3RhdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgIGRhdGEtdGlwPXt0aGlzLl9nZXRDUlRpcCgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NuYW1lcyhcInZhbHVlIHN0YXQtcHJpbWFyeVwiLCBzdGF0dXNDbGFzcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoY3IsIDIpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5jb2xsYXRlcmFsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuTWFyZ2luUG9zaXRpb24gPSBCaW5kVG9DaGFpblN0YXRlKE1hcmdpblBvc2l0aW9uKTtcblxuY2xhc3MgRXhjaGFuZ2VIZWFkZXJDb2xsYXRlcmFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBvYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7b2JqZWN0LCBhY2NvdW50fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGRlYnRBc3NldCA9IG9iamVjdC5nZXRJbihbXCJjYWxsX3ByaWNlXCIsIFwicXVvdGVcIiwgXCJhc3NldF9pZFwiXSk7XG4gICAgICAgIGxldCBjb2xsYXRlcmFsQXNzZXQgPSBvYmplY3QuZ2V0SW4oW1wiY2FsbF9wcmljZVwiLCBcImJhc2VcIiwgXCJhc3NldF9pZFwiXSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYXJnaW5Qb3NpdGlvblxuICAgICAgICAgICAgICAgIGRlYnRBc3NldD17ZGVidEFzc2V0fVxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxBc3NldD17Y29sbGF0ZXJhbEFzc2V0fVxuICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cbkV4Y2hhbmdlSGVhZGVyQ29sbGF0ZXJhbCA9IEJpbmRUb0NoYWluU3RhdGUoRXhjaGFuZ2VIZWFkZXJDb2xsYXRlcmFsKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhjaGFuZ2VIZWFkZXJDb2xsYXRlcmFsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8qKlxuICogIFdyYXBwZXIgY29tcG9uZW50IGZvciBjaGF0YnJvIGlmcmFtZVxuICpcbiAqL1xuY2xhc3MgQ2hhdEJybyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZnJhbWVIZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCB8fCBcIjMwJVwiO1xuXG4gICAgICAgIGxldCBjdXJyZW50TG9jYWxlID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKTtcblxuICAgICAgICBsZXQgY2hhdFVybCA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAoY3VycmVudExvY2FsZSkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjaGF0VXJsID0gYGh0dHBzOi8vY2hhdC5ydWRleC5vcmcvJHtjdXJyZW50TG9jYWxlfS9gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogZnJhbWVIZWlnaHQsIHdpZHRoOiBcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgc3JjPXtjaGF0VXJsfVxuICAgICAgICAgICAgICAgIHNhbmRib3g9XCJhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1mb3JtcyBhbGxvdy1zY3JpcHRzIGFsbG93LXBvcHVwc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IGZyYW1lSGVpZ2h0LCB3aWR0aDogXCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIHNyYz17Y2hhdFVybH1cbiAgICAgICAgICAgICAgICBzYW5kYm94PVwiYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctZm9ybXMgYWxsb3ctc2NyaXB0cyBhbGxvdy1wb3B1cHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNoYXRCcm8ucHJvcFR5cGVzID0ge1xuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJybztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUZBO0FBUkE7QUF5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBekdBO0FBaUhBOzs7O0FBeEhBO0FBQ0E7QUEwSEE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTs7O0FBYUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBbktBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUE0SkE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQTBEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUEzQ0E7QUFDQTtBQXhEQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQXZCQTtBQXdCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTs7O0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBU0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFmQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBUUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFpRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFDQTtBQTZCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBQ0E7QUFTQTtBQVNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQWtEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0lBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBN0VBO0FBQ0E7QUFvRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUEvRUE7QUFDQTtBQXNGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQUNBO0FBa0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFsQkE7QUFMQTtBQTJCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUtBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQWpEQTtBQURBO0FBdURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQVhBO0FBY0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBM0JBO0FBaEZBO0FBeEZBO0FBTkE7QUFtTkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBTUE7QUFDQTtBQUNBO0FBbEJBO0FBREE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFiQTtBQWdCQTtBQXhCQTtBQThCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFLQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFiQTtBQWdCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUF6Q0E7QUF6QkE7QUExREE7QUFOQTtBQTRJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFYQTtBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQVRBO0FBcFlBO0FBeEJBO0FBNGFBOzs7O0FBaDdEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBMDZEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3OURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJBO0FBMkJBOzs7O0FBbkRBO0FBQ0E7QUFxREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBR0E7QUFTQTtBQVNBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQWxCQTtBQXdCQTs7OztBQTdFQTtBQUNBO0FBK0VBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXRCQTtBQXlCQTs7OztBQTVDQTtBQUNBO0FBOENBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFNQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFTQTtBQVNBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQWJBO0FBbUJBOzs7O0FBbkVBO0FBQ0E7QUFxRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBaEJBO0FBbUJBOzs7QUFsQ0E7QUFDQTtBQUNBOzs7O0FBVkE7QUFDQTtBQTRDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBNERBO0FBQ0E7QUFDQTtBQTlEQTtBQStEQTtBQUFBO0FBQ0E7QUFoRUE7QUE4SUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWxKQTtBQW9KQTtBQUNBO0FBQ0E7QUFwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBVkE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBZUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFnQkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBTkE7QUFEQTtBQXRCQTtBQURBO0FBQ0E7QUFvQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBTkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUxBO0FBckJBO0FBREE7QUFDQTtBQW9DQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBWEE7QUFhQTtBQWJBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBakJBO0FBNkJBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBUEE7QUFGQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFWQTtBQXREQTtBQXNFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFKQTtBQVRBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRBO0FBREE7QUF0R0E7QUFOQTtBQW1JQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFYQTtBQWFBO0FBYkE7QUFBQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFqQkE7QUE2QkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFQQTtBQUZBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQVZBO0FBdERBO0FBc0VBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUpBO0FBVEE7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFEQTtBQXBHQTtBQU5BO0FBeklBO0FBMlFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFYQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBREE7QUFWQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFHQTtBQUtBO0FBVkE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBSUE7QUFJQTtBQVRBO0FBTkE7QUFGQTtBQWhDQTtBQURBO0FBSkE7QUFaQTtBQStFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQURBO0FBVEE7QUExSEE7QUFEQTtBQWdKQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUZBO0FBYkE7QUFqSkE7QUE4S0E7QUFDQTs7OztBQTUyQkE7QUFDQTtBQTgyQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25yQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVZBO0FBaUJBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVZBO0FBdUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBWkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUF2QkE7QUFEQTtBQURBO0FBREE7QUFvQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBREE7QUFMQTtBQTNEQTtBQURBO0FBNkVBOzs7O0FBdk9BO0FBQ0E7QUF5T0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BOzs7O0FBdkNBO0FBQ0E7QUFEQTtBQUVBO0FBTUE7QUFDQTtBQVJBO0FBQ0E7QUFDQTtBQXVDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFWQTtBQUNBO0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQW1CQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFFQTtBQU9BO0FBT0E7QUFJQTtBQUNBO0FBdEVBO0FBQUE7QUFBQTtBQUNBO0FBNEVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBUEE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFWQTtBQUZBO0FBZkE7QUFvQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFBQTtBQURBO0FBQ0E7QUF0SEE7QUFBQTtBQUFBO0FBQ0E7QUFpSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBUEE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFWQTtBQUZBO0FBZkE7QUFvQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFBQTtBQURBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFyUUE7QUFBQTtBQUFBO0FBQ0E7QUF3UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBS0E7QUFQQTtBQVZBO0FBREE7QUF3QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQUE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVhBO0FBREE7QUFEQTtBQXVCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFYQTtBQURBO0FBREE7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBWEE7QUFEQTtBQURBO0FBOUdBO0FBdUlBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQWJBO0FBMEJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBYkE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFiQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQWRBO0FBREE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBTUE7QUFoQkE7QUFrQkE7QUFsQkE7QUFQQTtBQXZCQTtBQXFEQTtBQTFIQTtBQTRIQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBSEE7QUFLQTtBQU5BO0FBV0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQWpCQTtBQU5BO0FBTEE7QUFtQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFIQTtBQUtBO0FBTkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFqQkE7QUF1QkE7QUFDQTtBQURBO0FBdkJBO0FBUkE7QUFWQTtBQW1EQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBTEE7QUFVQTtBQVZBO0FBWUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQWRBO0FBZkE7QUFMQTtBQXZGQTtBQURBO0FBc0lBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQWNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTkE7QUFlQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUxBO0FBbExBO0FBREE7QUFuSUE7QUF4SUE7QUFnZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFWQTtBQWhlQTtBQThlQTs7OztBQW4xQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBWUE7QUFEQTtBQUNBO0FBQ0E7QUF5MEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzMyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUxBO0FBZUE7QUFmQTtBQURBO0FBSEE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFiQTtBQXRCQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBdkNBO0FBNkNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVJBO0FBSEE7QUFtQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVBBO0FBREE7QUFKQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFQQTtBQURBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUtBO0FBWkE7QUFEQTtBQURBO0FBUEE7QUFEQTtBQTlCQTtBQTJEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQW5LQTtBQXlLQTs7OztBQTFiQTtBQUNBO0FBNGJBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25lQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBakNBO0FBQ0E7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFQQTtBQURBO0FBWUE7Ozs7QUFsSUE7QUFDQTtBQURBOzs7Ozs7O0FDUkE7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUE1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFxQkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7OztBQUdBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTs7O0FBR0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFhQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBREE7QUF4QkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSUE7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBMUJBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFMQTtBQURBO0FBdEdBO0FBQ0E7QUFrSEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBYkE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQVFBO0FBMUJBO0FBK0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQVhBO0FBb0JBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQTVCQTtBQURBO0FBbUNBO0FBQ0E7Ozs7QUE1YkE7QUFDQTtBQThiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBUUE7QUFSQTtBQVdBOzs7O0FBZEE7QUFDQTtBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBTUE7QUFRQTtBQVFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTkE7QUFXQTs7OztBQXJHQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFxR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBWEE7QUFGQTtBQThCQTs7OztBQWhEQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFSQTtBQVNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBYkE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBM0JBO0FBZ0RBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFYQTtBQXZCQTtBQXZEQTtBQVJBO0FBMkdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWRBO0FBcUJBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQXRHQTtBQXNIQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQVBBO0FBREE7QUF2SEE7QUFKQTtBQTVHQTtBQXNQQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF6QkE7QUFEQTtBQURBO0FBSkE7QUF3Q0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFEQTtBQVBBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQWRBO0FBREE7QUFKQTtBQTlDQTtBQXZQQTtBQW9VQTs7OztBQXBlQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQW5CQTtBQXlCQTs7OztBQW5HQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFxQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFnQkE7Ozs7QUEzR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUEyR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTs7OztBQW5CQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFtQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBNUJBO0FBQ0E7QUE4QkE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9