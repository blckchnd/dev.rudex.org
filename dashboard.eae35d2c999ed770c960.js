(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ 3142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1847);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1939);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2550);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(552);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(712);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2783);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3143);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2317);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var DashboardPage = function (_React$Component) {
    _inherits(DashboardPage, _React$Component);

    function DashboardPage() {
        _classCallCheck(this, DashboardPage);

        return _possibleConstructorReturn(this, (DashboardPage.__proto__ || Object.getPrototypeOf(DashboardPage)).apply(this, arguments));
    }

    _createClass(DashboardPage, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                myActiveAccounts = _props.myActiveAccounts,
                myHiddenAccounts = _props.myHiddenAccounts,
                accountsReady = _props.accountsReady,
                passwordAccount = _props.passwordAccount,
                preferredBases = _props.preferredBases;

            if (!accountsReady) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"], null);
            }

            var accountCount = myActiveAccounts.size + myHiddenAccounts.size + (passwordAccount ? 1 : 0);
            if (!accountCount) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginSelector__WEBPACK_IMPORTED_MODULE_3__["default"], null);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block page-layout" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-content app-tables no-padding",
                            ref: "appTables"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block small-12" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "tabs-container generic-bordered-box" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tabs"],
                                    {
                                        defaultActiveTab: 1,
                                        segmented: false,
                                        setting: "dashboardTab",
                                        className: "account-tabs",
                                        tabsClass: "account-overview no-padding bordered-header content-block"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"],
                                        { title: "dashboard.starred_markets" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markets__WEBPACK_IMPORTED_MODULE_7__["StarredMarkets"], null)
                                    ),
                                    preferredBases.sort().map(function (q) {
                                        var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                                                className: "column-hide-small",
                                                style: {
                                                    maxWidth: 30,
                                                    marginRight: 5
                                                },
                                                src: "" + "asset-symbols/" + q.replace(/^BTC/, "OPEN.BTC").toLowerCase() + ".png"
                                            }),
                                            "\xA0",
                                            q
                                        );

                                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"],
                                            { key: q, title: title },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markets__WEBPACK_IMPORTED_MODULE_7__["FeaturedMarkets"], {
                                                quotes: [q].concat(Object(common_gateways__WEBPACK_IMPORTED_MODULE_8__["getPossibleGatewayPrefixes"])([q]))
                                            })
                                        );
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DashboardPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(DashboardPage, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        var _AccountStore$getStat = stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState(),
            myActiveAccounts = _AccountStore$getStat.myActiveAccounts,
            myHiddenAccounts = _AccountStore$getStat.myHiddenAccounts,
            passwordAccount = _AccountStore$getStat.passwordAccount,
            accountsLoaded = _AccountStore$getStat.accountsLoaded,
            refsLoaded = _AccountStore$getStat.refsLoaded;

        return {
            myActiveAccounts: myActiveAccounts,
            myHiddenAccounts: myHiddenAccounts,
            passwordAccount: passwordAccount,
            accountsReady: accountsLoaded && refsLoaded,
            preferredBases: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().preferredBases
        };
    }
}));

/***/ }),

/***/ 3143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredMarkets", function() { return StarredMarkets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedMarkets", function() { return FeaturedMarkets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMarkets", function() { return TopMarkets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(488);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1847);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(570);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(712);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2348);
/* harmony import */ var _MarketsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3144);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// import SettingsActions from "actions/SettingsActions";



var StarredMarkets = function (_React$Component) {
    _inherits(StarredMarkets, _React$Component);

    function StarredMarkets() {
        _classCallCheck(this, StarredMarkets);

        return _possibleConstructorReturn(this, (StarredMarkets.__proto__ || Object.getPrototypeOf(StarredMarkets)).apply(this, arguments));
    }

    _createClass(StarredMarkets, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
                markets: this.props.starredMarkets,
                forceDirection: true,
                isFavorite: true
            });
        }
    }]);

    return StarredMarkets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

StarredMarkets = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(StarredMarkets, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().starredMarkets
        };
    }
});

var FeaturedMarkets = function (_React$Component2) {
    _inherits(FeaturedMarkets, _React$Component2);

    function FeaturedMarkets() {
        _classCallCheck(this, FeaturedMarkets);

        var _this2 = _possibleConstructorReturn(this, (FeaturedMarkets.__proto__ || Object.getPrototypeOf(FeaturedMarkets)).call(this));

        var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__["Apis"].instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);

        _this2.state = {
            chainID: chainID,
            markets: []
        };

        _this2._getMarkets = _this2._getMarkets.bind(_this2);
        _this2.update = _this2.update.bind(_this2);
        return _this2;
    }

    _createClass(FeaturedMarkets, [{
        key: "_getMarkets",
        value: function _getMarkets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
            var chainID = state.chainID;


            if (chainID === "4018d784") {
                return props.markets;
            } else {
                // assume testnet
                return [["TEST", "PEG.FAKEUSD"], ["TEST", "BTWTY"]];
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextProps, this.props);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.update();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.update(nextProps);
        }
    }, {
        key: "update",
        value: function update() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            var markets = this._getMarkets(this.state, props);

            markets = markets.filter(function (market) {
                /* Only use markets corresponding to the current tab */
                return props.quotes[0] === market.base;
            });

            /* Add the possible gateway assets */
            for (var i = 1; i < props.quotes.length; i++) {
                markets.forEach(function (m) {
                    var obj = { quote: m.quote, base: props.quotes[i] };
                    var marketKey = obj.quote + "_" + obj.base;
                    if (obj.quote !== obj.base && !markets.has(marketKey)) {
                        markets = markets.set(marketKey, obj);
                    }
                });
            }
            this.setState({ markets: markets });
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
                markets: this.state.markets,
                showFlip: false,
                isFavorite: false
            });
        }
    }]);

    return FeaturedMarkets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FeaturedMarkets = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(FeaturedMarkets, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        var userMarkets = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().userMarkets;
        var defaultMarkets = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().defaultMarkets;

        if (userMarkets.size) {
            userMarkets.forEach(function (market, key) {
                if (!defaultMarkets.has(key)) defaultMarkets = defaultMarkets.set(key, market);
            });
        }

        return {
            markets: defaultMarkets
        };
    }
});

var TopMarkets = function (_React$Component3) {
    _inherits(TopMarkets, _React$Component3);

    function TopMarkets() {
        _classCallCheck(this, TopMarkets);

        return _possibleConstructorReturn(this, (TopMarkets.__proto__ || Object.getPrototypeOf(TopMarkets)).apply(this, arguments));
    }

    _createClass(TopMarkets, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketsTable__WEBPACK_IMPORTED_MODULE_6__["default"], { markets: [] });
        }
    }]);

    return TopMarkets;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 3144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1847);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2348);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(713);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(712);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(570);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2775);
