(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 2410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRow", function() { return OrderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOpenOrders", function() { return MyOpenOrders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(727);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2411);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OpenSettleOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2432);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(569);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2448);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2434);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(713);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1223);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(785);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(418);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(584);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2449);
/* harmony import */ var _Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2450);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1344);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1276);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_19__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var leftAlign = { textAlign: "left" };


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
                isMyAccount = _props.isMyAccount;


            return !dashboard ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "thead",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: this.props.leftAlign ? "left" : "" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                            className: "header-sub-title",
                            content: "exchange.price"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        {
                            style: this.props.leftAlign ? { textAlign: "left" } : null
                        },
                        baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: quoteSymbol })
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        {
                            style: this.props.leftAlign ? { textAlign: "left" } : null
                        },
                        baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: baseSymbol })
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: this.props.leftAlign ? "left" : "" } },
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
                    {
                        style: { width: "25%", textAlign: "right" },
                        className: "tooltip",
                        "data-tip": order.expiration.toLocaleString()
                    },
                    isCall ? null : counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.localize(new Date(order.expiration), {
                        type: "date",
                        format: "short_custom"
                    })
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
                    isBid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_17__["MarketPrice"], {
                        base: base.get("id"),
                        quote: quote.get("id"),
                        force_direction: base.get("symbol"),
                        hide_symbols: true,
                        hide_asset: true
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_17__["MarketPrice"], {
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_16__["EquivalentValueComponent"], {
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
            activeTab: props.activeTab
        };
        _this3._getOrders = _this3._getOrders.bind(_this3);
        return _this3;
    }

    _createClass(MyOpenOrders, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var contentContainer = this.refs.container;
            if (contentContainer) perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.initialize(contentContainer);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var contentContainer = this.refs.container;
            if (contentContainer) perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a.update(contentContainer);
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
                var o = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getObject(order);
                if (!o) return null;
                var sellBase = o.getIn(["sell_price", "base", "asset_id"]),
                    sellQuote = o.getIn(["sell_price", "quote", "asset_id"]);
                if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
                    return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["LimitOrder"](o.toJS(), assets, quote.get("id"));
                }
            }).filter(function (a) {
                return !!a;
            });

            var callOrders = call_orders.toArray().map(function (order) {
                try {
                    var o = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getObject(order);
                    if (!o) return null;
                    var sellBase = o.getIn(["call_price", "base", "asset_id"]),
                        sellQuote = o.getIn(["call_price", "quote", "asset_id"]);
                    if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
                        return feedPrice ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["CallOrder"](o.toJS(), assets, quote.get("id"), feedPrice) : null;
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

            setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_19___default.a.rebuild, 1000);
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
            var activeTab = this.state.activeTab;


            if (!base || !quote) return null;

            var contentContainer = void 0;

            // Is asset a BitAsset with Settlements
            var baseIsBitAsset = base.get("bitasset_data_id") && settleOrders.size > 0 ? true : false;
            var quoteIsBitAsset = quote.get("bitasset_data_id") && settleOrders.size > 0 ? true : false;

            // Default Tab
            if (!activeTab || !baseIsBitAsset && !quoteIsBitAsset) {
                activeTab = "my_orders";
            }

            {
                /* Users Open Orders Tab (default) */
            }
            if (activeTab == "my_orders") {
                var orders = this._getOrders();
                var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: { textAlign: "center" }, colSpan: "5" },
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

                contentContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { component: "tbody", transitionName: "newrow" },
                    rows.length ? rows : emptyRow
                );
            }

            {
                /* Open Settle Orders */
            }

            if (activeTab && activeTab == "open_settlement") {
                contentContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSettleOrders__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    key: "settle_orders",
                    orders: settleOrders,
                    base: base,
                    quote: quote,
                    baseSymbol: baseSymbol,
                    quoteSymbol: quoteSymbol
                });
            }

            var hc = "mymarkets-header clickable";
            var myOrdersClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()(hc, { inactive: activeTab !== "my_orders" });
            var openSettlementClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()(hc, {
                inactive: activeTab !== "open_settlement"
            });
            var myOrdersWidth = baseIsBitAsset || quoteIsBitAsset ? "50%" : "100%";
            var openSettlementWidth = baseIsBitAsset || quoteIsBitAsset ? "inherit" : "none";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    style: { marginBottom: "15px" },
                    key: "open_orders",
                    className: this.props.className
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "exchange-bordered small-12",
                        style: { height: "auto", minHeight: 266 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink left-orderbook-header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: { width: myOrdersWidth },
                                className: myOrdersClass,
                                onClick: this._changeTab.bind(this, "my_orders")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.my_orders" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: { display: openSettlementWidth },
                                className: openSettlementClass,
                                onClick: this._changeTab.bind(this, "open_settlement")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "exchange.settle_orders" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink left-orderbook-header market-right-padding-only" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            activeTab == "my_orders" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableHeader, {
                                rightAlign: true,
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
                            style: { overflow: "hidden", maxHeight: 200 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            contentContainer
                        )
                    )
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

/***/ 2432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1223);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2433);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2434);
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                name: quoteSymbol
                            }),
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
                    { style: { textAlign: "right", width: "25%" } },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(price, quote.get("precision")),
                    " ",
                    amountSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right", width: "25%" } },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!order.isBid() ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right", width: "25%" } },
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!order.isBid() ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        style: { textAlign: "right", width: "25%" },
                        className: "tooltip",
                        "data-tip": new Date(order.settlement_date)
                    },
                    counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.localize(new Date(order.settlement_date), {
                        type: "date",
                        format: browser_locale__WEBPACK_IMPORTED_MODULE_6___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history"
                    })
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
                return null;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__["default"],
                { component: "tbody", transitionName: "newrow" },
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

/***/ 2448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(569);
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

/***/ 2450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPrice", function() { return MarketPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketStats", function() { return MarketStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1224);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1273);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(569);
/* harmony import */ var _FormattedPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1344);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1272);
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

/***/ 2468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(720);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(849);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(584);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(569);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(878);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(877);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(567);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1276);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1240);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1243);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(785);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(863);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(583);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1223);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(418);
/* harmony import */ var _Exchange_ExchangeInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1253);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(718);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(571);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
























// import DepositFiatOpenLedger from "components/DepositWithdraw/openledger/DepositFiatOpenLedger";
// import WithdrawFiatOpenLedger from "components/DepositWithdraw/openledger/WithdrawFiatOpenLedger";

var DepositWithdrawContent = function (_DecimalChecker) {
    _inherits(DepositWithdrawContent, _DecimalChecker);

    function DepositWithdrawContent(props) {
        _classCallCheck(this, DepositWithdrawContent);

        var _this = _possibleConstructorReturn(this, (DepositWithdrawContent.__proto__ || Object.getPrototypeOf(DepositWithdrawContent)).call(this));

        _this.state = {
            toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(props.walletType),
            withdrawValue: "",
            amountError: null,
            symbol: props.asset.get("symbol"),
            to_withdraw: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                asset_id: props.asset.get("id"),
                precision: props.asset.get("precision")
            }),
            fee_asset_id: "1.3.0",
            feeStatus: {},
            loading: false,
            emptyAddressDeposit: false
        };

        _this._validateAddress(_this.state.toAddress, props);

        _this.addDepositAddress = _this.addDepositAddress.bind(_this);
        _this._checkFeeStatus = _this._checkFeeStatus.bind(_this);
        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._getCurrentBalance = _this._getCurrentBalance.bind(_this);
        _this._getFee = _this._getFee.bind(_this);
        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._updateFee.bind(_this), 250);
        return _this;
    }

    _createClass(DepositWithdrawContent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._getDepositAddress();

            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.asset && this.props.asset && np.asset.get("id") !== this.props.asset.get("id")) {
                this.setState({
                    to_withdraw: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                        asset_id: np.asset.get("id"),
                        precision: np.asset.get("precision")
                    }),
                    gateFee: np.asset.get("gateFee"),
                    intermediateAccount: np.asset.get("intermediateAccount"),
                    symbol: np.asset.get("symbol"),
                    memo: "",
                    withdrawValue: "",
                    receive_address: null,
                    toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["WithdrawAddresses"].getLast(np.walletType)
                }, this._getDepositAddress);
            }
        }
    }, {
        key: "_getDepositAddress",
        value: function _getDepositAddress() {
            if (!this.props.backingCoinType) return;

            var receive_address = Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["getDepositAddress"])({
                coin: "open." + this.props.backingCoinType.toLowerCase(),
                account: this.props.account,
                stateCallback: this.addDepositAddress
            });

            if (!receive_address) {
                Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["requestDepositAddress"])(this._getDepositObject());
            } else {
                this.setState({
                    receive_address: receive_address
                });
            }
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject() {
            return {
                inputCoinType: this.props.backingCoinType.toLowerCase(),
                outputCoinType: this.props.symbol.toLowerCase(),
                outputAddress: this.props.sender.get("name"),
                stateCallback: this.addDepositAddress
            };
        }
    }, {
        key: "requestDepositAddressLoad",
        value: function requestDepositAddressLoad() {
            this.setState({
                loading: true,
                emptyAddressDeposit: false
            });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["requestDepositAddress"])(this._getDepositObject());
        }
    }, {
        key: "addDepositAddress",
        value: function addDepositAddress(receive_address) {
            if (receive_address.error) {
                receive_address.error.message === "no_address" ? this.setState({ emptyAddressDeposit: true }) : this.setState({ emptyAddressDeposit: false });
            }

            this.setState({
                receive_address: receive_address,
                loading: false
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a.rebuild();
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            e.preventDefault();
            if (this.state.to_withdraw.getAmount() === 0) {
                return this.setState({
                    amountError: "transfer.errors.pos"
                });
            }

            if (!this.props.intermediateAccount) return;

            var fee = this._getFee();
            var gateFee = this._getGateFee();

            var sendAmount = this.state.to_withdraw.clone();

            var balanceAmount = sendAmount.clone(this._getCurrentBalance().get("balance"));

            sendAmount.plus(gateFee);

            /* Insufficient balance */
            if (balanceAmount.lt(sendAmount)) {
                // Send the originally entered amount
                sendAmount = this.state.to_withdraw.clone();
            }

            actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__["default"].transfer(this.props.sender.get("id"), this.props.intermediateAccount, this.state.to_withdraw.getAmount(), this.state.to_withdraw.asset_id, this.props.backingCoinType.toLowerCase() + ":" + this.state.toAddress + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : ""), null, fee.asset_id);
        }
    }, {
        key: "_updateAmount",
        value: function _updateAmount() {
            var feeAmount = this._getFee();
            var currentBalance = this._getCurrentBalance();

            var total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                amount: currentBalance ? currentBalance.get("balance") : 0,
                asset_id: this.props.asset.get("id"),
                precision: this.props.asset.get("precision")
            });

            // Subtract the fee if it is using the same asset
            if (total.asset_id === feeAmount.asset_id) {
                total.minus(feeAmount);
            }

            this.state.to_withdraw.setAmount({ sats: total.getAmount() });
            this.setState({
                withdrawValue: total.getAmount({ real: true }),
                amountError: null
            }, this._checkBalance);
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this2 = this;

            var account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.sender;

            if (!account) return;

            var assets = ["1.3.0", this.state.to_withdraw.asset_id];
            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_16__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: _this2.props.backingCoinType.toLowerCase() + ":" + _this2.state.toAddress + (_this2.state.memo ? ":" + _this2.state.memo : "")
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(_this2.state.feeStatus, feeStatus)) {
                    _this2.setState({
                        feeStatus: feeStatus
                    });
                }
                _this2._checkBalance();
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this3 = this;

            var fee_asset_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.fee_asset_id;

            if (!this.props.sender) return null;
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_16__["checkFeeStatusAsync"])({
                accountID: this.props.sender.get("id"),
                feeID: fee_asset_id,
                options: ["price_per_kbyte"],
                data: {
                    type: "memo",
                    content: this.props.backingCoinType.toLowerCase() + ":" + this.state.toAddress + (this.state.memo ? ":" + this.state.memo : "")
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;

                _this3.setState({
                    feeAmount: fee,
                    hasBalance: hasBalance,
                    hasPoolBalance: hasPoolBalance,
                    error: !hasBalance || !hasPoolBalance
                }, _this3._checkFeeStatus);
            });
        }
    }, {
        key: "_getCurrentBalance",
        value: function _getCurrentBalance() {
            var _this4 = this;

            return this.props.balances.find(function (b) {
                return b && b.get("asset_type") === _this4.props.asset.get("id");
            });
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                to_withdraw = _state.to_withdraw;
            var asset = this.props.asset;

            var balance = this._getCurrentBalance();
            if (!balance || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_16__["checkBalance"])(to_withdraw.getAmount({ real: true }), asset, this._getFee(), balance, this._getGateFee());
            if (hasBalance === null) return;
            if (this.state.balanceError !== !hasBalance) this.setState({ balanceError: !hasBalance });

            return hasBalance;
        }
    }, {
        key: "_getFee",
        value: function _getFee() {
            var defaultFee = {
                getAmount: function getAmount() {
                    return 0;
                },
                asset_id: this.state.fee_asset_id
            };

            if (!this.state.feeStatus || !this.state.feeAmount) return defaultFee;

            var coreStatus = this.state.feeStatus["1.3.0"];
            var withdrawAssetStatus = this.state.feeStatus[this.state.to_withdraw.asset_id];
            // Use core asset to pay the fees if present and balance is sufficient since it's cheapest
            if (coreStatus && coreStatus.hasBalance) return coreStatus.fee;
            // Use same asset as withdraw if not
            if (coreStatus && !coreStatus.hasBalance && withdrawAssetStatus && withdrawAssetStatus.hasBalance) {
                return withdrawAssetStatus.fee;
            }
            return coreStatus ? coreStatus.fee : defaultFee;
        }
    }, {
        key: "_onInputAmount",
        value: function _onInputAmount(e) {
            try {
                this.state.to_withdraw.setAmount({
                    real: parseFloat(e.target.value || 0)
                });
                this.setState({
                    withdrawValue: e.target.value,
                    amountError: null
                }, this._checkBalance);
            } catch (err) {
                console.error("err:", err);
            }
        }
    }, {
        key: "_onInputTo",
        value: function _onInputTo(e) {
            var toAddress = e.target.value.trim();

            this.setState({
                withdraw_address_check_in_progress: true,
                withdraw_address_selected: toAddress,
                validAddress: null,
                toAddress: toAddress
            });

            this._validateAddress(toAddress);
        }
    }, {
        key: "_onMemoChanged",
        value: function _onMemoChanged(e) {
            this.setState({ memo: e.target.value }, this._updateFee);
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(address) {
            var _this5 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__["validateAddress"])({
                url: api_apiConfig__WEBPACK_IMPORTED_MODULE_20__["openledgerAPIs"].BASE,
                walletType: props.walletType,
                newAddress: address
            }).then(function (isValid) {
                if (_this5.state.toAddress === address) {
                    _this5.setState({
                        withdraw_address_check_in_progress: false,
                        validAddress: !!isValid
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
            var newWnd = window.open(SettingsStore.site_registr, "_blank");
            newWnd.opener = null;
        }
    }, {
        key: "_getGateFee",
        value: function _getGateFee() {
            var _props = this.props,
                gateFee = _props.gateFee,
                asset = _props.asset;

            return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                real: parseFloat(gateFee ? gateFee.replace(",", "") : 0),
                asset_id: asset.get("id"),
                precision: asset.get("precision")
            });
        }
    }, {
        key: "_renderWithdraw",
        value: function _renderWithdraw() {
            var amountError = this.state.amountError;

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName.name;

            var tabIndex = 1;
            var supportsMemos = this.props.supportsMemos;

            // if(this.props.fiatModal){
            //     if(~this.props.fiatModal.indexOf('canFiatWith')){
            //         return (<WithdrawFiatOpenLedger
            //             account={this.props.account}
            //             issuer_account="openledger-fiat"
            //             deposit_asset={this.props.asset.get("symbol").split('OPEN.').join('')}
            //             receive_asset={this.props.asset.get("symbol")}
            //             rpc_url={SettingsStore.rpc_url}
            //         />);
            //     }else{
            //         return (<p>Click <a href='#' onClick={this._openRegistrarSite} >here</a> to register for deposits </p>);
            //     }
            // }

            var currentFee = this._getFee();
            var gateFee = this._getGateFee();
            var feeStatus = this.state.feeStatus[currentFee.asset_id];
            var feeAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_18__["ChainStore"].getAsset(currentFee.asset_id);

            var disableSubmit = feeStatus && !feeStatus.hasBalance || this.state.balanceError || !this.state.toAddress || !this.state.withdrawValue;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        content: "gateway.withdraw_funds",
                        asset: assetName,
                        wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_21__["getWalletName"])()
                    })
                ),
                this._renderCurrentBalance(),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("modal.withdraw.amount")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            tabIndex: tabIndex++,
                            type: "number",
                            min: "0",
                            onKeyPress: this.onKeyPress.bind(this),
                            value: this.state.withdrawValue,
                            onChange: this._onInputAmount.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "form-label select floating-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "dropdown-wrapper inactive" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    null,
                                    assetName
                                )
                            )
                        )
                    ),
                    amountError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: amountError })
                    ) : null,
                    this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.errors.insufficient" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("transfer.fee")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "text",
                            disabled: true,
                            value: currentFee.getAmount({ real: true })
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "form-label select floating-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "dropdown-wrapper inactive" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    null,
                                    feeAsset ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                        name: feeAsset.get("symbol")
                                    }) : null
                                )
                            )
                        )
                    ),
                    feeStatus && !feeStatus.hasBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.errors.insufficient" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("gateway.fee")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "text",
                            disabled: true,
                            value: gateFee.getAmount({ real: true })
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "form-label select floating-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "dropdown-wrapper inactive" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                        name: this.props.asset.get("symbol")
                                    })
                                )
                            )
                        )
                    ),
                    feeStatus && !feeStatus.hasBalance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "transfer.errors.insufficient" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("modal.withdraw.address")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("gateway.withdraw_placeholder", { asset: assetName }),
                            tabIndex: tabIndex++,
                            type: "text",
                            value: this.state.toAddress,
                            onChange: this._onInputTo.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "form-label select floating-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "dropdown-wrapper inactive" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        "data-place": "right",
                                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("tooltip.withdraw_address", { asset: assetName })
                                    },
                                    "?"
                                )
                            )
                        )
                    ),
                    !this.state.validAddress && this.state.toAddress ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            content: "gateway.valid_address",
                            coin_type: assetName
                        })
                    ) : null
                ),
                supportsMemos ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("transfer.memo")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
                            rows: "3",
                            value: this.state.memo,
                            tabIndex: tabIndex++,
                            onChange: this._onMemoChanged.bind(this)
                        })
                    ),
                    !this.state.validAddress && this.state.toAddress ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            content: "gateway.valid_address",
                            coin_type: assetName
                        })
                    ) : null
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "button-group SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "button",
                        {
                            tabIndex: tabIndex++,
                            className: "button" + (disableSubmit ? " disabled" : ""),
                            onClick: this.onSubmit.bind(this),
                            type: "submit"
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "gateway.withdraw_now" })
                    )
                )
            );
        }
    }, {
        key: "_renderDeposit",
        value: function _renderDeposit() {
            var _state2 = this.state,
                receive_address = _state2.receive_address,
                loading = _state2.loading,
                emptyAddressDeposit = _state2.emptyAddressDeposit;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName2.name;

            var hasMemo = receive_address && "memo" in receive_address && receive_address.memo;
            var addressValue = receive_address && receive_address.address || "";
            var tabIndex = 1;

            // if(this.props.fiatModal){
            //     if(~this.props.fiatModal.indexOf('canFiatDep')){
            //         return (<DepositFiatOpenLedger
            //             account={this.props.account}
            //             issuer_account="openledger-fiat"
            //             deposit_asset={this.props.asset.get("symbol").split('OPEN.').join('')}
            //             receive_asset={this.props.asset.get("symbol")}
            //             rpc_url={SettingsStore.rpc_url}
            //         />);
            //     }else{
            //         return (<p>Click <a href='#' onClick={this._openRegistrarSite} >here</a> to register for deposits </p>);
            //     }
            // }
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: !addressValue ? "no-overflow" : "" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        unsafe: true,
                        content: "gateway.add_funds",
                        account: this.props.sender.get("name"),
                        wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_21__["getWalletName"])()
                    })
                ),
                this._renderCurrentBalance(),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        {
                            style: { marginBottom: 10 },
                            "data-place": "right",
                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("tooltip.deposit_tip", {
                                asset: assetName
                            })
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "help-tooltip",
                            content: "gateway.deposit_to",
                            asset: assetName
                        }),
                        ":",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "fz_12 left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "gateway.deposit_notice_delay" })
                        )
                    ),
                    !addressValue ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["default"], { type: "three-bounce" }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        emptyAddressDeposit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "gateway.please_generate_address" }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: "inline-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                readOnly: true,
                                type: "text",
                                value: addressValue
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__["default"], { text: addressValue }),
                            " "
                        )
                    ),
                    hasMemo ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: "inline-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                readOnly: true,
                                type: "text",
                                value: counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("transfer.memo") + ": " + receive_address.memo
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__["default"], { text: receive_address.memo })
                        )
                    ) : null,
                    receive_address && receive_address.error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        receive_address.error.message
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "button-group SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "button",
                        {
                            tabIndex: tabIndex++,
                            className: "button spinner-button-circle",
                            onClick: this.requestDepositAddressLoad.bind(this),
                            type: "submit"
                        },
                        loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["default"], { type: "circle" }) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "gateway.generate_new" })
                    )
                )
            );
        }
    }, {
        key: "_renderCurrentBalance",
        value: function _renderCurrentBalance() {
            var _utils$replaceName3 = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName3.name;

            var isDeposit = this.props.action === "deposit";

            var currentBalance = this._getCurrentBalance();

            var asset = currentBalance ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__["Asset"]({
                asset_id: currentBalance.get("asset_type"),
                precision: this.props.asset.get("precision"),
                amount: currentBalance.get("balance")
            }) : null;

            // TEMP //
            // asset = new Asset({
            //     asset_id: this.props.asset.get("id"),
            //     precision: this.props.asset.get("precision"),
            //     amount: 65654645
            // });

            var applyBalanceButton = isDeposit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                {
                    style: { border: "2px solid black", borderLeft: "none" },
                    className: "form-label"
                },
                assetName
            ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "button",
                {
                    "data-place": "right",
                    "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("tooltip.withdraw_full"),
                    className: "button",
                    style: { border: "2px solid black", borderLeft: "none" },
                    onClick: this._updateAmount.bind(this, !currentBalance ? 0 : parseInt(currentBalance.get("balance"), 10))
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], { name: "clippy", title: "icons.clippy.withdraw_full" })
            );

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                    className: "SimpleTrade__withdraw-row",
                    style: { fontSize: "1rem" }
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "label",
                    { style: { fontSize: "1rem" } },
                    counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("gateway.balance_asset", {
                        asset: assetName
                    }),
                    ":",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "inline-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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
            var _props2 = this.props,
                asset = _props2.asset,
                action = _props2.action;

            var isDeposit = action === "deposit";

            if (!asset) {
                return null;
            }

            var _utils$replaceName4 = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].replaceName(asset),
                assetName = _utils$replaceName4.name;

            var content = this.props.isDown ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    className: "txtlabel cancel",
                    content: "gateway.unavailable_OPEN",
                    component: "p"
                })
            ) : !this.props.isAvailable ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    className: "txtlabel cancel",
                    content: "gateway.unavailable",
                    component: "p"
                })
            ) : isDeposit ? this._renderDeposit() : this._renderWithdraw();

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: "SimpleTrade__modal" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "Modal__header" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "h3",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            content: isDeposit ? "gateway.deposit" : "modal.withdraw.submit"
                        }),
                        " ",
                        assetName
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "Modal__divider" }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "grid-block vertical no-overflow",
                        style: {
                            zIndex: 1002,
                            paddingLeft: "2rem",
                            paddingRight: "2rem",
                            paddingTop: "1rem"
                        }
                    },
                    content
                )
            );
        }
    }]);

    return DepositWithdrawContent;
}(_Exchange_ExchangeInput__WEBPACK_IMPORTED_MODULE_19__["DecimalChecker"]);

