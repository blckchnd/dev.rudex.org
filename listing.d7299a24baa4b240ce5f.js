(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[42],{

/***/ 3323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3324);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListingPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(501);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(432);
/* harmony import */ var _CoinCardListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3326);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(597);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2952);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2815);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1858);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(737);
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
                        { style: { margin: 2, fontSize: "1.0rem" } },
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
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CoinCardListing__WEBPACK_IMPORTED_MODULE_4__["default"], { key: i, rank: i + 1, coin: coin });
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

            var link_ru = "https://docs.google.com/forms/d/1lJnvufc95CDh2z1Ntq7iCSEs3oD7tPG4nljKTYYezQw";
            var link_en = "https://docs.google.com/forms/d/1X2PguAaRzxlXZGLAarGcmNd-LbJCy8lcoMBcQjFSQ5k";

            var current_locale = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().settings.get("locale");

            window.open(current_locale == "ru" ? link_ru : link_en, "_blank");
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
            var current_locale = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().settings.get("locale");

            var agreement_ru = "https://rudex.freshdesk.com/support/solutions/articles/35000138247-cоглашение-об-оказании-услуг-шлюза";
            var agreement_en = "https://rudex.freshdesk.com/support/solutions/articles/35000138245-gateway-service-agreement";

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
                                        { className: "horizontal", tabIndex: 0 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "div",
                                            {
                                                className: "grid-container",
                                                style: { padding: "2rem 8px" }
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { marginBottom: 20 } }),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "div",
                                                { className: "grid-block small-up-1 medium-up-1 large-up-1 no-overflow" },
                                                this.state.coins.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "div",
                                                    {
                                                        style: { margin: "10px" }
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.loading" }),
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
                                        className: "horizontal",
                                        tabIndex: 1
                                    }),
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
                                                        style: {
                                                            margin: 2,
                                                            fontSize: "1.0rem"
                                                        },
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
                                                    {
                                                        style: {
                                                            border: "1px solid #00a9e0",
                                                            padding: "4px 3px 3px 4px",
                                                            borderRadius: "3px",
                                                            cursor: "pointer"
                                                        }
                                                    },
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
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_1" }),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                                                        href: current_locale == "ru" ? agreement_ru : agreement_en,
                                                        content: "listing.texts.rules.rule_10",
                                                        component: "a",
                                                        target: "_blank"
                                                    }),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_11" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_2" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_3" }),
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
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_4" })
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.texts.rules.rule_5" })
                                                )
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
                Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChain"])("getAsset", "DONATE").then(function (assetInfo) {
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

/***/ 3326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3327);
/* harmony import */ var _DonateSendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3330);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(737);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1898);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(565);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(610);
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
        key: "triggerSend",
        value: function triggerSend(asset) {
            var _this2 = this;

            this.setState({ send_asset: asset }, function () {
                if (_this2.send_modal) _this2.send_modal.show();
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var from_name = "";
            try {
                this.props.account.get("name");
            } catch (e) {}

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "listingTable__row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DonateSendModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    id: "send_modal_listing",
                    refCallback: function refCallback(e) {
                        if (e) _this3.send_modal = e;
                    },
                    from_name: this.props.currentAccount ? this.props.currentAccount : this.props.account,
                    to_name: this.props.coin.account ? this.props.coin.account : from_name,
                    asset_id: "1.3.5588",
                    ticker: this.props.coin.ticker
                }),
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
                                    {
                                        onClick: this.triggerSend.bind(this, "1.3.5588", this.props.coin)
                                    },
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DonutChart__WEBPACK_IMPORTED_MODULE_1__["DonutChart"], {
                                votes: this.props.coin.votes_for_percent,
                                goal: this.props.coin.goal
                            })
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

/***/ 3327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return DonutChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3328);
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

/***/ 3330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2136);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(565);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1898);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(432);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2138);
/* harmony import */ var _AccountSelectorListing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3331);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2149);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2158);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(597);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(610);


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
                            {
                                className: "full-width-wrapper",
                                layout: "vertical"
                            },
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

