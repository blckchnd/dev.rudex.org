(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 2703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2704);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TransitionWrapper = function (_React$Component) {
    _inherits(TransitionWrapper, _React$Component);

    function TransitionWrapper() {
        _classCallCheck(this, TransitionWrapper);

        var _this = _possibleConstructorReturn(this, (TransitionWrapper.__proto__ || Object.getPrototypeOf(TransitionWrapper)).call(this));

        _this.state = {
            animateEnter: false
        };

        _this.timer = null;
        return _this;
    }

    _createClass(TransitionWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.enableAnimation();
        }
    }, {
        key: "resetAnimation",
        value: function resetAnimation() {
            this.setState({
                animateEnter: false
            });

            this.enableAnimation();
        }
    }, {
        key: "enableAnimation",
        value: function enableAnimation() {
            var _this2 = this;

            this.timer = setTimeout(function () {
                if (_this2.timer) {
                    _this2.setState({
                        animateEnter: true
                    });
                }
            }, 2000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.children) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.props.component);
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default.a,
                    {
                        id: this.props.id,
                        className: this.props.className,
                        component: this.props.component,
                        transitionName: this.props.transitionName,
                        transitionEnterTimeout: this.props.enterTimeout,
                        transitionEnter: this.state.animateEnter,
                        transitionLeave: false
                    },
                    this.props.children
                );
            }
        }
    }]);

    return TransitionWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TransitionWrapper.defaultProps = {
    component: "span",
    enterTimeout: 2000
};
/* harmony default export */ __webpack_exports__["default"] = (TransitionWrapper);

/***/ }),

/***/ 2728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(526);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2639);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(570);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2424);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1847);
/* harmony import */ var _MarketRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2729);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(712);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2348);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2371);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2298);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(713);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2372);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2349);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2731);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1939);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(419);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2541);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(720);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2317);
/* harmony import */ var _QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2732);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_25__);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




























var MarketGroup = function (_React$Component) {
    _inherits(MarketGroup, _React$Component);

    function MarketGroup(props) {
        _classCallCheck(this, MarketGroup);

        var _this = _possibleConstructorReturn(this, (MarketGroup.__proto__ || Object.getPrototypeOf(MarketGroup)).call(this));

        _this.state = _this._getInitialState(props);
        return _this;
    }

    _createClass(MarketGroup, [{
        key: "_getInitialState",
        value: function _getInitialState(props) {
            var open = props.findMarketTab ? true : props.viewSettings.get("myMarketsBase_" + props.index);
            return {
                open: open !== undefined ? open : true,
                inverseSort: props.viewSettings.get("myMarketsInvert", true),
                sortBy: props.viewSettings.get("myMarketsSort", "volume")
            };
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.findMarketTab !== this.props.findMarketTab) {
                this.setState(this._getInitialState(nextProps));
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!nextProps.markets || !this.props.markets) {
                return true;
            }
            return !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextState, this.state) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.markets, this.props.markets) || nextProps.starredMarkets !== this.props.starredMarkets || nextProps.marketStats !== this.props.marketStats || nextProps.userMarkets !== this.props.userMarkets;
        }
    }, {
        key: "_inverseSort",
        value: function _inverseSort() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                myMarketsInvert: !this.state.myMarketsInvert
            });
            this.setState({
                inverseSort: !this.state.inverseSort
            });
        }
    }, {
        key: "_changeSort",
        value: function _changeSort(type) {
            if (type !== this.state.sortBy) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                    myMarketsSort: type
                });
                this.setState({
                    sortBy: type
                });
            } else {
                this._inverseSort();
            }
        }

        // _onSelectBase(e) {
        //     e.preventDefault();
        //     e.stopPropagation();

        //     SettingsActions.changeBase(this.props.index, e.target.value);
        // }

    }, {
        key: "_onToggle",
        value: function _onToggle() {
            if (!this.props.findMarketTab) {
                var open = !this.state.open;
                this.setState({
                    open: open
                });

                var setting = {};
                setting["myMarketsBase_" + this.props.index] = open;
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting(setting);
            }
        }
    }, {
        key: "_onToggleUserMarket",
        value: function _onToggleUserMarket(market) {
            var _market$split = market.split("_"),
                _market$split2 = _slicedToArray(_market$split, 2),
                base = _market$split2[0],
                quote = _market$split2[1];

            var newValue = !this.props.userMarkets.get(market);
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].setUserMarket(base, quote, newValue);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                columns = _props.columns,
                markets = _props.markets,
                base = _props.base,
                marketStats = _props.marketStats,
                starredMarkets = _props.starredMarkets,
                current = _props.current;
            var _state = this.state,
                sortBy = _state.sortBy,
                inverseSort = _state.inverseSort,
                open = _state.open;


            if (!markets || !markets.length) {
                return null;
            }

            var headers = columns.map(function (header) {
                switch (header.name) {
                    case "market":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            {
                                key: header.name,
                                className: "clickable",
                                onClick: _this2._changeSort.bind(_this2, "name")
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.market" })
                        );

                    case "vol":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            {
                                key: header.name,
                                className: "clickable",
                                onClick: _this2._changeSort.bind(_this2, "volume"),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.vol_short" })
                        );

                    case "price":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name, style: { textAlign: "right" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.price" })
                        );

                    case "quoteSupply":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.base_supply" })
                        );

                    case "baseSupply":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.quote_supply" })
                        );

                    case "change":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            {
                                key: header.name,
                                className: "clickable",
                                onClick: _this2._changeSort.bind(_this2, "change"),
                                style: { textAlign: "right" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.change" })
                        );

                    case "issuer":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "explorer.assets.issuer" })
                        );

                    case "add":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name, style: { textAlign: "right" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.perm.confirm_add" })
                        );

                    default:
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { key: header.name });
                }
            });

            var marketRows = markets.map(function (market) {
                if (_this2.props.onlyLiquid && marketStats.get(market.id) && marketStats.get(market.id).volumeBase == 0) {
                    return null;
                }
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MarketRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    key: market.id,
                    name: base === "others" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { name: market.quote }),
                        ":",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { name: market.base })
                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        dataPlace: "left",
                        name: market.quote
                    }),
                    quote: market.quote,
                    base: market.base,
                    columns: columns,
                    leftAlign: true,
                    compact: true,
                    noSymbols: true,
                    stats: marketStats.get(market.id),
                    starred: starredMarkets.has(market.id),
                    current: current === market.id,
                    isChecked: _this2.props.userMarkets.has(market.id),
                    isDefault: _this2.props.defaultMarkets && _this2.props.defaultMarkets.has(market.id),
                    onCheckMarket: _this2._onToggleUserMarket.bind(_this2),
                    location: _this2.props.location,
                    history: _this2.props.history
                });
            }).filter(function (a) {
                return a !== null;
            }).sort(function (a, b) {
                var a_symbols = a.key.split("_");
                var b_symbols = b.key.split("_");
                var aStats = marketStats.get(a_symbols[0] + "_" + a_symbols[1]);
                var bStats = marketStats.get(b_symbols[0] + "_" + b_symbols[1]);

                switch (sortBy) {
                    case "name":
                        if (a_symbols[0] > b_symbols[0]) {
                            return inverseSort ? -1 : 1;
                        } else if (a_symbols[0] < b_symbols[0]) {
                            return inverseSort ? 1 : -1;
                        } else {
                            if (a_symbols[1] > b_symbols[1]) {
                                return inverseSort ? -1 : 1;
                            } else if (a_symbols[1] < b_symbols[1]) {
                                return inverseSort ? 1 : -1;
                            } else {
                                return 0;
                            }
                        }

                    case "volume":
                        if (aStats && bStats) {
                            if (inverseSort) {
                                return bStats.volumeBase - aStats.volumeBase;
                            } else {
                                return aStats.volumeBase - bStats.volumeBase;
                            }
                        } else {
                            return 0;
                        }

                    case "change":
                        if (aStats && bStats) {
                            if (inverseSort) {
                                return bStats.change - aStats.change;
                            } else {
                                return aStats.change - bStats.change;
                            }
                        } else {
                            return 0;
                        }
                }
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { style: { paddingRight: 10 } },
                open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "table",
                    { className: "table table-hover text-right" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "thead",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tr",
                            null,
                            headers
                        )
                    ),
                    marketRows && marketRows.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "tbody",
                        null,
                        marketRows
                    ) : null
                ) : null
            );
        }
    }]);

    return MarketGroup;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MarketGroup.defaultProps = {
    maxRows: 20,
    onlyLiquid: false
};

