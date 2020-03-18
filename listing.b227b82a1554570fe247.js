(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[42],{

/***/ 3324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3325);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListingPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(502);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(433);
/* harmony import */ var _CoinCardListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3327);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(598);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2953);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2816);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1905);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(749);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1859);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(738);
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
                coin.soon == true ? coin.status = "waiting" : coin.soon;
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

/***/ 3327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3328);
/* harmony import */ var _DonateSendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3331);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(749);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(738);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1899);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(566);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1905);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(611);
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

            var coin = this.props.coin;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "listingTable__row" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DonateSendModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    id: "send_modal_listing",
                    refCallback: function refCallback(e) {
                        if (e) _this3.send_modal = e;
                    },
                    from_name: this.props.currentAccount ? this.props.currentAccount : this.props.account,
                    to_name: coin.account ? coin.account : from_name,
                    asset_id: "1.3.5588",
                    ticker: coin.ticker
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
                                src: "" + "coins-logo/" + coin.ticker.toLowerCase() + ".png",
                                alt: ""
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingTable__cell listingTableAssetName align-left nowrap" },
                            coin.name,
                            " (",
                            coin.ticker,
                            ")",
                            coin.soon === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "listing.table.goal" }),
                                    ":\xA0",
                                    " "
                                ),
                                coin.goal
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "listingTable__cell listingTableVotes" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "listingAssetInfoBlock" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "listing.table.donates" }),
                                    ":\xA0"
                                ),
                                coin.votes,
                                coin.soon === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    { className: "coin-soon" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                                        name: "transfer",
                                        title: "icons.transfer",
                                        className: "icon-14px"
                                    }),
                                    "\xA0 Donate"
                                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        onClick: this.triggerSend.bind(this, "1.3.5588", coin)
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, { content: "listing.table.status" }),
                                    ":\xA0",
                                    " "
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
                                    content: "listing.table." + coin.status
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "listingTable__cell listingTableProgress" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DonutChart__WEBPACK_IMPORTED_MODULE_1__["DonutChart"], {
                                votes: coin.votes_for_percent,
                                goal: coin.goal
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

/***/ 3328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return DonutChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3329);
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

/***/ 3331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2137);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2136);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1905);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(566);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1899);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(433);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2139);
/* harmony import */ var _AccountSelectorListing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3332);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2150);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(600);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(749);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2159);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(598);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(611);


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

