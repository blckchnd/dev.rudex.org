(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 2452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2186);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
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

/***/ 2840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(716);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2303);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2186);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1969);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2305);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2452);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2185);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2332);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2016);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1986);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(558);
/* harmony import */ var _Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2841);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(407);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(476);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(573);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2361);
/* harmony import */ var _Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2842);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(540);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(760);
/* harmony import */ var _AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2843);
/* harmony import */ var _AssetPublishFeed__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2844);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2515);
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
            marginTableSort: "price",
            sortDirection: true
        };
        return _this3;
    }

    _createClass(Asset, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this4 = this;

            if (this.props.asset.has("bitasset")) {
                var _assets;

                var assets = (_assets = {}, _defineProperty(_assets, this.props.asset.get("id"), this.props.asset.toJS()), _defineProperty(_assets, this.props.backingAsset.get("id"), this.props.backingAsset.toJS()), _assets);

                var isPredictionMarket = this.props.asset.getIn(["bitasset", "is_prediction_market"], false);
                var sqr = this.props.asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]);
                var settlePrice = this.props.asset.getIn(["bitasset", "current_feed", "settlement_price"]);

                /* Prediction markets don't need feeds for shorting, so the settlement price can be set to 1:1 */
                if (isPredictionMarket && settlePrice.getIn(["base", "asset_id"]) === settlePrice.getIn(["quote", "asset_id"])) {
                    if (!assets[this.props.backingAsset.get("id")]) assets[this.props.backingAsset.get("id")] = {
                        precision: this.props.asset.get("precision")
                    };
                    settlePrice = settlePrice.setIn(["base", "amount"], 1);
                    settlePrice = settlePrice.setIn(["base", "asset_id"], this.props.backingAsset.get("id"));
                    settlePrice = settlePrice.setIn(["quote", "amount"], 1);
                    settlePrice = settlePrice.setIn(["quote", "asset_id"], this.props.asset.get("id"));
                    sqr = 1000;
                }

                var feedPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["FeedPrice"]({
                    priceObject: settlePrice,
                    market_base: this.props.asset.get("id"),
                    sqr: sqr,
                    assets: assets
                });

                if (!!feedPrice) {
                    try {
                        var mcr = this.props.asset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]);

                        bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_15__["Apis"].instance().db_api().exec("get_call_orders", [this.props.asset.get("id"), 300]).then(function (call_orders) {
                            var callOrders = call_orders.map(function (c) {
                                return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__["CallOrder"](c, assets, _this4.props.asset.get("id"), feedPrice, mcr, isPredictionMarket);
                            });
                            _this4.setState({ callOrders: callOrders });
                        });
                    } catch (e) {
                        // console.log(err);
                    }
                }
            }
        }
    }, {
        key: "_toggleSortOrder",
        value: function _toggleSortOrder(type) {
            if (type !== this.state.marginTableSort) {
                this.setState({
                    marginTableSort: type
                });
            } else {
                this.setState({ sortDirection: !this.state.sortDirection });
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

            var base = price.base;
            var quote = price.quote;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
                base_amount: base.amount,
                base_asset: base.asset_id,
                quote_amount: quote.amount,
                quote_asset: quote.asset_id,
                hide_value: hide_value,
                hide_symbols: hide_symbols
            });
        }
    }, {
        key: "renderAuthorityList",
        value: function renderAuthorityList(authorities) {
            return authorities.map(function (authority) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: authority })
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
            var issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getObject(asset.issuer, false, false);
            var issuerName = issuer ? issuer.get("name") : "";

            // Add <a to any links included in the description
            var description = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].parseDescription(asset.options.description);
            var desc = description.main;
            var short_name = description.short_name ? description.short_name : null;

            var urlTest = /(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g;

            // Regexp needs a whitespace after a url, so add one to make sure
            desc = desc && desc.length > 0 ? desc + " " : desc;
            var urls = desc.match(urlTest);

            // Add market link
            var core_asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getAsset("1.3.0");
            var preferredMarket = description.market ? description.market : core_asset ? core_asset.get("symbol") : "BTS";
            if ("bitasset" in asset && asset.bitasset.is_prediction_market) {
                preferredMarket = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getAsset(asset.bitasset.options.short_backing_asset);
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

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].replaceName(originalAsset),
                name = _utils$replaceName.name,
                prefix = _utils$replaceName.prefix;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: { overflow: "visible" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h2",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
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

            var flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].getFlagBooleans(asset.options.flags, this.props.asset.has("bitasset_data_id"));

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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                    " %"
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], { name: asset.symbol })
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

            /*
            console.log(
                "force settlement delay: " +
                    bitAsset.options.force_settlement_delay_sec
            );
            console.log(
                "force settlement offset: " +
                    bitAsset.options.force_settlement_offset_percent
            );
            */

            var settlementDelay = bitAsset.options.force_settlement_delay_sec;
            var settlementOffset = bitAsset.options.force_settlement_offset_percent;

            var globalSettlementPrice = this.getGlobalSettlementPrice();

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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.settlement_price" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                this.formattedPrice(currentFeed.settlement_price)
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
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    {
                        className: "table key-value-table table-hover",
                        style: { marginTop: "2rem" }
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
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.settlement_delay" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_13__["default"], { time: settlementDelay })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.price_feed.force_settlement_offset" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                " ",
                                settlementOffset / 100,
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
            var core = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getAsset("1.3.0");

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
                                dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                                dynamic ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AssetPublishFeed__WEBPACK_IMPORTED_MODULE_22__["default"], {
                        base: asset.id,
                        account: this.props.currentAccount,
                        currentOwner: asset.issuer
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_18__["default"], {
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

            var permissionBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].getFlagBooleans(asset.options.issuer_permissions, this.props.asset.has("bitasset_data_id"));

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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        amount: +options.max_supply,
                        asset: asset.id
                    })
                )
            );

            var whiteLists = permissionBooleans["white_list"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.blacklist_authorities" }),
                ": \xA0",
                this.renderAuthorityList(options.blacklist_authorities),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.blacklist_markets" }),
                ": \xA0",
                this.renderMarketList(asset, options.blacklist_markets),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.whitelist_authorities" }),
                ": \xA0",
                this.renderAuthorityList(options.whitelist_authorities),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "explorer.asset.permissions.whitelist_markets" }),
                ": \xA0",
                this.renderMarketList(asset, options.whitelist_markets)
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
            );
        }

        // return a sorted list of call orders

    }, {
        key: "getMarginPositions",
        value: function getMarginPositions() {
            var sortDirection = this.state.sortDirection;


            var sortFunctions = {
                name: function name(a, b) {
                    var nameA = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getAccount(a.borrower, false);
                    if (nameA) nameA = nameA.get("name");
                    var nameB = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getAccount(b.borrower, false);
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

        // the global settlement price is defined as the
        // the price at which the least collateralized short
        // 's collateral no longer enough to back the debt
        // he/she owes. If the feed price goes above this,
        // then

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
            // The CR is 1 iff collateral / (debt x feed_ price) == 1
            // Rearranging, this means that the CR is 1 iff
            // feed_price == collateral / debt
            var debt = leastColShort.debt;
            var collateral = leastColShort.collateral;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        value: function renderMarginPositions(asset, sortedCallOrders) {
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__["default"], { time: publishDate })
                    )
                ));
            }

            // now we compute the margin position tab
            var header2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
                        this.state.callOrders.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            "\xA0(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                amount: this.state.callOrders[0].getCollateral().getAmount(),
                                asset: this.state.callOrders[0].getCollateral().asset_id,
                                hide_amount: true
                            }),
                            ")"
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        {
                            style: { textAlign: "right" },
                            className: "clickable column-hide-small",
                            onClick: this._toggleSortOrder.bind(this, "debt")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transaction.borrow_amount" }),
                        this.state.callOrders.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            "\xA0(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                amount: this.state.callOrders[0].amountToReceive().getAmount(),
                                asset: this.state.callOrders[0].amountToReceive().asset_id,
                                hide_amount: true
                            }),
                            ")"
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        {
                            style: { textAlign: "right" },
                            className: "clickable column-hide-small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                onClick: this._toggleSortOrder.bind(this, "price")
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.call" })
                        ),
                        this.state.callOrders.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            "\xA0(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                base_amount: this.state.callOrders[0].call_price.base.amount,
                                base_asset: this.state.callOrders[0].call_price.base.asset_id,
                                quote_amount: this.state.callOrders[0].call_price.quote.amount,
                                quote_asset: this.state.callOrders[0].call_price.quote.asset_id,
                                hide_value: true,
                                noPopOver: true
                            }),
                            ")"
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
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

            var rows2 = sortedCallOrders.map(function (c) {
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            amount: c.collateral,
                            asset: c.getCollateral().asset_id,
                            hide_asset: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: { textAlign: "right" },
                            className: "column-hide-small"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            base_amount: c.call_price.base.amount,
                            base_asset: c.call_price.base.asset_id,
                            quote_amount: c.call_price.quote.amount,
                            quote_asset: c.call_price.quote.asset_id,
                            hide_symbols: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: { textAlign: "right", paddingRight: 10 } },
                        !!c.order.target_collateral_ratio ? (c.order.target_collateral_ratio / 1000).toFixed(3) : "-"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { className: c.getStatus(), style: { textAlign: "right" } },
                        c.getRatio().toFixed(3)
                    )
                );
            });

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
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_23__["Tabs"],
                            {
                                defaultActiveTab: 0,
                                segmented: false,
                                setting: "bitassetDataTabs"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_23__["Tab"],
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
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_23__["Tab"],
                                { title: "explorer.asset.margin_positions.title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "table",
                                    {
                                        className: " table order-table table-hover",
                                        style: { padding: "1.2rem" }
                                    },
                                    header2,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "tbody",
                                        null,
                                        rows2
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
            var priceFeed = "bitasset" in asset ? this.renderPriceFeed(asset) : null;
            var priceFeedData = "bitasset" in asset ? this.renderMarginPositions(asset, sortedCallOrders) : null;

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
                            _Utility_Tabs__WEBPACK_IMPORTED_MODULE_23__["Tabs"],
                            {
                                setting: "assetDataTabs",
                                className: "grid-block vertical",
                                tabsClass: "bordered-header content-block",
                                contentClass: "tab-no-background",
                                segmented: false
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_23__["Tab"],
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
                                    ) : null
                                ),
                                priceFeedData ? priceFeedData : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_23__["Tab"],
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
                                    "bitasset" in asset && !asset.bitasset.is_prediction_market ? this.renderFeedPublish(asset) : null
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

Asset = Object(alt_react__WEBPACK_IMPORTED_MODULE_20__["connect"])(Asset, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_19__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_19__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_19__["default"].getState().passwordAccount
        };
    }
});

