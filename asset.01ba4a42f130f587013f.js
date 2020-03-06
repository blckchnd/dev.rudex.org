(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[39],{

/***/ 3287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1858);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2466);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2467);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2139);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2159);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2468);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2815);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2142);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2575);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2176);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(594);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(583);
/* harmony import */ var _Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3288);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(432);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(501);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(610);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2666);
/* harmony import */ var _Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3289);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(565);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1898);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3290);
/* harmony import */ var _AssetPublishFeed__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3291);
/* harmony import */ var _AssetResolvePrediction__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3293);
/* harmony import */ var _BidCollateralOperation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3294);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





























var Panel = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Collapse"].Panel;

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
            showCollateralBidInInfo: false,
            cumulativeGrouping: false,
            activeFeedTab: "margin",
            activeAssetTab: "info"
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
                        var mcr = this.props.asset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]);

                        bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__["Apis"].instance().db_api().exec("get_call_orders", [this.props.asset.get("id"), 300]).then(function (call_orders) {
                            var callOrders = call_orders.map(function (c) {
                                return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__["CallOrder"](c, assets, _this4.props.asset.get("id"), feedPrice, mcr, isPredictionMarket);
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

            var feedPriceRaw = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(this.props.asset);

            // if there has been no feed price, settlePrice has 0 amount
            if (feedPriceRaw.getIn(["base", "amount"]) == 0 && feedPriceRaw.getIn(["quote", "amount"]) == 0) {
                return null;
            }

            var feedPrice = void 0;

            /* Prediction markets don't need feeds for shorting, so the settlement price can be set to 1:1 */
            if (isPredictionMarket && feedPriceRaw.getIn(["base", "asset_id"]) === feedPriceRaw.getIn(["quote", "asset_id"])) {
                if (!assets[this.props.backingAsset.get("id")]) {
                    assets[this.props.backingAsset.get("id")] = {
                        precision: this.props.asset.get("precision")
                    };
                }
                feedPriceRaw = feedPriceRaw.setIn(["base", "amount"], 1);
                feedPriceRaw = feedPriceRaw.setIn(["base", "asset_id"], this.props.backingAsset.get("id"));
                feedPriceRaw = feedPriceRaw.setIn(["quote", "amount"], 1);
                feedPriceRaw = feedPriceRaw.setIn(["quote", "asset_id"], this.props.asset.get("id"));
                sqr = 1000;
            }

            // Catch Invalid SettlePrice object
            if (feedPriceRaw.toJS) {
                var settleObject = feedPriceRaw.toJS();
                if (!assets[settleObject.base.asset_id]) return;
            }

            feedPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__["FeedPrice"]({
                priceObject: feedPriceRaw,
                market_base: this.props.asset.get("id"),
                sqr: sqr,
                assets: assets
            });

            return feedPrice;
        }
    }, {
        key: "_toggleCumulativeGrouping",
        value: function _toggleCumulativeGrouping() {
            this.setState({
                cumulativeGrouping: !this.state.cumulativeGrouping
            });
        }
    }, {
        key: "_assetType",
        value: function _assetType(asset) {
            return "bitasset" in asset ? asset.bitasset.is_prediction_market ? "Prediction" : "Smart" : "Simple";
        }
    }, {
        key: "formattedPrice",
        value: function formattedPrice(price) {
            var hide_symbols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var hide_value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var factor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var negative_invert = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            if (typeof price == "number" && isNaN(price)) {
                return "-";
            }
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
            var core_asset = this.props.coreAsset;
            var core_asset_symbol = core_asset.get("symbol");
            var preferredMarket = description.market ? description.market : core_asset_symbol;
            if (asset.bitasset) {
                preferredMarket = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset(asset.bitasset.options.short_backing_asset);
                if (!!preferredMarket && preferredMarket.get) {
                    preferredMarket = preferredMarket.get("symbol");
                } else {
                    preferredMarket = core_asset_symbol;
                }
            }
            if (asset.symbol === core_asset_symbol) preferredMarket = "USD";
            if (urls && urls.length) {
                urls.forEach(function (url) {
                    var markdownUrl = "<a target=\"_blank\" class=\"external-link\" rel=\"noopener noreferrer\" href=\"" + url + "\">" + url + "</a>";
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

            var isPrediction = "bitasset" in asset && asset.bitasset.is_prediction_market;
            var predictionRows = null;
            if (isPrediction) {
                var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].parseDescription(asset.options.description);
                predictionRows = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.prediction_market_asset.tooltip_prediction")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.prediction_market_asset.prediction" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.prediction_market_asset.tooltip_prediction")
                                },
                                description.condition
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tr",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.prediction_market_asset.tooltip_resolution_date")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.prediction_market_asset.resolution_date" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "td",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.prediction_market_asset.tooltip_resolution_date")
                                },
                                description.expiry
                            )
                        )
                    )
                );
            }

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
            var marketFeeReferralReward = flagBooleans["charge_market_fee"] && options.extensions && options.extensions.reward_percent >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("account.user_issued_assets.reward_percent_tooltip")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.summary.market_fee_referral_reward_percent" }),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Icon"], { type: "question-circle", theme: "filled" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    " ",
                    options.extensions.reward_percent / 100.0,
                    " %"
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
                        isPrediction && predictionRows,
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
                        marketFeeReferralReward
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                this.renderFlagIndicators(flagBooleans, bitNames)
            );
        }
    }, {
        key: "renderPriceFeed",
        value: function renderPriceFeed(asset) {
            var bitAsset = asset.bitasset;
            if (!("current_feed" in bitAsset)) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { header: title });
            var currentFeed = bitAsset.current_feed;

            var feedPrice = this.formattedPrice(common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(asset));

            var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.title" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "float-right" },
                    feedPrice
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                { header: title },
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

                /**
                 * In globally settled assets the force settlement offset is 0
                 *
                 */
                var settlementPrice = this.formattedPrice(bitAsset.settlement_price);
                var revivePrice = this.formattedPrice(bitAsset.settlement_price, false, false, currentFeed.maintenance_collateral_ratio / 1000, true);

                var assets = (_assets3 = {}, _defineProperty(_assets3, this.props.asset.get("id"), this.props.asset.toJS()), _defineProperty(_assets3, this.props.backingAsset.get("id"), this.props.backingAsset.toJS()), _assets3);

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

                var bids_collateral = bids.collateral / Math.pow(10, assets[bitAsset.options.short_backing_asset].precision);

                var feedPrice = this._getFeedPrice();
                if (feedPrice) {
                    settlement_fund_collateral_ratio = current_collateral_value / feedPrice.toReal() / current_supply_value;

                    total_collateral_ratio = (current_collateral_value + bids_collateral) / feedPrice.toReal() / current_supply_value;
                }
            } else {
                /***
                 * Non Global Settlement Assets
                 */
                var globalSettlementPrice = this.getGlobalSettlementPrice();
                var globalSettlementTriggerPrice = this.getGlobalSettlementPrice(currentFeed.maximum_short_squeeze_ratio / 1000);
                var currentSettled = bitAsset.force_settled_volume;
                var settlementOffset = bitAsset.options.force_settlement_offset_percent;
                var settlementDelay = bitAsset.options.force_settlement_delay_sec;
                var maxSettlementVolume = bitAsset.options.maximum_force_settlement_volume;

                var msspPrice = this.formattedPrice(common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(asset), false, false, currentFeed.maximum_short_squeeze_ratio / 1000);
                var settlePrice = this.formattedPrice(common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(asset), false, false, 1 - settlementOffset / 10000);
            }

            var title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.settlement.title" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "float-right" },
                    isGlobalSettle ? settlementPrice : settlePrice
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                { header: title },
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
                                settlement_fund_collateral_ratio ? settlement_fund_collateral_ratio.toFixed(6) : "-"
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
                                total_collateral_ratio ? total_collateral_ratio.toFixed(6) : "-"
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.global_settlement_trigger" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                globalSettlementTriggerPrice ? globalSettlementTriggerPrice : "-"
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
            var core = this.props.coreAsset;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.title" }),
                        dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "float-right" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                asset: "1.3.0",
                                amount: dynamic.fee_pool
                            })
                        ) : null
                    )
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
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
                )
            );
        }
    }, {
        key: "renderAssetOwnerUpdate",
        value: function renderAssetOwnerUpdate(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.update_owner" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "account.user_issued_assets.update_owner_text",
                    asset: asset.symbol
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_23__["default"], {
                    asset: asset,
                    account: this.props.currentAccount,
                    currentOwner: asset.issuer
                })
            );
        }
    }, {
        key: "renderFeedPublish",
        value: function renderFeedPublish(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_publish_feed" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "explorer.asset.feed_producer_text"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetPublishFeed__WEBPACK_IMPORTED_MODULE_24__["default"], {
                    asset: asset.id,
                    account: this.props.currentAccount,
                    currentOwner: asset.issuer
                })
            );
        }
    }, {
        key: "renderCollateralBid",
        value: function renderCollateralBid(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral.bid" })
                },
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BidCollateralOperation__WEBPACK_IMPORTED_MODULE_26__["default"], {
                    asset: asset.symbol,
                    core: asset.bitasset.options.short_backing_asset,
                    funderAccountName: this.props.currentAccount,
                    onUpdate: this.updateOnCollateralBid.bind(this),
                    hideBalance: true
                })
            );
        }
    }, {
        key: "renderFeePoolFunding",
        value: function renderFeePoolFunding(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.fund" })
                },
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
            );
        }
    }, {
        key: "renderFeePoolClaiming",
        value: function renderFeePoolClaiming(asset) {
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.fee_pool.claim_balance" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    asset: asset.symbol,
                    funderAccountName: this.props.currentAccount,
                    dynamic: dynamic,
                    hideBalance: true,
                    type: "claim"
                })
            );
        }
    }, {
        key: "renderFeesClaiming",
        value: function renderFeesClaiming(asset) {
            var dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
            if (dynamic) dynamic = dynamic.toJS();
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.trxTypes.asset_claim_fees" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__["default"], {
                    asset: asset.symbol,
                    dynamic: dynamic,
                    funderAccountName: this.props.currentAccount,
                    hideBalance: true,
                    type: "claim_fees"
                })
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

            var whitelist_market_fee_sharing = asset.options.extensions.whitelist_market_fee_sharing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.accounts_in_whitelist_market_fee_sharing" }),
                ": \xA0",
                this.renderAuthorityList(asset.options.extensions.whitelist_market_fee_sharing)
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.title" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
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
                    whiteLists,
                    whitelist_market_fee_sharing
                )
            );
        }

        // the global settlement price is defined as the
        // the price at which the least collateralize short's
        // collateral no longer enough to back the debt
        // he/she owes.

    }, {
        key: "getGlobalSettlementPrice",
        value: function getGlobalSettlementPrice() {
            var mssr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

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
            //
            // Default is to return the global settlement price
            // Use mssr to calculate in when an event happens
            // based on an assets MSSR

            var debt = leastColShort.debt * mssr;
            var collateral = leastColShort.collateral;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                base_amount: collateral,
                base_asset: leastColShort.call_price.base.asset_id,
                quote_amount: debt,
                quote_asset: leastColShort.call_price.quote.asset_id
            });
        }
    }, {
        key: "_renderFeedTable",
        value: function _renderFeedTable(asset) {
            var _this6 = this;

            var bitAsset = asset.bitasset;
            if (!("feeds" in bitAsset) || bitAsset.feeds.length == 0 || bitAsset.is_prediction_market || !bitAsset.feeds.length) {
                return null;
            }

            var feeds = bitAsset.feeds;
            var feed_price_header = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(feeds[0][1][1]);
            var core_exchange_rate_header = feeds[0][1][1].core_exchange_rate;

            // Filter by valid feed lifetime, Sort by published date
            var now = new Date().getTime();
            var oldestValidDate = new Date(now - asset.bitasset.options.feed_lifetime_sec * 1000);
            feeds = feeds.filter(function (a) {
                return new Date(a[1][0]) > oldestValidDate;
            }).sort(function (feed1, feed2) {
                return new Date(feed2[1][0]) - new Date(feed1[1][0]);
            });

            var currentFeed = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(asset);
            var currentFeedPrice = currentFeed.base.amount / currentFeed.quote.amount;

            var dataSource = [];
            var columns = [];

            columns = [{
                key: "publisher",
                fixed: "left",
                width: 150,
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.publisher" }),
                dataIndex: "publisher",
                sorter: function sorter(a, b) {
                    var nameA = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(a.publisher, false);
                    if (nameA) nameA = nameA.get("name");
                    var nameB = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(b.publisher, false);
                    if (nameB) nameB = nameB.get("name");
                    if (nameA > nameB) return 1;
                    if (nameA < nameB) return -1;
                    return 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: item });
                }
            }, {
                key: "feed_price",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.feed_price" }),
                    " ",
                    "(",
                    this.formattedPrice(feed_price_header, false, true),
                    ")"
                ),
                dataIndex: "feed_price",
                sorter: function sorter(a, b) {
                    var a_price = parseFloat(a.feed_price.base.amount / a.feed_price.quote.amount);
                    var b_price = parseFloat(b.feed_price.base.amount / b.feed_price.quote.amount);

                    if (a_price > b_price) return 1;
                    if (a_price < b_price) return -1;
                    return 0;
                },
                render: function render(item) {
                    var price = parseFloat(item.base.amount / item.quote.amount);
                    var median_offset = (price / currentFeedPrice * 100 - 100).toFixed(2);
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        _this6.formattedPrice(item, true),
                        "(",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                className: median_offset > 0 ? "txtlabel success" : median_offset < 0 ? "txtlabel warning" : "txtlabel"
                            },
                            median_offset,
                            "%"
                        ),
                        ")"
                    );
                }
            }, {
                key: "core_exchange_rate",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.core_exchange_rate" }),
                    " ",
                    "(",
                    this.formattedPrice(core_exchange_rate_header, false, true),
                    ")"
                ),
                dataIndex: "core_exchange_rate",
                render: function render(item) {
                    return _this6.formattedPrice(item, true);
                }
            }, {
                key: "maintenance_collateral_ratio",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.maintenance_collateral_ratio" }),
                dataIndex: "maintenance_collateral_ratio",
                render: function render(item) {
                    return item;
                }
            }, {
                key: "maximum_short_squeeze_ratio",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.maximum_short_squeeze_ratio" }),
                dataIndex: "maximum_short_squeeze_ratio",
                render: function render(item) {
                    return item;
                }
            }, {
                key: "publishDate",
                fixed: "right",
                width: 150,
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.published" }),
                dataIndex: "publishDate",
                sorter: function sorter(a, b) {
                    if (a.publishDate.getTime() > b.publishDate.getTime()) return 1;
                    if (a.publishDate.getTime() < b.publishDate.getTime()) return -1;
                    return 0;
                },
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_10__["default"], { time: item });
                }
            }];

            for (var i = 0; i < feeds.length; i++) {
                var feed = feeds[i];
                var publisher = feed[0];
                var publishDate = new Date(feed[1][0] + "Z");
                var feed_price = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(feed[1][1]);
                var core_exchange_rate = feed[1][1].core_exchange_rate;
                var maintenance_collateral_ratio = "" + feed[1][1].maintenance_collateral_ratio / 1000;
                var maximum_short_squeeze_ratio = "" + feed[1][1].maximum_short_squeeze_ratio / 1000;

                dataSource.push({
                    publisher: publisher,
                    feed_price: feed_price,
                    core_exchange_rate: core_exchange_rate,
                    maintenance_collateral_ratio: maintenance_collateral_ratio,
                    maximum_short_squeeze_ratio: maximum_short_squeeze_ratio,
                    publishDate: publishDate
                });
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Table"], {
                style: { width: "100%" },
                rowKey: "feedPublisher",
                columns: columns,
                dataSource: dataSource,
                pagination: false,
                locale: {
                    emptyText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed_data.empty" })
                }
            });
        }
    }, {
        key: "_renderMarginTable",
        value: function _renderMarginTable() {
            var _this7 = this;

            var cumulativeGrouping = this.state.cumulativeGrouping;

            var columns = [];
            var dataSource = [];

            if (this.state.callOrders && this.state.callOrders.length > 0) {
                var cummulativeSuffix = cumulativeGrouping ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    "\xA0(",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.cumulative" }),
                    ")"
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    "\xA0\xA0\xA0\xA0\xA0\xA0"
                );

                var debt_cum = 0;
                var coll_cum = 0;

                this.state.callOrders.map(function (c) {
                    debt_cum += c.debt;
                    coll_cum += c.collateral;

                    dataSource.push({
                        borrower: c.borrower,
                        collateral: {
                            amount: cumulativeGrouping ? coll_cum : c.collateral,
                            asset: c.getCollateral().asset_id
                        },
                        debt: {
                            amount: cumulativeGrouping ? debt_cum : c.debt,
                            asset: c.amountToReceive().asset_id
                        },
                        call: c.call_price,
                        tcr: c.order.target_collateral_ratio,
                        cr: {
                            ratio: c.getRatio(),
                            status: c.getStatus()
                        }
                    });
                });
                var unitInfo = function unitInfo(key) {
                    var item = dataSource[0][key];
                    return dataSource.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        item.base ? _this7.formattedPrice(item, false, true) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            asset: item.asset,
                            amount: item.amount,
                            hide_amount: true
                        })
                    ) : null;
                };

                columns = [{
                    key: "borrower",
                    fixed: "left",
                    width: 200,
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrower" }),
                    dataIndex: "borrower",
                    sorter: function sorter(a, b) {
                        var nameA = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(a.borrower, false);
                        if (nameA) nameA = nameA.get("name");
                        var nameB = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(b.borrower, false);
                        if (nameB) nameB = nameB.get("name");
                        if (nameA > nameB) return 1;
                        if (nameA < nameB) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: item });
                    }
                }, {
                    key: "collateral",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.collateral" }),
                        cummulativeSuffix,
                        unitInfo("collateral")
                    ),
                    dataIndex: "collateral",
                    sorter: function sorter(a, b) {
                        if (a.collateral.amount > b.collateral.amount) return 1;
                        if (a.collateral.amount < b.collateral.amount) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.margin_positions.click_to_switch_to_cumulative"),
                                mouseEnterDelay: 0.5
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    onClick: _this7._toggleCumulativeGrouping.bind(_this7),
                                    style: { cursor: "pointer" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    amount: item.amount,
                                    asset: item.asset,
                                    hide_asset: true
                                })
                            )
                        );
                    }
                }, {
                    key: "debt",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrow_amount" }),
                        cummulativeSuffix,
                        unitInfo("debt")
                    ),
                    dataIndex: "debt",
                    sorter: function sorter(a, b) {
                        if (a.debt.amount > b.debt.amount) return 1;
                        if (a.debt.amount < b.debt.amount) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                onClick: _this7._toggleCumulativeGrouping.bind(_this7),
                                style: { cursor: "pointer" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.margin_positions.click_to_switch_to_cumulative"),
                                    mouseEnterDelay: 0.5
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    amount: item.amount,
                                    asset: item.asset,
                                    hide_asset: true
                                })
                            )
                        );
                    }
                }, {
                    key: "call",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.call" }),
                        unitInfo("call")
                    ),
                    dataIndex: "call",
                    render: function render(item) {
                        return _this7.formattedPrice(item, true, false);
                    }
                }, {
                    key: "tcr",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tooltip"],
                        {
                            title: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("borrow.target_collateral_ratio_explanation")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.target_collateral_ratio_short" })
                    ),
                    dataIndex: "tcr",
                    render: function render(item) {
                        return !!item ? (item / 1000).toFixed(3) : "-";
                    }
                }, {
                    key: "cr",
                    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.coll_ratio" }),
                    dataIndex: "cr",
                    fixed: "right",
                    width: 100,
                    sorter: function sorter(a, b) {
                        if (a.cr.ratio > b.cr.ratio) return 1;
                        if (a.cr.ratio < b.cr.ratio) return -1;
                        return 0;
                    },
                    render: function render(item) {
                        var classNames = "margin-ratio " + item.status;

                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: classNames },
                                item.ratio.toFixed(3)
                            )
                        );
                    }
                }];
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Table"], {
                style: { width: "100%" },
                rowKey: "feedMargins",
                columns: columns,
                dataSource: dataSource,
                rowClassName: "margin-row",
                pagination: {
                    pageSize: Number(25)
                },
                locale: {
                    emptyText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.margin_positions.empty" })
                }
            });
        }
    }, {
        key: "_renderCollBidTable",
        value: function _renderCollBidTable() {
            var columns = [];
            var dataSource = [];

            columns = [{
                key: "bidder",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.bidder" }),
                dataIndex: "bidder",
                fixed: "left",
                width: 200,
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: item });
                }
            }, {
                key: "collateral",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.collateral" }),
                dataIndex: "collateral",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: item.amount,
                        asset: item.asset_id,
                        hide_asset: true
                    });
                }
            }, {
                key: "debt",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrow_amount" }),
                dataIndex: "debt",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: item.amount,
                        asset: item.asset_id,
                        hide_asset: true
                    });
                }
            }, {
                key: "debt_cum",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.cumulative_borrow_amount" }),
                dataIndex: "debt_cum",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        amount: item.amount,
                        asset: item.asset_id,
                        hide_asset: true
                    });
                }
            }, {
                key: "price",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.bid" }),
                dataIndex: "price",
                render: function render(item) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        base_amount: item.base.amount,
                        base_asset: item.base.asset_id,
                        quote_amount: item.quote.amount,
                        quote_asset: item.quote.asset_id,
                        hide_symbols: true
                    });
                }
            }, {
                key: "cr",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.coll_ratio" }),
                dataIndex: "cr",
                render: function render(item) {
                    return item.toFixed(3);
                }
            }, {
                key: "included",
                title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "borrow.considered_on_revival" }),
                dataIndex: "included",
                render: function render(item) {
                    if (item == 2) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.included.partial" });else if (item == 1) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.included.yes" });else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.included.no" });
                }
            }];

            var debt_cum = 0;
            this.state.collateralBids.map(function (c) {
                debt_cum += c.debt;

                dataSource.push({
                    bidder: c.bidder,
                    collateral: {
                        amount: c.bid.base.amount,
                        asset: c.bid.base.asset_id
                    },
                    debt: {
                        amount: c.bid.quote.amount,
                        asset: c.bid.quote.asset_id
                    },
                    debt_cum: {
                        amount: debt_cum,
                        asset: c.bid.quote.asset_id
                    },
                    price: c.bid,
                    cr: c.getRatio(),
                    included: c.consideredIfRevived
                });
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Table"], {
                style: { width: "100%" },
                rowKey: "feedCollBid",
                columns: columns,
                dataSource: dataSource,
                pagination: {
                    pageSize: Number(25)
                },
                locale: {
                    emptyText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.collateral_bid.empty" })
                }
            });
        }
    }, {
        key: "_setFeedTab",
        value: function _setFeedTab(tab) {
            this.setState({
                activeFeedTab: tab
            });
        }
    }, {
        key: "_setAssetTab",
        value: function _setAssetTab(tab) {
            this.setState({
                activeAssetTab: tab
            });
        }
    }, {
        key: "renderFeedTables",
        value: function renderFeedTables(asset) {
            var bitAsset = asset.bitasset;
            if (!("feeds" in bitAsset) || bitAsset.feeds.length == 0 || bitAsset.is_prediction_market || !bitAsset.feeds.length) {
                return null;
            }

            var isGlobalSettlement = bitAsset.settlement_fund > 0 ? true : false;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"],
                {
                    onChange: this._setFeedTab.bind(this),
                    activeKey: this.state.activeFeedTab
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"].TabPane,
                    {
                        tab: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate(isGlobalSettlement ? "explorer.asset.collateral_bid.title" : "explorer.asset.margin_positions.title"),
                        key: "margin"
                    },
                    this.state.activeFeedTab == "margin" ? isGlobalSettlement ? this._renderCollBidTable() : this._renderMarginTable() : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"].TabPane,
                    {
                        tab: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.price_feed_data.title"),
                        key: "feed"
                    },
                    this.state.activeFeedTab == "feed" ? this._renderFeedTable(asset) : null
                )
            );
        }
    }, {
        key: "renderAssetResolvePrediction",
        value: function renderAssetResolvePrediction(asset) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Panel,
                {
                    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.user_issued_assets.resolve_prediction" })
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    component: "p",
                    content: "account.user_issued_assets.resolve_prediction_text"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetResolvePrediction__WEBPACK_IMPORTED_MODULE_25__["default"], {
                    asset: asset,
                    account: this.props.currentAccount
                })
            );
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.backingAsset === null) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_18__["default"], { subtitle: "asset_not_found_subtitle" });
            }
            if (!this.props.backingAsset.get || !this.props.coreAsset.get) {
                return null;
            }

            var asset = this.props.asset.toJS();
            var priceFeed = "bitasset" in asset ? this.renderPriceFeed(asset) : null;
            var priceFeedData = "bitasset" in asset ? this.renderFeedTables(asset) : null;

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
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"],
                            {
                                onChange: this._setAssetTab.bind(this),
                                activeKey: this.state.activeAssetTab,
                                className: "grid-block vertical"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"].TabPane,
                                {
                                    tab: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.info"),
                                    key: "info"
                                },
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
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Collapse"],
                                            { className: "asset-collapse" },
                                            this.renderPermissions(asset),
                                            this.renderFeePool(asset),
                                            priceFeed ? this.renderPriceFeed(asset) : null,
                                            priceFeed ? this.renderSettlement(asset) : null,
                                            this.state.showCollateralBidInInfo ? this.renderCollateralBid(asset) : null
                                        )
                                    )
                                ),
                                priceFeedData ? priceFeedData : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Tabs"].TabPane,
                                {
                                    tab: counterpart__WEBPACK_IMPORTED_MODULE_22___default.a.translate("explorer.asset.actions"),
                                    key: "actions"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__["Collapse"],
                                    { className: "asset-collapse" },
                                    this.renderFeePoolFunding(asset),
                                    this.renderFeePoolClaiming(asset),
                                    this.renderFeesClaiming(asset),
                                    this.renderAssetOwnerUpdate(asset),
                                    "bitasset" in asset && !asset.bitasset.is_prediction_market && this.renderFeedPublish(asset),
                                    this.state.collateralBids.length > 0 && this.renderCollateralBid(asset),
                                    "bitasset" in asset && asset.bitasset.is_prediction_market && this.renderAssetResolvePrediction(asset)
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
    propNames: ["backingAsset", "coreAsset"]
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
            if (!this.props.asset.get) {
                return null;
            }
            var backingAsset = this.props.asset.has("bitasset") ? this.props.asset.getIn(["bitasset", "options", "short_backing_asset"]) : "1.3.0";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Asset, _extends({}, this.props, {
                backingAsset: backingAsset,
                coreAsset: "1.3.0"
            }));
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

