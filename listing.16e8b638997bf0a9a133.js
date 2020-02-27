(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[42],{

/***/ 3320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3321);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListingPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(498);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(429);
/* harmony import */ var _CoinCardListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3323);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(594);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2949);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2812);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1855);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var ListingPage = function (_React$Component) {
    _inherits(ListingPage, _React$Component);

    function ListingPage() {
        _classCallCheck(this, ListingPage);

        var _this = _possibleConstructorReturn(this, (ListingPage.__proto__ || Object.getPrototypeOf(ListingPage)).call(this));

        _this.getContent = function () {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "listingTable" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                        {
                            style: { margin: 2, fontSize: "1.0rem" },
                            to: "/market/DONATE_RUDEX.BTC"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.get_donate_tokens" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: { margin: 2, fontSize: "1.0rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            maxWidth: 25,
                            replaceNoneToBts: false,
                            name: "DONATE"
                        }),
                        "DONATE"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.token" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "listingTable__header" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "listingAssetCard" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingTable__cell listingTableRank" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.table.rank" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "listingTable__cell listingTableLogo" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingTable__cell listingTableAssetName align-left" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.table.asset_name" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "listingAssetInfo" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingAssetInfoData" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "listingTable__cell listingTableVotes" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.table.goal" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "listingTable__cell listingTableGoal" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.table.donates" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "listingTable__cell listingTableStatus" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.table.status" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingTable__cell listingTableProgress" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.table.progress" })
                        )
                    )
                ),
                _this.getCoinsList()
            );
        };

        _this.getCoinsList = function () {
            var coins = _this.state.coins;

            var sortedCoins = coins.sort(function (a, b) {
                return b.votes - a.votes;
            });
            return sortedCoins.map(function (coin, i) {
                coin.votes_for_percent = coin.votes < coin.goal ? coin.votes : coin.goal;
                coin.status = coin.votes < coin.goal ? "collecting" : "done";
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CoinCardListing__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    key: i,
                    rank: i + 1,
                    coin: coin
                });
            });
        };

        _this.state = {
            ListingNotice1Informed: false,
            coins: []
        };
        return _this;
    }

    _createClass(ListingPage, [{
        key: "onSubmitRequest",
        value: function onSubmitRequest(e) {
            e.preventDefault();
            this.setState({ error: null });
            //window.location.href = "https://goo.gl/forms/RZlCAvbtBJ077G762";
            window.open("https://goo.gl/forms/RZlCAvbtBJ077G762", "_blank");
        }
    }, {
        key: "onListingNotice1Informed",
        value: function onListingNotice1Informed() {
            this.setState({
                ListingNotice1Informed: !this.state.ListingNotice1Informed
            });
        }
    }, {
        key: "render",
        value: function render() {

            var RuDEX = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { style: { fontWeight: "bold" } },
                "RuDEX"
            );
            var DONATE = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                {
                    style: {
                        margin: 2,
                        fontSize: "1.0rem",
                        paddingRight: 5
                    },
                    to: "/asset/DONATE"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    maxWidth: 25,
                    replaceNoneToBts: false,
                    name: "DONATE"
                }),
                "DONATE"
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block small-12" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "tabs-container generic-bordered-box" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tabs"],
                                {
                                    defaultActiveTab: 0,
                                    segmented: false,
                                    setting: "permissionsTab",
                                    className: "account-tabs",
                                    tabsClass: "account-overview bordered-header content-block",
                                    contentClass: "padding"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"],
                                    { title: "listing.donate_progress" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { className: "horizontal", tabIndex: 1 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "grid-container", style: { padding: "2rem 8px" } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { marginBottom: 20 } }),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-block small-up-1 medium-up-1 large-up-1 no-overflow" },
                                                this.state.coins.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "div",
                                                    { style: { margin: "10px" } },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                                                        content: "listing.loading" }),
                                                    " "
                                                ) : this.getContent()
                                            )
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"],
                                    { title: "listing.add_coin" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "horizontal", tabIndex: 2 }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { className: "grid-container help-content-layout" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "main-content" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "h2",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.header" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                { style: { fontSize: "20px" } },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text1" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text2" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text3.t1" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text3.t2" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                                                    {
                                                        style: { margin: 2, fontSize: "1.0rem" },
                                                        to: "/market/DONATE_RUDEX.BTC"
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text3.get" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text4.t1" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                                                    {
                                                        style: {
                                                            margin: 2,
                                                            fontSize: "1.0rem",
                                                            paddingRight: 5
                                                        },
                                                        to: "/asset/DONATE"
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        maxWidth: 25,
                                                        replaceNoneToBts: false,
                                                        name: "DONATE"
                                                    }),
                                                    "DONATE"
                                                ),
                                                ".",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text4.t2" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                                                    {
                                                        style: {
                                                            margin: 2,
                                                            fontSize: "1.0rem",
                                                            paddingRight: 5
                                                        },
                                                        to: "/asset/DONATE"
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        maxWidth: 25,
                                                        replaceNoneToBts: false,
                                                        name: "DONATE"
                                                    }),
                                                    "DONATE"
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text4.t3" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "span",
                                                    { style: {
                                                            border: "1px solid #00a9e0",
                                                            padding: "4px 3px 3px 4px",
                                                            borderRadius: "3px",
                                                            cursor: "pointer"
                                                        } },
                                                    "DONATE"
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text4.t4" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text5.t1" }),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                                                    {
                                                        style: {
                                                            margin: 2,
                                                            fontSize: "1.0rem",
                                                            paddingRight: 5
                                                        },
                                                        to: "/asset/DONATE"
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        maxWidth: 25,
                                                        replaceNoneToBts: false,
                                                        name: "DONATE"
                                                    }),
                                                    "DONATE"
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text5.t2" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.text5.t3" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "h3",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.header" })
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "ol",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_1" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_2" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_3" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_4" })
                                                )
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            { className: "listing_button" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__["Button"],
                                                {
                                                    key: "send",
                                                    disabled: !this.state.ListingNotice1Informed,
                                                    onClick: this.state.ListingNotice1Informed ? this.onSubmitRequest.bind(this) : null
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.submit_request" })
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "h5",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                                type: "checkbox",
                                                defaultChecked: this.state.ListingNotice1Informed,
                                                onChange: this.onListingNotice1Informed.bind(this)
                                            }),
                                            " ",
                                            "-",
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.notice_informed" })
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "h3",
                                            null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.end" }),
                                            " ",
                                            RuDEX,
                                            "!"
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._getBalances();
        }
    }, {
        key: "_getBalances",
        value: function _getBalances() {
            var _this2 = this;

            var coins = Object(_branding__WEBPACK_IMPORTED_MODULE_5__["getListingCoins"])();
            this.setState({ coins: coins });
            coins.forEach(function (coin) {
                Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChain"])("getAsset", "BTS").then(function (assetInfo) {
                    bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__["Apis"].instance().db_api().exec("get_named_account_balances", [coin.account, [assetInfo.get("id")]]).then(function (res) {
                        var coins = _this2.state.coins;
                        var x = coins.find(function (i) {
                            return i.account === coin.account;
                        });
                        x.votes = res[0]["amount"] / Math.pow(10, assetInfo.get("precision"));
                        _this2.setState({ coins: coins });
                    });
                });
            });
        }
    }]);

    return ListingPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ListingPage);

/***/ }),

/***/ 3323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3324);
/* harmony import */ var _DonateSendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3327);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(734);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1895);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(562);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(607);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var CoinCardListing = function (_React$Component) {
    _inherits(CoinCardListing, _React$Component);

    function CoinCardListing(props) {
        _classCallCheck(this, CoinCardListing);

        var _this = _possibleConstructorReturn(this, (CoinCardListing.__proto__ || Object.getPrototypeOf(CoinCardListing)).call(this, props));

        _this.props.coin.votes = 0;

        _this.state = {
            key: _this.props.key,
            rank: _this.props.rank,

            coin: _this.props.coin
        };

        return _this;
    }

    _createClass(CoinCardListing, [{
        key: "_renderSendModal",
        value: function _renderSendModal(coin) {
            var _this2 = this;

            var from_name = "";
            try {
                this.props.account.get("name");
            } catch (e) {}

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DonateSendModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
                id: "send_modal_listing",
                refCallback: function refCallback(e) {
                    if (e) _this2.send_modal = e;
                },
                from_name: this.props.currentAccount ? this.props.currentAccount : this.props.account,
                to_name: coin.account ? coin.account : from_name,
                asset_id: "1.3.5588",
                ticker: coin.ticker
            });
        }
    }, {
        key: "triggerSend",
        value: function triggerSend(asset) {
            var _this3 = this;

            this.setState({ send_asset: asset }, function () {
                if (_this3.send_modal) _this3.send_modal.show();
            });
        }
    }, {
        key: "render",
        value: function render() {
            var coin = this.state.coin;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "listingTable__row" },
                this._renderSendModal(coin),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "listingAsset" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "listingAssetCard" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingTable__cell listingTableRank align-center" },
                            this.props.rank
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingTable__cell listingTableLogo" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                                className: "align-center",
                                style: { maxWidth: 40 },
                                src: "" + "coins-logo/" + this.props.coin.ticker.toLowerCase() + ".png",
                                alt: ""
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingTable__cell listingTableAssetName align-left nowrap" },
                            this.props.coin.name,
                            " (",
                            this.props.coin.ticker,
                            ")",
                            this.props.coin.soon === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                                content: "listing.table.coming_soon",
                                style: { float: "right", color: "gold" }
                            }) : ""
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "listingAssetInfo" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingAssetInfoData" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "listingTable__cell listingTableGoal" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "listingAssetInfoBlock" },
                                    "Goal:\xA0",
                                    " "
                                ),
                                this.props.coin.goal
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "listingTable__cell listingTableVotes" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "listingAssetInfoBlock" },
                                    "Votes:\xA0"
                                ),
                                this.props.coin.votes,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    { onClick: this.triggerSend.bind(this, "1.3.5588", coin) },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                                        name: "transfer",
                                        title: "icons.transfer",
                                        className: "icon-14px"
                                    }),
                                    "\xA0 Donate"
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "listingTable__cell listingTableStatus" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "listingAssetInfoBlock" },
                                    "Status:\xA0",
                                    " "
                                ),
                                this.props.coin.status === "collecting" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "listing.table.collecting" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "listing.table.done" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingTable__cell listingTableProgress" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DonutChart__WEBPACK_IMPORTED_MODULE_1__["DonutChart"], { votes: this.props.coin.votes_for_percent, goal: this.props.coin.goal })
                        )
                    )
                )
            );
        }
    }]);

    return CoinCardListing;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CoinCardListing = Object(alt_react__WEBPACK_IMPORTED_MODULE_5__["connect"])(CoinCardListing, {
    listenTo: function listenTo() {
        return [_stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"], _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
    },
    getProps: function getProps() {
        return {
            settings: _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().settings,
            currentAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().passwordAccount
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (CoinCardListing);

/***/ }),

/***/ 3324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return DonutChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3325);
/* harmony import */ var _DonutChart_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DonutChart_css__WEBPACK_IMPORTED_MODULE_1__);



var DonutChart = function DonutChart(props) {
    var percent = Math.round(props.votes / props.goal * 100);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        { className: "root" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "svg",
            { viewBox: "0 0 32 32", className: "chart" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
                className: "donut-hole",
                r: "16",
                cx: "16",
                cy: "16",
                fill: "none"
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
                className: "donut-ring",
                r: "16",
                cx: "16",
                cy: "16",
                fill: "none",
                stroke: "lightgray",
                strokeWidth: "8"
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
                className: "donut-segment",
                r: "16",
                cx: "16",
                cy: "16",
                fill: "none",
                stroke: "green",
                strokeWidth: "8",
                style: { strokeDasharray: percent + " 100" },
                strokeDashoffset: "0"
            })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            { className: "inside" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "percent" },
                percent + "%"
            )
        )
    );
};

