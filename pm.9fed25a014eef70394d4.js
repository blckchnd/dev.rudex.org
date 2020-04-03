(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[8],{

/***/ 2768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasLoaded", function() { return hasLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindToCurrentAccount", function() { return bindToCurrentAccount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2018);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2154);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2019);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1901);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(568);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2002);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var hasLoaded = function hasLoaded(currentAccount) {
    return !!currentAccount && !!currentAccount.get("id");
};

var bindToCurrentAccount = function bindToCurrentAccount(WrappedComponent) {
    var _class, _temp;

    // ...and returns another component...
    var BindToCurrentAccount = (_temp = _class = function (_React$Component) {
        _inherits(BindToCurrentAccount, _React$Component);

        function BindToCurrentAccount(props) {
            _classCallCheck(this, BindToCurrentAccount);

            return _possibleConstructorReturn(this, (BindToCurrentAccount.__proto__ || Object.getPrototypeOf(BindToCurrentAccount)).call(this, props));
        }

        _createClass(BindToCurrentAccount, [{
            key: "render",
            value: function render() {
                if (hasLoaded(this.props.currentAccount)) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);
                } else {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__["default"], null);
                }
            }
        }]);

        return BindToCurrentAccount;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _class.propTypes = {
        currentAccount: _ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount
    }, _class.defaultProps = {
        // set subscription
        autosubscribe: true
    }, _temp);

    BindToCurrentAccount = Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(BindToCurrentAccount);

    BindToCurrentAccount = react_debounce_render__WEBPACK_IMPORTED_MODULE_2___default()(BindToCurrentAccount, 100, {
        leading: false
    });

    return Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(BindToCurrentAccount, {
        listenTo: function listenTo() {
            return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
        },
        getProps: function getProps() {
            var currentAccount = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().passwordAccount || "please-login";
            return {
                currentAccount: new Map([["name", currentAccount]])
            };
        }
    });
};

/***/ }),

/***/ 2856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var searchInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
function SearchInput(_ref) {
    var onChange = _ref.onChange,
        value = _ref.value,
        placeholder = _ref.placeholder,
        maxLength = _ref.maxLength,
        style = _ref.style,
        className = _ref.className,
        name = _ref.name,
        autoComplete = _ref.autoComplete,
        onClear = _ref.onClear,
        type = _ref.type,
        other = _objectWithoutProperties(_ref, ["onChange", "value", "placeholder", "maxLength", "style", "className", "name", "autoComplete", "onClear", "type"]);

    if (onClear == undefined) {
        // if onClear=null, then it won't be rendered
        onClear = function onClear() {
            onChange({
                target: { value: "" }
            });
            searchInput.current.focus();
        };
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Input"], _extends({
        ref: searchInput,
        autoComplete: autoComplete,
        style: style,
        type: type,
        className: className + " search-input",
        placeholder: placeholder,
        maxLength: maxLength,
        name: name,
        value: value,
        onChange: onChange,
        addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Icon"], { type: "search" }),
        suffix: onClear ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            onClick: onClear,
            type: "close"
            // always include DOM the icon, otherwise user looses focus when it appears and input resizes
            , className: value ? "cursor-pointer" : "hide"
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
    }, other));
}

SearchInput.propTypes = {
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, // can be undefined when no user input is present
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    maxLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    onClear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

SearchInput.defaultProps = {
    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("exchange.filter"),
    style: { width: "200px" },
    className: "",
    type: "text",
    name: "focus",
    autoComplete: "off",
    maxLength: 16,
    onClear: undefined
};

/***/ }),

/***/ 2939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2768);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2416);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2415);
/* harmony import */ var _PredictionMarkets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2940);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2392);
/* harmony import */ var _lib_chain_onChainConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2150);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(435);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(597);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var _convertPredictionMarketForUI = function _convertPredictionMarketForUI(asset) {
    var market_fee = 0;
    var max_market_fee = 0;
    if (asset.forPredictions.flagBooleans["charge_market_fee"]) {
        market_fee = asset.options.market_fee_percent;
        max_market_fee = asset.options.max_market_fee;
    }
    var bitassetData = asset.bitasset_data || asset.bitasset || {};
    var uiMarketData = {
        asset: asset,
        short_backing_asset: bitassetData.options.short_backing_asset || "1.3.0",
        asset_id: asset.id,
        issuer: asset.issuer,
        description: asset.forPredictions.description.main,
        symbol: asset.symbol,
        condition: asset.forPredictions.description.condition,
        expiry: asset.forPredictions.description.expiry,
        options: asset.options,
        marketConfidence: 0,
        marketLikelihood: 0,
        market_fee: market_fee,
        max_market_fee: max_market_fee
    };
    return uiMarketData;
};

var PMAssetsContainer = function (_React$Component) {
    _inherits(PMAssetsContainer, _React$Component);

    function PMAssetsContainer(props) {
        _classCallCheck(this, PMAssetsContainer);

        var _this = _possibleConstructorReturn(this, (PMAssetsContainer.__proto__ || Object.getPrototypeOf(PMAssetsContainer)).call(this, props));

        _this.state = {
            lastAssetSymbol: "",
            predictionMarkets: [],
            fetching: true,
            whitelistedIssuers: [],
            fetchAllAssets: false
        };
        return _this;
    }

    _createClass(PMAssetsContainer, [{
        key: "_getPredictionMarketList",
        value: function _getPredictionMarketList(assets) {
            return [].concat(_toConsumableArray(assets)).map(function (asset) {
                return asset[1];
            }).filter(this._isPredictionMarket).map(this._normalizePredictionMarketAsset);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            if (prevProps.assets !== this.props.assets && this.state.fetchAllAssets) {
                var lastAsset = this.props.assets.sort(function (a, b) {
                    if (a.symbol > b.symbol) {
                        return 1;
                    } else if (a.symbol < b.symbol) {
                        return -1;
                    } else {
                        return 0;
                    }
                }).last();
                var predictionMarkets = this._getPredictionMarketList(this.props.assets);
                actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__["default"].getAssetList.defer(lastAsset.symbol, 100);
                var fetchingFinished = this.state.lastAssetSymbol === lastAsset.symbol;
                setTimeout(function () {
                    _this2.setState({
                        predictionMarkets: predictionMarkets,
                        lastAssetSymbol: lastAsset.symbol,
                        fetchAllAssets: !fetchingFinished,
                        fetching: !fetchingFinished
                    });
                }, 0);
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this3 = this;

            Object(_lib_chain_onChainConfig__WEBPACK_IMPORTED_MODULE_7__["getPredictionMarketIssuers"])().then(function (whitelistedIssuers) {
                _this3._getWhitelistedAssets(whitelistedIssuers).then(function (assets) {
                    var predictionMarkets = assets.filter(_this3._isPredictionMarket).map(_this3._normalizePredictionMarketAsset);
                    _this3.setState({
                        whitelistedIssuers: whitelistedIssuers,
                        predictionMarkets: predictionMarkets,
                        fetching: false
                    });
                });
            });
        }
    }, {
        key: "_normalizePredictionMarketAsset",
        value: function _normalizePredictionMarketAsset(asset) {
            if (!asset.forPredictions) {
                asset.forPredictions = {
                    description: common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].parseDescription(asset.options.description),
                    flagBooleans: common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].getFlagBooleans(asset.options.flags, true)
                };
            }
            return _convertPredictionMarketForUI(asset);
        }
    }, {
        key: "_isPredictionMarket",
        value: function _isPredictionMarket(asset) {
            if (!asset) {
                return false;
            }
            var bitassetData = asset.bitasset_data || asset.bitasset || {};
            return bitassetData.is_prediction_market;
        }
    }, {
        key: "_getWhitelistedAssets",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(whitelistedIssuers) {
                var assets, accountObjects, assetsObjects;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                assets = [];
                                _context.next = 3;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAccount, whitelistedIssuers, undefined, {});

                            case 3:
                                accountObjects = _context.sent;

                                accountObjects.forEach(function (item) {
                                    if (item) {
                                        item = item.toJS();
                                        assets = [].concat(_toConsumableArray(assets), _toConsumableArray(item.assets));
                                    }
                                });
                                _context.next = 7;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAsset, assets, undefined, {});

                            case 7:
                                assetsObjects = _context.sent;
                                return _context.abrupt("return", assetsObjects.map(function (item) {
                                    return item.toJS();
                                }));

                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _getWhitelistedAssets(_x) {
                return _ref.apply(this, arguments);
            }

            return _getWhitelistedAssets;
        }()
    }, {
        key: "fetchAllAssets",
        value: function fetchAllAssets() {
            this.setState({
                fetching: true,
                fetchAllAssets: true
            }, function () {
                // wait for 150ms to make sure loading is displayed
                // (BindToCurrentAccount and PredictioMarketsOverviewTable are both debounced)
                setTimeout(function () {
                    return actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__["default"].getAssetList("", 100);
                }, 300);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PredictionMarkets__WEBPACK_IMPORTED_MODULE_5__["default"], {
                assets: this.props.assets,
                whitelistedIssuers: this.state.whitelistedIssuers,
                predictionMarkets: this.state.predictionMarkets,
                loading: this.state.fetching,
                fetchAllAssets: function fetchAllAssets() {
                    _this4.fetchAllAssets();
                }
            });
        }
    }]);

    return PMAssetsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PMAssetsContainer = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(PMAssetsContainer, {
    listenTo: function listenTo() {
        return [stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__["default"], _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps() {
        return {
            assets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().assets,
            bucketSize: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().bucketSize,
            currentGroupOrderLimit: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().currentGroupLimit,
            marketLimitOrders: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().marketLimitOrders
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (PMAssetsContainer = Object(_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_2__["bindToCurrentAccount"])(PMAssetsContainer));

/***/ }),

/***/ 2940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(597);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2416);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2415);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2393);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PredictionMarketsOverviewTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2941);
/* harmony import */ var _PredictionMarketDetailsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2947);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2856);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2179);
/* harmony import */ var _AddOpinionModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2948);
/* harmony import */ var _CreateMarketModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2949);
/* harmony import */ var _ResolveModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2950);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(435);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(613);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2768);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2392);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1901);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var PredictionMarkets = function (_Component) {
    _inherits(PredictionMarkets, _Component);

    function PredictionMarkets(props) {
        _classCallCheck(this, PredictionMarkets);

        var _this = _possibleConstructorReturn(this, (PredictionMarkets.__proto__ || Object.getPrototypeOf(PredictionMarkets)).call(this, props));

        _this.onOppose = function (opinion) {
            _this.setState({
                preselectedOpinion: opinion.opinion === "no" ? "yes" : "no",
                preselectedAmount: opinion.amount,
                preselectedProbability: opinion.probability
            });
            _this.onAddOpinionModalOpen();
        };

        _this.onCancelOpinion = function (opinion) {
            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].cancelLimitOrders(_this.props.currentAccount.get("id"), [opinion.order_id]).catch(function (err) {
                console.log("cancel orders error:", err);
            });
        };

        _this.onResolveMarket = function (market) {
            var account = _this.props.currentAccount.get("id");
            var globalSettlementPrice = market.result === "yes" ? 1 : 0;
            var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getAsset(market.asset_id).toJS();
            var base = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                real: 1,
                asset_id: asset.id,
                precision: asset.precision
            });
            var quoteAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getAsset(asset.bitasset.options.short_backing_asset);
            var quote = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                real: globalSettlementPrice,
                asset_id: asset.bitasset.options.short_backing_asset,
                precision: quoteAsset.get("precision")
            });
            var price = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({
                quote: quote,
                base: base
            });

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].assetGlobalSettle(asset, account, price).then(function () {
                var pause = new Promise(function (resolve) {
                    return setTimeout(resolve, 1000);
                });
                pause.then(function () {
                    _this.updateAsset(asset.symbol);
                });
            });
            _this.setState({
                isResolveModalOpen: false
            });
        };

        _this.state = {
            loading: false,
            searchTerm: "",
            detailsSearchTerm: "",
            selectedPredictionMarket: null,
            opinions: [],
            preselectedOpinion: "yes",
            preselectedAmount: 0,
            preselectedProbability: 0,
            isCreateMarketModalOpen: false,
            isAddOpinionModalOpen: false,
            isResolveModalOpen: false,
            isHideUnknownHousesChecked: true,
            isHideInvalidAssetsChecked: true,
            opinionFilter: "yes",
            predictionMarketAssetFilter: "open"
        };

        _this.onCreatePredictionMarketModalOpen = _this.onCreatePredictionMarketModalOpen.bind(_this);
        _this.onCreatePredictionMarketModalClose = _this.onCreatePredictionMarketModalClose.bind(_this);
        _this.onAddOpinionModalOpen = _this.onAddOpinionModalOpen.bind(_this);
        _this.onAddOpinionModalClose = _this.onAddOpinionModalClose.bind(_this);
        _this.onSearch = _this.onSearch.bind(_this);
        _this.onSearchDetails = _this.onSearchDetails.bind(_this);
        _this.onMarketAction = _this.onMarketAction.bind(_this);
        _this.onResolveModalOpen = _this.onResolveModalOpen.bind(_this);
        _this.onResolveModalClose = _this.onResolveModalClose.bind(_this);
        _this.updateAsset = _this.updateAsset.bind(_this);
        _this.handleUnknownHousesToggleChange = _this.handleUnknownHousesToggleChange.bind(_this);
        _this.handleInvalidAssetsChecked = _this.handleInvalidAssetsChecked.bind(_this);
        return _this;
    }

    _createClass(PredictionMarkets, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (prevProps.marketLimitOrders !== this.props.marketLimitOrders) {
                this._updateOpinionsList(this.props.marketLimitOrders);
            }
        }
    }, {
        key: "_isKnownIssuer",
        value: function _isKnownIssuer(asset) {
            return this.props.whitelistedIssuers.includes(asset.issuer);
        }
    }, {
        key: "_isValidPredictionMarketAsset",
        value: function _isValidPredictionMarketAsset(asset) {
            // must have valid date
            var resolutionDate = new Date(asset.forPredictions.description.expiry);
            if (resolutionDate instanceof Date && isNaN(resolutionDate.getTime())) {
                return false;
            }
            // must have description and prediction filled
            if (!asset.forPredictions.description.condition) {
                return false;
            }
            if (!asset.forPredictions.description.main) {
                return false;
            }
            // must have meaningfull description and prediction
            if (asset.forPredictions.description.condition.length < 10) {
                return false;
            }
            if (asset.forPredictions.description.main.length < 20) {
                return false;
            }
            // market fee may not be crazy
            if (asset.options.market_fee_percent / 100 >= 10) {
                return false;
            }
            return true;
        }
    }, {
        key: "_updateOpinionsList",
        value: function _updateOpinionsList(fetchedOpinions) {
            var orders = [];
            var selectedMarket = this.state.selectedPredictionMarket;
            fetchedOpinions.forEach(function (order, order_id) {
                var opinion = order.market_base === order.sell_price.base.asset_id ? "no" : "yes";
                var refPrice = order.market_base === order.sell_price.base.asset_id ? order.sell_price.invert().toReal() : order.sell_price.toReal();
                var amount = order.market_base === order.sell_price.base.asset_id ? order.amountForSale() : order.amountToReceive();
                var premium = order.market_base === order.sell_price.base.asset_id ? order.amountToReceive() : order.amountForSale();
                var flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFlagBooleans(selectedMarket.options.flags, true);
                var fee = 0;
                if (flagBooleans["charge_market_fee"]) {
                    fee = Math.min(selectedMarket.options.max_market_fee, amount.amount * selectedMarket.options.market_fee_percent / 10000);
                }

                if (refPrice < 1) {
                    orders.push({
                        order_id: order_id,
                        opinionator: order.seller,
                        opinion: opinion,
                        amount: amount,
                        likelihood: refPrice,
                        potentialProfit: new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                            amount: amount.amount,
                            asset_id: premium.asset_id,
                            precision: premium.precision
                        }),
                        premium: premium,
                        commission: new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                            amount: fee * refPrice,
                            asset_id: premium.asset_id,
                            precision: premium.precision
                        })
                    });
                }
            });
            this.setState({ opinions: [].concat(orders) });
        }
    }, {
        key: "getMarketOpinions",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(market) {
                var base, quote;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.state.subscribedMarket) {
                                    _context.next = 3;
                                    break;
                                }

                                _context.next = 3;
                                return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].unSubscribeMarket(this.state.subscribedMarket.quote.get("id"), this.state.subscribedMarket.base.get("id"));

                            case 3:
                                base = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getObject(market.options.core_exchange_rate.base.asset_id);
                                quote = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getAsset(market.options.core_exchange_rate.quote.asset_id);
                                _context.next = 7;
                                return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].subscribeMarket(base, quote, this.props.bucketSize, this.props.currentGroupOrderLimit);

                            case 7:
                                this.setState({
                                    subscribedMarket: {
                                        base: base,
                                        quote: quote
                                    }
                                });

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getMarketOpinions(_x) {
                return _ref.apply(this, arguments);
            }

            return getMarketOpinions;
        }()
    }, {
        key: "onMarketAction",
        value: function onMarketAction(_ref2) {
            var _this2 = this;

            var market = _ref2.market,
                action = _ref2.action;

            if (typeof action === "string") {
                //on buttons action
                if (!this.state.selectedPredictionMarket) {
                    this.setState({
                        selectedPredictionMarket: market
                    });
                }

                switch (action) {
                    case "resolve":
                        {
                            this.setState({
                                preselectedAmount: 0,
                                preselectedProbability: 0
                            });
                            this.onResolveModalOpen();
                            break;
                        }
                    case "yes":
                        {
                            if (this.state.subscribedMarket) {
                                this.setState({
                                    preselectedAmount: 0,
                                    preselectedProbability: 0,
                                    preselectedOpinion: "yes"
                                });
                                this.onAddOpinionModalOpen();
                            }
                            break;
                        }
                    case "no":
                        {
                            if (this.state.subscribedMarket) {
                                this.setState({
                                    preselectedAmount: 0,
                                    preselectedProbability: 0,
                                    preselectedOpinion: "no"
                                });
                                this.onAddOpinionModalOpen();
                            }
                            break;
                        }
                    default:
                        {
                            this.setState({
                                preselectedAmount: 0,
                                preselectedProbability: 0
                            });
                        }
                }
            } else {
                //on row action
                if (this.state.selectedPredictionMarket) {
                    this.setState({
                        selectedPredictionMarket: null
                    });
                } else {
                    this.setState({
                        selectedPredictionMarket: market
                    }, function () {
                        return _this2.getMarketOpinions(market);
                    });
                }
            }
        }
    }, {
        key: "onSearch",
        value: function onSearch(event) {
            this.setState({
                searchTerm: event.target.value || ""
            });
        }
    }, {
        key: "onSearchDetails",
        value: function onSearchDetails(event) {
            this.setState({
                detailsSearchTerm: event.target.value || ""
            });
        }
    }, {
        key: "onCreatePredictionMarketModalOpen",
        value: function onCreatePredictionMarketModalOpen() {
            this.setState({
                isCreateMarketModalOpen: true
            });
        }
    }, {
        key: "onCreatePredictionMarketModalClose",
        value: function onCreatePredictionMarketModalClose() {
            this.setState({
                isCreateMarketModalOpen: false
            });
        }
    }, {
        key: "onAddOpinionModalOpen",
        value: function onAddOpinionModalOpen() {
            this.setState({
                isAddOpinionModalOpen: true
            });
        }
    }, {
        key: "onAddOpinionModalClose",
        value: function onAddOpinionModalClose() {
            this.setState({
                isAddOpinionModalOpen: false,
                preselectedOpinion: "no",
                preselectedAmount: 0,
                preselectedProbability: 0
            });
        }
    }, {
        key: "onResolveModalOpen",
        value: function onResolveModalOpen() {
            this.setState({
                isResolveModalOpen: true
            });
        }
    }, {
        key: "onResolveModalClose",
        value: function onResolveModalClose() {
            this.setState({
                isResolveModalOpen: false
            });
        }
    }, {
        key: "handleUnknownHousesToggleChange",
        value: function handleUnknownHousesToggleChange() {
            var _this3 = this;

            var isHideUnknownHousesChecked = !this.state.isHideUnknownHousesChecked;
            this.setState({
                isHideUnknownHousesChecked: isHideUnknownHousesChecked,
                selectedPredictionMarket: null
            }, function () {
                return _this3.props.fetchAllAssets();
            });
        }
    }, {
        key: "handleInvalidAssetsChecked",
        value: function handleInvalidAssetsChecked() {
            this.setState({
                isHideInvalidAssetsChecked: !this.state.isHideInvalidAssetsChecked,
                selectedPredictionMarket: null
            });
        }
    }, {
        key: "updateAsset",
        value: function updateAsset(symbol) {
            actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].getAssetList.defer(symbol, 1);
        }
    }, {
        key: "_filterMarkets",
        value: function _filterMarkets() {
            var _this4 = this;

            var filter = this.state.predictionMarketAssetFilter;
            var markets = this.props.predictionMarkets.filter(function (assetInfo) {
                var asset = assetInfo.asset;
                if (!asset) {
                    return false;
                }
                var bitassetData = asset.bitasset_data || asset.bitasset || {};
                if (_this4.state.isHideUnknownHousesChecked && !_this4._isKnownIssuer(asset)) {
                    return false;
                } else if (_this4.state.isHideInvalidAssetsChecked && !_this4._isValidPredictionMarketAsset(asset)) {
                    return false;
                } else {
                    var accountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getAccount(asset.issuer) ? bitsharesjs__WEBPACK_IMPORTED_MODULE_13__["ChainStore"].getAccount(asset.issuer).get("name") : null;
                    if (accountName && _this4.state.searchTerm) {
                        var noMatch = (accountName + "\0" + asset.condition + "\0" + asset.description).toUpperCase().indexOf(_this4.state.searchTerm) !== -1;
                        if (noMatch) {
                            return false;
                        }
                    }
                    if (filter && filter !== "all") {
                        var resolutionDate = new Date(asset.forPredictions.description.expiry);
                        var settlementFund = bitassetData.settlement_fund || 0;
                        var isExpiredOrResolved = settlementFund > 0 || resolutionDate < new Date();
                        if (filter === "open") {
                            return !isExpiredOrResolved;
                        } else if (filter === "past_resolution_date") {
                            return isExpiredOrResolved;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                }
            });
            return markets;
        }
    }, {
        key: "getOverviewSection",
        value: function getOverviewSection() {
            var _this5 = this;

            var setPredictionMarketAssetFilter = function setPredictionMarketAssetFilter(e) {
                _this5.setState({
                    predictionMarketAssetFilter: e.target.value
                });
            };
            var predictionMarketsToShow = this._filterMarkets();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "header-selector",
                        style: { display: "inline-block", width: "100%" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "filter-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            onChange: this.onSearch,
                            value: this.state.searchTerm
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Radio"].Group,
                            {
                                style: { marginLeft: "20px" },
                                value: this.state.predictionMarketAssetFilter,
                                onChange: setPredictionMarketAssetFilter
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Radio"],
                                { value: "all" },
                                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.overview.all")
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Radio"],
                                { value: "open" },
                                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.overview.open")
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Radio"],
                                { value: "past_resolution_date" },
                                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.overview.past_resolution_date")
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Switch"], {
                                style: { marginLeft: "20px", cursor: "pointer" },
                                onChange: this.handleUnknownHousesToggleChange,
                                checked: this.state.isHideUnknownHousesChecked
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_16___default.a, {
                                onClick: this.handleUnknownHousesToggleChange,
                                content: "prediction.overview.hide_unknown_houses",
                                style: {
                                    marginLeft: "10px",
                                    cursor: "pointer"
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.tooltips.hide_unknown_houses")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
                                    style: {
                                        marginLeft: "0.5rem"
                                    },
                                    type: "question-circle",
                                    theme: "filled"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Switch"], {
                                style: { marginLeft: "20px", cursor: "pointer" },
                                onChange: this.handleInvalidAssetsChecked,
                                checked: this.state.isHideInvalidAssetsChecked
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_16___default.a, {
                                onClick: this.handleInvalidAssetsChecked,
                                content: "prediction.overview.hide_invalid_asset",
                                style: {
                                    marginLeft: "10px",
                                    cursor: "pointer"
                                }
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.tooltips.hide_invalid_asset")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
                                    style: {
                                        marginLeft: "0.5rem"
                                    },
                                    type: "question-circle",
                                    theme: "filled"
                                })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "filter-status" },
                        counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("utility.x_assets_hidden", {
                            count: this.props.predictionMarkets.length - predictionMarketsToShow.length,
                            total: this.props.predictionMarkets.length
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "header-selector",
                        style: {
                            display: "inline-block",
                            width: "100%",
                            paddingTop: "0rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "action-buttons" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.tooltips.create_prediction_market_asset")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
                                style: {
                                    fontSize: "1.3rem",
                                    marginRight: "0.5rem"
                                },
                                type: "question-circle",
                                theme: "filled"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Button"],
                            {
                                onClick: this.onCreatePredictionMarketModalOpen
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.overview.create_market")
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PredictionMarketsOverviewTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    predictionMarkets: predictionMarketsToShow,
                    currentAccount: this.props.currentAccount,
                    onMarketAction: this.onMarketAction,
                    selectedPredictionMarket: this.state.selectedPredictionMarket,
                    loading: this.props.loading
                })
            );
        }
    }, {
        key: "getDetailsSection",
        value: function getDetailsSection() {
            var _this6 = this;

            var setOpinionFilter = function setOpinionFilter(e) {
                _this6.setState({
                    opinionFilter: e.target.value
                });
            };
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h3",
                    null,
                    counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.details.list_of_current_prediction_offers"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.tooltips.what_is_a_prediction_offer")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
                            style: {
                                marginLeft: "0.5rem"
                            },
                            type: "question-circle",
                            theme: "filled"
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "header-selector",
                        style: { display: "inline-block", width: "100%" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "filter-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            onChange: this.onSearchDetails,
                            value: this.state.detailsSearchTerm,
                            autoComplete: "off"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Radio"].Group,
                            {
                                style: { marginLeft: "20px" },
                                value: this.state.opinionFilter,
                                onChange: setOpinionFilter
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Radio"],
                                { value: "all" },
                                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.details.all")
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Radio"],
                                { value: "yes" },
                                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.details.proves_true")
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Radio"],
                                { value: "no" },
                                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.details.incorrect")
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "action-buttons" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.tooltips.add_prediction")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
                                style: {
                                    fontSize: "1.3rem",
                                    marginRight: "0.5rem"
                                },
                                type: "question-circle",
                                theme: "filled"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Button"],
                            { onClick: this.onAddOpinionModalOpen },
                            counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.details.add_prediction")
                        )
                    )
                ),
                this.state.opinions ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PredictionMarketDetailsTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    predictionMarketData: {
                        predictionMarket: this.state.selectedPredictionMarket,
                        opinions: this.state.opinions
                    },
                    currentAccount: this.props.currentAccount,
                    onOppose: this.onOppose,
                    onCancel: this.onCancelOpinion,
                    detailsSearchTerm: this.state.detailsSearchTerm.toUpperCase(),
                    opinionFilter: this.state.opinionFilter
                }) : null
            );
        }
    }, {
        key: "render",
        value: function render() {
            var symbols = [].concat(_toConsumableArray(this.props.assets)).map(function (item) {
                return item[1].symbol;
            });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "prediction-markets grid-block vertical",
                    style: { overflow: "visible", margin: "15px" }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block small-12 shrink",
                        style: { overflow: "visible" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_9__["default"], { path: "components/PredictionMarkets" })
                ),
                this.getOverviewSection(),
                this.state.selectedPredictionMarket ? this.getDetailsSection() : null,
                this.state.isCreateMarketModalOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateMarketModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    visible: this.state.isCreateMarketModalOpen,
                    onClose: this.onCreatePredictionMarketModalClose,
                    currentAccount: this.props.currentAccount.get("id"),
                    symbols: symbols,
                    onMarketCreated: this.updateAsset
                }) : null,
                this.state.isAddOpinionModalOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddOpinionModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    visible: this.state.isAddOpinionModalOpen,
                    onClose: this.onAddOpinionModalClose,
                    predictionMarket: this.state.selectedPredictionMarket,
                    opinion: this.state.initialOpinion,
                    currentAccount: this.props.currentAccount,
                    preselectedOpinion: this.state.preselectedOpinion,
                    preselectedAmount: this.state.preselectedAmount,
                    preselectedProbability: this.state.preselectedProbability,
                    baseAsset: this.state.subscribedMarket.base,
                    quoteAsset: this.state.subscribedMarket.quote
                }) : null,
                this.state.isResolveModalOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResolveModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    visible: this.state.isResolveModalOpen,
                    onClose: this.onResolveModalClose,
                    predictionMarket: this.state.selectedPredictionMarket,
                    onResolveMarket: this.onResolveMarket
                }) : null
            );
        }
    }]);

    return PredictionMarkets;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PredictionMarkets = Object(alt_react__WEBPACK_IMPORTED_MODULE_19__["connect"])(PredictionMarkets, {
    listenTo: function listenTo() {
        return [stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"], _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"]];
    },
    getProps: function getProps() {
        return {
            assets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().assets,
            bucketSize: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().bucketSize,
            currentGroupOrderLimit: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().currentGroupLimit,
            marketLimitOrders: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().marketLimitOrders
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (PredictionMarkets = Object(_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_17__["bindToCurrentAccount"])(PredictionMarkets));

/***/ }),

/***/ 2941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2470);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2469);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(435);
/* harmony import */ var components_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2942);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2018);
/* harmony import */ var _actions_MarketsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2393);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2154);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2162);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(586);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