Asset = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(Asset, {
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
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_17__["default"], { subtitle: "asset_not_found_subtitle" });
            }
            var backingAsset = this.props.asset.has("bitasset") ? this.props.asset.getIn(["bitasset", "options", "short_backing_asset"]) : "1.3.0";
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Asset, _extends({}, this.props, { backingAsset: backingAsset }));
        }
    }]);

    return AssetContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetContainer = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetContainer, {
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

/***/ 2841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
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

/***/ 2842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(573);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2189);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1968);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1969);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2258);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2186);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(407);
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

/***/ 2843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2189);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1832);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1833);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2258);
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

/***/ 2844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2189);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1832);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1833);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(931);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2258);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2186);
/* harmony import */ var _Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2845);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1968);
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

            var currentFeed = props.base.getIn(["bitasset", "current_feed"]);

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
                asset_id: this.props.base.get("id"),
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
            var _props = this.props,
                quote = _props.quote,
                base = _props.base;
            var _state = this.state,
                mcrValue = _state.mcrValue,
                mssrValue = _state.mssrValue,
                publisher = _state.publisher;


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
                    quote: quote.get("id"),
                    base: base.get("id")
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    onPriceChanged: this.onPriceChanged.bind(this, "settlementPrice"),
                    label: "explorer.asset.price_feed.settlement_price",
                    quote: quote.get("id"),
                    base: base.get("id")
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
AssetPublishFeed = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__["default"])(AssetPublishFeed, {
    propNames: ["quote", "base"],
    defaultProps: {
        quote: "1.3.0"
    }
});
/* harmony default export */ __webpack_exports__["default"] = (AssetPublishFeed);

/***/ }),