/* harmony import */ var _MarketsRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3145);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var MarketsTable = function (_React$Component) {
    _inherits(MarketsTable, _React$Component);

    function MarketsTable() {
        _classCallCheck(this, MarketsTable);

        var _this = _possibleConstructorReturn(this, (MarketsTable.__proto__ || Object.getPrototypeOf(MarketsTable)).call(this));

        _this.state = {
            filter: "",
            showFlip: false,
            showHidden: false,
            markets: [],
            sortBy: "volumeQuote",
            sortDirection: true
        };

        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(MarketsTable, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.update(nextProps);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.update();
            bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(this.update);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(this.update);
        }
    }, {
        key: "_onToggleSort",
        value: function _onToggleSort(key) {
            if (key === this.state.sortBy) {
                return this.setState({ sortDirection: !this.state.sortDirection });
            }
            this.setState({ sortBy: key });
        }
    }, {
        key: "update",
        value: function update() {
            var _this2 = this;

            var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var props = nextProps || this.props;
            var showFlip = props.forceDirection;

            if (props.markets && props.markets.size > 0) {
                var markets = props.markets.toArray().map(function (market) {
                    var quote = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(market.quote);
                    var base = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(market.base);
                    if (!base || !quote) return null;
                    var marketName = market.base + "_" + market.quote;

                    return {
                        key: marketName,
                        inverted: undefined,
                        quote: market.quote,
                        base: market.base,
                        isHidden: props.hiddenMarkets.includes(marketName),
                        isFavorite: props.isFavorite,
                        marketStats: props.allMarketStats.get(marketName, {}),
                        isStarred: _this2.props.starredMarkets.has(marketName)
                    };
                }).filter(function (a) {
                    return a !== null;
                });
                this.setState({ showFlip: showFlip, markets: markets });
            }
        }
    }, {
        key: "_toggleShowHidden",
        value: function _toggleShowHidden(val) {
            if (this.state.showHidden === val) return;

            this.setState({
                showHidden: val
            });
        }
    }, {
        key: "_handleFilterInput",
        value: function _handleFilterInput(e) {
            e.preventDefault();
            this.setState({ filter: e.target.value.toUpperCase() });
        }
    }, {
        key: "_handleHide",
        value: function _handleHide(row, status) {
            if (this.props.handleHide) {
                return this.props.handleHide(row, status);
            }

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].hideMarket(row.key, status);
        }
    }, {
        key: "_handleFlip",
        value: function _handleFlip(row, status) {
            if (this.props.handleFlip) {
                return this.props.handleFlip(row, status);
            }

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeMarketDirection(_defineProperty({}, row.key, status));
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                markets = _state.markets,
                showFlip = _state.showFlip,
                showHidden = _state.showHidden,
                filter = _state.filter;


            var marketRows = markets.filter(function (m) {
                if (!!filter || m.isStarred) return true;
                if (_this3.props.onlyLiquid && m.marketStats && "volumeBase" in m.marketStats) {
                    return !!m.marketStats.volumeBase;
                } else {
                    return true;
                }
            }).sort(function (a, b) {
                var _state2 = _this3.state,
                    sortBy = _state2.sortBy,
                    sortDirection = _state2.sortDirection;


                switch (sortBy) {
                    case "price":
                        if (a.marketStats.price && b.marketStats.price) {
                            if (sortDirection) {
                                return b.marketStats.price.toReal() - a.marketStats.price.toReal();
                            }

                            return a.marketStats.price.toReal() - b.marketStats.price.toReal();
                        }
                        break;

                    case "change":
                        if (sortDirection) {
                            return parseFloat(b.marketStats[sortBy]) - parseFloat(a.marketStats[sortBy]);
                        } else {
                            return parseFloat(a.marketStats[sortBy]) - parseFloat(b.marketStats[sortBy]);
                        }

                        break;

                    default:
                        if (sortDirection) {
                            return b.marketStats[sortBy] - a.marketStats[sortBy];
                        } else {
                            return a.marketStats[sortBy] - b.marketStats[sortBy];
                        }
                }
            }).map(function (row) {
                var visible = true;

                if (row.isHidden !== _this3.state.showHidden) {
                    visible = false;
                } else if (filter) {
                    var quoteObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(row.quote);
                    var baseObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(row.base);

                    var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].replaceName(quoteObject),
                        quoteIsBitAsset = _utils$replaceName.isBitAsset;

                    var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].replaceName(baseObject),
                        baseIsBitAsset = _utils$replaceName2.isBitAsset;

                    var quoteSymbol = row.quote;
                    var baseSymbol = row.base;

                    if (quoteIsBitAsset) {
                        quoteSymbol = "bit" + quoteSymbol;
                    }

                    if (baseIsBitAsset) {
                        baseSymbol = "bit" + baseSymbol;
                    }

                    var filterPair = filter.includes(":");

                    if (filterPair) {
                        var quoteFilter = filter.split(":")[0].trim();
                        var baseFilter = filter.split(":")[1].trim();

                        visible = quoteSymbol.toLowerCase().includes(String(quoteFilter).toLowerCase()) && baseSymbol.toLowerCase().includes(String(baseFilter).toLowerCase());
                    } else {
                        visible = quoteSymbol.toLowerCase().includes(String(filter).toLowerCase()) || baseSymbol.toLowerCase().includes(String(filter).toLowerCase());
                    }
                }

                if (!visible) return null;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketsRow__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, row, {
                    handleHide: _this3._handleHide.bind(_this3, row, !row.isHidden),
                    handleFlip: _this3._handleFlip.bind(_this3, row, !row.inverted),
                    starredMarkets: _this3.props.starredMarkets
                }));
            }).filter(function (r) {
                return !!r;
            });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "header-selector" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "filter inline-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Input"], {
                            type: "text",
                            placeholder: "Filter...",
                            onChange: this._handleFilterInput.bind(this),
                            addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Icon"], { type: "search" })
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "selector inline-block",
                            style: { position: "relative", top: "6px" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("inline-block", {
                                    inactive: showHidden
                                }),
                                onClick: this._toggleShowHidden.bind(this, false)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.hide_hidden" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("inline-block", {
                                    inactive: !showHidden
                                }),
                                onClick: this._toggleShowHidden.bind(this, true)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.show_hidden" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingTop: "0.5rem" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            {
                                style: { margin: "3px 0 0", width: "fit-content" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                style: { position: "relative", top: 3 },
                                className: "no-margin",
                                type: "checkbox",
                                checked: this.props.onlyLiquid,
                                onChange: function onChange() {
                                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeViewSetting({
                                        onlyLiquid: !_this3.props.onlyLiquid
                                    });
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { style: { paddingLeft: "0.4rem" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.show_only_liquid" })
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    style: { paddingLeft: 0, paddingRight: 0 },
                    className: "table dashboard-table table-hover",
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { textAlign: "left", width: "75px" } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            { style: { textAlign: "left" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "account.asset"
                            })
                        ),
                        this.props.isFavorite ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            { style: { textAlign: "right" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.user_issued_assets.quote_name" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                onClick: this._onToggleSort.bind(this, "price"),
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("column-hide-small is-sortable", { "is-active": this.state.sortBy === "price" }),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                onClick: this._onToggleSort.bind(this, "change"),
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("is-sortable", {
                                    "is-active": this.state.sortBy === "change"
                                }),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.hour_24_short" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                onClick: this._onToggleSort.bind(this, "volumeQuote"),
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("is-sortable", {
                                    "is-active": this.state.sortBy === "volumeQuote"
                                }),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.volume" })
                        ),
                        showFlip ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            { className: "column-hide-small" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.flip" })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: !showHidden ? "exchange.hide" : "account.perm.show"
                            })
                        )
                    ),
                    rows: !marketRows.length ? [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        {
                            className: "table-empty",
                            key: "tr-table-empty"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { colSpan: showFlip ? 7 : 6 },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "dashboard.table_empty" })
                        )
                    )] : marketRows,
                    pageSize: 25,
                    label: "utility.total_x_markets",
                    leftPadding: "1.5rem"
                })
            );
        }
    }]);

    return MarketsTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(MarketsTable, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        var _SettingsStore$getSta = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState(),
            marketDirections = _SettingsStore$getSta.marketDirections,
            hiddenMarkets = _SettingsStore$getSta.hiddenMarkets;

        return {
            marketDirections: marketDirections,
            hiddenMarkets: hiddenMarkets,
            allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().allMarketStats,
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().starredMarkets,
            onlyLiquid: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().viewSettings.get("onlyLiquid", true)
        };
    }
}));

/***/ }),

