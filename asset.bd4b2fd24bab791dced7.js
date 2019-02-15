(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 2697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2299);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(813);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AssetImage = function (_React$Component) {
    _inherits(AssetImage, _React$Component);

    function AssetImage(props) {
        _classCallCheck(this, AssetImage);

        var _this = _possibleConstructorReturn(this, (AssetImage.__proto__ || Object.getPrototypeOf(AssetImage)).call(this, props));

        _this.state = {
            imgError: false
        };
        return _this;
    }

    _createClass(AssetImage, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return this.props.asset !== np.asset || this.props.maxWidth !== np.maxWidth || this.props.whiteList !== np.whiteList || this.state.imgError !== ns.imgError;
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                if (this.props.replaceNoneToBts) this.refs[imgName.toLowerCase()].src = "" + "asset-symbols/bts.png";else this.refs[imgName.toLowerCase()].remove();
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            function getImageName(asset) {
                var symbol = asset.get("symbol");
                return symbol;
                // if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                // if (symbol.startsWith("ESCROW.")) return symbol;
                // let imgName = asset.get("symbol").split(".");
                //return imgName.length === 2 ? imgName[1] : imgName[0];
            }

            var imgName = getImageName(asset);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                ref: imgName.toLowerCase(),
                className: "column-hide-small",
                onError: this._onError.bind(this, imgName),
                style: { maxWidth: this.props.maxWidth, marginRight: 5 },
                src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
            });
        }
    }]);

    return AssetImage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetImage.propTypes = {
    replaceNoneToBts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
AssetImage.defaultProps = {
    replaceNoneToBts: true,
    maxWidth: 20
};


AssetImage = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetImage);

var AssetImageWrapper = function (_React$Component2) {
    _inherits(AssetImageWrapper, _React$Component2);

    function AssetImageWrapper() {
        _classCallCheck(this, AssetImageWrapper);

        return _possibleConstructorReturn(this, (AssetImageWrapper.__proto__ || Object.getPrototypeOf(AssetImageWrapper)).apply(this, arguments));
    }

    _createClass(AssetImageWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetImage, _extends({}, this.props, { asset: this.props.name }));
        }
    }]);

    return AssetImageWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetImageWrapper);

/***/ }),

/***/ 3131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1807);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2418);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2419);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2299);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2080);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2420);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2697);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2298);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2447);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2127);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2097);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(570);
/* harmony import */ var _Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3132);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(419);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(488);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(585);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2546);
/* harmony import */ var _Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3133);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(552);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1847);
/* harmony import */ var _AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3134);
/* harmony import */ var _AssetPublishFeed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3135);
/* harmony import */ var _BidCollateralOperation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3137);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2783);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




























var AssetFlag = function (_React$Component) {
    _inherits(AssetFlag, _React$Component);

    function AssetFlag() {
        _classCallCheck(this, AssetFlag);

        return _possibleConstructorReturn(this, (AssetFlag.__proto__ || Object.getPrototypeOf(AssetFlag)).apply(this, arguments));
    }

    _createClass(AssetFlag, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                isSet = _props.isSet,
                name = _props.name;

            if (!isSet) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "asset-flag" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "label info" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets." + name })
                )
            );
        }
    }]);

    return AssetFlag;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

//-------------------------------------------------------------