/***/ }),

/***/ 3327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2133);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2132);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1895);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(429);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2135);
/* harmony import */ var _AccountSelectorListing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3328);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2146);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2155);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(594);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(607);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var DonateSendModal = function (_SendModal) {
    _inherits(DonateSendModal, _SendModal);

    function DonateSendModal(props) {
        _classCallCheck(this, DonateSendModal);

        return _possibleConstructorReturn(this, (DonateSendModal.__proto__ || Object.getPrototypeOf(DonateSendModal)).call(this, props));
    }

    _createClass(DonateSendModal, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.to_name !== this.state.to_name) {
                this.setState({
                    to_name: np.to_name ? np.to_name : "",
                    to_account: np.to_name ? bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAccount(np.to_name) : null
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                propose = _state.propose,
                from_account = _state.from_account,
                to_account = _state.to_account,
                asset = _state.asset,
                asset_id = _state.asset_id,
                propose_account = _state.propose_account,
                feeAmount = _state.feeAmount,
                amount = _state.amount,
                to_name = _state.to_name,
                from_name = _state.from_name,
                memo = _state.memo,
                balanceError = _state.balanceError,
                hidden = _state.hidden;

            var from_my_account = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].isMyAccount(from_account) || from_name === this.props.passwordAccount;
            var from_error = from_account && !from_my_account && !propose ? true : false;

            var _getAvailableAssets = this._getAvailableAssets(),
                asset_types = _getAvailableAssets.asset_types;

            var balance = null;

            if (from_account && from_account.get("balances") && !from_error) {
                var account_balances = from_account.get("balances").toJS();
                var _error = this.state.balanceError ? "has-error" : "";
                if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__["ChainStore"].getAsset(asset_types[0]);
                if (asset_types.length > 0) {
                    var current_asset_id = asset ? asset.get("id") : asset_types[0];

                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                className: _error,
                                style: {
                                    borderBottom: "#A09F9F 1px dotted",
                                    cursor: "pointer"
                                },
                                onClick: this._setTotal.bind(this, current_asset_id, account_balances[current_asset_id], feeAmount.getAmount({ real: true }), feeAmount.asset_id)
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                balance: account_balances[current_asset_id]
                            })
                        )
                    );
                } else {
                    balance = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: _error },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.errors.noFunds" })
                        )
                    );
                }
            }

            var propose_incomplete = propose && !propose_account;
            var amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
            var isAmountValid = amountValue && !Object(lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__["default"])(amountValue);
            var isSubmitNotValid = !from_account || !to_account || !isAmountValid || !asset || from_error || propose_incomplete || balanceError || from_account.get("id") == to_account.get("id");

            var tabIndex = this.props.tabIndex; // Continue tabIndex on props count

            return !this.state.open ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                    id: "send_modal_wrapper",
                    className: hidden || !this.state.open ? "hide" : ""
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Modal"],
                    {
                        visible: this.state.isModalVisible,
                        id: this.props.id,
                        overlay: true,
                        onCancel: this.hideModal,
                        footer: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Button"],
                            {
                                key: "send",
                                disabled: isSubmitNotValid,
                                onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
                            },
                            propose ? counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("propose") : counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("transfer.send")
                        ), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Button"],
                            {
                                key: "Cancel",
                                tabIndex: tabIndex++,
                                onClick: this.onClose
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "transfer.cancel"
                            })
                        )]
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block vertical no-overflow" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            {
                                className: "content-block",
                                style: { textAlign: "center", fontSize: "18px" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a
                            /*                                content={
                                !!isSubmitNotValid
                                    ? "listing.modal_header"
                                    : "listing.modal.need_buy_donate"
                            }*/
                            , { content: "listing.modal.header2",
                                wallet_name: Object(_branding__WEBPACK_IMPORTED_MODULE_13__["getWalletName"])()
                            }),
                            this.props.ticker
                        ),
                        this.state.open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Form"],
                            { className: "full-width-wrapper", layout: "vertical" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccountSelectorListing__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                label: "transfer.from",
                                accountName: from_name,
                                account: from_account,
                                onChange: this.fromChanged.bind(this),
                                onAccountChanged: this.onFromAccountChanged.bind(this),
                                typeahead: true,
                                tabIndex: tabIndex++,
                                locked: true,
                                noForm: true
                                //onAction={false}
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccountSelectorListing__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                label: "transfer.to",
                                accountName: to_name,
                                account: to_account,
                                onChange: this.toChanged.bind(this),
                                onAccountChanged: this.onToAccountChanged.bind(this),
                                typeahead: true,
                                tabIndex: tabIndex++,
                                locked: true,
                                noForm: true
                                //editable={false}
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                label: "transfer.amount",
                                amount: amount,
                                onChange: this.onAmountChanged.bind(this),
                                asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0]
                                //assets={asset_types}
                                , display_balance: balance,
                                tabIndex: tabIndex++,
                                allowNaN: true,
                                locked: true
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                account: from_account,
                                transaction: {
                                    type: "transfer",
                                    options: ["price_per_kbyte"],
                                    data: {
                                        type: "memo",
                                        content: memo
                                    }
                                },
                                onChange: this.onFeeChanged.bind(this),
                                tabIndex: tabIndex++
                            })
                        ) : null
                    )
                )
            );
        }
    }]);

    return DonateSendModal;
}(_Modal_SendModal__WEBPACK_IMPORTED_MODULE_2__["SendModal"]);

var DonateSendModalConnectWrapper = function (_React$Component) {
    _inherits(DonateSendModalConnectWrapper, _React$Component);

    function DonateSendModalConnectWrapper() {
        _classCallCheck(this, DonateSendModalConnectWrapper);

        return _possibleConstructorReturn(this, (DonateSendModalConnectWrapper.__proto__ || Object.getPrototypeOf(DonateSendModalConnectWrapper)).apply(this, arguments));
    }

    _createClass(DonateSendModalConnectWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DonateSendModal, _extends({}, this.props, { ref: this.props.refCallback }));
        }
    }]);

    return DonateSendModalConnectWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

DonateSendModalConnectWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_5__["connect"])(DonateSendModalConnectWrapper, {
    listenTo: function listenTo() {
        return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps(props) {
        return {
            currentAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().currentAccount,
            passwordAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().passwordAccount,
            tabIndex: props.tabIndex || 0
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (DonateSendModalConnectWrapper);

/***/ }),

/***/ 3328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1895);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2150);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(562);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(578);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(429);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2012);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2013);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1903);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(579);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(749);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2149);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var MAX_LOOKUP_ATTEMPTS = 5;
/*
 * @brief Allows the user to enter an account by name or #ID
 *
 * This component is designed to be stateless as possible.  It's primary responsbility is to
 * manage the layout of data and to filter the user input.
 *
 */

