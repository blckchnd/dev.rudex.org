(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[15],{

/***/ 2822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2823);
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

/***/ 2847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2782);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2784);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(583);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2492);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1898);
/* harmony import */ var _MarketRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2848);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(737);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2389);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2412);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2142);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(738);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2413);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2390);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2850);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1999);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(432);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2151);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(745);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2146);
/* harmony import */ var _QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2852);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2853);


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
            findBaseInput: "BTS",
            activeFindBase: "BTS"
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
                this._lookupAssets("RUDEX.", true);
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
                this._lookupAssets("RUDEX.", true);
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

            var translator = __webpack_require__(599);

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
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_25__["default"], {
                                    style: {
                                        fontSize: "0.9rem",
                                        height: "inherit",
                                        position: "relative"
                                    },
                                    className: "no-margin market-filter-input",
                                    value: this.state.myMarketFilter,
                                    onChange: this.handleSearchUpdate
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
                                        maxLength: 16,
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
                            base.replace("RUDEX.", "")
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

/***/ 2848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2159);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2139);
/* harmony import */ var _Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2849);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2815);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(583);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1906);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2390);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(738);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1858);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(748);
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

                        var highPrecisionAssets = ["BTC", "OPEN.BTC", "RUDEX.BTC", "RUDEX.XBT", "GDEX.BTC", "SPARKDEX.BTC", "XBTSX.BTC", "GOLD", "SILVER"];
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

/***/ 2849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2015);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2016);
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

