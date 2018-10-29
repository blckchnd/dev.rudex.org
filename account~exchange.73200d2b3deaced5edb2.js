(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 2558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
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

/***/ 2594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRow", function() { return OrderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOpenOrders", function() { return MyOpenOrders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(823);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1819);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2536);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OpenSettleOrders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2595);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(580);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2558);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2597);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(723);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2303);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1867);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(429);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(595);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2611);
/* harmony import */ var _Utility_MarketPrice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2612);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2425);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2356);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_18__);
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
                    {
                        style: {
                            width: "25%",
                            textAlign: "right",
                            whiteSpace: "nowrap"
                        },
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
            var _props3 = this.props,
                currentAccount = _props3.currentAccount,
                feedPrice = _props3.feedPrice;

            var orders = currentAccount.get("orders"),
                call_orders = currentAccount.get("call_orders");

            var getOrderData = function getOrderData(order) {
                var _assets;

                var orderObj = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(order).toJS();
                if (!orderObj) return null;
                var base = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getAsset(orderObj.sell_price.base.asset_id);
                var quote = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getAsset(orderObj.sell_price.quote.asset_id);
                var baseID = base.get("id"),
                    quoteID = quote.get("id");
                var assets = (_assets = {}, _defineProperty(_assets, base.get("id"), { precision: base.get("precision") }), _defineProperty(_assets, quote.get("id"), { precision: quote.get("precision") }), _assets);
                var sellBase = orderObj.sell_price.base.asset_id,
                    sellQuote = orderObj.sell_price.quote.asset_id;
                if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
                    return { orderObj: orderObj, assets: assets, id: [quote.get("id")] };
                }
                return {};
            };
            var limitOrders = orders.toArray().map(function (order) {
                try {
                    var _getOrderData = getOrderData(order),
                        orderObj = _getOrderData.orderObj,
                        assets = _getOrderData.assets,
                        id = _getOrderData.id;

                    if (orderObj) {
                        return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["LimitOrder"](orderObj, assets, id);
                    }
                } catch (e) {
                    console.error(e);
                    return null;
                }
            }).filter(function (a) {
                return !!a;
            });

            var callOrders = call_orders.toArray().map(function (order) {
                try {
                    var _getOrderData2 = getOrderData(order),
                        orderObj = _getOrderData2.orderObj,
                        assets = _getOrderData2.assets,
                        id = _getOrderData2.id;

                    if (orderObj && feedPrice) {
                        return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__["CallOrder"](orderObj, assets, id, feedPrice);
                    }
                } catch (e) {
                    console.error(e);
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
                            { className: "table order-table table-highlight-hover no-stripes text-right fixed-table market-right-padding" },
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

/***/ 2595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(823);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2303);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2596);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2597);
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
                    {
                        style: { textAlign: "right", whiteSpace: "nowrap" },
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

/***/ 2612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPrice", function() { return MarketPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketStats", function() { return MarketStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2304);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(829);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2353);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1859);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
/* harmony import */ var _FormattedPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2425);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2352);
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

/***/ 2641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isFinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2642);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(823);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(730);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1936);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1934);
/* harmony import */ var react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_trigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1959);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2356);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1960);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2085);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(580);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(829);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2084);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2319);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(599);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(602);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2425);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2132);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(429);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1867);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(733);
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

        var _this = _possibleConstructorReturn(this, (BorrowModalContent.__proto__ || Object.getPrototypeOf(BorrowModalContent)).call(this, props));

        _this.state = _this._initialState(props);

        _this._onSubmit = _this._onSubmit.bind(_this);
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
            return this.props.visible !== nextProps.visible || !common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].are_equal_shallow(nextState, this.state) || !immutable__WEBPACK_IMPORTED_MODULE_20___default.a.is(nextProps.quote_asset, this.props.quote_asset) || !nextProps.backing_asset.get("symbol") === this.props.backing_asset.get("symbol") || !immutable__WEBPACK_IMPORTED_MODULE_20___default.a.is(nextProps.account, this.props.account) || !immutable__WEBPACK_IMPORTED_MODULE_20___default.a.is(nextProps.call_orders, this.props.call_orders);
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

            this.props.hideModal();

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

            var noValidComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
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
                )
            );

            var footer = [];

            var resetModal = function resetModal() {
                _this2.props.hideModal();
                _this2.setState(_this2._initialState(_this2.props));
            };

            if (!isPredictionMarket && isNaN(feed_price)) {
                footer.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__["Button"],
                    { onClick: this.props.hideModal },
                    counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("account.perm.cancel")
                ));
            } else {
                footer.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__["Button"],
                    { key: "submit", type: "primary", onClick: this._onSubmit },
                    counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.adjust")
                ));
                footer.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__["Button"],
                    { key: "cancel", onClick: resetModal },
                    counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("wallet.reset")
                ));
            }

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_23__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("borrow.title", {
                        asset_symbol: quote_asset.get("symbol")
                    }),
                    visible: this.props.visible,
                    onCancel: this.props.hideModal,
                    footer: footer
                },
                !isPredictionMarket && isNaN(feed_price) ? noValidComponent : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "form",
                        {
                            className: "grid-container small-10 small-offset-1 no-overflow",
                            noValidate: true
                        },
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
                                    {
                                        style: { position: "absolute", left: 20 }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                        onClick: this.toggleLockedCR.bind(this),
                                        name: !this.state.lockedCR ? "locked" : "unlocked",
                                        size: "1_5x",
                                        style: {
                                            position: "relative",
                                            top: -10
                                        }
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
                                    {
                                        style: { position: "absolute", left: 20 }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                        onClick: this.toggleLockedCR.bind(this),
                                        name: this.state.lockedCR ? "locked" : "unlocked",
                                        size: "1_5x",
                                        style: {
                                            position: "relative",
                                            top: -10
                                        }
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
                                                    style: {
                                                        width: "85%"
                                                    },
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
                                            {
                                                style: {
                                                    marginBottom: "1em"
                                                }
                                            },
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
                            ) : null
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

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BorrowModalContent, {
                visible: this.props.visible,
                hideModal: this.props.hideModal,
                showModal: this.props.showModal,
                quote_asset: quote_asset,
                call_orders: account.get("call_orders", Object(immutable__WEBPACK_IMPORTED_MODULE_20__["List"])()).toList(),
                hasCallOrders: account.get("call_orders") && account.get("call_orders").size > 0,
                modalId: this.props.modalId,
                bitasset_balance: bitAssetBalance,
                backing_balance: coreBalance,
                backing_asset: backing_asset,
                hide_help: this.state.smallScreen,
                account: account
            });
        }
    }]);

    return ModalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalWrapper);

/***/ }),

/***/ 2653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(730);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1936);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(595);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(580);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1960);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1959);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(578);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2356);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2321);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2324);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1867);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1944);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(594);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2303);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(429);
/* harmony import */ var _Utility_DecimalChecker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2307);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(728);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(582);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(733);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_22__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

























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

            var balances = this.props.balance ? [this.props.balance] : this.props.balances;

            return !!balances ? balances.find(function (b) {
                return b && b.get("asset_type") === _this4.props.asset.get("id");
            }) : null;
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
}(_Utility_DecimalChecker__WEBPACK_IMPORTED_MODULE_19__["DecimalChecker"]);

DepositWithdrawContent.propTypes = {
    balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainObject,
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
            var isDeposit = this.props.action === "deposit";

            var title = isDeposit ? counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("gateway.deposit") : counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("modal.withdraw.submit");

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_22__["Modal"],
                {
                    title: title,
                    footer: [],
                    visible: this.props.visible,
                    onCancel: this.props.hideModal,
                    className: "test",
                    onClose: this.onClose.bind(this),
                    overlay: true,
                    id: this.props.modalId
                },
                this.props.visible ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DepositWithdrawContent, _extends({}, this.props, {
                    open: this.props.visible
                })) : null
            );
        }
    }]);

    return SimpleDepositWithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleDepositWithdrawModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 2654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(595);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1960);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1959);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2356);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2321);
