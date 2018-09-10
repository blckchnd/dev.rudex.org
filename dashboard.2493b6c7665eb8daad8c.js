(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ 2807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(551);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(712);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1269);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(865);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2808);
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
                alt_container__WEBPACK_IMPORTED_MODULE_4___default.a,
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

/***/ 2808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(525);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2806);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2543);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MarketCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2809);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(569);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(487);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(863);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2355);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(713);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(712);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(571);
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
                    hide: validMarkets > 29
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

/***/ 2809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(877);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(878);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1220);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1270);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1269);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(569);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(730);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLjI0OTNiNmM3NjY1ZWI4ZGFhZDhjLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldENhcmQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xuXG5jbGFzcyBEYXNoYm9hcmRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tBY2NvdW50U3RvcmUsIFNldHRpbmdzU3RvcmUsIE1hcmtldHNTdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtlZEFjY291bnRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkubGlua2VkQWNjb3VudHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUhpZGRlbkFjY291bnRzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50c1JlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRzTG9hZGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucmVmc0xvYWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW50cnk6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXNoYm9hcmRFbnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50c1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEYXNoYm9hcmQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZENvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IERhc2hib2FyZExpc3QgZnJvbSBcIi4vRGFzaGJvYXJkTGlzdFwiO1xuaW1wb3J0IHtSZWNlbnRUcmFuc2FjdGlvbnN9IGZyb20gXCIuLi9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IE1hcmtldENhcmQgZnJvbSBcIi4vTWFya2V0Q2FyZFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IExvZ2luU2VsZWN0b3IgZnJvbSBcIi4uL0xvZ2luU2VsZWN0b3JcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtnZXRGZWF0dXJlZE1hcmtldHN9IGZyb20gXCIuLi8uLi9icmFuZGluZ1wiO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBtYXJrZXRzQnlDaGFpbiA9IHtcbiAgICAgICAgICAgIFwiNDAxOGQ3ODRcIjogZ2V0RmVhdHVyZWRNYXJrZXRzKCksXG4gICAgICAgICAgICBcIjM5ZjVlMmVkXCI6IFtbXCJURVNUXCIsIFwiUEVHLkZBS0VVU0RcIl0sIFtcIlRFU1RcIiwgXCJCVFdUWVwiXV1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNoYWluSUQgPSBBcGlzLmluc3RhbmNlKCkuY2hhaW5faWQ7XG4gICAgICAgIGlmIChjaGFpbklEKSBjaGFpbklEID0gY2hhaW5JRC5zdWJzdHIoMCwgOCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICAgICAgc2hvd0lnbm9yZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZmVhdHVyZWRNYXJrZXRzOlxuICAgICAgICAgICAgICAgIG1hcmtldHNCeUNoYWluW2NoYWluSURdIHx8IG1hcmtldHNCeUNoYWluW1wiNDAxOGQ3ODRcIl0sXG4gICAgICAgICAgICBuZXdBc3NldHM6IFtdLFxuICAgICAgICAgICAgY3VycmVudEVudHJ5OiBwcm9wcy5jdXJyZW50RW50cnlcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLl9zb3J0TWFya2V0c0J5Vm9sdW1lID0gdGhpcy5fc29ydE1hcmtldHNCeVZvbHVtZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5mZWF0dXJlZE1hcmtldHMsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlZE1hcmtldHNcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUubmV3QXNzZXRzLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3QXNzZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMubGlua2VkQWNjb3VudHMgIT09IHRoaXMucHJvcHMubGlua2VkQWNjb3VudHMgfHxcbiAgICAgICAgICAgIC8vIG5leHRQcm9wcy5tYXJrZXRTdGF0cyAhPT0gdGhpcy5wcm9wcy5tYXJrZXRTdGF0cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmlnbm9yZWRBY2NvdW50cyAhPT0gdGhpcy5wcm9wcy5pZ25vcmVkQWNjb3VudHMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5wYXNzd29yZEFjY291bnQgIT09IHRoaXMucHJvcHMucGFzc3dvcmRBY2NvdW50IHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUud2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGggfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50c1JlYWR5ICE9PSB0aGlzLnByb3BzLmFjY291bnRzUmVhZHkgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5zaG93SWdub3JlZCAhPT0gdGhpcy5zdGF0ZS5zaG93SWdub3JlZCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLmN1cnJlbnRFbnRyeSAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50RW50cnlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgX3NldERpbWVuc2lvbnMoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGh9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblRvZ2dsZUlnbm9yZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0lnbm9yZWQ6ICF0aGlzLnN0YXRlLnNob3dJZ25vcmVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vblN3aXRjaFR5cGUodHlwZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRFbnRyeTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGRhc2hib2FyZEVudHJ5OiB0eXBlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGxpbmtlZEFjY291bnRzLFxuICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgIGFjY291bnRzUmVhZHksXG4gICAgICAgICAgICBwYXNzd29yZEFjY291bnRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHNob3dJZ25vcmVkLFxuICAgICAgICAgICAgZmVhdHVyZWRNYXJrZXRzLFxuICAgICAgICAgICAgbmV3QXNzZXRzLFxuICAgICAgICAgICAgY3VycmVudEVudHJ5XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChwYXNzd29yZEFjY291bnQgJiYgIWxpbmtlZEFjY291bnRzLmhhcyhwYXNzd29yZEFjY291bnQpKSB7XG4gICAgICAgICAgICBsaW5rZWRBY2NvdW50cyA9IGxpbmtlZEFjY291bnRzLmFkZChwYXNzd29yZEFjY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuYW1lcyA9IGxpbmtlZEFjY291bnRzLnRvQXJyYXkoKS5zb3J0KCk7XG4gICAgICAgIGlmIChwYXNzd29yZEFjY291bnQgJiYgbmFtZXMuaW5kZXhPZihwYXNzd29yZEFjY291bnQpID09PSAtMSlcbiAgICAgICAgICAgIG5hbWVzLnB1c2gocGFzc3dvcmRBY2NvdW50KTtcbiAgICAgICAgbGV0IGlnbm9yZWQgPSBteUhpZGRlbkFjY291bnRzLnRvQXJyYXkoKS5zb3J0KCk7XG5cbiAgICAgICAgbGV0IGFjY291bnRDb3VudCA9XG4gICAgICAgICAgICBsaW5rZWRBY2NvdW50cy5zaXplICtcbiAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICAocGFzc3dvcmRBY2NvdW50ID8gMSA6IDApO1xuXG4gICAgICAgIGlmICghYWNjb3VudHNSZWFkeSkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbGlkTWFya2V0cyA9IDA7XG5cbiAgICAgICAgbGV0IG1hcmtldHMgPSBmZWF0dXJlZE1hcmtldHNcbiAgICAgICAgICAgIC5tYXAocGFpciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSEFDSzogU2hvdyBhbGwgZGVmaW5lZCBtYXJrZXRzXG4gICAgICAgICAgICAgICAgdmFsaWRNYXJrZXRzKys7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkTWFya2V0cyA+IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBgIHNob3ctZm9yLSR7XG4gICAgICAgICAgICAgICAgICAgICAgICAhYWNjb3VudENvdW50ID8gXCJ4bGFyZ2VcIiA6IFwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICB9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbGlkTWFya2V0cyA+IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSBgIHNob3ctZm9yLSR7XG4gICAgICAgICAgICAgICAgICAgICAgICAhYWNjb3VudENvdW50ID8gXCJsYXJnZVwiIDogXCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICB9YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TWFya2V0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwYWlyWzBdICsgXCJfXCIgKyBwYWlyWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SWQ9e3BhaXJbMV0gKyBcIl9cIiArIHBhaXJbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXc9e25ld0Fzc2V0cy5pbmRleE9mKHBhaXJbMV0pICE9PSAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3BhaXJbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtwYWlyWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0PXtwYWlyWzJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZT17dmFsaWRNYXJrZXRzID4gMjl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKTtcblxuICAgICAgICBpZiAoIWFjY291bnRDb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2dpblNlbGVjdG9yIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtcImFjY291bnRzXCIsIFwiY29udGFjdHNcIiwgXCJyZWNlbnRcIl07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwid3JhcHBlclwiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25seUFjY291bnRzID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jay1jb250ZW50LWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDE1LCBwYWRkaW5nVG9wOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5mZWF0dXJlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25seUFjY291bnRzID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC11cC0xIG1lZGl1bS11cC0zIGxhcmdlLXVwLTQgbm8tb3ZlcmZsb3cgZm0tb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxubGV0IERhc2hib2FyZFdyYXBwZXIgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIDxEYXNoYm9hcmQgey4uLnByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChEYXNoYm9hcmRXcmFwcGVyID0gY29ubmVjdChcbiAgICBEYXNoYm9hcmRXcmFwcGVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIE1hcmtldENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHF1b3RlOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgYmFzZTogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGludmVydDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaW52ZXJ0OiB0cnVlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGltZ0Vycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9jaGVja1N0YXRzKG5ld1N0YXRzID0ge2Nsb3NlOiB7fX0sIG9sZFN0YXRzID0ge2Nsb3NlOiB7fX0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5ld1N0YXRzLnZvbHVtZUJhc2UgIT09IG9sZFN0YXRzLnZvbHVtZUJhc2UgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXdTdGF0cy5jbG9zZSAmJiBuZXdTdGF0cy5jbG9zZS5iYXNlLFxuICAgICAgICAgICAgICAgIG9sZFN0YXRzLmNsb3NlICYmIG9sZFN0YXRzLmNsb3NlLmJhc2VcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICBuZXdTdGF0cy5jbG9zZSAmJiBuZXdTdGF0cy5jbG9zZS5xdW90ZSxcbiAgICAgICAgICAgICAgICBvbGRTdGF0cy5jbG9zZSAmJiBvbGRTdGF0cy5jbG9zZS5xdW90ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU3RhdHMobnAubWFya2V0U3RhdHMsIHRoaXMucHJvcHMubWFya2V0U3RhdHMpIHx8XG4gICAgICAgICAgICBucC5iYXNlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLmJhc2UuZ2V0KFwiaWRcIikgfHxcbiAgICAgICAgICAgIG5wLnF1b3RlLmdldChcImlkXCIpICE9PSB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpIHx8XG4gICAgICAgICAgICBucy5pbWdFcnJvciAhPT0gdGhpcy5zdGF0ZS5pbWdFcnJvclxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHMuZGVmZXIodGhpcy5wcm9wcy5xdW90ZSwgdGhpcy5wcm9wcy5iYXNlKTtcbiAgICAgICAgdGhpcy5zdGF0c0NoZWNrZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIDM1ICogMTAwMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdHNJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgZ29Ub01hcmtldChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgaGlzdG9yeSA9IHRoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeTtcblxuICAgICAgICBoaXN0b3J5LnB1c2goXG4gICAgICAgICAgICBgL21hcmtldC8ke3RoaXMucHJvcHMuYmFzZS5nZXQoXCJzeW1ib2xcIil9XyR7dGhpcy5wcm9wcy5xdW90ZS5nZXQoXG4gICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgKX1gXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnNyYyA9IFwiYXNzZXQtc3ltYm9scy9idHMucG5nXCI7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aGlkZSwgaXNMb3dWb2x1bWUsIGJhc2UsIHF1b3RlLCBtYXJrZXRTdGF0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoaXNMb3dWb2x1bWUgfHwgaGlkZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKGFzc2V0KSB7XG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wgPT09IFwiT1BFTi5CVENcIiB8fCBzeW1ib2wgPT09IFwiR0RFWC5CVENcIikgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wuc3RhcnRzV2l0aChcIkVTQ1JPVy5cIikpIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAvLyBsZXQgaW1nTmFtZSA9IGFzc2V0LmdldChcInN5bWJvbFwiKS5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICAvLyByZXR1cm4gaW1nTmFtZS5sZW5ndGggPT09IDIgPyBpbWdOYW1lWzFdIDogaW1nTmFtZVswXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1nTmFtZSA9IGdldEltYWdlTmFtZShiYXNlKTtcblxuICAgICAgICAvLyBsZXQgbWFya2V0SUQgPSBiYXNlLmdldChcInN5bWJvbFwiKSArIFwiX1wiICsgcXVvdGUuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAvLyBsZXQgc3RhdHMgPSBtYXJrZXRTdGF0cztcbiAgICAgICAgbGV0IGNoYW5nZUNsYXNzID0gIW1hcmtldFN0YXRzXG4gICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgIDogcGFyc2VGbG9hdChtYXJrZXRTdGF0cy5jaGFuZ2UpID4gMFxuICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtdXBcIlxuICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdChtYXJrZXRTdGF0cy5jaGFuZ2UpIDwgMFxuICAgICAgICAgICAgICAgICAgICA/IFwiY2hhbmdlLWRvd25cIlxuICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgXCJncmlkLWJsb2NrIG5vLW92ZXJmbG93IGZtLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvTWFya2V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIHNocmlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRXJyb3IuYmluZCh0aGlzLCBpbWdOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiA3MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZtLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17YmFzZS5nZXQoXCJzeW1ib2xcIil9IC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS12b2x1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz46e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRTdGF0cyAmJiBtYXJrZXRTdGF0cy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLnByaWNlX3RleHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLnByaWNlLnRvUmVhbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZtLXZvbHVtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uudm9sdW1lXCIgLz46e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbWFya2V0U3RhdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X3ZvbHVtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHMudm9sdW1lQmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS1jaGFuZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNoYW5nZVwiIC8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbmFtZXMoXCJmbG9hdC1yaWdodFwiLCBjaGFuZ2VDbGFzcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbWFya2V0U3RhdHMgPyBudWxsIDogbWFya2V0U3RhdHMuY2hhbmdlfSVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTWFya2V0Q2FyZCA9IEJpbmRUb0NoYWluU3RhdGUoTWFya2V0Q2FyZCk7XG5cbmNsYXNzIE1hcmtldENhcmRXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TWFya2V0Q2FyZCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIE1hcmtldENhcmRXcmFwcGVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW01hcmtldHNTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm1hcmtldElkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBRkE7QUF3QkE7QUF4QkE7QUEyQkE7Ozs7QUE5QkE7QUFDQTtBQWdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQW5CQTtBQW9CQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBVUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQWRBO0FBREE7QUFzQkE7Ozs7QUE3S0E7QUFDQTtBQStLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTEE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBV0E7OztBQUVBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRkE7QUE3QkE7QUFsQkE7QUF3REE7Ozs7QUF2S0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVlBO0FBREE7QUFDQTtBQUNBO0FBNkpBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==