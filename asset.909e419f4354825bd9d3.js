(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[39],{

/***/ 3193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2377);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2058);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2078);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2378);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2722);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2061);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2483);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2094);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(587);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(576);
/* harmony import */ var _Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3194);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(418);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(490);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(603);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2574);
/* harmony import */ var _Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3195);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(558);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1818);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(592);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3196);
/* harmony import */ var _AssetPublishFeed__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3197);
/* harmony import */ var _AssetResolvePrediction__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3199);
/* harmony import */ var _BidCollateralOperation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3200);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(742);
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

/***/ 3194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
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

/***/ 3195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(746);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(603);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2071);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2855);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2078);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2319);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2058);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(418);
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

/***/ 3196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2071);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1934);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1935);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(746);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2319);
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

/***/ 3197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2071);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1934);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1935);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(746);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2319);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2058);
/* harmony import */ var _Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3198);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2855);
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

/***/ 3198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AmountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2855);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(603);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2058);
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

/***/ 3199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1935);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1934);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2319);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(592);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(742);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2057);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(418);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(603);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(587);
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

/***/ 3200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(746);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2378);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2855);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2078);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2319);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2058);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(418);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuOTA5ZTQxOWY0MzU0ODI1YmQ5ZDMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQmxvY2tjaGFpbi9Bc3NldC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkVGltZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FjY291bnQvRmVlUG9vbE9wZXJhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRPd25lclVwZGF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRQdWJsaXNoRmVlZC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUHJpY2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRSZXNvbHZlUHJlZGljdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQmlkQ29sbGF0ZXJhbE9wZXJhdGlvbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XHJcbmltcG9ydCBMaW5rVG9Bc3NldEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQXNzZXRCeUlkXCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkUHJpY2UgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkUHJpY2VcIjtcclxuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgVGltZUFnbyBmcm9tIFwiLi4vVXRpbGl0eS9UaW1lQWdvXCI7XHJcbmltcG9ydCBIZWxwQ29udGVudCBmcm9tIFwiLi4vVXRpbGl0eS9IZWxwQ29udGVudFwiO1xyXG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRUaW1lIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFRpbWVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcclxuaW1wb3J0IHtDYWxsT3JkZXIsIENvbGxhdGVyYWxCaWQsIEZlZWRQcmljZX0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCBQYWdlNDA0IGZyb20gXCIuLi9QYWdlNDA0L1BhZ2U0MDRcIjtcclxuaW1wb3J0IEZlZVBvb2xPcGVyYXRpb24gZnJvbSBcIi4uL0FjY291bnQvRmVlUG9vbE9wZXJhdGlvblwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBBc3NldE93bmVyVXBkYXRlIGZyb20gXCIuL0Fzc2V0T3duZXJVcGRhdGVcIjtcclxuaW1wb3J0IEFzc2V0UHVibGlzaEZlZWQgZnJvbSBcIi4vQXNzZXRQdWJsaXNoRmVlZFwiO1xyXG5pbXBvcnQgQXNzZXRSZXNvbHZlUHJlZGljdGlvbiBmcm9tIFwiLi9Bc3NldFJlc29sdmVQcmVkaWN0aW9uXCI7XHJcbmltcG9ydCBCaWRDb2xsYXRlcmFsT3BlcmF0aW9uIGZyb20gXCIuL0JpZENvbGxhdGVyYWxPcGVyYXRpb25cIjtcclxuaW1wb3J0IHtUb29sdGlwLCBJY29uLCBUYWJsZSwgVGFicywgQ29sbGFwc2V9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuY29uc3Qge1BhbmVsfSA9IENvbGxhcHNlO1xyXG5cclxuY2xhc3MgQXNzZXRGbGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2lzU2V0LCBuYW1lfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKCFpc1NldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhc3NldC1mbGFnXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLlwiICsgbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jbGFzcyBBc3NldFBlcm1pc3Npb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7aXNTZXQsIG5hbWV9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKCFpc1NldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhc3NldC1mbGFnXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLlwiICsgbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFzc2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNhbGxPcmRlcnM6IFtdLFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsQmlkczogW10sXHJcbiAgICAgICAgICAgIG1hcmdpblRhYmxlU29ydDogXCJyYXRpb1wiLFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsVGFibGVTb3J0OiBcInByaWNlXCIsXHJcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb246IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDb2xsYXRlcmFsQmlkSW5JbmZvOiBmYWxzZSxcclxuICAgICAgICAgICAgY3VtdWxhdGl2ZUdyb3VwaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgYWN0aXZlRmVlZFRhYjogXCJtYXJnaW5cIixcclxuICAgICAgICAgICAgYWN0aXZlQXNzZXRUYWI6IFwiaW5mb1wiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0TWFyZ2luQ29sbGF0ZXJhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU9uQ29sbGF0ZXJhbEJpZCgpIHtcclxuICAgICAgICB0aGlzLl9nZXRNYXJnaW5Db2xsYXRlcmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldE1hcmdpbkNvbGxhdGVyYWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXQuaGFzKFwiYml0YXNzZXRcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgYXNzZXRzID0ge1xyXG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmFzc2V0LnRvSlMoKSxcclxuICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiXHJcbiAgICAgICAgICAgICAgICApXTogdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQudG9KUygpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFxyXG4gICAgICAgICAgICAgICAgW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmVlZFByaWNlID0gdGhpcy5fZ2V0RmVlZFByaWNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISFmZWVkUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1jciA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGJfYXBpKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmV4ZWMoXCJnZXRfY2FsbF9vcmRlcnNcIiwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjYWxsX29yZGVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbE9yZGVycyA9IGNhbGxfb3JkZXJzLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENhbGxPcmRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1jcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmVkaWN0aW9uTWFya2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FsbE9yZGVyc30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBBcGlzLmluc3RhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5leGVjKFwiZ2V0X2NvbGxhdGVyYWxfYmlkc1wiLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjb2xsX29yZGVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sbGF0ZXJhbEJpZHMgPSBjb2xsX29yZGVycy5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xsYXRlcmFsQmlkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxhdGVyYWxCaWRzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0X2NvbGxhdGVyYWxfYmlkcyBFcnJvcjogXCIsIGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXRzID0ge1xyXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV06IHRoaXMucHJvcHMuYXNzZXQudG9KUygpLFxyXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC50b0pTKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFxyXG4gICAgICAgICAgICBbXCJiaXRhc3NldFwiLCBcImlzX3ByZWRpY3Rpb25fbWFya2V0XCJdLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHNxciA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXHJcbiAgICAgICAgICAgIFwibWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCJcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgbGV0IGZlZWRQcmljZVJhdyA9IGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZSh0aGlzLnByb3BzLmFzc2V0KTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaGFzIGJlZW4gbm8gZmVlZCBwcmljZSwgc2V0dGxlUHJpY2UgaGFzIDAgYW1vdW50XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcuZ2V0SW4oW1wiYmFzZVwiLCBcImFtb3VudFwiXSkgPT0gMCAmJlxyXG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcuZ2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0pID09IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmVlZFByaWNlO1xyXG5cclxuICAgICAgICAvKiBQcmVkaWN0aW9uIG1hcmtldHMgZG9uJ3QgbmVlZCBmZWVkcyBmb3Igc2hvcnRpbmcsIHNvIHRoZSBzZXR0bGVtZW50IHByaWNlIGNhbiBiZSBzZXQgdG8gMToxICovXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXQgJiZcclxuICAgICAgICAgICAgZmVlZFByaWNlUmF3LmdldEluKFtcImJhc2VcIiwgXCJhc3NldF9pZFwiXSkgPT09XHJcbiAgICAgICAgICAgICAgICBmZWVkUHJpY2VSYXcuZ2V0SW4oW1wicXVvdGVcIiwgXCJhc3NldF9pZFwiXSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKCFhc3NldHNbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFwiaWRcIildKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldHNbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFwiaWRcIildID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmVlZFByaWNlUmF3ID0gZmVlZFByaWNlUmF3LnNldEluKFtcImJhc2VcIiwgXCJhbW91bnRcIl0sIDEpO1xyXG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcgPSBmZWVkUHJpY2VSYXcuc2V0SW4oXHJcbiAgICAgICAgICAgICAgICBbXCJiYXNlXCIsIFwiYXNzZXRfaWRcIl0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcgPSBmZWVkUHJpY2VSYXcuc2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0sIDEpO1xyXG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcgPSBmZWVkUHJpY2VSYXcuc2V0SW4oXHJcbiAgICAgICAgICAgICAgICBbXCJxdW90ZVwiLCBcImFzc2V0X2lkXCJdLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzcXIgPSAxMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2F0Y2ggSW52YWxpZCBTZXR0bGVQcmljZSBvYmplY3RcclxuICAgICAgICBpZiAoZmVlZFByaWNlUmF3LnRvSlMpIHtcclxuICAgICAgICAgICAgbGV0IHNldHRsZU9iamVjdCA9IGZlZWRQcmljZVJhdy50b0pTKCk7XHJcbiAgICAgICAgICAgIGlmICghYXNzZXRzW3NldHRsZU9iamVjdC5iYXNlLmFzc2V0X2lkXSkgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmVlZFByaWNlID0gbmV3IEZlZWRQcmljZSh7XHJcbiAgICAgICAgICAgIHByaWNlT2JqZWN0OiBmZWVkUHJpY2VSYXcsXHJcbiAgICAgICAgICAgIG1hcmtldF9iYXNlOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICBzcXIsXHJcbiAgICAgICAgICAgIGFzc2V0c1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmVlZFByaWNlO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVDdW11bGF0aXZlR3JvdXBpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGN1bXVsYXRpdmVHcm91cGluZzogIXRoaXMuc3RhdGUuY3VtdWxhdGl2ZUdyb3VwaW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2Fzc2V0VHlwZShhc3NldCkge1xyXG4gICAgICAgIHJldHVybiBcImJpdGFzc2V0XCIgaW4gYXNzZXRcclxuICAgICAgICAgICAgPyBhc3NldC5iaXRhc3NldC5pc19wcmVkaWN0aW9uX21hcmtldFxyXG4gICAgICAgICAgICAgICAgPyBcIlByZWRpY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgOiBcIlNtYXJ0XCJcclxuICAgICAgICAgICAgOiBcIlNpbXBsZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdHRlZFByaWNlKFxyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICAgIGhpZGVfc3ltYm9scyA9IGZhbHNlLFxyXG4gICAgICAgIGhpZGVfdmFsdWUgPSBmYWxzZSxcclxuICAgICAgICBmYWN0b3IgPSAwLFxyXG4gICAgICAgIG5lZ2F0aXZlX2ludmVydCA9IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodHlwZW9mIHByaWNlID09IFwibnVtYmVyXCIgJiYgaXNOYU4ocHJpY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJhc2UgPSBwcmljZS5iYXNlO1xyXG4gICAgICAgIHZhciBxdW90ZSA9IHByaWNlLnF1b3RlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2Jhc2UuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgYmFzZV9hc3NldD17YmFzZS5hc3NldF9pZH1cclxuICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17cXVvdGUuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgaGlkZV92YWx1ZT17aGlkZV92YWx1ZX1cclxuICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9scz17aGlkZV9zeW1ib2xzfVxyXG4gICAgICAgICAgICAgICAgZmFjdG9yPXtmYWN0b3J9XHJcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZV9pbnZlcnQ9e25lZ2F0aXZlX2ludmVydH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZsYWdJbmRpY2F0b3JzKGZsYWdzLCBuYW1lcykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bmFtZXMubWFwKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEZsYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGZsYWdfJHtuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZXQ9e2ZsYWdzW25hbWVdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQZXJtaXNzaW9uSW5kaWNhdG9ycyhwZXJtaXNzaW9ucywgbmFtZXMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge25hbWVzLm1hcChuYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRQZXJtaXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BwZXJtXyR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2V0PXtwZXJtaXNzaW9uc1tuYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQXV0aG9yaXR5TGlzdChhdXRob3JpdGllcykge1xyXG4gICAgICAgIHJldHVybiBhdXRob3JpdGllcy5tYXAoZnVuY3Rpb24oYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2F1dGhvcml0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2F1dGhvcml0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNYXJrZXRMaXN0KGFzc2V0LCBtYXJrZXRzKSB7XHJcbiAgICAgICAgdmFyIHN5bWJvbCA9IGFzc2V0LnN5bWJvbDtcclxuICAgICAgICByZXR1cm4gbWFya2V0cy5tYXAoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKG1hcmtldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtldCA9PSBzeW1ib2wpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldElEID0gbWFya2V0ICsgXCJfXCIgKyBzeW1ib2w7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFya2V0TmFtZSA9IG1hcmtldCArIFwiL1wiICsgc3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e21hcmtldElEfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvbWFya2V0LyR7bWFya2V0SUR9YH0+e21hcmtldE5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckFib3V0Qm94KGFzc2V0LCBvcmlnaW5hbEFzc2V0KSB7XHJcbiAgICAgICAgdmFyIGlzc3VlciA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFzc2V0Lmlzc3VlciwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICB2YXIgaXNzdWVyTmFtZSA9IGlzc3VlciA/IGlzc3Vlci5nZXQoXCJuYW1lXCIpIDogXCJcIjtcclxuXHJcbiAgICAgICAgLy8gQWRkIDxhIHRvIGFueSBsaW5rcyBpbmNsdWRlZCBpbiB0aGUgZGVzY3JpcHRpb25cclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXHJcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBkZXNjID0gZGVzY3JpcHRpb24ubWFpbjtcclxuICAgICAgICBsZXQgc2hvcnRfbmFtZSA9IGRlc2NyaXB0aW9uLnNob3J0X25hbWUgPyBkZXNjcmlwdGlvbi5zaG9ydF9uYW1lIDogbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IHVybFRlc3QgPSAvKGh0dHA/KTpcXC9cXC8od3d3XFwuKT9bYS16MC05XFwuOl0uKj8oPz1cXHMpL2c7XHJcblxyXG4gICAgICAgIC8vIFJlZ2V4cCBuZWVkcyBhIHdoaXRlc3BhY2UgYWZ0ZXIgYSB1cmwsIHNvIGFkZCBvbmUgdG8gbWFrZSBzdXJlXHJcbiAgICAgICAgZGVzYyA9IGRlc2MgJiYgZGVzYy5sZW5ndGggPiAwID8gZGVzYyArIFwiIFwiIDogZGVzYztcclxuICAgICAgICBsZXQgdXJscyA9IGRlc2MubWF0Y2godXJsVGVzdCk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBtYXJrZXQgbGlua1xyXG4gICAgICAgIGNvbnN0IGNvcmVfYXNzZXQgPSB0aGlzLnByb3BzLmNvcmVBc3NldDtcclxuICAgICAgICBjb25zdCBjb3JlX2Fzc2V0X3N5bWJvbCA9IGNvcmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgICAgIGxldCBwcmVmZXJyZWRNYXJrZXQgPSBkZXNjcmlwdGlvbi5tYXJrZXRcclxuICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcclxuICAgICAgICAgICAgOiBjb3JlX2Fzc2V0X3N5bWJvbDtcclxuICAgICAgICBpZiAoYXNzZXQuYml0YXNzZXQpIHtcclxuICAgICAgICAgICAgcHJlZmVycmVkTWFya2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcclxuICAgICAgICAgICAgICAgIGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoISFwcmVmZXJyZWRNYXJrZXQgJiYgcHJlZmVycmVkTWFya2V0LmdldCkge1xyXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkTWFya2V0ID0gcHJlZmVycmVkTWFya2V0LmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByZWZlcnJlZE1hcmtldCA9IGNvcmVfYXNzZXRfc3ltYm9sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhc3NldC5zeW1ib2wgPT09IGNvcmVfYXNzZXRfc3ltYm9sKSBwcmVmZXJyZWRNYXJrZXQgPSBcIlVTRFwiO1xyXG4gICAgICAgIGlmICh1cmxzICYmIHVybHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHVybHMuZm9yRWFjaCh1cmwgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcmtkb3duVXJsID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZXh0ZXJuYWwtbGlua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiJHt1cmx9XCI+JHt1cmx9PC9hPmA7XHJcbiAgICAgICAgICAgICAgICBkZXNjID0gZGVzYy5yZXBsYWNlKHVybCwgbWFya2Rvd25VcmwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB7bmFtZSwgcHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKG9yaWdpbmFsQXNzZXQpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthc3NldC5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvcnRfbmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5SaWdodDogMTV9fT57c2hvcnRfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG1hcmtldC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9tYXJrZXQvJHthc3NldC5zeW1ib2x9XyR7cHJlZmVycmVkTWFya2V0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tYXJrZXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg9e1wiYXNzZXRzL1wiICsgYXNzZXQuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdF9wYXRoPVwiYXNzZXRzL0Fzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uPVwic3VtbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXsocHJlZml4IHx8IFwiXCIpICsgbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY31cclxuICAgICAgICAgICAgICAgICAgICBpc3N1ZXI9e2lzc3Vlck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9pc3N1ZXI9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3VtbWFyeShhc3NldCkge1xyXG4gICAgICAgIC8vIFRPRE86IGNvbmZpZGVudGlhbF9zdXBwbHk6IDAgVVNEICAgW0lGIE5PVCBaRVJPIE9SIE5PVCBESVNBQkxFIENPTkZJREVOVElBTF1cclxuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xyXG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhc3NldC5vcHRpb25zO1xyXG5cclxuICAgICAgICBsZXQgZmxhZ0Jvb2xlYW5zID0gYXNzZXRVdGlscy5nZXRGbGFnQm9vbGVhbnMoXHJcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZmxhZ3MsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuaGFzKFwiYml0YXNzZXRfZGF0YV9pZFwiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBiaXROYW1lcyA9IE9iamVjdC5rZXlzKGZsYWdCb29sZWFucyk7XHJcblxyXG4gICAgICAgIGxldCBpc1ByZWRpY3Rpb24gPVxyXG4gICAgICAgICAgICBcImJpdGFzc2V0XCIgaW4gYXNzZXQgJiYgYXNzZXQuYml0YXNzZXQuaXNfcHJlZGljdGlvbl9tYXJrZXQ7XHJcbiAgICAgICAgbGV0IHByZWRpY3Rpb25Sb3dzID0gbnVsbDtcclxuICAgICAgICBpZiAoaXNQcmVkaWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcclxuICAgICAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcHJlZGljdGlvblJvd3MgPSAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9wcmVkaWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnByZWRpY3Rpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9wcmVkaWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbi5jb25kaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC50b29sdGlwX3Jlc29sdXRpb25fZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC5yZXNvbHV0aW9uX2RhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9yZXNvbHV0aW9uX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uLmV4cGlyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50U3VwcGx5ID0gZHluYW1pYyA/IChcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuY3VycmVudF9zdXBwbHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmN1cnJlbnRfc3VwcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcblxyXG4gICAgICAgIHZhciBzdGVhbHRoU3VwcGx5ID0gZHluYW1pYyA/IChcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuc3RlYWx0aF9zdXBwbHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmNvbmZpZGVudGlhbF9zdXBwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApIDogbnVsbDtcclxuXHJcbiAgICAgICAgdmFyIG1hcmtldEZlZSA9IGZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdID8gKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+IHtvcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudCAvIDEwMC4wfSAlIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcblxyXG4gICAgICAgIC8vIG9wdGlvbnMubWF4X21hcmtldF9mZWUgaW5pdGlhbGx5IGEgc3RyaW5nXHJcbiAgICAgICAgdmFyIG1hcmtldEZlZVJlZmVycmFsUmV3YXJkID1cclxuICAgICAgICAgICAgZmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gJiZcclxuICAgICAgICAgICAgb3B0aW9ucy5leHRlbnNpb25zICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZXh0ZW5zaW9ucy5yZXdhcmRfcGVyY2VudCA+PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5yZXdhcmRfcGVyY2VudF90b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkubWFya2V0X2ZlZV9yZWZlcnJhbF9yZXdhcmRfcGVyY2VudFwiLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwicXVlc3Rpb24tY2lyY2xlXCIgdGhlbWU9XCJmaWxsZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ge29wdGlvbnMuZXh0ZW5zaW9ucy5yZXdhcmRfcGVyY2VudCAvIDEwMC4wfSAlPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmQgbm8tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2Fzc2V0LnN5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuYXNzZXRfdHlwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7dGhpcy5fYXNzZXRUeXBlKGFzc2V0KX0gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzUHJlZGljdGlvbiAmJiBwcmVkaWN0aW9uUm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuaXNzdWVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2Fzc2V0Lmlzc3Vlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMucHJlY2lzaW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHthc3NldC5wcmVjaXNpb259IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthc3NldC5iaXRhc3NldCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5iYWNraW5nX2Fzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0Fzc2V0QnlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3J0X2JhY2tpbmdfYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U3VwcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RlYWx0aFN1cHBseX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldEZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldEZlZVJlZmVycmFsUmV3YXJkfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGbGFnSW5kaWNhdG9ycyhmbGFnQm9vbGVhbnMsIGJpdE5hbWVzKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQcmljZUZlZWQoYXNzZXQpIHtcclxuICAgICAgICB2YXIgYml0QXNzZXQgPSBhc3NldC5iaXRhc3NldDtcclxuICAgICAgICBpZiAoIShcImN1cnJlbnRfZmVlZFwiIGluIGJpdEFzc2V0KSkgcmV0dXJuIDxkaXYgaGVhZGVyPXt0aXRsZX0gLz47XHJcbiAgICAgICAgdmFyIGN1cnJlbnRGZWVkID0gYml0QXNzZXQuY3VycmVudF9mZWVkO1xyXG5cclxuICAgICAgICB2YXIgZmVlZFByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcclxuICAgICAgICAgICAgYXNzZXRVdGlscy5leHRyYWN0UmF3RmVlZFByaWNlKGFzc2V0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciB0aXRsZSA9IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQudGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj57ZmVlZFByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhbmVsIGhlYWRlcj17dGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMS4ycmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZXh0ZXJuYWxfZmVlZF9wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmZWVkUHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZmVlZF9saWZldGltZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiaXRBc3NldC5vcHRpb25zLmZlZWRfbGlmZXRpbWVfc2VjIC8gNjAgLyA2MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1pbl9mZWVkc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntiaXRBc3NldC5vcHRpb25zLm1pbmltdW1fZmVlZHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50RmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvIC8gMTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfYW5hbHl6ZUJpZHMoc2V0dGxlbWVudF9mdW5kX2RlYnQpIHtcclxuICAgICAgICAvLyBDb252ZXJ0IHN1cHBseSB0byBjYWxjdWxhYmxlIHZhbHVlc1xyXG4gICAgICAgIGxldCBjdXJyZW50X3N1cHBseV92YWx1ZSA9IHNldHRsZW1lbnRfZnVuZF9kZWJ0O1xyXG5cclxuICAgICAgICBsZXQgYmlkc19jb2xsYXRlcmFsX3ZhbHVlID0gMDtcclxuICAgICAgICBsZXQgYmlkc19kZWJ0X3ZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgbGV0IHNvcnRlZF9iaWRzID0gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsQmlkcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmJpZC50b1JlYWwoKSAtIGEuYmlkLnRvUmVhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb3J0ZWRfYmlkcy5mb3JFYWNoKGJpZCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb2xsYXRlcmFsID0gYmlkLmNvbGxhdGVyYWw7XHJcbiAgICAgICAgICAgIGxldCBkZWJ0ID0gYmlkLmRlYnQ7XHJcbiAgICAgICAgICAgIGlmIChiaWRzX2RlYnRfdmFsdWUgPCBjdXJyZW50X3N1cHBseV92YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpZHNfZGVidF92YWx1ZSArIGRlYnQgPj0gY3VycmVudF9zdXBwbHlfdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWJ0ID0gY3VycmVudF9zdXBwbHlfdmFsdWUgLSBiaWRzX2RlYnRfdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbCA9IChkZWJ0IC8gYmlkLmRlYnQpICogY29sbGF0ZXJhbDtcclxuICAgICAgICAgICAgICAgICAgICBiaWQuY29uc2lkZXJlZElmUmV2aXZlZCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpZC5jb25zaWRlcmVkSWZSZXZpdmVkID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJpZHNfY29sbGF0ZXJhbF92YWx1ZSA9IGJpZHNfY29sbGF0ZXJhbF92YWx1ZSArIGNvbGxhdGVyYWw7XHJcbiAgICAgICAgICAgICAgICBiaWRzX2RlYnRfdmFsdWUgPSBiaWRzX2RlYnRfdmFsdWUgKyBkZWJ0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmlkLmNvbnNpZGVyZWRJZlJldml2ZWQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IGJpZHNfY29sbGF0ZXJhbF92YWx1ZSxcclxuICAgICAgICAgICAgZGVidDogYmlkc19kZWJ0X3ZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTZXR0bGVtZW50KGFzc2V0KSB7XHJcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XHJcbiAgICAgICAgaWYgKCEoXCJjdXJyZW50X2ZlZWRcIiBpbiBiaXRBc3NldCkpIHJldHVybiA8ZGl2IGhlYWRlcj17dGl0bGV9IC8+O1xyXG5cclxuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xyXG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTdXBwbHkgPSBkeW5hbWljID8gZHluYW1pYy5jdXJyZW50X3N1cHBseSA6IDA7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50RmVlZCA9IGJpdEFzc2V0LmN1cnJlbnRfZmVlZDtcclxuICAgICAgICB2YXIgaXNHbG9iYWxTZXR0bGUgPSBhc3NldC5iaXRhc3NldC5zZXR0bGVtZW50X2Z1bmQgPiAwID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgc2V0dGxlbWVudF9mdW5kX2NvbGxhdGVyYWxfcmF0aW8gPSBudWxsO1xyXG4gICAgICAgIGxldCB0b3RhbF9jb2xsYXRlcmFsX3JhdGlvID0gbnVsbDtcclxuICAgICAgICBsZXQgcmV2aXZlX3ByaWNlX3dpdGhfYmlkcyA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChpc0dsb2JhbFNldHRsZSkge1xyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqIEdsb2JhbCBTZXR0bGVkIEFzc2V0c1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnRGdW5kID0gYml0QXNzZXQuc2V0dGxlbWVudF9mdW5kO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEluIGdsb2JhbGx5IHNldHRsZWQgYXNzZXRzIHRoZSBmb3JjZSBzZXR0bGVtZW50IG9mZnNldCBpcyAwXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB2YXIgc2V0dGxlbWVudFByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcclxuICAgICAgICAgICAgICAgIGJpdEFzc2V0LnNldHRsZW1lbnRfcHJpY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHJldml2ZVByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcclxuICAgICAgICAgICAgICAgIGJpdEFzc2V0LnNldHRsZW1lbnRfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEZlZWQubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbyAvIDEwMDAsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSB7XHJcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKV06IHRoaXMucHJvcHMuYXNzZXQudG9KUygpLFxyXG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYmFja2luZ0Fzc2V0LmdldChcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCJcclxuICAgICAgICAgICAgICAgICldOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC50b0pTKClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgc3VwcGx5IHRvIGNhbGN1bGFibGUgdmFsdWVzXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50X3N1cHBseV92YWx1ZSA9IGN1cnJlbnRTdXBwbHk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgPSBiaXRBc3NldC5zZXR0bGVtZW50X2Z1bmQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmlkcyA9IHRoaXMuX2FuYWx5emVCaWRzKGN1cnJlbnRfc3VwcGx5X3ZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHJldml2ZV9wcmljZV93aXRoX2JpZHMgPSAoXHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17Yml0QXNzZXQuc2V0dGxlbWVudF9mdW5kIC8gMSArIGJpZHMuY29sbGF0ZXJhbH0gLy8gLzEgaXMgaW1wbGljaXQgdHlwZSBjb252ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17YXNzZXRzW2JpdEFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldF0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtiaWRzLmRlYnR9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2Fzc2V0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfdmFsdWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfc3ltYm9scz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjdG9yPXtjdXJyZW50RmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMH1cclxuICAgICAgICAgICAgICAgICAgICBuZWdhdGl2ZV9pbnZlcnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudF9zdXBwbHlfdmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgY3VycmVudF9zdXBwbHlfdmFsdWUgLyBNYXRoLnBvdygxMCwgYXNzZXQucHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgY3VycmVudF9jb2xsYXRlcmFsX3ZhbHVlID1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfY29sbGF0ZXJhbF92YWx1ZSAvXHJcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhcclxuICAgICAgICAgICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldHNbYml0QXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0XS5wcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmlkc19jb2xsYXRlcmFsID1cclxuICAgICAgICAgICAgICAgIGJpZHMuY29sbGF0ZXJhbCAvXHJcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhcclxuICAgICAgICAgICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldHNbYml0QXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0XS5wcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmVlZFByaWNlID0gdGhpcy5fZ2V0RmVlZFByaWNlKCk7XHJcbiAgICAgICAgICAgIGlmIChmZWVkUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIHNldHRsZW1lbnRfZnVuZF9jb2xsYXRlcmFsX3JhdGlvID1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgL1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZS50b1JlYWwoKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9zdXBwbHlfdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdG90YWxfY29sbGF0ZXJhbF9yYXRpbyA9XHJcbiAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRfY29sbGF0ZXJhbF92YWx1ZSArIGJpZHNfY29sbGF0ZXJhbCkgL1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZS50b1JlYWwoKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9zdXBwbHlfdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvKioqXHJcbiAgICAgICAgICAgICAqIE5vbiBHbG9iYWwgU2V0dGxlbWVudCBBc3NldHNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHZhciBnbG9iYWxTZXR0bGVtZW50UHJpY2UgPSB0aGlzLmdldEdsb2JhbFNldHRsZW1lbnRQcmljZSgpO1xyXG4gICAgICAgICAgICB2YXIgZ2xvYmFsU2V0dGxlbWVudFRyaWdnZXJQcmljZSA9IHRoaXMuZ2V0R2xvYmFsU2V0dGxlbWVudFByaWNlKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvIC8gMTAwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNldHRsZWQgPSBiaXRBc3NldC5mb3JjZV9zZXR0bGVkX3ZvbHVtZTtcclxuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnRPZmZzZXQgPVxyXG4gICAgICAgICAgICAgICAgYml0QXNzZXQub3B0aW9ucy5mb3JjZV9zZXR0bGVtZW50X29mZnNldF9wZXJjZW50O1xyXG4gICAgICAgICAgICB2YXIgc2V0dGxlbWVudERlbGF5ID0gYml0QXNzZXQub3B0aW9ucy5mb3JjZV9zZXR0bGVtZW50X2RlbGF5X3NlYztcclxuICAgICAgICAgICAgdmFyIG1heFNldHRsZW1lbnRWb2x1bWUgPVxyXG4gICAgICAgICAgICAgICAgYml0QXNzZXQub3B0aW9ucy5tYXhpbXVtX2ZvcmNlX3NldHRsZW1lbnRfdm9sdW1lO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1zc3BQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoXHJcbiAgICAgICAgICAgICAgICBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UoYXNzZXQpLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRGZWVkLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyAvIDEwMDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHNldHRsZVByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcclxuICAgICAgICAgICAgICAgIGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShhc3NldCksXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgMSAtIHNldHRsZW1lbnRPZmZzZXQgLyAxMDAwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRpdGxlID0gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC50aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0dsb2JhbFNldHRsZSA/IHNldHRsZW1lbnRQcmljZSA6IHNldHRsZVByaWNlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7aXNHbG9iYWxTZXR0bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX2Rlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtpc0dsb2JhbFNldHRsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfcmV2aXZlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX3NlZV9hY3Rpb25zXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLCAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19vclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29sbGF0ZXJhbEJpZEluSW5mbzogIXRoaXMuc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93Q29sbGF0ZXJhbEJpZEluSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19wbGFjZV9iaWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBrZXktdmFsdWUtdGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzR2xvYmFsU2V0dGxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZW1lbnRfcHJpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzZXR0bGVtZW50UHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZW1lbnRfZnVuZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXRBc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17c2V0dGxlbWVudEZ1bmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZW1lbnRfZnVuZHNfY29sbGF0ZXJhbF9yYXRpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXR0bGVtZW50X2Z1bmRfY29sbGF0ZXJhbF9yYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXR0bGVtZW50X2Z1bmRfY29sbGF0ZXJhbF9yYXRpby50b0ZpeGVkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX3JldmVydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX2F1dG9fcmV2aXZlX3ByaWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jldml2ZVByaWNlfSAvIHtyZXZpdmVfcHJpY2Vfd2l0aF9iaWRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfY29sbGF0ZXJhbF92YWx1YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWNyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbF9jb2xsYXRlcmFsX3JhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRvdGFsX2NvbGxhdGVyYWxfcmF0aW8udG9GaXhlZCg2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21zc3BQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZ2xvYmFsX3NldHRsZW1lbnRfdHJpZ2dlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxTZXR0bGVtZW50VHJpZ2dlclByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGdsb2JhbFNldHRsZW1lbnRUcmlnZ2VyUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmdsb2JhbF9zZXR0bGVtZW50X3ByaWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dsb2JhbFNldHRsZW1lbnRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBnbG9iYWxTZXR0bGVtZW50UHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmZvcmNlX3NldHRsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyAoe3NldHRsZW1lbnRPZmZzZXQgLyAxMDB9JXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5vZmZzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3NldHRsZVByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5kZWxheVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRUaW1lIHRpbWU9e3NldHRsZW1lbnREZWxheX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQubWF4X3NldHRsZV92b2x1bWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXhTZXR0bGVtZW50Vm9sdW1lIC8gMTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN1cHBseSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1heFNldHRsZW1lbnRWb2x1bWUgLyAxMDAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuY3VycmVudF9zZXR0bGVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2N1cnJlbnRTZXR0bGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5zZXR0bGVfcmVtYWluaW5nX3ZvbHVtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U2V0dGxlZCA9PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRTZXR0bGVkIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRTdXBwbHkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1heFNldHRsZW1lbnRWb2x1bWUgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwKSkpICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9QYW5lbD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckZlZVBvb2woYXNzZXQpIHtcclxuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xyXG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhc3NldC5vcHRpb25zO1xyXG4gICAgICAgIGNvbnN0IGNvcmUgPSB0aGlzLnByb3BzLmNvcmVBc3NldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhbmVsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmZlZV9wb29sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5wb29sX3RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnNhZmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29yZT17Y29yZS5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjEuMnJlbVwifX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdHRlZFByaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnBvb2xfYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmZlZV9wb29sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC51bmNsYWltZWRfaXNzdWVyX2luY29tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pYy5hY2N1bXVsYXRlZF9mZWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQXNzZXRPd25lclVwZGF0ZShhc3NldCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYW5lbFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy51cGRhdGVfb3duZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnVwZGF0ZV9vd25lcl90ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxBc3NldE93bmVyVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE93bmVyPXthc3NldC5pc3N1ZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmVlZFB1Ymxpc2goYXNzZXQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFuZWxcclxuICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24udHJ4VHlwZXMuYXNzZXRfcHVibGlzaF9mZWVkXCIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVkX3Byb2R1Y2VyX3RleHRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxBc3NldFB1Ymxpc2hGZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE93bmVyPXthc3NldC5pc3N1ZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29sbGF0ZXJhbEJpZChhc3NldCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYW5lbFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXs8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsLmJpZFwiIC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWwuYmlkX3RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19pbmNsdWRlZF9vbl9yZXZpdmFsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsLnJlbW92ZV9iaWRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QmlkQ29sbGF0ZXJhbE9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgY29yZT17YXNzZXQuYml0YXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmRlckFjY291bnROYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXt0aGlzLnVwZGF0ZU9uQ29sbGF0ZXJhbEJpZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVCYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmVlUG9vbEZ1bmRpbmcoYXNzZXQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFuZWxcclxuICAgICAgICAgICAgICAgIGhlYWRlcj17PFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuZnVuZFwiIC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmZ1bmRfdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmVlUG9vbE9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUJhbGFuY2VcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGZWVQb29sQ2xhaW1pbmcoYXNzZXQpIHtcclxuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xyXG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhbmVsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNsYWltX2JhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmVlUG9vbE9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pYz17ZHluYW1pY31cclxuICAgICAgICAgICAgICAgICAgICBoaWRlQmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjbGFpbVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmVlc0NsYWltaW5nKGFzc2V0KSB7XHJcbiAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkKTtcclxuICAgICAgICBpZiAoZHluYW1pYykgZHluYW1pYyA9IGR5bmFtaWMudG9KUygpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYW5lbFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9jbGFpbV9mZWVzXCIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZlZVBvb2xPcGVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWM9e2R5bmFtaWN9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUJhbGFuY2VcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2xhaW1fZmVlc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogQmxhY2tsaXN0IEF1dGhvcml0aWVzOiA8QWNjb3VudCBsaXN0IGxpa2UgVm90aW5nPlxyXG4gICAgLy8gVE9ETzogQmxhY2tsaXN0IE1hcmtldDogQmFzZS9NYXJrZXQsIEJhc2UvTWFya2V0XHJcbiAgICByZW5kZXJQZXJtaXNzaW9ucyhhc3NldCkge1xyXG4gICAgICAgIC8vdmFyIGR5bmFtaWMgPSBhc3NldC5keW5hbWljO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IGFzc2V0Lm9wdGlvbnM7XHJcblxyXG4gICAgICAgIGxldCBwZXJtaXNzaW9uQm9vbGVhbnMgPSBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucyhcclxuICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5pc3N1ZXJfcGVybWlzc2lvbnMsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuaGFzKFwiYml0YXNzZXRfZGF0YV9pZFwiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBiaXROYW1lcyA9IE9iamVjdC5rZXlzKHBlcm1pc3Npb25Cb29sZWFucyk7XHJcblxyXG4gICAgICAgIC8vIG9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzID0gW1wiMS4yLjNcIiwgXCIxLjIuNFwiXTtcclxuICAgICAgICAvLyBvcHRpb25zLndoaXRlbGlzdF9hdXRob3JpdGllcyA9IFtcIjEuMi4xXCIsIFwiMS4yLjJcIl07XHJcbiAgICAgICAgLy8gb3B0aW9ucy5ibGFja2xpc3RfbWFya2V0cyA9IFtcIkpQWVwiLCBcIlJVQlwiXTtcclxuICAgICAgICAvLyBvcHRpb25zLndoaXRlbGlzdF9tYXJrZXRzID0gW1wiVVNEXCIsIFwiRVVSXCIsIFwiR09MRFwiXTtcclxuXHJcbiAgICAgICAgLy8gb3B0aW9ucy5tYXhfbWFya2V0X2ZlZSBpbml0aWFsbHkgYSBzdHJpbmdcclxuICAgICAgICB2YXIgbWF4TWFya2V0RmVlID0gcGVybWlzc2lvbkJvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5tYXhfbWFya2V0X2ZlZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9eytvcHRpb25zLm1heF9tYXJrZXRfZmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcblxyXG4gICAgICAgIC8vIG9wdGlvbnMubWF4X3N1cHBseSBpbml0aWFsbHkgYSBzdHJpbmdcclxuICAgICAgICB2YXIgbWF4U3VwcGx5ID0gKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMubWF4X3N1cHBseVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9eytvcHRpb25zLm1heF9zdXBwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB2YXIgd2hpdGVMaXN0cyA9IHBlcm1pc3Npb25Cb29sZWFuc1tcIndoaXRlX2xpc3RcIl0gPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHshIW9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLmJsYWNrbGlzdF9hdXRob3JpdGllcy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXV0aG9yaXR5TGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7ISFvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5ibGFja2xpc3RfbWFya2V0c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1hcmtldExpc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYmxhY2tsaXN0X21hcmtldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHshIW9wdGlvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLndoaXRlbGlzdF9hdXRob3JpdGllcy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXV0aG9yaXR5TGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7ISFvcHRpb25zLndoaXRlbGlzdF9tYXJrZXRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLndoaXRlbGlzdF9tYXJrZXRzLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy53aGl0ZWxpc3RfbWFya2V0c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1hcmtldExpc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2hpdGVsaXN0X21hcmtldHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcblxyXG4gICAgICAgIGxldCB3aGl0ZWxpc3RfbWFya2V0X2ZlZV9zaGFyaW5nID0gYXNzZXQub3B0aW9ucy5leHRlbnNpb25zXHJcbiAgICAgICAgICAgIC53aGl0ZWxpc3RfbWFya2V0X2ZlZV9zaGFyaW5nICYmIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5hY2NvdW50c19pbl93aGl0ZWxpc3RfbWFya2V0X2ZlZV9zaGFyaW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDogJm5ic3A7XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBdXRob3JpdHlMaXN0KFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZXh0ZW5zaW9ucy53aGl0ZWxpc3RfbWFya2V0X2ZlZV9zaGFyaW5nXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYW5lbFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy50aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF4TWFya2V0RmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21heFN1cHBseX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQZXJtaXNzaW9uSW5kaWNhdG9ycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbkJvb2xlYW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXROYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt3aGl0ZUxpc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgIHt3aGl0ZWxpc3RfbWFya2V0X2ZlZV9zaGFyaW5nfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGUgZ2xvYmFsIHNldHRsZW1lbnQgcHJpY2UgaXMgZGVmaW5lZCBhcyB0aGVcclxuICAgIC8vIHRoZSBwcmljZSBhdCB3aGljaCB0aGUgbGVhc3QgY29sbGF0ZXJhbGl6ZSBzaG9ydCdzXHJcbiAgICAvLyBjb2xsYXRlcmFsIG5vIGxvbmdlciBlbm91Z2ggdG8gYmFjayB0aGUgZGVidFxyXG4gICAgLy8gaGUvc2hlIG93ZXMuXHJcbiAgICBnZXRHbG9iYWxTZXR0bGVtZW50UHJpY2UobXNzciA9IDEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY2FsbE9yZGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpcnN0IGdldCB0aGUgbGVhc3QgY29sbGF0ZXJhbGl6ZWQgc2hvcnQgcG9zaXRpb25cclxuICAgICAgICB2YXIgbGVhc3RDb2xTaG9ydCA9IG51bGw7XHJcbiAgICAgICAgdmFyIGxlYXN0Q29sU2hvcnRSYXRpbyA9IG51bGw7XHJcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMuc3RhdGUuY2FsbE9yZGVycy5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2FsbF9vcmRlciA9IHRoaXMuc3RhdGUuY2FsbE9yZGVyc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsZWFzdENvbFNob3J0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnQgPSBjYWxsX29yZGVyO1xyXG4gICAgICAgICAgICAgICAgbGVhc3RDb2xTaG9ydFJhdGlvID0gY2FsbF9vcmRlci5nZXRSYXRpbygpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhbGxfb3JkZXIuZ2V0UmF0aW8oKSA8IGxlYXN0Q29sU2hvcnRSYXRpbykge1xyXG4gICAgICAgICAgICAgICAgbGVhc3RDb2xTaG9ydFJhdGlvID0gY2FsbF9vcmRlci5nZXRSYXRpbygpO1xyXG4gICAgICAgICAgICAgICAgbGVhc3RDb2xTaG9ydCA9IGNhbGxfb3JkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZWFzdENvbFNob3J0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gY291bGRuJ3QgZmluZCB0aGUgbGVhc3QgY29sc2hvcnQ/XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcyBwcmljZSB3aWxsIGhhcHBlbiB3aGVuIHRoZSBDUiBpcyAxLlxyXG4gICAgICAgIC8vIFRoZSBDUiBpcyAxIGlmIGNvbGxhdGVyYWwgLyAoZGVidCB4IGZlZWRfIHByaWNlKSA9PSAxXHJcbiAgICAgICAgLy8gUmVhcnJhbmdpbmcsIHRoaXMgbWVhbnMgdGhhdCB0aGUgQ1IgaXMgMSBpZlxyXG4gICAgICAgIC8vIGZlZWRfcHJpY2UgPT0gY29sbGF0ZXJhbCAvIGRlYnRcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIERlZmF1bHQgaXMgdG8gcmV0dXJuIHRoZSBnbG9iYWwgc2V0dGxlbWVudCBwcmljZVxyXG4gICAgICAgIC8vIFVzZSBtc3NyIHRvIGNhbGN1bGF0ZSBpbiB3aGVuIGFuIGV2ZW50IGhhcHBlbnNcclxuICAgICAgICAvLyBiYXNlZCBvbiBhbiBhc3NldHMgTVNTUlxyXG5cclxuICAgICAgICBsZXQgZGVidCA9IGxlYXN0Q29sU2hvcnQuZGVidCAqIG1zc3I7XHJcbiAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSBsZWFzdENvbFNob3J0LmNvbGxhdGVyYWw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2NvbGxhdGVyYWx9XHJcbiAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtsZWFzdENvbFNob3J0LmNhbGxfcHJpY2UuYmFzZS5hc3NldF9pZH1cclxuICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17ZGVidH1cclxuICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtsZWFzdENvbFNob3J0LmNhbGxfcHJpY2UucXVvdGUuYXNzZXRfaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyRmVlZFRhYmxlKGFzc2V0KSB7XHJcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhKFwiZmVlZHNcIiBpbiBiaXRBc3NldCkgfHxcclxuICAgICAgICAgICAgYml0QXNzZXQuZmVlZHMubGVuZ3RoID09IDAgfHxcclxuICAgICAgICAgICAgYml0QXNzZXQuaXNfcHJlZGljdGlvbl9tYXJrZXQgfHxcclxuICAgICAgICAgICAgIWJpdEFzc2V0LmZlZWRzLmxlbmd0aFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmZWVkcyA9IGJpdEFzc2V0LmZlZWRzO1xyXG4gICAgICAgIHZhciBmZWVkX3ByaWNlX2hlYWRlciA9IGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShmZWVkc1swXVsxXVsxXSk7XHJcbiAgICAgICAgdmFyIGNvcmVfZXhjaGFuZ2VfcmF0ZV9oZWFkZXIgPSBmZWVkc1swXVsxXVsxXS5jb3JlX2V4Y2hhbmdlX3JhdGU7XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBieSB2YWxpZCBmZWVkIGxpZmV0aW1lLCBTb3J0IGJ5IHB1Ymxpc2hlZCBkYXRlXHJcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBvbGRlc3RWYWxpZERhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgICAgICAgbm93IC0gYXNzZXQuYml0YXNzZXQub3B0aW9ucy5mZWVkX2xpZmV0aW1lX3NlYyAqIDEwMDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGZlZWRzID0gZmVlZHNcclxuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShhWzFdWzBdKSA+IG9sZGVzdFZhbGlkRGF0ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oZmVlZDEsIGZlZWQyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZmVlZDJbMV1bMF0pIC0gbmV3IERhdGUoZmVlZDFbMV1bMF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRGZWVkID0gYXNzZXRVdGlscy5leHRyYWN0UmF3RmVlZFByaWNlKGFzc2V0KTtcclxuICAgICAgICBsZXQgY3VycmVudEZlZWRQcmljZSA9XHJcbiAgICAgICAgICAgIGN1cnJlbnRGZWVkLmJhc2UuYW1vdW50IC8gY3VycmVudEZlZWQucXVvdGUuYW1vdW50O1xyXG5cclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2x1bW5zID0gW107XHJcblxyXG4gICAgICAgIGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJwdWJsaXNoZXJcIixcclxuICAgICAgICAgICAgICAgIGZpeGVkOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5wdWJsaXNoZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwdWJsaXNoZXJcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUEgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYS5wdWJsaXNoZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEpIG5hbWVBID0gbmFtZUEuZ2V0KFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUIgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYi5wdWJsaXNoZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUIpIG5hbWVCID0gbmFtZUIuZ2V0KFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17aXRlbX0gLz47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJmZWVkX3ByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLmZlZWRfcHJpY2VcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKHt0aGlzLmZvcm1hdHRlZFByaWNlKGZlZWRfcHJpY2VfaGVhZGVyLCBmYWxzZSwgdHJ1ZSl9KVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImZlZWRfcHJpY2VcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYV9wcmljZSA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZmVlZF9wcmljZS5iYXNlLmFtb3VudCAvIGEuZmVlZF9wcmljZS5xdW90ZS5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiX3ByaWNlID0gcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5mZWVkX3ByaWNlLmJhc2UuYW1vdW50IC8gYi5mZWVkX3ByaWNlLnF1b3RlLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhX3ByaWNlID4gYl9wcmljZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFfcHJpY2UgPCBiX3ByaWNlKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmJhc2UuYW1vdW50IC8gaXRlbS5xdW90ZS5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZWRpYW5fb2Zmc2V0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocHJpY2UgLyBjdXJyZW50RmVlZFByaWNlKSAqIDEwMCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXR0ZWRQcmljZShpdGVtLCB0cnVlKX0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhbl9vZmZzZXQgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidHh0bGFiZWwgc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lZGlhbl9vZmZzZXQgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInR4dGxhYmVsIHdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0eHRsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZWRpYW5fb2Zmc2V0fSVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdHRlZFByaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZV9leGNoYW5nZV9yYXRlX2hlYWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlZFByaWNlKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW9cIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcInB1Ymxpc2hEYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBmaXhlZDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnB1Ymxpc2hlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInB1Ymxpc2hEYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEucHVibGlzaERhdGUuZ2V0VGltZSgpID4gYi5wdWJsaXNoRGF0ZS5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhLnB1Ymxpc2hEYXRlLmdldFRpbWUoKSA8IGIucHVibGlzaERhdGUuZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRpbWVBZ28gdGltZT17aXRlbX0gLz47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZlZWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBmZWVkID0gZmVlZHNbaV07XHJcbiAgICAgICAgICAgIHZhciBwdWJsaXNoZXIgPSBmZWVkWzBdO1xyXG4gICAgICAgICAgICB2YXIgcHVibGlzaERhdGUgPSBuZXcgRGF0ZShmZWVkWzFdWzBdICsgXCJaXCIpO1xyXG4gICAgICAgICAgICB2YXIgZmVlZF9wcmljZSA9IGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShmZWVkWzFdWzFdKTtcclxuICAgICAgICAgICAgdmFyIGNvcmVfZXhjaGFuZ2VfcmF0ZSA9IGZlZWRbMV1bMV0uY29yZV9leGNoYW5nZV9yYXRlO1xyXG4gICAgICAgICAgICB2YXIgbWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbyA9XHJcbiAgICAgICAgICAgICAgICBcIlwiICsgZmVlZFsxXVsxXS5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMDtcclxuICAgICAgICAgICAgdmFyIG1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyA9XHJcbiAgICAgICAgICAgICAgICBcIlwiICsgZmVlZFsxXVsxXS5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gLyAxMDAwO1xyXG5cclxuICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlcjogcHVibGlzaGVyLFxyXG4gICAgICAgICAgICAgICAgZmVlZF9wcmljZTogZmVlZF9wcmljZSxcclxuICAgICAgICAgICAgICAgIGNvcmVfZXhjaGFuZ2VfcmF0ZTogY29yZV9leGNoYW5nZV9yYXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbzogbWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbyxcclxuICAgICAgICAgICAgICAgIG1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbzogbWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvLFxyXG4gICAgICAgICAgICAgICAgcHVibGlzaERhdGU6IHB1Ymxpc2hEYXRlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICByb3dLZXk9XCJmZWVkUHVibGlzaGVyXCJcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBsb2NhbGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eVRleHQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLmVtcHR5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlck1hcmdpblRhYmxlKCkge1xyXG4gICAgICAgIGxldCB7Y3VtdWxhdGl2ZUdyb3VwaW5nfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXTtcclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jYWxsT3JkZXJzICYmIHRoaXMuc3RhdGUuY2FsbE9yZGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1bW11bGF0aXZlU3VmZml4ID0gY3VtdWxhdGl2ZUdyb3VwaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7KFxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmN1bXVsYXRpdmVcIiAvPilcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxzcGFuPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkZWJ0X2N1bSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBjb2xsX2N1bSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhbGxPcmRlcnMubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVidF9jdW0gKz0gYy5kZWJ0O1xyXG4gICAgICAgICAgICAgICAgY29sbF9jdW0gKz0gYy5jb2xsYXRlcmFsO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9ycm93ZXI6IGMuYm9ycm93ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGN1bXVsYXRpdmVHcm91cGluZyA/IGNvbGxfY3VtIDogYy5jb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogYy5nZXRDb2xsYXRlcmFsKCkuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlYnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBjdW11bGF0aXZlR3JvdXBpbmcgPyBkZWJ0X2N1bSA6IGMuZGVidCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGMuYW1vdW50VG9SZWNlaXZlKCkuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IGMuY2FsbF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICB0Y3I6IGMub3JkZXIudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8sXHJcbiAgICAgICAgICAgICAgICAgICAgY3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86IGMuZ2V0UmF0aW8oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBjLmdldFN0YXR1cygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB1bml0SW5mbyA9IGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGRhdGFTb3VyY2VbMF1ba2V5XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhU291cmNlLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmJhc2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdHRlZFByaWNlKGl0ZW0sIGZhbHNlLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Ftb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJib3Jyb3dlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dlclwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJib3Jyb3dlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVBID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEuYm9ycm93ZXIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBKSBuYW1lQSA9IG5hbWVBLmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lQiA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLmJvcnJvd2VyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQikgbmFtZUIgPSBuYW1lQi5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtpdGVtfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjb2xsYXRlcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uY29sbGF0ZXJhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VtbXVsYXRpdmVTdWZmaXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dW5pdEluZm8oXCJjb2xsYXRlcmFsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNvbGxhdGVyYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmNvbGxhdGVyYWwuYW1vdW50ID4gYi5jb2xsYXRlcmFsLmFtb3VudCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmNvbGxhdGVyYWwuYW1vdW50IDwgYi5jb2xsYXRlcmFsLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0Lm1hcmdpbl9wb3NpdGlvbnMuY2xpY2tfdG9fc3dpdGNoX3RvX2N1bXVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlQ3VtdWxhdGl2ZUdyb3VwaW5nLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlYnRcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5ib3Jyb3dfYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdW1tdWxhdGl2ZVN1ZmZpeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1bml0SW5mbyhcImRlYnRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZGVidFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGVidC5hbW91bnQgPiBiLmRlYnQuYW1vdW50KSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGVidC5hbW91bnQgPCBiLmRlYnQuYW1vdW50KSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVDdW11bGF0aXZlR3JvdXBpbmcuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5tYXJnaW5fcG9zaXRpb25zLmNsaWNrX3RvX3N3aXRjaF90b19jdW11bGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImNhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNhbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaXRJbmZvKFwiY2FsbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZWRQcmljZShpdGVtLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGNyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3cudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9fZXhwbGFuYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvX3Nob3J0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInRjclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWl0ZW0gPyAoaXRlbSAvIDEwMDApLnRvRml4ZWQoMykgOiBcIi1cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuY29sbF9yYXRpb1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmNyLnJhdGlvID4gYi5jci5yYXRpbykgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmNyLnJhdGlvIDwgYi5jci5yYXRpbykgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWVzID0gXCJtYXJnaW4tcmF0aW8gXCIgKyBpdGVtLnN0YXR1cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5yYXRpby50b0ZpeGVkKDMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgIHJvd0tleT1cImZlZWRNYXJnaW5zXCJcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgcm93Q2xhc3NOYW1lPVwibWFyZ2luLXJvd1wiXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IE51bWJlcigyNSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBsb2NhbGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eVRleHQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQubWFyZ2luX3Bvc2l0aW9ucy5lbXB0eVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJDb2xsQmlkVGFibGUoKSB7XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXTtcclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xyXG5cclxuICAgICAgICBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYmlkZGVyXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYmlkZGVyXCIgLz4sXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYmlkZGVyXCIsXHJcbiAgICAgICAgICAgICAgICBmaXhlZDogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2l0ZW19IC8+O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29sbGF0ZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmNvbGxhdGVyYWxcIiAvPixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjb2xsYXRlcmFsXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJkZWJ0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImRlYnRcIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImRlYnRfY3VtXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmN1bXVsYXRpdmVfYm9ycm93X2Ftb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImRlYnRfY3VtXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJwcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsX2JpZC5iaWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtpdGVtLmJhc2UuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17aXRlbS5iYXNlLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtpdGVtLnF1b3RlLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtpdGVtLnF1b3RlLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImNyXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LmNvbGxfcmF0aW9cIiAvPixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjclwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50b0ZpeGVkKDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiaW5jbHVkZWRcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuY29uc2lkZXJlZF9vbl9yZXZpdmFsXCIgLz4sXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaW5jbHVkZWRcIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT0gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWxfYmlkLmluY2x1ZGVkLnBhcnRpYWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0gPT0gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWxfYmlkLmluY2x1ZGVkLnllc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbF9iaWQuaW5jbHVkZWQubm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgbGV0IGRlYnRfY3VtID0gMDtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWxCaWRzLm1hcChjID0+IHtcclxuICAgICAgICAgICAgZGVidF9jdW0gKz0gYy5kZWJ0O1xyXG5cclxuICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJpZGRlcjogYy5iaWRkZXIsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBjLmJpZC5iYXNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldDogYy5iaWQuYmFzZS5hc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlYnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGMuYmlkLnF1b3RlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldDogYy5iaWQucXVvdGUuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWJ0X2N1bToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGVidF9jdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGMuYmlkLnF1b3RlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGMuYmlkLFxyXG4gICAgICAgICAgICAgICAgY3I6IGMuZ2V0UmF0aW8oKSxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVkOiBjLmNvbnNpZGVyZWRJZlJldml2ZWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgcm93S2V5PVwiZmVlZENvbGxCaWRcIlxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IE51bWJlcigyNSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBsb2NhbGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eVRleHQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbF9iaWQuZW1wdHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RmVlZFRhYih0YWIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWN0aXZlRmVlZFRhYjogdGFiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEFzc2V0VGFiKHRhYikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmVBc3NldFRhYjogdGFiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmVlZFRhYmxlcyhhc3NldCkge1xyXG4gICAgICAgIHZhciBiaXRBc3NldCA9IGFzc2V0LmJpdGFzc2V0O1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIShcImZlZWRzXCIgaW4gYml0QXNzZXQpIHx8XHJcbiAgICAgICAgICAgIGJpdEFzc2V0LmZlZWRzLmxlbmd0aCA9PSAwIHx8XHJcbiAgICAgICAgICAgIGJpdEFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0IHx8XHJcbiAgICAgICAgICAgICFiaXRBc3NldC5mZWVkcy5sZW5ndGhcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaXNHbG9iYWxTZXR0bGVtZW50ID0gYml0QXNzZXQuc2V0dGxlbWVudF9mdW5kID4gMCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZXRGZWVkVGFiLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVLZXk9e3RoaXMuc3RhdGUuYWN0aXZlRmVlZFRhYn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dsb2JhbFNldHRsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsX2JpZC50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZXhwbG9yZXIuYXNzZXQubWFyZ2luX3Bvc2l0aW9ucy50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJtYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjdGl2ZUZlZWRUYWIgPT0gXCJtYXJnaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGlzR2xvYmFsU2V0dGxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJDb2xsQmlkVGFibGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9yZW5kZXJNYXJnaW5UYWJsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS50aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJmZWVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVGZWVkVGFiID09IFwiZmVlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fcmVuZGVyRmVlZFRhYmxlKGFzc2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQXNzZXRSZXNvbHZlUHJlZGljdGlvbihhc3NldCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYW5lbFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5yZXNvbHZlX3ByZWRpY3Rpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnJlc29sdmVfcHJlZGljdGlvbl90ZXh0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QXNzZXRSZXNvbHZlUHJlZGljdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldH1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYW5lbD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5iYWNraW5nQXNzZXQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwiYXNzZXRfbm90X2ZvdW5kX3N1YnRpdGxlXCIgLz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0IHx8ICF0aGlzLnByb3BzLmNvcmVBc3NldC5nZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYXNzZXQgPSB0aGlzLnByb3BzLmFzc2V0LnRvSlMoKTtcclxuICAgICAgICB2YXIgcHJpY2VGZWVkID1cclxuICAgICAgICAgICAgXCJiaXRhc3NldFwiIGluIGFzc2V0ID8gdGhpcy5yZW5kZXJQcmljZUZlZWQoYXNzZXQpIDogbnVsbDtcclxuICAgICAgICB2YXIgcHJpY2VGZWVkRGF0YSA9XHJcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIiBpbiBhc3NldCA/IHRoaXMucmVuZGVyRmVlZFRhYmxlcyhhc3NldCkgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGFzc2V0LXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtYWluLWNvbnRlbnQgd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1lZGl1bS11cC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQWJvdXRCb3goYXNzZXQsIHRoaXMucHJvcHMuYXNzZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fc2V0QXNzZXRUYWIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17dGhpcy5zdGF0ZS5hY3RpdmVBc3NldFRhYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQuaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbGFyZ2UtaG9yaXpvbnRhbCBtZWRpdW0tdXAtMSBsYXJnZS11cC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC1uby1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdW1tYXJ5KGFzc2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgY2xhc3NOYW1lPVwiYXNzZXQtY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQZXJtaXNzaW9ucyhhc3NldCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZlZVBvb2woYXNzZXQpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2VGZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZW5kZXJQcmljZUZlZWQoYXNzZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlRmVlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVuZGVyU2V0dGxlbWVudChhc3NldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Q29sbGF0ZXJhbEJpZEluSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVuZGVyQ29sbGF0ZXJhbEJpZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlRmVlZERhdGEgPyBwcmljZUZlZWREYXRhIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LmFjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGNsYXNzTmFtZT1cImFzc2V0LWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZlZVBvb2xGdW5kaW5nKGFzc2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRmVlUG9vbENsYWltaW5nKGFzc2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRmVlc0NsYWltaW5nKGFzc2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXNzZXRPd25lclVwZGF0ZShhc3NldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcImJpdGFzc2V0XCIgaW4gYXNzZXQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhc3NldC5iaXRhc3NldC5pc19wcmVkaWN0aW9uX21hcmtldCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkUHVibGlzaChhc3NldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbGxhdGVyYWxCaWRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ29sbGF0ZXJhbEJpZChhc3NldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcImJpdGFzc2V0XCIgaW4gYXNzZXQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LmJpdGFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckFzc2V0UmVzb2x2ZVByZWRpY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXQgPSBjb25uZWN0KFxyXG4gICAgQXNzZXQsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5Bc3NldCA9IEFzc2V0V3JhcHBlcihBc3NldCwge1xyXG4gICAgcHJvcE5hbWVzOiBbXCJiYWNraW5nQXNzZXRcIiwgXCJjb3JlQXNzZXRcIl1cclxufSk7XHJcblxyXG5jbGFzcyBBc3NldENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwiYXNzZXRfbm90X2ZvdW5kX3N1YnRpdGxlXCIgLz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hc3NldC5nZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiYWNraW5nQXNzZXQgPSB0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0XCIpXHJcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hc3NldC5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIDogXCIxLjMuMFwiO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBc3NldFxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICBiYWNraW5nQXNzZXQ9e2JhY2tpbmdBc3NldH1cclxuICAgICAgICAgICAgICAgIGNvcmVBc3NldD17XCIxLjMuMFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQXNzZXRDb250YWluZXIgPSBBc3NldFdyYXBwZXIoQXNzZXRDb250YWluZXIsIHtcclxuICAgIHdpdGhEeW5hbWljOiB0cnVlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRTeW1ib2xTcGxpdHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHN5bWJvbCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN5bWJvbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiA8QXNzZXRDb250YWluZXIgey4uLnRoaXMucHJvcHN9IGFzc2V0PXtzeW1ib2x9IC8+O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGEgY2xhc3MgdG8gZGlzcGxheSB0aW1lIG5pY2VseSB3aGVuIGdpdmVuIHNlY29uZHNcclxuLy8gZm9yIGV4YW1wbGUsIGRpc3BsYXlcclxuXHJcbi8vIGV4cGVjdHMgdGhlIG51bWJlciBvZiBzZWNvbmRzIGFzIGEgcHJvcGVydHlcclxuXHJcbmNsYXNzIEZvcm1hdHRlZFRpbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dGltZTogcHJvcHMudGltZX07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2l2ZW4gYW4gaW50ZWdlciBzZWNvbmRzIGFzIGFuIGFyZ3VtZW50LFxyXG4gICAgLy8gcmV0dXJuIHRoZSBudW1iZXIgb2YgaG91cnNcclxuICAgIGdldEhvdXJzKHNlY3MpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0IGhvdXJzIGNhbGxlZCB3aXRoOiBcIiArIHNlY3MpO1xyXG4gICAgICAgIHJldHVybiBzZWNzIC8gMzYwMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+e3RoaXMuZ2V0SG91cnModGhpcy5zdGF0ZS50aW1lKX1oPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRUaW1lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuXHJcbmNvbnN0IHN0YXRlU2V0dGVyID0gKHRoYXQsIGtleSwgdHJhbnNmb3JtID0gdmFsdWUgPT4gdmFsdWUpID0+IHZhbHVlID0+XHJcbiAgICB0aGF0LnNldFN0YXRlKHtba2V5XTogdHJhbnNmb3JtKHZhbHVlKX0pO1xyXG5cclxuY29uc3Qga2V5R2V0dGVyID0ga2V5ID0+IG9iamVjdCA9PiBvYmplY3Rba2V5XTtcclxuXHJcbmNsYXNzIEZlZVBvb2xPcGVyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICB0eXBlOiBcImZ1bmRcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnROYW1lQ2hhbmdlZCA9IHN0YXRlU2V0dGVyKHRoaXMsIFwiZnVuZGVyQWNjb3VudE5hbWVcIik7XHJcbiAgICBvbkFjY291bnRDaGFuZ2VkID0gc3RhdGVTZXR0ZXIodGhpcywgXCJuZXdGdW5kZXJBY2NvdW50XCIpO1xyXG4gICAgb25Qb29sSW5wdXQgPSBzdGF0ZVNldHRlcih0aGlzLCBcImZ1bmRQb29sQW1vdW50XCIsIGtleUdldHRlcihcImFtb3VudFwiKSk7XHJcblxyXG4gICAgb25DbGFpbUlucHV0KGtleSwge2Ftb3VudH0pIHtcclxuICAgICAgICB0aGlzLnN0YXRlW2tleSArIFwiQXNzZXRcIl0uc2V0QW1vdW50KHtyZWFsOiBhbW91bnR9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IGFtb3VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRnVuZFBvb2wgPSAoKSA9PlxyXG4gICAgICAgIEFzc2V0QWN0aW9ucy5mdW5kUG9vbChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdGdW5kZXJBY2NvdW50XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUubmV3RnVuZGVyQWNjb3VudC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvcmUsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZnVuZFBvb2xBbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5pdGlhbFN0YXRlID0gKCkgPT4gKHtcclxuICAgICAgICBmdW5kZXJBY2NvdW50TmFtZTogdGhpcy5wcm9wcy5mdW5kZXJBY2NvdW50TmFtZSxcclxuICAgICAgICBmdW5kUG9vbEFtb3VudDogMCxcclxuICAgICAgICBmdW5kUG9vbEFzc2V0OiBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5jb3JlLmdldChcInByZWNpc2lvblwiKSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuY29yZS5nZXQoXCJpZFwiKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNsYWltUG9vbEFtb3VudDogMCxcclxuICAgICAgICBjbGFpbVBvb2xBbW91bnRBc3NldDogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgYW1vdW50OiAwLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuY29yZS5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmNvcmUuZ2V0KFwiaWRcIilcclxuICAgICAgICB9KSxcclxuICAgICAgICBjbGFpbUZlZXNBbW91bnQ6IDAsXHJcbiAgICAgICAgY2xhaW1GZWVzQW1vdW50QXNzZXQ6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgb25DbGFpbUZlZXMoKSB7XHJcbiAgICAgICAgbGV0IGFjY291bnQgPSBDaGFpblN0b3JlLmdldEFjY291bnQodGhpcy5wcm9wcy5mdW5kZXJBY2NvdW50TmFtZSk7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm47XHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmNsYWltUG9vbEZlZXMoXHJcbiAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1GZWVzQW1vdW50QXNzZXRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xhaW1Qb29sID0gKCkgPT5cclxuICAgICAgICBBc3NldEFjdGlvbnMuY2xhaW1Qb29sKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNsYWltUG9vbEFtb3VudEFzc2V0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICByZW5kZXJGdW5kUG9vbCgpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHByb3BzLFxyXG4gICAgICAgICAgICBzdGF0ZSxcclxuICAgICAgICAgICAgb25Qb29sSW5wdXQsXHJcbiAgICAgICAgICAgIG9uRnVuZFBvb2wsXHJcbiAgICAgICAgICAgIHJlc2V0LFxyXG4gICAgICAgICAgICBvbkFjY291bnROYW1lQ2hhbmdlZCxcclxuICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZFxyXG4gICAgICAgIH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHthc3NldCwgY29yZSwgaGlkZUJhbGFuY2UsIGdldER5bmFtaWNPYmplY3R9ID0gcHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2Z1bmRlckFjY291bnROYW1lLCBmdW5kUG9vbEFtb3VudCwgbmV3RnVuZGVyQWNjb3VudH0gPSBzdGF0ZTtcclxuICAgICAgICBsZXQgZHluYW1pY09iamVjdCA9IG51bGw7XHJcbiAgICAgICAgaWYgKCFoaWRlQmFsYW5jZSlcclxuICAgICAgICAgICAgZHluYW1pY09iamVjdCA9IGdldER5bmFtaWNPYmplY3QoXHJcbiAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjb3JlSUQgPSBjb3JlLmdldChcImlkXCIpIHx8IFwiMS4zLjBcIjtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IDA7XHJcbiAgICAgICAgaWYgKG5ld0Z1bmRlckFjY291bnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY29yZUJhbGFuY2VJRCA9IG5ld0Z1bmRlckFjY291bnQuZ2V0SW4oW1wiYmFsYW5jZXNcIiwgY29yZUlEXSk7XHJcbiAgICAgICAgICAgIGlmIChjb3JlQmFsYW5jZUlEKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGNvcmVCYWxhbmNlSUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlID0gYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VUZXh0ID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YmFsYW5jZX0gYXNzZXQ9e2NvcmVJRH0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtoaWRlQmFsYW5jZSB8fCAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMS41cmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wucG9vbF9iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+OiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljT2JqZWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcImZlZV9wb29sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNhY3Rpb24uZnVuZGluZ19hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnVuZGVyQWNjb3VudE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQWNjb3VudE5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e29uQWNjb3VudENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnVuZGVyQWNjb3VudE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZnVuZFBvb2xBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUG9vbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbY29yZUlEXX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdUb3A6IDE2fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZ1bmRQb29sQW1vdW50IDw9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRnVuZFBvb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9mdW5kX2ZlZV9wb29sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCIgb25DbGljaz17cmVzZXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2xhaW1Qb29sKCkge1xyXG4gICAgICAgIGNvbnN0IHtwcm9wcywgb25DbGFpbVBvb2wsIHJlc2V0fSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qge2NsYWltUG9vbEFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHthc3NldCwgY29yZSwgZ2V0RHluYW1pY09iamVjdH0gPSBwcm9wcztcclxuICAgICAgICBsZXQgZHluYW1pY09iamVjdCA9IGdldER5bmFtaWNPYmplY3QoXHJcbiAgICAgICAgICAgIGFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgY29yZUlEID0gY29yZS5nZXQoXCJpZFwiKSB8fCBcIjEuMy4wXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VUZXh0ID0gISFkeW5hbWljT2JqZWN0ID8gKFxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1Qb29sQW1vdW50QXNzZXQuc2V0QW1vdW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F0czogZHluYW1pY09iamVjdC5nZXQoXCJmZWVfcG9vbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFpbVBvb2xBbW91bnQ6IHRoaXMuc3RhdGUuY2xhaW1Qb29sQW1vdW50QXNzZXQuZ2V0QW1vdW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWw6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWNPYmplY3QuZ2V0KFwiZmVlX3Bvb2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVJRH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY2xhaW1fcG9vbF90ZXh0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2NsYWltUG9vbEFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNsYWltSW5wdXQuYmluZCh0aGlzLCBcImNsYWltUG9vbEFtb3VudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2NvcmVJRF19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjbGFpbVBvb2xBbW91bnQgPD0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGFpbVBvb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9jbGFpbV9mZWVfcG9vbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiIG9uQ2xpY2s9e3Jlc2V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNsYWltRmVlcygpIHtcclxuICAgICAgICBjb25zdCB7cHJvcHN9ID0gdGhpcztcclxuICAgICAgICBjb25zdCB7Y2xhaW1GZWVzQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBnZXREeW5hbWljT2JqZWN0fSA9IHByb3BzO1xyXG4gICAgICAgIGxldCBkeW5hbWljT2JqZWN0ID0gZ2V0RHluYW1pY09iamVjdChcclxuICAgICAgICAgICAgYXNzZXQuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHVuY2xhaW1lZEJhbGFuY2UgPSBkeW5hbWljT2JqZWN0XHJcbiAgICAgICAgICAgID8gZHluYW1pY09iamVjdC5nZXQoXCJhY2N1bXVsYXRlZF9mZWVzXCIpXHJcbiAgICAgICAgICAgIDogMDtcclxuICAgICAgICBsZXQgdmFsaWRDbGFpbSA9XHJcbiAgICAgICAgICAgIGNsYWltRmVlc0Ftb3VudCA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGFpbUZlZXNBbW91bnRBc3NldC5nZXRBbW91bnQoKSA8PSB1bmNsYWltZWRCYWxhbmNlO1xyXG5cclxuICAgICAgICBsZXQgdW5jbGFpbWVkQmFsYW5jZVRleHQgPSAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3VuY2xhaW1lZEJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNsYWltX3RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMXJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wudW5jbGFpbWVkX2lzc3Vlcl9pbmNvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY09iamVjdCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWNPYmplY3QuZ2V0KFwiYWNjdW11bGF0ZWRfZmVlc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e3VuY2xhaW1lZEJhbGFuY2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y2xhaW1GZWVzQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xhaW1JbnB1dC5iaW5kKHRoaXMsIFwiY2xhaW1GZWVzQW1vdW50XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1thc3NldC5nZXQoXCJpZFwiKV19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdmFsaWRDbGFpbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsYWltRmVlcy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY2xhaW1fZmVlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJmdW5kXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRnVuZFBvb2woKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJjbGFpbVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNsYWltUG9vbCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcImNsYWltX2ZlZXNcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDbGFpbUZlZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkZlZVBvb2xPcGVyYXRpb24gPSBBc3NldFdyYXBwZXIoRmVlUG9vbE9wZXJhdGlvbiwge1xyXG4gICAgcHJvcE5hbWVzOiBbXCJhc3NldFwiLCBcImNvcmVcIl0sXHJcbiAgICBkZWZhdWx0UHJvcHM6IHtcclxuICAgICAgICBjb3JlOiBcIjEuMy4wXCJcclxuICAgIH0sXHJcbiAgICB3aXRoRHluYW1pYzogdHJ1ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlZVBvb2xPcGVyYXRpb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuXHJcbmNsYXNzIEFzc2V0T3duZXJVcGRhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGN1cnJlbnRPd25lcjogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuZXdfaXNzdWVyX2FjY291bnRfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGlzc3Vlcl9hY2NvdW50X25hbWU6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjb3VudE5hbWVDaGFuZ2VkKGtleSwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogbmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjb3VudENoYW5nZWQoa2V5LCBhY2NvdW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtrZXldOiBhY2NvdW50ID8gYWNjb3VudC5nZXQoXCJpZFwiKSA6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBBc3NldEFjdGlvbnMudXBkYXRlT3duZXIoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3X2lzc3Vlcl9hY2NvdW50X2lkXHJcbiAgICAgICAgKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbmV3X2lzc3Vlcl9hY2NvdW50X2lkOiBudWxsLFxyXG4gICAgICAgICAgICBpc3N1ZXJfYWNjb3VudF9uYW1lOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtjdXJyZW50T3duZXJ9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5jdXJyZW50X2lzc3VlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXtjdXJyZW50T3duZXIuZ2V0KFwibmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17Y3VycmVudE93bmVyLmdldChcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMubmV3X2lzc3VlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RoaXMuc3RhdGUuaXNzdWVyX2FjY291bnRfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFjY291bnROYW1lQ2hhbmdlZC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlzc3Vlcl9hY2NvdW50X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vbkFjY291bnRDaGFuZ2VkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmV3X2lzc3Vlcl9hY2NvdW50X2lkXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuaXNzdWVyX2FjY291bnRfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUFjY291bnRzPXtbY3VycmVudE93bmVyLmdldChcIm5hbWVcIildfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5zdGF0ZS5uZXdfaXNzdWVyX2FjY291bnRfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnVwZGF0ZV9vd25lclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXNldC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Bc3NldE93bmVyVXBkYXRlID0gQmluZFRvQ2hhaW5TdGF0ZShBc3NldE93bmVyVXBkYXRlKTtcclxuZXhwb3J0IGRlZmF1bHQgQXNzZXRPd25lclVwZGF0ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgUHJpY2VJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9QcmljZUlucHV0XCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xyXG5cclxuY2xhc3MgQXNzZXRQdWJsaXNoRmVlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5yZXNldFN0YXRlKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFN0YXRlKHByb3BzID0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgIGxldCBwdWJsaXNoZXJfaWQgPSBwcm9wcy5hY2NvdW50LmdldChcImlkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50RmVlZCA9IHByb3BzLmFzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiY3VycmVudF9mZWVkXCJdKTtcclxuXHJcbiAgICAgICAgLyogTWlnaHQgbmVlZCB0byBjaGVjayB0aGVzZSBkZWZhdWx0IHZhbHVlcyAqL1xyXG4gICAgICAgIGxldCBtY3IgPSBjdXJyZW50RmVlZC5nZXQoXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCIsIDE3NTApO1xyXG4gICAgICAgIGxldCBtc3NyID0gY3VycmVudEZlZWQuZ2V0KFwibWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIsIDExMDApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwdWJsaXNoZXI6IHByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgcHVibGlzaGVyX2lkLFxyXG4gICAgICAgICAgICBtY3IsXHJcbiAgICAgICAgICAgIG1jclZhbHVlOiBtY3IgLyAxMDAwLFxyXG4gICAgICAgICAgICBtc3NyLFxyXG4gICAgICAgICAgICBtc3NyVmFsdWU6IG1zc3IgLyAxMDAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnROYW1lQ2hhbmdlZChrZXksIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IG5hbWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnRDaGFuZ2VkKGtleSwgYWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogYWNjb3VudCA/IGFjY291bnQuZ2V0KFwiaWRcIikgOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLnB1Ymxpc2hGZWVkKHtcclxuICAgICAgICAgICAgcHVibGlzaGVyOiB0aGlzLnN0YXRlLnB1Ymxpc2hlcl9pZCxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIG1jcjogdGhpcy5zdGF0ZS5tY3IsXHJcbiAgICAgICAgICAgIG1zc3I6IHRoaXMuc3RhdGUubXNzcixcclxuICAgICAgICAgICAgZmVlZFByaWNlOiB0aGlzLnN0YXRlLmZlZWRQcmljZSxcclxuICAgICAgICAgICAgY2VyOiB0aGlzLnN0YXRlLmNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnJlc2V0U3RhdGUoKSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmljZUNoYW5nZWQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNldFJhdGlvKGtleSwge2Ftb3VudH0pIHtcclxuICAgICAgICAvKiBFbmZvcmNlIG9uZSBkZWNpbWFsIHBvaW50IG1heGltdW0gKi9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEhYW1vdW50ICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBhbW91bnQgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICAgICAgYW1vdW50LmluZGV4T2YoXCIuXCIpICE9PSAtMSAmJlxyXG4gICAgICAgICAgICBhbW91bnQuaW5kZXhPZihcIi5cIikgKyA0ICE9PSBhbW91bnQubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGFtb3VudCA9IGFtb3VudC5zdWJzdHIoMCwgYW1vdW50LmluZGV4T2YoXCIuXCIpICsgNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5ICsgXCJWYWx1ZVwiXTogYW1vdW50LFxyXG4gICAgICAgICAgICBba2V5XTogTWF0aC5mbG9vcihwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7bWNyVmFsdWUsIG1zc3JWYWx1ZSwgcHVibGlzaGVyfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2UgPSBhc3NldC5nZXQoXCJpZFwiKTtcclxuICAgICAgICBjb25zdCBxdW90ZSA9IGFzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxyXG4gICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LmZlZWRfcHJvZHVjZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXtwdWJsaXNoZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BY2NvdW50TmFtZUNoYW5nZWQuYmluZCh0aGlzLCBcInB1Ymxpc2hlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uQWNjb3VudENoYW5nZWQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaXNoZXJfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17cHVibGlzaGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENvcmUgRXhjaGFuZ2UgUmF0ZSAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPFByaWNlSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvblByaWNlQ2hhbmdlZD17dGhpcy5vblByaWNlQ2hhbmdlZC5iaW5kKHRoaXMsIFwiY2VyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY29yZV9leGNoYW5nZV9yYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZT17XCIxLjMuMFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTZXR0bGVtZW50IFByaWNlICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2VJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uUHJpY2VDaGFuZ2VkPXt0aGlzLm9uUHJpY2VDaGFuZ2VkLmJpbmQodGhpcywgXCJmZWVkUHJpY2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmZlZWRfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTUNSICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXttY3JWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldFJhdGlvLmJpbmQodGhpcywgXCJtY3JcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNU1NSICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e21zc3JWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldFJhdGlvLmJpbmQodGhpcywgXCJtc3NyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X3B1Ymxpc2hfZmVlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFN0YXRlKHRoaXMucHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXRQdWJsaXNoRmVlZCA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRQdWJsaXNoRmVlZCk7XHJcbkFzc2V0UHVibGlzaEZlZWQgPSBBc3NldFdyYXBwZXIoQXNzZXRQdWJsaXNoRmVlZCk7XHJcbmV4cG9ydCBkZWZhdWx0IEFzc2V0UHVibGlzaEZlZWQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IHtQcmljZSwgQXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcblxuY2xhc3MgUHJpY2VJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgcXVvdGUgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHByb3BzLnF1b3RlLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5xdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBiYXNlID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5iYXNlLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5iYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJpY2UgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBiYXNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgIHJlYWxQcmljZVZhbHVlOiBwcmljZS50b1JlYWwoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uUHJpY2VDaGFuZ2VkKHthbW91bnR9KSB7XG4gICAgICAgIHRoaXMuc3RhdGUucHJpY2Uuc2V0UHJpY2VGcm9tUmVhbChwYXJzZUZsb2F0KGFtb3VudCkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWxQcmljZVZhbHVlOiBhbW91bnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QcmljZUNoYW5nZWQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUHJpY2VDaGFuZ2VkKHRoaXMuc3RhdGUucHJpY2UuY2xvbmUoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7cmVhbFByaWNlVmFsdWUsIHByaWNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgIGFtb3VudD17cmVhbFByaWNlVmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QcmljZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBhc3NldD17cHJpY2UuYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICBiYXNlPXt0aGlzLnByb3BzLnF1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICBpc1ByaWNlXG4gICAgICAgICAgICAgICAgYXNzZXRzPXtbcHJpY2UucXVvdGUuYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblByaWNlSW5wdXQgPSBBc3NldFdyYXBwZXIoUHJpY2VJbnB1dCwge1xuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBiYXNlOiBcIjEuMy4wXCJcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge1JhZGlvLCBUb29sdGlwLCBCdXR0b24sIEZvcm19IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge0Fzc2V0LCBQcmljZX0gZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9hc3NldF91dGlsc1wiO1xyXG5cclxuY2xhc3MgQXNzZXRSZXNvbHZlUHJlZGljdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZ2xvYmFsU2V0dGxlbWVudFByaWNlOiBudWxsLFxyXG4gICAgICAgICAgICBjdXN0b21QcmljZTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBucC5hc3NldC5pZCAhPT0gdGhpcy5wcm9wcy5hc3NldC5pZCB8fFxyXG4gICAgICAgICAgICBucy5nbG9iYWxTZXR0bGVtZW50UHJpY2UgIT09IHRoaXMuc3RhdGUuZ2xvYmFsU2V0dGxlbWVudFByaWNlIHx8XHJcbiAgICAgICAgICAgIG5zLmN1c3RvbVByaWNlICE9PSB0aGlzLnN0YXRlLmN1c3RvbVByaWNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblByaWNlQ2hhbmdlZCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAyICYmICF0aGlzLnN0YXRlLmN1c3RvbVByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsU2V0dGxlbWVudFByaWNlOiAxLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUHJpY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxTZXR0bGVtZW50UHJpY2U6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblByaWNlQ2hhbmdlZE9iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMub25QcmljZUNoYW5nZWQodmFsdWUudG9SZWFsKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHthc3NldCwgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgYmFzZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIHJlYWw6IDEsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmlkLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQucHJlY2lzaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHF1b3RlQXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFxyXG4gICAgICAgICAgICBhc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBxdW90ZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIHJlYWw6IHRoaXMuc3RhdGUuZ2xvYmFsU2V0dGxlbWVudFByaWNlLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXQsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogcXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHByaWNlID0gbmV3IFByaWNlKHtcclxuICAgICAgICAgICAgcXVvdGUsXHJcbiAgICAgICAgICAgIGJhc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmFzc2V0R2xvYmFsU2V0dGxlKGFzc2V0LCBhY2NvdW50LmdldChcImlkXCIpLCBwcmljZSkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGdsb2JhbFNldHRsZW1lbnRQcmljZTogbnVsbCxcclxuICAgICAgICAgICAgY3VzdG9tUHJpY2U6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2Uoe2Ftb3VudH0pIHtcclxuICAgICAgICB0aGlzLm9uUHJpY2VDaGFuZ2VkKGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VSYWRpbyhlKSB7XHJcbiAgICAgICAgdGhpcy5vblByaWNlQ2hhbmdlZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHthc3NldH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcclxuICAgICAgICAgICAgYXNzZXQuYml0YXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxyXG4gICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjFyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9wcmVkaWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e1widG9wTGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC5wcmVkaWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIjogXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb24uY29uZGl0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9yZXNvbHV0aW9uX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17XCJ0b3BMZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnJlc29sdXRpb25fZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCI6IFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9uLmV4cGlyeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VSYWRpby5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuY3VzdG9tUHJpY2UgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib29sZWFuLnRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuY3VzdG9tUHJpY2UgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib29sZWFuLmZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuY3VzdG9tUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuY3VzdG9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5jdXN0b21QcmljZSA/IHVuZGVmaW5lZCA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5nbG9iYWxfc2V0dGxlbWVudF9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYXNlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXthc3NldC5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYmFzZS5nZXQoXCJpZFwiKV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdsb2JhbFNldHRsZW1lbnRQcmljZSA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucHVibGlzaF9wcmVkaWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVzZXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0UmVzb2x2ZVByZWRpY3Rpb24gPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0UmVzb2x2ZVByZWRpY3Rpb24pO1xyXG5leHBvcnQgZGVmYXVsdCBBc3NldFJlc29sdmVQcmVkaWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuXHJcbmNsYXNzIEJpZENvbGxhdGVyYWxPcGVyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxTdGF0ZSA9ICgpID0+ICh7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMuZnVuZGVyQWNjb3VudE5hbWUpLFxyXG4gICAgICAgIGNvbGxhdGVyYWxBbW91bnQ6IFwiMFwiLFxyXG4gICAgICAgIGRlYnRBbW91bnQ6IFwiMFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jb2xsYXRlcmFsQmlkSW5wdXQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGF0ZXJhbEFtb3VudDogdmFsdWUuYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2RlYnRCaWRJbnB1dCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWJ0QW1vdW50OiB2YWx1ZS5hbW91bnRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25CaWRDb2xsYXRlcmFsKCkge1xyXG4gICAgICAgIGxldCB7Y29sbGF0ZXJhbEFtb3VudCwgZGVidEFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb2xsYXRlcmFsQW1vdW50ID1cclxuICAgICAgICAgICAgY29sbGF0ZXJhbEFtb3VudCA9PSAwXHJcbiAgICAgICAgICAgICAgICA/IGNvbGxhdGVyYWxBbW91bnRcclxuICAgICAgICAgICAgICAgIDogY29sbGF0ZXJhbEFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG4gICAgICAgIGRlYnRBbW91bnQgPVxyXG4gICAgICAgICAgICBkZWJ0QW1vdW50ID09IDAgPyBkZWJ0QW1vdW50IDogZGVidEFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG5cclxuICAgICAgICBBc3NldEFjdGlvbnMuYmlkQ29sbGF0ZXJhbChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2NvdW50ID8gdGhpcy5zdGF0ZS5hY2NvdW50LmdldChcImlkXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3JlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsQW1vdW50LFxyXG4gICAgICAgICAgICBkZWJ0QW1vdW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSgpO1xyXG4gICAgICAgIH0sIDYwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJpZCgpIHtcclxuICAgICAgICBBc3NldEFjdGlvbnMuYmlkQ29sbGF0ZXJhbChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2NvdW50ID8gdGhpcy5zdGF0ZS5hY2NvdW50LmdldChcImlkXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3JlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSgpO1xyXG4gICAgICAgIH0sIDYwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbGxhdGVyYWxCaWQoKSB7XHJcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBjb3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2FjY291bnQsIGNvbGxhdGVyYWxBbW91bnQsIGRlYnRBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IDA7XHJcbiAgICAgICAgY29uc3QgYmFja2luZ0JhbGFuY2VJRCA9IGFjY291bnRcclxuICAgICAgICAgICAgPyBhY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGNvcmUuZ2V0KFwiaWRcIildKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgaWYgKGJhY2tpbmdCYWxhbmNlSUQpIHtcclxuICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWNraW5nQmFsYW5jZUlEKTtcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VUZXh0ID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YmFsYW5jZX0gYXNzZXQ9e2NvcmUuZ2V0KFwiaWRcIil9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5jb2xsYXRlcmFsXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y29sbGF0ZXJhbEFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fY29sbGF0ZXJhbEJpZElucHV0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmUuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbY29yZS5nZXQoXCJpZFwiKV19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkZWJ0QW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9kZWJ0QmlkSW5wdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYXNzZXQuZ2V0KFwiaWRcIildfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQW1vdW50ICE9PSBcIjBcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVidEFtb3VudCAhPT0gXCIwXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsLmJpZF9wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBbW91bnQgLyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2NvcmUuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXt0aGlzLnN0YXRlLmRlYnRBbW91bnQgLyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXthc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVQcmljZUZlZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQmlkQ29sbGF0ZXJhbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmJpZF9jb2xsYXRlcmFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29sbGF0ZXJhbEJpZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5CaWRDb2xsYXRlcmFsT3BlcmF0aW9uID0gQXNzZXRXcmFwcGVyKEJpZENvbGxhdGVyYWxPcGVyYXRpb24sIHtcclxuICAgIHByb3BOYW1lczogW1wiYXNzZXRcIiwgXCJjb3JlXCJdLFxyXG4gICAgd2l0aER5bmFtaWM6IHRydWVcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWRDb2xsYXRlcmFsT3BlcmF0aW9uO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTs7OztBQWRBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTs7OztBQWZBO0FBQ0E7QUFpQkE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBRkE7QUFhQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQU9BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBR0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFUQTtBQVlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBVEE7QUFZQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBS0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQUFBO0FBQUE7QUFDQTtBQXlDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFUQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFqQkE7QUE0QkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFEQTtBQVZBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQURBO0FBVkE7QUFyQkE7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFOQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQUNBO0FBY0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFKQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBeENBO0FBREE7QUE0Q0E7QUFDQTtBQWpEQTtBQW9EQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUEvQkE7QUFKQTtBQURBO0FBZ0RBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUdBO0FBQ0E7QUFPQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQU5BO0FBUUE7QUFSQTtBQVBBO0FBQUE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQURBO0FBSkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVZBO0FBdkRBO0FBeUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBUEE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFKQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQXZGQTtBQTlFQTtBQTdCQTtBQTBOQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSEE7QUFGQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUZBO0FBSkE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFGQTtBQUpBO0FBeEJBO0FBSkE7QUFSQTtBQWZBO0FBcUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVZBO0FBaUJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWdCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQW5CQTtBQTRCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFKQTtBQUNBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQVFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFVQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBU0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQXJDQTtBQUNBO0FBaURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFuQkE7QUFMQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBc0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFGQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFTQTtBQVRBO0FBQUE7QUFGQTtBQUFBO0FBZ0JBO0FBOUNBO0FBaURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFIQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFvQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFOQTtBQWFBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBWkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUFhQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBb0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQU5BO0FBb0JBO0FBdENBO0FBeUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQU5BO0FBb0JBO0FBckNBO0FBeUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFyQkE7QUF3QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQVRBO0FBZ0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBWkE7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQWRBO0FBaUJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQWpCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQVJBO0FBZUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBTkE7QUFRQTtBQVJBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQWxCQTtBQThCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBZUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUlBO0FBYkE7QUFEQTtBQVBBO0FBNkJBO0FBbkNBO0FBcUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBVkE7QUFOQTtBQTFDQTtBQVJBO0FBREE7QUFEQTtBQWdGQTs7OztBQTdrRUE7QUFDQTtBQStrRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7QUFDQTtBQWFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUF0QkE7QUFDQTtBQXVCQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbHNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFoQkE7QUFDQTtBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWdCQTtBQUFBO0FBQ0E7QUFqQkE7QUEyQkE7QUFDQTtBQUNBO0FBN0JBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFmQTtBQUFBO0FBQ0E7QUEvQkE7QUE4REE7QUFBQTtBQUNBO0FBN0RBO0FBRkE7QUFHQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7OztBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVRBO0FBcENBO0FBbURBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFEQTtBQUZBO0FBT0E7QUFaQTtBQWNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBRkE7QUFoQkE7QUFDQTtBQXNCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFUQTtBQWpCQTtBQWdDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUZBO0FBSkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBVEE7QUE3QkE7QUErQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTFUQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFDQTtBQTBUQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVRBO0FBNUJBO0FBOENBOzs7O0FBN0ZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUE2RkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQURBO0FBM0RBO0FBZ0ZBOzs7O0FBMUtBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBMEtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBbkJBO0FBdUJBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUVBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFnQkE7Ozs7QUF4REE7QUFDQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFQQTtBQWhCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFWQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQVBBO0FBU0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFaQTtBQXZFQTtBQURBO0FBOEZBOzs7O0FBN0xBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBNkxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBSkE7QUFIQTtBQUlBO0FBQ0E7OztBQU9BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVBBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVJBO0FBNUNBO0FBOERBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUEzSkE7QUFDQTtBQTZKQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==