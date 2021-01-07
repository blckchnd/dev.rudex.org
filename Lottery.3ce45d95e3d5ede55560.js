(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[40],{

/***/ 3226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LotteryPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3227);
/* harmony import */ var _LotteryPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LotteryPage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(510);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(441);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2963);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2826);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(757);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1867);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(746);
/* harmony import */ var _LotterySendModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3229);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(574);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1907);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














//======






var LotteryPage = function (_React$Component) {
    _inherits(LotteryPage, _React$Component);

    function LotteryPage() {
        _classCallCheck(this, LotteryPage);

        var _this = _possibleConstructorReturn(this, (LotteryPage.__proto__ || Object.getPrototypeOf(LotteryPage)).call(this));

        _this.getContent = function () {
            var link_ru = "https://golos.id/ru--blokcheijn/@rudex/nachalnoe-raspredelenie-tokenov-blokcheina-graphene-ot-komandy-rudex?invite=rudex";
            var link_en = "https://steemit.com/blockchain/@rudex/graphene-blockchain-by-rudex-team-initial-distribution-announcement";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "lotteryTable" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
                        {
                            style: { margin: 2, fontSize: "1.0rem" },
                            to: "/market/RUDEX.LOTTERY_RUDEX.BTC"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.buy" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { style: { margin: 2, fontSize: "1.0rem" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                maxWidth: 25,
                                replaceNoneToBts: false,
                                name: "RUDEX.LOTTERY"
                            }),
                            "LOTTERY"
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "lotteryTable" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "lotteryBlock" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.text.main" })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "lotteryBlock" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.all_stat.main" })
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
                                    "ol",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.text.block_1" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "a",
                                            {
                                                style: {
                                                    padding: "0.5rem",
                                                    lineHeight: "2rem",
                                                    fontSize: "1em"
                                                },
                                                href: "https://gph.ai",
                                                target: "_blank",
                                                rel: "noopener noreferrer"
                                            },
                                            "GPH"
                                        ),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.text.block_11" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.text.block_12" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"],
                                            {
                                                style: {
                                                    margin: 2,
                                                    fontSize: "1.0rem"
                                                },
                                                to: "/market/RUDEX.LOTTERY_RUDEX.BTC"
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                "span",
                                                {
                                                    style: {
                                                        margin: 2,
                                                        fontSize: "1.0rem"
                                                    }
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                    maxWidth: 25,
                                                    replaceNoneToBts: false,
                                                    name: "RUDEX.LOTTERY"
                                                }),
                                                "LOTTERY/BTC"
                                            )
                                        ),
                                        ".",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.text.block_13" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "a",
                                            {
                                                style: {
                                                    padding: "0.5rem",
                                                    lineHeight: "2rem",
                                                    fontSize: "1em"
                                                },
                                                href: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().settings.get("locale") == "ru" ? link_ru : link_en,
                                                target: "_blank",
                                                rel: "noopener noreferrer"
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.more" })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.text.block_2" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.text.block_3" })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "a",
                                            {
                                                onClick: _this.triggerSend.bind(_this, "1.3.5878", "RUDEX.LOTTERY")
                                            },
                                            "\xA0",
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.reg" })
                                        )
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "ul",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.all_stat.regs_all" }),
                                        " ",
                                        _this.state.common_stat.tickets
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.all_stat.win_all" }),
                                        " ",
                                        _this.state.common_stat.tokens
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.all_stat.try" }),
                                        " ",
                                        _this.state.common_stat.purchase_total
                                    )
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "lotteryTable", style: { width: "50%" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tr",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "td",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "lotteryBlock" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.my_stat.main" })
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
                                    "ul",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.my_stat.regs_all" }),
                                        " ",
                                        _this.state.my_stat.tickets
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.my_stat.win_all" }),
                                        " ",
                                        _this.state.my_stat.tokens
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "li",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.my_stat.try" }),
                                        " ",
                                        _this.state.my_stat.purchase_total
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "accDetails" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.details.main" })
                                ),
                                _this.getMyHistoryDetails()
                            )
                        )
                    )
                )
            );
        };

        _this.getMyHistoryDetails = function () {
            var details = _this.state.my_stat_details;
            return details.map(function (item, index) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { key: index },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        { style: { listStyleType: "square" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            "operationId ",
                            item.operationId
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.details.trx" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                {
                                    href: "https://bts.ai/tx/" + item.trx_id,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                },
                                item.trx_id
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.details.num_blocks" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                {
                                    href: "https://bts.ai/block/" + item.blocknumber,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                },
                                item.blocknumber
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.details.tickets" }),
                            " ",
                            item.tickets
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.details.tokens" }),
                            " ",
                            item.tokens
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.details.start" }),
                            " ",
                            item.random_start
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)
                );
            });
        };

        _this.state = {
            uri: "https://lottery.rudex.org/api/lottery/",
            LotteryNotice1Informed: false,
            updating: true,

            common_stat: {},
            my_stat: {},
            my_stat_details: []
        };

        _this._setCommonStat = _this._setCommonStat.bind(_this);
        _this._setMyStat = _this._setMyStat.bind(_this);
        _this._setMyStatDetails = _this._setMyStatDetails.bind(_this);
        return _this;
    }

    _createClass(LotteryPage, [{
        key: "onLotteryNotice1Informed",
        value: function onLotteryNotice1Informed() {
            this.setState({
                LotteryNotice1Informed: !this.state.LotteryNotice1Informed
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            setInterval(function () {
                return _this2._getStats(_this2._setCommonStat, _this2._setMyStat, _this2._setMyStatDetails);
            }, 5000);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (nextState.updating == false) return true;
            return false;
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
        key: "_setCommonStat",
        value: function _setCommonStat(data) {
            var common_stat = data;
            this.setState({ common_stat: common_stat });
        }
    }, {
        key: "_setMyStat",
        value: function _setMyStat(data) {
            var my_stat = data;
            this.setState({ my_stat: my_stat });
        }
    }, {
        key: "_setMyStatDetails",
        value: function _setMyStatDetails(data) {
            var my_stat_details = data;
            this.setState({ my_stat_details: my_stat_details });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "listingTable__row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LotterySendModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        id: "send_modal_listing",
                        refCallback: function refCallback(e) {
                            if (e) _this4.send_modal = e;
                        },
                        from_name: this.props.currentAccount,
                        to_name: "rudex-lottery",
                        asset_id: "1.3.5878"
                    })
                ),
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
                                "label",
                                {
                                    className: "horizontal",
                                    style: { backgroundColor: "white" }
                                },
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
                                            { style: { margin: "10px" } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "lottery.loading" }),
                                            " "
                                        ) : this.getContent()
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "_getStats",
        value: function _getStats(stateCallback1, stateCallback2, stateCallback3) {
            var _this5 = this;

            this.setState({
                updating: true
            });

            var uri1 = this.state.uri + "stats";
            fetch(uri1, {
                method: "get"
            }).then(function (reply) {
                var reply1 = reply;

                var uri2 = _this5.state.uri + "account/" + _this5.props.currentAccount;

                fetch(uri2, {
                    method: "get"
                }).then(function (reply) {
                    reply.json().then(function (json) {
                        if (stateCallback2) stateCallback2(json.stats);
                        if (stateCallback3) stateCallback3(json.details);
                    });

                    reply1.json().then(function (json) {
                        if (stateCallback1) stateCallback1(json.stats);
                    });

                    _this5.setState({
                        updating: false
                    });
                }).catch(function (err) {
                    console.log("fetch error:", err);
                });
            }).catch(function (err) {
                console.log("fetch error:", err);
            });
        }
    }]);

    return LotteryPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

