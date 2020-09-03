(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[39],{

/***/ 3215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3216);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListingPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(509);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
/* harmony import */ var _CoinCardListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3218);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(605);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2961);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1866);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(745);
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.get_donate_tokens" }),
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
                    )
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

        _this.getContent_listed = function () {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "listingTable" },
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
                                { className: "listingTable__cell listingTableStatus" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.table.status" })
                            )
                        )
                    )
                ),
                _this.getCoinsList_listed()
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

        _this.getCoinsList_listed = function () {
            var coins = Object(_branding__WEBPACK_IMPORTED_MODULE_5__["getListedCoins"])();
            var sortedCoins = coins.sort(function (a, b) {
                return b.votes - a.votes;
            });
            return sortedCoins.map(function (coin, i) {
                coin.votes_for_percent = coin.votes < coin.goal ? coin.votes : coin.goal;
                coin.status = "done";
                coin.listed = true;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CoinCardListing__WEBPACK_IMPORTED_MODULE_4__["default"], { key: i, rank: i + 1, coin: coin });
            });
        };

        _this.state = {
            ListingNotice1Informed: false,
            coins: [],
            updating: true
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
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            setInterval(function () {
                return _this2._getBalances();
            }, 1000);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (nextState.updating == false) return true;
            return false;
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
                                                this.state.updating === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
                                    { title: "listing.listed" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "label",
                                        { className: "horizontal", tabIndex: 1 },
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
                                                this.state.updating === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "div",
                                                    {
                                                        style: { margin: "10px" }
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.loading" }),
                                                    " "
                                                ) : this.getContent_listed()
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
                                        tabIndex: 2
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
        key: "_getBalances",
        value: function _getBalances() {
            var _this3 = this;

            var coins = Object(_branding__WEBPACK_IMPORTED_MODULE_5__["getListingCoins"])();

            if (this.state.coins.length !== 0) coins = this.state.coins;

            this.setState({
                coins: coins,
                updating: true
            });
            coins.forEach(function (coin) {
                Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["FetchChain"])("getAsset", "DONATE").then(function (assetInfo) {
                    bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__["Apis"].instance().db_api().exec("get_named_account_balances", [coin.account, [assetInfo.get("id")]]).then(function (res) {
                        var coins = _this3.state.coins;
                        var x = coins.find(function (i) {
                            return i.account === coin.account;
                        });
                        x.votes = res[0]["amount"] / Math.pow(10, assetInfo.get("precision"));
                        _this3.setState({
                            coins: coins
                        });
                    }).then(function () {
                        _this3.setState({
                            updating: false
                        });
                    });
                });
            });
        }
    }]);

    return ListingPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ListingPage);

/***/ }),

/***/ 3218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3219);
/* harmony import */ var _DonateSendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3222);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1906);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(573);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(618);
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
                            coin.listed ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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
                        coin.listed ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
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

/***/ 3219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return DonutChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3220);
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

/***/ 3222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2144);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2143);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(573);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1906);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(440);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2146);
/* harmony import */ var _AccountSelectorListing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3223);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2157);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2166);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(605);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(618);


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