/***/ 3288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
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

/***/ 3289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(610);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2152);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2951);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2159);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2413);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2139);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(432);
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

/***/ 3290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2152);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2015);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2016);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2413);
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

/***/ 3291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2152);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2015);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2016);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2413);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2139);
/* harmony import */ var _Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3292);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2951);
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
                feedPrice: this.state.feedPrice,
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
                    onPriceChanged: this.onPriceChanged.bind(this, "feedPrice"),
                    label: "explorer.asset.price_feed.feed_price",
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

/***/ 3292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AmountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2951);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(610);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2139);
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

/***/ 3293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2016);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2015);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2413);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2138);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(432);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(610);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(594);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var AssetResolvePrediction = function (_React$Component) {
    _inherits(AssetResolvePrediction, _React$Component);

    function AssetResolvePrediction() {
        _classCallCheck(this, AssetResolvePrediction);

        var _this = _possibleConstructorReturn(this, (AssetResolvePrediction.__proto__ || Object.getPrototypeOf(AssetResolvePrediction)).call(this));

        _this.state = {
            globalSettlementPrice: null,
            customPrice: false
        };
        return _this;
    }

    _createClass(AssetResolvePrediction, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return np.asset.id !== this.props.asset.id || ns.globalSettlementPrice !== this.state.globalSettlementPrice || ns.customPrice !== this.state.customPrice;
        }
    }, {
        key: "onPriceChanged",
        value: function onPriceChanged(value) {
            if (value == 2 && !this.state.customPrice) {
                this.setState({
                    globalSettlementPrice: 1,
                    customPrice: true
                });
            } else {
                this.setState({
                    globalSettlementPrice: value
                });
            }
        }
    }, {
        key: "onPriceChangedObject",
        value: function onPriceChangedObject(value) {
            this.onPriceChanged(value.toReal());
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            var _this2 = this;

            var _props = this.props,
                asset = _props.asset,
                account = _props.account;


            var base = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["Asset"]({
                real: 1,
                asset_id: this.props.asset.id,
                precision: this.props.asset.precision
            });
            var quoteAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAsset(asset.bitasset.options.short_backing_asset);
            var quote = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["Asset"]({
                real: this.state.globalSettlementPrice,
                asset_id: this.props.asset.bitasset.options.short_backing_asset,
                precision: quoteAsset.get("precision")
            });

            var price = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["Price"]({
                quote: quote,
                base: base
            });

            actions_AssetActions__WEBPACK_IMPORTED_MODULE_4__["default"].assetGlobalSettle(asset, account.get("id"), price).then(function () {
                _this2.onReset();
            });
        }
    }, {
        key: "onReset",
        value: function onReset() {
            this.setState({
                globalSettlementPrice: null,
                customPrice: false
            });
        }
    }, {
        key: "onChange",
        value: function onChange(_ref) {
            var amount = _ref.amount;

            this.onPriceChanged(amount);
        }
    }, {
        key: "onChangeRadio",
        value: function onChangeRadio(e) {
            this.onPriceChanged(e.target.value);
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            var base = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getAsset(asset.bitasset.options.short_backing_asset);

            var description = _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__["default"].parseDescription(asset.options.description);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Form"],
                    {
                        style: { paddingBottom: "1rem" },
                        className: "full-width",
                        layout: "vertical"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.asset.prediction_market_asset.tooltip_prediction"),
                                placement: "topLeft"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "explorer.asset.prediction_market_asset.prediction" }),
                            ": ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                description.condition
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.asset.prediction_market_asset.tooltip_resolution_date"),
                                placement: "topLeft"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "explorer.asset.prediction_market_asset.resolution_date" }),
                            ": ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                description.expiry
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Radio"].Group,
                        {
                            onChange: this.onChangeRadio.bind(this),
                            value: this.state.globalSettlementPrice
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Radio"],
                            {
                                value: 1,
                                disabled: this.state.customPrice ? true : undefined
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "boolean.true" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Radio"],
                            {
                                value: 0,
                                disabled: this.state.customPrice ? true : undefined
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "boolean.false" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Radio"],
                            {
                                value: !this.state.customPrice ? 2 : this.state.globalSettlementPrice
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "settings.custom" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        disabled: this.state.customPrice ? undefined : true,
                        label: "explorer.asset.price_feed.global_settlement_price",
                        amount: this.state.globalSettlementPrice,
                        onChange: this.onChange.bind(this),
                        asset: base.get("id"),
                        base: asset.symbol,
                        isPrice: true,
                        assets: [base.get("id")],
                        placeholder: "0.0",
                        style: {
                            width: "100%"
                        }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { paddingTop: "1rem" }, className: "button-group" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                            {
                                type: "primary",
                                disabled: this.state.globalSettlementPrice == null ? true : undefined,
                                onClick: this.onSubmit.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.perm.publish_prediction" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                            {
                                style: { marginLeft: "8px" },
                                onClick: this.onReset.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.perm.reset" })
                        )
                    )
                )
            );
        }
    }]);

    return AssetResolvePrediction;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetResolvePrediction.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
};


AssetResolvePrediction = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(AssetResolvePrediction);
/* harmony default export */ __webpack_exports__["default"] = (AssetResolvePrediction);

/***/ }),

/***/ 3294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2468);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2951);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2159);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2413);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2139);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(432);
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
            var balance = 0;
            var backingBalanceID = account ? account.getIn(["balances", core.get("id")]) : null;
            if (backingBalanceID) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(backingBalanceID);
                if (balanceObject) {
                    balance = balanceObject.get("balance");
                }
            }

            var balanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { component: "span", content: "transfer.available" }),
                ":\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], { amount: balance, asset: core.get("id") })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    label: "transaction.collateral",
                    display_balance: balanceText,
                    amount: collateralAmount,
                    onChange: this._collateralBidInput.bind(this),
                    asset: core.get("id"),
                    assets: [core.get("id")],
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
                        base_asset: core.get("id"),
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
    withDynamic: true
});

