(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[26],{

/***/ 2936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2937);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PaginatedList = function (_React$Component) {
    _inherits(PaginatedList, _React$Component);

    function PaginatedList(props) {
        _classCallCheck(this, PaginatedList);

        var _this = _possibleConstructorReturn(this, (PaginatedList.__proto__ || Object.getPrototypeOf(PaginatedList)).call(this, props));

        _this.state = {
            pageSize: props.pageSize
        };
        return _this;
    }

    _createClass(PaginatedList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var pageSize = this.state.pageSize;
            var _props = this.props,
                header = _props.header,
                rows = _props.rows,
                extraRow = _props.extraRow,
                loading = _props.loading;


            var pageSizeOptions = [10, 20, 30, 40, 50, 100].filter(function (item) {
                return item < Math.max(_this2.props.pageSize, rows.length);
            });
            pageSizeOptions.push(Math.max(this.props.pageSize, rows.length));

            var totalColumnsLabel = null;
            if (this.props.label !== null) {
                totalColumnsLabel = function totalColumnsLabel(total) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(_this2.props.label, {
                        count: total
                    });
                };
            } else if (typeof this.props.totalLabel === "string") {
                totalColumnsLabel = function totalColumnsLabel(total) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(_this2.props.totalLabel, {
                        count: total
                    });
                };
            } else if (_typeof(this.props.totalLabel) === "object") {
                totalColumnsLabel = function totalColumnsLabel(total) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(_this2.props.totalLabel.key, _extends({
                        count: total
                    }, _this2.props.totalLabel.args));
                };
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "paginated-list", style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Table"], {
                    loading: loading,
                    dataSource: rows,
                    uns: true,
                    columns: Array.isArray(header) ? header : [],
                    footer: function footer() {
                        return extraRow ? extraRow : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            "\xA0"
                        );
                    },
                    onChange: this.props.toggleSortOrder,
                    pagination: {
                        showSizeChanger: true,
                        hideOnSinglePage: false,
                        defaultPageSize: pageSize,
                        pageSizeOptions: pageSizeOptions.map(function (o) {
                            return o.toString();
                        }),
                        showTotal: function showTotal(total, range) {
                            return totalColumnsLabel(total);
                        }
                    },
                    rowClassName: this.props.rowClassName == null ? undefined : function (record, index) {
                        return _this2.props.rowClassName(record, index);
                    },
                    rowSelection: this.props.rowSelection
                }),
                this.props.children
            );
        }
    }]);

    return PaginatedList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PaginatedList.defaultProps = {
    rows: [],
    pageSize: 20,

    className: "table",
    extraRow: null,
    style: { paddingBottom: "1rem" },
    loading: false,

    // can be a string (assumes the translation has one argument, total count),
    // or an object, which allows a custom label
    totalLabel: "utility.total_x_items",

    // @deprecated, use totalLabel
    label: null
};
/* harmony default export */ __webpack_exports__["default"] = (PaginatedList);

/***/ }),