/***/ 3331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(583);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1898);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2153);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(565);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(581);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(432);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2015);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2016);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1906);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(582);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2152);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5kNzI5OWEyNGJhYTRiMjQwY2U1Zi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0xpc3RpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Db2luQ2FyZExpc3RpbmcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbnV0Q2hhcnQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbmF0ZVNlbmRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvQWNjb3VudFNlbGVjdG9yTGlzdGluZy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9MaXN0aW5nUGFnZS5jc3NcIjtcblxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7RmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmltcG9ydCBDb2luQ2FyZExpc3RpbmcgZnJvbSBcIi4vQ29pbkNhcmRMaXN0aW5nXCI7XG5pbXBvcnQge2dldExpc3RpbmdDb2luc30gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuXG5jbGFzcyBMaXN0aW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBMaXN0aW5nTm90aWNlMUluZm9ybWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvaW5zOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uU3VibWl0UmVxdWVzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG51bGx9KTtcblxuICAgICAgICBsZXQgbGlua19ydSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvMWxKbnZ1ZmM5NUNEaDJ6MU50cTdpQ1NFczNvRDd0UEc0bmxqS1RZWWV6UXdcIjtcbiAgICAgICAgbGV0IGxpbmtfZW4gPVxuICAgICAgICAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzFYMlBndUFhUnp4bFhaR0xBYXJHY21OZC1MYkpDeThsY29NQmNRakZTUTVrXCI7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRfbG9jYWxlID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKTtcblxuICAgICAgICB3aW5kb3cub3BlbihjdXJyZW50X2xvY2FsZSA9PSBcInJ1XCIgPyBsaW5rX3J1IDogbGlua19lbiwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgb25MaXN0aW5nTm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIExpc3RpbmdOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY3VycmVudF9sb2NhbGUgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFwibG9jYWxlXCIpO1xuXG4gICAgICAgIGxldCBhZ3JlZW1lbnRfcnUgPVxuICAgICAgICAgICAgXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDctY9C+0LPQu9Cw0YjQtdC90LjQtS3QvtCxLdC+0LrQsNC30LDQvdC40Lgt0YPRgdC70YPQsy3RiNC70Y7Qt9CwXCI7XG4gICAgICAgIGxldCBhZ3JlZW1lbnRfZW4gPVxuICAgICAgICAgICAgXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDUtZ2F0ZXdheS1zZXJ2aWNlLWFncmVlbWVudFwiO1xuXG4gICAgICAgIGxldCBSdURFWCA9IDxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCJ9fT5SdURFWDwvc3Bhbj47XG4gICAgICAgIGxldCBET05BVEUgPSAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdG89e1wiL2Fzc2V0L0RPTkFURVwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBET05BVEVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgey8qVGFicyovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLWNvbnRhaW5lciBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9XCJwZXJtaXNzaW9uc1RhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgYm9yZGVyZWQtaGVhZGVyIGNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q2xhc3M9XCJwYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBET05BVEUgUFJPR1JFU1MqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImxpc3RpbmcuZG9uYXRlX3Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiIHRhYkluZGV4PXswfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtdXAtMSBtZWRpdW0tdXAtMSBsYXJnZS11cC0xIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2lucy5sZW5ndGggPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMTBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcubG9hZGluZ1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJsaXN0aW5nLmFkZF9jb2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgaGVscC1jb250ZW50LWxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxoMj7Qm9C40YHRgtC40L3QsyDRgtC+0LrQtdC90L7QsiDQvdCwIHtSdURFWH0g0L7RgtC60YDRi9GCINC00LvRjyDQstGB0LXRhSDQttC10LvQsNGO0YnQuNGFITwvaDI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMuaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0My50MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQzLnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9tYXJrZXQvRE9OQVRFX1JVREVYLkJUQ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDMuZ2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDQudDFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcIi9hc3NldC9ET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvYXNzZXQvRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NC50M1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMXB4IHNvbGlkICMwMGE5ZTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNHB4IDNweCAzcHggNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NS50MVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvYXNzZXQvRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ1LnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NS50M1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLmhlYWRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9sb2NhbGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWdyZWVtZW50X3J1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZ3JlZW1lbnRfZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1wiL2Fzc2V0L0RPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET05BVEVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuTGlzdGluZ05vdGljZTFJbmZvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MaXN0aW5nTm90aWNlMUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3Rpbmcubm90aWNlX2luZm9ybWVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibGlzdGluZ19idXR0b25cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0UmVxdWVzdC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5zdWJtaXRfcmVxdWVzdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLmVuZFwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UnVERVh9IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldEJhbGFuY2VzKCk7XG4gICAgfVxuXG4gICAgX2dldEJhbGFuY2VzKCkge1xuICAgICAgICBjb25zdCBjb2lucyA9IGdldExpc3RpbmdDb2lucygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2luczogY29pbnN9KTtcbiAgICAgICAgY29pbnMuZm9yRWFjaChjb2luID0+IHtcbiAgICAgICAgICAgIEZldGNoQ2hhaW4oXCJnZXRBc3NldFwiLCBcIkRPTkFURVwiKS50aGVuKGFzc2V0SW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgQXBpcy5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5kYl9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9uYW1lZF9hY2NvdW50X2JhbGFuY2VzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvaW4uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFthc3NldEluZm8uZ2V0KFwiaWRcIildXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29pbnMgPSB0aGlzLnN0YXRlLmNvaW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjb2lucy5maW5kKGkgPT4gaS5hY2NvdW50ID09PSBjb2luLmFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeC52b3RlcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzWzBdW1wiYW1vdW50XCJdIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgYXNzZXRJbmZvLmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2luc30pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvbWFya2V0L0RPTkFURV9SVURFWC5CVENcIn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5nZXRfZG9uYXRlX3Rva2Vuc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudG9rZW5cIiAvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucmFua1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlQXNzZXROYW1lIGFsaWduLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmFzc2V0X25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmdvYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUdvYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5kb25hdGVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5zdGF0dXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucHJvZ3Jlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLmdldENvaW5zTGlzdCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBnZXRDb2luc0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCB7Y29pbnN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHNvcnRlZENvaW5zID0gY29pbnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGIudm90ZXMgLSBhLnZvdGVzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNvcnRlZENvaW5zLm1hcCgoY29pbiwgaSkgPT4ge1xuICAgICAgICAgICAgY29pbi52b3Rlc19mb3JfcGVyY2VudCA9XG4gICAgICAgICAgICAgICAgY29pbi52b3RlcyA8IGNvaW4uZ29hbCA/IGNvaW4udm90ZXMgOiBjb2luLmdvYWw7XG4gICAgICAgICAgICBjb2luLnN0YXR1cyA9IGNvaW4udm90ZXMgPCBjb2luLmdvYWwgPyBcImNvbGxlY3RpbmdcIiA6IFwiZG9uZVwiO1xuICAgICAgICAgICAgcmV0dXJuIDxDb2luQ2FyZExpc3Rpbmcga2V5PXtpfSByYW5rPXtpICsgMX0gY29pbj17Y29pbn0gLz47XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge0RvbnV0Q2hhcnR9IGZyb20gXCIuL0RvbnV0Q2hhcnRcIjtcbmltcG9ydCBTZW5kTW9kYWwgZnJvbSBcIi4vRG9uYXRlU2VuZE1vZGFsXCI7XG5pbXBvcnQge0ljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7QXNzZXR9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uL01hcmtldENsYXNzZXNcIjtcblxuY2xhc3MgQ29pbkNhcmRMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5jb2luLnZvdGVzID0gMDtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAga2V5OiB0aGlzLnByb3BzLmtleSxcbiAgICAgICAgICAgIHJhbms6IHRoaXMucHJvcHMucmFuayxcblxuICAgICAgICAgICAgY29pbjogdGhpcy5wcm9wcy5jb2luXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdHJpZ2dlclNlbmQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZF9hc3NldDogYXNzZXR9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kX21vZGFsKSB0aGlzLnNlbmRfbW9kYWwuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmcm9tX25hbWUgPSBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19yb3dcIj5cbiAgICAgICAgICAgICAgICA8U2VuZE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF9saXN0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuc2VuZF9tb2RhbCA9IGU7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGZyb21fbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0b19uYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29pbi5hY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvaW4uYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZnJvbV9uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ9e1wiMS4zLjU1ODhcIn1cbiAgICAgICAgICAgICAgICAgICAgdGlja2VyPXt0aGlzLnByb3BzLmNvaW4udGlja2VyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVSYW5rIGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJhbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDQwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199Y29pbnMtbG9nby8ke3RoaXMucHJvcHMuY29pbi50aWNrZXIudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVBc3NldE5hbWUgYWxpZ24tbGVmdCBub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb2luLm5hbWV9ICh7dGhpcy5wcm9wcy5jb2luLnRpY2tlcn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29pbi5zb29uID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibGlzdGluZy50YWJsZS5jb21pbmdfc29vblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCIsIGNvbG9yOiBcImdvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlR29hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9CbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbDombmJzcDt7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb2luLmdvYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9CbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm90ZXM6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb2luLnZvdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50cmlnZ2VyU2VuZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuNTU4OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgRG9uYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9CbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzOiZuYnNwO3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvaW4uc3RhdHVzID09PSBcImNvbGxlY3RpbmdcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuY29sbGVjdGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmRvbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9udXRDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm90ZXM9e3RoaXMucHJvcHMuY29pbi52b3Rlc19mb3JfcGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWw9e3RoaXMucHJvcHMuY29pbi5nb2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ29pbkNhcmRMaXN0aW5nID0gY29ubmVjdChcbiAgICBDb2luQ2FyZExpc3RpbmcsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvaW5DYXJkTGlzdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vRG9udXRDaGFydC5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IERvbnV0Q2hhcnQgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoKHByb3BzLnZvdGVzIC8gcHJvcHMuZ29hbCkgKiAxMDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9udXQtaG9sZVwiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb251dC1yaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImxpZ2h0Z3JheVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0LXNlZ21lbnRcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZURhc2hhcnJheTogYCR7cGVyY2VudH0gMTAwYH19XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ9XCIwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2lkZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyY2VudFwiPntwZXJjZW50ICsgXCIlXCJ9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1NlbmRNb2RhbH0gZnJvbSBcIi4uL01vZGFsL1NlbmRNb2RhbFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xuaW1wb3J0IEFjY291bnRTZWxlY3Rvckxpc3RpbmcgZnJvbSBcIi4vQWNjb3VudFNlbGVjdG9yTGlzdGluZ1wiO1xuaW1wb3J0IEZlZUFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtpc05hTn0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtGb3JtLCBNb2RhbCwgQnV0dG9uLCBUb29sdGlwLCBJbnB1dH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtnZXRXYWxsZXROYW1lfSBmcm9tIFwiLi4vLi4vYnJhbmRpbmdcIjtcbmltcG9ydCB7QXNzZXR9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uL01hcmtldENsYXNzZXNcIjtcblxuY2xhc3MgRG9uYXRlU2VuZE1vZGFsIGV4dGVuZHMgU2VuZE1vZGFsIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAobnAudG9fbmFtZSAhPT0gdGhpcy5zdGF0ZS50b19uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b19uYW1lOiBucC50b19uYW1lID8gbnAudG9fbmFtZSA6IFwiXCIsXG4gICAgICAgICAgICAgICAgdG9fYWNjb3VudDogbnAudG9fbmFtZVxuICAgICAgICAgICAgICAgICAgICA/IENoYWluU3RvcmUuZ2V0QWNjb3VudChucC50b19uYW1lKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcHJvcG9zZSxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcbiAgICAgICAgICAgIHRvX2FjY291bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGFzc2V0X2lkLFxuICAgICAgICAgICAgcHJvcG9zZV9hY2NvdW50LFxuICAgICAgICAgICAgZmVlQW1vdW50LFxuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgdG9fbmFtZSxcbiAgICAgICAgICAgIGZyb21fbmFtZSxcbiAgICAgICAgICAgIG1lbW8sXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3IsXG4gICAgICAgICAgICBoaWRkZW5cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBmcm9tX215X2FjY291bnQgPVxuICAgICAgICAgICAgQWNjb3VudFN0b3JlLmlzTXlBY2NvdW50KGZyb21fYWNjb3VudCkgfHxcbiAgICAgICAgICAgIGZyb21fbmFtZSA9PT0gdGhpcy5wcm9wcy5wYXNzd29yZEFjY291bnQ7XG4gICAgICAgIGxldCBmcm9tX2Vycm9yID1cbiAgICAgICAgICAgIGZyb21fYWNjb3VudCAmJiAhZnJvbV9teV9hY2NvdW50ICYmICFwcm9wb3NlID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGxldCB7YXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XG4gICAgICAgIGxldCBiYWxhbmNlID0gbnVsbDtcblxuICAgICAgICBpZiAoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSAmJiAhZnJvbV9lcnJvcikge1xuICAgICAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICAgICAgbGV0IF9lcnJvciA9IHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yID8gXCJoYXMtZXJyb3JcIiA6IFwiXCI7XG4gICAgICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgICAgIGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhc3NldF90eXBlc1swXSk7XG4gICAgICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gYXNzZXQgPyBhc3NldC5nZXQoXCJpZFwiKSA6IGFzc2V0X3R5cGVzWzBdO1xuXG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtfZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZXRUb3RhbC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2Fzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e19lcnJvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vRnVuZHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9wb3NlX2luY29tcGxldGUgPSBwcm9wb3NlICYmICFwcm9wb3NlX2FjY291bnQ7XG4gICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGFtb3VudCwgLywvZywgXCJcIilcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaXNBbW91bnRWYWxpZCA9IGFtb3VudFZhbHVlICYmICFpc05hTihhbW91bnRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGlzU3VibWl0Tm90VmFsaWQgPVxuICAgICAgICAgICAgIWZyb21fYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcbiAgICAgICAgICAgICFpc0Ftb3VudFZhbGlkIHx8XG4gICAgICAgICAgICAhYXNzZXQgfHxcbiAgICAgICAgICAgIGZyb21fZXJyb3IgfHxcbiAgICAgICAgICAgIHByb3Bvc2VfaW5jb21wbGV0ZSB8fFxuICAgICAgICAgICAgYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIikgPT0gdG9fYWNjb3VudC5nZXQoXCJpZFwiKTtcblxuICAgICAgICBsZXQgdGFiSW5kZXggPSB0aGlzLnByb3BzLnRhYkluZGV4OyAvLyBDb250aW51ZSB0YWJJbmRleCBvbiBwcm9wcyBjb3VudFxuXG4gICAgICAgIHJldHVybiAhdGhpcy5zdGF0ZS5vcGVuID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBpZD1cInNlbmRfbW9kYWxfd3JhcHBlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtoaWRkZW4gfHwgIXRoaXMuc3RhdGUub3BlbiA/IFwiaGlkZVwiIDogXCJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc01vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcInNlbmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXROb3RWYWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzU3VibWl0Tm90VmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3Bvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJwcm9wb3NlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNmZXIuc2VuZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJDYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IFwiMThweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhaXNTdWJtaXROb3RWYWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsaXN0aW5nLm1vZGFsX2hlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImxpc3RpbmcubW9kYWwubmVlZF9idXlfZG9uYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wibGlzdGluZy5tb2RhbC5oZWFkZXIyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldF9uYW1lPXtnZXRXYWxsZXROYW1lKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aWNrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnVsbC13aWR0aC13cmFwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3Rvckxpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmZyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXtmcm9tX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZyb21DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vbkZyb21BY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb25BY3Rpb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yTGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIudG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXt0b19uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vblRvQWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VkaXRhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQW1vdW50Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3R5cGVzLmxlbmd0aCA+IDAgJiYgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X3R5cGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Fzc2V0cz17YXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxEb25hdGVTZW5kTW9kYWwgey4uLnRoaXMucHJvcHN9IHJlZj17dGhpcy5wcm9wcy5yZWZDYWxsYmFja30gLz47XG4gICAgfVxufVxuXG5Eb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlciA9IGNvbm5lY3QoXG4gICAgRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHRhYkluZGV4OiBwcm9wcy50YWJJbmRleCB8fCAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudEltYWdlIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRJbWFnZVwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge1xuICAgIENoYWluU3RvcmUsXG4gICAgUHVibGljS2V5LFxuICAgIENoYWluVmFsaWRhdGlvbixcbiAgICBGZXRjaENoYWluLFxuICAgIEZldGNoQ2hhaW5PYmplY3RzXG59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IGFjY291bnRVdGlscyBmcm9tIFwiY29tbW9uL2FjY291bnRfdXRpbHNcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7XG4gICAgVG9vbHRpcCxcbiAgICBCdXR0b24sXG4gICAgSW5wdXQsXG4gICAgSWNvbiBhcyBBbnRJY29uLFxuICAgIFNlbGVjdCxcbiAgICBGb3JtXG59IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcblxuY29uc3QgTUFYX0xPT0tVUF9BVFRFTVBUUyA9IDU7XG4vKlxuICogQGJyaWVmIEFsbG93cyB0aGUgdXNlciB0byBlbnRlciBhbiBhY2NvdW50IGJ5IG5hbWUgb3IgI0lEXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZGVzaWduZWQgdG8gYmUgc3RhdGVsZXNzIGFzIHBvc3NpYmxlLiAgSXQncyBwcmltYXJ5IHJlc3BvbnNiaWxpdHkgaXMgdG9cbiAqIG1hbmFnZSB0aGUgbGF5b3V0IG9mIGRhdGEgYW5kIHRvIGZpbHRlciB0aGUgdXNlciBpbnB1dC5cbiAqXG4gKi9cblxuY2xhc3MgQWNjb3VudFNlbGVjdG9yTGlzdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGEgdHJhbnNsYXRpb24ga2V5IGZvciB0aGUgbGFiZWxcbiAgICAgICAgZXJyb3I6IFByb3BUeXBlcy5lbGVtZW50LCAvLyB0aGUgZXJyb3IgbWVzc2FnZSBvdmVycmlkZVxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIHBsYWNlaG9sZGVyIHRleHQgdG8gYmUgZGlzcGxheWVkIHdoZW4gdGhlcmUgaXMgbm8gdXNlcl9pbnB1dFxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIHRvIGJlIGNhbGxlZCBhbnkgdGltZSB1c2VyIGlucHV0IGNoYW5nZXNcbiAgICAgICAgb25BY2NvdW50Q2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGV4aXN0aW5nIGFjY291bnQgaXMgc2VsZWN0ZWRcbiAgICAgICAgb25BY3Rpb246IFByb3BUeXBlcy5mdW5jLCAvLyBhIG1ldGhvZCBjYWxsZWQgd2hlbiBBZGQgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgICAgYWNjb3VudE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBhY2NvdW50IHNlbGVjdG9yLCB0aGUgc3RyaW5nIHRoZSB1c2VyIGVudGVyc1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCwgLy8gYWNjb3VudCBvYmplY3QgcmV0cmlldmVkIHZpYSBCaW5kVG9DaGFpblN0YXRlIGRlY29yYXRvciAobm90IGlucHV0KVxuICAgICAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlciwgLy8gdGFiaW5kZXggcHJvcGVydHkgdG8gYmUgcGFzc2VkIHRvIGlucHV0IHRhZ1xuICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCwgLy8gdXNlIGl0IGlmIHlvdSBuZWVkIHRvIGRpc2FibGUgYWN0aW9uIGJ1dHRvbixcbiAgICAgICAgYWxsb3dVcHBlcmNhc2U6IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgaXQgaWYgeW91IG5lZWQgdG8gYWxsb3cgdXBwZXJjYXNlIGxldHRlcnNcbiAgICAgICAgdHlwZWFoZWFkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZXhjbHVkZUFjY291bnRzOiBQcm9wVHlwZXMuYXJyYXksIC8vIGFycmF5IG9mIGFjY291bnRzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgdHlwZWFoZWFkXG4gICAgICAgIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBlZGl0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGxvY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHJlcXVpcmVBY3RpdmVTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBub0Zvcm06IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGF1dG9zdWJzY3JpYmU6IGZhbHNlLFxuICAgICAgICBleGNsdWRlQWNjb3VudHM6IFtdLFxuICAgICAgICBkaXNhYmxlZDogbnVsbCxcbiAgICAgICAgZWRpdGFibGU6IG51bGwsXG4gICAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICAgIHJlcXVpcmVBY3RpdmVTZWxlY3Q6IHRydWUsIC8vIFNob3VsZCBub3QgYmUgc2V0IHRvIGZhbHNlLCByZXF1aXJlZCBmb3IgZmFsbGJhY2tcbiAgICAgICAgbm9Gb3JtOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY2NvdW50SW5kZXg6IFtdLFxuICAgICAgICAgICAgbG9ja2VkOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge2FjY291bnQsIGFjY291bnROYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gUG9wdWxhdGUgYWNjb3VudCBzZWFyY2ggYXJyYXksIGZldGNoIG9ubHkgb25jZVxuICAgICAgICBpZiAoYWNjb3VudE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRoaXNUb0luZGV4KGFjY291bnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm15QWN0aXZlQWNjb3VudHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNvbnRhY3RzLm1hcChhID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRoaXNUb0luZGV4KGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZmV0Y2hBY2NvdW50cygpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQWNjb3VudENoYW5nZWQgJiYgYWNjb3VudClcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZChhY2NvdW50KTtcblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMudHlwZWFoZWFkICYmIGFjY291bnROYW1lKVxuICAgICAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlZChhY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mb2N1cyAmJiAhIXRoaXMucHJvcHMuZWRpdGFibGUgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy51c2VyX2lucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldlByb3BzLmFjY291bnQgJiYgcHJldlByb3BzLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZCh0aGlzLnByb3BzLmFjY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2FkZFRvSW5kZXgoYWNjb3VudE5hbWUsIG5vRGVsYXkgPSBmYWxzZSkge1xuICAgICAgICBpZiAobm9EZWxheSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYWNjb3VudE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fZmV0Y2hBY2NvdW50cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZFRvSW5kZXgoYWNjb3VudE5hbWUsIHRydWUpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9hZGRUaGlzVG9JbmRleChhY2NvdW50TmFtZSkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghYWNjb3VudE5hbWUpIHJldHVybjtcblxuICAgICAgICBsZXQgaW5BY2NvdW50TGlzdCA9IGFjY291bnRJbmRleC5maW5kKGEgPT4gYS5uYW1lID09PSBhY2NvdW50TmFtZSk7XG5cbiAgICAgICAgaWYgKGFjY291bnROYW1lICYmICFpbkFjY291bnRMaXN0KSB7XG4gICAgICAgICAgICBhY2NvdW50SW5kZXgucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0SW5kZXgobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4LmZpbmRJbmRleChhID0+IGEubmFtZSA9PT0gbmFtZSk7XG4gICAgfVxuXG4gICAgX2dldFNlYXJjaEFycmF5KCkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIC8vIEZvciBhbGwgb2JqZWN0cyBpbiBzZWFyY2hfYXJyYXksIHF1ZXJ5IHdpdGggRmV0Y2hDaGFpbk9iamVjdHNcbiAgICAgICAgLy8gVXBkYXRlIHJlc3VsdHMgZm9yIGVhY2ggb2JqZWN0IHdpdGggcmV0dXJuZWQgZGF0YSBhbmQgcmVtb3ZlIGZyb20gc2VhcmNoX2FycmF5XG4gICAgICAgIC8vIFVwZGF0ZSBzZWFyY2hfYXJyYXkgZm9yIGFsbCByZW1haW5pbmcgb2JqZWN0cyB3aXRoIGluY3JlYXNlZCBhdHRlbXB0cyBjb3VudFxuICAgICAgICAvLyB3aGljaCBpcyB3aGVuIGFjY291bnQgZG9lcyBub3QgZXhpc3RzLCBidXQgY2FuIGFsc28gYmUgaWYgbm9kZSBmYWlsZWQgdG8gc2VuZCByZXN1bHRzXG4gICAgICAgIC8vIGJhY2sgaW4gdGltZSwgc28gd2UgcXVlcnkgYXQgbGVhc3QgYE1BWF9MT09LVVBfQVRURU1QVFNgIHRpbWVzIGJlZm9yZSB3ZSBzdG9wXG5cbiAgICAgICAgLy8gRmlsdGVyIG91dCB3aGF0IG9iamVjdHMgd2Ugc3RpbGwgcmVxdWlyZSBkYXRhIGZvclxuICAgICAgICBsZXQgc2VhcmNoX2FycmF5ID0gYWNjb3VudEluZGV4XG4gICAgICAgICAgICAuZmlsdGVyKHNlYXJjaCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFzZWFyY2guZGF0YSAmJiBzZWFyY2guYXR0ZW1wdHMgPCBNQVhfTE9PS1VQX0FUVEVNUFRTXG4gICAgICAgICAgICAgICAgICAgID8gc2VhcmNoLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoc2VhcmNoID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoLm5hbWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VhcmNoX2FycmF5O1xuICAgIH1cblxuICAgIF9mZXRjaEFjY291bnRzKCkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBzZWFyY2hfYXJyYXkgPSB0aGlzLl9nZXRTZWFyY2hBcnJheSgpO1xuXG4gICAgICAgIGlmIChzZWFyY2hfYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKF9fREVWX18pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb29rZWQgZm9yIFwiICsgc2VhcmNoX2FycmF5Lmxlbmd0aCArIFwiIGFjY291bnRzXCIpO1xuICAgICAgICAgICAgRmV0Y2hDaGFpbk9iamVjdHMoXG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHNlYXJjaF9hcnJheSxcbiAgICAgICAgICAgICAgICAzMDAwLFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApLnRoZW4oYWNjb3VudHMgPT4ge1xuICAgICAgICAgICAgICAgIGFjY291bnRzLmZvckVhY2goYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0SW5kZXggPSB0aGlzLl9nZXRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fcG9wdWxhdGVBY2NvdW50SW5kZXgoYWNjb3VudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF9hcnJheS5zcGxpY2UoYWNjb3VudC5nZXQoXCJuYW1lXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LmZvckVhY2goYWNjb3VudF90b19maW5kID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iamVjdEluZGV4ID0gdGhpcy5fZ2V0SW5kZXgoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X3RvX2ZpbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4W29iamVjdEluZGV4XS5hdHRlbXB0cysrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXg6IGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUnVuIGFub3RoZXIgZmV0Y2ggb2YgYWNjb3VudHMgaWYgZGF0YSBpcyBzdGlsbCBtaXNzaW5nXG4gICAgICAgICAgICAgICAgbGV0IGlzRGF0YU1pc3NpbmcgPSB0aGlzLnN0YXRlLmFjY291bnRJbmRleC5maW5kKFxuICAgICAgICAgICAgICAgICAgICBhID0+ICFhLmRhdGEgJiYgYS5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0YU1pc3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wdWxhdGVBY2NvdW50SW5kZXgoYWNjb3VudFJlc3VsdCkge1xuICAgICAgICBsZXQge215QWN0aXZlQWNjb3VudHMsIGNvbnRhY3RzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gU2hvdWxkIG5vdCBoYXBwZW4sIGp1c3QgZmFpbHNhZmVcbiAgICAgICAgaWYgKCFhY2NvdW50UmVzdWx0KSByZXR1cm4gbnVsbDtcblxuICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSBhY2NvdW50UmVzdWx0LmdldChcIm5hbWVcIik7XG4gICAgICAgIGxldCBhY2NvdW50U3RhdHVzID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50TWVtYmVyU3RhdHVzKGFjY291bnRSZXN1bHQpO1xuICAgICAgICBsZXQgYWNjb3VudFR5cGUgPSB0aGlzLmdldElucHV0VHlwZShhY2NvdW50TmFtZSk7XG5cbiAgICAgICAgbGV0IHN0YXR1c0xhYmVsID0gIWFjY291bnRVdGlscy5pc0tub3duU2NhbW1lcihhY2NvdW50TmFtZSlcbiAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5tZW1iZXIuXCIgKyBhY2NvdW50U3RhdHVzKVxuICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50Lm1lbWJlci5zdXNwZWN0ZWRfc2NhbW1lclwiKTtcblxuICAgICAgICBsZXQgcmlnaHRMYWJlbCA9XG4gICAgICAgICAgICBhY2NvdW50VHlwZSA9PT0gXCJuYW1lXCJcbiAgICAgICAgICAgICAgICA/IFwiI1wiICsgYWNjb3VudFJlc3VsdC5nZXQoXCJpZFwiKS5zdWJzdHJpbmcoNClcbiAgICAgICAgICAgICAgICA6IGFjY291bnRUeXBlID09PSBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50UmVzdWx0LmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgOiBhY2NvdW50VHlwZSA9PSBcInB1YmtleVwiICYmIHRoaXMucHJvcHMuYWxsb3dQdWJLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJQdWJsaWMgS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgICAgICBhdHRlbXB0czogMCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogYWNjb3VudFJlc3VsdC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBhY2NvdW50VHlwZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGFjY291bnRTdGF0dXMsXG4gICAgICAgICAgICAgICAgaXNPd25BY2NvdW50OiBteUFjdGl2ZUFjY291bnRzLmhhcyhhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgaXNDb250YWN0OiBjb250YWN0cy5oYXMoYWNjb3VudE5hbWUpLFxuICAgICAgICAgICAgICAgIGlzS25vd25TY2FtbWVyOiBhY2NvdW50VXRpbHMuaXNLbm93blNjYW1tZXIoYWNjb3VudE5hbWUpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsOiBzdGF0dXNMYWJlbCxcbiAgICAgICAgICAgICAgICByaWdodExhYmVsOiByaWdodExhYmVsLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudFV0aWxzLmlzS25vd25TY2FtbWVyKGFjY291bnROYW1lKSB8fCAhYWNjb3VudFJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5lZ2F0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNhbiBiZSB1c2VkIGluIHBhcmVudCBjb21wb25lbnQ6IHRoaXMucmVmcy5hY2NvdW50X3NlbGVjdG9yLmdldEFjY291bnQoKVxuICAgIGdldEFjY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFjY291bnQ7XG4gICAgfVxuXG4gICAgZ2V0RXJyb3IoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWUsIGVycm9yLCB0eXBlYWhlYWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgaW5wdXRUeXBlID0gYWNjb3VudE5hbWUgPyB0aGlzLmdldElucHV0VHlwZShhY2NvdW50TmFtZSkgOiBudWxsO1xuXG4gICAgICAgIGlmICghdHlwZWFoZWFkKSB7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQgJiYgYWNjb3VudE5hbWUgJiYgaW5wdXRUeXBlICE9PSBcInB1YmtleVwiKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LmVycm9ycy51bmtub3duXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVHlwZWFoZWFkIGNhbid0IHNlbGVjdCBhbiB1bmtub3duIGFjY291bnQhXG4gICAgICAgICAgICAvLyBpZiAoXG4gICAgICAgICAgICAvLyAgICAgIShhbGxvd1B1YktleSAmJiBpbnB1dFR5cGUgPT09IFwicHVia2V5XCIpICYmXG4gICAgICAgICAgICAvLyAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAvLyAgICAgYWNjb3VudE5hbWUgJiZcbiAgICAgICAgICAgIC8vICAgICAhYWNjb3VudFxuICAgICAgICAgICAgLy8gKVxuICAgICAgICAgICAgLy8gICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5lcnJvcnMudW5rbm93blwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IgJiYgYWNjb3VudCAmJiAhaW5wdXRUeXBlKVxuICAgICAgICAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LmVycm9ycy5pbnZhbGlkXCIpO1xuXG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBnZXRJbnB1dFR5cGUodmFsdWUpIHtcbiAgICAgICAgLy8gT0tcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh2YWx1ZVswXSA9PT0gXCIjXCIgJiYgdXRpbHMuaXNfb2JqZWN0X2lkKFwiMS4yLlwiICsgdmFsdWUuc3Vic3RyaW5nKDEpKSlcbiAgICAgICAgICAgIHJldHVybiBcImlkXCI7XG4gICAgICAgIGlmIChDaGFpblZhbGlkYXRpb24uaXNfYWNjb3VudF9uYW1lKHZhbHVlLCB0cnVlKSkgcmV0dXJuIFwibmFtZVwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hbGxvd1B1YktleSAmJiBQdWJsaWNLZXkuZnJvbVB1YmxpY0tleVN0cmluZyh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm4gXCJwdWJrZXlcIjtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0VmVyaWZpZWRBY2NvdW50TmFtZShlKSB7XG4gICAgICAgIGxldCB7YWxsb3dVcHBlcmNhc2V9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZTtcbiAgICAgICAgfSBlbHNlIGlmIChlICYmIGUudGFyZ2V0KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWxsb3dVcHBlcmNhc2UpIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBJZiByZWdleCBtYXRjaGVzIF4uKiMvYWNjb3VudC9hY2NvdW50LW5hbWUvLiokLCBwYXJzZSBvdXQgYWNjb3VudC1uYW1lXG4gICAgICAgIGxldCBfdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKS5tYXRjaCgvKD86XFwvYWNjb3VudFxcLykoLiopLyk7XG4gICAgICAgIGlmIChfdmFsdWUpIHZhbHVlID0gX3ZhbHVlWzFdO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBfbm90aWZ5T25DaGFuZ2Uoc2VsZWN0ZWRBY2NvdW50TmFtZSwgaW5wdXRUeXBlKSB7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gdGhpcztcblxuICAgICAgICAvLyBDbGVhciBzZWxlY3RlZCBhY2NvdW50IHdoZW4gd2UgaGF2ZSBuZXcgaW5wdXQgZGF0YSBpZiB3ZSByZXF1aXJlIGFuIGFjdGl2ZSBzZWxlY3RcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaW5wdXRUeXBlID09IFwiaW5wdXRcIiAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy50eXBlYWhlYWQgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVxdWlyZUFjdGl2ZVNlbGVjdFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghIXByb3BzLm9uQWNjb3VudENoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkFjY291bnRDaGFuZ2VkKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEhcHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY2NvdW50TmFtZSA9IHRoaXMuZ2V0VmVyaWZpZWRBY2NvdW50TmFtZShzZWxlY3RlZEFjY291bnROYW1lKTtcblxuICAgICAgICAvLyBTeW5jaHJvbm91cyBvbkNoYW5nZSBmb3IgaW5wdXQgY2hhbmdlXG4gICAgICAgIGlmICghIXByb3BzLm9uQ2hhbmdlICYmICghIWFjY291bnROYW1lIHx8IGFjY291bnROYW1lID09PSBcIlwiKSkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXN5bmNocm9ub3VzIG9uQWNjb3VudENoYW5nZWQgZm9yIGNoZWNraW5nIG9uIGNoYWluXG4gICAgICAgIGlmICghIXByb3BzLm9uQWNjb3VudENoYW5nZWQpIHtcbiAgICAgICAgICAgIEZldGNoQ2hhaW4oXCJnZXRBY2NvdW50XCIsIGFjY291bnROYW1lLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICBbYWNjb3VudE5hbWVdOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgISFhY2NvdW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMucHJvcHMucmVxdWlyZUFjdGl2ZVNlbGVjdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZSA9PSBcInNlbGVjdFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLnJlcXVpcmVBY3RpdmVTZWxlY3QpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25BY2NvdW50Q2hhbmdlZChhY2NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNlbGVjdChzZWxlY3RlZEFjY291bnROYW1lKSB7XG4gICAgICAgIHRoaXMuX25vdGlmeU9uQ2hhbmdlKHNlbGVjdGVkQWNjb3VudE5hbWUsIFwic2VsZWN0XCIpO1xuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2VkKGUpIHtcbiAgICAgICAgdGhpcy5fYWRkVG9JbmRleCh0aGlzLmdldFZlcmlmaWVkQWNjb3VudE5hbWUoZSkpO1xuICAgICAgICB0aGlzLl9ub3RpZnlPbkNoYW5nZShlLCBcImlucHV0XCIpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgICAgICAgdGhpcy5vbkFjdGlvbihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbkFkZENvbnRhY3QoKSB7XG4gICAgICAgIEFjY291bnRBY3Rpb25zLmFkZEFjY291bnRDb250YWN0KHRoaXMucHJvcHMuYWNjb3VudE5hbWUpO1xuICAgIH1cblxuICAgIF9vblJlbW92ZUNvbnRhY3QoKSB7XG4gICAgICAgIEFjY291bnRBY3Rpb25zLnJlbW92ZUFjY291bnRDb250YWN0KHRoaXMucHJvcHMuYWNjb3VudE5hbWUpO1xuICAgIH1cblxuICAgIG9uQWN0aW9uKGUpIHtcbiAgICAgICAgbGV0IHtvbkFjdGlvbiwgZGlzYWJsZUFjdGlvbkJ1dHRvbiwgYWNjb3VudCwgYWNjb3VudE5hbWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXRoaXMuZ2V0RXJyb3IoKSAmJiBvbkFjdGlvbiAmJiAhZGlzYWJsZUFjdGlvbkJ1dHRvbikge1xuICAgICAgICAgICAgaWYgKGFjY291bnQpIG9uQWN0aW9uKGFjY291bnQpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nZXRJbnB1dFR5cGUoYWNjb3VudE5hbWUpID09PSBcInB1YmtleVwiKVxuICAgICAgICAgICAgICAgIG9uQWN0aW9uKGFjY291bnROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthY2NvdW50SW5kZXh9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQge2FjY291bnQsIGFjY291bnROYW1lLCBkaXNhYmxlQWN0aW9uQnV0dG9ufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHNlYXJjaEluUHJvZ3Jlc3MgPSB0aGlzLnN0YXRlLmFjY291bnRJbmRleC5maW5kKFxuICAgICAgICAgICAgYSA9PiAhYS5kYXRhICYmIGEuYXR0ZW1wdHMgPCBNQVhfTE9PS1VQX0FUVEVNUFRTXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbG9ja2VkU3RhdGUgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2NrZWQgIT09IG51bGwgPyB0aGlzLnN0YXRlLmxvY2tlZCA6IHRoaXMucHJvcHMubG9ja2VkO1xuXG4gICAgICAgIGxldCBlcnJvciA9IHRoaXMuZ2V0RXJyb3IoKSxcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIsXG4gICAgICAgICAgICBzZWxlY3RlZEFjY291bnQsXG4gICAgICAgICAgICBkaXNhYmxlZEFjdGlvbixcbiAgICAgICAgICAgIGRpc2FibGVkSW5wdXQsXG4gICAgICAgICAgICBlZGl0YWJsZUlucHV0LFxuICAgICAgICAgICAgbGlua2VkX3N0YXR1cztcblxuICAgICAgICBlZGl0YWJsZUlucHV0ID0gISFsb2NrZWRTdGF0ZVxuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLmVkaXRhYmxlICE9IG51bGxcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuZWRpdGFibGVcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgICBkaXNhYmxlZElucHV0ID0gISFsb2NrZWRTdGF0ZVxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuZGlzYWJsZWQgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFNlbGVjdGVkIEFjY291bnRcbiAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgIGxldCBvYmplY3RJbmRleCA9IHRoaXMuX2dldEluZGV4KGFjY291bnQuZ2V0KFwibmFtZVwiKSwgYWNjb3VudEluZGV4KTtcblxuICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50ID1cbiAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXggJiYgYWNjb3VudEluZGV4W29iamVjdEluZGV4XVxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRJbmRleFtvYmplY3RJbmRleF0uZGF0YVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNhYmxlZEFjdGlvbiA9XG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIGFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC50eXBlID09PSBcInB1YmtleVwiKVxuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgZXJyb3IgfHxcbiAgICAgICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b247XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQuaXNPd25BY2NvdW50KSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLm93bl9hY2NvdW50XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcCBncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LmlzS25vd25TY2FtbWVyKSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLnNjYW1fYWNjb3VudFwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAgcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwid2FybmluZ1wiIHRoZW1lPVwiZmlsbGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC5pc0NvbnRhY3QpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuZm9sbG93X3VzZXJcIil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlQ29udGFjdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcCBncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInN0YXJcIiB0aGVtZT1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjb3VudCkge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5mb2xsb3dfdXNlcl9hZGRcIil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQWRkQ29udGFjdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGVhaGVhZCkge1xuICAgICAgICAgICAgbGV0IG9wdGlvbnNDb250YWluZXIgPSBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgYWNjb3VudHMgYmFzZWQgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gLSBFeGNsdWRlIHdpdGhvdXQgcmVzdWx0cyAobWlzc2luZyBjaGFpbiBkYXRhIGF0IHRoZSBtb21lbnQpXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gRXhjbHVkZWQgYWNjb3VudHMgKGJ5IHByb3BzKVxuICAgICAgICAgICAgICAgICAgICAvLyAtIEluY2x1ZGUgdXNlcnMgb3duIGFjY291bnRzIChpc093bkFjY291bnQpXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gSW5jbHVkZSB1c2VycyBjb250YWN0cyAoaXNDb250YWN0KSB1bmxlc3MgaXQncyBhIHByZXZpb3VzbHkgbG9ja2VkIGlucHV0XG4gICAgICAgICAgICAgICAgICAgIC8vIC0gSW5jbHVkZSBjdXJyZW50IGlucHV0XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmV4Y2x1ZGVBY2NvdW50cy5pbmRleE9mKGFjY291bnQuaWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5kYXRhLmlzT3duQWNjb3VudCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnByb3BzLmxvY2tlZCAmJiBhY2NvdW50LmRhdGEuaXNDb250YWN0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGFjY291bnROYW1lICYmIGFjY291bnQuZGF0YS5uYW1lID09PSBhY2NvdW50TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGF0YS5pc093bkFjY291bnQgPCBiLmRhdGEuaXNPd25BY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5kYXRhLm5hbWUgPiBiLmRhdGEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YWNjb3VudC5kYXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50LmRhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWNjb3VudC5kYXRhLmRpc2FibGVkID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLmlzT3duQWNjb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuaXNDb250YWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5pc0tub3duU2NhbW1lciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cIndhcm5pbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5zdGF0dXNMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvcm1Db250YWluZXIgPSAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkxhYmVsUHJvcD17XCJ2YWx1ZVwifVxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5vbklucHV0Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5zZWFyY2hcIil9XG4gICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2xvYmFsLm5vdF9mb3VuZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQWNjb3VudCA/IHNlbGVjdGVkQWNjb3VudC5uYW1lIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkSW5wdXQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnNDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lciA9IChcbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC50eXBlID09PSBcInB1YmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibG93ZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250VmFyaWFudDogXCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuZWRpdGFibGUgPyBcInVzZXJuYW1lXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFjY291bnROYW1lIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgcmVmPVwidXNlcl9pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZWRpdGFibGUgfHwgISF0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy50YWJJbmRleFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICEhZWRpdGFibGVJbnB1dCA/IGVkaXRhYmxlSW5wdXQudG9TdHJpbmcoKSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICEhZWRpdGFibGVJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKCFlZGl0YWJsZUlucHV0KS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjY291bnRJbWFnZUNvbnRhaW5lciA9IHRoaXMucHJvcHNcbiAgICAgICAgICAgIC5oaWRlSW1hZ2UgPyBudWxsIDogc2VsZWN0ZWRBY2NvdW50ICYmXG4gICAgICAgIHNlbGVjdGVkQWNjb3VudC5hY2NvdW50VHlwZSA9PT0gXCJwdWJrZXlcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJrZXlcIiB0aXRsZT1cImljb25zLmtleVwiIHNpemU9XCI0eFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICBzaXplPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5zaXplIHx8IDMzLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy5zaXplIHx8IDMzXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhY2NvdW50PXtzZWxlY3RlZEFjY291bnQgPyBzZWxlY3RlZEFjY291bnQubmFtZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgY3VzdG9tX2ltYWdlPXtudWxsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgbG9ja2VkU3RhdGVDb250YWluZXIgPSAhbG9ja2VkU3RhdGUgPyBudWxsIDogXCJcIjtcblxuICAgICAgICBsZXQgcmlnaHRMYWJlbENvbnRhaW5lciA9XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5sYWJlbCB8fCAhc2VsZWN0ZWRBY2NvdW50ID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlci1hcmVhXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuaGlkZUltYWdlID8gXCIgbm8tbWFyZ2luXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQuaXNDb250YWN0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmlzT3duQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicG9zaXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmlzS25vd25TY2FtbWVyID8gXCJuZWdhdGl2ZVwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAtMzB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIwLjVyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEFjY291bnQucmlnaHRMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRBY2NvdW50LmRpc3BsYXlUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtlZF9zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IEZvcm1XcmFwcGVyID0gdGhpcy5wcm9wcy5ub0Zvcm0gPyBSZWFjdC5GcmFnbWVudCA6IEZvcm07XG4gICAgICAgIGNvbnN0IGZvcm1XcmFwcGVyUHJvcHMgPSB0aGlzLnByb3BzLm5vRm9ybVxuICAgICAgICAgICAgPyB7fVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZnVsbC13aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgbGF5b3V0OiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWFyZWFcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRvb2x0aXB9XG4gICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvcm1XcmFwcGVyIHsuLi5mb3JtV3JhcHBlclByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17ZXJyb3IgPyBcImVycm9yXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD17ZXJyb3IgPyBlcnJvciA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyaWdodExhYmVsQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudXNlSFIgJiYgPGhyIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50SW1hZ2VDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1Db250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaEluUHJvZ3Jlc3MgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJsb2FkaW5nXCIgc3R5bGU9e3twYWRkaW5nOiAxMH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2tlZFN0YXRlQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9uQWN0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAucmVxdWlyZWRfaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2xvYmFsLmZpZWxkX3R5cGUuYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWN0aW9uLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnByb3BzLmFjdGlvbl9sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Zvcm1XcmFwcGVyPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQWNjb3VudFNlbGVjdG9yTGlzdGluZyA9IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudFNlbGVjdG9yTGlzdGluZyk7XG5cbkFjY291bnRTZWxlY3Rvckxpc3RpbmcgPSBjb25uZWN0KFxuICAgIEFjY291bnRTZWxlY3Rvckxpc3RpbmcsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLm15QWN0aXZlQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgY29udGFjdHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRDb250YWN0c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRTZWxlY3Rvckxpc3Rpbmc7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQTJVQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQUE7QUFRQTtBQWZBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBVkE7QUEyQkE7QUE3Q0E7QUFnREE7QUFDQTtBQTdYQTtBQTZYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2WUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBSEE7QUFIQTtBQUxBO0FBREE7QUFvQkE7QUFyQkE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBU0E7QUFUQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFBQTtBQWZBO0FBK0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFBQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQU5BO0FBREE7QUFBQTtBQUFBO0FBWUE7QUE1REE7QUErREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBZ0JBO0FBbkJBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQWJBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBUkE7QUFBQTtBQWlCQTtBQW5CQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBeENBO0FBMUdBO0FBd0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBTkE7QUFTQTtBQVZBO0FBV0E7QUFDQTtBQVpBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBTkE7QUFlQTtBQWZBO0FBREE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQTdMQTtBQU5BO0FBakNBO0FBREE7QUFEQTtBQURBO0FBRkE7QUFxUEE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBelVBO0FBQ0E7QUEyWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUxBO0FBV0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUtBO0FBQ0E7QUFoQkE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUhBO0FBWkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFBQTtBQUxBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUEvQkE7QUEyQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQTVDQTtBQTFCQTtBQW5CQTtBQXFHQTs7OztBQWhJQTtBQUNBO0FBa0lBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBWEE7QUFDQTtBQWNBOzs7Ozs7OztBQ2hLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFqQkE7QUE2QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBOUJBO0FBbUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUdBO0FBQ0E7QUFwQkE7QUFBQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFOQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBVEE7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBbkJBO0FBK0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7O0FBREE7QUFPQTtBQVBBO0FBU0E7QUFiQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQVhBO0FBckRBO0FBakJBO0FBL0JBO0FBSkE7QUE0SEE7Ozs7QUFyT0E7QUFDQTtBQXVPQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBQ0E7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTs7O0FBaUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFHQTtBQUdBO0FBWEE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFoQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBVkE7QUFhQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQS9CQTtBQXNDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFoQkE7QUFOQTtBQUNBO0FBMEJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBVkE7QUFUQTtBQVhBO0FBREE7QUFMQTtBQW9EQTs7OztBQXZyQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFEQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFDQTtBQWlxQkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVEE7QUFDQTtBQVlBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=