/* harmony default export */ __webpack_exports__["default"] = (BidCollateralOperation);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuMDFiYTRhNDJmMTMwZjU4NzAxM2YuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQmxvY2tjaGFpbi9Bc3NldC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkVGltZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FjY291bnQvRmVlUG9vbE9wZXJhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRPd25lclVwZGF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRQdWJsaXNoRmVlZC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUHJpY2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRSZXNvbHZlUHJlZGljdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQmlkQ29sbGF0ZXJhbE9wZXJhdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XG5pbXBvcnQgTGlua1RvQXNzZXRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0Fzc2V0QnlJZFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XG5pbXBvcnQgQXNzZXRJbWFnZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldEltYWdlXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSBcIi4uL1V0aWxpdHkvVGltZUFnb1wiO1xuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEZvcm1hdHRlZFRpbWUgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkVGltZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5pbXBvcnQge0NhbGxPcmRlciwgQ29sbGF0ZXJhbEJpZCwgRmVlZFByaWNlfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCBQYWdlNDA0IGZyb20gXCIuLi9QYWdlNDA0L1BhZ2U0MDRcIjtcbmltcG9ydCBGZWVQb29sT3BlcmF0aW9uIGZyb20gXCIuLi9BY2NvdW50L0ZlZVBvb2xPcGVyYXRpb25cIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEFzc2V0T3duZXJVcGRhdGUgZnJvbSBcIi4vQXNzZXRPd25lclVwZGF0ZVwiO1xuaW1wb3J0IEFzc2V0UHVibGlzaEZlZWQgZnJvbSBcIi4vQXNzZXRQdWJsaXNoRmVlZFwiO1xuaW1wb3J0IEFzc2V0UmVzb2x2ZVByZWRpY3Rpb24gZnJvbSBcIi4vQXNzZXRSZXNvbHZlUHJlZGljdGlvblwiO1xuaW1wb3J0IEJpZENvbGxhdGVyYWxPcGVyYXRpb24gZnJvbSBcIi4vQmlkQ29sbGF0ZXJhbE9wZXJhdGlvblwiO1xuaW1wb3J0IHtUb29sdGlwLCBJY29uLCBUYWJsZSwgVGFicywgQ29sbGFwc2V9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmNvbnN0IHtQYW5lbH0gPSBDb2xsYXBzZTtcblxuY2xhc3MgQXNzZXRGbGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7aXNTZXQsIG5hbWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFpc1NldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFzc2V0LWZsYWdcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5cIiArIG5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBBc3NldFBlcm1pc3Npb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpc1NldCwgbmFtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghaXNTZXQpIHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhc3NldC1mbGFnXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMuXCIgKyBuYW1lfSAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIEFzc2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYWxsT3JkZXJzOiBbXSxcbiAgICAgICAgICAgIGNvbGxhdGVyYWxCaWRzOiBbXSxcbiAgICAgICAgICAgIG1hcmdpblRhYmxlU29ydDogXCJyYXRpb1wiLFxuICAgICAgICAgICAgY29sbGF0ZXJhbFRhYmxlU29ydDogXCJwcmljZVwiLFxuICAgICAgICAgICAgc29ydERpcmVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dDb2xsYXRlcmFsQmlkSW5JbmZvOiBmYWxzZSxcbiAgICAgICAgICAgIGN1bXVsYXRpdmVHcm91cGluZzogZmFsc2UsXG4gICAgICAgICAgICBhY3RpdmVGZWVkVGFiOiBcIm1hcmdpblwiLFxuICAgICAgICAgICAgYWN0aXZlQXNzZXRUYWI6IFwiaW5mb1wiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXRNYXJnaW5Db2xsYXRlcmFsKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlT25Db2xsYXRlcmFsQmlkKCkge1xuICAgICAgICB0aGlzLl9nZXRNYXJnaW5Db2xsYXRlcmFsKCk7XG4gICAgfVxuXG4gICAgX2dldE1hcmdpbkNvbGxhdGVyYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSB7XG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmFzc2V0LnRvSlMoKSxcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICApXTogdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQudG9KUygpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFxuICAgICAgICAgICAgICAgIFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0sXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBmZWVkUHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcblxuICAgICAgICAgICAgaWYgKCEhZmVlZFByaWNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1jciA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9jYWxsX29yZGVyc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjYWxsX29yZGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxPcmRlcnMgPSBjYWxsX29yZGVycy5tYXAoYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2FsbE9yZGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtY3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjYWxsT3JkZXJzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9jb2xsYXRlcmFsX2JpZHNcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjb2xsX29yZGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWxCaWRzID0gY29sbF9vcmRlcnMubWFwKGMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbGxhdGVyYWxCaWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxhdGVyYWxCaWRzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0X2NvbGxhdGVyYWxfYmlkcyBFcnJvcjogXCIsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXTogdGhpcy5wcm9wcy5hc3NldC50b0pTKCksXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC50b0pTKClcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFxuICAgICAgICAgICAgW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGxldCBzcXIgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFtcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGxldCBmZWVkUHJpY2VSYXcgPSBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UodGhpcy5wcm9wcy5hc3NldCk7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaGFzIGJlZW4gbm8gZmVlZCBwcmljZSwgc2V0dGxlUHJpY2UgaGFzIDAgYW1vdW50XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGZlZWRQcmljZVJhdy5nZXRJbihbXCJiYXNlXCIsIFwiYW1vdW50XCJdKSA9PSAwICYmXG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcuZ2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0pID09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmZWVkUHJpY2U7XG5cbiAgICAgICAgLyogUHJlZGljdGlvbiBtYXJrZXRzIGRvbid0IG5lZWQgZmVlZHMgZm9yIHNob3J0aW5nLCBzbyB0aGUgc2V0dGxlbWVudCBwcmljZSBjYW4gYmUgc2V0IHRvIDE6MSAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXQgJiZcbiAgICAgICAgICAgIGZlZWRQcmljZVJhdy5nZXRJbihbXCJiYXNlXCIsIFwiYXNzZXRfaWRcIl0pID09PVxuICAgICAgICAgICAgICAgIGZlZWRQcmljZVJhdy5nZXRJbihbXCJxdW90ZVwiLCBcImFzc2V0X2lkXCJdKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghYXNzZXRzW3RoaXMucHJvcHMuYmFja2luZ0Fzc2V0LmdldChcImlkXCIpXSkge1xuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmVlZFByaWNlUmF3ID0gZmVlZFByaWNlUmF3LnNldEluKFtcImJhc2VcIiwgXCJhbW91bnRcIl0sIDEpO1xuICAgICAgICAgICAgZmVlZFByaWNlUmF3ID0gZmVlZFByaWNlUmF3LnNldEluKFxuICAgICAgICAgICAgICAgIFtcImJhc2VcIiwgXCJhc3NldF9pZFwiXSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZlZWRQcmljZVJhdyA9IGZlZWRQcmljZVJhdy5zZXRJbihbXCJxdW90ZVwiLCBcImFtb3VudFwiXSwgMSk7XG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcgPSBmZWVkUHJpY2VSYXcuc2V0SW4oXG4gICAgICAgICAgICAgICAgW1wicXVvdGVcIiwgXCJhc3NldF9pZFwiXSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3FyID0gMTAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhdGNoIEludmFsaWQgU2V0dGxlUHJpY2Ugb2JqZWN0XG4gICAgICAgIGlmIChmZWVkUHJpY2VSYXcudG9KUykge1xuICAgICAgICAgICAgbGV0IHNldHRsZU9iamVjdCA9IGZlZWRQcmljZVJhdy50b0pTKCk7XG4gICAgICAgICAgICBpZiAoIWFzc2V0c1tzZXR0bGVPYmplY3QuYmFzZS5hc3NldF9pZF0pIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZlZWRQcmljZSA9IG5ldyBGZWVkUHJpY2Uoe1xuICAgICAgICAgICAgcHJpY2VPYmplY3Q6IGZlZWRQcmljZVJhdyxcbiAgICAgICAgICAgIG1hcmtldF9iYXNlOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgc3FyLFxuICAgICAgICAgICAgYXNzZXRzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmZWVkUHJpY2U7XG4gICAgfVxuXG4gICAgX3RvZ2dsZUN1bXVsYXRpdmVHcm91cGluZygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdW11bGF0aXZlR3JvdXBpbmc6ICF0aGlzLnN0YXRlLmN1bXVsYXRpdmVHcm91cGluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfYXNzZXRUeXBlKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBcImJpdGFzc2V0XCIgaW4gYXNzZXRcbiAgICAgICAgICAgID8gYXNzZXQuYml0YXNzZXQuaXNfcHJlZGljdGlvbl9tYXJrZXRcbiAgICAgICAgICAgICAgICA/IFwiUHJlZGljdGlvblwiXG4gICAgICAgICAgICAgICAgOiBcIlNtYXJ0XCJcbiAgICAgICAgICAgIDogXCJTaW1wbGVcIjtcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRQcmljZShcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGhpZGVfc3ltYm9scyA9IGZhbHNlLFxuICAgICAgICBoaWRlX3ZhbHVlID0gZmFsc2UsXG4gICAgICAgIGZhY3RvciA9IDAsXG4gICAgICAgIG5lZ2F0aXZlX2ludmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJpY2UgPT0gXCJudW1iZXJcIiAmJiBpc05hTihwcmljZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmFzZSA9IHByaWNlLmJhc2U7XG4gICAgICAgIHZhciBxdW90ZSA9IHByaWNlLnF1b3RlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2Jhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2Jhc2UuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtxdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgIGhpZGVfdmFsdWU9e2hpZGVfdmFsdWV9XG4gICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzPXtoaWRlX3N5bWJvbHN9XG4gICAgICAgICAgICAgICAgZmFjdG9yPXtmYWN0b3J9XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVfaW52ZXJ0PXtuZWdhdGl2ZV9pbnZlcnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZsYWdJbmRpY2F0b3JzKGZsYWdzLCBuYW1lcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bmFtZXMubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0RmxhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGZsYWdfJHtuYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NldD17ZmxhZ3NbbmFtZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGVybWlzc2lvbkluZGljYXRvcnMocGVybWlzc2lvbnMsIG5hbWVzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtuYW1lcy5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRQZXJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcGVybV8ke25hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2V0PXtwZXJtaXNzaW9uc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJBdXRob3JpdHlMaXN0KGF1dGhvcml0aWVzKSB7XG4gICAgICAgIHJldHVybiBhdXRob3JpdGllcy5tYXAoZnVuY3Rpb24oYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YXV0aG9yaXR5fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2F1dGhvcml0eX0gLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWFya2V0TGlzdChhc3NldCwgbWFya2V0cykge1xuICAgICAgICB2YXIgc3ltYm9sID0gYXNzZXQuc3ltYm9sO1xuICAgICAgICByZXR1cm4gbWFya2V0cy5tYXAoXG4gICAgICAgICAgICBmdW5jdGlvbihtYXJrZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFya2V0ID09IHN5bWJvbCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldElEID0gbWFya2V0ICsgXCJfXCIgKyBzeW1ib2w7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldE5hbWUgPSBtYXJrZXQgKyBcIi9cIiArIHN5bWJvbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e21hcmtldElEfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke21hcmtldElEfWB9PnttYXJrZXROYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckFib3V0Qm94KGFzc2V0LCBvcmlnaW5hbEFzc2V0KSB7XG4gICAgICAgIHZhciBpc3N1ZXIgPSBDaGFpblN0b3JlLmdldE9iamVjdChhc3NldC5pc3N1ZXIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHZhciBpc3N1ZXJOYW1lID0gaXNzdWVyID8gaXNzdWVyLmdldChcIm5hbWVcIikgOiBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCA8YSB0byBhbnkgbGlua3MgaW5jbHVkZWQgaW4gdGhlIGRlc2NyaXB0aW9uXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRlc2MgPSBkZXNjcmlwdGlvbi5tYWluO1xuICAgICAgICBsZXQgc2hvcnRfbmFtZSA9IGRlc2NyaXB0aW9uLnNob3J0X25hbWUgPyBkZXNjcmlwdGlvbi5zaG9ydF9uYW1lIDogbnVsbDtcblxuICAgICAgICBsZXQgdXJsVGVzdCA9IC8oaHR0cD8pOlxcL1xcLyh3d3dcXC4pP1thLXowLTlcXC46XS4qPyg/PVxccykvZztcblxuICAgICAgICAvLyBSZWdleHAgbmVlZHMgYSB3aGl0ZXNwYWNlIGFmdGVyIGEgdXJsLCBzbyBhZGQgb25lIHRvIG1ha2Ugc3VyZVxuICAgICAgICBkZXNjID0gZGVzYyAmJiBkZXNjLmxlbmd0aCA+IDAgPyBkZXNjICsgXCIgXCIgOiBkZXNjO1xuICAgICAgICBsZXQgdXJscyA9IGRlc2MubWF0Y2godXJsVGVzdCk7XG5cbiAgICAgICAgLy8gQWRkIG1hcmtldCBsaW5rXG4gICAgICAgIGNvbnN0IGNvcmVfYXNzZXQgPSB0aGlzLnByb3BzLmNvcmVBc3NldDtcbiAgICAgICAgY29uc3QgY29yZV9hc3NldF9zeW1ib2wgPSBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgbGV0IHByZWZlcnJlZE1hcmtldCA9IGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgIDogY29yZV9hc3NldF9zeW1ib2w7XG4gICAgICAgIGlmIChhc3NldC5iaXRhc3NldCkge1xuICAgICAgICAgICAgcHJlZmVycmVkTWFya2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcbiAgICAgICAgICAgICAgICBhc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoISFwcmVmZXJyZWRNYXJrZXQgJiYgcHJlZmVycmVkTWFya2V0LmdldCkge1xuICAgICAgICAgICAgICAgIHByZWZlcnJlZE1hcmtldCA9IHByZWZlcnJlZE1hcmtldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZWZlcnJlZE1hcmtldCA9IGNvcmVfYXNzZXRfc3ltYm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhc3NldC5zeW1ib2wgPT09IGNvcmVfYXNzZXRfc3ltYm9sKSBwcmVmZXJyZWRNYXJrZXQgPSBcIlVTRFwiO1xuICAgICAgICBpZiAodXJscyAmJiB1cmxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdXJscy5mb3JFYWNoKHVybCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1hcmtkb3duVXJsID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZXh0ZXJuYWwtbGlua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiJHt1cmx9XCI+JHt1cmx9PC9hPmA7XG4gICAgICAgICAgICAgICAgZGVzYyA9IGRlc2MucmVwbGFjZSh1cmwsIG1hcmtkb3duVXJsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHtuYW1lLCBwcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUob3JpZ2luYWxBc3NldCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX0+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtzaG9ydF9uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5SaWdodDogMTV9fT57c2hvcnRfbmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG1hcmtldC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7YXNzZXQuc3ltYm9sfV8ke3ByZWZlcnJlZE1hcmtldH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tYXJrZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtcImFzc2V0cy9cIiArIGFzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgYWx0X3BhdGg9XCJhc3NldHMvQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uPVwic3VtbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbD17KHByZWZpeCB8fCBcIlwiKSArIG5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjfVxuICAgICAgICAgICAgICAgICAgICBpc3N1ZXI9e2lzc3Vlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVfaXNzdWVyPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlclN1bW1hcnkoYXNzZXQpIHtcbiAgICAgICAgLy8gVE9ETzogY29uZmlkZW50aWFsX3N1cHBseTogMCBVU0QgICBbSUYgTk9UIFpFUk8gT1IgTk9UIERJU0FCTEUgQ09ORklERU5USUFMXVxuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xuICAgICAgICBpZiAoZHluYW1pYykgZHluYW1pYyA9IGR5bmFtaWMudG9KUygpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFzc2V0Lm9wdGlvbnM7XG5cbiAgICAgICAgbGV0IGZsYWdCb29sZWFucyA9IGFzc2V0VXRpbHMuZ2V0RmxhZ0Jvb2xlYW5zKFxuICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5mbGFncyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuaGFzKFwiYml0YXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBiaXROYW1lcyA9IE9iamVjdC5rZXlzKGZsYWdCb29sZWFucyk7XG5cbiAgICAgICAgbGV0IGlzUHJlZGljdGlvbiA9XG4gICAgICAgICAgICBcImJpdGFzc2V0XCIgaW4gYXNzZXQgJiYgYXNzZXQuYml0YXNzZXQuaXNfcHJlZGljdGlvbl9tYXJrZXQ7XG4gICAgICAgIGxldCBwcmVkaWN0aW9uUm93cyA9IG51bGw7XG4gICAgICAgIGlmIChpc1ByZWRpY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJlZGljdGlvblJvd3MgPSAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9wcmVkaWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnByZWRpY3Rpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9wcmVkaWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbi5jb25kaXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnRvb2x0aXBfcmVzb2x1dGlvbl9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnJlc29sdXRpb25fZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC50b29sdGlwX3Jlc29sdXRpb25fZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24uZXhwaXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3VycmVudFN1cHBseSA9IGR5bmFtaWMgPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LmN1cnJlbnRfc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWMuY3VycmVudF9zdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHZhciBzdGVhbHRoU3VwcGx5ID0gZHluYW1pYyA/IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuc3RlYWx0aF9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pYy5jb25maWRlbnRpYWxfc3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICB2YXIgbWFya2V0RmVlID0gZmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5Lm1hcmtldF9mZWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7b3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgLyAxMDAuMH0gJSA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgLy8gb3B0aW9ucy5tYXhfbWFya2V0X2ZlZSBpbml0aWFsbHkgYSBzdHJpbmdcbiAgICAgICAgdmFyIG1hcmtldEZlZVJlZmVycmFsUmV3YXJkID1cbiAgICAgICAgICAgIGZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdICYmXG4gICAgICAgICAgICBvcHRpb25zLmV4dGVuc2lvbnMgJiZcbiAgICAgICAgICAgIG9wdGlvbnMuZXh0ZW5zaW9ucy5yZXdhcmRfcGVyY2VudCA+PSAwID8gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnJld2FyZF9wZXJjZW50X3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlX3JlZmVycmFsX3Jld2FyZF9wZXJjZW50XCIvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwicXVlc3Rpb24tY2lyY2xlXCIgdGhlbWU9XCJmaWxsZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ge29wdGlvbnMuZXh0ZW5zaW9ucy5yZXdhcmRfcGVyY2VudCAvIDEwMC4wfSAlPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXthc3NldC5zeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LmFzc2V0X3R5cGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7dGhpcy5fYXNzZXRUeXBlKGFzc2V0KX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNQcmVkaWN0aW9uICYmIHByZWRpY3Rpb25Sb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5pc3N1ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17YXNzZXQuaXNzdWVyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLnByZWNpc2lvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHthc3NldC5wcmVjaXNpb259IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0LmJpdGFzc2V0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLmJhY2tpbmdfYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQXNzZXRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5iaXRhc3NldC5vcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvcnRfYmFja2luZ19hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RlYWx0aFN1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0RmVlUmVmZXJyYWxSZXdhcmR9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGbGFnSW5kaWNhdG9ycyhmbGFnQm9vbGVhbnMsIGJpdE5hbWVzKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlclByaWNlRmVlZChhc3NldCkge1xuICAgICAgICB2YXIgYml0QXNzZXQgPSBhc3NldC5iaXRhc3NldDtcbiAgICAgICAgaWYgKCEoXCJjdXJyZW50X2ZlZWRcIiBpbiBiaXRBc3NldCkpIHJldHVybiA8ZGl2IGhlYWRlcj17dGl0bGV9IC8+O1xuICAgICAgICB2YXIgY3VycmVudEZlZWQgPSBiaXRBc3NldC5jdXJyZW50X2ZlZWQ7XG5cbiAgICAgICAgdmFyIGZlZWRQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UoYXNzZXQpXG4gICAgICAgICk7XG5cbiAgICAgICAgdmFyIHRpdGxlID0gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPntmZWVkUHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfT5cbiAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjEuMnJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZXh0ZXJuYWxfZmVlZF9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZlZWRQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZmVlZF9saWZldGltZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiaXRBc3NldC5vcHRpb25zLmZlZWRfbGlmZXRpbWVfc2VjIC8gNjAgLyA2MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWluX2ZlZWRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Yml0QXNzZXQub3B0aW9ucy5taW5pbXVtX2ZlZWRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRGZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvIC8gMTAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfYW5hbHl6ZUJpZHMoc2V0dGxlbWVudF9mdW5kX2RlYnQpIHtcbiAgICAgICAgLy8gQ29udmVydCBzdXBwbHkgdG8gY2FsY3VsYWJsZSB2YWx1ZXNcbiAgICAgICAgbGV0IGN1cnJlbnRfc3VwcGx5X3ZhbHVlID0gc2V0dGxlbWVudF9mdW5kX2RlYnQ7XG5cbiAgICAgICAgbGV0IGJpZHNfY29sbGF0ZXJhbF92YWx1ZSA9IDA7XG4gICAgICAgIGxldCBiaWRzX2RlYnRfdmFsdWUgPSAwO1xuXG4gICAgICAgIGxldCBzb3J0ZWRfYmlkcyA9IHRoaXMuc3RhdGUuY29sbGF0ZXJhbEJpZHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGIuYmlkLnRvUmVhbCgpIC0gYS5iaWQudG9SZWFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvcnRlZF9iaWRzLmZvckVhY2goYmlkID0+IHtcbiAgICAgICAgICAgIGxldCBjb2xsYXRlcmFsID0gYmlkLmNvbGxhdGVyYWw7XG4gICAgICAgICAgICBsZXQgZGVidCA9IGJpZC5kZWJ0O1xuICAgICAgICAgICAgaWYgKGJpZHNfZGVidF92YWx1ZSA8IGN1cnJlbnRfc3VwcGx5X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpZHNfZGVidF92YWx1ZSArIGRlYnQgPj0gY3VycmVudF9zdXBwbHlfdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidCA9IGN1cnJlbnRfc3VwcGx5X3ZhbHVlIC0gYmlkc19kZWJ0X3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsID0gKGRlYnQgLyBiaWQuZGVidCkgKiBjb2xsYXRlcmFsO1xuICAgICAgICAgICAgICAgICAgICBiaWQuY29uc2lkZXJlZElmUmV2aXZlZCA9IDI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmlkLmNvbnNpZGVyZWRJZlJldml2ZWQgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiaWRzX2NvbGxhdGVyYWxfdmFsdWUgPSBiaWRzX2NvbGxhdGVyYWxfdmFsdWUgKyBjb2xsYXRlcmFsO1xuICAgICAgICAgICAgICAgIGJpZHNfZGVidF92YWx1ZSA9IGJpZHNfZGVidF92YWx1ZSArIGRlYnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpZC5jb25zaWRlcmVkSWZSZXZpdmVkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IGJpZHNfY29sbGF0ZXJhbF92YWx1ZSxcbiAgICAgICAgICAgIGRlYnQ6IGJpZHNfZGVidF92YWx1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlclNldHRsZW1lbnQoYXNzZXQpIHtcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XG4gICAgICAgIGlmICghKFwiY3VycmVudF9mZWVkXCIgaW4gYml0QXNzZXQpKSByZXR1cm4gPGRpdiBoZWFkZXI9e3RpdGxlfSAvPjtcblxuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xuICAgICAgICBpZiAoZHluYW1pYykgZHluYW1pYyA9IGR5bmFtaWMudG9KUygpO1xuICAgICAgICB2YXIgY3VycmVudFN1cHBseSA9IGR5bmFtaWMgPyBkeW5hbWljLmN1cnJlbnRfc3VwcGx5IDogMDtcblxuICAgICAgICB2YXIgY3VycmVudEZlZWQgPSBiaXRBc3NldC5jdXJyZW50X2ZlZWQ7XG4gICAgICAgIHZhciBpc0dsb2JhbFNldHRsZSA9IGFzc2V0LmJpdGFzc2V0LnNldHRsZW1lbnRfZnVuZCA+IDAgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IHNldHRsZW1lbnRfZnVuZF9jb2xsYXRlcmFsX3JhdGlvID0gbnVsbDtcbiAgICAgICAgbGV0IHRvdGFsX2NvbGxhdGVyYWxfcmF0aW8gPSBudWxsO1xuICAgICAgICBsZXQgcmV2aXZlX3ByaWNlX3dpdGhfYmlkcyA9IG51bGw7XG5cbiAgICAgICAgaWYgKGlzR2xvYmFsU2V0dGxlKSB7XG4gICAgICAgICAgICAvKioqXG4gICAgICAgICAgICAgKiBHbG9iYWwgU2V0dGxlZCBBc3NldHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnRGdW5kID0gYml0QXNzZXQuc2V0dGxlbWVudF9mdW5kO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluIGdsb2JhbGx5IHNldHRsZWQgYXNzZXRzIHRoZSBmb3JjZSBzZXR0bGVtZW50IG9mZnNldCBpcyAwXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgc2V0dGxlbWVudFByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICBiaXRBc3NldC5zZXR0bGVtZW50X3ByaWNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIHJldml2ZVByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICBiaXRBc3NldC5zZXR0bGVtZW50X3ByaWNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRGZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gLyAxMDAwLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV06IHRoaXMucHJvcHMuYXNzZXQudG9KUygpLFxuICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIlxuICAgICAgICAgICAgICAgICldOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC50b0pTKClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgc3VwcGx5IHRvIGNhbGN1bGFibGUgdmFsdWVzXG4gICAgICAgICAgICBsZXQgY3VycmVudF9zdXBwbHlfdmFsdWUgPSBjdXJyZW50U3VwcGx5O1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfY29sbGF0ZXJhbF92YWx1ZSA9IGJpdEFzc2V0LnNldHRsZW1lbnRfZnVuZDtcblxuICAgICAgICAgICAgbGV0IGJpZHMgPSB0aGlzLl9hbmFseXplQmlkcyhjdXJyZW50X3N1cHBseV92YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldml2ZV9wcmljZV93aXRoX2JpZHMgPSAoXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtiaXRBc3NldC5zZXR0bGVtZW50X2Z1bmQgLyAxICsgYmlkcy5jb2xsYXRlcmFsfSAvLyAvMSBpcyBpbXBsaWNpdCB0eXBlIGNvbnZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17YXNzZXRzW2JpdEFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldF0uaWR9XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17Ymlkcy5kZWJ0fVxuICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVfdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBoaWRlX3N5bWJvbHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBmYWN0b3I9e2N1cnJlbnRGZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gLyAxMDAwfVxuICAgICAgICAgICAgICAgICAgICBuZWdhdGl2ZV9pbnZlcnQ9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRfc3VwcGx5X3ZhbHVlID1cbiAgICAgICAgICAgICAgICBjdXJyZW50X3N1cHBseV92YWx1ZSAvIE1hdGgucG93KDEwLCBhc3NldC5wcmVjaXNpb24pO1xuICAgICAgICAgICAgY3VycmVudF9jb2xsYXRlcmFsX3ZhbHVlID1cbiAgICAgICAgICAgICAgICBjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgL1xuICAgICAgICAgICAgICAgIE1hdGgucG93KFxuICAgICAgICAgICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzW2JpdEFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldF0ucHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGJpZHNfY29sbGF0ZXJhbCA9XG4gICAgICAgICAgICAgICAgYmlkcy5jb2xsYXRlcmFsIC9cbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhcbiAgICAgICAgICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0c1tiaXRBc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRdLnByZWNpc2lvblxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBmZWVkUHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcbiAgICAgICAgICAgIGlmIChmZWVkUHJpY2UpIHtcbiAgICAgICAgICAgICAgICBzZXR0bGVtZW50X2Z1bmRfY29sbGF0ZXJhbF9yYXRpbyA9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfY29sbGF0ZXJhbF92YWx1ZSAvXG4gICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZS50b1JlYWwoKSAvXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfc3VwcGx5X3ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdG90YWxfY29sbGF0ZXJhbF9yYXRpbyA9XG4gICAgICAgICAgICAgICAgICAgIChjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgKyBiaWRzX2NvbGxhdGVyYWwpIC9cbiAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlLnRvUmVhbCgpIC9cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9zdXBwbHlfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKioqXG4gICAgICAgICAgICAgKiBOb24gR2xvYmFsIFNldHRsZW1lbnQgQXNzZXRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBnbG9iYWxTZXR0bGVtZW50UHJpY2UgPSB0aGlzLmdldEdsb2JhbFNldHRsZW1lbnRQcmljZSgpO1xuICAgICAgICAgICAgdmFyIGdsb2JhbFNldHRsZW1lbnRUcmlnZ2VyUHJpY2UgPSB0aGlzLmdldEdsb2JhbFNldHRsZW1lbnRQcmljZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gLyAxMDAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZXR0bGVkID0gYml0QXNzZXQuZm9yY2Vfc2V0dGxlZF92b2x1bWU7XG4gICAgICAgICAgICB2YXIgc2V0dGxlbWVudE9mZnNldCA9XG4gICAgICAgICAgICAgICAgYml0QXNzZXQub3B0aW9ucy5mb3JjZV9zZXR0bGVtZW50X29mZnNldF9wZXJjZW50O1xuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnREZWxheSA9IGJpdEFzc2V0Lm9wdGlvbnMuZm9yY2Vfc2V0dGxlbWVudF9kZWxheV9zZWM7XG4gICAgICAgICAgICB2YXIgbWF4U2V0dGxlbWVudFZvbHVtZSA9XG4gICAgICAgICAgICAgICAgYml0QXNzZXQub3B0aW9ucy5tYXhpbXVtX2ZvcmNlX3NldHRsZW1lbnRfdm9sdW1lO1xuXG4gICAgICAgICAgICB2YXIgbXNzcFByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UoYXNzZXQpLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRGZWVkLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyAvIDEwMDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB2YXIgc2V0dGxlUHJpY2UgPSB0aGlzLmZvcm1hdHRlZFByaWNlKFxuICAgICAgICAgICAgICAgIGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShhc3NldCksXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgMSAtIHNldHRsZW1lbnRPZmZzZXQgLyAxMDAwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aXRsZSA9IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC50aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAge2lzR2xvYmFsU2V0dGxlID8gc2V0dGxlbWVudFByaWNlIDogc2V0dGxlUHJpY2V9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbCBoZWFkZXI9e3RpdGxlfT5cbiAgICAgICAgICAgICAgICB7aXNHbG9iYWxTZXR0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpc0dsb2JhbFNldHRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19yZXZpdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19zZWVfYWN0aW9uc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAsICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19vclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb2xsYXRlcmFsQmlkSW5JbmZvOiAhdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93Q29sbGF0ZXJhbEJpZEluSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfcGxhY2VfYmlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXNHbG9iYWxTZXR0bGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZW1lbnRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3NldHRsZW1lbnRQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZW1lbnRfZnVuZHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdEFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3NldHRsZW1lbnRGdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5zZXR0bGVtZW50X2Z1bmRzX2NvbGxhdGVyYWxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2V0dGxlbWVudF9mdW5kX2NvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNldHRsZW1lbnRfZnVuZF9jb2xsYXRlcmFsX3JhdGlvLnRvRml4ZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX3JldmVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19hdXRvX3Jldml2ZV9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXZpdmVQcmljZX0gLyB7cmV2aXZlX3ByaWNlX3dpdGhfYmlkc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX2NvbGxhdGVyYWxfdmFsdWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtY3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbF9jb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0b3RhbF9jb2xsYXRlcmFsX3JhdGlvLnRvRml4ZWQoNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21zc3BQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmdsb2JhbF9zZXR0bGVtZW50X3RyaWdnZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2xvYmFsU2V0dGxlbWVudFRyaWdnZXJQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZ2xvYmFsU2V0dGxlbWVudFRyaWdnZXJQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZ2xvYmFsX3NldHRsZW1lbnRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2xvYmFsU2V0dGxlbWVudFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBnbG9iYWxTZXR0bGVtZW50UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZm9yY2Vfc2V0dGxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgKHtzZXR0bGVtZW50T2Zmc2V0IC8gMTAwfSV7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50Lm9mZnNldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c2V0dGxlUHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5kZWxheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRUaW1lIHRpbWU9e3NldHRsZW1lbnREZWxheX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5tYXhfc2V0dGxlX3ZvbHVtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF4U2V0dGxlbWVudFZvbHVtZSAvIDEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3VwcGx5ICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1heFNldHRsZW1lbnRWb2x1bWUgLyAxMDAwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmN1cnJlbnRfc2V0dGxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2N1cnJlbnRTZXR0bGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5zZXR0bGVfcmVtYWluaW5nX3ZvbHVtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2V0dGxlZCA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50U2V0dGxlZCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFN1cHBseSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1heFNldHRsZW1lbnRWb2x1bWUgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMCkpKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZlZVBvb2woYXNzZXQpIHtcbiAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkKTtcbiAgICAgICAgaWYgKGR5bmFtaWMpIGR5bmFtaWMgPSBkeW5hbWljLnRvSlMoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhc3NldC5vcHRpb25zO1xuICAgICAgICBjb25zdCBjb3JlID0gdGhpcy5wcm9wcy5jb3JlQXNzZXQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbFxuICAgICAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC50aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pYyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmZlZV9wb29sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wucG9vbF90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2FmZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcmU9e2NvcmUuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMS4ycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jb3JlX2V4Y2hhbmdlX3JhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wucG9vbF9iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWMuZmVlX3Bvb2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC51bmNsYWltZWRfaXNzdWVyX2luY29tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pYy5hY2N1bXVsYXRlZF9mZWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyQXNzZXRPd25lclVwZGF0ZShhc3NldCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMudXBkYXRlX293bmVyXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnVwZGF0ZV9vd25lcl90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxBc3NldE93bmVyVXBkYXRlXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE93bmVyPXthc3NldC5pc3N1ZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlZFB1Ymxpc2goYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbFxuICAgICAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X3B1Ymxpc2hfZmVlZFwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVkX3Byb2R1Y2VyX3RleHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEFzc2V0UHVibGlzaEZlZWRcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3duZXI9e2Fzc2V0Lmlzc3Vlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJDb2xsYXRlcmFsQmlkKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBoZWFkZXI9ezxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWwuYmlkXCIgLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWwuYmlkX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19pbmNsdWRlZF9vbl9yZXZpdmFsXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWwucmVtb3ZlX2JpZFwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxCaWRDb2xsYXRlcmFsT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIGNvcmU9e2Fzc2V0LmJpdGFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXt0aGlzLnVwZGF0ZU9uQ29sbGF0ZXJhbEJpZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBoaWRlQmFsYW5jZVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZlZVBvb2xGdW5kaW5nKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBoZWFkZXI9ezxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmZ1bmRcIiAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuZnVuZF90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGZWVQb29sT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmRlckFjY291bnROYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBoaWRlQmFsYW5jZVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZlZVBvb2xDbGFpbWluZyhhc3NldCkge1xuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xuICAgICAgICBpZiAoZHluYW1pYykgZHluYW1pYyA9IGR5bmFtaWMudG9KUygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY2xhaW1fYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGZWVQb29sT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmRlckFjY291bnROYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljPXtkeW5hbWljfVxuICAgICAgICAgICAgICAgICAgICBoaWRlQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2xhaW1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZlZXNDbGFpbWluZyhhc3NldCkge1xuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xuICAgICAgICBpZiAoZHluYW1pYykgZHluYW1pYyA9IGR5bmFtaWMudG9KUygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24udHJ4VHlwZXMuYXNzZXRfY2xhaW1fZmVlc1wiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGZWVQb29sT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWM9e2R5bmFtaWN9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmRlckFjY291bnROYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBoaWRlQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2xhaW1fZmVlc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogQmxhY2tsaXN0IEF1dGhvcml0aWVzOiA8QWNjb3VudCBsaXN0IGxpa2UgVm90aW5nPlxuICAgIC8vIFRPRE86IEJsYWNrbGlzdCBNYXJrZXQ6IEJhc2UvTWFya2V0LCBCYXNlL01hcmtldFxuICAgIHJlbmRlclBlcm1pc3Npb25zKGFzc2V0KSB7XG4gICAgICAgIC8vdmFyIGR5bmFtaWMgPSBhc3NldC5keW5hbWljO1xuXG4gICAgICAgIHZhciBvcHRpb25zID0gYXNzZXQub3B0aW9ucztcblxuICAgICAgICBsZXQgcGVybWlzc2lvbkJvb2xlYW5zID0gYXNzZXRVdGlscy5nZXRGbGFnQm9vbGVhbnMoXG4gICAgICAgICAgICBhc3NldC5vcHRpb25zLmlzc3Vlcl9wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuaGFzKFwiYml0YXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBiaXROYW1lcyA9IE9iamVjdC5rZXlzKHBlcm1pc3Npb25Cb29sZWFucyk7XG5cbiAgICAgICAgLy8gb3B0aW9ucy5ibGFja2xpc3RfYXV0aG9yaXRpZXMgPSBbXCIxLjIuM1wiLCBcIjEuMi40XCJdO1xuICAgICAgICAvLyBvcHRpb25zLndoaXRlbGlzdF9hdXRob3JpdGllcyA9IFtcIjEuMi4xXCIsIFwiMS4yLjJcIl07XG4gICAgICAgIC8vIG9wdGlvbnMuYmxhY2tsaXN0X21hcmtldHMgPSBbXCJKUFlcIiwgXCJSVUJcIl07XG4gICAgICAgIC8vIG9wdGlvbnMud2hpdGVsaXN0X21hcmtldHMgPSBbXCJVU0RcIiwgXCJFVVJcIiwgXCJHT0xEXCJdO1xuXG4gICAgICAgIC8vIG9wdGlvbnMubWF4X21hcmtldF9mZWUgaW5pdGlhbGx5IGEgc3RyaW5nXG4gICAgICAgIHZhciBtYXhNYXJrZXRGZWUgPSBwZXJtaXNzaW9uQm9vbGVhbnNbXCJjaGFyZ2VfbWFya2V0X2ZlZVwiXSA/IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLm1heF9tYXJrZXRfZmVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9eytvcHRpb25zLm1heF9tYXJrZXRfZmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICAvLyBvcHRpb25zLm1heF9zdXBwbHkgaW5pdGlhbGx5IGEgc3RyaW5nXG4gICAgICAgIHZhciBtYXhTdXBwbHkgPSAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5tYXhfc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9eytvcHRpb25zLm1heF9zdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG5cbiAgICAgICAgdmFyIHdoaXRlTGlzdHMgPSBwZXJtaXNzaW9uQm9vbGVhbnNbXCJ3aGl0ZV9saXN0XCJdID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7ISFvcHRpb25zLmJsYWNrbGlzdF9hdXRob3JpdGllcyAmJlxuICAgICAgICAgICAgICAgICAgICAhIW9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLmJsYWNrbGlzdF9hdXRob3JpdGllc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXV0aG9yaXR5TGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJsYWNrbGlzdF9hdXRob3JpdGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshIW9wdGlvbnMuYmxhY2tsaXN0X21hcmtldHMgJiZcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5ibGFja2xpc3RfbWFya2V0c1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWFya2V0TGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyEhb3B0aW9ucy53aGl0ZWxpc3RfYXV0aG9yaXRpZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLndoaXRlbGlzdF9hdXRob3JpdGllcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBdXRob3JpdHlMaXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyEhb3B0aW9ucy53aGl0ZWxpc3RfbWFya2V0cyAmJlxuICAgICAgICAgICAgICAgICAgICAhIW9wdGlvbnMud2hpdGVsaXN0X21hcmtldHMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLndoaXRlbGlzdF9tYXJrZXRzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNYXJrZXRMaXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2hpdGVsaXN0X21hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICBsZXQgd2hpdGVsaXN0X21hcmtldF9mZWVfc2hhcmluZyA9IGFzc2V0Lm9wdGlvbnMuZXh0ZW5zaW9uc1xuICAgICAgICAgICAgLndoaXRlbGlzdF9tYXJrZXRfZmVlX3NoYXJpbmcgJiYgKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLmFjY291bnRzX2luX3doaXRlbGlzdF9tYXJrZXRfZmVlX3NoYXJpbmdcIiAvPlxuICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXV0aG9yaXR5TGlzdChcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5leHRlbnNpb25zLndoaXRlbGlzdF9tYXJrZXRfZmVlX3NoYXJpbmdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMudGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMS4ycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21heE1hcmtldEZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF4U3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGVybWlzc2lvbkluZGljYXRvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uQm9vbGVhbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXROYW1lc1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgICAgICB7d2hpdGVMaXN0c31cbiAgICAgICAgICAgICAgICAgICAge3doaXRlbGlzdF9tYXJrZXRfZmVlX3NoYXJpbmd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIHRoZSBnbG9iYWwgc2V0dGxlbWVudCBwcmljZSBpcyBkZWZpbmVkIGFzIHRoZVxuICAgIC8vIHRoZSBwcmljZSBhdCB3aGljaCB0aGUgbGVhc3QgY29sbGF0ZXJhbGl6ZSBzaG9ydCdzXG4gICAgLy8gY29sbGF0ZXJhbCBubyBsb25nZXIgZW5vdWdoIHRvIGJhY2sgdGhlIGRlYnRcbiAgICAvLyBoZS9zaGUgb3dlcy5cbiAgICBnZXRHbG9iYWxTZXR0bGVtZW50UHJpY2UobXNzciA9IDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNhbGxPcmRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgZ2V0IHRoZSBsZWFzdCBjb2xsYXRlcmFsaXplZCBzaG9ydCBwb3NpdGlvblxuICAgICAgICB2YXIgbGVhc3RDb2xTaG9ydCA9IG51bGw7XG4gICAgICAgIHZhciBsZWFzdENvbFNob3J0UmF0aW8gPSBudWxsO1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5zdGF0ZS5jYWxsT3JkZXJzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGNhbGxfb3JkZXIgPSB0aGlzLnN0YXRlLmNhbGxPcmRlcnNbaV07XG5cbiAgICAgICAgICAgIGlmIChsZWFzdENvbFNob3J0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZWFzdENvbFNob3J0ID0gY2FsbF9vcmRlcjtcbiAgICAgICAgICAgICAgICBsZWFzdENvbFNob3J0UmF0aW8gPSBjYWxsX29yZGVyLmdldFJhdGlvKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhbGxfb3JkZXIuZ2V0UmF0aW8oKSA8IGxlYXN0Q29sU2hvcnRSYXRpbykge1xuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnRSYXRpbyA9IGNhbGxfb3JkZXIuZ2V0UmF0aW8oKTtcbiAgICAgICAgICAgICAgICBsZWFzdENvbFNob3J0ID0gY2FsbF9vcmRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFzdENvbFNob3J0ID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvdWxkbid0IGZpbmQgdGhlIGxlYXN0IGNvbHNob3J0P1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIHByaWNlIHdpbGwgaGFwcGVuIHdoZW4gdGhlIENSIGlzIDEuXG4gICAgICAgIC8vIFRoZSBDUiBpcyAxIGlmIGNvbGxhdGVyYWwgLyAoZGVidCB4IGZlZWRfIHByaWNlKSA9PSAxXG4gICAgICAgIC8vIFJlYXJyYW5naW5nLCB0aGlzIG1lYW5zIHRoYXQgdGhlIENSIGlzIDEgaWZcbiAgICAgICAgLy8gZmVlZF9wcmljZSA9PSBjb2xsYXRlcmFsIC8gZGVidFxuICAgICAgICAvL1xuICAgICAgICAvLyBEZWZhdWx0IGlzIHRvIHJldHVybiB0aGUgZ2xvYmFsIHNldHRsZW1lbnQgcHJpY2VcbiAgICAgICAgLy8gVXNlIG1zc3IgdG8gY2FsY3VsYXRlIGluIHdoZW4gYW4gZXZlbnQgaGFwcGVuc1xuICAgICAgICAvLyBiYXNlZCBvbiBhbiBhc3NldHMgTVNTUlxuXG4gICAgICAgIGxldCBkZWJ0ID0gbGVhc3RDb2xTaG9ydC5kZWJ0ICogbXNzcjtcbiAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSBsZWFzdENvbFNob3J0LmNvbGxhdGVyYWw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtjb2xsYXRlcmFsfVxuICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2xlYXN0Q29sU2hvcnQuY2FsbF9wcmljZS5iYXNlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17ZGVidH1cbiAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17bGVhc3RDb2xTaG9ydC5jYWxsX3ByaWNlLnF1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyRmVlZFRhYmxlKGFzc2V0KSB7XG4gICAgICAgIHZhciBiaXRBc3NldCA9IGFzc2V0LmJpdGFzc2V0O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKFwiZmVlZHNcIiBpbiBiaXRBc3NldCkgfHxcbiAgICAgICAgICAgIGJpdEFzc2V0LmZlZWRzLmxlbmd0aCA9PSAwIHx8XG4gICAgICAgICAgICBiaXRBc3NldC5pc19wcmVkaWN0aW9uX21hcmtldCB8fFxuICAgICAgICAgICAgIWJpdEFzc2V0LmZlZWRzLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZlZWRzID0gYml0QXNzZXQuZmVlZHM7XG4gICAgICAgIHZhciBmZWVkX3ByaWNlX2hlYWRlciA9IGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShmZWVkc1swXVsxXVsxXSk7XG4gICAgICAgIHZhciBjb3JlX2V4Y2hhbmdlX3JhdGVfaGVhZGVyID0gZmVlZHNbMF1bMV1bMV0uY29yZV9leGNoYW5nZV9yYXRlO1xuXG4gICAgICAgIC8vIEZpbHRlciBieSB2YWxpZCBmZWVkIGxpZmV0aW1lLCBTb3J0IGJ5IHB1Ymxpc2hlZCBkYXRlXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IG9sZGVzdFZhbGlkRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgbm93IC0gYXNzZXQuYml0YXNzZXQub3B0aW9ucy5mZWVkX2xpZmV0aW1lX3NlYyAqIDEwMDBcbiAgICAgICAgKTtcbiAgICAgICAgZmVlZHMgPSBmZWVkc1xuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYVsxXVswXSkgPiBvbGRlc3RWYWxpZERhdGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oZmVlZDEsIGZlZWQyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGZlZWQyWzFdWzBdKSAtIG5ldyBEYXRlKGZlZWQxWzFdWzBdKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjdXJyZW50RmVlZCA9IGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShhc3NldCk7XG4gICAgICAgIGxldCBjdXJyZW50RmVlZFByaWNlID1cbiAgICAgICAgICAgIGN1cnJlbnRGZWVkLmJhc2UuYW1vdW50IC8gY3VycmVudEZlZWQucXVvdGUuYW1vdW50O1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XG4gICAgICAgIGxldCBjb2x1bW5zID0gW107XG5cbiAgICAgICAgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicHVibGlzaGVyXCIsXG4gICAgICAgICAgICAgICAgZml4ZWQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnB1Ymxpc2hlclwiIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicHVibGlzaGVyXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUEgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYS5wdWJsaXNoZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBKSBuYW1lQSA9IG5hbWVBLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lQiA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLnB1Ymxpc2hlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUIpIG5hbWVCID0gbmFtZUIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17aXRlbX0gLz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZmVlZF9wcmljZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5mZWVkX3ByaWNlXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAoe3RoaXMuZm9ybWF0dGVkUHJpY2UoZmVlZF9wcmljZV9oZWFkZXIsIGZhbHNlLCB0cnVlKX0pXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZmVlZF9wcmljZVwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFfcHJpY2UgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5mZWVkX3ByaWNlLmJhc2UuYW1vdW50IC8gYS5mZWVkX3ByaWNlLnF1b3RlLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYl9wcmljZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmZlZWRfcHJpY2UuYmFzZS5hbW91bnQgLyBiLmZlZWRfcHJpY2UucXVvdGUuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFfcHJpY2UgPiBiX3ByaWNlKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFfcHJpY2UgPCBiX3ByaWNlKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYmFzZS5hbW91bnQgLyBpdGVtLnF1b3RlLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVkaWFuX29mZnNldCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcmljZSAvIGN1cnJlbnRGZWVkUHJpY2UpICogMTAwIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0dGVkUHJpY2UoaXRlbSwgdHJ1ZSl9KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYW5fb2Zmc2V0ID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0eHRsYWJlbCBzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lZGlhbl9vZmZzZXQgPCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0eHRsYWJlbCB3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInR4dGxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lZGlhbl9vZmZzZXR9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNvcmVfZXhjaGFuZ2VfcmF0ZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5jb3JlX2V4Y2hhbmdlX3JhdGVcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdHRlZFByaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmVfZXhjaGFuZ2VfcmF0ZV9oZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZWRQcmljZShpdGVtLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIixcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJwdWJsaXNoRGF0ZVwiLFxuICAgICAgICAgICAgICAgIGZpeGVkOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEucHVibGlzaGVkXCIgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwdWJsaXNoRGF0ZVwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEucHVibGlzaERhdGUuZ2V0VGltZSgpID4gYi5wdWJsaXNoRGF0ZS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEucHVibGlzaERhdGUuZ2V0VGltZSgpIDwgYi5wdWJsaXNoRGF0ZS5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUaW1lQWdvIHRpbWU9e2l0ZW19IC8+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZlZWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZmVlZCA9IGZlZWRzW2ldO1xuICAgICAgICAgICAgdmFyIHB1Ymxpc2hlciA9IGZlZWRbMF07XG4gICAgICAgICAgICB2YXIgcHVibGlzaERhdGUgPSBuZXcgRGF0ZShmZWVkWzFdWzBdICsgXCJaXCIpO1xuICAgICAgICAgICAgdmFyIGZlZWRfcHJpY2UgPSBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UoZmVlZFsxXVsxXSk7XG4gICAgICAgICAgICB2YXIgY29yZV9leGNoYW5nZV9yYXRlID0gZmVlZFsxXVsxXS5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgICAgICB2YXIgbWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbyA9XG4gICAgICAgICAgICAgICAgXCJcIiArIGZlZWRbMV1bMV0ubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbyAvIDEwMDA7XG4gICAgICAgICAgICB2YXIgbWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvID1cbiAgICAgICAgICAgICAgICBcIlwiICsgZmVlZFsxXVsxXS5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gLyAxMDAwO1xuXG4gICAgICAgICAgICBkYXRhU291cmNlLnB1c2goe1xuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyLFxuICAgICAgICAgICAgICAgIGZlZWRfcHJpY2U6IGZlZWRfcHJpY2UsXG4gICAgICAgICAgICAgICAgY29yZV9leGNoYW5nZV9yYXRlOiBjb3JlX2V4Y2hhbmdlX3JhdGUsXG4gICAgICAgICAgICAgICAgbWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbzogbWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbyxcbiAgICAgICAgICAgICAgICBtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW86IG1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyxcbiAgICAgICAgICAgICAgICBwdWJsaXNoRGF0ZTogcHVibGlzaERhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX1cbiAgICAgICAgICAgICAgICByb3dLZXk9XCJmZWVkUHVibGlzaGVyXCJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgbG9jYWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5VGV4dDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLmVtcHR5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJNYXJnaW5UYWJsZSgpIHtcbiAgICAgICAgbGV0IHtjdW11bGF0aXZlR3JvdXBpbmd9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXTtcbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jYWxsT3JkZXJzICYmIHRoaXMuc3RhdGUuY2FsbE9yZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjdW1tdWxhdGl2ZVN1ZmZpeCA9IGN1bXVsYXRpdmVHcm91cGluZyA/IChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7KFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jdW11bGF0aXZlXCIgLz4pXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgZGVidF9jdW0gPSAwO1xuICAgICAgICAgICAgbGV0IGNvbGxfY3VtID0gMDtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYWxsT3JkZXJzLm1hcChjID0+IHtcbiAgICAgICAgICAgICAgICBkZWJ0X2N1bSArPSBjLmRlYnQ7XG4gICAgICAgICAgICAgICAgY29sbF9jdW0gKz0gYy5jb2xsYXRlcmFsO1xuXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYm9ycm93ZXI6IGMuYm9ycm93ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogY3VtdWxhdGl2ZUdyb3VwaW5nID8gY29sbF9jdW0gOiBjLmNvbGxhdGVyYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogYy5nZXRDb2xsYXRlcmFsKCkuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVidDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBjdW11bGF0aXZlR3JvdXBpbmcgPyBkZWJ0X2N1bSA6IGMuZGVidCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0OiBjLmFtb3VudFRvUmVjZWl2ZSgpLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IGMuY2FsbF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgdGNyOiBjLm9yZGVyLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvLFxuICAgICAgICAgICAgICAgICAgICBjcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86IGMuZ2V0UmF0aW8oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogYy5nZXRTdGF0dXMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHVuaXRJbmZvID0ga2V5ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGRhdGFTb3VyY2VbMF1ba2V5XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVNvdXJjZS5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5iYXNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVkUHJpY2UoaXRlbSwgZmFsc2UsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hbW91bnQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbHVtbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYm9ycm93ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYm9ycm93ZXJcIiAvPixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImJvcnJvd2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lQSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChhLmJvcnJvd2VyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEpIG5hbWVBID0gbmFtZUEuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lQiA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLmJvcnJvd2VyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUIpIG5hbWVCID0gbmFtZUIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17aXRlbX0gLz47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImNvbGxhdGVyYWxcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5jb2xsYXRlcmFsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VtbXVsYXRpdmVTdWZmaXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaXRJbmZvKFwiY29sbGF0ZXJhbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjb2xsYXRlcmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmNvbGxhdGVyYWwuYW1vdW50ID4gYi5jb2xsYXRlcmFsLmFtb3VudCkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5jb2xsYXRlcmFsLmFtb3VudCA8IGIuY29sbGF0ZXJhbC5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0Lm1hcmdpbl9wb3NpdGlvbnMuY2xpY2tfdG9fc3dpdGNoX3RvX2N1bXVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVDdW11bGF0aXZlR3JvdXBpbmcuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlYnRcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dfYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VtbXVsYXRpdmVTdWZmaXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaXRJbmZvKFwiZGVidFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJkZWJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmRlYnQuYW1vdW50ID4gYi5kZWJ0LmFtb3VudCkgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5kZWJ0LmFtb3VudCA8IGIuZGVidC5hbW91bnQpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUN1bXVsYXRpdmVHcm91cGluZy5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5tYXJnaW5fcG9zaXRpb25zLmNsaWNrX3RvX3N3aXRjaF90b19jdW11bGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dW5pdEluZm8oXCJjYWxsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY2FsbFwiLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVkUHJpY2UoaXRlbSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJ0Y3JcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3cudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9fZXhwbGFuYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvX3Nob3J0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInRjclwiLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhaXRlbSA/IChpdGVtIC8gMTAwMCkudG9GaXhlZCgzKSA6IFwiLVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjclwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LmNvbGxfcmF0aW9cIiAvPixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNyXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmNyLnJhdGlvID4gYi5jci5yYXRpbykgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5jci5yYXRpbyA8IGIuY3IucmF0aW8pIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZXMgPSBcIm1hcmdpbi1yYXRpbyBcIiArIGl0ZW0uc3RhdHVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucmF0aW8udG9GaXhlZCgzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX1cbiAgICAgICAgICAgICAgICByb3dLZXk9XCJmZWVkTWFyZ2luc1wiXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT1cIm1hcmdpbi1yb3dcIlxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IE51bWJlcigyNSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGxvY2FsZT17e1xuICAgICAgICAgICAgICAgICAgICBlbXB0eVRleHQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0Lm1hcmdpbl9wb3NpdGlvbnMuZW1wdHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckNvbGxCaWRUYWJsZSgpIHtcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXTtcbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBbXTtcblxuICAgICAgICBjb2x1bW5zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJiaWRkZXJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYmlkZGVyXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImJpZGRlclwiLFxuICAgICAgICAgICAgICAgIGZpeGVkOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17aXRlbX0gLz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29sbGF0ZXJhbFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5jb2xsYXRlcmFsXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNvbGxhdGVyYWxcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImRlYnRcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJkZWJ0XCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWJ0X2N1bVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmN1bXVsYXRpdmVfYm9ycm93X2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZGVidF9jdW1cIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInByaWNlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbF9iaWQuYmlkXCIgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwcmljZVwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17aXRlbS5iYXNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtpdGVtLmJhc2UuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtpdGVtLnF1b3RlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17aXRlbS5xdW90ZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3N5bWJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY3JcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LmNvbGxfcmF0aW9cIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY3JcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50b0ZpeGVkKDMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImluY2x1ZGVkXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5jb25zaWRlcmVkX29uX3Jldml2YWxcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaW5jbHVkZWRcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PSAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsX2JpZC5pbmNsdWRlZC5wYXJ0aWFsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0gPT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbF9iaWQuaW5jbHVkZWQueWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbF9iaWQuaW5jbHVkZWQubm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgbGV0IGRlYnRfY3VtID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXRlcmFsQmlkcy5tYXAoYyA9PiB7XG4gICAgICAgICAgICBkZWJ0X2N1bSArPSBjLmRlYnQ7XG5cbiAgICAgICAgICAgIGRhdGFTb3VyY2UucHVzaCh7XG4gICAgICAgICAgICAgICAgYmlkZGVyOiBjLmJpZGRlcixcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogYy5iaWQuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBjLmJpZC5iYXNlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogYy5iaWQucXVvdGUuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBhc3NldDogYy5iaWQucXVvdGUuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlYnRfY3VtOiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGVidF9jdW0sXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBjLmJpZC5xdW90ZS5hc3NldF9pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJpY2U6IGMuYmlkLFxuICAgICAgICAgICAgICAgIGNyOiBjLmdldFJhdGlvKCksXG4gICAgICAgICAgICAgICAgaW5jbHVkZWQ6IGMuY29uc2lkZXJlZElmUmV2aXZlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgcm93S2V5PVwiZmVlZENvbGxCaWRcIlxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiBOdW1iZXIoMjUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBsb2NhbGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlUZXh0OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsX2JpZC5lbXB0eVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfc2V0RmVlZFRhYih0YWIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVGZWVkVGFiOiB0YWJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldEFzc2V0VGFiKHRhYikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUFzc2V0VGFiOiB0YWJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlZFRhYmxlcyhhc3NldCkge1xuICAgICAgICB2YXIgYml0QXNzZXQgPSBhc3NldC5iaXRhc3NldDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShcImZlZWRzXCIgaW4gYml0QXNzZXQpIHx8XG4gICAgICAgICAgICBiaXRBc3NldC5mZWVkcy5sZW5ndGggPT0gMCB8fFxuICAgICAgICAgICAgYml0QXNzZXQuaXNfcHJlZGljdGlvbl9tYXJrZXQgfHxcbiAgICAgICAgICAgICFiaXRBc3NldC5mZWVkcy5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc0dsb2JhbFNldHRsZW1lbnQgPSBiaXRBc3NldC5zZXR0bGVtZW50X2Z1bmQgPiAwID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZXRGZWVkVGFiLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgYWN0aXZlS2V5PXt0aGlzLnN0YXRlLmFjdGl2ZUZlZWRUYWJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZVxuICAgICAgICAgICAgICAgICAgICB0YWI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR2xvYmFsU2V0dGxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsX2JpZC50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImV4cGxvcmVyLmFzc2V0Lm1hcmdpbl9wb3NpdGlvbnMudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJtYXJnaW5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0aXZlRmVlZFRhYiA9PSBcIm1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGlzR2xvYmFsU2V0dGxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fcmVuZGVyQ29sbEJpZFRhYmxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX3JlbmRlck1hcmdpblRhYmxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lXG4gICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJmZWVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjdGl2ZUZlZWRUYWIgPT0gXCJmZWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fcmVuZGVyRmVlZFRhYmxlKGFzc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckFzc2V0UmVzb2x2ZVByZWRpY3Rpb24oYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbFxuICAgICAgICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnJlc29sdmVfcHJlZGljdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5yZXNvbHZlX3ByZWRpY3Rpb25fdGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QXNzZXRSZXNvbHZlUHJlZGljdGlvblxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXR9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5iYWNraW5nQXNzZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiA8UGFnZTQwNCBzdWJ0aXRsZT1cImFzc2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0IHx8ICF0aGlzLnByb3BzLmNvcmVBc3NldC5nZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFzc2V0ID0gdGhpcy5wcm9wcy5hc3NldC50b0pTKCk7XG4gICAgICAgIHZhciBwcmljZUZlZWQgPVxuICAgICAgICAgICAgXCJiaXRhc3NldFwiIGluIGFzc2V0ID8gdGhpcy5yZW5kZXJQcmljZUZlZWQoYXNzZXQpIDogbnVsbDtcbiAgICAgICAgdmFyIHByaWNlRmVlZERhdGEgPVxuICAgICAgICAgICAgXCJiaXRhc3NldFwiIGluIGFzc2V0ID8gdGhpcy5yZW5kZXJGZWVkVGFibGVzKGFzc2V0KSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgYXNzZXQtcGFnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IHdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1lZGl1bS11cC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQWJvdXRCb3goYXNzZXQsIHRoaXMucHJvcHMuYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3NldEFzc2V0VGFiLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlS2V5PXt0aGlzLnN0YXRlLmFjdGl2ZUFzc2V0VGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LmluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbGFyZ2UtaG9yaXpvbnRhbCBtZWRpdW0tdXAtMSBsYXJnZS11cC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC1uby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU3VtbWFyeShhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGNsYXNzTmFtZT1cImFzc2V0LWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBlcm1pc3Npb25zKGFzc2V0KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVQb29sKGFzc2V0KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2VGZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVuZGVyUHJpY2VGZWVkKGFzc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUZlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZW5kZXJTZXR0bGVtZW50KGFzc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dDb2xsYXRlcmFsQmlkSW5JbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVuZGVyQ29sbGF0ZXJhbEJpZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUZlZWREYXRhID8gcHJpY2VGZWVkRGF0YSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQuYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGNsYXNzTmFtZT1cImFzc2V0LWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVQb29sRnVuZGluZyhhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVQb29sQ2xhaW1pbmcoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRmVlc0NsYWltaW5nKGFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFzc2V0T3duZXJVcGRhdGUoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiYml0YXNzZXRcIiBpbiBhc3NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhc3NldC5iaXRhc3NldC5pc19wcmVkaWN0aW9uX21hcmtldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmVlZFB1Ymxpc2goYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29sbGF0ZXJhbEJpZHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29sbGF0ZXJhbEJpZChhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJiaXRhc3NldFwiIGluIGFzc2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuYml0YXNzZXQuaXNfcHJlZGljdGlvbl9tYXJrZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckFzc2V0UmVzb2x2ZVByZWRpY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0ID0gY29ubmVjdChcbiAgICBBc3NldCxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbkFzc2V0ID0gQXNzZXRXcmFwcGVyKEFzc2V0LCB7XG4gICAgcHJvcE5hbWVzOiBbXCJiYWNraW5nQXNzZXRcIiwgXCJjb3JlQXNzZXRcIl1cbn0pO1xuXG5jbGFzcyBBc3NldENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwiYXNzZXRfbm90X2ZvdW5kX3N1YnRpdGxlXCIgLz47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFzc2V0LmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJhY2tpbmdBc3NldCA9IHRoaXMucHJvcHMuYXNzZXQuaGFzKFwiYml0YXNzZXRcIilcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXNzZXRcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBiYWNraW5nQXNzZXQ9e2JhY2tpbmdBc3NldH1cbiAgICAgICAgICAgICAgICBjb3JlQXNzZXQ9e1wiMS4zLjBcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuQXNzZXRDb250YWluZXIgPSBBc3NldFdyYXBwZXIoQXNzZXRDb250YWluZXIsIHtcbiAgICB3aXRoRHluYW1pYzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0U3ltYm9sU3BsaXR0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHN5bWJvbCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN5bWJvbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gPEFzc2V0Q29udGFpbmVyIHsuLi50aGlzLnByb3BzfSBhc3NldD17c3ltYm9sfSAvPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBhIGNsYXNzIHRvIGRpc3BsYXkgdGltZSBuaWNlbHkgd2hlbiBnaXZlbiBzZWNvbmRzXHJcbi8vIGZvciBleGFtcGxlLCBkaXNwbGF5XHJcblxyXG4vLyBleHBlY3RzIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBhcyBhIHByb3BlcnR5XHJcblxyXG5jbGFzcyBGb3JtYXR0ZWRUaW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge3RpbWU6IHByb3BzLnRpbWV9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdpdmVuIGFuIGludGVnZXIgc2Vjb25kcyBhcyBhbiBhcmd1bWVudCxcclxuICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIGhvdXJzXHJcbiAgICBnZXRIb3VycyhzZWNzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldCBob3VycyBjYWxsZWQgd2l0aDogXCIgKyBzZWNzKTtcclxuICAgICAgICByZXR1cm4gc2VjcyAvIDM2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2Pnt0aGlzLmdldEhvdXJzKHRoaXMuc3RhdGUudGltZSl9aDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkVGltZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcblxyXG5jb25zdCBzdGF0ZVNldHRlciA9ICh0aGF0LCBrZXksIHRyYW5zZm9ybSA9IHZhbHVlID0+IHZhbHVlKSA9PiB2YWx1ZSA9PlxyXG4gICAgdGhhdC5zZXRTdGF0ZSh7W2tleV06IHRyYW5zZm9ybSh2YWx1ZSl9KTtcclxuXHJcbmNvbnN0IGtleUdldHRlciA9IGtleSA9PiBvYmplY3QgPT4gb2JqZWN0W2tleV07XHJcblxyXG5jbGFzcyBGZWVQb29sT3BlcmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgdHlwZTogXCJmdW5kXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50TmFtZUNoYW5nZWQgPSBzdGF0ZVNldHRlcih0aGlzLCBcImZ1bmRlckFjY291bnROYW1lXCIpO1xyXG4gICAgb25BY2NvdW50Q2hhbmdlZCA9IHN0YXRlU2V0dGVyKHRoaXMsIFwibmV3RnVuZGVyQWNjb3VudFwiKTtcclxuICAgIG9uUG9vbElucHV0ID0gc3RhdGVTZXR0ZXIodGhpcywgXCJmdW5kUG9vbEFtb3VudFwiLCBrZXlHZXR0ZXIoXCJhbW91bnRcIikpO1xyXG5cclxuICAgIG9uQ2xhaW1JbnB1dChrZXksIHthbW91bnR9KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXkgKyBcIkFzc2V0XCJdLnNldEFtb3VudCh7cmVhbDogYW1vdW50fSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtrZXldOiBhbW91bnRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZ1bmRQb29sID0gKCkgPT5cclxuICAgICAgICBBc3NldEFjdGlvbnMuZnVuZFBvb2woXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3RnVuZGVyQWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLm5ld0Z1bmRlckFjY291bnQuZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgICAgIDogbnVsbCxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3JlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZ1bmRQb29sQW1vdW50LnJlcGxhY2UoLywvZywgXCJcIilcclxuICAgICAgICApO1xyXG5cclxuICAgIHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRpYWxTdGF0ZSA9ICgpID0+ICh7XHJcbiAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU6IHRoaXMucHJvcHMuZnVuZGVyQWNjb3VudE5hbWUsXHJcbiAgICAgICAgZnVuZFBvb2xBbW91bnQ6IDAsXHJcbiAgICAgICAgZnVuZFBvb2xBc3NldDogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgYW1vdW50OiAwLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuY29yZS5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmNvcmUuZ2V0KFwiaWRcIilcclxuICAgICAgICB9KSxcclxuICAgICAgICBjbGFpbVBvb2xBbW91bnQ6IDAsXHJcbiAgICAgICAgY2xhaW1Qb29sQW1vdW50QXNzZXQ6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmNvcmUuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5jb3JlLmdldChcImlkXCIpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2xhaW1GZWVzQW1vdW50OiAwLFxyXG4gICAgICAgIGNsYWltRmVlc0Ftb3VudEFzc2V0OiBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIG9uQ2xhaW1GZWVzKCkge1xyXG4gICAgICAgIGxldCBhY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMuZnVuZGVyQWNjb3VudE5hbWUpO1xyXG4gICAgICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xyXG4gICAgICAgIEFzc2V0QWN0aW9ucy5jbGFpbVBvb2xGZWVzKFxyXG4gICAgICAgICAgICBhY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNsYWltRmVlc0Ftb3VudEFzc2V0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsYWltUG9vbCA9ICgpID0+XHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmNsYWltUG9vbChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGFpbVBvb2xBbW91bnRBc3NldFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgcmVuZGVyRnVuZFBvb2woKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgIG9uUG9vbElucHV0LFxyXG4gICAgICAgICAgICBvbkZ1bmRQb29sLFxyXG4gICAgICAgICAgICByZXNldCxcclxuICAgICAgICAgICAgb25BY2NvdW50TmFtZUNoYW5nZWQsXHJcbiAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWRcclxuICAgICAgICB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCB7YXNzZXQsIGNvcmUsIGhpZGVCYWxhbmNlLCBnZXREeW5hbWljT2JqZWN0fSA9IHByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtmdW5kZXJBY2NvdW50TmFtZSwgZnVuZFBvb2xBbW91bnQsIG5ld0Z1bmRlckFjY291bnR9ID0gc3RhdGU7XHJcbiAgICAgICAgbGV0IGR5bmFtaWNPYmplY3QgPSBudWxsO1xyXG4gICAgICAgIGlmICghaGlkZUJhbGFuY2UpXHJcbiAgICAgICAgICAgIGR5bmFtaWNPYmplY3QgPSBnZXREeW5hbWljT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgYXNzZXQuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY29yZUlEID0gY29yZS5nZXQoXCJpZFwiKSB8fCBcIjEuMy4wXCI7XHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSAwO1xyXG4gICAgICAgIGlmIChuZXdGdW5kZXJBY2NvdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcmVCYWxhbmNlSUQgPSBuZXdGdW5kZXJBY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGNvcmVJRF0pO1xyXG4gICAgICAgICAgICBpZiAoY29yZUJhbGFuY2VJRCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChjb3JlQmFsYW5jZUlEKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSA9IGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYWxhbmNlVGV4dCA9IChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDombmJzcDtcclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldCBhbW91bnQ9e2JhbGFuY2V9IGFzc2V0PXtjb3JlSUR9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aGlkZUJhbGFuY2UgfHwgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjEuNXJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnBvb2xfYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY09iamVjdCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pY09iamVjdC5nZXQoXCJmZWVfcG9vbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zYWN0aW9uLmZ1bmRpbmdfYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Z1bmRlckFjY291bnROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkFjY291bnROYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXtvbkFjY291bnRDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Z1bmRlckFjY291bnROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Z1bmRQb29sQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblBvb2xJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2NvcmVJRF19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmdW5kUG9vbEFtb3VudCA8PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkZ1bmRQb29sfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24udHJ4VHlwZXMuYXNzZXRfZnVuZF9mZWVfcG9vbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiIG9uQ2xpY2s9e3Jlc2V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNsYWltUG9vbCgpIHtcclxuICAgICAgICBjb25zdCB7cHJvcHMsIG9uQ2xhaW1Qb29sLCByZXNldH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHtjbGFpbVBvb2xBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7YXNzZXQsIGNvcmUsIGdldER5bmFtaWNPYmplY3R9ID0gcHJvcHM7XHJcbiAgICAgICAgbGV0IGR5bmFtaWNPYmplY3QgPSBnZXREeW5hbWljT2JqZWN0KFxyXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNvcmVJRCA9IGNvcmUuZ2V0KFwiaWRcIikgfHwgXCIxLjMuMFwiO1xyXG5cclxuICAgICAgICBjb25zdCBiYWxhbmNlVGV4dCA9ICEhZHluYW1pY09iamVjdCA/IChcclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNsYWltUG9vbEFtb3VudEFzc2V0LnNldEFtb3VudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdHM6IGR5bmFtaWNPYmplY3QuZ2V0KFwiZmVlX3Bvb2xcIilcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1Qb29sQW1vdW50OiB0aGlzLnN0YXRlLmNsYWltUG9vbEFtb3VudEFzc2V0LmdldEFtb3VudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcImZlZV9wb29sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlSUR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNsYWltX3Bvb2xfdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjbGFpbVBvb2xBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DbGFpbUlucHV0LmJpbmQodGhpcywgXCJjbGFpbVBvb2xBbW91bnRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVJRH1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tjb3JlSURdfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2xhaW1Qb29sQW1vdW50IDw9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xhaW1Qb29sfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24udHJ4VHlwZXMuYXNzZXRfY2xhaW1fZmVlX3Bvb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIiBvbkNsaWNrPXtyZXNldH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDbGFpbUZlZXMoKSB7XHJcbiAgICAgICAgY29uc3Qge3Byb3BzfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qge2NsYWltRmVlc0Ftb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHthc3NldCwgZ2V0RHluYW1pY09iamVjdH0gPSBwcm9wcztcclxuICAgICAgICBsZXQgZHluYW1pY09iamVjdCA9IGdldER5bmFtaWNPYmplY3QoXHJcbiAgICAgICAgICAgIGFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCB1bmNsYWltZWRCYWxhbmNlID0gZHluYW1pY09iamVjdFxyXG4gICAgICAgICAgICA/IGR5bmFtaWNPYmplY3QuZ2V0KFwiYWNjdW11bGF0ZWRfZmVlc1wiKVxyXG4gICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgbGV0IHZhbGlkQ2xhaW0gPVxyXG4gICAgICAgICAgICBjbGFpbUZlZXNBbW91bnQgPiAwICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1GZWVzQW1vdW50QXNzZXQuZ2V0QW1vdW50KCkgPD0gdW5jbGFpbWVkQmFsYW5jZTtcclxuXHJcbiAgICAgICAgbGV0IHVuY2xhaW1lZEJhbGFuY2VUZXh0ID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt1bmNsYWltZWRCYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jbGFpbV90ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnVuY2xhaW1lZF9pc3N1ZXJfaW5jb21lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNPYmplY3QgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcImFjY3VtdWxhdGVkX2ZlZXNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXt1bmNsYWltZWRCYWxhbmNlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2NsYWltRmVlc0Ftb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNsYWltSW5wdXQuYmluZCh0aGlzLCBcImNsYWltRmVlc0Ftb3VudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYXNzZXQuZ2V0KFwiaWRcIildfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXZhbGlkQ2xhaW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGFpbUZlZXMuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNsYWltX2ZlZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwiZnVuZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckZ1bmRQb29sKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwiY2xhaW1cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDbGFpbVBvb2woKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJjbGFpbV9mZWVzXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2xhaW1GZWVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5GZWVQb29sT3BlcmF0aW9uID0gQXNzZXRXcmFwcGVyKEZlZVBvb2xPcGVyYXRpb24sIHtcclxuICAgIHByb3BOYW1lczogW1wiYXNzZXRcIiwgXCJjb3JlXCJdLFxyXG4gICAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICAgICAgY29yZTogXCIxLjMuMFwiXHJcbiAgICB9LFxyXG4gICAgd2l0aER5bmFtaWM6IHRydWVcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVQb29sT3BlcmF0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBBc3NldE93bmVyVXBkYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZCxcclxuICAgICAgICBjdXJyZW50T3duZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbmV3X2lzc3Vlcl9hY2NvdW50X2lkOiBudWxsLFxyXG4gICAgICAgICAgICBpc3N1ZXJfYWNjb3VudF9uYW1lOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnROYW1lQ2hhbmdlZChrZXksIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IG5hbWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnRDaGFuZ2VkKGtleSwgYWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogYWNjb3VudCA/IGFjY291bnQuZ2V0KFwiaWRcIikgOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLnVwZGF0ZU93bmVyKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5ld19pc3N1ZXJfYWNjb3VudF9pZFxyXG4gICAgICAgICkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25SZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG5ld19pc3N1ZXJfYWNjb3VudF9pZDogbnVsbCxcclxuICAgICAgICAgICAgaXNzdWVyX2FjY291bnRfbmFtZTogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Y3VycmVudE93bmVyfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMuY3VycmVudF9pc3N1ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17Y3VycmVudE93bmVyLmdldChcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2N1cnJlbnRPd25lci5nZXQoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLm5ld19pc3N1ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXt0aGlzLnN0YXRlLmlzc3Vlcl9hY2NvdW50X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BY2NvdW50TmFtZUNoYW5nZWQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpc3N1ZXJfYWNjb3VudF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25BY2NvdW50Q2hhbmdlZC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5ld19pc3N1ZXJfYWNjb3VudF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmlzc3Vlcl9hY2NvdW50X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVBY2NvdW50cz17W2N1cnJlbnRPd25lci5nZXQoXCJuYW1lXCIpXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXRoaXMuc3RhdGUubmV3X2lzc3Vlcl9hY2NvdW50X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy51cGRhdGVfb3duZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVzZXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXRPd25lclVwZGF0ZSA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRPd25lclVwZGF0ZSk7XHJcbmV4cG9ydCBkZWZhdWx0IEFzc2V0T3duZXJVcGRhdGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IFByaWNlSW5wdXQgZnJvbSBcIi4uL1V0aWxpdHkvUHJpY2VJbnB1dFwiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcclxuXHJcbmNsYXNzIEFzc2V0UHVibGlzaEZlZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucmVzZXRTdGF0ZShwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTdGF0ZShwcm9wcyA9IHRoaXMucHJvcHMpIHtcclxuICAgICAgICBsZXQgcHVibGlzaGVyX2lkID0gcHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudEZlZWQgPSBwcm9wcy5hc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcImN1cnJlbnRfZmVlZFwiXSk7XHJcblxyXG4gICAgICAgIC8qIE1pZ2h0IG5lZWQgdG8gY2hlY2sgdGhlc2UgZGVmYXVsdCB2YWx1ZXMgKi9cclxuICAgICAgICBsZXQgbWNyID0gY3VycmVudEZlZWQuZ2V0KFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiLCAxNzUwKTtcclxuICAgICAgICBsZXQgbXNzciA9IGN1cnJlbnRGZWVkLmdldChcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiLCAxMTAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHVibGlzaGVyOiBwcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgIHB1Ymxpc2hlcl9pZCxcclxuICAgICAgICAgICAgbWNyLFxyXG4gICAgICAgICAgICBtY3JWYWx1ZTogbWNyIC8gMTAwMCxcclxuICAgICAgICAgICAgbXNzcixcclxuICAgICAgICAgICAgbXNzclZhbHVlOiBtc3NyIC8gMTAwMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50TmFtZUNoYW5nZWQoa2V5LCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtrZXldOiBuYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50Q2hhbmdlZChrZXksIGFjY291bnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IGFjY291bnQgPyBhY2NvdW50LmdldChcImlkXCIpIDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIEFzc2V0QWN0aW9ucy5wdWJsaXNoRmVlZCh7XHJcbiAgICAgICAgICAgIHB1Ymxpc2hlcjogdGhpcy5zdGF0ZS5wdWJsaXNoZXJfaWQsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICBtY3I6IHRoaXMuc3RhdGUubWNyLFxyXG4gICAgICAgICAgICBtc3NyOiB0aGlzLnN0YXRlLm1zc3IsXHJcbiAgICAgICAgICAgIGZlZWRQcmljZTogdGhpcy5zdGF0ZS5mZWVkUHJpY2UsXHJcbiAgICAgICAgICAgIGNlcjogdGhpcy5zdGF0ZS5jZXJcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUodGhpcy5yZXNldFN0YXRlKCkpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJpY2VDaGFuZ2VkKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXRSYXRpbyhrZXksIHthbW91bnR9KSB7XHJcbiAgICAgICAgLyogRW5mb3JjZSBvbmUgZGVjaW1hbCBwb2ludCBtYXhpbXVtICovXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhIWFtb3VudCAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgYW1vdW50ID09PSBcInN0cmluZ1wiICYmXHJcbiAgICAgICAgICAgIGFtb3VudC5pbmRleE9mKFwiLlwiKSAhPT0gLTEgJiZcclxuICAgICAgICAgICAgYW1vdW50LmluZGV4T2YoXCIuXCIpICsgNCAhPT0gYW1vdW50Lmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBhbW91bnQgPSBhbW91bnQuc3Vic3RyKDAsIGFtb3VudC5pbmRleE9mKFwiLlwiKSArIDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleSArIFwiVmFsdWVcIl06IGFtb3VudCxcclxuICAgICAgICAgICAgW2tleV06IE1hdGguZmxvb3IocGFyc2VGbG9hdChhbW91bnQpICogMTAwMClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2Fzc2V0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge21jclZhbHVlLCBtc3NyVmFsdWUsIHB1Ymxpc2hlcn0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlID0gYXNzZXQuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgY29uc3QgcXVvdGUgPSBhc3NldC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgXCJvcHRpb25zXCIsXHJcbiAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5mZWVkX3Byb2R1Y2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17cHVibGlzaGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWNjb3VudE5hbWVDaGFuZ2VkLmJpbmQodGhpcywgXCJwdWJsaXNoZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vbkFjY291bnRDaGFuZ2VkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGlzaGVyX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3B1Ymxpc2hlcn1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBDb3JlIEV4Y2hhbmdlIFJhdGUgKi99XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxQcmljZUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25QcmljZUNoYW5nZWQ9e3RoaXMub25QcmljZUNoYW5nZWQuYmluZCh0aGlzLCBcImNlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU9e1wiMS4zLjBcIn1cclxuICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU2V0dGxlbWVudCBQcmljZSAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPFByaWNlSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvblByaWNlQ2hhbmdlZD17dGhpcy5vblByaWNlQ2hhbmdlZC5iaW5kKHRoaXMsIFwiZmVlZFByaWNlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5mZWVkX3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1DUiAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17bWNyVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRSYXRpby5iaW5kKHRoaXMsIFwibWNyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTVNTUiAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXttc3NyVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRSYXRpby5iaW5kKHRoaXMsIFwibXNzclwiKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9wdWJsaXNoX2ZlZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTdGF0ZSh0aGlzLnByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0UHVibGlzaEZlZWQgPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0UHVibGlzaEZlZWQpO1xyXG5Bc3NldFB1Ymxpc2hGZWVkID0gQXNzZXRXcmFwcGVyKEFzc2V0UHVibGlzaEZlZWQpO1xyXG5leHBvcnQgZGVmYXVsdCBBc3NldFB1Ymxpc2hGZWVkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4vQW1vdW50U2VsZWN0b3JcIjtcbmltcG9ydCB7UHJpY2UsIEFzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XG5cbmNsYXNzIFByaWNlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgbGV0IHF1b3RlID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5xdW90ZS5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMucXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYmFzZSA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICBhc3NldF9pZDogcHJvcHMuYmFzZS5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogcHJvcHMuYmFzZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHByaWNlID0gbmV3IFByaWNlKHtcbiAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgYmFzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICByZWFsUHJpY2VWYWx1ZTogcHJpY2UudG9SZWFsKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvblByaWNlQ2hhbmdlZCh7YW1vdW50fSkge1xuICAgICAgICB0aGlzLnN0YXRlLnByaWNlLnNldFByaWNlRnJvbVJlYWwocGFyc2VGbG9hdChhbW91bnQpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWFsUHJpY2VWYWx1ZTogYW1vdW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUHJpY2VDaGFuZ2VkKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblByaWNlQ2hhbmdlZCh0aGlzLnN0YXRlLnByaWNlLmNsb25lKCkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3JlYWxQcmljZVZhbHVlLCBwcmljZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICBhbW91bnQ9e3JlYWxQcmljZVZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUHJpY2VDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgYXNzZXQ9e3ByaWNlLmJhc2UuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgYmFzZT17dGhpcy5wcm9wcy5xdW90ZS5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgaXNQcmljZVxuICAgICAgICAgICAgICAgIGFzc2V0cz17W3ByaWNlLnF1b3RlLmFzc2V0X2lkXX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QcmljZUlucHV0ID0gQXNzZXRXcmFwcGVyKFByaWNlSW5wdXQsIHtcbiAgICBwcm9wTmFtZXM6IFtcInF1b3RlXCIsIFwiYmFzZVwiXSxcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgYmFzZTogXCIxLjMuMFwiXG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtSYWRpbywgVG9vbHRpcCwgQnV0dG9uLCBGb3JtfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclN0eWxlR3VpZGVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtBc3NldCwgUHJpY2V9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IGFzc2V0VXRpbHMgZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vYXNzZXRfdXRpbHNcIjtcclxuXHJcbmNsYXNzIEFzc2V0UmVzb2x2ZVByZWRpY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGdsb2JhbFNldHRsZW1lbnRQcmljZTogbnVsbCxcclxuICAgICAgICAgICAgY3VzdG9tUHJpY2U6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbnAuYXNzZXQuaWQgIT09IHRoaXMucHJvcHMuYXNzZXQuaWQgfHxcclxuICAgICAgICAgICAgbnMuZ2xvYmFsU2V0dGxlbWVudFByaWNlICE9PSB0aGlzLnN0YXRlLmdsb2JhbFNldHRsZW1lbnRQcmljZSB8fFxyXG4gICAgICAgICAgICBucy5jdXN0b21QcmljZSAhPT0gdGhpcy5zdGF0ZS5jdXN0b21QcmljZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmljZUNoYW5nZWQodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gMiAmJiAhdGhpcy5zdGF0ZS5jdXN0b21QcmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFNldHRsZW1lbnRQcmljZTogMSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbVByaWNlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsU2V0dGxlbWVudFByaWNlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmljZUNoYW5nZWRPYmplY3QodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm9uUHJpY2VDaGFuZ2VkKHZhbHVlLnRvUmVhbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCB7YXNzZXQsIGFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGJhc2UgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICByZWFsOiAxLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5pZCxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LnByZWNpc2lvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBxdW90ZUFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcclxuICAgICAgICAgICAgYXNzZXQuYml0YXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgcXVvdGUgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICByZWFsOiB0aGlzLnN0YXRlLmdsb2JhbFNldHRsZW1lbnRQcmljZSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuYml0YXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0LFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHF1b3RlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwcmljZSA9IG5ldyBQcmljZSh7XHJcbiAgICAgICAgICAgIHF1b3RlLFxyXG4gICAgICAgICAgICBiYXNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEFzc2V0QWN0aW9ucy5hc3NldEdsb2JhbFNldHRsZShhc3NldCwgYWNjb3VudC5nZXQoXCJpZFwiKSwgcHJpY2UpLnRoZW4oXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25SZXNldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBnbG9iYWxTZXR0bGVtZW50UHJpY2U6IG51bGwsXHJcbiAgICAgICAgICAgIGN1c3RvbVByaWNlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHthbW91bnR9KSB7XHJcbiAgICAgICAgdGhpcy5vblByaWNlQ2hhbmdlZChhbW91bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlUmFkaW8oZSkge1xyXG4gICAgICAgIHRoaXMub25QcmljZUNoYW5nZWQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgYmFzZSA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXHJcbiAgICAgICAgICAgIGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcclxuICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnRvb2x0aXBfcHJlZGljdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PXtcInRvcExlZnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQucHJlZGljdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCI6IFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9uLmNvbmRpdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnRvb2x0aXBfcmVzb2x1dGlvbl9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e1widG9wTGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC5yZXNvbHV0aW9uX2RhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiOiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbi5leHBpcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlUmFkaW8uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2xvYmFsU2V0dGxlbWVudFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmN1c3RvbVByaWNlID8gdHJ1ZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9vbGVhbi50cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmN1c3RvbVByaWNlID8gdHJ1ZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9vbGVhbi5mYWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmN1c3RvbVByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc3RhdGUuZ2xvYmFsU2V0dGxlbWVudFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmN1c3RvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuY3VzdG9tUHJpY2UgPyB1bmRlZmluZWQgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZ2xvYmFsX3NldHRsZW1lbnRfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuc3RhdGUuZ2xvYmFsU2V0dGxlbWVudFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFzZS5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YXNzZXQuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2Jhc2UuZ2V0KFwiaWRcIildfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2UgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnB1Ymxpc2hfcHJlZGljdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiOHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlc2V0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Bc3NldFJlc29sdmVQcmVkaWN0aW9uID0gQmluZFRvQ2hhaW5TdGF0ZShBc3NldFJlc29sdmVQcmVkaWN0aW9uKTtcclxuZXhwb3J0IGRlZmF1bHQgQXNzZXRSZXNvbHZlUHJlZGljdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRQcmljZSBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRQcmljZVwiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcblxyXG5jbGFzcyBCaWRDb2xsYXRlcmFsT3BlcmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsU3RhdGUgPSAoKSA9PiAoe1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluU3RvcmUuZ2V0QWNjb3VudCh0aGlzLnByb3BzLmZ1bmRlckFjY291bnROYW1lKSxcclxuICAgICAgICBjb2xsYXRlcmFsQW1vdW50OiBcIjBcIixcclxuICAgICAgICBkZWJ0QW1vdW50OiBcIjBcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBfY29sbGF0ZXJhbEJpZElucHV0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWxBbW91bnQ6IHZhbHVlLmFtb3VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9kZWJ0QmlkSW5wdXQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGVidEFtb3VudDogdmFsdWUuYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQmlkQ29sbGF0ZXJhbCgpIHtcclxuICAgICAgICBsZXQge2NvbGxhdGVyYWxBbW91bnQsIGRlYnRBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29sbGF0ZXJhbEFtb3VudCA9XHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWxBbW91bnQgPT0gMFxyXG4gICAgICAgICAgICAgICAgPyBjb2xsYXRlcmFsQW1vdW50XHJcbiAgICAgICAgICAgICAgICA6IGNvbGxhdGVyYWxBbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcclxuICAgICAgICBkZWJ0QW1vdW50ID1cclxuICAgICAgICAgICAgZGVidEFtb3VudCA9PSAwID8gZGVidEFtb3VudCA6IGRlYnRBbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcclxuXHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmJpZENvbGxhdGVyYWwoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWNjb3VudCA/IHRoaXMuc3RhdGUuYWNjb3VudC5nZXQoXCJpZFwiKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29yZSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcclxuICAgICAgICAgICAgY29sbGF0ZXJhbEFtb3VudCxcclxuICAgICAgICAgICAgZGVidEFtb3VudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25VcGRhdGUoKTtcclxuICAgICAgICB9LCA2MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVCaWQoKSB7XHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmJpZENvbGxhdGVyYWwoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWNjb3VudCA/IHRoaXMuc3RhdGUuYWNjb3VudC5nZXQoXCJpZFwiKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29yZSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25VcGRhdGUoKTtcclxuICAgICAgICB9LCA2MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb2xsYXRlcmFsQmlkKCkge1xyXG4gICAgICAgIGNvbnN0IHthc3NldCwgY29yZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHthY2NvdW50LCBjb2xsYXRlcmFsQW1vdW50LCBkZWJ0QW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCB0YWJJbmRleCA9IDE7XHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSAwO1xyXG4gICAgICAgIGNvbnN0IGJhY2tpbmdCYWxhbmNlSUQgPSBhY2NvdW50XHJcbiAgICAgICAgICAgID8gYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBjb3JlLmdldChcImlkXCIpXSlcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGlmIChiYWNraW5nQmFsYW5jZUlEKSB7XHJcbiAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFja2luZ0JhbGFuY2VJRCk7XHJcbiAgICAgICAgICAgIGlmIChiYWxhbmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBiYWxhbmNlVGV4dCA9IChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDombmJzcDtcclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldCBhbW91bnQ9e2JhbGFuY2V9IGFzc2V0PXtjb3JlLmdldChcImlkXCIpfSAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNhY3Rpb24uY29sbGF0ZXJhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2NvbGxhdGVyYWxBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2NvbGxhdGVyYWxCaWRJbnB1dC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2NvcmUuZ2V0KFwiaWRcIildfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zYWN0aW9uLmJvcnJvd19hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZGVidEFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fZGVidEJpZElucHV0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2Fzc2V0LmdldChcImlkXCIpXX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdUb3A6IDE2fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29sbGF0ZXJhbEFtb3VudCAhPT0gXCIwXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlYnRBbW91bnQgIT09IFwiMFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbC5iaWRfcHJpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQW1vdW50IC8gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtjb3JlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17dGhpcy5zdGF0ZS5kZWJ0QW1vdW50IC8gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlUHJpY2VGZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkJpZENvbGxhdGVyYWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5iaWRfY29sbGF0ZXJhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbGxhdGVyYWxCaWQoKTtcclxuICAgIH1cclxufVxyXG5cclxuQmlkQ29sbGF0ZXJhbE9wZXJhdGlvbiA9IEFzc2V0V3JhcHBlcihCaWRDb2xsYXRlcmFsT3BlcmF0aW9uLCB7XHJcbiAgICBwcm9wTmFtZXM6IFtcImFzc2V0XCIsIFwiY29yZVwiXSxcclxuICAgIHdpdGhEeW5hbWljOiB0cnVlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlkQ29sbGF0ZXJhbE9wZXJhdGlvbjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7Ozs7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7Ozs7QUFmQTtBQUNBO0FBaUJBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUZBO0FBYUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFPQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBS0E7OztBQUdBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBVEE7QUFZQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVRBO0FBWUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUtBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0E7QUFBQTtBQUFBO0FBQ0E7QUF5Q0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBVEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBakJBO0FBNEJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBREE7QUFWQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFEQTtBQVZBO0FBckJBO0FBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBTkE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFDQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBSkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQURBO0FBNENBO0FBQ0E7QUFqREE7QUFvREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBL0JBO0FBSkE7QUFEQTtBQWdEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFOQTtBQVFBO0FBUkE7QUFQQTtBQUFBO0FBcUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFEQTtBQUpBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFWQTtBQXZEQTtBQXlFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVBBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7QUF2RkE7QUE5RUE7QUE3QkE7QUEwTkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUhBO0FBRkE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFGQTtBQUpBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBRkE7QUFKQTtBQXhCQTtBQUpBO0FBUkE7QUFmQTtBQXFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFWQTtBQWlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFnQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFuQkE7QUE0QkE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFlQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTEE7QUFjQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFRQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBVUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFyQ0E7QUFDQTtBQWlEQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFVQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBbkJBO0FBTEE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXNCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBU0E7QUFUQTtBQUFBO0FBRkE7QUFBQTtBQWdCQTtBQTlDQTtBQWlEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUdBO0FBSEE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBb0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFhQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW9CQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFOQTtBQW9CQTtBQXRDQTtBQXlDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFOQTtBQW9CQTtBQXJDQTtBQXlDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBckJBO0FBd0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFUQTtBQWdCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVpBO0FBZUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFkQTtBQWlCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFqQkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFSQTtBQWVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQU5BO0FBUUE7QUFSQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFsQkE7QUE4QkE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFJQTtBQWJBO0FBREE7QUFQQTtBQTZCQTtBQW5DQTtBQXFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQVZBO0FBTkE7QUExQ0E7QUFSQTtBQURBO0FBREE7QUFnRkE7Ozs7QUE3a0VBO0FBQ0E7QUEra0VBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQVZBO0FBQ0E7QUFhQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUdBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBdEJBO0FBQ0E7QUF1QkE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUpBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBaEJBO0FBQ0E7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFnQkE7QUFBQTtBQUNBO0FBakJBO0FBMkJBO0FBQ0E7QUFDQTtBQTdCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBZkE7QUFBQTtBQUNBO0FBL0JBO0FBOERBO0FBQUE7QUFDQTtBQTdEQTtBQUZBO0FBR0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBOzs7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFUQTtBQXBDQTtBQW1EQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFGQTtBQU9BO0FBWkE7QUFjQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUZBO0FBaEJBO0FBQ0E7QUFzQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVEE7QUFqQkE7QUFnQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFGQTtBQUpBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVRBO0FBN0JBO0FBK0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUExVEE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBQ0E7QUEwVEE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFUQTtBQTVCQTtBQThDQTs7OztBQTdGQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBNkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFEQTtBQTNEQTtBQWdGQTs7OztBQTFLQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFDQTtBQTBLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQW5CQTtBQXVCQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFFQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZ0JBOzs7O0FBeERBO0FBQ0E7QUEwREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFEQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFEQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBUEE7QUFoQkE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBVkE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBWkE7QUF2RUE7QUFEQTtBQThGQTs7OztBQTdMQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFDQTtBQTZMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQUpBO0FBSEE7QUFJQTtBQUNBOzs7QUFPQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFQQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFSQTtBQTVDQTtBQThEQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBM0pBO0FBQ0E7QUE2SkE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=