/***/ 2937:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1895);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1996);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2667);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(734);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2949);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3297);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2143);
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
            /*        if (!accountCount) {
                return <LoginSelector />;
            }*/

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
                                    preferredBases.map(function (q) {
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
                                            q.replace("RUDEX.", "")
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

/***/ 3297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredMarkets", function() { return StarredMarkets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedMarkets", function() { return FeaturedMarkets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMarkets", function() { return TopMarkets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(498);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1895);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(734);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2386);
/* harmony import */ var _MarketsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3298);
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

/***/ 3298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1895);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(429);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(749);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2386);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(735);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(734);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(580);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2936);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1903);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2139);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1855);
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

        _this.sortFunctions = {
            alphabetic: function alphabetic(a, b, force) {
                if (a.key > b.key) return force ? 1 : -1;
                if (a.key < b.key) return force ? -1 : 1;
                return 0;
            },
            priceValue: function priceValue(a, b) {
                var aPrice = a.price.props.children;
                var bPrice = b.price.props.children;
                if (aPrice && bPrice) {
                    return this.sort(aPrice, bPrice);
                } else {
                    return this.sortFunctions.alphabetic(a, b, true);
                }
            },
            volumeValue: function volumeValue(a, b) {
                var aPrice = a.volume || 0;
                var bPrice = b.volume || 0;
                var compared = 0;
                if (aPrice && bPrice) {
                    compared = aPrice - bPrice;
                }
                if (compared == 0) {
                    return this.sortFunctions.alphabetic(a, b, true);
                } else {
                    return compared;
                }
            },
            changeValue: function changeValue(a, b) {
                var aValue = parseFloat(a.hour_24);
                var bValue = parseFloat(b.hour_24);
                var compared = 0;
                if (aValue && bValue && !isNaN(aValue) && !isNaN(bValue)) {
                    compared = aValue - bValue;
                }
                if (compared == 0) {
                    return this.sortFunctions.alphabetic(a, b, true);
                } else {
                    return compared;
                }
            }
        };

        _this.state = {
            filter: "",
            showFlip: false,
            showHidden: false,
            markets: []
        };

        _this.update = _this.update.bind(_this);
        for (var key in _this.sortFunctions) {
            _this.sortFunctions[key] = _this.sortFunctions[key].bind(_this);
        }
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
                        basePrecision: base.get("precision"),
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
        key: "sort",
        value: function sort(aPrice, bPrice) {
            var convert = function convert(price) {
                price = price.replace(/\,/g, "");
                if (price.includes("k")) price = price.replace(/k/g, "") * 1000;
                if (price.includes("M")) price = price.replace(/M/g, "") * 1000 * 1000;
                return price;
            };
            aPrice = convert(aPrice);
            bPrice = convert(bPrice);

            if (aPrice === null && bPrice !== null) {
                return 1;
            } else if (aPrice !== null && bPrice === null) {
                return -1;
            } else {
                return aPrice - bPrice;
            }
        }
    }, {
        key: "getHeader",
        value: function getHeader() {
            var _state = this.state,
                showFlip = _state.showFlip,
                showHidden = _state.showHidden;

            return [{
                dataIndex: "star",
                align: "right",
                width: "75px",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { whiteSpace: "nowrap", cursor: "pointer" } },
                        item
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.asset" }),
                dataIndex: "asset",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        item
                    );
                }
            }, this.props.isFavorite ? {} : {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.user_issued_assets.quote_name" }),
                dataIndex: "quote_name",
                align: "right",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { whiteSpace: "nowrap" } },
                        item
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price" }),
                dataIndex: "price",
                align: "right",
                sorter: this.sortFunctions.priceValue,
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { whiteSpace: "nowrap" } },
                        item
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.hour_24_short" }),
                dataIndex: "hour_24",
                align: "right",
                sorter: this.sortFunctions.changeValue,
                render: function render(text, record, index) {
                    var changeClass = parseFloat(record.hour_24) > 0 ? "change-up" : parseFloat(record.hour_24) < 0 ? "change-down" : "";
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: { whiteSpace: "nowrap", textAlign: "right" },
                            className: changeClass
                        },
                        record.hour_24,
                        "%"
                    );
                }
            }, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.volume" }),
                dataIndex: "volume",
                align: "right",
                sorter: this.sortFunctions.volumeValue,
                defaultSortOrder: "descend",
                render: function render(text, record, index) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { whiteSpace: "nowrap" } },
                        common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].format_volume(record.volume, record.basePrecision)
                    );
                }
            }, showFlip ? {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.flip" }),
                dataIndex: "flip",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            className: "column-hide-small",
                            style: { whiteSpace: "nowrap" }
                        },
                        item
                    );
                }
            } : {}, {
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    content: !showHidden ? "exchange.hide" : "account.perm.show"
                }),
                dataIndex: "hide",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { whiteSpace: "nowrap" } },
                        item
                    );
                }
            }];
        }
    }, {
        key: "_setInterval",
        value: function _setInterval() {
            var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _ref = nextProps || this.props,
                base = _ref.base,
                quote = _ref.quote;

            this.statsChecked = new Date();
            this.statsInterval = MarketsActions.getMarketStatsInterval(35 * 1000, base, quote);
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
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addStarMarket(quote, base);
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeStarMarket(quote, base);
            }
        }
    }, {
        key: "getTableData",
        value: function getTableData(row) {
            var base = row.base,
                quote = row.quote,
                marketStats = row.marketStats,
                isHidden = row.isHidden,
                inverted = row.inverted,
                basePrecision = row.basePrecision;


            function getImageName(symbol) {
                if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                if (symbol.startsWith("RUDEX.")) return symbol;

                var imgName = symbol.split(".");
                return imgName.length === 2 ? imgName[1] : imgName[0];
            }
            var imgName = getImageName(quote);

            var marketID = quote + "_" + base;

            var starClass = this.props.starredMarkets.has(marketID) ? "gold-star" : "grey-star";

            return {
                key: marketID,
                star: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        onClick: this._toggleFavoriteMarket.bind(this, quote, base)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        style: { cursor: "pointer" },
                        className: starClass,
                        name: "fi-star",
                        title: "icons.fi_star.market"
                    })
                ),
                asset: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"],
                    { to: "/market/" + quote + "_" + base },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                        ref: imgName.toLowerCase(),
                        className: "column-hide-small",
                        onError: this._onError.bind(this, imgName),
                        style: { maxWidth: 20, marginRight: 10 },
                        src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { dataPlace: "top", name: quote }),
                    "\xA0",
                    this.props.isFavorite ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        ":\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { dataPlace: "top", name: base })
                    ) : null
                ),
                quote_name: this.props.isFavorite ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: { textAlign: "right" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { noTip: true, name: base })
                ),
                price: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "column-hide-small", style: { textAlign: "right" } },
                    marketStats && marketStats.price ? common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].price_text(marketStats.price.toReal(true), bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(quote), bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(base)) : null
                ),
                hour_24: !marketStats || !marketStats.change || marketStats.change === "0.00" ? 0 : marketStats.change,
                volume: !marketStats || !marketStats.volumeQuote ? 0 : marketStats.volumeQuote,
                flip: inverted === null || !this.props.isFavorite ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "column-hide-small" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            onClick: this._handleFlip.bind(this, row, !row.inverted)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], { name: "shuffle", title: "icons.shuffle" })
                    )
                ),
                hide: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Tooltip"],
                    {
                        title: isHidden ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "icons.plus_circle.show_market" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "icons.cross_circle.hide_market" }),
                        style: { marginRight: 0 },
                        onClick: this._handleHide.bind(this, row, !row.isHidden)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        name: isHidden ? "plus-circle" : "cross-circle",
                        title: isHidden ? "icons.plus_circle.show_market" : "icons.cross_circle.hide_market",
                        className: "icon-14px"
                    })
                ),
                basePrecision: basePrecision
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state2 = this.state,
                markets = _state2.markets,
                showHidden = _state2.showHidden,
                filter = _state2.filter;


            var marketRows = markets.filter(function (m) {
                if (!!filter || m.isStarred) return true;
                if (_this3.props.onlyLiquid || m.marketStats && "volumeBase" in m.marketStats) {
                    return !!m.marketStats.volumeBase || false;
                } else {
                    return true;
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

                return _this3.getTableData(_extends({}, row));
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Input"], {
                            type: "text",
                            placeholder: "Filter...",
                            onChange: this._handleFilterInput.bind(this),
                            addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Icon"], { type: "search" })
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
                    header: this.getHeader(),
                    rows: marketRows.length ? marketRows : [],
                    pageSize: 20,
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmFkZjVlYjZmMzBmMjJiNjhkZDI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGFnaW5hdGVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9wYWdpbmF0ZWQtbGlzdC5zY3NzP2Q3MzMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldHMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvTWFya2V0c1RhYmxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtUYWJsZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgXCIuL3BhZ2luYXRlZC1saXN0LnNjc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgIHBhZ2VTaXplOiAyMCxcclxuXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcInRhYmxlXCIsXHJcbiAgICAgICAgZXh0cmFSb3c6IG51bGwsXHJcbiAgICAgICAgc3R5bGU6IHtwYWRkaW5nQm90dG9tOiBcIjFyZW1cIn0sXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcblxyXG4gICAgICAgIC8vIGNhbiBiZSBhIHN0cmluZyAoYXNzdW1lcyB0aGUgdHJhbnNsYXRpb24gaGFzIG9uZSBhcmd1bWVudCwgdG90YWwgY291bnQpLFxyXG4gICAgICAgIC8vIG9yIGFuIG9iamVjdCwgd2hpY2ggYWxsb3dzIGEgY3VzdG9tIGxhYmVsXHJcbiAgICAgICAgdG90YWxMYWJlbDogXCJ1dGlsaXR5LnRvdGFsX3hfaXRlbXNcIixcclxuXHJcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQsIHVzZSB0b3RhbExhYmVsXHJcbiAgICAgICAgbGFiZWw6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwcm9wcy5wYWdlU2l6ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtoZWFkZXIsIHJvd3MsIGV4dHJhUm93LCBsb2FkaW5nfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDEwMF0uZmlsdGVyKFxyXG4gICAgICAgICAgICBpdGVtID0+IGl0ZW0gPCBNYXRoLm1heCh0aGlzLnByb3BzLnBhZ2VTaXplLCByb3dzLmxlbmd0aClcclxuICAgICAgICApO1xyXG4gICAgICAgIHBhZ2VTaXplT3B0aW9ucy5wdXNoKE1hdGgubWF4KHRoaXMucHJvcHMucGFnZVNpemUsIHJvd3MubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIGxldCB0b3RhbENvbHVtbnNMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMudG90YWxMYWJlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy50b3RhbExhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRvdGFsTGFiZWwgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMudG90YWxMYWJlbC5rZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy50b3RhbExhYmVsLmFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0ZWQtbGlzdFwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cm93c31cclxuICAgICAgICAgICAgICAgICAgICB1bnNcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtBcnJheS5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIgOiBbXX1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9eygpID0+IChleHRyYVJvdyA/IGV4dHJhUm93IDogPHNwYW4+Jm5ic3A7PC9zcGFuPil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMudG9nZ2xlU29ydE9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25TaW5nbGVQYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zOiBwYWdlU2l6ZU9wdGlvbnMubWFwKG8gPT4gby50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvdGFsOiAodG90YWwsIHJhbmdlKSA9PiB0b3RhbENvbHVtbnNMYWJlbCh0b3RhbClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucm93Q2xhc3NOYW1lID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZWNvcmQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocmVjb3JkLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXt0aGlzLnByb3BzLnJvd1NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcblxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBMb2dpblNlbGVjdG9yIGZyb20gXCIuLi9Mb2dpblNlbGVjdG9yXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcblxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcbmltcG9ydCB7U3RhcnJlZE1hcmtldHMsIEZlYXR1cmVkTWFya2V0c30gZnJvbSBcIi4vTWFya2V0c1wiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlc30gZnJvbSBcImNvbW1vbi9nYXRld2F5c1wiO1xuXG5jbGFzcyBEYXNoYm9hcmRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgIGFjY291bnRzUmVhZHksXG4gICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFhY2NvdW50c1JlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudENvdW50ID1cbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLnNpemUgK1xuICAgICAgICAgICAgKHBhc3N3b3JkQWNjb3VudCA/IDEgOiAwKTtcbiAgICAgICAgLyogICAgICAgIGlmICghYWNjb3VudENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvZ2luU2VsZWN0b3IgLz47XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgYXBwLXRhYmxlcyBuby1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImFwcFRhYmxlc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz1cImRhc2hib2FyZFRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFic0NsYXNzPVwiYWNjb3VudC1vdmVydmlldyBuby1wYWRkaW5nIGJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImRhc2hib2FyZC5zdGFycmVkX21hcmtldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhcnJlZE1hcmtldHMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZWZlcnJlZEJhc2VzLm1hcChxID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7cVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9eQlRDLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT1BFTi5CVENcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3EucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGtleT17cX0gdGl0bGU9e3RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZE1hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZXM9e1txXS5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvc3NpYmxlR2F0ZXdheVByZWZpeGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3FdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgRGFzaGJvYXJkUGFnZSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmUsIFNldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50cyxcbiAgICAgICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50c0xvYWRlZCxcbiAgICAgICAgICAgICAgICByZWZzTG9hZGVkXG4gICAgICAgICAgICB9ID0gQWNjb3VudFN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50cyxcbiAgICAgICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50c1JlYWR5OiBhY2NvdW50c0xvYWRlZCAmJiByZWZzTG9hZGVkLFxuICAgICAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkucHJlZmVycmVkQmFzZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuXHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG4vLyBpbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XHJcbmltcG9ydCBNYXJrZXRzVGFibGUgZnJvbSBcIi4vTWFya2V0c1RhYmxlXCI7XHJcblxyXG5jbGFzcyBTdGFycmVkTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1hcmtldHNUYWJsZVxyXG4gICAgICAgICAgICAgICAgbWFya2V0cz17dGhpcy5wcm9wcy5zdGFycmVkTWFya2V0c31cclxuICAgICAgICAgICAgICAgIGZvcmNlRGlyZWN0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuU3RhcnJlZE1hcmtldHMgPSBjb25uZWN0KFxyXG4gICAgU3RhcnJlZE1hcmtldHMsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5jbGFzcyBGZWF0dXJlZE1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgbGV0IGNoYWluSUQgPSBBcGlzLmluc3RhbmNlKCkuY2hhaW5faWQ7XHJcbiAgICAgICAgaWYgKGNoYWluSUQpIGNoYWluSUQgPSBjaGFpbklELnN1YnN0cigwLCA4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2hhaW5JRCxcclxuICAgICAgICAgICAgbWFya2V0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9nZXRNYXJrZXRzID0gdGhpcy5fZ2V0TWFya2V0cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TWFya2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUsIHByb3BzID0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHtjaGFpbklEfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoY2hhaW5JRCA9PT0gXCI0MDE4ZDc4NFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5tYXJrZXRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGFzc3VtZSB0ZXN0bmV0XHJcbiAgICAgICAgICAgIHJldHVybiBbW1wiVEVTVFwiLCBcIlBFRy5GQUtFVVNEXCJdLCBbXCJURVNUXCIsIFwiQlRXVFlcIl1dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUobmV4dFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUocHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgbGV0IG1hcmtldHMgPSB0aGlzLl9nZXRNYXJrZXRzKHRoaXMuc3RhdGUsIHByb3BzKTtcclxuXHJcbiAgICAgICAgbWFya2V0cyA9IG1hcmtldHMuZmlsdGVyKG1hcmtldCA9PiB7XHJcbiAgICAgICAgICAgIC8qIE9ubHkgdXNlIG1hcmtldHMgY29ycmVzcG9uZGluZyB0byB0aGUgY3VycmVudCB0YWIgKi9cclxuICAgICAgICAgICAgcmV0dXJuIHByb3BzLnF1b3Rlc1swXSA9PT0gbWFya2V0LmJhc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qIEFkZCB0aGUgcG9zc2libGUgZ2F0ZXdheSBhc3NldHMgKi9cclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHByb3BzLnF1b3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtYXJrZXRzLmZvckVhY2gobSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge3F1b3RlOiBtLnF1b3RlLCBiYXNlOiBwcm9wcy5xdW90ZXNbaV19O1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcmtldEtleSA9IGAke29iai5xdW90ZX1fJHtvYmouYmFzZX1gO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5xdW90ZSAhPT0gb2JqLmJhc2UgJiYgIW1hcmtldHMuaGFzKG1hcmtldEtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRzID0gbWFya2V0cy5zZXQobWFya2V0S2V5LCBvYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFya2V0c30pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWFya2V0c1RhYmxlXHJcbiAgICAgICAgICAgICAgICBtYXJrZXRzPXt0aGlzLnN0YXRlLm1hcmtldHN9XHJcbiAgICAgICAgICAgICAgICBzaG93RmxpcD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5GZWF0dXJlZE1hcmtldHMgPSBjb25uZWN0KFxyXG4gICAgRmVhdHVyZWRNYXJrZXRzLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW01hcmtldHNTdG9yZSwgU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgbGV0IHVzZXJNYXJrZXRzID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnVzZXJNYXJrZXRzO1xyXG4gICAgICAgICAgICBsZXQgZGVmYXVsdE1hcmtldHMgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdE1hcmtldHM7XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlck1hcmtldHMuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdXNlck1hcmtldHMuZm9yRWFjaCgobWFya2V0LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlZmF1bHRNYXJrZXRzLmhhcyhrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWFya2V0cyA9IGRlZmF1bHRNYXJrZXRzLnNldChrZXksIG1hcmtldCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1hcmtldHM6IGRlZmF1bHRNYXJrZXRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuY2xhc3MgVG9wTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxNYXJrZXRzVGFibGUgbWFya2V0cz17W119IC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1N0YXJyZWRNYXJrZXRzLCBGZWF0dXJlZE1hcmtldHMsIFRvcE1hcmtldHN9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcIi4uL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xuaW1wb3J0IHtJbnB1dCwgVG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7SWNvbiBhcyBBbnRJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIE1hcmtldHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICAgICAgICBzaG93RmxpcDogZmFsc2UsXG4gICAgICAgICAgICBzaG93SGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIG1hcmtldHM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zb3J0RnVuY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRGdW5jdGlvbnNba2V5XSA9IHRoaXMuc29ydEZ1bmN0aW9uc1trZXldLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLnVwZGF0ZShuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobmV4dFByb3BzID0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvcHMgPSBuZXh0UHJvcHMgfHwgdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHNob3dGbGlwID0gcHJvcHMuZm9yY2VEaXJlY3Rpb247XG5cbiAgICAgICAgaWYgKHByb3BzLm1hcmtldHMgJiYgcHJvcHMubWFya2V0cy5zaXplID4gMCkge1xuICAgICAgICAgICAgbGV0IG1hcmtldHMgPSBwcm9wcy5tYXJrZXRzXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgICAgICAgIC5tYXAobWFya2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1b3RlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChtYXJrZXQucXVvdGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IENoYWluU3RvcmUuZ2V0QXNzZXQobWFya2V0LmJhc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2UgfHwgIXF1b3RlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldE5hbWUgPSBgJHttYXJrZXQuYmFzZX1fJHttYXJrZXQucXVvdGV9YDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBtYXJrZXROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBtYXJrZXQucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBtYXJrZXQuYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmVjaXNpb246IGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWRkZW46IHByb3BzLmhpZGRlbk1hcmtldHMuaW5jbHVkZXMobWFya2V0TmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlOiBwcm9wcy5pc0Zhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHM6IHByb3BzLmFsbE1hcmtldFN0YXRzLmdldChtYXJrZXROYW1lLCB7fSksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N0YXJyZWQ6IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldE5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gYSAhPT0gbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RmxpcCwgbWFya2V0c30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RvZ2dsZVNob3dIaWRkZW4odmFsKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dIaWRkZW4gPT09IHZhbCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0hpZGRlbjogdmFsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9oYW5kbGVGaWx0ZXJJbnB1dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyOiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUhpZGUocm93LCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGFuZGxlSGlkZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFuZGxlSGlkZShyb3csIHN0YXR1cyk7XG4gICAgICAgIH1cblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuaGlkZU1hcmtldChyb3cua2V5LCBzdGF0dXMpO1xuICAgIH1cblxuICAgIF9oYW5kbGVGbGlwKHJvdywgc3RhdHVzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhhbmRsZUZsaXApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhbmRsZUZsaXAocm93LCBzdGF0dXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZU1hcmtldERpcmVjdGlvbih7XG4gICAgICAgICAgICBbcm93LmtleV06IHN0YXR1c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzb3J0KGFQcmljZSwgYlByaWNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnQgPSBwcmljZSA9PiB7XG4gICAgICAgICAgICBwcmljZSA9IHByaWNlLnJlcGxhY2UoL1xcLC9nLCBcIlwiKTtcbiAgICAgICAgICAgIGlmIChwcmljZS5pbmNsdWRlcyhcImtcIikpIHByaWNlID0gcHJpY2UucmVwbGFjZSgvay9nLCBcIlwiKSAqIDEwMDA7XG4gICAgICAgICAgICBpZiAocHJpY2UuaW5jbHVkZXMoXCJNXCIpKVxuICAgICAgICAgICAgICAgIHByaWNlID0gcHJpY2UucmVwbGFjZSgvTS9nLCBcIlwiKSAqIDEwMDAgKiAxMDAwO1xuICAgICAgICAgICAgcmV0dXJuIHByaWNlO1xuICAgICAgICB9O1xuICAgICAgICBhUHJpY2UgPSBjb252ZXJ0KGFQcmljZSk7XG4gICAgICAgIGJQcmljZSA9IGNvbnZlcnQoYlByaWNlKTtcblxuICAgICAgICBpZiAoYVByaWNlID09PSBudWxsICYmIGJQcmljZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoYVByaWNlICE9PSBudWxsICYmIGJQcmljZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFQcmljZSAtIGJQcmljZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRGdW5jdGlvbnMgPSB7XG4gICAgICAgIGFscGhhYmV0aWM6IGZ1bmN0aW9uKGEsIGIsIGZvcmNlKSB7XG4gICAgICAgICAgICBpZiAoYS5rZXkgPiBiLmtleSkgcmV0dXJuIGZvcmNlID8gMSA6IC0xO1xuICAgICAgICAgICAgaWYgKGEua2V5IDwgYi5rZXkpIHJldHVybiBmb3JjZSA/IC0xIDogMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBwcmljZVZhbHVlOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICBsZXQgYVByaWNlID0gYS5wcmljZS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGxldCBiUHJpY2UgPSBiLnByaWNlLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGFQcmljZSAmJiBiUHJpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0KGFQcmljZSwgYlByaWNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEZ1bmN0aW9ucy5hbHBoYWJldGljKGEsIGIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2b2x1bWVWYWx1ZTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgbGV0IGFQcmljZSA9IGEudm9sdW1lIHx8IDA7XG4gICAgICAgICAgICBsZXQgYlByaWNlID0gYi52b2x1bWUgfHwgMDtcbiAgICAgICAgICAgIGxldCBjb21wYXJlZCA9IDA7XG4gICAgICAgICAgICBpZiAoYVByaWNlICYmIGJQcmljZSkge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVkID0gYVByaWNlIC0gYlByaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBhcmVkID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RnVuY3Rpb25zLmFscGhhYmV0aWMoYSwgYiwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlVmFsdWU6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIGxldCBhVmFsdWUgPSBwYXJzZUZsb2F0KGEuaG91cl8yNCk7XG4gICAgICAgICAgICBsZXQgYlZhbHVlID0gcGFyc2VGbG9hdChiLmhvdXJfMjQpO1xuICAgICAgICAgICAgbGV0IGNvbXBhcmVkID0gMDtcbiAgICAgICAgICAgIGlmIChhVmFsdWUgJiYgYlZhbHVlICYmICFpc05hTihhVmFsdWUpICYmICFpc05hTihiVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWQgPSBhVmFsdWUgLSBiVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcGFyZWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRGdW5jdGlvbnMuYWxwaGFiZXRpYyhhLCBiLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdldEhlYWRlcigpIHtcbiAgICAgICAgY29uc3Qge3Nob3dGbGlwLCBzaG93SGlkZGVufSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInN0YXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjc1cHhcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLCBjdXJzb3I6IFwicG9pbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5hc3NldFwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzRmF2b3JpdGVcbiAgICAgICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5xdW90ZV9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInF1b3RlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInByaWNlXCIsXG4gICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IHRoaXMuc29ydEZ1bmN0aW9ucy5wcmljZVZhbHVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT57aXRlbX08L3NwYW4+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuaG91cl8yNF9zaG9ydFwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJob3VyXzI0XCIsXG4gICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IHRoaXMuc29ydEZ1bmN0aW9ucy5jaGFuZ2VWYWx1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZUNsYXNzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVjb3JkLmhvdXJfMjQpID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdChyZWNvcmQuaG91cl8yNCkgPCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLCB0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjaGFuZ2VDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLmhvdXJfMjR9JVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbHVtZVwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ2b2x1bWVcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogdGhpcy5zb3J0RnVuY3Rpb25zLnZvbHVtZVZhbHVlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0T3JkZXI6IFwiZGVzY2VuZFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfdm9sdW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQudm9sdW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuYmFzZVByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dGbGlwXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5mbGlwXCIgLz4sXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJmbGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc2hvd0hpZGRlbiA/IFwiZXhjaGFuZ2UuaGlkZVwiIDogXCJhY2NvdW50LnBlcm0uc2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT57aXRlbX08L3NwYW4+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBfc2V0SW50ZXJ2YWwobmV4dFByb3BzID0gbnVsbCkge1xuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlfSA9IG5leHRQcm9wcyB8fCB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnN0YXRzQ2hlY2tlZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzSW50ZXJ2YWwoXG4gICAgICAgICAgICAzNSAqIDEwMDAsXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHNJbnRlcnZhbCkgdGhpcy5zdGF0c0ludGVydmFsKCk7XG4gICAgfVxuXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnNyYyA9IFwiYXNzZXQtc3ltYm9scy9idHMucG5nXCI7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdG9nZ2xlRmF2b3JpdGVNYXJrZXQocXVvdGUsIGJhc2UpIHtcbiAgICAgICAgbGV0IG1hcmtldElEID0gYCR7cXVvdGV9XyR7YmFzZX1gO1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKSkge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmFkZFN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnJlbW92ZVN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFRhYmxlRGF0YShyb3cpIHtcbiAgICAgICAgbGV0IHtiYXNlLCBxdW90ZSwgbWFya2V0U3RhdHMsIGlzSGlkZGVuLCBpbnZlcnRlZCwgYmFzZVByZWNpc2lvbn0gPSByb3c7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKHN5bWJvbCkge1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gXCJPUEVOLkJUQ1wiIHx8IHN5bWJvbCA9PT0gXCJHREVYLkJUQ1wiKSByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgaWYgKHN5bWJvbC5zdGFydHNXaXRoKFwiUlVERVguXCIpKSByZXR1cm4gc3ltYm9sO1xuXG4gICAgICAgICAgICBsZXQgaW1nTmFtZSA9IHN5bWJvbC5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICByZXR1cm4gaW1nTmFtZS5sZW5ndGggPT09IDIgPyBpbWdOYW1lWzFdIDogaW1nTmFtZVswXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1nTmFtZSA9IGdldEltYWdlTmFtZShxdW90ZSk7XG5cbiAgICAgICAgbGV0IG1hcmtldElEID0gYCR7cXVvdGV9XyR7YmFzZX1gO1xuXG4gICAgICAgIGNvbnN0IHN0YXJDbGFzcyA9IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKVxuICAgICAgICAgICAgPyBcImdvbGQtc3RhclwiXG4gICAgICAgICAgICA6IFwiZ3JleS1zdGFyXCI7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogbWFya2V0SUQsXG4gICAgICAgICAgICBzdGFyOiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVGYXZvcml0ZU1hcmtldC5iaW5kKHRoaXMsIHF1b3RlLCBiYXNlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIubWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhc3NldDogKFxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke3F1b3RlfV8ke2Jhc2V9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogMjAsIG1hcmdpblJpZ2h0OiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e3F1b3RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNGYXZvcml0ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e2Jhc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxdW90ZV9uYW1lOiB0aGlzLnByb3BzLmlzRmF2b3JpdGUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBub1RpcCBuYW1lPXtiYXNlfSAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBwcmljZTogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIiBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgIHttYXJrZXRTdGF0cyAmJiBtYXJrZXRTdGF0cy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB1dGlscy5wcmljZV90ZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLnByaWNlLnRvUmVhbCh0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFzc2V0KHF1b3RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFzc2V0KGJhc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaG91cl8yNDpcbiAgICAgICAgICAgICAgICAhbWFya2V0U3RhdHMgfHxcbiAgICAgICAgICAgICAgICAhbWFya2V0U3RhdHMuY2hhbmdlIHx8XG4gICAgICAgICAgICAgICAgbWFya2V0U3RhdHMuY2hhbmdlID09PSBcIjAuMDBcIlxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBtYXJrZXRTdGF0cy5jaGFuZ2UsXG4gICAgICAgICAgICB2b2x1bWU6XG4gICAgICAgICAgICAgICAgIW1hcmtldFN0YXRzIHx8ICFtYXJrZXRTdGF0cy52b2x1bWVRdW90ZVxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBtYXJrZXRTdGF0cy52b2x1bWVRdW90ZSxcbiAgICAgICAgICAgIGZsaXA6XG4gICAgICAgICAgICAgICAgaW52ZXJ0ZWQgPT09IG51bGwgfHwgIXRoaXMucHJvcHMuaXNGYXZvcml0ZSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUZsaXAuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm93LmludmVydGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2h1ZmZsZVwiIHRpdGxlPVwiaWNvbnMuc2h1ZmZsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgaGlkZTogKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImljb25zLnBsdXNfY2lyY2xlLnNob3dfbWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaWNvbnMuY3Jvc3NfY2lyY2xlLmhpZGVfbWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5faGFuZGxlSGlkZS5iaW5kKHRoaXMsIHJvdywgIXJvdy5pc0hpZGRlbil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXNIaWRkZW4gPyBcInBsdXMtY2lyY2xlXCIgOiBcImNyb3NzLWNpcmNsZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpY29ucy5wbHVzX2NpcmNsZS5zaG93X21hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpY29ucy5jcm9zc19jaXJjbGUuaGlkZV9tYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYmFzZVByZWNpc2lvbjogYmFzZVByZWNpc2lvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHttYXJrZXRzLCBzaG93SGlkZGVuLCBmaWx0ZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBtYXJrZXRSb3dzID0gbWFya2V0c1xuICAgICAgICAgICAgLmZpbHRlcihtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFmaWx0ZXIgfHwgbS5pc1N0YXJyZWQpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkIHx8XG4gICAgICAgICAgICAgICAgICAgIChtLm1hcmtldFN0YXRzICYmIFwidm9sdW1lQmFzZVwiIGluIG0ubWFya2V0U3RhdHMpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIW0ubWFya2V0U3RhdHMudm9sdW1lQmFzZSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChyb3cuaXNIaWRkZW4gIT09IHRoaXMuc3RhdGUuc2hvd0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVPYmplY3QgPSBDaGFpblN0b3JlLmdldEFzc2V0KHJvdy5xdW90ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VPYmplY3QgPSBDaGFpblN0b3JlLmdldEFzc2V0KHJvdy5iYXNlKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7aXNCaXRBc3NldDogcXVvdGVJc0JpdEFzc2V0fSA9IHV0aWxzLnJlcGxhY2VOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lzQml0QXNzZXQ6IGJhc2VJc0JpdEFzc2V0fSA9IHV0aWxzLnJlcGxhY2VOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZU9iamVjdFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZVN5bWJvbCA9IHJvdy5xdW90ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2VTeW1ib2wgPSByb3cuYmFzZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocXVvdGVJc0JpdEFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbCA9IFwiYml0XCIgKyBxdW90ZVN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlSXNCaXRBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbCA9IFwiYml0XCIgKyBiYXNlU3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyUGFpciA9IGZpbHRlci5pbmNsdWRlcyhcIjpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlclBhaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlRmlsdGVyID0gZmlsdGVyLnNwbGl0KFwiOlwiKVswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlRmlsdGVyID0gZmlsdGVyLnNwbGl0KFwiOlwiKVsxXS50cmltKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcocXVvdGVGaWx0ZXIpLnRvTG93ZXJDYXNlKCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKGJhc2VGaWx0ZXIpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFN0cmluZyhmaWx0ZXIpLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKGZpbHRlcikudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXZpc2libGUpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFibGVEYXRhKHsuLi5yb3d9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKHIgPT4gISFyKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXIgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVGaWx0ZXJJbnB1dC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxBbnRJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdG9yIGlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogXCI2cHhcIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImlubGluZS1ibG9ja1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluYWN0aXZlOiBzaG93SGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU2hvd0hpZGRlbi5iaW5kKHRoaXMsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmhpZGVfaGlkZGVuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiaW5saW5lLWJsb2NrXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmU6ICFzaG93SGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU2hvd0hpZGRlbi5iaW5kKHRoaXMsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuc2hvd19oaWRkZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjAuNXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogXCIzcHggMCAwXCIsIHdpZHRoOiBcImZpdC1jb250ZW50XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMub25seUxpcXVpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seUxpcXVpZDogIXRoaXMucHJvcHMub25seUxpcXVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjAuNHJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNob3dfb25seV9saXF1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQYWdpbmF0ZWRMaXN0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDAsIHBhZGRpbmdSaWdodDogMH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGRhc2hib2FyZC10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5nZXRIZWFkZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgcm93cz17bWFya2V0Um93cy5sZW5ndGggPyBtYXJrZXRSb3dzIDogW119XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ1dGlsaXR5LnRvdGFsX3hfbWFya2V0c1wiXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQYWRkaW5nPVwiMS41cmVtXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIE1hcmtldHNUYWJsZSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBNYXJrZXRzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIGxldCB7bWFya2V0RGlyZWN0aW9ucywgaGlkZGVuTWFya2V0c30gPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1hcmtldERpcmVjdGlvbnMsXG4gICAgICAgICAgICAgICAgaGlkZGVuTWFya2V0cyxcbiAgICAgICAgICAgICAgICBhbGxNYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMsXG4gICAgICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgICAgICBvbmx5TGlxdWlkOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJvbmx5TGlxdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUFrQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUdBO0FBQUE7QUFHQTtBQXBCQTtBQXNCQTtBQXZCQTtBQTBCQTs7OztBQXBGQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFEQTs7Ozs7OztBQ0pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQURBO0FBZUE7QUFmQTtBQUNBO0FBa0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBVUE7QUExQ0E7QUFEQTtBQURBO0FBSkE7QUFEQTtBQURBO0FBMERBOzs7O0FBaEZBO0FBQ0E7QUFrRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQXBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7OztBQVRBO0FBQ0E7QUFVQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTtBQUNBO0FBV0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQVpBO0FBYUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7OztBQXBFQTtBQUNBO0FBc0VBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQWxCQTtBQUNBO0FBcUJBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeENBO0FBQ0E7QUE1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBYUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE2Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFMQTtBQVFBO0FBYkE7QUFrQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFBQTtBQU9BO0FBcEJBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFPQTtBQWZBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQVpBO0FBZ0JBO0FBRUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFYQTtBQWNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFYQTtBQWtCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVVBO0FBTUE7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFQQTtBQURBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBWEE7QUFzQkE7QUFoR0E7QUFrR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVpBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWRBO0FBREE7QUFoQ0E7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBdERBO0FBaUVBOzs7O0FBbmpCQTtBQUNBO0FBcWpCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBaEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=