var MyMarkets = function (_React$Component2) {
    _inherits(MyMarkets, _React$Component2);

    function MyMarkets(props) {
        _classCallCheck(this, MyMarkets);

        var _this3 = _possibleConstructorReturn(this, (MyMarkets.__proto__ || Object.getPrototypeOf(MyMarkets)).call(this));

        _this3.clearInput = function () {
            _this3.setState({ myMarketFilter: "" });
        };

        _this3.handleSearchUpdate = function (e) {
            _this3.setState({
                myMarketFilter: e.target.value && e.target.value.toUpperCase()
            });
        };

        _this3.state = {
            isQuoteModalVisible: false,
            inverseSort: props.viewSettings.get("myMarketsInvert", true),
            sortBy: props.viewSettings.get("myMarketsSort", "volume"),
            activeTab: props.viewSettings.get("favMarketTab", "my-market"),
            activeMarketTab: props.viewSettings.get("activeMarketTab", 0),
            lookupQuote: null,
            lookupBase: null,
            inputValue: "",
            minWidth: "100%",
            findBaseInput: "USD",
            activeFindBase: "USD"
        };

        _this3._setMinWidth = _this3._setMinWidth.bind(_this3);
        _this3.getAssetList = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_14__["default"].getAssetList.defer, 150);

        _this3.showQuoteModal = _this3.showQuoteModal.bind(_this3);
        _this3.hideQuoteModal = _this3.hideQuoteModal.bind(_this3);
        return _this3;
    }

    _createClass(MyMarkets, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            /* Trigger a lookup when switching tabs to find-market */
            if (this.state.activeTab !== "find-market" && nextState.activeTab === "find-market" && !nextProps.searchAssets.size) {
                this._lookupAssets("OPEN.", true);
            }

            if (this.state.activeTab !== nextState.activeTab) {
                this._changeTab(nextState.activeTab);
            } else if (!nextProps.tabHeader && this.state.activeTab !== nextProps.activeTab) {
                this._changeTab(nextProps.activeTab);
            }

            return !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.searchAssets, this.props.searchAssets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.markets, this.props.markets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.starredMarkets, this.props.starredMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.defaultMarkets, this.props.defaultMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.marketStats, this.props.marketStats) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextState, this.state) || nextProps.current !== this.props.current || nextProps.minWidth !== this.props.minWidth || nextProps.listHeight !== this.props.listHeight || nextProps.preferredBases !== this.props.preferredBases || nextProps.onlyStars !== this.props.onlyStars || nextProps.onlyLiquid !== this.props.onlyLiquid || nextProps.assetsLoading !== this.props.assetsLoading || nextProps.userMarkets !== this.props.userMarkets;
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            if (this.props.setMinWidth) {
                window.addEventListener("resize", this._setMinWidth, {
                    capture: false,
                    passive: true
                });
            }

            if (this.props.currrent) {
                var currentBase = this.props.current.split("_")[1];
                var currentIndex = this.props.preferredBases.findIndex(function (a) {
                    return a === currentBase;
                });
                if (currentIndex !== -1 && currentIndex !== this.state.activeMarketTab) {
                    this.setState({ activeMarketTab: currentIndex });
                }
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this4 = this;

            var historyContainer = this.refs.favorites;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.initialize(historyContainer);

            this._setMinWidth();

            if (this.state.activeTab === "find-market") {
                this._lookupAssets("OPEN.", true);
            }

            if (this.state.activeTab !== this.props.activeTab) {
                setTimeout(function () {
                    _this4._changeTab(_this4.props.activeTab);
                }, 100);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.props.setMinWidth) {
                window.removeEventListener("resize", this._setMinWidth);
            }
            clearTimeout(this.timer);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (this.props.myMarketTab && !np.myMarketTab) {
                if (this.refs.findSearchInput) this.refs.findSearchInput.focus();
            }
        }
    }, {
        key: "hideQuoteModal",
        value: function hideQuoteModal() {
            this.setState({
                isQuoteModalVisible: false
            });
        }
    }, {
        key: "showQuoteModal",
        value: function showQuoteModal() {
            this.setState({
                isQuoteModalVisible: true
            });
        }
    }, {
        key: "_setMinWidth",
        value: function _setMinWidth() {
            if (this.props.setMinWidth && this.refs.favorites && this.props.activeTab === "my-market") {
                if (this.state.minWidth !== this.refs.favorites.offsetWidth) {
                    this.setState({
                        minWidth: this.refs.favorites.offsetWidth
                    });
                }
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (this.refs.favorites) {
                var historyContainer = this.refs.favorites;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(historyContainer);
            }
        }
    }, {
        key: "_inverseSort",
        value: function _inverseSort() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                myMarketsInvert: !this.state.myMarketsInvert
            });
            this.setState({
                inverseSort: !this.state.inverseSort
            });
        }
    }, {
        key: "_changeSort",
        value: function _changeSort(type) {
            if (type !== this.state.sortBy) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                    myMarketsSort: type
                });
                this.setState({
                    sortBy: type
                });
            } else {
                this._inverseSort();
            }
        }
    }, {
        key: "_goMarkets",
        value: function _goMarkets() {
            this.props.history.push("/markets");
        }
    }, {
        key: "_changeTab",
        value: function _changeTab(tab) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                favMarketTab: tab
            });
            this.setState({
                activeTab: tab
            });

            this._setMinWidth();
        }
    }, {
        key: "_onInputName",
        value: function _onInputName(getBackedAssets, e) {
            var _this5 = this;

            var toFind = e.target.value.trim().toUpperCase();
            var isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_20__["ChainValidation"].is_valid_symbol_error(toFind, true);

            this.setState({
                inputValue: toFind
            });
            /* Don't lookup invalid asset names */
            if (toFind && toFind.length >= 2 && !isValidName) return;

            if (this.state.inputValue !== toFind) {
                this.timer && clearTimeout(this.timer);
            }

            this.timer = setTimeout(function () {
                _this5._lookupAssets(toFind, getBackedAssets);
            }, 1500);
        }
    }, {
        key: "_lookupAssets",
        value: function _lookupAssets(value) {
            var gatewayAssets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!value && value !== "") return;

            var symbols = value.toUpperCase().split(":");
            var quote = symbols[0];
            var base = symbols.length === 2 ? symbols[1] : null;

            this.setState({
                lookupQuote: quote,
                lookupBase: base
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting.defer({
                marketLookupInput: value.toUpperCase()
            });

            this.getAssetList(quote, 50, gatewayAssets);
        }
    }, {
        key: "toggleActiveMarketTab",
        value: function toggleActiveMarketTab(index) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                activeMarketTab: index
            });

            this.setState({
                activeMarketTab: index
            });
        }
    }, {
        key: "_onInputBaseAsset",
        value: function _onInputBaseAsset(asset) {
            this.setState({
                findBaseInput: asset.toUpperCase(),
                error: null
            });
        }
    }, {
        key: "_onFoundBaseAsset",
        value: function _onFoundBaseAsset(asset) {
            if (asset) {
                this.setState({ activeFindBase: asset.get("symbol") });
            }
        }
    }, {
        key: "_getMarkets",
        value: function _getMarkets() {
            var _props2 = this.props,
                searchAssets = _props2.searchAssets,
                defaultMarkets = _props2.defaultMarkets,
                onlyStars = _props2.onlyStars,
                userMarkets = _props2.userMarkets,
                preferredBases = _props2.preferredBases,
                starredMarkets = _props2.starredMarkets;
            var _state2 = this.state,
                activeTab = _state2.activeTab,
                lookupQuote = _state2.lookupQuote,
                lookupBase = _state2.lookupBase,
                myMarketFilter = _state2.myMarketFilter,
                activeMarketTab = _state2.activeMarketTab;

            var possibleGatewayAssets = Object(common_gateways__WEBPACK_IMPORTED_MODULE_23__["getPossibleGatewayPrefixes"])(preferredBases);

            var bases = this._getBases();
            var allMarkets = [],
                baseGroups = {};
            var otherMarkets = [];

            var myMarketTab = activeTab === "my-market";

            if (searchAssets.size) {
                searchAssets.filter(function (a) {
                    try {
                        if (a.options.description) {
                            var description = JSON.parse(a.options.description);
                            if ("visible" in description) {
                                if (!description.visible) return false;
                            }
                        }
                    } catch (e) {}

                    return a.symbol.indexOf(lookupQuote) !== -1 && a.symbol.length >= lookupQuote.length;
                }).forEach(function (asset) {
                    bases.forEach(function (base) {
                        var marketID = asset.symbol + "_" + base;

                        if (base !== asset.symbol) {
                            allMarkets.push([marketID, { quote: asset.symbol, base: base }]);
                        }
                    });
                });
            }

            allMarkets = allMarkets.filter(function (a) {
                // If a base asset is specified, limit the quote asset to the exact search term
                if (lookupBase) {
                    return a[1].quote === lookupQuote;
                }
                return true;
            });

            var activeMarkets = myMarketTab ? defaultMarkets : immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map(allMarkets);
            if (myMarketTab && userMarkets.size) {
                userMarkets.forEach(function (market, key) {
                    if (!activeMarkets.has(key)) activeMarkets = activeMarkets.set(key, market);
                });
            }

            function filterAndSeparateMarkets(base, matchBases, markets, baseGroups, otherMarkets) {
                var others = markets.filter(function (a) {
                    if (a.base === a.quote) return false;
                    /* Return search results in the Find Markets Tab */
                    if (!myMarketTab) {
                        if (lookupQuote.length < 1) {
                            return false;
                        }

                        return a.quote.indexOf(lookupQuote) !== -1;
                    } else {
                        /* Return filtered markets if a filter is input */
                        var ID = a.quote + "_" + a.base;
                        if (!!myMarketFilter) {
                            return ID.indexOf(myMarketFilter) !== -1;
                        }
                        /* Return only starred markets if that option is checked */
                        if (onlyStars && !starredMarkets.has(ID)) {
                            return false;
                        }
                        /* Else return all markets */
                        return true;
                    }
                }).map(function (market) {
                    var marketID = market.quote + "_" + market.base;
                    if (matchBases.indexOf(market.base) !== -1) {
                        if (!baseGroups[base]) {
                            baseGroups[base] = [];
                        }
                        var marketObject = {
                            id: marketID,
                            quote: market.quote,
                            base: market.base
                        };
                        if (!baseGroups[base].find(function (m) {
                            return m.id === marketID;
                        })) baseGroups[base].push(marketObject);
                        return null;
                    } else if (!preferredBases.includes(market.base) && possibleGatewayAssets.indexOf(market.base) === -1) {
                        // console.log("Adding to other markets:", base, market.base, preferredBases.toJS())
                        return {
                            id: marketID,
                            quote: market.quote,
                            base: market.base
                        };
                    }
                }).filter(function (a) {
                    return !!a;
                }).take(myMarketTab ? 100 : 20).toArray();
                return { otherMarkets: others.concat(otherMarkets), baseGroups: baseGroups };
            }

            if (activeMarkets.size > 0) {
                var currentBase = myMarketTab ? preferredBases.get(activeMarketTab) : this.state.activeFindBase;

                /* Check for possible gateway versions of the asset */
                var _filterAndSeparateMar = filterAndSeparateMarkets(currentBase, [currentBase], activeMarkets, baseGroups, otherMarkets);

                otherMarkets = _filterAndSeparateMar.otherMarkets;
                baseGroups = _filterAndSeparateMar.baseGroups;
                common_gateways__WEBPACK_IMPORTED_MODULE_23__["gatewayPrefixes"].forEach(function (prefix) {
                    var possibleGatewayAssetName = prefix + "." + currentBase;
                    var gatewayAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_20__["ChainStore"].getAsset(possibleGatewayAssetName);
                    /* If the gateway offers an asset for this base, add it to the list */
                    if (!!gatewayAsset) {
                        var gatewayMarkets = activeMarkets.map(function (m) {
                            if (m.quote === m.base) return null;
                            var newID = m.quote + "_" + possibleGatewayAssetName;
                            if (activeMarkets.has(newID)) return null;
                            return {
                                base: possibleGatewayAssetName,
                                quote: m.quote
                            };
                        }, {}).filter(function (m) {
                            return !!m;
                        });

                        var _filterAndSeparateMar2 = filterAndSeparateMarkets(currentBase, [currentBase, possibleGatewayAssetName], gatewayMarkets, baseGroups, otherMarkets);

                        otherMarkets = _filterAndSeparateMar2.otherMarkets;
                        baseGroups = _filterAndSeparateMar2.baseGroups;
                    }
                });
            }

            return { baseGroups: baseGroups, otherMarkets: otherMarkets };
        }
    }, {
        key: "_getBases",
        value: function _getBases() {
            var _props3 = this.props,
                preferredBases = _props3.preferredBases,
                searchAssets = _props3.searchAssets;
            var _state3 = this.state,
                lookupQuote = _state3.lookupQuote,
                lookupBase = _state3.lookupBase;


            var bases = searchAssets.filter(function (a) {
                if (lookupBase && lookupBase.length) {
                    return a.symbol.indexOf(lookupBase) === 0;
                }
                return a.symbol.indexOf(lookupQuote) !== -1;
            }).map(function (asset) {
                if (lookupBase && lookupBase.length) {
                    if (asset.symbol.indexOf(lookupBase) === 0) {
                        return asset.symbol;
                    }
                } else if (preferredBases.includes(asset.symbol)) {
                    if (asset.symbol.length >= lookupQuote.length && asset.symbol.length < lookupQuote.length + 3) {
                        return asset.symbol;
                    }
                }
            }).filter(function (a) {
                return !!a;
            }).toArray();

            bases = bases.concat(preferredBases.filter(function (a) {
                if (!lookupBase || !lookupBase.length) {
                    return true;
                }
                return a.indexOf(lookupBase) === 0;
            }).toArray());

            bases = bases.filter(function (base) {
                if (lookupBase && lookupBase.length > 1) {
                    return base.indexOf(lookupBase) === 0;
                } else {
                    return true;
                }
            });

            return bases;
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            var _props4 = this.props,
                starredMarkets = _props4.starredMarkets,
                marketStats = _props4.marketStats,
                columns = _props4.columns,
                assetsLoading = _props4.assetsLoading,
                preferredBases = _props4.preferredBases,
                current = _props4.current,
                viewSettings = _props4.viewSettings,
                listHeight = _props4.listHeight;
            var _state4 = this.state,
                activeMarketTab = _state4.activeMarketTab,
                activeTab = _state4.activeTab;


            var myMarketTab = activeTab === "my-market";
            var defaultBases = preferredBases.map(function (a) {
                return a;
            });

            if (!myMarketTab) {
                preferredBases = preferredBases.clear();
                preferredBases = preferredBases.push(this.state.activeFindBase);
            }

            // Add some default base options
            // let preferredBases = [coreSymbol, "BTC", "USD", "CNY"];

            /* In the find-market tab, only use market tab 0 */
            if (!myMarketTab) activeMarketTab = 0;

            var _getMarkets2 = this._getMarkets(),
                baseGroups = _getMarkets2.baseGroups,
                otherMarkets = _getMarkets2.otherMarkets;

            var hasOthers = otherMarkets && otherMarkets.length;
            var hc = "mymarkets-header clickable";
            var starClass = classnames__WEBPACK_IMPORTED_MODULE_16___default()(hc, { inactive: !myMarketTab });
            var allClass = classnames__WEBPACK_IMPORTED_MODULE_16___default()(hc, { inactive: myMarketTab });

            var listStyle = {
                minWidth: this.state.minWidth,
                minHeight: "6rem"
            };
            if (listHeight) {
                listStyle.height = listHeight;
            }

            var translator = __webpack_require__(574);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: this.props.className, style: this.props.style },
                this.props.tabHeader ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: this.props.headerStyle,
                        className: "grid-block shrink left-orderbook-header bottom-header"
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            ref: "myMarkets",
                            className: starClass,
                            onClick: this._changeTab.bind(this, "my-market"),
                            "data-intro": translator.translate("walkthrough.my_markets_tab")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.market_name" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: allClass,
                            onClick: this._changeTab.bind(this, "find-market"),
                            "data-intro": translator.translate("walkthrough.find_markets_tab")
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.more" })
                    )
                ) : null,
                this.props.noHeader || this.props.tabHeader ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { style: this.props.headerStyle },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "exchange-content-header" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.market_name" })
                        )
                    )
                ),
                this.props.controls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "small-12 medium-6",
                        style: { padding: "1rem 0" }
                    },
                    this.props.controls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { style: { paddingBottom: "0.5rem" } },
                        this.props.controls
                    ) : null
                ) : null,
                myMarketTab ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "grid-block vertical shrink",
                        style: {
                            width: "100%",
                            textAlign: "left",
                            padding: "0 0.5rem 0.75rem 0.5rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { margin: "3px 0 0" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                style: { position: "relative", top: 3 },
                                className: "no-margin",
                                type: "checkbox",
                                checked: this.props.onlyLiquid,
                                onChange: function onChange() {
                                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].changeViewSetting({
                                        onlyLiquid: !_this6.props.onlyLiquid
                                    });
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { paddingLeft: "0.4rem" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.show_only_liquid" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { margin: "3px 0 0" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                style: { position: "relative", top: 3 },
                                className: "no-margin",
                                type: "checkbox",
                                checked: this.props.onlyStars,
                                onChange: function onChange() {
                                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_15__["default"].toggleStars();
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { style: { paddingLeft: "0.4rem" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    string: "exchange.show_only_star_formatter",
                                    keys: [{
                                        type: "icon",
                                        value: "fi-star",
                                        className: "gold-star",
                                        arg: "star_icon"
                                    }]
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "search-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "form",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "filter inline-block" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_25__["Input"], {
                                    autoComplete: "off",
                                    style: {
                                        fontSize: "0.9rem",
                                        height: "inherit",
                                        position: "relative"
                                    },
                                    type: "text",
                                    className: "no-margin market-filter-input",
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("exchange.filter"),
                                    maxLength: "16",
                                    name: "focus",
                                    required: "required",
                                    value: this.state.myMarketFilter,
                                    onChange: this.handleSearchUpdate,
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_25__["Icon"], { type: "search" })
                                })
                            )
                        )
                    )
                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: {
                            width: "100%",
                            textAlign: "left",
                            padding: "0.75rem 0.5rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "table",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "tbody",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "tr",
                                { style: { width: "100%" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                        onAssetSelect: this._onFoundBaseAsset.bind(this),
                                        assets: defaultBases,
                                        onChange: this._onInputBaseAsset.bind(this),
                                        asset: this.state.findBaseInput,
                                        assetInput: this.state.findBaseInput,
                                        tabIndex: 1,
                                        style: {
                                            width: "100%",
                                            paddingBottom: "1.5rem"
                                        },
                                        onFound: this._onFoundBaseAsset.bind(this),
                                        label: "exchange.quote",
                                        noLabel: true,
                                        inputStyle: { fontSize: "0.9rem" }
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "tr",
                                { style: { width: "100%" } },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "td",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "label",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.user_issued_assets.name" }),
                                        ":"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                        style: {
                                            fontSize: "0.9rem",
                                            position: "relative",
                                            top: 1
                                        },
                                        type: "text",
                                        value: this.state.inputValue,
                                        onChange: this._onInputName.bind(this, true),
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_18___default.a.translate("exchange.search"),
                                        maxLength: "16",
                                        tabIndex: 2,
                                        ref: "findSearchInput"
                                    }),
                                    this.state.assetNameError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        {
                                            className: "error-area",
                                            style: { paddingTop: 10 }
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "span",
                                            {
                                                style: {
                                                    wordBreak: "break-all"
                                                }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                                content: "explorer.asset.invalid",
                                                name: this.state.inputValue
                                            })
                                        )
                                    ) : null
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "ul",
                    { className: "mymarkets-tabs", style: { marginBottom: 0 } },
                    myMarketTab && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "li",
                        {
                            key: "quote_edit",
                            style: { textTransform: "uppercase" },
                            onClick: this.showQuoteModal,
                            className: "mymarkets-tab"
                        },
                        "\xA0+\xA0"
                    ),
                    !myMarketTab && !this.state.inputValue ? null : preferredBases.map(function (base, index) {
                        if (!base) return null;
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "li",
                            {
                                key: base,
                                onClick: _this6.toggleActiveMarketTab.bind(_this6, index),
                                className: classnames__WEBPACK_IMPORTED_MODULE_16___default()("mymarkets-tab", {
                                    active: activeMarketTab === index
                                })
                            },
                            base
                        );
                    }),
                    myMarketTab && hasOthers ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "li",
                        {
                            key: "others",
                            style: { textTransform: "uppercase" },
                            onClick: this.toggleActiveMarketTab.bind(this, preferredBases.size + 1),
                            className: classnames__WEBPACK_IMPORTED_MODULE_16___default()("mymarkets-tab", {
                                active: activeMarketTab === preferredBases.size + 1
                            })
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.others" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: listStyle,
                        className: "table-container grid-block vertical mymarkets-list",
                        ref: "favorites"
                    },
                    assetsLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            style: {
                                position: "absolute",
                                paddingTop: "3rem",
                                textAlign: "center",
                                width: "100%"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__["default"], { type: "three-bounce" })
                    ) : null,
                    preferredBases.filter(function (a) {
                        return a === preferredBases.get(activeMarketTab);
                    }).map(function (base, index) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketGroup, {
                            userMarkets: _this6.props.userMarkets,
                            defaultMarkets: _this6.props.defaultMarkets,
                            index: index,
                            allowChange: false,
                            key: base,
                            current: current,
                            starredMarkets: starredMarkets,
                            marketStats: marketStats,
                            viewSettings: viewSettings,
                            columns: myMarketTab ? columns : _this6.props.findColumns || columns,
                            markets: baseGroups[base],
                            base: base,
                            maxRows: myMarketTab ? 20 : 10,
                            findMarketTab: !myMarketTab,
                            location: _this6.props.location,
                            history: _this6.props.history,
                            onlyLiquid: _this6.props.onlyLiquid && myMarketTab
                        });
                    }),
                    activeMarketTab === preferredBases.size + 1 && myMarketTab && hasOthers ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketGroup, {
                        userMarkets: this.props.userMarkets,
                        index: preferredBases.size,
                        current: current,
                        starredMarkets: starredMarkets,
                        marketStats: marketStats,
                        viewSettings: viewSettings,
                        columns: columns,
                        markets: otherMarkets,
                        base: "others",
                        maxRows: myMarketTab ? 20 : 10,
                        findMarketTab: !myMarketTab,
                        location: this.props.location,
                        history: this.props.history
                    }) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    visible: this.state.isQuoteModalVisible,
                    hideModal: this.hideQuoteModal,
                    showModal: this.showQuoteModal,
                    quotes: this.props.preferredBases
                })
            );
        }
    }]);

    return MyMarkets;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MyMarkets.defaultProps = {
    activeTab: "my-market",
    setMinWidth: false
};