__webpack_require__(2945);

var PredictionMarketsOverviewTable = function (_Component) {
    _inherits(PredictionMarketsOverviewTable, _Component);

    function PredictionMarketsOverviewTable(props) {
        _classCallCheck(this, PredictionMarketsOverviewTable);

        var _this = _possibleConstructorReturn(this, (PredictionMarketsOverviewTable.__proto__ || Object.getPrototypeOf(PredictionMarketsOverviewTable)).call(this, props));

        _this.onRowAction = function (dataItem) {
            return {
                onClick: _this.onMarketAction.bind(_this, dataItem)
            };
        };

        _this.state = {
            ticker: {}
        };
        _this.tickersLoaded = {};
        return _this;
    }

    _createClass(PredictionMarketsOverviewTable, [{
        key: "onMarketAction",
        value: function onMarketAction(dataItem) {
            var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "yes";

            this.props.onMarketAction({
                market: dataItem,
                action: option
            });
        }
    }, {
        key: "getHeader",
        value: function getHeader() {
            var _this2 = this;

            var isOwnedByCurrent = function isOwnedByCurrent(id) {
                return _this2.props.currentAccount.get("id") === id;
            };
            return [{
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("account.asset"),
                dataIndex: "asset_id",
                align: "left",
                defaultSortOrder: "ascend",
                sorter: function sorter(a, b) {
                    return a.symbol > b.symbol ? 1 : a.symbol < b.symbol ? -1 : 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_3__["default"], { asset: item })
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.overview.issuer"),
                dataIndex: "issuer",
                align: "left",
                sorter: function sorter(a, b) {
                    var a_issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAccount(a.issuer);
                    var b_issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAccount(b.issuer);
                    var a_name = null,
                        b_name = null;
                    if (a_issuer && b_issuer) {
                        a_name = a_issuer.get("name");
                        b_name = b_issuer.get("name");
                    }
                    return a_name > b_name ? 1 : a_name < b_name ? -1 : 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], { account: item })
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.overview.prediction"),
                dataIndex: "condition",
                align: "left",
                sorter: function sorter(a, b) {
                    if (!a.condition || a.condition === "") return -1;
                    if (!b.condition || b.condition === "") return 1;
                    return a.condition.localeCompare(b.condition);
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "normal"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            item
                        )
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.overview.market_confidence"),
                dataIndex: "marketConfidence",
                align: "left",
                sorter: function sorter(a, b) {
                    return a.marketConfidence > b.marketConfidence ? 1 : a.marketConfidence < b.marketConfidence ? -1 : 0;
                },
                render: function render(item, row) {
                    var ticker = Object.assign({}, _this2.state.ticker[row.asset_id]);

                    if (_this2.state.ticker[row.asset_id]) {
                        if (!ticker.quote_volume || ticker.quote_volume === "0" || ticker.quote_volume === "1" || ticker.quote_volume === "NaN" || ticker.quote_volume === "-NaN") {
                            ticker.quote_volume = 0;
                        } else {
                            ticker.quote_volume = common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].convert_typed_to_satoshi(parseFloat(ticker.quote_volume), bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(row.short_backing_asset));
                        }
                        if (!ticker.percent_change || ticker.percent_change === "NaN" || ticker.percent_change === "-NaN") {
                            ticker.percent_change = "-";
                        } else {
                            if (ticker.percent_change == "0") {
                                ticker.percent_change = "0%";
                            } else {
                                ticker.percent_change = (parseFloat(ticker.latest) > 0 ? "+" : "-") + ticker.percent_change + "%";
                            }
                        }
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("exchange.vol_short"),
                            "\xA0",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                amount: ticker.quote_volume,
                                asset: row.short_backing_asset
                            }),
                            "\xA0"
                        );
                    } else {
                        return null;
                    }
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.overview.market_predicated_likelihood"),
                dataIndex: "marketLikelihood",
                align: "left",
                sorter: function sorter(a, b) {
                    return a.marketLikelihood > b.marketLikelihood ? 1 : a.marketLikelihood < b.marketLikelihood ? -1 : 0;
                },
                render: function render(item, row) {
                    var ticker = Object.assign({}, _this2.state.ticker[row.asset_id]);

                    if (_this2.state.ticker[row.asset_id]) {
                        if (!ticker.latest || ticker.latest === "0" || ticker.latest === "1" || ticker.latest === "NaN" || ticker.latest === "-NaN") {
                            ticker.latest = "-";
                        } else {
                            ticker.latest = (parseFloat(ticker.latest) * 100).toPrecision(3) + "%";
                        }
                        if (!ticker.highest_bid || ticker.highest_bid === "0" || ticker.highest_bid === "1" || ticker.highest_bid === "NaN" || ticker.highest_bid === "-NaN") {
                            ticker.highest_bid = "-";
                        } else {
                            ticker.highest_bid = (parseFloat(ticker.highest_bid) * 100).toPrecision(3) + "%";
                        }
                        if (!ticker.lowest_ask || ticker.lowest_ask === "0" || ticker.lowest_ask === "1" || ticker.lowest_ask === "NaN" || ticker.lowest_ask === "-NaN") {
                            ticker.lowest_ask = "-";
                        } else {
                            ticker.lowest_ask = (parseFloat(ticker.lowest_ask) * 100).toPrecision(3) + "%";
                        }
                        return ticker.latest !== "-" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                ticker.latest,
                                "\xA0"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                { className: "supsub" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "sup",
                                    { className: "superscript" },
                                    ticker.highest_bid
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "sub",
                                    { className: "subscript" },
                                    ticker.lowest_ask
                                )
                            ),
                            "\xA0\xA0\xA0"
                        ) : "-";
                    } else {
                        return null;
                    }
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.overview.description"),
                dataIndex: "description",
                align: "left",
                sorter: function sorter(a, b) {
                    if (!a.description || a.description === "") return -1;
                    if (!b.description || b.description === "") return 1;
                    return a.description.localeCompare(b.description);
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "normal"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            item
                        )
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.overview.expiry"),
                dataIndex: "expiry",
                align: "left",
                sorter: function sorter(a, b) {
                    if (!a.expiry || a.expiry === "") return -1;
                    if (!b.expiry || b.expiry === "") return 1;
                    return a.expiry.localeCompare(b.expiry);
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "normal"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            item
                        )
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.overview.action"),
                align: "center",
                render: function render(dataItem) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        },
                        isOwnedByCurrent(dataItem.issuer) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__["Button"],
                            {
                                style: { width: "170px" },
                                className: "align-middle",
                                onClick: function onClick() {
                                    return _this2.onMarketAction(dataItem, "resolve");
                                }
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.overview.resolve")
                        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__["Button"],
                                {
                                    style: { marginRight: "5px" },
                                    className: "align-middle",
                                    onClick: function onClick() {
                                        return _this2.onMarketAction(dataItem, "yes");
                                    }
                                },
                                "Details"
                            )
                        )
                    );
                }
            }];
        }
    }, {
        key: "_decideRowClassName",
        value: function _decideRowClassName(row, index) {
            return this.props.selectedPredictionMarket ? "selected-row" : "";
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            var _this3 = this;

            if (prevProps.predictionMarkets.length !== this.props.predictionMarkets.length) {
                this.props.predictionMarkets.forEach(function (market) {
                    if (!(market.asset.id in Object.keys(_this3.tickersLoaded))) {
                        _this3.tickersLoaded[market.asset.id] = {};
                        _actions_MarketsActions__WEBPACK_IMPORTED_MODULE_9__["default"].getTicker(market.short_backing_asset, market.asset.id).then(function (result) {
                            var ticker = Object.assign(_this3.tickersLoaded, _this3.state.ticker);
                            ticker[market.asset.id] = result;
                            _this3.tickersLoaded[market.asset.id] = result;
                            _this3.setState({ ticker: ticker });
                        }).catch(function (err) {
                            return console.error(err);
                        });
                    }
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var header = this.getHeader();

            var filteredMarkets = [];

            if (this.props.selectedPredictionMarket) {
                filteredMarkets = [this.props.selectedPredictionMarket];
            } else {
                if (this.props.predictionMarkets) {
                    filteredMarkets = this.props.predictionMarkets;
                    var i = 0;
                    filteredMarkets = filteredMarkets.map(function (item) {
                        return _extends({}, item, {
                            key: "" + item.asset_id + i++
                        });
                    });
                }
            }

            var rowSelection = {
                type: this.props.selectedPredictionMarket ? undefined : "radio",
                hideDefaultSelections: true,
                // Uncomment the following line to show translated text as a cancellable column header instead of checkbox
                //columnTitle: counterpart.translate("wallet.cancel")
                onChange: function onChange(selectedRowKeys, selectedRows) {
                    if (selectedRows.length > 0) {
                        _this4.onMarketAction(selectedRows[0], null);
                    } else {
                        _this4.onMarketAction(null, null);
                    }
                },
                // Required in order resetSelected to work
                selectedRowKeys: this.props.selectedPredictionMarket ? [this.props.selectedPredictionMarket.key] : []
            };
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_7__["default"], {
                rowSelection: rowSelection,
                rows: filteredMarkets,
                header: header,
                pageSize: 10,
                rowClassName: this._decideRowClassName.bind(this),
                loading: this.props.loading,
                totalLabel: "utility.total_x_assets"
            });
        }
    }]);

    return PredictionMarketsOverviewTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PredictionMarketsOverviewTable.propTypes = {
    predictionMarkets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    onMarketAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAccount.isRequired,
    selectedPredictionMarket: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

PredictionMarketsOverviewTable.defaultProps = {
    predictionMarkets: []
};

/* harmony default export */ __webpack_exports__["default"] = (PredictionMarketsOverviewTable = react_debounce_render__WEBPACK_IMPORTED_MODULE_10___default()(PredictionMarketsOverviewTable, 150, { leading: false }));

/***/ }),

/***/ 2942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2943);
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