/***/ 3332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(584);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1899);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2154);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(566);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(582);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1905);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(433);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2016);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2017);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(600);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1907);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(583);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(753);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(843);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(749);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2153);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5iMjI3YjgyYTE1NTQ1NzBmZTI0Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0xpc3RpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Db2luQ2FyZExpc3RpbmcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbnV0Q2hhcnQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbmF0ZVNlbmRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvQWNjb3VudFNlbGVjdG9yTGlzdGluZy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9MaXN0aW5nUGFnZS5jc3NcIjtcblxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7RmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmltcG9ydCBDb2luQ2FyZExpc3RpbmcgZnJvbSBcIi4vQ29pbkNhcmRMaXN0aW5nXCI7XG5pbXBvcnQge2dldExpc3RpbmdDb2luc30gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuXG5jbGFzcyBMaXN0aW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBMaXN0aW5nTm90aWNlMUluZm9ybWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvaW5zOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uU3VibWl0UmVxdWVzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG51bGx9KTtcblxuICAgICAgICBsZXQgbGlua19ydSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvMWxKbnZ1ZmM5NUNEaDJ6MU50cTdpQ1NFczNvRDd0UEc0bmxqS1RZWWV6UXdcIjtcbiAgICAgICAgbGV0IGxpbmtfZW4gPVxuICAgICAgICAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzFYMlBndUFhUnp4bFhaR0xBYXJHY21OZC1MYkpDeThsY29NQmNRakZTUTVrXCI7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRfbG9jYWxlID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKTtcblxuICAgICAgICB3aW5kb3cub3BlbihjdXJyZW50X2xvY2FsZSA9PSBcInJ1XCIgPyBsaW5rX3J1IDogbGlua19lbiwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgb25MaXN0aW5nTm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIExpc3RpbmdOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY3VycmVudF9sb2NhbGUgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFwibG9jYWxlXCIpO1xuXG4gICAgICAgIGxldCBhZ3JlZW1lbnRfcnUgPVxuICAgICAgICAgICAgXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDctY9C+0LPQu9Cw0YjQtdC90LjQtS3QvtCxLdC+0LrQsNC30LDQvdC40Lgt0YPRgdC70YPQsy3RiNC70Y7Qt9CwXCI7XG4gICAgICAgIGxldCBhZ3JlZW1lbnRfZW4gPVxuICAgICAgICAgICAgXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDUtZ2F0ZXdheS1zZXJ2aWNlLWFncmVlbWVudFwiO1xuXG4gICAgICAgIGxldCBSdURFWCA9IDxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCJ9fT5SdURFWDwvc3Bhbj47XG4gICAgICAgIGxldCBET05BVEUgPSAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdG89e1wiL2Fzc2V0L0RPTkFURVwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBET05BVEVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgey8qVGFicyovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLWNvbnRhaW5lciBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9XCJwZXJtaXNzaW9uc1RhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgYm9yZGVyZWQtaGVhZGVyIGNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q2xhc3M9XCJwYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBET05BVEUgUFJPR1JFU1MqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImxpc3RpbmcuZG9uYXRlX3Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiIHRhYkluZGV4PXswfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtdXAtMSBtZWRpdW0tdXAtMSBsYXJnZS11cC0xIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2lucy5sZW5ndGggPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMTBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcubG9hZGluZ1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJsaXN0aW5nLmFkZF9jb2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgaGVscC1jb250ZW50LWxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxoMj7Qm9C40YHRgtC40L3QsyDRgtC+0LrQtdC90L7QsiDQvdCwIHtSdURFWH0g0L7RgtC60YDRi9GCINC00LvRjyDQstGB0LXRhSDQttC10LvQsNGO0YnQuNGFITwvaDI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMuaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0My50MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQzLnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9tYXJrZXQvRE9OQVRFX1JVREVYLkJUQ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDMuZ2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDQudDFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcIi9hc3NldC9ET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvYXNzZXQvRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NC50M1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMXB4IHNvbGlkICMwMGE5ZTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNHB4IDNweCAzcHggNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NS50MVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvYXNzZXQvRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ1LnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NS50M1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLmhlYWRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9sb2NhbGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWdyZWVtZW50X3J1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZ3JlZW1lbnRfZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1wiL2Fzc2V0L0RPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET05BVEVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuTGlzdGluZ05vdGljZTFJbmZvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MaXN0aW5nTm90aWNlMUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3Rpbmcubm90aWNlX2luZm9ybWVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibGlzdGluZ19idXR0b25cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0UmVxdWVzdC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5zdWJtaXRfcmVxdWVzdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLmVuZFwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UnVERVh9IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldEJhbGFuY2VzKCk7XG4gICAgfVxuXG4gICAgX2dldEJhbGFuY2VzKCkge1xuICAgICAgICBjb25zdCBjb2lucyA9IGdldExpc3RpbmdDb2lucygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2luczogY29pbnN9KTtcbiAgICAgICAgY29pbnMuZm9yRWFjaChjb2luID0+IHtcbiAgICAgICAgICAgIEZldGNoQ2hhaW4oXCJnZXRBc3NldFwiLCBcIkRPTkFURVwiKS50aGVuKGFzc2V0SW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgQXBpcy5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5kYl9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9uYW1lZF9hY2NvdW50X2JhbGFuY2VzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvaW4uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFthc3NldEluZm8uZ2V0KFwiaWRcIildXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29pbnMgPSB0aGlzLnN0YXRlLmNvaW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjb2lucy5maW5kKGkgPT4gaS5hY2NvdW50ID09PSBjb2luLmFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeC52b3RlcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzWzBdW1wiYW1vdW50XCJdIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgYXNzZXRJbmZvLmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2luc30pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvbWFya2V0L0RPTkFURV9SVURFWC5CVENcIn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5nZXRfZG9uYXRlX3Rva2Vuc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudG9rZW5cIiAvPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucmFua1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlQXNzZXROYW1lIGFsaWduLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmFzc2V0X25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmdvYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUdvYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5kb25hdGVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5zdGF0dXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucHJvZ3Jlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLmdldENvaW5zTGlzdCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBnZXRDb2luc0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCB7Y29pbnN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHNvcnRlZENvaW5zID0gY29pbnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGIudm90ZXMgLSBhLnZvdGVzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNvcnRlZENvaW5zLm1hcCgoY29pbiwgaSkgPT4ge1xuICAgICAgICAgICAgY29pbi52b3Rlc19mb3JfcGVyY2VudCA9XG4gICAgICAgICAgICAgICAgY29pbi52b3RlcyA8IGNvaW4uZ29hbCA/IGNvaW4udm90ZXMgOiBjb2luLmdvYWw7XG4gICAgICAgICAgICBjb2luLnN0YXR1cyA9IGNvaW4udm90ZXMgPCBjb2luLmdvYWwgPyBcImNvbGxlY3RpbmdcIiA6IFwiZG9uZVwiO1xuICAgICAgICAgICAgY29pbi5zb29uID09IHRydWUgPyAoY29pbi5zdGF0dXMgPSBcIndhaXRpbmdcIikgOiBjb2luLnNvb247XG4gICAgICAgICAgICByZXR1cm4gPENvaW5DYXJkTGlzdGluZyBrZXk9e2l9IHJhbms9e2kgKyAxfSBjb2luPXtjb2lufSAvPjtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ1BhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7RG9udXRDaGFydH0gZnJvbSBcIi4vRG9udXRDaGFydFwiO1xuaW1wb3J0IFNlbmRNb2RhbCBmcm9tIFwiLi9Eb25hdGVTZW5kTW9kYWxcIjtcbmltcG9ydCB7SWNvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuXG5jbGFzcyBDb2luQ2FyZExpc3RpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnByb3BzLmNvaW4udm90ZXMgPSAwO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBrZXk6IHRoaXMucHJvcHMua2V5LFxuICAgICAgICAgICAgcmFuazogdGhpcy5wcm9wcy5yYW5rLFxuXG4gICAgICAgICAgICBjb2luOiB0aGlzLnByb3BzLmNvaW5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyU2VuZChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZW5kX2Fzc2V0OiBhc3NldH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbmRfbW9kYWwpIHRoaXMuc2VuZF9tb2RhbC5zaG93KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGZyb21fbmFtZSA9IFwiXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICBsZXQge2NvaW59ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX3Jvd1wiPlxuICAgICAgICAgICAgICAgIDxTZW5kTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZW5kX21vZGFsX2xpc3RpbmdcIlxuICAgICAgICAgICAgICAgICAgICByZWZDYWxsYmFjaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkgdGhpcy5zZW5kX21vZGFsID0gZTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZnJvbV9uYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRvX25hbWU9e2NvaW4uYWNjb3VudCA/IGNvaW4uYWNjb3VudCA6IGZyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ9e1wiMS4zLjU1ODhcIn1cbiAgICAgICAgICAgICAgICAgICAgdGlja2VyPXtjb2luLnRpY2tlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFuayBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yYW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVMb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiA0MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWNvaW5zLWxvZ28vJHtjb2luLnRpY2tlci50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUFzc2V0TmFtZSBhbGlnbi1sZWZ0IG5vd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLm5hbWV9ICh7Y29pbi50aWNrZXJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLnNvb24gPT09IHRydWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmNvbWluZ19zb29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIiwgY29sb3I6IFwiZ29sZFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVHb2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmdvYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLmdvYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9CbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5kb25hdGVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLnZvdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5zb29uID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY29pbi1zb29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IERvbmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRyaWdnZXJTZW5kLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjU1ODhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IERvbmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnN0YXR1c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJsaXN0aW5nLnRhYmxlLlwiICsgY29pbi5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb251dENoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3Rlcz17Y29pbi52b3Rlc19mb3JfcGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWw9e2NvaW4uZ29hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNvaW5DYXJkTGlzdGluZyA9IGNvbm5lY3QoXG4gICAgQ29pbkNhcmRMaXN0aW5nLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmUsIEFjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OlxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb2luQ2FyZExpc3Rpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0RvbnV0Q2hhcnQuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBEb251dENoYXJ0ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKChwcm9wcy52b3RlcyAvIHByb3BzLmdvYWwpICogMTAwKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0LWhvbGVcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9udXQtcmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJsaWdodGdyYXlcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb251dC1zZWdtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2VEYXNoYXJyYXk6IGAke3BlcmNlbnR9IDEwMGB9fVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0PVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmNlbnRcIj57cGVyY2VudCArIFwiJVwifTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtTZW5kTW9kYWx9IGZyb20gXCIuLi9Nb2RhbC9TZW5kTW9kYWxcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclN0eWxlR3VpZGVcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0b3JMaXN0aW5nIGZyb20gXCIuL0FjY291bnRTZWxlY3Rvckxpc3RpbmdcIjtcbmltcG9ydCBGZWVBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0ZlZUFzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7aXNOYU59IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7Rm9ybSwgTW9kYWwsIEJ1dHRvbiwgVG9vbHRpcCwgSW5wdXR9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcbmltcG9ydCB7Z2V0V2FsbGV0TmFtZX0gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIERvbmF0ZVNlbmRNb2RhbCBleHRlbmRzIFNlbmRNb2RhbCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKG5wLnRvX25hbWUgIT09IHRoaXMuc3RhdGUudG9fbmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9fbmFtZTogbnAudG9fbmFtZSA/IG5wLnRvX25hbWUgOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IG5wLnRvX25hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldEFjY291bnQobnAudG9fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHByb3Bvc2UsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICBhc3NldF9pZCxcbiAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIHRvX25hbWUsXG4gICAgICAgICAgICBmcm9tX25hbWUsXG4gICAgICAgICAgICBtZW1vLFxuICAgICAgICAgICAgYmFsYW5jZUVycm9yLFxuICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgZnJvbV9teV9hY2NvdW50ID1cbiAgICAgICAgICAgIEFjY291bnRTdG9yZS5pc015QWNjb3VudChmcm9tX2FjY291bnQpIHx8XG4gICAgICAgICAgICBmcm9tX25hbWUgPT09IHRoaXMucHJvcHMucGFzc3dvcmRBY2NvdW50O1xuICAgICAgICBsZXQgZnJvbV9lcnJvciA9XG4gICAgICAgICAgICBmcm9tX2FjY291bnQgJiYgIWZyb21fbXlfYWNjb3VudCAmJiAhcHJvcG9zZSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikgJiYgIWZyb21fZXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgICAgIGxldCBfZXJyb3IgPSB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IGFzc2V0ID8gYXNzZXQuZ2V0KFwiaWRcIikgOiBhc3NldF90eXBlc1swXTtcblxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0VG90YWwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtfZXJyb3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0Z1bmRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvcG9zZV9pbmNvbXBsZXRlID0gcHJvcG9zZSAmJiAhcHJvcG9zZV9hY2NvdW50O1xuICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChhbW91bnQsIC8sL2csIFwiXCIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlzQW1vdW50VmFsaWQgPSBhbW91bnRWYWx1ZSAmJiAhaXNOYU4oYW1vdW50VmFsdWUpO1xuICAgICAgICBjb25zdCBpc1N1Ym1pdE5vdFZhbGlkID1cbiAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcbiAgICAgICAgICAgICF0b19hY2NvdW50IHx8XG4gICAgICAgICAgICAhaXNBbW91bnRWYWxpZCB8fFxuICAgICAgICAgICAgIWFzc2V0IHx8XG4gICAgICAgICAgICBmcm9tX2Vycm9yIHx8XG4gICAgICAgICAgICBwcm9wb3NlX2luY29tcGxldGUgfHxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvciB8fFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09IHRvX2FjY291bnQuZ2V0KFwiaWRcIik7XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gdGhpcy5wcm9wcy50YWJJbmRleDsgLy8gQ29udGludWUgdGFiSW5kZXggb24gcHJvcHMgY291bnRcblxuICAgICAgICByZXR1cm4gIXRoaXMuc3RhdGUub3BlbiA/IG51bGwgOiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgaWQ9XCJzZW5kX21vZGFsX3dyYXBwZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aGlkZGVuIHx8ICF0aGlzLnN0YXRlLm9wZW4gPyBcImhpZGVcIiA6IFwiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0Tm90VmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJvcG9zZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zZmVyLnNlbmRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiBcIjE4cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWlzU3VibWl0Tm90VmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibGlzdGluZy5tb2RhbF9oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsaXN0aW5nLm1vZGFsLm5lZWRfYnV5X2RvbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImxpc3RpbmcubW9kYWwuaGVhZGVyMlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGlja2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGgtd3JhcHBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnJvbV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mcm9tQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Gcm9tQWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQWN0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3Rvckxpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dG9fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Ub0FjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lZGl0YWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFtb3VudENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5sZW5ndGggPiAwICYmIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF90eXBlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hc3NldHM9e2Fzc2V0X3R5cGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05hTj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZUFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0cmFuc2ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBtZW1vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmVlQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIERvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8RG9uYXRlU2VuZE1vZGFsIHsuLi50aGlzLnByb3BzfSByZWY9e3RoaXMucHJvcHMucmVmQ2FsbGJhY2t9IC8+O1xuICAgIH1cbn1cblxuRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIgPSBjb25uZWN0KFxuICAgIERvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICB0YWJJbmRleDogcHJvcHMudGFiSW5kZXggfHwgMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEFjY291bnRJbWFnZSBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50SW1hZ2VcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtcbiAgICBDaGFpblN0b3JlLFxuICAgIFB1YmxpY0tleSxcbiAgICBDaGFpblZhbGlkYXRpb24sXG4gICAgRmV0Y2hDaGFpbixcbiAgICBGZXRjaENoYWluT2JqZWN0c1xufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBhY2NvdW50VXRpbHMgZnJvbSBcImNvbW1vbi9hY2NvdW50X3V0aWxzXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge1xuICAgIFRvb2x0aXAsXG4gICAgQnV0dG9uLFxuICAgIElucHV0LFxuICAgIEljb24gYXMgQW50SWNvbixcbiAgICBTZWxlY3QsXG4gICAgRm9ybVxufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XG5cbmNvbnN0IE1BWF9MT09LVVBfQVRURU1QVFMgPSA1O1xuLypcbiAqIEBicmllZiBBbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXIgYW4gYWNjb3VudCBieSBuYW1lIG9yICNJRFxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGRlc2lnbmVkIHRvIGJlIHN0YXRlbGVzcyBhcyBwb3NzaWJsZS4gIEl0J3MgcHJpbWFyeSByZXNwb25zYmlsaXR5IGlzIHRvXG4gKiBtYW5hZ2UgdGhlIGxheW91dCBvZiBkYXRhIGFuZCB0byBmaWx0ZXIgdGhlIHVzZXIgaW5wdXQuXG4gKlxuICovXG5cbmNsYXNzIEFjY291bnRTZWxlY3Rvckxpc3RpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhIHRyYW5zbGF0aW9uIGtleSBmb3IgdGhlIGxhYmVsXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuZWxlbWVudCwgLy8gdGhlIGVycm9yIG1lc3NhZ2Ugb3ZlcnJpZGVcbiAgICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHRoZSBwbGFjZWhvbGRlciB0ZXh0IHRvIGJlIGRpc3BsYXllZCB3aGVuIHRoZXJlIGlzIG5vIHVzZXJfaW5wdXRcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLCAvLyBhIG1ldGhvZCB0byBiZSBjYWxsZWQgYW55IHRpbWUgdXNlciBpbnB1dCBjaGFuZ2VzXG4gICAgICAgIG9uQWNjb3VudENoYW5nZWQ6IFByb3BUeXBlcy5mdW5jLCAvLyBhIG1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBleGlzdGluZyBhY2NvdW50IGlzIHNlbGVjdGVkXG4gICAgICAgIG9uQWN0aW9uOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgY2FsbGVkIHdoZW4gQWRkIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICAgIGFjY291bnROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgYWNjb3VudCBzZWxlY3RvciwgdGhlIHN0cmluZyB0aGUgdXNlciBlbnRlcnNcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsIC8vIGFjY291bnQgb2JqZWN0IHJldHJpZXZlZCB2aWEgQmluZFRvQ2hhaW5TdGF0ZSBkZWNvcmF0b3IgKG5vdCBpbnB1dClcbiAgICAgICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsIC8vIHRhYmluZGV4IHByb3BlcnR5IHRvIGJlIHBhc3NlZCB0byBpbnB1dCB0YWdcbiAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSBpdCBpZiB5b3UgbmVlZCB0byBkaXNhYmxlIGFjdGlvbiBidXR0b24sXG4gICAgICAgIGFsbG93VXBwZXJjYXNlOiBQcm9wVHlwZXMuYm9vbCwgLy8gdXNlIGl0IGlmIHlvdSBuZWVkIHRvIGFsbG93IHVwcGVyY2FzZSBsZXR0ZXJzXG4gICAgICAgIHR5cGVhaGVhZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGV4Y2x1ZGVBY2NvdW50czogUHJvcFR5cGVzLmFycmF5LCAvLyBhcnJheSBvZiBhY2NvdW50cyB0byBleGNsdWRlIGZyb20gdGhlIHR5cGVhaGVhZFxuICAgICAgICBmb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZWRpdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBsb2NrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICByZXF1aXJlQWN0aXZlU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbm9Gb3JtOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhdXRvc3Vic2NyaWJlOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZUFjY291bnRzOiBbXSxcbiAgICAgICAgZGlzYWJsZWQ6IG51bGwsXG4gICAgICAgIGVkaXRhYmxlOiBudWxsLFxuICAgICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgICAgICByZXF1aXJlQWN0aXZlU2VsZWN0OiB0cnVlLCAvLyBTaG91bGQgbm90IGJlIHNldCB0byBmYWxzZSwgcmVxdWlyZWQgZm9yIGZhbGxiYWNrXG4gICAgICAgIG5vRm9ybTogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWNjb3VudEluZGV4OiBbXSxcbiAgICAgICAgICAgIGxvY2tlZDogbnVsbFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHthY2NvdW50LCBhY2NvdW50TmFtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIFBvcHVsYXRlIGFjY291bnQgc2VhcmNoIGFycmF5LCBmZXRjaCBvbmx5IG9uY2VcbiAgICAgICAgaWYgKGFjY291bnROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhY2NvdW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5teUFjdGl2ZUFjY291bnRzLm1hcChhID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRoaXNUb0luZGV4KGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5jb250YWN0cy5tYXAoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2ZldGNoQWNjb3VudHMoKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkICYmIGFjY291bnQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQWNjb3VudENoYW5nZWQoYWNjb3VudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnR5cGVhaGVhZCAmJiBhY2NvdW50TmFtZSlcbiAgICAgICAgICAgIHRoaXMub25JbnB1dENoYW5nZWQoYWNjb3VudE5hbWUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZm9jdXMgJiYgISF0aGlzLnByb3BzLmVkaXRhYmxlICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMudXNlcl9pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZQcm9wcy5hY2NvdW50ICYmIHByZXZQcm9wcy5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQWNjb3VudENoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWNjb3VudENoYW5nZWQodGhpcy5wcm9wcy5hY2NvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9hZGRUb0luZGV4KGFjY291bnROYW1lLCBub0RlbGF5ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKG5vRGVsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRoaXNUb0luZGV4KGFjY291bnROYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2ZldGNoQWNjb3VudHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRUb0luZGV4KGFjY291bnROYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYWRkVGhpc1RvSW5kZXgoYWNjb3VudE5hbWUpIHtcbiAgICAgICAgbGV0IHthY2NvdW50SW5kZXh9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWFjY291bnROYW1lKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGluQWNjb3VudExpc3QgPSBhY2NvdW50SW5kZXguZmluZChhID0+IGEubmFtZSA9PT0gYWNjb3VudE5hbWUpO1xuXG4gICAgICAgIGlmIChhY2NvdW50TmFtZSAmJiAhaW5BY2NvdW50TGlzdCkge1xuICAgICAgICAgICAgYWNjb3VudEluZGV4LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBpbmRleC5maW5kSW5kZXgoYSA9PiBhLm5hbWUgPT09IG5hbWUpO1xuICAgIH1cblxuICAgIF9nZXRTZWFyY2hBcnJheSgpIHtcbiAgICAgICAgbGV0IHthY2NvdW50SW5kZXh9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAvLyBGb3IgYWxsIG9iamVjdHMgaW4gc2VhcmNoX2FycmF5LCBxdWVyeSB3aXRoIEZldGNoQ2hhaW5PYmplY3RzXG4gICAgICAgIC8vIFVwZGF0ZSByZXN1bHRzIGZvciBlYWNoIG9iamVjdCB3aXRoIHJldHVybmVkIGRhdGEgYW5kIHJlbW92ZSBmcm9tIHNlYXJjaF9hcnJheVxuICAgICAgICAvLyBVcGRhdGUgc2VhcmNoX2FycmF5IGZvciBhbGwgcmVtYWluaW5nIG9iamVjdHMgd2l0aCBpbmNyZWFzZWQgYXR0ZW1wdHMgY291bnRcbiAgICAgICAgLy8gd2hpY2ggaXMgd2hlbiBhY2NvdW50IGRvZXMgbm90IGV4aXN0cywgYnV0IGNhbiBhbHNvIGJlIGlmIG5vZGUgZmFpbGVkIHRvIHNlbmQgcmVzdWx0c1xuICAgICAgICAvLyBiYWNrIGluIHRpbWUsIHNvIHdlIHF1ZXJ5IGF0IGxlYXN0IGBNQVhfTE9PS1VQX0FUVEVNUFRTYCB0aW1lcyBiZWZvcmUgd2Ugc3RvcFxuXG4gICAgICAgIC8vIEZpbHRlciBvdXQgd2hhdCBvYmplY3RzIHdlIHN0aWxsIHJlcXVpcmUgZGF0YSBmb3JcbiAgICAgICAgbGV0IHNlYXJjaF9hcnJheSA9IGFjY291bnRJbmRleFxuICAgICAgICAgICAgLmZpbHRlcihzZWFyY2ggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhc2VhcmNoLmRhdGEgJiYgc2VhcmNoLmF0dGVtcHRzIDwgTUFYX0xPT0tVUF9BVFRFTVBUU1xuICAgICAgICAgICAgICAgICAgICA/IHNlYXJjaC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKHNlYXJjaCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaC5uYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaF9hcnJheTtcbiAgICB9XG5cbiAgICBfZmV0Y2hBY2NvdW50cygpIHtcbiAgICAgICAgbGV0IHthY2NvdW50SW5kZXh9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgc2VhcmNoX2FycmF5ID0gdGhpcy5fZ2V0U2VhcmNoQXJyYXkoKTtcblxuICAgICAgICBpZiAoc2VhcmNoX2FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChfX0RFVl9fKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9va2VkIGZvciBcIiArIHNlYXJjaF9hcnJheS5sZW5ndGggKyBcIiBhY2NvdW50c1wiKTtcbiAgICAgICAgICAgIEZldGNoQ2hhaW5PYmplY3RzKFxuICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0QWNjb3VudCxcbiAgICAgICAgICAgICAgICBzZWFyY2hfYXJyYXksXG4gICAgICAgICAgICAgICAgMzAwMCxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKS50aGVuKGFjY291bnRzID0+IHtcbiAgICAgICAgICAgICAgICBhY2NvdW50cy5mb3JFYWNoKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iamVjdEluZGV4ID0gdGhpcy5fZ2V0SW5kZXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3BvcHVsYXRlQWNjb3VudEluZGV4KGFjY291bnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4W29iamVjdEluZGV4XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hfYXJyYXkuc3BsaWNlKGFjY291bnQuZ2V0KFwibmFtZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlYXJjaF9hcnJheS5mb3JFYWNoKGFjY291bnRfdG9fZmluZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmplY3RJbmRleCA9IHRoaXMuX2dldEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF90b19maW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFtvYmplY3RJbmRleF0uYXR0ZW1wdHMrKztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4OiBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFJ1biBhbm90aGVyIGZldGNoIG9mIGFjY291bnRzIGlmIGRhdGEgaXMgc3RpbGwgbWlzc2luZ1xuICAgICAgICAgICAgICAgIGxldCBpc0RhdGFNaXNzaW5nID0gdGhpcy5zdGF0ZS5hY2NvdW50SW5kZXguZmluZChcbiAgICAgICAgICAgICAgICAgICAgYSA9PiAhYS5kYXRhICYmIGEuYXR0ZW1wdHMgPCBNQVhfTE9PS1VQX0FUVEVNUFRTXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0RhdGFNaXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmV0Y2hBY2NvdW50cygpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3BvcHVsYXRlQWNjb3VudEluZGV4KGFjY291bnRSZXN1bHQpIHtcbiAgICAgICAgbGV0IHtteUFjdGl2ZUFjY291bnRzLCBjb250YWN0c30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIFNob3VsZCBub3QgaGFwcGVuLCBqdXN0IGZhaWxzYWZlXG4gICAgICAgIGlmICghYWNjb3VudFJlc3VsdCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gYWNjb3VudFJlc3VsdC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICBsZXQgYWNjb3VudFN0YXR1cyA9IENoYWluU3RvcmUuZ2V0QWNjb3VudE1lbWJlclN0YXR1cyhhY2NvdW50UmVzdWx0KTtcbiAgICAgICAgbGV0IGFjY291bnRUeXBlID0gdGhpcy5nZXRJbnB1dFR5cGUoYWNjb3VudE5hbWUpO1xuXG4gICAgICAgIGxldCBzdGF0dXNMYWJlbCA9ICFhY2NvdW50VXRpbHMuaXNLbm93blNjYW1tZXIoYWNjb3VudE5hbWUpXG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubWVtYmVyLlwiICsgYWNjb3VudFN0YXR1cylcbiAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5tZW1iZXIuc3VzcGVjdGVkX3NjYW1tZXJcIik7XG5cbiAgICAgICAgbGV0IHJpZ2h0TGFiZWwgPVxuICAgICAgICAgICAgYWNjb3VudFR5cGUgPT09IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgPyBcIiNcIiArIGFjY291bnRSZXN1bHQuZ2V0KFwiaWRcIikuc3Vic3RyaW5nKDQpXG4gICAgICAgICAgICAgICAgOiBhY2NvdW50VHlwZSA9PT0gXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudFJlc3VsdC5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIDogYWNjb3VudFR5cGUgPT0gXCJwdWJrZXlcIiAmJiB0aGlzLnByb3BzLmFsbG93UHViS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiUHVibGljIEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDAsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGFjY291bnRSZXN1bHQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogYWNjb3VudFR5cGUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBhY2NvdW50U3RhdHVzLFxuICAgICAgICAgICAgICAgIGlzT3duQWNjb3VudDogbXlBY3RpdmVBY2NvdW50cy5oYXMoYWNjb3VudE5hbWUpLFxuICAgICAgICAgICAgICAgIGlzQ29udGFjdDogY29udGFjdHMuaGFzKGFjY291bnROYW1lKSxcbiAgICAgICAgICAgICAgICBpc0tub3duU2NhbW1lcjogYWNjb3VudFV0aWxzLmlzS25vd25TY2FtbWVyKGFjY291bnROYW1lKSxcbiAgICAgICAgICAgICAgICBzdGF0dXNMYWJlbDogc3RhdHVzTGFiZWwsXG4gICAgICAgICAgICAgICAgcmlnaHRMYWJlbDogcmlnaHRMYWJlbCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRVdGlscy5pc0tub3duU2NhbW1lcihhY2NvdW50TmFtZSkgfHwgIWFjY291bnRSZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuZWdhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjYW4gYmUgdXNlZCBpbiBwYXJlbnQgY29tcG9uZW50OiB0aGlzLnJlZnMuYWNjb3VudF9zZWxlY3Rvci5nZXRBY2NvdW50KClcbiAgICBnZXRBY2NvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY2NvdW50O1xuICAgIH1cblxuICAgIGdldEVycm9yKCkge1xuICAgICAgICBsZXQge2FjY291bnQsIGFjY291bnROYW1lLCBlcnJvciwgdHlwZWFoZWFkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGlucHV0VHlwZSA9IGFjY291bnROYW1lID8gdGhpcy5nZXRJbnB1dFR5cGUoYWNjb3VudE5hbWUpIDogbnVsbDtcblxuICAgICAgICBpZiAoIXR5cGVhaGVhZCkge1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50ICYmIGFjY291bnROYW1lICYmIGlucHV0VHlwZSAhPT0gXCJwdWJrZXlcIikge1xuICAgICAgICAgICAgICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5lcnJvcnMudW5rbm93blwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFR5cGVhaGVhZCBjYW4ndCBzZWxlY3QgYW4gdW5rbm93biBhY2NvdW50IVxuICAgICAgICAgICAgLy8gaWYgKFxuICAgICAgICAgICAgLy8gICAgICEoYWxsb3dQdWJLZXkgJiYgaW5wdXRUeXBlID09PSBcInB1YmtleVwiKSAmJlxuICAgICAgICAgICAgLy8gICAgICFlcnJvciAmJlxuICAgICAgICAgICAgLy8gICAgIGFjY291bnROYW1lICYmXG4gICAgICAgICAgICAvLyAgICAgIWFjY291bnRcbiAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgIC8vICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLnVua25vd25cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yICYmIGFjY291bnQgJiYgIWlucHV0VHlwZSlcbiAgICAgICAgICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5lcnJvcnMuaW52YWxpZFwiKTtcblxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0SW5wdXRUeXBlKHZhbHVlKSB7XG4gICAgICAgIC8vIE9LXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodmFsdWVbMF0gPT09IFwiI1wiICYmIHV0aWxzLmlzX29iamVjdF9pZChcIjEuMi5cIiArIHZhbHVlLnN1YnN0cmluZygxKSkpXG4gICAgICAgICAgICByZXR1cm4gXCJpZFwiO1xuICAgICAgICBpZiAoQ2hhaW5WYWxpZGF0aW9uLmlzX2FjY291bnRfbmFtZSh2YWx1ZSwgdHJ1ZSkpIHJldHVybiBcIm5hbWVcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWxsb3dQdWJLZXkgJiYgUHVibGljS2V5LmZyb21QdWJsaWNLZXlTdHJpbmcodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuIFwicHVia2V5XCI7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldFZlcmlmaWVkQWNjb3VudE5hbWUoZSkge1xuICAgICAgICBsZXQge2FsbG93VXBwZXJjYXNlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGU7XG4gICAgICAgIH0gZWxzZSBpZiAoZSAmJiBlLnRhcmdldCkge1xuICAgICAgICAgICAgdmFsdWUgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFsbG93VXBwZXJjYXNlKSB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gSWYgcmVnZXggbWF0Y2hlcyBeLiojL2FjY291bnQvYWNjb3VudC1uYW1lLy4qJCwgcGFyc2Ugb3V0IGFjY291bnQtbmFtZVxuICAgICAgICBsZXQgX3ZhbHVlID0gdmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIikubWF0Y2goLyg/OlxcL2FjY291bnRcXC8pKC4qKS8pO1xuICAgICAgICBpZiAoX3ZhbHVlKSB2YWx1ZSA9IF92YWx1ZVsxXTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgX25vdGlmeU9uQ2hhbmdlKHNlbGVjdGVkQWNjb3VudE5hbWUsIGlucHV0VHlwZSkge1xuICAgICAgICBsZXQge3Byb3BzfSA9IHRoaXM7XG5cbiAgICAgICAgLy8gQ2xlYXIgc2VsZWN0ZWQgYWNjb3VudCB3aGVuIHdlIGhhdmUgbmV3IGlucHV0IGRhdGEgaWYgd2UgcmVxdWlyZSBhbiBhY3RpdmUgc2VsZWN0XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGlucHV0VHlwZSA9PSBcImlucHV0XCIgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZWFoZWFkICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlcXVpcmVBY3RpdmVTZWxlY3RcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoISFwcm9wcy5vbkFjY291bnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25BY2NvdW50Q2hhbmdlZChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghIXByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSB0aGlzLmdldFZlcmlmaWVkQWNjb3VudE5hbWUoc2VsZWN0ZWRBY2NvdW50TmFtZSk7XG5cbiAgICAgICAgLy8gU3luY2hyb25vdXMgb25DaGFuZ2UgZm9yIGlucHV0IGNoYW5nZVxuICAgICAgICBpZiAoISFwcm9wcy5vbkNoYW5nZSAmJiAoISFhY2NvdW50TmFtZSB8fCBhY2NvdW50TmFtZSA9PT0gXCJcIikpIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGFjY291bnROYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzeW5jaHJvbm91cyBvbkFjY291bnRDaGFuZ2VkIGZvciBjaGVja2luZyBvbiBjaGFpblxuICAgICAgICBpZiAoISFwcm9wcy5vbkFjY291bnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICBGZXRjaENoYWluKFwiZ2V0QWNjb3VudFwiLCBhY2NvdW50TmFtZSwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgICAgW2FjY291bnROYW1lXTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICEhYWNjb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLnByb3BzLnJlcXVpcmVBY3RpdmVTZWxlY3QgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGUgPT0gXCJzZWxlY3RcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0KVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQWNjb3VudENoYW5nZWQoYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TZWxlY3Qoc2VsZWN0ZWRBY2NvdW50TmFtZSkge1xuICAgICAgICB0aGlzLl9ub3RpZnlPbkNoYW5nZShzZWxlY3RlZEFjY291bnROYW1lLCBcInNlbGVjdFwiKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuX2FkZFRvSW5kZXgodGhpcy5nZXRWZXJpZmllZEFjY291bnROYW1lKGUpKTtcbiAgICAgICAgdGhpcy5fbm90aWZ5T25DaGFuZ2UoZSwgXCJpbnB1dFwiKTtcbiAgICB9XG5cbiAgICBvbktleURvd24oZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgICAgIHRoaXMub25BY3Rpb24oZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25BZGRDb250YWN0KCkge1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5hZGRBY2NvdW50Q29udGFjdCh0aGlzLnByb3BzLmFjY291bnROYW1lKTtcbiAgICB9XG5cbiAgICBfb25SZW1vdmVDb250YWN0KCkge1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5yZW1vdmVBY2NvdW50Q29udGFjdCh0aGlzLnByb3BzLmFjY291bnROYW1lKTtcbiAgICB9XG5cbiAgICBvbkFjdGlvbihlKSB7XG4gICAgICAgIGxldCB7b25BY3Rpb24sIGRpc2FibGVBY3Rpb25CdXR0b24sIGFjY291bnQsIGFjY291bnROYW1lfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmdldEVycm9yKCkgJiYgb25BY3Rpb24gJiYgIWRpc2FibGVBY3Rpb25CdXR0b24pIHtcbiAgICAgICAgICAgIGlmIChhY2NvdW50KSBvbkFjdGlvbihhY2NvdW50KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKSA9PT0gXCJwdWJrZXlcIilcbiAgICAgICAgICAgICAgICBvbkFjdGlvbihhY2NvdW50TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHthY2NvdW50LCBhY2NvdW50TmFtZSwgZGlzYWJsZUFjdGlvbkJ1dHRvbn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBzZWFyY2hJblByb2dyZXNzID0gdGhpcy5zdGF0ZS5hY2NvdW50SW5kZXguZmluZChcbiAgICAgICAgICAgIGEgPT4gIWEuZGF0YSAmJiBhLmF0dGVtcHRzIDwgTUFYX0xPT0tVUF9BVFRFTVBUU1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxvY2tlZFN0YXRlID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9ja2VkICE9PSBudWxsID8gdGhpcy5zdGF0ZS5sb2NrZWQgOiB0aGlzLnByb3BzLmxvY2tlZDtcblxuICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLmdldEVycm9yKCksXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLFxuICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LFxuICAgICAgICAgICAgZGlzYWJsZWRBY3Rpb24sXG4gICAgICAgICAgICBkaXNhYmxlZElucHV0LFxuICAgICAgICAgICAgZWRpdGFibGVJbnB1dCxcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXM7XG5cbiAgICAgICAgZWRpdGFibGVJbnB1dCA9ICEhbG9ja2VkU3RhdGVcbiAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5lZGl0YWJsZSAhPSBudWxsXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmVkaXRhYmxlXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgZGlzYWJsZWRJbnB1dCA9ICEhbG9ja2VkU3RhdGVcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLmRpc2FibGVkICE9IG51bGxcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBTZWxlY3RlZCBBY2NvdW50XG4gICAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgICAgICBsZXQgb2JqZWN0SW5kZXggPSB0aGlzLl9nZXRJbmRleChhY2NvdW50LmdldChcIm5hbWVcIiksIGFjY291bnRJbmRleCk7XG5cbiAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudCA9XG4gICAgICAgICAgICAgICAgYWNjb3VudEluZGV4ICYmIGFjY291bnRJbmRleFtvYmplY3RJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzYWJsZWRBY3Rpb24gPVxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICBhY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQudHlwZSA9PT0gXCJwdWJrZXlcIilcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgIGVycm9yIHx8XG4gICAgICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9uO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LmlzT3duQWNjb3VudCkge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5vd25fYWNjb3VudFwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAgZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ1c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC5pc0tub3duU2NhbW1lcikge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5zY2FtX2FjY291bnRcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIHJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cIndhcm5pbmdcIiB0aGVtZT1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQuaXNDb250YWN0KSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLmZvbGxvd191c2VyXCIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblJlbW92ZUNvbnRhY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAgZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJzdGFyXCIgdGhlbWU9XCJmaWxsZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY291bnQpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuZm9sbG93X3VzZXJfYWRkXCIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkFkZENvbnRhY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJzdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlYWhlYWQpIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zQ29udGFpbmVyID0gYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyIGFjY291bnRzIGJhc2VkIG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gRXhjbHVkZSB3aXRob3V0IHJlc3VsdHMgKG1pc3NpbmcgY2hhaW4gZGF0YSBhdCB0aGUgbW9tZW50KVxuICAgICAgICAgICAgICAgICAgICAvLyAtIEV4Y2x1ZGVkIGFjY291bnRzIChieSBwcm9wcylcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIHVzZXJzIG93biBhY2NvdW50cyAoaXNPd25BY2NvdW50KVxuICAgICAgICAgICAgICAgICAgICAvLyAtIEluY2x1ZGUgdXNlcnMgY29udGFjdHMgKGlzQ29udGFjdCkgdW5sZXNzIGl0J3MgYSBwcmV2aW91c2x5IGxvY2tlZCBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAvLyAtIEluY2x1ZGUgY3VycmVudCBpbnB1dFxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5leGNsdWRlQWNjb3VudHMuaW5kZXhPZihhY2NvdW50LmlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZGF0YS5pc093bkFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5sb2NrZWQgJiYgYWNjb3VudC5kYXRhLmlzQ29udGFjdCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY2NvdW50TmFtZSAmJiBhY2NvdW50LmRhdGEubmFtZSA9PT0gYWNjb3VudE5hbWUpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmRhdGEuaXNPd25BY2NvdW50IDwgYi5kYXRhLmlzT3duQWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGF0YS5uYW1lID4gYi5kYXRhLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2FjY291bnQuZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudC5kYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjY291bnQuZGF0YS5kaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5pc093bkFjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ1c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLmlzQ29udGFjdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuaXNLbm93blNjYW1tZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ3YXJuaW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuc3RhdHVzTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyID0gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25MYWJlbFByb3A9e1widmFsdWVcIn1cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25TZWxlY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuc2VhcmNoXCIpfVxuICAgICAgICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdsb2JhbC5ub3RfZm91bmRcIil9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEFjY291bnQgPyBzZWxlY3RlZEFjY291bnQubmFtZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZElucHV0ID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIgPSAoXG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQudHlwZSA9PT0gXCJwdWJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImxvd2VyY2FzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhbnQ6IFwiaW5pdGlhbFwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmVkaXRhYmxlID8gXCJ1c2VybmFtZVwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5hY2NvdW50TmFtZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50Lm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInVzZXJfaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmVkaXRhYmxlIHx8ICEhdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMudGFiSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhIWVkaXRhYmxlSW5wdXQgPyBlZGl0YWJsZUlucHV0LnRvU3RyaW5nKCkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWFkT25seT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhIWVkaXRhYmxlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICghZWRpdGFibGVJbnB1dCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY2NvdW50SW1hZ2VDb250YWluZXIgPSB0aGlzLnByb3BzXG4gICAgICAgICAgICAuaGlkZUltYWdlID8gbnVsbCA6IHNlbGVjdGVkQWNjb3VudCAmJlxuICAgICAgICBzZWxlY3RlZEFjY291bnQuYWNjb3VudFR5cGUgPT09IFwicHVia2V5XCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwia2V5XCIgdGl0bGU9XCJpY29ucy5rZXlcIiBzaXplPVwiNHhcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QWNjb3VudEltYWdlXG4gICAgICAgICAgICAgICAgc2l6ZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuc2l6ZSB8fCAzMyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMuc2l6ZSB8fCAzM1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYWNjb3VudD17c2VsZWN0ZWRBY2NvdW50ID8gc2VsZWN0ZWRBY2NvdW50Lm5hbWUgOiBudWxsfVxuICAgICAgICAgICAgICAgIGN1c3RvbV9pbWFnZT17bnVsbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGxvY2tlZFN0YXRlQ29udGFpbmVyID0gIWxvY2tlZFN0YXRlID8gbnVsbCA6IFwiXCI7XG5cbiAgICAgICAgbGV0IHJpZ2h0TGFiZWxDb250YWluZXIgPVxuICAgICAgICAgICAgIXRoaXMucHJvcHMubGFiZWwgfHwgIXNlbGVjdGVkQWNjb3VudCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItYXJlYVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmhpZGVJbWFnZSA/IFwiIG5vLW1hcmdpblwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0LWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmlzQ29udGFjdCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudC5pc093bkFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInBvc2l0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudC5pc0tub3duU2NhbW1lciA/IFwibmVnYXRpdmVcIiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogLTMwfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nUmlnaHQ6IFwiMC41cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRBY2NvdW50LnJpZ2h0TGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQWNjb3VudC5kaXNwbGF5VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rZWRfc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBGb3JtV3JhcHBlciA9IHRoaXMucHJvcHMubm9Gb3JtID8gUmVhY3QuRnJhZ21lbnQgOiBGb3JtO1xuICAgICAgICBjb25zdCBmb3JtV3JhcHBlclByb3BzID0gdGhpcy5wcm9wcy5ub0Zvcm1cbiAgICAgICAgICAgID8ge31cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgIGxheW91dDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50b29sdGlwfVxuICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtV3JhcHBlciB7Li4uZm9ybVdyYXBwZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e2Vycm9yID8gXCJlcnJvclwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9e2Vycm9yID8gZXJyb3IgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmlnaHRMYWJlbENvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZUhSICYmIDxociAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudEltYWdlQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hJblByb2dyZXNzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwibG9hZGluZ1wiIHN0eWxlPXt7cGFkZGluZzogMTB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NrZWRTdGF0ZUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vbkFjdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLnJlcXVpcmVkX2lucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdsb2JhbC5maWVsZF90eXBlLmFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjdGlvbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5hY3Rpb25fbGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Gb3JtV3JhcHBlcj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFjY291bnRTZWxlY3Rvckxpc3RpbmcgPSBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRTZWxlY3Rvckxpc3RpbmcpO1xuXG5BY2NvdW50U2VsZWN0b3JMaXN0aW5nID0gY29ubmVjdChcbiAgICBBY2NvdW50U2VsZWN0b3JMaXN0aW5nLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzOiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzOiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50Q29udGFjdHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50U2VsZWN0b3JMaXN0aW5nO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUEyVUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUFBO0FBUUE7QUFmQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFaQTtBQVZBO0FBMkJBO0FBN0NBO0FBZ0RBO0FBQ0E7QUE3WEE7QUE2WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4WUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBSEE7QUFIQTtBQUxBO0FBREE7QUFvQkE7QUFyQkE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBU0E7QUFUQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFBQTtBQWZBO0FBK0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFBQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQU5BO0FBREE7QUFBQTtBQUFBO0FBWUE7QUE1REE7QUErREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBZ0JBO0FBbkJBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQWJBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBUkE7QUFBQTtBQWlCQTtBQW5CQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBeENBO0FBMUdBO0FBd0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBTkE7QUFTQTtBQVZBO0FBV0E7QUFDQTtBQVpBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBTkE7QUFlQTtBQWZBO0FBREE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQTdMQTtBQU5BO0FBakNBO0FBREE7QUFEQTtBQURBO0FBRkE7QUFxUEE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBelVBO0FBQ0E7QUE0WUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUxBO0FBV0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFIQTtBQVpBO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQUE7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBbEJBO0FBcUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBTEE7QUE5Q0E7QUF5REE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQTFEQTtBQTFCQTtBQWZBO0FBK0dBOzs7O0FBNUlBO0FBQ0E7QUE4SUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFYQTtBQUNBO0FBY0E7Ozs7Ozs7O0FDNUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWpCQTtBQTZCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUE5QkE7QUFtQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWVBO0FBR0E7QUFDQTtBQXBCQTtBQUFBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFjQTtBQUNBO0FBREE7QUFkQTtBQU5BO0FBMEJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFUQTtBQWFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFuQkE7QUErQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7QUFEQTtBQU9BO0FBUEE7QUFTQTtBQWJBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBWEE7QUFyREE7QUFqQkE7QUEvQkE7QUFKQTtBQTRIQTs7OztBQXJPQTtBQUNBO0FBdU9BOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFDQTtBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOzs7QUFpQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFIQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBR0E7QUFYQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFWQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBL0JBO0FBc0NBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQWhCQTtBQU5BO0FBQ0E7QUEwQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBREE7QUFIQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFWQTtBQVRBO0FBWEE7QUFEQTtBQUxBO0FBb0RBOzs7O0FBdnJCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQURBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQUNBO0FBaXFCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFUQTtBQUNBO0FBWUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==