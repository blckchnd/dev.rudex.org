(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[15],{

/***/ 2833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2834);
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

/***/ 2858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2793);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2795);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(592);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2502);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1907);
/* harmony import */ var _MarketRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2859);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(746);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2399);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2422);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2152);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(747);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2423);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2400);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(761);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2861);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(608);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2009);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(441);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2161);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(754);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2156);
/* harmony import */ var _QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2863);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2864);


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
                            if (possibleGatewayAssetName == "RUDEX.RUBLE") return null;
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

            var translator = __webpack_require__(608);

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

/***/ 2859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2169);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2149);
/* harmony import */ var _Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2860);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2826);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(592);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1915);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2400);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(747);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1867);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(757);
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

/***/ 2860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2025);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2026);
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

/***/ 2862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(592);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(851);
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

/***/ 2863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1915);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2861);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(747);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(608);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(757);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2V+ZXhwbG9yZXIuNWYzNGVkZTY4YzkyNDc4NGNhNzAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL015TWFya2V0cy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldFJvdy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQWNjb3VudE5hbWUuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Zsb2F0aW5nRHJvcGRvd24uanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9RdW90ZVNlbGVjdGlvbk1vZGFsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbkdyb3VwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJzcGFuXCIsXHJcbiAgICAgICAgZW50ZXJUaW1lb3V0OiAyMDAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5wcm9wcy5jb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3RoaXMucHJvcHMudHJhbnNpdGlvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17dGhpcy5wcm9wcy5lbnRlclRpbWVvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyPXt0aGlzLnN0YXRlLmFuaW1hdGVFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBNYXJrZXRSb3cgZnJvbSBcIi4vTWFya2V0Um93XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHtDaGFpblZhbGlkYXRpb24sIENoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcywgZ2F0ZXdheVByZWZpeGVzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlzXCI7XG5pbXBvcnQgUXVvdGVTZWxlY3Rpb25Nb2RhbCBmcm9tIFwiLi9RdW90ZVNlbGVjdGlvbk1vZGFsXCI7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1V0aWxpdHkvU2VhcmNoSW5wdXRcIjtcblxuY2xhc3MgTWFya2V0R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG1heFJvd3M6IDIwLFxuICAgICAgICBvbmx5TGlxdWlkOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKHByb3BzKSB7XG4gICAgICAgIGxldCBvcGVuID0gcHJvcHMuZmluZE1hcmtldFRhYlxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoYG15TWFya2V0c0Jhc2VfJHtwcm9wcy5pbmRleH1gKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wZW46IG9wZW4gIT09IHVuZGVmaW5lZCA/IG9wZW4gOiB0cnVlLFxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNJbnZlcnRcIiwgdHJ1ZSksXG4gICAgICAgICAgICBzb3J0Qnk6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNTb3J0XCIsIFwidm9sdW1lXCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5maW5kTWFya2V0VGFiICE9PSB0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0SW5pdGlhbFN0YXRlKG5leHRQcm9wcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmICghbmV4dFByb3BzLm1hcmtldHMgfHwgIXRoaXMucHJvcHMubWFya2V0cykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLm1hcmtldHMsIHRoaXMucHJvcHMubWFya2V0cykgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkTWFya2V0cyAhPT0gdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm1hcmtldFN0YXRzICE9PSB0aGlzLnByb3BzLm1hcmtldFN0YXRzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMudXNlck1hcmtldHMgIT09IHRoaXMucHJvcHMudXNlck1hcmtldHNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfaW52ZXJzZVNvcnQoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBteU1hcmtldHNJbnZlcnQ6ICF0aGlzLnN0YXRlLm15TWFya2V0c0ludmVydFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnZlcnNlU29ydDogIXRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoYW5nZVNvcnQodHlwZSkge1xuICAgICAgICBpZiAodHlwZSAhPT0gdGhpcy5zdGF0ZS5zb3J0QnkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgbXlNYXJrZXRzU29ydDogdHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW52ZXJzZVNvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIF9vblNlbGVjdEJhc2UoZSkge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAvLyAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZUJhc2UodGhpcy5wcm9wcy5pbmRleCwgZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIH1cblxuICAgIF9vblRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIGxldCBvcGVuID0gIXRoaXMuc3RhdGUub3BlbjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wZW46IG9wZW5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICAgICAgc2V0dGluZ1tgbXlNYXJrZXRzQmFzZV8ke3RoaXMucHJvcHMuaW5kZXh9YF0gPSBvcGVuO1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVG9nZ2xlVXNlck1hcmtldChtYXJrZXQpIHtcbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPSBtYXJrZXQuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy51c2VyTWFya2V0cy5nZXQobWFya2V0KTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnNldFVzZXJNYXJrZXQoYmFzZSwgcXVvdGUsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgbWFya2V0cyxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBtYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgY3VycmVudFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtzb3J0QnksIGludmVyc2VTb3J0LCBvcGVufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFtYXJrZXRzIHx8ICFtYXJrZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGVhZGVycyA9IGNvbHVtbnMubWFwKGhlYWRlciA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGhlYWRlci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1hcmtldFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVNvcnQuYmluZCh0aGlzLCBcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwidm9sXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlU29ydC5iaW5kKHRoaXMsIFwidm9sdW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbF9zaG9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInByaWNlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwicXVvdGVTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5iYXNlX3N1cHBseVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImJhc2VTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5xdW90ZV9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VTb3J0LmJpbmQodGhpcywgXCJjaGFuZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiaXNzdWVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLmlzc3VlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aGVhZGVyLm5hbWV9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0uY29uZmlybV9hZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5PXtoZWFkZXIubmFtZX0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtYXJrZXRSb3dzID0gbWFya2V0c1xuICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkICYmXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmdldChtYXJrZXQuaWQpICYmXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmdldChtYXJrZXQuaWQpLnZvbHVtZUJhc2UgPT0gMFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtldFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttYXJrZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlID09PSBcIm90aGVyc1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17bWFya2V0LnF1b3RlfSAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17bWFya2V0LmJhc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e21hcmtldC5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17bWFya2V0LnF1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17bWFya2V0LmJhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFsaWduPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vU3ltYm9scz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzPXttYXJrZXRTdGF0cy5nZXQobWFya2V0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWQ9e3N0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudCA9PT0gbWFya2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt0aGlzLnByb3BzLnVzZXJNYXJrZXRzLmhhcyhtYXJrZXQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0cy5oYXMobWFya2V0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja01hcmtldD17dGhpcy5fb25Ub2dnbGVVc2VyTWFya2V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYV9zeW1ib2xzID0gYS5rZXkuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgICAgIGxldCBiX3N5bWJvbHMgPSBiLmtleS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICAgICAgbGV0IGFTdGF0cyA9IG1hcmtldFN0YXRzLmdldChhX3N5bWJvbHNbMF0gKyBcIl9cIiArIGFfc3ltYm9sc1sxXSk7XG4gICAgICAgICAgICAgICAgbGV0IGJTdGF0cyA9IG1hcmtldFN0YXRzLmdldChiX3N5bWJvbHNbMF0gKyBcIl9cIiArIGJfc3ltYm9sc1sxXSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNvcnRCeSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFfc3ltYm9sc1swXSA+IGJfc3ltYm9sc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYV9zeW1ib2xzWzBdIDwgYl9zeW1ib2xzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludmVyc2VTb3J0ID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYV9zeW1ib2xzWzFdID4gYl9zeW1ib2xzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFfc3ltYm9sc1sxXSA8IGJfc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2x1bWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhU3RhdHMgJiYgYlN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludmVyc2VTb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiU3RhdHMudm9sdW1lQmFzZSAtIGFTdGF0cy52b2x1bWVCYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhU3RhdHMudm9sdW1lQmFzZSAtIGJTdGF0cy52b2x1bWVCYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFTdGF0cyAmJiBiU3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW52ZXJzZVNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJTdGF0cy5jaGFuZ2UgLSBhU3RhdHMuY2hhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhU3RhdHMuY2hhbmdlIC0gYlN0YXRzLmNoYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19PlxuICAgICAgICAgICAgICAgIHtvcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj57aGVhZGVyc308L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRSb3dzICYmIG1hcmtldFJvd3MubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57bWFya2V0Um93c308L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIE15TWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYWN0aXZlVGFiOiBcIm15LW1hcmtldFwiLFxuICAgICAgICBzZXRNaW5XaWR0aDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNRdW90ZU1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c0ludmVydFwiLCB0cnVlKSxcbiAgICAgICAgICAgIHNvcnRCeTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c1NvcnRcIiwgXCJ2b2x1bWVcIiksXG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJmYXZNYXJrZXRUYWJcIiwgXCJteS1tYXJrZXRcIiksXG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJhY3RpdmVNYXJrZXRUYWJcIiwgMCksXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogbnVsbCxcbiAgICAgICAgICAgIGxvb2t1cEJhc2U6IG51bGwsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgZmluZEJhc2VJbnB1dDogXCJCVFNcIixcbiAgICAgICAgICAgIGFjdGl2ZUZpbmRCYXNlOiBcIkJUU1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0TWluV2lkdGggPSB0aGlzLl9zZXRNaW5XaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdCA9IGRlYm91bmNlKEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIsIDE1MCk7XG5cbiAgICAgICAgdGhpcy5zaG93UXVvdGVNb2RhbCA9IHRoaXMuc2hvd1F1b3RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUXVvdGVNb2RhbCA9IHRoaXMuaGlkZVF1b3RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgLyogVHJpZ2dlciBhIGxvb2t1cCB3aGVuIHN3aXRjaGluZyB0YWJzIHRvIGZpbmQtbWFya2V0ICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSBcImZpbmQtbWFya2V0XCIgJiZcbiAgICAgICAgICAgIG5leHRTdGF0ZS5hY3RpdmVUYWIgPT09IFwiZmluZC1tYXJrZXRcIiAmJlxuICAgICAgICAgICAgIW5leHRQcm9wcy5zZWFyY2hBc3NldHMuc2l6ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvb2t1cEFzc2V0cyhcIlJVREVYLlwiLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVRhYiAhPT0gbmV4dFN0YXRlLmFjdGl2ZVRhYikge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKG5leHRTdGF0ZS5hY3RpdmVUYWIpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgIW5leHRQcm9wcy50YWJIZWFkZXIgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSBuZXh0UHJvcHMuYWN0aXZlVGFiXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKG5leHRQcm9wcy5hY3RpdmVUYWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLnNlYXJjaEFzc2V0cywgdGhpcy5wcm9wcy5zZWFyY2hBc3NldHMpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5tYXJrZXRzLCB0aGlzLnByb3BzLm1hcmtldHMpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5kZWZhdWx0TWFya2V0cyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5tYXJrZXRTdGF0cywgdGhpcy5wcm9wcy5tYXJrZXRTdGF0cykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMubWluV2lkdGggIT09IHRoaXMucHJvcHMubWluV2lkdGggfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5saXN0SGVpZ2h0ICE9PSB0aGlzLnByb3BzLmxpc3RIZWlnaHQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5wcmVmZXJyZWRCYXNlcyAhPT0gdGhpcy5wcm9wcy5wcmVmZXJyZWRCYXNlcyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm9ubHlTdGFycyAhPT0gdGhpcy5wcm9wcy5vbmx5U3RhcnMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vbmx5TGlxdWlkICE9PSB0aGlzLnByb3BzLm9ubHlMaXF1aWQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hc3NldHNMb2FkaW5nICE9PSB0aGlzLnByb3BzLmFzc2V0c0xvYWRpbmcgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy51c2VyTWFya2V0cyAhPT0gdGhpcy5wcm9wcy51c2VyTWFya2V0c1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0TWluV2lkdGgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldE1pbldpZHRoLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJycmVudCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJhc2UgPSB0aGlzLnByb3BzLmN1cnJlbnQuc3BsaXQoXCJfXCIpWzFdO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5wcm9wcy5wcmVmZXJyZWRCYXNlcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgYSA9PiBhID09PSBjdXJyZW50QmFzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggIT09IC0xICYmXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICE9PSB0aGlzLnN0YXRlLmFjdGl2ZU1hcmtldFRhYlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlTWFya2V0VGFiOiBjdXJyZW50SW5kZXh9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgaGlzdG9yeUNvbnRhaW5lciA9IHRoaXMucmVmcy5mYXZvcml0ZXM7XG4gICAgICAgIFBzLmluaXRpYWxpemUoaGlzdG9yeUNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5fc2V0TWluV2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUYWIgPT09IFwiZmluZC1tYXJrZXRcIikge1xuICAgICAgICAgICAgdGhpcy5fbG9va3VwQXNzZXRzKFwiUlVERVguXCIsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSB0aGlzLnByb3BzLmFjdGl2ZVRhYikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKHRoaXMucHJvcHMuYWN0aXZlVGFiKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0TWluV2lkdGgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldE1pbldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5teU1hcmtldFRhYiAmJiAhbnAubXlNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuZmluZFNlYXJjaElucHV0KSB0aGlzLnJlZnMuZmluZFNlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlUXVvdGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1F1b3RlTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UXVvdGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1F1b3RlTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRNaW5XaWR0aCgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRNaW5XaWR0aCAmJlxuICAgICAgICAgICAgdGhpcy5yZWZzLmZhdm9yaXRlcyAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmVUYWIgPT09IFwibXktbWFya2V0XCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5taW5XaWR0aCAhPT0gdGhpcy5yZWZzLmZhdm9yaXRlcy5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5yZWZzLmZhdm9yaXRlcy5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yZWZzLmZhdm9yaXRlcykge1xuICAgICAgICAgICAgbGV0IGhpc3RvcnlDb250YWluZXIgPSB0aGlzLnJlZnMuZmF2b3JpdGVzO1xuICAgICAgICAgICAgUHMudXBkYXRlKGhpc3RvcnlDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ludmVyc2VTb3J0KCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgbXlNYXJrZXRzSW52ZXJ0OiAhdGhpcy5zdGF0ZS5teU1hcmtldHNJbnZlcnRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGFuZ2VTb3J0KHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09IHRoaXMuc3RhdGUuc29ydEJ5KSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIG15TWFya2V0c1NvcnQ6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc29ydEJ5OiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ludmVyc2VTb3J0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ29NYXJrZXRzKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9tYXJrZXRzXCIpO1xuICAgIH1cblxuICAgIF9jaGFuZ2VUYWIodGFiKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBmYXZNYXJrZXRUYWI6IHRhYlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVUYWI6IHRhYlxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zZXRNaW5XaWR0aCgpO1xuICAgIH1cblxuICAgIF9vbklucHV0TmFtZShnZXRCYWNrZWRBc3NldHMsIGUpIHtcbiAgICAgICAgbGV0IHRvRmluZCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBsZXQgaXNWYWxpZE5hbWUgPSAhQ2hhaW5WYWxpZGF0aW9uLmlzX3ZhbGlkX3N5bWJvbF9lcnJvcih0b0ZpbmQsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogdG9GaW5kXG4gICAgICAgIH0pO1xuICAgICAgICAvKiBEb24ndCBsb29rdXAgaW52YWxpZCBhc3NldCBuYW1lcyAqL1xuICAgICAgICBpZiAodG9GaW5kICYmIHRvRmluZC5sZW5ndGggPj0gMiAmJiAhaXNWYWxpZE5hbWUpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSB0b0ZpbmQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9va3VwQXNzZXRzKHRvRmluZCwgZ2V0QmFja2VkQXNzZXRzKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgX2xvb2t1cEFzc2V0cyh2YWx1ZSwgZ2F0ZXdheUFzc2V0cyA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IFwiXCIpIHJldHVybjtcblxuICAgICAgICBsZXQgc3ltYm9scyA9IHZhbHVlLnRvVXBwZXJDYXNlKCkuc3BsaXQoXCI6XCIpO1xuICAgICAgICBsZXQgcXVvdGUgPSBzeW1ib2xzWzBdO1xuICAgICAgICBsZXQgYmFzZSA9IHN5bWJvbHMubGVuZ3RoID09PSAyID8gc3ltYm9sc1sxXSA6IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb29rdXBRdW90ZTogcXVvdGUsXG4gICAgICAgICAgICBsb29rdXBCYXNlOiBiYXNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZy5kZWZlcih7XG4gICAgICAgICAgICBtYXJrZXRMb29rdXBJbnB1dDogdmFsdWUudG9VcHBlckNhc2UoKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdChxdW90ZSwgNTAsIGdhdGV3YXlBc3NldHMpO1xuICAgIH1cblxuICAgIHRvZ2dsZUFjdGl2ZU1hcmtldFRhYihpbmRleCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiOiBpbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZU1hcmtldFRhYjogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uSW5wdXRCYXNlQXNzZXQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaW5kQmFzZUlucHV0OiBhc3NldC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uRm91bmRCYXNlQXNzZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVGaW5kQmFzZTogYXNzZXQuZ2V0KFwic3ltYm9sXCIpfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcklucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtteU1hcmtldEZpbHRlcjogXCJcIn0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTZWFyY2hVcGRhdGUgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBteU1hcmtldEZpbHRlcjogZS50YXJnZXQudmFsdWUgJiYgZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2dldE1hcmtldHMoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNlYXJjaEFzc2V0cyxcbiAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzLFxuICAgICAgICAgICAgb25seVN0YXJzLFxuICAgICAgICAgICAgdXNlck1hcmtldHMsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmVUYWIsXG4gICAgICAgICAgICBsb29rdXBRdW90ZSxcbiAgICAgICAgICAgIGxvb2t1cEJhc2UsXG4gICAgICAgICAgICBteU1hcmtldEZpbHRlcixcbiAgICAgICAgICAgIGFjdGl2ZU1hcmtldFRhYlxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgcG9zc2libGVHYXRld2F5QXNzZXRzID0gZ2V0UG9zc2libGVHYXRld2F5UHJlZml4ZXMoXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBiYXNlcyA9IHRoaXMuX2dldEJhc2VzKCk7XG4gICAgICAgIGxldCBhbGxNYXJrZXRzID0gW10sXG4gICAgICAgICAgICBiYXNlR3JvdXBzID0ge307XG4gICAgICAgIGxldCBvdGhlck1hcmtldHMgPSBbXTtcblxuICAgICAgICBjb25zdCBteU1hcmtldFRhYiA9IGFjdGl2ZVRhYiA9PT0gXCJteS1tYXJrZXRcIjtcblxuICAgICAgICBpZiAoc2VhcmNoQXNzZXRzLnNpemUpIHtcbiAgICAgICAgICAgIHNlYXJjaEFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5vcHRpb25zLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShhLm9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInZpc2libGVcIiBpbiBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uLnZpc2libGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuc3ltYm9sLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wubGVuZ3RoID49IGxvb2t1cFF1b3RlLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBiYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gYXNzZXQuc3ltYm9sICsgXCJfXCIgKyBiYXNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZSAhPT0gYXNzZXQuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTWFya2V0cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90ZTogYXNzZXQuc3ltYm9sLCBiYXNlOiBiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsbE1hcmtldHMgPSBhbGxNYXJrZXRzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIC8vIElmIGEgYmFzZSBhc3NldCBpcyBzcGVjaWZpZWQsIGxpbWl0IHRoZSBxdW90ZSBhc3NldCB0byB0aGUgZXhhY3Qgc2VhcmNoIHRlcm1cbiAgICAgICAgICAgIGlmIChsb29rdXBCYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMV0ucXVvdGUgPT09IGxvb2t1cFF1b3RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhY3RpdmVNYXJrZXRzID0gbXlNYXJrZXRUYWJcbiAgICAgICAgICAgID8gZGVmYXVsdE1hcmtldHNcbiAgICAgICAgICAgIDogSW1tdXRhYmxlLk1hcChhbGxNYXJrZXRzKTtcbiAgICAgICAgaWYgKG15TWFya2V0VGFiICYmIHVzZXJNYXJrZXRzLnNpemUpIHtcbiAgICAgICAgICAgIHVzZXJNYXJrZXRzLmZvckVhY2goKG1hcmtldCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVNYXJrZXRzLmhhcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVNYXJrZXRzID0gYWN0aXZlTWFya2V0cy5zZXQoa2V5LCBtYXJrZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaWx0ZXJBbmRTZXBhcmF0ZU1hcmtldHMoXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgbWF0Y2hCYXNlcyxcbiAgICAgICAgICAgIG1hcmtldHMsXG4gICAgICAgICAgICBiYXNlR3JvdXBzLFxuICAgICAgICAgICAgb3RoZXJNYXJrZXRzXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IG90aGVycyA9IG1hcmtldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5iYXNlID09PSBhLnF1b3RlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8qIFJldHVybiBzZWFyY2ggcmVzdWx0cyBpbiB0aGUgRmluZCBNYXJrZXRzIFRhYiAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW15TWFya2V0VGFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwUXVvdGUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucXVvdGUuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIGZpbHRlcmVkIG1hcmtldHMgaWYgYSBmaWx0ZXIgaXMgaW5wdXQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IElEID0gYS5xdW90ZSArIFwiX1wiICsgYS5iYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhbXlNYXJrZXRGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSUQuaW5kZXhPZihteU1hcmtldEZpbHRlcikgIT09IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIG9ubHkgc3RhcnJlZCBtYXJrZXRzIGlmIHRoYXQgb3B0aW9uIGlzIGNoZWNrZWQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmx5U3RhcnMgJiYgIXN0YXJyZWRNYXJrZXRzLmhhcyhJRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFbHNlIHJldHVybiBhbGwgbWFya2V0cyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAobWFya2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gbWFya2V0LnF1b3RlICsgXCJfXCIgKyBtYXJrZXQuYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoQmFzZXMuaW5kZXhPZihtYXJrZXQuYmFzZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2VHcm91cHNbYmFzZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlR3JvdXBzW2Jhc2VdID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0T2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbWFya2V0LnF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG1hcmtldC5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlR3JvdXBzW2Jhc2VdLmZpbmQobSA9PiBtLmlkID09PSBtYXJrZXRJRCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUdyb3Vwc1tiYXNlXS5wdXNoKG1hcmtldE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICFwcmVmZXJyZWRCYXNlcy5pbmNsdWRlcyhtYXJrZXQuYmFzZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlR2F0ZXdheUFzc2V0cy5pbmRleE9mKG1hcmtldC5iYXNlKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFkZGluZyB0byBvdGhlciBtYXJrZXRzOlwiLCBiYXNlLCBtYXJrZXQuYmFzZSwgcHJlZmVycmVkQmFzZXMudG9KUygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWFya2V0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG1hcmtldC5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBtYXJrZXQuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgICAgICAudGFrZShteU1hcmtldFRhYiA/IDEwMCA6IDIwKVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgICAgICByZXR1cm4ge290aGVyTWFya2V0czogb3RoZXJzLmNvbmNhdChvdGhlck1hcmtldHMpLCBiYXNlR3JvdXBzfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVNYXJrZXRzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QmFzZSA9IG15TWFya2V0VGFiXG4gICAgICAgICAgICAgICAgPyBwcmVmZXJyZWRCYXNlcy5nZXQoYWN0aXZlTWFya2V0VGFiKVxuICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5hY3RpdmVGaW5kQmFzZTtcblxuICAgICAgICAgICAgKHtvdGhlck1hcmtldHMsIGJhc2VHcm91cHN9ID0gZmlsdGVyQW5kU2VwYXJhdGVNYXJrZXRzKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRCYXNlLFxuICAgICAgICAgICAgICAgIFtjdXJyZW50QmFzZV0sXG4gICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0cyxcbiAgICAgICAgICAgICAgICBiYXNlR3JvdXBzLFxuICAgICAgICAgICAgICAgIG90aGVyTWFya2V0c1xuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIC8qIENoZWNrIGZvciBwb3NzaWJsZSBnYXRld2F5IHZlcnNpb25zIG9mIHRoZSBhc3NldCAqL1xuICAgICAgICAgICAgZ2F0ZXdheVByZWZpeGVzLmZvckVhY2gocHJlZml4ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zc2libGVHYXRld2F5QXNzZXROYW1lID0gYCR7cHJlZml4fS4ke2N1cnJlbnRCYXNlfWA7XG4gICAgICAgICAgICAgICAgbGV0IGdhdGV3YXlBc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLyogSWYgdGhlIGdhdGV3YXkgb2ZmZXJzIGFuIGFzc2V0IGZvciB0aGlzIGJhc2UsIGFkZCBpdCB0byB0aGUgbGlzdCAqL1xuICAgICAgICAgICAgICAgIGlmICghIWdhdGV3YXlBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2F0ZXdheU1hcmtldHMgPSBhY3RpdmVNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLnF1b3RlID09PSBtLmJhc2UpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJRCA9IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLnF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV8ke3Bvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVNYXJrZXRzLmhhcyhuZXdJRCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWUgPT0gXCJSVURFWC5SVUJMRVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBtLnF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihtID0+ICEhbSk7XG4gICAgICAgICAgICAgICAgICAgICh7b3RoZXJNYXJrZXRzLCBiYXNlR3JvdXBzfSA9IGZpbHRlckFuZFNlcGFyYXRlTWFya2V0cyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2N1cnJlbnRCYXNlLCBwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2F0ZXdheU1hcmtldHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlR3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtiYXNlR3JvdXBzLCBvdGhlck1hcmtldHN9O1xuICAgIH1cblxuICAgIF9nZXRCYXNlcygpIHtcbiAgICAgICAgbGV0IHtwcmVmZXJyZWRCYXNlcywgc2VhcmNoQXNzZXRzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7bG9va3VwUXVvdGUsIGxvb2t1cEJhc2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgYmFzZXMgPSBzZWFyY2hBc3NldHNcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2t1cEJhc2UgJiYgbG9va3VwQmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuc3ltYm9sLmluZGV4T2YobG9va3VwQmFzZSkgPT09IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbC5pbmRleE9mKGxvb2t1cFF1b3RlKSAhPT0gLTE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvb2t1cEJhc2UgJiYgbG9va3VwQmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0LnN5bWJvbC5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXQuc3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVmZXJyZWRCYXNlcy5pbmNsdWRlcyhhc3NldC5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbC5sZW5ndGggPj0gbG9va3VwUXVvdGUubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wubGVuZ3RoIDwgbG9va3VwUXVvdGUubGVuZ3RoICsgM1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3NldC5zeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgIC50b0FycmF5KCk7XG5cbiAgICAgICAgYmFzZXMgPSBiYXNlcy5jb25jYXQoXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbG9va3VwQmFzZSB8fCAhbG9va3VwQmFzZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4T2YobG9va3VwQmFzZSkgPT09IDA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgYmFzZXMgPSBiYXNlcy5maWx0ZXIoYmFzZSA9PiB7XG4gICAgICAgICAgICBpZiAobG9va3VwQmFzZSAmJiBsb29rdXBCYXNlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZS5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJhc2VzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgbWFya2V0U3RhdHMsXG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgYXNzZXRzTG9hZGluZyxcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzLFxuICAgICAgICAgICAgY3VycmVudCxcbiAgICAgICAgICAgIHZpZXdTZXR0aW5ncyxcbiAgICAgICAgICAgIGxpc3RIZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlTWFya2V0VGFiLCBhY3RpdmVUYWJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBteU1hcmtldFRhYiA9IGFjdGl2ZVRhYiA9PT0gXCJteS1tYXJrZXRcIjtcbiAgICAgICAgbGV0IGRlZmF1bHRCYXNlcyA9IHByZWZlcnJlZEJhc2VzLm1hcChhID0+IGEpO1xuXG4gICAgICAgIGlmICghbXlNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzID0gcHJlZmVycmVkQmFzZXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzID0gcHJlZmVycmVkQmFzZXMucHVzaCh0aGlzLnN0YXRlLmFjdGl2ZUZpbmRCYXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBzb21lIGRlZmF1bHQgYmFzZSBvcHRpb25zXG4gICAgICAgIC8vIGxldCBwcmVmZXJyZWRCYXNlcyA9IFtjb3JlU3ltYm9sLCBcIkJUQ1wiLCBcIlVTRFwiLCBcIkNOWVwiXTtcblxuICAgICAgICAvKiBJbiB0aGUgZmluZC1tYXJrZXQgdGFiLCBvbmx5IHVzZSBtYXJrZXQgdGFiIDAgKi9cbiAgICAgICAgaWYgKCFteU1hcmtldFRhYikgYWN0aXZlTWFya2V0VGFiID0gMDtcblxuICAgICAgICBsZXQge2Jhc2VHcm91cHMsIG90aGVyTWFya2V0c30gPSB0aGlzLl9nZXRNYXJrZXRzKCk7XG4gICAgICAgIGNvbnN0IGhhc090aGVycyA9IG90aGVyTWFya2V0cyAmJiBvdGhlck1hcmtldHMubGVuZ3RoO1xuICAgICAgICBsZXQgaGMgPSBcIm15bWFya2V0cy1oZWFkZXIgY2xpY2thYmxlXCI7XG4gICAgICAgIGxldCBzdGFyQ2xhc3MgPSBjbmFtZXMoaGMsIHtpbmFjdGl2ZTogIW15TWFya2V0VGFifSk7XG4gICAgICAgIGxldCBhbGxDbGFzcyA9IGNuYW1lcyhoYywge2luYWN0aXZlOiBteU1hcmtldFRhYn0pO1xuXG4gICAgICAgIGxldCBsaXN0U3R5bGUgPSB7XG4gICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5zdGF0ZS5taW5XaWR0aCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogXCI2cmVtXCJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGxpc3RIZWlnaHQpIHtcbiAgICAgICAgICAgIGxpc3RTdHlsZS5oZWlnaHQgPSBsaXN0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJhbnNsYXRvciA9IHJlcXVpcmUoXCJjb3VudGVycGFydFwiKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGFiSGVhZGVyID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIGxlZnQtb3JkZXJib29rLWhlYWRlciBib3R0b20taGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIm15TWFya2V0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcywgXCJteS1tYXJrZXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbnRybz17dHJhbnNsYXRvci50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2gubXlfbWFya2V0c190YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthbGxDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VUYWIuYmluZCh0aGlzLCBcImZpbmQtbWFya2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e3RyYW5zbGF0b3IudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLmZpbmRfbWFya2V0c190YWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubW9yZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9IZWFkZXIgfHwgdGhpcy5wcm9wcy50YWJIZWFkZXIgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLmhlYWRlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjaGFuZ2UtY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0X25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbHMgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsLTEyIG1lZGl1bS02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxcmVtIDBcIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2xzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjAuNXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2xzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogeyFteU1hcmtldFRhYiA/IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IG9uQ2hhbmdlPXt0aGlzLl9sb29rdXBBc3NldHMuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJTWU1CT0w6U1lNQk9MXCIgLz4gOiBudWxsfSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7bXlNYXJrZXRUYWIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgc2hyaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuNXJlbSAwLjc1cmVtIDAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e21hcmdpbjogXCIzcHggMCAwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMub25seUxpcXVpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seUxpcXVpZDogIXRoaXMucHJvcHMub25seUxpcXVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjRyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc2hvd19vbmx5X2xpcXVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e21hcmdpbjogXCIzcHggMCAwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMub25seVN0YXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy50b2dnbGVTdGFycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjRyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cImV4Y2hhbmdlLnNob3dfb25seV9zdGFyX2Zvcm1hdHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImZpLXN0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJnb2xkLXN0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJzdGFyX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC45cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW1hcmdpbiBtYXJrZXQtZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5teU1hcmtldEZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hVcGRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNzVyZW0gMC41cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQXNzZXRTZWxlY3Q9e3RoaXMuX29uRm91bmRCYXNlQXNzZXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtkZWZhdWx0QmFzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0QmFzZUFzc2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnN0YXRlLmZpbmRCYXNlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SW5wdXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maW5kQmFzZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm91bmQ9e3RoaXMuX29uRm91bmRCYXNlQXNzZXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleGNoYW5nZS5xdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTdHlsZT17e2ZvbnRTaXplOiBcIjAuOXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjlyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25JbnB1dE5hbWUuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJmaW5kU2VhcmNoSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXNzZXROYW1lRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yLWFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZEJyZWFrOiBcImJyZWFrLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5pbnZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJteW1hcmtldHMtdGFic1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBRdW90ZSBlZGl0IHRhYiAqL31cbiAgICAgICAgICAgICAgICAgICAge215TWFya2V0VGFiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInF1b3RlX2VkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93UXVvdGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteW1hcmtldHMtdGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsrJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7IW15TWFya2V0VGFiICYmICF0aGlzLnN0YXRlLmlucHV0VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmVmZXJyZWRCYXNlcy5tYXAoKGJhc2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2UpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFjdGl2ZU1hcmtldFRhYi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwibXltYXJrZXRzLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGFjdGl2ZU1hcmtldFRhYiA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFzZS5yZXBsYWNlKFwiUlVERVguXCIsIFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAge215TWFya2V0VGFiICYmIGhhc090aGVycyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJvdGhlcnNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWN0aXZlTWFya2V0VGFiLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzLnNpemUgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcIm15bWFya2V0cy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWIgPT09IHByZWZlcnJlZEJhc2VzLnNpemUgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uub3RoZXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtsaXN0U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lciBncmlkLWJsb2NrIHZlcnRpY2FsIG15bWFya2V0cy1saXN0XCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmF2b3JpdGVzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHthc3NldHNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiM3JlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cInRocmVlLWJvdW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtwcmVmZXJyZWRCYXNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSA9PT0gcHJlZmVycmVkQmFzZXMuZ2V0KGFjdGl2ZU1hcmtldFRhYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoYmFzZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJNYXJrZXRzPXt0aGlzLnByb3BzLnVzZXJNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1hcmtldHM9e3RoaXMucHJvcHMuZGVmYXVsdE1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NoYW5nZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Jhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM9e3N0YXJyZWRNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHM9e21hcmtldFN0YXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld1NldHRpbmdzPXt2aWV3U2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcmtldFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmZpbmRDb2x1bW5zIHx8IGNvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldHM9e2Jhc2VHcm91cHNbYmFzZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17bXlNYXJrZXRUYWIgPyAyMCA6IDEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZE1hcmtldFRhYj17IW15TWFya2V0VGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5TGlxdWlkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9ubHlMaXF1aWQgJiYgbXlNYXJrZXRUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVNYXJrZXRUYWIgPT09IHByZWZlcnJlZEJhc2VzLnNpemUgKyAxICYmXG4gICAgICAgICAgICAgICAgICAgIG15TWFya2V0VGFiICYmXG4gICAgICAgICAgICAgICAgICAgIGhhc090aGVycyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZXRHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJNYXJrZXRzPXt0aGlzLnByb3BzLnVzZXJNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtwcmVmZXJyZWRCYXNlcy5zaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM9e3N0YXJyZWRNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzPXttYXJrZXRTdGF0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3U2V0dGluZ3M9e3ZpZXdTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldHM9e290aGVyTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPVwib3RoZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXtteU1hcmtldFRhYiA/IDIwIDogMTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZE1hcmtldFRhYj17IW15TWFya2V0VGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxRdW90ZVNlbGVjdGlvbk1vZGFsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNRdW90ZU1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmhpZGVRdW90ZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3RoaXMuc2hvd1F1b3RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIHF1b3Rlcz17dGhpcy5wcm9wcy5wcmVmZXJyZWRCYXNlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5NeU1hcmtldHMgPSBkZWJvdW5jZVJlbmRlcihNeU1hcmtldHMsIDUwLCB7bGVhZGluZzogZmFsc2V9KTtcblxuY2xhc3MgTXlNYXJrZXRzV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE15TWFya2V0cyB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIE15TWFya2V0c1dyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgTWFya2V0c1N0b3JlLCBBc3NldFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHMsXG4gICAgICAgICAgICAgICAgb25seUxpcXVpZDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwib25seUxpcXVpZFwiLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRNYXJrZXRzLFxuICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRCYXNlczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnByZWZlcnJlZEJhc2VzLFxuICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cyxcbiAgICAgICAgICAgICAgICB1c2VyTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnVzZXJNYXJrZXRzLFxuICAgICAgICAgICAgICAgIHNlYXJjaEFzc2V0czogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0cyxcbiAgICAgICAgICAgICAgICBvbmx5U3RhcnM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm9ubHlTdGFycyxcbiAgICAgICAgICAgICAgICBhc3NldHNMb2FkaW5nOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzTG9hZGluZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgQWNjb3VudE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQWNjb3VudE5hbWVcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgTWFya2V0Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBub1N5bWJvbHM6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuXG4gICAgX29uQ2xpY2sobWFya2V0SUQpIHtcbiAgICAgICAgY29uc3QgbmV3UGF0aCA9IGAvbWFya2V0LyR7bWFya2V0SUR9YDtcbiAgICAgICAgaWYgKG5ld1BhdGggIT09IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnN3aXRjaE1hcmtldCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9tYXJrZXQvJHttYXJrZXRJRH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnN0YXRzQ2hlY2tlZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzSW50ZXJ2YWwoXG4gICAgICAgICAgICAzNSAqIDEwMDAsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhc2UsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRzSW50ZXJ2YWwpIHRoaXMuc3RhdHNJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIF9vblN0YXIocXVvdGUsIGJhc2UsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc3RhcnJlZCkge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmFkZFN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnJlbW92ZVN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3F1b3RlLCBiYXNlLCBub1N5bWJvbHMsIHN0YXRzLCBzdGFycmVkfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghcXVvdGUgfHwgIWJhc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hcmtldElEID0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpICsgXCJfXCIgKyBiYXNlLmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgbGV0IG1hcmtldE5hbWUgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIikgKyBcIjpcIiArIGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICBsZXQgZHluYW1pY19kYXRhID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KFxuICAgICAgICAgICAgcXVvdGUuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICk7XG4gICAgICAgIGxldCBiYXNlX2R5bmFtaWNfZGF0YSA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChcbiAgICAgICAgICAgIGJhc2UuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHByaWNlID0gdXRpbHMuY29udmVydFByaWNlKHF1b3RlLCBiYXNlKTtcblxuICAgICAgICBsZXQgcm93U3R5bGVzID0ge307XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxlZnRBbGlnbikge1xuICAgICAgICAgICAgcm93U3R5bGVzLnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJ1dHRvbkNsYXNzID0gXCJidXR0b24gb3V0bGluZVwiO1xuICAgICAgICBsZXQgYnV0dG9uU3R5bGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb21wYWN0KSB7XG4gICAgICAgICAgICBidXR0b25DbGFzcyArPSBcIiBuby1tYXJnaW5cIjtcbiAgICAgICAgICAgIGJ1dHRvblN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIwLjc1cmVtXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHggMTBweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHhcIixcbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMDVyZW1cIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zXG4gICAgICAgICAgICAubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJDbGFzcyA9IHN0YXJyZWQgPyBcImdvbGQtc3RhclwiIDogXCJncmV5LXN0YXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uU3Rhci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLmdldChcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhckNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5maV9zdGFyLnN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZvbFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IHN0YXRzID8gc3RhdHMudm9sdW1lQmFzZSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X3ZvbHVtZShhbW91bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFuZ2UgPSB1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzICYmIHN0YXRzLmNoYW5nZSA/IHN0YXRzLmNoYW5nZSA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VDbGFzcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlID09PSBcIjAuMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGFuZ2UgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY2hhbmdlLXVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJjaGFuZ2UtZG93blwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1widGV4dC1yaWdodCBcIiArIGNoYW5nZUNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFuZ2UgKyBcIiVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFya2V0TmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1hcmtldFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtxdW90ZS5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInByaWNlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluYWxQcmljZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMgJiYgc3RhdHMucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGF0cy5wcmljZS50b1JlYWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdHMuY2xvc2UucXVvdGUuYW1vdW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmNsb3NlLmJhc2UuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1dGlscy5nZXRfYXNzZXRfcHJpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5jbG9zZS5xdW90ZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmNsb3NlLmJhc2UuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1dGlscy5nZXRfYXNzZXRfcHJpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5xdW90ZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLmJhc2UuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hQcmVjaXNpb25Bc3NldHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCVENcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9QRU4uQlRDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSVURFWC5CVENcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJVREVYLlhCVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR0RFWC5CVENcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNQQVJLREVYLkJUQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWEJUU1guQlRDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHT0xEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTSUxWRVJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVjaXNpb24gPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQcmVjaXNpb25Bc3NldHMuaW5kZXhPZihiYXNlLmdldChcInN5bWJvbFwiKSkgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsUHJpY2UgPiAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaW5hbFByaWNlID4gMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInF1b3RlU3VwcGx5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljX2RhdGEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3BhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljX2RhdGEuZ2V0KFwiY3VycmVudF9zdXBwbHlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cXVvdGUuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmFzZVN1cHBseVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFzZV9keW5hbWljX2RhdGEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3BhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2R5bmFtaWNfZGF0YS5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfc3VwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYXNlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlzc3VlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudE5hbWUgYWNjb3VudD17cXVvdGUuZ2V0KFwiaXNzdWVyXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNoZWNrTWFya2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlRoaXMgbWFya2V0IGlzIGEgZGVmYXVsdCBtYXJrZXQgYW5kIGNhbm5vdCBiZSByZW1vdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5pc0NoZWNrZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNEZWZhdWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZW1vdmVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnJlbW92ZU1hcmtldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQgZmxvYXQtcmlnaHQgcmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEua2V5ID4gYi5rZXk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJjbGlja2FibGVcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGFjdGl2ZU1hcmtldFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3Jvd1N0eWxlc30+XG4gICAgICAgICAgICAgICAge2NvbHVtbnN9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cbk1hcmtldFJvdyA9IHdpdGhSb3V0ZXIoTWFya2V0Um93KTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRXcmFwcGVyKE1hcmtldFJvdywge1xuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB0ZW1wQ29tcG9uZW50OiBcInRyXCJcbiAgICB9LFxuICAgIHdpdGhEeW5hbWljOiB0cnVlXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XHJcblxyXG4vKipcclxuICogIEdpdmVuIGFuIGFjY291bnQgaWQsIGRpc3BsYXlzIHRoZSBuYW1lIG9mIHRoYXQgYWNjb3VudFxyXG4gKlxyXG4gKiAgRXhwZWN0cyBvbmUgcHJvcGVydHksICdhY2NvdW50JyB3aGljaCBzaG91bGQgYmUgYSBhY2NvdW50IGlkXHJcbiAqL1xyXG5cclxuY2xhc3MgQWNjb3VudE5hbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBhdXRvc3Vic2NyaWJlOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFjY291bnQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiA8c3Bhbj57dGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIil9PC9zcGFuPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50TmFtZSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IDlcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsX2xlbmd0aCA9IHByb3BzLnNjcm9sbF9sZW5ndGg7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Cb2R5Q2xpY2sgPSB0aGlzLm9uQm9keUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5wLmVudHJpZXMsIHRoaXMucHJvcHMuZW50cmllcykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucywgdGhpcy5zdGF0ZSkgfHxcbiAgICAgICAgICAgIG5wLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3NldExpc3RlbmVyKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuZW50cmllcy5sZW5ndGggPiAxICYmICF0aGlzLmxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Cb2R5Q2xpY2ssIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkJvZHlDbGljayk7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC5lbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChucC5lbnRyaWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldExpc3RlbmVyKG5wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIG9uQm9keUNsaWNrKGUpIHtcbiAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XG4gICAgICAgIGxldCBpbnNpZGVBY3Rpb25TaGVldCA9IGZhbHNlO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QgJiZcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93blwiKSAmJlxuICAgICAgICAgICAgICAgIGVsLmlkID09PSB0aGlzLnByb3BzLmlkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpbnNpZGVBY3Rpb25TaGVldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKChlbCA9IGVsLnBhcmVudE5vZGUpKTtcblxuICAgICAgICBpZiAoIWluc2lkZUFjdGlvblNoZWV0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6IGZhbHNlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90b2dnbGVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtlbnRyaWVzLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy51cHBlckNhc2UgPyBcIiB1cHBlci1jYXNlXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2luZ2xlRW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuc2luZ2xlRW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVudHJpZXNbMF19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gZW50cmllcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwidXBwZXItY2FzZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZURyb3Bkb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXJcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy51cHBlckNhc2UgPyBcIiB1cHBlci1jYXNlXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlID8gdmFsdWUgOiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5BPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcy5sZW5ndGggPiB0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdG9yXCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuaW1wb3J0IHtNb2RhbCwgQnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdW90ZVNlbGVjdGlvbk1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogXCJcIixcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9vbk1vdmVVcChxdW90ZSkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMucHJvcHMucXVvdGVzLmZpbmRJbmRleChxID0+IHEgPT09IHF1b3RlKTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMubW9kaWZ5UHJlZmVyZWRCYXNlcyh7XHJcbiAgICAgICAgICAgIG9sZEluZGV4OiBpZHgsXHJcbiAgICAgICAgICAgIG5ld0luZGV4OiBpZHggLSAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uTW92ZURvd24ocXVvdGUpIHtcclxuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZSk7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xyXG4gICAgICAgICAgICBvbGRJbmRleDogaWR4LFxyXG4gICAgICAgICAgICBuZXdJbmRleDogaWR4ICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblJlbW92ZShxdW90ZSkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMucHJvcHMucXVvdGVzLmZpbmRJbmRleChxID0+IHEgPT09IHF1b3RlKTtcclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlOiBpZHhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkFkZChxdW90ZSkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMucHJvcHMucXVvdGVzLmZpbmRJbmRleChxID0+IHEgPT09IHF1b3RlLmdldChcInN5bWJvbFwiKSk7XHJcbiAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLm1vZGlmeVByZWZlcmVkQmFzZXMoe1xyXG4gICAgICAgICAgICAgICAgYWRkOiBxdW90ZS5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbklucHV0QmFja2luZ0Fzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogYXNzZXQudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25Gb3VuZEJhY2tpbmdBc3NldChhc3NldCkge1xyXG4gICAgICAgIGlmIChhc3NldCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMucXVvdGVzLmluY2x1ZGVzKGFzc2V0LmdldChcInN5bWJvbFwiKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzVmFsaWQ6IHRydWV9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIkFzc2V0IGFscmVhZHkgYmVpbmcgdXNlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcXVvdGVDb3VudCA9IHRoaXMucHJvcHMucXVvdGVzLnNpemU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVvdGVfc2VsZWN0aW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJxdW90ZV9zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuY2xvc2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJuby1ib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucXVvdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1vdmVfZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubW92ZV91cFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucmVtb3ZlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucXVvdGVzLm1hcCgocSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2lkeCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkeCAhPT0gcXVvdGVDb3VudCAtIDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Nb3ZlRG93bi5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGV2cm9uLWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZHggIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Nb3ZlVXAuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hldnJvbi1kb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZSByb3RhdGUxODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1b3RlQ291bnQgPiAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNyb3NzLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhjaGFuZ2UuY3VzdG9tX3F1b3RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0QmFja2luZ0Fzc2V0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5iYWNraW5nQXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldElucHV0PXt0aGlzLnN0YXRlLmJhY2tpbmdBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdSaWdodDogXCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3VuZD17dGhpcy5fb25Gb3VuZEJhY2tpbmdBc3NldC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb249e3RoaXMuX29uQWRkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25fbGFiZWw9XCJleGNoYW5nZS5hZGRfcXVvdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbj17ISFlcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1hcmVhXCI+e2Vycm9yfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBUEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQVlBO0FBQ0E7Ozs7QUE3REE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQXhFQTtBQTBFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBL0JBO0FBa0NBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBDQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBRkE7QUFhQTs7OztBQWpTQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQWtTQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBMlBBO0FBQ0E7QUFDQTtBQTdQQTtBQStQQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBaFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBc0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBc0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFiQTtBQUNBO0FBSUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQWhCQTtBQUNBO0FBZUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFBQTtBQUFBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBUEE7QUFkQTtBQXlCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFMQTtBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFaQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFEQTtBQVZBO0FBd0JBO0FBekNBO0FBMkNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFEQTtBQURBO0FBbkRBO0FBcUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUF0QkE7QUFEQTtBQURBO0FBNEJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQUpBO0FBekJBO0FBREE7QUE3QkE7QUFEQTtBQVBBO0FBeUZBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFaQTtBQWhDQTtBQWlEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFSQTtBQVdBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQTBCQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQXJEQTtBQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF6VUE7QUFpVkE7Ozs7QUF0M0JBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFzM0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBcEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQXFCQTtBQVdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFOQTtBQUxBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFNQTtBQVJBO0FBTEE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBSUE7QUFOQTtBQVBBO0FBUkE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQWlCQTtBQUNBO0FBblBBO0FBcVBBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQXRWQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFzVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQVpBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTtBQU1BO0FBREE7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU5BO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBU0E7QUFUQTtBQVhBO0FBd0JBO0FBQ0E7Ozs7QUE1SkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBTUE7QUFEQTtBQUNBO0FBQ0E7QUF3SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVJBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFEQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBM0JBO0FBeUNBO0FBNUNBO0FBbEJBO0FBa0VBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFyRUE7QUFiQTtBQXFHQTs7OztBQTFLQTtBQUNBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==