var AssetPermission = function (_React$Component2) {
    _inherits(AssetPermission, _React$Component2);

    function AssetPermission() {
        _classCallCheck(this, AssetPermission);

        return _possibleConstructorReturn(this, (AssetPermission.__proto__ || Object.getPrototypeOf(AssetPermission)).apply(this, arguments));
    }

    _createClass(AssetPermission, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                isSet = _props2.isSet,
                name = _props2.name;


            if (!isSet) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "asset-flag" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "label info" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets." + name })
                )
            );
        }
    }]);

    return AssetPermission;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Asset = function (_React$Component3) {
    _inherits(Asset, _React$Component3);

    function Asset(props) {
        _classCallCheck(this, Asset);

        var _this3 = _possibleConstructorReturn(this, (Asset.__proto__ || Object.getPrototypeOf(Asset)).call(this, props));

        _this3.state = {
            callOrders: [],
            collateralBids: [],
            marginTableSort: "ratio",
            collateralTableSort: "price",
            sortDirection: true,
            showCollateralBidInInfo: false
        };
        return _this3;
    }

    _createClass(Asset, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._getMarginCollateral();
        }
    }, {
        key: "updateOnCollateralBid",
        value: function updateOnCollateralBid() {
            this._getMarginCollateral();
        }
    }, {
        key: "_getMarginCollateral",
        value: function _getMarginCollateral() {
            var _this4 = this;

            if (this.props.asset.has("bitasset")) {
                var _assets;

                var assets = (_assets = {}, _defineProperty(_assets, this.props.asset.get("id"), this.props.asset.toJS()), _defineProperty(_assets, this.props.backingAsset.get("id"), this.props.backingAsset.toJS()), _assets);

                var isPredictionMarket = this.props.asset.getIn(["bitasset", "is_prediction_market"], false);

                var feedPrice = this._getFeedPrice();

                if (!!feedPrice) {
                    try {
                        bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__["Apis"].instance().db_api().exec("get_call_orders", [this.props.asset.get("id"), 300]).then(function (call_orders) {
                            var callOrders = call_orders.map(function (c) {
                                return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__["CallOrder"](c, assets, _this4.props.asset.get("id"), feedPrice, isPredictionMarket);
                            });
                            _this4.setState({ callOrders: callOrders });
                        });
                    } catch (e) {
                        // console.log(err);
                    }
                    try {
                        bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__["Apis"].instance().db_api().exec("get_collateral_bids", [this.props.asset.get("id"), 100, 0]).then(function (coll_orders) {
                            var collateralBids = coll_orders.map(function (c) {
                                return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__["CollateralBid"](c, assets, _this4.props.asset.get("id"), feedPrice);
                            });
                            _this4.setState({ collateralBids: collateralBids });
                        });
                    } catch (e) {
                        console.log("get_collateral_bids Error: ", e);
                    }
                }
            }
        }
    }, {
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            var _assets2;

            var assets = (_assets2 = {}, _defineProperty(_assets2, this.props.asset.get("id"), this.props.asset.toJS()), _defineProperty(_assets2, this.props.backingAsset.get("id"), this.props.backingAsset.toJS()), _assets2);

            var isPredictionMarket = this.props.asset.getIn(["bitasset", "is_prediction_market"], false);
            var sqr = this.props.asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]);
            var settlePrice = this.props.asset.getIn(["bitasset", "current_feed", "settlement_price"]);

            // if there has been no feed price, settlePrice has 0 amount
            if (settlePrice.getIn(["base", "amount"]) == 0 && settlePrice.getIn(["quote", "amount"]) == 0) {
                return null;
            }

            var feedPrice = void 0;

            /* Prediction markets don't need feeds for shorting, so the settlement price can be set to 1:1 */
            if (isPredictionMarket && settlePrice.getIn(["base", "asset_id"]) === settlePrice.getIn(["quote", "asset_id"])) {
                if (!assets[this.props.backingAsset.get("id")]) {
                    assets[this.props.backingAsset.get("id")] = {
                        precision: this.props.asset.get("precision")
                    };
                }
                settlePrice = settlePrice.setIn(["base", "amount"], 1);
                settlePrice = settlePrice.setIn(["base", "asset_id"], this.props.backingAsset.get("id"));
                settlePrice = settlePrice.setIn(["quote", "amount"], 1);
                settlePrice = settlePrice.setIn(["quote", "asset_id"], this.props.asset.get("id"));
                sqr = 1000;
            }

            // Catch Invalid SettlePrice object
            if (settlePrice.toJS) {
                var settleObject = settlePrice.toJS();
                if (!assets[settleObject.base.asset_id]) return;
            }

            feedPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__["FeedPrice"]({
                priceObject: settlePrice,
                market_base: this.props.asset.get("id"),
                sqr: sqr,
                assets: assets
            });

            return feedPrice;
        }
    }, {
        key: "_toggleSortOrder",
        value: function _toggleSortOrder(type) {
            if (type !== this.state.marginTableSort) {
                this.setState({
                    marginTableSort: type
                });
            } else {
                this.setState({
                    sortDirection: !this.state.sortDirection
                });
            }

            if (type !== this.state.collateralTableSort) {
                this.setState({
                    collateralTableSort: type
                });
            } else {
                this.setState({
                    sortDirection: !this.state.sortDirection
                });
            }
        }
    }, {
        key: "_assetType",
        value: function _assetType(asset) {
            return "bitasset" in asset ? asset.bitasset.is_prediction_market ? "Prediction" : "Smart" : "Simple";
        }
    }, {
        key: "renderFlagIndicators",
        value: function renderFlagIndicators(flags, names) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                names.map(function (name) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetFlag, {
                        key: "flag_" + name,
                        name: name,
                        isSet: flags[name]
                    });
                })
            );
        }
    }, {
        key: "renderPermissionIndicators",
        value: function renderPermissionIndicators(permissions, names) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                names.map(function (name) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetPermission, {
                        key: "perm_" + name,
                        name: name,
                        isSet: permissions[name]
                    });
                })
            );
        }
    }, {
        key: "formattedPrice",
        value: function formattedPrice(price) {
            var hide_symbols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var hide_value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var factor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var negative_invert = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            var base = price.base;
            var quote = price.quote;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                base_amount: base.amount,
                base_asset: base.asset_id,
                quote_amount: quote.amount,
                quote_asset: quote.asset_id,
                hide_value: hide_value,
                hide_symbols: hide_symbols,
                factor: factor,
                negative_invert: negative_invert
            });
        }
    }, {
        key: "renderAuthorityList",
        value: function renderAuthorityList(authorities) {
            return authorities.map(function (authority) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { key: authority },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: authority }),
                    "\xA0"
                );
            });
        }
    }, {
        key: "renderMarketList",
        value: function renderMarketList(asset, markets) {
            var symbol = asset.symbol;
            return markets.map(function (market) {
                if (market == symbol) return null;
                var marketID = market + "_" + symbol;
                var marketName = market + "/" + symbol;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { key: marketID },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        { to: "/market/" + marketID },
                        marketName
                    ),
                    "\xA0"
                );
            }.bind(this));
        }
    }, {
        key: "renderAboutBox",
        value: function renderAboutBox(asset, originalAsset) {
            var issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(asset.issuer, false, false);
            var issuerName = issuer ? issuer.get("name") : "";

            // Add <a to any links included in the description
            var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].parseDescription(asset.options.description);
            var desc = description.main;
            var short_name = description.short_name ? description.short_name : null;

            var urlTest = /(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g;

            // Regexp needs a whitespace after a url, so add one to make sure
            desc = desc && desc.length > 0 ? desc + " " : desc;
            var urls = desc.match(urlTest);

            // Add market link
            var core_asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset("1.3.0");
            var preferredMarket = description.market ? description.market : core_asset ? core_asset.get("symbol") : "BTS";
            if ("bitasset" in asset && asset.bitasset.is_prediction_market) {
                preferredMarket = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset(asset.bitasset.options.short_backing_asset);
                if (preferredMarket) {
                    preferredMarket = preferredMarket.get("symbol");
                } else {
                    preferredMarket = core_asset.get("symbol");
                }
            }
            if (asset.symbol === core_asset.get("symbol")) preferredMarket = "USD";
            if (urls && urls.length) {
                urls.forEach(function (url) {
                    var markdownUrl = "<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"" + url + "\">" + url + "</a>";
                    desc = desc.replace(url, markdownUrl);
                });
            }

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].replaceName(originalAsset),
                name = _utils$replaceName.name,
                prefix = _utils$replaceName.prefix;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: { overflow: "visible" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h2",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        maxWidth: 50,
                        replaceNoneToBts: false,
                        name: asset.symbol
                    }),
                    short_name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { marginRight: 15 } },
                        short_name
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                        {
                            className: "button market-button",
                            to: "/market/" + asset.symbol + "_" + preferredMarket
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.market" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    path: "assets/" + asset.symbol,
                    alt_path: "assets/Asset",
                    section: "summary",
                    symbol: (prefix || "") + name,
                    description: desc,
                    issuer: issuerName,
                    hide_issuer: "true"
                })
            );
        }
    }, {
        key: "renderSummary",
        value: function renderSummary(asset) {
            // TODO: confidential_supply: 0 USD   [IF NOT ZERO OR NOT DISABLE CONFIDENTIAL]
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            var options = asset.options;

            var flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].getFlagBooleans(asset.options.flags, this.props.asset.has("bitasset_data_id"));

            var bitNames = Object.keys(flagBooleans);

            var currentSupply = dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.current_supply" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: dynamic.current_supply,
                        asset: asset.id
                    })
                )
            ) : null;

            var stealthSupply = dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.stealth_supply" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: dynamic.confidential_supply,
                        asset: asset.id
                    })
                )
            ) : null;

            var marketFee = flagBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.market_fee" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    " ",
                    options.market_fee_percent / 100.0,
                    " % "
                )
            ) : null;

            // options.max_market_fee initially a string
            var maxMarketFee = flagBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.max_market_fee" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: +options.max_market_fee,
                        asset: asset.id
                    })
                )
            ) : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-card no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card-divider" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], { name: asset.symbol })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table key-value-table table-hover" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.asset_type" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                " ",
                                this._assetType(asset),
                                " "
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.issuer" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: asset.issuer })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.assets.precision" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                " ",
                                asset.precision,
                                " "
                            )
                        ),
                        asset.bitasset ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.assets.backing_asset" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    asset: asset.bitasset.options.short_backing_asset
                                })
                            )
                        ) : null,
                        currentSupply,
                        stealthSupply,
                        marketFee,
                        maxMarketFee
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                this.renderFlagIndicators(flagBooleans, bitNames)
            );
        }
    }, {
        key: "renderPriceFeed",
        value: function renderPriceFeed(asset) {
            var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.title" });
            var bitAsset = asset.bitasset;
            if (!("current_feed" in bitAsset)) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { header: title });
            var currentFeed = bitAsset.current_feed;
            var feedPrice = this.formattedPrice(currentFeed.settlement_price);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-card no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card-divider" },
                    title
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    {
                        className: "table key-value-table table-hover",
                        style: { padding: "1.2rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.external_feed_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                feedPrice
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.feed_lifetime" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                bitAsset.options.feed_lifetime_sec / 60 / 60
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.min_feeds" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                bitAsset.options.minimum_feeds
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.maintenance_collateral_ratio" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                currentFeed.maintenance_collateral_ratio / 1000
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.maximum_short_squeeze_ratio" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                currentFeed.maximum_short_squeeze_ratio / 1000
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "_analyzeBids",
        value: function _analyzeBids(settlement_fund_debt) {
            // Convert supply to calculable values
            var current_supply_value = settlement_fund_debt;

            var bids_collateral_value = 0;
            var bids_debt_value = 0;

            var sorted_bids = this.state.collateralBids.sort(function (a, b) {
                return b.bid.toReal() - a.bid.toReal();
            });

            sorted_bids.forEach(function (bid) {
                var collateral = bid.collateral;
                var debt = bid.debt;
                if (bids_debt_value < current_supply_value) {
                    if (bids_debt_value + debt >= current_supply_value) {
                        debt = current_supply_value - bids_debt_value;
                        collateral = debt / bid.debt * collateral;
                        bid.consideredIfRevived = 2;
                    } else {
                        bid.consideredIfRevived = 1;
                    }
                    bids_collateral_value = bids_collateral_value + collateral;
                    bids_debt_value = bids_debt_value + debt;
                } else {
                    bid.consideredIfRevived = 0;
                }
            });

            return {
                collateral: bids_collateral_value,
                debt: bids_debt_value
            };
        }
    }, {
        key: "renderSettlement",
        value: function renderSettlement(asset) {
            var _this5 = this;

            var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.title" });
            var bitAsset = asset.bitasset;
            if (!("current_feed" in bitAsset)) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { header: title });

            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            var currentSupply = dynamic ? dynamic.current_supply : 0;

            var currentFeed = bitAsset.current_feed;
            var isGlobalSettle = asset.bitasset.settlement_fund > 0 ? true : false;

            var settlement_fund_collateral_ratio = null;
            var total_collateral_ratio = null;
            var revive_price_with_bids = null;

            if (isGlobalSettle) {
                var _assets3;

                /***
                 * Global Settled Assets
                 */
                var settlementFund = bitAsset.settlement_fund;
                var settlementPrice = this.formattedPrice(bitAsset.settlement_price);
                var revivePrice = this.formattedPrice(bitAsset.settlement_price, false, false, currentFeed.maintenance_collateral_ratio / 1000, true);

                var assets = (_assets3 = {}, _defineProperty(_assets3, this.props.asset.get("id"), this.props.asset.toJS()), _defineProperty(_assets3, this.props.backingAsset.get("id"), this.props.backingAsset.toJS()), _assets3);
                var feedPrice = this._getFeedPrice();

                // Convert supply to calculable values
                var current_supply_value = currentSupply;
                var current_collateral_value = bitAsset.settlement_fund;

                var bids = this._analyzeBids(current_supply_value);

                revive_price_with_bids = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    base_amount: bitAsset.settlement_fund / 1 + bids.collateral // /1 is implicit type conversion
                    , base_asset: assets[bitAsset.options.short_backing_asset].id,
                    quote_amount: bids.debt,
                    quote_asset: asset.id,
                    hide_value: false,
                    hide_symbols: false,
                    factor: currentFeed.maintenance_collateral_ratio / 1000,
                    negative_invert: true
                });

                current_supply_value = current_supply_value / Math.pow(10, asset.precision);
                current_collateral_value = current_collateral_value / Math.pow(10, assets[bitAsset.options.short_backing_asset].precision);
                settlement_fund_collateral_ratio = current_collateral_value / feedPrice.toReal() / current_supply_value;

                var bids_collateral = bids.collateral / Math.pow(10, assets[bitAsset.options.short_backing_asset].precision);
                total_collateral_ratio = (current_collateral_value + bids_collateral) / feedPrice.toReal() / current_supply_value;
            } else {
                /***
                 * Non Global Settlement Assets
                 */
                var globalSettlementPrice = this.getGlobalSettlementPrice();
                var currentSettled = bitAsset.force_settled_volume;
                var settlementOffset = bitAsset.options.force_settlement_offset_percent;
                var settlementDelay = bitAsset.options.force_settlement_delay_sec;
                var maxSettlementVolume = bitAsset.options.maximum_force_settlement_volume;

                var msspPrice = this.formattedPrice(currentFeed.settlement_price, false, false, currentFeed.maximum_short_squeeze_ratio / 1000);
                var settlePrice = this.formattedPrice(currentFeed.settlement_price, false, false, 1 - settlementOffset / 10000);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-card no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card-divider" },
                    title
                ),
                isGlobalSettle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.settlement.gs_description"
                }),
                isGlobalSettle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_revive" }),
                    "\xA0(",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_see_actions" }),
                    ", \xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_or" }),
                    "\xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            onClick: function onClick() {
                                _this5.setState({
                                    showCollateralBidInInfo: !_this5.state.showCollateralBidInInfo
                                });
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_place_bid" })
                    ),
                    ")."
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    {
                        className: "table key-value-table table-hover",
                        style: { padding: "1.2rem" }
                    },
                    isGlobalSettle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.settlement_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                settlementPrice
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.settlement_funds" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    asset: bitAsset.options.short_backing_asset,
                                    amount: settlementFund
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.settlement_funds_collateral_ratio" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                settlement_fund_collateral_ratio.toFixed(6)
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    style: {
                                        fontWeight: "bold"
                                    },
                                    content: "explorer.asset.settlement.gs_revert"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.gs_auto_revive_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                revivePrice,
                                " / ",
                                revive_price_with_bids
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    content: "explorer.asset.settlement.gs_collateral_valuation",
                                    mcr: currentFeed.maintenance_collateral_ratio / 1000
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                total_collateral_ratio.toFixed(6)
                            )
                        )
                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.maximum_short_squeeze_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                msspPrice
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.global_settlement_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                globalSettlementPrice ? globalSettlementPrice : "-"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                    style: {
                                        fontWeight: "bold"
                                    },
                                    content: "explorer.asset.settlement.force_settlement"
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                "\xA0"
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.price" }),
                                "\xA0 (",
                                settlementOffset / 100,
                                "%",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.offset" }),
                                ")"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                settlePrice
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.delay" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_14__["default"], { time: settlementDelay })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.max_settle_volume" }),
                                "\xA0(",
                                maxSettlementVolume / 100,
                                "%)"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    asset: asset.id,
                                    amount: currentSupply * (maxSettlementVolume / 10000)
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.current_settled" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    asset: asset.id,
                                    amount: currentSettled
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.settle_remaining_volume" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                currentSettled == 0 ? 100 : Math.round(100 - currentSettled / (currentSupply * (maxSettlementVolume / 10000)) * 100, 2),
                                "%"
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "renderFeePool",
        value: function renderFeePool(asset) {
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            var options = asset.options;
            var core = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset("1.3.0");

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-card no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card-divider" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.title" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.fee_pool.pool_text",
                    unsafe: true,
                    asset: asset.symbol,
                    core: core.get("symbol")
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    {
                        className: "table key-value-table",
                        style: { padding: "1.2rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.core_exchange_rate" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                this.formattedPrice(options.core_exchange_rate)
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.pool_balance" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    asset: "1.3.0",
                                    amount: dynamic.fee_pool
                                }) : null
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.unclaimed_issuer_income" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    asset: asset.id,
                                    amount: dynamic.accumulated_fees
                                }) : null
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "renderAssetOwnerUpdate",
        value: function renderAssetOwnerUpdate(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "grid-content small-no-padding",
                    style: { overflowY: "visible" }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "asset-card no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-divider" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.update_owner" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "p",
                        content: "account.user_issued_assets.update_owner_text",
                        asset: asset.symbol
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_22__["default"], {
                        asset: asset,
                        account: this.props.currentAccount,
                        currentOwner: asset.issuer
                    })
                )
            );
        }
    }, {
        key: "renderFeedPublish",
        value: function renderFeedPublish(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "grid-content small-no-padding",
                    style: { overflowY: "visible" }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "asset-card no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-divider" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_publish_feed" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "p",
                        content: "explorer.asset.feed_producer_text"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetPublishFeed__WEBPACK_IMPORTED_MODULE_23__["default"], {
                        asset: asset.id,
                        account: this.props.currentAccount,
                        currentOwner: asset.issuer
                    })
                )
            );
        }
    }, {
        key: "renderCollateralBid",
        value: function renderCollateralBid(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content small-no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "asset-card no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-divider" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral.bid" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "p",
                        content: "explorer.asset.collateral.bid_text",
                        asset: asset.symbol
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "p",
                        content: "explorer.asset.settlement.gs_included_on_revival"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "p",
                        content: "explorer.asset.collateral.remove_bid"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BidCollateralOperation__WEBPACK_IMPORTED_MODULE_24__["default"], {
                        asset: asset.symbol,
                        funderAccountName: this.props.currentAccount,
                        onUpdate: this.updateOnCollateralBid.bind(this),
                        hideBalance: true
                    })
                )
            );
        }
    }, {
        key: "renderFeePoolFunding",
        value: function renderFeePoolFunding(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content small-no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "asset-card no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-divider" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.fund" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        component: "p",
                        content: "explorer.asset.fee_pool.fund_text",
                        asset: asset.symbol
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        asset: asset.symbol,
                        funderAccountName: this.props.currentAccount,
                        hideBalance: true
                    })
                )
            );
        }
    }, {
        key: "renderFeePoolClaiming",
        value: function renderFeePoolClaiming(asset) {
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content small-no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "asset-card no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-divider" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.claim_balance" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        asset: asset.symbol,
                        funderAccountName: this.props.currentAccount,
                        dynamic: dynamic,
                        hideBalance: true,
                        type: "claim"
                    })
                )
            );
        }
    }, {
        key: "renderFeesClaiming",
        value: function renderFeesClaiming(asset) {
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content small-no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "asset-card no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "card-divider" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_claim_fees" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        asset: asset.symbol,
                        dynamic: dynamic,
                        funderAccountName: this.props.currentAccount,
                        hideBalance: true,
                        type: "claim_fees"
                    })
                )
            );
        }

        // TODO: Blacklist Authorities: <Account list like Voting>
        // TODO: Blacklist Market: Base/Market, Base/Market

    }, {
        key: "renderPermissions",
        value: function renderPermissions(asset) {
            //var dynamic = asset.dynamic;

            var options = asset.options;

            var permissionBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].getFlagBooleans(asset.options.issuer_permissions, this.props.asset.has("bitasset_data_id"));

            var bitNames = Object.keys(permissionBooleans);

            // options.blacklist_authorities = ["1.2.3", "1.2.4"];
            // options.whitelist_authorities = ["1.2.1", "1.2.2"];
            // options.blacklist_markets = ["JPY", "RUB"];
            // options.whitelist_markets = ["USD", "EUR", "GOLD"];

            // options.max_market_fee initially a string
            var maxMarketFee = permissionBooleans["charge_market_fee"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.max_market_fee" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: +options.max_market_fee,
                        asset: asset.id
                    })
                )
            ) : null;

            // options.max_supply initially a string
            var maxSupply = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.max_supply" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: +options.max_supply,
                        asset: asset.id
                    })
                )
            );

            var whiteLists = permissionBooleans["white_list"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                !!options.blacklist_authorities && !!options.blacklist_authorities.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.blacklist_authorities" }),
                    ": \xA0",
                    this.renderAuthorityList(options.blacklist_authorities)
                ),
                !!options.blacklist_markets && !!options.blacklist_markets.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.blacklist_markets" }),
                    ": \xA0",
                    this.renderMarketList(asset, options.blacklist_markets)
                ),
                !!options.whitelist_authorities && !!options.whitelist_authorities.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.whitelist_authorities" }),
                    ": \xA0",
                    this.renderAuthorityList(options.whitelist_authorities)
                ),
                !!options.whitelist_markets && !!options.whitelist_markets.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.whitelist_markets" }),
                    ": \xA0",
                    this.renderMarketList(asset, options.whitelist_markets)
                )
            ) : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "asset-card no-padding" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "card-divider" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.title" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    {
                        className: "table key-value-table table-hover",
                        style: { padding: "1.2rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        maxMarketFee,
                        maxSupply
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                this.renderPermissionIndicators(permissionBooleans, bitNames),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                whiteLists
            );
        }

        // return a sorted list of call orders

    }, {
        key: "getMarginPositions",
        value: function getMarginPositions() {
            var sortDirection = this.state.sortDirection;


            var sortFunctions = {
                name: function name(a, b) {
                    var nameA = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(a.borrower, false);
                    if (nameA) nameA = nameA.get("name");
                    var nameB = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(b.borrower, false);
                    if (nameB) nameB = nameB.get("name");
                    if (nameA > nameB) return sortDirection ? 1 : -1;
                    if (nameA < nameB) return sortDirection ? -1 : 1;
                    return 0;
                },
                price: function price(a, b) {
                    return (sortDirection ? 1 : -1) * (a.call_price.toReal() - b.call_price.toReal());
                },
                collateral: function collateral(a, b) {
                    return (sortDirection ? 1 : -1) * (b.collateral - a.collateral);
                },
                debt: function debt(a, b) {
                    return (sortDirection ? 1 : -1) * (b.debt - a.debt);
                },
                ratio: function ratio(a, b) {
                    return (sortDirection ? 1 : -1) * (a.getRatio() - b.getRatio());
                }
            };

            return this.state.callOrders.sort(sortFunctions[this.state.marginTableSort]);
        }
    }, {
        key: "getCollateralBids",
        value: function getCollateralBids(totalSupply) {
            var sortDirection = this.state.sortDirection;


            var sortFunctions = {
                name: function name(a, b) {
                    var nameA = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(a.bidder, false);
                    if (nameA) nameA = nameA.get("name");
                    var nameB = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(b.bidder, false);
                    if (nameB) nameB = nameB.get("name");
                    if (nameA > nameB) return sortDirection ? 1 : -1;
                    if (nameA < nameB) return sortDirection ? -1 : 1;
                    return 0;
                },
                price: function price(a, b) {
                    return (sortDirection ? 1 : -1) * (a.bid.toReal() - b.bid.toReal());
                },
                collateral: function collateral(a, b) {
                    return (sortDirection ? 1 : -1) * (b.collateral - a.collateral);
                },
                debt: function debt(a, b) {
                    return (sortDirection ? 1 : -1) * (b.debt - a.debt);
                },
                ratio: function ratio(a, b) {
                    return (!sortDirection ? 1 : -1) * (a.getRatio() - b.getRatio());
                }
            };

            return this.state.collateralBids.sort(sortFunctions[this.state.collateralTableSort]);
        }

        // the global settlement price is defined as the
        // the price at which the least collateralize short's
        // collateral no longer enough to back the debt
        // he/she owes.

    }, {
        key: "getGlobalSettlementPrice",
        value: function getGlobalSettlementPrice() {
            if (!this.state.callOrders) {
                return null;
            }

            // first get the least collateralized short position
            var leastColShort = null;
            var leastColShortRatio = null;
            var len = this.state.callOrders.length;
            for (var i = 0; i < len; i++) {
                var call_order = this.state.callOrders[i];

                if (leastColShort == null) {
                    leastColShort = call_order;
                    leastColShortRatio = call_order.getRatio();
                } else if (call_order.getRatio() < leastColShortRatio) {
                    leastColShortRatio = call_order.getRatio();
                    leastColShort = call_order;
                }
            }

            if (leastColShort == null) {
                // couldn't find the least colshort?
                return null;
            }

            // this price will happen when the CR is 1.
            // The CR is 1 if collateral / (debt x feed_ price) == 1
            // Rearranging, this means that the CR is 1 if
            // feed_price == collateral / debt
            var debt = leastColShort.debt;
            var collateral = leastColShort.collateral;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                base_amount: collateral,
                base_asset: leastColShort.call_price.base.asset_id,
                quote_amount: debt,
                quote_asset: leastColShort.call_price.quote.asset_id
            });
        }

        // return two tabs
        // one tab is for the price feed data from the
        // witness for the given asset
        // the other tab is a list of the margin positions
        // for this asset (if it's a bitasset)

    }, {
        key: "renderMarginPositions",
        value: function renderMarginPositions(asset, sortedCallOrders, sortedCollateralBids) {
            // first we compute the price feed tab
            var bitAsset = asset.bitasset;
            if (!("feeds" in bitAsset) || bitAsset.feeds.length == 0 || bitAsset.is_prediction_market) {
                return null;
            }

            var now = new Date().getTime();
            var oldestValidDate = new Date(now - asset.bitasset.options.feed_lifetime_sec * 1000);

            // Filter by valid feed lifetime, Sort by published date
            var feeds = bitAsset.feeds;
            feeds = feeds.filter(function (a) {
                return new Date(a[1][0]) > oldestValidDate;
            }).sort(function (feed1, feed2) {
                return new Date(feed2[1][0]) - new Date(feed1[1][0]);
            });

            if (!feeds.length) {
                return null;
            }

            var rows = [];
            var settlement_price_header = feeds[0][1][1].settlement_price;
            var core_exchange_rate_header = feeds[0][1][1].core_exchange_rate;
            var header = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "thead",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "left" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.publisher" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.settlement_price" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        "(",
                        this.formattedPrice(settlement_price_header, false, true),
                        ")"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        {
                            style: { textAlign: "right" },
                            className: "column-hide-small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.core_exchange_rate" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        "(",
                        this.formattedPrice(core_exchange_rate_header, false, true),
                        ")"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.maintenance_collateral_ratio" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.maximum_short_squeeze_ratio" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        {
                            style: { textAlign: "right" },
                            className: "column-hide-small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.published" })
                    )
                )
            );
            for (var i = 0; i < feeds.length; i++) {
                var feed = feeds[i];
                var publisher = feed[0];
                var publishDate = new Date(feed[1][0] + "Z");
                var settlement_price = feed[1][1].settlement_price;
                var core_exchange_rate = feed[1][1].core_exchange_rate;
                var maintenance_collateral_ratio = "" + feed[1][1].maintenance_collateral_ratio / 1000;
                var maximum_short_squeeze_ratio = "" + feed[1][1].maximum_short_squeeze_ratio / 1000;
                rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: publisher },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: publisher })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: { textAlign: "right" } },
                        this.formattedPrice(settlement_price, true)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { textAlign: "right" },
                            className: "column-hide-small"
                        },
                        this.formattedPrice(core_exchange_rate, true)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: { textAlign: "right" } },
                        maintenance_collateral_ratio
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: { textAlign: "right" } },
                        maximum_short_squeeze_ratio
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { textAlign: "right" },
                            className: "column-hide-small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_10__["default"], { time: publishDate })
                    )
                ));
            }

            var isGlobalSettlement = bitAsset.settlement_fund > 0 ? true : false;

            var secondRows = null;
            var secondHeader = null;
            if (isGlobalSettlement) {
                // collateral bids
                var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
                if (dynamic) {
                    dynamic = dynamic.toJS();
                    var currentSupply = dynamic ? dynamic.current_supply : 0;
                    this._analyzeBids(currentSupply);
                }
                secondHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                className: "clickable",
                                onClick: this._toggleSortOrder.bind(this, "name"),
                                style: { textAlign: "left" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.bidder" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                style: { textAlign: "right" },
                                className: "clickable column-hide-small",
                                onClick: this._toggleSortOrder.bind(this, "collateral")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.collateral" }),
                            sortedCollateralBids.length && " (",
                            sortedCollateralBids.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                amount: 1,
                                asset: sortedCollateralBids[0].bid.base.asset_id,
                                hide_amount: true
                            }),
                            sortedCollateralBids.length && ")"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                style: { textAlign: "right" },
                                className: "clickable",
                                onClick: this._toggleSortOrder.bind(this, "debt")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrow_amount" }),
                            sortedCollateralBids.length && " (",
                            sortedCollateralBids.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                amount: 1,
                                asset: sortedCollateralBids[0].bid.quote.asset_id,
                                hide_amount: true
                            }),
                            sortedCollateralBids.length && ")"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                style: { textAlign: "right" },
                                className: "clickable column-hide-small",
                                onClick: this._toggleSortOrder.bind(this, "price")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.bid" }),
                            sortedCollateralBids.length && " (",
                            sortedCollateralBids.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                base_amount: 1,
                                base_asset: sortedCollateralBids[0].bid.base.asset_id,
                                quote_amount: 1,
                                quote_asset: sortedCollateralBids[0].bid.quote.asset_id,
                                hide_value: true,
                                noPopOver: true
                            }),
                            sortedCollateralBids.length && ")"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                style: { textAlign: "right" },
                                className: "clickable column-hide-small",
                                onClick: this._toggleSortOrder.bind(this, "ratio")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.coll_ratio" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            { style: { textAlign: "right" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.considered_on_revival" })
                        )
                    )
                );

                secondRows = sortedCollateralBids.map(function (c) {
                    var included = "no";
                    if (!!c.consideredIfRevived) {
                        if (c.consideredIfRevived == 1) {
                            included = "yes";
                        } else if (c.consideredIfRevived == 2) {
                            included = "partially";
                        } else {
                            included = "no";
                        }
                    }
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { className: "margin-row", key: c.id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: c.bidder })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "right" },
                                className: "column-hide-small"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                amount: c.bid.base.amount,
                                asset: c.bid.base.asset_id,
                                hide_asset: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { style: { textAlign: "right" }, className: "" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                amount: c.bid.quote.amount,
                                asset: c.bid.quote.asset_id,
                                hide_asset: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "right", paddingRight: 10 },
                                className: "column-hide-small"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                base_amount: c.bid.base.amount,
                                base_asset: c.bid.base.asset_id,
                                quote_amount: c.bid.quote.amount,
                                quote_asset: c.bid.quote.asset_id,
                                hide_symbols: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "right" },
                                className: "column-hide-small"
                            },
                            c.getRatio().toFixed(3)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { style: { textAlign: "right" } },
                            included
                        )
                    );
                });
            } else {
                // margin positions
                secondHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                className: "clickable",
                                onClick: this._toggleSortOrder.bind(this, "name"),
                                style: { textAlign: "left" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrower" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                style: { textAlign: "right" },
                                className: "clickable column-hide-small",
                                onClick: this._toggleSortOrder.bind(this, "collateral")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.collateral" }),
                            this.state.callOrders.length && " (",
                            this.state.callOrders.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                amount: this.state.callOrders[0].getCollateral().getAmount(),
                                asset: this.state.callOrders[0].getCollateral().asset_id,
                                hide_amount: true
                            }),
                            this.state.callOrders.length && ")"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                style: { textAlign: "right" },
                                className: "clickable",
                                onClick: this._toggleSortOrder.bind(this, "debt")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrow_amount" }),
                            this.state.callOrders.length && " (",
                            this.state.callOrders.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                amount: this.state.callOrders[0].amountToReceive().getAmount(),
                                asset: this.state.callOrders[0].amountToReceive().asset_id,
                                hide_amount: true
                            }),
                            this.state.callOrders.length && ")"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                style: { textAlign: "right" },
                                className: "clickable  column-hide-small",
                                onClick: this._toggleSortOrder.bind(this, "price")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.call" }),
                            this.state.callOrders.length && " (",
                            this.state.callOrders.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                base_amount: this.state.callOrders[0].call_price.base.amount,
                                base_asset: this.state.callOrders[0].call_price.base.asset_id,
                                quote_amount: this.state.callOrders[0].call_price.quote.amount,
                                quote_asset: this.state.callOrders[0].call_price.quote.asset_id,
                                hide_value: true,
                                noPopOver: true
                            }),
                            this.state.callOrders.length && ")"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                style: { textAlign: "right" },
                                className: "column-hide-small"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.coll_ratio_target" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "th",
                            {
                                style: { textAlign: "right" },
                                className: "clickable",
                                onClick: this._toggleSortOrder.bind(this, "ratio")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.coll_ratio" })
                        )
                    )
                );

                secondRows = sortedCallOrders.map(function (c) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        { className: "margin-row", key: c.id },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: c.borrower })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "right" },
                                className: "column-hide-small"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                amount: c.collateral,
                                asset: c.getCollateral().asset_id,
                                hide_asset: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            { style: { textAlign: "right" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                amount: c.debt,
                                asset: c.amountToReceive().asset_id,
                                hide_asset: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "right", paddingRight: 10 },
                                className: "column-hide-small"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                base_amount: c.call_price.base.amount,
                                base_asset: c.call_price.base.asset_id,
                                quote_amount: c.call_price.quote.amount,
                                quote_asset: c.call_price.quote.asset_id,
                                hide_symbols: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                style: { textAlign: "right", paddingRight: 10 },
                                className: "column-hide-small"
                            },
                            !!c.order.target_collateral_ratio ? (c.order.target_collateral_ratio / 1000).toFixed(3) : "-"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            {
                                className: c.getStatus(),
                                style: { textAlign: "right" }
                            },
                            c.getRatio().toFixed(3)
                        )
                    );
                });
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block", style: { paddingBottom: "1rem" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content no-padding" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_25__["Tabs"],
                            {
                                defaultActiveTab: 0,
                                segmented: false,
                                setting: "bitassetDataTabs"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_25__["Tab"],
                                { title: "explorer.asset.price_feed_data.title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    {
                                        className: " table order-table table-hover",
                                        style: { padding: "1.2rem" }
                                    },
                                    header,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        rows
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_25__["Tab"],
                                {
                                    title: isGlobalSettlement ? "explorer.asset.collateral_bid.title" : "explorer.asset.margin_positions.title"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    {
                                        className: " table order-table table-hover",
                                        style: { padding: "1.2rem" }
                                    },
                                    secondHeader,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        secondRows
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset.toJS();
            var sortedCallOrders = this.getMarginPositions();
            var sortedCollateralBids = this.getCollateralBids();
            var priceFeed = "bitasset" in asset ? this.renderPriceFeed(asset) : null;
            var priceFeedData = "bitasset" in asset ? this.renderMarginPositions(asset, sortedCallOrders, sortedCollateralBids) : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-container asset-page" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block page-layout" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block main-content wrap" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "grid-block medium-up-1",
                                style: { width: "100%" }
                            },
                            this.renderAboutBox(asset, this.props.asset)
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_25__["Tabs"],
                            {
                                setting: "assetDataTabs",
                                className: "grid-block vertical",
                                tabsClass: "bordered-header content-block",
                                contentClass: "tab-no-background",
                                segmented: false
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_25__["Tab"],
                                { title: "explorer.asset.info" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "grid-block vertical large-horizontal medium-up-1 large-up-2",
                                        style: { paddingTop: "1rem" }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "grid-content small-no-padding" },
                                        this.renderSummary(asset)
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "grid-content small-no-padding" },
                                        this.renderPermissions(asset)
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "grid-content small-no-padding" },
                                        this.renderFeePool(asset)
                                    ),
                                    priceFeed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "grid-content small-no-padding" },
                                        this.renderPriceFeed(asset)
                                    ) : null,
                                    priceFeed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "grid-content small-no-padding" },
                                        this.renderSettlement(asset)
                                    ) : null,
                                    this.state.showCollateralBidInInfo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "grid-content small-no-padding" },
                                        this.renderCollateralBid(asset)
                                    ) : null
                                ),
                                priceFeedData ? priceFeedData : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_25__["Tab"],
                                { title: "explorer.asset.actions" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "grid-block vertical large-horizontal medium-up-1 large-up-2",
                                        style: { paddingTop: "1rem" }
                                    },
                                    this.renderFeePoolFunding(asset),
                                    this.renderFeePoolClaiming(asset),
                                    this.renderFeesClaiming(asset),
                                    this.renderAssetOwnerUpdate(asset),
                                    "bitasset" in asset && !asset.bitasset.is_prediction_market ? this.renderFeedPublish(asset) : null,
                                    sortedCollateralBids.length > 0 && this.renderCollateralBid(asset)
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Asset;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Asset = Object(alt_react__WEBPACK_IMPORTED_MODULE_21__["connect"])(Asset, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().passwordAccount
        };
    }
});