DepositWithdrawContent.propTypes = {
    sender: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAsset.isRequired,
    coreAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAsset.isRequired,
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAsset.isRequired
};
DepositWithdrawContent.defaultProps = {
    coreAsset: "1.3.0",
    globalObject: "2.0.0"
};

DepositWithdrawContent = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(DepositWithdrawContent);

var SimpleDepositWithdrawModal = function (_React$Component) {
    _inherits(SimpleDepositWithdrawModal, _React$Component);

    function SimpleDepositWithdrawModal() {
        _classCallCheck(this, SimpleDepositWithdrawModal);

        var _this6 = _possibleConstructorReturn(this, (SimpleDepositWithdrawModal.__proto__ || Object.getPrototypeOf(SimpleDepositWithdrawModal)).call(this));

        _this6.state = { open: false };
        return _this6;
    }

    _createClass(SimpleDepositWithdrawModal, [{
        key: "show",
        value: function show() {
            var _this7 = this;

            this.setState({ open: true }, function () {
                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish(_this7.props.modalId, "open");
            });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.setState({ open: false });
        }
    }, {
        key: "render",
        value: function render() {
            return !this.state.open ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                    className: "test",
                    onClose: this.onClose.bind(this),
                    overlay: true,
                    id: this.props.modalId
                },
                this.state.open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DepositWithdrawContent, _extends({}, this.props, {
                    open: this.state.open
                })) : null
            );
        }
    }]);

    return SimpleDepositWithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleDepositWithdrawModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(425).Buffer))

/***/ }),

/***/ 2469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(720);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(849);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(584);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(569);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(878);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(877);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1276);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1240);
/* harmony import */ var common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1242);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1243);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(785);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(863);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(718);
/* harmony import */ var _Utility_FloatingDropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1226);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(712);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(713);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1260);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_20__);
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
            toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(props.walletType),
            withdrawValue: "",
            amountError: null,
            inputAmount: 0,
            receiveLoading: false,
            limitLoading: true,
            apiError: false
        };

        _this._validateAddress(_this.state.toAddress, props);

        _this.deposit_address_cache = new common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_11__["default"]();
        return _this;
    }

    _createClass(SimpleDepositBlocktradesBridge, [{
        key: "onClose",
        value: function onClose() {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(this.props.modalId, "close");
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
            return np.inputCoinType !== this.props.inputCoinType || np.outputCoinType !== this.props.outputCoinType || np.sender !== this.props.sender || np.asset !== this.props.asset || np.isAvailable !== this.props.isAvailable || np.isDown !== this.props.isDown || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "_getDepositLimit",
        value: function _getDepositLimit() {
            var _this2 = this;

            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            this.setState({ limitLoading: true });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["getDepositLimit"])(props.inputCoinType, props.outputCoinType).then(function (res) {
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

            target.value = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(target.value, 8);

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
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["estimateOutput"])(this.state.inputAmount, props.inputCoinType, props.outputCoinType).then(function (res) {
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
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["estimateInput"])(this.state.outputAmount, props.inputCoinType, props.outputCoinType).then(function (res) {
                _this4.setState({
                    inputAmount: res.inputAmount,
                    sendAmount: common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].limitByPrecision(res.inputAmount, 8),
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
                Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["requestDepositAddress"])(this._getDepositObject(props));
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
                url: api_apiConfig__WEBPACK_IMPORTED_MODULE_15__["blockTradesAPIs"].BASE,
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
            react_tooltip__WEBPACK_IMPORTED_MODULE_8___default.a.rebuild();
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(address) {
            var _this6 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["validateAddress"])({ walletType: props.walletType, newAddress: address }).then(function (isValid) {
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
            var newWnd = window.open(stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"].site_registr, "_blank");
            newWnd.opener = null;
        }
    }, {
        key: "_onDropDownSelect",
        value: function _onDropDownSelect(e) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_19__["default"].changeViewSetting({ preferredBridge: e });
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
            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(this.props.asset),
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_20___default.a, { size: 140, value: addressValue })
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
                { className: "modal__body" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "container-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.buy.asset" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            disabled: true,
                            type: "text",
                            defaultValue: receiveName
                        })
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "modal.buy.bridge" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.bridge_TRADE"),
                                className: "inline-block tooltip",
                                onClick: this.onBlockTradesContact.bind(this)
                            },
                            "\xA0",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                style: { position: "relative", top: 0 },
                                name: "question-circle",
                                title: "icons.question_circle"
                            })
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.send" })
                                    ),
                                    aboveLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        {
                                            className: "error-msg inline-block tooltip",
                                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.over_limit")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.over_limit" }),
                                        "\xA0",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                            name: "question-circle",
                                            title: "icons.question_circle"
                                        })
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FloatingDropdown__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "gateway.deposit_limit" })
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.receive" })
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price" }),
                                        "\xA0\xA0",
                                        this.state.receiveLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "footer.loading" }) : ""
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_14__["default"], { type: "three-bounce" })
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    text: addressValue,
                                    className: "copyIcon"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    text: receive_address.memo,
                                    className: "copyIcon"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "no-margin no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button primary hollow",
                                    onClick: this.onClose.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.close" })
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: apiError ? { display: "" } : { display: "none" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "container-row double-row" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            className: "txtlabel cancel",
                            content: "gateway.unavailable_TRADE",
                            component: "h3"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                className: "button primary hollow",
                                onClick: this.onClose.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.close" })
                        )
                    )
                )
            );
        }
    }, {
        key: "_renderCurrentBalance",
        value: function _renderCurrentBalance() {
            var _this7 = this;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName2.name;

            var isDeposit = this.props.action === "deposit";

            var currentBalance = this.props.balances.find(function (b) {
                return b && b.get("asset_type") === _this7.props.asset.get("id");
            });

            var asset = currentBalance ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_4__["Asset"]({
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
                "button",
                {
                    "data-place": "right",
                    "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.withdraw_full"),
                    className: "button",
                    style: { border: "2px solid black", borderLeft: "none" },
                    onClick: this._updateAmount.bind(this, !currentBalance ? 0 : parseInt(currentBalance.get("balance"), 10))
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_13__["default"], { name: "clippy", title: "icons.clippy.withdraw_full" })
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
                    counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("gateway.balance_asset", {
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "modal__header" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "p", content: "modal.buy.title" })
                ),
                this.props.isDown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "txtlabel cancel",
                        content: "gateway.unavailable_TRADE",
                        component: "p"
                    })
                ) : !this.props.isAvailable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    sender: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAsset.isRequired
};

SimpleDepositBlocktradesBridge = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(SimpleDepositBlocktradesBridge);

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
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SimpleDepositBlocktradesBridge, _extends({}, others, {
                preferredBridge: preferredBridge
            }, currentBridge.toJS()));
        }
    }]);

    return StoreWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

StoreWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_17__["connect"])(StoreWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"]];
    },
    getProps: function getProps() {
        return {
            preferredBridge: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().viewSettings.get("preferredBridge", "btc")
        };
    }
});

var SimpleDepositBlocktradesBridgeModal = function (_React$Component3) {
    _inherits(SimpleDepositBlocktradesBridgeModal, _React$Component3);

    function SimpleDepositBlocktradesBridgeModal() {
        _classCallCheck(this, SimpleDepositBlocktradesBridgeModal);

        var _this9 = _possibleConstructorReturn(this, (SimpleDepositBlocktradesBridgeModal.__proto__ || Object.getPrototypeOf(SimpleDepositBlocktradesBridgeModal)).call(this));

        _this9.state = {
            open: false
        };
        return _this9;
    }

    _createClass(SimpleDepositBlocktradesBridgeModal, [{
        key: "show",
        value: function show() {
            var _this10 = this;

            this.setState({ open: true }, function () {
                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_this10.props.modalId, "open");
            });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.setState({ open: false });
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.bridges) return null;

            return !this.state.open ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                    id: this.props.modalId,
                    onClose: this.onClose.bind(this),
                    noCloseBtn: true,
                    overlay: true
                },
                this.state.open ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StoreWrapper, _extends({}, this.props, { open: this.state.open })) : null
            );
        }
    }]);

    return SimpleDepositBlocktradesBridgeModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleDepositBlocktradesBridgeModal);

/***/ }),

/***/ 2512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isFinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(720);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(849);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(847);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(877);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1276);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(878);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1006);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(569);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1005);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1238);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(588);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(592);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1344);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1054);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(525);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(418);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(785);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1421);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



























/**
 *  Given an account and an asset id, render a modal allowing modification of a margin position for that asset
 *
 *  Expected Properties:
 *     quote_asset:  asset id, must be a bitasset
 *     account: full_account object for the account to use
 *
 */