/***/ 2943:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2945:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2469);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(435);
/* harmony import */ var components_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2942);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2018);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2162);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var PredictionMarketDetailsTable = function (_Component) {
    _inherits(PredictionMarketDetailsTable, _Component);

    function PredictionMarketDetailsTable() {
        _classCallCheck(this, PredictionMarketDetailsTable);

        return _possibleConstructorReturn(this, (PredictionMarketDetailsTable.__proto__ || Object.getPrototypeOf(PredictionMarketDetailsTable)).apply(this, arguments));
    }

    _createClass(PredictionMarketDetailsTable, [{
        key: "getHeader",
        value: function getHeader() {
            var _this2 = this;

            var currentAccountId = this.props.currentAccount.get("id");
            return [{
                title: "#",
                dataIndex: "order_id",
                align: "left",
                sorter_inactive: function sorter_inactive(a, b) {
                    return a.order_id > b.order_id ? 1 : a.order_id < b.order_id ? -1 : 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            item
                        )
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.details.predictor"),
                dataIndex: "opinionator",
                align: "left",
                sorter_inactive: function sorter_inactive(a, b) {
                    var a_name = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getAccount(a.opinionator).get("name");
                    var b_name = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getAccount(b.opinionator).get("name");
                    return a_name > b_name ? 1 : a_name < b_name ? -1 : 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: item })
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.details.prediction"),
                dataIndex: "opinion",
                align: "left",
                sorter_inactive: function sorter_inactive(a, b) {
                    return a.opinion > b.opinion ? 1 : a.opinion < b.opinion ? -1 : 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.details." + (item == "yes" ? "proves_true" : "incorrect"))
                        )
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.details.predicated_likelihood"),
                dataIndex: "likelihood",
                align: "left",
                sortOrder: this.props.opinionFilter == "yes" ? "descend" : "ascend",
                sorter: function sorter(a, b) {
                    return a.likelihood > b.likelihood ? 1 : a.likelihood < b.likelihood ? -1 : 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            (item * 100).toPrecision(3),
                            "%"
                        )
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.details.premium"),
                dataIndex: "premium",
                align: "left",
                sorter_inactive: function sorter_inactive(a, b) {
                    return a.amount > b.amount ? 1 : a.amount < b.amount ? -1 : 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            amount: item.amount,
                            asset: item.asset_id
                        })
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.details.commission"),
                dataIndex: "commission",
                align: "left",
                sorter_inactive: function sorter_inactive(a, b) {
                    return a.fee > b.fee ? 1 : a.fee < b.fee ? -1 : 0;
                },
                render: function render(item, row) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            amount: item.amount,
                            asset: item.asset_id
                        }),
                        "\xA0(",
                        (row.commission.amount / row.premium.amount * 100).toPrecision(3),
                        "%)"
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.details.potential_profit"),
                dataIndex: "potentialProfit",
                align: "left",
                sorter_inactive: function sorter_inactive(a, b) {
                    return a.amount > b.amount ? 1 : a.amount < b.amount ? -1 : 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            amount: item.amount,
                            asset: item.asset_id
                        })
                    );
                }
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.overview.action"),
                align: "left",
                render: function render(dataItem) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "right"
                            }
                        },
                        currentAccountId && dataItem.opinionator === currentAccountId ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Button"],
                            {
                                onClick: function onClick() {
                                    _this2.props.onCancel(dataItem);
                                }
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.details.cancel")
                        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate(dataItem.opinion == "yes" ? "prediction.tooltips.oppose_proves_true" : "prediction.tooltips.oppose_is_incorrect")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
                                        style: {
                                            fontSize: "1.3rem",
                                            marginRight: "0.5rem"
                                        },
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Button"],
                                    {
                                        onClick: function onClick() {
                                            _this2.props.onOppose(dataItem);
                                        }
                                    },
                                    counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("prediction.details.oppose")
                                )
                            )
                        )
                    );
                }
            }];
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var header = this.getHeader();

            var filteredOpinions = this.props.predictionMarketData.opinions.filter(function (item) {
                var accountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getAccount(item.opinionator) ? bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getAccount(item.opinionator).get("name") : null;
                if (_this3.props.detailsSearchTerm) {
                    if ((accountName + "\0" + item.opinion).toUpperCase().indexOf(_this3.props.detailsSearchTerm) === -1) {
                        return false;
                    }
                }
                if (_this3.props.opinionFilter) {
                    if (_this3.props.opinionFilter == "all") {
                        return true;
                    } else {
                        if (!(_this3.props.opinionFilter == item.opinion)) {
                            return false;
                        }
                    }
                }
                return true;
            });

            var i = 0;
            filteredOpinions = filteredOpinions.map(function (item) {
                return _extends({}, item, {
                    key: "" + item.order_id + i++
                });
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_6__["default"], {
                rows: filteredOpinions,
                header: header,
                pageSize: 10
            });
        }
    }]);

    return PredictionMarketDetailsTable;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PredictionMarketDetailsTable);


PredictionMarketDetailsTable.propTypes = {
    predictionMarketData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
    onOppose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccount.isRequired,
    detailsSearchTerm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    opinionFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

PredictionMarketDetailsTable.defaultProps = {
    predictionMarketData: {}
};

/***/ }),

/***/ 2948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2141);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(613);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2393);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(435);
/* harmony import */ var components_Exchange_ExchangeInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2414);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2018);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(586);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var AddOpinionModal = function (_Modal) {
    _inherits(AddOpinionModal, _Modal);

    function AddOpinionModal(props) {
        _classCallCheck(this, AddOpinionModal);

        var _this = _possibleConstructorReturn(this, (AddOpinionModal.__proto__ || Object.getPrototypeOf(AddOpinionModal)).call(this, props));

        _this.state = {
            newOpinionParameters: {
                opinionator: null,
                opinion: _this.props.preselectedOpinion,
                amount: _this.props.preselectedAmount / Math.pow(10, _this.props.baseAsset.get("precision")) || " ",
                probability: _this.props.preselectedProbability || null,
                fee: null
            },
            showWarning: false,
            inProgress: false,
            selectedOpinion: _this.props.preselectedOpinion,
            selectedAsset: null,
            wrongPropability: false
        };

        _this.handleOpinionChange = _this.handleOpinionChange.bind(_this);
        _this.handleAmountChange = _this.handleAmountChange.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.handleProbabilityChange = _this.handleProbabilityChange.bind(_this);
        return _this;
    }

    _createClass(AddOpinionModal, [{
        key: "_createOrder",
        value: function _createOrder() {
            var _this2 = this;

            this.setState({ inProgress: true });
            var type = this.state.newOpinionParameters.opinion === "yes" ? "buy" : "shortAndSell";
            var feeID = this.props.baseAsset.get("id");

            var date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            var bid = {
                for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                    asset_id: this.props.baseAsset.get("id"),
                    precision: this.props.baseAsset.get("precision"),
                    amount: this.state.newOpinionParameters.amount * Math.pow(10, this.props.quoteAsset.get("precision")) * this.state.newOpinionParameters.probability
                }),
                to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                    asset_id: this.props.quoteAsset.get("id"),
                    precision: this.props.quoteAsset.get("precision"),
                    amount: this.state.newOpinionParameters.amount * Math.pow(10, this.props.quoteAsset.get("precision"))
                })
            };
            bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Price"]({ base: bid.for_sale, quote: bid.to_receive });
            var ask = {
                for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                    asset_id: this.props.quoteAsset.get("id"),
                    precision: this.props.quoteAsset.get("precision"),
                    amount: this.state.newOpinionParameters.amount * Math.pow(10, this.props.quoteAsset.get("precision"))
                }),
                to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                    asset_id: this.props.baseAsset.get("id"),
                    precision: this.props.baseAsset.get("precision"),
                    amount: this.state.newOpinionParameters.amount * Math.pow(10, this.props.quoteAsset.get("precision")) * this.state.newOpinionParameters.probability
                })
            };
            ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Price"]({ base: ask.for_sale, quote: ask.to_receive });

            var current = type === "buy" ? ask : bid;

            if (type === "buy") {
                var buy = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["LimitOrderCreate"]({
                    for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                        asset_id: this.props.baseAsset.get("id"),
                        precision: this.props.baseAsset.get("precision"),
                        amount: common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].convert_typed_to_satoshi(this.state.newOpinionParameters.amount, this.props.baseAsset)
                    }),
                    expiration: null,
                    to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                        asset_id: this.props.quoteAsset.get("id"),
                        precision: this.props.quoteAsset.get("precision"),
                        amount: common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].convert_typed_to_satoshi(this.state.newOpinionParameters.amount, this.props.quoteAsset) / parseFloat(this.state.newOpinionParameters.probability)
                    }),
                    seller: this.props.currentAccount.get("id"),
                    fee: {
                        asset_id: feeID,
                        amount: 0
                    }
                });

                return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].createLimitOrder2(buy).then(function (result) {
                    _this2.setState({ inProgress: false });
                    if (result.error) {
                        if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Notification"].error({
                            message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.exchange_unknown_error_place_order", {
                                amount: current.to_receive.getAmount({
                                    real: true
                                }),
                                symbol: current.to_receive.asset_id
                            })
                        });
                    }
                }).catch(function (e) {
                    console.error("order failed:", e);
                });
            }

            if (type === "shortAndSell") {
                var sell = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["LimitOrderCreate"]({
                    for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                        asset_id: this.props.quoteAsset.get("id"),
                        precision: this.props.quoteAsset.get("precision"),
                        amount: common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].convert_typed_to_satoshi(this.state.newOpinionParameters.amount, this.props.quoteAsset)
                    }),
                    expiration: null,
                    to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                        asset_id: this.props.baseAsset.get("id"),
                        precision: this.props.baseAsset.get("precision"),
                        amount: common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].convert_typed_to_satoshi(this.state.newOpinionParameters.amount, this.props.baseAsset) * parseFloat(this.state.newOpinionParameters.probability)
                    }),
                    seller: this.props.currentAccount.get("id"),
                    fee: {
                        asset_id: feeID,
                        amount: 0
                    }
                });
                var collateral = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                    amount: sell.amount_for_sale.getAmount(),
                    asset_id: this.props.baseAsset.get("id"),
                    precision: this.props.baseAsset.get("precision")
                });
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].createPredictionShort(sell, collateral).then(function (result) {
                    _this2.setState({ inProgress: false });
                    if (result.error) {
                        if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Notification"].error({
                            message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.exchange_unknown_error_place_order", {
                                amount: buyAssetAmount,
                                symbol: buyAsset.symbol
                            })
                        });
                    }
                });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (this.props.preselectedOpinion !== prevProps.preselectedOpinion || this.props.preselectedAmount !== prevProps.preselectedAmount || this.props.preselectedProbability !== prevProps.preselectedProbability) {
                this._updateStateFromProps();
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._updateStateFromProps();
        }
    }, {
        key: "_updateStateFromProps",
        value: function _updateStateFromProps() {
            var newOpinionParameters = this.state.newOpinionParameters;
            newOpinionParameters = Object.assign({}, newOpinionParameters);
            newOpinionParameters.opinion = this.props.preselectedOpinion;
            newOpinionParameters.amount = this.props.preselectedAmount / Math.pow(10, this.props.baseAsset.get("precision")) || " ";
            newOpinionParameters.probability = this.props.preselectedProbability || null;
            this.setState({
                newOpinionParameters: newOpinionParameters,
                selectedOpinion: this.props.preselectedOpinion
            });
        }
    }, {
        key: "handleOpinionChange",
        value: function handleOpinionChange() {
            var newOpinion = this.state.newOpinionParameters;
            newOpinion.opinion = newOpinion.opinion === "no" ? "yes" : "no";
            newOpinion.opinionator = this.props.currentAccount.get("id");
            this.setState({
                newOpinionParameters: newOpinion,
                selectedOpinion: newOpinion.opinion
            });
        }
    }, {
        key: "handleAmountChange",
        value: function handleAmountChange(_ref) {
            var amount = _ref.amount,
                asset = _ref.asset;

            var newOpinion = this.state.newOpinionParameters;
            newOpinion.amount = amount;
            newOpinion.opinionator = this.props.currentAccount.get("id");
            this.setState({ newOpinionParameter: newOpinion });

            if (typeof asset === "string") {
                this.setState({ selectedAsset: asset });
            }
        }
    }, {
        key: "handleProbabilityChange",
        value: function handleProbabilityChange(e) {
            var newOpinion = this.state.newOpinionParameters;
            newOpinion.probability = e.target.value;
            this.setState({
                newOpinionParameter: newOpinion,
                wrongProbability: !this._isProbabilityValid(newOpinion)
            });
        }
    }, {
        key: "_isProbabilityValid",
        value: function _isProbabilityValid() {
            var newOpinion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (newOpinion == null) {
                newOpinion = this.state.newOpinionParameters;
            }
            if (!newOpinion.probability || newOpinion.probability <= 0.01 || newOpinion.probability >= 0.99) {
                return false;
            } else {
                return true;
            }
        }
    }, {
        key: "_isFormValid",
        value: function _isFormValid() {
            return this._isProbabilityValid() && parseFloat(this.state.newOpinionParameters.amount) > 0;
        }
    }, {
        key: "_getPotentialWinnings",
        value: function _getPotentialWinnings() {
            if (this.state.newOpinionParameters.probability && this.state.newOpinionParameters.amount) {
                if (this.state.newOpinionParameters.opinion === "yes") {
                    return common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].format_number(this.state.newOpinionParameters.amount / parseFloat(this.state.newOpinionParameters.probability), this.props.baseAsset.get("precision"), false);
                } else {
                    return common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].format_number(this.state.newOpinionParameters.amount * (1 + (this.state.newOpinionParameters.probability ? parseFloat(this.state.newOpinionParameters.probability) : 0)), this.props.baseAsset.get("precision"), false);
                }
            } else {
                return 0;
            }
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            if (this._isFormValid()) {
                this._createOrder.call(this);
            } else {
                this.setState({ showWarning: true });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                showWarning = _state.showWarning,
                newOpinionParameters = _state.newOpinionParameters,
                wrongProbability = _state.wrongProbability;


            var footer = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                {
                    type: "primary",
                    key: "submit",
                    onClick: this.onSubmit,
                    disabled: this.state.inProgress
                },
                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("global.confirm")
            ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                {
                    key: "cancel",
                    onClick: this.props.onClose,
                    disabled: this.state.inProgress
                },
                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("global.cancel")
            )];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Modal"],
                {
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.add_opinion_modal.title" }),
                    visible: this.props.visible,
                    onCancel: this.props.onClose,
                    overlay: true,
                    closable: !this.state.inProgress,
                    footer: footer
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "prediction-markets--add-prediction-offer" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"],
                        { className: "full-width", layout: "vertical" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.add_opinion_modal.symbol" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                                    type: "text",
                                    disabled: true,
                                    tabIndex: 1,
                                    value: this.props.predictionMarket.symbol
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.details.prediction" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                                    type: "text",
                                    disabled: true,
                                    tabIndex: 2,
                                    value: this.props.predictionMarket.condition
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    className: !newOpinionParameters.probability && showWarning || wrongProbability ? "has-error" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.details.predicated_likelihood" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Exchange_ExchangeInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                        placeholder: "0.0",
                                        onChange: this.handleProbabilityChange,
                                        value: this.state.newOpinionParameters.probability
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            { style: { marginBottom: "1rem" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.details.i_think_that" })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group,
                                {
                                    value: this.state.selectedOpinion,
                                    onChange: this.handleOpinionChange
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Radio"],
                                    { value: "yes" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.details.proves_true")
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Radio"],
                                    { value: "no" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.details.incorrect")
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.details.premium" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        onChange: this.handleAmountChange,
                                        placeholder: "0.0",
                                        tabIndex: 6,
                                        amount: this.state.newOpinionParameters.amount,
                                        asset: this.props.baseAsset.get("id")
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.details.commission" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    disabled: true,
                                    amount: Math.min(this.props.predictionMarket.max_market_fee, this.state.newOpinionParameters.amount * this.props.predictionMarket.market_fee / 10000),
                                    asset: this.props.baseAsset.get("id")
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.details.potential_profit" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    disabled: true,
                                    amount: this._getPotentialWinnings(),
                                    asset: this.props.baseAsset.get("id")
                                })
                            )
                        ),
                        this.state.inProgress ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "footer.loading" }) : null
                    )
                )
            );
        }
    }]);

    return AddOpinionModal;
}(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Modal"]);

/* harmony default export */ __webpack_exports__["default"] = (AddOpinionModal);


AddOpinionModal.propTypes = {
    visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    predictionMarket: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
    opinion: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
    currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_10__["default"].ChainAccount.isRequired,
    preselectedOpinion: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    preselectedAmount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    preselectedProbability: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    baseAsset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    quoteAsset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

AddOpinionModal.defaultProps = {
    visible: false,
    predictionMarket: null,
    opinion: {}
};

/***/ }),

/***/ 2949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2144);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2416);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(597);
/* harmony import */ var chain_asset_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(598);
/* harmony import */ var chain_asset_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chain_asset_constants__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(435);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(811);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var IS_BITASSET = true;