Asset = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__["default"])(Asset, {
    propNames: ["backingAsset"]
});

var AssetContainer = function (_React$Component4) {
    _inherits(AssetContainer, _React$Component4);

    function AssetContainer() {
        _classCallCheck(this, AssetContainer);

        return _possibleConstructorReturn(this, (AssetContainer.__proto__ || Object.getPrototypeOf(AssetContainer)).apply(this, arguments));
    }

    _createClass(AssetContainer, [{
        key: "render",
        value: function render() {
            if (this.props.asset === null) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_18__["default"], { subtitle: "asset_not_found_subtitle" });
            }
            var backingAsset = this.props.asset.has("bitasset") ? this.props.asset.getIn(["bitasset", "options", "short_backing_asset"]) : "1.3.0";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Asset, _extends({}, this.props, { backingAsset: backingAsset }));
        }
    }]);

    return AssetContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetContainer = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__["default"])(AssetContainer, {
    withDynamic: true
});

var AssetSymbolSplitter = function (_React$Component5) {
    _inherits(AssetSymbolSplitter, _React$Component5);

    function AssetSymbolSplitter() {
        _classCallCheck(this, AssetSymbolSplitter);

        return _possibleConstructorReturn(this, (AssetSymbolSplitter.__proto__ || Object.getPrototypeOf(AssetSymbolSplitter)).apply(this, arguments));
    }

    _createClass(AssetSymbolSplitter, [{
        key: "render",
        value: function render() {
            var symbol = this.props.match.params.symbol.toUpperCase();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetContainer, _extends({}, this.props, { asset: symbol }));
        }
    }]);

    return AssetSymbolSplitter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetSymbolSplitter);

/***/ }),

/***/ 3132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// a class to display time nicely when given seconds
// for example, display

// expects the number of seconds as a property

var FormattedTime = function (_React$Component) {
    _inherits(FormattedTime, _React$Component);

    function FormattedTime(props) {
        _classCallCheck(this, FormattedTime);

        var _this = _possibleConstructorReturn(this, (FormattedTime.__proto__ || Object.getPrototypeOf(FormattedTime)).call(this, props));

        _this.state = { time: props.time };
        return _this;
    }

    // given an integer seconds as an argument,
    // return the number of hours


    _createClass(FormattedTime, [{
        key: "getHours",
        value: function getHours(secs) {
            //console.log("get hours called with: " + secs);
            return secs / 3600;
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                this.getHours(this.state.time),
                "h"
            );
        }
    }]);

    return FormattedTime;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FormattedTime);

/***/ }),

/***/ 3133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(585);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2303);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2079);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2080);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2372);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2299);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(419);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var stateSetter = function stateSetter(that, key) {
    var transform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
        return value;
    };
    return function (value) {
        return that.setState(_defineProperty({}, key, transform(value)));
    };
};

var keyGetter = function keyGetter(key) {
    return function (object) {
        return object[key];
    };
};

var FeePoolOperation = function (_React$Component) {
    _inherits(FeePoolOperation, _React$Component);

    function FeePoolOperation(props) {
        _classCallCheck(this, FeePoolOperation);

        var _this = _possibleConstructorReturn(this, (FeePoolOperation.__proto__ || Object.getPrototypeOf(FeePoolOperation)).call(this, props));

        _this.onAccountNameChanged = stateSetter(_this, "funderAccountName");
        _this.onAccountChanged = stateSetter(_this, "newFunderAccount");
        _this.onPoolInput = stateSetter(_this, "fundPoolAmount", keyGetter("amount"));

        _this.onFundPool = function () {
            return actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].fundPool(_this.state.newFunderAccount ? _this.state.newFunderAccount.get("id") : null, _this.props.core, _this.props.asset, _this.state.fundPoolAmount.replace(/,/g, ""));
        };

        _this.reset = function () {
            _this.setState(_this.initialState());
        };

        _this.initialState = function () {
            return {
                funderAccountName: _this.props.funderAccountName,
                fundPoolAmount: 0,
                fundPoolAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                    amount: 0,
                    precision: _this.props.core.get("precision"),
                    asset_id: _this.props.core.get("id")
                }),
                claimPoolAmount: 0,
                claimPoolAmountAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                    amount: 0,
                    precision: _this.props.core.get("precision"),
                    asset_id: _this.props.core.get("id")
                }),
                claimFeesAmount: 0,
                claimFeesAmountAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                    amount: 0,
                    precision: _this.props.asset.get("precision"),
                    asset_id: _this.props.asset.get("id")
                })
            };
        };

        _this.onClaimPool = function () {
            return actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].claimPool(_this.props.asset, _this.state.claimPoolAmountAsset);
        };

        _this.state = _this.initialState();
        return _this;
    }

    _createClass(FeePoolOperation, [{
        key: "onClaimInput",
        value: function onClaimInput(key, _ref) {
            var amount = _ref.amount;

            this.state[key + "Asset"].setAmount({ real: amount });
            this.setState(_defineProperty({}, key, amount));
        }
    }, {
        key: "onClaimFees",
        value: function onClaimFees() {
            var account = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getAccount(this.props.funderAccountName);
            if (!account) return;
            actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].claimPoolFees(account.get("id"), this.props.asset, this.state.claimFeesAmountAsset);
        }
    }, {
        key: "renderFundPool",
        value: function renderFundPool() {
            var props = this.props,
                state = this.state,
                onPoolInput = this.onPoolInput,
                onFundPool = this.onFundPool,
                reset = this.reset,
                onAccountNameChanged = this.onAccountNameChanged,
                onAccountChanged = this.onAccountChanged;
            var asset = props.asset,
                core = props.core,
                hideBalance = props.hideBalance,
                getDynamicObject = props.getDynamicObject;
            var funderAccountName = state.funderAccountName,
                fundPoolAmount = state.fundPoolAmount,
                newFunderAccount = state.newFunderAccount;

            var dynamicObject = null;
            if (!hideBalance) dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));
            var coreID = core.get("id") || "1.3.0";
            var balance = 0;
            if (newFunderAccount) {
                var coreBalanceID = newFunderAccount.getIn(["balances", coreID]);
                if (coreBalanceID) {
                    var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getObject(coreBalanceID);
                    if (balanceObject) {
                        balance = balanceObject.get("balance");
                    }
                }
            }
            var balanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], { amount: balance, asset: coreID })
            );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                hideBalance || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: "1.5rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.pool_balance" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        ": "
                    ),
                    dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: dynamicObject.get("fee_pool"),
                        asset: coreID
                    }) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    label: "transaction.funding_account",
                    accountName: funderAccountName,
                    onChange: onAccountNameChanged,
                    onAccountChanged: onAccountChanged,
                    account: funderAccountName,
                    error: null,
                    tabIndex: 1
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    label: "transfer.amount",
                    display_balance: balanceText,
                    amount: fundPoolAmount,
                    onChange: onPoolInput,
                    asset: coreID,
                    assets: [coreID],
                    placeholder: "0.0",
                    tabIndex: 2,
                    style: { width: "100%", paddingTop: 16 }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
                                disabled: fundPoolAmount <= 0
                            }),
                            onClick: onFundPool
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_fund_fee_pool" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "button outline", onClick: reset },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }, {
        key: "renderClaimPool",
        value: function renderClaimPool() {
            var _this2 = this;

            var props = this.props,
                onClaimPool = this.onClaimPool,
                reset = this.reset;
            var claimPoolAmount = this.state.claimPoolAmount;
            var asset = props.asset,
                core = props.core,
                getDynamicObject = props.getDynamicObject;

            var dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));
            var coreID = core.get("id") || "1.3.0";

            var balanceText = !!dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    onClick: function onClick() {
                        _this2.state.claimPoolAmountAsset.setAmount({
                            sats: dynamicObject.get("fee_pool")
                        });
                        _this2.setState({
                            claimPoolAmount: _this2.state.claimPoolAmountAsset.getAmount({
                                real: true
                            })
                        });
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    amount: dynamicObject.get("fee_pool"),
                    asset: coreID
                })
            ) : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.fee_pool.claim_pool_text"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    label: "transfer.amount",
                    display_balance: balanceText,
                    amount: claimPoolAmount,
                    onChange: this.onClaimInput.bind(this, "claimPoolAmount"),
                    asset: coreID,
                    assets: [coreID],
                    placeholder: "0.0",
                    tabIndex: 2,
                    style: { width: "100%", paddingTop: 16 }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
                                disabled: claimPoolAmount <= 0
                            }),
                            onClick: onClaimPool
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_claim_fee_pool" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "button outline", onClick: reset },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }, {
        key: "renderClaimFees",
        value: function renderClaimFees() {
            var props = this.props;
            var claimFeesAmount = this.state.claimFeesAmount;
            var asset = props.asset,
                getDynamicObject = props.getDynamicObject;

            var dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));

            var unclaimedBalance = dynamicObject ? dynamicObject.get("accumulated_fees") : 0;
            var validClaim = claimFeesAmount > 0 && this.state.claimFeesAmountAsset.getAmount() <= unclaimedBalance;

            var unclaimedBalanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    amount: unclaimedBalance,
                    asset: asset.get("id")
                })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.fee_pool.claim_text",
                    asset: asset.get("symbol")
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: "1rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.unclaimed_issuer_income" }),
                    ":\xA0",
                    dynamicObject ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: dynamicObject.get("accumulated_fees"),
                        asset: asset.get("id")
                    }) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    label: "transfer.amount",
                    display_balance: unclaimedBalanceText,
                    amount: claimFeesAmount,
                    onChange: this.onClaimInput.bind(this, "claimFeesAmount"),
                    asset: asset.get("id"),
                    assets: [asset.get("id")],
                    placeholder: "0.0",
                    tabIndex: 1,
                    style: { width: "100%", paddingTop: 16 }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
                                disabled: !validClaim
                            }),
                            onClick: this.onClaimFees.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.claim_fees" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button outline",
                            onClick: this.reset.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.type === "fund") {
                return this.renderFundPool();
            } else if (this.props.type === "claim") {
                return this.renderClaimPool();
            } else if (this.props.type === "claim_fees") {
                return this.renderClaimFees();
            }
        }
    }]);

    return FeePoolOperation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FeePoolOperation.defaultProps = {
    type: "fund"
};


FeePoolOperation = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__["default"])(FeePoolOperation, {
    propNames: ["asset", "core"],
    defaultProps: {
        core: "1.3.0"
    },
    withDynamic: true
});

/* harmony default export */ __webpack_exports__["default"] = (FeePoolOperation);

/***/ }),

/***/ 3134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2303);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2372);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var AssetOwnerUpdate = function (_React$Component) {
    _inherits(AssetOwnerUpdate, _React$Component);

    function AssetOwnerUpdate() {
        _classCallCheck(this, AssetOwnerUpdate);

        var _this = _possibleConstructorReturn(this, (AssetOwnerUpdate.__proto__ || Object.getPrototypeOf(AssetOwnerUpdate)).call(this));

        _this.state = {
            new_issuer_account_id: null,
            issuer_account_name: null
        };
        return _this;
    }

    _createClass(AssetOwnerUpdate, [{
        key: "onAccountNameChanged",
        value: function onAccountNameChanged(key, name) {
            this.setState(_defineProperty({}, key, name));
        }
    }, {
        key: "onAccountChanged",
        value: function onAccountChanged(key, account) {
            this.setState(_defineProperty({}, key, account ? account.get("id") : null));
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            var _this2 = this;

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].updateOwner(this.props.asset, this.state.new_issuer_account_id).then(function () {
                _this2.onReset();
            });
        }
    }, {
        key: "onReset",
        value: function onReset() {
            this.setState({
                new_issuer_account_id: null,
                issuer_account_name: null
            });
        }
    }, {
        key: "render",
        value: function render() {
            var currentOwner = this.props.currentOwner;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingBottom: "1rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        label: "account.user_issued_assets.current_issuer",
                        accountName: currentOwner.get("name"),
                        account: currentOwner.get("name"),
                        error: null,
                        tabIndex: 1,
                        disabled: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    label: "account.user_issued_assets.new_issuer",
                    accountName: this.state.issuer_account_name,
                    onChange: this.onAccountNameChanged.bind(this, "issuer_account_name"),
                    onAccountChanged: this.onAccountChanged.bind(this, "new_issuer_account_id"),
                    account: this.state.issuer_account_name,
                    error: null,
                    tabIndex: 1,
                    typeahead: true,
                    excludeAccounts: [currentOwner.get("name")]
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("button", {
                                disabled: !this.state.new_issuer_account_id
                            }),
                            onClick: this.onSubmit.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.update_owner" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button outline",
                            onClick: this.onReset.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }]);

    return AssetOwnerUpdate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetOwnerUpdate.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    currentOwner: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};


AssetOwnerUpdate = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetOwnerUpdate);
/* harmony default export */ __webpack_exports__["default"] = (AssetOwnerUpdate);

/***/ }),

/***/ 3135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2303);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1955);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2372);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2299);
/* harmony import */ var _Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3136);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2079);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var AssetPublishFeed = function (_React$Component) {
    _inherits(AssetPublishFeed, _React$Component);

    function AssetPublishFeed(props) {
        _classCallCheck(this, AssetPublishFeed);

        var _this = _possibleConstructorReturn(this, (AssetPublishFeed.__proto__ || Object.getPrototypeOf(AssetPublishFeed)).call(this));

        _this.state = _this.resetState(props);
        return _this;
    }

    _createClass(AssetPublishFeed, [{
        key: "resetState",
        value: function resetState() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            var publisher_id = props.account.get("id");

            var currentFeed = props.asset.getIn(["bitasset", "current_feed"]);

            /* Might need to check these default values */
            var mcr = currentFeed.get("maintenance_collateral_ratio", 1750);
            var mssr = currentFeed.get("maximum_short_squeeze_ratio", 1100);

            return {
                publisher: props.account.get("name"),
                publisher_id: publisher_id,
                mcr: mcr,
                mcrValue: mcr / 1000,
                mssr: mssr,
                mssrValue: mssr / 1000
            };
        }
    }, {
        key: "onAccountNameChanged",
        value: function onAccountNameChanged(key, name) {
            this.setState(_defineProperty({}, key, name));
        }
    }, {
        key: "onAccountChanged",
        value: function onAccountChanged(key, account) {
            this.setState(_defineProperty({}, key, account ? account.get("id") : null));
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].publishFeed({
                publisher: this.state.publisher_id,
                asset_id: this.props.asset.get("id"),
                mcr: this.state.mcr,
                mssr: this.state.mssr,
                settlementPrice: this.state.settlementPrice,
                cer: this.state.cer
            });
            // .then(() => {
            //     this.setState(this.resetState());
            // });
        }
    }, {
        key: "onPriceChanged",
        value: function onPriceChanged(key, value) {
            this.setState(_defineProperty({}, key, value));
        }
    }, {
        key: "onSetRatio",
        value: function onSetRatio(key, _ref) {
            var _setState4;

            var amount = _ref.amount;

            /* Enforce one decimal point maximum */
            if (!!amount && typeof amount === "string" && amount.indexOf(".") !== -1 && amount.indexOf(".") + 4 !== amount.length) {
                amount = amount.substr(0, amount.indexOf(".") + 4);
            }
            this.setState((_setState4 = {}, _defineProperty(_setState4, key + "Value", amount), _defineProperty(_setState4, key, Math.floor(parseFloat(amount) * 1000)), _setState4));
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;
            var _state = this.state,
                mcrValue = _state.mcrValue,
                mssrValue = _state.mssrValue,
                publisher = _state.publisher;


            var base = asset.get("id");
            var quote = asset.getIn(["bitasset", "options", "short_backing_asset"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    label: "explorer.asset.feed_producer",
                    accountName: publisher,
                    onChange: this.onAccountNameChanged.bind(this, "publisher"),
                    onAccountChanged: this.onAccountChanged.bind(this, "publisher_id"),
                    account: publisher,
                    error: null,
                    tabIndex: 1,
                    typeahead: true
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    onPriceChanged: this.onPriceChanged.bind(this, "cer"),
                    label: "explorer.asset.fee_pool.core_exchange_rate",
                    quote: "1.3.0",
                    base: base
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    onPriceChanged: this.onPriceChanged.bind(this, "settlementPrice"),
                    label: "explorer.asset.price_feed.settlement_price",
                    quote: quote,
                    base: base
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    label: "explorer.asset.price_feed.maintenance_collateral_ratio",
                    amount: mcrValue,
                    onChange: this.onSetRatio.bind(this, "mcr"),
                    placeholder: "0.0",
                    style: {
                        width: "100%",
                        paddingRight: "10px"
                    }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    label: "explorer.asset.price_feed.maximum_short_squeeze_ratio",
                    amount: mssrValue,
                    onChange: this.onSetRatio.bind(this, "mssr"),
                    placeholder: "0.0",
                    style: {
                        width: "100%",
                        paddingRight: "10px"
                    }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("button", {
                                disabled: false
                            }),
                            onClick: this.onSubmit.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_publish_feed" })
                    )
                )
            );
        }
    }]);

    return AssetPublishFeed;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetPublishFeed.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};


