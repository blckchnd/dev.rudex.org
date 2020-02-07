(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[42],{

/***/ 3310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3311);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListingPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(498);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(429);
/* harmony import */ var _CoinCardListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3313);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(594);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2939);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2802);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.get_donate_tokens" }),
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        {
                            style: { margin: 2, fontSize: "1.0rem" },
                            href: "" + "market/DONATE_RUDEX.BTC"
                            //target="_blank"
                            , rel: "noopener noreferrer"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.here" })
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

        _this.getCoinsList = function () {
            var coins = _this.state.coins;

            var sortedCoins = coins.sort(function (a, b) {
                return b.votes - a.votes;
            });
            return sortedCoins.map(function (coin, i) {
                //coin.votes = coin.votes;
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
                "a",
                {
                    style: { margin: 2, fontSize: "1.0rem" },
                    href: "" + "asset/DONATE"
                    //target="_blank"
                    , rel: "noopener noreferrer"
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
                                    defaultActiveTab: 1,
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
                                                "\u041B\u0438\u0441\u0442\u0438\u043D\u0433 \u0442\u043E\u043A\u0435\u043D\u043E\u0432 \u043D\u0430 ",
                                                RuDEX,
                                                " \u043E\u0442\u043A\u0440\u044B\u0442 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0436\u0435\u043B\u0430\u044E\u0449\u0438\u0445!"
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                null,
                                                "\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C, \u0443\u0432\u0430\u0436\u0430\u0435\u043C\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 ",
                                                RuDEX,
                                                "! \u0421\u0435\u0433\u043E\u0434\u043D\u044F \u043C\u044B \u0445\u043E\u0442\u0438\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043C \u043D\u043E\u0432\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441, \u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043D\u0430\u0441 \u0434\u0430\u0432\u043D\u043E \u0438 \u043D\u0435\u043E\u0434\u043D\u043E\u043A\u0440\u0430\u0442\u043D\u043E \u043F\u0440\u043E\u0441\u0438\u043B\u0438. \u0421 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043B\u044E\u0431\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442, \u043D\u0430\u043C\u0435\u0440\u0435\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0442\u043E\u0440\u0433\u0438 \u0442\u043E\u043A\u0435\u043D\u0430 \u0441\u0432\u043E\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 ",
                                                RuDEX,
                                                ", \u043C\u043E\u0436\u0435\u0442 \u043B\u0435\u0433\u043A\u043E \u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u044D\u0442\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u043D\u0430\u0448\u0435\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433\u0430."
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                null,
                                                "\u041C\u044B \u0434\u043E\u043B\u0433\u043E \u0434\u0443\u043C\u0430\u043B\u0438 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0434\u043B\u044F \u0432\u0441\u0435\u0445. \u0418 \u043D\u0430\u0448\u043B\u0438, \u043D\u0430 \u043D\u0430\u0448 \u0432\u0437\u0433\u043B\u044F\u0434, \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u044D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u0441\u0443\u0442\u044C \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C: \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E ",
                                                RuDEX,
                                                " \u0434\u0430\u0451\u0442\u0441\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u0442\u043E\u043A\u0435\u043D \u043A\u0430\u043A\u043E\u0433\u043E-\u043B\u0438\u0431\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433 \u0438/\u0438\u043B\u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0434\u043E\u043D\u0430\u0442\u043E\u043C \u0443\u0436\u0435 \u0432\u044B\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0442\u043E\u043A\u0435\u043D."
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                null,
                                                "\u0427\u0442\u043E\u0431\u044B \u0432\u044B\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u0442\u043E\u043A\u0435\u043D \u043A\u0430\u043A\u043E\u0433\u043E-\u043B\u0438\u0431\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433, \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u0443\u044E \u0444\u043E\u0440\u043C\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0431\u0443\u0434\u0435\u0442 \u043D\u0438\u0436\u0435 \u043D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435. \u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C\u043E\u0433\u043E \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \u0432\u0441\u0435\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u0433\u043E \u0440\u0435\u0432\u044C\u044E, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043E\u0442\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0441\u0440\u043E\u043A \u0434\u043E 1 \u043D\u0435\u0434\u0435\u043B\u0438, \u0438 \u0435\u0441\u043B\u0438 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u043D\u0430\u0448\u0438\u043C \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u043C \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C, \u0442\u043E\u043A\u0435\u043D \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043A \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u043C\u0443 \u043A\u0440\u0430\u0443\u0434\u0444\u0430\u043D\u0434\u0438\u043D\u0433\u0443 \u0441 \u0446\u0435\u043B\u044C\u044E \u043B\u0438\u0441\u0442\u0438\u043D\u0433\u0430 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u0431\u0438\u0440\u0436\u0438. \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0446\u0435\u043B\u044C \u0442\u0430\u043A\u043E\u0433\u043E \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0434\u043E\u043D\u0430\u0442\u0430 \u2013 \u0441\u0431\u043E\u0440 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0430 \u0437\u0430\u043F\u0443\u0441\u043A \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0448\u043B\u044E\u0437\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D."
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                null,
                                                "\u0421\u0431\u043E\u0440 \u0434\u043E\u043D\u0430\u0442\u043E\u0432 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u043C \u0442\u043E\u043A\u0435\u043D\u0435 ",
                                                DONATE,
                                                ", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438",
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "a",
                                                    {
                                                        style: { margin: 2, fontSize: "1.0rem" },
                                                        href: "" + "market/DONATE_RUDEX.BTC",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer"
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.here" })
                                                ),
                                                ". \u041A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u0438 \u0442\u043E\u043A\u0435\u043D\u044B ",
                                                DONATE,
                                                ", \u0432\u044B \u0432\u043E\u043B\u044C\u043D\u044B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0438\u043C\u0438 \u043B\u044E\u0431\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0439 \u0432\u0430\u0441 \u043F\u0440\u043E\u0435\u043A\u0442 \u043F\u0443\u0442\u0451\u043C \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043D\u0430 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0447\u0435\u0440\u0435\u0437 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0444\u043E\u0440\u043C\u0443 \u0438\u043B\u0438 \u043F\u0440\u044F\u043C\u043E\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434."
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "p",
                                                null,
                                                "\u041F\u043E\u0441\u043B\u0435 \u0442\u043E\u0433\u043E \u043A\u0430\u043A \u0442\u043E\u043A\u0435\u043D \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0434\u043E\u0441\u0442\u0438\u0433 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0440\u043E\u0433\u0430 \u0444\u0430\u043D\u0434\u0440\u0430\u0439\u0437\u0438\u043D\u0433\u0430, \u0432\u0441\u0435 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043D\u0430 \u0437\u0430\u043F\u0443\u0441\u043A \u0442\u043E\u043A\u0435\u043D\u044B ",
                                                DONATE,
                                                " \u0441\u0436\u0438\u0433\u0430\u044E\u0442\u0441\u044F, \u0438 \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0448\u043B\u044E\u0437\u0430 \u0434\u043B\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0442\u043E\u043A\u0435\u043D\u0430. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u043D\u0430\u043C\u0438 \u0431\u0443\u0434\u0443\u0442 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A \u043E\u0431\u044A\u0451\u043C \u0442\u043E\u0440\u0433\u043E\u0432 \u0442\u043E\u043A\u0435\u043D\u0430, \u0438 \u0447\u0442\u043E \u0437\u0430 \u043D\u0430\u043C\u0438 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u0440\u0430\u0432\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0434\u0435\u043B\u0438\u0441\u0442\u0438\u043D\u0433 \u0442\u043E\u043A\u0435\u043D\u0430 \u0438\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0435\u0441\u043B\u0438 \u043E\u0431\u044A\u0451\u043C \u0435\u0433\u043E \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u043E\u0442\u0430 \u0443\u043F\u0430\u043B \u0434\u043E \u043A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043D\u0438\u0437\u043A\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0438 \u043A\u0430\u043A\u0438\u0435-\u043B\u0438\u0431\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F, \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u043E\u0440\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C."
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "h3",
                                                null,
                                                "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u044B: "
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "ol",
                                                null,
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    "\u0418\u0437\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 [\u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433] \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043D\u0438\u043C\u0438"
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    "\u0414\u043E\u0436\u0434\u0438\u0442\u0435\u0441\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0440\u0435\u0432\u044C\u044E: \u0435\u0441\u043B\u0438 \u0432\u0441\u0451 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u0442\u043E \u043F\u0440\u043E\u0435\u043A\u0442 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u043E\u0432 \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0434\u0435\u043B\u0438"
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    "\u041D\u0435 \u0441\u0438\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0436\u0430 \u0440\u0443\u043A\u0438, \u043F\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u0442\u043E\u043A\u0435\u043D \u0447\u0435\u0440\u0435\u0437 \u0441\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0442\u043E\u043A\u0435\u043D\u044B ",
                                                    DONATE,
                                                    " (\u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0438\u043C\u0435\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u043D\u0430 ",
                                                    RuDEX,
                                                    ")."
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    null,
                                                    "\u041F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433\u0430 \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043E\u0433\u0430 \u0444\u0430\u043D\u0434\u0440\u0430\u0439\u0437\u0438\u043D\u0433\u0430 \u0438 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0443 \u0448\u043B\u044E\u0437\u0430. \u041E\u0431\u0435\u0441\u043F\u0435\u0447\u044C\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0441\u0432\u044F\u0437\u0438 \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C/\u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u043C \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u043B\u0438\u0446\u043E\u043C."
                                                )
                                            )
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__["Button"],
                                            {
                                                key: "send",
                                                disabled: !this.state.ListingNotice1Informed,
                                                onClick: this.state.ListingNotice1Informed ? this.onSubmitRequest.bind(this) : null
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "listing.submit_request" })
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
                                            "\u0423\u0434\u0430\u0447\u0438 \u0432\u0430\u0448\u0438\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C \u0438 \u0434\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 ",
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
                        //console.log(x.votes);
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

/***/ 3313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3314);
/* harmony import */ var _DonateSendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3317);
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

        /*        this.state = {
            key: props.key,
            rank: props.rank,
             coin: props.coin
        };*/

        //this.props.key = props.key;
        return _this;
    }

    /*    shouldComponentUpdate(np, ns) {
        return (
            this.props.key !== np.key ||
            this.props.rank !== np.rank ||
            this.props.coin !== ns.coin
        );
    }*/

    /*    shouldComponentUpdate(np, ns) {
        return (
            this.props.asset !== np.asset ||
            this.props.maxWidth !== np.maxWidth ||
            this.props.whiteList !== np.whiteList ||
            this.state.imgError !== ns.imgError
        );
    }*/

    /*    componentWillReceiveProps(np) {
        //this.state.coin.account
        if (
            np.coin !== this.props.coin
        ) {
            this.setState({
                coin: np.coin
            });
        }
    }*/

    /*    shouldComponentUpdate(nextProps) {
        return (
            nextProps.coin !== this.props.coin
        );
    }*/

    /*    componentWillReceiveProps(np) {
        if (np.account) {
            const npName = np.account.get("name");
            const currentName =
                this.props.account && this.props.account.get("name");
             if (!this.props.account || npName !== currentName) {
                // Update the current account in order to access the header right menu options
                AccountActions.setCurrentAccount.defer(npName);
                // Fetch possible fee assets here to avoid async issues later (will resolve assets)
                accountUtils.getPossibleFees(np.account, "transfer");
            }
        }
    }*/

    _createClass(CoinCardListing, [{
        key: "_renderSendModal",
        value: function _renderSendModal() {
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
                to_name: this.props.coin.account ? this.props.coin.account : from_name,
                asset_id: "1.3.5588"
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
        key: "componentDidUpdate",
        value: function componentDidUpdate(np) {
            //this.props.coin.account;
            return np.coin.account !== this.props.coin.account;
        }

        /*    componentWillReceiveProps(np) {
            //return np.coin != this.props.coin;
             if (np.account) {
                const npName = np.account.get("name");
                const currentName =
                    this.props.account && this.props.account.get("name");
                 /!*            if (!this.props.account || npName !== currentName) {
                    // Update the current account in order to access the header right menu options
                    AccountActions.setCurrentAccount.defer(npName);
                    // Fetch possible fee assets here to avoid async issues later (will resolve assets)
                    accountUtils.getPossibleFees(np.account, "transfer");*!/
            }
        }*/

        /*    componentWillReceiveProps(np) {
            return np.coin != this.props.coin;
        }*/

        /*    shouldComponentUpdate(nextProps,) {
            return nextProps.coin !== this.props.coin;
        }
         componentWillReceiveProps(nextProps) {
            return nextProps.coin !== this.props.coin;
        }*/

    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "listingTable__row" },
                this._renderSendModal(),
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
                                content: "gateway.rudex.coming_soon"
                                //content="listing.table.coming_soon"
                                , style: { float: "right", color: "gold" }
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
                                    { onClick: this.triggerSend.bind(this, "1.3.5588") },
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

/***/ 3314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return DonutChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DonutChart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3315);
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

/***/ 3317:
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
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2149);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2146);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2155);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(742);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(594);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(607);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var DonateSendModal = function (_SendModal) {
    _inherits(DonateSendModal, _SendModal);

    function DonateSendModal() {
        _classCallCheck(this, DonateSendModal);

        return _possibleConstructorReturn(this, (DonateSendModal.__proto__ || Object.getPrototypeOf(DonateSendModal)).apply(this, arguments));
    }

    _createClass(DonateSendModal, [{
        key: "render",


        /*    constructor(props) {
                super(props);
                this.state = this.getInitialState(props);
            }*/

        //NONONO
        /*    shouldComponentUpdate(np, ns) {
                let {asset_types: current_types} = this._getAvailableAssets();
                let {asset_types: next_asset_types} = this._getAvailableAssets(ns);
        
                if (next_asset_types.length === 1) {
                    let asset = ChainStore.getAsset(next_asset_types[0]);
                    if (current_types.length !== 1) {
                        this.onAmountChanged({amount: ns.amount, asset});
                    }
                }
        
                if (ns.open && !this.state.open) this._checkBalance(ns);
                if (!ns.open && !this.state.open) return false;
        
                //if (!ns.to_name && !this.state.to_name) return true;
        
                return true;
            }*/

        /*   _initForm() {
            if (this.props.to_name != this.props.from_name) {
                this.setState({
                    to_name: this.props.to_name,
                    to_account: ChainStore.getAccount(this.props.to_name)
                });
            }
             if (this.props.from_name) {
                this.setState({
                    from_name: this.props.from_name,
                    from_account: ChainStore.getAccount(this.props.from_name)
                });
            }
             let {currentAccount} = this.props;
            if (!this.state.from_name) {
                this.setState({from_name: currentAccount});
            }
             if (
                this.props.asset_id &&
                this.state.asset_id !== this.props.asset_id
            ) {
                let asset = ChainStore.getAsset(this.props.asset_id);
                if (asset) {
                    this.setState({
                        asset_id: this.props.asset_id,
                        asset
                    });
                }
            }
        }*/

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
                            , { content: "listing.modal.header",
                                wallet_name: Object(_branding__WEBPACK_IMPORTED_MODULE_14__["getWalletName"])()
                            })
                        ),
                        this.state.open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Form"],
                            { className: "full-width-wrapper", layout: "vertical" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                label: "transfer.from",
                                accountName: from_name,
                                account: from_account,
                                onChange: this.fromChanged.bind(this),
                                onAccountChanged: this.onFromAccountChanged.bind(this),
                                typeahead: true,
                                tabIndex: tabIndex++,
                                locked: true,
                                noForm: true
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                label: "transfer.to",
                                accountName: to_name,
                                account: to_account,
                                onChange: this.toChanged.bind(this),
                                onAccountChanged: this.onToAccountChanged.bind(this),
                                typeahead: true,
                                tabIndex: tabIndex++,
                                locked: true,
                                noForm: true
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                label: "transfer.amount",
                                amount: amount,
                                onChange: this.onAmountChanged.bind(this),
                                asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0],
                                assets: asset_types,
                                display_balance: balance,
                                tabIndex: tabIndex++,
                                allowNaN: true
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy4wY2Y1OTI2Y2FhYzFmODZjMzg2ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0xpc3RpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Db2luQ2FyZExpc3RpbmcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbnV0Q2hhcnQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbmF0ZVNlbmRNb2RhbC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9MaXN0aW5nUGFnZS5jc3NcIjtcblxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7RmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmltcG9ydCBDb2luQ2FyZExpc3RpbmcgZnJvbSBcIi4vQ29pbkNhcmRMaXN0aW5nXCI7XG5pbXBvcnQge2dldExpc3RpbmdDb2luc30gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgTGlzdGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBMaXN0aW5nTm90aWNlMUluZm9ybWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvaW5zOiBbXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdFJlcXVlc3QoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBudWxsfSk7XG4gICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ29vLmdsL2Zvcm1zL1JabENBdmJ0QkowNzdHNzYyXCI7XG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9nb28uZ2wvZm9ybXMvUlpsQ0F2YnRCSjA3N0c3NjJcIiwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgb25MaXN0aW5nTm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIExpc3RpbmdOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBSdURFWCA9ICg8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+UnVERVg8L3NwYW4+KTtcbiAgICAgICAgbGV0IERPTkFURSA9IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX1cbiAgICAgICAgICAgICAgICBocmVmPXtgJHtfX0JBU0VfVVJMX199YXNzZXQvRE9OQVRFYH1cbiAgICAgICAgICAgICAgICAvL3RhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAvPkRPTkFURVxuICAgICAgICAgICAgPC9hPik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuXG4gICAgICAgICAgICAgICAgey8qVGFicyovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLWNvbnRhaW5lciBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9XCJwZXJtaXNzaW9uc1RhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgYm9yZGVyZWQtaGVhZGVyIGNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q2xhc3M9XCJwYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBET05BVEUgUFJPR1JFU1MqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImxpc3RpbmcuZG9uYXRlX3Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiIHRhYkluZGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCIgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC11cC0xIG1lZGl1bS11cC0xIGxhcmdlLXVwLTEgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvaW5zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiBcIjEwcHhcIn19PjxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImxpc3RpbmcubG9hZGluZ1wiLz57XCIgXCJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29udGVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwibGlzdGluZy5hZGRfY29pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhvcml6b250YWxcIiB0YWJJbmRleD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGhlbHAtY29udGVudC1sYXlvdXRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj7Qm9C40YHRgtC40L3QsyDRgtC+0LrQtdC90L7QsiDQvdCwIHtSdURFWH0g0L7RgtC60YDRi9GCINC00LvRjyDQstGB0LXRhSDQttC10LvQsNGO0YnQuNGFITwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHRgNGL0Lkg0LTQtdC90YwsINGD0LLQsNC20LDQtdC80YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Lgge1J1REVYfSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LXQs9C+0LTQvdGPINC80Ysg0YXQvtGC0LjQvCDQv9GA0LXQtNGB0YLQsNCy0LjRgtGMINCy0LDQvCDQvdC+0LLRi9C5INGB0LXRgNCy0LjRgSwg0L4g0LTQvtCx0LDQstC70LXQvdC40Lgg0LrQvtGC0L7RgNC+0LPQviDQvdCw0YFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC00LDQstC90L4g0Lgg0L3QtdC+0LTQvdC+0LrRgNCw0YLQvdC+INC/0YDQvtGB0LjQu9C4LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KEg0L3QsNGB0YLQvtGP0YnQtdCz0L4g0LzQvtC80LXQvdGC0LAg0LvRjtCx0L7QuSDQv9GA0L7QtdC60YIsINC90LDQvNC10YDQtdCy0LDRjtGJ0LjQudGB0Y8g0LfQsNC/0YPRgdGC0LjRgtGMINGC0L7RgNCz0Lgg0YLQvtC60LXQvdCwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRgdCy0L7QtdCz0L4g0L/RgNC+0LXQutGC0LAg0L3QsCDQv9C70LDRgtGE0L7RgNC80LUge1J1REVYfSwg0LzQvtC20LXRgiDQu9C10LPQutC+INC4INC/0YDQvtGB0YLQviDRjdGC0L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC+0YHRg9GJ0LXRgdGC0LLQuNGC0Ywg0L/QvtGB0YDQtdC00YHRgtCy0L7QvCDQvdCw0YjQtdCz0L4g0YHQtdGA0LLQuNGB0LAg0LvQuNGB0YLQuNC90LPQsC5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNGLINC00L7Qu9Cz0L4g0LTRg9C80LDQu9C4INC+INGC0L7QvCwg0LrQsNC6INC20LUg0YHQtNC10LvQsNGC0Ywg0Y3RgtC+0YIg0L/RgNC+0YbQtdGB0YEg0LzQsNC60YHQuNC80LDQu9GM0L3QviDQtNC+0YHRgtGD0L/QvdGL0LxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC4INC/0L7QvdGP0YLQvdGL0Lwg0LTQu9GPINCy0YHQtdGFLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0Jgg0L3QsNGI0LvQuCwg0L3QsCDQvdCw0Ygg0LLQt9Cz0LvRj9C0LCDQtNC+0LLQvtC70YzQvdC+INGN0LvQtdCz0LDQvdGC0L3QvtC1INGA0LXRiNC10L3QuNC1LCDRgdGD0YLRjCDQutC+0YLQvtGA0L7Qs9C+INCyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRgdC70LXQtNGD0Y7RidC10Lw6INC60LDQttC00L7QvNGDINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjiB7UnVERVh9INC00LDRkdGC0YHRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCy0YvQtNCy0LjQvdGD0YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0YLQvtC60LXQvSDQutCw0LrQvtCz0L4t0LvQuNCx0L4g0L/RgNC+0LXQutGC0LAg0L3QsCDQu9C40YHRgtC40L3QsyDQuC/QuNC70Lgg0L/QvtC00LTQtdGA0LbQsNGC0Ywg0LTQvtC90LDRgtC+0Lwg0YPQttC1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQstGL0LTQstC40L3Rg9GC0YvQuSDRgtC+0LrQtdC9LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQp9GC0L7QsdGLINCy0YvQtNCy0LjQvdGD0YLRjCDRgtC+0LrQtdC9INC60LDQutC+0LPQvi3Qu9C40LHQviDQv9GA0L7QtdC60YLQsCDQvdCwINC70LjRgdGC0LjQvdCzLCDQstCw0Lwg0L3Rg9C20L3QvlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LfQsNC/0L7Qu9C90LjRgtGMINC/0YDQvtGB0YLRg9GOINGE0L7RgNC80YMsINC60L7RgtC+0YDRg9GOINC80L7QttC90L4g0L3QsNC50YLQuCDQsdGD0LTQtdGCINC90LjQttC1INC90LAg0Y3RgtC+0LlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINGB0YLRgNCw0L3QuNGG0LUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0YHQu9C1INC/0YDQvtCy0L7QtNC40LzQvtCz0L4g0L3QsNGI0LXQuSDQutC+0LzQsNC90LTQvtC5INCy0YHQtdGB0YLQvtGA0L7QvdC90LXQs9C+INGA0LXQstGM0Y4sINC90LAg0LrQvtGC0L7RgNC+0LVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC+0YLQstC+0LTQuNGC0YHRjyDRgdGA0L7QuiDQtNC+IDEg0L3QtdC00LXQu9C4LCDQuCDQtdGB0LvQuCDQstCw0Ygg0L/RgNC+0LXQutGCINGD0LTQvtCy0LvQtdGC0LLQvtGA0Y/QtdGCINC90LDRiNC40LxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCy0L3Rg9GC0YDQtdC90L3QuNC8INC60YDQuNGC0LXRgNC40Y/QvCwg0YLQvtC60LXQvSDQtNC+0L/Rg9GB0LrQsNC10YLRgdGPINC6INC/0YPQsdC70LjRh9C90L7QvNGDINC60YDQsNGD0LTRhNCw0L3QtNC40L3Qs9GDINGBXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRhtC10LvRjNGOINC70LjRgdGC0LjQvdCz0LAg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdC8INGA0LDQt9C00LXQu9C1INCx0LjRgNC20LguXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGB0L3QvtCy0L3QsNGPINGG0LXQu9GMINGC0LDQutC+0LPQviDQv9GD0LHQu9C40YfQvdC+0LPQviDQtNC+0L3QsNGC0LAg4oCTINGB0LHQvtGAINGB0YDQtdC00YHRgtCyINC90LAg0LfQsNC/0YPRgdC6INC4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRgtC10YXQvdC40YfQtdGB0LrRg9GOINC/0L7QtNC00LXRgNC20LrRgyDRiNC70Y7Qt9CwLCDQsCDRgtCw0LrQttC1INC+0YbQtdC90LrQsCDQv9C+0YLQtdC90YbQuNCw0LvRjNC90L7Qs9C+INGB0L/RgNC+0YHQsCDQvdCwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQutC+0L3QutGA0LXRgtC90YvQuSDRgtC+0LrQtdC9LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodCx0L7RgCDQtNC+0L3QsNGC0L7QsiDQvtGB0YPRidC10YHRgtCy0LvRj9C10YLRgdGPINCyINGB0L/QtdGG0LjQsNC70YzQvdC+0Lwg0YLQvtC60LXQvdC1IHtET05BVEV9LCDQutC+0YLQvtGA0YvQuSDQstGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQvNC+0LbQtdGC0LUg0L/RgNC40L7QsdGA0LXRgdGC0LhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtfX0JBU0VfVVJMX199bWFya2V0L0RPTkFURV9SVURFWC5CVENgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5oZXJlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCa0LDQuiDRgtC+0LvRjNC60L4g0LLRiyDQv9GA0LjQvtCx0YDQtdC70Lgg0YLQvtC60LXQvdGLIHtET05BVEV9LCDQstGLINCy0L7Qu9GM0L3RiyDQv9C+0LTQtNC10YDQttCw0YLRjCDQuNC80Lgg0LvRjtCx0L7QuVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LjQvdGC0LXRgNC10YHRg9GO0YnQuNC5INCy0LDRgSDQv9GA0L7QtdC60YIg0L/Rg9GC0ZHQvCDQvtGC0L/RgNCw0LLQutC4INC90LAg0LDQutC60LDRg9C90YIg0YfQtdGA0LXQtyDRgdC/0LXRhtC40LDQu9GM0L3Rg9GOXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRhNC+0YDQvNGDINC40LvQuCDQv9GA0Y/QvNC+0Lkg0L/QtdGA0LXQstC+0LQuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtGB0LvQtSDRgtC+0LPQviDQutCw0Log0YLQvtC60LXQvSDQv9GA0L7QtdC60YLQsCDQtNC+0YHRgtC40LMg0YPRgdGC0LDQvdC+0LLQu9C10L3QvdC+0LPQviDQv9C+0YDQvtCz0LAg0YTQsNC90LTRgNCw0LnQt9C40L3Qs9CwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LLRgdC1INGB0L7QsdGA0LDQvdC90YvQtSDQvdCwINC30LDQv9GD0YHQuiDRgtC+0LrQtdC90Ysge0RPTkFURX0g0YHQttC40LPQsNGO0YLRgdGPLCDQuCDQvdCw0YjQsCDQutC+0LzQsNC90LTQsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0L/RgNC40YHRgtGD0L/QsNC10YIg0Log0YDQsNC30YDQsNCx0L7RgtC60LUg0YjQu9GO0LfQsCDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0YLQvtC60LXQvdCwLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0L3QsNC80Lgg0LHRg9C00YPRgiDRg9GH0LjRgtGL0LLQsNGC0YzRgdGPINC4INC00YDRg9Cz0LjQtSDQutGA0LjRgtC10YDQuNC4LCDRgtCw0LrQuNC1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQutCw0Log0L7QsdGK0ZHQvCDRgtC+0YDQs9C+0LIg0YLQvtC60LXQvdCwLCDQuCDRh9GC0L4g0LfQsCDQvdCw0LzQuCDQvtGB0YLQsNGR0YLRgdGPINC/0YDQsNCy0L4g0YHQvtCy0LXRgNGI0LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQtNC10LvQuNGB0YLQuNC90LMg0YLQvtC60LXQvdCwINC40YHRhdC+0LTRjyDQuNC3INGB0L7QsdGB0YLQstC10L3QvdGL0YUg0YHQvtC+0LHRgNCw0LbQtdC90LjQuSwg0L3QsNC/0YDQuNC80LXRgCwg0LXRgdC70Lgg0L7QsdGK0ZHQvFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LXQs9C+INGC0L7RgNCz0L7QstC+0LPQviDQvtCx0L7RgNC+0YLQsCDRg9C/0LDQuyDQtNC+INC60YDQuNGC0LjRh9C10YHQutC4INC90LjQt9C60L7Qs9C+INC30L3QsNGH0LXQvdC40Y8g0LjQu9C4INC/0YDQvtC40LfQvtGI0LvQuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LrQsNC60LjQtS3Qu9C40LHQviDRgdC+0LHRi9GC0LjRjywg0LLRi9C30YvQstCw0Y7RidC40LUg0L3QsNGB0YLQvtGA0L7QttC10L3QvdC+0YHRgtGMLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+0J7Qv9C40YHQsNC90LjQtSDQv9GA0L7RhtC10LTRg9GA0Ys6IDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPtCY0LfRg9GH0LjRgtC1INC/0YDQsNCy0LjQu9CwINC4INC30LDQv9C+0LvQvdC40YLQtSBb0LfQsNGP0LLQutGDINC90LAg0LvQuNGB0YLQuNC90LNdINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC90LjQvNC4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPtCU0L7QttC00LjRgtC10YHRjCDRgNC10LfRg9C70YzRgtCw0YLQvtCyINGA0LXQstGM0Y46INC10YHQu9C4INCy0YHRkSDQsiDQv9C+0YDRj9C00LrQtSwg0YLQviDQv9GA0L7QtdC60YIg0L/QvtGP0LLQuNGC0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC90LAg0YHRgtGA0LDQvdC40YbQtSDQutCw0L3QtNC40LTQsNGC0L7QsiDQvdCwINC70LjRgdGC0LjQvdCzINCyINGC0LXRh9C10L3QuNC1INC90LXQtNC10LvQuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7QndC1INGB0LjQtNC40YLQtSDRgdC70L7QttCwINGA0YPQutC4LCDQv9GA0L7QtNCy0LjQs9Cw0LnRgtC1INGB0LLQvtC5INGC0L7QutC10L0g0YfQtdGA0LXQtyDRgdC+0YbRgdC10YLQuCDQuCDQtNGA0YPQs9C40YVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDQuCDQt9Cw0LTQtdC50YHRgtCy0YPQudGC0LUg0YLQvtC60LXQvdGLIHtET05BVEV9ICjQtNC70Y8g0Y3RgtC+0LPQviDQvdGD0LbQvdC+INC40LzQtdGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQsNC60LrQsNGD0L3RgiDQvdCwIHtSdURFWH0pLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7Qn9GA0L7RhtC10LTRg9GA0LAg0LvQuNGB0YLQuNC90LPQsCDRgdGC0LDRgNGC0YPQtdGCINGB0YDQsNC30YMg0L/QvtGB0LvQtSDQv9GA0LXQvtC00L7Qu9C10L3QuNGPINC/0L7RgNC+0LPQsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINGE0LDQvdC00YDQsNC50LfQuNC90LPQsCDQuCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSDQv9C+0LTQs9C+0YLQvtCy0LrQuCDQuiDQt9Cw0L/Rg9GB0LrRgyDRiNC70Y7Qt9CwLiDQntCx0LXRgdC/0LXRh9GM0YLQtVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC00L7RgdGC0YPQv9C90L7RgdGC0Ywg0YHQstGP0LfQuCDRgdC+INGB0LLQvtC40Lwg0YLQtdGF0L3QuNGH0LXRgdC60LjQvC/QvNCw0YDQutC10YLQuNC90LPQvtCy0YvQvCDRgdC/0LXRhtC40LDQu9C40YHRgtC+0LxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQuNC70Lgg0LTRgNGD0LPQuNC8INC+0YLQstC10YLRgdGC0LLQtdC90L3Ri9C8INC70LjRhtC+0LwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvby5nbC9mb3Jtcy9SWmxDQXZidEJKMDc3Rzc2MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNVQk1JVCBSRVFVRVNUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuTGlzdGluZ05vdGljZTFJbmZvcm1lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25TdWJtaXRSZXF1ZXN0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5zdWJtaXRfcmVxdWVzdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuTGlzdGluZ05vdGljZTFJbmZvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MaXN0aW5nTm90aWNlMUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3Rpbmcubm90aWNlX2luZm9ybWVkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDRh9C4INCy0LDRiNC40Lwg0L/RgNC+0LXQutGC0LDQvCDQuCDQtNC+0LHRgNC+INC/0L7QttCw0LvQvtCy0LDRgtGMINC90LAge1J1REVYfSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldEJhbGFuY2VzKCk7XG4gICAgfVxuXG4gICAgX2dldEJhbGFuY2VzKCl7XG4gICAgICAgIGNvbnN0IGNvaW5zID0gZ2V0TGlzdGluZ0NvaW5zKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvaW5zOiBjb2luc30pO1xuICAgICAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFzc2V0XCIsIFwiQlRTXCIpLnRoZW4oYXNzZXRJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBBcGlzLmluc3RhbmNlKCkuZGJfYXBpKCkuZXhlYyhcImdldF9uYW1lZF9hY2NvdW50X2JhbGFuY2VzXCIsIFtjb2luLmFjY291bnQsIFthc3NldEluZm8uZ2V0KFwiaWRcIildXSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2lucyA9IHRoaXMuc3RhdGUuY29pbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGNvaW5zLmZpbmQoaSA9PiBpLmFjY291bnQgPT09IGNvaW4uYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB4LnZvdGVzID0gcmVzWzBdW1wiYW1vdW50XCJdIC8gTWF0aC5wb3coMTAsIGFzc2V0SW5mby5nZXQoXCJwcmVjaXNpb25cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh4LnZvdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvaW5zfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLmdldF9kb25hdGVfdG9rZW5zXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+RE9OQVRFXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtfX0JBU0VfVVJMX199bWFya2V0L0RPTkFURV9SVURFWC5CVENgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcuaGVyZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucmFua1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlTG9nb1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUFzc2V0TmFtZSBhbGlnbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5hc3NldF9uYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmdvYWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlR29hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmRvbmF0ZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuc3RhdHVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucHJvZ3Jlc3NcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29pbnNMaXN0KCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGdldENvaW5zTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHtjb2luc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgc29ydGVkQ29pbnMgPSBjb2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYi52b3RlcyAtIGEudm90ZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkQ29pbnMubWFwKChjb2luLCBpKSA9PiB7XG4gICAgICAgICAgICAvL2NvaW4udm90ZXMgPSBjb2luLnZvdGVzO1xuICAgICAgICAgICAgY29pbi52b3Rlc19mb3JfcGVyY2VudCA9IGNvaW4udm90ZXMgPCBjb2luLmdvYWwgPyBjb2luLnZvdGVzIDogY29pbi5nb2FsO1xuICAgICAgICAgICAgY29pbi5zdGF0dXMgPSBjb2luLnZvdGVzIDwgY29pbi5nb2FsID8gXCJjb2xsZWN0aW5nXCIgOiBcImRvbmVcIjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvaW5DYXJkTGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIHJhbms9e2kgKyAxfVxuICAgICAgICAgICAgICAgICAgICBjb2luPXtjb2lufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nUGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtEb251dENoYXJ0fSBmcm9tIFwiLi9Eb251dENoYXJ0XCI7XG5pbXBvcnQgU2VuZE1vZGFsIGZyb20gXCIuL0RvbmF0ZVNlbmRNb2RhbFwiO1xuaW1wb3J0IHtJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIENvaW5DYXJkTGlzdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5jb2luLnZvdGVzID0gMDtcblxuICAgICAgICAvKiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGtleTogcHJvcHMua2V5LFxuICAgICAgICAgICAgcmFuazogcHJvcHMucmFuayxcblxuICAgICAgICAgICAgY29pbjogcHJvcHMuY29pblxuICAgICAgICB9OyovXG5cbiAgICAgICAgLy90aGlzLnByb3BzLmtleSA9IHByb3BzLmtleTtcbiAgICB9XG5cbiAgICAvKiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmtleSAhPT0gbnAua2V5IHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJhbmsgIT09IG5wLnJhbmsgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29pbiAhPT0gbnMuY29pblxuICAgICAgICApO1xuICAgIH0qL1xuXG5cbiAgICAvKiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0ICE9PSBucC5hc3NldCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhXaWR0aCAhPT0gbnAubWF4V2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2hpdGVMaXN0ICE9PSBucC53aGl0ZUxpc3QgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nRXJyb3IgIT09IG5zLmltZ0Vycm9yXG4gICAgICAgICk7XG4gICAgfSovXG5cbiAgICAvKiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIC8vdGhpcy5zdGF0ZS5jb2luLmFjY291bnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnAuY29pbiAhPT0gdGhpcy5wcm9wcy5jb2luXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY29pbjogbnAuY29pblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIC8qICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5jb2luICE9PSB0aGlzLnByb3BzLmNvaW5cbiAgICAgICAgKTtcbiAgICB9Ki9cblxuICAgIC8qICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKG5wLmFjY291bnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5wTmFtZSA9IG5wLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROYW1lID1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQgJiYgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5hY2NvdW50IHx8IG5wTmFtZSAhPT0gY3VycmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgYWNjb3VudCBpbiBvcmRlciB0byBhY2Nlc3MgdGhlIGhlYWRlciByaWdodCBtZW51IG9wdGlvbnNcbiAgICAgICAgICAgICAgICBBY2NvdW50QWN0aW9ucy5zZXRDdXJyZW50QWNjb3VudC5kZWZlcihucE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIEZldGNoIHBvc3NpYmxlIGZlZSBhc3NldHMgaGVyZSB0byBhdm9pZCBhc3luYyBpc3N1ZXMgbGF0ZXIgKHdpbGwgcmVzb2x2ZSBhc3NldHMpXG4gICAgICAgICAgICAgICAgYWNjb3VudFV0aWxzLmdldFBvc3NpYmxlRmVlcyhucC5hY2NvdW50LCBcInRyYW5zZmVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSovXG5cbiAgICBfcmVuZGVyU2VuZE1vZGFsKCkge1xuICAgICAgICBsZXQgZnJvbV9uYW1lID0gXCJcIjtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgIH1jYXRjaChlKSB7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlbmRNb2RhbFxuICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF9saXN0aW5nXCJcbiAgICAgICAgICAgICAgICByZWZDYWxsYmFjaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB0aGlzLnNlbmRfbW9kYWwgPSBlO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZnJvbV9uYW1lPXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50ID8gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCA6IHRoaXMucHJvcHMuYWNjb3VudH1cbiAgICAgICAgICAgICAgICB0b19uYW1lPXt0aGlzLnByb3BzLmNvaW4uYWNjb3VudCA/IHRoaXMucHJvcHMuY29pbi5hY2NvdW50IDogZnJvbV9uYW1lfVxuICAgICAgICAgICAgICAgIGFzc2V0X2lkPXtcIjEuMy41NTg4XCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRyaWdnZXJTZW5kKGFzc2V0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbmRfYXNzZXQ6IGFzc2V0fSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VuZF9tb2RhbCkgdGhpcy5zZW5kX21vZGFsLnNob3coKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUobnApIHtcbiAgICAgICAgLy90aGlzLnByb3BzLmNvaW4uYWNjb3VudDtcbiAgICAgICAgcmV0dXJuIG5wLmNvaW4uYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jb2luLmFjY291bnQ7XG4gICAgfVxuXG4gICAgLyogICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICAvL3JldHVybiBucC5jb2luICE9IHRoaXMucHJvcHMuY29pbjtcblxuICAgICAgICBpZiAobnAuYWNjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgbnBOYW1lID0gbnAuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE5hbWUgPVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCAmJiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcblxuICAgICAgICAgICAgLyEqICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFjY291bnQgfHwgbnBOYW1lICE9PSBjdXJyZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBhY2NvdW50IGluIG9yZGVyIHRvIGFjY2VzcyB0aGUgaGVhZGVyIHJpZ2h0IG1lbnUgb3B0aW9uc1xuICAgICAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLnNldEN1cnJlbnRBY2NvdW50LmRlZmVyKG5wTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggcG9zc2libGUgZmVlIGFzc2V0cyBoZXJlIHRvIGF2b2lkIGFzeW5jIGlzc3VlcyBsYXRlciAod2lsbCByZXNvbHZlIGFzc2V0cylcbiAgICAgICAgICAgICAgICBhY2NvdW50VXRpbHMuZ2V0UG9zc2libGVGZWVzKG5wLmFjY291bnQsIFwidHJhbnNmZXJcIik7KiEvXG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIC8qICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgcmV0dXJuIG5wLmNvaW4gIT0gdGhpcy5wcm9wcy5jb2luO1xuICAgIH0qL1xuXG4gICAgLyogICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywpIHtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5jb2luICE9PSB0aGlzLnByb3BzLmNvaW47XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5jb2luICE9PSB0aGlzLnByb3BzLmNvaW47XG4gICAgfSovXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fcm93XCI+XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlclNlbmRNb2RhbCgpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFuayBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yYW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVMb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiA0MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWNvaW5zLWxvZ28vJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29pbi50aWNrZXIudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUFzc2V0TmFtZSBhbGlnbi1sZWZ0IG5vd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvaW4ubmFtZX0gKHt0aGlzLnByb3BzLmNvaW4udGlja2VyfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvaW4uc29vbiA9PT0gdHJ1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZ2F0ZXdheS5ydWRleC5jb21pbmdfc29vblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmNvbWluZ19zb29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIiwgY29sb3I6IFwiZ29sZFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVHb2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsOiZuYnNwO3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvaW4uZ29hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVZvdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3RlczombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvaW4udm90ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMudHJpZ2dlclNlbmQuYmluZCh0aGlzLCBcIjEuMy41NTg4XCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy50cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IERvbmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1czombmJzcDt7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb2luLnN0YXR1cyA9PT0gXCJjb2xsZWN0aW5nXCIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuY29sbGVjdGluZ1wiLz4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmRvbmVcIi8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7PERvbnV0Q2hhcnQgdm90ZXM9e3RoaXMucHJvcHMuY29pbi52b3Rlc19mb3JfcGVyY2VudH0gZ29hbD17dGhpcy5wcm9wcy5jb2luLmdvYWx9Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuQ29pbkNhcmRMaXN0aW5nID0gY29ubmVjdChcbiAgICBDb2luQ2FyZExpc3RpbmcsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb2luQ2FyZExpc3Rpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0RvbnV0Q2hhcnQuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBEb251dENoYXJ0ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKChwcm9wcy52b3RlcyAvIHByb3BzLmdvYWwpICogMTAwKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0LWhvbGVcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9udXQtcmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJsaWdodGdyYXlcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb251dC1zZWdtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2VEYXNoYXJyYXk6IGAke3BlcmNlbnR9IDEwMGB9fVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0PVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmNlbnRcIj57cGVyY2VudCArIFwiJVwifTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtTZW5kTW9kYWx9IGZyb20gXCIuLi9Nb2RhbC9TZW5kTW9kYWxcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclN0eWxlR3VpZGVcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgRmVlQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9GZWVBc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQge2lzTmFOfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQge0Zvcm0sIE1vZGFsLCBCdXR0b24sIFRvb2x0aXAsIElucHV0fSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQgWmZBcGkgZnJvbSBcInJlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdXRpbHMvZm91bmRhdGlvbi1hcGlcIjtcbmltcG9ydCB7Z2V0V2FsbGV0TmFtZX0gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIERvbmF0ZVNlbmRNb2RhbCBleHRlbmRzIFNlbmRNb2RhbCB7XG5cbi8qICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcbiAgICB9Ki9cblxuICAgIC8vTk9OT05PXG4vKiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIGxldCB7YXNzZXRfdHlwZXM6IGN1cnJlbnRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XG4gICAgICAgIGxldCB7YXNzZXRfdHlwZXM6IG5leHRfYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKG5zKTtcblxuICAgICAgICBpZiAobmV4dF9hc3NldF90eXBlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQobmV4dF9hc3NldF90eXBlc1swXSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudF90eXBlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQW1vdW50Q2hhbmdlZCh7YW1vdW50OiBucy5hbW91bnQsIGFzc2V0fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnMub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB0aGlzLl9jaGVja0JhbGFuY2UobnMpO1xuICAgICAgICBpZiAoIW5zLm9wZW4gJiYgIXRoaXMuc3RhdGUub3BlbikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vaWYgKCFucy50b19uYW1lICYmICF0aGlzLnN0YXRlLnRvX25hbWUpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0qL1xuXG4gICAgLyogICBfaW5pdEZvcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRvX25hbWUgIT0gdGhpcy5wcm9wcy5mcm9tX25hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvX25hbWU6IHRoaXMucHJvcHMudG9fbmFtZSxcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50OiBDaGFpblN0b3JlLmdldEFjY291bnQodGhpcy5wcm9wcy50b19uYW1lKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5mcm9tX25hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZyb21fbmFtZTogdGhpcy5wcm9wcy5mcm9tX25hbWUsXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBDaGFpblN0b3JlLmdldEFjY291bnQodGhpcy5wcm9wcy5mcm9tX25hbWUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmZyb21fbmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9uYW1lOiBjdXJyZW50QWNjb3VudH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldF9pZCAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hc3NldF9pZCAhPT0gdGhpcy5wcm9wcy5hc3NldF9pZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQodGhpcy5wcm9wcy5hc3NldF9pZCk7XG4gICAgICAgICAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHByb3Bvc2UsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICBhc3NldF9pZCxcbiAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIHRvX25hbWUsXG4gICAgICAgICAgICBmcm9tX25hbWUsXG4gICAgICAgICAgICBtZW1vLFxuICAgICAgICAgICAgYmFsYW5jZUVycm9yLFxuICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgZnJvbV9teV9hY2NvdW50ID1cbiAgICAgICAgICAgIEFjY291bnRTdG9yZS5pc015QWNjb3VudChmcm9tX2FjY291bnQpIHx8XG4gICAgICAgICAgICBmcm9tX25hbWUgPT09IHRoaXMucHJvcHMucGFzc3dvcmRBY2NvdW50O1xuICAgICAgICBsZXQgZnJvbV9lcnJvciA9XG4gICAgICAgICAgICBmcm9tX2FjY291bnQgJiYgIWZyb21fbXlfYWNjb3VudCAmJiAhcHJvcG9zZSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikgJiYgIWZyb21fZXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgICAgIGxldCBfZXJyb3IgPSB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IGFzc2V0ID8gYXNzZXQuZ2V0KFwiaWRcIikgOiBhc3NldF90eXBlc1swXTtcblxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0VG90YWwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtfZXJyb3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0Z1bmRzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9wb3NlX2luY29tcGxldGUgPSBwcm9wb3NlICYmICFwcm9wb3NlX2FjY291bnQ7XG4gICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGFtb3VudCwgLywvZywgXCJcIilcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaXNBbW91bnRWYWxpZCA9IGFtb3VudFZhbHVlICYmICFpc05hTihhbW91bnRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGlzU3VibWl0Tm90VmFsaWQgPVxuICAgICAgICAgICAgIWZyb21fYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcbiAgICAgICAgICAgICFpc0Ftb3VudFZhbGlkIHx8XG4gICAgICAgICAgICAhYXNzZXQgfHxcbiAgICAgICAgICAgIGZyb21fZXJyb3IgfHxcbiAgICAgICAgICAgIHByb3Bvc2VfaW5jb21wbGV0ZSB8fFxuICAgICAgICAgICAgYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIikgPT0gdG9fYWNjb3VudC5nZXQoXCJpZFwiKTtcblxuICAgICAgICBsZXQgdGFiSW5kZXggPSB0aGlzLnByb3BzLnRhYkluZGV4OyAvLyBDb250aW51ZSB0YWJJbmRleCBvbiBwcm9wcyBjb3VudFxuXG4gICAgICAgIHJldHVybiAhdGhpcy5zdGF0ZS5vcGVuID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBpZD1cInNlbmRfbW9kYWxfd3JhcHBlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtoaWRkZW4gfHwgIXRoaXMuc3RhdGUub3BlbiA/IFwiaGlkZVwiIDogXCJcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc01vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3Bvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJvcG9zZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2Zlci5zZW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogXCIxOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpc3RpbmcubW9kYWxfaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibGlzdGluZy5tb2RhbC5uZWVkX2J1eV9kb25hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJsaXN0aW5nLm1vZGFsLmhlYWRlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aC13cmFwcGVyXCIgbGF5b3V0PVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnJvbV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZnJvbUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Gcm9tQWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXt0b19uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dG9fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vblRvQWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFtb3VudENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5sZW5ndGggPiAwICYmIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF90eXBlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXthc3NldF90eXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOYU49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8RG9uYXRlU2VuZE1vZGFsIHsuLi50aGlzLnByb3BzfSByZWY9e3RoaXMucHJvcHMucmVmQ2FsbGJhY2t9Lz47XG4gICAgfVxufVxuXG5Eb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlciA9IGNvbm5lY3QoXG4gICAgRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHRhYkluZGV4OiBwcm9wcy50YWJJbmRleCB8fCAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE4T0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBTUE7QUFOQTtBQVhBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVpBO0FBVkE7QUEyQkE7QUFoREE7QUFtREE7QUFDQTtBQW5TQTtBQW1TQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBblRBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFGQTtBQUhBO0FBREE7QUFjQTtBQWZBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBSkE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUhBO0FBV0E7QUFYQTtBQUFBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBbEVBO0FBa0dBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFRQTtBQVRBO0FBVUE7QUFDQTtBQVhBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUE5SEE7QUFKQTtBQTNCQTtBQURBO0FBREE7QUFEQTtBQUhBO0FBK0tBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBN09BO0FBQ0E7QUF3VEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFPQTtBQVpBO0FBYUE7QUFDQTtBQUNBOzs7Ozs7OztBQVNBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7O0FBSUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFKQTtBQWRBO0FBMkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFBQTtBQUxBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQXZCQTtBQWtDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBbkNBO0FBNUJBO0FBRkE7QUF3RUE7Ozs7QUF6TUE7QUFDQTtBQTRNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQVhBO0FBQ0E7QUFjQTs7Ozs7Ozs7QUMxT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBakJBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQTlCQTtBQW1DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUdBO0FBQ0E7QUFwQkE7QUFBQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFOQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBVEE7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBcEJBO0FBZ0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7O0FBREE7QUFPQTtBQVBBO0FBSkE7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQVhBO0FBM0NBO0FBaEJBO0FBaENBO0FBSkE7QUFrSEE7Ozs7QUF4UUE7QUFDQTtBQTJRQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBQ0E7QUFhQTs7OztBIiwic291cmNlUm9vdCI6IiJ9