var AccountSelectorListing = function (_React$Component) {
    _inherits(AccountSelectorListing, _React$Component);

    function AccountSelectorListing(props) {
        _classCallCheck(this, AccountSelectorListing);

        var _this = _possibleConstructorReturn(this, (AccountSelectorListing.__proto__ || Object.getPrototypeOf(AccountSelectorListing)).call(this, props));

        _this.state = {
            accountIndex: [],
            locked: null
        };
        _this.timer = null;
        return _this;
    }

    _createClass(AccountSelectorListing, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                account = _props.account,
                accountName = _props.accountName;

            // Populate account search array, fetch only once

            if (accountName) {
                this._addThisToIndex(accountName);
            }
            this.props.myActiveAccounts.map(function (a) {
                _this2._addThisToIndex(a);
            });
            this.props.contacts.map(function (a) {
                _this2._addThisToIndex(a);
            });
            this._fetchAccounts();

            if (this.props.onAccountChanged && account) this.props.onAccountChanged(account);

            if (!this.props.typeahead && accountName) this.onInputChanged(accountName);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (this.props.focus && !!this.props.editable && !this.props.disabled) {
                this.refs.user_input.focus();
            }

            if (prevProps.account && prevProps.account !== this.props.account) {
                if (this.props.onAccountChanged) {
                    this.props.onAccountChanged(this.props.account);
                }
            }
        }
    }, {
        key: "_addToIndex",
        value: function _addToIndex(accountName) {
            var _this3 = this;

            var noDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (noDelay) {
                this._addThisToIndex(accountName);
                this._fetchAccounts();
            } else {
                clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                    _this3._addToIndex(accountName, true);
                }, 500);
            }
        }
    }, {
        key: "_addThisToIndex",
        value: function _addThisToIndex(accountName) {
            var accountIndex = this.state.accountIndex;


            if (!accountName) return;

            var inAccountList = accountIndex.find(function (a) {
                return a.name === accountName;
            });

            if (accountName && !inAccountList) {
                accountIndex.push({
                    name: accountName,
                    data: null,
                    attempts: 0
                });
            }
        }
    }, {
        key: "_getIndex",
        value: function _getIndex(name, index) {
            return index.findIndex(function (a) {
                return a.name === name;
            });
        }
    }, {
        key: "_getSearchArray",
        value: function _getSearchArray() {
            var accountIndex = this.state.accountIndex;

            // For all objects in search_array, query with FetchChainObjects
            // Update results for each object with returned data and remove from search_array
            // Update search_array for all remaining objects with increased attempts count
            // which is when account does not exists, but can also be if node failed to send results
            // back in time, so we query at least `MAX_LOOKUP_ATTEMPTS` times before we stop

            // Filter out what objects we still require data for

            var search_array = accountIndex.filter(function (search) {
                return !search.data && search.attempts < MAX_LOOKUP_ATTEMPTS ? search.name : null;
            }).map(function (search) {
                return search.name;
            });

            return search_array;
        }
    }, {
        key: "_fetchAccounts",
        value: function _fetchAccounts() {
            var _this4 = this;

            var accountIndex = this.state.accountIndex;


            var search_array = this._getSearchArray();

            if (search_array.length > 0) {
                if (false) {}
                Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["FetchChainObjects"])(bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainStore"].getAccount, search_array, 3000, {}).then(function (accounts) {
                    accounts.forEach(function (account) {
                        if (account) {
                            var objectIndex = _this4._getIndex(account.get("name"), accountIndex);

                            var result = _this4._populateAccountIndex(account);

                            if (result) {
                                accountIndex[objectIndex] = result;
                                search_array.splice(account.get("name"));
                            }
                        }
                    });

                    search_array.forEach(function (account_to_find) {
                        var objectIndex = _this4._getIndex(account_to_find, accountIndex);
                        accountIndex[objectIndex].attempts++;
                    });
                    _this4.setState({
                        accountIndex: accountIndex
                    });

                    // Run another fetch of accounts if data is still missing
                    var isDataMissing = _this4.state.accountIndex.find(function (a) {
                        return !a.data && a.attempts < MAX_LOOKUP_ATTEMPTS;
                    });

                    if (isDataMissing) {
                        setTimeout(function () {
                            _this4._fetchAccounts();
                        }, 500);
                    }
                });
            }
        }
    }, {
        key: "_populateAccountIndex",
        value: function _populateAccountIndex(accountResult) {
            var _props2 = this.props,
                myActiveAccounts = _props2.myActiveAccounts,
                contacts = _props2.contacts;

            // Should not happen, just failsafe

            if (!accountResult) return null;

            var accountName = accountResult.get("name");
            var accountStatus = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainStore"].getAccountMemberStatus(accountResult);
            var accountType = this.getInputType(accountName);

            var statusLabel = !common_account_utils__WEBPACK_IMPORTED_MODULE_12__["default"].isKnownScammer(accountName) ? counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("account.member." + accountStatus) : counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("account.member.suspected_scammer");

            var rightLabel = accountType === "name" ? "#" + accountResult.get("id").substring(4) : accountType === "id" ? accountResult.get("name") : accountType == "pubkey" && this.props.allowPubKey ? "Public Key" : null;

            return {
                name: accountName,
                attempts: 0,
                data: {
                    id: accountResult.get("id"),
                    name: accountName,
                    type: accountType,
                    status: accountStatus,
                    isOwnAccount: myActiveAccounts.has(accountName),
                    isContact: contacts.has(accountName),
                    isKnownScammer: common_account_utils__WEBPACK_IMPORTED_MODULE_12__["default"].isKnownScammer(accountName),
                    statusLabel: statusLabel,
                    rightLabel: rightLabel,
                    className: common_account_utils__WEBPACK_IMPORTED_MODULE_12__["default"].isKnownScammer(accountName) || !accountResult ? "negative" : null
                }
            };
        }

        // can be used in parent component: this.refs.account_selector.getAccount()

    }, {
        key: "getAccount",
        value: function getAccount() {
            return this.props.account;
        }
    }, {
        key: "getError",
        value: function getError() {
            var _props3 = this.props,
                account = _props3.account,
                accountName = _props3.accountName,
                error = _props3.error,
                typeahead = _props3.typeahead;


            var inputType = accountName ? this.getInputType(accountName) : null;

            if (!typeahead) {
                if (!account && accountName && inputType !== "pubkey") {
                    error = counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("account.errors.unknown");
                }
            } else {
                // Typeahead can't select an unknown account!
                // if (
                //     !(allowPubKey && inputType === "pubkey") &&
                //     !error &&
                //     accountName &&
                //     !account
                // )
                //     error = counterpart.translate("account.errors.unknown");
            }

            if (!error && account && !inputType) error = counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("account.errors.invalid");

            return error;
        }
    }, {
        key: "getInputType",
        value: function getInputType(value) {
            // OK
            if (!value) return null;
            if (value[0] === "#" && common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].is_object_id("1.2." + value.substring(1))) return "id";
            if (bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainValidation"].is_account_name(value, true)) return "name";
            if (this.props.allowPubKey && bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["PublicKey"].fromPublicKeyString(value)) return "pubkey";
            return null;
        }
    }, {
        key: "getVerifiedAccountName",
        value: function getVerifiedAccountName(e) {
            var allowUppercase = this.props.allowUppercase;


            var value = null;
            if (typeof e === "string") {
                value = e;
            } else if (e && e.target) {
                value = e.target.value.trim();
            } else {
                value = "";
            }

            if (!allowUppercase) value = value.toLowerCase();

            // If regex matches ^.*#/account/account-name/.*$, parse out account-name
            var _value = value.replace("#", "").match(/(?:\/account\/)(.*)/);
            if (_value) value = _value[1];

            return value;
        }
    }, {
        key: "_notifyOnChange",
        value: function _notifyOnChange(selectedAccountName, inputType) {
            var _this5 = this;

            var props = this.props;

            // Clear selected account when we have new input data if we require an active select

            if (inputType == "input" && this.props.typeahead && this.props.requireActiveSelect) {
                if (!!props.onAccountChanged) {
                    props.onAccountChanged(null);
                }
                if (!!props.onChange) {
                    props.onChange(null);
                }
            }

            var accountName = this.getVerifiedAccountName(selectedAccountName);

            // Synchronous onChange for input change
            if (!!props.onChange && (!!accountName || accountName === "")) {
                props.onChange(accountName);
            }

            // asynchronous onAccountChanged for checking on chain
            if (!!props.onAccountChanged) {
                Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["FetchChain"])("getAccount", accountName, undefined, _defineProperty({}, accountName, false)).then(function (account) {
                    if (!!account && (_this5.props.requireActiveSelect && inputType == "select" || !_this5.props.requireActiveSelect)) {
                        props.onAccountChanged(account);
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }
    }, {
        key: "onSelect",
        value: function onSelect(selectedAccountName) {
            this._notifyOnChange(selectedAccountName, "select");
        }
    }, {
        key: "onInputChanged",
        value: function onInputChanged(e) {
            this._addToIndex(this.getVerifiedAccountName(e));
            this._notifyOnChange(e, "input");
        }
    }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
            if (e.keyCode === 13 || e.keyCode === 9) {
                this.onAction(e);
            }
        }
    }, {
        key: "_onAddContact",
        value: function _onAddContact() {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__["default"].addAccountContact(this.props.accountName);
        }
    }, {
        key: "_onRemoveContact",
        value: function _onRemoveContact() {
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__["default"].removeAccountContact(this.props.accountName);
        }
    }, {
        key: "onAction",
        value: function onAction(e) {
            var _props4 = this.props,
                onAction = _props4.onAction,
                disableActionButton = _props4.disableActionButton,
                account = _props4.account,
                accountName = _props4.accountName;

            e.preventDefault();
            if (!this.getError() && onAction && !disableActionButton) {
                if (account) onAction(account);else if (this.getInputType(accountName) === "pubkey") onAction(accountName);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            var accountIndex = this.state.accountIndex;
            var _props5 = this.props,
                account = _props5.account,
                accountName = _props5.accountName,
                disableActionButton = _props5.disableActionButton;


            var searchInProgress = this.state.accountIndex.find(function (a) {
                return !a.data && a.attempts < MAX_LOOKUP_ATTEMPTS;
            });

            var lockedState = this.state.locked !== null ? this.state.locked : this.props.locked;

            var error = this.getError(),
                formContainer = void 0,
                selectedAccount = void 0,
                disabledAction = void 0,
                disabledInput = void 0,
                editableInput = void 0,
                linked_status = void 0;

            editableInput = !!lockedState ? false : this.props.editable != null ? this.props.editable : undefined;

            disabledInput = !!lockedState ? true : this.props.disabled != null ? this.props.disabled : undefined;

            // Selected Account
            if (account) {
                var objectIndex = this._getIndex(account.get("name"), accountIndex);

                selectedAccount = accountIndex && accountIndex[objectIndex] ? accountIndex[objectIndex].data : null;
            }

            disabledAction = !(account || selectedAccount && selectedAccount.type === "pubkey") || error || disableActionButton;

            if (selectedAccount && selectedAccount.isOwnAccount) {
                linked_status = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Tooltip"],
                    {
                        placement: "top",
                        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("tooltip.own_account")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "tooltip green" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "user" })
                    )
                );
            } else if (selectedAccount && selectedAccount.isKnownScammer) {
                linked_status = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Tooltip"],
                    {
                        placement: "top",
                        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("tooltip.scam_account")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "tooltip red" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "warning", theme: "filled" })
                    )
                );
            } else if (selectedAccount && selectedAccount.isContact) {
                linked_status = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Tooltip"],
                    {
                        placement: "top",
                        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("tooltip.follow_user"),
                        onClick: this._onRemoveContact.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "tooltip green" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "star", theme: "filled" })
                    )
                );
            } else if (selectedAccount) {
                linked_status = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Tooltip"],
                    {
                        placement: "top",
                        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("tooltip.follow_user_add"),
                        onClick: this._onAddContact.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "tooltip" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "star" })
                    )
                );
            }

            if (this.props.typeahead) {
                var optionsContainer = accountIndex.filter(function (account) {
                    // Filter accounts based on
                    // - Exclude without results (missing chain data at the moment)
                    // - Excluded accounts (by props)
                    // - Include users own accounts (isOwnAccount)
                    // - Include users contacts (isContact) unless it's a previously locked input
                    // - Include current input

                    if (!account.data) {
                        return null;
                    }
                    if (_this6.props.excludeAccounts.indexOf(account.id) !== -1) {
                        return null;
                    }
                    if (account.data.isOwnAccount || !_this6.props.locked && account.data.isContact || accountName && account.data.name === accountName) {
                        return account;
                    }
                }).sort(function (a, b) {
                    if (a.data.isOwnAccount < b.data.isOwnAccount) {
                        if (a.data.name > b.data.name) {
                            return 1;
                        } else {
                            return -1;
                        }
                    } else {
                        return -1;
                    }
                }).map(function (account) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Select"].Option,
                        {
                            key: account.data.id,
                            value: account.data.name,
                            disabled: account.data.disabled ? true : undefined
                        },
                        account.data.isOwnAccount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "user" }) : null,
                        account.data.isContact ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "star" }) : null,
                        account.data.isKnownScammer ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "warning" }) : null,
                        "\xA0",
                        account.data.name,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { style: { float: "right" } },
                            account.data.statusLabel
                        )
                    );
                });

                formContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Select"],
                    {
                        showSearch: true,
                        optionLabelProp: "value",
                        onSelect: this.onSelect.bind(this),
                        onSearch: this.onInputChanged.bind(this),
                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("account.search"),
                        notFoundContent: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("global.not_found"),
                        value: selectedAccount ? selectedAccount.name : null,
                        disabled: disabledInput ? true : undefined
                    },
                    optionsContainer
                );
            } else {
                formContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Input"], {
                    style: {
                        textTransform: selectedAccount && selectedAccount.type === "pubkey" ? null : "lowercase",
                        fontVariant: "initial"
                    },
                    name: "username",
                    id: "username",
                    autoComplete: !!this.props.editable ? "username" : undefined,
                    type: "text",
                    value: this.props.accountName || "",
                    placeholder: this.props.placeholder || counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("account.name"),
                    disabled: this.props.disabled ? true : undefined,
                    ref: "user_input",
                    onChange: this.onInputChanged.bind(this),
                    onKeyDown: this.onKeyDown.bind(this),
                    tabIndex: !this.props.editable || !!this.props.disabled ? -1 : this.props.tabIndex,
                    editable: !!editableInput ? editableInput.toString() : undefined,
                    readOnly: !!editableInput ? (!editableInput).toString() : undefined
                });
            }

            var accountImageContainer = this.props.hideImage ? null : selectedAccount && selectedAccount.accountType === "pubkey" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "account-image" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], { name: "key", title: "icons.key", size: "4x" })
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
                size: {
                    height: this.props.size || 33,
                    width: this.props.size || 33
                },
                account: selectedAccount ? selectedAccount.name : null,
                custom_image: null
            });

            var lockedStateContainer = !lockedState ? null : "";

            var rightLabelContainer = !this.props.label || !selectedAccount ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "header-area" + (this.props.hideImage ? " no-margin" : "")
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("right-label", selectedAccount.isContact || selectedAccount.isOwnAccount ? "positive" : null, selectedAccount.isKnownScammer ? "negative" : null),
                        style: { marginTop: -30 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { style: { paddingRight: "0.5rem" } },
                        selectedAccount.rightLabel,
                        "\xA0",
                        selectedAccount.displayText
                    ),
                    linked_status
                )
            );

            var FormWrapper = this.props.noForm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment : bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Form"];
            var formWrapperProps = this.props.noForm ? {} : {
                className: "full-width",
                layout: "vertical",
                style: this.props.style
            };

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Tooltip"],
                {
                    className: "input-area",
                    title: this.props.tooltip,
                    mouseEnterDelay: 0.5
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    FormWrapper,
                    formWrapperProps,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Form"].Item,
                        {
                            label: this.props.label ? counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate(this.props.label) : "",
                            validateStatus: error ? "error" : null,
                            help: error ? error : null
                        },
                        rightLabelContainer,
                        this.props.useHR && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "inline-label input-wrapper" },
                            accountImageContainer,
                            formContainer,
                            searchInProgress ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Icon"], { type: "loading", style: { padding: 10 } }) : null,
                            lockedStateContainer,
                            this.props.children,
                            this.props.onAction ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Tooltip"],
                                {
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("tooltip.required_input", {
                                        type: counterpart__WEBPACK_IMPORTED_MODULE_10___default.a.translate("global.field_type.account")
                                    })
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__["Button"],
                                    {
                                        type: "primary",
                                        disabled: disabledAction,
                                        onClick: this.onAction.bind(this)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                        content: this.props.action_label
                                    })
                                )
                            ) : null
                        )
                    )
                )
            );
        }
    }]);

    return AccountSelectorListing;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountSelectorListing.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string, // a translation key for the label
    error: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.element, // the error message override
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string, // the placeholder text to be displayed when there is no user_input
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func, // a method to be called any time user input changes
    onAccountChanged: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func, // a method to be called when existing account is selected
    onAction: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func, // a method called when Add button is clicked
    accountName: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string, // the current value of the account selector, the string the user enters
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAccount, // account object retrieved via BindToChainState decorator (not input)
    tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.number, // tabindex property to be passed to input tag
    disableActionButton: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool, // use it if you need to disable action button,
    allowUppercase: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool, // use it if you need to allow uppercase letters
    typeahead: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
    excludeAccounts: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.array, // array of accounts to exclude from the typeahead
    focus: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
    editable: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
    locked: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
    requireActiveSelect: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool,
    noForm: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.bool
};
AccountSelectorListing.defaultProps = {
    autosubscribe: false,
    excludeAccounts: [],
    disabled: null,
    editable: null,
    locked: false,
    requireActiveSelect: true, // Should not be set to false, required for fallback
    noForm: false
};