/***/ 3223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(591);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1906);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2161);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(573);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(440);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2023);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2024);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1914);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(590);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(850);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2160);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy4wY2M0YzZmN2YxYjg4OWNmODZiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0xpc3RpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Db2luQ2FyZExpc3RpbmcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbnV0Q2hhcnQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbmF0ZVNlbmRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvQWNjb3VudFNlbGVjdG9yTGlzdGluZy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9MaXN0aW5nUGFnZS5jc3NcIjtcblxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7RmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmltcG9ydCBDb2luQ2FyZExpc3RpbmcgZnJvbSBcIi4vQ29pbkNhcmRMaXN0aW5nXCI7XG5pbXBvcnQge2dldExpc3RpbmdDb2lucywgZ2V0TGlzdGVkQ29pbnN9IGZyb20gXCIuLi8uLi9icmFuZGluZ1wiO1xuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcblxuY2xhc3MgTGlzdGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgTGlzdGluZ05vdGljZTFJbmZvcm1lZDogZmFsc2UsXG4gICAgICAgICAgICBjb2luczogW10sXG4gICAgICAgICAgICB1cGRhdGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uU3VibWl0UmVxdWVzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG51bGx9KTtcblxuICAgICAgICBsZXQgbGlua19ydSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvMWxKbnZ1ZmM5NUNEaDJ6MU50cTdpQ1NFczNvRDd0UEc0bmxqS1RZWWV6UXdcIjtcbiAgICAgICAgbGV0IGxpbmtfZW4gPVxuICAgICAgICAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzFYMlBndUFhUnp4bFhaR0xBYXJHY21OZC1MYkpDeThsY29NQmNRakZTUTVrXCI7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRfbG9jYWxlID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKTtcblxuICAgICAgICB3aW5kb3cub3BlbihjdXJyZW50X2xvY2FsZSA9PSBcInJ1XCIgPyBsaW5rX3J1IDogbGlua19lbiwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgb25MaXN0aW5nTm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIExpc3RpbmdOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuX2dldEJhbGFuY2VzKCksIDEwMDApO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAobmV4dFN0YXRlLnVwZGF0aW5nID09IGZhbHNlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRfbG9jYWxlID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKTtcblxuICAgICAgICBsZXQgYWdyZWVtZW50X3J1ID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ3LWPQvtCz0LvQsNGI0LXQvdC40LUt0L7QsS3QvtC60LDQt9Cw0L3QuNC4LdGD0YHQu9GD0LMt0YjQu9GO0LfQsFwiO1xuICAgICAgICBsZXQgYWdyZWVtZW50X2VuID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ1LWdhdGV3YXktc2VydmljZS1hZ3JlZW1lbnRcIjtcblxuICAgICAgICBsZXQgUnVERVggPSA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+UnVERVg8L3NwYW4+O1xuICAgICAgICBsZXQgRE9OQVRFID0gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRvPXtcIi9hc3NldC9ET05BVEVcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIHsvKlRhYnMqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgc21hbGwtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlVGFiPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nPVwicGVybWlzc2lvbnNUYWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzQ2xhc3M9XCJhY2NvdW50LW92ZXJ2aWV3IGJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudENsYXNzPVwicGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRE9OQVRFIFBST0dSRVNTKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJsaXN0aW5nLmRvbmF0ZV9wcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhvcml6b250YWxcIiB0YWJJbmRleD17MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIycmVtIDhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLXVwLTEgbWVkaXVtLXVwLTEgbGFyZ2UtdXAtMSBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudXBkYXRpbmcgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMTBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcubG9hZGluZ1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMSVNURUQqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImxpc3RpbmcubGlzdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiIHRhYkluZGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtdXAtMSBtZWRpdW0tdXAtMSBsYXJnZS11cC0xIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS51cGRhdGluZyA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5sb2FkaW5nXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29udGVudF9saXN0ZWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJsaXN0aW5nLmFkZF9jb2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgaGVscC1jb250ZW50LWxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMuaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0My50MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQzLnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9tYXJrZXQvRE9OQVRFX1JVREVYLkJUQ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDMuZ2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDQudDFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcIi9hc3NldC9ET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvYXNzZXQvRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NC50M1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMXB4IHNvbGlkICMwMGE5ZTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNHB4IDNweCAzcHggNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NS50MVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvYXNzZXQvRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ1LnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NS50M1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLmhlYWRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9sb2NhbGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWdyZWVtZW50X3J1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZ3JlZW1lbnRfZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1wiL2Fzc2V0L0RPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET05BVEVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuTGlzdGluZ05vdGljZTFJbmZvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MaXN0aW5nTm90aWNlMUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3Rpbmcubm90aWNlX2luZm9ybWVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibGlzdGluZ19idXR0b25cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0UmVxdWVzdC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5zdWJtaXRfcmVxdWVzdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLmVuZFwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UnVERVh9IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldEJhbGFuY2VzKCkge1xuICAgICAgICBsZXQgY29pbnMgPSBnZXRMaXN0aW5nQ29pbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2lucy5sZW5ndGggIT09IDApIGNvaW5zID0gdGhpcy5zdGF0ZS5jb2lucztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvaW5zOiBjb2lucyxcbiAgICAgICAgICAgIHVwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFzc2V0XCIsIFwiRE9OQVRFXCIpLnRoZW4oYXNzZXRJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBBcGlzLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKFwiZ2V0X25hbWVkX2FjY291bnRfYmFsYW5jZXNcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgY29pbi5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgW2Fzc2V0SW5mby5nZXQoXCJpZFwiKV1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2lucyA9IHRoaXMuc3RhdGUuY29pbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGNvaW5zLmZpbmQoaSA9PiBpLmFjY291bnQgPT09IGNvaW4uYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB4LnZvdGVzID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNbMF1bXCJhbW91bnRcIl0gL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KDEwLCBhc3NldEluZm8uZ2V0KFwicHJlY2lzaW9uXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW5zOiBjb2luc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0aW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcIi9tYXJrZXQvRE9OQVRFX1JVREVYLkJUQ1wifVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLmdldF9kb25hdGVfdG9rZW5zXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50b2tlblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVJhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnJhbmtcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUFzc2V0TmFtZSBhbGlnbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5hc3NldF9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlVm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5nb2FsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVHb2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuZG9uYXRlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuc3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnByb2dyZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRDb2luc0xpc3QoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBnZXRDb250ZW50X2xpc3RlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVJhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnJhbmtcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUFzc2V0TmFtZSBhbGlnbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5hc3NldF9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlVm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5nb2FsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnN0YXR1c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29pbnNMaXN0X2xpc3RlZCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGdldENvaW5zTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHtjb2luc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgc29ydGVkQ29pbnMgPSBjb2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYi52b3RlcyAtIGEudm90ZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkQ29pbnMubWFwKChjb2luLCBpKSA9PiB7XG4gICAgICAgICAgICBjb2luLnZvdGVzX2Zvcl9wZXJjZW50ID1cbiAgICAgICAgICAgICAgICBjb2luLnZvdGVzIDwgY29pbi5nb2FsID8gY29pbi52b3RlcyA6IGNvaW4uZ29hbDtcbiAgICAgICAgICAgIGNvaW4uc3RhdHVzID0gY29pbi52b3RlcyA8IGNvaW4uZ29hbCA/IFwiY29sbGVjdGluZ1wiIDogXCJkb25lXCI7XG4gICAgICAgICAgICBjb2luLnNvb24gPT0gdHJ1ZSA/IChjb2luLnN0YXR1cyA9IFwid2FpdGluZ1wiKSA6IGNvaW4uc29vbjtcblxuICAgICAgICAgICAgcmV0dXJuIDxDb2luQ2FyZExpc3Rpbmcga2V5PXtpfSByYW5rPXtpICsgMX0gY29pbj17Y29pbn0gLz47XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBnZXRDb2luc0xpc3RfbGlzdGVkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29pbnMgPSBnZXRMaXN0ZWRDb2lucygpO1xuICAgICAgICBsZXQgc29ydGVkQ29pbnMgPSBjb2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYi52b3RlcyAtIGEudm90ZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkQ29pbnMubWFwKChjb2luLCBpKSA9PiB7XG4gICAgICAgICAgICBjb2luLnZvdGVzX2Zvcl9wZXJjZW50ID1cbiAgICAgICAgICAgICAgICBjb2luLnZvdGVzIDwgY29pbi5nb2FsID8gY29pbi52b3RlcyA6IGNvaW4uZ29hbDtcbiAgICAgICAgICAgIGNvaW4uc3RhdHVzID0gXCJkb25lXCI7XG4gICAgICAgICAgICBjb2luLmxpc3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiA8Q29pbkNhcmRMaXN0aW5nIGtleT17aX0gcmFuaz17aSArIDF9IGNvaW49e2NvaW59IC8+O1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nUGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtEb251dENoYXJ0fSBmcm9tIFwiLi9Eb251dENoYXJ0XCI7XG5pbXBvcnQgU2VuZE1vZGFsIGZyb20gXCIuL0RvbmF0ZVNlbmRNb2RhbFwiO1xuaW1wb3J0IHtJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIENvaW5DYXJkTGlzdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuY29pbi52b3RlcyA9IDA7XG4gICAgfVxuXG4gICAgdHJpZ2dlclNlbmQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZF9hc3NldDogYXNzZXR9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kX21vZGFsKSB0aGlzLnNlbmRfbW9kYWwuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmcm9tX25hbWUgPSBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgbGV0IHtjb2lufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19yb3dcIj5cbiAgICAgICAgICAgICAgICA8U2VuZE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF9saXN0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuc2VuZF9tb2RhbCA9IGU7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGZyb21fbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0b19uYW1lPXtjb2luLmFjY291bnQgPyBjb2luLmFjY291bnQgOiBmcm9tX25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkPXtcIjEuMy41NTg4XCJ9XG4gICAgICAgICAgICAgICAgICAgIHRpY2tlcj17Y29pbi50aWNrZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVJhbmsgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmFua31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlTG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogNDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31jb2lucy1sb2dvLyR7Y29pbi50aWNrZXIudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVBc3NldE5hbWUgYWxpZ24tbGVmdCBub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5uYW1lfSAoe2NvaW4udGlja2VyfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5zb29uID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibGlzdGluZy50YWJsZS5jb21pbmdfc29vblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCIsIGNvbG9yOiBcImdvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlR29hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9CbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5nb2FsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDt7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5nb2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4ubGlzdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlVm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5kb25hdGVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLnZvdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4uc29vbiA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjb2luLXNvb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyBEb25hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudHJpZ2dlclNlbmQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy41NTg4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy50cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IERvbmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuc3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDt7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImxpc3RpbmcudGFibGUuXCIgKyBjb2luLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5saXN0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9udXRDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGVzPXtjb2luLnZvdGVzX2Zvcl9wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWw9e2NvaW4uZ29hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Db2luQ2FyZExpc3RpbmcgPSBjb25uZWN0KFxuICAgIENvaW5DYXJkTGlzdGluZyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncyxcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29pbkNhcmRMaXN0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9Eb251dENoYXJ0LmNzc1wiO1xuXG5leHBvcnQgY29uc3QgRG9udXRDaGFydCA9IHByb3BzID0+IHtcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgocHJvcHMudm90ZXMgLyBwcm9wcy5nb2FsKSAqIDEwMCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiIGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb251dC1ob2xlXCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0LXJpbmdcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwibGlnaHRncmF5XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9udXQtc2VnbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlRGFzaGFycmF5OiBgJHtwZXJjZW50fSAxMDBgfX1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldD1cIjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zaWRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJjZW50XCI+e3BlcmNlbnQgKyBcIiVcIn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7U2VuZE1vZGFsfSBmcm9tIFwiLi4vTW9kYWwvU2VuZE1vZGFsXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JTdHlsZUd1aWRlXCI7XG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yTGlzdGluZyBmcm9tIFwiLi9BY2NvdW50U2VsZWN0b3JMaXN0aW5nXCI7XG5pbXBvcnQgRmVlQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9GZWVBc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQge2lzTmFOfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQge0Zvcm0sIE1vZGFsLCBCdXR0b24sIFRvb2x0aXAsIElucHV0fSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQge2dldFdhbGxldE5hbWV9IGZyb20gXCIuLi8uLi9icmFuZGluZ1wiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuXG5jbGFzcyBEb25hdGVTZW5kTW9kYWwgZXh0ZW5kcyBTZW5kTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC50b19uYW1lICE9PSB0aGlzLnN0YXRlLnRvX25hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvX25hbWU6IG5wLnRvX25hbWUgPyBucC50b19uYW1lIDogXCJcIixcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50OiBucC50b19uYW1lXG4gICAgICAgICAgICAgICAgICAgID8gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KG5wLnRvX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwcm9wb3NlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgYXNzZXRfaWQsXG4gICAgICAgICAgICBwcm9wb3NlX2FjY291bnQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b19uYW1lLFxuICAgICAgICAgICAgZnJvbV9uYW1lLFxuICAgICAgICAgICAgbWVtbyxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvcixcbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGZyb21fbXlfYWNjb3VudCA9XG4gICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoZnJvbV9hY2NvdW50KSB8fFxuICAgICAgICAgICAgZnJvbV9uYW1lID09PSB0aGlzLnByb3BzLnBhc3N3b3JkQWNjb3VudDtcbiAgICAgICAgbGV0IGZyb21fZXJyb3IgPVxuICAgICAgICAgICAgZnJvbV9hY2NvdW50ICYmICFmcm9tX215X2FjY291bnQgJiYgIXByb3Bvc2UgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IHthc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpICYmICFmcm9tX2Vycm9yKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgICAgICBsZXQgX2Vycm9yID0gdGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgPyBcImhhcy1lcnJvclwiIDogXCJcIjtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0X3R5cGVzWzBdKTtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldCA/IGFzc2V0LmdldChcImlkXCIpIDogYXNzZXRfdHlwZXNbMF07XG5cbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFRvdGFsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17X2Vycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GdW5kc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb3Bvc2VfaW5jb21wbGV0ZSA9IHByb3Bvc2UgJiYgIXByb3Bvc2VfYWNjb3VudDtcbiAgICAgICAgY29uc3QgYW1vdW50VmFsdWUgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoYW1vdW50LCAvLC9nLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpc0Ftb3VudFZhbGlkID0gYW1vdW50VmFsdWUgJiYgIWlzTmFOKGFtb3VudFZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XG4gICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdG9fYWNjb3VudCB8fFxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcbiAgICAgICAgICAgICFhc3NldCB8fFxuICAgICAgICAgICAgZnJvbV9lcnJvciB8fFxuICAgICAgICAgICAgcHJvcG9zZV9pbmNvbXBsZXRlIHx8XG4gICAgICAgICAgICBiYWxhbmNlRXJyb3IgfHxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0b19hY2NvdW50LmdldChcImlkXCIpO1xuXG4gICAgICAgIGxldCB0YWJJbmRleCA9IHRoaXMucHJvcHMudGFiSW5kZXg7IC8vIENvbnRpbnVlIHRhYkluZGV4IG9uIHByb3BzIGNvdW50XG5cbiAgICAgICAgcmV0dXJuICF0aGlzLnN0YXRlLm9wZW4gPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF93cmFwcGVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2hpZGRlbiB8fCAhdGhpcy5zdGF0ZS5vcGVuID8gXCJoaWRlXCIgOiBcIlwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTdWJtaXROb3RWYWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByb3Bvc2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2Zlci5zZW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogXCIxOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpc3RpbmcubW9kYWxfaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibGlzdGluZy5tb2RhbC5uZWVkX2J1eV9kb25hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJsaXN0aW5nLm1vZGFsLmhlYWRlcjJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0X25hbWU9e2dldFdhbGxldE5hbWUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpY2tlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmdWxsLXdpZHRoLXdyYXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yTGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Zyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZnJvbUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uRnJvbUFjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbkFjdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci50b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RvX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dG9fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uVG9BY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfdHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYXNzZXRzPXthc3NldF90eXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOYU49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBEb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPERvbmF0ZVNlbmRNb2RhbCB7Li4udGhpcy5wcm9wc30gcmVmPXt0aGlzLnByb3BzLnJlZkNhbGxiYWNrfSAvPjtcbiAgICB9XG59XG5cbkRvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyID0gY29ubmVjdChcbiAgICBEb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg6IHByb3BzLnRhYkluZGV4IHx8IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gICAgQ2hhaW5TdG9yZSxcbiAgICBQdWJsaWNLZXksXG4gICAgQ2hhaW5WYWxpZGF0aW9uLFxuICAgIEZldGNoQ2hhaW4sXG4gICAgRmV0Y2hDaGFpbk9iamVjdHNcbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgYWNjb3VudFV0aWxzIGZyb20gXCJjb21tb24vYWNjb3VudF91dGlsc1wiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBUb29sdGlwLFxuICAgIEJ1dHRvbixcbiAgICBJbnB1dCxcbiAgICBJY29uIGFzIEFudEljb24sXG4gICAgU2VsZWN0LFxuICAgIEZvcm1cbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuXG5jb25zdCBNQVhfTE9PS1VQX0FUVEVNUFRTID0gNTtcbi8qXG4gKiBAYnJpZWYgQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGFuIGFjY291bnQgYnkgbmFtZSBvciAjSURcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBkZXNpZ25lZCB0byBiZSBzdGF0ZWxlc3MgYXMgcG9zc2libGUuICBJdCdzIHByaW1hcnkgcmVzcG9uc2JpbGl0eSBpcyB0b1xuICogbWFuYWdlIHRoZSBsYXlvdXQgb2YgZGF0YSBhbmQgdG8gZmlsdGVyIHRoZSB1c2VyIGlucHV0LlxuICpcbiAqL1xuXG5jbGFzcyBBY2NvdW50U2VsZWN0b3JMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZywgLy8gYSB0cmFuc2xhdGlvbiBrZXkgZm9yIHRoZSBsYWJlbFxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLmVsZW1lbnQsIC8vIHRoZSBlcnJvciBtZXNzYWdlIG92ZXJyaWRlXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgcGxhY2Vob2xkZXIgdGV4dCB0byBiZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBpcyBubyB1c2VyX2lucHV0XG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIGFueSB0aW1lIHVzZXIgaW5wdXQgY2hhbmdlc1xuICAgICAgICBvbkFjY291bnRDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gZXhpc3RpbmcgYWNjb3VudCBpcyBzZWxlY3RlZFxuICAgICAgICBvbkFjdGlvbjogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIGNhbGxlZCB3aGVuIEFkZCBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICBhY2NvdW50TmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGFjY291bnQgc2VsZWN0b3IsIHRoZSBzdHJpbmcgdGhlIHVzZXIgZW50ZXJzXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LCAvLyBhY2NvdW50IG9iamVjdCByZXRyaWV2ZWQgdmlhIEJpbmRUb0NoYWluU3RhdGUgZGVjb3JhdG9yIChub3QgaW5wdXQpXG4gICAgICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLCAvLyB0YWJpbmRleCBwcm9wZXJ0eSB0byBiZSBwYXNzZWQgdG8gaW5wdXQgdGFnXG4gICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b246IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgaXQgaWYgeW91IG5lZWQgdG8gZGlzYWJsZSBhY3Rpb24gYnV0dG9uLFxuICAgICAgICBhbGxvd1VwcGVyY2FzZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSBpdCBpZiB5b3UgbmVlZCB0byBhbGxvdyB1cHBlcmNhc2UgbGV0dGVyc1xuICAgICAgICB0eXBlYWhlYWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBleGNsdWRlQWNjb3VudHM6IFByb3BUeXBlcy5hcnJheSwgLy8gYXJyYXkgb2YgYWNjb3VudHMgdG8gZXhjbHVkZSBmcm9tIHRoZSB0eXBlYWhlYWRcbiAgICAgICAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGVkaXRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbG9ja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcmVxdWlyZUFjdGl2ZVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5vRm9ybTogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVBY2NvdW50czogW10sXG4gICAgICAgIGRpc2FibGVkOiBudWxsLFxuICAgICAgICBlZGl0YWJsZTogbnVsbCxcbiAgICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgcmVxdWlyZUFjdGl2ZVNlbGVjdDogdHJ1ZSwgLy8gU2hvdWxkIG5vdCBiZSBzZXQgdG8gZmFsc2UsIHJlcXVpcmVkIGZvciBmYWxsYmFja1xuICAgICAgICBub0Zvcm06IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjY291bnRJbmRleDogW10sXG4gICAgICAgICAgICBsb2NrZWQ6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBQb3B1bGF0ZSBhY2NvdW50IHNlYXJjaCBhcnJheSwgZmV0Y2ggb25seSBvbmNlXG4gICAgICAgIGlmIChhY2NvdW50TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMubXlBY3RpdmVBY2NvdW50cy5tYXAoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuY29udGFjdHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZCAmJiBhY2NvdW50KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKGFjY291bnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy50eXBlYWhlYWQgJiYgYWNjb3VudE5hbWUpXG4gICAgICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2VkKGFjY291bnROYW1lKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZvY3VzICYmICEhdGhpcy5wcm9wcy5lZGl0YWJsZSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLnVzZXJfaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2UHJvcHMuYWNjb3VudCAmJiBwcmV2UHJvcHMuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKHRoaXMucHJvcHMuYWNjb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYWRkVG9JbmRleChhY2NvdW50TmFtZSwgbm9EZWxheSA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChub0RlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhY2NvdW50TmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkVG9JbmRleChhY2NvdW50TmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2FkZFRoaXNUb0luZGV4KGFjY291bnROYW1lKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFhY2NvdW50TmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbkFjY291bnRMaXN0ID0gYWNjb3VudEluZGV4LmZpbmQoYSA9PiBhLm5hbWUgPT09IGFjY291bnROYW1lKTtcblxuICAgICAgICBpZiAoYWNjb3VudE5hbWUgJiYgIWluQWNjb3VudExpc3QpIHtcbiAgICAgICAgICAgIGFjY291bnRJbmRleC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIGF0dGVtcHRzOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRJbmRleChuYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXguZmluZEluZGV4KGEgPT4gYS5uYW1lID09PSBuYW1lKTtcbiAgICB9XG5cbiAgICBfZ2V0U2VhcmNoQXJyYXkoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgLy8gRm9yIGFsbCBvYmplY3RzIGluIHNlYXJjaF9hcnJheSwgcXVlcnkgd2l0aCBGZXRjaENoYWluT2JqZWN0c1xuICAgICAgICAvLyBVcGRhdGUgcmVzdWx0cyBmb3IgZWFjaCBvYmplY3Qgd2l0aCByZXR1cm5lZCBkYXRhIGFuZCByZW1vdmUgZnJvbSBzZWFyY2hfYXJyYXlcbiAgICAgICAgLy8gVXBkYXRlIHNlYXJjaF9hcnJheSBmb3IgYWxsIHJlbWFpbmluZyBvYmplY3RzIHdpdGggaW5jcmVhc2VkIGF0dGVtcHRzIGNvdW50XG4gICAgICAgIC8vIHdoaWNoIGlzIHdoZW4gYWNjb3VudCBkb2VzIG5vdCBleGlzdHMsIGJ1dCBjYW4gYWxzbyBiZSBpZiBub2RlIGZhaWxlZCB0byBzZW5kIHJlc3VsdHNcbiAgICAgICAgLy8gYmFjayBpbiB0aW1lLCBzbyB3ZSBxdWVyeSBhdCBsZWFzdCBgTUFYX0xPT0tVUF9BVFRFTVBUU2AgdGltZXMgYmVmb3JlIHdlIHN0b3BcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IHdoYXQgb2JqZWN0cyB3ZSBzdGlsbCByZXF1aXJlIGRhdGEgZm9yXG4gICAgICAgIGxldCBzZWFyY2hfYXJyYXkgPSBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgIC5maWx0ZXIoc2VhcmNoID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXNlYXJjaC5kYXRhICYmIHNlYXJjaC5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgICAgICAgICAgICAgPyBzZWFyY2gubmFtZVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChzZWFyY2ggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2gubmFtZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWFyY2hfYXJyYXk7XG4gICAgfVxuXG4gICAgX2ZldGNoQWNjb3VudHMoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHNlYXJjaF9hcnJheSA9IHRoaXMuX2dldFNlYXJjaEFycmF5KCk7XG5cbiAgICAgICAgaWYgKHNlYXJjaF9hcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoX19ERVZfXylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvb2tlZCBmb3IgXCIgKyBzZWFyY2hfYXJyYXkubGVuZ3RoICsgXCIgYWNjb3VudHNcIik7XG4gICAgICAgICAgICBGZXRjaENoYWluT2JqZWN0cyhcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQsXG4gICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LFxuICAgICAgICAgICAgICAgIDMwMDAsXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICkudGhlbihhY2NvdW50cyA9PiB7XG4gICAgICAgICAgICAgICAgYWNjb3VudHMuZm9yRWFjaChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmplY3RJbmRleCA9IHRoaXMuX2dldEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9wb3B1bGF0ZUFjY291bnRJbmRleChhY2NvdW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFtvYmplY3RJbmRleF0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LnNwbGljZShhY2NvdW50LmdldChcIm5hbWVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZWFyY2hfYXJyYXkuZm9yRWFjaChhY2NvdW50X3RvX2ZpbmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0SW5kZXggPSB0aGlzLl9nZXRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfdG9fZmluZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdLmF0dGVtcHRzKys7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleDogYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSdW4gYW5vdGhlciBmZXRjaCBvZiBhY2NvdW50cyBpZiBkYXRhIGlzIHN0aWxsIG1pc3NpbmdcbiAgICAgICAgICAgICAgICBsZXQgaXNEYXRhTWlzc2luZyA9IHRoaXMuc3RhdGUuYWNjb3VudEluZGV4LmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGEgPT4gIWEuZGF0YSAmJiBhLmF0dGVtcHRzIDwgTUFYX0xPT0tVUF9BVFRFTVBUU1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNEYXRhTWlzc2luZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZldGNoQWNjb3VudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZUFjY291bnRJbmRleChhY2NvdW50UmVzdWx0KSB7XG4gICAgICAgIGxldCB7bXlBY3RpdmVBY2NvdW50cywgY29udGFjdHN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlbiwganVzdCBmYWlsc2FmZVxuICAgICAgICBpZiAoIWFjY291bnRSZXN1bHQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGxldCBhY2NvdW50TmFtZSA9IGFjY291bnRSZXN1bHQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgbGV0IGFjY291bnRTdGF0dXMgPSBDaGFpblN0b3JlLmdldEFjY291bnRNZW1iZXJTdGF0dXMoYWNjb3VudFJlc3VsdCk7XG4gICAgICAgIGxldCBhY2NvdW50VHlwZSA9IHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKTtcblxuICAgICAgICBsZXQgc3RhdHVzTGFiZWwgPSAhYWNjb3VudFV0aWxzLmlzS25vd25TY2FtbWVyKGFjY291bnROYW1lKVxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50Lm1lbWJlci5cIiArIGFjY291bnRTdGF0dXMpXG4gICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubWVtYmVyLnN1c3BlY3RlZF9zY2FtbWVyXCIpO1xuXG4gICAgICAgIGxldCByaWdodExhYmVsID1cbiAgICAgICAgICAgIGFjY291bnRUeXBlID09PSBcIm5hbWVcIlxuICAgICAgICAgICAgICAgID8gXCIjXCIgKyBhY2NvdW50UmVzdWx0LmdldChcImlkXCIpLnN1YnN0cmluZyg0KVxuICAgICAgICAgICAgICAgIDogYWNjb3VudFR5cGUgPT09IFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRSZXN1bHQuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICA6IGFjY291bnRUeXBlID09IFwicHVia2V5XCIgJiYgdGhpcy5wcm9wcy5hbGxvd1B1YktleVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgIGF0dGVtcHRzOiAwLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiBhY2NvdW50UmVzdWx0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGFjY291bnRUeXBlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogYWNjb3VudFN0YXR1cyxcbiAgICAgICAgICAgICAgICBpc093bkFjY291bnQ6IG15QWN0aXZlQWNjb3VudHMuaGFzKGFjY291bnROYW1lKSxcbiAgICAgICAgICAgICAgICBpc0NvbnRhY3Q6IGNvbnRhY3RzLmhhcyhhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgaXNLbm93blNjYW1tZXI6IGFjY291bnRVdGlscy5pc0tub3duU2NhbW1lcihhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgc3RhdHVzTGFiZWw6IHN0YXR1c0xhYmVsLFxuICAgICAgICAgICAgICAgIHJpZ2h0TGFiZWw6IHJpZ2h0TGFiZWwsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOlxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50VXRpbHMuaXNLbm93blNjYW1tZXIoYWNjb3VudE5hbWUpIHx8ICFhY2NvdW50UmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibmVnYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY2FuIGJlIHVzZWQgaW4gcGFyZW50IGNvbXBvbmVudDogdGhpcy5yZWZzLmFjY291bnRfc2VsZWN0b3IuZ2V0QWNjb3VudCgpXG4gICAgZ2V0QWNjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWNjb3VudDtcbiAgICB9XG5cbiAgICBnZXRFcnJvcigpIHtcbiAgICAgICAgbGV0IHthY2NvdW50LCBhY2NvdW50TmFtZSwgZXJyb3IsIHR5cGVhaGVhZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBpbnB1dFR5cGUgPSBhY2NvdW50TmFtZSA/IHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKCF0eXBlYWhlYWQpIHtcbiAgICAgICAgICAgIGlmICghYWNjb3VudCAmJiBhY2NvdW50TmFtZSAmJiBpbnB1dFR5cGUgIT09IFwicHVia2V5XCIpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLnVua25vd25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUeXBlYWhlYWQgY2FuJ3Qgc2VsZWN0IGFuIHVua25vd24gYWNjb3VudCFcbiAgICAgICAgICAgIC8vIGlmIChcbiAgICAgICAgICAgIC8vICAgICAhKGFsbG93UHViS2V5ICYmIGlucHV0VHlwZSA9PT0gXCJwdWJrZXlcIikgJiZcbiAgICAgICAgICAgIC8vICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgIC8vICAgICBhY2NvdW50TmFtZSAmJlxuICAgICAgICAgICAgLy8gICAgICFhY2NvdW50XG4gICAgICAgICAgICAvLyApXG4gICAgICAgICAgICAvLyAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LmVycm9ycy51bmtub3duXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvciAmJiBhY2NvdW50ICYmICFpbnB1dFR5cGUpXG4gICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLmludmFsaWRcIik7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGdldElucHV0VHlwZSh2YWx1ZSkge1xuICAgICAgICAvLyBPS1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHZhbHVlWzBdID09PSBcIiNcIiAmJiB1dGlscy5pc19vYmplY3RfaWQoXCIxLjIuXCIgKyB2YWx1ZS5zdWJzdHJpbmcoMSkpKVxuICAgICAgICAgICAgcmV0dXJuIFwiaWRcIjtcbiAgICAgICAgaWYgKENoYWluVmFsaWRhdGlvbi5pc19hY2NvdW50X25hbWUodmFsdWUsIHRydWUpKSByZXR1cm4gXCJuYW1lXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFsbG93UHViS2V5ICYmIFB1YmxpY0tleS5mcm9tUHVibGljS2V5U3RyaW5nKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybiBcInB1YmtleVwiO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRWZXJpZmllZEFjY291bnROYW1lKGUpIHtcbiAgICAgICAgbGV0IHthbGxvd1VwcGVyY2FzZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdmFsdWUgPSBlO1xuICAgICAgICB9IGVsc2UgaWYgKGUgJiYgZS50YXJnZXQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbGxvd1VwcGVyY2FzZSkgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIElmIHJlZ2V4IG1hdGNoZXMgXi4qIy9hY2NvdW50L2FjY291bnQtbmFtZS8uKiQsIHBhcnNlIG91dCBhY2NvdW50LW5hbWVcbiAgICAgICAgbGV0IF92YWx1ZSA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpLm1hdGNoKC8oPzpcXC9hY2NvdW50XFwvKSguKikvKTtcbiAgICAgICAgaWYgKF92YWx1ZSkgdmFsdWUgPSBfdmFsdWVbMV07XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIF9ub3RpZnlPbkNoYW5nZShzZWxlY3RlZEFjY291bnROYW1lLCBpbnB1dFR5cGUpIHtcbiAgICAgICAgbGV0IHtwcm9wc30gPSB0aGlzO1xuXG4gICAgICAgIC8vIENsZWFyIHNlbGVjdGVkIGFjY291bnQgd2hlbiB3ZSBoYXZlIG5ldyBpbnB1dCBkYXRhIGlmIHdlIHJlcXVpcmUgYW4gYWN0aXZlIHNlbGVjdFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpbnB1dFR5cGUgPT0gXCJpbnB1dFwiICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVhaGVhZCAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0XG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCEhcHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQWNjb3VudENoYW5nZWQobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gdGhpcy5nZXRWZXJpZmllZEFjY291bnROYW1lKHNlbGVjdGVkQWNjb3VudE5hbWUpO1xuXG4gICAgICAgIC8vIFN5bmNocm9ub3VzIG9uQ2hhbmdlIGZvciBpbnB1dCBjaGFuZ2VcbiAgICAgICAgaWYgKCEhcHJvcHMub25DaGFuZ2UgJiYgKCEhYWNjb3VudE5hbWUgfHwgYWNjb3VudE5hbWUgPT09IFwiXCIpKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShhY2NvdW50TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3luY2hyb25vdXMgb25BY2NvdW50Q2hhbmdlZCBmb3IgY2hlY2tpbmcgb24gY2hhaW5cbiAgICAgICAgaWYgKCEhcHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFjY291bnRcIiwgYWNjb3VudE5hbWUsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgIFthY2NvdW50TmFtZV06IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhIWFjY291bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlID09IFwic2VsZWN0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMucmVxdWlyZUFjdGl2ZVNlbGVjdClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkFjY291bnRDaGFuZ2VkKGFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2VsZWN0KHNlbGVjdGVkQWNjb3VudE5hbWUpIHtcbiAgICAgICAgdGhpcy5fbm90aWZ5T25DaGFuZ2Uoc2VsZWN0ZWRBY2NvdW50TmFtZSwgXCJzZWxlY3RcIik7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZWQoZSkge1xuICAgICAgICB0aGlzLl9hZGRUb0luZGV4KHRoaXMuZ2V0VmVyaWZpZWRBY2NvdW50TmFtZShlKSk7XG4gICAgICAgIHRoaXMuX25vdGlmeU9uQ2hhbmdlKGUsIFwiaW5wdXRcIik7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aW9uKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uQWRkQ29udGFjdCgpIHtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMuYWRkQWNjb3VudENvbnRhY3QodGhpcy5wcm9wcy5hY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgX29uUmVtb3ZlQ29udGFjdCgpIHtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMucmVtb3ZlQWNjb3VudENvbnRhY3QodGhpcy5wcm9wcy5hY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgb25BY3Rpb24oZSkge1xuICAgICAgICBsZXQge29uQWN0aW9uLCBkaXNhYmxlQWN0aW9uQnV0dG9uLCBhY2NvdW50LCBhY2NvdW50TmFtZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5nZXRFcnJvcigpICYmIG9uQWN0aW9uICYmICFkaXNhYmxlQWN0aW9uQnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCkgb25BY3Rpb24oYWNjb3VudCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmdldElucHV0VHlwZShhY2NvdW50TmFtZSkgPT09IFwicHVia2V5XCIpXG4gICAgICAgICAgICAgICAgb25BY3Rpb24oYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWUsIGRpc2FibGVBY3Rpb25CdXR0b259ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgc2VhcmNoSW5Qcm9ncmVzcyA9IHRoaXMuc3RhdGUuYWNjb3VudEluZGV4LmZpbmQoXG4gICAgICAgICAgICBhID0+ICFhLmRhdGEgJiYgYS5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsb2NrZWRTdGF0ZSA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZCAhPT0gbnVsbCA/IHRoaXMuc3RhdGUubG9ja2VkIDogdGhpcy5wcm9wcy5sb2NrZWQ7XG5cbiAgICAgICAgbGV0IGVycm9yID0gdGhpcy5nZXRFcnJvcigpLFxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lcixcbiAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudCxcbiAgICAgICAgICAgIGRpc2FibGVkQWN0aW9uLFxuICAgICAgICAgICAgZGlzYWJsZWRJbnB1dCxcbiAgICAgICAgICAgIGVkaXRhYmxlSW5wdXQsXG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzO1xuXG4gICAgICAgIGVkaXRhYmxlSW5wdXQgPSAhIWxvY2tlZFN0YXRlXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuZWRpdGFibGUgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5lZGl0YWJsZVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGRpc2FibGVkSW5wdXQgPSAhIWxvY2tlZFN0YXRlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5kaXNhYmxlZCAhPSBudWxsXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gU2VsZWN0ZWQgQWNjb3VudFxuICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgbGV0IG9iamVjdEluZGV4ID0gdGhpcy5fZ2V0SW5kZXgoYWNjb3VudC5nZXQoXCJuYW1lXCIpLCBhY2NvdW50SW5kZXgpO1xuXG4gICAgICAgICAgICBzZWxlY3RlZEFjY291bnQgPVxuICAgICAgICAgICAgICAgIGFjY291bnRJbmRleCAmJiBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEluZGV4W29iamVjdEluZGV4XS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc2FibGVkQWN0aW9uID1cbiAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgYWNjb3VudCB8fFxuICAgICAgICAgICAgICAgIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LnR5cGUgPT09IFwicHVia2V5XCIpXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICBlcnJvciB8fFxuICAgICAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbjtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC5pc093bkFjY291bnQpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAub3duX2FjY291bnRcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIGdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQuaXNLbm93blNjYW1tZXIpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuc2NhbV9hY2NvdW50XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcCByZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ3YXJuaW5nXCIgdGhlbWU9XCJmaWxsZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LmlzQ29udGFjdCkge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5mb2xsb3dfdXNlclwiKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmVDb250YWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIGdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIHRoZW1lPVwiZmlsbGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2NvdW50KSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLmZvbGxvd191c2VyX2FkZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25BZGRDb250YWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZWFoZWFkKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uc0NvbnRhaW5lciA9IGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBhY2NvdW50cyBiYXNlZCBvblxuICAgICAgICAgICAgICAgICAgICAvLyAtIEV4Y2x1ZGUgd2l0aG91dCByZXN1bHRzIChtaXNzaW5nIGNoYWluIGRhdGEgYXQgdGhlIG1vbWVudClcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBFeGNsdWRlZCBhY2NvdW50cyAoYnkgcHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gSW5jbHVkZSB1c2VycyBvd24gYWNjb3VudHMgKGlzT3duQWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIHVzZXJzIGNvbnRhY3RzIChpc0NvbnRhY3QpIHVubGVzcyBpdCdzIGEgcHJldmlvdXNseSBsb2NrZWQgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIGN1cnJlbnQgaW5wdXRcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZXhjbHVkZUFjY291bnRzLmluZGV4T2YoYWNjb3VudC5pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmRhdGEuaXNPd25BY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMubG9ja2VkICYmIGFjY291bnQuZGF0YS5pc0NvbnRhY3QpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoYWNjb3VudE5hbWUgJiYgYWNjb3VudC5kYXRhLm5hbWUgPT09IGFjY291bnROYW1lKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5kYXRhLmlzT3duQWNjb3VudCA8IGIuZGF0YS5pc093bkFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmRhdGEubmFtZSA+IGIuZGF0YS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthY2NvdW50LmRhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnQuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY2NvdW50LmRhdGEuZGlzYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuaXNPd25BY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5pc0NvbnRhY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJzdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLmlzS25vd25TY2FtbWVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwid2FybmluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLnN0YXR1c0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lciA9IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWxQcm9wPXtcInZhbHVlXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LnNlYXJjaFwiKX1cbiAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwubm90X2ZvdW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBY2NvdW50ID8gc2VsZWN0ZWRBY2NvdW50Lm5hbWUgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRJbnB1dCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc0NvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyID0gKFxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LnR5cGUgPT09IFwicHVia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsb3dlcmNhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5lZGl0YWJsZSA/IFwidXNlcm5hbWVcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYWNjb3VudE5hbWUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5uYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1c2VyX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17XG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5lZGl0YWJsZSB8fCAhIXRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLnRhYkluZGV4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISFlZGl0YWJsZUlucHV0ID8gZWRpdGFibGVJbnB1dC50b1N0cmluZygpIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISFlZGl0YWJsZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoIWVkaXRhYmxlSW5wdXQpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudEltYWdlQ29udGFpbmVyID0gdGhpcy5wcm9wc1xuICAgICAgICAgICAgLmhpZGVJbWFnZSA/IG51bGwgOiBzZWxlY3RlZEFjY291bnQgJiZcbiAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmFjY291bnRUeXBlID09PSBcInB1YmtleVwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImtleVwiIHRpdGxlPVwiaWNvbnMua2V5XCIgc2l6ZT1cIjR4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPEFjY291bnRJbWFnZVxuICAgICAgICAgICAgICAgIHNpemU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnNpemUgfHwgMzMsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpemUgfHwgMzNcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFjY291bnQ9e3NlbGVjdGVkQWNjb3VudCA/IHNlbGVjdGVkQWNjb3VudC5uYW1lIDogbnVsbH1cbiAgICAgICAgICAgICAgICBjdXN0b21faW1hZ2U9e251bGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsb2NrZWRTdGF0ZUNvbnRhaW5lciA9ICFsb2NrZWRTdGF0ZSA/IG51bGwgOiBcIlwiO1xuXG4gICAgICAgIGxldCByaWdodExhYmVsQ29udGFpbmVyID1cbiAgICAgICAgICAgICF0aGlzLnByb3BzLmxhYmVsIHx8ICFzZWxlY3RlZEFjY291bnQgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyLWFyZWFcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5oaWRlSW1hZ2UgPyBcIiBuby1tYXJnaW5cIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudC5pc0NvbnRhY3QgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQuaXNPd25BY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJwb3NpdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQuaXNLbm93blNjYW1tZXIgPyBcIm5lZ2F0aXZlXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IC0zMH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiBcIjAuNXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQWNjb3VudC5yaWdodExhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEFjY291bnQuZGlzcGxheVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua2VkX3N0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgRm9ybVdyYXBwZXIgPSB0aGlzLnByb3BzLm5vRm9ybSA/IFJlYWN0LkZyYWdtZW50IDogRm9ybTtcbiAgICAgICAgY29uc3QgZm9ybVdyYXBwZXJQcm9wcyA9IHRoaXMucHJvcHMubm9Gb3JtXG4gICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmdWxsLXdpZHRoXCIsXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtYXJlYVwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudG9vbHRpcH1cbiAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9ybVdyYXBwZXIgey4uLmZvcm1XcmFwcGVyUHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtlcnJvciA/IFwiZXJyb3JcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPXtlcnJvciA/IGVycm9yIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JpZ2h0TGFiZWxDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VIUiAmJiA8aHIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnRJbWFnZUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoSW5Qcm9ncmVzcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cImxvYWRpbmdcIiBzdHlsZT17e3BhZGRpbmc6IDEwfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9ja2VkU3RhdGVDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25BY3Rpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5yZXF1aXJlZF9pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnbG9iYWwuZmllbGRfdHlwZS5hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY3Rpb24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMuYWN0aW9uX2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvRm9ybVdyYXBwZXI+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BY2NvdW50U2VsZWN0b3JMaXN0aW5nID0gQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50U2VsZWN0b3JMaXN0aW5nKTtcblxuQWNjb3VudFNlbGVjdG9yTGlzdGluZyA9IGNvbm5lY3QoXG4gICAgQWNjb3VudFNlbGVjdG9yTGlzdGluZyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkubXlBY3RpdmVBY2NvdW50cyxcbiAgICAgICAgICAgICAgICBjb250YWN0czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuYWNjb3VudENvbnRhY3RzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudFNlbGVjdG9yTGlzdGluZztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBc1hBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQUE7QUFRQTtBQWRBO0FBREE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUFWQTtBQTJCQTtBQTlDQTtBQWlEQTtBQUNBO0FBemFBO0FBMmFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFEQTtBQVZBO0FBc0JBO0FBdkJBO0FBMEJBO0FBQ0E7QUF2Y0E7QUF3Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRkQTtBQXdkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5lQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBSEE7QUFIQTtBQUxBO0FBREE7QUFvQkE7QUFyQkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUhBO0FBSEE7QUFMQTtBQURBO0FBb0JBO0FBckJBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQVNBO0FBVEE7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBQUE7QUFmQTtBQStCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBQUE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFOQTtBQURBO0FBQUE7QUFBQTtBQVlBO0FBNURBO0FBK0RBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFBQTtBQWdCQTtBQW5CQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFiQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQVJBO0FBQUE7QUFpQkE7QUFuQkE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXhDQTtBQXpHQTtBQXVKQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQU5BO0FBU0E7QUFWQTtBQVdBO0FBQ0E7QUFaQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQU5BO0FBZUE7QUFmQTtBQURBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUE1TEE7QUFOQTtBQTFEQTtBQURBO0FBREE7QUFEQTtBQUZBO0FBNlFBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFwWEE7QUFDQTtBQXVlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFIQTtBQVpBO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFMQTtBQVFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQUE7QUFXQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQUFBO0FBbEJBO0FBc0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBTEE7QUFsREE7QUE2REE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQWpFQTtBQTFCQTtBQWZBO0FBdUhBOzs7O0FBN0lBO0FBQ0E7QUErSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFYQTtBQUNBO0FBY0E7Ozs7Ozs7O0FDN0tBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWpCQTtBQTZCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUE5QkE7QUFtQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWVBO0FBR0E7QUFDQTtBQXBCQTtBQUFBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFjQTtBQUNBO0FBREE7QUFkQTtBQU5BO0FBMEJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFUQTtBQWFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFuQkE7QUErQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7Ozs7QUFEQTtBQU9BO0FBUEE7QUFTQTtBQWJBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBWEE7QUFyREE7QUFqQkE7QUEvQkE7QUFKQTtBQTRIQTs7OztBQXJPQTtBQUNBO0FBdU9BOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFDQTtBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOzs7QUFpQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFIQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBR0E7QUFYQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFWQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBL0JBO0FBc0NBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQWhCQTtBQU5BO0FBQ0E7QUEwQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBREE7QUFIQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFWQTtBQVRBO0FBWEE7QUFEQTtBQUxBO0FBb0RBOzs7O0FBdnJCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQURBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQUNBO0FBaXFCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFUQTtBQUNBO0FBWUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==