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

        return _possibleConstructorReturn(this, (CoinCardListing.__proto__ || Object.getPrototypeOf(CoinCardListing)).call(this, props));

        /*        this.state = {
            key: props.key,
            rank: props.rank,
             coin: props.coin
        };*/

        //this.props.key = props.key;
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

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DonateSendModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
                id: "send_modal_listing",
                refCallback: function refCallback(e) {
                    if (e) _this2.send_modal = e;
                },
                from_name: this.props.currentAccount ? this.props.currentAccount : this.props.account.get("name"),
                to_name: this.props.coin.account ? this.props.coin.account : "rudex",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy4zMTZkNTc1Njg5NDMxOTYwZDY1ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0xpc3RpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Db2luQ2FyZExpc3RpbmcuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbnV0Q2hhcnQuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbmF0ZVNlbmRNb2RhbC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9MaXN0aW5nUGFnZS5jc3NcIjtcblxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7RmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmltcG9ydCBDb2luQ2FyZExpc3RpbmcgZnJvbSBcIi4vQ29pbkNhcmRMaXN0aW5nXCI7XG5pbXBvcnQge2dldExpc3RpbmdDb2luc30gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgTGlzdGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBMaXN0aW5nTm90aWNlMUluZm9ybWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvaW5zOiBbXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdFJlcXVlc3QoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBudWxsfSk7XG4gICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ29vLmdsL2Zvcm1zL1JabENBdmJ0QkowNzdHNzYyXCI7XG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9nb28uZ2wvZm9ybXMvUlpsQ0F2YnRCSjA3N0c3NjJcIiwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgb25MaXN0aW5nTm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIExpc3RpbmdOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBSdURFWCA9ICg8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+UnVERVg8L3NwYW4+KTtcbiAgICAgICAgbGV0IERPTkFURSA9IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX1cbiAgICAgICAgICAgICAgICBocmVmPXtgJHtfX0JBU0VfVVJMX199YXNzZXQvRE9OQVRFYH1cbiAgICAgICAgICAgICAgICAvL3RhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAvPkRPTkFURVxuICAgICAgICAgICAgPC9hPik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuXG4gICAgICAgICAgICAgICAgey8qVGFicyovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLWNvbnRhaW5lciBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9XCJwZXJtaXNzaW9uc1RhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgYm9yZGVyZWQtaGVhZGVyIGNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q2xhc3M9XCJwYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBET05BVEUgUFJPR1JFU1MqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImxpc3RpbmcuZG9uYXRlX3Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiIHRhYkluZGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCIgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC11cC0xIG1lZGl1bS11cC0xIGxhcmdlLXVwLTEgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvaW5zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiBcIjEwcHhcIn19PjxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImxpc3RpbmcubG9hZGluZ1wiLz57XCIgXCJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29udGVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwibGlzdGluZy5hZGRfY29pblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhvcml6b250YWxcIiB0YWJJbmRleD17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGhlbHAtY29udGVudC1sYXlvdXRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj7Qm9C40YHRgtC40L3QsyDRgtC+0LrQtdC90L7QsiDQvdCwIHtSdURFWH0g0L7RgtC60YDRi9GCINC00LvRjyDQstGB0LXRhSDQttC10LvQsNGO0YnQuNGFITwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHRgNGL0Lkg0LTQtdC90YwsINGD0LLQsNC20LDQtdC80YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Lgge1J1REVYfSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0LXQs9C+0LTQvdGPINC80Ysg0YXQvtGC0LjQvCDQv9GA0LXQtNGB0YLQsNCy0LjRgtGMINCy0LDQvCDQvdC+0LLRi9C5INGB0LXRgNCy0LjRgSwg0L4g0LTQvtCx0LDQstC70LXQvdC40Lgg0LrQvtGC0L7RgNC+0LPQviDQvdCw0YFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC00LDQstC90L4g0Lgg0L3QtdC+0LTQvdC+0LrRgNCw0YLQvdC+INC/0YDQvtGB0LjQu9C4LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KEg0L3QsNGB0YLQvtGP0YnQtdCz0L4g0LzQvtC80LXQvdGC0LAg0LvRjtCx0L7QuSDQv9GA0L7QtdC60YIsINC90LDQvNC10YDQtdCy0LDRjtGJ0LjQudGB0Y8g0LfQsNC/0YPRgdGC0LjRgtGMINGC0L7RgNCz0Lgg0YLQvtC60LXQvdCwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRgdCy0L7QtdCz0L4g0L/RgNC+0LXQutGC0LAg0L3QsCDQv9C70LDRgtGE0L7RgNC80LUge1J1REVYfSwg0LzQvtC20LXRgiDQu9C10LPQutC+INC4INC/0YDQvtGB0YLQviDRjdGC0L5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC+0YHRg9GJ0LXRgdGC0LLQuNGC0Ywg0L/QvtGB0YDQtdC00YHRgtCy0L7QvCDQvdCw0YjQtdCz0L4g0YHQtdGA0LLQuNGB0LAg0LvQuNGB0YLQuNC90LPQsC5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNGLINC00L7Qu9Cz0L4g0LTRg9C80LDQu9C4INC+INGC0L7QvCwg0LrQsNC6INC20LUg0YHQtNC10LvQsNGC0Ywg0Y3RgtC+0YIg0L/RgNC+0YbQtdGB0YEg0LzQsNC60YHQuNC80LDQu9GM0L3QviDQtNC+0YHRgtGD0L/QvdGL0LxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC4INC/0L7QvdGP0YLQvdGL0Lwg0LTQu9GPINCy0YHQtdGFLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0Jgg0L3QsNGI0LvQuCwg0L3QsCDQvdCw0Ygg0LLQt9Cz0LvRj9C0LCDQtNC+0LLQvtC70YzQvdC+INGN0LvQtdCz0LDQvdGC0L3QvtC1INGA0LXRiNC10L3QuNC1LCDRgdGD0YLRjCDQutC+0YLQvtGA0L7Qs9C+INCyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRgdC70LXQtNGD0Y7RidC10Lw6INC60LDQttC00L7QvNGDINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjiB7UnVERVh9INC00LDRkdGC0YHRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCy0YvQtNCy0LjQvdGD0YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0YLQvtC60LXQvSDQutCw0LrQvtCz0L4t0LvQuNCx0L4g0L/RgNC+0LXQutGC0LAg0L3QsCDQu9C40YHRgtC40L3QsyDQuC/QuNC70Lgg0L/QvtC00LTQtdGA0LbQsNGC0Ywg0LTQvtC90LDRgtC+0Lwg0YPQttC1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQstGL0LTQstC40L3Rg9GC0YvQuSDRgtC+0LrQtdC9LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQp9GC0L7QsdGLINCy0YvQtNCy0LjQvdGD0YLRjCDRgtC+0LrQtdC9INC60LDQutC+0LPQvi3Qu9C40LHQviDQv9GA0L7QtdC60YLQsCDQvdCwINC70LjRgdGC0LjQvdCzLCDQstCw0Lwg0L3Rg9C20L3QvlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LfQsNC/0L7Qu9C90LjRgtGMINC/0YDQvtGB0YLRg9GOINGE0L7RgNC80YMsINC60L7RgtC+0YDRg9GOINC80L7QttC90L4g0L3QsNC50YLQuCDQsdGD0LTQtdGCINC90LjQttC1INC90LAg0Y3RgtC+0LlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINGB0YLRgNCw0L3QuNGG0LUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0YHQu9C1INC/0YDQvtCy0L7QtNC40LzQvtCz0L4g0L3QsNGI0LXQuSDQutC+0LzQsNC90LTQvtC5INCy0YHQtdGB0YLQvtGA0L7QvdC90LXQs9C+INGA0LXQstGM0Y4sINC90LAg0LrQvtGC0L7RgNC+0LVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC+0YLQstC+0LTQuNGC0YHRjyDRgdGA0L7QuiDQtNC+IDEg0L3QtdC00LXQu9C4LCDQuCDQtdGB0LvQuCDQstCw0Ygg0L/RgNC+0LXQutGCINGD0LTQvtCy0LvQtdGC0LLQvtGA0Y/QtdGCINC90LDRiNC40LxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCy0L3Rg9GC0YDQtdC90L3QuNC8INC60YDQuNGC0LXRgNC40Y/QvCwg0YLQvtC60LXQvSDQtNC+0L/Rg9GB0LrQsNC10YLRgdGPINC6INC/0YPQsdC70LjRh9C90L7QvNGDINC60YDQsNGD0LTRhNCw0L3QtNC40L3Qs9GDINGBXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRhtC10LvRjNGOINC70LjRgdGC0LjQvdCz0LAg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdC8INGA0LDQt9C00LXQu9C1INCx0LjRgNC20LguXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQntGB0L3QvtCy0L3QsNGPINGG0LXQu9GMINGC0LDQutC+0LPQviDQv9GD0LHQu9C40YfQvdC+0LPQviDQtNC+0L3QsNGC0LAg4oCTINGB0LHQvtGAINGB0YDQtdC00YHRgtCyINC90LAg0LfQsNC/0YPRgdC6INC4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRgtC10YXQvdC40YfQtdGB0LrRg9GOINC/0L7QtNC00LXRgNC20LrRgyDRiNC70Y7Qt9CwLCDQsCDRgtCw0LrQttC1INC+0YbQtdC90LrQsCDQv9C+0YLQtdC90YbQuNCw0LvRjNC90L7Qs9C+INGB0L/RgNC+0YHQsCDQvdCwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQutC+0L3QutGA0LXRgtC90YvQuSDRgtC+0LrQtdC9LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodCx0L7RgCDQtNC+0L3QsNGC0L7QsiDQvtGB0YPRidC10YHRgtCy0LvRj9C10YLRgdGPINCyINGB0L/QtdGG0LjQsNC70YzQvdC+0Lwg0YLQvtC60LXQvdC1IHtET05BVEV9LCDQutC+0YLQvtGA0YvQuSDQstGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQvNC+0LbQtdGC0LUg0L/RgNC40L7QsdGA0LXRgdGC0LhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtfX0JBU0VfVVJMX199bWFya2V0L0RPTkFURV9SVURFWC5CVENgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5oZXJlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCa0LDQuiDRgtC+0LvRjNC60L4g0LLRiyDQv9GA0LjQvtCx0YDQtdC70Lgg0YLQvtC60LXQvdGLIHtET05BVEV9LCDQstGLINCy0L7Qu9GM0L3RiyDQv9C+0LTQtNC10YDQttCw0YLRjCDQuNC80Lgg0LvRjtCx0L7QuVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LjQvdGC0LXRgNC10YHRg9GO0YnQuNC5INCy0LDRgSDQv9GA0L7QtdC60YIg0L/Rg9GC0ZHQvCDQvtGC0L/RgNCw0LLQutC4INC90LAg0LDQutC60LDRg9C90YIg0YfQtdGA0LXQtyDRgdC/0LXRhtC40LDQu9GM0L3Rg9GOXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRhNC+0YDQvNGDINC40LvQuCDQv9GA0Y/QvNC+0Lkg0L/QtdGA0LXQstC+0LQuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtGB0LvQtSDRgtC+0LPQviDQutCw0Log0YLQvtC60LXQvSDQv9GA0L7QtdC60YLQsCDQtNC+0YHRgtC40LMg0YPRgdGC0LDQvdC+0LLQu9C10L3QvdC+0LPQviDQv9C+0YDQvtCz0LAg0YTQsNC90LTRgNCw0LnQt9C40L3Qs9CwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LLRgdC1INGB0L7QsdGA0LDQvdC90YvQtSDQvdCwINC30LDQv9GD0YHQuiDRgtC+0LrQtdC90Ysge0RPTkFURX0g0YHQttC40LPQsNGO0YLRgdGPLCDQuCDQvdCw0YjQsCDQutC+0LzQsNC90LTQsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0L/RgNC40YHRgtGD0L/QsNC10YIg0Log0YDQsNC30YDQsNCx0L7RgtC60LUg0YjQu9GO0LfQsCDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0YLQvtC60LXQvdCwLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0L3QsNC80Lgg0LHRg9C00YPRgiDRg9GH0LjRgtGL0LLQsNGC0YzRgdGPINC4INC00YDRg9Cz0LjQtSDQutGA0LjRgtC10YDQuNC4LCDRgtCw0LrQuNC1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQutCw0Log0L7QsdGK0ZHQvCDRgtC+0YDQs9C+0LIg0YLQvtC60LXQvdCwLCDQuCDRh9GC0L4g0LfQsCDQvdCw0LzQuCDQvtGB0YLQsNGR0YLRgdGPINC/0YDQsNCy0L4g0YHQvtCy0LXRgNGI0LjRgtGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQtNC10LvQuNGB0YLQuNC90LMg0YLQvtC60LXQvdCwINC40YHRhdC+0LTRjyDQuNC3INGB0L7QsdGB0YLQstC10L3QvdGL0YUg0YHQvtC+0LHRgNCw0LbQtdC90LjQuSwg0L3QsNC/0YDQuNC80LXRgCwg0LXRgdC70Lgg0L7QsdGK0ZHQvFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LXQs9C+INGC0L7RgNCz0L7QstC+0LPQviDQvtCx0L7RgNC+0YLQsCDRg9C/0LDQuyDQtNC+INC60YDQuNGC0LjRh9C10YHQutC4INC90LjQt9C60L7Qs9C+INC30L3QsNGH0LXQvdC40Y8g0LjQu9C4INC/0YDQvtC40LfQvtGI0LvQuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0LrQsNC60LjQtS3Qu9C40LHQviDRgdC+0LHRi9GC0LjRjywg0LLRi9C30YvQstCw0Y7RidC40LUg0L3QsNGB0YLQvtGA0L7QttC10L3QvdC+0YHRgtGMLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+0J7Qv9C40YHQsNC90LjQtSDQv9GA0L7RhtC10LTRg9GA0Ys6IDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPtCY0LfRg9GH0LjRgtC1INC/0YDQsNCy0LjQu9CwINC4INC30LDQv9C+0LvQvdC40YLQtSBb0LfQsNGP0LLQutGDINC90LAg0LvQuNGB0YLQuNC90LNdINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC90LjQvNC4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPtCU0L7QttC00LjRgtC10YHRjCDRgNC10LfRg9C70YzRgtCw0YLQvtCyINGA0LXQstGM0Y46INC10YHQu9C4INCy0YHRkSDQsiDQv9C+0YDRj9C00LrQtSwg0YLQviDQv9GA0L7QtdC60YIg0L/QvtGP0LLQuNGC0YHRj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC90LAg0YHRgtGA0LDQvdC40YbQtSDQutCw0L3QtNC40LTQsNGC0L7QsiDQvdCwINC70LjRgdGC0LjQvdCzINCyINGC0LXRh9C10L3QuNC1INC90LXQtNC10LvQuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7QndC1INGB0LjQtNC40YLQtSDRgdC70L7QttCwINGA0YPQutC4LCDQv9GA0L7QtNCy0LjQs9Cw0LnRgtC1INGB0LLQvtC5INGC0L7QutC10L0g0YfQtdGA0LXQtyDRgdC+0YbRgdC10YLQuCDQuCDQtNGA0YPQs9C40YVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSDQuCDQt9Cw0LTQtdC50YHRgtCy0YPQudGC0LUg0YLQvtC60LXQvdGLIHtET05BVEV9ICjQtNC70Y8g0Y3RgtC+0LPQviDQvdGD0LbQvdC+INC40LzQtdGC0YxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQsNC60LrQsNGD0L3RgiDQvdCwIHtSdURFWH0pLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7Qn9GA0L7RhtC10LTRg9GA0LAg0LvQuNGB0YLQuNC90LPQsCDRgdGC0LDRgNGC0YPQtdGCINGB0YDQsNC30YMg0L/QvtGB0LvQtSDQv9GA0LXQvtC00L7Qu9C10L3QuNGPINC/0L7RgNC+0LPQsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINGE0LDQvdC00YDQsNC50LfQuNC90LPQsCDQuCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSDQv9C+0LTQs9C+0YLQvtCy0LrQuCDQuiDQt9Cw0L/Rg9GB0LrRgyDRiNC70Y7Qt9CwLiDQntCx0LXRgdC/0LXRh9GM0YLQtVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINC00L7RgdGC0YPQv9C90L7RgdGC0Ywg0YHQstGP0LfQuCDRgdC+INGB0LLQvtC40Lwg0YLQtdGF0L3QuNGH0LXRgdC60LjQvC/QvNCw0YDQutC10YLQuNC90LPQvtCy0YvQvCDRgdC/0LXRhtC40LDQu9C40YHRgtC+0LxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQuNC70Lgg0LTRgNGD0LPQuNC8INC+0YLQstC10YLRgdGC0LLQtdC90L3Ri9C8INC70LjRhtC+0LwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvby5nbC9mb3Jtcy9SWmxDQXZidEJKMDc3Rzc2MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNVQk1JVCBSRVFVRVNUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuTGlzdGluZ05vdGljZTFJbmZvcm1lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25TdWJtaXRSZXF1ZXN0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5zdWJtaXRfcmVxdWVzdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuTGlzdGluZ05vdGljZTFJbmZvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MaXN0aW5nTm90aWNlMUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3Rpbmcubm90aWNlX2luZm9ybWVkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDRh9C4INCy0LDRiNC40Lwg0L/RgNC+0LXQutGC0LDQvCDQuCDQtNC+0LHRgNC+INC/0L7QttCw0LvQvtCy0LDRgtGMINC90LAge1J1REVYfSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldEJhbGFuY2VzKCk7XG4gICAgfVxuXG4gICAgX2dldEJhbGFuY2VzKCl7XG4gICAgICAgIGNvbnN0IGNvaW5zID0gZ2V0TGlzdGluZ0NvaW5zKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvaW5zOiBjb2luc30pO1xuICAgICAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFzc2V0XCIsIFwiQlRTXCIpLnRoZW4oYXNzZXRJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBBcGlzLmluc3RhbmNlKCkuZGJfYXBpKCkuZXhlYyhcImdldF9uYW1lZF9hY2NvdW50X2JhbGFuY2VzXCIsIFtjb2luLmFjY291bnQsIFthc3NldEluZm8uZ2V0KFwiaWRcIildXSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2lucyA9IHRoaXMuc3RhdGUuY29pbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGNvaW5zLmZpbmQoaSA9PiBpLmFjY291bnQgPT09IGNvaW4uYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB4LnZvdGVzID0gcmVzWzBdW1wiYW1vdW50XCJdIC8gTWF0aC5wb3coMTAsIGFzc2V0SW5mby5nZXQoXCJwcmVjaXNpb25cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh4LnZvdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvaW5zfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLmdldF9kb25hdGVfdG9rZW5zXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+RE9OQVRFXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtfX0JBU0VfVVJMX199bWFya2V0L0RPTkFURV9SVURFWC5CVENgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcuaGVyZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucmFua1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlTG9nb1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUFzc2V0TmFtZSBhbGlnbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5hc3NldF9uYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmdvYWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlR29hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmRvbmF0ZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuc3RhdHVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucHJvZ3Jlc3NcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29pbnNMaXN0KCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGdldENvaW5zTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHtjb2luc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgc29ydGVkQ29pbnMgPSBjb2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYi52b3RlcyAtIGEudm90ZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkQ29pbnMubWFwKChjb2luLCBpKSA9PiB7XG4gICAgICAgICAgICAvL2NvaW4udm90ZXMgPSBjb2luLnZvdGVzO1xuICAgICAgICAgICAgY29pbi52b3Rlc19mb3JfcGVyY2VudCA9IGNvaW4udm90ZXMgPCBjb2luLmdvYWwgPyBjb2luLnZvdGVzIDogY29pbi5nb2FsO1xuICAgICAgICAgICAgY29pbi5zdGF0dXMgPSBjb2luLnZvdGVzIDwgY29pbi5nb2FsID8gXCJjb2xsZWN0aW5nXCIgOiBcImRvbmVcIjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvaW5DYXJkTGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIHJhbms9e2kgKyAxfVxuICAgICAgICAgICAgICAgICAgICBjb2luPXtjb2lufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nUGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtEb251dENoYXJ0fSBmcm9tIFwiLi9Eb251dENoYXJ0XCI7XG5pbXBvcnQgU2VuZE1vZGFsIGZyb20gXCIuL0RvbmF0ZVNlbmRNb2RhbFwiO1xuaW1wb3J0IHtJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIENvaW5DYXJkTGlzdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLyogICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBrZXk6IHByb3BzLmtleSxcbiAgICAgICAgICAgIHJhbms6IHByb3BzLnJhbmssXG5cbiAgICAgICAgICAgIGNvaW46IHByb3BzLmNvaW5cbiAgICAgICAgfTsqL1xuXG4gICAgICAgIC8vdGhpcy5wcm9wcy5rZXkgPSBwcm9wcy5rZXk7XG4gICAgfVxuXG4gICAgLyogICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5rZXkgIT09IG5wLmtleSB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yYW5rICE9PSBucC5yYW5rIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvaW4gIT09IG5zLmNvaW5cbiAgICAgICAgKTtcbiAgICB9Ki9cblxuXG4gICAgLyogICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCAhPT0gbnAuYXNzZXQgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4V2lkdGggIT09IG5wLm1heFdpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLndoaXRlTGlzdCAhPT0gbnAud2hpdGVMaXN0IHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmltZ0Vycm9yICE9PSBucy5pbWdFcnJvclxuICAgICAgICApO1xuICAgIH0qL1xuXG4gICAgLyogICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICAvL3RoaXMuc3RhdGUuY29pbi5hY2NvdW50XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5wLmNvaW4gIT09IHRoaXMucHJvcHMuY29pblxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNvaW46IG5wLmNvaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSovXG5cbiAgICAvKiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuY29pbiAhPT0gdGhpcy5wcm9wcy5jb2luXG4gICAgICAgICk7XG4gICAgfSovXG5cbiAgICAvKiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC5hY2NvdW50KSB7XG4gICAgICAgICAgICBjb25zdCBucE5hbWUgPSBucC5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TmFtZSA9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50ICYmIHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuYWNjb3VudCB8fCBucE5hbWUgIT09IGN1cnJlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IGFjY291bnQgaW4gb3JkZXIgdG8gYWNjZXNzIHRoZSBoZWFkZXIgcmlnaHQgbWVudSBvcHRpb25zXG4gICAgICAgICAgICAgICAgQWNjb3VudEFjdGlvbnMuc2V0Q3VycmVudEFjY291bnQuZGVmZXIobnBOYW1lKTtcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBwb3NzaWJsZSBmZWUgYXNzZXRzIGhlcmUgdG8gYXZvaWQgYXN5bmMgaXNzdWVzIGxhdGVyICh3aWxsIHJlc29sdmUgYXNzZXRzKVxuICAgICAgICAgICAgICAgIGFjY291bnRVdGlscy5nZXRQb3NzaWJsZUZlZXMobnAuYWNjb3VudCwgXCJ0cmFuc2ZlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0qL1xuXG4gICAgX3JlbmRlclNlbmRNb2RhbCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZW5kTW9kYWxcbiAgICAgICAgICAgICAgICBpZD1cInNlbmRfbW9kYWxfbGlzdGluZ1wiXG4gICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkgdGhpcy5zZW5kX21vZGFsID0gZTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGZyb21fbmFtZT17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCA/IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQgOiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICB0b19uYW1lPXt0aGlzLnByb3BzLmNvaW4uYWNjb3VudCA/IHRoaXMucHJvcHMuY29pbi5hY2NvdW50IDogXCJydWRleFwifVxuICAgICAgICAgICAgICAgIGFzc2V0X2lkPXtcIjEuMy41NTg4XCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRyaWdnZXJTZW5kKGFzc2V0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbmRfYXNzZXQ6IGFzc2V0fSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VuZF9tb2RhbCkgdGhpcy5zZW5kX21vZGFsLnNob3coKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUobnApIHtcbiAgICAgICAgLy90aGlzLnByb3BzLmNvaW4uYWNjb3VudDtcbiAgICAgICAgcmV0dXJuIG5wLmNvaW4uYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jb2luLmFjY291bnQ7XG4gICAgfVxuXG4gICAgLyogICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICAvL3JldHVybiBucC5jb2luICE9IHRoaXMucHJvcHMuY29pbjtcblxuICAgICAgICBpZiAobnAuYWNjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgbnBOYW1lID0gbnAuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE5hbWUgPVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCAmJiB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcblxuICAgICAgICAgICAgLyEqICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFjY291bnQgfHwgbnBOYW1lICE9PSBjdXJyZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBhY2NvdW50IGluIG9yZGVyIHRvIGFjY2VzcyB0aGUgaGVhZGVyIHJpZ2h0IG1lbnUgb3B0aW9uc1xuICAgICAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLnNldEN1cnJlbnRBY2NvdW50LmRlZmVyKG5wTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggcG9zc2libGUgZmVlIGFzc2V0cyBoZXJlIHRvIGF2b2lkIGFzeW5jIGlzc3VlcyBsYXRlciAod2lsbCByZXNvbHZlIGFzc2V0cylcbiAgICAgICAgICAgICAgICBhY2NvdW50VXRpbHMuZ2V0UG9zc2libGVGZWVzKG5wLmFjY291bnQsIFwidHJhbnNmZXJcIik7KiEvXG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIC8qICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgcmV0dXJuIG5wLmNvaW4gIT0gdGhpcy5wcm9wcy5jb2luO1xuICAgIH0qL1xuXG4gICAgLyogICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywpIHtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5jb2luICE9PSB0aGlzLnByb3BzLmNvaW47XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5jb2luICE9PSB0aGlzLnByb3BzLmNvaW47XG4gICAgfSovXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fcm93XCI+XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlclNlbmRNb2RhbCgpfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFuayBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yYW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVMb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiA0MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWNvaW5zLWxvZ28vJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29pbi50aWNrZXIudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlQXNzZXROYW1lIGFsaWduLWxlZnQgbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29pbi5uYW1lfSAoe3RoaXMucHJvcHMuY29pbi50aWNrZXJ9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29pbi5zb29uID09PSB0cnVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJnYXRld2F5LnJ1ZGV4LmNvbWluZ19zb29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29udGVudD1cImxpc3RpbmcudGFibGUuY29taW5nX3Nvb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBjb2xvcjogXCJnb2xkXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUdvYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWw6Jm5ic3A7e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29pbi5nb2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlVm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdGVzOiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29pbi52b3Rlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy50cmlnZ2VyU2VuZC5iaW5kKHRoaXMsIFwiMS4zLjU1ODhcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgRG9uYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9CbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzOiZuYnNwO3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvaW4uc3RhdHVzID09PSBcImNvbGxlY3RpbmdcIiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5jb2xsZWN0aW5nXCIvPik6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5kb25lXCIvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgezxEb251dENoYXJ0IHZvdGVzPXt0aGlzLnByb3BzLmNvaW4udm90ZXNfZm9yX3BlcmNlbnR9IGdvYWw9e3RoaXMucHJvcHMuY29pbi5nb2FsfS8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbkNvaW5DYXJkTGlzdGluZyA9IGNvbm5lY3QoXG4gICAgQ29pbkNhcmRMaXN0aW5nLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmUsIEFjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OlxuICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29pbkNhcmRMaXN0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9Eb251dENoYXJ0LmNzc1wiO1xuXG5leHBvcnQgY29uc3QgRG9udXRDaGFydCA9IHByb3BzID0+IHtcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgocHJvcHMudm90ZXMgLyBwcm9wcy5nb2FsKSAqIDEwMCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAzMiAzMlwiIGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb251dC1ob2xlXCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0LXJpbmdcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwibGlnaHRncmF5XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9udXQtc2VnbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlRGFzaGFycmF5OiBgJHtwZXJjZW50fSAxMDBgfX1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldD1cIjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zaWRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJjZW50XCI+e3BlcmNlbnQgKyBcIiVcIn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7U2VuZE1vZGFsfSBmcm9tIFwiLi4vTW9kYWwvU2VuZE1vZGFsXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JTdHlsZUd1aWRlXCI7XG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuaW1wb3J0IEZlZUFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtpc05hTn0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtGb3JtLCBNb2RhbCwgQnV0dG9uLCBUb29sdGlwLCBJbnB1dH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XG5pbXBvcnQge2dldFdhbGxldE5hbWV9IGZyb20gXCIuLi8uLi9icmFuZGluZ1wiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuXG5jbGFzcyBEb25hdGVTZW5kTW9kYWwgZXh0ZW5kcyBTZW5kTW9kYWwge1xuXG4vKiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZShwcm9wcyk7XG4gICAgfSovXG5cbiAgICAvL05PTk9OT1xuLyogICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzOiBjdXJyZW50X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzOiBuZXh0X2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cyhucyk7XG5cbiAgICAgICAgaWYgKG5leHRfYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KG5leHRfYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRfdHlwZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFtb3VudENoYW5nZWQoe2Ftb3VudDogbnMuYW1vdW50LCBhc3NldH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5zLm9wZW4gJiYgIXRoaXMuc3RhdGUub3BlbikgdGhpcy5fY2hlY2tCYWxhbmNlKG5zKTtcbiAgICAgICAgaWYgKCFucy5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvL2lmICghbnMudG9fbmFtZSAmJiAhdGhpcy5zdGF0ZS50b19uYW1lKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9Ki9cblxuICAgIC8qICAgX2luaXRGb3JtKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50b19uYW1lICE9IHRoaXMucHJvcHMuZnJvbV9uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b19uYW1lOiB0aGlzLnByb3BzLnRvX25hbWUsXG4gICAgICAgICAgICAgICAgdG9fYWNjb3VudDogQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMudG9fbmFtZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZnJvbV9uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmcm9tX25hbWU6IHRoaXMucHJvcHMuZnJvbV9uYW1lLFxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMuZnJvbV9uYW1lKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5mcm9tX25hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zyb21fbmFtZTogY3VycmVudEFjY291bnR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRfaWQgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYXNzZXRfaWQgIT09IHRoaXMucHJvcHMuYXNzZXRfaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KHRoaXMucHJvcHMuYXNzZXRfaWQpO1xuICAgICAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSovXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwcm9wb3NlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgYXNzZXRfaWQsXG4gICAgICAgICAgICBwcm9wb3NlX2FjY291bnQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b19uYW1lLFxuICAgICAgICAgICAgZnJvbV9uYW1lLFxuICAgICAgICAgICAgbWVtbyxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvcixcbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGZyb21fbXlfYWNjb3VudCA9XG4gICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoZnJvbV9hY2NvdW50KSB8fFxuICAgICAgICAgICAgZnJvbV9uYW1lID09PSB0aGlzLnByb3BzLnBhc3N3b3JkQWNjb3VudDtcbiAgICAgICAgbGV0IGZyb21fZXJyb3IgPVxuICAgICAgICAgICAgZnJvbV9hY2NvdW50ICYmICFmcm9tX215X2FjY291bnQgJiYgIXByb3Bvc2UgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IHthc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpICYmICFmcm9tX2Vycm9yKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgICAgICBsZXQgX2Vycm9yID0gdGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgPyBcImhhcy1lcnJvclwiIDogXCJcIjtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0X3R5cGVzWzBdKTtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldCA/IGFzc2V0LmdldChcImlkXCIpIDogYXNzZXRfdHlwZXNbMF07XG5cbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFRvdGFsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17X2Vycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GdW5kc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvcG9zZV9pbmNvbXBsZXRlID0gcHJvcG9zZSAmJiAhcHJvcG9zZV9hY2NvdW50O1xuICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChhbW91bnQsIC8sL2csIFwiXCIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlzQW1vdW50VmFsaWQgPSBhbW91bnRWYWx1ZSAmJiAhaXNOYU4oYW1vdW50VmFsdWUpO1xuICAgICAgICBjb25zdCBpc1N1Ym1pdE5vdFZhbGlkID1cbiAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcbiAgICAgICAgICAgICF0b19hY2NvdW50IHx8XG4gICAgICAgICAgICAhaXNBbW91bnRWYWxpZCB8fFxuICAgICAgICAgICAgIWFzc2V0IHx8XG4gICAgICAgICAgICBmcm9tX2Vycm9yIHx8XG4gICAgICAgICAgICBwcm9wb3NlX2luY29tcGxldGUgfHxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvciB8fFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09IHRvX2FjY291bnQuZ2V0KFwiaWRcIik7XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gdGhpcy5wcm9wcy50YWJJbmRleDsgLy8gQ29udGludWUgdGFiSW5kZXggb24gcHJvcHMgY291bnRcblxuICAgICAgICByZXR1cm4gIXRoaXMuc3RhdGUub3BlbiA/IG51bGwgOiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgaWQ9XCJzZW5kX21vZGFsX3dyYXBwZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aGlkZGVuIHx8ICF0aGlzLnN0YXRlLm9wZW4gPyBcImhpZGVcIiA6IFwiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXROb3RWYWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTdWJtaXROb3RWYWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByb3Bvc2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNmZXIuc2VuZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJDYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IFwiMThweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhaXNTdWJtaXROb3RWYWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJsaXN0aW5nLm1vZGFsX2hlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImxpc3RpbmcubW9kYWwubmVlZF9idXlfZG9uYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wibGlzdGluZy5tb2RhbC5oZWFkZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0X25hbWU9e2dldFdhbGxldE5hbWUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGgtd3JhcHBlclwiIGxheW91dD1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmZyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Zyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZyb21DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uRnJvbUFjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7PEFjY291bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci50b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dG9fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Ub0FjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfdHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17YXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBEb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPERvbmF0ZVNlbmRNb2RhbCB7Li4udGhpcy5wcm9wc30gcmVmPXt0aGlzLnByb3BzLnJlZkNhbGxiYWNrfS8+O1xuICAgIH1cbn1cblxuRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIgPSBjb25uZWN0KFxuICAgIERvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICB0YWJJbmRleDogcHJvcHMudGFiSW5kZXggfHwgMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBOE9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQU1BO0FBTkE7QUFYQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFaQTtBQVZBO0FBMkJBO0FBaERBO0FBbURBO0FBQ0E7QUFuU0E7QUFtU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQW5UQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRkE7QUFIQTtBQURBO0FBY0E7QUFmQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFMQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUpBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFIQTtBQVdBO0FBWEE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWxFQTtBQWtHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUxBO0FBUUE7QUFUQTtBQVVBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBOUhBO0FBSkE7QUEzQkE7QUFEQTtBQURBO0FBREE7QUFIQTtBQStLQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTdPQTtBQUNBO0FBd1RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBOzs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7O0FBSUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFKQTtBQWRBO0FBMkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFBQTtBQUxBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQXZCQTtBQWtDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBbkNBO0FBNUJBO0FBRkE7QUF3RUE7Ozs7QUFqTUE7QUFDQTtBQW9NQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQVhBO0FBQ0E7QUFjQTs7Ozs7Ozs7QUNsT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBakJBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQTlCQTtBQW1DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUdBO0FBQ0E7QUFwQkE7QUFBQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFOQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBVEE7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBcEJBO0FBZ0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7Ozs7O0FBREE7QUFPQTtBQVBBO0FBSkE7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQVhBO0FBM0NBO0FBaEJBO0FBaENBO0FBSkE7QUFrSEE7Ozs7QUF4UUE7QUFDQTtBQTJRQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBQ0E7QUFhQTs7OztBIiwic291cmNlUm9vdCI6IiJ9