AssetPublishFeed = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetPublishFeed);
AssetPublishFeed = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__["default"])(AssetPublishFeed);
/* harmony default export */ __webpack_exports__["default"] = (AssetPublishFeed);

/***/ }),

/***/ 3136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AmountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2079);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(585);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2299);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PriceInput = function (_React$Component) {
    _inherits(PriceInput, _React$Component);

    function PriceInput(props) {
        _classCallCheck(this, PriceInput);

        var _this = _possibleConstructorReturn(this, (PriceInput.__proto__ || Object.getPrototypeOf(PriceInput)).call(this));

        var quote = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__["Asset"]({
            amount: 0,
            asset_id: props.quote.get("id"),
            precision: props.quote.get("precision")
        });
        var base = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__["Asset"]({
            amount: 0,
            asset_id: props.base.get("id"),
            precision: props.base.get("precision")
        });

        var price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__["Price"]({
            quote: quote,
            base: base
        });

        _this.state = {
            price: price,
            realPriceValue: price.toReal()
        };
        return _this;
    }

    _createClass(PriceInput, [{
        key: "onPriceChanged",
        value: function onPriceChanged(_ref) {
            var amount = _ref.amount;

            this.state.price.setPriceFromReal(parseFloat(amount));
            this.setState({
                realPriceValue: amount
            });

            if (this.props.onPriceChanged) this.props.onPriceChanged(this.state.price.clone());
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                realPriceValue = _state.realPriceValue,
                price = _state.price;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AmountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
                label: this.props.label,
                amount: realPriceValue,
                onChange: this.onPriceChanged.bind(this),
                asset: price.base.asset_id,
                base: this.props.quote.get("symbol"),
                isPrice: true,
                assets: [price.quote.asset_id],
                placeholder: "0.0",
                tabIndex: 1,
                style: {
                    width: "100%",
                    paddingRight: "10px"
                }
            });
        }
    }]);

    return PriceInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PriceInput = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(PriceInput, {
    propNames: ["quote", "base"],
    defaultProps: {
        base: "1.3.0"
    }
});

/* harmony default export */ __webpack_exports__["default"] = (PriceInput);

/***/ }),

/***/ 3137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2420);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2079);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2080);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2372);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2299);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(419);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var BidCollateralOperation = function (_React$Component) {
    _inherits(BidCollateralOperation, _React$Component);

    function BidCollateralOperation(props) {
        _classCallCheck(this, BidCollateralOperation);

        var _this = _possibleConstructorReturn(this, (BidCollateralOperation.__proto__ || Object.getPrototypeOf(BidCollateralOperation)).call(this, props));

        _this.initialState = function () {
            return {
                account: bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAccount(_this.props.funderAccountName),
                collateralAmount: "0",
                debtAmount: "0"
            };
        };

        _this.state = _this.initialState();
        return _this;
    }

    _createClass(BidCollateralOperation, [{
        key: "reset",
        value: function reset() {
            this.setState(this.initialState());
        }
    }, {
        key: "_collateralBidInput",
        value: function _collateralBidInput(value) {
            this.setState({
                collateralAmount: value.amount
            });
        }
    }, {
        key: "_debtBidInput",
        value: function _debtBidInput(value) {
            this.setState({
                debtAmount: value.amount
            });
        }
    }, {
        key: "_onBidCollateral",
        value: function _onBidCollateral() {
            var _this2 = this;

            var _state = this.state,
                collateralAmount = _state.collateralAmount,
                debtAmount = _state.debtAmount;


            collateralAmount = collateralAmount == 0 ? collateralAmount : collateralAmount.replace(/,/g, "");
            debtAmount = debtAmount == 0 ? debtAmount : debtAmount.replace(/,/g, "");

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].bidCollateral(this.state.account ? this.state.account.get("id") : null, this.props.core, this.props.asset, collateralAmount, debtAmount);
            setTimeout(function () {
                _this2.props.onUpdate();
            }, 6000);
        }
    }, {
        key: "removeBid",
        value: function removeBid() {
            var _this3 = this;

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].bidCollateral(this.state.account ? this.state.account.get("id") : null, this.props.core, this.props.asset, 0, 0);
            setTimeout(function () {
                _this3.props.onUpdate();
            }, 6000);
        }
    }, {
        key: "renderCollateralBid",
        value: function renderCollateralBid() {
            var _props = this.props,
                asset = _props.asset,
                core = _props.core;
            var _state2 = this.state,
                account = _state2.account,
                collateralAmount = _state2.collateralAmount,
                debtAmount = _state2.debtAmount;


            var tabIndex = 1;
            var coreID = core.get("id") || "1.3.0";
            var balance = 0;
            var coreBalanceID = account ? account.getIn(["balances", coreID]) : null;
            if (coreBalanceID) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(coreBalanceID);
                if (balanceObject) {
                    balance = balanceObject.get("balance");
                }
            }

            var balanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: balance, asset: coreID })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    label: "transaction.collateral",
                    display_balance: balanceText,
                    amount: collateralAmount,
                    onChange: this._collateralBidInput.bind(this),
                    asset: coreID,
                    assets: [coreID],
                    placeholder: "0.0",
                    tabIndex: tabIndex++,
                    style: { width: "100%", paddingTop: 16 }
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    label: "transaction.borrow_amount",
                    amount: debtAmount,
                    onChange: this._debtBidInput.bind(this),
                    asset: asset.get("id"),
                    assets: [asset.get("id")],
                    placeholder: "0.0",
                    tabIndex: tabIndex++,
                    style: { width: "100%", paddingTop: 16 }
                }),
                this.state.collateralAmount !== "0" && this.state.debtAmount !== "0" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        style: {
                            paddingTop: "1rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral.bid_price" }),
                    "\xA0",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        base_amount: this.state.collateralAmount / 1,
                        base_asset: coreID,
                        quote_amount: this.state.debtAmount / 1,
                        quote_asset: asset.get("id"),
                        noPopOver: true,
                        ignorePriceFeed: true
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { paddingTop: "1rem" }, className: "button-group" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button"),
                            onClick: this._onBidCollateral.bind(this),
                            tabIndex: tabIndex++
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.bid_collateral" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button outline",
                            onClick: this.reset.bind(this),
                            tabIndex: tabIndex++
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.perm.reset" })
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return this.renderCollateralBid();
        }
    }]);

    return BidCollateralOperation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BidCollateralOperation = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__["default"])(BidCollateralOperation, {
    propNames: ["asset", "core"],
    defaultProps: {
        core: "1.3.0"
    },
    withDynamic: true
});