/***/ 2845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AmountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1968);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(573);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2186);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuY2EyNmExODU4Y2UzNGMyNWVmMDQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9Bc3NldEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQmxvY2tjaGFpbi9Bc3NldC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkVGltZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FjY291bnQvRmVlUG9vbE9wZXJhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRPd25lclVwZGF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRQdWJsaXNoRmVlZC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUHJpY2VJbnB1dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBBc3NldEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiB0cnVlLFxyXG4gICAgICAgIG1heFdpZHRoOiAyMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW1nRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCAhPT0gbnAuYXNzZXQgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhXaWR0aCAhPT0gbnAubWF4V2lkdGggfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy53aGl0ZUxpc3QgIT09IG5wLndoaXRlTGlzdCB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmltZ0Vycm9yICE9PSBucy5pbWdFcnJvclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlTm9uZVRvQnRzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ05hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgXS5zcmMgPSBgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy9idHMucG5nYDtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKGFzc2V0KSB7XHJcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBhc3NldC5nZXQoXCJzeW1ib2xcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2w7XHJcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wgPT09IFwiT1BFTi5CVENcIiB8fCBzeW1ib2wgPT09IFwiR0RFWC5CVENcIikgcmV0dXJuIHN5bWJvbDtcclxuICAgICAgICAgICAgLy8gaWYgKHN5bWJvbC5zdGFydHNXaXRoKFwiRVNDUk9XLlwiKSkgcmV0dXJuIHN5bWJvbDtcclxuICAgICAgICAgICAgLy8gbGV0IGltZ05hbWUgPSBhc3NldC5nZXQoXCJzeW1ib2xcIikuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgICAvL3JldHVybiBpbWdOYW1lLmxlbmd0aCA9PT0gMiA/IGltZ05hbWVbMV0gOiBpbWdOYW1lWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW1nTmFtZSA9IGdldEltYWdlTmFtZShhc3NldCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogdGhpcy5wcm9wcy5tYXhXaWR0aCwgbWFyZ2luUmlnaHQ6IDV9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Bc3NldEltYWdlID0gQXNzZXRXcmFwcGVyKEFzc2V0SW1hZ2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRJbWFnZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8QXNzZXRJbWFnZSB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3RoaXMucHJvcHMubmFtZX0gLz47XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgRm9ybWF0dGVkUHJpY2UgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkUHJpY2VcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgVGltZUFnbyBmcm9tIFwiLi4vVXRpbGl0eS9UaW1lQWdvXCI7XG5pbXBvcnQgSGVscENvbnRlbnQgZnJvbSBcIi4uL1V0aWxpdHkvSGVscENvbnRlbnRcIjtcbmltcG9ydCBhc3NldFV0aWxzIGZyb20gXCJjb21tb24vYXNzZXRfdXRpbHNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgRm9ybWF0dGVkVGltZSBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRUaW1lXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7Q2FsbE9yZGVyLCBGZWVkUHJpY2V9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4uL1BhZ2U0MDQvUGFnZTQwNFwiO1xuaW1wb3J0IEZlZVBvb2xPcGVyYXRpb24gZnJvbSBcIi4uL0FjY291bnQvRmVlUG9vbE9wZXJhdGlvblwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgQXNzZXRPd25lclVwZGF0ZSBmcm9tIFwiLi9Bc3NldE93bmVyVXBkYXRlXCI7XG5pbXBvcnQgQXNzZXRQdWJsaXNoRmVlZCBmcm9tIFwiLi9Bc3NldFB1Ymxpc2hGZWVkXCI7XG5pbXBvcnQge1RhYiwgVGFic30gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuXG5jbGFzcyBBc3NldEZsYWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpc1NldCwgbmFtZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWlzU2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gLz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXNzZXQtZmxhZ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLlwiICsgbmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIEFzc2V0UGVybWlzc2lvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2lzU2V0LCBuYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFpc1NldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFzc2V0LWZsYWdcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5cIiArIG5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgQXNzZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNhbGxPcmRlcnM6IFtdLFxuICAgICAgICAgICAgbWFyZ2luVGFibGVTb3J0OiBcInByaWNlXCIsXG4gICAgICAgICAgICBzb3J0RGlyZWN0aW9uOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hc3NldC5oYXMoXCJiaXRhc3NldFwiKSkge1xuICAgICAgICAgICAgY29uc3QgYXNzZXRzID0ge1xuICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXTogdGhpcy5wcm9wcy5hc3NldC50b0pTKCksXG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYmFja2luZ0Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiXG4gICAgICAgICAgICAgICAgKV06IHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0LnRvSlMoKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaXNQcmVkaWN0aW9uTWFya2V0ID0gdGhpcy5wcm9wcy5hc3NldC5nZXRJbihcbiAgICAgICAgICAgICAgICBbXCJiaXRhc3NldFwiLCBcImlzX3ByZWRpY3Rpb25fbWFya2V0XCJdLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHNxciA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxuICAgICAgICAgICAgICAgIFwibWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCJcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgbGV0IHNldHRsZVByaWNlID0gdGhpcy5wcm9wcy5hc3NldC5nZXRJbihbXG4gICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgXCJzZXR0bGVtZW50X3ByaWNlXCJcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvKiBQcmVkaWN0aW9uIG1hcmtldHMgZG9uJ3QgbmVlZCBmZWVkcyBmb3Igc2hvcnRpbmcsIHNvIHRoZSBzZXR0bGVtZW50IHByaWNlIGNhbiBiZSBzZXQgdG8gMToxICovXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaXNQcmVkaWN0aW9uTWFya2V0ICYmXG4gICAgICAgICAgICAgICAgc2V0dGxlUHJpY2UuZ2V0SW4oW1wiYmFzZVwiLCBcImFzc2V0X2lkXCJdKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgc2V0dGxlUHJpY2UuZ2V0SW4oW1wicXVvdGVcIiwgXCJhc3NldF9pZFwiXSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmICghYXNzZXRzW3RoaXMucHJvcHMuYmFja2luZ0Fzc2V0LmdldChcImlkXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3RoaXMucHJvcHMuYmFja2luZ0Fzc2V0LmdldChcImlkXCIpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXR0bGVQcmljZSA9IHNldHRsZVByaWNlLnNldEluKFtcImJhc2VcIiwgXCJhbW91bnRcIl0sIDEpO1xuICAgICAgICAgICAgICAgIHNldHRsZVByaWNlID0gc2V0dGxlUHJpY2Uuc2V0SW4oXG4gICAgICAgICAgICAgICAgICAgIFtcImJhc2VcIiwgXCJhc3NldF9pZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNldHRsZVByaWNlID0gc2V0dGxlUHJpY2Uuc2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0sIDEpO1xuICAgICAgICAgICAgICAgIHNldHRsZVByaWNlID0gc2V0dGxlUHJpY2Uuc2V0SW4oXG4gICAgICAgICAgICAgICAgICAgIFtcInF1b3RlXCIsIFwiYXNzZXRfaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNxciA9IDEwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZlZWRQcmljZSA9IG5ldyBGZWVkUHJpY2Uoe1xuICAgICAgICAgICAgICAgIHByaWNlT2JqZWN0OiBzZXR0bGVQcmljZSxcbiAgICAgICAgICAgICAgICBtYXJrZXRfYmFzZTogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBzcXIsXG4gICAgICAgICAgICAgICAgYXNzZXRzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCEhZmVlZFByaWNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1jciA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9jYWxsX29yZGVyc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjYWxsX29yZGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxPcmRlcnMgPSBjYWxsX29yZGVycy5tYXAoYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2FsbE9yZGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtY3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjYWxsT3JkZXJzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RvZ2dsZVNvcnRPcmRlcih0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlICE9PSB0aGlzLnN0YXRlLm1hcmdpblRhYmxlU29ydCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWFyZ2luVGFibGVTb3J0OiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvcnREaXJlY3Rpb246ICF0aGlzLnN0YXRlLnNvcnREaXJlY3Rpb259KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9hc3NldFR5cGUoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIFwiYml0YXNzZXRcIiBpbiBhc3NldFxuICAgICAgICAgICAgPyBhc3NldC5iaXRhc3NldC5pc19wcmVkaWN0aW9uX21hcmtldFxuICAgICAgICAgICAgICAgID8gXCJQcmVkaWN0aW9uXCJcbiAgICAgICAgICAgICAgICA6IFwiU21hcnRcIlxuICAgICAgICAgICAgOiBcIlNpbXBsZVwiO1xuICAgIH1cblxuICAgIHJlbmRlckZsYWdJbmRpY2F0b3JzKGZsYWdzLCBuYW1lcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bmFtZXMubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0RmxhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGZsYWdfJHtuYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NldD17ZmxhZ3NbbmFtZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGVybWlzc2lvbkluZGljYXRvcnMocGVybWlzc2lvbnMsIG5hbWVzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtuYW1lcy5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRQZXJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcGVybV8ke25hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2V0PXtwZXJtaXNzaW9uc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRQcmljZShwcmljZSwgaGlkZV9zeW1ib2xzID0gZmFsc2UsIGhpZGVfdmFsdWUgPSBmYWxzZSkge1xuICAgICAgICB2YXIgYmFzZSA9IHByaWNlLmJhc2U7XG4gICAgICAgIHZhciBxdW90ZSA9IHByaWNlLnF1b3RlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2Jhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2Jhc2UuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtxdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgIGhpZGVfdmFsdWU9e2hpZGVfdmFsdWV9XG4gICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzPXtoaWRlX3N5bWJvbHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckF1dGhvcml0eUxpc3QoYXV0aG9yaXRpZXMpIHtcbiAgICAgICAgcmV0dXJuIGF1dGhvcml0aWVzLm1hcChmdW5jdGlvbihhdXRob3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXthdXRob3JpdHl9IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWFya2V0TGlzdChhc3NldCwgbWFya2V0cykge1xuICAgICAgICB2YXIgc3ltYm9sID0gYXNzZXQuc3ltYm9sO1xuICAgICAgICByZXR1cm4gbWFya2V0cy5tYXAoXG4gICAgICAgICAgICBmdW5jdGlvbihtYXJrZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFya2V0ID09IHN5bWJvbCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldElEID0gbWFya2V0ICsgXCJfXCIgKyBzeW1ib2w7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldE5hbWUgPSBtYXJrZXQgKyBcIi9cIiArIHN5bWJvbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e21hcmtldElEfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke21hcmtldElEfWB9PnttYXJrZXROYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckFib3V0Qm94KGFzc2V0LCBvcmlnaW5hbEFzc2V0KSB7XG4gICAgICAgIHZhciBpc3N1ZXIgPSBDaGFpblN0b3JlLmdldE9iamVjdChhc3NldC5pc3N1ZXIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHZhciBpc3N1ZXJOYW1lID0gaXNzdWVyID8gaXNzdWVyLmdldChcIm5hbWVcIikgOiBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCA8YSB0byBhbnkgbGlua3MgaW5jbHVkZWQgaW4gdGhlIGRlc2NyaXB0aW9uXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRlc2MgPSBkZXNjcmlwdGlvbi5tYWluO1xuICAgICAgICBsZXQgc2hvcnRfbmFtZSA9IGRlc2NyaXB0aW9uLnNob3J0X25hbWUgPyBkZXNjcmlwdGlvbi5zaG9ydF9uYW1lIDogbnVsbDtcblxuICAgICAgICBsZXQgdXJsVGVzdCA9IC8oaHR0cD8pOlxcL1xcLyh3d3dcXC4pP1thLXowLTlcXC46XS4qPyg/PVxccykvZztcblxuICAgICAgICAvLyBSZWdleHAgbmVlZHMgYSB3aGl0ZXNwYWNlIGFmdGVyIGEgdXJsLCBzbyBhZGQgb25lIHRvIG1ha2Ugc3VyZVxuICAgICAgICBkZXNjID0gZGVzYyAmJiBkZXNjLmxlbmd0aCA+IDAgPyBkZXNjICsgXCIgXCIgOiBkZXNjO1xuICAgICAgICBsZXQgdXJscyA9IGRlc2MubWF0Y2godXJsVGVzdCk7XG5cbiAgICAgICAgLy8gQWRkIG1hcmtldCBsaW5rXG4gICAgICAgIGNvbnN0IGNvcmVfYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFwiMS4zLjBcIik7XG4gICAgICAgIGxldCBwcmVmZXJyZWRNYXJrZXQgPSBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgID8gZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICA6IGNvcmVfYXNzZXRcbiAgICAgICAgICAgICAgICA/IGNvcmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgOiBcIkJUU1wiO1xuICAgICAgICBpZiAoXCJiaXRhc3NldFwiIGluIGFzc2V0ICYmIGFzc2V0LmJpdGFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0KSB7XG4gICAgICAgICAgICBwcmVmZXJyZWRNYXJrZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFxuICAgICAgICAgICAgICAgIGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChwcmVmZXJyZWRNYXJrZXQpIHtcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRNYXJrZXQgPSBwcmVmZXJyZWRNYXJrZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRNYXJrZXQgPSBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYXNzZXQuc3ltYm9sID09PSBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKSkgcHJlZmVycmVkTWFya2V0ID0gXCJVU0RcIjtcbiAgICAgICAgaWYgKHVybHMgJiYgdXJscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVybHMuZm9yRWFjaCh1cmwgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtYXJrZG93blVybCA9IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cIiR7dXJsfVwiPiR7dXJsfTwvYT5gO1xuICAgICAgICAgICAgICAgIGRlc2MgPSBkZXNjLnJlcGxhY2UodXJsLCBtYXJrZG93blVybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7bmFtZSwgcHJlZml4fSA9IHV0aWxzLnJlcGxhY2VOYW1lKG9yaWdpbmFsQXNzZXQpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19PlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7c2hvcnRfbmFtZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDE1fX0+e3Nob3J0X25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBtYXJrZXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hcmtldC8ke2Fzc2V0LnN5bWJvbH1fJHtwcmVmZXJyZWRNYXJrZXR9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPEhlbHBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIHBhdGg9e1wiYXNzZXRzL1wiICsgYXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICBhbHRfcGF0aD1cImFzc2V0cy9Bc3NldFwiXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb249XCJzdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXsocHJlZml4IHx8IFwiXCIpICsgbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2N9XG4gICAgICAgICAgICAgICAgICAgIGlzc3Vlcj17aXNzdWVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaGlkZV9pc3N1ZXI9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyU3VtbWFyeShhc3NldCkge1xuICAgICAgICAvLyBUT0RPOiBjb25maWRlbnRpYWxfc3VwcGx5OiAwIFVTRCAgIFtJRiBOT1QgWkVSTyBPUiBOT1QgRElTQUJMRSBDT05GSURFTlRJQUxdXG4gICAgICAgIGxldCBkeW5hbWljID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KGFzc2V0LmR5bmFtaWNfYXNzZXRfZGF0YV9pZCk7XG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXNzZXQub3B0aW9ucztcblxuICAgICAgICBsZXQgZmxhZ0Jvb2xlYW5zID0gYXNzZXRVdGlscy5nZXRGbGFnQm9vbGVhbnMoXG4gICAgICAgICAgICBhc3NldC5vcHRpb25zLmZsYWdzLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5oYXMoXCJiaXRhc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGJpdE5hbWVzID0gT2JqZWN0LmtleXMoZmxhZ0Jvb2xlYW5zKTtcblxuICAgICAgICB2YXIgY3VycmVudFN1cHBseSA9IGR5bmFtaWMgPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LmN1cnJlbnRfc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWMuY3VycmVudF9zdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHZhciBzdGVhbHRoU3VwcGx5ID0gZHluYW1pYyA/IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuc3RlYWx0aF9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pYy5jb25maWRlbnRpYWxfc3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICB2YXIgbWFya2V0RmVlID0gZmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5Lm1hcmtldF9mZWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7b3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgLyAxMDAuMH0gJTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICAvLyBvcHRpb25zLm1heF9tYXJrZXRfZmVlIGluaXRpYWxseSBhIHN0cmluZ1xuICAgICAgICB2YXIgbWF4TWFya2V0RmVlID0gZmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5Lm1heF9tYXJrZXRfZmVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9eytvcHRpb25zLm1heF9tYXJrZXRfZmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1jYXJkIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2Fzc2V0LnN5bWJvbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuYXNzZXRfdHlwZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHt0aGlzLl9hc3NldFR5cGUoYXNzZXQpfSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuaXNzdWVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2Fzc2V0Lmlzc3Vlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5wcmVjaXNpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7YXNzZXQucHJlY2lzaW9ufSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAge3N0ZWFsdGhTdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0RmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAge21heE1hcmtldEZlZX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZsYWdJbmRpY2F0b3JzKGZsYWdCb29sZWFucywgYml0TmFtZXMpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyUHJpY2VGZWVkKGFzc2V0KSB7XG4gICAgICAgIHZhciB0aXRsZSA9IDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQudGl0bGVcIiAvPjtcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XG4gICAgICAgIGlmICghKFwiY3VycmVudF9mZWVkXCIgaW4gYml0QXNzZXQpKSByZXR1cm4gPGRpdiBoZWFkZXI9e3RpdGxlfSAvPjtcbiAgICAgICAgdmFyIGN1cnJlbnRGZWVkID0gYml0QXNzZXQuY3VycmVudF9mZWVkO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJmb3JjZSBzZXR0bGVtZW50IGRlbGF5OiBcIiArXG4gICAgICAgICAgICAgICAgYml0QXNzZXQub3B0aW9ucy5mb3JjZV9zZXR0bGVtZW50X2RlbGF5X3NlY1xuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwiZm9yY2Ugc2V0dGxlbWVudCBvZmZzZXQ6IFwiICtcbiAgICAgICAgICAgICAgICBiaXRBc3NldC5vcHRpb25zLmZvcmNlX3NldHRsZW1lbnRfb2Zmc2V0X3BlcmNlbnRcbiAgICAgICAgKTtcbiAgICAgICAgKi9cblxuICAgICAgICBsZXQgc2V0dGxlbWVudERlbGF5ID0gYml0QXNzZXQub3B0aW9ucy5mb3JjZV9zZXR0bGVtZW50X2RlbGF5X3NlYztcbiAgICAgICAgbGV0IHNldHRsZW1lbnRPZmZzZXQgPSBiaXRBc3NldC5vcHRpb25zLmZvcmNlX3NldHRsZW1lbnRfb2Zmc2V0X3BlcmNlbnQ7XG5cbiAgICAgICAgdmFyIGdsb2JhbFNldHRsZW1lbnRQcmljZSA9IHRoaXMuZ2V0R2xvYmFsU2V0dGxlbWVudFByaWNlKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj57dGl0bGV9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjEuMnJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuc2V0dGxlbWVudF9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdHRlZFByaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZlZWQuc2V0dGxlbWVudF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEZlZWQubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpbyAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50RmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gLyAxMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmdsb2JhbF9zZXR0bGVtZW50X3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dsb2JhbFNldHRsZW1lbnRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBnbG9iYWxTZXR0bGVtZW50UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBrZXktdmFsdWUtdGFibGUgdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5zZXR0bGVtZW50X2RlbGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFRpbWUgdGltZT17c2V0dGxlbWVudERlbGF5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmZvcmNlX3NldHRsZW1lbnRfb2Zmc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge3NldHRsZW1lbnRPZmZzZXQgLyAxMDB9JTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVQb29sKGFzc2V0KSB7XG4gICAgICAgIGxldCBkeW5hbWljID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KGFzc2V0LmR5bmFtaWNfYXNzZXRfZGF0YV9pZCk7XG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXNzZXQub3B0aW9ucztcbiAgICAgICAgY29uc3QgY29yZSA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXCIxLjMuMFwiKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1jYXJkIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7PFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wudGl0bGVcIiAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wucG9vbF90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdW5zYWZlXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIGNvcmU9e2NvcmUuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jb3JlX2V4Y2hhbmdlX3JhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5wb29sX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pYyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pYy5mZWVfcG9vbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wudW5jbGFpbWVkX2lzc3Vlcl9pbmNvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pYyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWMuYWNjdW11bGF0ZWRfZmVlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJBc3NldE93bmVyVXBkYXRlKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLW5vLXBhZGRpbmdcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3dZOiBcInZpc2libGVcIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1jYXJkIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnVwZGF0ZV9vd25lclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy51cGRhdGVfb3duZXJfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXRPd25lclVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPd25lcj17YXNzZXQuaXNzdWVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlZFB1Ymxpc2goYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvd1k6IFwidmlzaWJsZVwifX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmQgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24udHJ4VHlwZXMuYXNzZXRfcHVibGlzaF9mZWVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZWRfcHJvZHVjZXJfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxBc3NldFB1Ymxpc2hGZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3duZXI9e2Fzc2V0Lmlzc3Vlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZlZVBvb2xGdW5kaW5nKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC1uby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1jYXJkIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmZ1bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuZnVuZF90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGZWVQb29sT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlUG9vbENsYWltaW5nKGFzc2V0KSB7XG4gICAgICAgIGxldCBkeW5hbWljID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KGFzc2V0LmR5bmFtaWNfYXNzZXRfZGF0YV9pZCk7XG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC1uby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1jYXJkIG5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNsYWltX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZlZVBvb2xPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5kZXJBY2NvdW50TmFtZT17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWM9e2R5bmFtaWN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNsYWltXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZlZXNDbGFpbWluZyhhc3NldCkge1xuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xuICAgICAgICBpZiAoZHluYW1pYykgZHluYW1pYyA9IGR5bmFtaWMudG9KUygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXQtY2FyZCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9jbGFpbV9mZWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGZWVQb29sT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pYz17ZHluYW1pY31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmRlckFjY291bnROYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjbGFpbV9mZWVzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFRPRE86IEJsYWNrbGlzdCBBdXRob3JpdGllczogPEFjY291bnQgbGlzdCBsaWtlIFZvdGluZz5cbiAgICAvLyBUT0RPOiBCbGFja2xpc3QgTWFya2V0OiBCYXNlL01hcmtldCwgQmFzZS9NYXJrZXRcbiAgICByZW5kZXJQZXJtaXNzaW9ucyhhc3NldCkge1xuICAgICAgICAvL3ZhciBkeW5hbWljID0gYXNzZXQuZHluYW1pYztcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IGFzc2V0Lm9wdGlvbnM7XG5cbiAgICAgICAgbGV0IHBlcm1pc3Npb25Cb29sZWFucyA9IGFzc2V0VXRpbHMuZ2V0RmxhZ0Jvb2xlYW5zKFxuICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5pc3N1ZXJfcGVybWlzc2lvbnMsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgYml0TmFtZXMgPSBPYmplY3Qua2V5cyhwZXJtaXNzaW9uQm9vbGVhbnMpO1xuXG4gICAgICAgIC8vIG9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzID0gW1wiMS4yLjNcIiwgXCIxLjIuNFwiXTtcbiAgICAgICAgLy8gb3B0aW9ucy53aGl0ZWxpc3RfYXV0aG9yaXRpZXMgPSBbXCIxLjIuMVwiLCBcIjEuMi4yXCJdO1xuICAgICAgICAvLyBvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzID0gW1wiSlBZXCIsIFwiUlVCXCJdO1xuICAgICAgICAvLyBvcHRpb25zLndoaXRlbGlzdF9tYXJrZXRzID0gW1wiVVNEXCIsIFwiRVVSXCIsIFwiR09MRFwiXTtcblxuICAgICAgICAvLyBvcHRpb25zLm1heF9tYXJrZXRfZmVlIGluaXRpYWxseSBhIHN0cmluZ1xuICAgICAgICB2YXIgbWF4TWFya2V0RmVlID0gcGVybWlzc2lvbkJvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5tYXhfbWFya2V0X2ZlZVwiIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXsrb3B0aW9ucy5tYXhfbWFya2V0X2ZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgLy8gb3B0aW9ucy5tYXhfc3VwcGx5IGluaXRpYWxseSBhIHN0cmluZ1xuICAgICAgICB2YXIgbWF4U3VwcGx5ID0gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMubWF4X3N1cHBseVwiIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXsrb3B0aW9ucy5tYXhfc3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuXG4gICAgICAgIHZhciB3aGl0ZUxpc3RzID0gcGVybWlzc2lvbkJvb2xlYW5zW1wid2hpdGVfbGlzdFwiXSA/IChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLmJsYWNrbGlzdF9hdXRob3JpdGllc1wiIC8+XG4gICAgICAgICAgICAgICAgOiAmbmJzcDtcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBdXRob3JpdHlMaXN0KG9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzKX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5ibGFja2xpc3RfbWFya2V0c1wiIC8+XG4gICAgICAgICAgICAgICAgOiAmbmJzcDtcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNYXJrZXRMaXN0KGFzc2V0LCBvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzKX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy53aGl0ZWxpc3RfYXV0aG9yaXRpZXNcIiAvPlxuICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXV0aG9yaXR5TGlzdChvcHRpb25zLndoaXRlbGlzdF9hdXRob3JpdGllcyl9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMud2hpdGVsaXN0X21hcmtldHNcIiAvPlxuICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWFya2V0TGlzdChhc3NldCwgb3B0aW9ucy53aGl0ZWxpc3RfbWFya2V0cyl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmQgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHs8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy50aXRsZVwiIC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBrZXktdmFsdWUtdGFibGUgdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMS4ycmVtXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge21heE1hcmtldEZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXhTdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBlcm1pc3Npb25JbmRpY2F0b3JzKHBlcm1pc3Npb25Cb29sZWFucywgYml0TmFtZXMpfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgey8qd2hpdGVMaXN0cyovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgY2FsbCBvcmRlcnNcbiAgICBnZXRNYXJnaW5Qb3NpdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IHtzb3J0RGlyZWN0aW9ufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHNvcnRGdW5jdGlvbnMgPSB7XG4gICAgICAgICAgICBuYW1lOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWVBID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEuYm9ycm93ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZUEpIG5hbWVBID0gbmFtZUEuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZUIgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYi5ib3Jyb3dlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lQikgbmFtZUIgPSBuYW1lQi5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSByZXR1cm4gc29ydERpcmVjdGlvbiA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikgcmV0dXJuIHNvcnREaXJlY3Rpb24gPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2U6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAoc29ydERpcmVjdGlvbiA/IDEgOiAtMSkgKlxuICAgICAgICAgICAgICAgICAgICAoYS5jYWxsX3ByaWNlLnRvUmVhbCgpIC0gYi5jYWxsX3ByaWNlLnRvUmVhbCgpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sbGF0ZXJhbDogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoc29ydERpcmVjdGlvbiA/IDEgOiAtMSkgKiAoYi5jb2xsYXRlcmFsIC0gYS5jb2xsYXRlcmFsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWJ0OiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChzb3J0RGlyZWN0aW9uID8gMSA6IC0xKSAqIChiLmRlYnQgLSBhLmRlYnQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhdGlvOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChzb3J0RGlyZWN0aW9uID8gMSA6IC0xKSAqIChhLmdldFJhdGlvKCkgLSBiLmdldFJhdGlvKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmNhbGxPcmRlcnMuc29ydChcbiAgICAgICAgICAgIHNvcnRGdW5jdGlvbnNbdGhpcy5zdGF0ZS5tYXJnaW5UYWJsZVNvcnRdXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gdGhlIGdsb2JhbCBzZXR0bGVtZW50IHByaWNlIGlzIGRlZmluZWQgYXMgdGhlXG4gICAgLy8gdGhlIHByaWNlIGF0IHdoaWNoIHRoZSBsZWFzdCBjb2xsYXRlcmFsaXplZCBzaG9ydFxuICAgIC8vICdzIGNvbGxhdGVyYWwgbm8gbG9uZ2VyIGVub3VnaCB0byBiYWNrIHRoZSBkZWJ0XG4gICAgLy8gaGUvc2hlIG93ZXMuIElmIHRoZSBmZWVkIHByaWNlIGdvZXMgYWJvdmUgdGhpcyxcbiAgICAvLyB0aGVuXG4gICAgZ2V0R2xvYmFsU2V0dGxlbWVudFByaWNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY2FsbE9yZGVycykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaXJzdCBnZXQgdGhlIGxlYXN0IGNvbGxhdGVyYWxpemVkIHNob3J0IHBvc2l0aW9uXG4gICAgICAgIHZhciBsZWFzdENvbFNob3J0ID0gbnVsbDtcbiAgICAgICAgdmFyIGxlYXN0Q29sU2hvcnRSYXRpbyA9IG51bGw7XG4gICAgICAgIHZhciBsZW4gPSB0aGlzLnN0YXRlLmNhbGxPcmRlcnMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2FsbF9vcmRlciA9IHRoaXMuc3RhdGUuY2FsbE9yZGVyc1tpXTtcblxuICAgICAgICAgICAgaWYgKGxlYXN0Q29sU2hvcnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnQgPSBjYWxsX29yZGVyO1xuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnRSYXRpbyA9IGNhbGxfb3JkZXIuZ2V0UmF0aW8oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FsbF9vcmRlci5nZXRSYXRpbygpIDwgbGVhc3RDb2xTaG9ydFJhdGlvKSB7XG4gICAgICAgICAgICAgICAgbGVhc3RDb2xTaG9ydFJhdGlvID0gY2FsbF9vcmRlci5nZXRSYXRpbygpO1xuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnQgPSBjYWxsX29yZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlYXN0Q29sU2hvcnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY291bGRuJ3QgZmluZCB0aGUgbGVhc3QgY29sc2hvcnQ/XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMgcHJpY2Ugd2lsbCBoYXBwZW4gd2hlbiB0aGUgQ1IgaXMgMS5cbiAgICAgICAgLy8gVGhlIENSIGlzIDEgaWZmIGNvbGxhdGVyYWwgLyAoZGVidCB4IGZlZWRfIHByaWNlKSA9PSAxXG4gICAgICAgIC8vIFJlYXJyYW5naW5nLCB0aGlzIG1lYW5zIHRoYXQgdGhlIENSIGlzIDEgaWZmXG4gICAgICAgIC8vIGZlZWRfcHJpY2UgPT0gY29sbGF0ZXJhbCAvIGRlYnRcbiAgICAgICAgbGV0IGRlYnQgPSBsZWFzdENvbFNob3J0LmRlYnQ7XG4gICAgICAgIGxldCBjb2xsYXRlcmFsID0gbGVhc3RDb2xTaG9ydC5jb2xsYXRlcmFsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17Y29sbGF0ZXJhbH1cbiAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtsZWFzdENvbFNob3J0LmNhbGxfcHJpY2UuYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e2RlYnR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2xlYXN0Q29sU2hvcnQuY2FsbF9wcmljZS5xdW90ZS5hc3NldF9pZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHR3byB0YWJzXG4gICAgLy8gb25lIHRhYiBpcyBmb3IgdGhlIHByaWNlIGZlZWQgZGF0YSBmcm9tIHRoZVxuICAgIC8vIHdpdG5lc3MgZm9yIHRoZSBnaXZlbiBhc3NldFxuICAgIC8vIHRoZSBvdGhlciB0YWIgaXMgYSBsaXN0IG9mIHRoZSBtYXJnaW4gcG9zaXRpb25zXG4gICAgLy8gZm9yIHRoaXMgYXNzZXQgKGlmIGl0J3MgYSBiaXRhc3NldClcbiAgICByZW5kZXJNYXJnaW5Qb3NpdGlvbnMoYXNzZXQsIHNvcnRlZENhbGxPcmRlcnMpIHtcbiAgICAgICAgLy8gZmlyc3Qgd2UgY29tcHV0ZSB0aGUgcHJpY2UgZmVlZCB0YWJcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEoXCJmZWVkc1wiIGluIGJpdEFzc2V0KSB8fFxuICAgICAgICAgICAgYml0QXNzZXQuZmVlZHMubGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIGJpdEFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0XG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBvbGRlc3RWYWxpZERhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIG5vdyAtIGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnMuZmVlZF9saWZldGltZV9zZWMgKiAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gRmlsdGVyIGJ5IHZhbGlkIGZlZWQgbGlmZXRpbWUsIFNvcnQgYnkgcHVibGlzaGVkIGRhdGVcbiAgICAgICAgdmFyIGZlZWRzID0gYml0QXNzZXQuZmVlZHM7XG4gICAgICAgIGZlZWRzID0gZmVlZHNcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGFbMV1bMF0pID4gb2xkZXN0VmFsaWREYXRlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGZlZWQxLCBmZWVkMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShmZWVkMlsxXVswXSkgLSBuZXcgRGF0ZShmZWVkMVsxXVswXSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWZlZWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcm93cyA9IFtdO1xuICAgICAgICB2YXIgc2V0dGxlbWVudF9wcmljZV9oZWFkZXIgPSBmZWVkc1swXVsxXVsxXS5zZXR0bGVtZW50X3ByaWNlO1xuICAgICAgICB2YXIgY29yZV9leGNoYW5nZV9yYXRlX2hlYWRlciA9IGZlZWRzWzBdWzFdWzFdLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgbGV0IGhlYWRlciA9IChcbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5wdWJsaXNoZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnNldHRsZW1lbnRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+KFxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlbWVudF9wcmljZV9oZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4oXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JlX2V4Y2hhbmdlX3JhdGVfaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnB1Ymxpc2hlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVlZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmZWVkID0gZmVlZHNbaV07XG4gICAgICAgICAgICB2YXIgcHVibGlzaGVyID0gZmVlZFswXTtcbiAgICAgICAgICAgIHZhciBwdWJsaXNoRGF0ZSA9IG5ldyBEYXRlKGZlZWRbMV1bMF0gKyBcIlpcIik7XG4gICAgICAgICAgICB2YXIgc2V0dGxlbWVudF9wcmljZSA9IGZlZWRbMV1bMV0uc2V0dGxlbWVudF9wcmljZTtcbiAgICAgICAgICAgIHZhciBjb3JlX2V4Y2hhbmdlX3JhdGUgPSBmZWVkWzFdWzFdLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgICAgIHZhciBtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvID1cbiAgICAgICAgICAgICAgICBcIlwiICsgZmVlZFsxXVsxXS5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMDtcbiAgICAgICAgICAgIHZhciBtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gPVxuICAgICAgICAgICAgICAgIFwiXCIgKyBmZWVkWzFdWzFdLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyAvIDEwMDA7XG4gICAgICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgPHRyIGtleT17cHVibGlzaGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e3B1Ymxpc2hlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdHRlZFByaWNlKHNldHRsZW1lbnRfcHJpY2UsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXR0ZWRQcmljZShjb3JlX2V4Y2hhbmdlX3JhdGUsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge21haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW99XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGltZUFnbyB0aW1lPXtwdWJsaXNoRGF0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdyB3ZSBjb21wdXRlIHRoZSBtYXJnaW4gcG9zaXRpb24gdGFiXG4gICAgICAgIGxldCBoZWFkZXIyID0gKFxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU29ydE9yZGVyLmJpbmQodGhpcywgXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYm9ycm93ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIGNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVNvcnRPcmRlci5iaW5kKHRoaXMsIFwiY29sbGF0ZXJhbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uY29sbGF0ZXJhbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYWxsT3JkZXJzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS5jYWxsT3JkZXJzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldENvbGxhdGVyYWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRBbW91bnQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNhbGxPcmRlcnNbMF0uZ2V0Q29sbGF0ZXJhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIGNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVNvcnRPcmRlci5iaW5kKHRoaXMsIFwiZGVidFwiKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYWxsT3JkZXJzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS5jYWxsT3JkZXJzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudFRvUmVjZWl2ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEFtb3VudCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FsbE9yZGVyc1swXS5hbW91bnRUb1JlY2VpdmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZSBjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU29ydE9yZGVyLmJpbmQodGhpcywgXCJwcmljZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhbGxPcmRlcnMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FsbE9yZGVyc1swXS5jYWxsX3ByaWNlLmJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYWxsT3JkZXJzWzBdLmNhbGxfcHJpY2UuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYWxsT3JkZXJzWzBdLmNhbGxfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1b3RlLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FsbE9yZGVyc1swXS5jYWxsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdW90ZS5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV92YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5jb2xsX3JhdGlvX3RhcmdldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU29ydE9yZGVyLmJpbmQodGhpcywgXCJyYXRpb1wiKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LmNvbGxfcmF0aW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCByb3dzMiA9IHNvcnRlZENhbGxPcmRlcnMubWFwKGMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwibWFyZ2luLXJvd1wiIGtleT17Yy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtjLmJvcnJvd2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2MuY29sbGF0ZXJhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Yy5nZXRDb2xsYXRlcmFsKCkuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjLmRlYnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2MuYW1vdW50VG9SZWNlaXZlKCkuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCBwYWRkaW5nUmlnaHQ6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2MuY2FsbF9wcmljZS5iYXNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtjLmNhbGxfcHJpY2UuYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e2MuY2FsbF9wcmljZS5xdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2MuY2FsbF9wcmljZS5xdW90ZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3N5bWJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwiLCBwYWRkaW5nUmlnaHQ6IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ISFjLm9yZGVyLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoYy5vcmRlci50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyAvIDEwMDApLnRvRml4ZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2MuZ2V0U3RhdHVzKCl9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjLmdldFJhdGlvKCkudG9GaXhlZCgzKX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nPVwiYml0YXNzZXREYXRhVGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS50aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0YWJsZSBvcmRlci10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMS4ycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5Pntyb3dzfTwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiZXhwbG9yZXIuYXNzZXQubWFyZ2luX3Bvc2l0aW9ucy50aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0YWJsZSBvcmRlci10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMS4ycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57cm93czJ9PC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQudG9KUygpO1xuICAgICAgICB2YXIgc29ydGVkQ2FsbE9yZGVycyA9IHRoaXMuZ2V0TWFyZ2luUG9zaXRpb25zKCk7XG4gICAgICAgIHZhciBwcmljZUZlZWQgPVxuICAgICAgICAgICAgXCJiaXRhc3NldFwiIGluIGFzc2V0ID8gdGhpcy5yZW5kZXJQcmljZUZlZWQoYXNzZXQpIDogbnVsbDtcbiAgICAgICAgdmFyIHByaWNlRmVlZERhdGEgPVxuICAgICAgICAgICAgXCJiaXRhc3NldFwiIGluIGFzc2V0XG4gICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlck1hcmdpblBvc2l0aW9ucyhhc3NldCwgc29ydGVkQ2FsbE9yZGVycylcbiAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgYXNzZXQtcGFnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IHdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1lZGl1bS11cC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQWJvdXRCb3goYXNzZXQsIHRoaXMucHJvcHMuYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz1cImFzc2V0RGF0YVRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q2xhc3M9XCJ0YWItbm8tYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiZXhwbG9yZXIuYXNzZXQuaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIGxhcmdlLWhvcml6b250YWwgbWVkaXVtLXVwLTEgbGFyZ2UtdXAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN1bW1hcnkoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQZXJtaXNzaW9ucyhhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZlZVBvb2woYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZUZlZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQcmljZUZlZWQoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2VGZWVkRGF0YSA/IHByaWNlRmVlZERhdGEgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJleHBsb3Jlci5hc3NldC5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbGFyZ2UtaG9yaXpvbnRhbCBtZWRpdW0tdXAtMSBsYXJnZS11cC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVQb29sRnVuZGluZyhhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVQb29sQ2xhaW1pbmcoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRmVlc0NsYWltaW5nKGFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFzc2V0T3duZXJVcGRhdGUoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiYml0YXNzZXRcIiBpbiBhc3NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFzc2V0LmJpdGFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlckZlZWRQdWJsaXNoKGFzc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldCA9IGNvbm5lY3QoXG4gICAgQXNzZXQsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OlxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5Bc3NldCA9IEFzc2V0V3JhcHBlcihBc3NldCwge1xuICAgIHByb3BOYW1lczogW1wiYmFja2luZ0Fzc2V0XCJdXG59KTtcblxuY2xhc3MgQXNzZXRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXNzZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiA8UGFnZTQwNCBzdWJ0aXRsZT1cImFzc2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xuICAgICAgICB9XG4gICAgICAgIGxldCBiYWNraW5nQXNzZXQgPSB0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0XCIpXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMuYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiA8QXNzZXQgey4uLnRoaXMucHJvcHN9IGJhY2tpbmdBc3NldD17YmFja2luZ0Fzc2V0fSAvPjtcbiAgICB9XG59XG5cbkFzc2V0Q29udGFpbmVyID0gQXNzZXRXcmFwcGVyKEFzc2V0Q29udGFpbmVyLCB7XG4gICAgd2l0aER5bmFtaWM6IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldFN5bWJvbFNwbGl0dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzeW1ib2wgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zeW1ib2wudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIDxBc3NldENvbnRhaW5lciB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3N5bWJvbH0gLz47XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gYSBjbGFzcyB0byBkaXNwbGF5IHRpbWUgbmljZWx5IHdoZW4gZ2l2ZW4gc2Vjb25kc1xyXG4vLyBmb3IgZXhhbXBsZSwgZGlzcGxheVxyXG5cclxuLy8gZXhwZWN0cyB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYXMgYSBwcm9wZXJ0eVxyXG5cclxuY2xhc3MgRm9ybWF0dGVkVGltZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt0aW1lOiBwcm9wcy50aW1lfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnaXZlbiBhbiBpbnRlZ2VyIHNlY29uZHMgYXMgYW4gYXJndW1lbnQsXHJcbiAgICAvLyByZXR1cm4gdGhlIG51bWJlciBvZiBob3Vyc1xyXG4gICAgZ2V0SG91cnMoc2Vjcykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXQgaG91cnMgY2FsbGVkIHdpdGg6IFwiICsgc2Vjcyk7XHJcbiAgICAgICAgcmV0dXJuIHNlY3MgLyAzNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj57dGhpcy5nZXRIb3Vycyh0aGlzLnN0YXRlLnRpbWUpfWg8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZFRpbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5cclxuY29uc3Qgc3RhdGVTZXR0ZXIgPSAodGhhdCwga2V5LCB0cmFuc2Zvcm0gPSB2YWx1ZSA9PiB2YWx1ZSkgPT4gdmFsdWUgPT5cclxuICAgIHRoYXQuc2V0U3RhdGUoe1trZXldOiB0cmFuc2Zvcm0odmFsdWUpfSk7XHJcblxyXG5jb25zdCBrZXlHZXR0ZXIgPSBrZXkgPT4gb2JqZWN0ID0+IG9iamVjdFtrZXldO1xyXG5cclxuY2xhc3MgRmVlUG9vbE9wZXJhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHR5cGU6IFwiZnVuZFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjb3VudE5hbWVDaGFuZ2VkID0gc3RhdGVTZXR0ZXIodGhpcywgXCJmdW5kZXJBY2NvdW50TmFtZVwiKTtcclxuICAgIG9uQWNjb3VudENoYW5nZWQgPSBzdGF0ZVNldHRlcih0aGlzLCBcIm5ld0Z1bmRlckFjY291bnRcIik7XHJcbiAgICBvblBvb2xJbnB1dCA9IHN0YXRlU2V0dGVyKHRoaXMsIFwiZnVuZFBvb2xBbW91bnRcIiwga2V5R2V0dGVyKFwiYW1vdW50XCIpKTtcclxuXHJcbiAgICBvbkNsYWltSW5wdXQoa2V5LCB7YW1vdW50fSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVba2V5ICsgXCJBc3NldFwiXS5zZXRBbW91bnQoe3JlYWw6IGFtb3VudH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GdW5kUG9vbCA9ICgpID0+XHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmZ1bmRQb29sKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5ld0Z1bmRlckFjY291bnRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5uZXdGdW5kZXJBY2NvdW50LmdldChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29yZSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mdW5kUG9vbEFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICByZXNldCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbml0aWFsU3RhdGUgPSAoKSA9PiAoe1xyXG4gICAgICAgIGZ1bmRlckFjY291bnROYW1lOiB0aGlzLnByb3BzLmZ1bmRlckFjY291bnROYW1lLFxyXG4gICAgICAgIGZ1bmRQb29sQW1vdW50OiAwLFxyXG4gICAgICAgIGZ1bmRQb29sQXNzZXQ6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmNvcmUuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5jb3JlLmdldChcImlkXCIpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2xhaW1Qb29sQW1vdW50OiAwLFxyXG4gICAgICAgIGNsYWltUG9vbEFtb3VudEFzc2V0OiBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5jb3JlLmdldChcInByZWNpc2lvblwiKSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuY29yZS5nZXQoXCJpZFwiKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNsYWltRmVlc0Ftb3VudDogMCxcclxuICAgICAgICBjbGFpbUZlZXNBbW91bnRBc3NldDogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgYW1vdW50OiAwLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBvbkNsYWltRmVlcygpIHtcclxuICAgICAgICBsZXQgYWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudCh0aGlzLnByb3BzLmZ1bmRlckFjY291bnROYW1lKTtcclxuICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybjtcclxuICAgICAgICBBc3NldEFjdGlvbnMuY2xhaW1Qb29sRmVlcyhcclxuICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGFpbUZlZXNBbW91bnRBc3NldFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGFpbVBvb2wgPSAoKSA9PlxyXG4gICAgICAgIEFzc2V0QWN0aW9ucy5jbGFpbVBvb2woXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1Qb29sQW1vdW50QXNzZXRcclxuICAgICAgICApO1xyXG5cclxuICAgIHJlbmRlckZ1bmRQb29sKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcHJvcHMsXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBvblBvb2xJbnB1dCxcclxuICAgICAgICAgICAgb25GdW5kUG9vbCxcclxuICAgICAgICAgICAgcmVzZXQsXHJcbiAgICAgICAgICAgIG9uQWNjb3VudE5hbWVDaGFuZ2VkLFxyXG4gICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkXHJcbiAgICAgICAgfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBjb3JlLCBoaWRlQmFsYW5jZSwgZ2V0RHluYW1pY09iamVjdH0gPSBwcm9wcztcclxuICAgICAgICBjb25zdCB7ZnVuZGVyQWNjb3VudE5hbWUsIGZ1bmRQb29sQW1vdW50LCBuZXdGdW5kZXJBY2NvdW50fSA9IHN0YXRlO1xyXG4gICAgICAgIGxldCBkeW5hbWljT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICBpZiAoIWhpZGVCYWxhbmNlKVxyXG4gICAgICAgICAgICBkeW5hbWljT2JqZWN0ID0gZ2V0RHluYW1pY09iamVjdChcclxuICAgICAgICAgICAgICAgIGFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNvcmVJRCA9IGNvcmUuZ2V0KFwiaWRcIikgfHwgXCIxLjMuMFwiO1xyXG4gICAgICAgIGxldCBiYWxhbmNlID0gMDtcclxuICAgICAgICBpZiAobmV3RnVuZGVyQWNjb3VudCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb3JlQmFsYW5jZUlEID0gbmV3RnVuZGVyQWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBjb3JlSURdKTtcclxuICAgICAgICAgICAgaWYgKGNvcmVCYWxhbmNlSUQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoY29yZUJhbGFuY2VJRCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFsYW5jZVRleHQgPSAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXQgYW1vdW50PXtiYWxhbmNlfSBhc3NldD17Y29yZUlEfSAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2hpZGVCYWxhbmNlIHx8IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxLjVyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5wb29sX2JhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj46IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNPYmplY3QgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWNPYmplY3QuZ2V0KFwiZmVlX3Bvb2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5mdW5kaW5nX2FjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXtmdW5kZXJBY2NvdW50TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25BY2NvdW50TmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17b25BY2NvdW50Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmdW5kZXJBY2NvdW50TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtmdW5kUG9vbEFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Qb29sSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVJRH1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tjb3JlSURdfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZnVuZFBvb2xBbW91bnQgPD0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25GdW5kUG9vbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X2Z1bmRfZmVlX3Bvb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIiBvbkNsaWNrPXtyZXNldH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDbGFpbVBvb2woKSB7XHJcbiAgICAgICAgY29uc3Qge3Byb3BzLCBvbkNsYWltUG9vbCwgcmVzZXR9ID0gdGhpcztcclxuICAgICAgICBjb25zdCB7Y2xhaW1Qb29sQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBjb3JlLCBnZXREeW5hbWljT2JqZWN0fSA9IHByb3BzO1xyXG4gICAgICAgIGxldCBkeW5hbWljT2JqZWN0ID0gZ2V0RHluYW1pY09iamVjdChcclxuICAgICAgICAgICAgYXNzZXQuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjb3JlSUQgPSBjb3JlLmdldChcImlkXCIpIHx8IFwiMS4zLjBcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYmFsYW5jZVRleHQgPSAhIWR5bmFtaWNPYmplY3QgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGFpbVBvb2xBbW91bnRBc3NldC5zZXRBbW91bnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXRzOiBkeW5hbWljT2JqZWN0LmdldChcImZlZV9wb29sXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltUG9vbEFtb3VudDogdGhpcy5zdGF0ZS5jbGFpbVBvb2xBbW91bnRBc3NldC5nZXRBbW91bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDombmJzcDtcclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pY09iamVjdC5nZXQoXCJmZWVfcG9vbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jbGFpbV9wb29sX3RleHRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y2xhaW1Qb29sQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xhaW1JbnB1dC5iaW5kKHRoaXMsIFwiY2xhaW1Qb29sQW1vdW50XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlSUR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbY29yZUlEXX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdUb3A6IDE2fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGNsYWltUG9vbEFtb3VudCA8PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsYWltUG9vbH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X2NsYWltX2ZlZV9wb29sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCIgb25DbGljaz17cmVzZXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2xhaW1GZWVzKCkge1xyXG4gICAgICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHtjbGFpbUZlZXNBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7YXNzZXQsIGdldER5bmFtaWNPYmplY3R9ID0gcHJvcHM7XHJcbiAgICAgICAgbGV0IGR5bmFtaWNPYmplY3QgPSBnZXREeW5hbWljT2JqZWN0KFxyXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgdW5jbGFpbWVkQmFsYW5jZSA9IGR5bmFtaWNPYmplY3RcclxuICAgICAgICAgICAgPyBkeW5hbWljT2JqZWN0LmdldChcImFjY3VtdWxhdGVkX2ZlZXNcIilcclxuICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIGxldCB2YWxpZENsYWltID1cclxuICAgICAgICAgICAgY2xhaW1GZWVzQW1vdW50ID4gMCAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNsYWltRmVlc0Ftb3VudEFzc2V0LmdldEFtb3VudCgpIDw9IHVuY2xhaW1lZEJhbGFuY2U7XHJcblxyXG4gICAgICAgIGxldCB1bmNsYWltZWRCYWxhbmNlVGV4dCA9IChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDombmJzcDtcclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17dW5jbGFpbWVkQmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY2xhaW1fdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC51bmNsYWltZWRfaXNzdWVyX2luY29tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIHtkeW5hbWljT2JqZWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pY09iamVjdC5nZXQoXCJhY2N1bXVsYXRlZF9mZWVzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17dW5jbGFpbWVkQmFsYW5jZVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjbGFpbUZlZXNBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DbGFpbUlucHV0LmJpbmQodGhpcywgXCJjbGFpbUZlZXNBbW91bnRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2Fzc2V0LmdldChcImlkXCIpXX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdUb3A6IDE2fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF2YWxpZENsYWltXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xhaW1GZWVzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jbGFpbV9mZWVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcImZ1bmRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJGdW5kUG9vbCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcImNsYWltXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2xhaW1Qb29sKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwiY2xhaW1fZmVlc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNsYWltRmVlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRmVlUG9vbE9wZXJhdGlvbiA9IEFzc2V0V3JhcHBlcihGZWVQb29sT3BlcmF0aW9uLCB7XHJcbiAgICBwcm9wTmFtZXM6IFtcImFzc2V0XCIsIFwiY29yZVwiXSxcclxuICAgIGRlZmF1bHRQcm9wczoge1xyXG4gICAgICAgIGNvcmU6IFwiMS4zLjBcIlxyXG4gICAgfSxcclxuICAgIHdpdGhEeW5hbWljOiB0cnVlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlUG9vbE9wZXJhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgQXNzZXRPd25lclVwZGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY3VycmVudE93bmVyOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5ld19pc3N1ZXJfYWNjb3VudF9pZDogbnVsbCxcclxuICAgICAgICAgICAgaXNzdWVyX2FjY291bnRfbmFtZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50TmFtZUNoYW5nZWQoa2V5LCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtrZXldOiBuYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50Q2hhbmdlZChrZXksIGFjY291bnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IGFjY291bnQgPyBhY2NvdW50LmdldChcImlkXCIpIDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIEFzc2V0QWN0aW9ucy51cGRhdGVPd25lcihcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdfaXNzdWVyX2FjY291bnRfaWRcclxuICAgICAgICApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVzZXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBuZXdfaXNzdWVyX2FjY291bnRfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGlzc3Vlcl9hY2NvdW50X25hbWU6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2N1cnJlbnRPd25lcn0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMXJlbVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLmN1cnJlbnRfaXNzdWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2N1cnJlbnRPd25lci5nZXQoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtjdXJyZW50T3duZXIuZ2V0KFwibmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5uZXdfaXNzdWVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dGhpcy5zdGF0ZS5pc3N1ZXJfYWNjb3VudF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWNjb3VudE5hbWVDaGFuZ2VkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNzdWVyX2FjY291bnRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uQWNjb3VudENoYW5nZWQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdfaXNzdWVyX2FjY291bnRfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5pc3N1ZXJfYWNjb3VudF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlQWNjb3VudHM9e1tjdXJyZW50T3duZXIuZ2V0KFwibmFtZVwiKV19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICF0aGlzLnN0YXRlLm5ld19pc3N1ZXJfYWNjb3VudF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMudXBkYXRlX293bmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlc2V0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0T3duZXJVcGRhdGUgPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0T3duZXJVcGRhdGUpO1xyXG5leHBvcnQgZGVmYXVsdCBBc3NldE93bmVyVXBkYXRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCBQcmljZUlucHV0IGZyb20gXCIuLi9VdGlsaXR5L1ByaWNlSW5wdXRcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XHJcblxyXG5jbGFzcyBBc3NldFB1Ymxpc2hGZWVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnJlc2V0U3RhdGUocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U3RhdGUocHJvcHMgPSB0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgbGV0IHB1Ymxpc2hlcl9pZCA9IHByb3BzLmFjY291bnQuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGZWVkID0gcHJvcHMuYmFzZS5nZXRJbihbXCJiaXRhc3NldFwiLCBcImN1cnJlbnRfZmVlZFwiXSk7XHJcblxyXG4gICAgICAgIC8qIE1pZ2h0IG5lZWQgdG8gY2hlY2sgdGhlc2UgZGVmYXVsdCB2YWx1ZXMgKi9cclxuICAgICAgICBsZXQgbWNyID0gY3VycmVudEZlZWQuZ2V0KFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiLCAxNzUwKTtcclxuICAgICAgICBsZXQgbXNzciA9IGN1cnJlbnRGZWVkLmdldChcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiLCAxMTAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHVibGlzaGVyOiBwcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgIHB1Ymxpc2hlcl9pZCxcclxuICAgICAgICAgICAgbWNyLFxyXG4gICAgICAgICAgICBtY3JWYWx1ZTogbWNyIC8gMTAwMCxcclxuICAgICAgICAgICAgbXNzcixcclxuICAgICAgICAgICAgbXNzclZhbHVlOiBtc3NyIC8gMTAwMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50TmFtZUNoYW5nZWQoa2V5LCBuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtrZXldOiBuYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50Q2hhbmdlZChrZXksIGFjY291bnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IGFjY291bnQgPyBhY2NvdW50LmdldChcImlkXCIpIDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIEFzc2V0QWN0aW9ucy5wdWJsaXNoRmVlZCh7XHJcbiAgICAgICAgICAgIHB1Ymxpc2hlcjogdGhpcy5zdGF0ZS5wdWJsaXNoZXJfaWQsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhc2UuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIG1jcjogdGhpcy5zdGF0ZS5tY3IsXHJcbiAgICAgICAgICAgIG1zc3I6IHRoaXMuc3RhdGUubXNzcixcclxuICAgICAgICAgICAgc2V0dGxlbWVudFByaWNlOiB0aGlzLnN0YXRlLnNldHRsZW1lbnRQcmljZSxcclxuICAgICAgICAgICAgY2VyOiB0aGlzLnN0YXRlLmNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnJlc2V0U3RhdGUoKSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmljZUNoYW5nZWQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNldFJhdGlvKGtleSwge2Ftb3VudH0pIHtcclxuICAgICAgICAvKiBFbmZvcmNlIG9uZSBkZWNpbWFsIHBvaW50IG1heGltdW0gKi9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEhYW1vdW50ICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBhbW91bnQgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICAgICAgYW1vdW50LmluZGV4T2YoXCIuXCIpICE9PSAtMSAmJlxyXG4gICAgICAgICAgICBhbW91bnQuaW5kZXhPZihcIi5cIikgKyA0ICE9PSBhbW91bnQubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGFtb3VudCA9IGFtb3VudC5zdWJzdHIoMCwgYW1vdW50LmluZGV4T2YoXCIuXCIpICsgNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5ICsgXCJWYWx1ZVwiXTogYW1vdW50LFxyXG4gICAgICAgICAgICBba2V5XTogTWF0aC5mbG9vcihwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7cXVvdGUsIGJhc2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7bWNyVmFsdWUsIG1zc3JWYWx1ZSwgcHVibGlzaGVyfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5mZWVkX3Byb2R1Y2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17cHVibGlzaGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWNjb3VudE5hbWVDaGFuZ2VkLmJpbmQodGhpcywgXCJwdWJsaXNoZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vbkFjY291bnRDaGFuZ2VkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGlzaGVyX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3B1Ymxpc2hlcn1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBDb3JlIEV4Y2hhbmdlIFJhdGUgKi99XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxQcmljZUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25QcmljZUNoYW5nZWQ9e3RoaXMub25QcmljZUNoYW5nZWQuYmluZCh0aGlzLCBcImNlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3F1b3RlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2UuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTZXR0bGVtZW50IFByaWNlICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2VJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uUHJpY2VDaGFuZ2VkPXt0aGlzLm9uUHJpY2VDaGFuZ2VkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGxlbWVudFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5zZXR0bGVtZW50X3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZT17cXVvdGUuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZS5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1DUiAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17bWNyVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRSYXRpby5iaW5kKHRoaXMsIFwibWNyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTVNTUiAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXttc3NyVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXRSYXRpby5iaW5kKHRoaXMsIFwibXNzclwiKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9wdWJsaXNoX2ZlZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTdGF0ZSh0aGlzLnByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0UHVibGlzaEZlZWQgPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0UHVibGlzaEZlZWQpO1xyXG5Bc3NldFB1Ymxpc2hGZWVkID0gQXNzZXRXcmFwcGVyKEFzc2V0UHVibGlzaEZlZWQsIHtcclxuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxyXG4gICAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICAgICAgcXVvdGU6IFwiMS4zLjBcIlxyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgQXNzZXRQdWJsaXNoRmVlZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4vQW1vdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IHtQcmljZSwgQXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xyXG5cclxuY2xhc3MgUHJpY2VJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGxldCBxdW90ZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHByb3BzLnF1b3RlLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHByb3BzLnF1b3RlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBiYXNlID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgYW1vdW50OiAwLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogcHJvcHMuYmFzZS5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5iYXNlLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcHJpY2UgPSBuZXcgUHJpY2Uoe1xyXG4gICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgYmFzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgcmVhbFByaWNlVmFsdWU6IHByaWNlLnRvUmVhbCgpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvblByaWNlQ2hhbmdlZCh7YW1vdW50fSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUucHJpY2Uuc2V0UHJpY2VGcm9tUmVhbChwYXJzZUZsb2F0KGFtb3VudCkpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZWFsUHJpY2VWYWx1ZTogYW1vdW50XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUHJpY2VDaGFuZ2VkKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUHJpY2VDaGFuZ2VkKHRoaXMuc3RhdGUucHJpY2UuY2xvbmUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtyZWFsUHJpY2VWYWx1ZSwgcHJpY2V9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIGFtb3VudD17cmVhbFByaWNlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblByaWNlQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgYXNzZXQ9e3ByaWNlLmJhc2UuYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICBiYXNlPXt0aGlzLnByb3BzLnF1b3RlLmdldChcInN5bWJvbFwiKX1cclxuICAgICAgICAgICAgICAgIGlzUHJpY2VcclxuICAgICAgICAgICAgICAgIGFzc2V0cz17W3ByaWNlLnF1b3RlLmFzc2V0X2lkXX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5QcmljZUlucHV0ID0gQXNzZXRXcmFwcGVyKFByaWNlSW5wdXQsIHtcclxuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxyXG4gICAgZGVmYXVsdFByb3BzOiB7XHJcbiAgICAgICAgYmFzZTogXCIxLjMuMFwiXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VJbnB1dDtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOzs7O0FBaEVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQTJEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BOzs7O0FBZEE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BOzs7O0FBZkE7QUFDQTtBQWlCQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUlBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQU9BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBVEE7QUFZQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVRBO0FBWUE7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUtBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBQUE7QUFBQTtBQUNBO0FBMENBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWpCQTtBQTRCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQURBO0FBNEJBO0FBQ0E7QUFqQ0E7QUFvQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQS9CQTtBQUpBO0FBZ0RBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVZBO0FBSkE7QUFuREE7QUEyRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFGQTtBQUpBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBRkE7QUFKQTtBQXhCQTtBQUpBO0FBWEE7QUF3REE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFKQTtBQXFCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFKQTtBQW9CQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQURBO0FBa0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFKQTtBQURBO0FBZUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBREE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUpBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSkE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQWhCQTtBQUNBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUNBO0FBMEJBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFIQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUxBO0FBTUE7QUFOQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBakNBO0FBREE7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQW5CQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQVJBO0FBRkE7QUFBQTtBQVBBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBUkE7QUFGQTtBQUFBO0FBUEE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBbEJBO0FBRkE7QUFBQTtBQVZBO0FBb0NBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUE3RkE7QUFEQTtBQUNBO0FBd0dBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTNDQTtBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQWZBO0FBREE7QUFEQTtBQURBO0FBZ0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQWpCQTtBQXNCQTtBQXZCQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQWhDQTtBQVJBO0FBREE7QUFEQTtBQThEQTs7OztBQTdyQ0E7QUFDQTtBQStyQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBVkE7QUFDQTtBQWFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7Ozs7QUFiQTtBQUNBO0FBZUE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUpBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3J5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBaEJBO0FBQ0E7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFnQkE7QUFBQTtBQUNBO0FBakJBO0FBMkJBO0FBQ0E7QUFDQTtBQTdCQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBZkE7QUFBQTtBQUNBO0FBL0JBO0FBOERBO0FBQUE7QUFDQTtBQTdEQTtBQUZBO0FBR0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBOzs7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFUQTtBQXBDQTtBQW1EQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBREE7QUFGQTtBQU9BO0FBWkE7QUFjQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUZBO0FBaEJBO0FBQ0E7QUFzQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVEE7QUFqQkE7QUFnQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFGQTtBQUpBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQVRBO0FBN0JBO0FBK0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUExVEE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBQ0E7QUEwVEE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFUQTtBQTVCQTtBQThDQTs7OztBQTdGQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBNkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBREE7QUE5REE7QUFtRkE7Ozs7QUF0S0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBQ0E7QUFzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBbkJBO0FBdUJBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUVBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFnQkE7Ozs7QUF4REE7QUFDQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU1BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=