LotteryPage = Object(alt_react__WEBPACK_IMPORTED_MODULE_12__["connect"])(LotteryPage, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"], _stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
    },
    getProps: function getProps() {
        return {
            settings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().settings,
            currentAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().passwordAccount
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (LotteryPage);

/***/ }),

/***/ 3229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2146);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2145);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(574);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1907);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(441);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2148);
/* harmony import */ var _AccountSelectorLottery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3230);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2159);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(608);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(757);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2168);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(606);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(619);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var LotterySendModal = function (_SendModal) {
    _inherits(LotterySendModal, _SendModal);

    function LotterySendModal(props) {
        _classCallCheck(this, LotterySendModal);

        return _possibleConstructorReturn(this, (LotterySendModal.__proto__ || Object.getPrototypeOf(LotterySendModal)).call(this, props));
    }

    _createClass(LotterySendModal, [{
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
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                content: "lottery.modal.header",
                                wallet_name: Object(_branding__WEBPACK_IMPORTED_MODULE_13__["getWalletName"])()
                            })
                        ),
                        this.state.open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Form"],
                            {
                                className: "full-width-wrapper",
                                layout: "vertical"
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccountSelectorLottery__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccountSelectorLottery__WEBPACK_IMPORTED_MODULE_8__["default"], {
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

    return LotterySendModal;
}(_Modal_SendModal__WEBPACK_IMPORTED_MODULE_2__["SendModal"]);

var LotterySendModalConnectWrapper = function (_React$Component) {
    _inherits(LotterySendModalConnectWrapper, _React$Component);

    function LotterySendModalConnectWrapper() {
        _classCallCheck(this, LotterySendModalConnectWrapper);

        return _possibleConstructorReturn(this, (LotterySendModalConnectWrapper.__proto__ || Object.getPrototypeOf(LotterySendModalConnectWrapper)).apply(this, arguments));
    }

    _createClass(LotterySendModalConnectWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LotterySendModal, _extends({}, this.props, { ref: this.props.refCallback }));
        }
    }]);

    return LotterySendModalConnectWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

LotterySendModalConnectWrapper = Object(alt_react__WEBPACK_IMPORTED_MODULE_5__["connect"])(LotterySendModalConnectWrapper, {
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

/* harmony default export */ __webpack_exports__["default"] = (LotterySendModalConnectWrapper);

/***/ }),

/***/ 3230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(592);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1907);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2163);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(574);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(590);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1913);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(441);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2025);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2026);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(608);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1915);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(591);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(761);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(851);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(757);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2162);
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