/***/ 2851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(583);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var scroll_length = props.scroll_length;

        var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this.state = {
            active: false
        };

        _this.listener = false;
        _this.onBodyClick = _this.onBodyClick.bind(_this);
        return _this;
    }

    _createClass(Dropdown, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setListener();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(np.entries, this.props.entries) || !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(ns, this.state) || np.value !== this.props.value;
        }
    }, {
        key: "_setListener",
        value: function _setListener() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            if (props.entries.length > 1 && !this.listener) {
                this.listener = true;
                document.body.addEventListener("click", this.onBodyClick, {
                    capture: false,
                    passive: true
                });
            }
        }
    }, {
        key: "_removeListener",
        value: function _removeListener() {
            document.body.removeEventListener("click", this.onBodyClick);
            this.listener = false;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.entries.length === 1) {
                this._removeListener();
            } else if (np.entries.length > 1) {
                this._setListener(np);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this._removeListener();
        }
    }, {
        key: "onBodyClick",
        value: function onBodyClick(e) {
            var el = e.target;
            var insideActionSheet = false;

            do {
                if (el.classList && el.classList.contains("dropdown") && el.id === this.props.id) {
                    insideActionSheet = true;
                    break;
                }
            } while (el = el.parentNode);

            if (!insideActionSheet) {
                this.setState({ active: false });
            } else {
                e.stopPropagation();
            }
        }
    }, {
        key: "onChange",
        value: function onChange(value, e) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onChange(value);
            this.setState({
                active: false
            });
        }
    }, {
        key: "_toggleDropdown",
        value: function _toggleDropdown() {
            this.setState({
                active: !this.state.active
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                entries = _props.entries,
                value = _props.value;
            var active = this.state.active;

            if (entries.length === 0) return null;
            if (entries.length == 1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "dropdown-wrapper inactive" + (this.props.upperCase ? " upper-case" : "")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        this.props.singleEntry ? this.props.singleEntry : entries[0]
                    )
                );
            } else {
                var options = entries.map(function (value) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        {
                            className: _this2.props.upperCase ? "upper-case" : "",
                            key: value,
                            onClick: _this2.onChange.bind(_this2, _this2.props.values[value])
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            value
                        )
                    );
                });
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        onClick: this._toggleDropdown.bind(this),
                        className: "dropdown-wrapper" + (active ? " active" : "") + (this.props.upperCase ? " upper-case" : "")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingRight: 15 } },
                        value ? value : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "hidden" },
                            "A"
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        {
                            className: "dropdown",
                            style: {
                                overflow: entries.length > this.props.scroll_length ? "auto" : "hidden"
                            }
                        },
                        options
                    )
                );
            }
        }
    }]);

    return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Dropdown.propTypes = {
    scroll_length: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
Dropdown.defaultProps = {
    scroll_length: 9
};


/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ 2852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1906);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2850);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(738);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(748);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2V+ZXhwbG9yZXIuMGViNmU1MGFhMmNjYWRhZjYwODYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL015TWFya2V0cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldFJvdy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQWNjb3VudE5hbWUuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Zsb2F0aW5nRHJvcGRvd24uanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9RdW90ZVNlbGVjdGlvbk1vZGFsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbkdyb3VwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJzcGFuXCIsXHJcbiAgICAgICAgZW50ZXJUaW1lb3V0OiAyMDAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5wcm9wcy5jb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3RoaXMucHJvcHMudHJhbnNpdGlvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17dGhpcy5wcm9wcy5lbnRlclRpbWVvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyPXt0aGlzLnN0YXRlLmFuaW1hdGVFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBNYXJrZXRSb3cgZnJvbSBcIi4vTWFya2V0Um93XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHtDaGFpblZhbGlkYXRpb24sIENoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcywgZ2F0ZXdheVByZWZpeGVzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlzXCI7XG5pbXBvcnQgUXVvdGVTZWxlY3Rpb25Nb2RhbCBmcm9tIFwiLi9RdW90ZVNlbGVjdGlvbk1vZGFsXCI7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1V0aWxpdHkvU2VhcmNoSW5wdXRcIjtcblxuY2xhc3MgTWFya2V0R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG1heFJvd3M6IDIwLFxuICAgICAgICBvbmx5TGlxdWlkOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKHByb3BzKSB7XG4gICAgICAgIGxldCBvcGVuID0gcHJvcHMuZmluZE1hcmtldFRhYlxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoYG15TWFya2V0c0Jhc2VfJHtwcm9wcy5pbmRleH1gKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wZW46IG9wZW4gIT09IHVuZGVmaW5lZCA/IG9wZW4gOiB0cnVlLFxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNJbnZlcnRcIiwgdHJ1ZSksXG4gICAgICAgICAgICBzb3J0Qnk6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNTb3J0XCIsIFwidm9sdW1lXCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5maW5kTWFya2V0VGFiICE9PSB0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0SW5pdGlhbFN0YXRlKG5leHRQcm9wcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmICghbmV4dFByb3BzLm1hcmtldHMgfHwgIXRoaXMucHJvcHMubWFya2V0cykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLm1hcmtldHMsIHRoaXMucHJvcHMubWFya2V0cykgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkTWFya2V0cyAhPT0gdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm1hcmtldFN0YXRzICE9PSB0aGlzLnByb3BzLm1hcmtldFN0YXRzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMudXNlck1hcmtldHMgIT09IHRoaXMucHJvcHMudXNlck1hcmtldHNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfaW52ZXJzZVNvcnQoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBteU1hcmtldHNJbnZlcnQ6ICF0aGlzLnN0YXRlLm15TWFya2V0c0ludmVydFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnZlcnNlU29ydDogIXRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoYW5nZVNvcnQodHlwZSkge1xuICAgICAgICBpZiAodHlwZSAhPT0gdGhpcy5zdGF0ZS5zb3J0QnkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgbXlNYXJrZXRzU29ydDogdHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW52ZXJzZVNvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIF9vblNlbGVjdEJhc2UoZSkge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAvLyAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZUJhc2UodGhpcy5wcm9wcy5pbmRleCwgZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIH1cblxuICAgIF9vblRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIGxldCBvcGVuID0gIXRoaXMuc3RhdGUub3BlbjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wZW46IG9wZW5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICAgICAgc2V0dGluZ1tgbXlNYXJrZXRzQmFzZV8ke3RoaXMucHJvcHMuaW5kZXh9YF0gPSBvcGVuO1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVG9nZ2xlVXNlck1hcmtldChtYXJrZXQpIHtcbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPSBtYXJrZXQuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy51c2VyTWFya2V0cy5nZXQobWFya2V0KTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnNldFVzZXJNYXJrZXQoYmFzZSwgcXVvdGUsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgbWFya2V0cyxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBtYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgY3VycmVudFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtzb3J0QnksIGludmVyc2VTb3J0LCBvcGVufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFtYXJrZXRzIHx8ICFtYXJrZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGVhZGVycyA9IGNvbHVtbnMubWFwKGhlYWRlciA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGhlYWRlci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1hcmtldFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVNvcnQuYmluZCh0aGlzLCBcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwidm9sXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlU29ydC5iaW5kKHRoaXMsIFwidm9sdW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbF9zaG9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInByaWNlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwicXVvdGVTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5iYXNlX3N1cHBseVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImJhc2VTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5xdW90ZV9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VTb3J0LmJpbmQodGhpcywgXCJjaGFuZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiaXNzdWVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLmlzc3VlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aGVhZGVyLm5hbWV9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0uY29uZmlybV9hZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5PXtoZWFkZXIubmFtZX0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtYXJrZXRSb3dzID0gbWFya2V0c1xuICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkICYmXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmdldChtYXJrZXQuaWQpICYmXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmdldChtYXJrZXQuaWQpLnZvbHVtZUJhc2UgPT0gMFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtldFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttYXJrZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlID09PSBcIm90aGVyc1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17bWFya2V0LnF1b3RlfSAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17bWFya2V0LmJhc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e21hcmtldC5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17bWFya2V0LnF1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17bWFya2V0LmJhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFsaWduPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vU3ltYm9scz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzPXttYXJrZXRTdGF0cy5nZXQobWFya2V0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWQ9e3N0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudCA9PT0gbWFya2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt0aGlzLnByb3BzLnVzZXJNYXJrZXRzLmhhcyhtYXJrZXQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0cy5oYXMobWFya2V0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja01hcmtldD17dGhpcy5fb25Ub2dnbGVVc2VyTWFya2V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYV9zeW1ib2xzID0gYS5rZXkuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgICAgIGxldCBiX3N5bWJvbHMgPSBiLmtleS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICAgICAgbGV0IGFTdGF0cyA9IG1hcmtldFN0YXRzLmdldChhX3N5bWJvbHNbMF0gKyBcIl9cIiArIGFfc3ltYm9sc1sxXSk7XG4gICAgICAgICAgICAgICAgbGV0IGJTdGF0cyA9IG1hcmtldFN0YXRzLmdldChiX3N5bWJvbHNbMF0gKyBcIl9cIiArIGJfc3ltYm9sc1sxXSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNvcnRCeSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFfc3ltYm9sc1swXSA+IGJfc3ltYm9sc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYV9zeW1ib2xzWzBdIDwgYl9zeW1ib2xzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludmVyc2VTb3J0ID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYV9zeW1ib2xzWzFdID4gYl9zeW1ib2xzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFfc3ltYm9sc1sxXSA8IGJfc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2x1bWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhU3RhdHMgJiYgYlN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludmVyc2VTb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiU3RhdHMudm9sdW1lQmFzZSAtIGFTdGF0cy52b2x1bWVCYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhU3RhdHMudm9sdW1lQmFzZSAtIGJTdGF0cy52b2x1bWVCYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFTdGF0cyAmJiBiU3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW52ZXJzZVNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJTdGF0cy5jaGFuZ2UgLSBhU3RhdHMuY2hhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhU3RhdHMuY2hhbmdlIC0gYlN0YXRzLmNoYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19PlxuICAgICAgICAgICAgICAgIHtvcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj57aGVhZGVyc308L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRSb3dzICYmIG1hcmtldFJvd3MubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57bWFya2V0Um93c308L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIE15TWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYWN0aXZlVGFiOiBcIm15LW1hcmtldFwiLFxuICAgICAgICBzZXRNaW5XaWR0aDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNRdW90ZU1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c0ludmVydFwiLCB0cnVlKSxcbiAgICAgICAgICAgIHNvcnRCeTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c1NvcnRcIiwgXCJ2b2x1bWVcIiksXG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJmYXZNYXJrZXRUYWJcIiwgXCJteS1tYXJrZXRcIiksXG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJhY3RpdmVNYXJrZXRUYWJcIiwgMCksXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogbnVsbCxcbiAgICAgICAgICAgIGxvb2t1cEJhc2U6IG51bGwsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgZmluZEJhc2VJbnB1dDogXCJCVFNcIixcbiAgICAgICAgICAgIGFjdGl2ZUZpbmRCYXNlOiBcIkJUU1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0TWluV2lkdGggPSB0aGlzLl9zZXRNaW5XaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdCA9IGRlYm91bmNlKEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIsIDE1MCk7XG5cbiAgICAgICAgdGhpcy5zaG93UXVvdGVNb2RhbCA9IHRoaXMuc2hvd1F1b3RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUXVvdGVNb2RhbCA9IHRoaXMuaGlkZVF1b3RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgLyogVHJpZ2dlciBhIGxvb2t1cCB3aGVuIHN3aXRjaGluZyB0YWJzIHRvIGZpbmQtbWFya2V0ICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSBcImZpbmQtbWFya2V0XCIgJiZcbiAgICAgICAgICAgIG5leHRTdGF0ZS5hY3RpdmVUYWIgPT09IFwiZmluZC1tYXJrZXRcIiAmJlxuICAgICAgICAgICAgIW5leHRQcm9wcy5zZWFyY2hBc3NldHMuc2l6ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvb2t1cEFzc2V0cyhcIlJVREVYLlwiLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVRhYiAhPT0gbmV4dFN0YXRlLmFjdGl2ZVRhYikge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKG5leHRTdGF0ZS5hY3RpdmVUYWIpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgIW5leHRQcm9wcy50YWJIZWFkZXIgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSBuZXh0UHJvcHMuYWN0aXZlVGFiXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKG5leHRQcm9wcy5hY3RpdmVUYWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLnNlYXJjaEFzc2V0cywgdGhpcy5wcm9wcy5zZWFyY2hBc3NldHMpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5tYXJrZXRzLCB0aGlzLnByb3BzLm1hcmtldHMpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5kZWZhdWx0TWFya2V0cyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5tYXJrZXRTdGF0cywgdGhpcy5wcm9wcy5tYXJrZXRTdGF0cykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMubWluV2lkdGggIT09IHRoaXMucHJvcHMubWluV2lkdGggfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5saXN0SGVpZ2h0ICE9PSB0aGlzLnByb3BzLmxpc3RIZWlnaHQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5wcmVmZXJyZWRCYXNlcyAhPT0gdGhpcy5wcm9wcy5wcmVmZXJyZWRCYXNlcyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm9ubHlTdGFycyAhPT0gdGhpcy5wcm9wcy5vbmx5U3RhcnMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vbmx5TGlxdWlkICE9PSB0aGlzLnByb3BzLm9ubHlMaXF1aWQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hc3NldHNMb2FkaW5nICE9PSB0aGlzLnByb3BzLmFzc2V0c0xvYWRpbmcgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy51c2VyTWFya2V0cyAhPT0gdGhpcy5wcm9wcy51c2VyTWFya2V0c1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0TWluV2lkdGgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldE1pbldpZHRoLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJycmVudCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJhc2UgPSB0aGlzLnByb3BzLmN1cnJlbnQuc3BsaXQoXCJfXCIpWzFdO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5wcm9wcy5wcmVmZXJyZWRCYXNlcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgYSA9PiBhID09PSBjdXJyZW50QmFzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggIT09IC0xICYmXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICE9PSB0aGlzLnN0YXRlLmFjdGl2ZU1hcmtldFRhYlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlTWFya2V0VGFiOiBjdXJyZW50SW5kZXh9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgaGlzdG9yeUNvbnRhaW5lciA9IHRoaXMucmVmcy5mYXZvcml0ZXM7XG4gICAgICAgIFBzLmluaXRpYWxpemUoaGlzdG9yeUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5fc2V0TWluV2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUYWIgPT09IFwiZmluZC1tYXJrZXRcIikge1xuICAgICAgICAgICAgdGhpcy5fbG9va3VwQXNzZXRzKFwiUlVERVguXCIsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSB0aGlzLnByb3BzLmFjdGl2ZVRhYikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKHRoaXMucHJvcHMuYWN0aXZlVGFiKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0TWluV2lkdGgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldE1pbldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5teU1hcmtldFRhYiAmJiAhbnAubXlNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuZmluZFNlYXJjaElucHV0KSB0aGlzLnJlZnMuZmluZFNlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlUXVvdGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1F1b3RlTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UXVvdGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1F1b3RlTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRNaW5XaWR0aCgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRNaW5XaWR0aCAmJlxuICAgICAgICAgICAgdGhpcy5yZWZzLmZhdm9yaXRlcyAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmVUYWIgPT09IFwibXktbWFya2V0XCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5taW5XaWR0aCAhPT0gdGhpcy5yZWZzLmZhdm9yaXRlcy5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5yZWZzLmZhdm9yaXRlcy5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yZWZzLmZhdm9yaXRlcykge1xuICAgICAgICAgICAgbGV0IGhpc3RvcnlDb250YWluZXIgPSB0aGlzLnJlZnMuZmF2b3JpdGVzO1xuICAgICAgICAgICAgUHMudXBkYXRlKGhpc3RvcnlDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ludmVyc2VTb3J0KCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgbXlNYXJrZXRzSW52ZXJ0OiAhdGhpcy5zdGF0ZS5teU1hcmtldHNJbnZlcnRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGFuZ2VTb3J0KHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09IHRoaXMuc3RhdGUuc29ydEJ5KSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIG15TWFya2V0c1NvcnQ6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc29ydEJ5OiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ludmVyc2VTb3J0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ29NYXJrZXRzKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9tYXJrZXRzXCIpO1xuICAgIH1cblxuICAgIF9jaGFuZ2VUYWIodGFiKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBmYXZNYXJrZXRUYWI6IHRhYlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVUYWI6IHRhYlxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zZXRNaW5XaWR0aCgpO1xuICAgIH1cblxuICAgIF9vbklucHV0TmFtZShnZXRCYWNrZWRBc3NldHMsIGUpIHtcbiAgICAgICAgbGV0IHRvRmluZCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBsZXQgaXNWYWxpZE5hbWUgPSAhQ2hhaW5WYWxpZGF0aW9uLmlzX3ZhbGlkX3N5bWJvbF9lcnJvcih0b0ZpbmQsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogdG9GaW5kXG4gICAgICAgIH0pO1xuICAgICAgICAvKiBEb24ndCBsb29rdXAgaW52YWxpZCBhc3NldCBuYW1lcyAqL1xuICAgICAgICBpZiAodG9GaW5kICYmIHRvRmluZC5sZW5ndGggPj0gMiAmJiAhaXNWYWxpZE5hbWUpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSB0b0ZpbmQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9va3VwQXNzZXRzKHRvRmluZCwgZ2V0QmFja2VkQXNzZXRzKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgX2xvb2t1cEFzc2V0cyh2YWx1ZSwgZ2F0ZXdheUFzc2V0cyA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IFwiXCIpIHJldHVybjtcblxuICAgICAgICBsZXQgc3ltYm9scyA9IHZhbHVlLnRvVXBwZXJDYXNlKCkuc3BsaXQoXCI6XCIpO1xuICAgICAgICBsZXQgcXVvdGUgPSBzeW1ib2xzWzBdO1xuICAgICAgICBsZXQgYmFzZSA9IHN5bWJvbHMubGVuZ3RoID09PSAyID8gc3ltYm9sc1sxXSA6IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb29rdXBRdW90ZTogcXVvdGUsXG4gICAgICAgICAgICBsb29rdXBCYXNlOiBiYXNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZy5kZWZlcih7XG4gICAgICAgICAgICBtYXJrZXRMb29rdXBJbnB1dDogdmFsdWUudG9VcHBlckNhc2UoKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdChxdW90ZSwgNTAsIGdhdGV3YXlBc3NldHMpO1xuICAgIH1cblxuICAgIHRvZ2dsZUFjdGl2ZU1hcmtldFRhYihpbmRleCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiOiBpbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZU1hcmtldFRhYjogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uSW5wdXRCYXNlQXNzZXQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaW5kQmFzZUlucHV0OiBhc3NldC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uRm91bmRCYXNlQXNzZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVGaW5kQmFzZTogYXNzZXQuZ2V0KFwic3ltYm9sXCIpfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcklucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtteU1hcmtldEZpbHRlcjogXCJcIn0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTZWFyY2hVcGRhdGUgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBteU1hcmtldEZpbHRlcjogZS50YXJnZXQudmFsdWUgJiYgZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2dldE1hcmtldHMoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNlYXJjaEFzc2V0cyxcbiAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzLFxuICAgICAgICAgICAgb25seVN0YXJzLFxuICAgICAgICAgICAgdXNlck1hcmtldHMsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmVUYWIsXG4gICAgICAgICAgICBsb29rdXBRdW90ZSxcbiAgICAgICAgICAgIGxvb2t1cEJhc2UsXG4gICAgICAgICAgICBteU1hcmtldEZpbHRlcixcbiAgICAgICAgICAgIGFjdGl2ZU1hcmtldFRhYlxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgcG9zc2libGVHYXRld2F5QXNzZXRzID0gZ2V0UG9zc2libGVHYXRld2F5UHJlZml4ZXMoXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBiYXNlcyA9IHRoaXMuX2dldEJhc2VzKCk7XG4gICAgICAgIGxldCBhbGxNYXJrZXRzID0gW10sXG4gICAgICAgICAgICBiYXNlR3JvdXBzID0ge307XG4gICAgICAgIGxldCBvdGhlck1hcmtldHMgPSBbXTtcblxuICAgICAgICBjb25zdCBteU1hcmtldFRhYiA9IGFjdGl2ZVRhYiA9PT0gXCJteS1tYXJrZXRcIjtcblxuICAgICAgICBpZiAoc2VhcmNoQXNzZXRzLnNpemUpIHtcbiAgICAgICAgICAgIHNlYXJjaEFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5vcHRpb25zLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShhLm9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInZpc2libGVcIiBpbiBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uLnZpc2libGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuc3ltYm9sLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wubGVuZ3RoID49IGxvb2t1cFF1b3RlLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBiYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gYXNzZXQuc3ltYm9sICsgXCJfXCIgKyBiYXNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZSAhPT0gYXNzZXQuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTWFya2V0cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90ZTogYXNzZXQuc3ltYm9sLCBiYXNlOiBiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsbE1hcmtldHMgPSBhbGxNYXJrZXRzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIC8vIElmIGEgYmFzZSBhc3NldCBpcyBzcGVjaWZpZWQsIGxpbWl0IHRoZSBxdW90ZSBhc3NldCB0byB0aGUgZXhhY3Qgc2VhcmNoIHRlcm1cbiAgICAgICAgICAgIGlmIChsb29rdXBCYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMV0ucXVvdGUgPT09IGxvb2t1cFF1b3RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhY3RpdmVNYXJrZXRzID0gbXlNYXJrZXRUYWJcbiAgICAgICAgICAgID8gZGVmYXVsdE1hcmtldHNcbiAgICAgICAgICAgIDogSW1tdXRhYmxlLk1hcChhbGxNYXJrZXRzKTtcbiAgICAgICAgaWYgKG15TWFya2V0VGFiICYmIHVzZXJNYXJrZXRzLnNpemUpIHtcbiAgICAgICAgICAgIHVzZXJNYXJrZXRzLmZvckVhY2goKG1hcmtldCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVNYXJrZXRzLmhhcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVNYXJrZXRzID0gYWN0aXZlTWFya2V0cy5zZXQoa2V5LCBtYXJrZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaWx0ZXJBbmRTZXBhcmF0ZU1hcmtldHMoXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgbWF0Y2hCYXNlcyxcbiAgICAgICAgICAgIG1hcmtldHMsXG4gICAgICAgICAgICBiYXNlR3JvdXBzLFxuICAgICAgICAgICAgb3RoZXJNYXJrZXRzXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IG90aGVycyA9IG1hcmtldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5iYXNlID09PSBhLnF1b3RlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8qIFJldHVybiBzZWFyY2ggcmVzdWx0cyBpbiB0aGUgRmluZCBNYXJrZXRzIFRhYiAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW15TWFya2V0VGFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwUXVvdGUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucXVvdGUuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIGZpbHRlcmVkIG1hcmtldHMgaWYgYSBmaWx0ZXIgaXMgaW5wdXQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IElEID0gYS5xdW90ZSArIFwiX1wiICsgYS5iYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhbXlNYXJrZXRGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSUQuaW5kZXhPZihteU1hcmtldEZpbHRlcikgIT09IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIG9ubHkgc3RhcnJlZCBtYXJrZXRzIGlmIHRoYXQgb3B0aW9uIGlzIGNoZWNrZWQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmx5U3RhcnMgJiYgIXN0YXJyZWRNYXJrZXRzLmhhcyhJRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFbHNlIHJldHVybiBhbGwgbWFya2V0cyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAobWFya2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gbWFya2V0LnF1b3RlICsgXCJfXCIgKyBtYXJrZXQuYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoQmFzZXMuaW5kZXhPZihtYXJrZXQuYmFzZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2VHcm91cHNbYmFzZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlR3JvdXBzW2Jhc2VdID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0T2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbWFya2V0LnF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG1hcmtldC5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlR3JvdXBzW2Jhc2VdLmZpbmQobSA9PiBtLmlkID09PSBtYXJrZXRJRCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUdyb3Vwc1tiYXNlXS5wdXNoKG1hcmtldE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICFwcmVmZXJyZWRCYXNlcy5pbmNsdWRlcyhtYXJrZXQuYmFzZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlR2F0ZXdheUFzc2V0cy5pbmRleE9mKG1hcmtldC5iYXNlKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFkZGluZyB0byBvdGhlciBtYXJrZXRzOlwiLCBiYXNlLCBtYXJrZXQuYmFzZSwgcHJlZmVycmVkQmFzZXMudG9KUygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWFya2V0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG1hcmtldC5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBtYXJrZXQuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgICAgICAudGFrZShteU1hcmtldFRhYiA/IDEwMCA6IDIwKVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgICAgICByZXR1cm4ge290aGVyTWFya2V0czogb3RoZXJzLmNvbmNhdChvdGhlck1hcmtldHMpLCBiYXNlR3JvdXBzfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVNYXJrZXRzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QmFzZSA9IG15TWFya2V0VGFiXG4gICAgICAgICAgICAgICAgPyBwcmVmZXJyZWRCYXNlcy5nZXQoYWN0aXZlTWFya2V0VGFiKVxuICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5hY3RpdmVGaW5kQmFzZTtcblxuICAgICAgICAgICAgKHtvdGhlck1hcmtldHMsIGJhc2VHcm91cHN9ID0gZmlsdGVyQW5kU2VwYXJhdGVNYXJrZXRzKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRCYXNlLFxuICAgICAgICAgICAgICAgIFtjdXJyZW50QmFzZV0sXG4gICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0cyxcbiAgICAgICAgICAgICAgICBiYXNlR3JvdXBzLFxuICAgICAgICAgICAgICAgIG90aGVyTWFya2V0c1xuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIC8qIENoZWNrIGZvciBwb3NzaWJsZSBnYXRld2F5IHZlcnNpb25zIG9mIHRoZSBhc3NldCAqL1xuICAgICAgICAgICAgZ2F0ZXdheVByZWZpeGVzLmZvckVhY2gocHJlZml4ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zc2libGVHYXRld2F5QXNzZXROYW1lID0gYCR7cHJlZml4fS4ke2N1cnJlbnRCYXNlfWA7XG4gICAgICAgICAgICAgICAgbGV0IGdhdGV3YXlBc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLyogSWYgdGhlIGdhdGV3YXkgb2ZmZXJzIGFuIGFzc2V0IGZvciB0aGlzIGJhc2UsIGFkZCBpdCB0byB0aGUgbGlzdCAqL1xuICAgICAgICAgICAgICAgIGlmICghIWdhdGV3YXlBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2F0ZXdheU1hcmtldHMgPSBhY3RpdmVNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLnF1b3RlID09PSBtLmJhc2UpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJRCA9IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLnF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV8ke3Bvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVNYXJrZXRzLmhhcyhuZXdJRCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG0ucXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG0gPT4gISFtKTtcbiAgICAgICAgICAgICAgICAgICAgKHtvdGhlck1hcmtldHMsIGJhc2VHcm91cHN9ID0gZmlsdGVyQW5kU2VwYXJhdGVNYXJrZXRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBbY3VycmVudEJhc2UsIHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXRld2F5TWFya2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VHcm91cHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlck1hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2Jhc2VHcm91cHMsIG90aGVyTWFya2V0c307XG4gICAgfVxuXG4gICAgX2dldEJhc2VzKCkge1xuICAgICAgICBsZXQge3ByZWZlcnJlZEJhc2VzLCBzZWFyY2hBc3NldHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtsb29rdXBRdW90ZSwgbG9va3VwQmFzZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBiYXNlcyA9IHNlYXJjaEFzc2V0c1xuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwQmFzZSAmJiBsb29rdXBCYXNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wuaW5kZXhPZihsb29rdXBCYXNlKSA9PT0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuc3ltYm9sLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwQmFzZSAmJiBsb29rdXBCYXNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXQuc3ltYm9sLmluZGV4T2YobG9va3VwQmFzZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3NldC5zeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZWZlcnJlZEJhc2VzLmluY2x1ZGVzKGFzc2V0LnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sLmxlbmd0aCA+PSBsb29rdXBRdW90ZS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbC5sZW5ndGggPCBsb29rdXBRdW90ZS5sZW5ndGggKyAzXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgLnRvQXJyYXkoKTtcblxuICAgICAgICBiYXNlcyA9IGJhc2VzLmNvbmNhdChcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb29rdXBCYXNlIHx8ICFsb29rdXBCYXNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXhPZihsb29rdXBCYXNlKSA9PT0gMDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgKTtcblxuICAgICAgICBiYXNlcyA9IGJhc2VzLmZpbHRlcihiYXNlID0+IHtcbiAgICAgICAgICAgIGlmIChsb29rdXBCYXNlICYmIGxvb2t1cEJhc2UubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlLmluZGV4T2YobG9va3VwQmFzZSkgPT09IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYmFzZXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHMsXG4gICAgICAgICAgICBtYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgICBhc3NldHNMb2FkaW5nLFxuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMsXG4gICAgICAgICAgICBjdXJyZW50LFxuICAgICAgICAgICAgdmlld1NldHRpbmdzLFxuICAgICAgICAgICAgbGlzdEhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVNYXJrZXRUYWIsIGFjdGl2ZVRhYn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IG15TWFya2V0VGFiID0gYWN0aXZlVGFiID09PSBcIm15LW1hcmtldFwiO1xuICAgICAgICBsZXQgZGVmYXVsdEJhc2VzID0gcHJlZmVycmVkQmFzZXMubWFwKGEgPT4gYSk7XG5cbiAgICAgICAgaWYgKCFteU1hcmtldFRhYikge1xuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMgPSBwcmVmZXJyZWRCYXNlcy5jbGVhcigpO1xuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMgPSBwcmVmZXJyZWRCYXNlcy5wdXNoKHRoaXMuc3RhdGUuYWN0aXZlRmluZEJhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgZGVmYXVsdCBiYXNlIG9wdGlvbnNcbiAgICAgICAgLy8gbGV0IHByZWZlcnJlZEJhc2VzID0gW2NvcmVTeW1ib2wsIFwiQlRDXCIsIFwiVVNEXCIsIFwiQ05ZXCJdO1xuXG4gICAgICAgIC8qIEluIHRoZSBmaW5kLW1hcmtldCB0YWIsIG9ubHkgdXNlIG1hcmtldCB0YWIgMCAqL1xuICAgICAgICBpZiAoIW15TWFya2V0VGFiKSBhY3RpdmVNYXJrZXRUYWIgPSAwO1xuXG4gICAgICAgIGxldCB7YmFzZUdyb3Vwcywgb3RoZXJNYXJrZXRzfSA9IHRoaXMuX2dldE1hcmtldHMoKTtcbiAgICAgICAgY29uc3QgaGFzT3RoZXJzID0gb3RoZXJNYXJrZXRzICYmIG90aGVyTWFya2V0cy5sZW5ndGg7XG4gICAgICAgIGxldCBoYyA9IFwibXltYXJrZXRzLWhlYWRlciBjbGlja2FibGVcIjtcbiAgICAgICAgbGV0IHN0YXJDbGFzcyA9IGNuYW1lcyhoYywge2luYWN0aXZlOiAhbXlNYXJrZXRUYWJ9KTtcbiAgICAgICAgbGV0IGFsbENsYXNzID0gY25hbWVzKGhjLCB7aW5hY3RpdmU6IG15TWFya2V0VGFifSk7XG5cbiAgICAgICAgbGV0IGxpc3RTdHlsZSA9IHtcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLm1pbldpZHRoLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjZyZW1cIlxuICAgICAgICB9O1xuICAgICAgICBpZiAobGlzdEhlaWdodCkge1xuICAgICAgICAgICAgbGlzdFN0eWxlLmhlaWdodCA9IGxpc3RIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0cmFuc2xhdG9yID0gcmVxdWlyZShcImNvdW50ZXJwYXJ0XCIpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YWJIZWFkZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgbGVmdC1vcmRlcmJvb2staGVhZGVyIGJvdHRvbS1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwibXlNYXJrZXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VUYWIuYmluZCh0aGlzLCBcIm15LW1hcmtldFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5teV9tYXJrZXRzX3RhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tYXJrZXRfbmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FsbENsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMsIFwiZmluZC1tYXJrZXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbnRybz17dHJhbnNsYXRvci50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guZmluZF9tYXJrZXRzX3RhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tb3JlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ub0hlYWRlciB8fCB0aGlzLnByb3BzLnRhYkhlYWRlciA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuaGVhZGVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNoYW5nZS1jb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tYXJrZXRfbmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9scyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGwtMTIgbWVkaXVtLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjFyZW0gMFwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbHMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMC41cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7IW15TWFya2V0VGFiID8gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gb25DaGFuZ2U9e3RoaXMuX2xvb2t1cEFzc2V0cy5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlNZTUJPTDpTWU1CT0xcIiAvPiA6IG51bGx9ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHtteU1hcmtldFRhYiA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBzaHJpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMC41cmVtIDAuNzVyZW0gMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7bWFyZ2luOiBcIjNweCAwIDBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5vbmx5TGlxdWlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5TGlxdWlkOiAhdGhpcy5wcm9wcy5vbmx5TGlxdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjAuNHJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5zaG93X29ubHlfbGlxdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7bWFyZ2luOiBcIjNweCAwIDBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5vbmx5U3RhcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnRvZ2dsZVN0YXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjAuNHJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZXhjaGFuZ2Uuc2hvd19vbmx5X3N0YXJfZm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZmktc3RhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdvbGQtc3RhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInN0YXJfaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXIgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImluaGVyaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luIG1hcmtldC1maWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm15TWFya2V0RmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaFVwZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMC43NXJlbSAwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Bc3NldFNlbGVjdD17dGhpcy5fb25Gb3VuZEJhc2VBc3NldC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e2RlZmF1bHRCYXNlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXRCYXNlQXNzZXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMuc3RhdGUuZmluZEJhc2VJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJbnB1dD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbmRCYXNlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMS41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3VuZD17dGhpcy5fb25Gb3VuZEJhc2VBc3NldC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4Y2hhbmdlLnF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXt7Zm9udFNpemU6IFwiMC45cmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0TmFtZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2Uuc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxNn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImZpbmRTZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hc3NldE5hbWVFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3ItYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmludmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5wdXRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm15bWFya2V0cy10YWJzXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDB9fT5cbiAgICAgICAgICAgICAgICAgICAgey8qIFF1b3RlIGVkaXQgdGFiICovfVxuICAgICAgICAgICAgICAgICAgICB7bXlNYXJrZXRUYWIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwicXVvdGVfZWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dRdW90ZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15bWFya2V0cy10YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOysmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHshbXlNYXJrZXRUYWIgJiYgIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHByZWZlcnJlZEJhc2VzLm1hcCgoYmFzZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFzZSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWN0aXZlTWFya2V0VGFiLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJteW1hcmtldHMtdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogYWN0aXZlTWFya2V0VGFiID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB7bXlNYXJrZXRUYWIgJiYgaGFzT3RoZXJzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcIm90aGVyc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVBY3RpdmVNYXJrZXRUYWIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMuc2l6ZSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwibXltYXJrZXRzLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1hcmtldFRhYiA9PT0gcHJlZmVycmVkQmFzZXMuc2l6ZSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5vdGhlcnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2xpc3RTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyIGdyaWQtYmxvY2sgdmVydGljYWwgbXltYXJrZXRzLWxpc3RcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJmYXZvcml0ZXNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Fzc2V0c0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIzcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge3ByZWZlcnJlZEJhc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID09PSBwcmVmZXJyZWRCYXNlcy5nZXQoYWN0aXZlTWFya2V0VGFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChiYXNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZXRHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck1hcmtldHM9e3RoaXMucHJvcHMudXNlck1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWFya2V0cz17dGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93Q2hhbmdlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0cz17c3RhcnJlZE1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cz17bWFya2V0U3RhdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M9e3ZpZXdTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15TWFya2V0VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuZmluZENvbHVtbnMgfHwgY29sdW1uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0cz17YmFzZUdyb3Vwc1tiYXNlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXtteU1hcmtldFRhYiA/IDIwIDogMTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kTWFya2V0VGFiPXshbXlNYXJrZXRUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25seUxpcXVpZCAmJiBteU1hcmtldFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZU1hcmtldFRhYiA9PT0gcHJlZmVycmVkQmFzZXMuc2l6ZSArIDEgJiZcbiAgICAgICAgICAgICAgICAgICAgbXlNYXJrZXRUYWIgJiZcbiAgICAgICAgICAgICAgICAgICAgaGFzT3RoZXJzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck1hcmtldHM9e3RoaXMucHJvcHMudXNlck1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3ByZWZlcnJlZEJhc2VzLnNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0cz17c3RhcnJlZE1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHM9e21hcmtldFN0YXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5ncz17dmlld1NldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0cz17b3RoZXJNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9XCJvdGhlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9e215TWFya2V0VGFiID8gMjAgOiAxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kTWFya2V0VGFiPXshbXlNYXJrZXRUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFF1b3RlU2VsZWN0aW9uTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc1F1b3RlTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZVF1b3RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zaG93UXVvdGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgcXVvdGVzPXt0aGlzLnByb3BzLnByZWZlcnJlZEJhc2VzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk15TWFya2V0cyA9IGRlYm91bmNlUmVuZGVyKE15TWFya2V0cywgNTAsIHtsZWFkaW5nOiBmYWxzZX0pO1xuXG5jbGFzcyBNeU1hcmtldHNXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TXlNYXJrZXRzIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgTXlNYXJrZXRzV3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBNYXJrZXRzU3RvcmUsIEFzc2V0U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgICAgICBvbmx5TGlxdWlkOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJvbmx5TGlxdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdE1hcmtldHMsXG4gICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLFxuICAgICAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkucHJlZmVycmVkQmFzZXMsXG4gICAgICAgICAgICAgICAgbWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzLFxuICAgICAgICAgICAgICAgIHVzZXJNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudXNlck1hcmtldHMsXG4gICAgICAgICAgICAgICAgc2VhcmNoQXNzZXRzOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzLFxuICAgICAgICAgICAgICAgIG9ubHlTdGFyczogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkub25seVN0YXJzLFxuICAgICAgICAgICAgICAgIGFzc2V0c0xvYWRpbmc6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHNMb2FkaW5nXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBBY2NvdW50TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9BY2NvdW50TmFtZVwiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBNYXJrZXRSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG5vU3ltYm9sczogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gbnVsbDtcbiAgICB9XG5cbiAgICBfb25DbGljayhtYXJrZXRJRCkge1xuICAgICAgICBjb25zdCBuZXdQYXRoID0gYC9tYXJrZXQvJHttYXJrZXRJRH1gO1xuICAgICAgICBpZiAobmV3UGF0aCAhPT0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuc3dpdGNoTWFya2V0KCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL21hcmtldC8ke21hcmtldElEfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdHNDaGVja2VkID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHNJbnRlcnZhbChcbiAgICAgICAgICAgIDM1ICogMTAwMCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHNJbnRlcnZhbCkgdGhpcy5zdGF0c0ludGVydmFsKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgX29uU3RhcihxdW90ZSwgYmFzZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zdGFycmVkKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMucmVtb3ZlU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cXVvdGUsIGJhc2UsIG5vU3ltYm9scywgc3RhdHMsIHN0YXJyZWR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFxdW90ZSB8fCAhYmFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWFya2V0SUQgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIikgKyBcIl9cIiArIGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICBsZXQgbWFya2V0TmFtZSA9IHF1b3RlLmdldChcInN5bWJvbFwiKSArIFwiOlwiICsgYmFzZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGxldCBkeW5hbWljX2RhdGEgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICBxdW90ZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhc2VfZHluYW1pY19kYXRhID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KFxuICAgICAgICAgICAgYmFzZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgcHJpY2UgPSB1dGlscy5jb252ZXJ0UHJpY2UocXVvdGUsIGJhc2UpO1xuXG4gICAgICAgIGxldCByb3dTdHlsZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGVmdEFsaWduKSB7XG4gICAgICAgICAgICByb3dTdHlsZXMudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnV0dG9uQ2xhc3MgPSBcImJ1dHRvbiBvdXRsaW5lXCI7XG4gICAgICAgIGxldCBidXR0b25TdHlsZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBhY3QpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzICs9IFwiIG5vLW1hcmdpblwiO1xuICAgICAgICAgICAgYnV0dG9uU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuNzVyZW1cIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweCAxMHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4wNXJlbVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnNcbiAgICAgICAgICAgIC5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhckNsYXNzID0gc3RhcnJlZCA/IFwiZ29sZC1zdGFyXCIgOiBcImdyZXktc3RhclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25TdGFyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIuc3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9sXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gc3RhdHMgPyBzdGF0cy52b2x1bWVCYXNlIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfdm9sdW1lKGFtb3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZSA9IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMgJiYgc3RhdHMuY2hhbmdlID8gc3RhdHMuY2hhbmdlIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZUNsYXNzID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT09IFwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYW5nZSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNoYW5nZS1kb3duXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ0ZXh0LXJpZ2h0IFwiICsgY2hhbmdlQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYW5nZSArIFwiJVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJrZXROYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFya2V0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJpY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbFByaWNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cyAmJiBzdGF0cy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0YXRzLnByaWNlLnRvUmVhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RhdHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5jbG9zZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0cy5jbG9zZS5xdW90ZS5hbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UuYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmNsb3NlLnF1b3RlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLnF1b3RlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaFByZWNpc2lvbkFzc2V0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJUQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT1BFTi5CVENcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJVREVYLkJUQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUlVERVguWEJUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHREVYLkJUQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU1BBUktERVguQlRDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJYQlRTWC5CVENcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdPTERcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNJTFZFUlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZWNpc2lvbiA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFByZWNpc2lvbkFzc2V0cy5pbmRleE9mKGJhc2UuZ2V0KFwic3ltYm9sXCIpKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gODtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxQcmljZSA+IDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpbmFsUHJpY2UgPiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicXVvdGVTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNfZGF0YSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNfZGF0YS5nZXQoXCJjdXJyZW50X3N1cHBseVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtxdW90ZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiYXNlU3VwcGx5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlX2R5bmFtaWNfZGF0YSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfZHluYW1pY19kYXRhLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Jhc2UuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaXNzdWVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50TmFtZSBhY2NvdW50PXtxdW90ZS5nZXQoXCJpc3N1ZXJcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2hlY2tNYXJrZXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiVGhpcyBtYXJrZXQgaXMgYSBkZWZhdWx0IG1hcmtldCBhbmQgY2Fubm90IGJlIHJlbW92ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmlzQ2hlY2tlZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0RlZmF1bHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMucmVtb3ZlTWFya2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dCBmbG9hdC1yaWdodCByZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5rZXkgPiBiLmtleTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcImNsaWNrYWJsZVwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYWN0aXZlTWFya2V0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17cm93U3R5bGVzfT5cbiAgICAgICAgICAgICAgICB7Y29sdW1uc31cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuTWFya2V0Um93ID0gd2l0aFJvdXRlcihNYXJrZXRSb3cpO1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldFdyYXBwZXIoTWFya2V0Um93LCB7XG4gICAgcHJvcE5hbWVzOiBbXCJxdW90ZVwiLCBcImJhc2VcIl0sXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHRlbXBDb21wb25lbnQ6IFwidHJcIlxuICAgIH0sXG4gICAgd2l0aER5bmFtaWM6IHRydWVcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuL0JpbmRUb0NoYWluU3RhdGVcIjtcclxuXHJcbi8qKlxyXG4gKiAgR2l2ZW4gYW4gYWNjb3VudCBpZCwgZGlzcGxheXMgdGhlIG5hbWUgb2YgdGhhdCBhY2NvdW50XHJcbiAqXHJcbiAqICBFeHBlY3RzIG9uZSBwcm9wZXJ0eSwgJ2FjY291bnQnIHdoaWNoIHNob3VsZCBiZSBhIGFjY291bnQgaWRcclxuICovXHJcblxyXG5jbGFzcyBBY2NvdW50TmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGF1dG9zdWJzY3JpYmU6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYWNjb3VudCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPnt0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKX08L3NwYW4+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEFjY291bnROYW1lKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogOVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBjb25zdCBzY3JvbGxfbGVuZ3RoID0gcHJvcHMuc2Nyb2xsX2xlbmd0aDtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkJvZHlDbGljayA9IHRoaXMub25Cb2R5Q2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnAuZW50cmllcywgdGhpcy5wcm9wcy5lbnRyaWVzKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5zLCB0aGlzLnN0YXRlKSB8fFxuICAgICAgICAgICAgbnAudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfc2V0TGlzdGVuZXIocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5lbnRyaWVzLmxlbmd0aCA+IDEgJiYgIXRoaXMubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkJvZHlDbGljaywge1xuICAgICAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3JlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQm9keUNsaWNrKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKG5wLmVudHJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG5wLmVudHJpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGlzdGVuZXIobnApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgb25Cb2R5Q2xpY2soZSkge1xuICAgICAgICBsZXQgZWwgPSBlLnRhcmdldDtcbiAgICAgICAgbGV0IGluc2lkZUFjdGlvblNoZWV0ID0gZmFsc2U7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdCAmJlxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duXCIpICYmXG4gICAgICAgICAgICAgICAgZWwuaWQgPT09IHRoaXMucHJvcHMuaWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGluc2lkZUFjdGlvblNoZWV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuXG4gICAgICAgIGlmICghaW5zaWRlQWN0aW9uU2hlZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogZmFsc2V9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZURyb3Bkb3duKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZTogIXRoaXMuc3RhdGUuYWN0aXZlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2VudHJpZXMsIHZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwiIHVwcGVyLWNhc2VcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaW5nbGVFbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5zaW5nbGVFbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZW50cmllc1swXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBlbnRyaWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMudXBwZXJDYXNlID8gXCJ1cHBlci1jYXNlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlRHJvcGRvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24td3JhcHBlclwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwiIHVwcGVyLWNhc2VcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUgPyB2YWx1ZSA6IDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlblwiPkE8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLmxlbmd0aCA+IHRoaXMucHJvcHMuc2Nyb2xsX2xlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0U2VsZWN0b3JcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1b3RlU2VsZWN0aW9uTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYmFja2luZ0Fzc2V0OiBcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgX29uTW92ZVVwKHF1b3RlKSB7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5wcm9wcy5xdW90ZXMuZmluZEluZGV4KHEgPT4gcSA9PT0gcXVvdGUpO1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcclxuICAgICAgICAgICAgb2xkSW5kZXg6IGlkeCxcclxuICAgICAgICAgICAgbmV3SW5kZXg6IGlkeCAtIDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Nb3ZlRG93bihxdW90ZSkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMucHJvcHMucXVvdGVzLmZpbmRJbmRleChxID0+IHEgPT09IHF1b3RlKTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMubW9kaWZ5UHJlZmVyZWRCYXNlcyh7XHJcbiAgICAgICAgICAgIG9sZEluZGV4OiBpZHgsXHJcbiAgICAgICAgICAgIG5ld0luZGV4OiBpZHggKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uUmVtb3ZlKHF1b3RlKSB7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5wcm9wcy5xdW90ZXMuZmluZEluZGV4KHEgPT4gcSA9PT0gcXVvdGUpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMubW9kaWZ5UHJlZmVyZWRCYXNlcyh7XHJcbiAgICAgICAgICAgICAgICByZW1vdmU6IGlkeFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uQWRkKHF1b3RlKSB7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5wcm9wcy5xdW90ZXMuZmluZEluZGV4KHEgPT4gcSA9PT0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpKTtcclxuICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMubW9kaWZ5UHJlZmVyZWRCYXNlcyh7XHJcbiAgICAgICAgICAgICAgICBhZGQ6IHF1b3RlLmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uSW5wdXRCYWNraW5nQXNzZXQoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYmFja2luZ0Fzc2V0OiBhc3NldC50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkZvdW5kQmFja2luZ0Fzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgaWYgKGFzc2V0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5xdW90ZXMuaW5jbHVkZXMoYXNzZXQuZ2V0KFwic3ltYm9sXCIpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNWYWxpZDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiQXNzZXQgYWxyZWFkeSBiZWluZyB1c2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7ZXJyb3J9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBxdW90ZUNvdW50ID0gdGhpcy5wcm9wcy5xdW90ZXMuc2l6ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdW90ZV9zZWxlY3Rpb25cIil9XHJcbiAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICBpZD1cInF1b3RlX3NlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJtb2RhbC5jbG9zZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5vLWJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5xdW90ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubW92ZV9kb3duXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tb3ZlX3VwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5yZW1vdmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5xdW90ZXMubWFwKChxLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aWR4ICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR4ICE9PSBxdW90ZUNvdW50IC0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbk1vdmVEb3duLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZXZyb24tZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkeCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbk1vdmVVcC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGV2cm9uLWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIHJvdGF0ZTE4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGVDb3VudCA+IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmUuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3Jvc3MtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleGNoYW5nZS5jdXN0b21fcXVvdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXRCYWNraW5nQXNzZXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnN0YXRlLmJhY2tpbmdBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SW5wdXQ9e3RoaXMuc3RhdGUuYmFja2luZ0Fzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvdW5kPXt0aGlzLl9vbkZvdW5kQmFja2luZ0Fzc2V0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbj17dGhpcy5fb25BZGQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbl9sYWJlbD1cImV4Y2hhbmdlLmFkZF9xdW90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9uPXshIWVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWFyZWFcIj57ZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQVRBO0FBWUE7QUFDQTs7OztBQTdEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBeEVBO0FBMEVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUEvQkE7QUFrQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFGQTtBQWFBOzs7O0FBalNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBa1NBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUEyUEE7QUFDQTtBQUNBO0FBN1BBO0FBK1BBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFoUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFzQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFzQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQWJBO0FBQ0E7QUFJQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQ0E7QUFhQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFDQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFSQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFQQTtBQWRBO0FBeUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQURBO0FBVkE7QUF3QkE7QUF6Q0E7QUEyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQURBO0FBREE7QUFuREE7QUFxRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQXRCQTtBQURBO0FBREE7QUE0QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBSkE7QUF6QkE7QUFEQTtBQTdCQTtBQURBO0FBUEE7QUF5RkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQVpBO0FBaENBO0FBaURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQVJBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBMEJBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBckRBO0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXpVQTtBQWlWQTs7OztBQXAzQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQW8zQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFJQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFKQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFUQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBcUJBO0FBV0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQU5BO0FBTEE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQU1BO0FBUkE7QUFMQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQU5BO0FBUEE7QUFSQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBaUJBO0FBQ0E7QUFuUEE7QUFxUEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7O0FBdFZBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQXNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBWkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVJBO0FBU0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFTQTtBQVRBO0FBWEE7QUF3QkE7QUFDQTs7OztBQTVKQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFNQTtBQURBO0FBQ0E7QUFDQTtBQXdKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFYQTtBQURBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQU5BO0FBRkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQU5BO0FBRkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQU5BO0FBRkE7QUEzQkE7QUF5Q0E7QUE1Q0E7QUFsQkE7QUFrRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkQTtBQXJFQTtBQWJBO0FBcUdBOzs7O0FBMUtBO0FBQ0E7QUFEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9