var CreateMarketModal = function (_Modal) {
    _inherits(CreateMarketModal, _Modal);

    function CreateMarketModal(props) {
        _classCallCheck(this, CreateMarketModal);

        var _this = _possibleConstructorReturn(this, (CreateMarketModal.__proto__ || Object.getPrototypeOf(CreateMarketModal)).call(this, props));

        _this.state = {
            marketOptions: {
                precision: "5",
                max_supply: 100000,
                max_market_fee: 0,
                market_fee_percent: 0,
                description: { main: "" },
                reward_percent: 0,
                symbol: ""
            },
            showWarning: false,
            wrongSymbol: false,
            wrongDate: false,
            core_exchange_rate: {
                quote: {
                    asset_id: null,
                    amount: 1
                },
                base: {
                    asset_id: "1.3.0",
                    amount: 1
                }
            },
            bitasset_opts: {
                feed_lifetime_sec: 60 * 60 * 24,
                minimum_feeds: 7,
                force_settlement_delay_sec: 60 * 60 * 24,
                force_settlement_offset_percent: 1 * chain_asset_constants__WEBPACK_IMPORTED_MODULE_8___default.a.GRAPHENE_1_PERCENT,
                maximum_force_settlement_volume: 20 * chain_asset_constants__WEBPACK_IMPORTED_MODULE_8___default.a.GRAPHENE_1_PERCENT,
                short_backing_asset: "1.3.0"
            },
            inProgress: false
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleAssetChange = _this.handleAssetChange.bind(_this);
        _this.handleFeeChange = _this.handleFeeChange.bind(_this);
        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }

    _createClass(CreateMarketModal, [{
        key: "_getPermissionsAndFlags",
        value: function _getPermissionsAndFlags() {
            var flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getFlagBooleans(0, IS_BITASSET);
            var permissionBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getFlagBooleans("all", IS_BITASSET);

            flagBooleans["charge_market_fee"] = true;
            var flags = common_asset_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getFlags(flagBooleans, IS_BITASSET);
            return {
                flags: flags,
                permissions: common_asset_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getPermissions(permissionBooleans, IS_BITASSET)
            };
        }
    }, {
        key: "_createAsset",
        value: function _createAsset() {
            var _this2 = this;

            var _state = this.state,
                marketOptions = _state.marketOptions,
                core_exchange_rate = _state.core_exchange_rate,
                bitasset_opts = _state.bitasset_opts;

            var _getPermissionsAndFla = this._getPermissionsAndFlags(),
                permissions = _getPermissionsAndFla.permissions,
                flags = _getPermissionsAndFla.flags;

            var description = JSON.stringify(this.state.marketOptions.description);

            this.setState({ inProgress: true });
            var accountId = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getAccount(this.props.currentAccount).get("id");
            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].createAsset(accountId, marketOptions, flags, permissions, core_exchange_rate, IS_BITASSET, true, bitasset_opts, description).then(function (result) {
                _this2.setState({ inProgress: false });
                console.log("... AssetActions.createAsset(account_id, update)", accountId, marketOptions, flags, permissions);
                _this2.props.onMarketCreated(marketOptions.symbol);
            }).catch(function (error) {
                console.error(error);
                _this2.setState({ inProgress: false });
            });
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var marketOptions = this.state.marketOptions;
            if (event instanceof moment__WEBPACK_IMPORTED_MODULE_10___default.a) {
                event.set("milliseconds", 0);
                event = {
                    target: {
                        name: "expiry",
                        value: event.toISOString()
                    }
                };
            }
            switch (event.target.name) {
                case "symbol":
                    marketOptions[event.target.name] = event.target.value.toUpperCase();
                    break;
                case "main":
                case "condition":
                case "expiry":
                    marketOptions.description[event.target.name] = event.target.value;
                    break;
                default:
                    marketOptions[event.target.name] = event.target.value;
                    break;
            }
            this.setState({ marketOptions: marketOptions });
        }
    }, {
        key: "handleAssetChange",
        value: function handleAssetChange(asset) {
            if (asset) {
                var newBitassetOpts = this.state.bitasset_opts;
                var newMarketOptions = this.state.marketOptions;
                var newCoreExchangeRate = this.state.core_exchange_rate;
                newBitassetOpts.short_backing_asset = asset;
                newMarketOptions.precision = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getAsset(asset).get("precision");
                newCoreExchangeRate.base.asset_id = asset;
                this.setState({
                    bitasset_opts: newBitassetOpts,
                    core_exchange_rate: newCoreExchangeRate,
                    marketOptions: newMarketOptions
                });
            }
        }
    }, {
        key: "_forcePositive",
        value: function _forcePositive(number) {
            return parseFloat(number) < 0 ? "0" : number;
        }
    }, {
        key: "handleFeeChange",
        value: function handleFeeChange(event) {
            console.log(event);

            var newMarketOptions = this.state.marketOptions;
            newMarketOptions.market_fee_percent = this._forcePositive(event.target.value);

            this.setState({
                marketOptions: newMarketOptions
            });
        }
    }, {
        key: "_isFormValid",
        value: function _isFormValid() {
            if (this.props.symbols.includes(this.state.marketOptions.symbol)) {
                this.setState({ wrongSymbol: true });
                return false;
            } else {
                this.setState({ wrongSymbol: false });
            }

            var now = new Date();
            var expiry = new Date(this.state.marketOptions.description.expiry);
            if (now > expiry) {
                this.setState({ wrongDate: true });
                return false;
            } else {
                this.setState({ wrongDate: false });
            }

            return this.state.marketOptions.symbol && this.state.marketOptions.description.main && this.state.marketOptions.description.condition && this.state.marketOptions.description.expiry;
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            if (this._isFormValid()) {
                if (e) {
                    e.preventDefault();
                }
                this._createAsset().call(this);
            } else {
                this.setState({ showWarning: true });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _state2 = this.state,
                showWarning = _state2.showWarning,
                marketOptions = _state2.marketOptions,
                wrongSymbol = _state2.wrongSymbol,
                wrongDate = _state2.wrongDate;


            var footer = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                {
                    type: "primary",
                    key: "submit",
                    onClick: this.onSubmit,
                    disabled: this.state.inProgress
                },
                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("global.confirm")
            ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                {
                    key: "cancel",
                    onClick: this.props.onClose,
                    disabled: this.state.inProgress
                },
                counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("global.cancel")
            )];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Modal"],
                {
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.create_market_modal.title" }),
                    visible: this.props.visible,
                    onCancel: this.props.onClose,
                    overlay: true,
                    closable: !this.state.inProgress,
                    footer: footer
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "prediction-markets--create-prediction-market" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"],
                        { className: "full-width", layout: "vertical" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    className: !marketOptions.symbol && showWarning || wrongSymbol ? "has-error" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                                        {
                                            title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.create_market_modal.tooltip_symbol"),
                                            placement: "topLeft"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.create_market_modal.symbol" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                                            style: {
                                                marginLeft: "0.5rem"
                                            },
                                            theme: "filled",
                                            type: "question-circle"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                                        name: "symbol",
                                        type: "text",
                                        onChange: this.handleChange,
                                        tabIndex: 1,
                                        value: this.state.marketOptions.symbol
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    className: !marketOptions.description.condition && showWarning ? "has-error" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                                        {
                                            title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.create_market_modal.tooltip_condition"),
                                            placement: "topLeft"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.create_market_modal.condition" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                                            style: {
                                                marginLeft: "0.5rem"
                                            },
                                            theme: "filled",
                                            type: "question-circle"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                                        name: "condition",
                                        type: "text",
                                        onChange: this.handleChange,
                                        tabIndex: 2
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    className: !marketOptions.description.main && showWarning ? "has-error" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                                        {
                                            title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.create_market_modal.tooltip_description"),
                                            placement: "topLeft"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.create_market_modal.description" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                                            style: {
                                                marginLeft: "0.5rem"
                                            },
                                            theme: "filled",
                                            type: "question-circle"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
                                        name: "main",
                                        onChange: this.handleChange,
                                        tabIndex: 3
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    className: !marketOptions.description.expiry && showWarning || wrongDate ? "has-error" : ""
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "label",
                                    { className: "left-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                                        {
                                            title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.create_market_modal.tooltip_resolution_date"),
                                            placement: "topLeft"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.create_market_modal.resolution_date" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                                            style: {
                                                marginLeft: "0.5rem"
                                            },
                                            theme: "filled",
                                            type: "question-circle"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
                                            style: {
                                                width: "100%"
                                            },
                                            name: "expiry",
                                            showTime: true,
                                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.create_market_modal.select_date_and_time"),
                                            onChange: this.handleChange,
                                            onOk: this.handleChange,
                                            tabIndex: 4
                                        })
                                    )
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.create_market_modal.tooltip_backing_asset"),
                                        placement: "topLeft"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.create_market_modal.backing_asset" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                                        style: {
                                            marginLeft: "0.5rem"
                                        },
                                        theme: "filled",
                                        type: "question-circle"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    assets: ["1.3.0", "1.3.113", "1.3.120", "1.3.121"],
                                    value: this.state.bitasset_opts.short_backing_asset,
                                    onChange: this.handleAssetChange,
                                    tabIndex: 5
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("prediction.create_market_modal.tooltip_commission"),
                                        placement: "topLeft"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.create_market_modal.commission" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                                        style: {
                                            marginLeft: "0.5rem"
                                        },
                                        theme: "filled",
                                        type: "question-circle"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                                    tabIndex: 6,
                                    type: "number",
                                    value: this.state.marketOptions.market_fee_percent,
                                    onChange: this.handleFeeChange
                                })
                            )
                        ),
                        this.state.inProgress ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "footer.loading" }) : null
                    )
                )
            );
        }
    }]);

    return CreateMarketModal;
}(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Modal"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateMarketModal);


CreateMarketModal.propTypes = {
    visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    currentAccount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    symbols: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    onMarketCreated: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

CreateMarketModal.defaultProps = {
    visible: false
};

/***/ }),