AccountSelectorListing = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(AccountSelectorListing);

AccountSelectorListing = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(AccountSelectorListing, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
    },
    getProps: function getProps() {
        return {
            myActiveAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().myActiveAccounts,
            contacts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().accountContacts
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (AccountSelectorListing);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy4xNmU4YjYzODk5N2JmMGE5YTEzMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0xpc3RpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Db2luQ2FyZExpc3RpbmcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbnV0Q2hhcnQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbmF0ZVNlbmRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvQWNjb3VudFNlbGVjdG9yTGlzdGluZy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9MaXN0aW5nUGFnZS5jc3NcIjtcblxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7RmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmltcG9ydCBDb2luQ2FyZExpc3RpbmcgZnJvbSBcIi4vQ29pbkNhcmRMaXN0aW5nXCI7XG5pbXBvcnQge2dldExpc3RpbmdDb2luc30gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY2xhc3MgTGlzdGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBMaXN0aW5nTm90aWNlMUluZm9ybWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvaW5zOiBbXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdFJlcXVlc3QoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBudWxsfSk7XG4gICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ29vLmdsL2Zvcm1zL1JabENBdmJ0QkowNzdHNzYyXCI7XG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9nb28uZ2wvZm9ybXMvUlpsQ0F2YnRCSjA3N0c3NjJcIiwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgb25MaXN0aW5nTm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIExpc3RpbmdOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBSdURFWCA9ICg8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+UnVERVg8L3NwYW4+KTtcbiAgICAgICAgbGV0IERPTkFURSA9IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0bz17XCIvYXNzZXQvRE9OQVRFXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAvPkRPTkFURVxuICAgICAgICAgICAgPC9MaW5rPik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuXG4gICAgICAgICAgICAgICAgey8qVGFicyovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLWNvbnRhaW5lciBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9XCJwZXJtaXNzaW9uc1RhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgYm9yZGVyZWQtaGVhZGVyIGNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q2xhc3M9XCJwYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBET05BVEUgUFJPR1JFU1MqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImxpc3RpbmcuZG9uYXRlX3Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiIHRhYkluZGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCIgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC11cC0xIG1lZGl1bS11cC0xIGxhcmdlLXVwLTEgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvaW5zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiBcIjEwcHhcIn19PjxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImxpc3RpbmcubG9hZGluZ1wiLz57XCIgXCJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29udGVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwibGlzdGluZy5hZGRfY29pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhvcml6b250YWxcIiB0YWJJbmRleD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGhlbHAtY29udGVudC1sYXlvdXRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxoMj7Qm9C40YHRgtC40L3QsyDRgtC+0LrQtdC90L7QsiDQvdCwIHtSdURFWH0g0L7RgtC60YDRi9GCINC00LvRjyDQstGB0LXRhSDQttC10LvQsNGO0YnQuNGFITwvaDI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj48VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLmhlYWRlclwiLz48L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQxXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0MlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0My50MVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDMudDJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7X19CQVNFX1VSTF9ffW1hcmtldC9ET05BVEVfUlVERVguQlRDYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDMuZ2V0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogMiwgZm9udFNpemU6IFwiMS4wcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcIi9tYXJrZXQvRE9OQVRFX1JVREVYLkJUQ1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDMuZ2V0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NC50MVwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcIi9hc3NldC9ET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+RE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQyXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1wiL2Fzc2V0L0RPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5ET05BVEVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NC50M1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzAwYTllMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4IDNweCAzcHggNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQ0XCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDUudDFcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvYXNzZXQvRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPkRPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ1LnQyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ1LnQzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMuaGVhZGVyXCIvPjwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8xXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV80XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImxpc3RpbmdfYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0UmVxdWVzdC5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnN1Ym1pdF9yZXF1ZXN0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuTGlzdGluZ05vdGljZTFJbmZvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MaXN0aW5nTm90aWNlMUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3Rpbmcubm90aWNlX2luZm9ybWVkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLmVuZFwiLz4ge1J1REVYfSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldEJhbGFuY2VzKCk7XG4gICAgfVxuXG4gICAgX2dldEJhbGFuY2VzKCkge1xuICAgICAgICBjb25zdCBjb2lucyA9IGdldExpc3RpbmdDb2lucygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2luczogY29pbnN9KTtcbiAgICAgICAgY29pbnMuZm9yRWFjaChjb2luID0+IHtcbiAgICAgICAgICAgIEZldGNoQ2hhaW4oXCJnZXRBc3NldFwiLCBcIkJUU1wiKS50aGVuKGFzc2V0SW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgQXBpcy5pbnN0YW5jZSgpLmRiX2FwaSgpLmV4ZWMoXCJnZXRfbmFtZWRfYWNjb3VudF9iYWxhbmNlc1wiLCBbY29pbi5hY2NvdW50LCBbYXNzZXRJbmZvLmdldChcImlkXCIpXV0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29pbnMgPSB0aGlzLnN0YXRlLmNvaW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjb2lucy5maW5kKGkgPT4gaS5hY2NvdW50ID09PSBjb2luLmFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeC52b3RlcyA9IHJlc1swXVtcImFtb3VudFwiXSAvIE1hdGgucG93KDEwLCBhc3NldEluZm8uZ2V0KFwicHJlY2lzaW9uXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvaW5zfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcIi9tYXJrZXQvRE9OQVRFX1JVREVYLkJUQ1wifVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLmdldF9kb25hdGVfdG9rZW5zXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogMiwgZm9udFNpemU6IFwiMS4wcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5ET05BVEVcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRva2VuXCIvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucmFua1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlTG9nb1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUFzc2V0TmFtZSBhbGlnbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5hc3NldF9uYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmdvYWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlR29hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmRvbmF0ZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuc3RhdHVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucHJvZ3Jlc3NcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29pbnNMaXN0KCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGdldENvaW5zTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHtjb2luc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgc29ydGVkQ29pbnMgPSBjb2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYi52b3RlcyAtIGEudm90ZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkQ29pbnMubWFwKChjb2luLCBpKSA9PiB7XG4gICAgICAgICAgICBjb2luLnZvdGVzX2Zvcl9wZXJjZW50ID0gY29pbi52b3RlcyA8IGNvaW4uZ29hbCA/IGNvaW4udm90ZXMgOiBjb2luLmdvYWw7XG4gICAgICAgICAgICBjb2luLnN0YXR1cyA9IGNvaW4udm90ZXMgPCBjb2luLmdvYWwgPyBcImNvbGxlY3RpbmdcIiA6IFwiZG9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29pbkNhcmRMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgcmFuaz17aSArIDF9XG4gICAgICAgICAgICAgICAgICAgIGNvaW49e2NvaW59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge0RvbnV0Q2hhcnR9IGZyb20gXCIuL0RvbnV0Q2hhcnRcIjtcbmltcG9ydCBTZW5kTW9kYWwgZnJvbSBcIi4vRG9uYXRlU2VuZE1vZGFsXCI7XG5pbXBvcnQge0ljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7QXNzZXR9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uL01hcmtldENsYXNzZXNcIjtcblxuY2xhc3MgQ29pbkNhcmRMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnByb3BzLmNvaW4udm90ZXMgPSAwO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBrZXk6IHRoaXMucHJvcHMua2V5LFxuICAgICAgICAgICAgcmFuazogdGhpcy5wcm9wcy5yYW5rLFxuXG4gICAgICAgICAgICBjb2luOiB0aGlzLnByb3BzLmNvaW5cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIF9yZW5kZXJTZW5kTW9kYWwoY29pbikge1xuICAgICAgICBsZXQgZnJvbV9uYW1lID0gXCJcIjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlbmRNb2RhbFxuICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF9saXN0aW5nXCJcbiAgICAgICAgICAgICAgICByZWZDYWxsYmFjaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB0aGlzLnNlbmRfbW9kYWwgPSBlO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZnJvbV9uYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50ID8gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCA6IHRoaXMucHJvcHMuYWNjb3VudH1cbiAgICAgICAgICAgICAgICB0b19uYW1lPXtjb2luLmFjY291bnQgPyBjb2luLmFjY291bnQgOiBmcm9tX25hbWV9XG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ9e1wiMS4zLjU1ODhcIn1cbiAgICAgICAgICAgICAgICB0aWNrZXI9e2NvaW4udGlja2VyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyU2VuZChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZW5kX2Fzc2V0OiBhc3NldH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbmRfbW9kYWwpIHRoaXMuc2VuZF9tb2RhbC5zaG93KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NvaW59ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX3Jvd1wiPlxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJTZW5kTW9kYWwoY29pbil9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVSYW5rIGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJhbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDQwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199Y29pbnMtbG9nby8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2luLnRpY2tlci50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVBc3NldE5hbWUgYWxpZ24tbGVmdCBub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb2luLm5hbWV9ICh7dGhpcy5wcm9wcy5jb2luLnRpY2tlcn0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb2luLnNvb24gPT09IHRydWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImxpc3RpbmcudGFibGUuY29taW5nX3Nvb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBjb2xvcjogXCJnb2xkXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUdvYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWw6Jm5ic3A7e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29pbi5nb2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlVm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdGVzOiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29pbi52b3Rlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy50cmlnZ2VyU2VuZC5iaW5kKHRoaXMsIFwiMS4zLjU1ODhcIiwgY29pbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgRG9uYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9CbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzOiZuYnNwO3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvaW4uc3RhdHVzID09PSBcImNvbGxlY3RpbmdcIiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5jb2xsZWN0aW5nXCIvPikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuZG9uZVwiLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs8RG9udXRDaGFydCB2b3Rlcz17dGhpcy5wcm9wcy5jb2luLnZvdGVzX2Zvcl9wZXJjZW50fSBnb2FsPXt0aGlzLnByb3BzLmNvaW4uZ29hbH0vPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5Db2luQ2FyZExpc3RpbmcgPSBjb25uZWN0KFxuICAgIENvaW5DYXJkTGlzdGluZyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncyxcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxuICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvaW5DYXJkTGlzdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vRG9udXRDaGFydC5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IERvbnV0Q2hhcnQgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoKHByb3BzLnZvdGVzIC8gcHJvcHMuZ29hbCkgKiAxMDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9udXQtaG9sZVwiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb251dC1yaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImxpZ2h0Z3JheVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0LXNlZ21lbnRcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZURhc2hhcnJheTogYCR7cGVyY2VudH0gMTAwYH19XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ9XCIwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2lkZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyY2VudFwiPntwZXJjZW50ICsgXCIlXCJ9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1NlbmRNb2RhbH0gZnJvbSBcIi4uL01vZGFsL1NlbmRNb2RhbFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xuaW1wb3J0IEFjY291bnRTZWxlY3Rvckxpc3RpbmcgZnJvbSBcIi4vQWNjb3VudFNlbGVjdG9yTGlzdGluZ1wiO1xuaW1wb3J0IEZlZUFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtpc05hTn0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtGb3JtLCBNb2RhbCwgQnV0dG9uLCBUb29sdGlwLCBJbnB1dH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtnZXRXYWxsZXROYW1lfSBmcm9tIFwiLi4vLi4vYnJhbmRpbmdcIjtcbmltcG9ydCB7QXNzZXR9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uL01hcmtldENsYXNzZXNcIjtcblxuY2xhc3MgRG9uYXRlU2VuZE1vZGFsIGV4dGVuZHMgU2VuZE1vZGFsIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnAudG9fbmFtZSAhPT0gdGhpcy5zdGF0ZS50b19uYW1lXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9fbmFtZTogbnAudG9fbmFtZSA/IG5wLnRvX25hbWUgOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IG5wLnRvX25hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldEFjY291bnQobnAudG9fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwcm9wb3NlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgYXNzZXRfaWQsXG4gICAgICAgICAgICBwcm9wb3NlX2FjY291bnQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b19uYW1lLFxuICAgICAgICAgICAgZnJvbV9uYW1lLFxuICAgICAgICAgICAgbWVtbyxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvcixcbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGZyb21fbXlfYWNjb3VudCA9XG4gICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoZnJvbV9hY2NvdW50KSB8fFxuICAgICAgICAgICAgZnJvbV9uYW1lID09PSB0aGlzLnByb3BzLnBhc3N3b3JkQWNjb3VudDtcbiAgICAgICAgbGV0IGZyb21fZXJyb3IgPVxuICAgICAgICAgICAgZnJvbV9hY2NvdW50ICYmICFmcm9tX215X2FjY291bnQgJiYgIXByb3Bvc2UgPyB0cnVlIDogZmFsc2U7XG5cblxuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikgJiYgIWZyb21fZXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgICAgIGxldCBfZXJyb3IgPSB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IGFzc2V0ID8gYXNzZXQuZ2V0KFwiaWRcIikgOiBhc3NldF90eXBlc1swXTtcblxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0VG90YWwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtfZXJyb3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0Z1bmRzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9wb3NlX2luY29tcGxldGUgPSBwcm9wb3NlICYmICFwcm9wb3NlX2FjY291bnQ7XG4gICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGFtb3VudCwgLywvZywgXCJcIilcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaXNBbW91bnRWYWxpZCA9IGFtb3VudFZhbHVlICYmICFpc05hTihhbW91bnRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGlzU3VibWl0Tm90VmFsaWQgPVxuICAgICAgICAgICAgIWZyb21fYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcbiAgICAgICAgICAgICFpc0Ftb3VudFZhbGlkIHx8XG4gICAgICAgICAgICAhYXNzZXQgfHxcbiAgICAgICAgICAgIGZyb21fZXJyb3IgfHxcbiAgICAgICAgICAgIHByb3Bvc2VfaW5jb21wbGV0ZSB8fFxuICAgICAgICAgICAgYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIikgPT0gdG9fYWNjb3VudC5nZXQoXCJpZFwiKTtcblxuICAgICAgICBsZXQgdGFiSW5kZXggPSB0aGlzLnByb3BzLnRhYkluZGV4OyAvLyBDb250aW51ZSB0YWJJbmRleCBvbiBwcm9wcyBjb3VudFxuXG4gICAgICAgIHJldHVybiAhdGhpcy5zdGF0ZS5vcGVuID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBpZD1cInNlbmRfbW9kYWxfd3JhcHBlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtoaWRkZW4gfHwgIXRoaXMuc3RhdGUub3BlbiA/IFwiaGlkZVwiIDogXCJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc01vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3Bvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJvcG9zZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2Zlci5zZW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogXCIxOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpc3RpbmcubW9kYWxfaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibGlzdGluZy5tb2RhbC5uZWVkX2J1eV9kb25hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJsaXN0aW5nLm1vZGFsLmhlYWRlcjJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0X25hbWU9e2dldFdhbGxldE5hbWUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpY2tlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmdWxsLXdpZHRoLXdyYXBwZXJcIiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7PEFjY291bnRTZWxlY3Rvckxpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnJvbV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZnJvbUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Gcm9tQWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25BY3Rpb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezxBY2NvdW50U2VsZWN0b3JMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXt0b19uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dG9fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vblRvQWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQW1vdW50Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3R5cGVzLmxlbmd0aCA+IDAgJiYgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X3R5cGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Fzc2V0cz17YXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBEb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPERvbmF0ZVNlbmRNb2RhbCB7Li4udGhpcy5wcm9wc30gcmVmPXt0aGlzLnByb3BzLnJlZkNhbGxiYWNrfS8+O1xuICAgIH1cbn1cblxuRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIgPSBjb25uZWN0KFxuICAgIERvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICB0YWJJbmRleDogcHJvcHMudGFiSW5kZXggfHwgMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gICAgQ2hhaW5TdG9yZSxcbiAgICBQdWJsaWNLZXksXG4gICAgQ2hhaW5WYWxpZGF0aW9uLFxuICAgIEZldGNoQ2hhaW4sXG4gICAgRmV0Y2hDaGFpbk9iamVjdHNcbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgYWNjb3VudFV0aWxzIGZyb20gXCJjb21tb24vYWNjb3VudF91dGlsc1wiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBUb29sdGlwLFxuICAgIEJ1dHRvbixcbiAgICBJbnB1dCxcbiAgICBJY29uIGFzIEFudEljb24sXG4gICAgU2VsZWN0LFxuICAgIEZvcm1cbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuXG5jb25zdCBNQVhfTE9PS1VQX0FUVEVNUFRTID0gNTtcbi8qXG4gKiBAYnJpZWYgQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGFuIGFjY291bnQgYnkgbmFtZSBvciAjSURcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBkZXNpZ25lZCB0byBiZSBzdGF0ZWxlc3MgYXMgcG9zc2libGUuICBJdCdzIHByaW1hcnkgcmVzcG9uc2JpbGl0eSBpcyB0b1xuICogbWFuYWdlIHRoZSBsYXlvdXQgb2YgZGF0YSBhbmQgdG8gZmlsdGVyIHRoZSB1c2VyIGlucHV0LlxuICpcbiAqL1xuXG5jbGFzcyBBY2NvdW50U2VsZWN0b3JMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZywgLy8gYSB0cmFuc2xhdGlvbiBrZXkgZm9yIHRoZSBsYWJlbFxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLmVsZW1lbnQsIC8vIHRoZSBlcnJvciBtZXNzYWdlIG92ZXJyaWRlXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgcGxhY2Vob2xkZXIgdGV4dCB0byBiZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBpcyBubyB1c2VyX2lucHV0XG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIGFueSB0aW1lIHVzZXIgaW5wdXQgY2hhbmdlc1xuICAgICAgICBvbkFjY291bnRDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gZXhpc3RpbmcgYWNjb3VudCBpcyBzZWxlY3RlZFxuICAgICAgICBvbkFjdGlvbjogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIGNhbGxlZCB3aGVuIEFkZCBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICBhY2NvdW50TmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGFjY291bnQgc2VsZWN0b3IsIHRoZSBzdHJpbmcgdGhlIHVzZXIgZW50ZXJzXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LCAvLyBhY2NvdW50IG9iamVjdCByZXRyaWV2ZWQgdmlhIEJpbmRUb0NoYWluU3RhdGUgZGVjb3JhdG9yIChub3QgaW5wdXQpXG4gICAgICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLCAvLyB0YWJpbmRleCBwcm9wZXJ0eSB0byBiZSBwYXNzZWQgdG8gaW5wdXQgdGFnXG4gICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b246IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgaXQgaWYgeW91IG5lZWQgdG8gZGlzYWJsZSBhY3Rpb24gYnV0dG9uLFxuICAgICAgICBhbGxvd1VwcGVyY2FzZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSBpdCBpZiB5b3UgbmVlZCB0byBhbGxvdyB1cHBlcmNhc2UgbGV0dGVyc1xuICAgICAgICB0eXBlYWhlYWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBleGNsdWRlQWNjb3VudHM6IFByb3BUeXBlcy5hcnJheSwgLy8gYXJyYXkgb2YgYWNjb3VudHMgdG8gZXhjbHVkZSBmcm9tIHRoZSB0eXBlYWhlYWRcbiAgICAgICAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGVkaXRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbG9ja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcmVxdWlyZUFjdGl2ZVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5vRm9ybTogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVBY2NvdW50czogW10sXG4gICAgICAgIGRpc2FibGVkOiBudWxsLFxuICAgICAgICBlZGl0YWJsZTogbnVsbCxcbiAgICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgcmVxdWlyZUFjdGl2ZVNlbGVjdDogdHJ1ZSwgLy8gU2hvdWxkIG5vdCBiZSBzZXQgdG8gZmFsc2UsIHJlcXVpcmVkIGZvciBmYWxsYmFja1xuICAgICAgICBub0Zvcm06IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjY291bnRJbmRleDogW10sXG4gICAgICAgICAgICBsb2NrZWQ6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBQb3B1bGF0ZSBhY2NvdW50IHNlYXJjaCBhcnJheSwgZmV0Y2ggb25seSBvbmNlXG4gICAgICAgIGlmIChhY2NvdW50TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMubXlBY3RpdmVBY2NvdW50cy5tYXAoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuY29udGFjdHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZCAmJiBhY2NvdW50KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKGFjY291bnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy50eXBlYWhlYWQgJiYgYWNjb3VudE5hbWUpXG4gICAgICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2VkKGFjY291bnROYW1lKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZvY3VzICYmICEhdGhpcy5wcm9wcy5lZGl0YWJsZSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLnVzZXJfaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2UHJvcHMuYWNjb3VudCAmJiBwcmV2UHJvcHMuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKHRoaXMucHJvcHMuYWNjb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYWRkVG9JbmRleChhY2NvdW50TmFtZSwgbm9EZWxheSA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChub0RlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhY2NvdW50TmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkVG9JbmRleChhY2NvdW50TmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2FkZFRoaXNUb0luZGV4KGFjY291bnROYW1lKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFhY2NvdW50TmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbkFjY291bnRMaXN0ID0gYWNjb3VudEluZGV4LmZpbmQoYSA9PiBhLm5hbWUgPT09IGFjY291bnROYW1lKTtcblxuICAgICAgICBpZiAoYWNjb3VudE5hbWUgJiYgIWluQWNjb3VudExpc3QpIHtcbiAgICAgICAgICAgIGFjY291bnRJbmRleC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIGF0dGVtcHRzOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRJbmRleChuYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXguZmluZEluZGV4KGEgPT4gYS5uYW1lID09PSBuYW1lKTtcbiAgICB9XG5cbiAgICBfZ2V0U2VhcmNoQXJyYXkoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgLy8gRm9yIGFsbCBvYmplY3RzIGluIHNlYXJjaF9hcnJheSwgcXVlcnkgd2l0aCBGZXRjaENoYWluT2JqZWN0c1xuICAgICAgICAvLyBVcGRhdGUgcmVzdWx0cyBmb3IgZWFjaCBvYmplY3Qgd2l0aCByZXR1cm5lZCBkYXRhIGFuZCByZW1vdmUgZnJvbSBzZWFyY2hfYXJyYXlcbiAgICAgICAgLy8gVXBkYXRlIHNlYXJjaF9hcnJheSBmb3IgYWxsIHJlbWFpbmluZyBvYmplY3RzIHdpdGggaW5jcmVhc2VkIGF0dGVtcHRzIGNvdW50XG4gICAgICAgIC8vIHdoaWNoIGlzIHdoZW4gYWNjb3VudCBkb2VzIG5vdCBleGlzdHMsIGJ1dCBjYW4gYWxzbyBiZSBpZiBub2RlIGZhaWxlZCB0byBzZW5kIHJlc3VsdHNcbiAgICAgICAgLy8gYmFjayBpbiB0aW1lLCBzbyB3ZSBxdWVyeSBhdCBsZWFzdCBgTUFYX0xPT0tVUF9BVFRFTVBUU2AgdGltZXMgYmVmb3JlIHdlIHN0b3BcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IHdoYXQgb2JqZWN0cyB3ZSBzdGlsbCByZXF1aXJlIGRhdGEgZm9yXG4gICAgICAgIGxldCBzZWFyY2hfYXJyYXkgPSBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgIC5maWx0ZXIoc2VhcmNoID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXNlYXJjaC5kYXRhICYmIHNlYXJjaC5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgICAgICAgICAgICAgPyBzZWFyY2gubmFtZVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChzZWFyY2ggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2gubmFtZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWFyY2hfYXJyYXk7XG4gICAgfVxuXG4gICAgX2ZldGNoQWNjb3VudHMoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHNlYXJjaF9hcnJheSA9IHRoaXMuX2dldFNlYXJjaEFycmF5KCk7XG5cbiAgICAgICAgaWYgKHNlYXJjaF9hcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoX19ERVZfXylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvb2tlZCBmb3IgXCIgKyBzZWFyY2hfYXJyYXkubGVuZ3RoICsgXCIgYWNjb3VudHNcIik7XG4gICAgICAgICAgICBGZXRjaENoYWluT2JqZWN0cyhcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQsXG4gICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LFxuICAgICAgICAgICAgICAgIDMwMDAsXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICkudGhlbihhY2NvdW50cyA9PiB7XG4gICAgICAgICAgICAgICAgYWNjb3VudHMuZm9yRWFjaChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmplY3RJbmRleCA9IHRoaXMuX2dldEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9wb3B1bGF0ZUFjY291bnRJbmRleChhY2NvdW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFtvYmplY3RJbmRleF0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LnNwbGljZShhY2NvdW50LmdldChcIm5hbWVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZWFyY2hfYXJyYXkuZm9yRWFjaChhY2NvdW50X3RvX2ZpbmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0SW5kZXggPSB0aGlzLl9nZXRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfdG9fZmluZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdLmF0dGVtcHRzKys7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleDogYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSdW4gYW5vdGhlciBmZXRjaCBvZiBhY2NvdW50cyBpZiBkYXRhIGlzIHN0aWxsIG1pc3NpbmdcbiAgICAgICAgICAgICAgICBsZXQgaXNEYXRhTWlzc2luZyA9IHRoaXMuc3RhdGUuYWNjb3VudEluZGV4LmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGEgPT4gIWEuZGF0YSAmJiBhLmF0dGVtcHRzIDwgTUFYX0xPT0tVUF9BVFRFTVBUU1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNEYXRhTWlzc2luZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZldGNoQWNjb3VudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZUFjY291bnRJbmRleChhY2NvdW50UmVzdWx0KSB7XG4gICAgICAgIGxldCB7bXlBY3RpdmVBY2NvdW50cywgY29udGFjdHN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlbiwganVzdCBmYWlsc2FmZVxuICAgICAgICBpZiAoIWFjY291bnRSZXN1bHQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGxldCBhY2NvdW50TmFtZSA9IGFjY291bnRSZXN1bHQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgbGV0IGFjY291bnRTdGF0dXMgPSBDaGFpblN0b3JlLmdldEFjY291bnRNZW1iZXJTdGF0dXMoYWNjb3VudFJlc3VsdCk7XG4gICAgICAgIGxldCBhY2NvdW50VHlwZSA9IHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKTtcblxuICAgICAgICBsZXQgc3RhdHVzTGFiZWwgPSAhYWNjb3VudFV0aWxzLmlzS25vd25TY2FtbWVyKGFjY291bnROYW1lKVxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50Lm1lbWJlci5cIiArIGFjY291bnRTdGF0dXMpXG4gICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubWVtYmVyLnN1c3BlY3RlZF9zY2FtbWVyXCIpO1xuXG4gICAgICAgIGxldCByaWdodExhYmVsID1cbiAgICAgICAgICAgIGFjY291bnRUeXBlID09PSBcIm5hbWVcIlxuICAgICAgICAgICAgICAgID8gXCIjXCIgKyBhY2NvdW50UmVzdWx0LmdldChcImlkXCIpLnN1YnN0cmluZyg0KVxuICAgICAgICAgICAgICAgIDogYWNjb3VudFR5cGUgPT09IFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRSZXN1bHQuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICA6IGFjY291bnRUeXBlID09IFwicHVia2V5XCIgJiYgdGhpcy5wcm9wcy5hbGxvd1B1YktleVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgIGF0dGVtcHRzOiAwLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiBhY2NvdW50UmVzdWx0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGFjY291bnRUeXBlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogYWNjb3VudFN0YXR1cyxcbiAgICAgICAgICAgICAgICBpc093bkFjY291bnQ6IG15QWN0aXZlQWNjb3VudHMuaGFzKGFjY291bnROYW1lKSxcbiAgICAgICAgICAgICAgICBpc0NvbnRhY3Q6IGNvbnRhY3RzLmhhcyhhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgaXNLbm93blNjYW1tZXI6IGFjY291bnRVdGlscy5pc0tub3duU2NhbW1lcihhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgc3RhdHVzTGFiZWw6IHN0YXR1c0xhYmVsLFxuICAgICAgICAgICAgICAgIHJpZ2h0TGFiZWw6IHJpZ2h0TGFiZWwsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOlxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50VXRpbHMuaXNLbm93blNjYW1tZXIoYWNjb3VudE5hbWUpIHx8ICFhY2NvdW50UmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibmVnYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY2FuIGJlIHVzZWQgaW4gcGFyZW50IGNvbXBvbmVudDogdGhpcy5yZWZzLmFjY291bnRfc2VsZWN0b3IuZ2V0QWNjb3VudCgpXG4gICAgZ2V0QWNjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWNjb3VudDtcbiAgICB9XG5cbiAgICBnZXRFcnJvcigpIHtcbiAgICAgICAgbGV0IHthY2NvdW50LCBhY2NvdW50TmFtZSwgZXJyb3IsIHR5cGVhaGVhZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBpbnB1dFR5cGUgPSBhY2NvdW50TmFtZSA/IHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKCF0eXBlYWhlYWQpIHtcbiAgICAgICAgICAgIGlmICghYWNjb3VudCAmJiBhY2NvdW50TmFtZSAmJiBpbnB1dFR5cGUgIT09IFwicHVia2V5XCIpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLnVua25vd25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUeXBlYWhlYWQgY2FuJ3Qgc2VsZWN0IGFuIHVua25vd24gYWNjb3VudCFcbiAgICAgICAgICAgIC8vIGlmIChcbiAgICAgICAgICAgIC8vICAgICAhKGFsbG93UHViS2V5ICYmIGlucHV0VHlwZSA9PT0gXCJwdWJrZXlcIikgJiZcbiAgICAgICAgICAgIC8vICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgIC8vICAgICBhY2NvdW50TmFtZSAmJlxuICAgICAgICAgICAgLy8gICAgICFhY2NvdW50XG4gICAgICAgICAgICAvLyApXG4gICAgICAgICAgICAvLyAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LmVycm9ycy51bmtub3duXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvciAmJiBhY2NvdW50ICYmICFpbnB1dFR5cGUpXG4gICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLmludmFsaWRcIik7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGdldElucHV0VHlwZSh2YWx1ZSkge1xuICAgICAgICAvLyBPS1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHZhbHVlWzBdID09PSBcIiNcIiAmJiB1dGlscy5pc19vYmplY3RfaWQoXCIxLjIuXCIgKyB2YWx1ZS5zdWJzdHJpbmcoMSkpKVxuICAgICAgICAgICAgcmV0dXJuIFwiaWRcIjtcbiAgICAgICAgaWYgKENoYWluVmFsaWRhdGlvbi5pc19hY2NvdW50X25hbWUodmFsdWUsIHRydWUpKSByZXR1cm4gXCJuYW1lXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFsbG93UHViS2V5ICYmIFB1YmxpY0tleS5mcm9tUHVibGljS2V5U3RyaW5nKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybiBcInB1YmtleVwiO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRWZXJpZmllZEFjY291bnROYW1lKGUpIHtcbiAgICAgICAgbGV0IHthbGxvd1VwcGVyY2FzZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdmFsdWUgPSBlO1xuICAgICAgICB9IGVsc2UgaWYgKGUgJiYgZS50YXJnZXQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbGxvd1VwcGVyY2FzZSkgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIElmIHJlZ2V4IG1hdGNoZXMgXi4qIy9hY2NvdW50L2FjY291bnQtbmFtZS8uKiQsIHBhcnNlIG91dCBhY2NvdW50LW5hbWVcbiAgICAgICAgbGV0IF92YWx1ZSA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpLm1hdGNoKC8oPzpcXC9hY2NvdW50XFwvKSguKikvKTtcbiAgICAgICAgaWYgKF92YWx1ZSkgdmFsdWUgPSBfdmFsdWVbMV07XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIF9ub3RpZnlPbkNoYW5nZShzZWxlY3RlZEFjY291bnROYW1lLCBpbnB1dFR5cGUpIHtcbiAgICAgICAgbGV0IHtwcm9wc30gPSB0aGlzO1xuXG4gICAgICAgIC8vIENsZWFyIHNlbGVjdGVkIGFjY291bnQgd2hlbiB3ZSBoYXZlIG5ldyBpbnB1dCBkYXRhIGlmIHdlIHJlcXVpcmUgYW4gYWN0aXZlIHNlbGVjdFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpbnB1dFR5cGUgPT0gXCJpbnB1dFwiICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVhaGVhZCAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0XG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCEhcHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQWNjb3VudENoYW5nZWQobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gdGhpcy5nZXRWZXJpZmllZEFjY291bnROYW1lKHNlbGVjdGVkQWNjb3VudE5hbWUpO1xuXG4gICAgICAgIC8vIFN5bmNocm9ub3VzIG9uQ2hhbmdlIGZvciBpbnB1dCBjaGFuZ2VcbiAgICAgICAgaWYgKCEhcHJvcHMub25DaGFuZ2UgJiYgKCEhYWNjb3VudE5hbWUgfHwgYWNjb3VudE5hbWUgPT09IFwiXCIpKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShhY2NvdW50TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3luY2hyb25vdXMgb25BY2NvdW50Q2hhbmdlZCBmb3IgY2hlY2tpbmcgb24gY2hhaW5cbiAgICAgICAgaWYgKCEhcHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFjY291bnRcIiwgYWNjb3VudE5hbWUsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgIFthY2NvdW50TmFtZV06IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhIWFjY291bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlID09IFwic2VsZWN0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMucmVxdWlyZUFjdGl2ZVNlbGVjdClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkFjY291bnRDaGFuZ2VkKGFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2VsZWN0KHNlbGVjdGVkQWNjb3VudE5hbWUpIHtcbiAgICAgICAgdGhpcy5fbm90aWZ5T25DaGFuZ2Uoc2VsZWN0ZWRBY2NvdW50TmFtZSwgXCJzZWxlY3RcIik7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZWQoZSkge1xuICAgICAgICB0aGlzLl9hZGRUb0luZGV4KHRoaXMuZ2V0VmVyaWZpZWRBY2NvdW50TmFtZShlKSk7XG4gICAgICAgIHRoaXMuX25vdGlmeU9uQ2hhbmdlKGUsIFwiaW5wdXRcIik7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aW9uKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uQWRkQ29udGFjdCgpIHtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMuYWRkQWNjb3VudENvbnRhY3QodGhpcy5wcm9wcy5hY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgX29uUmVtb3ZlQ29udGFjdCgpIHtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMucmVtb3ZlQWNjb3VudENvbnRhY3QodGhpcy5wcm9wcy5hY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgb25BY3Rpb24oZSkge1xuICAgICAgICBsZXQge29uQWN0aW9uLCBkaXNhYmxlQWN0aW9uQnV0dG9uLCBhY2NvdW50LCBhY2NvdW50TmFtZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5nZXRFcnJvcigpICYmIG9uQWN0aW9uICYmICFkaXNhYmxlQWN0aW9uQnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCkgb25BY3Rpb24oYWNjb3VudCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmdldElucHV0VHlwZShhY2NvdW50TmFtZSkgPT09IFwicHVia2V5XCIpXG4gICAgICAgICAgICAgICAgb25BY3Rpb24oYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWUsIGRpc2FibGVBY3Rpb25CdXR0b259ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgc2VhcmNoSW5Qcm9ncmVzcyA9IHRoaXMuc3RhdGUuYWNjb3VudEluZGV4LmZpbmQoXG4gICAgICAgICAgICBhID0+ICFhLmRhdGEgJiYgYS5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsb2NrZWRTdGF0ZSA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZCAhPT0gbnVsbCA/IHRoaXMuc3RhdGUubG9ja2VkIDogdGhpcy5wcm9wcy5sb2NrZWQ7XG5cbiAgICAgICAgbGV0IGVycm9yID0gdGhpcy5nZXRFcnJvcigpLFxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lcixcbiAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudCxcbiAgICAgICAgICAgIGRpc2FibGVkQWN0aW9uLFxuICAgICAgICAgICAgZGlzYWJsZWRJbnB1dCxcbiAgICAgICAgICAgIGVkaXRhYmxlSW5wdXQsXG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzO1xuXG4gICAgICAgIGVkaXRhYmxlSW5wdXQgPSAhIWxvY2tlZFN0YXRlXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuZWRpdGFibGUgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5lZGl0YWJsZVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGRpc2FibGVkSW5wdXQgPSAhIWxvY2tlZFN0YXRlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5kaXNhYmxlZCAhPSBudWxsXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gU2VsZWN0ZWQgQWNjb3VudFxuICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgbGV0IG9iamVjdEluZGV4ID0gdGhpcy5fZ2V0SW5kZXgoYWNjb3VudC5nZXQoXCJuYW1lXCIpLCBhY2NvdW50SW5kZXgpO1xuXG4gICAgICAgICAgICBzZWxlY3RlZEFjY291bnQgPVxuICAgICAgICAgICAgICAgIGFjY291bnRJbmRleCAmJiBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEluZGV4W29iamVjdEluZGV4XS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc2FibGVkQWN0aW9uID1cbiAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgYWNjb3VudCB8fFxuICAgICAgICAgICAgICAgIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LnR5cGUgPT09IFwicHVia2V5XCIpXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICBlcnJvciB8fFxuICAgICAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbjtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC5pc093bkFjY291bnQpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAub3duX2FjY291bnRcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIGdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQuaXNLbm93blNjYW1tZXIpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuc2NhbV9hY2NvdW50XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcCByZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ3YXJuaW5nXCIgdGhlbWU9XCJmaWxsZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LmlzQ29udGFjdCkge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5mb2xsb3dfdXNlclwiKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmVDb250YWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIGdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIHRoZW1lPVwiZmlsbGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2NvdW50KSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLmZvbGxvd191c2VyX2FkZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25BZGRDb250YWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZWFoZWFkKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uc0NvbnRhaW5lciA9IGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBhY2NvdW50cyBiYXNlZCBvblxuICAgICAgICAgICAgICAgICAgICAvLyAtIEV4Y2x1ZGUgd2l0aG91dCByZXN1bHRzIChtaXNzaW5nIGNoYWluIGRhdGEgYXQgdGhlIG1vbWVudClcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBFeGNsdWRlZCBhY2NvdW50cyAoYnkgcHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gSW5jbHVkZSB1c2VycyBvd24gYWNjb3VudHMgKGlzT3duQWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIHVzZXJzIGNvbnRhY3RzIChpc0NvbnRhY3QpIHVubGVzcyBpdCdzIGEgcHJldmlvdXNseSBsb2NrZWQgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIGN1cnJlbnQgaW5wdXRcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZXhjbHVkZUFjY291bnRzLmluZGV4T2YoYWNjb3VudC5pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmRhdGEuaXNPd25BY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMubG9ja2VkICYmIGFjY291bnQuZGF0YS5pc0NvbnRhY3QpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoYWNjb3VudE5hbWUgJiYgYWNjb3VudC5kYXRhLm5hbWUgPT09IGFjY291bnROYW1lKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5kYXRhLmlzT3duQWNjb3VudCA8IGIuZGF0YS5pc093bkFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmRhdGEubmFtZSA+IGIuZGF0YS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthY2NvdW50LmRhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnQuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY2NvdW50LmRhdGEuZGlzYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuaXNPd25BY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5pc0NvbnRhY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJzdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLmlzS25vd25TY2FtbWVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwid2FybmluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLnN0YXR1c0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lciA9IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWxQcm9wPXtcInZhbHVlXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LnNlYXJjaFwiKX1cbiAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwubm90X2ZvdW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBY2NvdW50ID8gc2VsZWN0ZWRBY2NvdW50Lm5hbWUgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRJbnB1dCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc0NvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyID0gKFxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LnR5cGUgPT09IFwicHVia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsb3dlcmNhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5lZGl0YWJsZSA/IFwidXNlcm5hbWVcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYWNjb3VudE5hbWUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5uYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1c2VyX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17XG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5lZGl0YWJsZSB8fCAhIXRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLnRhYkluZGV4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISFlZGl0YWJsZUlucHV0ID8gZWRpdGFibGVJbnB1dC50b1N0cmluZygpIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISFlZGl0YWJsZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoIWVkaXRhYmxlSW5wdXQpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudEltYWdlQ29udGFpbmVyID0gdGhpcy5wcm9wc1xuICAgICAgICAgICAgLmhpZGVJbWFnZSA/IG51bGwgOiBzZWxlY3RlZEFjY291bnQgJiZcbiAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmFjY291bnRUeXBlID09PSBcInB1YmtleVwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJrZXlcIiB0aXRsZT1cImljb25zLmtleVwiIHNpemU9XCI0eFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuc2l6ZSB8fCAzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy5zaXplIHx8IDMzXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17c2VsZWN0ZWRBY2NvdW50ID8gc2VsZWN0ZWRBY2NvdW50Lm5hbWUgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tX2ltYWdlPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgbGV0IGxvY2tlZFN0YXRlQ29udGFpbmVyID0gIWxvY2tlZFN0YXRlID8gbnVsbCA6IChcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgcmlnaHRMYWJlbENvbnRhaW5lciA9XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5sYWJlbCB8fCAhc2VsZWN0ZWRBY2NvdW50ID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlci1hcmVhXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuaGlkZUltYWdlID8gXCIgbm8tbWFyZ2luXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQuaXNDb250YWN0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmlzT3duQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicG9zaXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmlzS25vd25TY2FtbWVyID8gXCJuZWdhdGl2ZVwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAtMzB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIwLjVyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEFjY291bnQucmlnaHRMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRBY2NvdW50LmRpc3BsYXlUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtlZF9zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IEZvcm1XcmFwcGVyID0gdGhpcy5wcm9wcy5ub0Zvcm0gPyBSZWFjdC5GcmFnbWVudCA6IEZvcm07XG4gICAgICAgIGNvbnN0IGZvcm1XcmFwcGVyUHJvcHMgPSB0aGlzLnByb3BzLm5vRm9ybVxuICAgICAgICAgICAgPyB7fVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50b29sdGlwfVxuICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtV3JhcHBlciB7Li4uZm9ybVdyYXBwZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e2Vycm9yID8gXCJlcnJvclwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9e2Vycm9yID8gZXJyb3IgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmlnaHRMYWJlbENvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZUhSICYmIDxociAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudEltYWdlQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hJblByb2dyZXNzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwibG9hZGluZ1wiIHN0eWxlPXt7cGFkZGluZzogMTB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NrZWRTdGF0ZUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vbkFjdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLnJlcXVpcmVkX2lucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdsb2JhbC5maWVsZF90eXBlLmFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjdGlvbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5hY3Rpb25fbGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Gb3JtV3JhcHBlcj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFjY291bnRTZWxlY3Rvckxpc3RpbmcgPSBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRTZWxlY3Rvckxpc3RpbmcpO1xuXG5BY2NvdW50U2VsZWN0b3JMaXN0aW5nID0gY29ubmVjdChcbiAgICBBY2NvdW50U2VsZWN0b3JMaXN0aW5nLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzOiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzOiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50Q29udGFjdHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50U2VsZWN0b3JMaXN0aW5nO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFpUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFBQTtBQVNBO0FBaEJBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBVkE7QUEyQkE7QUE5Q0E7QUFpREE7QUFDQTtBQXBUQTtBQW9UQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQW5VQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUZBO0FBSEE7QUFEQTtBQWNBO0FBZkE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFBQTtBQW5CQTtBQWtDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBQUE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBUUE7QUE1REE7QUFnRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBZUE7QUFsQkE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUF0R0E7QUFrSEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFTQTtBQVRBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBUUE7QUFUQTtBQVVBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFoSkE7QUFKQTtBQTNCQTtBQURBO0FBREE7QUFEQTtBQUhBO0FBaU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWhRQTtBQUNBO0FBd1VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU5BO0FBWUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFGQTtBQUpBO0FBZEE7QUEwQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUFBO0FBTEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBdkJBO0FBa0NBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFuQ0E7QUEzQkE7QUFGQTtBQXVFQTs7OztBQXRIQTtBQUNBO0FBeUhBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBWEE7QUFDQTtBQWNBOzs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFqQkE7QUE2QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBOUJBO0FBbUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUdBO0FBQ0E7QUFwQkE7QUFBQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFOQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBVEE7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBcEJBO0FBZ0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7O0FBREE7QUFPQTtBQVBBO0FBU0E7QUFiQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBWEE7QUE5Q0E7QUFqQkE7QUFoQ0E7QUFKQTtBQXNIQTs7OztBQXBPQTtBQUNBO0FBdU9BOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFDQTtBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOzs7QUFpQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFIQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBR0E7QUFYQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFWQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBL0JBO0FBc0NBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQWhCQTtBQU5BO0FBQ0E7QUEwQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBREE7QUFIQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFWQTtBQVRBO0FBWEE7QUFEQTtBQUxBO0FBb0RBOzs7O0FBenJCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQURBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQUNBO0FBbXFCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFUQTtBQUNBO0FBWUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==