/* harmony default export */ __webpack_exports__["default"] = (BidCollateralOperation);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuYmQ0YjJmZDI0YmFiNzkxZGNlZDcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9Bc3NldEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQmxvY2tjaGFpbi9Bc3NldC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkVGltZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FjY291bnQvRmVlUG9vbE9wZXJhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRPd25lclVwZGF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRQdWJsaXNoRmVlZC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUHJpY2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQmlkQ29sbGF0ZXJhbE9wZXJhdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgQXNzZXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IHRydWUsXG4gICAgICAgIG1heFdpZHRoOiAyMFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGltZ0Vycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQgIT09IG5wLmFzc2V0IHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFdpZHRoICE9PSBucC5tYXhXaWR0aCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy53aGl0ZUxpc3QgIT09IG5wLndoaXRlTGlzdCB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWdFcnJvciAhPT0gbnMuaW1nRXJyb3JcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZU5vbmVUb0J0cylcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbXG4gICAgICAgICAgICAgICAgICAgIGltZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIF0uc3JjID0gYCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvYnRzLnBuZ2A7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKGFzc2V0KSB7XG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wgPT09IFwiT1BFTi5CVENcIiB8fCBzeW1ib2wgPT09IFwiR0RFWC5CVENcIikgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wuc3RhcnRzV2l0aChcIkVTQ1JPVy5cIikpIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAvLyBsZXQgaW1nTmFtZSA9IGFzc2V0LmdldChcInN5bWJvbFwiKS5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICAvL3JldHVybiBpbWdOYW1lLmxlbmd0aCA9PT0gMiA/IGltZ05hbWVbMV0gOiBpbWdOYW1lWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nTmFtZSA9IGdldEltYWdlTmFtZShhc3NldCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsIG1hcmdpblJpZ2h0OiA1fX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0SW1hZ2UgPSBBc3NldFdyYXBwZXIoQXNzZXRJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QXNzZXRJbWFnZSB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3RoaXMucHJvcHMubmFtZX0gLz47XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XG5pbXBvcnQgTGlua1RvQXNzZXRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0Fzc2V0QnlJZFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XG5pbXBvcnQgQXNzZXRJbWFnZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldEltYWdlXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSBcIi4uL1V0aWxpdHkvVGltZUFnb1wiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEZvcm1hdHRlZFRpbWUgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkVGltZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5pbXBvcnQge0NhbGxPcmRlciwgQ29sbGF0ZXJhbEJpZCwgRmVlZFByaWNlfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCBQYWdlNDA0IGZyb20gXCIuLi9QYWdlNDA0L1BhZ2U0MDRcIjtcbmltcG9ydCBGZWVQb29sT3BlcmF0aW9uIGZyb20gXCIuLi9BY2NvdW50L0ZlZVBvb2xPcGVyYXRpb25cIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEFzc2V0T3duZXJVcGRhdGUgZnJvbSBcIi4vQXNzZXRPd25lclVwZGF0ZVwiO1xuaW1wb3J0IEFzc2V0UHVibGlzaEZlZWQgZnJvbSBcIi4vQXNzZXRQdWJsaXNoRmVlZFwiO1xuaW1wb3J0IEJpZENvbGxhdGVyYWxPcGVyYXRpb24gZnJvbSBcIi4vQmlkQ29sbGF0ZXJhbE9wZXJhdGlvblwiO1xuaW1wb3J0IHtUYWIsIFRhYnN9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcblxuY2xhc3MgQXNzZXRGbGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aXNTZXQsIG5hbWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFpc1NldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFzc2V0LWZsYWdcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5cIiArIG5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBBc3NldFBlcm1pc3Npb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpc1NldCwgbmFtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghaXNTZXQpIHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhc3NldC1mbGFnXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMuXCIgKyBuYW1lfSAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIEFzc2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYWxsT3JkZXJzOiBbXSxcbiAgICAgICAgICAgIGNvbGxhdGVyYWxCaWRzOiBbXSxcbiAgICAgICAgICAgIG1hcmdpblRhYmxlU29ydDogXCJyYXRpb1wiLFxuICAgICAgICAgICAgY29sbGF0ZXJhbFRhYmxlU29ydDogXCJwcmljZVwiLFxuICAgICAgICAgICAgc29ydERpcmVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dDb2xsYXRlcmFsQmlkSW5JbmZvOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fZ2V0TWFyZ2luQ29sbGF0ZXJhbCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZU9uQ29sbGF0ZXJhbEJpZCgpIHtcbiAgICAgICAgdGhpcy5fZ2V0TWFyZ2luQ29sbGF0ZXJhbCgpO1xuICAgIH1cblxuICAgIF9nZXRNYXJnaW5Db2xsYXRlcmFsKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldC5oYXMoXCJiaXRhc3NldFwiKSkge1xuICAgICAgICAgICAgY29uc3QgYXNzZXRzID0ge1xuICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXTogdGhpcy5wcm9wcy5hc3NldC50b0pTKCksXG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYmFja2luZ0Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgKV06IHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0LnRvSlMoKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaXNQcmVkaWN0aW9uTWFya2V0ID0gdGhpcy5wcm9wcy5hc3NldC5nZXRJbihcbiAgICAgICAgICAgICAgICBbXCJiaXRhc3NldFwiLCBcImlzX3ByZWRpY3Rpb25fbWFya2V0XCJdLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgZmVlZFByaWNlID0gdGhpcy5fZ2V0RmVlZFByaWNlKCk7XG5cbiAgICAgICAgICAgIGlmICghIWZlZWRQcmljZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9jYWxsX29yZGVyc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjYWxsX29yZGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxPcmRlcnMgPSBjYWxsX29yZGVycy5tYXAoYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2FsbE9yZGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjYWxsT3JkZXJzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9jb2xsYXRlcmFsX2JpZHNcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjb2xsX29yZGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWxCaWRzID0gY29sbF9vcmRlcnMubWFwKGMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbGxhdGVyYWxCaWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxhdGVyYWxCaWRzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0X2NvbGxhdGVyYWxfYmlkcyBFcnJvcjogXCIsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXTogdGhpcy5wcm9wcy5hc3NldC50b0pTKCksXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC50b0pTKClcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFxuICAgICAgICAgICAgW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGxldCBzcXIgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFtcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiXG4gICAgICAgIF0pO1xuICAgICAgICBsZXQgc2V0dGxlUHJpY2UgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFtcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICBcInNldHRsZW1lbnRfcHJpY2VcIlxuICAgICAgICBdKTtcblxuICAgICAgICAvLyBpZiB0aGVyZSBoYXMgYmVlbiBubyBmZWVkIHByaWNlLCBzZXR0bGVQcmljZSBoYXMgMCBhbW91bnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2V0dGxlUHJpY2UuZ2V0SW4oW1wiYmFzZVwiLCBcImFtb3VudFwiXSkgPT0gMCAmJlxuICAgICAgICAgICAgc2V0dGxlUHJpY2UuZ2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0pID09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmZWVkUHJpY2U7XG5cbiAgICAgICAgLyogUHJlZGljdGlvbiBtYXJrZXRzIGRvbid0IG5lZWQgZmVlZHMgZm9yIHNob3J0aW5nLCBzbyB0aGUgc2V0dGxlbWVudCBwcmljZSBjYW4gYmUgc2V0IHRvIDE6MSAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXQgJiZcbiAgICAgICAgICAgIHNldHRsZVByaWNlLmdldEluKFtcImJhc2VcIiwgXCJhc3NldF9pZFwiXSkgPT09XG4gICAgICAgICAgICAgICAgc2V0dGxlUHJpY2UuZ2V0SW4oW1wicXVvdGVcIiwgXCJhc3NldF9pZFwiXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoIWFzc2V0c1t0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKV0pIHtcbiAgICAgICAgICAgICAgICBhc3NldHNbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFwiaWRcIildID0ge1xuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldHRsZVByaWNlID0gc2V0dGxlUHJpY2Uuc2V0SW4oW1wiYmFzZVwiLCBcImFtb3VudFwiXSwgMSk7XG4gICAgICAgICAgICBzZXR0bGVQcmljZSA9IHNldHRsZVByaWNlLnNldEluKFxuICAgICAgICAgICAgICAgIFtcImJhc2VcIiwgXCJhc3NldF9pZFwiXSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldHRsZVByaWNlID0gc2V0dGxlUHJpY2Uuc2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0sIDEpO1xuICAgICAgICAgICAgc2V0dGxlUHJpY2UgPSBzZXR0bGVQcmljZS5zZXRJbihcbiAgICAgICAgICAgICAgICBbXCJxdW90ZVwiLCBcImFzc2V0X2lkXCJdLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzcXIgPSAxMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2F0Y2ggSW52YWxpZCBTZXR0bGVQcmljZSBvYmplY3RcbiAgICAgICAgaWYgKHNldHRsZVByaWNlLnRvSlMpIHtcbiAgICAgICAgICAgIGxldCBzZXR0bGVPYmplY3QgPSBzZXR0bGVQcmljZS50b0pTKCk7XG4gICAgICAgICAgICBpZiAoIWFzc2V0c1tzZXR0bGVPYmplY3QuYmFzZS5hc3NldF9pZF0pIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZlZWRQcmljZSA9IG5ldyBGZWVkUHJpY2Uoe1xuICAgICAgICAgICAgcHJpY2VPYmplY3Q6IHNldHRsZVByaWNlLFxuICAgICAgICAgICAgbWFya2V0X2Jhc2U6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBzcXIsXG4gICAgICAgICAgICBhc3NldHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZlZWRQcmljZTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlU29ydE9yZGVyKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09IHRoaXMuc3RhdGUubWFyZ2luVGFibGVTb3J0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtYXJnaW5UYWJsZVNvcnQ6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbjogIXRoaXMuc3RhdGUuc29ydERpcmVjdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSAhPT0gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsVGFibGVTb3J0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsVGFibGVTb3J0OiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb246ICF0aGlzLnN0YXRlLnNvcnREaXJlY3Rpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2Fzc2V0VHlwZShhc3NldCkge1xuICAgICAgICByZXR1cm4gXCJiaXRhc3NldFwiIGluIGFzc2V0XG4gICAgICAgICAgICA/IGFzc2V0LmJpdGFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0XG4gICAgICAgICAgICAgICAgPyBcIlByZWRpY3Rpb25cIlxuICAgICAgICAgICAgICAgIDogXCJTbWFydFwiXG4gICAgICAgICAgICA6IFwiU2ltcGxlXCI7XG4gICAgfVxuXG4gICAgcmVuZGVyRmxhZ0luZGljYXRvcnMoZmxhZ3MsIG5hbWVzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtuYW1lcy5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRGbGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgZmxhZ18ke25hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2V0PXtmbGFnc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJQZXJtaXNzaW9uSW5kaWNhdG9ycyhwZXJtaXNzaW9ucywgbmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge25hbWVzLm1hcChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFBlcm1pc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BwZXJtXyR7bmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZXQ9e3Blcm1pc3Npb25zW25hbWVdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZvcm1hdHRlZFByaWNlKFxuICAgICAgICBwcmljZSxcbiAgICAgICAgaGlkZV9zeW1ib2xzID0gZmFsc2UsXG4gICAgICAgIGhpZGVfdmFsdWUgPSBmYWxzZSxcbiAgICAgICAgZmFjdG9yID0gMCxcbiAgICAgICAgbmVnYXRpdmVfaW52ZXJ0ID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgdmFyIGJhc2UgPSBwcmljZS5iYXNlO1xuICAgICAgICB2YXIgcXVvdGUgPSBwcmljZS5xdW90ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtiYXNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtiYXNlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17cXVvdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtxdW90ZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICBoaWRlX3ZhbHVlPXtoaWRlX3ZhbHVlfVxuICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9scz17aGlkZV9zeW1ib2xzfVxuICAgICAgICAgICAgICAgIGZhY3Rvcj17ZmFjdG9yfVxuICAgICAgICAgICAgICAgIG5lZ2F0aXZlX2ludmVydD17bmVnYXRpdmVfaW52ZXJ0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJBdXRob3JpdHlMaXN0KGF1dGhvcml0aWVzKSB7XG4gICAgICAgIHJldHVybiBhdXRob3JpdGllcy5tYXAoZnVuY3Rpb24oYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YXV0aG9yaXR5fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2F1dGhvcml0eX0gLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWFya2V0TGlzdChhc3NldCwgbWFya2V0cykge1xuICAgICAgICB2YXIgc3ltYm9sID0gYXNzZXQuc3ltYm9sO1xuICAgICAgICByZXR1cm4gbWFya2V0cy5tYXAoXG4gICAgICAgICAgICBmdW5jdGlvbihtYXJrZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFya2V0ID09IHN5bWJvbCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldElEID0gbWFya2V0ICsgXCJfXCIgKyBzeW1ib2w7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldE5hbWUgPSBtYXJrZXQgKyBcIi9cIiArIHN5bWJvbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e21hcmtldElEfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke21hcmtldElEfWB9PnttYXJrZXROYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckFib3V0Qm94KGFzc2V0LCBvcmlnaW5hbEFzc2V0KSB7XG4gICAgICAgIHZhciBpc3N1ZXIgPSBDaGFpblN0b3JlLmdldE9iamVjdChhc3NldC5pc3N1ZXIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHZhciBpc3N1ZXJOYW1lID0gaXNzdWVyID8gaXNzdWVyLmdldChcIm5hbWVcIikgOiBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCA8YSB0byBhbnkgbGlua3MgaW5jbHVkZWQgaW4gdGhlIGRlc2NyaXB0aW9uXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRlc2MgPSBkZXNjcmlwdGlvbi5tYWluO1xuICAgICAgICBsZXQgc2hvcnRfbmFtZSA9IGRlc2NyaXB0aW9uLnNob3J0X25hbWUgPyBkZXNjcmlwdGlvbi5zaG9ydF9uYW1lIDogbnVsbDtcblxuICAgICAgICBsZXQgdXJsVGVzdCA9IC8oaHR0cD8pOlxcL1xcLyh3d3dcXC4pP1thLXowLTlcXC46XS4qPyg/PVxccykvZztcblxuICAgICAgICAvLyBSZWdleHAgbmVlZHMgYSB3aGl0ZXNwYWNlIGFmdGVyIGEgdXJsLCBzbyBhZGQgb25lIHRvIG1ha2Ugc3VyZVxuICAgICAgICBkZXNjID0gZGVzYyAmJiBkZXNjLmxlbmd0aCA+IDAgPyBkZXNjICsgXCIgXCIgOiBkZXNjO1xuICAgICAgICBsZXQgdXJscyA9IGRlc2MubWF0Y2godXJsVGVzdCk7XG5cbiAgICAgICAgLy8gQWRkIG1hcmtldCBsaW5rXG4gICAgICAgIGNvbnN0IGNvcmVfYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFwiMS4zLjBcIik7XG4gICAgICAgIGxldCBwcmVmZXJyZWRNYXJrZXQgPSBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgID8gZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICA6IGNvcmVfYXNzZXRcbiAgICAgICAgICAgICAgICA/IGNvcmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgOiBcIkJUU1wiO1xuICAgICAgICBpZiAoXCJiaXRhc3NldFwiIGluIGFzc2V0ICYmIGFzc2V0LmJpdGFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0KSB7XG4gICAgICAgICAgICBwcmVmZXJyZWRNYXJrZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFxuICAgICAgICAgICAgICAgIGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChwcmVmZXJyZWRNYXJrZXQpIHtcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRNYXJrZXQgPSBwcmVmZXJyZWRNYXJrZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRNYXJrZXQgPSBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYXNzZXQuc3ltYm9sID09PSBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKSkgcHJlZmVycmVkTWFya2V0ID0gXCJVU0RcIjtcbiAgICAgICAgaWYgKHVybHMgJiYgdXJscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVybHMuZm9yRWFjaCh1cmwgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtYXJrZG93blVybCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cIiR7dXJsfVwiPiR7dXJsfTwvYT5gO1xuICAgICAgICAgICAgICAgIGRlc2MgPSBkZXNjLnJlcGxhY2UodXJsLCBtYXJrZG93blVybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7bmFtZSwgcHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKG9yaWdpbmFsQXNzZXQpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19PlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7c2hvcnRfbmFtZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDE1fX0+e3Nob3J0X25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBtYXJrZXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hcmtldC8ke2Fzc2V0LnN5bWJvbH1fJHtwcmVmZXJyZWRNYXJrZXR9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIHBhdGg9e1wiYXNzZXRzL1wiICsgYXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICBhbHRfcGF0aD1cImFzc2V0cy9Bc3NldFwiXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJzdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXsocHJlZml4IHx8IFwiXCIpICsgbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2N9XG4gICAgICAgICAgICAgICAgICAgIGlzc3Vlcj17aXNzdWVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaGlkZV9pc3N1ZXI9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyU3VtbWFyeShhc3NldCkge1xuICAgICAgICAvLyBUT0RPOiBjb25maWRlbnRpYWxfc3VwcGx5OiAwIFVTRCAgIFtJRiBOT1QgWkVSTyBPUiBOT1QgRElTQUJMRSBDT05GSURFTlRJQUxdXG4gICAgICAgIGxldCBkeW5hbWljID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KGFzc2V0LmR5bmFtaWNfYXNzZXRfZGF0YV9pZCk7XG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXNzZXQub3B0aW9ucztcblxuICAgICAgICBsZXQgZmxhZ0Jvb2xlYW5zID0gYXNzZXRVdGlscy5nZXRGbGFnQm9vbGVhbnMoXG4gICAgICAgICAgICBhc3NldC5vcHRpb25zLmZsYWdzLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5oYXMoXCJiaXRhc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGJpdE5hbWVzID0gT2JqZWN0LmtleXMoZmxhZ0Jvb2xlYW5zKTtcblxuICAgICAgICB2YXIgY3VycmVudFN1cHBseSA9IGR5bmFtaWMgPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LmN1cnJlbnRfc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWMuY3VycmVudF9zdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHZhciBzdGVhbHRoU3VwcGx5ID0gZHluYW1pYyA/IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuc3RlYWx0aF9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pYy5jb25maWRlbnRpYWxfc3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICB2YXIgbWFya2V0RmVlID0gZmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5Lm1hcmtldF9mZWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7b3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgLyAxMDAuMH0gJSA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgLy8gb3B0aW9ucy5tYXhfbWFya2V0X2ZlZSBpbml0aWFsbHkgYSBzdHJpbmdcbiAgICAgICAgdmFyIG1heE1hcmtldEZlZSA9IGZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdID8gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXhfbWFya2V0X2ZlZVwiIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXsrb3B0aW9ucy5tYXhfbWFya2V0X2ZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXthc3NldC5zeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LmFzc2V0X3R5cGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7dGhpcy5fYXNzZXRUeXBlKGFzc2V0KX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5Lmlzc3VlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXthc3NldC5pc3N1ZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMucHJlY2lzaW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge2Fzc2V0LnByZWNpc2lvbn0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXQuYml0YXNzZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMuYmFja2luZ19hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9Bc3NldEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG9ydF9iYWNraW5nX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFN1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVhbHRoU3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldEZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXhNYXJrZXRGZWV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGbGFnSW5kaWNhdG9ycyhmbGFnQm9vbGVhbnMsIGJpdE5hbWVzKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlclByaWNlRmVlZChhc3NldCkge1xuICAgICAgICB2YXIgdGl0bGUgPSA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLnRpdGxlXCIgLz47XG4gICAgICAgIHZhciBiaXRBc3NldCA9IGFzc2V0LmJpdGFzc2V0O1xuICAgICAgICBpZiAoIShcImN1cnJlbnRfZmVlZFwiIGluIGJpdEFzc2V0KSkgcmV0dXJuIDxkaXYgaGVhZGVyPXt0aXRsZX0gLz47XG4gICAgICAgIHZhciBjdXJyZW50RmVlZCA9IGJpdEFzc2V0LmN1cnJlbnRfZmVlZDtcbiAgICAgICAgdmFyIGZlZWRQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoY3VycmVudEZlZWQuc2V0dGxlbWVudF9wcmljZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj57dGl0bGV9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjEuMnJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZXh0ZXJuYWxfZmVlZF9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZlZWRQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZmVlZF9saWZldGltZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiaXRBc3NldC5vcHRpb25zLmZlZWRfbGlmZXRpbWVfc2VjIC8gNjAgLyA2MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWluX2ZlZWRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Yml0QXNzZXQub3B0aW9ucy5taW5pbXVtX2ZlZWRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRGZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvIC8gMTAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2FuYWx5emVCaWRzKHNldHRsZW1lbnRfZnVuZF9kZWJ0KSB7XG4gICAgICAgIC8vIENvbnZlcnQgc3VwcGx5IHRvIGNhbGN1bGFibGUgdmFsdWVzXG4gICAgICAgIGxldCBjdXJyZW50X3N1cHBseV92YWx1ZSA9IHNldHRsZW1lbnRfZnVuZF9kZWJ0O1xuXG4gICAgICAgIGxldCBiaWRzX2NvbGxhdGVyYWxfdmFsdWUgPSAwO1xuICAgICAgICBsZXQgYmlkc19kZWJ0X3ZhbHVlID0gMDtcblxuICAgICAgICBsZXQgc29ydGVkX2JpZHMgPSB0aGlzLnN0YXRlLmNvbGxhdGVyYWxCaWRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiLmJpZC50b1JlYWwoKSAtIGEuYmlkLnRvUmVhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb3J0ZWRfYmlkcy5mb3JFYWNoKGJpZCA9PiB7XG4gICAgICAgICAgICBsZXQgY29sbGF0ZXJhbCA9IGJpZC5jb2xsYXRlcmFsO1xuICAgICAgICAgICAgbGV0IGRlYnQgPSBiaWQuZGVidDtcbiAgICAgICAgICAgIGlmIChiaWRzX2RlYnRfdmFsdWUgPCBjdXJyZW50X3N1cHBseV92YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChiaWRzX2RlYnRfdmFsdWUgKyBkZWJ0ID49IGN1cnJlbnRfc3VwcGx5X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnQgPSBjdXJyZW50X3N1cHBseV92YWx1ZSAtIGJpZHNfZGVidF92YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbCA9IChkZWJ0IC8gYmlkLmRlYnQpICogY29sbGF0ZXJhbDtcbiAgICAgICAgICAgICAgICAgICAgYmlkLmNvbnNpZGVyZWRJZlJldml2ZWQgPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZC5jb25zaWRlcmVkSWZSZXZpdmVkID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmlkc19jb2xsYXRlcmFsX3ZhbHVlID0gYmlkc19jb2xsYXRlcmFsX3ZhbHVlICsgY29sbGF0ZXJhbDtcbiAgICAgICAgICAgICAgICBiaWRzX2RlYnRfdmFsdWUgPSBiaWRzX2RlYnRfdmFsdWUgKyBkZWJ0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaWQuY29uc2lkZXJlZElmUmV2aXZlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xsYXRlcmFsOiBiaWRzX2NvbGxhdGVyYWxfdmFsdWUsXG4gICAgICAgICAgICBkZWJ0OiBiaWRzX2RlYnRfdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXJTZXR0bGVtZW50KGFzc2V0KSB7XG4gICAgICAgIHZhciB0aXRsZSA9IDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQudGl0bGVcIiAvPjtcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XG4gICAgICAgIGlmICghKFwiY3VycmVudF9mZWVkXCIgaW4gYml0QXNzZXQpKSByZXR1cm4gPGRpdiBoZWFkZXI9e3RpdGxlfSAvPjtcblxuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xuICAgICAgICBpZiAoZHluYW1pYykgZHluYW1pYyA9IGR5bmFtaWMudG9KUygpO1xuICAgICAgICB2YXIgY3VycmVudFN1cHBseSA9IGR5bmFtaWMgPyBkeW5hbWljLmN1cnJlbnRfc3VwcGx5IDogMDtcblxuICAgICAgICB2YXIgY3VycmVudEZlZWQgPSBiaXRBc3NldC5jdXJyZW50X2ZlZWQ7XG4gICAgICAgIHZhciBpc0dsb2JhbFNldHRsZSA9IGFzc2V0LmJpdGFzc2V0LnNldHRsZW1lbnRfZnVuZCA+IDAgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IHNldHRsZW1lbnRfZnVuZF9jb2xsYXRlcmFsX3JhdGlvID0gbnVsbDtcbiAgICAgICAgbGV0IHRvdGFsX2NvbGxhdGVyYWxfcmF0aW8gPSBudWxsO1xuICAgICAgICBsZXQgcmV2aXZlX3ByaWNlX3dpdGhfYmlkcyA9IG51bGw7XG5cbiAgICAgICAgaWYgKGlzR2xvYmFsU2V0dGxlKSB7XG4gICAgICAgICAgICAvKioqXG4gICAgICAgICAgICAgKiBHbG9iYWwgU2V0dGxlZCBBc3NldHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnRGdW5kID0gYml0QXNzZXQuc2V0dGxlbWVudF9mdW5kO1xuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnRQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgYml0QXNzZXQuc2V0dGxlbWVudF9wcmljZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciByZXZpdmVQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgYml0QXNzZXQuc2V0dGxlbWVudF9wcmljZSxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMCxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSB7XG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmFzc2V0LnRvSlMoKSxcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICApXTogdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQudG9KUygpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IGZlZWRQcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHN1cHBseSB0byBjYWxjdWxhYmxlIHZhbHVlc1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfc3VwcGx5X3ZhbHVlID0gY3VycmVudFN1cHBseTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgPSBiaXRBc3NldC5zZXR0bGVtZW50X2Z1bmQ7XG5cbiAgICAgICAgICAgIGxldCBiaWRzID0gdGhpcy5fYW5hbHl6ZUJpZHMoY3VycmVudF9zdXBwbHlfdmFsdWUpO1xuXG4gICAgICAgICAgICByZXZpdmVfcHJpY2Vfd2l0aF9iaWRzID0gKFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17Yml0QXNzZXQuc2V0dGxlbWVudF9mdW5kIC8gMSArIGJpZHMuY29sbGF0ZXJhbH0gLy8gLzEgaXMgaW1wbGljaXQgdHlwZSBjb252ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2Fzc2V0c1tiaXRBc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRdLmlkfVxuICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e2JpZHMuZGVidH1cbiAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICBoaWRlX3ZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgZmFjdG9yPXtjdXJyZW50RmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMH1cbiAgICAgICAgICAgICAgICAgICAgbmVnYXRpdmVfaW52ZXJ0PXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50X3N1cHBseV92YWx1ZSA9XG4gICAgICAgICAgICAgICAgY3VycmVudF9zdXBwbHlfdmFsdWUgLyBNYXRoLnBvdygxMCwgYXNzZXQucHJlY2lzaW9uKTtcbiAgICAgICAgICAgIGN1cnJlbnRfY29sbGF0ZXJhbF92YWx1ZSA9XG4gICAgICAgICAgICAgICAgY3VycmVudF9jb2xsYXRlcmFsX3ZhbHVlIC9cbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhcbiAgICAgICAgICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0c1tiaXRBc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRdLnByZWNpc2lvblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXR0bGVtZW50X2Z1bmRfY29sbGF0ZXJhbF9yYXRpbyA9XG4gICAgICAgICAgICAgICAgY3VycmVudF9jb2xsYXRlcmFsX3ZhbHVlIC9cbiAgICAgICAgICAgICAgICBmZWVkUHJpY2UudG9SZWFsKCkgL1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfc3VwcGx5X3ZhbHVlO1xuXG4gICAgICAgICAgICBsZXQgYmlkc19jb2xsYXRlcmFsID1cbiAgICAgICAgICAgICAgICBiaWRzLmNvbGxhdGVyYWwgL1xuICAgICAgICAgICAgICAgIE1hdGgucG93KFxuICAgICAgICAgICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzW2JpdEFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldF0ucHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvdGFsX2NvbGxhdGVyYWxfcmF0aW8gPVxuICAgICAgICAgICAgICAgIChjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgKyBiaWRzX2NvbGxhdGVyYWwpIC9cbiAgICAgICAgICAgICAgICBmZWVkUHJpY2UudG9SZWFsKCkgL1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfc3VwcGx5X3ZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqKlxuICAgICAgICAgICAgICogTm9uIEdsb2JhbCBTZXR0bGVtZW50IEFzc2V0c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgZ2xvYmFsU2V0dGxlbWVudFByaWNlID0gdGhpcy5nZXRHbG9iYWxTZXR0bGVtZW50UHJpY2UoKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2V0dGxlZCA9IGJpdEFzc2V0LmZvcmNlX3NldHRsZWRfdm9sdW1lO1xuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnRPZmZzZXQgPVxuICAgICAgICAgICAgICAgIGJpdEFzc2V0Lm9wdGlvbnMuZm9yY2Vfc2V0dGxlbWVudF9vZmZzZXRfcGVyY2VudDtcbiAgICAgICAgICAgIHZhciBzZXR0bGVtZW50RGVsYXkgPSBiaXRBc3NldC5vcHRpb25zLmZvcmNlX3NldHRsZW1lbnRfZGVsYXlfc2VjO1xuICAgICAgICAgICAgdmFyIG1heFNldHRsZW1lbnRWb2x1bWUgPVxuICAgICAgICAgICAgICAgIGJpdEFzc2V0Lm9wdGlvbnMubWF4aW11bV9mb3JjZV9zZXR0bGVtZW50X3ZvbHVtZTtcblxuICAgICAgICAgICAgdmFyIG1zc3BQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEZlZWQuc2V0dGxlbWVudF9wcmljZSxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gLyAxMDAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIHNldHRsZVByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RmVlZC5zZXR0bGVtZW50X3ByaWNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIDEgLSBzZXR0bGVtZW50T2Zmc2V0IC8gMTAwMDBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1jYXJkIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGl2aWRlclwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICB7aXNHbG9iYWxTZXR0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpc0dsb2JhbFNldHRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19yZXZpdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19zZWVfYWN0aW9uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAsICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19vclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xsYXRlcmFsQmlkSW5JbmZvOiAhdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93Q29sbGF0ZXJhbEJpZEluSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfcGxhY2VfYmlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXNHbG9iYWxTZXR0bGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZW1lbnRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3NldHRsZW1lbnRQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZW1lbnRfZnVuZHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdEFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3NldHRsZW1lbnRGdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5zZXR0bGVtZW50X2Z1bmRzX2NvbGxhdGVyYWxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGxlbWVudF9mdW5kX2NvbGxhdGVyYWxfcmF0aW8udG9GaXhlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfcmV2ZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX2F1dG9fcmV2aXZlX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jldml2ZVByaWNlfSAvIHtyZXZpdmVfcHJpY2Vfd2l0aF9iaWRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfY29sbGF0ZXJhbF92YWx1YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1jcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0b3RhbF9jb2xsYXRlcmFsX3JhdGlvLnRvRml4ZWQoNil9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttc3NwUHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5nbG9iYWxfc2V0dGxlbWVudF9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxTZXR0bGVtZW50UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGdsb2JhbFNldHRsZW1lbnRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5mb3JjZV9zZXR0bGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyAoe3NldHRsZW1lbnRPZmZzZXQgLyAxMDB9JXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQub2Zmc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzZXR0bGVQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmRlbGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFRpbWUgdGltZT17c2V0dGxlbWVudERlbGF5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50Lm1heF9zZXR0bGVfdm9sdW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXhTZXR0bGVtZW50Vm9sdW1lIC8gMTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdXBwbHkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF4U2V0dGxlbWVudFZvbHVtZSAvIDEwMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuY3VycmVudF9zZXR0bGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y3VycmVudFNldHRsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZV9yZW1haW5pbmdfdm9sdW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZXR0bGVkID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFNldHRsZWQgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRTdXBwbHkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXhTZXR0bGVtZW50Vm9sdW1lIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDApKSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZlZVBvb2woYXNzZXQpIHtcbiAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkKTtcbiAgICAgICAgaWYgKGR5bmFtaWMpIGR5bmFtaWMgPSBkeW5hbWljLnRvSlMoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhc3NldC5vcHRpb25zO1xuICAgICAgICBjb25zdCBjb3JlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcIjEuMy4wXCIpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmQgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHs8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC50aXRsZVwiIC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5wb29sX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICB1bnNhZmVcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgY29yZT17Y29yZS5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjEuMnJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdHRlZFByaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnBvb2xfYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmZlZV9wb29sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC51bmNsYWltZWRfaXNzdWVyX2luY29tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pYy5hY2N1bXVsYXRlZF9mZWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckFzc2V0T3duZXJVcGRhdGUoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvd1k6IFwidmlzaWJsZVwifX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmQgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMudXBkYXRlX293bmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnVwZGF0ZV9vd25lcl90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxBc3NldE93bmVyVXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE93bmVyPXthc3NldC5pc3N1ZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVkUHVibGlzaChhc3NldCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC1uby1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93WTogXCJ2aXNpYmxlXCJ9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9wdWJsaXNoX2ZlZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlZF9wcm9kdWNlcl90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0UHVibGlzaEZlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3duZXI9e2Fzc2V0Lmlzc3Vlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckNvbGxhdGVyYWxCaWQoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmQgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbC5iaWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbC5iaWRfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfaW5jbHVkZWRfb25fcmV2aXZhbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbC5yZW1vdmVfYmlkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8QmlkQ29sbGF0ZXJhbE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmRlckFjY291bnROYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e3RoaXMudXBkYXRlT25Db2xsYXRlcmFsQmlkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlUG9vbEZ1bmRpbmcoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmQgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuZnVuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5mdW5kX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZlZVBvb2xPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5kZXJBY2NvdW50TmFtZT17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVQb29sQ2xhaW1pbmcoYXNzZXQpIHtcbiAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkKTtcbiAgICAgICAgaWYgKGR5bmFtaWMpIGR5bmFtaWMgPSBkeW5hbWljLnRvSlMoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmQgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY2xhaW1fYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RmVlUG9vbE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmRlckFjY291bnROYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pYz17ZHluYW1pY31cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2xhaW1cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlc0NsYWltaW5nKGFzc2V0KSB7XG4gICAgICAgIGxldCBkeW5hbWljID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KGFzc2V0LmR5bmFtaWNfYXNzZXRfZGF0YV9pZCk7XG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC1uby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1jYXJkIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X2NsYWltX2ZlZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZlZVBvb2xPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljPXtkeW5hbWljfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNsYWltX2ZlZXNcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogQmxhY2tsaXN0IEF1dGhvcml0aWVzOiA8QWNjb3VudCBsaXN0IGxpa2UgVm90aW5nPlxuICAgIC8vIFRPRE86IEJsYWNrbGlzdCBNYXJrZXQ6IEJhc2UvTWFya2V0LCBCYXNlL01hcmtldFxuICAgIHJlbmRlclBlcm1pc3Npb25zKGFzc2V0KSB7XG4gICAgICAgIC8vdmFyIGR5bmFtaWMgPSBhc3NldC5keW5hbWljO1xuXG4gICAgICAgIHZhciBvcHRpb25zID0gYXNzZXQub3B0aW9ucztcblxuICAgICAgICBsZXQgcGVybWlzc2lvbkJvb2xlYW5zID0gYXNzZXRVdGlscy5nZXRGbGFnQm9vbGVhbnMoXG4gICAgICAgICAgICBhc3NldC5vcHRpb25zLmlzc3Vlcl9wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuaGFzKFwiYml0YXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBiaXROYW1lcyA9IE9iamVjdC5rZXlzKHBlcm1pc3Npb25Cb29sZWFucyk7XG5cbiAgICAgICAgLy8gb3B0aW9ucy5ibGFja2xpc3RfYXV0aG9yaXRpZXMgPSBbXCIxLjIuM1wiLCBcIjEuMi40XCJdO1xuICAgICAgICAvLyBvcHRpb25zLndoaXRlbGlzdF9hdXRob3JpdGllcyA9IFtcIjEuMi4xXCIsIFwiMS4yLjJcIl07XG4gICAgICAgIC8vIG9wdGlvbnMuYmxhY2tsaXN0X21hcmtldHMgPSBbXCJKUFlcIiwgXCJSVUJcIl07XG4gICAgICAgIC8vIG9wdGlvbnMud2hpdGVsaXN0X21hcmtldHMgPSBbXCJVU0RcIiwgXCJFVVJcIiwgXCJHT0xEXCJdO1xuXG4gICAgICAgIC8vIG9wdGlvbnMubWF4X21hcmtldF9mZWUgaW5pdGlhbGx5IGEgc3RyaW5nXG4gICAgICAgIHZhciBtYXhNYXJrZXRGZWUgPSBwZXJtaXNzaW9uQm9vbGVhbnNbXCJjaGFyZ2VfbWFya2V0X2ZlZVwiXSA/IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLm1heF9tYXJrZXRfZmVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9eytvcHRpb25zLm1heF9tYXJrZXRfZmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICAvLyBvcHRpb25zLm1heF9zdXBwbHkgaW5pdGlhbGx5IGEgc3RyaW5nXG4gICAgICAgIHZhciBtYXhTdXBwbHkgPSAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5tYXhfc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9eytvcHRpb25zLm1heF9zdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG5cbiAgICAgICAgdmFyIHdoaXRlTGlzdHMgPSBwZXJtaXNzaW9uQm9vbGVhbnNbXCJ3aGl0ZV9saXN0XCJdID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7ISFvcHRpb25zLmJsYWNrbGlzdF9hdXRob3JpdGllcyAmJlxuICAgICAgICAgICAgICAgICAgICAhIW9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckF1dGhvcml0eUxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyEhb3B0aW9ucy5ibGFja2xpc3RfbWFya2V0cyAmJlxuICAgICAgICAgICAgICAgICAgICAhIW9wdGlvbnMuYmxhY2tsaXN0X21hcmtldHMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5ibGFja2xpc3RfbWFya2V0c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNYXJrZXRMaXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ibGFja2xpc3RfbWFya2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshIW9wdGlvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzICYmXG4gICAgICAgICAgICAgICAgICAgICEhb3B0aW9ucy53aGl0ZWxpc3RfYXV0aG9yaXRpZXMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy53aGl0ZWxpc3RfYXV0aG9yaXRpZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXV0aG9yaXR5TGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy53aGl0ZWxpc3RfYXV0aG9yaXRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ISFvcHRpb25zLndoaXRlbGlzdF9tYXJrZXRzICYmXG4gICAgICAgICAgICAgICAgICAgICEhb3B0aW9ucy53aGl0ZWxpc3RfbWFya2V0cy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLndoaXRlbGlzdF9tYXJrZXRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1hcmtldExpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLndoaXRlbGlzdF9tYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgezxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLnRpdGxlXCIgLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWF4TWFya2V0RmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAge21heFN1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGVybWlzc2lvbkluZGljYXRvcnMocGVybWlzc2lvbkJvb2xlYW5zLCBiaXROYW1lcyl9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICB7d2hpdGVMaXN0c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBhIHNvcnRlZCBsaXN0IG9mIGNhbGwgb3JkZXJzXG4gICAgZ2V0TWFyZ2luUG9zaXRpb25zKCkge1xuICAgICAgICBjb25zdCB7c29ydERpcmVjdGlvbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBzb3J0RnVuY3Rpb25zID0ge1xuICAgICAgICAgICAgbmFtZTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIGxldCBuYW1lQSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChhLmJvcnJvd2VyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVBKSBuYW1lQSA9IG5hbWVBLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWVCID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGIuYm9ycm93ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZUIpIG5hbWVCID0gbmFtZUIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikgcmV0dXJuIHNvcnREaXJlY3Rpb24gPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHJldHVybiBzb3J0RGlyZWN0aW9uID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgKHNvcnREaXJlY3Rpb24gPyAxIDogLTEpICpcbiAgICAgICAgICAgICAgICAgICAgKGEuY2FsbF9wcmljZS50b1JlYWwoKSAtIGIuY2FsbF9wcmljZS50b1JlYWwoKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNvcnREaXJlY3Rpb24gPyAxIDogLTEpICogKGIuY29sbGF0ZXJhbCAtIGEuY29sbGF0ZXJhbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVidDogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoc29ydERpcmVjdGlvbiA/IDEgOiAtMSkgKiAoYi5kZWJ0IC0gYS5kZWJ0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYXRpbzogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoc29ydERpcmVjdGlvbiA/IDEgOiAtMSkgKiAoYS5nZXRSYXRpbygpIC0gYi5nZXRSYXRpbygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jYWxsT3JkZXJzLnNvcnQoXG4gICAgICAgICAgICBzb3J0RnVuY3Rpb25zW3RoaXMuc3RhdGUubWFyZ2luVGFibGVTb3J0XVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldENvbGxhdGVyYWxCaWRzKHRvdGFsU3VwcGx5KSB7XG4gICAgICAgIGNvbnN0IHtzb3J0RGlyZWN0aW9ufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHNvcnRGdW5jdGlvbnMgPSB7XG4gICAgICAgICAgICBuYW1lOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWVBID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEuYmlkZGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVBKSBuYW1lQSA9IG5hbWVBLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWVCID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGIuYmlkZGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVCKSBuYW1lQiA9IG5hbWVCLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHJldHVybiBzb3J0RGlyZWN0aW9uID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSByZXR1cm4gc29ydERpcmVjdGlvbiA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIChzb3J0RGlyZWN0aW9uID8gMSA6IC0xKSAqIChhLmJpZC50b1JlYWwoKSAtIGIuYmlkLnRvUmVhbCgpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sbGF0ZXJhbDogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoc29ydERpcmVjdGlvbiA/IDEgOiAtMSkgKiAoYi5jb2xsYXRlcmFsIC0gYS5jb2xsYXRlcmFsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWJ0OiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChzb3J0RGlyZWN0aW9uID8gMSA6IC0xKSAqIChiLmRlYnQgLSBhLmRlYnQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhdGlvOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgKCFzb3J0RGlyZWN0aW9uID8gMSA6IC0xKSAqIChhLmdldFJhdGlvKCkgLSBiLmdldFJhdGlvKCkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsQmlkcy5zb3J0KFxuICAgICAgICAgICAgc29ydEZ1bmN0aW9uc1t0aGlzLnN0YXRlLmNvbGxhdGVyYWxUYWJsZVNvcnRdXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gdGhlIGdsb2JhbCBzZXR0bGVtZW50IHByaWNlIGlzIGRlZmluZWQgYXMgdGhlXG4gICAgLy8gdGhlIHByaWNlIGF0IHdoaWNoIHRoZSBsZWFzdCBjb2xsYXRlcmFsaXplIHNob3J0J3NcbiAgICAvLyBjb2xsYXRlcmFsIG5vIGxvbmdlciBlbm91Z2ggdG8gYmFjayB0aGUgZGVidFxuICAgIC8vIGhlL3NoZSBvd2VzLlxuICAgIGdldEdsb2JhbFNldHRsZW1lbnRQcmljZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNhbGxPcmRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgZ2V0IHRoZSBsZWFzdCBjb2xsYXRlcmFsaXplZCBzaG9ydCBwb3NpdGlvblxuICAgICAgICB2YXIgbGVhc3RDb2xTaG9ydCA9IG51bGw7XG4gICAgICAgIHZhciBsZWFzdENvbFNob3J0UmF0aW8gPSBudWxsO1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5zdGF0ZS5jYWxsT3JkZXJzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGNhbGxfb3JkZXIgPSB0aGlzLnN0YXRlLmNhbGxPcmRlcnNbaV07XG5cbiAgICAgICAgICAgIGlmIChsZWFzdENvbFNob3J0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZWFzdENvbFNob3J0ID0gY2FsbF9vcmRlcjtcbiAgICAgICAgICAgICAgICBsZWFzdENvbFNob3J0UmF0aW8gPSBjYWxsX29yZGVyLmdldFJhdGlvKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhbGxfb3JkZXIuZ2V0UmF0aW8oKSA8IGxlYXN0Q29sU2hvcnRSYXRpbykge1xuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnRSYXRpbyA9IGNhbGxfb3JkZXIuZ2V0UmF0aW8oKTtcbiAgICAgICAgICAgICAgICBsZWFzdENvbFNob3J0ID0gY2FsbF9vcmRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFzdENvbFNob3J0ID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvdWxkbid0IGZpbmQgdGhlIGxlYXN0IGNvbHNob3J0P1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIHByaWNlIHdpbGwgaGFwcGVuIHdoZW4gdGhlIENSIGlzIDEuXG4gICAgICAgIC8vIFRoZSBDUiBpcyAxIGlmIGNvbGxhdGVyYWwgLyAoZGVidCB4IGZlZWRfIHByaWNlKSA9PSAxXG4gICAgICAgIC8vIFJlYXJyYW5naW5nLCB0aGlzIG1lYW5zIHRoYXQgdGhlIENSIGlzIDEgaWZcbiAgICAgICAgLy8gZmVlZF9wcmljZSA9PSBjb2xsYXRlcmFsIC8gZGVidFxuICAgICAgICBsZXQgZGVidCA9IGxlYXN0Q29sU2hvcnQuZGVidDtcbiAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSBsZWFzdENvbFNob3J0LmNvbGxhdGVyYWw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtjb2xsYXRlcmFsfVxuICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2xlYXN0Q29sU2hvcnQuY2FsbF9wcmljZS5iYXNlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17ZGVidH1cbiAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17bGVhc3RDb2xTaG9ydC5jYWxsX3ByaWNlLnF1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gdHdvIHRhYnNcbiAgICAvLyBvbmUgdGFiIGlzIGZvciB0aGUgcHJpY2UgZmVlZCBkYXRhIGZyb20gdGhlXG4gICAgLy8gd2l0bmVzcyBmb3IgdGhlIGdpdmVuIGFzc2V0XG4gICAgLy8gdGhlIG90aGVyIHRhYiBpcyBhIGxpc3Qgb2YgdGhlIG1hcmdpbiBwb3NpdGlvbnNcbiAgICAvLyBmb3IgdGhpcyBhc3NldCAoaWYgaXQncyBhIGJpdGFzc2V0KVxuICAgIHJlbmRlck1hcmdpblBvc2l0aW9ucyhhc3NldCwgc29ydGVkQ2FsbE9yZGVycywgc29ydGVkQ29sbGF0ZXJhbEJpZHMpIHtcbiAgICAgICAgLy8gZmlyc3Qgd2UgY29tcHV0ZSB0aGUgcHJpY2UgZmVlZCB0YWJcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEoXCJmZWVkc1wiIGluIGJpdEFzc2V0KSB8fFxuICAgICAgICAgICAgYml0QXNzZXQuZmVlZHMubGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIGJpdEFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0XG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBvbGRlc3RWYWxpZERhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIG5vdyAtIGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnMuZmVlZF9saWZldGltZV9zZWMgKiAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRmlsdGVyIGJ5IHZhbGlkIGZlZWQgbGlmZXRpbWUsIFNvcnQgYnkgcHVibGlzaGVkIGRhdGVcbiAgICAgICAgdmFyIGZlZWRzID0gYml0QXNzZXQuZmVlZHM7XG4gICAgICAgIGZlZWRzID0gZmVlZHNcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGFbMV1bMF0pID4gb2xkZXN0VmFsaWREYXRlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGZlZWQxLCBmZWVkMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShmZWVkMlsxXVswXSkgLSBuZXcgRGF0ZShmZWVkMVsxXVswXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWZlZWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcm93cyA9IFtdO1xuICAgICAgICB2YXIgc2V0dGxlbWVudF9wcmljZV9oZWFkZXIgPSBmZWVkc1swXVsxXVsxXS5zZXR0bGVtZW50X3ByaWNlO1xuICAgICAgICB2YXIgY29yZV9leGNoYW5nZV9yYXRlX2hlYWRlciA9IGZlZWRzWzBdWzFdWzFdLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgbGV0IGhlYWRlciA9IChcbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5wdWJsaXNoZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnNldHRsZW1lbnRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+KFxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlbWVudF9wcmljZV9oZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4oXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JlX2V4Y2hhbmdlX3JhdGVfaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnB1Ymxpc2hlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVlZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmZWVkID0gZmVlZHNbaV07XG4gICAgICAgICAgICB2YXIgcHVibGlzaGVyID0gZmVlZFswXTtcbiAgICAgICAgICAgIHZhciBwdWJsaXNoRGF0ZSA9IG5ldyBEYXRlKGZlZWRbMV1bMF0gKyBcIlpcIik7XG4gICAgICAgICAgICB2YXIgc2V0dGxlbWVudF9wcmljZSA9IGZlZWRbMV1bMV0uc2V0dGxlbWVudF9wcmljZTtcbiAgICAgICAgICAgIHZhciBjb3JlX2V4Y2hhbmdlX3JhdGUgPSBmZWVkWzFdWzFdLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgICAgIHZhciBtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvID1cbiAgICAgICAgICAgICAgICBcIlwiICsgZmVlZFsxXVsxXS5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMDtcbiAgICAgICAgICAgIHZhciBtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gPVxuICAgICAgICAgICAgICAgIFwiXCIgKyBmZWVkWzFdWzFdLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyAvIDEwMDA7XG4gICAgICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgPHRyIGtleT17cHVibGlzaGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e3B1Ymxpc2hlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdHRlZFByaWNlKHNldHRsZW1lbnRfcHJpY2UsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXR0ZWRQcmljZShjb3JlX2V4Y2hhbmdlX3JhdGUsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge21haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW99XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGltZUFnbyB0aW1lPXtwdWJsaXNoRGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc0dsb2JhbFNldHRsZW1lbnQgPSBiaXRBc3NldC5zZXR0bGVtZW50X2Z1bmQgPiAwID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGxldCBzZWNvbmRSb3dzID0gbnVsbDtcbiAgICAgICAgbGV0IHNlY29uZEhlYWRlciA9IG51bGw7XG4gICAgICAgIGlmIChpc0dsb2JhbFNldHRsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIGNvbGxhdGVyYWwgYmlkc1xuICAgICAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICAgICAgYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdXBwbHkgPSBkeW5hbWljID8gZHluYW1pYy5jdXJyZW50X3N1cHBseSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5fYW5hbHl6ZUJpZHMoY3VycmVudFN1cHBseSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWNvbmRIZWFkZXIgPSAoXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVNvcnRPcmRlci5iaW5kKHRoaXMsIFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmJpZGRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIGNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTb3J0T3JkZXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmNvbGxhdGVyYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb3J0ZWRDb2xsYXRlcmFsQmlkcy5sZW5ndGggJiYgXCIgKFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb3J0ZWRDb2xsYXRlcmFsQmlkcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRDb2xsYXRlcmFsQmlkc1swXS5iaWQuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c29ydGVkQ29sbGF0ZXJhbEJpZHMubGVuZ3RoICYmIFwiKVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU29ydE9yZGVyLmJpbmQodGhpcywgXCJkZWJ0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmJvcnJvd19hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb3J0ZWRDb2xsYXRlcmFsQmlkcy5sZW5ndGggJiYgXCIgKFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb3J0ZWRDb2xsYXRlcmFsQmlkcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZWRDb2xsYXRlcmFsQmlkc1swXS5iaWQucXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NvcnRlZENvbGxhdGVyYWxCaWRzLmxlbmd0aCAmJiBcIilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGUgY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVNvcnRPcmRlci5iaW5kKHRoaXMsIFwicHJpY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbF9iaWQuYmlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c29ydGVkQ29sbGF0ZXJhbEJpZHMubGVuZ3RoICYmIFwiIChcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c29ydGVkQ29sbGF0ZXJhbEJpZHMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZENvbGxhdGVyYWxCaWRzWzBdLmJpZC5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZENvbGxhdGVyYWxCaWRzWzBdLmJpZC5xdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NvcnRlZENvbGxhdGVyYWxCaWRzLmxlbmd0aCAmJiBcIilcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZSBjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU29ydE9yZGVyLmJpbmQodGhpcywgXCJyYXRpb1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuY29sbF9yYXRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5jb25zaWRlcmVkX29uX3Jldml2YWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc2Vjb25kUm93cyA9IHNvcnRlZENvbGxhdGVyYWxCaWRzLm1hcChjID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5jbHVkZWQgPSBcIm5vXCI7XG4gICAgICAgICAgICAgICAgaWYgKCEhYy5jb25zaWRlcmVkSWZSZXZpdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmNvbnNpZGVyZWRJZlJldml2ZWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWQgPSBcInllc1wiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGMuY29uc2lkZXJlZElmUmV2aXZlZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZCA9IFwicGFydGlhbGx5XCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZCA9IFwibm9cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwibWFyZ2luLXJvd1wiIGtleT17Yy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2MuYmlkZGVyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjLmJpZC5iYXNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2MuYmlkLmJhc2UuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17Yy5iaWQucXVvdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Yy5iaWQucXVvdGUuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHBhZGRpbmdSaWdodDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2MuYmlkLmJhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtjLmJpZC5iYXNlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e2MuYmlkLnF1b3RlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2MuYmlkLnF1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3N5bWJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjLmdldFJhdGlvKCkudG9GaXhlZCgzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+e2luY2x1ZGVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbWFyZ2luIHBvc2l0aW9uc1xuICAgICAgICAgICAgc2Vjb25kSGVhZGVyID0gKFxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTb3J0T3JkZXIuYmluZCh0aGlzLCBcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIGNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTb3J0T3JkZXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmNvbGxhdGVyYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhbGxPcmRlcnMubGVuZ3RoICYmIFwiIChcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYWxsT3JkZXJzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnN0YXRlLmNhbGxPcmRlcnNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q29sbGF0ZXJhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEFtb3VudCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FsbE9yZGVyc1swXS5nZXRDb2xsYXRlcmFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FsbE9yZGVycy5sZW5ndGggJiYgXCIpXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTb3J0T3JkZXIuYmluZCh0aGlzLCBcImRlYnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FsbE9yZGVycy5sZW5ndGggJiYgXCIgKFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhbGxPcmRlcnMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUuY2FsbE9yZGVyc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnRUb1JlY2VpdmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRBbW91bnQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhbGxPcmRlcnNbMF0uYW1vdW50VG9SZWNlaXZlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FsbE9yZGVycy5sZW5ndGggJiYgXCIpXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlICBjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU29ydE9yZGVyLmJpbmQodGhpcywgXCJwcmljZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYWxsT3JkZXJzLmxlbmd0aCAmJiBcIiAoXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FsbE9yZGVycy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhbGxPcmRlcnNbMF0uY2FsbF9wcmljZS5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FsbE9yZGVyc1swXS5jYWxsX3ByaWNlLmJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FsbE9yZGVyc1swXS5jYWxsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdW90ZS5hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhbGxPcmRlcnNbMF0uY2FsbF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVvdGUuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FsbE9yZGVycy5sZW5ndGggJiYgXCIpXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5jb2xsX3JhdGlvX3RhcmdldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTb3J0T3JkZXIuYmluZCh0aGlzLCBcInJhdGlvXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5jb2xsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHNlY29uZFJvd3MgPSBzb3J0ZWRDYWxsT3JkZXJzLm1hcChjID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwibWFyZ2luLXJvd1wiIGtleT17Yy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2MuYm9ycm93ZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2MuY29sbGF0ZXJhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2MuZ2V0Q29sbGF0ZXJhbCgpLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2MuZGVidH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2MuYW1vdW50VG9SZWNlaXZlKCkuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCIsIHBhZGRpbmdSaWdodDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2MuY2FsbF9wcmljZS5iYXNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17Yy5jYWxsX3ByaWNlLmJhc2UuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17Yy5jYWxsX3ByaWNlLnF1b3RlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2MuY2FsbF9wcmljZS5xdW90ZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCBwYWRkaW5nUmlnaHQ6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhYy5vcmRlci50YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5vcmRlci50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyAvIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2MuZ2V0U3RhdHVzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2MuZ2V0UmF0aW8oKS50b0ZpeGVkKDMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9XCJiaXRhc3NldERhdGFUYWJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRhYmxlIG9yZGVyLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e3Jvd3N9PC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNHbG9iYWxTZXR0bGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWxfYmlkLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZXhwbG9yZXIuYXNzZXQubWFyZ2luX3Bvc2l0aW9ucy50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRhYmxlIG9yZGVyLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRIZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e3NlY29uZFJvd3N9PC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQudG9KUygpO1xuICAgICAgICB2YXIgc29ydGVkQ2FsbE9yZGVycyA9IHRoaXMuZ2V0TWFyZ2luUG9zaXRpb25zKCk7XG4gICAgICAgIHZhciBzb3J0ZWRDb2xsYXRlcmFsQmlkcyA9IHRoaXMuZ2V0Q29sbGF0ZXJhbEJpZHMoKTtcbiAgICAgICAgdmFyIHByaWNlRmVlZCA9XG4gICAgICAgICAgICBcImJpdGFzc2V0XCIgaW4gYXNzZXQgPyB0aGlzLnJlbmRlclByaWNlRmVlZChhc3NldCkgOiBudWxsO1xuICAgICAgICB2YXIgcHJpY2VGZWVkRGF0YSA9XG4gICAgICAgICAgICBcImJpdGFzc2V0XCIgaW4gYXNzZXRcbiAgICAgICAgICAgICAgICA/IHRoaXMucmVuZGVyTWFyZ2luUG9zaXRpb25zKFxuICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZENhbGxPcmRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgc29ydGVkQ29sbGF0ZXJhbEJpZHNcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgYXNzZXQtcGFnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IHdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1lZGl1bS11cC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQWJvdXRCb3goYXNzZXQsIHRoaXMucHJvcHMuYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz1cImFzc2V0RGF0YVRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q2xhc3M9XCJ0YWItbm8tYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiZXhwbG9yZXIuYXNzZXQuaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIGxhcmdlLWhvcml6b250YWwgbWVkaXVtLXVwLTEgbGFyZ2UtdXAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN1bW1hcnkoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQZXJtaXNzaW9ucyhhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZlZVBvb2woYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUZlZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQcmljZUZlZWQoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUZlZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTZXR0bGVtZW50KGFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Q29sbGF0ZXJhbEJpZEluSW5mbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC1uby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbGxhdGVyYWxCaWQoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2VGZWVkRGF0YSA/IHByaWNlRmVlZERhdGEgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJleHBsb3Jlci5hc3NldC5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbGFyZ2UtaG9yaXpvbnRhbCBtZWRpdW0tdXAtMSBsYXJnZS11cC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVQb29sRnVuZGluZyhhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVQb29sQ2xhaW1pbmcoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRmVlc0NsYWltaW5nKGFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFzc2V0T3duZXJVcGRhdGUoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiYml0YXNzZXRcIiBpbiBhc3NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFzc2V0LmJpdGFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlckZlZWRQdWJsaXNoKGFzc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb3J0ZWRDb2xsYXRlcmFsQmlkcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDb2xsYXRlcmFsQmlkKGFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldCA9IGNvbm5lY3QoXG4gICAgQXNzZXQsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OlxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5Bc3NldCA9IEFzc2V0V3JhcHBlcihBc3NldCwge1xuICAgIHByb3BOYW1lczogW1wiYmFja2luZ0Fzc2V0XCJdXG59KTtcblxuY2xhc3MgQXNzZXRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiA8UGFnZTQwNCBzdWJ0aXRsZT1cImFzc2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xuICAgICAgICB9XG4gICAgICAgIGxldCBiYWNraW5nQXNzZXQgPSB0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0XCIpXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMuYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiA8QXNzZXQgey4uLnRoaXMucHJvcHN9IGJhY2tpbmdBc3NldD17YmFja2luZ0Fzc2V0fSAvPjtcbiAgICB9XG59XG5Bc3NldENvbnRhaW5lciA9IEFzc2V0V3JhcHBlcihBc3NldENvbnRhaW5lciwge1xuICAgIHdpdGhEeW5hbWljOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRTeW1ib2xTcGxpdHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3ltYm9sID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3ltYm9sLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiA8QXNzZXRDb250YWluZXIgey4uLnRoaXMucHJvcHN9IGFzc2V0PXtzeW1ib2x9IC8+O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gYSBjbGFzcyB0byBkaXNwbGF5IHRpbWUgbmljZWx5IHdoZW4gZ2l2ZW4gc2Vjb25kc1xuLy8gZm9yIGV4YW1wbGUsIGRpc3BsYXlcblxuLy8gZXhwZWN0cyB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYXMgYSBwcm9wZXJ0eVxuXG5jbGFzcyBGb3JtYXR0ZWRUaW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt0aW1lOiBwcm9wcy50aW1lfTtcbiAgICB9XG5cbiAgICAvLyBnaXZlbiBhbiBpbnRlZ2VyIHNlY29uZHMgYXMgYW4gYXJndW1lbnQsXG4gICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2YgaG91cnNcbiAgICBnZXRIb3VycyhzZWNzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXQgaG91cnMgY2FsbGVkIHdpdGg6IFwiICsgc2Vjcyk7XG4gICAgICAgIHJldHVybiBzZWNzIC8gMzYwMDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2Pnt0aGlzLmdldEhvdXJzKHRoaXMuc3RhdGUudGltZSl9aDwvZGl2PjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZFRpbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxuY29uc3Qgc3RhdGVTZXR0ZXIgPSAodGhhdCwga2V5LCB0cmFuc2Zvcm0gPSB2YWx1ZSA9PiB2YWx1ZSkgPT4gdmFsdWUgPT5cbiAgICB0aGF0LnNldFN0YXRlKHtba2V5XTogdHJhbnNmb3JtKHZhbHVlKX0pO1xuXG5jb25zdCBrZXlHZXR0ZXIgPSBrZXkgPT4gb2JqZWN0ID0+IG9iamVjdFtrZXldO1xuXG5jbGFzcyBGZWVQb29sT3BlcmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0eXBlOiBcImZ1bmRcIlxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xuICAgIH1cblxuICAgIG9uQWNjb3VudE5hbWVDaGFuZ2VkID0gc3RhdGVTZXR0ZXIodGhpcywgXCJmdW5kZXJBY2NvdW50TmFtZVwiKTtcbiAgICBvbkFjY291bnRDaGFuZ2VkID0gc3RhdGVTZXR0ZXIodGhpcywgXCJuZXdGdW5kZXJBY2NvdW50XCIpO1xuICAgIG9uUG9vbElucHV0ID0gc3RhdGVTZXR0ZXIodGhpcywgXCJmdW5kUG9vbEFtb3VudFwiLCBrZXlHZXR0ZXIoXCJhbW91bnRcIikpO1xuXG4gICAgb25DbGFpbUlucHV0KGtleSwge2Ftb3VudH0pIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXkgKyBcIkFzc2V0XCJdLnNldEFtb3VudCh7cmVhbDogYW1vdW50fSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2tleV06IGFtb3VudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkZ1bmRQb29sID0gKCkgPT5cbiAgICAgICAgQXNzZXRBY3Rpb25zLmZ1bmRQb29sKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdGdW5kZXJBY2NvdW50XG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLm5ld0Z1bmRlckFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvcmUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mdW5kUG9vbEFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpXG4gICAgICAgICk7XG5cbiAgICByZXNldCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSgpKTtcbiAgICB9O1xuXG4gICAgaW5pdGlhbFN0YXRlID0gKCkgPT4gKHtcbiAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU6IHRoaXMucHJvcHMuZnVuZGVyQWNjb3VudE5hbWUsXG4gICAgICAgIGZ1bmRQb29sQW1vdW50OiAwLFxuICAgICAgICBmdW5kUG9vbEFzc2V0OiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmNvcmUuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuY29yZS5nZXQoXCJpZFwiKVxuICAgICAgICB9KSxcbiAgICAgICAgY2xhaW1Qb29sQW1vdW50OiAwLFxuICAgICAgICBjbGFpbVBvb2xBbW91bnRBc3NldDogbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5jb3JlLmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmNvcmUuZ2V0KFwiaWRcIilcbiAgICAgICAgfSksXG4gICAgICAgIGNsYWltRmVlc0Ftb3VudDogMCxcbiAgICAgICAgY2xhaW1GZWVzQW1vdW50QXNzZXQ6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIG9uQ2xhaW1GZWVzKCkge1xuICAgICAgICBsZXQgYWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudCh0aGlzLnByb3BzLmZ1bmRlckFjY291bnROYW1lKTtcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm47XG4gICAgICAgIEFzc2V0QWN0aW9ucy5jbGFpbVBvb2xGZWVzKFxuICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNsYWltRmVlc0Ftb3VudEFzc2V0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25DbGFpbVBvb2wgPSAoKSA9PlxuICAgICAgICBBc3NldEFjdGlvbnMuY2xhaW1Qb29sKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1Qb29sQW1vdW50QXNzZXRcbiAgICAgICAgKTtcblxuICAgIHJlbmRlckZ1bmRQb29sKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgb25Qb29sSW5wdXQsXG4gICAgICAgICAgICBvbkZ1bmRQb29sLFxuICAgICAgICAgICAgcmVzZXQsXG4gICAgICAgICAgICBvbkFjY291bnROYW1lQ2hhbmdlZCxcbiAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWRcbiAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHthc3NldCwgY29yZSwgaGlkZUJhbGFuY2UsIGdldER5bmFtaWNPYmplY3R9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IHtmdW5kZXJBY2NvdW50TmFtZSwgZnVuZFBvb2xBbW91bnQsIG5ld0Z1bmRlckFjY291bnR9ID0gc3RhdGU7XG4gICAgICAgIGxldCBkeW5hbWljT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFoaWRlQmFsYW5jZSlcbiAgICAgICAgICAgIGR5bmFtaWNPYmplY3QgPSBnZXREeW5hbWljT2JqZWN0KFxuICAgICAgICAgICAgICAgIGFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY29yZUlEID0gY29yZS5nZXQoXCJpZFwiKSB8fCBcIjEuMy4wXCI7XG4gICAgICAgIGxldCBiYWxhbmNlID0gMDtcbiAgICAgICAgaWYgKG5ld0Z1bmRlckFjY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvcmVCYWxhbmNlSUQgPSBuZXdGdW5kZXJBY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGNvcmVJRF0pO1xuICAgICAgICAgICAgaWYgKGNvcmVCYWxhbmNlSUQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlSUQpO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJhbGFuY2VUZXh0ID0gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldCBhbW91bnQ9e2JhbGFuY2V9IGFzc2V0PXtjb3JlSUR9IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtoaWRlQmFsYW5jZSB8fCAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjEuNXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5wb29sX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+OiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY09iamVjdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcImZlZV9wb29sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5mdW5kaW5nX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnVuZGVyQWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkFjY291bnROYW1lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17b25BY2NvdW50Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnVuZGVyQWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtmdW5kUG9vbEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUG9vbElucHV0fVxuICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tjb3JlSURdfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZnVuZFBvb2xBbW91bnQgPD0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkZ1bmRQb29sfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9mdW5kX2ZlZV9wb29sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIiBvbkNsaWNrPXtyZXNldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckNsYWltUG9vbCgpIHtcbiAgICAgICAgY29uc3Qge3Byb3BzLCBvbkNsYWltUG9vbCwgcmVzZXR9ID0gdGhpcztcbiAgICAgICAgY29uc3Qge2NsYWltUG9vbEFtb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7YXNzZXQsIGNvcmUsIGdldER5bmFtaWNPYmplY3R9ID0gcHJvcHM7XG4gICAgICAgIGxldCBkeW5hbWljT2JqZWN0ID0gZ2V0RHluYW1pY09iamVjdChcbiAgICAgICAgICAgIGFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjb3JlSUQgPSBjb3JlLmdldChcImlkXCIpIHx8IFwiMS4zLjBcIjtcblxuICAgICAgICBjb25zdCBiYWxhbmNlVGV4dCA9ICEhZHluYW1pY09iamVjdCA/IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNsYWltUG9vbEFtb3VudEFzc2V0LnNldEFtb3VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXRzOiBkeW5hbWljT2JqZWN0LmdldChcImZlZV9wb29sXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltUG9vbEFtb3VudDogdGhpcy5zdGF0ZS5jbGFpbVBvb2xBbW91bnRBc3NldC5nZXRBbW91bnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxuICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcImZlZV9wb29sXCIpfVxuICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jbGFpbV9wb29sX3RleHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjbGFpbVBvb2xBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xhaW1JbnB1dC5iaW5kKHRoaXMsIFwiY2xhaW1Qb29sQW1vdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tjb3JlSURdfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2xhaW1Qb29sQW1vdW50IDw9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGFpbVBvb2x9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X2NsYWltX2ZlZV9wb29sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIiBvbkNsaWNrPXtyZXNldH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckNsYWltRmVlcygpIHtcbiAgICAgICAgY29uc3Qge3Byb3BzfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHtjbGFpbUZlZXNBbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBnZXREeW5hbWljT2JqZWN0fSA9IHByb3BzO1xuICAgICAgICBsZXQgZHluYW1pY09iamVjdCA9IGdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgdW5jbGFpbWVkQmFsYW5jZSA9IGR5bmFtaWNPYmplY3RcbiAgICAgICAgICAgID8gZHluYW1pY09iamVjdC5nZXQoXCJhY2N1bXVsYXRlZF9mZWVzXCIpXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGxldCB2YWxpZENsYWltID1cbiAgICAgICAgICAgIGNsYWltRmVlc0Ftb3VudCA+IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1GZWVzQW1vdW50QXNzZXQuZ2V0QW1vdW50KCkgPD0gdW5jbGFpbWVkQmFsYW5jZTtcblxuICAgICAgICBsZXQgdW5jbGFpbWVkQmFsYW5jZVRleHQgPSAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIgLz5cbiAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17dW5jbGFpbWVkQmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNsYWltX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnVuY2xhaW1lZF9pc3N1ZXJfaW5jb21lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY09iamVjdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pY09iamVjdC5nZXQoXCJhY2N1bXVsYXRlZF9mZWVzXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXt1bmNsYWltZWRCYWxhbmNlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjbGFpbUZlZXNBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xhaW1JbnB1dC5iaW5kKHRoaXMsIFwiY2xhaW1GZWVzQW1vdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2Fzc2V0LmdldChcImlkXCIpXX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdUb3A6IDE2fX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF2YWxpZENsYWltXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGFpbUZlZXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY2xhaW1fZmVlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcImZ1bmRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRnVuZFBvb2woKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwiY2xhaW1cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2xhaW1Qb29sKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcImNsYWltX2ZlZXNcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2xhaW1GZWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkZlZVBvb2xPcGVyYXRpb24gPSBBc3NldFdyYXBwZXIoRmVlUG9vbE9wZXJhdGlvbiwge1xuICAgIHByb3BOYW1lczogW1wiYXNzZXRcIiwgXCJjb3JlXCJdLFxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb3JlOiBcIjEuMy4wXCJcbiAgICB9LFxuICAgIHdpdGhEeW5hbWljOiB0cnVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlUG9vbE9wZXJhdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcblxuY2xhc3MgQXNzZXRPd25lclVwZGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcbiAgICAgICAgY3VycmVudE93bmVyOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuZXdfaXNzdWVyX2FjY291bnRfaWQ6IG51bGwsXG4gICAgICAgICAgICBpc3N1ZXJfYWNjb3VudF9uYW1lOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25BY2NvdW50TmFtZUNoYW5nZWQoa2V5LCBuYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2tleV06IG5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25BY2NvdW50Q2hhbmdlZChrZXksIGFjY291bnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBba2V5XTogYWNjb3VudCA/IGFjY291bnQuZ2V0KFwiaWRcIikgOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBBc3NldEFjdGlvbnMudXBkYXRlT3duZXIoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdfaXNzdWVyX2FjY291bnRfaWRcbiAgICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25SZXNldCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlc2V0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5ld19pc3N1ZXJfYWNjb3VudF9pZDogbnVsbCxcbiAgICAgICAgICAgIGlzc3Vlcl9hY2NvdW50X25hbWU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y3VycmVudE93bmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMuY3VycmVudF9pc3N1ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2N1cnJlbnRPd25lci5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17Y3VycmVudE93bmVyLmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLm5ld19pc3N1ZXJcIlxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dGhpcy5zdGF0ZS5pc3N1ZXJfYWNjb3VudF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFjY291bnROYW1lQ2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNzdWVyX2FjY291bnRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25BY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmV3X2lzc3Vlcl9hY2NvdW50X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5pc3N1ZXJfYWNjb3VudF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUFjY291bnRzPXtbY3VycmVudE93bmVyLmdldChcIm5hbWVcIildfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLnN0YXRlLm5ld19pc3N1ZXJfYWNjb3VudF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnVwZGF0ZV9vd25lclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0T3duZXJVcGRhdGUgPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0T3duZXJVcGRhdGUpO1xuZXhwb3J0IGRlZmF1bHQgQXNzZXRPd25lclVwZGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgUHJpY2VJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9QcmljZUlucHV0XCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcblxuY2xhc3MgQXNzZXRQdWJsaXNoRmVlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnJlc2V0U3RhdGUocHJvcHMpO1xuICAgIH1cblxuICAgIHJlc2V0U3RhdGUocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGxldCBwdWJsaXNoZXJfaWQgPSBwcm9wcy5hY2NvdW50LmdldChcImlkXCIpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGZWVkID0gcHJvcHMuYXNzZXQuZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJjdXJyZW50X2ZlZWRcIl0pO1xuXG4gICAgICAgIC8qIE1pZ2h0IG5lZWQgdG8gY2hlY2sgdGhlc2UgZGVmYXVsdCB2YWx1ZXMgKi9cbiAgICAgICAgbGV0IG1jciA9IGN1cnJlbnRGZWVkLmdldChcIm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIiwgMTc1MCk7XG4gICAgICAgIGxldCBtc3NyID0gY3VycmVudEZlZWQuZ2V0KFwibWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIsIDExMDApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwdWJsaXNoZXI6IHByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgIHB1Ymxpc2hlcl9pZCxcbiAgICAgICAgICAgIG1jcixcbiAgICAgICAgICAgIG1jclZhbHVlOiBtY3IgLyAxMDAwLFxuICAgICAgICAgICAgbXNzcixcbiAgICAgICAgICAgIG1zc3JWYWx1ZTogbXNzciAvIDEwMDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkFjY291bnROYW1lQ2hhbmdlZChrZXksIG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBba2V5XTogbmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkFjY291bnRDaGFuZ2VkKGtleSwgYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtrZXldOiBhY2NvdW50ID8gYWNjb3VudC5nZXQoXCJpZFwiKSA6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIEFzc2V0QWN0aW9ucy5wdWJsaXNoRmVlZCh7XG4gICAgICAgICAgICBwdWJsaXNoZXI6IHRoaXMuc3RhdGUucHVibGlzaGVyX2lkLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBtY3I6IHRoaXMuc3RhdGUubWNyLFxuICAgICAgICAgICAgbXNzcjogdGhpcy5zdGF0ZS5tc3NyLFxuICAgICAgICAgICAgc2V0dGxlbWVudFByaWNlOiB0aGlzLnN0YXRlLnNldHRsZW1lbnRQcmljZSxcbiAgICAgICAgICAgIGNlcjogdGhpcy5zdGF0ZS5jZXJcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUodGhpcy5yZXNldFN0YXRlKCkpO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBvblByaWNlQ2hhbmdlZChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2tleV06IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU2V0UmF0aW8oa2V5LCB7YW1vdW50fSkge1xuICAgICAgICAvKiBFbmZvcmNlIG9uZSBkZWNpbWFsIHBvaW50IG1heGltdW0gKi9cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgISFhbW91bnQgJiZcbiAgICAgICAgICAgIHR5cGVvZiBhbW91bnQgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgIGFtb3VudC5pbmRleE9mKFwiLlwiKSAhPT0gLTEgJiZcbiAgICAgICAgICAgIGFtb3VudC5pbmRleE9mKFwiLlwiKSArIDQgIT09IGFtb3VudC5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBhbW91bnQgPSBhbW91bnQuc3Vic3RyKDAsIGFtb3VudC5pbmRleE9mKFwiLlwiKSArIDQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2tleSArIFwiVmFsdWVcIl06IGFtb3VudCxcbiAgICAgICAgICAgIFtrZXldOiBNYXRoLmZsb29yKHBhcnNlRmxvYXQoYW1vdW50KSAqIDEwMDApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHttY3JWYWx1ZSwgbXNzclZhbHVlLCBwdWJsaXNoZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBiYXNlID0gYXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgIGNvbnN0IHF1b3RlID0gYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxuICAgICAgICBdKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQuZmVlZF9wcm9kdWNlclwiXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXtwdWJsaXNoZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWNjb3VudE5hbWVDaGFuZ2VkLmJpbmQodGhpcywgXCJwdWJsaXNoZXJcIil9XG4gICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25BY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGlzaGVyX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17cHVibGlzaGVyfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgey8qIENvcmUgRXhjaGFuZ2UgUmF0ZSAqL31cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8UHJpY2VJbnB1dFxuICAgICAgICAgICAgICAgICAgICBvblByaWNlQ2hhbmdlZD17dGhpcy5vblByaWNlQ2hhbmdlZC5iaW5kKHRoaXMsIFwiY2VyXCIpfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlPXtcIjEuMy4wXCJ9XG4gICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIHsvKiBTZXR0bGVtZW50IFByaWNlICovfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxQcmljZUlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uUHJpY2VDaGFuZ2VkPXt0aGlzLm9uUHJpY2VDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0bGVtZW50UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuc2V0dGxlbWVudF9wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgey8qIE1DUiAqL31cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIlxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e21jclZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldFJhdGlvLmJpbmQodGhpcywgXCJtY3JcIil9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgey8qIE1TU1IgKi99XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIlxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e21zc3JWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRSYXRpby5iaW5kKHRoaXMsIFwibXNzclwiKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9wdWJsaXNoX2ZlZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRQdWJsaXNoRmVlZCA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRQdWJsaXNoRmVlZCk7XG5Bc3NldFB1Ymxpc2hGZWVkID0gQXNzZXRXcmFwcGVyKEFzc2V0UHVibGlzaEZlZWQpO1xuZXhwb3J0IGRlZmF1bHQgQXNzZXRQdWJsaXNoRmVlZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IHtQcmljZSwgQXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcblxuY2xhc3MgUHJpY2VJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgcXVvdGUgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHByb3BzLnF1b3RlLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5xdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBiYXNlID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5iYXNlLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5iYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJpY2UgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBiYXNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgIHJlYWxQcmljZVZhbHVlOiBwcmljZS50b1JlYWwoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uUHJpY2VDaGFuZ2VkKHthbW91bnR9KSB7XG4gICAgICAgIHRoaXMuc3RhdGUucHJpY2Uuc2V0UHJpY2VGcm9tUmVhbChwYXJzZUZsb2F0KGFtb3VudCkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWxQcmljZVZhbHVlOiBhbW91bnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QcmljZUNoYW5nZWQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUHJpY2VDaGFuZ2VkKHRoaXMuc3RhdGUucHJpY2UuY2xvbmUoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7cmVhbFByaWNlVmFsdWUsIHByaWNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgIGFtb3VudD17cmVhbFByaWNlVmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QcmljZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBhc3NldD17cHJpY2UuYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICBiYXNlPXt0aGlzLnByb3BzLnF1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICBpc1ByaWNlXG4gICAgICAgICAgICAgICAgYXNzZXRzPXtbcHJpY2UucXVvdGUuYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblByaWNlSW5wdXQgPSBBc3NldFdyYXBwZXIoUHJpY2VJbnB1dCwge1xuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBiYXNlOiBcIjEuMy4wXCJcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgRm9ybWF0dGVkUHJpY2UgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkUHJpY2VcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmNsYXNzIEJpZENvbGxhdGVyYWxPcGVyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsU3RhdGUgPSAoKSA9PiAoe1xuICAgICAgICBhY2NvdW50OiBDaGFpblN0b3JlLmdldEFjY291bnQodGhpcy5wcm9wcy5mdW5kZXJBY2NvdW50TmFtZSksXG4gICAgICAgIGNvbGxhdGVyYWxBbW91bnQ6IFwiMFwiLFxuICAgICAgICBkZWJ0QW1vdW50OiBcIjBcIlxuICAgIH0pO1xuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUoKSk7XG4gICAgfVxuXG4gICAgX2NvbGxhdGVyYWxCaWRJbnB1dCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbGxhdGVyYWxBbW91bnQ6IHZhbHVlLmFtb3VudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZGVidEJpZElucHV0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGVidEFtb3VudDogdmFsdWUuYW1vdW50XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkJpZENvbGxhdGVyYWwoKSB7XG4gICAgICAgIGxldCB7Y29sbGF0ZXJhbEFtb3VudCwgZGVidEFtb3VudH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbGxhdGVyYWxBbW91bnQgPVxuICAgICAgICAgICAgY29sbGF0ZXJhbEFtb3VudCA9PSAwXG4gICAgICAgICAgICAgICAgPyBjb2xsYXRlcmFsQW1vdW50XG4gICAgICAgICAgICAgICAgOiBjb2xsYXRlcmFsQW1vdW50LnJlcGxhY2UoLywvZywgXCJcIik7XG4gICAgICAgIGRlYnRBbW91bnQgPVxuICAgICAgICAgICAgZGVidEFtb3VudCA9PSAwID8gZGVidEFtb3VudCA6IGRlYnRBbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcblxuICAgICAgICBBc3NldEFjdGlvbnMuYmlkQ29sbGF0ZXJhbChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWNjb3VudCA/IHRoaXMuc3RhdGUuYWNjb3VudC5nZXQoXCJpZFwiKSA6IG51bGwsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvcmUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxuICAgICAgICAgICAgY29sbGF0ZXJhbEFtb3VudCxcbiAgICAgICAgICAgIGRlYnRBbW91bnRcbiAgICAgICAgKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKCk7XG4gICAgICAgIH0sIDYwMDApO1xuICAgIH1cblxuICAgIHJlbW92ZUJpZCgpIHtcbiAgICAgICAgQXNzZXRBY3Rpb25zLmJpZENvbGxhdGVyYWwoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjY291bnQgPyB0aGlzLnN0YXRlLmFjY291bnQuZ2V0KFwiaWRcIikgOiBudWxsLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3JlLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSgpO1xuICAgICAgICB9LCA2MDAwKTtcbiAgICB9XG5cbiAgICByZW5kZXJDb2xsYXRlcmFsQmlkKCkge1xuICAgICAgICBjb25zdCB7YXNzZXQsIGNvcmV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge2FjY291bnQsIGNvbGxhdGVyYWxBbW91bnQsIGRlYnRBbW91bnR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgdGFiSW5kZXggPSAxO1xuICAgICAgICBjb25zdCBjb3JlSUQgPSBjb3JlLmdldChcImlkXCIpIHx8IFwiMS4zLjBcIjtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSAwO1xuICAgICAgICBjb25zdCBjb3JlQmFsYW5jZUlEID0gYWNjb3VudFxuICAgICAgICAgICAgPyBhY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGNvcmVJRF0pXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmIChjb3JlQmFsYW5jZUlEKSB7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlSUQpO1xuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFsYW5jZVRleHQgPSAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIgLz5cbiAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YmFsYW5jZX0gYXNzZXQ9e2NvcmVJRH0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5jb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjb2xsYXRlcmFsQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fY29sbGF0ZXJhbEJpZElucHV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlSUR9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2NvcmVJRF19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zYWN0aW9uLmJvcnJvd19hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2RlYnRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9kZWJ0QmlkSW5wdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1thc3NldC5nZXQoXCJpZFwiKV19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBbW91bnQgIT09IFwiMFwiICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVidEFtb3VudCAhPT0gXCIwXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsLmJpZF9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBbW91bnQgLyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtjb3JlSUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17dGhpcy5zdGF0ZS5kZWJ0QW1vdW50IC8gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlUHJpY2VGZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQmlkQ29sbGF0ZXJhbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmJpZF9jb2xsYXRlcmFsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29sbGF0ZXJhbEJpZCgpO1xuICAgIH1cbn1cblxuQmlkQ29sbGF0ZXJhbE9wZXJhdGlvbiA9IEFzc2V0V3JhcHBlcihCaWRDb2xsYXRlcmFsT3BlcmF0aW9uLCB7XG4gICAgcHJvcE5hbWVzOiBbXCJhc3NldFwiLCBcImNvcmVcIl0sXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvcmU6IFwiMS4zLjBcIlxuICAgIH0sXG4gICAgd2l0aER5bmFtaWM6IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCaWRDb2xsYXRlcmFsT3BlcmF0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOzs7O0FBaEVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTJEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BOzs7O0FBZEE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BOzs7O0FBZkE7QUFDQTtBQWlCQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFGQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFUQTtBQVlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBVEE7QUFZQTs7O0FBR0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUtBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBQUE7QUFBQTtBQUNBO0FBMENBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWpCQTtBQTRCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFKQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBREE7QUEyQ0E7QUFDQTtBQWhEQTtBQW1EQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUEvQkE7QUFKQTtBQUhBO0FBa0RBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBT0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVdBO0FBRUE7QUFNQTtBQUNBO0FBSUE7QUFNQTtBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQU5BO0FBUUE7QUFSQTtBQVBBO0FBQUE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQURBO0FBSkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBckRBO0FBbUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFQQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUpBO0FBN0VBO0FBeEVBO0FBOUJBO0FBMk1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBRkE7QUFKQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUZBO0FBSkE7QUF4QkE7QUFKQTtBQVhBO0FBd0RBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBSkE7QUFxQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBSkE7QUFvQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBcEJBO0FBREE7QUE4QkE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFEQTtBQWtCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFEQTtBQWVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFKQTtBQURBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFKQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFTQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBckNBO0FBQ0E7QUFpREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFsQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFDQTtBQTBCQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBekJBO0FBQ0E7QUEyQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFIQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUxBO0FBTUE7QUFOQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBakNBO0FBREE7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQW5CQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFOQTtBQVNBO0FBcEJBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBTkE7QUFTQTtBQWpCQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQVpBO0FBZUE7QUF2QkE7QUEwQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQW5GQTtBQURBO0FBQ0E7QUEwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF6Q0E7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBSUE7QUFSQTtBQVdBO0FBdEJBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUlBO0FBUkE7QUFXQTtBQW5CQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFDQTtBQWxCQTtBQXFCQTtBQTdCQTtBQStCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBMUZBO0FBREE7QUFDQTtBQXFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUEzQ0E7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUEE7QUFmQTtBQURBO0FBREE7QUFEQTtBQXNDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBN0JBO0FBa0NBO0FBbkNBO0FBcUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVpBO0FBREE7QUE1Q0E7QUFSQTtBQURBO0FBREE7QUE0RUE7Ozs7QUFsM0RBO0FBQ0E7QUFvM0RBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQVZBO0FBQ0E7QUFhQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBOzs7O0FBYkE7QUFDQTtBQWNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFKQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQWhCQTtBQUNBO0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZ0JBO0FBQUE7QUFDQTtBQWpCQTtBQTJCQTtBQUNBO0FBQ0E7QUE3QkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWZBO0FBQUE7QUFDQTtBQS9CQTtBQThEQTtBQUFBO0FBQ0E7QUE3REE7QUFGQTtBQUdBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTs7O0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVEE7QUFwQ0E7QUFtREE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQURBO0FBRkE7QUFPQTtBQVpBO0FBY0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFGQTtBQWhCQTtBQUNBO0FBc0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVRBO0FBakJBO0FBZ0NBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBRkE7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFUQTtBQTdCQTtBQStDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBMVRBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBMFRBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBVEE7QUE1QkE7QUE4Q0E7Ozs7QUE3RkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTZGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBSUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBREE7QUE5REE7QUFtRkE7Ozs7QUE3S0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBQ0E7QUE2S0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFuQkE7QUF1QkE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBRUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWdCQTs7OztBQXhEQTtBQUNBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBSkE7QUFIQTtBQUlBO0FBQ0E7OztBQU9BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUEE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBUkE7QUE1Q0E7QUE4REE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQTVKQTtBQUNBO0FBOEpBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBQ0E7QUFPQTs7OztBIiwic291cmNlUm9vdCI6IiJ9