/***/ 3145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1954);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1855);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2298);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2349);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1807);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(570);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(713);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var MarketsRow = function (_React$Component) {
    _inherits(MarketsRow, _React$Component);

    function MarketsRow() {
        _classCallCheck(this, MarketsRow);

        var _this = _possibleConstructorReturn(this, (MarketsRow.__proto__ || Object.getPrototypeOf(MarketsRow)).call(this));

        _this.statsInterval = null;
        _this.state = {
            imgError: false
        };
        return _this;
    }

    _createClass(MarketsRow, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].check_market_stats(np.marketStats, this.props.marketStats) || np.base.get("id") !== this.props.base.get("id") || np.quote.get("id") !== this.props.quote.get("id") || ns.imgError !== this.state.imgError || np.starredMarkets.size !== this.props.starredMarkets.size;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this._setInterval();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this._clearInterval();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.base.get("id") !== this.props.base.get("id") || nextProps.quote.get("id") !== this.props.quote.get("id")) {
                this._clearInterval();
                this._setInterval(nextProps);
            }
        }
    }, {
        key: "_setInterval",
        value: function _setInterval() {
            var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _ref = nextProps || this.props,
                base = _ref.base,
                quote = _ref.quote;

            this.statsChecked = new Date();
            this.statsInterval = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStatsInterval(35 * 1000, base, quote);
        }
    }, {
        key: "_clearInterval",
        value: function _clearInterval() {
            if (this.statsInterval) this.statsInterval();
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                this.refs[imgName.toLowerCase()].src = "asset-symbols/bts.png";
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "_toggleFavoriteMarket",
        value: function _toggleFavoriteMarket(quote, base) {
            var marketID = quote + "_" + base;
            if (!this.props.starredMarkets.has(marketID)) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].addStarMarket(quote, base);
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].removeStarMarket(quote, base);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                base = _props.base,
                quote = _props.quote,
                marketStats = _props.marketStats,
                isHidden = _props.isHidden,
                inverted = _props.inverted,
                handleHide = _props.handleHide,
                handleFlip = _props.handleFlip;


            function getImageName(asset) {
                var symbol = asset.get("symbol");
                if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC" || symbol === "RUDEX.BTC") return symbol;
                var imgName = asset.get("symbol").split(".");
                return imgName.length === 2 ? imgName[1] : imgName[0];
            }
            var imgName = getImageName(quote);
            var changeClass = !marketStats ? "" : parseFloat(marketStats.change) > 0 ? "change-up" : parseFloat(marketStats.change) < 0 ? "change-down" : "";

            var marketID = quote.get("symbol") + "_" + base.get("symbol");

            var starClass = this.props.starredMarkets.has(marketID) ? "gold-star" : "grey-star";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            onClick: this._toggleFavoriteMarket.bind(this, quote.get("symbol"), base.get("symbol"))
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { cursor: "pointer" },
                            className: starClass,
                            name: "fi-star",
                            title: "icons.fi_star.market"
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "left" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
                        {
                            to: "/market/" + this.props.quote.get("symbol") + "_" + this.props.base.get("symbol")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                            ref: imgName.toLowerCase(),
                            className: "column-hide-small",
                            onError: this._onError.bind(this, imgName),
                            style: { maxWidth: 20, marginRight: 10 },
                            src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { dataPlace: "top", name: quote.get("symbol") }),
                        "\xA0",
                        this.props.isFavorite ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            ":\xA0",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                dataPlace: "top",
                                name: base.get("symbol")
                            })
                        ) : null
                    )
                ),
                this.props.isFavorite ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { noTip: true, name: base.get("symbol") })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "column-hide-small", style: { textAlign: "right" } },
                    marketStats && marketStats.price ? common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].price_text(marketStats.price.toReal(true), quote, base) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        style: { textAlign: "right" },
                        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(changeClass)
                    },
                    !marketStats ? null : marketStats.change,
                    "%"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "right" } },
                    !marketStats ? null : common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_volume(marketStats.volumeQuote, base.get("precision"))
                ),
                inverted === null || !this.props.isFavorite ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "column-hide-small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        { onClick: handleFlip },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "shuffle", title: "icons.shuffle" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            style: { marginRight: 0 },
                            className: isHidden ? "action-plus" : "order-cancel",
                            onClick: handleHide
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            name: isHidden ? "plus-circle" : "cross-circle",
                            title: isHidden ? "icons.plus_circle.show_market" : "icons.cross_circle.hide_market",
                            className: "icon-14px"
                        })
                    )
                )
            );
        }
    }]);

    return MarketsRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketsRow.propTypes = {
    quote: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired,
    base: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired
};
MarketsRow.defaultProps = {
    tempComponent: "tr"
};


MarketsRow = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(MarketsRow);
/* harmony default export */ __webpack_exports__["default"] = (MarketsRow);

/***/ }),

/***/ 3146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(552);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(712);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2348);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1941);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3147);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var DashboardContainer = function (_React$Component) {
    _inherits(DashboardContainer, _React$Component);

    function DashboardContainer() {
        _classCallCheck(this, DashboardContainer);

        return _possibleConstructorReturn(this, (DashboardContainer.__proto__ || Object.getPrototypeOf(DashboardContainer)).apply(this, arguments));
    }

    _createClass(DashboardContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_4__["default"],
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__["default"]],
                    inject: {
                        linkedAccounts: function linkedAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().linkedAccounts;
                        },
                        myHiddenAccounts: function myHiddenAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().myHiddenAccounts;
                        },
                        accountsReady: function accountsReady() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().accountsLoaded && stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().refsLoaded;
                        },
                        passwordAccount: function passwordAccount() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().passwordAccount;
                        },
                        currentEntry: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("dashboardEntry", "accounts")
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], this.props)
            );
        }
    }]);

    return DashboardContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DashboardContainer);

/***/ }),

/***/ 3147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3141);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2799);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MarketCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3148);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(570);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(488);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1939);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2550);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(713);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(712);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1847);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(572);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var Dashboard = function (_React$Component) {
    _inherits(Dashboard, _React$Component);

    function Dashboard(props) {
        _classCallCheck(this, Dashboard);

        var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));

        var marketsByChain = {
            "4018d784": Object(_branding__WEBPACK_IMPORTED_MODULE_14__["getFeaturedMarkets"])(),
            "39f5e2ed": [["TEST", "PEG.FAKEUSD"], ["TEST", "BTWTY"]]
        };
        var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_7__["Apis"].instance().chain_id;
        if (chainID) chainID = chainID.substr(0, 8);

        _this.state = {
            width: null,
            showIgnored: false,
            featuredMarkets: marketsByChain[chainID] || marketsByChain["4018d784"],
            newAssets: [],
            currentEntry: props.currentEntry
        };

        _this._setDimensions = _this._setDimensions.bind(_this);
        // this._sortMarketsByVolume = this._sortMarketsByVolume.bind(this);
        return _this;
    }

    _createClass(Dashboard, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setDimensions();

            window.addEventListener("resize", this._setDimensions, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(nextState.featuredMarkets, this.state.featuredMarkets) || !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(nextState.newAssets, this.state.newAssets) || nextProps.linkedAccounts !== this.props.linkedAccounts ||
            // nextProps.marketStats !== this.props.marketStats ||
            nextProps.ignoredAccounts !== this.props.ignoredAccounts || nextProps.passwordAccount !== this.props.passwordAccount || nextState.width !== this.state.width || nextProps.accountsReady !== this.props.accountsReady || nextState.showIgnored !== this.state.showIgnored || nextState.currentEntry !== this.state.currentEntry;
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._setDimensions);
        }
    }, {
        key: "_setDimensions",
        value: function _setDimensions() {
            var width = window.innerWidth;

            if (width !== this.state.width) {
                this.setState({ width: width });
            }
        }
    }, {
        key: "_onToggleIgnored",
        value: function _onToggleIgnored() {
            this.setState({
                showIgnored: !this.state.showIgnored
            });
        }
    }, {
        key: "_onSwitchType",
        value: function _onSwitchType(type) {
            this.setState({
                currentEntry: type
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                dashboardEntry: type
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                linkedAccounts = _props.linkedAccounts,
                myHiddenAccounts = _props.myHiddenAccounts,
                accountsReady = _props.accountsReady,
                passwordAccount = _props.passwordAccount;
            var _state = this.state,
                width = _state.width,
                showIgnored = _state.showIgnored,
                featuredMarkets = _state.featuredMarkets,
                newAssets = _state.newAssets,
                currentEntry = _state.currentEntry;


            if (passwordAccount && !linkedAccounts.has(passwordAccount)) {
                linkedAccounts = linkedAccounts.add(passwordAccount);
            }
            var names = linkedAccounts.toArray().sort();
            if (passwordAccount && names.indexOf(passwordAccount) === -1) names.push(passwordAccount);
            var ignored = myHiddenAccounts.toArray().sort();

            var accountCount = linkedAccounts.size + myHiddenAccounts.size + (passwordAccount ? 1 : 0);

            if (!accountsReady) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], null);
            }

            var validMarkets = 0;

            var markets = featuredMarkets.map(function (pair) {
                // HACK: Show all defined markets
                validMarkets++;
                var className = "";
                if (validMarkets > 15) {
                    className += " show-for-" + (!accountCount ? "xlarge" : "large");
                } else if (validMarkets > 12) {
                    className += " show-for-" + (!accountCount ? "large" : "medium");
                }

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    key: pair[0] + "_" + pair[1],
                    marketId: pair[1] + "_" + pair[0],
                    "new": newAssets.indexOf(pair[1]) !== -1,
                    className: className,
                    quote: pair[0],
                    base: pair[1],
                    invert: pair[2],
                    hide: validMarkets > 35
                });
            }).filter(function (a) {
                return !!a;
            });

            if (!accountCount) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginSelector__WEBPACK_IMPORTED_MODULE_9__["default"], null);
            }

            var entries = ["accounts", "contacts", "recent"];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { ref: "wrapper", className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        ref: "container",
                        className: "grid-container",
                        style: { padding: "2rem 8px" }
                    },
                    this.props.onlyAccounts ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "block-content-header",
                            style: { marginBottom: 15, paddingTop: 0 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.featured" })
                    ),
                    this.props.onlyAccounts ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block small-up-1 medium-up-3 large-up-4 no-overflow fm-outer-container" },
                        markets
                    )
                )
            );
        }
    }]);

    return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var DashboardWrapper = function DashboardWrapper(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dashboard, props);
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_13__["connect"])(DashboardWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 3148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1955);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2298);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2349);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2348);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1847);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(570);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(813);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var MarketCard = function (_React$Component) {
    _inherits(MarketCard, _React$Component);

    function MarketCard() {
        _classCallCheck(this, MarketCard);

        var _this = _possibleConstructorReturn(this, (MarketCard.__proto__ || Object.getPrototypeOf(MarketCard)).call(this));

        _this.statsInterval = null;

        _this.state = {
            imgError: false
        };
        return _this;
    }

    _createClass(MarketCard, [{
        key: "_checkStats",
        value: function _checkStats() {
            var newStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { close: {} };
            var oldStats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { close: {} };

            return newStats.volumeBase !== oldStats.volumeBase || !common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].are_equal_shallow(newStats.close && newStats.close.base, oldStats.close && oldStats.close.base) || !common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].are_equal_shallow(newStats.close && newStats.close.quote, oldStats.close && oldStats.close.quote);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return this._checkStats(np.marketStats, this.props.marketStats) || np.base.get("id") !== this.props.base.get("id") || np.quote.get("id") !== this.props.quote.get("id") || ns.imgError !== this.state.imgError;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.defer(this.props.quote, this.props.base);
            this.statsChecked = new Date();
            this.statsInterval = setInterval(actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.bind(this, this.props.quote, this.props.base), 35 * 1000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.statsInterval);
        }
    }, {
        key: "goToMarket",
        value: function goToMarket(e) {
            e.preventDefault();

            var history = this.context.router.history;

            history.push("/market/" + this.props.base.get("symbol") + "_" + this.props.quote.get("symbol"));
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                this.refs[imgName.toLowerCase()].src = "asset-symbols/bts.png";
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                hide = _props.hide,
                isLowVolume = _props.isLowVolume,
                base = _props.base,
                quote = _props.quote,
                marketStats = _props.marketStats;

            if (isLowVolume || hide) return null;

            function getImageName(asset) {
                var symbol = asset.get("symbol");
                return symbol;
                // if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                // if (symbol.startsWith("ESCROW.")) return symbol;
                // let imgName = asset.get("symbol").split(".");
                // return imgName.length === 2 ? imgName[1] : imgName[0];
            }
            var imgName = getImageName(base);

            // let marketID = base.get("symbol") + "_" + quote.get("symbol");
            // let stats = marketStats;
            var changeClass = !marketStats ? "" : parseFloat(marketStats.change) > 0 ? "change-up" : parseFloat(marketStats.change) < 0 ? "change-down" : "";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("grid-block no-overflow fm-container", this.props.className),
                    onClick: this.goToMarket.bind(this)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical shrink" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "v-align" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                            className: "align-center",
                            ref: imgName.toLowerCase(),
                            onError: this._onError.bind(this, imgName),
                            style: { maxWidth: 70 },
                            src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical no-overflow" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "fm-name" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { dataPlace: "top", name: base.get("symbol") }),
                        " ",
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { dataPlace: "top", name: quote.get("symbol") })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "fm-volume" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.price" }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            marketStats && marketStats.price ? common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].price_text(marketStats.price.toReal(), base, quote) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "fm-volume" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.volume" }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            !marketStats ? null : common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].format_volume(marketStats.volumeBase, quote.get("precision"))
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "fm-change" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_9___default.a, { content: "exchange.change" }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("float-right", changeClass) },
                            !marketStats ? null : marketStats.change,
                            "%"
                        )
                    )
                )
            );
        }
    }]);

    return MarketCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketCard.contextTypes = {
    router: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired
};
MarketCard.propTypes = {
    quote: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired,
    base: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired,
    invert: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
};
MarketCard.defaultProps = {
    invert: true
};


