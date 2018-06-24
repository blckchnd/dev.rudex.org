(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 2378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2379);
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

/***/ 2404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(384);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(521);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2356);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(565);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(796);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1337);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(784);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _MarketRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2405);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(705);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1266);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1285);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(888);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(889);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1217);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(726);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1286);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1267);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(865);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2408);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(567);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(873);
/* harmony import */ var bitsharesjs_es__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(414);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

























var lastLookup = new Date();

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
                sortBy: props.viewSettings.get("myMarketsSort", "volume"),
                inputValue: ""
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
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
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
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
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
        value: function _onToggle(e) {
            if (!this.props.findMarketTab) {
                var open = !this.state.open;
                this.setState({
                    open: open
                });

                var setting = {};
                setting["myMarketsBase_" + this.props.index] = open;
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting(setting);
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
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].setUserMarket(base, quote, newValue);
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
                current = _props.current,
                findMarketTab = _props.findMarketTab;
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
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.quote_supply" })
                        );

                    case "baseSupply":
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "th",
                            { key: header.name },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.base_supply" })
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
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MarketRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    key: market.id,
                    name: base === "others" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_14__["default"], { name: market.quote }),
                        ":",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_14__["default"], {
                            name: market.base
                        })
                    ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
    maxRows: 20
};

var MyMarkets = function (_React$Component2) {
    _inherits(MyMarkets, _React$Component2);

    function MyMarkets(props) {
        _classCallCheck(this, MyMarkets);

        // let inputValue = null; // props.viewSettings.get("marketLookupInput", null);
        // let symbols = inputValue ? inputValue.split(":") : [null];
        // let quote = symbols[0];
        // let base = symbols.length === 2 ? symbols[1] : null;

        var _this3 = _possibleConstructorReturn(this, (MyMarkets.__proto__ || Object.getPrototypeOf(MyMarkets)).call(this));

        _this3.clearInput = function (e) {
            _this3.setState({ myMarketFilter: "" });
        };

        _this3.handleSearchUpdate = function (e) {
            _this3.setState({
                myMarketFilter: e.target.value && e.target.value.toUpperCase()
            });
        };

        _this3.state = {
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
        _this3.getAssetList = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_16__["default"].getAssetList.defer, 150);
        return _this3;
    }

    _createClass(MyMarkets, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            /* Trigger a lookup when switching tabs to find-market */
            if (this.state.activeTab !== "find-market" && nextState.activeTab === "find-market" && !nextProps.searchAssets.size) {
                this._lookupAssets("RUDEX.", true);
            }

            return !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.searchAssets, this.props.searchAssets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.markets, this.props.markets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.starredMarkets, this.props.starredMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.defaultMarkets, this.props.defaultMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.marketStats, this.props.marketStats) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextState, this.state) || nextProps.current !== this.props.current || nextProps.minWidth !== this.props.minWidth || nextProps.listHeight !== this.props.listHeight || nextProps.preferredBases !== this.props.preferredBases || nextProps.onlyStars !== this.props.onlyStars || nextProps.assetsLoading !== this.props.assetsLoading || nextProps.userMarkets !== this.props.userMarkets;
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
            var historyContainer = this.refs.favorites;
            perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.initialize(historyContainer);

            this._setMinWidth();

            if (this.state.activeTab === "find-market") {
                this._lookupAssets("RUDEX.", true);
            }
        }
    }, {
        key: "componetWillUnmount",
        value: function componetWillUnmount() {
            if (this.props.setMinWidth) {
                window.removeEventListener("resize", this._setMinWidth);
            }
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
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
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
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
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
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
                favMarketTab: tab
            });
            this.setState({
                activeTab: tab
            });

            this._setMinWidth();
        }
    }, {
        key: "_onInputName",
        value: function _onInputName(e) {
            var inputValue = e.target.value.trim().toUpperCase();
            var isValidName = !bitsharesjs_es__WEBPACK_IMPORTED_MODULE_22__["ChainValidation"].is_valid_symbol_error(inputValue, true);

            this.setState({
                inputValue: inputValue
            });

            /* Don't lookup invalid asset names */
            if (inputValue && inputValue.length >= 3 && !isValidName) {
                return this.setState({
                    assetNameError: true
                });
            } else {
                this.setState({
                    assetNameError: false
                });
            }
            this._lookupAssets(inputValue);
        }
    }, {
        key: "_lookupAssets",
        value: function _lookupAssets(value) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // console.log("__lookupAssets", value, force);
            if (!value && value !== "") {
                return;
            }
            var now = new Date();

            var symbols = value.toUpperCase().split(":");
            var quote = symbols[0];
            var base = symbols.length === 2 ? symbols[1] : null;

            this.setState({
                lookupQuote: quote,
                lookupBase: base
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting.defer({
                marketLookupInput: value.toUpperCase()
            });

            if (this.state.lookupQuote !== quote || force) {
                if (quote.length < 1 || now - lastLookup <= 250) {
                    return false;
                }
                this.getAssetList(quote, 50);
            } else {
                if (base && this.state.lookupBase !== base) {
                    if (base.length < 1 || now - lastLookup <= 250) {
                        return false;
                    }
                    this.getAssetList(base, 50);
                }
            }
        }
    }, {
        key: "toggleActiveMarketTab",
        value: function toggleActiveMarketTab(index) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_15__["default"].changeViewSetting({
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
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props2 = this.props,
                starredMarkets = _props2.starredMarkets,
                defaultMarkets = _props2.defaultMarkets,
                marketStats = _props2.marketStats,
                columns = _props2.columns,
                searchAssets = _props2.searchAssets,
                assetsLoading = _props2.assetsLoading,
                preferredBases = _props2.preferredBases,
                core = _props2.core,
                current = _props2.current,
                viewSettings = _props2.viewSettings,
                listHeight = _props2.listHeight,
                onlyStars = _props2.onlyStars,
                userMarkets = _props2.userMarkets;
            var _state2 = this.state,
                activeMarketTab = _state2.activeMarketTab,
                activeTab = _state2.activeTab,
                lookupQuote = _state2.lookupQuote,
                lookupBase = _state2.lookupBase;

            var otherMarkets = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null);
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
            var baseGroups = {};

            var bases = [
                // coreSymbol, "BTC", "CNY", "USD"
            ];

            /* By default, show the OPEN.X assets */
            if (!lookupQuote) lookupQuote = "RUDEX.";

            /* In the find-market tab, only use market tab 0 */
            if (!myMarketTab) activeMarketTab = 0;

            searchAssets.filter(function (a) {
                // Always keep core asset as an option
                // if (preferredBases.indexOf(a.symbol) === 0) {
                //     return true;
                // }
                if (lookupBase && lookupBase.length) {
                    return a.symbol.indexOf(lookupBase) === 0;
                }
                return a.symbol.indexOf(lookupQuote) !== -1;
            }).forEach(function (asset) {
                if (lookupBase && lookupBase.length) {
                    if (asset.symbol.indexOf(lookupBase) === 0) {
                        bases.push(asset.symbol);
                    }
                } else if (preferredBases.includes(asset.symbol)) {
                    if (asset.symbol.length >= lookupQuote.length && asset.symbol.length < lookupQuote.length + 3) {
                        bases.push(asset.symbol);
                    }
                }
            });

            bases = bases.concat(preferredBases.filter(function (a) {
                if (!lookupBase || !lookupBase.length) {
                    return true;
                }
                return a.indexOf(lookupBase) === 0;
            }).toArray());

            bases = bases.filter(function (base) {
                // Always keep core asset as an option
                // if (preferredBases.indexOf(base) !== -1) {
                //     return true;
                // }
                if (lookupBase && lookupBase.length > 1) {
                    return base.indexOf(lookupBase) === 0;
                } else {
                    return true;
                }
            });

            var allMarkets = [];

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

            allMarkets = immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map(allMarkets);
            var activeMarkets = myMarketTab ? defaultMarkets : allMarkets;
            if (myMarketTab && userMarkets.size) {
                userMarkets.forEach(function (market, key) {
                    activeMarkets = activeMarkets.set(key, market);
                });
            }

            if (activeMarkets.size > 0) {
                otherMarkets = activeMarkets.filter(function (a) {
                    if (!myMarketTab) {
                        if (lookupQuote.length < 1) {
                            return false;
                        }

                        return a.quote.indexOf(lookupQuote) !== -1;
                    } else {
                        var ID = a.quote + "_" + a.base;
                        if (!!_this4.state.myMarketFilter) {
                            return ID.indexOf(_this4.state.myMarketFilter) !== -1;
                        }
                        if (onlyStars && !starredMarkets.has(ID)) {
                            return false;
                        }
                        return true;
                    }
                }).map(function (market) {
                    var marketID = market.quote + "_" + market.base;
                    if (preferredBases.includes(market.base)) {
                        if (!baseGroups[market.base]) {
                            baseGroups[market.base] = [];
                        }
                        baseGroups[market.base].push({
                            id: marketID,
                            quote: market.quote,
                            base: market.base
                        });
                        return null;
                    } else {
                        return {
                            id: marketID,
                            quote: market.quote,
                            base: market.base
                        };
                    }
                }).filter(function (a) {
                    return a !== null;
                }).take(myMarketTab ? 100 : 20).toArray();
            }

            var hasOthers = otherMarkets && otherMarkets.length;

            var hc = "mymarkets-header clickable";
            var starClass = classnames__WEBPACK_IMPORTED_MODULE_18___default()(hc, { inactive: !myMarketTab });
            var allClass = classnames__WEBPACK_IMPORTED_MODULE_18___default()(hc, { inactive: myMarketTab });

            var listStyle = {
                minWidth: this.state.minWidth,
                minHeight: "6rem"
            };
            if (listHeight) {
                listStyle.height = listHeight;
            }

            var translator = __webpack_require__(567);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { className: this.props.className, style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
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
                        className: "grid-block shrink",
                        style: {
                            width: "100%",
                            textAlign: "left",
                            padding: "0.75rem 0.5rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { style: { margin: "3px 0 0" } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            style: { position: "relative", top: 3 },
                            className: "no-margin",
                            type: "checkbox",
                            checked: this.props.onlyStars,
                            onChange: function onChange() {
                                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_17__["default"].toggleStars();
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
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "float-right search-wrapper",
                            style: { paddingLeft: 20 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "form",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                autoComplete: "off",
                                style: {
                                    fontSize: "0.9rem",
                                    height: "inherit",
                                    position: "relative",
                                    top: 1,
                                    padding: 2
                                },
                                type: "text",
                                className: "no-margin market-filter-input",
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_20___default.a.translate("exchange.filter"),
                                maxLength: "16",
                                name: "focus",
                                required: "required",
                                value: this.state.myMarketFilter,
                                onChange: this.handleSearchUpdate
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
                                className: "clear-text",
                                type: "reset",
                                onClick: this.clearInput
                            })
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
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
                                        onChange: this._onInputName.bind(this),
                                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_20___default.a.translate("exchange.search"),
                                        maxLength: "16",
                                        tabIndex: 2
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
                    { className: "mymarkets-tabs" },
                    preferredBases.map(function (base, index) {
                        if (!base) return null;
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "li",
                            {
                                key: base,
                                onClick: _this4.toggleActiveMarketTab.bind(_this4, index),
                                className: classnames__WEBPACK_IMPORTED_MODULE_18___default()("mymarkets-tab", {
                                    active: activeMarketTab === index
                                })
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_14__["default"], { name: base, dataPlace: "left" })
                        );
                    }),
                    myMarketTab && hasOthers ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "li",
                        {
                            key: "others",
                            style: { textTransform: "uppercase" },
                            onClick: this.toggleActiveMarketTab.bind(this, preferredBases.size + 1),
                            className: classnames__WEBPACK_IMPORTED_MODULE_18___default()("mymarkets-tab", {
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
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_21__["default"], { type: "three-bounce" })
                    ) : null,
                    preferredBases.filter(function (a) {
                        return a === preferredBases.get(activeMarketTab);
                    }).map(function (base, index) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarketGroup, {
                            userMarkets: _this4.props.userMarkets,
                            defaultMarkets: _this4.props.defaultMarkets,
                            index: index,
                            allowChange: false,
                            key: base,
                            current: current,
                            starredMarkets: starredMarkets,
                            marketStats: marketStats,
                            viewSettings: viewSettings,
                            columns: myMarketTab ? columns : _this4.props.findColumns || columns,
                            markets: baseGroups[base],
                            base: base,
                            maxRows: myMarketTab ? 20 : 10,
                            findMarketTab: !myMarketTab,
                            location: _this4.props.location,
                            history: _this4.props.history
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
                )
            );
        }
    }]);

    return MyMarkets;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MyMarkets.propTypes = {
    core: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_12__["default"].ChainAsset.isRequired
};
MyMarkets.defaultProps = {
    activeTab: "my-market",
    core: "1.3.0",
    setMinWidth: false
};

MyMarkets = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_13__["default"])(MyMarkets);

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

/***/ 2405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1007);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1218);
/* harmony import */ var _Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2406);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2407);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(565);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(798);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1267);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(726);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(740);
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
            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].getMarketStats(this.props.base, this.props.quote);
            this.statsChecked = new Date();
            this.statsInterval = setInterval(actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].getMarketStats.bind(this, this.props.base, this.props.quote), 35 * 1000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.statsInterval);
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "checkbox",
                                checked: !!_this2.props.isChecked || _this2.props.isDefault,
                                disabled: _this2.props.isDefault,
                                "data-tip": _this2.props.isDefault ? "This market is a default market and cannot be removed" : null
                            })
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

/***/ 2406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(888);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(889);
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

/***/ })

}]);
//# sourceMappingURL=exchange~explorer.js.map