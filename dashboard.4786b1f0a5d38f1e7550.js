(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[26],{

/***/ 2916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(587);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(736);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2917);
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

/***/ 2917:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1886);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1986);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2647);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(553);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(725);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2929);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3302);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2133);
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

/***/ 3302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarredMarkets", function() { return StarredMarkets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedMarkets", function() { return FeaturedMarkets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMarkets", function() { return TopMarkets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(489);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1886);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(571);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(725);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2367);
/* harmony import */ var _MarketsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3303);
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

/***/ 3303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1886);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(420);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(740);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2367);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(726);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(725);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(571);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2916);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(736);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1894);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2129);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1846);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLjQ3ODZiMWYwYTVkMzhmMWU3NTUwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGFnaW5hdGVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9wYWdpbmF0ZWQtbGlzdC5zY3NzP2Q3MzMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldHMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvTWFya2V0c1RhYmxlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtUYWJsZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgXCIuL3BhZ2luYXRlZC1saXN0LnNjc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgIHBhZ2VTaXplOiAyMCxcclxuXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcInRhYmxlXCIsXHJcbiAgICAgICAgZXh0cmFSb3c6IG51bGwsXHJcbiAgICAgICAgc3R5bGU6IHtwYWRkaW5nQm90dG9tOiBcIjFyZW1cIn0sXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcblxyXG4gICAgICAgIC8vIGNhbiBiZSBhIHN0cmluZyAoYXNzdW1lcyB0aGUgdHJhbnNsYXRpb24gaGFzIG9uZSBhcmd1bWVudCwgdG90YWwgY291bnQpLFxyXG4gICAgICAgIC8vIG9yIGFuIG9iamVjdCwgd2hpY2ggYWxsb3dzIGEgY3VzdG9tIGxhYmVsXHJcbiAgICAgICAgdG90YWxMYWJlbDogXCJ1dGlsaXR5LnRvdGFsX3hfaXRlbXNcIixcclxuXHJcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQsIHVzZSB0b3RhbExhYmVsXHJcbiAgICAgICAgbGFiZWw6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwcm9wcy5wYWdlU2l6ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtoZWFkZXIsIHJvd3MsIGV4dHJhUm93LCBsb2FkaW5nfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDEwMF0uZmlsdGVyKFxyXG4gICAgICAgICAgICBpdGVtID0+IGl0ZW0gPCBNYXRoLm1heCh0aGlzLnByb3BzLnBhZ2VTaXplLCByb3dzLmxlbmd0aClcclxuICAgICAgICApO1xyXG4gICAgICAgIHBhZ2VTaXplT3B0aW9ucy5wdXNoKE1hdGgubWF4KHRoaXMucHJvcHMucGFnZVNpemUsIHJvd3MubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIGxldCB0b3RhbENvbHVtbnNMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMudG90YWxMYWJlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy50b3RhbExhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRvdGFsTGFiZWwgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMudG90YWxMYWJlbC5rZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy50b3RhbExhYmVsLmFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0ZWQtbGlzdFwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cm93c31cclxuICAgICAgICAgICAgICAgICAgICB1bnNcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtBcnJheS5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIgOiBbXX1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9eygpID0+IChleHRyYVJvdyA/IGV4dHJhUm93IDogPHNwYW4+Jm5ic3A7PC9zcGFuPil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMudG9nZ2xlU29ydE9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25TaW5nbGVQYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zOiBwYWdlU2l6ZU9wdGlvbnMubWFwKG8gPT4gby50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvdGFsOiAodG90YWwsIHJhbmdlKSA9PiB0b3RhbENvbHVtbnNMYWJlbCh0b3RhbClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucm93Q2xhc3NOYW1lID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZWNvcmQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocmVjb3JkLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXt0aGlzLnByb3BzLnJvd1NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5cclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IExvZ2luU2VsZWN0b3IgZnJvbSBcIi4uL0xvZ2luU2VsZWN0b3JcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuXHJcbmltcG9ydCB7VGFicywgVGFifSBmcm9tIFwiLi4vVXRpbGl0eS9UYWJzXCI7XHJcbmltcG9ydCB7U3RhcnJlZE1hcmtldHMsIEZlYXR1cmVkTWFya2V0c30gZnJvbSBcIi4vTWFya2V0c1wiO1xyXG5pbXBvcnQge2dldFBvc3NpYmxlR2F0ZXdheVByZWZpeGVzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlzXCI7XHJcblxyXG5jbGFzcyBEYXNoYm9hcmRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxyXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLFxyXG4gICAgICAgICAgICBhY2NvdW50c1JlYWR5LFxyXG4gICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXHJcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50c1JlYWR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhY2NvdW50Q291bnQgPVxyXG4gICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLnNpemUgK1xyXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLnNpemUgK1xyXG4gICAgICAgICAgICAocGFzc3dvcmRBY2NvdW50ID8gMSA6IDApO1xyXG4gICAgICAgIGlmICghYWNjb3VudENvdW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TG9naW5TZWxlY3RvciAvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG5vLXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBhcHAtdGFibGVzIG5vLXBhZGRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJhcHBUYWJsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHNtYWxsLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnMtY29udGFpbmVyIGdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz1cImRhc2hib2FyZFRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgbm8tcGFkZGluZyBib3JkZXJlZC1oZWFkZXIgY29udGVudC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiZGFzaGJvYXJkLnN0YXJyZWRfbWFya2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJyZWRNYXJrZXRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlZmVycmVkQmFzZXMubWFwKHEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9eQlRDLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPUEVOLkJUQ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3EucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBrZXk9e3F9IHRpdGxlPXt0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZE1hcmtldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3Rlcz17W3FdLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3FdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgRGFzaGJvYXJkUGFnZSxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmUsIFNldHRpbmdzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxyXG4gICAgICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRzTG9hZGVkLFxyXG4gICAgICAgICAgICAgICAgcmVmc0xvYWRlZFxyXG4gICAgICAgICAgICB9ID0gQWNjb3VudFN0b3JlLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50cyxcclxuICAgICAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50c1JlYWR5OiBhY2NvdW50c0xvYWRlZCAmJiByZWZzTG9hZGVkLFxyXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQmFzZXM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5wcmVmZXJyZWRCYXNlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuXHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG4vLyBpbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XHJcbmltcG9ydCBNYXJrZXRzVGFibGUgZnJvbSBcIi4vTWFya2V0c1RhYmxlXCI7XHJcblxyXG5jbGFzcyBTdGFycmVkTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1hcmtldHNUYWJsZVxyXG4gICAgICAgICAgICAgICAgbWFya2V0cz17dGhpcy5wcm9wcy5zdGFycmVkTWFya2V0c31cclxuICAgICAgICAgICAgICAgIGZvcmNlRGlyZWN0aW9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuU3RhcnJlZE1hcmtldHMgPSBjb25uZWN0KFxyXG4gICAgU3RhcnJlZE1hcmtldHMsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5jbGFzcyBGZWF0dXJlZE1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgbGV0IGNoYWluSUQgPSBBcGlzLmluc3RhbmNlKCkuY2hhaW5faWQ7XHJcbiAgICAgICAgaWYgKGNoYWluSUQpIGNoYWluSUQgPSBjaGFpbklELnN1YnN0cigwLCA4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY2hhaW5JRCxcclxuICAgICAgICAgICAgbWFya2V0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9nZXRNYXJrZXRzID0gdGhpcy5fZ2V0TWFya2V0cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TWFya2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUsIHByb3BzID0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHtjaGFpbklEfSA9IHN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoY2hhaW5JRCA9PT0gXCI0MDE4ZDc4NFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5tYXJrZXRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGFzc3VtZSB0ZXN0bmV0XHJcbiAgICAgICAgICAgIHJldHVybiBbW1wiVEVTVFwiLCBcIlBFRy5GQUtFVVNEXCJdLCBbXCJURVNUXCIsIFwiQlRXVFlcIl1dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUobmV4dFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUocHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgbGV0IG1hcmtldHMgPSB0aGlzLl9nZXRNYXJrZXRzKHRoaXMuc3RhdGUsIHByb3BzKTtcclxuXHJcbiAgICAgICAgbWFya2V0cyA9IG1hcmtldHMuZmlsdGVyKG1hcmtldCA9PiB7XHJcbiAgICAgICAgICAgIC8qIE9ubHkgdXNlIG1hcmtldHMgY29ycmVzcG9uZGluZyB0byB0aGUgY3VycmVudCB0YWIgKi9cclxuICAgICAgICAgICAgcmV0dXJuIHByb3BzLnF1b3Rlc1swXSA9PT0gbWFya2V0LmJhc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qIEFkZCB0aGUgcG9zc2libGUgZ2F0ZXdheSBhc3NldHMgKi9cclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHByb3BzLnF1b3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtYXJrZXRzLmZvckVhY2gobSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge3F1b3RlOiBtLnF1b3RlLCBiYXNlOiBwcm9wcy5xdW90ZXNbaV19O1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcmtldEtleSA9IGAke29iai5xdW90ZX1fJHtvYmouYmFzZX1gO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5xdW90ZSAhPT0gb2JqLmJhc2UgJiYgIW1hcmtldHMuaGFzKG1hcmtldEtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRzID0gbWFya2V0cy5zZXQobWFya2V0S2V5LCBvYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFya2V0c30pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWFya2V0c1RhYmxlXHJcbiAgICAgICAgICAgICAgICBtYXJrZXRzPXt0aGlzLnN0YXRlLm1hcmtldHN9XHJcbiAgICAgICAgICAgICAgICBzaG93RmxpcD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5GZWF0dXJlZE1hcmtldHMgPSBjb25uZWN0KFxyXG4gICAgRmVhdHVyZWRNYXJrZXRzLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW01hcmtldHNTdG9yZSwgU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgbGV0IHVzZXJNYXJrZXRzID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnVzZXJNYXJrZXRzO1xyXG4gICAgICAgICAgICBsZXQgZGVmYXVsdE1hcmtldHMgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdE1hcmtldHM7XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlck1hcmtldHMuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdXNlck1hcmtldHMuZm9yRWFjaCgobWFya2V0LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlZmF1bHRNYXJrZXRzLmhhcyhrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWFya2V0cyA9IGRlZmF1bHRNYXJrZXRzLnNldChrZXksIG1hcmtldCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1hcmtldHM6IGRlZmF1bHRNYXJrZXRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuY2xhc3MgVG9wTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxNYXJrZXRzVGFibGUgbWFya2V0cz17W119IC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1N0YXJyZWRNYXJrZXRzLCBGZWF0dXJlZE1hcmtldHMsIFRvcE1hcmtldHN9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcIi4uL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xyXG5pbXBvcnQge0lucHV0LCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge0ljb24gYXMgQW50SWNvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5cclxuY2xhc3MgTWFya2V0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmlsdGVyOiBcIlwiLFxyXG4gICAgICAgICAgICBzaG93RmxpcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dIaWRkZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBtYXJrZXRzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zb3J0RnVuY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEZ1bmN0aW9uc1trZXldID0gdGhpcy5zb3J0RnVuY3Rpb25zW2tleV0uYmluZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShuZXh0UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMudXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMudXBkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUobmV4dFByb3BzID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBwcm9wcyA9IG5leHRQcm9wcyB8fCB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBzaG93RmxpcCA9IHByb3BzLmZvcmNlRGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBpZiAocHJvcHMubWFya2V0cyAmJiBwcm9wcy5tYXJrZXRzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXJrZXRzID0gcHJvcHMubWFya2V0c1xyXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZSA9IENoYWluU3RvcmUuZ2V0QXNzZXQobWFya2V0LnF1b3RlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IENoYWluU3RvcmUuZ2V0QXNzZXQobWFya2V0LmJhc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFzZSB8fCAhcXVvdGUpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXROYW1lID0gYCR7bWFya2V0LmJhc2V9XyR7bWFya2V0LnF1b3RlfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbWFya2V0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG1hcmtldC5xdW90ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogbWFya2V0LmJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmVjaXNpb246IGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbjogcHJvcHMuaGlkZGVuTWFya2V0cy5pbmNsdWRlcyhtYXJrZXROYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGYXZvcml0ZTogcHJvcHMuaXNGYXZvcml0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHM6IHByb3BzLmFsbE1hcmtldFN0YXRzLmdldChtYXJrZXROYW1lLCB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3RhcnJlZDogdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cy5oYXMobWFya2V0TmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiBhICE9PSBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0ZsaXAsIG1hcmtldHN9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZVNob3dIaWRkZW4odmFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0hpZGRlbiA9PT0gdmFsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93SGlkZGVuOiB2YWxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlRmlsdGVySW5wdXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCl9KTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlSGlkZShyb3csIHN0YXR1cykge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhhbmRsZUhpZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFuZGxlSGlkZShyb3csIHN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuaGlkZU1hcmtldChyb3cua2V5LCBzdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVGbGlwKHJvdywgc3RhdHVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGFuZGxlRmxpcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5oYW5kbGVGbGlwKHJvdywgc3RhdHVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VNYXJrZXREaXJlY3Rpb24oe1xyXG4gICAgICAgICAgICBbcm93LmtleV06IHN0YXR1c1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnQoYVByaWNlLCBiUHJpY2UpIHtcclxuICAgICAgICBjb25zdCBjb252ZXJ0ID0gcHJpY2UgPT4ge1xyXG4gICAgICAgICAgICBwcmljZSA9IHByaWNlLnJlcGxhY2UoL1xcLC9nLCBcIlwiKTtcclxuICAgICAgICAgICAgaWYgKHByaWNlLmluY2x1ZGVzKFwia1wiKSkgcHJpY2UgPSBwcmljZS5yZXBsYWNlKC9rL2csIFwiXCIpICogMTAwMDtcclxuICAgICAgICAgICAgaWYgKHByaWNlLmluY2x1ZGVzKFwiTVwiKSlcclxuICAgICAgICAgICAgICAgIHByaWNlID0gcHJpY2UucmVwbGFjZSgvTS9nLCBcIlwiKSAqIDEwMDAgKiAxMDAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJpY2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhUHJpY2UgPSBjb252ZXJ0KGFQcmljZSk7XHJcbiAgICAgICAgYlByaWNlID0gY29udmVydChiUHJpY2UpO1xyXG5cclxuICAgICAgICBpZiAoYVByaWNlID09PSBudWxsICYmIGJQcmljZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFQcmljZSAhPT0gbnVsbCAmJiBiUHJpY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhUHJpY2UgLSBiUHJpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNvcnRGdW5jdGlvbnMgPSB7XHJcbiAgICAgICAgYWxwaGFiZXRpYzogZnVuY3Rpb24oYSwgYiwgZm9yY2UpIHtcclxuICAgICAgICAgICAgaWYgKGEua2V5ID4gYi5rZXkpIHJldHVybiBmb3JjZSA/IDEgOiAtMTtcclxuICAgICAgICAgICAgaWYgKGEua2V5IDwgYi5rZXkpIHJldHVybiBmb3JjZSA/IC0xIDogMTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmljZVZhbHVlOiBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIGxldCBhUHJpY2UgPSBhLnByaWNlLnByb3BzLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBsZXQgYlByaWNlID0gYi5wcmljZS5wcm9wcy5jaGlsZHJlbjtcclxuICAgICAgICAgICAgaWYgKGFQcmljZSAmJiBiUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnQoYVByaWNlLCBiUHJpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEZ1bmN0aW9ucy5hbHBoYWJldGljKGEsIGIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2b2x1bWVWYWx1ZTogZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICBsZXQgYVByaWNlID0gYS52b2x1bWUgfHwgMDtcclxuICAgICAgICAgICAgbGV0IGJQcmljZSA9IGIudm9sdW1lIHx8IDA7XHJcbiAgICAgICAgICAgIGxldCBjb21wYXJlZCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChhUHJpY2UgJiYgYlByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wYXJlZCA9IGFQcmljZSAtIGJQcmljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29tcGFyZWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEZ1bmN0aW9ucy5hbHBoYWJldGljKGEsIGIsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2VWYWx1ZTogZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICBsZXQgYVZhbHVlID0gcGFyc2VGbG9hdChhLmhvdXJfMjQpO1xyXG4gICAgICAgICAgICBsZXQgYlZhbHVlID0gcGFyc2VGbG9hdChiLmhvdXJfMjQpO1xyXG4gICAgICAgICAgICBsZXQgY29tcGFyZWQgPSAwO1xyXG4gICAgICAgICAgICBpZiAoYVZhbHVlICYmIGJWYWx1ZSAmJiAhaXNOYU4oYVZhbHVlKSAmJiAhaXNOYU4oYlZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGFyZWQgPSBhVmFsdWUgLSBiVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVkID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRGdW5jdGlvbnMuYWxwaGFiZXRpYyhhLCBiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0SGVhZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtzaG93RmxpcCwgc2hvd0hpZGRlbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJzdGFyXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNzVweFwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuYXNzZXRcIiAvPixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhc3NldFwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNGYXZvcml0ZVxyXG4gICAgICAgICAgICAgICAgPyB7fVxyXG4gICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnF1b3RlX25hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJxdW90ZV9uYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT57aXRlbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz4sXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicHJpY2VcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IHRoaXMuc29ydEZ1bmN0aW9ucy5wcmljZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e2l0ZW19PC9zcGFuPjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuaG91cl8yNF9zaG9ydFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImhvdXJfMjRcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IHRoaXMuc29ydEZ1bmN0aW9ucy5jaGFuZ2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VDbGFzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVjb3JkLmhvdXJfMjQpID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNoYW5nZS11cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBhcnNlRmxvYXQocmVjb3JkLmhvdXJfMjQpIDwgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCIsIHRleHRBbGlnbjogXCJyaWdodFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2hhbmdlQ2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuaG91cl8yNH0lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uudm9sdW1lXCIgLz4sXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidm9sdW1lXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiB0aGlzLnNvcnRGdW5jdGlvbnMudm9sdW1lVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U29ydE9yZGVyOiBcImRlc2NlbmRcIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfdm9sdW1lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC52b2x1bWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmJhc2VQcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93RmxpcFxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuZmxpcFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImZsaXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNob3dIaWRkZW4gPyBcImV4Y2hhbmdlLmhpZGVcIiA6IFwiYWNjb3VudC5wZXJtLnNob3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e2l0ZW19PC9zcGFuPjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEludGVydmFsKG5leHRQcm9wcyA9IG51bGwpIHtcclxuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlfSA9IG5leHRQcm9wcyB8fCB0aGlzLnByb3BzO1xyXG4gICAgICAgIHRoaXMuc3RhdHNDaGVja2VkID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0c0ludGVydmFsKFxyXG4gICAgICAgICAgICAzNSAqIDEwMDAsXHJcbiAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgIHF1b3RlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJJbnRlcnZhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0c0ludGVydmFsKSB0aGlzLnN0YXRzSW50ZXJ2YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnNyYyA9IFwiYXNzZXQtc3ltYm9scy9idHMucG5nXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVGYXZvcml0ZU1hcmtldChxdW90ZSwgYmFzZSkge1xyXG4gICAgICAgIGxldCBtYXJrZXRJRCA9IGAke3F1b3RlfV8ke2Jhc2V9YDtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKSkge1xyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnJlbW92ZVN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFRhYmxlRGF0YShyb3cpIHtcclxuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlLCBtYXJrZXRTdGF0cywgaXNIaWRkZW4sIGludmVydGVkLCBiYXNlUHJlY2lzaW9ufSA9IHJvdztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKHN5bWJvbCkge1xyXG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSBcIk9QRU4uQlRDXCIgfHwgc3ltYm9sID09PSBcIkdERVguQlRDXCIpIHJldHVybiBzeW1ib2w7XHJcbiAgICAgICAgICAgIGlmIChzeW1ib2wuc3RhcnRzV2l0aChcIlJVREVYLlwiKSkgcmV0dXJuIHN5bWJvbDtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbWdOYW1lID0gc3ltYm9sLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGltZ05hbWUubGVuZ3RoID09PSAyID8gaW1nTmFtZVsxXSA6IGltZ05hbWVbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbWdOYW1lID0gZ2V0SW1hZ2VOYW1lKHF1b3RlKTtcclxuXHJcbiAgICAgICAgbGV0IG1hcmtldElEID0gYCR7cXVvdGV9XyR7YmFzZX1gO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFyQ2xhc3MgPSB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXRJRClcclxuICAgICAgICAgICAgPyBcImdvbGQtc3RhclwiXHJcbiAgICAgICAgICAgIDogXCJncmV5LXN0YXJcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2V5OiBtYXJrZXRJRCxcclxuICAgICAgICAgICAgc3RhcjogKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZhdm9yaXRlTWFya2V0LmJpbmQodGhpcywgcXVvdGUsIGJhc2UpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhckNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlfc3Rhci5tYXJrZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgYXNzZXQ6IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke3F1b3RlfV8ke2Jhc2V9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDIwLCBtYXJnaW5SaWdodDogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBkYXRhUGxhY2U9XCJ0b3BcIiBuYW1lPXtxdW90ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0Zhdm9yaXRlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17YmFzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBxdW90ZV9uYW1lOiB0aGlzLnByb3BzLmlzRmF2b3JpdGUgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbm9UaXAgbmFtZT17YmFzZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgcHJpY2U6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIiBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge21hcmtldFN0YXRzICYmIG1hcmtldFN0YXRzLnByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdXRpbHMucHJpY2VfdGV4dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHMucHJpY2UudG9SZWFsKHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFzc2V0KHF1b3RlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBc3NldChiYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGhvdXJfMjQ6XHJcbiAgICAgICAgICAgICAgICAhbWFya2V0U3RhdHMgfHxcclxuICAgICAgICAgICAgICAgICFtYXJrZXRTdGF0cy5jaGFuZ2UgfHxcclxuICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmNoYW5nZSA9PT0gXCIwLjAwXCJcclxuICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICA6IG1hcmtldFN0YXRzLmNoYW5nZSxcclxuICAgICAgICAgICAgdm9sdW1lOlxyXG4gICAgICAgICAgICAgICAgIW1hcmtldFN0YXRzIHx8ICFtYXJrZXRTdGF0cy52b2x1bWVRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgIDogbWFya2V0U3RhdHMudm9sdW1lUXVvdGUsXHJcbiAgICAgICAgICAgIGZsaXA6XHJcbiAgICAgICAgICAgICAgICBpbnZlcnRlZCA9PT0gbnVsbCB8fCAhdGhpcy5wcm9wcy5pc0Zhdm9yaXRlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5faGFuZGxlRmxpcC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3cuaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzaHVmZmxlXCIgdGl0bGU9XCJpY29ucy5zaHVmZmxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGhpZGU6IChcclxuICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImljb25zLnBsdXNfY2lyY2xlLnNob3dfbWFya2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImljb25zLmNyb3NzX2NpcmNsZS5oaWRlX21hcmtldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5faGFuZGxlSGlkZS5iaW5kKHRoaXMsIHJvdywgIXJvdy5pc0hpZGRlbil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXNIaWRkZW4gPyBcInBsdXMtY2lyY2xlXCIgOiBcImNyb3NzLWNpcmNsZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpY29ucy5wbHVzX2NpcmNsZS5zaG93X21hcmtldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImljb25zLmNyb3NzX2NpcmNsZS5oaWRlX21hcmtldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBiYXNlUHJlY2lzaW9uOiBiYXNlUHJlY2lzaW9uXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHttYXJrZXRzLCBzaG93SGlkZGVuLCBmaWx0ZXJ9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya2V0Um93cyA9IG1hcmtldHNcclxuICAgICAgICAgICAgLmZpbHRlcihtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghIWZpbHRlciB8fCBtLmlzU3RhcnJlZCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKG0ubWFya2V0U3RhdHMgJiYgXCJ2b2x1bWVCYXNlXCIgaW4gbS5tYXJrZXRTdGF0cylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIW0ubWFya2V0U3RhdHMudm9sdW1lQmFzZSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocm93LmlzSGlkZGVuICE9PSB0aGlzLnN0YXRlLnNob3dIaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChyb3cucXVvdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VPYmplY3QgPSBDaGFpblN0b3JlLmdldEFzc2V0KHJvdy5iYXNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lzQml0QXNzZXQ6IHF1b3RlSXNCaXRBc3NldH0gPSB1dGlscy5yZXBsYWNlTmFtZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVPYmplY3RcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpc0JpdEFzc2V0OiBiYXNlSXNCaXRBc3NldH0gPSB1dGlscy5yZXBsYWNlTmFtZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZU9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZVN5bWJvbCA9IHJvdy5xdW90ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZVN5bWJvbCA9IHJvdy5iYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocXVvdGVJc0JpdEFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sID0gXCJiaXRcIiArIHF1b3RlU3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VJc0JpdEFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2wgPSBcImJpdFwiICsgYmFzZVN5bWJvbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlclBhaXIgPSBmaWx0ZXIuaW5jbHVkZXMoXCI6XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyUGFpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZUZpbHRlciA9IGZpbHRlci5zcGxpdChcIjpcIilbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlRmlsdGVyID0gZmlsdGVyLnNwbGl0KFwiOlwiKVsxXS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKHF1b3RlRmlsdGVyKS50b0xvd2VyQ2FzZSgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFN0cmluZyhiYXNlRmlsdGVyKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKGZpbHRlcikudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcoZmlsdGVyKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJsZURhdGEoey4uLnJvd30pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKHIgPT4gISFyKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VsZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlci4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlRmlsdGVySW5wdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxBbnRJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RvciBpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogXCI2cHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImlubGluZS1ibG9ja1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmU6IHNob3dIaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU2hvd0hpZGRlbi5iaW5kKHRoaXMsIGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5oaWRlX2hpZGRlblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImlubGluZS1ibG9ja1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmU6ICFzaG93SGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVNob3dIaWRkZW4uYmluZCh0aGlzLCB0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5zaG93X2hpZGRlblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIwLjVyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjNweCAwIDBcIiwgd2lkdGg6IFwiZml0LWNvbnRlbnRcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5vbmx5TGlxdWlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5TGlxdWlkOiAhdGhpcy5wcm9wcy5vbmx5TGlxdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjRyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNob3dfb25seV9saXF1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGVkTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDAsIHBhZGRpbmdSaWdodDogMH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgZGFzaGJvYXJkLXRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMuZ2V0SGVhZGVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17bWFya2V0Um93cy5sZW5ndGggPyBtYXJrZXRSb3dzIDogW119XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidXRpbGl0eS50b3RhbF94X21hcmtldHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQYWRkaW5nPVwiMS41cmVtXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBNYXJrZXRzVGFibGUsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgTWFya2V0c1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICBsZXQge21hcmtldERpcmVjdGlvbnMsIGhpZGRlbk1hcmtldHN9ID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWFya2V0RGlyZWN0aW9ucyxcclxuICAgICAgICAgICAgICAgIGhpZGRlbk1hcmtldHMsXHJcbiAgICAgICAgICAgICAgICBhbGxNYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMsXHJcbiAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzLFxyXG4gICAgICAgICAgICAgICAgb25seUxpcXVpZDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJvbmx5TGlxdWlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OztBQWtCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBR0E7QUFBQTtBQUdBO0FBcEJBO0FBc0JBO0FBdkJBO0FBMEJBOzs7O0FBcEZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQURBOzs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBREE7QUFlQTtBQWZBO0FBQ0E7QUFrQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFVQTtBQTFDQTtBQURBO0FBREE7QUFKQTtBQURBO0FBREE7QUEwREE7Ozs7QUFoRkE7QUFDQTtBQWtGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBcEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBVEE7QUFDQTtBQVVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBO0FBQ0E7QUFXQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBWkE7QUFhQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBcEVBO0FBQ0E7QUFzRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBbEJBO0FBQ0E7QUFxQkE7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0E7QUFDQTtBQTVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFhQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTZDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUxBO0FBUUE7QUFiQTtBQWtCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQUFBO0FBT0E7QUFwQkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBZkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBWkE7QUFnQkE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVhBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQVhBO0FBa0JBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBVUE7QUFNQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQVBBO0FBREE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUtBO0FBUEE7QUFYQTtBQXNCQTtBQWhHQTtBQWtHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBWkE7QUFzQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZEE7QUFEQTtBQWhDQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUF0REE7QUFpRUE7Ozs7QUFuakJBO0FBQ0E7QUFxakJBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUFoQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==