/***/ 2950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(845);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1907);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(602);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ResolveModal = function (_Modal) {
    _inherits(ResolveModal, _Modal);

    function ResolveModal(props) {
        _classCallCheck(this, ResolveModal);

        var _this = _possibleConstructorReturn(this, (ResolveModal.__proto__ || Object.getPrototypeOf(ResolveModal)).call(this, props));

        _this.state = {
            resolveParameters: {
                asset_id: _this.props.predictionMarket.asset_id,
                result: "yes"
            },
            result: "yes"
        };

        _this.handleResultChange = _this.handleResultChange.bind(_this);
        return _this;
    }

    _createClass(ResolveModal, [{
        key: "handleResultChange",
        value: function handleResultChange(event) {
            var result = event.target.value;
            this.setState({
                resolveParameters: _extends({}, this.state.resolveParameters, {
                    result: result
                }),
                result: result
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var footer = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                {
                    type: "primary",
                    key: "submit",
                    onClick: function onClick() {
                        return _this2.props.onResolveMarket(_this2.state.resolveParameters);
                    },
                    disabled: this.state.inProgress
                },
                counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("global.confirm")
            ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                {
                    key: "cancel",
                    onClick: this.props.onClose,
                    disabled: this.state.inProgress
                },
                counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("global.cancel")
            )];
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Modal"],
                {
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.resolve_modal.title" }),
                    visible: this.props.visible,
                    onCancel: this.props.onClose,
                    overlay: true,
                    closable: !this.state.inProgress,
                    footer: footer
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "prediction-markets--resolve-prediction-market-asset" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"],
                        { className: "full-width", layout: "vertical" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.resolve_modal.symbol" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                                    type: "text",
                                    disabled: true,
                                    tabIndex: 1,
                                    value: this.props.predictionMarket.symbol
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.resolve_modal.prediction" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                                    type: "text",
                                    disabled: true,
                                    tabIndex: 2,
                                    value: this.props.predictionMarket.condition
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "prediction.resolve_modal.the_prediction_has" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group,
                                {
                                    value: this.state.result,
                                    onChange: this.handleResultChange
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Radio"],
                                    { value: "yes" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("prediction.resolve_modal.proven_true")
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Radio"],
                                    { value: "no" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("prediction.resolve_modal.was_incorrect")
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ResolveModal;
}(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Modal"]);

/* harmony default export */ __webpack_exports__["default"] = (ResolveModal);


ResolveModal.propTypes = {
    predictionMarket: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
    onResolveMarket: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

ResolveModal.defaultProps = {
    visible: false,
    predictionMarket: null
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG0uOWZlZDI1YTAxNGVlZjcwMzk0ZDQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DdXJyZW50QWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvU2VhcmNoSW5wdXQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uTWFya2V0cy9QTUFzc2V0c0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1ByZWRpY3Rpb25NYXJrZXRzL1ByZWRpY3Rpb25NYXJrZXRzLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvUHJlZGljdGlvbk1hcmtldHMvUHJlZGljdGlvbk1hcmtldHNPdmVydmlld1RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9QYWdpbmF0ZWRMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L3BhZ2luYXRlZC1saXN0LnNjc3M/ZDczMyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uTWFya2V0cy9wcmVkaWN0aW9uLnNjc3M/YjcyMCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvUHJlZGljdGlvbk1hcmtldHMvUHJlZGljdGlvbk1hcmtldERldGFpbHNUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1ByZWRpY3Rpb25NYXJrZXRzL0FkZE9waW5pb25Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1ByZWRpY3Rpb25NYXJrZXRzL0NyZWF0ZU1hcmtldE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvUHJlZGljdGlvbk1hcmtldHMvUmVzb2x2ZU1vZGFsLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBkZWJvdW5jZVJlbmRlciBmcm9tIFwicmVhY3QtZGVib3VuY2UtcmVuZGVyXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuL0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNMb2FkZWQgPSBmdW5jdGlvbiBoYXNMb2FkZWQoY3VycmVudEFjY291bnQpIHtcclxuICAgIHJldHVybiAhIWN1cnJlbnRBY2NvdW50ICYmICEhY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYmluZFRvQ3VycmVudEFjY291bnQgPSBmdW5jdGlvbiBiaW5kVG9DdXJyZW50QWNjb3VudChcclxuICAgIFdyYXBwZWRDb21wb25lbnRcclxuKSB7XHJcbiAgICAvLyAuLi5hbmQgcmV0dXJucyBhbm90aGVyIGNvbXBvbmVudC4uLlxyXG4gICAgbGV0IEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gY2xhc3MgQmluZFRvQ3VycmVudEFjY291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC8vIHNldCBzdWJzY3JpcHRpb25cclxuICAgICAgICAgICAgYXV0b3N1YnNjcmliZTogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgaWYgKGhhc0xvYWRlZCh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgQmluZFRvQ3VycmVudEFjY291bnQgPSBCaW5kVG9DaGFpblN0YXRlKEJpbmRUb0N1cnJlbnRBY2NvdW50KTtcclxuXHJcbiAgICBCaW5kVG9DdXJyZW50QWNjb3VudCA9IGRlYm91bmNlUmVuZGVyKEJpbmRUb0N1cnJlbnRBY2NvdW50LCAxMDAsIHtcclxuICAgICAgICBsZWFkaW5nOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbm5lY3QoXHJcbiAgICAgICAgQmluZFRvQ3VycmVudEFjY291bnQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFjY291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGVhc2UtbG9naW5cIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IG5ldyBNYXAoW1tcIm5hbWVcIiwgY3VycmVudEFjY291bnRdXSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtJbnB1dCwgSWNvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5jb25zdCBzZWFyY2hJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hJbnB1dCh7XHJcbiAgICBvbkNoYW5nZSxcclxuICAgIHZhbHVlLFxyXG4gICAgcGxhY2Vob2xkZXIsXHJcbiAgICBtYXhMZW5ndGgsXHJcbiAgICBzdHlsZSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIG5hbWUsXHJcbiAgICBhdXRvQ29tcGxldGUsXHJcbiAgICBvbkNsZWFyLFxyXG4gICAgdHlwZSxcclxuICAgIC4uLm90aGVyXHJcbn0pIHtcclxuICAgIGlmIChvbkNsZWFyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vIGlmIG9uQ2xlYXI9bnVsbCwgdGhlbiBpdCB3b24ndCBiZSByZW5kZXJlZFxyXG4gICAgICAgIG9uQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDoge3ZhbHVlOiBcIlwifVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcmVmPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUgKyBcIiBzZWFyY2gtaW5wdXRcIn1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cclxuICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cclxuICAgICAgICAgICAgc3VmZml4PXtcclxuICAgICAgICAgICAgICAgIG9uQ2xlYXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWx3YXlzIGluY2x1ZGUgRE9NIHRoZSBpY29uLCBvdGhlcndpc2UgdXNlciBsb29zZXMgZm9jdXMgd2hlbiBpdCBhcHBlYXJzIGFuZCBpbnB1dCByZXNpemVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dmFsdWUgPyBcImN1cnNvci1wb2ludGVyXCIgOiBcImhpZGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG5cclxuU2VhcmNoSW5wdXQucHJvcFR5cGVzID0ge1xyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZywgLy8gY2FuIGJlIHVuZGVmaW5lZCB3aGVuIG5vIHVzZXIgaW5wdXQgaXMgcHJlc2VudFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWF4TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcblNlYXJjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHBsYWNlaG9sZGVyOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5maWx0ZXJcIiksXHJcbiAgICBzdHlsZToge3dpZHRoOiBcIjIwMHB4XCJ9LFxyXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBuYW1lOiBcImZvY3VzXCIsXHJcbiAgICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXHJcbiAgICBtYXhMZW5ndGg6IDE2LFxyXG4gICAgb25DbGVhcjogdW5kZWZpbmVkXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCB7YmluZFRvQ3VycmVudEFjY291bnR9IGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50XCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xyXG5pbXBvcnQgUHJlZGljdGlvbk1hcmtldHMgZnJvbSBcIi4vUHJlZGljdGlvbk1hcmtldHNcIjtcclxuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL01hcmtldHNTdG9yZVwiO1xyXG5pbXBvcnQge2dldFByZWRpY3Rpb25NYXJrZXRJc3N1ZXJzfSBmcm9tIFwiLi4vLi4vbGliL2NoYWluL29uQ2hhaW5Db25maWdcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlLCBGZXRjaENoYWluT2JqZWN0c30gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBhc3NldFV0aWxzIGZyb20gXCJjb21tb24vYXNzZXRfdXRpbHNcIjtcclxuXHJcbmNvbnN0IF9jb252ZXJ0UHJlZGljdGlvbk1hcmtldEZvclVJID0gYXNzZXQgPT4ge1xyXG4gICAgbGV0IG1hcmtldF9mZWUgPSAwO1xyXG4gICAgbGV0IG1heF9tYXJrZXRfZmVlID0gMDtcclxuICAgIGlmIChhc3NldC5mb3JQcmVkaWN0aW9ucy5mbGFnQm9vbGVhbnNbXCJjaGFyZ2VfbWFya2V0X2ZlZVwiXSkge1xyXG4gICAgICAgIG1hcmtldF9mZWUgPSBhc3NldC5vcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudDtcclxuICAgICAgICBtYXhfbWFya2V0X2ZlZSA9IGFzc2V0Lm9wdGlvbnMubWF4X21hcmtldF9mZWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBiaXRhc3NldERhdGEgPSBhc3NldC5iaXRhc3NldF9kYXRhIHx8IGFzc2V0LmJpdGFzc2V0IHx8IHt9O1xyXG4gICAgbGV0IHVpTWFya2V0RGF0YSA9IHtcclxuICAgICAgICBhc3NldDogYXNzZXQsXHJcbiAgICAgICAgc2hvcnRfYmFja2luZ19hc3NldDpcclxuICAgICAgICAgICAgYml0YXNzZXREYXRhLm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldCB8fCBcIjEuMy4wXCIsXHJcbiAgICAgICAgYXNzZXRfaWQ6IGFzc2V0LmlkLFxyXG4gICAgICAgIGlzc3VlcjogYXNzZXQuaXNzdWVyLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBhc3NldC5mb3JQcmVkaWN0aW9ucy5kZXNjcmlwdGlvbi5tYWluLFxyXG4gICAgICAgIHN5bWJvbDogYXNzZXQuc3ltYm9sLFxyXG4gICAgICAgIGNvbmRpdGlvbjogYXNzZXQuZm9yUHJlZGljdGlvbnMuZGVzY3JpcHRpb24uY29uZGl0aW9uLFxyXG4gICAgICAgIGV4cGlyeTogYXNzZXQuZm9yUHJlZGljdGlvbnMuZGVzY3JpcHRpb24uZXhwaXJ5LFxyXG4gICAgICAgIG9wdGlvbnM6IGFzc2V0Lm9wdGlvbnMsXHJcbiAgICAgICAgbWFya2V0Q29uZmlkZW5jZTogMCxcclxuICAgICAgICBtYXJrZXRMaWtlbGlob29kOiAwLFxyXG4gICAgICAgIG1hcmtldF9mZWUsXHJcbiAgICAgICAgbWF4X21hcmtldF9mZWVcclxuICAgIH07XHJcbiAgICByZXR1cm4gdWlNYXJrZXREYXRhO1xyXG59O1xyXG5cclxuY2xhc3MgUE1Bc3NldHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGFzdEFzc2V0U3ltYm9sOiBcIlwiLFxyXG4gICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0czogW10sXHJcbiAgICAgICAgICAgIGZldGNoaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB3aGl0ZWxpc3RlZElzc3VlcnM6IFtdLFxyXG4gICAgICAgICAgICBmZXRjaEFsbEFzc2V0czogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRQcmVkaWN0aW9uTWFya2V0TGlzdChhc3NldHMpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmFzc2V0c11cclxuICAgICAgICAgICAgLm1hcChhc3NldCA9PiBhc3NldFsxXSlcclxuICAgICAgICAgICAgLmZpbHRlcih0aGlzLl9pc1ByZWRpY3Rpb25NYXJrZXQpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5fbm9ybWFsaXplUHJlZGljdGlvbk1hcmtldEFzc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwcmV2UHJvcHMuYXNzZXRzICE9PSB0aGlzLnByb3BzLmFzc2V0cyAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoQWxsQXNzZXRzXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RBc3NldCA9IHRoaXMucHJvcHMuYXNzZXRzXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5zeW1ib2wgPCBiLnN5bWJvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5sYXN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZWRpY3Rpb25NYXJrZXRzID0gdGhpcy5fZ2V0UHJlZGljdGlvbk1hcmtldExpc3QoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0c1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyKGxhc3RBc3NldC5zeW1ib2wsIDEwMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZldGNoaW5nRmluaXNoZWQgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sYXN0QXNzZXRTeW1ib2wgPT09IGxhc3RBc3NldC5zeW1ib2w7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbk1hcmtldHM6IHByZWRpY3Rpb25NYXJrZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RBc3NldFN5bWJvbDogbGFzdEFzc2V0LnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaEFsbEFzc2V0czogIWZldGNoaW5nRmluaXNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hpbmc6ICFmZXRjaGluZ0ZpbmlzaGVkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBnZXRQcmVkaWN0aW9uTWFya2V0SXNzdWVycygpLnRoZW4od2hpdGVsaXN0ZWRJc3N1ZXJzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZ2V0V2hpdGVsaXN0ZWRBc3NldHMod2hpdGVsaXN0ZWRJc3N1ZXJzKS50aGVuKGFzc2V0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVkaWN0aW9uTWFya2V0cyA9IGFzc2V0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5fbm9ybWFsaXplUHJlZGljdGlvbk1hcmtldEFzc2V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlbGlzdGVkSXNzdWVyczogd2hpdGVsaXN0ZWRJc3N1ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9ub3JtYWxpemVQcmVkaWN0aW9uTWFya2V0QXNzZXQoYXNzZXQpIHtcclxuICAgICAgICBpZiAoIWFzc2V0LmZvclByZWRpY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGFzc2V0LmZvclByZWRpY3Rpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZmxhZ0Jvb2xlYW5zOiBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucyhcclxuICAgICAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmZsYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9jb252ZXJ0UHJlZGljdGlvbk1hcmtldEZvclVJKGFzc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBfaXNQcmVkaWN0aW9uTWFya2V0KGFzc2V0KSB7XHJcbiAgICAgICAgaWYgKCFhc3NldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJpdGFzc2V0RGF0YSA9IGFzc2V0LmJpdGFzc2V0X2RhdGEgfHwgYXNzZXQuYml0YXNzZXQgfHwge307XHJcbiAgICAgICAgcmV0dXJuIGJpdGFzc2V0RGF0YS5pc19wcmVkaWN0aW9uX21hcmtldDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfZ2V0V2hpdGVsaXN0ZWRBc3NldHMod2hpdGVsaXN0ZWRJc3N1ZXJzKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0cyA9IFtdO1xyXG4gICAgICAgIGxldCBhY2NvdW50T2JqZWN0cyA9IGF3YWl0IEZldGNoQ2hhaW5PYmplY3RzKFxyXG4gICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQsXHJcbiAgICAgICAgICAgIHdoaXRlbGlzdGVkSXNzdWVycyxcclxuICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB7fVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYWNjb3VudE9iamVjdHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLnRvSlMoKTtcclxuICAgICAgICAgICAgICAgIGFzc2V0cyA9IFsuLi5hc3NldHMsIC4uLml0ZW0uYXNzZXRzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBhc3NldHNPYmplY3RzID0gYXdhaXQgRmV0Y2hDaGFpbk9iamVjdHMoXHJcbiAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0QXNzZXQsXHJcbiAgICAgICAgICAgIGFzc2V0cyxcclxuICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB7fVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0c09iamVjdHMubWFwKGl0ZW0gPT4gaXRlbS50b0pTKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQWxsQXNzZXRzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZldGNoaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2hBbGxBc3NldHM6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgMTUwbXMgdG8gbWFrZSBzdXJlIGxvYWRpbmcgaXMgZGlzcGxheWVkXHJcbiAgICAgICAgICAgICAgICAvLyAoQmluZFRvQ3VycmVudEFjY291bnQgYW5kIFByZWRpY3Rpb01hcmtldHNPdmVydmlld1RhYmxlIGFyZSBib3RoIGRlYm91bmNlZClcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gQXNzZXRBY3Rpb25zLmdldEFzc2V0TGlzdChcIlwiLCAxMDApLCAzMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFByZWRpY3Rpb25NYXJrZXRzXHJcbiAgICAgICAgICAgICAgICBhc3NldHM9e3RoaXMucHJvcHMuYXNzZXRzfVxyXG4gICAgICAgICAgICAgICAgd2hpdGVsaXN0ZWRJc3N1ZXJzPXt0aGlzLnN0YXRlLndoaXRlbGlzdGVkSXNzdWVyc31cclxuICAgICAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXRzPXt0aGlzLnN0YXRlLnByZWRpY3Rpb25NYXJrZXRzfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5mZXRjaGluZ31cclxuICAgICAgICAgICAgICAgIGZldGNoQWxsQXNzZXRzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaEFsbEFzc2V0cygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5QTUFzc2V0c0NvbnRhaW5lciA9IGNvbm5lY3QoXHJcbiAgICBQTUFzc2V0c0NvbnRhaW5lcixcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtBc3NldFN0b3JlLCBNYXJrZXRzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldHM6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHMsXHJcbiAgICAgICAgICAgICAgICBidWNrZXRTaXplOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5idWNrZXRTaXplLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdDogTWFya2V0c1N0b3JlLmdldFN0YXRlKClcclxuICAgICAgICAgICAgICAgICAgICAuY3VycmVudEdyb3VwTGltaXQsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXRMaW1pdE9yZGVyczogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0TGltaXRPcmRlcnNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoUE1Bc3NldHNDb250YWluZXIgPSBiaW5kVG9DdXJyZW50QWNjb3VudChQTUFzc2V0c0NvbnRhaW5lcikpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xyXG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgUHJlZGljdGlvbk1hcmtldHNPdmVydmlld1RhYmxlIGZyb20gXCIuL1ByZWRpY3Rpb25NYXJrZXRzT3ZlcnZpZXdUYWJsZVwiO1xyXG5pbXBvcnQgUHJlZGljdGlvbk1hcmtldERldGFpbHNUYWJsZSBmcm9tIFwiLi9QcmVkaWN0aW9uTWFya2V0RGV0YWlsc1RhYmxlXCI7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9TZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQgSGVscENvbnRlbnQgZnJvbSBcIi4uL1V0aWxpdHkvSGVscENvbnRlbnRcIjtcclxuaW1wb3J0IEFkZE9waW5pb25Nb2RhbCBmcm9tIFwiLi9BZGRPcGluaW9uTW9kYWxcIjtcclxuaW1wb3J0IENyZWF0ZU1hcmtldE1vZGFsIGZyb20gXCIuL0NyZWF0ZU1hcmtldE1vZGFsXCI7XHJcbmltcG9ydCBSZXNvbHZlTW9kYWwgZnJvbSBcIi4vUmVzb2x2ZU1vZGFsXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwgRmV0Y2hDaGFpbk9iamVjdHN9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge1N3aXRjaCwgQnV0dG9uLCBSYWRpbywgSWNvbiwgVG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQge0Fzc2V0LCBQcmljZX0gZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7YmluZFRvQ3VycmVudEFjY291bnR9IGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50XCI7XHJcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcblxyXG5jbGFzcyBQcmVkaWN0aW9uTWFya2V0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VhcmNoVGVybTogXCJcIixcclxuICAgICAgICAgICAgZGV0YWlsc1NlYXJjaFRlcm06IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJlZGljdGlvbk1hcmtldDogbnVsbCxcclxuICAgICAgICAgICAgb3BpbmlvbnM6IFtdLFxyXG4gICAgICAgICAgICBwcmVzZWxlY3RlZE9waW5pb246IFwieWVzXCIsXHJcbiAgICAgICAgICAgIHByZXNlbGVjdGVkQW1vdW50OiAwLFxyXG4gICAgICAgICAgICBwcmVzZWxlY3RlZFByb2JhYmlsaXR5OiAwLFxyXG4gICAgICAgICAgICBpc0NyZWF0ZU1hcmtldE1vZGFsT3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzQWRkT3Bpbmlvbk1vZGFsT3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUmVzb2x2ZU1vZGFsT3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzSGlkZVVua25vd25Ib3VzZXNDaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBpc0hpZGVJbnZhbGlkQXNzZXRzQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgb3BpbmlvbkZpbHRlcjogXCJ5ZXNcIixcclxuICAgICAgICAgICAgcHJlZGljdGlvbk1hcmtldEFzc2V0RmlsdGVyOiBcIm9wZW5cIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMub25DcmVhdGVQcmVkaWN0aW9uTWFya2V0TW9kYWxPcGVuID0gdGhpcy5vbkNyZWF0ZVByZWRpY3Rpb25NYXJrZXRNb2RhbE9wZW4uYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZVByZWRpY3Rpb25NYXJrZXRNb2RhbENsb3NlID0gdGhpcy5vbkNyZWF0ZVByZWRpY3Rpb25NYXJrZXRNb2RhbENsb3NlLmJpbmQoXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMub25BZGRPcGluaW9uTW9kYWxPcGVuID0gdGhpcy5vbkFkZE9waW5pb25Nb2RhbE9wZW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQWRkT3Bpbmlvbk1vZGFsQ2xvc2UgPSB0aGlzLm9uQWRkT3Bpbmlvbk1vZGFsQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2VhcmNoID0gdGhpcy5vblNlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TZWFyY2hEZXRhaWxzID0gdGhpcy5vblNlYXJjaERldGFpbHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uTWFya2V0QWN0aW9uID0gdGhpcy5vbk1hcmtldEFjdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZXNvbHZlTW9kYWxPcGVuID0gdGhpcy5vblJlc29sdmVNb2RhbE9wZW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVzb2x2ZU1vZGFsQ2xvc2UgPSB0aGlzLm9uUmVzb2x2ZU1vZGFsQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFzc2V0ID0gdGhpcy51cGRhdGVBc3NldC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVW5rbm93bkhvdXNlc1RvZ2dsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVW5rbm93bkhvdXNlc1RvZ2dsZUNoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUludmFsaWRBc3NldHNDaGVja2VkID0gdGhpcy5oYW5kbGVJbnZhbGlkQXNzZXRzQ2hlY2tlZC5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy5tYXJrZXRMaW1pdE9yZGVycyAhPT0gdGhpcy5wcm9wcy5tYXJrZXRMaW1pdE9yZGVycykge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVPcGluaW9uc0xpc3QodGhpcy5wcm9wcy5tYXJrZXRMaW1pdE9yZGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9pc0tub3duSXNzdWVyKGFzc2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2hpdGVsaXN0ZWRJc3N1ZXJzLmluY2x1ZGVzKGFzc2V0Lmlzc3Vlcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzVmFsaWRQcmVkaWN0aW9uTWFya2V0QXNzZXQoYXNzZXQpIHtcclxuICAgICAgICAvLyBtdXN0IGhhdmUgdmFsaWQgZGF0ZVxyXG4gICAgICAgIGNvbnN0IHJlc29sdXRpb25EYXRlID0gbmV3IERhdGUoXHJcbiAgICAgICAgICAgIGFzc2V0LmZvclByZWRpY3Rpb25zLmRlc2NyaXB0aW9uLmV4cGlyeVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHJlc29sdXRpb25EYXRlIGluc3RhbmNlb2YgRGF0ZSAmJiBpc05hTihyZXNvbHV0aW9uRGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbXVzdCBoYXZlIGRlc2NyaXB0aW9uIGFuZCBwcmVkaWN0aW9uIGZpbGxlZFxyXG4gICAgICAgIGlmICghYXNzZXQuZm9yUHJlZGljdGlvbnMuZGVzY3JpcHRpb24uY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhc3NldC5mb3JQcmVkaWN0aW9ucy5kZXNjcmlwdGlvbi5tYWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbXVzdCBoYXZlIG1lYW5pbmdmdWxsIGRlc2NyaXB0aW9uIGFuZCBwcmVkaWN0aW9uXHJcbiAgICAgICAgaWYgKGFzc2V0LmZvclByZWRpY3Rpb25zLmRlc2NyaXB0aW9uLmNvbmRpdGlvbi5sZW5ndGggPCAxMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhc3NldC5mb3JQcmVkaWN0aW9ucy5kZXNjcmlwdGlvbi5tYWluLmxlbmd0aCA8IDIwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbWFya2V0IGZlZSBtYXkgbm90IGJlIGNyYXp5XHJcbiAgICAgICAgaWYgKGFzc2V0Lm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50IC8gMTAwID49IDEwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZU9waW5pb25zTGlzdChmZXRjaGVkT3BpbmlvbnMpIHtcclxuICAgICAgICBsZXQgb3JkZXJzID0gW107XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNYXJrZXQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldDtcclxuICAgICAgICBmZXRjaGVkT3BpbmlvbnMuZm9yRWFjaCgob3JkZXIsIG9yZGVyX2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9waW5pb24gPVxyXG4gICAgICAgICAgICAgICAgb3JkZXIubWFya2V0X2Jhc2UgPT09IG9yZGVyLnNlbGxfcHJpY2UuYmFzZS5hc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJub1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcInllc1wiO1xyXG4gICAgICAgICAgICBjb25zdCByZWZQcmljZSA9XHJcbiAgICAgICAgICAgICAgICBvcmRlci5tYXJrZXRfYmFzZSA9PT0gb3JkZXIuc2VsbF9wcmljZS5iYXNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvcmRlci5zZWxsX3ByaWNlLmludmVydCgpLnRvUmVhbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBvcmRlci5zZWxsX3ByaWNlLnRvUmVhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBhbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgb3JkZXIubWFya2V0X2Jhc2UgPT09IG9yZGVyLnNlbGxfcHJpY2UuYmFzZS5hc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgICAgID8gb3JkZXIuYW1vdW50Rm9yU2FsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBvcmRlci5hbW91bnRUb1JlY2VpdmUoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJlbWl1bSA9XHJcbiAgICAgICAgICAgICAgICBvcmRlci5tYXJrZXRfYmFzZSA9PT0gb3JkZXIuc2VsbF9wcmljZS5iYXNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvcmRlci5hbW91bnRUb1JlY2VpdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogb3JkZXIuYW1vdW50Rm9yU2FsZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmbGFnQm9vbGVhbnMgPSBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucyhcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkTWFya2V0Lm9wdGlvbnMuZmxhZ3MsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCBmZWUgPSAwO1xyXG4gICAgICAgICAgICBpZiAoZmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0pIHtcclxuICAgICAgICAgICAgICAgIGZlZSA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWFya2V0Lm9wdGlvbnMubWF4X21hcmtldF9mZWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKGFtb3VudC5hbW91bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE1hcmtldC5vcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudCkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAwMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlZlByaWNlIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIG9waW5pb25hdG9yOiBvcmRlci5zZWxsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BpbmlvbixcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlrZWxpaG9vZDogcmVmUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcG90ZW50aWFsUHJvZml0OiBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBwcmVtaXVtLmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHByZW1pdW0ucHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlbWl1bTogcHJlbWl1bSxcclxuICAgICAgICAgICAgICAgICAgICBjb21taXNzaW9uOiBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGZlZSAqIHJlZlByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogcHJlbWl1bS5hc3NldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBwcmVtaXVtLnByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29waW5pb25zOiBbLi4ub3JkZXJzXX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldE1hcmtldE9waW5pb25zKG1hcmtldCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN1YnNjcmliZWRNYXJrZXQpIHtcclxuICAgICAgICAgICAgYXdhaXQgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN1YnNjcmliZWRNYXJrZXQucXVvdGUuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN1YnNjcmliZWRNYXJrZXQuYmFzZS5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYXNlID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXHJcbiAgICAgICAgICAgIG1hcmtldC5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZS5iYXNlLmFzc2V0X2lkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBxdW90ZSA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXHJcbiAgICAgICAgICAgIG1hcmtldC5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZS5xdW90ZS5hc3NldF9pZFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGF3YWl0IE1hcmtldHNBY3Rpb25zLnN1YnNjcmliZU1hcmtldChcclxuICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgcXVvdGUsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYnVja2V0U2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50R3JvdXBPcmRlckxpbWl0XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3Vic2NyaWJlZE1hcmtldDoge1xyXG4gICAgICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgICAgIHF1b3RlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1hcmtldEFjdGlvbih7bWFya2V0LCBhY3Rpb259KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgLy9vbiBidXR0b25zIGFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQ6IG1hcmtldFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVzb2x2ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkQW1vdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZFByb2JhYmlsaXR5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJlc29sdmVNb2RhbE9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ5ZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnN1YnNjcmliZWRNYXJrZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZEFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkUHJvYmFiaWxpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZE9waW5pb246IFwieWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25BZGRPcGluaW9uTW9kYWxPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5vXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdWJzY3JpYmVkTWFya2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRBbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZFByb2JhYmlsaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRPcGluaW9uOiBcIm5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25BZGRPcGluaW9uTW9kYWxPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZEFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRQcm9iYWJpbGl0eTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9vbiByb3cgYWN0aW9uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0OiBudWxsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQ6IG1hcmtldFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5nZXRNYXJrZXRPcGluaW9ucyhtYXJrZXQpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IGV2ZW50LnRhcmdldC52YWx1ZSB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hEZXRhaWxzKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRldGFpbHNTZWFyY2hUZXJtOiBldmVudC50YXJnZXQudmFsdWUgfHwgXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ3JlYXRlUHJlZGljdGlvbk1hcmtldE1vZGFsT3BlbigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDcmVhdGVNYXJrZXRNb2RhbE9wZW46IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZVByZWRpY3Rpb25NYXJrZXRNb2RhbENsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0NyZWF0ZU1hcmtldE1vZGFsT3BlbjogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFkZE9waW5pb25Nb2RhbE9wZW4oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQWRkT3Bpbmlvbk1vZGFsT3BlbjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkT3Bpbmlvbk1vZGFsQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQWRkT3Bpbmlvbk1vZGFsT3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZXNlbGVjdGVkT3BpbmlvbjogXCJub1wiLFxyXG4gICAgICAgICAgICBwcmVzZWxlY3RlZEFtb3VudDogMCxcclxuICAgICAgICAgICAgcHJlc2VsZWN0ZWRQcm9iYWJpbGl0eTogMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzb2x2ZU1vZGFsT3BlbigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZXNvbHZlTW9kYWxPcGVuOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNvbHZlTW9kYWxDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZXNvbHZlTW9kYWxPcGVuOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVVua25vd25Ib3VzZXNUb2dnbGVDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgaXNIaWRlVW5rbm93bkhvdXNlc0NoZWNrZWQgPSAhdGhpcy5zdGF0ZVxyXG4gICAgICAgICAgICAuaXNIaWRlVW5rbm93bkhvdXNlc0NoZWNrZWQ7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNIaWRlVW5rbm93bkhvdXNlc0NoZWNrZWQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5wcm9wcy5mZXRjaEFsbEFzc2V0cygpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnZhbGlkQXNzZXRzQ2hlY2tlZCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNIaWRlSW52YWxpZEFzc2V0c0NoZWNrZWQ6ICF0aGlzLnN0YXRlLmlzSGlkZUludmFsaWRBc3NldHNDaGVja2VkLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQ6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wcG9zZSA9IG9waW5pb24gPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcmVzZWxlY3RlZE9waW5pb246IG9waW5pb24ub3BpbmlvbiA9PT0gXCJub1wiID8gXCJ5ZXNcIiA6IFwibm9cIixcclxuICAgICAgICAgICAgcHJlc2VsZWN0ZWRBbW91bnQ6IG9waW5pb24uYW1vdW50LFxyXG4gICAgICAgICAgICBwcmVzZWxlY3RlZFByb2JhYmlsaXR5OiBvcGluaW9uLnByb2JhYmlsaXR5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbkFkZE9waW5pb25Nb2RhbE9wZW4oKTtcclxuICAgIH07XHJcblxyXG4gICAgb25DYW5jZWxPcGluaW9uID0gb3BpbmlvbiA9PiB7XHJcbiAgICAgICAgTWFya2V0c0FjdGlvbnMuY2FuY2VsTGltaXRPcmRlcnModGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKSwgW1xyXG4gICAgICAgICAgICBvcGluaW9uLm9yZGVyX2lkXHJcbiAgICAgICAgXSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW5jZWwgb3JkZXJzIGVycm9yOlwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvblJlc29sdmVNYXJrZXQgPSBtYXJrZXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG4gICAgICAgIGNvbnN0IGdsb2JhbFNldHRsZW1lbnRQcmljZSA9IG1hcmtldC5yZXN1bHQgPT09IFwieWVzXCIgPyAxIDogMDtcclxuICAgICAgICBjb25zdCBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQobWFya2V0LmFzc2V0X2lkKS50b0pTKCk7XHJcbiAgICAgICAgbGV0IGJhc2UgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICByZWFsOiAxLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuaWQsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQucHJlY2lzaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHF1b3RlQXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFxyXG4gICAgICAgICAgICBhc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBxdW90ZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIHJlYWw6IGdsb2JhbFNldHRsZW1lbnRQcmljZSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldCxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiBxdW90ZUFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBwcmljZSA9IG5ldyBQcmljZSh7XHJcbiAgICAgICAgICAgIHF1b3RlLFxyXG4gICAgICAgICAgICBiYXNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEFzc2V0QWN0aW9ucy5hc3NldEdsb2JhbFNldHRsZShhc3NldCwgYWNjb3VudCwgcHJpY2UpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGF1c2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xyXG4gICAgICAgICAgICBwYXVzZS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQXNzZXQoYXNzZXQuc3ltYm9sKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzUmVzb2x2ZU1vZGFsT3BlbjogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlQXNzZXQoc3ltYm9sKSB7XHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmdldEFzc2V0TGlzdC5kZWZlcihzeW1ib2wsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIF9maWx0ZXJNYXJrZXRzKCkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuc3RhdGUucHJlZGljdGlvbk1hcmtldEFzc2V0RmlsdGVyO1xyXG4gICAgICAgIGNvbnN0IG1hcmtldHMgPSB0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXRzLmZpbHRlcihhc3NldEluZm8gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhc3NldCA9IGFzc2V0SW5mby5hc3NldDtcclxuICAgICAgICAgICAgaWYgKCFhc3NldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJpdGFzc2V0RGF0YSA9IGFzc2V0LmJpdGFzc2V0X2RhdGEgfHwgYXNzZXQuYml0YXNzZXQgfHwge307XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNIaWRlVW5rbm93bkhvdXNlc0NoZWNrZWQgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLl9pc0tub3duSXNzdWVyKGFzc2V0KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNIaWRlSW52YWxpZEFzc2V0c0NoZWNrZWQgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLl9pc1ZhbGlkUHJlZGljdGlvbk1hcmtldEFzc2V0KGFzc2V0KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50TmFtZSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChhc3NldC5pc3N1ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldEFjY291bnQoYXNzZXQuaXNzdWVyKS5nZXQoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnROYW1lICYmIHRoaXMuc3RhdGUuc2VhcmNoVGVybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub01hdGNoID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXDBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5jb25kaXRpb24gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXDBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YodGhpcy5zdGF0ZS5zZWFyY2hUZXJtKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyICE9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x1dGlvbkRhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuZm9yUHJlZGljdGlvbnMuZGVzY3JpcHRpb24uZXhwaXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXR0bGVtZW50RnVuZCA9IGJpdGFzc2V0RGF0YS5zZXR0bGVtZW50X2Z1bmQgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0V4cGlyZWRPclJlc29sdmVkID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlbWVudEZ1bmQgPiAwIHx8IHJlc29sdXRpb25EYXRlIDwgbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyID09PSBcIm9wZW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlzRXhwaXJlZE9yUmVzb2x2ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09IFwicGFzdF9yZXNvbHV0aW9uX2RhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNFeHBpcmVkT3JSZXNvbHZlZDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBtYXJrZXRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE92ZXJ2aWV3U2VjdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzZXRQcmVkaWN0aW9uTWFya2V0QXNzZXRGaWx0ZXIgPSBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0QXNzZXRGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcHJlZGljdGlvbk1hcmtldHNUb1Nob3cgPSB0aGlzLl9maWx0ZXJNYXJrZXRzKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc2VsZWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgd2lkdGg6IFwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVGVybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMjBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByZWRpY3Rpb25NYXJrZXRBc3NldEZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRQcmVkaWN0aW9uTWFya2V0QXNzZXRGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJhbGxcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLm92ZXJ2aWV3LmFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wib3BlblwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24ub3ZlcnZpZXcub3BlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wicGFzdF9yZXNvbHV0aW9uX2RhdGVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLm92ZXJ2aWV3LnBhc3RfcmVzb2x1dGlvbl9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjIwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVW5rbm93bkhvdXNlc1RvZ2dsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmlzSGlkZVVua25vd25Ib3VzZXNDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVua25vd25Ib3VzZXNUb2dnbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInByZWRpY3Rpb24ub3ZlcnZpZXcuaGlkZV91bmtub3duX2hvdXNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLnRvb2x0aXBzLmhpZGVfdW5rbm93bl9ob3VzZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMC41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIyMHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUludmFsaWRBc3NldHNDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaXNIaWRlSW52YWxpZEFzc2V0c0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW52YWxpZEFzc2V0c0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInByZWRpY3Rpb24ub3ZlcnZpZXcuaGlkZV9pbnZhbGlkX2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24udG9vbHRpcHMuaGlkZV9pbnZhbGlkX2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidXRpbGl0eS54X2Fzc2V0c19oaWRkZW5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0cy5sZW5ndGggLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXRzVG9TaG93Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiB0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zZWxlY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjByZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLnRvb2x0aXBzLmNyZWF0ZV9wcmVkaWN0aW9uX21hcmtldF9hc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuM3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIwLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ3JlYXRlUHJlZGljdGlvbk1hcmtldE1vZGFsT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24ub3ZlcnZpZXcuY3JlYXRlX21hcmtldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxQcmVkaWN0aW9uTWFya2V0c092ZXJ2aWV3VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0cz17cHJlZGljdGlvbk1hcmtldHNUb1Nob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25NYXJrZXRBY3Rpb249e3RoaXMub25NYXJrZXRBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFByZWRpY3Rpb25NYXJrZXRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5wcm9wcy5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXRhaWxzU2VjdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzZXRPcGluaW9uRmlsdGVyID0gZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgb3BpbmlvbkZpbHRlcjogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5kZXRhaWxzLmxpc3Rfb2ZfY3VycmVudF9wcmVkaWN0aW9uX29mZmVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLnRvb2x0aXBzLndoYXRfaXNfYV9wcmVkaWN0aW9uX29mZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMC41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zZWxlY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB3aWR0aDogXCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWFyY2hEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGV0YWlsc1NlYXJjaFRlcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIyMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3BpbmlvbkZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRPcGluaW9uRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wiYWxsXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5kZXRhaWxzLmFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wieWVzXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5kZXRhaWxzLnByb3Zlc190cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJub1wifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uZGV0YWlscy5pbmNvcnJlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi50b29sdGlwcy5hZGRfcHJlZGljdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuM3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIwLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25BZGRPcGluaW9uTW9kYWxPcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLmRldGFpbHMuYWRkX3ByZWRpY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGluaW9ucyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8UHJlZGljdGlvbk1hcmtldERldGFpbHNUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0RGF0YT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbk1hcmtldDogdGhpcy5zdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGluaW9uczogdGhpcy5zdGF0ZS5vcGluaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcHBvc2U9e3RoaXMub25PcHBvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLm9uQ2FuY2VsT3Bpbmlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1NlYXJjaFRlcm09e3RoaXMuc3RhdGUuZGV0YWlsc1NlYXJjaFRlcm0udG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BpbmlvbkZpbHRlcj17dGhpcy5zdGF0ZS5vcGluaW9uRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IFsuLi50aGlzLnByb3BzLmFzc2V0c10ubWFwKGl0ZW0gPT4gaXRlbVsxXS5zeW1ib2wpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByZWRpY3Rpb24tbWFya2V0cyBncmlkLWJsb2NrIHZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwiLCBtYXJnaW46IFwiMTVweFwifX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMTIgc2hyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlbHBDb250ZW50IHBhdGg9e1wiY29tcG9uZW50cy9QcmVkaWN0aW9uTWFya2V0c1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRPdmVydmlld1NlY3Rpb24oKX1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXREZXRhaWxzU2VjdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNDcmVhdGVNYXJrZXRNb2RhbE9wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENyZWF0ZU1hcmtldE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNDcmVhdGVNYXJrZXRNb2RhbE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DcmVhdGVQcmVkaWN0aW9uTWFya2V0TW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHM9e3N5bWJvbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTWFya2V0Q3JlYXRlZD17dGhpcy51cGRhdGVBc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0FkZE9waW5pb25Nb2RhbE9wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZE9waW5pb25Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzQWRkT3Bpbmlvbk1vZGFsT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vbkFkZE9waW5pb25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0PXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Bpbmlvbj17dGhpcy5zdGF0ZS5pbml0aWFsT3Bpbmlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkT3Bpbmlvbj17dGhpcy5zdGF0ZS5wcmVzZWxlY3RlZE9waW5pb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkQW1vdW50PXt0aGlzLnN0YXRlLnByZXNlbGVjdGVkQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZFByb2JhYmlsaXR5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRQcm9iYWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VBc3NldD17dGhpcy5zdGF0ZS5zdWJzY3JpYmVkTWFya2V0LmJhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQ9e3RoaXMuc3RhdGUuc3Vic2NyaWJlZE1hcmtldC5xdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1Jlc29sdmVNb2RhbE9wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzUmVzb2x2ZU1vZGFsT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vblJlc29sdmVNb2RhbENsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0PXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNvbHZlTWFya2V0PXt0aGlzLm9uUmVzb2x2ZU1hcmtldH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblByZWRpY3Rpb25NYXJrZXRzID0gY29ubmVjdChcclxuICAgIFByZWRpY3Rpb25NYXJrZXRzLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0Fzc2V0U3RvcmUsIE1hcmtldHNTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0czogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0cyxcclxuICAgICAgICAgICAgICAgIGJ1Y2tldFNpemU6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmJ1Y2tldFNpemUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0OiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jdXJyZW50R3JvdXBMaW1pdCxcclxuICAgICAgICAgICAgICAgIG1hcmtldExpbWl0T3JkZXJzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRMaW1pdE9yZGVyc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChQcmVkaWN0aW9uTWFya2V0cyA9IGJpbmRUb0N1cnJlbnRBY2NvdW50KFByZWRpY3Rpb25NYXJrZXRzKSk7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgTGlua1RvQXNzZXRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0Fzc2V0QnlJZFwiO1xyXG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9QYWdpbmF0ZWRMaXN0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCIuLi8uLi9hY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XHJcbmltcG9ydCBkZWJvdW5jZVJlbmRlciBmcm9tIFwicmVhY3QtZGVib3VuY2UtcmVuZGVyXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5cclxucmVxdWlyZShcIi4vcHJlZGljdGlvbi5zY3NzXCIpO1xyXG5cclxuY2xhc3MgUHJlZGljdGlvbk1hcmtldHNPdmVydmlld1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRpY2tlcjoge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudGlja2Vyc0xvYWRlZCA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWFya2V0QWN0aW9uKGRhdGFJdGVtLCBvcHRpb24gPSBcInllc1wiKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1hcmtldEFjdGlvbih7XHJcbiAgICAgICAgICAgIG1hcmtldDogZGF0YUl0ZW0sXHJcbiAgICAgICAgICAgIGFjdGlvbjogb3B0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Sb3dBY3Rpb24gPSBkYXRhSXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb25DbGljazogdGhpcy5vbk1hcmtldEFjdGlvbi5iaW5kKHRoaXMsIGRhdGFJdGVtKVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEhlYWRlcigpIHtcclxuICAgICAgICBjb25zdCBpc093bmVkQnlDdXJyZW50ID0gaWQgPT5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKSA9PT0gaWQ7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuYXNzZXRcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYXNzZXRfaWRcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0T3JkZXI6IFwiYXNjZW5kXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuc3ltYm9sID4gYi5zeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5zeW1ib2wgPCBiLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQXNzZXRCeUlkIGFzc2V0PXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJlZGljdGlvbi5vdmVydmlldy5pc3N1ZXJcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaXNzdWVyXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFfaXNzdWVyID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEuaXNzdWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYl9pc3N1ZXIgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYi5pc3N1ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhX25hbWUgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiX25hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhX2lzc3VlciAmJiBiX2lzc3Vlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhX25hbWUgPSBhX2lzc3Vlci5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiX25hbWUgPSBiX2lzc3Vlci5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYV9uYW1lID4gYl9uYW1lID8gMSA6IGFfbmFtZSA8IGJfbmFtZSA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJwcmVkaWN0aW9uLm92ZXJ2aWV3LnByZWRpY3Rpb25cIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY29uZGl0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhLmNvbmRpdGlvbiB8fCBhLmNvbmRpdGlvbiA9PT0gXCJcIikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYi5jb25kaXRpb24gfHwgYi5jb25kaXRpb24gPT09IFwiXCIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmNvbmRpdGlvbi5sb2NhbGVDb21wYXJlKGIuY29uZGl0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5vdmVydmlldy5tYXJrZXRfY29uZmlkZW5jZVwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm1hcmtldENvbmZpZGVuY2VcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5tYXJrZXRDb25maWRlbmNlID4gYi5tYXJrZXRDb25maWRlbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEubWFya2V0Q29uZmlkZW5jZSA8IGIubWFya2V0Q29uZmlkZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0sIHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpY2tlciA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRpY2tlcltyb3cuYXNzZXRfaWRdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGlja2VyW3Jvdy5hc3NldF9pZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRpY2tlci5xdW90ZV92b2x1bWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5xdW90ZV92b2x1bWUgPT09IFwiMFwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIucXVvdGVfdm9sdW1lID09PSBcIjFcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLnF1b3RlX3ZvbHVtZSA9PT0gXCJOYU5cIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLnF1b3RlX3ZvbHVtZSA9PT0gXCItTmFOXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIucXVvdGVfdm9sdW1lID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5xdW90ZV92b2x1bWUgPSB1dGlscy5jb252ZXJ0X3R5cGVkX3RvX3NhdG9zaGkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aWNrZXIucXVvdGVfdm9sdW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFzc2V0KHJvdy5zaG9ydF9iYWNraW5nX2Fzc2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGlja2VyLnBlcmNlbnRfY2hhbmdlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIucGVyY2VudF9jaGFuZ2UgPT09IFwiTmFOXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5wZXJjZW50X2NoYW5nZSA9PT0gXCItTmFOXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIucGVyY2VudF9jaGFuZ2UgPSBcIi1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aWNrZXIucGVyY2VudF9jaGFuZ2UgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIucGVyY2VudF9jaGFuZ2UgPSBcIjAlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5wZXJjZW50X2NoYW5nZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KHRpY2tlci5sYXRlc3QpID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIitcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIucGVyY2VudF9jaGFuZ2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnZvbF9zaG9ydFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0aWNrZXIucXVvdGVfdm9sdW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cm93LnNob3J0X2JhY2tpbmdfYXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyooe3RpY2tlci5wZXJjZW50X2NoYW5nZX0pJm5ic3A7Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5vdmVydmlldy5tYXJrZXRfcHJlZGljYXRlZF9saWtlbGlob29kXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibWFya2V0TGlrZWxpaG9vZFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLm1hcmtldExpa2VsaWhvb2QgPiBiLm1hcmtldExpa2VsaWhvb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5tYXJrZXRMaWtlbGlob29kIDwgYi5tYXJrZXRMaWtlbGlob29kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSwgcm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlja2VyID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGlja2VyW3Jvdy5hc3NldF9pZF1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50aWNrZXJbcm93LmFzc2V0X2lkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGlja2VyLmxhdGVzdCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmxhdGVzdCA9PT0gXCIwXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sYXRlc3QgPT09IFwiMVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIubGF0ZXN0ID09PSBcIk5hTlwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIubGF0ZXN0ID09PSBcIi1OYU5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sYXRlc3QgPSBcIi1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sYXRlc3QgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KHRpY2tlci5sYXRlc3QpICogMTAwKS50b1ByZWNpc2lvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGlja2VyLmhpZ2hlc3RfYmlkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIuaGlnaGVzdF9iaWQgPT09IFwiMFwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIuaGlnaGVzdF9iaWQgPT09IFwiMVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIuaGlnaGVzdF9iaWQgPT09IFwiTmFOXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA9PT0gXCItTmFOXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIuaGlnaGVzdF9iaWQgPSBcIi1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHRpY2tlci5oaWdoZXN0X2JpZCkgKiAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvUHJlY2lzaW9uKDMpICsgXCIlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRpY2tlci5sb3dlc3RfYXNrIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIubG93ZXN0X2FzayA9PT0gXCIwXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sb3dlc3RfYXNrID09PSBcIjFcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmxvd2VzdF9hc2sgPT09IFwiTmFOXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sb3dlc3RfYXNrID09PSBcIi1OYU5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sb3dlc3RfYXNrID0gXCItXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIubG93ZXN0X2FzayA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHRpY2tlci5sb3dlc3RfYXNrKSAqIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9QcmVjaXNpb24oMykgKyBcIiVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGlja2VyLmxhdGVzdCAhPT0gXCItXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aWNrZXIubGF0ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Vwc3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXAgY2xhc3NOYW1lPVwic3VwZXJzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aWNrZXIuaGlnaGVzdF9iaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ViIGNsYXNzTmFtZT1cInN1YnNjcmlwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpY2tlci5sb3dlc3RfYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N1Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJwcmVkaWN0aW9uLm92ZXJ2aWV3LmRlc2NyaXB0aW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhLmRlc2NyaXB0aW9uIHx8IGEuZGVzY3JpcHRpb24gPT09IFwiXCIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWIuZGVzY3JpcHRpb24gfHwgYi5kZXNjcmlwdGlvbiA9PT0gXCJcIikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuZGVzY3JpcHRpb24ubG9jYWxlQ29tcGFyZShiLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJlZGljdGlvbi5vdmVydmlldy5leHBpcnlcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZXhwaXJ5XCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhLmV4cGlyeSB8fCBhLmV4cGlyeSA9PT0gXCJcIikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYi5leHBpcnkgfHwgYi5leHBpcnkgPT09IFwiXCIpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmV4cGlyeS5sb2NhbGVDb21wYXJlKGIuZXhwaXJ5KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJlZGljdGlvbi5vdmVydmlldy5hY3Rpb25cIiksXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZGF0YUl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNPd25lZEJ5Q3VycmVudChkYXRhSXRlbS5pc3N1ZXIpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxNzBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25NYXJrZXRBY3Rpb24oZGF0YUl0ZW0sIFwicmVzb2x2ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLm92ZXJ2aWV3LnJlc29sdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjVweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25NYXJrZXRBY3Rpb24oZGF0YUl0ZW0sIFwieWVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxCdXR0b24qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjVweFwifX0qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCIqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qb25DbGljaz17KCkgPT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qdGhpcy5vbk1hcmtldEFjdGlvbihkYXRhSXRlbSwgXCJub1wiKSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qe2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZSgqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXCJwcmVkaWN0aW9uLm92ZXJ2aWV3Lm5vXCIqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qKX0qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9CdXR0b24+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBfZGVjaWRlUm93Q2xhc3NOYW1lKHJvdywgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQgPyBcInNlbGVjdGVkLXJvd1wiIDogXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwcmV2UHJvcHMucHJlZGljdGlvbk1hcmtldHMubGVuZ3RoICE9PVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXRzLmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXRzLmZvckVhY2gobWFya2V0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghKG1hcmtldC5hc3NldC5pZCBpbiBPYmplY3Qua2V5cyh0aGlzLnRpY2tlcnNMb2FkZWQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlja2Vyc0xvYWRlZFttYXJrZXQuYXNzZXQuaWRdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuZ2V0VGlja2VyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQuc2hvcnRfYmFja2luZ19hc3NldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0LmFzc2V0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpY2tlciA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWNrZXJzTG9hZGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyW21hcmtldC5hc3NldC5pZF0gPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpY2tlcnNMb2FkZWRbbWFya2V0LmFzc2V0LmlkXSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpY2tlcn0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRIZWFkZXIoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpbHRlcmVkTWFya2V0cyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRNYXJrZXRzID0gW3RoaXMucHJvcHMuc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0cykge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRNYXJrZXRzID0gdGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0cztcclxuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkTWFya2V0cyA9IGZpbHRlcmVkTWFya2V0cy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBgJHtpdGVtLmFzc2V0X2lkfSR7aSsrfWBcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgcm93U2VsZWN0aW9uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnByb3BzLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldCA/IHVuZGVmaW5lZCA6IFwicmFkaW9cIixcclxuICAgICAgICAgICAgaGlkZURlZmF1bHRTZWxlY3Rpb25zOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBVbmNvbW1lbnQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHNob3cgdHJhbnNsYXRlZCB0ZXh0IGFzIGEgY2FuY2VsbGFibGUgY29sdW1uIGhlYWRlciBpbnN0ZWFkIG9mIGNoZWNrYm94XHJcbiAgICAgICAgICAgIC8vY29sdW1uVGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIndhbGxldC5jYW5jZWxcIilcclxuICAgICAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1hcmtldEFjdGlvbihzZWxlY3RlZFJvd3NbMF0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTWFya2V0QWN0aW9uKG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBSZXF1aXJlZCBpbiBvcmRlciByZXNldFNlbGVjdGVkIHRvIHdvcmtcclxuICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiB0aGlzLnByb3BzLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldFxyXG4gICAgICAgICAgICAgICAgPyBbdGhpcy5wcm9wcy5zZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQua2V5XVxyXG4gICAgICAgICAgICAgICAgOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhZ2luYXRlZExpc3RcclxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17cm93U2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgcm93cz17ZmlsdGVyZWRNYXJrZXRzfVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MTB9XHJcbiAgICAgICAgICAgICAgICByb3dDbGFzc05hbWU9e3RoaXMuX2RlY2lkZVJvd0NsYXNzTmFtZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5wcm9wcy5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgdG90YWxMYWJlbD1cInV0aWxpdHkudG90YWxfeF9hc3NldHNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblByZWRpY3Rpb25NYXJrZXRzT3ZlcnZpZXdUYWJsZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBwcmVkaWN0aW9uTWFya2V0czogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBvbk1hcmtldEFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGN1cnJlbnRBY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0OiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5QcmVkaWN0aW9uTWFya2V0c092ZXJ2aWV3VGFibGUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgcHJlZGljdGlvbk1hcmtldHM6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoUHJlZGljdGlvbk1hcmtldHNPdmVydmlld1RhYmxlID0gZGVib3VuY2VSZW5kZXIoXHJcbiAgICBQcmVkaWN0aW9uTWFya2V0c092ZXJ2aWV3VGFibGUsXHJcbiAgICAxNTAsXHJcbiAgICB7bGVhZGluZzogZmFsc2V9XHJcbikpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtUYWJsZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgXCIuL3BhZ2luYXRlZC1saXN0LnNjc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgIHBhZ2VTaXplOiAyMCxcclxuXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcInRhYmxlXCIsXHJcbiAgICAgICAgZXh0cmFSb3c6IG51bGwsXHJcbiAgICAgICAgc3R5bGU6IHtwYWRkaW5nQm90dG9tOiBcIjFyZW1cIn0sXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcblxyXG4gICAgICAgIC8vIGNhbiBiZSBhIHN0cmluZyAoYXNzdW1lcyB0aGUgdHJhbnNsYXRpb24gaGFzIG9uZSBhcmd1bWVudCwgdG90YWwgY291bnQpLFxyXG4gICAgICAgIC8vIG9yIGFuIG9iamVjdCwgd2hpY2ggYWxsb3dzIGEgY3VzdG9tIGxhYmVsXHJcbiAgICAgICAgdG90YWxMYWJlbDogXCJ1dGlsaXR5LnRvdGFsX3hfaXRlbXNcIixcclxuXHJcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQsIHVzZSB0b3RhbExhYmVsXHJcbiAgICAgICAgbGFiZWw6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwcm9wcy5wYWdlU2l6ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtoZWFkZXIsIHJvd3MsIGV4dHJhUm93LCBsb2FkaW5nfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDEwMF0uZmlsdGVyKFxyXG4gICAgICAgICAgICBpdGVtID0+IGl0ZW0gPCBNYXRoLm1heCh0aGlzLnByb3BzLnBhZ2VTaXplLCByb3dzLmxlbmd0aClcclxuICAgICAgICApO1xyXG4gICAgICAgIHBhZ2VTaXplT3B0aW9ucy5wdXNoKE1hdGgubWF4KHRoaXMucHJvcHMucGFnZVNpemUsIHJvd3MubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIGxldCB0b3RhbENvbHVtbnNMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMudG90YWxMYWJlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy50b3RhbExhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRvdGFsTGFiZWwgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMudG90YWxMYWJlbC5rZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy50b3RhbExhYmVsLmFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0ZWQtbGlzdFwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cm93c31cclxuICAgICAgICAgICAgICAgICAgICB1bnNcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtBcnJheS5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIgOiBbXX1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9eygpID0+IChleHRyYVJvdyA/IGV4dHJhUm93IDogPHNwYW4+Jm5ic3A7PC9zcGFuPil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMudG9nZ2xlU29ydE9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25TaW5nbGVQYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zOiBwYWdlU2l6ZU9wdGlvbnMubWFwKG8gPT4gby50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvdGFsOiAodG90YWwsIHJhbmdlKSA9PiB0b3RhbENvbHVtbnNMYWJlbCh0b3RhbClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucm93Q2xhc3NOYW1lID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZWNvcmQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocmVjb3JkLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXt0aGlzLnByb3BzLnJvd1NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XHJcbmltcG9ydCB7QnV0dG9uLCBJY29uLCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBQYWdpbmF0ZWRMaXN0IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZGljdGlvbk1hcmtldERldGFpbHNUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBnZXRIZWFkZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEFjY291bnRJZCA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm9yZGVyX2lkXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXJfaW5hY3RpdmU6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEub3JkZXJfaWQgPiBiLm9yZGVyX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEub3JkZXJfaWQgPCBiLm9yZGVyX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByZWRpY3Rpb24uZGV0YWlscy5wcmVkaWN0b3JcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwib3BpbmlvbmF0b3JcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcl9pbmFjdGl2ZTogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYV9uYW1lID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEub3BpbmlvbmF0b3IpLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiX25hbWUgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYi5vcGluaW9uYXRvcikuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFfbmFtZSA+IGJfbmFtZSA/IDEgOiBhX25hbWUgPCBiX25hbWUgPyAtMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtpdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJlZGljdGlvbi5kZXRhaWxzLnByZWRpY3Rpb25cIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwib3BpbmlvblwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyX2luYWN0aXZlOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLm9waW5pb24gPiBiLm9waW5pb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5vcGluaW9uIDwgYi5vcGluaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5kZXRhaWxzLlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtID09IFwieWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicHJvdmVzX3RydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpbmNvcnJlY3RcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5kZXRhaWxzLnByZWRpY2F0ZWRfbGlrZWxpaG9vZFwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImxpa2VsaWhvb2RcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRPcmRlcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9waW5pb25GaWx0ZXIgPT0gXCJ5ZXNcIiA/IFwiZGVzY2VuZFwiIDogXCJhc2NlbmRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5saWtlbGlob29kID4gYi5saWtlbGlob29kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEubGlrZWxpaG9vZCA8IGIubGlrZWxpaG9vZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57KGl0ZW0gKiAxMDApLnRvUHJlY2lzaW9uKDMpfSU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJwcmVkaWN0aW9uLmRldGFpbHMucHJlbWl1bVwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwcmVtaXVtXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXJfaW5hY3RpdmU6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYW1vdW50ID4gYi5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5hbW91bnQgPCBiLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByZWRpY3Rpb24uZGV0YWlscy5jb21taXNzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNvbW1pc3Npb25cIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcl9pbmFjdGl2ZTogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5mZWUgPiBiLmZlZSA/IDEgOiBhLmZlZSA8IGIuZmVlID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0sIHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyb3cuY29tbWlzc2lvbi5hbW91bnQgLyByb3cucHJlbWl1bS5hbW91bnQpICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9QcmVjaXNpb24oMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5kZXRhaWxzLnBvdGVudGlhbF9wcm9maXRcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwb3RlbnRpYWxQcm9maXRcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcl9pbmFjdGl2ZTogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5hbW91bnQgPiBiLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmFtb3VudCA8IGIuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJlZGljdGlvbi5vdmVydmlldy5hY3Rpb25cIiksXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGRhdGFJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEFjY291bnRJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUl0ZW0ub3BpbmlvbmF0b3IgPT09IGN1cnJlbnRBY2NvdW50SWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKGRhdGFJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uZGV0YWlscy5jYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSXRlbS5vcGluaW9uID09IFwieWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJwcmVkaWN0aW9uLnRvb2x0aXBzLm9wcG9zZV9wcm92ZXNfdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicHJlZGljdGlvbi50b29sdGlwcy5vcHBvc2VfaXNfaW5jb3JyZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjNyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHBvc2UoZGF0YUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLmRldGFpbHMub3Bwb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuZ2V0SGVhZGVyKCk7XHJcblxyXG4gICAgICAgIGxldCBmaWx0ZXJlZE9waW5pb25zID0gdGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0RGF0YS5vcGluaW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnROYW1lID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGl0ZW0ub3BpbmlvbmF0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldEFjY291bnQoaXRlbS5vcGluaW9uYXRvcikuZ2V0KFwibmFtZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRldGFpbHNTZWFyY2hUZXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWNjb3VudE5hbWUgKyBcIlxcMFwiICsgaXRlbS5vcGluaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKHRoaXMucHJvcHMuZGV0YWlsc1NlYXJjaFRlcm0pID09PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3BpbmlvbkZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9waW5pb25GaWx0ZXIgPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLnByb3BzLm9waW5pb25GaWx0ZXIgPT0gaXRlbS5vcGluaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgZmlsdGVyZWRPcGluaW9ucyA9IGZpbHRlcmVkT3BpbmlvbnMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAga2V5OiBgJHtpdGVtLm9yZGVyX2lkfSR7aSsrfWBcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYWdpbmF0ZWRMaXN0XHJcbiAgICAgICAgICAgICAgICByb3dzPXtmaWx0ZXJlZE9waW5pb25zfVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MTB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUHJlZGljdGlvbk1hcmtldERldGFpbHNUYWJsZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBwcmVkaWN0aW9uTWFya2V0RGF0YTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gICAgb25PcHBvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGN1cnJlbnRBY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgZGV0YWlsc1NlYXJjaFRlcm06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvcGluaW9uRmlsdGVyOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5QcmVkaWN0aW9uTWFya2V0RGV0YWlsc1RhYmxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHByZWRpY3Rpb25NYXJrZXREYXRhOiB7fVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW9kYWwsIElucHV0LCBGb3JtLCBTd2l0Y2gsIEJ1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7QXNzZXQsIFByaWNlLCBMaW1pdE9yZGVyQ3JlYXRlfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uLCBSYWRpb30gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmUsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgRXhjaGFuZ2VJbnB1dCBmcm9tIFwiY29tcG9uZW50cy9FeGNoYW5nZS9FeGNoYW5nZUlucHV0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZE9waW5pb25Nb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuZXdPcGluaW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICAgICAgb3BpbmlvbmF0b3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGluaW9uOiB0aGlzLnByb3BzLnByZXNlbGVjdGVkT3BpbmlvbixcclxuICAgICAgICAgICAgICAgIGFtb3VudDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZXNlbGVjdGVkQW1vdW50IC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coMTAsIHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcInByZWNpc2lvblwiKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIixcclxuICAgICAgICAgICAgICAgIHByb2JhYmlsaXR5OiB0aGlzLnByb3BzLnByZXNlbGVjdGVkUHJvYmFiaWxpdHkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGZlZTogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93V2FybmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGluUHJvZ3Jlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZE9waW5pb246IHRoaXMucHJvcHMucHJlc2VsZWN0ZWRPcGluaW9uLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEFzc2V0OiBudWxsLFxyXG4gICAgICAgICAgICB3cm9uZ1Byb3BhYmlsaXR5OiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlT3BpbmlvbkNoYW5nZSA9IHRoaXMuaGFuZGxlT3BpbmlvbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQW1vdW50Q2hhbmdlID0gdGhpcy5oYW5kbGVBbW91bnRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUHJvYmFiaWxpdHlDaGFuZ2UgPSB0aGlzLmhhbmRsZVByb2JhYmlsaXR5Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZU9yZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2luUHJvZ3Jlc3M6IHRydWV9KTtcclxuICAgICAgICBjb25zdCB0eXBlID1cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdPcGluaW9uUGFyYW1ldGVycy5vcGluaW9uID09PSBcInllc1wiXHJcbiAgICAgICAgICAgICAgICA/IFwiYnV5XCJcclxuICAgICAgICAgICAgICAgIDogXCJzaG9ydEFuZFNlbGxcIjtcclxuICAgICAgICBjb25zdCBmZWVJRCA9IHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcImlkXCIpO1xyXG5cclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgICBsZXQgYmlkID0ge1xyXG4gICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50ICpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInByZWNpc2lvblwiKSkgKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMucHJvYmFiaWxpdHlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHRvX3JlY2VpdmU6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50ICpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInByZWNpc2lvblwiKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJpZC5wcmljZSA9IG5ldyBQcmljZSh7YmFzZTogYmlkLmZvcl9zYWxlLCBxdW90ZTogYmlkLnRvX3JlY2VpdmV9KTtcclxuICAgICAgICBsZXQgYXNrID0ge1xyXG4gICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdPcGluaW9uUGFyYW1ldGVycy5hbW91bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucG93KDEwLCB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdG9fcmVjZWl2ZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50ICpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInByZWNpc2lvblwiKSkgKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMucHJvYmFiaWxpdHlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFzay5wcmljZSA9IG5ldyBQcmljZSh7YmFzZTogYXNrLmZvcl9zYWxlLCBxdW90ZTogYXNrLnRvX3JlY2VpdmV9KTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0eXBlID09PSBcImJ1eVwiID8gYXNrIDogYmlkO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJidXlcIikge1xyXG4gICAgICAgICAgICBjb25zdCBidXkgPSBuZXcgTGltaXRPcmRlckNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1dGlscy5jb252ZXJ0X3R5cGVkX3RvX3NhdG9zaGkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRvX3JlY2VpdmU6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5jb252ZXJ0X3R5cGVkX3RvX3NhdG9zaGkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5KVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBzZWxsZXI6IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogZmVlSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNBY3Rpb25zLmNyZWF0ZUxpbWl0T3JkZXIyKGJ1eSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5Qcm9ncmVzczogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IubWVzc2FnZSAhPT0gXCJ3YWxsZXQgbG9ja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmV4Y2hhbmdlX3Vua25vd25fZXJyb3JfcGxhY2Vfb3JkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBjdXJyZW50LnRvX3JlY2VpdmUuZ2V0QW1vdW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogY3VycmVudC50b19yZWNlaXZlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvcmRlciBmYWlsZWQ6XCIsIGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJzaG9ydEFuZFNlbGxcIikge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxsID0gbmV3IExpbWl0T3JkZXJDcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZm9yX3NhbGU6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1dGlscy5jb252ZXJ0X3R5cGVkX3RvX3NhdG9zaGkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b19yZWNlaXZlOiBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcInByZWNpc2lvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5uZXdPcGluaW9uUGFyYW1ldGVycy5wcm9iYWJpbGl0eSlcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVyOiB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGZlZUlELFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBzZWxsLmFtb3VudF9mb3Jfc2FsZS5nZXRBbW91bnQoKSxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5jcmVhdGVQcmVkaWN0aW9uU2hvcnQoc2VsbCwgY29sbGF0ZXJhbCkudGhlbihcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5Qcm9ncmVzczogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IubWVzc2FnZSAhPT0gXCJ3YWxsZXQgbG9ja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmV4Y2hhbmdlX3Vua25vd25fZXJyb3JfcGxhY2Vfb3JkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBidXlBc3NldEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogYnV5QXNzZXQuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJlc2VsZWN0ZWRPcGluaW9uICE9PSBwcmV2UHJvcHMucHJlc2VsZWN0ZWRPcGluaW9uIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJlc2VsZWN0ZWRBbW91bnQgIT09IHByZXZQcm9wcy5wcmVzZWxlY3RlZEFtb3VudCB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnByZXNlbGVjdGVkUHJvYmFiaWxpdHkgIT09XHJcbiAgICAgICAgICAgICAgICBwcmV2UHJvcHMucHJlc2VsZWN0ZWRQcm9iYWJpbGl0eVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZUZyb21Qcm9wcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZUZyb21Qcm9wcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVTdGF0ZUZyb21Qcm9wcygpIHtcclxuICAgICAgICBsZXQgbmV3T3BpbmlvblBhcmFtZXRlcnMgPSB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzO1xyXG4gICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbmV3T3BpbmlvblBhcmFtZXRlcnMpO1xyXG4gICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzLm9waW5pb24gPSB0aGlzLnByb3BzLnByZXNlbGVjdGVkT3BpbmlvbjtcclxuICAgICAgICBuZXdPcGluaW9uUGFyYW1ldGVycy5hbW91bnQgPVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnByZXNlbGVjdGVkQW1vdW50IC9cclxuICAgICAgICAgICAgICAgIE1hdGgucG93KDEwLCB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIikpIHx8IFwiIFwiO1xyXG4gICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5ID1cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVzZWxlY3RlZFByb2JhYmlsaXR5IHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZE9waW5pb246IHRoaXMucHJvcHMucHJlc2VsZWN0ZWRPcGluaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3BpbmlvbkNoYW5nZSgpIHtcclxuICAgICAgICBsZXQgbmV3T3BpbmlvbiA9IHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnM7XHJcbiAgICAgICAgbmV3T3Bpbmlvbi5vcGluaW9uID0gbmV3T3Bpbmlvbi5vcGluaW9uID09PSBcIm5vXCIgPyBcInllc1wiIDogXCJub1wiO1xyXG4gICAgICAgIG5ld09waW5pb24ub3BpbmlvbmF0b3IgPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBuZXdPcGluaW9uUGFyYW1ldGVyczogbmV3T3BpbmlvbixcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcGluaW9uOiBuZXdPcGluaW9uLm9waW5pb25cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBbW91bnRDaGFuZ2Uoe2Ftb3VudCwgYXNzZXR9KSB7XHJcbiAgICAgICAgbGV0IG5ld09waW5pb24gPSB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzO1xyXG4gICAgICAgIG5ld09waW5pb24uYW1vdW50ID0gYW1vdW50O1xyXG4gICAgICAgIG5ld09waW5pb24ub3BpbmlvbmF0b3IgPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld09waW5pb25QYXJhbWV0ZXI6IG5ld09waW5pb259KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBhc3NldCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEFzc2V0OiBhc3NldH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcm9iYWJpbGl0eUNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IG5ld09waW5pb24gPSB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzO1xyXG4gICAgICAgIG5ld09waW5pb24ucHJvYmFiaWxpdHkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbmV3T3BpbmlvblBhcmFtZXRlcjogbmV3T3BpbmlvbixcclxuICAgICAgICAgICAgd3JvbmdQcm9iYWJpbGl0eTogIXRoaXMuX2lzUHJvYmFiaWxpdHlWYWxpZChuZXdPcGluaW9uKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9pc1Byb2JhYmlsaXR5VmFsaWQobmV3T3BpbmlvbiA9IG51bGwpIHtcclxuICAgICAgICBpZiAobmV3T3BpbmlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld09waW5pb24gPSB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFuZXdPcGluaW9uLnByb2JhYmlsaXR5IHx8XHJcbiAgICAgICAgICAgIG5ld09waW5pb24ucHJvYmFiaWxpdHkgPD0gMC4wMSB8fFxyXG4gICAgICAgICAgICBuZXdPcGluaW9uLnByb2JhYmlsaXR5ID49IDAuOTlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaXNGb3JtVmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5faXNQcm9iYWJpbGl0eVZhbGlkKCkgJiZcclxuICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLmFtb3VudCkgPiAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UG90ZW50aWFsV2lubmluZ3MoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5ICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLm9waW5pb24gPT09IFwieWVzXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50IC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5KSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLmFtb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgxICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2JhYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Zvcm1WYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1dhcm5pbmc6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2hvd1dhcm5pbmcsXHJcbiAgICAgICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICB3cm9uZ1Byb2JhYmlsaXR5XHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IFtcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAga2V5PVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pblByb2dyZXNzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2xvYmFsLmNvbmZpcm1cIil9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PVwiY2FuY2VsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmluUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwuY2FuY2VsXCIpfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJwcmVkaWN0aW9uLmFkZF9vcGluaW9uX21vZGFsLnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLm9uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgY2xvc2FibGU9eyF0aGlzLnN0YXRlLmluUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e2Zvb3Rlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVkaWN0aW9uLW1hcmtldHMtLWFkZC1wcmVkaWN0aW9uLW9mZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uYWRkX29waW5pb25fbW9kYWwuc3ltYm9sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXQuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5kZXRhaWxzLnByZWRpY3Rpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0LmNvbmRpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIW5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2FybmluZykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JvbmdQcm9iYWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImhhcy1lcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5kZXRhaWxzLnByZWRpY2F0ZWRfbGlrZWxpaG9vZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9iYWJpbGl0eUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9iYWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5kZXRhaWxzLmlfdGhpbmtfdGhhdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkT3Bpbmlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPcGluaW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJ5ZXNcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uZGV0YWlscy5wcm92ZXNfdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wibm9cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uZGV0YWlscy5pbmNvcnJlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uZGV0YWlscy5wcmVtaXVtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdPcGluaW9uUGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uZGV0YWlscy5jb21taXNzaW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlZGljdGlvbk1hcmtldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXhfbWFya2V0X2ZlZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXJrZXRfZmVlKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5kZXRhaWxzLnBvdGVudGlhbF9wcm9maXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuX2dldFBvdGVudGlhbFdpbm5pbmdzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluUHJvZ3Jlc3MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJmb290ZXIubG9hZGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFkZE9waW5pb25Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgcHJlZGljdGlvbk1hcmtldDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gICAgb3BpbmlvbjogUHJvcFR5cGVzLmFueSxcclxuICAgIGN1cnJlbnRBY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgcHJlc2VsZWN0ZWRPcGluaW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJlc2VsZWN0ZWRBbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBwcmVzZWxlY3RlZFByb2JhYmlsaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYmFzZUFzc2V0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgcXVvdGVBc3NldDogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuQWRkT3Bpbmlvbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgcHJlZGljdGlvbk1hcmtldDogbnVsbCxcclxuICAgIG9waW5pb246IHt9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIE1vZGFsLFxyXG4gICAgSW5wdXQsXHJcbiAgICBGb3JtLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIEljb24sXHJcbiAgICBEYXRlUGlja2VyXHJcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEFzc2V0U2VsZWN0IGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0U2VsZWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IGFzc2V0VXRpbHMgZnJvbSBcImNvbW1vbi9hc3NldF91dGlsc1wiO1xyXG5pbXBvcnQgYXNzZXRDb25zdGFudHMgZnJvbSBcImNoYWluL2Fzc2V0X2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmNvbnN0IElTX0JJVEFTU0VUID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZU1hcmtldE1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbWFya2V0T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBcIjVcIixcclxuICAgICAgICAgICAgICAgIG1heF9zdXBwbHk6IDEwMDAwMCxcclxuICAgICAgICAgICAgICAgIG1heF9tYXJrZXRfZmVlOiAwLFxyXG4gICAgICAgICAgICAgICAgbWFya2V0X2ZlZV9wZXJjZW50OiAwLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHttYWluOiBcIlwifSxcclxuICAgICAgICAgICAgICAgIHJld2FyZF9wZXJjZW50OiAwLFxyXG4gICAgICAgICAgICAgICAgc3ltYm9sOiBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dXYXJuaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgd3JvbmdTeW1ib2w6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cm9uZ0RhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb3JlX2V4Y2hhbmdlX3JhdGU6IHtcclxuICAgICAgICAgICAgICAgIHF1b3RlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBcIjEuMy4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpdGFzc2V0X29wdHM6IHtcclxuICAgICAgICAgICAgICAgIGZlZWRfbGlmZXRpbWVfc2VjOiA2MCAqIDYwICogMjQsXHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtX2ZlZWRzOiA3LFxyXG4gICAgICAgICAgICAgICAgZm9yY2Vfc2V0dGxlbWVudF9kZWxheV9zZWM6IDYwICogNjAgKiAyNCxcclxuICAgICAgICAgICAgICAgIGZvcmNlX3NldHRsZW1lbnRfb2Zmc2V0X3BlcmNlbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgMSAqIGFzc2V0Q29uc3RhbnRzLkdSQVBIRU5FXzFfUEVSQ0VOVCxcclxuICAgICAgICAgICAgICAgIG1heGltdW1fZm9yY2Vfc2V0dGxlbWVudF92b2x1bWU6XHJcbiAgICAgICAgICAgICAgICAgICAgMjAgKiBhc3NldENvbnN0YW50cy5HUkFQSEVORV8xX1BFUkNFTlQsXHJcbiAgICAgICAgICAgICAgICBzaG9ydF9iYWNraW5nX2Fzc2V0OiBcIjEuMy4wXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5Qcm9ncmVzczogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBc3NldENoYW5nZSA9IHRoaXMuaGFuZGxlQXNzZXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUZlZUNoYW5nZSA9IHRoaXMuaGFuZGxlRmVlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UGVybWlzc2lvbnNBbmRGbGFncygpIHtcclxuICAgICAgICBsZXQgZmxhZ0Jvb2xlYW5zID0gYXNzZXRVdGlscy5nZXRGbGFnQm9vbGVhbnMoMCwgSVNfQklUQVNTRVQpO1xyXG4gICAgICAgIGxldCBwZXJtaXNzaW9uQm9vbGVhbnMgPSBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucyhcImFsbFwiLCBJU19CSVRBU1NFVCk7XHJcblxyXG4gICAgICAgIGZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZmxhZ3MgPSBhc3NldFV0aWxzLmdldEZsYWdzKGZsYWdCb29sZWFucywgSVNfQklUQVNTRVQpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZsYWdzLFxyXG4gICAgICAgICAgICBwZXJtaXNzaW9uczogYXNzZXRVdGlscy5nZXRQZXJtaXNzaW9ucyhcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25Cb29sZWFucyxcclxuICAgICAgICAgICAgICAgIElTX0JJVEFTU0VUXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVBc3NldCgpIHtcclxuICAgICAgICBsZXQge21hcmtldE9wdGlvbnMsIGNvcmVfZXhjaGFuZ2VfcmF0ZSwgYml0YXNzZXRfb3B0c30gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCB7cGVybWlzc2lvbnMsIGZsYWdzfSA9IHRoaXMuX2dldFBlcm1pc3Npb25zQW5kRmxhZ3MoKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnMuZGVzY3JpcHRpb25cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpblByb2dyZXNzOiB0cnVlfSk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudElkID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpLmdldChcclxuICAgICAgICAgICAgXCJpZFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBBc3NldEFjdGlvbnMuY3JlYXRlQXNzZXQoXHJcbiAgICAgICAgICAgIGFjY291bnRJZCxcclxuICAgICAgICAgICAgbWFya2V0T3B0aW9ucyxcclxuICAgICAgICAgICAgZmxhZ3MsXHJcbiAgICAgICAgICAgIHBlcm1pc3Npb25zLFxyXG4gICAgICAgICAgICBjb3JlX2V4Y2hhbmdlX3JhdGUsXHJcbiAgICAgICAgICAgIElTX0JJVEFTU0VULFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBiaXRhc3NldF9vcHRzLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luUHJvZ3Jlc3M6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICBcIi4uLiBBc3NldEFjdGlvbnMuY3JlYXRlQXNzZXQoYWNjb3VudF9pZCwgdXBkYXRlKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1hcmtldENyZWF0ZWQobWFya2V0T3B0aW9ucy5zeW1ib2wpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpblByb2dyZXNzOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBsZXQgbWFya2V0T3B0aW9ucyA9IHRoaXMuc3RhdGUubWFya2V0T3B0aW9ucztcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBtb21lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc2V0KFwibWlsbGlzZWNvbmRzXCIsIDApO1xyXG4gICAgICAgICAgICBldmVudCA9IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZXhwaXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV2ZW50LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3ltYm9sXCI6XHJcbiAgICAgICAgICAgICAgICBtYXJrZXRPcHRpb25zW1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5uYW1lXHJcbiAgICAgICAgICAgICAgICBdID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1haW5cIjpcclxuICAgICAgICAgICAgY2FzZSBcImNvbmRpdGlvblwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZXhwaXJ5XCI6XHJcbiAgICAgICAgICAgICAgICBtYXJrZXRPcHRpb25zLmRlc2NyaXB0aW9uW2V2ZW50LnRhcmdldC5uYW1lXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBtYXJrZXRPcHRpb25zW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXJrZXRPcHRpb25zfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXNzZXRDaGFuZ2UoYXNzZXQpIHtcclxuICAgICAgICBpZiAoYXNzZXQpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0JpdGFzc2V0T3B0cyA9IHRoaXMuc3RhdGUuYml0YXNzZXRfb3B0cztcclxuICAgICAgICAgICAgbGV0IG5ld01hcmtldE9wdGlvbnMgPSB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnM7XHJcbiAgICAgICAgICAgIGxldCBuZXdDb3JlRXhjaGFuZ2VSYXRlID0gdGhpcy5zdGF0ZS5jb3JlX2V4Y2hhbmdlX3JhdGU7XHJcbiAgICAgICAgICAgIG5ld0JpdGFzc2V0T3B0cy5zaG9ydF9iYWNraW5nX2Fzc2V0ID0gYXNzZXQ7XHJcbiAgICAgICAgICAgIG5ld01hcmtldE9wdGlvbnMucHJlY2lzaW9uID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhc3NldCkuZ2V0KFxyXG4gICAgICAgICAgICAgICAgXCJwcmVjaXNpb25cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBuZXdDb3JlRXhjaGFuZ2VSYXRlLmJhc2UuYXNzZXRfaWQgPSBhc3NldDtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBiaXRhc3NldF9vcHRzOiBuZXdCaXRhc3NldE9wdHMsXHJcbiAgICAgICAgICAgICAgICBjb3JlX2V4Y2hhbmdlX3JhdGU6IG5ld0NvcmVFeGNoYW5nZVJhdGUsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXRPcHRpb25zOiBuZXdNYXJrZXRPcHRpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZm9yY2VQb3NpdGl2ZShudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChudW1iZXIpIDwgMCA/IFwiMFwiIDogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUZlZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHJcbiAgICAgICAgbGV0IG5ld01hcmtldE9wdGlvbnMgPSB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnM7XHJcbiAgICAgICAgbmV3TWFya2V0T3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgPSB0aGlzLl9mb3JjZVBvc2l0aXZlKFxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWFya2V0T3B0aW9uczogbmV3TWFya2V0T3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9pc0Zvcm1WYWxpZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zeW1ib2xzLmluY2x1ZGVzKHRoaXMuc3RhdGUubWFya2V0T3B0aW9ucy5zeW1ib2wpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dyb25nU3ltYm9sOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3cm9uZ1N5bWJvbDogZmFsc2V9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBleHBpcnkgPSBuZXcgRGF0ZSh0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnMuZGVzY3JpcHRpb24uZXhwaXJ5KTtcclxuICAgICAgICBpZiAobm93ID4gZXhwaXJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dyb25nRGF0ZTogdHJ1ZX0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d3JvbmdEYXRlOiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYXJrZXRPcHRpb25zLnN5bWJvbCAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnMuZGVzY3JpcHRpb24ubWFpbiAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnMuZGVzY3JpcHRpb24uY29uZGl0aW9uICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWFya2V0T3B0aW9ucy5kZXNjcmlwdGlvbi5leHBpcnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGUpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGb3JtVmFsaWQoKSkge1xyXG4gICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUFzc2V0KCkuY2FsbCh0aGlzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93V2FybmluZzogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3Nob3dXYXJuaW5nLCBtYXJrZXRPcHRpb25zLCB3cm9uZ1N5bWJvbCwgd3JvbmdEYXRlfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IFtcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAga2V5PVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pblByb2dyZXNzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2xvYmFsLmNvbmZpcm1cIil9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PVwiY2FuY2VsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmluUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwuY2FuY2VsXCIpfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJwcmVkaWN0aW9uLmNyZWF0ZV9tYXJrZXRfbW9kYWwudGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMucHJvcHMub25DbG9zZX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBjbG9zYWJsZT17IXRoaXMuc3RhdGUuaW5Qcm9ncmVzc31cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17Zm9vdGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWRpY3Rpb24tbWFya2V0cy0tY3JlYXRlLXByZWRpY3Rpb24tbWFya2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghbWFya2V0T3B0aW9ucy5zeW1ib2wgJiYgc2hvd1dhcm5pbmcpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyb25nU3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaGFzLWVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC50b29sdGlwX3N5bWJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC5zeW1ib2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN5bWJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnMuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbWFya2V0T3B0aW9ucy5kZXNjcmlwdGlvbi5jb25kaXRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1dhcm5pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXMtZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLnRvb2x0aXBfY29uZGl0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLmNvbmRpdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMC41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZGl0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbWFya2V0T3B0aW9ucy5kZXNjcmlwdGlvbi5tYWluICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dXYXJuaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaGFzLWVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC50b29sdGlwX2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLmRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIW1hcmtldE9wdGlvbnMuZGVzY3JpcHRpb24uZXhwaXJ5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2FybmluZykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JvbmdEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaGFzLWVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC50b29sdGlwX3Jlc29sdXRpb25fZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC5yZXNvbHV0aW9uX2RhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV4cGlyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC5zZWxlY3RfZGF0ZV9hbmRfdGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Paz17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLnRvb2x0aXBfYmFja2luZ19hc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLmJhY2tpbmdfYXNzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjExM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMTIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4xMjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJpdGFzc2V0X29wdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvcnRfYmFja2luZ19hc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFzc2V0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC50b29sdGlwX2NvbW1pc3Npb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC5jb21taXNzaW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFya2V0X2ZlZV9wZXJjZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmVlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5Qcm9ncmVzcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImZvb3Rlci5sb2FkaW5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQ3JlYXRlTWFya2V0TW9kYWwucHJvcFR5cGVzID0ge1xyXG4gICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGN1cnJlbnRBY2NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3ltYm9sczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgb25NYXJrZXRDcmVhdGVkOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5cclxuQ3JlYXRlTWFya2V0TW9kYWwuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdmlzaWJsZTogZmFsc2VcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01vZGFsLCBJbnB1dCwgRm9ybSwgQnV0dG9uLCBSYWRpb30gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb2x2ZU1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVzb2x2ZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXQuYXNzZXRfaWQsXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ6IFwieWVzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzdWx0OiBcInllc1wiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHRDaGFuZ2UgPSB0aGlzLmhhbmRsZVJlc3VsdENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlc3VsdENoYW5nZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcmVzb2x2ZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmVzb2x2ZVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgICAgICByZXN1bHRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzdWx0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IFtcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAga2V5PVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlc29sdmVNYXJrZXQodGhpcy5zdGF0ZS5yZXNvbHZlUGFyYW1ldGVycylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmluUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwuY29uZmlybVwiKX1cclxuICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9XCJjYW5jZWxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuaW5Qcm9ncmVzc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdsb2JhbC5jYW5jZWxcIil9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17PFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5yZXNvbHZlX21vZGFsLnRpdGxlXCIgLz59XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5vbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGNsb3NhYmxlPXshdGhpcy5zdGF0ZS5pblByb2dyZXNzfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtmb290ZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlZGljdGlvbi1tYXJrZXRzLS1yZXNvbHZlLXByZWRpY3Rpb24tbWFya2V0LWFzc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24ucmVzb2x2ZV9tb2RhbC5zeW1ib2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMucHJlZGljdGlvbk1hcmtldC5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJwcmVkaWN0aW9uLnJlc29sdmVfbW9kYWwucHJlZGljdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXQuY29uZGl0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24ucmVzb2x2ZV9tb2RhbC50aGVfcHJlZGljdGlvbl9oYXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlc3VsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVSZXN1bHRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXtcInllc1wifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5yZXNvbHZlX21vZGFsLnByb3Zlbl90cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJub1wifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5yZXNvbHZlX21vZGFsLndhc19pbmNvcnJlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZXNvbHZlTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gICAgcHJlZGljdGlvbk1hcmtldDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gICAgb25SZXNvbHZlTWFya2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5cclxuUmVzb2x2ZU1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgcHJlZGljdGlvbk1hcmtldDogbnVsbFxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTtBQVpBO0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQWRBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBRkE7QUFTQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7Ozs7OztBQUNBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTs7OztBQTNJQTtBQUNBO0FBNklBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFPQTtBQVpBO0FBQ0E7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE4U0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQXJUQTtBQXVUQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBN1RBO0FBK1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUE1VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUNBO0FBaUJBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQXJDQTtBQXdDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFaQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBOzs7Ozs7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFJQTtBQUdBOztBQUlBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFwQ0E7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQW9EQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZkE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFMQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBTEE7QUF4Q0E7QUExQkE7QUFpRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFEQTtBQXJGQTtBQThGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBTEE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQWZBO0FBUkE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUEvSEE7QUEwSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQUxBO0FBSkE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZkE7QUFOQTtBQTRCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQUxBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWZBO0FBaENBO0FBc0RBO0FBRUE7QUFDQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUExRUE7QUF5RkE7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFaQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXhDQTtBQWlEQTs7OztBQXpzQkE7QUFDQTtBQTJzQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQU9BO0FBWkE7QUFDQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbnZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFnQkE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWxCQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUxBO0FBUUE7QUF0QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUxBO0FBUUE7QUF6QkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQW5CQTtBQXNCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFuRUE7QUFzRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBTEE7QUFBQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQXBGQTtBQXVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBbkJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFuQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBT0E7QUFQQTtBQVlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBUEE7QUFwQkE7QUFtREE7QUF4REE7QUEyREE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWlCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTs7OztBQWpiQTtBQUNBO0FBbWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUFrQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUdBO0FBQUE7QUFHQTtBQXBCQTtBQXNCQTtBQXZCQTtBQTBCQTs7OztBQXBGQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFEQTs7Ozs7OztBQ0pBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBckJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFMQTtBQVFBO0FBdkJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFlQTtBQTVCQTtBQStCQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBekJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBV0E7QUF4QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTtBQVZBO0FBQUE7QUFpQkE7QUExQkE7QUE2QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQTFCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFQQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFqQkE7QUFEQTtBQW5CQTtBQW1EQTtBQXhEQTtBQTJEQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUF2U0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQXdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBeUJBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQXJCQTtBQUNBO0FBMEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBSEE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFyQkE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQURBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQURBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBVEE7QUFEQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVRBO0FBTkE7QUFzQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFSQTtBQUZBO0FBREE7QUFEQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBWEE7QUFGQTtBQURBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBREE7QUFVQTtBQW5IQTtBQURBO0FBVkE7QUFxSUE7Ozs7QUE1Y0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQTZjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVJBO0FBVUE7QUFqQ0E7QUFDQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQTBDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBWUE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBUEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWhCQTtBQVJBO0FBREE7QUFtQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWhCQTtBQVJBO0FBREE7QUFrQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFoQkE7QUFSQTtBQURBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBUEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVhBO0FBREE7QUFoQkE7QUFUQTtBQURBO0FBNENBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFQQTtBQWVBO0FBQ0E7QUFNQTtBQUlBO0FBQ0E7QUFaQTtBQWhCQTtBQURBO0FBaUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFQQTtBQWhCQTtBQURBO0FBNEJBO0FBaE5BO0FBREE7QUFWQTtBQWtPQTs7OztBQWpjQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBa2NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbGVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFDQTtBQU9BO0FBVkE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUxBO0FBT0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQU5BO0FBUUE7QUFSQTtBQVVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFEQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVRBO0FBSkE7QUF6QkE7QUFEQTtBQVJBO0FBMERBOzs7O0FBeEdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUF5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9