MyMarkets = react_debounce_render__WEBPACK_IMPORTED_MODULE_21___default()(MyMarkets, 50, { leading: false });

var MyMarketsWrapper = function (_React$Component3) {
    _inherits(MyMarketsWrapper, _React$Component3);

    function MyMarketsWrapper() {
        _classCallCheck(this, MyMarketsWrapper);

        return _possibleConstructorReturn(this, (MyMarketsWrapper.__proto__ || Object.getPrototypeOf(MyMarketsWrapper)).apply(this, arguments));
    }

    _createClass(MyMarketsWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyMarkets, this.props);
        }
    }]);

    return MyMarketsWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_7__["connect"])(MyMarketsWrapper, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"], stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
    },
    getProps: function getProps() {
        return {
            starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().starredMarkets,
            onlyLiquid: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("onlyLiquid", true),
            defaultMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().defaultMarkets,
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings,
            preferredBases: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().preferredBases,
            marketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().allMarketStats,
            userMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().userMarkets,
            searchAssets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().assets,
            onlyStars: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().onlyStars,
            assetsLoading: stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().assetsLoading
        };
    }
}));

/***/ }),

/***/ 2729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2080);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2299);
/* harmony import */ var _Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2730);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2697);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(570);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1855);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2349);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(713);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1807);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var MarketRow = function (_React$Component) {
    _inherits(MarketRow, _React$Component);

    function MarketRow() {
        _classCallCheck(this, MarketRow);

        var _this = _possibleConstructorReturn(this, (MarketRow.__proto__ || Object.getPrototypeOf(MarketRow)).call(this));

        _this.statsInterval = null;
        return _this;
    }

    _createClass(MarketRow, [{
        key: "_onClick",
        value: function _onClick(marketID) {
            var newPath = "/market/" + marketID;
            if (newPath !== this.props.location.pathname) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].switchMarket();
                this.props.history.push("/market/" + marketID);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.statsChecked = new Date();
            this.statsInterval = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].getMarketStatsInterval(35 * 1000, this.props.base, this.props.quote);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.statsInterval) this.statsInterval();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(nextProps, this.props);
        }
    }, {
        key: "_onStar",
        value: function _onStar(quote, base, e) {
            e.preventDefault();
            if (!this.props.starred) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].addStarMarket(quote, base);
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].removeStarMarket(quote, base);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                quote = _props.quote,
                base = _props.base,
                noSymbols = _props.noSymbols,
                stats = _props.stats,
                starred = _props.starred;

            if (!quote || !base) {
                return null;
            }

            var marketID = quote.get("symbol") + "_" + base.get("symbol");
            var marketName = quote.get("symbol") + ":" + base.get("symbol");
            var dynamic_data = this.props.getDynamicObject(quote.get("dynamic_asset_data_id"));
            var base_dynamic_data = this.props.getDynamicObject(base.get("dynamic_asset_data_id"));

            var price = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].convertPrice(quote, base);

            var rowStyles = {};
            if (this.props.leftAlign) {
                rowStyles.textAlign = "left";
            }

            var buttonClass = "button outline";
            var buttonStyle = null;
            if (this.props.compact) {
                buttonClass += " no-margin";
                buttonStyle = {
                    marginBottom: 0,
                    fontSize: "0.75rem",
                    padding: "4px 10px",
                    borderRadius: "0px",
                    letterSpacing: "0.05rem"
                };
            }

            var columns = this.props.columns.map(function (column) {
                switch (column.name) {
                    case "star":
                        var starClass = starred ? "gold-star" : "grey-star";
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onStar.bind(_this2, quote.get("symbol"), base.get("symbol")),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                className: starClass,
                                name: "fi-star",
                                title: "icons.fi_star.symbol"
                            })
                        );

                    case "vol":
                        var amount = stats ? stats.volumeBase : 0;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                className: "text-right",
                                key: column.index
                            },
                            common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_volume(amount)
                        );

                    case "change":
                        var change = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(stats && stats.change ? stats.change : 0, 2);
                        var changeClass = change === "0.00" ? "" : change > 0 ? "change-up" : "change-down";

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                className: "text-right " + changeClass,
                                key: column.index
                            },
                            change + "%"
                        );

                    case "marketName":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: buttonClass,
                                    style: buttonStyle
                                },
                                marketName
                            )
                        );

                    case "market":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                replaceNoneToBts: false,
                                maxWidth: 20,
                                name: quote.get("symbol")
                            }),
                            _this2.props.name
                        );

                    case "price":
                        var finalPrice = stats && stats.price ? stats.price.toReal() : stats && stats.close && stats.close.quote.amount && stats.close.base.amount ? common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(stats.close.quote.amount, quote, stats.close.base.amount, base, true) : common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(price.quote.amount, quote, price.base.amount, base, true);

                        var highPrecisionAssets = ["BTC", "OPEN.BTC", "TRADE.BTC", "GOLD", "SILVER"];
                        var precision = 6;
                        if (highPrecisionAssets.indexOf(base.get("symbol")) !== -1) {
                            precision = 8;
                        }

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                className: "text-right",
                                key: column.index
                            },
                            common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(finalPrice, finalPrice > 1000 ? 0 : finalPrice > 10 ? 2 : precision)
                        );

                    case "quoteSupply":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            dynamic_data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                style: { fontWeight: "bold" },
                                amount: parseInt(dynamic_data.get("current_supply"), 10),
                                asset: quote.get("id")
                            }) : null
                        );

                    case "baseSupply":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            base_dynamic_data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                style: { fontWeight: "bold" },
                                amount: parseInt(base_dynamic_data.get("current_supply"), 10),
                                asset: base.get("id")
                            }) : null
                        );

                    case "issuer":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                onClick: _this2._onClick.bind(_this2, marketID),
                                key: column.index
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__["default"], { account: quote.get("issuer") })
                        );

                    case "add":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "right" },
                                key: column.index,
                                onClick: _this2.props.onCheckMarket.bind(_this2, marketID)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__["Tooltip"],
                                {
                                    title: _this2.props.isDefault ? "This market is a default market and cannot be removed" : null
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    type: "checkbox",
                                    checked: !!_this2.props.isChecked || _this2.props.isDefault,
                                    disabled: _this2.props.isDefault
                                })
                            )
                        );

                    case "remove":
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                key: column.index,
                                className: "clickable",
                                onClick: _this2.props.removeMarket
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    style: {
                                        marginBottom: "6px",
                                        marginRight: "6px",
                                        zIndex: 999
                                    },
                                    className: "text float-right remove"
                                },
                                "\u2013"
                            )
                        );

                    default:
                        break;
                }
            }).sort(function (a, b) {
                return a.key > b.key;
            });

            var className = "clickable";
            if (this.props.current) {
                className += " activeMarket";
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: className, style: rowStyles },
                columns
            );
        }
    }]);

    return MarketRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketRow.defaultProps = {
    noSymbols: false
};

MarketRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(MarketRow);

/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketRow, {
    propNames: ["quote", "base"],
    defaultProps: {
        tempComponent: "tr"
    },
    withDynamic: true
}));

/***/ }),

/***/ 2730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1954);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1955);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 *  Given an account id, displays the name of that account
 *
 *  Expects one property, 'account' which should be a account id
 */

var AccountName = function (_React$Component) {
    _inherits(AccountName, _React$Component);

    function AccountName() {
        _classCallCheck(this, AccountName);

        return _possibleConstructorReturn(this, (AccountName.__proto__ || Object.getPrototypeOf(AccountName)).apply(this, arguments));
    }

    _createClass(AccountName, [{
        key: "render",
        value: function render() {
            if (!this.props.account) return null;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                this.props.account.get("name")
            );
        }
    }]);

    return AccountName;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountName.propTypes = {
    account: _ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
};
AccountName.defaultProps = {
    autosubscribe: false
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(AccountName));

/***/ }),

/***/ 2732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1855);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2731);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(713);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var QuoteSelectionModal = function (_React$Component) {
    _inherits(QuoteSelectionModal, _React$Component);

    function QuoteSelectionModal() {
        _classCallCheck(this, QuoteSelectionModal);

        var _this = _possibleConstructorReturn(this, (QuoteSelectionModal.__proto__ || Object.getPrototypeOf(QuoteSelectionModal)).call(this));

        _this.state = {
            backingAsset: "",
            error: false,
            valid: false
        };
        return _this;
    }

    _createClass(QuoteSelectionModal, [{
        key: "_onMoveUp",
        value: function _onMoveUp(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote;
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
                oldIndex: idx,
                newIndex: idx - 1
            });
        }
    }, {
        key: "_onMoveDown",
        value: function _onMoveDown(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote;
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
                oldIndex: idx,
                newIndex: idx + 1
            });
        }
    }, {
        key: "_onRemove",
        value: function _onRemove(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote;
            });
            if (idx >= 0) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
                    remove: idx
                });
            }
        }
    }, {
        key: "_onAdd",
        value: function _onAdd(quote) {
            var idx = this.props.quotes.findIndex(function (q) {
                return q === quote.get("symbol");
            });
            if (idx === -1) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
                    add: quote.get("symbol")
                });
            }
        }
    }, {
        key: "_onInputBackingAsset",
        value: function _onInputBackingAsset(asset) {
            this.setState({
                backingAsset: asset.toUpperCase(),
                error: null
            });
        }
    }, {
        key: "_onFoundBackingAsset",
        value: function _onFoundBackingAsset(asset) {
            if (asset) {
                if (!this.props.quotes.includes(asset.get("symbol"))) {
                    this.setState({ isValid: true });
                } else {
                    this.setState({
                        error: "Asset already being used",
                        isValid: false
                    });
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var error = this.state.error;

            var quoteCount = this.props.quotes.size;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.quote_selection"),
                    closable: false,
                    visible: this.props.visible,
                    id: "quote_selection",
                    overlay: true,
                    onCancel: this.props.hideModal,
                    footer: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                        { onClick: this.props.hideModal },
                        counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("modal.close")
                    )]
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "section",
                    { className: "no-border-bottom" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "table",
                        { className: "table" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "thead",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "account.quote" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { textAlign: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.move_down" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { textAlign: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.move_up" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: { textAlign: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.remove" })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            this.props.quotes.map(function (q, idx) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    { key: q },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        idx + 1
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        null,
                                        q
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        { className: "text-center" },
                                        idx !== quoteCount - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            onClick: _this2._onMoveDown.bind(_this2, q),
                                            name: "chevron-down",
                                            className: "clickable"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        { className: "text-center" },
                                        idx !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            onClick: _this2._onMoveUp.bind(_this2, q),
                                            name: "chevron-down",
                                            className: "clickable rotate180"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "td",
                                        { className: "text-center" },
                                        quoteCount > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            onClick: _this2._onRemove.bind(_this2, q),
                                            name: "cross-circle",
                                            className: "clickable"
                                        })
                                    )
                                );
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            label: "exchange.custom_quote",
                            onChange: this._onInputBackingAsset.bind(this),
                            asset: this.state.backingAsset,
                            assetInput: this.state.backingAsset,
                            tabIndex: 1,
                            style: { width: "100%", paddingRight: "10px" },
                            onFound: this._onFoundBackingAsset.bind(this),
                            onAction: this._onAdd.bind(this),
                            action_label: "exchange.add_quote",
                            disableActionButton: !!error,
                            noLabel: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "error-area" },
                            error
                        )
                    )
                )
            );
        }
    }]);

    return QuoteSelectionModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (QuoteSelectionModal);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2V+ZXhwbG9yZXIuNTJhZTE5OGQ1ZTVhY2FjMzQ5MjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL015TWFya2V0cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldFJvdy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQWNjb3VudE5hbWUuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9RdW90ZVNlbGVjdGlvbk1vZGFsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb25Hcm91cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29tcG9uZW50OiBcInNwYW5cIixcbiAgICAgICAgZW50ZXJUaW1lb3V0OiAyMDAwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgcmVzZXRBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIGVuYWJsZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5wcm9wcy5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXt0aGlzLnByb3BzLnRyYW5zaXRpb25OYW1lfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXt0aGlzLnByb3BzLmVudGVyVGltZW91dH1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyPXt0aGlzLnN0YXRlLmFuaW1hdGVFbnRlcn1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBNYXJrZXRSb3cgZnJvbSBcIi4vTWFya2V0Um93XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHtDaGFpblZhbGlkYXRpb24sIENoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcywgZ2F0ZXdheVByZWZpeGVzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlzXCI7XG5pbXBvcnQgUXVvdGVTZWxlY3Rpb25Nb2RhbCBmcm9tIFwiLi9RdW90ZVNlbGVjdGlvbk1vZGFsXCI7XG5pbXBvcnQge0lucHV0LCBJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIE1hcmtldEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBtYXhSb3dzOiAyMCxcbiAgICAgICAgb25seUxpcXVpZDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZShwcm9wcyk7XG4gICAgfVxuXG4gICAgX2dldEluaXRpYWxTdGF0ZShwcm9wcykge1xuICAgICAgICBsZXQgb3BlbiA9IHByb3BzLmZpbmRNYXJrZXRUYWJcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KGBteU1hcmtldHNCYXNlXyR7cHJvcHMuaW5kZXh9YCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcGVuOiBvcGVuICE9PSB1bmRlZmluZWQgPyBvcGVuIDogdHJ1ZSxcbiAgICAgICAgICAgIGludmVyc2VTb3J0OiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwibXlNYXJrZXRzSW52ZXJ0XCIsIHRydWUpLFxuICAgICAgICAgICAgc29ydEJ5OiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwibXlNYXJrZXRzU29ydFwiLCBcInZvbHVtZVwiKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuZmluZE1hcmtldFRhYiAhPT0gdGhpcy5wcm9wcy5maW5kTWFya2V0VGFiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldEluaXRpYWxTdGF0ZShuZXh0UHJvcHMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAoIW5leHRQcm9wcy5tYXJrZXRzIHx8ICF0aGlzLnByb3BzLm1hcmtldHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcy5tYXJrZXRzLCB0aGlzLnByb3BzLm1hcmtldHMpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuc3RhcnJlZE1hcmtldHMgIT09IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5tYXJrZXRTdGF0cyAhPT0gdGhpcy5wcm9wcy5tYXJrZXRTdGF0cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnVzZXJNYXJrZXRzICE9PSB0aGlzLnByb3BzLnVzZXJNYXJrZXRzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2ludmVyc2VTb3J0KCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgbXlNYXJrZXRzSW52ZXJ0OiAhdGhpcy5zdGF0ZS5teU1hcmtldHNJbnZlcnRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGFuZ2VTb3J0KHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09IHRoaXMuc3RhdGUuc29ydEJ5KSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIG15TWFya2V0c1NvcnQ6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc29ydEJ5OiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ludmVyc2VTb3J0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBfb25TZWxlY3RCYXNlKGUpIHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgLy8gICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VCYXNlKHRoaXMucHJvcHMuaW5kZXgsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyB9XG5cbiAgICBfb25Ub2dnbGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5maW5kTWFya2V0VGFiKSB7XG4gICAgICAgICAgICBsZXQgb3BlbiA9ICF0aGlzLnN0YXRlLm9wZW47XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcGVuOiBvcGVuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHNldHRpbmcgPSB7fTtcbiAgICAgICAgICAgIHNldHRpbmdbYG15TWFya2V0c0Jhc2VfJHt0aGlzLnByb3BzLmluZGV4fWBdID0gb3BlbjtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblRvZ2dsZVVzZXJNYXJrZXQobWFya2V0KSB7XG4gICAgICAgIGxldCBbYmFzZSwgcXVvdGVdID0gbWFya2V0LnNwbGl0KFwiX1wiKTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gIXRoaXMucHJvcHMudXNlck1hcmtldHMuZ2V0KG1hcmtldCk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5zZXRVc2VyTWFya2V0KGJhc2UsIHF1b3RlLCBuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgIG1hcmtldHMsXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgbWFya2V0U3RhdHMsXG4gICAgICAgICAgICBzdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgIGN1cnJlbnRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7c29ydEJ5LCBpbnZlcnNlU29ydCwgb3Blbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghbWFya2V0cyB8fCAhbWFya2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBjb2x1bW5zLm1hcChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChoZWFkZXIubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJrZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VTb3J0LmJpbmQodGhpcywgXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInZvbFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVNvcnQuYmluZCh0aGlzLCBcInZvbHVtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS52b2xfc2hvcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmljZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aGVhZGVyLm5hbWV9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInF1b3RlU3VwcGx5XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuYmFzZV9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJiYXNlU3VwcGx5XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucXVvdGVfc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiY2hhbmdlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlU29ydC5iaW5kKHRoaXMsIFwiY2hhbmdlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNoYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImlzc3VlclwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aGVhZGVyLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5pc3N1ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfSBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLmNvbmZpcm1fYWRkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRoIGtleT17aGVhZGVyLm5hbWV9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWFya2V0Um93cyA9IG1hcmtldHNcbiAgICAgICAgICAgIC5tYXAobWFya2V0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25seUxpcXVpZCAmJlxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cy5nZXQobWFya2V0LmlkKSAmJlxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cy5nZXQobWFya2V0LmlkKS52b2x1bWVCYXNlID09IDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxNYXJrZXRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWFya2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSA9PT0gXCJvdGhlcnNcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldC5xdW90ZX0gLz46XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldC5iYXNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXttYXJrZXQucXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e21hcmtldC5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e21hcmtldC5iYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRBbGlnbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhY3Q9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBub1N5bWJvbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0cz17bWFya2V0U3RhdHMuZ2V0KG1hcmtldC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycmVkPXtzdGFycmVkTWFya2V0cy5oYXMobWFya2V0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnQgPT09IG1hcmtldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17dGhpcy5wcm9wcy51c2VyTWFya2V0cy5oYXMobWFya2V0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVmYXVsdE1hcmtldHMuaGFzKG1hcmtldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tNYXJrZXQ9e3RoaXMuX29uVG9nZ2xlVXNlck1hcmtldC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFfc3ltYm9scyA9IGEua2V5LnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgYl9zeW1ib2xzID0gYi5rZXkuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhU3RhdHMgPSBtYXJrZXRTdGF0cy5nZXQoYV9zeW1ib2xzWzBdICsgXCJfXCIgKyBhX3N5bWJvbHNbMV0pO1xuICAgICAgICAgICAgICAgIGxldCBiU3RhdHMgPSBtYXJrZXRTdGF0cy5nZXQoYl9zeW1ib2xzWzBdICsgXCJfXCIgKyBiX3N5bWJvbHNbMV0pO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzb3J0QnkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhX3N5bWJvbHNbMF0gPiBiX3N5bWJvbHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFfc3ltYm9sc1swXSA8IGJfc3ltYm9sc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFfc3ltYm9sc1sxXSA+IGJfc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhX3N5bWJvbHNbMV0gPCBiX3N5bWJvbHNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludmVyc2VTb3J0ID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9sdW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYVN0YXRzICYmIGJTdGF0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnZlcnNlU29ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYlN0YXRzLnZvbHVtZUJhc2UgLSBhU3RhdHMudm9sdW1lQmFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYVN0YXRzLnZvbHVtZUJhc2UgLSBiU3RhdHMudm9sdW1lQmFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhU3RhdHMgJiYgYlN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludmVyc2VTb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiU3RhdHMuY2hhbmdlIC0gYVN0YXRzLmNoYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYVN0YXRzLmNoYW5nZSAtIGJTdGF0cy5jaGFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDogMTB9fT5cbiAgICAgICAgICAgICAgICB7b3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+e2hlYWRlcnN9PC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0Um93cyAmJiBtYXJrZXRSb3dzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e21hcmtldFJvd3N9PC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBNeU1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFjdGl2ZVRhYjogXCJteS1tYXJrZXRcIixcbiAgICAgICAgc2V0TWluV2lkdGg6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUXVvdGVNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNJbnZlcnRcIiwgdHJ1ZSksXG4gICAgICAgICAgICBzb3J0Qnk6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNTb3J0XCIsIFwidm9sdW1lXCIpLFxuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiZmF2TWFya2V0VGFiXCIsIFwibXktbWFya2V0XCIpLFxuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlTWFya2V0VGFiXCIsIDApLFxuICAgICAgICAgICAgbG9va3VwUXVvdGU6IG51bGwsXG4gICAgICAgICAgICBsb29rdXBCYXNlOiBudWxsLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICAgIG1pbldpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGZpbmRCYXNlSW5wdXQ6IFwiVVNEXCIsXG4gICAgICAgICAgICBhY3RpdmVGaW5kQmFzZTogXCJVU0RcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldE1pbldpZHRoID0gdGhpcy5fc2V0TWluV2lkdGguYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRBc3NldExpc3QgPSBkZWJvdW5jZShBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyLCAxNTApO1xuXG4gICAgICAgIHRoaXMuc2hvd1F1b3RlTW9kYWwgPSB0aGlzLnNob3dRdW90ZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZVF1b3RlTW9kYWwgPSB0aGlzLmhpZGVRdW90ZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIC8qIFRyaWdnZXIgYSBsb29rdXAgd2hlbiBzd2l0Y2hpbmcgdGFicyB0byBmaW5kLW1hcmtldCAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVRhYiAhPT0gXCJmaW5kLW1hcmtldFwiICYmXG4gICAgICAgICAgICBuZXh0U3RhdGUuYWN0aXZlVGFiID09PSBcImZpbmQtbWFya2V0XCIgJiZcbiAgICAgICAgICAgICFuZXh0UHJvcHMuc2VhcmNoQXNzZXRzLnNpemVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9sb29rdXBBc3NldHMoXCJPUEVOLlwiLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVRhYiAhPT0gbmV4dFN0YXRlLmFjdGl2ZVRhYikge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKG5leHRTdGF0ZS5hY3RpdmVUYWIpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgIW5leHRQcm9wcy50YWJIZWFkZXIgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSBuZXh0UHJvcHMuYWN0aXZlVGFiXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKG5leHRQcm9wcy5hY3RpdmVUYWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLnNlYXJjaEFzc2V0cywgdGhpcy5wcm9wcy5zZWFyY2hBc3NldHMpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5tYXJrZXRzLCB0aGlzLnByb3BzLm1hcmtldHMpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5kZWZhdWx0TWFya2V0cyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5tYXJrZXRTdGF0cywgdGhpcy5wcm9wcy5tYXJrZXRTdGF0cykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMubWluV2lkdGggIT09IHRoaXMucHJvcHMubWluV2lkdGggfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5saXN0SGVpZ2h0ICE9PSB0aGlzLnByb3BzLmxpc3RIZWlnaHQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5wcmVmZXJyZWRCYXNlcyAhPT0gdGhpcy5wcm9wcy5wcmVmZXJyZWRCYXNlcyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm9ubHlTdGFycyAhPT0gdGhpcy5wcm9wcy5vbmx5U3RhcnMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vbmx5TGlxdWlkICE9PSB0aGlzLnByb3BzLm9ubHlMaXF1aWQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hc3NldHNMb2FkaW5nICE9PSB0aGlzLnByb3BzLmFzc2V0c0xvYWRpbmcgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy51c2VyTWFya2V0cyAhPT0gdGhpcy5wcm9wcy51c2VyTWFya2V0c1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0TWluV2lkdGgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldE1pbldpZHRoLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJycmVudCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJhc2UgPSB0aGlzLnByb3BzLmN1cnJlbnQuc3BsaXQoXCJfXCIpWzFdO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5wcm9wcy5wcmVmZXJyZWRCYXNlcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgYSA9PiBhID09PSBjdXJyZW50QmFzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggIT09IC0xICYmXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICE9PSB0aGlzLnN0YXRlLmFjdGl2ZU1hcmtldFRhYlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlTWFya2V0VGFiOiBjdXJyZW50SW5kZXh9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgaGlzdG9yeUNvbnRhaW5lciA9IHRoaXMucmVmcy5mYXZvcml0ZXM7XG4gICAgICAgIFBzLmluaXRpYWxpemUoaGlzdG9yeUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5fc2V0TWluV2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUYWIgPT09IFwiZmluZC1tYXJrZXRcIikge1xuICAgICAgICAgICAgdGhpcy5fbG9va3VwQXNzZXRzKFwiT1BFTi5cIiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUYWIgIT09IHRoaXMucHJvcHMuYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VUYWIodGhpcy5wcm9wcy5hY3RpdmVUYWIpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXRNaW5XaWR0aCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0TWluV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm15TWFya2V0VGFiICYmICFucC5teU1hcmtldFRhYikge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5maW5kU2VhcmNoSW5wdXQpIHRoaXMucmVmcy5maW5kU2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVRdW90ZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUXVvdGVNb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dRdW90ZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUXVvdGVNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldE1pbldpZHRoKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldE1pbldpZHRoICYmXG4gICAgICAgICAgICB0aGlzLnJlZnMuZmF2b3JpdGVzICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZVRhYiA9PT0gXCJteS1tYXJrZXRcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1pbldpZHRoICE9PSB0aGlzLnJlZnMuZmF2b3JpdGVzLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnJlZnMuZmF2b3JpdGVzLm9mZnNldFdpZHRoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZnMuZmF2b3JpdGVzKSB7XG4gICAgICAgICAgICBsZXQgaGlzdG9yeUNvbnRhaW5lciA9IHRoaXMucmVmcy5mYXZvcml0ZXM7XG4gICAgICAgICAgICBQcy51cGRhdGUoaGlzdG9yeUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW52ZXJzZVNvcnQoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBteU1hcmtldHNJbnZlcnQ6ICF0aGlzLnN0YXRlLm15TWFya2V0c0ludmVydFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnZlcnNlU29ydDogIXRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoYW5nZVNvcnQodHlwZSkge1xuICAgICAgICBpZiAodHlwZSAhPT0gdGhpcy5zdGF0ZS5zb3J0QnkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgbXlNYXJrZXRzU29ydDogdHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW52ZXJzZVNvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nb01hcmtldHMoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL21hcmtldHNcIik7XG4gICAgfVxuXG4gICAgX2NoYW5nZVRhYih0YWIpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGZhdk1hcmtldFRhYjogdGFiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogdGFiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3NldE1pbldpZHRoKCk7XG4gICAgfVxuXG4gICAgX29uSW5wdXROYW1lKGdldEJhY2tlZEFzc2V0cywgZSkge1xuICAgICAgICBsZXQgdG9GaW5kID0gZS50YXJnZXQudmFsdWUudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxldCBpc1ZhbGlkTmFtZSA9ICFDaGFpblZhbGlkYXRpb24uaXNfdmFsaWRfc3ltYm9sX2Vycm9yKHRvRmluZCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiB0b0ZpbmRcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIERvbid0IGxvb2t1cCBpbnZhbGlkIGFzc2V0IG5hbWVzICovXG4gICAgICAgIGlmICh0b0ZpbmQgJiYgdG9GaW5kLmxlbmd0aCA+PSAyICYmICFpc1ZhbGlkTmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09IHRvRmluZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb29rdXBBc3NldHModG9GaW5kLCBnZXRCYWNrZWRBc3NldHMpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICB9XG5cbiAgICBfbG9va3VwQXNzZXRzKHZhbHVlLCBnYXRld2F5QXNzZXRzID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gXCJcIikgcmV0dXJuO1xuXG4gICAgICAgIGxldCBzeW1ib2xzID0gdmFsdWUudG9VcHBlckNhc2UoKS5zcGxpdChcIjpcIik7XG4gICAgICAgIGxldCBxdW90ZSA9IHN5bWJvbHNbMF07XG4gICAgICAgIGxldCBiYXNlID0gc3ltYm9scy5sZW5ndGggPT09IDIgPyBzeW1ib2xzWzFdIDogbnVsbDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvb2t1cFF1b3RlOiBxdW90ZSxcbiAgICAgICAgICAgIGxvb2t1cEJhc2U6IGJhc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nLmRlZmVyKHtcbiAgICAgICAgICAgIG1hcmtldExvb2t1cElucHV0OiB2YWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0QXNzZXRMaXN0KHF1b3RlLCA1MCwgZ2F0ZXdheUFzc2V0cyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQWN0aXZlTWFya2V0VGFiKGluZGV4KSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWI6IGluZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiOiBpbmRleFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25JbnB1dEJhc2VBc3NldChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbmRCYXNlSW5wdXQ6IGFzc2V0LnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25Gb3VuZEJhc2VBc3NldChhc3NldCkge1xuICAgICAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUZpbmRCYXNlOiBhc3NldC5nZXQoXCJzeW1ib2xcIil9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFySW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe215TWFya2V0RmlsdGVyOiBcIlwifSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVNlYXJjaFVwZGF0ZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG15TWFya2V0RmlsdGVyOiBlLnRhcmdldC52YWx1ZSAmJiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfZ2V0TWFya2V0cygpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc2VhcmNoQXNzZXRzLFxuICAgICAgICAgICAgZGVmYXVsdE1hcmtldHMsXG4gICAgICAgICAgICBvbmx5U3RhcnMsXG4gICAgICAgICAgICB1c2VyTWFya2V0cyxcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzLFxuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHNcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYixcbiAgICAgICAgICAgIGxvb2t1cFF1b3RlLFxuICAgICAgICAgICAgbG9va3VwQmFzZSxcbiAgICAgICAgICAgIG15TWFya2V0RmlsdGVyLFxuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBwb3NzaWJsZUdhdGV3YXlBc3NldHMgPSBnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcyhcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGJhc2VzID0gdGhpcy5fZ2V0QmFzZXMoKTtcbiAgICAgICAgbGV0IGFsbE1hcmtldHMgPSBbXSxcbiAgICAgICAgICAgIGJhc2VHcm91cHMgPSB7fTtcbiAgICAgICAgbGV0IG90aGVyTWFya2V0cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IG15TWFya2V0VGFiID0gYWN0aXZlVGFiID09PSBcIm15LW1hcmtldFwiO1xuXG4gICAgICAgIGlmIChzZWFyY2hBc3NldHMuc2l6ZSkge1xuICAgICAgICAgICAgc2VhcmNoQXNzZXRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLm9wdGlvbnMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGEub3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwidmlzaWJsZVwiIGluIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVzY3JpcHRpb24udmlzaWJsZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLnN5bWJvbC5sZW5ndGggPj0gbG9va3VwUXVvdGUubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJhc2VzLmZvckVhY2goYmFzZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPSBhc3NldC5zeW1ib2wgKyBcIl9cIiArIGJhc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYXNlICE9PSBhc3NldC5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxNYXJrZXRzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1b3RlOiBhc3NldC5zeW1ib2wsIGJhc2U6IGJhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxsTWFya2V0cyA9IGFsbE1hcmtldHMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgLy8gSWYgYSBiYXNlIGFzc2V0IGlzIHNwZWNpZmllZCwgbGltaXQgdGhlIHF1b3RlIGFzc2V0IHRvIHRoZSBleGFjdCBzZWFyY2ggdGVybVxuICAgICAgICAgICAgaWYgKGxvb2t1cEJhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYVsxXS5xdW90ZSA9PT0gbG9va3VwUXVvdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFjdGl2ZU1hcmtldHMgPSBteU1hcmtldFRhYlxuICAgICAgICAgICAgPyBkZWZhdWx0TWFya2V0c1xuICAgICAgICAgICAgOiBJbW11dGFibGUuTWFwKGFsbE1hcmtldHMpO1xuICAgICAgICBpZiAobXlNYXJrZXRUYWIgJiYgdXNlck1hcmtldHMuc2l6ZSkge1xuICAgICAgICAgICAgdXNlck1hcmtldHMuZm9yRWFjaCgobWFya2V0LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZU1hcmtldHMuaGFzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1hcmtldHMgPSBhY3RpdmVNYXJrZXRzLnNldChrZXksIG1hcmtldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZpbHRlckFuZFNlcGFyYXRlTWFya2V0cyhcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBtYXRjaEJhc2VzLFxuICAgICAgICAgICAgbWFya2V0cyxcbiAgICAgICAgICAgIGJhc2VHcm91cHMsXG4gICAgICAgICAgICBvdGhlck1hcmtldHNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgb3RoZXJzID0gbWFya2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmJhc2UgPT09IGEucXVvdGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIHNlYXJjaCByZXN1bHRzIGluIHRoZSBGaW5kIE1hcmtldHMgVGFiICovXG4gICAgICAgICAgICAgICAgICAgIGlmICghbXlNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb29rdXBRdW90ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5xdW90ZS5pbmRleE9mKGxvb2t1cFF1b3RlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBSZXR1cm4gZmlsdGVyZWQgbWFya2V0cyBpZiBhIGZpbHRlciBpcyBpbnB1dCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgSUQgPSBhLnF1b3RlICsgXCJfXCIgKyBhLmJhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFteU1hcmtldEZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJRC5pbmRleE9mKG15TWFya2V0RmlsdGVyKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBSZXR1cm4gb25seSBzdGFycmVkIG1hcmtldHMgaWYgdGhhdCBvcHRpb24gaXMgY2hlY2tlZCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ubHlTdGFycyAmJiAhc3RhcnJlZE1hcmtldHMuaGFzKElEKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEVsc2UgcmV0dXJuIGFsbCBtYXJrZXRzICovXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPSBtYXJrZXQucXVvdGUgKyBcIl9cIiArIG1hcmtldC5iYXNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hCYXNlcy5pbmRleE9mKG1hcmtldC5iYXNlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFzZUdyb3Vwc1tiYXNlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VHcm91cHNbYmFzZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1hcmtldElELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBtYXJrZXQucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogbWFya2V0LmJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2VHcm91cHNbYmFzZV0uZmluZChtID0+IG0uaWQgPT09IG1hcmtldElEKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlR3JvdXBzW2Jhc2VdLnB1c2gobWFya2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgIXByZWZlcnJlZEJhc2VzLmluY2x1ZGVzKG1hcmtldC5iYXNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVHYXRld2F5QXNzZXRzLmluZGV4T2YobWFya2V0LmJhc2UpID09PSAtMVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQWRkaW5nIHRvIG90aGVyIG1hcmtldHM6XCIsIGJhc2UsIG1hcmtldC5iYXNlLCBwcmVmZXJyZWRCYXNlcy50b0pTKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbWFya2V0LnF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG1hcmtldC5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgIC50YWtlKG15TWFya2V0VGFiID8gMTAwIDogMjApXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcbiAgICAgICAgICAgIHJldHVybiB7b3RoZXJNYXJrZXRzOiBvdGhlcnMuY29uY2F0KG90aGVyTWFya2V0cyksIGJhc2VHcm91cHN9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZU1hcmtldHMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCYXNlID0gbXlNYXJrZXRUYWJcbiAgICAgICAgICAgICAgICA/IHByZWZlcnJlZEJhc2VzLmdldChhY3RpdmVNYXJrZXRUYWIpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLmFjdGl2ZUZpbmRCYXNlO1xuXG4gICAgICAgICAgICAoe290aGVyTWFya2V0cywgYmFzZUdyb3Vwc30gPSBmaWx0ZXJBbmRTZXBhcmF0ZU1hcmtldHMoXG4gICAgICAgICAgICAgICAgY3VycmVudEJhc2UsXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRCYXNlXSxcbiAgICAgICAgICAgICAgICBhY3RpdmVNYXJrZXRzLFxuICAgICAgICAgICAgICAgIGJhc2VHcm91cHMsXG4gICAgICAgICAgICAgICAgb3RoZXJNYXJrZXRzXG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgLyogQ2hlY2sgZm9yIHBvc3NpYmxlIGdhdGV3YXkgdmVyc2lvbnMgb2YgdGhlIGFzc2V0ICovXG4gICAgICAgICAgICBnYXRld2F5UHJlZml4ZXMuZm9yRWFjaChwcmVmaXggPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWUgPSBgJHtwcmVmaXh9LiR7Y3VycmVudEJhc2V9YDtcbiAgICAgICAgICAgICAgICBsZXQgZ2F0ZXdheUFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVHYXRld2F5QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvKiBJZiB0aGUgZ2F0ZXdheSBvZmZlcnMgYW4gYXNzZXQgZm9yIHRoaXMgYmFzZSwgYWRkIGl0IHRvIHRoZSBsaXN0ICovXG4gICAgICAgICAgICAgICAgaWYgKCEhZ2F0ZXdheUFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBnYXRld2F5TWFya2V0cyA9IGFjdGl2ZU1hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0ucXVvdGUgPT09IG0uYmFzZSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0lEID0gYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0ucXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XyR7cG9zc2libGVHYXRld2F5QXNzZXROYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZU1hcmtldHMuaGFzKG5ld0lEKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcG9zc2libGVHYXRld2F5QXNzZXROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbS5xdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIobSA9PiAhIW0pO1xuICAgICAgICAgICAgICAgICAgICAoe290aGVyTWFya2V0cywgYmFzZUdyb3Vwc30gPSBmaWx0ZXJBbmRTZXBhcmF0ZU1hcmtldHMoXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjdXJyZW50QmFzZSwgcG9zc2libGVHYXRld2F5QXNzZXROYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhdGV3YXlNYXJrZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTWFya2V0c1xuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7YmFzZUdyb3Vwcywgb3RoZXJNYXJrZXRzfTtcbiAgICB9XG5cbiAgICBfZ2V0QmFzZXMoKSB7XG4gICAgICAgIGxldCB7cHJlZmVycmVkQmFzZXMsIHNlYXJjaEFzc2V0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2xvb2t1cFF1b3RlLCBsb29rdXBCYXNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGJhc2VzID0gc2VhcmNoQXNzZXRzXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb29rdXBCYXNlICYmIGxvb2t1cEJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbC5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb29rdXBCYXNlICYmIGxvb2t1cEJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldC5zeW1ib2wuaW5kZXhPZihsb29rdXBCYXNlKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlZmVycmVkQmFzZXMuaW5jbHVkZXMoYXNzZXQuc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wubGVuZ3RoID49IGxvb2t1cFF1b3RlLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sLmxlbmd0aCA8IGxvb2t1cFF1b3RlLmxlbmd0aCArIDNcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXQuc3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgICAgICAudG9BcnJheSgpO1xuXG4gICAgICAgIGJhc2VzID0gYmFzZXMuY29uY2F0KFxuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvb2t1cEJhc2UgfHwgIWxvb2t1cEJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICApO1xuXG4gICAgICAgIGJhc2VzID0gYmFzZXMuZmlsdGVyKGJhc2UgPT4ge1xuICAgICAgICAgICAgaWYgKGxvb2t1cEJhc2UgJiYgbG9va3VwQmFzZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuaW5kZXhPZihsb29rdXBCYXNlKSA9PT0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBiYXNlcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBzdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgIG1hcmtldFN0YXRzLFxuICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgIGFzc2V0c0xvYWRpbmcsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyxcbiAgICAgICAgICAgIGN1cnJlbnQsXG4gICAgICAgICAgICB2aWV3U2V0dGluZ3MsXG4gICAgICAgICAgICBsaXN0SGVpZ2h0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZU1hcmtldFRhYiwgYWN0aXZlVGFifSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgbXlNYXJrZXRUYWIgPSBhY3RpdmVUYWIgPT09IFwibXktbWFya2V0XCI7XG4gICAgICAgIGxldCBkZWZhdWx0QmFzZXMgPSBwcmVmZXJyZWRCYXNlcy5tYXAoYSA9PiBhKTtcblxuICAgICAgICBpZiAoIW15TWFya2V0VGFiKSB7XG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyA9IHByZWZlcnJlZEJhc2VzLmNsZWFyKCk7XG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyA9IHByZWZlcnJlZEJhc2VzLnB1c2godGhpcy5zdGF0ZS5hY3RpdmVGaW5kQmFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgc29tZSBkZWZhdWx0IGJhc2Ugb3B0aW9uc1xuICAgICAgICAvLyBsZXQgcHJlZmVycmVkQmFzZXMgPSBbY29yZVN5bWJvbCwgXCJCVENcIiwgXCJVU0RcIiwgXCJDTllcIl07XG5cbiAgICAgICAgLyogSW4gdGhlIGZpbmQtbWFya2V0IHRhYiwgb25seSB1c2UgbWFya2V0IHRhYiAwICovXG4gICAgICAgIGlmICghbXlNYXJrZXRUYWIpIGFjdGl2ZU1hcmtldFRhYiA9IDA7XG5cbiAgICAgICAgbGV0IHtiYXNlR3JvdXBzLCBvdGhlck1hcmtldHN9ID0gdGhpcy5fZ2V0TWFya2V0cygpO1xuICAgICAgICBjb25zdCBoYXNPdGhlcnMgPSBvdGhlck1hcmtldHMgJiYgb3RoZXJNYXJrZXRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGhjID0gXCJteW1hcmtldHMtaGVhZGVyIGNsaWNrYWJsZVwiO1xuICAgICAgICBsZXQgc3RhckNsYXNzID0gY25hbWVzKGhjLCB7aW5hY3RpdmU6ICFteU1hcmtldFRhYn0pO1xuICAgICAgICBsZXQgYWxsQ2xhc3MgPSBjbmFtZXMoaGMsIHtpbmFjdGl2ZTogbXlNYXJrZXRUYWJ9KTtcblxuICAgICAgICBsZXQgbGlzdFN0eWxlID0ge1xuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMuc3RhdGUubWluV2lkdGgsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFwiNnJlbVwiXG4gICAgICAgIH07XG4gICAgICAgIGlmIChsaXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICBsaXN0U3R5bGUuaGVpZ2h0ID0gbGlzdEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0b3IgPSByZXF1aXJlKFwiY291bnRlcnBhcnRcIik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhYkhlYWRlciA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuaGVhZGVyU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXIgYm90dG9tLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJteU1hcmtldHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhckNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMsIFwibXktbWFya2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e3RyYW5zbGF0b3IudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLm15X21hcmtldHNfdGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWxsQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcywgXCJmaW5kLW1hcmtldFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5maW5kX21hcmtldHNfdGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1vcmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vSGVhZGVyIHx8IHRoaXMucHJvcHMudGFiSGVhZGVyID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2xzID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMXJlbSAwXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9scyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIwLjVyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHshbXlNYXJrZXRUYWIgPyA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBvbkNoYW5nZT17dGhpcy5fbG9va3VwQXNzZXRzLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiU1lNQk9MOlNZTUJPTFwiIC8+IDogbnVsbH0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAge215TWFya2V0VGFiID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIHNocmlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAwLjVyZW0gMC43NXJlbSAwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3ttYXJnaW46IFwiM3B4IDAgMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLm9ubHlMaXF1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ6ICF0aGlzLnByb3BzLm9ubHlMaXF1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNob3dfb25seV9saXF1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3ttYXJnaW46IFwiM3B4IDAgMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLm9ubHlTdGFyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMudG9nZ2xlU3RhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5zaG93X29ubHlfc3Rhcl9mb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJmaS1zdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ29sZC1zdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwic3Rhcl9pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC45cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW4gbWFya2V0LWZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5maWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXlNYXJrZXRGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMC43NXJlbSAwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Bc3NldFNlbGVjdD17dGhpcy5fb25Gb3VuZEJhc2VBc3NldC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e2RlZmF1bHRCYXNlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXRCYXNlQXNzZXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMuc3RhdGUuZmluZEJhc2VJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJbnB1dD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbmRCYXNlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMS41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3VuZD17dGhpcy5fb25Gb3VuZEJhc2VBc3NldC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4Y2hhbmdlLnF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXt7Zm9udFNpemU6IFwiMC45cmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0TmFtZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2Uuc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmluZFNlYXJjaElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFzc2V0TmFtZUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1hcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRCcmVhazogXCJicmVhay1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuaW52YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXltYXJrZXRzLXRhYnNcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19PlxuICAgICAgICAgICAgICAgICAgICB7LyogUXVvdGUgZWRpdCB0YWIgKi99XG4gICAgICAgICAgICAgICAgICAgIHtteU1hcmtldFRhYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJxdW90ZV9lZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1F1b3RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXltYXJrZXRzLXRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgeyFteU1hcmtldFRhYiAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcHJlZmVycmVkQmFzZXMubWFwKChiYXNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVBY3RpdmVNYXJrZXRUYWIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcIm15bWFya2V0cy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBhY3RpdmVNYXJrZXRUYWIgPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB7bXlNYXJrZXRUYWIgJiYgaGFzT3RoZXJzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcIm90aGVyc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVBY3RpdmVNYXJrZXRUYWIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMuc2l6ZSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwibXltYXJrZXRzLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1hcmtldFRhYiA9PT0gcHJlZmVycmVkQmFzZXMuc2l6ZSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5vdGhlcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2xpc3RTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyIGdyaWQtYmxvY2sgdmVydGljYWwgbXltYXJrZXRzLWxpc3RcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJmYXZvcml0ZXNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Fzc2V0c0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIzcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge3ByZWZlcnJlZEJhc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID09PSBwcmVmZXJyZWRCYXNlcy5nZXQoYWN0aXZlTWFya2V0VGFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChiYXNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZXRHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck1hcmtldHM9e3RoaXMucHJvcHMudXNlck1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWFya2V0cz17dGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2hhbmdlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0cz17c3RhcnJlZE1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cz17bWFya2V0U3RhdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M9e3ZpZXdTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15TWFya2V0VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuZmluZENvbHVtbnMgfHwgY29sdW1uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0cz17YmFzZUdyb3Vwc1tiYXNlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXtteU1hcmtldFRhYiA/IDIwIDogMTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kTWFya2V0VGFiPXshbXlNYXJrZXRUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25seUxpcXVpZCAmJiBteU1hcmtldFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZU1hcmtldFRhYiA9PT0gcHJlZmVycmVkQmFzZXMuc2l6ZSArIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgbXlNYXJrZXRUYWIgJiZcbiAgICAgICAgICAgICAgICAgICAgaGFzT3RoZXJzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck1hcmtldHM9e3RoaXMucHJvcHMudXNlck1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3ByZWZlcnJlZEJhc2VzLnNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0cz17c3RhcnJlZE1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHM9e21hcmtldFN0YXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5ncz17dmlld1NldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0cz17b3RoZXJNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9XCJvdGhlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9e215TWFya2V0VGFiID8gMjAgOiAxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kTWFya2V0VGFiPXshbXlNYXJrZXRUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFF1b3RlU2VsZWN0aW9uTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc1F1b3RlTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZVF1b3RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zaG93UXVvdGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgcXVvdGVzPXt0aGlzLnByb3BzLnByZWZlcnJlZEJhc2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk15TWFya2V0cyA9IGRlYm91bmNlUmVuZGVyKE15TWFya2V0cywgNTAsIHtsZWFkaW5nOiBmYWxzZX0pO1xuXG5jbGFzcyBNeU1hcmtldHNXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TXlNYXJrZXRzIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgTXlNYXJrZXRzV3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBNYXJrZXRzU3RvcmUsIEFzc2V0U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgICAgICBvbmx5TGlxdWlkOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJvbmx5TGlxdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdE1hcmtldHMsXG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLFxuICAgICAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkucHJlZmVycmVkQmFzZXMsXG4gICAgICAgICAgICAgICAgbWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzLFxuICAgICAgICAgICAgICAgIHVzZXJNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudXNlck1hcmtldHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoQXNzZXRzOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzLFxuICAgICAgICAgICAgICAgIG9ubHlTdGFyczogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkub25seVN0YXJzLFxuICAgICAgICAgICAgICAgIGFzc2V0c0xvYWRpbmc6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHNMb2FkaW5nXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBBY2NvdW50TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9BY2NvdW50TmFtZVwiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBNYXJrZXRSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG5vU3ltYm9sczogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gbnVsbDtcbiAgICB9XG5cbiAgICBfb25DbGljayhtYXJrZXRJRCkge1xuICAgICAgICBjb25zdCBuZXdQYXRoID0gYC9tYXJrZXQvJHttYXJrZXRJRH1gO1xuICAgICAgICBpZiAobmV3UGF0aCAhPT0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuc3dpdGNoTWFya2V0KCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL21hcmtldC8ke21hcmtldElEfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdHNDaGVja2VkID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHNJbnRlcnZhbChcbiAgICAgICAgICAgIDM1ICogMTAwMCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHNJbnRlcnZhbCkgdGhpcy5zdGF0c0ludGVydmFsKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgX29uU3RhcihxdW90ZSwgYmFzZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zdGFycmVkKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMucmVtb3ZlU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cXVvdGUsIGJhc2UsIG5vU3ltYm9scywgc3RhdHMsIHN0YXJyZWR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFxdW90ZSB8fCAhYmFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWFya2V0SUQgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIikgKyBcIl9cIiArIGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICBsZXQgbWFya2V0TmFtZSA9IHF1b3RlLmdldChcInN5bWJvbFwiKSArIFwiOlwiICsgYmFzZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGxldCBkeW5hbWljX2RhdGEgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICBxdW90ZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhc2VfZHluYW1pY19kYXRhID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KFxuICAgICAgICAgICAgYmFzZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgcHJpY2UgPSB1dGlscy5jb252ZXJ0UHJpY2UocXVvdGUsIGJhc2UpO1xuXG4gICAgICAgIGxldCByb3dTdHlsZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGVmdEFsaWduKSB7XG4gICAgICAgICAgICByb3dTdHlsZXMudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnV0dG9uQ2xhc3MgPSBcImJ1dHRvbiBvdXRsaW5lXCI7XG4gICAgICAgIGxldCBidXR0b25TdHlsZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBhY3QpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzICs9IFwiIG5vLW1hcmdpblwiO1xuICAgICAgICAgICAgYnV0dG9uU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuNzVyZW1cIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweCAxMHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4wNXJlbVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnNcbiAgICAgICAgICAgIC5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhckNsYXNzID0gc3RhcnJlZCA/IFwiZ29sZC1zdGFyXCIgOiBcImdyZXktc3RhclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25TdGFyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIuc3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9sXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gc3RhdHMgPyBzdGF0cy52b2x1bWVCYXNlIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfdm9sdW1lKGFtb3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZSA9IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMgJiYgc3RhdHMuY2hhbmdlID8gc3RhdHMuY2hhbmdlIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZUNsYXNzID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT09IFwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYW5nZSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNoYW5nZS1kb3duXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ0ZXh0LXJpZ2h0IFwiICsgY2hhbmdlQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYW5nZSArIFwiJVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJrZXROYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFya2V0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJpY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbFByaWNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cyAmJiBzdGF0cy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0YXRzLnByaWNlLnRvUmVhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RhdHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5jbG9zZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0cy5jbG9zZS5xdW90ZS5hbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UuYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmNsb3NlLnF1b3RlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLnF1b3RlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaFByZWNpc2lvbkFzc2V0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJUQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT1BFTi5CVENcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRSQURFLkJUQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR09MRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU0lMVkVSXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlY2lzaW9uID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoUHJlY2lzaW9uQXNzZXRzLmluZGV4T2YoYmFzZS5nZXQoXCJzeW1ib2xcIikpICE9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFByaWNlID4gMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmluYWxQcmljZSA+IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJxdW90ZVN1cHBseVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY19kYXRhID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY19kYXRhLmdldChcImN1cnJlbnRfc3VwcGx5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3F1b3RlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJhc2VTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2VfZHluYW1pY19kYXRhID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9keW5hbWljX2RhdGEuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X3N1cHBseVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFzZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpc3N1ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnROYW1lIGFjY291bnQ9e3F1b3RlLmdldChcImlzc3VlclwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWRkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DaGVja01hcmtldC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJUaGlzIG1hcmtldCBpcyBhIGRlZmF1bHQgbWFya2V0IGFuZCBjYW5ub3QgYmUgcmVtb3ZlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuaXNDaGVja2VkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzRGVmYXVsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5yZW1vdmVNYXJrZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0IGZsb2F0LXJpZ2h0IHJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKAk1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmtleSA+IGIua2V5O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiY2xpY2thYmxlXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBhY3RpdmVNYXJrZXRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtyb3dTdHlsZXN9PlxuICAgICAgICAgICAgICAgIHtjb2x1bW5zfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5NYXJrZXRSb3cgPSB3aXRoUm91dGVyKE1hcmtldFJvdyk7XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcihNYXJrZXRSb3csIHtcbiAgICBwcm9wTmFtZXM6IFtcInF1b3RlXCIsIFwiYmFzZVwiXSxcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdGVtcENvbXBvbmVudDogXCJ0clwiXG4gICAgfSxcbiAgICB3aXRoRHluYW1pYzogdHJ1ZVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XG5cbi8qKlxuICogIEdpdmVuIGFuIGFjY291bnQgaWQsIGRpc3BsYXlzIHRoZSBuYW1lIG9mIHRoYXQgYWNjb3VudFxuICpcbiAqICBFeHBlY3RzIG9uZSBwcm9wZXJ0eSwgJ2FjY291bnQnIHdoaWNoIHNob3VsZCBiZSBhIGFjY291bnQgaWRcbiAqL1xuXG5jbGFzcyBBY2NvdW50TmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGF1dG9zdWJzY3JpYmU6IGZhbHNlXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFjY291bnQpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gPHNwYW4+e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpfTwvc3Bhbj47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEFjY291bnROYW1lKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdW90ZVNlbGVjdGlvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYmFja2luZ0Fzc2V0OiBcIlwiLFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX29uTW92ZVVwKHF1b3RlKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMucHJvcHMucXVvdGVzLmZpbmRJbmRleChxID0+IHEgPT09IHF1b3RlKTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xuICAgICAgICAgICAgb2xkSW5kZXg6IGlkeCxcbiAgICAgICAgICAgIG5ld0luZGV4OiBpZHggLSAxXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbk1vdmVEb3duKHF1b3RlKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMucHJvcHMucXVvdGVzLmZpbmRJbmRleChxID0+IHEgPT09IHF1b3RlKTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xuICAgICAgICAgICAgb2xkSW5kZXg6IGlkeCxcbiAgICAgICAgICAgIG5ld0luZGV4OiBpZHggKyAxXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vblJlbW92ZShxdW90ZSkge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZSk7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xuICAgICAgICAgICAgICAgIHJlbW92ZTogaWR4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbkFkZChxdW90ZSkge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZS5nZXQoXCJzeW1ib2xcIikpO1xuICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xuICAgICAgICAgICAgICAgIGFkZDogcXVvdGUuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbklucHV0QmFja2luZ0Fzc2V0KGFzc2V0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYmFja2luZ0Fzc2V0OiBhc3NldC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uRm91bmRCYWNraW5nQXNzZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMucXVvdGVzLmluY2x1ZGVzKGFzc2V0LmdldChcInN5bWJvbFwiKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1ZhbGlkOiB0cnVlfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJBc3NldCBhbHJlYWR5IGJlaW5nIHVzZWRcIixcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2Vycm9yfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHF1b3RlQ291bnQgPSB0aGlzLnByb3BzLnF1b3Rlcy5zaXplO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnF1b3RlX3NlbGVjdGlvblwiKX1cbiAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfVxuICAgICAgICAgICAgICAgIGlkPVwicXVvdGVfc2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuY2xvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibm8tYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnF1b3RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tb3ZlX2Rvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1vdmVfdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnJlbW92ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucXVvdGVzLm1hcCgocSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2lkeCArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3F9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkeCAhPT0gcXVvdGVDb3VudCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbk1vdmVEb3duLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGV2cm9uLWRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZHggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbk1vdmVVcC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGUgcm90YXRlMTgwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1b3RlQ291bnQgPiAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmUuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNyb3NzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhjaGFuZ2UuY3VzdG9tX3F1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25JbnB1dEJhY2tpbmdBc3NldC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnN0YXRlLmJhY2tpbmdBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldElucHV0PXt0aGlzLnN0YXRlLmJhY2tpbmdBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3VuZD17dGhpcy5fb25Gb3VuZEJhY2tpbmdBc3NldC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uPXt0aGlzLl9vbkFkZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbl9sYWJlbD1cImV4Y2hhbmdlLmFkZF9xdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbj17ISFlcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1hcmVhXCI+e2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQVBBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBVEE7QUFZQTtBQUNBOzs7O0FBN0RBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBeEVBO0FBMEVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUEvQkE7QUFrQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFGQTtBQWFBOzs7O0FBalNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBa1NBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUEyUEE7QUFDQTtBQUNBO0FBN1BBO0FBK1BBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFoUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFzQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFzQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQWJBO0FBQ0E7QUFJQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQ0E7QUFhQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFDQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFSQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFQQTtBQWRBO0FBeUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQURBO0FBVkE7QUF3QkE7QUF6Q0E7QUEyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFEQTtBQURBO0FBREE7QUFuREE7QUE4RUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQXRCQTtBQURBO0FBREE7QUE0QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBSkE7QUF6QkE7QUFEQTtBQTdCQTtBQURBO0FBUEE7QUF5RkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQVpBO0FBaENBO0FBaURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQVJBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBMEJBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBckRBO0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWxWQTtBQTBWQTs7OztBQTczQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTYzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFJQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFKQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFUQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBcUJBO0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQU5BO0FBTEE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQU1BO0FBUkE7QUFMQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQU5BO0FBUEE7QUFSQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBaUJBO0FBQ0E7QUEvT0E7QUFpUEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7O0FBbFZBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQWtWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBWkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFYQTtBQURBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQU5BO0FBRkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQU5BO0FBRkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQU5BO0FBRkE7QUEzQkE7QUF5Q0E7QUE1Q0E7QUFsQkE7QUFrRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkQTtBQXJFQTtBQWJBO0FBcUdBOzs7O0FBMUtBO0FBQ0E7QUFEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9