var BorrowModalContent = function (_React$Component) {
    _inherits(BorrowModalContent, _React$Component);

    function BorrowModalContent(props) {
        _classCallCheck(this, BorrowModalContent);

        var _this = _possibleConstructorReturn(this, (BorrowModalContent.__proto__ || Object.getPrototypeOf(BorrowModalContent)).call(this));

        _this.state = _this._initialState(props);
        return _this;
    }

    _createClass(BorrowModalContent, [{
        key: "_initialState",
        value: function _initialState(props) {
            var currentPosition = props ? this._getCurrentPosition(props) : {};

            if (currentPosition.collateral) {
                var debt = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(currentPosition.debt, props.quote_asset);
                var collateral = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(currentPosition.collateral, props.backing_asset);

                var target_collateral_ratio = !isNaN(currentPosition.target_collateral_ratio) ? currentPosition.target_collateral_ratio / 1000 : 0;

                return {
                    short_amount: debt ? debt.toString() : null,
                    collateral: collateral ? collateral.toString() : null,
                    collateral_ratio: this._getCollateralRatio(debt, collateral),
                    target_collateral_ratio: target_collateral_ratio,
                    errors: this._getInitialErrors(),
                    isValid: false,
                    useTargetCollateral: target_collateral_ratio > 0 ? true : false,
                    original_position: {
                        debt: debt,
                        collateral: collateral,
                        target_collateral_ratio: target_collateral_ratio
                    }
                };
            } else {
                return {
                    short_amount: 0,
                    collateral: 0,
                    collateral_ratio: this._getInitialCollateralRatio(props),
                    target_collateral_ratio: 0,
                    errors: this._getInitialErrors(),
                    isValid: false,
                    useTargetCollateral: false,
                    original_position: {
                        debt: 0,
                        collateral: 0
                    }
                };
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_8___default.a.rebuild();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var newState = this._initialState(this.props);

            this.setState(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].are_equal_shallow(nextState, this.state) || !immutable__WEBPACK_IMPORTED_MODULE_20___default.a.is(nextProps.quote_asset, this.props.quote_asset) || !nextProps.backing_asset.get("symbol") === this.props.backing_asset.get("symbol") || !immutable__WEBPACK_IMPORTED_MODULE_20___default.a.is(nextProps.account, this.props.account) || !immutable__WEBPACK_IMPORTED_MODULE_20___default.a.is(nextProps.call_orders, this.props.call_orders);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _state = this.state,
                short_amount = _state.short_amount,
                collateral = _state.collateral,
                collateral_ratio = _state.collateral_ratio;


            if (nextProps.account !== this.props.account || nextProps.hasCallOrders !== this.props.hasCallOrders || nextProps.quote_asset.get("id") !== this.props.quote_asset.get("id")) {
                var newState = this._initialState(nextProps);

                var revalidate = false;
                if (short_amount || collateral || collateral_ratio) {
                    newState.short_amount = short_amount;
                    newState.collateral = collateral;
                    newState.collateral_ratio = collateral_ratio;
                    revalidate = true;
                }

                this.setState(newState);

                if (revalidate) {
                    this._validateFields(newState);
                }
            }
        }
    }, {
        key: "_getInitialErrors",
        value: function _getInitialErrors() {
            return {
                collateral_balance: null,
                ratio_too_high: null
            };
        }
    }, {
        key: "_getMaintenanceRatio",
        value: function _getMaintenanceRatio() {
            return this.props.quote_asset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
        }
    }, {
        key: "confirmClicked",
        value: function confirmClicked(e) {
            e.preventDefault();
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default.a.publish(this.props.modalId, "close");
        }
    }, {
        key: "toggleLockedCR",
        value: function toggleLockedCR(e) {
            e.preventDefault();
            this.setState({ lockedCR: !this.state.lockedCR ? true : false });
        }
    }, {
        key: "_onBorrowChange",
        value: function _onBorrowChange(e) {
            var feed_price = this._getFeedPrice();
            var amount = e.amount.replace(/,/g, "");
            var newState = {
                short_amount: amount,
                collateral: (this.state.collateral_ratio * (amount / feed_price)).toFixed(this.props.backing_asset.get("precision")),
                collateral_ratio: this.state.collateral_ratio
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_onCollateralChange",
        value: function _onCollateralChange(e) {
            var amount = e.amount.replace(/,/g, "");

            var feed_price = this._getFeedPrice();
            var collateralRatio = amount / (this.state.short_amount / feed_price);

            var newState = this._isPredictionMarket(this.props) ? {
                short_amount: amount,
                collateral: amount,
                collateral_ratio: 1
            } : {
                short_amount: this.state.short_amount,
                collateral: amount,
                collateral_ratio: Object(lodash_es_isFinite__WEBPACK_IMPORTED_MODULE_0__["default"])(collateralRatio) ? collateralRatio : this._getInitialCollateralRatio(this.props)
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_onTargetRatioChange",
        value: function _onTargetRatioChange(e) {
            var target = e.target;

            // Ensure input is valid
            var regexp_numeral = new RegExp(/[[:digit:]]/);
            if (!regexp_numeral.test(target.value)) {
                target.value = target.value.replace(/[^0-9.]/g, "");
            }

            var ratio = target.value;

            this.setState({
                target_collateral_ratio: ratio
            });
        }
    }, {
        key: "_onRatioChange",
        value: function _onRatioChange(e) {
            var feed_price = this._getFeedPrice();
            var target = e.target;

            // Ensure input is valid
            var regexp_numeral = new RegExp(/[[:digit:]]/);
            if (!regexp_numeral.test(target.value)) {
                target.value = target.value.replace(/[^0-9.]/g, "");
            }

            var ratio = target.value;
            var short_amount = void 0;
            var collateral = void 0;

            if (this.state.lockedCR) {
                short_amount = (this.state.collateral * feed_price / ratio).toFixed(this.props.backing_asset.get("precision"));
                collateral = this.state.collateral;
            } else {
                short_amount = this.state.short_amount;
                collateral = (this.state.short_amount / feed_price * ratio).toFixed(this.props.backing_asset.get("precision"));
            }

            var newState = {
                short_amount: short_amount,
                collateral: collateral,
                collateral_ratio: ratio
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_maximizeCollateral",
        value: function _maximizeCollateral() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : {};
            var initialCollateral = 0;

            if (currentPosition.collateral) {
                initialCollateral = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(currentPosition.collateral, this.props.backing_asset);
            }

            // Make sure we don't go over the maximum collateral ratio
            var maximizedCollateral = Math.floor(Math.min(this.props.backing_balance.get("balance") / common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.backing_asset) + initialCollateral - 10, this.state.short_amount / this._getFeedPrice() * 1000.0));

            this._onCollateralChange(new Object({ amount: maximizedCollateral.toString() }));
        }
    }, {
        key: "_maximizeDebt",
        value: function _maximizeDebt() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : {};
            var initialCollateral = 0;

            if (currentPosition.collateral) {
                initialCollateral = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(currentPosition.collateral, this.props.backing_asset);
            }

            var maximumCollateral = this.props.backing_balance.get("balance") / common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.backing_asset) + initialCollateral - 10;
            var short_amount = maximumCollateral / this.state.collateral_ratio * this._getFeedPrice();

            var newState = {
                short_amount: short_amount,
                collateral: maximumCollateral,
                collateral_ratio: this.state.collateral_ratio
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_payDebt",
        value: function _payDebt() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : { debt: 0 };

            if (currentPosition.debt <= 0) {
                return;
            }

            var short_amount = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(Math.max(currentPosition.debt - this.props.bitasset_balance.get("balance"), 0), this.props.quote_asset);

            this._onBorrowChange({
                amount: short_amount.toString()
            });
        }
    }, {
        key: "_setUpdatedPosition",
        value: function _setUpdatedPosition(newState) {
            this.setState({
                newPosition: parseFloat(newState.short_amount) / parseFloat(newState.collateral)
            });
        }
    }, {
        key: "_validateFields",
        value: function _validateFields(newState) {
            var errors = this._getInitialErrors();
            var original_position = this.state.original_position;

            var backing_balance = !this.props.backing_balance ? { balance: 0 } : this.props.backing_balance.toJS();

            var maintenanceRatio = this._getMaintenanceRatio();
            var originalCR = this._getCollateralRatio(original_position.debt, original_position.collateral);
            var isOriginalBelowMCR = original_position.collateral > 0 && originalCR < maintenanceRatio;

            if (parseFloat(newState.collateral) - original_position.collateral > common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_amount(backing_balance.balance, this.props.backing_asset.toJS())) {
                errors.collateral_balance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.collateral");
            }

            // let sqp = this.props.quote_asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]) / 1000;

            if (isOriginalBelowMCR && newState.short_amount > original_position.debt) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.increased_debt_on_margin_call");
            } else if (isOriginalBelowMCR && parseFloat(newState.collateral_ratio) <= parseFloat(originalCR)) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.below_ratio_mcr_update", { ocr: originalCR.toFixed(4) });
            } else if (!isOriginalBelowMCR && parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio)) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.below", { mr: maintenanceRatio });
            } else if (parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio + 0.5)) {
                errors.close_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.errors.close", { mr: maintenanceRatio });
            }

            this.setState({ errors: errors });
        }
    }, {
        key: "_onSubmit",
        value: function _onSubmit(e) {
            e.preventDefault();

            var quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.quote_asset.get("precision"));
            var backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.backing_asset.get("precision"));
            var currentPosition = this._getCurrentPosition(this.props);

            var isTCR = typeof this.state.target_collateral_ratio !== "undefined" && this.state.target_collateral_ratio > 0 && this.state.useTargetCollateral ? true : false;

            var extensionsProp = false;

            if (isTCR) {
                extensionsProp = {
                    target_collateral_ratio: parseInt(this.state.target_collateral_ratio * 1000, 10)
                };
            }

            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_15__["default"].new_transaction();
            if (extensionsProp) {
                tr.add_type_operation("call_order_update", {
                    fee: {
                        amount: 0,
                        asset_id: 0
                    },
                    funding_account: this.props.account.get("id"),
                    delta_collateral: {
                        amount: parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10),
                        asset_id: this.props.backing_asset.get("id")
                    },
                    delta_debt: {
                        amount: parseInt(this.state.short_amount * quotePrecision - currentPosition.debt, 10),
                        asset_id: this.props.quote_asset.get("id")
                    },
                    extensions: extensionsProp
                });
            } else {
                tr.add_type_operation("call_order_update", {
                    fee: {
                        amount: 0,
                        asset_id: 0
                    },
                    funding_account: this.props.account.get("id"),
                    delta_collateral: {
                        amount: parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10),
                        asset_id: this.props.backing_asset.get("id")
                    },
                    delta_debt: {
                        amount: parseInt(this.state.short_amount * quotePrecision - currentPosition.debt, 10),
                        asset_id: this.props.quote_asset.get("id")
                    }
                });
            }
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__["default"].process_transaction(tr, null, true).catch(function (err) {
                // console.log("unlock failed:", err);
            });

            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default.a.publish(this.props.modalId, "close");
        }
    }, {
        key: "_getCurrentPosition",
        value: function _getCurrentPosition(props) {
            var currentPosition = {
                collateral: null,
                debt: null
            };

            if (props && props.hasCallOrders && props.call_orders) {
                currentPosition = props.call_orders.filter(function (a) {
                    return !!a;
                }).find(function (a) {
                    return a.getIn(["call_price", "quote", "asset_id"]) === props.quote_asset.get("id");
                });

                currentPosition = !!currentPosition ? currentPosition.toJS() : {
                    collateral: null,
                    debt: null
                };
            }
            return currentPosition;
        }
    }, {
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            if (!this.props) {
                return 1;
            }

            if (this._isPredictionMarket(this.props)) {
                return 1;
            }

            return 1 / common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_price(this.props.quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"]), this.props.backing_asset, this.props.quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]), this.props.quote_asset);
        }
    }, {
        key: "_getInitialCollateralRatio",
        value: function _getInitialCollateralRatio(props) {
            return this._isPredictionMarket(props) ? 1 : 0;
        }
    }, {
        key: "_getCollateralRatio",
        value: function _getCollateralRatio(debt, collateral) {
            return collateral / (debt / this._getFeedPrice());
        }
    }, {
        key: "_isPredictionMarket",
        value: function _isPredictionMarket(props) {
            return props.quote_asset.getIn(["bitasset", "is_prediction_market"]);
        }
    }, {
        key: "_setUseTargetCollateral",
        value: function _setUseTargetCollateral() {
            this.setState({
                useTargetCollateral: !this.state.useTargetCollateral
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                quote_asset = _props.quote_asset,
                bitasset_balance = _props.bitasset_balance,
                backing_asset = _props.backing_asset,
                backing_balance = _props.backing_balance;
            var _state2 = this.state,
                short_amount = _state2.short_amount,
                collateral = _state2.collateral,
                collateral_ratio = _state2.collateral_ratio,
                target_collateral_ratio = _state2.target_collateral_ratio,
                errors = _state2.errors,
                original_position = _state2.original_position,
                useTargetCollateral = _state2.useTargetCollateral;

            var quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.quote_asset.get("precision"));
            var backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].get_asset_precision(this.props.backing_asset.get("precision"));

            if (!collateral_ratio || isNaN(collateral_ratio) || !(collateral_ratio > 0.0 && collateral_ratio < 1000.0)) collateral_ratio = 0;
            bitasset_balance = !bitasset_balance ? { balance: 0, id: null } : bitasset_balance.toJS();
            backing_balance = !backing_balance ? { balance: 0, id: null } : backing_balance.toJS();

            var collateralClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("form-group", {
                "has-error": errors.collateral_balance
            });
            var collateralRatioClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("form-group", { "has-error": errors.below_maintenance }, { "has-warning": errors.close_maintenance });

            // Dynamically update user's remaining collateral
            var currentPosition = this._getCurrentPosition(this.props);
            var backingBalance = backing_balance.id ? bitsharesjs__WEBPACK_IMPORTED_MODULE_21__["ChainStore"].getObject(backing_balance.id) : null;
            var backingAmount = backingBalance ? backingBalance.get("balance") : 0;
            var collateralChange = parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10);
            var remainingBalance = backingAmount - collateralChange;

            var bitAssetBalanceText = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { component: "span", content: "transfer.available" }),
                    ":",
                    " ",
                    bitasset_balance.id ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_14__["default"], { balance: bitasset_balance.id }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        amount: 0,
                        asset: quote_asset.get("id")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "a",
                    { onClick: this._payDebt.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.pay_max_debt" })
                ),
                "|",
                collateral_ratio != 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "a",
                    { onClick: this._maximizeDebt.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.use_max" })
                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    {
                        className: "disabled-link",
                        "data-place": "left",
                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.maximize_debt_set_ratio_slider")
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.use_max" })
                )
            );
            var backingBalanceText = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { component: "span", content: "transfer.available" }),
                    ":",
                    " ",
                    backing_balance.id ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        amount: remainingBalance,
                        asset: backing_asset.get("id")
                    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        amount: 0,
                        asset: backing_asset.get("id")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "a",
                    { onClick: this._maximizeCollateral.bind(this) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.use_max" })
                )
            );

            var feed_price = this._getFeedPrice();

            var maintenanceRatio = this._getMaintenanceRatio();

            var squeezeRatio = this.props.quote_asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]) / 1000;

            var isPredictionMarket = this._isPredictionMarket(this.props);

            var isOriginalBelowMCR = original_position.collateral > 0 && this._getCollateralRatio(original_position.debt, original_position.collateral) < maintenanceRatio;

            if (!isPredictionMarket && isNaN(feed_price)) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "form",
                        {
                            className: "grid-container text-center no-overflow",
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            component: "h3",
                            content: "borrow.no_valid",
                            asset_symbol: quote_asset.get("symbol")
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-content button-group text-center no-overflow" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5___default.a,
                            { close: this.props.modalId },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: " button warning" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "account.perm.cancel" })
                            )
                        )
                    )
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "form",
                    {
                        className: "grid-container small-10 small-offset-1 no-overflow",
                        noValidate: true
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        component: "h3",
                        content: "borrow.title",
                        asset_symbol: quote_asset.get("symbol")
                    }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { textAlign: "left" } },
                        this.props.hide_help ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_19__["default"], {
                            path: "components/" + (isPredictionMarket ? "BorrowModalPrediction" : "BorrowModal"),
                            debt: quote_asset.get("symbol"),
                            collateral: backing_asset.get("symbol"),
                            borrower: this.props.account.get("name"),
                            mr: maintenanceRatio
                        }),
                        isOriginalBelowMCR ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            component: "h6",
                            className: "has-warning",
                            content: "borrow.errors.below_info"
                        }) : null,
                        !isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                style: {
                                    paddingTop: "1rem",
                                    paddingBottom: "1rem"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "borrow-price-feeds" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    { className: "borrow-price-label" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "transaction.feed_price" }),
                                    ":\xA0"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    noPopOver: true,
                                    quote_amount: quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"]),
                                    quote_asset: quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "base", "asset_id"]),
                                    base_asset: quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "asset_id"]),
                                    base_amount: quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"])
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "borrow-price-final " + (errors.below_maintenance ? "has-error" : errors.close_maintenance ? "has-warning" : "")
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    { className: "borrow-price-label" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "exchange.your_price" }),
                                    ":\xA0"
                                ),
                                this.state.newPosition ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    noPopOver: true,
                                    quote_amount: maintenanceRatio * this.state.short_amount * quotePrecision,
                                    quote_asset: quote_asset.get("id"),
                                    base_asset: backing_asset.get("id"),
                                    base_amount: this.state.collateral * backingPrecision
                                }) : null
                            )
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "form-group" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { position: "absolute", left: 20 } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                    onClick: this.toggleLockedCR.bind(this),
                                    name: !this.state.lockedCR ? "locked" : "unlocked",
                                    size: "1_5x",
                                    style: { position: "relative", top: -10 }
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                label: "transaction.borrow_amount",
                                amount: short_amount.toString(),
                                onChange: this._onBorrowChange.bind(this),
                                asset: quote_asset.get("id"),
                                assets: [quote_asset.get("id")],
                                display_balance: bitAssetBalanceText,
                                placeholder: "0.0",
                                tabIndex: 1
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: collateralClass },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { position: "absolute", left: 20 } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                    onClick: this.toggleLockedCR.bind(this),
                                    name: this.state.lockedCR ? "locked" : "unlocked",
                                    size: "1_5x",
                                    style: { position: "relative", top: -10 }
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                label: "transaction.collateral",
                                amount: collateral.toString(),
                                onChange: this._onCollateralChange.bind(this),
                                asset: backing_asset.get("id"),
                                assets: [backing_asset.get("id")],
                                display_balance: backingBalanceText,
                                placeholder: "0.0",
                                tabIndex: 1
                            }),
                            errors.collateral_balance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "float-left",
                                    style: {
                                        paddingTop: 5
                                    }
                                },
                                errors.collateral_balance
                            ) : null
                        ),
                        !isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: collateralRatioClass,
                                    style: { marginBottom: "3.5rem" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                    component: "label",
                                    content: "borrow.coll_ratio"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                        value: collateral_ratio == 0 ? "" : collateral_ratio,
                                        onChange: this._onRatioChange.bind(this),
                                        type: "text",
                                        style: {
                                            width: "12%",
                                            float: "right",
                                            marginTop: -10
                                        }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                        style: { width: "85%" },
                                        min: "0",
                                        max: "6",
                                        step: "0.01",
                                        onChange: this._onRatioChange.bind(this),
                                        value: collateral_ratio,
                                        type: "range"
                                    })
                                ),
                                errors.below_maintenance || errors.close_maintenance ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        style: {
                                            height: "1em",
                                            maxWidth: "85%"
                                        },
                                        className: "float-left"
                                    },
                                    errors.below_maintenance,
                                    errors.close_maintenance
                                ) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: "form-group",
                                    style: { marginBottom: "3.5rem" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.target_collateral_ratio" }),
                                        "\xA0\xA0",
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "span",
                                            {
                                                "data-place": "top",
                                                "data-html": true,
                                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("tooltip.target_collateral_ratio")
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                                name: "question-circle",
                                                title: "icons.question_circle"
                                            })
                                        )
                                    ),
                                    useTargetCollateral ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "div",
                                            {
                                                style: {
                                                    marginBottom: "1em"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__["Checkbox"],
                                                {
                                                    onClick: this._setUseTargetCollateral.bind(this),
                                                    checked: true
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.enable_target_collateral_ratio" })
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "span",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                                value: isNaN(target_collateral_ratio) ? "0" : target_collateral_ratio,
                                                onChange: this._onTargetRatioChange.bind(this),
                                                type: "text",
                                                style: {
                                                    float: "right",
                                                    marginTop: -10,
                                                    width: "12%"
                                                }
                                            }),
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                                style: { width: "85%" },
                                                min: "0",
                                                max: "6",
                                                step: "0.01",
                                                onChange: this._onTargetRatioChange.bind(this),
                                                value: isNaN(target_collateral_ratio) ? "0" : target_collateral_ratio,
                                                type: "range"
                                            })
                                        )
                                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { style: { marginBottom: "1em" } },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__["Checkbox"],
                                            {
                                                onClick: this._setUseTargetCollateral.bind(this)
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.enable_target_collateral_ratio" })
                                        )
                                    )
                                )
                            )
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "no-padding grid-content button-group no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    onClick: this._onSubmit.bind(this),
                                    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()("button")
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "borrow.adjust" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    onClick: function onClick(e) {
                                        e.preventDefault();
                                        _this2.setState(_this2._initialState(_this2.props));
                                    },
                                    className: "button hollow primary"
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "wallet.reset" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BorrowModalContent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BorrowModalContent.propTypes = {
    quote_asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAsset.isRequired,
    bitasset_balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject,
    backing_asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAsset.isRequired,
    backing_balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject,
    call_orders: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObjectsList,
    hasCallOrders: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

BorrowModalContent = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(BorrowModalContent);

/* This wrapper class appears to be necessary because the decorator eats the show method from refs */

var ModalWrapper = function (_React$Component2) {
    _inherits(ModalWrapper, _React$Component2);

    function ModalWrapper() {
        _classCallCheck(this, ModalWrapper);

        var _this3 = _possibleConstructorReturn(this, (ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call(this));

        _this3.state = {
            smallScreen: false,
            open: false
        };
        return _this3;
    }

    _createClass(ModalWrapper, [{
        key: "show",
        value: function show() {
            var _this4 = this;

            this.setState({ open: true }, function () {
                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default.a.publish(_this4.props.modalId, "open");
            });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.setState({ open: false });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                smallScreen: window.innerHeight <= 800
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                quote_asset = _props2.quote_asset,
                backing_asset = _props2.backing_asset,
                account = _props2.account;

            var accountBalance = account.get("balances").toJS();
            var coreBalance = void 0,
                bitAssetBalance = void 0;

            if (accountBalance) {
                for (var id in accountBalance) {
                    if (id === backing_asset) {
                        coreBalance = accountBalance[id];
                    }

                    if (id === quote_asset) {
                        bitAssetBalance = accountBalance[id];
                    }
                }
            }

            return !this.state.open ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _BaseModal__WEBPACK_IMPORTED_MODULE_4__["default"],
                {
                    id: this.props.modalId,
                    overlay: true,
                    onClose: this.onClose.bind(this),
                    ref: this.props.modalId
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BorrowModalContent, {
                        quote_asset: quote_asset,
                        call_orders: account.get("call_orders", Object(immutable__WEBPACK_IMPORTED_MODULE_20__["List"])()).toList(),
                        hasCallOrders: account.get("call_orders") && account.get("call_orders").size > 0,
                        modalId: this.props.modalId,
                        bitasset_balance: bitAssetBalance,
                        backing_balance: coreBalance,
                        backing_asset: backing_asset,
                        hide_help: this.state.smallScreen,
                        account: account
                    })
                )
            );
        }
    }]);

    return ModalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalWrapper);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZS4yNTRlMjFlYWRjOTQ3ODhjYmYyYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NeU9wZW5PcmRlcnMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9PcGVuU2V0dGxlT3JkZXJzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9QcmljZVRleHQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L01hcmtldFByaWNlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL1NpbXBsZURlcG9zaXRXaXRoZHJhdy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9TaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2UuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Nb2RhbC9Cb3Jyb3dNb2RhbC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IE9wZW5TZXR0bGVPcmRlcnMgZnJvbSBcIi4vT3BlblNldHRsZU9yZGVyc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBQcmljZVRleHQgZnJvbSBcIi4uL1V0aWxpdHkvUHJpY2VUZXh0XCI7XG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7TGltaXRPcmRlciwgQ2FsbE9yZGVyfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCB7RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50fSBmcm9tIFwiLi4vVXRpbGl0eS9FcXVpdmFsZW50VmFsdWVDb21wb25lbnRcIjtcbmltcG9ydCB7TWFya2V0UHJpY2V9IGZyb20gXCIuLi9VdGlsaXR5L01hcmtldFByaWNlXCI7XG5pbXBvcnQgRm9ybWF0dGVkUHJpY2UgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkUHJpY2VcIjtcbmNvbnN0IGxlZnRBbGlnbiA9IHt0ZXh0QWxpZ246IFwibGVmdFwifTtcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcblxuY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtiYXNlU3ltYm9sLCBxdW90ZVN5bWJvbCwgZGFzaGJvYXJkLCBpc015QWNjb3VudH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAhZGFzaGJvYXJkID8gKFxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiB0aGlzLnByb3BzLmxlZnRBbGlnbiA/IFwibGVmdFwiIDogXCJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxlZnRBbGlnbiA/IHt0ZXh0QWxpZ246IFwibGVmdFwifSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VTeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e3F1b3RlU3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxlZnRBbGlnbiA/IHt0ZXh0QWxpZ246IFwibGVmdFwifSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VTeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e2Jhc2VTeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogdGhpcy5wcm9wcy5sZWZ0QWxpZ24gPyBcImxlZnRcIiA6IFwiXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24uZXhwaXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t3aWR0aDogXCI2JVwifX0gLz5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICB7aXNNeUFjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx0aCBpZD1cImNhbmNlbEFsbE9yZGVyc1wiIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYWRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdEFsaWdufT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24ub3JkZXJfaWRcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0QWxpZ259IGNvbFNwYW49XCI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdEFsaWdufT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0QWxpZ259PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZV9tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UudmFsdWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVGFibGVIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHF1b3RlU3ltYm9sOiBudWxsLFxuICAgIGJhc2VTeW1ib2w6IG51bGxcbn07XG5cbmNsYXNzIE9yZGVyUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMub3JkZXIuZm9yX3NhbGUgIT09IHRoaXMucHJvcHMub3JkZXIuZm9yX3NhbGUgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vcmRlci5pZCAhPT0gdGhpcy5wcm9wcy5vcmRlci5pZCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnF1b3RlICE9PSB0aGlzLnByb3BzLnF1b3RlIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuYmFzZSAhPT0gdGhpcy5wcm9wcy5iYXNlIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMub3JkZXIubWFya2V0X2Jhc2UgIT09IHRoaXMucHJvcHMub3JkZXIubWFya2V0X2Jhc2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBvcmRlcixcbiAgICAgICAgICAgIHNob3dTeW1ib2xzLFxuICAgICAgICAgICAgZGFzaGJvYXJkLFxuICAgICAgICAgICAgaXNNeUFjY291bnQsXG4gICAgICAgICAgICBzZXR0aW5nc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaXNCaWQgPSBvcmRlci5pc0JpZCgpO1xuICAgICAgICBjb25zdCBpc0NhbGwgPSBvcmRlci5pc0NhbGwoKTtcbiAgICAgICAgbGV0IHRkQ2xhc3MgPSBpc0NhbGxcbiAgICAgICAgICAgID8gXCJvcmRlckhpc3RvcnlDYWxsXCJcbiAgICAgICAgICAgIDogaXNCaWRcbiAgICAgICAgICAgICAgICA/IFwib3JkZXJIaXN0b3J5QmlkXCJcbiAgICAgICAgICAgICAgICA6IFwib3JkZXJIaXN0b3J5QXNrXCI7XG5cbiAgICAgICAgbGV0IHByaWNlU3ltYm9sID0gc2hvd1N5bWJvbHMgPyAoXG4gICAgICAgICAgICA8c3Bhbj57YCAke2Jhc2UuZ2V0KFwic3ltYm9sXCIpfS8ke3F1b3RlLmdldChcInN5bWJvbFwiKX1gfTwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGw7XG4gICAgICAgIGxldCB2YWx1ZVN5bWJvbCA9IHNob3dTeW1ib2xzID8gXCIgXCIgKyBiYXNlLmdldChcInN5bWJvbFwiKSA6IG51bGw7XG4gICAgICAgIGxldCBhbW91bnRTeW1ib2wgPSBzaG93U3ltYm9scyA/IFwiIFwiICsgcXVvdGUuZ2V0KFwic3ltYm9sXCIpIDogbnVsbDtcbiAgICAgICAgbGV0IHByZWZlcnJlZFVuaXQgPSBzZXR0aW5ncyA/IHNldHRpbmdzLmdldChcInVuaXRcIikgOiBcIjEuMy4wXCI7XG4gICAgICAgIGxldCBxdW90ZUNvbG9yID0gIWlzQmlkID8gXCJ2YWx1ZSBuZWdhdGl2ZVwiIDogXCJ2YWx1ZSBwb3NpdGl2ZVwiO1xuICAgICAgICBsZXQgYmFzZUNvbG9yID0gaXNCaWQgPyBcInZhbHVlIG5lZ2F0aXZlXCIgOiBcInZhbHVlIHBvc2l0aXZlXCI7XG5cbiAgICAgICAgcmV0dXJuICFkYXNoYm9hcmQgPyAoXG4gICAgICAgICAgICA8dHIga2V5PXtvcmRlci5pZH0+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17dGRDbGFzc30gc3R5bGU9e3twYWRkaW5nTGVmdDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFByaWNlVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e29yZGVyLmdldFByaWNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7cHJpY2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzQmlkID8gXCJhbW91bnRGb3JTYWxlXCIgOiBcImFtb3VudFRvUmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHthbW91bnRTeW1ib2x9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzQmlkID8gXCJhbW91bnRUb1JlY2VpdmVcIiA6IFwiYW1vdW50Rm9yU2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlU3ltYm9sfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMjUlXCIsIHRleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtvcmRlci5leHBpcmF0aW9uLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXNDYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQubG9jYWxpemUobmV3IERhdGUob3JkZXIuZXhwaXJhdGlvbiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcInNob3J0X2N1c3RvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDogXCI2JVwifX0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0NhbGwgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DYW5jZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNyb3NzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuY3Jvc3NfY2lyY2xlLmNhbmNlbF9vcmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDx0ciBrZXk9e29yZGVyLmlkfSBjbGFzc05hbWU9XCJjbGlja2FibGVcIj5cbiAgICAgICAgICAgICAgICB7aXNNeUFjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQ2FsbCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlckNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoZWNrQ2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7cXVvdGUuZ2V0KFwic3ltYm9sXCIpfV8ke2Jhc2UuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudHJhZGUudHJhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xlZnRBbGlnbn0+I3tvcmRlci5pZC5zdWJzdHJpbmcoNCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjRcIiBzdHlsZT17bGVmdEFsaWdufSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRmxpcH0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0JpZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UuYnV5X2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudFRvUmVjZWl2ZVwiIDogXCJhbW91bnRGb3JTYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzcz17cXVvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzPXtiYXNlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5zZWxsX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudFRvUmVjZWl2ZVwiIDogXCJhbW91bnRGb3JTYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzcz17cXVvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzPXtiYXNlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsZWZ0QWxpZ259IG9uQ2xpY2s9e3RoaXMucHJvcHMub25GbGlwfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17b3JkZXIuc2VsbFByaWNlKCkuYmFzZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtvcmRlci5zZWxsUHJpY2UoKS5iYXNlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtvcmRlci5zZWxsUHJpY2UoKS5xdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17b3JkZXIuc2VsbFByaWNlKCkucXVvdGUuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xlZnRBbGlnbn0gb25DbGljaz17dGhpcy5wcm9wcy5vbkZsaXB9PlxuICAgICAgICAgICAgICAgICAgICB7aXNCaWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMub25GbGlwfT5cbiAgICAgICAgICAgICAgICAgICAgPEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtvcmRlci5hbW91bnRGb3JTYWxlKCkuZ2V0QW1vdW50KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQXNzZXQ9e29yZGVyLmFtb3VudEZvclNhbGUoKS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vRGVjaW1hbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Fzc2V0PXtwcmVmZXJyZWRVbml0fVxuICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtwcmVmZXJyZWRVbml0fSAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuT3JkZXJSb3cuZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dTeW1ib2xzOiBmYWxzZVxufTtcblxuY2xhc3MgTXlPcGVuT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy5hY3RpdmVUYWJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0T3JkZXJzID0gdGhpcy5fZ2V0T3JkZXJzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gdGhpcy5yZWZzLmNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXIpIFBzLmluaXRpYWxpemUoY29udGVudENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBsZXQgY29udGVudENvbnRhaW5lciA9IHRoaXMucmVmcy5jb250YWluZXI7XG4gICAgICAgIGlmIChjb250ZW50Q29udGFpbmVyKSBQcy51cGRhdGUoY29udGVudENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgX2dldE9yZGVycygpIHtcbiAgICAgICAgY29uc3Qge2N1cnJlbnRBY2NvdW50LCBiYXNlLCBxdW90ZSwgZmVlZFByaWNlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IG9yZGVycyA9IGN1cnJlbnRBY2NvdW50LmdldChcIm9yZGVyc1wiKSxcbiAgICAgICAgICAgIGNhbGxfb3JkZXJzID0gY3VycmVudEFjY291bnQuZ2V0KFwiY2FsbF9vcmRlcnNcIik7XG4gICAgICAgIGNvbnN0IGJhc2VJRCA9IGJhc2UuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBxdW90ZUlEID0gcXVvdGUuZ2V0KFwiaWRcIik7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgIFtiYXNlLmdldChcImlkXCIpXToge3ByZWNpc2lvbjogYmFzZS5nZXQoXCJwcmVjaXNpb25cIil9LFxuICAgICAgICAgICAgW3F1b3RlLmdldChcImlkXCIpXToge3ByZWNpc2lvbjogcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgbGltaXRPcmRlcnMgPSBvcmRlcnNcbiAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAgIC5tYXAob3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvID0gQ2hhaW5TdG9yZS5nZXRPYmplY3Qob3JkZXIpO1xuICAgICAgICAgICAgICAgIGlmICghbykgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGxCYXNlID0gby5nZXRJbihbXCJzZWxsX3ByaWNlXCIsIFwiYmFzZVwiLCBcImFzc2V0X2lkXCJdKSxcbiAgICAgICAgICAgICAgICAgICAgc2VsbFF1b3RlID0gby5nZXRJbihbXCJzZWxsX3ByaWNlXCIsIFwicXVvdGVcIiwgXCJhc3NldF9pZFwiXSk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoc2VsbEJhc2UgPT09IGJhc2VJRCAmJiBzZWxsUXVvdGUgPT09IHF1b3RlSUQpIHx8XG4gICAgICAgICAgICAgICAgICAgIChzZWxsQmFzZSA9PT0gcXVvdGVJRCAmJiBzZWxsUXVvdGUgPT09IGJhc2VJRClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW1pdE9yZGVyKG8udG9KUygpLCBhc3NldHMsIHF1b3RlLmdldChcImlkXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSk7XG5cbiAgICAgICAgbGV0IGNhbGxPcmRlcnMgPSBjYWxsX29yZGVyc1xuICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgICAgLm1hcChvcmRlciA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG8gPSBDaGFpblN0b3JlLmdldE9iamVjdChvcmRlcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbykgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxsQmFzZSA9IG8uZ2V0SW4oW1wiY2FsbF9wcmljZVwiLCBcImJhc2VcIiwgXCJhc3NldF9pZFwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxsUXVvdGUgPSBvLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbGxfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhc3NldF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGxCYXNlID09PSBiYXNlSUQgJiYgc2VsbFF1b3RlID09PSBxdW90ZUlEKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGxCYXNlID09PSBxdW90ZUlEICYmIHNlbGxRdW90ZSA9PT0gYmFzZUlEKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmZWVkUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBDYWxsT3JkZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby50b0pTKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlzTWFyZ2luQ2FsbGVkKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpbWl0T3JkZXJzLmNvbmNhdChjYWxsT3JkZXJzKTtcbiAgICB9XG5cbiAgICBfY2hhbmdlVGFiKHRhYikge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgb3JkZXJzVGFiOiB0YWJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGFiOiB0YWJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgZm9jdXMgZ29lcyBiYWNrIHRvIHRvcCBvZiBzY3JvbGxhYmxlIGNvbnRhaW5lciB3aGVuIHRhYiBpcyBjaGFuZ2VkXG4gICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gdGhpcy5yZWZzLmNvbnRhaW5lcjtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgICAgICBQcy51cGRhdGUoY29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgc2V0VGltZW91dChSZWFjdFRvb2x0aXAucmVidWlsZCwgMTAwMCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlLCBxdW90ZVN5bWJvbCwgYmFzZVN5bWJvbCwgc2V0dGxlT3JkZXJzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlVGFifSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFiYXNlIHx8ICFxdW90ZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRDb250YWluZXI7XG5cbiAgICAgICAgLy8gSXMgYXNzZXQgYSBCaXRBc3NldCB3aXRoIFNldHRsZW1lbnRzXG4gICAgICAgIGxldCBiYXNlSXNCaXRBc3NldCA9XG4gICAgICAgICAgICBiYXNlLmdldChcImJpdGFzc2V0X2RhdGFfaWRcIikgJiYgc2V0dGxlT3JkZXJzLnNpemUgPiAwXG4gICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgbGV0IHF1b3RlSXNCaXRBc3NldCA9XG4gICAgICAgICAgICBxdW90ZS5nZXQoXCJiaXRhc3NldF9kYXRhX2lkXCIpICYmIHNldHRsZU9yZGVycy5zaXplID4gMFxuICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgIDogZmFsc2U7XG5cbiAgICAgICAgLy8gRGVmYXVsdCBUYWJcbiAgICAgICAgaWYgKCFhY3RpdmVUYWIgfHwgKCFiYXNlSXNCaXRBc3NldCAmJiAhcXVvdGVJc0JpdEFzc2V0KSkge1xuICAgICAgICAgICAgYWN0aXZlVGFiID0gXCJteV9vcmRlcnNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qIFVzZXJzIE9wZW4gT3JkZXJzIFRhYiAoZGVmYXVsdCkgKi9cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlVGFiID09IFwibXlfb3JkZXJzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVycyA9IHRoaXMuX2dldE9yZGVycygpO1xuICAgICAgICAgICAgbGV0IGVtcHR5Um93ID0gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0gY29sU3Bhbj1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQubm9fb3JkZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGJpZHMgPSBvcmRlcnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pc0JpZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuZ2V0UHJpY2UoKSAtIGEuZ2V0UHJpY2UoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAob3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBvcmRlci5nZXRQcmljZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3JkZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLm9uQ2FuY2VsLmJpbmQodGhpcywgb3JkZXIuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGFza3MgPSBvcmRlcnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWEuaXNCaWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmdldFByaWNlKCkgLSBiLmdldFByaWNlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKG9yZGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gb3JkZXIuZ2V0UHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlclJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29yZGVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5vbkNhbmNlbC5iaW5kKHRoaXMsIG9yZGVyLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCByb3dzID0gW107XG5cbiAgICAgICAgICAgIGlmIChhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJvd3MgPSByb3dzLmNvbmNhdChhc2tzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJpZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcm93cyA9IHJvd3MuY29uY2F0KGJpZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm9wcy5wcmljZSAtIGIucHJvcHMucHJpY2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lciA9IChcbiAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXIgY29tcG9uZW50PVwidGJvZHlcIiB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7cm93cy5sZW5ndGggPyByb3dzIDogZW1wdHlSb3d9XG4gICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB7XG4gICAgICAgICAgICAvKiBPcGVuIFNldHRsZSBPcmRlcnMgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVUYWIgJiYgYWN0aXZlVGFiID09IFwib3Blbl9zZXR0bGVtZW50XCIpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIgPSAoXG4gICAgICAgICAgICAgICAgPE9wZW5TZXR0bGVPcmRlcnNcbiAgICAgICAgICAgICAgICAgICAga2V5PVwic2V0dGxlX29yZGVyc1wiXG4gICAgICAgICAgICAgICAgICAgIG9yZGVycz17c2V0dGxlT3JkZXJzfVxuICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2w9e2Jhc2VTeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sPXtxdW90ZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoYyA9IFwibXltYXJrZXRzLWhlYWRlciBjbGlja2FibGVcIjtcbiAgICAgICAgbGV0IG15T3JkZXJzQ2xhc3MgPSBjbmFtZXMoaGMsIHtpbmFjdGl2ZTogYWN0aXZlVGFiICE9PSBcIm15X29yZGVyc1wifSk7XG4gICAgICAgIGxldCBvcGVuU2V0dGxlbWVudENsYXNzID0gY25hbWVzKGhjLCB7XG4gICAgICAgICAgICBpbmFjdGl2ZTogYWN0aXZlVGFiICE9PSBcIm9wZW5fc2V0dGxlbWVudFwiXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbXlPcmRlcnNXaWR0aCA9IGJhc2VJc0JpdEFzc2V0IHx8IHF1b3RlSXNCaXRBc3NldCA/IFwiNTAlXCIgOiBcIjEwMCVcIjtcbiAgICAgICAgbGV0IG9wZW5TZXR0bGVtZW50V2lkdGggPVxuICAgICAgICAgICAgYmFzZUlzQml0QXNzZXQgfHwgcXVvdGVJc0JpdEFzc2V0ID8gXCJpbmhlcml0XCIgOiBcIm5vbmVcIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjE1cHhcIn19XG4gICAgICAgICAgICAgICAga2V5PVwib3Blbl9vcmRlcnNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1ib3JkZXJlZCBzbWFsbC0xMlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiBcImF1dG9cIiwgbWluSGVpZ2h0OiAyNjZ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBteU9yZGVyc1dpZHRofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e215T3JkZXJzQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcywgXCJteV9vcmRlcnNcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubXlfb3JkZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogb3BlblNldHRsZW1lbnRXaWR0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvcGVuU2V0dGxlbWVudENsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZW5fc2V0dGxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5zZXR0bGVfb3JkZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXIgbWFya2V0LXJpZ2h0LXBhZGRpbmctb25seVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRleHQtcmlnaHQgZml4ZWQtdGFibGUgbWFya2V0LXJpZ2h0LXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09IFwibXlfb3JkZXJzXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBbGlnblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sPXtxdW90ZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyIGdyaWQtYmxvY2sgbWFya2V0LXJpZ2h0LXBhZGRpbmctb25seSBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvdzogXCJoaWRkZW5cIiwgbWF4SGVpZ2h0OiAyMDB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGV4dC1yaWdodCBmaXhlZC10YWJsZSBtYXJrZXQtcmlnaHQtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50Q29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk15T3Blbk9yZGVycy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYmFzZToge30sXG4gICAgcXVvdGU6IHt9LFxuICAgIG9yZGVyczoge30sXG4gICAgcXVvdGVTeW1ib2w6IFwiXCIsXG4gICAgYmFzZVN5bWJvbDogXCJcIlxufTtcblxuTXlPcGVuT3JkZXJzLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcXVvdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBvcmRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBxdW90ZVN5bWJvbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJhc2VTeW1ib2w6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IHtPcmRlclJvdywgVGFibGVIZWFkZXIsIE15T3Blbk9yZGVyc307XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBnZXRMb2NhbGUgZnJvbSBcImJyb3dzZXItbG9jYWxlXCI7XG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcblxuY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtiYXNlU3ltYm9sLCBxdW90ZVN5bWJvbH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFzZVN5bWJvbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QXNzZXROYW1lIG5hbWU9e2Jhc2VTeW1ib2x9IC8+LzxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90ZVN5bWJvbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QXNzZXROYW1lIG5hbWU9e3F1b3RlU3ltYm9sfSAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnNldHRsZW1lbnRfZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UYWJsZUhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcXVvdGVTeW1ib2w6IG51bGwsXG4gICAgYmFzZVN5bWJvbDogbnVsbFxufTtcblxuY2xhc3MgU2V0dGxlT3JkZXJSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtiYXNlLCBxdW90ZSwgb3JkZXIsIHNob3dTeW1ib2xzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHByaWNlID1cbiAgICAgICAgICAgIGJhc2UuZ2V0KFwiaWRcIikgPT0gXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgPyBvcmRlci5nZXRQcmljZSgpIC8gKDEgKyBvcmRlci5vZmZzZXRfcGVyY2VudCAvIDEwMDAwKVxuICAgICAgICAgICAgICAgIDogb3JkZXIuZ2V0UHJpY2UoKSAqICgxICsgb3JkZXIub2Zmc2V0X3BlcmNlbnQgLyAxMDAwMCk7XG4gICAgICAgIGxldCBhbW91bnRTeW1ib2wgPSBzaG93U3ltYm9scyA/IFwiIFwiICsgcXVvdGUuZ2V0KFwic3ltYm9sXCIpIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiA1fX0+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHdpZHRoOiBcIjI1JVwifX0+XG4gICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKHByaWNlLCBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIikpfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge2Ftb3VudFN5bWJvbH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCB3aWR0aDogXCIyNSVcIn19PlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFvcmRlci5pc0JpZCgpID8gXCJhbW91bnRGb3JTYWxlXCIgOiBcImFtb3VudFRvUmVjZWl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCB3aWR0aDogXCIyNSVcIn19PlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFvcmRlci5pc0JpZCgpID8gXCJhbW91bnRUb1JlY2VpdmVcIiA6IFwiYW1vdW50Rm9yU2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHdpZHRoOiBcIjI1JVwifX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtuZXcgRGF0ZShvcmRlci5zZXR0bGVtZW50X2RhdGUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LmxvY2FsaXplKG5ldyBEYXRlKG9yZGVyLnNldHRsZW1lbnRfZGF0ZSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldExvY2FsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKFwiZW4tdXNcIikgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtYXJrZXRfaGlzdG9yeV91c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJtYXJrZXRfaGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU2V0dGxlT3JkZXJSb3cuZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dTeW1ib2xzOiBmYWxzZSxcbiAgICBpbnZlcnQ6IGZhbHNlXG59O1xuXG5jbGFzcyBPcGVuU2V0dGxlT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudEFjY291bnQgIT09IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vcmRlcnMgIT09IHRoaXMucHJvcHMub3JkZXJzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge29yZGVycywgYmFzZSwgcXVvdGV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgYWN0aXZlT3JkZXJzID0gbnVsbDtcblxuICAgICAgICBpZiAob3JkZXJzLnNpemUgPiAwICYmIGJhc2UgJiYgcXVvdGUpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICAgICAgICAgIGFjdGl2ZU9yZGVycyA9IG9yZGVyc1xuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlzQmVmb3JlKGIpID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChvcmRlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpIDwgb3JkZXIuc2V0dGxlbWVudF9kYXRlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRsZU9yZGVyUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlciBjb21wb25lbnQ9XCJ0Ym9keVwiIHRyYW5zaXRpb25OYW1lPVwibmV3cm93XCI+XG4gICAgICAgICAgICAgICAge2FjdGl2ZU9yZGVyc31cbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5PcGVuU2V0dGxlT3JkZXJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBiYXNlOiB7fSxcbiAgICBxdW90ZToge30sXG4gICAgb3JkZXJzOiB7fSxcbiAgICBxdW90ZVN5bWJvbDogXCJcIixcbiAgICBiYXNlU3ltYm9sOiBcIlwiXG59O1xuXG5PcGVuU2V0dGxlT3JkZXJzLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcXVvdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBvcmRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBxdW90ZVN5bWJvbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJhc2VTeW1ib2w6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3BlblNldHRsZU9yZGVycztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5cbmNsYXNzIFByaWNlVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ByaWNlLCBwcmVGb3JtYXR0ZWRQcmljZSwgcXVvdGUsIGJhc2V9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFwcmljZSAmJiAhcHJlRm9ybWF0dGVkUHJpY2UpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgZm9ybWF0dGVkUHJpY2UgPSAhIXByZUZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICA/IHByZUZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICA6IHV0aWxzLnByaWNlX3RvX3RleHQocHJpY2UsIHF1b3RlLCBiYXNlKTtcblxuICAgICAgICBpZiAoZm9ybWF0dGVkUHJpY2UuZnVsbCA+PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1pbnRlZ2VyXCI+e2Zvcm1hdHRlZFByaWNlLmludH0uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UuZGVjID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtaW50ZWdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLnRyYWlsaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdHRlZFByaWNlLmZ1bGwgPj0gMC4xKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+e2Zvcm1hdHRlZFByaWNlLmludH0uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UuZGVjID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtaW50ZWdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLnRyYWlsaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtZGVjaW1hbFwiPntmb3JtYXR0ZWRQcmljZS5pbnR9Ljwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLmRlYyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWRlY2ltYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UuZGVjfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLnRyYWlsaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtaW50ZWdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS50cmFpbGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VUZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBGb3JtYXR0ZWRQcmljZSBmcm9tIFwiLi9Gb3JtYXR0ZWRQcmljZVwiO1xuaW1wb3J0IG1hcmtldFV0aWxzIGZyb20gXCJjb21tb24vbWFya2V0X3V0aWxzXCI7XG5cbmNsYXNzIE1hcmtldFN0YXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIGNvbnN0IHttYXJrZXROYW1lfSA9IG1hcmtldFV0aWxzLmdldE1hcmtldE5hbWUocHJvcHMuYmFzZSwgcHJvcHMucXVvdGUpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFya2V0TmFtZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9jaGVja1N0YXRzKG5ld1N0YXRzID0ge2Nsb3NlOiB7fX0sIG9sZFN0YXRzID0ge2Nsb3NlOiB7fX0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5ld1N0YXRzLnZvbHVtZUJhc2UgIT09IG9sZFN0YXRzLnZvbHVtZUJhc2UgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXdTdGF0cy5jbG9zZSAmJiBuZXdTdGF0cy5jbG9zZS5iYXNlLFxuICAgICAgICAgICAgICAgIG9sZFN0YXRzLmNsb3NlICYmIG9sZFN0YXRzLmNsb3NlLmJhc2VcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXdTdGF0cy5jbG9zZSAmJiBuZXdTdGF0cy5jbG9zZS5xdW90ZSxcbiAgICAgICAgICAgICAgICBvbGRTdGF0cy5jbG9zZSAmJiBvbGRTdGF0cy5jbG9zZS5xdW90ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5fY2hlY2tTdGF0cyhcbiAgICAgICAgICAgICAgICBucC5hbGxNYXJrZXRTdGF0cy5nZXQodGhpcy5zdGF0ZS5tYXJrZXROYW1lKSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsbE1hcmtldFN0YXRzLmdldCh0aGlzLnN0YXRlLm1hcmtldE5hbWUpXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICBucC5iYXNlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLmJhc2UuZ2V0KFwiaWRcIikgfHxcbiAgICAgICAgICAgIG5wLnF1b3RlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRzSW50ZXJ2YWwpIHRoaXMuc3RhdHNJbnRlcnZhbCgpO1xuICAgIH1cbn1cblxuY2xhc3MgTWFya2V0UHJpY2VJbm5lciBleHRlbmRzIE1hcmtldFN0YXRzIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobnApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthbGxNYXJrZXRTdGF0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7bWFya2V0TmFtZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBtYXJrZXRTdGF0cyA9IGFsbE1hcmtldFN0YXRzLmdldChtYXJrZXROYW1lKTtcbiAgICAgICAgbGV0IHByaWNlID0gbWFya2V0U3RhdHMgJiYgbWFya2V0U3RhdHMucHJpY2UgPyBtYXJrZXRTdGF0cy5wcmljZSA6IG51bGw7XG4gICAgICAgIC8vIGlmICghcHJpY2UgJiYgbWFya2V0U3RhdHNJbnZlcnRlZCAmJiBtYXJrZXRTdGF0c0ludmVydGVkLnByaWNlKSB7XG4gICAgICAgIC8vICAgICBwcmljZSA9IG1hcmtldFN0YXRzSW52ZXJ0ZWQucHJpY2UuaW52ZXJ0KCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbmFtZXMoXCJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cbiAgICAgICAgICAgICAgICB7cHJpY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e3ByaWNlLmJhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17cHJpY2UuYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17cHJpY2UucXVvdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3ByaWNlLnF1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXt0aGlzLnByb3BzLmZvcmNlX2RpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9scz17dGhpcy5wcm9wcy5oaWRlX3N5bWJvbHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgXCJuL2FcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5NYXJrZXRQcmljZUlubmVyID0gQXNzZXRXcmFwcGVyKE1hcmtldFByaWNlSW5uZXIsIHtcbiAgICBwcm9wTmFtZXM6IFtcInF1b3RlXCIsIFwiYmFzZVwiXVxufSk7XG5cbmNsYXNzIE1hcmtldFByaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TWFya2V0UHJpY2VJbm5lciB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5NYXJrZXRQcmljZSA9IGNvbm5lY3QoXG4gICAgTWFya2V0UHJpY2UsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbTWFya2V0c1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCB7TWFya2V0UHJpY2UsIE1hcmtldFN0YXRzfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IEJhc2VNb2RhbCBmcm9tIFwiLi4vTW9kYWwvQmFzZU1vZGFsXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7XG4gICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzLFxuICAgIHZhbGlkYXRlQWRkcmVzcyxcbiAgICBXaXRoZHJhd0FkZHJlc3NlcyxcbiAgICBnZXREZXBvc2l0QWRkcmVzc1xufSBmcm9tIFwiY29tbW9uL2dhdGV3YXlNZXRob2RzXCI7XG5pbXBvcnQgQ29weUJ1dHRvbiBmcm9tIFwiLi4vVXRpbGl0eS9Db3B5QnV0dG9uXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHtjaGVja0ZlZVN0YXR1c0FzeW5jLCBjaGVja0JhbGFuY2V9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7RGVjaW1hbENoZWNrZXJ9IGZyb20gXCIuLi9FeGNoYW5nZS9FeGNoYW5nZUlucHV0XCI7XG5pbXBvcnQge29wZW5sZWRnZXJBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xuaW1wb3J0IHtnZXRXYWxsZXROYW1lfSBmcm9tIFwiYnJhbmRpbmdcIjtcblxuLy8gaW1wb3J0IERlcG9zaXRGaWF0T3BlbkxlZGdlciBmcm9tIFwiY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9EZXBvc2l0RmlhdE9wZW5MZWRnZXJcIjtcbi8vIGltcG9ydCBXaXRoZHJhd0ZpYXRPcGVuTGVkZ2VyIGZyb20gXCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9vcGVubGVkZ2VyL1dpdGhkcmF3RmlhdE9wZW5MZWRnZXJcIjtcblxuY2xhc3MgRGVwb3NpdFdpdGhkcmF3Q29udGVudCBleHRlbmRzIERlY2ltYWxDaGVja2VyIHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzZW5kZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgY29yZUFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb3JlQXNzZXQ6IFwiMS4zLjBcIixcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvQWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChwcm9wcy53YWxsZXRUeXBlKSxcbiAgICAgICAgICAgIHdpdGhkcmF3VmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBhbW91bnRFcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHN5bWJvbDogcHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgdG9fd2l0aGRyYXc6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgZmVlU3RhdHVzOiB7fSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZW1wdHlBZGRyZXNzRGVwb3NpdDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModGhpcy5zdGF0ZS50b0FkZHJlc3MsIHByb3BzKTtcblxuICAgICAgICB0aGlzLmFkZERlcG9zaXRBZGRyZXNzID0gdGhpcy5hZGREZXBvc2l0QWRkcmVzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cyA9IHRoaXMuX2NoZWNrRmVlU3RhdHVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZSA9IHRoaXMuX2NoZWNrQmFsYW5jZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9nZXRDdXJyZW50QmFsYW5jZSA9IHRoaXMuX2dldEN1cnJlbnRCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2dldEZlZSA9IHRoaXMuX2dldEZlZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl91cGRhdGVGZWUgPSBkZWJvdW5jZSh0aGlzLl91cGRhdGVGZWUuYmluZCh0aGlzKSwgMjUwKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldERlcG9zaXRBZGRyZXNzKCk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBucC5hc3NldCAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCAmJlxuICAgICAgICAgICAgbnAuYXNzZXQuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9fd2l0aGRyYXc6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogbnAuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IG5wLmFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgZ2F0ZUZlZTogbnAuYXNzZXQuZ2V0KFwiZ2F0ZUZlZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlQWNjb3VudDogbnAuYXNzZXQuZ2V0KFwiaW50ZXJtZWRpYXRlQWNjb3VudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBucC5hc3NldC5nZXQoXCJzeW1ib2xcIiksXG4gICAgICAgICAgICAgICAgICAgIG1lbW86IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3VmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9BZGRyZXNzOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KG5wLndhbGxldFR5cGUpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXREZXBvc2l0QWRkcmVzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXREZXBvc2l0QWRkcmVzcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmJhY2tpbmdDb2luVHlwZSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSBnZXREZXBvc2l0QWRkcmVzcyh7XG4gICAgICAgICAgICBjb2luOiBgb3Blbi4ke3RoaXMucHJvcHMuYmFja2luZ0NvaW5UeXBlLnRvTG93ZXJDYXNlKCl9YCxcbiAgICAgICAgICAgIGFjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZWNlaXZlX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh0aGlzLl9nZXREZXBvc2l0T2JqZWN0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXREZXBvc2l0T2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXRDb2luVHlwZTogdGhpcy5wcm9wcy5iYWNraW5nQ29pblR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIG91dHB1dENvaW5UeXBlOiB0aGlzLnByb3BzLnN5bWJvbC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgb3V0cHV0QWRkcmVzczogdGhpcy5wcm9wcy5zZW5kZXIuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3NMb2FkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBlbXB0eUFkZHJlc3NEZXBvc2l0OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgfVxuXG4gICAgYWRkRGVwb3NpdEFkZHJlc3MocmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgIGlmIChyZWNlaXZlX2FkZHJlc3MuZXJyb3IpIHtcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5lcnJvci5tZXNzYWdlID09PSBcIm5vX2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgID8gdGhpcy5zZXRTdGF0ZSh7ZW1wdHlBZGRyZXNzRGVwb3NpdDogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHtlbXB0eUFkZHJlc3NEZXBvc2l0OiBmYWxzZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIFJlYWN0VG9vbHRpcC5yZWJ1aWxkKCk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvX3dpdGhkcmF3LmdldEFtb3VudCgpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW1vdW50RXJyb3I6IFwidHJhbnNmZXIuZXJyb3JzLnBvc1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pbnRlcm1lZGlhdGVBY2NvdW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmVlID0gdGhpcy5fZ2V0RmVlKCk7XG4gICAgICAgIGNvbnN0IGdhdGVGZWUgPSB0aGlzLl9nZXRHYXRlRmVlKCk7XG5cbiAgICAgICAgbGV0IHNlbmRBbW91bnQgPSB0aGlzLnN0YXRlLnRvX3dpdGhkcmF3LmNsb25lKCk7XG5cbiAgICAgICAgbGV0IGJhbGFuY2VBbW91bnQgPSBzZW5kQW1vdW50LmNsb25lKFxuICAgICAgICAgICAgdGhpcy5fZ2V0Q3VycmVudEJhbGFuY2UoKS5nZXQoXCJiYWxhbmNlXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgc2VuZEFtb3VudC5wbHVzKGdhdGVGZWUpO1xuXG4gICAgICAgIC8qIEluc3VmZmljaWVudCBiYWxhbmNlICovXG4gICAgICAgIGlmIChiYWxhbmNlQW1vdW50Lmx0KHNlbmRBbW91bnQpKSB7XG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBvcmlnaW5hbGx5IGVudGVyZWQgYW1vdW50XG4gICAgICAgICAgICBzZW5kQW1vdW50ID0gdGhpcy5zdGF0ZS50b193aXRoZHJhdy5jbG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgQWNjb3VudEFjdGlvbnMudHJhbnNmZXIoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRlci5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW50ZXJtZWRpYXRlQWNjb3VudCxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG9fd2l0aGRyYXcuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvX3dpdGhkcmF3LmFzc2V0X2lkLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQ29pblR5cGUudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9BZGRyZXNzICtcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5tZW1vXG4gICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyBuZXcgQnVmZmVyKHRoaXMuc3RhdGUubWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGZlZS5hc3NldF9pZFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF91cGRhdGVBbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGZlZUFtb3VudCA9IHRoaXMuX2dldEZlZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50QmFsYW5jZSA9IHRoaXMuX2dldEN1cnJlbnRCYWxhbmNlKCk7XG5cbiAgICAgICAgbGV0IHRvdGFsID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogY3VycmVudEJhbGFuY2UgPyBjdXJyZW50QmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpIDogMCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdWJ0cmFjdCB0aGUgZmVlIGlmIGl0IGlzIHVzaW5nIHRoZSBzYW1lIGFzc2V0XG4gICAgICAgIGlmICh0b3RhbC5hc3NldF9pZCA9PT0gZmVlQW1vdW50LmFzc2V0X2lkKSB7XG4gICAgICAgICAgICB0b3RhbC5taW51cyhmZWVBbW91bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZS50b193aXRoZHJhdy5zZXRBbW91bnQoe3NhdHM6IHRvdGFsLmdldEFtb3VudCgpfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdWYWx1ZTogdG90YWwuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgYW1vdW50RXJyb3I6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfY2hlY2tGZWVTdGF0dXMoYWNjb3VudCA9IHRoaXMucHJvcHMuc2VuZGVyKSB7XG4gICAgICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IFtcIjEuMy4wXCIsIHRoaXMuc3RhdGUudG9fd2l0aGRyYXcuYXNzZXRfaWRdO1xuICAgICAgICBsZXQgZmVlU3RhdHVzID0ge307XG4gICAgICAgIGxldCBwID0gW107XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgcC5wdXNoKFxuICAgICAgICAgICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIGZlZUlEOiBhLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdDb2luVHlwZS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b0FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW8gPyBcIjpcIiArIHRoaXMuc3RhdGUubWVtbyA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFByb21pc2UuYWxsKHApXG4gICAgICAgICAgICAudGhlbihzdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzW2FdID0gc3RhdHVzW2lkeF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyh0aGlzLnN0YXRlLmZlZVN0YXR1cywgZmVlU3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUZlZShmZWVfYXNzZXRfaWQgPSB0aGlzLnN0YXRlLmZlZV9hc3NldF9pZCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc2VuZGVyKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICBhY2NvdW50SUQ6IHRoaXMucHJvcHMuc2VuZGVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgZmVlSUQ6IGZlZV9hc3NldF9pZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdDb2luVHlwZS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvQWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW8gPyBcIjpcIiArIHRoaXMuc3RhdGUubWVtbyA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKHtmZWUsIGhhc0JhbGFuY2UsIGhhc1Bvb2xCYWxhbmNlfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogZmVlLFxuICAgICAgICAgICAgICAgICAgICBoYXNCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBoYXNQb29sQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRDdXJyZW50QmFsYW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYmFsYW5jZXMuZmluZChiID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiICYmIGIuZ2V0KFwiYXNzZXRfdHlwZVwiKSA9PT0gdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoZWNrQmFsYW5jZSgpIHtcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudCwgdG9fd2l0aGRyYXd9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSB0aGlzLl9nZXRDdXJyZW50QmFsYW5jZSgpO1xuICAgICAgICBpZiAoIWJhbGFuY2UgfHwgIWZlZUFtb3VudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBoYXNCYWxhbmNlID0gY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgdG9fd2l0aGRyYXcuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIHRoaXMuX2dldEZlZSgpLFxuICAgICAgICAgICAgYmFsYW5jZSxcbiAgICAgICAgICAgIHRoaXMuX2dldEdhdGVGZWUoKVxuICAgICAgICApO1xuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgIT09ICFoYXNCYWxhbmNlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xuXG4gICAgICAgIHJldHVybiBoYXNCYWxhbmNlO1xuICAgIH1cblxuICAgIF9nZXRGZWUoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRGZWUgPSB7XG4gICAgICAgICAgICBnZXRBbW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnN0YXRlLmZlZV9hc3NldF9pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5mZWVTdGF0dXMgfHwgIXRoaXMuc3RhdGUuZmVlQW1vdW50KSByZXR1cm4gZGVmYXVsdEZlZTtcblxuICAgICAgICBjb25zdCBjb3JlU3RhdHVzID0gdGhpcy5zdGF0ZS5mZWVTdGF0dXNbXCIxLjMuMFwiXTtcbiAgICAgICAgY29uc3Qgd2l0aGRyYXdBc3NldFN0YXR1cyA9IHRoaXMuc3RhdGUuZmVlU3RhdHVzW1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b193aXRoZHJhdy5hc3NldF9pZFxuICAgICAgICBdO1xuICAgICAgICAvLyBVc2UgY29yZSBhc3NldCB0byBwYXkgdGhlIGZlZXMgaWYgcHJlc2VudCBhbmQgYmFsYW5jZSBpcyBzdWZmaWNpZW50IHNpbmNlIGl0J3MgY2hlYXBlc3RcbiAgICAgICAgaWYgKGNvcmVTdGF0dXMgJiYgY29yZVN0YXR1cy5oYXNCYWxhbmNlKSByZXR1cm4gY29yZVN0YXR1cy5mZWU7XG4gICAgICAgIC8vIFVzZSBzYW1lIGFzc2V0IGFzIHdpdGhkcmF3IGlmIG5vdFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb3JlU3RhdHVzICYmXG4gICAgICAgICAgICAhY29yZVN0YXR1cy5oYXNCYWxhbmNlICYmXG4gICAgICAgICAgICB3aXRoZHJhd0Fzc2V0U3RhdHVzICYmXG4gICAgICAgICAgICB3aXRoZHJhd0Fzc2V0U3RhdHVzLmhhc0JhbGFuY2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aGRyYXdBc3NldFN0YXR1cy5mZWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmVTdGF0dXMgPyBjb3JlU3RhdHVzLmZlZSA6IGRlZmF1bHRGZWU7XG4gICAgfVxuXG4gICAgX29uSW5wdXRBbW91bnQoZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b193aXRoZHJhdy5zZXRBbW91bnQoe1xuICAgICAgICAgICAgICAgIHJlYWw6IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUgfHwgMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3VmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnRFcnJvcjogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnI6XCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25JbnB1dFRvKGUpIHtcbiAgICAgICAgbGV0IHRvQWRkcmVzcyA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiB0b0FkZHJlc3MsXG4gICAgICAgICAgICB2YWxpZEFkZHJlc3M6IG51bGwsXG4gICAgICAgICAgICB0b0FkZHJlc3M6IHRvQWRkcmVzc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModG9BZGRyZXNzKTtcbiAgICB9XG5cbiAgICBfb25NZW1vQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IGUudGFyZ2V0LnZhbHVlfSwgdGhpcy5fdXBkYXRlRmVlKTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVBZGRyZXNzKGFkZHJlc3MsIHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB2YWxpZGF0ZUFkZHJlc3Moe1xuICAgICAgICAgICAgdXJsOiBvcGVubGVkZ2VyQVBJcy5CQVNFLFxuICAgICAgICAgICAgd2FsbGV0VHlwZTogcHJvcHMud2FsbGV0VHlwZSxcbiAgICAgICAgICAgIG5ld0FkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGlzVmFsaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvQWRkcmVzcyA9PT0gYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRBZGRyZXNzOiAhIWlzVmFsaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHZhbGlkYXRpbmcgYWRkcmVzczpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vcGVuUmVnaXN0cmFyU2l0ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG5ld1duZCA9IHdpbmRvdy5vcGVuKFNldHRpbmdzU3RvcmUuc2l0ZV9yZWdpc3RyLCBcIl9ibGFua1wiKTtcbiAgICAgICAgbmV3V25kLm9wZW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgX2dldEdhdGVGZWUoKSB7XG4gICAgICAgIGNvbnN0IHtnYXRlRmVlLCBhc3NldH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIHJlYWw6IHBhcnNlRmxvYXQoZ2F0ZUZlZSA/IGdhdGVGZWUucmVwbGFjZShcIixcIiwgXCJcIikgOiAwKSxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZW5kZXJXaXRoZHJhdygpIHtcbiAgICAgICAgY29uc3Qge2Ftb3VudEVycm9yfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWV9ID0gdXRpbHMucmVwbGFjZU5hbWUodGhpcy5wcm9wcy5hc3NldCk7XG4gICAgICAgIGxldCB0YWJJbmRleCA9IDE7XG4gICAgICAgIGNvbnN0IHtzdXBwb3J0c01lbW9zfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5maWF0TW9kYWwpe1xuICAgICAgICAvLyAgICAgaWYofnRoaXMucHJvcHMuZmlhdE1vZGFsLmluZGV4T2YoJ2NhbkZpYXRXaXRoJykpe1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoPFdpdGhkcmF3RmlhdE9wZW5MZWRnZXJcbiAgICAgICAgLy8gICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50fVxuICAgICAgICAvLyAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD1cIm9wZW5sZWRnZXItZmlhdFwiXG4gICAgICAgIC8vICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpLnNwbGl0KCdPUEVOLicpLmpvaW4oJycpfVxuICAgICAgICAvLyAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgLy8gICAgICAgICAgICAgcnBjX3VybD17U2V0dGluZ3NTdG9yZS5ycGNfdXJsfVxuICAgICAgICAvLyAgICAgICAgIC8+KTtcbiAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoPHA+Q2xpY2sgPGEgaHJlZj0nIycgb25DbGljaz17dGhpcy5fb3BlblJlZ2lzdHJhclNpdGV9ID5oZXJlPC9hPiB0byByZWdpc3RlciBmb3IgZGVwb3NpdHMgPC9wPik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50RmVlID0gdGhpcy5fZ2V0RmVlKCk7XG4gICAgICAgIGNvbnN0IGdhdGVGZWUgPSB0aGlzLl9nZXRHYXRlRmVlKCk7XG4gICAgICAgIGNvbnN0IGZlZVN0YXR1cyA9IHRoaXMuc3RhdGUuZmVlU3RhdHVzW2N1cnJlbnRGZWUuYXNzZXRfaWRdO1xuICAgICAgICBjb25zdCBmZWVBc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoY3VycmVudEZlZS5hc3NldF9pZCk7XG5cbiAgICAgICAgY29uc3QgZGlzYWJsZVN1Ym1pdCA9XG4gICAgICAgICAgICAoZmVlU3RhdHVzICYmICFmZWVTdGF0dXMuaGFzQmFsYW5jZSkgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS50b0FkZHJlc3MgfHxcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLndpdGhkcmF3VmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X2Z1bmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJDdXJyZW50QmFsYW5jZSgpfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwud2l0aGRyYXcuYW1vdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS53aXRoZHJhd1ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0QW1vdW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnthc3NldE5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHthbW91bnRFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXthbW91bnRFcnJvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNmZXIuZmVlXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudEZlZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVBc3NldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2ZlZUFzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7ZmVlU3RhdHVzICYmICFmZWVTdGF0dXMuaGFzQmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2F0ZXdheS5mZWVcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnYXRlRmVlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtmZWVTdGF0dXMgJiYgIWZlZVN0YXR1cy5oYXNCYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC53aXRoZHJhdy5hZGRyZXNzXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkud2l0aGRyYXdfcGxhY2Vob2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0OiBhc3NldE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG9BZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0VG8uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLndpdGhkcmF3X2FkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXQ6IGFzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS52YWxpZEFkZHJlc3MgJiYgdGhpcy5zdGF0ZS50b0FkZHJlc3MgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy1lcnJvclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnZhbGlkX2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luX3R5cGU9e2Fzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3N1cHBvcnRzTWVtb3MgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2ltcGxlVHJhZGVfX3dpdGhkcmF3LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNmZXIubWVtb1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVtb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbk1lbW9DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLnZhbGlkQWRkcmVzcyAmJiB0aGlzLnN0YXRlLnRvQWRkcmVzcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy1lcnJvclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudmFsaWRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luX3R5cGU9e2Fzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIFNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIgKyAoZGlzYWJsZVN1Ym1pdCA/IFwiIGRpc2FibGVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfbm93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyRGVwb3NpdCgpIHtcbiAgICAgICAgY29uc3Qge3JlY2VpdmVfYWRkcmVzcywgbG9hZGluZywgZW1wdHlBZGRyZXNzRGVwb3NpdH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7bmFtZTogYXNzZXROYW1lfSA9IHV0aWxzLnJlcGxhY2VOYW1lKHRoaXMucHJvcHMuYXNzZXQpO1xuICAgICAgICBjb25zdCBoYXNNZW1vID1cbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcyAmJlxuICAgICAgICAgICAgXCJtZW1vXCIgaW4gcmVjZWl2ZV9hZGRyZXNzICYmXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtbztcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbHVlID0gKHJlY2VpdmVfYWRkcmVzcyAmJiByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcykgfHwgXCJcIjtcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcblxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmZpYXRNb2RhbCl7XG4gICAgICAgIC8vICAgICBpZih+dGhpcy5wcm9wcy5maWF0TW9kYWwuaW5kZXhPZignY2FuRmlhdERlcCcpKXtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gKDxEZXBvc2l0RmlhdE9wZW5MZWRnZXJcbiAgICAgICAgLy8gICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50fVxuICAgICAgICAvLyAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD1cIm9wZW5sZWRnZXItZmlhdFwiXG4gICAgICAgIC8vICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpLnNwbGl0KCdPUEVOLicpLmpvaW4oJycpfVxuICAgICAgICAvLyAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgLy8gICAgICAgICAgICAgcnBjX3VybD17U2V0dGluZ3NTdG9yZS5ycGNfdXJsfVxuICAgICAgICAvLyAgICAgICAgIC8+KTtcbiAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoPHA+Q2xpY2sgPGEgaHJlZj0nIycgb25DbGljaz17dGhpcy5fb3BlblJlZ2lzdHJhclNpdGV9ID5oZXJlPC9hPiB0byByZWdpc3RlciBmb3IgZGVwb3NpdHMgPC9wPik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXshYWRkcmVzc1ZhbHVlID8gXCJuby1vdmVyZmxvd1wiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2FmZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYWRkX2Z1bmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuc2VuZGVyLmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJDdXJyZW50QmFsYW5jZSgpfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLmRlcG9zaXRfdGlwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlbHAtdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZ6XzEyIGxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmRlcG9zaXRfbm90aWNlX2RlbGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgeyFhZGRyZXNzVmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW1wdHlBZGRyZXNzRGVwb3NpdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5wbGVhc2VfZ2VuZXJhdGVfYWRkcmVzc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkcmVzc1ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uIHRleHQ9e2FkZHJlc3NWYWx1ZX0gLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge2hhc01lbW8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2Zlci5tZW1vXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b24gdGV4dD17cmVjZWl2ZV9hZGRyZXNzLm1lbW99IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVfYWRkcmVzcyAmJiByZWNlaXZlX2FkZHJlc3MuZXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy1lcnJvclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjZWl2ZV9hZGRyZXNzLmVycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cCBTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHNwaW5uZXItYnV0dG9uLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlcXVlc3REZXBvc2l0QWRkcmVzc0xvYWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJjaXJjbGVcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LmdlbmVyYXRlX25ld1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckN1cnJlbnRCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7bmFtZTogYXNzZXROYW1lfSA9IHV0aWxzLnJlcGxhY2VOYW1lKHRoaXMucHJvcHMuYXNzZXQpO1xuICAgICAgICBjb25zdCBpc0RlcG9zaXQgPSB0aGlzLnByb3BzLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRCYWxhbmNlID0gdGhpcy5fZ2V0Q3VycmVudEJhbGFuY2UoKTtcblxuICAgICAgICBsZXQgYXNzZXQgPSBjdXJyZW50QmFsYW5jZVxuICAgICAgICAgICAgPyBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGN1cnJlbnRCYWxhbmNlLmdldChcImFzc2V0X3R5cGVcIiksXG4gICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgYW1vdW50OiBjdXJyZW50QmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgLy8gVEVNUCAvL1xuICAgICAgICAvLyBhc3NldCA9IG5ldyBBc3NldCh7XG4gICAgICAgIC8vICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgLy8gICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgIC8vICAgICBhbW91bnQ6IDY1NjU0NjQ1XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGNvbnN0IGFwcGx5QmFsYW5jZUJ1dHRvbiA9IGlzRGVwb3NpdCA/IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsIGJvcmRlckxlZnQ6IFwibm9uZVwifX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YXNzZXROYW1lfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAud2l0aGRyYXdfZnVsbFwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLCBib3JkZXJMZWZ0OiBcIm5vbmVcIn19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdXBkYXRlQW1vdW50LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICFjdXJyZW50QmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhcnNlSW50KGN1cnJlbnRCYWxhbmNlLmdldChcImJhbGFuY2VcIiksIDEwKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNsaXBweVwiIHRpdGxlPVwiaWNvbnMuY2xpcHB5LndpdGhkcmF3X2Z1bGxcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiBcIjFyZW1cIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7Zm9udFNpemU6IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnYXRld2F5LmJhbGFuY2VfYXNzZXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICB9KX06XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXshYXNzZXQgPyAwIDogYXNzZXQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FwcGx5QmFsYW5jZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXQsIGFjdGlvbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgaXNEZXBvc2l0ID0gYWN0aW9uID09PSBcImRlcG9zaXRcIjtcblxuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWV9ID0gdXRpbHMucmVwbGFjZU5hbWUoYXNzZXQpO1xuXG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5wcm9wcy5pc0Rvd24gPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWwgY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudW5hdmFpbGFibGVfT1BFTlwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6ICF0aGlzLnByb3BzLmlzQXZhaWxhYmxlID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnVuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaXNEZXBvc2l0ID8gKFxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyRGVwb3NpdCgpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJXaXRoZHJhdygpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2ltcGxlVHJhZGVfX21vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXBvc2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZ2F0ZXdheS5kZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJtb2RhbC53aXRoZHJhdy5zdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vZGFsX19kaXZpZGVyXCIgLz5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIycmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMnJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuRGVwb3NpdFdpdGhkcmF3Q29udGVudCA9IEJpbmRUb0NoYWluU3RhdGUoRGVwb3NpdFdpdGhkcmF3Q29udGVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURlcG9zaXRXaXRoZHJhd01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge29wZW46IGZhbHNlfTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgKCkgPT4ge1xuICAgICAgICAgICAgWmZBcGkucHVibGlzaCh0aGlzLnByb3BzLm1vZGFsSWQsIFwib3BlblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5zdGF0ZS5vcGVuID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxCYXNlTW9kYWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXN0XCJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLm1vZGFsSWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPERlcG9zaXRXaXRoZHJhd0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9CYXNlTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gXCIuLi9Nb2RhbC9CYXNlTW9kYWxcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7QXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7XG4gICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzLFxuICAgIHZhbGlkYXRlQWRkcmVzcyxcbiAgICBXaXRoZHJhd0FkZHJlc3NlcyxcbiAgICBnZXREZXBvc2l0TGltaXQsXG4gICAgZXN0aW1hdGVPdXRwdXQsXG4gICAgZXN0aW1hdGVJbnB1dFxufSBmcm9tIFwiY29tbW9uL2dhdGV3YXlNZXRob2RzXCI7XG5pbXBvcnQgQmxvY2tUcmFkZXNEZXBvc2l0QWRkcmVzc0NhY2hlIGZyb20gXCJjb21tb24vQmxvY2tUcmFkZXNEZXBvc2l0QWRkcmVzc0NhY2hlXCI7XG5pbXBvcnQgQ29weUJ1dHRvbiBmcm9tIFwiLi4vVXRpbGl0eS9Db3B5QnV0dG9uXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHtibG9ja1RyYWRlc0FQSXN9IGZyb20gXCJhcGkvYXBpQ29uZmlnXCI7XG5pbXBvcnQgRmxvYXRpbmdEcm9wZG93biBmcm9tIFwiLi4vVXRpbGl0eS9GbG9hdGluZ0Ryb3Bkb3duXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBRUkNvZGUgZnJvbSBcInFyY29kZS5yZWFjdFwiO1xuXG4vLyBpbXBvcnQgRGVwb3NpdEZpYXRPcGVuTGVkZ2VyIGZyb20gXCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9vcGVubGVkZ2VyL0RlcG9zaXRGaWF0T3BlbkxlZGdlclwiO1xuLy8gaW1wb3J0IFdpdGhkcmF3RmlhdE9wZW5MZWRnZXIgZnJvbSBcImNvbXBvbmVudHMvRGVwb3NpdFdpdGhkcmF3L29wZW5sZWRnZXIvV2l0aGRyYXdGaWF0T3BlbkxlZGdlclwiO1xuXG5jbGFzcyBTaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHNlbmRlcjogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b0FkZHJlc3M6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QocHJvcHMud2FsbGV0VHlwZSksXG4gICAgICAgICAgICB3aXRoZHJhd1ZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgYW1vdW50RXJyb3I6IG51bGwsXG4gICAgICAgICAgICBpbnB1dEFtb3VudDogMCxcbiAgICAgICAgICAgIHJlY2VpdmVMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxpbWl0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGFwaUVycm9yOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyh0aGlzLnN0YXRlLnRvQWRkcmVzcywgcHJvcHMpO1xuXG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IEJsb2NrVHJhZGVzRGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIFpmQXBpLnB1Ymxpc2godGhpcy5wcm9wcy5tb2RhbElkLCBcImNsb3NlXCIpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdEFkZHJlc3MoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdExpbWl0KCk7XG4gICAgICAgIHRoaXMuX2VzdGltYXRlT3V0cHV0KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBucC5pbnB1dENvaW5UeXBlICE9PSB0aGlzLnByb3BzLmlucHV0Q29pblR5cGUgfHxcbiAgICAgICAgICAgIG5wLm91dHB1dENvaW5UeXBlICE9PSB0aGlzLnByb3BzLm91dHB1dENvaW5UeXBlXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdExpbWl0KG5wKTtcbiAgICAgICAgICAgIHRoaXMuX2VzdGltYXRlT3V0cHV0KG5wKTtcbiAgICAgICAgICAgIHRoaXMuX2dldERlcG9zaXRBZGRyZXNzKG5wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5wLmlucHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMuaW5wdXRDb2luVHlwZSB8fFxuICAgICAgICAgICAgbnAub3V0cHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMub3V0cHV0Q29pblR5cGUgfHxcbiAgICAgICAgICAgIG5wLnNlbmRlciAhPT0gdGhpcy5wcm9wcy5zZW5kZXIgfHxcbiAgICAgICAgICAgIG5wLmFzc2V0ICE9PSB0aGlzLnByb3BzLmFzc2V0IHx8XG4gICAgICAgICAgICBucC5pc0F2YWlsYWJsZSAhPT0gdGhpcy5wcm9wcy5pc0F2YWlsYWJsZSB8fFxuICAgICAgICAgICAgbnAuaXNEb3duICE9PSB0aGlzLnByb3BzLmlzRG93biB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5zLCB0aGlzLnN0YXRlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9nZXREZXBvc2l0TGltaXQocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpbWl0TG9hZGluZzogdHJ1ZX0pO1xuICAgICAgICBnZXREZXBvc2l0TGltaXQocHJvcHMuaW5wdXRDb2luVHlwZSwgcHJvcHMub3V0cHV0Q29pblR5cGUpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkZXBvc2l0TGltaXQ6IHJlcy5kZXBvc2l0TGltaXQsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0TG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlcG9zaXQgbGltaXQgZXJyb3I6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRlcG9zaXRMaW1pdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbGltaXRMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uQW1vdW50Q2hhbmdlKHZhbHVlLCBlKSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cF9udW1lcmFsID0gbmV3IFJlZ0V4cCgvW1s6ZGlnaXQ6XV0vKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgLy8gRW5zdXJlIGlucHV0IGlzIHZhbGlkXG4gICAgICAgIGlmICghcmVnZXhwX251bWVyYWwudGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICB0YXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTkuXS9nLCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhdGNoIGluaXRpYWwgZGVjaW1hbCBpbnB1dFxuICAgICAgICBpZiAodGFyZ2V0LnZhbHVlLmNoYXJBdCgwKSA9PSBcIi5cIikge1xuICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCIwLlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2F0Y2ggZG91YmxlIGRlY2ltYWwgYW5kIHJlbW92ZSBpZiBpbnZhbGlkXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZS5jaGFyQXQodGFyZ2V0LnZhbHVlLmxlbmd0aCkgIT0gdGFyZ2V0LnZhbHVlLnNlYXJjaChcIi5cIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0YXJnZXQudmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gdXRpbHMubGltaXRCeVByZWNpc2lvbih0YXJnZXQudmFsdWUsIDgpO1xuXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHtpbnB1dEFtb3VudDogdGFyZ2V0LnZhbHVlfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXN0aW1hdGVPdXRwdXQuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJvdXRwdXRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB7b3V0cHV0QW1vdW50OiB0YXJnZXQudmFsdWV9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lc3RpbWF0ZUlucHV0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2VzdGltYXRlT3V0cHV0KHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlQW1vdW50OiAwLCBzZW5kQW1vdW50OiB0aGlzLnN0YXRlLmlucHV0QW1vdW50fSk7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbnB1dEFtb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZUxvYWRpbmc6IHRydWV9KTtcbiAgICAgICAgZXN0aW1hdGVPdXRwdXQoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlucHV0QW1vdW50LFxuICAgICAgICAgICAgcHJvcHMuaW5wdXRDb2luVHlwZSxcbiAgICAgICAgICAgIHByb3BzLm91dHB1dENvaW5UeXBlXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0QW1vdW50OiByZXMuaW5wdXRBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQ6IHJlcy5vdXRwdXRBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZSBhbW91bnQgZXJyOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVMb2FkaW5nOiBmYWxzZSwgYXBpRXJyb3I6IHRydWV9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9lc3RpbWF0ZUlucHV0KHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlQW1vdW50OiB0aGlzLnN0YXRlLm91dHB1dEFtb3VudCwgc2VuZEFtb3VudDogMH0pO1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3V0cHV0QW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlTG9hZGluZzogdHJ1ZX0pO1xuICAgICAgICBlc3RpbWF0ZUlucHV0KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXRBbW91bnQsXG4gICAgICAgICAgICBwcm9wcy5pbnB1dENvaW5UeXBlLFxuICAgICAgICAgICAgcHJvcHMub3V0cHV0Q29pblR5cGVcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRBbW91bnQ6IHJlcy5pbnB1dEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgc2VuZEFtb3VudDogdXRpbHMubGltaXRCeVByZWNpc2lvbihyZXMuaW5wdXRBbW91bnQsIDgpLFxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbmQgYW1vdW50IGVycjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlTG9hZGluZzogZmFsc2UsIGFwaUVycm9yOiB0cnVlfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0RGVwb3NpdEFkZHJlc3MocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGlmICghcHJvcHMuaW5wdXRDb2luVHlwZSkgcmV0dXJuO1xuICAgICAgICBsZXQgcmVjZWl2ZV9hZGRyZXNzO1xuXG4gICAgICAgIC8qIEFsd2F5cyBnZW5lcmF0ZSBuZXcgYWRkcmVzcy9tZW1vIGZvciBpbmNyZWFzZWQgc2VjdXJpdHkgKi9cbiAgICAgICAgLypsZXQgYWNjb3VudF9uYW1lID0gcHJvcHMuc2VuZGVyLmdldChcIm5hbWVcIik7XG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5nZXRDYWNoZWRJbnB1dEFkZHJlc3MoXG4gICAgICAgICAgICBcImJsb2NrdHJhZGVzXCIsXG4gICAgICAgICAgICBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICBwcm9wcy5pbnB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBwcm9wcy5vdXRwdXRDb2luVHlwZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7Ki9cbiAgICAgICAgaWYgKCFyZWNlaXZlX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVfYWRkcmVzczogbnVsbH0pO1xuICAgICAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QocHJvcHMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0RGVwb3NpdE9iamVjdChwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0Q29pblR5cGU6IHByb3BzLmlucHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIG91dHB1dENvaW5UeXBlOiBwcm9wcy5vdXRwdXRDb2luVHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgb3V0cHV0QWRkcmVzczogcHJvcHMuc2VuZGVyLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICB1cmw6IGJsb2NrVHJhZGVzQVBJcy5CQVNFLFxuICAgICAgICAgICAgc3RhdGVDYWxsYmFjazogcmVjZWl2ZV9hZGRyZXNzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZERlcG9zaXRBZGRyZXNzKFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5pbnB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm91dHB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbmRlci5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlX2FkZHJlc3NcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFkZERlcG9zaXRBZGRyZXNzKFxuICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgIG91dHB1dF9jb2luX3R5cGUsXG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIHJlY2VpdmVfYWRkcmVzc1xuICAgICkge1xuICAgICAgICB0aGlzLmRlcG9zaXRfYWRkcmVzc19jYWNoZS5jYWNoZUlucHV0QWRkcmVzcyhcbiAgICAgICAgICAgIFwiYmxvY2t0cmFkZXNcIixcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBpbnB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICBvdXRwdXRfY29pbl90eXBlLFxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtb1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIFJlYWN0VG9vbHRpcC5yZWJ1aWxkKCk7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlQWRkcmVzcyhhZGRyZXNzLCBwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgdmFsaWRhdGVBZGRyZXNzKHt3YWxsZXRUeXBlOiBwcm9wcy53YWxsZXRUeXBlLCBuZXdBZGRyZXNzOiBhZGRyZXNzfSlcbiAgICAgICAgICAgIC50aGVuKGlzVmFsaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvQWRkcmVzcyA9PT0gYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRBZGRyZXNzOiBpc1ZhbGlkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiB2YWxpZGF0aW5nIGFkZHJlc3M6XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb3BlblJlZ2lzdHJhclNpdGUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBuZXdXbmQgPSB3aW5kb3cub3BlbihTZXR0aW5nc1N0b3JlLnNpdGVfcmVnaXN0ciwgXCJfYmxhbmtcIik7XG4gICAgICAgIG5ld1duZC5vcGVuZXIgPSBudWxsO1xuICAgIH1cblxuICAgIF9vbkRyb3BEb3duU2VsZWN0KGUpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtwcmVmZXJyZWRCcmlkZ2U6IGV9KTtcbiAgICB9XG5cbiAgICBvbkJsb2NrVHJhZGVzQ29udGFjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPcGVuIE5ldyBUYWJcIik7XG4gICAgICAgIGxldCB3aW4gPSB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LmJsb2NrdHJhZGVzLnVzL2NvbnRhY3RcIiwgXCJfYmxhbmtcIik7XG4gICAgICAgIHdpbi5mb2N1cygpO1xuICAgIH1cblxuICAgIF9yZW5kZXJEZXBvc2l0KCkge1xuICAgICAgICBjb25zdCB7bmFtZTogYXNzZXROYW1lLCBwcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUodGhpcy5wcm9wcy5hc3NldCk7XG4gICAgICAgIGNvbnN0IHtyZWNlaXZlX2FkZHJlc3MsIGFwaUVycm9yfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGhhc01lbW8gPVxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzICYmXG4gICAgICAgICAgICBcIm1lbW9cIiBpbiByZWNlaXZlX2FkZHJlc3MgJiZcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vO1xuICAgICAgICBjb25zdCBhZGRyZXNzVmFsdWUgPSAocmVjZWl2ZV9hZGRyZXNzICYmIHJlY2VpdmVfYWRkcmVzcy5hZGRyZXNzKSB8fCBcIlwiO1xuICAgICAgICBjb25zdCBRUiA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUVJcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIDxRUkNvZGUgc2l6ZT17MTQwfSB2YWx1ZT17YWRkcmVzc1ZhbHVlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGJyaWRnZUFzc2V0cyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuYnJpZGdlcy50b0pTKCkpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IHRoaXMucHJvcHMuaW5wdXRDb2luVHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCByZWNlaXZlTmFtZSA9IChwcmVmaXggPyBwcmVmaXggOiBcIlwiKSArIGFzc2V0TmFtZTtcblxuICAgICAgICBsZXQgcHJpY2UgPSAodGhpcy5zdGF0ZS5yZWNlaXZlQW1vdW50IC8gdGhpcy5zdGF0ZS5pbnB1dEFtb3VudCkudG9GaXhlZChcbiAgICAgICAgICAgIDRcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHByaWNlU3VmZml4ID0gcmVjZWl2ZU5hbWUgKyBcIi9cIiArIGlucHV0TmFtZTtcblxuICAgICAgICBjb25zdCBhYm92ZUxpbWl0ID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRBbW91bnQgPiBwYXJzZUZsb2F0KHRoaXMuc3RhdGUuZGVwb3NpdExpbWl0KSB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZW5kQW1vdW50ID4gcGFyc2VGbG9hdCh0aGlzLnN0YXRlLmRlcG9zaXRMaW1pdCk7XG4gICAgICAgIGNvbnN0IGFib3ZlTGltaXRTdHlsZSA9IGFib3ZlTGltaXRcbiAgICAgICAgICAgID8ge2JvcmRlcjogXCIxcHggc29saWQgI2E5NDQ0MlwifVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5idXkuYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JlY2VpdmVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJtb2RhbC5idXkuYnJpZGdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5icmlkZ2VfVFJBREVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25CbG9ja1RyYWRlc0NvbnRhY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnF1ZXN0aW9uX2NpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XCJCTE9DS1RSQURFU1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogQ2hhbmdlIHRoaXMgd2hlbiB3ZSBnYWluIG1vcmUgYnJkaWdlcyAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9eyFhcGlFcnJvciA/IHtkaXNwbGF5OiBcIlwifSA6IHtkaXNwbGF5OiBcIm5vbmVcIn19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3cgZG91YmxlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNlwiIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuc2VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fib3ZlTGltaXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1tc2cgaW5saW5lLWJsb2NrIHRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLm92ZXJfbGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5vdmVyX2xpbWl0XCIgLz4mbmJzcDs8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnF1ZXN0aW9uX2NpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthYm92ZUxpbWl0U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbmRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5fb25BbW91bnRDaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcz17YnJpZGdlQXNzZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e2JyaWRnZUFzc2V0cy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWFwLCBhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEpIG1hcFthXSA9IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVFbnRyeT17YnJpZGdlQXNzZXRzWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZWZlcnJlZEJyaWRnZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJpZGdlQXNzZXRzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uRHJvcERvd25TZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyQ2FzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTZcIiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZ2F0ZXdheS5kZXBvc2l0X2xpbWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmRlcG9zaXRMaW1pdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlcG9zaXRMaW1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDQpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtcmlnaHQtc3ltYm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcm93IGRvdWJsZS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTZcIiBzdHlsZT17e3BhZGRpbmdSaWdodDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnJlY2VpdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWJvdmVMaW1pdFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZWNlaXZlQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuX29uQW1vdW50Q2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0cHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtcmlnaHQtc3ltYm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNlwiIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7e3RoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlY2VpdmVMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJmb290ZXIubG9hZGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWJvdmVMaW1pdCA/IDAgOiBwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJpZ2h0LXN5bWJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZVN1ZmZpeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgeyFhZGRyZXNzVmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cInRocmVlLWJvdW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNNZW1vID8gbnVsbCA6IFFSfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2FkZHJlc3NWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5SWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwLjNyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucHVyY2hhc2Vfbm90aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEFzc2V0PXtpbnB1dE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0QXNzZXQ9e3JlY2VpdmVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faGlnaGxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkZHJlc3NWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzTWVtbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17cmVjZWl2ZV9hZGRyZXNzLm1lbW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvcHlJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zYWZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnB1cmNoYXNlX25vdGljZV9tZW1vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjAuM3JlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19oaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVfYWRkcmVzcy5tZW1vfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeSBob2xsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmNsb3NlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2FwaUVycm9yID8ge2Rpc3BsYXk6IFwiXCJ9IDoge2Rpc3BsYXk6IFwibm9uZVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvdyBkb3VibGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWwgY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS51bmF2YWlsYWJsZV9UUkFERVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeSBob2xsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbG9zZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmNsb3NlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyQ3VycmVudEJhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWV9ID0gdXRpbHMucmVwbGFjZU5hbWUodGhpcy5wcm9wcy5hc3NldCk7XG4gICAgICAgIGNvbnN0IGlzRGVwb3NpdCA9IHRoaXMucHJvcHMuYWN0aW9uID09PSBcImRlcG9zaXRcIjtcblxuICAgICAgICBsZXQgY3VycmVudEJhbGFuY2UgPSB0aGlzLnByb3BzLmJhbGFuY2VzLmZpbmQoYiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYiAmJiBiLmdldChcImFzc2V0X3R5cGVcIikgPT09IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhc3NldCA9IGN1cnJlbnRCYWxhbmNlXG4gICAgICAgICAgICA/IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICBhc3NldF9pZDogY3VycmVudEJhbGFuY2UuZ2V0KFwiYXNzZXRfdHlwZVwiKSxcbiAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICBhbW91bnQ6IGN1cnJlbnRCYWxhbmNlLmdldChcImJhbGFuY2VcIilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBjb25zdCBhcHBseUJhbGFuY2VCdXR0b24gPSBpc0RlcG9zaXQgPyAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLCBib3JkZXJMZWZ0OiBcIm5vbmVcIn19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Fzc2V0TmFtZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBkYXRhLXBsYWNlPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLndpdGhkcmF3X2Z1bGxcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiwgYm9yZGVyTGVmdDogXCJub25lXCJ9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3VwZGF0ZUFtb3VudC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAhY3VycmVudEJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUludChjdXJyZW50QmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpLCAxMClcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjbGlwcHlcIiB0aXRsZT1cImljb25zLmNsaXBweS53aXRoZHJhd19mdWxsXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiU2ltcGxlVHJhZGVfX3dpdGhkcmF3LXJvd1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIxcmVtXCJ9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2ZvbnRTaXplOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2F0ZXdheS5iYWxhbmNlX2Fzc2V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSl9OlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IWFzc2V0ID8gMCA6IGFzc2V0LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthcHBseUJhbGFuY2VCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwicFwiIGNvbnRlbnQ9XCJtb2RhbC5idXkudGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNEb3duID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWwgY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS51bmF2YWlsYWJsZV9UUkFERVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogIXRoaXMucHJvcHMuaXNBdmFpbGFibGUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCBjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnVuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlckRlcG9zaXQoKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5TaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2UgPSBCaW5kVG9DaGFpblN0YXRlKFxuICAgIFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZVxuKTtcblxuY2xhc3MgU3RvcmVXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cHJlZmVycmVkQnJpZGdlLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGN1cnJlbnRCcmlkZ2UgPSB0aGlzLnByb3BzLmJyaWRnZXMuZ2V0KHRoaXMucHJvcHMucHJlZmVycmVkQnJpZGdlKTtcbiAgICAgICAgaWYgKCFjdXJyZW50QnJpZGdlKSB7XG4gICAgICAgICAgICBjdXJyZW50QnJpZGdlID0gdGhpcy5wcm9wcy5icmlkZ2VzLmZpcnN0KCk7XG4gICAgICAgICAgICBwcmVmZXJyZWRCcmlkZ2UgPSBjdXJyZW50QnJpZGdlLmlucHV0Q29pblR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2VcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgICAgIHByZWZlcnJlZEJyaWRnZT17cHJlZmVycmVkQnJpZGdlfVxuICAgICAgICAgICAgICAgIHsuLi5jdXJyZW50QnJpZGdlLnRvSlMoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TdG9yZVdyYXBwZXIgPSBjb25uZWN0KFN0b3JlV3JhcHBlciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmVmZXJyZWRCcmlkZ2U6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgIFwicHJlZmVycmVkQnJpZGdlXCIsXG4gICAgICAgICAgICAgICAgXCJidGNcIlxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVEZXBvc2l0QmxvY2t0cmFkZXNCcmlkZ2VNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0sICgpID0+IHtcbiAgICAgICAgICAgIFpmQXBpLnB1Ymxpc2godGhpcy5wcm9wcy5tb2RhbElkLCBcIm9wZW5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYnJpZGdlcykgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuICF0aGlzLnN0YXRlLm9wZW4gPyBudWxsIDogKFxuICAgICAgICAgICAgPEJhc2VNb2RhbFxuICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLm1vZGFsSWR9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNsb3NlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgbm9DbG9zZUJ0blxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPFN0b3JlV3JhcHBlciB7Li4udGhpcy5wcm9wc30gb3Blbj17dGhpcy5zdGF0ZS5vcGVufSAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9CYXNlTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtpc0Zpbml0ZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gXCIuL0Jhc2VNb2RhbFwiO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSBcInJlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdHJpZ2dlclwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IFdhbGxldEFwaSBmcm9tIFwiYXBpL1dhbGxldEFwaVwiO1xuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcbmltcG9ydCBGb3JtYXR0ZWRQcmljZSBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRQcmljZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCB7Q2hlY2tib3h9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuLyoqXG4gKiAgR2l2ZW4gYW4gYWNjb3VudCBhbmQgYW4gYXNzZXQgaWQsIHJlbmRlciBhIG1vZGFsIGFsbG93aW5nIG1vZGlmaWNhdGlvbiBvZiBhIG1hcmdpbiBwb3NpdGlvbiBmb3IgdGhhdCBhc3NldFxuICpcbiAqICBFeHBlY3RlZCBQcm9wZXJ0aWVzOlxuICogICAgIHF1b3RlX2Fzc2V0OiAgYXNzZXQgaWQsIG11c3QgYmUgYSBiaXRhc3NldFxuICogICAgIGFjY291bnQ6IGZ1bGxfYWNjb3VudCBvYmplY3QgZm9yIHRoZSBhY2NvdW50IHRvIHVzZVxuICpcbiAqL1xuXG5jbGFzcyBCb3Jyb3dNb2RhbENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHF1b3RlX2Fzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgYml0YXNzZXRfYmFsYW5jZTogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdCxcbiAgICAgICAgYmFja2luZ19hc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGJhY2tpbmdfYmFsYW5jZTogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdCxcbiAgICAgICAgY2FsbF9vcmRlcnM6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdCxcbiAgICAgICAgaGFzQ2FsbE9yZGVyczogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2luaXRpYWxTdGF0ZShwcm9wcyk7XG4gICAgfVxuXG4gICAgX2luaXRpYWxTdGF0ZShwcm9wcykge1xuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gcHJvcHMgPyB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24ocHJvcHMpIDoge307XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsKSB7XG4gICAgICAgICAgICBsZXQgZGVidCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQoXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmRlYnQsXG4gICAgICAgICAgICAgICAgcHJvcHMucXVvdGVfYXNzZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgY29sbGF0ZXJhbCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQoXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwsXG4gICAgICAgICAgICAgICAgcHJvcHMuYmFja2luZ19hc3NldFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID0gIWlzTmFOKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi50YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgID8gY3VycmVudFBvc2l0aW9uLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMFxuICAgICAgICAgICAgICAgIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG9ydF9hbW91bnQ6IGRlYnQgPyBkZWJ0LnRvU3RyaW5nKCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IGNvbGxhdGVyYWwgPyBjb2xsYXRlcmFsLnRvU3RyaW5nKCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW86IHRoaXMuX2dldENvbGxhdGVyYWxSYXRpbyhkZWJ0LCBjb2xsYXRlcmFsKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbzogdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8sXG4gICAgICAgICAgICAgICAgZXJyb3JzOiB0aGlzLl9nZXRJbml0aWFsRXJyb3JzKCksXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXNlVGFyZ2V0Q29sbGF0ZXJhbDogdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8gPiAwID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnQ6IGRlYnQsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IGNvbGxhdGVyYWwsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvOiB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNob3J0X2Ftb3VudDogMCxcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiAwLFxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW86IHRoaXMuX2dldEluaXRpYWxDb2xsYXRlcmFsUmF0aW8ocHJvcHMpLFxuICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvOiAwLFxuICAgICAgICAgICAgICAgIGVycm9yczogdGhpcy5fZ2V0SW5pdGlhbEVycm9ycygpLFxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBSZWFjdFRvb2x0aXAucmVidWlsZCgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLl9pbml0aWFsU3RhdGUodGhpcy5wcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSB8fFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMucXVvdGVfYXNzZXQsIHRoaXMucHJvcHMucXVvdGVfYXNzZXQpIHx8XG4gICAgICAgICAgICAhbmV4dFByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwic3ltYm9sXCIpID09PVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ19hc3NldC5nZXQoXCJzeW1ib2xcIikgfHxcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmFjY291bnQsIHRoaXMucHJvcHMuYWNjb3VudCkgfHxcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmNhbGxfb3JkZXJzLCB0aGlzLnByb3BzLmNhbGxfb3JkZXJzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGNvbnN0IHtzaG9ydF9hbW91bnQsIGNvbGxhdGVyYWwsIGNvbGxhdGVyYWxfcmF0aW99ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuaGFzQ2FsbE9yZGVycyAhPT0gdGhpcy5wcm9wcy5oYXNDYWxsT3JkZXJzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGVfYXNzZXQuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMucXVvdGVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLl9pbml0aWFsU3RhdGUobmV4dFByb3BzKTtcblxuICAgICAgICAgICAgbGV0IHJldmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzaG9ydF9hbW91bnQgfHwgY29sbGF0ZXJhbCB8fCBjb2xsYXRlcmFsX3JhdGlvKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2hvcnRfYW1vdW50ID0gc2hvcnRfYW1vdW50O1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmNvbGxhdGVyYWwgPSBjb2xsYXRlcmFsO1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmNvbGxhdGVyYWxfcmF0aW8gPSBjb2xsYXRlcmFsX3JhdGlvO1xuICAgICAgICAgICAgICAgIHJldmFsaWRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblxuICAgICAgICAgICAgaWYgKHJldmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbEVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfYmFsYW5jZTogbnVsbCxcbiAgICAgICAgICAgIHJhdGlvX3Rvb19oaWdoOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldE1haW50ZW5hbmNlUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcbiAgICAgICAgICAgICAgICBcIm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIlxuICAgICAgICAgICAgXSkgLyAxMDAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uZmlybUNsaWNrZWQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFpmQXBpLnB1Ymxpc2godGhpcy5wcm9wcy5tb2RhbElkLCBcImNsb3NlXCIpO1xuICAgIH1cblxuICAgIHRvZ2dsZUxvY2tlZENSKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2NrZWRDUjogIXRoaXMuc3RhdGUubG9ja2VkQ1IgPyB0cnVlIDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICBfb25Cb3Jyb3dDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgZmVlZF9wcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xuICAgICAgICBsZXQgYW1vdW50ID0gZS5hbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgc2hvcnRfYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICBjb2xsYXRlcmFsOiAoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXRlcmFsX3JhdGlvICpcbiAgICAgICAgICAgICAgICAoYW1vdW50IC8gZmVlZF9wcmljZSlcbiAgICAgICAgICAgICkudG9GaXhlZCh0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKSxcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW86IHRoaXMuc3RhdGUuY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgX29uQ29sbGF0ZXJhbENoYW5nZShlKSB7XG4gICAgICAgIGxldCBhbW91bnQgPSBlLmFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpO1xuXG4gICAgICAgIGxldCBmZWVkX3ByaWNlID0gdGhpcy5fZ2V0RmVlZFByaWNlKCk7XG4gICAgICAgIGNvbnN0IGNvbGxhdGVyYWxSYXRpbyA9IGFtb3VudCAvICh0aGlzLnN0YXRlLnNob3J0X2Ftb3VudCAvIGZlZWRfcHJpY2UpO1xuXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldCh0aGlzLnByb3BzKVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBzaG9ydF9hbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IGFtb3VudCxcbiAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW86IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBzaG9ydF9hbW91bnQ6IHRoaXMuc3RhdGUuc2hvcnRfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbDogYW1vdW50LFxuICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogaXNGaW5pdGUoY29sbGF0ZXJhbFJhdGlvKVxuICAgICAgICAgICAgICAgICAgICAgID8gY29sbGF0ZXJhbFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9nZXRJbml0aWFsQ29sbGF0ZXJhbFJhdGlvKHRoaXMucHJvcHMpXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGRzKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5fc2V0VXBkYXRlZFBvc2l0aW9uKG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBfb25UYXJnZXRSYXRpb0NoYW5nZShlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICAvLyBFbnN1cmUgaW5wdXQgaXMgdmFsaWRcbiAgICAgICAgY29uc3QgcmVnZXhwX251bWVyYWwgPSBuZXcgUmVnRXhwKC9bWzpkaWdpdDpdXS8pO1xuICAgICAgICBpZiAoIXJlZ2V4cF9udW1lcmFsLnRlc3QodGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1teMC05Ll0vZywgXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmF0aW8gPSB0YXJnZXQudmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbzogcmF0aW9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uUmF0aW9DaGFuZ2UoZSkge1xuICAgICAgICBsZXQgZmVlZF9wcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgLy8gRW5zdXJlIGlucHV0IGlzIHZhbGlkXG4gICAgICAgIGNvbnN0IHJlZ2V4cF9udW1lcmFsID0gbmV3IFJlZ0V4cCgvW1s6ZGlnaXQ6XV0vKTtcbiAgICAgICAgaWYgKCFyZWdleHBfbnVtZXJhbC50ZXN0KHRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2csIFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhdGlvID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgc2hvcnRfYW1vdW50O1xuICAgICAgICBsZXQgY29sbGF0ZXJhbDtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2NrZWRDUikge1xuICAgICAgICAgICAgc2hvcnRfYW1vdW50ID0gKFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKiBmZWVkX3ByaWNlKSAvXG4gICAgICAgICAgICAgICAgcmF0aW9cbiAgICAgICAgICAgICkudG9GaXhlZCh0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKTtcbiAgICAgICAgICAgIGNvbGxhdGVyYWwgPSB0aGlzLnN0YXRlLmNvbGxhdGVyYWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG9ydF9hbW91bnQgPSB0aGlzLnN0YXRlLnNob3J0X2Ftb3VudDtcbiAgICAgICAgICAgIGNvbGxhdGVyYWwgPSAoXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2hvcnRfYW1vdW50IC8gZmVlZF9wcmljZSkgKlxuICAgICAgICAgICAgICAgIHJhdGlvXG4gICAgICAgICAgICApLnRvRml4ZWQodGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0LmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICBzaG9ydF9hbW91bnQ6IHNob3J0X2Ftb3VudCxcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IGNvbGxhdGVyYWwsXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiByYXRpb1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgX21heGltaXplQ29sbGF0ZXJhbCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMucHJvcHNcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMucHJvcHMpXG4gICAgICAgICAgICA6IHt9O1xuICAgICAgICBsZXQgaW5pdGlhbENvbGxhdGVyYWwgPSAwO1xuXG4gICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCkge1xuICAgICAgICAgICAgaW5pdGlhbENvbGxhdGVyYWwgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ19hc3NldFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBnbyBvdmVyIHRoZSBtYXhpbXVtIGNvbGxhdGVyYWwgcmF0aW9cbiAgICAgICAgbGV0IG1heGltaXplZENvbGxhdGVyYWwgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nX2JhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSAvXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24odGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0KSArXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxDb2xsYXRlcmFsIC1cbiAgICAgICAgICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuc2hvcnRfYW1vdW50IC8gdGhpcy5fZ2V0RmVlZFByaWNlKCkpICogMTAwMC4wXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fb25Db2xsYXRlcmFsQ2hhbmdlKFxuICAgICAgICAgICAgbmV3IE9iamVjdCh7YW1vdW50OiBtYXhpbWl6ZWRDb2xsYXRlcmFsLnRvU3RyaW5nKCl9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9tYXhpbWl6ZURlYnQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnByb3BzXG4gICAgICAgICAgICA/IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbih0aGlzLnByb3BzKVxuICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgbGV0IGluaXRpYWxDb2xsYXRlcmFsID0gMDtcblxuICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwpIHtcbiAgICAgICAgICAgIGluaXRpYWxDb2xsYXRlcmFsID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF4aW11bUNvbGxhdGVyYWwgPVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nX2JhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSAvXG4gICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbih0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQpICtcbiAgICAgICAgICAgIGluaXRpYWxDb2xsYXRlcmFsIC1cbiAgICAgICAgICAgIDEwO1xuICAgICAgICBjb25zdCBzaG9ydF9hbW91bnQgPVxuICAgICAgICAgICAgKG1heGltdW1Db2xsYXRlcmFsIC8gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsX3JhdGlvKSAqXG4gICAgICAgICAgICB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcblxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3J0X2Ftb3VudDogc2hvcnRfYW1vdW50LFxuICAgICAgICAgICAgY29sbGF0ZXJhbDogbWF4aW11bUNvbGxhdGVyYWwsXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xuICAgIH1cblxuICAgIF9wYXlEZWJ0KCkge1xuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5wcm9wc1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24odGhpcy5wcm9wcylcbiAgICAgICAgICAgIDoge2RlYnQ6IDB9O1xuXG4gICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24uZGVidCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG9ydF9hbW91bnQgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmRlYnQgLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJpdGFzc2V0X2JhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZV9hc3NldFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX29uQm9ycm93Q2hhbmdlKHtcbiAgICAgICAgICAgIGFtb3VudDogc2hvcnRfYW1vdW50LnRvU3RyaW5nKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uOlxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuc2hvcnRfYW1vdW50KSAvXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChuZXdTdGF0ZS5jb2xsYXRlcmFsKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpIHtcbiAgICAgICAgbGV0IGVycm9ycyA9IHRoaXMuX2dldEluaXRpYWxFcnJvcnMoKTtcbiAgICAgICAgbGV0IHtvcmlnaW5hbF9wb3NpdGlvbn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgYmFja2luZ19iYWxhbmNlID0gIXRoaXMucHJvcHMuYmFja2luZ19iYWxhbmNlXG4gICAgICAgICAgICA/IHtiYWxhbmNlOiAwfVxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLmJhY2tpbmdfYmFsYW5jZS50b0pTKCk7XG5cbiAgICAgICAgbGV0IG1haW50ZW5hbmNlUmF0aW8gPSB0aGlzLl9nZXRNYWludGVuYW5jZVJhdGlvKCk7XG4gICAgICAgIGxldCBvcmlnaW5hbENSID0gdGhpcy5fZ2V0Q29sbGF0ZXJhbFJhdGlvKFxuICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uZGVidCxcbiAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmNvbGxhdGVyYWxcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGlzT3JpZ2luYWxCZWxvd01DUiA9XG4gICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbi5jb2xsYXRlcmFsID4gMCAmJiBvcmlnaW5hbENSIDwgbWFpbnRlbmFuY2VSYXRpbztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLmNvbGxhdGVyYWwpIC0gb3JpZ2luYWxfcG9zaXRpb24uY29sbGF0ZXJhbCA+XG4gICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgICAgIGJhY2tpbmdfYmFsYW5jZS5iYWxhbmNlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ19hc3NldC50b0pTKClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMuY29sbGF0ZXJhbF9iYWxhbmNlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5jb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgc3FwID0gdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcImN1cnJlbnRfZmVlZFwiLCBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiXSkgLyAxMDAwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzT3JpZ2luYWxCZWxvd01DUiAmJlxuICAgICAgICAgICAgbmV3U3RhdGUuc2hvcnRfYW1vdW50ID4gb3JpZ2luYWxfcG9zaXRpb24uZGVidFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGVycm9ycy5iZWxvd19tYWludGVuYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuaW5jcmVhc2VkX2RlYnRfb25fbWFyZ2luX2NhbGxcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGlzT3JpZ2luYWxCZWxvd01DUiAmJlxuICAgICAgICAgICAgcGFyc2VGbG9hdChuZXdTdGF0ZS5jb2xsYXRlcmFsX3JhdGlvKSA8PSBwYXJzZUZsb2F0KG9yaWdpbmFsQ1IpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZXJyb3JzLmJlbG93X21haW50ZW5hbmNlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5iZWxvd19yYXRpb19tY3JfdXBkYXRlXCIsXG4gICAgICAgICAgICAgICAge29jcjogb3JpZ2luYWxDUi50b0ZpeGVkKDQpfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICFpc09yaWdpbmFsQmVsb3dNQ1IgJiZcbiAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbF9yYXRpbykgPFxuICAgICAgICAgICAgICAgICh0aGlzLl9pc1ByZWRpY3Rpb25NYXJrZXQodGhpcy5wcm9wcykgPyAxIDogbWFpbnRlbmFuY2VSYXRpbylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2UgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgXCJib3Jyb3cuZXJyb3JzLmJlbG93XCIsXG4gICAgICAgICAgICAgICAge21yOiBtYWludGVuYW5jZVJhdGlvfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbF9yYXRpbykgPFxuICAgICAgICAgICAgKHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldCh0aGlzLnByb3BzKSA/IDEgOiBtYWludGVuYW5jZVJhdGlvICsgMC41KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGVycm9ycy5jbG9zZV9tYWludGVuYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuY2xvc2VcIixcbiAgICAgICAgICAgICAgICB7bXI6IG1haW50ZW5hbmNlUmF0aW99XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSk7XG4gICAgfVxuXG4gICAgX29uU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBxdW90ZVByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICk7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24odGhpcy5wcm9wcyk7XG5cbiAgICAgICAgbGV0IGlzVENSID1cbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VUYXJnZXRDb2xsYXRlcmFsXG4gICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgOiBmYWxzZTtcblxuICAgICAgICBsZXQgZXh0ZW5zaW9uc1Byb3AgPSBmYWxzZTtcblxuICAgICAgICBpZiAoaXNUQ1IpIHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnNQcm9wID0ge1xuICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvOiBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0ciA9IFdhbGxldEFwaS5uZXdfdHJhbnNhY3Rpb24oKTtcbiAgICAgICAgaWYgKGV4dGVuc2lvbnNQcm9wKSB7XG4gICAgICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24oXCJjYWxsX29yZGVyX3VwZGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmRpbmdfYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIGRlbHRhX2NvbGxhdGVyYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbCAqIGJhY2tpbmdQcmVjaXNpb24gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYmFja2luZ19hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVsdGFfZGVidDoge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG9ydF9hbW91bnQgKiBxdW90ZVByZWNpc2lvbiAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmRlYnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogZXh0ZW5zaW9uc1Byb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHIuYWRkX3R5cGVfb3BlcmF0aW9uKFwiY2FsbF9vcmRlcl91cGRhdGVcIiwge1xuICAgICAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5kaW5nX2FjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBkZWx0YV9jb2xsYXRlcmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogcGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKiBiYWNraW5nUHJlY2lzaW9uIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlbHRhX2RlYnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvcnRfYW1vdW50ICogcXVvdGVQcmVjaXNpb24gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kZWJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMucXVvdGVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBXYWxsZXREYi5wcm9jZXNzX3RyYW5zYWN0aW9uKHRyLCBudWxsLCB0cnVlKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1bmxvY2sgZmFpbGVkOlwiLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBaZkFwaS5wdWJsaXNoKHRoaXMucHJvcHMubW9kYWxJZCwgXCJjbG9zZVwiKTtcbiAgICB9XG5cbiAgICBfZ2V0Q3VycmVudFBvc2l0aW9uKHByb3BzKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB7XG4gICAgICAgICAgICBjb2xsYXRlcmFsOiBudWxsLFxuICAgICAgICAgICAgZGVidDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5oYXNDYWxsT3JkZXJzICYmIHByb3BzLmNhbGxfb3JkZXJzKSB7XG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBwcm9wcy5jYWxsX29yZGVycy5maWx0ZXIoYSA9PiAhIWEpLmZpbmQoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgYS5nZXRJbihbXCJjYWxsX3ByaWNlXCIsIFwicXVvdGVcIiwgXCJhc3NldF9pZFwiXSkgPT09XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1b3RlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSAhIWN1cnJlbnRQb3NpdGlvblxuICAgICAgICAgICAgICAgID8gY3VycmVudFBvc2l0aW9uLnRvSlMoKVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZGVidDogbnVsbFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFBvc2l0aW9uO1xuICAgIH1cblxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAxIC9cbiAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVfYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2V0dGxlbWVudF9wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVfYXNzZXRcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbENvbGxhdGVyYWxSYXRpbyhwcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHByb3BzKSA/IDEgOiAwO1xuICAgIH1cblxuICAgIF9nZXRDb2xsYXRlcmFsUmF0aW8oZGVidCwgY29sbGF0ZXJhbCkge1xuICAgICAgICByZXR1cm4gY29sbGF0ZXJhbCAvIChkZWJ0IC8gdGhpcy5fZ2V0RmVlZFByaWNlKCkpO1xuICAgIH1cblxuICAgIF9pc1ByZWRpY3Rpb25NYXJrZXQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnF1b3RlX2Fzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0pO1xuICAgIH1cblxuICAgIF9zZXRVc2VUYXJnZXRDb2xsYXRlcmFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWw6ICF0aGlzLnN0YXRlLnVzZVRhcmdldENvbGxhdGVyYWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcXVvdGVfYXNzZXQsXG4gICAgICAgICAgICBiaXRhc3NldF9iYWxhbmNlLFxuICAgICAgICAgICAgYmFja2luZ19hc3NldCxcbiAgICAgICAgICAgIGJhY2tpbmdfYmFsYW5jZVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHNob3J0X2Ftb3VudCxcbiAgICAgICAgICAgIGNvbGxhdGVyYWwsXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvLFxuICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8sXG4gICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbixcbiAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWxcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBxdW90ZVByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWNvbGxhdGVyYWxfcmF0aW8gfHxcbiAgICAgICAgICAgIGlzTmFOKGNvbGxhdGVyYWxfcmF0aW8pIHx8XG4gICAgICAgICAgICAhKGNvbGxhdGVyYWxfcmF0aW8gPiAwLjAgJiYgY29sbGF0ZXJhbF9yYXRpbyA8IDEwMDAuMClcbiAgICAgICAgKVxuICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbyA9IDA7XG4gICAgICAgIGJpdGFzc2V0X2JhbGFuY2UgPSAhYml0YXNzZXRfYmFsYW5jZVxuICAgICAgICAgICAgPyB7YmFsYW5jZTogMCwgaWQ6IG51bGx9XG4gICAgICAgICAgICA6IGJpdGFzc2V0X2JhbGFuY2UudG9KUygpO1xuICAgICAgICBiYWNraW5nX2JhbGFuY2UgPSAhYmFja2luZ19iYWxhbmNlXG4gICAgICAgICAgICA/IHtiYWxhbmNlOiAwLCBpZDogbnVsbH1cbiAgICAgICAgICAgIDogYmFja2luZ19iYWxhbmNlLnRvSlMoKTtcblxuICAgICAgICBsZXQgY29sbGF0ZXJhbENsYXNzID0gY2xhc3NOYW1lcyhcImZvcm0tZ3JvdXBcIiwge1xuICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogZXJyb3JzLmNvbGxhdGVyYWxfYmFsYW5jZVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNvbGxhdGVyYWxSYXRpb0NsYXNzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgIFwiZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAge1wiaGFzLWVycm9yXCI6IGVycm9ycy5iZWxvd19tYWludGVuYW5jZX0sXG4gICAgICAgICAgICB7XCJoYXMtd2FybmluZ1wiOiBlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2V9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRHluYW1pY2FsbHkgdXBkYXRlIHVzZXIncyByZW1haW5pbmcgY29sbGF0ZXJhbFxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMucHJvcHMpO1xuICAgICAgICBsZXQgYmFja2luZ0JhbGFuY2UgPSBiYWNraW5nX2JhbGFuY2UuaWRcbiAgICAgICAgICAgID8gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFja2luZ19iYWxhbmNlLmlkKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBsZXQgYmFja2luZ0Ftb3VudCA9IGJhY2tpbmdCYWxhbmNlID8gYmFja2luZ0JhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSA6IDA7XG4gICAgICAgIGxldCBjb2xsYXRlcmFsQ2hhbmdlID0gcGFyc2VJbnQoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKiBiYWNraW5nUHJlY2lzaW9uIC1cbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcbiAgICAgICAgICAgIDEwXG4gICAgICAgICk7XG4gICAgICAgIGxldCByZW1haW5pbmdCYWxhbmNlID0gYmFja2luZ0Ftb3VudCAtIGNvbGxhdGVyYWxDaGFuZ2U7XG5cbiAgICAgICAgbGV0IGJpdEFzc2V0QmFsYW5jZVRleHQgPSAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge2JpdGFzc2V0X2JhbGFuY2UuaWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXtiaXRhc3NldF9iYWxhbmNlLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtxdW90ZV9hc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuX3BheURlYnQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5wYXlfbWF4X2RlYnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgICAge2NvbGxhdGVyYWxfcmF0aW8gIT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5fbWF4aW1pemVEZWJ0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnVzZV9tYXhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpc2FibGVkLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcnJvdy5tYXhpbWl6ZV9kZWJ0X3NldF9yYXRpb19zbGlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnVzZV9tYXhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhY2tpbmdCYWxhbmNlVGV4dCA9IChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIgLz46e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7YmFja2luZ19iYWxhbmNlLmlkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZW1haW5pbmdCYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYWNraW5nX2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFja2luZ19hc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuX21heGltaXplQ29sbGF0ZXJhbC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnVzZV9tYXhcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZmVlZF9wcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xuXG4gICAgICAgIGxldCBtYWludGVuYW5jZVJhdGlvID0gdGhpcy5fZ2V0TWFpbnRlbmFuY2VSYXRpbygpO1xuXG4gICAgICAgIGxldCBzcXVlZXplUmF0aW8gPVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIlxuICAgICAgICAgICAgXSkgLyAxMDAwO1xuXG4gICAgICAgIGxldCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLl9pc1ByZWRpY3Rpb25NYXJrZXQodGhpcy5wcm9wcyk7XG5cbiAgICAgICAgbGV0IGlzT3JpZ2luYWxCZWxvd01DUiA9XG4gICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbi5jb2xsYXRlcmFsID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5fZ2V0Q29sbGF0ZXJhbFJhdGlvKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmRlYnQsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uY29sbGF0ZXJhbFxuICAgICAgICAgICAgKSA8IG1haW50ZW5hbmNlUmF0aW87XG5cbiAgICAgICAgaWYgKCFpc1ByZWRpY3Rpb25NYXJrZXQgJiYgaXNOYU4oZmVlZF9wcmljZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIHRleHQtY2VudGVyIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYm9ycm93Lm5vX3ZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9zeW1ib2w9e3F1b3RlX2Fzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgYnV0dG9uLWdyb3VwIHRleHQtY2VudGVyIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJpZ2dlciBjbG9zZT17dGhpcy5wcm9wcy5tb2RhbElkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBidXR0b24gd2FybmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0uY2FuY2VsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgc21hbGwtMTAgc21hbGwtb2Zmc2V0LTEgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYm9ycm93LnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3N5bWJvbD17cXVvdGVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGlkZV9oZWxwID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVscENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudHMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzUHJlZGljdGlvbk1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJCb3Jyb3dNb2RhbFByZWRpY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJCb3Jyb3dNb2RhbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnQ9e3F1b3RlX2Fzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbD17YmFja2luZ19hc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcnJvd2VyPXt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI9e21haW50ZW5hbmNlUmF0aW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc09yaWdpbmFsQmVsb3dNQ1IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImJvcnJvdy5lcnJvcnMuYmVsb3dfaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzUHJlZGljdGlvbk1hcmtldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcnJvdy1wcmljZS1mZWVkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9ycm93LXByaWNlLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uZmVlZF9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtxdW90ZV9hc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0bGVtZW50X3ByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17cXVvdGVfYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGxlbWVudF9wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJib3Jyb3ctcHJpY2UtZmVlZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0b29sdGlwIGJvcnJvdy1wcmljZS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLm1hcmdpbl9wcmljZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNxdWVlemVcIiAvPjombmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtxdW90ZV9hc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcImN1cnJlbnRfZmVlZFwiLCBcInNldHRsZW1lbnRfcHJpY2VcIiwgXCJiYXNlXCIsIFwiYW1vdW50XCJdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtxdW90ZV9hc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcImN1cnJlbnRfZmVlZFwiLCBcInNldHRsZW1lbnRfcHJpY2VcIiwgXCJiYXNlXCIsIFwiYXNzZXRfaWRcIl0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17cXVvdGVfYXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJjdXJyZW50X2ZlZWRcIiwgXCJzZXR0bGVtZW50X3ByaWNlXCIsIFwicXVvdGVcIiwgXCJhc3NldF9pZFwiXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17c3F1ZWV6ZVJhdGlvICogcXVvdGVfYXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJjdXJyZW50X2ZlZWRcIiwgXCJzZXR0bGVtZW50X3ByaWNlXCIsIFwicXVvdGVcIiwgXCJhbW91bnRcIl0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3ctcHJpY2UtZmluYWwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImhhcy1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3JzLmNsb3NlX21haW50ZW5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaGFzLXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib3Jyb3ctcHJpY2UtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS55b3VyX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5uZXdQb3NpdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWludGVuYW5jZVJhdGlvICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvcnRfYW1vdW50ICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlUHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtiYWNraW5nX2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2luZ1ByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6IDIwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUxvY2tlZENSLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5sb2NrZWRDUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibG9ja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVubG9ja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxXzV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAtMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtzaG9ydF9hbW91bnQudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQm9ycm93Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtxdW90ZV9hc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbcXVvdGVfYXNzZXQuZ2V0KFwiaWRcIildfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JpdEFzc2V0QmFsYW5jZVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbGxhdGVyYWxDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAyMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVMb2NrZWRDUi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2NrZWRDUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibG9ja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVubG9ja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxXzV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAtMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5jb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjb2xsYXRlcmFsLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNvbGxhdGVyYWxDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2JhY2tpbmdfYXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2JhY2tpbmdfYXNzZXQuZ2V0KFwiaWRcIildfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhY2tpbmdCYWxhbmNlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY29sbGF0ZXJhbF9iYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jb2xsYXRlcmFsX2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzUHJlZGljdGlvbk1hcmtldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbGxhdGVyYWxSYXRpb0NsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMy41cmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJib3Jyb3cuY29sbF9yYXRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW8gPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vblJhdGlvQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLTEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCI4NSVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25SYXRpb0NoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sbGF0ZXJhbF9yYXRpb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5iZWxvd19tYWludGVuYW5jZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmNsb3NlX21haW50ZW5hbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjg1JVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5iZWxvd19tYWludGVuYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jbG9zZV9tYWludGVuYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tZ3JvdXBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjMuNXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1odG1sPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnF1ZXN0aW9uX2NpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlVGFyZ2V0Q29sbGF0ZXJhbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0VXNlVGFyZ2V0Q29sbGF0ZXJhbC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuZW5hYmxlX3RhcmdldF9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOYU4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vblRhcmdldFJhdGlvQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCI4NSVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25UYXJnZXRSYXRpb0NoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05hTihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIxZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0VXNlVGFyZ2V0Q29sbGF0ZXJhbC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuZW5hYmxlX3RhcmdldF9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXBhZGRpbmcgZ3JpZC1jb250ZW50IGJ1dHRvbi1ncm91cCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiYnV0dG9uXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LmFkanVzdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdGlhbFN0YXRlKHRoaXMucHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaG9sbG93IHByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnJlc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VHJpZ2dlciBjbG9zZT17dGhpcy5wcm9wcy5tb2RhbElkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj48VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0uY2FuY2VsXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyaWdnZXI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuQm9ycm93TW9kYWxDb250ZW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCb3Jyb3dNb2RhbENvbnRlbnQpO1xuXG4vKiBUaGlzIHdyYXBwZXIgY2xhc3MgYXBwZWFycyB0byBiZSBuZWNlc3NhcnkgYmVjYXVzZSB0aGUgZGVjb3JhdG9yIGVhdHMgdGhlIHNob3cgbWV0aG9kIGZyb20gcmVmcyAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNtYWxsU2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0sICgpID0+IHtcbiAgICAgICAgICAgIFpmQXBpLnB1Ymxpc2godGhpcy5wcm9wcy5tb2RhbElkLCBcIm9wZW5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNtYWxsU2NyZWVuOiB3aW5kb3cuaW5uZXJIZWlnaHQgPD0gODAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtxdW90ZV9hc3NldCwgYmFja2luZ19hc3NldCwgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgYWNjb3VudEJhbGFuY2UgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgbGV0IGNvcmVCYWxhbmNlLCBiaXRBc3NldEJhbGFuY2U7XG5cbiAgICAgICAgaWYgKGFjY291bnRCYWxhbmNlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBhY2NvdW50QmFsYW5jZSkge1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PT0gYmFja2luZ19hc3NldCkge1xuICAgICAgICAgICAgICAgICAgICBjb3JlQmFsYW5jZSA9IGFjY291bnRCYWxhbmNlW2lkXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09IHF1b3RlX2Fzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJpdEFzc2V0QmFsYW5jZSA9IGFjY291bnRCYWxhbmNlW2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIXRoaXMuc3RhdGUub3BlbiA/IG51bGwgOiAoXG4gICAgICAgICAgICA8QmFzZU1vZGFsXG4gICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMubW9kYWxJZH1cbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5tb2RhbElkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Qm9ycm93TW9kYWxDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cXVvdGVfYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsX29yZGVycz17YWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCJjYWxsX29yZGVyc1wiLCBMaXN0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTGlzdCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2FsbE9yZGVycz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJjYWxsX29yZGVyc1wiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiY2FsbF9vcmRlcnNcIikuc2l6ZSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSWQ9e3RoaXMucHJvcHMubW9kYWxJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJpdGFzc2V0X2JhbGFuY2U9e2JpdEFzc2V0QmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tpbmdfYmFsYW5jZT17Y29yZUJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNraW5nX2Fzc2V0PXtiYWNraW5nX2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9oZWxwPXt0aGlzLnN0YXRlLnNtYWxsU2NyZWVufVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQmFzZU1vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFOQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFuQ0E7QUFEQTtBQXdDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXJCQTtBQTBCQTs7OztBQXZFQTtBQUNBO0FBeUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBT0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUFGQTtBQXZDQTtBQXdEQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBRkE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBREE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBeEJBO0FBaUNBO0FBQ0E7QUFPQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBeEJBO0FBbENBO0FBbUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBUkE7QUEvSEE7QUEySUE7Ozs7QUExT0E7QUFDQTtBQTRPQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBSUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQVJBO0FBUkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBdkJBO0FBREE7QUFUQTtBQURBO0FBOENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBckVBO0FBTEE7QUFzRkE7Ozs7QUF6VEE7QUFDQTtBQTJUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFKQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFIQTtBQXJCQTtBQURBO0FBbUNBOzs7O0FBeENBO0FBQ0E7QUEwQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBckJBO0FBc0NBOzs7O0FBakRBO0FBQ0E7QUFtREE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQXhDQTtBQUNBO0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0tBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBY0E7QUFDQTs7OztBQXpEQTtBQUNBO0FBMkRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFMQTtBQVFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFXQTs7O0FBRUE7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUF0Q0E7QUFDQTtBQXdDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBZUE7Ozs7QUFsQ0E7QUFDQTtBQW9DQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBYUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUF5QkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFlQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBVEE7QUFlQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQTVCQTtBQXFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFEQTtBQUZBO0FBREE7QUFEQTtBQVBBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUF4QkE7QUFpQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBREE7QUFQQTtBQWlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBdEJBO0FBK0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBWkE7QUEwQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQS9CQTtBQXdDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBYkE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFOQTtBQVFBO0FBUkE7QUFEQTtBQWhMQTtBQThMQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBU0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFnQkE7QUFHQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFOQTtBQUpBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBWEE7QUFEQTtBQWlCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBdERBO0FBNERBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBUEE7QUFEQTtBQXhFQTtBQXFGQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFZQTtBQVpBO0FBQ0E7QUFlQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVJBO0FBVUE7QUFYQTtBQUpBO0FBSkE7QUF3QkE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBUkE7QUFEQTtBQVlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVNBO0FBVEE7QUFmQTtBQTRCQTs7OztBQWgxQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBU0E7QUFDQTtBQUZBO0FBQ0E7QUF5MEJBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUdBO0FBRkE7QUFQQTtBQWNBOzs7O0FBakNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQWRBO0FBZUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQVNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQWJBO0FBZUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFaQTtBQWNBOzs7QUFHQTtBQUtBO0FBUUE7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBSkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQUpBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUxBO0FBbkJBO0FBNEJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQU5BO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQUxBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBZkE7QUFEQTtBQVZBO0FBbkJBO0FBbURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBSkE7QUFwREE7QUFEQTtBQTRFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVZBO0FBSkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFEQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFaQTtBQXBCQTtBQURBO0FBOENBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFiQTtBQVBBO0FBeUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFYQTtBQVZBO0FBNUJBO0FBeURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFEQTtBQURBO0FBekxBO0FBb01BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTkE7QUFEQTtBQTdPQTtBQThQQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFZQTtBQVpBO0FBQ0E7QUFlQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVJBO0FBVUE7QUFYQTtBQUpBO0FBSkE7QUF3QkE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQWRBO0FBMEJBOzs7O0FBem9CQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQXlvQkE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBO0FBTUE7Ozs7QUFmQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFNQTtBQVhBO0FBQ0E7QUFhQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFXQTs7OztBQWxDQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL3NCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFRQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUdBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUtBOzs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUlBO0FBSUE7QUFLQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFLQTtBQU5BO0FBUUE7QUF0QkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFLQTtBQU5BO0FBZEE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcUJBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZUE7QUFHQTtBQUNBO0FBR0E7QUFNQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFGQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQVBBO0FBckJBO0FBaUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBUkE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFYQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBY0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFPQTtBQU9BO0FBT0E7QUF2QkE7QUFMQTtBQXFEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFUQTtBQWZBO0FBNURBO0FBOEZBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFSQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFiQTtBQXdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBUkE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBTkE7QUF4QkE7QUFrQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFWQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBVEE7QUFqQkE7QUE2QkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBT0E7QUFDQTtBQVJBO0FBdkNBO0FBbURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFIQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFMQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVpBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBT0E7QUFmQTtBQW5CQTtBQWZBO0FBc0RBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQURBO0FBeEVBO0FBSkE7QUFwREE7QUE4SUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFQQTtBQVNBO0FBVEE7QUFQQTtBQWhVQTtBQVRBO0FBREE7QUFvV0E7Ozs7QUFoakNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFnakNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQURBO0FBTkE7QUEwQkE7Ozs7QUFyRUE7QUFDQTtBQURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=