var AccountSelectorLottery = function (_React$Component) {
    _inherits(AccountSelectorLottery, _React$Component);

    function AccountSelectorLottery(props) {
        _classCallCheck(this, AccountSelectorLottery);

        var _this = _possibleConstructorReturn(this, (AccountSelectorLottery.__proto__ || Object.getPrototypeOf(AccountSelectorLottery)).call(this, props));

        _this.state = {
            accountIndex: [],
            locked: null
        };
        _this.timer = null;
        return _this;
    }

    _createClass(AccountSelectorLottery, [{
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

    return AccountSelectorLottery;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AccountSelectorLottery.propTypes = {
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
AccountSelectorLottery.defaultProps = {
    autosubscribe: false,
    excludeAccounts: [],
    disabled: null,
    editable: null,
    locked: false,
    requireActiveSelect: true, // Should not be set to false, required for fallback
    noForm: false
};


AccountSelectorLottery = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(AccountSelectorLottery);

AccountSelectorLottery = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(AccountSelectorLottery, {
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

/* harmony default export */ __webpack_exports__["default"] = (AccountSelectorLottery);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG90dGVyeS4zY2U0NWQ5NWUzZDVlZGU1NTU2MC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Mb3R0ZXJ5L0xvdHRlcnlQYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTG90dGVyeS9Mb3R0ZXJ5U2VuZE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvTG90dGVyeS9BY2NvdW50U2VsZWN0b3JMb3R0ZXJ5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0xvdHRlcnlQYWdlLmNzc1wiO1xuXG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IHtGZXRjaENoYWlufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcblxuLy89PT09PT1cbmltcG9ydCBTZW5kTW9kYWwgZnJvbSBcIi4vTG90dGVyeVNlbmRNb2RhbFwiO1xuaW1wb3J0IHtJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuXG5jbGFzcyBMb3R0ZXJ5UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB1cmk6IFwiaHR0cHM6Ly9sb3R0ZXJ5LnJ1ZGV4Lm9yZy9hcGkvbG90dGVyeS9cIixcbiAgICAgICAgICAgIExvdHRlcnlOb3RpY2UxSW5mb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdXBkYXRpbmc6IHRydWUsXG5cbiAgICAgICAgICAgIGNvbW1vbl9zdGF0OiB7fSxcbiAgICAgICAgICAgIG15X3N0YXQ6IHt9LFxuICAgICAgICAgICAgbXlfc3RhdF9kZXRhaWxzOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldENvbW1vblN0YXQgPSB0aGlzLl9zZXRDb21tb25TdGF0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3NldE15U3RhdCA9IHRoaXMuX3NldE15U3RhdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9zZXRNeVN0YXREZXRhaWxzID0gdGhpcy5fc2V0TXlTdGF0RGV0YWlscy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uTG90dGVyeU5vdGljZTFJbmZvcm1lZCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBMb3R0ZXJ5Tm90aWNlMUluZm9ybWVkOiAhdGhpcy5zdGF0ZS5Mb3R0ZXJ5Tm90aWNlMUluZm9ybWVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0U3RhdHMoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldENvbW1vblN0YXQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldE15U3RhdCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0TXlTdGF0RGV0YWlsc1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICA1MDAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmIChuZXh0U3RhdGUudXBkYXRpbmcgPT0gZmFsc2UpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJpZ2dlclNlbmQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZF9hc3NldDogYXNzZXR9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kX21vZGFsKSB0aGlzLnNlbmRfbW9kYWwuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2V0Q29tbW9uU3RhdChkYXRhKSB7XG4gICAgICAgIGxldCBjb21tb25fc3RhdCA9IGRhdGE7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbW1vbl9zdGF0fSk7XG4gICAgfVxuXG4gICAgX3NldE15U3RhdChkYXRhKSB7XG4gICAgICAgIGxldCBteV9zdGF0ID0gZGF0YTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bXlfc3RhdH0pO1xuICAgIH1cblxuICAgIF9zZXRNeVN0YXREZXRhaWxzKGRhdGEpIHtcbiAgICAgICAgbGV0IG15X3N0YXRfZGV0YWlscyA9IGRhdGE7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe215X3N0YXRfZGV0YWlsc30pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNlbmRNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZW5kX21vZGFsX2xpc3RpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB0aGlzLnNlbmRfbW9kYWwgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fbmFtZT17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvX25hbWU9e1wicnVkZXgtbG90dGVyeVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ9e1wiMS4zLjU4NzhcIn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKlRhYnMqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgc21hbGwtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtdXAtMSBtZWRpdW0tdXAtMSBsYXJnZS11cC0xIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudXBkYXRpbmcgPT09IHRydWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5LmxvYWRpbmdcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb250ZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfZ2V0U3RhdHMoc3RhdGVDYWxsYmFjazEsIHN0YXRlQ2FsbGJhY2syLCBzdGF0ZUNhbGxiYWNrMykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHVwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB1cmkxID0gdGhpcy5zdGF0ZS51cmkgKyBcInN0YXRzXCI7XG4gICAgICAgIGZldGNoKHVyaTEsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIlxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVwbHkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXBseTEgPSByZXBseTtcblxuICAgICAgICAgICAgICAgIGxldCB1cmkyID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51cmkgKyBcImFjY291bnQvXCIgKyB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50O1xuXG4gICAgICAgICAgICAgICAgZmV0Y2godXJpMiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXBseSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBseS5qc29uKCkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVDYWxsYmFjazIpIHN0YXRlQ2FsbGJhY2syKGpzb24uc3RhdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUNhbGxiYWNrMykgc3RhdGVDYWxsYmFjazMoanNvbi5kZXRhaWxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBseTEuanNvbigpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQ2FsbGJhY2sxKSBzdGF0ZUNhbGxiYWNrMShqc29uLnN0YXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZXJyb3I6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZXJyb3I6XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBsZXQgbGlua19ydSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vZ29sb3MuaWQvcnUtLWJsb2tjaGVpam4vQHJ1ZGV4L25hY2hhbG5vZS1yYXNwcmVkZWxlbmllLXRva2Vub3YtYmxva2NoZWluYS1ncmFwaGVuZS1vdC1rb21hbmR5LXJ1ZGV4P2ludml0ZT1ydWRleFwiO1xuICAgICAgICBsZXQgbGlua19lbiA9XG4gICAgICAgICAgICBcImh0dHBzOi8vc3RlZW1pdC5jb20vYmxvY2tjaGFpbi9AcnVkZXgvZ3JhcGhlbmUtYmxvY2tjaGFpbi1ieS1ydWRleC10ZWFtLWluaXRpYWwtZGlzdHJpYnV0aW9uLWFubm91bmNlbWVudFwiO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvdHRlcnlUYWJsZVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDIsIGZvbnRTaXplOiBcIjEuMHJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcIi9tYXJrZXQvUlVERVguTE9UVEVSWV9SVURFWC5CVENcIn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibG90dGVyeS5idXlcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbjogMiwgZm9udFNpemU6IFwiMS4wcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIlJVREVYLkxPVFRFUllcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExPVFRFUllcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e1wibG90dGVyeVRhYmxlXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJsb3R0ZXJ5QmxvY2tcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5LnRleHQubWFpblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJsb3R0ZXJ5QmxvY2tcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5LmFsbF9zdGF0Lm1haW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5LnRleHQuYmxvY2tfMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjJyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dwaC5haVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1BIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxvdHRlcnkudGV4dC5ibG9ja18xMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibG90dGVyeS50ZXh0LmJsb2NrXzEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvbWFya2V0L1JVREVYLkxPVFRFUllfUlVERVguQlRDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIlJVREVYLkxPVFRFUllcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMT1RURVJZL0JUQ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5LnRleHQuYmxvY2tfMTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIycmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PSBcInJ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGxpbmtfcnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxpbmtfZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxvdHRlcnkubW9yZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxvdHRlcnkudGV4dC5ibG9ja18yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibG90dGVyeS50ZXh0LmJsb2NrXzNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRyaWdnZXJTZW5kLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuNTg3OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSVURFWC5MT1RURVJZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibG90dGVyeS5yZWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxvdHRlcnkuYWxsX3N0YXQucmVnc19hbGxcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb21tb25fc3RhdC50aWNrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5LmFsbF9zdGF0Lndpbl9hbGxcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb21tb25fc3RhdC50b2tlbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxvdHRlcnkuYWxsX3N0YXQudHJ5XCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29tbW9uX3N0YXQucHVyY2hhc2VfdG90YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtcImxvdHRlcnlUYWJsZVwifSBzdHlsZT17e3dpZHRoOiBcIjUwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImxvdHRlcnlCbG9ja1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxvdHRlcnkubXlfc3RhdC5tYWluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibG90dGVyeS5teV9zdGF0LnJlZ3NfYWxsXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubXlfc3RhdC50aWNrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5Lm15X3N0YXQud2luX2FsbFwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm15X3N0YXQudG9rZW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5Lm15X3N0YXQudHJ5XCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubXlfc3RhdC5wdXJjaGFzZV90b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYWNjRGV0YWlsc1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxvdHRlcnkuZGV0YWlscy5tYWluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldE15SGlzdG9yeURldGFpbHMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGdldE15SGlzdG9yeURldGFpbHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkZXRhaWxzID0gdGhpcy5zdGF0ZS5teV9zdGF0X2RldGFpbHM7XG4gICAgICAgIHJldHVybiBkZXRhaWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlVHlwZTogXCJzcXVhcmVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm9wZXJhdGlvbklkIHtpdGVtLm9wZXJhdGlvbklkfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibG90dGVyeS5kZXRhaWxzLnRyeFwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1wiaHR0cHM6Ly9idHMuYWkvdHgvXCIgKyBpdGVtLnRyeF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50cnhfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5LmRldGFpbHMubnVtX2Jsb2Nrc1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2J0cy5haS9ibG9jay9cIiArIGl0ZW0uYmxvY2tudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmJsb2NrbnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibG90dGVyeS5kZXRhaWxzLnRpY2tldHNcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aWNrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5LmRldGFpbHMudG9rZW5zXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udG9rZW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsb3R0ZXJ5LmRldGFpbHMuc3RhcnRcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5yYW5kb21fc3RhcnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbkxvdHRlcnlQYWdlID0gY29ubmVjdChcbiAgICBMb3R0ZXJ5UGFnZSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncyxcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG90dGVyeVBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1NlbmRNb2RhbH0gZnJvbSBcIi4uL01vZGFsL1NlbmRNb2RhbFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xuaW1wb3J0IEFjY291bnRTZWxlY3RvckxvdHRlcnkgZnJvbSBcIi4vQWNjb3VudFNlbGVjdG9yTG90dGVyeVwiO1xuaW1wb3J0IEZlZUFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtpc05hTn0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtGb3JtLCBNb2RhbCwgQnV0dG9uLCBUb29sdGlwLCBJbnB1dH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtnZXRXYWxsZXROYW1lfSBmcm9tIFwiLi4vLi4vYnJhbmRpbmdcIjtcbmltcG9ydCB7QXNzZXR9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uL01hcmtldENsYXNzZXNcIjtcblxuY2xhc3MgTG90dGVyeVNlbmRNb2RhbCBleHRlbmRzIFNlbmRNb2RhbCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKG5wLnRvX25hbWUgIT09IHRoaXMuc3RhdGUudG9fbmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9fbmFtZTogbnAudG9fbmFtZSA/IG5wLnRvX25hbWUgOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IG5wLnRvX25hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldEFjY291bnQobnAudG9fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHByb3Bvc2UsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICBhc3NldF9pZCxcbiAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIHRvX25hbWUsXG4gICAgICAgICAgICBmcm9tX25hbWUsXG4gICAgICAgICAgICBtZW1vLFxuICAgICAgICAgICAgYmFsYW5jZUVycm9yLFxuICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgZnJvbV9teV9hY2NvdW50ID1cbiAgICAgICAgICAgIEFjY291bnRTdG9yZS5pc015QWNjb3VudChmcm9tX2FjY291bnQpIHx8XG4gICAgICAgICAgICBmcm9tX25hbWUgPT09IHRoaXMucHJvcHMucGFzc3dvcmRBY2NvdW50O1xuICAgICAgICBsZXQgZnJvbV9lcnJvciA9XG4gICAgICAgICAgICBmcm9tX2FjY291bnQgJiYgIWZyb21fbXlfYWNjb3VudCAmJiAhcHJvcG9zZSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikgJiYgIWZyb21fZXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgICAgIGxldCBfZXJyb3IgPSB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IGFzc2V0ID8gYXNzZXQuZ2V0KFwiaWRcIikgOiBhc3NldF90eXBlc1swXTtcblxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0VG90YWwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtfZXJyb3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0Z1bmRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvcG9zZV9pbmNvbXBsZXRlID0gcHJvcG9zZSAmJiAhcHJvcG9zZV9hY2NvdW50O1xuICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChhbW91bnQsIC8sL2csIFwiXCIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlzQW1vdW50VmFsaWQgPSBhbW91bnRWYWx1ZSAmJiAhaXNOYU4oYW1vdW50VmFsdWUpO1xuICAgICAgICBjb25zdCBpc1N1Ym1pdE5vdFZhbGlkID1cbiAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcbiAgICAgICAgICAgICF0b19hY2NvdW50IHx8XG4gICAgICAgICAgICAhaXNBbW91bnRWYWxpZCB8fFxuICAgICAgICAgICAgIWFzc2V0IHx8XG4gICAgICAgICAgICBmcm9tX2Vycm9yIHx8XG4gICAgICAgICAgICBwcm9wb3NlX2luY29tcGxldGUgfHxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvciB8fFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09IHRvX2FjY291bnQuZ2V0KFwiaWRcIik7XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gdGhpcy5wcm9wcy50YWJJbmRleDsgLy8gQ29udGludWUgdGFiSW5kZXggb24gcHJvcHMgY291bnRcblxuICAgICAgICByZXR1cm4gIXRoaXMuc3RhdGUub3BlbiA/IG51bGwgOiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgaWQ9XCJzZW5kX21vZGFsX3dyYXBwZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aGlkZGVuIHx8ICF0aGlzLnN0YXRlLm9wZW4gPyBcImhpZGVcIiA6IFwiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0Tm90VmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJvcG9zZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zZmVyLnNlbmRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiBcIjE4cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImxvdHRlcnkubW9kYWwuaGVhZGVyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldF9uYW1lPXtnZXRXYWxsZXROYW1lKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmdWxsLXdpZHRoLXdyYXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yTG90dGVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Zyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZnJvbUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uRnJvbUFjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JMb3R0ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci50b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RvX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dG9fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uVG9BY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfdHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYXNzZXRzPXthc3NldF90eXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOYU49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBMb3R0ZXJ5U2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMb3R0ZXJ5U2VuZE1vZGFsIHsuLi50aGlzLnByb3BzfSByZWY9e3RoaXMucHJvcHMucmVmQ2FsbGJhY2t9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Mb3R0ZXJ5U2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIgPSBjb25uZWN0KFxuICAgIExvdHRlcnlTZW5kTW9kYWxDb25uZWN0V3JhcHBlcixcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcyhwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg6IHByb3BzLnRhYkluZGV4IHx8IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb3R0ZXJ5U2VuZE1vZGFsQ29ubmVjdFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudEltYWdlIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRJbWFnZVwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge1xuICAgIENoYWluU3RvcmUsXG4gICAgUHVibGljS2V5LFxuICAgIENoYWluVmFsaWRhdGlvbixcbiAgICBGZXRjaENoYWluLFxuICAgIEZldGNoQ2hhaW5PYmplY3RzXG59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IGFjY291bnRVdGlscyBmcm9tIFwiY29tbW9uL2FjY291bnRfdXRpbHNcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7XG4gICAgVG9vbHRpcCxcbiAgICBCdXR0b24sXG4gICAgSW5wdXQsXG4gICAgSWNvbiBhcyBBbnRJY29uLFxuICAgIFNlbGVjdCxcbiAgICBGb3JtXG59IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcblxuY29uc3QgTUFYX0xPT0tVUF9BVFRFTVBUUyA9IDU7XG4vKlxuICogQGJyaWVmIEFsbG93cyB0aGUgdXNlciB0byBlbnRlciBhbiBhY2NvdW50IGJ5IG5hbWUgb3IgI0lEXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgZGVzaWduZWQgdG8gYmUgc3RhdGVsZXNzIGFzIHBvc3NpYmxlLiAgSXQncyBwcmltYXJ5IHJlc3BvbnNiaWxpdHkgaXMgdG9cbiAqIG1hbmFnZSB0aGUgbGF5b3V0IG9mIGRhdGEgYW5kIHRvIGZpbHRlciB0aGUgdXNlciBpbnB1dC5cbiAqXG4gKi9cblxuY2xhc3MgQWNjb3VudFNlbGVjdG9yTG90dGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGEgdHJhbnNsYXRpb24ga2V5IGZvciB0aGUgbGFiZWxcbiAgICAgICAgZXJyb3I6IFByb3BUeXBlcy5lbGVtZW50LCAvLyB0aGUgZXJyb3IgbWVzc2FnZSBvdmVycmlkZVxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIHBsYWNlaG9sZGVyIHRleHQgdG8gYmUgZGlzcGxheWVkIHdoZW4gdGhlcmUgaXMgbm8gdXNlcl9pbnB1dFxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIHRvIGJlIGNhbGxlZCBhbnkgdGltZSB1c2VyIGlucHV0IGNoYW5nZXNcbiAgICAgICAgb25BY2NvdW50Q2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIGV4aXN0aW5nIGFjY291bnQgaXMgc2VsZWN0ZWRcbiAgICAgICAgb25BY3Rpb246IFByb3BUeXBlcy5mdW5jLCAvLyBhIG1ldGhvZCBjYWxsZWQgd2hlbiBBZGQgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgICAgYWNjb3VudE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBhY2NvdW50IHNlbGVjdG9yLCB0aGUgc3RyaW5nIHRoZSB1c2VyIGVudGVyc1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudCwgLy8gYWNjb3VudCBvYmplY3QgcmV0cmlldmVkIHZpYSBCaW5kVG9DaGFpblN0YXRlIGRlY29yYXRvciAobm90IGlucHV0KVxuICAgICAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlciwgLy8gdGFiaW5kZXggcHJvcGVydHkgdG8gYmUgcGFzc2VkIHRvIGlucHV0IHRhZ1xuICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCwgLy8gdXNlIGl0IGlmIHlvdSBuZWVkIHRvIGRpc2FibGUgYWN0aW9uIGJ1dHRvbixcbiAgICAgICAgYWxsb3dVcHBlcmNhc2U6IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgaXQgaWYgeW91IG5lZWQgdG8gYWxsb3cgdXBwZXJjYXNlIGxldHRlcnNcbiAgICAgICAgdHlwZWFoZWFkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZXhjbHVkZUFjY291bnRzOiBQcm9wVHlwZXMuYXJyYXksIC8vIGFycmF5IG9mIGFjY291bnRzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgdHlwZWFoZWFkXG4gICAgICAgIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBlZGl0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGxvY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHJlcXVpcmVBY3RpdmVTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBub0Zvcm06IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGF1dG9zdWJzY3JpYmU6IGZhbHNlLFxuICAgICAgICBleGNsdWRlQWNjb3VudHM6IFtdLFxuICAgICAgICBkaXNhYmxlZDogbnVsbCxcbiAgICAgICAgZWRpdGFibGU6IG51bGwsXG4gICAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICAgIHJlcXVpcmVBY3RpdmVTZWxlY3Q6IHRydWUsIC8vIFNob3VsZCBub3QgYmUgc2V0IHRvIGZhbHNlLCByZXF1aXJlZCBmb3IgZmFsbGJhY2tcbiAgICAgICAgbm9Gb3JtOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY2NvdW50SW5kZXg6IFtdLFxuICAgICAgICAgICAgbG9ja2VkOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge2FjY291bnQsIGFjY291bnROYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gUG9wdWxhdGUgYWNjb3VudCBzZWFyY2ggYXJyYXksIGZldGNoIG9ubHkgb25jZVxuICAgICAgICBpZiAoYWNjb3VudE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRoaXNUb0luZGV4KGFjY291bnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm15QWN0aXZlQWNjb3VudHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmNvbnRhY3RzLm1hcChhID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRoaXNUb0luZGV4KGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZmV0Y2hBY2NvdW50cygpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQWNjb3VudENoYW5nZWQgJiYgYWNjb3VudClcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZChhY2NvdW50KTtcblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMudHlwZWFoZWFkICYmIGFjY291bnROYW1lKVxuICAgICAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlZChhY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mb2N1cyAmJiAhIXRoaXMucHJvcHMuZWRpdGFibGUgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy51c2VyX2lucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldlByb3BzLmFjY291bnQgJiYgcHJldlByb3BzLmFjY291bnQgIT09IHRoaXMucHJvcHMuYWNjb3VudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZCh0aGlzLnByb3BzLmFjY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2FkZFRvSW5kZXgoYWNjb3VudE5hbWUsIG5vRGVsYXkgPSBmYWxzZSkge1xuICAgICAgICBpZiAobm9EZWxheSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYWNjb3VudE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fZmV0Y2hBY2NvdW50cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZFRvSW5kZXgoYWNjb3VudE5hbWUsIHRydWUpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9hZGRUaGlzVG9JbmRleChhY2NvdW50TmFtZSkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghYWNjb3VudE5hbWUpIHJldHVybjtcblxuICAgICAgICBsZXQgaW5BY2NvdW50TGlzdCA9IGFjY291bnRJbmRleC5maW5kKGEgPT4gYS5uYW1lID09PSBhY2NvdW50TmFtZSk7XG5cbiAgICAgICAgaWYgKGFjY291bnROYW1lICYmICFpbkFjY291bnRMaXN0KSB7XG4gICAgICAgICAgICBhY2NvdW50SW5kZXgucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICBhdHRlbXB0czogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0SW5kZXgobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4LmZpbmRJbmRleChhID0+IGEubmFtZSA9PT0gbmFtZSk7XG4gICAgfVxuXG4gICAgX2dldFNlYXJjaEFycmF5KCkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIC8vIEZvciBhbGwgb2JqZWN0cyBpbiBzZWFyY2hfYXJyYXksIHF1ZXJ5IHdpdGggRmV0Y2hDaGFpbk9iamVjdHNcbiAgICAgICAgLy8gVXBkYXRlIHJlc3VsdHMgZm9yIGVhY2ggb2JqZWN0IHdpdGggcmV0dXJuZWQgZGF0YSBhbmQgcmVtb3ZlIGZyb20gc2VhcmNoX2FycmF5XG4gICAgICAgIC8vIFVwZGF0ZSBzZWFyY2hfYXJyYXkgZm9yIGFsbCByZW1haW5pbmcgb2JqZWN0cyB3aXRoIGluY3JlYXNlZCBhdHRlbXB0cyBjb3VudFxuICAgICAgICAvLyB3aGljaCBpcyB3aGVuIGFjY291bnQgZG9lcyBub3QgZXhpc3RzLCBidXQgY2FuIGFsc28gYmUgaWYgbm9kZSBmYWlsZWQgdG8gc2VuZCByZXN1bHRzXG4gICAgICAgIC8vIGJhY2sgaW4gdGltZSwgc28gd2UgcXVlcnkgYXQgbGVhc3QgYE1BWF9MT09LVVBfQVRURU1QVFNgIHRpbWVzIGJlZm9yZSB3ZSBzdG9wXG5cbiAgICAgICAgLy8gRmlsdGVyIG91dCB3aGF0IG9iamVjdHMgd2Ugc3RpbGwgcmVxdWlyZSBkYXRhIGZvclxuICAgICAgICBsZXQgc2VhcmNoX2FycmF5ID0gYWNjb3VudEluZGV4XG4gICAgICAgICAgICAuZmlsdGVyKHNlYXJjaCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFzZWFyY2guZGF0YSAmJiBzZWFyY2guYXR0ZW1wdHMgPCBNQVhfTE9PS1VQX0FUVEVNUFRTXG4gICAgICAgICAgICAgICAgICAgID8gc2VhcmNoLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoc2VhcmNoID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoLm5hbWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VhcmNoX2FycmF5O1xuICAgIH1cblxuICAgIF9mZXRjaEFjY291bnRzKCkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBzZWFyY2hfYXJyYXkgPSB0aGlzLl9nZXRTZWFyY2hBcnJheSgpO1xuXG4gICAgICAgIGlmIChzZWFyY2hfYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKF9fREVWX18pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb29rZWQgZm9yIFwiICsgc2VhcmNoX2FycmF5Lmxlbmd0aCArIFwiIGFjY291bnRzXCIpO1xuICAgICAgICAgICAgRmV0Y2hDaGFpbk9iamVjdHMoXG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHNlYXJjaF9hcnJheSxcbiAgICAgICAgICAgICAgICAzMDAwLFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApLnRoZW4oYWNjb3VudHMgPT4ge1xuICAgICAgICAgICAgICAgIGFjY291bnRzLmZvckVhY2goYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0SW5kZXggPSB0aGlzLl9nZXRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fcG9wdWxhdGVBY2NvdW50SW5kZXgoYWNjb3VudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaF9hcnJheS5zcGxpY2UoYWNjb3VudC5nZXQoXCJuYW1lXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LmZvckVhY2goYWNjb3VudF90b19maW5kID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iamVjdEluZGV4ID0gdGhpcy5fZ2V0SW5kZXgoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X3RvX2ZpbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4W29iamVjdEluZGV4XS5hdHRlbXB0cysrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXg6IGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUnVuIGFub3RoZXIgZmV0Y2ggb2YgYWNjb3VudHMgaWYgZGF0YSBpcyBzdGlsbCBtaXNzaW5nXG4gICAgICAgICAgICAgICAgbGV0IGlzRGF0YU1pc3NpbmcgPSB0aGlzLnN0YXRlLmFjY291bnRJbmRleC5maW5kKFxuICAgICAgICAgICAgICAgICAgICBhID0+ICFhLmRhdGEgJiYgYS5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0YU1pc3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wdWxhdGVBY2NvdW50SW5kZXgoYWNjb3VudFJlc3VsdCkge1xuICAgICAgICBsZXQge215QWN0aXZlQWNjb3VudHMsIGNvbnRhY3RzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gU2hvdWxkIG5vdCBoYXBwZW4sIGp1c3QgZmFpbHNhZmVcbiAgICAgICAgaWYgKCFhY2NvdW50UmVzdWx0KSByZXR1cm4gbnVsbDtcblxuICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSBhY2NvdW50UmVzdWx0LmdldChcIm5hbWVcIik7XG4gICAgICAgIGxldCBhY2NvdW50U3RhdHVzID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50TWVtYmVyU3RhdHVzKGFjY291bnRSZXN1bHQpO1xuICAgICAgICBsZXQgYWNjb3VudFR5cGUgPSB0aGlzLmdldElucHV0VHlwZShhY2NvdW50TmFtZSk7XG5cbiAgICAgICAgbGV0IHN0YXR1c0xhYmVsID0gIWFjY291bnRVdGlscy5pc0tub3duU2NhbW1lcihhY2NvdW50TmFtZSlcbiAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5tZW1iZXIuXCIgKyBhY2NvdW50U3RhdHVzKVxuICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50Lm1lbWJlci5zdXNwZWN0ZWRfc2NhbW1lclwiKTtcblxuICAgICAgICBsZXQgcmlnaHRMYWJlbCA9XG4gICAgICAgICAgICBhY2NvdW50VHlwZSA9PT0gXCJuYW1lXCJcbiAgICAgICAgICAgICAgICA/IFwiI1wiICsgYWNjb3VudFJlc3VsdC5nZXQoXCJpZFwiKS5zdWJzdHJpbmcoNClcbiAgICAgICAgICAgICAgICA6IGFjY291bnRUeXBlID09PSBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50UmVzdWx0LmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgOiBhY2NvdW50VHlwZSA9PSBcInB1YmtleVwiICYmIHRoaXMucHJvcHMuYWxsb3dQdWJLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJQdWJsaWMgS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgICAgICBhdHRlbXB0czogMCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogYWNjb3VudFJlc3VsdC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBhY2NvdW50VHlwZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGFjY291bnRTdGF0dXMsXG4gICAgICAgICAgICAgICAgaXNPd25BY2NvdW50OiBteUFjdGl2ZUFjY291bnRzLmhhcyhhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgaXNDb250YWN0OiBjb250YWN0cy5oYXMoYWNjb3VudE5hbWUpLFxuICAgICAgICAgICAgICAgIGlzS25vd25TY2FtbWVyOiBhY2NvdW50VXRpbHMuaXNLbm93blNjYW1tZXIoYWNjb3VudE5hbWUpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0xhYmVsOiBzdGF0dXNMYWJlbCxcbiAgICAgICAgICAgICAgICByaWdodExhYmVsOiByaWdodExhYmVsLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudFV0aWxzLmlzS25vd25TY2FtbWVyKGFjY291bnROYW1lKSB8fCAhYWNjb3VudFJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5lZ2F0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNhbiBiZSB1c2VkIGluIHBhcmVudCBjb21wb25lbnQ6IHRoaXMucmVmcy5hY2NvdW50X3NlbGVjdG9yLmdldEFjY291bnQoKVxuICAgIGdldEFjY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmFjY291bnQ7XG4gICAgfVxuXG4gICAgZ2V0RXJyb3IoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWUsIGVycm9yLCB0eXBlYWhlYWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgaW5wdXRUeXBlID0gYWNjb3VudE5hbWUgPyB0aGlzLmdldElucHV0VHlwZShhY2NvdW50TmFtZSkgOiBudWxsO1xuXG4gICAgICAgIGlmICghdHlwZWFoZWFkKSB7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQgJiYgYWNjb3VudE5hbWUgJiYgaW5wdXRUeXBlICE9PSBcInB1YmtleVwiKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LmVycm9ycy51bmtub3duXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVHlwZWFoZWFkIGNhbid0IHNlbGVjdCBhbiB1bmtub3duIGFjY291bnQhXG4gICAgICAgICAgICAvLyBpZiAoXG4gICAgICAgICAgICAvLyAgICAgIShhbGxvd1B1YktleSAmJiBpbnB1dFR5cGUgPT09IFwicHVia2V5XCIpICYmXG4gICAgICAgICAgICAvLyAgICAgIWVycm9yICYmXG4gICAgICAgICAgICAvLyAgICAgYWNjb3VudE5hbWUgJiZcbiAgICAgICAgICAgIC8vICAgICAhYWNjb3VudFxuICAgICAgICAgICAgLy8gKVxuICAgICAgICAgICAgLy8gICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5lcnJvcnMudW5rbm93blwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IgJiYgYWNjb3VudCAmJiAhaW5wdXRUeXBlKVxuICAgICAgICAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LmVycm9ycy5pbnZhbGlkXCIpO1xuXG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICBnZXRJbnB1dFR5cGUodmFsdWUpIHtcbiAgICAgICAgLy8gT0tcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh2YWx1ZVswXSA9PT0gXCIjXCIgJiYgdXRpbHMuaXNfb2JqZWN0X2lkKFwiMS4yLlwiICsgdmFsdWUuc3Vic3RyaW5nKDEpKSlcbiAgICAgICAgICAgIHJldHVybiBcImlkXCI7XG4gICAgICAgIGlmIChDaGFpblZhbGlkYXRpb24uaXNfYWNjb3VudF9uYW1lKHZhbHVlLCB0cnVlKSkgcmV0dXJuIFwibmFtZVwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hbGxvd1B1YktleSAmJiBQdWJsaWNLZXkuZnJvbVB1YmxpY0tleVN0cmluZyh2YWx1ZSkpXG4gICAgICAgICAgICByZXR1cm4gXCJwdWJrZXlcIjtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0VmVyaWZpZWRBY2NvdW50TmFtZShlKSB7XG4gICAgICAgIGxldCB7YWxsb3dVcHBlcmNhc2V9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZTtcbiAgICAgICAgfSBlbHNlIGlmIChlICYmIGUudGFyZ2V0KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWxsb3dVcHBlcmNhc2UpIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBJZiByZWdleCBtYXRjaGVzIF4uKiMvYWNjb3VudC9hY2NvdW50LW5hbWUvLiokLCBwYXJzZSBvdXQgYWNjb3VudC1uYW1lXG4gICAgICAgIGxldCBfdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIlwiKS5tYXRjaCgvKD86XFwvYWNjb3VudFxcLykoLiopLyk7XG4gICAgICAgIGlmIChfdmFsdWUpIHZhbHVlID0gX3ZhbHVlWzFdO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBfbm90aWZ5T25DaGFuZ2Uoc2VsZWN0ZWRBY2NvdW50TmFtZSwgaW5wdXRUeXBlKSB7XG4gICAgICAgIGxldCB7cHJvcHN9ID0gdGhpcztcblxuICAgICAgICAvLyBDbGVhciBzZWxlY3RlZCBhY2NvdW50IHdoZW4gd2UgaGF2ZSBuZXcgaW5wdXQgZGF0YSBpZiB3ZSByZXF1aXJlIGFuIGFjdGl2ZSBzZWxlY3RcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaW5wdXRUeXBlID09IFwiaW5wdXRcIiAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy50eXBlYWhlYWQgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVxdWlyZUFjdGl2ZVNlbGVjdFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghIXByb3BzLm9uQWNjb3VudENoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkFjY291bnRDaGFuZ2VkKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEhcHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY2NvdW50TmFtZSA9IHRoaXMuZ2V0VmVyaWZpZWRBY2NvdW50TmFtZShzZWxlY3RlZEFjY291bnROYW1lKTtcblxuICAgICAgICAvLyBTeW5jaHJvbm91cyBvbkNoYW5nZSBmb3IgaW5wdXQgY2hhbmdlXG4gICAgICAgIGlmICghIXByb3BzLm9uQ2hhbmdlICYmICghIWFjY291bnROYW1lIHx8IGFjY291bnROYW1lID09PSBcIlwiKSkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXN5bmNocm9ub3VzIG9uQWNjb3VudENoYW5nZWQgZm9yIGNoZWNraW5nIG9uIGNoYWluXG4gICAgICAgIGlmICghIXByb3BzLm9uQWNjb3VudENoYW5nZWQpIHtcbiAgICAgICAgICAgIEZldGNoQ2hhaW4oXCJnZXRBY2NvdW50XCIsIGFjY291bnROYW1lLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICBbYWNjb3VudE5hbWVdOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgISFhY2NvdW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMucHJvcHMucmVxdWlyZUFjdGl2ZVNlbGVjdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZSA9PSBcInNlbGVjdFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLnJlcXVpcmVBY3RpdmVTZWxlY3QpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25BY2NvdW50Q2hhbmdlZChhY2NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNlbGVjdChzZWxlY3RlZEFjY291bnROYW1lKSB7XG4gICAgICAgIHRoaXMuX25vdGlmeU9uQ2hhbmdlKHNlbGVjdGVkQWNjb3VudE5hbWUsIFwic2VsZWN0XCIpO1xuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2VkKGUpIHtcbiAgICAgICAgdGhpcy5fYWRkVG9JbmRleCh0aGlzLmdldFZlcmlmaWVkQWNjb3VudE5hbWUoZSkpO1xuICAgICAgICB0aGlzLl9ub3RpZnlPbkNoYW5nZShlLCBcImlucHV0XCIpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgICAgICAgdGhpcy5vbkFjdGlvbihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbkFkZENvbnRhY3QoKSB7XG4gICAgICAgIEFjY291bnRBY3Rpb25zLmFkZEFjY291bnRDb250YWN0KHRoaXMucHJvcHMuYWNjb3VudE5hbWUpO1xuICAgIH1cblxuICAgIF9vblJlbW92ZUNvbnRhY3QoKSB7XG4gICAgICAgIEFjY291bnRBY3Rpb25zLnJlbW92ZUFjY291bnRDb250YWN0KHRoaXMucHJvcHMuYWNjb3VudE5hbWUpO1xuICAgIH1cblxuICAgIG9uQWN0aW9uKGUpIHtcbiAgICAgICAgbGV0IHtvbkFjdGlvbiwgZGlzYWJsZUFjdGlvbkJ1dHRvbiwgYWNjb3VudCwgYWNjb3VudE5hbWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXRoaXMuZ2V0RXJyb3IoKSAmJiBvbkFjdGlvbiAmJiAhZGlzYWJsZUFjdGlvbkJ1dHRvbikge1xuICAgICAgICAgICAgaWYgKGFjY291bnQpIG9uQWN0aW9uKGFjY291bnQpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nZXRJbnB1dFR5cGUoYWNjb3VudE5hbWUpID09PSBcInB1YmtleVwiKVxuICAgICAgICAgICAgICAgIG9uQWN0aW9uKGFjY291bnROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthY2NvdW50SW5kZXh9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQge2FjY291bnQsIGFjY291bnROYW1lLCBkaXNhYmxlQWN0aW9uQnV0dG9ufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHNlYXJjaEluUHJvZ3Jlc3MgPSB0aGlzLnN0YXRlLmFjY291bnRJbmRleC5maW5kKFxuICAgICAgICAgICAgYSA9PiAhYS5kYXRhICYmIGEuYXR0ZW1wdHMgPCBNQVhfTE9PS1VQX0FUVEVNUFRTXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbG9ja2VkU3RhdGUgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2NrZWQgIT09IG51bGwgPyB0aGlzLnN0YXRlLmxvY2tlZCA6IHRoaXMucHJvcHMubG9ja2VkO1xuXG4gICAgICAgIGxldCBlcnJvciA9IHRoaXMuZ2V0RXJyb3IoKSxcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIsXG4gICAgICAgICAgICBzZWxlY3RlZEFjY291bnQsXG4gICAgICAgICAgICBkaXNhYmxlZEFjdGlvbixcbiAgICAgICAgICAgIGRpc2FibGVkSW5wdXQsXG4gICAgICAgICAgICBlZGl0YWJsZUlucHV0LFxuICAgICAgICAgICAgbGlua2VkX3N0YXR1cztcblxuICAgICAgICBlZGl0YWJsZUlucHV0ID0gISFsb2NrZWRTdGF0ZVxuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLmVkaXRhYmxlICE9IG51bGxcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuZWRpdGFibGVcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgICBkaXNhYmxlZElucHV0ID0gISFsb2NrZWRTdGF0ZVxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuZGlzYWJsZWQgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFNlbGVjdGVkIEFjY291bnRcbiAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgIGxldCBvYmplY3RJbmRleCA9IHRoaXMuX2dldEluZGV4KGFjY291bnQuZ2V0KFwibmFtZVwiKSwgYWNjb3VudEluZGV4KTtcblxuICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50ID1cbiAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXggJiYgYWNjb3VudEluZGV4W29iamVjdEluZGV4XVxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRJbmRleFtvYmplY3RJbmRleF0uZGF0YVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNhYmxlZEFjdGlvbiA9XG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIGFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC50eXBlID09PSBcInB1YmtleVwiKVxuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgZXJyb3IgfHxcbiAgICAgICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b247XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQuaXNPd25BY2NvdW50KSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLm93bl9hY2NvdW50XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcCBncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LmlzS25vd25TY2FtbWVyKSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLnNjYW1fYWNjb3VudFwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAgcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwid2FybmluZ1wiIHRoZW1lPVwiZmlsbGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC5pc0NvbnRhY3QpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuZm9sbG93X3VzZXJcIil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlQ29udGFjdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcCBncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInN0YXJcIiB0aGVtZT1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjb3VudCkge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5mb2xsb3dfdXNlcl9hZGRcIil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQWRkQ29udGFjdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGVhaGVhZCkge1xuICAgICAgICAgICAgbGV0IG9wdGlvbnNDb250YWluZXIgPSBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgYWNjb3VudHMgYmFzZWQgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gLSBFeGNsdWRlIHdpdGhvdXQgcmVzdWx0cyAobWlzc2luZyBjaGFpbiBkYXRhIGF0IHRoZSBtb21lbnQpXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gRXhjbHVkZWQgYWNjb3VudHMgKGJ5IHByb3BzKVxuICAgICAgICAgICAgICAgICAgICAvLyAtIEluY2x1ZGUgdXNlcnMgb3duIGFjY291bnRzIChpc093bkFjY291bnQpXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gSW5jbHVkZSB1c2VycyBjb250YWN0cyAoaXNDb250YWN0KSB1bmxlc3MgaXQncyBhIHByZXZpb3VzbHkgbG9ja2VkIGlucHV0XG4gICAgICAgICAgICAgICAgICAgIC8vIC0gSW5jbHVkZSBjdXJyZW50IGlucHV0XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmV4Y2x1ZGVBY2NvdW50cy5pbmRleE9mKGFjY291bnQuaWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5kYXRhLmlzT3duQWNjb3VudCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnByb3BzLmxvY2tlZCAmJiBhY2NvdW50LmRhdGEuaXNDb250YWN0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGFjY291bnROYW1lICYmIGFjY291bnQuZGF0YS5uYW1lID09PSBhY2NvdW50TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGF0YS5pc093bkFjY291bnQgPCBiLmRhdGEuaXNPd25BY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5kYXRhLm5hbWUgPiBiLmRhdGEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YWNjb3VudC5kYXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50LmRhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWNjb3VudC5kYXRhLmRpc2FibGVkID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLmlzT3duQWNjb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInVzZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuaXNDb250YWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5pc0tub3duU2NhbW1lciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cIndhcm5pbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5zdGF0dXNMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvcm1Db250YWluZXIgPSAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkxhYmVsUHJvcD17XCJ2YWx1ZVwifVxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5vbklucHV0Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5zZWFyY2hcIil9XG4gICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2xvYmFsLm5vdF9mb3VuZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQWNjb3VudCA/IHNlbGVjdGVkQWNjb3VudC5uYW1lIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkSW5wdXQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnNDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lciA9IChcbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC50eXBlID09PSBcInB1YmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibG93ZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250VmFyaWFudDogXCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuZWRpdGFibGUgPyBcInVzZXJuYW1lXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFjY291bnROYW1lIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgcmVmPVwidXNlcl9pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZWRpdGFibGUgfHwgISF0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy50YWJJbmRleFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICEhZWRpdGFibGVJbnB1dCA/IGVkaXRhYmxlSW5wdXQudG9TdHJpbmcoKSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICEhZWRpdGFibGVJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKCFlZGl0YWJsZUlucHV0KS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjY291bnRJbWFnZUNvbnRhaW5lciA9IHRoaXMucHJvcHNcbiAgICAgICAgICAgIC5oaWRlSW1hZ2UgPyBudWxsIDogc2VsZWN0ZWRBY2NvdW50ICYmXG4gICAgICAgIHNlbGVjdGVkQWNjb3VudC5hY2NvdW50VHlwZSA9PT0gXCJwdWJrZXlcIiA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJrZXlcIiB0aXRsZT1cImljb25zLmtleVwiIHNpemU9XCI0eFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcbiAgICAgICAgICAgICAgICBzaXplPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5zaXplIHx8IDMzLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy5zaXplIHx8IDMzXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhY2NvdW50PXtzZWxlY3RlZEFjY291bnQgPyBzZWxlY3RlZEFjY291bnQubmFtZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgY3VzdG9tX2ltYWdlPXtudWxsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgbG9ja2VkU3RhdGVDb250YWluZXIgPSAhbG9ja2VkU3RhdGUgPyBudWxsIDogXCJcIjtcblxuICAgICAgICBsZXQgcmlnaHRMYWJlbENvbnRhaW5lciA9XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5sYWJlbCB8fCAhc2VsZWN0ZWRBY2NvdW50ID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlci1hcmVhXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuaGlkZUltYWdlID8gXCIgbm8tbWFyZ2luXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQuaXNDb250YWN0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmlzT3duQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicG9zaXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmlzS25vd25TY2FtbWVyID8gXCJuZWdhdGl2ZVwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAtMzB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIwLjVyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEFjY291bnQucmlnaHRMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRBY2NvdW50LmRpc3BsYXlUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtlZF9zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IEZvcm1XcmFwcGVyID0gdGhpcy5wcm9wcy5ub0Zvcm0gPyBSZWFjdC5GcmFnbWVudCA6IEZvcm07XG4gICAgICAgIGNvbnN0IGZvcm1XcmFwcGVyUHJvcHMgPSB0aGlzLnByb3BzLm5vRm9ybVxuICAgICAgICAgICAgPyB7fVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZnVsbC13aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgbGF5b3V0OiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWFyZWFcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRvb2x0aXB9XG4gICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvcm1XcmFwcGVyIHsuLi5mb3JtV3JhcHBlclByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17ZXJyb3IgPyBcImVycm9yXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD17ZXJyb3IgPyBlcnJvciA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyaWdodExhYmVsQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudXNlSFIgJiYgPGhyIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50SW1hZ2VDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1Db250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaEluUHJvZ3Jlc3MgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJsb2FkaW5nXCIgc3R5bGU9e3twYWRkaW5nOiAxMH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2tlZFN0YXRlQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9uQWN0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAucmVxdWlyZWRfaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2xvYmFsLmZpZWxkX3R5cGUuYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWN0aW9uLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnByb3BzLmFjdGlvbl9sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Zvcm1XcmFwcGVyPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQWNjb3VudFNlbGVjdG9yTG90dGVyeSA9IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudFNlbGVjdG9yTG90dGVyeSk7XG5cbkFjY291bnRTZWxlY3RvckxvdHRlcnkgPSBjb25uZWN0KFxuICAgIEFjY291bnRTZWxlY3RvckxvdHRlcnksXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLm15QWN0aXZlQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgY29udGFjdHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRDb250YWN0c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRTZWxlY3RvckxvdHRlcnk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBcUpBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQUE7QUFOQTtBQURBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU5BO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFBQTtBQVRBO0FBaEJBO0FBd0NBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFPQTtBQUNBO0FBZEE7QUFnQkE7QUFoQkE7QUExQ0E7QUE4REE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFPQTtBQUNBO0FBUkE7QUFEQTtBQXJFQTtBQURBO0FBcUZBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQVRBO0FBREE7QUF0RkE7QUFiQTtBQURBO0FBd0hBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBVEE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFuQkE7QUFEQTtBQVJBO0FBREE7QUEzSUE7QUErS0E7QUFDQTtBQTNVQTtBQTZVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQUZBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFQQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBaENBO0FBcUNBO0FBdENBO0FBeUNBO0FBQ0E7QUFDQTtBQXpYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQWRBO0FBZUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBREE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUZBO0FBTEE7QUFKQTtBQURBO0FBREE7QUFEQTtBQWRBO0FBMENBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQW5KQTtBQUNBO0FBNlhBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBWEE7QUFDQTtBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFlQTtBQUdBO0FBQ0E7QUFwQkE7QUFBQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFOQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBVEE7QUFhQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBbkJBO0FBK0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFYQTtBQXBEQTtBQVhBO0FBL0JBO0FBSkE7QUFxSEE7Ozs7QUE5TkE7QUFDQTtBQWdPQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7Ozs7QUFMQTtBQUNBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBQ0E7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTs7O0FBaUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFHQTtBQUdBO0FBWEE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFoQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBVkE7QUFhQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQS9CQTtBQXNDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFoQkE7QUFOQTtBQUNBO0FBMEJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBVkE7QUFUQTtBQVhBO0FBREE7QUFMQTtBQW9EQTs7OztBQXZyQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFEQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFDQTtBQWlxQkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVEE7QUFDQTtBQVlBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=