MarketCard = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketCard);

var MarketCardWrapper = function (_React$Component2) {
    _inherits(MarketCardWrapper, _React$Component2);

    function MarketCardWrapper() {
        _classCallCheck(this, MarketCardWrapper);

        return _possibleConstructorReturn(this, (MarketCardWrapper.__proto__ || Object.getPrototypeOf(MarketCardWrapper)).apply(this, arguments));
    }

    _createClass(MarketCardWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarketCard, this.props);
        }
    }]);

    return MarketCardWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_7__["connect"])(MarketCardWrapper, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps(props) {
        return {
            marketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().allMarketStats.get(props.marketId)
        };
    }
}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmVhZTM1ZDJjOTk5ZWQ3NzBjOTYwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldHMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvTWFya2V0c1RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldHNSb3cuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9NYXJrZXRDYXJkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcblxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBMb2dpblNlbGVjdG9yIGZyb20gXCIuLi9Mb2dpblNlbGVjdG9yXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcblxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcbmltcG9ydCB7U3RhcnJlZE1hcmtldHMsIEZlYXR1cmVkTWFya2V0c30gZnJvbSBcIi4vTWFya2V0c1wiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlc30gZnJvbSBcImNvbW1vbi9nYXRld2F5c1wiO1xuXG5jbGFzcyBEYXNoYm9hcmRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgIGFjY291bnRzUmVhZHksXG4gICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFhY2NvdW50c1JlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudENvdW50ID1cbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLnNpemUgK1xuICAgICAgICAgICAgKHBhc3N3b3JkQWNjb3VudCA/IDEgOiAwKTtcbiAgICAgICAgaWYgKCFhY2NvdW50Q291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9naW5TZWxlY3RvciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgYXBwLXRhYmxlcyBuby1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImFwcFRhYmxlc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz1cImRhc2hib2FyZFRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFic0NsYXNzPVwiYWNjb3VudC1vdmVydmlldyBuby1wYWRkaW5nIGJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImRhc2hib2FyZC5zdGFycmVkX21hcmtldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhcnJlZE1hcmtldHMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZWZlcnJlZEJhc2VzLnNvcnQoKS5tYXAocSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke3FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvXkJUQy8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9QRU4uQlRDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIga2V5PXtxfSB0aXRsZT17dGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkTWFya2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3Rlcz17W3FdLmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UG9zc2libGVHYXRld2F5UHJlZml4ZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBEYXNoYm9hcmRQYWdlLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZSwgU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgICAgIGFjY291bnRzTG9hZGVkLFxuICAgICAgICAgICAgICAgIHJlZnNMb2FkZWRcbiAgICAgICAgICAgIH0gPSBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgICAgIGFjY291bnRzUmVhZHk6IGFjY291bnRzTG9hZGVkICYmIHJlZnNMb2FkZWQsXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQmFzZXM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5wcmVmZXJyZWRCYXNlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5cbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbi8vIGltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XG5pbXBvcnQgTWFya2V0c1RhYmxlIGZyb20gXCIuL01hcmtldHNUYWJsZVwiO1xuXG5jbGFzcyBTdGFycmVkTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1hcmtldHNUYWJsZVxuICAgICAgICAgICAgICAgIG1hcmtldHM9e3RoaXMucHJvcHMuc3RhcnJlZE1hcmtldHN9XG4gICAgICAgICAgICAgICAgZm9yY2VEaXJlY3Rpb249e3RydWV9XG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5TdGFycmVkTWFya2V0cyA9IGNvbm5lY3QoXG4gICAgU3RhcnJlZE1hcmtldHMsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuY2xhc3MgRmVhdHVyZWRNYXJrZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgY2hhaW5JRCA9IEFwaXMuaW5zdGFuY2UoKS5jaGFpbl9pZDtcbiAgICAgICAgaWYgKGNoYWluSUQpIGNoYWluSUQgPSBjaGFpbklELnN1YnN0cigwLCA4KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhaW5JRCxcbiAgICAgICAgICAgIG1hcmtldHM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZ2V0TWFya2V0cyA9IHRoaXMuX2dldE1hcmtldHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9nZXRNYXJrZXRzKHN0YXRlID0gdGhpcy5zdGF0ZSwgcHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGNvbnN0IHtjaGFpbklEfSA9IHN0YXRlO1xuXG4gICAgICAgIGlmIChjaGFpbklEID09PSBcIjQwMThkNzg0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5tYXJrZXRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYXNzdW1lIHRlc3RuZXRcbiAgICAgICAgICAgIHJldHVybiBbW1wiVEVTVFwiLCBcIlBFRy5GQUtFVVNEXCJdLCBbXCJURVNUXCIsIFwiQlRXVFlcIl1dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICBsZXQgbWFya2V0cyA9IHRoaXMuX2dldE1hcmtldHModGhpcy5zdGF0ZSwgcHJvcHMpO1xuXG4gICAgICAgIG1hcmtldHMgPSBtYXJrZXRzLmZpbHRlcihtYXJrZXQgPT4ge1xuICAgICAgICAgICAgLyogT25seSB1c2UgbWFya2V0cyBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IHRhYiAqL1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLnF1b3Rlc1swXSA9PT0gbWFya2V0LmJhc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qIEFkZCB0aGUgcG9zc2libGUgZ2F0ZXdheSBhc3NldHMgKi9cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwcm9wcy5xdW90ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1hcmtldHMuZm9yRWFjaChtID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge3F1b3RlOiBtLnF1b3RlLCBiYXNlOiBwcm9wcy5xdW90ZXNbaV19O1xuICAgICAgICAgICAgICAgIGxldCBtYXJrZXRLZXkgPSBgJHtvYmoucXVvdGV9XyR7b2JqLmJhc2V9YDtcbiAgICAgICAgICAgICAgICBpZiAob2JqLnF1b3RlICE9PSBvYmouYmFzZSAmJiAhbWFya2V0cy5oYXMobWFya2V0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXRzID0gbWFya2V0cy5zZXQobWFya2V0S2V5LCBvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21hcmtldHN9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWFya2V0c1RhYmxlXG4gICAgICAgICAgICAgICAgbWFya2V0cz17dGhpcy5zdGF0ZS5tYXJrZXRzfVxuICAgICAgICAgICAgICAgIHNob3dGbGlwPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5GZWF0dXJlZE1hcmtldHMgPSBjb25uZWN0KFxuICAgIEZlYXR1cmVkTWFya2V0cyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtNYXJrZXRzU3RvcmUsIFNldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIGxldCB1c2VyTWFya2V0cyA9IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS51c2VyTWFya2V0cztcbiAgICAgICAgICAgIGxldCBkZWZhdWx0TWFya2V0cyA9IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5kZWZhdWx0TWFya2V0cztcblxuICAgICAgICAgICAgaWYgKHVzZXJNYXJrZXRzLnNpemUpIHtcbiAgICAgICAgICAgICAgICB1c2VyTWFya2V0cy5mb3JFYWNoKChtYXJrZXQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlZmF1bHRNYXJrZXRzLmhhcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1hcmtldHMgPSBkZWZhdWx0TWFya2V0cy5zZXQoa2V5LCBtYXJrZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1hcmtldHM6IGRlZmF1bHRNYXJrZXRzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuY2xhc3MgVG9wTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE1hcmtldHNUYWJsZSBtYXJrZXRzPXtbXX0gLz47XG4gICAgfVxufVxuXG5leHBvcnQge1N0YXJyZWRNYXJrZXRzLCBGZWF0dXJlZE1hcmtldHMsIFRvcE1hcmtldHN9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBQYWdpbmF0ZWRMaXN0IGZyb20gXCIuLi9VdGlsaXR5L1BhZ2luYXRlZExpc3RcIjtcbmltcG9ydCBNYXJrZXRzUm93IGZyb20gXCIuL01hcmtldHNSb3dcIjtcbmltcG9ydCB7SW5wdXQsIEljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgTWFya2V0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZpbHRlcjogXCJcIixcbiAgICAgICAgICAgIHNob3dGbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dIaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgbWFya2V0czogW10sXG4gICAgICAgICAgICBzb3J0Qnk6IFwidm9sdW1lUXVvdGVcIixcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb246IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgX29uVG9nZ2xlU29ydChrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5zdGF0ZS5zb3J0QnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtzb3J0RGlyZWN0aW9uOiAhdGhpcy5zdGF0ZS5zb3J0RGlyZWN0aW9ufSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c29ydEJ5OiBrZXl9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUobmV4dFByb3BzID0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvcHMgPSBuZXh0UHJvcHMgfHwgdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHNob3dGbGlwID0gcHJvcHMuZm9yY2VEaXJlY3Rpb247XG5cbiAgICAgICAgaWYgKHByb3BzLm1hcmtldHMgJiYgcHJvcHMubWFya2V0cy5zaXplID4gMCkge1xuICAgICAgICAgICAgbGV0IG1hcmtldHMgPSBwcm9wcy5tYXJrZXRzXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgICAgICAgIC5tYXAobWFya2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1b3RlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChtYXJrZXQucXVvdGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IENoYWluU3RvcmUuZ2V0QXNzZXQobWFya2V0LmJhc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2UgfHwgIXF1b3RlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldE5hbWUgPSBgJHttYXJrZXQuYmFzZX1fJHttYXJrZXQucXVvdGV9YDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBtYXJrZXROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBtYXJrZXQucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBtYXJrZXQuYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuOiBwcm9wcy5oaWRkZW5NYXJrZXRzLmluY2x1ZGVzKG1hcmtldE5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGYXZvcml0ZTogcHJvcHMuaXNGYXZvcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiBwcm9wcy5hbGxNYXJrZXRTdGF0cy5nZXQobWFya2V0TmFtZSwge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdGFycmVkOiB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IGEgIT09IG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0ZsaXAsIG1hcmtldHN9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90b2dnbGVTaG93SGlkZGVuKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93SGlkZGVuID09PSB2YWwpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dIaWRkZW46IHZhbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRmlsdGVySW5wdXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcjogZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKX0pO1xuICAgIH1cblxuICAgIF9oYW5kbGVIaWRlKHJvdywgc3RhdHVzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhhbmRsZUhpZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhbmRsZUhpZGUocm93LCBzdGF0dXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmhpZGVNYXJrZXQocm93LmtleSwgc3RhdHVzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRmxpcChyb3csIHN0YXR1cykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5oYW5kbGVGbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5oYW5kbGVGbGlwKHJvdywgc3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VNYXJrZXREaXJlY3Rpb24oe1xuICAgICAgICAgICAgW3Jvdy5rZXldOiBzdGF0dXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge21hcmtldHMsIHNob3dGbGlwLCBzaG93SGlkZGVuLCBmaWx0ZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBtYXJrZXRSb3dzID0gbWFya2V0c1xuICAgICAgICAgICAgLmZpbHRlcihtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFmaWx0ZXIgfHwgbS5pc1N0YXJyZWQpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkICYmXG4gICAgICAgICAgICAgICAgICAgIChtLm1hcmtldFN0YXRzICYmIFwidm9sdW1lQmFzZVwiIGluIG0ubWFya2V0U3RhdHMpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIW0ubWFya2V0U3RhdHMudm9sdW1lQmFzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7c29ydEJ5LCBzb3J0RGlyZWN0aW9ufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNvcnRCeSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJpY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLm1hcmtldFN0YXRzLnByaWNlICYmIGIubWFya2V0U3RhdHMucHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydERpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYi5tYXJrZXRTdGF0cy5wcmljZS50b1JlYWwoKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLm1hcmtldFN0YXRzLnByaWNlLnRvUmVhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5tYXJrZXRTdGF0cy5wcmljZS50b1JlYWwoKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIubWFya2V0U3RhdHMucHJpY2UudG9SZWFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnREaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGIubWFya2V0U3RhdHNbc29ydEJ5XSkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGEubWFya2V0U3RhdHNbc29ydEJ5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGEubWFya2V0U3RhdHNbc29ydEJ5XSkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGIubWFya2V0U3RhdHNbc29ydEJ5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnREaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLm1hcmtldFN0YXRzW3NvcnRCeV0gLSBhLm1hcmtldFN0YXRzW3NvcnRCeV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLm1hcmtldFN0YXRzW3NvcnRCeV0gLSBiLm1hcmtldFN0YXRzW3NvcnRCeV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5pc0hpZGRlbiAhPT0gdGhpcy5zdGF0ZS5zaG93SGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0QXNzZXQocm93LnF1b3RlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0QXNzZXQocm93LmJhc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpc0JpdEFzc2V0OiBxdW90ZUlzQml0QXNzZXR9ID0gdXRpbHMucmVwbGFjZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZU9iamVjdFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7aXNCaXRBc3NldDogYmFzZUlzQml0QXNzZXR9ID0gdXRpbHMucmVwbGFjZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1b3RlU3ltYm9sID0gcm93LnF1b3RlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVN5bWJvbCA9IHJvdy5iYXNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdW90ZUlzQml0QXNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sID0gXCJiaXRcIiArIHF1b3RlU3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VJc0JpdEFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sID0gXCJiaXRcIiArIGJhc2VTeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJQYWlyID0gZmlsdGVyLmluY2x1ZGVzKFwiOlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyUGFpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVGaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoXCI6XCIpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VGaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoXCI6XCIpWzFdLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFN0cmluZyhxdW90ZUZpbHRlcikudG9Mb3dlckNhc2UoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcoYmFzZUZpbHRlcikudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKGZpbHRlcikudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcoZmlsdGVyKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TWFya2V0c1Jvd1xuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUhpZGU9e3RoaXMuX2hhbmRsZUhpZGUuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm93LmlzSGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmxpcD17dGhpcy5faGFuZGxlRmxpcC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3cuaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0cz17dGhpcy5wcm9wcy5zdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIociA9PiAhIXIpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlci4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUZpbHRlcklucHV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0b3IgaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiBcIjZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiaW5saW5lLWJsb2NrXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmU6IHNob3dIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTaG93SGlkZGVuLmJpbmQodGhpcywgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuaGlkZV9oaWRkZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJpbmxpbmUtYmxvY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmFjdGl2ZTogIXNob3dIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTaG93SGlkZGVuLmJpbmQodGhpcywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5zaG93X2hpZGRlblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMC41cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjNweCAwIDBcIiwgd2lkdGg6IFwiZml0LWNvbnRlbnRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5vbmx5TGlxdWlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5TGlxdWlkOiAhdGhpcy5wcm9wcy5vbmx5TGlxdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc2hvd19vbmx5X2xpcXVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRlZExpc3RcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nTGVmdDogMCwgcGFkZGluZ1JpZ2h0OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgZGFzaGJvYXJkLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwiLCB3aWR0aDogXCI3NXB4XCJ9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC5hc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0Zhdm9yaXRlID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnF1b3RlX25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uVG9nZ2xlU29ydC5iaW5kKHRoaXMsIFwicHJpY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW4taGlkZS1zbWFsbCBpcy1zb3J0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiaXMtYWN0aXZlXCI6IHRoaXMuc3RhdGUuc29ydEJ5ID09PSBcInByaWNlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uVG9nZ2xlU29ydC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJpcy1zb3J0YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWFjdGl2ZVwiOiB0aGlzLnN0YXRlLnNvcnRCeSA9PT0gXCJjaGFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmhvdXJfMjRfc2hvcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uVG9nZ2xlU29ydC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidm9sdW1lUXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImlzLXNvcnRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtYWN0aXZlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0QnkgPT09IFwidm9sdW1lUXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS52b2x1bWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dGbGlwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmZsaXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNob3dIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImV4Y2hhbmdlLmhpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYWNjb3VudC5wZXJtLnNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgIW1hcmtldFJvd3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWVtcHR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcInRyLXRhYmxlLWVtcHR5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17c2hvd0ZsaXAgPyA3IDogNn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJkYXNoYm9hcmQudGFibGVfZW1wdHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXJrZXRSb3dzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezI1fVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInV0aWxpdHkudG90YWxfeF9tYXJrZXRzXCJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc9XCIxLjVyZW1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgTWFya2V0c1RhYmxlLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmUsIE1hcmtldHNTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgbGV0IHttYXJrZXREaXJlY3Rpb25zLCBoaWRkZW5NYXJrZXRzfSA9IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWFya2V0RGlyZWN0aW9ucyxcbiAgICAgICAgICAgICAgICBoaWRkZW5NYXJrZXRzLFxuICAgICAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cyxcbiAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcIm9ubHlMaXF1aWRcIixcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNsYXNzIE1hcmtldHNSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHF1b3RlOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgYmFzZTogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdGVtcENvbXBvbmVudDogXCJ0clwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB1dGlscy5jaGVja19tYXJrZXRfc3RhdHMobnAubWFya2V0U3RhdHMsIHRoaXMucHJvcHMubWFya2V0U3RhdHMpIHx8XG4gICAgICAgICAgICBucC5iYXNlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLmJhc2UuZ2V0KFwiaWRcIikgfHxcbiAgICAgICAgICAgIG5wLnF1b3RlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpIHx8XG4gICAgICAgICAgICBucy5pbWdFcnJvciAhPT0gdGhpcy5zdGF0ZS5pbWdFcnJvciB8fFxuICAgICAgICAgICAgbnAuc3RhcnJlZE1hcmtldHMuc2l6ZSAhPT0gdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cy5zaXplXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXRJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9jbGVhckludGVydmFsKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2UuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMuYmFzZS5nZXQoXCJpZFwiKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnF1b3RlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuICAgICAgICAgICAgdGhpcy5fc2V0SW50ZXJ2YWwobmV4dFByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zZXRJbnRlcnZhbChuZXh0UHJvcHMgPSBudWxsKSB7XG4gICAgICAgIGxldCB7YmFzZSwgcXVvdGV9ID0gbmV4dFByb3BzIHx8IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMuc3RhdHNDaGVja2VkID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHNJbnRlcnZhbChcbiAgICAgICAgICAgIDM1ICogMTAwMCxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBxdW90ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9jbGVhckludGVydmFsKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0c0ludGVydmFsKSB0aGlzLnN0YXRzSW50ZXJ2YWwoKTtcbiAgICB9XG5cbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0uc3JjID0gXCJhc3NldC1zeW1ib2xzL2J0cy5wbmdcIjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGltZ0Vycm9yOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90b2dnbGVGYXZvcml0ZU1hcmtldChxdW90ZSwgYmFzZSkge1xuICAgICAgICBsZXQgbWFya2V0SUQgPSBgJHtxdW90ZX1fJHtiYXNlfWA7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cy5oYXMobWFya2V0SUQpKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMucmVtb3ZlU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBtYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIGlzSGlkZGVuLFxuICAgICAgICAgICAgaW52ZXJ0ZWQsXG4gICAgICAgICAgICBoYW5kbGVIaWRlLFxuICAgICAgICAgICAgaGFuZGxlRmxpcFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBmdW5jdGlvbiBnZXRJbWFnZU5hbWUoYXNzZXQpIHtcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBhc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3ltYm9sID09PSBcIk9QRU4uQlRDXCIgfHxcbiAgICAgICAgICAgICAgICBzeW1ib2wgPT09IFwiR0RFWC5CVENcIiB8fFxuICAgICAgICAgICAgICAgIHN5bWJvbCA9PT0gXCJSVURFWC5CVENcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICBsZXQgaW1nTmFtZSA9IGFzc2V0LmdldChcInN5bWJvbFwiKS5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICByZXR1cm4gaW1nTmFtZS5sZW5ndGggPT09IDIgPyBpbWdOYW1lWzFdIDogaW1nTmFtZVswXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1nTmFtZSA9IGdldEltYWdlTmFtZShxdW90ZSk7XG4gICAgICAgIGxldCBjaGFuZ2VDbGFzcyA9ICFtYXJrZXRTdGF0c1xuICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICA6IHBhcnNlRmxvYXQobWFya2V0U3RhdHMuY2hhbmdlKSA+IDBcbiAgICAgICAgICAgICAgICA/IFwiY2hhbmdlLXVwXCJcbiAgICAgICAgICAgICAgICA6IHBhcnNlRmxvYXQobWFya2V0U3RhdHMuY2hhbmdlKSA8IDBcbiAgICAgICAgICAgICAgICAgICAgPyBcImNoYW5nZS1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgIGxldCBtYXJrZXRJRCA9IGAke3F1b3RlLmdldChcInN5bWJvbFwiKX1fJHtiYXNlLmdldChcInN5bWJvbFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IHN0YXJDbGFzcyA9IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKVxuICAgICAgICAgICAgPyBcImdvbGQtc3RhclwiXG4gICAgICAgICAgICA6IFwiZ3JleS1zdGFyXCI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZhdm9yaXRlTWFya2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJzeW1ib2xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5maV9zdGFyLm1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hcmtldC8ke3RoaXMucHJvcHMucXVvdGUuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XyR7dGhpcy5wcm9wcy5iYXNlLmdldChcInN5bWJvbFwiKX1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRXJyb3IuYmluZCh0aGlzLCBpbWdOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiAyMCwgbWFyZ2luUmlnaHQ6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0Zhdm9yaXRlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNGYXZvcml0ZSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5vVGlwIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICB7bWFya2V0U3RhdHMgJiYgbWFya2V0U3RhdHMucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdXRpbHMucHJpY2VfdGV4dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLnByaWNlLnRvUmVhbCh0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKGNoYW5nZUNsYXNzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHshbWFya2V0U3RhdHMgPyBudWxsIDogbWFya2V0U3RhdHMuY2hhbmdlfSVcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgIHshbWFya2V0U3RhdHNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1dGlscy5mb3JtYXRfdm9sdW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHMudm9sdW1lUXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAge2ludmVydGVkID09PSBudWxsIHx8ICF0aGlzLnByb3BzLmlzRmF2b3JpdGUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUZsaXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzaHVmZmxlXCIgdGl0bGU9XCJpY29ucy5zaHVmZmxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0hpZGRlbiA/IFwiYWN0aW9uLXBsdXNcIiA6IFwib3JkZXItY2FuY2VsXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVIaWRlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2lzSGlkZGVuID8gXCJwbHVzLWNpcmNsZVwiIDogXCJjcm9zcy1jaXJjbGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbnMucGx1c19jaXJjbGUuc2hvd19tYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImljb25zLmNyb3NzX2NpcmNsZS5oaWRlX21hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5NYXJrZXRzUm93ID0gQmluZFRvQ2hhaW5TdGF0ZShNYXJrZXRzUm93KTtcbmV4cG9ydCBkZWZhdWx0IE1hcmtldHNSb3c7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcblxuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcblxuY2xhc3MgRGFzaGJvYXJkQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbQWNjb3VudFN0b3JlLCBTZXR0aW5nc1N0b3JlLCBNYXJrZXRzU3RvcmVdfVxuICAgICAgICAgICAgICAgIGluamVjdD17e1xuICAgICAgICAgICAgICAgICAgICBsaW5rZWRBY2NvdW50czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmxpbmtlZEFjY291bnRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBteUhpZGRlbkFjY291bnRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkubXlIaWRkZW5BY2NvdW50cztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNSZWFkeTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50c0xvYWRlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnJlZnNMb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVudHJ5OiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFzaGJvYXJkRW50cnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWNjb3VudHNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RGFzaGJvYXJkIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBEYXNoYm9hcmRMaXN0IGZyb20gXCIuL0Rhc2hib2FyZExpc3RcIjtcbmltcG9ydCB7UmVjZW50VHJhbnNhY3Rpb25zfSBmcm9tIFwiLi4vQWNjb3VudC9SZWNlbnRUcmFuc2FjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBNYXJrZXRDYXJkIGZyb20gXCIuL01hcmtldENhcmRcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBMb2dpblNlbGVjdG9yIGZyb20gXCIuLi9Mb2dpblNlbGVjdG9yXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCB7Z2V0RmVhdHVyZWRNYXJrZXRzfSBmcm9tIFwiLi4vLi4vYnJhbmRpbmdcIjtcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgbWFya2V0c0J5Q2hhaW4gPSB7XG4gICAgICAgICAgICBcIjQwMThkNzg0XCI6IGdldEZlYXR1cmVkTWFya2V0cygpLFxuICAgICAgICAgICAgXCIzOWY1ZTJlZFwiOiBbW1wiVEVTVFwiLCBcIlBFRy5GQUtFVVNEXCJdLCBbXCJURVNUXCIsIFwiQlRXVFlcIl1dXG4gICAgICAgIH07XG4gICAgICAgIGxldCBjaGFpbklEID0gQXBpcy5pbnN0YW5jZSgpLmNoYWluX2lkO1xuICAgICAgICBpZiAoY2hhaW5JRCkgY2hhaW5JRCA9IGNoYWluSUQuc3Vic3RyKDAsIDgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgIHNob3dJZ25vcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGZlYXR1cmVkTWFya2V0czpcbiAgICAgICAgICAgICAgICBtYXJrZXRzQnlDaGFpbltjaGFpbklEXSB8fCBtYXJrZXRzQnlDaGFpbltcIjQwMThkNzg0XCJdLFxuICAgICAgICAgICAgbmV3QXNzZXRzOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnRFbnRyeTogcHJvcHMuY3VycmVudEVudHJ5XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5fc29ydE1hcmtldHNCeVZvbHVtZSA9IHRoaXMuX3NvcnRNYXJrZXRzQnlWb2x1bWUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMsIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUuZmVhdHVyZWRNYXJrZXRzLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmVhdHVyZWRNYXJrZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlLm5ld0Fzc2V0cyxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5ld0Fzc2V0c1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmxpbmtlZEFjY291bnRzICE9PSB0aGlzLnByb3BzLmxpbmtlZEFjY291bnRzIHx8XG4gICAgICAgICAgICAvLyBuZXh0UHJvcHMubWFya2V0U3RhdHMgIT09IHRoaXMucHJvcHMubWFya2V0U3RhdHMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5pZ25vcmVkQWNjb3VudHMgIT09IHRoaXMucHJvcHMuaWdub3JlZEFjY291bnRzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucGFzc3dvcmRBY2NvdW50ICE9PSB0aGlzLnByb3BzLnBhc3N3b3JkQWNjb3VudCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLndpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudHNSZWFkeSAhPT0gdGhpcy5wcm9wcy5hY2NvdW50c1JlYWR5IHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuc2hvd0lnbm9yZWQgIT09IHRoaXMuc3RhdGUuc2hvd0lnbm9yZWQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5jdXJyZW50RW50cnkgIT09IHRoaXMuc3RhdGUuY3VycmVudEVudHJ5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xuICAgIH1cblxuICAgIF9zZXREaW1lbnNpb25zKCkge1xuICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAod2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRofSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25Ub2dnbGVJZ25vcmVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dJZ25vcmVkOiAhdGhpcy5zdGF0ZS5zaG93SWdub3JlZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25Td2l0Y2hUeXBlKHR5cGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50RW50cnk6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBkYXNoYm9hcmRFbnRyeTogdHlwZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBsaW5rZWRBY2NvdW50cyxcbiAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMsXG4gICAgICAgICAgICBhY2NvdW50c1JlYWR5LFxuICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBzaG93SWdub3JlZCxcbiAgICAgICAgICAgIGZlYXR1cmVkTWFya2V0cyxcbiAgICAgICAgICAgIG5ld0Fzc2V0cyxcbiAgICAgICAgICAgIGN1cnJlbnRFbnRyeVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAocGFzc3dvcmRBY2NvdW50ICYmICFsaW5rZWRBY2NvdW50cy5oYXMocGFzc3dvcmRBY2NvdW50KSkge1xuICAgICAgICAgICAgbGlua2VkQWNjb3VudHMgPSBsaW5rZWRBY2NvdW50cy5hZGQocGFzc3dvcmRBY2NvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmFtZXMgPSBsaW5rZWRBY2NvdW50cy50b0FycmF5KCkuc29ydCgpO1xuICAgICAgICBpZiAocGFzc3dvcmRBY2NvdW50ICYmIG5hbWVzLmluZGV4T2YocGFzc3dvcmRBY2NvdW50KSA9PT0gLTEpXG4gICAgICAgICAgICBuYW1lcy5wdXNoKHBhc3N3b3JkQWNjb3VudCk7XG4gICAgICAgIGxldCBpZ25vcmVkID0gbXlIaWRkZW5BY2NvdW50cy50b0FycmF5KCkuc29ydCgpO1xuXG4gICAgICAgIGxldCBhY2NvdW50Q291bnQgPVxuICAgICAgICAgICAgbGlua2VkQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLnNpemUgK1xuICAgICAgICAgICAgKHBhc3N3b3JkQWNjb3VudCA/IDEgOiAwKTtcblxuICAgICAgICBpZiAoIWFjY291bnRzUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWxpZE1hcmtldHMgPSAwO1xuXG4gICAgICAgIGxldCBtYXJrZXRzID0gZmVhdHVyZWRNYXJrZXRzXG4gICAgICAgICAgICAubWFwKHBhaXIgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEhBQ0s6IFNob3cgYWxsIGRlZmluZWQgbWFya2V0c1xuICAgICAgICAgICAgICAgIHZhbGlkTWFya2V0cysrO1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZE1hcmtldHMgPiAxNSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBzaG93LWZvci0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgIWFjY291bnRDb3VudCA/IFwieGxhcmdlXCIgOiBcImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZE1hcmtldHMgPiAxMikge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBzaG93LWZvci0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgIWFjY291bnRDb3VudCA/IFwibGFyZ2VcIiA6IFwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgfWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtldENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGFpclswXSArIFwiX1wiICsgcGFpclsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElkPXtwYWlyWzFdICsgXCJfXCIgKyBwYWlyWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3PXtuZXdBc3NldHMuaW5kZXhPZihwYWlyWzFdKSAhPT0gLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtwYWlyWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17cGFpclsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVydD17cGFpclsyXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGU9e3ZhbGlkTWFya2V0cyA+IDM1fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSk7XG5cbiAgICAgICAgaWYgKCFhY2NvdW50Q291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9naW5TZWxlY3RvciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXCJhY2NvdW50c1wiLCBcImNvbnRhY3RzXCIsIFwicmVjZW50XCJdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIndyYXBwZXJcIiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJjb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIycmVtIDhweFwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9ubHlBY2NvdW50cyA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudC1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxNSwgcGFkZGluZ1RvcDogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuZmVhdHVyZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9ubHlBY2NvdW50cyA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtdXAtMSBtZWRpdW0tdXAtMyBsYXJnZS11cC00IG5vLW92ZXJmbG93IGZtLW91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBEYXNoYm9hcmRXcmFwcGVyID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiA8RGFzaGJvYXJkIHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoRGFzaGJvYXJkV3JhcHBlciA9IGNvbm5lY3QoXG4gICAgRGFzaGJvYXJkV3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbikpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jbGFzcyBNYXJrZXRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBxdW90ZTogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGJhc2U6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxuICAgICAgICBpbnZlcnQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGludmVydDogdHJ1ZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfY2hlY2tTdGF0cyhuZXdTdGF0cyA9IHtjbG9zZToge319LCBvbGRTdGF0cyA9IHtjbG9zZToge319KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXdTdGF0cy52b2x1bWVCYXNlICE9PSBvbGRTdGF0cy52b2x1bWVCYXNlIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV3U3RhdHMuY2xvc2UgJiYgbmV3U3RhdHMuY2xvc2UuYmFzZSxcbiAgICAgICAgICAgICAgICBvbGRTdGF0cy5jbG9zZSAmJiBvbGRTdGF0cy5jbG9zZS5iYXNlXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV3U3RhdHMuY2xvc2UgJiYgbmV3U3RhdHMuY2xvc2UucXVvdGUsXG4gICAgICAgICAgICAgICAgb2xkU3RhdHMuY2xvc2UgJiYgb2xkU3RhdHMuY2xvc2UucXVvdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLl9jaGVja1N0YXRzKG5wLm1hcmtldFN0YXRzLCB0aGlzLnByb3BzLm1hcmtldFN0YXRzKSB8fFxuICAgICAgICAgICAgbnAuYmFzZS5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5iYXNlLmdldChcImlkXCIpIHx8XG4gICAgICAgICAgICBucC5xdW90ZS5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5xdW90ZS5nZXQoXCJpZFwiKSB8fFxuICAgICAgICAgICAgbnMuaW1nRXJyb3IgIT09IHRoaXMuc3RhdGUuaW1nRXJyb3JcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzLmRlZmVyKHRoaXMucHJvcHMucXVvdGUsIHRoaXMucHJvcHMuYmFzZSk7XG4gICAgICAgIHRoaXMuc3RhdHNDaGVja2VkID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0cy5iaW5kKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAzNSAqIDEwMDBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRzSW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGdvVG9NYXJrZXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGhpc3RvcnkgPSB0aGlzLmNvbnRleHQucm91dGVyLmhpc3Rvcnk7XG5cbiAgICAgICAgaGlzdG9yeS5wdXNoKFxuICAgICAgICAgICAgYC9tYXJrZXQvJHt0aGlzLnByb3BzLmJhc2UuZ2V0KFwic3ltYm9sXCIpfV8ke3RoaXMucHJvcHMucXVvdGUuZ2V0KFxuICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICl9YFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5zcmMgPSBcImFzc2V0LXN5bWJvbHMvYnRzLnBuZ1wiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2hpZGUsIGlzTG93Vm9sdW1lLCBiYXNlLCBxdW90ZSwgbWFya2V0U3RhdHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGlzTG93Vm9sdW1lIHx8IGhpZGUpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlTmFtZShhc3NldCkge1xuICAgICAgICAgICAgbGV0IHN5bWJvbCA9IGFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAvLyBpZiAoc3ltYm9sID09PSBcIk9QRU4uQlRDXCIgfHwgc3ltYm9sID09PSBcIkdERVguQlRDXCIpIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAvLyBpZiAoc3ltYm9sLnN0YXJ0c1dpdGgoXCJFU0NST1cuXCIpKSByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgLy8gbGV0IGltZ05hbWUgPSBhc3NldC5nZXQoXCJzeW1ib2xcIikuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGltZ05hbWUubGVuZ3RoID09PSAyID8gaW1nTmFtZVsxXSA6IGltZ05hbWVbMF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGltZ05hbWUgPSBnZXRJbWFnZU5hbWUoYmFzZSk7XG5cbiAgICAgICAgLy8gbGV0IG1hcmtldElEID0gYmFzZS5nZXQoXCJzeW1ib2xcIikgKyBcIl9cIiArIHF1b3RlLmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgLy8gbGV0IHN0YXRzID0gbWFya2V0U3RhdHM7XG4gICAgICAgIGxldCBjaGFuZ2VDbGFzcyA9ICFtYXJrZXRTdGF0c1xuICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICA6IHBhcnNlRmxvYXQobWFya2V0U3RhdHMuY2hhbmdlKSA+IDBcbiAgICAgICAgICAgICAgICA/IFwiY2hhbmdlLXVwXCJcbiAgICAgICAgICAgICAgICA6IHBhcnNlRmxvYXQobWFya2V0U3RhdHMuY2hhbmdlKSA8IDBcbiAgICAgICAgICAgICAgICAgICAgPyBcImNoYW5nZS1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JpZC1ibG9jayBuby1vdmVyZmxvdyBmbS1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ29Ub01hcmtldC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBzaHJpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LWFsaWduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogNzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm0tdm9sdW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiIC8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0U3RhdHMgJiYgbWFya2V0U3RhdHMucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1dGlscy5wcmljZV90ZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cy5wcmljZS50b1JlYWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS12b2x1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbHVtZVwiIC8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW1hcmtldFN0YXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHV0aWxzLmZvcm1hdF92b2x1bWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLnZvbHVtZUJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm0tY2hhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jaGFuZ2VcIiAvPjp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25hbWVzKFwiZmxvYXQtcmlnaHRcIiwgY2hhbmdlQ2xhc3MpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW1hcmtldFN0YXRzID8gbnVsbCA6IG1hcmtldFN0YXRzLmNoYW5nZX0lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1hcmtldENhcmQgPSBCaW5kVG9DaGFpblN0YXRlKE1hcmtldENhcmQpO1xuXG5jbGFzcyBNYXJrZXRDYXJkV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE1hcmtldENhcmQgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBNYXJrZXRDYXJkV3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtNYXJrZXRzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5tYXJrZXRJZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFEQTtBQWVBO0FBZkE7QUFDQTtBQWtCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQVVBO0FBMUNBO0FBREE7QUFEQTtBQUpBO0FBREE7QUFEQTtBQTBEQTs7OztBQWhGQTtBQUNBO0FBa0ZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7OztBQVRBO0FBQ0E7QUFVQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTtBQUNBO0FBV0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQVpBO0FBYUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7OztBQXBFQTtBQUNBO0FBc0VBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQWxCQTtBQUNBO0FBcUJBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQVhBO0FBWUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUF6Q0E7QUEyQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFLQTtBQVpBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBWkE7QUFzQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZEE7QUFEQTtBQWhDQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBTkE7QUFRQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTtBQVJBO0FBVUE7QUFWQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFUQTtBQVdBO0FBWEE7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFyREE7QUFnRUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBV0E7QUFDQTtBQUNBO0FBcEZBO0FBdERBO0FBOElBOzs7O0FBblhBO0FBQ0E7QUFxWEE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQWhCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFKQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFaQTtBQWNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQWZBO0FBREE7QUEwQkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBTEE7QUFEQTtBQTlFQTtBQWlHQTs7OztBQXROQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFDQTtBQUNBO0FBaU5BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFGQTtBQXdCQTtBQXhCQTtBQTJCQTs7OztBQTlCQTtBQUNBO0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFuQkE7QUFvQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFkQTtBQURBO0FBc0JBOzs7O0FBN0tBO0FBQ0E7QUErS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTEE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBV0E7OztBQUVBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRkE7QUE3QkE7QUFsQkE7QUF3REE7Ozs7QUF2S0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVlBO0FBREE7QUFDQTtBQUNBO0FBNkpBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==