/* harmony import */ var common_BlockTradesDepositAddressCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2323);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2324);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1867);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1944);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(728);
/* harmony import */ var _Utility_FloatingDropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2306);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1859);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(722);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(723);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2340);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(733);
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "modal.buy.bridge" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip.bridge_TRADE"),
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
                                        "div",
                                        {
                                            className: "error-msg inline-block tooltip",
                                            "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip.over_limit")
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "gateway.over_limit" }),
                                        "\xA0",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
                "button",
                {
                    "data-place": "right",
                    "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_7___default.a.translate("tooltip.withdraw_full"),
                    className: "button",
                    style: { border: "2px solid black", borderLeft: "none" },
                    onClick: this._updateAmount.bind(this, !currentBalance ? 0 : parseInt(currentBalance.get("balance"), 10))
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], { name: "clippy", title: "icons.clippy.withdraw_full" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZS43MzIwMGQyYjNkZWFjZWQ1ZWRiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1ByaWNlVGV4dC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL015T3Blbk9yZGVycy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL09wZW5TZXR0bGVPcmRlcnMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L01hcmtldFByaWNlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTW9kYWwvQm9ycm93TW9kYWwuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvU2ltcGxlRGVwb3NpdFdpdGhkcmF3LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL1NpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcblxuY2xhc3MgUHJpY2VUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cHJpY2UsIHByZUZvcm1hdHRlZFByaWNlLCBxdW90ZSwgYmFzZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXByaWNlICYmICFwcmVGb3JtYXR0ZWRQcmljZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCBmb3JtYXR0ZWRQcmljZSA9ICEhcHJlRm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgID8gcHJlRm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgIDogdXRpbHMucHJpY2VfdG9fdGV4dChwcmljZSwgcXVvdGUsIGJhc2UpO1xuXG4gICAgICAgIGlmIChmb3JtYXR0ZWRQcmljZS5mdWxsID49IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWludGVnZXJcIj57Zm9ybWF0dGVkUHJpY2UuaW50fS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1pbnRlZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLmRlY31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS50cmFpbGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWRlY2ltYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0dGVkUHJpY2UuZnVsbCA+PSAwLjEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWRlY2ltYWxcIj57Zm9ybWF0dGVkUHJpY2UuaW50fS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1pbnRlZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLmRlY31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS50cmFpbGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlLWRlY2ltYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1kZWNpbWFsXCI+e2Zvcm1hdHRlZFByaWNlLmludH0uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UuZGVjID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2UtZGVjaW1hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXR0ZWRQcmljZS5kZWN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0dGVkUHJpY2UudHJhaWxpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1pbnRlZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdHRlZFByaWNlLnRyYWlsaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljZVRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgUHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQgT3BlblNldHRsZU9yZGVycyBmcm9tIFwiLi9PcGVuU2V0dGxlT3JkZXJzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFByaWNlVGV4dCBmcm9tIFwiLi4vVXRpbGl0eS9QcmljZVRleHRcIjtcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHtMaW1pdE9yZGVyLCBDYWxsT3JkZXJ9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IHtFcXVpdmFsZW50VmFsdWVDb21wb25lbnR9IGZyb20gXCIuLi9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtNYXJrZXRQcmljZX0gZnJvbSBcIi4uL1V0aWxpdHkvTWFya2V0UHJpY2VcIjtcbmltcG9ydCBGb3JtYXR0ZWRQcmljZSBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRQcmljZVwiO1xuY29uc3QgbGVmdEFsaWduID0ge3RleHRBbGlnbjogXCJsZWZ0XCJ9O1xuY29uc3QgcmlnaHRBbGlnbiA9IHt0ZXh0QWxpZ246IFwicmlnaHRcIn07XG5jb25zdCBjZW50ZXJBbGlnbiA9IHt0ZXh0QWxpZ246IFwiY2VudGVyXCJ9O1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuXG5jbGFzcyBUYWJsZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgYmFzZVN5bWJvbCxcbiAgICAgICAgICAgIHF1b3RlU3ltYm9sLFxuICAgICAgICAgICAgZGFzaGJvYXJkLFxuICAgICAgICAgICAgaXNNeUFjY291bnQsXG4gICAgICAgICAgICBsZWZ0QWxpZ25cbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuICFkYXNoYm9hcmQgPyAoXG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbiA/IGxlZnRBbGlnbiA6IHJpZ2h0QWxpZ259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbiA/IGxlZnRBbGlnbiA6IHJpZ2h0QWxpZ259PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VTeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e3F1b3RlU3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbiA/IGxlZnRBbGlnbiA6IHJpZ2h0QWxpZ259PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VTeW1ib2wgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e2Jhc2VTeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdEFsaWduID8gbGVmdEFsaWduIDogcmlnaHRBbGlnbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXN1Yi10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLmV4cGlyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7d2lkdGg6IFwiNiVcIn19IC8+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAge2lzTXlBY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGggaWQ9XCJjYW5jZWxBbGxPcmRlcnNcIiBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC50cmFkZVwiIC8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbn0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLm9yZGVyX2lkXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdEFsaWdufSBjb2xTcGFuPVwiNFwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5kZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRBbGlnbn0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdEFsaWdufT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VfbWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRhYmxlSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBxdW90ZVN5bWJvbDogbnVsbCxcbiAgICBiYXNlU3ltYm9sOiBudWxsXG59O1xuXG5jbGFzcyBPcmRlclJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV4dFByb3BzLm9yZGVyLmZvcl9zYWxlICE9PSB0aGlzLnByb3BzLm9yZGVyLmZvcl9zYWxlIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMub3JkZXIuaWQgIT09IHRoaXMucHJvcHMub3JkZXIuaWQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZSAhPT0gdGhpcy5wcm9wcy5xdW90ZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2UgIT09IHRoaXMucHJvcHMuYmFzZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm9yZGVyLm1hcmtldF9iYXNlICE9PSB0aGlzLnByb3BzLm9yZGVyLm1hcmtldF9iYXNlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgb3JkZXIsXG4gICAgICAgICAgICBzaG93U3ltYm9scyxcbiAgICAgICAgICAgIGRhc2hib2FyZCxcbiAgICAgICAgICAgIGlzTXlBY2NvdW50LFxuICAgICAgICAgICAgc2V0dGluZ3NcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGlzQmlkID0gb3JkZXIuaXNCaWQoKTtcbiAgICAgICAgY29uc3QgaXNDYWxsID0gb3JkZXIuaXNDYWxsKCk7XG4gICAgICAgIGxldCB0ZENsYXNzID0gaXNDYWxsXG4gICAgICAgICAgICA/IFwib3JkZXJIaXN0b3J5Q2FsbFwiXG4gICAgICAgICAgICA6IGlzQmlkXG4gICAgICAgICAgICAgICAgPyBcIm9yZGVySGlzdG9yeUJpZFwiXG4gICAgICAgICAgICAgICAgOiBcIm9yZGVySGlzdG9yeUFza1wiO1xuXG4gICAgICAgIGxldCBwcmljZVN5bWJvbCA9IHNob3dTeW1ib2xzID8gKFxuICAgICAgICAgICAgPHNwYW4+e2AgJHtiYXNlLmdldChcInN5bWJvbFwiKX0vJHtxdW90ZS5nZXQoXCJzeW1ib2xcIil9YH08L3NwYW4+XG4gICAgICAgICkgOiBudWxsO1xuICAgICAgICBsZXQgdmFsdWVTeW1ib2wgPSBzaG93U3ltYm9scyA/IFwiIFwiICsgYmFzZS5nZXQoXCJzeW1ib2xcIikgOiBudWxsO1xuICAgICAgICBsZXQgYW1vdW50U3ltYm9sID0gc2hvd1N5bWJvbHMgPyBcIiBcIiArIHF1b3RlLmdldChcInN5bWJvbFwiKSA6IG51bGw7XG4gICAgICAgIGxldCBwcmVmZXJyZWRVbml0ID0gc2V0dGluZ3MgPyBzZXR0aW5ncy5nZXQoXCJ1bml0XCIpIDogXCIxLjMuMFwiO1xuICAgICAgICBsZXQgcXVvdGVDb2xvciA9ICFpc0JpZCA/IFwidmFsdWUgbmVnYXRpdmVcIiA6IFwidmFsdWUgcG9zaXRpdmVcIjtcbiAgICAgICAgbGV0IGJhc2VDb2xvciA9IGlzQmlkID8gXCJ2YWx1ZSBuZWdhdGl2ZVwiIDogXCJ2YWx1ZSBwb3NpdGl2ZVwiO1xuXG4gICAgICAgIHJldHVybiAhZGFzaGJvYXJkID8gKFxuICAgICAgICAgICAgPHRyIGtleT17b3JkZXIuaWR9PlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3RkQ2xhc3N9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxQcmljZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtvcmRlci5nZXRQcmljZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3ByaWNlU3ltYm9sfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0JpZCA/IFwiYW1vdW50Rm9yU2FsZVwiIDogXCJhbW91bnRUb1JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7YW1vdW50U3ltYm9sfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0JpZCA/IFwiYW1vdW50VG9SZWNlaXZlXCIgOiBcImFtb3VudEZvclNhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZVN5bWJvbH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtvcmRlci5leHBpcmF0aW9uLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXNDYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQubG9jYWxpemUobmV3IERhdGUob3JkZXIuZXhwaXJhdGlvbiksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcInNob3J0X2N1c3RvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDogXCI2JVwifX0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0NhbGwgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DYW5jZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNyb3NzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuY3Jvc3NfY2lyY2xlLmNhbmNlbF9vcmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDx0ciBrZXk9e29yZGVyLmlkfSBjbGFzc05hbWU9XCJjbGlja2FibGVcIj5cbiAgICAgICAgICAgICAgICB7aXNNeUFjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQ2FsbCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlckNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoZWNrQ2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7cXVvdGUuZ2V0KFwic3ltYm9sXCIpfV8ke2Jhc2UuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudHJhZGUudHJhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xlZnRBbGlnbn0+I3tvcmRlci5pZC5zdWJzdHJpbmcoNCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjRcIiBzdHlsZT17bGVmdEFsaWdufSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uRmxpcH0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0JpZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UuYnV5X2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudFRvUmVjZWl2ZVwiIDogXCJhbW91bnRGb3JTYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzcz17cXVvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzPXtiYXNlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5zZWxsX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudFRvUmVjZWl2ZVwiIDogXCJhbW91bnRGb3JTYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQ9e3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWQgPyBcImFtb3VudEZvclNhbGVcIiA6IFwiYW1vdW50VG9SZWNlaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzcz17cXVvdGVDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzPXtiYXNlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsZWZ0QWxpZ259IG9uQ2xpY2s9e3RoaXMucHJvcHMub25GbGlwfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17b3JkZXIuc2VsbFByaWNlKCkuYmFzZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtvcmRlci5zZWxsUHJpY2UoKS5iYXNlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtvcmRlci5zZWxsUHJpY2UoKS5xdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17b3JkZXIuc2VsbFByaWNlKCkucXVvdGUuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xlZnRBbGlnbn0gb25DbGljaz17dGhpcy5wcm9wcy5vbkZsaXB9PlxuICAgICAgICAgICAgICAgICAgICB7aXNCaWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMub25GbGlwfT5cbiAgICAgICAgICAgICAgICAgICAgPEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtvcmRlci5hbW91bnRGb3JTYWxlKCkuZ2V0QW1vdW50KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQXNzZXQ9e29yZGVyLmFtb3VudEZvclNhbGUoKS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vRGVjaW1hbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Fzc2V0PXtwcmVmZXJyZWRVbml0fVxuICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtwcmVmZXJyZWRVbml0fSAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuT3JkZXJSb3cuZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dTeW1ib2xzOiBmYWxzZVxufTtcblxuY2xhc3MgTXlPcGVuT3JkZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy5hY3RpdmVUYWIsXG4gICAgICAgICAgICByb3dDb3VudDogMjAsXG4gICAgICAgICAgICBzaG93QWxsOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRPcmRlcnMgPSB0aGlzLl9nZXRPcmRlcnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5hY3RpdmVUYWIgIT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VUYWIobmV4dFByb3BzLmFjdGl2ZVRhYik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVTY3JvbGxiYXJzICYmXG4gICAgICAgICAgICBuZXh0U3RhdGUuc2hvd0FsbCAhPSB0aGlzLnN0YXRlLnNob3dBbGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudENvbnRhaW5lciA9IHRoaXMucmVmcy5jb250YWluZXI7XG4gICAgICAgICAgICBpZiAoIW5leHRTdGF0ZS5zaG93QWxsKSB7XG4gICAgICAgICAgICAgICAgUHMuZGVzdHJveShjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgUHMuaW5pdGlhbGl6ZShjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBQcy51cGRhdGUoY29udGVudENvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLmNvbnRlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzLmNvbnRlbnRUcmFuc2l0aW9uLnJlc2V0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29udGVudENvbnRhaW5lcikgY29udGVudENvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlU3ltYm9sICE9PSB0aGlzLnByb3BzLmJhc2VTeW1ib2wgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZVN5bWJvbCAhPT0gdGhpcy5wcm9wcy5xdW90ZVN5bWJvbCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5jbGFzc05hbWUgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY3RpdmVUYWIgIT09IHRoaXMucHJvcHMuYWN0aXZlVGFiIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuYWN0aXZlVGFiICE9PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYiB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLnNob3dBbGwgIT09IHRoaXMuc3RhdGUuc2hvd0FsbCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRBY2NvdW50ICE9PSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5oaWRlU2Nyb2xsYmFycykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSB0aGlzLnJlZnMuY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXIpIFBzLmluaXRpYWxpemUoY29udGVudENvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnByb3BzLmhpZGVTY3JvbGxiYXJzIHx8XG4gICAgICAgICAgICAodGhpcy5wcm9wcy5oaWRlU2Nyb2xsYmFycyAmJiB0aGlzLnN0YXRlLnNob3dBbGwpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSB0aGlzLnJlZnMuY29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRDb250YWluZXIpIFBzLnVwZGF0ZShjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gdGhpcy5yZWZzLmNvbnRhaW5lcjtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuaGlkZVNjcm9sbGJhcnMgIT09IHRoaXMucHJvcHMuaGlkZVNjcm9sbGJhcnMgJiZcbiAgICAgICAgICAgIG5leHRQcm9wcy5oaWRlU2Nyb2xsYmFyc1xuICAgICAgICApIHtcbiAgICAgICAgICAgIFBzLmRlc3Ryb3koY29udGVudENvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuaGlkZVNjcm9sbGJhcnMgIT09IHRoaXMucHJvcHMuaGlkZVNjcm9sbGJhcnMgJiZcbiAgICAgICAgICAgICFuZXh0UHJvcHMuaGlkZVNjcm9sbGJhcnNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBQcy5pbml0aWFsaXplKGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5yZWZzLmNvbnRlbnRUcmFuc2l0aW9uLnJlc2V0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBpZiAoY29udGVudENvbnRhaW5lcikgY29udGVudENvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgUHMudXBkYXRlKGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uU2V0U2hvd0FsbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93QWxsOiAhdGhpcy5zdGF0ZS5zaG93QWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBbGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy5jb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRPcmRlcnMoKSB7XG4gICAgICAgIGNvbnN0IHtjdXJyZW50QWNjb3VudCwgZmVlZFByaWNlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IG9yZGVycyA9IGN1cnJlbnRBY2NvdW50LmdldChcIm9yZGVyc1wiKSxcbiAgICAgICAgICAgIGNhbGxfb3JkZXJzID0gY3VycmVudEFjY291bnQuZ2V0KFwiY2FsbF9vcmRlcnNcIik7XG5cbiAgICAgICAgY29uc3QgZ2V0T3JkZXJEYXRhID0gb3JkZXIgPT4ge1xuICAgICAgICAgICAgbGV0IG9yZGVyT2JqID0gQ2hhaW5TdG9yZS5nZXRPYmplY3Qob3JkZXIpLnRvSlMoKTtcbiAgICAgICAgICAgIGlmICghb3JkZXJPYmopIHJldHVybiBudWxsO1xuICAgICAgICAgICAgbGV0IGJhc2UgPSBDaGFpblN0b3JlLmdldEFzc2V0KG9yZGVyT2JqLnNlbGxfcHJpY2UuYmFzZS5hc3NldF9pZCk7XG4gICAgICAgICAgICBsZXQgcXVvdGUgPSBDaGFpblN0b3JlLmdldEFzc2V0KG9yZGVyT2JqLnNlbGxfcHJpY2UucXVvdGUuYXNzZXRfaWQpO1xuICAgICAgICAgICAgY29uc3QgYmFzZUlEID0gYmFzZS5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBxdW90ZUlEID0gcXVvdGUuZ2V0KFwiaWRcIik7XG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSB7XG4gICAgICAgICAgICAgICAgW2Jhc2UuZ2V0KFwiaWRcIildOiB7cHJlY2lzaW9uOiBiYXNlLmdldChcInByZWNpc2lvblwiKX0sXG4gICAgICAgICAgICAgICAgW3F1b3RlLmdldChcImlkXCIpXToge3ByZWNpc2lvbjogcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBzZWxsQmFzZSA9IG9yZGVyT2JqLnNlbGxfcHJpY2UuYmFzZS5hc3NldF9pZCxcbiAgICAgICAgICAgICAgICBzZWxsUXVvdGUgPSBvcmRlck9iai5zZWxsX3ByaWNlLnF1b3RlLmFzc2V0X2lkO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChzZWxsQmFzZSA9PT0gYmFzZUlEICYmIHNlbGxRdW90ZSA9PT0gcXVvdGVJRCkgfHxcbiAgICAgICAgICAgICAgICAoc2VsbEJhc2UgPT09IHF1b3RlSUQgJiYgc2VsbFF1b3RlID09PSBiYXNlSUQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge29yZGVyT2JqLCBhc3NldHMsIGlkOiBbcXVvdGUuZ2V0KFwiaWRcIildfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbGltaXRPcmRlcnMgPSBvcmRlcnNcbiAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAgIC5tYXAob3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtvcmRlck9iaiwgYXNzZXRzLCBpZH0gPSBnZXRPcmRlckRhdGEob3JkZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXJPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTGltaXRPcmRlcihvcmRlck9iaiwgYXNzZXRzLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKTtcblxuICAgICAgICBjb25zdCBjYWxsT3JkZXJzID0gY2FsbF9vcmRlcnNcbiAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAgIC5tYXAob3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtvcmRlck9iaiwgYXNzZXRzLCBpZH0gPSBnZXRPcmRlckRhdGEob3JkZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXJPYmogJiYgZmVlZFByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENhbGxPcmRlcihvcmRlck9iaiwgYXNzZXRzLCBpZCwgZmVlZFByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlzTWFyZ2luQ2FsbGVkKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpbWl0T3JkZXJzLmNvbmNhdChjYWxsT3JkZXJzKTtcbiAgICB9XG5cbiAgICBfY2hhbmdlVGFiKHRhYikge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgb3JkZXJzVGFiOiB0YWJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlVGFiOiB0YWJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgZm9jdXMgZ29lcyBiYWNrIHRvIHRvcCBvZiBzY3JvbGxhYmxlIGNvbnRhaW5lciB3aGVuIHRhYiBpcyBjaGFuZ2VkXG4gICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gdGhpcy5yZWZzLmNvbnRhaW5lcjtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgICAgICBQcy51cGRhdGUoY29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgc2V0VGltZW91dChSZWFjdFRvb2x0aXAucmVidWlsZCwgMTAwMCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlLCBxdW90ZVN5bWJvbCwgYmFzZVN5bWJvbCwgc2V0dGxlT3JkZXJzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlVGFiLCBzaG93QWxsLCByb3dDb3VudH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghYmFzZSB8fCAhcXVvdGUpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyO1xuICAgICAgICBsZXQgZm9vdGVyQ29udGFpbmVyO1xuXG4gICAgICAgIC8vIElzIGFzc2V0IGEgQml0QXNzZXQgd2l0aCBTZXR0bGVtZW50c1xuICAgICAgICBsZXQgYmFzZUlzQml0QXNzZXQgPVxuICAgICAgICAgICAgYmFzZS5nZXQoXCJiaXRhc3NldF9kYXRhX2lkXCIpICYmIHNldHRsZU9yZGVycy5zaXplID4gMFxuICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgIGxldCBxdW90ZUlzQml0QXNzZXQgPVxuICAgICAgICAgICAgcXVvdGUuZ2V0KFwiYml0YXNzZXRfZGF0YV9pZFwiKSAmJiBzZXR0bGVPcmRlcnMuc2l6ZSA+IDBcbiAgICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgICA6IGZhbHNlO1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8qIFVzZXJzIE9wZW4gT3JkZXJzIFRhYiAoZGVmYXVsdCkgKi9cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFjdGl2ZVRhYiB8fCBhY3RpdmVUYWIgPT0gXCJteV9vcmRlcnNcIikge1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gdGhpcy5fZ2V0T3JkZXJzKCk7XG4gICAgICAgICAgICBsZXQgZW1wdHlSb3cgPSAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj1cIjVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lm5vX29yZGVyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBiaWRzID0gb3JkZXJzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaXNCaWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmdldFByaWNlKCkgLSBhLmdldFByaWNlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKG9yZGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gb3JkZXIuZ2V0UHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlclJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29yZGVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyPXtvcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5vbkNhbmNlbC5iaW5kKHRoaXMsIG9yZGVyLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBhc2tzID0gb3JkZXJzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFhLmlzQmlkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5nZXRQcmljZSgpIC0gYi5nZXRQcmljZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChvcmRlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmljZSA9IG9yZGVyLmdldFByaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcmRlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMucHJvcHMub25DYW5jZWwuYmluZCh0aGlzLCBvcmRlci5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoYXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByb3dzID0gcm93cy5jb25jYXQoYXNrcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChiaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJvd3MgPSByb3dzLmNvbmNhdChiaWRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucHJvcHMucHJpY2UgLSBiLnByb3BzLnByaWNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCByb3dzTGVuZ3RoID0gcm93cy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoIXNob3dBbGwpIHtcbiAgICAgICAgICAgICAgICByb3dzLnNwbGljZShyb3dDb3VudCwgcm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyID0gKFxuICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICByZWY9XCJjb250ZW50VHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Jvd3MubGVuZ3RoID8gcm93cyA6IGVtcHR5Um93fVxuICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb290ZXJDb250YWluZXIgPVxuICAgICAgICAgICAgICAgIHJvd3NMZW5ndGggPiAxMSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcmJvb2stc2hvd2FsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5fb25TZXRTaG93QWxsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImV4Y2hhbmdlLmhpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJleGNoYW5nZS5zaG93X2FsbF9vcmRlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd2NvdW50PXtyb3dzTGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAge1xuICAgICAgICAgICAgLyogT3BlbiBTZXR0bGUgT3JkZXJzICovXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZVRhYiAmJiBhY3RpdmVUYWIgPT0gXCJvcGVuX3NldHRsZW1lbnRcIikge1xuICAgICAgICAgICAgbGV0IHNldHRsZU9yZGVyc0xlbmd0aCA9IHNldHRsZU9yZGVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChzZXR0bGVPcmRlcnNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzaG93QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRsZU9yZGVycy5zcGxpY2Uocm93Q291bnQsIHNldHRsZU9yZGVycy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGVudENvbnRhaW5lciA9IChcbiAgICAgICAgICAgICAgICA8T3BlblNldHRsZU9yZGVyc1xuICAgICAgICAgICAgICAgICAgICBrZXk9XCJzZXR0bGVfb3JkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJzPXtzZXR0bGVPcmRlcnN9XG4gICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2w9e3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb290ZXJDb250YWluZXIgPVxuICAgICAgICAgICAgICAgIHNldHRsZU9yZGVyc0xlbmd0aCA+IDExID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyYm9vay1zaG93YWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLl9vblNldFNob3dBbGwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZXhjaGFuZ2UuaGlkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImV4Y2hhbmdlLnNob3dfYWxsX29yZGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Y291bnQ9e3NldHRsZU9yZGVyc0xlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAga2V5PVwib3Blbl9vcmRlcnNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaW5uZXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuaW5uZXJTdHlsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vSGVhZGVyID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGNoYW5nZS1jb250ZW50LWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PSBcIm15X29yZGVyc1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5teV9vcmRlcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT0gXCJvcGVuX3NldHRsZW1lbnRcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc2V0dGxlX29yZGVyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXIgbWFya2V0LXJpZ2h0LXBhZGRpbmctb25seVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIG9yZGVyLXRhYmxlIHRleHQtcmlnaHQgZml4ZWQtdGFibGUgbWFya2V0LXJpZ2h0LXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09IFwibXlfb3JkZXJzXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbD17YmFzZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sPXtxdW90ZVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1zdWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyIGdyaWQtYmxvY2sgbWFya2V0LXJpZ2h0LXBhZGRpbmctb25seSBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJjb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICF0aGlzLnByb3BzLnRpbnlTY3JlZW4gPyAyNjAgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgb3JkZXItdGFibGUgdGFibGUtaGlnaGxpZ2h0LWhvdmVyIG5vLXN0cmlwZXMgdGV4dC1yaWdodCBmaXhlZC10YWJsZSBtYXJrZXQtcmlnaHQtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50Q29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtmb290ZXJDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk15T3Blbk9yZGVycy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYmFzZToge30sXG4gICAgcXVvdGU6IHt9LFxuICAgIG9yZGVyczoge30sXG4gICAgcXVvdGVTeW1ib2w6IFwiXCIsXG4gICAgYmFzZVN5bWJvbDogXCJcIlxufTtcblxuTXlPcGVuT3JkZXJzLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcXVvdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBvcmRlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBxdW90ZVN5bWJvbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJhc2VTeW1ib2w6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IHtPcmRlclJvdywgVGFibGVIZWFkZXIsIE15T3Blbk9yZGVyc307XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBnZXRMb2NhbGUgZnJvbSBcImJyb3dzZXItbG9jYWxlXCI7XG5pbXBvcnQgVHJhbnNpdGlvbldyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXJcIjtcblxuY2xhc3MgVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtiYXNlU3ltYm9sLCBxdW90ZVN5bWJvbH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFzZVN5bWJvbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QXNzZXROYW1lIG5hbWU9e2Jhc2VTeW1ib2x9IC8+L1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3F1b3RlU3ltYm9sfSAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90ZVN5bWJvbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QXNzZXROYW1lIG5hbWU9e3F1b3RlU3ltYm9sfSAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnNldHRsZW1lbnRfZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc3ViLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UYWJsZUhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcXVvdGVTeW1ib2w6IG51bGwsXG4gICAgYmFzZVN5bWJvbDogbnVsbFxufTtcblxuY2xhc3MgU2V0dGxlT3JkZXJSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtiYXNlLCBxdW90ZSwgb3JkZXIsIHNob3dTeW1ib2xzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHByaWNlID1cbiAgICAgICAgICAgIGJhc2UuZ2V0KFwiaWRcIikgPT0gXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgPyBvcmRlci5nZXRQcmljZSgpIC8gKDEgKyBvcmRlci5vZmZzZXRfcGVyY2VudCAvIDEwMDAwKVxuICAgICAgICAgICAgICAgIDogb3JkZXIuZ2V0UHJpY2UoKSAqICgxICsgb3JkZXIub2Zmc2V0X3BlcmNlbnQgLyAxMDAwMCk7XG4gICAgICAgIGxldCBhbW91bnRTeW1ib2wgPSBzaG93U3ltYm9scyA/IFwiIFwiICsgcXVvdGUuZ2V0KFwic3ltYm9sXCIpIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiA1fX0+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIocHJpY2UsIHF1b3RlLmdldChcInByZWNpc2lvblwiKSl9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7YW1vdW50U3ltYm9sfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhb3JkZXIuaXNCaWQoKSA/IFwiYW1vdW50Rm9yU2FsZVwiIDogXCJhbW91bnRUb1JlY2VpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSgpLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFvcmRlci5pc0JpZCgpID8gXCJhbW91bnRUb1JlY2VpdmVcIiA6IFwiYW1vdW50Rm9yU2FsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdKCkuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCJ9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e25ldyBEYXRlKG9yZGVyLnNldHRsZW1lbnRfZGF0ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQubG9jYWxpemUobmV3IERhdGUob3JkZXIuc2V0dGxlbWVudF9kYXRlKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TG9jYWxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoXCJlbi11c1wiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1hcmtldF9oaXN0b3J5X3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm1hcmtldF9oaXN0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TZXR0bGVPcmRlclJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2hvd1N5bWJvbHM6IGZhbHNlLFxuICAgIGludmVydDogZmFsc2Vcbn07XG5cbmNsYXNzIE9wZW5TZXR0bGVPcmRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm9yZGVycyAhPT0gdGhpcy5wcm9wcy5vcmRlcnNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7b3JkZXJzLCBiYXNlLCBxdW90ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBhY3RpdmVPcmRlcnMgPSBudWxsO1xuXG4gICAgICAgIGlmIChvcmRlcnMuc2l6ZSA+IDAgJiYgYmFzZSAmJiBxdW90ZSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcblxuICAgICAgICAgICAgYWN0aXZlT3JkZXJzID0gb3JkZXJzXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaXNCZWZvcmUoYikgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKG9yZGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGUubm93KCkgPCBvcmRlci5zZXR0bGVtZW50X2RhdGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGxlT3JkZXJSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e29yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5ub19vcmRlcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICByZWY9XCJjb250ZW50VHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGJvZHlcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwibmV3cm93XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YWN0aXZlT3JkZXJzfVxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk9wZW5TZXR0bGVPcmRlcnMuZGVmYXVsdFByb3BzID0ge1xuICAgIGJhc2U6IHt9LFxuICAgIHF1b3RlOiB7fSxcbiAgICBvcmRlcnM6IHt9LFxuICAgIHF1b3RlU3ltYm9sOiBcIlwiLFxuICAgIGJhc2VTeW1ib2w6IFwiXCJcbn07XG5cbk9wZW5TZXR0bGVPcmRlcnMucHJvcFR5cGVzID0ge1xuICAgIGJhc2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBxdW90ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG9yZGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHF1b3RlU3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYmFzZVN5bWJvbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcGVuU2V0dGxlT3JkZXJzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBGb3JtYXR0ZWRQcmljZSBmcm9tIFwiLi9Gb3JtYXR0ZWRQcmljZVwiO1xuaW1wb3J0IG1hcmtldFV0aWxzIGZyb20gXCJjb21tb24vbWFya2V0X3V0aWxzXCI7XG5cbmNsYXNzIE1hcmtldFN0YXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIGNvbnN0IHttYXJrZXROYW1lfSA9IG1hcmtldFV0aWxzLmdldE1hcmtldE5hbWUocHJvcHMuYmFzZSwgcHJvcHMucXVvdGUpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWFya2V0TmFtZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9jaGVja1N0YXRzKG5ld1N0YXRzID0ge2Nsb3NlOiB7fX0sIG9sZFN0YXRzID0ge2Nsb3NlOiB7fX0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5ld1N0YXRzLnZvbHVtZUJhc2UgIT09IG9sZFN0YXRzLnZvbHVtZUJhc2UgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXdTdGF0cy5jbG9zZSAmJiBuZXdTdGF0cy5jbG9zZS5iYXNlLFxuICAgICAgICAgICAgICAgIG9sZFN0YXRzLmNsb3NlICYmIG9sZFN0YXRzLmNsb3NlLmJhc2VcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXdTdGF0cy5jbG9zZSAmJiBuZXdTdGF0cy5jbG9zZS5xdW90ZSxcbiAgICAgICAgICAgICAgICBvbGRTdGF0cy5jbG9zZSAmJiBvbGRTdGF0cy5jbG9zZS5xdW90ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5fY2hlY2tTdGF0cyhcbiAgICAgICAgICAgICAgICBucC5hbGxNYXJrZXRTdGF0cy5nZXQodGhpcy5zdGF0ZS5tYXJrZXROYW1lKSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsbE1hcmtldFN0YXRzLmdldCh0aGlzLnN0YXRlLm1hcmtldE5hbWUpXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICBucC5iYXNlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLmJhc2UuZ2V0KFwiaWRcIikgfHxcbiAgICAgICAgICAgIG5wLnF1b3RlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRzSW50ZXJ2YWwpIHRoaXMuc3RhdHNJbnRlcnZhbCgpO1xuICAgIH1cbn1cblxuY2xhc3MgTWFya2V0UHJpY2VJbm5lciBleHRlbmRzIE1hcmtldFN0YXRzIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobnApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthbGxNYXJrZXRTdGF0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7bWFya2V0TmFtZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBtYXJrZXRTdGF0cyA9IGFsbE1hcmtldFN0YXRzLmdldChtYXJrZXROYW1lKTtcbiAgICAgICAgbGV0IHByaWNlID0gbWFya2V0U3RhdHMgJiYgbWFya2V0U3RhdHMucHJpY2UgPyBtYXJrZXRTdGF0cy5wcmljZSA6IG51bGw7XG4gICAgICAgIC8vIGlmICghcHJpY2UgJiYgbWFya2V0U3RhdHNJbnZlcnRlZCAmJiBtYXJrZXRTdGF0c0ludmVydGVkLnByaWNlKSB7XG4gICAgICAgIC8vICAgICBwcmljZSA9IG1hcmtldFN0YXRzSW52ZXJ0ZWQucHJpY2UuaW52ZXJ0KCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbmFtZXMoXCJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cbiAgICAgICAgICAgICAgICB7cHJpY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e3ByaWNlLmJhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17cHJpY2UuYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17cHJpY2UucXVvdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3ByaWNlLnF1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXt0aGlzLnByb3BzLmZvcmNlX2RpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9scz17dGhpcy5wcm9wcy5oaWRlX3N5bWJvbHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgXCJuL2FcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5NYXJrZXRQcmljZUlubmVyID0gQXNzZXRXcmFwcGVyKE1hcmtldFByaWNlSW5uZXIsIHtcbiAgICBwcm9wTmFtZXM6IFtcInF1b3RlXCIsIFwiYmFzZVwiXVxufSk7XG5cbmNsYXNzIE1hcmtldFByaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TWFya2V0UHJpY2VJbm5lciB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5NYXJrZXRQcmljZSA9IGNvbm5lY3QoXG4gICAgTWFya2V0UHJpY2UsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbTWFya2V0c1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCB7TWFya2V0UHJpY2UsIE1hcmtldFN0YXRzfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7aXNGaW5pdGV9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IEJhc2VNb2RhbCBmcm9tIFwiLi9CYXNlTW9kYWxcIjtcbmltcG9ydCBUcmlnZ2VyIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3RyaWdnZXJcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcbmltcG9ydCBXYWxsZXRBcGkgZnJvbSBcImFwaS9XYWxsZXRBcGlcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQgRm9ybWF0dGVkUHJpY2UgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkUHJpY2VcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBIZWxwQ29udGVudCBmcm9tIFwiLi4vVXRpbGl0eS9IZWxwQ29udGVudFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQge0NoZWNrYm94LCBNb2RhbCwgQnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbi8qKlxuICogIEdpdmVuIGFuIGFjY291bnQgYW5kIGFuIGFzc2V0IGlkLCByZW5kZXIgYSBtb2RhbCBhbGxvd2luZyBtb2RpZmljYXRpb24gb2YgYSBtYXJnaW4gcG9zaXRpb24gZm9yIHRoYXQgYXNzZXRcbiAqXG4gKiAgRXhwZWN0ZWQgUHJvcGVydGllczpcbiAqICAgICBxdW90ZV9hc3NldDogIGFzc2V0IGlkLCBtdXN0IGJlIGEgYml0YXNzZXRcbiAqICAgICBhY2NvdW50OiBmdWxsX2FjY291bnQgb2JqZWN0IGZvciB0aGUgYWNjb3VudCB0byB1c2VcbiAqXG4gKi9cblxuY2xhc3MgQm9ycm93TW9kYWxDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBxdW90ZV9hc3NldDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGJpdGFzc2V0X2JhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXG4gICAgICAgIGJhY2tpbmdfYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxuICAgICAgICBiYWNraW5nX2JhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXG4gICAgICAgIGNhbGxfb3JkZXJzOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0c0xpc3QsXG4gICAgICAgIGhhc0NhbGxPcmRlcnM6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2luaXRpYWxTdGF0ZShwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5fb25TdWJtaXQgPSB0aGlzLl9vblN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9pbml0aWFsU3RhdGUocHJvcHMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHByb3BzID8gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKHByb3BzKSA6IHt9O1xuXG4gICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCkge1xuICAgICAgICAgICAgbGV0IGRlYnQgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kZWJ0LFxuICAgICAgICAgICAgICAgIHByb3BzLnF1b3RlX2Fzc2V0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgIHByb3BzLmJhY2tpbmdfYXNzZXRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyA9ICFpc05hTihcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24udGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA/IGN1cnJlbnRQb3NpdGlvbi50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyAvIDEwMDBcbiAgICAgICAgICAgICAgICA6IDA7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2hvcnRfYW1vdW50OiBkZWJ0ID8gZGVidC50b1N0cmluZygpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsID8gY29sbGF0ZXJhbC50b1N0cmluZygpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiB0aGlzLl9nZXRDb2xsYXRlcmFsUmF0aW8oZGVidCwgY29sbGF0ZXJhbCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW86IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvLFxuICAgICAgICAgICAgICAgIGVycm9yczogdGhpcy5fZ2V0SW5pdGlhbEVycm9ycygpLFxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWw6IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID4gMCA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBkZWJ0OiBkZWJ0LFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbzogdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG9ydF9hbW91bnQ6IDAsXG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbDogMCxcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiB0aGlzLl9nZXRJbml0aWFsQ29sbGF0ZXJhbFJhdGlvKHByb3BzKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbzogMCxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHRoaXMuX2dldEluaXRpYWxFcnJvcnMoKSxcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1c2VUYXJnZXRDb2xsYXRlcmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBkZWJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgUmVhY3RUb29sdGlwLnJlYnVpbGQoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5faW5pdGlhbFN0YXRlKHRoaXMucHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy52aXNpYmxlICE9PSBuZXh0UHJvcHMudmlzaWJsZSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkgfHxcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLnF1b3RlX2Fzc2V0LCB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0KSB8fFxuICAgICAgICAgICAgIW5leHRQcm9wcy5iYWNraW5nX2Fzc2V0LmdldChcInN5bWJvbFwiKSA9PT1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwic3ltYm9sXCIpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5hY2NvdW50LCB0aGlzLnByb3BzLmFjY291bnQpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5jYWxsX29yZGVycywgdGhpcy5wcm9wcy5jYWxsX29yZGVycylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBjb25zdCB7c2hvcnRfYW1vdW50LCBjb2xsYXRlcmFsLCBjb2xsYXRlcmFsX3JhdGlvfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmhhc0NhbGxPcmRlcnMgIT09IHRoaXMucHJvcHMuaGFzQ2FsbE9yZGVycyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnF1b3RlX2Fzc2V0LmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5faW5pdGlhbFN0YXRlKG5leHRQcm9wcyk7XG5cbiAgICAgICAgICAgIGxldCByZXZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2hvcnRfYW1vdW50IHx8IGNvbGxhdGVyYWwgfHwgY29sbGF0ZXJhbF9yYXRpbykge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNob3J0X2Ftb3VudCA9IHNob3J0X2Ftb3VudDtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5jb2xsYXRlcmFsID0gY29sbGF0ZXJhbDtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5jb2xsYXRlcmFsX3JhdGlvID0gY29sbGF0ZXJhbF9yYXRpbztcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldEluaXRpYWxFcnJvcnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xsYXRlcmFsX2JhbGFuY2U6IG51bGwsXG4gICAgICAgICAgICByYXRpb190b29faGlnaDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9nZXRNYWludGVuYW5jZVJhdGlvKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCJcbiAgICAgICAgICAgIF0pIC8gMTAwMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbmZpcm1DbGlja2VkKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBaZkFwaS5wdWJsaXNoKHRoaXMucHJvcHMubW9kYWxJZCwgXCJjbG9zZVwiKTtcbiAgICB9XG5cbiAgICB0b2dnbGVMb2NrZWRDUihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9ja2VkQ1I6ICF0aGlzLnN0YXRlLmxvY2tlZENSID8gdHJ1ZSA6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgX29uQm9ycm93Q2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IGZlZWRfcHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcbiAgICAgICAgbGV0IGFtb3VudCA9IGUuYW1vdW50LnJlcGxhY2UoLywvZywgXCJcIik7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3J0X2Ftb3VudDogYW1vdW50LFxuICAgICAgICAgICAgY29sbGF0ZXJhbDogKFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbF9yYXRpbyAqXG4gICAgICAgICAgICAgICAgKGFtb3VudCAvIGZlZWRfcHJpY2UpXG4gICAgICAgICAgICApLnRvRml4ZWQodGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0LmdldChcInByZWNpc2lvblwiKSksXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xuICAgIH1cblxuICAgIF9vbkNvbGxhdGVyYWxDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgYW1vdW50ID0gZS5hbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcblxuICAgICAgICBsZXQgZmVlZF9wcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xuICAgICAgICBjb25zdCBjb2xsYXRlcmFsUmF0aW8gPSBhbW91bnQgLyAodGhpcy5zdGF0ZS5zaG9ydF9hbW91bnQgLyBmZWVkX3ByaWNlKTtcblxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLl9pc1ByZWRpY3Rpb25NYXJrZXQodGhpcy5wcm9wcylcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgc2hvcnRfYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBhbW91bnQsXG4gICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgc2hvcnRfYW1vdW50OiB0aGlzLnN0YXRlLnNob3J0X2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IGFtb3VudCxcbiAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW86IGlzRmluaXRlKGNvbGxhdGVyYWxSYXRpbylcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbGxhdGVyYWxSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5fZ2V0SW5pdGlhbENvbGxhdGVyYWxSYXRpbyh0aGlzLnByb3BzKVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgX29uVGFyZ2V0UmF0aW9DaGFuZ2UoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgLy8gRW5zdXJlIGlucHV0IGlzIHZhbGlkXG4gICAgICAgIGNvbnN0IHJlZ2V4cF9udW1lcmFsID0gbmV3IFJlZ0V4cCgvW1s6ZGlnaXQ6XV0vKTtcbiAgICAgICAgaWYgKCFyZWdleHBfbnVtZXJhbC50ZXN0KHRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2csIFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhdGlvID0gdGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW86IHJhdGlvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vblJhdGlvQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IGZlZWRfcHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIC8vIEVuc3VyZSBpbnB1dCBpcyB2YWxpZFxuICAgICAgICBjb25zdCByZWdleHBfbnVtZXJhbCA9IG5ldyBSZWdFeHAoL1tbOmRpZ2l0Ol1dLyk7XG4gICAgICAgIGlmICghcmVnZXhwX251bWVyYWwudGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICB0YXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTkuXS9nLCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYXRpbyA9IHRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IHNob3J0X2Ftb3VudDtcbiAgICAgICAgbGV0IGNvbGxhdGVyYWw7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9ja2VkQ1IpIHtcbiAgICAgICAgICAgIHNob3J0X2Ftb3VudCA9IChcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jb2xsYXRlcmFsICogZmVlZF9wcmljZSkgL1xuICAgICAgICAgICAgICAgIHJhdGlvXG4gICAgICAgICAgICApLnRvRml4ZWQodGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0LmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgICAgICBjb2xsYXRlcmFsID0gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvcnRfYW1vdW50ID0gdGhpcy5zdGF0ZS5zaG9ydF9hbW91bnQ7XG4gICAgICAgICAgICBjb2xsYXRlcmFsID0gKFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNob3J0X2Ftb3VudCAvIGZlZWRfcHJpY2UpICpcbiAgICAgICAgICAgICAgICByYXRpb1xuICAgICAgICAgICAgKS50b0ZpeGVkKHRoaXMucHJvcHMuYmFja2luZ19hc3NldC5nZXQoXCJwcmVjaXNpb25cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgc2hvcnRfYW1vdW50OiBzaG9ydF9hbW91bnQsXG4gICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsLFxuICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogcmF0aW9cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xuICAgIH1cblxuICAgIF9tYXhpbWl6ZUNvbGxhdGVyYWwoKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnByb3BzXG4gICAgICAgICAgICA/IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbih0aGlzLnByb3BzKVxuICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgbGV0IGluaXRpYWxDb2xsYXRlcmFsID0gMDtcblxuICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwpIHtcbiAgICAgICAgICAgIGluaXRpYWxDb2xsYXRlcmFsID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgZ28gb3ZlciB0aGUgbWF4aW11bSBjb2xsYXRlcmFsIHJhdGlvXG4gICAgICAgIGxldCBtYXhpbWl6ZWRDb2xsYXRlcmFsID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgIE1hdGgubWluKFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ19iYWxhbmNlLmdldChcImJhbGFuY2VcIikgL1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKHRoaXMucHJvcHMuYmFja2luZ19hc3NldCkgK1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsQ29sbGF0ZXJhbCAtXG4gICAgICAgICAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNob3J0X2Ftb3VudCAvIHRoaXMuX2dldEZlZWRQcmljZSgpKSAqIDEwMDAuMFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX29uQ29sbGF0ZXJhbENoYW5nZShcbiAgICAgICAgICAgIG5ldyBPYmplY3Qoe2Ftb3VudDogbWF4aW1pemVkQ29sbGF0ZXJhbC50b1N0cmluZygpfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfbWF4aW1pemVEZWJ0KCkge1xuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5wcm9wc1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24odGhpcy5wcm9wcylcbiAgICAgICAgICAgIDoge307XG4gICAgICAgIGxldCBpbml0aWFsQ29sbGF0ZXJhbCA9IDA7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsKSB7XG4gICAgICAgICAgICBpbml0aWFsQ29sbGF0ZXJhbCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQoXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1heGltdW1Db2xsYXRlcmFsID1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ19iYWxhbmNlLmdldChcImJhbGFuY2VcIikgL1xuICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24odGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0KSArXG4gICAgICAgICAgICBpbml0aWFsQ29sbGF0ZXJhbCAtXG4gICAgICAgICAgICAxMDtcbiAgICAgICAgY29uc3Qgc2hvcnRfYW1vdW50ID1cbiAgICAgICAgICAgIChtYXhpbXVtQ29sbGF0ZXJhbCAvIHRoaXMuc3RhdGUuY29sbGF0ZXJhbF9yYXRpbykgKlxuICAgICAgICAgICAgdGhpcy5fZ2V0RmVlZFByaWNlKCk7XG5cbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICBzaG9ydF9hbW91bnQ6IHNob3J0X2Ftb3VudCxcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IG1heGltdW1Db2xsYXRlcmFsLFxuICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogdGhpcy5zdGF0ZS5jb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGRzKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5fc2V0VXBkYXRlZFBvc2l0aW9uKG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBfcGF5RGVidCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMucHJvcHNcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMucHJvcHMpXG4gICAgICAgICAgICA6IHtkZWJ0OiAwfTtcblxuICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uLmRlYnQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvcnRfYW1vdW50ID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcbiAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kZWJ0IC1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iaXRhc3NldF9iYWxhbmNlLmdldChcImJhbGFuY2VcIiksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVfYXNzZXRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9vbkJvcnJvd0NoYW5nZSh7XG4gICAgICAgICAgICBhbW91bnQ6IHNob3J0X2Ftb3VudC50b1N0cmluZygpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbjpcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLnNob3J0X2Ftb3VudCkgL1xuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlRmllbGRzKG5ld1N0YXRlKSB7XG4gICAgICAgIGxldCBlcnJvcnMgPSB0aGlzLl9nZXRJbml0aWFsRXJyb3JzKCk7XG4gICAgICAgIGxldCB7b3JpZ2luYWxfcG9zaXRpb259ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGJhY2tpbmdfYmFsYW5jZSA9ICF0aGlzLnByb3BzLmJhY2tpbmdfYmFsYW5jZVxuICAgICAgICAgICAgPyB7YmFsYW5jZTogMH1cbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5iYWNraW5nX2JhbGFuY2UudG9KUygpO1xuXG4gICAgICAgIGxldCBtYWludGVuYW5jZVJhdGlvID0gdGhpcy5fZ2V0TWFpbnRlbmFuY2VSYXRpbygpO1xuICAgICAgICBsZXQgb3JpZ2luYWxDUiA9IHRoaXMuX2dldENvbGxhdGVyYWxSYXRpbyhcbiAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmRlYnQsXG4gICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbi5jb2xsYXRlcmFsXG4gICAgICAgICk7XG4gICAgICAgIGxldCBpc09yaWdpbmFsQmVsb3dNQ1IgPVxuICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uY29sbGF0ZXJhbCA+IDAgJiYgb3JpZ2luYWxDUiA8IG1haW50ZW5hbmNlUmF0aW87XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGFyc2VGbG9hdChuZXdTdGF0ZS5jb2xsYXRlcmFsKSAtIG9yaWdpbmFsX3Bvc2l0aW9uLmNvbGxhdGVyYWwgPlxuICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcbiAgICAgICAgICAgICAgICBiYWNraW5nX2JhbGFuY2UuYmFsYW5jZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQudG9KUygpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZXJyb3JzLmNvbGxhdGVyYWxfYmFsYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuY29sbGF0ZXJhbFwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IHNxcCA9IHRoaXMucHJvcHMucXVvdGVfYXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJjdXJyZW50X2ZlZWRcIiwgXCJtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIl0pIC8gMTAwMDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc09yaWdpbmFsQmVsb3dNQ1IgJiZcbiAgICAgICAgICAgIG5ld1N0YXRlLnNob3J0X2Ftb3VudCA+IG9yaWdpbmFsX3Bvc2l0aW9uLmRlYnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2UgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgXCJib3Jyb3cuZXJyb3JzLmluY3JlYXNlZF9kZWJ0X29uX21hcmdpbl9jYWxsXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBpc09yaWdpbmFsQmVsb3dNQ1IgJiZcbiAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbF9yYXRpbykgPD0gcGFyc2VGbG9hdChvcmlnaW5hbENSKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGVycm9ycy5iZWxvd19tYWludGVuYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuYmVsb3dfcmF0aW9fbWNyX3VwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIHtvY3I6IG9yaWdpbmFsQ1IudG9GaXhlZCg0KX1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAhaXNPcmlnaW5hbEJlbG93TUNSICYmXG4gICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLmNvbGxhdGVyYWxfcmF0aW8pIDxcbiAgICAgICAgICAgICAgICAodGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpID8gMSA6IG1haW50ZW5hbmNlUmF0aW8pXG4gICAgICAgICkge1xuICAgICAgICAgICAgZXJyb3JzLmJlbG93X21haW50ZW5hbmNlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5iZWxvd1wiLFxuICAgICAgICAgICAgICAgIHttcjogbWFpbnRlbmFuY2VSYXRpb31cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLmNvbGxhdGVyYWxfcmF0aW8pIDxcbiAgICAgICAgICAgICh0aGlzLl9pc1ByZWRpY3Rpb25NYXJrZXQodGhpcy5wcm9wcykgPyAxIDogbWFpbnRlbmFuY2VSYXRpbyArIDAuNSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2UgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgXCJib3Jyb3cuZXJyb3JzLmNsb3NlXCIsXG4gICAgICAgICAgICAgICAge21yOiBtYWludGVuYW5jZVJhdGlvfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pO1xuICAgIH1cblxuICAgIF9vblN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuXG4gICAgICAgIGxldCBxdW90ZVByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICk7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24odGhpcy5wcm9wcyk7XG5cbiAgICAgICAgbGV0IGlzVENSID1cbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VUYXJnZXRDb2xsYXRlcmFsXG4gICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgOiBmYWxzZTtcblxuICAgICAgICBsZXQgZXh0ZW5zaW9uc1Byb3AgPSBmYWxzZTtcblxuICAgICAgICBpZiAoaXNUQ1IpIHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnNQcm9wID0ge1xuICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvOiBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0ciA9IFdhbGxldEFwaS5uZXdfdHJhbnNhY3Rpb24oKTtcbiAgICAgICAgaWYgKGV4dGVuc2lvbnNQcm9wKSB7XG4gICAgICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24oXCJjYWxsX29yZGVyX3VwZGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmRpbmdfYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIGRlbHRhX2NvbGxhdGVyYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbCAqIGJhY2tpbmdQcmVjaXNpb24gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYmFja2luZ19hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVsdGFfZGVidDoge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG9ydF9hbW91bnQgKiBxdW90ZVByZWNpc2lvbiAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmRlYnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogZXh0ZW5zaW9uc1Byb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHIuYWRkX3R5cGVfb3BlcmF0aW9uKFwiY2FsbF9vcmRlcl91cGRhdGVcIiwge1xuICAgICAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5kaW5nX2FjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBkZWx0YV9jb2xsYXRlcmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogcGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKiBiYWNraW5nUHJlY2lzaW9uIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlbHRhX2RlYnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvcnRfYW1vdW50ICogcXVvdGVQcmVjaXNpb24gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kZWJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMucXVvdGVfYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBXYWxsZXREYi5wcm9jZXNzX3RyYW5zYWN0aW9uKHRyLCBudWxsLCB0cnVlKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1bmxvY2sgZmFpbGVkOlwiLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBaZkFwaS5wdWJsaXNoKHRoaXMucHJvcHMubW9kYWxJZCwgXCJjbG9zZVwiKTtcbiAgICB9XG5cbiAgICBfZ2V0Q3VycmVudFBvc2l0aW9uKHByb3BzKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB7XG4gICAgICAgICAgICBjb2xsYXRlcmFsOiBudWxsLFxuICAgICAgICAgICAgZGVidDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5oYXNDYWxsT3JkZXJzICYmIHByb3BzLmNhbGxfb3JkZXJzKSB7XG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBwcm9wcy5jYWxsX29yZGVycy5maWx0ZXIoYSA9PiAhIWEpLmZpbmQoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgYS5nZXRJbihbXCJjYWxsX3ByaWNlXCIsIFwicXVvdGVcIiwgXCJhc3NldF9pZFwiXSkgPT09XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1b3RlX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSAhIWN1cnJlbnRQb3NpdGlvblxuICAgICAgICAgICAgICAgID8gY3VycmVudFBvc2l0aW9uLnRvSlMoKVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZGVidDogbnVsbFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFBvc2l0aW9uO1xuICAgIH1cblxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAxIC9cbiAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nX2Fzc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVfYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2V0dGxlbWVudF9wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVfYXNzZXRcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbENvbGxhdGVyYWxSYXRpbyhwcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHByb3BzKSA/IDEgOiAwO1xuICAgIH1cblxuICAgIF9nZXRDb2xsYXRlcmFsUmF0aW8oZGVidCwgY29sbGF0ZXJhbCkge1xuICAgICAgICByZXR1cm4gY29sbGF0ZXJhbCAvIChkZWJ0IC8gdGhpcy5fZ2V0RmVlZFByaWNlKCkpO1xuICAgIH1cblxuICAgIF9pc1ByZWRpY3Rpb25NYXJrZXQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnF1b3RlX2Fzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0pO1xuICAgIH1cblxuICAgIF9zZXRVc2VUYXJnZXRDb2xsYXRlcmFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWw6ICF0aGlzLnN0YXRlLnVzZVRhcmdldENvbGxhdGVyYWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcXVvdGVfYXNzZXQsXG4gICAgICAgICAgICBiaXRhc3NldF9iYWxhbmNlLFxuICAgICAgICAgICAgYmFja2luZ19hc3NldCxcbiAgICAgICAgICAgIGJhY2tpbmdfYmFsYW5jZVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHNob3J0X2Ftb3VudCxcbiAgICAgICAgICAgIGNvbGxhdGVyYWwsXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvLFxuICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8sXG4gICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbixcbiAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWxcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBxdW90ZVByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlX2Fzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdfYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWNvbGxhdGVyYWxfcmF0aW8gfHxcbiAgICAgICAgICAgIGlzTmFOKGNvbGxhdGVyYWxfcmF0aW8pIHx8XG4gICAgICAgICAgICAhKGNvbGxhdGVyYWxfcmF0aW8gPiAwLjAgJiYgY29sbGF0ZXJhbF9yYXRpbyA8IDEwMDAuMClcbiAgICAgICAgKVxuICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbyA9IDA7XG4gICAgICAgIGJpdGFzc2V0X2JhbGFuY2UgPSAhYml0YXNzZXRfYmFsYW5jZVxuICAgICAgICAgICAgPyB7YmFsYW5jZTogMCwgaWQ6IG51bGx9XG4gICAgICAgICAgICA6IGJpdGFzc2V0X2JhbGFuY2UudG9KUygpO1xuICAgICAgICBiYWNraW5nX2JhbGFuY2UgPSAhYmFja2luZ19iYWxhbmNlXG4gICAgICAgICAgICA/IHtiYWxhbmNlOiAwLCBpZDogbnVsbH1cbiAgICAgICAgICAgIDogYmFja2luZ19iYWxhbmNlLnRvSlMoKTtcblxuICAgICAgICBsZXQgY29sbGF0ZXJhbENsYXNzID0gY2xhc3NOYW1lcyhcImZvcm0tZ3JvdXBcIiwge1xuICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogZXJyb3JzLmNvbGxhdGVyYWxfYmFsYW5jZVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNvbGxhdGVyYWxSYXRpb0NsYXNzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgIFwiZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAge1wiaGFzLWVycm9yXCI6IGVycm9ycy5iZWxvd19tYWludGVuYW5jZX0sXG4gICAgICAgICAgICB7XCJoYXMtd2FybmluZ1wiOiBlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2V9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRHluYW1pY2FsbHkgdXBkYXRlIHVzZXIncyByZW1haW5pbmcgY29sbGF0ZXJhbFxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMucHJvcHMpO1xuICAgICAgICBsZXQgYmFja2luZ0JhbGFuY2UgPSBiYWNraW5nX2JhbGFuY2UuaWRcbiAgICAgICAgICAgID8gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFja2luZ19iYWxhbmNlLmlkKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBsZXQgYmFja2luZ0Ftb3VudCA9IGJhY2tpbmdCYWxhbmNlID8gYmFja2luZ0JhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSA6IDA7XG4gICAgICAgIGxldCBjb2xsYXRlcmFsQ2hhbmdlID0gcGFyc2VJbnQoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKiBiYWNraW5nUHJlY2lzaW9uIC1cbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcbiAgICAgICAgICAgIDEwXG4gICAgICAgICk7XG4gICAgICAgIGxldCByZW1haW5pbmdCYWxhbmNlID0gYmFja2luZ0Ftb3VudCAtIGNvbGxhdGVyYWxDaGFuZ2U7XG5cbiAgICAgICAgbGV0IGJpdEFzc2V0QmFsYW5jZVRleHQgPSAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge2JpdGFzc2V0X2JhbGFuY2UuaWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXtiaXRhc3NldF9iYWxhbmNlLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtxdW90ZV9hc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuX3BheURlYnQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5wYXlfbWF4X2RlYnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgICAge2NvbGxhdGVyYWxfcmF0aW8gIT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5fbWF4aW1pemVEZWJ0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnVzZV9tYXhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpc2FibGVkLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcnJvdy5tYXhpbWl6ZV9kZWJ0X3NldF9yYXRpb19zbGlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnVzZV9tYXhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhY2tpbmdCYWxhbmNlVGV4dCA9IChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIgLz46e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7YmFja2luZ19iYWxhbmNlLmlkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZW1haW5pbmdCYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYWNraW5nX2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFja2luZ19hc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuX21heGltaXplQ29sbGF0ZXJhbC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnVzZV9tYXhcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZmVlZF9wcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xuXG4gICAgICAgIGxldCBtYWludGVuYW5jZVJhdGlvID0gdGhpcy5fZ2V0TWFpbnRlbmFuY2VSYXRpbygpO1xuXG4gICAgICAgIGxldCBzcXVlZXplUmF0aW8gPVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZV9hc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgXCJtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIlxuICAgICAgICAgICAgXSkgLyAxMDAwO1xuXG4gICAgICAgIGxldCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLl9pc1ByZWRpY3Rpb25NYXJrZXQodGhpcy5wcm9wcyk7XG5cbiAgICAgICAgbGV0IGlzT3JpZ2luYWxCZWxvd01DUiA9XG4gICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbi5jb2xsYXRlcmFsID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5fZ2V0Q29sbGF0ZXJhbFJhdGlvKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmRlYnQsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uY29sbGF0ZXJhbFxuICAgICAgICAgICAgKSA8IG1haW50ZW5hbmNlUmF0aW87XG5cbiAgICAgICAgY29uc3Qgbm9WYWxpZENvbXBvbmVudCA9IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgdGV4dC1jZW50ZXIgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYm9ycm93Lm5vX3ZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3N5bWJvbD17cXVvdGVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHJlc2V0TW9kYWwgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9pbml0aWFsU3RhdGUodGhpcy5wcm9wcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghaXNQcmVkaWN0aW9uTWFya2V0ICYmIGlzTmFOKGZlZWRfcHJpY2UpKSB7XG4gICAgICAgICAgICBmb290ZXIucHVzaChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQucGVybS5jYW5jZWxcIil9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9vdGVyLnB1c2goXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuX29uU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImJvcnJvdy5hZGp1c3RcIil9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZm9vdGVyLnB1c2goXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJjYW5jZWxcIiBvbkNsaWNrPXtyZXNldE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIndhbGxldC5yZXNldFwiKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImJvcnJvdy50aXRsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X3N5bWJvbDogcXVvdGVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICBmb290ZXI9e2Zvb3Rlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7IWlzUHJlZGljdGlvbk1hcmtldCAmJiBpc05hTihmZWVkX3ByaWNlKSA/IChcbiAgICAgICAgICAgICAgICAgICAgbm9WYWxpZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIHNtYWxsLTEwIHNtYWxsLW9mZnNldC0xIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGlkZV9oZWxwID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudHMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNQcmVkaWN0aW9uTWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQm9ycm93TW9kYWxQcmVkaWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJCb3Jyb3dNb2RhbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ0PXtxdW90ZV9hc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbD17YmFja2luZ19hc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9ycm93ZXI9e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcj17bWFpbnRlbmFuY2VSYXRpb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzT3JpZ2luYWxCZWxvd01DUiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJib3Jyb3cuZXJyb3JzLmJlbG93X2luZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1ByZWRpY3Rpb25NYXJrZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcnJvdy1wcmljZS1mZWVkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib3Jyb3ctcHJpY2UtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmZlZWRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e3F1b3RlX2Fzc2V0LmdldEluKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17cXVvdGVfYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGxlbWVudF9wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFzc2V0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e3F1b3RlX2Fzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9ycm93LXByaWNlLWZlZWRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdG9vbHRpcCBib3Jyb3ctcHJpY2UtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5tYXJnaW5fcHJpY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5zcXVlZXplXCIgLz46Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17cXVvdGVfYXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJjdXJyZW50X2ZlZWRcIiwgXCJzZXR0bGVtZW50X3ByaWNlXCIsIFwiYmFzZVwiLCBcImFtb3VudFwiXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cXVvdGVfYXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJjdXJyZW50X2ZlZWRcIiwgXCJzZXR0bGVtZW50X3ByaWNlXCIsIFwiYmFzZVwiLCBcImFzc2V0X2lkXCJdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiY3VycmVudF9mZWVkXCIsIFwic2V0dGxlbWVudF9wcmljZVwiLCBcInF1b3RlXCIsIFwiYXNzZXRfaWRcIl0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e3NxdWVlemVSYXRpbyAqIHF1b3RlX2Fzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiY3VycmVudF9mZWVkXCIsIFwic2V0dGxlbWVudF9wcmljZVwiLCBcInF1b3RlXCIsIFwiYW1vdW50XCJdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3ctcHJpY2UtZmluYWwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9ycy5iZWxvd19tYWludGVuYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXMtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3JzLmNsb3NlX21haW50ZW5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXMtd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9ycm93LXByaWNlLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS55b3VyX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5uZXdQb3NpdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW50ZW5hbmNlUmF0aW8gKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvcnRfYW1vdW50ICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVQcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtiYWNraW5nX2Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbCAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tpbmdQcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVMb2NrZWRDUi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmxvY2tlZENSXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxvY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVubG9ja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMV81eFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3Nob3J0X2Ftb3VudC50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkJvcnJvd0NoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cXVvdGVfYXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbcXVvdGVfYXNzZXQuZ2V0KFwiaWRcIildfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17Yml0QXNzZXRCYWxhbmNlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbGxhdGVyYWxDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgbGVmdDogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTG9ja2VkQ1IuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZENSXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxvY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVubG9ja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMV81eFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5jb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2NvbGxhdGVyYWwudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25Db2xsYXRlcmFsQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYWNraW5nX2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2JhY2tpbmdfYXNzZXQuZ2V0KFwiaWRcIildfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFja2luZ0JhbGFuY2VUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvbGxhdGVyYWxfYmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5jb2xsYXRlcmFsX2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNQcmVkaWN0aW9uTWFya2V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29sbGF0ZXJhbFJhdGlvQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjMuNXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJib3Jyb3cuY29sbF9yYXRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vblJhdGlvQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMiVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAtMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiODUlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25SYXRpb0NoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sbGF0ZXJhbF9yYXRpb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmJlbG93X21haW50ZW5hbmNlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5jbG9zZV9tYWludGVuYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjg1JVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmJlbG93X21haW50ZW5hbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1ncm91cFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIzLjVyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWh0bWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5xdWVzdGlvbl9jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlVGFyZ2V0Q29sbGF0ZXJhbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMWVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFVzZVRhcmdldENvbGxhdGVyYWwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5lbmFibGVfdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05hTihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uVGFyZ2V0UmF0aW9DaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC0xMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjg1JVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uVGFyZ2V0UmF0aW9DaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05hTihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZXRVc2VUYXJnZXRDb2xsYXRlcmFsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LmVuYWJsZV90YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cbkJvcnJvd01vZGFsQ29udGVudCA9IEJpbmRUb0NoYWluU3RhdGUoQm9ycm93TW9kYWxDb250ZW50KTtcblxuLyogVGhpcyB3cmFwcGVyIGNsYXNzIGFwcGVhcnMgdG8gYmUgbmVjZXNzYXJ5IGJlY2F1c2UgdGhlIGRlY29yYXRvciBlYXRzIHRoZSBzaG93IG1ldGhvZCBmcm9tIHJlZnMgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzbWFsbFNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzbWFsbFNjcmVlbjogd2luZG93LmlubmVySGVpZ2h0IDw9IDgwMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cXVvdGVfYXNzZXQsIGJhY2tpbmdfYXNzZXQsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGFjY291bnRCYWxhbmNlID0gYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgIGxldCBjb3JlQmFsYW5jZSwgYml0QXNzZXRCYWxhbmNlO1xuXG4gICAgICAgIGlmIChhY2NvdW50QmFsYW5jZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gYWNjb3VudEJhbGFuY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09IGJhY2tpbmdfYXNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29yZUJhbGFuY2UgPSBhY2NvdW50QmFsYW5jZVtpZF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSBxdW90ZV9hc3NldCkge1xuICAgICAgICAgICAgICAgICAgICBiaXRBc3NldEJhbGFuY2UgPSBhY2NvdW50QmFsYW5jZVtpZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCb3Jyb3dNb2RhbENvbnRlbnRcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLnZpc2libGV9XG4gICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3RoaXMucHJvcHMuc2hvd01vZGFsfVxuICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtxdW90ZV9hc3NldH1cbiAgICAgICAgICAgICAgICBjYWxsX29yZGVycz17YWNjb3VudC5nZXQoXCJjYWxsX29yZGVyc1wiLCBMaXN0KCkpLnRvTGlzdCgpfVxuICAgICAgICAgICAgICAgIGhhc0NhbGxPcmRlcnM9e1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcImNhbGxfb3JkZXJzXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiY2FsbF9vcmRlcnNcIikuc2l6ZSA+IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9kYWxJZD17dGhpcy5wcm9wcy5tb2RhbElkfVxuICAgICAgICAgICAgICAgIGJpdGFzc2V0X2JhbGFuY2U9e2JpdEFzc2V0QmFsYW5jZX1cbiAgICAgICAgICAgICAgICBiYWNraW5nX2JhbGFuY2U9e2NvcmVCYWxhbmNlfVxuICAgICAgICAgICAgICAgIGJhY2tpbmdfYXNzZXQ9e2JhY2tpbmdfYXNzZXR9XG4gICAgICAgICAgICAgICAgaGlkZV9oZWxwPXt0aGlzLnN0YXRlLnNtYWxsU2NyZWVufVxuICAgICAgICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IEJhc2VNb2RhbCBmcm9tIFwiLi4vTW9kYWwvQmFzZU1vZGFsXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7XG4gICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzLFxuICAgIHZhbGlkYXRlQWRkcmVzcyxcbiAgICBXaXRoZHJhd0FkZHJlc3NlcyxcbiAgICBnZXREZXBvc2l0QWRkcmVzc1xufSBmcm9tIFwiY29tbW9uL2dhdGV3YXlNZXRob2RzXCI7XG5pbXBvcnQgQ29weUJ1dHRvbiBmcm9tIFwiLi4vVXRpbGl0eS9Db3B5QnV0dG9uXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHtjaGVja0ZlZVN0YXR1c0FzeW5jLCBjaGVja0JhbGFuY2V9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7RGVjaW1hbENoZWNrZXJ9IGZyb20gXCIuLi9VdGlsaXR5L0RlY2ltYWxDaGVja2VyXCI7XG5pbXBvcnQge29wZW5sZWRnZXJBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xuaW1wb3J0IHtnZXRXYWxsZXROYW1lfSBmcm9tIFwiYnJhbmRpbmdcIjtcbmltcG9ydCB7TW9kYWx9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgRGVwb3NpdFdpdGhkcmF3Q29udGVudCBleHRlbmRzIERlY2ltYWxDaGVja2VyIHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBiYWxhbmNlOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LFxuICAgICAgICBzZW5kZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgY29yZUFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb3JlQXNzZXQ6IFwiMS4zLjBcIixcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvQWRkcmVzczogV2l0aGRyYXdBZGRyZXNzZXMuZ2V0TGFzdChwcm9wcy53YWxsZXRUeXBlKSxcbiAgICAgICAgICAgIHdpdGhkcmF3VmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBhbW91bnRFcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHN5bWJvbDogcHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgdG9fd2l0aGRyYXc6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgZmVlU3RhdHVzOiB7fSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZW1wdHlBZGRyZXNzRGVwb3NpdDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModGhpcy5zdGF0ZS50b0FkZHJlc3MsIHByb3BzKTtcblxuICAgICAgICB0aGlzLmFkZERlcG9zaXRBZGRyZXNzID0gdGhpcy5hZGREZXBvc2l0QWRkcmVzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cyA9IHRoaXMuX2NoZWNrRmVlU3RhdHVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZSA9IHRoaXMuX2NoZWNrQmFsYW5jZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9nZXRDdXJyZW50QmFsYW5jZSA9IHRoaXMuX2dldEN1cnJlbnRCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2dldEZlZSA9IHRoaXMuX2dldEZlZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl91cGRhdGVGZWUgPSBkZWJvdW5jZSh0aGlzLl91cGRhdGVGZWUuYmluZCh0aGlzKSwgMjUwKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldERlcG9zaXRBZGRyZXNzKCk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBucC5hc3NldCAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCAmJlxuICAgICAgICAgICAgbnAuYXNzZXQuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9fd2l0aGRyYXc6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogbnAuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IG5wLmFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgZ2F0ZUZlZTogbnAuYXNzZXQuZ2V0KFwiZ2F0ZUZlZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlQWNjb3VudDogbnAuYXNzZXQuZ2V0KFwiaW50ZXJtZWRpYXRlQWNjb3VudFwiKSxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBucC5hc3NldC5nZXQoXCJzeW1ib2xcIiksXG4gICAgICAgICAgICAgICAgICAgIG1lbW86IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3VmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9BZGRyZXNzOiBXaXRoZHJhd0FkZHJlc3Nlcy5nZXRMYXN0KG5wLndhbGxldFR5cGUpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXREZXBvc2l0QWRkcmVzc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXREZXBvc2l0QWRkcmVzcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmJhY2tpbmdDb2luVHlwZSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3MgPSBnZXREZXBvc2l0QWRkcmVzcyh7XG4gICAgICAgICAgICBjb2luOiBgb3Blbi4ke3RoaXMucHJvcHMuYmFja2luZ0NvaW5UeXBlLnRvTG93ZXJDYXNlKCl9YCxcbiAgICAgICAgICAgIGFjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFyZWNlaXZlX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIHJlcXVlc3REZXBvc2l0QWRkcmVzcyh0aGlzLl9nZXREZXBvc2l0T2JqZWN0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXREZXBvc2l0T2JqZWN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXRDb2luVHlwZTogdGhpcy5wcm9wcy5iYWNraW5nQ29pblR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIG91dHB1dENvaW5UeXBlOiB0aGlzLnByb3BzLnN5bWJvbC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgb3V0cHV0QWRkcmVzczogdGhpcy5wcm9wcy5zZW5kZXIuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHN0YXRlQ2FsbGJhY2s6IHRoaXMuYWRkRGVwb3NpdEFkZHJlc3NcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3NMb2FkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBlbXB0eUFkZHJlc3NEZXBvc2l0OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdERlcG9zaXRBZGRyZXNzKHRoaXMuX2dldERlcG9zaXRPYmplY3QoKSk7XG4gICAgfVxuXG4gICAgYWRkRGVwb3NpdEFkZHJlc3MocmVjZWl2ZV9hZGRyZXNzKSB7XG4gICAgICAgIGlmIChyZWNlaXZlX2FkZHJlc3MuZXJyb3IpIHtcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5lcnJvci5tZXNzYWdlID09PSBcIm5vX2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgID8gdGhpcy5zZXRTdGF0ZSh7ZW1wdHlBZGRyZXNzRGVwb3NpdDogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHtlbXB0eUFkZHJlc3NEZXBvc2l0OiBmYWxzZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIFJlYWN0VG9vbHRpcC5yZWJ1aWxkKCk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvX3dpdGhkcmF3LmdldEFtb3VudCgpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW1vdW50RXJyb3I6IFwidHJhbnNmZXIuZXJyb3JzLnBvc1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pbnRlcm1lZGlhdGVBY2NvdW50KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmVlID0gdGhpcy5fZ2V0RmVlKCk7XG4gICAgICAgIGNvbnN0IGdhdGVGZWUgPSB0aGlzLl9nZXRHYXRlRmVlKCk7XG5cbiAgICAgICAgbGV0IHNlbmRBbW91bnQgPSB0aGlzLnN0YXRlLnRvX3dpdGhkcmF3LmNsb25lKCk7XG5cbiAgICAgICAgbGV0IGJhbGFuY2VBbW91bnQgPSBzZW5kQW1vdW50LmNsb25lKFxuICAgICAgICAgICAgdGhpcy5fZ2V0Q3VycmVudEJhbGFuY2UoKS5nZXQoXCJiYWxhbmNlXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgc2VuZEFtb3VudC5wbHVzKGdhdGVGZWUpO1xuXG4gICAgICAgIC8qIEluc3VmZmljaWVudCBiYWxhbmNlICovXG4gICAgICAgIGlmIChiYWxhbmNlQW1vdW50Lmx0KHNlbmRBbW91bnQpKSB7XG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBvcmlnaW5hbGx5IGVudGVyZWQgYW1vdW50XG4gICAgICAgICAgICBzZW5kQW1vdW50ID0gdGhpcy5zdGF0ZS50b193aXRoZHJhdy5jbG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgQWNjb3VudEFjdGlvbnMudHJhbnNmZXIoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRlci5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW50ZXJtZWRpYXRlQWNjb3VudCxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG9fd2l0aGRyYXcuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvX3dpdGhkcmF3LmFzc2V0X2lkLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQ29pblR5cGUudG9Mb3dlckNhc2UoKSArXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9BZGRyZXNzICtcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5tZW1vXG4gICAgICAgICAgICAgICAgICAgID8gXCI6XCIgKyBuZXcgQnVmZmVyKHRoaXMuc3RhdGUubWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIpLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGZlZS5hc3NldF9pZFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF91cGRhdGVBbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGZlZUFtb3VudCA9IHRoaXMuX2dldEZlZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50QmFsYW5jZSA9IHRoaXMuX2dldEN1cnJlbnRCYWxhbmNlKCk7XG5cbiAgICAgICAgbGV0IHRvdGFsID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogY3VycmVudEJhbGFuY2UgPyBjdXJyZW50QmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpIDogMCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdWJ0cmFjdCB0aGUgZmVlIGlmIGl0IGlzIHVzaW5nIHRoZSBzYW1lIGFzc2V0XG4gICAgICAgIGlmICh0b3RhbC5hc3NldF9pZCA9PT0gZmVlQW1vdW50LmFzc2V0X2lkKSB7XG4gICAgICAgICAgICB0b3RhbC5taW51cyhmZWVBbW91bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZS50b193aXRoZHJhdy5zZXRBbW91bnQoe3NhdHM6IHRvdGFsLmdldEFtb3VudCgpfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdWYWx1ZTogdG90YWwuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgYW1vdW50RXJyb3I6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfY2hlY2tGZWVTdGF0dXMoYWNjb3VudCA9IHRoaXMucHJvcHMuc2VuZGVyKSB7XG4gICAgICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IFtcIjEuMy4wXCIsIHRoaXMuc3RhdGUudG9fd2l0aGRyYXcuYXNzZXRfaWRdO1xuICAgICAgICBsZXQgZmVlU3RhdHVzID0ge307XG4gICAgICAgIGxldCBwID0gW107XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgcC5wdXNoKFxuICAgICAgICAgICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIGZlZUlEOiBhLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdDb2luVHlwZS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b0FkZHJlc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW8gPyBcIjpcIiArIHRoaXMuc3RhdGUubWVtbyA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFByb21pc2UuYWxsKHApXG4gICAgICAgICAgICAudGhlbihzdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzW2FdID0gc3RhdHVzW2lkeF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyh0aGlzLnN0YXRlLmZlZVN0YXR1cywgZmVlU3RhdHVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1c1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUZlZShmZWVfYXNzZXRfaWQgPSB0aGlzLnN0YXRlLmZlZV9hc3NldF9pZCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc2VuZGVyKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICBhY2NvdW50SUQ6IHRoaXMucHJvcHMuc2VuZGVyLmdldChcImlkXCIpLFxuICAgICAgICAgICAgZmVlSUQ6IGZlZV9hc3NldF9pZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdDb2luVHlwZS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvQWRkcmVzcyArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1lbW8gPyBcIjpcIiArIHRoaXMuc3RhdGUubWVtbyA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKHtmZWUsIGhhc0JhbGFuY2UsIGhhc1Bvb2xCYWxhbmNlfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudDogZmVlLFxuICAgICAgICAgICAgICAgICAgICBoYXNCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBoYXNQb29sQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tGZWVTdGF0dXNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRDdXJyZW50QmFsYW5jZSgpIHtcbiAgICAgICAgbGV0IGJhbGFuY2VzID0gdGhpcy5wcm9wcy5iYWxhbmNlXG4gICAgICAgICAgICA/IFt0aGlzLnByb3BzLmJhbGFuY2VdXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuYmFsYW5jZXM7XG5cbiAgICAgICAgcmV0dXJuICEhYmFsYW5jZXNcbiAgICAgICAgICAgID8gYmFsYW5jZXMuZmluZChiID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgYiAmJiBiLmdldChcImFzc2V0X3R5cGVcIikgPT09IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgfVxuXG4gICAgX2NoZWNrQmFsYW5jZSgpIHtcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudCwgdG9fd2l0aGRyYXd9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSB0aGlzLl9nZXRDdXJyZW50QmFsYW5jZSgpO1xuICAgICAgICBpZiAoIWJhbGFuY2UgfHwgIWZlZUFtb3VudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBoYXNCYWxhbmNlID0gY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgdG9fd2l0aGRyYXcuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIHRoaXMuX2dldEZlZSgpLFxuICAgICAgICAgICAgYmFsYW5jZSxcbiAgICAgICAgICAgIHRoaXMuX2dldEdhdGVGZWUoKVxuICAgICAgICApO1xuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgIT09ICFoYXNCYWxhbmNlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xuXG4gICAgICAgIHJldHVybiBoYXNCYWxhbmNlO1xuICAgIH1cblxuICAgIF9nZXRGZWUoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRGZWUgPSB7XG4gICAgICAgICAgICBnZXRBbW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnN0YXRlLmZlZV9hc3NldF9pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5mZWVTdGF0dXMgfHwgIXRoaXMuc3RhdGUuZmVlQW1vdW50KSByZXR1cm4gZGVmYXVsdEZlZTtcblxuICAgICAgICBjb25zdCBjb3JlU3RhdHVzID0gdGhpcy5zdGF0ZS5mZWVTdGF0dXNbXCIxLjMuMFwiXTtcbiAgICAgICAgY29uc3Qgd2l0aGRyYXdBc3NldFN0YXR1cyA9IHRoaXMuc3RhdGUuZmVlU3RhdHVzW1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b193aXRoZHJhdy5hc3NldF9pZFxuICAgICAgICBdO1xuICAgICAgICAvLyBVc2UgY29yZSBhc3NldCB0byBwYXkgdGhlIGZlZXMgaWYgcHJlc2VudCBhbmQgYmFsYW5jZSBpcyBzdWZmaWNpZW50IHNpbmNlIGl0J3MgY2hlYXBlc3RcbiAgICAgICAgaWYgKGNvcmVTdGF0dXMgJiYgY29yZVN0YXR1cy5oYXNCYWxhbmNlKSByZXR1cm4gY29yZVN0YXR1cy5mZWU7XG4gICAgICAgIC8vIFVzZSBzYW1lIGFzc2V0IGFzIHdpdGhkcmF3IGlmIG5vdFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb3JlU3RhdHVzICYmXG4gICAgICAgICAgICAhY29yZVN0YXR1cy5oYXNCYWxhbmNlICYmXG4gICAgICAgICAgICB3aXRoZHJhd0Fzc2V0U3RhdHVzICYmXG4gICAgICAgICAgICB3aXRoZHJhd0Fzc2V0U3RhdHVzLmhhc0JhbGFuY2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aGRyYXdBc3NldFN0YXR1cy5mZWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmVTdGF0dXMgPyBjb3JlU3RhdHVzLmZlZSA6IGRlZmF1bHRGZWU7XG4gICAgfVxuXG4gICAgX29uSW5wdXRBbW91bnQoZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b193aXRoZHJhdy5zZXRBbW91bnQoe1xuICAgICAgICAgICAgICAgIHJlYWw6IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUgfHwgMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3VmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnRFcnJvcjogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnI6XCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25JbnB1dFRvKGUpIHtcbiAgICAgICAgbGV0IHRvQWRkcmVzcyA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgICAgICB3aXRoZHJhd19hZGRyZXNzX3NlbGVjdGVkOiB0b0FkZHJlc3MsXG4gICAgICAgICAgICB2YWxpZEFkZHJlc3M6IG51bGwsXG4gICAgICAgICAgICB0b0FkZHJlc3M6IHRvQWRkcmVzc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl92YWxpZGF0ZUFkZHJlc3ModG9BZGRyZXNzKTtcbiAgICB9XG5cbiAgICBfb25NZW1vQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IGUudGFyZ2V0LnZhbHVlfSwgdGhpcy5fdXBkYXRlRmVlKTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVBZGRyZXNzKGFkZHJlc3MsIHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB2YWxpZGF0ZUFkZHJlc3Moe1xuICAgICAgICAgICAgdXJsOiBvcGVubGVkZ2VyQVBJcy5CQVNFLFxuICAgICAgICAgICAgd2FsbGV0VHlwZTogcHJvcHMud2FsbGV0VHlwZSxcbiAgICAgICAgICAgIG5ld0FkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGlzVmFsaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvQWRkcmVzcyA9PT0gYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3NfY2hlY2tfaW5fcHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRBZGRyZXNzOiAhIWlzVmFsaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHZhbGlkYXRpbmcgYWRkcmVzczpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vcGVuUmVnaXN0cmFyU2l0ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG5ld1duZCA9IHdpbmRvdy5vcGVuKFNldHRpbmdzU3RvcmUuc2l0ZV9yZWdpc3RyLCBcIl9ibGFua1wiKTtcbiAgICAgICAgbmV3V25kLm9wZW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgX2dldEdhdGVGZWUoKSB7XG4gICAgICAgIGNvbnN0IHtnYXRlRmVlLCBhc3NldH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIHJlYWw6IHBhcnNlRmxvYXQoZ2F0ZUZlZSA/IGdhdGVGZWUucmVwbGFjZShcIixcIiwgXCJcIikgOiAwKSxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZW5kZXJXaXRoZHJhdygpIHtcbiAgICAgICAgY29uc3Qge2Ftb3VudEVycm9yfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWV9ID0gdXRpbHMucmVwbGFjZU5hbWUodGhpcy5wcm9wcy5hc3NldCk7XG4gICAgICAgIGxldCB0YWJJbmRleCA9IDE7XG4gICAgICAgIGNvbnN0IHtzdXBwb3J0c01lbW9zfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5maWF0TW9kYWwpe1xuICAgICAgICAvLyAgICAgaWYofnRoaXMucHJvcHMuZmlhdE1vZGFsLmluZGV4T2YoJ2NhbkZpYXRXaXRoJykpe1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoPFdpdGhkcmF3RmlhdE9wZW5MZWRnZXJcbiAgICAgICAgLy8gICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50fVxuICAgICAgICAvLyAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD1cIm9wZW5sZWRnZXItZmlhdFwiXG4gICAgICAgIC8vICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpLnNwbGl0KCdPUEVOLicpLmpvaW4oJycpfVxuICAgICAgICAvLyAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgLy8gICAgICAgICAgICAgcnBjX3VybD17U2V0dGluZ3NTdG9yZS5ycGNfdXJsfVxuICAgICAgICAvLyAgICAgICAgIC8+KTtcbiAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoPHA+Q2xpY2sgPGEgaHJlZj0nIycgb25DbGljaz17dGhpcy5fb3BlblJlZ2lzdHJhclNpdGV9ID5oZXJlPC9hPiB0byByZWdpc3RlciBmb3IgZGVwb3NpdHMgPC9wPik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50RmVlID0gdGhpcy5fZ2V0RmVlKCk7XG4gICAgICAgIGNvbnN0IGdhdGVGZWUgPSB0aGlzLl9nZXRHYXRlRmVlKCk7XG4gICAgICAgIGNvbnN0IGZlZVN0YXR1cyA9IHRoaXMuc3RhdGUuZmVlU3RhdHVzW2N1cnJlbnRGZWUuYXNzZXRfaWRdO1xuICAgICAgICBjb25zdCBmZWVBc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoY3VycmVudEZlZS5hc3NldF9pZCk7XG5cbiAgICAgICAgY29uc3QgZGlzYWJsZVN1Ym1pdCA9XG4gICAgICAgICAgICAoZmVlU3RhdHVzICYmICFmZWVTdGF0dXMuaGFzQmFsYW5jZSkgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS50b0FkZHJlc3MgfHxcbiAgICAgICAgICAgICF0aGlzLnN0YXRlLndpdGhkcmF3VmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LndpdGhkcmF3X2Z1bmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJDdXJyZW50QmFsYW5jZSgpfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwud2l0aGRyYXcuYW1vdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS53aXRoZHJhd1ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0QW1vdW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnthc3NldE5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHthbW91bnRFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXthbW91bnRFcnJvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNmZXIuZmVlXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudEZlZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVBc3NldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2ZlZUFzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7ZmVlU3RhdHVzICYmICFmZWVTdGF0dXMuaGFzQmFsYW5jZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2F0ZXdheS5mZWVcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnYXRlRmVlLmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtmZWVTdGF0dXMgJiYgIWZlZVN0YXR1cy5oYXNCYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3Igbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC53aXRoZHJhdy5hZGRyZXNzXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdhdGV3YXkud2l0aGRyYXdfcGxhY2Vob2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0OiBhc3NldE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG9BZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0VG8uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLndpdGhkcmF3X2FkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXQ6IGFzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS52YWxpZEFkZHJlc3MgJiYgdGhpcy5zdGF0ZS50b0FkZHJlc3MgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy1lcnJvclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnZhbGlkX2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luX3R5cGU9e2Fzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3N1cHBvcnRzTWVtb3MgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2ltcGxlVHJhZGVfX3dpdGhkcmF3LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNmZXIubWVtb1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVtb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbk1lbW9DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLnZhbGlkQWRkcmVzcyAmJiB0aGlzLnN0YXRlLnRvQWRkcmVzcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhcy1lcnJvclwiIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudmFsaWRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luX3R5cGU9e2Fzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIFNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIgKyAoZGlzYWJsZVN1Ym1pdCA/IFwiIGRpc2FibGVkXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkud2l0aGRyYXdfbm93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyRGVwb3NpdCgpIHtcbiAgICAgICAgY29uc3Qge3JlY2VpdmVfYWRkcmVzcywgbG9hZGluZywgZW1wdHlBZGRyZXNzRGVwb3NpdH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7bmFtZTogYXNzZXROYW1lfSA9IHV0aWxzLnJlcGxhY2VOYW1lKHRoaXMucHJvcHMuYXNzZXQpO1xuICAgICAgICBjb25zdCBoYXNNZW1vID1cbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcyAmJlxuICAgICAgICAgICAgXCJtZW1vXCIgaW4gcmVjZWl2ZV9hZGRyZXNzICYmXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MubWVtbztcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbHVlID0gKHJlY2VpdmVfYWRkcmVzcyAmJiByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcykgfHwgXCJcIjtcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcblxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLmZpYXRNb2RhbCl7XG4gICAgICAgIC8vICAgICBpZih+dGhpcy5wcm9wcy5maWF0TW9kYWwuaW5kZXhPZignY2FuRmlhdERlcCcpKXtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gKDxEZXBvc2l0RmlhdE9wZW5MZWRnZXJcbiAgICAgICAgLy8gICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5hY2NvdW50fVxuICAgICAgICAvLyAgICAgICAgICAgICBpc3N1ZXJfYWNjb3VudD1cIm9wZW5sZWRnZXItZmlhdFwiXG4gICAgICAgIC8vICAgICAgICAgICAgIGRlcG9zaXRfYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpLnNwbGl0KCdPUEVOLicpLmpvaW4oJycpfVxuICAgICAgICAvLyAgICAgICAgICAgICByZWNlaXZlX2Fzc2V0PXt0aGlzLnByb3BzLmFzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgLy8gICAgICAgICAgICAgcnBjX3VybD17U2V0dGluZ3NTdG9yZS5ycGNfdXJsfVxuICAgICAgICAvLyAgICAgICAgIC8+KTtcbiAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAoPHA+Q2xpY2sgPGEgaHJlZj0nIycgb25DbGljaz17dGhpcy5fb3BlblJlZ2lzdHJhclNpdGV9ID5oZXJlPC9hPiB0byByZWdpc3RlciBmb3IgZGVwb3NpdHMgPC9wPik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXshYWRkcmVzc1ZhbHVlID8gXCJuby1vdmVyZmxvd1wiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2FmZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuYWRkX2Z1bmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuc2VuZGVyLmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJDdXJyZW50QmFsYW5jZSgpfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW1wbGVUcmFkZV9fd2l0aGRyYXctcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLmRlcG9zaXRfdGlwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlbHAtdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZnpfMTIgbGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF9ub3RpY2VfZGVsYXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICB7IWFkZHJlc3NWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbXB0eUFkZHJlc3NEZXBvc2l0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5LnBsZWFzZV9nZW5lcmF0ZV9hZGRyZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b24gdGV4dD17YWRkcmVzc1ZhbHVlfSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7aGFzTWVtbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zZmVyLm1lbW9cIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weUJ1dHRvbiB0ZXh0PXtyZWNlaXZlX2FkZHJlc3MubWVtb30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICB7cmVjZWl2ZV9hZGRyZXNzICYmIHJlY2VpdmVfYWRkcmVzcy5lcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFzLWVycm9yXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlaXZlX2FkZHJlc3MuZXJyb3IubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwIFNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc3Bpbm5lci1idXR0b24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVxdWVzdERlcG9zaXRBZGRyZXNzTG9hZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cImNpcmNsZVwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZ2VuZXJhdGVfbmV3XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyQ3VycmVudEJhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWV9ID0gdXRpbHMucmVwbGFjZU5hbWUodGhpcy5wcm9wcy5hc3NldCk7XG4gICAgICAgIGNvbnN0IGlzRGVwb3NpdCA9IHRoaXMucHJvcHMuYWN0aW9uID09PSBcImRlcG9zaXRcIjtcblxuICAgICAgICBsZXQgY3VycmVudEJhbGFuY2UgPSB0aGlzLl9nZXRDdXJyZW50QmFsYW5jZSgpO1xuXG4gICAgICAgIGxldCBhc3NldCA9IGN1cnJlbnRCYWxhbmNlXG4gICAgICAgICAgICA/IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICBhc3NldF9pZDogY3VycmVudEJhbGFuY2UuZ2V0KFwiYXNzZXRfdHlwZVwiKSxcbiAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICBhbW91bnQ6IGN1cnJlbnRCYWxhbmNlLmdldChcImJhbGFuY2VcIilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAvLyBURU1QIC8vXG4gICAgICAgIC8vIGFzc2V0ID0gbmV3IEFzc2V0KHtcbiAgICAgICAgLy8gICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAvLyAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgLy8gICAgIGFtb3VudDogNjU2NTQ2NDVcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgY29uc3QgYXBwbHlCYWxhbmNlQnV0dG9uID0gaXNEZXBvc2l0ID8gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiwgYm9yZGVyTGVmdDogXCJub25lXCJ9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthc3NldE5hbWV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC53aXRoZHJhd19mdWxsXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsIGJvcmRlckxlZnQ6IFwibm9uZVwifX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl91cGRhdGVBbW91bnQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgIWN1cnJlbnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VJbnQoY3VycmVudEJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSwgMTApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xpcHB5XCIgdGl0bGU9XCJpY29ucy5jbGlwcHkud2l0aGRyYXdfZnVsbFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMXJlbVwifX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tmb250U2l6ZTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdhdGV3YXkuYmFsYW5jZV9hc3NldFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXshYXNzZXQgPyAwIDogYXNzZXQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FwcGx5QmFsYW5jZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXQsIGFjdGlvbn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgaXNEZXBvc2l0ID0gYWN0aW9uID09PSBcImRlcG9zaXRcIjtcblxuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWV9ID0gdXRpbHMucmVwbGFjZU5hbWUoYXNzZXQpO1xuXG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5wcm9wcy5pc0Rvd24gPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHh0bGFiZWwgY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudW5hdmFpbGFibGVfT1BFTlwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6ICF0aGlzLnByb3BzLmlzQXZhaWxhYmxlID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnVuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaXNEZXBvc2l0ID8gKFxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyRGVwb3NpdCgpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJXaXRoZHJhdygpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2ltcGxlVHJhZGVfX21vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjJyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIycmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5EZXBvc2l0V2l0aGRyYXdDb250ZW50ID0gQmluZFRvQ2hhaW5TdGF0ZShEZXBvc2l0V2l0aGRyYXdDb250ZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlRGVwb3NpdFdpdGhkcmF3TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7b3BlbjogZmFsc2V9O1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9LCAoKSA9PiB7XG4gICAgICAgICAgICBaZkFwaS5wdWJsaXNoKHRoaXMucHJvcHMubW9kYWxJZCwgXCJvcGVuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaXNEZXBvc2l0ID0gdGhpcy5wcm9wcy5hY3Rpb24gPT09IFwiZGVwb3NpdFwiO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gaXNEZXBvc2l0XG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdhdGV3YXkuZGVwb3NpdFwiKVxuICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC53aXRoZHJhdy5zdWJtaXRcIik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBmb290ZXI9e1tdfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVzdFwiXG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNsb3NlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5tb2RhbElkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZpc2libGUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxEZXBvc2l0V2l0aGRyYXdDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtcbiAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3MsXG4gICAgdmFsaWRhdGVBZGRyZXNzLFxuICAgIFdpdGhkcmF3QWRkcmVzc2VzLFxuICAgIGdldERlcG9zaXRMaW1pdCxcbiAgICBlc3RpbWF0ZU91dHB1dCxcbiAgICBlc3RpbWF0ZUlucHV0XG59IGZyb20gXCJjb21tb24vZ2F0ZXdheU1ldGhvZHNcIjtcbmltcG9ydCBCbG9ja1RyYWRlc0RlcG9zaXRBZGRyZXNzQ2FjaGUgZnJvbSBcImNvbW1vbi9CbG9ja1RyYWRlc0RlcG9zaXRBZGRyZXNzQ2FjaGVcIjtcbmltcG9ydCBDb3B5QnV0dG9uIGZyb20gXCIuLi9VdGlsaXR5L0NvcHlCdXR0b25cIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQge2Jsb2NrVHJhZGVzQVBJc30gZnJvbSBcImFwaS9hcGlDb25maWdcIjtcbmltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCIuLi9VdGlsaXR5L0Zsb2F0aW5nRHJvcGRvd25cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlLnJlYWN0XCI7XG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuLy8gaW1wb3J0IERlcG9zaXRGaWF0T3BlbkxlZGdlciBmcm9tIFwiY29tcG9uZW50cy9EZXBvc2l0V2l0aGRyYXcvb3BlbmxlZGdlci9EZXBvc2l0RmlhdE9wZW5MZWRnZXJcIjtcbi8vIGltcG9ydCBXaXRoZHJhd0ZpYXRPcGVuTGVkZ2VyIGZyb20gXCJjb21wb25lbnRzL0RlcG9zaXRXaXRoZHJhdy9vcGVubGVkZ2VyL1dpdGhkcmF3RmlhdE9wZW5MZWRnZXJcIjtcblxuY2xhc3MgU2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzZW5kZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogMCxcbiAgICAgICAgICAgIGRlcG9zaXRMaW1pdDogMCxcbiAgICAgICAgICAgIHNlbmRBbW91bnQ6IDAsXG4gICAgICAgICAgICB0b0FkZHJlc3M6IFdpdGhkcmF3QWRkcmVzc2VzLmdldExhc3QocHJvcHMud2FsbGV0VHlwZSksXG4gICAgICAgICAgICB3aXRoZHJhd1ZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgYW1vdW50RXJyb3I6IG51bGwsXG4gICAgICAgICAgICBpbnB1dEFtb3VudDogMCxcbiAgICAgICAgICAgIHJlY2VpdmVMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxpbWl0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGFwaUVycm9yOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlQWRkcmVzcyh0aGlzLnN0YXRlLnRvQWRkcmVzcywgcHJvcHMpO1xuXG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlID0gbmV3IEJsb2NrVHJhZGVzRGVwb3NpdEFkZHJlc3NDYWNoZSgpO1xuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXREZXBvc2l0QWRkcmVzcygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXREZXBvc2l0TGltaXQoKTtcbiAgICAgICAgdGhpcy5fZXN0aW1hdGVPdXRwdXQoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5wLmlucHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMuaW5wdXRDb2luVHlwZSB8fFxuICAgICAgICAgICAgbnAub3V0cHV0Q29pblR5cGUgIT09IHRoaXMucHJvcHMub3V0cHV0Q29pblR5cGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9nZXREZXBvc2l0TGltaXQobnApO1xuICAgICAgICAgICAgdGhpcy5fZXN0aW1hdGVPdXRwdXQobnApO1xuICAgICAgICAgICAgdGhpcy5fZ2V0RGVwb3NpdEFkZHJlc3MobnApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbnAuaW5wdXRDb2luVHlwZSAhPT0gdGhpcy5wcm9wcy5pbnB1dENvaW5UeXBlIHx8XG4gICAgICAgICAgICBucC5vdXRwdXRDb2luVHlwZSAhPT0gdGhpcy5wcm9wcy5vdXRwdXRDb2luVHlwZSB8fFxuICAgICAgICAgICAgbnAuc2VuZGVyICE9PSB0aGlzLnByb3BzLnNlbmRlciB8fFxuICAgICAgICAgICAgbnAuYXNzZXQgIT09IHRoaXMucHJvcHMuYXNzZXQgfHxcbiAgICAgICAgICAgIG5wLmlzQXZhaWxhYmxlICE9PSB0aGlzLnByb3BzLmlzQXZhaWxhYmxlIHx8XG4gICAgICAgICAgICBucC5pc0Rvd24gIT09IHRoaXMucHJvcHMuaXNEb3duIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnMsIHRoaXMuc3RhdGUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldERlcG9zaXRMaW1pdChwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGltaXRMb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgIGdldERlcG9zaXRMaW1pdChwcm9wcy5pbnB1dENvaW5UeXBlLCBwcm9wcy5vdXRwdXRDb2luVHlwZSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRlcG9zaXRMaW1pdDogcmVzLmRlcG9zaXRMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgbGltaXRMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVwb3NpdCBsaW1pdCBlcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGVwb3NpdExpbWl0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdExvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25BbW91bnRDaGFuZ2UodmFsdWUsIGUpIHtcbiAgICAgICAgY29uc3QgcmVnZXhwX251bWVyYWwgPSBuZXcgUmVnRXhwKC9bWzpkaWdpdDpdXS8pO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICAvLyBFbnN1cmUgaW5wdXQgaXMgdmFsaWRcbiAgICAgICAgaWYgKCFyZWdleHBfbnVtZXJhbC50ZXN0KHRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2csIFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2F0Y2ggaW5pdGlhbCBkZWNpbWFsIGlucHV0XG4gICAgICAgIGlmICh0YXJnZXQudmFsdWUuY2hhckF0KDApID09IFwiLlwiKSB7XG4gICAgICAgICAgICB0YXJnZXQudmFsdWUgPSBcIjAuXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYXRjaCBkb3VibGUgZGVjaW1hbCBhbmQgcmVtb3ZlIGlmIGludmFsaWRcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGFyZ2V0LnZhbHVlLmNoYXJBdCh0YXJnZXQudmFsdWUubGVuZ3RoKSAhPSB0YXJnZXQudmFsdWUuc2VhcmNoKFwiLlwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQudmFsdWUgPSB1dGlscy5saW1pdEJ5UHJlY2lzaW9uKHRhcmdldC52YWx1ZSwgOCk7XG5cbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcImlucHV0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAge2lucHV0QW1vdW50OiB0YXJnZXQudmFsdWV9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lc3RpbWF0ZU91dHB1dC5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIm91dHB1dFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHtvdXRwdXRBbW91bnQ6IHRhcmdldC52YWx1ZX0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VzdGltYXRlSW5wdXQuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZXN0aW1hdGVPdXRwdXQocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVBbW91bnQ6IDAsIHNlbmRBbW91bnQ6IHRoaXMuc3RhdGUuaW5wdXRBbW91bnR9KTtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlucHV0QW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWNlaXZlTG9hZGluZzogdHJ1ZX0pO1xuICAgICAgICBlc3RpbWF0ZU91dHB1dChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5wdXRBbW91bnQsXG4gICAgICAgICAgICBwcm9wcy5pbnB1dENvaW5UeXBlLFxuICAgICAgICAgICAgcHJvcHMub3V0cHV0Q29pblR5cGVcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRBbW91bnQ6IHJlcy5pbnB1dEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogcmVzLm91dHB1dEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNlaXZlIGFtb3VudCBlcnI6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZUxvYWRpbmc6IGZhbHNlLCBhcGlFcnJvcjogdHJ1ZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2VzdGltYXRlSW5wdXQocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVBbW91bnQ6IHRoaXMuc3RhdGUub3V0cHV0QW1vdW50LCBzZW5kQW1vdW50OiAwfSk7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5vdXRwdXRBbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVMb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgIGVzdGltYXRlSW5wdXQoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm91dHB1dEFtb3VudCxcbiAgICAgICAgICAgIHByb3BzLmlucHV0Q29pblR5cGUsXG4gICAgICAgICAgICBwcm9wcy5vdXRwdXRDb2luVHlwZVxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEFtb3VudDogcmVzLmlucHV0QW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBzZW5kQW1vdW50OiB1dGlscy5saW1pdEJ5UHJlY2lzaW9uKHJlcy5pbnB1dEFtb3VudCwgOCksXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZCBhbW91bnQgZXJyOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlY2VpdmVMb2FkaW5nOiBmYWxzZSwgYXBpRXJyb3I6IHRydWV9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXREZXBvc2l0QWRkcmVzcyhwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgaWYgKCFwcm9wcy5pbnB1dENvaW5UeXBlKSByZXR1cm47XG4gICAgICAgIGxldCByZWNlaXZlX2FkZHJlc3M7XG5cbiAgICAgICAgLyogQWx3YXlzIGdlbmVyYXRlIG5ldyBhZGRyZXNzL21lbW8gZm9yIGluY3JlYXNlZCBzZWN1cml0eSAqL1xuICAgICAgICAvKmxldCBhY2NvdW50X25hbWUgPSBwcm9wcy5zZW5kZXIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgbGV0IHJlY2VpdmVfYWRkcmVzcyA9IHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmdldENhY2hlZElucHV0QWRkcmVzcyhcbiAgICAgICAgICAgIFwiYmxvY2t0cmFkZXNcIixcbiAgICAgICAgICAgIGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgIHByb3BzLmlucHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIHByb3BzLm91dHB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgKTsqL1xuICAgICAgICBpZiAoIXJlY2VpdmVfYWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVjZWl2ZV9hZGRyZXNzOiBudWxsfSk7XG4gICAgICAgICAgICByZXF1ZXN0RGVwb3NpdEFkZHJlc3ModGhpcy5fZ2V0RGVwb3NpdE9iamVjdChwcm9wcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXREZXBvc2l0T2JqZWN0KHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXRDb2luVHlwZTogcHJvcHMuaW5wdXRDb2luVHlwZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgb3V0cHV0Q29pblR5cGU6IHByb3BzLm91dHB1dENvaW5UeXBlLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBvdXRwdXRBZGRyZXNzOiBwcm9wcy5zZW5kZXIuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHVybDogYmxvY2tUcmFkZXNBUElzLkJBU0UsXG4gICAgICAgICAgICBzdGF0ZUNhbGxiYWNrOiByZWNlaXZlX2FkZHJlc3MgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRGVwb3NpdEFkZHJlc3MoXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmlucHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3V0cHV0Q29pblR5cGUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VuZGVyLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRGVwb3NpdEFkZHJlc3MoXG4gICAgICAgIGlucHV0X2NvaW5fdHlwZSxcbiAgICAgICAgb3V0cHV0X2NvaW5fdHlwZSxcbiAgICAgICAgYWNjb3VudCxcbiAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZGVwb3NpdF9hZGRyZXNzX2NhY2hlLmNhY2hlSW5wdXRBZGRyZXNzKFxuICAgICAgICAgICAgXCJibG9ja3RyYWRlc1wiLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGlucHV0X2NvaW5fdHlwZSxcbiAgICAgICAgICAgIG91dHB1dF9jb2luX3R5cGUsXG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MuYWRkcmVzcyxcbiAgICAgICAgICAgIHJlY2VpdmVfYWRkcmVzcy5tZW1vXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgUmVhY3RUb29sdGlwLnJlYnVpbGQoKTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVBZGRyZXNzKGFkZHJlc3MsIHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB2YWxpZGF0ZUFkZHJlc3Moe3dhbGxldFR5cGU6IHByb3BzLndhbGxldFR5cGUsIG5ld0FkZHJlc3M6IGFkZHJlc3N9KVxuICAgICAgICAgICAgLnRoZW4oaXNWYWxpZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG9BZGRyZXNzID09PSBhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzc19jaGVja19pbl9wcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZEFkZHJlc3M6IGlzVmFsaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHZhbGlkYXRpbmcgYWRkcmVzczpcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vcGVuUmVnaXN0cmFyU2l0ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG5ld1duZCA9IHdpbmRvdy5vcGVuKFNldHRpbmdzU3RvcmUuc2l0ZV9yZWdpc3RyLCBcIl9ibGFua1wiKTtcbiAgICAgICAgbmV3V25kLm9wZW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgX29uRHJvcERvd25TZWxlY3QoZSkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe3ByZWZlcnJlZEJyaWRnZTogZX0pO1xuICAgIH1cblxuICAgIG9uQmxvY2tUcmFkZXNDb250YWN0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9wZW4gTmV3IFRhYlwiKTtcbiAgICAgICAgbGV0IHdpbiA9IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuYmxvY2t0cmFkZXMudXMvY29udGFjdFwiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgd2luLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgX3JlbmRlckRlcG9zaXQoKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWUsIHByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZSh0aGlzLnByb3BzLmFzc2V0KTtcbiAgICAgICAgY29uc3Qge3JlY2VpdmVfYWRkcmVzcywgYXBpRXJyb3J9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgaGFzTWVtbyA9XG4gICAgICAgICAgICByZWNlaXZlX2FkZHJlc3MgJiZcbiAgICAgICAgICAgIFwibWVtb1wiIGluIHJlY2VpdmVfYWRkcmVzcyAmJlxuICAgICAgICAgICAgcmVjZWl2ZV9hZGRyZXNzLm1lbW87XG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWx1ZSA9IChyZWNlaXZlX2FkZHJlc3MgJiYgcmVjZWl2ZV9hZGRyZXNzLmFkZHJlc3MpIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IFFSID0gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJRUlwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgPFFSQ29kZSBzaXplPXsxNDB9IHZhbHVlPXthZGRyZXNzVmFsdWV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgYnJpZGdlQXNzZXRzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5icmlkZ2VzLnRvSlMoKSk7XG5cbiAgICAgICAgY29uc3QgaW5wdXROYW1lID0gdGhpcy5wcm9wcy5pbnB1dENvaW5UeXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHJlY2VpdmVOYW1lID0gKHByZWZpeCA/IHByZWZpeCA6IFwiXCIpICsgYXNzZXROYW1lO1xuXG4gICAgICAgIGxldCBwcmljZSA9ICh0aGlzLnN0YXRlLnJlY2VpdmVBbW91bnQgLyB0aGlzLnN0YXRlLmlucHV0QW1vdW50KS50b0ZpeGVkKFxuICAgICAgICAgICAgNFxuICAgICAgICApO1xuICAgICAgICBsZXQgcHJpY2VTdWZmaXggPSByZWNlaXZlTmFtZSArIFwiL1wiICsgaW5wdXROYW1lO1xuXG4gICAgICAgIGNvbnN0IGFib3ZlTGltaXQgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dEFtb3VudCA+IHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5kZXBvc2l0TGltaXQpIHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmRBbW91bnQgPiBwYXJzZUZsb2F0KHRoaXMuc3RhdGUuZGVwb3NpdExpbWl0KTtcbiAgICAgICAgY29uc3QgYWJvdmVMaW1pdFN0eWxlID0gYWJvdmVMaW1pdFxuICAgICAgICAgICAgPyB7Ym9yZGVyOiBcIjFweCBzb2xpZCAjYTk0NDQyXCJ9XG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2JvZHlcIiBzdHlsZT17e3BhZGRpbmdUb3A6IDB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmJ1eS5hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVjZWl2ZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm1vZGFsLmJ1eS5icmlkZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLmJyaWRnZV9UUkFERVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkJsb2NrVHJhZGVzQ29udGFjdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIkJMT0NLVFJBREVTXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDaGFuZ2UgdGhpcyB3aGVuIHdlIGdhaW4gbW9yZSBicmRpZ2VzICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17IWFwaUVycm9yID8ge2Rpc3BsYXk6IFwiXCJ9IDoge2Rpc3BsYXk6IFwibm9uZVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvdyBkb3VibGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC02XCIgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5zZW5kXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWJvdmVMaW1pdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yLW1zZyBpbmxpbmUtYmxvY2sgdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAub3Zlcl9saW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnYXRld2F5Lm92ZXJfbGltaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5xdWVzdGlvbl9jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWJvdmVMaW1pdFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZW5kQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuX29uQW1vdW50Q2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0Ryb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXM9e2JyaWRnZUFzc2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXticmlkZ2VBc3NldHMucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1hcCwgYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhKSBtYXBbYV0gPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlRW50cnk9e2JyaWRnZUFzc2V0c1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVmZXJyZWRCcmlkZ2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyaWRnZUFzc2V0c1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkRyb3BEb3duU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cHBlckNhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC02XCIgc3R5bGU9e3twYWRkaW5nTGVmdDogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdhdGV3YXkuZGVwb3NpdF9saW1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5kZXBvc2l0TGltaXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZXBvc2l0TGltaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCg0KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJpZ2h0LXN5bWJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvdyBkb3VibGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC02XCIgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5yZWNlaXZlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2Fib3ZlTGltaXRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVjZWl2ZUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLl9vbkFtb3VudENoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm91dHB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJpZ2h0LXN5bWJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNlaXZlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTZcIiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlY2VpdmVMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJmb290ZXIubG9hZGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWJvdmVMaW1pdCA/IDAgOiBwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXJpZ2h0LXN5bWJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZVN1ZmZpeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgeyFhZGRyZXNzVmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cInRocmVlLWJvdW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNNZW1vID8gbnVsbCA6IFFSfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2FkZHJlc3NWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5SWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwLjNyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkucHVyY2hhc2Vfbm90aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEFzc2V0PXtpbnB1dE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0QXNzZXQ9e3JlY2VpdmVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faGlnaGxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkZHJlc3NWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzTWVtbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlJY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17cmVjZWl2ZV9hZGRyZXNzLm1lbW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvcHlJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zYWZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnB1cmNoYXNlX25vdGljZV9tZW1vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjAuM3JlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19oaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY2VpdmVfYWRkcmVzcy5tZW1vfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckN1cnJlbnRCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7bmFtZTogYXNzZXROYW1lfSA9IHV0aWxzLnJlcGxhY2VOYW1lKHRoaXMucHJvcHMuYXNzZXQpO1xuICAgICAgICBjb25zdCBpc0RlcG9zaXQgPSB0aGlzLnByb3BzLmFjdGlvbiA9PT0gXCJkZXBvc2l0XCI7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRCYWxhbmNlID0gdGhpcy5wcm9wcy5iYWxhbmNlcy5maW5kKGIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGIgJiYgYi5nZXQoXCJhc3NldF90eXBlXCIpID09PSB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYXNzZXQgPSBjdXJyZW50QmFsYW5jZVxuICAgICAgICAgICAgPyBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGN1cnJlbnRCYWxhbmNlLmdldChcImFzc2V0X3R5cGVcIiksXG4gICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgYW1vdW50OiBjdXJyZW50QmFsYW5jZS5nZXQoXCJiYWxhbmNlXCIpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgY29uc3QgYXBwbHlCYWxhbmNlQnV0dG9uID0gaXNEZXBvc2l0ID8gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiwgYm9yZGVyTGVmdDogXCJub25lXCJ9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthc3NldE5hbWV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC53aXRoZHJhd19mdWxsXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsIGJvcmRlckxlZnQ6IFwibm9uZVwifX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl91cGRhdGVBbW91bnQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgIWN1cnJlbnRCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VJbnQoY3VycmVudEJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSwgMTApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xpcHB5XCIgdGl0bGU9XCJpY29ucy5jbGlwcHkud2l0aGRyYXdfZnVsbFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlNpbXBsZVRyYWRlX193aXRoZHJhdy1yb3dcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMXJlbVwifX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tmb250U2l6ZTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdhdGV3YXkuYmFsYW5jZV9hc3NldFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXshYXNzZXQgPyAwIDogYXNzZXQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FwcGx5QmFsYW5jZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0Rvd24gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCBjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnVuYXZhaWxhYmxlX1RSQURFXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAhdGhpcy5wcm9wcy5pc0F2YWlsYWJsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIGNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImdhdGV3YXkudW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyRGVwb3NpdCgpXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZSA9IEJpbmRUb0NoYWluU3RhdGUoXG4gICAgU2ltcGxlRGVwb3NpdEJsb2NrdHJhZGVzQnJpZGdlXG4pO1xuXG5jbGFzcyBTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtwcmVmZXJyZWRCcmlkZ2UsIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgY3VycmVudEJyaWRnZSA9IHRoaXMucHJvcHMuYnJpZGdlcy5nZXQodGhpcy5wcm9wcy5wcmVmZXJyZWRCcmlkZ2UpO1xuICAgICAgICBpZiAoIWN1cnJlbnRCcmlkZ2UpIHtcbiAgICAgICAgICAgIGN1cnJlbnRCcmlkZ2UgPSB0aGlzLnByb3BzLmJyaWRnZXMuZmlyc3QoKTtcbiAgICAgICAgICAgIHByZWZlcnJlZEJyaWRnZSA9IGN1cnJlbnRCcmlkZ2UuaW5wdXRDb2luVHlwZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZVxuICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRCcmlkZ2U9e3ByZWZlcnJlZEJyaWRnZX1cbiAgICAgICAgICAgICAgICB7Li4uY3VycmVudEJyaWRnZS50b0pTKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3RvcmVXcmFwcGVyID0gY29ubmVjdChcbiAgICBTdG9yZVdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRCcmlkZ2U6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcInByZWZlcnJlZEJyaWRnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImJ0Y1wiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURlcG9zaXRCbG9ja3RyYWRlc0JyaWRnZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5icmlkZ2VzKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLmJ1eS50aXRsZVwiKX1cbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLnZpc2libGV9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cImNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC5jbG9zZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3RvcmVXcmFwcGVyIHsuLi50aGlzLnByb3BzfSBvcGVuPXt0aGlzLnByb3BzLnZpc2libGV9IC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFjQTtBQUNBOzs7O0FBekRBO0FBQ0E7QUEyREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBM0JBO0FBREE7QUFnQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFyQkE7QUEwQkE7Ozs7QUFyRUE7QUFDQTtBQXVFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQU9BOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFTQTtBQUdBO0FBQ0E7QUFGQTtBQVhBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBRkE7QUEzQ0E7QUE0REE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQUZBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQURBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQXhCQTtBQWlDQTtBQUNBO0FBT0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQXhCQTtBQWxDQTtBQW1FQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVZBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQVJBO0FBL0hBO0FBMklBOzs7O0FBOU9BO0FBQ0E7QUFnUEE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVBBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVFBO0FBUkE7QUFEQTtBQUNBO0FBYUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFOQTtBQURBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBTkE7QUFEQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFHQTtBQVBBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQXZCQTtBQURBO0FBUkE7QUFEQTtBQTZDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVkE7QUFjQTtBQTVFQTtBQUxBO0FBcUZBOzs7O0FBMWFBO0FBQ0E7QUE0YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFIQTtBQXBCQTtBQURBO0FBa0NBOzs7O0FBdkNBO0FBQ0E7QUF5Q0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBckJBO0FBc0NBOzs7O0FBakRBO0FBQ0E7QUFtREE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFSQTtBQURBO0FBREE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBUUE7Ozs7QUEzREE7QUFDQTtBQTZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUxBO0FBUUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVdBOzs7QUFFQTtBQUNBO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQXRDQTtBQUNBO0FBd0NBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFlQTs7OztBQWxDQTtBQUNBO0FBb0NBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBU0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFHQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFLQTs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFJQTtBQUlBO0FBS0E7QUFJQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUtBO0FBTkE7QUFRQTtBQXRCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUtBO0FBTkE7QUFkQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFxQkE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUdBO0FBQ0E7QUFHQTtBQU1BO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBUEE7QUFyQkE7QUFpQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFSQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFmQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBREE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQVpBO0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBU0E7QUFPQTtBQU9BO0FBekJBO0FBTEE7QUF1REE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBTUE7QUFHQTtBQUdBO0FBZEE7QUFmQTtBQTlEQTtBQXFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBSEE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFwQkE7QUFpQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQUhBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBTkE7QUFqQ0E7QUEyQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFWQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBVEE7QUFqQkE7QUE2QkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBT0E7QUFDQTtBQVJBO0FBdkNBO0FBbURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFIQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFOQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQVpBO0FBbUJBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU9BO0FBakJBO0FBcEJBO0FBaEJBO0FBMERBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBTEE7QUE1RUE7QUFKQTtBQXBEQTtBQTdNQTtBQUpBO0FBREE7QUFYQTtBQXlYQTs7OztBQTNsQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQTJsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7Ozs7QUFuREE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25vQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBeUJBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBZUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBR0E7QUFFQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFUQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBNUJBO0FBcUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBRkE7QUFEQTtBQURBO0FBUEE7QUFtQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQXhCQTtBQWlDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFEQTtBQVBBO0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUF0QkE7QUErQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFaQTtBQTBCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBL0JBO0FBd0NBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFiQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQU5BO0FBUUE7QUFSQTtBQURBO0FBaExBO0FBOExBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFiQTtBQWlCQTtBQUdBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQU5BO0FBSkE7QUFlQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVUE7QUFYQTtBQURBO0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUF2REE7QUE2REE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFQQTtBQURBO0FBekVBO0FBc0ZBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVlBO0FBWkE7QUFDQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUkE7QUFVQTtBQVhBO0FBTEE7QUFKQTtBQXlCQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQVRBO0FBREE7QUFjQTs7OztBQTcwQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFVQTtBQUNBO0FBRkE7QUFDQTtBQXEwQkE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUdBO0FBRkE7QUFYQTtBQWtCQTs7OztBQTNDQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzkyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQWpCQTtBQWtCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBU0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBYkE7QUFlQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVpBO0FBY0E7OztBQUdBO0FBS0E7QUFRQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBSkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBTEE7QUFwQkE7QUE2QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBTEE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFmQTtBQURBO0FBVkE7QUFyQkE7QUFxREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFKQTtBQXREQTtBQURBO0FBOEVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVkE7QUFKQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFOQTtBQVpBO0FBcEJBO0FBREE7QUE4Q0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWJBO0FBUEE7QUF5QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVhBO0FBVkE7QUE1QkE7QUFsSUE7QUExQ0E7QUF3T0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBWUE7QUFaQTtBQUNBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFSQTtBQVVBO0FBWEE7QUFMQTtBQUpBO0FBeUJBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVZBO0FBc0JBOzs7O0FBbm5CQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQW1uQkE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFIQTtBQU9BOzs7O0FBaEJBO0FBQ0E7QUFrQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBWEE7QUFDQTtBQWNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBVkE7QUFhQTs7OztBQWxCQTtBQUNBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==